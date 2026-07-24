(()=>{var _m=Object.create;var zs=Object.defineProperty;var Um=Object.getOwnPropertyDescriptor;var qm=Object.getOwnPropertyNames;var Hm=Object.getPrototypeOf,Ym=Object.prototype.hasOwnProperty;var Il=(t,l)=>()=>(l||t((l={exports:{}}).exports,l),l.exports);var Xm=(t,l,e,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let n of qm(l))!Ym.call(t,n)&&n!==e&&zs(t,n,{get:()=>l[n],enumerable:!(a=Um(l,n))||a.enumerable});return t};var Ts=(t,l,e)=>(e=t!=null?_m(Hm(t)):{},Xm(l||!t||!t.__esModule?zs(e,"default",{value:t,enumerable:!0}):e,t));var Hs=Il(U=>{"use strict";var qu=Symbol.for("react.transitional.element"),Lm=Symbol.for("react.portal"),jm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),Zm=Symbol.for("react.consumer"),Vm=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Km=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),ws=Symbol.for("react.lazy"),$m=Symbol.for("react.activity"),Ms=Symbol.iterator;function Wm(t){return t===null||typeof t!="object"?null:(t=Ms&&t[Ms]||t["@@iterator"],typeof t=="function"?t:null)}var Cs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Os=Object.assign,_s={};function ta(t,l,e){this.props=t,this.context=l,this.refs=_s,this.updater=e||Cs}ta.prototype.isReactComponent={};ta.prototype.setState=function(t,l){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,l,"setState")};ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Us(){}Us.prototype=ta.prototype;function Hu(t,l,e){this.props=t,this.context=l,this.refs=_s,this.updater=e||Cs}var Yu=Hu.prototype=new Us;Yu.constructor=Hu;Os(Yu,ta.prototype);Yu.isPureReactComponent=!0;var Ds=Array.isArray;function Uu(){}var et={H:null,A:null,T:null,S:null},qs=Object.prototype.hasOwnProperty;function Xu(t,l,e){var a=e.ref;return{$$typeof:qu,type:t,key:l,ref:a!==void 0?a:null,props:e}}function Rm(t,l){return Xu(t.type,l,t.props)}function Lu(t){return typeof t=="object"&&t!==null&&t.$$typeof===qu}function Im(t){var l={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(e){return l[e]})}var ks=/\/+/g;function _u(t,l){return typeof t=="object"&&t!==null&&t.key!=null?Im(""+t.key):l.toString(36)}function Pm(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Uu,Uu):(t.status="pending",t.then(function(l){t.status==="pending"&&(t.status="fulfilled",t.value=l)},function(l){t.status==="pending"&&(t.status="rejected",t.reason=l)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Pe(t,l,e,a,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"bigint":case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qu:case Lm:o=!0;break;case ws:return o=t._init,Pe(o(t._payload),l,e,a,n)}}if(o)return n=n(t),o=a===""?"."+_u(t,0):a,Ds(n)?(e="",o!=null&&(e=o.replace(ks,"$&/")+"/"),Pe(n,l,e,"",function(m){return m})):n!=null&&(Lu(n)&&(n=Rm(n,e+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(ks,"$&/")+"/")+o)),l.push(n)),1;o=0;var c=a===""?".":a+":";if(Ds(t))for(var s=0;s<t.length;s++)a=t[s],i=c+_u(a,s),o+=Pe(a,l,e,i,n);else if(s=Wm(t),typeof s=="function")for(t=s.call(t),s=0;!(a=t.next()).done;)a=a.value,i=c+_u(a,s++),o+=Pe(a,l,e,i,n);else if(i==="object"){if(typeof t.then=="function")return Pe(Pm(t),l,e,a,n);throw l=String(t),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.")}return o}function In(t,l,e){if(t==null)return t;var a=[],n=0;return Pe(t,a,"","",function(i){return l.call(e,i,n++)}),a}function tp(t){if(t._status===-1){var l=t._result;l=l(),l.then(function(e){(t._status===0||t._status===-1)&&(t._status=1,t._result=e)},function(e){(t._status===0||t._status===-1)&&(t._status=2,t._result=e)}),t._status===-1&&(t._status=0,t._result=l)}if(t._status===1)return t._result.default;throw t._result}var Bs=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},lp={map:In,forEach:function(t,l,e){In(t,function(){l.apply(this,arguments)},e)},count:function(t){var l=0;return In(t,function(){l++}),l},toArray:function(t){return In(t,function(l){return l})||[]},only:function(t){if(!Lu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=$m;U.Children=lp;U.Component=ta;U.Fragment=jm;U.Profiler=Qm;U.PureComponent=Hu;U.StrictMode=Gm;U.Suspense=Km;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=et;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return et.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,l,e){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var a=Os({},t.props),n=t.key;if(l!=null)for(i in l.key!==void 0&&(n=""+l.key),l)!qs.call(l,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&l.ref===void 0||(a[i]=l[i]);var i=arguments.length-2;if(i===1)a.children=e;else if(1<i){for(var o=Array(i),c=0;c<i;c++)o[c]=arguments[c+2];a.children=o}return Xu(t.type,n,a)};U.createContext=function(t){return t={$$typeof:Vm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Zm,_context:t},t};U.createElement=function(t,l,e){var a,n={},i=null;if(l!=null)for(a in l.key!==void 0&&(i=""+l.key),l)qs.call(l,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=l[a]);var o=arguments.length-2;if(o===1)n.children=e;else if(1<o){for(var c=Array(o),s=0;s<o;s++)c[s]=arguments[s+2];n.children=c}if(t&&t.defaultProps)for(a in o=t.defaultProps,o)n[a]===void 0&&(n[a]=o[a]);return Xu(t,i,n)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Jm,render:t}};U.isValidElement=Lu;U.lazy=function(t){return{$$typeof:ws,_payload:{_status:-1,_result:t},_init:tp}};U.memo=function(t,l){return{$$typeof:Fm,type:t,compare:l===void 0?null:l}};U.startTransition=function(t){var l=et.T,e={};et.T=e;try{var a=t(),n=et.S;n!==null&&n(e,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Uu,Bs)}catch(i){Bs(i)}finally{l!==null&&e.types!==null&&(l.types=e.types),et.T=l}};U.unstable_useCacheRefresh=function(){return et.H.useCacheRefresh()};U.use=function(t){return et.H.use(t)};U.useActionState=function(t,l,e){return et.H.useActionState(t,l,e)};U.useCallback=function(t,l){return et.H.useCallback(t,l)};U.useContext=function(t){return et.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,l){return et.H.useDeferredValue(t,l)};U.useEffect=function(t,l){return et.H.useEffect(t,l)};U.useEffectEvent=function(t){return et.H.useEffectEvent(t)};U.useId=function(){return et.H.useId()};U.useImperativeHandle=function(t,l,e){return et.H.useImperativeHandle(t,l,e)};U.useInsertionEffect=function(t,l){return et.H.useInsertionEffect(t,l)};U.useLayoutEffect=function(t,l){return et.H.useLayoutEffect(t,l)};U.useMemo=function(t,l){return et.H.useMemo(t,l)};U.useOptimistic=function(t,l){return et.H.useOptimistic(t,l)};U.useReducer=function(t,l,e){return et.H.useReducer(t,l,e)};U.useRef=function(t){return et.H.useRef(t)};U.useState=function(t){return et.H.useState(t)};U.useSyncExternalStore=function(t,l,e){return et.H.useSyncExternalStore(t,l,e)};U.useTransition=function(){return et.H.useTransition()};U.version="19.2.5"});var Pn=Il((Dv,Ys)=>{"use strict";Ys.exports=Hs()});var Fs=Il(ut=>{"use strict";function Zu(t,l){var e=t.length;t.push(l);t:for(;0<e;){var a=e-1>>>1,n=t[a];if(0<ti(n,l))t[a]=l,t[e]=n,e=a;else break t}}function El(t){return t.length===0?null:t[0]}function ei(t){if(t.length===0)return null;var l=t[0],e=t.pop();if(e!==l){t[0]=e;t:for(var a=0,n=t.length,i=n>>>1;a<i;){var o=2*(a+1)-1,c=t[o],s=o+1,m=t[s];if(0>ti(c,e))s<n&&0>ti(m,c)?(t[a]=m,t[s]=e,a=s):(t[a]=c,t[o]=e,a=o);else if(s<n&&0>ti(m,e))t[a]=m,t[s]=e,a=s;else break t}}return l}function ti(t,l){var e=t.sortIndex-l.sortIndex;return e!==0?e:t.id-l.id}ut.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Xs=performance,ut.unstable_now=function(){return Xs.now()}):(ju=Date,Ls=ju.now(),ut.unstable_now=function(){return ju.now()-Ls});var Xs,ju,Ls,wl=[],Pl=[],ep=1,ul=null,Ut=3,Vu=!1,Ka=!1,Fa=!1,Ju=!1,Qs=typeof setTimeout=="function"?setTimeout:null,Zs=typeof clearTimeout=="function"?clearTimeout:null,js=typeof setImmediate<"u"?setImmediate:null;function li(t){for(var l=El(Pl);l!==null;){if(l.callback===null)ei(Pl);else if(l.startTime<=t)ei(Pl),l.sortIndex=l.expirationTime,Zu(wl,l);else break;l=El(Pl)}}function Ku(t){if(Fa=!1,li(t),!Ka)if(El(wl)!==null)Ka=!0,ea||(ea=!0,la());else{var l=El(Pl);l!==null&&Fu(Ku,l.startTime-t)}}var ea=!1,$a=-1,Vs=5,Js=-1;function Ks(){return Ju?!0:!(ut.unstable_now()-Js<Vs)}function Gu(){if(Ju=!1,ea){var t=ut.unstable_now();Js=t;var l=!0;try{t:{Ka=!1,Fa&&(Fa=!1,Zs($a),$a=-1),Vu=!0;var e=Ut;try{l:{for(li(t),ul=El(wl);ul!==null&&!(ul.expirationTime>t&&Ks());){var a=ul.callback;if(typeof a=="function"){ul.callback=null,Ut=ul.priorityLevel;var n=a(ul.expirationTime<=t);if(t=ut.unstable_now(),typeof n=="function"){ul.callback=n,li(t),l=!0;break l}ul===El(wl)&&ei(wl),li(t)}else ei(wl);ul=El(wl)}if(ul!==null)l=!0;else{var i=El(Pl);i!==null&&Fu(Ku,i.startTime-t),l=!1}}break t}finally{ul=null,Ut=e,Vu=!1}l=void 0}}finally{l?la():ea=!1}}}var la;typeof js=="function"?la=function(){js(Gu)}:typeof MessageChannel<"u"?(Qu=new MessageChannel,Gs=Qu.port2,Qu.port1.onmessage=Gu,la=function(){Gs.postMessage(null)}):la=function(){Qs(Gu,0)};var Qu,Gs;function Fu(t,l){$a=Qs(function(){t(ut.unstable_now())},l)}ut.unstable_IdlePriority=5;ut.unstable_ImmediatePriority=1;ut.unstable_LowPriority=4;ut.unstable_NormalPriority=3;ut.unstable_Profiling=null;ut.unstable_UserBlockingPriority=2;ut.unstable_cancelCallback=function(t){t.callback=null};ut.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vs=0<t?Math.floor(1e3/t):5};ut.unstable_getCurrentPriorityLevel=function(){return Ut};ut.unstable_next=function(t){switch(Ut){case 1:case 2:case 3:var l=3;break;default:l=Ut}var e=Ut;Ut=l;try{return t()}finally{Ut=e}};ut.unstable_requestPaint=function(){Ju=!0};ut.unstable_runWithPriority=function(t,l){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var e=Ut;Ut=t;try{return l()}finally{Ut=e}};ut.unstable_scheduleCallback=function(t,l,e){var a=ut.unstable_now();switch(typeof e=="object"&&e!==null?(e=e.delay,e=typeof e=="number"&&0<e?a+e:a):e=a,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=e+n,t={id:ep++,callback:l,priorityLevel:t,startTime:e,expirationTime:n,sortIndex:-1},e>a?(t.sortIndex=e,Zu(Pl,t),El(wl)===null&&t===El(Pl)&&(Fa?(Zs($a),$a=-1):Fa=!0,Fu(Ku,e-a))):(t.sortIndex=n,Zu(wl,t),Ka||Vu||(Ka=!0,ea||(ea=!0,la()))),t};ut.unstable_shouldYield=Ks;ut.unstable_wrapCallback=function(t){var l=Ut;return function(){var e=Ut;Ut=l;try{return t.apply(this,arguments)}finally{Ut=e}}}});var Ws=Il((Bv,$s)=>{"use strict";$s.exports=Fs()});var Is=Il(Yt=>{"use strict";var ap=Pn();function Rs(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function te(){}var Ht={d:{f:te,r:function(){throw Error(Rs(522))},D:te,C:te,L:te,m:te,X:te,S:te,M:te},p:0,findDOMNode:null},np=Symbol.for("react.portal");function ip(t,l,e){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:np,key:a==null?null:""+a,children:t,containerInfo:l,implementation:e}}var Wa=ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ai(t,l){if(t==="font")return"";if(typeof l=="string")return l==="use-credentials"?l:""}Yt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ht;Yt.createPortal=function(t,l){var e=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)throw Error(Rs(299));return ip(t,l,null,e)};Yt.flushSync=function(t){var l=Wa.T,e=Ht.p;try{if(Wa.T=null,Ht.p=2,t)return t()}finally{Wa.T=l,Ht.p=e,Ht.d.f()}};Yt.preconnect=function(t,l){typeof t=="string"&&(l?(l=l.crossOrigin,l=typeof l=="string"?l==="use-credentials"?l:"":void 0):l=null,Ht.d.C(t,l))};Yt.prefetchDNS=function(t){typeof t=="string"&&Ht.d.D(t)};Yt.preinit=function(t,l){if(typeof t=="string"&&l&&typeof l.as=="string"){var e=l.as,a=ai(e,l.crossOrigin),n=typeof l.integrity=="string"?l.integrity:void 0,i=typeof l.fetchPriority=="string"?l.fetchPriority:void 0;e==="style"?Ht.d.S(t,typeof l.precedence=="string"?l.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:i}):e==="script"&&Ht.d.X(t,{crossOrigin:a,integrity:n,fetchPriority:i,nonce:typeof l.nonce=="string"?l.nonce:void 0})}};Yt.preinitModule=function(t,l){if(typeof t=="string")if(typeof l=="object"&&l!==null){if(l.as==null||l.as==="script"){var e=ai(l.as,l.crossOrigin);Ht.d.M(t,{crossOrigin:e,integrity:typeof l.integrity=="string"?l.integrity:void 0,nonce:typeof l.nonce=="string"?l.nonce:void 0})}}else l==null&&Ht.d.M(t)};Yt.preload=function(t,l){if(typeof t=="string"&&typeof l=="object"&&l!==null&&typeof l.as=="string"){var e=l.as,a=ai(e,l.crossOrigin);Ht.d.L(t,e,{crossOrigin:a,integrity:typeof l.integrity=="string"?l.integrity:void 0,nonce:typeof l.nonce=="string"?l.nonce:void 0,type:typeof l.type=="string"?l.type:void 0,fetchPriority:typeof l.fetchPriority=="string"?l.fetchPriority:void 0,referrerPolicy:typeof l.referrerPolicy=="string"?l.referrerPolicy:void 0,imageSrcSet:typeof l.imageSrcSet=="string"?l.imageSrcSet:void 0,imageSizes:typeof l.imageSizes=="string"?l.imageSizes:void 0,media:typeof l.media=="string"?l.media:void 0})}};Yt.preloadModule=function(t,l){if(typeof t=="string")if(l){var e=ai(l.as,l.crossOrigin);Ht.d.m(t,{as:typeof l.as=="string"&&l.as!=="script"?l.as:void 0,crossOrigin:e,integrity:typeof l.integrity=="string"?l.integrity:void 0})}else Ht.d.m(t)};Yt.requestFormReset=function(t){Ht.d.r(t)};Yt.unstable_batchedUpdates=function(t,l){return t(l)};Yt.useFormState=function(t,l,e){return Wa.H.useFormState(t,l,e)};Yt.useFormStatus=function(){return Wa.H.useHostTransitionStatus()};Yt.version="19.2.5"});var lr=Il((Cv,tr)=>{"use strict";function Ps(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ps)}catch(t){console.error(t)}}Ps(),tr.exports=Is()});var pm=Il(Du=>{"use strict";var Nt=Ws(),Df=Pn(),up=lr();function E(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)l+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function kf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hn(t){var l=t,e=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(e=l.return),t=l.return;while(t)}return l.tag===3?e:null}function Bf(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function wf(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function er(t){if(Hn(t)!==t)throw Error(E(188))}function op(t){var l=t.alternate;if(!l){if(l=Hn(t),l===null)throw Error(E(188));return l!==t?null:t}for(var e=t,a=l;;){var n=e.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){e=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===e)return er(n),t;if(i===a)return er(n),l;i=i.sibling}throw Error(E(188))}if(e.return!==a.return)e=n,a=i;else{for(var o=!1,c=n.child;c;){if(c===e){o=!0,e=n,a=i;break}if(c===a){o=!0,a=n,e=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===e){o=!0,e=i,a=n;break}if(c===a){o=!0,a=i,e=n;break}c=c.sibling}if(!o)throw Error(E(189))}}if(e.alternate!==a)throw Error(E(190))}if(e.tag!==3)throw Error(E(188));return e.stateNode.current===e?t:l}function Cf(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=Cf(t),l!==null)return l;t=t.sibling}return null}var it=Object.assign,cp=Symbol.for("react.element"),ni=Symbol.for("react.transitional.element"),nn=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),Of=Symbol.for("react.strict_mode"),ko=Symbol.for("react.profiler"),_f=Symbol.for("react.consumer"),Xl=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),Co=Symbol.for("react.activity"),sp=Symbol.for("react.memo_cache_sentinel"),ar=Symbol.iterator;function Ra(t){return t===null||typeof t!="object"?null:(t=ar&&t[ar]||t["@@iterator"],typeof t=="function"?t:null)}var rp=Symbol.for("react.client.reference");function Oo(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ca:return"Fragment";case ko:return"Profiler";case Of:return"StrictMode";case Bo:return"Suspense";case wo:return"SuspenseList";case Co:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case nn:return"Portal";case Xl:return t.displayName||"Context";case _f:return(t._context.displayName||"Context")+".Consumer";case Nc:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zc:return l=t.displayName||null,l!==null?l:Oo(t.type)||"Memo";case le:l=t._payload,t=t._init;try{return Oo(t(l))}catch{}}return null}var un=Array.isArray,O=Df.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=up.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},_o=[],sa=-1;function Tl(t){return{current:t}}function kt(t){0>sa||(t.current=_o[sa],_o[sa]=null,sa--)}function lt(t,l){sa++,_o[sa]=t.current,t.current=l}var zl=Tl(null),An=Tl(null),de=Tl(null),Hi=Tl(null);function Yi(t,l){switch(lt(de,l),lt(An,t),lt(zl,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?ff(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=ff(l),t=tm(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}kt(zl),lt(zl,t)}function Ma(){kt(zl),kt(An),kt(de)}function Uo(t){t.memoizedState!==null&&lt(Hi,t);var l=zl.current,e=tm(l,t.type);l!==e&&(lt(An,t),lt(zl,e))}function Xi(t){An.current===t&&(kt(zl),kt(An)),Hi.current===t&&(kt(Hi),_n._currentValue=_e)}var $u,nr;function Be(t){if($u===void 0)try{throw Error()}catch(e){var l=e.stack.trim().match(/\n( *(at )?)/);$u=l&&l[1]||"",nr=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$u+t+nr}var Wu=!1;function Ru(t,l){if(!t||Wu)return"";Wu=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(l){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(h){var p=h}Reflect.construct(t,[],y)}else{try{y.call()}catch(h){p=h}t.call(y.prototype)}}else{try{throw Error()}catch(h){p=h}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(h){if(h&&p&&typeof h.stack=="string")return[h.stack,p.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),o=i[0],c=i[1];if(o&&c){var s=o.split(`
`),m=c.split(`
`);for(n=a=0;a<s.length&&!s[a].includes("DetermineComponentFrameRoot");)a++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(a===s.length||n===m.length)for(a=s.length-1,n=m.length-1;1<=a&&0<=n&&s[a]!==m[n];)n--;for(;1<=a&&0<=n;a--,n--)if(s[a]!==m[n]){if(a!==1||n!==1)do if(a--,n--,0>n||s[a]!==m[n]){var v=`
`+s[a].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=a&&0<=n);break}}}finally{Wu=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?Be(e):""}function fp(t,l){switch(t.tag){case 26:case 27:case 5:return Be(t.type);case 16:return Be("Lazy");case 13:return t.child!==l&&l!==null?Be("Suspense Fallback"):Be("Suspense");case 19:return Be("SuspenseList");case 0:case 15:return Ru(t.type,!1);case 11:return Ru(t.type.render,!1);case 1:return Ru(t.type,!0);case 31:return Be("Activity");default:return""}}function ir(t){try{var l="",e=null;do l+=fp(t,e),e=t,t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var qo=Object.prototype.hasOwnProperty,Tc=Nt.unstable_scheduleCallback,Iu=Nt.unstable_cancelCallback,dp=Nt.unstable_shouldYield,mp=Nt.unstable_requestPaint,It=Nt.unstable_now,pp=Nt.unstable_getCurrentPriorityLevel,Uf=Nt.unstable_ImmediatePriority,qf=Nt.unstable_UserBlockingPriority,Li=Nt.unstable_NormalPriority,hp=Nt.unstable_LowPriority,Hf=Nt.unstable_IdlePriority,vp=Nt.log,yp=Nt.unstable_setDisableYieldValue,Yn=null,Pt=null;function oe(t){if(typeof vp=="function"&&yp(t),Pt&&typeof Pt.setStrictMode=="function")try{Pt.setStrictMode(Yn,t)}catch{}}var tl=Math.clz32?Math.clz32:xp,gp=Math.log,bp=Math.LN2;function xp(t){return t>>>=0,t===0?32:31-(gp(t)/bp|0)|0}var ii=256,ui=262144,oi=4194304;function we(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function du(t,l,e){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,o=t.pingedLanes;t=t.warmLanes;var c=a&134217727;return c!==0?(a=c&~i,a!==0?n=we(a):(o&=c,o!==0?n=we(o):e||(e=c&~t,e!==0&&(n=we(e))))):(c=a&~i,c!==0?n=we(c):o!==0?n=we(o):e||(e=a&~t,e!==0&&(n=we(e)))),n===0?0:l!==0&&l!==n&&(l&i)===0&&(i=n&-n,e=l&-l,i>=e||i===32&&(e&4194048)!==0)?l:n}function Xn(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Ep(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yf(){var t=oi;return oi<<=1,(oi&62914560)===0&&(oi=4194304),t}function Pu(t){for(var l=[],e=0;31>e;e++)l.push(t);return l}function Ln(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sp(t,l,e,a,n,i){var o=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,m=t.hiddenUpdates;for(e=o&~e;0<e;){var v=31-tl(e),y=1<<v;c[v]=0,s[v]=-1;var p=m[v];if(p!==null)for(m[v]=null,v=0;v<p.length;v++){var h=p[v];h!==null&&(h.lane&=-536870913)}e&=~y}a!==0&&Xf(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(o&~l))}function Xf(t,l,e){t.pendingLanes|=l,t.suspendedLanes&=~l;var a=31-tl(l);t.entangledLanes|=l,t.entanglements[a]=t.entanglements[a]|1073741824|e&261930}function Lf(t,l){var e=t.entangledLanes|=l;for(t=t.entanglements;e;){var a=31-tl(e),n=1<<a;n&l|t[a]&l&&(t[a]|=l),e&=~n}}function jf(t,l){var e=l&-l;return e=(e&42)!==0?1:Mc(e),(e&(t.suspendedLanes|l))!==0?0:e}function Mc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gf(){var t=F.p;return t!==0?t:(t=window.event,t===void 0?32:fm(t.type))}function ur(t,l){var e=F.p;try{return F.p=t,l()}finally{F.p=e}}var ze=Math.random().toString(36).slice(2),wt="__reactFiber$"+ze,Vt="__reactProps$"+ze,Ya="__reactContainer$"+ze,Ho="__reactEvents$"+ze,Ap="__reactListeners$"+ze,Np="__reactHandles$"+ze,or="__reactResources$"+ze,jn="__reactMarker$"+ze;function kc(t){delete t[wt],delete t[Vt],delete t[Ho],delete t[Ap],delete t[Np]}function ra(t){var l=t[wt];if(l)return l;for(var e=t.parentNode;e;){if(l=e[Ya]||e[wt]){if(e=l.alternate,l.child!==null||e!==null&&e.child!==null)for(t=vf(t);t!==null;){if(e=t[wt])return e;t=vf(t)}return l}t=e,e=t.parentNode}return null}function Xa(t){if(t=t[wt]||t[Ya]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function on(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(E(33))}function xa(t){var l=t[or];return l||(l=t[or]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Dt(t){t[jn]=!0}var Qf=new Set,Zf={};function Ze(t,l){Da(t,l),Da(t+"Capture",l)}function Da(t,l){for(Zf[t]=l,t=0;t<l.length;t++)Qf.add(l[t])}var zp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cr={},sr={};function Tp(t){return qo.call(sr,t)?!0:qo.call(cr,t)?!1:zp.test(t)?sr[t]=!0:(cr[t]=!0,!1)}function Si(t,l,e){if(Tp(l))if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var a=l.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+e)}}function ci(t,l,e){if(e===null)t.removeAttribute(l);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+e)}}function Cl(t,l,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(l,e,""+a)}}function cl(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Mp(t,l,e){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(o){e=""+o,i.call(this,o)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(o){e=""+o},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Yo(t){if(!t._valueTracker){var l=Vf(t)?"checked":"value";t._valueTracker=Mp(t,l,""+t[l])}}function Jf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var e=l.getValue(),a="";return t&&(a=Vf(t)?t.checked?"true":"false":t.value),t=a,t!==e?(l.setValue(t),!0):!1}function ji(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dp=/[\n"\\]/g;function fl(t){return t.replace(Dp,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Xo(t,l,e,a,n,i,o,c){t.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.type=o:t.removeAttribute("type"),l!=null?o==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+cl(l)):t.value!==""+cl(l)&&(t.value=""+cl(l)):o!=="submit"&&o!=="reset"||t.removeAttribute("value"),l!=null?Lo(t,o,cl(l)):e!=null?Lo(t,o,cl(e)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+cl(c):t.removeAttribute("name")}function Kf(t,l,e,a,n,i,o,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),l!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){Yo(t);return}e=e!=null?""+cl(e):"",l=l!=null?""+cl(l):e,c||l===t.value||(t.value=l),t.defaultValue=l}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=c?t.checked:!!a,t.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.name=o),Yo(t)}function Lo(t,l,e){l==="number"&&ji(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function Ea(t,l,e,a){if(t=t.options,l){l={};for(var n=0;n<e.length;n++)l["$"+e[n]]=!0;for(e=0;e<t.length;e++)n=l.hasOwnProperty("$"+t[e].value),t[e].selected!==n&&(t[e].selected=n),n&&a&&(t[e].defaultSelected=!0)}else{for(e=""+cl(e),l=null,n=0;n<t.length;n++){if(t[n].value===e){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function Ff(t,l,e){if(l!=null&&(l=""+cl(l),l!==t.value&&(t.value=l),e==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=e!=null?""+cl(e):""}function $f(t,l,e,a){if(l==null){if(a!=null){if(e!=null)throw Error(E(92));if(un(a)){if(1<a.length)throw Error(E(93));a=a[0]}e=a}e==null&&(e=""),l=e}e=cl(l),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a),Yo(t)}function ka(t,l){if(l){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=l;return}}t.textContent=l}var kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rr(t,l,e){var a=l.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":a?t.setProperty(l,e):typeof e!="number"||e===0||kp.has(l)?l==="float"?t.cssFloat=e:t[l]=(""+e).trim():t[l]=e+"px"}function Wf(t,l,e){if(l!=null&&typeof l!="object")throw Error(E(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||l!=null&&l.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in l)a=l[n],l.hasOwnProperty(n)&&e[n]!==a&&rr(t,n,a)}else for(var i in l)l.hasOwnProperty(i)&&rr(t,i,l[i])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),wp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(t){return wp.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ll(){}var jo=null;function wc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fa=null,Sa=null;function fr(t){var l=Xa(t);if(l&&(t=l.stateNode)){var e=t[Vt]||null;t:switch(t=l.stateNode,l.type){case"input":if(Xo(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),l=e.name,e.type==="radio"&&l!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+fl(""+l)+'"][type="radio"]'),l=0;l<e.length;l++){var a=e[l];if(a!==t&&a.form===t.form){var n=a[Vt]||null;if(!n)throw Error(E(90));Xo(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<e.length;l++)a=e[l],a.form===t.form&&Jf(a)}break t;case"textarea":Ff(t,e.value,e.defaultValue);break t;case"select":l=e.value,l!=null&&Ea(t,!!e.multiple,l,!1)}}}var to=!1;function Rf(t,l,e){if(to)return t(l,e);to=!0;try{var a=t(l);return a}finally{if(to=!1,(fa!==null||Sa!==null)&&(Nu(),fa&&(l=fa,t=Sa,Sa=fa=null,fr(l),t)))for(l=0;l<t.length;l++)fr(t[l])}}function Nn(t,l){var e=t.stateNode;if(e===null)return null;var a=e[Vt]||null;if(a===null)return null;e=a[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(E(231,l,typeof e));return e}var Vl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if(Vl)try{aa={},Object.defineProperty(aa,"passive",{get:function(){Go=!0}}),window.addEventListener("test",aa,aa),window.removeEventListener("test",aa,aa)}catch{Go=!1}var aa,ce=null,Cc=null,Ni=null;function If(){if(Ni)return Ni;var t,l=Cc,e=l.length,a,n="value"in ce?ce.value:ce.textContent,i=n.length;for(t=0;t<e&&l[t]===n[t];t++);var o=e-t;for(a=1;a<=o&&l[e-a]===n[i-a];a++);return Ni=n.slice(t,1<a?1-a:void 0)}function zi(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function dr(){return!1}function Jt(t){function l(e,a,n,i,o){this._reactName=e,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(e=t[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?si:dr,this.isPropagationStopped=dr,this}return it(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),l}var Ve={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=Jt(Ve),Gn=it({},Ve,{view:0,detail:0}),Cp=Jt(Gn),lo,eo,Ia,pu=it({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Oc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ia&&(Ia&&t.type==="mousemove"?(lo=t.screenX-Ia.screenX,eo=t.screenY-Ia.screenY):eo=lo=0,Ia=t),lo)},movementY:function(t){return"movementY"in t?t.movementY:eo}}),mr=Jt(pu),Op=it({},pu,{dataTransfer:0}),_p=Jt(Op),Up=it({},Gn,{relatedTarget:0}),ao=Jt(Up),qp=it({},Ve,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=Jt(qp),Yp=it({},Ve,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xp=Jt(Yp),Lp=it({},Ve,{data:0}),pr=Jt(Lp),jp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=Qp[t])?!!l[t]:!1}function Oc(){return Zp}var Vp=it({},Gn,{key:function(t){if(t.key){var l=jp[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Oc,charCode:function(t){return t.type==="keypress"?zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jp=Jt(Vp),Kp=it({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hr=Jt(Kp),Fp=it({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Oc}),$p=Jt(Fp),Wp=it({},Ve,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=Jt(Wp),Ip=it({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=Jt(Ip),t1=it({},Ve,{newState:0,oldState:0}),l1=Jt(t1),e1=[9,13,27,32],_c=Vl&&"CompositionEvent"in window,rn=null;Vl&&"documentMode"in document&&(rn=document.documentMode);var a1=Vl&&"TextEvent"in window&&!rn,Pf=Vl&&(!_c||rn&&8<rn&&11>=rn),vr=" ",yr=!1;function td(t,l){switch(t){case"keyup":return e1.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var da=!1;function n1(t,l){switch(t){case"compositionend":return ld(l);case"keypress":return l.which!==32?null:(yr=!0,vr);case"textInput":return t=l.data,t===vr&&yr?null:t;default:return null}}function i1(t,l){if(da)return t==="compositionend"||!_c&&td(t,l)?(t=If(),Ni=Cc=ce=null,da=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Pf&&l.locale!=="ko"?null:l.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!u1[t.type]:l==="textarea"}function ed(t,l,e,a){fa?Sa?Sa.push(a):Sa=[a]:fa=a,l=iu(l,"onChange"),0<l.length&&(e=new mu("onChange","change",null,e,a),t.push({event:e,listeners:l}))}var fn=null,zn=null;function o1(t){R0(t,0)}function hu(t){var l=on(t);if(Jf(l))return t}function br(t,l){if(t==="change")return l}var ad=!1;Vl&&(Vl?(fi="oninput"in document,fi||(no=document.createElement("div"),no.setAttribute("oninput","return;"),fi=typeof no.oninput=="function"),ri=fi):ri=!1,ad=ri&&(!document.documentMode||9<document.documentMode));var ri,fi,no;function xr(){fn&&(fn.detachEvent("onpropertychange",nd),zn=fn=null)}function nd(t){if(t.propertyName==="value"&&hu(zn)){var l=[];ed(l,zn,t,wc(t)),Rf(o1,l)}}function c1(t,l,e){t==="focusin"?(xr(),fn=l,zn=e,fn.attachEvent("onpropertychange",nd)):t==="focusout"&&xr()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(zn)}function r1(t,l){if(t==="click")return hu(l)}function f1(t,l){if(t==="input"||t==="change")return hu(l)}function d1(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var el=typeof Object.is=="function"?Object.is:d1;function Tn(t,l){if(el(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var e=Object.keys(t),a=Object.keys(l);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var n=e[a];if(!qo.call(l,n)||!el(t[n],l[n]))return!1}return!0}function Er(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sr(t,l){var e=Er(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=l&&a>=l)return{node:e,offset:l-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Er(e)}}function id(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?id(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=ji(t.document);l instanceof t.HTMLIFrameElement;){try{var e=typeof l.contentWindow.location.href=="string"}catch{e=!1}if(e)t=l.contentWindow;else break;l=ji(t.document)}return l}function Uc(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var m1=Vl&&"documentMode"in document&&11>=document.documentMode,ma=null,Qo=null,dn=null,Zo=!1;function Ar(t,l,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Zo||ma==null||ma!==ji(a)||(a=ma,"selectionStart"in a&&Uc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),dn&&Tn(dn,a)||(dn=a,a=iu(Qo,"onSelect"),0<a.length&&(l=new mu("onSelect","select",null,l,e),t.push({event:l,listeners:a}),l.target=ma)))}function ke(t,l){var e={};return e[t.toLowerCase()]=l.toLowerCase(),e["Webkit"+t]="webkit"+l,e["Moz"+t]="moz"+l,e}var pa={animationend:ke("Animation","AnimationEnd"),animationiteration:ke("Animation","AnimationIteration"),animationstart:ke("Animation","AnimationStart"),transitionrun:ke("Transition","TransitionRun"),transitionstart:ke("Transition","TransitionStart"),transitioncancel:ke("Transition","TransitionCancel"),transitionend:ke("Transition","TransitionEnd")},io={},od={};Vl&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function Je(t){if(io[t])return io[t];if(!pa[t])return t;var l=pa[t],e;for(e in l)if(l.hasOwnProperty(e)&&e in od)return io[t]=l[e];return t}var cd=Je("animationend"),sd=Je("animationiteration"),rd=Je("animationstart"),p1=Je("transitionrun"),h1=Je("transitionstart"),v1=Je("transitioncancel"),fd=Je("transitionend"),dd=new Map,Vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vo.push("scrollEnd");function bl(t,l){dd.set(t,l),Ze(l,[t])}var Gi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ol=[],ha=0,qc=0;function vu(){for(var t=ha,l=qc=ha=0;l<t;){var e=ol[l];ol[l++]=null;var a=ol[l];ol[l++]=null;var n=ol[l];ol[l++]=null;var i=ol[l];if(ol[l++]=null,a!==null&&n!==null){var o=a.pending;o===null?n.next=n:(n.next=o.next,o.next=n),a.pending=n}i!==0&&md(e,n,i)}}function yu(t,l,e,a){ol[ha++]=t,ol[ha++]=l,ol[ha++]=e,ol[ha++]=a,qc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Hc(t,l,e,a){return yu(t,l,e,a),Qi(t)}function Ke(t,l){return yu(t,null,null,l),Qi(t)}function md(t,l,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var n=!1,i=t.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&l!==null&&(n=31-tl(e),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[l]:a.push(l),l.lane=e|536870912),i):null}function Qi(t){if(50<En)throw En=0,dc=null,Error(E(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var va={};function y1(t,l,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,l,e,a){return new y1(t,l,e,a)}function Yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gl(t,l){var e=t.alternate;return e===null?(e=Wt(t.tag,l,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=l,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&65011712,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,l=t.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function pd(t,l){t.flags&=65011714;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,l=e.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Ti(t,l,e,a,n,i){var o=0;if(a=t,typeof t=="function")Yc(t)&&(o=1);else if(typeof t=="string")o=xh(t,e,zl.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Co:return t=Wt(31,e,l,n),t.elementType=Co,t.lanes=i,t;case ca:return Ue(e.children,n,i,l);case Of:o=8,n|=24;break;case ko:return t=Wt(12,e,l,n|2),t.elementType=ko,t.lanes=i,t;case Bo:return t=Wt(13,e,l,n),t.elementType=Bo,t.lanes=i,t;case wo:return t=Wt(19,e,l,n),t.elementType=wo,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xl:o=10;break t;case _f:o=9;break t;case Nc:o=11;break t;case zc:o=14;break t;case le:o=16,a=null;break t}o=29,e=Error(E(130,t===null?"null":typeof t,"")),a=null}return l=Wt(o,e,l,n),l.elementType=t,l.type=a,l.lanes=i,l}function Ue(t,l,e,a){return t=Wt(7,t,a,l),t.lanes=e,t}function uo(t,l,e){return t=Wt(6,t,null,l),t.lanes=e,t}function hd(t){var l=Wt(18,null,null,0);return l.stateNode=t,l}function oo(t,l,e){return l=Wt(4,t.children!==null?t.children:[],t.key,l),l.lanes=e,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var Nr=new WeakMap;function dl(t,l){if(typeof t=="object"&&t!==null){var e=Nr.get(t);return e!==void 0?e:(l={value:t,source:l,stack:ir(l)},Nr.set(t,l),l)}return{value:t,source:l,stack:ir(l)}}var ya=[],ga=0,Zi=null,Mn=0,sl=[],rl=0,Ee=null,Sl=1,Al="";function Hl(t,l){ya[ga++]=Mn,ya[ga++]=Zi,Zi=t,Mn=l}function vd(t,l,e){sl[rl++]=Sl,sl[rl++]=Al,sl[rl++]=Ee,Ee=t;var a=Sl;t=Al;var n=32-tl(a)-1;a&=~(1<<n),e+=1;var i=32-tl(l)+n;if(30<i){var o=n-n%5;i=(a&(1<<o)-1).toString(32),a>>=o,n-=o,Sl=1<<32-tl(l)+n|e<<n|a,Al=i+t}else Sl=1<<i|e<<n|a,Al=t}function Xc(t){t.return!==null&&(Hl(t,1),vd(t,1,0))}function Lc(t){for(;t===Zi;)Zi=ya[--ga],ya[ga]=null,Mn=ya[--ga],ya[ga]=null;for(;t===Ee;)Ee=sl[--rl],sl[rl]=null,Al=sl[--rl],sl[rl]=null,Sl=sl[--rl],sl[rl]=null}function yd(t,l){sl[rl++]=Sl,sl[rl++]=Al,sl[rl++]=Ee,Sl=l.id,Al=l.overflow,Ee=t}var Ct=null,nt=null,V=!1,me=null,ml=!1,Jo=Error(E(519));function Se(t){var l=Error(E(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Dn(dl(l,t)),Jo}function zr(t){var l=t.stateNode,e=t.type,a=t.memoizedProps;switch(l[wt]=t,l[Vt]=a,e){case"dialog":X("cancel",l),X("close",l);break;case"iframe":case"object":case"embed":X("load",l);break;case"video":case"audio":for(e=0;e<Cn.length;e++)X(Cn[e],l);break;case"source":X("error",l);break;case"img":case"image":case"link":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"input":X("invalid",l),Kf(l,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":X("invalid",l);break;case"textarea":X("invalid",l),$f(l,a.value,a.defaultValue,a.children)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||l.textContent===""+e||a.suppressHydrationWarning===!0||P0(l.textContent,e)?(a.popover!=null&&(X("beforetoggle",l),X("toggle",l)),a.onScroll!=null&&X("scroll",l),a.onScrollEnd!=null&&X("scrollend",l),a.onClick!=null&&(l.onclick=Ll),l=!0):l=!1,l||Se(t,!0)}function Tr(t){for(Ct=t.return;Ct;)switch(Ct.tag){case 5:case 31:case 13:ml=!1;return;case 27:case 3:ml=!0;return;default:Ct=Ct.return}}function na(t){if(t!==Ct)return!1;if(!V)return Tr(t),V=!0,!1;var l=t.tag,e;if((e=l!==3&&l!==27)&&((e=l===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||yc(t.type,t.memoizedProps)),e=!e),e&&nt&&Se(t),Tr(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));nt=hf(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));nt=hf(t)}else l===27?(l=nt,Te(t.type)?(t=Ec,Ec=null,nt=t):nt=l):nt=Ct?hl(t.stateNode.nextSibling):null;return!0}function Xe(){nt=Ct=null,V=!1}function co(){var t=me;return t!==null&&(Qt===null?Qt=t:Qt.push.apply(Qt,t),me=null),t}function Dn(t){me===null?me=[t]:me.push(t)}var Ko=Tl(null),Fe=null,jl=null;function ae(t,l,e){lt(Ko,l._currentValue),l._currentValue=e}function Ql(t){t._currentValue=Ko.current,kt(Ko)}function Fo(t,l,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,a!==null&&(a.childLanes|=l)):a!==null&&(a.childLanes&l)!==l&&(a.childLanes|=l),t===e)break;t=t.return}}function $o(t,l,e,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var o=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<l.length;s++)if(c.context===l[s]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Fo(i.return,e,t),a||(o=null);break t}i=c.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(E(341));o.lanes|=e,i=o.alternate,i!==null&&(i.lanes|=e),Fo(o,e,t),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===t){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function La(t,l,e,a){t=null;for(var n=l,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(E(387));if(o=o.memoizedProps,o!==null){var c=n.type;el(n.pendingProps.value,o.value)||(t!==null?t.push(c):t=[c])}}else if(n===Hi.current){if(o=n.alternate,o===null)throw Error(E(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(_n):t=[_n])}n=n.return}t!==null&&$o(l,t,e,a),l.flags|=262144}function Vi(t){for(t=t.firstContext;t!==null;){if(!el(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Le(t){Fe=t,jl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ot(t){return gd(Fe,t)}function di(t,l){return Fe===null&&Le(t),gd(t,l)}function gd(t,l){var e=l._currentValue;if(l={context:l,memoizedValue:e,next:null},jl===null){if(t===null)throw Error(E(308));jl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else jl=jl.next=l;return e}var g1=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){l.aborted=!0,t.forEach(function(e){return e()})}},b1=Nt.unstable_scheduleCallback,x1=Nt.unstable_NormalPriority,bt={$$typeof:Xl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jc(){return{controller:new g1,data:new Map,refCount:0}}function Qn(t){t.refCount--,t.refCount===0&&b1(x1,function(){t.controller.abort()})}var mn=null,Wo=0,Ba=0,Aa=null;function E1(t,l){if(mn===null){var e=mn=[];Wo=0,Ba=ds(),Aa={status:"pending",value:void 0,then:function(a){e.push(a)}}}return Wo++,l.then(Mr,Mr),l}function Mr(){if(--Wo===0&&mn!==null){Aa!==null&&(Aa.status="fulfilled");var t=mn;mn=null,Ba=0,Aa=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function S1(t,l){var e=[],a={status:"pending",value:null,reason:null,then:function(n){e.push(n)}};return t.then(function(){a.status="fulfilled",a.value=l;for(var n=0;n<e.length;n++)(0,e[n])(l)},function(n){for(a.status="rejected",a.reason=n,n=0;n<e.length;n++)(0,e[n])(void 0)}),a}var Dr=O.S;O.S=function(t,l){C0=It(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&E1(t,l),Dr!==null&&Dr(t,l)};var qe=Tl(null);function Gc(){var t=qe.current;return t!==null?t:tt.pooledCache}function Mi(t,l){l===null?lt(qe,qe.current):lt(qe,l.pool)}function bd(){var t=Gc();return t===null?null:{parent:bt._currentValue,pool:t}}var ja=Error(E(460)),Qc=Error(E(474)),gu=Error(E(542)),Ji={then:function(){}};function kr(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xd(t,l,e){switch(e=t[e],e===void 0?t.push(l):e!==l&&(l.then(Ll,Ll),l=e),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,wr(t),t;default:if(typeof l.status=="string")l.then(Ll,Ll);else{if(t=tt,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=l,t.status="pending",t.then(function(a){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=a}},function(a){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=a}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,wr(t),t}throw He=l,ja}}function Ce(t){try{var l=t._init;return l(t._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(He=e,ja):e}}var He=null;function Br(){if(He===null)throw Error(E(459));var t=He;return He=null,t}function wr(t){if(t===ja||t===gu)throw Error(E(483))}var Na=null,kn=0;function mi(t){var l=kn;return kn+=1,Na===null&&(Na=[]),xd(Na,t,l)}function Pa(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function pi(t,l){throw l.$$typeof===cp?Error(E(525)):(t=Object.prototype.toString.call(l),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Ed(t){function l(f,r){if(t){var d=f.deletions;d===null?(f.deletions=[r],f.flags|=16):d.push(r)}}function e(f,r){if(!t)return null;for(;r!==null;)l(f,r),r=r.sibling;return null}function a(f){for(var r=new Map;f!==null;)f.key!==null?r.set(f.key,f):r.set(f.index,f),f=f.sibling;return r}function n(f,r){return f=Gl(f,r),f.index=0,f.sibling=null,f}function i(f,r,d){return f.index=d,t?(d=f.alternate,d!==null?(d=d.index,d<r?(f.flags|=67108866,r):d):(f.flags|=67108866,r)):(f.flags|=1048576,r)}function o(f){return t&&f.alternate===null&&(f.flags|=67108866),f}function c(f,r,d,g){return r===null||r.tag!==6?(r=uo(d,f.mode,g),r.return=f,r):(r=n(r,d),r.return=f,r)}function s(f,r,d,g){var N=d.type;return N===ca?v(f,r,d.props.children,g,d.key):r!==null&&(r.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===le&&Ce(N)===r.type)?(r=n(r,d.props),Pa(r,d),r.return=f,r):(r=Ti(d.type,d.key,d.props,null,f.mode,g),Pa(r,d),r.return=f,r)}function m(f,r,d,g){return r===null||r.tag!==4||r.stateNode.containerInfo!==d.containerInfo||r.stateNode.implementation!==d.implementation?(r=oo(d,f.mode,g),r.return=f,r):(r=n(r,d.children||[]),r.return=f,r)}function v(f,r,d,g,N){return r===null||r.tag!==7?(r=Ue(d,f.mode,g,N),r.return=f,r):(r=n(r,d),r.return=f,r)}function y(f,r,d){if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return r=uo(""+r,f.mode,d),r.return=f,r;if(typeof r=="object"&&r!==null){switch(r.$$typeof){case ni:return d=Ti(r.type,r.key,r.props,null,f.mode,d),Pa(d,r),d.return=f,d;case nn:return r=oo(r,f.mode,d),r.return=f,r;case le:return r=Ce(r),y(f,r,d)}if(un(r)||Ra(r))return r=Ue(r,f.mode,d,null),r.return=f,r;if(typeof r.then=="function")return y(f,mi(r),d);if(r.$$typeof===Xl)return y(f,di(f,r),d);pi(f,r)}return null}function p(f,r,d,g){var N=r!==null?r.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return N!==null?null:c(f,r,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:return d.key===N?s(f,r,d,g):null;case nn:return d.key===N?m(f,r,d,g):null;case le:return d=Ce(d),p(f,r,d,g)}if(un(d)||Ra(d))return N!==null?null:v(f,r,d,g,null);if(typeof d.then=="function")return p(f,r,mi(d),g);if(d.$$typeof===Xl)return p(f,r,di(f,d),g);pi(f,d)}return null}function h(f,r,d,g,N){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return f=f.get(d)||null,c(r,f,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ni:return f=f.get(g.key===null?d:g.key)||null,s(r,f,g,N);case nn:return f=f.get(g.key===null?d:g.key)||null,m(r,f,g,N);case le:return g=Ce(g),h(f,r,d,g,N)}if(un(g)||Ra(g))return f=f.get(d)||null,v(r,f,g,N,null);if(typeof g.then=="function")return h(f,r,d,mi(g),N);if(g.$$typeof===Xl)return h(f,r,d,di(r,g),N);pi(r,g)}return null}function x(f,r,d,g){for(var N=null,M=null,z=r,D=r=0,w=null;z!==null&&D<d.length;D++){z.index>D?(w=z,z=null):w=z.sibling;var C=p(f,z,d[D],g);if(C===null){z===null&&(z=w);break}t&&z&&C.alternate===null&&l(f,z),r=i(C,r,D),M===null?N=C:M.sibling=C,M=C,z=w}if(D===d.length)return e(f,z),V&&Hl(f,D),N;if(z===null){for(;D<d.length;D++)z=y(f,d[D],g),z!==null&&(r=i(z,r,D),M===null?N=z:M.sibling=z,M=z);return V&&Hl(f,D),N}for(z=a(z);D<d.length;D++)w=h(z,f,D,d[D],g),w!==null&&(t&&w.alternate!==null&&z.delete(w.key===null?D:w.key),r=i(w,r,D),M===null?N=w:M.sibling=w,M=w);return t&&z.forEach(function(B){return l(f,B)}),V&&Hl(f,D),N}function b(f,r,d,g){if(d==null)throw Error(E(151));for(var N=null,M=null,z=r,D=r=0,w=null,C=d.next();z!==null&&!C.done;D++,C=d.next()){z.index>D?(w=z,z=null):w=z.sibling;var B=p(f,z,C.value,g);if(B===null){z===null&&(z=w);break}t&&z&&B.alternate===null&&l(f,z),r=i(B,r,D),M===null?N=B:M.sibling=B,M=B,z=w}if(C.done)return e(f,z),V&&Hl(f,D),N;if(z===null){for(;!C.done;D++,C=d.next())C=y(f,C.value,g),C!==null&&(r=i(C,r,D),M===null?N=C:M.sibling=C,M=C);return V&&Hl(f,D),N}for(z=a(z);!C.done;D++,C=d.next())C=h(z,f,D,C.value,g),C!==null&&(t&&C.alternate!==null&&z.delete(C.key===null?D:C.key),r=i(C,r,D),M===null?N=C:M.sibling=C,M=C);return t&&z.forEach(function(H){return l(f,H)}),V&&Hl(f,D),N}function S(f,r,d,g){if(typeof d=="object"&&d!==null&&d.type===ca&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case ni:t:{for(var N=d.key;r!==null;){if(r.key===N){if(N=d.type,N===ca){if(r.tag===7){e(f,r.sibling),g=n(r,d.props.children),g.return=f,f=g;break t}}else if(r.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===le&&Ce(N)===r.type){e(f,r.sibling),g=n(r,d.props),Pa(g,d),g.return=f,f=g;break t}e(f,r);break}else l(f,r);r=r.sibling}d.type===ca?(g=Ue(d.props.children,f.mode,g,d.key),g.return=f,f=g):(g=Ti(d.type,d.key,d.props,null,f.mode,g),Pa(g,d),g.return=f,f=g)}return o(f);case nn:t:{for(N=d.key;r!==null;){if(r.key===N)if(r.tag===4&&r.stateNode.containerInfo===d.containerInfo&&r.stateNode.implementation===d.implementation){e(f,r.sibling),g=n(r,d.children||[]),g.return=f,f=g;break t}else{e(f,r);break}else l(f,r);r=r.sibling}g=oo(d,f.mode,g),g.return=f,f=g}return o(f);case le:return d=Ce(d),S(f,r,d,g)}if(un(d))return x(f,r,d,g);if(Ra(d)){if(N=Ra(d),typeof N!="function")throw Error(E(150));return d=N.call(d),b(f,r,d,g)}if(typeof d.then=="function")return S(f,r,mi(d),g);if(d.$$typeof===Xl)return S(f,r,di(f,d),g);pi(f,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,r!==null&&r.tag===6?(e(f,r.sibling),g=n(r,d),g.return=f,f=g):(e(f,r),g=uo(d,f.mode,g),g.return=f,f=g),o(f)):e(f,r)}return function(f,r,d,g){try{kn=0;var N=S(f,r,d,g);return Na=null,N}catch(z){if(z===ja||z===gu)throw z;var M=Wt(29,z,null,f.mode);return M.lanes=g,M.return=f,M}}}var je=Ed(!0),Sd=Ed(!1),ee=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ro(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function he(t,l,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(K&2)!==0){var n=a.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),a.pending=l,l=Qi(t),md(t,null,e),l}return yu(t,a,l,e),Qi(t)}function pn(t,l,e){if(l=l.updateQueue,l!==null&&(l=l.shared,(e&4194048)!==0)){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Lf(t,e)}}function so(t,l){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var n=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var o={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?n=i=o:i=i.next=o,e=e.next}while(e!==null);i===null?n=i=l:i=i.next=l}else n=i=l;e={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=l:t.next=l,e.lastBaseUpdate=l}var Io=!1;function hn(){if(Io){var t=Aa;if(t!==null)throw t}}function vn(t,l,e,a){Io=!1;var n=t.updateQueue;ee=!1;var i=n.firstBaseUpdate,o=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,o===null?i=m:o.next=m,o=s;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==o&&(c===null?v.firstBaseUpdate=m:c.next=m,v.lastBaseUpdate=s))}if(i!==null){var y=n.baseState;o=0,v=m=s=null,c=i;do{var p=c.lane&-536870913,h=p!==c.lane;if(h?(Q&p)===p:(a&p)===p){p!==0&&p===Ba&&(Io=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var x=t,b=c;p=l;var S=e;switch(b.tag){case 1:if(x=b.payload,typeof x=="function"){y=x.call(S,y,p);break t}y=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,p=typeof x=="function"?x.call(S,y,p):x,p==null)break t;y=it({},y,p);break t;case 2:ee=!0}}p=c.callback,p!==null&&(t.flags|=64,h&&(t.flags|=8192),h=n.callbacks,h===null?n.callbacks=[p]:h.push(p))}else h={lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(m=v=h,s=y):v=v.next=h,o|=p;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;h=c,c=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);v===null&&(s=y),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),Ne|=o,t.lanes=o,t.memoizedState=y}}function Ad(t,l){if(typeof t!="function")throw Error(E(191,t));t.call(l)}function Nd(t,l){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)Ad(e[t],l)}var wa=Tl(null),Ki=Tl(0);function Cr(t,l){t=$l,lt(Ki,t),lt(wa,l),$l=t|l.baseLanes}function Po(){lt(Ki,$l),lt(wa,wa.current)}function Vc(){$l=Ki.current,kt(wa),kt(Ki)}var al=Tl(null),pl=null;function ne(t){var l=t.alternate;lt(pt,pt.current&1),lt(al,t),pl===null&&(l===null||wa.current!==null||l.memoizedState!==null)&&(pl=t)}function tc(t){lt(pt,pt.current),lt(al,t),pl===null&&(pl=t)}function zd(t){t.tag===22?(lt(pt,pt.current),lt(al,t),pl===null&&(pl=t)):ie(t)}function ie(){lt(pt,pt.current),lt(al,al.current)}function $t(t){kt(al),pl===t&&(pl=null),kt(pt)}var pt=Tl(0);function Fi(t){for(var l=t;l!==null;){if(l.tag===13){var e=l.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||bc(e)||xc(e)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Jl=0,q=null,I=null,yt=null,$i=!1,za=!1,Ge=!1,Wi=0,Bn=0,Ta=null,A1=0;function dt(){throw Error(E(321))}function Jc(t,l){if(l===null)return!1;for(var e=0;e<l.length&&e<t.length;e++)if(!el(t[e],l[e]))return!1;return!0}function Kc(t,l,e,a,n,i){return Jl=i,q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,O.H=t===null||t.memoizedState===null?e0:ns,Ge=!1,i=e(a,n),Ge=!1,za&&(i=Md(l,e,a,n)),Td(t),i}function Td(t){O.H=wn;var l=I!==null&&I.next!==null;if(Jl=0,yt=I=q=null,$i=!1,Bn=0,Ta=null,l)throw Error(E(300));t===null||xt||(t=t.dependencies,t!==null&&Vi(t)&&(xt=!0))}function Md(t,l,e,a){q=t;var n=0;do{if(za&&(Ta=null),Bn=0,za=!1,25<=n)throw Error(E(301));if(n+=1,yt=I=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=a0,i=l(e,a)}while(za);return i}function N1(){var t=O.H,l=t.useState()[0];return l=typeof l.then=="function"?Zn(l):l,t=t.useState()[0],(I!==null?I.memoizedState:null)!==t&&(q.flags|=1024),l}function Fc(){var t=Wi!==0;return Wi=0,t}function $c(t,l,e){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~e}function Wc(t){if($i){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}$i=!1}Jl=0,yt=I=q=null,za=!1,Bn=Wi=0,Ta=null}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?q.memoizedState=yt=t:yt=yt.next=t,yt}function ht(){if(I===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=I.next;var l=yt===null?q.memoizedState:yt.next;if(l!==null)yt=l,I=t;else{if(t===null)throw q.alternate===null?Error(E(467)):Error(E(310));I=t,t={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},yt===null?q.memoizedState=yt=t:yt=yt.next=t}return yt}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zn(t){var l=Bn;return Bn+=1,Ta===null&&(Ta=[]),t=xd(Ta,t,l),l=q,(yt===null?l.memoizedState:yt.next)===null&&(l=l.alternate,O.H=l===null||l.memoizedState===null?e0:ns),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zn(t);if(t.$$typeof===Xl)return Ot(t)}throw Error(E(438,String(t)))}function Rc(t){var l=null,e=q.updateQueue;if(e!==null&&(l=e.memoCache),l==null){var a=q.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(l={data:a.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),e===null&&(e=bu(),q.updateQueue=e),e.memoCache=l,e=l.data[l.index],e===void 0)for(e=l.data[l.index]=Array(t),a=0;a<t;a++)e[a]=sp;return l.index++,e}function Kl(t,l){return typeof l=="function"?l(t):l}function Di(t){var l=ht();return Ic(l,I,t)}function Ic(t,l,e){var a=t.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=e;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var o=n.next;n.next=i.next,i.next=o}l.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{l=n.next;var c=o=null,s=null,m=l,v=!1;do{var y=m.lane&-536870913;if(y!==m.lane?(Q&y)===y:(Jl&y)===y){var p=m.revertLane;if(p===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),y===Ba&&(v=!0);else if((Jl&p)===p){m=m.next,p===Ba&&(v=!0);continue}else y={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=y,o=i):s=s.next=y,q.lanes|=p,Ne|=p;y=m.action,Ge&&e(i,y),i=m.hasEagerState?m.eagerState:e(i,y)}else p={lane:y,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=p,o=i):s=s.next=p,q.lanes|=y,Ne|=y;m=m.next}while(m!==null&&m!==l);if(s===null?o=i:s.next=c,!el(i,t.memoizedState)&&(xt=!0,v&&(e=Aa,e!==null)))throw e;t.memoizedState=i,t.baseState=o,t.baseQueue=s,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function ro(t){var l=ht(),e=l.queue;if(e===null)throw Error(E(311));e.lastRenderedReducer=t;var a=e.dispatch,n=e.pending,i=l.memoizedState;if(n!==null){e.pending=null;var o=n=n.next;do i=t(i,o.action),o=o.next;while(o!==n);el(i,l.memoizedState)||(xt=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),e.lastRenderedState=i}return[i,a]}function Dd(t,l,e){var a=q,n=ht(),i=V;if(i){if(e===void 0)throw Error(E(407));e=e()}else e=l();var o=!el((I||n).memoizedState,e);if(o&&(n.memoizedState=e,xt=!0),n=n.queue,Pc(wd.bind(null,a,n,t),[t]),n.getSnapshot!==l||o||yt!==null&&yt.memoizedState.tag&1){if(a.flags|=2048,Ca(9,{destroy:void 0},Bd.bind(null,a,n,e,l),null),tt===null)throw Error(E(349));i||(Jl&127)!==0||kd(a,l,e)}return e}function kd(t,l,e){t.flags|=16384,t={getSnapshot:l,value:e},l=q.updateQueue,l===null?(l=bu(),q.updateQueue=l,l.stores=[t]):(e=l.stores,e===null?l.stores=[t]:e.push(t))}function Bd(t,l,e,a){l.value=e,l.getSnapshot=a,Cd(l)&&Od(t)}function wd(t,l,e){return e(function(){Cd(l)&&Od(t)})}function Cd(t){var l=t.getSnapshot;t=t.value;try{var e=l();return!el(t,e)}catch{return!0}}function Od(t){var l=Ke(t,2);l!==null&&Zt(l,t,2)}function lc(t){var l=Xt();if(typeof t=="function"){var e=t;if(t=e(),Ge){oe(!0);try{e()}finally{oe(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:t},l}function _d(t,l,e,a){return t.baseState=e,Ic(t,I,typeof a=="function"?a:Kl)}function z1(t,l,e,a,n){if(Su(t))throw Error(E(485));if(t=l.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){i.listeners.push(o)}};O.T!==null?e(!0):i.isTransition=!1,a(i),e=l.pending,e===null?(i.next=l.pending=i,Ud(l,i)):(i.next=e.next,l.pending=e.next=i)}}function Ud(t,l){var e=l.action,a=l.payload,n=t.state;if(l.isTransition){var i=O.T,o={};O.T=o;try{var c=e(n,a),s=O.S;s!==null&&s(o,c),Or(t,l,c)}catch(m){ec(t,l,m)}finally{i!==null&&o.types!==null&&(i.types=o.types),O.T=i}}else try{i=e(n,a),Or(t,l,i)}catch(m){ec(t,l,m)}}function Or(t,l,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){_r(t,l,a)},function(a){return ec(t,l,a)}):_r(t,l,e)}function _r(t,l,e){l.status="fulfilled",l.value=e,qd(l),t.state=e,l=t.pending,l!==null&&(e=l.next,e===l?t.pending=null:(e=e.next,l.next=e,Ud(t,e)))}function ec(t,l,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do l.status="rejected",l.reason=e,qd(l),l=l.next;while(l!==a)}t.action=null}function qd(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Hd(t,l){return l}function Ur(t,l){if(V){var e=tt.formState;if(e!==null){t:{var a=q;if(V){if(nt){l:{for(var n=nt,i=ml;n.nodeType!==8;){if(!i){n=null;break l}if(n=hl(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){nt=hl(n.nextSibling),a=n.data==="F!";break t}}Se(a)}a=!1}a&&(l=e[0])}}return e=Xt(),e.memoizedState=e.baseState=l,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:l},e.queue=a,e=Pd.bind(null,q,a),a.dispatch=e,a=lc(!1),i=as.bind(null,q,!1,a.queue),a=Xt(),n={state:l,dispatch:null,action:t,pending:null},a.queue=n,e=z1.bind(null,q,n,i,e),n.dispatch=e,a.memoizedState=t,[l,e,!1]}function qr(t){var l=ht();return Yd(l,I,t)}function Yd(t,l,e){if(l=Ic(t,l,Hd)[0],t=Di(Kl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var a=Zn(l)}catch(o){throw o===ja?gu:o}else a=l;l=ht();var n=l.queue,i=n.dispatch;return e!==l.memoizedState&&(q.flags|=2048,Ca(9,{destroy:void 0},T1.bind(null,n,e),null)),[a,i,t]}function T1(t,l){t.action=l}function Hr(t){var l=ht(),e=I;if(e!==null)return Yd(l,e,t);ht(),l=l.memoizedState,e=ht();var a=e.queue.dispatch;return e.memoizedState=t,[l,a,!1]}function Ca(t,l,e,a){return t={tag:t,create:e,deps:a,inst:l,next:null},l=q.updateQueue,l===null&&(l=bu(),q.updateQueue=l),e=l.lastEffect,e===null?l.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,l.lastEffect=t),t}function Xd(){return ht().memoizedState}function ki(t,l,e,a){var n=Xt();q.flags|=t,n.memoizedState=Ca(1|l,{destroy:void 0},e,a===void 0?null:a)}function Eu(t,l,e,a){var n=ht();a=a===void 0?null:a;var i=n.memoizedState.inst;I!==null&&a!==null&&Jc(a,I.memoizedState.deps)?n.memoizedState=Ca(l,i,e,a):(q.flags|=t,n.memoizedState=Ca(1|l,i,e,a))}function Yr(t,l){ki(8390656,8,t,l)}function Pc(t,l){Eu(2048,8,t,l)}function M1(t){q.flags|=4;var l=q.updateQueue;if(l===null)l=bu(),q.updateQueue=l,l.events=[t];else{var e=l.events;e===null?l.events=[t]:e.push(t)}}function Ld(t){var l=ht().memoizedState;return M1({ref:l,nextImpl:t}),function(){if((K&2)!==0)throw Error(E(440));return l.impl.apply(void 0,arguments)}}function jd(t,l){return Eu(4,2,t,l)}function Gd(t,l){return Eu(4,4,t,l)}function Qd(t,l){if(typeof l=="function"){t=t();var e=l(t);return function(){typeof e=="function"?e():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function Zd(t,l,e){e=e!=null?e.concat([t]):null,Eu(4,4,Qd.bind(null,l,t),e)}function ts(){}function Vd(t,l){var e=ht();l=l===void 0?null:l;var a=e.memoizedState;return l!==null&&Jc(l,a[1])?a[0]:(e.memoizedState=[t,l],t)}function Jd(t,l){var e=ht();l=l===void 0?null:l;var a=e.memoizedState;if(l!==null&&Jc(l,a[1]))return a[0];if(a=t(),Ge){oe(!0);try{t()}finally{oe(!1)}}return e.memoizedState=[a,l],a}function ls(t,l,e){return e===void 0||(Jl&1073741824)!==0&&(Q&261930)===0?t.memoizedState=l:(t.memoizedState=e,t=_0(),q.lanes|=t,Ne|=t,e)}function Kd(t,l,e,a){return el(e,l)?e:wa.current!==null?(t=ls(t,e,a),el(t,l)||(xt=!0),t):(Jl&42)===0||(Jl&1073741824)!==0&&(Q&261930)===0?(xt=!0,t.memoizedState=e):(t=_0(),q.lanes|=t,Ne|=t,l)}function Fd(t,l,e,a,n){var i=F.p;F.p=i!==0&&8>i?i:8;var o=O.T,c={};O.T=c,as(t,!1,l,e);try{var s=n(),m=O.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=S1(s,a);yn(t,l,v,ll(t))}else yn(t,l,a,ll(t))}catch(y){yn(t,l,{then:function(){},status:"rejected",reason:y},ll())}finally{F.p=i,o!==null&&c.types!==null&&(o.types=c.types),O.T=o}}function D1(){}function ac(t,l,e,a){if(t.tag!==5)throw Error(E(476));var n=$d(t).queue;Fd(t,n,l,_e,e===null?D1:function(){return Wd(t),e(a)})}function $d(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:_e},next:null};var e={};return l.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kl,lastRenderedState:e},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function Wd(t){var l=$d(t);l.next===null&&(l=t.alternate.memoizedState),yn(t,l.next.queue,{},ll())}function es(){return Ot(_n)}function Rd(){return ht().memoizedState}function Id(){return ht().memoizedState}function k1(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var e=ll();t=pe(e);var a=he(l,t,e);a!==null&&(Zt(a,l,e),pn(a,l,e)),l={cache:jc()},t.payload=l;return}l=l.return}}function B1(t,l,e){var a=ll();e={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Su(t)?t0(l,e):(e=Hc(t,l,e,a),e!==null&&(Zt(e,t,a),l0(e,l,a)))}function Pd(t,l,e){var a=ll();yn(t,l,e,a)}function yn(t,l,e,a){var n={lane:a,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(Su(t))t0(l,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var o=l.lastRenderedState,c=i(o,e);if(n.hasEagerState=!0,n.eagerState=c,el(c,o))return yu(t,l,n,0),tt===null&&vu(),!1}catch{}if(e=Hc(t,l,n,a),e!==null)return Zt(e,t,a),l0(e,l,a),!0}return!1}function as(t,l,e,a){if(a={lane:2,revertLane:ds(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Su(t)){if(l)throw Error(E(479))}else l=Hc(t,e,a,2),l!==null&&Zt(l,t,2)}function Su(t){var l=t.alternate;return t===q||l!==null&&l===q}function t0(t,l){za=$i=!0;var e=t.pending;e===null?l.next=l:(l.next=e.next,e.next=l),t.pending=l}function l0(t,l,e){if((e&4194048)!==0){var a=l.lanes;a&=t.pendingLanes,e|=a,l.lanes=e,Lf(t,e)}}var wn={readContext:Ot,use:xu,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useLayoutEffect:dt,useInsertionEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useSyncExternalStore:dt,useId:dt,useHostTransitionStatus:dt,useFormState:dt,useActionState:dt,useOptimistic:dt,useMemoCache:dt,useCacheRefresh:dt};wn.useEffectEvent=dt;var e0={readContext:Ot,use:xu,useCallback:function(t,l){return Xt().memoizedState=[t,l===void 0?null:l],t},useContext:Ot,useEffect:Yr,useImperativeHandle:function(t,l,e){e=e!=null?e.concat([t]):null,ki(4194308,4,Qd.bind(null,l,t),e)},useLayoutEffect:function(t,l){return ki(4194308,4,t,l)},useInsertionEffect:function(t,l){ki(4,2,t,l)},useMemo:function(t,l){var e=Xt();l=l===void 0?null:l;var a=t();if(Ge){oe(!0);try{t()}finally{oe(!1)}}return e.memoizedState=[a,l],a},useReducer:function(t,l,e){var a=Xt();if(e!==void 0){var n=e(l);if(Ge){oe(!0);try{e(l)}finally{oe(!1)}}}else n=l;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=B1.bind(null,q,t),[a.memoizedState,t]},useRef:function(t){var l=Xt();return t={current:t},l.memoizedState=t},useState:function(t){t=lc(t);var l=t.queue,e=Pd.bind(null,q,l);return l.dispatch=e,[t.memoizedState,e]},useDebugValue:ts,useDeferredValue:function(t,l){var e=Xt();return ls(e,t,l)},useTransition:function(){var t=lc(!1);return t=Fd.bind(null,q,t.queue,!0,!1),Xt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,e){var a=q,n=Xt();if(V){if(e===void 0)throw Error(E(407));e=e()}else{if(e=l(),tt===null)throw Error(E(349));(Q&127)!==0||kd(a,l,e)}n.memoizedState=e;var i={value:e,getSnapshot:l};return n.queue=i,Yr(wd.bind(null,a,i,t),[t]),a.flags|=2048,Ca(9,{destroy:void 0},Bd.bind(null,a,i,e,l),null),e},useId:function(){var t=Xt(),l=tt.identifierPrefix;if(V){var e=Al,a=Sl;e=(a&~(1<<32-tl(a)-1)).toString(32)+e,l="_"+l+"R_"+e,e=Wi++,0<e&&(l+="H"+e.toString(32)),l+="_"}else e=A1++,l="_"+l+"r_"+e.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:es,useFormState:Ur,useActionState:Ur,useOptimistic:function(t){var l=Xt();l.memoizedState=l.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=e,l=as.bind(null,q,!0,e),e.dispatch=l,[t,l]},useMemoCache:Rc,useCacheRefresh:function(){return Xt().memoizedState=k1.bind(null,q)},useEffectEvent:function(t){var l=Xt(),e={impl:t};return l.memoizedState=e,function(){if((K&2)!==0)throw Error(E(440));return e.impl.apply(void 0,arguments)}}},ns={readContext:Ot,use:xu,useCallback:Vd,useContext:Ot,useEffect:Pc,useImperativeHandle:Zd,useInsertionEffect:jd,useLayoutEffect:Gd,useMemo:Jd,useReducer:Di,useRef:Xd,useState:function(){return Di(Kl)},useDebugValue:ts,useDeferredValue:function(t,l){var e=ht();return Kd(e,I.memoizedState,t,l)},useTransition:function(){var t=Di(Kl)[0],l=ht().memoizedState;return[typeof t=="boolean"?t:Zn(t),l]},useSyncExternalStore:Dd,useId:Rd,useHostTransitionStatus:es,useFormState:qr,useActionState:qr,useOptimistic:function(t,l){var e=ht();return _d(e,I,t,l)},useMemoCache:Rc,useCacheRefresh:Id};ns.useEffectEvent=Ld;var a0={readContext:Ot,use:xu,useCallback:Vd,useContext:Ot,useEffect:Pc,useImperativeHandle:Zd,useInsertionEffect:jd,useLayoutEffect:Gd,useMemo:Jd,useReducer:ro,useRef:Xd,useState:function(){return ro(Kl)},useDebugValue:ts,useDeferredValue:function(t,l){var e=ht();return I===null?ls(e,t,l):Kd(e,I.memoizedState,t,l)},useTransition:function(){var t=ro(Kl)[0],l=ht().memoizedState;return[typeof t=="boolean"?t:Zn(t),l]},useSyncExternalStore:Dd,useId:Rd,useHostTransitionStatus:es,useFormState:Hr,useActionState:Hr,useOptimistic:function(t,l){var e=ht();return I!==null?_d(e,I,t,l):(e.baseState=t,[t,e.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:Id};a0.useEffectEvent=Ld;function fo(t,l,e,a){l=t.memoizedState,e=e(a,l),e=e==null?l:it({},l,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var nc={enqueueSetState:function(t,l,e){t=t._reactInternals;var a=ll(),n=pe(a);n.payload=l,e!=null&&(n.callback=e),l=he(t,n,a),l!==null&&(Zt(l,t,a),pn(l,t,a))},enqueueReplaceState:function(t,l,e){t=t._reactInternals;var a=ll(),n=pe(a);n.tag=1,n.payload=l,e!=null&&(n.callback=e),l=he(t,n,a),l!==null&&(Zt(l,t,a),pn(l,t,a))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var e=ll(),a=pe(e);a.tag=2,l!=null&&(a.callback=l),l=he(t,a,e),l!==null&&(Zt(l,t,e),pn(l,t,e))}};function Xr(t,l,e,a,n,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,o):l.prototype&&l.prototype.isPureReactComponent?!Tn(e,a)||!Tn(n,i):!0}function Lr(t,l,e,a){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(e,a),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(e,a),l.state!==t&&nc.enqueueReplaceState(l,l.state,null)}function Qe(t,l){var e=l;if("ref"in l){e={};for(var a in l)a!=="ref"&&(e[a]=l[a])}if(t=t.defaultProps){e===l&&(e=it({},e));for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}function n0(t){Gi(t)}function i0(t){console.error(t)}function u0(t){Gi(t)}function Ri(t,l){try{var e=t.onUncaughtError;e(l.value,{componentStack:l.stack})}catch(a){setTimeout(function(){throw a})}}function jr(t,l,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ic(t,l,e){return e=pe(e),e.tag=3,e.payload={element:null},e.callback=function(){Ri(t,l)},e}function o0(t){return t=pe(t),t.tag=3,t}function c0(t,l,e,a){var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){jr(l,e,a)}}var o=e.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(t.callback=function(){jr(l,e,a),typeof n!="function"&&(ve===null?ve=new Set([this]):ve.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function w1(t,l,e,a,n){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(l=e.alternate,l!==null&&La(l,e,n,!0),e=al.current,e!==null){switch(e.tag){case 31:case 13:return pl===null?eu():e.alternate===null&&mt===0&&(mt=3),e.flags&=-257,e.flags|=65536,e.lanes=n,a===Ji?e.flags|=16384:(l=e.updateQueue,l===null?e.updateQueue=new Set([a]):l.add(a),Ao(t,a,n)),!1;case 22:return e.flags|=65536,a===Ji?e.flags|=16384:(l=e.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=l):(e=l.retryQueue,e===null?l.retryQueue=new Set([a]):e.add(a)),Ao(t,a,n)),!1}throw Error(E(435,e.tag))}return Ao(t,a,n),eu(),!1}if(V)return l=al.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,a!==Jo&&(t=Error(E(422),{cause:a}),Dn(dl(t,e)))):(a!==Jo&&(l=Error(E(423),{cause:a}),Dn(dl(l,e))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=dl(a,e),n=ic(t.stateNode,a,n),so(t,n),mt!==4&&(mt=2)),!1;var i=Error(E(520),{cause:a});if(i=dl(i,e),xn===null?xn=[i]:xn.push(i),mt!==4&&(mt=2),l===null)return!0;a=dl(a,e),e=l;do{switch(e.tag){case 3:return e.flags|=65536,t=n&-n,e.lanes|=t,t=ic(e.stateNode,a,t),so(e,t),!1;case 1:if(l=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ve===null||!ve.has(i))))return e.flags|=65536,n&=-n,e.lanes|=n,n=o0(n),c0(n,t,e,a),so(e,n),!1}e=e.return}while(e!==null);return!1}var is=Error(E(461)),xt=!1;function Bt(t,l,e,a){l.child=t===null?Sd(l,null,e,a):je(l,t.child,e,a)}function Gr(t,l,e,a,n){e=e.render;var i=l.ref;if("ref"in a){var o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}else o=a;return Le(l),a=Kc(t,l,e,o,i,n),c=Fc(),t!==null&&!xt?($c(t,l,n),Fl(t,l,n)):(V&&c&&Xc(l),l.flags|=1,Bt(t,l,a,n),l.child)}function Qr(t,l,e,a,n){if(t===null){var i=e.type;return typeof i=="function"&&!Yc(i)&&i.defaultProps===void 0&&e.compare===null?(l.tag=15,l.type=i,s0(t,l,i,a,n)):(t=Ti(e.type,null,a,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(i=t.child,!us(t,n)){var o=i.memoizedProps;if(e=e.compare,e=e!==null?e:Tn,e(o,a)&&t.ref===l.ref)return Fl(t,l,n)}return l.flags|=1,t=Gl(i,a),t.ref=l.ref,t.return=l,l.child=t}function s0(t,l,e,a,n){if(t!==null){var i=t.memoizedProps;if(Tn(i,a)&&t.ref===l.ref)if(xt=!1,l.pendingProps=a=i,us(t,n))(t.flags&131072)!==0&&(xt=!0);else return l.lanes=t.lanes,Fl(t,l,n)}return uc(t,l,e,a,n)}function r0(t,l,e,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,t!==null){for(a=l.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,l.child=null;return Zr(t,l,i,e,a)}if((e&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mi(l,i!==null?i.cachePool:null),i!==null?Cr(l,i):Po(),zd(l);else return a=l.lanes=536870912,Zr(t,l,i!==null?i.baseLanes|e:e,e,a)}else i!==null?(Mi(l,i.cachePool),Cr(l,i),ie(l),l.memoizedState=null):(t!==null&&Mi(l,null),Po(),ie(l));return Bt(t,l,n,e),l.child}function cn(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Zr(t,l,e,a,n){var i=Gc();return i=i===null?null:{parent:bt._currentValue,pool:i},l.memoizedState={baseLanes:e,cachePool:i},t!==null&&Mi(l,null),Po(),zd(l),t!==null&&La(t,l,a,!0),l.childLanes=n,null}function Bi(t,l){return l=Ii({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Vr(t,l,e){return je(l,t.child,null,e),t=Bi(l,l.pendingProps),t.flags|=2,$t(l),l.memoizedState=null,t}function C1(t,l,e){var a=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(V){if(a.mode==="hidden")return t=Bi(l,a),l.lanes=536870912,cn(null,t);if(tc(l),(t=nt)?(t=em(t,ml),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Ee!==null?{id:Sl,overflow:Al}:null,retryLane:536870912,hydrationErrors:null},e=hd(t),e.return=l,l.child=e,Ct=l,nt=null)):t=null,t===null)throw Se(l);return l.lanes=536870912,null}return Bi(l,a)}var i=t.memoizedState;if(i!==null){var o=i.dehydrated;if(tc(l),n)if(l.flags&256)l.flags&=-257,l=Vr(t,l,e);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(E(558));else if(xt||La(t,l,e,!1),n=(e&t.childLanes)!==0,xt||n){if(a=tt,a!==null&&(o=jf(a,e),o!==0&&o!==i.retryLane))throw i.retryLane=o,Ke(t,o),Zt(a,t,o),is;eu(),l=Vr(t,l,e)}else t=i.treeContext,nt=hl(o.nextSibling),Ct=l,V=!0,me=null,ml=!1,t!==null&&yd(l,t),l=Bi(l,a),l.flags|=4096;return l}return t=Gl(t.child,{mode:a.mode,children:a.children}),t.ref=l.ref,l.child=t,t.return=l,t}function wi(t,l){var e=l.ref;if(e===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(E(284));(t===null||t.ref!==e)&&(l.flags|=4194816)}}function uc(t,l,e,a,n){return Le(l),e=Kc(t,l,e,a,void 0,n),a=Fc(),t!==null&&!xt?($c(t,l,n),Fl(t,l,n)):(V&&a&&Xc(l),l.flags|=1,Bt(t,l,e,n),l.child)}function Jr(t,l,e,a,n,i){return Le(l),l.updateQueue=null,e=Md(l,a,e,n),Td(t),a=Fc(),t!==null&&!xt?($c(t,l,i),Fl(t,l,i)):(V&&a&&Xc(l),l.flags|=1,Bt(t,l,e,i),l.child)}function Kr(t,l,e,a,n){if(Le(l),l.stateNode===null){var i=va,o=e.contextType;typeof o=="object"&&o!==null&&(i=Ot(o)),i=new e(a,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nc,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=a,i.state=l.memoizedState,i.refs={},Zc(l),o=e.contextType,i.context=typeof o=="object"&&o!==null?Ot(o):va,i.state=l.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(fo(l,e,o,a),i.state=l.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(o=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),o!==i.state&&nc.enqueueReplaceState(i,i.state,null),vn(l,a,i,n),hn(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!0}else if(t===null){i=l.stateNode;var c=l.memoizedProps,s=Qe(e,c);i.props=s;var m=i.context,v=e.contextType;o=va,typeof v=="object"&&v!==null&&(o=Ot(v));var y=e.getDerivedStateFromProps;v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||m!==o)&&Lr(l,i,a,o),ee=!1;var p=l.memoizedState;i.state=p,vn(l,a,i,n),hn(),m=l.memoizedState,c||p!==m||ee?(typeof y=="function"&&(fo(l,e,y,a),m=l.memoizedState),(s=ee||Xr(l,e,s,a,p,m,o))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=a,l.memoizedState=m),i.props=a,i.state=m,i.context=o,a=s):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),a=!1)}else{i=l.stateNode,Ro(t,l),o=l.memoizedProps,v=Qe(e,o),i.props=v,y=l.pendingProps,p=i.context,m=e.contextType,s=va,typeof m=="object"&&m!==null&&(s=Ot(m)),c=e.getDerivedStateFromProps,(m=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o!==y||p!==s)&&Lr(l,i,a,s),ee=!1,p=l.memoizedState,i.state=p,vn(l,a,i,n),hn();var h=l.memoizedState;o!==y||p!==h||ee||t!==null&&t.dependencies!==null&&Vi(t.dependencies)?(typeof c=="function"&&(fo(l,e,c,a),h=l.memoizedState),(v=ee||Xr(l,e,v,a,p,h,s)||t!==null&&t.dependencies!==null&&Vi(t.dependencies))?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,h,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,h,s)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(l.flags|=1024),l.memoizedProps=a,l.memoizedState=h),i.props=a,i.state=h,i.context=s,a=v):(typeof i.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(l.flags|=1024),a=!1)}return i=a,wi(t,l),a=(l.flags&128)!==0,i||a?(i=l.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,t!==null&&a?(l.child=je(l,t.child,null,n),l.child=je(l,null,e,n)):Bt(t,l,e,n),l.memoizedState=i.state,t=l.child):t=Fl(t,l,n),t}function Fr(t,l,e,a){return Xe(),l.flags|=256,Bt(t,l,e,a),l.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function po(t){return{baseLanes:t,cachePool:bd()}}function ho(t,l,e){return t=t!==null?t.childLanes&~e:0,l&&(t|=Rt),t}function f0(t,l,e){var a=l.pendingProps,n=!1,i=(l.flags&128)!==0,o;if((o=i)||(o=t!==null&&t.memoizedState===null?!1:(pt.current&2)!==0),o&&(n=!0,l.flags&=-129),o=(l.flags&32)!==0,l.flags&=-33,t===null){if(V){if(n?ne(l):ie(l),(t=nt)?(t=em(t,ml),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:Ee!==null?{id:Sl,overflow:Al}:null,retryLane:536870912,hydrationErrors:null},e=hd(t),e.return=l,l.child=e,Ct=l,nt=null)):t=null,t===null)throw Se(l);return xc(t)?l.lanes=32:l.lanes=536870912,null}var c=a.children;return a=a.fallback,n?(ie(l),n=l.mode,c=Ii({mode:"hidden",children:c},n),a=Ue(a,n,e,null),c.return=l,a.return=l,c.sibling=a,l.child=c,a=l.child,a.memoizedState=po(e),a.childLanes=ho(t,o,e),l.memoizedState=mo,cn(null,a)):(ne(l),oc(l,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)l.flags&256?(ne(l),l.flags&=-257,l=vo(t,l,e)):l.memoizedState!==null?(ie(l),l.child=t.child,l.flags|=128,l=null):(ie(l),c=a.fallback,n=l.mode,a=Ii({mode:"visible",children:a.children},n),c=Ue(c,n,e,null),c.flags|=2,a.return=l,c.return=l,a.sibling=c,l.child=a,je(l,t.child,null,e),a=l.child,a.memoizedState=po(e),a.childLanes=ho(t,o,e),l.memoizedState=mo,l=cn(null,a));else if(ne(l),xc(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var m=o.dgst;o=m,a=Error(E(419)),a.stack="",a.digest=o,Dn({value:a,source:null,stack:null}),l=vo(t,l,e)}else if(xt||La(t,l,e,!1),o=(e&t.childLanes)!==0,xt||o){if(o=tt,o!==null&&(a=jf(o,e),a!==0&&a!==s.retryLane))throw s.retryLane=a,Ke(t,a),Zt(o,t,a),is;bc(c)||eu(),l=vo(t,l,e)}else bc(c)?(l.flags|=192,l.child=t.child,l=null):(t=s.treeContext,nt=hl(c.nextSibling),Ct=l,V=!0,me=null,ml=!1,t!==null&&yd(l,t),l=oc(l,a.children),l.flags|=4096);return l}return n?(ie(l),c=a.fallback,n=l.mode,s=t.child,m=s.sibling,a=Gl(s,{mode:"hidden",children:a.children}),a.subtreeFlags=s.subtreeFlags&65011712,m!==null?c=Gl(m,c):(c=Ue(c,n,e,null),c.flags|=2),c.return=l,a.return=l,a.sibling=c,l.child=a,cn(null,a),a=l.child,c=t.child.memoizedState,c===null?c=po(e):(n=c.cachePool,n!==null?(s=bt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=bd(),c={baseLanes:c.baseLanes|e,cachePool:n}),a.memoizedState=c,a.childLanes=ho(t,o,e),l.memoizedState=mo,cn(t.child,a)):(ne(l),e=t.child,t=e.sibling,e=Gl(e,{mode:"visible",children:a.children}),e.return=l,e.sibling=null,t!==null&&(o=l.deletions,o===null?(l.deletions=[t],l.flags|=16):o.push(t)),l.child=e,l.memoizedState=null,e)}function oc(t,l){return l=Ii({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function Ii(t,l){return t=Wt(22,t,null,l),t.lanes=0,t}function vo(t,l,e){return je(l,t.child,null,e),t=oc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function $r(t,l,e){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l),Fo(t.return,l,e)}function yo(t,l,e,a,n,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:n,treeForkCount:i}:(o.isBackwards=l,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=e,o.tailMode=n,o.treeForkCount=i)}function d0(t,l,e){var a=l.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var o=pt.current,c=(o&2)!==0;if(c?(o=o&1|2,l.flags|=128):o&=1,lt(pt,o),Bt(t,l,a,e),a=V?Mn:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$r(t,e,l);else if(t.tag===19)$r(t,e,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(e=l.child,n=null;e!==null;)t=e.alternate,t!==null&&Fi(t)===null&&(n=e),e=e.sibling;e=n,e===null?(n=l.child,l.child=null):(n=e.sibling,e.sibling=null),yo(l,!1,n,e,i,a);break;case"backwards":case"unstable_legacy-backwards":for(e=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&Fi(t)===null){l.child=n;break}t=n.sibling,n.sibling=e,e=n,n=t}yo(l,!0,e,null,i,a);break;case"together":yo(l,!1,null,null,void 0,a);break;default:l.memoizedState=null}return l.child}function Fl(t,l,e){if(t!==null&&(l.dependencies=t.dependencies),Ne|=l.lanes,(e&l.childLanes)===0)if(t!==null){if(La(t,l,e,!1),(e&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(E(153));if(l.child!==null){for(t=l.child,e=Gl(t,t.pendingProps),l.child=e,e.return=l;t.sibling!==null;)t=t.sibling,e=e.sibling=Gl(t,t.pendingProps),e.return=l;e.sibling=null}return l.child}function us(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Vi(t)))}function O1(t,l,e){switch(l.tag){case 3:Yi(l,l.stateNode.containerInfo),ae(l,bt,t.memoizedState.cache),Xe();break;case 27:case 5:Uo(l);break;case 4:Yi(l,l.stateNode.containerInfo);break;case 10:ae(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,tc(l),null;break;case 13:var a=l.memoizedState;if(a!==null)return a.dehydrated!==null?(ne(l),l.flags|=128,null):(e&l.child.childLanes)!==0?f0(t,l,e):(ne(l),t=Fl(t,l,e),t!==null?t.sibling:null);ne(l);break;case 19:var n=(t.flags&128)!==0;if(a=(e&l.childLanes)!==0,a||(La(t,l,e,!1),a=(e&l.childLanes)!==0),n){if(a)return d0(t,l,e);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),lt(pt,pt.current),a)break;return null;case 22:return l.lanes=0,r0(t,l,e,l.pendingProps);case 24:ae(l,bt,t.memoizedState.cache)}return Fl(t,l,e)}function m0(t,l,e){if(t!==null)if(t.memoizedProps!==l.pendingProps)xt=!0;else{if(!us(t,e)&&(l.flags&128)===0)return xt=!1,O1(t,l,e);xt=(t.flags&131072)!==0}else xt=!1,V&&(l.flags&1048576)!==0&&vd(l,Mn,l.index);switch(l.lanes=0,l.tag){case 16:t:{var a=l.pendingProps;if(t=Ce(l.elementType),l.type=t,typeof t=="function")Yc(t)?(a=Qe(t,a),l.tag=1,l=Kr(null,l,t,a,e)):(l.tag=0,l=uc(null,l,t,a,e));else{if(t!=null){var n=t.$$typeof;if(n===Nc){l.tag=11,l=Gr(null,l,t,a,e);break t}else if(n===zc){l.tag=14,l=Qr(null,l,t,a,e);break t}}throw l=Oo(t)||t,Error(E(306,l,""))}}return l;case 0:return uc(t,l,l.type,l.pendingProps,e);case 1:return a=l.type,n=Qe(a,l.pendingProps),Kr(t,l,a,n,e);case 3:t:{if(Yi(l,l.stateNode.containerInfo),t===null)throw Error(E(387));a=l.pendingProps;var i=l.memoizedState;n=i.element,Ro(t,l),vn(l,a,null,e);var o=l.memoizedState;if(a=o.cache,ae(l,bt,a),a!==i.cache&&$o(l,[bt],e,!0),hn(),a=o.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:o.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=Fr(t,l,a,e);break t}else if(a!==n){n=dl(Error(E(424)),l),Dn(n),l=Fr(t,l,a,e);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,nt=hl(t.firstChild),Ct=l,V=!0,me=null,ml=!0,e=Sd(l,null,a,e),l.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(Xe(),a===n){l=Fl(t,l,e);break t}Bt(t,l,a,e)}l=l.child}return l;case 26:return wi(t,l),t===null?(e=gf(l.type,null,l.pendingProps,null))?l.memoizedState=e:V||(e=l.type,t=l.pendingProps,a=uu(de.current).createElement(e),a[wt]=l,a[Vt]=t,_t(a,e,t),Dt(a),l.stateNode=a):l.memoizedState=gf(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Uo(l),t===null&&V&&(a=l.stateNode=am(l.type,l.pendingProps,de.current),Ct=l,ml=!0,n=nt,Te(l.type)?(Ec=n,nt=hl(a.firstChild)):nt=n),Bt(t,l,l.pendingProps.children,e),wi(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&V&&((n=a=nt)&&(a=oh(a,l.type,l.pendingProps,ml),a!==null?(l.stateNode=a,Ct=l,nt=hl(a.firstChild),ml=!1,n=!0):n=!1),n||Se(l)),Uo(l),n=l.type,i=l.pendingProps,o=t!==null?t.memoizedProps:null,a=i.children,yc(n,i)?a=null:o!==null&&yc(n,o)&&(l.flags|=32),l.memoizedState!==null&&(n=Kc(t,l,N1,null,null,e),_n._currentValue=n),wi(t,l),Bt(t,l,a,e),l.child;case 6:return t===null&&V&&((t=e=nt)&&(e=ch(e,l.pendingProps,ml),e!==null?(l.stateNode=e,Ct=l,nt=null,t=!0):t=!1),t||Se(l)),null;case 13:return f0(t,l,e);case 4:return Yi(l,l.stateNode.containerInfo),a=l.pendingProps,t===null?l.child=je(l,null,a,e):Bt(t,l,a,e),l.child;case 11:return Gr(t,l,l.type,l.pendingProps,e);case 7:return Bt(t,l,l.pendingProps,e),l.child;case 8:return Bt(t,l,l.pendingProps.children,e),l.child;case 12:return Bt(t,l,l.pendingProps.children,e),l.child;case 10:return a=l.pendingProps,ae(l,l.type,a.value),Bt(t,l,a.children,e),l.child;case 9:return n=l.type._context,a=l.pendingProps.children,Le(l),n=Ot(n),a=a(n),l.flags|=1,Bt(t,l,a,e),l.child;case 14:return Qr(t,l,l.type,l.pendingProps,e);case 15:return s0(t,l,l.type,l.pendingProps,e);case 19:return d0(t,l,e);case 31:return C1(t,l,e);case 22:return r0(t,l,e,l.pendingProps);case 24:return Le(l),a=Ot(bt),t===null?(n=Gc(),n===null&&(n=tt,i=jc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=e),n=i),l.memoizedState={parent:a,cache:n},Zc(l),ae(l,bt,n)):((t.lanes&e)!==0&&(Ro(t,l),vn(l,null,null,e),hn()),n=t.memoizedState,i=l.memoizedState,n.parent!==a?(n={parent:a,cache:a},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),ae(l,bt,a)):(a=i.cache,ae(l,bt,a),a!==n.cache&&$o(l,[bt],e,!0))),Bt(t,l,l.pendingProps.children,e),l.child;case 29:throw l.pendingProps}throw Error(E(156,l.tag))}function Ol(t){t.flags|=4}function go(t,l,e,a,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(H0())t.flags|=8192;else throw He=Ji,Qc}else t.flags&=-16777217}function Wr(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!um(l))if(H0())t.flags|=8192;else throw He=Ji,Qc}function hi(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?Yf():536870912,t.lanes|=l,Oa|=l)}function tn(t,l){if(!V)switch(t.tailMode){case"hidden":l=t.tail;for(var e=null;l!==null;)l.alternate!==null&&(e=l),l=l.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function at(t){var l=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(l)for(var n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)e|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=e,l}function _1(t,l,e){var a=l.pendingProps;switch(Lc(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(l),null;case 1:return at(l),null;case 3:return e=l.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Ql(bt),Ma(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(na(l)?Ol(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,co())),at(l),null;case 26:var n=l.type,i=l.memoizedState;return t===null?(Ol(l),i!==null?(at(l),Wr(l,i)):(at(l),go(l,n,null,a,e))):i?i!==t.memoizedState?(Ol(l),at(l),Wr(l,i)):(at(l),l.flags&=-16777217):(t=t.memoizedProps,t!==a&&Ol(l),at(l),go(l,n,t,a,e)),null;case 27:if(Xi(l),e=de.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ol(l);else{if(!a){if(l.stateNode===null)throw Error(E(166));return at(l),null}t=zl.current,na(l)?zr(l,t):(t=am(n,a,e),l.stateNode=t,Ol(l))}return at(l),null;case 5:if(Xi(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==a&&Ol(l);else{if(!a){if(l.stateNode===null)throw Error(E(166));return at(l),null}if(i=zl.current,na(l))zr(l,i);else{var o=uu(de.current);switch(i){case 1:i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=o.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?o.createElement(n,{is:a.is}):o.createElement(n)}}i[wt]=l,i[Vt]=a;t:for(o=l.child;o!==null;){if(o.tag===5||o.tag===6)i.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===l)break t;for(;o.sibling===null;){if(o.return===null||o.return===l)break t;o=o.return}o.sibling.return=o.return,o=o.sibling}l.stateNode=i;t:switch(_t(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&Ol(l)}}return at(l),go(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,e),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==a&&Ol(l);else{if(typeof a!="string"&&l.stateNode===null)throw Error(E(166));if(t=de.current,na(l)){if(t=l.stateNode,e=l.memoizedProps,a=null,n=Ct,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[wt]=l,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||P0(t.nodeValue,e)),t||Se(l,!0)}else t=uu(t).createTextNode(a),t[wt]=l,l.stateNode=t}return at(l),null;case 31:if(e=l.memoizedState,t===null||t.memoizedState!==null){if(a=na(l),e!==null){if(t===null){if(!a)throw Error(E(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(557));t[wt]=l}else Xe(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;at(l),t=!1}else e=co(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=e),t=!0;if(!t)return l.flags&256?($t(l),l):($t(l),null);if((l.flags&128)!==0)throw Error(E(558))}return at(l),null;case 13:if(a=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=na(l),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(E(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[wt]=l}else Xe(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;at(l),n=!1}else n=co(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?($t(l),l):($t(l),null)}return $t(l),(l.flags&128)!==0?(l.lanes=e,l):(e=a!==null,t=t!==null&&t.memoizedState!==null,e&&(a=l.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),e!==t&&e&&(l.child.flags|=8192),hi(l,l.updateQueue),at(l),null);case 4:return Ma(),t===null&&ms(l.stateNode.containerInfo),at(l),null;case 10:return Ql(l.type),at(l),null;case 19:if(kt(pt),a=l.memoizedState,a===null)return at(l),null;if(n=(l.flags&128)!==0,i=a.rendering,i===null)if(n)tn(a,!1);else{if(mt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(i=Fi(t),i!==null){for(l.flags|=128,tn(a,!1),t=i.updateQueue,l.updateQueue=t,hi(l,t),l.subtreeFlags=0,t=e,e=l.child;e!==null;)pd(e,t),e=e.sibling;return lt(pt,pt.current&1|2),V&&Hl(l,a.treeForkCount),l.child}t=t.sibling}a.tail!==null&&It()>tu&&(l.flags|=128,n=!0,tn(a,!1),l.lanes=4194304)}else{if(!n)if(t=Fi(i),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,hi(l,t),tn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!V)return at(l),null}else 2*It()-a.renderingStartTime>tu&&e!==536870912&&(l.flags|=128,n=!0,tn(a,!1),l.lanes=4194304);a.isBackwards?(i.sibling=l.child,l.child=i):(t=a.last,t!==null?t.sibling=i:l.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=It(),t.sibling=null,e=pt.current,lt(pt,n?e&1|2:e&1),V&&Hl(l,a.treeForkCount),t):(at(l),null);case 22:case 23:return $t(l),Vc(),a=l.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(l.flags|=8192):a&&(l.flags|=8192),a?(e&536870912)!==0&&(l.flags&128)===0&&(at(l),l.subtreeFlags&6&&(l.flags|=8192)):at(l),e=l.updateQueue,e!==null&&hi(l,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(a=l.memoizedState.cachePool.pool),a!==e&&(l.flags|=2048),t!==null&&kt(qe),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Ql(bt),at(l),null;case 25:return null;case 30:return null}throw Error(E(156,l.tag))}function U1(t,l){switch(Lc(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Ql(bt),Ma(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Xi(l),null;case 31:if(l.memoizedState!==null){if($t(l),l.alternate===null)throw Error(E(340));Xe()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if($t(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(E(340));Xe()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return kt(pt),null;case 4:return Ma(),null;case 10:return Ql(l.type),null;case 22:case 23:return $t(l),Vc(),t!==null&&kt(qe),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Ql(bt),null;case 25:return null;default:return null}}function p0(t,l){switch(Lc(l),l.tag){case 3:Ql(bt),Ma();break;case 26:case 27:case 5:Xi(l);break;case 4:Ma();break;case 31:l.memoizedState!==null&&$t(l);break;case 13:$t(l);break;case 19:kt(pt);break;case 10:Ql(l.type);break;case 22:case 23:$t(l),Vc(),t!==null&&kt(qe);break;case 24:Ql(bt)}}function Vn(t,l){try{var e=l.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var n=a.next;e=n;do{if((e.tag&t)===t){a=void 0;var i=e.create,o=e.inst;a=i(),o.destroy=a}e=e.next}while(e!==n)}}catch(c){W(l,l.return,c)}}function Ae(t,l,e){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var o=a.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,n=l;var s=e,m=c;try{m()}catch(v){W(n,s,v)}}}a=a.next}while(a!==i)}}catch(v){W(l,l.return,v)}}function h0(t){var l=t.updateQueue;if(l!==null){var e=t.stateNode;try{Nd(l,e)}catch(a){W(t,t.return,a)}}}function v0(t,l,e){e.props=Qe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){W(t,l,a)}}function gn(t,l){try{var e=t.ref;if(e!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof e=="function"?t.refCleanup=e(a):e.current=a}}catch(n){W(t,l,n)}}function Nl(t,l){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(n){W(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(n){W(t,l,n)}else e.current=null}function y0(t){var l=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(n){W(t,t.return,n)}}function bo(t,l,e){try{var a=t.stateNode;lh(a,t.type,e,l),a[Vt]=l}catch(n){W(t,t.return,n)}}function g0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Te(t.type)||t.tag===4}function xo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Te(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(t,l):(l=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.appendChild(t),e=e._reactRootContainer,e!=null||l.onclick!==null||(l.onclick=Ll));else if(a!==4&&(a===27&&Te(t.type)&&(e=t.stateNode,l=null),t=t.child,t!==null))for(cc(t,l,e),t=t.sibling;t!==null;)cc(t,l,e),t=t.sibling}function Pi(t,l,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,l?e.insertBefore(t,l):e.appendChild(t);else if(a!==4&&(a===27&&Te(t.type)&&(e=t.stateNode),t=t.child,t!==null))for(Pi(t,l,e),t=t.sibling;t!==null;)Pi(t,l,e),t=t.sibling}function b0(t){var l=t.stateNode,e=t.memoizedProps;try{for(var a=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);_t(l,a,e),l[wt]=t,l[Vt]=e}catch(i){W(t,t.return,i)}}var Yl=!1,gt=!1,Eo=!1,Rr=typeof WeakSet=="function"?WeakSet:Set,Mt=null;function q1(t,l){if(t=t.containerInfo,hc=ru,t=ud(t),Uc(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var o=0,c=-1,s=-1,m=0,v=0,y=t,p=null;l:for(;;){for(var h;y!==e||n!==0&&y.nodeType!==3||(c=o+n),y!==i||a!==0&&y.nodeType!==3||(s=o+a),y.nodeType===3&&(o+=y.nodeValue.length),(h=y.firstChild)!==null;)p=y,y=h;for(;;){if(y===t)break l;if(p===e&&++m===n&&(c=o),p===i&&++v===a&&(s=o),(h=y.nextSibling)!==null)break;y=p,p=y.parentNode}y=h}e=c===-1||s===-1?null:{start:c,end:s}}else e=null}e=e||{start:0,end:0}}else e=null;for(vc={focusedElem:t,selectionRange:e},ru=!1,Mt=l;Mt!==null;)if(l=Mt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,Mt=t;else for(;Mt!==null;){switch(l=Mt,i=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(e=0;e<t.length;e++)n=t[e],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=l,n=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var x=Qe(e.type,n);t=a.getSnapshotBeforeUpdate(x,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(b){W(e,e.return,b)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,e=t.nodeType,e===9)gc(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(E(163))}if(t=l.sibling,t!==null){t.return=l.return,Mt=t;break}Mt=l.return}}function x0(t,l,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:Ul(t,e),a&4&&Vn(5,e);break;case 1:if(Ul(t,e),a&4)if(t=e.stateNode,l===null)try{t.componentDidMount()}catch(o){W(e,e.return,o)}else{var n=Qe(e.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(o){W(e,e.return,o)}}a&64&&h0(e),a&512&&gn(e,e.return);break;case 3:if(Ul(t,e),a&64&&(t=e.updateQueue,t!==null)){if(l=null,e.child!==null)switch(e.child.tag){case 27:case 5:l=e.child.stateNode;break;case 1:l=e.child.stateNode}try{Nd(t,l)}catch(o){W(e,e.return,o)}}break;case 27:l===null&&a&4&&b0(e);case 26:case 5:Ul(t,e),l===null&&a&4&&y0(e),a&512&&gn(e,e.return);break;case 12:Ul(t,e);break;case 31:Ul(t,e),a&4&&A0(t,e);break;case 13:Ul(t,e),a&4&&N0(t,e),a&64&&(t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(e=V1.bind(null,e),sh(t,e))));break;case 22:if(a=e.memoizedState!==null||Yl,!a){l=l!==null&&l.memoizedState!==null||gt,n=Yl;var i=gt;Yl=a,(gt=l)&&!i?ql(t,e,(e.subtreeFlags&8772)!==0):Ul(t,e),Yl=n,gt=i}break;case 30:break;default:Ul(t,e)}}function E0(t){var l=t.alternate;l!==null&&(t.alternate=null,E0(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&kc(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,Gt=!1;function _l(t,l,e){for(e=e.child;e!==null;)S0(t,l,e),e=e.sibling}function S0(t,l,e){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount(Yn,e)}catch{}switch(e.tag){case 26:gt||Nl(e,l),_l(t,l,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:gt||Nl(e,l);var a=ot,n=Gt;Te(e.type)&&(ot=e.stateNode,Gt=!1),_l(t,l,e),Sn(e.stateNode),ot=a,Gt=n;break;case 5:gt||Nl(e,l);case 6:if(a=ot,n=Gt,ot=null,_l(t,l,e),ot=a,Gt=n,ot!==null)if(Gt)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(e.stateNode)}catch(i){W(e,l,i)}else try{ot.removeChild(e.stateNode)}catch(i){W(e,l,i)}break;case 18:ot!==null&&(Gt?(t=ot,mf(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,e.stateNode),Ha(t)):mf(ot,e.stateNode));break;case 4:a=ot,n=Gt,ot=e.stateNode.containerInfo,Gt=!0,_l(t,l,e),ot=a,Gt=n;break;case 0:case 11:case 14:case 15:Ae(2,e,l),gt||Ae(4,e,l),_l(t,l,e);break;case 1:gt||(Nl(e,l),a=e.stateNode,typeof a.componentWillUnmount=="function"&&v0(e,l,a)),_l(t,l,e);break;case 21:_l(t,l,e);break;case 22:gt=(a=gt)||e.memoizedState!==null,_l(t,l,e),gt=a;break;default:_l(t,l,e)}}function A0(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ha(t)}catch(e){W(l,l.return,e)}}}function N0(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ha(t)}catch(e){W(l,l.return,e)}}function H1(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Rr),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Rr),l;default:throw Error(E(435,t.tag))}}function vi(t,l){var e=H1(t);l.forEach(function(a){if(!e.has(a)){e.add(a);var n=J1.bind(null,t,a);a.then(n,n)}})}function Lt(t,l){var e=l.deletions;if(e!==null)for(var a=0;a<e.length;a++){var n=e[a],i=t,o=l,c=o;t:for(;c!==null;){switch(c.tag){case 27:if(Te(c.type)){ot=c.stateNode,Gt=!1;break t}break;case 5:ot=c.stateNode,Gt=!1;break t;case 3:case 4:ot=c.stateNode.containerInfo,Gt=!0;break t}c=c.return}if(ot===null)throw Error(E(160));S0(i,o,n),ot=null,Gt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)z0(l,t),l=l.sibling}var gl=null;function z0(t,l){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Lt(l,t),jt(t),a&4&&(Ae(3,t,t.return),Vn(3,t),Ae(5,t,t.return));break;case 1:Lt(l,t),jt(t),a&512&&(gt||e===null||Nl(e,e.return)),a&64&&Yl&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var n=gl;if(Lt(l,t),jt(t),a&512&&(gt||e===null||Nl(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,n=n.ownerDocument||n;l:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[jn]||i[wt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),_t(i,a,e),i[wt]=t,Dt(i),a=i;break t;case"link":var o=xf("link","href",n).get(a+(e.href||""));if(o){for(var c=0;c<o.length;c++)if(i=o[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){o.splice(c,1);break l}}i=n.createElement(a),_t(i,a,e),n.head.appendChild(i);break;case"meta":if(o=xf("meta","content",n).get(a+(e.content||""))){for(c=0;c<o.length;c++)if(i=o[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){o.splice(c,1);break l}}i=n.createElement(a),_t(i,a,e),n.head.appendChild(i);break;default:throw Error(E(468,a))}i[wt]=t,Dt(i),a=i}t.stateNode=a}else Ef(n,t.type,t.stateNode);else t.stateNode=bf(n,a,t.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?Ef(n,t.type,t.stateNode):bf(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&bo(t,t.memoizedProps,e.memoizedProps)}break;case 27:Lt(l,t),jt(t),a&512&&(gt||e===null||Nl(e,e.return)),e!==null&&a&4&&bo(t,t.memoizedProps,e.memoizedProps);break;case 5:if(Lt(l,t),jt(t),a&512&&(gt||e===null||Nl(e,e.return)),t.flags&32){n=t.stateNode;try{ka(n,"")}catch(x){W(t,t.return,x)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,bo(t,n,e!==null?e.memoizedProps:n)),a&1024&&(Eo=!0);break;case 6:if(Lt(l,t),jt(t),a&4){if(t.stateNode===null)throw Error(E(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(x){W(t,t.return,x)}}break;case 3:if(_i=null,n=gl,gl=ou(l.containerInfo),Lt(l,t),gl=n,jt(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Ha(l.containerInfo)}catch(x){W(t,t.return,x)}Eo&&(Eo=!1,T0(t));break;case 4:a=gl,gl=ou(t.stateNode.containerInfo),Lt(l,t),jt(t),gl=a;break;case 12:Lt(l,t),jt(t);break;case 31:Lt(l,t),jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,vi(t,a)));break;case 13:Lt(l,t),jt(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Au=It()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,vi(t,a)));break;case 22:n=t.memoizedState!==null;var s=e!==null&&e.memoizedState!==null,m=Yl,v=gt;if(Yl=m||n,gt=v||s,Lt(l,t),gt=v,Yl=m,jt(t),a&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(e===null||s||Yl||gt||Oe(t)),e=null,l=t;;){if(l.tag===5||l.tag===26){if(e===null){s=e=l;try{if(i=s.stateNode,n)o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=s.stateNode;var y=s.memoizedProps.style,p=y!=null&&y.hasOwnProperty("display")?y.display:null;c.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(x){W(s,s.return,x)}}}else if(l.tag===6){if(e===null){s=l;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(x){W(s,s.return,x)}}}else if(l.tag===18){if(e===null){s=l;try{var h=s.stateNode;n?pf(h,!0):pf(s.stateNode,!1)}catch(x){W(s,s.return,x)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;e===l&&(e=null),l=l.return}e===l&&(e=null),l.sibling.return=l.return,l=l.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,vi(t,e))));break;case 19:Lt(l,t),jt(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,vi(t,a)));break;case 30:break;case 21:break;default:Lt(l,t),jt(t)}}function jt(t){var l=t.flags;if(l&2){try{for(var e,a=t.return;a!==null;){if(g0(a)){e=a;break}a=a.return}if(e==null)throw Error(E(160));switch(e.tag){case 27:var n=e.stateNode,i=xo(t);Pi(t,i,n);break;case 5:var o=e.stateNode;e.flags&32&&(ka(o,""),e.flags&=-33);var c=xo(t);Pi(t,c,o);break;case 3:case 4:var s=e.stateNode.containerInfo,m=xo(t);cc(t,m,s);break;default:throw Error(E(161))}}catch(v){W(t,t.return,v)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;T0(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Ul(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)x0(t,l.alternate,l),l=l.sibling}function Oe(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:Ae(4,l,l.return),Oe(l);break;case 1:Nl(l,l.return);var e=l.stateNode;typeof e.componentWillUnmount=="function"&&v0(l,l.return,e),Oe(l);break;case 27:Sn(l.stateNode);case 26:case 5:Nl(l,l.return),Oe(l);break;case 22:l.memoizedState===null&&Oe(l);break;case 30:Oe(l);break;default:Oe(l)}t=t.sibling}}function ql(t,l,e){for(e=e&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var a=l.alternate,n=t,i=l,o=i.flags;switch(i.tag){case 0:case 11:case 15:ql(n,i,e),Vn(4,i);break;case 1:if(ql(n,i,e),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){W(a,a.return,m)}if(a=i,n=a.updateQueue,n!==null){var c=a.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Ad(s[n],c)}catch(m){W(a,a.return,m)}}e&&o&64&&h0(i),gn(i,i.return);break;case 27:b0(i);case 26:case 5:ql(n,i,e),e&&a===null&&o&4&&y0(i),gn(i,i.return);break;case 12:ql(n,i,e);break;case 31:ql(n,i,e),e&&o&4&&A0(n,i);break;case 13:ql(n,i,e),e&&o&4&&N0(n,i);break;case 22:i.memoizedState===null&&ql(n,i,e),gn(i,i.return);break;case 30:break;default:ql(n,i,e)}l=l.sibling}}function os(t,l){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&Qn(e))}function cs(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Qn(t))}function yl(t,l,e,a){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)M0(t,l,e,a),l=l.sibling}function M0(t,l,e,a){var n=l.flags;switch(l.tag){case 0:case 11:case 15:yl(t,l,e,a),n&2048&&Vn(9,l);break;case 1:yl(t,l,e,a);break;case 3:yl(t,l,e,a),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Qn(t)));break;case 12:if(n&2048){yl(t,l,e,a),t=l.stateNode;try{var i=l.memoizedProps,o=i.id,c=i.onPostCommit;typeof c=="function"&&c(o,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){W(l,l.return,s)}}else yl(t,l,e,a);break;case 31:yl(t,l,e,a);break;case 13:yl(t,l,e,a);break;case 23:break;case 22:i=l.stateNode,o=l.alternate,l.memoizedState!==null?i._visibility&2?yl(t,l,e,a):bn(t,l):i._visibility&2?yl(t,l,e,a):(i._visibility|=2,ua(t,l,e,a,(l.subtreeFlags&10256)!==0||!1)),n&2048&&os(o,l);break;case 24:yl(t,l,e,a),n&2048&&cs(l.alternate,l);break;default:yl(t,l,e,a)}}function ua(t,l,e,a,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=t,o=l,c=e,s=a,m=o.flags;switch(o.tag){case 0:case 11:case 15:ua(i,o,c,s,n),Vn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?ua(i,o,c,s,n):bn(i,o):(v._visibility|=2,ua(i,o,c,s,n)),n&&m&2048&&os(o.alternate,o);break;case 24:ua(i,o,c,s,n),n&&m&2048&&cs(o.alternate,o);break;default:ua(i,o,c,s,n)}l=l.sibling}}function bn(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var e=t,a=l,n=a.flags;switch(a.tag){case 22:bn(e,a),n&2048&&os(a.alternate,a);break;case 24:bn(e,a),n&2048&&cs(a.alternate,a);break;default:bn(e,a)}l=l.sibling}}var sn=8192;function ia(t,l,e){if(t.subtreeFlags&sn)for(t=t.child;t!==null;)D0(t,l,e),t=t.sibling}function D0(t,l,e){switch(t.tag){case 26:ia(t,l,e),t.flags&sn&&t.memoizedState!==null&&Eh(e,gl,t.memoizedState,t.memoizedProps);break;case 5:ia(t,l,e);break;case 3:case 4:var a=gl;gl=ou(t.stateNode.containerInfo),ia(t,l,e),gl=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=sn,sn=16777216,ia(t,l,e),sn=a):ia(t,l,e));break;default:ia(t,l,e)}}function k0(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function ln(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Mt=a,w0(a,t)}k0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B0(t),t=t.sibling}function B0(t){switch(t.tag){case 0:case 11:case 15:ln(t),t.flags&2048&&Ae(9,t,t.return);break;case 3:ln(t);break;case 12:ln(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,Ci(t)):ln(t);break;default:ln(t)}}function Ci(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var e=0;e<l.length;e++){var a=l[e];Mt=a,w0(a,t)}k0(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:Ae(8,l,l.return),Ci(l);break;case 22:e=l.stateNode,e._visibility&2&&(e._visibility&=-3,Ci(l));break;default:Ci(l)}t=t.sibling}}function w0(t,l){for(;Mt!==null;){var e=Mt;switch(e.tag){case 0:case 11:case 15:Ae(8,e,l);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qn(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,Mt=a;else t:for(e=t;Mt!==null;){a=Mt;var n=a.sibling,i=a.return;if(E0(a),a===e){Mt=null;break t}if(n!==null){n.return=i,Mt=n;break t}Mt=i}}}var Y1={getCacheForType:function(t){var l=Ot(bt),e=l.data.get(t);return e===void 0&&(e=t(),l.data.set(t,e)),e},cacheSignal:function(){return Ot(bt).controller.signal}},X1=typeof WeakMap=="function"?WeakMap:Map,K=0,tt=null,L=null,Q=0,$=0,Ft=null,se=!1,Ga=!1,ss=!1,$l=0,mt=0,Ne=0,Ye=0,rs=0,Rt=0,Oa=0,xn=null,Qt=null,sc=!1,Au=0,C0=0,tu=1/0,lu=null,ve=null,At=0,ye=null,_a=null,Zl=0,rc=0,fc=null,O0=null,En=0,dc=null;function ll(){return(K&2)!==0&&Q!==0?Q&-Q:O.T!==null?ds():Gf()}function _0(){if(Rt===0)if((Q&536870912)===0||V){var t=ui;ui<<=1,(ui&3932160)===0&&(ui=262144),Rt=t}else Rt=536870912;return t=al.current,t!==null&&(t.flags|=32),Rt}function Zt(t,l,e){(t===tt&&($===2||$===9)||t.cancelPendingCommit!==null)&&(Ua(t,0),re(t,Q,Rt,!1)),Ln(t,e),((K&2)===0||t!==tt)&&(t===tt&&((K&2)===0&&(Ye|=e),mt===4&&re(t,Q,Rt,!1)),Ml(t))}function U0(t,l,e){if((K&6)!==0)throw Error(E(327));var a=!e&&(l&127)===0&&(l&t.expiredLanes)===0||Xn(t,l),n=a?G1(t,l):So(t,l,!0),i=a;do{if(n===0){Ga&&!a&&re(t,l,0,!1);break}else{if(e=t.current.alternate,i&&!L1(e)){n=So(t,l,!1),i=!1;continue}if(n===2){if(i=l,t.errorRecoveryDisabledLanes&i)var o=0;else o=t.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){l=o;t:{var c=t;n=xn;var s=c.current.memoizedState.isDehydrated;if(s&&(Ua(c,o).flags|=256),o=So(c,o,!1),o!==2){if(ss&&!s){c.errorRecoveryDisabledLanes|=i,Ye|=i,n=4;break t}i=Qt,Qt=n,i!==null&&(Qt===null?Qt=i:Qt.push.apply(Qt,i))}n=o}if(i=!1,n!==2)continue}}if(n===1){Ua(t,0),re(t,l,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(E(345));case 4:if((l&4194048)!==l)break;case 6:re(a,l,Rt,!se);break t;case 2:Qt=null;break;case 3:case 5:break;default:throw Error(E(329))}if((l&62914560)===l&&(n=Au+300-It(),10<n)){if(re(a,l,Rt,!se),du(a,0,!0)!==0)break t;Zl=l,a.timeoutHandle=lm(Ir.bind(null,a,e,Qt,lu,sc,l,Rt,Ye,Oa,se,i,"Throttled",-0,0),n);break t}Ir(a,e,Qt,lu,sc,l,Rt,Ye,Oa,se,i,null,-0,0)}}break}while(!0);Ml(t)}function Ir(t,l,e,a,n,i,o,c,s,m,v,y,p,h){if(t.timeoutHandle=-1,y=l.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ll},D0(l,i,y);var x=(i&62914560)===i?Au-It():(i&4194048)===i?C0-It():0;if(x=Sh(y,x),x!==null){Zl=i,t.cancelPendingCommit=x(tf.bind(null,t,l,i,e,a,n,o,c,s,v,y,null,p,h)),re(t,i,o,!m);return}}tf(t,l,i,e,a,n,o,c,s)}function L1(t){for(var l=t;;){var e=l.tag;if((e===0||e===11||e===15)&&l.flags&16384&&(e=l.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var n=e[a],i=n.getSnapshot;n=n.value;try{if(!el(i(),n))return!1}catch{return!1}}if(e=l.child,l.subtreeFlags&16384&&e!==null)e.return=l,l=e;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function re(t,l,e,a){l&=~rs,l&=~Ye,t.suspendedLanes|=l,t.pingedLanes&=~l,a&&(t.warmLanes|=l),a=t.expirationTimes;for(var n=l;0<n;){var i=31-tl(n),o=1<<i;a[i]=-1,n&=~o}e!==0&&Xf(t,e,l)}function Nu(){return(K&6)===0?(Jn(0,!1),!1):!0}function fs(){if(L!==null){if($===0)var t=L.return;else t=L,jl=Fe=null,Wc(t),Na=null,kn=0,t=L;for(;t!==null;)p0(t.alternate,t),t=t.return;L=null}}function Ua(t,l){var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,nh(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),Zl=0,fs(),tt=t,L=e=Gl(t.current,null),Q=l,$=0,Ft=null,se=!1,Ga=Xn(t,l),ss=!1,Oa=Rt=rs=Ye=Ne=mt=0,Qt=xn=null,sc=!1,(l&8)!==0&&(l|=l&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=l;0<a;){var n=31-tl(a),i=1<<n;l|=t[n],a&=~i}return $l=l,vu(),e}function q0(t,l){q=null,O.H=wn,l===ja||l===gu?(l=Br(),$=3):l===Qc?(l=Br(),$=4):$=l===is?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Ft=l,L===null&&(mt=1,Ri(t,dl(l,t.current)))}function H0(){var t=al.current;return t===null?!0:(Q&4194048)===Q?pl===null:(Q&62914560)===Q||(Q&536870912)!==0?t===pl:!1}function Y0(){var t=O.H;return O.H=wn,t===null?wn:t}function X0(){var t=O.A;return O.A=Y1,t}function eu(){mt=4,se||(Q&4194048)!==Q&&al.current!==null||(Ga=!0),(Ne&134217727)===0&&(Ye&134217727)===0||tt===null||re(tt,Q,Rt,!1)}function So(t,l,e){var a=K;K|=2;var n=Y0(),i=X0();(tt!==t||Q!==l)&&(lu=null,Ua(t,l)),l=!1;var o=mt;t:do try{if($!==0&&L!==null){var c=L,s=Ft;switch($){case 8:fs(),o=6;break t;case 3:case 2:case 9:case 6:al.current===null&&(l=!0);var m=$;if($=0,Ft=null,ba(t,c,s,m),e&&Ga){o=0;break t}break;default:m=$,$=0,Ft=null,ba(t,c,s,m)}}j1(),o=mt;break}catch(v){q0(t,v)}while(!0);return l&&t.shellSuspendCounter++,jl=Fe=null,K=a,O.H=n,O.A=i,L===null&&(tt=null,Q=0,vu()),o}function j1(){for(;L!==null;)L0(L)}function G1(t,l){var e=K;K|=2;var a=Y0(),n=X0();tt!==t||Q!==l?(lu=null,tu=It()+500,Ua(t,l)):Ga=Xn(t,l);t:do try{if($!==0&&L!==null){l=L;var i=Ft;l:switch($){case 1:$=0,Ft=null,ba(t,l,i,1);break;case 2:case 9:if(kr(i)){$=0,Ft=null,Pr(l);break}l=function(){$!==2&&$!==9||tt!==t||($=7),Ml(t)},i.then(l,l);break t;case 3:$=7;break t;case 4:$=5;break t;case 7:kr(i)?($=0,Ft=null,Pr(l)):($=0,Ft=null,ba(t,l,i,7));break;case 5:var o=null;switch(L.tag){case 26:o=L.memoizedState;case 5:case 27:var c=L;if(o?um(o):c.stateNode.complete){$=0,Ft=null;var s=c.sibling;if(s!==null)L=s;else{var m=c.return;m!==null?(L=m,zu(m)):L=null}break l}}$=0,Ft=null,ba(t,l,i,5);break;case 6:$=0,Ft=null,ba(t,l,i,6);break;case 8:fs(),mt=6;break t;default:throw Error(E(462))}}Q1();break}catch(v){q0(t,v)}while(!0);return jl=Fe=null,O.H=a,O.A=n,K=e,L!==null?0:(tt=null,Q=0,vu(),mt)}function Q1(){for(;L!==null&&!dp();)L0(L)}function L0(t){var l=m0(t.alternate,t,$l);t.memoizedProps=t.pendingProps,l===null?zu(t):L=l}function Pr(t){var l=t,e=l.alternate;switch(l.tag){case 15:case 0:l=Jr(e,l,l.pendingProps,l.type,void 0,Q);break;case 11:l=Jr(e,l,l.pendingProps,l.type.render,l.ref,Q);break;case 5:Wc(l);default:p0(e,l),l=L=pd(l,$l),l=m0(e,l,$l)}t.memoizedProps=t.pendingProps,l===null?zu(t):L=l}function ba(t,l,e,a){jl=Fe=null,Wc(l),Na=null,kn=0;var n=l.return;try{if(w1(t,n,l,e,Q)){mt=1,Ri(t,dl(e,t.current)),L=null;return}}catch(i){if(n!==null)throw L=n,i;mt=1,Ri(t,dl(e,t.current)),L=null;return}l.flags&32768?(V||a===1?t=!0:Ga||(Q&536870912)!==0?t=!1:(se=t=!0,(a===2||a===9||a===3||a===6)&&(a=al.current,a!==null&&a.tag===13&&(a.flags|=16384))),j0(l,t)):zu(l)}function zu(t){var l=t;do{if((l.flags&32768)!==0){j0(l,se);return}t=l.return;var e=_1(l.alternate,l,$l);if(e!==null){L=e;return}if(l=l.sibling,l!==null){L=l;return}L=l=t}while(l!==null);mt===0&&(mt=5)}function j0(t,l){do{var e=U1(t.alternate,t);if(e!==null){e.flags&=32767,L=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!l&&(t=t.sibling,t!==null)){L=t;return}L=t=e}while(t!==null);mt=6,L=null}function tf(t,l,e,a,n,i,o,c,s){t.cancelPendingCommit=null;do Tu();while(At!==0);if((K&6)!==0)throw Error(E(327));if(l!==null){if(l===t.current)throw Error(E(177));if(i=l.lanes|l.childLanes,i|=qc,Sp(t,e,i,o,c,s),t===tt&&(L=tt=null,Q=0),_a=l,ye=t,Zl=e,rc=i,fc=n,O0=a,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,K1(Li,function(){return J0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||a){a=O.T,O.T=null,n=F.p,F.p=2,o=K,K|=4;try{q1(t,l,e)}finally{K=o,F.p=n,O.T=a}}At=1,G0(),Q0(),Z0()}}function G0(){if(At===1){At=0;var t=ye,l=_a,e=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||e){e=O.T,O.T=null;var a=F.p;F.p=2;var n=K;K|=4;try{z0(l,t);var i=vc,o=ud(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(o!==c&&c&&c.ownerDocument&&id(c.ownerDocument.documentElement,c)){if(s!==null&&Uc(c)){var m=s.start,v=s.end;if(v===void 0&&(v=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(v,c.value.length);else{var y=c.ownerDocument||document,p=y&&y.defaultView||window;if(p.getSelection){var h=p.getSelection(),x=c.textContent.length,b=Math.min(s.start,x),S=s.end===void 0?b:Math.min(s.end,x);!h.extend&&b>S&&(o=S,S=b,b=o);var f=Sr(c,b),r=Sr(c,S);if(f&&r&&(h.rangeCount!==1||h.anchorNode!==f.node||h.anchorOffset!==f.offset||h.focusNode!==r.node||h.focusOffset!==r.offset)){var d=y.createRange();d.setStart(f.node,f.offset),h.removeAllRanges(),b>S?(h.addRange(d),h.extend(r.node,r.offset)):(d.setEnd(r.node,r.offset),h.addRange(d))}}}}for(y=[],h=c;h=h.parentNode;)h.nodeType===1&&y.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<y.length;c++){var g=y[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}ru=!!hc,vc=hc=null}finally{K=n,F.p=a,O.T=e}}t.current=l,At=2}}function Q0(){if(At===2){At=0;var t=ye,l=_a,e=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||e){e=O.T,O.T=null;var a=F.p;F.p=2;var n=K;K|=4;try{x0(t,l.alternate,l)}finally{K=n,F.p=a,O.T=e}}At=3}}function Z0(){if(At===4||At===3){At=0,mp();var t=ye,l=_a,e=Zl,a=O0;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?At=5:(At=0,_a=ye=null,V0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ve=null),Dc(e),l=l.stateNode,Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot(Yn,l,void 0,(l.current.flags&128)===128)}catch{}if(a!==null){l=O.T,n=F.p,F.p=2,O.T=null;try{for(var i=t.onRecoverableError,o=0;o<a.length;o++){var c=a[o];i(c.value,{componentStack:c.stack})}}finally{O.T=l,F.p=n}}(Zl&3)!==0&&Tu(),Ml(t),n=t.pendingLanes,(e&261930)!==0&&(n&42)!==0?t===dc?En++:(En=0,dc=t):En=0,Jn(0,!1)}}function V0(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Qn(l)))}function Tu(){return G0(),Q0(),Z0(),J0()}function J0(){if(At!==5)return!1;var t=ye,l=rc;rc=0;var e=Dc(Zl),a=O.T,n=F.p;try{F.p=32>e?32:e,O.T=null,e=fc,fc=null;var i=ye,o=Zl;if(At=0,_a=ye=null,Zl=0,(K&6)!==0)throw Error(E(331));var c=K;if(K|=4,B0(i.current),M0(i,i.current,o,e),K=c,Jn(0,!1),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot(Yn,i)}catch{}return!0}finally{F.p=n,O.T=a,V0(t,l)}}function lf(t,l,e){l=dl(e,l),l=ic(t.stateNode,l,2),t=he(t,l,2),t!==null&&(Ln(t,2),Ml(t))}function W(t,l,e){if(t.tag===3)lf(t,t,e);else for(;l!==null;){if(l.tag===3){lf(l,t,e);break}else if(l.tag===1){var a=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ve===null||!ve.has(a))){t=dl(e,t),e=o0(2),a=he(l,e,2),a!==null&&(c0(e,a,l,t),Ln(a,2),Ml(a));break}}l=l.return}}function Ao(t,l,e){var a=t.pingCache;if(a===null){a=t.pingCache=new X1;var n=new Set;a.set(l,n)}else n=a.get(l),n===void 0&&(n=new Set,a.set(l,n));n.has(e)||(ss=!0,n.add(e),t=Z1.bind(null,t,l,e),l.then(t,t))}function Z1(t,l,e){var a=t.pingCache;a!==null&&a.delete(l),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,tt===t&&(Q&e)===e&&(mt===4||mt===3&&(Q&62914560)===Q&&300>It()-Au?(K&2)===0&&Ua(t,0):rs|=e,Oa===Q&&(Oa=0)),Ml(t)}function K0(t,l){l===0&&(l=Yf()),t=Ke(t,l),t!==null&&(Ln(t,l),Ml(t))}function V1(t){var l=t.memoizedState,e=0;l!==null&&(e=l.retryLane),K0(t,e)}function J1(t,l){var e=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(e=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(E(314))}a!==null&&a.delete(l),K0(t,e)}function K1(t,l){return Tc(t,l)}var au=null,oa=null,mc=!1,nu=!1,No=!1,fe=0;function Ml(t){t!==oa&&t.next===null&&(oa===null?au=oa=t:oa=oa.next=t),nu=!0,mc||(mc=!0,$1())}function Jn(t,l){if(!No&&nu){No=!0;do for(var e=!1,a=au;a!==null;){if(!l)if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var o=a.suspendedLanes,c=a.pingedLanes;i=(1<<31-tl(42|t)+1)-1,i&=n&~(o&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,ef(a,i))}else i=Q,i=du(a,a===tt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||Xn(a,i)||(e=!0,ef(a,i));a=a.next}while(e);No=!1}}function F1(){F0()}function F0(){nu=mc=!1;var t=0;fe!==0&&ah()&&(t=fe);for(var l=It(),e=null,a=au;a!==null;){var n=a.next,i=$0(a,l);i===0?(a.next=null,e===null?au=n:e.next=n,n===null&&(oa=e)):(e=a,(t!==0||(i&3)!==0)&&(nu=!0)),a=n}At!==0&&At!==5||Jn(t,!1),fe!==0&&(fe=0)}function $0(t,l){for(var e=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var o=31-tl(i),c=1<<o,s=n[o];s===-1?((c&e)===0||(c&a)!==0)&&(n[o]=Ep(c,l)):s<=l&&(t.expiredLanes|=c),i&=~c}if(l=tt,e=Q,e=du(t,t===l?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,e===0||t===l&&($===2||$===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Iu(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Xn(t,e)){if(l=e&-e,l===t.callbackPriority)return l;switch(a!==null&&Iu(a),Dc(e)){case 2:case 8:e=qf;break;case 32:e=Li;break;case 268435456:e=Hf;break;default:e=Li}return a=W0.bind(null,t),e=Tc(e,a),t.callbackPriority=l,t.callbackNode=e,l}return a!==null&&a!==null&&Iu(a),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,l){if(At!==0&&At!==5)return t.callbackNode=null,t.callbackPriority=0,null;var e=t.callbackNode;if(Tu()&&t.callbackNode!==e)return null;var a=Q;return a=du(t,t===tt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(U0(t,a,l),$0(t,It()),t.callbackNode!=null&&t.callbackNode===e?W0.bind(null,t):null)}function ef(t,l){if(Tu())return null;U0(t,l,!0)}function $1(){ih(function(){(K&6)!==0?Tc(Uf,F1):F0()})}function ds(){if(fe===0){var t=Ba;t===0&&(t=ii,ii<<=1,(ii&261888)===0&&(ii=256)),fe=t}return fe}function af(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ai(""+t)}function nf(t,l){var e=l.ownerDocument.createElement("input");return e.name=l.name,e.value=l.value,t.id&&e.setAttribute("form",t.id),l.parentNode.insertBefore(e,l),t=new FormData(t),e.parentNode.removeChild(e),t}function W1(t,l,e,a,n){if(l==="submit"&&e&&e.stateNode===n){var i=af((n[Vt]||null).action),o=a.submitter;o&&(l=(l=o[Vt]||null)?af(l.formAction):o.getAttribute("formAction"),l!==null&&(i=l,o=null));var c=new mu("action","action",null,a,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(fe!==0){var s=o?nf(n,o):new FormData(n);ac(e,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=o?nf(n,o):new FormData(n),ac(e,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(yi=0;yi<Vo.length;yi++)gi=Vo[yi],uf=gi.toLowerCase(),of=gi[0].toUpperCase()+gi.slice(1),bl(uf,"on"+of);var gi,uf,of,yi;bl(cd,"onAnimationEnd");bl(sd,"onAnimationIteration");bl(rd,"onAnimationStart");bl("dblclick","onDoubleClick");bl("focusin","onFocus");bl("focusout","onBlur");bl(p1,"onTransitionRun");bl(h1,"onTransitionStart");bl(v1,"onTransitionCancel");bl(fd,"onTransitionEnd");Da("onMouseEnter",["mouseout","mouseover"]);Da("onMouseLeave",["mouseout","mouseover"]);Da("onPointerEnter",["pointerout","pointerover"]);Da("onPointerLeave",["pointerout","pointerover"]);Ze("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ze("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ze("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ze("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ze("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ze("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Cn));function R0(t,l){l=(l&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],n=a.event;a=a.listeners;t:{var i=void 0;if(l)for(var o=a.length-1;0<=o;o--){var c=a[o],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(v){Gi(v)}n.currentTarget=null,i=s}else for(o=0;o<a.length;o++){if(c=a[o],s=c.instance,m=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=m;try{i(n)}catch(v){Gi(v)}n.currentTarget=null,i=s}}}}function X(t,l){var e=l[Ho];e===void 0&&(e=l[Ho]=new Set);var a=t+"__bubble";e.has(a)||(I0(l,t,2,!1),e.add(a))}function zo(t,l,e){var a=0;l&&(a|=4),I0(e,t,a,l)}var bi="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[bi]){t[bi]=!0,Qf.forEach(function(e){e!=="selectionchange"&&(R1.has(e)||zo(e,!1,t),zo(e,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[bi]||(l[bi]=!0,zo("selectionchange",!1,l))}}function I0(t,l,e,a){switch(fm(l)){case 2:var n=zh;break;case 8:n=Th;break;default:n=ys}e=n.bind(null,l,e,t),n=void 0,!Go||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(l,e,{capture:!0,passive:n}):t.addEventListener(l,e,!0):n!==void 0?t.addEventListener(l,e,{passive:n}):t.addEventListener(l,e,!1)}function To(t,l,e,a,n){var i=a;if((l&1)===0&&(l&2)===0&&a!==null)t:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===n)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;c!==null;){if(o=ra(c),o===null)return;if(s=o.tag,s===5||s===6||s===26||s===27){a=i=o;continue t}c=c.parentNode}}a=a.return}Rf(function(){var m=i,v=wc(e),y=[];t:{var p=dd.get(t);if(p!==void 0){var h=mu,x=t;switch(t){case"keypress":if(zi(e)===0)break t;case"keydown":case"keyup":h=Jp;break;case"focusin":x="focus",h=ao;break;case"focusout":x="blur",h=ao;break;case"beforeblur":case"afterblur":h=ao;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=mr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=$p;break;case cd:case sd:case rd:h=Hp;break;case fd:h=Rp;break;case"scroll":case"scrollend":h=Cp;break;case"wheel":h=Pp;break;case"copy":case"cut":case"paste":h=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=hr;break;case"toggle":case"beforetoggle":h=l1}var b=(l&4)!==0,S=!b&&(t==="scroll"||t==="scrollend"),f=b?p!==null?p+"Capture":null:p;b=[];for(var r=m,d;r!==null;){var g=r;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||f===null||(g=Nn(r,f),g!=null&&b.push(On(r,g,d))),S)break;r=r.return}0<b.length&&(p=new h(p,x,null,e,v),y.push({event:p,listeners:b}))}}if((l&7)===0){t:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&e!==jo&&(x=e.relatedTarget||e.fromElement)&&(ra(x)||x[Ya]))break t;if((h||p)&&(p=v.window===v?v:(p=v.ownerDocument)?p.defaultView||p.parentWindow:window,h?(x=e.relatedTarget||e.toElement,h=m,x=x?ra(x):null,x!==null&&(S=Hn(x),b=x.tag,x!==S||b!==5&&b!==27&&b!==6)&&(x=null)):(h=null,x=m),h!==x)){if(b=mr,g="onMouseLeave",f="onMouseEnter",r="mouse",(t==="pointerout"||t==="pointerover")&&(b=hr,g="onPointerLeave",f="onPointerEnter",r="pointer"),S=h==null?p:on(h),d=x==null?p:on(x),p=new b(g,r+"leave",h,e,v),p.target=S,p.relatedTarget=d,g=null,ra(v)===m&&(b=new b(f,r+"enter",x,e,v),b.target=d,b.relatedTarget=S,g=b),S=g,h&&x)l:{for(b=I1,f=h,r=x,d=0,g=f;g;g=b(g))d++;g=0;for(var N=r;N;N=b(N))g++;for(;0<d-g;)f=b(f),d--;for(;0<g-d;)r=b(r),g--;for(;d--;){if(f===r||r!==null&&f===r.alternate){b=f;break l}f=b(f),r=b(r)}b=null}else b=null;h!==null&&cf(y,p,h,b,!1),x!==null&&S!==null&&cf(y,S,x,b,!0)}}t:{if(p=m?on(m):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var M=br;else if(gr(p))if(ad)M=f1;else{M=s1;var z=c1}else h=p.nodeName,!h||h.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&Bc(m.elementType)&&(M=br):M=r1;if(M&&(M=M(t,m))){ed(y,M,e,v);break t}z&&z(t,p,m),t==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&Lo(p,"number",p.value)}switch(z=m?on(m):window,t){case"focusin":(gr(z)||z.contentEditable==="true")&&(ma=z,Qo=m,dn=null);break;case"focusout":dn=Qo=ma=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,Ar(y,e,v);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":Ar(y,e,v)}var D;if(_c)t:{switch(t){case"compositionstart":var w="onCompositionStart";break t;case"compositionend":w="onCompositionEnd";break t;case"compositionupdate":w="onCompositionUpdate";break t}w=void 0}else da?td(t,e)&&(w="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(w="onCompositionStart");w&&(Pf&&e.locale!=="ko"&&(da||w!=="onCompositionStart"?w==="onCompositionEnd"&&da&&(D=If()):(ce=v,Cc="value"in ce?ce.value:ce.textContent,da=!0)),z=iu(m,w),0<z.length&&(w=new pr(w,t,null,e,v),y.push({event:w,listeners:z}),D?w.data=D:(D=ld(e),D!==null&&(w.data=D)))),(D=a1?n1(t,e):i1(t,e))&&(w=iu(m,"onBeforeInput"),0<w.length&&(z=new pr("onBeforeInput","beforeinput",null,e,v),y.push({event:z,listeners:w}),z.data=D)),W1(y,t,m,e,v)}R0(y,l)})}function On(t,l,e){return{instance:t,listener:l,currentTarget:e}}function iu(t,l){for(var e=l+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Nn(t,e),n!=null&&a.unshift(On(t,n,i)),n=Nn(t,l),n!=null&&a.push(On(t,n,i))),t.tag===3)return a;t=t.return}return[]}function I1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cf(t,l,e,a,n){for(var i=l._reactName,o=[];e!==null&&e!==a;){var c=e,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===a)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Nn(e,i),m!=null&&o.unshift(On(e,m,s))):n||(m=Nn(e,i),m!=null&&o.push(On(e,m,s)))),e=e.return}o.length!==0&&t.push({event:l,listeners:o})}var P1=/\r\n?/g,th=/\u0000|\uFFFD/g;function sf(t){return(typeof t=="string"?t:""+t).replace(P1,`
`).replace(th,"")}function P0(t,l){return l=sf(l),sf(t)===l}function R(t,l,e,a,n,i){switch(e){case"children":typeof a=="string"?l==="body"||l==="textarea"&&a===""||ka(t,a):(typeof a=="number"||typeof a=="bigint")&&l!=="body"&&ka(t,""+a);break;case"className":ci(t,"class",a);break;case"tabIndex":ci(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":ci(t,e,a);break;case"style":Wf(t,a,i);break;case"data":if(l!=="object"){ci(t,"data",a);break}case"src":case"href":if(a===""&&(l!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Ai(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(l!=="input"&&R(t,l,"name",n.name,n,null),R(t,l,"formEncType",n.formEncType,n,null),R(t,l,"formMethod",n.formMethod,n,null),R(t,l,"formTarget",n.formTarget,n,null)):(R(t,l,"encType",n.encType,n,null),R(t,l,"method",n.method,n,null),R(t,l,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=Ai(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Ll);break;case"onScroll":a!=null&&X("scroll",t);break;case"onScrollEnd":a!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(E(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(E(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=Ai(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":X("beforetoggle",t),X("toggle",t),Si(t,"popover",a);break;case"xlinkActuate":Cl(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Cl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Cl(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Cl(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Cl(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Cl(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Cl(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Cl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Cl(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":Si(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Bp.get(e)||e,Si(t,e,a))}}function pc(t,l,e,a,n,i){switch(e){case"style":Wf(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(E(61));if(e=a.__html,e!=null){if(n.children!=null)throw Error(E(60));t.innerHTML=e}}break;case"children":typeof a=="string"?ka(t,a):(typeof a=="number"||typeof a=="bigint")&&ka(t,""+a);break;case"onScroll":a!=null&&X("scroll",t);break;case"onScrollEnd":a!=null&&X("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ll);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zf.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(n=e.endsWith("Capture"),l=e.slice(2,n?e.length-7:void 0),i=t[Vt]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(l,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(l,a,n);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):Si(t,e,a)}}}function _t(t,l,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var a=!1,n=!1,i;for(i in e)if(e.hasOwnProperty(i)){var o=e[i];if(o!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,l));default:R(t,l,i,o,e,null)}}n&&R(t,l,"srcSet",e.srcSet,e,null),a&&R(t,l,"src",e.src,e,null);return;case"input":X("invalid",t);var c=i=o=n=null,s=null,m=null;for(a in e)if(e.hasOwnProperty(a)){var v=e[a];if(v!=null)switch(a){case"name":n=v;break;case"type":o=v;break;case"checked":s=v;break;case"defaultChecked":m=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(E(137,l));break;default:R(t,l,a,v,e,null)}}Kf(t,i,c,s,m,o,n,!1);return;case"select":X("invalid",t),a=o=i=null;for(n in e)if(e.hasOwnProperty(n)&&(c=e[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":o=c;break;case"multiple":a=c;default:R(t,l,n,c,e,null)}l=i,e=o,t.multiple=!!a,l!=null?Ea(t,!!a,l,!1):e!=null&&Ea(t,!!a,e,!0);return;case"textarea":X("invalid",t),i=n=a=null;for(o in e)if(e.hasOwnProperty(o)&&(c=e[o],c!=null))switch(o){case"value":a=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:R(t,l,o,c,e,null)}$f(t,a,n,i);return;case"option":for(s in e)e.hasOwnProperty(s)&&(a=e[s],a!=null)&&(s==="selected"?t.selected=a&&typeof a!="function"&&typeof a!="symbol":R(t,l,s,a,e,null));return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(a=0;a<Cn.length;a++)X(Cn[a],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,l));default:R(t,l,m,a,e,null)}return;default:if(Bc(l)){for(v in e)e.hasOwnProperty(v)&&(a=e[v],a!==void 0&&pc(t,l,v,a,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(a=e[c],a!=null&&R(t,l,c,a,e,null))}function lh(t,l,e,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,o=null,c=null,s=null,m=null,v=null;for(h in e){var y=e[h];if(e.hasOwnProperty(h)&&y!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=y;default:a.hasOwnProperty(h)||R(t,l,h,null,a,y)}}for(var p in a){var h=a[p];if(y=e[p],a.hasOwnProperty(p)&&(h!=null||y!=null))switch(p){case"type":i=h;break;case"name":n=h;break;case"checked":m=h;break;case"defaultChecked":v=h;break;case"value":o=h;break;case"defaultValue":c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,l));break;default:h!==y&&R(t,l,p,h,a,y)}}Xo(t,o,c,s,m,v,i,n);return;case"select":h=o=c=p=null;for(i in e)if(s=e[i],e.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":h=s;default:a.hasOwnProperty(i)||R(t,l,i,null,a,s)}for(n in a)if(i=a[n],s=e[n],a.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":p=i;break;case"defaultValue":c=i;break;case"multiple":o=i;default:i!==s&&R(t,l,n,i,a,s)}l=c,e=o,a=h,p!=null?Ea(t,!!e,p,!1):!!a!=!!e&&(l!=null?Ea(t,!!e,l,!0):Ea(t,!!e,e?[]:"",!1));return;case"textarea":h=p=null;for(c in e)if(n=e[c],e.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:R(t,l,c,null,a,n)}for(o in a)if(n=a[o],i=e[o],a.hasOwnProperty(o)&&(n!=null||i!=null))switch(o){case"value":p=n;break;case"defaultValue":h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(E(91));break;default:n!==i&&R(t,l,o,n,a,i)}Ff(t,p,h);return;case"option":for(var x in e)p=e[x],e.hasOwnProperty(x)&&p!=null&&!a.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:R(t,l,x,null,a,p));for(s in a)p=a[s],h=e[s],a.hasOwnProperty(s)&&p!==h&&(p!=null||h!=null)&&(s==="selected"?t.selected=p&&typeof p!="function"&&typeof p!="symbol":R(t,l,s,p,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in e)p=e[b],e.hasOwnProperty(b)&&p!=null&&!a.hasOwnProperty(b)&&R(t,l,b,null,a,p);for(m in a)if(p=a[m],h=e[m],a.hasOwnProperty(m)&&p!==h&&(p!=null||h!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(E(137,l));break;default:R(t,l,m,p,a,h)}return;default:if(Bc(l)){for(var S in e)p=e[S],e.hasOwnProperty(S)&&p!==void 0&&!a.hasOwnProperty(S)&&pc(t,l,S,void 0,a,p);for(v in a)p=a[v],h=e[v],!a.hasOwnProperty(v)||p===h||p===void 0&&h===void 0||pc(t,l,v,p,a,h);return}}for(var f in e)p=e[f],e.hasOwnProperty(f)&&p!=null&&!a.hasOwnProperty(f)&&R(t,l,f,null,a,p);for(y in a)p=a[y],h=e[y],!a.hasOwnProperty(y)||p===h||p==null&&h==null||R(t,l,y,p,a,h)}function rf(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function eh(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,e=performance.getEntriesByType("resource"),a=0;a<e.length;a++){var n=e[a],i=n.transferSize,o=n.initiatorType,c=n.duration;if(i&&c&&rf(o)){for(o=0,c=n.responseEnd,a+=1;a<e.length;a++){var s=e[a],m=s.startTime;if(m>c)break;var v=s.transferSize,y=s.initiatorType;v&&rf(y)&&(s=s.responseEnd,o+=v*(s<c?1:(c-m)/(s-m)))}if(--a,l+=8*(i+o)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var hc=null,vc=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function ff(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function yc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Mo=null;function ah(){var t=window.event;return t&&t.type==="popstate"?t===Mo?!1:(Mo=t,!0):(Mo=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,df=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof df<"u"?function(t){return df.resolve(null).then(t).catch(uh)}:lm;function uh(t){setTimeout(function(){throw t})}function Te(t){return t==="head"}function mf(t,l){var e=l,a=0;do{var n=e.nextSibling;if(t.removeChild(e),n&&n.nodeType===8)if(e=n.data,e==="/$"||e==="/&"){if(a===0){t.removeChild(n),Ha(l);return}a--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")a++;else if(e==="html")Sn(t.ownerDocument.documentElement);else if(e==="head"){e=t.ownerDocument.head,Sn(e);for(var i=e.firstChild;i;){var o=i.nextSibling,c=i.nodeName;i[jn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=o}}else e==="body"&&Sn(t.ownerDocument.body);e=n}while(e);Ha(l)}function pf(t,l){var e=t;t=0;do{var a=e.nextSibling;if(e.nodeType===1?l?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(l?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),a&&a.nodeType===8)if(e=a.data,e==="/$"){if(t===0)break;t--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||t++;e=a}while(e)}function gc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var e=l;switch(l=l.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":gc(e),kc(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function oh(t,l,e,a){for(;t.nodeType===1;){var n=e;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[jn])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=hl(t.nextSibling),t===null)break}return null}function ch(t,l,e){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=hl(t.nextSibling),t===null))return null;return t}function em(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=hl(t.nextSibling),t===null))return null;return t}function bc(t){return t.data==="$?"||t.data==="$~"}function xc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sh(t,l){var e=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||e.readyState!=="loading")l();else{var a=function(){l(),e.removeEventListener("DOMContentLoaded",a)};e.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function hl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Ec=null;function hf(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="/$"||e==="/&"){if(l===0)return hl(t.nextSibling);l--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||l++}t=t.nextSibling}return null}function vf(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(l===0)return t;l--}else e!=="/$"&&e!=="/&"||l++}t=t.previousSibling}return null}function am(t,l,e){switch(l=uu(e),t){case"html":if(t=l.documentElement,!t)throw Error(E(452));return t;case"head":if(t=l.head,!t)throw Error(E(453));return t;case"body":if(t=l.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}function Sn(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);kc(t)}var vl=new Map,yf=new Set;function ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Wl=F.d;F.d={f:rh,r:fh,D:dh,C:mh,L:ph,m:hh,X:yh,S:vh,M:gh};function rh(){var t=Wl.f(),l=Nu();return t||l}function fh(t){var l=Xa(t);l!==null&&l.tag===5&&l.type==="form"?Wd(l):Wl.r(t)}var Qa=typeof document>"u"?null:document;function nm(t,l,e){var a=Qa;if(a&&typeof l=="string"&&l){var n=fl(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof e=="string"&&(n+='[crossorigin="'+e+'"]'),yf.has(n)||(yf.add(n),t={rel:t,crossOrigin:e,href:l},a.querySelector(n)===null&&(l=a.createElement("link"),_t(l,"link",t),Dt(l),a.head.appendChild(l)))}}function dh(t){Wl.D(t),nm("dns-prefetch",t,null)}function mh(t,l){Wl.C(t,l),nm("preconnect",t,l)}function ph(t,l,e){Wl.L(t,l,e);var a=Qa;if(a&&t&&l){var n='link[rel="preload"][as="'+fl(l)+'"]';l==="image"&&e&&e.imageSrcSet?(n+='[imagesrcset="'+fl(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(n+='[imagesizes="'+fl(e.imageSizes)+'"]')):n+='[href="'+fl(t)+'"]';var i=n;switch(l){case"style":i=qa(t);break;case"script":i=Za(t)}vl.has(i)||(t=it({rel:"preload",href:l==="image"&&e&&e.imageSrcSet?void 0:t,as:l},e),vl.set(i,t),a.querySelector(n)!==null||l==="style"&&a.querySelector(Kn(i))||l==="script"&&a.querySelector(Fn(i))||(l=a.createElement("link"),_t(l,"link",t),Dt(l),a.head.appendChild(l)))}}function hh(t,l){Wl.m(t,l);var e=Qa;if(e&&t){var a=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+fl(a)+'"][href="'+fl(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Za(t)}if(!vl.has(i)&&(t=it({rel:"modulepreload",href:t},l),vl.set(i,t),e.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Fn(i)))return}a=e.createElement("link"),_t(a,"link",t),Dt(a),e.head.appendChild(a)}}}function vh(t,l,e){Wl.S(t,l,e);var a=Qa;if(a&&t){var n=xa(a).hoistableStyles,i=qa(t);l=l||"default";var o=n.get(i);if(!o){var c={loading:0,preload:null};if(o=a.querySelector(Kn(i)))c.loading=5;else{t=it({rel:"stylesheet",href:t,"data-precedence":l},e),(e=vl.get(i))&&ps(t,e);var s=o=a.createElement("link");Dt(s),_t(s,"link",t),s._p=new Promise(function(m,v){s.onload=m,s.onerror=v}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Oi(o,l,a)}o={type:"stylesheet",instance:o,count:1,state:c},n.set(i,o)}}}function yh(t,l){Wl.X(t,l);var e=Qa;if(e&&t){var a=xa(e).hoistableScripts,n=Za(t),i=a.get(n);i||(i=e.querySelector(Fn(n)),i||(t=it({src:t,async:!0},l),(l=vl.get(n))&&hs(t,l),i=e.createElement("script"),Dt(i),_t(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function gh(t,l){Wl.M(t,l);var e=Qa;if(e&&t){var a=xa(e).hoistableScripts,n=Za(t),i=a.get(n);i||(i=e.querySelector(Fn(n)),i||(t=it({src:t,async:!0,type:"module"},l),(l=vl.get(n))&&hs(t,l),i=e.createElement("script"),Dt(i),_t(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function gf(t,l,e,a){var n=(n=de.current)?ou(n):null;if(!n)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(l=qa(e.href),e=xa(n).hoistableStyles,a=e.get(l),a||(a={type:"style",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=qa(e.href);var i=xa(n).hoistableStyles,o=i.get(t);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,o),(i=n.querySelector(Kn(t)))&&!i._p&&(o.instance=i,o.state.loading=5),vl.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},vl.set(t,e),i||bh(n,t,e,o.state))),l&&a===null)throw Error(E(528,""));return o}if(l&&a!==null)throw Error(E(529,""));return null;case"script":return l=e.async,e=e.src,typeof e=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Za(e),e=xa(n).hoistableScripts,a=e.get(l),a||(a={type:"script",instance:null,count:0,state:null},e.set(l,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function qa(t){return'href="'+fl(t)+'"'}function Kn(t){return'link[rel="stylesheet"]['+t+"]"}function im(t){return it({},t,{"data-precedence":t.precedence,precedence:null})}function bh(t,l,e,a){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?a.loading=1:(l=t.createElement("link"),a.preload=l,l.addEventListener("load",function(){return a.loading|=1}),l.addEventListener("error",function(){return a.loading|=2}),_t(l,"link",e),Dt(l),t.head.appendChild(l))}function Za(t){return'[src="'+fl(t)+'"]'}function Fn(t){return"script[async]"+t}function bf(t,l,e){if(l.count++,l.instance===null)switch(l.type){case"style":var a=t.querySelector('style[data-href~="'+fl(e.href)+'"]');if(a)return l.instance=a,Dt(a),a;var n=it({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Dt(a),_t(a,"style",n),Oi(a,e.precedence,t),l.instance=a;case"stylesheet":n=qa(e.href);var i=t.querySelector(Kn(n));if(i)return l.state.loading|=4,l.instance=i,Dt(i),i;a=im(e),(n=vl.get(n))&&ps(a,n),i=(t.ownerDocument||t).createElement("link"),Dt(i);var o=i;return o._p=new Promise(function(c,s){o.onload=c,o.onerror=s}),_t(i,"link",a),l.state.loading|=4,Oi(i,e.precedence,t),l.instance=i;case"script":return i=Za(e.src),(n=t.querySelector(Fn(i)))?(l.instance=n,Dt(n),n):(a=e,(n=vl.get(i))&&(a=it({},e),hs(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Dt(n),_t(n,"link",a),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(E(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(a=l.instance,l.state.loading|=4,Oi(a,e.precedence,t));return l.instance}function Oi(t,l,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,o=0;o<a.length;o++){var c=a[o];if(c.dataset.precedence===l)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(l=e.nodeType===9?e.head:e,l.insertBefore(t,l.firstChild))}function ps(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function hs(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var _i=null;function xf(t,l,e){if(_i===null){var a=new Map,n=_i=new Map;n.set(e,a)}else n=_i,a=n.get(e),a||(a=new Map,n.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),n=0;n<e.length;n++){var i=e[n];if(!(i[jn]||i[wt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var o=i.getAttribute(l)||"";o=t+o;var c=a.get(o);c?c.push(i):a.set(o,[i])}}return a}function Ef(t,l,e){t=t.ownerDocument||t,t.head.insertBefore(e,l==="title"?t.querySelector("head > title"):null)}function xh(t,l,e){if(e===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function um(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Eh(t,l,e,a){if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var n=qa(a.href),i=l.querySelector(Kn(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=cu.bind(t),l.then(t,t)),e.state.loading|=4,e.instance=i,Dt(i);return}i=l.ownerDocument||l,a=im(a),(n=vl.get(n))&&ps(a,n),i=i.createElement("link"),Dt(i);var o=i;o._p=new Promise(function(c,s){o.onload=c,o.onerror=s}),_t(i,"link",a),e.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(e,l),(l=e.state.preload)&&(e.state.loading&3)===0&&(t.count++,e=cu.bind(t),l.addEventListener("load",e),l.addEventListener("error",e))}}var Do=0;function Sh(t,l){return t.stylesheets&&t.count===0&&Ui(t,t.stylesheets),0<t.count||0<t.imgCount?function(e){var a=setTimeout(function(){if(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+l);0<t.imgBytes&&Do===0&&(Do=62500*eh());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Do?50:800)+l);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function Ui(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,l.forEach(Ah,t),su=null,cu.call(t))}function Ah(t,l){if(!(l.state.loading&4)){var e=su.get(t);if(e)var a=e.get(null);else{e=new Map,su.set(t,e);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var o=n[i];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(e.set(o.dataset.precedence,o),a=o)}a&&e.set(null,a)}n=l.instance,o=n.getAttribute("data-precedence"),i=e.get(o)||a,i===a&&e.set(null,n),e.set(o,n),this.count++,a=cu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var _n={$$typeof:Xl,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function Nh(t,l,e,a,n,i,o,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.hiddenUpdates=Pu(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function om(t,l,e,a,n,i,o,c,s,m,v,y){return t=new Nh(t,l,e,o,s,m,v,y,c),l=1,i===!0&&(l|=24),i=Wt(3,null,null,l),t.current=i,i.stateNode=t,l=jc(),l.refCount++,t.pooledCache=l,l.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:l},Zc(i),t}function cm(t){return t?(t=va,t):va}function sm(t,l,e,a,n,i){n=cm(n),a.context===null?a.context=n:a.pendingContext=n,a=pe(l),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=he(t,a,l),e!==null&&(Zt(e,t,l),pn(e,t,l))}function Sf(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<l?e:l}}function vs(t,l){Sf(t,l),(t=t.alternate)&&Sf(t,l)}function rm(t){if(t.tag===13||t.tag===31){var l=Ke(t,67108864);l!==null&&Zt(l,t,67108864),vs(t,67108864)}}function Af(t){if(t.tag===13||t.tag===31){var l=ll();l=Mc(l);var e=Ke(t,l);e!==null&&Zt(e,t,l),vs(t,l)}}var ru=!0;function zh(t,l,e,a){var n=O.T;O.T=null;var i=F.p;try{F.p=2,ys(t,l,e,a)}finally{F.p=i,O.T=n}}function Th(t,l,e,a){var n=O.T;O.T=null;var i=F.p;try{F.p=8,ys(t,l,e,a)}finally{F.p=i,O.T=n}}function ys(t,l,e,a){if(ru){var n=Sc(a);if(n===null)To(t,l,a,fu,e),Nf(t,a);else if(Dh(n,t,l,e,a))a.stopPropagation();else if(Nf(t,a),l&4&&-1<Mh.indexOf(t)){for(;n!==null;){var i=Xa(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var o=we(i.pendingLanes);if(o!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var s=1<<31-tl(o);c.entanglements[1]|=s,o&=~s}Ml(i),(K&6)===0&&(tu=It()+500,Jn(0,!1))}}break;case 31:case 13:c=Ke(i,2),c!==null&&Zt(c,i,2),Nu(),vs(i,2)}if(i=Sc(a),i===null&&To(t,l,a,fu,e),i===n)break;n=i}n!==null&&a.stopPropagation()}else To(t,l,a,null,e)}}function Sc(t){return t=wc(t),gs(t)}var fu=null;function gs(t){if(fu=null,t=ra(t),t!==null){var l=Hn(t);if(l===null)t=null;else{var e=l.tag;if(e===13){if(t=Bf(l),t!==null)return t;t=null}else if(e===31){if(t=wf(l),t!==null)return t;t=null}else if(e===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return fu=t,null}function fm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pp()){case Uf:return 2;case qf:return 8;case Li:case hp:return 32;case Hf:return 268435456;default:return 32}default:return 32}}var Ac=!1,ge=null,be=null,xe=null,Un=new Map,qn=new Map,ue=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nf(t,l){switch(t){case"focusin":case"focusout":ge=null;break;case"dragenter":case"dragleave":be=null;break;case"mouseover":case"mouseout":xe=null;break;case"pointerover":case"pointerout":Un.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":qn.delete(l.pointerId)}}function en(t,l,e,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:l,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},l!==null&&(l=Xa(l),l!==null&&rm(l)),t):(t.eventSystemFlags|=a,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function Dh(t,l,e,a,n){switch(l){case"focusin":return ge=en(ge,t,l,e,a,n),!0;case"dragenter":return be=en(be,t,l,e,a,n),!0;case"mouseover":return xe=en(xe,t,l,e,a,n),!0;case"pointerover":var i=n.pointerId;return Un.set(i,en(Un.get(i)||null,t,l,e,a,n)),!0;case"gotpointercapture":return i=n.pointerId,qn.set(i,en(qn.get(i)||null,t,l,e,a,n)),!0}return!1}function dm(t){var l=ra(t.target);if(l!==null){var e=Hn(l);if(e!==null){if(l=e.tag,l===13){if(l=Bf(e),l!==null){t.blockedOn=l,ur(t.priority,function(){Af(e)});return}}else if(l===31){if(l=wf(e),l!==null){t.blockedOn=l,ur(t.priority,function(){Af(e)});return}}else if(l===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var e=Sc(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);jo=a,e.target.dispatchEvent(a),jo=null}else return l=Xa(e),l!==null&&rm(l),t.blockedOn=e,!1;l.shift()}return!0}function zf(t,l,e){qi(t)&&e.delete(l)}function kh(){Ac=!1,ge!==null&&qi(ge)&&(ge=null),be!==null&&qi(be)&&(be=null),xe!==null&&qi(xe)&&(xe=null),Un.forEach(zf),qn.forEach(zf)}function xi(t,l){t.blockedOn===l&&(t.blockedOn=null,Ac||(Ac=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,kh)))}var Ei=null;function Tf(t){Ei!==t&&(Ei=t,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,function(){Ei===t&&(Ei=null);for(var l=0;l<t.length;l+=3){var e=t[l],a=t[l+1],n=t[l+2];if(typeof a!="function"){if(gs(a||e)===null)continue;break}var i=Xa(e);i!==null&&(t.splice(l,3),l-=3,ac(i,{pending:!0,data:n,method:e.method,action:a},a,n))}}))}function Ha(t){function l(s){return xi(s,t)}ge!==null&&xi(ge,t),be!==null&&xi(be,t),xe!==null&&xi(xe,t),Un.forEach(l),qn.forEach(l);for(var e=0;e<ue.length;e++){var a=ue[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<ue.length&&(e=ue[0],e.blockedOn===null);)dm(e),e.blockedOn===null&&ue.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],o=n[Vt]||null;if(typeof i=="function")o||Tf(e);else if(o){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,o=i[Vt]||null)c=o.formAction;else if(gs(n)!==null)continue}else c=o.action;typeof c=="function"?e[a+1]=c:(e.splice(a,3),a-=3),Tf(e)}}}function mm(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),a||setTimeout(e,20)}function e(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(e,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function bs(t){this._internalRoot=t}Mu.prototype.render=bs.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(E(409));var e=l.current,a=ll();sm(e,a,t,l,null,null)};Mu.prototype.unmount=bs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;sm(t.current,2,null,t,null,null),Nu(),l[Ya]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var l=Gf();t={blockedOn:null,target:t,priority:l};for(var e=0;e<ue.length&&l!==0&&l<ue[e].priority;e++);ue.splice(e,0,t),e===0&&dm(t)}};var Mf=Df.version;if(Mf!=="19.2.5")throw Error(E(527,Mf,"19.2.5"));F.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=op(l),t=t!==null?Cf(t):null,t=t===null?null:t.stateNode,t};var Bh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(an=__REACT_DEVTOOLS_GLOBAL_HOOK__,!an.isDisabled&&an.supportsFiber))try{Yn=an.inject(Bh),Pt=an}catch{}var an;Du.createRoot=function(t,l){if(!kf(t))throw Error(E(299));var e=!1,a="",n=n0,i=i0,o=u0;return l!=null&&(l.unstable_strictMode===!0&&(e=!0),l.identifierPrefix!==void 0&&(a=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(o=l.onRecoverableError)),l=om(t,1,!1,null,null,e,a,null,n,i,o,mm),t[Ya]=l.current,ms(t),new bs(l)};Du.hydrateRoot=function(t,l,e){if(!kf(t))throw Error(E(299));var a=!1,n="",i=n0,o=i0,c=u0,s=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(n=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(s=e.formState)),l=om(t,1,!0,l,e??null,a,n,s,i,o,c,mm),l.context=cm(null),e=l.current,a=ll(),a=Mc(a),n=pe(a),n.callback=null,he(e,n,a),e=a,l.current.lanes=e,Ln(l,e),Ml(l),t[Ya]=l.current,ms(t),new Mu(l)};Du.version="19.2.5"});var ym=Il((_v,vm)=>{"use strict";function hm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hm)}catch(t){console.error(t)}}hm(),vm.exports=pm()});var u=Ts(Pn()),Mm=Ts(ym()),ku=Date.now();function nl(){return ku+=1,ku}var Bu=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function gm(){let l=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),e=a=>+l.find(n=>n.type===a).value;return{hour:e("hour"),minute:e("minute"),second:e("second")}}function wh(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function _(t=0){let l=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(l)}function Ch(t=0){let l=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"narrow"}).format(l)}function Dl(t){let[l,e]=t.split(":").map(Number);return l*60+e}function Me(t){let l=Math.floor(t/60)%24,e=t%60,a=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(e).padStart(2,"0")} ${a}`}function Va(t){if(t<60)return`${t}m`;let l=Math.floor(t/60),e=t%60;return e?`${l}h ${e}m`:`${l}h`}function xs(t){let l=Math.floor(t/60)%24,e=t%60;return`${String(l).padStart(2,"0")}:${String(e).padStart(2,"0")}`}function wu(t){if(!t||t.length===0)return{streak:0,freezeUsed:!1};let l=new Set(t),e;if(l.has(_(0)))e=0;else if(l.has(_(-1)))e=-1;else return{streak:0,freezeUsed:!1};let a=0,n=e,i=0,o=!0,c=!1;for(;;)if(l.has(_(n)))a++,i++,!o&&i>=7&&(o=!0,i=0),n-=1;else if(o)o=!1,i=0,c=!0,n-=1;else break;return{streak:a,freezeUsed:c}}function Oh(t){return wu(t).streak}var _h=[15,30,45,60,90,120],Dm="tasksh.sound.v1",$n=null;function Uh(){if(!$n){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;$n=new t}return $n.state==="suspended"&&$n.resume(),$n}function km(){try{let t=localStorage.getItem(Dm);return t===null?!0:t==="1"}catch{return!0}}function qh(t){try{localStorage.setItem(Dm,t?"1":"0")}catch{}}function We(t){if(!km())return;let l=Uh();if(!l)return;let e=l.currentTime;t.forEach(({freq:a,start:n=0,dur:i=.08,type:o="sine",gain:c=.05})=>{let s=l.createOscillator(),m=l.createGain();s.type=o,s.frequency.setValueAtTime(a,e+n),m.gain.setValueAtTime(1e-4,e+n),m.gain.exponentialRampToValueAtTime(c,e+n+.008),m.gain.exponentialRampToValueAtTime(1e-4,e+n+i),s.connect(m),m.connect(l.destination),s.start(e+n),s.stop(e+n+i+.02)})}var j={click:()=>We([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>We([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>We([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>We([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>We([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>We([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function Hh(){let[t,l]=(0,u.useState)(km());return[t,()=>{let a=!t;l(a),qh(a),a&&We([{freq:720,dur:.05,gain:.04}])}]}function Yh(t,l=550){let[e,a]=(0,u.useState)(t),n=(0,u.useRef)(t),i=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let o=n.current,c=t;if(o===c)return;let s=performance.now(),m=y=>1-Math.pow(1-y,3),v=y=>{let p=y-s,h=Math.min(1,p/l),x=m(h);a(Math.round(o+(c-o)*x)),h<1?i.current=requestAnimationFrame(v):n.current=c};return i.current=requestAnimationFrame(v),()=>i.current&&cancelAnimationFrame(i.current)},[t,l]),e}function xl({value:t,className:l,suffix:e=""}){let a=Yh(t);return u.default.createElement("span",{className:l},a,e)}function Xh({axes:t,size:l=220,maxValue:e}){let[a,n]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let b=requestAnimationFrame(()=>n(!0));return()=>cancelAnimationFrame(b)},[]);let i=t.length,o=l/2,c=l/2,s=l/2-34,m=e??Math.max(1,...t.map(b=>b.value)),v=b=>Math.PI*2*b/i-Math.PI/2,y=(b,S)=>{let f=v(b);return[o+Math.cos(f)*s*S,c+Math.sin(f)*s*S]},p=[.25,.5,.75,1],x=t.map((b,S)=>y(S,a?Math.max(.04,b.value/m):.02)).map((b,S)=>`${S===0?"M":"L"}${b[0].toFixed(1)},${b[1].toFixed(1)}`).join(" ")+"Z";return u.default.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:"100%",height:l,className:"radar-chart"},p.map((b,S)=>{let r=t.map((d,g)=>y(g,b)).map((d,g)=>`${g===0?"M":"L"}${d[0].toFixed(1)},${d[1].toFixed(1)}`).join(" ")+"Z";return u.default.createElement("path",{key:S,d:r,className:"radar-ring"})}),t.map((b,S)=>{let f=y(S,1);return u.default.createElement("line",{key:S,x1:o,y1:c,x2:f[0],y2:f[1],className:"radar-spoke"})}),u.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),t.map((b,S)=>{let f=y(S,1.22),r=y(S,a?Math.max(.04,b.value/m):.02);return u.default.createElement("g",{key:b.key||S},u.default.createElement("circle",{cx:r[0],cy:r[1],r:3.5,fill:b.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),u.default.createElement("text",{x:f[0],y:f[1],textAnchor:"middle",dominantBaseline:"middle",className:"radar-label"},b.label))}))}function Cu({pct:t,size:l=108,stroke:e=9,color:a="#5EEAD4",trackColor:n="#1E2228",label:i,sublabel:o}){let[c,s]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let b=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(b)},[]);let m=l/2-e,v=2*Math.PI*m,y=Math.max(0,Math.min(100,t)),p=v-(c?y/100:0)*v,h=Math.max(8,Math.round(l*.135)),x=Math.max(6.5,Math.round(l*.075));return u.default.createElement("div",{className:"radial-progress-wrap",style:{width:l,height:l}},u.default.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l},u.default.createElement("circle",{cx:l/2,cy:l/2,r:m,fill:"none",stroke:n,strokeWidth:e}),u.default.createElement("circle",{cx:l/2,cy:l/2,r:m,fill:"none",stroke:a,strokeWidth:e,strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:p,transform:`rotate(-90 ${l/2} ${l/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),u.default.createElement("div",{className:"radial-progress-center"},i&&u.default.createElement("span",{className:"radial-progress-label",style:{fontSize:h}},i),o&&u.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:x}},o)))}function Bm({segments:t,size:l=132,stroke:e=18,centerLabel:a,centerSublabel:n}){let[i,o]=(0,u.useState)(!1);(0,u.useEffect)(()=>{let p=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(p)},[]);let c=l/2-e/2,s=2*Math.PI*c,m=Math.max(1e-6,t.reduce((p,h)=>p+Math.max(0,h.value),0)),v=0,y=t.map(p=>{let h=Math.max(0,p.value),x=h/m,b=i?x*s:0,S=s-b,f=v/m*360;return v+=h,{...p,dash:b,gap:S,rotation:f,frac:x}});return u.default.createElement("div",{className:"donut-wrap",style:{width:l,height:l}},u.default.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l},u.default.createElement("circle",{cx:l/2,cy:l/2,r:c,fill:"none",stroke:"#1E2228",strokeWidth:e}),y.map((p,h)=>u.default.createElement("circle",{key:p.key||h,cx:l/2,cy:l/2,r:c,fill:"none",stroke:p.color,strokeWidth:e,strokeDasharray:`${p.dash} ${p.gap}`,strokeDashoffset:0,transform:`rotate(${p.rotation-90} ${l/2} ${l/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:y.length>1?"butt":"round"}))),u.default.createElement("div",{className:"donut-center"},a!==void 0&&u.default.createElement("span",{className:"donut-center-label"},a),n&&u.default.createElement("span",{className:"donut-center-sublabel"},n)))}function Lh({counts:t,weeksBack:l=12,colorSteps:e}){let a=e||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],n=0,i=l*7,o=Array.from({length:i},(v,y)=>n-(i-1-y)),c=Math.max(1,...o.map(v=>t[_(v)]||0)),s=[];for(let v=0;v<l;v++)s.push(o.slice(v*7,v*7+7));let m=v=>{if(!v)return 0;let y=v/c;return y>.75?4:y>.5?3:y>.25?2:1};return u.default.createElement("div",{className:"heatmap-wrap"},u.default.createElement("div",{className:"heatmap-grid"},s.map((v,y)=>u.default.createElement("div",{className:"heatmap-col",key:y},v.map((p,h)=>{let x=_(p),b=t[x]||0,S=m(b);return u.default.createElement("span",{key:h,className:`heatmap-cell ${p===0?"today":""}`,style:{background:a[S],animationDelay:`${(y*7+h)*4}ms`},title:`${x}: ${b} completed`})})))),u.default.createElement("div",{className:"heatmap-legend"},u.default.createElement("span",null,"less"),a.map((v,y)=>u.default.createElement("span",{key:y,className:"heatmap-legend-cell",style:{background:v}})),u.default.createElement("span",null,"more")))}function jh(t){let l=[],e=[];for(let a of t){let n=l.findIndex(i=>a.start>=i);n===-1?(n=l.length,l.push(a.end)):l[n]=a.end,e.push({...a,lane:n})}return{placed:e,laneCount:Math.max(1,l.length)}}function Gh({routines:t,nowMinutes:l}){let[e,a]=(0,u.useState)(!1),[n,i]=(0,u.useState)(0),o=(0,u.useRef)(null);(0,u.useEffect)(()=>{let d=requestAnimationFrame(()=>a(!0));return()=>cancelAnimationFrame(d)},[]),(0,u.useEffect)(()=>{if(!o.current)return;let d=o.current,g=new ResizeObserver(N=>{for(let M of N)i(M.contentRect.width)});return g.observe(d),i(d.getBoundingClientRect().width),()=>g.disconnect()},[]);let c=1440,s=l/c*100,m=[0,3,6,9,12,15,18,21,24],v=d=>{let g=d%24;return g===0?"12a":g===12?"12p":g>12?`${g-12}p`:`${g}a`},y=_(0),p=t.map(d=>{let g=Dl(d.time);return{r:d,start:g,end:g+Math.max(1,d.duration)}}),{placed:h,laneCount:x}=jh(p),b=30,S=4,f=7,r=f*2+x*b+(x-1)*S;return u.default.createElement("div",{className:"timeline-wrap"},u.default.createElement("div",{className:"timeline-hours"},m.map(d=>u.default.createElement("div",{key:d,className:"timeline-hour",style:{left:`${d/24*100}%`}},u.default.createElement("span",null,v(d))))),u.default.createElement("div",{className:"timeline-track",ref:o,style:{height:r}},u.default.createElement("div",{className:"timeline-night",style:{left:"0%",width:`${6/24*100}%`}}),u.default.createElement("div",{className:"timeline-night",style:{left:`${22/24*100}%`,width:`${2/24*100}%`}}),m.map(d=>u.default.createElement("div",{key:d,className:"timeline-gridline",style:{left:`${d/24*100}%`}})),u.default.createElement("div",{className:"timeline-elapsed",style:{width:e?`${s}%`:"0%"}}),h.map(({r:d,start:g,lane:N},M)=>{let z=g/c*100,D=Math.max(1,d.duration)/c*100,w=Math.max(.8,Math.min(D,100-z)),C=(d.history||[]).includes(y),B=Re(d.id),Z=w/100*n>44;return u.default.createElement("div",{key:d.id,className:`timeline-block ${C?"done":""}`,style:{left:`${z}%`,top:f+N*(b+S),width:e?`${w}%`:"0%",height:b,transitionDelay:`${M*20}ms`,background:C?"linear-gradient(180deg, #3A4048, #2A2F36)":`linear-gradient(180deg, ${B}, ${B}CC)`,boxShadow:C?"none":`0 0 10px ${B}55`},title:`${d.label} \xB7 ${Me(g)} \xB7 ${Va(d.duration)}${C?" \xB7 done":""}`},Z&&u.default.createElement("span",{className:"timeline-block-label"},d.label))}),u.default.createElement("div",{className:"timeline-now",style:{left:`${s}%`,top:-3,bottom:-3}},u.default.createElement("span",{className:"timeline-now-tag"},Me(l)))),t.length>0&&u.default.createElement("div",{className:"timeline-legend"},t.map(d=>{let g=(d.history||[]).includes(y);return u.default.createElement("span",{key:d.id,className:`timeline-legend-chip ${g?"done":""}`},u.default.createElement("span",{className:"timeline-legend-dot",style:{background:g?"#3A4048":Re(d.id)}}),u.default.createElement("span",{className:"timeline-legend-time"},Me(Dl(d.time))),u.default.createElement("span",{className:"timeline-legend-label"},d.label))})))}var Qh=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[_(-1),_(-2),_(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[_(-1),_(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[_(0),_(-1),_(-2),_(-3),_(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[_(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Ss(){let[t,l]=(0,u.useState)(gm());return(0,u.useEffect)(()=>{let e=setInterval(()=>l(gm()),1e3);return()=>clearInterval(e)},[]),t}function As(t,l){return(0,u.useMemo)(()=>{let e=[...t].sort((i,o)=>Dl(i.time)-Dl(o.time));if(e.length===0)return{sorted:e,currentId:null,nextId:null};let a=e.length-1;for(let i=0;i<e.length&&Dl(e[i].time)<=l;i++)a=i;let n=(a+1)%e.length;return{sorted:e,currentId:e[a].id,nextId:e[n].id}},[t,l])}function Zh({history:t}){let l=new Set(t||[]),e=[-6,-5,-4,-3,-2,-1,0].map(a=>_(a));return u.default.createElement("span",{className:"week-dots"},e.map((a,n)=>u.default.createElement("span",{key:n,className:`week-dot ${l.has(a)?"filled":""}`})))}function Vh({routine:t,status:l,index:e,onDelete:a,onToggleToday:n,onSave:i}){let o=Dl(t.time),c=o+t.duration,{streak:s,freezeUsed:m}=wu(t.history),v=(t.history||[]).includes(_(0)),[y,p]=(0,u.useState)(0),h=(0,u.useRef)(!1),x=(0,u.useRef)(0),b=(0,u.useRef)(0),S=(0,u.useRef)(null),f=(0,u.useRef)(!1),[r,d]=(0,u.useState)(!1),[g,N]=(0,u.useState)(!1),[M,z]=(0,u.useState)(t.label),[D,w]=(0,u.useState)(t.time),[C,B]=(0,u.useState)(t.duration),[H,Z]=(0,u.useState)(t.alternatives||[]),vt=()=>{z(t.label),w(t.time),B(t.duration),Z(t.alternatives||[]),N(!0)},k=()=>{let J=M.trim();J&&(i(t.id,{label:J,time:D||t.time,duration:Math.max(5,+C||t.duration),alternatives:H.map(Et=>Et.trim()).filter(Boolean)}),N(!1))},P=J=>{g||(h.current=!0,f.current=!1,S.current=null,x.current=J.clientX,b.current=J.clientY)},rt=J=>{if(!h.current)return;let Et=J.clientX-x.current,St=J.clientY-b.current;if(S.current===null){if(Math.abs(Et)<6&&Math.abs(St)<6)return;if(S.current=Math.abs(Et)>Math.abs(St)?"x":"y",S.current==="y"){h.current=!1;return}}S.current==="x"&&(Math.abs(Et)>4&&(f.current=!0),p(Math.max(-120,Math.min(0,Et))))},ct=()=>{h.current&&(h.current=!1,y<-70?(d(!0),setTimeout(()=>a(t.id),200)):(p(0),f.current||vt()))};return u.default.createElement("div",{className:`routine-row-wrap ${r?"removing":""}`,style:{animationDelay:`${e*35}ms`}},u.default.createElement("div",{className:"routine-delete-bg"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),u.default.createElement("div",{className:`routine-row ${l}`,style:{transform:`translateX(${y}px)`,transition:h.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${v?"#2A2F36":Re(t.id)}`},onPointerDown:P,onPointerMove:rt,onPointerUp:ct,onPointerLeave:ct,onPointerCancel:ct},u.default.createElement("div",{className:"routine-line"},u.default.createElement("span",{className:`routine-node ${v?"quest-done":""}`}),u.default.createElement("span",{className:"routine-connector"})),g?u.default.createElement("div",{className:"routine-edit",onPointerDown:J=>J.stopPropagation()},u.default.createElement("input",{className:"edit-label",value:M,onChange:J=>z(J.target.value),onKeyDown:J=>J.key==="Enter"&&k(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"time",className:"time-input",value:D,onChange:J=>w(J.target.value)}),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:C,onChange:J=>B(J.target.value)}),u.default.createElement("span",{className:"edit-unit"},"min")),u.default.createElement("div",{className:"alt-composer"},u.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),H.map((J,Et)=>u.default.createElement("div",{className:"alt-composer-row",key:Et},u.default.createElement("input",{type:"text",placeholder:`alternative ${Et+1}`,value:J,onChange:St=>{let il=[...H];il[Et]=St.target.value,Z(il)},onKeyDown:St=>St.key==="Enter"&&k()}),u.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>Z(H.filter((St,il)=>il!==Et)),"aria-label":"Remove alternative"},"\xD7"))),u.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>Z([...H,""])},"+ another option")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>N(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:k},"save"))):u.default.createElement("div",{className:"routine-main"},u.default.createElement("div",{className:"routine-top"},u.default.createElement("span",{className:"routine-time"},Me(o)),l==="current"&&u.default.createElement("span",{className:"live-tag"},"NOW"),s>0&&u.default.createElement("span",{className:"streak-tag"},"\u{1F525}",s,m&&u.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),u.default.createElement("span",{className:"routine-label"},t.label),t.alternatives&&t.alternatives.length>0&&u.default.createElement("span",{className:"routine-alts"},"or: ",t.alternatives.join(" \xB7 ")),u.default.createElement("span",{className:"routine-span"},Me(o)," \u2013 ",Me(c)," \xB7 ",Va(t.duration)),u.default.createElement(Zh,{history:t.history}))))}function Jh({routines:t}){let l=[-6,-5,-4,-3,-2,-1,0],e=t.length||1,a=l.map(n=>{let i=_(n),o=t.filter(c=>(c.history||[]).includes(i)).length;return{offset:n,pct:Math.round(o/e*100),label:Ch(n)}});return u.default.createElement("div",{className:"week-chart"},a.map((n,i)=>u.default.createElement("div",{className:"week-bar-col",key:i},u.default.createElement("div",{className:"week-bar-track"},u.default.createElement("div",{className:`week-bar-fill ${n.offset===0?"today":""}`,style:{height:`${Math.max(4,n.pct)}%`}})),u.default.createElement("span",{className:"week-bar-label"},n.label))))}function Kh({routines:t,setRoutines:l}){let e=Ss(),a=e.hour*60+e.minute,{sorted:n,currentId:i,nextId:o}=As(t,a),c=n.find(k=>k.id===i),s=n.find(k=>k.id===o),[m,v]=(0,u.useState)(""),[y,p]=(0,u.useState)(()=>xs(a)),[h,x]=(0,u.useState)(30),[b,S]=(0,u.useState)(!1),[f,r]=(0,u.useState)([]),[d,g]=(0,u.useState)(!1),N=()=>{let k=m.trim();if(!k){S(!0),setTimeout(()=>S(!1),420),j.error();return}let P=y||xs(a),rt=f.map(ct=>ct.trim()).filter(Boolean);l(ct=>[...ct,{id:nl(),time:P,label:k,duration:Math.max(5,+h||30),history:[],alternatives:rt}]),v(""),p(xs(a)),x(30),r([]),g(!1),j.click()},M=k=>{l(P=>P.filter(rt=>rt.id!==k)),j.delete()},z=k=>{let P=_(0),rt=!1;l(ct=>ct.map(J=>{if(J.id!==k)return J;let Et=(J.history||[]).includes(P);rt=!Et;let St=Et?J.history.filter(il=>il!==P):[...J.history||[],P];return{...J,history:St.slice(-60)}})),rt?j.success():j.click()},D=(k,P)=>l(rt=>rt.map(ct=>ct.id===k?{...ct,...P}:ct)),w=c?Dl(c.time)+c.duration:0,C=s?(Dl(s.time)-a+1440)%1440||1440:0,B=_(0),H=n.filter(k=>(k.history||[]).includes(B)).length,Z=n.reduce((k,P)=>Math.max(k,Oh(P.history)),0),vt=n.length?Math.round(H/n.length*100):0;return u.default.createElement("div",{className:"task-list routine-list"},u.default.createElement("div",{className:"hero-card"},u.default.createElement("div",{className:"hero-clock-row"},u.default.createElement("span",{className:"hero-clock"},String(e.hour%12===0?12:e.hour%12).padStart(2,"0"),":",String(e.minute).padStart(2,"0"),u.default.createElement("span",{className:"hero-sec"},":",String(e.second).padStart(2,"0")),u.default.createElement("span",{className:"hero-ampm"},e.hour<12?"AM":"PM")),u.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),u.default.createElement("span",{className:"hero-date"},wh()),u.default.createElement("div",{className:"hero-divider"}),c?u.default.createElement("div",{className:"hero-current"},u.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),u.default.createElement("div",{className:"hero-current-name"},u.default.createElement("span",{className:"pulse-dot"}),c.label),u.default.createElement("span",{className:"hero-sub"},"until ",Me(w)," \xB7 next: ",s?.label," in ",Va(C))):u.default.createElement("span",{className:"hero-sub"},"no routines yet")),u.default.createElement("div",{className:"quest-stats"},u.default.createElement("div",{className:"quest-stat-item"},u.default.createElement("span",{className:"quest-stat-value"},u.default.createElement(xl,{value:H}),u.default.createElement("span",{className:"quest-stat-of"},"/",n.length)),u.default.createElement("span",{className:"quest-stat-label"},"today")),u.default.createElement("div",{className:"quest-stat-item"},u.default.createElement("span",{className:"quest-stat-value amber"},"\u{1F525}",u.default.createElement(xl,{value:Z})),u.default.createElement("span",{className:"quest-stat-label"},"best streak")),u.default.createElement("div",{className:"quest-stat-item quest-stat-ring"},u.default.createElement(Cu,{pct:vt,size:44,stroke:3.5,label:`${vt}%`}))),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"TODAY'S SCHEDULE")),u.default.createElement(Gh,{routines:n,nowMinutes:a}),u.default.createElement("div",{className:`composer ${b?"shake":""}`},u.default.createElement("input",{type:"text",placeholder:"new routine...",value:m,onChange:k=>v(k.target.value),onKeyDown:k=>k.key==="Enter"&&N()}),u.default.createElement("input",{type:"time",className:"time-input",value:y,onChange:k=>p(k.target.value)}),u.default.createElement("button",{type:"button",className:`alt-toggle-btn ${d?"active":""}`,onClick:()=>g(k=>!k),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),u.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),d&&u.default.createElement("div",{className:"alt-composer"},u.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),f.map((k,P)=>u.default.createElement("div",{className:"alt-composer-row",key:P},u.default.createElement("input",{type:"text",placeholder:`alternative ${P+1}, e.g. "Drawing"`,value:k,onChange:rt=>{let ct=[...f];ct[P]=rt.target.value,r(ct)},onKeyDown:rt=>rt.key==="Enter"&&N()}),u.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>r(f.filter((rt,ct)=>ct!==P)),"aria-label":"Remove alternative"},"\xD7"))),u.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>r([...f,""])},"+ another option")),u.default.createElement("div",{className:"duration-chips"},_h.map(k=>u.default.createElement("button",{key:k,className:h===k?"active":"",onClick:()=>x(k)},Va(k))),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:h,onChange:k=>x(+k.target.value||5)})),n.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):n.map((k,P)=>u.default.createElement(Vh,{key:k.id,routine:k,index:P,status:k.id===i?"current":k.id===o?"next":"idle",onDelete:M,onToggleToday:z,onSave:D})),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"7-DAY COMPLETION")),u.default.createElement(Jh,{routines:n}))}function Fh(){let t=new Date,l=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),e=+l.find(o=>o.type==="year").value,a=+l.find(o=>o.type==="month").value,n=new Date(e,a,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(t);return{y:e,m:a,daysInMonth:n,monthLabel:i}}function $h(t,l,e){return`${t}-${String(l).padStart(2,"0")}-${String(e).padStart(2,"0")}`}function wm(t){let l=new Set(t||[]),e=0;for(let a=-6;a<=0;a++)l.has(_(a))&&e++;return e}function Wh(t){if(!t)return null;let l=new Date(t+"T00:00:00+05:30"),e=new Date(_(0)+"T00:00:00+05:30"),a=Math.round((l-e)/864e5);return a<0?{text:`${Math.abs(a)}d overdue`,overdue:!0}:a===0?{text:"due today",overdue:!1}:{text:`${a}d to go`,overdue:!1}}var Rh=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[_(0),_(-1),_(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[_(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[_(0)]}],Ih=[{id:1,name:"Notion Template",dueDate:_(7),tasks:[{id:nl(),text:"Design layout",done:!0},{id:nl(),text:"Write docs",done:!1},{id:nl(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:_(7),tasks:[{id:nl(),text:"Script draft",done:!1},{id:nl(),text:"Record",done:!1}]}];function Ph({history:t}){let{y:l,m:e,daysInMonth:a,monthLabel:n}=Fh(),i=new Set(t||[]),o=_(0),c=Array.from({length:a},(s,m)=>m+1);return u.default.createElement("div",{className:"month-grid-wrap"},u.default.createElement("span",{className:"month-grid-label"},n),u.default.createElement("div",{className:"month-grid"},c.map(s=>{let m=$h(l,e,s);return u.default.createElement("span",{key:s,className:`month-cell ${i.has(m)?"filled":""} ${m===o?"today":""}`,style:{animationDelay:`${s*6}ms`},title:m})})))}function tv({habit:t,onToggleToday:l,onDelete:e,onSave:a}){let n=(t.history||[]).includes(_(0)),{streak:i,freezeUsed:o}=wu(t.history),c=wm(t.history),s=Math.min(100,Math.round(c/t.weeklyGoal*100)),[m,v]=(0,u.useState)(!1),[y,p]=(0,u.useState)(t.icon),[h,x]=(0,u.useState)(t.label),[b,S]=(0,u.useState)(t.weeklyGoal),f=()=>{p(t.icon),x(t.label),S(t.weeklyGoal),v(!0)},r=()=>{let d=h.trim();d&&(a(t.id,{icon:y.trim()||t.icon,label:d,weeklyGoal:Math.max(1,Math.min(7,+b||t.weeklyGoal))}),v(!1))};return m?u.default.createElement("div",{className:"vault-card"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{className:"duration-input",style:{width:44},value:y,onChange:d=>p(d.target.value),maxLength:2}),u.default.createElement("input",{className:"edit-label",style:{flex:1},value:h,onChange:d=>x(d.target.value),onKeyDown:d=>d.key==="Enter"&&r(),autoFocus:!0})),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:b,onChange:d=>S(d.target.value)}),u.default.createElement("span",{className:"edit-unit"},"x / week")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:r},"save")))):u.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${Re(t.id)}`}},u.default.createElement("div",{className:"vault-card-top"},u.default.createElement("span",{className:"vault-card-icon",style:{color:Re(t.id)}},t.icon),u.default.createElement("div",{className:"vault-card-title"},u.default.createElement("span",{className:"vault-card-label"},t.label),u.default.createElement("span",{className:"vault-card-goal"},"weekly: ",t.weeklyGoal,"x")),u.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"vault-card-del",onClick:()=>e(t.id),"aria-label":"Delete habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),u.default.createElement(Ph,{history:t.history}),u.default.createElement("div",{className:"vault-card-bottom"},u.default.createElement("div",{className:"vault-card-ring-row"},u.default.createElement(Cu,{pct:s,size:34,stroke:3.5,color:Re(t.id)}),u.default.createElement("span",{className:"vault-card-pct"},s,"% ",u.default.createElement("span",{className:"muted"},"(",c,"/",t.weeklyGoal,")"))),i>0&&u.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,o&&u.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),u.default.createElement("button",{className:`vault-check ${n?"done":""}`,onClick:()=>l(t.id)},n?"\u2713 completed today":"mark complete today"))}function lv({habits:t,setHabits:l}){let[e,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(7),[o,c]=(0,u.useState)(!1),s=()=>{let p=e.trim();if(!p){c(!0),setTimeout(()=>c(!1),420),j.error();return}l(h=>[...h,{id:nl(),icon:"\u25C6",label:p,weeklyGoal:n,history:[]}]),a(""),i(7),j.click()},m=p=>{l(h=>h.filter(x=>x.id!==p)),j.delete()},v=(p,h)=>l(x=>x.map(b=>b.id===p?{...b,...h}:b)),y=p=>{let h=_(0),x=!1;l(b=>b.map(S=>{if(S.id!==p)return S;let f=(S.history||[]).includes(h);x=!f;let r=f?S.history.filter(d=>d!==h):[...S.history||[],h];return{...S,history:r.slice(-370)}})),x?j.success():j.click()};return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"HABIT-STREAK-TRACKING")),u.default.createElement("div",{className:"vault-grid"},t.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):t.map(p=>u.default.createElement(tv,{key:p.id,habit:p,onToggleToday:y,onDelete:m,onSave:v}))),u.default.createElement("div",{className:`composer ${o?"shake":""}`},u.default.createElement("input",{type:"text",placeholder:"new habit...",value:e,onChange:p=>a(p.target.value),onKeyDown:p=>p.key==="Enter"&&s()}),u.default.createElement("button",{className:"add-btn",onClick:s,"aria-label":"Add habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(p=>u.default.createElement("button",{key:p,className:n===p?"active":"",onClick:()=>i(p)},p,"x/wk"))))}function ev({projectId:t,task:l,onToggle:e,onDelete:a,onEdit:n}){let[i,o]=(0,u.useState)(!1),[c,s]=(0,u.useState)(l.text),m=()=>{let v=c.trim();v&&n(t,l.id,v),o(!1)};return i?u.default.createElement("div",{className:"project-task-row"},u.default.createElement("input",{className:"project-task-edit",value:c,onChange:v=>s(v.target.value),onKeyDown:v=>v.key==="Enter"&&m(),onBlur:m,autoFocus:!0})):u.default.createElement("div",{className:"project-task-row"},u.default.createElement(Om,{checked:l.done,onChange:()=>e(t,l.id),color:"#5EEAD4"}),u.default.createElement("span",{className:`project-task-text ${l.done?"done":""}`,onClick:()=>o(!0)},l.text),u.default.createElement("button",{className:"del-btn",onClick:()=>a(t,l.id),"aria-label":"Delete task"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function av({project:t,onDelete:l,onAddTask:e,onToggleTask:a,onDeleteTask:n,onEditTask:i,onSave:o}){let[c,s]=(0,u.useState)(""),m=t.tasks.length,v=t.tasks.filter(M=>M.done).length,y=m?Math.round(v/m*100):0,p=Wh(t.dueDate),[h,x]=(0,u.useState)(!1),[b,S]=(0,u.useState)(t.name),[f,r]=(0,u.useState)(t.dueDate||""),d=()=>{let M=c.trim();M&&(e(t.id,M),s(""))},g=()=>{S(t.name),r(t.dueDate||""),x(!0)},N=()=>{let M=b.trim();M&&(o(t.id,{name:M,dueDate:f||null}),x(!1))};return h?u.default.createElement("div",{className:"project-card"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:b,onChange:M=>S(M.target.value),onKeyDown:M=>M.key==="Enter"&&N(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"date",className:"time-input",value:f,onChange:M=>r(M.target.value)})),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>x(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:N},"save")))):u.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${Re(t.id)}`}},u.default.createElement("div",{className:"project-card-top"},u.default.createElement("span",{className:"project-name"},t.name),u.default.createElement("div",{className:"project-card-actions"},u.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit project"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"vault-card-del",onClick:()=>l(t.id),"aria-label":"Delete project"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),p&&u.default.createElement("span",{className:`project-due ${p.overdue?"overdue":""}`},p.text),u.default.createElement("div",{className:"progress-track small"},u.default.createElement("div",{className:"progress-fill",style:{width:`${y}%`}})),u.default.createElement("span",{className:"vault-card-pct"},v,"/",m," tasks \xB7 ",y,"%"),u.default.createElement("div",{className:"project-tasks"},t.tasks.map(M=>u.default.createElement(ev,{key:M.id,projectId:t.id,task:M,onToggle:a,onDelete:n,onEdit:i}))),u.default.createElement("div",{className:"project-add-task"},u.default.createElement("input",{type:"text",placeholder:"+ add task...",value:c,onChange:M=>s(M.target.value),onKeyDown:M=>M.key==="Enter"&&d()})))}function nv({projects:t,setProjects:l}){let[e,a]=(0,u.useState)(""),[n,i]=(0,u.useState)(""),[o,c]=(0,u.useState)(!1),s=()=>{let b=e.trim();if(!b){c(!0),setTimeout(()=>c(!1),420),j.error();return}l(S=>[...S,{id:nl(),name:b,dueDate:n||null,tasks:[]}]),a(""),i(""),j.click()},m=b=>{l(S=>S.filter(f=>f.id!==b)),j.delete()},v=(b,S)=>l(f=>f.map(r=>r.id===b?{...r,...S}:r)),y=(b,S)=>{l(f=>f.map(r=>r.id===b?{...r,tasks:[...r.tasks,{id:nl(),text:S,done:!1}]}:r)),j.click()},p=(b,S)=>{l(f=>f.map(r=>r.id!==b?r:{...r,tasks:r.tasks.map(d=>d.id===S?{...d,done:!d.done}:d)})),j.success()},h=(b,S)=>{l(f=>f.map(r=>r.id!==b?r:{...r,tasks:r.tasks.filter(d=>d.id!==S)})),j.delete()},x=(b,S,f)=>l(r=>r.map(d=>d.id!==b?d:{...d,tasks:d.tasks.map(g=>g.id===S?{...g,text:f}:g)}));return u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"PROJECT-MANAGER")),u.default.createElement("div",{className:"vault-grid"},t.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no projects yet")):t.map(b=>u.default.createElement(av,{key:b.id,project:b,onDelete:m,onAddTask:y,onToggleTask:p,onDeleteTask:h,onEditTask:x,onSave:v}))),u.default.createElement("div",{className:`composer ${o?"shake":""}`},u.default.createElement("input",{type:"text",placeholder:"new project...",value:e,onChange:b=>a(b.target.value),onKeyDown:b=>b.key==="Enter"&&s()}),u.default.createElement("input",{type:"date",className:"time-input",value:n,onChange:b=>i(b.target.value)}),u.default.createElement("button",{className:"add-btn",onClick:s,"aria-label":"Add project"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function iv({vaultHabits:t,setVaultHabits:l,projects:e,setProjects:a}){return u.default.createElement("div",{className:"task-list vault-scroll"},u.default.createElement(lv,{habits:t,setHabits:l}),u.default.createElement(nv,{projects:e,setProjects:a}))}var Rl=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],bm=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Re(t){let l=typeof t=="number"?t:String(t).split("").reduce((e,a)=>e+a.charCodeAt(0),0);return bm[Math.abs(l)%bm.length]}var Wn=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Cm(t,l,e){let a=t.reduce((o,c)=>o+c.xp*(c.history?.length||0),0),n=l.reduce((o,c)=>o+c.xp*(c.history?.length||0),0),i=e.reduce((o,c)=>o+c.cost*(c.claimed?.length||0),0);return a-n-i}function uv(t,l,e){let a=l.filter(i=>i.area===t).reduce((i,o)=>i+o.xp*(o.history?.length||0),0),n=e.filter(i=>i.area===t).reduce((i,o)=>i+o.xp*(o.history?.length||0),0);return a-n}function Es(t){return 50*t*(t-1)}function ov(t){let l=Math.max(0,t),e=Math.max(1,Math.floor((50+Math.sqrt(2500+200*l))/100)),a=l-Es(e),n=Es(e+1)-Es(e);return{level:e,into:a,span:n}}function cv(t){let l=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],e=t,a="";for(let[n,i]of l)for(;e>=n;)a+=i,e-=n;return a}function sv(t){if(t<=Wn.length)return Wn[t-1];let l=t-Wn.length+1;return`${Wn[Wn.length-1]} ${cv(l)}`}var rv=[{id:1,label:"Deep Work",area:"work",xp:40,history:[_(0),_(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[_(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],fv=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],dv=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function mv({habit:t,onToggleToday:l,onDelete:e,onSave:a}){let n=(t.history||[]).includes(_(0)),{streak:i,freezeUsed:o}=wu(t.history),c=Rl.find(r=>r.key===t.area)||Rl[0],[s,m]=(0,u.useState)(!1),[v,y]=(0,u.useState)(t.label),[p,h]=(0,u.useState)(t.area),[x,b]=(0,u.useState)(t.xp),S=()=>{y(t.label),h(t.area),b(t.xp),m(!0)},f=()=>{let r=v.trim();r&&(a(t.id,{label:r,area:p,xp:Math.max(1,+x||t.xp)}),m(!1))};return s?u.default.createElement("div",{className:"quest-habit-card good editing"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:v,onChange:r=>y(r.target.value),onKeyDown:r=>r.key==="Enter"&&f(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},Rl.map(r=>u.default.createElement("button",{key:r.key,type:"button",className:`area-chip ${p===r.key?"active":""}`,style:{"--ac":r.color},onClick:()=>h(r.key)},r.label))),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:x,onChange:r=>b(r.target.value)}),u.default.createElement("span",{className:"edit-unit"},"XP")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>m(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:f},"save")))):u.default.createElement("div",{className:"quest-habit-card good"},u.default.createElement("span",{className:"area-dot",style:{background:c.color}}),u.default.createElement("div",{className:"quest-habit-main"},u.default.createElement("span",{className:"quest-habit-label"},t.label),u.default.createElement("span",{className:"quest-habit-meta"},"+",t.xp," XP \xB7 ",c.label,i>0?` \xB7 \u{1F525}${i}${o?" \u2744\uFE0F":""}`:"")),u.default.createElement("button",{className:`quest-check ${n?"done":""}`,onClick:()=>l(t.id),"aria-label":"Mark done today"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:n?0:24,transition:"stroke-dashoffset 220ms ease"}}))),u.default.createElement("button",{className:"vault-card-edit",onClick:S,"aria-label":"Edit habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"del-btn",onClick:()=>e(t.id),"aria-label":"Delete habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function pv({habit:t,onToggleToday:l,onDelete:e,onSave:a}){let n=(t.history||[]).includes(_(0)),i=Rl.find(f=>f.key===t.area)||Rl[0],o=wm(t.history),[c,s]=(0,u.useState)(!1),[m,v]=(0,u.useState)(t.label),[y,p]=(0,u.useState)(t.area),[h,x]=(0,u.useState)(t.xp),b=()=>{v(t.label),p(t.area),x(t.xp),s(!0)},S=()=>{let f=m.trim();f&&(a(t.id,{label:f,area:y,xp:Math.max(1,+h||t.xp)}),s(!1))};return c?u.default.createElement("div",{className:"quest-habit-card bad editing"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:m,onChange:f=>v(f.target.value),onKeyDown:f=>f.key==="Enter"&&S(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},Rl.map(f=>u.default.createElement("button",{key:f.key,type:"button",className:`area-chip ${y===f.key?"active":""}`,style:{"--ac":f.color},onClick:()=>p(f.key)},f.label))),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:h,onChange:f=>x(f.target.value)}),u.default.createElement("span",{className:"edit-unit"},"XP")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>s(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:S},"save")))):u.default.createElement("div",{className:"quest-habit-card bad"},u.default.createElement("span",{className:"area-dot",style:{background:i.color}}),u.default.createElement("div",{className:"quest-habit-main"},u.default.createElement("span",{className:"quest-habit-label"},t.label),u.default.createElement("span",{className:"quest-habit-meta"},"-",t.xp," XP \xB7 ",i.label," \xB7 ",o,"x this week")),u.default.createElement("button",{className:`quest-check bad-check ${n?"done":""}`,onClick:()=>l(t.id),"aria-label":"Log slip today"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),u.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"del-btn",onClick:()=>e(t.id),"aria-label":"Delete habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function hv({reward:t,canClaim:l,onClaim:e,onDelete:a,onSave:n}){let[i,o]=(0,u.useState)(!1),[c,s]=(0,u.useState)(t.label),[m,v]=(0,u.useState)(t.cost),y=()=>{s(t.label),v(t.cost),o(!0)},p=()=>{let h=c.trim();h&&(n(t.id,{label:h,cost:Math.max(1,+m||t.cost)}),o(!1))};return i?u.default.createElement("div",{className:"reward-card"},u.default.createElement("div",{className:"routine-edit"},u.default.createElement("input",{className:"edit-label",value:c,onChange:h=>s(h.target.value),onKeyDown:h=>h.key==="Enter"&&p(),autoFocus:!0}),u.default.createElement("div",{className:"edit-row"},u.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:m,onChange:h=>v(h.target.value)}),u.default.createElement("span",{className:"edit-unit"},"XP cost")),u.default.createElement("div",{className:"edit-actions"},u.default.createElement("button",{className:"edit-cancel",onClick:()=>o(!1)},"cancel"),u.default.createElement("button",{className:"edit-save",onClick:p},"save")))):u.default.createElement("div",{className:"reward-card"},u.default.createElement("div",{className:"reward-top"},u.default.createElement("span",{className:"reward-label"},t.label),u.default.createElement("div",{className:"project-card-actions"},u.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit reward"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"vault-card-del",onClick:()=>a(t.id),"aria-label":"Delete reward"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),u.default.createElement("span",{className:"reward-cost"},t.cost," XP"),u.default.createElement("button",{className:"reward-claim",disabled:!l,onClick:()=>e(t.id)},l?"claim reward":"not enough XP"),t.claimed?.length>0&&u.default.createElement("span",{className:"reward-claimed-count"},"claimed ",t.claimed.length,"x"))}function vv({goodHabits:t,setGoodHabits:l,badHabits:e,setBadHabits:a,rewards:n,setRewards:i}){let o=(0,u.useMemo)(()=>Cm(t,e,n),[t,e,n]),{level:c,into:s,span:m}=ov(o),v=Math.round(s/m*100),y=A=>{let G=_(0),ft=!1;l(st=>st.map(qt=>{if(qt.id!==A)return qt;let De=(qt.history||[]).includes(G);ft=!De;let Ja=De?qt.history.filter(T=>T!==G):[...qt.history||[],G];return{...qt,history:Ja.slice(-370)}})),ft?j.success():j.click()},p=A=>{let G=_(0),ft=!1;a(st=>st.map(qt=>{if(qt.id!==A)return qt;let De=(qt.history||[]).includes(G);ft=!De;let Ja=De?qt.history.filter(T=>T!==G):[...qt.history||[],G];return{...qt,history:Ja.slice(-370)}})),ft?j.error():j.click()},h=A=>{l(G=>G.filter(ft=>ft.id!==A)),j.delete()},x=A=>{a(G=>G.filter(ft=>ft.id!==A)),j.delete()},b=(A,G)=>l(ft=>ft.map(st=>st.id===A?{...st,...G}:st)),S=(A,G)=>a(ft=>ft.map(st=>st.id===A?{...st,...G}:st)),f=A=>{let G=_(0);i(ft=>ft.map(st=>st.id===A?{...st,claimed:[...st.claimed||[],G]}:st)),j.success()},r=A=>{i(G=>G.filter(ft=>ft.id!==A)),j.delete()},d=(A,G)=>i(ft=>ft.map(st=>st.id===A?{...st,...G}:st)),[g,N]=(0,u.useState)(""),[M,z]=(0,u.useState)("work"),[D,w]=(0,u.useState)(20),[C,B]=(0,u.useState)(""),[H,Z]=(0,u.useState)("work"),[vt,k]=(0,u.useState)(20),[P,rt]=(0,u.useState)(""),[ct,J]=(0,u.useState)(100),Et=()=>{let A=g.trim();A&&(l(G=>[...G,{id:nl(),label:A,area:M,xp:+D||10,history:[]}]),N(""),j.click())},St=()=>{let A=C.trim();A&&(a(G=>[...G,{id:nl(),label:A,area:H,xp:+vt||10,history:[]}]),B(""),j.click())},il=()=>{let A=P.trim();A&&(i(G=>[...G,{id:nl(),label:A,cost:+ct||50,claimed:[]}]),rt(""),j.click())},Ie=Rl.map(A=>({key:A.key,label:A.label,color:A.color,value:Math.max(0,uv(A.key,t,e))})),kl=t.reduce((A,G)=>A+G.xp*(G.history?.length||0),0),Bl=e.reduce((A,G)=>A+G.xp*(G.history?.length||0),0);return u.default.createElement("div",{className:"task-list vault-scroll"},u.default.createElement("div",{className:"hero-card hero-card-viz"},u.default.createElement("div",{className:"hero-viz-row"},u.default.createElement(Cu,{pct:v,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${c}`,sublabel:sv(c)}),u.default.createElement("div",{className:"hero-viz-stats"},u.default.createElement("span",{className:"hero-xp-total"},u.default.createElement(xl,{value:o})," ",u.default.createElement("small",null,"XP")),u.default.createElement("span",{className:"hero-xp-sub"},s,"/",m," to next level"),u.default.createElement("div",{className:"hero-xp-split"},u.default.createElement("span",{className:"hero-xp-earned"},"+",u.default.createElement(xl,{value:kl})),u.default.createElement("span",{className:"hero-xp-lost"},"\u2212",u.default.createElement(xl,{value:Bl})))))),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"LIFE-AREAS")),u.default.createElement("div",{className:"radar-card"},u.default.createElement(Xh,{axes:Ie,size:230})),(kl>0||Bl>0)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"XP SOURCE")),u.default.createElement("div",{className:"donut-card"},u.default.createElement(Bm,{size:120,stroke:16,centerLabel:o,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:kl,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Bl,color:"#F0576B"}]}),u.default.createElement("div",{className:"donut-legend"},u.default.createElement("div",{className:"donut-legend-row"},u.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),u.default.createElement("span",null,"Earned from good habits"),u.default.createElement("span",{className:"donut-legend-val"},u.default.createElement(xl,{value:kl}))),u.default.createElement("div",{className:"donut-legend-row"},u.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),u.default.createElement("span",null,"Lost to bad habits"),u.default.createElement("span",{className:"donut-legend-val"},u.default.createElement(xl,{value:Bl})))))),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"GOOD-HABITS")),u.default.createElement("div",{className:"quest-habit-list"},t.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no good habits yet")):t.map(A=>u.default.createElement(mv,{key:A.id,habit:A,onToggleToday:y,onDelete:h,onSave:b}))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{type:"text",placeholder:"new good habit...",value:g,onChange:A=>N(A.target.value),onKeyDown:A=>A.key==="Enter"&&Et()}),u.default.createElement("button",{className:"add-btn",onClick:Et,"aria-label":"Add good habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"duration-chips"},Rl.map(A=>u.default.createElement("button",{key:A.key,className:M===A.key?"active":"",onClick:()=>z(A.key)},A.label)),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:D,onChange:A=>w(+A.target.value||5)})),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"BAD-HABITS")),u.default.createElement("div",{className:"quest-habit-list"},e.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no bad habits tracked")):e.map(A=>u.default.createElement(pv,{key:A.id,habit:A,onToggleToday:p,onDelete:x,onSave:S}))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:C,onChange:A=>B(A.target.value),onKeyDown:A=>A.key==="Enter"&&St()}),u.default.createElement("button",{className:"add-btn",onClick:St,"aria-label":"Add bad habit"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"duration-chips"},Rl.map(A=>u.default.createElement("button",{key:A.key,className:H===A.key?"active":"",onClick:()=>Z(A.key)},A.label)),u.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:vt,onChange:A=>k(+A.target.value||5)})),u.default.createElement("div",{className:"section-header"},u.default.createElement("span",null,"REWARD-CENTER")),u.default.createElement("div",{className:"vault-grid"},n.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(A=>u.default.createElement(hv,{key:A.id,reward:A,canClaim:o>=A.cost,onClaim:f,onDelete:r,onSave:d}))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{type:"text",placeholder:"new reward...",value:P,onChange:A=>rt(A.target.value),onKeyDown:A=>A.key==="Enter"&&il()}),u.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:ct,onChange:A=>J(+A.target.value||50)}),u.default.createElement("button",{className:"add-btn",onClick:il,"aria-label":"Add reward"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var yv=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function gv(t=1e3*30){let[l,e]=(0,u.useState)(Date.now());return(0,u.useEffect)(()=>{let a=setInterval(()=>e(Date.now()),t);return()=>clearInterval(a)},[t]),l}function bv(t,l){let e=Math.floor((l-t)/1e3);if(e<60)return"just now";let a=Math.floor(e/60);if(a<60)return`${a}m ago`;let n=Math.floor(a/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function Om({checked:t,onChange:l,color:e}){return u.default.createElement("button",{onClick:l,"aria-checked":t,role:"checkbox",className:"checkbox-btn",style:{"--c":e}},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:t?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function xv({task:t,now:l,onToggle:e,onDelete:a,index:n}){let[i,o]=(0,u.useState)(!1),c=Bu.find(m=>m.key===t.priority)||Bu[0],s=()=>{o(!0),setTimeout(()=>a(t.id),220)};return u.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${n*35}ms`}},u.default.createElement(Om,{checked:t.done,onChange:()=>e(t.id),color:c.color}),u.default.createElement("div",{className:"task-main"},u.default.createElement("span",{className:`task-text ${t.done?"done":""}`},t.text),u.default.createElement("span",{className:"task-meta"},u.default.createElement("span",{className:"prio-dot",style:{background:c.color}}),u.default.createElement("span",{className:"prio-label"},c.label),u.default.createElement("span",{className:"dot-sep"},"\xB7"),u.default.createElement("span",null,bv(t.createdAt,l)))),u.default.createElement("button",{className:"del-btn",onClick:s,"aria-label":"Delete task"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var xm="tasksh.tasks.v1",Em="tasksh.routines.v1",Sm="tasksh.vaulthabits.v1",Am="tasksh.projects.v1",Nm="tasksh.goodhabits.v1",zm="tasksh.badhabits.v1",Tm="tasksh.rewards.v1";function $e(t,l){try{let e=localStorage.getItem(t);return e?JSON.parse(e):l}catch{return l}}function Ev(t){typeof t=="number"&&Number.isFinite(t)&&t>ku&&(ku=t)}function Sv(t){let l=0,e=a=>{typeof a=="number"&&Number.isFinite(a)&&a>l&&(l=a)};return(t.tasks||[]).forEach(a=>e(a?.id)),(t.routines||[]).forEach(a=>e(a?.id)),(t.vaultHabits||[]).forEach(a=>e(a?.id)),(t.goodHabits||[]).forEach(a=>e(a?.id)),(t.badHabits||[]).forEach(a=>e(a?.id)),(t.rewards||[]).forEach(a=>e(a?.id)),(t.projects||[]).forEach(a=>{e(a?.id),(a?.tasks||[]).forEach(n=>e(n?.id))}),l}function Av({routines:t,setRoutines:l,tasks:e,setTasks:a,vaultHabits:n,goodHabits:i,rewards:o,setRewards:c,totalXP:s,setTab:m}){let v=Ss(),y=v.hour*60+v.minute,{sorted:p,currentId:h,nextId:x}=As(t,y),b=p.find(B=>B.id===h),S=p.find(B=>B.id===x),f=_(0),r=B=>{let H=!1;l(Z=>Z.map(vt=>{if(vt.id!==B)return vt;let k=(vt.history||[]).includes(f);H=!k;let P=k?vt.history.filter(rt=>rt!==f):[...vt.history||[],f];return{...vt,history:P.slice(-60)}})),H?j.success():j.click()},d=(0,u.useMemo)(()=>{let B={high:0,mid:1,low:2};return[...e].filter(H=>!H.done).sort((H,Z)=>B[H.priority]-B[Z.priority])},[e]),g=B=>{a(H=>H.map(Z=>Z.id===B?{...Z,done:!Z.done}:Z)),j.success()},N=(0,u.useMemo)(()=>o.filter(B=>s>=B.cost),[o,s]),M=B=>{c(H=>H.map(Z=>Z.id===B?{...Z,claimed:[...Z.claimed||[],f]}:Z)),j.success()},z=(0,u.useMemo)(()=>{let B={},H=Z=>{(Z||[]).forEach(vt=>{B[vt]=(B[vt]||0)+1})};return t.forEach(Z=>H(Z.history)),n.forEach(Z=>H(Z.history)),i.forEach(Z=>H(Z.history)),B},[t,n,i]),D=b||S,w=!!b,C=D?(D.history||[]).includes(f):!1;return u.default.createElement("div",{className:"task-list today-view"},u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,w?"HAPPENING NOW":"NEXT UP")),D?u.default.createElement("div",{className:"today-card"},u.default.createElement("div",{className:"today-card-row"},u.default.createElement("span",{className:"today-card-time"},Me(Dl(D.time))),u.default.createElement("span",{className:"today-card-label"},D.label)),u.default.createElement("div",{className:"today-card-sub"},w?`in progress \xB7 ${Va(D.duration)}`:`in ${Math.max(0,Dl(D.time)-y)}m \xB7 ${Va(D.duration)}`),u.default.createElement("button",{className:`today-mark-btn ${C?"done":""}`,onClick:()=>r(D.id)},C?"\u2713 completed today":"mark complete")):u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"no routines set up yet")),u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,"ACTIVITY")),u.default.createElement(Lh,{counts:z,weeksBack:12}),u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,"OPEN TASKS"),d.length>0&&u.default.createElement("button",{className:"today-view-all",onClick:()=>m("tasks")},"view all in tasks \u2192")),d.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):u.default.createElement("div",{className:"today-list"},d.slice(0,5).map((B,H)=>u.default.createElement("div",{key:B.id,className:"today-task-row",style:{animationDelay:`${H*35}ms`}},u.default.createElement("button",{className:"today-task-check",onClick:()=>g(B.id),"aria-label":"Complete task"}),u.default.createElement("span",{className:"today-task-text"},B.text),u.default.createElement("span",{className:`today-prio-dot ${B.priority}`}))),d.length>5&&u.default.createElement("button",{className:"today-more",onClick:()=>m("tasks")},"+",d.length-5," more")),u.default.createElement("div",{className:"filters today-section-header"},u.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),u.default.createElement("span",{className:"today-xp-total"},u.default.createElement(xl,{value:s})," XP")),N.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):u.default.createElement("div",{className:"today-list"},N.map((B,H)=>u.default.createElement("div",{key:B.id,className:"today-task-row",style:{animationDelay:`${H*35}ms`}},u.default.createElement("span",{className:"today-task-text"},B.label),u.default.createElement("span",{className:"today-reward-cost"},B.cost," XP"),u.default.createElement("button",{className:"today-claim-btn",onClick:()=>M(B.id)},"claim")))))}function Nv(){let[t,l]=(0,u.useState)("today"),[e,a]=Hh(),n=T=>{T!==t&&j.whoosh(),l(T)},[i,o]=(0,u.useState)(()=>$e(xm,yv)),[c,s]=(0,u.useState)(()=>$e(Em,Qh)),[m,v]=(0,u.useState)(()=>$e(Sm,Rh)),[y,p]=(0,u.useState)(()=>$e(Am,Ih)),[h,x]=(0,u.useState)(()=>$e(Nm,rv)),[b,S]=(0,u.useState)(()=>$e(zm,fv)),[f,r]=(0,u.useState)(()=>$e(Tm,dv)),d=(0,u.useMemo)(()=>Cm(h,b,f),[h,b,f]),[g,N]=(0,u.useState)(""),[M,z]=(0,u.useState)("mid"),[D,w]=(0,u.useState)("all"),C=(0,u.useRef)(null),B=(0,u.useRef)(null),[H,Z]=(0,u.useState)(null),vt=gv(),k=(T,Y)=>{Z({type:T,text:Y})};(0,u.useEffect)(()=>{if(!H)return;let T=setTimeout(()=>Z(null),3200);return()=>clearTimeout(T)},[H]);let P=()=>{try{let T={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:c,vaultHabits:m,projects:y,goodHabits:h,badHabits:b,rewards:f}},Y=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),zt=URL.createObjectURL(Y),Tt=_(0),Kt=document.createElement("a");Kt.href=zt,Kt.download=`tasks-sh-backup-${Tt}.json`,document.body.appendChild(Kt),Kt.click(),Kt.remove(),URL.revokeObjectURL(zt),k("ok","backup exported")}catch{k("err","export failed")}},rt=()=>B.current?.click(),ct=T=>{let Y=T.target.files&&T.target.files[0];if(T.target.value="",!Y)return;let zt=new FileReader;zt.onerror=()=>k("err","couldn't read that file"),zt.onload=()=>{try{let Tt=JSON.parse(String(zt.result)),Kt=Tt&&typeof Tt=="object"&&Tt.data?Tt.data:Tt;if(!Kt||typeof Kt!="object")throw new Error("bad shape");let Ns={tasks:o,routines:s,vaultHabits:v,projects:p,goodHabits:x,badHabits:S,rewards:r},Rn=0;for(let Ou of Object.keys(Ns))Array.isArray(Kt[Ou])&&(Ns[Ou](Kt[Ou]),Rn++);if(Rn===0){k("err","no recognizable data in that file");return}Ev(Sv(Kt)),k("ok",`imported ${Rn} data set${Rn===1?"":"s"}`)}catch{k("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},zt.readAsText(Y)},J=Ss(),Et=J.hour*60+J.minute,{currentId:St,sorted:il}=As(c,Et),[Ie,kl]=(0,u.useState)(null),Bl=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{if(Bl.current===void 0){Bl.current=St;return}if(St!==Bl.current){let T=il.find(Y=>Y.id===St);T&&kl({id:St,label:T.label,time:T.time}),Bl.current=St}},[St,il]),(0,u.useEffect)(()=>{if(!Ie)return;let T=setTimeout(()=>kl(null),6e3);return()=>clearTimeout(T)},[Ie]),(0,u.useEffect)(()=>{try{localStorage.setItem(xm,JSON.stringify(i))}catch{}},[i]),(0,u.useEffect)(()=>{try{localStorage.setItem(Em,JSON.stringify(c))}catch{}},[c]),(0,u.useEffect)(()=>{try{localStorage.setItem(Sm,JSON.stringify(m))}catch{}},[m]),(0,u.useEffect)(()=>{try{localStorage.setItem(Am,JSON.stringify(y))}catch{}},[y]),(0,u.useEffect)(()=>{try{localStorage.setItem(Nm,JSON.stringify(h))}catch{}},[h]),(0,u.useEffect)(()=>{try{localStorage.setItem(zm,JSON.stringify(b))}catch{}},[b]),(0,u.useEffect)(()=>{try{localStorage.setItem(Tm,JSON.stringify(f))}catch{}},[f]);let A=(0,u.useMemo)(()=>{let T=i.length,Y=i.filter(Kt=>Kt.done).length,zt=T-Y,Tt=T===0?0:Math.round(Y/T*100);return{total:T,done:Y,pending:zt,pct:Tt}},[i]),G=(0,u.useMemo)(()=>{let T=i.filter(Y=>!Y.done);return Bu.map(Y=>({key:Y.key,label:Y.label,color:Y.color,value:T.filter(zt=>zt.priority===Y.key).length}))},[i]),ft=(0,u.useMemo)(()=>{let T=i;return D==="active"&&(T=T.filter(Y=>!Y.done)),D==="done"&&(T=T.filter(Y=>Y.done)),[...T].sort((Y,zt)=>{if(Y.done!==zt.done)return Y.done?1:-1;let Tt={high:0,mid:1,low:2};return Tt[Y.priority]-Tt[zt.priority]})},[i,D]),st=()=>{let T=g.trim();T&&(o(Y=>[...Y,{id:nl(),text:T,done:!1,priority:M,createdAt:Date.now()}]),N(""),C.current?.focus(),j.click())},qt=T=>{let Y=!1;o(zt=>zt.map(Tt=>Tt.id!==T?Tt:(Y=!Tt.done,{...Tt,done:!Tt.done}))),Y?j.success():j.click()},De=T=>{o(Y=>Y.filter(zt=>zt.id!==T)),j.delete()},Ja=()=>{o(T=>T.filter(Y=>!Y.done)),j.whoosh()};return u.default.createElement("div",{className:"app-root"},u.default.createElement("style",null,`
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
      `),u.default.createElement("div",{className:"panel"},Ie&&u.default.createElement("div",{className:"quest-banner",onClick:()=>kl(null)},u.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),u.default.createElement("span",{className:"quest-banner-text"},u.default.createElement("b",null,"Now:")," ",Ie.label),u.default.createElement("button",{className:"quest-banner-close",onClick:T=>{T.stopPropagation(),kl(null)},"aria-label":"Dismiss"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},u.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),u.default.createElement("div",{className:"titlebar"},u.default.createElement("div",{className:"titlebar-left"},u.default.createElement("div",{className:"dots"},u.default.createElement("span",{className:"dot red"}),u.default.createElement("span",{className:"dot amber"}),u.default.createElement("span",{className:"dot green"})),u.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),u.default.createElement("div",{className:"titlebar-right"},u.default.createElement("input",{type:"file",accept:"application/json",ref:B,onChange:ct,style:{display:"none"}}),u.default.createElement("button",{className:"titlebar-icon-btn",onClick:a,"aria-label":e?"Mute sound":"Unmute sound",title:e?"Mute sound":"Unmute sound"},e?u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),u.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),u.default.createElement("button",{className:"titlebar-icon-btn",onClick:rt,"aria-label":"Import backup",title:"Import backup"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("button",{className:"titlebar-icon-btn",onClick:P,"aria-label":"Export backup",title:"Export backup"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},u.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),u.default.createElement("span",{className:"clock"},new Date(vt).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),H&&u.default.createElement("div",{className:`data-toast ${H.type}`},H.text),u.default.createElement("div",{className:"tabs"},u.default.createElement("button",{className:t==="today"?"active":"",onClick:()=>n("today")},"today"),u.default.createElement("button",{className:t==="tasks"?"active":"",onClick:()=>n("tasks")},"tasks"),u.default.createElement("button",{className:t==="routines"?"active":"",onClick:()=>n("routines")},"routines"),u.default.createElement("button",{className:t==="vault"?"active":"",onClick:()=>n("vault")},"vault"),u.default.createElement("button",{className:t==="quest"?"active":"",onClick:()=>n("quest")},"quest")),u.default.createElement("div",{key:t,className:"tab-content"},t==="today"?u.default.createElement(Av,{routines:c,setRoutines:s,tasks:i,setTasks:o,vaultHabits:m,goodHabits:h,rewards:f,setRewards:r,totalXP:d,setTab:n}):t==="tasks"?u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{className:"stats-bar stats-bar-viz"},u.default.createElement(Cu,{pct:A.pct,size:64,stroke:5.5,label:`${A.pct}%`}),u.default.createElement("div",{className:"stats-row-viz"},u.default.createElement("span",null,u.default.createElement("b",null,u.default.createElement(xl,{value:A.total}))," total"),u.default.createElement("span",null,u.default.createElement("b",null,u.default.createElement(xl,{value:A.pending}))," pending"),u.default.createElement("span",null,u.default.createElement("b",null,u.default.createElement(xl,{value:A.done}))," done"))),A.pending>0&&u.default.createElement("div",{className:"donut-card"},u.default.createElement(Bm,{size:96,stroke:14,centerLabel:A.pending,centerSublabel:"open",segments:G.map(T=>({key:T.key,value:T.value,color:T.color}))}),u.default.createElement("div",{className:"donut-legend"},G.map(T=>u.default.createElement("div",{className:"donut-legend-row",key:T.key},u.default.createElement("span",{className:"donut-legend-dot",style:{background:T.color}}),u.default.createElement("span",null,T.label," priority"),u.default.createElement("span",{className:"donut-legend-val"},T.value))))),u.default.createElement("div",{className:"composer"},u.default.createElement("input",{ref:C,type:"text",placeholder:"add a task, press enter...",value:g,onChange:T=>N(T.target.value),onKeyDown:T=>T.key==="Enter"&&st()}),u.default.createElement("div",{className:"prio-select"},Bu.map(T=>u.default.createElement("button",{key:T.key,className:M===T.key?"active":"",style:{"--pc":T.color},onClick:()=>z(T.key)},T.label))),u.default.createElement("button",{className:"add-btn",onClick:st,"aria-label":"Add task"},u.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},u.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),u.default.createElement("div",{className:"filters"},["all","active","done"].map(T=>u.default.createElement("button",{key:T,className:D===T?"active":"",onClick:()=>w(T)},T)),u.default.createElement("span",{className:"spacer"}),A.done>0&&u.default.createElement("button",{className:"clear-btn",onClick:Ja},"clear done")),u.default.createElement("div",{className:"task-list"},ft.length===0?u.default.createElement("div",{className:"empty-state"},u.default.createElement("div",{className:"glyph"},"{ }"),u.default.createElement("div",{className:"msg"},D==="done"?"nothing completed yet":"queue's empty \u2014 add something")):ft.map((T,Y)=>u.default.createElement(xv,{key:T.id,task:T,now:vt,index:Y,onToggle:qt,onDelete:De})))):t==="routines"?u.default.createElement(Kh,{routines:c,setRoutines:s}):t==="vault"?u.default.createElement(iv,{vaultHabits:m,setVaultHabits:v,projects:y,setProjects:p}):u.default.createElement(vv,{goodHabits:h,setGoodHabits:x,badHabits:b,setBadHabits:S,rewards:f,setRewards:r}))))}var zv=Mm.default.createRoot(document.getElementById("root"));zv.render(u.default.createElement(Nv));})();
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
