(()=>{var rf=Object.create;var Ps=Object.defineProperty;var of=Object.getOwnPropertyDescriptor;var af=Object.getOwnPropertyNames;var lf=Object.getPrototypeOf,sf=Object.prototype.hasOwnProperty;var ln=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var uf=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of af(t))!sf.call(e,a)&&a!==n&&Ps(e,a,{get:()=>t[a],enumerable:!(r=of(t,a))||r.enumerable});return e};var Ds=(e,t,n)=>(n=e!=null?rf(lf(e)):{},uf(t||!e||!e.__esModule?Ps(n,"default",{value:e,enumerable:!0}):n,e));var Vs=ln(J=>{"use strict";var dr=Symbol.for("react.element"),cf=Symbol.for("react.portal"),df=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),ff=Symbol.for("react.profiler"),mf=Symbol.for("react.provider"),hf=Symbol.for("react.context"),gf=Symbol.for("react.forward_ref"),vf=Symbol.for("react.suspense"),yf=Symbol.for("react.memo"),xf=Symbol.for("react.lazy"),As=Symbol.iterator;function kf(e){return e===null||typeof e!="object"?null:(e=As&&e[As]||e["@@iterator"],typeof e=="function"?e:null)}var Fs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$s=Object.assign,Os={};function _n(e,t,n){this.props=e,this.context=t,this.refs=Os,this.updater=n||Fs}_n.prototype.isReactComponent={};_n.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_n.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function js(){}js.prototype=_n.prototype;function qa(e,t,n){this.props=e,this.context=t,this.refs=Os,this.updater=n||Fs}var Ya=qa.prototype=new js;Ya.constructor=qa;$s(Ya,_n.prototype);Ya.isPureReactComponent=!0;var Bs=Array.isArray,Us=Object.prototype.hasOwnProperty,Qa={current:null},Ws={key:!0,ref:!0,__self:!0,__source:!0};function Hs(e,t,n){var r,a={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Us.call(t,r)&&!Ws.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];a.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:dr,type:e,key:i,ref:l,props:a,_owner:Qa.current}}function bf(e,t){return{$$typeof:dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Za(e){return typeof e=="object"&&e!==null&&e.$$typeof===dr}function wf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Is=/\/+/g;function Xa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?wf(""+e.key):t.toString(36)}function go(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case dr:case cf:l=!0}}if(l)return l=e,a=a(l),e=r===""?"."+Xa(l,0):r,Bs(a)?(n="",e!=null&&(n=e.replace(Is,"$&/")+"/"),go(a,t,n,"",function(c){return c})):a!=null&&(Za(a)&&(a=bf(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Is,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=r===""?".":r+":",Bs(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Xa(i,s);l+=go(i,t,n,u,a)}else if(u=kf(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Xa(i,s++),l+=go(i,t,n,u,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ho(e,t,n){if(e==null)return e;var r=[],a=0;return go(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Nf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Pe={current:null},vo={transition:null},Sf={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Qa};function Js(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:ho,forEach:function(e,t,n){ho(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ho(e,function(){t++}),t},toArray:function(e){return ho(e,function(t){return t})||[]},only:function(e){if(!Za(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=_n;J.Fragment=df;J.Profiler=ff;J.PureComponent=qa;J.StrictMode=pf;J.Suspense=vf;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sf;J.act=Js;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=$s({},e.props),a=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Qa.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Us.call(t,u)&&!Ws.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:dr,type:e.type,key:a,ref:i,props:r,_owner:l}};J.createContext=function(e){return e={$$typeof:hf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:mf,_context:e},e.Consumer=e};J.createElement=Hs;J.createFactory=function(e){var t=Hs.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:gf,render:e}};J.isValidElement=Za;J.lazy=function(e){return{$$typeof:xf,_payload:{_status:-1,_result:e},_init:Nf}};J.memo=function(e,t){return{$$typeof:yf,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};J.unstable_act=Js;J.useCallback=function(e,t){return Pe.current.useCallback(e,t)};J.useContext=function(e){return Pe.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Pe.current.useDeferredValue(e)};J.useEffect=function(e,t){return Pe.current.useEffect(e,t)};J.useId=function(){return Pe.current.useId()};J.useImperativeHandle=function(e,t,n){return Pe.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Pe.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Pe.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Pe.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Pe.current.useReducer(e,t,n)};J.useRef=function(e){return Pe.current.useRef(e)};J.useState=function(e){return Pe.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Pe.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Pe.current.useTransition()};J.version="18.3.1"});var Ra=ln((rg,Gs)=>{"use strict";Gs.exports=Vs()});var nu=ln(Q=>{"use strict";function ri(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<yo(a,t))e[r]=t,e[n]=a,n=r;else break e}}function it(e){return e.length===0?null:e[0]}function ko(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>yo(s,n))u<a&&0>yo(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<a&&0>yo(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function yo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ks=performance,Q.unstable_now=function(){return Ks.now()}):(ei=Date,Xs=ei.now(),Q.unstable_now=function(){return ei.now()-Xs});var Ks,ei,Xs,ht=[],It=[],Ef=1,Ye=null,Ce=3,bo=!1,sn=!1,fr=!1,Qs=typeof setTimeout=="function"?setTimeout:null,Zs=typeof clearTimeout=="function"?clearTimeout:null,qs=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oi(e){for(var t=it(It);t!==null;){if(t.callback===null)ko(It);else if(t.startTime<=e)ko(It),t.sortIndex=t.expirationTime,ri(ht,t);else break;t=it(It)}}function ai(e){if(fr=!1,oi(e),!sn)if(it(ht)!==null)sn=!0,li(ii);else{var t=it(It);t!==null&&si(ai,t.startTime-e)}}function ii(e,t){sn=!1,fr&&(fr=!1,Zs(mr),mr=-1),bo=!0;var n=Ce;try{for(oi(t),Ye=it(ht);Ye!==null&&(!(Ye.expirationTime>t)||e&&!tu());){var r=Ye.callback;if(typeof r=="function"){Ye.callback=null,Ce=Ye.priorityLevel;var a=r(Ye.expirationTime<=t);t=Q.unstable_now(),typeof a=="function"?Ye.callback=a:Ye===it(ht)&&ko(ht),oi(t)}else ko(ht);Ye=it(ht)}if(Ye!==null)var i=!0;else{var l=it(It);l!==null&&si(ai,l.startTime-t),i=!1}return i}finally{Ye=null,Ce=n,bo=!1}}var wo=!1,xo=null,mr=-1,Rs=5,eu=-1;function tu(){return!(Q.unstable_now()-eu<Rs)}function ti(){if(xo!==null){var e=Q.unstable_now();eu=e;var t=!0;try{t=xo(!0,e)}finally{t?pr():(wo=!1,xo=null)}}else wo=!1}var pr;typeof qs=="function"?pr=function(){qs(ti)}:typeof MessageChannel<"u"?(ni=new MessageChannel,Ys=ni.port2,ni.port1.onmessage=ti,pr=function(){Ys.postMessage(null)}):pr=function(){Qs(ti,0)};var ni,Ys;function li(e){xo=e,wo||(wo=!0,pr())}function si(e,t){mr=Qs(function(){e(Q.unstable_now())},t)}Q.unstable_IdlePriority=5;Q.unstable_ImmediatePriority=1;Q.unstable_LowPriority=4;Q.unstable_NormalPriority=3;Q.unstable_Profiling=null;Q.unstable_UserBlockingPriority=2;Q.unstable_cancelCallback=function(e){e.callback=null};Q.unstable_continueExecution=function(){sn||bo||(sn=!0,li(ii))};Q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Rs=0<e?Math.floor(1e3/e):5};Q.unstable_getCurrentPriorityLevel=function(){return Ce};Q.unstable_getFirstCallbackNode=function(){return it(ht)};Q.unstable_next=function(e){switch(Ce){case 1:case 2:case 3:var t=3;break;default:t=Ce}var n=Ce;Ce=t;try{return e()}finally{Ce=n}};Q.unstable_pauseExecution=function(){};Q.unstable_requestPaint=function(){};Q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ce;Ce=e;try{return t()}finally{Ce=n}};Q.unstable_scheduleCallback=function(e,t,n){var r=Q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:Ef++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,ri(It,e),it(ht)===null&&e===it(It)&&(fr?(Zs(mr),mr=-1):fr=!0,si(ai,n-r))):(e.sortIndex=a,ri(ht,e),sn||bo||(sn=!0,li(ii))),e};Q.unstable_shouldYield=tu;Q.unstable_wrapCallback=function(e){var t=Ce;return function(){var n=Ce;Ce=t;try{return e.apply(this,arguments)}finally{Ce=n}}}});var ou=ln((ag,ru)=>{"use strict";ru.exports=nu()});var sp=ln(qe=>{"use strict";var Cf=Ra(),Ke=ou();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dc=new Set,Ir={};function bn(e,t){Yn(e,t),Yn(e+"Capture",t)}function Yn(e,t){for(Ir[e]=t,e=0;e<t.length;e++)dc.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Li=Object.prototype.hasOwnProperty,Mf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,au={},iu={};function zf(e){return Li.call(iu,e)?!0:Li.call(au,e)?!1:Mf.test(e)?iu[e]=!0:(au[e]=!0,!1)}function _f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tf(e,t,n,r){if(t===null||typeof t>"u"||_f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,a,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var we={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){we[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];we[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){we[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){we[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){we[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){we[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){we[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){we[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){we[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nl=/[\-:]([a-z])/g;function Sl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nl,Sl);we[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nl,Sl);we[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nl,Sl);we[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){we[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});we.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){we[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function El(e,t,n,r){var a=we.hasOwnProperty(t)?we[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Tf(t,n,a,r)&&(n=null),r||a===null?zf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Cf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),Pn=Symbol.for("react.portal"),Dn=Symbol.for("react.fragment"),Cl=Symbol.for("react.strict_mode"),Pi=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),fc=Symbol.for("react.context"),Ml=Symbol.for("react.forward_ref"),Di=Symbol.for("react.suspense"),Ai=Symbol.for("react.suspense_list"),zl=Symbol.for("react.memo"),$t=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),lu=Symbol.iterator;function hr(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,ui;function Nr(e){if(ui===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ui=t&&t[1]||""}return`
`+ui+e}var ci=!1;function di(e,t){if(!e||ci)return"";ci=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),l=a.length-1,s=i.length-1;1<=l&&0<=s&&a[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==i[s]){var u=`
`+a[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ci=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Lf(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=di(e.type,!1),e;case 11:return e=di(e.type.render,!1),e;case 1:return e=di(e.type,!0),e;default:return""}}function Bi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dn:return"Fragment";case Pn:return"Portal";case Pi:return"Profiler";case Cl:return"StrictMode";case Di:return"Suspense";case Ai:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case fc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case Ml:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zl:return t=e.displayName||null,t!==null?t:Bi(e.type)||"Memo";case $t:t=e._payload,e=e._init;try{return Bi(e(t))}catch{}}return null}function Pf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bi(t);case 8:return t===Cl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Df(e){var t=hc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=Df(e))}function gc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=hc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ii(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function vc(e,t){t=t.checked,t!=null&&El(e,"checked",t,!1)}function Fi(e,t){vc(e,t);var n=Zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$i(e,t.type,n):t.hasOwnProperty("defaultValue")&&$i(e,t.type,Zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function $i(e,t,n){(t!=="number"||Zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sr=Array.isArray;function Jn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Zt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Oi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Sr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Zt(n)}}function yc(e,t){var n=Zt(t.value),r=Zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ji(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Eo,kc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Eo=Eo||document.createElement("div"),Eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Fr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Af=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){Af.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function bc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function wc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=bc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Bf=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ui(e,t){if(t){if(Bf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Wi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hi=null;function _l(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ji=null,Vn=null,Gn=null;function pu(e){if(e=to(e)){if(typeof Ji!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ca(t),Ji(e.stateNode,e.type,t))}}function Nc(e){Vn?Gn?Gn.push(e):Gn=[e]:Vn=e}function Sc(){if(Vn){var e=Vn,t=Gn;if(Gn=Vn=null,pu(e),t)for(e=0;e<t.length;e++)pu(t[e])}}function Ec(e,t){return e(t)}function Cc(){}var pi=!1;function Mc(e,t,n){if(pi)return e(t,n);pi=!0;try{return Ec(e,t,n)}finally{pi=!1,(Vn!==null||Gn!==null)&&(Cc(),Sc())}}function $r(e,t){var n=e.stateNode;if(n===null)return null;var r=Ca(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Vi=!1;if(Ct)try{Tn={},Object.defineProperty(Tn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Vi=!1}var Tn;function If(e,t,n,r,a,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(d){this.onError(d)}}var zr=!1,Ro=null,ea=!1,Gi=null,Ff={onError:function(e){zr=!0,Ro=e}};function $f(e,t,n,r,a,i,l,s,u){zr=!1,Ro=null,If.apply(Ff,arguments)}function Of(e,t,n,r,a,i,l,s,u){if($f.apply(this,arguments),zr){if(zr){var c=Ro;zr=!1,Ro=null}else throw Error(C(198));ea||(ea=!0,Gi=c)}}function wn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fu(e){if(wn(e)!==e)throw Error(C(188))}function jf(e){var t=e.alternate;if(!t){if(t=wn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return fu(a),e;if(i===r)return fu(a),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function _c(e){return e=jf(e),e!==null?Tc(e):null}function Tc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Tc(e);if(t!==null)return t;e=e.sibling}return null}var Lc=Ke.unstable_scheduleCallback,mu=Ke.unstable_cancelCallback,Uf=Ke.unstable_shouldYield,Wf=Ke.unstable_requestPaint,ce=Ke.unstable_now,Hf=Ke.unstable_getCurrentPriorityLevel,Tl=Ke.unstable_ImmediatePriority,Pc=Ke.unstable_UserBlockingPriority,ta=Ke.unstable_NormalPriority,Jf=Ke.unstable_LowPriority,Dc=Ke.unstable_IdlePriority,wa=null,xt=null;function Vf(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(wa,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Xf,Gf=Math.log,Kf=Math.LN2;function Xf(e){return e>>>=0,e===0?32:31-(Gf(e)/Kf|0)|0}var Co=64,Mo=4194304;function Er(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~a;s!==0?r=Er(s):(i&=l,i!==0&&(r=Er(i)))}else l=n&~a,l!==0?r=Er(l):i!==0&&(r=Er(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),a=1<<n,r|=e[n],t&=~a;return r}function qf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-dt(i),s=1<<l,u=a[l];u===-1?((s&n)===0||(s&r)!==0)&&(a[l]=qf(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ki(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ac(){var e=Co;return Co<<=1,(Co&4194240)===0&&(Co=64),e}function fi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Qf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-dt(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var X=0;function Bc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ic,Pl,Fc,$c,Oc,Xi=!1,zo=[],Jt=null,Vt=null,Gt=null,Or=new Map,jr=new Map,jt=[],Zf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hu(e,t){switch(e){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":Vt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Or.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":jr.delete(t.pointerId)}}function gr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=to(t),t!==null&&Pl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Rf(e,t,n,r,a){switch(t){case"focusin":return Jt=gr(Jt,e,t,n,r,a),!0;case"dragenter":return Vt=gr(Vt,e,t,n,r,a),!0;case"mouseover":return Gt=gr(Gt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Or.set(i,gr(Or.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,jr.set(i,gr(jr.get(i)||null,e,t,n,r,a)),!0}return!1}function jc(e){var t=dn(e.target);if(t!==null){var n=wn(t);if(n!==null){if(t=n.tag,t===13){if(t=zc(n),t!==null){e.blockedOn=t,Oc(e.priority,function(){Fc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=qi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hi=r,n.target.dispatchEvent(r),Hi=null}else return t=to(n),t!==null&&Pl(t),e.blockedOn=n,!1;t.shift()}return!0}function gu(e,t,n){Wo(e)&&n.delete(t)}function em(){Xi=!1,Jt!==null&&Wo(Jt)&&(Jt=null),Vt!==null&&Wo(Vt)&&(Vt=null),Gt!==null&&Wo(Gt)&&(Gt=null),Or.forEach(gu),jr.forEach(gu)}function vr(e,t){e.blockedOn===t&&(e.blockedOn=null,Xi||(Xi=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,em)))}function Ur(e){function t(a){return vr(a,e)}if(0<zo.length){vr(zo[0],e);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jt!==null&&vr(Jt,e),Vt!==null&&vr(Vt,e),Gt!==null&&vr(Gt,e),Or.forEach(t),jr.forEach(t),n=0;n<jt.length;n++)r=jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jt.length&&(n=jt[0],n.blockedOn===null);)jc(n),n.blockedOn===null&&jt.shift()}var Kn=Tt.ReactCurrentBatchConfig,ra=!0;function tm(e,t,n,r){var a=X,i=Kn.transition;Kn.transition=null;try{X=1,Dl(e,t,n,r)}finally{X=a,Kn.transition=i}}function nm(e,t,n,r){var a=X,i=Kn.transition;Kn.transition=null;try{X=4,Dl(e,t,n,r)}finally{X=a,Kn.transition=i}}function Dl(e,t,n,r){if(ra){var a=qi(e,t,n,r);if(a===null)ki(e,t,r,oa,n),hu(e,r);else if(Rf(a,e,t,n,r))r.stopPropagation();else if(hu(e,r),t&4&&-1<Zf.indexOf(e)){for(;a!==null;){var i=to(a);if(i!==null&&Ic(i),i=qi(e,t,n,r),i===null&&ki(e,t,r,oa,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else ki(e,t,r,null,n)}}var oa=null;function qi(e,t,n,r){if(oa=null,e=_l(r),e=dn(e),e!==null)if(t=wn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return oa=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hf()){case Tl:return 1;case Pc:return 4;case ta:case Jf:return 16;case Dc:return 536870912;default:return 16}default:return 16}}var Wt=null,Al=null,Ho=null;function Wc(){if(Ho)return Ho;var e,t=Al,n=t.length,r,a="value"in Wt?Wt.value:Wt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===a[i-r];r++);return Ho=a.slice(e,1<r?1-r:void 0)}function Jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function vu(){return!1}function Xe(e){function t(n,r,a,i,l){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?_o:vu,this.isPropagationStopped=vu,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var rr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bl=Xe(rr),eo=ie({},rr,{view:0,detail:0}),rm=Xe(eo),mi,hi,yr,Na=ie({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==yr&&(yr&&e.type==="mousemove"?(mi=e.screenX-yr.screenX,hi=e.screenY-yr.screenY):hi=mi=0,yr=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:hi}}),yu=Xe(Na),om=ie({},Na,{dataTransfer:0}),am=Xe(om),im=ie({},eo,{relatedTarget:0}),gi=Xe(im),lm=ie({},rr,{animationName:0,elapsedTime:0,pseudoElement:0}),sm=Xe(lm),um=ie({},rr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=Xe(um),dm=ie({},rr,{data:0}),xu=Xe(dm),pm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=mm[e])?!!t[e]:!1}function Il(){return hm}var gm=ie({},eo,{key:function(e){if(e.key){var t=pm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Il,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=Xe(gm),ym=ie({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ku=Xe(ym),xm=ie({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Il}),km=Xe(xm),bm=ie({},rr,{propertyName:0,elapsedTime:0,pseudoElement:0}),wm=Xe(bm),Nm=ie({},Na,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sm=Xe(Nm),Em=[9,13,27,32],Fl=Ct&&"CompositionEvent"in window,_r=null;Ct&&"documentMode"in document&&(_r=document.documentMode);var Cm=Ct&&"TextEvent"in window&&!_r,Hc=Ct&&(!Fl||_r&&8<_r&&11>=_r),bu=" ",wu=!1;function Jc(e,t){switch(e){case"keyup":return Em.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Mm(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(wu=!0,bu);case"textInput":return e=t.data,e===bu&&wu?null:e;default:return null}}function zm(e,t){if(An)return e==="compositionend"||!Fl&&Jc(e,t)?(e=Wc(),Ho=Al=Wt=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hc&&t.locale!=="ko"?null:t.data;default:return null}}var _m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!_m[e.type]:t==="textarea"}function Gc(e,t,n,r){Nc(r),t=aa(t,"onChange"),0<t.length&&(n=new Bl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Wr=null;function Tm(e){rd(e,0)}function Sa(e){var t=Fn(e);if(gc(t))return e}function Lm(e,t){if(e==="change")return t}var Kc=!1;Ct&&(Ct?(Lo="oninput"in document,Lo||(vi=document.createElement("div"),vi.setAttribute("oninput","return;"),Lo=typeof vi.oninput=="function"),To=Lo):To=!1,Kc=To&&(!document.documentMode||9<document.documentMode));var To,Lo,vi;function Su(){Tr&&(Tr.detachEvent("onpropertychange",Xc),Wr=Tr=null)}function Xc(e){if(e.propertyName==="value"&&Sa(Wr)){var t=[];Gc(t,Wr,e,_l(e)),Mc(Tm,t)}}function Pm(e,t,n){e==="focusin"?(Su(),Tr=t,Wr=n,Tr.attachEvent("onpropertychange",Xc)):e==="focusout"&&Su()}function Dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sa(Wr)}function Am(e,t){if(e==="click")return Sa(t)}function Bm(e,t){if(e==="input"||e==="change")return Sa(t)}function Im(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ft=typeof Object.is=="function"?Object.is:Im;function Hr(e,t){if(ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Li.call(t,a)||!ft(e[a],t[a]))return!1}return!0}function Eu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,t){var n=Eu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eu(n)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Yc(){for(var e=window,t=Zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Zo(e.document)}return t}function $l(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fm(e){var t=Yc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&qc(n.ownerDocument.documentElement,n)){if(r!==null&&$l(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=Cu(n,i);var l=Cu(n,r);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $m=Ct&&"documentMode"in document&&11>=document.documentMode,Bn=null,Yi=null,Lr=null,Qi=!1;function Mu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qi||Bn==null||Bn!==Zo(r)||(r=Bn,"selectionStart"in r&&$l(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&Hr(Lr,r)||(Lr=r,r=aa(Yi,"onSelect"),0<r.length&&(t=new Bl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Bn)))}function Po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var In={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},yi={},Qc={};Ct&&(Qc=document.createElement("div").style,"AnimationEvent"in window||(delete In.animationend.animation,delete In.animationiteration.animation,delete In.animationstart.animation),"TransitionEvent"in window||delete In.transitionend.transition);function Ea(e){if(yi[e])return yi[e];if(!In[e])return e;var t=In[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qc)return yi[e]=t[n];return e}var Zc=Ea("animationend"),Rc=Ea("animationiteration"),ed=Ea("animationstart"),td=Ea("transitionend"),nd=new Map,zu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function en(e,t){nd.set(e,t),bn(t,[e])}for(Do=0;Do<zu.length;Do++)Ao=zu[Do],_u=Ao.toLowerCase(),Tu=Ao[0].toUpperCase()+Ao.slice(1),en(_u,"on"+Tu);var Ao,_u,Tu,Do;en(Zc,"onAnimationEnd");en(Rc,"onAnimationIteration");en(ed,"onAnimationStart");en("dblclick","onDoubleClick");en("focusin","onFocus");en("focusout","onBlur");en(td,"onTransitionEnd");Yn("onMouseEnter",["mouseout","mouseover"]);Yn("onMouseLeave",["mouseout","mouseover"]);Yn("onPointerEnter",["pointerout","pointerover"]);Yn("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Om=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));function Lu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Of(r,t,void 0,e),e.currentTarget=null}function rd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&a.isPropagationStopped())break e;Lu(a,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&a.isPropagationStopped())break e;Lu(a,s,c),i=u}}}if(ea)throw e=Gi,ea=!1,Gi=null,e}function R(e,t){var n=t[nl];n===void 0&&(n=t[nl]=new Set);var r=e+"__bubble";n.has(r)||(od(t,e,2,!1),n.add(r))}function xi(e,t,n){var r=0;t&&(r|=4),od(n,e,r,t)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Jr(e){if(!e[Bo]){e[Bo]=!0,dc.forEach(function(n){n!=="selectionchange"&&(Om.has(n)||xi(n,!1,e),xi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Bo]||(t[Bo]=!0,xi("selectionchange",!1,t))}}function od(e,t,n,r){switch(Uc(t)){case 1:var a=tm;break;case 4:a=nm;break;default:a=Dl}n=a.bind(null,t,n,e),a=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function ki(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===a||u.nodeType===8&&u.parentNode===a))return;l=l.return}for(;s!==null;){if(l=dn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}Mc(function(){var c=i,d=_l(n),f=[];e:{var g=nd.get(e);if(g!==void 0){var v=Bl,k=e;switch(e){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":v=vm;break;case"focusin":k="focus",v=gi;break;case"focusout":k="blur",v=gi;break;case"beforeblur":case"afterblur":v=gi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=am;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=km;break;case Zc:case Rc:case ed:v=sm;break;case td:v=wm;break;case"scroll":v=rm;break;case"wheel":v=Sm;break;case"copy":case"cut":case"paste":v=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=ku}var x=(t&4)!==0,w=!x&&e==="scroll",m=x?g!==null?g+"Capture":null:g;x=[];for(var p=c,h;p!==null;){h=p;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,m!==null&&(y=$r(p,m),y!=null&&x.push(Vr(p,y,h)))),w)break;p=p.return}0<x.length&&(g=new v(g,k,null,n,d),f.push({event:g,listeners:x}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==Hi&&(k=n.relatedTarget||n.fromElement)&&(dn(k)||k[Mt]))break e;if((v||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?dn(k):null,k!==null&&(w=wn(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(x=yu,y="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=ku,y="onPointerLeave",m="onPointerEnter",p="pointer"),w=v==null?g:Fn(v),h=k==null?g:Fn(k),g=new x(y,p+"leave",v,n,d),g.target=w,g.relatedTarget=h,y=null,dn(d)===c&&(x=new x(m,p+"enter",k,n,d),x.target=h,x.relatedTarget=w,y=x),w=y,v&&k)t:{for(x=v,m=k,p=0,h=x;h;h=Ln(h))p++;for(h=0,y=m;y;y=Ln(y))h++;for(;0<p-h;)x=Ln(x),p--;for(;0<h-p;)m=Ln(m),h--;for(;p--;){if(x===m||m!==null&&x===m.alternate)break t;x=Ln(x),m=Ln(m)}x=null}else x=null;v!==null&&Pu(f,g,v,x,!1),k!==null&&w!==null&&Pu(f,w,k,x,!0)}}e:{if(g=c?Fn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var N=Lm;else if(Nu(g))if(Kc)N=Bm;else{N=Dm;var b=Pm}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=Am);if(N&&(N=N(e,c))){Gc(f,N,n,d);break e}b&&b(e,g,c),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&$i(g,"number",g.value)}switch(b=c?Fn(c):window,e){case"focusin":(Nu(b)||b.contentEditable==="true")&&(Bn=b,Yi=c,Lr=null);break;case"focusout":Lr=Yi=Bn=null;break;case"mousedown":Qi=!0;break;case"contextmenu":case"mouseup":case"dragend":Qi=!1,Mu(f,n,d);break;case"selectionchange":if($m)break;case"keydown":case"keyup":Mu(f,n,d)}var _;if(Fl)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else An?Jc(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Hc&&n.locale!=="ko"&&(An||S!=="onCompositionStart"?S==="onCompositionEnd"&&An&&(_=Wc()):(Wt=d,Al="value"in Wt?Wt.value:Wt.textContent,An=!0)),b=aa(c,S),0<b.length&&(S=new xu(S,e,null,n,d),f.push({event:S,listeners:b}),_?S.data=_:(_=Vc(n),_!==null&&(S.data=_)))),(_=Cm?Mm(e,n):zm(e,n))&&(c=aa(c,"onBeforeInput"),0<c.length&&(d=new xu("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:c}),d.data=_))}rd(f,t)})}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function aa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=$r(e,n),i!=null&&r.unshift(Vr(e,i,a)),i=$r(e,t),i!=null&&r.push(Vr(e,i,a))),e=e.return}return r}function Ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pu(e,t,n,r,a){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,a?(u=$r(n,i),u!=null&&l.unshift(Vr(n,u,s))):a||(u=$r(n,i),u!=null&&l.push(Vr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var jm=/\r\n?/g,Um=/\u0000|\uFFFD/g;function Du(e){return(typeof e=="string"?e:""+e).replace(jm,`
`).replace(Um,"")}function Io(e,t,n){if(t=Du(t),Du(e)!==t&&n)throw Error(C(425))}function ia(){}var Zi=null,Ri=null;function el(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var tl=typeof setTimeout=="function"?setTimeout:void 0,Wm=typeof clearTimeout=="function"?clearTimeout:void 0,Au=typeof Promise=="function"?Promise:void 0,Hm=typeof queueMicrotask=="function"?queueMicrotask:typeof Au<"u"?function(e){return Au.resolve(null).then(e).catch(Jm)}:tl;function Jm(e){setTimeout(function(){throw e})}function bi(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Ur(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Ur(t)}function Kt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var or=Math.random().toString(36).slice(2),yt="__reactFiber$"+or,Gr="__reactProps$"+or,Mt="__reactContainer$"+or,nl="__reactEvents$"+or,Vm="__reactListeners$"+or,Gm="__reactHandles$"+or;function dn(e){var t=e[yt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mt]||n[yt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bu(e);e!==null;){if(n=e[yt])return n;e=Bu(e)}return t}e=n,n=e.parentNode}return null}function to(e){return e=e[yt]||e[Mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ca(e){return e[Gr]||null}var rl=[],$n=-1;function tn(e){return{current:e}}function ee(e){0>$n||(e.current=rl[$n],rl[$n]=null,$n--)}function Z(e,t){$n++,rl[$n]=e.current,e.current=t}var Rt={},Te=tn(Rt),je=tn(!1),gn=Rt;function Qn(e,t){var n=e.type.contextTypes;if(!n)return Rt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ue(e){return e=e.childContextTypes,e!=null}function la(){ee(je),ee(Te)}function Iu(e,t,n){if(Te.current!==Rt)throw Error(C(168));Z(Te,t),Z(je,n)}function ad(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,Pf(e)||"Unknown",a));return ie({},n,r)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rt,gn=Te.current,Z(Te,e),Z(je,je.current),!0}function Fu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=ad(e,t,gn),r.__reactInternalMemoizedMergedChildContext=e,ee(je),ee(Te),Z(Te,e)):ee(je),Z(je,n)}var wt=null,Ma=!1,wi=!1;function id(e){wt===null?wt=[e]:wt.push(e)}function Km(e){Ma=!0,id(e)}function nn(){if(!wi&&wt!==null){wi=!0;var e=0,t=X;try{var n=wt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,Ma=!1}catch(a){throw wt!==null&&(wt=wt.slice(e+1)),Lc(Tl,nn),a}finally{X=t,wi=!1}}return null}var On=[],jn=0,ua=null,ca=0,Qe=[],Ze=0,vn=null,Nt=1,St="";function un(e,t){On[jn++]=ca,On[jn++]=ua,ua=e,ca=t}function ld(e,t,n){Qe[Ze++]=Nt,Qe[Ze++]=St,Qe[Ze++]=vn,vn=e;var r=Nt;e=St;var a=32-dt(r)-1;r&=~(1<<a),n+=1;var i=32-dt(t)+a;if(30<i){var l=a-a%5;i=(r&(1<<l)-1).toString(32),r>>=l,a-=l,Nt=1<<32-dt(t)+a|n<<a|r,St=i+e}else Nt=1<<i|n<<a|r,St=e}function Ol(e){e.return!==null&&(un(e,1),ld(e,1,0))}function jl(e){for(;e===ua;)ua=On[--jn],On[jn]=null,ca=On[--jn],On[jn]=null;for(;e===vn;)vn=Qe[--Ze],Qe[Ze]=null,St=Qe[--Ze],Qe[Ze]=null,Nt=Qe[--Ze],Qe[Ze]=null}var Ge=null,Ve=null,te=!1,ct=null;function sd(e,t){var n=Re(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,Ve=Kt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vn!==null?{id:Nt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Re(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,Ve=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(te){var t=Ve;if(t){var n=t;if(!$u(e,t)){if(ol(e))throw Error(C(418));t=Kt(n.nextSibling);var r=Ge;t&&$u(e,t)?sd(r,n):(e.flags=e.flags&-4097|2,te=!1,Ge=e)}}else{if(ol(e))throw Error(C(418));e.flags=e.flags&-4097|2,te=!1,Ge=e}}}function Ou(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Fo(e){if(e!==Ge)return!1;if(!te)return Ou(e),te=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!el(e.type,e.memoizedProps)),t&&(t=Ve)){if(ol(e))throw ud(),Error(C(418));for(;t;)sd(e,t),t=Kt(t.nextSibling)}if(Ou(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Kt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Ge?Kt(e.stateNode.nextSibling):null;return!0}function ud(){for(var e=Ve;e;)e=Kt(e.nextSibling)}function Zn(){Ve=Ge=null,te=!1}function Ul(e){ct===null?ct=[e]:ct.push(e)}var Xm=Tt.ReactCurrentBatchConfig;function xr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=a.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function $o(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ju(e){var t=e._init;return t(e._payload)}function cd(e){function t(m,p){if(e){var h=m.deletions;h===null?(m.deletions=[p],m.flags|=16):h.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function a(m,p){return m=Qt(m,p),m.index=0,m.sibling=null,m}function i(m,p,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<p?(m.flags|=2,p):h):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,p,h,y){return p===null||p.tag!==6?(p=_i(h,m.mode,y),p.return=m,p):(p=a(p,h),p.return=m,p)}function u(m,p,h,y){var N=h.type;return N===Dn?d(m,p,h.props.children,y,h.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===$t&&ju(N)===p.type)?(y=a(p,h.props),y.ref=xr(m,p,h),y.return=m,y):(y=Qo(h.type,h.key,h.props,null,m.mode,y),y.ref=xr(m,p,h),y.return=m,y)}function c(m,p,h,y){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=Ti(h,m.mode,y),p.return=m,p):(p=a(p,h.children||[]),p.return=m,p)}function d(m,p,h,y,N){return p===null||p.tag!==7?(p=hn(h,m.mode,y,N),p.return=m,p):(p=a(p,h),p.return=m,p)}function f(m,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=_i(""+p,m.mode,h),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case No:return h=Qo(p.type,p.key,p.props,null,m.mode,h),h.ref=xr(m,null,p),h.return=m,h;case Pn:return p=Ti(p,m.mode,h),p.return=m,p;case $t:var y=p._init;return f(m,y(p._payload),h)}if(Sr(p)||hr(p))return p=hn(p,m.mode,h,null),p.return=m,p;$o(m,p)}return null}function g(m,p,h,y){var N=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return N!==null?null:s(m,p,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case No:return h.key===N?u(m,p,h,y):null;case Pn:return h.key===N?c(m,p,h,y):null;case $t:return N=h._init,g(m,p,N(h._payload),y)}if(Sr(h)||hr(h))return N!==null?null:d(m,p,h,y,null);$o(m,h)}return null}function v(m,p,h,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(h)||null,s(p,m,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case No:return m=m.get(y.key===null?h:y.key)||null,u(p,m,y,N);case Pn:return m=m.get(y.key===null?h:y.key)||null,c(p,m,y,N);case $t:var b=y._init;return v(m,p,h,b(y._payload),N)}if(Sr(y)||hr(y))return m=m.get(h)||null,d(p,m,y,N,null);$o(p,y)}return null}function k(m,p,h,y){for(var N=null,b=null,_=p,S=p=0,U=null;_!==null&&S<h.length;S++){_.index>S?(U=_,_=null):U=_.sibling;var D=g(m,_,h[S],y);if(D===null){_===null&&(_=U);break}e&&_&&D.alternate===null&&t(m,_),p=i(D,p,S),b===null?N=D:b.sibling=D,b=D,_=U}if(S===h.length)return n(m,_),te&&un(m,S),N;if(_===null){for(;S<h.length;S++)_=f(m,h[S],y),_!==null&&(p=i(_,p,S),b===null?N=_:b.sibling=_,b=_);return te&&un(m,S),N}for(_=r(m,_);S<h.length;S++)U=v(_,m,S,h[S],y),U!==null&&(e&&U.alternate!==null&&_.delete(U.key===null?S:U.key),p=i(U,p,S),b===null?N=U:b.sibling=U,b=U);return e&&_.forEach(function(P){return t(m,P)}),te&&un(m,S),N}function x(m,p,h,y){var N=hr(h);if(typeof N!="function")throw Error(C(150));if(h=N.call(h),h==null)throw Error(C(151));for(var b=N=null,_=p,S=p=0,U=null,D=h.next();_!==null&&!D.done;S++,D=h.next()){_.index>S?(U=_,_=null):U=_.sibling;var P=g(m,_,D.value,y);if(P===null){_===null&&(_=U);break}e&&_&&P.alternate===null&&t(m,_),p=i(P,p,S),b===null?N=P:b.sibling=P,b=P,_=U}if(D.done)return n(m,_),te&&un(m,S),N;if(_===null){for(;!D.done;S++,D=h.next())D=f(m,D.value,y),D!==null&&(p=i(D,p,S),b===null?N=D:b.sibling=D,b=D);return te&&un(m,S),N}for(_=r(m,_);!D.done;S++,D=h.next())D=v(_,m,S,D.value,y),D!==null&&(e&&D.alternate!==null&&_.delete(D.key===null?S:D.key),p=i(D,p,S),b===null?N=D:b.sibling=D,b=D);return e&&_.forEach(function(W){return t(m,W)}),te&&un(m,S),N}function w(m,p,h,y){if(typeof h=="object"&&h!==null&&h.type===Dn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case No:e:{for(var N=h.key,b=p;b!==null;){if(b.key===N){if(N=h.type,N===Dn){if(b.tag===7){n(m,b.sibling),p=a(b,h.props.children),p.return=m,m=p;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===$t&&ju(N)===b.type){n(m,b.sibling),p=a(b,h.props),p.ref=xr(m,b,h),p.return=m,m=p;break e}n(m,b);break}else t(m,b);b=b.sibling}h.type===Dn?(p=hn(h.props.children,m.mode,y,h.key),p.return=m,m=p):(y=Qo(h.type,h.key,h.props,null,m.mode,y),y.ref=xr(m,p,h),y.return=m,m=y)}return l(m);case Pn:e:{for(b=h.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){n(m,p.sibling),p=a(p,h.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Ti(h,m.mode,y),p.return=m,m=p}return l(m);case $t:return b=h._init,w(m,p,b(h._payload),y)}if(Sr(h))return k(m,p,h,y);if(hr(h))return x(m,p,h,y);$o(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(n(m,p.sibling),p=a(p,h),p.return=m,m=p):(n(m,p),p=_i(h,m.mode,y),p.return=m,m=p),l(m)):n(m,p)}return w}var Rn=cd(!0),dd=cd(!1),da=tn(null),pa=null,Un=null,Wl=null;function Hl(){Wl=Un=pa=null}function Jl(e){var t=da.current;ee(da),e._currentValue=t}function il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xn(e,t){pa=e,Wl=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Oe=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Wl!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(pa===null)throw Error(C(308));Un=e,pa.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var pn=null;function Vl(e){pn===null?pn=[e]:pn.push(e)}function pd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Vl(t)):(n.next=a.next,a.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Et(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Xt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,zt(e,n)}return a=r.interleaved,a===null?(t.next=t,Vl(r)):(t.next=a.next,a.next=t),r.interleaved=t,zt(e,n)}function Vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ll(e,n)}}function Uu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fa(e,t,n,r){var a=e.updateQueue;Ot=!1;var i=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==l&&(s===null?d.firstBaseUpdate=c:s.next=c,d.lastBaseUpdate=u))}if(i!==null){var f=a.baseState;l=0,d=c=u=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(g=t,v=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){f=k.call(v,f,g);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,g=typeof k=="function"?k.call(v,f,g):k,g==null)break e;f=ie({},f,g);break e;case 2:Ot=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(c=d=v,u=f):d=d.next=v,l|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(d===null&&(u=f),a.baseState=u,a.firstBaseUpdate=c,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);xn|=l,e.lanes=l,e.memoizedState=f}}function Wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var no={},kt=tn(no),Kr=tn(no),Xr=tn(no);function fn(e){if(e===no)throw Error(C(174));return e}function Kl(e,t){switch(Z(Xr,t),Z(Kr,e),Z(kt,no),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ji(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ji(t,e)}ee(kt),Z(kt,t)}function er(){ee(kt),ee(Kr),ee(Xr)}function md(e){fn(Xr.current);var t=fn(kt.current),n=ji(t,e.type);t!==n&&(Z(Kr,e),Z(kt,n))}function Xl(e){Kr.current===e&&(ee(kt),ee(Kr))}var oe=tn(0);function ma(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ni=[];function ql(){for(var e=0;e<Ni.length;e++)Ni[e]._workInProgressVersionPrimary=null;Ni.length=0}var Go=Tt.ReactCurrentDispatcher,Si=Tt.ReactCurrentBatchConfig,yn=0,ae=null,me=null,ge=null,ha=!1,Pr=!1,qr=0,qm=0;function Me(){throw Error(C(321))}function Yl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ft(e[n],t[n]))return!1;return!0}function Ql(e,t,n,r,a,i){if(yn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Go.current=e===null||e.memoizedState===null?Rm:e0,e=n(r,a),Pr){i=0;do{if(Pr=!1,qr=0,25<=i)throw Error(C(301));i+=1,ge=me=null,t.updateQueue=null,Go.current=t0,e=n(r,a)}while(Pr)}if(Go.current=ga,t=me!==null&&me.next!==null,yn=0,ge=me=ae=null,ha=!1,t)throw Error(C(300));return e}function Zl(){var e=qr!==0;return qr=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ae.memoizedState=ge=e:ge=ge.next=e,ge}function nt(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ge===null?ae.memoizedState:ge.next;if(t!==null)ge=t,me=e;else{if(e===null)throw Error(C(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ge===null?ae.memoizedState=ge=e:ge=ge.next=e}return ge}function Yr(e,t){return typeof t=="function"?t(e):t}function Ei(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=me,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((yn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=f,l=r):u=u.next=f,ae.lanes|=d,xn|=d}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,ft(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,ae.lanes|=i,xn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ci(e){var t=nt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var l=a=a.next;do i=e(i,l.action),l=l.next;while(l!==a);ft(i,t.memoizedState)||(Oe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function hd(){}function gd(e,t){var n=ae,r=nt(),a=t(),i=!ft(r.memoizedState,a);if(i&&(r.memoizedState=a,Oe=!0),r=r.queue,Rl(xd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Qr(9,yd.bind(null,n,r,a,t),void 0,null),ve===null)throw Error(C(349));(yn&30)!==0||vd(n,t,a)}return a}function vd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function yd(e,t,n,r){t.value=n,t.getSnapshot=r,kd(t)&&bd(e)}function xd(e,t,n){return n(function(){kd(t)&&bd(e)})}function kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ft(e,n)}catch{return!0}}function bd(e){var t=zt(e,1);t!==null&&pt(t,e,1,-1)}function Hu(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yr,lastRenderedState:e},t.queue=e,e=e.dispatch=Zm.bind(null,ae,e),[t.memoizedState,e]}function Qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function wd(){return nt().memoizedState}function Ko(e,t,n,r){var a=vt();ae.flags|=e,a.memoizedState=Qr(1|t,n,void 0,r===void 0?null:r)}function za(e,t,n,r){var a=nt();r=r===void 0?null:r;var i=void 0;if(me!==null){var l=me.memoizedState;if(i=l.destroy,r!==null&&Yl(r,l.deps)){a.memoizedState=Qr(t,n,i,r);return}}ae.flags|=e,a.memoizedState=Qr(1|t,n,i,r)}function Ju(e,t){return Ko(8390656,8,e,t)}function Rl(e,t){return za(2048,8,e,t)}function Nd(e,t){return za(4,2,e,t)}function Sd(e,t){return za(4,4,e,t)}function Ed(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Cd(e,t,n){return n=n!=null?n.concat([e]):null,za(4,4,Ed.bind(null,t,e),n)}function es(){}function Md(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zd(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _d(e,t,n){return(yn&21)===0?(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n):(ft(n,t)||(n=Ac(),ae.lanes|=n,xn|=n,e.baseState=!0),t)}function Ym(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Si.transition;Si.transition={};try{e(!1),t()}finally{X=n,Si.transition=r}}function Td(){return nt().memoizedState}function Qm(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ld(e))Pd(t,n);else if(n=pd(e,t,n,r),n!==null){var a=Ae();pt(n,e,r,a),Dd(n,t,r)}}function Zm(e,t,n){var r=Yt(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ld(e))Pd(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(a.hasEagerState=!0,a.eagerState=s,ft(s,l)){var u=t.interleaved;u===null?(a.next=a,Vl(t)):(a.next=u.next,u.next=a),t.interleaved=a;return}}catch{}n=pd(e,t,a,r),n!==null&&(a=Ae(),pt(n,e,r,a),Dd(n,t,r))}}function Ld(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Pd(e,t){Pr=ha=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Dd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ll(e,n)}}var ga={readContext:tt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},Rm={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Ju,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ko(4194308,4,Ed.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ko(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qm.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:Hu,useDebugValue:es,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=Hu(!1),t=e[0];return e=Ym.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,a=vt();if(te){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),ve===null)throw Error(C(349));(yn&30)!==0||vd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ju(xd.bind(null,r,i,e),[e]),r.flags|=2048,Qr(9,yd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=ve.identifierPrefix;if(te){var n=St,r=Nt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=qr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},e0={readContext:tt,useCallback:Md,useContext:tt,useEffect:Rl,useImperativeHandle:Cd,useInsertionEffect:Nd,useLayoutEffect:Sd,useMemo:zd,useReducer:Ei,useRef:wd,useState:function(){return Ei(Yr)},useDebugValue:es,useDeferredValue:function(e){var t=nt();return _d(t,me.memoizedState,e)},useTransition:function(){var e=Ei(Yr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:gd,useId:Td,unstable_isNewReconciler:!1},t0={readContext:tt,useCallback:Md,useContext:tt,useEffect:Rl,useImperativeHandle:Cd,useInsertionEffect:Nd,useLayoutEffect:Sd,useMemo:zd,useReducer:Ci,useRef:wd,useState:function(){return Ci(Yr)},useDebugValue:es,useDeferredValue:function(e){var t=nt();return me===null?t.memoizedState=e:_d(t,me.memoizedState,e)},useTransition:function(){var e=Ci(Yr)[0],t=nt().memoizedState;return[e,t]},useMutableSource:hd,useSyncExternalStore:gd,useId:Td,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function ll(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _a={isMounted:function(e){return(e=e._reactInternals)?wn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),a=Yt(e),i=Et(r,a);i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(pt(t,e,a,r),Vo(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),a=Yt(e),i=Et(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xt(e,i,a),t!==null&&(pt(t,e,a,r),Vo(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Yt(e),a=Et(n,r);a.tag=2,t!=null&&(a.callback=t),t=Xt(e,a,r),t!==null&&(pt(t,e,r,n),Vo(t,e,r))}};function Vu(e,t,n,r,a,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Hr(n,r)||!Hr(a,i):!0}function Ad(e,t,n){var r=!1,a=Rt,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(a=Ue(t)?gn:Te.current,r=t.contextTypes,i=(r=r!=null)?Qn(e,a):Rt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_a,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Gu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_a.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Gl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=tt(i):(i=Ue(t)?gn:Te.current,a.context=Qn(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(ll(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&_a.enqueueReplaceState(a,a.state,null),fa(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function tr(e,t){try{var n="",r=t;do n+=Lf(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Mi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var n0=typeof WeakMap=="function"?WeakMap:Map;function Bd(e,t,n){n=Et(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ya||(ya=!0,xl=r),ul(e,t)},n}function Id(e,t,n){n=Et(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ul(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ul(e,t),typeof r!="function"&&(qt===null?qt=new Set([this]):qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new n0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=g0.bind(null,e,t,n),t.then(e,e))}function Xu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function qu(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Et(-1,1),t.tag=2,Xt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var r0=Tt.ReactCurrentOwner,Oe=!1;function De(e,t,n,r){t.child=e===null?dd(t,null,n,r):Rn(t,e.child,n,r)}function Yu(e,t,n,r,a){n=n.render;var i=t.ref;return Xn(t,a),r=Ql(e,t,n,r,i,a),n=Zl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,_t(e,t,a)):(te&&n&&Ol(t),t.flags|=1,De(e,t,r,a),t.child)}function Qu(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!ss(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Fd(e,t,i,r,a)):(e=Qo(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Hr,n(l,r)&&e.ref===t.ref)return _t(e,t,a)}return t.flags|=1,e=Qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Fd(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Hr(i,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(Oe=!0);else return t.lanes=e.lanes,_t(e,t,a)}return cl(e,t,n,r,a)}function $d(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Hn,Je),Je|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Hn,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Hn,Je),Je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Hn,Je),Je|=r;return De(e,t,a,n),t.child}function Od(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function cl(e,t,n,r,a){var i=Ue(n)?gn:Te.current;return i=Qn(t,i),Xn(t,a),n=Ql(e,t,n,r,i,a),r=Zl(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,_t(e,t,a)):(te&&r&&Ol(t),t.flags|=1,De(e,t,n,a),t.child)}function Zu(e,t,n,r,a){if(Ue(n)){var i=!0;sa(t)}else i=!1;if(Xn(t,a),t.stateNode===null)Xo(e,t),Ad(t,n,r),sl(t,n,r,a),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=tt(c):(c=Ue(n)?gn:Te.current,c=Qn(t,c));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Gu(t,l,r,c),Ot=!1;var g=t.memoizedState;l.state=g,fa(t,r,l,a),u=t.memoizedState,s!==r||g!==u||je.current||Ot?(typeof d=="function"&&(ll(t,n,d,r),u=t.memoizedState),(s=Ot||Vu(t,n,s,r,g,u,c))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,fd(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:st(t.type,s),l.props=c,f=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=tt(u):(u=Ue(n)?gn:Te.current,u=Qn(t,u));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==f||g!==u)&&Gu(t,l,r,u),Ot=!1,g=t.memoizedState,l.state=g,fa(t,r,l,a);var k=t.memoizedState;s!==f||g!==k||je.current||Ot?(typeof v=="function"&&(ll(t,n,v,r),k=t.memoizedState),(c=Ot||Vu(t,n,c,r,g,k,u)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return dl(e,t,n,r,i,a)}function dl(e,t,n,r,a,i){Od(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return a&&Fu(t,n,!1),_t(e,t,i);r=t.stateNode,r0.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Rn(t,e.child,null,i),t.child=Rn(t,null,s,i)):De(e,t,s,i),t.memoizedState=r.state,a&&Fu(t,n,!0),t.child}function jd(e){var t=e.stateNode;t.pendingContext?Iu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Iu(e,t.context,!1),Kl(e,t.containerInfo)}function Ru(e,t,n,r,a){return Zn(),Ul(a),t.flags|=256,De(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function fl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ud(e,t,n){var r=t.pendingProps,a=oe.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Z(oe,a&1),e===null)return al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Pa(l,r,0,null),e=hn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fl(n),t.memoizedState=pl,e):ts(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return o0(e,t,l,r,s,a,n);if(i){i=r.fallback,l=t.mode,a=e.child,s=a.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Qt(a,u),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=Qt(s,i):(i=hn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?fl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return i=e.child,e=i.sibling,r=Qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ts(e,t){return t=Pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oo(e,t,n,r){return r!==null&&Ul(r),Rn(t,e.child,null,n),e=ts(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function o0(e,t,n,r,a,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Mi(Error(C(422))),Oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Pa({mode:"visible",children:r.children},a,0,null),i=hn(i,a,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Rn(t,e.child,null,l),t.child.memoizedState=fl(l),t.memoizedState=pl,i);if((t.mode&1)===0)return Oo(e,t,l,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=Mi(i,r,void 0),Oo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Oe||s){if(r=ve,r!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|l))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,zt(e,a),pt(r,e,a,-1))}return ls(),r=Mi(Error(C(421))),Oo(e,t,l,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=v0.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,Ve=Kt(a.nextSibling),Ge=t,te=!0,ct=null,e!==null&&(Qe[Ze++]=Nt,Qe[Ze++]=St,Qe[Ze++]=vn,Nt=e.id,St=e.overflow,vn=t),t=ts(t,r.children),t.flags|=4096,t)}function ec(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),il(e.return,t,n)}function zi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Wd(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(De(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ec(e,n,t);else if(e.tag===19)ec(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&ma(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),zi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ma(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}zi(t,!0,n,null,i);break;case"together":zi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function _t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function a0(e,t,n){switch(t.tag){case 3:jd(t),Zn();break;case 5:md(t);break;case 1:Ue(t.type)&&sa(t);break;case 4:Kl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Z(da,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ud(e,t,n):(Z(oe,oe.current&1),e=_t(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Wd(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,$d(e,t,n)}return _t(e,t,n)}var Hd,ml,Jd,Vd;Hd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};Jd=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,fn(kt.current);var i=null;switch(n){case"input":a=Ii(e,a),r=Ii(e,r),i=[];break;case"select":a=ie({},a,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":a=Oi(e,a),r=Oi(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ia)}Ui(n,r);var l;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ir.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=a?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ir.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&R("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Vd=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!te)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function i0(e,t,n){var r=t.pendingProps;switch(jl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ue(t.type)&&la(),ze(t),null;case 3:return r=t.stateNode,er(),ee(je),ee(Te),ql(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(wl(ct),ct=null))),ml(e,t),ze(t),null;case 5:Xl(t);var a=fn(Xr.current);if(n=t.type,e!==null&&t.stateNode!=null)Jd(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return ze(t),null}if(e=fn(kt.current),Fo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[yt]=t,r[Gr]=i,e=(t.mode&1)!==0,n){case"dialog":R("cancel",r),R("close",r);break;case"iframe":case"object":case"embed":R("load",r);break;case"video":case"audio":for(a=0;a<Cr.length;a++)R(Cr[a],r);break;case"source":R("error",r);break;case"img":case"image":case"link":R("error",r),R("load",r);break;case"details":R("toggle",r);break;case"input":su(r,i),R("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},R("invalid",r);break;case"textarea":cu(r,i),R("invalid",r)}Ui(n,i),a=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Io(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Io(r.textContent,s,e),a=["children",""+s]):Ir.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&R("scroll",r)}switch(n){case"input":So(r),uu(r,i,!0);break;case"textarea":So(r),du(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ia)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[yt]=t,e[Gr]=r,Hd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Wi(n,r),n){case"dialog":R("cancel",e),R("close",e),a=r;break;case"iframe":case"object":case"embed":R("load",e),a=r;break;case"video":case"audio":for(a=0;a<Cr.length;a++)R(Cr[a],e);a=r;break;case"source":R("error",e),a=r;break;case"img":case"image":case"link":R("error",e),R("load",e),a=r;break;case"details":R("toggle",e),a=r;break;case"input":su(e,r),a=Ii(e,r),R("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ie({},r,{value:void 0}),R("invalid",e);break;case"textarea":cu(e,r),a=Oi(e,r),R("invalid",e);break;default:a=r}Ui(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?wc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&kc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Fr(e,u):typeof u=="number"&&Fr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ir.hasOwnProperty(i)?u!=null&&i==="onScroll"&&R("scroll",e):u!=null&&El(e,i,u,l))}switch(n){case"input":So(e),uu(e,r,!1);break;case"textarea":So(e),du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Zt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Jn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Jn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Vd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=fn(Xr.current),fn(kt.current),Fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[yt]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yt]=t,t.stateNode=r}return ze(t),null;case 13:if(ee(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(te&&Ve!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ud(),Zn(),t.flags|=98560,i=!1;else if(i=Fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[yt]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else ct!==null&&(wl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?he===0&&(he=3):ls())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return er(),ml(e,t),e===null&&Jr(t.stateNode.containerInfo),ze(t),null;case 10:return Jl(t.type._context),ze(t),null;case 17:return Ue(t.type)&&la(),ze(t),null;case 19:if(ee(oe),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)kr(i,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ma(e),l!==null){for(t.flags|=128,kr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&ce()>nr&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ma(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!te)return ze(t),null}else 2*ce()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,kr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ce(),t.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Je&1073741824)!==0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function l0(e,t){switch(jl(t),t.tag){case 1:return Ue(t.type)&&la(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),ee(je),ee(Te),ql(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Xl(t),null;case 13:if(ee(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ee(oe),null;case 4:return er(),null;case 10:return Jl(t.type._context),null;case 22:case 23:return is(),null;case 24:return null;default:return null}}var jo=!1,_e=!1,s0=typeof WeakSet=="function"?WeakSet:Set,L=null;function Wn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function hl(e,t,n){try{n()}catch(r){le(e,t,r)}}var tc=!1;function u0(e,t){if(Zi=ra,e=Yc(),$l(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,g=null;t:for(;;){for(var v;f!==n||a!==0&&f.nodeType!==3||(s=l+a),f!==i||r!==0&&f.nodeType!==3||(u=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(v=f.firstChild)!==null;)g=f,f=v;for(;;){if(f===e)break t;if(g===n&&++c===a&&(s=l),g===i&&++d===r&&(u=l),(v=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ri={focusedElem:e,selectionRange:n},ra=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,w=k.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:st(t.type,x),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(y){le(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return k=tc,tc=!1,k}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&hl(t,n,i)}a=a.next}while(a!==r)}}function Ta(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function gl(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Gd(e){var t=e.alternate;t!==null&&(e.alternate=null,Gd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[yt],delete t[Gr],delete t[nl],delete t[Vm],delete t[Gm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Kd(e){return e.tag===5||e.tag===3||e.tag===4}function nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Kd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ia));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(yl(e,t,n),e=e.sibling;e!==null;)yl(e,t,n),e=e.sibling}var ke=null,ut=!1;function Ft(e,t,n){for(n=n.child;n!==null;)Xd(e,t,n),n=n.sibling}function Xd(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(wa,n)}catch{}switch(n.tag){case 5:_e||Wn(n,t);case 6:var r=ke,a=ut;ke=null,Ft(e,t,n),ke=r,ut=a,ke!==null&&(ut?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(ut?(e=ke,n=n.stateNode,e.nodeType===8?bi(e.parentNode,n):e.nodeType===1&&bi(e,n),Ur(e)):bi(ke,n.stateNode));break;case 4:r=ke,a=ut,ke=n.stateNode.containerInfo,ut=!0,Ft(e,t,n),ke=r,ut=a;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&hl(n,t,l),a=a.next}while(a!==r)}Ft(e,t,n);break;case 1:if(!_e&&(Wn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){le(n,t,s)}Ft(e,t,n);break;case 21:Ft(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Ft(e,t,n),_e=r):Ft(e,t,n);break;default:Ft(e,t,n)}}function rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new s0),t.forEach(function(r){var a=y0.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ke=s.stateNode,ut=!1;break e;case 3:ke=s.stateNode.containerInfo,ut=!0;break e;case 4:ke=s.stateNode.containerInfo,ut=!0;break e}s=s.return}if(ke===null)throw Error(C(160));Xd(i,l,a),ke=null,ut=!1;var u=a.alternate;u!==null&&(u.return=null),a.return=null}catch(c){le(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qd(t,e),t=t.sibling}function qd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),gt(e),r&4){try{Dr(3,e,e.return),Ta(3,e)}catch(x){le(e,e.return,x)}try{Dr(5,e,e.return)}catch(x){le(e,e.return,x)}}break;case 1:lt(t,e),gt(e),r&512&&n!==null&&Wn(n,n.return);break;case 5:if(lt(t,e),gt(e),r&512&&n!==null&&Wn(n,n.return),e.flags&32){var a=e.stateNode;try{Fr(a,"")}catch(x){le(e,e.return,x)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&vc(a,i),Wi(s,l);var c=Wi(s,i);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];d==="style"?wc(a,f):d==="dangerouslySetInnerHTML"?kc(a,f):d==="children"?Fr(a,f):El(a,d,f,c)}switch(s){case"input":Fi(a,i);break;case"textarea":yc(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Jn(a,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?Jn(a,!!i.multiple,i.defaultValue,!0):Jn(a,!!i.multiple,i.multiple?[]:"",!1))}a[Gr]=i}catch(x){le(e,e.return,x)}}break;case 6:if(lt(t,e),gt(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(x){le(e,e.return,x)}}break;case 3:if(lt(t,e),gt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ur(t.containerInfo)}catch(x){le(e,e.return,x)}break;case 4:lt(t,e),gt(e);break;case 13:lt(t,e),gt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(os=ce())),r&4&&rc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(c=_e)||d,lt(t,e),_e=c):lt(t,e),gt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&(e.mode&1)!==0)for(L=e,d=e.child;d!==null;){for(f=L=d;L!==null;){switch(g=L,v=g.child,g.tag){case 0:case 11:case 14:case 15:Dr(4,g,g.return);break;case 1:Wn(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){le(r,n,x)}}break;case 5:Wn(g,g.return);break;case 22:if(g.memoizedState!==null){ac(f);continue}}v!==null?(v.return=g,L=v):ac(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,u=f.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=bc("display",l))}catch(x){le(e,e.return,x)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(x){le(e,e.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:lt(t,e),gt(e),r&4&&rc(e);break;case 21:break;default:lt(t,e),gt(e)}}function gt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Kd(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(Fr(a,""),r.flags&=-33);var i=nc(e);yl(e,i,a);break;case 3:case 4:var l=r.stateNode.containerInfo,s=nc(e);vl(e,s,l);break;default:throw Error(C(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function c0(e,t,n){L=e,Yd(e,t,n)}function Yd(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var a=L,i=a.child;if(a.tag===22&&r){var l=a.memoizedState!==null||jo;if(!l){var s=a.alternate,u=s!==null&&s.memoizedState!==null||_e;s=jo;var c=_e;if(jo=l,(_e=u)&&!c)for(L=a;L!==null;)l=L,u=l.child,l.tag===22&&l.memoizedState!==null?ic(a):u!==null?(u.return=l,L=u):ic(a);for(;i!==null;)L=i,Yd(i,t,n),i=i.sibling;L=a,jo=s,_e=c}oc(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,L=i):oc(e,t,n)}}function oc(e){for(;L!==null;){var t=L;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||Ta(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Wu(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Wu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Ur(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}_e||t.flags&512&&gl(t)}catch(g){le(t,t.return,g)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function ac(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function ic(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ta(4,t)}catch(u){le(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(u){le(t,a,u)}}var i=t.return;try{gl(t)}catch(u){le(t,i,u)}break;case 5:var l=t.return;try{gl(t)}catch(u){le(t,l,u)}}}catch(u){le(t,t.return,u)}if(t===e){L=null;break}var s=t.sibling;if(s!==null){s.return=t.return,L=s;break}L=t.return}}var d0=Math.ceil,va=Tt.ReactCurrentDispatcher,ns=Tt.ReactCurrentOwner,et=Tt.ReactCurrentBatchConfig,V=0,ve=null,pe=null,be=0,Je=0,Hn=tn(0),he=0,Zr=null,xn=0,La=0,rs=0,Ar=null,$e=null,os=0,nr=1/0,bt=null,ya=!1,xl=null,qt=null,Uo=!1,Ht=null,xa=0,Br=0,kl=null,qo=-1,Yo=0;function Ae(){return(V&6)!==0?ce():qo!==-1?qo:qo=ce()}function Yt(e){return(e.mode&1)===0?1:(V&2)!==0&&be!==0?be&-be:Xm.transition!==null?(Yo===0&&(Yo=Ac()),Yo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e)}function pt(e,t,n,r){if(50<Br)throw Br=0,kl=null,Error(C(185));Rr(e,n,r),((V&2)===0||e!==ve)&&(e===ve&&((V&2)===0&&(La|=n),he===4&&Ut(e,be)),We(e,r),n===1&&V===0&&(t.mode&1)===0&&(nr=ce()+500,Ma&&nn()))}function We(e,t){var n=e.callbackNode;Yf(e,t);var r=na(e,e===ve?be:0);if(r===0)n!==null&&mu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mu(n),t===1)e.tag===0?Km(lc.bind(null,e)):id(lc.bind(null,e)),Hm(function(){(V&6)===0&&nn()}),n=null;else{switch(Bc(r)){case 1:n=Tl;break;case 4:n=Pc;break;case 16:n=ta;break;case 536870912:n=Dc;break;default:n=ta}n=op(n,Qd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qd(e,t){if(qo=-1,Yo=0,(V&6)!==0)throw Error(C(327));var n=e.callbackNode;if(qn()&&e.callbackNode!==n)return null;var r=na(e,e===ve?be:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ka(e,r);else{t=r;var a=V;V|=2;var i=Rd();(ve!==e||be!==t)&&(bt=null,nr=ce()+500,mn(e,t));do try{m0();break}catch(s){Zd(e,s)}while(!0);Hl(),va.current=i,V=a,pe!==null?t=0:(ve=null,be=0,t=he)}if(t!==0){if(t===2&&(a=Ki(e),a!==0&&(r=a,t=bl(e,a))),t===1)throw n=Zr,mn(e,0),Ut(e,r),We(e,ce()),n;if(t===6)Ut(e,r);else{if(a=e.current.alternate,(r&30)===0&&!p0(a)&&(t=ka(e,r),t===2&&(i=Ki(e),i!==0&&(r=i,t=bl(e,i))),t===1))throw n=Zr,mn(e,0),Ut(e,r),We(e,ce()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:cn(e,$e,bt);break;case 3:if(Ut(e,r),(r&130023424)===r&&(t=os+500-ce(),10<t)){if(na(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=tl(cn.bind(null,e,$e,bt),t);break}cn(e,$e,bt);break;case 4:if(Ut(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-dt(r);i=1<<l,l=t[l],l>a&&(a=l),r&=~i}if(r=a,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*d0(r/1960))-r,10<r){e.timeoutHandle=tl(cn.bind(null,e,$e,bt),r);break}cn(e,$e,bt);break;case 5:cn(e,$e,bt);break;default:throw Error(C(329))}}}return We(e,ce()),e.callbackNode===n?Qd.bind(null,e):null}function bl(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=ka(e,t),e!==2&&(t=$e,$e=n,t!==null&&wl(t)),e}function wl(e){$e===null?$e=e:$e.push.apply($e,e)}function p0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!ft(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ut(e,t){for(t&=~rs,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function lc(e){if((V&6)!==0)throw Error(C(327));qn();var t=na(e,0);if((t&1)===0)return We(e,ce()),null;var n=ka(e,t);if(e.tag!==0&&n===2){var r=Ki(e);r!==0&&(t=r,n=bl(e,r))}if(n===1)throw n=Zr,mn(e,0),Ut(e,t),We(e,ce()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,$e,bt),We(e,ce()),null}function as(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(nr=ce()+500,Ma&&nn())}}function kn(e){Ht!==null&&Ht.tag===0&&(V&6)===0&&qn();var t=V;V|=1;var n=et.transition,r=X;try{if(et.transition=null,X=1,e)return e()}finally{X=r,et.transition=n,V=t,(V&6)===0&&nn()}}function is(){Je=Hn.current,ee(Hn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Wm(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&la();break;case 3:er(),ee(je),ee(Te),ql();break;case 5:Xl(r);break;case 4:er();break;case 13:ee(oe);break;case 19:ee(oe);break;case 10:Jl(r.type._context);break;case 22:case 23:is()}n=n.return}if(ve=e,pe=e=Qt(e.current,null),be=Je=t,he=0,Zr=null,rs=La=xn=0,$e=Ar=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=a,r.next=l}n.pending=r}pn=null}return e}function Zd(e,t){do{var n=pe;try{if(Hl(),Go.current=ga,ha){for(var r=ae.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}ha=!1}if(yn=0,ge=me=ae=null,Pr=!1,qr=0,ns.current=null,n===null||n.return===null){he=1,Zr=t,pe=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=be,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=s,f=d.tag;if((d.mode&1)===0&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Xu(l);if(v!==null){v.flags&=-257,qu(v,l,s,i,t),v.mode&1&&Ku(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if((t&1)===0){Ku(i,c,t),ls();break e}u=Error(C(426))}}else if(te&&s.mode&1){var w=Xu(l);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),qu(w,l,s,i,t),Ul(tr(u,s));break e}}i=u=tr(u,s),he!==4&&(he=2),Ar===null?Ar=[i]:Ar.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Bd(i,u,t);Uu(i,m);break e;case 1:s=u;var p=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(qt===null||!qt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Id(i,s,t);Uu(i,y);break e}}i=i.return}while(i!==null)}tp(n)}catch(N){t=N,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function Rd(){var e=va.current;return va.current=ga,e===null?ga:e}function ls(){(he===0||he===3||he===2)&&(he=4),ve===null||(xn&268435455)===0&&(La&268435455)===0||Ut(ve,be)}function ka(e,t){var n=V;V|=2;var r=Rd();(ve!==e||be!==t)&&(bt=null,mn(e,t));do try{f0();break}catch(a){Zd(e,a)}while(!0);if(Hl(),V=n,va.current=r,pe!==null)throw Error(C(261));return ve=null,be=0,he}function f0(){for(;pe!==null;)ep(pe)}function m0(){for(;pe!==null&&!Uf();)ep(pe)}function ep(e){var t=rp(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?tp(e):pe=t,ns.current=null}function tp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=i0(n,t,Je),n!==null){pe=n;return}}else{if(n=l0(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);he===0&&(he=5)}function cn(e,t,n){var r=X,a=et.transition;try{et.transition=null,X=1,h0(e,t,n,r)}finally{et.transition=a,X=r}return null}function h0(e,t,n,r){do qn();while(Ht!==null);if((V&6)!==0)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Qf(e,i),e===ve&&(pe=ve=null,be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Uo||(Uo=!0,op(ta,function(){return qn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=et.transition,et.transition=null;var l=X;X=1;var s=V;V|=4,ns.current=null,u0(e,n),qd(n,e),Fm(Ri),ra=!!Zi,Ri=Zi=null,e.current=n,c0(n,e,a),Wf(),V=s,X=l,et.transition=i}else e.current=n;if(Uo&&(Uo=!1,Ht=e,xa=a),i=e.pendingLanes,i===0&&(qt=null),Vf(n.stateNode,r),We(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(ya)throw ya=!1,e=xl,xl=null,e;return(xa&1)!==0&&e.tag!==0&&qn(),i=e.pendingLanes,(i&1)!==0?e===kl?Br++:(Br=0,kl=e):Br=0,nn(),null}function qn(){if(Ht!==null){var e=Bc(xa),t=et.transition,n=X;try{if(et.transition=null,X=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,xa=0,(V&6)!==0)throw Error(C(331));var a=V;for(V|=4,L=e.current;L!==null;){var i=L,l=i.child;if((L.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(L=c;L!==null;){var d=L;switch(d.tag){case 0:case 11:case 15:Dr(8,d,i)}var f=d.child;if(f!==null)f.return=d,L=f;else for(;L!==null;){d=L;var g=d.sibling,v=d.return;if(Gd(d),d===c){L=null;break}if(g!==null){g.return=v,L=g;break}L=v}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}L=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,L=l;else e:for(;L!==null;){if(i=L,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Dr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,L=m;break e}L=i.return}}var p=e.current;for(L=p;L!==null;){l=L;var h=l.child;if((l.subtreeFlags&2064)!==0&&h!==null)h.return=l,L=h;else e:for(l=p;L!==null;){if(s=L,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:Ta(9,s)}}catch(N){le(s,s.return,N)}if(s===l){L=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,L=y;break e}L=s.return}}if(V=a,nn(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(wa,e)}catch{}r=!0}return r}finally{X=n,et.transition=t}}return!1}function sc(e,t,n){t=tr(n,t),t=Bd(e,t,1),e=Xt(e,t,1),t=Ae(),e!==null&&(Rr(e,1,t),We(e,t))}function le(e,t,n){if(e.tag===3)sc(e,e,n);else for(;t!==null;){if(t.tag===3){sc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(qt===null||!qt.has(r))){e=tr(n,e),e=Id(t,e,1),t=Xt(t,e,1),e=Ae(),t!==null&&(Rr(t,1,e),We(t,e));break}}t=t.return}}function g0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(be&n)===n&&(he===4||he===3&&(be&130023424)===be&&500>ce()-os?mn(e,0):rs|=n),We(e,t)}function np(e,t){t===0&&((e.mode&1)===0?t=1:(t=Mo,Mo<<=1,(Mo&130023424)===0&&(Mo=4194304)));var n=Ae();e=zt(e,t),e!==null&&(Rr(e,t,n),We(e,n))}function v0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),np(e,n)}function y0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),np(e,n)}var rp;rp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Oe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Oe=!1,a0(e,t,n);Oe=(e.flags&131072)!==0}else Oe=!1,te&&(t.flags&1048576)!==0&&ld(t,ca,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xo(e,t),e=t.pendingProps;var a=Qn(t,Te.current);Xn(t,n),a=Ql(null,t,r,e,a,n);var i=Zl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(i=!0,sa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Gl(t),a.updater=_a,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=dl(null,t,r,!0,i,n)):(t.tag=0,te&&i&&Ol(t),De(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xo(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=k0(r),e=st(r,e),a){case 0:t=cl(null,t,r,e,n);break e;case 1:t=Zu(null,t,r,e,n);break e;case 11:t=Yu(null,t,r,e,n);break e;case 14:t=Qu(null,t,r,st(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),cl(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),Zu(e,t,r,a,n);case 3:e:{if(jd(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,a=i.element,fd(e,t),fa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=tr(Error(C(423)),t),t=Ru(e,t,r,n,a);break e}else if(r!==a){a=tr(Error(C(424)),t),t=Ru(e,t,r,n,a);break e}else for(Ve=Kt(t.stateNode.containerInfo.firstChild),Ge=t,te=!0,ct=null,n=dd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===a){t=_t(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return md(t),e===null&&al(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,l=a.children,el(r,a)?l=null:i!==null&&el(r,i)&&(t.flags|=32),Od(e,t),De(e,t,l,n),t.child;case 6:return e===null&&al(t),null;case 13:return Ud(e,t,n);case 4:return Kl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Rn(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),Yu(e,t,r,a,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Z(da,r._currentValue),r._currentValue=l,i!==null)if(ft(i.value,l)){if(i.children===a.children&&!je.current){t=_t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Et(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),il(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),il(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}De(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,Xn(t,n),a=tt(a),r=r(a),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,a=st(r,t.pendingProps),a=st(r.type,a),Qu(e,t,r,a,n);case 15:return Fd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:st(r,a),Xo(e,t),t.tag=1,Ue(r)?(e=!0,sa(t)):e=!1,Xn(t,n),Ad(t,r,a),sl(t,r,a,n),dl(null,t,r,!0,e,n);case 19:return Wd(e,t,n);case 22:return $d(e,t,n)}throw Error(C(156,t.tag))};function op(e,t){return Lc(e,t)}function x0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Re(e,t,n,r){return new x0(e,t,n,r)}function ss(e){return e=e.prototype,!(!e||!e.isReactComponent)}function k0(e){if(typeof e=="function")return ss(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ml)return 11;if(e===zl)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=Re(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Qo(e,t,n,r,a,i){var l=2;if(r=e,typeof e=="function")ss(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Dn:return hn(n.children,a,i,t);case Cl:l=8,a|=8;break;case Pi:return e=Re(12,n,t,a|2),e.elementType=Pi,e.lanes=i,e;case Di:return e=Re(13,n,t,a),e.elementType=Di,e.lanes=i,e;case Ai:return e=Re(19,n,t,a),e.elementType=Ai,e.lanes=i,e;case mc:return Pa(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:l=10;break e;case fc:l=9;break e;case Ml:l=11;break e;case zl:l=14;break e;case $t:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Re(l,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function hn(e,t,n,r){return e=Re(7,e,r,t),e.lanes=n,e}function Pa(e,t,n,r){return e=Re(22,e,r,t),e.elementType=mc,e.lanes=n,e.stateNode={isHidden:!1},e}function _i(e,t,n){return e=Re(6,e,null,t),e.lanes=n,e}function Ti(e,t,n){return t=Re(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function b0(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fi(0),this.expirationTimes=fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fi(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function us(e,t,n,r,a,i,l,s,u){return e=new b0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Re(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gl(i),e}function w0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function ap(e){if(!e)return Rt;e=e._reactInternals;e:{if(wn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ue(n))return ad(e,n,t)}return t}function ip(e,t,n,r,a,i,l,s,u){return e=us(n,r,!0,e,a,i,l,s,u),e.context=ap(null),n=e.current,r=Ae(),a=Yt(n),i=Et(r,a),i.callback=t??null,Xt(n,i,a),e.current.lanes=a,Rr(e,a,r),We(e,r),e}function Da(e,t,n,r){var a=t.current,i=Ae(),l=Yt(a);return n=ap(n),t.context===null?t.context=n:t.pendingContext=n,t=Et(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Xt(a,t,l),e!==null&&(pt(e,a,l,i),Vo(e,a,l)),l}function ba(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function uc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function cs(e,t){uc(e,t),(e=e.alternate)&&uc(e,t)}function N0(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ds(e){this._internalRoot=e}Aa.prototype.render=ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Da(e,t,null,null)};Aa.prototype.unmount=ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;kn(function(){Da(null,e,null,null)}),t[Mt]=null}};function Aa(e){this._internalRoot=e}Aa.prototype.unstable_scheduleHydration=function(e){if(e){var t=$c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jt.length&&t!==0&&t<jt[n].priority;n++);jt.splice(n,0,e),n===0&&jc(e)}};function ps(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function cc(){}function S0(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=ba(l);i.call(c)}}var l=ip(t,r,e,0,null,!1,!1,"",cc);return e._reactRootContainer=l,e[Mt]=l.current,Jr(e.nodeType===8?e.parentNode:e),kn(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=ba(u);s.call(c)}}var u=us(e,0,!1,null,null,!1,!1,"",cc);return e._reactRootContainer=u,e[Mt]=u.current,Jr(e.nodeType===8?e.parentNode:e),kn(function(){Da(t,u,n,r)}),u}function Ia(e,t,n,r,a){var i=n._reactRootContainer;if(i){var l=i;if(typeof a=="function"){var s=a;a=function(){var u=ba(l);s.call(u)}}Da(t,l,e,a)}else l=S0(n,t,e,a,r);return ba(l)}Ic=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Er(t.pendingLanes);n!==0&&(Ll(t,n|1),We(t,ce()),(V&6)===0&&(nr=ce()+500,nn()))}break;case 13:kn(function(){var r=zt(e,1);if(r!==null){var a=Ae();pt(r,e,1,a)}}),cs(e,1)}};Pl=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Ae();pt(t,e,134217728,n)}cs(e,134217728)}};Fc=function(e){if(e.tag===13){var t=Yt(e),n=zt(e,t);if(n!==null){var r=Ae();pt(n,e,t,r)}cs(e,t)}};$c=function(){return X};Oc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Ji=function(e,t,n){switch(t){case"input":if(Fi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=Ca(r);if(!a)throw Error(C(90));gc(r),Fi(r,a)}}}break;case"textarea":yc(e,n);break;case"select":t=n.value,t!=null&&Jn(e,!!n.multiple,t,!1)}};Ec=as;Cc=kn;var E0={usingClientEntryPoint:!1,Events:[to,Fn,Ca,Nc,Sc,as]},br={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},C0={bundleType:br.bundleType,version:br.version,rendererPackageName:br.rendererPackageName,rendererConfig:br.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=_c(e),e===null?null:e.stateNode},findFiberByHostInstance:br.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(wr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!wr.isDisabled&&wr.supportsFiber))try{wa=wr.inject(C0),xt=wr}catch{}var wr;qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E0;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ps(t))throw Error(C(200));return w0(e,t,null,n)};qe.createRoot=function(e,t){if(!ps(e))throw Error(C(299));var n=!1,r="",a=lp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=us(e,1,!1,null,null,n,!1,r,a),e[Mt]=t.current,Jr(e.nodeType===8?e.parentNode:e),new ds(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=_c(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return kn(e)};qe.hydrate=function(e,t,n){if(!Ba(t))throw Error(C(200));return Ia(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!ps(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",l=lp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=ip(t,null,e,1,n??null,a,!1,i,l),e[Mt]=t.current,Jr(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Aa(t)};qe.render=function(e,t,n){if(!Ba(t))throw Error(C(200));return Ia(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!Ba(e))throw Error(C(40));return e._reactRootContainer?(kn(function(){Ia(null,null,e,!1,function(){e._reactRootContainer=null,e[Mt]=null})}),!0):!1};qe.unstable_batchedUpdates=as;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ba(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ia(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426"});var dp=ln((lg,cp)=>{"use strict";function up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(up)}catch(e){console.error(e)}}up(),cp.exports=sp()});var fp=ln(fs=>{"use strict";var pp=dp();fs.createRoot=pp.createRoot,fs.hydrateRoot=pp.hydrateRoot;var sg});var o=Ds(Ra()),$p=Ds(fp()),ja=Date.now();function ye(){return ja+=1,ja}var Ua=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function ir(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(a=>a.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function M0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function j(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function rt(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Pt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function Dt(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function ms(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Va(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(j(0)))n=0;else if(t.has(j(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,a=n,i=0,l=!0,s=!1;for(;;)if(t.has(j(a)))r++,i++,!l&&i>=7&&(l=!0,i=0),a-=1;else if(l)l=!1,i=0,s=!0,a-=1;else break;return{streak:r,freezeUsed:s}}function hs(e){return Va(e).streak}var z0=[15,30,45,60,90,120],Ga={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},open(e){this.fn&&this.fn(e)}},io={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},propagate(e,t,n){this.fn&&this.fn(e,t,n)}},mp="tasksh.links.v1",Op={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},Cn=(e,t)=>`${e}:${t}`,jp=e=>{let t=String(e).indexOf(":");return{kind:String(e).slice(0,t),id:Number(String(e).slice(t+1))}};function Up(e,t){let n=[];for(let[r,a]of e)r===t?n.push(a):a===t&&n.push(r);return n}function _0(e,t,n){return e.some(([r,a])=>r===t&&a===n||r===n&&a===t)}function T0(e,t,n){return t===n||_0(e,t,n)?e:[...e,[t,n]]}function L0(e,t,n){return e.filter(([r,a])=>!(r===t&&a===n||r===n&&a===t))}function hp(e,t){let{kind:n,id:r}=jp(e),a=n==="routine"?t.routines:n==="good"?t.goodHabits:n==="vault"?t.vaultHabits:null;if(!a)return null;let i=a.find(l=>l.id===r);return i?{kind:n,id:r,label:i.label,meta:Op[n]?.label||n}:null}function P0(e,t,n,r,a){let i=Up(n,e);if(!i.length)return 0;let l=(u,c)=>u.map(d=>{if(d.id!==c)return d;let f=d.history||[],g=f.includes(a);return t===g?d:{...d,history:t?[...f,a]:f.filter(v=>v!==a)}}),s={routine:[],good:[],vault:[]};for(let u of i){let{kind:c,id:d}=jp(u);s[c]&&s[c].push(d)}return s.routine.length&&r.setRoutines&&r.setRoutines(u=>s.routine.reduce((c,d)=>l(c,d),u)),s.good.length&&r.setGoodHabits&&r.setGoodHabits(u=>s.good.reduce((c,d)=>l(c,d),u)),s.vault.length&&r.setVaultHabits&&r.setVaultHabits(u=>s.vault.reduce((c,d)=>l(c,d),u)),i.length}function D0(){let[e,t]=(0,o.useState)(()=>Ie(mp,[]));return(0,o.useEffect)(()=>{try{localStorage.setItem(mp,JSON.stringify(e))}catch{}},[e]),{links:e,setLinks:t}}var Wa="tasksh.meta.v1";function Ha(e){try{let t=Ie(Wa,{});localStorage.setItem(Wa,JSON.stringify({...t,...e}))}catch{}}var gp="tasksh.achievements.v1",vp="tasksh.wallet.v1",ao=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function Wp(e){return ao.find(t=>t.id===e)}function A0(e,t){let n=new Set(t),r=[];for(let a of ao){if(n.has(a.id))continue;let i=!1;try{i=!!a.test(e)}catch{i=!1}i&&r.push(a.id)}return r}var B0=e=>20+e*5;function I0(e){let[t,n]=(0,o.useState)(()=>Ie(gp,[])),[r,a]=(0,o.useState)(()=>Ie(vp,{coins:0})),[i,l]=(0,o.useState)([]);(0,o.useEffect)(()=>{try{localStorage.setItem(gp,JSON.stringify(t))}catch{}},[t]),(0,o.useEffect)(()=>{try{localStorage.setItem(vp,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let c=A0({...e,coins:r.coins},t);if(!c.length)return;n(f=>[...f,...c]),l(f=>[...f,...c]);let d=c.reduce((f,g)=>f+(Wp(g)?.coins||0),0);d&&a(f=>({...f,coins:f.coins+d}))},[e,t,r.coins]);let s=(0,o.useCallback)(c=>a(d=>({...d,coins:Math.max(0,d.coins+c)})),[]),u=(0,o.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var on={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},yp="tasksh.pet.v1",Mn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function Oa(e){let t=Mn[0];for(let n of Mn)e>=n.minLevel&&(t=n);return t}function ys(e){return Mn.find(t=>t.minLevel>e)||null}var xp={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},Sn=e=>Math.max(0,Math.min(100,Math.round(e)));function kp(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let a=i=>r*i;return{...e,happiness:Sn(e.happiness-a(.55)),energy:Sn(e.energy-a(.75)),friendship:Sn(e.friendship-a(.12)),intelligence:e.intelligence,lastTick:t}}var F0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function gs(e,t){let n=F0[t];return n?{...e,happiness:Sn(e.happiness+(n.happiness||0)),energy:Sn(e.energy+(n.energy||0)),friendship:Sn(e.friendship+(n.friendship||0)),intelligence:Sn(e.intelligence+(n.intelligence||0))}:e}function ws(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function Hp(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function rn(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function $0(e){let{pet:t,level:n,hour:r,doneToday:a,totalToday:i,streak:l,phase:s}=e,u=ws(t),c=Math.floor(Date.now()/36e5);return t.energy<22?rn(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&a===i?rn([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?rn([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):a===0&&r>=14?rn(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?rn(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?rn(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?rn(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":rn([`${a} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function O0(e){let{pet:t,level:n,doneToday:r,totalToday:a,streak:i,routineNow:l,nextRoutine:s}=e,u=ws(t);return[`pet: ${t.name}, ${Mn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${Hp(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${a} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function j0(e,t){let[n,r]=(0,o.useState)(()=>{let d=Ie(yp,null),f=d?{...xp,...d}:{...xp,born:Date.now(),lastTick:Date.now()};return kp(f,Date.now())}),[a,i]=(0,o.useState)(null);(0,o.useEffect)(()=>{try{localStorage.setItem(yp,JSON.stringify(n))}catch{}},[n]),(0,o.useEffect)(()=>{let d=setInterval(()=>r(f=>kp(f,Date.now())),3e5);return()=>clearInterval(d)},[]);let l=(0,o.useMemo)(()=>Oa(e),[e]);(0,o.useEffect)(()=>{if(l.stage>n.stage){let d=n.stage;i({from:d,to:l.stage}),r(f=>gs({...f,stage:l.stage},"levelUp")),A.success()}else l.stage<n.stage&&r(d=>({...d,stage:l.stage}))},[l.stage,n.stage]);let s=(0,o.useCallback)(d=>{r(f=>gs(f,d))},[]);(0,o.useEffect)(()=>on.on(d=>r(f=>gs(f,d))),[]);let u=(0,o.useCallback)(d=>{let f=String(d||"").trim().slice(0,14);f&&r(g=>({...g,name:f}))},[]),c=(0,o.useCallback)((d,f)=>{r(g=>({...g,chats:d==="user"?g.chats+1:g.chats,log:[...g.log||[],{role:d,text:String(f).slice(0,240)}].slice(-8)}))},[]);return{pet:n,form:l,mood:ws(n),evolution:a,clearEvolution:()=>i(null),nudge:s,rename:u,remember:c}}var xs=o.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:a=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,d=c-s*.8-u*.62-(l>=3?5:0),f=4.6-l*.3,g=Math.min(6+l*5.2,Math.max(4,d-u-9)),v=9+l*1.1,k=9+l*5.4,x=33+l*5.2,w=l>=3,m=l>=4,p=l>=6,h=l>=5,y=l>=2?Math.min(4,l-1):0,N=n==="sleepy"||n==="tired",b=n==="joyful",_=n==="low"||n==="drained",S=N?.9:f*(b?1.16:1)*2,U=_?`M 56 ${d+9} q 8 -5 16 0`:b?`M 55 ${d+6} q 9 8 18 0`:`M 57 ${d+7} q 7 4 14 0`;return o.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${a?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":Mn[l].scale},role:"img","aria-label":`${Mn[l].name}, ${n}`},o.default.createElement("defs",null,o.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},o.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),o.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),o.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},o.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),o.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),o.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:x,fill:`url(#pg-aura-${l})`}),m&&o.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},o.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),o.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),o.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&o.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),w&&o.default.createElement("rect",{x:"59",y:d+u-5,width:"10",height:Math.max(0,c-s*.7-d-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),h&&o.default.createElement("g",{opacity:"0.8"},[0,1,2].map(D=>o.default.createElement("path",{key:D,d:`M ${64-s*.72+D*3} ${c-6-D*7} l -${6+D} -${5+D*2} l ${9+D} ${1+D} Z`,fill:"var(--accent2)"}))),o.default.createElement("g",{className:"pet-body"},o.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),o.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:y}).map((D,P)=>o.default.createElement("circle",{key:P,cx:50+P*14,cy:68+P%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),o.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("g",{className:"pet-head"},o.default.createElement("path",{d:`M ${64-v} ${d-u*.72}
                  q -3 -${g} 3 -${g*1.25}
                  q 5 ${g*.45} 4 ${g*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),o.default.createElement("path",{d:`M ${64+v} ${d-u*.72}
                  q 3 -${g} -3 -${g*1.25}
                  q -5 ${g*.45} -4 ${g*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),p&&o.default.createElement("g",{className:"pet-crown"},o.default.createElement("path",{d:`M 51 ${d-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),o.default.createElement("circle",{cx:"64",cy:d-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),o.default.createElement("circle",{cx:"64",cy:d,r:u,fill:`url(#pg-body-${l})`}),N?o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:`M ${64-8.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),o.default.createElement("path",{d:`M ${64+.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):o.default.createElement("g",{className:"pet-eyes"},o.default.createElement("ellipse",{cx:64-7.5,cy:d,rx:f,ry:S/2,fill:"var(--bg)"}),o.default.createElement("ellipse",{cx:64+7.5,cy:d,rx:f,ry:S/2,fill:"var(--bg)"}),o.default.createElement("circle",{cx:64-6.2,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),o.default.createElement("circle",{cx:64+8.8,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),o.default.createElement("path",{d:U,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&o.default.createElement(o.default.Fragment,null,o.default.createElement("ellipse",{cx:49,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),o.default.createElement("ellipse",{cx:79,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&o.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((D,P)=>o.default.createElement("circle",{key:P,cx:"64",cy:c-8-x,r:1.6+P*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${P*(360/Math.min(4,l))}deg)`}}))))}),lr=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],bp=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function wp(e){for(let t of bp)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return bp[2]}function U0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var W0=o.default.memo(function({theme:t,phase:n,calm:r,scoped:a=!1}){let i=t.ambient.particle,l=a?"amb-layer amb-scoped":"amb-layer",s=(0,o.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(d,f)=>{let g=i==="bubbles"?3+f%4*2:2+f%3;return{left:`${(f*37+11)%100}%`,size:g,delay:`${-(f*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+f%7*4}s`}}),[i]),u=(0,o.useMemo)(()=>n.stars?Array.from({length:34},(c,d)=>({left:`${(d*29+7)%100}%`,top:`${(d*53+13)%62}%`,op:.2+d*37%60/100})):[],[n.stars]);return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement("div",{className:`${l} amb-blobs`}),o.default.createElement("div",{className:`${l} amb-time`},o.default.createElement("div",{className:"amb-ray"})),u.length>0&&o.default.createElement("div",{className:`${l} amb-stars`},u.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,top:c.top,opacity:c.op}}))),s.length>0&&o.default.createElement("div",{className:`${l} amb-dust`},s.map((c,d)=>o.default.createElement("span",{key:d,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),o.default.createElement("div",{className:`${l} amb-grain`}),r&&o.default.createElement("div",{className:"calm-breath"}))}),Np="tasksh.calm.v1",Sp="tasksh.ambience.v1";function H0(e){let[t,n]=(0,o.useState)(()=>{try{return localStorage.getItem(Ep)||Fa}catch{return Fa}}),[r,a]=(0,o.useState)(()=>{try{return localStorage.getItem(Np)==="1"}catch{return!1}}),[i,l]=(0,o.useState)(()=>{try{return localStorage.getItem(Sp)!=="0"}catch{return!0}}),[s,u]=(0,o.useState)(()=>wp(ir().hour)),c=(0,o.useMemo)(()=>J0(t),[t]);(0,o.useEffect)(()=>{!ks(c,e)&&c.id!==Fa&&n(Fa)},[c,e]),(0,o.useEffect)(()=>{V0(c);try{localStorage.setItem(Ep,c.id)}catch{}},[c]),(0,o.useEffect)(()=>{U0(s)},[s]),(0,o.useEffect)(()=>{let f=setInterval(()=>{let g=wp(ir().hour);u(v=>v.id===g.id?v:g)},12e4);return()=>clearInterval(f)},[]),(0,o.useEffect)(()=>{let f=document.documentElement;f.style.setProperty("--calm",r?"1":"0"),f.style.setProperty("--motion-scale",r?"1.9":"1"),f.classList.toggle("calm-mode",r);try{localStorage.setItem(Np,r?"1":"0")}catch{}},[r]);let d=(0,o.useMemo)(()=>lr.filter(f=>ks(f,e)),[e]);return(0,o.useEffect)(()=>{document.documentElement.classList.toggle("no-ambience",!i);try{localStorage.setItem(Sp,i?"1":"0")}catch{}},[i]),{theme:c,themeId:t,setThemeId:n,themes:lr,unlocked:d,phase:s,calm:r,setCalm:a,ambience:i,setAmbience:l}}var Fa="terminal",Ep="tasksh.theme.v1";function J0(e){return lr.find(t=>t.id===e)||lr[0]}function ks(e,t){return t>=e.unlockLevel}function V0(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((a,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${a[0]}, ${a[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var Jp="tasksh.sound.v1",ro=null;function G0(){if(!ro){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;ro=new e}return ro.state==="suspended"&&ro.resume(),ro}function Vp(){try{let e=localStorage.getItem(Jp);return e===null?!0:e==="1"}catch{return!0}}function K0(e){try{localStorage.setItem(Jp,e?"1":"0")}catch{}}function Nn(e){if(!Vp())return;let t=G0();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:a=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+a),c.gain.setValueAtTime(1e-4,n+a),c.gain.exponentialRampToValueAtTime(s,n+a+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+a+i),u.connect(c),c.connect(t.destination),u.start(n+a),u.stop(n+a+i+.02)})}var A={click:()=>Nn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>Nn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>Nn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>Nn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>Nn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>Nn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function X0(){let[e,t]=(0,o.useState)(Vp());return[e,()=>{let r=!e;t(r),K0(r),r&&Nn([{freq:720,dur:.05,gain:.04}])}]}function q0(e,t=550){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(e),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let l=a.current,s=e;if(l===s)return;let u=performance.now(),c=f=>1-Math.pow(1-f,3),d=f=>{let g=f-u,v=Math.min(1,g/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(d):a.current=s};return i.current=requestAnimationFrame(d),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function Lt({value:e,className:t,suffix:n=""}){let r=q0(e);return o.default.createElement("span",{className:t},r,n)}function Y0({axes:e,size:t=220,maxValue:n}){let[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let w=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(w)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(w=>w.value)),d=w=>Math.PI*2*w/i-Math.PI/2,f=(w,m)=>{let p=d(w);return[l+Math.cos(p)*u*m,s+Math.sin(p)*u*m]},g=i>6?46:22,v=[.25,.5,.75,1],x=e.map((w,m)=>f(m,r?Math.max(.04,w.value/c):.02)).map((w,m)=>`${m===0?"M":"L"}${w[0].toFixed(1)},${w[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`${-g} 0 ${t+g*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},v.map((w,m)=>{let h=e.map((y,N)=>f(N,w)).map((y,N)=>`${N===0?"M":"L"}${y[0].toFixed(1)},${y[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:m,d:h,className:"radar-ring"})}),e.map((w,m)=>{let p=f(m,1);return o.default.createElement("line",{key:m,x1:l,y1:s,x2:p[0],y2:p[1],className:"radar-spoke"})}),o.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((w,m)=>{let p=f(m,1.19),h=f(m,r?Math.max(.04,w.value/c):.02),y=Math.cos(d(m)),N=y>.25?"start":y<-.25?"end":"middle";return o.default.createElement("g",{key:w.key||m},o.default.createElement("circle",{cx:h[0],cy:h[1],r:i>6?2.8:3.5,fill:w.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:p[0],y:p[1],textAnchor:N,dominantBaseline:"middle",className:"radar-label"},w.label))}))}function Ns({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:a="#1E2228",label:i,sublabel:l}){let[s,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let x=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(x)},[]);let c=t/2-n,d=2*Math.PI*c,f=Math.max(0,Math.min(100,e)),g=d-(s?f/100:0)*d,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:a,strokeWidth:n}),o.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:g,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function Gp({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:a}){let[i,l]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let g=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(g)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((g,v)=>g+Math.max(0,v.value),0)),d=0,f=e.map(g=>{let v=Math.max(0,g.value),k=v/c,x=i?k*u:0,w=u-x,m=d/c*360;return d+=v,{...g,dash:x,gap:w,rotation:m,frac:k}});return o.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),f.map((g,v)=>o.default.createElement("circle",{key:g.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:g.color,strokeWidth:n,strokeDasharray:`${g.dash} ${g.gap}`,strokeDashoffset:0,transform:`rotate(${g.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:f.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},r!==void 0&&o.default.createElement("span",{className:"donut-center-label"},r),a&&o.default.createElement("span",{className:"donut-center-sublabel"},a)))}function Q0({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],a=0,i=t*7,l=Array.from({length:i},(d,f)=>a-(i-1-f)),s=Math.max(1,...l.map(d=>e[j(d)]||0)),u=[];for(let d=0;d<t;d++)u.push(l.slice(d*7,d*7+7));let c=d=>{if(!d)return 0;let f=d/s;return f>.75?4:f>.5?3:f>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},u.map((d,f)=>o.default.createElement("div",{className:"heatmap-col",key:f},d.map((g,v)=>{let k=j(g),x=e[k]||0,w=c(x);return o.default.createElement("span",{key:v,className:`heatmap-cell ${g===0?"today":""}`,style:{background:r[w],animationDelay:`${(f*7+v)*4}ms`},title:`${k}: ${x} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),r.map((d,f)=>o.default.createElement("span",{key:f,className:"heatmap-legend-cell",style:{background:d}})),o.default.createElement("span",null,"more")))}function Z0(e){let t=[],n=[];for(let r of e){let a=t.findIndex(i=>r.start>=i);a===-1?(a=t.length,t.push(r.end)):t[a]=r.end,n.push({...r,lane:a})}return{placed:n,laneCount:Math.max(1,t.length)}}function R0({routines:e,nowMinutes:t,doneToday:n=0}){let[r,a]=(0,o.useState)(!1),[i,l]=(0,o.useState)(0),[s,u]=(0,o.useState)(0),c=(0,o.useRef)(null),d=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let T=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(T)},[]),(0,o.useEffect)(()=>{if(!c.current)return;let T=c.current,I=new ResizeObserver(q=>{for(let Ne of q)l(Ne.contentRect.width)});return I.observe(T),l(T.getBoundingClientRect().width),()=>I.disconnect()},[]);let f=1440,g=j(0),v=e.map(T=>{let I=rt(T.time);return{r:T,start:I,end:I+Math.max(1,T.duration)}}),{placed:k,laneCount:x}=Z0(v),m=Math.max(i,24*82),p=m/f,h=m>i+1,y=t*p;(0,o.useEffect)(()=>{if(!c.current||!i||d.current)return;if(!h){d.current=!0;return}let T=c.current,I=Math.max(0,Math.min(y-i/2,m-i));T.scrollTo({left:I,behavior:"auto"}),d.current=!0},[i,y,m,h]),(0,o.useEffect)(()=>{let T=c.current;if(!T)return;let I=0,q=()=>{I||(I=requestAnimationFrame(()=>{u(T.scrollLeft),I=0}))};return T.addEventListener("scroll",q,{passive:!0}),u(T.scrollLeft),()=>{T.removeEventListener("scroll",q),cancelAnimationFrame(I)}},[i]);let N=()=>{let T=c.current;T&&(T.scrollTo({left:Math.max(0,Math.min(y-i/2,m-i)),behavior:"smooth"}),A.click())},b=38,_=6,S=8,U=S*2+x*b+(x-1)*_,D=p*60>=40?1:3,P=[];for(let T=0;T<=24;T+=D)P.push(T);let W=T=>{let I=T%24;return I===0?"12a":I===12?"12p":I>12?`${I-12}p`:`${I}a`},z=e.length,O=z?Math.round(n/z*100):0;return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-head"},o.default.createElement("div",{className:"timeline-head-left"},o.default.createElement("span",{className:"timeline-title"},"today's schedule"),z>0&&o.default.createElement("span",{className:"timeline-count"},n,"/",z," done")),h&&o.default.createElement("button",{className:"timeline-jump",onClick:N,title:"Jump to now"},"now")),z>0&&o.default.createElement("div",{className:"timeline-progress"},o.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${O}%`:"0%"}})),o.default.createElement("div",{className:"timeline-scroll",ref:c},o.default.createElement("div",{className:"timeline-inner",style:{width:m}},o.default.createElement("div",{className:"timeline-hours"},P.map(T=>o.default.createElement("div",{key:T,className:"timeline-hour",style:{left:T*60*p}},o.default.createElement("span",null,W(T))))),o.default.createElement("div",{className:"timeline-track",style:{height:U}},o.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*p}}),o.default.createElement("div",{className:"timeline-night",style:{left:1320*p,width:120*p}}),P.map(T=>o.default.createElement("div",{key:T,className:`timeline-gridline ${T%6===0?"major":""}`,style:{left:T*60*p}})),o.default.createElement("div",{className:"timeline-elapsed",style:{width:r?y:0}}),k.map(({r:T,start:I,lane:q},Ne)=>{let H=I*p,ne=Math.max(1,T.duration)*p,se=Math.max(4,Math.min(ne,m-H)),fe=(T.history||[]).includes(g),ot=ar(T.id),xe=Math.max(H,s),at=Math.min(H+se,s+i),Fe=Math.max(0,at-xe)>38,$=Math.max(0,Math.min(s-H,se-46)),Y=t>=I&&t<I+T.duration;return o.default.createElement("div",{key:T.id,className:`timeline-block ${fe?"done":""} ${Y?"active":""}`,style:{left:H,top:S+q*(b+_),width:r?se:0,height:b,transitionDelay:`${Math.min(Ne*18,260)}ms`,background:fe?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${ot}, ${ot}C4)`,boxShadow:fe?"none":`0 2px 10px ${ot}44`},title:`${T.label} \xB7 ${Pt(I)} \xB7 ${Dt(T.duration)}${fe?" \xB7 done":""}`},Fe&&o.default.createElement("span",{className:"timeline-block-label",style:$>0?{paddingLeft:$+8}:void 0},fe&&o.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),T.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:y}})))),h&&o.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var eh=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[j(-1),j(-2),j(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[j(-1),j(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[j(0),j(-1),j(-2),j(-3),j(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[j(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Ss(){let[e,t]=(0,o.useState)(ir());return(0,o.useEffect)(()=>{let n=setInterval(()=>t(ir()),1e3);return()=>clearInterval(n)},[]),e}function Es(e,t){return(0,o.useMemo)(()=>{let n=[...e].sort((i,l)=>rt(i.time)-rt(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&rt(n[i].time)<=t;i++)r=i;let a=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[a].id}},[e,t])}function th({routine:e,status:t,index:n,onDelete:r,onToggleToday:a,onSave:i}){let l=rt(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=Va(e.history),d=(e.history||[]).includes(j(0)),[f,g]=(0,o.useState)(0),v=(0,o.useRef)(!1),k=(0,o.useRef)(0),x=(0,o.useRef)(0),w=(0,o.useRef)(null),m=(0,o.useRef)(!1),[p,h]=(0,o.useState)(!1),[y,N]=(0,o.useState)(!1),[b,_]=(0,o.useState)(e.label),[S,U]=(0,o.useState)(e.time),[D,P]=(0,o.useState)(e.duration),[W,z]=(0,o.useState)(e.alternatives||[]),O=()=>{_(e.label),U(e.time),P(e.duration),z(e.alternatives||[]),N(!0)},T=()=>{let H=b.trim();H&&(i(e.id,{label:H,time:S||e.time,duration:Math.max(5,+D||e.duration),alternatives:W.map(ne=>ne.trim()).filter(Boolean)}),N(!1))},I=H=>{y||(v.current=!0,m.current=!1,w.current=null,k.current=H.clientX,x.current=H.clientY)},q=H=>{if(!v.current)return;let ne=H.clientX-k.current,se=H.clientY-x.current;if(w.current===null){if(Math.abs(ne)<6&&Math.abs(se)<6)return;if(w.current=Math.abs(ne)>Math.abs(se)?"x":"y",w.current==="y"){v.current=!1;return}}w.current==="x"&&(Math.abs(ne)>4&&(m.current=!0),g(Math.max(-120,Math.min(0,ne))))},Ne=()=>{v.current&&(v.current=!1,f<-70?(h(!0),setTimeout(()=>r(e.id),200)):(g(0),m.current||O()))};return o.default.createElement("div",{className:`routine-row-wrap ${p?"removing":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${f}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${d?"#2A2F36":ar(e.id)}`},onPointerDown:I,onPointerMove:q,onPointerUp:Ne,onPointerLeave:Ne,onPointerCancel:Ne},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${d?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),y?o.default.createElement("div",{className:"routine-edit",onPointerDown:H=>H.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:b,onChange:H=>_(H.target.value),onKeyDown:H=>H.key==="Enter"&&T(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:S,onChange:H=>U(H.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:D,onChange:H=>P(H.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),W.map((H,ne)=>o.default.createElement("div",{className:"alt-composer-row",key:ne},o.default.createElement("input",{type:"text",placeholder:`alternative ${ne+1}`,value:H,onChange:se=>{let fe=[...W];fe[ne]=se.target.value,z(fe)},onKeyDown:se=>se.key==="Enter"&&T()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>z(W.filter((se,fe)=>fe!==ne)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>z([...W,""])},"+ another option")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>N(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:T},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},Pt(l)),t==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&o.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),o.default.createElement("span",{className:"routine-span"},Pt(l)," \u2013 ",Pt(s)," \xB7 ",Dt(e.duration))),!y&&o.default.createElement("button",{className:"link-btn routine-link",onClick:H=>{H.stopPropagation(),Ga.open(Cn("routine",e.id)),A.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function nh({routines:e,setRoutines:t}){let n=Ss(),r=n.hour*60+n.minute,{sorted:a,currentId:i,nextId:l}=Es(e,r),s=a.find(z=>z.id===i),u=a.find(z=>z.id===l),[c,d]=(0,o.useState)(""),[f,g]=(0,o.useState)(()=>ms(r)),[v,k]=(0,o.useState)(30),[x,w]=(0,o.useState)(!1),[m,p]=(0,o.useState)([]),[h,y]=(0,o.useState)(!1),N=()=>{let z=c.trim();if(!z){w(!0),setTimeout(()=>w(!1),420),A.error();return}let O=f||ms(r),T=m.map(I=>I.trim()).filter(Boolean);t(I=>[...I,{id:ye(),time:O,label:z,duration:Math.max(5,+v||30),history:[],alternatives:T}]),d(""),g(ms(r)),k(30),p([]),y(!1),A.click()},b=z=>{t(O=>O.filter(T=>T.id!==z)),A.delete()},_=z=>{let O=j(0),T=!(e.find(I=>I.id===z)?.history||[]).includes(O);t(I=>I.map(q=>{if(q.id!==z)return q;let H=(q.history||[]).includes(O)?q.history.filter(ne=>ne!==O):[...q.history||[],O];return{...q,history:H.slice(-60)}})),io.propagate("routine",z,T),T?(A.success(),on.emit("routineDone")):A.click()},S=(z,O)=>t(T=>T.map(I=>I.id===z?{...I,...O}:I)),U=s?rt(s.time)+s.duration:0,D=u?(rt(u.time)-r+1440)%1440||1440:0,P=j(0),W=a.filter(z=>(z.history||[]).includes(P)).length;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},M0()),o.default.createElement("div",{className:"hero-divider"}),s?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),s.label),o.default.createElement("span",{className:"hero-sub"},"until ",Pt(U)," \xB7 next: ",u?.label," in ",Dt(D))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement(R0,{routines:a,nowMinutes:r,doneToday:W}),o.default.createElement("div",{className:`composer ${x?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:z=>d(z.target.value),onKeyDown:z=>z.key==="Enter"&&N()}),o.default.createElement("input",{type:"time",className:"time-input",value:f,onChange:z=>g(z.target.value)}),o.default.createElement("button",{type:"button",className:`alt-toggle-btn ${h?"active":""}`,onClick:()=>y(z=>!z),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),o.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),h&&o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),m.map((z,O)=>o.default.createElement("div",{className:"alt-composer-row",key:O},o.default.createElement("input",{type:"text",placeholder:`alternative ${O+1}, e.g. "Drawing"`,value:z,onChange:T=>{let I=[...m];I[O]=T.target.value,p(I)},onKeyDown:T=>T.key==="Enter"&&N()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>p(m.filter((T,I)=>I!==O)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>p([...m,""])},"+ another option")),o.default.createElement("div",{className:"duration-chips"},z0.map(z=>o.default.createElement("button",{key:z,className:v===z?"active":"",onClick:()=>k(z)},Dt(z))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:z=>k(+z.target.value||5)})),a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):a.map((z,O)=>o.default.createElement(th,{key:z.id,routine:z,index:O,status:z.id===i?"current":z.id===l?"next":"idle",onDelete:b,onToggleToday:_,onSave:S})))}function rh(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,a=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:a,monthLabel:i}}function oh(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function Kp(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(j(r))&&n++;return n}function ah(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(j(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var ih=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[j(0),j(-1),j(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[j(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[j(0)]}],lh=[{id:1,name:"Notion Template",dueDate:j(7),tasks:[{id:ye(),text:"Design layout",done:!0},{id:ye(),text:"Write docs",done:!1},{id:ye(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:j(7),tasks:[{id:ye(),text:"Script draft",done:!1},{id:ye(),text:"Record",done:!1}]}];function sh({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:a}=rh(),i=new Set(e||[]),l=j(0),s=Array.from({length:r},(u,c)=>c+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},a),o.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=oh(t,n,u);return o.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function uh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let a=(e.history||[]).includes(j(0)),{streak:i,freezeUsed:l}=Va(e.history),s=Kp(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,d]=(0,o.useState)(!1),[f,g]=(0,o.useState)(e.icon),[v,k]=(0,o.useState)(e.label),[x,w]=(0,o.useState)(e.weeklyGoal),m=()=>{g(e.icon),k(e.label),w(e.weeklyGoal),d(!0)},p=()=>{let h=v.trim();h&&(r(e.id,{icon:f.trim()||e.icon,label:h,weeklyGoal:Math.max(1,Math.min(7,+x||e.weeklyGoal))}),d(!1))};return c?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:f,onChange:h=>g(h.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:h=>k(h.target.value),onKeyDown:h=>h.key==="Enter"&&p(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:x,onChange:h=>w(h.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:p},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${ar(e.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:ar(e.id)}},e.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},e.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:m,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(sh,{history:e.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement(Ns,{pct:u,size:34,stroke:3.5,color:ar(e.id)}),o.default.createElement("span",{className:"vault-card-pct"},u,"% ",o.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:"link-btn",onClick:h=>{h.stopPropagation(),Ga.open(Cn("vault",e.id)),A.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`vault-check ${a?"done":""}`,onClick:()=>t(e.id)},a?"\u2713 completed today":"mark complete today"))}function ch({habits:e,setHabits:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(7),[l,s]=(0,o.useState)(!1),u=()=>{let g=n.trim();if(!g){s(!0),setTimeout(()=>s(!1),420),A.error();return}t(v=>[...v,{id:ye(),icon:"\u25C6",label:g,weeklyGoal:a,history:[]}]),r(""),i(7),A.click()},c=g=>{t(v=>v.filter(k=>k.id!==g)),A.delete()},d=(g,v)=>t(k=>k.map(x=>x.id===g?{...x,...v}:x)),f=g=>{let v=j(0),k=!(e.find(x=>x.id===g)?.history||[]).includes(v);t(x=>x.map(w=>{if(w.id!==g)return w;let p=(w.history||[]).includes(v)?w.history.filter(h=>h!==v):[...w.history||[],v];return{...w,history:p.slice(-370)}})),io.propagate("vault",g,k),k?(A.success(),on.emit("vaultDone")):A.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(g=>o.default.createElement(uh,{key:g.id,habit:g,onToggleToday:f,onDelete:c,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:g=>r(g.target.value),onKeyDown:g=>g.key==="Enter"&&u()}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(g=>o.default.createElement("button",{key:g,className:a===g?"active":"",onClick:()=>i(g)},g,"x/wk"))))}function dh({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(t.text),c=()=>{let d=s.trim();d&&a(e,t.id,d),l(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:s,onChange:d=>u(d.target.value),onKeyDown:d=>d.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement(Zp,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function ph({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:a,onEditTask:i,onSave:l}){let[s,u]=(0,o.useState)(""),c=e.tasks.length,d=e.tasks.filter(b=>b.done).length,f=c?Math.round(d/c*100):0,g=ah(e.dueDate),[v,k]=(0,o.useState)(!1),[x,w]=(0,o.useState)(e.name),[m,p]=(0,o.useState)(e.dueDate||""),h=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},y=()=>{w(e.name),p(e.dueDate||""),k(!0)},N=()=>{let b=x.trim();b&&(l(e.id,{name:b,dueDate:m||null}),k(!1))};return v?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:x,onChange:b=>w(b.target.value),onKeyDown:b=>b.key==="Enter"&&N(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:m,onChange:b=>p(b.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:N},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${ar(e.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},e.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),g&&o.default.createElement("span",{className:`project-due ${g.overdue?"overdue":""}`},g.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${f}%`}})),o.default.createElement("span",{className:"vault-card-pct"},d,"/",c," tasks \xB7 ",f,"%"),o.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>o.default.createElement(dh,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:a,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&h()})))}function fh({projects:e,setProjects:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[l,s]=(0,o.useState)(!1),u=()=>{let x=n.trim();if(!x){s(!0),setTimeout(()=>s(!1),420),A.error();return}t(w=>[...w,{id:ye(),name:x,dueDate:a||null,tasks:[]}]),r(""),i(""),A.click()},c=x=>{t(w=>w.filter(m=>m.id!==x)),A.delete()},d=(x,w)=>t(m=>m.map(p=>p.id===x?{...p,...w}:p)),f=(x,w)=>{t(m=>m.map(p=>p.id===x?{...p,tasks:[...p.tasks,{id:ye(),text:w,done:!1}]}:p)),A.click()},g=(x,w)=>{t(m=>m.map(p=>p.id!==x?p:{...p,tasks:p.tasks.map(h=>h.id===w?{...h,done:!h.done}:h)})),A.success()},v=(x,w)=>{t(m=>m.map(p=>p.id!==x?p:{...p,tasks:p.tasks.filter(h=>h.id!==w)})),A.delete()},k=(x,w,m)=>t(p=>p.map(h=>h.id!==x?h:{...h,tasks:h.tasks.map(y=>y.id===w?{...y,text:m}:y)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):e.map(x=>o.default.createElement(ph,{key:x.id,project:x,onDelete:c,onAddTask:f,onToggleTask:g,onDeleteTask:v,onEditTask:k,onSave:d}))),o.default.createElement("div",{className:`composer ${l?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:x=>r(x.target.value),onKeyDown:x=>x.key==="Enter"&&u()}),o.default.createElement("input",{type:"date",className:"time-input",value:a,onChange:x=>i(x.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function mh({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(ch,{habits:e,setHabits:t}),o.default.createElement(fh,{projects:n,setProjects:r}))}var He=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],lo=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],cg=He.reduce((e,t)=>(e[t.key]=lo.filter(n=>n.area===t.key),e),{});var Xp="tasksh.subareas.v1",Cp="tasksh.radarmode.v1";function hh(){let e=Ie(Xp,null);return!Array.isArray(e)||!e.length?lo:e.filter(t=>t&&t.key&&t.area&&He.some(n=>n.key===t.area))}function sr(e,t){return e.filter(n=>n.area===t)}function ur(e,t){if(t.sub&&e.some(r=>r.key===t.sub&&r.area===t.area))return t.sub;let n=e.find(r=>r.area===t.area);return n?n.key:null}function gh(e,t,n,r){let a=n.filter(l=>ur(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=r.filter(l=>ur(e,l)===t).reduce((l,s)=>l+s.xp*(s.history?.length||0),0);return a-i}function vh(){let[e,t]=(0,o.useState)(hh),[n,r]=(0,o.useState)(()=>{try{return localStorage.getItem(Cp)||"subs"}catch{return"subs"}});(0,o.useEffect)(()=>{try{localStorage.setItem(Xp,JSON.stringify(e))}catch{}},[e]),(0,o.useEffect)(()=>{try{localStorage.setItem(Cp,n)}catch{}},[n]);let a=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(f=>f.map(g=>g.key===u?{...g,label:d}:g))},[]),i=(0,o.useCallback)((u,c)=>{let d=String(c||"").trim().slice(0,18);d&&t(f=>{let g=d.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",v=g,k=2;for(;f.some(x=>x.key===v);)v=`${g}${k++}`;return[...f,{key:v,area:u,label:d}]})},[]),l=(0,o.useCallback)(u=>{t(c=>{let d=c.find(f=>f.key===u);return!d||sr(c,d.area).length<=1?c:c.filter(f=>f.key!==u)})},[]),s=(0,o.useCallback)(()=>t(lo),[]);return{subs:e,radarMode:n,setRadarMode:r,renameSub:a,addSub:i,removeSub:l,resetSubs:s}}var Mp=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function ar(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Mp[Math.abs(t)%Mp.length]}var oo=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function qp(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),a=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return r-a-i}function yh(e,t,n){let r=t.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),a=n.filter(i=>i.area===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-a}function En(e){return 12.5*(e-1)*(e+6)}function Yp(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-En(n),a=En(n+1)-En(n);return{level:n,into:r,span:a}}function xh(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[a,i]of t)for(;n>=a;)r+=i,n-=a;return r}function Qp(e){if(e<=oo.length)return oo[e-1];let t=e-oo.length+1;return`${oo[oo.length-1]} ${xh(t)}`}var kh=[{id:1,label:"Deep Work",area:"work",xp:40,history:[j(0),j(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[j(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],bh=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],wh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function Nh({habit:e,subs:t=lo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes(j(0)),[l,s]=(0,o.useState)(0),u=()=>{i||s(S=>S+1)},{streak:c,freezeUsed:d}=Va(e.history),f=He.find(S=>S.key===e.area)||He[0],[g,v]=(0,o.useState)(!1),[k,x]=(0,o.useState)(e.label),[w,m]=(0,o.useState)(e.area),[p,h]=(0,o.useState)(()=>ur(t,e)),[y,N]=(0,o.useState)(e.xp),b=()=>{x(e.label),m(e.area),h(ur(t,e)),N(e.xp),v(!0)},_=()=>{let S=k.trim();S&&(a(e.id,{label:S,area:w,sub:p,xp:Math.max(1,+y||e.xp)}),v(!1))};return g?o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:k,onChange:S=>x(S.target.value),onKeyDown:S=>S.key==="Enter"&&_(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},He.map(S=>o.default.createElement("button",{key:S.key,type:"button",className:`area-chip ${w===S.key?"active":""}`,style:{"--ac":S.color},onClick:()=>{m(S.key);let U=sr(t,S.key);h(U.length?U[0].key:null)}},S.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},sr(t,w).map(S=>o.default.createElement("button",{key:S.key,type:"button",className:`sub-chip ${p===S.key?"active":""}`,onClick:()=>h(S.key)},S.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:S=>N(S.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:_},"save")))):o.default.createElement("div",{className:`quest-habit-card good ${l?"just-completed":""}`,key:`g${e.id}`},l>0&&o.default.createElement("span",{className:"xp-pop",key:l},"+",e.xp),o.default.createElement("span",{className:"area-dot",style:{background:f.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",f.label,c>0?` \xB7 \u{1F525}${c}${d?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:"link-btn",onClick:S=>{S.stopPropagation(),Ga.open(Cn("good",e.id)),A.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-check ${i?"done":""}`,onClick:()=>{u(),n(e.id)},"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:i?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Sh({habit:e,subs:t=lo,onToggleToday:n,onDelete:r,onSave:a}){let i=(e.history||[]).includes(j(0)),l=He.find(y=>y.key===e.area)||He[0],s=Kp(e.history),[u,c]=(0,o.useState)(!1),[d,f]=(0,o.useState)(e.label),[g,v]=(0,o.useState)(e.area),[k,x]=(0,o.useState)(()=>ur(t,e)),[w,m]=(0,o.useState)(e.xp),p=()=>{f(e.label),v(e.area),x(ur(t,e)),m(e.xp),c(!0)},h=()=>{let y=d.trim();y&&(a(e.id,{label:y,area:g,sub:k,xp:Math.max(1,+w||e.xp)}),c(!1))};return u?o.default.createElement("div",{className:"quest-habit-card bad editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:d,onChange:y=>f(y.target.value),onKeyDown:y=>y.key==="Enter"&&h(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},He.map(y=>o.default.createElement("button",{key:y.key,type:"button",className:`area-chip ${g===y.key?"active":""}`,style:{"--ac":y.color},onClick:()=>{v(y.key);let N=sr(t,y.key);x(N.length?N[0].key:null)}},y.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},sr(t,g).map(y=>o.default.createElement("button",{key:y.key,type:"button",className:`sub-chip ${k===y.key?"active":""}`,onClick:()=>x(y.key)},y.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:w,onChange:y=>m(y.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>c(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:h},"save")))):o.default.createElement("div",{className:"quest-habit-card bad"},o.default.createElement("span",{className:"area-dot",style:{background:l.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",l.label," \xB7 ",s,"x this week")),o.default.createElement("button",{className:`quest-check bad-check ${i?"done":""}`,onClick:()=>n(e.id),"aria-label":"Log slip today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Eh({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:a}){let[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(e.label),[c,d]=(0,o.useState)(e.cost),f=()=>{u(e.label),d(e.cost),l(!0)},g=()=>{let v=s.trim();v&&(a(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&g(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>d(v.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:g},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},e.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},e.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function Ch({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:a,setRewards:i,tagCtl:l}){let[s,u]=(0,o.useState)("all"),[c,d]=(0,o.useState)(!1),f=l.subs,g=(0,o.useMemo)(()=>qp(e,n,a),[e,n,a]),{level:v,into:k,span:x}=Yp(g),w=Math.round(k/x*100),m=E=>{let F=j(0),de=!(e.find(G=>G.id===E)?.history||[]).includes(F);if(t(G=>G.map(Le=>{if(Le.id!==E)return Le;let cr=(Le.history||[]).includes(F)?Le.history.filter(mt=>mt!==F):[...Le.history||[],F];return{...Le,history:cr.slice(-370)}})),io.propagate("good",E,de),de){A.success(),on.emit("habitDone");let G=ir().hour;G<6&&Ha({earlyFinish:!0}),G>=0&&G<4&&Ha({lateFinish:!0})}else A.click()},p=E=>{let F=j(0),de=!(n.find(G=>G.id===E)?.history||[]).includes(F);r(G=>G.map(Le=>{if(Le.id!==E)return Le;let cr=(Le.history||[]).includes(F)?Le.history.filter(mt=>mt!==F):[...Le.history||[],F];return{...Le,history:cr.slice(-370)}})),de?(A.error(),on.emit("badHabit")):A.click()},h=E=>{t(F=>F.filter(de=>de.id!==E)),A.delete()},y=E=>{r(F=>F.filter(de=>de.id!==E)),A.delete()},N=(E,F)=>t(de=>de.map(G=>G.id===E?{...G,...F}:G)),b=(E,F)=>r(de=>de.map(G=>G.id===E?{...G,...F}:G)),_=E=>{let F=j(0);i(de=>de.map(G=>G.id===E?{...G,claimed:[...G.claimed||[],F]}:G)),A.success(),on.emit("rewardClaimed")},S=E=>{i(F=>F.filter(de=>de.id!==E)),A.delete()},U=(E,F)=>i(de=>de.map(G=>G.id===E?{...G,...F}:G)),[D,P]=(0,o.useState)(""),[W,z]=(0,o.useState)("work"),[O,T]=(0,o.useState)(20),[I,q]=(0,o.useState)(""),[Ne,H]=(0,o.useState)("work"),[ne,se]=(0,o.useState)(20),[fe,ot]=(0,o.useState)(""),[xe,at]=(0,o.useState)(100),At=()=>{let E=D.trim();E&&(t(F=>[...F,{id:ye(),label:E,area:W,xp:+O||10,history:[]}]),P(""),A.click())},Fe=()=>{let E=I.trim();E&&(r(F=>[...F,{id:ye(),label:E,area:Ne,xp:+ne||10,history:[]}]),q(""),A.click())},$=()=>{let E=fe.trim();E&&(i(F=>[...F,{id:ye(),label:E,cost:+xe||50,claimed:[]}]),ot(""),A.click())},Y=(0,o.useMemo)(()=>l.radarMode==="areas"?He.map(E=>({key:E.key,label:E.label,color:E.color,value:Math.max(0,yh(E.key,e,n))})):f.map(E=>({key:E.key,label:E.label,color:(He.find(F=>F.key===E.area)||{}).color,value:Math.max(0,gh(f,E.key,e,n))})),[l.radarMode,f,e,n]),ue=s==="all"?e:e.filter(E=>E.area===s),Se=s==="all"?n:n.filter(E=>E.area===s),zn=e.reduce((E,F)=>E+F.xp*(F.history?.length||0),0),an=n.reduce((E,F)=>E+F.xp*(F.history?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement(Ns,{pct:w,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${v}`,sublabel:Qp(v)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(Lt,{value:g})," ",o.default.createElement("small",null,"XP")),o.default.createElement("span",{className:"hero-xp-sub"},k,"/",x," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(Lt,{value:zn})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(Lt,{value:an})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement("div",{className:"radar-controls"},o.default.createElement("div",{className:"radar-mode"},o.default.createElement("button",{className:l.radarMode==="areas"?"active":"",onClick:()=>{l.setRadarMode("areas"),A.click()}},"4 areas"),o.default.createElement("button",{className:l.radarMode==="subs"?"active":"",onClick:()=>{l.setRadarMode("subs"),A.click()}},f.length," tags")),o.default.createElement("button",{className:"radar-edit",onClick:()=>d(!0)},"edit tags")),o.default.createElement(Y0,{axes:Y,size:252})),(zn>0||an>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(Gp,{size:120,stroke:16,centerLabel:g,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:zn,color:"#5EEAD4"},{key:"lost",label:"Lost",value:an,color:"#F0576B"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(Lt,{value:zn}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(Lt,{value:an})))))),o.default.createElement("div",{className:"area-filter"},o.default.createElement("button",{className:s==="all"?"active":"",onClick:()=>u("all")},"all"),He.map(E=>o.default.createElement("button",{key:E.key,className:s===E.key?"active":"",style:{"--ac":E.color},onClick:()=>{u(E.key),A.click()}},E.label))),c&&o.default.createElement(Lh,{tagCtl:l,onClose:()=>d(!1)}),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"GOOD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no good habits yet")):ue.map(E=>o.default.createElement(Nh,{key:E.id,habit:E,subs:f,onToggleToday:m,onDelete:h,onSave:N}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new good habit...",value:D,onChange:E=>P(E.target.value),onKeyDown:E=>E.key==="Enter"&&At()}),o.default.createElement("button",{className:"add-btn",onClick:At,"aria-label":"Add good habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},He.map(E=>o.default.createElement("button",{key:E.key,className:W===E.key?"active":"",onClick:()=>z(E.key)},E.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:O,onChange:E=>T(+E.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"BAD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no bad habits tracked")):Se.map(E=>o.default.createElement(Sh,{key:E.id,habit:E,subs:f,onToggleToday:p,onDelete:y,onSave:b}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:I,onChange:E=>q(E.target.value),onKeyDown:E=>E.key==="Enter"&&Fe()}),o.default.createElement("button",{className:"add-btn",onClick:Fe,"aria-label":"Add bad habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},He.map(E=>o.default.createElement("button",{key:E.key,className:Ne===E.key?"active":"",onClick:()=>H(E.key)},E.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:ne,onChange:E=>se(+E.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):a.map(E=>o.default.createElement(Eh,{key:E.id,reward:E,canClaim:g>=E.cost,onClaim:_,onDelete:S,onSave:U}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:fe,onChange:E=>ot(E.target.value),onKeyDown:E=>E.key==="Enter"&&$()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:xe,onChange:E=>at(+E.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:$,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Mh=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function zh(e=1e3*30){let[t,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function _h(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let a=Math.floor(r/60);return a<24?`${a}h ago`:`${Math.floor(a/24)}d ago`}function Zp({checked:e,onChange:t,color:n}){return o.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function Th({task:e,now:t,onToggle:n,onDelete:r,index:a}){let[i,l]=(0,o.useState)(!1),s=Ua.find(c=>c.key===e.priority)||Ua[0],u=()=>{l(!0),setTimeout(()=>r(e.id),220)};return o.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${a*35}ms`}},o.default.createElement(Zp,{checked:e.done,onChange:()=>n(e.id),color:s.color}),o.default.createElement("div",{className:"task-main"},o.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),o.default.createElement("span",{className:"task-meta"},o.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),o.default.createElement("span",{className:"prio-label"},s.label),o.default.createElement("span",{className:"dot-sep"},"\xB7"),o.default.createElement("span",null,_h(e.createdAt,t)))),o.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var zp="tasksh.tasks.v1",_p="tasksh.routines.v1",Tp="tasksh.vaulthabits.v1",Lp="tasksh.projects.v1",Pp="tasksh.goodhabits.v1",Dp="tasksh.badhabits.v1",Ap="tasksh.rewards.v1",Bp="tasksh.deviceid.v1",vs="tasksh.notifyenabled.v1",bs="tasksh.aikey.v1";function Lh({tagCtl:e,onClose:t}){let[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(""),l=s=>{a.trim()&&(e.addSub(s,a),A.success()),i(""),r(null)};return o.default.createElement("div",{className:"sheet-backdrop",onClick:t},o.default.createElement("div",{className:"sheet",onClick:s=>s.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"edit tags"),o.default.createElement("button",{className:"sheet-close",onClick:t,"aria-label":"Close"},"\xD7")),He.map(s=>{let u=sr(e.subs,s.key);return o.default.createElement("div",{key:s.key,className:"tag-group"},o.default.createElement("div",{className:"tag-group-head"},o.default.createElement("span",{className:"tag-dot",style:{background:s.color}}),o.default.createElement("span",{className:"tag-group-name"},s.label)),u.map(c=>o.default.createElement("div",{key:c.key,className:"tag-row"},o.default.createElement("input",{className:"tag-input",defaultValue:c.label,maxLength:18,onBlur:d=>e.renameSub(c.key,d.target.value),onKeyDown:d=>{d.key==="Enter"&&d.target.blur()}}),o.default.createElement("button",{className:"tag-del",disabled:u.length<=1,title:u.length<=1?"each area needs at least one tag":"remove",onClick:()=>{e.removeSub(c.key),A.delete()}},"\xD7"))),n===s.key?o.default.createElement("div",{className:"tag-row"},o.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:18,value:a,onChange:c=>i(c.target.value),onBlur:()=>l(s.key),onKeyDown:c=>{c.key==="Enter"&&l(s.key),c.key==="Escape"&&(i(""),r(null))}})):o.default.createElement("button",{className:"tag-add",onClick:()=>{i(""),r(s.key)}},"+ add tag"))}),o.default.createElement("div",{className:"sheet-foot"},"habits keep their tag when you rename it",o.default.createElement("button",{className:"tag-reset",onClick:()=>{e.resetSubs(),A.click()}},"reset to defaults"))))}function Ph({selfRef:e,data:t,links:n,setLinks:r,onClose:a}){let[i,l]=(0,o.useState)(!1),s=hp(e,t),u=Up(n,e),c=(0,o.useMemo)(()=>[...t.routines.map(f=>({ref:Cn("routine",f.id),label:f.label,kind:"routine"})),...t.goodHabits.map(f=>({ref:Cn("good",f.id),label:f.label,kind:"good"})),...t.vaultHabits.map(f=>({ref:Cn("vault",f.id),label:f.label,kind:"vault"}))].filter(f=>f.ref!==e&&!u.includes(f.ref)),[t,e,u]);return o.default.createElement("div",{className:"sheet-backdrop",onClick:a},o.default.createElement("div",{className:"sheet",onClick:d=>d.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"links \xB7 ",s?.label||"item"),o.default.createElement("button",{className:"sheet-close",onClick:a,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),u.length===0?o.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):o.default.createElement("div",{className:"link-list"},u.map(d=>{let f=hp(d,t);return o.default.createElement("div",{key:d,className:`link-row ${f?"":"stale"}`},o.default.createElement("span",{className:"link-kind"},f?f.meta:"missing"),o.default.createElement("span",{className:"link-label"},f?f.label:"deleted item"),o.default.createElement("button",{className:"link-remove",onClick:()=>{r(g=>L0(g,e,d)),A.delete()}},"unlink"))})),i?o.default.createElement("div",{className:"link-picker"},c.length===0?o.default.createElement("div",{className:"link-empty"},"nothing else to link to"):c.map(d=>o.default.createElement("button",{key:d.ref,className:"link-candidate",onClick:()=>{r(f=>T0(f,e,d.ref)),l(!1),A.success()}},o.default.createElement("span",{className:"link-kind"},Op[d.kind].label),o.default.createElement("span",{className:"link-label"},d.label),o.default.createElement("span",{className:"link-plus"},"+")))):o.default.createElement("button",{className:"link-add-btn",onClick:()=>l(!0)},"+ link to something")))}function Dh({id:e,onDone:t}){let n=Wp(e);return(0,o.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?o.default.createElement("div",{className:"ach-toast",onClick:t},o.default.createElement("span",{className:"ach-toast-icon"},n.icon),o.default.createElement("span",{className:"ach-toast-body"},o.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),o.default.createElement("span",{className:"ach-toast-name"},n.name),o.default.createElement("span",{className:"ach-toast-desc"},n.desc)),o.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function Ah({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:a,onDone:i}){let l=lr.find(u=>u.unlockLevel>e),s=ys(e);return o.default.createElement("div",{className:"lvl-backdrop",onClick:i},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"lvl-kicker"},"level up"),o.default.createElement("div",{className:"lvl-num"},e),o.default.createElement("div",{className:"lvl-title"},Qp(e)),o.default.createElement("div",{className:"lvl-rewards"},o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),o.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),o.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",o.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),a!=null&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),o.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),o.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),o.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function Bh({earned:e,coins:t}){let n=new Set(e),r=ao.filter(i=>!i.hidden||n.has(i.id)),a=ao.filter(i=>i.hidden&&!n.has(i.id)).length;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ach-head"},o.default.createElement("span",{className:"sheet-title"},"achievements"),o.default.createElement("span",{className:"ach-count"},n.size,"/",ao.length," \xB7 \u25C9 ",t)),o.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return o.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},o.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),o.default.createElement("span",{className:"ach-name"},i.name),o.default.createElement("span",{className:"ach-desc"},i.desc),o.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),a>0&&o.default.createElement("div",{className:"ach-hidden-note"},a," hidden achievement",a===1?"":"s"," left to discover"))}function Ih({ctl:e,level:t,totalXP:n,earned:r=[],coins:a=0,onClose:i}){let l=En(t+1),s=En(t);return o.default.createElement("div",{className:"sheet-backdrop",onClick:i},o.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"themes"),o.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=ks(u,t),d=e.themeId===u.id,f=En(u.unlockLevel),g=En(Math.max(1,u.unlockLevel-1)),v=c?100:Math.max(0,Math.min(99,Math.round((n-g)/(f-g)*100)));return o.default.createElement("button",{key:u.id,className:`theme-card ${d?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),A.success()):A.error()},disabled:!c},o.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},o.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),d&&o.default.createElement("span",{className:"theme-active-dot"})),o.default.createElement("span",{className:"theme-name"},u.name),c?o.default.createElement("span",{className:"theme-blurb"},u.blurb):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),o.default.createElement("span",{className:"theme-bar"},o.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),o.default.createElement("span",{className:"theme-pct"},v,"%")))})),o.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),o.default.createElement("div",{className:"ach-section"},o.default.createElement(Bh,{earned:r,coins:a})),o.default.createElement("div",{className:"calm-toggle-row"},o.default.createElement("div",null,o.default.createElement("div",{className:"calm-toggle-label"},"ambient background"),o.default.createElement("div",{className:"calm-toggle-hint"},e.ambience?"drifting gradients and particles":"flat black, like the old build")),o.default.createElement("button",{className:`calm-switch ${e.ambience?"on":""}`,onClick:()=>{e.setAmbience(!e.ambience),A.click()},"aria-pressed":e.ambience},o.default.createElement("span",{className:"calm-knob"}))),o.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",o.default.createElement("b",null,e.phase.label))))}function $a({label:e,value:t,color:n}){return o.default.createElement("div",{className:"pet-stat"},o.default.createElement("div",{className:"pet-stat-top"},o.default.createElement("span",{className:"pet-stat-label"},e),o.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),o.default.createElement("div",{className:"pet-stat-track"},o.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function Fh({from:e,to:t,petName:n,onDone:r}){(0,o.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let a=Mn[t];return o.default.createElement("div",{className:"evo-backdrop",onClick:r},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},o.default.createElement("div",{className:"evo-kicker"},"evolution"),o.default.createElement("div",{className:"evo-stage-row"},o.default.createElement("div",{className:"evo-old"},o.default.createElement(xs,{stage:e,mood:"content",size:72,animate:!1})),o.default.createElement("span",{className:"evo-arrow"},"\u2192"),o.default.createElement("div",{className:"evo-new"},o.default.createElement(xs,{stage:t,mood:"joyful",size:132,evolving:!0}))),o.default.createElement("div",{className:"evo-name"},n," became ",o.default.createElement("b",null,a.name)),o.default.createElement("div",{className:"evo-title"},a.title),o.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var so="https://tasksh-notify.techcraftor.workers.dev",$h="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function Oh(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}function Cs(){let e=localStorage.getItem(Bp);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Bp,e)),e}async function jh(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Oh($h)}));let r=Cs();if(!(await fetch(`${so}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function Uh(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=Cs();try{await fetch(`${so}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Ip(e){let t=Cs();try{await fetch(`${so}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function Wh(){try{return localStorage.getItem(bs)||""}catch{return""}}function Rp(e){try{e?localStorage.setItem(bs,e):localStorage.removeItem(bs)}catch{}}function Hh(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var Ja=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function Jh(e){let t=await fetch(`${so}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function Vh(e,t,n,r,a){let i=await fetch(`${so}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:a})}),l=null;try{l=await i.json()}catch{}if(!i.ok){let s=l&&l.error;throw s==="no_key"||s==="bad_key"?new Ja(l&&l.message||"key rejected"):new Error(l&&l.message||`request failed (${i.status})`)}return{reply:l&&l.reply||"\u2026",actions:l&&l.actions||[]}}var Gh=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function Fp(e,t){let n=(r,a)=>(r||[]).find(i=>i.id===a);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Pt(rt(e.time))} \xB7 ${e.label} (${Dt(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),a=[];return e.time!==void 0&&e.time!==r?.time&&a.push(`${Pt(rt(r?.time||"00:00"))} \u2192 ${Pt(rt(e.time))}`),e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&a.push(`${Dt(r?.duration||0)} \u2192 ${Dt(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${a.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),a=[];return e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&a.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${a.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function Kh(e,t,n){let{routines:r,vaultHabits:a,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:ye(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(d=>d.id===c.id?{...d,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:d),u.add("routines");break;case"delete_routine":r=r.filter(d=>d.id!==c.id),u.add("routines");break;case"add_vault_habit":a=[...a,{id:ye(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":a=a.map(d=>d.id===c.id?{...d,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:d),u.add("vaultHabits");break;case"delete_vault_habit":a=a.filter(d=>d.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:ye(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(d=>d.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:ye(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(d=>d.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:ye(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(d=>d.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(a),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}function Xh({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:a}){let{pet:i,form:l,mood:s,nudge:u,remember:c,rename:d}=e,[f,g]=(0,o.useState)(()=>Wh()),[v,k]=(0,o.useState)(!1),[x,w]=(0,o.useState)(null),[m,p]=(0,o.useState)(""),[h,y]=(0,o.useState)(!1),[N,b]=(0,o.useState)(0),[_,S]=(0,o.useState)(null),[U,D]=(0,o.useState)(null),[P,W]=(0,o.useState)(()=>new Set),[z,O]=(0,o.useState)(!1),[T,I]=(0,o.useState)(i.name),[q,Ne]=(0,o.useState)(!0),H=(0,o.useRef)(null),ne=(0,o.useRef)(0),se=(0,o.useMemo)(()=>$0(r),[r]);(0,o.useEffect)(()=>{if(!h){b(0);return}let $=Date.now(),Y=setInterval(()=>b((Date.now()-$)/1e3),100);return()=>clearInterval(Y)},[h]),(0,o.useEffect)(()=>{H.current&&(H.current.scrollTop=H.current.scrollHeight)},[i.log,U,h]);let fe=async $=>{let Y=($??m).trim();if(!Y||h)return;let ue=Date.now()-ne.current;if(ue<3e3){S(`give me a second \u2014 ${Math.ceil((3e3-ue)/1e3)}s`);return}if(p(""),c("user",Y),u("chat"),A.click(),!f){c("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),k(!0);return}ne.current=Date.now(),y(!0),S(null),D(null),W(new Set);try{let Se=await Vh(Y,{routines:t.routines,vaultHabits:t.vaultHabits,goodHabits:t.goodHabits,badHabits:t.badHabits,rewards:t.rewards,totalXP:t.totalXP},O0(r),i.log||[],f);c("pet",Se.reply),Se.actions.length&&(D(Se),A.success())}catch(Se){Se instanceof Ja?(Rp(""),g(""),w(Se.message),k(!0),c("pet","my link to the wider world got rejected. mind checking the key?")):(c("pet","couldn't reach far enough to answer that. try again in a moment."),S(Se.message||null)),A.error()}finally{y(!1)}},ot=$=>W(Y=>{let ue=new Set(Y);return ue.has($)?ue.delete($):ue.add($),ue}),xe=U?U.actions.filter(($,Y)=>!P.has(Y)):[],at=()=>{xe.length&&(Kh(xe,t,n),A.success(),u("chat"),a("success",`applied ${xe.length} change${xe.length===1?"":"s"}`),c("pet",`done \u2014 ${xe.length} change${xe.length===1?"":"s"} applied.`),D(null),W(new Set))},At=()=>{A.whoosh(),c("pet","left it as it was."),D(null),W(new Set)};if(v)return o.default.createElement(qh,{initialError:x,onCancel:()=>k(!1),onSaved:($,Y)=>{g($),w(null),k(!1),a("success",Y||"connected")}});let Fe=xe.reduce(($,Y)=>{let ue=Fp(Y,t).kind;return $[ue]=($[ue]||0)+1,$},{});return o.default.createElement("div",{className:"task-list companion-scroll"},o.default.createElement("div",{className:"cmp-hero"},o.default.createElement(xs,{stage:l.stage,mood:s.key,size:132}),o.default.createElement("div",{className:"cmp-id"},z?o.default.createElement("input",{className:"pet-name-input",value:T,autoFocus:!0,maxLength:14,onChange:$=>I($.target.value),onBlur:()=>{d(T),O(!1)},onKeyDown:$=>{$.key==="Enter"&&(d(T),O(!1))}}):o.default.createElement("button",{className:"pet-name",onClick:()=>{I(i.name),O(!0)}},i.name),o.default.createElement("span",{className:"pet-form"},l.name," \xB7 ",s.label)),o.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>Ne($=>!$)},q?"stats":"hide")),!q&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"pet-stats"},o.default.createElement($a,{label:"happiness",value:i.happiness,color:"var(--accent)"}),o.default.createElement($a,{label:"energy",value:i.energy,color:"var(--accent2)"}),o.default.createElement($a,{label:"friendship",value:i.friendship,color:"var(--accent)"}),o.default.createElement($a,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),o.default.createElement("div",{className:"pet-next"},Hp(i.friendship),ys(r.level)?` \xB7 next form at level ${ys(r.level).minLevel}`:" \xB7 final form")),o.default.createElement("div",{className:"cmp-chat",ref:H},o.default.createElement("div",{className:"pet-msg pet cmp-greeting"},se),(i.log||[]).map(($,Y)=>o.default.createElement("div",{key:Y,className:`pet-msg ${$.role}`},$.text)),h&&o.default.createElement("div",{className:"pet-msg pet thinking"},o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),N>=1&&o.default.createElement("span",{className:"cmp-elapsed"},N.toFixed(1),"s")),U&&U.actions.length>0&&o.default.createElement("div",{className:"cmp-diff-wrap"},o.default.createElement("div",{className:"ai-diff-head"},o.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),o.default.createElement("span",{className:"ai-diff-counts"},Fe.add?o.default.createElement("span",{className:"c-add"},"+",Fe.add):null,Fe.edit?o.default.createElement("span",{className:"c-edit"},"~",Fe.edit):null,Fe.remove?o.default.createElement("span",{className:"c-remove"},"\u2212",Fe.remove):null)),o.default.createElement("div",{className:"ai-diff"},U.actions.map(($,Y)=>{let ue=Fp($,t),Se=P.has(Y);return o.default.createElement("button",{key:Y,className:`ai-diff-row ${ue.kind} ${Se?"skipped":""}`,onClick:()=>ot(Y),title:Se?"click to include":"click to skip"},o.default.createElement("span",{className:"ai-sign"},ue.kind==="add"?"+":ue.kind==="remove"?"\u2212":"~"),o.default.createElement("span",{className:"ai-surface"},ue.surface),o.default.createElement("span",{className:"ai-diff-text"},ue.text),o.default.createElement("span",{className:"ai-skip-mark"},Se?"skipped":""))})),o.default.createElement("div",{className:"ai-actions"},o.default.createElement("button",{className:"ai-apply",onClick:at,disabled:!xe.length},"apply ",xe.length||""),o.default.createElement("button",{className:"ai-discard",onClick:At},"discard")),o.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),_&&o.default.createElement("div",{className:"ai-error cmp-error"},_),(i.log||[]).length===0&&!h&&o.default.createElement("div",{className:"ai-chips cmp-chips"},Gh.map($=>o.default.createElement("button",{key:$,className:"ai-chip",onClick:()=>fe($)},$))),o.default.createElement("div",{className:"pet-composer"},o.default.createElement("input",{className:"pet-input",placeholder:f?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:m,onChange:$=>p($.target.value),onKeyDown:$=>$.key==="Enter"&&fe(),disabled:h}),o.default.createElement("button",{className:"pet-send",onClick:()=>fe(),disabled:h||!m.trim()},"say")),o.default.createElement("button",{className:"cmp-key-link",onClick:()=>k(!0)},f?`key ${Hh(f)}`:"connect an ai key"))}function qh({onSaved:e,initialError:t,onCancel:n}){let[r,a]=(0,o.useState)(""),[i,l]=(0,o.useState)(!1),[s,u]=(0,o.useState)(t||null),c=(0,o.useRef)(null);(0,o.useEffect)(()=>{c.current?.focus()},[]);let d=async()=>{let f=r.trim();if(!(!f||i)){l(!0),u(null);try{let g=await Jh(f);Rp(f),A.success(),e(f,g)}catch(g){u(g.message||"Couldn't verify that key."),A.error()}finally{l(!1)}}};return o.default.createElement("div",{className:"task-list ai-scroll"},o.default.createElement("div",{className:"ai-gate"},o.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),o.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),o.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),o.default.createElement("ol",{className:"ai-gate-steps"},o.default.createElement("li",null,"open"," ",o.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),o.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),o.default.createElement("li",null,"copy it and paste it below")),o.default.createElement("input",{ref:c,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:f=>a(f.target.value),onKeyDown:f=>{f.key==="Enter"&&d()},disabled:i}),s&&o.default.createElement("div",{className:"ai-error ai-gate-error"},s),o.default.createElement("div",{className:"ai-gate-actions"},o.default.createElement("button",{className:"ai-apply",onClick:d,disabled:i||!r.trim()},i?"checking\u2026":"save key"),n&&o.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),o.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function Ie(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Yh(e){typeof e=="number"&&Number.isFinite(e)&&e>ja&&(ja=e)}function Qh(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(a=>n(a?.id))}),t}function Zh({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:a,goodHabits:i,rewards:l,setRewards:s,totalXP:u,setTab:c}){let d=Ss(),f=d.hour*60+d.minute,{sorted:g,currentId:v,nextId:k}=Es(e,f),x=g.find(P=>P.id===v),w=g.find(P=>P.id===k),m=j(0),p=P=>{let W=!(e.find(z=>z.id===P)?.history||[]).includes(m);t(z=>z.map(O=>{if(O.id!==P)return O;let I=(O.history||[]).includes(m)?O.history.filter(q=>q!==m):[...O.history||[],m];return{...O,history:I.slice(-60)}})),io.propagate("routine",P,W),W?(A.success(),on.emit("routineDone")):A.click()},h=(0,o.useMemo)(()=>{let P={high:0,mid:1,low:2};return[...n].filter(W=>!W.done).sort((W,z)=>P[W.priority]-P[z.priority])},[n]),y=P=>{r(W=>W.map(z=>z.id===P?{...z,done:!z.done}:z)),A.success()},N=(0,o.useMemo)(()=>l.filter(P=>u>=P.cost),[l,u]),b=P=>{s(W=>W.map(z=>z.id===P?{...z,claimed:[...z.claimed||[],m]}:z)),A.success()},_=(0,o.useMemo)(()=>{let P={},W=z=>{(z||[]).forEach(O=>{P[O]=(P[O]||0)+1})};return e.forEach(z=>W(z.history)),a.forEach(z=>W(z.history)),i.forEach(z=>W(z.history)),P},[e,a,i]),S=x||w,U=!!x,D=S?(S.history||[]).includes(m):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,U?"HAPPENING NOW":"NEXT UP")),S?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},Pt(rt(S.time))),o.default.createElement("span",{className:"today-card-label"},S.label)),o.default.createElement("div",{className:"today-card-sub"},U?`in progress \xB7 ${Dt(S.duration)}`:`in ${Math.max(0,rt(S.time)-f)}m \xB7 ${Dt(S.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${D?"done":""}`,onClick:()=>p(S.id)},D?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(Q0,{counts:_,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),h.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>c("tasks")},"view all in tasks \u2192")),h.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},h.slice(0,5).map((P,W)=>o.default.createElement("div",{key:P.id,className:"today-task-row",style:{animationDelay:`${W*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>y(P.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},P.text),o.default.createElement("span",{className:`today-prio-dot ${P.priority}`}))),h.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>c("tasks")},"+",h.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(Lt,{value:u})," XP")),N.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},N.map((P,W)=>o.default.createElement("div",{key:P.id,className:"today-task-row",style:{animationDelay:`${W*35}ms`}},o.default.createElement("span",{className:"today-task-text"},P.label),o.default.createElement("span",{className:"today-reward-cost"},P.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>b(P.id)},"claim")))))}function Rh(){let[e,t]=(0,o.useState)("today"),[n,r]=X0(),a=M=>{M!==e&&A.whoosh(),t(M)},[i,l]=(0,o.useState)(()=>Ie(zp,Mh)),[s,u]=(0,o.useState)(()=>Ie(_p,eh)),[c,d]=(0,o.useState)(()=>Ie(Tp,ih)),[f,g]=(0,o.useState)(()=>Ie(Lp,lh)),[v,k]=(0,o.useState)(()=>Ie(Pp,kh)),[x,w]=(0,o.useState)(()=>Ie(Dp,bh)),[m,p]=(0,o.useState)(()=>Ie(Ap,wh)),h=(0,o.useMemo)(()=>qp(v,x,m),[v,x,m]),y=(0,o.useMemo)(()=>Yp(h).level,[h]),N=H0(y),b=j0(y),{links:_,setLinks:S}=D0(),U=vh(),[D,P]=(0,o.useState)(null);(0,o.useEffect)(()=>Ga.register(M=>P(M)),[]),(0,o.useEffect)(()=>io.register((M,B,K)=>{P0(Cn(M,B),K,_,{setRoutines:u,setVaultHabits:d,setGoodHabits:k},j(0))}),[_]);let W=j(0),z=(0,o.useMemo)(()=>{let M=Ie(Wa,{});return{level:y,tasksDone:i.filter(B=>B.done).length,bestStreak:Math.max(v.reduce((B,K)=>Math.max(B,hs(K.history)),0),s.reduce((B,K)=>Math.max(B,hs(K.history)),0)),doneToday:v.filter(B=>(B.history||[]).includes(W)).length,totalHabits:v.length,routinesDoneToday:s.filter(B=>(B.history||[]).includes(W)).length,totalRoutines:s.length,vaultCount:c.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:M.calmSessions||0,earlyFinish:!!M.earlyFinish,lateFinish:!!M.lateFinish,returnedAfterGap:!!M.returnedAfterGap}},[y,i,v,s,c,b.pet,W]),O=I0(z),[T,I]=(0,o.useState)(null);(0,o.useEffect)(()=>{let B=Ie(Wa,{}).seenLevel||1;if(y>B){let K=B0(y);O.addCoins(K);let re=lr.filter(Ee=>Ee.unlockLevel>B&&Ee.unlockLevel<=y);I({level:y,coins:K,unlockedTheme:re.length?re[re.length-1]:null,extraThemes:re.length>1?re.length-1:0,evolvedTo:Oa(y).stage>Oa(B).stage?Oa(y).stage:null}),Ha({seenLevel:y})}else y<B&&Ha({seenLevel:y})},[y]);let[q,Ne]=(0,o.useState)(""),[H,ne]=(0,o.useState)("mid"),[se,fe]=(0,o.useState)("all"),ot=(0,o.useRef)(null),xe=(0,o.useRef)(null),[at,At]=(0,o.useState)(null),Fe=zh(),[$,Y]=(0,o.useState)(()=>localStorage.getItem(vs)==="1"),[ue,Se]=(0,o.useState)(!1),[zn,an]=(0,o.useState)(!1);(0,o.useEffect)(()=>{$&&Ip(s)},[s,$]);let E=async()=>{if(!ue){Se(!0);try{$?(await Uh(),localStorage.setItem(vs,"0"),Y(!1),F("success","Notifications turned off")):(await jh(),await Ip(s),localStorage.setItem(vs,"1"),Y(!0),F("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(M){F("error",M.message||"Couldn't set up notifications")}finally{Se(!1)}}},F=(M,B)=>{At({type:M,text:B})};(0,o.useEffect)(()=>{if(!at)return;let M=setTimeout(()=>At(null),3200);return()=>clearTimeout(M)},[at]);let de=()=>{try{let M={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:f,goodHabits:v,badHabits:x,rewards:m}},B=new Blob([JSON.stringify(M,null,2)],{type:"application/json"}),K=URL.createObjectURL(B),re=j(0),Ee=document.createElement("a");Ee.href=K,Ee.download=`tasks-sh-backup-${re}.json`,document.body.appendChild(Ee),Ee.click(),Ee.remove(),URL.revokeObjectURL(K),F("ok","backup exported")}catch{F("err","export failed")}},G=()=>xe.current?.click(),Le=M=>{let B=M.target.files&&M.target.files[0];if(M.target.value="",!B)return;let K=new FileReader;K.onerror=()=>F("err","couldn't read that file"),K.onload=()=>{try{let re=JSON.parse(String(K.result)),Ee=re&&typeof re=="object"&&re.data?re.data:re;if(!Ee||typeof Ee!="object")throw new Error("bad shape");let Ls={tasks:l,routines:u,vaultHabits:d,projects:g,goodHabits:k,badHabits:w,rewards:p},mo=0;for(let Ka of Object.keys(Ls))Array.isArray(Ee[Ka])&&(Ls[Ka](Ee[Ka]),mo++);if(mo===0){F("err","no recognizable data in that file");return}Yh(Qh(Ee)),F("ok",`imported ${mo} data set${mo===1?"":"s"}`)}catch{F("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},K.readAsText(B)},uo=Ss(),cr=uo.hour*60+uo.minute,{currentId:mt,sorted:Ms}=Es(s,cr),[co,po]=(0,o.useState)(null),fo=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(fo.current===void 0){fo.current=mt;return}if(mt!==fo.current){let M=Ms.find(B=>B.id===mt);M&&po({id:mt,label:M.label,time:M.time}),fo.current=mt}},[mt,Ms]),(0,o.useEffect)(()=>{if(!co)return;let M=setTimeout(()=>po(null),6e3);return()=>clearTimeout(M)},[co]),(0,o.useEffect)(()=>{try{localStorage.setItem(zp,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(_p,JSON.stringify(s))}catch{}},[s]),(0,o.useEffect)(()=>{try{localStorage.setItem(Tp,JSON.stringify(c))}catch{}},[c]),(0,o.useEffect)(()=>{try{localStorage.setItem(Lp,JSON.stringify(f))}catch{}},[f]),(0,o.useEffect)(()=>{try{localStorage.setItem(Pp,JSON.stringify(v))}catch{}},[v]),(0,o.useEffect)(()=>{try{localStorage.setItem(Dp,JSON.stringify(x))}catch{}},[x]),(0,o.useEffect)(()=>{try{localStorage.setItem(Ap,JSON.stringify(m))}catch{}},[m]);let Bt=(0,o.useMemo)(()=>{let M=i.length,B=i.filter(Ee=>Ee.done).length,K=M-B,re=M===0?0:Math.round(B/M*100);return{total:M,done:B,pending:K,pct:re}},[i]),zs=(0,o.useMemo)(()=>{let M=i.filter(B=>!B.done);return Ua.map(B=>({key:B.key,label:B.label,color:B.color,value:M.filter(K=>K.priority===B.key).length}))},[i]),_s=(0,o.useMemo)(()=>{let M=i;return se==="active"&&(M=M.filter(B=>!B.done)),se==="done"&&(M=M.filter(B=>B.done)),[...M].sort((B,K)=>{if(B.done!==K.done)return B.done?1:-1;let re={high:0,mid:1,low:2};return re[B.priority]-re[K.priority]})},[i,se]),Ts=()=>{let M=q.trim();M&&(l(B=>[...B,{id:ye(),text:M,done:!1,priority:H,createdAt:Date.now()}]),Ne(""),ot.current?.focus(),A.click())},ef=M=>{let B=!i.find(K=>K.id===M)?.done;l(K=>K.map(re=>re.id===M?{...re,done:!re.done}:re)),B?(A.success(),on.emit("taskDone")):A.click()},tf=M=>{l(B=>B.filter(K=>K.id!==M)),A.delete()},nf=()=>{l(M=>M.filter(B=>!B.done)),A.whoosh()};return o.default.createElement("div",{className:"app-root","data-particle":N.theme.ambient.particle},O.current&&o.default.createElement(Dh,{id:O.current,onDone:O.shift}),T&&o.default.createElement(Ah,{level:T.level,coins:T.coins,unlockedTheme:T.unlockedTheme,extraThemes:T.extraThemes,evolvedTo:T.evolvedTo,onDone:()=>I(null)}),b.evolution&&o.default.createElement(Fh,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),D&&o.default.createElement(Ph,{selfRef:D,data:{routines:s,goodHabits:v,vaultHabits:c},links:_,setLinks:S,onClose:()=>P(null)}),zn&&o.default.createElement(Ih,{ctl:N,level:y,totalXP:h,earned:O.earned,coins:O.coins,onClose:()=>an(!1)}),o.default.createElement("style",null,`
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
      `),o.default.createElement("div",{className:"panel"},o.default.createElement(W0,{theme:N.theme,phase:N.phase,calm:N.calm,scoped:!0}),co&&o.default.createElement("div",{className:"quest-banner",onClick:()=>po(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",co.label),o.default.createElement("button",{className:"quest-banner-close",onClick:M=>{M.stopPropagation(),po(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:xe,onChange:Le,style:{display:"none"}}),o.default.createElement("button",{className:`titlebar-icon-btn ${$?"notify-on":""}`,onClick:E,disabled:ue,"aria-label":$?"Turn off notifications":"Turn on notifications",title:$?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},$?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{an(!0),A.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:G,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:de,"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date(Fe).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),at&&o.default.createElement("div",{className:`data-toast ${at.type}`},at.text),o.default.createElement("div",{className:"tabs"},o.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>a("today")},"today"),o.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>a("tasks")},"tasks"),o.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>a("routines")},"routines"),o.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>a("vault")},"vault"),o.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>a("quest")},"quest"),o.default.createElement("button",{className:`tab-pet ${e==="pet"?"active":""}`,onClick:()=>a("pet")},b.pet.name.toLowerCase())),o.default.createElement("div",{key:e,className:"tab-content"},e==="today"?o.default.createElement(Zh,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:v,rewards:m,setRewards:p,totalXP:h,setTab:a}):e==="tasks"?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"stats-bar stats-bar-viz"},o.default.createElement(Ns,{pct:Bt.pct,size:64,stroke:5.5,label:`${Bt.pct}%`}),o.default.createElement("div",{className:"stats-row-viz"},o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(Lt,{value:Bt.total}))," total"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(Lt,{value:Bt.pending}))," pending"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(Lt,{value:Bt.done}))," done"))),Bt.pending>0&&o.default.createElement("div",{className:"donut-card"},o.default.createElement(Gp,{size:96,stroke:14,centerLabel:Bt.pending,centerSublabel:"open",segments:zs.map(M=>({key:M.key,value:M.value,color:M.color}))}),o.default.createElement("div",{className:"donut-legend"},zs.map(M=>o.default.createElement("div",{className:"donut-legend-row",key:M.key},o.default.createElement("span",{className:"donut-legend-dot",style:{background:M.color}}),o.default.createElement("span",null,M.label," priority"),o.default.createElement("span",{className:"donut-legend-val"},M.value))))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{ref:ot,type:"text",placeholder:"add a task, press enter...",value:q,onChange:M=>Ne(M.target.value),onKeyDown:M=>M.key==="Enter"&&Ts()}),o.default.createElement("div",{className:"prio-select"},Ua.map(M=>o.default.createElement("button",{key:M.key,className:H===M.key?"active":"",style:{"--pc":M.color},onClick:()=>ne(M.key)},M.label))),o.default.createElement("button",{className:"add-btn",onClick:Ts,"aria-label":"Add task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"filters"},["all","active","done"].map(M=>o.default.createElement("button",{key:M,className:se===M?"active":"",onClick:()=>fe(M)},M)),o.default.createElement("span",{className:"spacer"}),Bt.done>0&&o.default.createElement("button",{className:"clear-btn",onClick:nf},"clear done")),o.default.createElement("div",{className:"task-list"},_s.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},se==="done"?"nothing completed yet":"queue's empty \u2014 add something")):_s.map((M,B)=>o.default.createElement(Th,{key:M.id,task:M,now:Fe,index:B,onToggle:ef,onDelete:tf})))):e==="routines"?o.default.createElement(nh,{routines:s,setRoutines:u}):e==="vault"?o.default.createElement(mh,{vaultHabits:c,setVaultHabits:d,projects:f,setProjects:g}):e==="quest"?o.default.createElement(Ch,{tagCtl:U,goodHabits:v,setGoodHabits:k,badHabits:x,setBadHabits:w,rewards:m,setRewards:p}):o.default.createElement(Xh,{petCtl:b,state:{routines:s,vaultHabits:c,goodHabits:v,badHabits:x,rewards:m,totalXP:h},setters:{setRoutines:u,setVaultHabits:d,setGoodHabits:k,setBadHabits:w,setRewards:p},showDataMsg:F,ctx:{pet:b.pet,level:y,hour:ir().hour,phase:N.phase.id,doneToday:v.filter(M=>(M.history||[]).includes(j(0))).length,totalToday:v.length,streak:v.reduce((M,B)=>Math.max(M,hs(B.history)),0),routineNow:null,nextRoutine:null}}))))}var eg=$p.default.createRoot(document.getElementById("root"));eg.render(o.default.createElement(Rh));})();
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
