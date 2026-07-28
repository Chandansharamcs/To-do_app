(()=>{var Zm=Object.create;var ws=Object.defineProperty;var Vm=Object.getOwnPropertyDescriptor;var Jm=Object.getOwnPropertyNames;var Km=Object.getPrototypeOf,Fm=Object.prototype.hasOwnProperty;var Re=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Wm=(t,e,l,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Jm(e))!Fm.call(t,n)&&n!==l&&ws(t,n,{get:()=>e[n],enumerable:!(a=Vm(e,n))||a.enumerable});return t};var Bs=(t,e,l)=>(l=t!=null?Zm(Km(t)):{},Wm(e||!t||!t.__esModule?ws(l,"default",{value:t,enumerable:!0}):l,t));var Gs=Re(U=>{"use strict";var Hu=Symbol.for("react.transitional.element"),$m=Symbol.for("react.portal"),Rm=Symbol.for("react.fragment"),Im=Symbol.for("react.strict_mode"),Pm=Symbol.for("react.profiler"),tp=Symbol.for("react.consumer"),ep=Symbol.for("react.context"),lp=Symbol.for("react.forward_ref"),ap=Symbol.for("react.suspense"),np=Symbol.for("react.memo"),qs=Symbol.for("react.lazy"),ip=Symbol.for("react.activity"),Os=Symbol.iterator;function up(t){return t===null||typeof t!="object"?null:(t=Os&&t[Os]||t["@@iterator"],typeof t=="function"?t:null)}var Hs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ys=Object.assign,Ls={};function ea(t,e,l){this.props=t,this.context=e,this.refs=Ls,this.updater=l||Hs}ea.prototype.isReactComponent={};ea.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ea.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function js(){}js.prototype=ea.prototype;function Yu(t,e,l){this.props=t,this.context=e,this.refs=Ls,this.updater=l||Hs}var Lu=Yu.prototype=new js;Lu.constructor=Yu;Ys(Lu,ea.prototype);Lu.isPureReactComponent=!0;var Cs=Array.isArray;function qu(){}var nt={H:null,A:null,T:null,S:null},Xs=Object.prototype.hasOwnProperty;function ju(t,e,l){var a=l.ref;return{$$typeof:Hu,type:t,key:e,ref:a!==void 0?a:null,props:l}}function op(t,e){return ju(t.type,e,t.props)}function Xu(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hu}function cp(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(l){return e[l]})}var _s=/\/+/g;function Uu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?cp(""+t.key):e.toString(36)}function sp(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(qu,qu):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ta(t,e,l,a,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Hu:case $m:o=!0;break;case qs:return o=t._init,ta(o(t._payload),e,l,a,n)}}if(o)return n=n(t),o=a===""?"."+Uu(t,0):a,Cs(n)?(l="",o!=null&&(l=o.replace(_s,"$&/")+"/"),ta(n,e,l,"",function(m){return m})):n!=null&&(Xu(n)&&(n=op(n,l+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(_s,"$&/")+"/")+o)),e.push(n)),1;o=0;var c=a===""?".":a+":";if(Cs(t))for(var s=0;s<t.length;s++)a=t[s],i=c+Uu(a,s),o+=ta(a,e,l,i,n);else if(s=up(t),typeof s=="function")for(t=s.call(t),s=0;!(a=t.next()).done;)a=a.value,i=c+Uu(a,s++),o+=ta(a,e,l,i,n);else if(i==="object"){if(typeof t.then=="function")return ta(sp(t),e,l,a,n);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return o}function In(t,e,l){if(t==null)return t;var a=[],n=0;return ta(t,a,"","",function(i){return e.call(l,i,n++)}),a}function rp(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(l){(t._status===0||t._status===-1)&&(t._status=1,t._result=l)},function(l){(t._status===0||t._status===-1)&&(t._status=2,t._result=l)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Us=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fp={map:In,forEach:function(t,e,l){In(t,function(){e.apply(this,arguments)},l)},count:function(t){var e=0;return In(t,function(){e++}),e},toArray:function(t){return In(t,function(e){return e})||[]},only:function(t){if(!Xu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=ip;U.Children=fp;U.Component=ea;U.Fragment=Rm;U.Profiler=Pm;U.PureComponent=Yu;U.StrictMode=Im;U.Suspense=ap;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nt;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return nt.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,e,l){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=Ys({},t.props),n=t.key;if(e!=null)for(i in e.key!==void 0&&(n=""+e.key),e)!Xs.call(e,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&e.ref===void 0||(a[i]=e[i]);var i=arguments.length-2;if(i===1)a.children=l;else if(1<i){for(var o=Array(i),c=0;c<i;c++)o[c]=arguments[c+2];a.children=o}return ju(t.type,n,a)};U.createContext=function(t){return t={$$typeof:ep,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:tp,_context:t},t};U.createElement=function(t,e,l){var a,n={},i=null;if(e!=null)for(a in e.key!==void 0&&(i=""+e.key),e)Xs.call(e,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=e[a]);var o=arguments.length-2;if(o===1)n.children=l;else if(1<o){for(var c=Array(o),s=0;s<o;s++)c[s]=arguments[s+2];n.children=c}if(t&&t.defaultProps)for(a in o=t.defaultProps,o)n[a]===void 0&&(n[a]=o[a]);return ju(t,i,n)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:lp,render:t}};U.isValidElement=Xu;U.lazy=function(t){return{$$typeof:qs,_payload:{_status:-1,_result:t},_init:rp}};U.memo=function(t,e){return{$$typeof:np,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=nt.T,l={};nt.T=l;try{var a=t(),n=nt.S;n!==null&&n(l,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(qu,Us)}catch(i){Us(i)}finally{e!==null&&l.types!==null&&(e.types=l.types),nt.T=e}};U.unstable_useCacheRefresh=function(){return nt.H.useCacheRefresh()};U.use=function(t){return nt.H.use(t)};U.useActionState=function(t,e,l){return nt.H.useActionState(t,e,l)};U.useCallback=function(t,e){return nt.H.useCallback(t,e)};U.useContext=function(t){return nt.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,e){return nt.H.useDeferredValue(t,e)};U.useEffect=function(t,e){return nt.H.useEffect(t,e)};U.useEffectEvent=function(t){return nt.H.useEffectEvent(t)};U.useId=function(){return nt.H.useId()};U.useImperativeHandle=function(t,e,l){return nt.H.useImperativeHandle(t,e,l)};U.useInsertionEffect=function(t,e){return nt.H.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return nt.H.useLayoutEffect(t,e)};U.useMemo=function(t,e){return nt.H.useMemo(t,e)};U.useOptimistic=function(t,e){return nt.H.useOptimistic(t,e)};U.useReducer=function(t,e,l){return nt.H.useReducer(t,e,l)};U.useRef=function(t){return nt.H.useRef(t)};U.useState=function(t){return nt.H.useState(t)};U.useSyncExternalStore=function(t,e,l){return nt.H.useSyncExternalStore(t,e,l)};U.useTransition=function(){return nt.H.useTransition()};U.version="19.2.5"});var Pn=Re((Gv,Qs)=>{"use strict";Qs.exports=Gs()});var Ps=Re(rt=>{"use strict";function Vu(t,e){var l=t.length;t.push(e);t:for(;0<l;){var a=l-1>>>1,n=t[a];if(0<ti(n,e))t[a]=e,t[l]=n,l=a;else break t}}function Se(t){return t.length===0?null:t[0]}function li(t){if(t.length===0)return null;var e=t[0],l=t.pop();if(l!==e){t[0]=l;t:for(var a=0,n=t.length,i=n>>>1;a<i;){var o=2*(a+1)-1,c=t[o],s=o+1,m=t[s];if(0>ti(c,l))s<n&&0>ti(m,c)?(t[a]=m,t[s]=l,a=s):(t[a]=c,t[o]=l,a=o);else if(s<n&&0>ti(m,l))t[a]=m,t[s]=l,a=s;else break t}}return e}function ti(t,e){var l=t.sortIndex-e.sortIndex;return l!==0?l:t.id-e.id}rt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Zs=performance,rt.unstable_now=function(){return Zs.now()}):(Gu=Date,Vs=Gu.now(),rt.unstable_now=function(){return Gu.now()-Vs});var Zs,Gu,Vs,we=[],Ie=[],dp=1,ue=null,Ut=3,Ju=!1,Ka=!1,Fa=!1,Ku=!1,Fs=typeof setTimeout=="function"?setTimeout:null,Ws=typeof clearTimeout=="function"?clearTimeout:null,Js=typeof setImmediate<"u"?setImmediate:null;function ei(t){for(var e=Se(Ie);e!==null;){if(e.callback===null)li(Ie);else if(e.startTime<=t)li(Ie),e.sortIndex=e.expirationTime,Vu(we,e);else break;e=Se(Ie)}}function Fu(t){if(Fa=!1,ei(t),!Ka)if(Se(we)!==null)Ka=!0,aa||(aa=!0,la());else{var e=Se(Ie);e!==null&&Wu(Fu,e.startTime-t)}}var aa=!1,Wa=-1,$s=5,Rs=-1;function Is(){return Ku?!0:!(rt.unstable_now()-Rs<$s)}function Qu(){if(Ku=!1,aa){var t=rt.unstable_now();Rs=t;var e=!0;try{t:{Ka=!1,Fa&&(Fa=!1,Ws(Wa),Wa=-1),Ju=!0;var l=Ut;try{e:{for(ei(t),ue=Se(we);ue!==null&&!(ue.expirationTime>t&&Is());){var a=ue.callback;if(typeof a=="function"){ue.callback=null,Ut=ue.priorityLevel;var n=a(ue.expirationTime<=t);if(t=rt.unstable_now(),typeof n=="function"){ue.callback=n,ei(t),e=!0;break e}ue===Se(we)&&li(we),ei(t)}else li(we);ue=Se(we)}if(ue!==null)e=!0;else{var i=Se(Ie);i!==null&&Wu(Fu,i.startTime-t),e=!1}}break t}finally{ue=null,Ut=l,Ju=!1}e=void 0}}finally{e?la():aa=!1}}}var la;typeof Js=="function"?la=function(){Js(Qu)}:typeof MessageChannel<"u"?(Zu=new MessageChannel,Ks=Zu.port2,Zu.port1.onmessage=Qu,la=function(){Ks.postMessage(null)}):la=function(){Fs(Qu,0)};var Zu,Ks;function Wu(t,e){Wa=Fs(function(){t(rt.unstable_now())},e)}rt.unstable_IdlePriority=5;rt.unstable_ImmediatePriority=1;rt.unstable_LowPriority=4;rt.unstable_NormalPriority=3;rt.unstable_Profiling=null;rt.unstable_UserBlockingPriority=2;rt.unstable_cancelCallback=function(t){t.callback=null};rt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$s=0<t?Math.floor(1e3/t):5};rt.unstable_getCurrentPriorityLevel=function(){return Ut};rt.unstable_next=function(t){switch(Ut){case 1:case 2:case 3:var e=3;break;default:e=Ut}var l=Ut;Ut=e;try{return t()}finally{Ut=l}};rt.unstable_requestPaint=function(){Ku=!0};rt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var l=Ut;Ut=t;try{return e()}finally{Ut=l}};rt.unstable_scheduleCallback=function(t,e,l){var a=rt.unstable_now();switch(typeof l=="object"&&l!==null?(l=l.delay,l=typeof l=="number"&&0<l?a+l:a):l=a,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=l+n,t={id:dp++,callback:e,priorityLevel:t,startTime:l,expirationTime:n,sortIndex:-1},l>a?(t.sortIndex=l,Vu(Ie,t),Se(we)===null&&t===Se(Ie)&&(Fa?(Ws(Wa),Wa=-1):Fa=!0,Wu(Fu,l-a))):(t.sortIndex=n,Vu(we,t),Ka||Ju||(Ka=!0,aa||(aa=!0,la()))),t};rt.unstable_shouldYield=Is;rt.unstable_wrapCallback=function(t){var e=Ut;return function(){var l=Ut;Ut=e;try{return t.apply(this,arguments)}finally{Ut=l}}}});var er=Re((Zv,tr)=>{"use strict";tr.exports=Ps()});var ar=Re(Ht=>{"use strict";var mp=Pn();function lr(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Pe(){}var qt={d:{f:Pe,r:function(){throw Error(lr(522))},D:Pe,C:Pe,L:Pe,m:Pe,X:Pe,S:Pe,M:Pe},p:0,findDOMNode:null},pp=Symbol.for("react.portal");function hp(t,e,l){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pp,key:a==null?null:""+a,children:t,containerInfo:e,implementation:l}}var $a=mp.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ai(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=qt;Ht.createPortal=function(t,e){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(lr(299));return hp(t,e,null,l)};Ht.flushSync=function(t){var e=$a.T,l=qt.p;try{if($a.T=null,qt.p=2,t)return t()}finally{$a.T=e,qt.p=l,qt.d.f()}};Ht.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,qt.d.C(t,e))};Ht.prefetchDNS=function(t){typeof t=="string"&&qt.d.D(t)};Ht.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var l=e.as,a=ai(l,e.crossOrigin),n=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;l==="style"?qt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):l==="script"&&qt.d.X(t,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Ht.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var l=ai(e.as,e.crossOrigin);qt.d.M(t,{crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&qt.d.M(t)};Ht.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var l=e.as,a=ai(l,e.crossOrigin);qt.d.L(t,l,{crossOrigin:a,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Ht.preloadModule=function(t,e){if(typeof t=="string")if(e){var l=ai(e.as,e.crossOrigin);qt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:l,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else qt.d.m(t)};Ht.requestFormReset=function(t){qt.d.r(t)};Ht.unstable_batchedUpdates=function(t,e){return t(e)};Ht.useFormState=function(t,e,l){return $a.H.useFormState(t,e,l)};Ht.useFormStatus=function(){return $a.H.useHostTransitionStatus()};Ht.version="19.2.5"});var ur=Re((Jv,ir)=>{"use strict";function nr(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nr)}catch(t){console.error(t)}}nr(),ir.exports=ar()});var bm=Re(Du=>{"use strict";var At=er(),Cf=Pn(),vp=ur();function E(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hn(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function Uf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qf(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function or(t){if(Hn(t)!==t)throw Error(E(188))}function yp(t){var e=t.alternate;if(!e){if(e=Hn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return or(n),t;if(i===a)return or(n),e;i=i.sibling}throw Error(E(188))}if(l.return!==a.return)l=n,a=i;else{for(var o=!1,c=n.child;c;){if(c===l){o=!0,l=n,a=i;break}if(c===a){o=!0,a=n,l=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===l){o=!0,l=i,a=n;break}if(c===a){o=!0,a=i,l=n;break}c=c.sibling}if(!o)throw Error(E(189))}}if(l.alternate!==a)throw Error(E(190))}if(l.tag!==3)throw Error(E(188));return l.stateNode.current===l?t:e}function Hf(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Hf(t),e!==null)return e;t=t.sibling}return null}var ot=Object.assign,gp=Symbol.for("react.element"),ni=Symbol.for("react.transitional.element"),nn=Symbol.for("react.portal"),sa=Symbol.for("react.fragment"),Yf=Symbol.for("react.strict_mode"),wo=Symbol.for("react.profiler"),Lf=Symbol.for("react.consumer"),Ye=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),Oo=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),tl=Symbol.for("react.lazy"),Co=Symbol.for("react.activity"),bp=Symbol.for("react.memo_cache_sentinel"),cr=Symbol.iterator;function Ra(t){return t===null||typeof t!="object"?null:(t=cr&&t[cr]||t["@@iterator"],typeof t=="function"?t:null)}var xp=Symbol.for("react.client.reference");function _o(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===xp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case sa:return"Fragment";case wo:return"Profiler";case Yf:return"StrictMode";case Bo:return"Suspense";case Oo:return"SuspenseList";case Co:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case nn:return"Portal";case Ye:return t.displayName||"Context";case Lf:return(t._context.displayName||"Context")+".Consumer";case zc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tc:return e=t.displayName||null,e!==null?e:_o(t.type)||"Memo";case tl:e=t._payload,t=t._init;try{return _o(t(e))}catch{}}return null}var un=Array.isArray,C=Cf.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=vp.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Cl={pending:!1,data:null,method:null,action:null},Uo=[],ra=-1;function Me(t){return{current:t}}function kt(t){0>ra||(t.current=Uo[ra],Uo[ra]=null,ra--)}function lt(t,e){ra++,Uo[ra]=t.current,t.current=e}var Te=Me(null),An=Me(null),fl=Me(null),Hi=Me(null);function Yi(t,e){switch(lt(fl,e),lt(An,t),lt(Te,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?vf(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=vf(e),t=im(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}kt(Te),lt(Te,t)}function Da(){kt(Te),kt(An),kt(fl)}function qo(t){t.memoizedState!==null&&lt(Hi,t);var e=Te.current,l=im(e,t.type);e!==l&&(lt(An,t),lt(Te,l))}function Li(t){An.current===t&&(kt(Te),kt(An)),Hi.current===t&&(kt(Hi),_n._currentValue=Cl)}var $u,sr;function kl(t){if($u===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);$u=e&&e[1]||"",sr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$u+t+sr}var Ru=!1;function Iu(t,e){if(!t||Ru)return"";Ru=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(h){var p=h}Reflect.construct(t,[],y)}else{try{y.call()}catch(h){p=h}t.call(y.prototype)}}else{try{throw Error()}catch(h){p=h}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(h){if(h&&p&&typeof h.stack=="string")return[h.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var s=o.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var v=`
`+s[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Ru=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?kl(l):""}function Ep(t,e){switch(t.tag){case 26:case 27:case 5:return kl(t.type);case 16:return kl("Lazy");case 13:return t.child!==e&&e!==null?kl("Suspense Fallback"):kl("Suspense");case 19:return kl("SuspenseList");case 0:case 15:return Iu(t.type,!1);case 11:return Iu(t.type.render,!1);case 1:return Iu(t.type,!0);case 31:return kl("Activity");default:return""}}function rr(t){try{var e="",l=null;do e+=Ep(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Ho=Object.prototype.hasOwnProperty,Mc=At.unstable_scheduleCallback,Pu=At.unstable_cancelCallback,Sp=At.unstable_shouldYield,Ap=At.unstable_requestPaint,Pt=At.unstable_now,Np=At.unstable_getCurrentPriorityLevel,jf=At.unstable_ImmediatePriority,Xf=At.unstable_UserBlockingPriority,ji=At.unstable_NormalPriority,zp=At.unstable_LowPriority,Gf=At.unstable_IdlePriority,Tp=At.log,Mp=At.unstable_setDisableYieldValue,Yn=null,te=null;function ul(t){if(typeof Tp=="function"&&Mp(t),te&&typeof te.setStrictMode=="function")try{te.setStrictMode(Yn,t)}catch{}}var ee=Math.clz32?Math.clz32:wp,Dp=Math.log,kp=Math.LN2;function wp(t){return t>>>=0,t===0?32:31-(Dp(t)/kp|0)|0}var ii=256,ui=262144,oi=4194304;function wl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function du(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=wl(a):(o&=c,o!==0?n=wl(o):l||(l=c&~t,l!==0&&(n=wl(l))))):(c=a&~i,c!==0?n=wl(c):o!==0?n=wl(o):l||(l=a&~t,l!==0&&(n=wl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function Ln(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Bp(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qf(){var t=oi;return oi<<=1,(oi&62914560)===0&&(oi=4194304),t}function to(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function jn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Op(t,e,l,a,n,i){var o=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,m=t.hiddenUpdates;for(l=o&~l;0<l;){var v=31-ee(l),y=1<<v;c[v]=0,s[v]=-1;var p=m[v];if(p!==null)for(m[v]=null,v=0;v<p.length;v++){var h=p[v];h!==null&&(h.lane&=-536870913)}l&=~y}a!==0&&Zf(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~e))}function Zf(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ee(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Vf(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-ee(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Jf(t,e){var l=e&-e;return l=(l&42)!==0?1:Dc(l),(l&(t.suspendedLanes|e))!==0?0:l}function Dc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function kc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kf(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:vm(t.type))}function fr(t,e){var l=F.p;try{return F.p=t,e()}finally{F.p=l}}var Nl=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Nl,Jt="__reactProps$"+Nl,La="__reactContainer$"+Nl,Yo="__reactEvents$"+Nl,Cp="__reactListeners$"+Nl,_p="__reactHandles$"+Nl,dr="__reactResources$"+Nl,Xn="__reactMarker$"+Nl;function wc(t){delete t[Bt],delete t[Jt],delete t[Yo],delete t[Cp],delete t[_p]}function fa(t){var e=t[Bt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[La]||l[Bt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=Ef(t);t!==null;){if(l=t[Bt])return l;t=Ef(t)}return e}t=l,l=t.parentNode}return null}function ja(t){if(t=t[Bt]||t[La]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function on(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(E(33))}function Ea(t){var e=t[dr];return e||(e=t[dr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Dt(t){t[Xn]=!0}var Ff=new Set,Wf={};function Ql(t,e){ka(t,e),ka(t+"Capture",e)}function ka(t,e){for(Wf[t]=e,t=0;t<e.length;t++)Ff.add(e[t])}var Up=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mr={},pr={};function qp(t){return Ho.call(pr,t)?!0:Ho.call(mr,t)?!1:Up.test(t)?pr[t]=!0:(mr[t]=!0,!1)}function Si(t,e,l){if(qp(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function ci(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Be(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ce(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $f(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hp(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(o){l=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(o){l=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Lo(t){if(!t._valueTracker){var e=$f(t)?"checked":"value";t._valueTracker=Hp(t,e,""+t[e])}}function Rf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=$f(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function Xi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Yp=/[\n"\\]/g;function fe(t){return t.replace(Yp,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function jo(t,e,l,a,n,i,o,c){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),e!=null?o==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ce(e)):t.value!==""+ce(e)&&(t.value=""+ce(e)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),e!=null?Xo(t,o,ce(e)):l!=null?Xo(t,o,ce(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ce(c):t.removeAttribute("name")}function If(t,e,l,a,n,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){Lo(t);return}l=l!=null?""+ce(l):"",e=e!=null?""+ce(e):l,c||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Lo(t)}function Xo(t,e,l){e==="number"&&Xi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function Sa(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ce(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function Pf(t,e,l){if(e!=null&&(e=""+ce(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ce(l):""}function td(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(E(92));if(un(a)){if(1<a.length)throw Error(E(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ce(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),Lo(t)}function wa(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var Lp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hr(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||Lp.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function ed(t,e,l){if(e!=null&&typeof e!="object")throw Error(E(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&hr(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&hr(t,i,e[i])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(t){return Xp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Le(){}var Go=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,Aa=null;function vr(t){var e=ja(t);if(e&&(t=e.stateNode)){var l=t[Jt]||null;t:switch(t=e.stateNode,e.type){case"input":if(jo(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+fe(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Jt]||null;if(!n)throw Error(E(90));jo(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&Rf(a)}break t;case"textarea":Pf(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&Sa(t,!!l.multiple,e,!1)}}}var eo=!1;function ld(t,e,l){if(eo)return t(e,l);eo=!0;try{var a=t(e);return a}finally{if(eo=!1,(da!==null||Aa!==null)&&(Nu(),da&&(e=da,t=Aa,Aa=da=null,vr(e),t)))for(e=0;e<t.length;e++)vr(t[e])}}function Nn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Jt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(E(231,e,typeof l));return l}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qo=!1;if(Ze)try{na={},Object.defineProperty(na,"passive",{get:function(){Qo=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Qo=!1}var na,ol=null,Cc=null,Ni=null;function ad(){if(Ni)return Ni;var t,e=Cc,l=e.length,a,n="value"in ol?ol.value:ol.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var o=l-t;for(a=1;a<=o&&e[l-a]===n[i-a];a++);return Ni=n.slice(t,1<a?1-a:void 0)}function zi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function yr(){return!1}function Kt(t){function e(l,a,n,i,o){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(l=t[c],this[c]=l?l(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?si:yr,this.isPropagationStopped=yr,this}return ot(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),e}var Zl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=Kt(Zl),Gn=ot({},Zl,{view:0,detail:0}),Gp=Kt(Gn),lo,ao,Ia,pu=ot({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ia&&(Ia&&t.type==="mousemove"?(lo=t.screenX-Ia.screenX,ao=t.screenY-Ia.screenY):ao=lo=0,Ia=t),lo)},movementY:function(t){return"movementY"in t?t.movementY:ao}}),gr=Kt(pu),Qp=ot({},pu,{dataTransfer:0}),Zp=Kt(Qp),Vp=ot({},Gn,{relatedTarget:0}),no=Kt(Vp),Jp=ot({},Zl,{animationName:0,elapsedTime:0,pseudoElement:0}),Kp=Kt(Jp),Fp=ot({},Zl,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wp=Kt(Fp),$p=ot({},Zl,{data:0}),br=Kt($p),Rp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ip={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Pp[t])?!!e[t]:!1}function _c(){return t1}var e1=ot({},Gn,{key:function(t){if(t.key){var e=Rp[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ip[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(t){return t.type==="keypress"?zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l1=Kt(e1),a1=ot({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xr=Kt(a1),n1=ot({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),i1=Kt(n1),u1=ot({},Zl,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=Kt(u1),c1=ot({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s1=Kt(c1),r1=ot({},Zl,{newState:0,oldState:0}),f1=Kt(r1),d1=[9,13,27,32],Uc=Ze&&"CompositionEvent"in window,rn=null;Ze&&"documentMode"in document&&(rn=document.documentMode);var m1=Ze&&"TextEvent"in window&&!rn,nd=Ze&&(!Uc||rn&&8<rn&&11>=rn),Er=" ",Sr=!1;function id(t,e){switch(t){case"keyup":return d1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ud(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function p1(t,e){switch(t){case"compositionend":return ud(e);case"keypress":return e.which!==32?null:(Sr=!0,Er);case"textInput":return t=e.data,t===Er&&Sr?null:t;default:return null}}function h1(t,e){if(ma)return t==="compositionend"||!Uc&&id(t,e)?(t=ad(),Ni=Cc=ol=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return nd&&e.locale!=="ko"?null:e.data;default:return null}}var v1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ar(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v1[t.type]:e==="textarea"}function od(t,e,l,a){da?Aa?Aa.push(a):Aa=[a]:da=a,e=iu(e,"onChange"),0<e.length&&(l=new mu("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var fn=null,zn=null;function y1(t){lm(t,0)}function hu(t){var e=on(t);if(Rf(e))return t}function Nr(t,e){if(t==="change")return e}var cd=!1;Ze&&(Ze?(fi="oninput"in document,fi||(io=document.createElement("div"),io.setAttribute("oninput","return;"),fi=typeof io.oninput=="function"),ri=fi):ri=!1,cd=ri&&(!document.documentMode||9<document.documentMode));var ri,fi,io;function zr(){fn&&(fn.detachEvent("onpropertychange",sd),zn=fn=null)}function sd(t){if(t.propertyName==="value"&&hu(zn)){var e=[];od(e,zn,t,Oc(t)),ld(y1,e)}}function g1(t,e,l){t==="focusin"?(zr(),fn=e,zn=l,fn.attachEvent("onpropertychange",sd)):t==="focusout"&&zr()}function b1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(zn)}function x1(t,e){if(t==="click")return hu(e)}function E1(t,e){if(t==="input"||t==="change")return hu(e)}function S1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ae=typeof Object.is=="function"?Object.is:S1;function Tn(t,e){if(ae(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Ho.call(e,n)||!ae(t[n],e[n]))return!1}return!0}function Tr(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mr(t,e){var l=Tr(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Tr(l)}}function rd(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?rd(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Xi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=Xi(t.document)}return e}function qc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var A1=Ze&&"documentMode"in document&&11>=document.documentMode,pa=null,Zo=null,dn=null,Vo=!1;function Dr(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Vo||pa==null||pa!==Xi(a)||(a=pa,"selectionStart"in a&&qc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dn&&Tn(dn,a)||(dn=a,a=iu(Zo,"onSelect"),0<a.length&&(e=new mu("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=pa)))}function Dl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var ha={animationend:Dl("Animation","AnimationEnd"),animationiteration:Dl("Animation","AnimationIteration"),animationstart:Dl("Animation","AnimationStart"),transitionrun:Dl("Transition","TransitionRun"),transitionstart:Dl("Transition","TransitionStart"),transitioncancel:Dl("Transition","TransitionCancel"),transitionend:Dl("Transition","TransitionEnd")},uo={},dd={};Ze&&(dd=document.createElement("div").style,"AnimationEvent"in window||(delete ha.animationend.animation,delete ha.animationiteration.animation,delete ha.animationstart.animation),"TransitionEvent"in window||delete ha.transitionend.transition);function Vl(t){if(uo[t])return uo[t];if(!ha[t])return t;var e=ha[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in dd)return uo[t]=e[l];return t}var md=Vl("animationend"),pd=Vl("animationiteration"),hd=Vl("animationstart"),N1=Vl("transitionrun"),z1=Vl("transitionstart"),T1=Vl("transitioncancel"),vd=Vl("transitionend"),yd=new Map,Jo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Jo.push("scrollEnd");function xe(t,e){yd.set(t,e),Ql(e,[t])}var Gi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oe=[],va=0,Hc=0;function vu(){for(var t=va,e=Hc=va=0;e<t;){var l=oe[e];oe[e++]=null;var a=oe[e];oe[e++]=null;var n=oe[e];oe[e++]=null;var i=oe[e];if(oe[e++]=null,a!==null&&n!==null){var o=a.pending;o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n}i!==0&&gd(l,n,i)}}function yu(t,e,l,a){oe[va++]=t,oe[va++]=e,oe[va++]=l,oe[va++]=a,Hc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Yc(t,e,l,a){return yu(t,e,l,a),Qi(t)}function Jl(t,e){return yu(t,null,null,e),Qi(t)}function gd(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-ee(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Qi(t){if(50<En)throw En=0,mc=null,Error(E(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ya={};function M1(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,l,a){return new M1(t,e,l,a)}function Lc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xe(t,e){var l=t.alternate;return l===null?(l=Rt(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function bd(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ti(t,e,l,a,n,i){var o=0;if(a=t,typeof t=="function")Lc(t)&&(o=1);else if(typeof t=="string")o=wh(t,l,Te.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Co:return t=Rt(31,l,e,n),t.elementType=Co,t.lanes=i,t;case sa:return _l(l.children,n,i,e);case Yf:o=8,n|=24;break;case wo:return t=Rt(12,l,e,n|2),t.elementType=wo,t.lanes=i,t;case Bo:return t=Rt(13,l,e,n),t.elementType=Bo,t.lanes=i,t;case Oo:return t=Rt(19,l,e,n),t.elementType=Oo,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ye:o=10;break t;case Lf:o=9;break t;case zc:o=11;break t;case Tc:o=14;break t;case tl:o=16,a=null;break t}o=29,l=Error(E(130,t===null?"null":typeof t,"")),a=null}return e=Rt(o,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function _l(t,e,l,a){return t=Rt(7,t,a,e),t.lanes=l,t}function oo(t,e,l){return t=Rt(6,t,null,e),t.lanes=l,t}function xd(t){var e=Rt(18,null,null,0);return e.stateNode=t,e}function co(t,e,l){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var kr=new WeakMap;function de(t,e){if(typeof t=="object"&&t!==null){var l=kr.get(t);return l!==void 0?l:(e={value:t,source:e,stack:rr(e)},kr.set(t,e),e)}return{value:t,source:e,stack:rr(e)}}var ga=[],ba=0,Zi=null,Mn=0,se=[],re=0,xl=null,Ae=1,Ne="";function qe(t,e){ga[ba++]=Mn,ga[ba++]=Zi,Zi=t,Mn=e}function Ed(t,e,l){se[re++]=Ae,se[re++]=Ne,se[re++]=xl,xl=t;var a=Ae;t=Ne;var n=32-ee(a)-1;a&=~(1<<n),l+=1;var i=32-ee(e)+n;if(30<i){var o=n-n%5;i=(a&(1<<o)-1).toString(32),a>>=o,n-=o,Ae=1<<32-ee(e)+n|l<<n|a,Ne=i+t}else Ae=1<<i|l<<n|a,Ne=t}function jc(t){t.return!==null&&(qe(t,1),Ed(t,1,0))}function Xc(t){for(;t===Zi;)Zi=ga[--ba],ga[ba]=null,Mn=ga[--ba],ga[ba]=null;for(;t===xl;)xl=se[--re],se[re]=null,Ne=se[--re],se[re]=null,Ae=se[--re],se[re]=null}function Sd(t,e){se[re++]=Ae,se[re++]=Ne,se[re++]=xl,Ae=e.id,Ne=e.overflow,xl=t}var Ot=null,ut=null,V=!1,dl=null,me=!1,Ko=Error(E(519));function El(t){var e=Error(E(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Dn(de(e,t)),Ko}function wr(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Bt]=t,e[Jt]=a,l){case"dialog":L("cancel",e),L("close",e);break;case"iframe":case"object":case"embed":L("load",e);break;case"video":case"audio":for(l=0;l<On.length;l++)L(On[l],e);break;case"source":L("error",e);break;case"img":case"image":case"link":L("error",e),L("load",e);break;case"details":L("toggle",e);break;case"input":L("invalid",e),If(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":L("invalid",e);break;case"textarea":L("invalid",e),td(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||nm(e.textContent,l)?(a.popover!=null&&(L("beforetoggle",e),L("toggle",e)),a.onScroll!=null&&L("scroll",e),a.onScrollEnd!=null&&L("scrollend",e),a.onClick!=null&&(e.onclick=Le),e=!0):e=!1,e||El(t,!0)}function Br(t){for(Ot=t.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:me=!1;return;case 27:case 3:me=!0;return;default:Ot=Ot.return}}function ia(t){if(t!==Ot)return!1;if(!V)return Br(t),V=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||gc(t.type,t.memoizedProps)),l=!l),l&&ut&&El(t),Br(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));ut=xf(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));ut=xf(t)}else e===27?(e=ut,zl(t.type)?(t=Sc,Sc=null,ut=t):ut=e):ut=Ot?he(t.stateNode.nextSibling):null;return!0}function Yl(){ut=Ot=null,V=!1}function so(){var t=dl;return t!==null&&(Zt===null?Zt=t:Zt.push.apply(Zt,t),dl=null),t}function Dn(t){dl===null?dl=[t]:dl.push(t)}var Fo=Me(null),Kl=null,je=null;function ll(t,e,l){lt(Fo,e._currentValue),e._currentValue=l}function Ge(t){t._currentValue=Fo.current,kt(Fo)}function Wo(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function $o(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<e.length;s++)if(c.context===e[s]){i.lanes|=l,c=i.alternate,c!==null&&(c.lanes|=l),Wo(i.return,l,t),a||(o=null);break t}i=c.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(E(341));o.lanes|=l,i=o.alternate,i!==null&&(i.lanes|=l),Wo(o,l,t),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===t){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function Xa(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(E(387));if(o=o.memoizedProps,o!==null){var c=n.type;ae(n.pendingProps.value,o.value)||(t!==null?t.push(c):t=[c])}}else if(n===Hi.current){if(o=n.alternate,o===null)throw Error(E(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(_n):t=[_n])}n=n.return}t!==null&&$o(e,t,l,a),e.flags|=262144}function Vi(t){for(t=t.firstContext;t!==null;){if(!ae(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ll(t){Kl=t,je=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ct(t){return Ad(Kl,t)}function di(t,e){return Kl===null&&Ll(t),Ad(t,e)}function Ad(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},je===null){if(t===null)throw Error(E(308));je=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else je=je.next=e;return l}var D1=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},k1=At.unstable_scheduleCallback,w1=At.unstable_NormalPriority,xt={$$typeof:Ye,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new D1,data:new Map,refCount:0}}function Qn(t){t.refCount--,t.refCount===0&&k1(w1,function(){t.controller.abort()})}var mn=null,Ro=0,Ba=0,Na=null;function B1(t,e){if(mn===null){var l=mn=[];Ro=0,Ba=ms(),Na={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Ro++,e.then(Or,Or),e}function Or(){if(--Ro===0&&mn!==null){Na!==null&&(Na.status="fulfilled");var t=mn;mn=null,Ba=0,Na=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function O1(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Cr=C.S;C.S=function(t,e){H0=Pt(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&B1(t,e),Cr!==null&&Cr(t,e)};var Ul=Me(null);function Qc(){var t=Ul.current;return t!==null?t:et.pooledCache}function Mi(t,e){e===null?lt(Ul,Ul.current):lt(Ul,e.pool)}function Nd(){var t=Qc();return t===null?null:{parent:xt._currentValue,pool:t}}var Ga=Error(E(460)),Zc=Error(E(474)),gu=Error(E(542)),Ji={then:function(){}};function _r(t){return t=t.status,t==="fulfilled"||t==="rejected"}function zd(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Le,Le),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qr(t),t;default:if(typeof e.status=="string")e.then(Le,Le);else{if(t=et,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,qr(t),t}throw ql=e,Ga}}function Bl(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(ql=l,Ga):l}}var ql=null;function Ur(){if(ql===null)throw Error(E(459));var t=ql;return ql=null,t}function qr(t){if(t===Ga||t===gu)throw Error(E(483))}var za=null,kn=0;function mi(t){var e=kn;return kn+=1,za===null&&(za=[]),zd(za,t,e)}function Pa(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function pi(t,e){throw e.$$typeof===gp?Error(E(525)):(t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Td(t){function e(f,r){if(t){var d=f.deletions;d===null?(f.deletions=[r],f.flags|=16):d.push(r)}}function l(f,r){if(!t)return null;for(;r!==null;)e(f,r),r=r.sibling;return null}function a(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Xe(f,r),f.index=0,f.sibling=null,f}function i(f,r,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<r?(f.flags|=67108866,r):d):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function o(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function c(f,r,d,g){return r===null||r.tag!==6?(r=oo(d,f.mode,g),r.return=f,r):(r=n(r,d),r.return=f,r)}function s(f,r,d,g){var N=d.type;return N===sa?v(f,r,d.props.children,g,d.key):r!==null&&(r.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===tl&&Bl(N)===r.type)?(r=n(r,d.props),Pa(r,d),r.return=f,r):(r=Ti(d.type,d.key,d.props,null,f.mode,g),Pa(r,d),r.return=f,r)}function m(f,r,d,g){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=co(d,f.mode,g),r.return=f,r):(r=n(r,d.children||[]),r.return=f,r)}function v(f,r,d,g,N){return r===null||r.tag!==7?(r=_l(d,f.mode,g,N),r.return=f,r):(r=n(r,d),r.return=f,r)}function y(f,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=oo(""+r,f.mode,d),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case ni:return d=Ti(r.type,r.key,r.props,null,f.mode,d),Pa(d,r),d.return=f,d;case nn:return r=co(r,f.mode,d),r.return=f,r;case tl:return r=Bl(r),y(f,r,d)}if(un(r)||Ra(r))return r=_l(r,f.mode,d,null),r.return=f,r;if(typeof r.then=="function")return y(f,mi(r),d);if(r.$$typeof===Ye)return y(f,di(f,r),d);pi(f,r)}return null}function p(f,r,d,g){var N=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return N!==null?null:c(f,r,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:return d.key===N?s(f,r,d,g):null;case nn:return d.key===N?m(f,r,d,g):null;case tl:return d=Bl(d),p(f,r,d,g)}if(un(d)||Ra(d))return N!==null?null:v(f,r,d,g,null);if(typeof d.then=="function")return p(f,r,mi(d),g);if(d.$$typeof===Ye)return p(f,r,di(f,d),g);pi(f,d)}return null}function h(f,r,d,g,N){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return f=f.get(d)||null,c(r,f,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ni:return f=f.get(g.key===null?d:g.key)||null,s(r,f,g,N);case nn:return f=f.get(g.key===null?d:g.key)||null,m(r,f,g,N);case tl:return g=Bl(g),h(f,r,d,g,N)}if(un(g)||Ra(g))return f=f.get(d)||null,v(r,f,g,N,null);if(typeof g.then=="function")return h(f,r,d,mi(g),N);if(g.$$typeof===Ye)return h(f,r,d,di(r,g),N);pi(r,g)}return null}function x(f,r,d,g){for(var N=null,M=null,z=r,D=r=0,B=null;z!==null&&D<d.length;D++){z.index>D?(B=z,z=null):B=z.sibling;var O=p(f,z,d[D],g);if(O===null){z===null&&(z=B);break}t&&z&&O.alternate===null&&e(f,z),r=i(O,r,D),M===null?N=O:M.sibling=O,M=O,z=B}if(D===d.length)return l(f,z),V&&qe(f,D),N;if(z===null){for(;D<d.length;D++)z=y(f,d[D],g),z!==null&&(r=i(z,r,D),M===null?N=z:M.sibling=z,M=z);return V&&qe(f,D),N}for(z=a(z);D<d.length;D++)B=h(z,f,D,d[D],g),B!==null&&(t&&B.alternate!==null&&z.delete(B.key===null?D:B.key),r=i(B,r,D),M===null?N=B:M.sibling=B,M=B);return t&&z.forEach(function(w){return e(f,w)}),V&&qe(f,D),N}function b(f,r,d,g){if(d==null)throw Error(E(151));for(var N=null,M=null,z=r,D=r=0,B=null,O=d.next();z!==null&&!O.done;D++,O=d.next()){z.index>D?(B=z,z=null):B=z.sibling;var w=p(f,z,O.value,g);if(w===null){z===null&&(z=B);break}t&&z&&w.alternate===null&&e(f,z),r=i(w,r,D),M===null?N=w:M.sibling=w,M=w,z=B}if(O.done)return l(f,z),V&&qe(f,D),N;if(z===null){for(;!O.done;D++,O=d.next())O=y(f,O.value,g),O!==null&&(r=i(O,r,D),M===null?N=O:M.sibling=O,M=O);return V&&qe(f,D),N}for(z=a(z);!O.done;D++,O=d.next())O=h(z,f,D,O.value,g),O!==null&&(t&&O.alternate!==null&&z.delete(O.key===null?D:O.key),r=i(O,r,D),M===null?N=O:M.sibling=O,M=O);return t&&z.forEach(function(H){return e(f,H)}),V&&qe(f,D),N}function S(f,r,d,g){if(typeof d=="object"&&d!==null&&d.type===sa&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:t:{for(var N=d.key;r!==null;){if(r.key===N){if(N=d.type,N===sa){if(r.tag===7){l(f,r.sibling),g=n(r,d.props.children),g.return=f,f=g;break t}}else if(r.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===tl&&Bl(N)===r.type){l(f,r.sibling),g=n(r,d.props),Pa(g,d),g.return=f,f=g;break t}l(f,r);break}else e(f,r);r=r.sibling}d.type===sa?(g=_l(d.props.children,f.mode,g,d.key),g.return=f,f=g):(g=Ti(d.type,d.key,d.props,null,f.mode,g),Pa(g,d),g.return=f,f=g)}return o(f);case nn:t:{for(N=d.key;r!==null;){if(r.key===N)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){l(f,r.sibling),g=n(r,d.children||[]),g.return=f,f=g;break t}else{l(f,r);break}else e(f,r);r=r.sibling}g=co(d,f.mode,g),g.return=f,f=g}return o(f);case tl:return d=Bl(d),S(f,r,d,g)}if(un(d))return x(f,r,d,g);if(Ra(d)){if(N=Ra(d),typeof N!="function")throw Error(E(150));return d=N.call(d),b(f,r,d,g)}if(typeof d.then=="function")return S(f,r,mi(d),g);if(d.$$typeof===Ye)return S(f,r,di(f,d),g);pi(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(l(f,r.sibling),g=n(r,d),g.return=f,f=g):(l(f,r),g=oo(d,f.mode,g),g.return=f,f=g),o(f)):l(f,r)}return function(f,r,d,g){try{kn=0;var N=S(f,r,d,g);return za=null,N}catch(z){if(z===Ga||z===gu)throw z;var M=Rt(29,z,null,f.mode);return M.lanes=g,M.return=f,M}}}var jl=Td(!0),Md=Td(!1),el=!1;function Vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Io(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ml(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(K&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Qi(t),gd(t,null,l),e}return yu(t,a,e,l),Qi(t)}function pn(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Vf(t,l)}}function ro(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var o={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Po=!1;function hn(){if(Po){var t=Na;if(t!==null)throw t}}function vn(t,e,l,a){Po=!1;var n=t.updateQueue;el=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,o===null?i=m:o.next=m,o=s;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==o&&(c===null?v.firstBaseUpdate=m:c.next=m,v.lastBaseUpdate=s))}if(i!==null){var y=n.baseState;o=0,v=m=s=null,c=i;do{var p=c.lane&-536870913,h=p!==c.lane;if(h?(Q&p)===p:(a&p)===p){p!==0&&p===Ba&&(Po=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var x=t,b=c;p=e;var S=l;switch(b.tag){case 1:if(x=b.payload,typeof x=="function"){y=x.call(S,y,p);break t}y=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,p=typeof x=="function"?x.call(S,y,p):x,p==null)break t;y=ot({},y,p);break t;case 2:el=!0}}p=c.callback,p!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[p]:h.push(p))}else h={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(m=v=h,s=y):v=v.next=h,o|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;h=c,c=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);v===null&&(s=y),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),Al|=o,t.lanes=o,t.memoizedState=y}}function Dd(t,e){if(typeof t!="function")throw Error(E(191,t));t.call(e)}function kd(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)Dd(l[t],e)}var Oa=Me(null),Ki=Me(0);function Hr(t,e){t=Fe,lt(Ki,t),lt(Oa,e),Fe=t|e.baseLanes}function tc(){lt(Ki,Fe),lt(Oa,Oa.current)}function Jc(){Fe=Ki.current,kt(Oa),kt(Ki)}var ne=Me(null),pe=null;function al(t){var e=t.alternate;lt(ht,ht.current&1),lt(ne,t),pe===null&&(e===null||Oa.current!==null||e.memoizedState!==null)&&(pe=t)}function ec(t){lt(ht,ht.current),lt(ne,t),pe===null&&(pe=t)}function wd(t){t.tag===22?(lt(ht,ht.current),lt(ne,t),pe===null&&(pe=t)):nl(t)}function nl(){lt(ht,ht.current),lt(ne,ne.current)}function $t(t){kt(ne),pe===t&&(pe=null),kt(ht)}var ht=Me(0);function Fi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||xc(l)||Ec(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ve=0,q=null,P=null,gt=null,Wi=!1,Ta=!1,Xl=!1,$i=0,wn=0,Ma=null,C1=0;function mt(){throw Error(E(321))}function Kc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!ae(t[l],e[l]))return!1;return!0}function Fc(t,e,l,a,n,i){return Ve=i,q=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?o0:is,Xl=!1,i=l(a,n),Xl=!1,Ta&&(i=Od(e,l,a,n)),Bd(t),i}function Bd(t){C.H=Bn;var e=P!==null&&P.next!==null;if(Ve=0,gt=P=q=null,Wi=!1,wn=0,Ma=null,e)throw Error(E(300));t===null||Et||(t=t.dependencies,t!==null&&Vi(t)&&(Et=!0))}function Od(t,e,l,a){q=t;var n=0;do{if(Ta&&(Ma=null),wn=0,Ta=!1,25<=n)throw Error(E(301));if(n+=1,gt=P=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}C.H=c0,i=e(l,a)}while(Ta);return i}function _1(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?Zn(e):e,t=t.useState()[0],(P!==null?P.memoizedState:null)!==t&&(q.flags|=1024),e}function Wc(){var t=$i!==0;return $i=0,t}function $c(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function Rc(t){if(Wi){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Wi=!1}Ve=0,gt=P=q=null,Ta=!1,wn=$i=0,Ma=null}function Yt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gt===null?q.memoizedState=gt=t:gt=gt.next=t,gt}function vt(){if(P===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=P.next;var e=gt===null?q.memoizedState:gt.next;if(e!==null)gt=e,P=t;else{if(t===null)throw q.alternate===null?Error(E(467)):Error(E(310));P=t,t={memoizedState:P.memoizedState,baseState:P.baseState,baseQueue:P.baseQueue,queue:P.queue,next:null},gt===null?q.memoizedState=gt=t:gt=gt.next=t}return gt}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zn(t){var e=wn;return wn+=1,Ma===null&&(Ma=[]),t=zd(Ma,t,e),e=q,(gt===null?e.memoizedState:gt.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?o0:is),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zn(t);if(t.$$typeof===Ye)return Ct(t)}throw Error(E(438,String(t)))}function Ic(t){var e=null,l=q.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=bu(),q.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=bp;return e.index++,l}function Je(t,e){return typeof e=="function"?e(t):e}function Di(t){var e=vt();return Pc(e,P,t)}function Pc(t,e,l){var a=t.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var c=o=null,s=null,m=e,v=!1;do{var y=m.lane&-536870913;if(y!==m.lane?(Q&y)===y:(Ve&y)===y){var p=m.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),y===Ba&&(v=!0);else if((Ve&p)===p){m=m.next,p===Ba&&(v=!0);continue}else y={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=y,o=i):s=s.next=y,q.lanes|=p,Al|=p;y=m.action,Xl&&l(i,y),i=m.hasEagerState?m.eagerState:l(i,y)}else p={lane:y,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=p,o=i):s=s.next=p,q.lanes|=y,Al|=y;m=m.next}while(m!==null&&m!==e);if(s===null?o=i:s.next=c,!ae(i,t.memoizedState)&&(Et=!0,v&&(l=Na,l!==null)))throw l;t.memoizedState=i,t.baseState=o,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function fo(t){var e=vt(),l=e.queue;if(l===null)throw Error(E(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var o=n=n.next;do i=t(i,o.action),o=o.next;while(o!==n);ae(i,e.memoizedState)||(Et=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function Cd(t,e,l){var a=q,n=vt(),i=V;if(i){if(l===void 0)throw Error(E(407));l=l()}else l=e();var o=!ae((P||n).memoizedState,l);if(o&&(n.memoizedState=l,Et=!0),n=n.queue,ts(qd.bind(null,a,n,t),[t]),n.getSnapshot!==e||o||gt!==null&&gt.memoizedState.tag&1){if(a.flags|=2048,Ca(9,{destroy:void 0},Ud.bind(null,a,n,l,e),null),et===null)throw Error(E(349));i||(Ve&127)!==0||_d(a,e,l)}return l}function _d(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=q.updateQueue,e===null?(e=bu(),q.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function Ud(t,e,l,a){e.value=l,e.getSnapshot=a,Hd(e)&&Yd(t)}function qd(t,e,l){return l(function(){Hd(e)&&Yd(t)})}function Hd(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!ae(t,l)}catch{return!0}}function Yd(t){var e=Jl(t,2);e!==null&&Vt(e,t,2)}function lc(t){var e=Yt();if(typeof t=="function"){var l=t;if(t=l(),Xl){ul(!0);try{l()}finally{ul(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:t},e}function Ld(t,e,l,a){return t.baseState=l,Pc(t,P,typeof a=="function"?a:Je)}function U1(t,e,l,a,n){if(Su(t))throw Error(E(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};C.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,jd(e,i)):(i.next=l.next,e.pending=l.next=i)}}function jd(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=C.T,o={};C.T=o;try{var c=l(n,a),s=C.S;s!==null&&s(o,c),Yr(t,e,c)}catch(m){ac(t,e,m)}finally{i!==null&&o.types!==null&&(i.types=o.types),C.T=i}}else try{i=l(n,a),Yr(t,e,i)}catch(m){ac(t,e,m)}}function Yr(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){Lr(t,e,a)},function(a){return ac(t,e,a)}):Lr(t,e,l)}function Lr(t,e,l){e.status="fulfilled",e.value=l,Xd(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,jd(t,l)))}function ac(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,Xd(e),e=e.next;while(e!==a)}t.action=null}function Xd(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Gd(t,e){return e}function jr(t,e){if(V){var l=et.formState;if(l!==null){t:{var a=q;if(V){if(ut){e:{for(var n=ut,i=me;n.nodeType!==8;){if(!i){n=null;break e}if(n=he(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){ut=he(n.nextSibling),a=n.data==="F!";break t}}El(a)}a=!1}a&&(e=l[0])}}return l=Yt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gd,lastRenderedState:e},l.queue=a,l=n0.bind(null,q,a),a.dispatch=l,a=lc(!1),i=ns.bind(null,q,!1,a.queue),a=Yt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=U1.bind(null,q,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function Xr(t){var e=vt();return Qd(e,P,t)}function Qd(t,e,l){if(e=Pc(t,e,Gd)[0],t=Di(Je)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Zn(e)}catch(o){throw o===Ga?gu:o}else a=e;e=vt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(q.flags|=2048,Ca(9,{destroy:void 0},q1.bind(null,n,l),null)),[a,i,t]}function q1(t,e){t.action=e}function Gr(t){var e=vt(),l=P;if(l!==null)return Qd(e,l,t);vt(),e=e.memoizedState,l=vt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ca(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=q.updateQueue,e===null&&(e=bu(),q.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Zd(){return vt().memoizedState}function ki(t,e,l,a){var n=Yt();q.flags|=t,n.memoizedState=Ca(1|e,{destroy:void 0},l,a===void 0?null:a)}function Eu(t,e,l,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState.inst;P!==null&&a!==null&&Kc(a,P.memoizedState.deps)?n.memoizedState=Ca(e,i,l,a):(q.flags|=t,n.memoizedState=Ca(1|e,i,l,a))}function Qr(t,e){ki(8390656,8,t,e)}function ts(t,e){Eu(2048,8,t,e)}function H1(t){q.flags|=4;var e=q.updateQueue;if(e===null)e=bu(),q.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Vd(t){var e=vt().memoizedState;return H1({ref:e,nextImpl:t}),function(){if((K&2)!==0)throw Error(E(440));return e.impl.apply(void 0,arguments)}}function Jd(t,e){return Eu(4,2,t,e)}function Kd(t,e){return Eu(4,4,t,e)}function Fd(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wd(t,e,l){l=l!=null?l.concat([t]):null,Eu(4,4,Fd.bind(null,e,t),l)}function es(){}function $d(t,e){var l=vt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Kc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Rd(t,e){var l=vt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Kc(e,a[1]))return a[0];if(a=t(),Xl){ul(!0);try{t()}finally{ul(!1)}}return l.memoizedState=[a,e],a}function ls(t,e,l){return l===void 0||(Ve&1073741824)!==0&&(Q&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=L0(),q.lanes|=t,Al|=t,l)}function Id(t,e,l,a){return ae(l,e)?l:Oa.current!==null?(t=ls(t,l,a),ae(t,e)||(Et=!0),t):(Ve&42)===0||(Ve&1073741824)!==0&&(Q&261930)===0?(Et=!0,t.memoizedState=l):(t=L0(),q.lanes|=t,Al|=t,e)}function Pd(t,e,l,a,n){var i=F.p;F.p=i!==0&&8>i?i:8;var o=C.T,c={};C.T=c,ns(t,!1,e,l);try{var s=n(),m=C.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=O1(s,a);yn(t,e,v,le(t))}else yn(t,e,a,le(t))}catch(y){yn(t,e,{then:function(){},status:"rejected",reason:y},le())}finally{F.p=i,o!==null&&c.types!==null&&(o.types=c.types),C.T=o}}function Y1(){}function nc(t,e,l,a){if(t.tag!==5)throw Error(E(476));var n=t0(t).queue;Pd(t,n,e,Cl,l===null?Y1:function(){return e0(t),l(a)})}function t0(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Cl,baseState:Cl,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:Cl},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function e0(t){var e=t0(t);e.next===null&&(e=t.alternate.memoizedState),yn(t,e.next.queue,{},le())}function as(){return Ct(_n)}function l0(){return vt().memoizedState}function a0(){return vt().memoizedState}function L1(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=le();t=ml(l);var a=pl(e,t,l);a!==null&&(Vt(a,e,l),pn(a,e,l)),e={cache:Gc()},t.payload=e;return}e=e.return}}function j1(t,e,l){var a=le();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Su(t)?i0(e,l):(l=Yc(t,e,l,a),l!==null&&(Vt(l,t,a),u0(l,e,a)))}function n0(t,e,l){var a=le();yn(t,e,l,a)}function yn(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Su(t))i0(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,c=i(o,l);if(n.hasEagerState=!0,n.eagerState=c,ae(c,o))return yu(t,e,n,0),et===null&&vu(),!1}catch{}if(l=Yc(t,e,n,a),l!==null)return Vt(l,t,a),u0(l,e,a),!0}return!1}function ns(t,e,l,a){if(a={lane:2,revertLane:ms(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Su(t)){if(e)throw Error(E(479))}else e=Yc(t,l,a,2),e!==null&&Vt(e,t,2)}function Su(t){var e=t.alternate;return t===q||e!==null&&e===q}function i0(t,e){Ta=Wi=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function u0(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Vf(t,l)}}var Bn={readContext:Ct,use:xu,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt};Bn.useEffectEvent=mt;var o0={readContext:Ct,use:xu,useCallback:function(t,e){return Yt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Qr,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,ki(4194308,4,Fd.bind(null,e,t),l)},useLayoutEffect:function(t,e){return ki(4194308,4,t,e)},useInsertionEffect:function(t,e){ki(4,2,t,e)},useMemo:function(t,e){var l=Yt();e=e===void 0?null:e;var a=t();if(Xl){ul(!0);try{t()}finally{ul(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Yt();if(l!==void 0){var n=l(e);if(Xl){ul(!0);try{l(e)}finally{ul(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=j1.bind(null,q,t),[a.memoizedState,t]},useRef:function(t){var e=Yt();return t={current:t},e.memoizedState=t},useState:function(t){t=lc(t);var e=t.queue,l=n0.bind(null,q,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:es,useDeferredValue:function(t,e){var l=Yt();return ls(l,t,e)},useTransition:function(){var t=lc(!1);return t=Pd.bind(null,q,t.queue,!0,!1),Yt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=q,n=Yt();if(V){if(l===void 0)throw Error(E(407));l=l()}else{if(l=e(),et===null)throw Error(E(349));(Q&127)!==0||_d(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,Qr(qd.bind(null,a,i,t),[t]),a.flags|=2048,Ca(9,{destroy:void 0},Ud.bind(null,a,i,l,e),null),l},useId:function(){var t=Yt(),e=et.identifierPrefix;if(V){var l=Ne,a=Ae;l=(a&~(1<<32-ee(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=$i++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=C1++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:as,useFormState:jr,useActionState:jr,useOptimistic:function(t){var e=Yt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=ns.bind(null,q,!0,l),l.dispatch=e,[t,e]},useMemoCache:Ic,useCacheRefresh:function(){return Yt().memoizedState=L1.bind(null,q)},useEffectEvent:function(t){var e=Yt(),l={impl:t};return e.memoizedState=l,function(){if((K&2)!==0)throw Error(E(440));return l.impl.apply(void 0,arguments)}}},is={readContext:Ct,use:xu,useCallback:$d,useContext:Ct,useEffect:ts,useImperativeHandle:Wd,useInsertionEffect:Jd,useLayoutEffect:Kd,useMemo:Rd,useReducer:Di,useRef:Zd,useState:function(){return Di(Je)},useDebugValue:es,useDeferredValue:function(t,e){var l=vt();return Id(l,P.memoizedState,t,e)},useTransition:function(){var t=Di(Je)[0],e=vt().memoizedState;return[typeof t=="boolean"?t:Zn(t),e]},useSyncExternalStore:Cd,useId:l0,useHostTransitionStatus:as,useFormState:Xr,useActionState:Xr,useOptimistic:function(t,e){var l=vt();return Ld(l,P,t,e)},useMemoCache:Ic,useCacheRefresh:a0};is.useEffectEvent=Vd;var c0={readContext:Ct,use:xu,useCallback:$d,useContext:Ct,useEffect:ts,useImperativeHandle:Wd,useInsertionEffect:Jd,useLayoutEffect:Kd,useMemo:Rd,useReducer:fo,useRef:Zd,useState:function(){return fo(Je)},useDebugValue:es,useDeferredValue:function(t,e){var l=vt();return P===null?ls(l,t,e):Id(l,P.memoizedState,t,e)},useTransition:function(){var t=fo(Je)[0],e=vt().memoizedState;return[typeof t=="boolean"?t:Zn(t),e]},useSyncExternalStore:Cd,useId:l0,useHostTransitionStatus:as,useFormState:Gr,useActionState:Gr,useOptimistic:function(t,e){var l=vt();return P!==null?Ld(l,P,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:Ic,useCacheRefresh:a0};c0.useEffectEvent=Vd;function mo(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:ot({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var ic={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=le(),n=ml(a);n.payload=e,l!=null&&(n.callback=l),e=pl(t,n,a),e!==null&&(Vt(e,t,a),pn(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=le(),n=ml(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=pl(t,n,a),e!==null&&(Vt(e,t,a),pn(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=le(),a=ml(l);a.tag=2,e!=null&&(a.callback=e),e=pl(t,a,l),e!==null&&(Vt(e,t,l),pn(e,t,l))}};function Zr(t,e,l,a,n,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,o):e.prototype&&e.prototype.isPureReactComponent?!Tn(l,a)||!Tn(n,i):!0}function Vr(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function Gl(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=ot({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function s0(t){Gi(t)}function r0(t){console.error(t)}function f0(t){Gi(t)}function Ri(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Jr(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function uc(t,e,l){return l=ml(l),l.tag=3,l.payload={element:null},l.callback=function(){Ri(t,e)},l}function d0(t){return t=ml(t),t.tag=3,t}function m0(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Jr(e,l,a)}}var o=l.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){Jr(e,l,a),typeof n!="function"&&(hl===null?hl=new Set([this]):hl.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function X1(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Xa(e,l,n,!0),l=ne.current,l!==null){switch(l.tag){case 31:case 13:return pe===null?lu():l.alternate===null&&pt===0&&(pt=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===Ji?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),No(t,a,n)),!1;case 22:return l.flags|=65536,a===Ji?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),No(t,a,n)),!1}throw Error(E(435,l.tag))}return No(t,a,n),lu(),!1}if(V)return e=ne.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Ko&&(t=Error(E(422),{cause:a}),Dn(de(t,l)))):(a!==Ko&&(e=Error(E(423),{cause:a}),Dn(de(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=de(a,l),n=uc(t.stateNode,a,n),ro(t,n),pt!==4&&(pt=2)),!1;var i=Error(E(520),{cause:a});if(i=de(i,l),xn===null?xn=[i]:xn.push(i),pt!==4&&(pt=2),e===null)return!0;a=de(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=uc(l.stateNode,a,t),ro(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(hl===null||!hl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=d0(n),m0(n,t,l,a),ro(l,n),!1}l=l.return}while(l!==null);return!1}var us=Error(E(461)),Et=!1;function wt(t,e,l,a){e.child=t===null?Md(e,null,l,a):jl(e,t.child,l,a)}function Kr(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}else o=a;return Ll(e),a=Fc(t,e,l,o,i,n),c=Wc(),t!==null&&!Et?($c(t,e,n),Ke(t,e,n)):(V&&c&&jc(e),e.flags|=1,wt(t,e,a,n),e.child)}function Fr(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Lc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,p0(t,e,i,a,n)):(t=Ti(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!os(t,n)){var o=i.memoizedProps;if(l=l.compare,l=l!==null?l:Tn,l(o,a)&&t.ref===e.ref)return Ke(t,e,n)}return e.flags|=1,t=Xe(i,a),t.ref=e.ref,t.return=e,e.child=t}function p0(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(Tn(i,a)&&t.ref===e.ref)if(Et=!1,e.pendingProps=a=i,os(t,n))(t.flags&131072)!==0&&(Et=!0);else return e.lanes=t.lanes,Ke(t,e,n)}return oc(t,e,l,a,n)}function h0(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return Wr(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mi(e,i!==null?i.cachePool:null),i!==null?Hr(e,i):tc(),wd(e);else return a=e.lanes=536870912,Wr(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Mi(e,i.cachePool),Hr(e,i),nl(e),e.memoizedState=null):(t!==null&&Mi(e,null),tc(),nl(e));return wt(t,e,n,l),e.child}function cn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Wr(t,e,l,a,n){var i=Qc();return i=i===null?null:{parent:xt._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Mi(e,null),tc(),wd(e),t!==null&&Xa(t,e,a,!0),e.childLanes=n,null}function wi(t,e){return e=Ii({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function $r(t,e,l){return jl(e,t.child,null,l),t=wi(e,e.pendingProps),t.flags|=2,$t(e),e.memoizedState=null,t}function G1(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(V){if(a.mode==="hidden")return t=wi(e,a),e.lanes=536870912,cn(null,t);if(ec(e),(t=ut)?(t=om(t,me),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:xl!==null?{id:Ae,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=xd(t),l.return=e,e.child=l,Ot=e,ut=null)):t=null,t===null)throw El(e);return e.lanes=536870912,null}return wi(e,a)}var i=t.memoizedState;if(i!==null){var o=i.dehydrated;if(ec(e),n)if(e.flags&256)e.flags&=-257,e=$r(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(E(558));else if(Et||Xa(t,e,l,!1),n=(l&t.childLanes)!==0,Et||n){if(a=et,a!==null&&(o=Jf(a,l),o!==0&&o!==i.retryLane))throw i.retryLane=o,Jl(t,o),Vt(a,t,o),us;lu(),e=$r(t,e,l)}else t=i.treeContext,ut=he(o.nextSibling),Ot=e,V=!0,dl=null,me=!1,t!==null&&Sd(e,t),e=wi(e,a),e.flags|=4096;return e}return t=Xe(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Bi(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(E(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function oc(t,e,l,a,n){return Ll(e),l=Fc(t,e,l,a,void 0,n),a=Wc(),t!==null&&!Et?($c(t,e,n),Ke(t,e,n)):(V&&a&&jc(e),e.flags|=1,wt(t,e,l,n),e.child)}function Rr(t,e,l,a,n,i){return Ll(e),e.updateQueue=null,l=Od(e,a,l,n),Bd(t),a=Wc(),t!==null&&!Et?($c(t,e,i),Ke(t,e,i)):(V&&a&&jc(e),e.flags|=1,wt(t,e,l,i),e.child)}function Ir(t,e,l,a,n){if(Ll(e),e.stateNode===null){var i=ya,o=l.contextType;typeof o=="object"&&o!==null&&(i=Ct(o)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ic,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Vc(e),o=l.contextType,i.context=typeof o=="object"&&o!==null?Ct(o):ya,i.state=e.memoizedState,o=l.getDerivedStateFromProps,typeof o=="function"&&(mo(e,l,o,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&ic.enqueueReplaceState(i,i.state,null),vn(e,a,i,n),hn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var c=e.memoizedProps,s=Gl(l,c);i.props=s;var m=i.context,v=l.contextType;o=ya,typeof v=="object"&&v!==null&&(o=Ct(v));var y=l.getDerivedStateFromProps;v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||m!==o)&&Vr(e,i,a,o),el=!1;var p=e.memoizedState;i.state=p,vn(e,a,i,n),hn(),m=e.memoizedState,c||p!==m||el?(typeof y=="function"&&(mo(e,l,y,a),m=e.memoizedState),(s=el||Zr(e,l,s,a,p,m,o))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=m),i.props=a,i.state=m,i.context=o,a=s):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Io(t,e),o=e.memoizedProps,v=Gl(l,o),i.props=v,y=e.pendingProps,p=i.context,m=l.contextType,s=ya,typeof m=="object"&&m!==null&&(s=Ct(m)),c=l.getDerivedStateFromProps,(m=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==y||p!==s)&&Vr(e,i,a,s),el=!1,p=e.memoizedState,i.state=p,vn(e,a,i,n),hn();var h=e.memoizedState;o!==y||p!==h||el||t!==null&&t.dependencies!==null&&Vi(t.dependencies)?(typeof c=="function"&&(mo(e,l,c,a),h=e.memoizedState),(v=el||Zr(e,l,v,a,p,h,s)||t!==null&&t.dependencies!==null&&Vi(t.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,h,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,h,s)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=h),i.props=a,i.state=h,i.context=s,a=v):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Bi(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=jl(e,t.child,null,n),e.child=jl(e,null,l,n)):wt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Ke(t,e,n),t}function Pr(t,e,l,a){return Yl(),e.flags|=256,wt(t,e,l,a),e.child}var po={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ho(t){return{baseLanes:t,cachePool:Nd()}}function vo(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=It),t}function v0(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(ht.current&2)!==0),o&&(n=!0,e.flags&=-129),o=(e.flags&32)!==0,e.flags&=-33,t===null){if(V){if(n?al(e):nl(e),(t=ut)?(t=om(t,me),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:xl!==null?{id:Ae,overflow:Ne}:null,retryLane:536870912,hydrationErrors:null},l=xd(t),l.return=e,e.child=l,Ot=e,ut=null)):t=null,t===null)throw El(e);return Ec(t)?e.lanes=32:e.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(nl(e),n=e.mode,c=Ii({mode:"hidden",children:c},n),a=_l(a,n,l,null),c.return=e,a.return=e,c.sibling=a,e.child=c,a=e.child,a.memoizedState=ho(l),a.childLanes=vo(t,o,l),e.memoizedState=po,cn(null,a)):(al(e),cc(e,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)e.flags&256?(al(e),e.flags&=-257,e=yo(t,e,l)):e.memoizedState!==null?(nl(e),e.child=t.child,e.flags|=128,e=null):(nl(e),c=a.fallback,n=e.mode,a=Ii({mode:"visible",children:a.children},n),c=_l(c,n,l,null),c.flags|=2,a.return=e,c.return=e,a.sibling=c,e.child=a,jl(e,t.child,null,l),a=e.child,a.memoizedState=ho(l),a.childLanes=vo(t,o,l),e.memoizedState=po,e=cn(null,a));else if(al(e),Ec(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var m=o.dgst;o=m,a=Error(E(419)),a.stack="",a.digest=o,Dn({value:a,source:null,stack:null}),e=yo(t,e,l)}else if(Et||Xa(t,e,l,!1),o=(l&t.childLanes)!==0,Et||o){if(o=et,o!==null&&(a=Jf(o,l),a!==0&&a!==s.retryLane))throw s.retryLane=a,Jl(t,a),Vt(o,t,a),us;xc(c)||lu(),e=yo(t,e,l)}else xc(c)?(e.flags|=192,e.child=t.child,e=null):(t=s.treeContext,ut=he(c.nextSibling),Ot=e,V=!0,dl=null,me=!1,t!==null&&Sd(e,t),e=cc(e,a.children),e.flags|=4096);return e}return n?(nl(e),c=a.fallback,n=e.mode,s=t.child,m=s.sibling,a=Xe(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Xe(m,c):(c=_l(c,n,l,null),c.flags|=2),c.return=e,a.return=e,a.sibling=c,e.child=a,cn(null,a),a=e.child,c=t.child.memoizedState,c===null?c=ho(l):(n=c.cachePool,n!==null?(s=xt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=Nd(),c={baseLanes:c.baseLanes|l,cachePool:n}),a.memoizedState=c,a.childLanes=vo(t,o,l),e.memoizedState=po,cn(t.child,a)):(al(e),l=t.child,t=l.sibling,l=Xe(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(o=e.deletions,o===null?(e.deletions=[t],e.flags|=16):o.push(t)),e.child=l,e.memoizedState=null,l)}function cc(t,e){return e=Ii({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ii(t,e){return t=Rt(22,t,null,e),t.lanes=0,t}function yo(t,e,l){return jl(e,t.child,null,l),t=cc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tf(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Wo(t.return,e,l)}function go(t,e,l,a,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=l,o.tailMode=n,o.treeForkCount=i)}function y0(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var o=ht.current,c=(o&2)!==0;if(c?(o=o&1|2,e.flags|=128):o&=1,lt(ht,o),wt(t,e,a,l),a=V?Mn:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tf(t,l,e);else if(t.tag===19)tf(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&Fi(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),go(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Fi(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}go(e,!0,l,null,i,a);break;case"together":go(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Ke(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Al|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Xa(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,l=Xe(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Xe(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function os(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Vi(t)))}function Q1(t,e,l){switch(e.tag){case 3:Yi(e,e.stateNode.containerInfo),ll(e,xt,t.memoizedState.cache),Yl();break;case 27:case 5:qo(e);break;case 4:Yi(e,e.stateNode.containerInfo);break;case 10:ll(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,ec(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(al(e),e.flags|=128,null):(l&e.child.childLanes)!==0?v0(t,e,l):(al(e),t=Ke(t,e,l),t!==null?t.sibling:null);al(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Xa(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return y0(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),lt(ht,ht.current),a)break;return null;case 22:return e.lanes=0,h0(t,e,l,e.pendingProps);case 24:ll(e,xt,t.memoizedState.cache)}return Ke(t,e,l)}function g0(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)Et=!0;else{if(!os(t,l)&&(e.flags&128)===0)return Et=!1,Q1(t,e,l);Et=(t.flags&131072)!==0}else Et=!1,V&&(e.flags&1048576)!==0&&Ed(e,Mn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Bl(e.elementType),e.type=t,typeof t=="function")Lc(t)?(a=Gl(t,a),e.tag=1,e=Ir(null,e,t,a,l)):(e.tag=0,e=oc(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===zc){e.tag=11,e=Kr(null,e,t,a,l);break t}else if(n===Tc){e.tag=14,e=Fr(null,e,t,a,l);break t}}throw e=_o(t)||t,Error(E(306,e,""))}}return e;case 0:return oc(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=Gl(a,e.pendingProps),Ir(t,e,a,n,l);case 3:t:{if(Yi(e,e.stateNode.containerInfo),t===null)throw Error(E(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Io(t,e),vn(e,a,null,l);var o=e.memoizedState;if(a=o.cache,ll(e,xt,a),a!==i.cache&&$o(e,[xt],l,!0),hn(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=Pr(t,e,a,l);break t}else if(a!==n){n=de(Error(E(424)),e),Dn(n),e=Pr(t,e,a,l);break t}else for(t=e.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,ut=he(t.firstChild),Ot=e,V=!0,dl=null,me=!0,l=Md(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Yl(),a===n){e=Ke(t,e,l);break t}wt(t,e,a,l)}e=e.child}return e;case 26:return Bi(t,e),t===null?(l=Af(e.type,null,e.pendingProps,null))?e.memoizedState=l:V||(l=e.type,t=e.pendingProps,a=uu(fl.current).createElement(l),a[Bt]=e,a[Jt]=t,_t(a,l,t),Dt(a),e.stateNode=a):e.memoizedState=Af(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return qo(e),t===null&&V&&(a=e.stateNode=cm(e.type,e.pendingProps,fl.current),Ot=e,me=!0,n=ut,zl(e.type)?(Sc=n,ut=he(a.firstChild)):ut=n),wt(t,e,e.pendingProps.children,l),Bi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&V&&((n=a=ut)&&(a=yh(a,e.type,e.pendingProps,me),a!==null?(e.stateNode=a,Ot=e,ut=he(a.firstChild),me=!1,n=!0):n=!1),n||El(e)),qo(e),n=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,gc(n,i)?a=null:o!==null&&gc(n,o)&&(e.flags|=32),e.memoizedState!==null&&(n=Fc(t,e,_1,null,null,l),_n._currentValue=n),Bi(t,e),wt(t,e,a,l),e.child;case 6:return t===null&&V&&((t=l=ut)&&(l=gh(l,e.pendingProps,me),l!==null?(e.stateNode=l,Ot=e,ut=null,t=!0):t=!1),t||El(e)),null;case 13:return v0(t,e,l);case 4:return Yi(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=jl(e,null,a,l):wt(t,e,a,l),e.child;case 11:return Kr(t,e,e.type,e.pendingProps,l);case 7:return wt(t,e,e.pendingProps,l),e.child;case 8:return wt(t,e,e.pendingProps.children,l),e.child;case 12:return wt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,ll(e,e.type,a.value),wt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Ll(e),n=Ct(n),a=a(n),e.flags|=1,wt(t,e,a,l),e.child;case 14:return Fr(t,e,e.type,e.pendingProps,l);case 15:return p0(t,e,e.type,e.pendingProps,l);case 19:return y0(t,e,l);case 31:return G1(t,e,l);case 22:return h0(t,e,l,e.pendingProps);case 24:return Ll(e),a=Ct(xt),t===null?(n=Qc(),n===null&&(n=et,i=Gc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Vc(e),ll(e,xt,n)):((t.lanes&l)!==0&&(Io(t,e),vn(e,null,null,l),hn()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),ll(e,xt,a)):(a=i.cache,ll(e,xt,a),a!==n.cache&&$o(e,[xt],l,!0))),wt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(E(156,e.tag))}function Oe(t){t.flags|=4}function bo(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(G0())t.flags|=8192;else throw ql=Ji,Zc}else t.flags&=-16777217}function ef(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!fm(e))if(G0())t.flags|=8192;else throw ql=Ji,Zc}function hi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Qf():536870912,t.lanes|=e,_a|=e)}function tn(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function it(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function Z1(t,e,l){var a=e.pendingProps;switch(Xc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return it(e),null;case 1:return it(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ge(xt),Da(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ia(e)?Oe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,so())),it(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(Oe(e),i!==null?(it(e),ef(e,i)):(it(e),bo(e,n,null,a,l))):i?i!==t.memoizedState?(Oe(e),it(e),ef(e,i)):(it(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&Oe(e),it(e),bo(e,n,t,a,l)),null;case 27:if(Li(e),l=fl.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Oe(e);else{if(!a){if(e.stateNode===null)throw Error(E(166));return it(e),null}t=Te.current,ia(e)?wr(e,t):(t=cm(n,a,l),e.stateNode=t,Oe(e))}return it(e),null;case 5:if(Li(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&Oe(e);else{if(!a){if(e.stateNode===null)throw Error(E(166));return it(e),null}if(i=Te.current,ia(e))wr(e,i);else{var o=uu(fl.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(n,{is:a.is}):o.createElement(n)}}i[Bt]=e,i[Jt]=a;t:for(o=e.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===e)break t;for(;o.sibling===null;){if(o.return===null||o.return===e)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}e.stateNode=i;t:switch(_t(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Oe(e)}}return it(e),bo(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&Oe(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(E(166));if(t=fl.current,ia(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Ot,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Bt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||nm(t.nodeValue,l)),t||El(e,!0)}else t=uu(t).createTextNode(a),t[Bt]=e,e.stateNode=t}return it(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=ia(e),l!==null){if(t===null){if(!a)throw Error(E(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(557));t[Bt]=e}else Yl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;it(e),t=!1}else l=so(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?($t(e),e):($t(e),null);if((e.flags&128)!==0)throw Error(E(558))}return it(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ia(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(E(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[Bt]=e}else Yl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;it(e),n=!1}else n=so(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?($t(e),e):($t(e),null)}return $t(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),hi(e,e.updateQueue),it(e),null);case 4:return Da(),t===null&&ps(e.stateNode.containerInfo),it(e),null;case 10:return Ge(e.type),it(e),null;case 19:if(kt(ht),a=e.memoizedState,a===null)return it(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)tn(a,!1);else{if(pt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Fi(t),i!==null){for(e.flags|=128,tn(a,!1),t=i.updateQueue,e.updateQueue=t,hi(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)bd(l,t),l=l.sibling;return lt(ht,ht.current&1|2),V&&qe(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&Pt()>tu&&(e.flags|=128,n=!0,tn(a,!1),e.lanes=4194304)}else{if(!n)if(t=Fi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,hi(e,t),tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!V)return it(e),null}else 2*Pt()-a.renderingStartTime>tu&&l!==536870912&&(e.flags|=128,n=!0,tn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Pt(),t.sibling=null,l=ht.current,lt(ht,n?l&1|2:l&1),V&&qe(e,a.treeForkCount),t):(it(e),null);case 22:case 23:return $t(e),Jc(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(it(e),e.subtreeFlags&6&&(e.flags|=8192)):it(e),l=e.updateQueue,l!==null&&hi(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&kt(Ul),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),Ge(xt),it(e),null;case 25:return null;case 30:return null}throw Error(E(156,e.tag))}function V1(t,e){switch(Xc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ge(xt),Da(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Li(e),null;case 31:if(e.memoizedState!==null){if($t(e),e.alternate===null)throw Error(E(340));Yl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if($t(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Yl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return kt(ht),null;case 4:return Da(),null;case 10:return Ge(e.type),null;case 22:case 23:return $t(e),Jc(),t!==null&&kt(Ul),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ge(xt),null;case 25:return null;default:return null}}function b0(t,e){switch(Xc(e),e.tag){case 3:Ge(xt),Da();break;case 26:case 27:case 5:Li(e);break;case 4:Da();break;case 31:e.memoizedState!==null&&$t(e);break;case 13:$t(e);break;case 19:kt(ht);break;case 10:Ge(e.type);break;case 22:case 23:$t(e),Jc(),t!==null&&kt(Ul);break;case 24:Ge(xt)}}function Vn(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,o=l.inst;a=i(),o.destroy=a}l=l.next}while(l!==n)}}catch(c){$(e,e.return,c)}}function Sl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var o=a.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,n=e;var s=l,m=c;try{m()}catch(v){$(n,s,v)}}}a=a.next}while(a!==i)}}catch(v){$(e,e.return,v)}}function x0(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{kd(e,l)}catch(a){$(t,t.return,a)}}}function E0(t,e,l){l.props=Gl(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){$(t,e,a)}}function gn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){$(t,e,n)}}function ze(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){$(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){$(t,e,n)}else l.current=null}function S0(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){$(t,t.return,n)}}function xo(t,e,l){try{var a=t.stateNode;fh(a,t.type,l,e),a[Jt]=e}catch(n){$(t,t.return,n)}}function A0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&zl(t.type)||t.tag===4}function Eo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||A0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&zl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function sc(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Le));else if(a!==4&&(a===27&&zl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(sc(t,e,l),t=t.sibling;t!==null;)sc(t,e,l),t=t.sibling}function Pi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&zl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Pi(t,e,l),t=t.sibling;t!==null;)Pi(t,e,l),t=t.sibling}function N0(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);_t(e,a,l),e[Bt]=t,e[Jt]=l}catch(i){$(t,t.return,i)}}var He=!1,bt=!1,So=!1,lf=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function J1(t,e){if(t=t.containerInfo,vc=ru,t=fd(t),qc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var o=0,c=-1,s=-1,m=0,v=0,y=t,p=null;e:for(;;){for(var h;y!==l||n!==0&&y.nodeType!==3||(c=o+n),y!==i||a!==0&&y.nodeType!==3||(s=o+a),y.nodeType===3&&(o+=y.nodeValue.length),(h=y.firstChild)!==null;)p=y,y=h;for(;;){if(y===t)break e;if(p===l&&++m===n&&(c=o),p===i&&++v===a&&(s=o),(h=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=h}l=c===-1||s===-1?null:{start:c,end:s}}else l=null}l=l||{start:0,end:0}}else l=null;for(yc={focusedElem:t,selectionRange:l},ru=!1,Mt=e;Mt!==null;)if(e=Mt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Mt=t;else for(;Mt!==null;){switch(e=Mt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var x=Gl(l.type,n);t=a.getSnapshotBeforeUpdate(x,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(b){$(l,l.return,b)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)bc(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(E(163))}if(t=e.sibling,t!==null){t.return=e.return,Mt=t;break}Mt=e.return}}function z0(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:_e(t,l),a&4&&Vn(5,l);break;case 1:if(_e(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(o){$(l,l.return,o)}else{var n=Gl(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(o){$(l,l.return,o)}}a&64&&x0(l),a&512&&gn(l,l.return);break;case 3:if(_e(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{kd(t,e)}catch(o){$(l,l.return,o)}}break;case 27:e===null&&a&4&&N0(l);case 26:case 5:_e(t,l),e===null&&a&4&&S0(l),a&512&&gn(l,l.return);break;case 12:_e(t,l);break;case 31:_e(t,l),a&4&&D0(t,l);break;case 13:_e(t,l),a&4&&k0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=eh.bind(null,l),bh(t,l))));break;case 22:if(a=l.memoizedState!==null||He,!a){e=e!==null&&e.memoizedState!==null||bt,n=He;var i=bt;He=a,(bt=e)&&!i?Ue(t,l,(l.subtreeFlags&8772)!==0):_e(t,l),He=n,bt=i}break;case 30:break;default:_e(t,l)}}function T0(t){var e=t.alternate;e!==null&&(t.alternate=null,T0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&wc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ft=null,Qt=!1;function Ce(t,e,l){for(l=l.child;l!==null;)M0(t,e,l),l=l.sibling}function M0(t,e,l){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(Yn,l)}catch{}switch(l.tag){case 26:bt||ze(l,e),Ce(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:bt||ze(l,e);var a=ft,n=Qt;zl(l.type)&&(ft=l.stateNode,Qt=!1),Ce(t,e,l),Sn(l.stateNode),ft=a,Qt=n;break;case 5:bt||ze(l,e);case 6:if(a=ft,n=Qt,ft=null,Ce(t,e,l),ft=a,Qt=n,ft!==null)if(Qt)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(l.stateNode)}catch(i){$(l,e,i)}else try{ft.removeChild(l.stateNode)}catch(i){$(l,e,i)}break;case 18:ft!==null&&(Qt?(t=ft,gf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),Ya(t)):gf(ft,l.stateNode));break;case 4:a=ft,n=Qt,ft=l.stateNode.containerInfo,Qt=!0,Ce(t,e,l),ft=a,Qt=n;break;case 0:case 11:case 14:case 15:Sl(2,l,e),bt||Sl(4,l,e),Ce(t,e,l);break;case 1:bt||(ze(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&E0(l,e,a)),Ce(t,e,l);break;case 21:Ce(t,e,l);break;case 22:bt=(a=bt)||l.memoizedState!==null,Ce(t,e,l),bt=a;break;default:Ce(t,e,l)}}function D0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ya(t)}catch(l){$(e,e.return,l)}}}function k0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ya(t)}catch(l){$(e,e.return,l)}}function K1(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new lf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new lf),e;default:throw Error(E(435,t.tag))}}function vi(t,e){var l=K1(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=lh.bind(null,t,a);a.then(n,n)}})}function Xt(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,o=e,c=o;t:for(;c!==null;){switch(c.tag){case 27:if(zl(c.type)){ft=c.stateNode,Qt=!1;break t}break;case 5:ft=c.stateNode,Qt=!1;break t;case 3:case 4:ft=c.stateNode.containerInfo,Qt=!0;break t}c=c.return}if(ft===null)throw Error(E(160));M0(i,o,n),ft=null,Qt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)w0(e,t),e=e.sibling}var be=null;function w0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Xt(e,t),Gt(t),a&4&&(Sl(3,t,t.return),Vn(3,t),Sl(5,t,t.return));break;case 1:Xt(e,t),Gt(t),a&512&&(bt||l===null||ze(l,l.return)),a&64&&He&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=be;if(Xt(e,t),Gt(t),a&512&&(bt||l===null||ze(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Xn]||i[Bt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),_t(i,a,l),i[Bt]=t,Dt(i),a=i;break t;case"link":var o=zf("link","href",n).get(a+(l.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){o.splice(c,1);break e}}i=n.createElement(a),_t(i,a,l),n.head.appendChild(i);break;case"meta":if(o=zf("meta","content",n).get(a+(l.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){o.splice(c,1);break e}}i=n.createElement(a),_t(i,a,l),n.head.appendChild(i);break;default:throw Error(E(468,a))}i[Bt]=t,Dt(i),a=i}t.stateNode=a}else Tf(n,t.type,t.stateNode);else t.stateNode=Nf(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Tf(n,t.type,t.stateNode):Nf(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&xo(t,t.memoizedProps,l.memoizedProps)}break;case 27:Xt(e,t),Gt(t),a&512&&(bt||l===null||ze(l,l.return)),l!==null&&a&4&&xo(t,t.memoizedProps,l.memoizedProps);break;case 5:if(Xt(e,t),Gt(t),a&512&&(bt||l===null||ze(l,l.return)),t.flags&32){n=t.stateNode;try{wa(n,"")}catch(x){$(t,t.return,x)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,xo(t,n,l!==null?l.memoizedProps:n)),a&1024&&(So=!0);break;case 6:if(Xt(e,t),Gt(t),a&4){if(t.stateNode===null)throw Error(E(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(x){$(t,t.return,x)}}break;case 3:if(_i=null,n=be,be=ou(e.containerInfo),Xt(e,t),be=n,Gt(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{Ya(e.containerInfo)}catch(x){$(t,t.return,x)}So&&(So=!1,B0(t));break;case 4:a=be,be=ou(t.stateNode.containerInfo),Xt(e,t),Gt(t),be=a;break;case 12:Xt(e,t),Gt(t);break;case 31:Xt(e,t),Gt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,vi(t,a)));break;case 13:Xt(e,t),Gt(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Au=Pt()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,vi(t,a)));break;case 22:n=t.memoizedState!==null;var s=l!==null&&l.memoizedState!==null,m=He,v=bt;if(He=m||n,bt=v||s,Xt(e,t),bt=v,He=m,Gt(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||s||He||bt||Ol(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){s=l=e;try{if(i=s.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=s.stateNode;var y=s.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(x){$(s,s.return,x)}}}else if(e.tag===6){if(l===null){s=e;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(x){$(s,s.return,x)}}}else if(e.tag===18){if(l===null){s=e;try{var h=s.stateNode;n?bf(h,!0):bf(s.stateNode,!1)}catch(x){$(s,s.return,x)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,vi(t,l))));break;case 19:Xt(e,t),Gt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,vi(t,a)));break;case 30:break;case 21:break;default:Xt(e,t),Gt(t)}}function Gt(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(A0(a)){l=a;break}a=a.return}if(l==null)throw Error(E(160));switch(l.tag){case 27:var n=l.stateNode,i=Eo(t);Pi(t,i,n);break;case 5:var o=l.stateNode;l.flags&32&&(wa(o,""),l.flags&=-33);var c=Eo(t);Pi(t,c,o);break;case 3:case 4:var s=l.stateNode.containerInfo,m=Eo(t);sc(t,m,s);break;default:throw Error(E(161))}}catch(v){$(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function B0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;B0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function _e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)z0(t,e.alternate,e),e=e.sibling}function Ol(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Sl(4,e,e.return),Ol(e);break;case 1:ze(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&E0(e,e.return,l),Ol(e);break;case 27:Sn(e.stateNode);case 26:case 5:ze(e,e.return),Ol(e);break;case 22:e.memoizedState===null&&Ol(e);break;case 30:Ol(e);break;default:Ol(e)}t=t.sibling}}function Ue(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,o=i.flags;switch(i.tag){case 0:case 11:case 15:Ue(n,i,l),Vn(4,i);break;case 1:if(Ue(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){$(a,a.return,m)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Dd(s[n],c)}catch(m){$(a,a.return,m)}}l&&o&64&&x0(i),gn(i,i.return);break;case 27:N0(i);case 26:case 5:Ue(n,i,l),l&&a===null&&o&4&&S0(i),gn(i,i.return);break;case 12:Ue(n,i,l);break;case 31:Ue(n,i,l),l&&o&4&&D0(n,i);break;case 13:Ue(n,i,l),l&&o&4&&k0(n,i);break;case 22:i.memoizedState===null&&Ue(n,i,l),gn(i,i.return);break;case 30:break;default:Ue(n,i,l)}e=e.sibling}}function cs(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&Qn(l))}function ss(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qn(t))}function ge(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(t,e,l,a),e=e.sibling}function O0(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:ge(t,e,l,a),n&2048&&Vn(9,e);break;case 1:ge(t,e,l,a);break;case 3:ge(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Qn(t)));break;case 12:if(n&2048){ge(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){$(e,e.return,s)}}else ge(t,e,l,a);break;case 31:ge(t,e,l,a);break;case 13:ge(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,o=e.alternate,e.memoizedState!==null?i._visibility&2?ge(t,e,l,a):bn(t,e):i._visibility&2?ge(t,e,l,a):(i._visibility|=2,oa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&cs(o,e);break;case 24:ge(t,e,l,a),n&2048&&ss(e.alternate,e);break;default:ge(t,e,l,a)}}function oa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,o=e,c=l,s=a,m=o.flags;switch(o.tag){case 0:case 11:case 15:oa(i,o,c,s,n),Vn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?oa(i,o,c,s,n):bn(i,o):(v._visibility|=2,oa(i,o,c,s,n)),n&&m&2048&&cs(o.alternate,o);break;case 24:oa(i,o,c,s,n),n&&m&2048&&ss(o.alternate,o);break;default:oa(i,o,c,s,n)}e=e.sibling}}function bn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:bn(l,a),n&2048&&cs(a.alternate,a);break;case 24:bn(l,a),n&2048&&ss(a.alternate,a);break;default:bn(l,a)}e=e.sibling}}var sn=8192;function ua(t,e,l){if(t.subtreeFlags&sn)for(t=t.child;t!==null;)C0(t,e,l),t=t.sibling}function C0(t,e,l){switch(t.tag){case 26:ua(t,e,l),t.flags&sn&&t.memoizedState!==null&&Bh(l,be,t.memoizedState,t.memoizedProps);break;case 5:ua(t,e,l);break;case 3:case 4:var a=be;be=ou(t.stateNode.containerInfo),ua(t,e,l),be=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,ua(t,e,l),sn=a):ua(t,e,l));break;default:ua(t,e,l)}}function _0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function en(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Mt=a,q0(a,t)}_0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)U0(t),t=t.sibling}function U0(t){switch(t.tag){case 0:case 11:case 15:en(t),t.flags&2048&&Sl(9,t,t.return);break;case 3:en(t);break;case 12:en(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Oi(t)):en(t);break;default:en(t)}}function Oi(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];Mt=a,q0(a,t)}_0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Sl(8,e,e.return),Oi(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Oi(e));break;default:Oi(e)}t=t.sibling}}function q0(t,e){for(;Mt!==null;){var l=Mt;switch(l.tag){case 0:case 11:case 15:Sl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,Mt=a;else t:for(l=t;Mt!==null;){a=Mt;var n=a.sibling,i=a.return;if(T0(a),a===l){Mt=null;break t}if(n!==null){n.return=i,Mt=n;break t}Mt=i}}}var F1={getCacheForType:function(t){var e=Ct(xt),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Ct(xt).controller.signal}},W1=typeof WeakMap=="function"?WeakMap:Map,K=0,et=null,j=null,Q=0,W=0,Wt=null,cl=!1,Qa=!1,rs=!1,Fe=0,pt=0,Al=0,Hl=0,fs=0,It=0,_a=0,xn=null,Zt=null,rc=!1,Au=0,H0=0,tu=1/0,eu=null,hl=null,St=0,vl=null,Ua=null,Qe=0,fc=0,dc=null,Y0=null,En=0,mc=null;function le(){return(K&2)!==0&&Q!==0?Q&-Q:C.T!==null?ms():Kf()}function L0(){if(It===0)if((Q&536870912)===0||V){var t=ui;ui<<=1,(ui&3932160)===0&&(ui=262144),It=t}else It=536870912;return t=ne.current,t!==null&&(t.flags|=32),It}function Vt(t,e,l){(t===et&&(W===2||W===9)||t.cancelPendingCommit!==null)&&(qa(t,0),sl(t,Q,It,!1)),jn(t,l),((K&2)===0||t!==et)&&(t===et&&((K&2)===0&&(Hl|=l),pt===4&&sl(t,Q,It,!1)),De(t))}function j0(t,e,l){if((K&6)!==0)throw Error(E(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||Ln(t,e),n=a?I1(t,e):Ao(t,e,!0),i=a;do{if(n===0){Qa&&!a&&sl(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!$1(l)){n=Ao(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){e=o;t:{var c=t;n=xn;var s=c.current.memoizedState.isDehydrated;if(s&&(qa(c,o).flags|=256),o=Ao(c,o,!1),o!==2){if(rs&&!s){c.errorRecoveryDisabledLanes|=i,Hl|=i,n=4;break t}i=Zt,Zt=n,i!==null&&(Zt===null?Zt=i:Zt.push.apply(Zt,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){qa(t,0),sl(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(E(345));case 4:if((e&4194048)!==e)break;case 6:sl(a,e,It,!cl);break t;case 2:Zt=null;break;case 3:case 5:break;default:throw Error(E(329))}if((e&62914560)===e&&(n=Au+300-Pt(),10<n)){if(sl(a,e,It,!cl),du(a,0,!0)!==0)break t;Qe=e,a.timeoutHandle=um(af.bind(null,a,l,Zt,eu,rc,e,It,Hl,_a,cl,i,"Throttled",-0,0),n);break t}af(a,l,Zt,eu,rc,e,It,Hl,_a,cl,i,null,-0,0)}}break}while(!0);De(t)}function af(t,e,l,a,n,i,o,c,s,m,v,y,p,h){if(t.timeoutHandle=-1,y=e.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Le},C0(e,i,y);var x=(i&62914560)===i?Au-Pt():(i&4194048)===i?H0-Pt():0;if(x=Oh(y,x),x!==null){Qe=i,t.cancelPendingCommit=x(uf.bind(null,t,e,i,l,a,n,o,c,s,v,y,null,p,h)),sl(t,i,o,!m);return}}uf(t,e,i,l,a,n,o,c,s)}function $1(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!ae(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sl(t,e,l,a){e&=~fs,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-ee(n),o=1<<i;a[i]=-1,n&=~o}l!==0&&Zf(t,l,e)}function Nu(){return(K&6)===0?(Jn(0,!1),!1):!0}function ds(){if(j!==null){if(W===0)var t=j.return;else t=j,je=Kl=null,Rc(t),za=null,kn=0,t=j;for(;t!==null;)b0(t.alternate,t),t=t.return;j=null}}function qa(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,ph(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),Qe=0,ds(),et=t,j=l=Xe(t.current,null),Q=e,W=0,Wt=null,cl=!1,Qa=Ln(t,e),rs=!1,_a=It=fs=Hl=Al=pt=0,Zt=xn=null,rc=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-ee(a),i=1<<n;e|=t[n],a&=~i}return Fe=e,vu(),l}function X0(t,e){q=null,C.H=Bn,e===Ga||e===gu?(e=Ur(),W=3):e===Zc?(e=Ur(),W=4):W=e===us?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Wt=e,j===null&&(pt=1,Ri(t,de(e,t.current)))}function G0(){var t=ne.current;return t===null?!0:(Q&4194048)===Q?pe===null:(Q&62914560)===Q||(Q&536870912)!==0?t===pe:!1}function Q0(){var t=C.H;return C.H=Bn,t===null?Bn:t}function Z0(){var t=C.A;return C.A=F1,t}function lu(){pt=4,cl||(Q&4194048)!==Q&&ne.current!==null||(Qa=!0),(Al&134217727)===0&&(Hl&134217727)===0||et===null||sl(et,Q,It,!1)}function Ao(t,e,l){var a=K;K|=2;var n=Q0(),i=Z0();(et!==t||Q!==e)&&(eu=null,qa(t,e)),e=!1;var o=pt;t:do try{if(W!==0&&j!==null){var c=j,s=Wt;switch(W){case 8:ds(),o=6;break t;case 3:case 2:case 9:case 6:ne.current===null&&(e=!0);var m=W;if(W=0,Wt=null,xa(t,c,s,m),l&&Qa){o=0;break t}break;default:m=W,W=0,Wt=null,xa(t,c,s,m)}}R1(),o=pt;break}catch(v){X0(t,v)}while(!0);return e&&t.shellSuspendCounter++,je=Kl=null,K=a,C.H=n,C.A=i,j===null&&(et=null,Q=0,vu()),o}function R1(){for(;j!==null;)V0(j)}function I1(t,e){var l=K;K|=2;var a=Q0(),n=Z0();et!==t||Q!==e?(eu=null,tu=Pt()+500,qa(t,e)):Qa=Ln(t,e);t:do try{if(W!==0&&j!==null){e=j;var i=Wt;e:switch(W){case 1:W=0,Wt=null,xa(t,e,i,1);break;case 2:case 9:if(_r(i)){W=0,Wt=null,nf(e);break}e=function(){W!==2&&W!==9||et!==t||(W=7),De(t)},i.then(e,e);break t;case 3:W=7;break t;case 4:W=5;break t;case 7:_r(i)?(W=0,Wt=null,nf(e)):(W=0,Wt=null,xa(t,e,i,7));break;case 5:var o=null;switch(j.tag){case 26:o=j.memoizedState;case 5:case 27:var c=j;if(o?fm(o):c.stateNode.complete){W=0,Wt=null;var s=c.sibling;if(s!==null)j=s;else{var m=c.return;m!==null?(j=m,zu(m)):j=null}break e}}W=0,Wt=null,xa(t,e,i,5);break;case 6:W=0,Wt=null,xa(t,e,i,6);break;case 8:ds(),pt=6;break t;default:throw Error(E(462))}}P1();break}catch(v){X0(t,v)}while(!0);return je=Kl=null,C.H=a,C.A=n,K=l,j!==null?0:(et=null,Q=0,vu(),pt)}function P1(){for(;j!==null&&!Sp();)V0(j)}function V0(t){var e=g0(t.alternate,t,Fe);t.memoizedProps=t.pendingProps,e===null?zu(t):j=e}function nf(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=Rr(l,e,e.pendingProps,e.type,void 0,Q);break;case 11:e=Rr(l,e,e.pendingProps,e.type.render,e.ref,Q);break;case 5:Rc(e);default:b0(l,e),e=j=bd(e,Fe),e=g0(l,e,Fe)}t.memoizedProps=t.pendingProps,e===null?zu(t):j=e}function xa(t,e,l,a){je=Kl=null,Rc(e),za=null,kn=0;var n=e.return;try{if(X1(t,n,e,l,Q)){pt=1,Ri(t,de(l,t.current)),j=null;return}}catch(i){if(n!==null)throw j=n,i;pt=1,Ri(t,de(l,t.current)),j=null;return}e.flags&32768?(V||a===1?t=!0:Qa||(Q&536870912)!==0?t=!1:(cl=t=!0,(a===2||a===9||a===3||a===6)&&(a=ne.current,a!==null&&a.tag===13&&(a.flags|=16384))),J0(e,t)):zu(e)}function zu(t){var e=t;do{if((e.flags&32768)!==0){J0(e,cl);return}t=e.return;var l=Z1(e.alternate,e,Fe);if(l!==null){j=l;return}if(e=e.sibling,e!==null){j=e;return}j=e=t}while(e!==null);pt===0&&(pt=5)}function J0(t,e){do{var l=V1(t.alternate,t);if(l!==null){l.flags&=32767,j=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){j=t;return}j=t=l}while(t!==null);pt=6,j=null}function uf(t,e,l,a,n,i,o,c,s){t.cancelPendingCommit=null;do Tu();while(St!==0);if((K&6)!==0)throw Error(E(327));if(e!==null){if(e===t.current)throw Error(E(177));if(i=e.lanes|e.childLanes,i|=Hc,Op(t,l,i,o,c,s),t===et&&(j=et=null,Q=0),Ua=e,vl=t,Qe=l,fc=i,dc=n,Y0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,ah(ji,function(){return R0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,n=F.p,F.p=2,o=K,K|=4;try{J1(t,e,l)}finally{K=o,F.p=n,C.T=a}}St=1,K0(),F0(),W0()}}function K0(){if(St===1){St=0;var t=vl,e=Ua,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=C.T,C.T=null;var a=F.p;F.p=2;var n=K;K|=4;try{w0(e,t);var i=yc,o=fd(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&rd(c.ownerDocument.documentElement,c)){if(s!==null&&qc(c)){var m=s.start,v=s.end;if(v===void 0&&(v=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(v,c.value.length);else{var y=c.ownerDocument||document,p=y&&y.defaultView||window;if(p.getSelection){var h=p.getSelection(),x=c.textContent.length,b=Math.min(s.start,x),S=s.end===void 0?b:Math.min(s.end,x);!h.extend&&b>S&&(o=S,S=b,b=o);var f=Mr(c,b),r=Mr(c,S);if(f&&r&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==r.node||h.focusOffset!==r.offset)){var d=y.createRange();d.setStart(f.node,f.offset),h.removeAllRanges(),b>S?(h.addRange(d),h.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),h.addRange(d))}}}}for(y=[],h=c;h=h.parentNode;)h.nodeType===1&&y.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<y.length;c++){var g=y[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}ru=!!vc,yc=vc=null}finally{K=n,F.p=a,C.T=l}}t.current=e,St=2}}function F0(){if(St===2){St=0;var t=vl,e=Ua,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=C.T,C.T=null;var a=F.p;F.p=2;var n=K;K|=4;try{z0(t,e.alternate,e)}finally{K=n,F.p=a,C.T=l}}St=3}}function W0(){if(St===4||St===3){St=0,Ap();var t=vl,e=Ua,l=Qe,a=Y0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?St=5:(St=0,Ua=vl=null,$0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(hl=null),kc(l),e=e.stateNode,te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(Yn,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,n=F.p,F.p=2,C.T=null;try{for(var i=t.onRecoverableError,o=0;o<a.length;o++){var c=a[o];i(c.value,{componentStack:c.stack})}}finally{C.T=e,F.p=n}}(Qe&3)!==0&&Tu(),De(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===mc?En++:(En=0,mc=t):En=0,Jn(0,!1)}}function $0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Qn(e)))}function Tu(){return K0(),F0(),W0(),R0()}function R0(){if(St!==5)return!1;var t=vl,e=fc;fc=0;var l=kc(Qe),a=C.T,n=F.p;try{F.p=32>l?32:l,C.T=null,l=dc,dc=null;var i=vl,o=Qe;if(St=0,Ua=vl=null,Qe=0,(K&6)!==0)throw Error(E(331));var c=K;if(K|=4,U0(i.current),O0(i,i.current,o,l),K=c,Jn(0,!1),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(Yn,i)}catch{}return!0}finally{F.p=n,C.T=a,$0(t,e)}}function of(t,e,l){e=de(l,e),e=uc(t.stateNode,e,2),t=pl(t,e,2),t!==null&&(jn(t,2),De(t))}function $(t,e,l){if(t.tag===3)of(t,t,l);else for(;e!==null;){if(e.tag===3){of(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(hl===null||!hl.has(a))){t=de(l,t),l=d0(2),a=pl(e,l,2),a!==null&&(m0(l,a,e,t),jn(a,2),De(a));break}}e=e.return}}function No(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new W1;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(rs=!0,n.add(l),t=th.bind(null,t,e,l),e.then(t,t))}function th(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,et===t&&(Q&l)===l&&(pt===4||pt===3&&(Q&62914560)===Q&&300>Pt()-Au?(K&2)===0&&qa(t,0):fs|=l,_a===Q&&(_a=0)),De(t)}function I0(t,e){e===0&&(e=Qf()),t=Jl(t,e),t!==null&&(jn(t,e),De(t))}function eh(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),I0(t,l)}function lh(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(E(314))}a!==null&&a.delete(e),I0(t,l)}function ah(t,e){return Mc(t,e)}var au=null,ca=null,pc=!1,nu=!1,zo=!1,rl=0;function De(t){t!==ca&&t.next===null&&(ca===null?au=ca=t:ca=ca.next=t),nu=!0,pc||(pc=!0,ih())}function Jn(t,e){if(!zo&&nu){zo=!0;do for(var l=!1,a=au;a!==null;){if(!e)if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var o=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-ee(42|t)+1)-1,i&=n&~(o&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,cf(a,i))}else i=Q,i=du(a,a===et?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Ln(a,i)||(l=!0,cf(a,i));a=a.next}while(l);zo=!1}}function nh(){P0()}function P0(){nu=pc=!1;var t=0;rl!==0&&mh()&&(t=rl);for(var e=Pt(),l=null,a=au;a!==null;){var n=a.next,i=tm(a,e);i===0?(a.next=null,l===null?au=n:l.next=n,n===null&&(ca=l)):(l=a,(t!==0||(i&3)!==0)&&(nu=!0)),a=n}St!==0&&St!==5||Jn(t,!1),rl!==0&&(rl=0)}function tm(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-ee(i),c=1<<o,s=n[o];s===-1?((c&l)===0||(c&a)!==0)&&(n[o]=Bp(c,e)):s<=e&&(t.expiredLanes|=c),i&=~c}if(e=et,l=Q,l=du(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(W===2||W===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Pu(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||Ln(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&Pu(a),kc(l)){case 2:case 8:l=Xf;break;case 32:l=ji;break;case 268435456:l=Gf;break;default:l=ji}return a=em.bind(null,t),l=Mc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&Pu(a),t.callbackPriority=2,t.callbackNode=null,2}function em(t,e){if(St!==0&&St!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(Tu()&&t.callbackNode!==l)return null;var a=Q;return a=du(t,t===et?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(j0(t,a,e),tm(t,Pt()),t.callbackNode!=null&&t.callbackNode===l?em.bind(null,t):null)}function cf(t,e){if(Tu())return null;j0(t,e,!0)}function ih(){hh(function(){(K&6)!==0?Mc(jf,nh):P0()})}function ms(){if(rl===0){var t=Ba;t===0&&(t=ii,ii<<=1,(ii&261888)===0&&(ii=256)),rl=t}return rl}function sf(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ai(""+t)}function rf(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function uh(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=sf((n[Jt]||null).action),o=a.submitter;o&&(e=(e=o[Jt]||null)?sf(e.formAction):o.getAttribute("formAction"),e!==null&&(i=e,o=null));var c=new mu("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(rl!==0){var s=o?rf(n,o):new FormData(n);nc(l,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=o?rf(n,o):new FormData(n),nc(l,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(yi=0;yi<Jo.length;yi++)gi=Jo[yi],ff=gi.toLowerCase(),df=gi[0].toUpperCase()+gi.slice(1),xe(ff,"on"+df);var gi,ff,df,yi;xe(md,"onAnimationEnd");xe(pd,"onAnimationIteration");xe(hd,"onAnimationStart");xe("dblclick","onDoubleClick");xe("focusin","onFocus");xe("focusout","onBlur");xe(N1,"onTransitionRun");xe(z1,"onTransitionStart");xe(T1,"onTransitionCancel");xe(vd,"onTransitionEnd");ka("onMouseEnter",["mouseout","mouseover"]);ka("onMouseLeave",["mouseout","mouseover"]);ka("onPointerEnter",["pointerout","pointerover"]);ka("onPointerLeave",["pointerout","pointerover"]);Ql("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ql("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ql("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ql("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ql("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ql("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function lm(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var o=a.length-1;0<=o;o--){var c=a[o],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(v){Gi(v)}n.currentTarget=null,i=s}else for(o=0;o<a.length;o++){if(c=a[o],s=c.instance,m=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(v){Gi(v)}n.currentTarget=null,i=s}}}}function L(t,e){var l=e[Yo];l===void 0&&(l=e[Yo]=new Set);var a=t+"__bubble";l.has(a)||(am(e,t,2,!1),l.add(a))}function To(t,e,l){var a=0;e&&(a|=4),am(l,t,a,e)}var bi="_reactListening"+Math.random().toString(36).slice(2);function ps(t){if(!t[bi]){t[bi]=!0,Ff.forEach(function(l){l!=="selectionchange"&&(oh.has(l)||To(l,!1,t),To(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bi]||(e[bi]=!0,To("selectionchange",!1,e))}}function am(t,e,l,a){switch(vm(e)){case 2:var n=Uh;break;case 8:n=qh;break;default:n=gs}l=n.bind(null,e,l,t),n=void 0,!Qo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Mo(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===n)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;c!==null;){if(o=fa(c),o===null)return;if(s=o.tag,s===5||s===6||s===26||s===27){a=i=o;continue t}c=c.parentNode}}a=a.return}ld(function(){var m=i,v=Oc(l),y=[];t:{var p=yd.get(t);if(p!==void 0){var h=mu,x=t;switch(t){case"keypress":if(zi(l)===0)break t;case"keydown":case"keyup":h=l1;break;case"focusin":x="focus",h=no;break;case"focusout":x="blur",h=no;break;case"beforeblur":case"afterblur":h=no;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=gr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Zp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=i1;break;case md:case pd:case hd:h=Kp;break;case vd:h=o1;break;case"scroll":case"scrollend":h=Gp;break;case"wheel":h=s1;break;case"copy":case"cut":case"paste":h=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=xr;break;case"toggle":case"beforetoggle":h=f1}var b=(e&4)!==0,S=!b&&(t==="scroll"||t==="scrollend"),f=b?p!==null?p+"Capture":null:p;b=[];for(var r=m,d;r!==null;){var g=r;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||f===null||(g=Nn(r,f),g!=null&&b.push(Cn(r,g,d))),S)break;r=r.return}0<b.length&&(p=new h(p,x,null,l,v),y.push({event:p,listeners:b}))}}if((e&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&l!==Go&&(x=l.relatedTarget||l.fromElement)&&(fa(x)||x[La]))break t;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(x=l.relatedTarget||l.toElement,h=m,x=x?fa(x):null,x!==null&&(S=Hn(x),b=x.tag,x!==S||b!==5&&b!==27&&b!==6)&&(x=null)):(h=null,x=m),h!==x)){if(b=gr,g="onMouseLeave",f="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(b=xr,g="onPointerLeave",f="onPointerEnter",r="pointer"),S=h==null?p:on(h),d=x==null?p:on(x),p=new b(g,r+"leave",h,l,v),p.target=S,p.relatedTarget=d,g=null,fa(v)===m&&(b=new b(f,r+"enter",x,l,v),b.target=d,b.relatedTarget=S,g=b),S=g,h&&x)e:{for(b=ch,f=h,r=x,d=0,g=f;g;g=b(g))d++;g=0;for(var N=r;N;N=b(N))g++;for(;0<d-g;)f=b(f),d--;for(;0<g-d;)r=b(r),g--;for(;d--;){if(f===r||r!==null&&f===r.alternate){b=f;break e}f=b(f),r=b(r)}b=null}else b=null;h!==null&&mf(y,p,h,b,!1),x!==null&&S!==null&&mf(y,S,x,b,!0)}}t:{if(p=m?on(m):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var M=Nr;else if(Ar(p))if(cd)M=E1;else{M=b1;var z=g1}else h=p.nodeName,!h||h.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&Bc(m.elementType)&&(M=Nr):M=x1;if(M&&(M=M(t,m))){od(y,M,l,v);break t}z&&z(t,p,m),t==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&Xo(p,"number",p.value)}switch(z=m?on(m):window,t){case"focusin":(Ar(z)||z.contentEditable==="true")&&(pa=z,Zo=m,dn=null);break;case"focusout":dn=Zo=pa=null;break;case"mousedown":Vo=!0;break;case"contextmenu":case"mouseup":case"dragend":Vo=!1,Dr(y,l,v);break;case"selectionchange":if(A1)break;case"keydown":case"keyup":Dr(y,l,v)}var D;if(Uc)t:{switch(t){case"compositionstart":var B="onCompositionStart";break t;case"compositionend":B="onCompositionEnd";break t;case"compositionupdate":B="onCompositionUpdate";break t}B=void 0}else ma?id(t,l)&&(B="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(B="onCompositionStart");B&&(nd&&l.locale!=="ko"&&(ma||B!=="onCompositionStart"?B==="onCompositionEnd"&&ma&&(D=ad()):(ol=v,Cc="value"in ol?ol.value:ol.textContent,ma=!0)),z=iu(m,B),0<z.length&&(B=new br(B,t,null,l,v),y.push({event:B,listeners:z}),D?B.data=D:(D=ud(l),D!==null&&(B.data=D)))),(D=m1?p1(t,l):h1(t,l))&&(B=iu(m,"onBeforeInput"),0<B.length&&(z=new br("onBeforeInput","beforeinput",null,l,v),y.push({event:z,listeners:B}),z.data=D)),uh(y,t,m,l,v)}lm(y,e)})}function Cn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function iu(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Nn(t,l),n!=null&&a.unshift(Cn(t,n,i)),n=Nn(t,e),n!=null&&a.push(Cn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function ch(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mf(t,e,l,a,n){for(var i=e._reactName,o=[];l!==null&&l!==a;){var c=l,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Nn(l,i),m!=null&&o.unshift(Cn(l,m,s))):n||(m=Nn(l,i),m!=null&&o.push(Cn(l,m,s)))),l=l.return}o.length!==0&&t.push({event:e,listeners:o})}var sh=/\r\n?/g,rh=/\u0000|\uFFFD/g;function pf(t){return(typeof t=="string"?t:""+t).replace(sh,`
`).replace(rh,"")}function nm(t,e){return e=pf(e),pf(t)===e}function I(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||wa(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&wa(t,""+a);break;case"className":ci(t,"class",a);break;case"tabIndex":ci(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ci(t,l,a);break;case"style":ed(t,a,i);break;case"data":if(e!=="object"){ci(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ai(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&I(t,e,"name",n.name,n,null),I(t,e,"formEncType",n.formEncType,n,null),I(t,e,"formMethod",n.formMethod,n,null),I(t,e,"formTarget",n.formTarget,n,null)):(I(t,e,"encType",n.encType,n,null),I(t,e,"method",n.method,n,null),I(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=Ai(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Le);break;case"onScroll":a!=null&&L("scroll",t);break;case"onScrollEnd":a!=null&&L("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(E(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(E(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=Ai(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":L("beforetoggle",t),L("toggle",t),Si(t,"popover",a);break;case"xlinkActuate":Be(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Be(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Be(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Be(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Be(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Be(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Be(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Be(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Be(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Si(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=jp.get(l)||l,Si(t,l,a))}}function hc(t,e,l,a,n,i){switch(l){case"style":ed(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(E(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(E(60));t.innerHTML=l}}break;case"children":typeof a=="string"?wa(t,a):(typeof a=="number"||typeof a=="bigint")&&wa(t,""+a);break;case"onScroll":a!=null&&L("scroll",t);break;case"onScrollEnd":a!=null&&L("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Le);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wf.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Jt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):Si(t,l,a)}}}function _t(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":L("error",t),L("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var o=l[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:I(t,e,i,o,l,null)}}n&&I(t,e,"srcSet",l.srcSet,l,null),a&&I(t,e,"src",l.src,l,null);return;case"input":L("invalid",t);var c=i=o=n=null,s=null,m=null;for(a in l)if(l.hasOwnProperty(a)){var v=l[a];if(v!=null)switch(a){case"name":n=v;break;case"type":o=v;break;case"checked":s=v;break;case"defaultChecked":m=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(E(137,e));break;default:I(t,e,a,v,l,null)}}If(t,i,c,s,m,o,n,!1);return;case"select":L("invalid",t),a=o=i=null;for(n in l)if(l.hasOwnProperty(n)&&(c=l[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":a=c;default:I(t,e,n,c,l,null)}e=i,l=o,t.multiple=!!a,e!=null?Sa(t,!!a,e,!1):l!=null&&Sa(t,!!a,l,!0);return;case"textarea":L("invalid",t),i=n=a=null;for(o in l)if(l.hasOwnProperty(o)&&(c=l[o],c!=null))switch(o){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:I(t,e,o,c,l,null)}td(t,a,n,i);return;case"option":for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null)&&(s==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":I(t,e,s,a,l,null));return;case"dialog":L("beforetoggle",t),L("toggle",t),L("cancel",t),L("close",t);break;case"iframe":case"object":L("load",t);break;case"video":case"audio":for(a=0;a<On.length;a++)L(On[a],t);break;case"image":L("error",t),L("load",t);break;case"details":L("toggle",t);break;case"embed":case"source":case"link":L("error",t),L("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in l)if(l.hasOwnProperty(m)&&(a=l[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:I(t,e,m,a,l,null)}return;default:if(Bc(e)){for(v in l)l.hasOwnProperty(v)&&(a=l[v],a!==void 0&&hc(t,e,v,a,l,void 0));return}}for(c in l)l.hasOwnProperty(c)&&(a=l[c],a!=null&&I(t,e,c,a,l,null))}function fh(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,c=null,s=null,m=null,v=null;for(h in l){var y=l[h];if(l.hasOwnProperty(h)&&y!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=y;default:a.hasOwnProperty(h)||I(t,e,h,null,a,y)}}for(var p in a){var h=a[p];if(y=l[p],a.hasOwnProperty(p)&&(h!=null||y!=null))switch(p){case"type":i=h;break;case"name":n=h;break;case"checked":m=h;break;case"defaultChecked":v=h;break;case"value":o=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,e));break;default:h!==y&&I(t,e,p,h,a,y)}}jo(t,o,c,s,m,v,i,n);return;case"select":h=o=c=p=null;for(i in l)if(s=l[i],l.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":h=s;default:a.hasOwnProperty(i)||I(t,e,i,null,a,s)}for(n in a)if(i=a[n],s=l[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==s&&I(t,e,n,i,a,s)}e=c,l=o,a=h,p!=null?Sa(t,!!l,p,!1):!!a!=!!l&&(e!=null?Sa(t,!!l,e,!0):Sa(t,!!l,l?[]:"",!1));return;case"textarea":h=p=null;for(c in l)if(n=l[c],l.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:I(t,e,c,null,a,n)}for(o in a)if(n=a[o],i=l[o],a.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":p=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(E(91));break;default:n!==i&&I(t,e,o,n,a,i)}Pf(t,p,h);return;case"option":for(var x in l)p=l[x],l.hasOwnProperty(x)&&p!=null&&!a.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:I(t,e,x,null,a,p));for(s in a)p=a[s],h=l[s],a.hasOwnProperty(s)&&p!==h&&(p!=null||h!=null)&&(s==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":I(t,e,s,p,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in l)p=l[b],l.hasOwnProperty(b)&&p!=null&&!a.hasOwnProperty(b)&&I(t,e,b,null,a,p);for(m in a)if(p=a[m],h=l[m],a.hasOwnProperty(m)&&p!==h&&(p!=null||h!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(E(137,e));break;default:I(t,e,m,p,a,h)}return;default:if(Bc(e)){for(var S in l)p=l[S],l.hasOwnProperty(S)&&p!==void 0&&!a.hasOwnProperty(S)&&hc(t,e,S,void 0,a,p);for(v in a)p=a[v],h=l[v],!a.hasOwnProperty(v)||p===h||p===void 0&&h===void 0||hc(t,e,v,p,a,h);return}}for(var f in l)p=l[f],l.hasOwnProperty(f)&&p!=null&&!a.hasOwnProperty(f)&&I(t,e,f,null,a,p);for(y in a)p=a[y],h=l[y],!a.hasOwnProperty(y)||p===h||p==null&&h==null||I(t,e,y,p,a,h)}function hf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,o=n.initiatorType,c=n.duration;if(i&&c&&hf(o)){for(o=0,c=n.responseEnd,a+=1;a<l.length;a++){var s=l[a],m=s.startTime;if(m>c)break;var v=s.transferSize,y=s.initiatorType;v&&hf(y)&&(s=s.responseEnd,o+=v*(s<c?1:(c-m)/(s-m)))}if(--a,e+=8*(i+o)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vc=null,yc=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function vf(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function im(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Do=null;function mh(){var t=window.event;return t&&t.type==="popstate"?t===Do?!1:(Do=t,!0):(Do=null,!1)}var um=typeof setTimeout=="function"?setTimeout:void 0,ph=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,hh=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(t){return yf.resolve(null).then(t).catch(vh)}:um;function vh(t){setTimeout(function(){throw t})}function zl(t){return t==="head"}function gf(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),Ya(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Sn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Sn(l);for(var i=l.firstChild;i;){var o=i.nextSibling,c=i.nodeName;i[Xn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=o}}else l==="body"&&Sn(t.ownerDocument.body);l=n}while(l);Ya(e)}function bf(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function bc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":bc(l),wc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function yh(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Xn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=he(t.nextSibling),t===null)break}return null}function gh(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=he(t.nextSibling),t===null))return null;return t}function om(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=he(t.nextSibling),t===null))return null;return t}function xc(t){return t.data==="$?"||t.data==="$~"}function Ec(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bh(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function he(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Sc=null;function xf(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return he(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function Ef(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function cm(t,e,l){switch(e=uu(l),t){case"html":if(t=e.documentElement,!t)throw Error(E(452));return t;case"head":if(t=e.head,!t)throw Error(E(453));return t;case"body":if(t=e.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}function Sn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);wc(t)}var ve=new Map,Sf=new Set;function ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var We=F.d;F.d={f:xh,r:Eh,D:Sh,C:Ah,L:Nh,m:zh,X:Mh,S:Th,M:Dh};function xh(){var t=We.f(),e=Nu();return t||e}function Eh(t){var e=ja(t);e!==null&&e.tag===5&&e.type==="form"?e0(e):We.r(t)}var Za=typeof document>"u"?null:document;function sm(t,e,l){var a=Za;if(a&&typeof e=="string"&&e){var n=fe(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Sf.has(n)||(Sf.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),_t(e,"link",t),Dt(e),a.head.appendChild(e)))}}function Sh(t){We.D(t),sm("dns-prefetch",t,null)}function Ah(t,e){We.C(t,e),sm("preconnect",t,e)}function Nh(t,e,l){We.L(t,e,l);var a=Za;if(a&&t&&e){var n='link[rel="preload"][as="'+fe(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+fe(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+fe(l.imageSizes)+'"]')):n+='[href="'+fe(t)+'"]';var i=n;switch(e){case"style":i=Ha(t);break;case"script":i=Va(t)}ve.has(i)||(t=ot({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),ve.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(Kn(i))||e==="script"&&a.querySelector(Fn(i))||(e=a.createElement("link"),_t(e,"link",t),Dt(e),a.head.appendChild(e)))}}function zh(t,e){We.m(t,e);var l=Za;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+fe(a)+'"][href="'+fe(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Va(t)}if(!ve.has(i)&&(t=ot({rel:"modulepreload",href:t},e),ve.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Fn(i)))return}a=l.createElement("link"),_t(a,"link",t),Dt(a),l.head.appendChild(a)}}}function Th(t,e,l){We.S(t,e,l);var a=Za;if(a&&t){var n=Ea(a).hoistableStyles,i=Ha(t);e=e||"default";var o=n.get(i);if(!o){var c={loading:0,preload:null};if(o=a.querySelector(Kn(i)))c.loading=5;else{t=ot({rel:"stylesheet",href:t,"data-precedence":e},l),(l=ve.get(i))&&hs(t,l);var s=o=a.createElement("link");Dt(s),_t(s,"link",t),s._p=new Promise(function(m,v){s.onload=m,s.onerror=v}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Ci(o,e,a)}o={type:"stylesheet",instance:o,count:1,state:c},n.set(i,o)}}}function Mh(t,e){We.X(t,e);var l=Za;if(l&&t){var a=Ea(l).hoistableScripts,n=Va(t),i=a.get(n);i||(i=l.querySelector(Fn(n)),i||(t=ot({src:t,async:!0},e),(e=ve.get(n))&&vs(t,e),i=l.createElement("script"),Dt(i),_t(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Dh(t,e){We.M(t,e);var l=Za;if(l&&t){var a=Ea(l).hoistableScripts,n=Va(t),i=a.get(n);i||(i=l.querySelector(Fn(n)),i||(t=ot({src:t,async:!0,type:"module"},e),(e=ve.get(n))&&vs(t,e),i=l.createElement("script"),Dt(i),_t(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function Af(t,e,l,a){var n=(n=fl.current)?ou(n):null;if(!n)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ha(l.href),l=Ea(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ha(l.href);var i=Ea(n).hoistableStyles,o=i.get(t);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=n.querySelector(Kn(t)))&&!i._p&&(o.instance=i,o.state.loading=5),ve.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ve.set(t,l),i||kh(n,t,l,o.state))),e&&a===null)throw Error(E(528,""));return o}if(e&&a!==null)throw Error(E(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Va(l),l=Ea(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function Ha(t){return'href="'+fe(t)+'"'}function Kn(t){return'link[rel="stylesheet"]['+t+"]"}function rm(t){return ot({},t,{"data-precedence":t.precedence,precedence:null})}function kh(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),_t(e,"link",l),Dt(e),t.head.appendChild(e))}function Va(t){return'[src="'+fe(t)+'"]'}function Fn(t){return"script[async]"+t}function Nf(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+fe(l.href)+'"]');if(a)return e.instance=a,Dt(a),a;var n=ot({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Dt(a),_t(a,"style",n),Ci(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ha(l.href);var i=t.querySelector(Kn(n));if(i)return e.state.loading|=4,e.instance=i,Dt(i),i;a=rm(l),(n=ve.get(n))&&hs(a,n),i=(t.ownerDocument||t).createElement("link"),Dt(i);var o=i;return o._p=new Promise(function(c,s){o.onload=c,o.onerror=s}),_t(i,"link",a),e.state.loading|=4,Ci(i,l.precedence,t),e.instance=i;case"script":return i=Va(l.src),(n=t.querySelector(Fn(i)))?(e.instance=n,Dt(n),n):(a=l,(n=ve.get(i))&&(a=ot({},l),vs(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Dt(n),_t(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(E(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,Ci(a,l.precedence,t));return e.instance}function Ci(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,o=0;o<a.length;o++){var c=a[o];if(c.dataset.precedence===e)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function hs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function vs(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var _i=null;function zf(t,e,l){if(_i===null){var a=new Map,n=_i=new Map;n.set(l,a)}else n=_i,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[Xn]||i[Bt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(e)||"";o=t+o;var c=a.get(o);c?c.push(i):a.set(o,[i])}}return a}function Tf(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function wh(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;return e.rel==="stylesheet"?(t=e.disabled,typeof e.precedence=="string"&&t==null):!0;case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function fm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Bh(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ha(a.href),i=e.querySelector(Kn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=cu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Dt(i);return}i=e.ownerDocument||e,a=rm(a),(n=ve.get(n))&&hs(a,n),i=i.createElement("link"),Dt(i);var o=i;o._p=new Promise(function(c,s){o.onload=c,o.onerror=s}),_t(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=cu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var ko=0;function Oh(t,e){return t.stylesheets&&t.count===0&&Ui(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&ko===0&&(ko=62500*dh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>ko?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function Ui(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,e.forEach(Ch,t),su=null,cu.call(t))}function Ch(t,e){if(!(e.state.loading&4)){var l=su.get(t);if(l)var a=l.get(null);else{l=new Map,su.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(l.set(o.dataset.precedence,o),a=o)}a&&l.set(null,a)}n=e.instance,o=n.getAttribute("data-precedence"),i=l.get(o)||a,i===a&&l.set(null,n),l.set(o,n),this.count++,a=cu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var _n={$$typeof:Ye,Provider:null,Consumer:null,_currentValue:Cl,_currentValue2:Cl,_threadCount:0};function _h(t,e,l,a,n,i,o,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=to(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=to(0),this.hiddenUpdates=to(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function dm(t,e,l,a,n,i,o,c,s,m,v,y){return t=new _h(t,e,l,o,s,m,v,y,c),e=1,i===!0&&(e|=24),i=Rt(3,null,null,e),t.current=i,i.stateNode=t,e=Gc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Vc(i),t}function mm(t){return t?(t=ya,t):ya}function pm(t,e,l,a,n,i){n=mm(n),a.context===null?a.context=n:a.pendingContext=n,a=ml(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=pl(t,a,e),l!==null&&(Vt(l,t,e),pn(l,t,e))}function Mf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function ys(t,e){Mf(t,e),(t=t.alternate)&&Mf(t,e)}function hm(t){if(t.tag===13||t.tag===31){var e=Jl(t,67108864);e!==null&&Vt(e,t,67108864),ys(t,67108864)}}function Df(t){if(t.tag===13||t.tag===31){var e=le();e=Dc(e);var l=Jl(t,e);l!==null&&Vt(l,t,e),ys(t,e)}}var ru=!0;function Uh(t,e,l,a){var n=C.T;C.T=null;var i=F.p;try{F.p=2,gs(t,e,l,a)}finally{F.p=i,C.T=n}}function qh(t,e,l,a){var n=C.T;C.T=null;var i=F.p;try{F.p=8,gs(t,e,l,a)}finally{F.p=i,C.T=n}}function gs(t,e,l,a){if(ru){var n=Ac(a);if(n===null)Mo(t,e,a,fu,l),kf(t,a);else if(Yh(n,t,e,l,a))a.stopPropagation();else if(kf(t,a),e&4&&-1<Hh.indexOf(t)){for(;n!==null;){var i=ja(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=wl(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var s=1<<31-ee(o);c.entanglements[1]|=s,o&=~s}De(i),(K&6)===0&&(tu=Pt()+500,Jn(0,!1))}}break;case 31:case 13:c=Jl(i,2),c!==null&&Vt(c,i,2),Nu(),ys(i,2)}if(i=Ac(a),i===null&&Mo(t,e,a,fu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Mo(t,e,a,null,l)}}function Ac(t){return t=Oc(t),bs(t)}var fu=null;function bs(t){if(fu=null,t=fa(t),t!==null){var e=Hn(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=Uf(e),t!==null)return t;t=null}else if(l===31){if(t=qf(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return fu=t,null}function vm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Np()){case jf:return 2;case Xf:return 8;case ji:case zp:return 32;case Gf:return 268435456;default:return 32}default:return 32}}var Nc=!1,yl=null,gl=null,bl=null,Un=new Map,qn=new Map,il=[],Hh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function kf(t,e){switch(t){case"focusin":case"focusout":yl=null;break;case"dragenter":case"dragleave":gl=null;break;case"mouseover":case"mouseout":bl=null;break;case"pointerover":case"pointerout":Un.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(e.pointerId)}}function ln(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=ja(e),e!==null&&hm(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function Yh(t,e,l,a,n){switch(e){case"focusin":return yl=ln(yl,t,e,l,a,n),!0;case"dragenter":return gl=ln(gl,t,e,l,a,n),!0;case"mouseover":return bl=ln(bl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return Un.set(i,ln(Un.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,qn.set(i,ln(qn.get(i)||null,t,e,l,a,n)),!0}return!1}function ym(t){var e=fa(t.target);if(e!==null){var l=Hn(e);if(l!==null){if(e=l.tag,e===13){if(e=Uf(l),e!==null){t.blockedOn=e,fr(t.priority,function(){Df(l)});return}}else if(e===31){if(e=qf(l),e!==null){t.blockedOn=e,fr(t.priority,function(){Df(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=Ac(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);Go=a,l.target.dispatchEvent(a),Go=null}else return e=ja(l),e!==null&&hm(e),t.blockedOn=l,!1;e.shift()}return!0}function wf(t,e,l){qi(t)&&l.delete(e)}function Lh(){Nc=!1,yl!==null&&qi(yl)&&(yl=null),gl!==null&&qi(gl)&&(gl=null),bl!==null&&qi(bl)&&(bl=null),Un.forEach(wf),qn.forEach(wf)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,Nc||(Nc=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,Lh)))}var Ei=null;function Bf(t){Ei!==t&&(Ei=t,At.unstable_scheduleCallback(At.unstable_NormalPriority,function(){Ei===t&&(Ei=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(bs(a||l)===null)continue;break}var i=ja(l);i!==null&&(t.splice(e,3),e-=3,nc(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function Ya(t){function e(s){return xi(s,t)}yl!==null&&xi(yl,t),gl!==null&&xi(gl,t),bl!==null&&xi(bl,t),Un.forEach(e),qn.forEach(e);for(var l=0;l<il.length;l++){var a=il[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<il.length&&(l=il[0],l.blockedOn===null);)ym(l),l.blockedOn===null&&il.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],o=n[Jt]||null;if(typeof i=="function")o||Bf(l);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Jt]||null)c=o.formAction;else if(bs(n)!==null)continue}else c=o.action;typeof c=="function"?l[a+1]=c:(l.splice(a,3),a-=3),Bf(l)}}}function gm(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function xs(t){this._internalRoot=t}Mu.prototype.render=xs.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));var l=e.current,a=le();pm(l,a,t,e,null,null)};Mu.prototype.unmount=xs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pm(t.current,2,null,t,null,null),Nu(),e[La]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kf();t={blockedOn:null,target:t,priority:e};for(var l=0;l<il.length&&e!==0&&e<il[l].priority;l++);il.splice(l,0,t),l===0&&ym(t)}};var Of=Cf.version;if(Of!=="19.2.5")throw Error(E(527,Of,"19.2.5"));F.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=yp(e),t=t!==null?Hf(t):null,t=t===null?null:t.stateNode,t};var jh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(an=__REACT_DEVTOOLS_GLOBAL_HOOK__,!an.isDisabled&&an.supportsFiber))try{Yn=an.inject(jh),te=an}catch{}var an;Du.createRoot=function(t,e){if(!_f(t))throw Error(E(299));var l=!1,a="",n=s0,i=r0,o=f0;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(o=e.onRecoverableError)),e=dm(t,1,!1,null,null,l,a,null,n,i,o,gm),t[La]=e.current,ps(t),new xs(e)};Du.hydrateRoot=function(t,e,l){if(!_f(t))throw Error(E(299));var a=!1,n="",i=s0,o=r0,c=f0,s=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(o=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError),l.formState!==void 0&&(s=l.formState)),e=dm(t,1,!0,e,l??null,a,n,s,i,o,c,gm),e.context=mm(null),l=e.current,a=le(),a=Dc(a),n=ml(a),n.callback=null,pl(l,n,a),l=a,e.current.lanes=l,jn(e,l),De(e),t[La]=e.current,ps(t),new Mu(e)};Du.version="19.2.5"});var Sm=Re((Fv,Em)=>{"use strict";function xm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xm)}catch(t){console.error(t)}}xm(),Em.exports=bm()});var u=Bs(Pn()),_m=Bs(Sm()),ku=Date.now();function ie(){return ku+=1,ku}var wu=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Am(){let e=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),l=a=>+e.find(n=>n.type===a).value;return{hour:l("hour"),minute:l("minute"),second:l("second")}}function Xh(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function _(t=0){let e=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(e)}function Gh(t=0){let e=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"narrow"}).format(e)}function ke(t){let[e,l]=t.split(":").map(Number);return e*60+l}function Tl(t){let e=Math.floor(t/60)%24,l=t%60,a=e<12?"AM":"PM";return`${e%12===0?12:e%12}:${String(l).padStart(2,"0")} ${a}`}function Ja(t){if(t<60)return`${t}m`;let e=Math.floor(t/60),l=t%60;return l?`${e}h ${l}m`:`${e}h`}function Es(t){let e=Math.floor(t/60)%24,l=t%60;return`${String(e).padStart(2,"0")}:${String(l).padStart(2,"0")}`}function Bu(t){if(!t||t.length===0)return{streak:0,freezeUsed:!1};let e=new Set(t),l;if(e.has(_(0)))l=0;else if(e.has(_(-1)))l=-1;else return{streak:0,freezeUsed:!1};let a=0,n=l,i=0,o=!0,c=!1;for(;;)if(e.has(_(n)))a++,i++,!o&&i>=7&&(o=!0,i=0),n-=1;else if(o)o=!1,i=0,c=!0,n-=1;else break;return{streak:a,freezeUsed:c}}function Qh(t){return Bu(t).streak}var Zh=[15,30,45,60,90,120],Um="tasksh.sound.v1",Wn=null;function Vh(){if(!Wn){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;Wn=new t}return Wn.state==="suspended"&&Wn.resume(),Wn}function qm(){try{let t=localStorage.getItem(Um);return t===null?!0:t==="1"}catch{return!0}}function Jh(t){try{localStorage.setItem(Um,t?"1":"0")}catch{}}function Wl(t){if(!qm())return;let e=Vh();if(!e)return;let l=e.currentTime;t.forEach(({freq:a,start:n=0,dur:i=.08,type:o="sine",gain:c=.05})=>{let s=e.createOscillator(),m=e.createGain();s.type=o,s.frequency.setValueAtTime(a,l+n),m.gain.setValueAtTime(1e-4,l+n),m.gain.exponentialRampToValueAtTime(c,l+n+.008),m.gain.exponentialRampToValueAtTime(1e-4,l+n+i),s.connect(m),m.connect(e.destination),s.start(l+n),s.stop(l+n+i+.02)})}var X={click:()=>Wl([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>Wl([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>Wl([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>Wl([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>Wl([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>Wl([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function Kh(){let[t,e]=(0,u.useState)(qm());return[t,()=>{let a=!t;e(a),Jh(a),a&&Wl([{freq:720,dur:.05,gain:.04}])}]}function Fh(t,e=550){let[l,a]=(0,u.useState)(t),n=(0,u.useRef)(t),i=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let o=n.current,c=t;if(o===c)return;let s=performance.now(),m=y=>1-Math.pow(1-y,3),v=y=>{let p=y-s,h=Math.min(1,p/e),x=m(h);a(Math.round(o+(c-o)*x)),h<1?i.current=requestAnimationFrame(v):n.current=c};return i.current=requestAnimationFrame(v),()=>i.current&&cancelAnimationFrame(i.current)},[t,e]),l}function Ee({value:t,className:e,suffix:l=""}){let a=Fh(t);return u.default.createElement("span",{className:e},a,l)}function Wh({axes:t,size:e=220,maxValue:l}){let[a,n]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let b=requestAnimationFrame(()=>n(!0));return()=>cancelAnimationFrame(b)},[]);let i=t.length,o=e/2,c=e/2,s=e/2-34,m=l??Math.max(1,...t.map(b=>b.value)),v=b=>Math.PI*2*b/i-Math.PI/2,y=(b,S)=>{let f=v(b);return[o+Math.cos(f)*s*S,c+Math.sin(f)*s*S]},p=[.25,.5,.75,1],x=t.map((b,S)=>y(S,a?Math.max(.04,b.value/m):.02)).map((b,S)=>`${S===0?"M":"L"}${b[0].toFixed(1)},${b[1].toFixed(1)}`).join(" ")+"Z";return u.default.createElement("svg",{viewBox:`0 0 ${e} ${e}`,width:"100%",height:e,className:"radar-chart"},p.map((b,S)=>{let r=t.map((d,g)=>y(g,b)).map((d,g)=>`${g===0?"M":"L"}${d[0].toFixed(1)},${d[1].toFixed(1)}`).join(" ")+"Z";return u.default.createElement("path",{key:S,d:r,className:"radar-ring"})}),t.map((b,S)=>{let f=y(S,1);return u.default.createElement("line",{key:S,x1:o,y1:c,x2:f[0],y2:f[1],className:"radar-spoke"})}),u.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),t.map((b,S)=>{let f=y(S,1.22),r=y(S,a?Math.max(.04,b.value/m):.02);return u.default.createElement("g",{key:b.key||S},u.default.createElement("circle",{cx:r[0],cy:r[1],r:3.5,fill:b.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),u.default.createElement("text",{x:f[0],y:f[1],textAnchor:"middle",dominantBaseline:"middle",className:"radar-label"},b.label))}))}function Ou({pct:t,size:e=108,stroke:l=9,color:a="#5EEAD4",trackColor:n="#1E2228",label:i,sublabel:o}){let[c,s]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let b=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(b)},[]);let m=e/2-l,v=2*Math.PI*m,y=Math.max(0,Math.min(100,t)),p=v-(c?y/100:0)*v,h=Math.max(8,Math.round(e*.135)),x=Math.max(6.5,Math.round(e*.075));return u.default.createElement("div",{className:"radial-progress-wrap",style:{width:e,height:e}},u.default.createElement("svg",{viewBox:`0 0 ${e} ${e}`,width:e,height:e},u.default.createElement("circle",{cx:e/2,cy:e/2,r:m,fill:"none",stroke:n,strokeWidth:l}),u.default.createElement("circle",{cx:e/2,cy:e/2,r:m,fill:"none",stroke:a,strokeWidth:l,strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:p,transform:`rotate(-90 ${e/2} ${e/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),u.default.createElement("div",{className:"radial-progress-center"},i&&u.default.createElement("span",{className:"radial-progress-label",style:{fontSize:h}},i),o&&u.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:x}},o)))}function Hm({segments:t,size:e=132,stroke:l=18,centerLabel:a,centerSublabel:n}){let[i,o]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let p=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(p)},[]);let c=e/2-l/2,s=2*Math.PI*c,m=Math.max(1e-6,t.reduce((p,h)=>p+Math.max(0,h.value),0)),v=0,y=t.map(p=>{let h=Math.max(0,p.value),x=h/m,b=i?x*s:0,S=s-b,f=v/m*360;return v+=h,{...p,dash:b,gap:S,rotation:f,frac:x}});return u.default.createElement("div",{className:"donut-wrap",style:{width:e,height:e}},u.default.createElement("svg",{viewBox:`0 0 ${e} ${e}`,width:e,height:e},u.default.createElement("circle",{cx:e/2,cy:e/2,r:c,fill:"none",stroke:"#1E2228",strokeWidth:l}),y.map((p,h)=>u.default.createElement("circle",{key:p.key||h,cx:e/2,cy:e/2,r:c,fill:"none",stroke:p.color,strokeWidth:l,strokeDasharray:`${p.dash} ${p.gap}`,strokeDashoffset:0,transform:`rotate(${p.rotation-90} ${e/2} ${e/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:y.length>1?"butt":"round"}))),u.default.createElement("div",{className:"donut-center"},a!==void 0&&u.default.createElement("span",{className:"donut-center-label"},a),n&&u.default.createElement("span",{className:"donut-center-sublabel"},n)))}function $h({counts:t,weeksBack:e=12,colorSteps:l}){let a=l||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],n=0,i=e*7,o=Array.from({length:i},(v,y)=>n-(i-1-y)),c=Math.max(1,...o.map(v=>t[_(v)]||0)),s=[];for(let v=0;v<e;v++)s.push(o.slice(v*7,v*7+7));let m=v=>{if(!v)return 0;let y=v/c;return y>.75?4:y>.5?3:y>.25?2:1};return u.default.createElement("div",{className:"heatmap-wrap"},u.default.createElement("div",{className:"heatmap-grid"},s.map((v,y)=>u.default.createElement("div",{className:"heatmap-col",key:y},v.map((p,h)=>{let x=_(p),b=t[x]||0,S=m(b);return u.default.createElement("span",{key:h,className:`heatmap-cell ${p===0?"today":""}`,style:{background:a[S],animationDelay:`${(y*7+h)*4}ms`},title:`${x}: ${b} completed`})})))),u.default.createElement("div",{className:"heatmap-legend"},u.default.createElement("span",null,"less"),a.map((v,y)=>u.default.createElement("span",{key:y,className:"heatmap-legend-cell",style:{background:v}})),u.default.createElement("span",null,"more")))}function Rh(t){let e=[],l=[];for(let a of t){let n=e.findIndex(i=>a.start>=i);n===-1?(n=e.length,e.push(a.end)):e[n]=a.end,l.push({...a,lane:n})}return{placed:l,laneCount:Math.max(1,e.length)}}function Ih({routines:t,nowMinutes:e}){let[l,a]=(0,u.useState)(!1),[n,i]=(0,u.useState)(0),o=(0,u.useRef)(null);(0,u.useEffect)(()=>{let d=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(d)},[]),(0,u.useEffect)(()=>{if(!o.current)return;let d=o.current,g=new ResizeObserver(N=>{for(let M of N)i(M.contentRect.width)});return g.observe(d),i(d.getBoundingClientRect().width),()=>g.disconnect()},[]);let c=1440,s=e/c*100,m=[0,3,6,9,12,15,18,21,24],v=d=>{let g=d%24;return g===0?"12a":g===12?"12p":g>12?`${g-12}p`:`${g}a`},y=_(0),p=t.map(d=>{let g=ke(d.time);return{r:d,start:g,end:g+Math.max(1,d.duration)}}),{placed:h,laneCount:x}=Rh(p),b=30,S=4,f=7,r=f*2+x*b+(x-1)*S;return u.default.createElement("div",{className:"timeline-wrap"},u.default.createElement("div",{className:"timeline-hours"},m.map(d=>u.default.createElement("div",{key:d,className:"timeline-hour",style:{left:`${d/24*100}%`}},u.default.createElement("span",null,v(d))))),u.default.createElement("div",{className:"timeline-track",ref:o,style:{height:r}},u.default.createElement("div",{className:"timeline-night",style:{left:"0%",width:`${6/24*100}%`}}),u.default.createElement("div",{className:"timeline-night",style:{left:`${22/24*100}%`,width:`${2/24*100}%`}}),m.map(d=>u.default.createElement("div",{key:d,className:"timeline-gridline",style:{left:`${d/24*100}%`}})),u.default.createElement("div",{className:"timeline-elapsed",style:{width:l?`${s}%`:"0%"}}),h.map(({r:d,start:g,lane:N},M)=>{let z=g/c*100,D=Math.max(1,d.duration)/c*100,B=Math.max(.8,Math.min(D,100-z)),O=(d.history||[]).includes(y),w=$l(d.id),Z=B/100*n>44;return u.default.createElement("div",{key:d.id,className:`timeline-block ${O?"done":""}`,style:{left:`${z}%`,top:f+N*(b+S),width:l?`${B}%`:"0%",height:b,transitionDelay:`${M*20}ms`,background:O?"linear-gradient(180deg, #3A4048, #2A2F36)":`linear-gradient(180deg, ${w}, ${w}CC)`,boxShadow:O?"none":`0 0 10px ${w}55`},title:`${d.label} \xB7 ${Tl(g)} \xB7 ${Ja(d.duration)}${O?" \xB7 done":""}`},Z&&u.default.createElement("span",{className:"timeline-block-label"},d.label))}),u.default.createElement("div",{className:"timeline-now",style:{left:`${s}%`,top:-3,bottom:-3}},u.default.createElement("span",{className:"timeline-now-tag"},Tl(e)))),t.length>0&&u.default.createElement("div",{className:"timeline-legend"},t.map(d=>{let g=(d.history||[]).includes(y);return u.default.createElement("span",{key:d.id,className:`timeline-legend-chip ${g?"done":""}`},u.default.createElement("span",{className:"timeline-legend-dot",style:{background:g?"#3A4048":$l(d.id)}}),u.default.createElement("span",{className:"timeline-legend-time"},Tl(ke(d.time))),u.default.createElement("span",{className:"timeline-legend-label"},d.label))})))}var Ph=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[_(-1),_(-2),_(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[_(-1),_(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[_(0),_(-1),_(-2),_(-3),_(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[_(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Ns(){let[t,e]=(0,u.useState)(Am());return(0,u.useEffect)(()=>{let l=setInterval(()=>e(Am()),1e3);return()=>clearInterval(l)},[]),t}function zs(t,e){return(0,u.useMemo)(()=>{let l=[...t].sort((i,o)=>ke(i.time)-ke(o.time));if(l.length===0)return{sorted:l,currentId:null,nextId:null};let a=l.length-1;for(let i=0;i<l.length&&ke(l[i].time)<=e;i++)a=i;let n=(a+1)%l.length;return{sorted:l,currentId:l[a].id,nextId:l[n].id}},[t,e])}function tv({history:t}){let e=new Set(t||[]),l=[-6,-5,-4,-3,-2,-1,0].map(a=>_(a));return u.default.createElement("span",{className:"week-dots"},l.map((a,n)=>u.default.createElement("span",{key:n,className:`week-dot ${e.has(a)?"filled":""}`})))}function ev({routine:t,status:e,index:l,onDelete:a,onToggleToday:n,onSave:i}){let o=ke(t.time),c=o+t.duration,{streak:s,freezeUsed:m}=Bu(t.history),v=(t.history||[]).includes(_(0)),[y,p]=(0,u.useState)(0),h=(0,u.useRef)(!1),x=(0,u.useRef)(0),b=(0,u.useRef)(0),S=(0,u.useRef)(null),f=(0,u.useRef)(!1),[r,d]=(0,u.useState)(!1),[g,N]=(0,u.useState)(!1),[M,z]=(0,u.useState)(t.label),[D,B]=(0,u.useState)(t.time),[O,w]=(0,u.useState)(t.duration),[H,Z]=(0,u.useState)(t.alternatives||[]),yt=()=>{z(t.label),B(t.time),w(t.duration),Z(t.alternatives||[]),N(!0)},k=()=>{let J=M.trim();J&&(i(t.id,{label:J,time:D||t.time,duration:Math.max(5,+O||t.duration),alternatives:H.map(tt=>tt.trim()).filter(Boolean)}),N(!1))},R=J=>{g||(h.current=!0,f.current=!1,S.current=null,x.current=J.clientX,b.current=J.clientY)},dt=J=>{if(!h.current)return;let tt=J.clientX-x.current,Lt=J.clientY-b.current;if(S.current===null){if(Math.abs(tt)<6&&Math.abs(Lt)<6)return;if(S.current=Math.abs(tt)>Math.abs(Lt)?"x":"y",S.current==="y"){h.current=!1;return}}S.current==="x"&&(Math.abs(tt)>4&&(f.current=!0),p(Math.max(-120,Math.min(0,tt))))},ct=()=>{h.current&&(h.current=!1,y<-70?(d(!0),setTimeout(()=>a(t.id),200)):(p(0),f.current||yt()))};return u.default.createElement("div",{className:`routine-row-wrap ${r?"removing":""}`,style:{animationDelay:`${l*35}ms`}},u.default.createElement("div",{className:"routine-delete-bg"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),u.default.createElement("div",{className:`routine-row ${e}`,style:{transform:`translateX(${y}px)`,transition:h.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${v?"#2A2F36":$l(t.id)}`},onPointerDown:R,onPointerMove:dt,onPointerUp:ct,onPointerLeave:ct,onPointerCancel:ct},u.default.createElement("div",{className:"routine-line"},u.default.createElement("span",{className:`routine-node ${v?"quest-done":""}`}),u.default.createElement("span",{className:"routine-connector"})),g?u.default.createElement("div",{className:"routine-edit",onPointerDown:J=>J.stopPropagation()},u.default.createElement("input",{className:"edit-label",value:M,onChange:J=>z(J.target.value),onKeyDown:J=>J.key==="Enter"&&k(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"time",className:"time-input",value:D,onChange:J=>B(J.target.value)}),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:O,onChange:J=>w(J.target.value)}),u.default.createElement("span",{className:"edit-unit"},"min")),u.default.createElement("div",{className:"alt-composer"},u.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),H.map((J,tt)=>u.default.createElement("div",{className:"alt-composer-row",key:tt},u.default.createElement("input",{type:"text",placeholder:`alternative ${tt+1}`,value:J,onChange:Lt=>{let ye=[...H];ye[tt]=Lt.target.value,Z(ye)},onKeyDown:Lt=>Lt.key==="Enter"&&k()}),u.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>Z(H.filter((Lt,ye)=>ye!==tt)),"aria-label":"Remove alternative"},"\xD7"))),u.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>Z([...H,""])},"+ another option")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>N(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:k},"save"))):u.default.createElement("div",{className:"routine-main"},u.default.createElement("div",{className:"routine-top"},u.default.createElement("span",{className:"routine-time"},Tl(o)),e==="current"&&u.default.createElement("span",{className:"live-tag"},"NOW"),s>0&&u.default.createElement("span",{className:"streak-tag"},"\u{1F525}",s,m&&u.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),u.default.createElement("span",{className:"routine-label"},t.label),t.alternatives&&t.alternatives.length>0&&u.default.createElement("span",{className:"routine-alts"},"or: ",t.alternatives.join(" \xB7 ")),u.default.createElement("span",{className:"routine-span"},Tl(o)," \u2013 ",Tl(c)," \xB7 ",Ja(t.duration)),u.default.createElement(tv,{history:t.history}))))}function lv({routines:t}){let e=[-6,-5,-4,-3,-2,-1,0],l=t.length||1,a=e.map(n=>{let i=_(n),o=t.filter(c=>(c.history||[]).includes(i)).length;return{offset:n,pct:Math.round(o/l*100),label:Gh(n)}});return u.default.createElement("div",{className:"week-chart"},a.map((n,i)=>u.default.createElement("div",{className:"week-bar-col",key:i},u.default.createElement("div",{className:"week-bar-track"},u.default.createElement("div",{className:`week-bar-fill ${n.offset===0?"today":""}`,style:{height:`${Math.max(4,n.pct)}%`}})),u.default.createElement("span",{className:"week-bar-label"},n.label))))}function av({routines:t,setRoutines:e}){let l=Ns(),a=l.hour*60+l.minute,{sorted:n,currentId:i,nextId:o}=zs(t,a),c=n.find(k=>k.id===i),s=n.find(k=>k.id===o),[m,v]=(0,u.useState)(""),[y,p]=(0,u.useState)(()=>Es(a)),[h,x]=(0,u.useState)(30),[b,S]=(0,u.useState)(!1),[f,r]=(0,u.useState)([]),[d,g]=(0,u.useState)(!1),N=()=>{let k=m.trim();if(!k){S(!0),setTimeout(()=>S(!1),420),X.error();return}let R=y||Es(a),dt=f.map(ct=>ct.trim()).filter(Boolean);e(ct=>[...ct,{id:ie(),time:R,label:k,duration:Math.max(5,+h||30),history:[],alternatives:dt}]),v(""),p(Es(a)),x(30),r([]),g(!1),X.click()},M=k=>{e(R=>R.filter(dt=>dt.id!==k)),X.delete()},z=k=>{let R=_(0),dt=!1;e(ct=>ct.map(J=>{if(J.id!==k)return J;let tt=(J.history||[]).includes(R);dt=!tt;let Lt=tt?J.history.filter(ye=>ye!==R):[...J.history||[],R];return{...J,history:Lt.slice(-60)}})),dt?X.success():X.click()},D=(k,R)=>e(dt=>dt.map(ct=>ct.id===k?{...ct,...R}:ct)),B=c?ke(c.time)+c.duration:0,O=s?(ke(s.time)-a+1440)%1440||1440:0,w=_(0),H=n.filter(k=>(k.history||[]).includes(w)).length,Z=n.reduce((k,R)=>Math.max(k,Qh(R.history)),0),yt=n.length?Math.round(H/n.length*100):0;return u.default.createElement("div",{className:"task-list routine-list"},u.default.createElement("div",{className:"hero-card"},u.default.createElement("div",{className:"hero-clock-row"},u.default.createElement("span",{className:"hero-clock"},String(l.hour%12===0?12:l.hour%12).padStart(2,"0"),":",String(l.minute).padStart(2,"0"),u.default.createElement("span",{className:"hero-sec"},":",String(l.second).padStart(2,"0")),u.default.createElement("span",{className:"hero-ampm"},l.hour<12?"AM":"PM")),u.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),u.default.createElement("span",{className:"hero-date"},Xh()),u.default.createElement("div",{className:"hero-divider"}),c?u.default.createElement("div",{className:"hero-current"},u.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),u.default.createElement("div",{className:"hero-current-name"},u.default.createElement("span",{className:"pulse-dot"}),c.label),u.default.createElement("span",{className:"hero-sub"},"until ",Tl(B)," \xB7 next: ",s?.label," in ",Ja(O))):u.default.createElement("span",{className:"hero-sub"},"no routines yet")),u.default.createElement("div",{className:"quest-stats"},u.default.createElement("div",{className:"quest-stat-item"},u.default.createElement("span",{className:"quest-stat-value"},u.default.createElement(Ee,{value:H}),u.default.createElement("span",{className:"quest-stat-of"},"/",n.length)),u.default.createElement("span",{className:"quest-stat-label"},"today")),u.default.createElement("div",{className:"quest-stat-item"},u.default.createElement("span",{className:"quest-stat-value amber"},"\u{1F525}",u.default.createElement(Ee,{value:Z})),u.default.createElement("span",{className:"quest-stat-label"},"best streak")),u.default.createElement("div",{className:"quest-stat-item quest-stat-ring"},u.default.createElement(Ou,{pct:yt,size:44,stroke:3.5,label:`${yt}%`}))),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"TODAY'S SCHEDULE")),u.default.createElement(Ih,{routines:n,nowMinutes:a}),u.default.createElement("div",{className:`composer ${b?"shake":""}`},u.default.createElement("input",{type:"text",placeholder:"new routine...",value:m,onChange:k=>v(k.target.value),onKeyDown:k=>k.key==="Enter"&&N()}),u.default.createElement("input",{type:"time",className:"time-input",value:y,onChange:k=>p(k.target.value)}),u.default.createElement("button",{type:"button",className:`alt-toggle-btn ${d?"active":""}`,onClick:()=>g(k=>!k),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),u.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),d&&u.default.createElement("div",{className:"alt-composer"},u.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),f.map((k,R)=>u.default.createElement("div",{className:"alt-composer-row",key:R},u.default.createElement("input",{type:"text",placeholder:`alternative ${R+1}, e.g. "Drawing"`,value:k,onChange:dt=>{let ct=[...f];ct[R]=dt.target.value,r(ct)},onKeyDown:dt=>dt.key==="Enter"&&N()}),u.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>r(f.filter((dt,ct)=>ct!==R)),"aria-label":"Remove alternative"},"\xD7"))),u.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>r([...f,""])},"+ another option")),u.default.createElement("div",{className:"duration-chips"},Zh.map(k=>u.default.createElement("button",{key:k,className:h===k?"active":"",onClick:()=>x(k)},Ja(k))),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:h,onChange:k=>x(+k.target.value||5)})),n.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):n.map((k,R)=>u.default.createElement(ev,{key:k.id,routine:k,index:R,status:k.id===i?"current":k.id===o?"next":"idle",onDelete:M,onToggleToday:z,onSave:D})),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"7-DAY COMPLETION")),u.default.createElement(lv,{routines:n}))}function nv(){let t=new Date,e=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),l=+e.find(o=>o.type==="year").value,a=+e.find(o=>o.type==="month").value,n=new Date(l,a,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(t);return{y:l,m:a,daysInMonth:n,monthLabel:i}}function iv(t,e,l){return`${t}-${String(e).padStart(2,"0")}-${String(l).padStart(2,"0")}`}function Ym(t){let e=new Set(t||[]),l=0;for(let a=-6;a<=0;a++)e.has(_(a))&&l++;return l}function uv(t){if(!t)return null;let e=new Date(t+"T00:00:00+05:30"),l=new Date(_(0)+"T00:00:00+05:30"),a=Math.round((e-l)/864e5);return a<0?{text:`${Math.abs(a)}d overdue`,overdue:!0}:a===0?{text:"due today",overdue:!1}:{text:`${a}d to go`,overdue:!1}}var ov=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[_(0),_(-1),_(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[_(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[_(0)]}],cv=[{id:1,name:"Notion Template",dueDate:_(7),tasks:[{id:ie(),text:"Design layout",done:!0},{id:ie(),text:"Write docs",done:!1},{id:ie(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:_(7),tasks:[{id:ie(),text:"Script draft",done:!1},{id:ie(),text:"Record",done:!1}]}];function sv({history:t}){let{y:e,m:l,daysInMonth:a,monthLabel:n}=nv(),i=new Set(t||[]),o=_(0),c=Array.from({length:a},(s,m)=>m+1);return u.default.createElement("div",{className:"month-grid-wrap"},u.default.createElement("span",{className:"month-grid-label"},n),u.default.createElement("div",{className:"month-grid"},c.map(s=>{let m=iv(e,l,s);return u.default.createElement("span",{key:s,className:`month-cell ${i.has(m)?"filled":""} ${m===o?"today":""}`,style:{animationDelay:`${s*6}ms`},title:m})})))}function rv({habit:t,onToggleToday:e,onDelete:l,onSave:a}){let n=(t.history||[]).includes(_(0)),{streak:i,freezeUsed:o}=Bu(t.history),c=Ym(t.history),s=Math.min(100,Math.round(c/t.weeklyGoal*100)),[m,v]=(0,u.useState)(!1),[y,p]=(0,u.useState)(t.icon),[h,x]=(0,u.useState)(t.label),[b,S]=(0,u.useState)(t.weeklyGoal),f=()=>{p(t.icon),x(t.label),S(t.weeklyGoal),v(!0)},r=()=>{let d=h.trim();d&&(a(t.id,{icon:y.trim()||t.icon,label:d,weeklyGoal:Math.max(1,Math.min(7,+b||t.weeklyGoal))}),v(!1))};return m?u.default.createElement("div",{className:"vault-card"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{className:"duration-input",style:{width:44},value:y,onChange:d=>p(d.target.value),maxLength:2}),u.default.createElement("input",{className:"edit-label",style:{flex:1},value:h,onChange:d=>x(d.target.value),onKeyDown:d=>d.key==="Enter"&&r(),autoFocus:!0})),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:b,onChange:d=>S(d.target.value)}),u.default.createElement("span",{className:"edit-unit"},"x / week")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:r},"save")))):u.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${$l(t.id)}`}},u.default.createElement("div",{className:"vault-card-top"},u.default.createElement("span",{className:"vault-card-icon",style:{color:$l(t.id)}},t.icon),u.default.createElement("div",{className:"vault-card-title"},u.default.createElement("span",{className:"vault-card-label"},t.label),u.default.createElement("span",{className:"vault-card-goal"},"weekly: ",t.weeklyGoal,"x")),u.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"vault-card-del",onClick:()=>l(t.id),"aria-label":"Delete habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),u.default.createElement(sv,{history:t.history}),u.default.createElement("div",{className:"vault-card-bottom"},u.default.createElement("div",{className:"vault-card-ring-row"},u.default.createElement(Ou,{pct:s,size:34,stroke:3.5,color:$l(t.id)}),u.default.createElement("span",{className:"vault-card-pct"},s,"% ",u.default.createElement("span",{className:"muted"},"(",c,"/",t.weeklyGoal,")"))),i>0&&u.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,o&&u.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),u.default.createElement("button",{className:`vault-check ${n?"done":""}`,onClick:()=>e(t.id)},n?"\u2713 completed today":"mark complete today"))}function fv({habits:t,setHabits:e}){let[l,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(7),[o,c]=(0,u.useState)(!1),s=()=>{let p=l.trim();if(!p){c(!0),setTimeout(()=>c(!1),420),X.error();return}e(h=>[...h,{id:ie(),icon:"\u25C6",label:p,weeklyGoal:n,history:[]}]),a(""),i(7),X.click()},m=p=>{e(h=>h.filter(x=>x.id!==p)),X.delete()},v=(p,h)=>e(x=>x.map(b=>b.id===p?{...b,...h}:b)),y=p=>{let h=_(0),x=!1;e(b=>b.map(S=>{if(S.id!==p)return S;let f=(S.history||[]).includes(h);x=!f;let r=f?S.history.filter(d=>d!==h):[...S.history||[],h];return{...S,history:r.slice(-370)}})),x?X.success():X.click()};return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"HABIT-STREAK-TRACKING")),u.default.createElement("div",{className:"vault-grid"},t.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):t.map(p=>u.default.createElement(rv,{key:p.id,habit:p,onToggleToday:y,onDelete:m,onSave:v}))),u.default.createElement("div",{className:`composer ${o?"shake":""}`},u.default.createElement("input",{type:"text",placeholder:"new habit...",value:l,onChange:p=>a(p.target.value),onKeyDown:p=>p.key==="Enter"&&s()}),u.default.createElement("button",{className:"add-btn",onClick:s,"aria-label":"Add habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(p=>u.default.createElement("button",{key:p,className:n===p?"active":"",onClick:()=>i(p)},p,"x/wk"))))}function dv({projectId:t,task:e,onToggle:l,onDelete:a,onEdit:n}){let[i,o]=(0,u.useState)(!1),[c,s]=(0,u.useState)(e.text),m=()=>{let v=c.trim();v&&n(t,e.id,v),o(!1)};return i?u.default.createElement("div",{className:"project-task-row"},u.default.createElement("input",{className:"project-task-edit",value:c,onChange:v=>s(v.target.value),onKeyDown:v=>v.key==="Enter"&&m(),onBlur:m,autoFocus:!0})):u.default.createElement("div",{className:"project-task-row"},u.default.createElement(jm,{checked:e.done,onChange:()=>l(t,e.id),color:"#5EEAD4"}),u.default.createElement("span",{className:`project-task-text ${e.done?"done":""}`,onClick:()=>o(!0)},e.text),u.default.createElement("button",{className:"del-btn",onClick:()=>a(t,e.id),"aria-label":"Delete task"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function mv({project:t,onDelete:e,onAddTask:l,onToggleTask:a,onDeleteTask:n,onEditTask:i,onSave:o}){let[c,s]=(0,u.useState)(""),m=t.tasks.length,v=t.tasks.filter(M=>M.done).length,y=m?Math.round(v/m*100):0,p=uv(t.dueDate),[h,x]=(0,u.useState)(!1),[b,S]=(0,u.useState)(t.name),[f,r]=(0,u.useState)(t.dueDate||""),d=()=>{let M=c.trim();M&&(l(t.id,M),s(""))},g=()=>{S(t.name),r(t.dueDate||""),x(!0)},N=()=>{let M=b.trim();M&&(o(t.id,{name:M,dueDate:f||null}),x(!1))};return h?u.default.createElement("div",{className:"project-card"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:b,onChange:M=>S(M.target.value),onKeyDown:M=>M.key==="Enter"&&N(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"date",className:"time-input",value:f,onChange:M=>r(M.target.value)})),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>x(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:N},"save")))):u.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${$l(t.id)}`}},u.default.createElement("div",{className:"project-card-top"},u.default.createElement("span",{className:"project-name"},t.name),u.default.createElement("div",{className:"project-card-actions"},u.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit project"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"vault-card-del",onClick:()=>e(t.id),"aria-label":"Delete project"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),p&&u.default.createElement("span",{className:`project-due ${p.overdue?"overdue":""}`},p.text),u.default.createElement("div",{className:"progress-track small"},u.default.createElement("div",{className:"progress-fill",style:{width:`${y}%`}})),u.default.createElement("span",{className:"vault-card-pct"},v,"/",m," tasks \xB7 ",y,"%"),u.default.createElement("div",{className:"project-tasks"},t.tasks.map(M=>u.default.createElement(dv,{key:M.id,projectId:t.id,task:M,onToggle:a,onDelete:n,onEdit:i}))),u.default.createElement("div",{className:"project-add-task"},u.default.createElement("input",{type:"text",placeholder:"+ add task...",value:c,onChange:M=>s(M.target.value),onKeyDown:M=>M.key==="Enter"&&d()})))}function pv({projects:t,setProjects:e}){let[l,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[o,c]=(0,u.useState)(!1),s=()=>{let b=l.trim();if(!b){c(!0),setTimeout(()=>c(!1),420),X.error();return}e(S=>[...S,{id:ie(),name:b,dueDate:n||null,tasks:[]}]),a(""),i(""),X.click()},m=b=>{e(S=>S.filter(f=>f.id!==b)),X.delete()},v=(b,S)=>e(f=>f.map(r=>r.id===b?{...r,...S}:r)),y=(b,S)=>{e(f=>f.map(r=>r.id===b?{...r,tasks:[...r.tasks,{id:ie(),text:S,done:!1}]}:r)),X.click()},p=(b,S)=>{e(f=>f.map(r=>r.id!==b?r:{...r,tasks:r.tasks.map(d=>d.id===S?{...d,done:!d.done}:d)})),X.success()},h=(b,S)=>{e(f=>f.map(r=>r.id!==b?r:{...r,tasks:r.tasks.filter(d=>d.id!==S)})),X.delete()},x=(b,S,f)=>e(r=>r.map(d=>d.id!==b?d:{...d,tasks:d.tasks.map(g=>g.id===S?{...g,text:f}:g)}));return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"PROJECT-MANAGER")),u.default.createElement("div",{className:"vault-grid"},t.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no projects yet")):t.map(b=>u.default.createElement(mv,{key:b.id,project:b,onDelete:m,onAddTask:y,onToggleTask:p,onDeleteTask:h,onEditTask:x,onSave:v}))),u.default.createElement("div",{className:`composer ${o?"shake":""}`},u.default.createElement("input",{type:"text",placeholder:"new project...",value:l,onChange:b=>a(b.target.value),onKeyDown:b=>b.key==="Enter"&&s()}),u.default.createElement("input",{type:"date",className:"time-input",value:n,onChange:b=>i(b.target.value)}),u.default.createElement("button",{className:"add-btn",onClick:s,"aria-label":"Add project"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function hv({vaultHabits:t,setVaultHabits:e,projects:l,setProjects:a}){return u.default.createElement("div",{className:"task-list vault-scroll"},u.default.createElement(fv,{habits:t,setHabits:e}),u.default.createElement(pv,{projects:l,setProjects:a}))}var $e=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],Nm=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function $l(t){let e=typeof t=="number"?t:String(t).split("").reduce((l,a)=>l+a.charCodeAt(0),0);return Nm[Math.abs(e)%Nm.length]}var $n=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Lm(t,e,l){let a=t.reduce((o,c)=>o+c.xp*(c.history?.length||0),0),n=e.reduce((o,c)=>o+c.xp*(c.history?.length||0),0),i=l.reduce((o,c)=>o+c.cost*(c.claimed?.length||0),0);return a-n-i}function vv(t,e,l){let a=e.filter(i=>i.area===t).reduce((i,o)=>i+o.xp*(o.history?.length||0),0),n=l.filter(i=>i.area===t).reduce((i,o)=>i+o.xp*(o.history?.length||0),0);return a-n}function Ss(t){return 50*t*(t-1)}function yv(t){let e=Math.max(0,t),l=Math.max(1,Math.floor((50+Math.sqrt(2500+200*e))/100)),a=e-Ss(l),n=Ss(l+1)-Ss(l);return{level:l,into:a,span:n}}function gv(t){let e=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],l=t,a="";for(let[n,i]of e)for(;l>=n;)a+=i,l-=n;return a}function bv(t){if(t<=$n.length)return $n[t-1];let e=t-$n.length+1;return`${$n[$n.length-1]} ${gv(e)}`}var xv=[{id:1,label:"Deep Work",area:"work",xp:40,history:[_(0),_(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[_(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Ev=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],Sv=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function Av({habit:t,onToggleToday:e,onDelete:l,onSave:a}){let n=(t.history||[]).includes(_(0)),{streak:i,freezeUsed:o}=Bu(t.history),c=$e.find(r=>r.key===t.area)||$e[0],[s,m]=(0,u.useState)(!1),[v,y]=(0,u.useState)(t.label),[p,h]=(0,u.useState)(t.area),[x,b]=(0,u.useState)(t.xp),S=()=>{y(t.label),h(t.area),b(t.xp),m(!0)},f=()=>{let r=v.trim();r&&(a(t.id,{label:r,area:p,xp:Math.max(1,+x||t.xp)}),m(!1))};return s?u.default.createElement("div",{className:"quest-habit-card good editing"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:v,onChange:r=>y(r.target.value),onKeyDown:r=>r.key==="Enter"&&f(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},$e.map(r=>u.default.createElement("button",{key:r.key,type:"button",className:`area-chip ${p===r.key?"active":""}`,style:{"--ac":r.color},onClick:()=>h(r.key)},r.label))),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:x,onChange:r=>b(r.target.value)}),u.default.createElement("span",{className:"edit-unit"},"XP")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>m(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:f},"save")))):u.default.createElement("div",{className:"quest-habit-card good"},u.default.createElement("span",{className:"area-dot",style:{background:c.color}}),u.default.createElement("div",{className:"quest-habit-main"},u.default.createElement("span",{className:"quest-habit-label"},t.label),u.default.createElement("span",{className:"quest-habit-meta"},"+",t.xp," XP \xB7 ",c.label,i>0?` \xB7 \u{1F525}${i}${o?" \u2744\uFE0F":""}`:"")),u.default.createElement("button",{className:`quest-check ${n?"done":""}`,onClick:()=>e(t.id),"aria-label":"Mark done today"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:n?0:24,transition:"stroke-dashoffset 220ms ease"}}))),u.default.createElement("button",{className:"vault-card-edit",onClick:S,"aria-label":"Edit habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"del-btn",onClick:()=>l(t.id),"aria-label":"Delete habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Nv({habit:t,onToggleToday:e,onDelete:l,onSave:a}){let n=(t.history||[]).includes(_(0)),i=$e.find(f=>f.key===t.area)||$e[0],o=Ym(t.history),[c,s]=(0,u.useState)(!1),[m,v]=(0,u.useState)(t.label),[y,p]=(0,u.useState)(t.area),[h,x]=(0,u.useState)(t.xp),b=()=>{v(t.label),p(t.area),x(t.xp),s(!0)},S=()=>{let f=m.trim();f&&(a(t.id,{label:f,area:y,xp:Math.max(1,+h||t.xp)}),s(!1))};return c?u.default.createElement("div",{className:"quest-habit-card bad editing"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:m,onChange:f=>v(f.target.value),onKeyDown:f=>f.key==="Enter"&&S(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},$e.map(f=>u.default.createElement("button",{key:f.key,type:"button",className:`area-chip ${y===f.key?"active":""}`,style:{"--ac":f.color},onClick:()=>p(f.key)},f.label))),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:h,onChange:f=>x(f.target.value)}),u.default.createElement("span",{className:"edit-unit"},"XP")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>s(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:S},"save")))):u.default.createElement("div",{className:"quest-habit-card bad"},u.default.createElement("span",{className:"area-dot",style:{background:i.color}}),u.default.createElement("div",{className:"quest-habit-main"},u.default.createElement("span",{className:"quest-habit-label"},t.label),u.default.createElement("span",{className:"quest-habit-meta"},"-",t.xp," XP \xB7 ",i.label," \xB7 ",o,"x this week")),u.default.createElement("button",{className:`quest-check bad-check ${n?"done":""}`,onClick:()=>e(t.id),"aria-label":"Log slip today"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),u.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"del-btn",onClick:()=>l(t.id),"aria-label":"Delete habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function zv({reward:t,canClaim:e,onClaim:l,onDelete:a,onSave:n}){let[i,o]=(0,u.useState)(!1),[c,s]=(0,u.useState)(t.label),[m,v]=(0,u.useState)(t.cost),y=()=>{s(t.label),v(t.cost),o(!0)},p=()=>{let h=c.trim();h&&(n(t.id,{label:h,cost:Math.max(1,+m||t.cost)}),o(!1))};return i?u.default.createElement("div",{className:"reward-card"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:c,onChange:h=>s(h.target.value),onKeyDown:h=>h.key==="Enter"&&p(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:m,onChange:h=>v(h.target.value)}),u.default.createElement("span",{className:"edit-unit"},"XP cost")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>o(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:p},"save")))):u.default.createElement("div",{className:"reward-card"},u.default.createElement("div",{className:"reward-top"},u.default.createElement("span",{className:"reward-label"},t.label),u.default.createElement("div",{className:"project-card-actions"},u.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit reward"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"vault-card-del",onClick:()=>a(t.id),"aria-label":"Delete reward"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),u.default.createElement("span",{className:"reward-cost"},t.cost," XP"),u.default.createElement("button",{className:"reward-claim",disabled:!e,onClick:()=>l(t.id)},e?"claim reward":"not enough XP"),t.claimed?.length>0&&u.default.createElement("span",{className:"reward-claimed-count"},"claimed ",t.claimed.length,"x"))}function Tv({goodHabits:t,setGoodHabits:e,badHabits:l,setBadHabits:a,rewards:n,setRewards:i}){let o=(0,u.useMemo)(()=>Lm(t,l,n),[t,l,n]),{level:c,into:s,span:m}=yv(o),v=Math.round(s/m*100),y=A=>{let G=_(0),st=!1;e(at=>at.map(Nt=>{if(Nt.id!==A)return Nt;let jt=(Nt.history||[]).includes(G);st=!jt;let Il=jt?Nt.history.filter(Pl=>Pl!==G):[...Nt.history||[],G];return{...Nt,history:Il.slice(-370)}})),st?X.success():X.click()},p=A=>{let G=_(0),st=!1;a(at=>at.map(Nt=>{if(Nt.id!==A)return Nt;let jt=(Nt.history||[]).includes(G);st=!jt;let Il=jt?Nt.history.filter(Pl=>Pl!==G):[...Nt.history||[],G];return{...Nt,history:Il.slice(-370)}})),st?X.error():X.click()},h=A=>{e(G=>G.filter(st=>st.id!==A)),X.delete()},x=A=>{a(G=>G.filter(st=>st.id!==A)),X.delete()},b=(A,G)=>e(st=>st.map(at=>at.id===A?{...at,...G}:at)),S=(A,G)=>a(st=>st.map(at=>at.id===A?{...at,...G}:at)),f=A=>{let G=_(0);i(st=>st.map(at=>at.id===A?{...at,claimed:[...at.claimed||[],G]}:at)),X.success()},r=A=>{i(G=>G.filter(st=>st.id!==A)),X.delete()},d=(A,G)=>i(st=>st.map(at=>at.id===A?{...at,...G}:at)),[g,N]=(0,u.useState)(""),[M,z]=(0,u.useState)("work"),[D,B]=(0,u.useState)(20),[O,w]=(0,u.useState)(""),[H,Z]=(0,u.useState)("work"),[yt,k]=(0,u.useState)(20),[R,dt]=(0,u.useState)(""),[ct,J]=(0,u.useState)(100),tt=()=>{let A=g.trim();A&&(e(G=>[...G,{id:ie(),label:A,area:M,xp:+D||10,history:[]}]),N(""),X.click())},Lt=()=>{let A=O.trim();A&&(a(G=>[...G,{id:ie(),label:A,area:H,xp:+yt||10,history:[]}]),w(""),X.click())},ye=()=>{let A=R.trim();A&&(i(G=>[...G,{id:ie(),label:A,cost:+ct||50,claimed:[]}]),dt(""),X.click())},Cu=$e.map(A=>({key:A.key,label:A.label,color:A.color,value:Math.max(0,vv(A.key,t,l))})),Ml=t.reduce((A,G)=>A+G.xp*(G.history?.length||0),0),Rl=l.reduce((A,G)=>A+G.xp*(G.history?.length||0),0);return u.default.createElement("div",{className:"task-list vault-scroll"},u.default.createElement("div",{className:"hero-card hero-card-viz"},u.default.createElement("div",{className:"hero-viz-row"},u.default.createElement(Ou,{pct:v,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${c}`,sublabel:bv(c)}),u.default.createElement("div",{className:"hero-viz-stats"},u.default.createElement("span",{className:"hero-xp-total"},u.default.createElement(Ee,{value:o})," ",u.default.createElement("small",null,"XP")),u.default.createElement("span",{className:"hero-xp-sub"},s,"/",m," to next level"),u.default.createElement("div",{className:"hero-xp-split"},u.default.createElement("span",{className:"hero-xp-earned"},"+",u.default.createElement(Ee,{value:Ml})),u.default.createElement("span",{className:"hero-xp-lost"},"\u2212",u.default.createElement(Ee,{value:Rl})))))),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"LIFE-AREAS")),u.default.createElement("div",{className:"radar-card"},u.default.createElement(Wh,{axes:Cu,size:230})),(Ml>0||Rl>0)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"XP SOURCE")),u.default.createElement("div",{className:"donut-card"},u.default.createElement(Hm,{size:120,stroke:16,centerLabel:o,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:Ml,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Rl,color:"#F0576B"}]}),u.default.createElement("div",{className:"donut-legend"},u.default.createElement("div",{className:"donut-legend-row"},u.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),u.default.createElement("span",null,"Earned from good habits"),u.default.createElement("span",{className:"donut-legend-val"},u.default.createElement(Ee,{value:Ml}))),u.default.createElement("div",{className:"donut-legend-row"},u.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),u.default.createElement("span",null,"Lost to bad habits"),u.default.createElement("span",{className:"donut-legend-val"},u.default.createElement(Ee,{value:Rl})))))),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"GOOD-HABITS")),u.default.createElement("div",{className:"quest-habit-list"},t.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no good habits yet")):t.map(A=>u.default.createElement(Av,{key:A.id,habit:A,onToggleToday:y,onDelete:h,onSave:b}))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{type:"text",placeholder:"new good habit...",value:g,onChange:A=>N(A.target.value),onKeyDown:A=>A.key==="Enter"&&tt()}),u.default.createElement("button",{className:"add-btn",onClick:tt,"aria-label":"Add good habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"duration-chips"},$e.map(A=>u.default.createElement("button",{key:A.key,className:M===A.key?"active":"",onClick:()=>z(A.key)},A.label)),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:D,onChange:A=>B(+A.target.value||5)})),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"BAD-HABITS")),u.default.createElement("div",{className:"quest-habit-list"},l.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no bad habits tracked")):l.map(A=>u.default.createElement(Nv,{key:A.id,habit:A,onToggleToday:p,onDelete:x,onSave:S}))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:O,onChange:A=>w(A.target.value),onKeyDown:A=>A.key==="Enter"&&Lt()}),u.default.createElement("button",{className:"add-btn",onClick:Lt,"aria-label":"Add bad habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"duration-chips"},$e.map(A=>u.default.createElement("button",{key:A.key,className:H===A.key?"active":"",onClick:()=>Z(A.key)},A.label)),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:yt,onChange:A=>k(+A.target.value||5)})),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"REWARD-CENTER")),u.default.createElement("div",{className:"vault-grid"},n.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(A=>u.default.createElement(zv,{key:A.id,reward:A,canClaim:o>=A.cost,onClaim:f,onDelete:r,onSave:d}))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{type:"text",placeholder:"new reward...",value:R,onChange:A=>dt(A.target.value),onKeyDown:A=>A.key==="Enter"&&ye()}),u.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:ct,onChange:A=>J(+A.target.value||50)}),u.default.createElement("button",{className:"add-btn",onClick:ye,"aria-label":"Add reward"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Mv=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function Dv(t=1e3*30){let[e,l]=(0,u.useState)(Date.now());return(0,u.useEffect)(()=>{let a=setInterval(()=>l(Date.now()),t);return()=>clearInterval(a)},[t]),e}function kv(t,e){let l=Math.floor((e-t)/1e3);if(l<60)return"just now";let a=Math.floor(l/60);if(a<60)return`${a}m ago`;let n=Math.floor(a/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function jm({checked:t,onChange:e,color:l}){return u.default.createElement("button",{onClick:e,"aria-checked":t,role:"checkbox",className:"checkbox-btn",style:{"--c":l}},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:t?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function wv({task:t,now:e,onToggle:l,onDelete:a,index:n}){let[i,o]=(0,u.useState)(!1),c=wu.find(m=>m.key===t.priority)||wu[0],s=()=>{o(!0),setTimeout(()=>a(t.id),220)};return u.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${n*35}ms`}},u.default.createElement(jm,{checked:t.done,onChange:()=>l(t.id),color:c.color}),u.default.createElement("div",{className:"task-main"},u.default.createElement("span",{className:`task-text ${t.done?"done":""}`},t.text),u.default.createElement("span",{className:"task-meta"},u.default.createElement("span",{className:"prio-dot",style:{background:c.color}}),u.default.createElement("span",{className:"prio-label"},c.label),u.default.createElement("span",{className:"dot-sep"},"\xB7"),u.default.createElement("span",null,kv(t.createdAt,e)))),u.default.createElement("button",{className:"del-btn",onClick:s,"aria-label":"Delete task"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var zm="tasksh.tasks.v1",Tm="tasksh.routines.v1",Mm="tasksh.vaulthabits.v1",Dm="tasksh.projects.v1",km="tasksh.goodhabits.v1",wm="tasksh.badhabits.v1",Bm="tasksh.rewards.v1",Om="tasksh.deviceid.v1",As="tasksh.notifyenabled.v1",Ts="https://tasksh-notify.techcraftor.workers.dev",Bv="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function Ov(t){let e="=".repeat((4-t.length%4)%4),l=(t+e).replace(/-/g,"+").replace(/_/g,"/"),a=atob(l),n=new Uint8Array(a.length);for(let i=0;i<a.length;i++)n[i]=a.charCodeAt(i);return n}function Ms(){let t=localStorage.getItem(Om);return t||(t="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Om,t)),t}async function Cv(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let e=await navigator.serviceWorker.ready,l=await e.pushManager.getSubscription();l||(l=await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ov(Bv)}));let a=Ms();if(!(await fetch(`${Ts}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:a,subscription:l.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function _v(){try{let l=await(await navigator.serviceWorker.ready).pushManager.getSubscription();l&&await l.unsubscribe()}catch{}let t=Ms();try{await fetch(`${Ts}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t})})}catch{}}async function Cm(t){let e=Ms();try{await fetch(`${Ts}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e,routines:t.map(l=>({id:l.id,time:l.time,label:l.label}))})})}catch{}}function Fl(t,e){try{let l=localStorage.getItem(t);return l?JSON.parse(l):e}catch{return e}}function Uv(t){typeof t=="number"&&Number.isFinite(t)&&t>ku&&(ku=t)}function qv(t){let e=0,l=a=>{typeof a=="number"&&Number.isFinite(a)&&a>e&&(e=a)};return(t.tasks||[]).forEach(a=>l(a?.id)),(t.routines||[]).forEach(a=>l(a?.id)),(t.vaultHabits||[]).forEach(a=>l(a?.id)),(t.goodHabits||[]).forEach(a=>l(a?.id)),(t.badHabits||[]).forEach(a=>l(a?.id)),(t.rewards||[]).forEach(a=>l(a?.id)),(t.projects||[]).forEach(a=>{l(a?.id),(a?.tasks||[]).forEach(n=>l(n?.id))}),e}function Hv({routines:t,setRoutines:e,tasks:l,setTasks:a,vaultHabits:n,goodHabits:i,rewards:o,setRewards:c,totalXP:s,setTab:m}){let v=Ns(),y=v.hour*60+v.minute,{sorted:p,currentId:h,nextId:x}=zs(t,y),b=p.find(w=>w.id===h),S=p.find(w=>w.id===x),f=_(0),r=w=>{let H=!1;e(Z=>Z.map(yt=>{if(yt.id!==w)return yt;let k=(yt.history||[]).includes(f);H=!k;let R=k?yt.history.filter(dt=>dt!==f):[...yt.history||[],f];return{...yt,history:R.slice(-60)}})),H?X.success():X.click()},d=(0,u.useMemo)(()=>{let w={high:0,mid:1,low:2};return[...l].filter(H=>!H.done).sort((H,Z)=>w[H.priority]-w[Z.priority])},[l]),g=w=>{a(H=>H.map(Z=>Z.id===w?{...Z,done:!Z.done}:Z)),X.success()},N=(0,u.useMemo)(()=>o.filter(w=>s>=w.cost),[o,s]),M=w=>{c(H=>H.map(Z=>Z.id===w?{...Z,claimed:[...Z.claimed||[],f]}:Z)),X.success()},z=(0,u.useMemo)(()=>{let w={},H=Z=>{(Z||[]).forEach(yt=>{w[yt]=(w[yt]||0)+1})};return t.forEach(Z=>H(Z.history)),n.forEach(Z=>H(Z.history)),i.forEach(Z=>H(Z.history)),w},[t,n,i]),D=b||S,B=!!b,O=D?(D.history||[]).includes(f):!1;return u.default.createElement("div",{className:"task-list today-view"},u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,B?"HAPPENING NOW":"NEXT UP")),D?u.default.createElement("div",{className:"today-card"},u.default.createElement("div",{className:"today-card-row"},u.default.createElement("span",{className:"today-card-time"},Tl(ke(D.time))),u.default.createElement("span",{className:"today-card-label"},D.label)),u.default.createElement("div",{className:"today-card-sub"},B?`in progress \xB7 ${Ja(D.duration)}`:`in ${Math.max(0,ke(D.time)-y)}m \xB7 ${Ja(D.duration)}`),u.default.createElement("button",{className:`today-mark-btn ${O?"done":""}`,onClick:()=>r(D.id)},O?"\u2713 completed today":"mark complete")):u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no routines set up yet")),u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,"ACTIVITY")),u.default.createElement($h,{counts:z,weeksBack:12}),u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,"OPEN TASKS"),d.length>0&&u.default.createElement("button",{className:"today-view-all",onClick:()=>m("tasks")},"view all in tasks \u2192")),d.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):u.default.createElement("div",{className:"today-list"},d.slice(0,5).map((w,H)=>u.default.createElement("div",{key:w.id,className:"today-task-row",style:{animationDelay:`${H*35}ms`}},u.default.createElement("button",{className:"today-task-check",onClick:()=>g(w.id),"aria-label":"Complete task"}),u.default.createElement("span",{className:"today-task-text"},w.text),u.default.createElement("span",{className:`today-prio-dot ${w.priority}`}))),d.length>5&&u.default.createElement("button",{className:"today-more",onClick:()=>m("tasks")},"+",d.length-5," more")),u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),u.default.createElement("span",{className:"today-xp-total"},u.default.createElement(Ee,{value:s})," XP")),N.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):u.default.createElement("div",{className:"today-list"},N.map((w,H)=>u.default.createElement("div",{key:w.id,className:"today-task-row",style:{animationDelay:`${H*35}ms`}},u.default.createElement("span",{className:"today-task-text"},w.label),u.default.createElement("span",{className:"today-reward-cost"},w.cost," XP"),u.default.createElement("button",{className:"today-claim-btn",onClick:()=>M(w.id)},"claim")))))}function Yv(){let[t,e]=(0,u.useState)("today"),[l,a]=Kh(),n=T=>{T!==t&&X.whoosh(),e(T)},[i,o]=(0,u.useState)(()=>Fl(zm,Mv)),[c,s]=(0,u.useState)(()=>Fl(Tm,Ph)),[m,v]=(0,u.useState)(()=>Fl(Mm,ov)),[y,p]=(0,u.useState)(()=>Fl(Dm,cv)),[h,x]=(0,u.useState)(()=>Fl(km,xv)),[b,S]=(0,u.useState)(()=>Fl(wm,Ev)),[f,r]=(0,u.useState)(()=>Fl(Bm,Sv)),d=(0,u.useMemo)(()=>Lm(h,b,f),[h,b,f]),[g,N]=(0,u.useState)(""),[M,z]=(0,u.useState)("mid"),[D,B]=(0,u.useState)("all"),O=(0,u.useRef)(null),w=(0,u.useRef)(null),[H,Z]=(0,u.useState)(null),yt=Dv(),[k,R]=(0,u.useState)(()=>localStorage.getItem(As)==="1"),[dt,ct]=(0,u.useState)(!1);(0,u.useEffect)(()=>{k&&Cm(c)},[c,k]);let J=async()=>{if(!dt){ct(!0);try{k?(await _v(),localStorage.setItem(As,"0"),R(!1),tt("success","Notifications turned off")):(await Cv(),await Cm(c),localStorage.setItem(As,"1"),R(!0),tt("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(T){tt("error",T.message||"Couldn't set up notifications")}finally{ct(!1)}}},tt=(T,Y)=>{Z({type:T,text:Y})};(0,u.useEffect)(()=>{if(!H)return;let T=setTimeout(()=>Z(null),3200);return()=>clearTimeout(T)},[H]);let Lt=()=>{try{let T={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:c,vaultHabits:m,projects:y,goodHabits:h,badHabits:b,rewards:f}},Y=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),zt=URL.createObjectURL(Y),Tt=_(0),Ft=document.createElement("a");Ft.href=zt,Ft.download=`tasks-sh-backup-${Tt}.json`,document.body.appendChild(Ft),Ft.click(),Ft.remove(),URL.revokeObjectURL(zt),tt("ok","backup exported")}catch{tt("err","export failed")}},ye=()=>w.current?.click(),Cu=T=>{let Y=T.target.files&&T.target.files[0];if(T.target.value="",!Y)return;let zt=new FileReader;zt.onerror=()=>tt("err","couldn't read that file"),zt.onload=()=>{try{let Tt=JSON.parse(String(zt.result)),Ft=Tt&&typeof Tt=="object"&&Tt.data?Tt.data:Tt;if(!Ft||typeof Ft!="object")throw new Error("bad shape");let ks={tasks:o,routines:s,vaultHabits:v,projects:p,goodHabits:x,badHabits:S,rewards:r},Rn=0;for(let _u of Object.keys(ks))Array.isArray(Ft[_u])&&(ks[_u](Ft[_u]),Rn++);if(Rn===0){tt("err","no recognizable data in that file");return}Uv(qv(Ft)),tt("ok",`imported ${Rn} data set${Rn===1?"":"s"}`)}catch{tt("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},zt.readAsText(Y)},Ml=Ns(),Rl=Ml.hour*60+Ml.minute,{currentId:A,sorted:G}=zs(c,Rl),[st,at]=(0,u.useState)(null),Nt=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{if(Nt.current===void 0){Nt.current=A;return}if(A!==Nt.current){let T=G.find(Y=>Y.id===A);T&&at({id:A,label:T.label,time:T.time}),Nt.current=A}},[A,G]),(0,u.useEffect)(()=>{if(!st)return;let T=setTimeout(()=>at(null),6e3);return()=>clearTimeout(T)},[st]),(0,u.useEffect)(()=>{try{localStorage.setItem(zm,JSON.stringify(i))}catch{}},[i]),(0,u.useEffect)(()=>{try{localStorage.setItem(Tm,JSON.stringify(c))}catch{}},[c]),(0,u.useEffect)(()=>{try{localStorage.setItem(Mm,JSON.stringify(m))}catch{}},[m]),(0,u.useEffect)(()=>{try{localStorage.setItem(Dm,JSON.stringify(y))}catch{}},[y]),(0,u.useEffect)(()=>{try{localStorage.setItem(km,JSON.stringify(h))}catch{}},[h]),(0,u.useEffect)(()=>{try{localStorage.setItem(wm,JSON.stringify(b))}catch{}},[b]),(0,u.useEffect)(()=>{try{localStorage.setItem(Bm,JSON.stringify(f))}catch{}},[f]);let jt=(0,u.useMemo)(()=>{let T=i.length,Y=i.filter(Ft=>Ft.done).length,zt=T-Y,Tt=T===0?0:Math.round(Y/T*100);return{total:T,done:Y,pending:zt,pct:Tt}},[i]),Il=(0,u.useMemo)(()=>{let T=i.filter(Y=>!Y.done);return wu.map(Y=>({key:Y.key,label:Y.label,color:Y.color,value:T.filter(zt=>zt.priority===Y.key).length}))},[i]),Pl=(0,u.useMemo)(()=>{let T=i;return D==="active"&&(T=T.filter(Y=>!Y.done)),D==="done"&&(T=T.filter(Y=>Y.done)),[...T].sort((Y,zt)=>{if(Y.done!==zt.done)return Y.done?1:-1;let Tt={high:0,mid:1,low:2};return Tt[Y.priority]-Tt[zt.priority]})},[i,D]),Ds=()=>{let T=g.trim();T&&(o(Y=>[...Y,{id:ie(),text:T,done:!1,priority:M,createdAt:Date.now()}]),N(""),O.current?.focus(),X.click())},Xm=T=>{let Y=!1;o(zt=>zt.map(Tt=>Tt.id!==T?Tt:(Y=!Tt.done,{...Tt,done:!Tt.done}))),Y?X.success():X.click()},Gm=T=>{o(Y=>Y.filter(zt=>zt.id!==T)),X.delete()},Qm=()=>{o(T=>T.filter(Y=>!Y.done)),X.whoosh()};return u.default.createElement("div",{className:"app-root"},u.default.createElement("style",null,`
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
      `),u.default.createElement("div",{className:"panel"},st&&u.default.createElement("div",{className:"quest-banner",onClick:()=>at(null)},u.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),u.default.createElement("span",{className:"quest-banner-text"},u.default.createElement("b",null,"Now:")," ",st.label),u.default.createElement("button",{className:"quest-banner-close",onClick:T=>{T.stopPropagation(),at(null)},"aria-label":"Dismiss"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),u.default.createElement("div",{className:"titlebar"},u.default.createElement("div",{className:"titlebar-left"},u.default.createElement("div",{className:"dots"},u.default.createElement("span",{className:"dot red"}),u.default.createElement("span",{className:"dot amber"}),u.default.createElement("span",{className:"dot green"})),u.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),u.default.createElement("div",{className:"titlebar-right"},u.default.createElement("input",{type:"file",accept:"application/json",ref:w,onChange:Cu,style:{display:"none"}}),u.default.createElement("button",{className:`titlebar-icon-btn ${k?"notify-on":""}`,onClick:J,disabled:dt,"aria-label":k?"Turn off notifications":"Turn on notifications",title:k?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},k?u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),u.default.createElement("button",{className:"titlebar-icon-btn",onClick:a,"aria-label":l?"Mute sound":"Unmute sound",title:l?"Mute sound":"Unmute sound"},l?u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),u.default.createElement("button",{className:"titlebar-icon-btn",onClick:ye,"aria-label":"Import backup",title:"Import backup"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"titlebar-icon-btn",onClick:Lt,"aria-label":"Export backup",title:"Export backup"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("span",{className:"clock"},new Date(yt).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),H&&u.default.createElement("div",{className:`data-toast ${H.type}`},H.text),u.default.createElement("div",{className:"tabs"},u.default.createElement("button",{className:t==="today"?"active":"",onClick:()=>n("today")},"today"),u.default.createElement("button",{className:t==="tasks"?"active":"",onClick:()=>n("tasks")},"tasks"),u.default.createElement("button",{className:t==="routines"?"active":"",onClick:()=>n("routines")},"routines"),u.default.createElement("button",{className:t==="vault"?"active":"",onClick:()=>n("vault")},"vault"),u.default.createElement("button",{className:t==="quest"?"active":"",onClick:()=>n("quest")},"quest")),u.default.createElement("div",{key:t,className:"tab-content"},t==="today"?u.default.createElement(Hv,{routines:c,setRoutines:s,tasks:i,setTasks:o,vaultHabits:m,goodHabits:h,rewards:f,setRewards:r,totalXP:d,setTab:n}):t==="tasks"?u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"stats-bar stats-bar-viz"},u.default.createElement(Ou,{pct:jt.pct,size:64,stroke:5.5,label:`${jt.pct}%`}),u.default.createElement("div",{className:"stats-row-viz"},u.default.createElement("span",null,u.default.createElement("b",null,u.default.createElement(Ee,{value:jt.total}))," total"),u.default.createElement("span",null,u.default.createElement("b",null,u.default.createElement(Ee,{value:jt.pending}))," pending"),u.default.createElement("span",null,u.default.createElement("b",null,u.default.createElement(Ee,{value:jt.done}))," done"))),jt.pending>0&&u.default.createElement("div",{className:"donut-card"},u.default.createElement(Hm,{size:96,stroke:14,centerLabel:jt.pending,centerSublabel:"open",segments:Il.map(T=>({key:T.key,value:T.value,color:T.color}))}),u.default.createElement("div",{className:"donut-legend"},Il.map(T=>u.default.createElement("div",{className:"donut-legend-row",key:T.key},u.default.createElement("span",{className:"donut-legend-dot",style:{background:T.color}}),u.default.createElement("span",null,T.label," priority"),u.default.createElement("span",{className:"donut-legend-val"},T.value))))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{ref:O,type:"text",placeholder:"add a task, press enter...",value:g,onChange:T=>N(T.target.value),onKeyDown:T=>T.key==="Enter"&&Ds()}),u.default.createElement("div",{className:"prio-select"},wu.map(T=>u.default.createElement("button",{key:T.key,className:M===T.key?"active":"",style:{"--pc":T.color},onClick:()=>z(T.key)},T.label))),u.default.createElement("button",{className:"add-btn",onClick:Ds,"aria-label":"Add task"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"filters"},["all","active","done"].map(T=>u.default.createElement("button",{key:T,className:D===T?"active":"",onClick:()=>B(T)},T)),u.default.createElement("span",{className:"spacer"}),jt.done>0&&u.default.createElement("button",{className:"clear-btn",onClick:Qm},"clear done")),u.default.createElement("div",{className:"task-list"},Pl.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},D==="done"?"nothing completed yet":"queue's empty \u2014 add something")):Pl.map((T,Y)=>u.default.createElement(wv,{key:T.id,task:T,now:yt,index:Y,onToggle:Xm,onDelete:Gm})))):t==="routines"?u.default.createElement(av,{routines:c,setRoutines:s}):t==="vault"?u.default.createElement(hv,{vaultHabits:m,setVaultHabits:v,projects:y,setProjects:p}):u.default.createElement(Tv,{goodHabits:h,setGoodHabits:x,badHabits:b,setBadHabits:S,rewards:f,setRewards:r}))))}var Lv=_m.default.createRoot(document.getElementById("root"));Lv.render(u.default.createElement(Yv));})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
