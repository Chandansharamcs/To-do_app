(()=>{var cf=Object.create;var Fs=Object.defineProperty;var df=Object.getOwnPropertyDescriptor;var pf=Object.getOwnPropertyNames;var ff=Object.getPrototypeOf,mf=Object.prototype.hasOwnProperty;var un=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var hf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of pf(t))!mf.call(e,a)&&a!==n&&Fs(e,a,{get:()=>t[a],enumerable:!(r=df(t,a))||r.enumerable});return e};var $s=(e,t,n)=>(n=e!=null?cf(ff(e)):{},hf(t||!e||!e.__esModule?Fs(n,"default",{value:e,enumerable:!0}):n,e));var Ys=un(W=>{"use strict";var mr=Symbol.for("react.element"),gf=Symbol.for("react.portal"),vf=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),xf=Symbol.for("react.profiler"),kf=Symbol.for("react.provider"),bf=Symbol.for("react.context"),wf=Symbol.for("react.forward_ref"),Nf=Symbol.for("react.suspense"),Sf=Symbol.for("react.memo"),Ef=Symbol.for("react.lazy"),Os=Symbol.iterator;function Cf(e){return e===null||typeof e!="object"?null:(e=Os&&e[Os]||e["@@iterator"],typeof e=="function"?e:null)}var Js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ws=Object.assign,Hs={};function Dn(e,t,n){this.props=e,this.context=t,this.refs=Hs,this.updater=n||Js}Dn.prototype.isReactComponent={};Dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vs(){}Vs.prototype=Dn.prototype;function Ra(e,t,n){this.props=e,this.context=t,this.refs=Hs,this.updater=n||Js}var ei=Ra.prototype=new Vs;ei.constructor=Ra;Ws(ei,Dn.prototype);ei.isPureReactComponent=!0;var js=Array.isArray,Ks=Object.prototype.hasOwnProperty,ti={current:null},Gs={key:!0,ref:!0,__self:!0,__source:!0};function qs(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ks.call(t,r)&&!Gs.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:mr,type:e,key:i,ref:l,props:a,_owner:ti.current}}function Mf(e,t){return{$$typeof:mr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ni(e){return typeof e=="object"&&e!==null&&e.$$typeof===mr}function zf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Us=/\/+/g;function Za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zf(""+e.key):t.toString(36)}function xo(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mr:case gf:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Za(l,0):r,js(a)?(n="",e!=null&&(n=e.replace(Us,"$&/")+"/"),xo(a,t,n,"",function(c){return c})):a!=null&&(ni(a)&&(a=Mf(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Us,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",js(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Za(i,s);l+=xo(i,t,n,u,a)}else if(u=Cf(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Za(i,s++),l+=xo(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function yo(e,t,n){if(e==null)return e;var r=[],a=0;return xo(e,r,"","",function(i){return t.call(n,i,a++)}),r}function _f(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},ko={transition:null},Tf={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:ko,ReactCurrentOwner:ti};function Xs(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:yo,forEach:function(e,t,n){yo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return yo(e,function(){t++}),t},toArray:function(e){return yo(e,function(t){return t})||[]},only:function(e){if(!ni(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Dn;W.Fragment=vf;W.Profiler=xf;W.PureComponent=Ra;W.StrictMode=yf;W.Suspense=Nf;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf;W.act=Xs;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ws({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ti.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ks.call(t,u)&&!Gs.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:mr,type:e.type,key:a,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:kf,_context:e},e.Consumer=e};W.createElement=qs;W.createFactory=function(e){var t=qs.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:wf,render:e}};W.isValidElement=ni;W.lazy=function(e){return{$$typeof:Ef,_payload:{_status:-1,_result:e},_init:_f}};W.memo=function(e,t){return{$$typeof:Sf,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};W.unstable_act=Xs;W.useCallback=function(e,t){return De.current.useCallback(e,t)};W.useContext=function(e){return De.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return De.current.useDeferredValue(e)};W.useEffect=function(e,t){return De.current.useEffect(e,t)};W.useId=function(){return De.current.useId()};W.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return De.current.useMemo(e,t)};W.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};W.useRef=function(e){return De.current.useRef(e)};W.useState=function(e){return De.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return De.current.useTransition()};W.version="18.3.1"});var ri=un((dg,Qs)=>{"use strict";Qs.exports=Ys()});var lu=un(Y=>{"use strict";function li(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<bo(a,t))e[r]=t,e[n]=a,n=r;else break e}}function lt(e){return e.length===0?null:e[0]}function No(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>bo(s,n))u<a&&0>bo(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<a&&0>bo(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function bo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Zs=performance,Y.unstable_now=function(){return Zs.now()}):(oi=Date,Rs=oi.now(),Y.unstable_now=function(){return oi.now()-Rs});var Zs,oi,Rs,gt=[],Ft=[],Lf=1,Ze=null,Ce=3,So=!1,cn=!1,gr=!1,nu=typeof setTimeout=="function"?setTimeout:null,ru=typeof clearTimeout=="function"?clearTimeout:null,eu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function si(e){for(var t=lt(Ft);t!==null;){if(t.callback===null)No(Ft);else if(t.startTime<=e)No(Ft),t.sortIndex=t.expirationTime,li(gt,t);else break;t=lt(Ft)}}function ui(e){if(gr=!1,si(e),!cn)if(lt(gt)!==null)cn=!0,di(ci);else{var t=lt(Ft);t!==null&&pi(ui,t.startTime-e)}}function ci(e,t){cn=!1,gr&&(gr=!1,ru(vr),vr=-1),So=!0;var n=Ce;try{for(si(t),Ze=lt(gt);Ze!==null&&(!(Ze.expirationTime>t)||e&&!iu());){var r=Ze.callback;if(typeof r=="function"){Ze.callback=null,Ce=Ze.priorityLevel;var a=r(Ze.expirationTime<=t);t=Y.unstable_now(),typeof a=="function"?Ze.callback=a:Ze===lt(gt)&&No(gt),si(t)}else No(gt);Ze=lt(gt)}if(Ze!==null)var i=!0;else{var l=lt(Ft);l!==null&&pi(ui,l.startTime-t),i=!1}return i}finally{Ze=null,Ce=n,So=!1}}var Eo=!1,wo=null,vr=-1,ou=5,au=-1;function iu(){return!(Y.unstable_now()-au<ou)}function ai(){if(wo!==null){var e=Y.unstable_now();au=e;var t=!0;try{t=wo(!0,e)}finally{t?hr():(Eo=!1,wo=null)}}else Eo=!1}var hr;typeof eu=="function"?hr=function(){eu(ai)}:typeof MessageChannel<"u"?(ii=new MessageChannel,tu=ii.port2,ii.port1.onmessage=ai,hr=function(){tu.postMessage(null)}):hr=function(){nu(ai,0)};var ii,tu;function di(e){wo=e,Eo||(Eo=!0,hr())}function pi(e,t){vr=nu(function(){e(Y.unstable_now())},t)}Y.unstable_IdlePriority=5;Y.unstable_ImmediatePriority=1;Y.unstable_LowPriority=4;Y.unstable_NormalPriority=3;Y.unstable_Profiling=null;Y.unstable_UserBlockingPriority=2;Y.unstable_cancelCallback=function(e){e.callback=null};Y.unstable_continueExecution=function(){cn||So||(cn=!0,di(ci))};Y.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ou=0<e?Math.floor(1e3/e):5};Y.unstable_getCurrentPriorityLevel=function(){return Ce};Y.unstable_getFirstCallbackNode=function(){return lt(gt)};Y.unstable_next=function(e){switch(Ce){case 1:case 2:case 3:var t=3;break;default:t=Ce}var n=Ce;Ce=t;try{return e()}finally{Ce=n}};Y.unstable_pauseExecution=function(){};Y.unstable_requestPaint=function(){};Y.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ce;Ce=e;try{return t()}finally{Ce=n}};Y.unstable_scheduleCallback=function(e,t,n){var r=Y.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:Lf++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,li(Ft,e),lt(gt)===null&&e===lt(Ft)&&(gr?(ru(vr),vr=-1):gr=!0,pi(ui,n-r))):(e.sortIndex=a,li(gt,e),cn||So||(cn=!0,di(ci))),e};Y.unstable_shouldYield=iu;Y.unstable_wrapCallback=function(e){var t=Ce;return function(){var n=Ce;Ce=t;try{return e.apply(this,arguments)}finally{Ce=n}}}});var uu=un((fg,su)=>{"use strict";su.exports=lu()});var fp=un(Ye=>{"use strict";var Pf=ri(),qe=uu();function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gc=new Set,Or={};function Nn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for(Or[e]=t,e=0;e<t.length;e++)gc.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bi=Object.prototype.hasOwnProperty,Df=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cu={},du={};function Af(e){return Bi.call(du,e)?!0:Bi.call(cu,e)?!1:Df.test(e)?du[e]=!0:(cu[e]=!0,!1)}function Bf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function If(e,t,n,r){if(t===null||typeof t>"u"||Bf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ie(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ml=/[\-:]([a-z])/g;function zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ml,zl);Ne[t]=new Ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ml,zl);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ml,zl);Ne[t]=new Ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function _l(e,t,n,r){var a=Ne.hasOwnProperty(t)?Ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(If(t,n,a,r)&&(n=null),r||a===null?Af(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Lt=Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Co=Symbol.for("react.element"),In=Symbol.for("react.portal"),Fn=Symbol.for("react.fragment"),Tl=Symbol.for("react.strict_mode"),Ii=Symbol.for("react.profiler"),vc=Symbol.for("react.provider"),yc=Symbol.for("react.context"),Ll=Symbol.for("react.forward_ref"),Fi=Symbol.for("react.suspense"),$i=Symbol.for("react.suspense_list"),Pl=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),xc=Symbol.for("react.offscreen"),pu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,fi;function Cr(e){if(fi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fi=t&&t[1]||""}return`
`+fi+e}var mi=!1;function hi(e,t){if(!e||mi)return"";mi=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{mi=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function Ff(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function Oi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Fn:return"Fragment";case In:return"Portal";case Ii:return"Profiler";case Tl:return"StrictMode";case Fi:return"Suspense";case $i:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yc:return(e.displayName||"Context")+".Consumer";case vc:return(e._context.displayName||"Context")+".Provider";case Ll:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Pl:return t=e.displayName||null,t!==null?t:Oi(e.type)||"Memo";case Ot:t=e._payload,e=e._init;try{return Oi(e(t))}catch{}}return null}function $f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oi(t);case 8:return t===Tl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function kc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Of(e){var t=kc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){e._valueTracker||(e._valueTracker=Of(e))}function bc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=kc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ji(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function wc(e,t){t=t.checked,t!=null&&_l(e,"checked",t,!1)}function Ui(e,t){wc(e,t);var n=Rt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ji(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ji(e,t.type,Rt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function mu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ji(e,t,n){(t!=="number"||ta(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Mr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Wi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Mr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rt(n)}}function Nc(e,t){var n=Rt(t.value),r=Rt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Sc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Sc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zo,Ec=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(zo=zo||document.createElement("div"),zo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=zo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Tr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jf=["Webkit","ms","Moz","O"];Object.keys(Tr).forEach(function(e){jf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Tr[t]=Tr[e]})});function Cc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Tr.hasOwnProperty(e)&&Tr[e]?(""+t).trim():t+"px"}function Mc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Cc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Uf=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vi(e,t){if(t){if(Uf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gi=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,Xn=null,Yn=null;function vu(e){if(e=oo(e)){if(typeof qi!="function")throw Error(M(280));var t=e.stateNode;t&&(t=_a(t),qi(e.stateNode,e.type,t))}}function zc(e){Xn?Yn?Yn.push(e):Yn=[e]:Xn=e}function _c(){if(Xn){var e=Xn,t=Yn;if(Yn=Xn=null,vu(e),t)for(e=0;e<t.length;e++)vu(t[e])}}function Tc(e,t){return e(t)}function Lc(){}var gi=!1;function Pc(e,t,n){if(gi)return e(t,n);gi=!0;try{return Tc(e,t,n)}finally{gi=!1,(Xn!==null||Yn!==null)&&(Lc(),_c())}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=_a(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Xi=!1;if(Mt)try{An={},Object.defineProperty(An,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Xi=!1}var An;function Jf(e,t,n,r,a,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Lr=!1,na=null,ra=!1,Yi=null,Wf={onError:function(e){Lr=!0,na=e}};function Hf(e,t,n,r,a,i,l,s,u){Lr=!1,na=null,Jf.apply(Wf,arguments)}function Vf(e,t,n,r,a,i,l,s,u){if(Hf.apply(this,arguments),Lr){if(Lr){var c=na;Lr=!1,na=null}else throw Error(M(198));ra||(ra=!0,Yi=c)}}function Sn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yu(e){if(Sn(e)!==e)throw Error(M(188))}function Kf(e){var t=e.alternate;if(!t){if(t=Sn(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return yu(a),e;if(i===r)return yu(a),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function Ac(e){return e=Kf(e),e!==null?Bc(e):null}function Bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bc(e);if(t!==null)return t;e=e.sibling}return null}var Ic=qe.unstable_scheduleCallback,xu=qe.unstable_cancelCallback,Gf=qe.unstable_shouldYield,qf=qe.unstable_requestPaint,ce=qe.unstable_now,Xf=qe.unstable_getCurrentPriorityLevel,Al=qe.unstable_ImmediatePriority,Fc=qe.unstable_UserBlockingPriority,oa=qe.unstable_NormalPriority,Yf=qe.unstable_LowPriority,$c=qe.unstable_IdlePriority,Ea=null,kt=null;function Qf(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ea,e,void 0,(e.current.flags&128)===128)}catch{}}var pt=Math.clz32?Math.clz32:em,Zf=Math.log,Rf=Math.LN2;function em(e){return e>>>=0,e===0?32:31-(Zf(e)/Rf|0)|0}var _o=64,To=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function aa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=zr(s):(i&=l,i!==0&&(r=zr(i)))}else l=n&~a,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-pt(t),a=1<<n,r|=e[n],t&=~a;return r}function tm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-pt(i),s=1<<l,u=a[l];u===-1?((s&n)===0||(s&r)!==0)&&(a[l]=tm(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Qi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Oc(){var e=_o;return _o<<=1,(_o&4194240)===0&&(_o=64),e}function vi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-pt(t),e[t]=n}function rm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-pt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Bl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-pt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var G=0;function jc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Uc,Il,Jc,Wc,Hc,Zi=!1,Lo=[],Vt=null,Kt=null,Gt=null,Jr=new Map,Wr=new Map,Ut=[],om="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ku(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Jr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wr.delete(t.pointerId)}}function xr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=oo(t),t!==null&&Il(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function am(e,t,n,r,a){switch(t){case"focusin":return Vt=xr(Vt,e,t,n,r,a),!0;case"dragenter":return Kt=xr(Kt,e,t,n,r,a),!0;case"mouseover":return Gt=xr(Gt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Jr.set(i,xr(Jr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Wr.set(i,xr(Wr.get(i)||null,e,t,n,r,a)),!0}return!1}function Vc(e){var t=fn(e.target);if(t!==null){var n=Sn(t);if(n!==null){if(t=n.tag,t===13){if(t=Dc(n),t!==null){e.blockedOn=t,Hc(e.priority,function(){Jc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ri(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gi=r,n.target.dispatchEvent(r),Gi=null}else return t=oo(n),t!==null&&Il(t),e.blockedOn=n,!1;t.shift()}return!0}function bu(e,t,n){Vo(e)&&n.delete(t)}function im(){Zi=!1,Vt!==null&&Vo(Vt)&&(Vt=null),Kt!==null&&Vo(Kt)&&(Kt=null),Gt!==null&&Vo(Gt)&&(Gt=null),Jr.forEach(bu),Wr.forEach(bu)}function kr(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,im)))}function Hr(e){function t(a){return kr(a,e)}if(0<Lo.length){kr(Lo[0],e);for(var n=1;n<Lo.length;n++){var r=Lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&kr(Vt,e),Kt!==null&&kr(Kt,e),Gt!==null&&kr(Gt,e),Jr.forEach(t),Wr.forEach(t),n=0;n<Ut.length;n++)r=Ut[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ut.length&&(n=Ut[0],n.blockedOn===null);)Vc(n),n.blockedOn===null&&Ut.shift()}var Qn=Lt.ReactCurrentBatchConfig,ia=!0;function lm(e,t,n,r){var a=G,i=Qn.transition;Qn.transition=null;try{G=1,Fl(e,t,n,r)}finally{G=a,Qn.transition=i}}function sm(e,t,n,r){var a=G,i=Qn.transition;Qn.transition=null;try{G=4,Fl(e,t,n,r)}finally{G=a,Qn.transition=i}}function Fl(e,t,n,r){if(ia){var a=Ri(e,t,n,r);if(a===null)Si(e,t,r,la,n),ku(e,r);else if(am(a,e,t,n,r))r.stopPropagation();else if(ku(e,r),t&4&&-1<om.indexOf(e)){for(;a!==null;){var i=oo(a);if(i!==null&&Uc(i),i=Ri(e,t,n,r),i===null&&Si(e,t,r,la,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Si(e,t,r,null,n)}}var la=null;function Ri(e,t,n,r){if(la=null,e=Dl(r),e=fn(e),e!==null)if(t=Sn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Dc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return la=e,null}function Kc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xf()){case Al:return 1;case Fc:return 4;case oa:case Yf:return 16;case $c:return 536870912;default:return 16}default:return 16}}var Wt=null,$l=null,Ko=null;function Gc(){if(Ko)return Ko;var e,t=$l,n=t.length,r,a="value"in Wt?Wt.value:Wt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Ko=a.slice(e,1<r?1-r:void 0)}function Go(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function wu(){return!1}function Xe(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Po:wu,this.isPropagationStopped=wu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=Xe(lr),ro=ie({},lr,{view:0,detail:0}),um=Xe(ro),yi,xi,br,Ca=ie({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(yi=e.screenX-br.screenX,xi=e.screenY-br.screenY):xi=yi=0,br=e),yi)},movementY:function(e){return"movementY"in e?e.movementY:xi}}),Nu=Xe(Ca),cm=ie({},Ca,{dataTransfer:0}),dm=Xe(cm),pm=ie({},ro,{relatedTarget:0}),ki=Xe(pm),fm=ie({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),mm=Xe(fm),hm=ie({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gm=Xe(hm),vm=ie({},lr,{data:0}),Su=Xe(vm),ym={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function jl(){return bm}var wm=ie({},ro,{key:function(e){if(e.key){var t=ym[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Go(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(e){return e.type==="keypress"?Go(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Go(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nm=Xe(wm),Sm=ie({},Ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eu=Xe(Sm),Em=ie({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Cm=Xe(Em),Mm=ie({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zm=Xe(Mm),_m=ie({},Ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Tm=Xe(_m),Lm=[9,13,27,32],Ul=Mt&&"CompositionEvent"in window,Pr=null;Mt&&"documentMode"in document&&(Pr=document.documentMode);var Pm=Mt&&"TextEvent"in window&&!Pr,qc=Mt&&(!Ul||Pr&&8<Pr&&11>=Pr),Cu=" ",Mu=!1;function Xc(e,t){switch(e){case"keyup":return Lm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Dm(e,t){switch(e){case"compositionend":return Yc(t);case"keypress":return t.which!==32?null:(Mu=!0,Cu);case"textInput":return e=t.data,e===Cu&&Mu?null:e;default:return null}}function Am(e,t){if($n)return e==="compositionend"||!Ul&&Xc(e,t)?(e=Gc(),Ko=$l=Wt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qc&&t.locale!=="ko"?null:t.data;default:return null}}var Bm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Bm[e.type]:t==="textarea"}function Qc(e,t,n,r){zc(r),t=sa(t,"onChange"),0<t.length&&(n=new Ol("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Vr=null;function Im(e){sd(e,0)}function Ma(e){var t=Un(e);if(bc(t))return e}function Fm(e,t){if(e==="change")return t}var Zc=!1;Mt&&(Mt?(Ao="oninput"in document,Ao||(bi=document.createElement("div"),bi.setAttribute("oninput","return;"),Ao=typeof bi.oninput=="function"),Do=Ao):Do=!1,Zc=Do&&(!document.documentMode||9<document.documentMode));var Do,Ao,bi;function _u(){Dr&&(Dr.detachEvent("onpropertychange",Rc),Vr=Dr=null)}function Rc(e){if(e.propertyName==="value"&&Ma(Vr)){var t=[];Qc(t,Vr,e,Dl(e)),Pc(Im,t)}}function $m(e,t,n){e==="focusin"?(_u(),Dr=t,Vr=n,Dr.attachEvent("onpropertychange",Rc)):e==="focusout"&&_u()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ma(Vr)}function jm(e,t){if(e==="click")return Ma(t)}function Um(e,t){if(e==="input"||e==="change")return Ma(t)}function Jm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var mt=typeof Object.is=="function"?Object.is:Jm;function Kr(e,t){if(mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Bi.call(t,a)||!mt(e[a],t[a]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lu(e,t){var n=Tu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tu(n)}}function ed(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ed(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function td(){for(var e=window,t=ta();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ta(e.document)}return t}function Jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wm(e){var t=td(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ed(n.ownerDocument.documentElement,n)){if(r!==null&&Jl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Lu(n,i);var l=Lu(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hm=Mt&&"documentMode"in document&&11>=document.documentMode,On=null,el=null,Ar=null,tl=!1;function Pu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||On==null||On!==ta(r)||(r=On,"selectionStart"in r&&Jl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ar&&Kr(Ar,r)||(Ar=r,r=sa(el,"onSelect"),0<r.length&&(t=new Ol("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=On)))}function Bo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var jn={animationend:Bo("Animation","AnimationEnd"),animationiteration:Bo("Animation","AnimationIteration"),animationstart:Bo("Animation","AnimationStart"),transitionend:Bo("Transition","TransitionEnd")},wi={},nd={};Mt&&(nd=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function za(e){if(wi[e])return wi[e];if(!jn[e])return e;var t=jn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nd)return wi[e]=t[n];return e}var rd=za("animationend"),od=za("animationiteration"),ad=za("animationstart"),id=za("transitionend"),ld=new Map,Du="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){ld.set(e,t),Nn(t,[e])}for(Io=0;Io<Du.length;Io++)Fo=Du[Io],Au=Fo.toLowerCase(),Bu=Fo[0].toUpperCase()+Fo.slice(1),tn(Au,"on"+Bu);var Fo,Au,Bu,Io;tn(rd,"onAnimationEnd");tn(od,"onAnimationIteration");tn(ad,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(id,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Nn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vm=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function Iu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vf(r,t,void 0,e),e.currentTarget=null}function sd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;Iu(a,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;Iu(a,s,c),i=u}}}if(ra)throw e=Yi,ra=!1,Yi=null,e}function R(e,t){var n=t[il];n===void 0&&(n=t[il]=new Set);var r=e+"__bubble";n.has(r)||(ud(t,e,2,!1),n.add(r))}function Ni(e,t,n){var r=0;t&&(r|=4),ud(n,e,r,t)}var $o="_reactListening"+Math.random().toString(36).slice(2);function Gr(e){if(!e[$o]){e[$o]=!0,gc.forEach(function(n){n!=="selectionchange"&&(Vm.has(n)||Ni(n,!1,e),Ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[$o]||(t[$o]=!0,Ni("selectionchange",!1,t))}}function ud(e,t,n,r){switch(Kc(t)){case 1:var a=lm;break;case 4:a=sm;break;default:a=Fl}n=a.bind(null,t,n,e),a=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Si(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=fn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Pc(function(){var c=i,d=Dl(n),f=[];e:{var g=ld.get(e);if(g!==void 0){var v=Ol,k=e;switch(e){case"keypress":if(Go(n)===0)break e;case"keydown":case"keyup":v=Nm;break;case"focusin":k="focus",v=ki;break;case"focusout":k="blur",v=ki;break;case"beforeblur":case"afterblur":v=ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Nu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=dm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Cm;break;case rd:case od:case ad:v=mm;break;case id:v=zm;break;case"scroll":v=um;break;case"wheel":v=Tm;break;case"copy":case"cut":case"paste":v=gm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Eu}var x=(t&4)!==0,N=!x&&e==="scroll",m=x?g!==null?g+"Capture":null:g;x=[];for(var p=c,h;p!==null;){h=p;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,m!==null&&(y=Ur(p,m),y!=null&&x.push(qr(p,y,h)))),N)break;p=p.return}0<x.length&&(g=new v(g,k,null,n,d),f.push({event:g,listeners:x}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Gi&&(k=n.relatedTarget||n.fromElement)&&(fn(k)||k[zt]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?fn(k):null,k!==null&&(N=Sn(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(x=Nu,y="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Eu,y="onPointerLeave",m="onPointerEnter",p="pointer"),N=v==null?g:Un(v),h=k==null?g:Un(k),g=new x(y,p+"leave",v,n,d),g.target=N,g.relatedTarget=h,y=null,fn(d)===c&&(x=new x(m,p+"enter",k,n,d),x.target=h,x.relatedTarget=N,y=x),N=y,v&&k)t:{for(x=v,m=k,p=0,h=x;h;h=Bn(h))p++;for(h=0,y=m;y;y=Bn(y))h++;for(;0<p-h;)x=Bn(x),p--;for(;0<h-p;)m=Bn(m),h--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=Bn(x),m=Bn(m)}x=null}else x=null;v!==null&&Fu(f,g,v,x,!1),k!==null&&N!==null&&Fu(f,N,k,x,!0)}}e:{if(g=c?Un(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var w=Fm;else if(zu(g))if(Zc)w=Um;else{w=Om;var b=$m}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(w=jm);if(w&&(w=w(e,c))){Qc(f,w,n,d);break e}b&&b(e,g,c),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Ji(g,"number",g.value)}switch(b=c?Un(c):window,e){case"focusin":(zu(b)||b.contentEditable==="true")&&(On=b,el=c,Ar=null);break;case"focusout":Ar=el=On=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,Pu(f,n,d);break;case"selectionchange":if(Hm)break;case"keydown":case"keyup":Pu(f,n,d)}var T;if(Ul)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else $n?Xc(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(qc&&n.locale!=="ko"&&($n||E!=="onCompositionStart"?E==="onCompositionEnd"&&$n&&(T=Gc()):(Wt=d,$l="value"in Wt?Wt.value:Wt.textContent,$n=!0)),b=sa(c,E),0<b.length&&(E=new Su(E,e,null,n,d),f.push({event:E,listeners:b}),T?E.data=T:(T=Yc(n),T!==null&&(E.data=T)))),(T=Pm?Dm(e,n):Am(e,n))&&(c=sa(c,"onBeforeInput"),0<c.length&&(d=new Su("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=T))}sd(f,t)})}function qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function sa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Ur(e,n),i!=null&&r.unshift(qr(e,i,a)),i=Ur(e,t),i!=null&&r.push(qr(e,i,a))),e=e.return}return r}function Bn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fu(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,a?(u=Ur(n,i),u!=null&&l.unshift(qr(n,u,s))):a||(u=Ur(n,i),u!=null&&l.push(qr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Km=/\r\n?/g,Gm=/\u0000|\uFFFD/g;function $u(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Gm,"")}function Oo(e,t,n){if(t=$u(t),$u(e)!==t&&n)throw Error(M(425))}function ua(){}var nl=null,rl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,qm=typeof clearTimeout=="function"?clearTimeout:void 0,Ou=typeof Promise=="function"?Promise:void 0,Xm=typeof queueMicrotask=="function"?queueMicrotask:typeof Ou<"u"?function(e){return Ou.resolve(null).then(e).catch(Ym)}:al;function Ym(e){setTimeout(function(){throw e})}function Ei(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Hr(t)}function qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ju(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var sr=Math.random().toString(36).slice(2),xt="__reactFiber$"+sr,Xr="__reactProps$"+sr,zt="__reactContainer$"+sr,il="__reactEvents$"+sr,Qm="__reactListeners$"+sr,Zm="__reactHandles$"+sr;function fn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ju(e);e!==null;){if(n=e[xt])return n;e=ju(e)}return t}e=n,n=e.parentNode}return null}function oo(e){return e=e[xt]||e[zt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function _a(e){return e[Xr]||null}var ll=[],Jn=-1;function nn(e){return{current:e}}function ee(e){0>Jn||(e.current=ll[Jn],ll[Jn]=null,Jn--)}function Q(e,t){Jn++,ll[Jn]=e.current,e.current=t}var en={},Te=nn(en),Ue=nn(!1),yn=en;function tr(e,t){var n=e.type.contextTypes;if(!n)return en;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function ca(){ee(Ue),ee(Te)}function Uu(e,t,n){if(Te.current!==en)throw Error(M(168));Q(Te,t),Q(Ue,n)}function cd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(M(108,$f(e)||"Unknown",a));return ie({},n,r)}function da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||en,yn=Te.current,Q(Te,e),Q(Ue,Ue.current),!0}function Ju(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=cd(e,t,yn),r.__reactInternalMemoizedMergedChildContext=e,ee(Ue),ee(Te),Q(Te,e)):ee(Ue),Q(Ue,n)}var Nt=null,Ta=!1,Ci=!1;function dd(e){Nt===null?Nt=[e]:Nt.push(e)}function Rm(e){Ta=!0,dd(e)}function rn(){if(!Ci&&Nt!==null){Ci=!0;var e=0,t=G;try{var n=Nt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Nt=null,Ta=!1}catch(a){throw Nt!==null&&(Nt=Nt.slice(e+1)),Ic(Al,rn),a}finally{G=t,Ci=!1}}return null}var Wn=[],Hn=0,pa=null,fa=0,Re=[],et=0,xn=null,St=1,Et="";function dn(e,t){Wn[Hn++]=fa,Wn[Hn++]=pa,pa=e,fa=t}function pd(e,t,n){Re[et++]=St,Re[et++]=Et,Re[et++]=xn,xn=e;var r=St;e=Et;var a=32-pt(r)-1;r&=~(1<<a),n+=1;var i=32-pt(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,St=1<<32-pt(t)+a|n<<a|r,Et=i+e}else St=1<<i|n<<a|r,Et=e}function Wl(e){e.return!==null&&(dn(e,1),pd(e,1,0))}function Hl(e){for(;e===pa;)pa=Wn[--Hn],Wn[Hn]=null,fa=Wn[--Hn],Wn[Hn]=null;for(;e===xn;)xn=Re[--et],Re[et]=null,Et=Re[--et],Re[et]=null,St=Re[--et],Re[et]=null}var Ge=null,Ke=null,te=!1,dt=null;function fd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Wu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ke=qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ke=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=xn!==null?{id:St,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ke=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(te){var t=Ke;if(t){var n=t;if(!Wu(e,t)){if(sl(e))throw Error(M(418));t=qt(n.nextSibling);var r=Ge;t&&Wu(e,t)?fd(r,n):(e.flags=e.flags&-4097|2,te=!1,Ge=e)}}else{if(sl(e))throw Error(M(418));e.flags=e.flags&-4097|2,te=!1,Ge=e}}}function Hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function jo(e){if(e!==Ge)return!1;if(!te)return Hu(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Ke)){if(sl(e))throw md(),Error(M(418));for(;t;)fd(e,t),t=qt(t.nextSibling)}if(Hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ke=qt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ke=null}}else Ke=Ge?qt(e.stateNode.nextSibling):null;return!0}function md(){for(var e=Ke;e;)e=qt(e.nextSibling)}function nr(){Ke=Ge=null,te=!1}function Vl(e){dt===null?dt=[e]:dt.push(e)}var e0=Lt.ReactCurrentBatchConfig;function wr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Uo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vu(e){var t=e._init;return t(e._payload)}function hd(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function a(m,p){return m=Zt(m,p),m.index=0,m.sibling=null,m}function i(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,h,y){return p===null||p.tag!==6?(p=Di(h,m.mode,y),p.return=m,p):(p=a(p,h),p.return=m,p)}function u(m,p,h,y){var w=h.type;return w===Fn?d(m,p,h.props.children,y,h.key):p!==null&&(p.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ot&&Vu(w)===p.type)?(y=a(p,h.props),y.ref=wr(m,p,h),y.return=m,y):(y=ea(h.type,h.key,h.props,null,m.mode,y),y.ref=wr(m,p,h),y.return=m,y)}function c(m,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ai(h,m.mode,y),p.return=m,p):(p=a(p,h.children||[]),p.return=m,p)}function d(m,p,h,y,w){return p===null||p.tag!==7?(p=vn(h,m.mode,y,w),p.return=m,p):(p=a(p,h),p.return=m,p)}function f(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Di(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Co:return h=ea(p.type,p.key,p.props,null,m.mode,h),h.ref=wr(m,null,p),h.return=m,h;case In:return p=Ai(p,m.mode,h),p.return=m,p;case Ot:var y=p._init;return f(m,y(p._payload),h)}if(Mr(p)||yr(p))return p=vn(p,m.mode,h,null),p.return=m,p;Uo(m,p)}return null}function g(m,p,h,y){var w=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:s(m,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Co:return h.key===w?u(m,p,h,y):null;case In:return h.key===w?c(m,p,h,y):null;case Ot:return w=h._init,g(m,p,w(h._payload),y)}if(Mr(h)||yr(h))return w!==null?null:d(m,p,h,y,null);Uo(m,h)}return null}function v(m,p,h,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(h)||null,s(p,m,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Co:return m=m.get(y.key===null?h:y.key)||null,u(p,m,y,w);case In:return m=m.get(y.key===null?h:y.key)||null,c(p,m,y,w);case Ot:var b=y._init;return v(m,p,h,b(y._payload),w)}if(Mr(y)||yr(y))return m=m.get(h)||null,d(p,m,y,w,null);Uo(p,y)}return null}function k(m,p,h,y){for(var w=null,b=null,T=p,E=p=0,O=null;T!==null&&E<h.length;E++){T.index>E?(O=T,T=null):O=T.sibling;var L=g(m,T,h[E],y);if(L===null){T===null&&(T=O);break}e&&T&&L.alternate===null&&t(m,T),p=i(L,p,E),b===null?w=L:b.sibling=L,b=L,T=O}if(E===h.length)return n(m,T),te&&dn(m,E),w;if(T===null){for(;E<h.length;E++)T=f(m,h[E],y),T!==null&&(p=i(T,p,E),b===null?w=T:b.sibling=T,b=T);return te&&dn(m,E),w}for(T=r(m,T);E<h.length;E++)O=v(T,m,E,h[E],y),O!==null&&(e&&O.alternate!==null&&T.delete(O.key===null?E:O.key),p=i(O,p,E),b===null?w=O:b.sibling=O,b=O);return e&&T.forEach(function(J){return t(m,J)}),te&&dn(m,E),w}function x(m,p,h,y){var w=yr(h);if(typeof w!="function")throw Error(M(150));if(h=w.call(h),h==null)throw Error(M(151));for(var b=w=null,T=p,E=p=0,O=null,L=h.next();T!==null&&!L.done;E++,L=h.next()){T.index>E?(O=T,T=null):O=T.sibling;var J=g(m,T,L.value,y);if(J===null){T===null&&(T=O);break}e&&T&&J.alternate===null&&t(m,T),p=i(J,p,E),b===null?w=J:b.sibling=J,b=J,T=O}if(L.done)return n(m,T),te&&dn(m,E),w;if(T===null){for(;!L.done;E++,L=h.next())L=f(m,L.value,y),L!==null&&(p=i(L,p,E),b===null?w=L:b.sibling=L,b=L);return te&&dn(m,E),w}for(T=r(m,T);!L.done;E++,L=h.next())L=v(T,m,E,L.value,y),L!==null&&(e&&L.alternate!==null&&T.delete(L.key===null?E:L.key),p=i(L,p,E),b===null?w=L:b.sibling=L,b=L);return e&&T.forEach(function(X){return t(m,X)}),te&&dn(m,E),w}function N(m,p,h,y){if(typeof h=="object"&&h!==null&&h.type===Fn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Co:e:{for(var w=h.key,b=p;b!==null;){if(b.key===w){if(w=h.type,w===Fn){if(b.tag===7){n(m,b.sibling),p=a(b,h.props.children),p.return=m,m=p;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ot&&Vu(w)===b.type){n(m,b.sibling),p=a(b,h.props),p.ref=wr(m,b,h),p.return=m,m=p;break e}n(m,b);break}else t(m,b);b=b.sibling}h.type===Fn?(p=vn(h.props.children,m.mode,y,h.key),p.return=m,m=p):(y=ea(h.type,h.key,h.props,null,m.mode,y),y.ref=wr(m,p,h),y.return=m,m=y)}return l(m);case In:e:{for(b=h.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=a(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ai(h,m.mode,y),p.return=m,m=p}return l(m);case Ot:return b=h._init,N(m,p,b(h._payload),y)}if(Mr(h))return k(m,p,h,y);if(yr(h))return x(m,p,h,y);Uo(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=a(p,h),p.return=m,m=p):(n(m,p),p=Di(h,m.mode,y),p.return=m,m=p),l(m)):n(m,p)}return N}var rr=hd(!0),gd=hd(!1),ma=nn(null),ha=null,Vn=null,Kl=null;function Gl(){Kl=Vn=ha=null}function ql(e){var t=ma.current;ee(ma),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){ha=e,Kl=Vn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(Kl!==e)if(e={context:e,memoizedValue:t,next:null},Vn===null){if(ha===null)throw Error(M(308));Vn=e,ha.dependencies={lanes:0,firstContext:e}}else Vn=Vn.next=e;return t}var mn=null;function Xl(e){mn===null?mn=[e]:mn.push(e)}function vd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Xl(t)):(n.next=a.next,a.next=n),t.interleaved=n,_t(e,r)}function _t(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jt=!1;function Yl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,_t(e,n)}return a=r.interleaved,a===null?(t.next=t,Xl(r)):(t.next=a.next,a.next=t),r.interleaved=t,_t(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}function Ku(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ga(e,t,n,r){var a=e.updateQueue;jt=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=a.baseState;l=0,d=c=u=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(g=t,v=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){f=k.call(v,f,g);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(v,f,g):k,g==null)break e;f=ie({},f,g);break e;case 2:jt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,l|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(d===null&&(u=f),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);bn|=l,e.lanes=l,e.memoizedState=f}}function Gu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(M(191,a));a.call(r)}}}var ao={},bt=nn(ao),Yr=nn(ao),Qr=nn(ao);function hn(e){if(e===ao)throw Error(M(174));return e}function Ql(e,t){switch(Q(Qr,t),Q(Yr,e),Q(bt,ao),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Hi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Hi(t,e)}ee(bt),Q(bt,t)}function or(){ee(bt),ee(Yr),ee(Qr)}function xd(e){hn(Qr.current);var t=hn(bt.current),n=Hi(t,e.type);t!==n&&(Q(Yr,e),Q(bt,n))}function Zl(e){Yr.current===e&&(ee(bt),ee(Yr))}var oe=nn(0);function va(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mi=[];function Rl(){for(var e=0;e<Mi.length;e++)Mi[e]._workInProgressVersionPrimary=null;Mi.length=0}var Xo=Lt.ReactCurrentDispatcher,zi=Lt.ReactCurrentBatchConfig,kn=0,ae=null,fe=null,ve=null,ya=!1,Br=!1,Zr=0,t0=0;function Me(){throw Error(M(321))}function es(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!mt(e[n],t[n]))return!1;return!0}function ts(e,t,n,r,a,i){if(kn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?a0:i0,e=n(r,a),Br){i=0;do{if(Br=!1,Zr=0,25<=i)throw Error(M(301));i+=1,ve=fe=null,t.updateQueue=null,Xo.current=l0,e=n(r,a)}while(Br)}if(Xo.current=xa,t=fe!==null&&fe.next!==null,kn=0,ve=fe=ae=null,ya=!1,t)throw Error(M(300));return e}function ns(){var e=Zr!==0;return Zr=0,e}function yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=e:ve=ve.next=e,ve}function ot(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=ve===null?ae.memoizedState:ve.next;if(t!==null)ve=t,fe=e;else{if(e===null)throw Error(M(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},ve===null?ae.memoizedState=ve=e:ve=ve.next=e}return ve}function Rr(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=ot(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=fe,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((kn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=f,l=r):u=u.next=f,ae.lanes|=d,bn|=d}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,mt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ae.lanes|=i,bn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ti(e){var t=ot(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);mt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function kd(){}function bd(e,t){var n=ae,r=ot(),a=t(),i=!mt(r.memoizedState,a);if(i&&(r.memoizedState=a,je=!0),r=r.queue,rs(Sd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,eo(9,Nd.bind(null,n,r,a,t),void 0,null),ye===null)throw Error(M(349));(kn&30)!==0||wd(n,t,a)}return a}function wd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Nd(e,t,n,r){t.value=n,t.getSnapshot=r,Ed(t)&&Cd(e)}function Sd(e,t,n){return n(function(){Ed(t)&&Cd(e)})}function Ed(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!mt(e,n)}catch{return!0}}function Cd(e){var t=_t(e,1);t!==null&&ft(t,e,1,-1)}function qu(e){var t=yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=o0.bind(null,ae,e),[t.memoizedState,e]}function eo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Md(){return ot().memoizedState}function Yo(e,t,n,r){var a=yt();ae.flags|=e,a.memoizedState=eo(1|t,n,void 0,r===void 0?null:r)}function La(e,t,n,r){var a=ot();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&es(r,l.deps)){a.memoizedState=eo(t,n,i,r);return}}ae.flags|=e,a.memoizedState=eo(1|t,n,i,r)}function Xu(e,t){return Yo(8390656,8,e,t)}function rs(e,t){return La(2048,8,e,t)}function zd(e,t){return La(4,2,e,t)}function _d(e,t){return La(4,4,e,t)}function Td(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ld(e,t,n){return n=n!=null?n.concat([e]):null,La(4,4,Td.bind(null,t,e),n)}function os(){}function Pd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Dd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&es(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ad(e,t,n){return(kn&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n):(mt(n,t)||(n=Oc(),ae.lanes|=n,bn|=n,e.baseState=!0),t)}function n0(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=zi.transition;zi.transition={};try{e(!1),t()}finally{G=n,zi.transition=r}}function Bd(){return ot().memoizedState}function r0(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Id(e))Fd(t,n);else if(n=vd(e,t,n,r),n!==null){var a=Be();ft(n,e,r,a),$d(n,t,r)}}function o0(e,t,n){var r=Qt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Id(e))Fd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,mt(s,l)){var u=t.interleaved;u===null?(a.next=a,Xl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}n=vd(e,t,a,r),n!==null&&(a=Be(),ft(n,e,r,a),$d(n,t,r))}}function Id(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Fd(e,t){Br=ya=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function $d(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Bl(e,n)}}var xa={readContext:rt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},a0={readContext:rt,useCallback:function(e,t){return yt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Xu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yo(4194308,4,Td.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yo(4,2,e,t)},useMemo:function(e,t){var n=yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r0.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=yt();return e={current:e},t.memoizedState=e},useState:qu,useDebugValue:os,useDeferredValue:function(e){return yt().memoizedState=e},useTransition:function(){var e=qu(!1),t=e[0];return e=n0.bind(null,e[1]),yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,a=yt();if(te){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),ye===null)throw Error(M(349));(kn&30)!==0||wd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Xu(Sd.bind(null,r,i,e),[e]),r.flags|=2048,eo(9,Nd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yt(),t=ye.identifierPrefix;if(te){var n=Et,r=St;n=(r&~(1<<32-pt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},i0={readContext:rt,useCallback:Pd,useContext:rt,useEffect:rs,useImperativeHandle:Ld,useInsertionEffect:zd,useLayoutEffect:_d,useMemo:Dd,useReducer:_i,useRef:Md,useState:function(){return _i(Rr)},useDebugValue:os,useDeferredValue:function(e){var t=ot();return Ad(t,fe.memoizedState,e)},useTransition:function(){var e=_i(Rr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:bd,useId:Bd,unstable_isNewReconciler:!1},l0={readContext:rt,useCallback:Pd,useContext:rt,useEffect:rs,useImperativeHandle:Ld,useInsertionEffect:zd,useLayoutEffect:_d,useMemo:Dd,useReducer:Ti,useRef:Md,useState:function(){return Ti(Rr)},useDebugValue:os,useDeferredValue:function(e){var t=ot();return fe===null?t.memoizedState=e:Ad(t,fe.memoizedState,e)},useTransition:function(){var e=Ti(Rr)[0],t=ot().memoizedState;return[e,t]},useMutableSource:kd,useSyncExternalStore:bd,useId:Bd,unstable_isNewReconciler:!1};function ut(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pa={isMounted:function(e){return(e=e._reactInternals)?Sn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),a=Qt(e),i=Ct(r,a);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(ft(t,e,a,r),qo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),a=Qt(e),i=Ct(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(ft(t,e,a,r),qo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=Qt(e),a=Ct(n,r);a.tag=2,t!=null&&(a.callback=t),t=Xt(e,a,r),t!==null&&(ft(t,e,r,n),qo(t,e,r))}};function Yu(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,r)||!Kr(a,i):!0}function Od(e,t,n){var r=!1,a=en,i=t.contextType;return typeof i=="object"&&i!==null?i=rt(i):(a=Je(t)?yn:Te.current,r=t.contextTypes,i=(r=r!=null)?tr(e,a):en),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Pa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Qu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Pa.enqueueReplaceState(t,t.state,null)}function pl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Yl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=rt(i):(i=Je(t)?yn:Te.current,a.context=tr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(dl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Pa.enqueueReplaceState(a,a.state,null),ga(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function ar(e,t){try{var n="",r=t;do n+=Ff(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Li(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function fl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var s0=typeof WeakMap=="function"?WeakMap:Map;function jd(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ba||(ba=!0,Nl=r),fl(e,t)},n}function Ud(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){fl(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Zu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new s0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=w0.bind(null,e,t,n),t.then(e,e))}function Ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ec(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var u0=Lt.ReactCurrentOwner,je=!1;function Ae(e,t,n,r){t.child=e===null?gd(t,null,n,r):rr(t,e.child,n,r)}function tc(e,t,n,r,a){n=n.render;var i=t.ref;return Zn(t,a),r=ts(e,t,n,r,i,a),n=ns(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Tt(e,t,a)):(te&&n&&Wl(t),t.flags|=1,Ae(e,t,r,a),t.child)}function nc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!ps(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Jd(e,t,i,r,a)):(e=ea(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(l,r)&&e.ref===t.ref)return Tt(e,t,a)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Jd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Kr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,Tt(e,t,a)}return ml(e,t,n,r,a)}function Wd(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q(Gn,Ve),Ve|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Q(Gn,Ve),Ve|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Q(Gn,Ve),Ve|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Q(Gn,Ve),Ve|=r;return Ae(e,t,a,n),t.child}function Hd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,n,r,a){var i=Je(n)?yn:Te.current;return i=tr(t,i),Zn(t,a),n=ts(e,t,n,r,i,a),r=ns(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Tt(e,t,a)):(te&&r&&Wl(t),t.flags|=1,Ae(e,t,n,a),t.child)}function rc(e,t,n,r,a){if(Je(n)){var i=!0;da(t)}else i=!1;if(Zn(t,a),t.stateNode===null)Qo(e,t),Od(t,n,r),pl(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=rt(c):(c=Je(n)?yn:Te.current,c=tr(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Qu(t,l,r,c),jt=!1;var g=t.memoizedState;l.state=g,ga(t,r,l,a),u=t.memoizedState,s!==r||g!==u||Ue.current||jt?(typeof d=="function"&&(dl(t,n,d,r),u=t.memoizedState),(s=jt||Yu(t,n,s,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,yd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:ut(t.type,s),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=rt(u):(u=Je(n)?yn:Te.current,u=tr(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||g!==u)&&Qu(t,l,r,u),jt=!1,g=t.memoizedState,l.state=g,ga(t,r,l,a);var k=t.memoizedState;s!==f||g!==k||Ue.current||jt?(typeof v=="function"&&(dl(t,n,v,r),k=t.memoizedState),(c=jt||Yu(t,n,c,r,g,k,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return hl(e,t,n,r,i,a)}function hl(e,t,n,r,a,i){Hd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Ju(t,n,!1),Tt(e,t,i);r=t.stateNode,u0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=rr(t,e.child,null,i),t.child=rr(t,null,s,i)):Ae(e,t,s,i),t.memoizedState=r.state,a&&Ju(t,n,!0),t.child}function Vd(e){var t=e.stateNode;t.pendingContext?Uu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Uu(e,t.context,!1),Ql(e,t.containerInfo)}function oc(e,t,n,r,a){return nr(),Vl(a),t.flags|=256,Ae(e,t,n,r),t.child}var gl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kd(e,t,n){var r=t.pendingProps,a=oe.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Q(oe,a&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Ba(l,r,0,null),e=vn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=vl(n),t.memoizedState=gl,e):as(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return c0(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Zt(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Zt(s,i):(i=vn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?vl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=gl,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function as(e,t){return t=Ba({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,n,r){return r!==null&&Vl(r),rr(t,e.child,null,n),e=as(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c0(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Li(Error(M(422))),Jo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ba({mode:"visible",children:r.children},a,0,null),i=vn(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&rr(t,e.child,null,l),t.child.memoizedState=vl(l),t.memoizedState=gl,i);if((t.mode&1)===0)return Jo(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(M(419)),r=Li(i,r,void 0),Jo(e,t,l,r)}if(s=(l&e.childLanes)!==0,je||s){if(r=ye,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,_t(e,a),ft(r,e,a,-1))}return ds(),r=Li(Error(M(421))),Jo(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=N0.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ke=qt(a.nextSibling),Ge=t,te=!0,dt=null,e!==null&&(Re[et++]=St,Re[et++]=Et,Re[et++]=xn,St=e.id,Et=e.overflow,xn=t),t=as(t,r.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function Pi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Gd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Ae(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Q(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&va(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Pi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&va(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Pi(t,!0,n,null,i);break;case"together":Pi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d0(e,t,n){switch(t.tag){case 3:Vd(t),nr();break;case 5:xd(t);break;case 1:Je(t.type)&&da(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Q(ma,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Q(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Kd(e,t,n):(Q(oe,oe.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);Q(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Gd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Q(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,Wd(e,t,n)}return Tt(e,t,n)}var qd,yl,Xd,Yd;qd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};Xd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,hn(bt.current);var i=null;switch(n){case"input":a=ji(e,a),r=ji(e,r),i=[];break;case"select":a=ie({},a,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":a=Wi(e,a),r=Wi(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ua)}Vi(n,r);var l;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Or.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=a?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Or.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&R("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Yd=function(e,t,n,r){n!==r&&(t.flags|=4)};function Nr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function p0(e,t,n){var r=t.pendingProps;switch(Hl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Je(t.type)&&ca(),ze(t),null;case 3:return r=t.stateNode,or(),ee(Ue),ee(Te),Rl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,dt!==null&&(Cl(dt),dt=null))),yl(e,t),ze(t),null;case 5:Zl(t);var a=hn(Qr.current);if(n=t.type,e!==null&&t.stateNode!=null)Xd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ze(t),null}if(e=hn(bt.current),jo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[xt]=t,r[Xr]=i,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(a=0;a<_r.length;a++)R(_r[a],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":fu(r,i),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},R("invalid",r);break;case"textarea":hu(r,i),R("invalid",r)}Vi(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Oo(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Oo(r.textContent,s,e),a=["children",""+s]):Or.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&R("scroll",r)}switch(n){case"input":Mo(r),mu(r,i,!0);break;case"textarea":Mo(r),gu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ua)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Sc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[xt]=t,e[Xr]=r,qd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ki(n,r),n){case"dialog":R("cancel",e),R("close",e),a=r;break;case"iframe":case"object":case"embed":R("load",e),a=r;break;case"video":case"audio":for(a=0;a<_r.length;a++)R(_r[a],e);a=r;break;case"source":R("error",e),a=r;break;case"img":case"image":case"link":R("error",e),R("load",e),a=r;break;case"details":R("toggle",e),a=r;break;case"input":fu(e,r),a=ji(e,r),R("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ie({},r,{value:void 0}),R("invalid",e);break;case"textarea":hu(e,r),a=Wi(e,r),R("invalid",e);break;default:a=r}Vi(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Mc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ec(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jr(e,u):typeof u=="number"&&jr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Or.hasOwnProperty(i)?u!=null&&i==="onScroll"&&R("scroll",e):u!=null&&_l(e,i,u,l))}switch(n){case"input":Mo(e),mu(e,r,!1);break;case"textarea":Mo(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ua)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Yd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=hn(Qr.current),hn(bt.current),jo(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Oo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Oo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return ze(t),null;case 13:if(ee(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ke!==null&&(t.mode&1)!==0&&(t.flags&128)===0)md(),nr(),t.flags|=98560,i=!1;else if(i=jo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[xt]=t}else nr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else dt!==null&&(Cl(dt),dt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?me===0&&(me=3):ds())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return or(),yl(e,t),e===null&&Gr(t.stateNode.containerInfo),ze(t),null;case 10:return ql(t.type._context),ze(t),null;case 17:return Je(t.type)&&ca(),ze(t),null;case 19:if(ee(oe),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Nr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=va(e),l!==null){for(t.flags|=128,Nr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Q(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>ir&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304)}else{if(!r)if(e=va(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Nr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!te)return ze(t),null}else 2*ce()-i.renderingStartTime>ir&&n!==1073741824&&(t.flags|=128,r=!0,Nr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,Q(oe,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return cs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ve&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function f0(e,t){switch(Hl(t),t.tag){case 1:return Je(t.type)&&ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return or(),ee(Ue),ee(Te),Rl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Zl(t),null;case 13:if(ee(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(oe),null;case 4:return or(),null;case 10:return ql(t.type._context),null;case 22:case 23:return cs(),null;case 24:return null;default:return null}}var Wo=!1,_e=!1,m0=typeof WeakSet=="function"?WeakSet:Set,P=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function xl(e,t,n){try{n()}catch(r){ue(e,t,r)}}var ic=!1;function h0(e,t){if(nl=ia,e=td(),Jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,g=null;t:for(;;){for(var v;f!==n||a!==0&&f.nodeType!==3||(s=l+a),f!==i||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===n&&++c===a&&(s=l),g===i&&++d===r&&(u=l),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},ia=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,N=k.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:ut(t.type,x),N);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(y){ue(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=ic,ic=!1,k}function Ir(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&xl(t,n,i)}a=a.next}while(a!==r)}}function Da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Qd(e){var t=e.alternate;t!==null&&(e.alternate=null,Qd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[Xr],delete t[il],delete t[Qm],delete t[Zm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zd(e){return e.tag===5||e.tag===3||e.tag===4}function lc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ua));else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}function wl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(wl(e,t,n),e=e.sibling;e!==null;)wl(e,t,n),e=e.sibling}var be=null,ct=!1;function $t(e,t,n){for(n=n.child;n!==null;)Rd(e,t,n),n=n.sibling}function Rd(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ea,n)}catch{}switch(n.tag){case 5:_e||Kn(n,t);case 6:var r=be,a=ct;be=null,$t(e,t,n),be=r,ct=a,be!==null&&(ct?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ct?(e=be,n=n.stateNode,e.nodeType===8?Ei(e.parentNode,n):e.nodeType===1&&Ei(e,n),Hr(e)):Ei(be,n.stateNode));break;case 4:r=be,a=ct,be=n.stateNode.containerInfo,ct=!0,$t(e,t,n),be=r,ct=a;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&xl(n,t,l),a=a.next}while(a!==r)}$t(e,t,n);break;case 1:if(!_e&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ue(n,t,s)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,$t(e,t,n),_e=r):$t(e,t,n);break;default:$t(e,t,n)}}function sc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new m0),t.forEach(function(r){var a=S0.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function st(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ct=!1;break e;case 3:be=s.stateNode.containerInfo,ct=!0;break e;case 4:be=s.stateNode.containerInfo,ct=!0;break e}s=s.return}if(be===null)throw Error(M(160));Rd(i,l,a),be=null,ct=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){ue(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ep(t,e),t=t.sibling}function ep(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(st(t,e),vt(e),r&4){try{Ir(3,e,e.return),Da(3,e)}catch(x){ue(e,e.return,x)}try{Ir(5,e,e.return)}catch(x){ue(e,e.return,x)}}break;case 1:st(t,e),vt(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(st(t,e),vt(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var a=e.stateNode;try{jr(a,"")}catch(x){ue(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&wc(a,i),Ki(s,l);var c=Ki(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];d==="style"?Mc(a,f):d==="dangerouslySetInnerHTML"?Ec(a,f):d==="children"?jr(a,f):_l(a,d,f,c)}switch(s){case"input":Ui(a,i);break;case"textarea":Nc(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?qn(a,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?qn(a,!!i.multiple,i.defaultValue,!0):qn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Xr]=i}catch(x){ue(e,e.return,x)}}break;case 6:if(st(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(M(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){ue(e,e.return,x)}}break;case 3:if(st(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(x){ue(e,e.return,x)}break;case 4:st(t,e),vt(e);break;case 13:st(t,e),vt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ss=ce())),r&4&&sc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||d,st(t,e),_e=c):st(t,e),vt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(P=e,d=e.child;d!==null;){for(f=P=d;P!==null;){switch(g=P,v=g.child,g.tag){case 0:case 11:case 14:case 15:Ir(4,g,g.return);break;case 1:Kn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){ue(r,n,x)}}break;case 5:Kn(g,g.return);break;case 22:if(g.memoizedState!==null){cc(f);continue}}v!==null?(v.return=g,P=v):cc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Cc("display",l))}catch(x){ue(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){ue(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:st(t,e),vt(e),r&4&&sc(e);break;case 21:break;default:st(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zd(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(jr(a,""),r.flags&=-33);var i=lc(e);wl(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=lc(e);bl(e,s,l);break;default:throw Error(M(161))}}catch(u){ue(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g0(e,t,n){P=e,tp(e,t,n)}function tp(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Wo;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||_e;s=Wo;var c=_e;if(Wo=l,(_e=u)&&!c)for(P=a;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?dc(a):u!==null?(u.return=l,P=u):dc(a);for(;i!==null;)P=i,tp(i,t,n),i=i.sibling;P=a,Wo=s,_e=c}uc(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,P=i):uc(e,t,n)}}function uc(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||Da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Gu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Gu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Hr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}_e||t.flags&512&&kl(t)}catch(g){ue(t,t.return,g)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function cc(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function dc(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Da(4,t)}catch(u){ue(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){ue(t,a,u)}}var i=t.return;try{kl(t)}catch(u){ue(t,i,u)}break;case 5:var l=t.return;try{kl(t)}catch(u){ue(t,l,u)}}}catch(u){ue(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var v0=Math.ceil,ka=Lt.ReactCurrentDispatcher,is=Lt.ReactCurrentOwner,nt=Lt.ReactCurrentBatchConfig,H=0,ye=null,pe=null,we=0,Ve=0,Gn=nn(0),me=0,to=null,bn=0,Aa=0,ls=0,Fr=null,Oe=null,ss=0,ir=1/0,wt=null,ba=!1,Nl=null,Yt=null,Ho=!1,Ht=null,wa=0,$r=0,Sl=null,Zo=-1,Ro=0;function Be(){return(H&6)!==0?ce():Zo!==-1?Zo:Zo=ce()}function Qt(e){return(e.mode&1)===0?1:(H&2)!==0&&we!==0?we&-we:e0.transition!==null?(Ro===0&&(Ro=Oc()),Ro):(e=G,e!==0||(e=window.event,e=e===void 0?16:Kc(e.type)),e)}function ft(e,t,n,r){if(50<$r)throw $r=0,Sl=null,Error(M(185));no(e,n,r),((H&2)===0||e!==ye)&&(e===ye&&((H&2)===0&&(Aa|=n),me===4&&Jt(e,we)),We(e,r),n===1&&H===0&&(t.mode&1)===0&&(ir=ce()+500,Ta&&rn()))}function We(e,t){var n=e.callbackNode;nm(e,t);var r=aa(e,e===ye?we:0);if(r===0)n!==null&&xu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xu(n),t===1)e.tag===0?Rm(pc.bind(null,e)):dd(pc.bind(null,e)),Xm(function(){(H&6)===0&&rn()}),n=null;else{switch(jc(r)){case 1:n=Al;break;case 4:n=Fc;break;case 16:n=oa;break;case 536870912:n=$c;break;default:n=oa}n=up(n,np.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function np(e,t){if(Zo=-1,Ro=0,(H&6)!==0)throw Error(M(327));var n=e.callbackNode;if(Rn()&&e.callbackNode!==n)return null;var r=aa(e,e===ye?we:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Na(e,r);else{t=r;var a=H;H|=2;var i=op();(ye!==e||we!==t)&&(wt=null,ir=ce()+500,gn(e,t));do try{k0();break}catch(s){rp(e,s)}while(!0);Gl(),ka.current=i,H=a,pe!==null?t=0:(ye=null,we=0,t=me)}if(t!==0){if(t===2&&(a=Qi(e),a!==0&&(r=a,t=El(e,a))),t===1)throw n=to,gn(e,0),Jt(e,r),We(e,ce()),n;if(t===6)Jt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!y0(a)&&(t=Na(e,r),t===2&&(i=Qi(e),i!==0&&(r=i,t=El(e,i))),t===1))throw n=to,gn(e,0),Jt(e,r),We(e,ce()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:pn(e,Oe,wt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=ss+500-ce(),10<t)){if(aa(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=al(pn.bind(null,e,Oe,wt),t);break}pn(e,Oe,wt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-pt(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v0(r/1960))-r,10<r){e.timeoutHandle=al(pn.bind(null,e,Oe,wt),r);break}pn(e,Oe,wt);break;case 5:pn(e,Oe,wt);break;default:throw Error(M(329))}}}return We(e,ce()),e.callbackNode===n?np.bind(null,e):null}function El(e,t){var n=Fr;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=Na(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Cl(t)),e}function Cl(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function y0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!mt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~ls,t&=~Aa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-pt(t),r=1<<n;e[n]=-1,t&=~r}}function pc(e){if((H&6)!==0)throw Error(M(327));Rn();var t=aa(e,0);if((t&1)===0)return We(e,ce()),null;var n=Na(e,t);if(e.tag!==0&&n===2){var r=Qi(e);r!==0&&(t=r,n=El(e,r))}if(n===1)throw n=to,gn(e,0),Jt(e,t),We(e,ce()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Oe,wt),We(e,ce()),null}function us(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(ir=ce()+500,Ta&&rn())}}function wn(e){Ht!==null&&Ht.tag===0&&(H&6)===0&&Rn();var t=H;H|=1;var n=nt.transition,r=G;try{if(nt.transition=null,G=1,e)return e()}finally{G=r,nt.transition=n,H=t,(H&6)===0&&rn()}}function cs(){Ve=Gn.current,ee(Gn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,qm(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Hl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ca();break;case 3:or(),ee(Ue),ee(Te),Rl();break;case 5:Zl(r);break;case 4:or();break;case 13:ee(oe);break;case 19:ee(oe);break;case 10:ql(r.type._context);break;case 22:case 23:cs()}n=n.return}if(ye=e,pe=e=Zt(e.current,null),we=Ve=t,me=0,to=null,ls=Aa=bn=0,Oe=Fr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}mn=null}return e}function rp(e,t){do{var n=pe;try{if(Gl(),Xo.current=xa,ya){for(var r=ae.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ya=!1}if(kn=0,ve=fe=ae=null,Br=!1,Zr=0,is.current=null,n===null||n.return===null){me=1,to=t,pe=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=we,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ru(l);if(v!==null){v.flags&=-257,ec(v,l,s,i,t),v.mode&1&&Zu(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if((t&1)===0){Zu(i,c,t),ds();break e}u=Error(M(426))}}else if(te&&s.mode&1){var N=Ru(l);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),ec(N,l,s,i,t),Vl(ar(u,s));break e}}i=u=ar(u,s),me!==4&&(me=2),Fr===null?Fr=[i]:Fr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=jd(i,u,t);Ku(i,m);break e;case 1:s=u;var p=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Yt===null||!Yt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Ud(i,s,t);Ku(i,y);break e}}i=i.return}while(i!==null)}ip(n)}catch(w){t=w,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function op(){var e=ka.current;return ka.current=xa,e===null?xa:e}function ds(){(me===0||me===3||me===2)&&(me=4),ye===null||(bn&268435455)===0&&(Aa&268435455)===0||Jt(ye,we)}function Na(e,t){var n=H;H|=2;var r=op();(ye!==e||we!==t)&&(wt=null,gn(e,t));do try{x0();break}catch(a){rp(e,a)}while(!0);if(Gl(),H=n,ka.current=r,pe!==null)throw Error(M(261));return ye=null,we=0,me}function x0(){for(;pe!==null;)ap(pe)}function k0(){for(;pe!==null&&!Gf();)ap(pe)}function ap(e){var t=sp(e.alternate,e,Ve);e.memoizedProps=e.pendingProps,t===null?ip(e):pe=t,is.current=null}function ip(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=p0(n,t,Ve),n!==null){pe=n;return}}else{if(n=f0(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);me===0&&(me=5)}function pn(e,t,n){var r=G,a=nt.transition;try{nt.transition=null,G=1,b0(e,t,n,r)}finally{nt.transition=a,G=r}return null}function b0(e,t,n,r){do Rn();while(Ht!==null);if((H&6)!==0)throw Error(M(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(rm(e,i),e===ye&&(pe=ye=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ho||(Ho=!0,up(oa,function(){return Rn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=nt.transition,nt.transition=null;var l=G;G=1;var s=H;H|=4,is.current=null,h0(e,n),ep(n,e),Wm(rl),ia=!!nl,rl=nl=null,e.current=n,g0(n,e,a),qf(),H=s,G=l,nt.transition=i}else e.current=n;if(Ho&&(Ho=!1,Ht=e,wa=a),i=e.pendingLanes,i===0&&(Yt=null),Qf(n.stateNode,r),We(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ba)throw ba=!1,e=Nl,Nl=null,e;return(wa&1)!==0&&e.tag!==0&&Rn(),i=e.pendingLanes,(i&1)!==0?e===Sl?$r++:($r=0,Sl=e):$r=0,rn(),null}function Rn(){if(Ht!==null){var e=jc(wa),t=nt.transition,n=G;try{if(nt.transition=null,G=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,wa=0,(H&6)!==0)throw Error(M(331));var a=H;for(H|=4,P=e.current;P!==null;){var i=P,l=i.child;if((P.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var d=P;switch(d.tag){case 0:case 11:case 15:Ir(8,d,i)}var f=d.child;if(f!==null)f.return=d,P=f;else for(;P!==null;){d=P;var g=d.sibling,v=d.return;if(Qd(d),d===c){P=null;break}if(g!==null){g.return=v,P=g;break}P=v}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var N=x.sibling;x.sibling=null,x=N}while(x!==null)}}P=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Ir(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,P=m;break e}P=i.return}}var p=e.current;for(P=p;P!==null;){l=P;var h=l.child;if((l.subtreeFlags&2064)!==0&&h!==null)h.return=l,P=h;else e:for(l=p;P!==null;){if(s=P,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Da(9,s)}}catch(w){ue(s,s.return,w)}if(s===l){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(H=a,rn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ea,e)}catch{}r=!0}return r}finally{G=n,nt.transition=t}}return!1}function fc(e,t,n){t=ar(n,t),t=jd(e,t,1),e=Xt(e,t,1),t=Be(),e!==null&&(no(e,1,t),We(e,t))}function ue(e,t,n){if(e.tag===3)fc(e,e,n);else for(;t!==null;){if(t.tag===3){fc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=ar(n,e),e=Ud(t,e,1),t=Xt(t,e,1),e=Be(),t!==null&&(no(t,1,e),We(t,e));break}}t=t.return}}function w0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(we&n)===n&&(me===4||me===3&&(we&130023424)===we&&500>ce()-ss?gn(e,0):ls|=n),We(e,t)}function lp(e,t){t===0&&((e.mode&1)===0?t=1:(t=To,To<<=1,(To&130023424)===0&&(To=4194304)));var n=Be();e=_t(e,t),e!==null&&(no(e,t,n),We(e,n))}function N0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lp(e,n)}function S0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),lp(e,n)}var sp;sp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return je=!1,d0(e,t,n);je=(e.flags&131072)!==0}else je=!1,te&&(t.flags&1048576)!==0&&pd(t,fa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qo(e,t),e=t.pendingProps;var a=tr(t,Te.current);Zn(t,n),a=ts(null,t,r,e,a,n);var i=ns();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(i=!0,da(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Yl(t),a.updater=Pa,t.stateNode=a,a._reactInternals=t,pl(t,r,e,n),t=hl(null,t,r,!0,i,n)):(t.tag=0,te&&i&&Wl(t),Ae(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qo(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=C0(r),e=ut(r,e),a){case 0:t=ml(null,t,r,e,n);break e;case 1:t=rc(null,t,r,e,n);break e;case 11:t=tc(null,t,r,e,n);break e;case 14:t=nc(null,t,r,ut(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),ml(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),rc(e,t,r,a,n);case 3:e:{if(Vd(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,a=i.element,yd(e,t),ga(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=ar(Error(M(423)),t),t=oc(e,t,r,n,a);break e}else if(r!==a){a=ar(Error(M(424)),t),t=oc(e,t,r,n,a);break e}else for(Ke=qt(t.stateNode.containerInfo.firstChild),Ge=t,te=!0,dt=null,n=gd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===a){t=Tt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return xd(t),e===null&&ul(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,ol(r,a)?l=null:i!==null&&ol(r,i)&&(t.flags|=32),Hd(e,t),Ae(e,t,l,n),t.child;case 6:return e===null&&ul(t),null;case 13:return Kd(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),tc(e,t,r,a,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Q(ma,r._currentValue),r._currentValue=l,i!==null)if(mt(i.value,l)){if(i.children===a.children&&!Ue.current){t=Tt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ct(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),cl(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(M(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),cl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ae(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Zn(t,n),a=rt(a),r=r(a),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,a=ut(r,t.pendingProps),a=ut(r.type,a),nc(e,t,r,a,n);case 15:return Jd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ut(r,a),Qo(e,t),t.tag=1,Je(r)?(e=!0,da(t)):e=!1,Zn(t,n),Od(t,r,a),pl(t,r,a,n),hl(null,t,r,!0,e,n);case 19:return Gd(e,t,n);case 22:return Wd(e,t,n)}throw Error(M(156,t.tag))};function up(e,t){return Ic(e,t)}function E0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new E0(e,t,n,r)}function ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function C0(e){if(typeof e=="function")return ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ll)return 11;if(e===Pl)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ea(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")ps(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Fn:return vn(n.children,a,i,t);case Tl:l=8,a|=8;break;case Ii:return e=tt(12,n,t,a|2),e.elementType=Ii,e.lanes=i,e;case Fi:return e=tt(13,n,t,a),e.elementType=Fi,e.lanes=i,e;case $i:return e=tt(19,n,t,a),e.elementType=$i,e.lanes=i,e;case xc:return Ba(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vc:l=10;break e;case yc:l=9;break e;case Ll:l=11;break e;case Pl:l=14;break e;case Ot:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=tt(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function vn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Ba(e,t,n,r){return e=tt(22,e,r,t),e.elementType=xc,e.lanes=n,e.stateNode={isHidden:!1},e}function Di(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Ai(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vi(0),this.expirationTimes=vi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function fs(e,t,n,r,a,i,l,s,u){return e=new M0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=tt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yl(i),e}function z0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cp(e){if(!e)return en;e=e._reactInternals;e:{if(Sn(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Je(n))return cd(e,n,t)}return t}function dp(e,t,n,r,a,i,l,s,u){return e=fs(n,r,!0,e,a,i,l,s,u),e.context=cp(null),n=e.current,r=Be(),a=Qt(n),i=Ct(r,a),i.callback=t??null,Xt(n,i,a),e.current.lanes=a,no(e,a,r),We(e,r),e}function Ia(e,t,n,r){var a=t.current,i=Be(),l=Qt(a);return n=cp(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(a,t,l),e!==null&&(ft(e,a,l,i),qo(e,a,l)),l}function Sa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ms(e,t){mc(e,t),(e=e.alternate)&&mc(e,t)}function _0(){return null}var pp=typeof reportError=="function"?reportError:function(e){console.error(e)};function hs(e){this._internalRoot=e}Fa.prototype.render=hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));Ia(e,t,null,null)};Fa.prototype.unmount=hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wn(function(){Ia(null,e,null,null)}),t[zt]=null}};function Fa(e){this._internalRoot=e}Fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ut.length&&t!==0&&t<Ut[n].priority;n++);Ut.splice(n,0,e),n===0&&Vc(e)}};function gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function $a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hc(){}function T0(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=Sa(l);i.call(c)}}var l=dp(t,r,e,0,null,!1,!1,"",hc);return e._reactRootContainer=l,e[zt]=l.current,Gr(e.nodeType===8?e.parentNode:e),wn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=Sa(u);s.call(c)}}var u=fs(e,0,!1,null,null,!1,!1,"",hc);return e._reactRootContainer=u,e[zt]=u.current,Gr(e.nodeType===8?e.parentNode:e),wn(function(){Ia(t,u,n,r)}),u}function Oa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=Sa(l);s.call(u)}}Ia(t,l,e,a)}else l=T0(n,t,e,a,r);return Sa(l)}Uc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Bl(t,n|1),We(t,ce()),(H&6)===0&&(ir=ce()+500,rn()))}break;case 13:wn(function(){var r=_t(e,1);if(r!==null){var a=Be();ft(r,e,1,a)}}),ms(e,1)}};Il=function(e){if(e.tag===13){var t=_t(e,134217728);if(t!==null){var n=Be();ft(t,e,134217728,n)}ms(e,134217728)}};Jc=function(e){if(e.tag===13){var t=Qt(e),n=_t(e,t);if(n!==null){var r=Be();ft(n,e,t,r)}ms(e,t)}};Wc=function(){return G};Hc=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};qi=function(e,t,n){switch(t){case"input":if(Ui(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=_a(r);if(!a)throw Error(M(90));bc(r),Ui(r,a)}}}break;case"textarea":Nc(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Tc=us;Lc=wn;var L0={usingClientEntryPoint:!1,Events:[oo,Un,_a,zc,_c,us]},Sr={findFiberByHostInstance:fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P0={bundleType:Sr.bundleType,version:Sr.version,rendererPackageName:Sr.rendererPackageName,rendererConfig:Sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ac(e),e===null?null:e.stateNode},findFiberByHostInstance:Sr.findFiberByHostInstance||_0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Er=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Er.isDisabled&&Er.supportsFiber))try{Ea=Er.inject(P0),kt=Er}catch{}var Er;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;Ye.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gs(t))throw Error(M(200));return z0(e,t,null,n)};Ye.createRoot=function(e,t){if(!gs(e))throw Error(M(299));var n=!1,r="",a=pp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=fs(e,1,!1,null,null,n,!1,r,a),e[zt]=t.current,Gr(e.nodeType===8?e.parentNode:e),new hs(t)};Ye.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=Ac(t),e=e===null?null:e.stateNode,e};Ye.flushSync=function(e){return wn(e)};Ye.hydrate=function(e,t,n){if(!$a(t))throw Error(M(200));return Oa(null,e,t,!0,n)};Ye.hydrateRoot=function(e,t,n){if(!gs(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=pp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=dp(t,null,e,1,n??null,a,!1,i,l),e[zt]=t.current,Gr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Fa(t)};Ye.render=function(e,t,n){if(!$a(t))throw Error(M(200));return Oa(null,e,t,!1,n)};Ye.unmountComponentAtNode=function(e){if(!$a(e))throw Error(M(40));return e._reactRootContainer?(wn(function(){Oa(null,null,e,!1,function(){e._reactRootContainer=null,e[zt]=null})}),!0):!1};Ye.unstable_batchedUpdates=us;Ye.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!$a(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return Oa(e,t,n,!1,r)};Ye.version="18.3.1-next-f1338f8080-20240426"});var gp=un((hg,hp)=>{"use strict";function mp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mp)}catch(e){console.error(e)}}mp(),hp.exports=fp()});var yp=un(vs=>{"use strict";var vp=gp();vs.createRoot=vp.createRoot,vs.hydrateRoot=vp.hydrateRoot;var gg});var o=$s(ri()),Wp=$s(yp()),Wa=Date.now();function xe(){return Wa+=1,Wa}var Ha=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function cr(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(a=>a.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function D0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function $(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function at(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Pt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function Dt(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function ys(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function qa(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has($(0)))n=0;else if(t.has($(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,a=n,i=0,l=!0,s=!1;for(;;)if(t.has($(a)))r++,i++,!l&&i>=7&&(l=!0,i=0),a-=1;else if(l)l=!1,i=0,s=!0,a-=1;else break;return{streak:r,freezeUsed:s}}function xs(e){return qa(e).streak}var A0=[15,30,45,60,90,120],Xa={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},open(e){this.fn&&this.fn(e)}},po={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},propagate(e,t,n){this.fn&&this.fn(e,t,n)}},xp="tasksh.links.v1",Hp={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},zn=(e,t)=>`${e}:${t}`,Vp=e=>{let t=String(e).indexOf(":");return{kind:String(e).slice(0,t),id:Number(String(e).slice(t+1))}};function Kp(e,t){let n=[];for(let[r,a]of e)r===t?n.push(a):a===t&&n.push(r);return n}function B0(e,t,n){return e.some(([r,a])=>r===t&&a===n||r===n&&a===t)}function I0(e,t,n){return t===n||B0(e,t,n)?e:[...e,[t,n]]}function F0(e,t,n){return e.filter(([r,a])=>!(r===t&&a===n||r===n&&a===t))}function kp(e,t){let{kind:n,id:r}=Vp(e),a=n==="routine"?t.routines:n==="good"?t.goodHabits:n==="vault"?t.vaultHabits:null;if(!a)return null;let i=a.find(l=>l.id===r);return i?{kind:n,id:r,label:i.label,meta:Hp[n]?.label||n}:null}function $0(e,t,n,r,a){let i=Kp(n,e);if(!i.length)return 0;let l=(u,c)=>u.map(d=>{if(d.id!==c)return d;let f=d.history||[],g=f.includes(a);return t===g?d:{...d,history:t?[...f,a]:f.filter(v=>v!==a)}}),s={routine:[],good:[],vault:[]};for(let u of i){let{kind:c,id:d}=Vp(u);s[c]&&s[c].push(d)}return s.routine.length&&r.setRoutines&&r.setRoutines(u=>s.routine.reduce((c,d)=>l(c,d),u)),s.good.length&&r.setGoodHabits&&r.setGoodHabits(u=>s.good.reduce((c,d)=>l(c,d),u)),s.vault.length&&r.setVaultHabits&&r.setVaultHabits(u=>s.vault.reduce((c,d)=>l(c,d),u)),i.length}function O0(){let[e,t]=(0,o.useState)(()=>Fe(xp,[]));return(0,o.useEffect)(()=>{try{localStorage.setItem(xp,JSON.stringify(e))}catch{}},[e]),{links:e,setLinks:t}}var Va="tasksh.meta.v1";function uo(e){try{let t=Fe(Va,{});localStorage.setItem(Va,JSON.stringify({...t,...e}))}catch{}}var bp="tasksh.achievements.v1",wp="tasksh.wallet.v1",co=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function Gp(e){return co.find(t=>t.id===e)}function j0(e,t){let n=new Set(t),r=[];for(let a of co){if(n.has(a.id))continue;let i=!1;try{i=!!a.test(e)}catch{i=!1}i&&r.push(a.id)}return r}var U0=e=>20+e*5;function J0(e){let[t,n]=(0,o.useState)(()=>Fe(bp,[])),[r,a]=(0,o.useState)(()=>Fe(wp,{coins:0})),[i,l]=(0,o.useState)([]);(0,o.useEffect)(()=>{try{localStorage.setItem(bp,JSON.stringify(t))}catch{}},[t]),(0,o.useEffect)(()=>{try{localStorage.setItem(wp,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let c=j0({...e,coins:r.coins},t);if(!c.length)return;n(f=>[...f,...c]),l(f=>[...f,...c]);let d=c.reduce((f,g)=>f+(Gp(g)?.coins||0),0);d&&a(f=>({...f,coins:f.coins+d}))},[e,t,r.coins]);let s=(0,o.useCallback)(c=>a(d=>({...d,coins:Math.max(0,d.coins+c)})),[]),u=(0,o.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var an={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},Np="tasksh.pet.v1",Tn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function Ja(e){let t=Tn[0];for(let n of Tn)e>=n.minLevel&&(t=n);return t}function ws(e){return Tn.find(t=>t.minLevel>e)||null}var Sp={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},Cn=e=>Math.max(0,Math.min(100,Math.round(e)));function Ep(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let a=i=>r*i;return{...e,happiness:Cn(e.happiness-a(.55)),energy:Cn(e.energy-a(.75)),friendship:Cn(e.friendship-a(.12)),intelligence:e.intelligence,lastTick:t}}var W0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function ks(e,t){let n=W0[t];return n?{...e,happiness:Cn(e.happiness+(n.happiness||0)),energy:Cn(e.energy+(n.energy||0)),friendship:Cn(e.friendship+(n.friendship||0)),intelligence:Cn(e.intelligence+(n.intelligence||0))}:e}function Cs(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function qp(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function on(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function H0(e){let{pet:t,level:n,hour:r,doneToday:a,totalToday:i,streak:l,phase:s}=e,u=Cs(t),c=Math.floor(Date.now()/36e5);return t.energy<22?on(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&a===i?on([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?on([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):a===0&&r>=14?on(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?on(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?on(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?on(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":on([`${a} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function V0(e){let{pet:t,level:n,doneToday:r,totalToday:a,streak:i,routineNow:l,nextRoutine:s}=e,u=Cs(t);return[`pet: ${t.name}, ${Tn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${qp(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${a} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function K0(e,t){let[n,r]=(0,o.useState)(()=>{let d=Fe(Np,null),f=d?{...Sp,...d}:{...Sp,born:Date.now(),lastTick:Date.now()};return Ep(f,Date.now())}),[a,i]=(0,o.useState)(null);(0,o.useEffect)(()=>{try{localStorage.setItem(Np,JSON.stringify(n))}catch{}},[n]),(0,o.useEffect)(()=>{let d=setInterval(()=>r(f=>Ep(f,Date.now())),3e5);return()=>clearInterval(d)},[]);let l=(0,o.useMemo)(()=>Ja(e),[e]);(0,o.useEffect)(()=>{if(l.stage>n.stage){let d=n.stage;i({from:d,to:l.stage}),r(f=>ks({...f,stage:l.stage},"levelUp")),D.success()}else l.stage<n.stage&&r(d=>({...d,stage:l.stage}))},[l.stage,n.stage]);let s=(0,o.useCallback)(d=>{r(f=>ks(f,d))},[]);(0,o.useEffect)(()=>an.on(d=>r(f=>ks(f,d))),[]);let u=(0,o.useCallback)(d=>{let f=String(d||"").trim().slice(0,14);f&&r(g=>({...g,name:f}))},[]),c=(0,o.useCallback)((d,f)=>{r(g=>({...g,chats:d==="user"?g.chats+1:g.chats,log:[...g.log||[],{role:d,text:String(f).slice(0,240)}].slice(-8)}))},[]);return{pet:n,form:l,mood:Cs(n),evolution:a,clearEvolution:()=>i(null),nudge:s,rename:u,remember:c}}var Ns=o.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:a=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,d=c-s*.8-u*.62-(l>=3?5:0),f=4.6-l*.3,g=Math.min(6+l*5.2,Math.max(4,d-u-9)),v=9+l*1.1,k=9+l*5.4,x=33+l*5.2,N=l>=3,m=l>=4,p=l>=6,h=l>=5,y=l>=2?Math.min(4,l-1):0,w=n==="sleepy"||n==="tired",b=n==="joyful",T=n==="low"||n==="drained",E=w?.9:f*(b?1.16:1)*2,O=T?`M 56 ${d+9} q 8 -5 16 0`:b?`M 55 ${d+6} q 9 8 18 0`:`M 57 ${d+7} q 7 4 14 0`;return o.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${a?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":Tn[l].scale},role:"img","aria-label":`${Tn[l].name}, ${n}`},o.default.createElement("defs",null,o.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},o.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),o.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),o.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},o.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),o.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),o.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:x,fill:`url(#pg-aura-${l})`}),m&&o.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},o.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),o.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),o.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&o.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),N&&o.default.createElement("rect",{x:"59",y:d+u-5,width:"10",height:Math.max(0,c-s*.7-d-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),h&&o.default.createElement("g",{opacity:"0.8"},[0,1,2].map(L=>o.default.createElement("path",{key:L,d:`M ${64-s*.72+L*3} ${c-6-L*7} l -${6+L} -${5+L*2} l ${9+L} ${1+L} Z`,fill:"var(--accent2)"}))),o.default.createElement("g",{className:"pet-body"},o.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),o.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:y}).map((L,J)=>o.default.createElement("circle",{key:J,cx:50+J*14,cy:68+J%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),o.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("g",{className:"pet-head"},o.default.createElement("path",{d:`M ${64-v} ${d-u*.72}
                  q -3 -${g} 3 -${g*1.25}
                  q 5 ${g*.45} 4 ${g*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),o.default.createElement("path",{d:`M ${64+v} ${d-u*.72}
                  q 3 -${g} -3 -${g*1.25}
                  q -5 ${g*.45} -4 ${g*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),p&&o.default.createElement("g",{className:"pet-crown"},o.default.createElement("path",{d:`M 51 ${d-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),o.default.createElement("circle",{cx:"64",cy:d-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),o.default.createElement("circle",{cx:"64",cy:d,r:u,fill:`url(#pg-body-${l})`}),w?o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:`M ${64-8.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),o.default.createElement("path",{d:`M ${64+.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):o.default.createElement("g",{className:"pet-eyes"},o.default.createElement("ellipse",{cx:64-7.5,cy:d,rx:f,ry:E/2,fill:"var(--bg)"}),o.default.createElement("ellipse",{cx:64+7.5,cy:d,rx:f,ry:E/2,fill:"var(--bg)"}),o.default.createElement("circle",{cx:64-6.2,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),o.default.createElement("circle",{cx:64+8.8,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),o.default.createElement("path",{d:O,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&o.default.createElement(o.default.Fragment,null,o.default.createElement("ellipse",{cx:49,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),o.default.createElement("ellipse",{cx:79,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&o.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((L,J)=>o.default.createElement("circle",{key:J,cx:"64",cy:c-8-x,r:1.6+J*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${J*(360/Math.min(4,l))}deg)`}}))))}),dr=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],Cp=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function Mp(e){for(let t of Cp)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return Cp[2]}function G0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var q0=o.default.memo(function({theme:t,phase:n,calm:r,scoped:a=!1}){let i=t.ambient.particle,l=a?"amb-layer amb-scoped":"amb-layer",s=(0,o.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(d,f)=>{let g=i==="bubbles"?3+f%4*2:2+f%3;return{left:`${(f*37+11)%100}%`,size:g,delay:`${-(f*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+f%7*4}s`}}),[i]),u=(0,o.useMemo)(()=>n.stars?Array.from({length:34},(c,d)=>({left:`${(d*29+7)%100}%`,top:`${(d*53+13)%62}%`,op:.2+d*37%60/100})):[],[n.stars]);return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement("div",{className:`${l} amb-blobs`}),o.default.createElement("div",{className:`${l} amb-time`},o.default.createElement("div",{className:"amb-ray"})),u.length>0&&o.default.createElement("div",{className:`${l} amb-stars`},u.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,top:c.top,opacity:c.op}}))),s.length>0&&o.default.createElement("div",{className:`${l} amb-dust`},s.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),o.default.createElement("div",{className:`${l} amb-grain`}),r&&o.default.createElement("div",{className:"calm-breath"}))}),zp="tasksh.calm.v1",_p="tasksh.ambience.v1";function X0(e){let[t,n]=(0,o.useState)(()=>{try{return localStorage.getItem(Tp)||ja}catch{return ja}}),[r,a]=(0,o.useState)(()=>{try{return localStorage.getItem(zp)==="1"}catch{return!1}}),[i,l]=(0,o.useState)(()=>{try{return localStorage.getItem(_p)!=="0"}catch{return!0}}),[s,u]=(0,o.useState)(()=>Mp(cr().hour)),c=(0,o.useMemo)(()=>Y0(t),[t]);(0,o.useEffect)(()=>{!Ss(c,e)&&c.id!==ja&&n(ja)},[c,e]),(0,o.useEffect)(()=>{Q0(c);try{localStorage.setItem(Tp,c.id)}catch{}},[c]),(0,o.useEffect)(()=>{G0(s)},[s]),(0,o.useEffect)(()=>{let f=setInterval(()=>{let g=Mp(cr().hour);u(v=>v.id===g.id?v:g)},12e4);return()=>clearInterval(f)},[]),(0,o.useEffect)(()=>{let f=document.documentElement;f.style.setProperty("--calm",r?"1":"0"),f.style.setProperty("--motion-scale",r?"1.9":"1"),f.classList.toggle("calm-mode",r);try{localStorage.setItem(zp,r?"1":"0")}catch{}},[r]);let d=(0,o.useMemo)(()=>dr.filter(f=>Ss(f,e)),[e]);return(0,o.useEffect)(()=>{document.documentElement.classList.toggle("no-ambience",!i);try{localStorage.setItem(_p,i?"1":"0")}catch{}},[i]),{theme:c,themeId:t,setThemeId:n,themes:dr,unlocked:d,phase:s,calm:r,setCalm:a,ambience:i,setAmbience:l}}var ja="terminal",Tp="tasksh.theme.v1";function Y0(e){return dr.find(t=>t.id===e)||dr[0]}function Ss(e,t){return t>=e.unlockLevel}function Q0(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((a,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${a[0]}, ${a[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var Xp="tasksh.sound.v1",io=null;function Z0(){if(!io){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;io=new e}return io.state==="suspended"&&io.resume(),io}function Yp(){try{let e=localStorage.getItem(Xp);return e===null?!0:e==="1"}catch{return!0}}function R0(e){try{localStorage.setItem(Xp,e?"1":"0")}catch{}}function En(e){if(!Yp())return;let t=Z0();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:a=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+a),c.gain.setValueAtTime(1e-4,n+a),c.gain.exponentialRampToValueAtTime(s,n+a+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+a+i),u.connect(c),c.connect(t.destination),u.start(n+a),u.stop(n+a+i+.02)})}var D={click:()=>En([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>En([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>En([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>En([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>En([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>En([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function eh(){let[e,t]=(0,o.useState)(Yp());return[e,()=>{let r=!e;t(r),R0(r),r&&En([{freq:720,dur:.05,gain:.04}])}]}function th(e,t=550){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(e),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let l=a.current,s=e;if(l===s)return;let u=performance.now(),c=f=>1-Math.pow(1-f,3),d=f=>{let g=f-u,v=Math.min(1,g/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(d):a.current=s};return i.current=requestAnimationFrame(d),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function ht({value:e,className:t,suffix:n=""}){let r=th(e);return o.default.createElement("span",{className:t},r,n)}function nh({axes:e,size:t=220,maxValue:n}){let[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let N=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(N)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(N=>N.value)),d=N=>Math.PI*2*N/i-Math.PI/2,f=(N,m)=>{let p=d(N);return[l+Math.cos(p)*u*m,s+Math.sin(p)*u*m]},g=i>6?46:22,v=[.25,.5,.75,1],x=e.map((N,m)=>f(m,r?Math.max(.04,N.value/c):.02)).map((N,m)=>`${m===0?"M":"L"}${N[0].toFixed(1)},${N[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`${-g} 0 ${t+g*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},v.map((N,m)=>{let h=e.map((y,w)=>f(w,N)).map((y,w)=>`${w===0?"M":"L"}${y[0].toFixed(1)},${y[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:m,d:h,className:"radar-ring"})}),e.map((N,m)=>{let p=f(m,1);return o.default.createElement("line",{key:m,x1:l,y1:s,x2:p[0],y2:p[1],className:"radar-spoke"})}),o.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((N,m)=>{let p=f(m,1.19),h=f(m,r?Math.max(.04,N.value/c):.02),y=Math.cos(d(m)),w=y>.25?"start":y<-.25?"end":"middle";return o.default.createElement("g",{key:N.key||m},o.default.createElement("circle",{cx:h[0],cy:h[1],r:i>6?2.8:3.5,fill:N.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:p[0],y:p[1],textAnchor:w,dominantBaseline:"middle",className:"radar-label"},N.label))}))}function Ms({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:a="#1E2228",label:i,sublabel:l}){let[s,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let x=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(x)},[]);let c=t/2-n,d=2*Math.PI*c,f=Math.max(0,Math.min(100,e)),g=d-(s?f/100:0)*d,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:a,strokeWidth:n}),o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:g,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function Qp({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:a}){let[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let g=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(g)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((g,v)=>g+Math.max(0,v.value),0)),d=0,f=e.map(g=>{let v=Math.max(0,g.value),k=v/c,x=i?k*u:0,N=u-x,m=d/c*360;return d+=v,{...g,dash:x,gap:N,rotation:m,frac:k}});return o.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),f.map((g,v)=>o.default.createElement("circle",{key:g.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:g.color,strokeWidth:n,strokeDasharray:`${g.dash} ${g.gap}`,strokeDashoffset:0,transform:`rotate(${g.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:f.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},r!==void 0&&o.default.createElement("span",{className:"donut-center-label"},r),a&&o.default.createElement("span",{className:"donut-center-sublabel"},a)))}function rh({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],a=0,i=t*7,l=Array.from({length:i},(d,f)=>a-(i-1-f)),s=Math.max(1,...l.map(d=>e[$(d)]||0)),u=[];for(let d=0;d<t;d++)u.push(l.slice(d*7,d*7+7));let c=d=>{if(!d)return 0;let f=d/s;return f>.75?4:f>.5?3:f>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},u.map((d,f)=>o.default.createElement("div",{className:"heatmap-col",key:f},d.map((g,v)=>{let k=$(g),x=e[k]||0,N=c(x);return o.default.createElement("span",{key:v,className:`heatmap-cell ${g===0?"today":""}`,style:{background:r[N],animationDelay:`${(f*7+v)*4}ms`},title:`${k}: ${x} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),r.map((d,f)=>o.default.createElement("span",{key:f,className:"heatmap-legend-cell",style:{background:d}})),o.default.createElement("span",null,"more")))}function oh(e){let t=[],n=[];for(let r of e){let a=t.findIndex(i=>r.start>=i);a===-1?(a=t.length,t.push(r.end)):t[a]=r.end,n.push({...r,lane:a})}return{placed:n,laneCount:Math.max(1,t.length)}}function ah({routines:e,nowMinutes:t,doneToday:n=0}){let[r,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(0),[s,u]=(0,o.useState)(0),c=(0,o.useRef)(null),d=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let S=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(S)},[]),(0,o.useEffect)(()=>{if(!c.current)return;let S=c.current,A=new ResizeObserver(Z=>{for(let he of Z)l(he.contentRect.width)});return A.observe(S),l(S.getBoundingClientRect().width),()=>A.disconnect()},[]);let f=1440,g=$(0),v=e.map(S=>{let A=at(S.time);return{r:S,start:A,end:A+Math.max(1,S.duration)}}),{placed:k,laneCount:x}=oh(v),m=Math.max(i,24*82),p=m/f,h=m>i+1,y=t*p;(0,o.useEffect)(()=>{if(!c.current||!i||d.current)return;if(!h){d.current=!0;return}let S=c.current,A=Math.max(0,Math.min(y-i/2,m-i));S.scrollTo({left:A,behavior:"auto"}),d.current=!0},[i,y,m,h]),(0,o.useEffect)(()=>{let S=c.current;if(!S)return;let A=0,Z=()=>{A||(A=requestAnimationFrame(()=>{u(S.scrollLeft),A=0}))};return S.addEventListener("scroll",Z,{passive:!0}),u(S.scrollLeft),()=>{S.removeEventListener("scroll",Z),cancelAnimationFrame(A)}},[i]);let w=()=>{let S=c.current;S&&(S.scrollTo({left:Math.max(0,Math.min(y-i/2,m-i)),behavior:"smooth"}),D.click())},b=38,T=6,E=8,O=E*2+x*b+(x-1)*T,L=p*60>=40?1:3,J=[];for(let S=0;S<=24;S+=L)J.push(S);let X=S=>{let A=S%24;return A===0?"12a":A===12?"12p":A>12?`${A-12}p`:`${A}a`},_=e.length,I=_?Math.round(n/_*100):0;return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-head"},o.default.createElement("div",{className:"timeline-head-left"},o.default.createElement("span",{className:"timeline-title"},"today's schedule"),_>0&&o.default.createElement("span",{className:"timeline-count"},n,"/",_," done")),h&&o.default.createElement("button",{className:"timeline-jump",onClick:w,title:"Jump to now"},"now")),_>0&&o.default.createElement("div",{className:"timeline-progress"},o.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${I}%`:"0%"}})),o.default.createElement("div",{className:"timeline-scroll",ref:c},o.default.createElement("div",{className:"timeline-inner",style:{width:m}},o.default.createElement("div",{className:"timeline-hours"},J.map(S=>o.default.createElement("div",{key:S,className:"timeline-hour",style:{left:S*60*p}},o.default.createElement("span",null,X(S))))),o.default.createElement("div",{className:"timeline-track",style:{height:O}},o.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*p}}),o.default.createElement("div",{className:"timeline-night",style:{left:1320*p,width:120*p}}),J.map(S=>o.default.createElement("div",{key:S,className:`timeline-gridline ${S%6===0?"major":""}`,style:{left:S*60*p}})),o.default.createElement("div",{className:"timeline-elapsed",style:{width:r?y:0}}),k.map(({r:S,start:A,lane:Z},he)=>{let j=A*p,le=Math.max(1,S.duration)*p,se=Math.max(4,Math.min(le,m-j)),ge=(S.history||[]).includes(g),it=ur(S.id),ke=Math.max(j,s),Qe=Math.min(j+se,s+i),$e=Math.max(0,Qe-ke)>38,F=Math.max(0,Math.min(s-j,se-46)),q=t>=A&&t<A+S.duration;return o.default.createElement("div",{key:S.id,className:`timeline-block ${ge?"done":""} ${q?"active":""}`,style:{left:j,top:E+Z*(b+T),width:r?se:0,height:b,transitionDelay:`${Math.min(he*18,260)}ms`,background:ge?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${it}, ${it}C4)`,boxShadow:ge?"none":`0 2px 10px ${it}44`},title:`${S.label} \xB7 ${Pt(A)} \xB7 ${Dt(S.duration)}${ge?" \xB7 done":""}`},$e&&o.default.createElement("span",{className:"timeline-block-label",style:F>0?{paddingLeft:F+8}:void 0},ge&&o.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),S.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:y}})))),h&&o.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var ih=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[$(-1),$(-2),$(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[$(-1),$(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[$(0),$(-1),$(-2),$(-3),$(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[$(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function zs(){let[e,t]=(0,o.useState)(cr());return(0,o.useEffect)(()=>{let n=setInterval(()=>t(cr()),1e3);return()=>clearInterval(n)},[]),e}function _s(e,t){return(0,o.useMemo)(()=>{let n=[...e].sort((i,l)=>at(i.time)-at(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&at(n[i].time)<=t;i++)r=i;let a=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[a].id}},[e,t])}function lh({routine:e,status:t,index:n,onDelete:r,onToggleToday:a,onSave:i}){let l=at(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=qa(e.history),d=(e.history||[]).includes($(0)),[f,g]=(0,o.useState)(0),v=(0,o.useRef)(!1),k=(0,o.useRef)(0),x=(0,o.useRef)(0),N=(0,o.useRef)(null),m=(0,o.useRef)(!1),[p,h]=(0,o.useState)(!1),[y,w]=(0,o.useState)(!1),[b,T]=(0,o.useState)(e.label),[E,O]=(0,o.useState)(e.time),[L,J]=(0,o.useState)(e.duration),[X,_]=(0,o.useState)(e.alternatives||[]),I=()=>{T(e.label),O(e.time),J(e.duration),_(e.alternatives||[]),w(!0)},S=()=>{let j=b.trim();j&&(i(e.id,{label:j,time:E||e.time,duration:Math.max(5,+L||e.duration),alternatives:X.map(le=>le.trim()).filter(Boolean)}),w(!1))},A=j=>{y||(v.current=!0,m.current=!1,N.current=null,k.current=j.clientX,x.current=j.clientY)},Z=j=>{if(!v.current)return;let le=j.clientX-k.current,se=j.clientY-x.current;if(N.current===null){if(Math.abs(le)<6&&Math.abs(se)<6)return;if(N.current=Math.abs(le)>Math.abs(se)?"x":"y",N.current==="y"){v.current=!1;return}}N.current==="x"&&(Math.abs(le)>4&&(m.current=!0),g(Math.max(-120,Math.min(0,le))))},he=()=>{v.current&&(v.current=!1,f<-70?(h(!0),setTimeout(()=>r(e.id),200)):(g(0),m.current||I()))};return o.default.createElement("div",{className:`routine-row-wrap ${p?"removing":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${f}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${d?"#2A2F36":ur(e.id)}`},onPointerDown:A,onPointerMove:Z,onPointerUp:he,onPointerLeave:he,onPointerCancel:he},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${d?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),y?o.default.createElement("div",{className:"routine-edit",onPointerDown:j=>j.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:b,onChange:j=>T(j.target.value),onKeyDown:j=>j.key==="Enter"&&S(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:E,onChange:j=>O(j.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:L,onChange:j=>J(j.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),X.map((j,le)=>o.default.createElement("div",{className:"alt-composer-row",key:le},o.default.createElement("input",{type:"text",placeholder:`alternative ${le+1}`,value:j,onChange:se=>{let ge=[...X];ge[le]=se.target.value,_(ge)},onKeyDown:se=>se.key==="Enter"&&S()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>_(X.filter((se,ge)=>ge!==le)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>_([...X,""])},"+ another option")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>w(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:S},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},Pt(l)),t==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&o.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),o.default.createElement("span",{className:"routine-span"},Pt(l)," \u2013 ",Pt(s)," \xB7 ",Dt(e.duration))),!y&&o.default.createElement("button",{className:"link-btn routine-link",onClick:j=>{j.stopPropagation(),Xa.open(zn("routine",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function sh({routines:e,setRoutines:t}){let n=zs(),r=n.hour*60+n.minute,{sorted:a,currentId:i,nextId:l}=_s(e,r),s=a.find(_=>_.id===i),u=a.find(_=>_.id===l),[c,d]=(0,o.useState)(""),[f,g]=(0,o.useState)(()=>ys(r)),[v,k]=(0,o.useState)(30),[x,N]=(0,o.useState)(!1),[m,p]=(0,o.useState)([]),[h,y]=(0,o.useState)(!1),w=()=>{let _=c.trim();if(!_){N(!0),setTimeout(()=>N(!1),420),D.error();return}let I=f||ys(r),S=m.map(A=>A.trim()).filter(Boolean);t(A=>[...A,{id:xe(),time:I,label:_,duration:Math.max(5,+v||30),history:[],alternatives:S}]),d(""),g(ys(r)),k(30),p([]),y(!1),D.click()},b=_=>{t(I=>I.filter(S=>S.id!==_)),D.delete()},T=_=>{let I=$(0),S=!(e.find(A=>A.id===_)?.history||[]).includes(I);t(A=>A.map(Z=>{if(Z.id!==_)return Z;let j=(Z.history||[]).includes(I)?Z.history.filter(le=>le!==I):[...Z.history||[],I];return{...Z,history:j.slice(-60)}})),po.propagate("routine",_,S),S?(D.success(),an.emit("routineDone")):D.click()},E=(_,I)=>t(S=>S.map(A=>A.id===_?{...A,...I}:A)),O=s?at(s.time)+s.duration:0,L=u?(at(u.time)-r+1440)%1440||1440:0,J=$(0),X=a.filter(_=>(_.history||[]).includes(J)).length;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},D0()),o.default.createElement("div",{className:"hero-divider"}),s?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),s.label),o.default.createElement("span",{className:"hero-sub"},"until ",Pt(O)," \xB7 next: ",u?.label," in ",Dt(L))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement(ah,{routines:a,nowMinutes:r,doneToday:X}),o.default.createElement("div",{className:`composer ${x?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:_=>d(_.target.value),onKeyDown:_=>_.key==="Enter"&&w()}),o.default.createElement("input",{type:"time",className:"time-input",value:f,onChange:_=>g(_.target.value)}),o.default.createElement("button",{type:"button",className:`alt-toggle-btn ${h?"active":""}`,onClick:()=>y(_=>!_),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),o.default.createElement("button",{className:"add-btn",onClick:w,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),h&&o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),m.map((_,I)=>o.default.createElement("div",{className:"alt-composer-row",key:I},o.default.createElement("input",{type:"text",placeholder:`alternative ${I+1}, e.g. "Drawing"`,value:_,onChange:S=>{let A=[...m];A[I]=S.target.value,p(A)},onKeyDown:S=>S.key==="Enter"&&w()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>p(m.filter((S,A)=>A!==I)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>p([...m,""])},"+ another option")),o.default.createElement("div",{className:"duration-chips"},A0.map(_=>o.default.createElement("button",{key:_,className:v===_?"active":"",onClick:()=>k(_)},Dt(_))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:_=>k(+_.target.value||5)})),a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):a.map((_,I)=>o.default.createElement(lh,{key:_.id,routine:_,index:I,status:_.id===i?"current":_.id===l?"next":"idle",onDelete:b,onToggleToday:T,onSave:E})))}function uh(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,a=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:a,monthLabel:i}}function ch(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function Zp(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has($(r))&&n++;return n}function dh(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date($(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var ph=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[$(0),$(-1),$(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[$(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[$(0)]}],fh=[{id:1,name:"Notion Template",dueDate:$(7),tasks:[{id:xe(),text:"Design layout",done:!0},{id:xe(),text:"Write docs",done:!1},{id:xe(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:$(7),tasks:[{id:xe(),text:"Script draft",done:!1},{id:xe(),text:"Record",done:!1}]}];function mh({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:a}=uh(),i=new Set(e||[]),l=$(0),s=Array.from({length:r},(u,c)=>c+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},a),o.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=ch(t,n,u);return o.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function hh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let a=(e.history||[]).includes($(0)),{streak:i,freezeUsed:l}=qa(e.history),s=Zp(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,d]=(0,o.useState)(!1),[f,g]=(0,o.useState)(e.icon),[v,k]=(0,o.useState)(e.label),[x,N]=(0,o.useState)(e.weeklyGoal),m=()=>{g(e.icon),k(e.label),N(e.weeklyGoal),d(!0)},p=()=>{let h=v.trim();h&&(r(e.id,{icon:f.trim()||e.icon,label:h,weeklyGoal:Math.max(1,Math.min(7,+x||e.weeklyGoal))}),d(!1))};return c?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:f,onChange:h=>g(h.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:h=>k(h.target.value),onKeyDown:h=>h.key==="Enter"&&p(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:x,onChange:h=>N(h.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:p},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${ur(e.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:ur(e.id)}},e.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},e.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:m,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(mh,{history:e.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement(Ms,{pct:u,size:34,stroke:3.5,color:ur(e.id)}),o.default.createElement("span",{className:"vault-card-pct"},u,"% ",o.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:"link-btn",onClick:h=>{h.stopPropagation(),Xa.open(zn("vault",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`vault-check ${a?"done":""}`,onClick:()=>t(e.id)},a?"\u2713 completed today":"mark complete today"))}function gh({habits:e,setHabits:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(7),[l,s]=(0,o.useState)(!1),u=()=>{let g=n.trim();if(!g){s(!0),setTimeout(()=>s(!1),420),D.error();return}t(v=>[...v,{id:xe(),icon:"\u25C6",label:g,weeklyGoal:a,history:[]}]),r(""),i(7),D.click()},c=g=>{t(v=>v.filter(k=>k.id!==g)),D.delete()},d=(g,v)=>t(k=>k.map(x=>x.id===g?{...x,...v}:x)),f=g=>{let v=$(0),k=!(e.find(x=>x.id===g)?.history||[]).includes(v);t(x=>x.map(N=>{if(N.id!==g)return N;let p=(N.history||[]).includes(v)?N.history.filter(h=>h!==v):[...N.history||[],v];return{...N,history:p.slice(-370)}})),po.propagate("vault",g,k),k?(D.success(),an.emit("vaultDone")):D.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(g=>o.default.createElement(hh,{key:g.id,habit:g,onToggleToday:f,onDelete:c,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:g=>r(g.target.value),onKeyDown:g=>g.key==="Enter"&&u()}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(g=>o.default.createElement("button",{key:g,className:a===g?"active":"",onClick:()=>i(g)},g,"x/wk"))))}function vh({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(t.text),c=()=>{let d=s.trim();d&&a(e,t.id,d),l(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:s,onChange:d=>u(d.target.value),onKeyDown:d=>d.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement(of,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function yh({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:a,onEditTask:i,onSave:l}){let[s,u]=(0,o.useState)(""),c=e.tasks.length,d=e.tasks.filter(b=>b.done).length,f=c?Math.round(d/c*100):0,g=dh(e.dueDate),[v,k]=(0,o.useState)(!1),[x,N]=(0,o.useState)(e.name),[m,p]=(0,o.useState)(e.dueDate||""),h=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},y=()=>{N(e.name),p(e.dueDate||""),k(!0)},w=()=>{let b=x.trim();b&&(l(e.id,{name:b,dueDate:m||null}),k(!1))};return v?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:x,onChange:b=>N(b.target.value),onKeyDown:b=>b.key==="Enter"&&w(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:m,onChange:b=>p(b.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:w},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${ur(e.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},e.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),g&&o.default.createElement("span",{className:`project-due ${g.overdue?"overdue":""}`},g.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${f}%`}})),o.default.createElement("span",{className:"vault-card-pct"},d,"/",c," tasks \xB7 ",f,"%"),o.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>o.default.createElement(vh,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:a,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&h()})))}function xh({projects:e,setProjects:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[l,s]=(0,o.useState)(!1),u=()=>{let x=n.trim();if(!x){s(!0),setTimeout(()=>s(!1),420),D.error();return}t(N=>[...N,{id:xe(),name:x,dueDate:a||null,tasks:[]}]),r(""),i(""),D.click()},c=x=>{t(N=>N.filter(m=>m.id!==x)),D.delete()},d=(x,N)=>t(m=>m.map(p=>p.id===x?{...p,...N}:p)),f=(x,N)=>{t(m=>m.map(p=>p.id===x?{...p,tasks:[...p.tasks,{id:xe(),text:N,done:!1}]}:p)),D.click()},g=(x,N)=>{t(m=>m.map(p=>p.id!==x?p:{...p,tasks:p.tasks.map(h=>h.id===N?{...h,done:!h.done}:h)})),D.success()},v=(x,N)=>{t(m=>m.map(p=>p.id!==x?p:{...p,tasks:p.tasks.filter(h=>h.id!==N)})),D.delete()},k=(x,N,m)=>t(p=>p.map(h=>h.id!==x?h:{...h,tasks:h.tasks.map(y=>y.id===N?{...y,text:m}:y)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):e.map(x=>o.default.createElement(yh,{key:x.id,project:x,onDelete:c,onAddTask:f,onToggleTask:g,onDeleteTask:v,onEditTask:k,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:x=>r(x.target.value),onKeyDown:x=>x.key==="Enter"&&u()}),o.default.createElement("input",{type:"date",className:"time-input",value:a,onChange:x=>i(x.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function kh({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(gh,{habits:e,setHabits:t}),o.default.createElement(xh,{projects:n,setProjects:r}))}var He=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],fo=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],yg=He.reduce((e,t)=>(e[t.key]=fo.filter(n=>n.area===t.key),e),{});var Rp="tasksh.subareas.v1",Lp="tasksh.radarmode.v1";function bh(){let e=Fe(Rp,null);return!Array.isArray(e)||!e.length?fo:e.filter(t=>t&&t.key&&t.area&&He.some(n=>n.key===t.area))}function pr(e,t){return e.filter(n=>n.area===t)}function fr(e,t){if(t.sub&&e.some(r=>r.key===t.sub&&r.area===t.area))return t.sub;let n=e.find(r=>r.area===t.area);return n?n.key:null}function wh(e,t,n,r){let a=n.filter(l=>fr(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=r.filter(l=>fr(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0);return a-i}function Nh(){let[e,t]=(0,o.useState)(bh),[n,r]=(0,o.useState)(()=>{try{return localStorage.getItem(Lp)||"subs"}catch{return"subs"}});(0,o.useEffect)(()=>{try{localStorage.setItem(Rp,JSON.stringify(e))}catch{}},[e]),(0,o.useEffect)(()=>{try{localStorage.setItem(Lp,n)}catch{}},[n]);let a=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(f=>f.map(g=>g.key===u?{...g,label:d}:g))},[]),i=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(f=>{let g=d.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",v=g,k=2;for(;f.some(x=>x.key===v);)v=`${g}${k++}`;return[...f,{key:v,area:u,label:d}]})},[]),l=(0,o.useCallback)(u=>{t(c=>{let d=c.find(f=>f.key===u);return!d||pr(c,d.area).length<=1?c:c.filter(f=>f.key!==u)})},[]),s=(0,o.useCallback)(()=>t(fo),[]);return{subs:e,radarMode:n,setRadarMode:r,renameSub:a,addSub:i,removeSub:l,resetSubs:s}}var Pp=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function ur(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Pp[Math.abs(t)%Pp.length]}var lo=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function ef(e,t){let n=e.reduce((a,i)=>a+i.xp*(i.history?.length||0),0),r=t.reduce((a,i)=>a+i.xp*(i.history?.length||0),0);return Math.max(0,n-r)}function tf(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),a=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return Math.max(0,r-a-i)}function Sh(e,t,n){let r=t.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),a=n.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-a}function Mn(e){return 12.5*(e-1)*(e+6)}function nf(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-Mn(n),a=Mn(n+1)-Mn(n);return{level:n,into:r,span:a}}function Eh(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[a,i]of t)for(;n>=a;)r+=i,n-=a;return r}function rf(e){if(e<=lo.length)return lo[e-1];let t=e-lo.length+1;return`${lo[lo.length-1]} ${Eh(t)}`}var Ch=[{id:1,label:"Deep Work",area:"work",xp:40,history:[$(0),$(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[$(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Mh=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],zh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function _h({habit:e,subs:t=fo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes($(0)),[l,s]=(0,o.useState)(0),u=()=>{i||s(E=>E+1)},{streak:c,freezeUsed:d}=qa(e.history),f=He.find(E=>E.key===e.area)||He[0],[g,v]=(0,o.useState)(!1),[k,x]=(0,o.useState)(e.label),[N,m]=(0,o.useState)(e.area),[p,h]=(0,o.useState)(()=>fr(t,e)),[y,w]=(0,o.useState)(e.xp),b=()=>{x(e.label),m(e.area),h(fr(t,e)),w(e.xp),v(!0)},T=()=>{let E=k.trim();E&&(a(e.id,{label:E,area:N,sub:p,xp:Math.max(1,+y||e.xp)}),v(!1))};return g?o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:k,onChange:E=>x(E.target.value),onKeyDown:E=>E.key==="Enter"&&T(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},He.map(E=>o.default.createElement("button",{key:E.key,type:"button",className:`area-chip ${N===E.key?"active":""}`,style:{"--ac":E.color},onClick:()=>{m(E.key);let O=pr(t,E.key);h(O.length?O[0].key:null)}},E.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},pr(t,N).map(E=>o.default.createElement("button",{key:E.key,type:"button",className:`sub-chip ${p===E.key?"active":""}`,onClick:()=>h(E.key)},E.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:E=>w(E.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:T},"save")))):o.default.createElement("div",{className:`quest-habit-card good ${l?"just-completed":""}`,key:`g${e.id}`},l>0&&o.default.createElement("span",{className:"xp-pop",key:l},"+",e.xp),o.default.createElement("span",{className:"area-dot",style:{background:f.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",f.label,c>0?` \xB7 \u{1F525}${c}${d?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:"link-btn",onClick:E=>{E.stopPropagation(),Xa.open(zn("good",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-check ${i?"done":""}`,onClick:()=>{u(),n(e.id)},"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:i?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Th({habit:e,subs:t=fo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes($(0)),l=He.find(y=>y.key===e.area)||He[0],s=Zp(e.history),[u,c]=(0,o.useState)(!1),[d,f]=(0,o.useState)(e.label),[g,v]=(0,o.useState)(e.area),[k,x]=(0,o.useState)(()=>fr(t,e)),[N,m]=(0,o.useState)(e.xp),p=()=>{f(e.label),v(e.area),x(fr(t,e)),m(e.xp),c(!0)},h=()=>{let y=d.trim();y&&(a(e.id,{label:y,area:g,sub:k,xp:Math.max(1,+N||e.xp)}),c(!1))};return u?o.default.createElement("div",{className:"quest-habit-card bad editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:d,onChange:y=>f(y.target.value),onKeyDown:y=>y.key==="Enter"&&h(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},He.map(y=>o.default.createElement("button",{key:y.key,type:"button",className:`area-chip ${g===y.key?"active":""}`,style:{"--ac":y.color},onClick:()=>{v(y.key);let w=pr(t,y.key);x(w.length?w[0].key:null)}},y.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},pr(t,g).map(y=>o.default.createElement("button",{key:y.key,type:"button",className:`sub-chip ${k===y.key?"active":""}`,onClick:()=>x(y.key)},y.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:N,onChange:y=>m(y.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>c(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:h},"save")))):o.default.createElement("div",{className:"quest-habit-card bad"},o.default.createElement("span",{className:"area-dot",style:{background:l.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",l.label," \xB7 ",s,"x this week")),o.default.createElement("button",{className:`quest-check bad-check ${i?"done":""}`,onClick:()=>n(e.id),"aria-label":"Log slip today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Lh({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(e.label),[c,d]=(0,o.useState)(e.cost),f=()=>{u(e.label),d(e.cost),l(!0)},g=()=>{let v=s.trim();v&&(a(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&g(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>d(v.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:g},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},e.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},e.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function Ph({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:a,setRewards:i,tagCtl:l}){let[s,u]=(0,o.useState)("all"),[c,d]=(0,o.useState)(!1),f=l.subs,g=(0,o.useMemo)(()=>ef(e,n),[e,n]),v=(0,o.useMemo)(()=>tf(e,n,a),[e,n,a]),{level:k,into:x,span:N}=nf(g),m=Math.round(x/N*100),p=C=>{let U=$(0),de=!(e.find(V=>V.id===C)?.history||[]).includes(U);if(t(V=>V.map(Pe=>{if(Pe.id!==C)return Pe;let Pn=(Pe.history||[]).includes(U)?Pe.history.filter(Bt=>Bt!==U):[...Pe.history||[],U];return{...Pe,history:Pn.slice(-370)}})),po.propagate("good",C,de),de){D.success(),an.emit("habitDone");let V=cr().hour;V<6&&uo({earlyFinish:!0}),V>=0&&V<4&&uo({lateFinish:!0})}else D.click()},h=C=>{let U=$(0),de=!(n.find(V=>V.id===C)?.history||[]).includes(U);r(V=>V.map(Pe=>{if(Pe.id!==C)return Pe;let Pn=(Pe.history||[]).includes(U)?Pe.history.filter(Bt=>Bt!==U):[...Pe.history||[],U];return{...Pe,history:Pn.slice(-370)}})),de?(D.error(),an.emit("badHabit")):D.click()},y=C=>{t(U=>U.filter(de=>de.id!==C)),D.delete()},w=C=>{r(U=>U.filter(de=>de.id!==C)),D.delete()},b=(C,U)=>t(de=>de.map(V=>V.id===C?{...V,...U}:V)),T=(C,U)=>r(de=>de.map(V=>V.id===C?{...V,...U}:V)),E=C=>{let U=$(0);i(de=>de.map(V=>V.id===C?{...V,claimed:[...V.claimed||[],U]}:V)),D.success(),an.emit("rewardClaimed")},O=C=>{i(U=>U.filter(de=>de.id!==C)),D.delete()},L=(C,U)=>i(de=>de.map(V=>V.id===C?{...V,...U}:V)),[J,X]=(0,o.useState)(""),[_,I]=(0,o.useState)("work"),[S,A]=(0,o.useState)(20),[Z,he]=(0,o.useState)(""),[j,le]=(0,o.useState)("work"),[se,ge]=(0,o.useState)(20),[it,ke]=(0,o.useState)(""),[Qe,ln]=(0,o.useState)(100),$e=()=>{let C=J.trim();C&&(t(U=>[...U,{id:xe(),label:C,area:_,xp:+S||10,history:[]}]),X(""),D.click())},F=()=>{let C=Z.trim();C&&(r(U=>[...U,{id:xe(),label:C,area:j,xp:+se||10,history:[]}]),he(""),D.click())},q=()=>{let C=it.trim();C&&(i(U=>[...U,{id:xe(),label:C,cost:+Qe||50,claimed:[]}]),ke(""),D.click())},ne=(0,o.useMemo)(()=>l.radarMode==="areas"?He.map(C=>({key:C.key,label:C.label,color:C.color,value:Math.max(0,Sh(C.key,e,n))})):f.map(C=>({key:C.key,label:C.label,color:(He.find(U=>U.key===C.area)||{}).color,value:Math.max(0,wh(f,C.key,e,n))})),[l.radarMode,f,e,n]),Se=s==="all"?e:e.filter(C=>C.area===s),Ya=s==="all"?n:n.filter(C=>C.area===s),sn=e.reduce((C,U)=>C+U.xp*(U.history?.length||0),0),Ln=n.reduce((C,U)=>C+U.xp*(U.history?.length||0),0),Le=a.reduce((C,U)=>C+U.cost*(U.claimed?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement(Ms,{pct:m,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${k}`,sublabel:rf(k)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(ht,{value:g})," ",o.default.createElement("small",null,"XP")),Le>0&&o.default.createElement("span",{className:"hero-xp-spend"},"\u25C9 ",v," to spend"),o.default.createElement("span",{className:"hero-xp-sub"},x,"/",N," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(ht,{value:sn})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(ht,{value:Ln})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement("div",{className:"radar-controls"},o.default.createElement("div",{className:"radar-mode"},o.default.createElement("button",{className:l.radarMode==="areas"?"active":"",onClick:()=>{l.setRadarMode("areas"),D.click()}},"4 areas"),o.default.createElement("button",{className:l.radarMode==="subs"?"active":"",onClick:()=>{l.setRadarMode("subs"),D.click()}},f.length," tags")),o.default.createElement("button",{className:"radar-edit",onClick:()=>d(!0)},"edit tags")),o.default.createElement(nh,{axes:ne,size:252})),(sn>0||Ln>0||Le>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(Qp,{size:120,stroke:16,centerLabel:v,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:sn,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Ln,color:"#F0576B"},{key:"spent",label:"Spent",value:Le,color:"#F5A623"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(ht,{value:sn}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(ht,{value:Ln}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F5A623"}}),o.default.createElement("span",null,"Spent on rewards"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(ht,{value:Le}))),o.default.createElement("div",{className:"donut-legend-row donut-legend-total"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"transparent"}}),o.default.createElement("span",null,"Level progress (spending doesn't count)"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(ht,{value:g})))))),o.default.createElement("div",{className:"area-filter"},o.default.createElement("button",{className:s==="all"?"active":"",onClick:()=>u("all")},"all"),He.map(C=>o.default.createElement("button",{key:C.key,className:s===C.key?"active":"",style:{"--ac":C.color},onClick:()=>{u(C.key),D.click()}},C.label))),c&&o.default.createElement(Fh,{tagCtl:l,onClose:()=>d(!1)}),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"GOOD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no good habits yet")):Se.map(C=>o.default.createElement(_h,{key:C.id,habit:C,subs:f,onToggleToday:p,onDelete:y,onSave:b}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new good habit...",value:J,onChange:C=>X(C.target.value),onKeyDown:C=>C.key==="Enter"&&$e()}),o.default.createElement("button",{className:"add-btn",onClick:$e,"aria-label":"Add good habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},He.map(C=>o.default.createElement("button",{key:C.key,className:_===C.key?"active":"",onClick:()=>I(C.key)},C.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:S,onChange:C=>A(+C.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"BAD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no bad habits tracked")):Ya.map(C=>o.default.createElement(Th,{key:C.id,habit:C,subs:f,onToggleToday:h,onDelete:w,onSave:T}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:Z,onChange:C=>he(C.target.value),onKeyDown:C=>C.key==="Enter"&&F()}),o.default.createElement("button",{className:"add-btn",onClick:F,"aria-label":"Add bad habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},He.map(C=>o.default.createElement("button",{key:C.key,className:j===C.key?"active":"",onClick:()=>le(C.key)},C.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:se,onChange:C=>ge(+C.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):a.map(C=>o.default.createElement(Lh,{key:C.id,reward:C,canClaim:v>=C.cost,onClaim:E,onDelete:O,onSave:L}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:it,onChange:C=>ke(C.target.value),onKeyDown:C=>C.key==="Enter"&&q()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:Qe,onChange:C=>ln(+C.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:q,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Dh=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function Ah(e=1e3*30){let[t,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function Bh(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let a=Math.floor(r/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function of({checked:e,onChange:t,color:n}){return o.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function Ih({task:e,now:t,onToggle:n,onDelete:r,index:a}){let[i,l]=(0,o.useState)(!1),s=Ha.find(c=>c.key===e.priority)||Ha[0],u=()=>{l(!0),setTimeout(()=>r(e.id),220)};return o.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${a*35}ms`}},o.default.createElement(of,{checked:e.done,onChange:()=>n(e.id),color:s.color}),o.default.createElement("div",{className:"task-main"},o.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),o.default.createElement("span",{className:"task-meta"},o.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),o.default.createElement("span",{className:"prio-label"},s.label),o.default.createElement("span",{className:"dot-sep"},"\xB7"),o.default.createElement("span",null,Bh(e.createdAt,t)))),o.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var Dp="tasksh.tasks.v1",Ap="tasksh.routines.v1",Bp="tasksh.vaulthabits.v1",Ip="tasksh.projects.v1",Fp="tasksh.goodhabits.v1",$p="tasksh.badhabits.v1",Op="tasksh.rewards.v1",jp="tasksh.deviceid.v1",bs="tasksh.notifyenabled.v1",Es="tasksh.aikey.v1";function Fh({tagCtl:e,onClose:t}){let[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(""),l=s=>{a.trim()&&(e.addSub(s,a),D.success()),i(""),r(null)};return o.default.createElement("div",{className:"sheet-backdrop",onClick:t},o.default.createElement("div",{className:"sheet",onClick:s=>s.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"edit tags"),o.default.createElement("button",{className:"sheet-close",onClick:t,"aria-label":"Close"},"\xD7")),He.map(s=>{let u=pr(e.subs,s.key);return o.default.createElement("div",{key:s.key,className:"tag-group"},o.default.createElement("div",{className:"tag-group-head"},o.default.createElement("span",{className:"tag-dot",style:{background:s.color}}),o.default.createElement("span",{className:"tag-group-name"},s.label)),u.map(c=>o.default.createElement("div",{key:c.key,className:"tag-row"},o.default.createElement("input",{className:"tag-input",defaultValue:c.label,maxLength:18,onBlur:d=>e.renameSub(c.key,d.target.value),onKeyDown:d=>{d.key==="Enter"&&d.target.blur()}}),o.default.createElement("button",{className:"tag-del",disabled:u.length<=1,title:u.length<=1?"each area needs at least one tag":"remove",onClick:()=>{e.removeSub(c.key),D.delete()}},"\xD7"))),n===s.key?o.default.createElement("div",{className:"tag-row"},o.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:18,value:a,onChange:c=>i(c.target.value),onBlur:()=>l(s.key),onKeyDown:c=>{c.key==="Enter"&&l(s.key),c.key==="Escape"&&(i(""),r(null))}})):o.default.createElement("button",{className:"tag-add",onClick:()=>{i(""),r(s.key)}},"+ add tag"))}),o.default.createElement("div",{className:"sheet-foot"},"habits keep their tag when you rename it",o.default.createElement("button",{className:"tag-reset",onClick:()=>{e.resetSubs(),D.click()}},"reset to defaults"))))}function $h({selfRef:e,data:t,links:n,setLinks:r,onClose:a}){let[i,l]=(0,o.useState)(!1),s=kp(e,t),u=Kp(n,e),c=(0,o.useMemo)(()=>[...t.routines.map(f=>({ref:zn("routine",f.id),label:f.label,kind:"routine"})),...t.goodHabits.map(f=>({ref:zn("good",f.id),label:f.label,kind:"good"})),...t.vaultHabits.map(f=>({ref:zn("vault",f.id),label:f.label,kind:"vault"}))].filter(f=>f.ref!==e&&!u.includes(f.ref)),[t,e,u]);return o.default.createElement("div",{className:"sheet-backdrop",onClick:a},o.default.createElement("div",{className:"sheet",onClick:d=>d.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"links \xB7 ",s?.label||"item"),o.default.createElement("button",{className:"sheet-close",onClick:a,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),u.length===0?o.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):o.default.createElement("div",{className:"link-list"},u.map(d=>{let f=kp(d,t);return o.default.createElement("div",{key:d,className:`link-row ${f?"":"stale"}`},o.default.createElement("span",{className:"link-kind"},f?f.meta:"missing"),o.default.createElement("span",{className:"link-label"},f?f.label:"deleted item"),o.default.createElement("button",{className:"link-remove",onClick:()=>{r(g=>F0(g,e,d)),D.delete()}},"unlink"))})),i?o.default.createElement("div",{className:"link-picker"},c.length===0?o.default.createElement("div",{className:"link-empty"},"nothing else to link to"):c.map(d=>o.default.createElement("button",{key:d.ref,className:"link-candidate",onClick:()=>{r(f=>I0(f,e,d.ref)),l(!1),D.success()}},o.default.createElement("span",{className:"link-kind"},Hp[d.kind].label),o.default.createElement("span",{className:"link-label"},d.label),o.default.createElement("span",{className:"link-plus"},"+")))):o.default.createElement("button",{className:"link-add-btn",onClick:()=>l(!0)},"+ link to something")))}function Oh({id:e,onDone:t}){let n=Gp(e);return(0,o.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?o.default.createElement("div",{className:"ach-toast",onClick:t},o.default.createElement("span",{className:"ach-toast-icon"},n.icon),o.default.createElement("span",{className:"ach-toast-body"},o.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),o.default.createElement("span",{className:"ach-toast-name"},n.name),o.default.createElement("span",{className:"ach-toast-desc"},n.desc)),o.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function jh({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:a,onDone:i}){let l=dr.find(u=>u.unlockLevel>e),s=ws(e);return o.default.createElement("div",{className:"lvl-backdrop",onClick:i},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"lvl-kicker"},"level up"),o.default.createElement("div",{className:"lvl-num"},e),o.default.createElement("div",{className:"lvl-title"},rf(e)),o.default.createElement("div",{className:"lvl-rewards"},o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),o.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),o.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",o.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),a!=null&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),o.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),o.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),o.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function Uh({earned:e,coins:t}){let n=new Set(e),r=co.filter(i=>!i.hidden||n.has(i.id)),a=co.filter(i=>i.hidden&&!n.has(i.id)).length;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ach-head"},o.default.createElement("span",{className:"sheet-title"},"achievements"),o.default.createElement("span",{className:"ach-count"},n.size,"/",co.length," \xB7 \u25C9 ",t)),o.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return o.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},o.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),o.default.createElement("span",{className:"ach-name"},i.name),o.default.createElement("span",{className:"ach-desc"},i.desc),o.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),a>0&&o.default.createElement("div",{className:"ach-hidden-note"},a," hidden achievement",a===1?"":"s"," left to discover"))}function Jh({ctl:e,level:t,totalXP:n,earned:r=[],coins:a=0,onClose:i}){let l=Mn(t+1),s=Mn(t);return o.default.createElement("div",{className:"sheet-backdrop",onClick:i},o.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"themes"),o.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=Ss(u,t),d=e.themeId===u.id,f=Mn(u.unlockLevel),g=Mn(Math.max(1,u.unlockLevel-1)),v=c?100:Math.max(0,Math.min(99,Math.round((n-g)/(f-g)*100)));return o.default.createElement("button",{key:u.id,className:`theme-card ${d?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),D.success()):D.error()},disabled:!c},o.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},o.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),d&&o.default.createElement("span",{className:"theme-active-dot"})),o.default.createElement("span",{className:"theme-name"},u.name),c?o.default.createElement("span",{className:"theme-blurb"},u.blurb):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),o.default.createElement("span",{className:"theme-bar"},o.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),o.default.createElement("span",{className:"theme-pct"},v,"%")))})),o.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),o.default.createElement("div",{className:"ach-section"},o.default.createElement(Uh,{earned:r,coins:a})),o.default.createElement("div",{className:"calm-toggle-row"},o.default.createElement("div",null,o.default.createElement("div",{className:"calm-toggle-label"},"ambient background"),o.default.createElement("div",{className:"calm-toggle-hint"},e.ambience?"drifting gradients and particles":"flat black, like the old build")),o.default.createElement("button",{className:`calm-switch ${e.ambience?"on":""}`,onClick:()=>{e.setAmbience(!e.ambience),D.click()},"aria-pressed":e.ambience},o.default.createElement("span",{className:"calm-knob"}))),o.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",o.default.createElement("b",null,e.phase.label))))}function Ua({label:e,value:t,color:n}){return o.default.createElement("div",{className:"pet-stat"},o.default.createElement("div",{className:"pet-stat-top"},o.default.createElement("span",{className:"pet-stat-label"},e),o.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),o.default.createElement("div",{className:"pet-stat-track"},o.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function Wh({from:e,to:t,petName:n,onDone:r}){(0,o.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let a=Tn[t];return o.default.createElement("div",{className:"evo-backdrop",onClick:r},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},o.default.createElement("div",{className:"evo-kicker"},"evolution"),o.default.createElement("div",{className:"evo-stage-row"},o.default.createElement("div",{className:"evo-old"},o.default.createElement(Ns,{stage:e,mood:"content",size:72,animate:!1})),o.default.createElement("span",{className:"evo-arrow"},"\u2192"),o.default.createElement("div",{className:"evo-new"},o.default.createElement(Ns,{stage:t,mood:"joyful",size:132,evolving:!0}))),o.default.createElement("div",{className:"evo-name"},n," became ",o.default.createElement("b",null,a.name)),o.default.createElement("div",{className:"evo-title"},a.title),o.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var mo="https://tasksh-notify.techcraftor.workers.dev",Hh="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function Vh(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}function Ts(){let e=localStorage.getItem(jp);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(jp,e)),e}async function Kh(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Vh(Hh)}));let r=Ts();if(!(await fetch(`${mo}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function Gh(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=Ts();try{await fetch(`${mo}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Up(e){let t=Ts();try{await fetch(`${mo}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}var Ka=[{id:"gemini",label:"Gemini",test:e=>/^AIza/.test(e),where:"aistudio.google.com/apikey",free:"~1000 req/day",shared:!0},{id:"groq",label:"Groq",test:e=>/^gsk_/.test(e),where:"console.groq.com",free:"~1000 req/day, fastest"},{id:"cerebras",label:"Cerebras",test:e=>/^csk-/.test(e),where:"cloud.cerebras.ai",free:"1M tokens/day"},{id:"nvidia",label:"NVIDIA NIM",test:e=>/^nvapi-/.test(e),where:"build.nvidia.com",free:"40 req/min, 1000 credits"},{id:"github",label:"GitHub Models",test:e=>/^(ghp_|github_pat_|gho_|ghu_|ghs_)/.test(e),where:"github.com/settings/tokens",free:"~150 req/day",note:"the token needs the \u201Cmodels\u201D scope ticked"},{id:"mistral",label:"Mistral",test:()=>!1,prefixed:!0,where:"console.mistral.ai",free:"paste as mistral:YOUR_KEY"},{id:"openrouter",label:"OpenRouter",test:e=>/^sk-or-/.test(e),where:"openrouter.ai/keys",free:"50 req/day"},{id:"openai",label:"OpenAI",test:e=>/^sk-/.test(e),where:"platform.openai.com"}];function so(e){let t=String(e||"").trim(),n=t.match(/^([a-z][a-z0-9]*):(.+)$/i);if(n){let r=Ka.find(a=>a.id===n[1].toLowerCase());if(r)return r}return Ka.find(r=>r.test(t))||null}var af="tasksh.aikeys.v1";function _n(){try{let e=JSON.parse(localStorage.getItem(af)||"null");if(Array.isArray(e)&&e.length)return e.filter(Boolean);let t=localStorage.getItem(Es);return t?[t]:[]}catch{return[]}}function Ls(e){let t=[...new Set(e.map(n=>String(n).trim()).filter(Boolean))].slice(0,10);try{localStorage.setItem(af,JSON.stringify(t)),t.length?localStorage.setItem(Es,t[0]):localStorage.removeItem(Es)}catch{}}function qh(e){let t=String(e||"").trim();if(!t)return _n();let n=[..._n(),t];return Ls(n),_n()}function Xh(e){let t=_n().filter(n=>n!==e);return Ls(t),t}function Yh(){return _n()[0]||""}function Qh(e){Ls(e?[e]:[])}function Ps(e){if(!e)return"";let t=String(e).match(/^([a-z][a-z0-9]*:)(.+)$/i);return t&&Ka.some(n=>n.id===t[1].slice(0,-1).toLowerCase())?t[1]+Ps(t[2]):e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`}var Ga=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function Zh(e){let t=await fetch(`${mo}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function Rh(e,t,n,r,a){let i=await fetch(`${mo}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:a,apiKeys:_n()})}),l=null;try{l=await i.json()}catch{}if(!i.ok){let s=l&&l.error;throw s==="no_key"||s==="bad_key"?new Ga(l&&l.message||"key rejected"):new Error(l&&l.message||`request failed (${i.status})`)}return{reply:l&&l.reply||"\u2026",actions:l&&l.actions||[]}}var eg=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function Jp(e,t){let n=(r,a)=>(r||[]).find(i=>i.id===a);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Pt(at(e.time))} \xB7 ${e.label} (${Dt(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),a=[];return e.time!==void 0&&e.time!==r?.time&&a.push(`${Pt(at(r?.time||"00:00"))} \u2192 ${Pt(at(e.time))}`),e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&a.push(`${Dt(r?.duration||0)} \u2192 ${Dt(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${a.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),a=[];return e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&a.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${a.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function tg(e,t,n){let{routines:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:xe(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(d=>d.id===c.id?{...d,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:d),u.add("routines");break;case"delete_routine":r=r.filter(d=>d.id!==c.id),u.add("routines");break;case"add_vault_habit":a=[...a,{id:xe(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":a=a.map(d=>d.id===c.id?{...d,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:d),u.add("vaultHabits");break;case"delete_vault_habit":a=a.filter(d=>d.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:xe(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(d=>d.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:xe(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(d=>d.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:xe(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(d=>d.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(a),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}function ng({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:a}){let{pet:i,form:l,mood:s,nudge:u,remember:c,rename:d}=e,[f,g]=(0,o.useState)(()=>Yh()),[v,k]=(0,o.useState)(!1),[x,N]=(0,o.useState)(null),[m,p]=(0,o.useState)(""),[h,y]=(0,o.useState)(!1),[w,b]=(0,o.useState)(0),[T,E]=(0,o.useState)(null),[O,L]=(0,o.useState)(null),[J,X]=(0,o.useState)(()=>new Set),[_,I]=(0,o.useState)(!1),[S,A]=(0,o.useState)(i.name),[Z,he]=(0,o.useState)(!0),j=(0,o.useRef)(null),le=(0,o.useRef)(0),se=(0,o.useMemo)(()=>H0(r),[r]);(0,o.useEffect)(()=>{if(!h){b(0);return}let F=Date.now(),q=setInterval(()=>b((Date.now()-F)/1e3),100);return()=>clearInterval(q)},[h]),(0,o.useEffect)(()=>{j.current&&(j.current.scrollTop=j.current.scrollHeight)},[i.log,O,h]);let ge=async F=>{let q=(F??m).trim();if(!q||h)return;let ne=Date.now()-le.current;if(ne<3e3){E(`give me a second \u2014 ${Math.ceil((3e3-ne)/1e3)}s`);return}if(p(""),c("user",q),u("chat"),D.click(),!f){c("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),k(!0);return}le.current=Date.now(),y(!0),E(null),L(null),X(new Set);try{let Se=await Rh(q,{routines:t.routines,vaultHabits:t.vaultHabits,goodHabits:t.goodHabits,badHabits:t.badHabits,rewards:t.rewards,totalXP:t.totalXP},V0(r),i.log||[],f);c("pet",Se.reply),Se.actions.length&&(L(Se),D.success())}catch(Se){Se instanceof Ga?(Qh(""),g(""),N(Se.message),k(!0),c("pet","my link to the wider world got rejected. mind checking the key?")):(c("pet","couldn't reach far enough to answer that. try again in a moment."),E(Se.message||null)),D.error()}finally{y(!1)}},it=F=>X(q=>{let ne=new Set(q);return ne.has(F)?ne.delete(F):ne.add(F),ne}),ke=O?O.actions.filter((F,q)=>!J.has(q)):[],Qe=()=>{ke.length&&(tg(ke,t,n),D.success(),u("chat"),a("success",`applied ${ke.length} change${ke.length===1?"":"s"}`),c("pet",`done \u2014 ${ke.length} change${ke.length===1?"":"s"} applied.`),L(null),X(new Set))},ln=()=>{D.whoosh(),c("pet","left it as it was."),L(null),X(new Set)};if(v)return o.default.createElement(rg,{initialError:x,onCancel:()=>k(!1),onSaved:(F,q,ne={})=>{g(F),N(null),ne.keepOpen||k(!1),a("success",q||"connected")}});let $e=ke.reduce((F,q)=>{let ne=Jp(q,t).kind;return F[ne]=(F[ne]||0)+1,F},{});return o.default.createElement("div",{className:"task-list companion-scroll"},o.default.createElement("div",{className:"cmp-hero"},o.default.createElement(Ns,{stage:l.stage,mood:s.key,size:132}),o.default.createElement("div",{className:"cmp-id"},_?o.default.createElement("input",{className:"pet-name-input",value:S,autoFocus:!0,maxLength:14,onChange:F=>A(F.target.value),onBlur:()=>{d(S),I(!1)},onKeyDown:F=>{F.key==="Enter"&&(d(S),I(!1))}}):o.default.createElement("button",{className:"pet-name",onClick:()=>{A(i.name),I(!0)}},i.name),o.default.createElement("span",{className:"pet-form"},l.name," \xB7 ",s.label)),o.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>he(F=>!F)},Z?"stats":"hide")),!Z&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"pet-stats"},o.default.createElement(Ua,{label:"happiness",value:i.happiness,color:"var(--accent)"}),o.default.createElement(Ua,{label:"energy",value:i.energy,color:"var(--accent2)"}),o.default.createElement(Ua,{label:"friendship",value:i.friendship,color:"var(--accent)"}),o.default.createElement(Ua,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),o.default.createElement("div",{className:"pet-next"},qp(i.friendship),ws(r.level)?` \xB7 next form at level ${ws(r.level).minLevel}`:" \xB7 final form")),o.default.createElement("div",{className:"cmp-chat",ref:j},o.default.createElement("div",{className:"pet-msg pet cmp-greeting"},se),(i.log||[]).map((F,q)=>o.default.createElement("div",{key:q,className:`pet-msg ${F.role}`},F.text)),h&&o.default.createElement("div",{className:"pet-msg pet thinking"},o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),w>=1&&o.default.createElement("span",{className:"cmp-elapsed"},w.toFixed(1),"s")),O&&O.actions.length>0&&o.default.createElement("div",{className:"cmp-diff-wrap"},o.default.createElement("div",{className:"ai-diff-head"},o.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),o.default.createElement("span",{className:"ai-diff-counts"},$e.add?o.default.createElement("span",{className:"c-add"},"+",$e.add):null,$e.edit?o.default.createElement("span",{className:"c-edit"},"~",$e.edit):null,$e.remove?o.default.createElement("span",{className:"c-remove"},"\u2212",$e.remove):null)),o.default.createElement("div",{className:"ai-diff"},O.actions.map((F,q)=>{let ne=Jp(F,t),Se=J.has(q);return o.default.createElement("button",{key:q,className:`ai-diff-row ${ne.kind} ${Se?"skipped":""}`,onClick:()=>it(q),title:Se?"click to include":"click to skip"},o.default.createElement("span",{className:"ai-sign"},ne.kind==="add"?"+":ne.kind==="remove"?"\u2212":"~"),o.default.createElement("span",{className:"ai-surface"},ne.surface),o.default.createElement("span",{className:"ai-diff-text"},ne.text),o.default.createElement("span",{className:"ai-skip-mark"},Se?"skipped":""))})),o.default.createElement("div",{className:"ai-actions"},o.default.createElement("button",{className:"ai-apply",onClick:Qe,disabled:!ke.length},"apply ",ke.length||""),o.default.createElement("button",{className:"ai-discard",onClick:ln},"discard")),o.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),T&&o.default.createElement("div",{className:"ai-error cmp-error"},T),(i.log||[]).length===0&&!h&&o.default.createElement("div",{className:"ai-chips cmp-chips"},eg.map(F=>o.default.createElement("button",{key:F,className:"ai-chip",onClick:()=>ge(F)},F))),o.default.createElement("div",{className:"pet-composer"},o.default.createElement("input",{className:"pet-input",placeholder:f?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:m,onChange:F=>p(F.target.value),onKeyDown:F=>F.key==="Enter"&&ge(),disabled:h}),o.default.createElement("button",{className:"pet-send",onClick:()=>ge(),disabled:h||!m.trim()},"say")),o.default.createElement("button",{className:"cmp-key-link",onClick:()=>k(!0)},f?`key ${Ps(f)}`:"connect an ai key"))}function rg({onSaved:e,initialError:t,onCancel:n}){let[r,a]=(0,o.useState)(""),[i,l]=(0,o.useState)(()=>_n()),[s,u]=(0,o.useState)(!1),[c,d]=(0,o.useState)(t||null),f=(0,o.useRef)(null);(0,o.useEffect)(()=>{f.current?.focus()},[]);let g=async()=>{let v=r.trim();if(!(!v||s)){u(!0),d(null);try{let k=await Zh(v),x=qh(v);l(x),a(""),D.success(),e(v,k||(x.length>1?`${x.length} keys connected`:null),{keepOpen:x.length>1})}catch(k){d(k.message||"Couldn't verify that key."),D.error()}finally{u(!1)}}};return o.default.createElement("div",{className:"task-list ai-scroll"},o.default.createElement("div",{className:"ai-gate"},o.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),o.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),o.default.createElement("div",{className:"ai-gate-sub"},"the assistant needs an AI key. all of these have a free tier \u2014 pick whichever you like, or add several so it keeps working when one runs out."),o.default.createElement("div",{className:"prov-list"},Ka.filter(v=>v.free).map(v=>o.default.createElement("a",{key:v.id,className:"prov-chip",href:`https://${v.where}`,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("span",{className:"prov-chip-main"},o.default.createElement("span",{className:"prov-name"},v.label),o.default.createElement("span",{className:"prov-where"},v.where)),o.default.createElement("span",{className:"prov-free"},v.free)))),o.default.createElement("div",{className:"ai-gate-steps-note"},"sign in, create a key, paste it below. no card needed for any of them. adding two from ",o.default.createElement("i",null,"different")," providers is what actually buys you headroom."),o.default.createElement("input",{ref:f,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026 \xB7 gsk_\u2026 \xB7 csk-\u2026 \xB7 nvapi-\u2026 \xB7 ghp_\u2026",value:r,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&g()},disabled:s}),(()=>{let v=so(r);return r.trim()?v?o.default.createElement("div",{className:"prov-detected"},"detected: ",v.label,v.note?` \u2014 ${v.note}`:""):o.default.createElement("div",{className:"prov-detected prov-detected-warn"},"unknown prefix \u2014 if it's a Mistral key, paste it as mistral:YOUR_KEY"):null})(),c&&o.default.createElement("div",{className:"ai-error ai-gate-error"},c),o.default.createElement("div",{className:"ai-gate-actions"},o.default.createElement("button",{className:"ai-apply",onClick:g,disabled:s||!r.trim()},s?"checking\u2026":i.length?"add key":"save key"),n&&o.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),i.length>0&&o.default.createElement("div",{className:"keypool"},o.default.createElement("div",{className:"keypool-head"},o.default.createElement("span",null,i.length," key",i.length===1?"":"s"," connected"),o.default.createElement("span",{className:"keypool-hint"},"tried in order")),i.map((v,k)=>{let x=so(v);return o.default.createElement("div",{className:"keypool-row",key:v},o.default.createElement("span",{className:"keypool-num"},k+1),o.default.createElement("span",{className:"keypool-prov"},x?x.label:"?"),o.default.createElement("span",{className:"keypool-val"},Ps(v)),o.default.createElement("button",{className:"keypool-del",onClick:()=>{l(Xh(v)),D.delete()}},"remove"))}),o.default.createElement("div",{className:"keypool-note"},"tried top to bottom; a rate-limited key is skipped automatically.",i.filter(v=>so(v)?.id==="gemini").length>1&&o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," several Gemini keys from the same google account share one quota and add no capacity \u2014 mix in a different provider instead."),(()=>{let v=new Set(i.map(k=>so(k)?.id).filter(Boolean));return i.length<2||v.size!==1||v.has("gemini")?null:o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," every key is ",so(i[0]).label," \u2014 one outage takes the assistant down. add a second provider.")})())),o.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function Fe(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function og(e){typeof e=="number"&&Number.isFinite(e)&&e>Wa&&(Wa=e)}function ag(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(a=>n(a?.id))}),t}function ig({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s,setRewards:u,totalXP:c,setTab:d}){let f=(0,o.useMemo)(()=>tf(i,l||[],s),[i,l,s]),g=zs(),v=g.hour*60+g.minute,{sorted:k,currentId:x,nextId:N}=_s(e,v),m=k.find(_=>_.id===x),p=k.find(_=>_.id===N),h=$(0),y=_=>{let I=!(e.find(S=>S.id===_)?.history||[]).includes(h);t(S=>S.map(A=>{if(A.id!==_)return A;let he=(A.history||[]).includes(h)?A.history.filter(j=>j!==h):[...A.history||[],h];return{...A,history:he.slice(-60)}})),po.propagate("routine",_,I),I?(D.success(),an.emit("routineDone")):D.click()},w=(0,o.useMemo)(()=>{let _={high:0,mid:1,low:2};return[...n].filter(I=>!I.done).sort((I,S)=>_[I.priority]-_[S.priority])},[n]),b=_=>{r(I=>I.map(S=>S.id===_?{...S,done:!S.done}:S)),D.success()},T=(0,o.useMemo)(()=>s.filter(_=>f>=_.cost),[s,f]),E=_=>{u(I=>I.map(S=>S.id===_?{...S,claimed:[...S.claimed||[],h]}:S)),D.success()},O=(0,o.useMemo)(()=>{let _={},I=S=>{(S||[]).forEach(A=>{_[A]=(_[A]||0)+1})};return e.forEach(S=>I(S.history)),a.forEach(S=>I(S.history)),i.forEach(S=>I(S.history)),_},[e,a,i]),L=m||p,J=!!m,X=L?(L.history||[]).includes(h):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,J?"HAPPENING NOW":"NEXT UP")),L?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},Pt(at(L.time))),o.default.createElement("span",{className:"today-card-label"},L.label)),o.default.createElement("div",{className:"today-card-sub"},J?`in progress \xB7 ${Dt(L.duration)}`:`in ${Math.max(0,at(L.time)-v)}m \xB7 ${Dt(L.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${X?"done":""}`,onClick:()=>y(L.id)},X?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(rh,{counts:O,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),w.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),w.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},w.slice(0,5).map((_,I)=>o.default.createElement("div",{key:_.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>b(_.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},_.text),o.default.createElement("span",{className:`today-prio-dot ${_.priority}`}))),w.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",w.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(ht,{value:c})," XP")),T.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},T.map((_,I)=>o.default.createElement("div",{key:_.id,className:"today-task-row",style:{animationDelay:`${I*35}ms`}},o.default.createElement("span",{className:"today-task-text"},_.label),o.default.createElement("span",{className:"today-reward-cost"},_.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>E(_.id)},"claim")))))}function lg(){let[e,t]=(0,o.useState)("today"),[n,r]=eh(),a=z=>{z!==e&&D.whoosh(),t(z)},[i,l]=(0,o.useState)(()=>Fe(Dp,Dh)),[s,u]=(0,o.useState)(()=>Fe(Ap,ih)),[c,d]=(0,o.useState)(()=>Fe(Bp,ph)),[f,g]=(0,o.useState)(()=>Fe(Ip,fh)),[v,k]=(0,o.useState)(()=>Fe(Fp,Ch)),[x,N]=(0,o.useState)(()=>Fe($p,Mh)),[m,p]=(0,o.useState)(()=>Fe(Op,zh)),h=(0,o.useMemo)(()=>ef(v,x),[v,x,m]),y=(0,o.useMemo)(()=>nf(h).level,[h]),w=X0(y),b=K0(y),{links:T,setLinks:E}=O0(),O=Nh(),[L,J]=(0,o.useState)(null);(0,o.useEffect)(()=>Xa.register(z=>J(z)),[]),(0,o.useEffect)(()=>po.register((z,B,K)=>{$0(zn(z,B),K,T,{setRoutines:u,setVaultHabits:d,setGoodHabits:k},$(0))}),[T]);let X=$(0),_=(0,o.useMemo)(()=>{let z=Fe(Va,{});return{level:y,tasksDone:i.filter(B=>B.done).length,bestStreak:Math.max(v.reduce((B,K)=>Math.max(B,xs(K.history)),0),s.reduce((B,K)=>Math.max(B,xs(K.history)),0)),doneToday:v.filter(B=>(B.history||[]).includes(X)).length,totalHabits:v.length,routinesDoneToday:s.filter(B=>(B.history||[]).includes(X)).length,totalRoutines:s.length,vaultCount:c.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:z.calmSessions||0,earlyFinish:!!z.earlyFinish,lateFinish:!!z.lateFinish,returnedAfterGap:!!z.returnedAfterGap}},[y,i,v,s,c,b.pet,X]),I=J0(_),[S,A]=(0,o.useState)(null);(0,o.useEffect)(()=>{let z=Fe(Va,null);if(!z||z.seenLevel===void 0){uo({seenLevel:y});return}let B=z.seenLevel;if(y>B){let K=U0(y);I.addCoins(K);let re=dr.filter(Ee=>Ee.unlockLevel>B&&Ee.unlockLevel<=y);A({level:y,coins:K,unlockedTheme:re.length?re[re.length-1]:null,extraThemes:re.length>1?re.length-1:0,evolvedTo:Ja(y).stage>Ja(B).stage?Ja(y).stage:null}),uo({seenLevel:y})}else y<B&&uo({seenLevel:y})},[y]);let[Z,he]=(0,o.useState)(""),[j,le]=(0,o.useState)("mid"),[se,ge]=(0,o.useState)("all"),it=(0,o.useRef)(null),ke=(0,o.useRef)(null),[Qe,ln]=(0,o.useState)(null),$e=Ah(),[F,q]=(0,o.useState)(()=>localStorage.getItem(bs)==="1"),[ne,Se]=(0,o.useState)(!1),[Ya,sn]=(0,o.useState)(!1);(0,o.useEffect)(()=>{F&&Up(s)},[s,F]);let Ln=async()=>{if(!ne){Se(!0);try{F?(await Gh(),localStorage.setItem(bs,"0"),q(!1),Le("success","Notifications turned off")):(await Kh(),await Up(s),localStorage.setItem(bs,"1"),q(!0),Le("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(z){Le("error",z.message||"Couldn't set up notifications")}finally{Se(!1)}}},Le=(z,B)=>{ln({type:z,text:B})};(0,o.useEffect)(()=>{if(!Qe)return;let z=setTimeout(()=>ln(null),3200);return()=>clearTimeout(z)},[Qe]);let C=()=>{try{let z={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:f,goodHabits:v,badHabits:x,rewards:m}},B=new Blob([JSON.stringify(z,null,2)],{type:"application/json"}),K=URL.createObjectURL(B),re=$(0),Ee=document.createElement("a");Ee.href=K,Ee.download=`tasks-sh-backup-${re}.json`,document.body.appendChild(Ee),Ee.click(),Ee.remove(),URL.revokeObjectURL(K),Le("ok","backup exported")}catch{Le("err","export failed")}},U=()=>ke.current?.click(),de=z=>{let B=z.target.files&&z.target.files[0];if(z.target.value="",!B)return;let K=new FileReader;K.onerror=()=>Le("err","couldn't read that file"),K.onload=()=>{try{let re=JSON.parse(String(K.result)),Ee=re&&typeof re=="object"&&re.data?re.data:re;if(!Ee||typeof Ee!="object")throw new Error("bad shape");let Is={tasks:l,routines:u,vaultHabits:d,projects:g,goodHabits:k,badHabits:N,rewards:p},vo=0;for(let Qa of Object.keys(Is))Array.isArray(Ee[Qa])&&(Is[Qa](Ee[Qa]),vo++);if(vo===0){Le("err","no recognizable data in that file");return}og(ag(Ee)),Le("ok",`imported ${vo} data set${vo===1?"":"s"}`)}catch{Le("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},K.readAsText(B)},V=zs(),Pe=V.hour*60+V.minute,{currentId:At,sorted:Pn}=_s(s,Pe),[Bt,ho]=(0,o.useState)(null),go=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(go.current===void 0){go.current=At;return}if(At!==go.current){let z=Pn.find(B=>B.id===At);z&&ho({id:At,label:z.label,time:z.time}),go.current=At}},[At,Pn]),(0,o.useEffect)(()=>{if(!Bt)return;let z=setTimeout(()=>ho(null),6e3);return()=>clearTimeout(z)},[Bt]),(0,o.useEffect)(()=>{try{localStorage.setItem(Dp,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(Ap,JSON.stringify(s))}catch{}},[s]),(0,o.useEffect)(()=>{try{localStorage.setItem(Bp,JSON.stringify(c))}catch{}},[c]),(0,o.useEffect)(()=>{try{localStorage.setItem(Ip,JSON.stringify(f))}catch{}},[f]),(0,o.useEffect)(()=>{try{localStorage.setItem(Fp,JSON.stringify(v))}catch{}},[v]),(0,o.useEffect)(()=>{try{localStorage.setItem($p,JSON.stringify(x))}catch{}},[x]),(0,o.useEffect)(()=>{try{localStorage.setItem(Op,JSON.stringify(m))}catch{}},[m]);let It=(0,o.useMemo)(()=>{let z=i.length,B=i.filter(Ee=>Ee.done).length,K=z-B,re=z===0?0:Math.round(B/z*100);return{total:z,done:B,pending:K,pct:re}},[i]),Ds=(0,o.useMemo)(()=>{let z=i.filter(B=>!B.done);return Ha.map(B=>({key:B.key,label:B.label,color:B.color,value:z.filter(K=>K.priority===B.key).length}))},[i]),As=(0,o.useMemo)(()=>{let z=i;return se==="active"&&(z=z.filter(B=>!B.done)),se==="done"&&(z=z.filter(B=>B.done)),[...z].sort((B,K)=>{if(B.done!==K.done)return B.done?1:-1;let re={high:0,mid:1,low:2};return re[B.priority]-re[K.priority]})},[i,se]),Bs=()=>{let z=Z.trim();z&&(l(B=>[...B,{id:xe(),text:z,done:!1,priority:j,createdAt:Date.now()}]),he(""),it.current?.focus(),D.click())},lf=z=>{let B=!i.find(K=>K.id===z)?.done;l(K=>K.map(re=>re.id===z?{...re,done:!re.done}:re)),B?(D.success(),an.emit("taskDone")):D.click()},sf=z=>{l(B=>B.filter(K=>K.id!==z)),D.delete()},uf=()=>{l(z=>z.filter(B=>!B.done)),D.whoosh()};return o.default.createElement("div",{className:"app-root","data-particle":w.theme.ambient.particle},I.current&&o.default.createElement(Oh,{id:I.current,onDone:I.shift}),S&&o.default.createElement(jh,{level:S.level,coins:S.coins,unlockedTheme:S.unlockedTheme,extraThemes:S.extraThemes,evolvedTo:S.evolvedTo,onDone:()=>A(null)}),b.evolution&&o.default.createElement(Wh,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),L&&o.default.createElement($h,{selfRef:L,data:{routines:s,goodHabits:v,vaultHabits:c},links:T,setLinks:E,onClose:()=>J(null)}),Ya&&o.default.createElement(Jh,{ctl:w,level:y,totalXP:h,earned:I.earned,coins:I.coins,onClose:()=>sn(!1)}),o.default.createElement("style",null,`
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
      `),o.default.createElement("div",{className:"panel"},o.default.createElement(q0,{theme:w.theme,phase:w.phase,calm:w.calm,scoped:!0}),Bt&&o.default.createElement("div",{className:"quest-banner",onClick:()=>ho(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",Bt.label),o.default.createElement("button",{className:"quest-banner-close",onClick:z=>{z.stopPropagation(),ho(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:ke,onChange:de,style:{display:"none"}}),o.default.createElement("button",{className:`titlebar-icon-btn ${F?"notify-on":""}`,onClick:Ln,disabled:ne,"aria-label":F?"Turn off notifications":"Turn on notifications",title:F?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},F?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{sn(!0),D.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:U,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:C,"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date($e).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),Qe&&o.default.createElement("div",{className:`data-toast ${Qe.type}`},Qe.text),o.default.createElement("div",{className:"tabs"},o.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>a("today")},"today"),o.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>a("tasks")},"tasks"),o.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>a("routines")},"routines"),o.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>a("vault")},"vault"),o.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>a("quest")},"quest"),o.default.createElement("button",{className:`tab-pet ${e==="pet"?"active":""}`,onClick:()=>a("pet")},b.pet.name.toLowerCase())),o.default.createElement("div",{key:e,className:"tab-content"},e==="today"?o.default.createElement(ig,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:v,badHabits:x,rewards:m,setRewards:p,totalXP:h,setTab:a}):e==="tasks"?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"stats-bar stats-bar-viz"},o.default.createElement(Ms,{pct:It.pct,size:64,stroke:5.5,label:`${It.pct}%`}),o.default.createElement("div",{className:"stats-row-viz"},o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(ht,{value:It.total}))," total"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(ht,{value:It.pending}))," pending"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(ht,{value:It.done}))," done"))),It.pending>0&&o.default.createElement("div",{className:"donut-card"},o.default.createElement(Qp,{size:96,stroke:14,centerLabel:It.pending,centerSublabel:"open",segments:Ds.map(z=>({key:z.key,value:z.value,color:z.color}))}),o.default.createElement("div",{className:"donut-legend"},Ds.map(z=>o.default.createElement("div",{className:"donut-legend-row",key:z.key},o.default.createElement("span",{className:"donut-legend-dot",style:{background:z.color}}),o.default.createElement("span",null,z.label," priority"),o.default.createElement("span",{className:"donut-legend-val"},z.value))))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{ref:it,type:"text",placeholder:"add a task, press enter...",value:Z,onChange:z=>he(z.target.value),onKeyDown:z=>z.key==="Enter"&&Bs()}),o.default.createElement("div",{className:"prio-select"},Ha.map(z=>o.default.createElement("button",{key:z.key,className:j===z.key?"active":"",style:{"--pc":z.color},onClick:()=>le(z.key)},z.label))),o.default.createElement("button",{className:"add-btn",onClick:Bs,"aria-label":"Add task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"filters"},["all","active","done"].map(z=>o.default.createElement("button",{key:z,className:se===z?"active":"",onClick:()=>ge(z)},z)),o.default.createElement("span",{className:"spacer"}),It.done>0&&o.default.createElement("button",{className:"clear-btn",onClick:uf},"clear done")),o.default.createElement("div",{className:"task-list"},As.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},se==="done"?"nothing completed yet":"queue's empty \u2014 add something")):As.map((z,B)=>o.default.createElement(Ih,{key:z.id,task:z,now:$e,index:B,onToggle:lf,onDelete:sf})))):e==="routines"?o.default.createElement(sh,{routines:s,setRoutines:u}):e==="vault"?o.default.createElement(kh,{vaultHabits:c,setVaultHabits:d,projects:f,setProjects:g}):e==="quest"?o.default.createElement(Ph,{tagCtl:O,goodHabits:v,setGoodHabits:k,badHabits:x,setBadHabits:N,rewards:m,setRewards:p}):o.default.createElement(ng,{petCtl:b,state:{routines:s,vaultHabits:c,goodHabits:v,badHabits:x,rewards:m,totalXP:h},setters:{setRoutines:u,setVaultHabits:d,setGoodHabits:k,setBadHabits:N,setRewards:p},showDataMsg:Le,ctx:{pet:b.pet,level:y,hour:cr().hour,phase:w.phase.id,doneToday:v.filter(z=>(z.history||[]).includes($(0))).length,totalToday:v.length,streak:v.reduce((z,B)=>Math.max(z,xs(B.history)),0),routineNow:null,nextRoutine:null}}))))}var sg=Wp.default.createRoot(document.getElementById("root"));sg.render(o.default.createElement(lg));})();
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
