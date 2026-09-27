(()=>{var em=Object.create;var uc=Object.defineProperty;var tm=Object.getOwnPropertyDescriptor;var nm=Object.getOwnPropertyNames;var rm=Object.getPrototypeOf,om=Object.prototype.hasOwnProperty;var gn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var am=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of nm(t))!om.call(e,a)&&a!==n&&uc(e,a,{get:()=>t[a],enumerable:!(r=tm(t,a))||r.enumerable});return e};var dc=(e,t,n)=>(n=e!=null?em(rm(e)):{},am(t||!e||!e.__esModule?uc(n,"default",{value:e,enumerable:!0}):n,e));var Nc=gn(X=>{"use strict";var br=Symbol.for("react.element"),im=Symbol.for("react.portal"),sm=Symbol.for("react.fragment"),lm=Symbol.for("react.strict_mode"),cm=Symbol.for("react.profiler"),um=Symbol.for("react.provider"),dm=Symbol.for("react.context"),pm=Symbol.for("react.forward_ref"),fm=Symbol.for("react.suspense"),mm=Symbol.for("react.memo"),hm=Symbol.for("react.lazy"),pc=Symbol.iterator;function gm(e){return e===null||typeof e!="object"?null:(e=pc&&e[pc]||e["@@iterator"],typeof e=="function"?e:null)}var hc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gc=Object.assign,vc={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=vc,this.updater=n||hc}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yc(){}yc.prototype=Bn.prototype;function gi(e,t,n){this.props=e,this.context=t,this.refs=vc,this.updater=n||hc}var vi=gi.prototype=new yc;vi.constructor=gi;gc(vi,Bn.prototype);vi.isPureReactComponent=!0;var fc=Array.isArray,xc=Object.prototype.hasOwnProperty,yi={current:null},kc={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,a={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)xc.call(t,r)&&!kc.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:br,type:e,key:i,ref:s,props:a,_owner:yi.current}}function vm(e,t){return{$$typeof:br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xi(e){return typeof e=="object"&&e!==null&&e.$$typeof===br}function ym(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var mc=/\/+/g;function hi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ym(""+e.key):t.toString(36)}function To(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case br:case im:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+hi(s,0):r,fc(a)?(n="",e!=null&&(n=e.replace(mc,"$&/")+"/"),To(a,t,n,"",function(u){return u})):a!=null&&(xi(a)&&(a=vm(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(mc,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",fc(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+hi(i,l);s+=To(i,t,n,c,a)}else if(c=gm(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+hi(i,l++),s+=To(i,t,n,c,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _o(e,t,n){if(e==null)return e;var r=[],a=0;return To(e,r,"","",function(i){return t.call(n,i,a++)}),r}function xm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ie={current:null},Ao={transition:null},km={ReactCurrentDispatcher:Ie,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:yi};function wc(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!xi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Bn;X.Fragment=sm;X.Profiler=cm;X.PureComponent=gi;X.StrictMode=lm;X.Suspense=fm;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=km;X.act=wc;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=gc({},e.props),a=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=yi.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)xc.call(t,c)&&!kc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:br,type:e.type,key:a,ref:i,props:r,_owner:s}};X.createContext=function(e){return e={$$typeof:dm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:um,_context:e},e.Consumer=e};X.createElement=bc;X.createFactory=function(e){var t=bc.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:pm,render:e}};X.isValidElement=xi;X.lazy=function(e){return{$$typeof:hm,_payload:{_status:-1,_result:e},_init:xm}};X.memo=function(e,t){return{$$typeof:mm,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};X.unstable_act=wc;X.useCallback=function(e,t){return Ie.current.useCallback(e,t)};X.useContext=function(e){return Ie.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return Ie.current.useDeferredValue(e)};X.useEffect=function(e,t){return Ie.current.useEffect(e,t)};X.useId=function(){return Ie.current.useId()};X.useImperativeHandle=function(e,t,n){return Ie.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return Ie.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return Ie.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return Ie.current.useMemo(e,t)};X.useReducer=function(e,t,n){return Ie.current.useReducer(e,t,n)};X.useRef=function(e){return Ie.current.useRef(e)};X.useState=function(e){return Ie.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return Ie.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return Ie.current.useTransition()};X.version="18.3.1"});var ki=gn((Gv,Sc)=>{"use strict";Sc.exports=Nc()});var Dc=gn(ae=>{"use strict";function Si(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<Lo(a,t))e[r]=t,e[n]=a,n=r;else break e}}function ut(e){return e.length===0?null:e[0]}function Do(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>Lo(l,n))c<a&&0>Lo(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else if(c<a&&0>Lo(u,n))e[r]=u,e[c]=n,r=c;else break e}}return t}function Lo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ec=performance,ae.unstable_now=function(){return Ec.now()}):(bi=Date,Cc=bi.now(),ae.unstable_now=function(){return bi.now()-Cc});var Ec,bi,Cc,bt=[],Jt=[],bm=1,et=null,Te=3,Io=!1,vn=!1,Nr=!1,_c=typeof setTimeout=="function"?setTimeout:null,Tc=typeof clearTimeout=="function"?clearTimeout:null,Mc=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ei(e){for(var t=ut(Jt);t!==null;){if(t.callback===null)Do(Jt);else if(t.startTime<=e)Do(Jt),t.sortIndex=t.expirationTime,Si(bt,t);else break;t=ut(Jt)}}function Ci(e){if(Nr=!1,Ei(e),!vn)if(ut(bt)!==null)vn=!0,zi(Mi);else{var t=ut(Jt);t!==null&&_i(Ci,t.startTime-e)}}function Mi(e,t){vn=!1,Nr&&(Nr=!1,Tc(Sr),Sr=-1),Io=!0;var n=Te;try{for(Ei(t),et=ut(bt);et!==null&&(!(et.expirationTime>t)||e&&!Pc());){var r=et.callback;if(typeof r=="function"){et.callback=null,Te=et.priorityLevel;var a=r(et.expirationTime<=t);t=ae.unstable_now(),typeof a=="function"?et.callback=a:et===ut(bt)&&Do(bt),Ei(t)}else Do(bt);et=ut(bt)}if(et!==null)var i=!0;else{var s=ut(Jt);s!==null&&_i(Ci,s.startTime-t),i=!1}return i}finally{et=null,Te=n,Io=!1}}var $o=!1,Po=null,Sr=-1,Ac=5,Lc=-1;function Pc(){return!(ae.unstable_now()-Lc<Ac)}function wi(){if(Po!==null){var e=ae.unstable_now();Lc=e;var t=!0;try{t=Po(!0,e)}finally{t?wr():($o=!1,Po=null)}}else $o=!1}var wr;typeof Mc=="function"?wr=function(){Mc(wi)}:typeof MessageChannel<"u"?(Ni=new MessageChannel,zc=Ni.port2,Ni.port1.onmessage=wi,wr=function(){zc.postMessage(null)}):wr=function(){_c(wi,0)};var Ni,zc;function zi(e){Po=e,$o||($o=!0,wr())}function _i(e,t){Sr=_c(function(){e(ae.unstable_now())},t)}ae.unstable_IdlePriority=5;ae.unstable_ImmediatePriority=1;ae.unstable_LowPriority=4;ae.unstable_NormalPriority=3;ae.unstable_Profiling=null;ae.unstable_UserBlockingPriority=2;ae.unstable_cancelCallback=function(e){e.callback=null};ae.unstable_continueExecution=function(){vn||Io||(vn=!0,zi(Mi))};ae.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ac=0<e?Math.floor(1e3/e):5};ae.unstable_getCurrentPriorityLevel=function(){return Te};ae.unstable_getFirstCallbackNode=function(){return ut(bt)};ae.unstable_next=function(e){switch(Te){case 1:case 2:case 3:var t=3;break;default:t=Te}var n=Te;Te=t;try{return e()}finally{Te=n}};ae.unstable_pauseExecution=function(){};ae.unstable_requestPaint=function(){};ae.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Te;Te=e;try{return t()}finally{Te=n}};ae.unstable_scheduleCallback=function(e,t,n){var r=ae.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var a=-1;break;case 2:a=250;break;case 5:a=1073741823;break;case 4:a=1e4;break;default:a=5e3}return a=n+a,e={id:bm++,callback:t,priorityLevel:e,startTime:n,expirationTime:a,sortIndex:-1},n>r?(e.sortIndex=n,Si(Jt,e),ut(bt)===null&&e===ut(Jt)&&(Nr?(Tc(Sr),Sr=-1):Nr=!0,_i(Ci,n-r))):(e.sortIndex=a,Si(bt,e),vn||Io||(vn=!0,zi(Mi))),e};ae.unstable_shouldYield=Pc;ae.unstable_wrapCallback=function(e){var t=Te;return function(){var n=Te;Te=t;try{return e.apply(this,arguments)}finally{Te=n}}}});var $c=gn((Xv,Ic)=>{"use strict";Ic.exports=Dc()});var jp=gn(Qe=>{"use strict";var wm=ki(),Ye=$c();function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,Kr={};function Tn(e,t){or(e,t),or(e+"Capture",t)}function or(e,t){for(Kr[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zi=Object.prototype.hasOwnProperty,Nm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bc={},Fc={};function Sm(e){return Zi.call(Fc,e)?!0:Zi.call(Bc,e)?!1:Nm.test(e)?Fc[e]=!0:(Bc[e]=!0,!1)}function Em(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Cm(e,t,n,r){if(t===null||typeof t>"u"||Em(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,a,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hs=/[\-:]([a-z])/g;function Vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hs,Vs);ze[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hs,Vs);ze[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hs,Vs);ze[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ks(e,t,n,r){var a=ze.hasOwnProperty(t)?ze[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Cm(t,n,a,r)&&(n=null),r||a===null?Sm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Bt=wm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Bo=Symbol.for("react.element"),jn=Symbol.for("react.portal"),Un=Symbol.for("react.fragment"),qs=Symbol.for("react.strict_mode"),Ri=Symbol.for("react.profiler"),Hu=Symbol.for("react.provider"),Vu=Symbol.for("react.context"),Gs=Symbol.for("react.forward_ref"),es=Symbol.for("react.suspense"),ts=Symbol.for("react.suspense_list"),Ys=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Ku=Symbol.for("react.offscreen"),Oc=Symbol.iterator;function Er(e){return e===null||typeof e!="object"?null:(e=Oc&&e[Oc]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,Ti;function Pr(e){if(Ti===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ti=t&&t[1]||""}return`
`+Ti+e}var Ai=!1;function Li(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),i=r.stack.split(`
`),s=a.length-1,l=i.length-1;1<=s&&0<=l&&a[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(a[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||a[s]!==i[l]){var c=`
`+a[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pr(e):""}function Mm(e){switch(e.tag){case 5:return Pr(e.type);case 16:return Pr("Lazy");case 13:return Pr("Suspense");case 19:return Pr("SuspenseList");case 0:case 2:case 15:return e=Li(e.type,!1),e;case 11:return e=Li(e.type.render,!1),e;case 1:return e=Li(e.type,!0),e;default:return""}}function ns(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Un:return"Fragment";case jn:return"Portal";case Ri:return"Profiler";case qs:return"StrictMode";case es:return"Suspense";case ts:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vu:return(e.displayName||"Context")+".Consumer";case Hu:return(e._context.displayName||"Context")+".Provider";case Gs:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ys:return t=e.displayName||null,t!==null?t:ns(e.type)||"Memo";case Ht:t=e._payload,e=e._init;try{return ns(e(t))}catch{}}return null}function zm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ns(t);case 8:return t===qs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function on(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _m(e){var t=qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){e._valueTracker||(e._valueTracker=_m(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rs(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function jc(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=on(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yu(e,t){t=t.checked,t!=null&&Ks(e,"checked",t,!1)}function os(e,t){Yu(e,t);var n=on(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?as(e,t.type,n):t.hasOwnProperty("defaultValue")&&as(e,t.type,on(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Uc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function as(e,t,n){(t!=="number"||pa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function Zn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+on(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function is(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Dr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:on(n)}}function Xu(e,t){var n=on(t.value),r=on(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Wc(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ss(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Oo,Zu=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Oo=Oo||document.createElement("div"),Oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tm=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){Tm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function Ru(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function ed(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=Ru(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Am=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ls(e,t){if(t){if(Am[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function cs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var us=null;function Xs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ds=null,Rn=null,er=null;function Hc(e){if(e=po(e)){if(typeof ds!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ja(t),ds(e.stateNode,e.type,t))}}function td(e){Rn?er?er.push(e):er=[e]:Rn=e}function nd(){if(Rn){var e=Rn,t=er;if(er=Rn=null,Hc(e),t)for(e=0;e<t.length;e++)Hc(t[e])}}function rd(e,t){return e(t)}function od(){}var Pi=!1;function ad(e,t,n){if(Pi)return e(t,n);Pi=!0;try{return rd(e,t,n)}finally{Pi=!1,(Rn!==null||er!==null)&&(od(),nd())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=ja(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var ps=!1;if(Pt)try{Fn={},Object.defineProperty(Fn,"passive",{get:function(){ps=!0}}),window.addEventListener("test",Fn,Fn),window.removeEventListener("test",Fn,Fn)}catch{ps=!1}var Fn;function Lm(e,t,n,r,a,i,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Fr=!1,fa=null,ma=!1,fs=null,Pm={onError:function(e){Fr=!0,fa=e}};function Dm(e,t,n,r,a,i,s,l,c){Fr=!1,fa=null,Lm.apply(Pm,arguments)}function Im(e,t,n,r,a,i,s,l,c){if(Dm.apply(this,arguments),Fr){if(Fr){var u=fa;Fr=!1,fa=null}else throw Error(_(198));ma||(ma=!0,fs=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function id(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Vc(e){if(An(e)!==e)throw Error(_(188))}function $m(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Vc(a),e;if(i===r)return Vc(a),t;i=i.sibling}throw Error(_(188))}if(n.return!==r.return)n=a,r=i;else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function sd(e){return e=$m(e),e!==null?ld(e):null}function ld(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ld(e);if(t!==null)return t;e=e.sibling}return null}var cd=Ye.unstable_scheduleCallback,Kc=Ye.unstable_cancelCallback,Bm=Ye.unstable_shouldYield,Fm=Ye.unstable_requestPaint,ye=Ye.unstable_now,Om=Ye.unstable_getCurrentPriorityLevel,Qs=Ye.unstable_ImmediatePriority,ud=Ye.unstable_UserBlockingPriority,ha=Ye.unstable_NormalPriority,jm=Ye.unstable_LowPriority,dd=Ye.unstable_IdlePriority,$a=null,Et=null;function Um(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot($a,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:Hm,Jm=Math.log,Wm=Math.LN2;function Hm(e){return e>>>=0,e===0?32:31-(Jm(e)/Wm|0)|0}var jo=64,Uo=4194304;function Ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ga(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~a;l!==0?r=Ir(l):(i&=s,i!==0&&(r=Ir(i)))}else s=n&~a,s!==0?r=Ir(s):i!==0&&(r=Ir(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&a)===0&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),a=1<<n,r|=e[n],t&=~a;return r}function Vm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Km(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ht(i),l=1<<s,c=a[s];c===-1?((l&n)===0||(l&r)!==0)&&(a[s]=Vm(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function ms(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pd(){var e=jo;return jo<<=1,(jo&4194240)===0&&(jo=64),e}function Di(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function co(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function qm(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ht(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Zs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var oe=0;function fd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var md,Rs,hd,gd,vd,hs=!1,Jo=[],Xt=null,Qt=null,Zt=null,Yr=new Map,Xr=new Map,Kt=[],Gm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qc(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":Qt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Yr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function Cr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=po(t),t!==null&&Rs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Ym(e,t,n,r,a){switch(t){case"focusin":return Xt=Cr(Xt,e,t,n,r,a),!0;case"dragenter":return Qt=Cr(Qt,e,t,n,r,a),!0;case"mouseover":return Zt=Cr(Zt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Yr.set(i,Cr(Yr.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Xr.set(i,Cr(Xr.get(i)||null,e,t,n,r,a)),!0}return!1}function yd(e){var t=kn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=id(n),t!==null){e.blockedOn=t,vd(e.priority,function(){hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function na(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);us=r,n.target.dispatchEvent(r),us=null}else return t=po(n),t!==null&&Rs(t),e.blockedOn=n,!1;t.shift()}return!0}function Gc(e,t,n){na(e)&&n.delete(t)}function Xm(){hs=!1,Xt!==null&&na(Xt)&&(Xt=null),Qt!==null&&na(Qt)&&(Qt=null),Zt!==null&&na(Zt)&&(Zt=null),Yr.forEach(Gc),Xr.forEach(Gc)}function Mr(e,t){e.blockedOn===t&&(e.blockedOn=null,hs||(hs=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,Xm)))}function Qr(e){function t(a){return Mr(a,e)}if(0<Jo.length){Mr(Jo[0],e);for(var n=1;n<Jo.length;n++){var r=Jo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&Mr(Xt,e),Qt!==null&&Mr(Qt,e),Zt!==null&&Mr(Zt,e),Yr.forEach(t),Xr.forEach(t),n=0;n<Kt.length;n++)r=Kt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Kt.length&&(n=Kt[0],n.blockedOn===null);)yd(n),n.blockedOn===null&&Kt.shift()}var tr=Bt.ReactCurrentBatchConfig,va=!0;function Qm(e,t,n,r){var a=oe,i=tr.transition;tr.transition=null;try{oe=1,el(e,t,n,r)}finally{oe=a,tr.transition=i}}function Zm(e,t,n,r){var a=oe,i=tr.transition;tr.transition=null;try{oe=4,el(e,t,n,r)}finally{oe=a,tr.transition=i}}function el(e,t,n,r){if(va){var a=gs(e,t,n,r);if(a===null)Ui(e,t,r,ya,n),qc(e,r);else if(Ym(a,e,t,n,r))r.stopPropagation();else if(qc(e,r),t&4&&-1<Gm.indexOf(e)){for(;a!==null;){var i=po(a);if(i!==null&&md(i),i=gs(e,t,n,r),i===null&&Ui(e,t,r,ya,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Ui(e,t,r,null,n)}}var ya=null;function gs(e,t,n,r){if(ya=null,e=Xs(r),e=kn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=id(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ya=e,null}function xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Om()){case Qs:return 1;case ud:return 4;case ha:case jm:return 16;case dd:return 536870912;default:return 16}default:return 16}}var Gt=null,tl=null,ra=null;function kd(){if(ra)return ra;var e,t=tl,n=t.length,r,a="value"in Gt?Gt.value:Gt.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[i-r];r++);return ra=a.slice(e,1<r?1-r:void 0)}function oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function Yc(){return!1}function Xe(e){function t(n,r,a,i,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wo:Yc,this.isPropagationStopped=Yc,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Xe(dr),uo=fe({},dr,{view:0,detail:0}),Rm=Xe(uo),Ii,$i,zr,Ba=fe({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(Ii=e.screenX-zr.screenX,$i=e.screenY-zr.screenY):$i=Ii=0,zr=e),Ii)},movementY:function(e){return"movementY"in e?e.movementY:$i}}),Xc=Xe(Ba),e0=fe({},Ba,{dataTransfer:0}),t0=Xe(e0),n0=fe({},uo,{relatedTarget:0}),Bi=Xe(n0),r0=fe({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),o0=Xe(r0),a0=fe({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),i0=Xe(a0),s0=fe({},dr,{data:0}),Qc=Xe(s0),l0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=u0[e])?!!t[e]:!1}function rl(){return d0}var p0=fe({},uo,{key:function(e){if(e.key){var t=l0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rl,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),f0=Xe(p0),m0=fe({},Ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zc=Xe(m0),h0=fe({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rl}),g0=Xe(h0),v0=fe({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),y0=Xe(v0),x0=fe({},Ba,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=Xe(x0),b0=[9,13,27,32],ol=Pt&&"CompositionEvent"in window,Or=null;Pt&&"documentMode"in document&&(Or=document.documentMode);var w0=Pt&&"TextEvent"in window&&!Or,bd=Pt&&(!ol||Or&&8<Or&&11>=Or),Rc=" ",eu=!1;function wd(e,t){switch(e){case"keyup":return b0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jn=!1;function N0(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(eu=!0,Rc);case"textInput":return e=t.data,e===Rc&&eu?null:e;default:return null}}function S0(e,t){if(Jn)return e==="compositionend"||!ol&&wd(e,t)?(e=kd(),ra=tl=Gt=null,Jn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bd&&t.locale!=="ko"?null:t.data;default:return null}}var E0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!E0[e.type]:t==="textarea"}function Sd(e,t,n,r){td(r),t=xa(t,"onChange"),0<t.length&&(n=new nl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var jr=null,Zr=null;function C0(e){Id(e,0)}function Fa(e){var t=Vn(e);if(Gu(t))return e}function M0(e,t){if(e==="change")return t}var Ed=!1;Pt&&(Pt?(Vo="oninput"in document,Vo||(Fi=document.createElement("div"),Fi.setAttribute("oninput","return;"),Vo=typeof Fi.oninput=="function"),Ho=Vo):Ho=!1,Ed=Ho&&(!document.documentMode||9<document.documentMode));var Ho,Vo,Fi;function nu(){jr&&(jr.detachEvent("onpropertychange",Cd),Zr=jr=null)}function Cd(e){if(e.propertyName==="value"&&Fa(Zr)){var t=[];Sd(t,Zr,e,Xs(e)),ad(C0,t)}}function z0(e,t,n){e==="focusin"?(nu(),jr=t,Zr=n,jr.attachEvent("onpropertychange",Cd)):e==="focusout"&&nu()}function _0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fa(Zr)}function T0(e,t){if(e==="click")return Fa(t)}function A0(e,t){if(e==="input"||e==="change")return Fa(t)}function L0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:L0;function Rr(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Zi.call(t,a)||!vt(e[a],t[a]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,t){var n=ru(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zd(){for(var e=window,t=pa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pa(e.document)}return t}function al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function P0(e){var t=zd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Md(n.ownerDocument.documentElement,n)){if(r!==null&&al(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ou(n,i);var s=ou(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var D0=Pt&&"documentMode"in document&&11>=document.documentMode,Wn=null,vs=null,Ur=null,ys=!1;function au(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ys||Wn==null||Wn!==pa(r)||(r=Wn,"selectionStart"in r&&al(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&Rr(Ur,r)||(Ur=r,r=xa(vs,"onSelect"),0<r.length&&(t=new nl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Ko(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:Ko("Animation","AnimationEnd"),animationiteration:Ko("Animation","AnimationIteration"),animationstart:Ko("Animation","AnimationStart"),transitionend:Ko("Transition","TransitionEnd")},Oi={},_d={};Pt&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Oa(e){if(Oi[e])return Oi[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _d)return Oi[e]=t[n];return e}var Td=Oa("animationend"),Ad=Oa("animationiteration"),Ld=Oa("animationstart"),Pd=Oa("transitionend"),Dd=new Map,iu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Dd.set(e,t),Tn(t,[e])}for(qo=0;qo<iu.length;qo++)Go=iu[qo],su=Go.toLowerCase(),lu=Go[0].toUpperCase()+Go.slice(1),sn(su,"on"+lu);var Go,su,lu,qo;sn(Td,"onAnimationEnd");sn(Ad,"onAnimationIteration");sn(Ld,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Pd,"onTransitionEnd");or("onMouseEnter",["mouseout","mouseover"]);or("onMouseLeave",["mouseout","mouseover"]);or("onPointerEnter",["pointerout","pointerover"]);or("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function cu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Im(r,t,void 0,e),e.currentTarget=null}function Id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&a.isPropagationStopped())break e;cu(a,l,u),i=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&a.isPropagationStopped())break e;cu(a,l,u),i=c}}}if(ma)throw e=fs,ma=!1,fs=null,e}function se(e,t){var n=t[Ns];n===void 0&&(n=t[Ns]=new Set);var r=e+"__bubble";n.has(r)||($d(t,e,2,!1),n.add(r))}function ji(e,t,n){var r=0;t&&(r|=4),$d(n,e,r,t)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function eo(e){if(!e[Yo]){e[Yo]=!0,Wu.forEach(function(n){n!=="selectionchange"&&(I0.has(n)||ji(n,!1,e),ji(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Yo]||(t[Yo]=!0,ji("selectionchange",!1,t))}}function $d(e,t,n,r){switch(xd(t)){case 1:var a=Qm;break;case 4:a=Zm;break;default:a=el}n=a.bind(null,t,n,e),a=void 0,!ps||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ui(e,t,n,r,a){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;s=s.return}for(;l!==null;){if(s=kn(l),s===null)return;if(c=s.tag,c===5||c===6){r=i=s;continue e}l=l.parentNode}}r=r.return}ad(function(){var u=i,d=Xs(n),p=[];e:{var f=Dd.get(e);if(f!==void 0){var g=nl,x=e;switch(e){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":g=f0;break;case"focusin":x="focus",g=Bi;break;case"focusout":x="blur",g=Bi;break;case"beforeblur":case"afterblur":g=Bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=t0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=g0;break;case Td:case Ad:case Ld:g=o0;break;case Pd:g=y0;break;case"scroll":g=Rm;break;case"wheel":g=k0;break;case"copy":case"cut":case"paste":g=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Zc}var y=(t&4)!==0,T=!y&&e==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var m=u,h;m!==null;){h=m;var k=h.stateNode;if(h.tag===5&&k!==null&&(h=k,v!==null&&(k=Gr(m,v),k!=null&&y.push(to(m,k,h)))),T)break;m=m.return}0<y.length&&(f=new g(f,x,null,n,d),p.push({event:f,listeners:y}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",f&&n!==us&&(x=n.relatedTarget||n.fromElement)&&(kn(x)||x[Dt]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(x=n.relatedTarget||n.toElement,g=u,x=x?kn(x):null,x!==null&&(T=An(x),x!==T||x.tag!==5&&x.tag!==6)&&(x=null)):(g=null,x=u),g!==x)){if(y=Xc,k="onMouseLeave",v="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Zc,k="onPointerLeave",v="onPointerEnter",m="pointer"),T=g==null?f:Vn(g),h=x==null?f:Vn(x),f=new y(k,m+"leave",g,n,d),f.target=T,f.relatedTarget=h,k=null,kn(d)===u&&(y=new y(v,m+"enter",x,n,d),y.target=h,y.relatedTarget=T,k=y),T=k,g&&x)t:{for(y=g,v=x,m=0,h=y;h;h=On(h))m++;for(h=0,k=v;k;k=On(k))h++;for(;0<m-h;)y=On(y),m--;for(;0<h-m;)v=On(v),h--;for(;m--;){if(y===v||v!==null&&y===v.alternate)break t;y=On(y),v=On(v)}y=null}else y=null;g!==null&&uu(p,f,g,y,!1),x!==null&&T!==null&&uu(p,T,x,y,!0)}}e:{if(f=u?Vn(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var w=M0;else if(tu(f))if(Ed)w=A0;else{w=_0;var S=z0}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=T0);if(w&&(w=w(e,u))){Sd(p,w,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&as(f,"number",f.value)}switch(S=u?Vn(u):window,e){case"focusin":(tu(S)||S.contentEditable==="true")&&(Wn=S,vs=u,Ur=null);break;case"focusout":Ur=vs=Wn=null;break;case"mousedown":ys=!0;break;case"contextmenu":case"mouseup":case"dragend":ys=!1,au(p,n,d);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":au(p,n,d)}var z;if(ol)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Jn?wd(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(bd&&n.locale!=="ko"&&(Jn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Jn&&(z=kd()):(Gt=d,tl="value"in Gt?Gt.value:Gt.textContent,Jn=!0)),S=xa(u,E),0<S.length&&(E=new Qc(E,e,null,n,d),p.push({event:E,listeners:S}),z?E.data=z:(z=Nd(n),z!==null&&(E.data=z)))),(z=w0?N0(e,n):S0(e,n))&&(u=xa(u,"onBeforeInput"),0<u.length&&(d=new Qc("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=z))}Id(p,t)})}function to(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xa(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=Gr(e,n),i!=null&&r.unshift(to(e,i,a)),i=Gr(e,t),i!=null&&r.push(to(e,i,a))),e=e.return}return r}function On(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uu(e,t,n,r,a){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,a?(c=Gr(n,i),c!=null&&s.unshift(to(n,c,l))):a||(c=Gr(n,i),c!=null&&s.push(to(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var $0=/\r\n?/g,B0=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace($0,`
`).replace(B0,"")}function Xo(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(_(425))}function ka(){}var xs=null,ks=null;function bs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ws=typeof setTimeout=="function"?setTimeout:void 0,F0=typeof clearTimeout=="function"?clearTimeout:void 0,pu=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof pu<"u"?function(e){return pu.resolve(null).then(e).catch(j0)}:ws;function j0(e){setTimeout(function(){throw e})}function Ji(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Qr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Qr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),St="__reactFiber$"+pr,no="__reactProps$"+pr,Dt="__reactContainer$"+pr,Ns="__reactEvents$"+pr,U0="__reactListeners$"+pr,J0="__reactHandles$"+pr;function kn(e){var t=e[St];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Dt]||n[St]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fu(e);e!==null;){if(n=e[St])return n;e=fu(e)}return t}e=n,n=e.parentNode}return null}function po(e){return e=e[St]||e[Dt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ja(e){return e[no]||null}var Ss=[],Kn=-1;function ln(e){return{current:e}}function le(e){0>Kn||(e.current=Ss[Kn],Ss[Kn]=null,Kn--)}function ie(e,t){Kn++,Ss[Kn]=e.current,e.current=t}var an={},De=ln(an),Ue=ln(!1),En=an;function ar(e,t){var n=e.type.contextTypes;if(!n)return an;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Je(e){return e=e.childContextTypes,e!=null}function ba(){le(Ue),le(De)}function mu(e,t,n){if(De.current!==an)throw Error(_(168));ie(De,t),ie(Ue,n)}function Bd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(_(108,zm(e)||"Unknown",a));return fe({},n,r)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||an,En=De.current,ie(De,e),ie(Ue,Ue.current),!0}function hu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Bd(e,t,En),r.__reactInternalMemoizedMergedChildContext=e,le(Ue),le(De),ie(De,e)):le(Ue),ie(Ue,n)}var _t=null,Ua=!1,Wi=!1;function Fd(e){_t===null?_t=[e]:_t.push(e)}function W0(e){Ua=!0,Fd(e)}function cn(){if(!Wi&&_t!==null){Wi=!0;var e=0,t=oe;try{var n=_t;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Ua=!1}catch(a){throw _t!==null&&(_t=_t.slice(e+1)),cd(Qs,cn),a}finally{oe=t,Wi=!1}}return null}var qn=[],Gn=0,Na=null,Sa=0,tt=[],nt=0,Cn=null,Tt=1,At="";function yn(e,t){qn[Gn++]=Sa,qn[Gn++]=Na,Na=e,Sa=t}function Od(e,t,n){tt[nt++]=Tt,tt[nt++]=At,tt[nt++]=Cn,Cn=e;var r=Tt;e=At;var a=32-ht(r)-1;r&=~(1<<a),n+=1;var i=32-ht(t)+a;if(30<i){var s=a-a%5;i=(r&(1<<s)-1).toString(32),r>>=s,a-=s,Tt=1<<32-ht(t)+a|n<<a|r,At=i+e}else Tt=1<<i|n<<a|r,At=e}function il(e){e.return!==null&&(yn(e,1),Od(e,1,0))}function sl(e){for(;e===Na;)Na=qn[--Gn],qn[Gn]=null,Sa=qn[--Gn],qn[Gn]=null;for(;e===Cn;)Cn=tt[--nt],tt[nt]=null,At=tt[--nt],tt[nt]=null,Tt=tt[--nt],tt[nt]=null}var Ge=null,qe=null,ce=!1,mt=null;function jd(e,t){var n=rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function gu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ge=e,qe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ge=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:Tt,overflow:At}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ge=e,qe=null,!0):!1;default:return!1}}function Es(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cs(e){if(ce){var t=qe;if(t){var n=t;if(!gu(e,t)){if(Es(e))throw Error(_(418));t=Rt(n.nextSibling);var r=Ge;t&&gu(e,t)?jd(r,n):(e.flags=e.flags&-4097|2,ce=!1,Ge=e)}}else{if(Es(e))throw Error(_(418));e.flags=e.flags&-4097|2,ce=!1,Ge=e}}}function vu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ge=e}function Qo(e){if(e!==Ge)return!1;if(!ce)return vu(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bs(e.type,e.memoizedProps)),t&&(t=qe)){if(Es(e))throw Ud(),Error(_(418));for(;t;)jd(e,t),t=Rt(t.nextSibling)}if(vu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){qe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ge?Rt(e.stateNode.nextSibling):null;return!0}function Ud(){for(var e=qe;e;)e=Rt(e.nextSibling)}function ir(){qe=Ge=null,ce=!1}function ll(e){mt===null?mt=[e]:mt.push(e)}var H0=Bt.ReactCurrentBatchConfig;function _r(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=a.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Zo(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yu(e){var t=e._init;return t(e._payload)}function Jd(e){function t(v,m){if(e){var h=v.deletions;h===null?(v.deletions=[m],v.flags|=16):h.push(m)}}function n(v,m){if(!e)return null;for(;m!==null;)t(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function a(v,m){return v=rn(v,m),v.index=0,v.sibling=null,v}function i(v,m,h){return v.index=h,e?(h=v.alternate,h!==null?(h=h.index,h<m?(v.flags|=2,m):h):(v.flags|=2,m)):(v.flags|=1048576,m)}function s(v){return e&&v.alternate===null&&(v.flags|=2),v}function l(v,m,h,k){return m===null||m.tag!==6?(m=Xi(h,v.mode,k),m.return=v,m):(m=a(m,h),m.return=v,m)}function c(v,m,h,k){var w=h.type;return w===Un?d(v,m,h.props.children,k,h.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ht&&yu(w)===m.type)?(k=a(m,h.props),k.ref=_r(v,m,h),k.return=v,k):(k=da(h.type,h.key,h.props,null,v.mode,k),k.ref=_r(v,m,h),k.return=v,k)}function u(v,m,h,k){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=Qi(h,v.mode,k),m.return=v,m):(m=a(m,h.children||[]),m.return=v,m)}function d(v,m,h,k,w){return m===null||m.tag!==7?(m=Sn(h,v.mode,k,w),m.return=v,m):(m=a(m,h),m.return=v,m)}function p(v,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Xi(""+m,v.mode,h),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Bo:return h=da(m.type,m.key,m.props,null,v.mode,h),h.ref=_r(v,null,m),h.return=v,h;case jn:return m=Qi(m,v.mode,h),m.return=v,m;case Ht:var k=m._init;return p(v,k(m._payload),h)}if(Dr(m)||Er(m))return m=Sn(m,v.mode,h,null),m.return=v,m;Zo(v,m)}return null}function f(v,m,h,k){var w=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return w!==null?null:l(v,m,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Bo:return h.key===w?c(v,m,h,k):null;case jn:return h.key===w?u(v,m,h,k):null;case Ht:return w=h._init,f(v,m,w(h._payload),k)}if(Dr(h)||Er(h))return w!==null?null:d(v,m,h,k,null);Zo(v,h)}return null}function g(v,m,h,k,w){if(typeof k=="string"&&k!==""||typeof k=="number")return v=v.get(h)||null,l(m,v,""+k,w);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Bo:return v=v.get(k.key===null?h:k.key)||null,c(m,v,k,w);case jn:return v=v.get(k.key===null?h:k.key)||null,u(m,v,k,w);case Ht:var S=k._init;return g(v,m,h,S(k._payload),w)}if(Dr(k)||Er(k))return v=v.get(h)||null,d(m,v,k,w,null);Zo(m,k)}return null}function x(v,m,h,k){for(var w=null,S=null,z=m,E=m=0,A=null;z!==null&&E<h.length;E++){z.index>E?(A=z,z=null):A=z.sibling;var b=f(v,z,h[E],k);if(b===null){z===null&&(z=A);break}e&&z&&b.alternate===null&&t(v,z),m=i(b,m,E),S===null?w=b:S.sibling=b,S=b,z=A}if(E===h.length)return n(v,z),ce&&yn(v,E),w;if(z===null){for(;E<h.length;E++)z=p(v,h[E],k),z!==null&&(m=i(z,m,E),S===null?w=z:S.sibling=z,S=z);return ce&&yn(v,E),w}for(z=r(v,z);E<h.length;E++)A=g(z,v,E,h[E],k),A!==null&&(e&&A.alternate!==null&&z.delete(A.key===null?E:A.key),m=i(A,m,E),S===null?w=A:S.sibling=A,S=A);return e&&z.forEach(function(I){return t(v,I)}),ce&&yn(v,E),w}function y(v,m,h,k){var w=Er(h);if(typeof w!="function")throw Error(_(150));if(h=w.call(h),h==null)throw Error(_(151));for(var S=w=null,z=m,E=m=0,A=null,b=h.next();z!==null&&!b.done;E++,b=h.next()){z.index>E?(A=z,z=null):A=z.sibling;var I=f(v,z,b.value,k);if(I===null){z===null&&(z=A);break}e&&z&&I.alternate===null&&t(v,z),m=i(I,m,E),S===null?w=I:S.sibling=I,S=I,z=A}if(b.done)return n(v,z),ce&&yn(v,E),w;if(z===null){for(;!b.done;E++,b=h.next())b=p(v,b.value,k),b!==null&&(m=i(b,m,E),S===null?w=b:S.sibling=b,S=b);return ce&&yn(v,E),w}for(z=r(v,z);!b.done;E++,b=h.next())b=g(z,v,E,b.value,k),b!==null&&(e&&b.alternate!==null&&z.delete(b.key===null?E:b.key),m=i(b,m,E),S===null?w=b:S.sibling=b,S=b);return e&&z.forEach(function($){return t(v,$)}),ce&&yn(v,E),w}function T(v,m,h,k){if(typeof h=="object"&&h!==null&&h.type===Un&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Bo:e:{for(var w=h.key,S=m;S!==null;){if(S.key===w){if(w=h.type,w===Un){if(S.tag===7){n(v,S.sibling),m=a(S,h.props.children),m.return=v,v=m;break e}}else if(S.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Ht&&yu(w)===S.type){n(v,S.sibling),m=a(S,h.props),m.ref=_r(v,S,h),m.return=v,v=m;break e}n(v,S);break}else t(v,S);S=S.sibling}h.type===Un?(m=Sn(h.props.children,v.mode,k,h.key),m.return=v,v=m):(k=da(h.type,h.key,h.props,null,v.mode,k),k.ref=_r(v,m,h),k.return=v,v=k)}return s(v);case jn:e:{for(S=h.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(v,m.sibling),m=a(m,h.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else t(v,m);m=m.sibling}m=Qi(h,v.mode,k),m.return=v,v=m}return s(v);case Ht:return S=h._init,T(v,m,S(h._payload),k)}if(Dr(h))return x(v,m,h,k);if(Er(h))return y(v,m,h,k);Zo(v,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(v,m.sibling),m=a(m,h),m.return=v,v=m):(n(v,m),m=Xi(h,v.mode,k),m.return=v,v=m),s(v)):n(v,m)}return T}var sr=Jd(!0),Wd=Jd(!1),Ea=ln(null),Ca=null,Yn=null,cl=null;function ul(){cl=Yn=Ca=null}function dl(e){var t=Ea.current;le(Ea),e._currentValue=t}function Ms(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Ca=e,cl=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(je=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(cl!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Ca===null)throw Error(_(308));Yn=e,Ca.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var bn=null;function pl(e){bn===null?bn=[e]:bn.push(e)}function Hd(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,pl(t)):(n.next=a.next,a.next=n),t.interleaved=n,It(e,r)}function It(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(R&2)!==0){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,It(e,n)}return a=r.interleaved,a===null?(t.next=t,pl(r)):(t.next=a.next,a.next=t),r.interleaved=t,It(e,n)}function aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}function xu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ma(e,t,n,r){var a=e.updateQueue;Vt=!1;var i=a.firstBaseUpdate,s=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?i=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(i!==null){var p=a.baseState;s=0,d=u=c=null,l=i;do{var f=l.lane,g=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,y=l;switch(f=t,g=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){p=x.call(g,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,f=typeof x=="function"?x.call(g,p,f):x,f==null)break e;p=fe({},p,f);break e;case 2:Vt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=a.effects,f===null?a.effects=[l]:f.push(l))}else g={eventTime:g,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=g,c=p):d=d.next=g,s|=f;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;f=l,l=f.next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}while(!0);if(d===null&&(c=p),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);zn|=s,e.lanes=s,e.memoizedState=p}}function ku(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(_(191,a));a.call(r)}}}var fo={},Ct=ln(fo),ro=ln(fo),oo=ln(fo);function wn(e){if(e===fo)throw Error(_(174));return e}function ml(e,t){switch(ie(oo,t),ie(ro,e),ie(Ct,fo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ss(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ss(t,e)}le(Ct),ie(Ct,t)}function lr(){le(Ct),le(ro),le(oo)}function Kd(e){wn(oo.current);var t=wn(Ct.current),n=ss(t,e.type);t!==n&&(ie(ro,e),ie(Ct,n))}function hl(e){ro.current===e&&(le(Ct),le(ro))}var de=ln(0);function za(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hi=[];function gl(){for(var e=0;e<Hi.length;e++)Hi[e]._workInProgressVersionPrimary=null;Hi.length=0}var ia=Bt.ReactCurrentDispatcher,Vi=Bt.ReactCurrentBatchConfig,Mn=0,pe=null,we=null,Se=null,_a=!1,Jr=!1,ao=0,V0=0;function Ae(){throw Error(_(321))}function vl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function yl(e,t,n,r,a,i){if(Mn=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=e===null||e.memoizedState===null?Y0:X0,e=n(r,a),Jr){i=0;do{if(Jr=!1,ao=0,25<=i)throw Error(_(301));i+=1,Se=we=null,t.updateQueue=null,ia.current=Q0,e=n(r,a)}while(Jr)}if(ia.current=Ta,t=we!==null&&we.next!==null,Mn=0,Se=we=pe=null,_a=!1,t)throw Error(_(300));return e}function xl(){var e=ao!==0;return ao=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?pe.memoizedState=Se=e:Se=Se.next=e,Se}function it(){if(we===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Se===null?pe.memoizedState:Se.next;if(t!==null)Se=t,we=e;else{if(e===null)throw Error(_(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Se===null?pe.memoizedState=Se=e:Se=Se.next=e}return Se}function io(e,t){return typeof t=="function"?t(e):t}function Ki(e){var t=it(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=we,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var s=a.next;a.next=i.next,i.next=s}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var l=s=null,c=null,u=i;do{var d=u.lane;if((Mn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=r):c=c.next=p,pe.lanes|=d,zn|=d}u=u.next}while(u!==null&&u!==i);c===null?s=r:c.next=l,vt(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,pe.lanes|=i,zn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=it(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do i=e(i,s.action),s=s.next;while(s!==a);vt(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qd(){}function Gd(e,t){var n=pe,r=it(),a=t(),i=!vt(r.memoizedState,a);if(i&&(r.memoizedState=a,je=!0),r=r.queue,kl(Qd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,so(9,Xd.bind(null,n,r,a,t),void 0,null),Ee===null)throw Error(_(349));(Mn&30)!==0||Yd(n,t,a)}return a}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Xd(e,t,n,r){t.value=n,t.getSnapshot=r,Zd(t)&&Rd(e)}function Qd(e,t,n){return n(function(){Zd(t)&&Rd(e)})}function Zd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function Rd(e){var t=It(e,1);t!==null&&gt(t,e,1,-1)}function bu(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=G0.bind(null,pe,e),[t.memoizedState,e]}function so(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ep(){return it().memoizedState}function sa(e,t,n,r){var a=Nt();pe.flags|=e,a.memoizedState=so(1|t,n,void 0,r===void 0?null:r)}function Ja(e,t,n,r){var a=it();r=r===void 0?null:r;var i=void 0;if(we!==null){var s=we.memoizedState;if(i=s.destroy,r!==null&&vl(r,s.deps)){a.memoizedState=so(t,n,i,r);return}}pe.flags|=e,a.memoizedState=so(1|t,n,i,r)}function wu(e,t){return sa(8390656,8,e,t)}function kl(e,t){return Ja(2048,8,e,t)}function tp(e,t){return Ja(4,2,e,t)}function np(e,t){return Ja(4,4,e,t)}function rp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function op(e,t,n){return n=n!=null?n.concat([e]):null,Ja(4,4,rp.bind(null,t,e),n)}function bl(){}function ap(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ip(e,t){var n=it();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sp(e,t,n){return(Mn&21)===0?(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n):(vt(n,t)||(n=pd(),pe.lanes|=n,zn|=n,e.baseState=!0),t)}function K0(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Vi.transition;Vi.transition={};try{e(!1),t()}finally{oe=n,Vi.transition=r}}function lp(){return it().memoizedState}function q0(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cp(e))up(t,n);else if(n=Hd(e,t,n,r),n!==null){var a=Be();gt(n,e,r,a),dp(n,t,r)}}function G0(e,t,n){var r=nn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cp(e))up(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(a.hasEagerState=!0,a.eagerState=l,vt(l,s)){var c=t.interleaved;c===null?(a.next=a,pl(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}n=Hd(e,t,a,r),n!==null&&(a=Be(),gt(n,e,r,a),dp(n,t,r))}}function cp(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function up(e,t){Jr=_a=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dp(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zs(e,n)}}var Ta={readContext:at,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Y0={readContext:at,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:wu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sa(4194308,4,rp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return sa(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=q0.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:bu,useDebugValue:bl,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=bu(!1),t=e[0];return e=K0.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,a=Nt();if(ce){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),Ee===null)throw Error(_(349));(Mn&30)!==0||Yd(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,wu(Qd.bind(null,r,i,e),[e]),r.flags|=2048,so(9,Xd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Nt(),t=Ee.identifierPrefix;if(ce){var n=At,r=Tt;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ao++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=V0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},X0={readContext:at,useCallback:ap,useContext:at,useEffect:kl,useImperativeHandle:op,useInsertionEffect:tp,useLayoutEffect:np,useMemo:ip,useReducer:Ki,useRef:ep,useState:function(){return Ki(io)},useDebugValue:bl,useDeferredValue:function(e){var t=it();return sp(t,we.memoizedState,e)},useTransition:function(){var e=Ki(io)[0],t=it().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:Gd,useId:lp,unstable_isNewReconciler:!1},Q0={readContext:at,useCallback:ap,useContext:at,useEffect:kl,useImperativeHandle:op,useInsertionEffect:tp,useLayoutEffect:np,useMemo:ip,useReducer:qi,useRef:ep,useState:function(){return qi(io)},useDebugValue:bl,useDeferredValue:function(e){var t=it();return we===null?t.memoizedState=e:sp(t,we.memoizedState,e)},useTransition:function(){var e=qi(io)[0],t=it().memoizedState;return[e,t]},useMutableSource:qd,useSyncExternalStore:Gd,useId:lp,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wa={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),a=nn(e),i=Lt(r,a);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,a),t!==null&&(gt(t,e,a,r),aa(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),a=nn(e),i=Lt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,a),t!==null&&(gt(t,e,a,r),aa(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=nn(e),a=Lt(n,r);a.tag=2,t!=null&&(a.callback=t),t=en(e,a,r),t!==null&&(gt(t,e,r,n),aa(t,e,r))}};function Nu(e,t,n,r,a,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(a,i):!0}function pp(e,t,n){var r=!1,a=an,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(a=Je(t)?En:De.current,r=t.contextTypes,i=(r=r!=null)?ar(e,a):an),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function Su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wa.enqueueReplaceState(t,t.state,null)}function _s(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},fl(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=at(i):(i=Je(t)?En:De.current,a.context=ar(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zs(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&Wa.enqueueReplaceState(a,a.state,null),Ma(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function cr(e,t){try{var n="",r=t;do n+=Mm(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ts(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function fp(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){La||(La=!0,js=r),Ts(e,t)},n}function mp(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){Ts(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ts(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Z0;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=ph.bind(null,e,t,n),t.then(e,e))}function Cu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var R0=Bt.ReactCurrentOwner,je=!1;function $e(e,t,n,r){t.child=e===null?Wd(t,null,n,r):sr(t,e.child,n,r)}function zu(e,t,n,r,a){n=n.render;var i=t.ref;return nr(t,a),r=yl(e,t,n,r,i,a),n=xl(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$t(e,t,a)):(ce&&n&&il(t),t.flags|=1,$e(e,t,r,a),t.child)}function _u(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!_l(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,hp(e,t,i,r,a)):(e=da(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&a)===0){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:Rr,n(s,r)&&e.ref===t.ref)return $t(e,t,a)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(Rr(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&a)!==0)(e.flags&131072)!==0&&(je=!0);else return t.lanes=e.lanes,$t(e,t,a)}return As(e,t,n,r,a)}function gp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Qn,Ke),Ke|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Qn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(Qn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(Qn,Ke),Ke|=r;return $e(e,t,a,n),t.child}function vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function As(e,t,n,r,a){var i=Je(n)?En:De.current;return i=ar(t,i),nr(t,a),n=yl(e,t,n,r,i,a),r=xl(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,$t(e,t,a)):(ce&&r&&il(t),t.flags|=1,$e(e,t,n,a),t.child)}function Tu(e,t,n,r,a){if(Je(n)){var i=!0;wa(t)}else i=!1;if(nr(t,a),t.stateNode===null)la(e,t),pp(t,n,r),_s(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=at(u):(u=Je(n)?En:De.current,u=ar(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Su(t,s,r,u),Vt=!1;var f=t.memoizedState;s.state=f,Ma(t,r,s,a),c=t.memoizedState,l!==r||f!==c||Ue.current||Vt?(typeof d=="function"&&(zs(t,n,d,r),c=t.memoizedState),(l=Vt||Nu(t,n,l,r,f,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vd(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:pt(t.type,l),s.props=u,p=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=at(c):(c=Je(n)?En:De.current,c=ar(t,c));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Su(t,s,r,c),Vt=!1,f=t.memoizedState,s.state=f,Ma(t,r,s,a);var x=t.memoizedState;l!==p||f!==x||Ue.current||Vt?(typeof g=="function"&&(zs(t,n,g,r),x=t.memoizedState),(u=Vt||Nu(t,n,u,r,f,x,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ls(e,t,n,r,i,a)}function Ls(e,t,n,r,a,i){vp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&hu(t,n,!1),$t(e,t,i);r=t.stateNode,R0.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,l,i)):$e(e,t,l,i),t.memoizedState=r.state,a&&hu(t,n,!0),t.child}function yp(e){var t=e.stateNode;t.pendingContext?mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&mu(e,t.context,!1),ml(e,t.containerInfo)}function Au(e,t,n,r,a){return ir(),ll(a),t.flags|=256,$e(e,t,n,r),t.child}var Ps={dehydrated:null,treeContext:null,retryLane:0};function Ds(e){return{baseLanes:e,cachePool:null,transitions:null}}function xp(e,t,n){var r=t.pendingProps,a=de.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ie(de,a&1),e===null)return Cs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=s):i=Ka(s,r,0,null),e=Sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ds(n),t.memoizedState=Ps,e):wl(t,s));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return eh(e,t,s,r,l,a,n);if(i){i=r.fallback,s=t.mode,a=e.child,l=a.sibling;var c={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=rn(a,c),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?i=rn(l,i):(i=Sn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Ds(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ps,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wl(e,t){return t=Ka({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ro(e,t,n,r){return r!==null&&ll(r),sr(t,e.child,null,n),e=wl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function eh(e,t,n,r,a,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Gi(Error(_(422))),Ro(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Ka({mode:"visible",children:r.children},a,0,null),i=Sn(i,a,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&sr(t,e.child,null,s),t.child.memoizedState=Ds(s),t.memoizedState=Ps,i);if((t.mode&1)===0)return Ro(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(_(419)),r=Gi(i,r,void 0),Ro(e,t,s,r)}if(l=(s&e.childLanes)!==0,je||l){if(r=Ee,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(r.suspendedLanes|s))!==0?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,It(e,a),gt(r,e,a,-1))}return zl(),r=Gi(Error(_(421))),Ro(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=fh.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,qe=Rt(a.nextSibling),Ge=t,ce=!0,mt=null,e!==null&&(tt[nt++]=Tt,tt[nt++]=At,tt[nt++]=Cn,Tt=e.id,At=e.overflow,Cn=t),t=wl(t,r.children),t.flags|=4096,t)}function Lu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ms(e.return,t,n)}function Yi(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function kp(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=de.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lu(e,n,t);else if(e.tag===19)Lu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(de,r),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&za(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Yi(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&za(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Yi(t,!0,n,null,i);break;case"together":Yi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function la(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function $t(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function th(e,t,n){switch(t.tag){case 3:yp(t),ir();break;case 5:Kd(t);break;case 1:Je(t.type)&&wa(t);break;case 4:ml(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ie(Ea,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(de,de.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?xp(e,t,n):(ie(de,de.current&1),e=$t(e,t,n),e!==null?e.sibling:null);ie(de,de.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return kp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ie(de,de.current),r)break;return null;case 22:case 23:return t.lanes=0,gp(e,t,n)}return $t(e,t,n)}var bp,Is,wp,Np;bp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Is=function(){};wp=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,wn(Ct.current);var i=null;switch(n){case"input":a=rs(e,a),r=rs(e,r),i=[];break;case"select":a=fe({},a,{value:void 0}),r=fe({},r,{value:void 0}),i=[];break;case"textarea":a=is(e,a),r=is(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ka)}ls(n,r);var s;n=null;for(u in a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var l=a[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=a?.[u],r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&se("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Np=function(e,t,n,r){n!==r&&(t.flags|=4)};function Tr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function nh(e,t,n){var r=t.pendingProps;switch(sl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return Je(t.type)&&ba(),Le(t),null;case 3:return r=t.stateNode,lr(),le(Ue),le(De),gl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mt!==null&&(Ws(mt),mt=null))),Is(e,t),Le(t),null;case 5:hl(t);var a=wn(oo.current);if(n=t.type,e!==null&&t.stateNode!=null)wp(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return Le(t),null}if(e=wn(Ct.current),Qo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[St]=t,r[no]=i,e=(t.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(a=0;a<$r.length;a++)se($r[a],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":jc(r,i),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},se("invalid",r);break;case"textarea":Jc(r,i),se("invalid",r)}ls(n,i),a=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Xo(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Xo(r.textContent,l,e),a=["children",""+l]):Kr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&se("scroll",r)}switch(n){case"input":Fo(r),Uc(r,i,!0);break;case"textarea":Fo(r),Wc(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ka)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[St]=t,e[no]=r,bp(e,t,!1,!1),t.stateNode=e;e:{switch(s=cs(n,r),n){case"dialog":se("cancel",e),se("close",e),a=r;break;case"iframe":case"object":case"embed":se("load",e),a=r;break;case"video":case"audio":for(a=0;a<$r.length;a++)se($r[a],e);a=r;break;case"source":se("error",e),a=r;break;case"img":case"image":case"link":se("error",e),se("load",e),a=r;break;case"details":se("toggle",e),a=r;break;case"input":jc(e,r),a=rs(e,r),se("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=fe({},r,{value:void 0}),se("invalid",e);break;case"textarea":Jc(e,r),a=is(e,r),se("invalid",e);break;default:a=r}ls(n,a),l=a;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?ed(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Zu(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&qr(e,c):typeof c=="number"&&qr(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?c!=null&&i==="onScroll"&&se("scroll",e):c!=null&&Ks(e,i,c,s))}switch(n){case"input":Fo(e),Uc(e,r,!1);break;case"textarea":Fo(e),Wc(e);break;case"option":r.value!=null&&e.setAttribute("value",""+on(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Zn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Zn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Np(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=wn(oo.current),wn(Ct.current),Qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[St]=t,(i=r.nodeValue!==n)&&(e=Ge,e!==null))switch(e.tag){case 3:Xo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[St]=t,t.stateNode=r}return Le(t),null;case 13:if(le(de),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Ud(),ir(),t.flags|=98560,i=!1;else if(i=Qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(_(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(_(317));i[St]=t}else ir(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),i=!1}else mt!==null&&(Ws(mt),mt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(de.current&1)!==0?Ne===0&&(Ne=3):zl())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return lr(),Is(e,t),e===null&&eo(t.stateNode.containerInfo),Le(t),null;case 10:return dl(t.type._context),Le(t),null;case 17:return Je(t.type)&&ba(),Le(t),null;case 19:if(le(de),i=t.memoizedState,i===null)return Le(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Tr(i,!1);else{if(Ne!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=za(e),s!==null){for(t.flags|=128,Tr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(de,de.current&1|2),t.child}e=e.sibling}i.tail!==null&&ye()>ur&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304)}else{if(!r)if(e=za(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Tr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!ce)return Le(t),null}else 2*ye()-i.renderingStartTime>ur&&n!==1073741824&&(t.flags|=128,r=!0,Tr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ye(),t.sibling=null,n=de.current,ie(de,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Ml(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function rh(e,t){switch(sl(t),t.tag){case 1:return Je(t.type)&&ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return lr(),le(Ue),le(De),gl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return hl(t),null;case 13:if(le(de),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));ir()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(de),null;case 4:return lr(),null;case 10:return dl(t.type._context),null;case 22:case 23:return Ml(),null;case 24:return null;default:return null}}var ea=!1,Pe=!1,oh=typeof WeakSet=="function"?WeakSet:Set,F=null;function Xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function $s(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Pu=!1;function ah(e,t){if(xs=va,e=zd(),al(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var g;p!==n||a!==0&&p.nodeType!==3||(l=s+a),p!==i||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(g=p.firstChild)!==null;)f=p,p=g;for(;;){if(p===e)break t;if(f===n&&++u===a&&(l=s),f===i&&++d===r&&(c=s),(g=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ks={focusedElem:e,selectionRange:n},va=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,T=x.memoizedState,v=t.stateNode,m=v.getSnapshotBeforeUpdate(t.elementType===t.type?y:pt(t.type,y),T);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(k){ge(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return x=Pu,Pu=!1,x}function Wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&$s(t,n,i)}a=a.next}while(a!==r)}}function Ha(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Sp(e){var t=e.alternate;t!==null&&(e.alternate=null,Sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[St],delete t[no],delete t[Ns],delete t[U0],delete t[J0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ep(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ep(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ka));else if(r!==4&&(e=e.child,e!==null))for(Fs(e,t,n),e=e.sibling;e!==null;)Fs(e,t,n),e=e.sibling}function Os(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Os(e,t,n),e=e.sibling;e!==null;)Os(e,t,n),e=e.sibling}var Ce=null,ft=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Cp(e,t,n),n=n.sibling}function Cp(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount($a,n)}catch{}switch(n.tag){case 5:Pe||Xn(n,t);case 6:var r=Ce,a=ft;Ce=null,Wt(e,t,n),Ce=r,ft=a,Ce!==null&&(ft?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(ft?(e=Ce,n=n.stateNode,e.nodeType===8?Ji(e.parentNode,n):e.nodeType===1&&Ji(e,n),Qr(e)):Ji(Ce,n.stateNode));break;case 4:r=Ce,a=ft,Ce=n.stateNode.containerInfo,ft=!0,Wt(e,t,n),Ce=r,ft=a;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,s=i.destroy;i=i.tag,s!==void 0&&((i&2)!==0||(i&4)!==0)&&$s(n,t,s),a=a.next}while(a!==r)}Wt(e,t,n);break;case 1:if(!Pe&&(Xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Wt(e,t,n),Pe=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new oh),t.forEach(function(r){var a=mh.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,ft=!1;break e;case 3:Ce=l.stateNode.containerInfo,ft=!0;break e;case 4:Ce=l.stateNode.containerInfo,ft=!0;break e}l=l.return}if(Ce===null)throw Error(_(160));Cp(i,s,a),Ce=null,ft=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){ge(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mp(t,e),t=t.sibling}function Mp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),wt(e),r&4){try{Wr(3,e,e.return),Ha(3,e)}catch(y){ge(e,e.return,y)}try{Wr(5,e,e.return)}catch(y){ge(e,e.return,y)}}break;case 1:dt(t,e),wt(e),r&512&&n!==null&&Xn(n,n.return);break;case 5:if(dt(t,e),wt(e),r&512&&n!==null&&Xn(n,n.return),e.flags&32){var a=e.stateNode;try{qr(a,"")}catch(y){ge(e,e.return,y)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Yu(a,i),cs(l,s);var u=cs(l,i);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];d==="style"?ed(a,p):d==="dangerouslySetInnerHTML"?Zu(a,p):d==="children"?qr(a,p):Ks(a,d,p,u)}switch(l){case"input":os(a,i);break;case"textarea":Xu(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?Zn(a,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?Zn(a,!!i.multiple,i.defaultValue,!0):Zn(a,!!i.multiple,i.multiple?[]:"",!1))}a[no]=i}catch(y){ge(e,e.return,y)}}break;case 6:if(dt(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(_(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(y){ge(e,e.return,y)}}break;case 3:if(dt(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qr(t.containerInfo)}catch(y){ge(e,e.return,y)}break;case 4:dt(t,e),wt(e);break;case 13:dt(t,e),wt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(El=ye())),r&4&&Iu(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Pe=(u=Pe)||d,dt(t,e),Pe=u):dt(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&(e.mode&1)!==0)for(F=e,d=e.child;d!==null;){for(p=F=d;F!==null;){switch(f=F,g=f.child,f.tag){case 0:case 11:case 14:case 15:Wr(4,f,f.return);break;case 1:Xn(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(y){ge(r,n,y)}}break;case 5:Xn(f,f.return);break;case 22:if(f.memoizedState!==null){Bu(p);continue}}g!==null?(g.return=f,F=g):Bu(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{a=p.stateNode,u?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Ru("display",s))}catch(y){ge(e,e.return,y)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(y){ge(e,e.return,y)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:dt(t,e),wt(e),r&4&&Iu(e);break;case 21:break;default:dt(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ep(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(qr(a,""),r.flags&=-33);var i=Du(e);Os(e,i,a);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Du(e);Fs(e,l,s);break;default:throw Error(_(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ih(e,t,n){F=e,zp(e,t,n)}function zp(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var a=F,i=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||ea;if(!s){var l=a.alternate,c=l!==null&&l.memoizedState!==null||Pe;l=ea;var u=Pe;if(ea=s,(Pe=c)&&!u)for(F=a;F!==null;)s=F,c=s.child,s.tag===22&&s.memoizedState!==null?Fu(a):c!==null?(c.return=s,F=c):Fu(a);for(;i!==null;)F=i,zp(i,t,n),i=i.sibling;F=a,ea=l,Pe=u}$u(e,t,n)}else(a.subtreeFlags&8772)!==0&&i!==null?(i.return=a,F=i):$u(e,t,n)}}function $u(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pe||Ha(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ku(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ku(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Qr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Pe||t.flags&512&&Bs(t)}catch(f){ge(t,t.return,f)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Bu(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Fu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ha(4,t)}catch(c){ge(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(c){ge(t,a,c)}}var i=t.return;try{Bs(t)}catch(c){ge(t,i,c)}break;case 5:var s=t.return;try{Bs(t)}catch(c){ge(t,s,c)}}}catch(c){ge(t,t.return,c)}if(t===e){F=null;break}var l=t.sibling;if(l!==null){l.return=t.return,F=l;break}F=t.return}}var sh=Math.ceil,Aa=Bt.ReactCurrentDispatcher,Nl=Bt.ReactCurrentOwner,ot=Bt.ReactCurrentBatchConfig,R=0,Ee=null,ke=null,Me=0,Ke=0,Qn=ln(0),Ne=0,lo=null,zn=0,Va=0,Sl=0,Hr=null,Oe=null,El=0,ur=1/0,zt=null,La=!1,js=null,tn=null,ta=!1,Yt=null,Pa=0,Vr=0,Us=null,ca=-1,ua=0;function Be(){return(R&6)!==0?ye():ca!==-1?ca:ca=ye()}function nn(e){return(e.mode&1)===0?1:(R&2)!==0&&Me!==0?Me&-Me:H0.transition!==null?(ua===0&&(ua=pd()),ua):(e=oe,e!==0||(e=window.event,e=e===void 0?16:xd(e.type)),e)}function gt(e,t,n,r){if(50<Vr)throw Vr=0,Us=null,Error(_(185));co(e,n,r),((R&2)===0||e!==Ee)&&(e===Ee&&((R&2)===0&&(Va|=n),Ne===4&&qt(e,Me)),We(e,r),n===1&&R===0&&(t.mode&1)===0&&(ur=ye()+500,Ua&&cn()))}function We(e,t){var n=e.callbackNode;Km(e,t);var r=ga(e,e===Ee?Me:0);if(r===0)n!==null&&Kc(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Kc(n),t===1)e.tag===0?W0(Ou.bind(null,e)):Fd(Ou.bind(null,e)),O0(function(){(R&6)===0&&cn()}),n=null;else{switch(fd(r)){case 1:n=Qs;break;case 4:n=ud;break;case 16:n=ha;break;case 536870912:n=dd;break;default:n=ha}n=$p(n,_p.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _p(e,t){if(ca=-1,ua=0,(R&6)!==0)throw Error(_(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=ga(e,e===Ee?Me:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Da(e,r);else{t=r;var a=R;R|=2;var i=Ap();(Ee!==e||Me!==t)&&(zt=null,ur=ye()+500,Nn(e,t));do try{uh();break}catch(l){Tp(e,l)}while(!0);ul(),Aa.current=i,R=a,ke!==null?t=0:(Ee=null,Me=0,t=Ne)}if(t!==0){if(t===2&&(a=ms(e),a!==0&&(r=a,t=Js(e,a))),t===1)throw n=lo,Nn(e,0),qt(e,r),We(e,ye()),n;if(t===6)qt(e,r);else{if(a=e.current.alternate,(r&30)===0&&!lh(a)&&(t=Da(e,r),t===2&&(i=ms(e),i!==0&&(r=i,t=Js(e,i))),t===1))throw n=lo,Nn(e,0),qt(e,r),We(e,ye()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:xn(e,Oe,zt);break;case 3:if(qt(e,r),(r&130023424)===r&&(t=El+500-ye(),10<t)){if(ga(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ws(xn.bind(null,e,Oe,zt),t);break}xn(e,Oe,zt);break;case 4:if(qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-ht(r);i=1<<s,s=t[s],s>a&&(a=s),r&=~i}if(r=a,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sh(r/1960))-r,10<r){e.timeoutHandle=ws(xn.bind(null,e,Oe,zt),r);break}xn(e,Oe,zt);break;case 5:xn(e,Oe,zt);break;default:throw Error(_(329))}}}return We(e,ye()),e.callbackNode===n?_p.bind(null,e):null}function Js(e,t){var n=Hr;return e.current.memoizedState.isDehydrated&&(Nn(e,t).flags|=256),e=Da(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&Ws(t)),e}function Ws(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function lh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!vt(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function qt(e,t){for(t&=~Sl,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Ou(e){if((R&6)!==0)throw Error(_(327));rr();var t=ga(e,0);if((t&1)===0)return We(e,ye()),null;var n=Da(e,t);if(e.tag!==0&&n===2){var r=ms(e);r!==0&&(t=r,n=Js(e,r))}if(n===1)throw n=lo,Nn(e,0),qt(e,t),We(e,ye()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xn(e,Oe,zt),We(e,ye()),null}function Cl(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(ur=ye()+500,Ua&&cn())}}function _n(e){Yt!==null&&Yt.tag===0&&(R&6)===0&&rr();var t=R;R|=1;var n=ot.transition,r=oe;try{if(ot.transition=null,oe=1,e)return e()}finally{oe=r,ot.transition=n,R=t,(R&6)===0&&cn()}}function Ml(){Ke=Qn.current,le(Qn)}function Nn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,F0(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(sl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ba();break;case 3:lr(),le(Ue),le(De),gl();break;case 5:hl(r);break;case 4:lr();break;case 13:le(de);break;case 19:le(de);break;case 10:dl(r.type._context);break;case 22:case 23:Ml()}n=n.return}if(Ee=e,ke=e=rn(e.current,null),Me=Ke=t,Ne=0,lo=null,Sl=Va=zn=0,Oe=Hr=null,bn!==null){for(t=0;t<bn.length;t++)if(n=bn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=a,r.next=s}n.pending=r}bn=null}return e}function Tp(e,t){do{var n=ke;try{if(ul(),ia.current=Ta,_a){for(var r=pe.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}_a=!1}if(Mn=0,Se=we=pe=null,Jr=!1,ao=0,Nl.current=null,n===null||n.return===null){Ne=1,lo=t,ke=null;break}e:{var i=e,s=n.return,l=n,c=t;if(t=Me,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if((d.mode&1)===0&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Cu(s);if(g!==null){g.flags&=-257,Mu(g,s,l,i,t),g.mode&1&&Eu(i,u,t),t=g,c=u;var x=t.updateQueue;if(x===null){var y=new Set;y.add(c),t.updateQueue=y}else x.add(c);break e}else{if((t&1)===0){Eu(i,u,t),zl();break e}c=Error(_(426))}}else if(ce&&l.mode&1){var T=Cu(s);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),Mu(T,s,l,i,t),ll(cr(c,l));break e}}i=c=cr(c,l),Ne!==4&&(Ne=2),Hr===null?Hr=[i]:Hr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=fp(i,c,t);xu(i,v);break e;case 1:l=c;var m=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var k=mp(i,l,t);xu(i,k);break e}}i=i.return}while(i!==null)}Pp(n)}catch(w){t=w,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Ap(){var e=Aa.current;return Aa.current=Ta,e===null?Ta:e}function zl(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ee===null||(zn&268435455)===0&&(Va&268435455)===0||qt(Ee,Me)}function Da(e,t){var n=R;R|=2;var r=Ap();(Ee!==e||Me!==t)&&(zt=null,Nn(e,t));do try{ch();break}catch(a){Tp(e,a)}while(!0);if(ul(),R=n,Aa.current=r,ke!==null)throw Error(_(261));return Ee=null,Me=0,Ne}function ch(){for(;ke!==null;)Lp(ke)}function uh(){for(;ke!==null&&!Bm();)Lp(ke)}function Lp(e){var t=Ip(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Pp(e):ke=t,Nl.current=null}function Pp(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=nh(n,t,Ke),n!==null){ke=n;return}}else{if(n=rh(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ne=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ne===0&&(Ne=5)}function xn(e,t,n){var r=oe,a=ot.transition;try{ot.transition=null,oe=1,dh(e,t,n,r)}finally{ot.transition=a,oe=r}return null}function dh(e,t,n,r){do rr();while(Yt!==null);if((R&6)!==0)throw Error(_(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(qm(e,i),e===Ee&&(ke=Ee=null,Me=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ta||(ta=!0,$p(ha,function(){return rr(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ot.transition,ot.transition=null;var s=oe;oe=1;var l=R;R|=4,Nl.current=null,ah(e,n),Mp(n,e),P0(ks),va=!!xs,ks=xs=null,e.current=n,ih(n,e,a),Fm(),R=l,oe=s,ot.transition=i}else e.current=n;if(ta&&(ta=!1,Yt=e,Pa=a),i=e.pendingLanes,i===0&&(tn=null),Um(n.stateNode,r),We(e,ye()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(La)throw La=!1,e=js,js=null,e;return(Pa&1)!==0&&e.tag!==0&&rr(),i=e.pendingLanes,(i&1)!==0?e===Us?Vr++:(Vr=0,Us=e):Vr=0,cn(),null}function rr(){if(Yt!==null){var e=fd(Pa),t=ot.transition,n=oe;try{if(ot.transition=null,oe=16>e?16:e,Yt===null)var r=!1;else{if(e=Yt,Yt=null,Pa=0,(R&6)!==0)throw Error(_(331));var a=R;for(R|=4,F=e.current;F!==null;){var i=F,s=i.child;if((F.flags&16)!==0){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:Wr(8,d,i)}var p=d.child;if(p!==null)p.return=d,F=p;else for(;F!==null;){d=F;var f=d.sibling,g=d.return;if(Sp(d),d===u){F=null;break}if(f!==null){f.return=g,F=f;break}F=g}}}var x=i.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var T=y.sibling;y.sibling=null,y=T}while(y!==null)}}F=i}}if((i.subtreeFlags&2064)!==0&&s!==null)s.return=i,F=s;else e:for(;F!==null;){if(i=F,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Wr(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,F=v;break e}F=i.return}}var m=e.current;for(F=m;F!==null;){s=F;var h=s.child;if((s.subtreeFlags&2064)!==0&&h!==null)h.return=s,F=h;else e:for(s=m;F!==null;){if(l=F,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:Ha(9,l)}}catch(w){ge(l,l.return,w)}if(l===s){F=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,F=k;break e}F=l.return}}if(R=a,cn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot($a,e)}catch{}r=!0}return r}finally{oe=n,ot.transition=t}}return!1}function ju(e,t,n){t=cr(n,t),t=fp(e,t,1),e=en(e,t,1),t=Be(),e!==null&&(co(e,1,t),We(e,t))}function ge(e,t,n){if(e.tag===3)ju(e,e,n);else for(;t!==null;){if(t.tag===3){ju(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=cr(n,e),e=mp(t,e,1),t=en(t,e,1),e=Be(),t!==null&&(co(t,1,e),We(t,e));break}}t=t.return}}function ph(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Ee===e&&(Me&n)===n&&(Ne===4||Ne===3&&(Me&130023424)===Me&&500>ye()-El?Nn(e,0):Sl|=n),We(e,t)}function Dp(e,t){t===0&&((e.mode&1)===0?t=1:(t=Uo,Uo<<=1,(Uo&130023424)===0&&(Uo=4194304)));var n=Be();e=It(e,t),e!==null&&(co(e,t,n),We(e,n))}function fh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Dp(e,n)}function mh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Dp(e,n)}var Ip;Ip=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)je=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return je=!1,th(e,t,n);je=(e.flags&131072)!==0}else je=!1,ce&&(t.flags&1048576)!==0&&Od(t,Sa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;la(e,t),e=t.pendingProps;var a=ar(t,De.current);nr(t,n),a=yl(null,t,r,e,a,n);var i=xl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Je(r)?(i=!0,wa(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,fl(t),a.updater=Wa,t.stateNode=a,a._reactInternals=t,_s(t,r,e,n),t=Ls(null,t,r,!0,i,n)):(t.tag=0,ce&&i&&il(t),$e(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(la(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=gh(r),e=pt(r,e),a){case 0:t=As(null,t,r,e,n);break e;case 1:t=Tu(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=_u(null,t,r,pt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),As(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),Tu(e,t,r,a,n);case 3:e:{if(yp(t),e===null)throw Error(_(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Vd(e,t),Ma(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=cr(Error(_(423)),t),t=Au(e,t,r,n,a);break e}else if(r!==a){a=cr(Error(_(424)),t),t=Au(e,t,r,n,a);break e}else for(qe=Rt(t.stateNode.containerInfo.firstChild),Ge=t,ce=!0,mt=null,n=Wd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ir(),r===a){t=$t(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return Kd(t),e===null&&Cs(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,s=a.children,bs(r,a)?s=null:i!==null&&bs(r,i)&&(t.flags|=32),vp(e,t),$e(e,t,s,n),t.child;case 6:return e===null&&Cs(t),null;case 13:return xp(e,t,n);case 4:return ml(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),zu(e,t,r,a,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,s=a.value,ie(Ea,r._currentValue),r._currentValue=s,i!==null)if(vt(i.value,s)){if(i.children===a.children&&!Ue.current){t=$t(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Lt(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),Ms(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(_(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ms(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}$e(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,nr(t,n),a=at(a),r=r(a),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,a=pt(r,t.pendingProps),a=pt(r.type,a),_u(e,t,r,a,n);case 15:return hp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:pt(r,a),la(e,t),t.tag=1,Je(r)?(e=!0,wa(t)):e=!1,nr(t,n),pp(t,r,a),_s(t,r,a,n),Ls(null,t,r,!0,e,n);case 19:return kp(e,t,n);case 22:return gp(e,t,n)}throw Error(_(156,t.tag))};function $p(e,t){return cd(e,t)}function hh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rt(e,t,n,r){return new hh(e,t,n,r)}function _l(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gh(e){if(typeof e=="function")return _l(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gs)return 11;if(e===Ys)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function da(e,t,n,r,a,i){var s=2;if(r=e,typeof e=="function")_l(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Un:return Sn(n.children,a,i,t);case qs:s=8,a|=8;break;case Ri:return e=rt(12,n,t,a|2),e.elementType=Ri,e.lanes=i,e;case es:return e=rt(13,n,t,a),e.elementType=es,e.lanes=i,e;case ts:return e=rt(19,n,t,a),e.elementType=ts,e.lanes=i,e;case Ku:return Ka(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hu:s=10;break e;case Vu:s=9;break e;case Gs:s=11;break e;case Ys:s=14;break e;case Ht:s=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=rt(s,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Sn(e,t,n,r){return e=rt(7,e,r,t),e.lanes=n,e}function Ka(e,t,n,r){return e=rt(22,e,r,t),e.elementType=Ku,e.lanes=n,e.stateNode={isHidden:!1},e}function Xi(e,t,n){return e=rt(6,e,null,t),e.lanes=n,e}function Qi(e,t,n){return t=rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function vh(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Di(0),this.expirationTimes=Di(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Di(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Tl(e,t,n,r,a,i,s,l,c){return e=new vh(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=rt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fl(i),e}function yh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:jn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bp(e){if(!e)return an;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Je(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Je(n))return Bd(e,n,t)}return t}function Fp(e,t,n,r,a,i,s,l,c){return e=Tl(n,r,!0,e,a,i,s,l,c),e.context=Bp(null),n=e.current,r=Be(),a=nn(n),i=Lt(r,a),i.callback=t??null,en(n,i,a),e.current.lanes=a,co(e,a,r),We(e,r),e}function qa(e,t,n,r){var a=t.current,i=Be(),s=nn(a);return n=Bp(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(a,t,s),e!==null&&(gt(e,a,s,i),aa(e,a,s)),s}function Ia(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Uu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Al(e,t){Uu(e,t),(e=e.alternate)&&Uu(e,t)}function xh(){return null}var Op=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}Ga.prototype.render=Ll.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));qa(e,t,null,null)};Ga.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_n(function(){qa(null,e,null,null)}),t[Dt]=null}};function Ga(e){this._internalRoot=e}Ga.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Kt.length&&t!==0&&t<Kt[n].priority;n++);Kt.splice(n,0,e),n===0&&yd(e)}};function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ya(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function kh(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var u=Ia(s);i.call(u)}}var s=Fp(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=s,e[Dt]=s.current,eo(e.nodeType===8?e.parentNode:e),_n(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var u=Ia(c);l.call(u)}}var c=Tl(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=c,e[Dt]=c.current,eo(e.nodeType===8?e.parentNode:e),_n(function(){qa(t,c,n,r)}),c}function Xa(e,t,n,r,a){var i=n._reactRootContainer;if(i){var s=i;if(typeof a=="function"){var l=a;a=function(){var c=Ia(s);l.call(c)}}qa(t,s,e,a)}else s=kh(n,t,e,a,r);return Ia(s)}md=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ir(t.pendingLanes);n!==0&&(Zs(t,n|1),We(t,ye()),(R&6)===0&&(ur=ye()+500,cn()))}break;case 13:_n(function(){var r=It(e,1);if(r!==null){var a=Be();gt(r,e,1,a)}}),Al(e,1)}};Rs=function(e){if(e.tag===13){var t=It(e,134217728);if(t!==null){var n=Be();gt(t,e,134217728,n)}Al(e,134217728)}};hd=function(e){if(e.tag===13){var t=nn(e),n=It(e,t);if(n!==null){var r=Be();gt(n,e,t,r)}Al(e,t)}};gd=function(){return oe};vd=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};ds=function(e,t,n){switch(t){case"input":if(os(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ja(r);if(!a)throw Error(_(90));Gu(r),os(r,a)}}}break;case"textarea":Xu(e,n);break;case"select":t=n.value,t!=null&&Zn(e,!!n.multiple,t,!1)}};rd=Cl;od=_n;var bh={usingClientEntryPoint:!1,Events:[po,Vn,ja,td,nd,Cl]},Ar={findFiberByHostInstance:kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wh={bundleType:Ar.bundleType,version:Ar.version,rendererPackageName:Ar.rendererPackageName,rendererConfig:Ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sd(e),e===null?null:e.stateNode},findFiberByHostInstance:Ar.findFiberByHostInstance||xh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Lr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Lr.isDisabled&&Lr.supportsFiber))try{$a=Lr.inject(wh),Et=Lr}catch{}var Lr;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bh;Qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pl(t))throw Error(_(200));return yh(e,t,null,n)};Qe.createRoot=function(e,t){if(!Pl(e))throw Error(_(299));var n=!1,r="",a=Op;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Tl(e,1,!1,null,null,n,!1,r,a),e[Dt]=t.current,eo(e.nodeType===8?e.parentNode:e),new Ll(t)};Qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=sd(t),e=e===null?null:e.stateNode,e};Qe.flushSync=function(e){return _n(e)};Qe.hydrate=function(e,t,n){if(!Ya(t))throw Error(_(200));return Xa(null,e,t,!0,n)};Qe.hydrateRoot=function(e,t,n){if(!Pl(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",s=Op;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fp(t,null,e,1,n??null,a,!1,i,s),e[Dt]=t.current,eo(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Ga(t)};Qe.render=function(e,t,n){if(!Ya(t))throw Error(_(200));return Xa(null,e,t,!1,n)};Qe.unmountComponentAtNode=function(e){if(!Ya(e))throw Error(_(40));return e._reactRootContainer?(_n(function(){Xa(null,null,e,!1,function(){e._reactRootContainer=null,e[Dt]=null})}),!0):!1};Qe.unstable_batchedUpdates=Cl;Qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ya(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return Xa(e,t,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426"});var Wp=gn((Zv,Jp)=>{"use strict";function Up(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Up)}catch(e){console.error(e)}}Up(),Jp.exports=jp()});var Vp=gn(Dl=>{"use strict";var Hp=Wp();Dl.createRoot=Hp.createRoot,Dl.hydrateRoot=Hp.hydrateRoot;var Rv});var o=dc(ki()),zf=dc(Vp()),ti=Date.now();function be(){return ti+=1,ti}var Nh=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function gr(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(a=>a.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function Sh(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function K(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function st(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Mt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function Ot(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function Il(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function ci(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(K(0)))n=0;else if(t.has(K(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,a=n,i=0,s=!0,l=!1;for(;;)if(t.has(K(a)))r++,i++,!s&&i>=7&&(s=!0,i=0),a-=1;else if(s)s=!1,i=0,l=!0,a-=1;else break;return{streak:r,freezeUsed:l}}function $l(e){return ci(e).streak}var Eh=[15,30,45,60,90,120],ui={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},open(e){this.fn&&this.fn(e)}},ko={fn:null,register(e){return this.fn=e,()=>{this.fn=null}},propagate(e,t,n){this.fn&&this.fn(e,t,n)}},Kp="tasksh.links.v1",_f={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},Dn=(e,t)=>`${e}:${t}`,Tf=e=>{let t=String(e).indexOf(":");return{kind:String(e).slice(0,t),id:Number(String(e).slice(t+1))}};function Af(e,t){let n=[];for(let[r,a]of e)r===t?n.push(a):a===t&&n.push(r);return n}function Ch(e,t,n){return e.some(([r,a])=>r===t&&a===n||r===n&&a===t)}function Mh(e,t,n){return t===n||Ch(e,t,n)?e:[...e,[t,n]]}function zh(e,t,n){return e.filter(([r,a])=>!(r===t&&a===n||r===n&&a===t))}function qp(e,t){let{kind:n,id:r}=Tf(e),a=n==="routine"?t.routines:n==="good"?t.habits:n==="vault"?t.vaultHabits:null;if(!a)return null;let i=a.find(s=>s.id===r);return i?{kind:n,id:r,label:i.label,meta:_f[n]?.label||n}:null}function _h(e,t,n,r,a){let i=Af(n,e);if(!i.length)return 0;let s=(c,u)=>c.map(d=>{if(d.id!==u)return d;let p=d.history||[];if(p.some(x=>x&&typeof x=="object")||d.penalty!==void 0){let x=xt(p),y=x.some(v=>v.d===a&&v.t==="done");if(t===y)return d;let T=x.filter(v=>v.d!==a);return{...d,history:t?[...T,{d:a,t:"done"}]:T}}let g=p.includes(a);return t===g?d:{...d,history:t?[...p,a]:p.filter(x=>x!==a)}}),l={routine:[],good:[],vault:[]};for(let c of i){let{kind:u,id:d}=Tf(c);l[u]&&l[u].push(d)}return l.routine.length&&r.setRoutines&&r.setRoutines(c=>l.routine.reduce((u,d)=>s(u,d),c)),l.good.length&&r.setHabits&&r.setHabits(c=>l.good.reduce((u,d)=>s(u,d),c)),l.vault.length&&r.setVaultHabits&&r.setVaultHabits(c=>l.vault.reduce((u,d)=>s(u,d),c)),i.length}function Th(){let[e,t]=(0,o.useState)(()=>me(Kp,[]));return(0,o.useEffect)(()=>{try{localStorage.setItem(Kp,JSON.stringify(e))}catch{}},[e]),{links:e,setLinks:t}}var ni="tasksh.meta.v1";function vo(e){try{let t=me(ni,{});localStorage.setItem(ni,JSON.stringify({...t,...e}))}catch{}}var Gp="tasksh.achievements.v1",Yp="tasksh.wallet.v1",yo=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function Lf(e){return yo.find(t=>t.id===e)}function Ah(e,t){let n=new Set(t),r=[];for(let a of yo){if(n.has(a.id))continue;let i=!1;try{i=!!a.test(e)}catch{i=!1}i&&r.push(a.id)}return r}var Lh=e=>20+e*5;function Ph(e){let[t,n]=(0,o.useState)(()=>me(Gp,[])),[r,a]=(0,o.useState)(()=>me(Yp,{coins:0})),[i,s]=(0,o.useState)([]);(0,o.useEffect)(()=>{try{localStorage.setItem(Gp,JSON.stringify(t))}catch{}},[t]),(0,o.useEffect)(()=>{try{localStorage.setItem(Yp,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let u=Ah({...e,coins:r.coins},t);if(!u.length)return;n(p=>[...p,...u]),s(p=>[...p,...u]);let d=u.reduce((p,f)=>p+(Lf(f)?.coins||0),0);d&&a(p=>({...p,coins:p.coins+d}))},[e,t,r.coins]);let l=(0,o.useCallback)(u=>a(d=>({...d,coins:Math.max(0,d.coins+u)})),[]),c=(0,o.useCallback)(()=>s(u=>u.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:c,addCoins:l}}var jt={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},Bl="tasksh.pet.v1",In=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:10,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:20,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:30,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:40,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:50,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:60,name:"Aurelis",title:"legendary guardian",scale:1.06}];function Ra(e){let t=In[0];for(let n of In)e>=n.minLevel&&(t=n);return t}function Kl(e){return In.find(t=>t.minLevel>e)||null}var Xp={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},Pn=e=>Math.max(0,Math.min(100,Math.round(e)));function Qp(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let a=i=>r*i;return{...e,happiness:Pn(e.happiness-a(.55)),energy:Pn(e.energy-a(.75)),friendship:Pn(e.friendship-a(.12)),intelligence:e.intelligence,lastTick:t}}var Dh={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function Fl(e,t){let n=Dh[t];return n?{...e,happiness:Pn(e.happiness+(n.happiness||0)),energy:Pn(e.energy+(n.energy||0)),friendship:Pn(e.friendship+(n.friendship||0)),intelligence:Pn(e.intelligence+(n.intelligence||0))}:e}function ec(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function Pf(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function un(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function Ih(e){let{pet:t,level:n,hour:r,doneToday:a,totalToday:i,streak:s,phase:l}=e,c=ec(t),u=Math.floor(Date.now()/36e5);return t.energy<22?un(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],u):i>0&&a===i?un([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],u):s>=7?un([`${s} days running. that's a habit now, not an effort.`,`${s} in a row. the hard part's behind you.`],u):a===0&&r>=14?un(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],u):l==="night"&&r>=23?un(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],u):l==="morning"?un(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],u):c.key==="joyful"?un(["good day so far. i can tell.","you're in a rhythm. keep it easy."],u):t.friendship<15?"still getting to know you. tell me something.":un([`${a} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],u)}function $h(e){let{pet:t,level:n,doneToday:r,totalToday:a,streak:i,routineNow:s,nextRoutine:l}=e,c=ec(t);return[`pet: ${t.name}, ${In[t.stage].name} form, mood ${c.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${Pf(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${a} habits done today, best streak ${i}`,s?`right now: ${s}`:"no routine running",l?`next up: ${l}`:""].filter(Boolean).join("; ")}function Bh(e,t){let n=(0,o.useRef)(me(Bl,null)===null),[r,a]=(0,o.useState)(()=>{let p=me(Bl,null),f=p?{...Xp,...p}:{...Xp,born:Date.now(),lastTick:Date.now()};return Qp(f,Date.now())}),[i,s]=(0,o.useState)(null);(0,o.useEffect)(()=>{try{localStorage.setItem(Bl,JSON.stringify(r))}catch{}},[r]),(0,o.useEffect)(()=>{let p=setInterval(()=>a(f=>Qp(f,Date.now())),3e5);return()=>clearInterval(p)},[]);let l=(0,o.useMemo)(()=>Ra(e),[e]);(0,o.useEffect)(()=>{if(n.current){n.current=!1,l.stage!==r.stage&&a(p=>({...p,stage:l.stage}));return}if(l.stage>r.stage){let p=r.stage;s({from:p,to:l.stage}),a(f=>Fl({...f,stage:l.stage},"levelUp")),M.success()}else l.stage<r.stage&&a(p=>({...p,stage:l.stage}))},[l.stage,r.stage]);let c=(0,o.useCallback)(p=>{a(f=>Fl(f,p))},[]);(0,o.useEffect)(()=>jt.on(p=>a(f=>Fl(f,p))),[]);let u=(0,o.useCallback)(p=>{let f=String(p||"").trim().slice(0,14);f&&a(g=>({...g,name:f}))},[]),d=(0,o.useCallback)((p,f)=>{a(g=>({...g,chats:p==="user"?g.chats+1:g.chats,log:[...g.log||[],{role:p,text:String(f).slice(0,240)}].slice(-8)}))},[]);return{pet:r,form:l,mood:ec(r),evolution:i,clearEvolution:()=>s(null),nudge:c,rename:u,remember:d}}var ql=o.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:a=!0,evolving:i=!1}){let s=Math.max(0,Math.min(6,t)),l=25+s*1.9,c=22-s*.55,u=78+s*.9,d=u-l*.8-c*.62-(s>=3?5:0),p=4.6-s*.3,f=Math.min(6+s*5.2,Math.max(4,d-c-9)),g=9+s*1.1,x=9+s*5.4,y=33+s*5.2,T=s>=3,v=s>=4,m=s>=6,h=s>=5,k=s>=2?Math.min(4,s-1):0,w=n==="sleepy"||n==="tired",S=n==="joyful",z=n==="low"||n==="drained",E=w?.9:p*(S?1.16:1)*2,A=z?`M 56 ${d+9} q 8 -5 16 0`:S?`M 55 ${d+6} q 9 8 18 0`:`M 57 ${d+7} q 7 4 14 0`;return o.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${a?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":In[s].scale},role:"img","aria-label":`${In[s].name}, ${n}`},o.default.createElement("defs",null,o.default.createElement("radialGradient",{id:`pg-body-${s}`,cx:"38%",cy:"30%"},o.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),o.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),o.default.createElement("radialGradient",{id:`pg-aura-${s}`,cx:"50%",cy:"50%"},o.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),o.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),o.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),o.default.createElement("circle",{className:"pet-aura",cx:"64",cy:u-8,r:y,fill:`url(#pg-aura-${s})`}),v&&o.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},o.default.createElement("path",{d:`M ${64-l*.75} ${u-8} q -${16+s*2} -${12+s*2} -${5+s} 8 q 4 9 21 5 Z`}),o.default.createElement("path",{d:`M ${64+l*.75} ${u-8} q ${16+s*2} -${12+s*2} ${5+s} 8 q -4 9 -21 5 Z`})),o.default.createElement("path",{className:"pet-tail",d:`M ${64+l*.85} ${u} q ${x} 2 ${x*.9} -${x*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),s>=3&&o.default.createElement("circle",{cx:64+l*.85+x*.9,cy:u-x*.85,r:2.4+s*.35,fill:"var(--accent2)",className:"pet-tailtip"}),T&&o.default.createElement("rect",{x:"59",y:d+c-5,width:"10",height:Math.max(0,u-l*.7-d-c+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),h&&o.default.createElement("g",{opacity:"0.8"},[0,1,2].map(b=>o.default.createElement("path",{key:b,d:`M ${64-l*.72+b*3} ${u-6-b*7} l -${6+b} -${5+b*2} l ${9+b} ${1+b} Z`,fill:"var(--accent2)"}))),o.default.createElement("g",{className:"pet-body"},o.default.createElement("ellipse",{cx:"64",cy:u,rx:l,ry:l*.86,fill:`url(#pg-body-${s})`}),o.default.createElement("ellipse",{cx:"64",cy:u+2,rx:l*.56,ry:l*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:k}).map((b,I)=>o.default.createElement("circle",{key:I,cx:50+I*14,cy:68+I%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),o.default.createElement("ellipse",{cx:64-l*.42,cy:u+l*.8,rx:5.5+s*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("ellipse",{cx:64+l*.42,cy:u+l*.8,rx:5.5+s*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),o.default.createElement("g",{className:"pet-head"},o.default.createElement("path",{d:`M ${64-g} ${d-c*.72}
                  q -3 -${f} 3 -${f*1.25}
                  q 5 ${f*.45} 4 ${f*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),o.default.createElement("path",{d:`M ${64+g} ${d-c*.72}
                  q 3 -${f} -3 -${f*1.25}
                  q -5 ${f*.45} -4 ${f*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),m&&o.default.createElement("g",{className:"pet-crown"},o.default.createElement("path",{d:`M 51 ${d-c+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),o.default.createElement("circle",{cx:"64",cy:d-c-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),o.default.createElement("circle",{cx:"64",cy:d,r:c,fill:`url(#pg-body-${s})`}),w?o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{d:`M ${64-8.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),o.default.createElement("path",{d:`M ${64+.5} ${d} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):o.default.createElement("g",{className:"pet-eyes"},o.default.createElement("ellipse",{cx:64-7.5,cy:d,rx:p,ry:E/2,fill:"var(--bg)"}),o.default.createElement("ellipse",{cx:64+7.5,cy:d,rx:p,ry:E/2,fill:"var(--bg)"}),o.default.createElement("circle",{cx:64-6.2,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),o.default.createElement("circle",{cx:64+8.8,cy:d-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),o.default.createElement("path",{d:A,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),S&&o.default.createElement(o.default.Fragment,null,o.default.createElement("ellipse",{cx:49,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),o.default.createElement("ellipse",{cx:79,cy:d+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),s>=1&&o.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,s)}).map((b,I)=>o.default.createElement("circle",{key:I,cx:"64",cy:u-8-y,r:1.6+I*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${u-8}px`,transform:`rotate(${I*(360/Math.min(4,s))}deg)`}}))))}),vr=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:10,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:20,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:30,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:40,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:50,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],Zp=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function Rp(e){for(let t of Zp)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return Zp[2]}function Fh(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var Oh=o.default.memo(function({theme:t,phase:n,calm:r,scoped:a=!1}){let i=t.ambient.particle,s=a?"amb-layer amb-scoped":"amb-layer",l=(0,o.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(d,p)=>{let f=i==="bubbles"?3+p%4*2:2+p%3;return{left:`${(p*37+11)%100}%`,size:f,delay:`${-(p*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+p%7*4}s`}}),[i]),c=(0,o.useMemo)(()=>n.stars?Array.from({length:34},(u,d)=>({left:`${(d*29+7)%100}%`,top:`${(d*53+13)%62}%`,op:.2+d*37%60/100})):[],[n.stars]);return o.default.createElement(o.default.Fragment,null,a&&o.default.createElement("div",{className:`${s} amb-blobs`}),o.default.createElement("div",{className:`${s} amb-time`},o.default.createElement("div",{className:"amb-ray"})),c.length>0&&o.default.createElement("div",{className:`${s} amb-stars`},c.map((u,d)=>o.default.createElement("span",{key:d,style:{left:u.left,top:u.top,opacity:u.op}}))),l.length>0&&o.default.createElement("div",{className:`${s} amb-dust`},l.map((u,d)=>o.default.createElement("span",{key:d,style:{left:u.left,bottom:"-6vh",width:u.size,height:u.size,animationDelay:u.delay,animationDuration:u.dur}}))),o.default.createElement("div",{className:`${s} amb-grain`}),r&&o.default.createElement("div",{className:"calm-breath"}))}),ef="tasksh.calm.v1",tf="tasksh.ambience.v1";function jh(e){let[t,n]=(0,o.useState)(()=>{try{return localStorage.getItem(nf)||Qa}catch{return Qa}}),[r,a]=(0,o.useState)(()=>{try{return localStorage.getItem(ef)==="1"}catch{return!1}}),[i,s]=(0,o.useState)(()=>{try{return localStorage.getItem(tf)!=="0"}catch{return!0}}),[l,c]=(0,o.useState)(()=>Rp(gr().hour)),u=(0,o.useMemo)(()=>Uh(t),[t]);(0,o.useEffect)(()=>{!Gl(u,e)&&u.id!==Qa&&n(Qa)},[u,e]),(0,o.useEffect)(()=>{Jh(u);try{localStorage.setItem(nf,u.id)}catch{}},[u]),(0,o.useEffect)(()=>{Fh(l)},[l]),(0,o.useEffect)(()=>{let p=setInterval(()=>{let f=Rp(gr().hour);c(g=>g.id===f.id?g:f)},12e4);return()=>clearInterval(p)},[]),(0,o.useEffect)(()=>{let p=document.documentElement;p.style.setProperty("--calm",r?"1":"0"),p.style.setProperty("--motion-scale",r?"1.9":"1"),p.classList.toggle("calm-mode",r);try{localStorage.setItem(ef,r?"1":"0")}catch{}},[r]);let d=(0,o.useMemo)(()=>vr.filter(p=>Gl(p,e)),[e]);return(0,o.useEffect)(()=>{document.documentElement.classList.toggle("no-ambience",!i);try{localStorage.setItem(tf,i?"1":"0")}catch{}},[i]),{theme:u,themeId:t,setThemeId:n,themes:vr,unlocked:d,phase:l,calm:r,setCalm:a,ambience:i,setAmbience:s}}var Qa="terminal",nf="tasksh.theme.v1";function Uh(e){return vr.find(t=>t.id===e)||vr[0]}function Gl(e,t){return t>=e.unlockLevel}function Jh(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((a,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${a[0]}, ${a[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var Df="tasksh.sound.v1",mo=null;function Wh(){if(!mo){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;mo=new e}return mo.state==="suspended"&&mo.resume(),mo}function If(){try{let e=localStorage.getItem(Df);return e===null?!0:e==="1"}catch{return!0}}function Hh(e){try{localStorage.setItem(Df,e?"1":"0")}catch{}}function pn(e){if(!If())return;let t=Wh();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:a=0,dur:i=.08,type:s="sine",gain:l=.05})=>{let c=t.createOscillator(),u=t.createGain();c.type=s,c.frequency.setValueAtTime(r,n+a),u.gain.setValueAtTime(1e-4,n+a),u.gain.exponentialRampToValueAtTime(l,n+a+.008),u.gain.exponentialRampToValueAtTime(1e-4,n+a+i),c.connect(u),u.connect(t.destination),c.start(n+a),c.stop(n+a+i+.02)})}var M={click:()=>pn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>pn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>pn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>pn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>pn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>pn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function Vh(){let[e,t]=(0,o.useState)(If());return[e,()=>{let r=!e;t(r),Hh(r),r&&pn([{freq:720,dur:.05,gain:.04}])}]}function Kh(e,t=550){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(e),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let s=a.current,l=e;if(s===l)return;let c=performance.now(),u=p=>1-Math.pow(1-p,3),d=p=>{let f=p-c,g=Math.min(1,f/t),x=u(g);r(Math.round(s+(l-s)*x)),g<1?i.current=requestAnimationFrame(d):a.current=l};return i.current=requestAnimationFrame(d),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function dn({value:e,className:t,suffix:n=""}){let r=Kh(e);return o.default.createElement("span",{className:t},r,n)}function qh({axes:e,size:t=220,maxValue:n}){let[r,a]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let h=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(h)},[]);let i=e.length,s=t/2,l=t/2,c=t/2-(e.length>6?46:34),u=n??Math.max(1,...e.map(h=>h.value)),d=h=>Math.PI*2*h/i-Math.PI/2,p=.16,f=Math.min(0,...e.map(h=>h.value)),g=h=>h>0?p+(1-p)*Math.min(1,h/u):h===0||!f?p:p*(1-.8*Math.min(1,h/f)),x=(h,k)=>{let w=d(h);return[s+Math.cos(w)*c*k,l+Math.sin(w)*c*k]},y=i>6?46:22,T=[.25,.5,.75,1],m=e.map((h,k)=>x(k,r?g(h.value):.02)).map((h,k)=>`${k===0?"M":"L"}${h[0].toFixed(1)},${h[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`${-y} 0 ${t+y*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},T.map((h,k)=>{let S=e.map((z,E)=>x(E,p+(1-p)*h)).map((z,E)=>`${E===0?"M":"L"}${z[0].toFixed(1)},${z[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:k,d:S,className:"radar-ring"})}),o.default.createElement("path",{d:e.map((h,k)=>{let w=x(k,p);return`${k===0?"M":"L"}${w[0].toFixed(1)},${w[1].toFixed(1)}`}).join(" ")+"Z",className:"radar-zero"}),e.map((h,k)=>{let w=x(k,1);return o.default.createElement("line",{key:k,x1:s,y1:l,x2:w[0],y2:w[1],className:"radar-spoke"})}),o.default.createElement("path",{d:m,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((h,k)=>{let w=x(k,1.19),S=x(k,r?g(h.value):.02),z=h.value<0,E=Math.cos(d(k)),A=E>.25?"start":E<-.25?"end":"middle";return o.default.createElement("g",{key:h.key||k},o.default.createElement("circle",{cx:S[0],cy:S[1],r:i>6?2.8:3.5,fill:z?"none":h.color||"#5EEAD4",stroke:z?"var(--danger)":"none",strokeWidth:z?1.4:0,style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:w[0],y:w[1],textAnchor:A,dominantBaseline:"middle",className:`radar-label ${z?"radar-label-neg":""}`},z?`${h.label} \u2193`:h.label))}))}function $f({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:a="#1E2228",label:i,sublabel:s}){let[l,c]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let y=requestAnimationFrame(()=>c(!0));return()=>cancelAnimationFrame(y)},[]);let u=t/2-n,d=2*Math.PI*u,p=Math.max(0,Math.min(100,e)),f=d-(l?p/100:0)*d,g=Math.max(8,Math.round(t*.135)),x=Math.max(6.5,Math.round(t*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:u,fill:"none",stroke:a,strokeWidth:n}),o.default.createElement("circle",{cx:t/2,cy:t/2,r:u,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:d,strokeDashoffset:f,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:g}},i),s&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:x}},s)))}function Gh({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:a}){let[i,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let f=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(f)},[]);let l=t/2-n/2,c=2*Math.PI*l,u=Math.max(1e-6,e.reduce((f,g)=>f+Math.max(0,g.value),0)),d=0,p=e.map(f=>{let g=Math.max(0,f.value),x=g/u,y=i?x*c:0,T=c-y,v=d/u*360;return d+=g,{...f,dash:y,gap:T,rotation:v,frac:x}});return o.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},o.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},o.default.createElement("circle",{cx:t/2,cy:t/2,r:l,fill:"none",stroke:"#1E2228",strokeWidth:n}),p.map((f,g)=>o.default.createElement("circle",{key:f.key||g,cx:t/2,cy:t/2,r:l,fill:"none",stroke:f.color,strokeWidth:n,strokeDasharray:`${f.dash} ${f.gap}`,strokeDashoffset:0,transform:`rotate(${f.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:p.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},r!==void 0&&o.default.createElement("span",{className:"donut-center-label"},r),a&&o.default.createElement("span",{className:"donut-center-sublabel"},a)))}function Yh({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],a=0,i=t*7,s=Array.from({length:i},(d,p)=>a-(i-1-p)),l=Math.max(1,...s.map(d=>e[K(d)]||0)),c=[];for(let d=0;d<t;d++)c.push(s.slice(d*7,d*7+7));let u=d=>{if(!d)return 0;let p=d/l;return p>.75?4:p>.5?3:p>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},c.map((d,p)=>o.default.createElement("div",{className:"heatmap-col",key:p},d.map((f,g)=>{let x=K(f),y=e[x]||0,T=u(y);return o.default.createElement("span",{key:g,className:`heatmap-cell ${f===0?"today":""}`,style:{background:r[T],animationDelay:`${(p*7+g)*4}ms`},title:`${x}: ${y} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),r.map((d,p)=>o.default.createElement("span",{key:p,className:"heatmap-legend-cell",style:{background:d}})),o.default.createElement("span",null,"more")))}function Xh(e){let t=[],n=[];for(let r of e){let a=t.findIndex(i=>r.start>=i);a===-1?(a=t.length,t.push(r.end)):t[a]=r.end,n.push({...r,lane:a})}return{placed:n,laneCount:Math.max(1,t.length)}}function Qh({routines:e,nowMinutes:t,doneToday:n=0,onToggleToday:r}){let[a,i]=(0,o.useState)(!1),[s,l]=(0,o.useState)(0),[c,u]=(0,o.useState)(0),d=(0,o.useRef)(null),p=(0,o.useRef)(!1),f=(0,o.useRef)({id:null,at:0,x:0,y:0,moved:!1}),[g,x]=(0,o.useState)(null),y=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{y.current&&clearTimeout(y.current)},[]);let T=N=>{r?.(N),x(N),y.current&&clearTimeout(y.current),y.current=setTimeout(()=>{x(null),y.current=null},420)},v=(N,G)=>{f.current.x=N.clientX,f.current.y=N.clientY,f.current.moved=!1},m=()=>{f.current.moved=!0},h=(N,G)=>{let he=f.current;if(Math.abs(N.clientX-he.x)>8||Math.abs(N.clientY-he.y)>8){he.id=null;return}let ve=Date.now();he.id===G&&ve-he.at<400?(T(G),he.id=null,he.at=0):(he.id=G,he.at=ve)};(0,o.useEffect)(()=>{let N=requestAnimationFrame(()=>i(!0));return()=>cancelAnimationFrame(N)},[]),(0,o.useEffect)(()=>{if(!d.current)return;let N=d.current,G=new ResizeObserver(he=>{for(let ve of he)l(ve.contentRect.width)});return G.observe(N),l(N.getBoundingClientRect().width),()=>G.disconnect()},[]);let k=1440,w=K(0),S=e.map(N=>{let G=st(N.time);return{r:N,start:G,end:G+Math.max(1,N.duration)}}),{placed:z,laneCount:E}=Xh(S),b=Math.max(s,24*82),I=b/k,$=b>s+1,D=t*I;(0,o.useEffect)(()=>{if(!d.current||!s||p.current)return;if(!$){p.current=!0;return}let N=d.current,G=Math.max(0,Math.min(D-s/2,b-s));N.scrollTo({left:G,behavior:"auto"}),p.current=!0},[s,D,b,$]),(0,o.useEffect)(()=>{let N=d.current;if(!N)return;let G=0,he=()=>{G||(G=requestAnimationFrame(()=>{u(N.scrollLeft),G=0}))};return N.addEventListener("scroll",he,{passive:!0}),u(N.scrollLeft),()=>{N.removeEventListener("scroll",he),cancelAnimationFrame(G)}},[s]);let B=()=>{let N=d.current;N&&(N.scrollTo({left:Math.max(0,Math.min(D-s/2,b-s)),behavior:"smooth"}),M.click())},J=38,Y=6,L=8,U=L*2+E*J+(E-1)*Y,H=I*60>=40?1:3,q=[];for(let N=0;N<=24;N+=H)q.push(N);let Q=N=>{let G=N%24;return G===0?"12a":G===12?"12p":G>12?`${G-12}p`:`${G}a`},ne=e.length,ue=ne?Math.round(n/ne*100):0;return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-head"},o.default.createElement("div",{className:"timeline-head-left"},o.default.createElement("span",{className:"timeline-title"},"today's schedule"),ne>0&&o.default.createElement("span",{className:"timeline-count"},n,"/",ne," done")),$&&o.default.createElement("button",{className:"timeline-jump",onClick:B,title:"Jump to now"},"now")),ne>0&&o.default.createElement("div",{className:"timeline-progress"},o.default.createElement("div",{className:"timeline-progress-fill",style:{width:a?`${ue}%`:"0%"}})),o.default.createElement("div",{className:"timeline-scroll",ref:d},o.default.createElement("div",{className:"timeline-inner",style:{width:b}},o.default.createElement("div",{className:"timeline-hours"},q.map(N=>o.default.createElement("div",{key:N,className:"timeline-hour",style:{left:N*60*I}},o.default.createElement("span",null,Q(N))))),o.default.createElement("div",{className:"timeline-track",style:{height:U}},o.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*I}}),o.default.createElement("div",{className:"timeline-night",style:{left:1320*I,width:120*I}}),q.map(N=>o.default.createElement("div",{key:N,className:`timeline-gridline ${N%6===0?"major":""}`,style:{left:N*60*I}})),o.default.createElement("div",{className:"timeline-elapsed",style:{width:a?D:0}}),z.map(({r:N,start:G,lane:he},ve)=>{let W=G*I,ee=Math.max(1,N.duration)*I,C=Math.max(4,Math.min(ee,b-W)),j=(N.history||[]).includes(w),V=Of(ve,z.length),Z=Math.max(W,c),lt=Math.min(W+C,c+s),Ze=Math.max(0,lt-Z)>38,xe=Math.max(0,Math.min(c-W,C-46)),Re=t>=G&&t<G+N.duration;return o.default.createElement("div",{key:N.id,role:r?"button":void 0,tabIndex:r?0:void 0,"aria-pressed":r?j:void 0,"aria-label":r?`${N.label}, ${Mt(G)}${j?", done":""}. Double-tap to toggle.`:void 0,onPointerDown:r?He=>v(He,N.id):void 0,onPointerUp:r?He=>h(He,N.id):void 0,onPointerCancel:r?m:void 0,onKeyDown:r?He=>{(He.key==="Enter"||He.key===" ")&&(He.preventDefault(),T(N.id))}:void 0,className:`timeline-block ${j?"done":""} ${Re?"active":""} ${r?"tappable":""} ${g===N.id?"pulse":""}`,style:{left:W,top:L+he*(J+Y),width:a?C:0,height:J,transitionDelay:`${Math.min(ve*18,260)}ms`,background:j?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${V}, ${V}C4)`,boxShadow:j?"none":`0 2px 10px ${V}44`},title:`${N.label} \xB7 ${Mt(G)} \xB7 ${Ot(N.duration)}${j?" \xB7 done":""}`},Ze&&o.default.createElement("span",{className:"timeline-block-label",style:xe>0?{paddingLeft:xe+8}:void 0},j&&o.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),N.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:D}})))),$&&o.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var Zh=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[K(-1),K(-2),K(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[K(-1),K(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[K(0),K(-1),K(-2),K(-3),K(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[K(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Bf(){let[e,t]=(0,o.useState)(null);return(0,o.useEffect)(()=>{let n=!1,r=async()=>{try{if(typeof caches>"u"||!caches.keys)return;let s=(await caches.keys()).filter(l=>/^tasksh-v\d+$/.test(l)).sort((l,c)=>parseInt(c.slice(8),10)-parseInt(l.slice(8),10))[0];!n&&s&&t(s.replace("tasksh-",""))}catch{}};r();let a=navigator.serviceWorker;return a?.addEventListener?.("controllerchange",r),()=>{n=!0,a?.removeEventListener?.("controllerchange",r)}},[]),e}function Rh(){let e=Bf();return e?o.default.createElement("span",{className:"version-badge",title:`running build ${e}`},e):null}function bo(e=420){let[t,n]=(0,o.useState)(!1),r=(0,o.useRef)(null),a=(0,o.useCallback)(()=>{r.current&&clearTimeout(r.current),n(!0),r.current=setTimeout(()=>{n(!1),r.current=null},e)},[e]);return(0,o.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),[t,a]}function tc(){let[e,t]=(0,o.useState)(gr());return(0,o.useEffect)(()=>{let n=setInterval(()=>t(gr()),1e3);return()=>clearInterval(n)},[]),e}function nc(e,t){return(0,o.useMemo)(()=>{let n=[...e].sort((i,s)=>st(i.time)-st(s.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&st(n[i].time)<=t;i++)r=i;let a=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[a].id}},[e,t])}function eg({routine:e,status:t,index:n,total:r=1,onDelete:a,onToggleToday:i,onSave:s}){let l=st(e.time),c=l+e.duration,{streak:u,freezeUsed:d}=ci(e.history),p=(e.history||[]).includes(K(0)),[f,g]=(0,o.useState)(0),x=(0,o.useRef)(!1),y=(0,o.useRef)(0),T=(0,o.useRef)(0),v=(0,o.useRef)(null),m=(0,o.useRef)(!1),[h,k]=(0,o.useState)(!1),w=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{w.current&&clearTimeout(w.current)},[]);let[S,z]=(0,o.useState)(!1),[E,A]=(0,o.useState)(e.label),[b,I]=(0,o.useState)(e.time),[$,D]=(0,o.useState)(e.duration),[B,J]=(0,o.useState)(e.alternatives||[]),Y=()=>{A(e.label),I(e.time),D(e.duration),J(e.alternatives||[]),z(!0)},L=()=>{let Q=E.trim();Q&&(s(e.id,{label:Q,time:b||e.time,duration:Math.max(5,+$||e.duration),alternatives:B.map(ne=>ne.trim()).filter(Boolean)}),z(!1))},U=Q=>{S||(x.current=!0,m.current=!1,v.current=null,y.current=Q.clientX,T.current=Q.clientY)},H=Q=>{if(!x.current)return;let ne=Q.clientX-y.current,ue=Q.clientY-T.current;if(v.current===null){if(Math.abs(ne)<6&&Math.abs(ue)<6)return;if(v.current=Math.abs(ne)>Math.abs(ue)?"x":"y",v.current==="y"){x.current=!1;return}}v.current==="x"&&(Math.abs(ne)>4&&(m.current=!0),g(Math.max(-120,Math.min(0,ne))))},q=()=>{x.current&&(x.current=!1,f<-70?(k(!0),w.current||(w.current=setTimeout(()=>a(e.id),200))):(g(0),m.current||Y()))};return o.default.createElement("div",{className:`routine-row-wrap ${h?"removing":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${f}px)`,transition:x.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${p?"#2A2F36":Of(n,r)}`},onPointerDown:U,onPointerMove:H,onPointerUp:q,onPointerLeave:q,onPointerCancel:q},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${p?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),S?o.default.createElement("div",{className:"routine-edit",onPointerDown:Q=>Q.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:E,onChange:Q=>A(Q.target.value),onKeyDown:Q=>Q.key==="Enter"&&L(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:b,onChange:Q=>I(Q.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:$,onChange:Q=>D(Q.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),B.map((Q,ne)=>o.default.createElement("div",{className:"alt-composer-row",key:ne},o.default.createElement("input",{type:"text",placeholder:`alternative ${ne+1}`,value:Q,onChange:ue=>{let N=[...B];N[ne]=ue.target.value,J(N)},onKeyDown:ue=>ue.key==="Enter"&&L()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>J(B.filter((ue,N)=>N!==ne)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>J([...B,""])},"+ another option")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>z(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:L},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},Mt(l)),t==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,d&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&o.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),o.default.createElement("span",{className:"routine-span"},Mt(l)," \u2013 ",Mt(c)," \xB7 ",Ot(e.duration))),!S&&o.default.createElement("button",{className:"link-btn routine-link",onClick:Q=>{Q.stopPropagation(),ui.open(Dn("routine",e.id)),M.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function tg({routines:e,setRoutines:t}){let n=tc(),r=n.hour*60+n.minute,{sorted:a,currentId:i,nextId:s}=nc(e,r),l=a.find(D=>D.id===i),c=a.find(D=>D.id===s),[u,d]=(0,o.useState)(""),[p,f]=(0,o.useState)(()=>Il(r)),[g,x]=(0,o.useState)(30),[y,T]=bo(),[v,m]=(0,o.useState)([]),[h,k]=(0,o.useState)(!1),w=()=>{let D=u.trim();if(!D){T(),M.error();return}let B=p||Il(r),J=v.map(Y=>Y.trim()).filter(Boolean);t(Y=>[...Y,{id:be(),time:B,label:D,duration:Math.max(5,+g||30),history:[],alternatives:J}]),d(""),f(Il(r)),x(30),m([]),k(!1),M.click()},S=D=>{t(B=>B.filter(J=>J.id!==D)),M.delete()},z=D=>{let B=K(0),J=!(e.find(Y=>Y.id===D)?.history||[]).includes(B);t(Y=>Y.map(L=>{if(L.id!==D)return L;let H=(L.history||[]).includes(B)?L.history.filter(q=>q!==B):[...L.history||[],B];return{...L,history:H.slice(-60)}})),ko.propagate("routine",D,J),J?(M.success(),jt.emit("routineDone")):M.click()},E=(D,B)=>t(J=>J.map(Y=>Y.id===D?{...Y,...B}:Y)),A=l?st(l.time)+l.duration:0,b=c?(st(c.time)-r+1440)%1440||1440:0,I=K(0),$=a.filter(D=>(D.history||[]).includes(I)).length;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},Sh()),o.default.createElement("div",{className:"hero-divider"}),l?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),l.label),o.default.createElement("span",{className:"hero-sub"},"until ",Mt(A)," \xB7 next: ",c?.label," in ",Ot(b))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement(Qh,{routines:a,nowMinutes:r,doneToday:$,onToggleToday:z}),o.default.createElement("div",{className:`composer ${y?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:u,onChange:D=>d(D.target.value),onKeyDown:D=>D.key==="Enter"&&w()}),o.default.createElement("input",{type:"time",className:"time-input",value:p,onChange:D=>f(D.target.value)}),o.default.createElement("button",{type:"button",className:`alt-toggle-btn ${h?"active":""}`,onClick:()=>k(D=>!D),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),o.default.createElement("button",{className:"add-btn",onClick:w,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),h&&o.default.createElement("div",{className:"alt-composer"},o.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),v.map((D,B)=>o.default.createElement("div",{className:"alt-composer-row",key:B},o.default.createElement("input",{type:"text",placeholder:`alternative ${B+1}, e.g. "Drawing"`,value:D,onChange:J=>{let Y=[...v];Y[B]=J.target.value,m(Y)},onKeyDown:J=>J.key==="Enter"&&w()}),o.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>m(v.filter((J,Y)=>Y!==B)),"aria-label":"Remove alternative"},"\xD7"))),o.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>m([...v,""])},"+ another option")),o.default.createElement("div",{className:"duration-chips"},Eh.map(D=>o.default.createElement("button",{key:D,className:g===D?"active":"",onClick:()=>x(D)},Ot(D))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:g,onChange:D=>x(+D.target.value||5)})),a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):a.map((D,B)=>o.default.createElement(eg,{key:D.id,routine:D,index:B,total:a.length,status:D.id===i?"current":D.id===s?"next":"idle",onDelete:S,onToggleToday:z,onSave:E})))}function ng(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(s=>s.type==="year").value,r=+t.find(s=>s.type==="month").value,a=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:a,monthLabel:i}}function rg(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function og(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(K(r))&&n++;return n}function ag(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(K(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var ig=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[K(0),K(-1),K(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[K(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[K(0)]}],sg=[{id:1,name:"Notion Template",dueDate:K(7),tasks:[{id:be(),text:"Design layout",done:!0},{id:be(),text:"Write docs",done:!1},{id:be(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:K(7),tasks:[{id:be(),text:"Script draft",done:!1},{id:be(),text:"Record",done:!1}]}];function lg({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:a}=ng(),i=new Set(e||[]),s=K(0),l=Array.from({length:r},(c,u)=>u+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},a),o.default.createElement("div",{className:"month-grid"},l.map(c=>{let u=rg(t,n,c);return o.default.createElement("span",{key:c,className:`month-cell ${i.has(u)?"filled":""} ${u===s?"today":""}`,style:{animationDelay:`${c*6}ms`},title:u})})))}function cg({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let a=(e.history||[]).includes(K(0)),{streak:i,freezeUsed:s}=ci(e.history),l=og(e.history),c=Math.min(100,Math.round(l/e.weeklyGoal*100)),[u,d]=(0,o.useState)(!1),[p,f]=(0,o.useState)(e.icon),[g,x]=(0,o.useState)(e.label),[y,T]=(0,o.useState)(e.weeklyGoal),v=()=>{f(e.icon),x(e.label),T(e.weeklyGoal),d(!0)},m=()=>{let h=g.trim();h&&(r(e.id,{icon:p.trim()||e.icon,label:h,weeklyGoal:Math.max(1,Math.min(7,+y||e.weeklyGoal))}),d(!1))};return u?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:p,onChange:h=>f(h.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:g,onChange:h=>x(h.target.value),onKeyDown:h=>h.key==="Enter"&&m(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:y,onChange:h=>T(h.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:m},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${ei(e.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:ei(e.id)}},e.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},e.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:v,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(lg,{history:e.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement($f,{pct:c,size:34,stroke:3.5,color:ei(e.id)}),o.default.createElement("span",{className:"vault-card-pct"},c,"% ",o.default.createElement("span",{className:"muted"},"(",l,"/",e.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,s&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:"link-btn",onClick:h=>{h.stopPropagation(),ui.open(Dn("vault",e.id)),M.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`vault-check ${a?"done":""}`,onClick:()=>t(e.id)},a?"\u2713 completed today":"mark complete today"))}function ug({habits:e,setHabits:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(7),[s,l]=bo(),c=()=>{let f=n.trim();if(!f){l(),M.error();return}t(g=>[...g,{id:be(),icon:"\u25C6",label:f,weeklyGoal:a,history:[]}]),r(""),i(7),M.click()},u=f=>{t(g=>g.filter(x=>x.id!==f)),M.delete()},d=(f,g)=>t(x=>x.map(y=>y.id===f?{...y,...g}:y)),p=f=>{let g=K(0),x=!(e.find(y=>y.id===f)?.history||[]).includes(g);t(y=>y.map(T=>{if(T.id!==f)return T;let m=(T.history||[]).includes(g)?T.history.filter(h=>h!==g):[...T.history||[],g];return{...T,history:m.slice(-370)}})),ko.propagate("vault",f,x),x?(M.success(),jt.emit("vaultDone")):M.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(f=>o.default.createElement(cg,{key:f.id,habit:f,onToggleToday:p,onDelete:u,onSave:d}))),o.default.createElement("div",{className:`composer ${s?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:f=>r(f.target.value),onKeyDown:f=>f.key==="Enter"&&c()}),o.default.createElement("button",{className:"add-btn",onClick:c,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(f=>o.default.createElement("button",{key:f,className:a===f?"active":"",onClick:()=>i(f)},f,"x/wk"))))}function dg({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:a}){let[i,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(t.text),u=()=>{let d=l.trim();d&&a(e,t.id,d),s(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:l,onChange:d=>c(d.target.value),onKeyDown:d=>d.key==="Enter"&&u(),onBlur:u,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement($g,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>s(!0)},t.text),o.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function pg({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:a,onEditTask:i,onSave:s}){let[l,c]=(0,o.useState)(""),u=e.tasks.length,d=e.tasks.filter(S=>S.done).length,p=u?Math.round(d/u*100):0,f=ag(e.dueDate),[g,x]=(0,o.useState)(!1),[y,T]=(0,o.useState)(e.name),[v,m]=(0,o.useState)(e.dueDate||""),h=()=>{let S=l.trim();S&&(n(e.id,S),c(""))},k=()=>{T(e.name),m(e.dueDate||""),x(!0)},w=()=>{let S=y.trim();S&&(s(e.id,{name:S,dueDate:v||null}),x(!1))};return g?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:y,onChange:S=>T(S.target.value),onKeyDown:S=>S.key==="Enter"&&w(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:v,onChange:S=>m(S.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>x(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:w},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${ei(e.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},e.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:k,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),f&&o.default.createElement("span",{className:`project-due ${f.overdue?"overdue":""}`},f.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${p}%`}})),o.default.createElement("span",{className:"vault-card-pct"},d,"/",u," tasks \xB7 ",p,"%"),o.default.createElement("div",{className:"project-tasks"},e.tasks.map(S=>o.default.createElement(dg,{key:S.id,projectId:e.id,task:S,onToggle:r,onDelete:a,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:l,onChange:S=>c(S.target.value),onKeyDown:S=>S.key==="Enter"&&h()})))}function fg({projects:e,setProjects:t}){let[n,r]=(0,o.useState)(""),[a,i]=(0,o.useState)(""),[s,l]=bo(),c=()=>{let y=n.trim();if(!y){l(),M.error();return}t(T=>[...T,{id:be(),name:y,dueDate:a||null,tasks:[]}]),r(""),i(""),M.click()},u=y=>{t(T=>T.filter(v=>v.id!==y)),M.delete()},d=(y,T)=>t(v=>v.map(m=>m.id===y?{...m,...T}:m)),p=(y,T)=>{t(v=>v.map(m=>m.id===y?{...m,tasks:[...m.tasks,{id:be(),text:T,done:!1}]}:m)),M.click()},f=(y,T)=>{t(v=>v.map(m=>m.id!==y?m:{...m,tasks:m.tasks.map(h=>h.id===T?{...h,done:!h.done}:h)})),M.success()},g=(y,T)=>{t(v=>v.map(m=>m.id!==y?m:{...m,tasks:m.tasks.filter(h=>h.id!==T)})),M.delete()},x=(y,T,v)=>t(m=>m.map(h=>h.id!==y?h:{...h,tasks:h.tasks.map(k=>k.id===T?{...k,text:v}:k)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):e.map(y=>o.default.createElement(pg,{key:y.id,project:y,onDelete:u,onAddTask:p,onToggleTask:f,onDeleteTask:g,onEditTask:x,onSave:d}))),o.default.createElement("div",{className:`composer ${s?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:y=>r(y.target.value),onKeyDown:y=>y.key==="Enter"&&c()}),o.default.createElement("input",{type:"date",className:"time-input",value:a,onChange:y=>i(y.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:c,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var rf="tasksh.notes.v1",mg=[{id:1,title:"ideas.md",body:`things to build next:
- undo toast on delete
- keyboard shortcuts (ctrl+k)
- xp sparkline over time`,updated:Date.now()}];function hg(e){if(!e)return"";let t=Math.floor((Date.now()-e)/6e4);if(t<1)return"just now";if(t<60)return`${t}m ago`;let n=Math.floor(t/60);if(n<24)return`${n}h ago`;let r=Math.floor(n/24);return r<30?`${r}d ago`:`${Math.floor(r/30)}mo ago`}function gg({note:e,onSave:t,onDelete:n}){let[r,a]=(0,o.useState)(!1),[i,s]=(0,o.useState)(e.title),[l,c]=(0,o.useState)(e.body),u=(0,o.useRef)(null),d=(0,o.useCallback)(()=>{let g=u.current;g&&(g.style.height="auto",g.style.height=`${g.scrollHeight}px`)},[]);(0,o.useEffect)(()=>{r&&d()},[r,d]);let p=()=>{let g=i.trim()||"untitled";t(e.id,{title:g,body:l,updated:Date.now()}),a(!1),M.click()},f=()=>{s(e.title),c(e.body),a(!1)};return r?o.default.createElement("div",{className:"note-card editing"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/notes/"),o.default.createElement("input",{className:"note-title-input",value:i,onChange:g=>s(g.target.value),placeholder:"filename","aria-label":"Note title",autoFocus:!0})),o.default.createElement("textarea",{ref:u,className:"note-body-input",value:l,onChange:g=>{c(g.target.value),d()},onKeyDown:g=>{g.key==="Escape"&&f(),g.key==="Enter"&&(g.metaKey||g.ctrlKey)&&p()},placeholder:"type here...",rows:3,"aria-label":"Note body"}),o.default.createElement("div",{className:"note-actions"},o.default.createElement("button",{className:"note-btn save",onClick:p},"save"),o.default.createElement("button",{className:"note-btn",onClick:f},"cancel"),o.default.createElement("button",{className:"note-btn danger",onClick:()=>n(e.id)},"delete"))):o.default.createElement("div",{className:"note-card",onClick:()=>a(!0),role:"button",tabIndex:0,onKeyDown:g=>{g.key==="Enter"&&a(!0)},"aria-label":`Edit note ${e.title}`},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/notes/"),o.default.createElement("span",{className:"note-title"},e.title),o.default.createElement("span",{className:"note-when"},hg(e.updated))),e.body.trim()?o.default.createElement("pre",{className:"note-body"},e.body):o.default.createElement("pre",{className:"note-body empty"},"empty",o.default.createElement("span",{className:"note-caret"})))}function vg({notes:e,setNotes:t}){let[n,r]=(0,o.useState)(""),[a,i]=bo(),s=()=>{let u=n.trim();if(!u){i(),M.error();return}let[d,...p]=u.split(`
`);t(f=>[{id:be(),title:d.slice(0,40),body:p.join(`
`),updated:Date.now()},...f]),r(""),M.click()},l=(u,d)=>t(p=>p.map(f=>f.id===u?{...f,...d}:f)),c=u=>{t(d=>d.filter(p=>p.id!==u)),M.delete()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"NOTES")),o.default.createElement("div",{className:`composer ${a?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new note...",value:n,onChange:u=>r(u.target.value),onKeyDown:u=>u.key==="Enter"&&s(),"aria-label":"New note"}),o.default.createElement("button",{onClick:s,"aria-label":"Add note"},"+")),e.length===0?o.default.createElement("div",{className:"note-empty"},o.default.createElement("span",{className:"note-prompt"},"~/notes/")," is empty",o.default.createElement("span",{className:"note-caret"})):o.default.createElement("div",{className:"note-list"},e.map(u=>o.default.createElement(gg,{key:u.id,note:u,onSave:l,onDelete:c}))))}function yg({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r,notes:a,setNotes:i}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(ug,{habits:e,setHabits:t}),o.default.createElement(fg,{projects:n,setProjects:r}),o.default.createElement(vg,{notes:a,setNotes:i}),o.default.createElement(kv,null),o.default.createElement(Ev,null))}var yt=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],di=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],ty=yt.reduce((e,t)=>(e[t.key]=di.filter(n=>n.area===t.key),e),{});function xt(e){return Array.isArray(e)?e.map(t=>typeof t=="string"?{d:t,t:"done"}:t).filter(t=>t&&typeof t.d=="string"):[]}function ri(e,t){return xt(e.history).filter(n=>n.t===t).length}function Ln(e){return Math.max(0,+e.xp||0)}function mr(e){return Math.max(0,+e.penalty||0)}function wo(e){return Ln(e)*ri(e,"done")-mr(e)*ri(e,"slip")}function xo(e,t){return xt(e.history).some(n=>n.d===t&&n.t==="done")}function Yl(e,t){return xt(e.history).some(n=>n.d===t&&n.t==="slip")}function of(e,t,n){let r=xt(e.history),a=r.find(s=>s.d===t),i=r.filter(s=>s.d!==t);return a&&a.t===n?{...e,history:i.slice(-400)}:{...e,history:[...i,{d:t,t:n}].slice(-400)}}function xg(e,t){let n=(Array.isArray(e)?e:[]).map(s=>({...s,xp:Math.max(0,+s.xp||0),penalty:Math.max(0,+s.penalty||0),history:xt(s.history)})),r=new Set(n.map(s=>s.id)),a=new Map,i=(Array.isArray(t)?t:[]).map(s=>{let l=s.id;return r.has(l)&&(l=be(),a.set(s.id,l)),r.add(l),{...s,id:l,xp:Math.max(0,+s.xp2||0),penalty:Math.max(0,+s.xp||0),history:xt(s.history).map(c=>({d:c.d,t:"slip"})),wasBad:!0}});return[...n,...i]}var Ff="tasksh.subareas.v1",af="tasksh.radarmode.v1";function kg(){let e=me(Ff,null);return!Array.isArray(e)||!e.length?di:e.filter(t=>t&&t.key&&t.area&&yt.some(n=>n.key===t.area))}function oi(e,t){return e.filter(n=>n.area===t)}function Xl(e,t){if(t.sub&&e.some(r=>r.key===t.sub&&r.area===t.area))return t.sub;let n=e.find(r=>r.area===t.area);return n?n.key:null}function sf(e,t,n){return(n||[]).filter(r=>Xl(e,r)===t).reduce((r,a)=>r+wo(a),0)}function bg(){let[e,t]=(0,o.useState)(kg),[n,r]=(0,o.useState)(()=>{try{return localStorage.getItem(af)||"subs"}catch{return"subs"}});(0,o.useEffect)(()=>{try{localStorage.setItem(Ff,JSON.stringify(e))}catch{}},[e]),(0,o.useEffect)(()=>{try{localStorage.setItem(af,n)}catch{}},[n]);let a=(0,o.useCallback)((c,u)=>{let d=String(u||"").trim().slice(0,18);d&&t(p=>p.map(f=>f.key===c?{...f,label:d}:f))},[]),i=(0,o.useCallback)((c,u)=>{let d=String(u||"").trim().slice(0,18);d&&t(p=>{let f=d.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",g=f,x=2;for(;p.some(y=>y.key===g);)g=`${f}${x++}`;return[...p,{key:g,area:c,label:d}]})},[]),s=(0,o.useCallback)(c=>{t(u=>{let d=u.find(p=>p.key===c);return!d||oi(u,d.area).length<=1?u:u.filter(p=>p.key!==c)})},[]),l=(0,o.useCallback)(()=>t(di),[]);return{subs:e,radarMode:n,setRadarMode:r,renameSub:a,addSub:i,removeSub:s,resetSubs:l}}var lf=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Of(e,t){let r=(352+(t<=1?0:Math.min(1,Math.max(0,e/(t-1))))*179)%360;return wg(r,.8,.64)}function wg(e,t,n){let r=(1-Math.abs(2*n-1))*t,a=r*(1-Math.abs(e/60%2-1)),i=n-r/2,[s,l,c]=e<60?[r,a,0]:e<120?[a,r,0]:e<180?[0,r,a]:e<240?[0,a,r]:e<300?[a,0,r]:[r,0,a],u=d=>Math.round((d+i)*255).toString(16).padStart(2,"0");return`#${u(s)}${u(l)}${u(c)}`}function ei(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return lf[Math.abs(t)%lf.length]}var ho=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function jf(e){return Math.max(0,(e||[]).reduce((t,n)=>t+wo(n),0))}function Uf(e,t){let n=(e||[]).reduce((a,i)=>a+wo(i),0),r=(t||[]).reduce((a,i)=>a+i.cost*(i.claimed?.length||0),0);return Math.max(0,n-r)}function cf(e,t){return(t||[]).filter(n=>n.area===e).reduce((n,r)=>n+wo(r),0)}var Jf=160,Wf=1.35;function Ft(e){return e<=1?0:Math.round(Jf*Math.pow(e-1,Wf))}function Hf(e){let t=Math.max(0,e),n=Math.max(1,Math.floor(1+Math.pow(t/Jf,1/Wf)));for(;Ft(n+1)<=t;)n++;for(;n>1&&Ft(n)>t;)n--;let r=t-Ft(n),a=Ft(n+1)-Ft(n);return{level:n,into:r,span:a}}function Ng(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[a,i]of t)for(;n>=a;)r+=i,n-=a;return r}function Vf(e){let t=Math.floor((Math.max(1,e)-1)/3);if(t<ho.length)return ho[t];let n=t-ho.length+2;return`${ho[ho.length-1]} ${Ng(n)}`}var Sg=[{id:1,label:"Deep Work",area:"work",xp:40,history:[K(0),K(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[K(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Eg=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],Cg=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function Mg({habit:e,subs:t=di,allHabits:n=[],onMark:r,onDelete:a,onSave:i,reorder:s=!1,onMove:l,canUp:c=!1,canDown:u=!1}){let d=K(0),p=xo(e,d),f=Yl(e,d),[g,x]=(0,o.useState)(0),y=()=>{p||x(N=>N+1)},{streak:T,freezeUsed:v}=ci(xt(e.history).filter(N=>N.t==="done").map(N=>N.d)),m=yt.find(N=>N.key===e.area)||yt[0],[h,k]=(0,o.useState)(!1),w=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{w.current&&clearTimeout(w.current)},[]);let S=()=>{if(h){a(e.id);return}k(!0),M.click(),w.current&&clearTimeout(w.current),w.current=setTimeout(()=>{k(!1),w.current=null},4e3)},[z,E]=(0,o.useState)(!1),[A,b]=(0,o.useState)(e.label),[I,$]=(0,o.useState)(e.area),[D,B]=(0,o.useState)(()=>Xl(t,e)),[J,Y]=(0,o.useState)(Ln(e)),[L,U]=(0,o.useState)(mr(e)),[H,q]=(0,o.useState)(e.opposite||""),Q=()=>{b(e.label),$(e.area),B(Xl(t,e)),Y(Ln(e)),U(mr(e)),q(e.opposite||""),E(!0)},ne=()=>{let N=A.trim();N&&(i(e.id,{label:N,area:I,sub:D,xp:Math.max(0,+J||0),penalty:Math.max(0,+L||0),opposite:H||null}),E(!1))};if(z)return o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:A,onChange:N=>b(N.target.value),onKeyDown:N=>N.key==="Enter"&&ne(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},yt.map(N=>o.default.createElement("button",{key:N.key,type:"button",className:`area-chip ${I===N.key?"active":""}`,style:{"--ac":N.color},onClick:()=>{$(N.key);let G=oi(t,N.key);B(G.length?G[0].key:null)}},N.label))),o.default.createElement("div",{className:"edit-row edit-row-subs"},oi(t,I).map(N=>o.default.createElement("button",{key:N.key,type:"button",className:`sub-chip ${D===N.key?"active":""}`,onClick:()=>B(N.key)},N.label))),o.default.createElement("div",{className:"edit-row edit-xp-row"},o.default.createElement("label",{className:"edit-xp-field"},o.default.createElement("span",{className:"edit-xp-tag gain"},"\u2713 adds"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-input",value:J,onChange:N=>Y(N.target.value)})),o.default.createElement("label",{className:"edit-xp-field"},o.default.createElement("span",{className:"edit-xp-tag lose"},"\u2717 cuts"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-input",value:L,onChange:N=>U(N.target.value)}))),o.default.createElement("div",{className:"edit-row edit-opp-row"},o.default.createElement("span",{className:"edit-xp-tag"},"opposite of"),o.default.createElement("select",{className:"edit-opp-select",value:H,onChange:N=>q(N.target.value)},o.default.createElement("option",{value:""},"\u2014 none \u2014"),n.filter(N=>N.id!==e.id).map(N=>o.default.createElement("option",{key:N.id,value:N.id},N.label)))),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>E(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:ne},"save"))));if(s)return o.default.createElement("div",{className:"quest-habit-card good reordering"},o.default.createElement("span",{className:"area-dot",style:{background:m.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},m.label)),o.default.createElement("button",{className:"keypool-move",disabled:!c,onClick:()=>l(e.id,-1),"aria-label":"Move up"},"\u2191"),o.default.createElement("button",{className:"keypool-move",disabled:!u,onClick:()=>l(e.id,1),"aria-label":"Move down"},"\u2193"));let ue=[];return Ln(e)>0&&ue.push(`+${Ln(e)}`),mr(e)>0&&ue.push(`\u2212${mr(e)}`),o.default.createElement("div",{className:`quest-habit-card good ${g?"just-completed":""} ${f?"slipped":""}`,key:`h${e.id}`},g>0&&o.default.createElement("span",{className:"xp-pop",key:g},"+",Ln(e)),o.default.createElement("span",{className:"area-dot",style:{background:m.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},e.label),o.default.createElement("span",{className:"quest-habit-meta"},ue.join(" / ")," XP \xB7 ",m.label,T>0?` \xB7 \u{1F525}${T}${v?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:"link-btn",onClick:N=>{N.stopPropagation(),ui.open(Dn("good",e.id)),M.click()},"aria-label":"Links",title:"Link to other items"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),o.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-slip ${f?"on":""}`,onClick:()=>r(e.id,"slip"),"aria-label":"Mark slipped today",title:"did the opposite"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:`quest-check ${p?"done":""}`,onClick:()=>{y(),r(e.id,"done")},"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:p?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:Q,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),h?o.default.createElement("button",{className:"del-btn armed",onClick:S,"aria-label":"Confirm delete habit"},"sure?"):o.default.createElement("button",{className:"del-btn",onClick:S,"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function zg({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:a}){let[i,s]=(0,o.useState)(!1),[l,c]=(0,o.useState)(e.label),[u,d]=(0,o.useState)(e.cost),p=()=>{c(e.label),d(e.cost),s(!0)},f=()=>{let g=l.trim();g&&(a(e.id,{label:g,cost:Math.max(1,+u||e.cost)}),s(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:l,onChange:g=>c(g.target.value),onKeyDown:g=>g.key==="Enter"&&f(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:u,onChange:g=>d(g.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>s(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:f},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},e.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},e.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function _g({habits:e,setHabits:t,rewards:n,setRewards:r,tagCtl:a}){let[i,s]=(0,o.useState)("all"),[l,c]=(0,o.useState)(!1),u=a.subs,d=(0,o.useMemo)(()=>jf(e),[e]),p=(0,o.useMemo)(()=>Uf(e,n),[e,n]),{level:f,into:g,span:x}=Hf(d),y=Math.round(g/x*100),T=(C,j)=>{let V=K(0),Z=e.find(xe=>xe.id===C);if(!Z)return;let _e=!(j==="done"?xo(Z,V):Yl(Z,V)),Ze=Z.opposite?String(Z.opposite):null;if(t(xe=>xe.map(Re=>{if(Re.id===C)return of(Re,V,j);if(_e&&Ze&&String(Re.id)===Ze){let He=j==="done"?"slip":"done";return(He==="done"?xo(Re,V):Yl(Re,V))?Re:of(Re,V,He)}return Re})),j==="done"&&ko.propagate("good",C,_e),!_e){M.click();return}if(j==="done"){M.success(),jt.emit("habitDone");let xe=gr().hour;xe<6&&vo({earlyFinish:!0}),xe>=0&&xe<4&&vo({lateFinish:!0})}else M.error(),jt.emit("badHabit")},[v,m]=(0,o.useState)(!1),h=(C,j)=>{t(V=>{let Z=V.findIndex(xe=>xe.id===C);if(Z<0)return V;let lt=xe=>i==="all"||xe.area===i,_e=Z+j;for(;_e>=0&&_e<V.length&&!lt(V[_e]);)_e+=j;if(_e<0||_e>=V.length)return V;let Ze=[...V];return[Ze[Z],Ze[_e]]=[Ze[_e],Ze[Z]],Ze}),M.click()},k=C=>{t(j=>j.filter(V=>V.id!==C)),M.delete()},w=(C,j)=>t(V=>V.map(Z=>Z.id===C?{...Z,...j}:Z)),S=C=>{let j=K(0);r(V=>V.map(Z=>Z.id===C?{...Z,claimed:[...Z.claimed||[],j]}:Z)),M.success(),jt.emit("rewardClaimed")},z=C=>{r(j=>j.filter(V=>V.id!==C)),M.delete()},E=(C,j)=>r(V=>V.map(Z=>Z.id===C?{...Z,...j}:Z)),[A,b]=(0,o.useState)(""),[I,$]=(0,o.useState)("work"),[D,B]=(0,o.useState)(20),[J,Y]=(0,o.useState)(0),[L,U]=(0,o.useState)(""),[H,q]=(0,o.useState)(100),Q=()=>{let C=A.trim();C&&(t(j=>[...j,{id:be(),label:C,area:I,xp:Math.max(0,+D||0),penalty:Math.max(0,+J||0),history:[]}]),b(""),M.click())},ne=()=>{let C=L.trim();C&&(r(j=>[...j,{id:be(),label:C,cost:+H||50,claimed:[]}]),U(""),M.click())},ue=(0,o.useMemo)(()=>a.radarMode==="areas"?yt.map(C=>({key:C.key,label:C.label,color:C.color,value:cf(C.key,e)})):u.map(C=>({key:C.key,label:C.label,color:(yt.find(j=>j.key===C.area)||{}).color,value:sf(u,C.key,e)})),[a.radarMode,u,e]),N=(0,o.useMemo)(()=>{let C=Math.max(...yt.map(lt=>cf(lt.key,e)),0),j=Math.max(...u.map(lt=>sf(u,lt.key,e)),0),V=Math.max(C,j,1),Z=V<=100?25:V<=500?50:100;return Math.ceil(V/Z)*Z},[u,e]),G=(0,o.useMemo)(()=>{if(a.radarMode==="areas")return 0;let C=new Set(u.map(V=>V.key)),j=V=>!V.sub||!C.has(V.sub);return e.filter(j).reduce((V,Z)=>V+Math.abs(wo(Z)),0)},[a.radarMode,u,e]),he=i==="all"?e:e.filter(C=>C.area===i),ve=e.reduce((C,j)=>C+Ln(j)*ri(j,"done"),0),W=e.reduce((C,j)=>C+mr(j)*ri(j,"slip"),0),ee=n.reduce((C,j)=>C+j.cost*(j.claimed?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement($f,{pct:y,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${f}`,sublabel:Vf(f)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(dn,{value:d})," ",o.default.createElement("small",null,"XP")),ee>0&&o.default.createElement("span",{className:"hero-xp-spend"},"\u25C9 ",p," to spend"),o.default.createElement("span",{className:"hero-xp-sub"},g,"/",x," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(dn,{value:ve})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(dn,{value:W})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement("div",{className:"radar-controls"},o.default.createElement("div",{className:"radar-mode"},o.default.createElement("button",{className:a.radarMode==="areas"?"active":"",onClick:()=>{a.setRadarMode("areas"),M.click()}},"4 areas"),o.default.createElement("button",{className:a.radarMode==="subs"?"active":"",onClick:()=>{a.setRadarMode("subs"),M.click()}},u.length," tags")),o.default.createElement("button",{className:"radar-edit",onClick:()=>c(!0)},"edit tags")),o.default.createElement(qh,{axes:ue,size:252,maxValue:N}),G>0&&o.default.createElement("div",{className:"radar-note"},G," XP from untagged habits isn't plotted \u2014 tag them to include it")),(ve>0||W>0||ee>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(Gh,{size:120,stroke:16,centerLabel:p,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:ve,color:"#5EEAD4"},{key:"lost",label:"Lost",value:W,color:"#F0576B"},{key:"spent",label:"Spent",value:ee,color:"#F5A623"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(dn,{value:ve}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(dn,{value:W}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F5A623"}}),o.default.createElement("span",null,"Spent on rewards"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(dn,{value:ee}))),o.default.createElement("div",{className:"donut-legend-row donut-legend-total"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"transparent"}}),o.default.createElement("span",null,"Level progress (spending doesn't count)"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(dn,{value:d})))))),o.default.createElement("div",{className:"area-filter"},o.default.createElement("button",{className:i==="all"?"active":"",onClick:()=>s("all")},"all"),yt.map(C=>o.default.createElement("button",{key:C.key,className:i===C.key?"active":"",style:{"--ac":C.color},onClick:()=>{s(C.key),M.click()}},C.label))),l&&o.default.createElement(jg,{tagCtl:a,onClose:()=>c(!1)}),o.default.createElement("div",{className:"section-header habits-header"},o.default.createElement("span",null,"HABITS"),o.default.createElement("button",{className:`radar-edit ${v?"on":""}`,onClick:()=>{m(C=>!C),M.click()}},v?"done":"reorder")),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet")):he.map((C,j)=>o.default.createElement(Mg,{key:C.id,habit:C,subs:u,allHabits:e,onMark:T,onDelete:k,onSave:w,reorder:v,onMove:h,canUp:j>0,canDown:j<he.length-1}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:A,onChange:C=>b(C.target.value),onKeyDown:C=>C.key==="Enter"&&Q()}),o.default.createElement("button",{className:"add-btn",onClick:Q,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},yt.map(C=>o.default.createElement("button",{key:C.key,className:I===C.key?"active":"",onClick:()=>$(C.key)},C.label)),o.default.createElement("label",{className:"new-xp-field"},o.default.createElement("span",{className:"edit-xp-tag gain"},"\u2713"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-custom",value:D,onChange:C=>B(+C.target.value||0)})),o.default.createElement("label",{className:"new-xp-field"},o.default.createElement("span",{className:"edit-xp-tag lose"},"\u2717"),o.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-custom",value:J,onChange:C=>Y(+C.target.value||0)}))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(C=>o.default.createElement(zg,{key:C.id,reward:C,canClaim:p>=C.cost,onClaim:S,onDelete:z,onSave:E}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:L,onChange:C=>U(C.target.value),onKeyDown:C=>C.key==="Enter"&&ne()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:H,onChange:C=>q(+C.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:ne,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var uf="tasksh.inventory.v1",df="tasksh.daily.v1",fn=[{key:"easy",label:"easy",coins:10,color:"#7EE787"},{key:"mid",label:"mid",coins:50,color:"#F5A623"},{key:"hard",label:"hard",coins:100,color:"#F0576B"}],Tg=e=>fn.find(t=>t.key===e)||fn[0];function Ag(e,t){let n=(e||[]).map(a=>typeof a.time=="string"&&/^\d{2}:\d{2}$/.test(a.time)?Number(a.time.slice(0,2))*60+Number(a.time.slice(3,5)):null).filter(a=>a!==null),r=n.length?Math.min(...n):0;return t<r?K(-1):K(0)}function Kf(e,t){let n={};for(let r of fn){let a=(e||[]).filter(i=>i.diff===r.key);n[r.key]=a.length?a[Math.floor(Math.random()*a.length)].id:null}return{day:t,picks:n,done:[]}}function Lg(e){let t={high:"hard",mid:"mid",low:"easy"};return(Array.isArray(e)?e:[]).map(n=>({id:n.id,text:n.text,diff:t[n.priority]||"mid"}))}var Pg=[{id:9001,text:"100 pushups",diff:"hard"},{id:9002,text:"Read 20 pages",diff:"mid"},{id:9003,text:"Water the plants",diff:"easy"}],Dg=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function Ig(e=1e3*30){let[t,n]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function $g({checked:e,onChange:t,color:n}){return o.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function Bg({inventory:e,setInventory:t,daily:n,setDaily:r,routines:a,onReward:i}){let[s,l]=(0,o.useState)(""),[c,u]=(0,o.useState)("mid"),[d,p]=bo(),[f,g]=(0,o.useState)(null),[x,y]=(0,o.useState)(null),[T,v]=(0,o.useState)(""),[m,h]=(0,o.useState)("mid"),k=(0,o.useRef)(null);(0,o.useEffect)(()=>()=>{k.current&&clearTimeout(k.current)},[]);let w=(L,U)=>{r(H=>{let q={...H.picks||{}};if(q[U]!==L)return H;let Q=H.done||[],ne=Object.values(q),ue=e.filter(N=>N.id!==L&&N.diff===U&&!ne.includes(N.id)&&!Q.includes(N.id));return ue.length?q[U]=ue[Math.floor(Math.random()*ue.length)].id:delete q[U],{...H,picks:q}})},S=L=>Object.keys(n.picks||{}).find(U=>n.picks[U]===L)||null,z=L=>{g(null),y(L.id),v(L.text),h(L.diff),M.click()},E=()=>{y(null),M.whoosh()},A=L=>{let U=T.trim();if(!U){p(),M.error();return}if(m!==L.diff){let H=S(L.id);H&&w(L.id,H)}t(H=>H.map(q=>q.id===L.id?{...q,text:U,diff:m}:q)),y(null),M.success()},b=()=>{let L=s.trim();if(!L){p(),M.error();return}t(U=>[...U,{id:be(),text:L,diff:c}]),l(""),M.click()},I=L=>{if(f!==L){g(L),M.click(),k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{g(null),k.current=null},4e3);return}let U=S(L);U&&w(L,U),t(H=>H.filter(q=>q.id!==L)),g(null),M.delete()},$=(L,U)=>{(n.done||[]).includes(L)||(r(H=>({...H,done:[...H.done||[],L]})),i(U),M.success(),jt.emit("habitDone"))},D=()=>{r(Kf(e,n.day)),M.click()},B=L=>e.find(U=>U.id===L)||null,J=fn.filter(L=>{let U=n.picks?.[L.key];return U&&(n.done||[]).includes(U)}).length,Y=fn.filter(L=>B(n.picks?.[L.key])).length;return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"section-header habits-header"},o.default.createElement("span",null,"TODAY'S QUESTS"),o.default.createElement("span",{className:"keypool-hint"},J,"/",Y," done")),Y===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing in the inventory yet \u2014 add some below")):o.default.createElement("div",{className:"daily-grid"},fn.map(L=>{let U=B(n.picks?.[L.key]);if(!U)return null;let H=(n.done||[]).includes(U.id);return o.default.createElement("button",{key:L.key,className:`daily-card ${H?"done":""}`,style:{"--dc":L.color},onClick:()=>$(U.id,L.coins),disabled:H},o.default.createElement("span",{className:"daily-diff"},L.label),o.default.createElement("span",{className:"daily-text"},U.text),o.default.createElement("span",{className:"daily-coins"},H?"\u2713 claimed":`+${L.coins} \u25C9`))})),o.default.createElement("div",{className:"daily-note"},"new draw when your first routine starts",a?.length?` (${[...a].map(L=>L.time).sort()[0]})`:"",o.default.createElement("button",{className:"note-btn",onClick:D},"reroll")),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"INVENTORY")),o.default.createElement("div",{className:`composer ${d?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"something you might do...",value:s,onChange:L=>l(L.target.value),onKeyDown:L=>L.key==="Enter"&&b()}),o.default.createElement("button",{className:"add-btn",onClick:b,"aria-label":"Add to inventory"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},fn.map(L=>o.default.createElement("button",{key:L.key,className:c===L.key?"active":"",style:{"--ac":L.color},onClick:()=>u(L.key)},L.label," \xB7 ",L.coins,"\u25C9"))),o.default.createElement("div",{className:"quest-habit-list"},e.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"inventory is empty")):e.map(L=>{let U=Tg(L.diff),H=Object.values(n.picks||{}).includes(L.id);return o.default.createElement("div",{className:`quest-habit-card good ${H?"drawn":""}`,key:L.id},x===L.id?o.default.createElement("div",{className:"inv-edit"},o.default.createElement("input",{className:"inv-edit-input",value:T,onChange:q=>v(q.target.value),onKeyDown:q=>{q.key==="Enter"&&A(L),q.key==="Escape"&&E()},"aria-label":"Edit inventory item",autoFocus:!0}),o.default.createElement("div",{className:"duration-chips inv-edit-chips"},fn.map(q=>o.default.createElement("button",{key:q.key,className:m===q.key?"active":"",style:{"--ac":q.color},onClick:()=>{h(q.key),M.click()}},q.label," \xB7 ",q.coins,"\u25C9"))),o.default.createElement("div",{className:"inv-edit-actions"},o.default.createElement("button",{className:"note-btn save",onClick:()=>A(L)},"save"),o.default.createElement("button",{className:"note-btn",onClick:E},"cancel"))):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"area-dot",style:{background:U.color}}),o.default.createElement("button",{className:"quest-habit-main inv-tap",onClick:()=>z(L)},o.default.createElement("span",{className:"quest-habit-label"},L.text),o.default.createElement("span",{className:"quest-habit-meta"},U.label," \xB7 +",U.coins," coins",H?" \xB7 drawn":""," \xB7 tap to edit")),f===L.id?o.default.createElement("button",{className:"del-btn armed",onClick:()=>I(L.id)},"sure?"):o.default.createElement("button",{className:"del-btn",onClick:()=>I(L.id),"aria-label":"Remove from inventory"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))})))}var Ol="tasksh.tasks.v1",pf="tasksh.routines.v1",ff="tasksh.vaulthabits.v1",mf="tasksh.projects.v1",Fg="tasksh.goodhabits.v1",Og="tasksh.badhabits.v1",hf="tasksh.habits.v1",gf="tasksh.rewards.v1",yr="tasksh.deviceid.v1",jl="tasksh.notifyenabled.v1",ai="tasksh.aikey.v1";function jg({tagCtl:e,onClose:t}){let[n,r]=(0,o.useState)(null),[a,i]=(0,o.useState)(""),s=l=>{a.trim()&&(e.addSub(l,a),M.success()),i(""),r(null)};return o.default.createElement("div",{className:"sheet-backdrop",onClick:t},o.default.createElement("div",{className:"sheet",onClick:l=>l.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"edit tags"),o.default.createElement("button",{className:"sheet-close",onClick:t,"aria-label":"Close"},"\xD7")),yt.map(l=>{let c=oi(e.subs,l.key);return o.default.createElement("div",{key:l.key,className:"tag-group"},o.default.createElement("div",{className:"tag-group-head"},o.default.createElement("span",{className:"tag-dot",style:{background:l.color}}),o.default.createElement("span",{className:"tag-group-name"},l.label)),c.map(u=>o.default.createElement("div",{key:u.key,className:"tag-row"},o.default.createElement("input",{className:"tag-input",defaultValue:u.label,maxLength:18,onBlur:d=>e.renameSub(u.key,d.target.value),onKeyDown:d=>{d.key==="Enter"&&d.target.blur()}}),o.default.createElement("button",{className:"tag-del",disabled:c.length<=1,title:c.length<=1?"each area needs at least one tag":"remove",onClick:()=>{e.removeSub(u.key),M.delete()}},"\xD7"))),n===l.key?o.default.createElement("div",{className:"tag-row"},o.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:18,value:a,onChange:u=>i(u.target.value),onBlur:()=>s(l.key),onKeyDown:u=>{u.key==="Enter"&&s(l.key),u.key==="Escape"&&(i(""),r(null))}})):o.default.createElement("button",{className:"tag-add",onClick:()=>{i(""),r(l.key)}},"+ add tag"))}),o.default.createElement("div",{className:"sheet-foot"},"habits keep their tag when you rename it",o.default.createElement("button",{className:"tag-reset",onClick:()=>{e.resetSubs(),M.click()}},"reset to defaults"))))}function Ug({selfRef:e,data:t,links:n,setLinks:r,onClose:a}){let[i,s]=(0,o.useState)(!1),l=qp(e,t),c=Af(n,e),u=(0,o.useMemo)(()=>[...t.routines.map(p=>({ref:Dn("routine",p.id),label:p.label,kind:"routine"})),...(t.habits||[]).map(p=>({ref:Dn("good",p.id),label:p.label,kind:"good"})),...t.vaultHabits.map(p=>({ref:Dn("vault",p.id),label:p.label,kind:"vault"}))].filter(p=>p.ref!==e&&!c.includes(p.ref)),[t,e,c]);return o.default.createElement("div",{className:"sheet-backdrop",onClick:a},o.default.createElement("div",{className:"sheet",onClick:d=>d.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"links \xB7 ",l?.label||"item"),o.default.createElement("button",{className:"sheet-close",onClick:a,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),c.length===0?o.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):o.default.createElement("div",{className:"link-list"},c.map(d=>{let p=qp(d,t);return o.default.createElement("div",{key:d,className:`link-row ${p?"":"stale"}`},o.default.createElement("span",{className:"link-kind"},p?p.meta:"missing"),o.default.createElement("span",{className:"link-label"},p?p.label:"deleted item"),o.default.createElement("button",{className:"link-remove",onClick:()=>{r(f=>zh(f,e,d)),M.delete()}},"unlink"))})),i?o.default.createElement("div",{className:"link-picker"},u.length===0?o.default.createElement("div",{className:"link-empty"},"nothing else to link to"):u.map(d=>o.default.createElement("button",{key:d.ref,className:"link-candidate",onClick:()=>{r(p=>Mh(p,e,d.ref)),s(!1),M.success()}},o.default.createElement("span",{className:"link-kind"},_f[d.kind].label),o.default.createElement("span",{className:"link-label"},d.label),o.default.createElement("span",{className:"link-plus"},"+")))):o.default.createElement("button",{className:"link-add-btn",onClick:()=>s(!0)},"+ link to something")))}function Jg({id:e,onDone:t}){let n=Lf(e);return(0,o.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?o.default.createElement("div",{className:"ach-toast",onClick:t},o.default.createElement("span",{className:"ach-toast-icon"},n.icon),o.default.createElement("span",{className:"ach-toast-body"},o.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),o.default.createElement("span",{className:"ach-toast-name"},n.name),o.default.createElement("span",{className:"ach-toast-desc"},n.desc)),o.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function Wg({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:a,onDone:i}){let s=vr.find(c=>c.unlockLevel>e),l=Kl(e);return o.default.createElement("div",{className:"lvl-backdrop",onClick:i},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"lvl-card",onClick:c=>c.stopPropagation()},o.default.createElement("div",{className:"lvl-kicker"},"level up"),o.default.createElement("div",{className:"lvl-num"},e),o.default.createElement("div",{className:"lvl-title"},Vf(e)),o.default.createElement("div",{className:"lvl-rewards"},o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),o.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),o.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",o.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),a!=null&&o.default.createElement("div",{className:"lvl-reward"},o.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),o.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),o.default.createElement("div",{className:"lvl-next"},s?`next theme at level ${s.unlockLevel}`:"all themes unlocked",l?` \xB7 next form at ${l.minLevel}`:""),o.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function Hg({earned:e,coins:t}){let n=new Set(e),r=yo.filter(i=>!i.hidden||n.has(i.id)),a=yo.filter(i=>i.hidden&&!n.has(i.id)).length;return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"ach-head"},o.default.createElement("span",{className:"sheet-title"},"achievements"),o.default.createElement("span",{className:"ach-count"},n.size,"/",yo.length," \xB7 \u25C9 ",t)),o.default.createElement("div",{className:"ach-grid"},r.map(i=>{let s=n.has(i.id);return o.default.createElement("div",{key:i.id,className:`ach-card ${s?"got":""}`},o.default.createElement("span",{className:"ach-icon"},s?i.icon:"\xB7"),o.default.createElement("span",{className:"ach-name"},i.name),o.default.createElement("span",{className:"ach-desc"},i.desc),o.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),a>0&&o.default.createElement("div",{className:"ach-hidden-note"},a," hidden achievement",a===1?"":"s"," left to discover"))}function Vg({ctl:e,level:t,totalXP:n,earned:r=[],coins:a=0,onClose:i}){let s=Ft(t+1),l=Ft(t);return o.default.createElement("div",{className:"sheet-backdrop",onClick:i},o.default.createElement("div",{className:"sheet",onClick:c=>c.stopPropagation()},o.default.createElement("div",{className:"sheet-head"},o.default.createElement("span",{className:"sheet-title"},"themes"),o.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),o.default.createElement("div",{className:"theme-grid"},e.themes.map(c=>{let u=Gl(c,t),d=e.themeId===c.id,p=Ft(c.unlockLevel),f=Ft(Math.max(1,c.unlockLevel-1)),g=u?100:Math.max(0,Math.min(99,Math.round((n-f)/(p-f)*100)));return o.default.createElement("button",{key:c.id,className:`theme-card ${d?"active":""} ${u?"":"locked"}`,onClick:()=>{u?(e.setThemeId(c.id),M.success()):M.error()},disabled:!u},o.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${c.colors.bg} 0%, ${c.colors.panel} 45%, ${c.colors.accent} 100%)`}},!u&&o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},o.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),d&&o.default.createElement("span",{className:"theme-active-dot"})),o.default.createElement("span",{className:"theme-name"},c.name),u?o.default.createElement("span",{className:"theme-blurb"},c.blurb):o.default.createElement(o.default.Fragment,null,o.default.createElement("span",{className:"theme-req"},"level ",c.unlockLevel),o.default.createElement("span",{className:"theme-bar"},o.default.createElement("span",{className:"theme-bar-fill",style:{width:`${g}%`}})),o.default.createElement("span",{className:"theme-pct"},g,"%")))})),o.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,s-n)," XP to level ",t+1),o.default.createElement("div",{className:"ach-section"},o.default.createElement(Hg,{earned:r,coins:a})),o.default.createElement("div",{className:"calm-toggle-row"},o.default.createElement("div",null,o.default.createElement("div",{className:"calm-toggle-label"},"ambient background"),o.default.createElement("div",{className:"calm-toggle-hint"},e.ambience?"drifting gradients and particles":"flat black, like the old build")),o.default.createElement("button",{className:`calm-switch ${e.ambience?"on":""}`,onClick:()=>{e.setAmbience(!e.ambience),M.click()},"aria-pressed":e.ambience},o.default.createElement("span",{className:"calm-knob"}))),o.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",o.default.createElement("b",null,e.phase.label))))}function Za({label:e,value:t,color:n}){return o.default.createElement("div",{className:"pet-stat"},o.default.createElement("div",{className:"pet-stat-top"},o.default.createElement("span",{className:"pet-stat-label"},e),o.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),o.default.createElement("div",{className:"pet-stat-track"},o.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function Kg({from:e,to:t,petName:n,onDone:r}){(0,o.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let a=In[t];return o.default.createElement("div",{className:"evo-backdrop",onClick:r},o.default.createElement("div",{className:"screen-pulse"}),o.default.createElement("div",{className:"burst"}),o.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},o.default.createElement("div",{className:"evo-kicker"},"evolution"),o.default.createElement("div",{className:"evo-stage-row"},o.default.createElement("div",{className:"evo-old"},o.default.createElement(ql,{stage:e,mood:"content",size:72,animate:!1})),o.default.createElement("span",{className:"evo-arrow"},"\u2192"),o.default.createElement("div",{className:"evo-new"},o.default.createElement(ql,{stage:t,mood:"joyful",size:132,evolving:!0}))),o.default.createElement("div",{className:"evo-name"},n," became ",o.default.createElement("b",null,a.name)),o.default.createElement("div",{className:"evo-title"},a.title),o.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var mn="https://tasksh-notify.techcraftor.workers.dev",qg="BO6-Y8l-bh_WOLy4A7zYXX_8cAPCYiY2gzlkn7kuWqMlvK921aU5IebajkHiQlRuQaoOQxSjfIAFj--bO_Vvyi0";function Gg(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let i=0;i<r.length;i++)a[i]=r.charCodeAt(i);return a}function pi(){let e=localStorage.getItem(yr);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(yr,e)),e}async function Yg(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Gg(qg)}));let r=pi();if(!(await fetch(`${mn}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function Xg(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=pi();try{await fetch(`${mn}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function vf(e){let t=pi();try{await fetch(`${mn}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label,duration:n.duration}))})})}catch{}}var ii=[{id:"gemini",label:"Gemini",test:e=>/^(AIza|AQ\.)/.test(e),where:"aistudio.google.com/apikey",free:"~1000 req/day",shared:!0},{id:"groq",label:"Groq",test:e=>/^gsk_/.test(e),where:"console.groq.com",free:"~1000 req/day, fastest"},{id:"cerebras",label:"Cerebras",test:e=>/^csk-/.test(e),where:"cloud.cerebras.ai",free:"1M tokens/day"},{id:"nvidia",label:"NVIDIA NIM",test:e=>/^nvapi-/.test(e),where:"build.nvidia.com",free:"40 req/min, 1000 credits"},{id:"mistral",label:"Mistral",test:()=>!1,prefixed:!0,where:"console.mistral.ai",free:"paste as mistral:YOUR_KEY"},{id:"openrouter",label:"OpenRouter",test:e=>/^sk-or-/.test(e),where:"openrouter.ai/keys",free:"50 req/day"},{id:"openai",label:"OpenAI",test:e=>/^sk-/.test(e),where:"platform.openai.com"}];function go(e){let t=String(e||"").trim(),n=t.match(/^([a-z][a-z0-9]*):(.+)$/i);if(n){let r=ii.find(a=>a.id===n[1].toLowerCase());if(r)return r}return ii.find(r=>r.test(t))||null}var rc="tasksh.aikeys.v1";function Ut(){try{let e=JSON.parse(localStorage.getItem(rc)||"null");if(Array.isArray(e)&&e.length)return e.filter(Boolean);let t=localStorage.getItem(ai);return t?[t]:[]}catch{return[]}}function fi(e){let t=[...new Set(e.map(n=>String(n).trim()).filter(Boolean))].slice(0,10);try{localStorage.setItem(rc,JSON.stringify(t)),t.length?localStorage.setItem(ai,t[0]):localStorage.removeItem(ai)}catch{}}function Qg(e){let t=String(e||"").trim();if(!t)return Ut();let n=[...Ut(),t];return fi(n),Ut()}function yf(e,t){let n=Ut(),r=n.indexOf(e),a=r+t;if(r<0||a<0||a>=n.length)return n;let i=[...n];return[i[r],i[a]]=[i[a],i[r]],fi(i),Ut()}function Zg(e){let t=Ut().filter(n=>n!==e);return fi(t),t}function Rg(){return Ut()[0]||""}function ev(e){fi(e?[e]:[])}function oc(e){if(!e)return"";let t=String(e).match(/^([a-z][a-z0-9]*:)(.+)$/i);return t&&ii.some(n=>n.id===t[1].slice(0,-1).toLowerCase())?t[1]+oc(t[2]):e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`}var si=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function tv(e){let t=await fetch(`${mn}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function nv(e,t,n,r,a){let i=await fetch(`${mn}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:a,apiKeys:Ut()})}),s=null;try{s=await i.json()}catch{}if(!i.ok){let l=s&&s.error;throw l==="no_key"||l==="bad_key"?new si(s&&s.message||"key rejected"):new Error(s&&s.message||`request failed (${i.status})`)}return{reply:s&&s.reply||"\u2026",actions:s&&s.actions||[]}}var rv=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function xf(e,t){let n=(r,a)=>(r||[]).find(i=>i.id===a);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Mt(st(e.time))} \xB7 ${e.label} (${Ot(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),a=[];return e.time!==void 0&&e.time!==r?.time&&a.push(`${Mt(st(r?.time||"00:00"))} \u2192 ${Mt(st(e.time))}`),e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&a.push(`${Ot(r?.duration||0)} \u2192 ${Ot(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${a.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),a=[];return e.label!==void 0&&e.label!==r?.label&&a.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&a.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${a.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.habits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.habits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function ov(e,t,n){let{routines:r,vaultHabits:a,habits:i,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],habits:[...t.habits],rewards:[...t.rewards]},l=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:be(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],l.add("routines");break;case"edit_routine":r=r.map(u=>u.id===c.id?{...u,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:u),l.add("routines");break;case"delete_routine":r=r.filter(u=>u.id!==c.id),l.add("routines");break;case"add_vault_habit":a=[...a,{id:be(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],l.add("vaultHabits");break;case"edit_vault_habit":a=a.map(u=>u.id===c.id?{...u,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:u),l.add("vaultHabits");break;case"delete_vault_habit":a=a.filter(u=>u.id!==c.id),l.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:be(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,penalty:0,history:[]}],l.add("habits");break;case"delete_good_habit":i=i.filter(u=>u.id!==c.id),l.add("habits");break;case"add_bad_habit":i=[...i,{id:be(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:0,penalty:c.xp,history:[]}],l.add("habits");break;case"delete_bad_habit":i=i.filter(u=>u.id!==c.id),l.add("habits");break;case"add_reward":s=[...s,{id:be(),label:c.label,cost:c.cost,claimed:[]}],l.add("rewards");break;case"delete_reward":s=s.filter(u=>u.id!==c.id),l.add("rewards");break;default:break}l.has("routines")&&n.setRoutines(r),l.has("vaultHabits")&&n.setVaultHabits(a),l.has("habits")&&n.setHabits(i),l.has("rewards")&&n.setRewards(s)}function av({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:a}){let{pet:i,form:s,mood:l,nudge:c,remember:u,rename:d}=e,[p,f]=(0,o.useState)(()=>Rg()),[g,x]=(0,o.useState)(!1),[y,T]=(0,o.useState)(null),[v,m]=(0,o.useState)(""),[h,k]=(0,o.useState)(!1),[w,S]=(0,o.useState)(0),[z,E]=(0,o.useState)(null),[A,b]=(0,o.useState)(null),[I,$]=(0,o.useState)(()=>new Set),[D,B]=(0,o.useState)(!1),[J,Y]=(0,o.useState)(i.name),[L,U]=(0,o.useState)(!0),H=(0,o.useRef)(null),q=(0,o.useRef)(0),Q=(0,o.useMemo)(()=>Ih(r),[r]);(0,o.useEffect)(()=>{if(!h){S(0);return}let W=Date.now(),ee=setInterval(()=>S((Date.now()-W)/1e3),100);return()=>clearInterval(ee)},[h]),(0,o.useEffect)(()=>{H.current&&(H.current.scrollTop=H.current.scrollHeight)},[i.log,A,h]);let ne=async W=>{let ee=(W??v).trim();if(!ee||h)return;let C=Date.now()-q.current;if(C<3e3){E(`give me a second \u2014 ${Math.ceil((3e3-C)/1e3)}s`);return}if(m(""),u("user",ee),c("chat"),M.click(),!p){u("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),x(!0);return}q.current=Date.now(),k(!0),E(null),b(null),$(new Set);try{let j=await nv(ee,{routines:t.routines,vaultHabits:t.vaultHabits,habits:t.habits,rewards:t.rewards,totalXP:t.totalXP},$h(r),i.log||[],p);u("pet",j.reply),j.actions.length&&(b(j),M.success())}catch(j){j instanceof si?(ev(""),f(""),T(j.message),x(!0),u("pet","my link to the wider world got rejected. mind checking the key?")):(u("pet","couldn't reach far enough to answer that. try again in a moment."),E(j.message||null)),M.error()}finally{k(!1)}},ue=W=>$(ee=>{let C=new Set(ee);return C.has(W)?C.delete(W):C.add(W),C}),N=A?A.actions.filter((W,ee)=>!I.has(ee)):[],G=()=>{N.length&&(ov(N,t,n),M.success(),c("chat"),a("success",`applied ${N.length} change${N.length===1?"":"s"}`),u("pet",`done \u2014 ${N.length} change${N.length===1?"":"s"} applied.`),b(null),$(new Set))},he=()=>{M.whoosh(),u("pet","left it as it was."),b(null),$(new Set)};if(g)return o.default.createElement(iv,{initialError:y,onCancel:()=>x(!1),onSaved:(W,ee,C={})=>{f(W),T(null),C.keepOpen||x(!1),a("success",ee||"connected")}});let ve=N.reduce((W,ee)=>{let C=xf(ee,t).kind;return W[C]=(W[C]||0)+1,W},{});return o.default.createElement("div",{className:"task-list companion-scroll"},o.default.createElement("div",{className:"cmp-hero"},o.default.createElement(ql,{stage:s.stage,mood:l.key,size:132}),o.default.createElement("div",{className:"cmp-id"},D?o.default.createElement("input",{className:"pet-name-input",value:J,autoFocus:!0,maxLength:14,onChange:W=>Y(W.target.value),onBlur:()=>{d(J),B(!1)},onKeyDown:W=>{W.key==="Enter"&&(d(J),B(!1))}}):o.default.createElement("button",{className:"pet-name",onClick:()=>{Y(i.name),B(!0)}},i.name),o.default.createElement("span",{className:"pet-form"},s.name," \xB7 ",l.label)),o.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>U(W=>!W)},L?"stats":"hide")),!L&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"pet-stats"},o.default.createElement(Za,{label:"happiness",value:i.happiness,color:"var(--accent)"}),o.default.createElement(Za,{label:"energy",value:i.energy,color:"var(--accent2)"}),o.default.createElement(Za,{label:"friendship",value:i.friendship,color:"var(--accent)"}),o.default.createElement(Za,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),o.default.createElement("div",{className:"pet-next"},Pf(i.friendship),Kl(r.level)?` \xB7 next form at level ${Kl(r.level).minLevel}`:" \xB7 final form")),o.default.createElement("div",{className:"cmp-chat",ref:H},o.default.createElement("div",{className:"pet-msg pet cmp-greeting"},Q),(i.log||[]).map((W,ee)=>o.default.createElement("div",{key:ee,className:`pet-msg ${W.role}`},W.text)),h&&o.default.createElement("div",{className:"pet-msg pet thinking"},o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),o.default.createElement("span",{className:"ai-dot"}),w>=1&&o.default.createElement("span",{className:"cmp-elapsed"},w.toFixed(1),"s")),A&&A.actions.length>0&&o.default.createElement("div",{className:"cmp-diff-wrap"},o.default.createElement("div",{className:"ai-diff-head"},o.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),o.default.createElement("span",{className:"ai-diff-counts"},ve.add?o.default.createElement("span",{className:"c-add"},"+",ve.add):null,ve.edit?o.default.createElement("span",{className:"c-edit"},"~",ve.edit):null,ve.remove?o.default.createElement("span",{className:"c-remove"},"\u2212",ve.remove):null)),o.default.createElement("div",{className:"ai-diff"},A.actions.map((W,ee)=>{let C=xf(W,t),j=I.has(ee);return o.default.createElement("button",{key:ee,className:`ai-diff-row ${C.kind} ${j?"skipped":""}`,onClick:()=>ue(ee),title:j?"click to include":"click to skip"},o.default.createElement("span",{className:"ai-sign"},C.kind==="add"?"+":C.kind==="remove"?"\u2212":"~"),o.default.createElement("span",{className:"ai-surface"},C.surface),o.default.createElement("span",{className:"ai-diff-text"},C.text),o.default.createElement("span",{className:"ai-skip-mark"},j?"skipped":""))})),o.default.createElement("div",{className:"ai-actions"},o.default.createElement("button",{className:"ai-apply",onClick:G,disabled:!N.length},"apply ",N.length||""),o.default.createElement("button",{className:"ai-discard",onClick:he},"discard")),o.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),z&&o.default.createElement("div",{className:"ai-error cmp-error"},z),(i.log||[]).length===0&&!h&&o.default.createElement("div",{className:"ai-chips cmp-chips"},rv.map(W=>o.default.createElement("button",{key:W,className:"ai-chip",onClick:()=>ne(W)},W))),o.default.createElement("div",{className:"pet-composer"},o.default.createElement("input",{className:"pet-input",placeholder:p?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:v,onChange:W=>m(W.target.value),onKeyDown:W=>W.key==="Enter"&&ne(),disabled:h}),o.default.createElement("button",{className:"pet-send",onClick:()=>ne(),disabled:h||!v.trim()},"say")),o.default.createElement("button",{className:"cmp-key-link",onClick:()=>x(!0)},p?`key ${oc(p)}`:"connect an ai key"))}function iv({onSaved:e,initialError:t,onCancel:n}){let[r,a]=(0,o.useState)(""),[i,s]=(0,o.useState)(()=>Ut()),[l,c]=(0,o.useState)(!1),[u,d]=(0,o.useState)(t||null),p=(0,o.useRef)(null);(0,o.useEffect)(()=>{p.current?.focus()},[]);let f=async()=>{let g=r.trim();if(!(!g||l)){c(!0),d(null);try{let x=await tv(g),y=Qg(g);s(y),a(""),M.success(),e(g,x||(y.length>1?`${y.length} keys connected`:null),{keepOpen:y.length>1})}catch(x){d(x.message||"Couldn't verify that key."),M.error()}finally{c(!1)}}};return o.default.createElement("div",{className:"task-list ai-scroll"},o.default.createElement("div",{className:"ai-gate"},o.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),o.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),o.default.createElement("div",{className:"ai-gate-sub"},"the assistant needs an AI key. all of these have a free tier \u2014 pick whichever you like, or add several so it keeps working when one runs out."),o.default.createElement("div",{className:"prov-list"},ii.filter(g=>g.free).map(g=>o.default.createElement("a",{key:g.id,className:"prov-chip",href:`https://${g.where}`,target:"_blank",rel:"noopener noreferrer"},o.default.createElement("span",{className:"prov-chip-main"},o.default.createElement("span",{className:"prov-name"},g.label),o.default.createElement("span",{className:"prov-where"},g.where)),o.default.createElement("span",{className:"prov-free"},g.free)))),o.default.createElement("div",{className:"ai-gate-steps-note"},"sign in, create a key, paste it below. no card needed for any of them. adding two from ",o.default.createElement("i",null,"different")," providers is what actually buys you headroom."),o.default.createElement("input",{ref:p,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AQ.\u2026 \xB7 AIza\u2026 \xB7 gsk_\u2026 \xB7 csk-\u2026 \xB7 nvapi-\u2026",value:r,onChange:g=>a(g.target.value),onKeyDown:g=>{g.key==="Enter"&&f()},disabled:l}),(()=>{let g=go(r);return r.trim()?g?o.default.createElement("div",{className:"prov-detected"},"detected: ",g.label,g.note?` \u2014 ${g.note}`:""):o.default.createElement("div",{className:"prov-detected prov-detected-warn"},"unknown prefix \u2014 if it's a Mistral key, paste it as mistral:YOUR_KEY"):null})(),u&&o.default.createElement("div",{className:"ai-error ai-gate-error"},u),o.default.createElement("div",{className:"ai-gate-actions"},o.default.createElement("button",{className:"ai-apply",onClick:f,disabled:l||!r.trim()},l?"checking\u2026":i.length?"add key":"save key"),n&&o.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),i.length>0&&o.default.createElement("div",{className:"keypool"},o.default.createElement("div",{className:"keypool-head"},o.default.createElement("span",null,i.length," key",i.length===1?"":"s"," connected"),o.default.createElement("span",{className:"keypool-hint"},"tried in order")),i.map((g,x)=>{let y=go(g);return o.default.createElement("div",{className:"keypool-row",key:g},o.default.createElement("span",{className:"keypool-num"},x+1),o.default.createElement("span",{className:"keypool-prov"},y?y.label:"?"),o.default.createElement("span",{className:"keypool-val"},oc(g)),o.default.createElement("button",{className:"keypool-move",disabled:x===0,onClick:()=>{s(yf(g,-1)),M.click()},"aria-label":"Try this key earlier",title:"move up"},"\u2191"),o.default.createElement("button",{className:"keypool-move",disabled:x===i.length-1,onClick:()=>{s(yf(g,1)),M.click()},"aria-label":"Try this key later",title:"move down"},"\u2193"),o.default.createElement("button",{className:"keypool-del",onClick:()=>{s(Zg(g)),M.delete()}},"remove"))}),o.default.createElement("div",{className:"keypool-note"},"tried top to bottom; a rate-limited key is skipped automatically.",i.filter(g=>go(g)?.id==="gemini").length>1&&o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," several Gemini keys from the same google account share one quota and add no capacity \u2014 mix in a different provider instead."),(()=>{let g=new Set(i.map(x=>go(x)?.id).filter(Boolean));return i.length<2||g.size!==1||g.has("gemini")?null:o.default.createElement(o.default.Fragment,null," ",o.default.createElement("b",null,"heads up:")," every key is ",go(i[0]).label," \u2014 one outage takes the assistant down. add a second provider.")})())),o.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}var xr="tasksh.cloud.v1",kf="0123456789abcdefghjkmnpqrstvwxyz",sv=10,lv=16,cv=2e5,uv=3600*1e3,dv=[ai,rc,xr];function bf(e){let t=new Uint8Array(e);crypto.getRandomValues(t);let n="";for(let r=0;r<e;r++)n+=kf[t[r]%kf.length];return n}function pv(){return`tsh-${bf(sv)}-${bf(lv)}`}function wf(e){let n=String(e||"").trim().toLowerCase().replace(/\s+/g,"").replace(/[il]/g,"1").replace(/o/g,"0").match(/^tsh-([0-9a-z]{10})-([0-9a-z]{16})$/);return n?{id:n[1],secret:n[2]}:null}function fv(e,t,n=uv){return typeof e!="number"||!isFinite(e)||e<=0||e>t?!0:t-e>=n}function Ul(e){let t="";for(let r=0;r<e.length;r+=32768)t+=String.fromCharCode.apply(null,e.subarray(r,r+32768));return btoa(t)}function Jl(e){let t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}async function qf(e,t){let n=await crypto.subtle.importKey("raw",new TextEncoder().encode(e),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:t,iterations:cv,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function mv(e,t){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),a=await qf(t,n),i=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:r},a,new TextEncoder().encode(e)));return["v1",Ul(n),Ul(r),Ul(i)].join(".")}async function hv(e,t){let n=String(e||"").split(".");if(n.length!==4||n[0]!=="v1")throw new Error("unrecognised backup format");let r=await qf(t,Jl(n[1])),a;try{a=await crypto.subtle.decrypt({name:"AES-GCM",iv:Jl(n[2])},r,Jl(n[3]))}catch{throw new Error("wrong recovery code")}return new TextDecoder().decode(a)}function Gf(e,t){let n=t||[],r={};for(let a=0;a<localStorage.length;a++){let i=localStorage.key(a);!i||!i.startsWith("tasksh.")||n.indexOf(i)===-1&&(!e&&dv.indexOf(i)!==-1||(r[i]=localStorage.getItem(i)))}return r}function Yf(){return JSON.stringify({app:"tasks.sh",version:2,exportedAt:new Date().toISOString(),containsKeys:!0,store:Gf(!0,[yr,xr])})}function li(){let e=me(xr,null);return!e||typeof e!="object"||!e.id||!e.secret?null:e}function hr(e){let t={...li()||{},...e};try{localStorage.setItem(xr,JSON.stringify(t))}catch{}try{window.dispatchEvent(new Event("tasksh-cloud"))}catch{}return t}function gv(){try{localStorage.removeItem(xr)}catch{}try{window.dispatchEvent(new Event("tasksh-cloud"))}catch{}}async function Xf(e,t){let n=await mv(t,e.secret),r=await fetch(`${mn}/backup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.id,blob:n})}),a={};try{a=await r.json()}catch{}if(r.status===429){let i=new Error("already saved");throw i.alreadySaved=!0,i.retryInMs=a.retryInMs||0,i}if(!r.ok)throw new Error(a.error||`push failed (${r.status})`);return{at:a.at||Date.now(),size:a.size||n.length}}async function vv(e,t){let n=t||{},r=new URLSearchParams({id:e});n.meta&&r.set("meta","1"),n.prev&&r.set("prev","1");let a=await fetch(`${mn}/backup?${r.toString()}`),i={};try{i=await a.json()}catch{}if(a.status===404)throw new Error("no backup stored for that code");if(!a.ok)throw new Error(i.error||`fetch failed (${a.status})`);return i}function yv(e){let t=Object.keys(e||{}).filter(r=>r.startsWith("tasksh.")),n=0;for(let r of t)if(r!==yr&&r!==xr)try{localStorage.setItem(r,e[r]),n++}catch{}return n}function Wl(e,t){if(!e)return"never";let n=Math.max(0,Math.round((t-e)/1e3));if(n<60)return"just now";let r=Math.round(n/60);if(r<60)return`${r}m ago`;let a=Math.round(r/60);return a<24?`${a}h ago`:`${Math.round(a/24)}d ago`}function Hl(e){return e?e<1024?`${e} B`:`${(e/1024).toFixed(1)} KB`:"0 B"}function xv(){(0,o.useEffect)(()=>{let e=!1,t=async()=>{if(e)return;let a=li();if(a&&fv(a.lastAt,Date.now()))try{let i=await Xf(a,Yf());e||hr({lastAt:i.at,lastSize:i.size,lastError:null})}catch(i){if(e)return;i.alreadySaved?hr({lastError:null}):hr({lastError:String(i.message||i)})}},n=()=>{document.hidden||t()},r=setTimeout(t,2500);return document.addEventListener("visibilitychange",n),()=>{e=!0,clearTimeout(r),document.removeEventListener("visibilitychange",n)}},[])}function kv(){let[e,t]=(0,o.useState)(()=>li()),[n,r]=(0,o.useState)(!1),[a,i]=(0,o.useState)(!1),[s,l]=(0,o.useState)(null),[c,u]=(0,o.useState)(!1),[d,p]=(0,o.useState)(""),[f,g]=(0,o.useState)(null),[x,y]=(0,o.useState)(!1),T=(0,o.useRef)(null);(0,o.useEffect)(()=>{let A=()=>t(li());return window.addEventListener("tasksh-cloud",A),()=>window.removeEventListener("tasksh-cloud",A)},[]),(0,o.useEffect)(()=>()=>{T.current&&clearTimeout(T.current)},[]);let v=e?`tsh-${e.id}-${e.secret}`:"",m=()=>{let A=wf(pv());t(hr({id:A.id,secret:A.secret,lastAt:0})),r(!0),l({type:"ok",text:"first backup running in the background\u2026"}),M.click()},h=()=>{gv(),t(null),r(!1),l(null),M.click()},k=async()=>{if(!(!e||a)){i(!0),l(null);try{let A=await Xf(e,Yf());t(hr({lastAt:A.at,lastSize:A.size,lastError:null})),l({type:"ok",text:`pushed ${Hl(A.size)}`})}catch(A){if(A.alreadySaved){let b=Math.ceil((A.retryInMs||0)/6e4);l({type:"ok",text:`already saved ${Wl(e.lastAt,Date.now())}${b?` \xB7 next in ${b}m`:""}`})}else l({type:"err",text:String(A.message||A)})}finally{i(!1)}}},w=async()=>{try{await navigator.clipboard.writeText(v),y(!0),M.click(),T.current&&clearTimeout(T.current),T.current=setTimeout(()=>{y(!1),T.current=null},2e3)}catch{r(!0)}},S=async()=>{let A=wf(d);if(!A){l({type:"err",text:"that doesn't look like a recovery code"});return}i(!0),l(null);try{let b=await vv(A.id,{}),I=await hv(b.blob,A.secret),$=JSON.parse(I),D=$.store||{};g({parsed:A,rec:b,store:D,keys:Object.keys(D).length,when:$.exportedAt}),l(null)}catch(b){g(null),l({type:"err",text:String(b.message||b)})}finally{i(!1)}},z=()=>{if(!f)return;let A=yv(f.store);hr({id:f.parsed.id,secret:f.parsed.secret,lastAt:f.rec.at||0,lastSize:f.rec.size||0,lastError:null}),l({type:"ok",text:`restored ${A} keys \u2014 reloading`}),setTimeout(()=>window.location.reload(),700)},E=Date.now();return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"CLOUD-BACKUP")),o.default.createElement("div",{className:"note-card cloud-card"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/backup"),o.default.createElement("span",{className:"note-when"},e?`${Wl(e.lastAt,E)}${e.lastSize?` \xB7 ${Hl(e.lastSize)}`:""}`:"off")),!e&&!c&&o.default.createElement("pre",{className:"note-body"},"an encrypted copy, pushed hourly. the code below is the only way to read it back \u2014 the server cannot."),e&&o.default.createElement("pre",{className:"note-body cloud-key"},n?v:"recovery code hidden \xB7 tap reveal"),e&&n&&o.default.createElement("pre",{className:"note-body cloud-warn"},"save this somewhere off the phone. without it the backup is unreadable \u2014 that is what makes it safe to store."),e&&e.lastError&&o.default.createElement("pre",{className:"note-body cloud-warn"},"last push failed: ",e.lastError),c&&o.default.createElement(o.default.Fragment,null,o.default.createElement("input",{className:"cloud-input",value:d,onChange:A=>p(A.target.value),placeholder:"tsh-xxxxxxxxxx-xxxxxxxxxxxxxxxx",spellCheck:"false",autoCapitalize:"none",autoComplete:"off","aria-label":"recovery code"}),f&&o.default.createElement("pre",{className:"note-body cloud-preview"},`${f.keys} keys \xB7 ${Hl(f.rec.size)} \xB7 saved ${Wl(f.rec.at,E)}`,`
`,"applying overwrites everything on this device.")),s&&o.default.createElement("pre",{className:`note-body cloud-msg ${s.type}`},s.text),o.default.createElement("div",{className:"note-actions"},!e&&!c&&o.default.createElement("button",{className:"note-btn save",onClick:m},"turn on"),e&&!c&&o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{className:"note-btn",onClick:()=>{r(A=>!A),M.click()}},n?"hide":"reveal"),o.default.createElement("button",{className:"note-btn",onClick:w},x?"copied":"copy code"),o.default.createElement("button",{className:"note-btn save",onClick:k,disabled:a},a?"pushing\u2026":"back up now")),!c&&o.default.createElement("button",{className:"note-btn",onClick:()=>{u(!0),l(null),M.click()}},"restore"),c&&o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{className:"note-btn",onClick:S,disabled:a},a?"checking\u2026":"look up"),f&&o.default.createElement("button",{className:"note-btn danger",onClick:z},"apply"),o.default.createElement("button",{className:"note-btn",onClick:()=>{u(!1),g(null),p(""),l(null),M.click()}},"cancel")),e&&!c&&o.default.createElement("button",{className:"note-btn danger",onClick:h},"turn off"))))}function Nf(e){let t=e&&e.activeElement;if(!t)return!1;let n=String(t.tagName||"").toLowerCase();return n==="input"||n==="textarea"||t.isContentEditable===!0}function bv(e,t,n){return n?e&&!t?"reload":"prompt":"ignore"}async function wv(){try{let e=await navigator.serviceWorker.getRegistrations();await Promise.all(e.map(t=>t.unregister()))}catch{}try{let e=await caches.keys();await Promise.all(e.map(t=>caches.delete(t)))}catch{}window.location.reload()}var Nv=1800*1e3;function Sv(){let[e,t]=(0,o.useState)(!1),n=(0,o.useRef)(!1),r=(0,o.useRef)(!1),a=l=>{n.current=l,t(l)},i=()=>{r.current||(r.current=!0,window.location.reload())},s=async()=>{try{let l=window.__swReg||await navigator.serviceWorker.getRegistration();return l&&await l.update(),!0}catch{return!1}};return(0,o.useEffect)(()=>{let l=navigator.serviceWorker;if(!l)return;let c=!!l.controller,u=()=>{let f=bv(document.hidden,Nf(document),c);c=!!l.controller,f!=="ignore"&&(f==="reload"?i():a(!0))},d=()=>{document.hidden?n.current&&!Nf(document)&&i():s()};l.addEventListener("controllerchange",u),document.addEventListener("visibilitychange",d),s();let p=setInterval(s,Nv);return()=>{l.removeEventListener("controllerchange",u),document.removeEventListener("visibilitychange",d),clearInterval(p)}},[]),{pending:e,apply:i,check:s}}function Ev(){let e=Bf(),[t,n]=(0,o.useState)("idle"),[r,a]=(0,o.useState)(!1),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>()=>{i.current&&clearTimeout(i.current)},[]),o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"APP-UPDATE")),o.default.createElement("div",{className:"note-card update-card"},o.default.createElement("div",{className:"note-head"},o.default.createElement("span",{className:"note-prompt"},"~/build"),o.default.createElement("span",{className:"note-when"},e||"unknown")),o.default.createElement("pre",{className:"note-body"},t==="checking"?"checking for a new build\u2026":t==="checked"?"checked \u2014 a new build reloads on its own":t==="failed"?"couldn't reach the server":"reload app code drops the cache and re-downloads. your tasks, habits and XP are not touched."),o.default.createElement("div",{className:"note-actions"},o.default.createElement("button",{className:"note-btn",onClick:async()=>{n("checking"),M.click();try{let l=window.__swReg||await navigator.serviceWorker.getRegistration();l&&await l.update(),n("checked")}catch{n("failed")}i.current&&clearTimeout(i.current),i.current=setTimeout(()=>{n("idle"),i.current=null},4e3)}},"check now"),r?o.default.createElement(o.default.Fragment,null,o.default.createElement("button",{className:"note-btn danger",onClick:()=>{M.click(),wv()}},"confirm reload"),o.default.createElement("button",{className:"note-btn",onClick:()=>{a(!1),M.click()}},"cancel")):o.default.createElement("button",{className:"note-btn save",onClick:()=>{a(!0),M.click()}},"reload app code"))))}var Qf="tasksh.pomodoro.v1",Vl={work:25,short:5,long:15,rounds:4},Sf={work:[1,120],short:[1,60],long:[1,90],rounds:[1,12]},Cv=7200*1e3,Ef={work:{label:"focus",color:"var(--accent)"},short:{label:"short break",color:"var(--accent2)"},long:{label:"long break",color:"#8B9CF7"}};function No(e){let t={...Vl,...e||{}};for(let n of Object.keys(Sf)){let[r,a]=Sf[n],i=t[n];if(i==null||i===""){t[n]=Vl[n];continue}let s=Math.round(Number(i));t[n]=isFinite(s)?Math.min(a,Math.max(r,s)):Vl[n]}return t}function Ql(e,t){let n=No(t);return e==="short"?n.short:e==="long"?n.long:n.work}function Zl(e,t,n){let r=No(n);return e==="work"?t>=r.rounds?{phase:"long",round:t}:{phase:"short",round:t}:e==="short"?{phase:"work",round:Math.min(r.rounds,t+1)}:{phase:"work",round:1}}function Rl(e){let t=Math.round(Number(e)||0);return Math.min(60,Math.max(1,t))}function Mv(e){let t=Math.max(0,Math.ceil(e/1e3)),n=Math.floor(t/3600),r=Math.floor(t%3600/60),a=t%60,i=s=>String(s).padStart(2,"0");return n>0?`${n}:${i(r)}:${i(a)}`:`${i(r)}:${i(a)}`}function zv(e,t){if(!e||!e.running||!e.endsAt)return{finished:null,stale:!1};if(t<e.endsAt)return{finished:null,stale:!1};let n=t-e.endsAt;return{finished:e.phase,overdueMs:n,stale:n>Cv}}function _v(e,t){let n=No(e&&e.settings),r=e&&e.session||null,a=(u,d)=>({phase:u,round:d,running:!1,endsAt:null,remainingMs:null}),i=zv(r,t);if(!i.finished)return{settings:n,session:r,payout:0,rang:!1};if(i.stale)return{settings:n,session:a("work",1),payout:0,rang:!1};let s=r.round||1,l=Zl(r.phase,s,n),c=r.phase==="work"?Rl(Ql("work",n)):0;return{settings:n,session:a(l.phase,l.round),payout:c,rang:!0}}function Cf(){let e=me(Qf,null)||{};return{settings:No(e.settings),session:e.session&&typeof e.session=="object"?e.session:null}}function Tv(e){try{localStorage.setItem(Qf,JSON.stringify(e))}catch{}}async function fr(e,t){try{await fetch(`${mn}/timer`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:pi(),at:e||0,label:t||"focus block"})})}catch{}}function Av(){pn([{freq:660,start:0,dur:.16,type:"sine",gain:.06},{freq:880,start:.18,dur:.16,type:"sine",gain:.06},{freq:660,start:.42,dur:.16,type:"sine",gain:.06},{freq:880,start:.6,dur:.16,type:"sine",gain:.06},{freq:990,start:.84,dur:.3,type:"sine",gain:.07}]);try{navigator.vibrate&&navigator.vibrate([250,120,250,120,500])}catch{}}function Lv({onReward:e}){let t=(0,o.useRef)(null);t.current||(t.current=_v(Cf(),Date.now()));let[n,r]=(0,o.useState)(t.current.settings),[a,i]=(0,o.useState)(t.current.session),[s,l]=(0,o.useState)(0),[c,u]=(0,o.useState)(null),d=(0,o.useRef)(null),p=a?.phase||"work",f=a?.round||1,g=!!a?.running,x=Ql(p,n)*6e4,y=g?Math.max(0,(a.endsAt||0)-Date.now()):a?.remainingMs??x;(0,o.useEffect)(()=>{Tv({settings:n,session:a})},[n,a]),(0,o.useEffect)(()=>{let b=!1,I=async()=>{try{g&&"wakeLock"in navigator&&(d.current=await navigator.wakeLock.request("screen"))}catch{}},$=()=>{try{d.current&&d.current.release()}catch{}d.current=null};return g?I():$(),()=>{b||(b=!0,$())}},[g]);let T=(b,I)=>{let $=I&&I.silent;b==="work"&&!(I&&I.noCoins)&&e(Rl(Ql("work",n))),$||Av();let B=Zl(b,f,n);i({phase:B.phase,round:B.round,running:!1,endsAt:null,remainingMs:null}),fr(0)};(0,o.useEffect)(()=>{t.current.payout&&e(t.current.payout),(t.current.rang||t.current.session!==Cf().session)&&fr(0)},[]),(0,o.useEffect)(()=>{if(!g)return;let b=setInterval(()=>l(I=>I+1),250);return()=>clearInterval(b)},[g]),(0,o.useEffect)(()=>{!g||!a?.endsAt||Date.now()<a.endsAt||T(a.phase,{})},[s,g,a]);let v=()=>{let b=a?.remainingMs??x,I=Date.now()+b;i({phase:p,round:f,running:!0,endsAt:I,remainingMs:null}),fr(I,Ef[p].label),M.click()},m=()=>{i({phase:p,round:f,running:!1,endsAt:null,remainingMs:y}),fr(0),M.toggle()},h=()=>{i({phase:p,round:f,running:!1,endsAt:null,remainingMs:null}),fr(0),M.delete()},k=()=>{let b=Zl(p,f,n);i({phase:b.phase,round:b.round,running:!1,endsAt:null,remainingMs:null}),fr(0),M.whoosh()},w=(b,I)=>{r($=>No({...$,[b]:($[b]||0)+I})),g||i($=>$&&{...$,remainingMs:null}),M.click()},S=x>0?Math.min(1,Math.max(0,1-y/x)):0,z=52,E=2*Math.PI*z,A=Ef[p];return o.default.createElement("div",{className:"pomo"},o.default.createElement("div",{className:"pomo-dial"},o.default.createElement("svg",{viewBox:"0 0 120 120",className:"pomo-ring","aria-hidden":"true"},o.default.createElement("circle",{cx:"60",cy:"60",r:z,className:"pomo-ring-track"}),o.default.createElement("circle",{cx:"60",cy:"60",r:z,className:"pomo-ring-fill",style:{stroke:A.color,strokeDasharray:E,strokeDashoffset:E*(1-S)}})),o.default.createElement("div",{className:"pomo-centre"},o.default.createElement("div",{className:"pomo-clock"},Mv(y)),o.default.createElement("div",{className:"pomo-phase",style:{color:A.color}},A.label))),o.default.createElement("div",{className:"pomo-pips","aria-label":`round ${f} of ${n.rounds}`},Array.from({length:n.rounds},(b,I)=>o.default.createElement("span",{key:I,className:`pomo-pip ${I+1<f?"done":""} ${I+1===f?"active":""}`})),o.default.createElement("span",{className:"pomo-round"},"round ",f,"/",n.rounds)),o.default.createElement("div",{className:"pomo-controls"},g?o.default.createElement("button",{className:"pomo-btn primary",onClick:m},"pause"):o.default.createElement("button",{className:"pomo-btn primary",onClick:v},y<x?"resume":"start"),o.default.createElement("button",{className:"pomo-btn",onClick:h},"reset"),o.default.createElement("button",{className:"pomo-btn",onClick:k},"skip")),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LENGTHS")),o.default.createElement("div",{className:"pomo-settings"},[["work","focus","m"],["short","short break","m"],["long","long break","m"],["rounds","rounds",""]].map(([b,I,$])=>o.default.createElement("div",{className:`pomo-set ${c===b?"open":""}`,key:b},o.default.createElement("button",{className:"pomo-set-face",onClick:()=>{u(c===b?null:b),M.click()}},o.default.createElement("span",{className:"pomo-set-label"},I),o.default.createElement("span",{className:"pomo-set-value"},n[b],$)),c===b&&o.default.createElement("div",{className:"pomo-stepper"},o.default.createElement("button",{onClick:()=>w(b,-1),"aria-label":`decrease ${I}`},"\u2212"),o.default.createElement("button",{onClick:()=>w(b,-5),disabled:b==="rounds"},"\u22125"),o.default.createElement("button",{onClick:()=>w(b,5),disabled:b==="rounds"},"+5"),o.default.createElement("button",{onClick:()=>w(b,1),"aria-label":`increase ${I}`},"+"))))),o.default.createElement("div",{className:"pomo-note"},o.default.createElement("div",null,"finishing a focus block pays ",Rl(n.work)," coins."),o.default.createElement("div",null,"it also rings as a notification, so it works with the screen off \u2014 up to a minute late, because the worker ticks once a minute.")))}var Mf=[{id:"pomodoro",glyph:"\u25F4",name:"pomodoro",desc:"focus timer with breaks \xB7 rings in the background",Component:Lv}];function Pv({onReward:e}){let[t,n]=(0,o.useState)(null),r=Mf.find(a=>a.id===t)||null;if(r){let a=r.Component;return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"section-header tool-header"},o.default.createElement("button",{className:"tool-back",onClick:()=>{n(null),M.whoosh()}},"\u2190 tools"),o.default.createElement("span",null,r.name.toUpperCase())),o.default.createElement(a,{onReward:e}))}return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"TOOLS")),o.default.createElement("div",{className:"tool-grid"},Mf.map(a=>o.default.createElement("button",{key:a.id,className:"tool-card",onClick:()=>{n(a.id),M.click()}},o.default.createElement("span",{className:"tool-glyph"},a.glyph),o.default.createElement("span",{className:"tool-name"},a.name),o.default.createElement("span",{className:"tool-desc"},a.desc))),o.default.createElement("div",{className:"tool-card ghost"},o.default.createElement("span",{className:"tool-glyph"},"+"),o.default.createElement("span",{className:"tool-name"},"more soon"),o.default.createElement("span",{className:"tool-desc"},"converters, text tools, calculators"))))}function me(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Dv(e){typeof e=="number"&&Number.isFinite(e)&&e>ti&&(ti=e)}function Iv(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.habits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(a=>n(a?.id))}),t}function $v({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:a,habits:i,rewards:s,setRewards:l,totalXP:c,setTab:u}){let d=(0,o.useMemo)(()=>Uf(i,s),[i,s]),p=tc(),f=p.hour*60+p.minute,{sorted:g,currentId:x,nextId:y}=nc(e,f),T=g.find($=>$.id===x),v=g.find($=>$.id===y),m=K(0),h=$=>{let D=!(e.find(B=>B.id===$)?.history||[]).includes(m);t(B=>B.map(J=>{if(J.id!==$)return J;let L=(J.history||[]).includes(m)?J.history.filter(U=>U!==m):[...J.history||[],m];return{...J,history:L.slice(-60)}})),ko.propagate("routine",$,D),D?(M.success(),jt.emit("routineDone")):M.click()},k=(0,o.useMemo)(()=>{let $={high:0,mid:1,low:2};return[...n].filter(D=>!D.done).sort((D,B)=>$[D.priority]-$[B.priority])},[n]),w=$=>{r(D=>D.map(B=>B.id===$?{...B,done:!B.done}:B)),M.success()},S=(0,o.useMemo)(()=>s.filter($=>d>=$.cost),[s,d]),z=$=>{l(D=>D.map(B=>B.id===$?{...B,claimed:[...B.claimed||[],m]}:B)),M.success()},E=(0,o.useMemo)(()=>{let $={},D=B=>{(B||[]).forEach(J=>{$[J]=($[J]||0)+1})};return e.forEach(B=>D(B.history)),a.forEach(B=>D(B.history)),i.forEach(B=>D(xt(B.history).filter(J=>J.t==="done").map(J=>J.d))),$},[e,a,i]),A=T||v,b=!!T,I=A?(A.history||[]).includes(m):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,b?"HAPPENING NOW":"NEXT UP")),A?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},Mt(st(A.time))),o.default.createElement("span",{className:"today-card-label"},A.label)),o.default.createElement("div",{className:"today-card-sub"},b?`in progress \xB7 ${Ot(A.duration)}`:`in ${Math.max(0,st(A.time)-f)}m \xB7 ${Ot(A.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${I?"done":""}`,onClick:()=>h(A.id)},I?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(Yh,{counts:E,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),k.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>u("tasks")},"view all in tasks \u2192")),k.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},k.slice(0,5).map(($,D)=>o.default.createElement("div",{key:$.id,className:"today-task-row",style:{animationDelay:`${D*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>w($.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},$.text),o.default.createElement("span",{className:`today-prio-dot ${$.priority}`}))),k.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>u("tasks")},"+",k.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(dn,{value:c})," XP")),S.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},S.map(($,D)=>o.default.createElement("div",{key:$.id,className:"today-task-row",style:{animationDelay:`${D*35}ms`}},o.default.createElement("span",{className:"today-task-text"},$.label),o.default.createElement("span",{className:"today-reward-cost"},$.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>z($.id)},"claim")))))}function Bv(){let[e,t]=(0,o.useState)("today"),[n,r]=Vh(),a=P=>{P!==e&&M.whoosh(),t(P);try{let O=document.getElementById(`tab-${P}`);O&&O.scrollIntoView({inline:"nearest",block:"nearest",behavior:"smooth"})}catch{}},[i,s]=(0,o.useState)(()=>me(Ol,Dg)),[l,c]=(0,o.useState)(()=>me(pf,Zh)),[u,d]=(0,o.useState)(()=>me(ff,ig)),[p,f]=(0,o.useState)(()=>me(mf,sg)),[g,x]=(0,o.useState)(()=>me(rf,mg)),[y,T]=(0,o.useState)(()=>{let P=me(uf,null);if(Array.isArray(P))return P;let O=me(Ol,null);return Array.isArray(O)&&O.length?Lg(O):Pg}),[v,m]=(0,o.useState)(()=>me(df,{day:"",picks:{},done:[]})),[h,k]=(0,o.useState)(()=>{let P=me(hf,null);return Array.isArray(P)?P:xg(me(Fg,Sg),me(Og,Eg))}),[w,S]=(0,o.useState)(()=>me(gf,Cg)),z=(0,o.useMemo)(()=>jf(h),[h,w]),E=(0,o.useMemo)(()=>Hf(z).level,[z]),A=jh(E),b=Bh(E),{links:I,setLinks:$}=Th(),D=bg(),[B,J]=(0,o.useState)(null);(0,o.useEffect)(()=>ui.register(P=>J(P)),[]),(0,o.useEffect)(()=>ko.register((P,O,te)=>{_h(Dn(P,O),te,I,{setRoutines:c,setVaultHabits:d,setHabits:k},K(0))}),[I]);let Y=K(0),L=(0,o.useMemo)(()=>{let P=me(ni,{});return{level:E,tasksDone:i.filter(O=>O.done).length,bestStreak:Math.max(h.reduce((O,te)=>Math.max(O,$l(xt(te.history).filter(re=>re.t==="done").map(re=>re.d))),0),l.reduce((O,te)=>Math.max(O,$l(te.history)),0)),doneToday:h.filter(O=>xo(O,Y)).length,totalHabits:h.length,routinesDoneToday:l.filter(O=>(O.history||[]).includes(Y)).length,totalRoutines:l.length,vaultCount:u.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:P.calmSessions||0,earlyFinish:!!P.earlyFinish,lateFinish:!!P.lateFinish,returnedAfterGap:!!P.returnedAfterGap}},[E,i,h,l,u,b.pet,Y]),U=Ph(L),[H,q]=(0,o.useState)(null);(0,o.useEffect)(()=>{let P=me(ni,null);if(!P||P.seenLevel===void 0){vo({seenLevel:E});return}let O=P.seenLevel;if(E>O){let te=Lh(E);U.addCoins(te);let re=vr.filter(Ve=>Ve.unlockLevel>O&&Ve.unlockLevel<=E);q({level:E,coins:te,unlockedTheme:re.length?re[re.length-1]:null,extraThemes:re.length>1?re.length-1:0,evolvedTo:Ra(E).stage>Ra(O).stage?Ra(E).stage:null}),vo({seenLevel:E})}else E<O&&vo({seenLevel:E})},[E]);let[Q,ne]=(0,o.useState)(""),[ue,N]=(0,o.useState)("mid"),[G,he]=(0,o.useState)("all"),ve=(0,o.useRef)(null),W=(0,o.useRef)(null),[ee,C]=(0,o.useState)(null),j=Ig(),[V,Z]=(0,o.useState)(()=>localStorage.getItem(jl)==="1"),[lt,_e]=(0,o.useState)(!1),[Ze,xe]=(0,o.useState)(!1),[Re,He]=(0,o.useState)(!1);(0,o.useEffect)(()=>{vf(l)},[l]);let ac=async()=>{if(!lt){_e(!0);try{V?(await Xg(),localStorage.setItem(jl,"0"),Z(!1),ct("success","Notifications turned off")):(await Yg(),await vf(l),localStorage.setItem(jl,"1"),Z(!0),ct("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(P){ct("error",P.message||"Couldn't set up notifications")}finally{_e(!1)}}},ct=(P,O)=>{C({type:P,text:O})};(0,o.useEffect)(()=>{if(!ee)return;let P=setTimeout(()=>C(null),3200);return()=>clearTimeout(P)},[ee]);let ic=(P=!1)=>{try{let O=Gf(P,[yr]),te={app:"tasks.sh",version:2,exportedAt:new Date().toISOString(),containsKeys:P,store:O,data:{tasks:i,routines:l,vaultHabits:u,projects:p,notes:g,habits:h,rewards:w}},re=new Blob([JSON.stringify(te,null,2)],{type:"application/json"}),Ve=URL.createObjectURL(re),zo=K(0),kt=document.createElement("a");kt.href=Ve,kt.download=`tasks-sh-backup-${zo}${P?"-with-keys":""}.json`,document.body.appendChild(kt),kt.click(),kt.remove(),URL.revokeObjectURL(Ve),ct("ok",P?"backup exported \u2014 contains your API keys":"backup exported")}catch{ct("err","export failed")}},Zf=()=>W.current?.click(),Rf=P=>{let O=P.target.files&&P.target.files[0];if(P.target.value="",!O)return;let te=new FileReader;te.onerror=()=>ct("err","couldn't read that file"),te.onload=()=>{try{let re=JSON.parse(String(te.result));if(!re||typeof re!="object")throw new Error("bad shape");if(re.store&&typeof re.store=="object"){let hn=Object.keys(re.store).filter(kr=>kr.startsWith("tasksh."));if(!hn.length)throw new Error("empty store");for(let kr of hn)if(kr!==yr)try{localStorage.setItem(kr,re.store[kr])}catch{}ct("ok",`restored ${hn.length} keys \u2014 reloading`),setTimeout(()=>window.location.reload(),700);return}let Ve=re.data?re.data:re;if(!Ve||typeof Ve!="object")throw new Error("bad shape");let zo={tasks:s,routines:c,vaultHabits:d,projects:f,notes:x,habits:k,rewards:S},kt=0;for(let hn of Object.keys(zo))Array.isArray(Ve[hn])&&(zo[hn](Ve[hn]),kt++);if(kt===0){ct("err","no recognizable data in that file");return}Dv(Iv(Ve)),ct("ok",`imported ${kt} data set${kt===1?"":"s"}`)}catch{ct("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},te.readAsText(O)},mi=Sv();xv();let sc=tc(),lc=sc.hour*60+sc.minute,{currentId:$n,sorted:cc}=nc(l,lc),[So,Eo]=(0,o.useState)(null),Co=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(Co.current===void 0){Co.current=$n;return}if($n!==Co.current){let P=cc.find(O=>O.id===$n);P&&Eo({id:$n,label:P.label,time:P.time}),Co.current=$n}},[$n,cc]),(0,o.useEffect)(()=>{if(!So)return;let P=setTimeout(()=>Eo(null),6e3);return()=>clearTimeout(P)},[So]),(0,o.useEffect)(()=>{try{localStorage.setItem(Ol,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(pf,JSON.stringify(l))}catch{}},[l]),(0,o.useEffect)(()=>{try{localStorage.setItem(ff,JSON.stringify(u))}catch{}},[u]),(0,o.useEffect)(()=>{try{localStorage.setItem(mf,JSON.stringify(p))}catch{}},[p]),(0,o.useEffect)(()=>{try{localStorage.setItem(rf,JSON.stringify(g))}catch{}},[g]),(0,o.useEffect)(()=>{try{localStorage.setItem(uf,JSON.stringify(y))}catch{}},[y]),(0,o.useEffect)(()=>{try{localStorage.setItem(df,JSON.stringify(v))}catch{}},[v]);let Mo=Ag(l,lc);(0,o.useEffect)(()=>{Mo&&v.day!==Mo&&m(Kf(y,Mo))},[Mo,y,v.day]),(0,o.useEffect)(()=>{try{localStorage.setItem(hf,JSON.stringify(h))}catch{}},[h]),(0,o.useEffect)(()=>{try{localStorage.setItem(gf,JSON.stringify(w))}catch{}},[w]);let Ov=(0,o.useMemo)(()=>{let P=i.length,O=i.filter(Ve=>Ve.done).length,te=P-O,re=P===0?0:Math.round(O/P*100);return{total:P,done:O,pending:te,pct:re}},[i]),jv=(0,o.useMemo)(()=>{let P=i.filter(O=>!O.done);return Nh.map(O=>({key:O.key,label:O.label,color:O.color,value:P.filter(te=>te.priority===O.key).length}))},[i]),Uv=(0,o.useMemo)(()=>{let P=i;return G==="active"&&(P=P.filter(O=>!O.done)),G==="done"&&(P=P.filter(O=>O.done)),[...P].sort((O,te)=>{if(O.done!==te.done)return O.done?1:-1;let re={high:0,mid:1,low:2};return re[O.priority]-re[te.priority]})},[i,G]),Jv=()=>{let P=Q.trim();P&&(s(O=>[...O,{id:be(),text:P,done:!1,priority:ue,createdAt:Date.now()}]),ne(""),ve.current?.focus(),M.click())},Wv=P=>{let O=!i.find(te=>te.id===P)?.done;s(te=>te.map(re=>re.id===P?{...re,done:!re.done}:re)),O?(M.success(),jt.emit("taskDone")):M.click()},Hv=P=>{s(O=>O.filter(te=>te.id!==P)),M.delete()},Vv=()=>{s(P=>P.filter(O=>!O.done)),M.whoosh()};return o.default.createElement("div",{className:"app-root","data-particle":A.theme.ambient.particle},U.current&&o.default.createElement(Jg,{id:U.current,onDone:U.shift}),H&&o.default.createElement(Wg,{level:H.level,coins:H.coins,unlockedTheme:H.unlockedTheme,extraThemes:H.extraThemes,evolvedTo:H.evolvedTo,onDone:()=>q(null)}),b.evolution&&o.default.createElement(Kg,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),B&&o.default.createElement(Ug,{selfRef:B,data:{routines:l,habits:h,vaultHabits:u},links:I,setLinks:$,onClose:()=>J(null)}),Re&&o.default.createElement(Vg,{ctl:A,level:E,totalXP:z,earned:U.earned,coins:U.coins,onClose:()=>He(!1)}),o.default.createElement("style",null,`
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
          gap: 1px;
          padding: 10px 8px 0;
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
          /* v39: the seventh tab (tools) pushed both it and the pet tab off
             a 390px screen -- 100px of overflow, and the bar scrolls, so a
             brand-new feature was invisible unless you knew to swipe. Padding
             and tracking come down rather than the font size, which keeps the
             row legible and the tap target 30px tall. */
          font-size: 10.5px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          padding: 9px 7px;
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

        .cloud-card { border-left-color: var(--accent2); }
        .cloud-key {
          word-break: break-all; white-space: pre-wrap;
          color: var(--accent); font-size: 10px;
        }
        .cloud-warn { color: var(--accent2); font-size: 10px; }
        .cloud-preview { color: var(--text); font-size: 10px; }
        .cloud-msg.ok { color: var(--accent); font-size: 10px; }
        .cloud-msg.err { color: var(--danger); font-size: 10px; }
        .cloud-input {
          width: 100%; box-sizing: border-box; margin: 6px 0 2px;
          background: transparent; border: 1px solid var(--border);
          color: var(--accent); font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.02em; padding: 6px 8px;
          border-radius: 3px;
        }
        .cloud-input:focus { outline: none; border-color: var(--accent); }
        .update-card { border-left-color: var(--accent); }

        /* Flat bar, no shadow: DESIGN.md forbids raised cards, and this sits
           above everything already by being the first thing in the panel. */
        .update-bar {
          display: flex; align-items: center; gap: 8px;
          margin: 0 0 8px; padding: 7px 12px; cursor: pointer;
          background: rgba(245,166,35,0.10);
          border: 1px solid var(--accent2);
          border-radius: 3px;
          color: var(--accent2);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.03em;
        }
        .update-bar-icon { font-size: 9px; }

        /* ---- inventory inline edit (v39) ---- */
        .inv-tap {
          background: transparent; border: none; padding: 0; cursor: pointer;
          text-align: left; display: flex; flex-direction: column; gap: 2px; flex: 1;
        }
        .inv-edit { display: flex; flex-direction: column; gap: 7px; width: 100%; }
        .inv-edit-input {
          width: 100%; box-sizing: border-box;
          background: transparent; border: 1px solid var(--accent); border-radius: 3px;
          color: var(--text); font-family: 'JetBrains Mono', monospace;
          font-size: 12px; padding: 6px 8px;
        }
        .inv-edit-input:focus { outline: none; }
        .inv-edit-chips { margin: 0; }
        .inv-edit-actions { display: flex; gap: 6px; }

        /* ---- tools (v39) ---- */
        .tool-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 8px; padding: 4px 14px 16px;
        }
        .tool-card {
          display: flex; flex-direction: column; gap: 4px;
          padding: 12px 12px 14px; text-align: left; cursor: pointer;
          background: transparent;
          border: 1px solid var(--border); border-left: 2px solid var(--accent);
          border-radius: 3px; color: var(--text);
          font-family: 'JetBrains Mono', monospace;
          transition: border-color 140ms ease;
        }
        .tool-card:active { border-color: var(--accent); }
        .tool-card.ghost {
          border-left-color: var(--track); opacity: 0.45; cursor: default;
        }
        .tool-glyph { font-size: 18px; color: var(--accent); line-height: 1; }
        .tool-card.ghost .tool-glyph { color: var(--muted); }
        .tool-name { font-size: 12px; letter-spacing: 0.04em; }
        .tool-desc { font-size: 9.5px; color: var(--muted); line-height: 1.45; }
        .tool-header { display: flex; align-items: center; gap: 10px; }
        .tool-back {
          background: transparent; border: none; cursor: pointer;
          color: var(--accent); font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.06em; padding: 0;
        }

        /* ---- pomodoro ---- */
        .pomo { padding: 6px 14px 20px; }
        .pomo-dial { position: relative; width: 100%; max-width: 260px; margin: 6px auto 2px; }
        .pomo-ring { width: 100%; display: block; transform: rotate(-90deg); }
        .pomo-ring-track { fill: none; stroke: var(--track); stroke-width: 3; }
        .pomo-ring-fill {
          fill: none; stroke-width: 3; stroke-linecap: butt;
          transition: stroke-dashoffset 260ms linear;
        }
        .pomo-centre {
          position: absolute; inset: 0;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 4px;
        }
        .pomo-clock {
          font-family: 'JetBrains Mono', monospace;
          font-size: 34px; font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em; color: var(--text);
        }
        .pomo-phase {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
        }
        .pomo-pips {
          display: flex; align-items: center; gap: 5px;
          justify-content: center; margin: 10px 0 14px;
        }
        .pomo-pip {
          width: 7px; height: 7px; border-radius: 50%;
          border: 1px solid var(--border); background: transparent;
        }
        .pomo-pip.done { background: var(--muted); border-color: var(--muted); }
        .pomo-pip.active { background: var(--accent); border-color: var(--accent); }
        .pomo-round {
          margin-left: 6px; color: var(--muted);
          font-family: 'JetBrains Mono', monospace; font-size: 9.5px; letter-spacing: 0.08em;
        }
        .pomo-controls { display: flex; gap: 6px; justify-content: center; margin-bottom: 18px; }
        .pomo-btn {
          flex: 1; max-width: 110px; padding: 9px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: 3px;
          color: var(--muted); font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.08em;
          transition: color 140ms ease, border-color 140ms ease;
        }
        .pomo-btn.primary { color: var(--accent); border-color: var(--accent); }
        .pomo-btn:active { border-color: var(--accent); color: var(--accent); }
        .pomo-settings { display: flex; flex-direction: column; gap: 6px; padding: 2px 0 12px; }
        .pomo-set { border: 1px solid var(--border); border-radius: 3px; }
        .pomo-set.open { border-color: var(--accent); }
        .pomo-set-face {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 9px 11px; cursor: pointer; background: transparent; border: none;
          font-family: 'JetBrains Mono', monospace;
        }
        .pomo-set-label { font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }
        .pomo-set-value { font-size: 12px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .pomo-stepper { display: flex; gap: 4px; padding: 0 8px 8px; }
        .pomo-stepper button {
          flex: 1; padding: 7px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: 3px;
          color: var(--text); font-family: 'JetBrains Mono', monospace; font-size: 12px;
        }
        .pomo-stepper button:disabled { opacity: 0.25; cursor: default; }
        .pomo-note {
          margin: 0; color: var(--muted); font-size: 9.5px; line-height: 1.65;
          font-family: 'JetBrains Mono', monospace;
          display: flex; flex-direction: column; gap: 5px;
        }

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

        .del-btn.armed {
          color: var(--bg); background: var(--danger); border-color: var(--danger);
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          letter-spacing: 0.04em; padding: 3px 7px; border-radius: 5px;
          white-space: nowrap;
        }

        /* ---- daily quests (v36) ---- */
        .daily-grid { display: flex; flex-direction: column; gap: 8px; padding: 0 18px 4px; }
        .daily-card {
          display: flex; align-items: center; gap: 10px;
          background: var(--panel); border: 1px solid var(--border);
          border-left: 3px solid var(--dc); border-radius: 10px;
          padding: 12px; cursor: pointer; text-align: left;
          font-family: 'JetBrains Mono', monospace;
          transition: border-color 140ms ease, opacity 200ms ease;
        }
        .daily-card:hover:not(:disabled) { border-color: var(--dc); }
        .daily-card:disabled { cursor: default; opacity: 0.45; }
        .daily-card.done .daily-text { text-decoration: line-through; }
        .daily-diff {
          font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--dc); flex: none; width: 34px;
        }
        .daily-text { flex: 1; min-width: 0; font-size: 12.5px; color: var(--text); }
        .daily-coins { font-size: 10px; color: var(--accent2); flex: none; }
        .daily-note {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          font-family: 'JetBrains Mono', monospace; font-size: 9px;
          color: var(--muted); padding: 6px 18px 12px;
        }
        .quest-habit-card.drawn { border-left: 2px solid var(--accent); }

        .habits-header { display: flex; align-items: center; justify-content: space-between; }
        .radar-edit.on { border-color: var(--accent); color: var(--accent); }
        .quest-habit-card.reordering { border-style: dashed; }

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
      `),o.default.createElement("div",{className:"panel"},o.default.createElement(Oh,{theme:A.theme,phase:A.phase,calm:A.calm,scoped:!0}),mi.pending&&o.default.createElement("div",{className:"update-bar",role:"button",tabIndex:0,onClick:mi.apply,onKeyDown:P=>{(P.key==="Enter"||P.key===" ")&&mi.apply()}},o.default.createElement("span",{className:"update-bar-icon"},"\u25B2"),o.default.createElement("span",null,"new build ready \u2014 tap to reload")),So&&o.default.createElement("div",{className:"quest-banner",onClick:()=>Eo(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",So.label),o.default.createElement("button",{className:"quest-banner-close",onClick:P=>{P.stopPropagation(),Eo(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh"),o.default.createElement(Rh,null)),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:W,onChange:Rf,style:{display:"none"}}),o.default.createElement("button",{className:`titlebar-icon-btn ${V?"notify-on":""}`,onClick:ac,disabled:lt,"aria-label":V?"Turn off notifications":"Turn on notifications",title:V?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},V?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{He(!0),M.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),o.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:Zf,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{xe(!0),M.click()},"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date(j).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),Ze&&o.default.createElement("div",{className:"backup-ask-backdrop",onClick:()=>xe(!1)},o.default.createElement("div",{className:"backup-ask",onClick:P=>P.stopPropagation(),role:"dialog","aria-label":"Export backup"},o.default.createElement("div",{className:"backup-ask-head"},o.default.createElement("span",{className:"note-prompt"},"~/backup"),o.default.createElement("span",{className:"note-when"},"everything in one file")),o.default.createElement("pre",{className:"backup-ask-body"},"tasks, routines, habits, notes, tags, achievements, pet, wallet and themes are always included."),o.default.createElement("div",{className:"backup-ask-warn"},"\u26A0 including API keys makes this file a credential. anyone you send it to can spend your quota."),o.default.createElement("div",{className:"note-actions backup-ask-actions"},o.default.createElement("button",{className:"note-btn save",onClick:()=>{xe(!1),ic(!1)}},"export"),o.default.createElement("button",{className:"note-btn danger",onClick:()=>{xe(!1),ic(!0)}},"export with API keys"),o.default.createElement("button",{className:"note-btn",onClick:()=>xe(!1)},"cancel")))),ee&&o.default.createElement("div",{className:`data-toast ${ee.type}`},ee.text),o.default.createElement("div",{className:"tabs",role:"tablist","aria-label":"Sections"},[["today","today"],["tasks","tasks"],["routines","routines"],["vault","vault"],["quest","quest"],["tools","tools"],["pet",b.pet.name.toLowerCase()]].map(([P,O])=>o.default.createElement("button",{key:P,role:"tab",id:`tab-${P}`,"aria-selected":e===P,"aria-controls":"tab-panel",className:`${P==="pet"?"tab-pet ":""}${e===P?"active":""}`.trim(),onClick:()=>a(P)},O))),o.default.createElement("div",{key:e,className:"tab-content",id:"tab-panel",role:"tabpanel","aria-labelledby":`tab-${e}`},e==="today"?o.default.createElement($v,{routines:l,setRoutines:c,tasks:i,setTasks:s,vaultHabits:u,habits:h,rewards:w,setRewards:S,totalXP:z,setTab:a}):e==="tasks"?o.default.createElement(Bg,{inventory:y,setInventory:T,daily:v,setDaily:m,routines:l,onReward:P=>U.addCoins(P)}):e==="routines"?o.default.createElement(tg,{routines:l,setRoutines:c}):e==="vault"?o.default.createElement(yg,{vaultHabits:u,setVaultHabits:d,projects:p,setProjects:f,notes:g,setNotes:x}):e==="tools"?o.default.createElement(Pv,{onReward:P=>U.addCoins(P)}):e==="quest"?o.default.createElement(_g,{tagCtl:D,habits:h,setHabits:k,rewards:w,setRewards:S}):o.default.createElement(av,{petCtl:b,state:{routines:l,vaultHabits:u,habits:h,rewards:w,totalXP:z},setters:{setRoutines:c,setVaultHabits:d,setHabits:k,setRewards:S},showDataMsg:ct,ctx:{pet:b.pet,level:E,hour:gr().hour,phase:A.phase.id,doneToday:h.filter(P=>xo(P,K(0))).length,totalToday:h.length,streak:h.reduce((P,O)=>Math.max(P,$l(xt(O.history).filter(te=>te.t==="done").map(te=>te.d))),0),routineNow:null,nextRoutine:null}}))))}var Fv=zf.default.createRoot(document.getElementById("root"));Fv.render(o.default.createElement(Bv));})();
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
