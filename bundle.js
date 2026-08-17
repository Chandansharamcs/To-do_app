(()=>{var Ef=Object.create;var Xs=Object.defineProperty;var Cf=Object.getOwnPropertyDescriptor;var Mf=Object.getOwnPropertyNames;var zf=Object.getPrototypeOf,_f=Object.prototype.hasOwnProperty;var dn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Tf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Mf(t))!_f.call(e,a)&&a!==n&&Xs(e,a,{get:()=>t[a],enumerable:!(r=Cf(t,a))||r.enumerable});return e};var Ys=(e,t,n)=>(n=e!=null?Ef(zf(e)):{},Tf(t||!e||!e.__esModule?Xs(n,"default",{value:e,enumerable:!0}):n,e));var su=dn(K=>{"use strict";var gr=Symbol.for("react.element"),Lf=Symbol.for("react.portal"),Pf=Symbol.for("react.fragment"),Af=Symbol.for("react.strict_mode"),Df=Symbol.for("react.profiler"),If=Symbol.for("react.provider"),Bf=Symbol.for("react.context"),$f=Symbol.for("react.forward_ref"),Ff=Symbol.for("react.suspense"),Of=Symbol.for("react.memo"),jf=Symbol.for("react.lazy"),Qs=Symbol.iterator;function Jf(e){return e===null||typeof e!="object"?null:(e=Qs&&e[Qs]||e["@@iterator"],typeof e=="function"?e:null)}var eu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tu=Object.assign,nu={};function In(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}In.prototype.isReactComponent={};In.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};In.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ru(){}ru.prototype=In.prototype;function ui(e,t,n){this.props=e,this.context=t,this.refs=nu,this.updater=n||eu}var ci=ui.prototype=new ru;ci.constructor=ui;tu(ci,In.prototype);ci.isPureReactComponent=!0;var Zs=Array.isArray,ou=Object.prototype.hasOwnProperty,di={current:null},au={key:!0,ref:!0,__self:!0,__source:!0};function iu(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)ou.call(t,r)&&!au.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:gr,type:e,key:i,ref:l,props:a,_owner:di.current}}function Uf(e,t){return{$$typeof:gr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function pi(e){return typeof e=="object"&&e!==null&&e.$$typeof===gr}function Wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rs=/\/+/g;function si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Wf(""+e.key):t.toString(36)}function wo(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case gr:case Lf:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+si(l,0):r,Zs(a)?(n="",e!=null&&(n=e.replace(Rs,"$&/")+"/"),wo(a,t,n,"",function(c){return c})):a!=null&&(pi(a)&&(a=Uf(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Rs,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Zs(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+si(i,s);l+=wo(i,t,n,u,a)}else if(u=Jf(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+si(i,s++),l+=wo(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function bo(e,t,n){if(e==null)return e;var r=[],a=0;return wo(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Hf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},No={transition:null},Vf={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:No,ReactCurrentOwner:di};function lu(){throw Error("act(...) is not supported in production builds of React.")}K.Children={map:bo,forEach:function(e,t,n){bo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!pi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};K.Component=In;K.Fragment=Pf;K.Profiler=Df;K.PureComponent=ui;K.StrictMode=Af;K.Suspense=Ff;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vf;K.act=lu;K.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=tu({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=di.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)ou.call(t,u)&&!au.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:gr,type:e.type,key:a,ref:i,props:r,_owner:l}};K.createContext=function(e){return e={$$typeof:Bf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:If,_context:e},e.Consumer=e};K.createElement=iu;K.createFactory=function(e){var t=iu.bind(null,e);return t.type=e,t};K.createRef=function(){return{current:null}};K.forwardRef=function(e){return{$$typeof:$f,render:e}};K.isValidElement=pi;K.lazy=function(e){return{$$typeof:jf,_payload:{_status:-1,_result:e},_init:Hf}};K.memo=function(e,t){return{$$typeof:Of,type:e,compare:t===void 0?null:t}};K.startTransition=function(e){var t=No.transition;No.transition={};try{e()}finally{No.transition=t}};K.unstable_act=lu;K.useCallback=function(e,t){return Te.current.useCallback(e,t)};K.useContext=function(e){return Te.current.useContext(e)};K.useDebugValue=function(){};K.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};K.useEffect=function(e,t){return Te.current.useEffect(e,t)};K.useId=function(){return Te.current.useId()};K.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};K.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};K.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};K.useMemo=function(e,t){return Te.current.useMemo(e,t)};K.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};K.useRef=function(e){return Te.current.useRef(e)};K.useState=function(e){return Te.current.useState(e)};K.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};K.useTransition=function(){return Te.current.useTransition()};K.version="18.3.1"});var fi=dn((Dg,uu)=>{"use strict";uu.exports=su()});var xu=dn(ee=>{"use strict";function vi(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<So(a,t))e[r]=t,e[n]=a,n=r;else break e}}function it(e){return e.length===0?null:e[0]}function Co(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>So(s,n))u<a&&0>So(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<a&&0>So(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function So(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(cu=performance,ee.unstable_now=function(){return cu.now()}):(mi=Date,du=mi.now(),ee.unstable_now=function(){return mi.now()-du});var cu,mi,du,kt=[],Jt=[],Kf=1,Ye=null,Se=3,Mo=!1,pn=!1,yr=!1,mu=typeof setTimeout=="function"?setTimeout:null,hu=typeof clearTimeout=="function"?clearTimeout:null,pu=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function yi(e){for(var t=it(Jt);t!==null;){if(t.callback===null)Co(Jt);else if(t.startTime<=e)Co(Jt),t.sortIndex=t.expirationTime,vi(kt,t);else break;t=it(Jt)}}function xi(e){if(yr=!1,yi(e),!pn)if(it(kt)!==null)pn=!0,bi(ki);else{var t=it(Jt);t!==null&&wi(xi,t.startTime-e)}}function ki(e,t){pn=!1,yr&&(yr=!1,hu(xr),xr=-1),Mo=!0;var n=Se;try{for(yi(t),Ye=it(kt);Ye!==null&&(!(Ye.expirationTime>t)||e&&!yu());){var r=Ye.callback;if(typeof r=="function"){Ye.callback=null,Se=Ye.priorityLevel;var a=r(Ye.expirationTime<=t);t=ee.unstable_now(),typeof a=="function"?Ye.callback=a:Ye===it(kt)&&Co(kt),yi(t)}else Co(kt);Ye=it(kt)}if(Ye!==null)var i=!0;else{var l=it(Jt);l!==null&&wi(xi,l.startTime-t),i=!1}return i}finally{Ye=null,Se=n,Mo=!1}}var zo=!1,Eo=null,xr=-1,gu=5,vu=-1;function yu(){return!(ee.unstable_now()-vu<gu)}function hi(){if(Eo!==null){var e=ee.unstable_now();vu=e;var t=!0;try{t=Eo(!0,e)}finally{t?vr():(zo=!1,Eo=null)}}else zo=!1}var vr;typeof pu=="function"?vr=function(){pu(hi)}:typeof MessageChannel<"u"?(gi=new MessageChannel,fu=gi.port2,gi.port1.onmessage=hi,vr=function(){fu.postMessage(null)}):vr=function(){mu(hi,0)};var gi,fu;function bi(e){Eo=e,zo||(zo=!0,vr())}function wi(e,t){xr=mu(function(){e(ee.unstable_now())},t)}ee.unstable_IdlePriority=5;ee.unstable_ImmediatePriority=1;ee.unstable_LowPriority=4;ee.unstable_NormalPriority=3;ee.unstable_Profiling=null;ee.unstable_UserBlockingPriority=2;ee.unstable_cancelCallback=function(e){e.callback=null};ee.unstable_continueExecution=function(){pn||Mo||(pn=!0,bi(ki))};ee.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gu=0<e?Math.floor(1e3/e):5};ee.unstable_getCurrentPriorityLevel=function(){return Se};ee.unstable_getFirstCallbackNode=function(){return it(kt)};ee.unstable_next=function(e){switch(Se){case 1:case 2:case 3:var t=3;break;default:t=Se}var n=Se;Se=t;try{return e()}finally{Se=n}};ee.unstable_pauseExecution=function(){};ee.unstable_requestPaint=function(){};ee.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Se;Se=e;try{return t()}finally{Se=n}};ee.unstable_scheduleCallback=function(e,t,n){var r=ee.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:Kf++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,vi(Jt,e),it(kt)===null&&e===it(Jt)&&(yr?(hu(xr),xr=-1):yr=!0,wi(xi,n-r))):(e.sortIndex=a,vi(kt,e),pn||Mo||(pn=!0,bi(ki))),e};ee.unstable_shouldYield=yu;ee.unstable_wrapCallback=function(e){var t=Se;return function(){var n=Se;Se=t;try{return e.apply(this,arguments)}finally{Se=n}}}});var bu=dn((Bg,ku)=>{"use strict";ku.exports=xu()});var Ep=dn(qe=>{"use strict";var qf=fi(),Ve=bu();function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var zc=new Set,Jr={};function En(e,t){nr(e,t),nr(e+"Capture",t)}function nr(e,t){for(Jr[e]=t,e=0;e<t.length;e++)zc.add(t[e])}var At=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vi=Object.prototype.hasOwnProperty,Gf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wu={},Nu={};function Xf(e){return Vi.call(Nu,e)?!0:Vi.call(wu,e)?!1:Gf.test(e)?Nu[e]=!0:(wu[e]=!0,!1)}function Yf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Qf(e,t,n,r){if(t===null||typeof t>"u"||Yf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ae(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Ae(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Ae(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Ae(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Ae(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Ae(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Ae(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Ae(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Ae(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Ae(e,5,!1,e.toLowerCase(),null,!1,!1)});var $l=/[\-:]([a-z])/g;function Fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace($l,Fl);Ne[t]=new Ae(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace($l,Fl);Ne[t]=new Ae(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace($l,Fl);Ne[t]=new Ae(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Ae(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Ae("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Ae(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ol(e,t,n,r){var a=Ne.hasOwnProperty(t)?Ne[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Qf(t,n,a,r)&&(n=null),r||a===null?Xf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var $t=qf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_o=Symbol.for("react.element"),Fn=Symbol.for("react.portal"),On=Symbol.for("react.fragment"),jl=Symbol.for("react.strict_mode"),Ki=Symbol.for("react.profiler"),_c=Symbol.for("react.provider"),Tc=Symbol.for("react.context"),Jl=Symbol.for("react.forward_ref"),qi=Symbol.for("react.suspense"),Gi=Symbol.for("react.suspense_list"),Ul=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Lc=Symbol.for("react.offscreen"),Su=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=Su&&e[Su]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Object.assign,Ni;function zr(e){if(Ni===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ni=t&&t[1]||""}return`
`+Ni+e}var Si=!1;function Ei(e,t){if(!e||Si)return"";Si=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Si=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?zr(e):""}function Zf(e){switch(e.tag){case 5:return zr(e.type);case 16:return zr("Lazy");case 13:return zr("Suspense");case 19:return zr("SuspenseList");case 0:case 2:case 15:return e=Ei(e.type,!1),e;case 11:return e=Ei(e.type.render,!1),e;case 1:return e=Ei(e.type,!0),e;default:return""}}function Xi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case On:return"Fragment";case Fn:return"Portal";case Ki:return"Profiler";case jl:return"StrictMode";case qi:return"Suspense";case Gi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Tc:return(e.displayName||"Context")+".Consumer";case _c:return(e._context.displayName||"Context")+".Provider";case Jl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ul:return t=e.displayName||null,t!==null?t:Xi(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Xi(e(t))}catch{}}return null}function Rf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xi(t);case 8:return t===jl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function em(e){var t=Pc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function To(e){e._valueTracker||(e._valueTracker=em(e))}function Ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Pc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function oa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Yi(e,t){var n=t.checked;return ue({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Eu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dc(e,t){t=t.checked,t!=null&&Ol(e,"checked",t,!1)}function Qi(e,t){Dc(e,t);var n=rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zi(e,t.type,rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Cu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zi(e,t,n){(t!=="number"||oa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _r=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+rn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ri(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return ue({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(_r(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:rn(n)}}function Ic(e,t){var n=rn(t.value),r=rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function zu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function el(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,$c=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ur(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tm=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function Fc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function Oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Fc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var nm=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tl(e,t){if(t){if(nm[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function nl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function Wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ol=null,Qn=null,Zn=null;function _u(e){if(e=io(e)){if(typeof ol!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Pa(t),ol(e.stateNode,e.type,t))}}function jc(e){Qn?Zn?Zn.push(e):Zn=[e]:Qn=e}function Jc(){if(Qn){var e=Qn,t=Zn;if(Zn=Qn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function Uc(e,t){return e(t)}function Wc(){}var Ci=!1;function Hc(e,t,n){if(Ci)return e(t,n);Ci=!0;try{return Uc(e,t,n)}finally{Ci=!1,(Qn!==null||Zn!==null)&&(Wc(),Jc())}}function Wr(e,t){var n=e.stateNode;if(n===null)return null;var r=Pa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var al=!1;if(At)try{Bn={},Object.defineProperty(Bn,"passive",{get:function(){al=!0}}),window.addEventListener("test",Bn,Bn),window.removeEventListener("test",Bn,Bn)}catch{al=!1}var Bn;function rm(e,t,n,r,a,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var Ar=!1,aa=null,ia=!1,il=null,om={onError:function(e){Ar=!0,aa=e}};function am(e,t,n,r,a,i,l,s,u){Ar=!1,aa=null,rm.apply(om,arguments)}function im(e,t,n,r,a,i,l,s,u){if(am.apply(this,arguments),Ar){if(Ar){var c=aa;Ar=!1,aa=null}else throw Error(S(198));ia||(ia=!0,il=c)}}function Cn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tu(e){if(Cn(e)!==e)throw Error(S(188))}function lm(e){var t=e.alternate;if(!t){if(t=Cn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Tu(a),e;if(i===r)return Tu(a),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function Kc(e){return e=lm(e),e!==null?qc(e):null}function qc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=qc(e);if(t!==null)return t;e=e.sibling}return null}var Gc=Ve.unstable_scheduleCallback,Lu=Ve.unstable_cancelCallback,sm=Ve.unstable_shouldYield,um=Ve.unstable_requestPaint,pe=Ve.unstable_now,cm=Ve.unstable_getCurrentPriorityLevel,Hl=Ve.unstable_ImmediatePriority,Xc=Ve.unstable_UserBlockingPriority,la=Ve.unstable_NormalPriority,dm=Ve.unstable_LowPriority,Yc=Ve.unstable_IdlePriority,za=null,St=null;function pm(e){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(za,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:hm,fm=Math.log,mm=Math.LN2;function hm(e){return e>>>=0,e===0?32:31-(fm(e)/mm|0)|0}var Po=64,Ao=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function sa(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=Tr(s):(i&=l,i!==0&&(r=Tr(i)))}else l=n&~a,l!==0?r=Tr(l):i!==0&&(r=Tr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),a=1<<n,r|=e[n],t&=~a;return r}function gm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vm(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-dt(i),s=1<<l,u=a[l];u===-1?((s&n)===0||(s&r)!==0)&&(a[l]=gm(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Qc(){var e=Po;return Po<<=1,(Po&4194240)===0&&(Po=64),e}function Mi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function oo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function ym(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-dt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Vl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var Q=0;function Zc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rc,Kl,ed,td,nd,sl=!1,Do=[],Xt=null,Yt=null,Qt=null,Hr=new Map,Vr=new Map,Vt=[],xm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pu(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Yt=null;break;case"mouseover":case"mouseout":Qt=null;break;case"pointerover":case"pointerout":Hr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vr.delete(t.pointerId)}}function br(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=io(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function km(e,t,n,r,a){switch(t){case"focusin":return Xt=br(Xt,e,t,n,r,a),!0;case"dragenter":return Yt=br(Yt,e,t,n,r,a),!0;case"mouseover":return Qt=br(Qt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Hr.set(i,br(Hr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Vr.set(i,br(Vr.get(i)||null,e,t,n,r,a)),!0}return!1}function rd(e){var t=hn(e.target);if(t!==null){var n=Cn(t);if(n!==null){if(t=n.tag,t===13){if(t=Vc(n),t!==null){e.blockedOn=t,nd(e.priority,function(){ed(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Go(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);rl=r,n.target.dispatchEvent(r),rl=null}else return t=io(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function Au(e,t,n){Go(e)&&n.delete(t)}function bm(){sl=!1,Xt!==null&&Go(Xt)&&(Xt=null),Yt!==null&&Go(Yt)&&(Yt=null),Qt!==null&&Go(Qt)&&(Qt=null),Hr.forEach(Au),Vr.forEach(Au)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,Ve.unstable_scheduleCallback(Ve.unstable_NormalPriority,bm)))}function Kr(e){function t(a){return wr(a,e)}if(0<Do.length){wr(Do[0],e);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&wr(Xt,e),Yt!==null&&wr(Yt,e),Qt!==null&&wr(Qt,e),Hr.forEach(t),Vr.forEach(t),n=0;n<Vt.length;n++)r=Vt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Vt.length&&(n=Vt[0],n.blockedOn===null);)rd(n),n.blockedOn===null&&Vt.shift()}var Rn=$t.ReactCurrentBatchConfig,ua=!0;function wm(e,t,n,r){var a=Q,i=Rn.transition;Rn.transition=null;try{Q=1,ql(e,t,n,r)}finally{Q=a,Rn.transition=i}}function Nm(e,t,n,r){var a=Q,i=Rn.transition;Rn.transition=null;try{Q=4,ql(e,t,n,r)}finally{Q=a,Rn.transition=i}}function ql(e,t,n,r){if(ua){var a=ul(e,t,n,r);if(a===null)Di(e,t,r,ca,n),Pu(e,r);else if(km(a,e,t,n,r))r.stopPropagation();else if(Pu(e,r),t&4&&-1<xm.indexOf(e)){for(;a!==null;){var i=io(a);if(i!==null&&Rc(i),i=ul(e,t,n,r),i===null&&Di(e,t,r,ca,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Di(e,t,r,null,n)}}var ca=null;function ul(e,t,n,r){if(ca=null,e=Wl(r),e=hn(e),e!==null)if(t=Cn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ca=e,null}function od(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(cm()){case Hl:return 1;case Xc:return 4;case la:case dm:return 16;case Yc:return 536870912;default:return 16}default:return 16}}var qt=null,Gl=null,Xo=null;function ad(){if(Xo)return Xo;var e,t=Gl,n=t.length,r,a="value"in qt?qt.value:qt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Xo=a.slice(e,1<r?1-r:void 0)}function Yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Io(){return!0}function Du(){return!1}function Ke(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Io:Du,this.isPropagationStopped=Du,this}return ue(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),t}var ur={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Ke(ur),ao=ue({},ur,{view:0,detail:0}),Sm=Ke(ao),zi,_i,Nr,_a=ue({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?(zi=e.screenX-Nr.screenX,_i=e.screenY-Nr.screenY):_i=zi=0,Nr=e),zi)},movementY:function(e){return"movementY"in e?e.movementY:_i}}),Iu=Ke(_a),Em=ue({},_a,{dataTransfer:0}),Cm=Ke(Em),Mm=ue({},ao,{relatedTarget:0}),Ti=Ke(Mm),zm=ue({},ur,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=Ke(zm),Tm=ue({},ur,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lm=Ke(Tm),Pm=ue({},ur,{data:0}),Bu=Ke(Pm),Am={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Im={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Im[e])?!!t[e]:!1}function Yl(){return Bm}var $m=ue({},ao,{key:function(e){if(e.key){var t=Am[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Dm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yl,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Fm=Ke($m),Om=ue({},_a,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=Ke(Om),jm=ue({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yl}),Jm=Ke(jm),Um=ue({},ur,{propertyName:0,elapsedTime:0,pseudoElement:0}),Wm=Ke(Um),Hm=ue({},_a,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vm=Ke(Hm),Km=[9,13,27,32],Ql=At&&"CompositionEvent"in window,Dr=null;At&&"documentMode"in document&&(Dr=document.documentMode);var qm=At&&"TextEvent"in window&&!Dr,id=At&&(!Ql||Dr&&8<Dr&&11>=Dr),Fu=" ",Ou=!1;function ld(e,t){switch(e){case"keyup":return Km.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jn=!1;function Gm(e,t){switch(e){case"compositionend":return sd(t);case"keypress":return t.which!==32?null:(Ou=!0,Fu);case"textInput":return e=t.data,e===Fu&&Ou?null:e;default:return null}}function Xm(e,t){if(jn)return e==="compositionend"||!Ql&&ld(e,t)?(e=ad(),Xo=Gl=qt=null,jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return id&&t.locale!=="ko"?null:t.data;default:return null}}var Ym={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ju(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ym[e.type]:t==="textarea"}function ud(e,t,n,r){jc(r),t=da(t,"onChange"),0<t.length&&(n=new Xl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,qr=null;function Qm(e){kd(e,0)}function Ta(e){var t=Wn(e);if(Ac(t))return e}function Zm(e,t){if(e==="change")return t}var cd=!1;At&&(At?($o="oninput"in document,$o||(Li=document.createElement("div"),Li.setAttribute("oninput","return;"),$o=typeof Li.oninput=="function"),Bo=$o):Bo=!1,cd=Bo&&(!document.documentMode||9<document.documentMode));var Bo,$o,Li;function Ju(){Ir&&(Ir.detachEvent("onpropertychange",dd),qr=Ir=null)}function dd(e){if(e.propertyName==="value"&&Ta(qr)){var t=[];ud(t,qr,e,Wl(e)),Hc(Qm,t)}}function Rm(e,t,n){e==="focusin"?(Ju(),Ir=t,qr=n,Ir.attachEvent("onpropertychange",dd)):e==="focusout"&&Ju()}function e0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(qr)}function t0(e,t){if(e==="click")return Ta(t)}function n0(e,t){if(e==="input"||e==="change")return Ta(t)}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:r0;function Gr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Vi.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Wu(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function fd(){for(var e=window,t=oa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=oa(e.document)}return t}function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function o0(e){var t=fd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pd(n.ownerDocument.documentElement,n)){if(r!==null&&Zl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Wu(n,i);var l=Wu(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var a0=At&&"documentMode"in document&&11>=document.documentMode,Jn=null,cl=null,Br=null,dl=!1;function Hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dl||Jn==null||Jn!==oa(r)||(r=Jn,"selectionStart"in r&&Zl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&Gr(Br,r)||(Br=r,r=da(cl,"onSelect"),0<r.length&&(t=new Xl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jn)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Un={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Pi={},md={};At&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Un.animationend.animation,delete Un.animationiteration.animation,delete Un.animationstart.animation),"TransitionEvent"in window||delete Un.transitionend.transition);function La(e){if(Pi[e])return Pi[e];if(!Un[e])return e;var t=Un[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in md)return Pi[e]=t[n];return e}var hd=La("animationend"),gd=La("animationiteration"),vd=La("animationstart"),yd=La("transitionend"),xd=new Map,Vu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function an(e,t){xd.set(e,t),En(t,[e])}for(Oo=0;Oo<Vu.length;Oo++)jo=Vu[Oo],Ku=jo.toLowerCase(),qu=jo[0].toUpperCase()+jo.slice(1),an(Ku,"on"+qu);var jo,Ku,qu,Oo;an(hd,"onAnimationEnd");an(gd,"onAnimationIteration");an(vd,"onAnimationStart");an("dblclick","onDoubleClick");an("focusin","onFocus");an("focusout","onBlur");an(yd,"onTransitionEnd");nr("onMouseEnter",["mouseout","mouseover"]);nr("onMouseLeave",["mouseout","mouseover"]);nr("onPointerEnter",["pointerout","pointerover"]);nr("onPointerLeave",["pointerout","pointerover"]);En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));En("onBeforeInput",["compositionend","keypress","textInput","paste"]);En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lr));function Gu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,im(r,t,void 0,e),e.currentTarget=null}function kd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;Gu(a,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;Gu(a,s,c),i=u}}}if(ia)throw e=il,ia=!1,il=null,e}function ne(e,t){var n=t[gl];n===void 0&&(n=t[gl]=new Set);var r=e+"__bubble";n.has(r)||(bd(t,e,2,!1),n.add(r))}function Ai(e,t,n){var r=0;t&&(r|=4),bd(n,e,r,t)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Xr(e){if(!e[Jo]){e[Jo]=!0,zc.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||Ai(n,!1,e),Ai(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Jo]||(t[Jo]=!0,Ai("selectionchange",!1,t))}}function bd(e,t,n,r){switch(od(t)){case 1:var a=wm;break;case 4:a=Nm;break;default:a=ql}n=a.bind(null,t,n,e),a=void 0,!al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Di(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=hn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Hc(function(){var c=i,d=Wl(n),p=[];e:{var h=xd.get(e);if(h!==void 0){var v=Xl,k=e;switch(e){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":v=Fm;break;case"focusin":k="focus",v=Ti;break;case"focusout":k="blur",v=Ti;break;case"beforeblur":case"afterblur":v=Ti;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jm;break;case hd:case gd:case vd:v=_m;break;case yd:v=Wm;break;case"scroll":v=Sm;break;case"wheel":v=Vm;break;case"copy":case"cut":case"paste":v=Lm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=$u}var y=(t&4)!==0,C=!y&&e==="scroll",g=y?h!==null?h+"Capture":null:h;y=[];for(var f=c,m;f!==null;){m=f;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,g!==null&&(x=Wr(f,g),x!=null&&y.push(Yr(f,x,m)))),C)break;f=f.return}0<y.length&&(h=new v(h,k,null,n,d),p.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==rl&&(k=n.relatedTarget||n.fromElement)&&(hn(k)||k[Dt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?hn(k):null,k!==null&&(C=Cn(k),k!==C||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(y=Iu,x="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(y=$u,x="onPointerLeave",g="onPointerEnter",f="pointer"),C=v==null?h:Wn(v),m=k==null?h:Wn(k),h=new y(x,f+"leave",v,n,d),h.target=C,h.relatedTarget=m,x=null,hn(d)===c&&(y=new y(g,f+"enter",k,n,d),y.target=m,y.relatedTarget=C,x=y),C=x,v&&k)t:{for(y=v,g=k,f=0,m=y;m;m=$n(m))f++;for(m=0,x=g;x;x=$n(x))m++;for(;0<f-m;)y=$n(y),f--;for(;0<m-f;)g=$n(g),m--;for(;f--;){if(y===g||g!==null&&y===g.alternate)break t;y=$n(y),g=$n(g)}y=null}else y=null;v!==null&&Xu(p,h,v,y,!1),k!==null&&C!==null&&Xu(p,C,k,y,!0)}}e:{if(h=c?Wn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var w=Zm;else if(ju(h))if(cd)w=n0;else{w=e0;var b=Rm}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=t0);if(w&&(w=w(e,c))){ud(p,w,n,d);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Zi(h,"number",h.value)}switch(b=c?Wn(c):window,e){case"focusin":(ju(b)||b.contentEditable==="true")&&(Jn=b,cl=c,Br=null);break;case"focusout":Br=cl=Jn=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Hu(p,n,d);break;case"selectionchange":if(a0)break;case"keydown":case"keyup":Hu(p,n,d)}var M;if(Ql)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else jn?ld(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(id&&n.locale!=="ko"&&(jn||_!=="onCompositionStart"?_==="onCompositionEnd"&&jn&&(M=ad()):(qt=d,Gl="value"in qt?qt.value:qt.textContent,jn=!0)),b=da(c,_),0<b.length&&(_=new Bu(_,e,null,n,d),p.push({event:_,listeners:b}),M?_.data=M:(M=sd(n),M!==null&&(_.data=M)))),(M=qm?Gm(e,n):Xm(e,n))&&(c=da(c,"onBeforeInput"),0<c.length&&(d=new Bu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=M))}kd(p,t)})}function Yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function da(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Wr(e,n),i!=null&&r.unshift(Yr(e,i,a)),i=Wr(e,t),i!=null&&r.push(Yr(e,i,a))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xu(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,a?(u=Wr(n,i),u!=null&&l.unshift(Yr(n,u,s))):a||(u=Wr(n,i),u!=null&&l.push(Yr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var l0=/\r\n?/g,s0=/\u0000|\uFFFD/g;function Yu(e){return(typeof e=="string"?e:""+e).replace(l0,`
`).replace(s0,"")}function Uo(e,t,n){if(t=Yu(t),Yu(e)!==t&&n)throw Error(S(425))}function pa(){}var pl=null,fl=null;function ml(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,u0=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,c0=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(d0)}:hl;function d0(e){setTimeout(function(){throw e})}function Ii(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Kr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Kr(t)}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var cr=Math.random().toString(36).slice(2),Nt="__reactFiber$"+cr,Qr="__reactProps$"+cr,Dt="__reactContainer$"+cr,gl="__reactEvents$"+cr,p0="__reactListeners$"+cr,f0="__reactHandles$"+cr;function hn(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Zu(e);e!==null;){if(n=e[Nt])return n;e=Zu(e)}return t}e=n,n=e.parentNode}return null}function io(e){return e=e[Nt]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Pa(e){return e[Qr]||null}var vl=[],Hn=-1;function ln(e){return{current:e}}function re(e){0>Hn||(e.current=vl[Hn],vl[Hn]=null,Hn--)}function te(e,t){Hn++,vl[Hn]=e.current,e.current=t}var on={},ze=ln(on),$e=ln(!1),kn=on;function rr(e,t){var n=e.type.contextTypes;if(!n)return on;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Fe(e){return e=e.childContextTypes,e!=null}function fa(){re($e),re(ze)}function Ru(e,t,n){if(ze.current!==on)throw Error(S(168));te(ze,t),te($e,n)}function wd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(S(108,Rf(e)||"Unknown",a));return ue({},n,r)}function ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||on,kn=ze.current,te(ze,e),te($e,$e.current),!0}function ec(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=wd(e,t,kn),r.__reactInternalMemoizedMergedChildContext=e,re($e),re(ze),te(ze,e)):re($e),te($e,n)}var _t=null,Aa=!1,Bi=!1;function Nd(e){_t===null?_t=[e]:_t.push(e)}function m0(e){Aa=!0,Nd(e)}function sn(){if(!Bi&&_t!==null){Bi=!0;var e=0,t=Q;try{var n=_t;for(Q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Aa=!1}catch(a){throw _t!==null&&(_t=_t.slice(e+1)),Gc(Hl,sn),a}finally{Q=t,Bi=!1}}return null}var Vn=[],Kn=0,ha=null,ga=0,Qe=[],Ze=0,bn=null,Tt=1,Lt="";function fn(e,t){Vn[Kn++]=ga,Vn[Kn++]=ha,ha=e,ga=t}function Sd(e,t,n){Qe[Ze++]=Tt,Qe[Ze++]=Lt,Qe[Ze++]=bn,bn=e;var r=Tt;e=Lt;var a=32-dt(r)-1;r&=~(1<<a),n+=1;var i=32-dt(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Tt=1<<32-dt(t)+a|n<<a|r,Lt=i+e}else Tt=1<<i|n<<a|r,Lt=e}function Rl(e){e.return!==null&&(fn(e,1),Sd(e,1,0))}function es(e){for(;e===ha;)ha=Vn[--Kn],Vn[Kn]=null,ga=Vn[--Kn],Vn[Kn]=null;for(;e===bn;)bn=Qe[--Ze],Qe[Ze]=null,Lt=Qe[--Ze],Qe[Ze]=null,Tt=Qe[--Ze],Qe[Ze]=null}var He=null,We=null,ae=!1,ct=null;function Ed(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function tc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,We=Zt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=bn!==null?{id:Tt,overflow:Lt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,We=null,!0):!1;default:return!1}}function yl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xl(e){if(ae){var t=We;if(t){var n=t;if(!tc(e,t)){if(yl(e))throw Error(S(418));t=Zt(n.nextSibling);var r=He;t&&tc(e,t)?Ed(r,n):(e.flags=e.flags&-4097|2,ae=!1,He=e)}}else{if(yl(e))throw Error(S(418));e.flags=e.flags&-4097|2,ae=!1,He=e}}}function nc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function Wo(e){if(e!==He)return!1;if(!ae)return nc(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ml(e.type,e.memoizedProps)),t&&(t=We)){if(yl(e))throw Cd(),Error(S(418));for(;t;)Ed(e,t),t=Zt(t.nextSibling)}if(nc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Zt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=He?Zt(e.stateNode.nextSibling):null;return!0}function Cd(){for(var e=We;e;)e=Zt(e.nextSibling)}function or(){We=He=null,ae=!1}function ts(e){ct===null?ct=[e]:ct.push(e)}var h0=$t.ReactCurrentBatchConfig;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rc(e){var t=e._init;return t(e._payload)}function Md(e){function t(g,f){if(e){var m=g.deletions;m===null?(g.deletions=[f],g.flags|=16):m.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function a(g,f){return g=nn(g,f),g.index=0,g.sibling=null,g}function i(g,f,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<f?(g.flags|=2,f):m):(g.flags|=2,f)):(g.flags|=1048576,f)}function l(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,f,m,x){return f===null||f.tag!==6?(f=Wi(m,g.mode,x),f.return=g,f):(f=a(f,m),f.return=g,f)}function u(g,f,m,x){var w=m.type;return w===On?d(g,f,m.props.children,x,m.key):f!==null&&(f.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wt&&rc(w)===f.type)?(x=a(f,m.props),x.ref=Sr(g,f,m),x.return=g,x):(x=ra(m.type,m.key,m.props,null,g.mode,x),x.ref=Sr(g,f,m),x.return=g,x)}function c(g,f,m,x){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Hi(m,g.mode,x),f.return=g,f):(f=a(f,m.children||[]),f.return=g,f)}function d(g,f,m,x,w){return f===null||f.tag!==7?(f=xn(m,g.mode,x,w),f.return=g,f):(f=a(f,m),f.return=g,f)}function p(g,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Wi(""+f,g.mode,m),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _o:return m=ra(f.type,f.key,f.props,null,g.mode,m),m.ref=Sr(g,null,f),m.return=g,m;case Fn:return f=Hi(f,g.mode,m),f.return=g,f;case Wt:var x=f._init;return p(g,x(f._payload),m)}if(_r(f)||kr(f))return f=xn(f,g.mode,m,null),f.return=g,f;Ho(g,f)}return null}function h(g,f,m,x){var w=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(g,f,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case _o:return m.key===w?u(g,f,m,x):null;case Fn:return m.key===w?c(g,f,m,x):null;case Wt:return w=m._init,h(g,f,w(m._payload),x)}if(_r(m)||kr(m))return w!==null?null:d(g,f,m,x,null);Ho(g,m)}return null}function v(g,f,m,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return g=g.get(m)||null,s(f,g,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _o:return g=g.get(x.key===null?m:x.key)||null,u(f,g,x,w);case Fn:return g=g.get(x.key===null?m:x.key)||null,c(f,g,x,w);case Wt:var b=x._init;return v(g,f,m,b(x._payload),w)}if(_r(x)||kr(x))return g=g.get(m)||null,d(f,g,x,w,null);Ho(f,x)}return null}function k(g,f,m,x){for(var w=null,b=null,M=f,_=f=0,O=null;M!==null&&_<m.length;_++){M.index>_?(O=M,M=null):O=M.sibling;var A=h(g,M,m[_],x);if(A===null){M===null&&(M=O);break}e&&M&&A.alternate===null&&t(g,M),f=i(A,f,_),b===null?w=A:b.sibling=A,b=A,M=O}if(_===m.length)return n(g,M),ae&&fn(g,_),w;if(M===null){for(;_<m.length;_++)M=p(g,m[_],x),M!==null&&(f=i(M,f,_),b===null?w=M:b.sibling=M,b=M);return ae&&fn(g,_),w}for(M=r(g,M);_<m.length;_++)O=v(M,g,_,m[_],x),O!==null&&(e&&O.alternate!==null&&M.delete(O.key===null?_:O.key),f=i(O,f,_),b===null?w=O:b.sibling=O,b=O);return e&&M.forEach(function(W){return t(g,W)}),ae&&fn(g,_),w}function y(g,f,m,x){var w=kr(m);if(typeof w!="function")throw Error(S(150));if(m=w.call(m),m==null)throw Error(S(151));for(var b=w=null,M=f,_=f=0,O=null,A=m.next();M!==null&&!A.done;_++,A=m.next()){M.index>_?(O=M,M=null):O=M.sibling;var W=h(g,M,A.value,x);if(W===null){M===null&&(M=O);break}e&&M&&W.alternate===null&&t(g,M),f=i(W,f,_),b===null?w=W:b.sibling=W,b=W,M=O}if(A.done)return n(g,M),ae&&fn(g,_),w;if(M===null){for(;!A.done;_++,A=m.next())A=p(g,A.value,x),A!==null&&(f=i(A,f,_),b===null?w=A:b.sibling=A,b=A);return ae&&fn(g,_),w}for(M=r(g,M);!A.done;_++,A=m.next())A=v(M,g,_,A.value,x),A!==null&&(e&&A.alternate!==null&&M.delete(A.key===null?_:A.key),f=i(A,f,_),b===null?w=A:b.sibling=A,b=A);return e&&M.forEach(function(F){return t(g,F)}),ae&&fn(g,_),w}function C(g,f,m,x){if(typeof m=="object"&&m!==null&&m.type===On&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case _o:e:{for(var w=m.key,b=f;b!==null;){if(b.key===w){if(w=m.type,w===On){if(b.tag===7){n(g,b.sibling),f=a(b,m.props.children),f.return=g,g=f;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Wt&&rc(w)===b.type){n(g,b.sibling),f=a(b,m.props),f.ref=Sr(g,b,m),f.return=g,g=f;break e}n(g,b);break}else t(g,b);b=b.sibling}m.type===On?(f=xn(m.props.children,g.mode,x,m.key),f.return=g,g=f):(x=ra(m.type,m.key,m.props,null,g.mode,x),x.ref=Sr(g,f,m),x.return=g,g=x)}return l(g);case Fn:e:{for(b=m.key;f!==null;){if(f.key===b)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(g,f.sibling),f=a(f,m.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=Hi(m,g.mode,x),f.return=g,g=f}return l(g);case Wt:return b=m._init,C(g,f,b(m._payload),x)}if(_r(m))return k(g,f,m,x);if(kr(m))return y(g,f,m,x);Ho(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(g,f.sibling),f=a(f,m),f.return=g,g=f):(n(g,f),f=Wi(m,g.mode,x),f.return=g,g=f),l(g)):n(g,f)}return C}var ar=Md(!0),zd=Md(!1),va=ln(null),ya=null,qn=null,ns=null;function rs(){ns=qn=ya=null}function os(e){var t=va.current;re(va),e._currentValue=t}function kl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function er(e,t){ya=e,ns=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Be=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(ns!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(ya===null)throw Error(S(308));qn=e,ya.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var gn=null;function as(e){gn===null?gn=[e]:gn.push(e)}function _d(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,as(t)):(n.next=a.next,a.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ht=!1;function is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(G&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,It(e,n)}return a=r.interleaved,a===null?(t.next=t,as(r)):(t.next=a.next,a.next=t),r.interleaved=t,It(e,n)}function Qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vl(e,n)}}function oc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function xa(e,t,n,r){var a=e.updateQueue;Ht=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var p=a.baseState;l=0,d=c=u=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(h=t,v=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){p=k.call(v,p,h);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,h=typeof k=="function"?k.call(v,p,h):k,h==null)break e;p=ue({},p,h);break e;case 2:Ht=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=a.effects,h===null?a.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,u=p):d=d.next=v,l|=h;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;h=s,s=h.next,h.next=null,a.lastBaseUpdate=h,a.shared.pending=null}}while(!0);if(d===null&&(u=p),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Nn|=l,e.lanes=l,e.memoizedState=p}}function ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(S(191,a));a.call(r)}}}var lo={},Et=ln(lo),Zr=ln(lo),Rr=ln(lo);function vn(e){if(e===lo)throw Error(S(174));return e}function ls(e,t){switch(te(Rr,t),te(Zr,e),te(Et,lo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:el(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=el(t,e)}re(Et),te(Et,t)}function ir(){re(Et),re(Zr),re(Rr)}function Ld(e){vn(Rr.current);var t=vn(Et.current),n=el(t,e.type);t!==n&&(te(Zr,e),te(Et,n))}function ss(e){Zr.current===e&&(re(Et),re(Zr))}var le=ln(0);function ka(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $i=[];function us(){for(var e=0;e<$i.length;e++)$i[e]._workInProgressVersionPrimary=null;$i.length=0}var Zo=$t.ReactCurrentDispatcher,Fi=$t.ReactCurrentBatchConfig,wn=0,se=null,me=null,ye=null,ba=!1,$r=!1,eo=0,g0=0;function Ee(){throw Error(S(321))}function cs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function ds(e,t,n,r,a,i){if(wn=i,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?k0:b0,e=n(r,a),$r){i=0;do{if($r=!1,eo=0,25<=i)throw Error(S(301));i+=1,ye=me=null,t.updateQueue=null,Zo.current=w0,e=n(r,a)}while($r)}if(Zo.current=wa,t=me!==null&&me.next!==null,wn=0,ye=me=se=null,ba=!1,t)throw Error(S(300));return e}function ps(){var e=eo!==0;return eo=0,e}function wt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?se.memoizedState=ye=e:ye=ye.next=e,ye}function nt(){if(me===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ye===null?se.memoizedState:ye.next;if(t!==null)ye=t,me=e;else{if(e===null)throw Error(S(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ye===null?se.memoizedState=ye=e:ye=ye.next=e}return ye}function to(e,t){return typeof t=="function"?t(e):t}function Oi(e){var t=nt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=me,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((wn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=p,l=r):u=u.next=p,se.lanes|=d,Nn|=d}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,ft(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,se.lanes|=i,Nn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ji(e){var t=nt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);ft(i,t.memoizedState)||(Be=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Pd(){}function Ad(e,t){var n=se,r=nt(),a=t(),i=!ft(r.memoizedState,a);if(i&&(r.memoizedState=a,Be=!0),r=r.queue,fs(Bd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ye!==null&&ye.memoizedState.tag&1){if(n.flags|=2048,no(9,Id.bind(null,n,r,a,t),void 0,null),xe===null)throw Error(S(349));(wn&30)!==0||Dd(n,t,a)}return a}function Dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Id(e,t,n,r){t.value=n,t.getSnapshot=r,$d(t)&&Fd(e)}function Bd(e,t,n){return n(function(){$d(t)&&Fd(e)})}function $d(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function Fd(e){var t=It(e,1);t!==null&&pt(t,e,1,-1)}function ic(e){var t=wt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:e},t.queue=e,e=e.dispatch=x0.bind(null,se,e),[t.memoizedState,e]}function no(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Od(){return nt().memoizedState}function Ro(e,t,n,r){var a=wt();se.flags|=e,a.memoizedState=no(1|t,n,void 0,r===void 0?null:r)}function Da(e,t,n,r){var a=nt();r=r===void 0?null:r;var i=void 0;if(me!==null){var l=me.memoizedState;if(i=l.destroy,r!==null&&cs(r,l.deps)){a.memoizedState=no(t,n,i,r);return}}se.flags|=e,a.memoizedState=no(1|t,n,i,r)}function lc(e,t){return Ro(8390656,8,e,t)}function fs(e,t){return Da(2048,8,e,t)}function jd(e,t){return Da(4,2,e,t)}function Jd(e,t){return Da(4,4,e,t)}function Ud(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wd(e,t,n){return n=n!=null?n.concat([e]):null,Da(4,4,Ud.bind(null,t,e),n)}function ms(){}function Hd(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Vd(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Kd(e,t,n){return(wn&21)===0?(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n):(ft(n,t)||(n=Qc(),se.lanes|=n,Nn|=n,e.baseState=!0),t)}function v0(e,t){var n=Q;Q=n!==0&&4>n?n:4,e(!0);var r=Fi.transition;Fi.transition={};try{e(!1),t()}finally{Q=n,Fi.transition=r}}function qd(){return nt().memoizedState}function y0(e,t,n){var r=tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gd(e))Xd(t,n);else if(n=_d(e,t,n,r),n!==null){var a=Pe();pt(n,e,r,a),Yd(n,t,r)}}function x0(e,t,n){var r=tn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gd(e))Xd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,ft(s,l)){var u=t.interleaved;u===null?(a.next=a,as(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}n=_d(e,t,a,r),n!==null&&(a=Pe(),pt(n,e,r,a),Yd(n,t,r))}}function Gd(e){var t=e.alternate;return e===se||t!==null&&t===se}function Xd(e,t){$r=ba=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Yd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vl(e,n)}}var wa={readContext:tt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},k0={readContext:tt,useCallback:function(e,t){return wt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:lc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ro(4194308,4,Ud.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=wt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=wt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=y0.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=wt();return e={current:e},t.memoizedState=e},useState:ic,useDebugValue:ms,useDeferredValue:function(e){return wt().memoizedState=e},useTransition:function(){var e=ic(!1),t=e[0];return e=v0.bind(null,e[1]),wt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,a=wt();if(ae){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),xe===null)throw Error(S(349));(wn&30)!==0||Dd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,lc(Bd.bind(null,r,i,e),[e]),r.flags|=2048,no(9,Id.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=wt(),t=xe.identifierPrefix;if(ae){var n=Lt,r=Tt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=eo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=g0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},b0={readContext:tt,useCallback:Hd,useContext:tt,useEffect:fs,useImperativeHandle:Wd,useInsertionEffect:jd,useLayoutEffect:Jd,useMemo:Vd,useReducer:Oi,useRef:Od,useState:function(){return Oi(to)},useDebugValue:ms,useDeferredValue:function(e){var t=nt();return Kd(t,me.memoizedState,e)},useTransition:function(){var e=Oi(to)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Pd,useSyncExternalStore:Ad,useId:qd,unstable_isNewReconciler:!1},w0={readContext:tt,useCallback:Hd,useContext:tt,useEffect:fs,useImperativeHandle:Wd,useInsertionEffect:jd,useLayoutEffect:Jd,useMemo:Vd,useReducer:ji,useRef:Od,useState:function(){return ji(to)},useDebugValue:ms,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:Kd(t,me.memoizedState,e)},useTransition:function(){var e=ji(to)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Pd,useSyncExternalStore:Ad,useId:qd,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ue({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function bl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ue({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ia={isMounted:function(e){return(e=e._reactInternals)?Cn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),a=tn(e),i=Pt(r,a);i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,a),t!==null&&(pt(t,e,a,r),Qo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),a=tn(e),i=Pt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Rt(e,i,a),t!==null&&(pt(t,e,a,r),Qo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=tn(e),a=Pt(n,r);a.tag=2,t!=null&&(a.callback=t),t=Rt(e,a,r),t!==null&&(pt(t,e,r,n),Qo(t,e,r))}};function sc(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Gr(n,r)||!Gr(a,i):!0}function Qd(e,t,n){var r=!1,a=on,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(a=Fe(t)?kn:ze.current,r=t.contextTypes,i=(r=r!=null)?rr(e,a):on),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ia,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function uc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ia.enqueueReplaceState(t,t.state,null)}function wl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},is(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=tt(i):(i=Fe(t)?kn:ze.current,a.context=rr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(bl(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Ia.enqueueReplaceState(a,a.state,null),xa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function lr(e,t){try{var n="",r=t;do n+=Zf(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Ji(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Nl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var N0=typeof WeakMap=="function"?WeakMap:Map;function Zd(e,t,n){n=Pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Sa||(Sa=!0,Al=r),Nl(e,t)},n}function Rd(e,t,n){n=Pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Nl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nl(e,t),typeof r!="function"&&(en===null?en=new Set([this]):en.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function cc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new N0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=$0.bind(null,e,t,n),t.then(e,e))}function dc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function pc(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Pt(-1,1),t.tag=2,Rt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var S0=$t.ReactCurrentOwner,Be=!1;function Le(e,t,n,r){t.child=e===null?zd(t,null,n,r):ar(t,e.child,n,r)}function fc(e,t,n,r,a){n=n.render;var i=t.ref;return er(t,a),r=ds(e,t,n,r,i,a),n=ps(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ae&&n&&Rl(t),t.flags|=1,Le(e,t,r,a),t.child)}function mc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!ws(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ep(e,t,i,r,a)):(e=ra(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Gr,n(l,r)&&e.ref===t.ref)return Bt(e,t,a)}return t.flags|=1,e=nn(i,r),e.ref=t.ref,e.return=t,t.child=e}function ep(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Gr(i,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Be=!0);else return t.lanes=e.lanes,Bt(e,t,a)}return Sl(e,t,n,r,a)}function tp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Xn,Ue),Ue|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Xn,Ue),Ue|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Xn,Ue),Ue|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Xn,Ue),Ue|=r;return Le(e,t,a,n),t.child}function np(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sl(e,t,n,r,a){var i=Fe(n)?kn:ze.current;return i=rr(t,i),er(t,a),n=ds(e,t,n,r,i,a),r=ps(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Bt(e,t,a)):(ae&&r&&Rl(t),t.flags|=1,Le(e,t,n,a),t.child)}function hc(e,t,n,r,a){if(Fe(n)){var i=!0;ma(t)}else i=!1;if(er(t,a),t.stateNode===null)ea(e,t),Qd(t,n,r),wl(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=Fe(n)?kn:ze.current,c=rr(t,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&uc(t,l,r,c),Ht=!1;var h=t.memoizedState;l.state=h,xa(t,r,l,a),u=t.memoizedState,s!==r||h!==u||$e.current||Ht?(typeof d=="function"&&(bl(t,n,d,r),u=t.memoizedState),(s=Ht||sc(t,n,s,r,h,u,c))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Td(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:st(t.type,s),l.props=c,p=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=tt(u):(u=Fe(n)?kn:ze.current,u=rr(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==p||h!==u)&&uc(t,l,r,u),Ht=!1,h=t.memoizedState,l.state=h,xa(t,r,l,a);var k=t.memoizedState;s!==p||h!==k||$e.current||Ht?(typeof v=="function"&&(bl(t,n,v,r),k=t.memoizedState),(c=Ht||sc(t,n,c,r,h,k,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return El(e,t,n,r,i,a)}function El(e,t,n,r,a,i){np(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&ec(t,n,!1),Bt(e,t,i);r=t.stateNode,S0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=ar(t,e.child,null,i),t.child=ar(t,null,s,i)):Le(e,t,s,i),t.memoizedState=r.state,a&&ec(t,n,!0),t.child}function rp(e){var t=e.stateNode;t.pendingContext?Ru(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ru(e,t.context,!1),ls(e,t.containerInfo)}function gc(e,t,n,r,a){return or(),ts(a),t.flags|=256,Le(e,t,n,r),t.child}var Cl={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function op(e,t,n){var r=t.pendingProps,a=le.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),te(le,a&1),e===null)return xl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Fa(l,r,0,null),e=xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ml(n),t.memoizedState=Cl,e):hs(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return E0(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=nn(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=nn(s,i):(i=xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ml(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Cl,r}return i=e.child,e=i.sibling,r=nn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function hs(e,t){return t=Fa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vo(e,t,n,r){return r!==null&&ts(r),ar(t,e.child,null,n),e=hs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function E0(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ji(Error(S(422))),Vo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Fa({mode:"visible",children:r.children},a,0,null),i=xn(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&ar(t,e.child,null,l),t.child.memoizedState=Ml(l),t.memoizedState=Cl,i);if((t.mode&1)===0)return Vo(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(S(419)),r=Ji(i,r,void 0),Vo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Be||s){if(r=xe,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,It(e,a),pt(r,e,a,-1))}return bs(),r=Ji(Error(S(421))),Vo(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=F0.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,We=Zt(a.nextSibling),He=t,ae=!0,ct=null,e!==null&&(Qe[Ze++]=Tt,Qe[Ze++]=Lt,Qe[Ze++]=bn,Tt=e.id,Lt=e.overflow,bn=t),t=hs(t,r.children),t.flags|=4096,t)}function vc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),kl(e.return,t,n)}function Ui(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function ap(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=le.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&vc(e,n,t);else if(e.tag===19)vc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(le,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ka(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ui(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ka(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ui(t,!0,n,null,i);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ea(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function C0(e,t,n){switch(t.tag){case 3:rp(t),or();break;case 5:Ld(t);break;case 1:Fe(t.type)&&ma(t);break;case 4:ls(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;te(va,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(le,le.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?op(e,t,n):(te(le,le.current&1),e=Bt(e,t,n),e!==null?e.sibling:null);te(le,le.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return ap(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),te(le,le.current),r)break;return null;case 22:case 23:return t.lanes=0,tp(e,t,n)}return Bt(e,t,n)}var ip,zl,lp,sp;ip=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zl=function(){};lp=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,vn(Et.current);var i=null;switch(n){case"input":a=Yi(e,a),r=Yi(e,r),i=[];break;case"select":a=ue({},a,{value:void 0}),r=ue({},r,{value:void 0}),i=[];break;case"textarea":a=Ri(e,a),r=Ri(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=pa)}tl(n,r);var l;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Jr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=a?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Jr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ne("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};sp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Er(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function M0(e,t,n){var r=t.pendingProps;switch(es(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Fe(t.type)&&fa(),Ce(t),null;case 3:return r=t.stateNode,ir(),re($e),re(ze),us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(Bl(ct),ct=null))),zl(e,t),Ce(t),null;case 5:ss(t);var a=vn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)lp(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Ce(t),null}if(e=vn(Et.current),Wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Nt]=t,r[Qr]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(a=0;a<Lr.length;a++)ne(Lr[a],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Eu(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Mu(r,i),ne("invalid",r)}tl(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Uo(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Uo(r.textContent,s,e),a=["children",""+s]):Jr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ne("scroll",r)}switch(n){case"input":To(r),Cu(r,i,!0);break;case"textarea":To(r),zu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=pa)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Nt]=t,e[Qr]=r,ip(e,t,!1,!1),t.stateNode=e;e:{switch(l=nl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),a=r;break;case"iframe":case"object":case"embed":ne("load",e),a=r;break;case"video":case"audio":for(a=0;a<Lr.length;a++)ne(Lr[a],e);a=r;break;case"source":ne("error",e),a=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),a=r;break;case"details":ne("toggle",e),a=r;break;case"input":Eu(e,r),a=Yi(e,r),ne("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ue({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Mu(e,r),a=Ri(e,r),ne("invalid",e);break;default:a=r}tl(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?Oc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&$c(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ur(e,u):typeof u=="number"&&Ur(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Jr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ne("scroll",e):u!=null&&Ol(e,i,u,l))}switch(n){case"input":To(e),Cu(e,r,!1);break;case"textarea":To(e),zu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+rn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Yn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ce(t),null;case 6:if(e&&t.stateNode!=null)sp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=vn(Rr.current),vn(Et.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(i=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:Uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Uo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return Ce(t),null;case 13:if(re(le),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&We!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Cd(),or(),t.flags|=98560,i=!1;else if(i=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Nt]=t}else or(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),i=!1}else ct!==null&&(Bl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(le.current&1)!==0?he===0&&(he=3):bs())),t.updateQueue!==null&&(t.flags|=4),Ce(t),null);case 4:return ir(),zl(e,t),e===null&&Xr(t.stateNode.containerInfo),Ce(t),null;case 10:return os(t.type._context),Ce(t),null;case 17:return Fe(t.type)&&fa(),Ce(t),null;case 19:if(re(le),i=t.memoizedState,i===null)return Ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Er(i,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ka(e),l!==null){for(t.flags|=128,Er(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(le,le.current&1|2),t.child}e=e.sibling}i.tail!==null&&pe()>sr&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304)}else{if(!r)if(e=ka(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return Ce(t),null}else 2*pe()-i.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Er(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=pe(),t.sibling=null,n=le.current,te(le,r?n&1|2:n&1),t):(Ce(t),null);case 22:case 23:return ks(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ue&1073741824)!==0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function z0(e,t){switch(es(t),t.tag){case 1:return Fe(t.type)&&fa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),re($e),re(ze),us(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ss(t),null;case 13:if(re(le),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));or()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(le),null;case 4:return ir(),null;case 10:return os(t.type._context),null;case 22:case 23:return ks(),null;case 24:return null;default:return null}}var Ko=!1,Me=!1,_0=typeof WeakSet=="function"?WeakSet:Set,I=null;function Gn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){de(e,t,r)}}var yc=!1;function T0(e,t){if(pl=ua,e=fd(),Zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,h=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(s=l+a),p!==i||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++c===a&&(s=l),h===i&&++d===r&&(u=l),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fl={focusedElem:e,selectionRange:n},ua=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,C=k.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),C);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(x){de(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return k=yc,yc=!1,k}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&_l(t,n,i)}a=a.next}while(a!==r)}}function Ba(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function up(e){var t=e.alternate;t!==null&&(e.alternate=null,up(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[Qr],delete t[gl],delete t[p0],delete t[f0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function cp(e){return e.tag===5||e.tag===3||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=pa));else if(r!==4&&(e=e.child,e!==null))for(Ll(e,t,n),e=e.sibling;e!==null;)Ll(e,t,n),e=e.sibling}function Pl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pl(e,t,n),e=e.sibling;e!==null;)Pl(e,t,n),e=e.sibling}var be=null,ut=!1;function Ut(e,t,n){for(n=n.child;n!==null;)dp(e,t,n),n=n.sibling}function dp(e,t,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(za,n)}catch{}switch(n.tag){case 5:Me||Gn(n,t);case 6:var r=be,a=ut;be=null,Ut(e,t,n),be=r,ut=a,be!==null&&(ut?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(ut?(e=be,n=n.stateNode,e.nodeType===8?Ii(e.parentNode,n):e.nodeType===1&&Ii(e,n),Kr(e)):Ii(be,n.stateNode));break;case 4:r=be,a=ut,be=n.stateNode.containerInfo,ut=!0,Ut(e,t,n),be=r,ut=a;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&_l(n,t,l),a=a.next}while(a!==r)}Ut(e,t,n);break;case 1:if(!Me&&(Gn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){de(n,t,s)}Ut(e,t,n);break;case 21:Ut(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Ut(e,t,n),Me=r):Ut(e,t,n);break;default:Ut(e,t,n)}}function kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _0),t.forEach(function(r){var a=O0.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:be=s.stateNode,ut=!1;break e;case 3:be=s.stateNode.containerInfo,ut=!0;break e;case 4:be=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(be===null)throw Error(S(160));dp(i,l,a),be=null,ut=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){de(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)pp(t,e),t=t.sibling}function pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),bt(e),r&4){try{Fr(3,e,e.return),Ba(3,e)}catch(y){de(e,e.return,y)}try{Fr(5,e,e.return)}catch(y){de(e,e.return,y)}}break;case 1:lt(t,e),bt(e),r&512&&n!==null&&Gn(n,n.return);break;case 5:if(lt(t,e),bt(e),r&512&&n!==null&&Gn(n,n.return),e.flags&32){var a=e.stateNode;try{Ur(a,"")}catch(y){de(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Dc(a,i),nl(s,l);var c=nl(s,i);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];d==="style"?Oc(a,p):d==="dangerouslySetInnerHTML"?$c(a,p):d==="children"?Ur(a,p):Ol(a,d,p,c)}switch(s){case"input":Qi(a,i);break;case"textarea":Ic(a,i);break;case"select":var h=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Yn(a,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Yn(a,!!i.multiple,i.defaultValue,!0):Yn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Qr]=i}catch(y){de(e,e.return,y)}}break;case 6:if(lt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(S(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){de(e,e.return,y)}}break;case 3:if(lt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Kr(t.containerInfo)}catch(y){de(e,e.return,y)}break;case 4:lt(t,e),bt(e);break;case 13:lt(t,e),bt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(ys=pe())),r&4&&kc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(c=Me)||d,lt(t,e),Me=c):lt(t,e),bt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(I=e,d=e.child;d!==null;){for(p=I=d;I!==null;){switch(h=I,v=h.child,h.tag){case 0:case 11:case 14:case 15:Fr(4,h,h.return);break;case 1:Gn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){de(r,n,y)}}break;case 5:Gn(h,h.return);break;case 22:if(h.memoizedState!==null){wc(p);continue}}v!==null?(v.return=h,I=v):wc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Fc("display",l))}catch(y){de(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(y){de(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:lt(t,e),bt(e),r&4&&kc(e);break;case 21:break;default:lt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(cp(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Ur(a,""),r.flags&=-33);var i=xc(e);Pl(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=xc(e);Ll(e,s,l);break;default:throw Error(S(161))}}catch(u){de(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function L0(e,t,n){I=e,fp(e,t,n)}function fp(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var a=I,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||Ko;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||Me;s=Ko;var c=Me;if(Ko=l,(Me=u)&&!c)for(I=a;I!==null;)l=I,u=l.child,l.tag===22&&l.memoizedState!==null?Nc(a):u!==null?(u.return=l,I=u):Nc(a);for(;i!==null;)I=i,fp(i,t,n),i=i.sibling;I=a,Ko=s,Me=c}bc(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,I=i):bc(e,t,n)}}function bc(e){for(;I!==null;){var t=I;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Me||Ba(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ac(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ac(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Kr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Me||t.flags&512&&Tl(t)}catch(h){de(t,t.return,h)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function wc(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Nc(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ba(4,t)}catch(u){de(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){de(t,a,u)}}var i=t.return;try{Tl(t)}catch(u){de(t,i,u)}break;case 5:var l=t.return;try{Tl(t)}catch(u){de(t,l,u)}}}catch(u){de(t,t.return,u)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var P0=Math.ceil,Na=$t.ReactCurrentDispatcher,gs=$t.ReactCurrentOwner,et=$t.ReactCurrentBatchConfig,G=0,xe=null,fe=null,we=0,Ue=0,Xn=ln(0),he=0,ro=null,Nn=0,$a=0,vs=0,Or=null,Ie=null,ys=0,sr=1/0,zt=null,Sa=!1,Al=null,en=null,qo=!1,Gt=null,Ea=0,jr=0,Dl=null,ta=-1,na=0;function Pe(){return(G&6)!==0?pe():ta!==-1?ta:ta=pe()}function tn(e){return(e.mode&1)===0?1:(G&2)!==0&&we!==0?we&-we:h0.transition!==null?(na===0&&(na=Qc()),na):(e=Q,e!==0||(e=window.event,e=e===void 0?16:od(e.type)),e)}function pt(e,t,n,r){if(50<jr)throw jr=0,Dl=null,Error(S(185));oo(e,n,r),((G&2)===0||e!==xe)&&(e===xe&&((G&2)===0&&($a|=n),he===4&&Kt(e,we)),Oe(e,r),n===1&&G===0&&(t.mode&1)===0&&(sr=pe()+500,Aa&&sn()))}function Oe(e,t){var n=e.callbackNode;vm(e,t);var r=sa(e,e===xe?we:0);if(r===0)n!==null&&Lu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Lu(n),t===1)e.tag===0?m0(Sc.bind(null,e)):Nd(Sc.bind(null,e)),c0(function(){(G&6)===0&&sn()}),n=null;else{switch(Zc(r)){case 1:n=Hl;break;case 4:n=Xc;break;case 16:n=la;break;case 536870912:n=Yc;break;default:n=la}n=bp(n,mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function mp(e,t){if(ta=-1,na=0,(G&6)!==0)throw Error(S(327));var n=e.callbackNode;if(tr()&&e.callbackNode!==n)return null;var r=sa(e,e===xe?we:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Ca(e,r);else{t=r;var a=G;G|=2;var i=gp();(xe!==e||we!==t)&&(zt=null,sr=pe()+500,yn(e,t));do try{I0();break}catch(s){hp(e,s)}while(!0);rs(),Na.current=i,G=a,fe!==null?t=0:(xe=null,we=0,t=he)}if(t!==0){if(t===2&&(a=ll(e),a!==0&&(r=a,t=Il(e,a))),t===1)throw n=ro,yn(e,0),Kt(e,r),Oe(e,pe()),n;if(t===6)Kt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!A0(a)&&(t=Ca(e,r),t===2&&(i=ll(e),i!==0&&(r=i,t=Il(e,i))),t===1))throw n=ro,yn(e,0),Kt(e,r),Oe(e,pe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:mn(e,Ie,zt);break;case 3:if(Kt(e,r),(r&130023424)===r&&(t=ys+500-pe(),10<t)){if(sa(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=hl(mn.bind(null,e,Ie,zt),t);break}mn(e,Ie,zt);break;case 4:if(Kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-dt(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*P0(r/1960))-r,10<r){e.timeoutHandle=hl(mn.bind(null,e,Ie,zt),r);break}mn(e,Ie,zt);break;case 5:mn(e,Ie,zt);break;default:throw Error(S(329))}}}return Oe(e,pe()),e.callbackNode===n?mp.bind(null,e):null}function Il(e,t){var n=Or;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=Ca(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&Bl(t)),e}function Bl(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function A0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~vs,t&=~$a,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Sc(e){if((G&6)!==0)throw Error(S(327));tr();var t=sa(e,0);if((t&1)===0)return Oe(e,pe()),null;var n=Ca(e,t);if(e.tag!==0&&n===2){var r=ll(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=ro,yn(e,0),Kt(e,t),Oe(e,pe()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,mn(e,Ie,zt),Oe(e,pe()),null}function xs(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(sr=pe()+500,Aa&&sn())}}function Sn(e){Gt!==null&&Gt.tag===0&&(G&6)===0&&tr();var t=G;G|=1;var n=et.transition,r=Q;try{if(et.transition=null,Q=1,e)return e()}finally{Q=r,et.transition=n,G=t,(G&6)===0&&sn()}}function ks(){Ue=Xn.current,re(Xn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,u0(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(es(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fa();break;case 3:ir(),re($e),re(ze),us();break;case 5:ss(r);break;case 4:ir();break;case 13:re(le);break;case 19:re(le);break;case 10:os(r.type._context);break;case 22:case 23:ks()}n=n.return}if(xe=e,fe=e=nn(e.current,null),we=Ue=t,he=0,ro=null,vs=$a=Nn=0,Ie=Or=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}gn=null}return e}function hp(e,t){do{var n=fe;try{if(rs(),Zo.current=wa,ba){for(var r=se.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ba=!1}if(wn=0,ye=me=se=null,$r=!1,eo=0,gs.current=null,n===null||n.return===null){he=1,ro=t,fe=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=we,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=dc(l);if(v!==null){v.flags&=-257,pc(v,l,s,i,t),v.mode&1&&cc(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(u),t.updateQueue=y}else k.add(u);break e}else{if((t&1)===0){cc(i,c,t),bs();break e}u=Error(S(426))}}else if(ae&&s.mode&1){var C=dc(l);if(C!==null){(C.flags&65536)===0&&(C.flags|=256),pc(C,l,s,i,t),ts(lr(u,s));break e}}i=u=lr(u,s),he!==4&&(he=2),Or===null?Or=[i]:Or.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var g=Zd(i,u,t);oc(i,g);break e;case 1:s=u;var f=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(en===null||!en.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Rd(i,s,t);oc(i,x);break e}}i=i.return}while(i!==null)}yp(n)}catch(w){t=w,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(!0)}function gp(){var e=Na.current;return Na.current=wa,e===null?wa:e}function bs(){(he===0||he===3||he===2)&&(he=4),xe===null||(Nn&268435455)===0&&($a&268435455)===0||Kt(xe,we)}function Ca(e,t){var n=G;G|=2;var r=gp();(xe!==e||we!==t)&&(zt=null,yn(e,t));do try{D0();break}catch(a){hp(e,a)}while(!0);if(rs(),G=n,Na.current=r,fe!==null)throw Error(S(261));return xe=null,we=0,he}function D0(){for(;fe!==null;)vp(fe)}function I0(){for(;fe!==null&&!sm();)vp(fe)}function vp(e){var t=kp(e.alternate,e,Ue);e.memoizedProps=e.pendingProps,t===null?yp(e):fe=t,gs.current=null}function yp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=M0(n,t,Ue),n!==null){fe=n;return}}else{if(n=z0(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,fe=null;return}}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);he===0&&(he=5)}function mn(e,t,n){var r=Q,a=et.transition;try{et.transition=null,Q=1,B0(e,t,n,r)}finally{et.transition=a,Q=r}return null}function B0(e,t,n,r){do tr();while(Gt!==null);if((G&6)!==0)throw Error(S(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ym(e,i),e===xe&&(fe=xe=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||qo||(qo=!0,bp(la,function(){return tr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=et.transition,et.transition=null;var l=Q;Q=1;var s=G;G|=4,gs.current=null,T0(e,n),pp(n,e),o0(fl),ua=!!pl,fl=pl=null,e.current=n,L0(n,e,a),um(),G=s,Q=l,et.transition=i}else e.current=n;if(qo&&(qo=!1,Gt=e,Ea=a),i=e.pendingLanes,i===0&&(en=null),pm(n.stateNode,r),Oe(e,pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Sa)throw Sa=!1,e=Al,Al=null,e;return(Ea&1)!==0&&e.tag!==0&&tr(),i=e.pendingLanes,(i&1)!==0?e===Dl?jr++:(jr=0,Dl=e):jr=0,sn(),null}function tr(){if(Gt!==null){var e=Zc(Ea),t=et.transition,n=Q;try{if(et.transition=null,Q=16>e?16:e,Gt===null)var r=!1;else{if(e=Gt,Gt=null,Ea=0,(G&6)!==0)throw Error(S(331));var a=G;for(G|=4,I=e.current;I!==null;){var i=I,l=i.child;if((I.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(I=c;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Fr(8,d,i)}var p=d.child;if(p!==null)p.return=d,I=p;else for(;I!==null;){d=I;var h=d.sibling,v=d.return;if(up(d),d===c){I=null;break}if(h!==null){h.return=v,I=h;break}I=v}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var C=y.sibling;y.sibling=null,y=C}while(y!==null)}}I=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,I=l;else e:for(;I!==null;){if(i=I,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Fr(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,I=g;break e}I=i.return}}var f=e.current;for(I=f;I!==null;){l=I;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,I=m;else e:for(l=f;I!==null;){if(s=I,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ba(9,s)}}catch(w){de(s,s.return,w)}if(s===l){I=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,I=x;break e}I=s.return}}if(G=a,sn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(za,e)}catch{}r=!0}return r}finally{Q=n,et.transition=t}}return!1}function Ec(e,t,n){t=lr(n,t),t=Zd(e,t,1),e=Rt(e,t,1),t=Pe(),e!==null&&(oo(e,1,t),Oe(e,t))}function de(e,t,n){if(e.tag===3)Ec(e,e,n);else for(;t!==null;){if(t.tag===3){Ec(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(en===null||!en.has(r))){e=lr(n,e),e=Rd(t,e,1),t=Rt(t,e,1),e=Pe(),t!==null&&(oo(t,1,e),Oe(t,e));break}}t=t.return}}function $0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(we&n)===n&&(he===4||he===3&&(we&130023424)===we&&500>pe()-ys?yn(e,0):vs|=n),Oe(e,t)}function xp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ao,Ao<<=1,(Ao&130023424)===0&&(Ao=4194304)));var n=Pe();e=It(e,t),e!==null&&(oo(e,t,n),Oe(e,n))}function F0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xp(e,n)}function O0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),xp(e,n)}var kp;kp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Be=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Be=!1,C0(e,t,n);Be=(e.flags&131072)!==0}else Be=!1,ae&&(t.flags&1048576)!==0&&Sd(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ea(e,t),e=t.pendingProps;var a=rr(t,ze.current);er(t,n),a=ds(null,t,r,e,a,n);var i=ps();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Fe(r)?(i=!0,ma(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,is(t),a.updater=Ia,t.stateNode=a,a._reactInternals=t,wl(t,r,e,n),t=El(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Rl(t),Le(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ea(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=J0(r),e=st(r,e),a){case 0:t=Sl(null,t,r,e,n);break e;case 1:t=hc(null,t,r,e,n);break e;case 11:t=fc(null,t,r,e,n);break e;case 14:t=mc(null,t,r,st(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),Sl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),hc(e,t,r,a,n);case 3:e:{if(rp(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Td(e,t),xa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=lr(Error(S(423)),t),t=gc(e,t,r,n,a);break e}else if(r!==a){a=lr(Error(S(424)),t),t=gc(e,t,r,n,a);break e}else for(We=Zt(t.stateNode.containerInfo.firstChild),He=t,ae=!0,ct=null,n=zd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(or(),r===a){t=Bt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Ld(t),e===null&&xl(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,ml(r,a)?l=null:i!==null&&ml(r,i)&&(t.flags|=32),np(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&xl(t),null;case 13:return op(e,t,n);case 4:return ls(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ar(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),fc(e,t,r,a,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,te(va,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===a.children&&!$e.current){t=Bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Pt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),kl(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(S(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),kl(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,er(t,n),a=tt(a),r=r(a),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,a=st(r,t.pendingProps),a=st(r.type,a),mc(e,t,r,a,n);case 15:return ep(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),ea(e,t),t.tag=1,Fe(r)?(e=!0,ma(t)):e=!1,er(t,n),Qd(t,r,a),wl(t,r,a,n),El(null,t,r,!0,e,n);case 19:return ap(e,t,n);case 22:return tp(e,t,n)}throw Error(S(156,t.tag))};function bp(e,t){return Gc(e,t)}function j0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new j0(e,t,n,r)}function ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J0(e){if(typeof e=="function")return ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jl)return 11;if(e===Ul)return 14}return 2}function nn(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ra(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")ws(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case On:return xn(n.children,a,i,t);case jl:l=8,a|=8;break;case Ki:return e=Re(12,n,t,a|2),e.elementType=Ki,e.lanes=i,e;case qi:return e=Re(13,n,t,a),e.elementType=qi,e.lanes=i,e;case Gi:return e=Re(19,n,t,a),e.elementType=Gi,e.lanes=i,e;case Lc:return Fa(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _c:l=10;break e;case Tc:l=9;break e;case Jl:l=11;break e;case Ul:l=14;break e;case Wt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Re(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function xn(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Fa(e,t,n,r){return e=Re(22,e,r,t),e.elementType=Lc,e.lanes=n,e.stateNode={isHidden:!1},e}function Wi(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Hi(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function U0(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mi(0),this.expirationTimes=Mi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ns(e,t,n,r,a,i,l,s,u){return e=new U0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},is(i),e}function W0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Fn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function wp(e){if(!e)return on;e=e._reactInternals;e:{if(Cn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Fe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Fe(n))return wd(e,n,t)}return t}function Np(e,t,n,r,a,i,l,s,u){return e=Ns(n,r,!0,e,a,i,l,s,u),e.context=wp(null),n=e.current,r=Pe(),a=tn(n),i=Pt(r,a),i.callback=t??null,Rt(n,i,a),e.current.lanes=a,oo(e,a,r),Oe(e,r),e}function Oa(e,t,n,r){var a=t.current,i=Pe(),l=tn(a);return n=wp(n),t.context===null?t.context=n:t.pendingContext=n,t=Pt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Rt(a,t,l),e!==null&&(pt(e,a,l,i),Qo(e,a,l)),l}function Ma(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Cc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ss(e,t){Cc(e,t),(e=e.alternate)&&Cc(e,t)}function H0(){return null}var Sp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}ja.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Oa(e,t,null,null)};ja.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sn(function(){Oa(null,e,null,null)}),t[Dt]=null}};function ja(e){this._internalRoot=e}ja.prototype.unstable_scheduleHydration=function(e){if(e){var t=td();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Vt.length&&t!==0&&t<Vt[n].priority;n++);Vt.splice(n,0,e),n===0&&rd(e)}};function Cs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mc(){}function V0(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=Ma(l);i.call(c)}}var l=Np(t,r,e,0,null,!1,!1,"",Mc);return e._reactRootContainer=l,e[Dt]=l.current,Xr(e.nodeType===8?e.parentNode:e),Sn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=Ma(u);s.call(c)}}var u=Ns(e,0,!1,null,null,!1,!1,"",Mc);return e._reactRootContainer=u,e[Dt]=u.current,Xr(e.nodeType===8?e.parentNode:e),Sn(function(){Oa(t,u,n,r)}),u}function Ua(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=Ma(l);s.call(u)}}Oa(t,l,e,a)}else l=V0(n,t,e,a,r);return Ma(l)}Rc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(Vl(t,n|1),Oe(t,pe()),(G&6)===0&&(sr=pe()+500,sn()))}break;case 13:Sn(function(){var r=It(e,1);if(r!==null){var a=Pe();pt(r,e,1,a)}}),Ss(e,1)}};Kl=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Pe();pt(t,e,134217728,n)}Ss(e,134217728)}};ed=function(e){if(e.tag===13){var t=tn(e),n=It(e,t);if(n!==null){var r=Pe();pt(n,e,t,r)}Ss(e,t)}};td=function(){return Q};nd=function(e,t){var n=Q;try{return Q=e,t()}finally{Q=n}};ol=function(e,t,n){switch(t){case"input":if(Qi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Pa(r);if(!a)throw Error(S(90));Ac(r),Qi(r,a)}}}break;case"textarea":Ic(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};Uc=xs;Wc=Sn;var K0={usingClientEntryPoint:!1,Events:[io,Wn,Pa,jc,Jc,xs]},Cr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q0={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$t.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Kc(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||H0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Mr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Mr.isDisabled&&Mr.supportsFiber))try{za=Mr.inject(q0),St=Mr}catch{}var Mr;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K0;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cs(t))throw Error(S(200));return W0(e,t,null,n)};qe.createRoot=function(e,t){if(!Cs(e))throw Error(S(299));var n=!1,r="",a=Sp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Ns(e,1,!1,null,null,n,!1,r,a),e[Dt]=t.current,Xr(e.nodeType===8?e.parentNode:e),new Es(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=Kc(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return Sn(e)};qe.hydrate=function(e,t,n){if(!Ja(t))throw Error(S(200));return Ua(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!Cs(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=Sp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Np(t,null,e,1,n??null,a,!1,i,l),e[Dt]=t.current,Xr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new ja(t)};qe.render=function(e,t,n){if(!Ja(t))throw Error(S(200));return Ua(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Ja(e))throw Error(S(40));return e._reactRootContainer?(Sn(function(){Ua(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};qe.unstable_batchedUpdates=xs;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ja(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ua(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426"});var zp=dn((Fg,Mp)=>{"use strict";function Cp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cp)}catch(e){console.error(e)}}Cp(),Mp.exports=Ep()});var Tp=dn(Ms=>{"use strict";var _p=zp();Ms.createRoot=_p.createRoot,Ms.hydrateRoot=_p.hydrateRoot;var Og});var o=Ys(fi()),rf=Ys(Tp()),Ka=Date.now();function ge(){return Ka+=1,Ka}var qa=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function fr(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(a=>a.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function G0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function H(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function rt(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Ct(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function Ft(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function zs(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ti(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(H(0)))n=0;else if(t.has(H(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,a=n,i=0,l=!0,s=!1;for(;;)if(t.has(H(a)))r++,i++,!l&&i>=7&&(l=!0,i=0),a-=1;else if(l)l=!1,i=0,s=!0,a-=1;else break;return{streak:r,freezeUsed:s}}function _s(e){return ti(e).streak}var X0=[15,30,45,60,90,120],ni={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},open(e){this.fn&&this.fn(e)}},ho={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},propagate(e,t,n){this.fn&&this.fn(e,t,n)}},Lp="tasksh.links.v1",of={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},Ln=(e,t)=>`${e}:${t}`,af=e=>{let t=String(e).indexOf(":");return{kind:String(e).slice(0,t),id:Number(String(e).slice(t+1))}};function lf(e,t){let n=[];for(let[r,a]of e)r===t?n.push(a):a===t&&n.push(r);return n}function Y0(e,t,n){return e.some(([r,a])=>r===t&&a===n||r===n&&a===t)}function Q0(e,t,n){return t===n||Y0(e,t,n)?e:[...e,[t,n]]}function Z0(e,t,n){return e.filter(([r,a])=>!(r===t&&a===n||r===n&&a===t))}function Pp(e,t){let{kind:n,id:r}=af(e),a=n==="routine"?t.routines:n==="good"?t.habits:n==="vault"?t.vaultHabits:null;if(!a)return null;let i=a.find(l=>l.id===r);return i?{kind:n,id:r,label:i.label,meta:of[n]?.label||n}:null}function R0(e,t,n,r,a){let i=lf(n,e);if(!i.length)return 0;let l=(u,c)=>u.map(d=>{if(d.id!==c)return d;let p=d.history||[];if(p.some(k=>k&&typeof k=="object")||d.penalty!==void 0){let k=gt(p),y=k.some(g=>g.d===a&&g.t==="done");if(t===y)return d;let C=k.filter(g=>g.d!==a);return{...d,history:t?[...C,{d:a,t:"done"}]:C}}let v=p.includes(a);return t===v?d:{...d,history:t?[...p,a]:p.filter(k=>k!==a)}}),s={routine:[],good:[],vault:[]};for(let u of i){let{kind:c,id:d}=af(u);s[c]&&s[c].push(d)}return s.routine.length&&r.setRoutines&&r.setRoutines(u=>s.routine.reduce((c,d)=>l(c,d),u)),s.good.length&&r.setHabits&&r.setHabits(u=>s.good.reduce((c,d)=>l(c,d),u)),s.vault.length&&r.setVaultHabits&&r.setVaultHabits(u=>s.vault.reduce((c,d)=>l(c,d),u)),i.length}function eh(){let[e,t]=(0,o.useState)(()=>ke(Lp,[]));return(0,o.useEffect)(()=>{try{localStorage.setItem(Lp,JSON.stringify(e))}catch{}},[e]),{links:e,setLinks:t}}var Ga="tasksh.meta.v1";function po(e){try{let t=ke(Ga,{});localStorage.setItem(Ga,JSON.stringify({...t,...e}))}catch{}}var Ap="tasksh.achievements.v1",Dp="tasksh.wallet.v1",fo=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function sf(e){return fo.find(t=>t.id===e)}function th(e,t){let n=new Set(t),r=[];for(let a of fo){if(n.has(a.id))continue;let i=!1;try{i=!!a.test(e)}catch{i=!1}i&&r.push(a.id)}return r}var nh=e=>20+e*5;function rh(e){let[t,n]=(0,o.useState)(()=>ke(Ap,[])),[r,a]=(0,o.useState)(()=>ke(Dp,{coins:0})),[i,l]=(0,o.useState)([]);(0,o.useEffect)(()=>{try{localStorage.setItem(Ap,JSON.stringify(t))}catch{}},[t]),(0,o.useEffect)(()=>{try{localStorage.setItem(Dp,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let c=th({...e,coins:r.coins},t);if(!c.length)return;n(p=>[...p,...c]),l(p=>[...p,...c]);let d=c.reduce((p,h)=>p+(sf(h)?.coins||0),0);d&&a(p=>({...p,coins:p.coins+d}))},[e,t,r.coins]);let s=(0,o.useCallback)(c=>a(d=>({...d,coins:Math.max(0,d.coins+c)})),[]),u=(0,o.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var cn={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},Ts="tasksh.pet.v1",Pn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function Va(e){let t=Pn[0];for(let n of Pn)e>=n.minLevel&&(t=n);return t}function As(e){return Pn.find(t=>t.minLevel>e)||null}var Ip={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},_n=e=>Math.max(0,Math.min(100,Math.round(e)));function Bp(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let a=i=>r*i;return{...e,happiness:_n(e.happiness-a(.55)),energy:_n(e.energy-a(.75)),friendship:_n(e.friendship-a(.12)),intelligence:e.intelligence,lastTick:t}}var oh={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function Ls(e,t){let n=oh[t];return n?{...e,happiness:_n(e.happiness+(n.happiness||0)),energy:_n(e.energy+(n.energy||0)),friendship:_n(e.friendship+(n.friendship||0)),intelligence:_n(e.intelligence+(n.intelligence||0))}:e}function Fs(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function uf(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function un(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function ah(e){let{pet:t,level:n,hour:r,doneToday:a,totalToday:i,streak:l,phase:s}=e,u=Fs(t),c=Math.floor(Date.now()/36e5);return t.energy<22?un(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&a===i?un([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?un([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):a===0&&r>=14?un(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?un(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?un(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?un(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":un([`${a} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function ih(e){let{pet:t,level:n,doneToday:r,totalToday:a,streak:i,routineNow:l,nextRoutine:s}=e,u=Fs(t);return[`pet: ${t.name}, ${Pn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${uf(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${a} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function lh(e,t){let n=(0,o.useRef)(ke(Ts,null)===null),[r,a]=(0,o.useState)(()=>{let p=ke(Ts,null),h=p?{...Ip,...p}:{...Ip,born:Date.now(),lastTick:Date.now()};return Bp(h,Date.now())}),[i,l]=(0,o.useState)(null);(0,o.useEffect)(()=>{try{localStorage.setItem(Ts,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let p=setInterval(()=>a(h=>Bp(h,Date.now())),3e5);return()=>clearInterval(p)},[]);let s=(0,o.useMemo)(()=>Va(e),[e]);(0,o.useEffect)(()=>{if(n.current){n.current=!1,s.stage!==r.stage&&a(p=>({...p,stage:s.stage}));return}if(s.stage>r.stage){let p=r.stage;l({from:p,to:s.stage}),a(h=>Ls({...h,stage:s.stage},"levelUp")),D.success()}else s.stage<r.stage&&a(p=>({...p,stage:s.stage}))},[s.stage,r.stage]);let u=(0,o.useCallback)(p=>{a(h=>Ls(h,p))},[]);(0,o.useEffect)(()=>cn.on(p=>a(h=>Ls(h,p))),[]);let c=(0,o.useCallback)(p=>{let h=String(p||"").trim().slice(0,14);h&&a(v=>({...v,name:h}))},[]),d=(0,o.useCallback)((p,h)=>{a(v=>({...v,chats:p==="user"?v.chats+1:v.chats,log:[...v.log||[],{role:p,text:String(h).slice(0,240)}].slice(-8)}))},[]);return{pet:r,form:s,mood:Fs(r),evolution:i,clearEvolution:()=>l(null),nudge:u,rename:c,remember:d}}var Ds=o.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:a=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,d=c-s*.8-u*.62-(l>=3?5:0),p=4.6-l*.3,h=Math.min(6+l*5.2,Math.max(4,d-u-9)),v=9+l*1.1,k=9+l*5.4,y=33+l*5.2,C=l>=3,g=l>=4,f=l>=6,m=l>=5,x=l>=2?Math.min(4,l-1):0,w=n==="sleepy"||n==="tired",b=n==="joyful",M=n==="low"||n==="drained",_=w?.9:p*(b?1.16:1)*2,O=M?`M 56 ${d+9} q 8 -5 16 0`:b?`M 55 ${d+6} q 9 8 18 0`:`M 57 ${d+7} q 7 4 14 0`;return o.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${a?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":Pn[l].scale},role:"img","aria-label":`${Pn[l].name}, ${n}`},o.default.createElement("defs",null,o.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},o.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),o.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),o.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},o.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),o.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),o.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:y,fill:`url(#pg-aura-${l})`}),g&&o.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},o.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),o.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),o.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&o.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),C&&o.default.createElement("rect",{x:"59",y:d+u-5,width:"10",height:Math.max(0,c-s*.7-d-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),m&&o.default.createElement("g",{opacity:"0.8"},[0,1,2].map(A=>o.default.createElement("path",{key:A,d:`M ${64-s*.72+A*3} ${c-6-A*7} l -${6+A} -${5+A*2} l ${9+A} ${1+A} Z`,fill:"var(--accent2)"}))),o.default.createElement("g",{className:"pet-body"},o.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),o.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:x}).map((A,W)=>o.default.createElement("circle",{key:W,cx:50+W*14,cy:68+W%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),o.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("g",{className:"pet-head"},o.default.createElement("path",{d:`M ${64-v} ${d-u*.72}
                  q -3 -${h} 3 -${h*1.25}
                  q 5 ${h*.45} 4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),o.default.createElement("path",{d:`M ${64+v} ${d-u*.72}
                  q 3 -${h} -3 -${h*1.25}
                  q -5 ${h*.45} -4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),f&&o.default.createElement("g",{className:"pet-crown"},o.default.createElement("path",{d:`M 51 ${d-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),o.default.createElement("circle",{cx:"64",cy:d-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),o.default.createElement("circle",{cx:"64",cy:d,r:u,fill:`url(#pg-body-${l})`}),w?o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:`M ${64-8.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),o.default.createElement("path",{d:`M ${64+.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):o.default.createElement("g",{className:"pet-eyes"},o.default.createElement("ellipse",{cx:64-7.5,cy:d,rx:p,ry:_/2,fill:"var(--bg)"}),o.default.createElement("ellipse",{cx:64+7.5,cy:d,rx:p,ry:_/2,fill:"var(--bg)"}),o.default.createElement("circle",{cx:64-6.2,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),o.default.createElement("circle",{cx:64+8.8,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),o.default.createElement("path",{d:O,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&o.default.createElement(o.default.Fragment,null,o.default.createElement("ellipse",{cx:49,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),o.default.createElement("ellipse",{cx:79,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&o.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((A,W)=>o.default.createElement("circle",{key:W,cx:"64",cy:c-8-y,r:1.6+W*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${W*(360/Math.min(4,l))}deg)`}}))))}),mr=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],$p=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function Fp(e){for(let t of $p)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return $p[2]}function sh(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var uh=o.default.memo(function({theme:t,phase:n,calm:r,scoped:a=!1}){let i=t.ambient.particle,l=a?"amb-layer amb-scoped":"amb-layer",s=(0,o.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(d,p)=>{let h=i==="bubbles"?3+p%4*2:2+p%3;return{left:`${(p*37+11)%100}%`,size:h,delay:`${-(p*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+p%7*4}s`}}),[i]),u=(0,o.useMemo)(()=>n.stars?Array.from({length:34},(c,d)=>({left:`${(d*29+7)%100}%`,top:`${(d*53+13)%62}%`,op:.2+d*37%60/100})):[],[n.stars]);return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement("div",{className:`${l} amb-blobs`}),o.default.createElement("div",{className:`${l} amb-time`},o.default.createElement("div",{className:"amb-ray"})),u.length>0&&o.default.createElement("div",{className:`${l} amb-stars`},u.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,top:c.top,opacity:c.op}}))),s.length>0&&o.default.createElement("div",{className:`${l} amb-dust`},s.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),o.default.createElement("div",{className:`${l} amb-grain`}),r&&o.default.createElement("div",{className:"calm-breath"}))}),Op="tasksh.calm.v1",jp="tasksh.ambience.v1";function ch(e){let[t,n]=(0,o.useState)(()=>{try{return localStorage.getItem(Jp)||Wa}catch{return Wa}}),[r,a]=(0,o.useState)(()=>{try{return localStorage.getItem(Op)==="1"}catch{return!1}}),[i,l]=(0,o.useState)(()=>{try{return localStorage.getItem(jp)!=="0"}catch{return!0}}),[s,u]=(0,o.useState)(()=>Fp(fr().hour)),c=(0,o.useMemo)(()=>dh(t),[t]);(0,o.useEffect)(()=>{!Is(c,e)&&c.id!==Wa&&n(Wa)},[c,e]),(0,o.useEffect)(()=>{ph(c);try{localStorage.setItem(Jp,c.id)}catch{}},[c]),(0,o.useEffect)(()=>{sh(s)},[s]),(0,o.useEffect)(()=>{let p=setInterval(()=>{let h=Fp(fr().hour);u(v=>v.id===h.id?v:h)},12e4);return()=>clearInterval(p)},[]),(0,o.useEffect)(()=>{let p=document.documentElement;p.style.setProperty("--calm",r?"1":"0"),p.style.setProperty("--motion-scale",r?"1.9":"1"),p.classList.toggle("calm-mode",r);try{localStorage.setItem(Op,r?"1":"0")}catch{}},[r]);let d=(0,o.useMemo)(()=>mr.filter(p=>Is(p,e)),[e]);return(0,o.useEffect)(()=>{document.documentElement.classList.toggle("no-ambience",!i);try{localStorage.setItem(jp,i?"1":"0")}catch{}},[i]),{theme:c,themeId:t,setThemeId:n,themes:mr,unlocked:d,phase:s,calm:r,setCalm:a,ambience:i,setAmbience:l}}var Wa="terminal",Jp="tasksh.theme.v1";function dh(e){return mr.find(t=>t.id===e)||mr[0]}function Is(e,t){return t>=e.unlockLevel}function ph(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((a,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${a[0]}, ${a[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var cf="tasksh.sound.v1",so=null;function fh(){if(!so){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;so=new e}return so.state==="suspended"&&so.resume(),so}function df(){try{let e=localStorage.getItem(cf);return e===null?!0:e==="1"}catch{return!0}}function mh(e){try{localStorage.setItem(cf,e?"1":"0")}catch{}}function Mn(e){if(!df())return;let t=fh();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:a=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+a),c.gain.setValueAtTime(1e-4,n+a),c.gain.exponentialRampToValueAtTime(s,n+a+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+a+i),u.connect(c),c.connect(t.destination),u.start(n+a),u.stop(n+a+i+.02)})}var D={click:()=>Mn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>Mn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>Mn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>Mn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>Mn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>Mn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function hh(){let[e,t]=(0,o.useState)(df());return[e,()=>{let r=!e;t(r),mh(r),r&&Mn([{freq:720,dur:.05,gain:.04}])}]}function gh(e,t=550){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(e),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let l=a.current,s=e;if(l===s)return;let u=performance.now(),c=p=>1-Math.pow(1-p,3),d=p=>{let h=p-u,v=Math.min(1,h/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(d):a.current=s};return i.current=requestAnimationFrame(d),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function mt({value:e,className:t,suffix:n=""}){let r=gh(e);return o.default.createElement("span",{className:t},r,n)}function vh({axes:e,size:t=220,maxValue:n}){let[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let m=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(m)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(m=>m.value)),d=m=>Math.PI*2*m/i-Math.PI/2,p=.16,h=Math.min(0,...e.map(m=>m.value)),v=m=>m>0?p+(1-p)*Math.min(1,m/c):m===0||!h?p:p*(1-.8*Math.min(1,m/h)),k=(m,x)=>{let w=d(m);return[l+Math.cos(w)*u*x,s+Math.sin(w)*u*x]},y=i>6?46:22,C=[.25,.5,.75,1],f=e.map((m,x)=>k(x,r?v(m.value):.02)).map((m,x)=>`${x===0?"M":"L"}${m[0].toFixed(1)},${m[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`${-y} 0 ${t+y*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},C.map((m,x)=>{let b=e.map((M,_)=>k(_,p+(1-p)*m)).map((M,_)=>`${_===0?"M":"L"}${M[0].toFixed(1)},${M[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:x,d:b,className:"radar-ring"})}),o.default.createElement("path",{d:e.map((m,x)=>{let w=k(x,p);return`${x===0?"M":"L"}${w[0].toFixed(1)},${w[1].toFixed(1)}`}).join(" ")+"Z",className:"radar-zero"}),e.map((m,x)=>{let w=k(x,1);return o.default.createElement("line",{key:x,x1:l,y1:s,x2:w[0],y2:w[1],className:"radar-spoke"})}),o.default.createElement("path",{d:f,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((m,x)=>{let w=k(x,1.19),b=k(x,r?v(m.value):.02),M=m.value<0,_=Math.cos(d(x)),O=_>.25?"start":_<-.25?"end":"middle";return o.default.createElement("g",{key:m.key||x},o.default.createElement("circle",{cx:b[0],cy:b[1],r:i>6?2.8:3.5,fill:M?"none":m.color||"#5EEAD4",stroke:M?"var(--danger)":"none",strokeWidth:M?1.4:0,style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:w[0],y:w[1],textAnchor:O,dominantBaseline:"middle",className:`radar-label ${M?"radar-label-neg":""}`},M?`${m.label} \u2193`:m.label))}))}function Os({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:a="#1E2228",label:i,sublabel:l}){let[s,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let y=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(y)},[]);let c=t/2-n,d=2*Math.PI*c,p=Math.max(0,Math.min(100,e)),h=d-(s?p/100:0)*d,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:a,strokeWidth:n}),o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function pf({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:a}){let[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let h=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((h,v)=>h+Math.max(0,v.value),0)),d=0,p=e.map(h=>{let v=Math.max(0,h.value),k=v/c,y=i?k*u:0,C=u-y,g=d/c*360;return d+=v,{...h,dash:y,gap:C,rotation:g,frac:k}});return o.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),p.map((h,v)=>o.default.createElement("circle",{key:h.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:p.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},r!==void 0&&o.default.createElement("span",{className:"donut-center-label"},r),a&&o.default.createElement("span",{className:"donut-center-sublabel"},a)))}function yh({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],a=0,i=t*7,l=Array.from({length:i},(d,p)=>a-(i-1-p)),s=Math.max(1,...l.map(d=>e[H(d)]||0)),u=[];for(let d=0;d<t;d++)u.push(l.slice(d*7,d*7+7));let c=d=>{if(!d)return 0;let p=d/s;return p>.75?4:p>.5?3:p>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},u.map((d,p)=>o.default.createElement("div",{className:"heatmap-col",key:p},d.map((h,v)=>{let k=H(h),y=e[k]||0,C=c(y);return o.default.createElement("span",{key:v,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[C],animationDelay:`${(p*7+v)*4}ms`},title:`${k}: ${y} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),r.map((d,p)=>o.default.createElement("span",{key:p,className:"heatmap-legend-cell",style:{background:d}})),o.default.createElement("span",null,"more")))}function xh(e){let t=[],n=[];for(let r of e){let a=t.findIndex(i=>r.start>=i);a===-1?(a=t.length,t.push(r.end)):t[a]=r.end,n.push({...r,lane:a})}return{placed:n,laneCount:Math.max(1,t.length)}}function kh({routines:e,nowMinutes:t,doneToday:n=0,onToggleToday:r}){let[a,i]=(0,o.useState)(!1),[l,s]=(0,o.useState)(0),[u,c]=(0,o.useState)(0),d=(0,o.useRef)(null),p=(0,o.useRef)(!1),h=(0,o.useRef)({id:null,at:0,x:0,y:0,moved:!1}),[v,k]=(0,o.useState)(null),y=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{y.current&&clearTimeout(y.current)},[]);let C=P=>{r?.(P),k(P),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{k(null),y.current=null},420)},g=(P,V)=>{h.current.x=P.clientX,h.current.y=P.clientY,h.current.moved=!1},f=()=>{h.current.moved=!0},m=(P,V)=>{let R=h.current;if(Math.abs(P.clientX-R.x)>8||Math.abs(P.clientY-R.y)>8){R.id=null;return}let E=Date.now();R.id===V&&E-R.at<400?(C(V),R.id=null,R.at=0):(R.id=V,R.at=E)};(0,o.useEffect)(()=>{let P=requestAnimationFrame(()=>i(!0));return()=>cancelAnimationFrame(P)},[]),(0,o.useEffect)(()=>{if(!d.current)return;let P=d.current,V=new ResizeObserver(R=>{for(let E of R)s(E.contentRect.width)});return V.observe(P),s(P.getBoundingClientRect().width),()=>V.disconnect()},[]);let x=1440,w=H(0),b=e.map(P=>{let V=rt(P.time);return{r:P,start:V,end:V+Math.max(1,P.duration)}}),{placed:M,laneCount:_}=xh(b),A=Math.max(l,24*82),W=A/x,F=A>l+1,T=t*W;(0,o.useEffect)(()=>{if(!d.current||!l||p.current)return;if(!F){p.current=!0;return}let P=d.current,V=Math.max(0,Math.min(T-l/2,A-l));P.scrollTo({left:V,behavior:"auto"}),p.current=!0},[l,T,A,F]),(0,o.useEffect)(()=>{let P=d.current;if(!P)return;let V=0,R=()=>{V||(V=requestAnimationFrame(()=>{c(P.scrollLeft),V=0}))};return P.addEventListener("scroll",R,{passive:!0}),c(P.scrollLeft),()=>{P.removeEventListener("scroll",R),cancelAnimationFrame(V)}},[l]);let B=()=>{let P=d.current;P&&(P.scrollTo({left:Math.max(0,Math.min(T-l/2,A-l)),behavior:"smooth"}),D.click())},J=38,L=6,oe=8,De=oe*2+_*J+(_-1)*L,ve=W*60>=40?1:3,q=[];for(let P=0;P<=24;P+=ve)q.push(P);let ie=P=>{let V=P%24;return V===0?"12a":V===12?"12p":V>12?`${V-12}p`:`${V}a`},ce=e.length,je=ce?Math.round(n/ce*100):0;return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-head"},o.default.createElement("div",{className:"timeline-head-left"},o.default.createElement("span",{className:"timeline-title"},"today's schedule"),ce>0&&o.default.createElement("span",{className:"timeline-count"},n,"/",ce," done")),F&&o.default.createElement("button",{className:"timeline-jump",onClick:B,title:"Jump to now"},"now")),ce>0&&o.default.createElement("div",{className:"timeline-progress"},o.default.createElement("div",{className:"timeline-progress-fill",style:{width:a?`${je}%`:"0%"}})),o.default.createElement("div",{className:"timeline-scroll",ref:d},o.default.createElement("div",{className:"timeline-inner",style:{width:A}},o.default.createElement("div",{className:"timeline-hours"},q.map(P=>o.default.createElement("div",{key:P,className:"timeline-hour",style:{left:P*60*W}},o.default.createElement("span",null,ie(P))))),o.default.createElement("div",{className:"timeline-track",style:{height:De}},o.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*W}}),o.default.createElement("div",{className:"timeline-night",style:{left:1320*W,width:120*W}}),q.map(P=>o.default.createElement("div",{key:P,className:`timeline-gridline ${P%6===0?"major":""}`,style:{left:P*60*W}})),o.default.createElement("div",{className:"timeline-elapsed",style:{width:a?T:0}}),M.map(({r:P,start:V,lane:R},E)=>{let z=V*W,j=Math.max(1,P.duration)*W,U=Math.max(4,Math.min(j,A-z)),Z=(P.history||[]).includes(w),Mt=pr(P.id),vt=Math.max(z,u),ot=Math.min(z+U,u+l),An=Math.max(0,ot-vt)>38,_e=Math.max(0,Math.min(u-z,U-46)),li=t>=V&&t<V+P.duration;return o.default.createElement("div",{key:P.id,role:r?"button":void 0,tabIndex:r?0:void 0,"aria-pressed":r?Z:void 0,"aria-label":r?`${P.label}, ${Ct(V)}${Z?", done":""}. Double-tap to toggle.`:void 0,onPointerDown:r?yt=>g(yt,P.id):void 0,onPointerUp:r?yt=>m(yt,P.id):void 0,onPointerCancel:r?f:void 0,onKeyDown:r?yt=>{(yt.key==="Enter"||yt.key===" ")&&(yt.preventDefault(),C(P.id))}:void 0,className:`timeline-block ${Z?"done":""} ${li?"active":""} ${r?"tappable":""} ${v===P.id?"pulse":""}`,style:{left:z,top:oe+R*(J+L),width:a?U:0,height:J,transitionDelay:`${Math.min(E*18,260)}ms`,background:Z?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Mt}, ${Mt}C4)`,boxShadow:Z?"none":`0 2px 10px ${Mt}44`},title:`${P.label} \xB7 ${Ct(V)} \xB7 ${Ft(P.duration)}${Z?" \xB7 done":""}`},An&&o.default.createElement("span",{className:"timeline-block-label",style:_e>0?{paddingLeft:_e+8}:void 0},Z&&o.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),P.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:T}})))),F&&o.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var bh=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[H(-1),H(-2),H(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[H(-1),H(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[H(0),H(-1),H(-2),H(-3),H(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[H(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function wh(){let[e,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let n=!1,r=async()=>{try{if(typeof caches>"u"||!caches.keys)return;let l=(await caches.keys()).filter(s=>/^tasksh-v\d+$/.test(s)).sort((s,u)=>parseInt(u.slice(8),10)-parseInt(s.slice(8),10))[0];!n&&l&&t(l.replace("tasksh-",""))}catch{}};r();let a=navigator.serviceWorker;return a?.addEventListener?.("controllerchange",r),()=>{n=!0,a?.removeEventListener?.("controllerchange",r)}},[]),e}function Nh(){let e=wh();return e?o.default.createElement("span",{className:"version-badge",title:`running build ${e}`},e):null}function ri(e=420){let[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(null),a=(0,o.useCallback)(()=>{r.current&&clearTimeout(r.current),n(!0),r.current=setTimeout(()=>{n(!1),r.current=null},e)},[e]);return(0,o.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),[t,a]}function js(){let[e,t]=(0,o.useState)(fr());return(0,o.useEffect)(()=>{let n=setInterval(()=>t(fr()),1e3);return()=>clearInterval(n)},[]),e}function Js(e,t){return(0,o.useMemo)(()=>{let n=[...e].sort((i,l)=>rt(i.time)-rt(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&rt(n[i].time)<=t;i++)r=i;let a=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[a].id}},[e,t])}function Sh({routine:e,status:t,index:n,onDelete:r,onToggleToday:a,onSave:i}){let l=rt(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=ti(e.history),d=(e.history||[]).includes(H(0)),[p,h]=(0,o.useState)(0),v=(0,o.useRef)(!1),k=(0,o.useRef)(0),y=(0,o.useRef)(0),C=(0,o.useRef)(null),g=(0,o.useRef)(!1),[f,m]=(0,o.useState)(!1),x=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{x.current&&clearTimeout(x.current)},[]);let[w,b]=(0,o.useState)(!1),[M,_]=(0,o.useState)(e.label),[O,A]=(0,o.useState)(e.time),[W,F]=(0,o.useState)(e.duration),[T,B]=(0,o.useState)(e.alternatives||[]),J=()=>{_(e.label),A(e.time),F(e.duration),B(e.alternatives||[]),b(!0)},L=()=>{let q=M.trim();q&&(i(e.id,{label:q,time:O||e.time,duration:Math.max(5,+W||e.duration),alternatives:T.map(ie=>ie.trim()).filter(Boolean)}),b(!1))},oe=q=>{w||(v.current=!0,g.current=!1,C.current=null,k.current=q.clientX,y.current=q.clientY)},De=q=>{if(!v.current)return;let ie=q.clientX-k.current,ce=q.clientY-y.current;if(C.current===null){if(Math.abs(ie)<6&&Math.abs(ce)<6)return;if(C.current=Math.abs(ie)>Math.abs(ce)?"x":"y",C.current==="y"){v.current=!1;return}}C.current==="x"&&(Math.abs(ie)>4&&(g.current=!0),h(Math.max(-120,Math.min(0,ie))))},ve=()=>{v.current&&(v.current=!1,p<-70?(m(!0),x.current||(x.current=setTimeout(()=>r(e.id),200))):(h(0),g.current||J()))};return o.default.createElement("div",{className:`routine-row-wrap ${f?"removing":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${p}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${d?"#2A2F36":pr(e.id)}`},onPointerDown:oe,onPointerMove:De,onPointerUp:ve,onPointerLeave:ve,onPointerCancel:ve},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${d?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),w?o.default.createElement("div",{className:"routine-edit",onPointerDown:q=>q.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:M,onChange:q=>_(q.target.value),onKeyDown:q=>q.key==="Enter"&&L(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:O,onChange:q=>A(q.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:W,onChange:q=>F(q.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),T.map((q,ie)=>o.default.createElement("div",{className:"alt-composer-row",key:ie},o.default.createElement("input",{type:"text",placeholder:`alternative ${ie+1}`,value:q,onChange:ce=>{let je=[...T];je[ie]=ce.target.value,B(je)},onKeyDown:ce=>ce.key==="Enter"&&L()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>B(T.filter((ce,je)=>je!==ie)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>B([...T,""])},"+ another option")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>b(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:L},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},Ct(l)),t==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&o.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),o.default.createElement("span",{className:"routine-span"},Ct(l)," \u2013 ",Ct(s)," \xB7 ",Ft(e.duration))),!w&&o.default.createElement("button",{className:"link-btn routine-link",onClick:q=>{q.stopPropagation(),ni.open(Ln("routine",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function Eh({routines:e,setRoutines:t}){let n=js(),r=n.hour*60+n.minute,{sorted:a,currentId:i,nextId:l}=Js(e,r),s=a.find(T=>T.id===i),u=a.find(T=>T.id===l),[c,d]=(0,o.useState)(""),[p,h]=(0,o.useState)(()=>zs(r)),[v,k]=(0,o.useState)(30),[y,C]=ri(),[g,f]=(0,o.useState)([]),[m,x]=(0,o.useState)(!1),w=()=>{let T=c.trim();if(!T){C(),D.error();return}let B=p||zs(r),J=g.map(L=>L.trim()).filter(Boolean);t(L=>[...L,{id:ge(),time:B,label:T,duration:Math.max(5,+v||30),history:[],alternatives:J}]),d(""),h(zs(r)),k(30),f([]),x(!1),D.click()},b=T=>{t(B=>B.filter(J=>J.id!==T)),D.delete()},M=T=>{let B=H(0),J=!(e.find(L=>L.id===T)?.history||[]).includes(B);t(L=>L.map(oe=>{if(oe.id!==T)return oe;let ve=(oe.history||[]).includes(B)?oe.history.filter(q=>q!==B):[...oe.history||[],B];return{...oe,history:ve.slice(-60)}})),ho.propagate("routine",T,J),J?(D.success(),cn.emit("routineDone")):D.click()},_=(T,B)=>t(J=>J.map(L=>L.id===T?{...L,...B}:L)),O=s?rt(s.time)+s.duration:0,A=u?(rt(u.time)-r+1440)%1440||1440:0,W=H(0),F=a.filter(T=>(T.history||[]).includes(W)).length;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},G0()),o.default.createElement("div",{className:"hero-divider"}),s?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),s.label),o.default.createElement("span",{className:"hero-sub"},"until ",Ct(O)," \xB7 next: ",u?.label," in ",Ft(A))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement(kh,{routines:a,nowMinutes:r,doneToday:F,onToggleToday:M}),o.default.createElement("div",{className:`composer ${y?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:T=>d(T.target.value),onKeyDown:T=>T.key==="Enter"&&w()}),o.default.createElement("input",{type:"time",className:"time-input",value:p,onChange:T=>h(T.target.value)}),o.default.createElement("button",{type:"button",className:`alt-toggle-btn ${m?"active":""}`,onClick:()=>x(T=>!T),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),o.default.createElement("button",{className:"add-btn",onClick:w,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),m&&o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),g.map((T,B)=>o.default.createElement("div",{className:"alt-composer-row",key:B},o.default.createElement("input",{type:"text",placeholder:`alternative ${B+1}, e.g. "Drawing"`,value:T,onChange:J=>{let L=[...g];L[B]=J.target.value,f(L)},onKeyDown:J=>J.key==="Enter"&&w()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>f(g.filter((J,L)=>L!==B)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>f([...g,""])},"+ another option")),o.default.createElement("div",{className:"duration-chips"},X0.map(T=>o.default.createElement("button",{key:T,className:v===T?"active":"",onClick:()=>k(T)},Ft(T))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:T=>k(+T.target.value||5)})),a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):a.map((T,B)=>o.default.createElement(Sh,{key:T.id,routine:T,index:B,status:T.id===i?"current":T.id===l?"next":"idle",onDelete:b,onToggleToday:M,onSave:_})))}function Ch(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,a=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:a,monthLabel:i}}function Mh(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function zh(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(H(r))&&n++;return n}function _h(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(H(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var Th=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[H(0),H(-1),H(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[H(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[H(0)]}],Lh=[{id:1,name:"Notion Template",dueDate:H(7),tasks:[{id:ge(),text:"Design layout",done:!0},{id:ge(),text:"Write docs",done:!1},{id:ge(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:H(7),tasks:[{id:ge(),text:"Script draft",done:!1},{id:ge(),text:"Record",done:!1}]}];function Ph({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:a}=Ch(),i=new Set(e||[]),l=H(0),s=Array.from({length:r},(u,c)=>c+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},a),o.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=Mh(t,n,u);return o.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function Ah({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let a=(e.history||[]).includes(H(0)),{streak:i,freezeUsed:l}=ti(e.history),s=zh(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,d]=(0,o.useState)(!1),[p,h]=(0,o.useState)(e.icon),[v,k]=(0,o.useState)(e.label),[y,C]=(0,o.useState)(e.weeklyGoal),g=()=>{h(e.icon),k(e.label),C(e.weeklyGoal),d(!0)},f=()=>{let m=v.trim();m&&(r(e.id,{icon:p.trim()||e.icon,label:m,weeklyGoal:Math.max(1,Math.min(7,+y||e.weeklyGoal))}),d(!1))};return c?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:p,onChange:m=>h(m.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:m=>k(m.target.value),onKeyDown:m=>m.key==="Enter"&&f(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:y,onChange:m=>C(m.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:f},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${pr(e.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:pr(e.id)}},e.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},e.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(Ph,{history:e.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement(Os,{pct:u,size:34,stroke:3.5,color:pr(e.id)}),o.default.createElement("span",{className:"vault-card-pct"},u,"% ",o.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:"link-btn",onClick:m=>{m.stopPropagation(),ni.open(Ln("vault",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`vault-check ${a?"done":""}`,onClick:()=>t(e.id)},a?"\u2713 completed today":"mark complete today"))}function Dh({habits:e,setHabits:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(7),[l,s]=ri(),u=()=>{let h=n.trim();if(!h){s(),D.error();return}t(v=>[...v,{id:ge(),icon:"\u25C6",label:h,weeklyGoal:a,history:[]}]),r(""),i(7),D.click()},c=h=>{t(v=>v.filter(k=>k.id!==h)),D.delete()},d=(h,v)=>t(k=>k.map(y=>y.id===h?{...y,...v}:y)),p=h=>{let v=H(0),k=!(e.find(y=>y.id===h)?.history||[]).includes(v);t(y=>y.map(C=>{if(C.id!==h)return C;let f=(C.history||[]).includes(v)?C.history.filter(m=>m!==v):[...C.history||[],v];return{...C,history:f.slice(-370)}})),ho.propagate("vault",h,k),k?(D.success(),cn.emit("vaultDone")):D.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>o.default.createElement(Ah,{key:h.id,habit:h,onToggleToday:p,onDelete:c,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>o.default.createElement("button",{key:h,className:a===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function Ih({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(t.text),c=()=>{let d=s.trim();d&&a(e,t.id,d),l(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:s,onChange:d=>u(d.target.value),onKeyDown:d=>d.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement(yf,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Bh({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:a,onEditTask:i,onSave:l}){let[s,u]=(0,o.useState)(""),c=e.tasks.length,d=e.tasks.filter(b=>b.done).length,p=c?Math.round(d/c*100):0,h=_h(e.dueDate),[v,k]=(0,o.useState)(!1),[y,C]=(0,o.useState)(e.name),[g,f]=(0,o.useState)(e.dueDate||""),m=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},x=()=>{C(e.name),f(e.dueDate||""),k(!0)},w=()=>{let b=y.trim();b&&(l(e.id,{name:b,dueDate:g||null}),k(!1))};return v?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:y,onChange:b=>C(b.target.value),onKeyDown:b=>b.key==="Enter"&&w(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:g,onChange:b=>f(b.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:w},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${pr(e.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},e.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&o.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${p}%`}})),o.default.createElement("span",{className:"vault-card-pct"},d,"/",c," tasks \xB7 ",p,"%"),o.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>o.default.createElement(Ih,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:a,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&m()})))}function $h({projects:e,setProjects:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[l,s]=ri(),u=()=>{let y=n.trim();if(!y){s(),D.error();return}t(C=>[...C,{id:ge(),name:y,dueDate:a||null,tasks:[]}]),r(""),i(""),D.click()},c=y=>{t(C=>C.filter(g=>g.id!==y)),D.delete()},d=(y,C)=>t(g=>g.map(f=>f.id===y?{...f,...C}:f)),p=(y,C)=>{t(g=>g.map(f=>f.id===y?{...f,tasks:[...f.tasks,{id:ge(),text:C,done:!1}]}:f)),D.click()},h=(y,C)=>{t(g=>g.map(f=>f.id!==y?f:{...f,tasks:f.tasks.map(m=>m.id===C?{...m,done:!m.done}:m)})),D.success()},v=(y,C)=>{t(g=>g.map(f=>f.id!==y?f:{...f,tasks:f.tasks.filter(m=>m.id!==C)})),D.delete()},k=(y,C,g)=>t(f=>f.map(m=>m.id!==y?m:{...m,tasks:m.tasks.map(x=>x.id===C?{...x,text:g}:x)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):e.map(y=>o.default.createElement(Bh,{key:y.id,project:y,onDelete:c,onAddTask:p,onToggleTask:h,onDeleteTask:v,onEditTask:k,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:y=>r(y.target.value),onKeyDown:y=>y.key==="Enter"&&u()}),o.default.createElement("input",{type:"date",className:"time-input",value:a,onChange:y=>i(y.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Up="tasksh.notes.v1",Fh=[{id:1,title:"ideas.md",body:`things to build next:
- undo toast on delete
- keyboard shortcuts (ctrl+k)
- xp sparkline over time`,updated:Date.now()}];function Oh(e){if(!e)return"";let t=Math.floor((Date.now()-e)/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);if(n<24)return`${n}h ago`;let r=Math.floor(n/24);return r<30?`${r}d ago`:`${Math.floor(r/30)}mo ago`}function jh({note:e,onSave:t,onDelete:n}){let[r,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(e.title),[s,u]=(0,o.useState)(e.body),c=(0,o.useRef)(null),d=(0,o.useCallback)(()=>{let v=c.current;v&&(v.style.height="auto",v.style.height=`${v.scrollHeight}px`)},[]);(0,o.useEffect)(()=>{r&&d()},[r,d]);let p=()=>{let v=i.trim()||"untitled";t(e.id,{title:v,body:s,updated:Date.now()}),a(!1),D.click()},h=()=>{l(e.title),u(e.body),a(!1)};return r?o.default.createElement("div",{className:"note-card editing"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/notes/"),o.default.createElement("input",{className:"note-title-input",value:i,onChange:v=>l(v.target.value),placeholder:"filename","aria-label":"Note title",autoFocus:!0})),o.default.createElement("textarea",{ref:c,className:"note-body-input",value:s,onChange:v=>{u(v.target.value),d()},onKeyDown:v=>{v.key==="Escape"&&h(),v.key==="Enter"&&(v.metaKey||v.ctrlKey)&&p()},placeholder:"type here...",rows:3,"aria-label":"Note body"}),o.default.createElement("div",{className:"note-actions"},o.default.createElement("button",{className:"note-btn save",onClick:p},"save"),o.default.createElement("button",{className:"note-btn",onClick:h},"cancel"),o.default.createElement("button",{className:"note-btn danger",onClick:()=>n(e.id)},"delete"))):o.default.createElement("div",{className:"note-card",onClick:()=>a(!0),role:"button",tabIndex:0,onKeyDown:v=>{v.key==="Enter"&&a(!0)},"aria-label":`Edit note ${e.title}`},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/notes/"),o.default.createElement("span",{className:"note-title"},e.title),o.default.createElement("span",{className:"note-when"},Oh(e.updated))),e.body.trim()?o.default.createElement("pre",{className:"note-body"},e.body):o.default.createElement("pre",{className:"note-body empty"},"empty",o.default.createElement("span",{className:"note-caret"})))}function Jh({notes:e,setNotes:t}){let[n,r]=(0,o.useState)(""),[a,i]=ri(),l=()=>{let c=n.trim();if(!c){i(),D.error();return}let[d,...p]=c.split(`
`);t(h=>[{id:ge(),title:d.slice(0,40),body:p.join(`
`),updated:Date.now()},...h]),r(""),D.click()},s=(c,d)=>t(p=>p.map(h=>h.id===c?{...h,...d}:h)),u=c=>{t(d=>d.filter(p=>p.id!==c)),D.delete()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"NOTES")),o.default.createElement("div",{className:`composer ${a?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new note...",value:n,onChange:c=>r(c.target.value),onKeyDown:c=>c.key==="Enter"&&l(),"aria-label":"New note"}),o.default.createElement("button",{onClick:l,"aria-label":"Add note"},"+")),e.length===0?o.default.createElement("div",{className:"note-empty"},o.default.createElement("span",{className:"note-prompt"},"~/notes/")," is empty",o.default.createElement("span",{className:"note-caret"})):o.default.createElement("div",{className:"note-list"},e.map(c=>o.default.createElement(jh,{key:c.id,note:c,onSave:s,onDelete:u}))))}function Uh(){let[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{a.current&&clearTimeout(a.current)},[]);let i=`${hr}/next?id=${ai()}`;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"WIDGET-FEED")),o.default.createElement("div",{className:"note-card widget-feed"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/next"),o.default.createElement("span",{className:"note-when"},"home screen widget")),e?o.default.createElement("pre",{className:"note-body widget-url"},i):o.default.createElement("pre",{className:"note-body"},"tap reveal to see this device's feed URL"),o.default.createElement("div",{className:"note-actions"},o.default.createElement("button",{className:"note-btn",onClick:()=>{t(s=>!s),D.click()}},e?"hide":"reveal"),o.default.createElement("button",{className:"note-btn save",onClick:async()=>{try{await navigator.clipboard.writeText(i),r(!0),D.click(),a.current&&clearTimeout(a.current),a.current=setTimeout(()=>{r(!1),a.current=null},2e3)}catch{t(!0)}}},n?"copied":"copy url"))))}function Wh({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r,notes:a,setNotes:i}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(Dh,{habits:e,setHabits:t}),o.default.createElement($h,{projects:n,setProjects:r}),o.default.createElement(Jh,{notes:a,setNotes:i}),o.default.createElement(Uh,null))}var ht=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],oi=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],Jg=ht.reduce((e,t)=>(e[t.key]=oi.filter(n=>n.area===t.key),e),{});function gt(e){return Array.isArray(e)?e.map(t=>typeof t=="string"?{d:t,t:"done"}:t).filter(t=>t&&typeof t.d=="string"):[]}function Xa(e,t){return gt(e.history).filter(n=>n.t===t).length}function zn(e){return Math.max(0,+e.xp||0)}function dr(e){return Math.max(0,+e.penalty||0)}function go(e){return zn(e)*Xa(e,"done")-dr(e)*Xa(e,"slip")}function mo(e,t){return gt(e.history).some(n=>n.d===t&&n.t==="done")}function Bs(e,t){return gt(e.history).some(n=>n.d===t&&n.t==="slip")}function Wp(e,t,n){let r=gt(e.history),a=r.find(l=>l.d===t),i=r.filter(l=>l.d!==t);return a&&a.t===n?{...e,history:i.slice(-400)}:{...e,history:[...i,{d:t,t:n}].slice(-400)}}function Hh(e,t){let n=(Array.isArray(e)?e:[]).map(l=>({...l,xp:Math.max(0,+l.xp||0),penalty:Math.max(0,+l.penalty||0),history:gt(l.history)})),r=new Set(n.map(l=>l.id)),a=new Map,i=(Array.isArray(t)?t:[]).map(l=>{let s=l.id;return r.has(s)&&(s=ge(),a.set(l.id,s)),r.add(s),{...l,id:s,xp:Math.max(0,+l.xp2||0),penalty:Math.max(0,+l.xp||0),history:gt(l.history).map(u=>({d:u.d,t:"slip"})),wasBad:!0}});return[...n,...i]}var ff="tasksh.subareas.v1",Hp="tasksh.radarmode.v1";function Vh(){let e=ke(ff,null);return!Array.isArray(e)||!e.length?oi:e.filter(t=>t&&t.key&&t.area&&ht.some(n=>n.key===t.area))}function Ya(e,t){return e.filter(n=>n.area===t)}function $s(e,t){if(t.sub&&e.some(r=>r.key===t.sub&&r.area===t.area))return t.sub;let n=e.find(r=>r.area===t.area);return n?n.key:null}function Vp(e,t,n){return(n||[]).filter(r=>$s(e,r)===t).reduce((r,a)=>r+go(a),0)}function Kh(){let[e,t]=(0,o.useState)(Vh),[n,r]=(0,o.useState)(()=>{try{return localStorage.getItem(Hp)||"subs"}catch{return"subs"}});(0,o.useEffect)(()=>{try{localStorage.setItem(ff,JSON.stringify(e))}catch{}},[e]),(0,o.useEffect)(()=>{try{localStorage.setItem(Hp,n)}catch{}},[n]);let a=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(p=>p.map(h=>h.key===u?{...h,label:d}:h))},[]),i=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(p=>{let h=d.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",v=h,k=2;for(;p.some(y=>y.key===v);)v=`${h}${k++}`;return[...p,{key:v,area:u,label:d}]})},[]),l=(0,o.useCallback)(u=>{t(c=>{let d=c.find(p=>p.key===u);return!d||Ya(c,d.area).length<=1?c:c.filter(p=>p.key!==u)})},[]),s=(0,o.useCallback)(()=>t(oi),[]);return{subs:e,radarMode:n,setRadarMode:r,renameSub:a,addSub:i,removeSub:l,resetSubs:s}}var Kp=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function pr(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Kp[Math.abs(t)%Kp.length]}var uo=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function mf(e){return Math.max(0,(e||[]).reduce((t,n)=>t+go(n),0))}function hf(e,t){let n=(e||[]).reduce((a,i)=>a+go(i),0),r=(t||[]).reduce((a,i)=>a+i.cost*(i.claimed?.length||0),0);return Math.max(0,n-r)}function qp(e,t){return(t||[]).filter(n=>n.area===e).reduce((n,r)=>n+go(r),0)}function Tn(e){return 12.5*(e-1)*(e+6)}function gf(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-Tn(n),a=Tn(n+1)-Tn(n);return{level:n,into:r,span:a}}function qh(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[a,i]of t)for(;n>=a;)r+=i,n-=a;return r}function vf(e){if(e<=uo.length)return uo[e-1];let t=e-uo.length+1;return`${uo[uo.length-1]} ${qh(t)}`}var Gh=[{id:1,label:"Deep Work",area:"work",xp:40,history:[H(0),H(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[H(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Xh=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],Yh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function Qh({habit:e,subs:t=oi,allHabits:n=[],onMark:r,onDelete:a,onSave:i}){let l=H(0),s=mo(e,l),u=Bs(e,l),[c,d]=(0,o.useState)(0),p=()=>{s||d(L=>L+1)},{streak:h,freezeUsed:v}=ti(gt(e.history).filter(L=>L.t==="done").map(L=>L.d)),k=ht.find(L=>L.key===e.area)||ht[0],[y,C]=(0,o.useState)(!1),[g,f]=(0,o.useState)(e.label),[m,x]=(0,o.useState)(e.area),[w,b]=(0,o.useState)(()=>$s(t,e)),[M,_]=(0,o.useState)(zn(e)),[O,A]=(0,o.useState)(dr(e)),[W,F]=(0,o.useState)(e.opposite||""),T=()=>{f(e.label),x(e.area),b($s(t,e)),_(zn(e)),A(dr(e)),F(e.opposite||""),C(!0)},B=()=>{let L=g.trim();L&&(i(e.id,{label:L,area:m,sub:w,xp:Math.max(0,+M||0),penalty:Math.max(0,+O||0),opposite:W||null}),C(!1))};if(y)return o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:g,onChange:L=>f(L.target.value),onKeyDown:L=>L.key==="Enter"&&B(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},ht.map(L=>o.default.createElement("button",{key:L.key,type:"button",className:`area-chip ${m===L.key?"active":""}`,style:{"--ac":L.color},onClick:()=>{x(L.key);let oe=Ya(t,L.key);b(oe.length?oe[0].key:null)}},L.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},Ya(t,m).map(L=>o.default.createElement("button",{key:L.key,type:"button",className:`sub-chip ${w===L.key?"active":""}`,onClick:()=>b(L.key)},L.label))),o.default.createElement("div",{className:"edit-row edit-xp-row"},o.default.createElement("label",{className:"edit-xp-field"},o.default.createElement("span",{className:"edit-xp-tag gain"},"\u2713 adds"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-input",value:M,onChange:L=>_(L.target.value)})),o.default.createElement("label",{className:"edit-xp-field"},o.default.createElement("span",{className:"edit-xp-tag lose"},"\u2717 cuts"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-input",value:O,onChange:L=>A(L.target.value)}))),o.default.createElement("div",{className:"edit-row edit-opp-row"},o.default.createElement("span",{className:"edit-xp-tag"},"opposite of"),o.default.createElement("select",{className:"edit-opp-select",value:W,onChange:L=>F(L.target.value)},o.default.createElement("option",{value:""},"\u2014 none \u2014"),n.filter(L=>L.id!==e.id).map(L=>o.default.createElement("option",{key:L.id,value:L.id},L.label)))),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>C(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:B},"save"))));let J=[];return zn(e)>0&&J.push(`+${zn(e)}`),dr(e)>0&&J.push(`\u2212${dr(e)}`),o.default.createElement("div",{className:`quest-habit-card good ${c?"just-completed":""} ${u?"slipped":""}`,key:`h${e.id}`},c>0&&o.default.createElement("span",{className:"xp-pop",key:c},"+",zn(e)),o.default.createElement("span",{className:"area-dot",style:{background:k.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},J.join(" / ")," XP \xB7 ",k.label,h>0?` \xB7 \u{1F525}${h}${v?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:"link-btn",onClick:L=>{L.stopPropagation(),ni.open(Ln("good",e.id)),D.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-slip ${u?"on":""}`,onClick:()=>r(e.id,"slip"),"aria-label":"Mark slipped today",title:"did the opposite"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-check ${s?"done":""}`,onClick:()=>{p(),r(e.id,"done")},"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:s?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:T,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>a(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Zh({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(e.label),[c,d]=(0,o.useState)(e.cost),p=()=>{u(e.label),d(e.cost),l(!0)},h=()=>{let v=s.trim();v&&(a(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>d(v.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:h},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},e.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},e.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function Rh({habits:e,setHabits:t,rewards:n,setRewards:r,tagCtl:a}){let[i,l]=(0,o.useState)("all"),[s,u]=(0,o.useState)(!1),c=a.subs,d=(0,o.useMemo)(()=>mf(e),[e]),p=(0,o.useMemo)(()=>hf(e,n),[e,n]),{level:h,into:v,span:k}=gf(d),y=Math.round(v/k*100),C=(E,z)=>{let j=H(0),U=e.find(ot=>ot.id===E);if(!U)return;let Mt=!(z==="done"?mo(U,j):Bs(U,j)),vt=U.opposite?String(U.opposite):null;if(t(ot=>ot.map(Ge=>{if(Ge.id===E)return Wp(Ge,j,z);if(Mt&&vt&&String(Ge.id)===vt){let An=z==="done"?"slip":"done";return(An==="done"?mo(Ge,j):Bs(Ge,j))?Ge:Wp(Ge,j,An)}return Ge})),z==="done"&&ho.propagate("good",E,Mt),!Mt){D.click();return}if(z==="done"){D.success(),cn.emit("habitDone");let ot=fr().hour;ot<6&&po({earlyFinish:!0}),ot>=0&&ot<4&&po({lateFinish:!0})}else D.error(),cn.emit("badHabit")},g=E=>{t(z=>z.filter(j=>j.id!==E)),D.delete()},f=(E,z)=>t(j=>j.map(U=>U.id===E?{...U,...z}:U)),m=E=>{let z=H(0);r(j=>j.map(U=>U.id===E?{...U,claimed:[...U.claimed||[],z]}:U)),D.success(),cn.emit("rewardClaimed")},x=E=>{r(z=>z.filter(j=>j.id!==E)),D.delete()},w=(E,z)=>r(j=>j.map(U=>U.id===E?{...U,...z}:U)),[b,M]=(0,o.useState)(""),[_,O]=(0,o.useState)("work"),[A,W]=(0,o.useState)(20),[F,T]=(0,o.useState)(0),[B,J]=(0,o.useState)(""),[L,oe]=(0,o.useState)(100),De=()=>{let E=b.trim();E&&(t(z=>[...z,{id:ge(),label:E,area:_,xp:Math.max(0,+A||0),penalty:Math.max(0,+F||0),history:[]}]),M(""),D.click())},ve=()=>{let E=B.trim();E&&(r(z=>[...z,{id:ge(),label:E,cost:+L||50,claimed:[]}]),J(""),D.click())},q=(0,o.useMemo)(()=>a.radarMode==="areas"?ht.map(E=>({key:E.key,label:E.label,color:E.color,value:qp(E.key,e)})):c.map(E=>({key:E.key,label:E.label,color:(ht.find(z=>z.key===E.area)||{}).color,value:Vp(c,E.key,e)})),[a.radarMode,c,e]),ie=(0,o.useMemo)(()=>{let E=Math.max(...ht.map(Z=>qp(Z.key,e)),0),z=Math.max(...c.map(Z=>Vp(c,Z.key,e)),0),j=Math.max(E,z,1),U=j<=100?25:j<=500?50:100;return Math.ceil(j/U)*U},[c,e]),ce=(0,o.useMemo)(()=>{if(a.radarMode==="areas")return 0;let E=new Set(c.map(j=>j.key)),z=j=>!j.sub||!E.has(j.sub);return e.filter(z).reduce((j,U)=>j+Math.abs(go(U)),0)},[a.radarMode,c,e]),je=i==="all"?e:e.filter(E=>E.area===i),P=e.reduce((E,z)=>E+zn(z)*Xa(z,"done"),0),V=e.reduce((E,z)=>E+dr(z)*Xa(z,"slip"),0),R=n.reduce((E,z)=>E+z.cost*(z.claimed?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement(Os,{pct:y,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${h}`,sublabel:vf(h)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(mt,{value:d})," ",o.default.createElement("small",null,"XP")),R>0&&o.default.createElement("span",{className:"hero-xp-spend"},"\u25C9 ",p," to spend"),o.default.createElement("span",{className:"hero-xp-sub"},v,"/",k," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(mt,{value:P})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(mt,{value:V})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement("div",{className:"radar-controls"},o.default.createElement("div",{className:"radar-mode"},o.default.createElement("button",{className:a.radarMode==="areas"?"active":"",onClick:()=>{a.setRadarMode("areas"),D.click()}},"4 areas"),o.default.createElement("button",{className:a.radarMode==="subs"?"active":"",onClick:()=>{a.setRadarMode("subs"),D.click()}},c.length," tags")),o.default.createElement("button",{className:"radar-edit",onClick:()=>u(!0)},"edit tags")),o.default.createElement(vh,{axes:q,size:252,maxValue:ie}),ce>0&&o.default.createElement("div",{className:"radar-note"},ce," XP from untagged habits isn't plotted \u2014 tag them to include it")),(P>0||V>0||R>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(pf,{size:120,stroke:16,centerLabel:p,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:P,color:"#5EEAD4"},{key:"lost",label:"Lost",value:V,color:"#F0576B"},{key:"spent",label:"Spent",value:R,color:"#F5A623"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(mt,{value:P}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(mt,{value:V}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F5A623"}}),o.default.createElement("span",null,"Spent on rewards"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(mt,{value:R}))),o.default.createElement("div",{className:"donut-legend-row donut-legend-total"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"transparent"}}),o.default.createElement("span",null,"Level progress (spending doesn't count)"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(mt,{value:d})))))),o.default.createElement("div",{className:"area-filter"},o.default.createElement("button",{className:i==="all"?"active":"",onClick:()=>l("all")},"all"),ht.map(E=>o.default.createElement("button",{key:E.key,className:i===E.key?"active":"",style:{"--ac":E.color},onClick:()=>{l(E.key),D.click()}},E.label))),s&&o.default.createElement(ig,{tagCtl:a,onClose:()=>u(!1)}),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABITS")),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet")):je.map(E=>o.default.createElement(Qh,{key:E.id,habit:E,subs:c,allHabits:e,onMark:C,onDelete:g,onSave:f}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:b,onChange:E=>M(E.target.value),onKeyDown:E=>E.key==="Enter"&&De()}),o.default.createElement("button",{className:"add-btn",onClick:De,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},ht.map(E=>o.default.createElement("button",{key:E.key,className:_===E.key?"active":"",onClick:()=>O(E.key)},E.label)),o.default.createElement("label",{className:"new-xp-field"},o.default.createElement("span",{className:"edit-xp-tag gain"},"\u2713"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-custom",value:A,onChange:E=>W(+E.target.value||0)})),o.default.createElement("label",{className:"new-xp-field"},o.default.createElement("span",{className:"edit-xp-tag lose"},"\u2717"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-custom",value:F,onChange:E=>T(+E.target.value||0)}))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(E=>o.default.createElement(Zh,{key:E.id,reward:E,canClaim:p>=E.cost,onClaim:m,onDelete:x,onSave:w}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:B,onChange:E=>J(E.target.value),onKeyDown:E=>E.key==="Enter"&&ve()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:L,onChange:E=>oe(+E.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:ve,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var eg=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function tg(e=1e3*30){let[t,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function ng(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let a=Math.floor(r/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function yf({checked:e,onChange:t,color:n}){return o.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function rg({task:e,now:t,onToggle:n,onDelete:r,index:a}){let[i,l]=(0,o.useState)(!1),s=(0,o.useRef)(null),u=qa.find(d=>d.key===e.priority)||qa[0];(0,o.useEffect)(()=>()=>{s.current&&clearTimeout(s.current)},[]);let c=()=>{s.current||(l(!0),s.current=setTimeout(()=>r(e.id),220))};return o.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${a*35}ms`}},o.default.createElement(yf,{checked:e.done,onChange:()=>n(e.id),color:u.color}),o.default.createElement("div",{className:"task-main"},o.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),o.default.createElement("span",{className:"task-meta"},o.default.createElement("span",{className:"prio-dot",style:{background:u.color}}),o.default.createElement("span",{className:"prio-label"},u.label),o.default.createElement("span",{className:"dot-sep"},"\xB7"),o.default.createElement("span",null,ng(e.createdAt,t)))),o.default.createElement("button",{className:"del-btn",onClick:c,"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var Gp="tasksh.tasks.v1",Xp="tasksh.routines.v1",Yp="tasksh.vaulthabits.v1",Qp="tasksh.projects.v1",og="tasksh.goodhabits.v1",ag="tasksh.badhabits.v1",Zp="tasksh.habits.v1",Rp="tasksh.rewards.v1",Qa="tasksh.deviceid.v1",Ps="tasksh.notifyenabled.v1",Za="tasksh.aikey.v1";function ig({tagCtl:e,onClose:t}){let[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(""),l=s=>{a.trim()&&(e.addSub(s,a),D.success()),i(""),r(null)};return o.default.createElement("div",{className:"sheet-backdrop",onClick:t},o.default.createElement("div",{className:"sheet",onClick:s=>s.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"edit tags"),o.default.createElement("button",{className:"sheet-close",onClick:t,"aria-label":"Close"},"\xD7")),ht.map(s=>{let u=Ya(e.subs,s.key);return o.default.createElement("div",{key:s.key,className:"tag-group"},o.default.createElement("div",{className:"tag-group-head"},o.default.createElement("span",{className:"tag-dot",style:{background:s.color}}),o.default.createElement("span",{className:"tag-group-name"},s.label)),u.map(c=>o.default.createElement("div",{key:c.key,className:"tag-row"},o.default.createElement("input",{className:"tag-input",defaultValue:c.label,maxLength:18,onBlur:d=>e.renameSub(c.key,d.target.value),onKeyDown:d=>{d.key==="Enter"&&d.target.blur()}}),o.default.createElement("button",{className:"tag-del",disabled:u.length<=1,title:u.length<=1?"each area needs at least one tag":"remove",onClick:()=>{e.removeSub(c.key),D.delete()}},"\xD7"))),n===s.key?o.default.createElement("div",{className:"tag-row"},o.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:18,value:a,onChange:c=>i(c.target.value),onBlur:()=>l(s.key),onKeyDown:c=>{c.key==="Enter"&&l(s.key),c.key==="Escape"&&(i(""),r(null))}})):o.default.createElement("button",{className:"tag-add",onClick:()=>{i(""),r(s.key)}},"+ add tag"))}),o.default.createElement("div",{className:"sheet-foot"},"habits keep their tag when you rename it",o.default.createElement("button",{className:"tag-reset",onClick:()=>{e.resetSubs(),D.click()}},"reset to defaults"))))}function lg({selfRef:e,data:t,links:n,setLinks:r,onClose:a}){let[i,l]=(0,o.useState)(!1),s=Pp(e,t),u=lf(n,e),c=(0,o.useMemo)(()=>[...t.routines.map(p=>({ref:Ln("routine",p.id),label:p.label,kind:"routine"})),...(t.habits||[]).map(p=>({ref:Ln("good",p.id),label:p.label,kind:"good"})),...t.vaultHabits.map(p=>({ref:Ln("vault",p.id),label:p.label,kind:"vault"}))].filter(p=>p.ref!==e&&!u.includes(p.ref)),[t,e,u]);return o.default.createElement("div",{className:"sheet-backdrop",onClick:a},o.default.createElement("div",{className:"sheet",onClick:d=>d.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"links \xB7 ",s?.label||"item"),o.default.createElement("button",{className:"sheet-close",onClick:a,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),u.length===0?o.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):o.default.createElement("div",{className:"link-list"},u.map(d=>{let p=Pp(d,t);return o.default.createElement("div",{key:d,className:`link-row ${p?"":"stale"}`},o.default.createElement("span",{className:"link-kind"},p?p.meta:"missing"),o.default.createElement("span",{className:"link-label"},p?p.label:"deleted item"),o.default.createElement("button",{className:"link-remove",onClick:()=>{r(h=>Z0(h,e,d)),D.delete()}},"unlink"))})),i?o.default.createElement("div",{className:"link-picker"},c.length===0?o.default.createElement("div",{className:"link-empty"},"nothing else to link to"):c.map(d=>o.default.createElement("button",{key:d.ref,className:"link-candidate",onClick:()=>{r(p=>Q0(p,e,d.ref)),l(!1),D.success()}},o.default.createElement("span",{className:"link-kind"},of[d.kind].label),o.default.createElement("span",{className:"link-label"},d.label),o.default.createElement("span",{className:"link-plus"},"+")))):o.default.createElement("button",{className:"link-add-btn",onClick:()=>l(!0)},"+ link to something")))}function sg({id:e,onDone:t}){let n=sf(e);return(0,o.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?o.default.createElement("div",{className:"ach-toast",onClick:t},o.default.createElement("span",{className:"ach-toast-icon"},n.icon),o.default.createElement("span",{className:"ach-toast-body"},o.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),o.default.createElement("span",{className:"ach-toast-name"},n.name),o.default.createElement("span",{className:"ach-toast-desc"},n.desc)),o.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function ug({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:a,onDone:i}){let l=mr.find(u=>u.unlockLevel>e),s=As(e);return o.default.createElement("div",{className:"lvl-backdrop",onClick:i},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"lvl-kicker"},"level up"),o.default.createElement("div",{className:"lvl-num"},e),o.default.createElement("div",{className:"lvl-title"},vf(e)),o.default.createElement("div",{className:"lvl-rewards"},o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),o.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),o.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",o.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),a!=null&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),o.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),o.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),o.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function cg({earned:e,coins:t}){let n=new Set(e),r=fo.filter(i=>!i.hidden||n.has(i.id)),a=fo.filter(i=>i.hidden&&!n.has(i.id)).length;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ach-head"},o.default.createElement("span",{className:"sheet-title"},"achievements"),o.default.createElement("span",{className:"ach-count"},n.size,"/",fo.length," \xB7 \u25C9 ",t)),o.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return o.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},o.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),o.default.createElement("span",{className:"ach-name"},i.name),o.default.createElement("span",{className:"ach-desc"},i.desc),o.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),a>0&&o.default.createElement("div",{className:"ach-hidden-note"},a," hidden achievement",a===1?"":"s"," left to discover"))}function dg({ctl:e,level:t,totalXP:n,earned:r=[],coins:a=0,onClose:i}){let l=Tn(t+1),s=Tn(t);return o.default.createElement("div",{className:"sheet-backdrop",onClick:i},o.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"themes"),o.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=Is(u,t),d=e.themeId===u.id,p=Tn(u.unlockLevel),h=Tn(Math.max(1,u.unlockLevel-1)),v=c?100:Math.max(0,Math.min(99,Math.round((n-h)/(p-h)*100)));return o.default.createElement("button",{key:u.id,className:`theme-card ${d?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),D.success()):D.error()},disabled:!c},o.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},o.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),d&&o.default.createElement("span",{className:"theme-active-dot"})),o.default.createElement("span",{className:"theme-name"},u.name),c?o.default.createElement("span",{className:"theme-blurb"},u.blurb):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),o.default.createElement("span",{className:"theme-bar"},o.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),o.default.createElement("span",{className:"theme-pct"},v,"%")))})),o.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),o.default.createElement("div",{className:"ach-section"},o.default.createElement(cg,{earned:r,coins:a})),o.default.createElement("div",{className:"calm-toggle-row"},o.default.createElement("div",null,o.default.createElement("div",{className:"calm-toggle-label"},"ambient background"),o.default.createElement("div",{className:"calm-toggle-hint"},e.ambience?"drifting gradients and particles":"flat black, like the old build")),o.default.createElement("button",{className:`calm-switch ${e.ambience?"on":""}`,onClick:()=>{e.setAmbience(!e.ambience),D.click()},"aria-pressed":e.ambience},o.default.createElement("span",{className:"calm-knob"}))),o.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",o.default.createElement("b",null,e.phase.label))))}function Ha({label:e,value:t,color:n}){return o.default.createElement("div",{className:"pet-stat"},o.default.createElement("div",{className:"pet-stat-top"},o.default.createElement("span",{className:"pet-stat-label"},e),o.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),o.default.createElement("div",{className:"pet-stat-track"},o.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function pg({from:e,to:t,petName:n,onDone:r}){(0,o.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let a=Pn[t];return o.default.createElement("div",{className:"evo-backdrop",onClick:r},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},o.default.createElement("div",{className:"evo-kicker"},"evolution"),o.default.createElement("div",{className:"evo-stage-row"},o.default.createElement("div",{className:"evo-old"},o.default.createElement(Ds,{stage:e,mood:"content",size:72,animate:!1})),o.default.createElement("span",{className:"evo-arrow"},"\u2192"),o.default.createElement("div",{className:"evo-new"},o.default.createElement(Ds,{stage:t,mood:"joyful",size:132,evolving:!0}))),o.default.createElement("div",{className:"evo-name"},n," became ",o.default.createElement("b",null,a.name)),o.default.createElement("div",{className:"evo-title"},a.title),o.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var hr="https://tasksh-notify.techcraftor.workers.dev",fg="BO6-Y8l-bh_WOLy4A7zYXX_8cAPCYiY2gzlkn7kuWqMlvK921aU5IebajkHiQlRuQaoOQxSjfIAFj--bO_Vvyi0";function mg(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}function ai(){let e=localStorage.getItem(Qa);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Qa,e)),e}async function hg(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:mg(fg)}));let r=ai();if(!(await fetch(`${hr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function gg(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=ai();try{await fetch(`${hr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function ef(e){let t=ai();try{await fetch(`${hr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label,duration:n.duration}))})})}catch{}}var Ra=[{id:"gemini",label:"Gemini",test:e=>/^(AIza|AQ\.)/.test(e),where:"aistudio.google.com/apikey",free:"~1000 req/day",shared:!0},{id:"groq",label:"Groq",test:e=>/^gsk_/.test(e),where:"console.groq.com",free:"~1000 req/day, fastest"},{id:"cerebras",label:"Cerebras",test:e=>/^csk-/.test(e),where:"cloud.cerebras.ai",free:"1M tokens/day"},{id:"nvidia",label:"NVIDIA NIM",test:e=>/^nvapi-/.test(e),where:"build.nvidia.com",free:"40 req/min, 1000 credits"},{id:"mistral",label:"Mistral",test:()=>!1,prefixed:!0,where:"console.mistral.ai",free:"paste as mistral:YOUR_KEY"},{id:"openrouter",label:"OpenRouter",test:e=>/^sk-or-/.test(e),where:"openrouter.ai/keys",free:"50 req/day"},{id:"openai",label:"OpenAI",test:e=>/^sk-/.test(e),where:"platform.openai.com"}];function co(e){let t=String(e||"").trim(),n=t.match(/^([a-z][a-z0-9]*):(.+)$/i);if(n){let r=Ra.find(a=>a.id===n[1].toLowerCase());if(r)return r}return Ra.find(r=>r.test(t))||null}var Us="tasksh.aikeys.v1";function Ot(){try{let e=JSON.parse(localStorage.getItem(Us)||"null");if(Array.isArray(e)&&e.length)return e.filter(Boolean);let t=localStorage.getItem(Za);return t?[t]:[]}catch{return[]}}function ii(e){let t=[...new Set(e.map(n=>String(n).trim()).filter(Boolean))].slice(0,10);try{localStorage.setItem(Us,JSON.stringify(t)),t.length?localStorage.setItem(Za,t[0]):localStorage.removeItem(Za)}catch{}}function vg(e){let t=String(e||"").trim();if(!t)return Ot();let n=[...Ot(),t];return ii(n),Ot()}function tf(e,t){let n=Ot(),r=n.indexOf(e),a=r+t;if(r<0||a<0||a>=n.length)return n;let i=[...n];return[i[r],i[a]]=[i[a],i[r]],ii(i),Ot()}function yg(e){let t=Ot().filter(n=>n!==e);return ii(t),t}function xg(){return Ot()[0]||""}function kg(e){ii(e?[e]:[])}function Ws(e){if(!e)return"";let t=String(e).match(/^([a-z][a-z0-9]*:)(.+)$/i);return t&&Ra.some(n=>n.id===t[1].slice(0,-1).toLowerCase())?t[1]+Ws(t[2]):e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`}var ei=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function bg(e){let t=await fetch(`${hr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function wg(e,t,n,r,a){let i=await fetch(`${hr}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:a,apiKeys:Ot()})}),l=null;try{l=await i.json()}catch{}if(!i.ok){let s=l&&l.error;throw s==="no_key"||s==="bad_key"?new ei(l&&l.message||"key rejected"):new Error(l&&l.message||`request failed (${i.status})`)}return{reply:l&&l.reply||"\u2026",actions:l&&l.actions||[]}}var Ng=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function nf(e,t){let n=(r,a)=>(r||[]).find(i=>i.id===a);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Ct(rt(e.time))} \xB7 ${e.label} (${Ft(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),a=[];return e.time!==void 0&&e.time!==r?.time&&a.push(`${Ct(rt(r?.time||"00:00"))} \u2192 ${Ct(rt(e.time))}`),e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&a.push(`${Ft(r?.duration||0)} \u2192 ${Ft(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${a.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),a=[];return e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&a.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${a.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.habits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.habits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function Sg(e,t,n){let{routines:r,vaultHabits:a,habits:i,rewards:l}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],habits:[...t.habits],rewards:[...t.rewards]},s=new Set;for(let u of e)switch(u.op){case"add_routine":r=[...r,{id:ge(),time:u.time,label:u.label,duration:u.duration,history:[],...u.alternatives?.length?{alternatives:u.alternatives}:{}}],s.add("routines");break;case"edit_routine":r=r.map(c=>c.id===u.id?{...c,...u.time!==void 0?{time:u.time}:{},...u.label!==void 0?{label:u.label}:{},...u.duration!==void 0?{duration:u.duration}:{}}:c),s.add("routines");break;case"delete_routine":r=r.filter(c=>c.id!==u.id),s.add("routines");break;case"add_vault_habit":a=[...a,{id:ge(),icon:u.icon,label:u.label,weeklyGoal:u.weeklyGoal,history:[]}],s.add("vaultHabits");break;case"edit_vault_habit":a=a.map(c=>c.id===u.id?{...c,...u.label!==void 0?{label:u.label}:{},...u.weeklyGoal!==void 0?{weeklyGoal:u.weeklyGoal}:{}}:c),s.add("vaultHabits");break;case"delete_vault_habit":a=a.filter(c=>c.id!==u.id),s.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:ge(),label:u.label,area:u.area,...u.sub?{sub:u.sub}:{},xp:u.xp,penalty:0,history:[]}],s.add("habits");break;case"delete_good_habit":i=i.filter(c=>c.id!==u.id),s.add("habits");break;case"add_bad_habit":i=[...i,{id:ge(),label:u.label,area:u.area,...u.sub?{sub:u.sub}:{},xp:0,penalty:u.xp,history:[]}],s.add("habits");break;case"delete_bad_habit":i=i.filter(c=>c.id!==u.id),s.add("habits");break;case"add_reward":l=[...l,{id:ge(),label:u.label,cost:u.cost,claimed:[]}],s.add("rewards");break;case"delete_reward":l=l.filter(c=>c.id!==u.id),s.add("rewards");break;default:break}s.has("routines")&&n.setRoutines(r),s.has("vaultHabits")&&n.setVaultHabits(a),s.has("habits")&&n.setHabits(i),s.has("rewards")&&n.setRewards(l)}function Eg({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:a}){let{pet:i,form:l,mood:s,nudge:u,remember:c,rename:d}=e,[p,h]=(0,o.useState)(()=>xg()),[v,k]=(0,o.useState)(!1),[y,C]=(0,o.useState)(null),[g,f]=(0,o.useState)(""),[m,x]=(0,o.useState)(!1),[w,b]=(0,o.useState)(0),[M,_]=(0,o.useState)(null),[O,A]=(0,o.useState)(null),[W,F]=(0,o.useState)(()=>new Set),[T,B]=(0,o.useState)(!1),[J,L]=(0,o.useState)(i.name),[oe,De]=(0,o.useState)(!0),ve=(0,o.useRef)(null),q=(0,o.useRef)(0),ie=(0,o.useMemo)(()=>ah(r),[r]);(0,o.useEffect)(()=>{if(!m){b(0);return}let z=Date.now(),j=setInterval(()=>b((Date.now()-z)/1e3),100);return()=>clearInterval(j)},[m]),(0,o.useEffect)(()=>{ve.current&&(ve.current.scrollTop=ve.current.scrollHeight)},[i.log,O,m]);let ce=async z=>{let j=(z??g).trim();if(!j||m)return;let U=Date.now()-q.current;if(U<3e3){_(`give me a second \u2014 ${Math.ceil((3e3-U)/1e3)}s`);return}if(f(""),c("user",j),u("chat"),D.click(),!p){c("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),k(!0);return}q.current=Date.now(),x(!0),_(null),A(null),F(new Set);try{let Z=await wg(j,{routines:t.routines,vaultHabits:t.vaultHabits,habits:t.habits,rewards:t.rewards,totalXP:t.totalXP},ih(r),i.log||[],p);c("pet",Z.reply),Z.actions.length&&(A(Z),D.success())}catch(Z){Z instanceof ei?(kg(""),h(""),C(Z.message),k(!0),c("pet","my link to the wider world got rejected. mind checking the key?")):(c("pet","couldn't reach far enough to answer that. try again in a moment."),_(Z.message||null)),D.error()}finally{x(!1)}},je=z=>F(j=>{let U=new Set(j);return U.has(z)?U.delete(z):U.add(z),U}),P=O?O.actions.filter((z,j)=>!W.has(j)):[],V=()=>{P.length&&(Sg(P,t,n),D.success(),u("chat"),a("success",`applied ${P.length} change${P.length===1?"":"s"}`),c("pet",`done \u2014 ${P.length} change${P.length===1?"":"s"} applied.`),A(null),F(new Set))},R=()=>{D.whoosh(),c("pet","left it as it was."),A(null),F(new Set)};if(v)return o.default.createElement(Cg,{initialError:y,onCancel:()=>k(!1),onSaved:(z,j,U={})=>{h(z),C(null),U.keepOpen||k(!1),a("success",j||"connected")}});let E=P.reduce((z,j)=>{let U=nf(j,t).kind;return z[U]=(z[U]||0)+1,z},{});return o.default.createElement("div",{className:"task-list companion-scroll"},o.default.createElement("div",{className:"cmp-hero"},o.default.createElement(Ds,{stage:l.stage,mood:s.key,size:132}),o.default.createElement("div",{className:"cmp-id"},T?o.default.createElement("input",{className:"pet-name-input",value:J,autoFocus:!0,maxLength:14,onChange:z=>L(z.target.value),onBlur:()=>{d(J),B(!1)},onKeyDown:z=>{z.key==="Enter"&&(d(J),B(!1))}}):o.default.createElement("button",{className:"pet-name",onClick:()=>{L(i.name),B(!0)}},i.name),o.default.createElement("span",{className:"pet-form"},l.name," \xB7 ",s.label)),o.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>De(z=>!z)},oe?"stats":"hide")),!oe&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"pet-stats"},o.default.createElement(Ha,{label:"happiness",value:i.happiness,color:"var(--accent)"}),o.default.createElement(Ha,{label:"energy",value:i.energy,color:"var(--accent2)"}),o.default.createElement(Ha,{label:"friendship",value:i.friendship,color:"var(--accent)"}),o.default.createElement(Ha,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),o.default.createElement("div",{className:"pet-next"},uf(i.friendship),As(r.level)?` \xB7 next form at level ${As(r.level).minLevel}`:" \xB7 final form")),o.default.createElement("div",{className:"cmp-chat",ref:ve},o.default.createElement("div",{className:"pet-msg pet cmp-greeting"},ie),(i.log||[]).map((z,j)=>o.default.createElement("div",{key:j,className:`pet-msg ${z.role}`},z.text)),m&&o.default.createElement("div",{className:"pet-msg pet thinking"},o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),w>=1&&o.default.createElement("span",{className:"cmp-elapsed"},w.toFixed(1),"s")),O&&O.actions.length>0&&o.default.createElement("div",{className:"cmp-diff-wrap"},o.default.createElement("div",{className:"ai-diff-head"},o.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),o.default.createElement("span",{className:"ai-diff-counts"},E.add?o.default.createElement("span",{className:"c-add"},"+",E.add):null,E.edit?o.default.createElement("span",{className:"c-edit"},"~",E.edit):null,E.remove?o.default.createElement("span",{className:"c-remove"},"\u2212",E.remove):null)),o.default.createElement("div",{className:"ai-diff"},O.actions.map((z,j)=>{let U=nf(z,t),Z=W.has(j);return o.default.createElement("button",{key:j,className:`ai-diff-row ${U.kind} ${Z?"skipped":""}`,onClick:()=>je(j),title:Z?"click to include":"click to skip"},o.default.createElement("span",{className:"ai-sign"},U.kind==="add"?"+":U.kind==="remove"?"\u2212":"~"),o.default.createElement("span",{className:"ai-surface"},U.surface),o.default.createElement("span",{className:"ai-diff-text"},U.text),o.default.createElement("span",{className:"ai-skip-mark"},Z?"skipped":""))})),o.default.createElement("div",{className:"ai-actions"},o.default.createElement("button",{className:"ai-apply",onClick:V,disabled:!P.length},"apply ",P.length||""),o.default.createElement("button",{className:"ai-discard",onClick:R},"discard")),o.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),M&&o.default.createElement("div",{className:"ai-error cmp-error"},M),(i.log||[]).length===0&&!m&&o.default.createElement("div",{className:"ai-chips cmp-chips"},Ng.map(z=>o.default.createElement("button",{key:z,className:"ai-chip",onClick:()=>ce(z)},z))),o.default.createElement("div",{className:"pet-composer"},o.default.createElement("input",{className:"pet-input",placeholder:p?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:g,onChange:z=>f(z.target.value),onKeyDown:z=>z.key==="Enter"&&ce(),disabled:m}),o.default.createElement("button",{className:"pet-send",onClick:()=>ce(),disabled:m||!g.trim()},"say")),o.default.createElement("button",{className:"cmp-key-link",onClick:()=>k(!0)},p?`key ${Ws(p)}`:"connect an ai key"))}function Cg({onSaved:e,initialError:t,onCancel:n}){let[r,a]=(0,o.useState)(""),[i,l]=(0,o.useState)(()=>Ot()),[s,u]=(0,o.useState)(!1),[c,d]=(0,o.useState)(t||null),p=(0,o.useRef)(null);(0,o.useEffect)(()=>{p.current?.focus()},[]);let h=async()=>{let v=r.trim();if(!(!v||s)){u(!0),d(null);try{let k=await bg(v),y=vg(v);l(y),a(""),D.success(),e(v,k||(y.length>1?`${y.length} keys connected`:null),{keepOpen:y.length>1})}catch(k){d(k.message||"Couldn't verify that key."),D.error()}finally{u(!1)}}};return o.default.createElement("div",{className:"task-list ai-scroll"},o.default.createElement("div",{className:"ai-gate"},o.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),o.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),o.default.createElement("div",{className:"ai-gate-sub"},"the assistant needs an AI key. all of these have a free tier \u2014 pick whichever you like, or add several so it keeps working when one runs out."),o.default.createElement("div",{className:"prov-list"},Ra.filter(v=>v.free).map(v=>o.default.createElement("a",{key:v.id,className:"prov-chip",href:`https://${v.where}`,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("span",{className:"prov-chip-main"},o.default.createElement("span",{className:"prov-name"},v.label),o.default.createElement("span",{className:"prov-where"},v.where)),o.default.createElement("span",{className:"prov-free"},v.free)))),o.default.createElement("div",{className:"ai-gate-steps-note"},"sign in, create a key, paste it below. no card needed for any of them. adding two from ",o.default.createElement("i",null,"different")," providers is what actually buys you headroom."),o.default.createElement("input",{ref:p,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AQ.\u2026 \xB7 AIza\u2026 \xB7 gsk_\u2026 \xB7 csk-\u2026 \xB7 nvapi-\u2026",value:r,onChange:v=>a(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h()},disabled:s}),(()=>{let v=co(r);return r.trim()?v?o.default.createElement("div",{className:"prov-detected"},"detected: ",v.label,v.note?` \u2014 ${v.note}`:""):o.default.createElement("div",{className:"prov-detected prov-detected-warn"},"unknown prefix \u2014 if it's a Mistral key, paste it as mistral:YOUR_KEY"):null})(),c&&o.default.createElement("div",{className:"ai-error ai-gate-error"},c),o.default.createElement("div",{className:"ai-gate-actions"},o.default.createElement("button",{className:"ai-apply",onClick:h,disabled:s||!r.trim()},s?"checking\u2026":i.length?"add key":"save key"),n&&o.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),i.length>0&&o.default.createElement("div",{className:"keypool"},o.default.createElement("div",{className:"keypool-head"},o.default.createElement("span",null,i.length," key",i.length===1?"":"s"," connected"),o.default.createElement("span",{className:"keypool-hint"},"tried in order")),i.map((v,k)=>{let y=co(v);return o.default.createElement("div",{className:"keypool-row",key:v},o.default.createElement("span",{className:"keypool-num"},k+1),o.default.createElement("span",{className:"keypool-prov"},y?y.label:"?"),o.default.createElement("span",{className:"keypool-val"},Ws(v)),o.default.createElement("button",{className:"keypool-move",disabled:k===0,onClick:()=>{l(tf(v,-1)),D.click()},"aria-label":"Try this key earlier",title:"move up"},"\u2191"),o.default.createElement("button",{className:"keypool-move",disabled:k===i.length-1,onClick:()=>{l(tf(v,1)),D.click()},"aria-label":"Try this key later",title:"move down"},"\u2193"),o.default.createElement("button",{className:"keypool-del",onClick:()=>{l(yg(v)),D.delete()}},"remove"))}),o.default.createElement("div",{className:"keypool-note"},"tried top to bottom; a rate-limited key is skipped automatically.",i.filter(v=>co(v)?.id==="gemini").length>1&&o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," several Gemini keys from the same google account share one quota and add no capacity \u2014 mix in a different provider instead."),(()=>{let v=new Set(i.map(k=>co(k)?.id).filter(Boolean));return i.length<2||v.size!==1||v.has("gemini")?null:o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," every key is ",co(i[0]).label," \u2014 one outage takes the assistant down. add a second provider.")})())),o.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function ke(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Mg(e){typeof e=="number"&&Number.isFinite(e)&&e>Ka&&(Ka=e)}function zg(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.habits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(a=>n(a?.id))}),t}function _g({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:a,habits:i,rewards:l,setRewards:s,totalXP:u,setTab:c}){let d=(0,o.useMemo)(()=>hf(i,l),[i,l]),p=js(),h=p.hour*60+p.minute,{sorted:v,currentId:k,nextId:y}=Js(e,h),C=v.find(F=>F.id===k),g=v.find(F=>F.id===y),f=H(0),m=F=>{let T=!(e.find(B=>B.id===F)?.history||[]).includes(f);t(B=>B.map(J=>{if(J.id!==F)return J;let oe=(J.history||[]).includes(f)?J.history.filter(De=>De!==f):[...J.history||[],f];return{...J,history:oe.slice(-60)}})),ho.propagate("routine",F,T),T?(D.success(),cn.emit("routineDone")):D.click()},x=(0,o.useMemo)(()=>{let F={high:0,mid:1,low:2};return[...n].filter(T=>!T.done).sort((T,B)=>F[T.priority]-F[B.priority])},[n]),w=F=>{r(T=>T.map(B=>B.id===F?{...B,done:!B.done}:B)),D.success()},b=(0,o.useMemo)(()=>l.filter(F=>d>=F.cost),[l,d]),M=F=>{s(T=>T.map(B=>B.id===F?{...B,claimed:[...B.claimed||[],f]}:B)),D.success()},_=(0,o.useMemo)(()=>{let F={},T=B=>{(B||[]).forEach(J=>{F[J]=(F[J]||0)+1})};return e.forEach(B=>T(B.history)),a.forEach(B=>T(B.history)),i.forEach(B=>T(gt(B.history).filter(J=>J.t==="done").map(J=>J.d))),F},[e,a,i]),O=C||g,A=!!C,W=O?(O.history||[]).includes(f):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,A?"HAPPENING NOW":"NEXT UP")),O?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},Ct(rt(O.time))),o.default.createElement("span",{className:"today-card-label"},O.label)),o.default.createElement("div",{className:"today-card-sub"},A?`in progress \xB7 ${Ft(O.duration)}`:`in ${Math.max(0,rt(O.time)-h)}m \xB7 ${Ft(O.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${W?"done":""}`,onClick:()=>m(O.id)},W?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(yh,{counts:_,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),x.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>c("tasks")},"view all in tasks \u2192")),x.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},x.slice(0,5).map((F,T)=>o.default.createElement("div",{key:F.id,className:"today-task-row",style:{animationDelay:`${T*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>w(F.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},F.text),o.default.createElement("span",{className:`today-prio-dot ${F.priority}`}))),x.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>c("tasks")},"+",x.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(mt,{value:u})," XP")),b.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},b.map((F,T)=>o.default.createElement("div",{key:F.id,className:"today-task-row",style:{animationDelay:`${T*35}ms`}},o.default.createElement("span",{className:"today-task-text"},F.label),o.default.createElement("span",{className:"today-reward-cost"},F.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>M(F.id)},"claim")))))}function Tg(){let[e,t]=(0,o.useState)("today"),[n,r]=hh(),a=N=>{N!==e&&D.whoosh(),t(N)},[i,l]=(0,o.useState)(()=>ke(Gp,eg)),[s,u]=(0,o.useState)(()=>ke(Xp,bh)),[c,d]=(0,o.useState)(()=>ke(Yp,Th)),[p,h]=(0,o.useState)(()=>ke(Qp,Lh)),[v,k]=(0,o.useState)(()=>ke(Up,Fh)),[y,C]=(0,o.useState)(()=>{let N=ke(Zp,null);return Array.isArray(N)?N:Hh(ke(og,Gh),ke(ag,Xh))}),[g,f]=(0,o.useState)(()=>ke(Rp,Yh)),m=(0,o.useMemo)(()=>mf(y),[y,g]),x=(0,o.useMemo)(()=>gf(m).level,[m]),w=ch(x),b=lh(x),{links:M,setLinks:_}=eh(),O=Kh(),[A,W]=(0,o.useState)(null);(0,o.useEffect)(()=>ni.register(N=>W(N)),[]),(0,o.useEffect)(()=>ho.register((N,$,X)=>{R0(Ln(N,$),X,M,{setRoutines:u,setVaultHabits:d,setHabits:C},H(0))}),[M]);let F=H(0),T=(0,o.useMemo)(()=>{let N=ke(Ga,{});return{level:x,tasksDone:i.filter($=>$.done).length,bestStreak:Math.max(y.reduce(($,X)=>Math.max($,_s(gt(X.history).filter(Y=>Y.t==="done").map(Y=>Y.d))),0),s.reduce(($,X)=>Math.max($,_s(X.history)),0)),doneToday:y.filter($=>mo($,F)).length,totalHabits:y.length,routinesDoneToday:s.filter($=>($.history||[]).includes(F)).length,totalRoutines:s.length,vaultCount:c.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:N.calmSessions||0,earlyFinish:!!N.earlyFinish,lateFinish:!!N.lateFinish,returnedAfterGap:!!N.returnedAfterGap}},[x,i,y,s,c,b.pet,F]),B=rh(T),[J,L]=(0,o.useState)(null);(0,o.useEffect)(()=>{let N=ke(Ga,null);if(!N||N.seenLevel===void 0){po({seenLevel:x});return}let $=N.seenLevel;if(x>$){let X=nh(x);B.addCoins(X);let Y=mr.filter(Je=>Je.unlockLevel>$&&Je.unlockLevel<=x);L({level:x,coins:X,unlockedTheme:Y.length?Y[Y.length-1]:null,extraThemes:Y.length>1?Y.length-1:0,evolvedTo:Va(x).stage>Va($).stage?Va(x).stage:null}),po({seenLevel:x})}else x<$&&po({seenLevel:x})},[x]);let[oe,De]=(0,o.useState)(""),[ve,q]=(0,o.useState)("mid"),[ie,ce]=(0,o.useState)("all"),je=(0,o.useRef)(null),P=(0,o.useRef)(null),[V,R]=(0,o.useState)(null),E=tg(),[z,j]=(0,o.useState)(()=>localStorage.getItem(Ps)==="1"),[U,Z]=(0,o.useState)(!1),[Mt,vt]=(0,o.useState)(!1),[ot,Ge]=(0,o.useState)(!1);(0,o.useEffect)(()=>{ef(s)},[s]);let An=async()=>{if(!U){Z(!0);try{z?(await gg(),localStorage.setItem(Ps,"0"),j(!1),_e("success","Notifications turned off")):(await hg(),await ef(s),localStorage.setItem(Ps,"1"),j(!0),_e("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(N){_e("error",N.message||"Couldn't set up notifications")}finally{Z(!1)}}},_e=(N,$)=>{R({type:N,text:$})};(0,o.useEffect)(()=>{if(!V)return;let N=setTimeout(()=>R(null),3200);return()=>clearTimeout(N)},[V]);let li=[Za,Us],yt=(N=!1)=>{try{let $={};for(let at=0;at<localStorage.length;at++){let Xe=localStorage.key(at);!Xe||!Xe.startsWith("tasksh.")||Xe!==Qa&&(!N&&li.includes(Xe)||($[Xe]=localStorage.getItem(Xe)))}let X={app:"tasks.sh",version:2,exportedAt:new Date().toISOString(),containsKeys:N,store:$,data:{tasks:i,routines:s,vaultHabits:c,projects:p,notes:v,habits:y,rewards:g}},Y=new Blob([JSON.stringify(X,null,2)],{type:"application/json"}),Je=URL.createObjectURL(Y),ko=H(0),xt=document.createElement("a");xt.href=Je,xt.download=`tasks-sh-backup-${ko}${N?"-with-keys":""}.json`,document.body.appendChild(xt),xt.click(),xt.remove(),URL.revokeObjectURL(Je),_e("ok",N?"backup exported \u2014 contains your API keys":"backup exported")}catch{_e("err","export failed")}},xf=()=>P.current?.click(),kf=N=>{let $=N.target.files&&N.target.files[0];if(N.target.value="",!$)return;let X=new FileReader;X.onerror=()=>_e("err","couldn't read that file"),X.onload=()=>{try{let Y=JSON.parse(String(X.result));if(!Y||typeof Y!="object")throw new Error("bad shape");if(Y.store&&typeof Y.store=="object"){let at=Object.keys(Y.store).filter(Xe=>Xe.startsWith("tasksh."));if(!at.length)throw new Error("empty store");for(let Xe of at)if(Xe!==Qa)try{localStorage.setItem(Xe,Y.store[Xe])}catch{}_e("ok",`restored ${at.length} keys \u2014 reloading`),setTimeout(()=>window.location.reload(),700);return}let Je=Y.data?Y.data:Y;if(!Je||typeof Je!="object")throw new Error("bad shape");let ko={tasks:l,routines:u,vaultHabits:d,projects:h,notes:k,habits:C,rewards:f},xt=0;for(let at of Object.keys(ko))Array.isArray(Je[at])&&(ko[at](Je[at]),xt++);if(xt===0){_e("err","no recognizable data in that file");return}Mg(zg(Je)),_e("ok",`imported ${xt} data set${xt===1?"":"s"}`)}catch{_e("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},X.readAsText($)},Hs=js(),bf=Hs.hour*60+Hs.minute,{currentId:Dn,sorted:Vs}=Js(s,bf),[vo,yo]=(0,o.useState)(null),xo=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(xo.current===void 0){xo.current=Dn;return}if(Dn!==xo.current){let N=Vs.find($=>$.id===Dn);N&&yo({id:Dn,label:N.label,time:N.time}),xo.current=Dn}},[Dn,Vs]),(0,o.useEffect)(()=>{if(!vo)return;let N=setTimeout(()=>yo(null),6e3);return()=>clearTimeout(N)},[vo]),(0,o.useEffect)(()=>{try{localStorage.setItem(Gp,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(Xp,JSON.stringify(s))}catch{}},[s]),(0,o.useEffect)(()=>{try{localStorage.setItem(Yp,JSON.stringify(c))}catch{}},[c]),(0,o.useEffect)(()=>{try{localStorage.setItem(Qp,JSON.stringify(p))}catch{}},[p]),(0,o.useEffect)(()=>{try{localStorage.setItem(Up,JSON.stringify(v))}catch{}},[v]),(0,o.useEffect)(()=>{try{localStorage.setItem(Zp,JSON.stringify(y))}catch{}},[y]),(0,o.useEffect)(()=>{try{localStorage.setItem(Rp,JSON.stringify(g))}catch{}},[g]);let jt=(0,o.useMemo)(()=>{let N=i.length,$=i.filter(Je=>Je.done).length,X=N-$,Y=N===0?0:Math.round($/N*100);return{total:N,done:$,pending:X,pct:Y}},[i]),Ks=(0,o.useMemo)(()=>{let N=i.filter($=>!$.done);return qa.map($=>({key:$.key,label:$.label,color:$.color,value:N.filter(X=>X.priority===$.key).length}))},[i]),qs=(0,o.useMemo)(()=>{let N=i;return ie==="active"&&(N=N.filter($=>!$.done)),ie==="done"&&(N=N.filter($=>$.done)),[...N].sort(($,X)=>{if($.done!==X.done)return $.done?1:-1;let Y={high:0,mid:1,low:2};return Y[$.priority]-Y[X.priority]})},[i,ie]),Gs=()=>{let N=oe.trim();N&&(l($=>[...$,{id:ge(),text:N,done:!1,priority:ve,createdAt:Date.now()}]),De(""),je.current?.focus(),D.click())},wf=N=>{let $=!i.find(X=>X.id===N)?.done;l(X=>X.map(Y=>Y.id===N?{...Y,done:!Y.done}:Y)),$?(D.success(),cn.emit("taskDone")):D.click()},Nf=N=>{l($=>$.filter(X=>X.id!==N)),D.delete()},Sf=()=>{l(N=>N.filter($=>!$.done)),D.whoosh()};return o.default.createElement("div",{className:"app-root","data-particle":w.theme.ambient.particle},B.current&&o.default.createElement(sg,{id:B.current,onDone:B.shift}),J&&o.default.createElement(ug,{level:J.level,coins:J.coins,unlockedTheme:J.unlockedTheme,extraThemes:J.extraThemes,evolvedTo:J.evolvedTo,onDone:()=>L(null)}),b.evolution&&o.default.createElement(pg,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),A&&o.default.createElement(lg,{selfRef:A,data:{routines:s,habits:y,vaultHabits:c},links:M,setLinks:_,onClose:()=>W(null)}),ot&&o.default.createElement(dg,{ctl:w,level:x,totalXP:m,earned:B.earned,coins:B.coins,onClose:()=>Ge(!1)}),o.default.createElement("style",null,`
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

        /* ---- habit slip button + paired edit fields (v35) ---- */
        .quest-slip {
          background: transparent; border: 1px solid var(--border);
          border-radius: 6px; color: var(--muted); cursor: pointer;
          width: 26px; height: 26px; display: flex; align-items: center;
          justify-content: center; transition: all 140ms ease; flex: none;
        }
        .quest-slip:hover { border-color: var(--danger); color: var(--danger); }
        .quest-slip.on {
          background: var(--danger); border-color: var(--danger); color: var(--bg);
        }
        /* a slipped day reads as a deficit, not as an untouched row */
        .quest-habit-card.slipped { border-left: 2px solid var(--danger); }

        .edit-xp-row { display: flex; gap: 10px; align-items: center; }
        .edit-xp-field, .new-xp-field { display: flex; align-items: center; gap: 5px; }
        .edit-xp-tag {
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
        }
        .edit-xp-tag.gain { color: var(--accent); }
        .edit-xp-tag.lose { color: var(--danger); }

        .edit-opp-row { display: flex; align-items: center; gap: 6px; }
        .edit-opp-select {
          flex: 1; min-width: 0; background: var(--bg);
          border: 1px solid var(--border); border-radius: 4px;
          color: var(--text); font-family: 'JetBrains Mono', monospace;
          font-size: 10px; padding: 4px 6px; outline: none;
        }
        .edit-opp-select:focus { border-color: var(--accent); }

        /* ---- key pool reordering ---- */
        .keypool-move {
          background: transparent; border: 1px solid var(--border);
          border-radius: 4px; color: var(--muted); cursor: pointer;
          font-size: 11px; line-height: 1; padding: 2px 6px; flex: none;
          transition: all 140ms ease;
        }
        .keypool-move:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .keypool-move:disabled { opacity: 0.25; cursor: default; }

        /* ---- backup popup ---- */
        .backup-ask-backdrop {
          position: fixed; inset: 0; z-index: 60;
          background: rgba(0,0,0,0.72);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn 160ms ease;
        }
        .backup-ask {
          width: 100%; max-width: 340px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 2px solid var(--accent); border-radius: 8px;
          padding: 14px;
        }
        .backup-ask-head {
          display: flex; align-items: baseline; gap: 6px;
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          margin-bottom: 8px;
        }
        .backup-ask-body {
          font-family: 'JetBrains Mono', monospace; font-size: 10px;
          line-height: 1.6; color: var(--muted); white-space: pre-wrap; margin: 0;
        }
        .backup-ask-warn {
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px;
          line-height: 1.6; color: var(--accent2);
          border: 1px solid var(--border); border-radius: 4px;
          padding: 7px 8px; margin-top: 10px;
        }
        .backup-ask-actions { flex-wrap: wrap; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (prefers-reduced-motion: reduce) {
          .backup-ask-backdrop { animation: none; }
        }

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
          /* v35 added a second mark button, so the row now carries link, \u2717, \u2713,
             edit and delete. The old 10px gap pushed delete off the edge on a
             360px phone -- tighten the gap and let the label absorb the slack
             rather than dropping a control. */
          gap: 6px;
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 10px;
        }
        /* the label is the only thing that should shrink */
        .quest-habit-card > .quest-habit-main { min-width: 0; flex: 1 1 auto; }
        .quest-habit-card > button { flex: 0 0 auto; }

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
      `),o.default.createElement("div",{className:"panel"},o.default.createElement(uh,{theme:w.theme,phase:w.phase,calm:w.calm,scoped:!0}),vo&&o.default.createElement("div",{className:"quest-banner",onClick:()=>yo(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",vo.label),o.default.createElement("button",{className:"quest-banner-close",onClick:N=>{N.stopPropagation(),yo(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh"),o.default.createElement(Nh,null)),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:P,onChange:kf,style:{display:"none"}}),o.default.createElement("button",{className:`titlebar-icon-btn ${z?"notify-on":""}`,onClick:An,disabled:U,"aria-label":z?"Turn off notifications":"Turn on notifications",title:z?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},z?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{Ge(!0),D.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:xf,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{vt(!0),D.click()},"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date(E).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),Mt&&o.default.createElement("div",{className:"backup-ask-backdrop",onClick:()=>vt(!1)},o.default.createElement("div",{className:"backup-ask",onClick:N=>N.stopPropagation(),role:"dialog","aria-label":"Export backup"},o.default.createElement("div",{className:"backup-ask-head"},o.default.createElement("span",{className:"note-prompt"},"~/backup"),o.default.createElement("span",{className:"note-when"},"everything in one file")),o.default.createElement("pre",{className:"backup-ask-body"},"tasks, routines, habits, notes, tags, achievements, pet, wallet and themes are always included."),o.default.createElement("div",{className:"backup-ask-warn"},"\u26A0 including API keys makes this file a credential. anyone you send it to can spend your quota."),o.default.createElement("div",{className:"note-actions backup-ask-actions"},o.default.createElement("button",{className:"note-btn save",onClick:()=>{vt(!1),yt(!1)}},"export"),o.default.createElement("button",{className:"note-btn danger",onClick:()=>{vt(!1),yt(!0)}},"export with API keys"),o.default.createElement("button",{className:"note-btn",onClick:()=>vt(!1)},"cancel")))),V&&o.default.createElement("div",{className:`data-toast ${V.type}`},V.text),o.default.createElement("div",{className:"tabs",role:"tablist","aria-label":"Sections"},[["today","today"],["tasks","tasks"],["routines","routines"],["vault","vault"],["quest","quest"],["pet",b.pet.name.toLowerCase()]].map(([N,$])=>o.default.createElement("button",{key:N,role:"tab",id:`tab-${N}`,"aria-selected":e===N,"aria-controls":"tab-panel",className:`${N==="pet"?"tab-pet ":""}${e===N?"active":""}`.trim(),onClick:()=>a(N)},$))),o.default.createElement("div",{key:e,className:"tab-content",id:"tab-panel",role:"tabpanel","aria-labelledby":`tab-${e}`},e==="today"?o.default.createElement(_g,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,habits:y,rewards:g,setRewards:f,totalXP:m,setTab:a}):e==="tasks"?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"stats-bar stats-bar-viz"},o.default.createElement(Os,{pct:jt.pct,size:64,stroke:5.5,label:`${jt.pct}%`}),o.default.createElement("div",{className:"stats-row-viz"},o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(mt,{value:jt.total}))," total"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(mt,{value:jt.pending}))," pending"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(mt,{value:jt.done}))," done"))),jt.pending>0&&o.default.createElement("div",{className:"donut-card"},o.default.createElement(pf,{size:96,stroke:14,centerLabel:jt.pending,centerSublabel:"open",segments:Ks.map(N=>({key:N.key,value:N.value,color:N.color}))}),o.default.createElement("div",{className:"donut-legend"},Ks.map(N=>o.default.createElement("div",{className:"donut-legend-row",key:N.key},o.default.createElement("span",{className:"donut-legend-dot",style:{background:N.color}}),o.default.createElement("span",null,N.label," priority"),o.default.createElement("span",{className:"donut-legend-val"},N.value))))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{ref:je,type:"text",placeholder:"add a task, press enter...",value:oe,onChange:N=>De(N.target.value),onKeyDown:N=>N.key==="Enter"&&Gs()}),o.default.createElement("div",{className:"prio-select"},qa.map(N=>o.default.createElement("button",{key:N.key,className:ve===N.key?"active":"",style:{"--pc":N.color},onClick:()=>q(N.key)},N.label))),o.default.createElement("button",{className:"add-btn",onClick:Gs,"aria-label":"Add task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"filters"},["all","active","done"].map(N=>o.default.createElement("button",{key:N,className:ie===N?"active":"",onClick:()=>ce(N)},N)),o.default.createElement("span",{className:"spacer"}),jt.done>0&&o.default.createElement("button",{className:"clear-btn",onClick:Sf},"clear done")),o.default.createElement("div",{className:"task-list"},qs.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},ie==="done"?"nothing completed yet":"queue's empty \u2014 add something")):qs.map((N,$)=>o.default.createElement(rg,{key:N.id,task:N,now:E,index:$,onToggle:wf,onDelete:Nf})))):e==="routines"?o.default.createElement(Eh,{routines:s,setRoutines:u}):e==="vault"?o.default.createElement(Wh,{vaultHabits:c,setVaultHabits:d,projects:p,setProjects:h,notes:v,setNotes:k}):e==="quest"?o.default.createElement(Rh,{tagCtl:O,habits:y,setHabits:C,rewards:g,setRewards:f}):o.default.createElement(Eg,{petCtl:b,state:{routines:s,vaultHabits:c,habits:y,rewards:g,totalXP:m},setters:{setRoutines:u,setVaultHabits:d,setHabits:C,setRewards:f},showDataMsg:_e,ctx:{pet:b.pet,level:x,hour:fr().hour,phase:w.phase.id,doneToday:y.filter(N=>mo(N,H(0))).length,totalToday:y.length,streak:y.reduce((N,$)=>Math.max(N,_s(gt($.history).filter(X=>X.t==="done").map(X=>X.d))),0),routineNow:null,nextRoutine:null}}))))}var Lg=rf.default.createRoot(document.getElementById("root"));Lg.render(o.default.createElement(Tg));})();
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
