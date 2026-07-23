(()=>{var _m=Object.create;var zs=Object.defineProperty;var Um=Object.getOwnPropertyDescriptor;var qm=Object.getOwnPropertyNames;var Hm=Object.getPrototypeOf,Ym=Object.prototype.hasOwnProperty;var $l=(t,l)=>()=>(l||t((l={exports:{}}).exports,l),l.exports);var Xm=(t,l,a,e)=>{if(l&&typeof l=="object"||typeof l=="function")for(let n of qm(l))!Ym.call(t,n)&&n!==a&&zs(t,n,{get:()=>l[n],enumerable:!(e=Um(l,n))||e.enumerable});return t};var Ts=(t,l,a)=>(a=t!=null?_m(Hm(t)):{},Xm(l||!t||!t.__esModule?zs(a,"default",{value:t,enumerable:!0}):a,t));var Hs=$l(U=>{"use strict";var qu=Symbol.for("react.transitional.element"),jm=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),Gm=Symbol.for("react.strict_mode"),Qm=Symbol.for("react.profiler"),Zm=Symbol.for("react.consumer"),Vm=Symbol.for("react.context"),Jm=Symbol.for("react.forward_ref"),Km=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),Os=Symbol.for("react.lazy"),$m=Symbol.for("react.activity"),Ms=Symbol.iterator;function Wm(t){return t===null||typeof t!="object"?null:(t=Ms&&t[Ms]||t["@@iterator"],typeof t=="function"?t:null)}var Cs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ws=Object.assign,_s={};function Ia(t,l,a){this.props=t,this.context=l,this.refs=_s,this.updater=a||Cs}Ia.prototype.isReactComponent={};Ia.prototype.setState=function(t,l){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,l,"setState")};Ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Us(){}Us.prototype=Ia.prototype;function Hu(t,l,a){this.props=t,this.context=l,this.refs=_s,this.updater=a||Cs}var Yu=Hu.prototype=new Us;Yu.constructor=Hu;ws(Yu,Ia.prototype);Yu.isPureReactComponent=!0;var Ds=Array.isArray;function Uu(){}var tt={H:null,A:null,T:null,S:null},qs=Object.prototype.hasOwnProperty;function Xu(t,l,a){var e=a.ref;return{$$typeof:qu,type:t,key:l,ref:e!==void 0?e:null,props:a}}function Rm(t,l){return Xu(t.type,l,t.props)}function ju(t){return typeof t=="object"&&t!==null&&t.$$typeof===qu}function Im(t){var l={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return l[a]})}var ks=/\/+/g;function _u(t,l){return typeof t=="object"&&t!==null&&t.key!=null?Im(""+t.key):l.toString(36)}function Pm(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Uu,Uu):(t.status="pending",t.then(function(l){t.status==="pending"&&(t.status="fulfilled",t.value=l)},function(l){t.status==="pending"&&(t.status="rejected",t.reason=l)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function Ra(t,l,a,e,n){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(i){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case qu:case jm:u=!0;break;case Os:return u=t._init,Ra(u(t._payload),l,a,e,n)}}if(u)return n=n(t),u=e===""?"."+_u(t,0):e,Ds(n)?(a="",u!=null&&(a=u.replace(ks,"$&/")+"/"),Ra(n,l,a,"",function(d){return d})):n!=null&&(ju(n)&&(n=Rm(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(ks,"$&/")+"/")+u)),l.push(n)),1;u=0;var c=e===""?".":e+":";if(Ds(t))for(var s=0;s<t.length;s++)e=t[s],i=c+_u(e,s),u+=Ra(e,l,a,i,n);else if(s=Wm(t),typeof s=="function")for(t=s.call(t),s=0;!(e=t.next()).done;)e=e.value,i=c+_u(e,s++),u+=Ra(e,l,a,i,n);else if(i==="object"){if(typeof t.then=="function")return Ra(Pm(t),l,a,e,n);throw l=String(t),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.")}return u}function In(t,l,a){if(t==null)return t;var e=[],n=0;return Ra(t,e,"","",function(i){return l.call(a,i,n++)}),e}function tp(t){if(t._status===-1){var l=t._result;l=l(),l.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=l)}if(t._status===1)return t._result.default;throw t._result}var Bs=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},lp={map:In,forEach:function(t,l,a){In(t,function(){l.apply(this,arguments)},a)},count:function(t){var l=0;return In(t,function(){l++}),l},toArray:function(t){return In(t,function(l){return l})||[]},only:function(t){if(!ju(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=$m;U.Children=lp;U.Component=Ia;U.Fragment=Lm;U.Profiler=Qm;U.PureComponent=Hu;U.StrictMode=Gm;U.Suspense=Km;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=tt;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return tt.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,l,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=ws({},t.props),n=t.key;if(l!=null)for(i in l.key!==void 0&&(n=""+l.key),l)!qs.call(l,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&l.ref===void 0||(e[i]=l[i]);var i=arguments.length-2;if(i===1)e.children=a;else if(1<i){for(var u=Array(i),c=0;c<i;c++)u[c]=arguments[c+2];e.children=u}return Xu(t.type,n,e)};U.createContext=function(t){return t={$$typeof:Vm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:Zm,_context:t},t};U.createElement=function(t,l,a){var e,n={},i=null;if(l!=null)for(e in l.key!==void 0&&(i=""+l.key),l)qs.call(l,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(n[e]=l[e]);var u=arguments.length-2;if(u===1)n.children=a;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];n.children=c}if(t&&t.defaultProps)for(e in u=t.defaultProps,u)n[e]===void 0&&(n[e]=u[e]);return Xu(t,i,n)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Jm,render:t}};U.isValidElement=ju;U.lazy=function(t){return{$$typeof:Os,_payload:{_status:-1,_result:t},_init:tp}};U.memo=function(t,l){return{$$typeof:Fm,type:t,compare:l===void 0?null:l}};U.startTransition=function(t){var l=tt.T,a={};tt.T=a;try{var e=t(),n=tt.S;n!==null&&n(a,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(Uu,Bs)}catch(i){Bs(i)}finally{l!==null&&a.types!==null&&(l.types=a.types),tt.T=l}};U.unstable_useCacheRefresh=function(){return tt.H.useCacheRefresh()};U.use=function(t){return tt.H.use(t)};U.useActionState=function(t,l,a){return tt.H.useActionState(t,l,a)};U.useCallback=function(t,l){return tt.H.useCallback(t,l)};U.useContext=function(t){return tt.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,l){return tt.H.useDeferredValue(t,l)};U.useEffect=function(t,l){return tt.H.useEffect(t,l)};U.useEffectEvent=function(t){return tt.H.useEffectEvent(t)};U.useId=function(){return tt.H.useId()};U.useImperativeHandle=function(t,l,a){return tt.H.useImperativeHandle(t,l,a)};U.useInsertionEffect=function(t,l){return tt.H.useInsertionEffect(t,l)};U.useLayoutEffect=function(t,l){return tt.H.useLayoutEffect(t,l)};U.useMemo=function(t,l){return tt.H.useMemo(t,l)};U.useOptimistic=function(t,l){return tt.H.useOptimistic(t,l)};U.useReducer=function(t,l,a){return tt.H.useReducer(t,l,a)};U.useRef=function(t){return tt.H.useRef(t)};U.useState=function(t){return tt.H.useState(t)};U.useSyncExternalStore=function(t,l,a){return tt.H.useSyncExternalStore(t,l,a)};U.useTransition=function(){return tt.H.useTransition()};U.version="19.2.5"});var Pn=$l((Mv,Ys)=>{"use strict";Ys.exports=Hs()});var Fs=$l(nt=>{"use strict";function Zu(t,l){var a=t.length;t.push(l);t:for(;0<a;){var e=a-1>>>1,n=t[e];if(0<ti(n,l))t[e]=l,t[a]=n,a=e;else break t}}function yl(t){return t.length===0?null:t[0]}function ai(t){if(t.length===0)return null;var l=t[0],a=t.pop();if(a!==l){t[0]=a;t:for(var e=0,n=t.length,i=n>>>1;e<i;){var u=2*(e+1)-1,c=t[u],s=u+1,d=t[s];if(0>ti(c,a))s<n&&0>ti(d,c)?(t[e]=d,t[s]=a,e=s):(t[e]=c,t[u]=a,e=u);else if(s<n&&0>ti(d,a))t[e]=d,t[s]=a,e=s;else break t}}return l}function ti(t,l){var a=t.sortIndex-l.sortIndex;return a!==0?a:t.id-l.id}nt.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(Xs=performance,nt.unstable_now=function(){return Xs.now()}):(Lu=Date,js=Lu.now(),nt.unstable_now=function(){return Lu.now()-js});var Xs,Lu,js,Ml=[],Wl=[],ap=1,ll=null,Bt=3,Vu=!1,Je=!1,Ke=!1,Ju=!1,Qs=typeof setTimeout=="function"?setTimeout:null,Zs=typeof clearTimeout=="function"?clearTimeout:null,Ls=typeof setImmediate<"u"?setImmediate:null;function li(t){for(var l=yl(Wl);l!==null;){if(l.callback===null)ai(Wl);else if(l.startTime<=t)ai(Wl),l.sortIndex=l.expirationTime,Zu(Ml,l);else break;l=yl(Wl)}}function Ku(t){if(Ke=!1,li(t),!Je)if(yl(Ml)!==null)Je=!0,te||(te=!0,Pa());else{var l=yl(Wl);l!==null&&Fu(Ku,l.startTime-t)}}var te=!1,Fe=-1,Vs=5,Js=-1;function Ks(){return Ju?!0:!(nt.unstable_now()-Js<Vs)}function Gu(){if(Ju=!1,te){var t=nt.unstable_now();Js=t;var l=!0;try{t:{Je=!1,Ke&&(Ke=!1,Zs(Fe),Fe=-1),Vu=!0;var a=Bt;try{l:{for(li(t),ll=yl(Ml);ll!==null&&!(ll.expirationTime>t&&Ks());){var e=ll.callback;if(typeof e=="function"){ll.callback=null,Bt=ll.priorityLevel;var n=e(ll.expirationTime<=t);if(t=nt.unstable_now(),typeof n=="function"){ll.callback=n,li(t),l=!0;break l}ll===yl(Ml)&&ai(Ml),li(t)}else ai(Ml);ll=yl(Ml)}if(ll!==null)l=!0;else{var i=yl(Wl);i!==null&&Fu(Ku,i.startTime-t),l=!1}}break t}finally{ll=null,Bt=a,Vu=!1}l=void 0}}finally{l?Pa():te=!1}}}var Pa;typeof Ls=="function"?Pa=function(){Ls(Gu)}:typeof MessageChannel<"u"?(Qu=new MessageChannel,Gs=Qu.port2,Qu.port1.onmessage=Gu,Pa=function(){Gs.postMessage(null)}):Pa=function(){Qs(Gu,0)};var Qu,Gs;function Fu(t,l){Fe=Qs(function(){t(nt.unstable_now())},l)}nt.unstable_IdlePriority=5;nt.unstable_ImmediatePriority=1;nt.unstable_LowPriority=4;nt.unstable_NormalPriority=3;nt.unstable_Profiling=null;nt.unstable_UserBlockingPriority=2;nt.unstable_cancelCallback=function(t){t.callback=null};nt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Vs=0<t?Math.floor(1e3/t):5};nt.unstable_getCurrentPriorityLevel=function(){return Bt};nt.unstable_next=function(t){switch(Bt){case 1:case 2:case 3:var l=3;break;default:l=Bt}var a=Bt;Bt=l;try{return t()}finally{Bt=a}};nt.unstable_requestPaint=function(){Ju=!0};nt.unstable_runWithPriority=function(t,l){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Bt;Bt=t;try{return l()}finally{Bt=a}};nt.unstable_scheduleCallback=function(t,l,a){var e=nt.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?e+a:e):a=e,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:ap++,callback:l,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>e?(t.sortIndex=a,Zu(Wl,t),yl(Ml)===null&&t===yl(Wl)&&(Ke?(Zs(Fe),Fe=-1):Ke=!0,Fu(Ku,a-e))):(t.sortIndex=n,Zu(Ml,t),Je||Vu||(Je=!0,te||(te=!0,Pa()))),t};nt.unstable_shouldYield=Ks;nt.unstable_wrapCallback=function(t){var l=Bt;return function(){var a=Bt;Bt=l;try{return t.apply(this,arguments)}finally{Bt=a}}}});var Ws=$l((kv,$s)=>{"use strict";$s.exports=Fs()});var Is=$l(wt=>{"use strict";var ep=Pn();function Rs(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Rl(){}var Ct={d:{f:Rl,r:function(){throw Error(Rs(522))},D:Rl,C:Rl,L:Rl,m:Rl,X:Rl,S:Rl,M:Rl},p:0,findDOMNode:null},np=Symbol.for("react.portal");function ip(t,l,a){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:np,key:e==null?null:""+e,children:t,containerInfo:l,implementation:a}}var $e=ep.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ei(t,l){if(t==="font")return"";if(typeof l=="string")return l==="use-credentials"?l:""}wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Ct;wt.createPortal=function(t,l){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)throw Error(Rs(299));return ip(t,l,null,a)};wt.flushSync=function(t){var l=$e.T,a=Ct.p;try{if($e.T=null,Ct.p=2,t)return t()}finally{$e.T=l,Ct.p=a,Ct.d.f()}};wt.preconnect=function(t,l){typeof t=="string"&&(l?(l=l.crossOrigin,l=typeof l=="string"?l==="use-credentials"?l:"":void 0):l=null,Ct.d.C(t,l))};wt.prefetchDNS=function(t){typeof t=="string"&&Ct.d.D(t)};wt.preinit=function(t,l){if(typeof t=="string"&&l&&typeof l.as=="string"){var a=l.as,e=ei(a,l.crossOrigin),n=typeof l.integrity=="string"?l.integrity:void 0,i=typeof l.fetchPriority=="string"?l.fetchPriority:void 0;a==="style"?Ct.d.S(t,typeof l.precedence=="string"?l.precedence:void 0,{crossOrigin:e,integrity:n,fetchPriority:i}):a==="script"&&Ct.d.X(t,{crossOrigin:e,integrity:n,fetchPriority:i,nonce:typeof l.nonce=="string"?l.nonce:void 0})}};wt.preinitModule=function(t,l){if(typeof t=="string")if(typeof l=="object"&&l!==null){if(l.as==null||l.as==="script"){var a=ei(l.as,l.crossOrigin);Ct.d.M(t,{crossOrigin:a,integrity:typeof l.integrity=="string"?l.integrity:void 0,nonce:typeof l.nonce=="string"?l.nonce:void 0})}}else l==null&&Ct.d.M(t)};wt.preload=function(t,l){if(typeof t=="string"&&typeof l=="object"&&l!==null&&typeof l.as=="string"){var a=l.as,e=ei(a,l.crossOrigin);Ct.d.L(t,a,{crossOrigin:e,integrity:typeof l.integrity=="string"?l.integrity:void 0,nonce:typeof l.nonce=="string"?l.nonce:void 0,type:typeof l.type=="string"?l.type:void 0,fetchPriority:typeof l.fetchPriority=="string"?l.fetchPriority:void 0,referrerPolicy:typeof l.referrerPolicy=="string"?l.referrerPolicy:void 0,imageSrcSet:typeof l.imageSrcSet=="string"?l.imageSrcSet:void 0,imageSizes:typeof l.imageSizes=="string"?l.imageSizes:void 0,media:typeof l.media=="string"?l.media:void 0})}};wt.preloadModule=function(t,l){if(typeof t=="string")if(l){var a=ei(l.as,l.crossOrigin);Ct.d.m(t,{as:typeof l.as=="string"&&l.as!=="script"?l.as:void 0,crossOrigin:a,integrity:typeof l.integrity=="string"?l.integrity:void 0})}else Ct.d.m(t)};wt.requestFormReset=function(t){Ct.d.r(t)};wt.unstable_batchedUpdates=function(t,l){return t(l)};wt.useFormState=function(t,l,a){return $e.H.useFormState(t,l,a)};wt.useFormStatus=function(){return $e.H.useHostTransitionStatus()};wt.version="19.2.5"});var lf=$l((Ov,tf)=>{"use strict";function Ps(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ps)}catch(t){console.error(t)}}Ps(),tf.exports=Is()});var pm=$l(Du=>{"use strict";var bt=Ws(),Dr=Pn(),up=lf();function E(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function kr(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qn(t){var l=t,a=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(a=l.return),t=l.return;while(t)}return l.tag===3?a:null}function Br(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function Or(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function af(t){if(qn(t)!==t)throw Error(E(188))}function op(t){var l=t.alternate;if(!l){if(l=qn(t),l===null)throw Error(E(188));return l!==t?null:t}for(var a=t,e=l;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return af(n),t;if(i===e)return af(n),l;i=i.sibling}throw Error(E(188))}if(a.return!==e.return)a=n,e=i;else{for(var u=!1,c=n.child;c;){if(c===a){u=!0,a=n,e=i;break}if(c===e){u=!0,e=n,a=i;break}c=c.sibling}if(!u){for(c=i.child;c;){if(c===a){u=!0,a=i,e=n;break}if(c===e){u=!0,e=i,a=n;break}c=c.sibling}if(!u)throw Error(E(189))}}if(a.alternate!==e)throw Error(E(190))}if(a.tag!==3)throw Error(E(188));return a.stateNode.current===a?t:l}function Cr(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=Cr(t),l!==null)return l;t=t.sibling}return null}var et=Object.assign,cp=Symbol.for("react.element"),ni=Symbol.for("react.transitional.element"),en=Symbol.for("react.portal"),ue=Symbol.for("react.fragment"),wr=Symbol.for("react.strict_mode"),ko=Symbol.for("react.profiler"),_r=Symbol.for("react.consumer"),Ul=Symbol.for("react.context"),Nc=Symbol.for("react.forward_ref"),Bo=Symbol.for("react.suspense"),Oo=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),Il=Symbol.for("react.lazy"),Co=Symbol.for("react.activity"),sp=Symbol.for("react.memo_cache_sentinel"),ef=Symbol.iterator;function We(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var fp=Symbol.for("react.client.reference");function wo(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fp?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ue:return"Fragment";case ko:return"Profiler";case wr:return"StrictMode";case Bo:return"Suspense";case Oo:return"SuspenseList";case Co:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case en:return"Portal";case Ul:return t.displayName||"Context";case _r:return(t._context.displayName||"Context")+".Consumer";case Nc:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zc:return l=t.displayName||null,l!==null?l:wo(t.type)||"Memo";case Il:l=t._payload,t=t._init;try{return wo(t(l))}catch{}}return null}var nn=Array.isArray,O=Dr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=up.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Oa={pending:!1,data:null,method:null,action:null},_o=[],oe=-1;function Sl(t){return{current:t}}function Nt(t){0>oe||(t.current=_o[oe],_o[oe]=null,oe--)}function P(t,l){oe++,_o[oe]=t.current,t.current=l}var El=Sl(null),Sn=Sl(null),sa=Sl(null),Hi=Sl(null);function Yi(t,l){switch(P(sa,l),P(Sn,t),P(El,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?rr(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=rr(l),t=tm(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Nt(El),P(El,t)}function ze(){Nt(El),Nt(Sn),Nt(sa)}function Uo(t){t.memoizedState!==null&&P(Hi,t);var l=El.current,a=tm(l,t.type);l!==a&&(P(Sn,t),P(El,a))}function Xi(t){Sn.current===t&&(Nt(El),Nt(Sn)),Hi.current===t&&(Nt(Hi),wn._currentValue=Oa)}var $u,nf;function Ma(t){if($u===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);$u=l&&l[1]||"",nf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$u+t+nf}var Wu=!1;function Ru(t,l){if(!t||Wu)return"";Wu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(l){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(p){var m=p}Reflect.construct(t,[],y)}else{try{y.call()}catch(p){m=p}t.call(y.prototype)}}else{try{throw Error()}catch(p){m=p}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(p){if(p&&m&&typeof p.stack=="string")return[p.stack,m.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),u=i[0],c=i[1];if(u&&c){var s=u.split(`
`),d=c.split(`
`);for(n=e=0;e<s.length&&!s[e].includes("DetermineComponentFrameRoot");)e++;for(;n<d.length&&!d[n].includes("DetermineComponentFrameRoot");)n++;if(e===s.length||n===d.length)for(e=s.length-1,n=d.length-1;1<=e&&0<=n&&s[e]!==d[n];)n--;for(;1<=e&&0<=n;e--,n--)if(s[e]!==d[n]){if(e!==1||n!==1)do if(e--,n--,0>n||s[e]!==d[n]){var v=`
`+s[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=n);break}}}finally{Wu=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ma(a):""}function rp(t,l){switch(t.tag){case 26:case 27:case 5:return Ma(t.type);case 16:return Ma("Lazy");case 13:return t.child!==l&&l!==null?Ma("Suspense Fallback"):Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 15:return Ru(t.type,!1);case 11:return Ru(t.type.render,!1);case 1:return Ru(t.type,!0);case 31:return Ma("Activity");default:return""}}function uf(t){try{var l="",a=null;do l+=rp(t,a),a=t,t=t.return;while(t);return l}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var qo=Object.prototype.hasOwnProperty,Tc=bt.unstable_scheduleCallback,Iu=bt.unstable_cancelCallback,dp=bt.unstable_shouldYield,mp=bt.unstable_requestPaint,Ft=bt.unstable_now,pp=bt.unstable_getCurrentPriorityLevel,Ur=bt.unstable_ImmediatePriority,qr=bt.unstable_UserBlockingPriority,ji=bt.unstable_NormalPriority,hp=bt.unstable_LowPriority,Hr=bt.unstable_IdlePriority,vp=bt.log,yp=bt.unstable_setDisableYieldValue,Hn=null,$t=null;function na(t){if(typeof vp=="function"&&yp(t),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(Hn,t)}catch{}}var Wt=Math.clz32?Math.clz32:xp,gp=Math.log,bp=Math.LN2;function xp(t){return t>>>=0,t===0?32:31-(gp(t)/bp|0)|0}var ii=256,ui=262144,oi=4194304;function Da(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function du(t,l,a){var e=t.pendingLanes;if(e===0)return 0;var n=0,i=t.suspendedLanes,u=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~i,e!==0?n=Da(e):(u&=c,u!==0?n=Da(u):a||(a=c&~t,a!==0&&(n=Da(a))))):(c=e&~i,c!==0?n=Da(c):u!==0?n=Da(u):a||(a=e&~t,a!==0&&(n=Da(a)))),n===0?0:l!==0&&l!==n&&(l&i)===0&&(i=n&-n,a=l&-l,i>=a||i===32&&(a&4194048)!==0)?l:n}function Yn(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function Ep(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Yr(){var t=oi;return oi<<=1,(oi&62914560)===0&&(oi=4194304),t}function Pu(t){for(var l=[],a=0;31>a;a++)l.push(t);return l}function Xn(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Sp(t,l,a,e,n,i){var u=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,s=t.expirationTimes,d=t.hiddenUpdates;for(a=u&~a;0<a;){var v=31-Wt(a),y=1<<v;c[v]=0,s[v]=-1;var m=d[v];if(m!==null)for(d[v]=null,v=0;v<m.length;v++){var p=m[v];p!==null&&(p.lane&=-536870913)}a&=~y}e!==0&&Xr(t,e,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~l))}function Xr(t,l,a){t.pendingLanes|=l,t.suspendedLanes&=~l;var e=31-Wt(l);t.entangledLanes|=l,t.entanglements[e]=t.entanglements[e]|1073741824|a&261930}function jr(t,l){var a=t.entangledLanes|=l;for(t=t.entanglements;a;){var e=31-Wt(a),n=1<<e;n&l|t[e]&l&&(t[e]|=l),a&=~n}}function Lr(t,l){var a=l&-l;return a=(a&42)!==0?1:Mc(a),(a&(t.suspendedLanes|l))!==0?0:a}function Mc(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Dc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Gr(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:rm(t.type))}function of(t,l){var a=K.p;try{return K.p=t,l()}finally{K.p=a}}var Sa=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Sa,jt="__reactProps$"+Sa,qe="__reactContainer$"+Sa,Ho="__reactEvents$"+Sa,Ap="__reactListeners$"+Sa,Np="__reactHandles$"+Sa,cf="__reactResources$"+Sa,jn="__reactMarker$"+Sa;function kc(t){delete t[Tt],delete t[jt],delete t[Ho],delete t[Ap],delete t[Np]}function ce(t){var l=t[Tt];if(l)return l;for(var a=t.parentNode;a;){if(l=a[qe]||a[Tt]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(t=vr(t);t!==null;){if(a=t[Tt])return a;t=vr(t)}return l}t=a,a=t.parentNode}return null}function He(t){if(t=t[Tt]||t[qe]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function un(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(E(33))}function ge(t){var l=t[cf];return l||(l=t[cf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function At(t){t[jn]=!0}var Qr=new Set,Zr={};function La(t,l){Te(t,l),Te(t+"Capture",l)}function Te(t,l){for(Zr[t]=l,t=0;t<l.length;t++)Qr.add(l[t])}var zp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),sf={},ff={};function Tp(t){return qo.call(ff,t)?!0:qo.call(sf,t)?!1:zp.test(t)?ff[t]=!0:(sf[t]=!0,!1)}function Si(t,l,a){if(Tp(l))if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var e=l.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+a)}}function ci(t,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+a)}}function Dl(t,l,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(l,a,""+e)}}function el(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vr(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Mp(t,l,a){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,i=e.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,l,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function Yo(t){if(!t._valueTracker){var l=Vr(t)?"checked":"value";t._valueTracker=Mp(t,l,""+t[l])}}function Jr(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var a=l.getValue(),e="";return t&&(e=Vr(t)?t.checked?"true":"false":t.value),t=e,t!==a?(l.setValue(t),!0):!1}function Li(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Dp=/[\n"\\]/g;function ul(t){return t.replace(Dp,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Xo(t,l,a,e,n,i,u,c){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),l!=null?u==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+el(l)):t.value!==""+el(l)&&(t.value=""+el(l)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),l!=null?jo(t,u,el(l)):a!=null?jo(t,u,el(a)):e!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+el(c):t.removeAttribute("name")}function Kr(t,l,a,e,n,i,u,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),l!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||l!=null)){Yo(t);return}a=a!=null?""+el(a):"",l=l!=null?""+el(l):a,c||l===t.value||(t.value=l),t.defaultValue=l}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u),Yo(t)}function jo(t,l,a){l==="number"&&Li(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function be(t,l,a,e){if(t=t.options,l){l={};for(var n=0;n<a.length;n++)l["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=l.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&e&&(t[a].defaultSelected=!0)}else{for(a=""+el(a),l=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,e&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function Fr(t,l,a){if(l!=null&&(l=""+el(l),l!==t.value&&(t.value=l),a==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=a!=null?""+el(a):""}function $r(t,l,a,e){if(l==null){if(e!=null){if(a!=null)throw Error(E(92));if(nn(e)){if(1<e.length)throw Error(E(93));e=e[0]}a=e}a==null&&(a=""),l=a}a=el(l),t.defaultValue=a,e=t.textContent,e===a&&e!==""&&e!==null&&(t.value=e),Yo(t)}function Me(t,l){if(l){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=l;return}}t.textContent=l}var kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rf(t,l,a){var e=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":e?t.setProperty(l,a):typeof a!="number"||a===0||kp.has(l)?l==="float"?t.cssFloat=a:t[l]=(""+a).trim():t[l]=a+"px"}function Wr(t,l,a){if(l!=null&&typeof l!="object")throw Error(E(62));if(t=t.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||l!=null&&l.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var n in l)e=l[n],l.hasOwnProperty(n)&&a[n]!==e&&rf(t,n,e)}else for(var i in l)l.hasOwnProperty(i)&&rf(t,i,l[i])}function Bc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Op=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ai(t){return Op.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ql(){}var Lo=null;function Oc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var se=null,xe=null;function df(t){var l=He(t);if(l&&(t=l.stateNode)){var a=t[jt]||null;t:switch(t=l.stateNode,l.type){case"input":if(Xo(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ul(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var e=a[l];if(e!==t&&e.form===t.form){var n=e[jt]||null;if(!n)throw Error(E(90));Xo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<a.length;l++)e=a[l],e.form===t.form&&Jr(e)}break t;case"textarea":Fr(t,a.value,a.defaultValue);break t;case"select":l=a.value,l!=null&&be(t,!!a.multiple,l,!1)}}}var to=!1;function Rr(t,l,a){if(to)return t(l,a);to=!0;try{var e=t(l);return e}finally{if(to=!1,(se!==null||xe!==null)&&(Nu(),se&&(l=se,t=xe,xe=se=null,df(l),t)))for(l=0;l<t.length;l++)df(t[l])}}function An(t,l){var a=t.stateNode;if(a===null)return null;var e=a[jt]||null;if(e===null)return null;a=e[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(E(231,l,typeof a));return a}var Ll=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if(Ll)try{le={},Object.defineProperty(le,"passive",{get:function(){Go=!0}}),window.addEventListener("test",le,le),window.removeEventListener("test",le,le)}catch{Go=!1}var le,ia=null,Cc=null,Ni=null;function Ir(){if(Ni)return Ni;var t,l=Cc,a=l.length,e,n="value"in ia?ia.value:ia.textContent,i=n.length;for(t=0;t<a&&l[t]===n[t];t++);var u=a-t;for(e=1;e<=u&&l[a-e]===n[i-e];e++);return Ni=n.slice(t,1<e?1-e:void 0)}function zi(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function mf(){return!1}function Lt(t){function l(a,e,n,i,u){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?si:mf,this.isPropagationStopped=mf,this}return et(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),l}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mu=Lt(Ga),Ln=et({},Ga,{view:0,detail:0}),Cp=Lt(Ln),lo,ao,Re,pu=et({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Re&&(Re&&t.type==="mousemove"?(lo=t.screenX-Re.screenX,ao=t.screenY-Re.screenY):ao=lo=0,Re=t),lo)},movementY:function(t){return"movementY"in t?t.movementY:ao}}),pf=Lt(pu),wp=et({},pu,{dataTransfer:0}),_p=Lt(wp),Up=et({},Ln,{relatedTarget:0}),eo=Lt(Up),qp=et({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Hp=Lt(qp),Yp=et({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Xp=Lt(Yp),jp=et({},Ga,{data:0}),hf=Lt(jp),Lp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zp(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=Qp[t])?!!l[t]:!1}function wc(){return Zp}var Vp=et({},Ln,{key:function(t){if(t.key){var l=Lp[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gp[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(t){return t.type==="keypress"?zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jp=Lt(Vp),Kp=et({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vf=Lt(Kp),Fp=et({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),$p=Lt(Fp),Wp=et({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rp=Lt(Wp),Ip=et({},pu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pp=Lt(Ip),t1=et({},Ga,{newState:0,oldState:0}),l1=Lt(t1),a1=[9,13,27,32],_c=Ll&&"CompositionEvent"in window,sn=null;Ll&&"documentMode"in document&&(sn=document.documentMode);var e1=Ll&&"TextEvent"in window&&!sn,Pr=Ll&&(!_c||sn&&8<sn&&11>=sn),yf=" ",gf=!1;function td(t,l){switch(t){case"keyup":return a1.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ld(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fe=!1;function n1(t,l){switch(t){case"compositionend":return ld(l);case"keypress":return l.which!==32?null:(gf=!0,yf);case"textInput":return t=l.data,t===yf&&gf?null:t;default:return null}}function i1(t,l){if(fe)return t==="compositionend"||!_c&&td(t,l)?(t=Ir(),Ni=Cc=ia=null,fe=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return Pr&&l.locale!=="ko"?null:l.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!u1[t.type]:l==="textarea"}function ad(t,l,a,e){se?xe?xe.push(e):xe=[e]:se=e,l=iu(l,"onChange"),0<l.length&&(a=new mu("onChange","change",null,a,e),t.push({event:a,listeners:l}))}var fn=null,Nn=null;function o1(t){R0(t,0)}function hu(t){var l=un(t);if(Jr(l))return t}function xf(t,l){if(t==="change")return l}var ed=!1;Ll&&(Ll?(ri="oninput"in document,ri||(no=document.createElement("div"),no.setAttribute("oninput","return;"),ri=typeof no.oninput=="function"),fi=ri):fi=!1,ed=fi&&(!document.documentMode||9<document.documentMode));var fi,ri,no;function Ef(){fn&&(fn.detachEvent("onpropertychange",nd),Nn=fn=null)}function nd(t){if(t.propertyName==="value"&&hu(Nn)){var l=[];ad(l,Nn,t,Oc(t)),Rr(o1,l)}}function c1(t,l,a){t==="focusin"?(Ef(),fn=l,Nn=a,fn.attachEvent("onpropertychange",nd)):t==="focusout"&&Ef()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(Nn)}function f1(t,l){if(t==="click")return hu(l)}function r1(t,l){if(t==="input"||t==="change")return hu(l)}function d1(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var It=typeof Object.is=="function"?Object.is:d1;function zn(t,l){if(It(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var a=Object.keys(t),e=Object.keys(l);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!qo.call(l,n)||!It(t[n],l[n]))return!1}return!0}function Sf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Af(t,l){var a=Sf(t);t=0;for(var e;a;){if(a.nodeType===3){if(e=t+a.textContent.length,t<=l&&e>=l)return{node:a,offset:l-t};t=e}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Sf(a)}}function id(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?id(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Li(t.document);l instanceof t.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)t=l.contentWindow;else break;l=Li(t.document)}return l}function Uc(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var m1=Ll&&"documentMode"in document&&11>=document.documentMode,re=null,Qo=null,rn=null,Zo=!1;function Nf(t,l,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zo||re==null||re!==Li(e)||(e=re,"selectionStart"in e&&Uc(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),rn&&zn(rn,e)||(rn=e,e=iu(Qo,"onSelect"),0<e.length&&(l=new mu("onSelect","select",null,l,a),t.push({event:l,listeners:e}),l.target=re)))}function Ta(t,l){var a={};return a[t.toLowerCase()]=l.toLowerCase(),a["Webkit"+t]="webkit"+l,a["Moz"+t]="moz"+l,a}var de={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},io={},od={};Ll&&(od=document.createElement("div").style,"AnimationEvent"in window||(delete de.animationend.animation,delete de.animationiteration.animation,delete de.animationstart.animation),"TransitionEvent"in window||delete de.transitionend.transition);function Qa(t){if(io[t])return io[t];if(!de[t])return t;var l=de[t],a;for(a in l)if(l.hasOwnProperty(a)&&a in od)return io[t]=l[a];return t}var cd=Qa("animationend"),sd=Qa("animationiteration"),fd=Qa("animationstart"),p1=Qa("transitionrun"),h1=Qa("transitionstart"),v1=Qa("transitioncancel"),rd=Qa("transitionend"),dd=new Map,Vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vo.push("scrollEnd");function hl(t,l){dd.set(t,l),La(l,[t])}var Gi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},al=[],me=0,qc=0;function vu(){for(var t=me,l=qc=me=0;l<t;){var a=al[l];al[l++]=null;var e=al[l];al[l++]=null;var n=al[l];al[l++]=null;var i=al[l];if(al[l++]=null,e!==null&&n!==null){var u=e.pending;u===null?n.next=n:(n.next=u.next,u.next=n),e.pending=n}i!==0&&md(a,n,i)}}function yu(t,l,a,e){al[me++]=t,al[me++]=l,al[me++]=a,al[me++]=e,qc|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function Hc(t,l,a,e){return yu(t,l,a,e),Qi(t)}function Za(t,l){return yu(t,null,null,l),Qi(t)}function md(t,l,a){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a);for(var n=!1,i=t.return;i!==null;)i.childLanes|=a,e=i.alternate,e!==null&&(e.childLanes|=a),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&l!==null&&(n=31-Wt(a),t=i.hiddenUpdates,e=t[n],e===null?t[n]=[l]:e.push(l),l.lane=a|536870912),i):null}function Qi(t){if(50<xn)throw xn=0,dc=null,Error(E(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var pe={};function y1(t,l,a,e){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jt(t,l,a,e){return new y1(t,l,a,e)}function Yc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yl(t,l){var a=t.alternate;return a===null?(a=Jt(t.tag,l,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=l,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,l=t.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function pd(t,l){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,l=a.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function Ti(t,l,a,e,n,i){var u=0;if(e=t,typeof t=="function")Yc(t)&&(u=1);else if(typeof t=="string")u=xh(t,a,El.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Co:return t=Jt(31,a,l,n),t.elementType=Co,t.lanes=i,t;case ue:return Ca(a.children,n,i,l);case wr:u=8,n|=24;break;case ko:return t=Jt(12,a,l,n|2),t.elementType=ko,t.lanes=i,t;case Bo:return t=Jt(13,a,l,n),t.elementType=Bo,t.lanes=i,t;case Oo:return t=Jt(19,a,l,n),t.elementType=Oo,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ul:u=10;break t;case _r:u=9;break t;case Nc:u=11;break t;case zc:u=14;break t;case Il:u=16,e=null;break t}u=29,a=Error(E(130,t===null?"null":typeof t,"")),e=null}return l=Jt(u,a,l,n),l.elementType=t,l.type=e,l.lanes=i,l}function Ca(t,l,a,e){return t=Jt(7,t,e,l),t.lanes=a,t}function uo(t,l,a){return t=Jt(6,t,null,l),t.lanes=a,t}function hd(t){var l=Jt(18,null,null,0);return l.stateNode=t,l}function oo(t,l,a){return l=Jt(4,t.children!==null?t.children:[],t.key,l),l.lanes=a,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var zf=new WeakMap;function ol(t,l){if(typeof t=="object"&&t!==null){var a=zf.get(t);return a!==void 0?a:(l={value:t,source:l,stack:uf(l)},zf.set(t,l),l)}return{value:t,source:l,stack:uf(l)}}var he=[],ve=0,Zi=null,Tn=0,nl=[],il=0,ga=null,gl=1,bl="";function wl(t,l){he[ve++]=Tn,he[ve++]=Zi,Zi=t,Tn=l}function vd(t,l,a){nl[il++]=gl,nl[il++]=bl,nl[il++]=ga,ga=t;var e=gl;t=bl;var n=32-Wt(e)-1;e&=~(1<<n),a+=1;var i=32-Wt(l)+n;if(30<i){var u=n-n%5;i=(e&(1<<u)-1).toString(32),e>>=u,n-=u,gl=1<<32-Wt(l)+n|a<<n|e,bl=i+t}else gl=1<<i|a<<n|e,bl=t}function Xc(t){t.return!==null&&(wl(t,1),vd(t,1,0))}function jc(t){for(;t===Zi;)Zi=he[--ve],he[ve]=null,Tn=he[--ve],he[ve]=null;for(;t===ga;)ga=nl[--il],nl[il]=null,bl=nl[--il],nl[il]=null,gl=nl[--il],nl[il]=null}function yd(t,l){nl[il++]=gl,nl[il++]=bl,nl[il++]=ga,gl=l.id,bl=l.overflow,ga=t}var Mt=null,at=null,Z=!1,fa=null,cl=!1,Jo=Error(E(519));function ba(t){var l=Error(E(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Mn(ol(l,t)),Jo}function Tf(t){var l=t.stateNode,a=t.type,e=t.memoizedProps;switch(l[Tt]=t,l[jt]=e,a){case"dialog":X("cancel",l),X("close",l);break;case"iframe":case"object":case"embed":X("load",l);break;case"video":case"audio":for(a=0;a<On.length;a++)X(On[a],l);break;case"source":X("error",l);break;case"img":case"image":case"link":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"input":X("invalid",l),Kr(l,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":X("invalid",l);break;case"textarea":X("invalid",l),$r(l,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||e.suppressHydrationWarning===!0||P0(l.textContent,a)?(e.popover!=null&&(X("beforetoggle",l),X("toggle",l)),e.onScroll!=null&&X("scroll",l),e.onScrollEnd!=null&&X("scrollend",l),e.onClick!=null&&(l.onclick=ql),l=!0):l=!1,l||ba(t,!0)}function Mf(t){for(Mt=t.return;Mt;)switch(Mt.tag){case 5:case 31:case 13:cl=!1;return;case 27:case 3:cl=!0;return;default:Mt=Mt.return}}function ae(t){if(t!==Mt)return!1;if(!Z)return Mf(t),Z=!0,!1;var l=t.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yc(t.type,t.memoizedProps)),a=!a),a&&at&&ba(t),Mf(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));at=hr(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));at=hr(t)}else l===27?(l=at,Aa(t.type)?(t=Ec,Ec=null,at=t):at=l):at=Mt?fl(t.stateNode.nextSibling):null;return!0}function qa(){at=Mt=null,Z=!1}function co(){var t=fa;return t!==null&&(Yt===null?Yt=t:Yt.push.apply(Yt,t),fa=null),t}function Mn(t){fa===null?fa=[t]:fa.push(t)}var Ko=Sl(null),Va=null,Hl=null;function ta(t,l,a){P(Ko,l._currentValue),l._currentValue=a}function Xl(t){t._currentValue=Ko.current,Nt(Ko)}function Fo(t,l,a){for(;t!==null;){var e=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,e!==null&&(e.childLanes|=l)):e!==null&&(e.childLanes&l)!==l&&(e.childLanes|=l),t===a)break;t=t.return}}function $o(t,l,a,e){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var u=n.child;i=i.firstContext;t:for(;i!==null;){var c=i;i=n;for(var s=0;s<l.length;s++)if(c.context===l[s]){i.lanes|=a,c=i.alternate,c!==null&&(c.lanes|=a),Fo(i.return,a,t),e||(u=null);break t}i=c.next}}else if(n.tag===18){if(u=n.return,u===null)throw Error(E(341));u.lanes|=a,i=u.alternate,i!==null&&(i.lanes|=a),Fo(u,a,t),u=null}else u=n.child;if(u!==null)u.return=n;else for(u=n;u!==null;){if(u===t){u=null;break}if(n=u.sibling,n!==null){n.return=u.return,u=n;break}u=u.return}n=u}}function Ye(t,l,a,e){t=null;for(var n=l,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var u=n.alternate;if(u===null)throw Error(E(387));if(u=u.memoizedProps,u!==null){var c=n.type;It(n.pendingProps.value,u.value)||(t!==null?t.push(c):t=[c])}}else if(n===Hi.current){if(u=n.alternate,u===null)throw Error(E(387));u.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(wn):t=[wn])}n=n.return}t!==null&&$o(l,t,a,e),l.flags|=262144}function Vi(t){for(t=t.firstContext;t!==null;){if(!It(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ha(t){Va=t,Hl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dt(t){return gd(Va,t)}function di(t,l){return Va===null&&Ha(t),gd(t,l)}function gd(t,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},Hl===null){if(t===null)throw Error(E(308));Hl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Hl=Hl.next=l;return a}var g1=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(a,e){t.push(e)}};this.abort=function(){l.aborted=!0,t.forEach(function(a){return a()})}},b1=bt.unstable_scheduleCallback,x1=bt.unstable_NormalPriority,vt={$$typeof:Ul,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lc(){return{controller:new g1,data:new Map,refCount:0}}function Gn(t){t.refCount--,t.refCount===0&&b1(x1,function(){t.controller.abort()})}var dn=null,Wo=0,De=0,Ee=null;function E1(t,l){if(dn===null){var a=dn=[];Wo=0,De=ds(),Ee={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Wo++,l.then(Df,Df),l}function Df(){if(--Wo===0&&dn!==null){Ee!==null&&(Ee.status="fulfilled");var t=dn;dn=null,De=0,Ee=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function S1(t,l){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){e.status="fulfilled",e.value=l;for(var n=0;n<a.length;n++)(0,a[n])(l)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var kf=O.S;O.S=function(t,l){C0=Ft(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&E1(t,l),kf!==null&&kf(t,l)};var wa=Sl(null);function Gc(){var t=wa.current;return t!==null?t:I.pooledCache}function Mi(t,l){l===null?P(wa,wa.current):P(wa,l.pool)}function bd(){var t=Gc();return t===null?null:{parent:vt._currentValue,pool:t}}var Xe=Error(E(460)),Qc=Error(E(474)),gu=Error(E(542)),Ji={then:function(){}};function Bf(t){return t=t.status,t==="fulfilled"||t==="rejected"}function xd(t,l,a){switch(a=t[a],a===void 0?t.push(l):a!==l&&(l.then(ql,ql),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Cf(t),t;default:if(typeof l.status=="string")l.then(ql,ql);else{if(t=I,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=l,t.status="pending",t.then(function(e){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=e}},function(e){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=e}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,Cf(t),t}throw _a=l,Xe}}function ka(t){try{var l=t._init;return l(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,Xe):a}}var _a=null;function Of(){if(_a===null)throw Error(E(459));var t=_a;return _a=null,t}function Cf(t){if(t===Xe||t===gu)throw Error(E(483))}var Se=null,Dn=0;function mi(t){var l=Dn;return Dn+=1,Se===null&&(Se=[]),xd(Se,t,l)}function Ie(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function pi(t,l){throw l.$$typeof===cp?Error(E(525)):(t=Object.prototype.toString.call(l),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Ed(t){function l(r,f){if(t){var h=r.deletions;h===null?(r.deletions=[f],r.flags|=16):h.push(f)}}function a(r,f){if(!t)return null;for(;f!==null;)l(r,f),f=f.sibling;return null}function e(r){for(var f=new Map;r!==null;)r.key!==null?f.set(r.key,r):f.set(r.index,r),r=r.sibling;return f}function n(r,f){return r=Yl(r,f),r.index=0,r.sibling=null,r}function i(r,f,h){return r.index=h,t?(h=r.alternate,h!==null?(h=h.index,h<f?(r.flags|=67108866,f):h):(r.flags|=67108866,f)):(r.flags|=1048576,f)}function u(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,f,h,g){return f===null||f.tag!==6?(f=uo(h,r.mode,g),f.return=r,f):(f=n(f,h),f.return=r,f)}function s(r,f,h,g){var z=h.type;return z===ue?v(r,f,h.props.children,g,h.key):f!==null&&(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Il&&ka(z)===f.type)?(f=n(f,h.props),Ie(f,h),f.return=r,f):(f=Ti(h.type,h.key,h.props,null,r.mode,g),Ie(f,h),f.return=r,f)}function d(r,f,h,g){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=oo(h,r.mode,g),f.return=r,f):(f=n(f,h.children||[]),f.return=r,f)}function v(r,f,h,g,z){return f===null||f.tag!==7?(f=Ca(h,r.mode,g,z),f.return=r,f):(f=n(f,h),f.return=r,f)}function y(r,f,h){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=uo(""+f,r.mode,h),f.return=r,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ni:return h=Ti(f.type,f.key,f.props,null,r.mode,h),Ie(h,f),h.return=r,h;case en:return f=oo(f,r.mode,h),f.return=r,f;case Il:return f=ka(f),y(r,f,h)}if(nn(f)||We(f))return f=Ca(f,r.mode,h,null),f.return=r,f;if(typeof f.then=="function")return y(r,mi(f),h);if(f.$$typeof===Ul)return y(r,di(r,f),h);pi(r,f)}return null}function m(r,f,h,g){var z=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return z!==null?null:c(r,f,""+h,g);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ni:return h.key===z?s(r,f,h,g):null;case en:return h.key===z?d(r,f,h,g):null;case Il:return h=ka(h),m(r,f,h,g)}if(nn(h)||We(h))return z!==null?null:v(r,f,h,g,null);if(typeof h.then=="function")return m(r,f,mi(h),g);if(h.$$typeof===Ul)return m(r,f,di(r,h),g);pi(r,h)}return null}function p(r,f,h,g,z){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return r=r.get(h)||null,c(f,r,""+g,z);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ni:return r=r.get(g.key===null?h:g.key)||null,s(f,r,g,z);case en:return r=r.get(g.key===null?h:g.key)||null,d(f,r,g,z);case Il:return g=ka(g),p(r,f,h,g,z)}if(nn(g)||We(g))return r=r.get(h)||null,v(f,r,g,z,null);if(typeof g.then=="function")return p(r,f,h,mi(g),z);if(g.$$typeof===Ul)return p(r,f,h,di(f,g),z);pi(f,g)}return null}function x(r,f,h,g){for(var z=null,D=null,M=f,k=f=0,B=null;M!==null&&k<h.length;k++){M.index>k?(B=M,M=null):B=M.sibling;var C=m(r,M,h[k],g);if(C===null){M===null&&(M=B);break}t&&M&&C.alternate===null&&l(r,M),f=i(C,f,k),D===null?z=C:D.sibling=C,D=C,M=B}if(k===h.length)return a(r,M),Z&&wl(r,k),z;if(M===null){for(;k<h.length;k++)M=y(r,h[k],g),M!==null&&(f=i(M,f,k),D===null?z=M:D.sibling=M,D=M);return Z&&wl(r,k),z}for(M=e(M);k<h.length;k++)B=p(M,r,k,h[k],g),B!==null&&(t&&B.alternate!==null&&M.delete(B.key===null?k:B.key),f=i(B,f,k),D===null?z=B:D.sibling=B,D=B);return t&&M.forEach(function(N){return l(r,N)}),Z&&wl(r,k),z}function b(r,f,h,g){if(h==null)throw Error(E(151));for(var z=null,D=null,M=f,k=f=0,B=null,C=h.next();M!==null&&!C.done;k++,C=h.next()){M.index>k?(B=M,M=null):B=M.sibling;var N=m(r,M,C.value,g);if(N===null){M===null&&(M=B);break}t&&M&&N.alternate===null&&l(r,M),f=i(N,f,k),D===null?z=N:D.sibling=N,D=N,M=B}if(C.done)return a(r,M),Z&&wl(r,k),z;if(M===null){for(;!C.done;k++,C=h.next())C=y(r,C.value,g),C!==null&&(f=i(C,f,k),D===null?z=C:D.sibling=C,D=C);return Z&&wl(r,k),z}for(M=e(M);!C.done;k++,C=h.next())C=p(M,r,k,C.value,g),C!==null&&(t&&C.alternate!==null&&M.delete(C.key===null?k:C.key),f=i(C,f,k),D===null?z=C:D.sibling=C,D=C);return t&&M.forEach(function(w){return l(r,w)}),Z&&wl(r,k),z}function S(r,f,h,g){if(typeof h=="object"&&h!==null&&h.type===ue&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ni:t:{for(var z=h.key;f!==null;){if(f.key===z){if(z=h.type,z===ue){if(f.tag===7){a(r,f.sibling),g=n(f,h.props.children),g.return=r,r=g;break t}}else if(f.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Il&&ka(z)===f.type){a(r,f.sibling),g=n(f,h.props),Ie(g,h),g.return=r,r=g;break t}a(r,f);break}else l(r,f);f=f.sibling}h.type===ue?(g=Ca(h.props.children,r.mode,g,h.key),g.return=r,r=g):(g=Ti(h.type,h.key,h.props,null,r.mode,g),Ie(g,h),g.return=r,r=g)}return u(r);case en:t:{for(z=h.key;f!==null;){if(f.key===z)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){a(r,f.sibling),g=n(f,h.children||[]),g.return=r,r=g;break t}else{a(r,f);break}else l(r,f);f=f.sibling}g=oo(h,r.mode,g),g.return=r,r=g}return u(r);case Il:return h=ka(h),S(r,f,h,g)}if(nn(h))return x(r,f,h,g);if(We(h)){if(z=We(h),typeof z!="function")throw Error(E(150));return h=z.call(h),b(r,f,h,g)}if(typeof h.then=="function")return S(r,f,mi(h),g);if(h.$$typeof===Ul)return S(r,f,di(r,h),g);pi(r,h)}return typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint"?(h=""+h,f!==null&&f.tag===6?(a(r,f.sibling),g=n(f,h),g.return=r,r=g):(a(r,f),g=uo(h,r.mode,g),g.return=r,r=g),u(r)):a(r,f)}return function(r,f,h,g){try{Dn=0;var z=S(r,f,h,g);return Se=null,z}catch(M){if(M===Xe||M===gu)throw M;var D=Jt(29,M,null,r.mode);return D.lanes=g,D.return=r,D}}}var Ya=Ed(!0),Sd=Ed(!1),Pl=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ro(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,l,a){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(J&2)!==0){var n=e.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),e.pending=l,l=Qi(t),md(t,null,a),l}return yu(t,e,l,a),Qi(t)}function mn(t,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,jr(t,a)}}function so(t,l){var a=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=u:i=i.next=u,a=a.next}while(a!==null);i===null?n=i=l:i=i.next=l}else n=i=l;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=l:t.next=l,a.lastBaseUpdate=l}var Io=!1;function pn(){if(Io){var t=Ee;if(t!==null)throw t}}function hn(t,l,a,e){Io=!1;var n=t.updateQueue;Pl=!1;var i=n.firstBaseUpdate,u=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,d=s.next;s.next=null,u===null?i=d:u.next=d,u=s;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==u&&(c===null?v.firstBaseUpdate=d:c.next=d,v.lastBaseUpdate=s))}if(i!==null){var y=n.baseState;u=0,v=d=s=null,c=i;do{var m=c.lane&-536870913,p=m!==c.lane;if(p?(Q&m)===m:(e&m)===m){m!==0&&m===De&&(Io=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var x=t,b=c;m=l;var S=a;switch(b.tag){case 1:if(x=b.payload,typeof x=="function"){y=x.call(S,y,m);break t}y=x;break t;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,m=typeof x=="function"?x.call(S,y,m):x,m==null)break t;y=et({},y,m);break t;case 2:Pl=!0}}m=c.callback,m!==null&&(t.flags|=64,p&&(t.flags|=8192),p=n.callbacks,p===null?n.callbacks=[m]:p.push(m))}else p={lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(d=v=p,s=y):v=v.next=p,u|=m;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;p=c,c=p.next,p.next=null,n.lastBaseUpdate=p,n.shared.pending=null}}while(!0);v===null&&(s=y),n.baseState=s,n.firstBaseUpdate=d,n.lastBaseUpdate=v,i===null&&(n.shared.lanes=0),Ea|=u,t.lanes=u,t.memoizedState=y}}function Ad(t,l){if(typeof t!="function")throw Error(E(191,t));t.call(l)}function Nd(t,l){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ad(a[t],l)}var ke=Sl(null),Ki=Sl(0);function wf(t,l){t=Vl,P(Ki,t),P(ke,l),Vl=t|l.baseLanes}function Po(){P(Ki,Vl),P(ke,ke.current)}function Vc(){Vl=Ki.current,Nt(ke),Nt(Ki)}var Pt=Sl(null),sl=null;function la(t){var l=t.alternate;P(rt,rt.current&1),P(Pt,t),sl===null&&(l===null||ke.current!==null||l.memoizedState!==null)&&(sl=t)}function tc(t){P(rt,rt.current),P(Pt,t),sl===null&&(sl=t)}function zd(t){t.tag===22?(P(rt,rt.current),P(Pt,t),sl===null&&(sl=t)):aa(t)}function aa(){P(rt,rt.current),P(Pt,Pt.current)}function Vt(t){Nt(Pt),sl===t&&(sl=null),Nt(rt)}var rt=Sl(0);function Fi(t){for(var l=t;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bc(a)||xc(a)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Gl=0,q=null,R=null,pt=null,$i=!1,Ae=!1,Xa=!1,Wi=0,kn=0,Ne=null,A1=0;function st(){throw Error(E(321))}function Jc(t,l){if(l===null)return!1;for(var a=0;a<l.length&&a<t.length;a++)if(!It(t[a],l[a]))return!1;return!0}function Kc(t,l,a,e,n,i){return Gl=i,q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,O.H=t===null||t.memoizedState===null?a0:ns,Xa=!1,i=a(e,n),Xa=!1,Ae&&(i=Md(l,a,e,n)),Td(t),i}function Td(t){O.H=Bn;var l=R!==null&&R.next!==null;if(Gl=0,pt=R=q=null,$i=!1,kn=0,Ne=null,l)throw Error(E(300));t===null||yt||(t=t.dependencies,t!==null&&Vi(t)&&(yt=!0))}function Md(t,l,a,e){q=t;var n=0;do{if(Ae&&(Ne=null),kn=0,Ae=!1,25<=n)throw Error(E(301));if(n+=1,pt=R=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}O.H=e0,i=l(a,e)}while(Ae);return i}function N1(){var t=O.H,l=t.useState()[0];return l=typeof l.then=="function"?Qn(l):l,t=t.useState()[0],(R!==null?R.memoizedState:null)!==t&&(q.flags|=1024),l}function Fc(){var t=Wi!==0;return Wi=0,t}function $c(t,l,a){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~a}function Wc(t){if($i){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}$i=!1}Gl=0,pt=R=q=null,Ae=!1,kn=Wi=0,Ne=null}function _t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?q.memoizedState=pt=t:pt=pt.next=t,pt}function dt(){if(R===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=R.next;var l=pt===null?q.memoizedState:pt.next;if(l!==null)pt=l,R=t;else{if(t===null)throw q.alternate===null?Error(E(467)):Error(E(310));R=t,t={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},pt===null?q.memoizedState=pt=t:pt=pt.next=t}return pt}function bu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qn(t){var l=kn;return kn+=1,Ne===null&&(Ne=[]),t=xd(Ne,t,l),l=q,(pt===null?l.memoizedState:pt.next)===null&&(l=l.alternate,O.H=l===null||l.memoizedState===null?a0:ns),t}function xu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Qn(t);if(t.$$typeof===Ul)return Dt(t)}throw Error(E(438,String(t)))}function Rc(t){var l=null,a=q.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var e=q.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(l={data:e.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=bu(),q.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(t),e=0;e<t;e++)a[e]=sp;return l.index++,a}function Ql(t,l){return typeof l=="function"?l(t):l}function Di(t){var l=dt();return Ic(l,R,t)}function Ic(t,l,a){var e=t.queue;if(e===null)throw Error(E(311));e.lastRenderedReducer=a;var n=t.baseQueue,i=e.pending;if(i!==null){if(n!==null){var u=n.next;n.next=i.next,i.next=u}l.baseQueue=n=i,e.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{l=n.next;var c=u=null,s=null,d=l,v=!1;do{var y=d.lane&-536870913;if(y!==d.lane?(Q&y)===y:(Gl&y)===y){var m=d.revertLane;if(m===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),y===De&&(v=!0);else if((Gl&m)===m){d=d.next,m===De&&(v=!0);continue}else y={lane:0,revertLane:d.revertLane,gesture:null,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(c=s=y,u=i):s=s.next=y,q.lanes|=m,Ea|=m;y=d.action,Xa&&a(i,y),i=d.hasEagerState?d.eagerState:a(i,y)}else m={lane:y,revertLane:d.revertLane,gesture:d.gesture,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null},s===null?(c=s=m,u=i):s=s.next=m,q.lanes|=y,Ea|=y;d=d.next}while(d!==null&&d!==l);if(s===null?u=i:s.next=c,!It(i,t.memoizedState)&&(yt=!0,v&&(a=Ee,a!==null)))throw a;t.memoizedState=i,t.baseState=u,t.baseQueue=s,e.lastRenderedState=i}return n===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function fo(t){var l=dt(),a=l.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=t;var e=a.dispatch,n=a.pending,i=l.memoizedState;if(n!==null){a.pending=null;var u=n=n.next;do i=t(i,u.action),u=u.next;while(u!==n);It(i,l.memoizedState)||(yt=!0),l.memoizedState=i,l.baseQueue===null&&(l.baseState=i),a.lastRenderedState=i}return[i,e]}function Dd(t,l,a){var e=q,n=dt(),i=Z;if(i){if(a===void 0)throw Error(E(407));a=a()}else a=l();var u=!It((R||n).memoizedState,a);if(u&&(n.memoizedState=a,yt=!0),n=n.queue,Pc(Od.bind(null,e,n,t),[t]),n.getSnapshot!==l||u||pt!==null&&pt.memoizedState.tag&1){if(e.flags|=2048,Be(9,{destroy:void 0},Bd.bind(null,e,n,a,l),null),I===null)throw Error(E(349));i||(Gl&127)!==0||kd(e,l,a)}return a}function kd(t,l,a){t.flags|=16384,t={getSnapshot:l,value:a},l=q.updateQueue,l===null?(l=bu(),q.updateQueue=l,l.stores=[t]):(a=l.stores,a===null?l.stores=[t]:a.push(t))}function Bd(t,l,a,e){l.value=a,l.getSnapshot=e,Cd(l)&&wd(t)}function Od(t,l,a){return a(function(){Cd(l)&&wd(t)})}function Cd(t){var l=t.getSnapshot;t=t.value;try{var a=l();return!It(t,a)}catch{return!0}}function wd(t){var l=Za(t,2);l!==null&&Xt(l,t,2)}function lc(t){var l=_t();if(typeof t=="function"){var a=t;if(t=a(),Xa){na(!0);try{a()}finally{na(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:t},l}function _d(t,l,a,e){return t.baseState=a,Ic(t,R,typeof e=="function"?e:Ql)}function z1(t,l,a,e,n){if(Su(t))throw Error(E(485));if(t=l.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};O.T!==null?a(!0):i.isTransition=!1,e(i),a=l.pending,a===null?(i.next=l.pending=i,Ud(l,i)):(i.next=a.next,l.pending=a.next=i)}}function Ud(t,l){var a=l.action,e=l.payload,n=t.state;if(l.isTransition){var i=O.T,u={};O.T=u;try{var c=a(n,e),s=O.S;s!==null&&s(u,c),_f(t,l,c)}catch(d){ac(t,l,d)}finally{i!==null&&u.types!==null&&(i.types=u.types),O.T=i}}else try{i=a(n,e),_f(t,l,i)}catch(d){ac(t,l,d)}}function _f(t,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){Uf(t,l,e)},function(e){return ac(t,l,e)}):Uf(t,l,a)}function Uf(t,l,a){l.status="fulfilled",l.value=a,qd(l),t.state=a,l=t.pending,l!==null&&(a=l.next,a===l?t.pending=null:(a=a.next,l.next=a,Ud(t,a)))}function ac(t,l,a){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do l.status="rejected",l.reason=a,qd(l),l=l.next;while(l!==e)}t.action=null}function qd(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Hd(t,l){return l}function qf(t,l){if(Z){var a=I.formState;if(a!==null){t:{var e=q;if(Z){if(at){l:{for(var n=at,i=cl;n.nodeType!==8;){if(!i){n=null;break l}if(n=fl(n.nextSibling),n===null){n=null;break l}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){at=fl(n.nextSibling),e=n.data==="F!";break t}}ba(e)}e=!1}e&&(l=a[0])}}return a=_t(),a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hd,lastRenderedState:l},a.queue=e,a=Pd.bind(null,q,e),e.dispatch=a,e=lc(!1),i=es.bind(null,q,!1,e.queue),e=_t(),n={state:l,dispatch:null,action:t,pending:null},e.queue=n,a=z1.bind(null,q,n,i,a),n.dispatch=a,e.memoizedState=t,[l,a,!1]}function Hf(t){var l=dt();return Yd(l,R,t)}function Yd(t,l,a){if(l=Ic(t,l,Hd)[0],t=Di(Ql)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var e=Qn(l)}catch(u){throw u===Xe?gu:u}else e=l;l=dt();var n=l.queue,i=n.dispatch;return a!==l.memoizedState&&(q.flags|=2048,Be(9,{destroy:void 0},T1.bind(null,n,a),null)),[e,i,t]}function T1(t,l){t.action=l}function Yf(t){var l=dt(),a=R;if(a!==null)return Yd(l,a,t);dt(),l=l.memoizedState,a=dt();var e=a.queue.dispatch;return a.memoizedState=t,[l,e,!1]}function Be(t,l,a,e){return t={tag:t,create:a,deps:e,inst:l,next:null},l=q.updateQueue,l===null&&(l=bu(),q.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=t.next=t:(e=a.next,a.next=t,t.next=e,l.lastEffect=t),t}function Xd(){return dt().memoizedState}function ki(t,l,a,e){var n=_t();q.flags|=t,n.memoizedState=Be(1|l,{destroy:void 0},a,e===void 0?null:e)}function Eu(t,l,a,e){var n=dt();e=e===void 0?null:e;var i=n.memoizedState.inst;R!==null&&e!==null&&Jc(e,R.memoizedState.deps)?n.memoizedState=Be(l,i,a,e):(q.flags|=t,n.memoizedState=Be(1|l,i,a,e))}function Xf(t,l){ki(8390656,8,t,l)}function Pc(t,l){Eu(2048,8,t,l)}function M1(t){q.flags|=4;var l=q.updateQueue;if(l===null)l=bu(),q.updateQueue=l,l.events=[t];else{var a=l.events;a===null?l.events=[t]:a.push(t)}}function jd(t){var l=dt().memoizedState;return M1({ref:l,nextImpl:t}),function(){if((J&2)!==0)throw Error(E(440));return l.impl.apply(void 0,arguments)}}function Ld(t,l){return Eu(4,2,t,l)}function Gd(t,l){return Eu(4,4,t,l)}function Qd(t,l){if(typeof l=="function"){t=t();var a=l(t);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function Zd(t,l,a){a=a!=null?a.concat([t]):null,Eu(4,4,Qd.bind(null,l,t),a)}function ts(){}function Vd(t,l){var a=dt();l=l===void 0?null:l;var e=a.memoizedState;return l!==null&&Jc(l,e[1])?e[0]:(a.memoizedState=[t,l],t)}function Jd(t,l){var a=dt();l=l===void 0?null:l;var e=a.memoizedState;if(l!==null&&Jc(l,e[1]))return e[0];if(e=t(),Xa){na(!0);try{t()}finally{na(!1)}}return a.memoizedState=[e,l],e}function ls(t,l,a){return a===void 0||(Gl&1073741824)!==0&&(Q&261930)===0?t.memoizedState=l:(t.memoizedState=a,t=_0(),q.lanes|=t,Ea|=t,a)}function Kd(t,l,a,e){return It(a,l)?a:ke.current!==null?(t=ls(t,a,e),It(t,l)||(yt=!0),t):(Gl&42)===0||(Gl&1073741824)!==0&&(Q&261930)===0?(yt=!0,t.memoizedState=a):(t=_0(),q.lanes|=t,Ea|=t,l)}function Fd(t,l,a,e,n){var i=K.p;K.p=i!==0&&8>i?i:8;var u=O.T,c={};O.T=c,es(t,!1,l,a);try{var s=n(),d=O.S;if(d!==null&&d(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var v=S1(s,e);vn(t,l,v,Rt(t))}else vn(t,l,e,Rt(t))}catch(y){vn(t,l,{then:function(){},status:"rejected",reason:y},Rt())}finally{K.p=i,u!==null&&c.types!==null&&(u.types=c.types),O.T=u}}function D1(){}function ec(t,l,a,e){if(t.tag!==5)throw Error(E(476));var n=$d(t).queue;Fd(t,n,l,Oa,a===null?D1:function(){return Wd(t),a(e)})}function $d(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:Oa,baseState:Oa,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:Oa},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ql,lastRenderedState:a},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function Wd(t){var l=$d(t);l.next===null&&(l=t.alternate.memoizedState),vn(t,l.next.queue,{},Rt())}function as(){return Dt(wn)}function Rd(){return dt().memoizedState}function Id(){return dt().memoizedState}function k1(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var a=Rt();t=ra(a);var e=da(l,t,a);e!==null&&(Xt(e,l,a),mn(e,l,a)),l={cache:Lc()},t.payload=l;return}l=l.return}}function B1(t,l,a){var e=Rt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Su(t)?t0(l,a):(a=Hc(t,l,a,e),a!==null&&(Xt(a,t,e),l0(a,l,e)))}function Pd(t,l,a){var e=Rt();vn(t,l,a,e)}function vn(t,l,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Su(t))t0(l,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=l.lastRenderedReducer,i!==null))try{var u=l.lastRenderedState,c=i(u,a);if(n.hasEagerState=!0,n.eagerState=c,It(c,u))return yu(t,l,n,0),I===null&&vu(),!1}catch{}if(a=Hc(t,l,n,e),a!==null)return Xt(a,t,e),l0(a,l,e),!0}return!1}function es(t,l,a,e){if(e={lane:2,revertLane:ds(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Su(t)){if(l)throw Error(E(479))}else l=Hc(t,a,e,2),l!==null&&Xt(l,t,2)}function Su(t){var l=t.alternate;return t===q||l!==null&&l===q}function t0(t,l){Ae=$i=!0;var a=t.pending;a===null?l.next=l:(l.next=a.next,a.next=l),t.pending=l}function l0(t,l,a){if((a&4194048)!==0){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,jr(t,a)}}var Bn={readContext:Dt,use:xu,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useLayoutEffect:st,useInsertionEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useSyncExternalStore:st,useId:st,useHostTransitionStatus:st,useFormState:st,useActionState:st,useOptimistic:st,useMemoCache:st,useCacheRefresh:st};Bn.useEffectEvent=st;var a0={readContext:Dt,use:xu,useCallback:function(t,l){return _t().memoizedState=[t,l===void 0?null:l],t},useContext:Dt,useEffect:Xf,useImperativeHandle:function(t,l,a){a=a!=null?a.concat([t]):null,ki(4194308,4,Qd.bind(null,l,t),a)},useLayoutEffect:function(t,l){return ki(4194308,4,t,l)},useInsertionEffect:function(t,l){ki(4,2,t,l)},useMemo:function(t,l){var a=_t();l=l===void 0?null:l;var e=t();if(Xa){na(!0);try{t()}finally{na(!1)}}return a.memoizedState=[e,l],e},useReducer:function(t,l,a){var e=_t();if(a!==void 0){var n=a(l);if(Xa){na(!0);try{a(l)}finally{na(!1)}}}else n=l;return e.memoizedState=e.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},e.queue=t,t=t.dispatch=B1.bind(null,q,t),[e.memoizedState,t]},useRef:function(t){var l=_t();return t={current:t},l.memoizedState=t},useState:function(t){t=lc(t);var l=t.queue,a=Pd.bind(null,q,l);return l.dispatch=a,[t.memoizedState,a]},useDebugValue:ts,useDeferredValue:function(t,l){var a=_t();return ls(a,t,l)},useTransition:function(){var t=lc(!1);return t=Fd.bind(null,q,t.queue,!0,!1),_t().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,a){var e=q,n=_t();if(Z){if(a===void 0)throw Error(E(407));a=a()}else{if(a=l(),I===null)throw Error(E(349));(Q&127)!==0||kd(e,l,a)}n.memoizedState=a;var i={value:a,getSnapshot:l};return n.queue=i,Xf(Od.bind(null,e,i,t),[t]),e.flags|=2048,Be(9,{destroy:void 0},Bd.bind(null,e,i,a,l),null),a},useId:function(){var t=_t(),l=I.identifierPrefix;if(Z){var a=bl,e=gl;a=(e&~(1<<32-Wt(e)-1)).toString(32)+a,l="_"+l+"R_"+a,a=Wi++,0<a&&(l+="H"+a.toString(32)),l+="_"}else a=A1++,l="_"+l+"r_"+a.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:as,useFormState:qf,useActionState:qf,useOptimistic:function(t){var l=_t();l.memoizedState=l.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=es.bind(null,q,!0,a),a.dispatch=l,[t,l]},useMemoCache:Rc,useCacheRefresh:function(){return _t().memoizedState=k1.bind(null,q)},useEffectEvent:function(t){var l=_t(),a={impl:t};return l.memoizedState=a,function(){if((J&2)!==0)throw Error(E(440));return a.impl.apply(void 0,arguments)}}},ns={readContext:Dt,use:xu,useCallback:Vd,useContext:Dt,useEffect:Pc,useImperativeHandle:Zd,useInsertionEffect:Ld,useLayoutEffect:Gd,useMemo:Jd,useReducer:Di,useRef:Xd,useState:function(){return Di(Ql)},useDebugValue:ts,useDeferredValue:function(t,l){var a=dt();return Kd(a,R.memoizedState,t,l)},useTransition:function(){var t=Di(Ql)[0],l=dt().memoizedState;return[typeof t=="boolean"?t:Qn(t),l]},useSyncExternalStore:Dd,useId:Rd,useHostTransitionStatus:as,useFormState:Hf,useActionState:Hf,useOptimistic:function(t,l){var a=dt();return _d(a,R,t,l)},useMemoCache:Rc,useCacheRefresh:Id};ns.useEffectEvent=jd;var e0={readContext:Dt,use:xu,useCallback:Vd,useContext:Dt,useEffect:Pc,useImperativeHandle:Zd,useInsertionEffect:Ld,useLayoutEffect:Gd,useMemo:Jd,useReducer:fo,useRef:Xd,useState:function(){return fo(Ql)},useDebugValue:ts,useDeferredValue:function(t,l){var a=dt();return R===null?ls(a,t,l):Kd(a,R.memoizedState,t,l)},useTransition:function(){var t=fo(Ql)[0],l=dt().memoizedState;return[typeof t=="boolean"?t:Qn(t),l]},useSyncExternalStore:Dd,useId:Rd,useHostTransitionStatus:as,useFormState:Yf,useActionState:Yf,useOptimistic:function(t,l){var a=dt();return R!==null?_d(a,R,t,l):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Rc,useCacheRefresh:Id};e0.useEffectEvent=jd;function ro(t,l,a,e){l=t.memoizedState,a=a(e,l),a=a==null?l:et({},l,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nc={enqueueSetState:function(t,l,a){t=t._reactInternals;var e=Rt(),n=ra(e);n.payload=l,a!=null&&(n.callback=a),l=da(t,n,e),l!==null&&(Xt(l,t,e),mn(l,t,e))},enqueueReplaceState:function(t,l,a){t=t._reactInternals;var e=Rt(),n=ra(e);n.tag=1,n.payload=l,a!=null&&(n.callback=a),l=da(t,n,e),l!==null&&(Xt(l,t,e),mn(l,t,e))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var a=Rt(),e=ra(a);e.tag=2,l!=null&&(e.callback=l),l=da(t,e,a),l!==null&&(Xt(l,t,a),mn(l,t,a))}};function jf(t,l,a,e,n,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,i,u):l.prototype&&l.prototype.isPureReactComponent?!zn(a,e)||!zn(n,i):!0}function Lf(t,l,a,e){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,e),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,e),l.state!==t&&nc.enqueueReplaceState(l,l.state,null)}function ja(t,l){var a=l;if("ref"in l){a={};for(var e in l)e!=="ref"&&(a[e]=l[e])}if(t=t.defaultProps){a===l&&(a=et({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function n0(t){Gi(t)}function i0(t){console.error(t)}function u0(t){Gi(t)}function Ri(t,l){try{var a=t.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(e){setTimeout(function(){throw e})}}function Gf(t,l,a){try{var e=t.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function ic(t,l,a){return a=ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Ri(t,l)},a}function o0(t){return t=ra(t),t.tag=3,t}function c0(t,l,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=e.value;t.payload=function(){return n(i)},t.callback=function(){Gf(l,a,e)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Gf(l,a,e),typeof n!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function O1(t,l,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(l=a.alternate,l!==null&&Ye(l,a,n,!0),a=Pt.current,a!==null){switch(a.tag){case 31:case 13:return sl===null?au():a.alternate===null&&ft===0&&(ft=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===Ji?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([e]):l.add(e),Ao(t,e,n)),!1;case 22:return a.flags|=65536,e===Ji?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([e]):a.add(e)),Ao(t,e,n)),!1}throw Error(E(435,a.tag))}return Ao(t,e,n),au(),!1}if(Z)return l=Pt.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,e!==Jo&&(t=Error(E(422),{cause:e}),Mn(ol(t,a)))):(e!==Jo&&(l=Error(E(423),{cause:e}),Mn(ol(l,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,e=ol(e,a),n=ic(t.stateNode,e,n),so(t,n),ft!==4&&(ft=2)),!1;var i=Error(E(520),{cause:e});if(i=ol(i,a),bn===null?bn=[i]:bn.push(i),ft!==4&&(ft=2),l===null)return!0;e=ol(e,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=ic(a.stateNode,e,t),so(a,t),!1;case 1:if(l=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ma===null||!ma.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=o0(n),c0(n,t,a,e),so(a,n),!1}a=a.return}while(a!==null);return!1}var is=Error(E(461)),yt=!1;function zt(t,l,a,e){l.child=t===null?Sd(l,null,a,e):Ya(l,t.child,a,e)}function Qf(t,l,a,e,n){a=a.render;var i=l.ref;if("ref"in e){var u={};for(var c in e)c!=="ref"&&(u[c]=e[c])}else u=e;return Ha(l),e=Kc(t,l,a,u,i,n),c=Fc(),t!==null&&!yt?($c(t,l,n),Zl(t,l,n)):(Z&&c&&Xc(l),l.flags|=1,zt(t,l,e,n),l.child)}function Zf(t,l,a,e,n){if(t===null){var i=a.type;return typeof i=="function"&&!Yc(i)&&i.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=i,s0(t,l,i,e,n)):(t=Ti(a.type,null,e,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(i=t.child,!us(t,n)){var u=i.memoizedProps;if(a=a.compare,a=a!==null?a:zn,a(u,e)&&t.ref===l.ref)return Zl(t,l,n)}return l.flags|=1,t=Yl(i,e),t.ref=l.ref,t.return=l,l.child=t}function s0(t,l,a,e,n){if(t!==null){var i=t.memoizedProps;if(zn(i,e)&&t.ref===l.ref)if(yt=!1,l.pendingProps=e=i,us(t,n))(t.flags&131072)!==0&&(yt=!0);else return l.lanes=t.lanes,Zl(t,l,n)}return uc(t,l,a,e,n)}function f0(t,l,a,e){var n=e.children,i=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((l.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,t!==null){for(e=l.child=t.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~i}else e=0,l.child=null;return Vf(t,l,i,a,e)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Mi(l,i!==null?i.cachePool:null),i!==null?wf(l,i):Po(),zd(l);else return e=l.lanes=536870912,Vf(t,l,i!==null?i.baseLanes|a:a,a,e)}else i!==null?(Mi(l,i.cachePool),wf(l,i),aa(l),l.memoizedState=null):(t!==null&&Mi(l,null),Po(),aa(l));return zt(t,l,n,a),l.child}function on(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Vf(t,l,a,e,n){var i=Gc();return i=i===null?null:{parent:vt._currentValue,pool:i},l.memoizedState={baseLanes:a,cachePool:i},t!==null&&Mi(l,null),Po(),zd(l),t!==null&&Ye(t,l,e,!0),l.childLanes=n,null}function Bi(t,l){return l=Ii({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function Jf(t,l,a){return Ya(l,t.child,null,a),t=Bi(l,l.pendingProps),t.flags|=2,Vt(l),l.memoizedState=null,t}function C1(t,l,a){var e=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(Z){if(e.mode==="hidden")return t=Bi(l,e),l.lanes=536870912,on(null,t);if(tc(l),(t=at)?(t=am(t,cl),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ga!==null?{id:gl,overflow:bl}:null,retryLane:536870912,hydrationErrors:null},a=hd(t),a.return=l,l.child=a,Mt=l,at=null)):t=null,t===null)throw ba(l);return l.lanes=536870912,null}return Bi(l,e)}var i=t.memoizedState;if(i!==null){var u=i.dehydrated;if(tc(l),n)if(l.flags&256)l.flags&=-257,l=Jf(t,l,a);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(E(558));else if(yt||Ye(t,l,a,!1),n=(a&t.childLanes)!==0,yt||n){if(e=I,e!==null&&(u=Lr(e,a),u!==0&&u!==i.retryLane))throw i.retryLane=u,Za(t,u),Xt(e,t,u),is;au(),l=Jf(t,l,a)}else t=i.treeContext,at=fl(u.nextSibling),Mt=l,Z=!0,fa=null,cl=!1,t!==null&&yd(l,t),l=Bi(l,e),l.flags|=4096;return l}return t=Yl(t.child,{mode:e.mode,children:e.children}),t.ref=l.ref,l.child=t,t.return=l,t}function Oi(t,l){var a=l.ref;if(a===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(E(284));(t===null||t.ref!==a)&&(l.flags|=4194816)}}function uc(t,l,a,e,n){return Ha(l),a=Kc(t,l,a,e,void 0,n),e=Fc(),t!==null&&!yt?($c(t,l,n),Zl(t,l,n)):(Z&&e&&Xc(l),l.flags|=1,zt(t,l,a,n),l.child)}function Kf(t,l,a,e,n,i){return Ha(l),l.updateQueue=null,a=Md(l,e,a,n),Td(t),e=Fc(),t!==null&&!yt?($c(t,l,i),Zl(t,l,i)):(Z&&e&&Xc(l),l.flags|=1,zt(t,l,a,i),l.child)}function Ff(t,l,a,e,n){if(Ha(l),l.stateNode===null){var i=pe,u=a.contextType;typeof u=="object"&&u!==null&&(i=Dt(u)),i=new a(e,i),l.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nc,l.stateNode=i,i._reactInternals=l,i=l.stateNode,i.props=e,i.state=l.memoizedState,i.refs={},Zc(l),u=a.contextType,i.context=typeof u=="object"&&u!==null?Dt(u):pe,i.state=l.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(ro(l,a,u,e),i.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&nc.enqueueReplaceState(i,i.state,null),hn(l,e,i,n),pn(),i.state=l.memoizedState),typeof i.componentDidMount=="function"&&(l.flags|=4194308),e=!0}else if(t===null){i=l.stateNode;var c=l.memoizedProps,s=ja(a,c);i.props=s;var d=i.context,v=a.contextType;u=pe,typeof v=="object"&&v!==null&&(u=Dt(v));var y=a.getDerivedStateFromProps;v=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||d!==u)&&Lf(l,i,e,u),Pl=!1;var m=l.memoizedState;i.state=m,hn(l,e,i,n),pn(),d=l.memoizedState,c||m!==d||Pl?(typeof y=="function"&&(ro(l,a,y,e),d=l.memoizedState),(s=Pl||jf(l,a,s,e,m,d,u))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(l.flags|=4194308)):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=e,l.memoizedState=d),i.props=e,i.state=d,i.context=u,e=s):(typeof i.componentDidMount=="function"&&(l.flags|=4194308),e=!1)}else{i=l.stateNode,Ro(t,l),u=l.memoizedProps,v=ja(a,u),i.props=v,y=l.pendingProps,m=i.context,d=a.contextType,s=pe,typeof d=="object"&&d!==null&&(s=Dt(d)),c=a.getDerivedStateFromProps,(d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==y||m!==s)&&Lf(l,i,e,s),Pl=!1,m=l.memoizedState,i.state=m,hn(l,e,i,n),pn();var p=l.memoizedState;u!==y||m!==p||Pl||t!==null&&t.dependencies!==null&&Vi(t.dependencies)?(typeof c=="function"&&(ro(l,a,c,e),p=l.memoizedState),(v=Pl||jf(l,a,v,e,m,p,s)||t!==null&&t.dependencies!==null&&Vi(t.dependencies))?(d||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,p,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,p,s)),typeof i.componentDidUpdate=="function"&&(l.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(l.flags|=1024),l.memoizedProps=e,l.memoizedState=p),i.props=e,i.state=p,i.context=s,e=v):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(l.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&m===t.memoizedState||(l.flags|=1024),e=!1)}return i=e,Oi(t,l),e=(l.flags&128)!==0,i||e?(i=l.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:i.render(),l.flags|=1,t!==null&&e?(l.child=Ya(l,t.child,null,n),l.child=Ya(l,null,a,n)):zt(t,l,a,n),l.memoizedState=i.state,t=l.child):t=Zl(t,l,n),t}function $f(t,l,a,e){return qa(),l.flags|=256,zt(t,l,a,e),l.child}var mo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function po(t){return{baseLanes:t,cachePool:bd()}}function ho(t,l,a){return t=t!==null?t.childLanes&~a:0,l&&(t|=Kt),t}function r0(t,l,a){var e=l.pendingProps,n=!1,i=(l.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(rt.current&2)!==0),u&&(n=!0,l.flags&=-129),u=(l.flags&32)!==0,l.flags&=-33,t===null){if(Z){if(n?la(l):aa(l),(t=at)?(t=am(t,cl),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ga!==null?{id:gl,overflow:bl}:null,retryLane:536870912,hydrationErrors:null},a=hd(t),a.return=l,l.child=a,Mt=l,at=null)):t=null,t===null)throw ba(l);return xc(t)?l.lanes=32:l.lanes=536870912,null}var c=e.children;return e=e.fallback,n?(aa(l),n=l.mode,c=Ii({mode:"hidden",children:c},n),e=Ca(e,n,a,null),c.return=l,e.return=l,c.sibling=e,l.child=c,e=l.child,e.memoizedState=po(a),e.childLanes=ho(t,u,a),l.memoizedState=mo,on(null,e)):(la(l),oc(l,c))}var s=t.memoizedState;if(s!==null&&(c=s.dehydrated,c!==null)){if(i)l.flags&256?(la(l),l.flags&=-257,l=vo(t,l,a)):l.memoizedState!==null?(aa(l),l.child=t.child,l.flags|=128,l=null):(aa(l),c=e.fallback,n=l.mode,e=Ii({mode:"visible",children:e.children},n),c=Ca(c,n,a,null),c.flags|=2,e.return=l,c.return=l,e.sibling=c,l.child=e,Ya(l,t.child,null,a),e=l.child,e.memoizedState=po(a),e.childLanes=ho(t,u,a),l.memoizedState=mo,l=on(null,e));else if(la(l),xc(c)){if(u=c.nextSibling&&c.nextSibling.dataset,u)var d=u.dgst;u=d,e=Error(E(419)),e.stack="",e.digest=u,Mn({value:e,source:null,stack:null}),l=vo(t,l,a)}else if(yt||Ye(t,l,a,!1),u=(a&t.childLanes)!==0,yt||u){if(u=I,u!==null&&(e=Lr(u,a),e!==0&&e!==s.retryLane))throw s.retryLane=e,Za(t,e),Xt(u,t,e),is;bc(c)||au(),l=vo(t,l,a)}else bc(c)?(l.flags|=192,l.child=t.child,l=null):(t=s.treeContext,at=fl(c.nextSibling),Mt=l,Z=!0,fa=null,cl=!1,t!==null&&yd(l,t),l=oc(l,e.children),l.flags|=4096);return l}return n?(aa(l),c=e.fallback,n=l.mode,s=t.child,d=s.sibling,e=Yl(s,{mode:"hidden",children:e.children}),e.subtreeFlags=s.subtreeFlags&65011712,d!==null?c=Yl(d,c):(c=Ca(c,n,a,null),c.flags|=2),c.return=l,e.return=l,e.sibling=c,l.child=e,on(null,e),e=l.child,c=t.child.memoizedState,c===null?c=po(a):(n=c.cachePool,n!==null?(s=vt._currentValue,n=n.parent!==s?{parent:s,pool:s}:n):n=bd(),c={baseLanes:c.baseLanes|a,cachePool:n}),e.memoizedState=c,e.childLanes=ho(t,u,a),l.memoizedState=mo,on(t.child,e)):(la(l),a=t.child,t=a.sibling,a=Yl(a,{mode:"visible",children:e.children}),a.return=l,a.sibling=null,t!==null&&(u=l.deletions,u===null?(l.deletions=[t],l.flags|=16):u.push(t)),l.child=a,l.memoizedState=null,a)}function oc(t,l){return l=Ii({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function Ii(t,l){return t=Jt(22,t,null,l),t.lanes=0,t}function vo(t,l,a){return Ya(l,t.child,null,a),t=oc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Wf(t,l,a){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l),Fo(t.return,l,a)}function yo(t,l,a,e,n,i){var u=t.memoizedState;u===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:i}:(u.isBackwards=l,u.rendering=null,u.renderingStartTime=0,u.last=e,u.tail=a,u.tailMode=n,u.treeForkCount=i)}function d0(t,l,a){var e=l.pendingProps,n=e.revealOrder,i=e.tail;e=e.children;var u=rt.current,c=(u&2)!==0;if(c?(u=u&1|2,l.flags|=128):u&=1,P(rt,u),zt(t,l,e,a),e=Z?Tn:0,!c&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,a,l);else if(t.tag===19)Wf(t,a,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=l.child,n=null;a!==null;)t=a.alternate,t!==null&&Fi(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=l.child,l.child=null):(n=a.sibling,a.sibling=null),yo(l,!1,n,a,i,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&Fi(t)===null){l.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}yo(l,!0,a,null,i,e);break;case"together":yo(l,!1,null,null,void 0,e);break;default:l.memoizedState=null}return l.child}function Zl(t,l,a){if(t!==null&&(l.dependencies=t.dependencies),Ea|=l.lanes,(a&l.childLanes)===0)if(t!==null){if(Ye(t,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(E(153));if(l.child!==null){for(t=l.child,a=Yl(t,t.pendingProps),l.child=a,a.return=l;t.sibling!==null;)t=t.sibling,a=a.sibling=Yl(t,t.pendingProps),a.return=l;a.sibling=null}return l.child}function us(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Vi(t)))}function w1(t,l,a){switch(l.tag){case 3:Yi(l,l.stateNode.containerInfo),ta(l,vt,t.memoizedState.cache),qa();break;case 27:case 5:Uo(l);break;case 4:Yi(l,l.stateNode.containerInfo);break;case 10:ta(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,tc(l),null;break;case 13:var e=l.memoizedState;if(e!==null)return e.dehydrated!==null?(la(l),l.flags|=128,null):(a&l.child.childLanes)!==0?r0(t,l,a):(la(l),t=Zl(t,l,a),t!==null?t.sibling:null);la(l);break;case 19:var n=(t.flags&128)!==0;if(e=(a&l.childLanes)!==0,e||(Ye(t,l,a,!1),e=(a&l.childLanes)!==0),n){if(e)return d0(t,l,a);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),P(rt,rt.current),e)break;return null;case 22:return l.lanes=0,f0(t,l,a,l.pendingProps);case 24:ta(l,vt,t.memoizedState.cache)}return Zl(t,l,a)}function m0(t,l,a){if(t!==null)if(t.memoizedProps!==l.pendingProps)yt=!0;else{if(!us(t,a)&&(l.flags&128)===0)return yt=!1,w1(t,l,a);yt=(t.flags&131072)!==0}else yt=!1,Z&&(l.flags&1048576)!==0&&vd(l,Tn,l.index);switch(l.lanes=0,l.tag){case 16:t:{var e=l.pendingProps;if(t=ka(l.elementType),l.type=t,typeof t=="function")Yc(t)?(e=ja(t,e),l.tag=1,l=Ff(null,l,t,e,a)):(l.tag=0,l=uc(null,l,t,e,a));else{if(t!=null){var n=t.$$typeof;if(n===Nc){l.tag=11,l=Qf(null,l,t,e,a);break t}else if(n===zc){l.tag=14,l=Zf(null,l,t,e,a);break t}}throw l=wo(t)||t,Error(E(306,l,""))}}return l;case 0:return uc(t,l,l.type,l.pendingProps,a);case 1:return e=l.type,n=ja(e,l.pendingProps),Ff(t,l,e,n,a);case 3:t:{if(Yi(l,l.stateNode.containerInfo),t===null)throw Error(E(387));e=l.pendingProps;var i=l.memoizedState;n=i.element,Ro(t,l),hn(l,e,null,a);var u=l.memoizedState;if(e=u.cache,ta(l,vt,e),e!==i.cache&&$o(l,[vt],a,!0),pn(),e=u.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:u.cache},l.updateQueue.baseState=i,l.memoizedState=i,l.flags&256){l=$f(t,l,e,a);break t}else if(e!==n){n=ol(Error(E(424)),l),Mn(n),l=$f(t,l,e,a);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,at=fl(t.firstChild),Mt=l,Z=!0,fa=null,cl=!0,a=Sd(l,null,e,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(qa(),e===n){l=Zl(t,l,a);break t}zt(t,l,e,a)}l=l.child}return l;case 26:return Oi(t,l),t===null?(a=gr(l.type,null,l.pendingProps,null))?l.memoizedState=a:Z||(a=l.type,t=l.pendingProps,e=uu(sa.current).createElement(a),e[Tt]=l,e[jt]=t,kt(e,a,t),At(e),l.stateNode=e):l.memoizedState=gr(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Uo(l),t===null&&Z&&(e=l.stateNode=em(l.type,l.pendingProps,sa.current),Mt=l,cl=!0,n=at,Aa(l.type)?(Ec=n,at=fl(e.firstChild)):at=n),zt(t,l,l.pendingProps.children,a),Oi(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&Z&&((n=e=at)&&(e=oh(e,l.type,l.pendingProps,cl),e!==null?(l.stateNode=e,Mt=l,at=fl(e.firstChild),cl=!1,n=!0):n=!1),n||ba(l)),Uo(l),n=l.type,i=l.pendingProps,u=t!==null?t.memoizedProps:null,e=i.children,yc(n,i)?e=null:u!==null&&yc(n,u)&&(l.flags|=32),l.memoizedState!==null&&(n=Kc(t,l,N1,null,null,a),wn._currentValue=n),Oi(t,l),zt(t,l,e,a),l.child;case 6:return t===null&&Z&&((t=a=at)&&(a=ch(a,l.pendingProps,cl),a!==null?(l.stateNode=a,Mt=l,at=null,t=!0):t=!1),t||ba(l)),null;case 13:return r0(t,l,a);case 4:return Yi(l,l.stateNode.containerInfo),e=l.pendingProps,t===null?l.child=Ya(l,null,e,a):zt(t,l,e,a),l.child;case 11:return Qf(t,l,l.type,l.pendingProps,a);case 7:return zt(t,l,l.pendingProps,a),l.child;case 8:return zt(t,l,l.pendingProps.children,a),l.child;case 12:return zt(t,l,l.pendingProps.children,a),l.child;case 10:return e=l.pendingProps,ta(l,l.type,e.value),zt(t,l,e.children,a),l.child;case 9:return n=l.type._context,e=l.pendingProps.children,Ha(l),n=Dt(n),e=e(n),l.flags|=1,zt(t,l,e,a),l.child;case 14:return Zf(t,l,l.type,l.pendingProps,a);case 15:return s0(t,l,l.type,l.pendingProps,a);case 19:return d0(t,l,a);case 31:return C1(t,l,a);case 22:return f0(t,l,a,l.pendingProps);case 24:return Ha(l),e=Dt(vt),t===null?(n=Gc(),n===null&&(n=I,i=Lc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),l.memoizedState={parent:e,cache:n},Zc(l),ta(l,vt,n)):((t.lanes&a)!==0&&(Ro(t,l),hn(l,null,null,a),pn()),n=t.memoizedState,i=l.memoizedState,n.parent!==e?(n={parent:e,cache:e},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),ta(l,vt,e)):(e=i.cache,ta(l,vt,e),e!==n.cache&&$o(l,[vt],a,!0))),zt(t,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(E(156,l.tag))}function kl(t){t.flags|=4}function go(t,l,a,e,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(H0())t.flags|=8192;else throw _a=Ji,Qc}else t.flags&=-16777217}function Rf(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!um(l))if(H0())t.flags|=8192;else throw _a=Ji,Qc}function hi(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?Yr():536870912,t.lanes|=l,Oe|=l)}function Pe(t,l){if(!Z)switch(t.tailMode){case"hidden":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function lt(t){var l=t.alternate!==null&&t.alternate.child===t.child,a=0,e=0;if(l)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=e,t.childLanes=a,l}function _1(t,l,a){var e=l.pendingProps;switch(jc(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(l),null;case 1:return lt(l),null;case 3:return a=l.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Xl(vt),ze(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ae(l)?kl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,co())),lt(l),null;case 26:var n=l.type,i=l.memoizedState;return t===null?(kl(l),i!==null?(lt(l),Rf(l,i)):(lt(l),go(l,n,null,e,a))):i?i!==t.memoizedState?(kl(l),lt(l),Rf(l,i)):(lt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==e&&kl(l),lt(l),go(l,n,t,e,a)),null;case 27:if(Xi(l),a=sa.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&kl(l);else{if(!e){if(l.stateNode===null)throw Error(E(166));return lt(l),null}t=El.current,ae(l)?Tf(l,t):(t=em(n,e,a),l.stateNode=t,kl(l))}return lt(l),null;case 5:if(Xi(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&kl(l);else{if(!e){if(l.stateNode===null)throw Error(E(166));return lt(l),null}if(i=El.current,ae(l))Tf(l,i);else{var u=uu(sa.current);switch(i){case 1:i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=u.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=u.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=u.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?u.createElement("select",{is:e.is}):u.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?u.createElement(n,{is:e.is}):u.createElement(n)}}i[Tt]=l,i[jt]=e;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)i.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=i;t:switch(kt(i,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&kl(l)}}return lt(l),go(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,a),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==e&&kl(l);else{if(typeof e!="string"&&l.stateNode===null)throw Error(E(166));if(t=sa.current,ae(l)){if(t=l.stateNode,a=l.memoizedProps,e=null,n=Mt,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}t[Tt]=l,t=!!(t.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||P0(t.nodeValue,a)),t||ba(l,!0)}else t=uu(t).createTextNode(e),t[Tt]=l,l.stateNode=t}return lt(l),null;case 31:if(a=l.memoizedState,t===null||t.memoizedState!==null){if(e=ae(l),a!==null){if(t===null){if(!e)throw Error(E(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(557));t[Tt]=l}else qa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;lt(l),t=!1}else a=co(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return l.flags&256?(Vt(l),l):(Vt(l),null);if((l.flags&128)!==0)throw Error(E(558))}return lt(l),null;case 13:if(e=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=ae(l),e!==null&&e.dehydrated!==null){if(t===null){if(!n)throw Error(E(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[Tt]=l}else qa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;lt(l),n=!1}else n=co(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(Vt(l),l):(Vt(l),null)}return Vt(l),(l.flags&128)!==0?(l.lanes=a,l):(a=e!==null,t=t!==null&&t.memoizedState!==null,a&&(e=l.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048)),a!==t&&a&&(l.child.flags|=8192),hi(l,l.updateQueue),lt(l),null);case 4:return ze(),t===null&&ms(l.stateNode.containerInfo),lt(l),null;case 10:return Xl(l.type),lt(l),null;case 19:if(Nt(rt),e=l.memoizedState,e===null)return lt(l),null;if(n=(l.flags&128)!==0,i=e.rendering,i===null)if(n)Pe(e,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(i=Fi(t),i!==null){for(l.flags|=128,Pe(e,!1),t=i.updateQueue,l.updateQueue=t,hi(l,t),l.subtreeFlags=0,t=a,a=l.child;a!==null;)pd(a,t),a=a.sibling;return P(rt,rt.current&1|2),Z&&wl(l,e.treeForkCount),l.child}t=t.sibling}e.tail!==null&&Ft()>tu&&(l.flags|=128,n=!0,Pe(e,!1),l.lanes=4194304)}else{if(!n)if(t=Fi(i),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,hi(l,t),Pe(e,!0),e.tail===null&&e.tailMode==="hidden"&&!i.alternate&&!Z)return lt(l),null}else 2*Ft()-e.renderingStartTime>tu&&a!==536870912&&(l.flags|=128,n=!0,Pe(e,!1),l.lanes=4194304);e.isBackwards?(i.sibling=l.child,l.child=i):(t=e.last,t!==null?t.sibling=i:l.child=i,e.last=i)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Ft(),t.sibling=null,a=rt.current,P(rt,n?a&1|2:a&1),Z&&wl(l,e.treeForkCount),t):(lt(l),null);case 22:case 23:return Vt(l),Vc(),e=l.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(l.flags|=8192):e&&(l.flags|=8192),e?(a&536870912)!==0&&(l.flags&128)===0&&(lt(l),l.subtreeFlags&6&&(l.flags|=8192)):lt(l),a=l.updateQueue,a!==null&&hi(l,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(l.flags|=2048),t!==null&&Nt(wa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Xl(vt),lt(l),null;case 25:return null;case 30:return null}throw Error(E(156,l.tag))}function U1(t,l){switch(jc(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Xl(vt),ze(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return Xi(l),null;case 31:if(l.memoizedState!==null){if(Vt(l),l.alternate===null)throw Error(E(340));qa()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(Vt(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(E(340));qa()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return Nt(rt),null;case 4:return ze(),null;case 10:return Xl(l.type),null;case 22:case 23:return Vt(l),Vc(),t!==null&&Nt(wa),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Xl(vt),null;case 25:return null;default:return null}}function p0(t,l){switch(jc(l),l.tag){case 3:Xl(vt),ze();break;case 26:case 27:case 5:Xi(l);break;case 4:ze();break;case 31:l.memoizedState!==null&&Vt(l);break;case 13:Vt(l);break;case 19:Nt(rt);break;case 10:Xl(l.type);break;case 22:case 23:Vt(l),Vc(),t!==null&&Nt(wa);break;case 24:Xl(vt)}}function Zn(t,l){try{var a=l.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&t)===t){e=void 0;var i=a.create,u=a.inst;e=i(),u.destroy=e}a=a.next}while(a!==n)}}catch(c){$(l,l.return,c)}}function xa(t,l,a){try{var e=l.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var i=n.next;e=i;do{if((e.tag&t)===t){var u=e.inst,c=u.destroy;if(c!==void 0){u.destroy=void 0,n=l;var s=a,d=c;try{d()}catch(v){$(n,s,v)}}}e=e.next}while(e!==i)}}catch(v){$(l,l.return,v)}}function h0(t){var l=t.updateQueue;if(l!==null){var a=t.stateNode;try{Nd(l,a)}catch(e){$(t,t.return,e)}}}function v0(t,l,a){a.props=ja(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(e){$(t,l,e)}}function yn(t,l){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof a=="function"?t.refCleanup=a(e):a.current=e}}catch(n){$(t,l,n)}}function xl(t,l){var a=t.ref,e=t.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){$(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){$(t,l,n)}else a.current=null}function y0(t){var l=t.type,a=t.memoizedProps,e=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break t;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){$(t,t.return,n)}}function bo(t,l,a){try{var e=t.stateNode;lh(e,t.type,a,l),e[jt]=l}catch(n){$(t,t.return,n)}}function g0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function xo(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(t),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=ql));else if(e!==4&&(e===27&&Aa(t.type)&&(a=t.stateNode,l=null),t=t.child,t!==null))for(cc(t,l,a),t=t.sibling;t!==null;)cc(t,l,a),t=t.sibling}function Pi(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?a.insertBefore(t,l):a.appendChild(t);else if(e!==4&&(e===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Pi(t,l,a),t=t.sibling;t!==null;)Pi(t,l,a),t=t.sibling}function b0(t){var l=t.stateNode,a=t.memoizedProps;try{for(var e=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);kt(l,e,a),l[Tt]=t,l[jt]=a}catch(i){$(t,t.return,i)}}var _l=!1,ht=!1,Eo=!1,If=typeof WeakSet=="function"?WeakSet:Set,St=null;function q1(t,l){if(t=t.containerInfo,hc=fu,t=ud(t),Uc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,i=e.focusNode;e=e.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break t}var u=0,c=-1,s=-1,d=0,v=0,y=t,m=null;l:for(;;){for(var p;y!==a||n!==0&&y.nodeType!==3||(c=u+n),y!==i||e!==0&&y.nodeType!==3||(s=u+e),y.nodeType===3&&(u+=y.nodeValue.length),(p=y.firstChild)!==null;)m=y,y=p;for(;;){if(y===t)break l;if(m===a&&++d===n&&(c=u),m===i&&++v===e&&(s=u),(p=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=p}a=c===-1||s===-1?null:{start:c,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(vc={focusedElem:t,selectionRange:a},fu=!1,St=l;St!==null;)if(l=St,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,St=t;else for(;St!==null;){switch(l=St,i=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,a=l,n=i.memoizedProps,i=i.memoizedState,e=a.stateNode;try{var x=ja(a.type,n);t=e.getSnapshotBeforeUpdate(x,i),e.__reactInternalSnapshotBeforeUpdate=t}catch(b){$(a,a.return,b)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,a=t.nodeType,a===9)gc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":gc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(E(163))}if(t=l.sibling,t!==null){t.return=l.return,St=t;break}St=l.return}}function x0(t,l,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:Ol(t,a),e&4&&Zn(5,a);break;case 1:if(Ol(t,a),e&4)if(t=a.stateNode,l===null)try{t.componentDidMount()}catch(u){$(a,a.return,u)}else{var n=ja(a.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(u){$(a,a.return,u)}}e&64&&h0(a),e&512&&yn(a,a.return);break;case 3:if(Ol(t,a),e&64&&(t=a.updateQueue,t!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{Nd(t,l)}catch(u){$(a,a.return,u)}}break;case 27:l===null&&e&4&&b0(a);case 26:case 5:Ol(t,a),l===null&&e&4&&y0(a),e&512&&yn(a,a.return);break;case 12:Ol(t,a);break;case 31:Ol(t,a),e&4&&A0(t,a);break;case 13:Ol(t,a),e&4&&N0(t,a),e&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=V1.bind(null,a),sh(t,a))));break;case 22:if(e=a.memoizedState!==null||_l,!e){l=l!==null&&l.memoizedState!==null||ht,n=_l;var i=ht;_l=e,(ht=l)&&!i?Cl(t,a,(a.subtreeFlags&8772)!==0):Ol(t,a),_l=n,ht=i}break;case 30:break;default:Ol(t,a)}}function E0(t){var l=t.alternate;l!==null&&(t.alternate=null,E0(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&kc(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var it=null,Ht=!1;function Bl(t,l,a){for(a=a.child;a!==null;)S0(t,l,a),a=a.sibling}function S0(t,l,a){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Hn,a)}catch{}switch(a.tag){case 26:ht||xl(a,l),Bl(t,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ht||xl(a,l);var e=it,n=Ht;Aa(a.type)&&(it=a.stateNode,Ht=!1),Bl(t,l,a),En(a.stateNode),it=e,Ht=n;break;case 5:ht||xl(a,l);case 6:if(e=it,n=Ht,it=null,Bl(t,l,a),it=e,Ht=n,it!==null)if(Ht)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(i){$(a,l,i)}else try{it.removeChild(a.stateNode)}catch(i){$(a,l,i)}break;case 18:it!==null&&(Ht?(t=it,mr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ue(t)):mr(it,a.stateNode));break;case 4:e=it,n=Ht,it=a.stateNode.containerInfo,Ht=!0,Bl(t,l,a),it=e,Ht=n;break;case 0:case 11:case 14:case 15:xa(2,a,l),ht||xa(4,a,l),Bl(t,l,a);break;case 1:ht||(xl(a,l),e=a.stateNode,typeof e.componentWillUnmount=="function"&&v0(a,l,e)),Bl(t,l,a);break;case 21:Bl(t,l,a);break;case 22:ht=(e=ht)||a.memoizedState!==null,Bl(t,l,a),ht=e;break;default:Bl(t,l,a)}}function A0(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ue(t)}catch(a){$(l,l.return,a)}}}function N0(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ue(t)}catch(a){$(l,l.return,a)}}function H1(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new If),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new If),l;default:throw Error(E(435,t.tag))}}function vi(t,l){var a=H1(t);l.forEach(function(e){if(!a.has(e)){a.add(e);var n=J1.bind(null,t,e);e.then(n,n)}})}function Ut(t,l){var a=l.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],i=t,u=l,c=u;t:for(;c!==null;){switch(c.tag){case 27:if(Aa(c.type)){it=c.stateNode,Ht=!1;break t}break;case 5:it=c.stateNode,Ht=!1;break t;case 3:case 4:it=c.stateNode.containerInfo,Ht=!0;break t}c=c.return}if(it===null)throw Error(E(160));S0(i,u,n),it=null,Ht=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)z0(l,t),l=l.sibling}var pl=null;function z0(t,l){var a=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Ut(l,t),qt(t),e&4&&(xa(3,t,t.return),Zn(3,t),xa(5,t,t.return));break;case 1:Ut(l,t),qt(t),e&512&&(ht||a===null||xl(a,a.return)),e&64&&_l&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=pl;if(Ut(l,t),qt(t),e&512&&(ht||a===null||xl(a,a.return)),e&4){var i=a!==null?a.memoizedState:null;if(e=t.memoizedState,a===null)if(e===null)if(t.stateNode===null){t:{e=t.type,a=t.memoizedProps,n=n.ownerDocument||n;l:switch(e){case"title":i=n.getElementsByTagName("title")[0],(!i||i[jn]||i[Tt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(e),n.head.insertBefore(i,n.querySelector("head > title"))),kt(i,e,a),i[Tt]=t,At(i),e=i;break t;case"link":var u=xr("link","href",n).get(e+(a.href||""));if(u){for(var c=0;c<u.length;c++)if(i=u[c],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(c,1);break l}}i=n.createElement(e),kt(i,e,a),n.head.appendChild(i);break;case"meta":if(u=xr("meta","content",n).get(e+(a.content||""))){for(c=0;c<u.length;c++)if(i=u[c],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(c,1);break l}}i=n.createElement(e),kt(i,e,a),n.head.appendChild(i);break;default:throw Error(E(468,e))}i[Tt]=t,At(i),e=i}t.stateNode=e}else Er(n,t.type,t.stateNode);else t.stateNode=br(n,e,t.memoizedProps);else i!==e?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,e===null?Er(n,t.type,t.stateNode):br(n,e,t.memoizedProps)):e===null&&t.stateNode!==null&&bo(t,t.memoizedProps,a.memoizedProps)}break;case 27:Ut(l,t),qt(t),e&512&&(ht||a===null||xl(a,a.return)),a!==null&&e&4&&bo(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Ut(l,t),qt(t),e&512&&(ht||a===null||xl(a,a.return)),t.flags&32){n=t.stateNode;try{Me(n,"")}catch(x){$(t,t.return,x)}}e&4&&t.stateNode!=null&&(n=t.memoizedProps,bo(t,n,a!==null?a.memoizedProps:n)),e&1024&&(Eo=!0);break;case 6:if(Ut(l,t),qt(t),e&4){if(t.stateNode===null)throw Error(E(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e}catch(x){$(t,t.return,x)}}break;case 3:if(_i=null,n=pl,pl=ou(l.containerInfo),Ut(l,t),pl=n,qt(t),e&4&&a!==null&&a.memoizedState.isDehydrated)try{Ue(l.containerInfo)}catch(x){$(t,t.return,x)}Eo&&(Eo=!1,T0(t));break;case 4:e=pl,pl=ou(t.stateNode.containerInfo),Ut(l,t),qt(t),pl=e;break;case 12:Ut(l,t),qt(t);break;case 31:Ut(l,t),qt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,vi(t,e)));break;case 13:Ut(l,t),qt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Au=Ft()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,vi(t,e)));break;case 22:n=t.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,d=_l,v=ht;if(_l=d||n,ht=v||s,Ut(l,t),ht=v,_l=d,qt(t),e&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(a===null||s||_l||ht||Ba(t)),a=null,l=t;;){if(l.tag===5||l.tag===26){if(a===null){s=a=l;try{if(i=s.stateNode,n)u=i.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{c=s.stateNode;var y=s.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null;c.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(x){$(s,s.return,x)}}}else if(l.tag===6){if(a===null){s=l;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(x){$(s,s.return,x)}}}else if(l.tag===18){if(a===null){s=l;try{var p=s.stateNode;n?pr(p,!0):pr(s.stateNode,!1)}catch(x){$(s,s.return,x)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}e&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,vi(t,a))));break;case 19:Ut(l,t),qt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,vi(t,e)));break;case 30:break;case 21:break;default:Ut(l,t),qt(t)}}function qt(t){var l=t.flags;if(l&2){try{for(var a,e=t.return;e!==null;){if(g0(e)){a=e;break}e=e.return}if(a==null)throw Error(E(160));switch(a.tag){case 27:var n=a.stateNode,i=xo(t);Pi(t,i,n);break;case 5:var u=a.stateNode;a.flags&32&&(Me(u,""),a.flags&=-33);var c=xo(t);Pi(t,c,u);break;case 3:case 4:var s=a.stateNode.containerInfo,d=xo(t);cc(t,d,s);break;default:throw Error(E(161))}}catch(v){$(t,t.return,v)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;T0(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function Ol(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)x0(t,l.alternate,l),l=l.sibling}function Ba(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:xa(4,l,l.return),Ba(l);break;case 1:xl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&v0(l,l.return,a),Ba(l);break;case 27:En(l.stateNode);case 26:case 5:xl(l,l.return),Ba(l);break;case 22:l.memoizedState===null&&Ba(l);break;case 30:Ba(l);break;default:Ba(l)}t=t.sibling}}function Cl(t,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var e=l.alternate,n=t,i=l,u=i.flags;switch(i.tag){case 0:case 11:case 15:Cl(n,i,a),Zn(4,i);break;case 1:if(Cl(n,i,a),e=i,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(d){$(e,e.return,d)}if(e=i,n=e.updateQueue,n!==null){var c=e.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Ad(s[n],c)}catch(d){$(e,e.return,d)}}a&&u&64&&h0(i),yn(i,i.return);break;case 27:b0(i);case 26:case 5:Cl(n,i,a),a&&e===null&&u&4&&y0(i),yn(i,i.return);break;case 12:Cl(n,i,a);break;case 31:Cl(n,i,a),a&&u&4&&A0(n,i);break;case 13:Cl(n,i,a),a&&u&4&&N0(n,i);break;case 22:i.memoizedState===null&&Cl(n,i,a),yn(i,i.return);break;case 30:break;default:Cl(n,i,a)}l=l.sibling}}function os(t,l){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gn(a))}function cs(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Gn(t))}function ml(t,l,a,e){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)M0(t,l,a,e),l=l.sibling}function M0(t,l,a,e){var n=l.flags;switch(l.tag){case 0:case 11:case 15:ml(t,l,a,e),n&2048&&Zn(9,l);break;case 1:ml(t,l,a,e);break;case 3:ml(t,l,a,e),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Gn(t)));break;case 12:if(n&2048){ml(t,l,a,e),t=l.stateNode;try{var i=l.memoizedProps,u=i.id,c=i.onPostCommit;typeof c=="function"&&c(u,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(s){$(l,l.return,s)}}else ml(t,l,a,e);break;case 31:ml(t,l,a,e);break;case 13:ml(t,l,a,e);break;case 23:break;case 22:i=l.stateNode,u=l.alternate,l.memoizedState!==null?i._visibility&2?ml(t,l,a,e):gn(t,l):i._visibility&2?ml(t,l,a,e):(i._visibility|=2,ne(t,l,a,e,(l.subtreeFlags&10256)!==0||!1)),n&2048&&os(u,l);break;case 24:ml(t,l,a,e),n&2048&&cs(l.alternate,l);break;default:ml(t,l,a,e)}}function ne(t,l,a,e,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var i=t,u=l,c=a,s=e,d=u.flags;switch(u.tag){case 0:case 11:case 15:ne(i,u,c,s,n),Zn(8,u);break;case 23:break;case 22:var v=u.stateNode;u.memoizedState!==null?v._visibility&2?ne(i,u,c,s,n):gn(i,u):(v._visibility|=2,ne(i,u,c,s,n)),n&&d&2048&&os(u.alternate,u);break;case 24:ne(i,u,c,s,n),n&&d&2048&&cs(u.alternate,u);break;default:ne(i,u,c,s,n)}l=l.sibling}}function gn(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=t,e=l,n=e.flags;switch(e.tag){case 22:gn(a,e),n&2048&&os(e.alternate,e);break;case 24:gn(a,e),n&2048&&cs(e.alternate,e);break;default:gn(a,e)}l=l.sibling}}var cn=8192;function ee(t,l,a){if(t.subtreeFlags&cn)for(t=t.child;t!==null;)D0(t,l,a),t=t.sibling}function D0(t,l,a){switch(t.tag){case 26:ee(t,l,a),t.flags&cn&&t.memoizedState!==null&&Eh(a,pl,t.memoizedState,t.memoizedProps);break;case 5:ee(t,l,a);break;case 3:case 4:var e=pl;pl=ou(t.stateNode.containerInfo),ee(t,l,a),pl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=cn,cn=16777216,ee(t,l,a),cn=e):ee(t,l,a));break;default:ee(t,l,a)}}function k0(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function tn(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];St=e,O0(e,t)}k0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)B0(t),t=t.sibling}function B0(t){switch(t.tag){case 0:case 11:case 15:tn(t),t.flags&2048&&xa(9,t,t.return);break;case 3:tn(t);break;case 12:tn(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,Ci(t)):tn(t);break;default:tn(t)}}function Ci(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];St=e,O0(e,t)}k0(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:xa(8,l,l.return),Ci(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,Ci(l));break;default:Ci(l)}t=t.sibling}}function O0(t,l){for(;St!==null;){var a=St;switch(a.tag){case 0:case 11:case 15:xa(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Gn(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,St=e;else t:for(a=t;St!==null;){e=St;var n=e.sibling,i=e.return;if(E0(e),e===a){St=null;break t}if(n!==null){n.return=i,St=n;break t}St=i}}}var Y1={getCacheForType:function(t){var l=Dt(vt),a=l.data.get(t);return a===void 0&&(a=t(),l.data.set(t,a)),a},cacheSignal:function(){return Dt(vt).controller.signal}},X1=typeof WeakMap=="function"?WeakMap:Map,J=0,I=null,j=null,Q=0,F=0,Zt=null,ua=!1,je=!1,ss=!1,Vl=0,ft=0,Ea=0,Ua=0,fs=0,Kt=0,Oe=0,bn=null,Yt=null,sc=!1,Au=0,C0=0,tu=1/0,lu=null,ma=null,gt=0,pa=null,Ce=null,jl=0,fc=0,rc=null,w0=null,xn=0,dc=null;function Rt(){return(J&2)!==0&&Q!==0?Q&-Q:O.T!==null?ds():Gr()}function _0(){if(Kt===0)if((Q&536870912)===0||Z){var t=ui;ui<<=1,(ui&3932160)===0&&(ui=262144),Kt=t}else Kt=536870912;return t=Pt.current,t!==null&&(t.flags|=32),Kt}function Xt(t,l,a){(t===I&&(F===2||F===9)||t.cancelPendingCommit!==null)&&(we(t,0),oa(t,Q,Kt,!1)),Xn(t,a),((J&2)===0||t!==I)&&(t===I&&((J&2)===0&&(Ua|=a),ft===4&&oa(t,Q,Kt,!1)),Al(t))}function U0(t,l,a){if((J&6)!==0)throw Error(E(327));var e=!a&&(l&127)===0&&(l&t.expiredLanes)===0||Yn(t,l),n=e?G1(t,l):So(t,l,!0),i=e;do{if(n===0){je&&!e&&oa(t,l,0,!1);break}else{if(a=t.current.alternate,i&&!j1(a)){n=So(t,l,!1),i=!1;continue}if(n===2){if(i=l,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){l=u;t:{var c=t;n=bn;var s=c.current.memoizedState.isDehydrated;if(s&&(we(c,u).flags|=256),u=So(c,u,!1),u!==2){if(ss&&!s){c.errorRecoveryDisabledLanes|=i,Ua|=i,n=4;break t}i=Yt,Yt=n,i!==null&&(Yt===null?Yt=i:Yt.push.apply(Yt,i))}n=u}if(i=!1,n!==2)continue}}if(n===1){we(t,0),oa(t,l,0,!0);break}t:{switch(e=t,i=n,i){case 0:case 1:throw Error(E(345));case 4:if((l&4194048)!==l)break;case 6:oa(e,l,Kt,!ua);break t;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(E(329))}if((l&62914560)===l&&(n=Au+300-Ft(),10<n)){if(oa(e,l,Kt,!ua),du(e,0,!0)!==0)break t;jl=l,e.timeoutHandle=lm(Pf.bind(null,e,a,Yt,lu,sc,l,Kt,Ua,Oe,ua,i,"Throttled",-0,0),n);break t}Pf(e,a,Yt,lu,sc,l,Kt,Ua,Oe,ua,i,null,-0,0)}}break}while(!0);Al(t)}function Pf(t,l,a,e,n,i,u,c,s,d,v,y,m,p){if(t.timeoutHandle=-1,y=l.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ql},D0(l,i,y);var x=(i&62914560)===i?Au-Ft():(i&4194048)===i?C0-Ft():0;if(x=Sh(y,x),x!==null){jl=i,t.cancelPendingCommit=x(lr.bind(null,t,l,i,a,e,n,u,c,s,v,y,null,m,p)),oa(t,i,u,!d);return}}lr(t,l,i,a,e,n,u,c,s)}function j1(t){for(var l=t;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],i=n.getSnapshot;n=n.value;try{if(!It(i(),n))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function oa(t,l,a,e){l&=~fs,l&=~Ua,t.suspendedLanes|=l,t.pingedLanes&=~l,e&&(t.warmLanes|=l),e=t.expirationTimes;for(var n=l;0<n;){var i=31-Wt(n),u=1<<i;e[i]=-1,n&=~u}a!==0&&Xr(t,a,l)}function Nu(){return(J&6)===0?(Vn(0,!1),!1):!0}function rs(){if(j!==null){if(F===0)var t=j.return;else t=j,Hl=Va=null,Wc(t),Se=null,Dn=0,t=j;for(;t!==null;)p0(t.alternate,t),t=t.return;j=null}}function we(t,l){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,nh(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),jl=0,rs(),I=t,j=a=Yl(t.current,null),Q=l,F=0,Zt=null,ua=!1,je=Yn(t,l),ss=!1,Oe=Kt=fs=Ua=Ea=ft=0,Yt=bn=null,sc=!1,(l&8)!==0&&(l|=l&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=l;0<e;){var n=31-Wt(e),i=1<<n;l|=t[n],e&=~i}return Vl=l,vu(),a}function q0(t,l){q=null,O.H=Bn,l===Xe||l===gu?(l=Of(),F=3):l===Qc?(l=Of(),F=4):F=l===is?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Zt=l,j===null&&(ft=1,Ri(t,ol(l,t.current)))}function H0(){var t=Pt.current;return t===null?!0:(Q&4194048)===Q?sl===null:(Q&62914560)===Q||(Q&536870912)!==0?t===sl:!1}function Y0(){var t=O.H;return O.H=Bn,t===null?Bn:t}function X0(){var t=O.A;return O.A=Y1,t}function au(){ft=4,ua||(Q&4194048)!==Q&&Pt.current!==null||(je=!0),(Ea&134217727)===0&&(Ua&134217727)===0||I===null||oa(I,Q,Kt,!1)}function So(t,l,a){var e=J;J|=2;var n=Y0(),i=X0();(I!==t||Q!==l)&&(lu=null,we(t,l)),l=!1;var u=ft;t:do try{if(F!==0&&j!==null){var c=j,s=Zt;switch(F){case 8:rs(),u=6;break t;case 3:case 2:case 9:case 6:Pt.current===null&&(l=!0);var d=F;if(F=0,Zt=null,ye(t,c,s,d),a&&je){u=0;break t}break;default:d=F,F=0,Zt=null,ye(t,c,s,d)}}L1(),u=ft;break}catch(v){q0(t,v)}while(!0);return l&&t.shellSuspendCounter++,Hl=Va=null,J=e,O.H=n,O.A=i,j===null&&(I=null,Q=0,vu()),u}function L1(){for(;j!==null;)j0(j)}function G1(t,l){var a=J;J|=2;var e=Y0(),n=X0();I!==t||Q!==l?(lu=null,tu=Ft()+500,we(t,l)):je=Yn(t,l);t:do try{if(F!==0&&j!==null){l=j;var i=Zt;l:switch(F){case 1:F=0,Zt=null,ye(t,l,i,1);break;case 2:case 9:if(Bf(i)){F=0,Zt=null,tr(l);break}l=function(){F!==2&&F!==9||I!==t||(F=7),Al(t)},i.then(l,l);break t;case 3:F=7;break t;case 4:F=5;break t;case 7:Bf(i)?(F=0,Zt=null,tr(l)):(F=0,Zt=null,ye(t,l,i,7));break;case 5:var u=null;switch(j.tag){case 26:u=j.memoizedState;case 5:case 27:var c=j;if(u?um(u):c.stateNode.complete){F=0,Zt=null;var s=c.sibling;if(s!==null)j=s;else{var d=c.return;d!==null?(j=d,zu(d)):j=null}break l}}F=0,Zt=null,ye(t,l,i,5);break;case 6:F=0,Zt=null,ye(t,l,i,6);break;case 8:rs(),ft=6;break t;default:throw Error(E(462))}}Q1();break}catch(v){q0(t,v)}while(!0);return Hl=Va=null,O.H=e,O.A=n,J=a,j!==null?0:(I=null,Q=0,vu(),ft)}function Q1(){for(;j!==null&&!dp();)j0(j)}function j0(t){var l=m0(t.alternate,t,Vl);t.memoizedProps=t.pendingProps,l===null?zu(t):j=l}function tr(t){var l=t,a=l.alternate;switch(l.tag){case 15:case 0:l=Kf(a,l,l.pendingProps,l.type,void 0,Q);break;case 11:l=Kf(a,l,l.pendingProps,l.type.render,l.ref,Q);break;case 5:Wc(l);default:p0(a,l),l=j=pd(l,Vl),l=m0(a,l,Vl)}t.memoizedProps=t.pendingProps,l===null?zu(t):j=l}function ye(t,l,a,e){Hl=Va=null,Wc(l),Se=null,Dn=0;var n=l.return;try{if(O1(t,n,l,a,Q)){ft=1,Ri(t,ol(a,t.current)),j=null;return}}catch(i){if(n!==null)throw j=n,i;ft=1,Ri(t,ol(a,t.current)),j=null;return}l.flags&32768?(Z||e===1?t=!0:je||(Q&536870912)!==0?t=!1:(ua=t=!0,(e===2||e===9||e===3||e===6)&&(e=Pt.current,e!==null&&e.tag===13&&(e.flags|=16384))),L0(l,t)):zu(l)}function zu(t){var l=t;do{if((l.flags&32768)!==0){L0(l,ua);return}t=l.return;var a=_1(l.alternate,l,Vl);if(a!==null){j=a;return}if(l=l.sibling,l!==null){j=l;return}j=l=t}while(l!==null);ft===0&&(ft=5)}function L0(t,l){do{var a=U1(t.alternate,t);if(a!==null){a.flags&=32767,j=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(t=t.sibling,t!==null)){j=t;return}j=t=a}while(t!==null);ft=6,j=null}function lr(t,l,a,e,n,i,u,c,s){t.cancelPendingCommit=null;do Tu();while(gt!==0);if((J&6)!==0)throw Error(E(327));if(l!==null){if(l===t.current)throw Error(E(177));if(i=l.lanes|l.childLanes,i|=qc,Sp(t,a,i,u,c,s),t===I&&(j=I=null,Q=0),Ce=l,pa=t,jl=a,fc=i,rc=n,w0=e,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,K1(ji,function(){return J0(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||e){e=O.T,O.T=null,n=K.p,K.p=2,u=J,J|=4;try{q1(t,l,a)}finally{J=u,K.p=n,O.T=e}}gt=1,G0(),Q0(),Z0()}}function G0(){if(gt===1){gt=0;var t=pa,l=Ce,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var e=K.p;K.p=2;var n=J;J|=4;try{z0(l,t);var i=vc,u=ud(t.containerInfo),c=i.focusedElem,s=i.selectionRange;if(u!==c&&c&&c.ownerDocument&&id(c.ownerDocument.documentElement,c)){if(s!==null&&Uc(c)){var d=s.start,v=s.end;if(v===void 0&&(v=d),"selectionStart"in c)c.selectionStart=d,c.selectionEnd=Math.min(v,c.value.length);else{var y=c.ownerDocument||document,m=y&&y.defaultView||window;if(m.getSelection){var p=m.getSelection(),x=c.textContent.length,b=Math.min(s.start,x),S=s.end===void 0?b:Math.min(s.end,x);!p.extend&&b>S&&(u=S,S=b,b=u);var r=Af(c,b),f=Af(c,S);if(r&&f&&(p.rangeCount!==1||p.anchorNode!==r.node||p.anchorOffset!==r.offset||p.focusNode!==f.node||p.focusOffset!==f.offset)){var h=y.createRange();h.setStart(r.node,r.offset),p.removeAllRanges(),b>S?(p.addRange(h),p.extend(f.node,f.offset)):(h.setEnd(f.node,f.offset),p.addRange(h))}}}}for(y=[],p=c;p=p.parentNode;)p.nodeType===1&&y.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<y.length;c++){var g=y[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}fu=!!hc,vc=hc=null}finally{J=n,K.p=e,O.T=a}}t.current=l,gt=2}}function Q0(){if(gt===2){gt=0;var t=pa,l=Ce,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var e=K.p;K.p=2;var n=J;J|=4;try{x0(t,l.alternate,l)}finally{J=n,K.p=e,O.T=a}}gt=3}}function Z0(){if(gt===4||gt===3){gt=0,mp();var t=pa,l=Ce,a=jl,e=w0;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?gt=5:(gt=0,Ce=pa=null,V0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(ma=null),Dc(a),l=l.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Hn,l,void 0,(l.current.flags&128)===128)}catch{}if(e!==null){l=O.T,n=K.p,K.p=2,O.T=null;try{for(var i=t.onRecoverableError,u=0;u<e.length;u++){var c=e[u];i(c.value,{componentStack:c.stack})}}finally{O.T=l,K.p=n}}(jl&3)!==0&&Tu(),Al(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===dc?xn++:(xn=0,dc=t):xn=0,Vn(0,!1)}}function V0(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Gn(l)))}function Tu(){return G0(),Q0(),Z0(),J0()}function J0(){if(gt!==5)return!1;var t=pa,l=fc;fc=0;var a=Dc(jl),e=O.T,n=K.p;try{K.p=32>a?32:a,O.T=null,a=rc,rc=null;var i=pa,u=jl;if(gt=0,Ce=pa=null,jl=0,(J&6)!==0)throw Error(E(331));var c=J;if(J|=4,B0(i.current),M0(i,i.current,u,a),J=c,Vn(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Hn,i)}catch{}return!0}finally{K.p=n,O.T=e,V0(t,l)}}function ar(t,l,a){l=ol(a,l),l=ic(t.stateNode,l,2),t=da(t,l,2),t!==null&&(Xn(t,2),Al(t))}function $(t,l,a){if(t.tag===3)ar(t,t,a);else for(;l!==null;){if(l.tag===3){ar(l,t,a);break}else if(l.tag===1){var e=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(ma===null||!ma.has(e))){t=ol(a,t),a=o0(2),e=da(l,a,2),e!==null&&(c0(a,e,l,t),Xn(e,2),Al(e));break}}l=l.return}}function Ao(t,l,a){var e=t.pingCache;if(e===null){e=t.pingCache=new X1;var n=new Set;e.set(l,n)}else n=e.get(l),n===void 0&&(n=new Set,e.set(l,n));n.has(a)||(ss=!0,n.add(a),t=Z1.bind(null,t,l,a),l.then(t,t))}function Z1(t,l,a){var e=t.pingCache;e!==null&&e.delete(l),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,I===t&&(Q&a)===a&&(ft===4||ft===3&&(Q&62914560)===Q&&300>Ft()-Au?(J&2)===0&&we(t,0):fs|=a,Oe===Q&&(Oe=0)),Al(t)}function K0(t,l){l===0&&(l=Yr()),t=Za(t,l),t!==null&&(Xn(t,l),Al(t))}function V1(t){var l=t.memoizedState,a=0;l!==null&&(a=l.retryLane),K0(t,a)}function J1(t,l){var a=0;switch(t.tag){case 31:case 13:var e=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(E(314))}e!==null&&e.delete(l),K0(t,a)}function K1(t,l){return Tc(t,l)}var eu=null,ie=null,mc=!1,nu=!1,No=!1,ca=0;function Al(t){t!==ie&&t.next===null&&(ie===null?eu=ie=t:ie=ie.next=t),nu=!0,mc||(mc=!0,$1())}function Vn(t,l){if(!No&&nu){No=!0;do for(var a=!1,e=eu;e!==null;){if(!l)if(t!==0){var n=e.pendingLanes;if(n===0)var i=0;else{var u=e.suspendedLanes,c=e.pingedLanes;i=(1<<31-Wt(42|t)+1)-1,i&=n&~(u&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,er(e,i))}else i=Q,i=du(e,e===I?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||Yn(e,i)||(a=!0,er(e,i));e=e.next}while(a);No=!1}}function F1(){F0()}function F0(){nu=mc=!1;var t=0;ca!==0&&eh()&&(t=ca);for(var l=Ft(),a=null,e=eu;e!==null;){var n=e.next,i=$0(e,l);i===0?(e.next=null,a===null?eu=n:a.next=n,n===null&&(ie=a)):(a=e,(t!==0||(i&3)!==0)&&(nu=!0)),e=n}gt!==0&&gt!==5||Vn(t,!1),ca!==0&&(ca=0)}function $0(t,l){for(var a=t.suspendedLanes,e=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-Wt(i),c=1<<u,s=n[u];s===-1?((c&a)===0||(c&e)!==0)&&(n[u]=Ep(c,l)):s<=l&&(t.expiredLanes|=c),i&=~c}if(l=I,a=Q,a=du(t,t===l?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,a===0||t===l&&(F===2||F===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Iu(e),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Yn(t,a)){if(l=a&-a,l===t.callbackPriority)return l;switch(e!==null&&Iu(e),Dc(a)){case 2:case 8:a=qr;break;case 32:a=ji;break;case 268435456:a=Hr;break;default:a=ji}return e=W0.bind(null,t),a=Tc(a,e),t.callbackPriority=l,t.callbackNode=a,l}return e!==null&&e!==null&&Iu(e),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,l){if(gt!==0&&gt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Tu()&&t.callbackNode!==a)return null;var e=Q;return e=du(t,t===I?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(U0(t,e,l),$0(t,Ft()),t.callbackNode!=null&&t.callbackNode===a?W0.bind(null,t):null)}function er(t,l){if(Tu())return null;U0(t,l,!0)}function $1(){ih(function(){(J&6)!==0?Tc(Ur,F1):F0()})}function ds(){if(ca===0){var t=De;t===0&&(t=ii,ii<<=1,(ii&261888)===0&&(ii=256)),ca=t}return ca}function nr(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ai(""+t)}function ir(t,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,t.id&&a.setAttribute("form",t.id),l.parentNode.insertBefore(a,l),t=new FormData(t),a.parentNode.removeChild(a),t}function W1(t,l,a,e,n){if(l==="submit"&&a&&a.stateNode===n){var i=nr((n[jt]||null).action),u=e.submitter;u&&(l=(l=u[jt]||null)?nr(l.formAction):u.getAttribute("formAction"),l!==null&&(i=l,u=null));var c=new mu("action","action",null,e,n);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(ca!==0){var s=u?ir(n,u):new FormData(n);ec(a,{pending:!0,data:s,method:n.method,action:i},null,s)}}else typeof i=="function"&&(c.preventDefault(),s=u?ir(n,u):new FormData(n),ec(a,{pending:!0,data:s,method:n.method,action:i},i,s))},currentTarget:n}]})}}for(yi=0;yi<Vo.length;yi++)gi=Vo[yi],ur=gi.toLowerCase(),or=gi[0].toUpperCase()+gi.slice(1),hl(ur,"on"+or);var gi,ur,or,yi;hl(cd,"onAnimationEnd");hl(sd,"onAnimationIteration");hl(fd,"onAnimationStart");hl("dblclick","onDoubleClick");hl("focusin","onFocus");hl("focusout","onBlur");hl(p1,"onTransitionRun");hl(h1,"onTransitionStart");hl(v1,"onTransitionCancel");hl(rd,"onTransitionEnd");Te("onMouseEnter",["mouseout","mouseover"]);Te("onMouseLeave",["mouseout","mouseover"]);Te("onPointerEnter",["pointerout","pointerover"]);Te("onPointerLeave",["pointerout","pointerover"]);La("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));La("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));La("onBeforeInput",["compositionend","keypress","textInput","paste"]);La("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));La("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));La("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(On));function R0(t,l){l=(l&4)!==0;for(var a=0;a<t.length;a++){var e=t[a],n=e.event;e=e.listeners;t:{var i=void 0;if(l)for(var u=e.length-1;0<=u;u--){var c=e[u],s=c.instance,d=c.currentTarget;if(c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=d;try{i(n)}catch(v){Gi(v)}n.currentTarget=null,i=s}else for(u=0;u<e.length;u++){if(c=e[u],s=c.instance,d=c.currentTarget,c=c.listener,s!==i&&n.isPropagationStopped())break t;i=c,n.currentTarget=d;try{i(n)}catch(v){Gi(v)}n.currentTarget=null,i=s}}}}function X(t,l){var a=l[Ho];a===void 0&&(a=l[Ho]=new Set);var e=t+"__bubble";a.has(e)||(I0(l,t,2,!1),a.add(e))}function zo(t,l,a){var e=0;l&&(e|=4),I0(a,t,e,l)}var bi="_reactListening"+Math.random().toString(36).slice(2);function ms(t){if(!t[bi]){t[bi]=!0,Qr.forEach(function(a){a!=="selectionchange"&&(R1.has(a)||zo(a,!1,t),zo(a,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[bi]||(l[bi]=!0,zo("selectionchange",!1,l))}}function I0(t,l,a,e){switch(rm(l)){case 2:var n=zh;break;case 8:n=Th;break;default:n=ys}a=n.bind(null,l,a,t),n=void 0,!Go||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),e?n!==void 0?t.addEventListener(l,a,{capture:!0,passive:n}):t.addEventListener(l,a,!0):n!==void 0?t.addEventListener(l,a,{passive:n}):t.addEventListener(l,a,!1)}function To(t,l,a,e,n){var i=e;if((l&1)===0&&(l&2)===0&&e!==null)t:for(;;){if(e===null)return;var u=e.tag;if(u===3||u===4){var c=e.stateNode.containerInfo;if(c===n)break;if(u===4)for(u=e.return;u!==null;){var s=u.tag;if((s===3||s===4)&&u.stateNode.containerInfo===n)return;u=u.return}for(;c!==null;){if(u=ce(c),u===null)return;if(s=u.tag,s===5||s===6||s===26||s===27){e=i=u;continue t}c=c.parentNode}}e=e.return}Rr(function(){var d=i,v=Oc(a),y=[];t:{var m=dd.get(t);if(m!==void 0){var p=mu,x=t;switch(t){case"keypress":if(zi(a)===0)break t;case"keydown":case"keyup":p=Jp;break;case"focusin":x="focus",p=eo;break;case"focusout":x="blur",p=eo;break;case"beforeblur":case"afterblur":p=eo;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=pf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_p;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$p;break;case cd:case sd:case fd:p=Hp;break;case rd:p=Rp;break;case"scroll":case"scrollend":p=Cp;break;case"wheel":p=Pp;break;case"copy":case"cut":case"paste":p=Xp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vf;break;case"toggle":case"beforetoggle":p=l1}var b=(l&4)!==0,S=!b&&(t==="scroll"||t==="scrollend"),r=b?m!==null?m+"Capture":null:m;b=[];for(var f=d,h;f!==null;){var g=f;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||r===null||(g=An(f,r),g!=null&&b.push(Cn(f,g,h))),S)break;f=f.return}0<b.length&&(m=new p(m,x,null,a,v),y.push({event:m,listeners:b}))}}if((l&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",m&&a!==Lo&&(x=a.relatedTarget||a.fromElement)&&(ce(x)||x[qe]))break t;if((p||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,p?(x=a.relatedTarget||a.toElement,p=d,x=x?ce(x):null,x!==null&&(S=qn(x),b=x.tag,x!==S||b!==5&&b!==27&&b!==6)&&(x=null)):(p=null,x=d),p!==x)){if(b=pf,g="onMouseLeave",r="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(b=vf,g="onPointerLeave",r="onPointerEnter",f="pointer"),S=p==null?m:un(p),h=x==null?m:un(x),m=new b(g,f+"leave",p,a,v),m.target=S,m.relatedTarget=h,g=null,ce(v)===d&&(b=new b(r,f+"enter",x,a,v),b.target=h,b.relatedTarget=S,g=b),S=g,p&&x)l:{for(b=I1,r=p,f=x,h=0,g=r;g;g=b(g))h++;g=0;for(var z=f;z;z=b(z))g++;for(;0<h-g;)r=b(r),h--;for(;0<g-h;)f=b(f),g--;for(;h--;){if(r===f||f!==null&&r===f.alternate){b=r;break l}r=b(r),f=b(f)}b=null}else b=null;p!==null&&cr(y,m,p,b,!1),x!==null&&S!==null&&cr(y,S,x,b,!0)}}t:{if(m=d?un(d):window,p=m.nodeName&&m.nodeName.toLowerCase(),p==="select"||p==="input"&&m.type==="file")var D=xf;else if(bf(m))if(ed)D=r1;else{D=s1;var M=c1}else p=m.nodeName,!p||p.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?d&&Bc(d.elementType)&&(D=xf):D=f1;if(D&&(D=D(t,d))){ad(y,D,a,v);break t}M&&M(t,m,d),t==="focusout"&&d&&m.type==="number"&&d.memoizedProps.value!=null&&jo(m,"number",m.value)}switch(M=d?un(d):window,t){case"focusin":(bf(M)||M.contentEditable==="true")&&(re=M,Qo=d,rn=null);break;case"focusout":rn=Qo=re=null;break;case"mousedown":Zo=!0;break;case"contextmenu":case"mouseup":case"dragend":Zo=!1,Nf(y,a,v);break;case"selectionchange":if(m1)break;case"keydown":case"keyup":Nf(y,a,v)}var k;if(_c)t:{switch(t){case"compositionstart":var B="onCompositionStart";break t;case"compositionend":B="onCompositionEnd";break t;case"compositionupdate":B="onCompositionUpdate";break t}B=void 0}else fe?td(t,a)&&(B="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(B="onCompositionStart");B&&(Pr&&a.locale!=="ko"&&(fe||B!=="onCompositionStart"?B==="onCompositionEnd"&&fe&&(k=Ir()):(ia=v,Cc="value"in ia?ia.value:ia.textContent,fe=!0)),M=iu(d,B),0<M.length&&(B=new hf(B,t,null,a,v),y.push({event:B,listeners:M}),k?B.data=k:(k=ld(a),k!==null&&(B.data=k)))),(k=e1?n1(t,a):i1(t,a))&&(B=iu(d,"onBeforeInput"),0<B.length&&(M=new hf("onBeforeInput","beforeinput",null,a,v),y.push({event:M,listeners:B}),M.data=k)),W1(y,t,d,a,v)}R0(y,l)})}function Cn(t,l,a){return{instance:t,listener:l,currentTarget:a}}function iu(t,l){for(var a=l+"Capture",e=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=An(t,a),n!=null&&e.unshift(Cn(t,n,i)),n=An(t,l),n!=null&&e.push(Cn(t,n,i))),t.tag===3)return e;t=t.return}return[]}function I1(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cr(t,l,a,e,n){for(var i=l._reactName,u=[];a!==null&&a!==e;){var c=a,s=c.alternate,d=c.stateNode;if(c=c.tag,s!==null&&s===e)break;c!==5&&c!==26&&c!==27||d===null||(s=d,n?(d=An(a,i),d!=null&&u.unshift(Cn(a,d,s))):n||(d=An(a,i),d!=null&&u.push(Cn(a,d,s)))),a=a.return}u.length!==0&&t.push({event:l,listeners:u})}var P1=/\r\n?/g,th=/\u0000|\uFFFD/g;function sr(t){return(typeof t=="string"?t:""+t).replace(P1,`
`).replace(th,"")}function P0(t,l){return l=sr(l),sr(t)===l}function W(t,l,a,e,n,i){switch(a){case"children":typeof e=="string"?l==="body"||l==="textarea"&&e===""||Me(t,e):(typeof e=="number"||typeof e=="bigint")&&l!=="body"&&Me(t,""+e);break;case"className":ci(t,"class",e);break;case"tabIndex":ci(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":ci(t,a,e);break;case"style":Wr(t,e,i);break;case"data":if(l!=="object"){ci(t,"data",e);break}case"src":case"href":if(e===""&&(l!=="a"||a!=="href")){t.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=Ai(""+e),t.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(l!=="input"&&W(t,l,"name",n.name,n,null),W(t,l,"formEncType",n.formEncType,n,null),W(t,l,"formMethod",n.formMethod,n,null),W(t,l,"formTarget",n.formTarget,n,null)):(W(t,l,"encType",n.encType,n,null),W(t,l,"method",n.method,n,null),W(t,l,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=Ai(""+e),t.setAttribute(a,e);break;case"onClick":e!=null&&(t.onclick=ql);break;case"onScroll":e!=null&&X("scroll",t);break;case"onScrollEnd":e!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(E(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}a=Ai(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""+e):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":e===!0?t.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,e):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(a,e):t.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(a):t.setAttribute(a,e);break;case"popover":X("beforetoggle",t),X("toggle",t),Si(t,"popover",e);break;case"xlinkActuate":Dl(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Dl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Dl(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Dl(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Dl(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Dl(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Dl(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Dl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Dl(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Si(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bp.get(a)||a,Si(t,a,e))}}function pc(t,l,a,e,n,i){switch(a){case"style":Wr(t,e,i);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(E(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"children":typeof e=="string"?Me(t,e):(typeof e=="number"||typeof e=="bigint")&&Me(t,""+e);break;case"onScroll":e!=null&&X("scroll",t);break;case"onScrollEnd":e!=null&&X("scrollend",t);break;case"onClick":e!=null&&(t.onclick=ql);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zr.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),l=a.slice(2,n?a.length-7:void 0),i=t[jt]||null,i=i!=null?i[a]:null,typeof i=="function"&&t.removeEventListener(l,i,n),typeof e=="function")){typeof i!="function"&&i!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(l,e,n);break t}a in t?t[a]=e:e===!0?t.setAttribute(a,""):Si(t,a,e)}}}function kt(t,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var e=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];if(u!=null)switch(i){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,l));default:W(t,l,i,u,a,null)}}n&&W(t,l,"srcSet",a.srcSet,a,null),e&&W(t,l,"src",a.src,a,null);return;case"input":X("invalid",t);var c=i=u=n=null,s=null,d=null;for(e in a)if(a.hasOwnProperty(e)){var v=a[e];if(v!=null)switch(e){case"name":n=v;break;case"type":u=v;break;case"checked":s=v;break;case"defaultChecked":d=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(E(137,l));break;default:W(t,l,e,v,a,null)}}Kr(t,i,c,s,d,u,n,!1);return;case"select":X("invalid",t),e=u=i=null;for(n in a)if(a.hasOwnProperty(n)&&(c=a[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":u=c;break;case"multiple":e=c;default:W(t,l,n,c,a,null)}l=i,a=u,t.multiple=!!e,l!=null?be(t,!!e,l,!1):a!=null&&be(t,!!e,a,!0);return;case"textarea":X("invalid",t),i=n=e=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":e=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:W(t,l,u,c,a,null)}$r(t,e,n,i);return;case"option":for(s in a)a.hasOwnProperty(s)&&(e=a[s],e!=null)&&(s==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":W(t,l,s,e,a,null));return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(e=0;e<On.length;e++)X(On[e],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(d in a)if(a.hasOwnProperty(d)&&(e=a[d],e!=null))switch(d){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,l));default:W(t,l,d,e,a,null)}return;default:if(Bc(l)){for(v in a)a.hasOwnProperty(v)&&(e=a[v],e!==void 0&&pc(t,l,v,e,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(e=a[c],e!=null&&W(t,l,c,e,a,null))}function lh(t,l,a,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,u=null,c=null,s=null,d=null,v=null;for(p in a){var y=a[p];if(a.hasOwnProperty(p)&&y!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":s=y;default:e.hasOwnProperty(p)||W(t,l,p,null,e,y)}}for(var m in e){var p=e[m];if(y=a[m],e.hasOwnProperty(m)&&(p!=null||y!=null))switch(m){case"type":i=p;break;case"name":n=p;break;case"checked":d=p;break;case"defaultChecked":v=p;break;case"value":u=p;break;case"defaultValue":c=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(E(137,l));break;default:p!==y&&W(t,l,m,p,e,y)}}Xo(t,u,c,s,d,v,i,n);return;case"select":p=u=c=m=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":p=s;default:e.hasOwnProperty(i)||W(t,l,i,null,e,s)}for(n in e)if(i=e[n],s=a[n],e.hasOwnProperty(n)&&(i!=null||s!=null))switch(n){case"value":m=i;break;case"defaultValue":c=i;break;case"multiple":u=i;default:i!==s&&W(t,l,n,i,e,s)}l=c,a=u,e=p,m!=null?be(t,!!a,m,!1):!!e!=!!a&&(l!=null?be(t,!!a,l,!0):be(t,!!a,a?[]:"",!1));return;case"textarea":p=m=null;for(c in a)if(n=a[c],a.hasOwnProperty(c)&&n!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:W(t,l,c,null,e,n)}for(u in e)if(n=e[u],i=a[u],e.hasOwnProperty(u)&&(n!=null||i!=null))switch(u){case"value":m=n;break;case"defaultValue":p=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(E(91));break;default:n!==i&&W(t,l,u,n,e,i)}Fr(t,m,p);return;case"option":for(var x in a)m=a[x],a.hasOwnProperty(x)&&m!=null&&!e.hasOwnProperty(x)&&(x==="selected"?t.selected=!1:W(t,l,x,null,e,m));for(s in e)m=e[s],p=a[s],e.hasOwnProperty(s)&&m!==p&&(m!=null||p!=null)&&(s==="selected"?t.selected=m&&typeof m!="function"&&typeof m!="symbol":W(t,l,s,m,e,p));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in a)m=a[b],a.hasOwnProperty(b)&&m!=null&&!e.hasOwnProperty(b)&&W(t,l,b,null,e,m);for(d in e)if(m=e[d],p=a[d],e.hasOwnProperty(d)&&m!==p&&(m!=null||p!=null))switch(d){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(E(137,l));break;default:W(t,l,d,m,e,p)}return;default:if(Bc(l)){for(var S in a)m=a[S],a.hasOwnProperty(S)&&m!==void 0&&!e.hasOwnProperty(S)&&pc(t,l,S,void 0,e,m);for(v in e)m=e[v],p=a[v],!e.hasOwnProperty(v)||m===p||m===void 0&&p===void 0||pc(t,l,v,m,e,p);return}}for(var r in a)m=a[r],a.hasOwnProperty(r)&&m!=null&&!e.hasOwnProperty(r)&&W(t,l,r,null,e,m);for(y in e)m=e[y],p=a[y],!e.hasOwnProperty(y)||m===p||m==null&&p==null||W(t,l,y,m,e,p)}function fr(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ah(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],i=n.transferSize,u=n.initiatorType,c=n.duration;if(i&&c&&fr(u)){for(u=0,c=n.responseEnd,e+=1;e<a.length;e++){var s=a[e],d=s.startTime;if(d>c)break;var v=s.transferSize,y=s.initiatorType;v&&fr(y)&&(s=s.responseEnd,u+=v*(s<c?1:(c-d)/(s-d)))}if(--e,l+=8*(i+u)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var hc=null,vc=null;function uu(t){return t.nodeType===9?t:t.ownerDocument}function rr(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function yc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Mo=null;function eh(){var t=window.event;return t&&t.type==="popstate"?t===Mo?!1:(Mo=t,!0):(Mo=null,!1)}var lm=typeof setTimeout=="function"?setTimeout:void 0,nh=typeof clearTimeout=="function"?clearTimeout:void 0,dr=typeof Promise=="function"?Promise:void 0,ih=typeof queueMicrotask=="function"?queueMicrotask:typeof dr<"u"?function(t){return dr.resolve(null).then(t).catch(uh)}:lm;function uh(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function mr(t,l){var a=l,e=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){t.removeChild(n),Ue(l);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")En(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,En(a);for(var i=a.firstChild;i;){var u=i.nextSibling,c=i.nodeName;i[jn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=u}}else a==="body"&&En(t.ownerDocument.body);a=n}while(a);Ue(l)}function pr(t,l){var a=t;t=0;do{var e=a.nextSibling;if(a.nodeType===1?l?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(l?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=e}while(a)}function gc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gc(a),kc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function oh(t,l,a,e){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[jn])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=fl(t.nextSibling),t===null)break}return null}function ch(t,l,a){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=fl(t.nextSibling),t===null))return null;return t}function am(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=fl(t.nextSibling),t===null))return null;return t}function bc(t){return t.data==="$?"||t.data==="$~"}function xc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sh(t,l){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||a.readyState!=="loading")l();else{var e=function(){l(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function fl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Ec=null;function hr(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(l===0)return fl(t.nextSibling);l--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||l++}t=t.nextSibling}return null}function vr(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(l===0)return t;l--}else a!=="/$"&&a!=="/&"||l++}t=t.previousSibling}return null}function em(t,l,a){switch(l=uu(a),t){case"html":if(t=l.documentElement,!t)throw Error(E(452));return t;case"head":if(t=l.head,!t)throw Error(E(453));return t;case"body":if(t=l.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}function En(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);kc(t)}var rl=new Map,yr=new Set;function ou(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Jl=K.d;K.d={f:fh,r:rh,D:dh,C:mh,L:ph,m:hh,X:yh,S:vh,M:gh};function fh(){var t=Jl.f(),l=Nu();return t||l}function rh(t){var l=He(t);l!==null&&l.tag===5&&l.type==="form"?Wd(l):Jl.r(t)}var Le=typeof document>"u"?null:document;function nm(t,l,a){var e=Le;if(e&&typeof l=="string"&&l){var n=ul(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),yr.has(n)||(yr.add(n),t={rel:t,crossOrigin:a,href:l},e.querySelector(n)===null&&(l=e.createElement("link"),kt(l,"link",t),At(l),e.head.appendChild(l)))}}function dh(t){Jl.D(t),nm("dns-prefetch",t,null)}function mh(t,l){Jl.C(t,l),nm("preconnect",t,l)}function ph(t,l,a){Jl.L(t,l,a);var e=Le;if(e&&t&&l){var n='link[rel="preload"][as="'+ul(l)+'"]';l==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ul(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ul(a.imageSizes)+'"]')):n+='[href="'+ul(t)+'"]';var i=n;switch(l){case"style":i=_e(t);break;case"script":i=Ge(t)}rl.has(i)||(t=et({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:t,as:l},a),rl.set(i,t),e.querySelector(n)!==null||l==="style"&&e.querySelector(Jn(i))||l==="script"&&e.querySelector(Kn(i))||(l=e.createElement("link"),kt(l,"link",t),At(l),e.head.appendChild(l)))}}function hh(t,l){Jl.m(t,l);var a=Le;if(a&&t){var e=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+ul(e)+'"][href="'+ul(t)+'"]',i=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ge(t)}if(!rl.has(i)&&(t=et({rel:"modulepreload",href:t},l),rl.set(i,t),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Kn(i)))return}e=a.createElement("link"),kt(e,"link",t),At(e),a.head.appendChild(e)}}}function vh(t,l,a){Jl.S(t,l,a);var e=Le;if(e&&t){var n=ge(e).hoistableStyles,i=_e(t);l=l||"default";var u=n.get(i);if(!u){var c={loading:0,preload:null};if(u=e.querySelector(Jn(i)))c.loading=5;else{t=et({rel:"stylesheet",href:t,"data-precedence":l},a),(a=rl.get(i))&&ps(t,a);var s=u=e.createElement("link");At(s),kt(s,"link",t),s._p=new Promise(function(d,v){s.onload=d,s.onerror=v}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,wi(u,l,e)}u={type:"stylesheet",instance:u,count:1,state:c},n.set(i,u)}}}function yh(t,l){Jl.X(t,l);var a=Le;if(a&&t){var e=ge(a).hoistableScripts,n=Ge(t),i=e.get(n);i||(i=a.querySelector(Kn(n)),i||(t=et({src:t,async:!0},l),(l=rl.get(n))&&hs(t,l),i=a.createElement("script"),At(i),kt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function gh(t,l){Jl.M(t,l);var a=Le;if(a&&t){var e=ge(a).hoistableScripts,n=Ge(t),i=e.get(n);i||(i=a.querySelector(Kn(n)),i||(t=et({src:t,async:!0,type:"module"},l),(l=rl.get(n))&&hs(t,l),i=a.createElement("script"),At(i),kt(i,"link",t),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(n,i))}}function gr(t,l,a,e){var n=(n=sa.current)?ou(n):null;if(!n)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=_e(a.href),a=ge(n).hoistableStyles,e=a.get(l),e||(e={type:"style",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=_e(a.href);var i=ge(n).hoistableStyles,u=i.get(t);if(u||(n=n.ownerDocument||n,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=n.querySelector(Jn(t)))&&!i._p&&(u.instance=i,u.state.loading=5),rl.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},rl.set(t,a),i||bh(n,t,a,u.state))),l&&e===null)throw Error(E(528,""));return u}if(l&&e!==null)throw Error(E(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Ge(a),a=ge(n).hoistableScripts,e=a.get(l),e||(e={type:"script",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function _e(t){return'href="'+ul(t)+'"'}function Jn(t){return'link[rel="stylesheet"]['+t+"]"}function im(t){return et({},t,{"data-precedence":t.precedence,precedence:null})}function bh(t,l,a,e){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?e.loading=1:(l=t.createElement("link"),e.preload=l,l.addEventListener("load",function(){return e.loading|=1}),l.addEventListener("error",function(){return e.loading|=2}),kt(l,"link",a),At(l),t.head.appendChild(l))}function Ge(t){return'[src="'+ul(t)+'"]'}function Kn(t){return"script[async]"+t}function br(t,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var e=t.querySelector('style[data-href~="'+ul(a.href)+'"]');if(e)return l.instance=e,At(e),e;var n=et({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),At(e),kt(e,"style",n),wi(e,a.precedence,t),l.instance=e;case"stylesheet":n=_e(a.href);var i=t.querySelector(Jn(n));if(i)return l.state.loading|=4,l.instance=i,At(i),i;e=im(a),(n=rl.get(n))&&ps(e,n),i=(t.ownerDocument||t).createElement("link"),At(i);var u=i;return u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),kt(i,"link",e),l.state.loading|=4,wi(i,a.precedence,t),l.instance=i;case"script":return i=Ge(a.src),(n=t.querySelector(Kn(i)))?(l.instance=n,At(n),n):(e=a,(n=rl.get(i))&&(e=et({},a),hs(e,n)),t=t.ownerDocument||t,n=t.createElement("script"),At(n),kt(n,"link",e),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(E(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(e=l.instance,l.state.loading|=4,wi(e,a.precedence,t));return l.instance}function wi(t,l,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,i=n,u=0;u<e.length;u++){var c=e[u];if(c.dataset.precedence===l)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(t,l.firstChild))}function ps(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function hs(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var _i=null;function xr(t,l,a){if(_i===null){var e=new Map,n=_i=new Map;n.set(a,e)}else n=_i,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(t))return e;for(e.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var i=a[n];if(!(i[jn]||i[Tt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(l)||"";u=t+u;var c=e.get(u);c?c.push(i):e.set(u,[i])}}return e}function Er(t,l,a){t=t.ownerDocument||t,t.head.insertBefore(a,l==="title"?t.querySelector("head > title"):null)}function xh(t,l,a){if(a===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function um(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Eh(t,l,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=_e(e.href),i=l.querySelector(Jn(n));if(i){l=i._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=cu.bind(t),l.then(t,t)),a.state.loading|=4,a.instance=i,At(i);return}i=l.ownerDocument||l,e=im(e),(n=rl.get(n))&&ps(e,n),i=i.createElement("link"),At(i);var u=i;u._p=new Promise(function(c,s){u.onload=c,u.onerror=s}),kt(i,"link",e),a.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,l),(l=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=cu.bind(t),l.addEventListener("load",a),l.addEventListener("error",a))}}var Do=0;function Sh(t,l){return t.stylesheets&&t.count===0&&Ui(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var e=setTimeout(function(){if(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+l);0<t.imgBytes&&Do===0&&(Do=62500*ah());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ui(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>Do?50:800)+l);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function cu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ui(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var su=null;function Ui(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,su=new Map,l.forEach(Ah,t),su=null,cu.call(t))}function Ah(t,l){if(!(l.state.loading&4)){var a=su.get(t);if(a)var e=a.get(null);else{a=new Map,su.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var u=n[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),e=u)}e&&a.set(null,e)}n=l.instance,u=n.getAttribute("data-precedence"),i=a.get(u)||e,i===e&&a.set(null,n),a.set(u,n),this.count++,e=cu.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var wn={$$typeof:Ul,Provider:null,Consumer:null,_currentValue:Oa,_currentValue2:Oa,_threadCount:0};function Nh(t,l,a,e,n,i,u,c,s){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.hiddenUpdates=Pu(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function om(t,l,a,e,n,i,u,c,s,d,v,y){return t=new Nh(t,l,a,u,s,d,v,y,c),l=1,i===!0&&(l|=24),i=Jt(3,null,null,l),t.current=i,i.stateNode=t,l=Lc(),l.refCount++,t.pooledCache=l,l.refCount++,i.memoizedState={element:e,isDehydrated:a,cache:l},Zc(i),t}function cm(t){return t?(t=pe,t):pe}function sm(t,l,a,e,n,i){n=cm(n),e.context===null?e.context=n:e.pendingContext=n,e=ra(l),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=da(t,e,l),a!==null&&(Xt(a,t,l),mn(a,t,l))}function Sr(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<l?a:l}}function vs(t,l){Sr(t,l),(t=t.alternate)&&Sr(t,l)}function fm(t){if(t.tag===13||t.tag===31){var l=Za(t,67108864);l!==null&&Xt(l,t,67108864),vs(t,67108864)}}function Ar(t){if(t.tag===13||t.tag===31){var l=Rt();l=Mc(l);var a=Za(t,l);a!==null&&Xt(a,t,l),vs(t,l)}}var fu=!0;function zh(t,l,a,e){var n=O.T;O.T=null;var i=K.p;try{K.p=2,ys(t,l,a,e)}finally{K.p=i,O.T=n}}function Th(t,l,a,e){var n=O.T;O.T=null;var i=K.p;try{K.p=8,ys(t,l,a,e)}finally{K.p=i,O.T=n}}function ys(t,l,a,e){if(fu){var n=Sc(e);if(n===null)To(t,l,e,ru,a),Nr(t,e);else if(Dh(n,t,l,a,e))e.stopPropagation();else if(Nr(t,e),l&4&&-1<Mh.indexOf(t)){for(;n!==null;){var i=He(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=Da(i.pendingLanes);if(u!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;u;){var s=1<<31-Wt(u);c.entanglements[1]|=s,u&=~s}Al(i),(J&6)===0&&(tu=Ft()+500,Vn(0,!1))}}break;case 31:case 13:c=Za(i,2),c!==null&&Xt(c,i,2),Nu(),vs(i,2)}if(i=Sc(e),i===null&&To(t,l,e,ru,a),i===n)break;n=i}n!==null&&e.stopPropagation()}else To(t,l,e,null,a)}}function Sc(t){return t=Oc(t),gs(t)}var ru=null;function gs(t){if(ru=null,t=ce(t),t!==null){var l=qn(t);if(l===null)t=null;else{var a=l.tag;if(a===13){if(t=Br(l),t!==null)return t;t=null}else if(a===31){if(t=Or(l),t!==null)return t;t=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return ru=t,null}function rm(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(pp()){case Ur:return 2;case qr:return 8;case ji:case hp:return 32;case Hr:return 268435456;default:return 32}default:return 32}}var Ac=!1,ha=null,va=null,ya=null,_n=new Map,Un=new Map,ea=[],Mh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Nr(t,l){switch(t){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":_n.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":Un.delete(l.pointerId)}}function ln(t,l,a,e,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:l,domEventName:a,eventSystemFlags:e,nativeEvent:i,targetContainers:[n]},l!==null&&(l=He(l),l!==null&&fm(l)),t):(t.eventSystemFlags|=e,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function Dh(t,l,a,e,n){switch(l){case"focusin":return ha=ln(ha,t,l,a,e,n),!0;case"dragenter":return va=ln(va,t,l,a,e,n),!0;case"mouseover":return ya=ln(ya,t,l,a,e,n),!0;case"pointerover":var i=n.pointerId;return _n.set(i,ln(_n.get(i)||null,t,l,a,e,n)),!0;case"gotpointercapture":return i=n.pointerId,Un.set(i,ln(Un.get(i)||null,t,l,a,e,n)),!0}return!1}function dm(t){var l=ce(t.target);if(l!==null){var a=qn(l);if(a!==null){if(l=a.tag,l===13){if(l=Br(a),l!==null){t.blockedOn=l,of(t.priority,function(){Ar(a)});return}}else if(l===31){if(l=Or(a),l!==null){t.blockedOn=l,of(t.priority,function(){Ar(a)});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qi(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var a=Sc(t.nativeEvent);if(a===null){a=t.nativeEvent;var e=new a.constructor(a.type,a);Lo=e,a.target.dispatchEvent(e),Lo=null}else return l=He(a),l!==null&&fm(l),t.blockedOn=a,!1;l.shift()}return!0}function zr(t,l,a){qi(t)&&a.delete(l)}function kh(){Ac=!1,ha!==null&&qi(ha)&&(ha=null),va!==null&&qi(va)&&(va=null),ya!==null&&qi(ya)&&(ya=null),_n.forEach(zr),Un.forEach(zr)}function xi(t,l){t.blockedOn===l&&(t.blockedOn=null,Ac||(Ac=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,kh)))}var Ei=null;function Tr(t){Ei!==t&&(Ei=t,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,function(){Ei===t&&(Ei=null);for(var l=0;l<t.length;l+=3){var a=t[l],e=t[l+1],n=t[l+2];if(typeof e!="function"){if(gs(e||a)===null)continue;break}var i=He(a);i!==null&&(t.splice(l,3),l-=3,ec(i,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function Ue(t){function l(s){return xi(s,t)}ha!==null&&xi(ha,t),va!==null&&xi(va,t),ya!==null&&xi(ya,t),_n.forEach(l),Un.forEach(l);for(var a=0;a<ea.length;a++){var e=ea[a];e.blockedOn===t&&(e.blockedOn=null)}for(;0<ea.length&&(a=ea[0],a.blockedOn===null);)dm(a),a.blockedOn===null&&ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],i=a[e+1],u=n[jt]||null;if(typeof i=="function")u||Tr(a);else if(u){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,u=i[jt]||null)c=u.formAction;else if(gs(n)!==null)continue}else c=u.action;typeof c=="function"?a[e+1]=c:(a.splice(e,3),e-=3),Tr(a)}}}function mm(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(u){return n=u})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function bs(t){this._internalRoot=t}Mu.prototype.render=bs.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(E(409));var a=l.current,e=Rt();sm(a,e,t,l,null,null)};Mu.prototype.unmount=bs.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;sm(t.current,2,null,t,null,null),Nu(),l[qe]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var l=Gr();t={blockedOn:null,target:t,priority:l};for(var a=0;a<ea.length&&l!==0&&l<ea[a].priority;a++);ea.splice(a,0,t),a===0&&dm(t)}};var Mr=Dr.version;if(Mr!=="19.2.5")throw Error(E(527,Mr,"19.2.5"));K.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=op(l),t=t!==null?Cr(t):null,t=t===null?null:t.stateNode,t};var Bh={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(an=__REACT_DEVTOOLS_GLOBAL_HOOK__,!an.isDisabled&&an.supportsFiber))try{Hn=an.inject(Bh),$t=an}catch{}var an;Du.createRoot=function(t,l){if(!kr(t))throw Error(E(299));var a=!1,e="",n=n0,i=i0,u=u0;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(i=l.onCaughtError),l.onRecoverableError!==void 0&&(u=l.onRecoverableError)),l=om(t,1,!1,null,null,a,e,null,n,i,u,mm),t[qe]=l.current,ms(t),new bs(l)};Du.hydrateRoot=function(t,l,a){if(!kr(t))throw Error(E(299));var e=!1,n="",i=n0,u=i0,c=u0,s=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),l=om(t,1,!0,l,a??null,e,n,s,i,u,c,mm),l.context=cm(null),a=l.current,e=Rt(),e=Mc(e),n=ra(e),n.callback=null,da(a,n,e),a=e,l.current.lanes=a,Xn(l,a),Al(l),t[qe]=l.current,ms(t),new Mu(l)};Du.version="19.2.5"});var ym=$l((wv,vm)=>{"use strict";function hm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hm)}catch(t){console.error(t)}}hm(),vm.exports=pm()});var o=Ts(Pn()),Mm=Ts(ym()),ku=Date.now();function tl(){return ku+=1,ku}var Bu=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function gm(){let l=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),a=e=>+l.find(n=>n.type===e).value;return{hour:a("hour"),minute:a("minute"),second:a("second")}}function Oh(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function _(t=0){let l=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(l)}function Ch(t=0){let l=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"narrow"}).format(l)}function Kl(t){let[l,a]=t.split(":").map(Number);return l*60+a}function Fa(t){let l=Math.floor(t/60)%24,a=t%60,e=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(a).padStart(2,"0")} ${e}`}function Qe(t){if(t<60)return`${t}m`;let l=Math.floor(t/60),a=t%60;return a?`${l}h ${a}m`:`${l}h`}function xs(t){let l=Math.floor(t/60)%24,a=t%60;return`${String(l).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function Ou(t){if(!t||t.length===0)return{streak:0,freezeUsed:!1};let l=new Set(t),a;if(l.has(_(0)))a=0;else if(l.has(_(-1)))a=-1;else return{streak:0,freezeUsed:!1};let e=0,n=a,i=0,u=!0,c=!1;for(;;)if(l.has(_(n)))e++,i++,!u&&i>=7&&(u=!0,i=0),n-=1;else if(u)u=!1,i=0,c=!0,n-=1;else break;return{streak:e,freezeUsed:c}}function wh(t){return Ou(t).streak}var _h=[15,30,45,60,90,120],Dm="tasksh.sound.v1",Fn=null;function Uh(){if(!Fn){let t=window.AudioContext||window.webkitAudioContext;if(!t)return null;Fn=new t}return Fn.state==="suspended"&&Fn.resume(),Fn}function km(){try{let t=localStorage.getItem(Dm);return t===null?!0:t==="1"}catch{return!0}}function qh(t){try{localStorage.setItem(Dm,t?"1":"0")}catch{}}function Ka(t){if(!km())return;let l=Uh();if(!l)return;let a=l.currentTime;t.forEach(({freq:e,start:n=0,dur:i=.08,type:u="sine",gain:c=.05})=>{let s=l.createOscillator(),d=l.createGain();s.type=u,s.frequency.setValueAtTime(e,a+n),d.gain.setValueAtTime(1e-4,a+n),d.gain.exponentialRampToValueAtTime(c,a+n+.008),d.gain.exponentialRampToValueAtTime(1e-4,a+n+i),s.connect(d),d.connect(l.destination),s.start(a+n),s.stop(a+n+i+.02)})}var L={click:()=>Ka([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>Ka([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>Ka([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>Ka([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>Ka([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>Ka([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function Hh(){let[t,l]=(0,o.useState)(km());return[t,()=>{let e=!t;l(e),qh(e),e&&Ka([{freq:720,dur:.05,gain:.04}])}]}function Yh(t,l=550){let[a,e]=(0,o.useState)(t),n=(0,o.useRef)(t),i=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let u=n.current,c=t;if(u===c)return;let s=performance.now(),d=y=>1-Math.pow(1-y,3),v=y=>{let m=y-s,p=Math.min(1,m/l),x=d(p);e(Math.round(u+(c-u)*x)),p<1?i.current=requestAnimationFrame(v):n.current=c};return i.current=requestAnimationFrame(v),()=>i.current&&cancelAnimationFrame(i.current)},[t,l]),a}function vl({value:t,className:l,suffix:a=""}){let e=Yh(t);return o.default.createElement("span",{className:l},e,a)}function Xh({axes:t,size:l=220,maxValue:a}){let[e,n]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let b=requestAnimationFrame(()=>n(!0));return()=>cancelAnimationFrame(b)},[]);let i=t.length,u=l/2,c=l/2,s=l/2-34,d=a??Math.max(1,...t.map(b=>b.value)),v=b=>Math.PI*2*b/i-Math.PI/2,y=(b,S)=>{let r=v(b);return[u+Math.cos(r)*s*S,c+Math.sin(r)*s*S]},m=[.25,.5,.75,1],x=t.map((b,S)=>y(S,e?Math.max(.04,b.value/d):.02)).map((b,S)=>`${S===0?"M":"L"}${b[0].toFixed(1)},${b[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:"100%",height:l,className:"radar-chart"},m.map((b,S)=>{let f=t.map((h,g)=>y(g,b)).map((h,g)=>`${g===0?"M":"L"}${h[0].toFixed(1)},${h[1].toFixed(1)}`).join(" ")+"Z";return o.default.createElement("path",{key:S,d:f,className:"radar-ring"})}),t.map((b,S)=>{let r=y(S,1);return o.default.createElement("line",{key:S,x1:u,y1:c,x2:r[0],y2:r[1],className:"radar-spoke"})}),o.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),t.map((b,S)=>{let r=y(S,1.22),f=y(S,e?Math.max(.04,b.value/d):.02);return o.default.createElement("g",{key:b.key||S},o.default.createElement("circle",{cx:f[0],cy:f[1],r:3.5,fill:b.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),o.default.createElement("text",{x:r[0],y:r[1],textAnchor:"middle",dominantBaseline:"middle",className:"radar-label"},b.label))}))}function Cu({pct:t,size:l=108,stroke:a=9,color:e="#5EEAD4",trackColor:n="#1E2228",label:i,sublabel:u}){let[c,s]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let b=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(b)},[]);let d=l/2-a,v=2*Math.PI*d,y=Math.max(0,Math.min(100,t)),m=v-(c?y/100:0)*v,p=Math.max(8,Math.round(l*.135)),x=Math.max(6.5,Math.round(l*.075));return o.default.createElement("div",{className:"radial-progress-wrap",style:{width:l,height:l}},o.default.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l},o.default.createElement("circle",{cx:l/2,cy:l/2,r:d,fill:"none",stroke:n,strokeWidth:a}),o.default.createElement("circle",{cx:l/2,cy:l/2,r:d,fill:"none",stroke:e,strokeWidth:a,strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:m,transform:`rotate(-90 ${l/2} ${l/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),o.default.createElement("div",{className:"radial-progress-center"},i&&o.default.createElement("span",{className:"radial-progress-label",style:{fontSize:p}},i),u&&o.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:x}},u)))}function Bm({segments:t,size:l=132,stroke:a=18,centerLabel:e,centerSublabel:n}){let[i,u]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let m=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(m)},[]);let c=l/2-a/2,s=2*Math.PI*c,d=Math.max(1e-6,t.reduce((m,p)=>m+Math.max(0,p.value),0)),v=0,y=t.map(m=>{let p=Math.max(0,m.value),x=p/d,b=i?x*s:0,S=s-b,r=v/d*360;return v+=p,{...m,dash:b,gap:S,rotation:r,frac:x}});return o.default.createElement("div",{className:"donut-wrap",style:{width:l,height:l}},o.default.createElement("svg",{viewBox:`0 0 ${l} ${l}`,width:l,height:l},o.default.createElement("circle",{cx:l/2,cy:l/2,r:c,fill:"none",stroke:"#1E2228",strokeWidth:a}),y.map((m,p)=>o.default.createElement("circle",{key:m.key||p,cx:l/2,cy:l/2,r:c,fill:"none",stroke:m.color,strokeWidth:a,strokeDasharray:`${m.dash} ${m.gap}`,strokeDashoffset:0,transform:`rotate(${m.rotation-90} ${l/2} ${l/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:y.length>1?"butt":"round"}))),o.default.createElement("div",{className:"donut-center"},e!==void 0&&o.default.createElement("span",{className:"donut-center-label"},e),n&&o.default.createElement("span",{className:"donut-center-sublabel"},n)))}function jh({counts:t,weeksBack:l=12,colorSteps:a}){let e=a||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],n=0,i=l*7,u=Array.from({length:i},(v,y)=>n-(i-1-y)),c=Math.max(1,...u.map(v=>t[_(v)]||0)),s=[];for(let v=0;v<l;v++)s.push(u.slice(v*7,v*7+7));let d=v=>{if(!v)return 0;let y=v/c;return y>.75?4:y>.5?3:y>.25?2:1};return o.default.createElement("div",{className:"heatmap-wrap"},o.default.createElement("div",{className:"heatmap-grid"},s.map((v,y)=>o.default.createElement("div",{className:"heatmap-col",key:y},v.map((m,p)=>{let x=_(m),b=t[x]||0,S=d(b);return o.default.createElement("span",{key:p,className:`heatmap-cell ${m===0?"today":""}`,style:{background:e[S],animationDelay:`${(y*7+p)*4}ms`},title:`${x}: ${b} completed`})})))),o.default.createElement("div",{className:"heatmap-legend"},o.default.createElement("span",null,"less"),e.map((v,y)=>o.default.createElement("span",{key:y,className:"heatmap-legend-cell",style:{background:v}})),o.default.createElement("span",null,"more")))}function Lh({routines:t,nowMinutes:l}){let[a,e]=(0,o.useState)(!1);(0,o.useEffect)(()=>{let s=requestAnimationFrame(()=>e(!0));return()=>cancelAnimationFrame(s)},[]);let n=1440,i=l/n*100,u=[0,3,6,9,12,15,18,21,24],c=s=>{let d=s%24;return d===0?"12a":d===12?"12p":d>12?`${d-12}p`:`${d}a`};return o.default.createElement("div",{className:"timeline-wrap"},o.default.createElement("div",{className:"timeline-track"},o.default.createElement("div",{className:"timeline-night",style:{left:"0%",width:`${6/24*100}%`}}),o.default.createElement("div",{className:"timeline-night",style:{left:`${22/24*100}%`,width:`${2/24*100}%`}}),u.map(s=>o.default.createElement("div",{key:s,className:"timeline-gridline",style:{left:`${s/24*100}%`}})),u.map(s=>o.default.createElement("div",{key:s,className:"timeline-hour",style:{left:`${s/24*100}%`}},o.default.createElement("span",null,c(s)))),o.default.createElement("div",{className:"timeline-elapsed",style:{width:a?`${i}%`:"0%"}}),t.map((s,d)=>{let v=Kl(s.time),y=v/n*100,m=Math.max(.8,s.duration/n*100),p=(s.history||[]).includes(_(0)),x=$a(s.id),b=m/100*340>46;return o.default.createElement("div",{key:s.id,className:`timeline-block ${p?"done":""}`,style:{left:`${y}%`,width:a?`${m}%`:"0%",transitionDelay:`${d*25}ms`,background:p?"linear-gradient(180deg, #3A4048, #2A2F36)":`linear-gradient(180deg, ${x}, ${x}CC)`,boxShadow:p?"none":`0 0 10px ${x}55`},title:`${s.label} \xB7 ${Fa(v)} \xB7 ${Qe(s.duration)}${p?" \xB7 done":""}`},b&&o.default.createElement("span",{className:"timeline-block-label"},s.label))}),o.default.createElement("div",{className:"timeline-now",style:{left:`${i}%`}},o.default.createElement("span",{className:"timeline-now-tag"},Fa(l)))),t.length>0&&o.default.createElement("div",{className:"timeline-legend"},t.map(s=>{let d=(s.history||[]).includes(_(0));return o.default.createElement("span",{key:s.id,className:`timeline-legend-chip ${d?"done":""}`},o.default.createElement("span",{className:"timeline-legend-dot",style:{background:d?"#3A4048":$a(s.id)}}),s.label)})))}var Gh=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[_(-1),_(-2),_(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[_(-1),_(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[_(0),_(-1),_(-2),_(-3),_(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[_(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Ss(){let[t,l]=(0,o.useState)(gm());return(0,o.useEffect)(()=>{let a=setInterval(()=>l(gm()),1e3);return()=>clearInterval(a)},[]),t}function As(t,l){return(0,o.useMemo)(()=>{let a=[...t].sort((i,u)=>Kl(i.time)-Kl(u.time));if(a.length===0)return{sorted:a,currentId:null,nextId:null};let e=a.length-1;for(let i=0;i<a.length&&Kl(a[i].time)<=l;i++)e=i;let n=(e+1)%a.length;return{sorted:a,currentId:a[e].id,nextId:a[n].id}},[t,l])}function Qh({history:t}){let l=new Set(t||[]),a=[-6,-5,-4,-3,-2,-1,0].map(e=>_(e));return o.default.createElement("span",{className:"week-dots"},a.map((e,n)=>o.default.createElement("span",{key:n,className:`week-dot ${l.has(e)?"filled":""}`})))}function Zh({routine:t,status:l,index:a,onDelete:e,onToggleToday:n,onSave:i}){let u=Kl(t.time),c=u+t.duration,{streak:s,freezeUsed:d}=Ou(t.history),v=(t.history||[]).includes(_(0)),[y,m]=(0,o.useState)(0),p=(0,o.useRef)(!1),x=(0,o.useRef)(0),b=(0,o.useRef)(0),S=(0,o.useRef)(null),r=(0,o.useRef)(!1),[f,h]=(0,o.useState)(!1),[g,z]=(0,o.useState)(!1),[D,M]=(0,o.useState)(t.label),[k,B]=(0,o.useState)(t.time),[C,N]=(0,o.useState)(t.duration),w=()=>{M(t.label),B(t.time),N(t.duration),z(!0)},H=()=>{let V=D.trim();V&&(i(t.id,{label:V,time:k||t.time,duration:Math.max(5,+C||t.duration)}),z(!1))},ut=V=>{g||(p.current=!0,r.current=!1,S.current=null,x.current=V.clientX,b.current=V.clientY)},mt=V=>{if(!p.current)return;let dl=V.clientX-x.current,Na=V.clientY-b.current;if(S.current===null){if(Math.abs(dl)<6&&Math.abs(Na)<6)return;if(S.current=Math.abs(dl)>Math.abs(Na)?"x":"y",S.current==="y"){p.current=!1;return}}S.current==="x"&&(Math.abs(dl)>4&&(r.current=!0),m(Math.max(-120,Math.min(0,dl))))},Gt=()=>{p.current&&(p.current=!1,y<-70?(h(!0),setTimeout(()=>e(t.id),200)):(m(0),r.current||w()))};return o.default.createElement("div",{className:`routine-row-wrap ${f?"removing":""}`,style:{animationDelay:`${a*35}ms`}},o.default.createElement("div",{className:"routine-delete-bg"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),o.default.createElement("div",{className:`routine-row ${l}`,style:{transform:`translateX(${y}px)`,transition:p.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${v?"#2A2F36":$a(t.id)}`},onPointerDown:ut,onPointerMove:mt,onPointerUp:Gt,onPointerLeave:Gt,onPointerCancel:Gt},o.default.createElement("div",{className:"routine-line"},o.default.createElement("span",{className:`routine-node ${v?"quest-done":""}`}),o.default.createElement("span",{className:"routine-connector"})),g?o.default.createElement("div",{className:"routine-edit",onPointerDown:V=>V.stopPropagation()},o.default.createElement("input",{className:"edit-label",value:D,onChange:V=>M(V.target.value),onKeyDown:V=>V.key==="Enter"&&H(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"time",className:"time-input",value:k,onChange:V=>B(V.target.value)}),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:C,onChange:V=>N(V.target.value)}),o.default.createElement("span",{className:"edit-unit"},"min")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>z(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:H},"save"))):o.default.createElement("div",{className:"routine-main"},o.default.createElement("div",{className:"routine-top"},o.default.createElement("span",{className:"routine-time"},Fa(u)),l==="current"&&o.default.createElement("span",{className:"live-tag"},"NOW"),s>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",s,d&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("span",{className:"routine-label"},t.label),o.default.createElement("span",{className:"routine-span"},Fa(u)," \u2013 ",Fa(c)," \xB7 ",Qe(t.duration)),o.default.createElement(Qh,{history:t.history})),!g&&o.default.createElement("button",{className:`quest-check ${v?"done":""}`,onClick:V=>{V.stopPropagation(),n(t.id)},onPointerDown:V=>V.stopPropagation(),"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:v?0:24,transition:"stroke-dashoffset 220ms ease"}})))))}function Vh({routines:t}){let l=[-6,-5,-4,-3,-2,-1,0],a=t.length||1,e=l.map(n=>{let i=_(n),u=t.filter(c=>(c.history||[]).includes(i)).length;return{offset:n,pct:Math.round(u/a*100),label:Ch(n)}});return o.default.createElement("div",{className:"week-chart"},e.map((n,i)=>o.default.createElement("div",{className:"week-bar-col",key:i},o.default.createElement("div",{className:"week-bar-track"},o.default.createElement("div",{className:`week-bar-fill ${n.offset===0?"today":""}`,style:{height:`${Math.max(4,n.pct)}%`}})),o.default.createElement("span",{className:"week-bar-label"},n.label))))}function Jh({routines:t,setRoutines:l}){let a=Ss(),e=a.hour*60+a.minute,{sorted:n,currentId:i,nextId:u}=As(t,e),c=n.find(N=>N.id===i),s=n.find(N=>N.id===u),[d,v]=(0,o.useState)(""),[y,m]=(0,o.useState)(()=>xs(e)),[p,x]=(0,o.useState)(30),[b,S]=(0,o.useState)(!1),r=()=>{let N=d.trim();if(!N){S(!0),setTimeout(()=>S(!1),420),L.error();return}let w=y||xs(e);l(H=>[...H,{id:tl(),time:w,label:N,duration:Math.max(5,+p||30),history:[]}]),v(""),m(xs(e)),x(30),L.click()},f=N=>{l(w=>w.filter(H=>H.id!==N)),L.delete()},h=N=>{let w=_(0),H=!1;l(ut=>ut.map(mt=>{if(mt.id!==N)return mt;let Gt=(mt.history||[]).includes(w);H=!Gt;let V=Gt?mt.history.filter(dl=>dl!==w):[...mt.history||[],w];return{...mt,history:V.slice(-60)}})),H?L.success():L.click()},g=(N,w)=>l(H=>H.map(ut=>ut.id===N?{...ut,...w}:ut)),z=c?Kl(c.time)+c.duration:0,D=s?(Kl(s.time)-e+1440)%1440||1440:0,M=_(0),k=n.filter(N=>(N.history||[]).includes(M)).length,B=n.reduce((N,w)=>Math.max(N,wh(w.history)),0),C=n.length?Math.round(k/n.length*100):0;return o.default.createElement("div",{className:"task-list routine-list"},o.default.createElement("div",{className:"hero-card"},o.default.createElement("div",{className:"hero-clock-row"},o.default.createElement("span",{className:"hero-clock"},String(a.hour%12===0?12:a.hour%12).padStart(2,"0"),":",String(a.minute).padStart(2,"0"),o.default.createElement("span",{className:"hero-sec"},":",String(a.second).padStart(2,"0")),o.default.createElement("span",{className:"hero-ampm"},a.hour<12?"AM":"PM")),o.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),o.default.createElement("span",{className:"hero-date"},Oh()),o.default.createElement("div",{className:"hero-divider"}),c?o.default.createElement("div",{className:"hero-current"},o.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),o.default.createElement("div",{className:"hero-current-name"},o.default.createElement("span",{className:"pulse-dot"}),c.label),o.default.createElement("span",{className:"hero-sub"},"until ",Fa(z)," \xB7 next: ",s?.label," in ",Qe(D))):o.default.createElement("span",{className:"hero-sub"},"no routines yet")),o.default.createElement("div",{className:"quest-stats"},o.default.createElement("div",{className:"quest-stat-item"},o.default.createElement("span",{className:"quest-stat-value"},o.default.createElement(vl,{value:k}),o.default.createElement("span",{className:"quest-stat-of"},"/",n.length)),o.default.createElement("span",{className:"quest-stat-label"},"today")),o.default.createElement("div",{className:"quest-stat-item"},o.default.createElement("span",{className:"quest-stat-value amber"},"\u{1F525}",o.default.createElement(vl,{value:B})),o.default.createElement("span",{className:"quest-stat-label"},"best streak")),o.default.createElement("div",{className:"quest-stat-item quest-stat-ring"},o.default.createElement(Cu,{pct:C,size:44,stroke:3.5,label:`${C}%`}))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"TODAY'S SCHEDULE")),o.default.createElement(Lh,{routines:n,nowMinutes:e}),o.default.createElement("div",{className:`composer ${b?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new routine...",value:d,onChange:N=>v(N.target.value),onKeyDown:N=>N.key==="Enter"&&r()}),o.default.createElement("input",{type:"time",className:"time-input",value:y,onChange:N=>m(N.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:r,"aria-label":"Add routine"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},_h.map(N=>o.default.createElement("button",{key:N,className:p===N?"active":"",onClick:()=>x(N)},Qe(N))),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:p,onChange:N=>x(+N.target.value||5)})),n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):n.map((N,w)=>o.default.createElement(Zh,{key:N.id,routine:N,index:w,status:N.id===i?"current":N.id===u?"next":"idle",onDelete:f,onToggleToday:h,onSave:g})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"7-DAY COMPLETION")),o.default.createElement(Vh,{routines:n}))}function Kh(){let t=new Date,l=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),a=+l.find(u=>u.type==="year").value,e=+l.find(u=>u.type==="month").value,n=new Date(a,e,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(t);return{y:a,m:e,daysInMonth:n,monthLabel:i}}function Fh(t,l,a){return`${t}-${String(l).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function Om(t){let l=new Set(t||[]),a=0;for(let e=-6;e<=0;e++)l.has(_(e))&&a++;return a}function $h(t){if(!t)return null;let l=new Date(t+"T00:00:00+05:30"),a=new Date(_(0)+"T00:00:00+05:30"),e=Math.round((l-a)/864e5);return e<0?{text:`${Math.abs(e)}d overdue`,overdue:!0}:e===0?{text:"due today",overdue:!1}:{text:`${e}d to go`,overdue:!1}}var Wh=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[_(0),_(-1),_(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[_(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[_(0)]}],Rh=[{id:1,name:"Notion Template",dueDate:_(7),tasks:[{id:tl(),text:"Design layout",done:!0},{id:tl(),text:"Write docs",done:!1},{id:tl(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:_(7),tasks:[{id:tl(),text:"Script draft",done:!1},{id:tl(),text:"Record",done:!1}]}];function Ih({history:t}){let{y:l,m:a,daysInMonth:e,monthLabel:n}=Kh(),i=new Set(t||[]),u=_(0),c=Array.from({length:e},(s,d)=>d+1);return o.default.createElement("div",{className:"month-grid-wrap"},o.default.createElement("span",{className:"month-grid-label"},n),o.default.createElement("div",{className:"month-grid"},c.map(s=>{let d=Fh(l,a,s);return o.default.createElement("span",{key:s,className:`month-cell ${i.has(d)?"filled":""} ${d===u?"today":""}`,style:{animationDelay:`${s*6}ms`},title:d})})))}function Ph({habit:t,onToggleToday:l,onDelete:a,onSave:e}){let n=(t.history||[]).includes(_(0)),{streak:i,freezeUsed:u}=Ou(t.history),c=Om(t.history),s=Math.min(100,Math.round(c/t.weeklyGoal*100)),[d,v]=(0,o.useState)(!1),[y,m]=(0,o.useState)(t.icon),[p,x]=(0,o.useState)(t.label),[b,S]=(0,o.useState)(t.weeklyGoal),r=()=>{m(t.icon),x(t.label),S(t.weeklyGoal),v(!0)},f=()=>{let h=p.trim();h&&(e(t.id,{icon:y.trim()||t.icon,label:h,weeklyGoal:Math.max(1,Math.min(7,+b||t.weeklyGoal))}),v(!1))};return d?o.default.createElement("div",{className:"vault-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{className:"duration-input",style:{width:44},value:y,onChange:h=>m(h.target.value),maxLength:2}),o.default.createElement("input",{className:"edit-label",style:{flex:1},value:p,onChange:h=>x(h.target.value),onKeyDown:h=>h.key==="Enter"&&f(),autoFocus:!0})),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:b,onChange:h=>S(h.target.value)}),o.default.createElement("span",{className:"edit-unit"},"x / week")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>v(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:f},"save")))):o.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${$a(t.id)}`}},o.default.createElement("div",{className:"vault-card-top"},o.default.createElement("span",{className:"vault-card-icon",style:{color:$a(t.id)}},t.icon),o.default.createElement("div",{className:"vault-card-title"},o.default.createElement("span",{className:"vault-card-label"},t.label),o.default.createElement("span",{className:"vault-card-goal"},"weekly: ",t.weeklyGoal,"x")),o.default.createElement("button",{className:"vault-card-edit",onClick:r,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>a(t.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),o.default.createElement(Ih,{history:t.history}),o.default.createElement("div",{className:"vault-card-bottom"},o.default.createElement("div",{className:"vault-card-ring-row"},o.default.createElement(Cu,{pct:s,size:34,stroke:3.5,color:$a(t.id)}),o.default.createElement("span",{className:"vault-card-pct"},s,"% ",o.default.createElement("span",{className:"muted"},"(",c,"/",t.weeklyGoal,")"))),i>0&&o.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,u&&o.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),o.default.createElement("button",{className:`vault-check ${n?"done":""}`,onClick:()=>l(t.id)},n?"\u2713 completed today":"mark complete today"))}function tv({habits:t,setHabits:l}){let[a,e]=(0,o.useState)(""),[n,i]=(0,o.useState)(7),[u,c]=(0,o.useState)(!1),s=()=>{let m=a.trim();if(!m){c(!0),setTimeout(()=>c(!1),420),L.error();return}l(p=>[...p,{id:tl(),icon:"\u25C6",label:m,weeklyGoal:n,history:[]}]),e(""),i(7),L.click()},d=m=>{l(p=>p.filter(x=>x.id!==m)),L.delete()},v=(m,p)=>l(x=>x.map(b=>b.id===m?{...b,...p}:b)),y=m=>{let p=_(0),x=!1;l(b=>b.map(S=>{if(S.id!==m)return S;let r=(S.history||[]).includes(p);x=!r;let f=r?S.history.filter(h=>h!==p):[...S.history||[],p];return{...S,history:f.slice(-370)}})),x?L.success():L.click()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"HABIT-STREAK-TRACKING")),o.default.createElement("div",{className:"vault-grid"},t.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):t.map(m=>o.default.createElement(Ph,{key:m.id,habit:m,onToggleToday:y,onDelete:d,onSave:v}))),o.default.createElement("div",{className:`composer ${u?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new habit...",value:a,onChange:m=>e(m.target.value),onKeyDown:m=>m.key==="Enter"&&s()}),o.default.createElement("button",{className:"add-btn",onClick:s,"aria-label":"Add habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(m=>o.default.createElement("button",{key:m,className:n===m?"active":"",onClick:()=>i(m)},m,"x/wk"))))}function lv({projectId:t,task:l,onToggle:a,onDelete:e,onEdit:n}){let[i,u]=(0,o.useState)(!1),[c,s]=(0,o.useState)(l.text),d=()=>{let v=c.trim();v&&n(t,l.id,v),u(!1)};return i?o.default.createElement("div",{className:"project-task-row"},o.default.createElement("input",{className:"project-task-edit",value:c,onChange:v=>s(v.target.value),onKeyDown:v=>v.key==="Enter"&&d(),onBlur:d,autoFocus:!0})):o.default.createElement("div",{className:"project-task-row"},o.default.createElement(wm,{checked:l.done,onChange:()=>a(t,l.id),color:"#5EEAD4"}),o.default.createElement("span",{className:`project-task-text ${l.done?"done":""}`,onClick:()=>u(!0)},l.text),o.default.createElement("button",{className:"del-btn",onClick:()=>e(t,l.id),"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function av({project:t,onDelete:l,onAddTask:a,onToggleTask:e,onDeleteTask:n,onEditTask:i,onSave:u}){let[c,s]=(0,o.useState)(""),d=t.tasks.length,v=t.tasks.filter(D=>D.done).length,y=d?Math.round(v/d*100):0,m=$h(t.dueDate),[p,x]=(0,o.useState)(!1),[b,S]=(0,o.useState)(t.name),[r,f]=(0,o.useState)(t.dueDate||""),h=()=>{let D=c.trim();D&&(a(t.id,D),s(""))},g=()=>{S(t.name),f(t.dueDate||""),x(!0)},z=()=>{let D=b.trim();D&&(u(t.id,{name:D,dueDate:r||null}),x(!1))};return p?o.default.createElement("div",{className:"project-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:b,onChange:D=>S(D.target.value),onKeyDown:D=>D.key==="Enter"&&z(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"date",className:"time-input",value:r,onChange:D=>f(D.target.value)})),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>x(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:z},"save")))):o.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${$a(t.id)}`}},o.default.createElement("div",{className:"project-card-top"},o.default.createElement("span",{className:"project-name"},t.name),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>l(t.id),"aria-label":"Delete project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),m&&o.default.createElement("span",{className:`project-due ${m.overdue?"overdue":""}`},m.text),o.default.createElement("div",{className:"progress-track small"},o.default.createElement("div",{className:"progress-fill",style:{width:`${y}%`}})),o.default.createElement("span",{className:"vault-card-pct"},v,"/",d," tasks \xB7 ",y,"%"),o.default.createElement("div",{className:"project-tasks"},t.tasks.map(D=>o.default.createElement(lv,{key:D.id,projectId:t.id,task:D,onToggle:e,onDelete:n,onEdit:i}))),o.default.createElement("div",{className:"project-add-task"},o.default.createElement("input",{type:"text",placeholder:"+ add task...",value:c,onChange:D=>s(D.target.value),onKeyDown:D=>D.key==="Enter"&&h()})))}function ev({projects:t,setProjects:l}){let[a,e]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[u,c]=(0,o.useState)(!1),s=()=>{let b=a.trim();if(!b){c(!0),setTimeout(()=>c(!1),420),L.error();return}l(S=>[...S,{id:tl(),name:b,dueDate:n||null,tasks:[]}]),e(""),i(""),L.click()},d=b=>{l(S=>S.filter(r=>r.id!==b)),L.delete()},v=(b,S)=>l(r=>r.map(f=>f.id===b?{...f,...S}:f)),y=(b,S)=>{l(r=>r.map(f=>f.id===b?{...f,tasks:[...f.tasks,{id:tl(),text:S,done:!1}]}:f)),L.click()},m=(b,S)=>{l(r=>r.map(f=>f.id!==b?f:{...f,tasks:f.tasks.map(h=>h.id===S?{...h,done:!h.done}:h)})),L.success()},p=(b,S)=>{l(r=>r.map(f=>f.id!==b?f:{...f,tasks:f.tasks.filter(h=>h.id!==S)})),L.delete()},x=(b,S,r)=>l(f=>f.map(h=>h.id!==b?h:{...h,tasks:h.tasks.map(g=>g.id===S?{...g,text:r}:g)}));return o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"PROJECT-MANAGER")),o.default.createElement("div",{className:"vault-grid"},t.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no projects yet")):t.map(b=>o.default.createElement(av,{key:b.id,project:b,onDelete:d,onAddTask:y,onToggleTask:m,onDeleteTask:p,onEditTask:x,onSave:v}))),o.default.createElement("div",{className:`composer ${u?"shake":""}`},o.default.createElement("input",{type:"text",placeholder:"new project...",value:a,onChange:b=>e(b.target.value),onKeyDown:b=>b.key==="Enter"&&s()}),o.default.createElement("input",{type:"date",className:"time-input",value:n,onChange:b=>i(b.target.value)}),o.default.createElement("button",{className:"add-btn",onClick:s,"aria-label":"Add project"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function nv({vaultHabits:t,setVaultHabits:l,projects:a,setProjects:e}){return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement(tv,{habits:t,setHabits:l}),o.default.createElement(ev,{projects:a,setProjects:e}))}var Fl=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],bm=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function $a(t){let l=typeof t=="number"?t:String(t).split("").reduce((a,e)=>a+e.charCodeAt(0),0);return bm[Math.abs(l)%bm.length]}var $n=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Cm(t,l,a){let e=t.reduce((u,c)=>u+c.xp*(c.history?.length||0),0),n=l.reduce((u,c)=>u+c.xp*(c.history?.length||0),0),i=a.reduce((u,c)=>u+c.cost*(c.claimed?.length||0),0);return e-n-i}function iv(t,l,a){let e=l.filter(i=>i.area===t).reduce((i,u)=>i+u.xp*(u.history?.length||0),0),n=a.filter(i=>i.area===t).reduce((i,u)=>i+u.xp*(u.history?.length||0),0);return e-n}function Es(t){return 50*t*(t-1)}function uv(t){let l=Math.max(0,t),a=Math.max(1,Math.floor((50+Math.sqrt(2500+200*l))/100)),e=l-Es(a),n=Es(a+1)-Es(a);return{level:a,into:e,span:n}}function ov(t){let l=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],a=t,e="";for(let[n,i]of l)for(;a>=n;)e+=i,a-=n;return e}function cv(t){if(t<=$n.length)return $n[t-1];let l=t-$n.length+1;return`${$n[$n.length-1]} ${ov(l)}`}var sv=[{id:1,label:"Deep Work",area:"work",xp:40,history:[_(0),_(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[_(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],fv=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],rv=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function dv({habit:t,onToggleToday:l,onDelete:a,onSave:e}){let n=(t.history||[]).includes(_(0)),{streak:i,freezeUsed:u}=Ou(t.history),c=Fl.find(f=>f.key===t.area)||Fl[0],[s,d]=(0,o.useState)(!1),[v,y]=(0,o.useState)(t.label),[m,p]=(0,o.useState)(t.area),[x,b]=(0,o.useState)(t.xp),S=()=>{y(t.label),p(t.area),b(t.xp),d(!0)},r=()=>{let f=v.trim();f&&(e(t.id,{label:f,area:m,xp:Math.max(1,+x||t.xp)}),d(!1))};return s?o.default.createElement("div",{className:"quest-habit-card good editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:v,onChange:f=>y(f.target.value),onKeyDown:f=>f.key==="Enter"&&r(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},Fl.map(f=>o.default.createElement("button",{key:f.key,type:"button",className:`area-chip ${m===f.key?"active":""}`,style:{"--ac":f.color},onClick:()=>p(f.key)},f.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:x,onChange:f=>b(f.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>d(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:r},"save")))):o.default.createElement("div",{className:"quest-habit-card good"},o.default.createElement("span",{className:"area-dot",style:{background:c.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},t.label),o.default.createElement("span",{className:"quest-habit-meta"},"+",t.xp," XP \xB7 ",c.label,i>0?` \xB7 \u{1F525}${i}${u?" \u2744\uFE0F":""}`:"")),o.default.createElement("button",{className:`quest-check ${n?"done":""}`,onClick:()=>l(t.id),"aria-label":"Mark done today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:n?0:24,transition:"stroke-dashoffset 220ms ease"}}))),o.default.createElement("button",{className:"vault-card-edit",onClick:S,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>a(t.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function mv({habit:t,onToggleToday:l,onDelete:a,onSave:e}){let n=(t.history||[]).includes(_(0)),i=Fl.find(r=>r.key===t.area)||Fl[0],u=Om(t.history),[c,s]=(0,o.useState)(!1),[d,v]=(0,o.useState)(t.label),[y,m]=(0,o.useState)(t.area),[p,x]=(0,o.useState)(t.xp),b=()=>{v(t.label),m(t.area),x(t.xp),s(!0)},S=()=>{let r=d.trim();r&&(e(t.id,{label:r,area:y,xp:Math.max(1,+p||t.xp)}),s(!1))};return c?o.default.createElement("div",{className:"quest-habit-card bad editing"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:d,onChange:r=>v(r.target.value),onKeyDown:r=>r.key==="Enter"&&S(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},Fl.map(r=>o.default.createElement("button",{key:r.key,type:"button",className:`area-chip ${y===r.key?"active":""}`,style:{"--ac":r.color},onClick:()=>m(r.key)},r.label))),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:p,onChange:r=>x(r.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>s(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:S},"save")))):o.default.createElement("div",{className:"quest-habit-card bad"},o.default.createElement("span",{className:"area-dot",style:{background:i.color}}),o.default.createElement("div",{className:"quest-habit-main"},o.default.createElement("span",{className:"quest-habit-label"},t.label),o.default.createElement("span",{className:"quest-habit-meta"},"-",t.xp," XP \xB7 ",i.label," \xB7 ",u,"x this week")),o.default.createElement("button",{className:`quest-check bad-check ${n?"done":""}`,onClick:()=>l(t.id),"aria-label":"Log slip today"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),o.default.createElement("button",{className:"vault-card-edit",onClick:b,"aria-label":"Edit habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"del-btn",onClick:()=>a(t.id),"aria-label":"Delete habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function pv({reward:t,canClaim:l,onClaim:a,onDelete:e,onSave:n}){let[i,u]=(0,o.useState)(!1),[c,s]=(0,o.useState)(t.label),[d,v]=(0,o.useState)(t.cost),y=()=>{s(t.label),v(t.cost),u(!0)},m=()=>{let p=c.trim();p&&(n(t.id,{label:p,cost:Math.max(1,+d||t.cost)}),u(!1))};return i?o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"routine-edit"},o.default.createElement("input",{className:"edit-label",value:c,onChange:p=>s(p.target.value),onKeyDown:p=>p.key==="Enter"&&m(),autoFocus:!0}),o.default.createElement("div",{className:"edit-row"},o.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:d,onChange:p=>v(p.target.value)}),o.default.createElement("span",{className:"edit-unit"},"XP cost")),o.default.createElement("div",{className:"edit-actions"},o.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),o.default.createElement("button",{className:"edit-save",onClick:m},"save")))):o.default.createElement("div",{className:"reward-card"},o.default.createElement("div",{className:"reward-top"},o.default.createElement("span",{className:"reward-label"},t.label),o.default.createElement("div",{className:"project-card-actions"},o.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"vault-card-del",onClick:()=>e(t.id),"aria-label":"Delete reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),o.default.createElement("span",{className:"reward-cost"},t.cost," XP"),o.default.createElement("button",{className:"reward-claim",disabled:!l,onClick:()=>a(t.id)},l?"claim reward":"not enough XP"),t.claimed?.length>0&&o.default.createElement("span",{className:"reward-claimed-count"},"claimed ",t.claimed.length,"x"))}function hv({goodHabits:t,setGoodHabits:l,badHabits:a,setBadHabits:e,rewards:n,setRewards:i}){let u=(0,o.useMemo)(()=>Cm(t,a,n),[t,a,n]),{level:c,into:s,span:d}=uv(u),v=Math.round(s/d*100),y=A=>{let G=_(0),ct=!1;l(ot=>ot.map(Ot=>{if(Ot.id!==A)return Ot;let za=(Ot.history||[]).includes(G);ct=!za;let Ve=za?Ot.history.filter(T=>T!==G):[...Ot.history||[],G];return{...Ot,history:Ve.slice(-370)}})),ct?L.success():L.click()},m=A=>{let G=_(0),ct=!1;e(ot=>ot.map(Ot=>{if(Ot.id!==A)return Ot;let za=(Ot.history||[]).includes(G);ct=!za;let Ve=za?Ot.history.filter(T=>T!==G):[...Ot.history||[],G];return{...Ot,history:Ve.slice(-370)}})),ct?L.error():L.click()},p=A=>{l(G=>G.filter(ct=>ct.id!==A)),L.delete()},x=A=>{e(G=>G.filter(ct=>ct.id!==A)),L.delete()},b=(A,G)=>l(ct=>ct.map(ot=>ot.id===A?{...ot,...G}:ot)),S=(A,G)=>e(ct=>ct.map(ot=>ot.id===A?{...ot,...G}:ot)),r=A=>{let G=_(0);i(ct=>ct.map(ot=>ot.id===A?{...ot,claimed:[...ot.claimed||[],G]}:ot)),L.success()},f=A=>{i(G=>G.filter(ct=>ct.id!==A)),L.delete()},h=(A,G)=>i(ct=>ct.map(ot=>ot.id===A?{...ot,...G}:ot)),[g,z]=(0,o.useState)(""),[D,M]=(0,o.useState)("work"),[k,B]=(0,o.useState)(20),[C,N]=(0,o.useState)(""),[w,H]=(0,o.useState)("work"),[ut,mt]=(0,o.useState)(20),[Gt,V]=(0,o.useState)(""),[dl,Na]=(0,o.useState)(100),Wn=()=>{let A=g.trim();A&&(l(G=>[...G,{id:tl(),label:A,area:D,xp:+k||10,history:[]}]),z(""),L.click())},Nl=()=>{let A=C.trim();A&&(e(G=>[...G,{id:tl(),label:A,area:w,xp:+ut||10,history:[]}]),N(""),L.click())},Ze=()=>{let A=Gt.trim();A&&(i(G=>[...G,{id:tl(),label:A,cost:+dl||50,claimed:[]}]),V(""),L.click())},Wa=Fl.map(A=>({key:A.key,label:A.label,color:A.color,value:Math.max(0,iv(A.key,t,a))})),zl=t.reduce((A,G)=>A+G.xp*(G.history?.length||0),0),Tl=a.reduce((A,G)=>A+G.xp*(G.history?.length||0),0);return o.default.createElement("div",{className:"task-list vault-scroll"},o.default.createElement("div",{className:"hero-card hero-card-viz"},o.default.createElement("div",{className:"hero-viz-row"},o.default.createElement(Cu,{pct:v,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${c}`,sublabel:cv(c)}),o.default.createElement("div",{className:"hero-viz-stats"},o.default.createElement("span",{className:"hero-xp-total"},o.default.createElement(vl,{value:u})," ",o.default.createElement("small",null,"XP")),o.default.createElement("span",{className:"hero-xp-sub"},s,"/",d," to next level"),o.default.createElement("div",{className:"hero-xp-split"},o.default.createElement("span",{className:"hero-xp-earned"},"+",o.default.createElement(vl,{value:zl})),o.default.createElement("span",{className:"hero-xp-lost"},"\u2212",o.default.createElement(vl,{value:Tl})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"LIFE-AREAS")),o.default.createElement("div",{className:"radar-card"},o.default.createElement(Xh,{axes:Wa,size:230})),(zl>0||Tl>0)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"XP SOURCE")),o.default.createElement("div",{className:"donut-card"},o.default.createElement(Bm,{size:120,stroke:16,centerLabel:u,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:zl,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Tl,color:"#F0576B"}]}),o.default.createElement("div",{className:"donut-legend"},o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),o.default.createElement("span",null,"Earned from good habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(vl,{value:zl}))),o.default.createElement("div",{className:"donut-legend-row"},o.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),o.default.createElement("span",null,"Lost to bad habits"),o.default.createElement("span",{className:"donut-legend-val"},o.default.createElement(vl,{value:Tl})))))),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"GOOD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},t.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no good habits yet")):t.map(A=>o.default.createElement(dv,{key:A.id,habit:A,onToggleToday:y,onDelete:p,onSave:b}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new good habit...",value:g,onChange:A=>z(A.target.value),onKeyDown:A=>A.key==="Enter"&&Wn()}),o.default.createElement("button",{className:"add-btn",onClick:Wn,"aria-label":"Add good habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},Fl.map(A=>o.default.createElement("button",{key:A.key,className:D===A.key?"active":"",onClick:()=>M(A.key)},A.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:k,onChange:A=>B(+A.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"BAD-HABITS")),o.default.createElement("div",{className:"quest-habit-list"},a.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no bad habits tracked")):a.map(A=>o.default.createElement(mv,{key:A.id,habit:A,onToggleToday:m,onDelete:x,onSave:S}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:C,onChange:A=>N(A.target.value),onKeyDown:A=>A.key==="Enter"&&Nl()}),o.default.createElement("button",{className:"add-btn",onClick:Nl,"aria-label":"Add bad habit"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"duration-chips"},Fl.map(A=>o.default.createElement("button",{key:A.key,className:w===A.key?"active":"",onClick:()=>H(A.key)},A.label)),o.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:ut,onChange:A=>mt(+A.target.value||5)})),o.default.createElement("div",{className:"section-header"},o.default.createElement("span",null,"REWARD-CENTER")),o.default.createElement("div",{className:"vault-grid"},n.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(A=>o.default.createElement(pv,{key:A.id,reward:A,canClaim:u>=A.cost,onClaim:r,onDelete:f,onSave:h}))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{type:"text",placeholder:"new reward...",value:Gt,onChange:A=>V(A.target.value),onKeyDown:A=>A.key==="Enter"&&Ze()}),o.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:dl,onChange:A=>Na(+A.target.value||50)}),o.default.createElement("button",{className:"add-btn",onClick:Ze,"aria-label":"Add reward"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var vv=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function yv(t=1e3*30){let[l,a]=(0,o.useState)(Date.now());return(0,o.useEffect)(()=>{let e=setInterval(()=>a(Date.now()),t);return()=>clearInterval(e)},[t]),l}function gv(t,l){let a=Math.floor((l-t)/1e3);if(a<60)return"just now";let e=Math.floor(a/60);if(e<60)return`${e}m ago`;let n=Math.floor(e/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function wm({checked:t,onChange:l,color:a}){return o.default.createElement("button",{onClick:l,"aria-checked":t,role:"checkbox",className:"checkbox-btn",style:{"--c":a}},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:t?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function bv({task:t,now:l,onToggle:a,onDelete:e,index:n}){let[i,u]=(0,o.useState)(!1),c=Bu.find(d=>d.key===t.priority)||Bu[0],s=()=>{u(!0),setTimeout(()=>e(t.id),220)};return o.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${n*35}ms`}},o.default.createElement(wm,{checked:t.done,onChange:()=>a(t.id),color:c.color}),o.default.createElement("div",{className:"task-main"},o.default.createElement("span",{className:`task-text ${t.done?"done":""}`},t.text),o.default.createElement("span",{className:"task-meta"},o.default.createElement("span",{className:"prio-dot",style:{background:c.color}}),o.default.createElement("span",{className:"prio-label"},c.label),o.default.createElement("span",{className:"dot-sep"},"\xB7"),o.default.createElement("span",null,gv(t.createdAt,l)))),o.default.createElement("button",{className:"del-btn",onClick:s,"aria-label":"Delete task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var xm="tasksh.tasks.v1",Em="tasksh.routines.v1",Sm="tasksh.vaulthabits.v1",Am="tasksh.projects.v1",Nm="tasksh.goodhabits.v1",zm="tasksh.badhabits.v1",Tm="tasksh.rewards.v1";function Ja(t,l){try{let a=localStorage.getItem(t);return a?JSON.parse(a):l}catch{return l}}function xv(t){typeof t=="number"&&Number.isFinite(t)&&t>ku&&(ku=t)}function Ev(t){let l=0,a=e=>{typeof e=="number"&&Number.isFinite(e)&&e>l&&(l=e)};return(t.tasks||[]).forEach(e=>a(e?.id)),(t.routines||[]).forEach(e=>a(e?.id)),(t.vaultHabits||[]).forEach(e=>a(e?.id)),(t.goodHabits||[]).forEach(e=>a(e?.id)),(t.badHabits||[]).forEach(e=>a(e?.id)),(t.rewards||[]).forEach(e=>a(e?.id)),(t.projects||[]).forEach(e=>{a(e?.id),(e?.tasks||[]).forEach(n=>a(n?.id))}),l}function Sv({routines:t,setRoutines:l,tasks:a,setTasks:e,vaultHabits:n,goodHabits:i,rewards:u,setRewards:c,totalXP:s,setTab:d}){let v=Ss(),y=v.hour*60+v.minute,{sorted:m,currentId:p,nextId:x}=As(t,y),b=m.find(N=>N.id===p),S=m.find(N=>N.id===x),r=_(0),f=N=>{let w=!1;l(H=>H.map(ut=>{if(ut.id!==N)return ut;let mt=(ut.history||[]).includes(r);w=!mt;let Gt=mt?ut.history.filter(V=>V!==r):[...ut.history||[],r];return{...ut,history:Gt.slice(-60)}})),w?L.success():L.click()},h=(0,o.useMemo)(()=>{let N={high:0,mid:1,low:2};return[...a].filter(w=>!w.done).sort((w,H)=>N[w.priority]-N[H.priority])},[a]),g=N=>{e(w=>w.map(H=>H.id===N?{...H,done:!H.done}:H)),L.success()},z=(0,o.useMemo)(()=>u.filter(N=>s>=N.cost),[u,s]),D=N=>{c(w=>w.map(H=>H.id===N?{...H,claimed:[...H.claimed||[],r]}:H)),L.success()},M=(0,o.useMemo)(()=>{let N={},w=H=>{(H||[]).forEach(ut=>{N[ut]=(N[ut]||0)+1})};return t.forEach(H=>w(H.history)),n.forEach(H=>w(H.history)),i.forEach(H=>w(H.history)),N},[t,n,i]),k=b||S,B=!!b,C=k?(k.history||[]).includes(r):!1;return o.default.createElement("div",{className:"task-list today-view"},o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,B?"HAPPENING NOW":"NEXT UP")),k?o.default.createElement("div",{className:"today-card"},o.default.createElement("div",{className:"today-card-row"},o.default.createElement("span",{className:"today-card-time"},Fa(Kl(k.time))),o.default.createElement("span",{className:"today-card-label"},k.label)),o.default.createElement("div",{className:"today-card-sub"},B?`in progress \xB7 ${Qe(k.duration)}`:`in ${Math.max(0,Kl(k.time)-y)}m \xB7 ${Qe(k.duration)}`),o.default.createElement("button",{className:`today-mark-btn ${C?"done":""}`,onClick:()=>f(k.id)},C?"\u2713 completed today":"mark complete")):o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"no routines set up yet")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"ACTIVITY")),o.default.createElement(jh,{counts:M,weeksBack:12}),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"OPEN TASKS"),h.length>0&&o.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),h.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):o.default.createElement("div",{className:"today-list"},h.slice(0,5).map((N,w)=>o.default.createElement("div",{key:N.id,className:"today-task-row",style:{animationDelay:`${w*35}ms`}},o.default.createElement("button",{className:"today-task-check",onClick:()=>g(N.id),"aria-label":"Complete task"}),o.default.createElement("span",{className:"today-task-text"},N.text),o.default.createElement("span",{className:`today-prio-dot ${N.priority}`}))),h.length>5&&o.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",h.length-5," more")),o.default.createElement("div",{className:"filters today-section-header"},o.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),o.default.createElement("span",{className:"today-xp-total"},o.default.createElement(vl,{value:s})," XP")),z.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):o.default.createElement("div",{className:"today-list"},z.map((N,w)=>o.default.createElement("div",{key:N.id,className:"today-task-row",style:{animationDelay:`${w*35}ms`}},o.default.createElement("span",{className:"today-task-text"},N.label),o.default.createElement("span",{className:"today-reward-cost"},N.cost," XP"),o.default.createElement("button",{className:"today-claim-btn",onClick:()=>D(N.id)},"claim")))))}function Av(){let[t,l]=(0,o.useState)("today"),[a,e]=Hh(),n=T=>{T!==t&&L.whoosh(),l(T)},[i,u]=(0,o.useState)(()=>Ja(xm,vv)),[c,s]=(0,o.useState)(()=>Ja(Em,Gh)),[d,v]=(0,o.useState)(()=>Ja(Sm,Wh)),[y,m]=(0,o.useState)(()=>Ja(Am,Rh)),[p,x]=(0,o.useState)(()=>Ja(Nm,sv)),[b,S]=(0,o.useState)(()=>Ja(zm,fv)),[r,f]=(0,o.useState)(()=>Ja(Tm,rv)),h=(0,o.useMemo)(()=>Cm(p,b,r),[p,b,r]),[g,z]=(0,o.useState)(""),[D,M]=(0,o.useState)("mid"),[k,B]=(0,o.useState)("all"),C=(0,o.useRef)(null),N=(0,o.useRef)(null),[w,H]=(0,o.useState)(null),ut=yv(),mt=(T,Y)=>{H({type:T,text:Y})};(0,o.useEffect)(()=>{if(!w)return;let T=setTimeout(()=>H(null),3200);return()=>clearTimeout(T)},[w]);let Gt=()=>{try{let T={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:c,vaultHabits:d,projects:y,goodHabits:p,badHabits:b,rewards:r}},Y=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),xt=URL.createObjectURL(Y),Et=_(0),Qt=document.createElement("a");Qt.href=xt,Qt.download=`tasks-sh-backup-${Et}.json`,document.body.appendChild(Qt),Qt.click(),Qt.remove(),URL.revokeObjectURL(xt),mt("ok","backup exported")}catch{mt("err","export failed")}},V=()=>N.current?.click(),dl=T=>{let Y=T.target.files&&T.target.files[0];if(T.target.value="",!Y)return;let xt=new FileReader;xt.onerror=()=>mt("err","couldn't read that file"),xt.onload=()=>{try{let Et=JSON.parse(String(xt.result)),Qt=Et&&typeof Et=="object"&&Et.data?Et.data:Et;if(!Qt||typeof Qt!="object")throw new Error("bad shape");let Ns={tasks:u,routines:s,vaultHabits:v,projects:m,goodHabits:x,badHabits:S,rewards:f},Rn=0;for(let wu of Object.keys(Ns))Array.isArray(Qt[wu])&&(Ns[wu](Qt[wu]),Rn++);if(Rn===0){mt("err","no recognizable data in that file");return}xv(Ev(Qt)),mt("ok",`imported ${Rn} data set${Rn===1?"":"s"}`)}catch{mt("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},xt.readAsText(Y)},Na=Ss(),Wn=Na.hour*60+Na.minute,{currentId:Nl,sorted:Ze}=As(c,Wn),[Wa,zl]=(0,o.useState)(null),Tl=(0,o.useRef)(void 0);(0,o.useEffect)(()=>{if(Tl.current===void 0){Tl.current=Nl;return}if(Nl!==Tl.current){let T=Ze.find(Y=>Y.id===Nl);T&&zl({id:Nl,label:T.label,time:T.time}),Tl.current=Nl}},[Nl,Ze]),(0,o.useEffect)(()=>{if(!Wa)return;let T=setTimeout(()=>zl(null),6e3);return()=>clearTimeout(T)},[Wa]),(0,o.useEffect)(()=>{try{localStorage.setItem(xm,JSON.stringify(i))}catch{}},[i]),(0,o.useEffect)(()=>{try{localStorage.setItem(Em,JSON.stringify(c))}catch{}},[c]),(0,o.useEffect)(()=>{try{localStorage.setItem(Sm,JSON.stringify(d))}catch{}},[d]),(0,o.useEffect)(()=>{try{localStorage.setItem(Am,JSON.stringify(y))}catch{}},[y]),(0,o.useEffect)(()=>{try{localStorage.setItem(Nm,JSON.stringify(p))}catch{}},[p]),(0,o.useEffect)(()=>{try{localStorage.setItem(zm,JSON.stringify(b))}catch{}},[b]),(0,o.useEffect)(()=>{try{localStorage.setItem(Tm,JSON.stringify(r))}catch{}},[r]);let A=(0,o.useMemo)(()=>{let T=i.length,Y=i.filter(Qt=>Qt.done).length,xt=T-Y,Et=T===0?0:Math.round(Y/T*100);return{total:T,done:Y,pending:xt,pct:Et}},[i]),G=(0,o.useMemo)(()=>{let T=i.filter(Y=>!Y.done);return Bu.map(Y=>({key:Y.key,label:Y.label,color:Y.color,value:T.filter(xt=>xt.priority===Y.key).length}))},[i]),ct=(0,o.useMemo)(()=>{let T=i;return k==="active"&&(T=T.filter(Y=>!Y.done)),k==="done"&&(T=T.filter(Y=>Y.done)),[...T].sort((Y,xt)=>{if(Y.done!==xt.done)return Y.done?1:-1;let Et={high:0,mid:1,low:2};return Et[Y.priority]-Et[xt.priority]})},[i,k]),ot=()=>{let T=g.trim();T&&(u(Y=>[...Y,{id:tl(),text:T,done:!1,priority:D,createdAt:Date.now()}]),z(""),C.current?.focus(),L.click())},Ot=T=>{let Y=!1;u(xt=>xt.map(Et=>Et.id!==T?Et:(Y=!Et.done,{...Et,done:!Et.done}))),Y?L.success():L.click()},za=T=>{u(Y=>Y.filter(xt=>xt.id!==T)),L.delete()},Ve=()=>{u(T=>T.filter(Y=>!Y.done)),L.whoosh()};return o.default.createElement("div",{className:"app-root"},o.default.createElement("style",null,`
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
          height: 46px;
          background: #191D23;
          border-radius: 8px;
          overflow: hidden;
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

        .timeline-hour {
          position: absolute;
          top: -16px;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 8.5px;
          color: #4B5563;
        }

        .timeline-block {
          position: absolute;
          top: 7px;
          height: 32px;
          border-radius: 5px;
          transition: width 500ms cubic-bezier(0.22, 1, 0.36, 1);
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
          display: flex;
          flex-wrap: wrap;
          gap: 6px 10px;
          margin-top: 14px;
          padding-top: 10px;
          border-top: 1px solid #1E2228;
        }

        .timeline-legend-chip {
          display: flex;
          align-items: center;
          gap: 5px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 9.5px;
          color: #9CA3AF;
        }

        .timeline-legend-chip.done { color: #565D68; }

        .timeline-legend-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          flex-shrink: 0;
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
      `),o.default.createElement("div",{className:"panel"},Wa&&o.default.createElement("div",{className:"quest-banner",onClick:()=>zl(null)},o.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),o.default.createElement("span",{className:"quest-banner-text"},o.default.createElement("b",null,"Now:")," ",Wa.label),o.default.createElement("button",{className:"quest-banner-close",onClick:T=>{T.stopPropagation(),zl(null)},"aria-label":"Dismiss"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},o.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),o.default.createElement("div",{className:"titlebar"},o.default.createElement("div",{className:"titlebar-left"},o.default.createElement("div",{className:"dots"},o.default.createElement("span",{className:"dot red"}),o.default.createElement("span",{className:"dot amber"}),o.default.createElement("span",{className:"dot green"})),o.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),o.default.createElement("div",{className:"titlebar-right"},o.default.createElement("input",{type:"file",accept:"application/json",ref:N,onChange:dl,style:{display:"none"}}),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:e,"aria-label":a?"Mute sound":"Unmute sound",title:a?"Mute sound":"Unmute sound"},a?o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:V,"aria-label":"Import backup",title:"Import backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("button",{className:"titlebar-icon-btn",onClick:Gt,"aria-label":"Export backup",title:"Export backup"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},o.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),o.default.createElement("span",{className:"clock"},new Date(ut).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),w&&o.default.createElement("div",{className:`data-toast ${w.type}`},w.text),o.default.createElement("div",{className:"tabs"},o.default.createElement("button",{className:t==="today"?"active":"",onClick:()=>n("today")},"today"),o.default.createElement("button",{className:t==="tasks"?"active":"",onClick:()=>n("tasks")},"tasks"),o.default.createElement("button",{className:t==="routines"?"active":"",onClick:()=>n("routines")},"routines"),o.default.createElement("button",{className:t==="vault"?"active":"",onClick:()=>n("vault")},"vault"),o.default.createElement("button",{className:t==="quest"?"active":"",onClick:()=>n("quest")},"quest")),o.default.createElement("div",{key:t,className:"tab-content"},t==="today"?o.default.createElement(Sv,{routines:c,setRoutines:s,tasks:i,setTasks:u,vaultHabits:d,goodHabits:p,rewards:r,setRewards:f,totalXP:h,setTab:n}):t==="tasks"?o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{className:"stats-bar stats-bar-viz"},o.default.createElement(Cu,{pct:A.pct,size:64,stroke:5.5,label:`${A.pct}%`}),o.default.createElement("div",{className:"stats-row-viz"},o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(vl,{value:A.total}))," total"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(vl,{value:A.pending}))," pending"),o.default.createElement("span",null,o.default.createElement("b",null,o.default.createElement(vl,{value:A.done}))," done"))),A.pending>0&&o.default.createElement("div",{className:"donut-card"},o.default.createElement(Bm,{size:96,stroke:14,centerLabel:A.pending,centerSublabel:"open",segments:G.map(T=>({key:T.key,value:T.value,color:T.color}))}),o.default.createElement("div",{className:"donut-legend"},G.map(T=>o.default.createElement("div",{className:"donut-legend-row",key:T.key},o.default.createElement("span",{className:"donut-legend-dot",style:{background:T.color}}),o.default.createElement("span",null,T.label," priority"),o.default.createElement("span",{className:"donut-legend-val"},T.value))))),o.default.createElement("div",{className:"composer"},o.default.createElement("input",{ref:C,type:"text",placeholder:"add a task, press enter...",value:g,onChange:T=>z(T.target.value),onKeyDown:T=>T.key==="Enter"&&ot()}),o.default.createElement("div",{className:"prio-select"},Bu.map(T=>o.default.createElement("button",{key:T.key,className:D===T.key?"active":"",style:{"--pc":T.color},onClick:()=>M(T.key)},T.label))),o.default.createElement("button",{className:"add-btn",onClick:ot,"aria-label":"Add task"},o.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},o.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),o.default.createElement("div",{className:"filters"},["all","active","done"].map(T=>o.default.createElement("button",{key:T,className:k===T?"active":"",onClick:()=>B(T)},T)),o.default.createElement("span",{className:"spacer"}),A.done>0&&o.default.createElement("button",{className:"clear-btn",onClick:Ve},"clear done")),o.default.createElement("div",{className:"task-list"},ct.length===0?o.default.createElement("div",{className:"empty-state"},o.default.createElement("div",{className:"glyph"},"{ }"),o.default.createElement("div",{className:"msg"},k==="done"?"nothing completed yet":"queue's empty \u2014 add something")):ct.map((T,Y)=>o.default.createElement(bv,{key:T.id,task:T,now:ut,index:Y,onToggle:Ot,onDelete:za})))):t==="routines"?o.default.createElement(Jh,{routines:c,setRoutines:s}):t==="vault"?o.default.createElement(nv,{vaultHabits:d,setVaultHabits:v,projects:y,setProjects:m}):o.default.createElement(hv,{goodHabits:p,setGoodHabits:x,badHabits:b,setBadHabits:S,rewards:r,setRewards:f}))))}var Nv=Mm.default.createRoot(document.getElementById("root"));Nv.render(o.default.createElement(Av));})();
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
