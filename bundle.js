(()=>{var sm=Object.create;var af=Object.defineProperty;var dm=Object.getOwnPropertyDescriptor;var rm=Object.getOwnPropertyNames;var mm=Object.getPrototypeOf,vm=Object.prototype.hasOwnProperty;var wl=(t,l)=>()=>(l||t((l={exports:{}}).exports,l),l.exports);var pm=(t,l,a,e)=>{if(l&&typeof l=="object"||typeof l=="function")for(let n of rm(l))!vm.call(t,n)&&n!==a&&af(t,n,{get:()=>l[n],enumerable:!(e=dm(l,n))||e.enumerable});return t};var ef=(t,l,a)=>(a=t!=null?sm(mm(t)):{},pm(l||!t||!t.__esModule?af(a,"default",{value:t,enumerable:!0}):a,t));var pf=wl(U=>{"use strict";var pi=Symbol.for("react.transitional.element"),hm=Symbol.for("react.portal"),ym=Symbol.for("react.fragment"),gm=Symbol.for("react.strict_mode"),bm=Symbol.for("react.profiler"),xm=Symbol.for("react.consumer"),Sm=Symbol.for("react.context"),Em=Symbol.for("react.forward_ref"),Am=Symbol.for("react.suspense"),Nm=Symbol.for("react.memo"),ff=Symbol.for("react.lazy"),zm=Symbol.for("react.activity"),nf=Symbol.iterator;function Tm(t){return t===null||typeof t!="object"?null:(t=nf&&t[nf]||t["@@iterator"],typeof t=="function"?t:null)}var sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},df=Object.assign,rf={};function Ha(t,l,a){this.props=t,this.context=l,this.refs=rf,this.updater=a||sf}Ha.prototype.isReactComponent={};Ha.prototype.setState=function(t,l){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,l,"setState")};Ha.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mf(){}mf.prototype=Ha.prototype;function hi(t,l,a){this.props=t,this.context=l,this.refs=rf,this.updater=a||sf}var yi=hi.prototype=new mf;yi.constructor=hi;df(yi,Ha.prototype);yi.isPureReactComponent=!0;var uf=Array.isArray;function vi(){}var P={H:null,A:null,T:null,S:null},vf=Object.prototype.hasOwnProperty;function gi(t,l,a){var e=a.ref;return{$$typeof:pi,type:t,key:l,ref:e!==void 0?e:null,props:a}}function Mm(t,l){return gi(t.type,l,t.props)}function bi(t){return typeof t=="object"&&t!==null&&t.$$typeof===pi}function Dm(t){var l={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(a){return l[a]})}var cf=/\/+/g;function mi(t,l){return typeof t=="object"&&t!==null&&t.key!=null?Dm(""+t.key):l.toString(36)}function Om(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(vi,vi):(t.status="pending",t.then(function(l){t.status==="pending"&&(t.status="fulfilled",t.value=l)},function(l){t.status==="pending"&&(t.status="rejected",t.reason=l)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function qa(t,l,a,e,n){var u=typeof t;(u==="undefined"||u==="boolean")&&(t=null);var i=!1;if(t===null)i=!0;else switch(u){case"bigint":case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case pi:case hm:i=!0;break;case ff:return i=t._init,qa(i(t._payload),l,a,e,n)}}if(i)return n=n(t),i=e===""?"."+mi(t,0):e,uf(n)?(a="",i!=null&&(a=i.replace(cf,"$&/")+"/"),qa(n,l,a,"",function(r){return r})):n!=null&&(bi(n)&&(n=Mm(n,a+(n.key==null||t&&t.key===n.key?"":(""+n.key).replace(cf,"$&/")+"/")+i)),l.push(n)),1;i=0;var o=e===""?".":e+":";if(uf(t))for(var f=0;f<t.length;f++)e=t[f],u=o+mi(e,f),i+=qa(e,l,a,u,n);else if(f=Tm(t),typeof f=="function")for(t=f.call(t),f=0;!(e=t.next()).done;)e=e.value,u=o+mi(e,f++),i+=qa(e,l,a,u,n);else if(u==="object"){if(typeof t.then=="function")return qa(Om(t),l,a,e,n);throw l=String(t),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.")}return i}function Bn(t,l,a){if(t==null)return t;var e=[],n=0;return qa(t,e,"","",function(u){return l.call(a,u,n++)}),e}function _m(t){if(t._status===-1){var l=t._result;l=l(),l.then(function(a){(t._status===0||t._status===-1)&&(t._status=1,t._result=a)},function(a){(t._status===0||t._status===-1)&&(t._status=2,t._result=a)}),t._status===-1&&(t._status=0,t._result=l)}if(t._status===1)return t._result.default;throw t._result}var of=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Bm={map:Bn,forEach:function(t,l,a){Bn(t,function(){l.apply(this,arguments)},a)},count:function(t){var l=0;return Bn(t,function(){l++}),l},toArray:function(t){return Bn(t,function(l){return l})||[]},only:function(t){if(!bi(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Activity=zm;U.Children=Bm;U.Component=Ha;U.Fragment=ym;U.Profiler=bm;U.PureComponent=hi;U.StrictMode=gm;U.Suspense=Am;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P;U.__COMPILER_RUNTIME={__proto__:null,c:function(t){return P.H.useMemoCache(t)}};U.cache=function(t){return function(){return t.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(t,l,a){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var e=df({},t.props),n=t.key;if(l!=null)for(u in l.key!==void 0&&(n=""+l.key),l)!vf.call(l,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&l.ref===void 0||(e[u]=l[u]);var u=arguments.length-2;if(u===1)e.children=a;else if(1<u){for(var i=Array(u),o=0;o<u;o++)i[o]=arguments[o+2];e.children=i}return gi(t.type,n,e)};U.createContext=function(t){return t={$$typeof:Sm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:xm,_context:t},t};U.createElement=function(t,l,a){var e,n={},u=null;if(l!=null)for(e in l.key!==void 0&&(u=""+l.key),l)vf.call(l,e)&&e!=="key"&&e!=="__self"&&e!=="__source"&&(n[e]=l[e]);var i=arguments.length-2;if(i===1)n.children=a;else if(1<i){for(var o=Array(i),f=0;f<i;f++)o[f]=arguments[f+2];n.children=o}if(t&&t.defaultProps)for(e in i=t.defaultProps,i)n[e]===void 0&&(n[e]=i[e]);return gi(t,u,n)};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Em,render:t}};U.isValidElement=bi;U.lazy=function(t){return{$$typeof:ff,_payload:{_status:-1,_result:t},_init:_m}};U.memo=function(t,l){return{$$typeof:Nm,type:t,compare:l===void 0?null:l}};U.startTransition=function(t){var l=P.T,a={};P.T=a;try{var e=t(),n=P.S;n!==null&&n(a,e),typeof e=="object"&&e!==null&&typeof e.then=="function"&&e.then(vi,of)}catch(u){of(u)}finally{l!==null&&a.types!==null&&(l.types=a.types),P.T=l}};U.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()};U.use=function(t){return P.H.use(t)};U.useActionState=function(t,l,a){return P.H.useActionState(t,l,a)};U.useCallback=function(t,l){return P.H.useCallback(t,l)};U.useContext=function(t){return P.H.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t,l){return P.H.useDeferredValue(t,l)};U.useEffect=function(t,l){return P.H.useEffect(t,l)};U.useEffectEvent=function(t){return P.H.useEffectEvent(t)};U.useId=function(){return P.H.useId()};U.useImperativeHandle=function(t,l,a){return P.H.useImperativeHandle(t,l,a)};U.useInsertionEffect=function(t,l){return P.H.useInsertionEffect(t,l)};U.useLayoutEffect=function(t,l){return P.H.useLayoutEffect(t,l)};U.useMemo=function(t,l){return P.H.useMemo(t,l)};U.useOptimistic=function(t,l){return P.H.useOptimistic(t,l)};U.useReducer=function(t,l,a){return P.H.useReducer(t,l,a)};U.useRef=function(t){return P.H.useRef(t)};U.useState=function(t){return P.H.useState(t)};U.useSyncExternalStore=function(t,l,a){return P.H.useSyncExternalStore(t,l,a)};U.useTransition=function(){return P.H.useTransition()};U.version="19.2.5"});var Cn=wl((th,hf)=>{"use strict";hf.exports=pf()});var Tf=wl(et=>{"use strict";function Ai(t,l){var a=t.length;t.push(l);t:for(;0<a;){var e=a-1>>>1,n=t[e];if(0<Un(n,l))t[e]=l,t[a]=n,a=e;else break t}}function fl(t){return t.length===0?null:t[0]}function Hn(t){if(t.length===0)return null;var l=t[0],a=t.pop();if(a!==l){t[0]=a;t:for(var e=0,n=t.length,u=n>>>1;e<u;){var i=2*(e+1)-1,o=t[i],f=i+1,r=t[f];if(0>Un(o,a))f<n&&0>Un(r,o)?(t[e]=r,t[f]=a,e=f):(t[e]=o,t[i]=a,e=i);else if(f<n&&0>Un(r,a))t[e]=r,t[f]=a,e=f;else break t}}return l}function Un(t,l){var a=t.sortIndex-l.sortIndex;return a!==0?a:t.id-l.id}et.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(yf=performance,et.unstable_now=function(){return yf.now()}):(xi=Date,gf=xi.now(),et.unstable_now=function(){return xi.now()-gf});var yf,xi,gf,hl=[],Yl=[],Cm=1,Rt=null,Tt=3,Ni=!1,De=!1,Oe=!1,zi=!1,Sf=typeof setTimeout=="function"?setTimeout:null,Ef=typeof clearTimeout=="function"?clearTimeout:null,bf=typeof setImmediate<"u"?setImmediate:null;function qn(t){for(var l=fl(Yl);l!==null;){if(l.callback===null)Hn(Yl);else if(l.startTime<=t)Hn(Yl),l.sortIndex=l.expirationTime,Ai(hl,l);else break;l=fl(Yl)}}function Ti(t){if(Oe=!1,qn(t),!De)if(fl(hl)!==null)De=!0,wa||(wa=!0,ka());else{var l=fl(Yl);l!==null&&Mi(Ti,l.startTime-t)}}var wa=!1,_e=-1,Af=5,Nf=-1;function zf(){return zi?!0:!(et.unstable_now()-Nf<Af)}function Si(){if(zi=!1,wa){var t=et.unstable_now();Nf=t;var l=!0;try{t:{De=!1,Oe&&(Oe=!1,Ef(_e),_e=-1),Ni=!0;var a=Tt;try{l:{for(qn(t),Rt=fl(hl);Rt!==null&&!(Rt.expirationTime>t&&zf());){var e=Rt.callback;if(typeof e=="function"){Rt.callback=null,Tt=Rt.priorityLevel;var n=e(Rt.expirationTime<=t);if(t=et.unstable_now(),typeof n=="function"){Rt.callback=n,qn(t),l=!0;break l}Rt===fl(hl)&&Hn(hl),qn(t)}else Hn(hl);Rt=fl(hl)}if(Rt!==null)l=!0;else{var u=fl(Yl);u!==null&&Mi(Ti,u.startTime-t),l=!1}}break t}finally{Rt=null,Tt=a,Ni=!1}l=void 0}}finally{l?ka():wa=!1}}}var ka;typeof bf=="function"?ka=function(){bf(Si)}:typeof MessageChannel<"u"?(Ei=new MessageChannel,xf=Ei.port2,Ei.port1.onmessage=Si,ka=function(){xf.postMessage(null)}):ka=function(){Sf(Si,0)};var Ei,xf;function Mi(t,l){_e=Sf(function(){t(et.unstable_now())},l)}et.unstable_IdlePriority=5;et.unstable_ImmediatePriority=1;et.unstable_LowPriority=4;et.unstable_NormalPriority=3;et.unstable_Profiling=null;et.unstable_UserBlockingPriority=2;et.unstable_cancelCallback=function(t){t.callback=null};et.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Af=0<t?Math.floor(1e3/t):5};et.unstable_getCurrentPriorityLevel=function(){return Tt};et.unstable_next=function(t){switch(Tt){case 1:case 2:case 3:var l=3;break;default:l=Tt}var a=Tt;Tt=l;try{return t()}finally{Tt=a}};et.unstable_requestPaint=function(){zi=!0};et.unstable_runWithPriority=function(t,l){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var a=Tt;Tt=t;try{return l()}finally{Tt=a}};et.unstable_scheduleCallback=function(t,l,a){var e=et.unstable_now();switch(typeof a=="object"&&a!==null?(a=a.delay,a=typeof a=="number"&&0<a?e+a:e):a=e,t){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=a+n,t={id:Cm++,callback:l,priorityLevel:t,startTime:a,expirationTime:n,sortIndex:-1},a>e?(t.sortIndex=a,Ai(Yl,t),fl(hl)===null&&t===fl(Yl)&&(Oe?(Ef(_e),_e=-1):Oe=!0,Mi(Ti,a-e))):(t.sortIndex=n,Ai(hl,t),De||Ni||(De=!0,wa||(wa=!0,ka()))),t};et.unstable_shouldYield=zf;et.unstable_wrapCallback=function(t){var l=Tt;return function(){var a=Tt;Tt=l;try{return t.apply(this,arguments)}finally{Tt=a}}}});var Df=wl((ah,Mf)=>{"use strict";Mf.exports=Tf()});var _f=wl(Dt=>{"use strict";var Um=Cn();function Of(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gl(){}var Mt={d:{f:Gl,r:function(){throw Error(Of(522))},D:Gl,C:Gl,L:Gl,m:Gl,X:Gl,S:Gl,M:Gl},p:0,findDOMNode:null},qm=Symbol.for("react.portal");function Hm(t,l,a){var e=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qm,key:e==null?null:""+e,children:t,containerInfo:l,implementation:a}}var Be=Um.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function kn(t,l){if(t==="font")return"";if(typeof l=="string")return l==="use-credentials"?l:""}Dt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Mt;Dt.createPortal=function(t,l){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)throw Error(Of(299));return Hm(t,l,null,a)};Dt.flushSync=function(t){var l=Be.T,a=Mt.p;try{if(Be.T=null,Mt.p=2,t)return t()}finally{Be.T=l,Mt.p=a,Mt.d.f()}};Dt.preconnect=function(t,l){typeof t=="string"&&(l?(l=l.crossOrigin,l=typeof l=="string"?l==="use-credentials"?l:"":void 0):l=null,Mt.d.C(t,l))};Dt.prefetchDNS=function(t){typeof t=="string"&&Mt.d.D(t)};Dt.preinit=function(t,l){if(typeof t=="string"&&l&&typeof l.as=="string"){var a=l.as,e=kn(a,l.crossOrigin),n=typeof l.integrity=="string"?l.integrity:void 0,u=typeof l.fetchPriority=="string"?l.fetchPriority:void 0;a==="style"?Mt.d.S(t,typeof l.precedence=="string"?l.precedence:void 0,{crossOrigin:e,integrity:n,fetchPriority:u}):a==="script"&&Mt.d.X(t,{crossOrigin:e,integrity:n,fetchPriority:u,nonce:typeof l.nonce=="string"?l.nonce:void 0})}};Dt.preinitModule=function(t,l){if(typeof t=="string")if(typeof l=="object"&&l!==null){if(l.as==null||l.as==="script"){var a=kn(l.as,l.crossOrigin);Mt.d.M(t,{crossOrigin:a,integrity:typeof l.integrity=="string"?l.integrity:void 0,nonce:typeof l.nonce=="string"?l.nonce:void 0})}}else l==null&&Mt.d.M(t)};Dt.preload=function(t,l){if(typeof t=="string"&&typeof l=="object"&&l!==null&&typeof l.as=="string"){var a=l.as,e=kn(a,l.crossOrigin);Mt.d.L(t,a,{crossOrigin:e,integrity:typeof l.integrity=="string"?l.integrity:void 0,nonce:typeof l.nonce=="string"?l.nonce:void 0,type:typeof l.type=="string"?l.type:void 0,fetchPriority:typeof l.fetchPriority=="string"?l.fetchPriority:void 0,referrerPolicy:typeof l.referrerPolicy=="string"?l.referrerPolicy:void 0,imageSrcSet:typeof l.imageSrcSet=="string"?l.imageSrcSet:void 0,imageSizes:typeof l.imageSizes=="string"?l.imageSizes:void 0,media:typeof l.media=="string"?l.media:void 0})}};Dt.preloadModule=function(t,l){if(typeof t=="string")if(l){var a=kn(l.as,l.crossOrigin);Mt.d.m(t,{as:typeof l.as=="string"&&l.as!=="script"?l.as:void 0,crossOrigin:a,integrity:typeof l.integrity=="string"?l.integrity:void 0})}else Mt.d.m(t)};Dt.requestFormReset=function(t){Mt.d.r(t)};Dt.unstable_batchedUpdates=function(t,l){return t(l)};Dt.useFormState=function(t,l,a){return Be.H.useFormState(t,l,a)};Dt.useFormStatus=function(){return Be.H.useHostTransitionStatus()};Dt.version="19.2.5"});var Uf=wl((nh,Cf)=>{"use strict";function Bf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bf)}catch(t){console.error(t)}}Bf(),Cf.exports=_f()});var V0=wl(ci=>{"use strict";var ht=Df(),ud=Cn(),km=Uf();function b(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gn(t){var l=t,a=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(a=l.return),t=l.return;while(t)}return l.tag===3?a:null}function cd(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function od(t){if(t.tag===31){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function qf(t){if(gn(t)!==t)throw Error(b(188))}function wm(t){var l=t.alternate;if(!l){if(l=gn(t),l===null)throw Error(b(188));return l!==t?null:t}for(var a=t,e=l;;){var n=a.return;if(n===null)break;var u=n.alternate;if(u===null){if(e=n.return,e!==null){a=e;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===a)return qf(n),t;if(u===e)return qf(n),l;u=u.sibling}throw Error(b(188))}if(a.return!==e.return)a=n,e=u;else{for(var i=!1,o=n.child;o;){if(o===a){i=!0,a=n,e=u;break}if(o===e){i=!0,e=n,a=u;break}o=o.sibling}if(!i){for(o=u.child;o;){if(o===a){i=!0,a=u,e=n;break}if(o===e){i=!0,e=u,a=n;break}o=o.sibling}if(!i)throw Error(b(189))}}if(a.alternate!==e)throw Error(b(190))}if(a.tag!==3)throw Error(b(188));return a.stateNode.current===a?t:l}function fd(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=fd(t),l!==null)return l;t=t.sibling}return null}var at=Object.assign,Ym=Symbol.for("react.element"),wn=Symbol.for("react.transitional.element"),Ge=Symbol.for("react.portal"),Qa=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),cc=Symbol.for("react.profiler"),dd=Symbol.for("react.consumer"),Nl=Symbol.for("react.context"),ao=Symbol.for("react.forward_ref"),oc=Symbol.for("react.suspense"),fc=Symbol.for("react.suspense_list"),eo=Symbol.for("react.memo"),Xl=Symbol.for("react.lazy"),sc=Symbol.for("react.activity"),Gm=Symbol.for("react.memo_cache_sentinel"),Hf=Symbol.iterator;function Ce(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var Xm=Symbol.for("react.client.reference");function dc(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Xm?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qa:return"Fragment";case cc:return"Profiler";case sd:return"StrictMode";case oc:return"Suspense";case fc:return"SuspenseList";case sc:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ge:return"Portal";case Nl:return t.displayName||"Context";case dd:return(t._context.displayName||"Context")+".Consumer";case ao:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case eo:return l=t.displayName||null,l!==null?l:dc(t.type)||"Memo";case Xl:l=t._payload,t=t._init;try{return dc(t(l))}catch{}}return null}var Xe=Array.isArray,B=ud.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=km.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ga={pending:!1,data:null,method:null,action:null},rc=[],Za=-1;function vl(t){return{current:t}}function bt(t){0>Za||(t.current=rc[Za],rc[Za]=null,Za--)}function I(t,l){Za++,rc[Za]=t.current,t.current=l}var ml=vl(null),en=vl(null),$l=vl(null),hu=vl(null);function yu(t,l){switch(I($l,l),I(en,t),I(ml,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Ls(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Ls(l),t=B0(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}bt(ml),I(ml,t)}function oe(){bt(ml),bt(en),bt($l)}function mc(t){t.memoizedState!==null&&I(hu,t);var l=ml.current,a=B0(l,t.type);l!==a&&(I(en,t),I(ml,a))}function gu(t){en.current===t&&(bt(ml),bt(en)),hu.current===t&&(bt(hu),pn._currentValue=ga)}var Di,kf;function va(t){if(Di===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);Di=l&&l[1]||"",kf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Di+t+kf}var Oi=!1;function _i(t,l){if(!t||Oi)return"";Oi=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(l){var y=function(){throw Error()};if(Object.defineProperty(y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(y,[])}catch(v){var m=v}Reflect.construct(t,[],y)}else{try{y.call()}catch(v){m=v}t.call(y.prototype)}}else{try{throw Error()}catch(v){m=v}(y=t())&&typeof y.catch=="function"&&y.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=e.DetermineComponentFrameRoot(),i=u[0],o=u[1];if(i&&o){var f=i.split(`
`),r=o.split(`
`);for(n=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;n<r.length&&!r[n].includes("DetermineComponentFrameRoot");)n++;if(e===f.length||n===r.length)for(e=f.length-1,n=r.length-1;1<=e&&0<=n&&f[e]!==r[n];)n--;for(;1<=e&&0<=n;e--,n--)if(f[e]!==r[n]){if(e!==1||n!==1)do if(e--,n--,0>n||f[e]!==r[n]){var h=`
`+f[e].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=e&&0<=n);break}}}finally{Oi=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?va(a):""}function jm(t,l){switch(t.tag){case 26:case 27:case 5:return va(t.type);case 16:return va("Lazy");case 13:return t.child!==l&&l!==null?va("Suspense Fallback"):va("Suspense");case 19:return va("SuspenseList");case 0:case 15:return _i(t.type,!1);case 11:return _i(t.type.render,!1);case 1:return _i(t.type,!0);case 31:return va("Activity");default:return""}}function wf(t){try{var l="",a=null;do l+=jm(t,a),a=t,t=t.return;while(t);return l}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var vc=Object.prototype.hasOwnProperty,no=ht.unstable_scheduleCallback,Bi=ht.unstable_cancelCallback,Lm=ht.unstable_shouldYield,Qm=ht.unstable_requestPaint,Lt=ht.unstable_now,Zm=ht.unstable_getCurrentPriorityLevel,rd=ht.unstable_ImmediatePriority,md=ht.unstable_UserBlockingPriority,bu=ht.unstable_NormalPriority,Vm=ht.unstable_LowPriority,vd=ht.unstable_IdlePriority,Km=ht.log,Jm=ht.unstable_setDisableYieldValue,bn=null,Qt=null;function Kl(t){if(typeof Km=="function"&&Jm(t),Qt&&typeof Qt.setStrictMode=="function")try{Qt.setStrictMode(bn,t)}catch{}}var Zt=Math.clz32?Math.clz32:Fm,Wm=Math.log,Rm=Math.LN2;function Fm(t){return t>>>=0,t===0?32:31-(Wm(t)/Rm|0)|0}var Yn=256,Gn=262144,Xn=4194304;function pa(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Vu(t,l,a){var e=t.pendingLanes;if(e===0)return 0;var n=0,u=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var o=e&134217727;return o!==0?(e=o&~u,e!==0?n=pa(e):(i&=o,i!==0?n=pa(i):a||(a=o&~t,a!==0&&(n=pa(a))))):(o=e&~u,o!==0?n=pa(o):i!==0?n=pa(i):a||(a=e&~t,a!==0&&(n=pa(a)))),n===0?0:l!==0&&l!==n&&(l&u)===0&&(u=n&-n,a=l&-l,u>=a||u===32&&(a&4194048)!==0)?l:n}function xn(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function $m(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pd(){var t=Xn;return Xn<<=1,(Xn&62914560)===0&&(Xn=4194304),t}function Ci(t){for(var l=[],a=0;31>a;a++)l.push(t);return l}function Sn(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Im(t,l,a,e,n,u){var i=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var o=t.entanglements,f=t.expirationTimes,r=t.hiddenUpdates;for(a=i&~a;0<a;){var h=31-Zt(a),y=1<<h;o[h]=0,f[h]=-1;var m=r[h];if(m!==null)for(r[h]=null,h=0;h<m.length;h++){var v=m[h];v!==null&&(v.lane&=-536870913)}a&=~y}e!==0&&hd(t,e,0),u!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=u&~(i&~l))}function hd(t,l,a){t.pendingLanes|=l,t.suspendedLanes&=~l;var e=31-Zt(l);t.entangledLanes|=l,t.entanglements[e]=t.entanglements[e]|1073741824|a&261930}function yd(t,l){var a=t.entangledLanes|=l;for(t=t.entanglements;a;){var e=31-Zt(a),n=1<<e;n&l|t[e]&l&&(t[e]|=l),a&=~n}}function gd(t,l){var a=l&-l;return a=(a&42)!==0?1:uo(a),(a&(t.suspendedLanes|l))!==0?0:a}function uo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function io(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bd(){var t=L.p;return t!==0?t:(t=window.event,t===void 0?32:L0(t.type))}function Yf(t,l){var a=L.p;try{return L.p=t,l()}finally{L.p=a}}var sa=Math.random().toString(36).slice(2),St="__reactFiber$"+sa,Ht="__reactProps$"+sa,be="__reactContainer$"+sa,pc="__reactEvents$"+sa,Pm="__reactListeners$"+sa,t1="__reactHandles$"+sa,Gf="__reactResources$"+sa,En="__reactMarker$"+sa;function co(t){delete t[St],delete t[Ht],delete t[pc],delete t[Pm],delete t[t1]}function Va(t){var l=t[St];if(l)return l;for(var a=t.parentNode;a;){if(l=a[be]||a[St]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(t=Js(t);t!==null;){if(a=t[St])return a;t=Js(t)}return l}t=a,a=t.parentNode}return null}function xe(t){if(t=t[St]||t[be]){var l=t.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return t}return null}function je(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(b(33))}function le(t){var l=t[Gf];return l||(l=t[Gf]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function gt(t){t[En]=!0}var xd=new Set,Sd={};function Da(t,l){fe(t,l),fe(t+"Capture",l)}function fe(t,l){for(Sd[t]=l,t=0;t<l.length;t++)xd.add(l[t])}var l1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xf={},jf={};function a1(t){return vc.call(jf,t)?!0:vc.call(Xf,t)?!1:l1.test(t)?jf[t]=!0:(Xf[t]=!0,!1)}function lu(t,l,a){if(a1(l))if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var e=l.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+a)}}function jn(t,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+a)}}function yl(t,l,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(l,a,""+e)}}function $t(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ed(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function e1(t,l,a){var e=Object.getOwnPropertyDescriptor(t.constructor.prototype,l);if(!t.hasOwnProperty(l)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var n=e.get,u=e.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return n.call(this)},set:function(i){a=""+i,u.call(this,i)}}),Object.defineProperty(t,l,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(i){a=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function hc(t){if(!t._valueTracker){var l=Ed(t)?"checked":"value";t._valueTracker=e1(t,l,""+t[l])}}function Ad(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var a=l.getValue(),e="";return t&&(e=Ed(t)?t.checked?"true":"false":t.value),t=e,t!==a?(l.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var n1=/[\n"\\]/g;function tl(t){return t.replace(n1,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function yc(t,l,a,e,n,u,i,o){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+$t(l)):t.value!==""+$t(l)&&(t.value=""+$t(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?gc(t,i,$t(l)):a!=null?gc(t,i,$t(a)):e!=null&&t.removeAttribute("value"),n==null&&u!=null&&(t.defaultChecked=!!u),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+$t(o):t.removeAttribute("name")}function Nd(t,l,a,e,n,u,i,o){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),l!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||l!=null)){hc(t);return}a=a!=null?""+$t(a):"",l=l!=null?""+$t(l):a,o||l===t.value||(t.value=l),t.defaultValue=l}e=e??n,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=o?t.checked:!!e,t.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i),hc(t)}function gc(t,l,a){l==="number"&&xu(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ae(t,l,a,e){if(t=t.options,l){l={};for(var n=0;n<a.length;n++)l["$"+a[n]]=!0;for(a=0;a<t.length;a++)n=l.hasOwnProperty("$"+t[a].value),t[a].selected!==n&&(t[a].selected=n),n&&e&&(t[a].defaultSelected=!0)}else{for(a=""+$t(a),l=null,n=0;n<t.length;n++){if(t[n].value===a){t[n].selected=!0,e&&(t[n].defaultSelected=!0);return}l!==null||t[n].disabled||(l=t[n])}l!==null&&(l.selected=!0)}}function zd(t,l,a){if(l!=null&&(l=""+$t(l),l!==t.value&&(t.value=l),a==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=a!=null?""+$t(a):""}function Td(t,l,a,e){if(l==null){if(e!=null){if(a!=null)throw Error(b(92));if(Xe(e)){if(1<e.length)throw Error(b(93));e=e[0]}a=e}a==null&&(a=""),l=a}a=$t(l),t.defaultValue=a,e=t.textContent,e===a&&e!==""&&e!==null&&(t.value=e),hc(t)}function se(t,l){if(l){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=l;return}}t.textContent=l}var u1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lf(t,l,a){var e=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":e?t.setProperty(l,a):typeof a!="number"||a===0||u1.has(l)?l==="float"?t.cssFloat=a:t[l]=(""+a).trim():t[l]=a+"px"}function Md(t,l,a){if(l!=null&&typeof l!="object")throw Error(b(62));if(t=t.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||l!=null&&l.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var n in l)e=l[n],l.hasOwnProperty(n)&&a[n]!==e&&Lf(t,n,e)}else for(var u in l)l.hasOwnProperty(u)&&Lf(t,u,l[u])}function oo(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var i1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),c1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function au(t){return c1.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zl(){}var bc=null;function fo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ka=null,ee=null;function Qf(t){var l=xe(t);if(l&&(t=l.stateNode)){var a=t[Ht]||null;t:switch(t=l.stateNode,l.type){case"input":if(yc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+tl(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var e=a[l];if(e!==t&&e.form===t.form){var n=e[Ht]||null;if(!n)throw Error(b(90));yc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(l=0;l<a.length;l++)e=a[l],e.form===t.form&&Ad(e)}break t;case"textarea":zd(t,a.value,a.defaultValue);break t;case"select":l=a.value,l!=null&&ae(t,!!a.multiple,l,!1)}}}var Ui=!1;function Dd(t,l,a){if(Ui)return t(l,a);Ui=!0;try{var e=t(l);return e}finally{if(Ui=!1,(Ka!==null||ee!==null)&&(ei(),Ka&&(l=Ka,t=ee,ee=Ka=null,Qf(l),t)))for(l=0;l<t.length;l++)Qf(t[l])}}function nn(t,l){var a=t.stateNode;if(a===null)return null;var e=a[Ht]||null;if(e===null)return null;a=e[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(b(231,l,typeof a));return a}var _l=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xc=!1;if(_l)try{Ya={},Object.defineProperty(Ya,"passive",{get:function(){xc=!0}}),window.addEventListener("test",Ya,Ya),window.removeEventListener("test",Ya,Ya)}catch{xc=!1}var Ya,Jl=null,so=null,eu=null;function Od(){if(eu)return eu;var t,l=so,a=l.length,e,n="value"in Jl?Jl.value:Jl.textContent,u=n.length;for(t=0;t<a&&l[t]===n[t];t++);var i=a-t;for(e=1;e<=i&&l[a-e]===n[u-e];e++);return eu=n.slice(t,1<e?1-e:void 0)}function nu(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Ln(){return!0}function Zf(){return!1}function kt(t){function l(a,e,n,u,i){this._reactName=a,this._targetInst=n,this.type=e,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(a=t[o],this[o]=a?a(u):u[o]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ln:Zf,this.isPropagationStopped=Zf,this}return at(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ln)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ln)},persist:function(){},isPersistent:Ln}),l}var Oa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=kt(Oa),An=at({},Oa,{view:0,detail:0}),o1=kt(An),qi,Hi,Ue,Ju=at({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ue&&(Ue&&t.type==="mousemove"?(qi=t.screenX-Ue.screenX,Hi=t.screenY-Ue.screenY):Hi=qi=0,Ue=t),qi)},movementY:function(t){return"movementY"in t?t.movementY:Hi}}),Vf=kt(Ju),f1=at({},Ju,{dataTransfer:0}),s1=kt(f1),d1=at({},An,{relatedTarget:0}),ki=kt(d1),r1=at({},Oa,{animationName:0,elapsedTime:0,pseudoElement:0}),m1=kt(r1),v1=at({},Oa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p1=kt(v1),h1=at({},Oa,{data:0}),Kf=kt(h1),y1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x1(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=b1[t])?!!l[t]:!1}function ro(){return x1}var S1=at({},An,{key:function(t){if(t.key){var l=y1[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=nu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?g1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(t){return t.type==="keypress"?nu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),E1=kt(S1),A1=at({},Ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jf=kt(A1),N1=at({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),z1=kt(N1),T1=at({},Oa,{propertyName:0,elapsedTime:0,pseudoElement:0}),M1=kt(T1),D1=at({},Ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),O1=kt(D1),_1=at({},Oa,{newState:0,oldState:0}),B1=kt(_1),C1=[9,13,27,32],mo=_l&&"CompositionEvent"in window,Ze=null;_l&&"documentMode"in document&&(Ze=document.documentMode);var U1=_l&&"TextEvent"in window&&!Ze,_d=_l&&(!mo||Ze&&8<Ze&&11>=Ze),Wf=" ",Rf=!1;function Bd(t,l){switch(t){case"keyup":return C1.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ja=!1;function q1(t,l){switch(t){case"compositionend":return Cd(l);case"keypress":return l.which!==32?null:(Rf=!0,Wf);case"textInput":return t=l.data,t===Wf&&Rf?null:t;default:return null}}function H1(t,l){if(Ja)return t==="compositionend"||!mo&&Bd(t,l)?(t=Od(),eu=so=Jl=null,Ja=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return _d&&l.locale!=="ko"?null:l.data;default:return null}}var k1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!k1[t.type]:l==="textarea"}function Ud(t,l,a,e){Ka?ee?ee.push(e):ee=[e]:Ka=e,l=Yu(l,"onChange"),0<l.length&&(a=new Ku("onChange","change",null,a,e),t.push({event:a,listeners:l}))}var Ve=null,un=null;function w1(t){D0(t,0)}function Wu(t){var l=je(t);if(Ad(l))return t}function $f(t,l){if(t==="change")return l}var qd=!1;_l&&(_l?(Zn="oninput"in document,Zn||(wi=document.createElement("div"),wi.setAttribute("oninput","return;"),Zn=typeof wi.oninput=="function"),Qn=Zn):Qn=!1,qd=Qn&&(!document.documentMode||9<document.documentMode));var Qn,Zn,wi;function If(){Ve&&(Ve.detachEvent("onpropertychange",Hd),un=Ve=null)}function Hd(t){if(t.propertyName==="value"&&Wu(un)){var l=[];Ud(l,un,t,fo(t)),Dd(w1,l)}}function Y1(t,l,a){t==="focusin"?(If(),Ve=l,un=a,Ve.attachEvent("onpropertychange",Hd)):t==="focusout"&&If()}function G1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wu(un)}function X1(t,l){if(t==="click")return Wu(l)}function j1(t,l){if(t==="input"||t==="change")return Wu(l)}function L1(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var Kt=typeof Object.is=="function"?Object.is:L1;function cn(t,l){if(Kt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var a=Object.keys(t),e=Object.keys(l);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var n=a[e];if(!vc.call(l,n)||!Kt(t[n],l[n]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ts(t,l){var a=Pf(t);t=0;for(var e;a;){if(a.nodeType===3){if(e=t+a.textContent.length,t<=l&&e>=l)return{node:a,offset:l-t};t=e}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pf(a)}}function kd(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?kd(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function wd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=xu(t.document);l instanceof t.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)t=l.contentWindow;else break;l=xu(t.document)}return l}function vo(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var Q1=_l&&"documentMode"in document&&11>=document.documentMode,Wa=null,Sc=null,Ke=null,Ec=!1;function ls(t,l,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Wa==null||Wa!==xu(e)||(e=Wa,"selectionStart"in e&&vo(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),Ke&&cn(Ke,e)||(Ke=e,e=Yu(Sc,"onSelect"),0<e.length&&(l=new Ku("onSelect","select",null,l,a),t.push({event:l,listeners:e}),l.target=Wa)))}function ma(t,l){var a={};return a[t.toLowerCase()]=l.toLowerCase(),a["Webkit"+t]="webkit"+l,a["Moz"+t]="moz"+l,a}var Ra={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionrun:ma("Transition","TransitionRun"),transitionstart:ma("Transition","TransitionStart"),transitioncancel:ma("Transition","TransitionCancel"),transitionend:ma("Transition","TransitionEnd")},Yi={},Yd={};_l&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function _a(t){if(Yi[t])return Yi[t];if(!Ra[t])return t;var l=Ra[t],a;for(a in l)if(l.hasOwnProperty(a)&&a in Yd)return Yi[t]=l[a];return t}var Gd=_a("animationend"),Xd=_a("animationiteration"),jd=_a("animationstart"),Z1=_a("transitionrun"),V1=_a("transitionstart"),K1=_a("transitioncancel"),Ld=_a("transitionend"),Qd=new Map,Ac="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ac.push("scrollEnd");function ol(t,l){Qd.set(t,l),Da(l,[t])}var Su=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Ft=[],Fa=0,po=0;function Ru(){for(var t=Fa,l=po=Fa=0;l<t;){var a=Ft[l];Ft[l++]=null;var e=Ft[l];Ft[l++]=null;var n=Ft[l];Ft[l++]=null;var u=Ft[l];if(Ft[l++]=null,e!==null&&n!==null){var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}u!==0&&Zd(a,n,u)}}function Fu(t,l,a,e){Ft[Fa++]=t,Ft[Fa++]=l,Ft[Fa++]=a,Ft[Fa++]=e,po|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function ho(t,l,a,e){return Fu(t,l,a,e),Eu(t)}function Ba(t,l){return Fu(t,null,null,l),Eu(t)}function Zd(t,l,a){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a);for(var n=!1,u=t.return;u!==null;)u.childLanes|=a,e=u.alternate,e!==null&&(e.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(n=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,n&&l!==null&&(n=31-Zt(a),t=u.hiddenUpdates,e=t[n],e===null?t[n]=[l]:e.push(l),l.lane=a|536870912),u):null}function Eu(t){if(50<ln)throw ln=0,Zc=null,Error(b(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var $a={};function J1(t,l,a,e){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xt(t,l,a,e){return new J1(t,l,a,e)}function yo(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ml(t,l){var a=t.alternate;return a===null?(a=Xt(t.tag,l,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=l,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,l=t.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Vd(t,l){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,l=a.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function uu(t,l,a,e,n,u){var i=0;if(e=t,typeof t=="function")yo(t)&&(i=1);else if(typeof t=="string")i=Fv(t,a,ml.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case sc:return t=Xt(31,a,l,n),t.elementType=sc,t.lanes=u,t;case Qa:return ba(a.children,n,u,l);case sd:i=8,n|=24;break;case cc:return t=Xt(12,a,l,n|2),t.elementType=cc,t.lanes=u,t;case oc:return t=Xt(13,a,l,n),t.elementType=oc,t.lanes=u,t;case fc:return t=Xt(19,a,l,n),t.elementType=fc,t.lanes=u,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nl:i=10;break t;case dd:i=9;break t;case ao:i=11;break t;case eo:i=14;break t;case Xl:i=16,e=null;break t}i=29,a=Error(b(130,t===null?"null":typeof t,"")),e=null}return l=Xt(i,a,l,n),l.elementType=t,l.type=e,l.lanes=u,l}function ba(t,l,a,e){return t=Xt(7,t,e,l),t.lanes=a,t}function Gi(t,l,a){return t=Xt(6,t,null,l),t.lanes=a,t}function Kd(t){var l=Xt(18,null,null,0);return l.stateNode=t,l}function Xi(t,l,a){return l=Xt(4,t.children!==null?t.children:[],t.key,l),l.lanes=a,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var as=new WeakMap;function ll(t,l){if(typeof t=="object"&&t!==null){var a=as.get(t);return a!==void 0?a:(l={value:t,source:l,stack:wf(l)},as.set(t,l),l)}return{value:t,source:l,stack:wf(l)}}var Ia=[],Pa=0,Au=null,on=0,It=[],Pt=0,ia=null,sl=1,dl="";function El(t,l){Ia[Pa++]=on,Ia[Pa++]=Au,Au=t,on=l}function Jd(t,l,a){It[Pt++]=sl,It[Pt++]=dl,It[Pt++]=ia,ia=t;var e=sl;t=dl;var n=32-Zt(e)-1;e&=~(1<<n),a+=1;var u=32-Zt(l)+n;if(30<u){var i=n-n%5;u=(e&(1<<i)-1).toString(32),e>>=i,n-=i,sl=1<<32-Zt(l)+n|a<<n|e,dl=u+t}else sl=1<<u|a<<n|e,dl=t}function go(t){t.return!==null&&(El(t,1),Jd(t,1,0))}function bo(t){for(;t===Au;)Au=Ia[--Pa],Ia[Pa]=null,on=Ia[--Pa],Ia[Pa]=null;for(;t===ia;)ia=It[--Pt],It[Pt]=null,dl=It[--Pt],It[Pt]=null,sl=It[--Pt],It[Pt]=null}function Wd(t,l){It[Pt++]=sl,It[Pt++]=dl,It[Pt++]=ia,sl=l.id,dl=l.overflow,ia=t}var Et=null,lt=null,G=!1,Il=null,al=!1,Nc=Error(b(519));function ca(t){var l=Error(b(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fn(ll(l,t)),Nc}function es(t){var l=t.stateNode,a=t.type,e=t.memoizedProps;switch(l[St]=t,l[Ht]=e,a){case"dialog":k("cancel",l),k("close",l);break;case"iframe":case"object":case"embed":k("load",l);break;case"video":case"audio":for(a=0;a<mn.length;a++)k(mn[a],l);break;case"source":k("error",l);break;case"img":case"image":case"link":k("error",l),k("load",l);break;case"details":k("toggle",l);break;case"input":k("invalid",l),Nd(l,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":k("invalid",l);break;case"textarea":k("invalid",l),Td(l,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||e.suppressHydrationWarning===!0||_0(l.textContent,a)?(e.popover!=null&&(k("beforetoggle",l),k("toggle",l)),e.onScroll!=null&&k("scroll",l),e.onScrollEnd!=null&&k("scrollend",l),e.onClick!=null&&(l.onclick=zl),l=!0):l=!1,l||ca(t,!0)}function ns(t){for(Et=t.return;Et;)switch(Et.tag){case 5:case 31:case 13:al=!1;return;case 27:case 3:al=!0;return;default:Et=Et.return}}function Ga(t){if(t!==Et)return!1;if(!G)return ns(t),G=!0,!1;var l=t.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Rc(t.type,t.memoizedProps)),a=!a),a&&lt&&ca(t),ns(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));lt=Ks(t)}else if(l===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));lt=Ks(t)}else l===27?(l=lt,da(t.type)?(t=Pc,Pc=null,lt=t):lt=l):lt=Et?nl(t.stateNode.nextSibling):null;return!0}function Aa(){lt=Et=null,G=!1}function ji(){var t=Il;return t!==null&&(Ut===null?Ut=t:Ut.push.apply(Ut,t),Il=null),t}function fn(t){Il===null?Il=[t]:Il.push(t)}var zc=vl(null),Ca=null,Tl=null;function Ll(t,l,a){I(zc,l._currentValue),l._currentValue=a}function Dl(t){t._currentValue=zc.current,bt(zc)}function Tc(t,l,a){for(;t!==null;){var e=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,e!==null&&(e.childLanes|=l)):e!==null&&(e.childLanes&l)!==l&&(e.childLanes|=l),t===a)break;t=t.return}}function Mc(t,l,a,e){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;t:for(;u!==null;){var o=u;u=n;for(var f=0;f<l.length;f++)if(o.context===l[f]){u.lanes|=a,o=u.alternate,o!==null&&(o.lanes|=a),Tc(u.return,a,t),e||(i=null);break t}u=o.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(b(341));i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Tc(i,a,t),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===t){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function Se(t,l,a,e){t=null;for(var n=l,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(b(387));if(i=i.memoizedProps,i!==null){var o=n.type;Kt(n.pendingProps.value,i.value)||(t!==null?t.push(o):t=[o])}}else if(n===hu.current){if(i=n.alternate,i===null)throw Error(b(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(pn):t=[pn])}n=n.return}t!==null&&Mc(l,t,a,e),l.flags|=262144}function Nu(t){for(t=t.firstContext;t!==null;){if(!Kt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Na(t){Ca=t,Tl=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function At(t){return Rd(Ca,t)}function Vn(t,l){return Ca===null&&Na(t),Rd(t,l)}function Rd(t,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},Tl===null){if(t===null)throw Error(b(308));Tl=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Tl=Tl.next=l;return a}var W1=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(a,e){t.push(e)}};this.abort=function(){l.aborted=!0,t.forEach(function(a){return a()})}},R1=ht.unstable_scheduleCallback,F1=ht.unstable_NormalPriority,rt={$$typeof:Nl,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xo(){return{controller:new W1,data:new Map,refCount:0}}function Nn(t){t.refCount--,t.refCount===0&&R1(F1,function(){t.controller.abort()})}var Je=null,Dc=0,de=0,ne=null;function $1(t,l){if(Je===null){var a=Je=[];Dc=0,de=Vo(),ne={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Dc++,l.then(us,us),l}function us(){if(--Dc===0&&Je!==null){ne!==null&&(ne.status="fulfilled");var t=Je;Je=null,de=0,ne=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function I1(t,l){var a=[],e={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return t.then(function(){e.status="fulfilled",e.value=l;for(var n=0;n<a.length;n++)(0,a[n])(l)},function(n){for(e.status="rejected",e.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),e}var is=B.S;B.S=function(t,l){f0=Lt(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&$1(t,l),is!==null&&is(t,l)};var xa=vl(null);function So(){var t=xa.current;return t!==null?t:R.pooledCache}function iu(t,l){l===null?I(xa,xa.current):I(xa,l.pool)}function Fd(){var t=So();return t===null?null:{parent:rt._currentValue,pool:t}}var Ee=Error(b(460)),Eo=Error(b(474)),$u=Error(b(542)),zu={then:function(){}};function cs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $d(t,l,a){switch(a=t[a],a===void 0?t.push(l):a!==l&&(l.then(zl,zl),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,fs(t),t;default:if(typeof l.status=="string")l.then(zl,zl);else{if(t=R,t!==null&&100<t.shellSuspendCounter)throw Error(b(482));t=l,t.status="pending",t.then(function(e){if(l.status==="pending"){var n=l;n.status="fulfilled",n.value=e}},function(e){if(l.status==="pending"){var n=l;n.status="rejected",n.reason=e}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,fs(t),t}throw Sa=l,Ee}}function ha(t){try{var l=t._init;return l(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Sa=a,Ee):a}}var Sa=null;function os(){if(Sa===null)throw Error(b(459));var t=Sa;return Sa=null,t}function fs(t){if(t===Ee||t===$u)throw Error(b(483))}var ue=null,sn=0;function Kn(t){var l=sn;return sn+=1,ue===null&&(ue=[]),$d(ue,t,l)}function qe(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function Jn(t,l){throw l.$$typeof===Ym?Error(b(525)):(t=Object.prototype.toString.call(l),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function Id(t){function l(d,s){if(t){var p=d.deletions;p===null?(d.deletions=[s],d.flags|=16):p.push(s)}}function a(d,s){if(!t)return null;for(;s!==null;)l(d,s),s=s.sibling;return null}function e(d){for(var s=new Map;d!==null;)d.key!==null?s.set(d.key,d):s.set(d.index,d),d=d.sibling;return s}function n(d,s){return d=Ml(d,s),d.index=0,d.sibling=null,d}function u(d,s,p){return d.index=p,t?(p=d.alternate,p!==null?(p=p.index,p<s?(d.flags|=67108866,s):p):(d.flags|=67108866,s)):(d.flags|=1048576,s)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function o(d,s,p,g){return s===null||s.tag!==6?(s=Gi(p,d.mode,g),s.return=d,s):(s=n(s,p),s.return=d,s)}function f(d,s,p,g){var N=p.type;return N===Qa?h(d,s,p.props.children,g,p.key):s!==null&&(s.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Xl&&ha(N)===s.type)?(s=n(s,p.props),qe(s,p),s.return=d,s):(s=uu(p.type,p.key,p.props,null,d.mode,g),qe(s,p),s.return=d,s)}function r(d,s,p,g){return s===null||s.tag!==4||s.stateNode.containerInfo!==p.containerInfo||s.stateNode.implementation!==p.implementation?(s=Xi(p,d.mode,g),s.return=d,s):(s=n(s,p.children||[]),s.return=d,s)}function h(d,s,p,g,N){return s===null||s.tag!==7?(s=ba(p,d.mode,g,N),s.return=d,s):(s=n(s,p),s.return=d,s)}function y(d,s,p){if(typeof s=="string"&&s!==""||typeof s=="number"||typeof s=="bigint")return s=Gi(""+s,d.mode,p),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case wn:return p=uu(s.type,s.key,s.props,null,d.mode,p),qe(p,s),p.return=d,p;case Ge:return s=Xi(s,d.mode,p),s.return=d,s;case Xl:return s=ha(s),y(d,s,p)}if(Xe(s)||Ce(s))return s=ba(s,d.mode,p,null),s.return=d,s;if(typeof s.then=="function")return y(d,Kn(s),p);if(s.$$typeof===Nl)return y(d,Vn(d,s),p);Jn(d,s)}return null}function m(d,s,p,g){var N=s!==null?s.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return N!==null?null:o(d,s,""+p,g);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case wn:return p.key===N?f(d,s,p,g):null;case Ge:return p.key===N?r(d,s,p,g):null;case Xl:return p=ha(p),m(d,s,p,g)}if(Xe(p)||Ce(p))return N!==null?null:h(d,s,p,g,null);if(typeof p.then=="function")return m(d,s,Kn(p),g);if(p.$$typeof===Nl)return m(d,s,Vn(d,p),g);Jn(d,p)}return null}function v(d,s,p,g,N){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return d=d.get(p)||null,o(s,d,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wn:return d=d.get(g.key===null?p:g.key)||null,f(s,d,g,N);case Ge:return d=d.get(g.key===null?p:g.key)||null,r(s,d,g,N);case Xl:return g=ha(g),v(d,s,p,g,N)}if(Xe(g)||Ce(g))return d=d.get(p)||null,h(s,d,g,N,null);if(typeof g.then=="function")return v(d,s,p,Kn(g),N);if(g.$$typeof===Nl)return v(d,s,p,Vn(s,g),N);Jn(s,g)}return null}function S(d,s,p,g){for(var N=null,T=null,A=s,M=s=0,C=null;A!==null&&M<p.length;M++){A.index>M?(C=A,A=null):C=A.sibling;var O=m(d,A,p[M],g);if(O===null){A===null&&(A=C);break}t&&A&&O.alternate===null&&l(d,A),s=u(O,s,M),T===null?N=O:T.sibling=O,T=O,A=C}if(M===p.length)return a(d,A),G&&El(d,M),N;if(A===null){for(;M<p.length;M++)A=y(d,p[M],g),A!==null&&(s=u(A,s,M),T===null?N=A:T.sibling=A,T=A);return G&&El(d,M),N}for(A=e(A);M<p.length;M++)C=v(A,d,M,p[M],g),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?M:C.key),s=u(C,s,M),T===null?N=C:T.sibling=C,T=C);return t&&A.forEach(function(D){return l(d,D)}),G&&El(d,M),N}function x(d,s,p,g){if(p==null)throw Error(b(151));for(var N=null,T=null,A=s,M=s=0,C=null,O=p.next();A!==null&&!O.done;M++,O=p.next()){A.index>M?(C=A,A=null):C=A.sibling;var D=m(d,A,O.value,g);if(D===null){A===null&&(A=C);break}t&&A&&D.alternate===null&&l(d,A),s=u(D,s,M),T===null?N=D:T.sibling=D,T=D,A=C}if(O.done)return a(d,A),G&&El(d,M),N;if(A===null){for(;!O.done;M++,O=p.next())O=y(d,O.value,g),O!==null&&(s=u(O,s,M),T===null?N=O:T.sibling=O,T=O);return G&&El(d,M),N}for(A=e(A);!O.done;M++,O=p.next())O=v(A,d,M,O.value,g),O!==null&&(t&&O.alternate!==null&&A.delete(O.key===null?M:O.key),s=u(O,s,M),T===null?N=O:T.sibling=O,T=O);return t&&A.forEach(function(F){return l(d,F)}),G&&El(d,M),N}function z(d,s,p,g){if(typeof p=="object"&&p!==null&&p.type===Qa&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case wn:t:{for(var N=p.key;s!==null;){if(s.key===N){if(N=p.type,N===Qa){if(s.tag===7){a(d,s.sibling),g=n(s,p.props.children),g.return=d,d=g;break t}}else if(s.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Xl&&ha(N)===s.type){a(d,s.sibling),g=n(s,p.props),qe(g,p),g.return=d,d=g;break t}a(d,s);break}else l(d,s);s=s.sibling}p.type===Qa?(g=ba(p.props.children,d.mode,g,p.key),g.return=d,d=g):(g=uu(p.type,p.key,p.props,null,d.mode,g),qe(g,p),g.return=d,d=g)}return i(d);case Ge:t:{for(N=p.key;s!==null;){if(s.key===N)if(s.tag===4&&s.stateNode.containerInfo===p.containerInfo&&s.stateNode.implementation===p.implementation){a(d,s.sibling),g=n(s,p.children||[]),g.return=d,d=g;break t}else{a(d,s);break}else l(d,s);s=s.sibling}g=Xi(p,d.mode,g),g.return=d,d=g}return i(d);case Xl:return p=ha(p),z(d,s,p,g)}if(Xe(p))return S(d,s,p,g);if(Ce(p)){if(N=Ce(p),typeof N!="function")throw Error(b(150));return p=N.call(p),x(d,s,p,g)}if(typeof p.then=="function")return z(d,s,Kn(p),g);if(p.$$typeof===Nl)return z(d,s,Vn(d,p),g);Jn(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,s!==null&&s.tag===6?(a(d,s.sibling),g=n(s,p),g.return=d,d=g):(a(d,s),g=Gi(p,d.mode,g),g.return=d,d=g),i(d)):a(d,s)}return function(d,s,p,g){try{sn=0;var N=z(d,s,p,g);return ue=null,N}catch(A){if(A===Ee||A===$u)throw A;var T=Xt(29,A,null,d.mode);return T.lanes=g,T.return=d,T}}}var za=Id(!0),Pd=Id(!1),jl=!1;function Ao(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ta(t,l,a){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(j&2)!==0){var n=e.pending;return n===null?l.next=l:(l.next=n.next,n.next=l),e.pending=l,l=Eu(t),Zd(t,null,a),l}return Fu(t,e,l,a),Eu(t)}function We(t,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,yd(t,a)}}function Li(t,l){var a=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var n=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,a=a.next}while(a!==null);u===null?n=u=l:u=u.next=l}else n=u=l;a={baseState:e.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:e.shared,callbacks:e.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=l:t.next=l,a.lastBaseUpdate=l}var _c=!1;function Re(){if(_c){var t=ne;if(t!==null)throw t}}function Fe(t,l,a,e){_c=!1;var n=t.updateQueue;jl=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var f=o,r=f.next;f.next=null,i===null?u=r:i.next=r,i=f;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==i&&(o===null?h.firstBaseUpdate=r:o.next=r,h.lastBaseUpdate=f))}if(u!==null){var y=n.baseState;i=0,h=r=f=null,o=u;do{var m=o.lane&-536870913,v=m!==o.lane;if(v?(Y&m)===m:(e&m)===m){m!==0&&m===de&&(_c=!0),h!==null&&(h=h.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});t:{var S=t,x=o;m=l;var z=a;switch(x.tag){case 1:if(S=x.payload,typeof S=="function"){y=S.call(z,y,m);break t}y=S;break t;case 3:S.flags=S.flags&-65537|128;case 0:if(S=x.payload,m=typeof S=="function"?S.call(z,y,m):S,m==null)break t;y=at({},y,m);break t;case 2:jl=!0}}m=o.callback,m!==null&&(t.flags|=64,v&&(t.flags|=8192),v=n.callbacks,v===null?n.callbacks=[m]:v.push(m))}else v={lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(r=h=v,f=y):h=h.next=v,i|=m;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;v=o,o=v.next,v.next=null,n.lastBaseUpdate=v,n.shared.pending=null}}while(!0);h===null&&(f=y),n.baseState=f,n.firstBaseUpdate=r,n.lastBaseUpdate=h,u===null&&(n.shared.lanes=0),fa|=i,t.lanes=i,t.memoizedState=y}}function tr(t,l){if(typeof t!="function")throw Error(b(191,t));t.call(l)}function lr(t,l){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)tr(a[t],l)}var re=vl(null),Tu=vl(0);function ss(t,l){t=ql,I(Tu,t),I(re,l),ql=t|l.baseLanes}function Bc(){I(Tu,ql),I(re,re.current)}function No(){ql=Tu.current,bt(re),bt(Tu)}var Jt=vl(null),el=null;function Ql(t){var l=t.alternate;I(ct,ct.current&1),I(Jt,t),el===null&&(l===null||re.current!==null||l.memoizedState!==null)&&(el=t)}function Cc(t){I(ct,ct.current),I(Jt,t),el===null&&(el=t)}function ar(t){t.tag===22?(I(ct,ct.current),I(Jt,t),el===null&&(el=t)):Zl(t)}function Zl(){I(ct,ct.current),I(Jt,Jt.current)}function Gt(t){bt(Jt),el===t&&(el=null),bt(ct)}var ct=vl(0);function Mu(t){for(var l=t;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$c(a)||Ic(a)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Bl=0,q=null,W=null,st=null,Du=!1,ie=!1,Ta=!1,Ou=0,dn=0,ce=null,P1=0;function ut(){throw Error(b(321))}function zo(t,l){if(l===null)return!1;for(var a=0;a<l.length&&a<t.length;a++)if(!Kt(t[a],l[a]))return!1;return!0}function To(t,l,a,e,n,u){return Bl=u,q=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,B.H=t===null||t.memoizedState===null?Ur:wo,Ta=!1,u=a(e,n),Ta=!1,ie&&(u=nr(l,a,e,n)),er(t),u}function er(t){B.H=rn;var l=W!==null&&W.next!==null;if(Bl=0,st=W=q=null,Du=!1,dn=0,ce=null,l)throw Error(b(300));t===null||mt||(t=t.dependencies,t!==null&&Nu(t)&&(mt=!0))}function nr(t,l,a,e){q=t;var n=0;do{if(ie&&(ce=null),dn=0,ie=!1,25<=n)throw Error(b(301));if(n+=1,st=W=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}B.H=qr,u=l(a,e)}while(ie);return u}function tv(){var t=B.H,l=t.useState()[0];return l=typeof l.then=="function"?zn(l):l,t=t.useState()[0],(W!==null?W.memoizedState:null)!==t&&(q.flags|=1024),l}function Mo(){var t=Ou!==0;return Ou=0,t}function Do(t,l,a){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~a}function Oo(t){if(Du){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}Du=!1}Bl=0,st=W=q=null,ie=!1,dn=Ou=0,ce=null}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?q.memoizedState=st=t:st=st.next=t,st}function ot(){if(W===null){var t=q.alternate;t=t!==null?t.memoizedState:null}else t=W.next;var l=st===null?q.memoizedState:st.next;if(l!==null)st=l,W=t;else{if(t===null)throw q.alternate===null?Error(b(467)):Error(b(310));W=t,t={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},st===null?q.memoizedState=st=t:st=st.next=t}return st}function Iu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zn(t){var l=dn;return dn+=1,ce===null&&(ce=[]),t=$d(ce,t,l),l=q,(st===null?l.memoizedState:st.next)===null&&(l=l.alternate,B.H=l===null||l.memoizedState===null?Ur:wo),t}function Pu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zn(t);if(t.$$typeof===Nl)return At(t)}throw Error(b(438,String(t)))}function _o(t){var l=null,a=q.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var e=q.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(l={data:e.data.map(function(n){return n.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=Iu(),q.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(t),e=0;e<t;e++)a[e]=Gm;return l.index++,a}function Cl(t,l){return typeof l=="function"?l(t):l}function cu(t){var l=ot();return Bo(l,W,t)}function Bo(t,l,a){var e=t.queue;if(e===null)throw Error(b(311));e.lastRenderedReducer=a;var n=t.baseQueue,u=e.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}l.baseQueue=n=u,e.pending=null}if(u=t.baseState,n===null)t.memoizedState=u;else{l=n.next;var o=i=null,f=null,r=l,h=!1;do{var y=r.lane&-536870913;if(y!==r.lane?(Y&y)===y:(Bl&y)===y){var m=r.revertLane;if(m===0)f!==null&&(f=f.next={lane:0,revertLane:0,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null}),y===de&&(h=!0);else if((Bl&m)===m){r=r.next,m===de&&(h=!0);continue}else y={lane:0,revertLane:r.revertLane,gesture:null,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},f===null?(o=f=y,i=u):f=f.next=y,q.lanes|=m,fa|=m;y=r.action,Ta&&a(u,y),u=r.hasEagerState?r.eagerState:a(u,y)}else m={lane:y,revertLane:r.revertLane,gesture:r.gesture,action:r.action,hasEagerState:r.hasEagerState,eagerState:r.eagerState,next:null},f===null?(o=f=m,i=u):f=f.next=m,q.lanes|=y,fa|=y;r=r.next}while(r!==null&&r!==l);if(f===null?i=u:f.next=o,!Kt(u,t.memoizedState)&&(mt=!0,h&&(a=ne,a!==null)))throw a;t.memoizedState=u,t.baseState=i,t.baseQueue=f,e.lastRenderedState=u}return n===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function Qi(t){var l=ot(),a=l.queue;if(a===null)throw Error(b(311));a.lastRenderedReducer=t;var e=a.dispatch,n=a.pending,u=l.memoizedState;if(n!==null){a.pending=null;var i=n=n.next;do u=t(u,i.action),i=i.next;while(i!==n);Kt(u,l.memoizedState)||(mt=!0),l.memoizedState=u,l.baseQueue===null&&(l.baseState=u),a.lastRenderedState=u}return[u,e]}function ur(t,l,a){var e=q,n=ot(),u=G;if(u){if(a===void 0)throw Error(b(407));a=a()}else a=l();var i=!Kt((W||n).memoizedState,a);if(i&&(n.memoizedState=a,mt=!0),n=n.queue,Co(or.bind(null,e,n,t),[t]),n.getSnapshot!==l||i||st!==null&&st.memoizedState.tag&1){if(e.flags|=2048,me(9,{destroy:void 0},cr.bind(null,e,n,a,l),null),R===null)throw Error(b(349));u||(Bl&127)!==0||ir(e,l,a)}return a}function ir(t,l,a){t.flags|=16384,t={getSnapshot:l,value:a},l=q.updateQueue,l===null?(l=Iu(),q.updateQueue=l,l.stores=[t]):(a=l.stores,a===null?l.stores=[t]:a.push(t))}function cr(t,l,a,e){l.value=a,l.getSnapshot=e,fr(l)&&sr(t)}function or(t,l,a){return a(function(){fr(l)&&sr(t)})}function fr(t){var l=t.getSnapshot;t=t.value;try{var a=l();return!Kt(t,a)}catch{return!0}}function sr(t){var l=Ba(t,2);l!==null&&qt(l,t,2)}function Uc(t){var l=Ot();if(typeof t=="function"){var a=t;if(t=a(),Ta){Kl(!0);try{a()}finally{Kl(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:t},l}function dr(t,l,a,e){return t.baseState=a,Bo(t,W,typeof e=="function"?e:Cl)}function lv(t,l,a,e,n){if(li(t))throw Error(b(485));if(t=l.action,t!==null){var u={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};B.T!==null?a(!0):u.isTransition=!1,e(u),a=l.pending,a===null?(u.next=l.pending=u,rr(l,u)):(u.next=a.next,l.pending=a.next=u)}}function rr(t,l){var a=l.action,e=l.payload,n=t.state;if(l.isTransition){var u=B.T,i={};B.T=i;try{var o=a(n,e),f=B.S;f!==null&&f(i,o),ds(t,l,o)}catch(r){qc(t,l,r)}finally{u!==null&&i.types!==null&&(u.types=i.types),B.T=u}}else try{u=a(n,e),ds(t,l,u)}catch(r){qc(t,l,r)}}function ds(t,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){rs(t,l,e)},function(e){return qc(t,l,e)}):rs(t,l,a)}function rs(t,l,a){l.status="fulfilled",l.value=a,mr(l),t.state=a,l=t.pending,l!==null&&(a=l.next,a===l?t.pending=null:(a=a.next,l.next=a,rr(t,a)))}function qc(t,l,a){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do l.status="rejected",l.reason=a,mr(l),l=l.next;while(l!==e)}t.action=null}function mr(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function vr(t,l){return l}function ms(t,l){if(G){var a=R.formState;if(a!==null){t:{var e=q;if(G){if(lt){l:{for(var n=lt,u=al;n.nodeType!==8;){if(!u){n=null;break l}if(n=nl(n.nextSibling),n===null){n=null;break l}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){lt=nl(n.nextSibling),e=n.data==="F!";break t}}ca(e)}e=!1}e&&(l=a[0])}}return a=Ot(),a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:l},a.queue=e,a=_r.bind(null,q,e),e.dispatch=a,e=Uc(!1),u=ko.bind(null,q,!1,e.queue),e=Ot(),n={state:l,dispatch:null,action:t,pending:null},e.queue=n,a=lv.bind(null,q,n,u,a),n.dispatch=a,e.memoizedState=t,[l,a,!1]}function vs(t){var l=ot();return pr(l,W,t)}function pr(t,l,a){if(l=Bo(t,l,vr)[0],t=cu(Cl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var e=zn(l)}catch(i){throw i===Ee?$u:i}else e=l;l=ot();var n=l.queue,u=n.dispatch;return a!==l.memoizedState&&(q.flags|=2048,me(9,{destroy:void 0},av.bind(null,n,a),null)),[e,u,t]}function av(t,l){t.action=l}function ps(t){var l=ot(),a=W;if(a!==null)return pr(l,a,t);ot(),l=l.memoizedState,a=ot();var e=a.queue.dispatch;return a.memoizedState=t,[l,e,!1]}function me(t,l,a,e){return t={tag:t,create:a,deps:e,inst:l,next:null},l=q.updateQueue,l===null&&(l=Iu(),q.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=t.next=t:(e=a.next,a.next=t,t.next=e,l.lastEffect=t),t}function hr(){return ot().memoizedState}function ou(t,l,a,e){var n=Ot();q.flags|=t,n.memoizedState=me(1|l,{destroy:void 0},a,e===void 0?null:e)}function ti(t,l,a,e){var n=ot();e=e===void 0?null:e;var u=n.memoizedState.inst;W!==null&&e!==null&&zo(e,W.memoizedState.deps)?n.memoizedState=me(l,u,a,e):(q.flags|=t,n.memoizedState=me(1|l,u,a,e))}function hs(t,l){ou(8390656,8,t,l)}function Co(t,l){ti(2048,8,t,l)}function ev(t){q.flags|=4;var l=q.updateQueue;if(l===null)l=Iu(),q.updateQueue=l,l.events=[t];else{var a=l.events;a===null?l.events=[t]:a.push(t)}}function yr(t){var l=ot().memoizedState;return ev({ref:l,nextImpl:t}),function(){if((j&2)!==0)throw Error(b(440));return l.impl.apply(void 0,arguments)}}function gr(t,l){return ti(4,2,t,l)}function br(t,l){return ti(4,4,t,l)}function xr(t,l){if(typeof l=="function"){t=t();var a=l(t);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function Sr(t,l,a){a=a!=null?a.concat([t]):null,ti(4,4,xr.bind(null,l,t),a)}function Uo(){}function Er(t,l){var a=ot();l=l===void 0?null:l;var e=a.memoizedState;return l!==null&&zo(l,e[1])?e[0]:(a.memoizedState=[t,l],t)}function Ar(t,l){var a=ot();l=l===void 0?null:l;var e=a.memoizedState;if(l!==null&&zo(l,e[1]))return e[0];if(e=t(),Ta){Kl(!0);try{t()}finally{Kl(!1)}}return a.memoizedState=[e,l],e}function qo(t,l,a){return a===void 0||(Bl&1073741824)!==0&&(Y&261930)===0?t.memoizedState=l:(t.memoizedState=a,t=d0(),q.lanes|=t,fa|=t,a)}function Nr(t,l,a,e){return Kt(a,l)?a:re.current!==null?(t=qo(t,a,e),Kt(t,l)||(mt=!0),t):(Bl&42)===0||(Bl&1073741824)!==0&&(Y&261930)===0?(mt=!0,t.memoizedState=a):(t=d0(),q.lanes|=t,fa|=t,l)}function zr(t,l,a,e,n){var u=L.p;L.p=u!==0&&8>u?u:8;var i=B.T,o={};B.T=o,ko(t,!1,l,a);try{var f=n(),r=B.S;if(r!==null&&r(o,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var h=I1(f,e);$e(t,l,h,Vt(t))}else $e(t,l,e,Vt(t))}catch(y){$e(t,l,{then:function(){},status:"rejected",reason:y},Vt())}finally{L.p=u,i!==null&&o.types!==null&&(i.types=o.types),B.T=i}}function nv(){}function Hc(t,l,a,e){if(t.tag!==5)throw Error(b(476));var n=Tr(t).queue;zr(t,n,l,ga,a===null?nv:function(){return Mr(t),a(e)})}function Tr(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:ga,baseState:ga,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:ga},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:a},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function Mr(t){var l=Tr(t);l.next===null&&(l=t.alternate.memoizedState),$e(t,l.next.queue,{},Vt())}function Ho(){return At(pn)}function Dr(){return ot().memoizedState}function Or(){return ot().memoizedState}function uv(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var a=Vt();t=Pl(a);var e=ta(l,t,a);e!==null&&(qt(e,l,a),We(e,l,a)),l={cache:xo()},t.payload=l;return}l=l.return}}function iv(t,l,a){var e=Vt();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},li(t)?Br(l,a):(a=ho(t,l,a,e),a!==null&&(qt(a,t,e),Cr(a,l,e)))}function _r(t,l,a){var e=Vt();$e(t,l,a,e)}function $e(t,l,a,e){var n={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(li(t))Br(l,n);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=l.lastRenderedReducer,u!==null))try{var i=l.lastRenderedState,o=u(i,a);if(n.hasEagerState=!0,n.eagerState=o,Kt(o,i))return Fu(t,l,n,0),R===null&&Ru(),!1}catch{}if(a=ho(t,l,n,e),a!==null)return qt(a,t,e),Cr(a,l,e),!0}return!1}function ko(t,l,a,e){if(e={lane:2,revertLane:Vo(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},li(t)){if(l)throw Error(b(479))}else l=ho(t,a,e,2),l!==null&&qt(l,t,2)}function li(t){var l=t.alternate;return t===q||l!==null&&l===q}function Br(t,l){ie=Du=!0;var a=t.pending;a===null?l.next=l:(l.next=a.next,a.next=l),t.pending=l}function Cr(t,l,a){if((a&4194048)!==0){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,yd(t,a)}}var rn={readContext:At,use:Pu,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};rn.useEffectEvent=ut;var Ur={readContext:At,use:Pu,useCallback:function(t,l){return Ot().memoizedState=[t,l===void 0?null:l],t},useContext:At,useEffect:hs,useImperativeHandle:function(t,l,a){a=a!=null?a.concat([t]):null,ou(4194308,4,xr.bind(null,l,t),a)},useLayoutEffect:function(t,l){return ou(4194308,4,t,l)},useInsertionEffect:function(t,l){ou(4,2,t,l)},useMemo:function(t,l){var a=Ot();l=l===void 0?null:l;var e=t();if(Ta){Kl(!0);try{t()}finally{Kl(!1)}}return a.memoizedState=[e,l],e},useReducer:function(t,l,a){var e=Ot();if(a!==void 0){var n=a(l);if(Ta){Kl(!0);try{a(l)}finally{Kl(!1)}}}else n=l;return e.memoizedState=e.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},e.queue=t,t=t.dispatch=iv.bind(null,q,t),[e.memoizedState,t]},useRef:function(t){var l=Ot();return t={current:t},l.memoizedState=t},useState:function(t){t=Uc(t);var l=t.queue,a=_r.bind(null,q,l);return l.dispatch=a,[t.memoizedState,a]},useDebugValue:Uo,useDeferredValue:function(t,l){var a=Ot();return qo(a,t,l)},useTransition:function(){var t=Uc(!1);return t=zr.bind(null,q,t.queue,!0,!1),Ot().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,a){var e=q,n=Ot();if(G){if(a===void 0)throw Error(b(407));a=a()}else{if(a=l(),R===null)throw Error(b(349));(Y&127)!==0||ir(e,l,a)}n.memoizedState=a;var u={value:a,getSnapshot:l};return n.queue=u,hs(or.bind(null,e,u,t),[t]),e.flags|=2048,me(9,{destroy:void 0},cr.bind(null,e,u,a,l),null),a},useId:function(){var t=Ot(),l=R.identifierPrefix;if(G){var a=dl,e=sl;a=(e&~(1<<32-Zt(e)-1)).toString(32)+a,l="_"+l+"R_"+a,a=Ou++,0<a&&(l+="H"+a.toString(32)),l+="_"}else a=P1++,l="_"+l+"r_"+a.toString(32)+"_";return t.memoizedState=l},useHostTransitionStatus:Ho,useFormState:ms,useActionState:ms,useOptimistic:function(t){var l=Ot();l.memoizedState=l.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=ko.bind(null,q,!0,a),a.dispatch=l,[t,l]},useMemoCache:_o,useCacheRefresh:function(){return Ot().memoizedState=uv.bind(null,q)},useEffectEvent:function(t){var l=Ot(),a={impl:t};return l.memoizedState=a,function(){if((j&2)!==0)throw Error(b(440));return a.impl.apply(void 0,arguments)}}},wo={readContext:At,use:Pu,useCallback:Er,useContext:At,useEffect:Co,useImperativeHandle:Sr,useInsertionEffect:gr,useLayoutEffect:br,useMemo:Ar,useReducer:cu,useRef:hr,useState:function(){return cu(Cl)},useDebugValue:Uo,useDeferredValue:function(t,l){var a=ot();return Nr(a,W.memoizedState,t,l)},useTransition:function(){var t=cu(Cl)[0],l=ot().memoizedState;return[typeof t=="boolean"?t:zn(t),l]},useSyncExternalStore:ur,useId:Dr,useHostTransitionStatus:Ho,useFormState:vs,useActionState:vs,useOptimistic:function(t,l){var a=ot();return dr(a,W,t,l)},useMemoCache:_o,useCacheRefresh:Or};wo.useEffectEvent=yr;var qr={readContext:At,use:Pu,useCallback:Er,useContext:At,useEffect:Co,useImperativeHandle:Sr,useInsertionEffect:gr,useLayoutEffect:br,useMemo:Ar,useReducer:Qi,useRef:hr,useState:function(){return Qi(Cl)},useDebugValue:Uo,useDeferredValue:function(t,l){var a=ot();return W===null?qo(a,t,l):Nr(a,W.memoizedState,t,l)},useTransition:function(){var t=Qi(Cl)[0],l=ot().memoizedState;return[typeof t=="boolean"?t:zn(t),l]},useSyncExternalStore:ur,useId:Dr,useHostTransitionStatus:Ho,useFormState:ps,useActionState:ps,useOptimistic:function(t,l){var a=ot();return W!==null?dr(a,W,t,l):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:_o,useCacheRefresh:Or};qr.useEffectEvent=yr;function Zi(t,l,a,e){l=t.memoizedState,a=a(e,l),a=a==null?l:at({},l,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var kc={enqueueSetState:function(t,l,a){t=t._reactInternals;var e=Vt(),n=Pl(e);n.payload=l,a!=null&&(n.callback=a),l=ta(t,n,e),l!==null&&(qt(l,t,e),We(l,t,e))},enqueueReplaceState:function(t,l,a){t=t._reactInternals;var e=Vt(),n=Pl(e);n.tag=1,n.payload=l,a!=null&&(n.callback=a),l=ta(t,n,e),l!==null&&(qt(l,t,e),We(l,t,e))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var a=Vt(),e=Pl(a);e.tag=2,l!=null&&(e.callback=l),l=ta(t,e,a),l!==null&&(qt(l,t,a),We(l,t,a))}};function ys(t,l,a,e,n,u,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,u,i):l.prototype&&l.prototype.isPureReactComponent?!cn(a,e)||!cn(n,u):!0}function gs(t,l,a,e){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,e),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,e),l.state!==t&&kc.enqueueReplaceState(l,l.state,null)}function Ma(t,l){var a=l;if("ref"in l){a={};for(var e in l)e!=="ref"&&(a[e]=l[e])}if(t=t.defaultProps){a===l&&(a=at({},a));for(var n in t)a[n]===void 0&&(a[n]=t[n])}return a}function Hr(t){Su(t)}function kr(t){console.error(t)}function wr(t){Su(t)}function _u(t,l){try{var a=t.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(e){setTimeout(function(){throw e})}}function bs(t,l,a){try{var e=t.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function wc(t,l,a){return a=Pl(a),a.tag=3,a.payload={element:null},a.callback=function(){_u(t,l)},a}function Yr(t){return t=Pl(t),t.tag=3,t}function Gr(t,l,a,e){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var u=e.value;t.payload=function(){return n(u)},t.callback=function(){bs(l,a,e)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){bs(l,a,e),typeof n!="function"&&(la===null?la=new Set([this]):la.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})})}function cv(t,l,a,e,n){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(l=a.alternate,l!==null&&Se(l,a,n,!0),a=Jt.current,a!==null){switch(a.tag){case 31:case 13:return el===null?Hu():a.alternate===null&&it===0&&(it=3),a.flags&=-257,a.flags|=65536,a.lanes=n,e===zu?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([e]):l.add(e),lc(t,e,n)),!1;case 22:return a.flags|=65536,e===zu?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([e]):a.add(e)),lc(t,e,n)),!1}throw Error(b(435,a.tag))}return lc(t,e,n),Hu(),!1}if(G)return l=Jt.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=n,e!==Nc&&(t=Error(b(422),{cause:e}),fn(ll(t,a)))):(e!==Nc&&(l=Error(b(423),{cause:e}),fn(ll(l,a))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,e=ll(e,a),n=wc(t.stateNode,e,n),Li(t,n),it!==4&&(it=2)),!1;var u=Error(b(520),{cause:e});if(u=ll(u,a),tn===null?tn=[u]:tn.push(u),it!==4&&(it=2),l===null)return!0;e=ll(e,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,t=n&-n,a.lanes|=t,t=wc(a.stateNode,e,t),Li(a,t),!1;case 1:if(l=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(la===null||!la.has(u))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Yr(n),Gr(n,t,a,e),Li(a,n),!1}a=a.return}while(a!==null);return!1}var Yo=Error(b(461)),mt=!1;function xt(t,l,a,e){l.child=t===null?Pd(l,null,a,e):za(l,t.child,a,e)}function xs(t,l,a,e,n){a=a.render;var u=l.ref;if("ref"in e){var i={};for(var o in e)o!=="ref"&&(i[o]=e[o])}else i=e;return Na(l),e=To(t,l,a,i,u,n),o=Mo(),t!==null&&!mt?(Do(t,l,n),Ul(t,l,n)):(G&&o&&go(l),l.flags|=1,xt(t,l,e,n),l.child)}function Ss(t,l,a,e,n){if(t===null){var u=a.type;return typeof u=="function"&&!yo(u)&&u.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=u,Xr(t,l,u,e,n)):(t=uu(a.type,null,e,l,l.mode,n),t.ref=l.ref,t.return=l,l.child=t)}if(u=t.child,!Go(t,n)){var i=u.memoizedProps;if(a=a.compare,a=a!==null?a:cn,a(i,e)&&t.ref===l.ref)return Ul(t,l,n)}return l.flags|=1,t=Ml(u,e),t.ref=l.ref,t.return=l,l.child=t}function Xr(t,l,a,e,n){if(t!==null){var u=t.memoizedProps;if(cn(u,e)&&t.ref===l.ref)if(mt=!1,l.pendingProps=e=u,Go(t,n))(t.flags&131072)!==0&&(mt=!0);else return l.lanes=t.lanes,Ul(t,l,n)}return Yc(t,l,a,e,n)}function jr(t,l,a,e){var n=e.children,u=t!==null?t.memoizedState:null;if(t===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((l.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(e=l.child=t.child,n=0;e!==null;)n=n|e.lanes|e.childLanes,e=e.sibling;e=n&~u}else e=0,l.child=null;return Es(t,l,u,a,e)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&iu(l,u!==null?u.cachePool:null),u!==null?ss(l,u):Bc(),ar(l);else return e=l.lanes=536870912,Es(t,l,u!==null?u.baseLanes|a:a,a,e)}else u!==null?(iu(l,u.cachePool),ss(l,u),Zl(l),l.memoizedState=null):(t!==null&&iu(l,null),Bc(),Zl(l));return xt(t,l,n,a),l.child}function Le(t,l){return t!==null&&t.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function Es(t,l,a,e,n){var u=So();return u=u===null?null:{parent:rt._currentValue,pool:u},l.memoizedState={baseLanes:a,cachePool:u},t!==null&&iu(l,null),Bc(),ar(l),t!==null&&Se(t,l,e,!0),l.childLanes=n,null}function fu(t,l){return l=Bu({mode:l.mode,children:l.children},t.mode),l.ref=t.ref,t.child=l,l.return=t,l}function As(t,l,a){return za(l,t.child,null,a),t=fu(l,l.pendingProps),t.flags|=2,Gt(l),l.memoizedState=null,t}function ov(t,l,a){var e=l.pendingProps,n=(l.flags&128)!==0;if(l.flags&=-129,t===null){if(G){if(e.mode==="hidden")return t=fu(l,e),l.lanes=536870912,Le(null,t);if(Cc(l),(t=lt)?(t=U0(t,al),t=t!==null&&t.data==="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ia!==null?{id:sl,overflow:dl}:null,retryLane:536870912,hydrationErrors:null},a=Kd(t),a.return=l,l.child=a,Et=l,lt=null)):t=null,t===null)throw ca(l);return l.lanes=536870912,null}return fu(l,e)}var u=t.memoizedState;if(u!==null){var i=u.dehydrated;if(Cc(l),n)if(l.flags&256)l.flags&=-257,l=As(t,l,a);else if(l.memoizedState!==null)l.child=t.child,l.flags|=128,l=null;else throw Error(b(558));else if(mt||Se(t,l,a,!1),n=(a&t.childLanes)!==0,mt||n){if(e=R,e!==null&&(i=gd(e,a),i!==0&&i!==u.retryLane))throw u.retryLane=i,Ba(t,i),qt(e,t,i),Yo;Hu(),l=As(t,l,a)}else t=u.treeContext,lt=nl(i.nextSibling),Et=l,G=!0,Il=null,al=!1,t!==null&&Wd(l,t),l=fu(l,e),l.flags|=4096;return l}return t=Ml(t.child,{mode:e.mode,children:e.children}),t.ref=l.ref,l.child=t,t.return=l,t}function su(t,l){var a=l.ref;if(a===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(b(284));(t===null||t.ref!==a)&&(l.flags|=4194816)}}function Yc(t,l,a,e,n){return Na(l),a=To(t,l,a,e,void 0,n),e=Mo(),t!==null&&!mt?(Do(t,l,n),Ul(t,l,n)):(G&&e&&go(l),l.flags|=1,xt(t,l,a,n),l.child)}function Ns(t,l,a,e,n,u){return Na(l),l.updateQueue=null,a=nr(l,e,a,n),er(t),e=Mo(),t!==null&&!mt?(Do(t,l,u),Ul(t,l,u)):(G&&e&&go(l),l.flags|=1,xt(t,l,a,u),l.child)}function zs(t,l,a,e,n){if(Na(l),l.stateNode===null){var u=$a,i=a.contextType;typeof i=="object"&&i!==null&&(u=At(i)),u=new a(e,u),l.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=kc,l.stateNode=u,u._reactInternals=l,u=l.stateNode,u.props=e,u.state=l.memoizedState,u.refs={},Ao(l),i=a.contextType,u.context=typeof i=="object"&&i!==null?At(i):$a,u.state=l.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(Zi(l,a,i,e),u.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&kc.enqueueReplaceState(u,u.state,null),Fe(l,e,u,n),Re(),u.state=l.memoizedState),typeof u.componentDidMount=="function"&&(l.flags|=4194308),e=!0}else if(t===null){u=l.stateNode;var o=l.memoizedProps,f=Ma(a,o);u.props=f;var r=u.context,h=a.contextType;i=$a,typeof h=="object"&&h!==null&&(i=At(h));var y=a.getDerivedStateFromProps;h=typeof y=="function"||typeof u.getSnapshotBeforeUpdate=="function",o=l.pendingProps!==o,h||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(o||r!==i)&&gs(l,u,e,i),jl=!1;var m=l.memoizedState;u.state=m,Fe(l,e,u,n),Re(),r=l.memoizedState,o||m!==r||jl?(typeof y=="function"&&(Zi(l,a,y,e),r=l.memoizedState),(f=jl||ys(l,a,f,e,m,r,i))?(h||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(l.flags|=4194308)):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=e,l.memoizedState=r),u.props=e,u.state=r,u.context=i,e=f):(typeof u.componentDidMount=="function"&&(l.flags|=4194308),e=!1)}else{u=l.stateNode,Oc(t,l),i=l.memoizedProps,h=Ma(a,i),u.props=h,y=l.pendingProps,m=u.context,r=a.contextType,f=$a,typeof r=="object"&&r!==null&&(f=At(r)),o=a.getDerivedStateFromProps,(r=typeof o=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==y||m!==f)&&gs(l,u,e,f),jl=!1,m=l.memoizedState,u.state=m,Fe(l,e,u,n),Re();var v=l.memoizedState;i!==y||m!==v||jl||t!==null&&t.dependencies!==null&&Nu(t.dependencies)?(typeof o=="function"&&(Zi(l,a,o,e),v=l.memoizedState),(h=jl||ys(l,a,h,e,m,v,f)||t!==null&&t.dependencies!==null&&Nu(t.dependencies))?(r||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(e,v,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(e,v,f)),typeof u.componentDidUpdate=="function"&&(l.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&m===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&m===t.memoizedState||(l.flags|=1024),l.memoizedProps=e,l.memoizedState=v),u.props=e,u.state=v,u.context=f,e=h):(typeof u.componentDidUpdate!="function"||i===t.memoizedProps&&m===t.memoizedState||(l.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&m===t.memoizedState||(l.flags|=1024),e=!1)}return u=e,su(t,l),e=(l.flags&128)!==0,u||e?(u=l.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:u.render(),l.flags|=1,t!==null&&e?(l.child=za(l,t.child,null,n),l.child=za(l,null,a,n)):xt(t,l,a,n),l.memoizedState=u.state,t=l.child):t=Ul(t,l,n),t}function Ts(t,l,a,e){return Aa(),l.flags|=256,xt(t,l,a,e),l.child}var Vi={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ki(t){return{baseLanes:t,cachePool:Fd()}}function Ji(t,l,a){return t=t!==null?t.childLanes&~a:0,l&&(t|=jt),t}function Lr(t,l,a){var e=l.pendingProps,n=!1,u=(l.flags&128)!==0,i;if((i=u)||(i=t!==null&&t.memoizedState===null?!1:(ct.current&2)!==0),i&&(n=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(G){if(n?Ql(l):Zl(l),(t=lt)?(t=U0(t,al),t=t!==null&&t.data!=="&"?t:null,t!==null&&(l.memoizedState={dehydrated:t,treeContext:ia!==null?{id:sl,overflow:dl}:null,retryLane:536870912,hydrationErrors:null},a=Kd(t),a.return=l,l.child=a,Et=l,lt=null)):t=null,t===null)throw ca(l);return Ic(t)?l.lanes=32:l.lanes=536870912,null}var o=e.children;return e=e.fallback,n?(Zl(l),n=l.mode,o=Bu({mode:"hidden",children:o},n),e=ba(e,n,a,null),o.return=l,e.return=l,o.sibling=e,l.child=o,e=l.child,e.memoizedState=Ki(a),e.childLanes=Ji(t,i,a),l.memoizedState=Vi,Le(null,e)):(Ql(l),Gc(l,o))}var f=t.memoizedState;if(f!==null&&(o=f.dehydrated,o!==null)){if(u)l.flags&256?(Ql(l),l.flags&=-257,l=Wi(t,l,a)):l.memoizedState!==null?(Zl(l),l.child=t.child,l.flags|=128,l=null):(Zl(l),o=e.fallback,n=l.mode,e=Bu({mode:"visible",children:e.children},n),o=ba(o,n,a,null),o.flags|=2,e.return=l,o.return=l,e.sibling=o,l.child=e,za(l,t.child,null,a),e=l.child,e.memoizedState=Ki(a),e.childLanes=Ji(t,i,a),l.memoizedState=Vi,l=Le(null,e));else if(Ql(l),Ic(o)){if(i=o.nextSibling&&o.nextSibling.dataset,i)var r=i.dgst;i=r,e=Error(b(419)),e.stack="",e.digest=i,fn({value:e,source:null,stack:null}),l=Wi(t,l,a)}else if(mt||Se(t,l,a,!1),i=(a&t.childLanes)!==0,mt||i){if(i=R,i!==null&&(e=gd(i,a),e!==0&&e!==f.retryLane))throw f.retryLane=e,Ba(t,e),qt(i,t,e),Yo;$c(o)||Hu(),l=Wi(t,l,a)}else $c(o)?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,lt=nl(o.nextSibling),Et=l,G=!0,Il=null,al=!1,t!==null&&Wd(l,t),l=Gc(l,e.children),l.flags|=4096);return l}return n?(Zl(l),o=e.fallback,n=l.mode,f=t.child,r=f.sibling,e=Ml(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,r!==null?o=Ml(r,o):(o=ba(o,n,a,null),o.flags|=2),o.return=l,e.return=l,e.sibling=o,l.child=e,Le(null,e),e=l.child,o=t.child.memoizedState,o===null?o=Ki(a):(n=o.cachePool,n!==null?(f=rt._currentValue,n=n.parent!==f?{parent:f,pool:f}:n):n=Fd(),o={baseLanes:o.baseLanes|a,cachePool:n}),e.memoizedState=o,e.childLanes=Ji(t,i,a),l.memoizedState=Vi,Le(t.child,e)):(Ql(l),a=t.child,t=a.sibling,a=Ml(a,{mode:"visible",children:e.children}),a.return=l,a.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=a,l.memoizedState=null,a)}function Gc(t,l){return l=Bu({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function Bu(t,l){return t=Xt(22,t,null,l),t.lanes=0,t}function Wi(t,l,a){return za(l,t.child,null,a),t=Gc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Ms(t,l,a){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l),Tc(t.return,l,a)}function Ri(t,l,a,e,n,u){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:n,treeForkCount:u}:(i.isBackwards=l,i.rendering=null,i.renderingStartTime=0,i.last=e,i.tail=a,i.tailMode=n,i.treeForkCount=u)}function Qr(t,l,a){var e=l.pendingProps,n=e.revealOrder,u=e.tail;e=e.children;var i=ct.current,o=(i&2)!==0;if(o?(i=i&1|2,l.flags|=128):i&=1,I(ct,i),xt(t,l,e,a),e=G?on:0,!o&&t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ms(t,a,l);else if(t.tag===19)Ms(t,a,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(a=l.child,n=null;a!==null;)t=a.alternate,t!==null&&Mu(t)===null&&(n=a),a=a.sibling;a=n,a===null?(n=l.child,l.child=null):(n=a.sibling,a.sibling=null),Ri(l,!1,n,a,u,e);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=l.child,l.child=null;n!==null;){if(t=n.alternate,t!==null&&Mu(t)===null){l.child=n;break}t=n.sibling,n.sibling=a,a=n,n=t}Ri(l,!0,a,null,u,e);break;case"together":Ri(l,!1,null,null,void 0,e);break;default:l.memoizedState=null}return l.child}function Ul(t,l,a){if(t!==null&&(l.dependencies=t.dependencies),fa|=l.lanes,(a&l.childLanes)===0)if(t!==null){if(Se(t,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(b(153));if(l.child!==null){for(t=l.child,a=Ml(t,t.pendingProps),l.child=a,a.return=l;t.sibling!==null;)t=t.sibling,a=a.sibling=Ml(t,t.pendingProps),a.return=l;a.sibling=null}return l.child}function Go(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&Nu(t)))}function fv(t,l,a){switch(l.tag){case 3:yu(l,l.stateNode.containerInfo),Ll(l,rt,t.memoizedState.cache),Aa();break;case 27:case 5:mc(l);break;case 4:yu(l,l.stateNode.containerInfo);break;case 10:Ll(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,Cc(l),null;break;case 13:var e=l.memoizedState;if(e!==null)return e.dehydrated!==null?(Ql(l),l.flags|=128,null):(a&l.child.childLanes)!==0?Lr(t,l,a):(Ql(l),t=Ul(t,l,a),t!==null?t.sibling:null);Ql(l);break;case 19:var n=(t.flags&128)!==0;if(e=(a&l.childLanes)!==0,e||(Se(t,l,a,!1),e=(a&l.childLanes)!==0),n){if(e)return Qr(t,l,a);l.flags|=128}if(n=l.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),I(ct,ct.current),e)break;return null;case 22:return l.lanes=0,jr(t,l,a,l.pendingProps);case 24:Ll(l,rt,t.memoizedState.cache)}return Ul(t,l,a)}function Zr(t,l,a){if(t!==null)if(t.memoizedProps!==l.pendingProps)mt=!0;else{if(!Go(t,a)&&(l.flags&128)===0)return mt=!1,fv(t,l,a);mt=(t.flags&131072)!==0}else mt=!1,G&&(l.flags&1048576)!==0&&Jd(l,on,l.index);switch(l.lanes=0,l.tag){case 16:t:{var e=l.pendingProps;if(t=ha(l.elementType),l.type=t,typeof t=="function")yo(t)?(e=Ma(t,e),l.tag=1,l=zs(null,l,t,e,a)):(l.tag=0,l=Yc(null,l,t,e,a));else{if(t!=null){var n=t.$$typeof;if(n===ao){l.tag=11,l=xs(null,l,t,e,a);break t}else if(n===eo){l.tag=14,l=Ss(null,l,t,e,a);break t}}throw l=dc(t)||t,Error(b(306,l,""))}}return l;case 0:return Yc(t,l,l.type,l.pendingProps,a);case 1:return e=l.type,n=Ma(e,l.pendingProps),zs(t,l,e,n,a);case 3:t:{if(yu(l,l.stateNode.containerInfo),t===null)throw Error(b(387));e=l.pendingProps;var u=l.memoizedState;n=u.element,Oc(t,l),Fe(l,e,null,a);var i=l.memoizedState;if(e=i.cache,Ll(l,rt,e),e!==u.cache&&Mc(l,[rt],a,!0),Re(),e=i.element,u.isDehydrated)if(u={element:e,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=u,l.memoizedState=u,l.flags&256){l=Ts(t,l,e,a);break t}else if(e!==n){n=ll(Error(b(424)),l),fn(n),l=Ts(t,l,e,a);break t}else for(t=l.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,lt=nl(t.firstChild),Et=l,G=!0,Il=null,al=!0,a=Pd(l,null,e,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Aa(),e===n){l=Ul(t,l,a);break t}xt(t,l,e,a)}l=l.child}return l;case 26:return su(t,l),t===null?(a=Rs(l.type,null,l.pendingProps,null))?l.memoizedState=a:G||(a=l.type,t=l.pendingProps,e=Gu($l.current).createElement(a),e[St]=l,e[Ht]=t,Nt(e,a,t),gt(e),l.stateNode=e):l.memoizedState=Rs(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return mc(l),t===null&&G&&(e=l.stateNode=q0(l.type,l.pendingProps,$l.current),Et=l,al=!0,n=lt,da(l.type)?(Pc=n,lt=nl(e.firstChild)):lt=n),xt(t,l,l.pendingProps.children,a),su(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&G&&((n=e=lt)&&(e=wv(e,l.type,l.pendingProps,al),e!==null?(l.stateNode=e,Et=l,lt=nl(e.firstChild),al=!1,n=!0):n=!1),n||ca(l)),mc(l),n=l.type,u=l.pendingProps,i=t!==null?t.memoizedProps:null,e=u.children,Rc(n,u)?e=null:i!==null&&Rc(n,i)&&(l.flags|=32),l.memoizedState!==null&&(n=To(t,l,tv,null,null,a),pn._currentValue=n),su(t,l),xt(t,l,e,a),l.child;case 6:return t===null&&G&&((t=a=lt)&&(a=Yv(a,l.pendingProps,al),a!==null?(l.stateNode=a,Et=l,lt=null,t=!0):t=!1),t||ca(l)),null;case 13:return Lr(t,l,a);case 4:return yu(l,l.stateNode.containerInfo),e=l.pendingProps,t===null?l.child=za(l,null,e,a):xt(t,l,e,a),l.child;case 11:return xs(t,l,l.type,l.pendingProps,a);case 7:return xt(t,l,l.pendingProps,a),l.child;case 8:return xt(t,l,l.pendingProps.children,a),l.child;case 12:return xt(t,l,l.pendingProps.children,a),l.child;case 10:return e=l.pendingProps,Ll(l,l.type,e.value),xt(t,l,e.children,a),l.child;case 9:return n=l.type._context,e=l.pendingProps.children,Na(l),n=At(n),e=e(n),l.flags|=1,xt(t,l,e,a),l.child;case 14:return Ss(t,l,l.type,l.pendingProps,a);case 15:return Xr(t,l,l.type,l.pendingProps,a);case 19:return Qr(t,l,a);case 31:return ov(t,l,a);case 22:return jr(t,l,a,l.pendingProps);case 24:return Na(l),e=At(rt),t===null?(n=So(),n===null&&(n=R,u=xo(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=a),n=u),l.memoizedState={parent:e,cache:n},Ao(l),Ll(l,rt,n)):((t.lanes&a)!==0&&(Oc(t,l),Fe(l,null,null,a),Re()),n=t.memoizedState,u=l.memoizedState,n.parent!==e?(n={parent:e,cache:e},l.memoizedState=n,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=n),Ll(l,rt,e)):(e=u.cache,Ll(l,rt,e),e!==n.cache&&Mc(l,[rt],a,!0))),xt(t,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(b(156,l.tag))}function gl(t){t.flags|=4}function Fi(t,l,a,e,n){if((l=(t.mode&32)!==0)&&(l=!1),l){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(v0())t.flags|=8192;else throw Sa=zu,Eo}else t.flags&=-16777217}function Ds(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!w0(l))if(v0())t.flags|=8192;else throw Sa=zu,Eo}function Wn(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?pd():536870912,t.lanes|=l,ve|=l)}function He(t,l){if(!G)switch(t.tailMode){case"hidden":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function tt(t){var l=t.alternate!==null&&t.alternate.child===t.child,a=0,e=0;if(l)for(var n=t.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags&65011712,e|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)a|=n.lanes|n.childLanes,e|=n.subtreeFlags,e|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=e,t.childLanes=a,l}function sv(t,l,a){var e=l.pendingProps;switch(bo(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(l),null;case 1:return tt(l),null;case 3:return a=l.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),Dl(rt),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ga(l)?gl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,ji())),tt(l),null;case 26:var n=l.type,u=l.memoizedState;return t===null?(gl(l),u!==null?(tt(l),Ds(l,u)):(tt(l),Fi(l,n,null,e,a))):u?u!==t.memoizedState?(gl(l),tt(l),Ds(l,u)):(tt(l),l.flags&=-16777217):(t=t.memoizedProps,t!==e&&gl(l),tt(l),Fi(l,n,t,e,a)),null;case 27:if(gu(l),a=$l.current,n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&gl(l);else{if(!e){if(l.stateNode===null)throw Error(b(166));return tt(l),null}t=ml.current,Ga(l)?es(l,t):(t=q0(n,e,a),l.stateNode=t,gl(l))}return tt(l),null;case 5:if(gu(l),n=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&gl(l);else{if(!e){if(l.stateNode===null)throw Error(b(166));return tt(l),null}if(u=ml.current,Ga(l))es(l,u);else{var i=Gu($l.current);switch(u){case 1:u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":u=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":u=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":u=i.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof e.is=="string"?i.createElement("select",{is:e.is}):i.createElement("select"),e.multiple?u.multiple=!0:e.size&&(u.size=e.size);break;default:u=typeof e.is=="string"?i.createElement(n,{is:e.is}):i.createElement(n)}}u[St]=l,u[Ht]=e;t:for(i=l.child;i!==null;){if(i.tag===5||i.tag===6)u.appendChild(i.stateNode);else if(i.tag!==4&&i.tag!==27&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===l)break t;for(;i.sibling===null;){if(i.return===null||i.return===l)break t;i=i.return}i.sibling.return=i.return,i=i.sibling}l.stateNode=u;t:switch(Nt(u,n,e),n){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&gl(l)}}return tt(l),Fi(l,l.type,t===null?null:t.memoizedProps,l.pendingProps,a),null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==e&&gl(l);else{if(typeof e!="string"&&l.stateNode===null)throw Error(b(166));if(t=$l.current,Ga(l)){if(t=l.stateNode,a=l.memoizedProps,e=null,n=Et,n!==null)switch(n.tag){case 27:case 5:e=n.memoizedProps}t[St]=l,t=!!(t.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||_0(t.nodeValue,a)),t||ca(l,!0)}else t=Gu(t).createTextNode(e),t[St]=l,l.stateNode=t}return tt(l),null;case 31:if(a=l.memoizedState,t===null||t.memoizedState!==null){if(e=Ga(l),a!==null){if(t===null){if(!e)throw Error(b(318));if(t=l.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(557));t[St]=l}else Aa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;tt(l),t=!1}else a=ji(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return l.flags&256?(Gt(l),l):(Gt(l),null);if((l.flags&128)!==0)throw Error(b(558))}return tt(l),null;case 13:if(e=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Ga(l),e!==null&&e.dehydrated!==null){if(t===null){if(!n)throw Error(b(318));if(n=l.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(b(317));n[St]=l}else Aa(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;tt(l),n=!1}else n=ji(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return l.flags&256?(Gt(l),l):(Gt(l),null)}return Gt(l),(l.flags&128)!==0?(l.lanes=a,l):(a=e!==null,t=t!==null&&t.memoizedState!==null,a&&(e=l.child,n=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(n=e.alternate.memoizedState.cachePool.pool),u=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(u=e.memoizedState.cachePool.pool),u!==n&&(e.flags|=2048)),a!==t&&a&&(l.child.flags|=8192),Wn(l,l.updateQueue),tt(l),null);case 4:return oe(),t===null&&Ko(l.stateNode.containerInfo),tt(l),null;case 10:return Dl(l.type),tt(l),null;case 19:if(bt(ct),e=l.memoizedState,e===null)return tt(l),null;if(n=(l.flags&128)!==0,u=e.rendering,u===null)if(n)He(e,!1);else{if(it!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(u=Mu(t),u!==null){for(l.flags|=128,He(e,!1),t=u.updateQueue,l.updateQueue=t,Wn(l,t),l.subtreeFlags=0,t=a,a=l.child;a!==null;)Vd(a,t),a=a.sibling;return I(ct,ct.current&1|2),G&&El(l,e.treeForkCount),l.child}t=t.sibling}e.tail!==null&&Lt()>Uu&&(l.flags|=128,n=!0,He(e,!1),l.lanes=4194304)}else{if(!n)if(t=Mu(u),t!==null){if(l.flags|=128,n=!0,t=t.updateQueue,l.updateQueue=t,Wn(l,t),He(e,!0),e.tail===null&&e.tailMode==="hidden"&&!u.alternate&&!G)return tt(l),null}else 2*Lt()-e.renderingStartTime>Uu&&a!==536870912&&(l.flags|=128,n=!0,He(e,!1),l.lanes=4194304);e.isBackwards?(u.sibling=l.child,l.child=u):(t=e.last,t!==null?t.sibling=u:l.child=u,e.last=u)}return e.tail!==null?(t=e.tail,e.rendering=t,e.tail=t.sibling,e.renderingStartTime=Lt(),t.sibling=null,a=ct.current,I(ct,n?a&1|2:a&1),G&&El(l,e.treeForkCount),t):(tt(l),null);case 22:case 23:return Gt(l),No(),e=l.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(l.flags|=8192):e&&(l.flags|=8192),e?(a&536870912)!==0&&(l.flags&128)===0&&(tt(l),l.subtreeFlags&6&&(l.flags|=8192)):tt(l),a=l.updateQueue,a!==null&&Wn(l,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(l.flags|=2048),t!==null&&bt(xa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Dl(rt),tt(l),null;case 25:return null;case 30:return null}throw Error(b(156,l.tag))}function dv(t,l){switch(bo(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return Dl(rt),oe(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return gu(l),null;case 31:if(l.memoizedState!==null){if(Gt(l),l.alternate===null)throw Error(b(340));Aa()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 13:if(Gt(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(b(340));Aa()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return bt(ct),null;case 4:return oe(),null;case 10:return Dl(l.type),null;case 22:case 23:return Gt(l),No(),t!==null&&bt(xa),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return Dl(rt),null;case 25:return null;default:return null}}function Vr(t,l){switch(bo(l),l.tag){case 3:Dl(rt),oe();break;case 26:case 27:case 5:gu(l);break;case 4:oe();break;case 31:l.memoizedState!==null&&Gt(l);break;case 13:Gt(l);break;case 19:bt(ct);break;case 10:Dl(l.type);break;case 22:case 23:Gt(l),No(),t!==null&&bt(xa);break;case 24:Dl(rt)}}function Tn(t,l){try{var a=l.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var n=e.next;a=n;do{if((a.tag&t)===t){e=void 0;var u=a.create,i=a.inst;e=u(),i.destroy=e}a=a.next}while(a!==n)}}catch(o){K(l,l.return,o)}}function oa(t,l,a){try{var e=l.updateQueue,n=e!==null?e.lastEffect:null;if(n!==null){var u=n.next;e=u;do{if((e.tag&t)===t){var i=e.inst,o=i.destroy;if(o!==void 0){i.destroy=void 0,n=l;var f=a,r=o;try{r()}catch(h){K(n,f,h)}}}e=e.next}while(e!==u)}}catch(h){K(l,l.return,h)}}function Kr(t){var l=t.updateQueue;if(l!==null){var a=t.stateNode;try{lr(l,a)}catch(e){K(t,t.return,e)}}}function Jr(t,l,a){a.props=Ma(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(e){K(t,l,e)}}function Ie(t,l){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof a=="function"?t.refCleanup=a(e):a.current=e}}catch(n){K(t,l,n)}}function rl(t,l){var a=t.ref,e=t.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(n){K(t,l,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){K(t,l,n)}else a.current=null}function Wr(t){var l=t.type,a=t.memoizedProps,e=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break t;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(n){K(t,t.return,n)}}function $i(t,l,a){try{var e=t.stateNode;Bv(e,t.type,a,l),e[Ht]=l}catch(n){K(t,t.return,n)}}function Rr(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&da(t.type)||t.tag===4}function Ii(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rr(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&da(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xc(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(t),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=zl));else if(e!==4&&(e===27&&da(t.type)&&(a=t.stateNode,l=null),t=t.child,t!==null))for(Xc(t,l,a),t=t.sibling;t!==null;)Xc(t,l,a),t=t.sibling}function Cu(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?a.insertBefore(t,l):a.appendChild(t);else if(e!==4&&(e===27&&da(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Cu(t,l,a),t=t.sibling;t!==null;)Cu(t,l,a),t=t.sibling}function Fr(t){var l=t.stateNode,a=t.memoizedProps;try{for(var e=t.type,n=l.attributes;n.length;)l.removeAttributeNode(n[0]);Nt(l,e,a),l[St]=t,l[Ht]=a}catch(u){K(t,t.return,u)}}var Al=!1,dt=!1,Pi=!1,Os=typeof WeakSet=="function"?WeakSet:Set,yt=null;function rv(t,l){if(t=t.containerInfo,Jc=Qu,t=wd(t),vo(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var n=e.anchorOffset,u=e.focusNode;e=e.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break t}var i=0,o=-1,f=-1,r=0,h=0,y=t,m=null;l:for(;;){for(var v;y!==a||n!==0&&y.nodeType!==3||(o=i+n),y!==u||e!==0&&y.nodeType!==3||(f=i+e),y.nodeType===3&&(i+=y.nodeValue.length),(v=y.firstChild)!==null;)m=y,y=v;for(;;){if(y===t)break l;if(m===a&&++r===n&&(o=i),m===u&&++h===e&&(f=i),(v=y.nextSibling)!==null)break;y=m,m=y.parentNode}y=v}a=o===-1||f===-1?null:{start:o,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Wc={focusedElem:t,selectionRange:a},Qu=!1,yt=l;yt!==null;)if(l=yt,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,yt=t;else for(;yt!==null;){switch(l=yt,u=l.alternate,t=l.flags,l.tag){case 0:if((t&4)!==0&&(t=l.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)n=t[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&u!==null){t=void 0,a=l,n=u.memoizedProps,u=u.memoizedState,e=a.stateNode;try{var S=Ma(a.type,n);t=e.getSnapshotBeforeUpdate(S,u),e.__reactInternalSnapshotBeforeUpdate=t}catch(x){K(a,a.return,x)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,a=t.nodeType,a===9)Fc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Fc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(b(163))}if(t=l.sibling,t!==null){t.return=l.return,yt=t;break}yt=l.return}}function $r(t,l,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:xl(t,a),e&4&&Tn(5,a);break;case 1:if(xl(t,a),e&4)if(t=a.stateNode,l===null)try{t.componentDidMount()}catch(i){K(a,a.return,i)}else{var n=Ma(a.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(n,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){K(a,a.return,i)}}e&64&&Kr(a),e&512&&Ie(a,a.return);break;case 3:if(xl(t,a),e&64&&(t=a.updateQueue,t!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{lr(t,l)}catch(i){K(a,a.return,i)}}break;case 27:l===null&&e&4&&Fr(a);case 26:case 5:xl(t,a),l===null&&e&4&&Wr(a),e&512&&Ie(a,a.return);break;case 12:xl(t,a);break;case 31:xl(t,a),e&4&&t0(t,a);break;case 13:xl(t,a),e&4&&l0(t,a),e&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Sv.bind(null,a),Gv(t,a))));break;case 22:if(e=a.memoizedState!==null||Al,!e){l=l!==null&&l.memoizedState!==null||dt,n=Al;var u=dt;Al=e,(dt=l)&&!u?Sl(t,a,(a.subtreeFlags&8772)!==0):xl(t,a),Al=n,dt=u}break;case 30:break;default:xl(t,a)}}function Ir(t){var l=t.alternate;l!==null&&(t.alternate=null,Ir(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&co(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nt=null,Ct=!1;function bl(t,l,a){for(a=a.child;a!==null;)Pr(t,l,a),a=a.sibling}function Pr(t,l,a){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(bn,a)}catch{}switch(a.tag){case 26:dt||rl(a,l),bl(t,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dt||rl(a,l);var e=nt,n=Ct;da(a.type)&&(nt=a.stateNode,Ct=!1),bl(t,l,a),an(a.stateNode),nt=e,Ct=n;break;case 5:dt||rl(a,l);case 6:if(e=nt,n=Ct,nt=null,bl(t,l,a),nt=e,Ct=n,nt!==null)if(Ct)try{(nt.nodeType===9?nt.body:nt.nodeName==="HTML"?nt.ownerDocument.body:nt).removeChild(a.stateNode)}catch(u){K(a,l,u)}else try{nt.removeChild(a.stateNode)}catch(u){K(a,l,u)}break;case 18:nt!==null&&(Ct?(t=nt,Zs(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ge(t)):Zs(nt,a.stateNode));break;case 4:e=nt,n=Ct,nt=a.stateNode.containerInfo,Ct=!0,bl(t,l,a),nt=e,Ct=n;break;case 0:case 11:case 14:case 15:oa(2,a,l),dt||oa(4,a,l),bl(t,l,a);break;case 1:dt||(rl(a,l),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Jr(a,l,e)),bl(t,l,a);break;case 21:bl(t,l,a);break;case 22:dt=(e=dt)||a.memoizedState!==null,bl(t,l,a),dt=e;break;default:bl(t,l,a)}}function t0(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ge(t)}catch(a){K(l,l.return,a)}}}function l0(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ge(t)}catch(a){K(l,l.return,a)}}function mv(t){switch(t.tag){case 31:case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new Os),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new Os),l;default:throw Error(b(435,t.tag))}}function Rn(t,l){var a=mv(t);l.forEach(function(e){if(!a.has(e)){a.add(e);var n=Ev.bind(null,t,e);e.then(n,n)}})}function _t(t,l){var a=l.deletions;if(a!==null)for(var e=0;e<a.length;e++){var n=a[e],u=t,i=l,o=i;t:for(;o!==null;){switch(o.tag){case 27:if(da(o.type)){nt=o.stateNode,Ct=!1;break t}break;case 5:nt=o.stateNode,Ct=!1;break t;case 3:case 4:nt=o.stateNode.containerInfo,Ct=!0;break t}o=o.return}if(nt===null)throw Error(b(160));Pr(u,i,n),nt=null,Ct=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)a0(l,t),l=l.sibling}var cl=null;function a0(t,l){var a=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:_t(l,t),Bt(t),e&4&&(oa(3,t,t.return),Tn(3,t),oa(5,t,t.return));break;case 1:_t(l,t),Bt(t),e&512&&(dt||a===null||rl(a,a.return)),e&64&&Al&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var n=cl;if(_t(l,t),Bt(t),e&512&&(dt||a===null||rl(a,a.return)),e&4){var u=a!==null?a.memoizedState:null;if(e=t.memoizedState,a===null)if(e===null)if(t.stateNode===null){t:{e=t.type,a=t.memoizedProps,n=n.ownerDocument||n;l:switch(e){case"title":u=n.getElementsByTagName("title")[0],(!u||u[En]||u[St]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(e),n.head.insertBefore(u,n.querySelector("head > title"))),Nt(u,e,a),u[St]=t,gt(u),e=u;break t;case"link":var i=$s("link","href",n).get(e+(a.href||""));if(i){for(var o=0;o<i.length;o++)if(u=i[o],u.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&u.getAttribute("rel")===(a.rel==null?null:a.rel)&&u.getAttribute("title")===(a.title==null?null:a.title)&&u.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(o,1);break l}}u=n.createElement(e),Nt(u,e,a),n.head.appendChild(u);break;case"meta":if(i=$s("meta","content",n).get(e+(a.content||""))){for(o=0;o<i.length;o++)if(u=i[o],u.getAttribute("content")===(a.content==null?null:""+a.content)&&u.getAttribute("name")===(a.name==null?null:a.name)&&u.getAttribute("property")===(a.property==null?null:a.property)&&u.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&u.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(o,1);break l}}u=n.createElement(e),Nt(u,e,a),n.head.appendChild(u);break;default:throw Error(b(468,e))}u[St]=t,gt(u),e=u}t.stateNode=e}else Is(n,t.type,t.stateNode);else t.stateNode=Fs(n,e,t.memoizedProps);else u!==e?(u===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):u.count--,e===null?Is(n,t.type,t.stateNode):Fs(n,e,t.memoizedProps)):e===null&&t.stateNode!==null&&$i(t,t.memoizedProps,a.memoizedProps)}break;case 27:_t(l,t),Bt(t),e&512&&(dt||a===null||rl(a,a.return)),a!==null&&e&4&&$i(t,t.memoizedProps,a.memoizedProps);break;case 5:if(_t(l,t),Bt(t),e&512&&(dt||a===null||rl(a,a.return)),t.flags&32){n=t.stateNode;try{se(n,"")}catch(S){K(t,t.return,S)}}e&4&&t.stateNode!=null&&(n=t.memoizedProps,$i(t,n,a!==null?a.memoizedProps:n)),e&1024&&(Pi=!0);break;case 6:if(_t(l,t),Bt(t),e&4){if(t.stateNode===null)throw Error(b(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e}catch(S){K(t,t.return,S)}}break;case 3:if(mu=null,n=cl,cl=Xu(l.containerInfo),_t(l,t),cl=n,Bt(t),e&4&&a!==null&&a.memoizedState.isDehydrated)try{ge(l.containerInfo)}catch(S){K(t,t.return,S)}Pi&&(Pi=!1,e0(t));break;case 4:e=cl,cl=Xu(t.stateNode.containerInfo),_t(l,t),Bt(t),cl=e;break;case 12:_t(l,t),Bt(t);break;case 31:_t(l,t),Bt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Rn(t,e)));break;case 13:_t(l,t),Bt(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ai=Lt()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Rn(t,e)));break;case 22:n=t.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,r=Al,h=dt;if(Al=r||n,dt=h||f,_t(l,t),dt=h,Al=r,Bt(t),e&8192)t:for(l=t.stateNode,l._visibility=n?l._visibility&-2:l._visibility|1,n&&(a===null||f||Al||dt||ya(t)),a=null,l=t;;){if(l.tag===5||l.tag===26){if(a===null){f=a=l;try{if(u=f.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{o=f.stateNode;var y=f.memoizedProps.style,m=y!=null&&y.hasOwnProperty("display")?y.display:null;o.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(S){K(f,f.return,S)}}}else if(l.tag===6){if(a===null){f=l;try{f.stateNode.nodeValue=n?"":f.memoizedProps}catch(S){K(f,f.return,S)}}}else if(l.tag===18){if(a===null){f=l;try{var v=f.stateNode;n?Vs(v,!0):Vs(f.stateNode,!1)}catch(S){K(f,f.return,S)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}e&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Rn(t,a))));break;case 19:_t(l,t),Bt(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Rn(t,e)));break;case 30:break;case 21:break;default:_t(l,t),Bt(t)}}function Bt(t){var l=t.flags;if(l&2){try{for(var a,e=t.return;e!==null;){if(Rr(e)){a=e;break}e=e.return}if(a==null)throw Error(b(160));switch(a.tag){case 27:var n=a.stateNode,u=Ii(t);Cu(t,u,n);break;case 5:var i=a.stateNode;a.flags&32&&(se(i,""),a.flags&=-33);var o=Ii(t);Cu(t,o,i);break;case 3:case 4:var f=a.stateNode.containerInfo,r=Ii(t);Xc(t,r,f);break;default:throw Error(b(161))}}catch(h){K(t,t.return,h)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function e0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;e0(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function xl(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)$r(t,l.alternate,l),l=l.sibling}function ya(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:oa(4,l,l.return),ya(l);break;case 1:rl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&Jr(l,l.return,a),ya(l);break;case 27:an(l.stateNode);case 26:case 5:rl(l,l.return),ya(l);break;case 22:l.memoizedState===null&&ya(l);break;case 30:ya(l);break;default:ya(l)}t=t.sibling}}function Sl(t,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var e=l.alternate,n=t,u=l,i=u.flags;switch(u.tag){case 0:case 11:case 15:Sl(n,u,a),Tn(4,u);break;case 1:if(Sl(n,u,a),e=u,n=e.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(r){K(e,e.return,r)}if(e=u,n=e.updateQueue,n!==null){var o=e.stateNode;try{var f=n.shared.hiddenCallbacks;if(f!==null)for(n.shared.hiddenCallbacks=null,n=0;n<f.length;n++)tr(f[n],o)}catch(r){K(e,e.return,r)}}a&&i&64&&Kr(u),Ie(u,u.return);break;case 27:Fr(u);case 26:case 5:Sl(n,u,a),a&&e===null&&i&4&&Wr(u),Ie(u,u.return);break;case 12:Sl(n,u,a);break;case 31:Sl(n,u,a),a&&i&4&&t0(n,u);break;case 13:Sl(n,u,a),a&&i&4&&l0(n,u);break;case 22:u.memoizedState===null&&Sl(n,u,a),Ie(u,u.return);break;case 30:break;default:Sl(n,u,a)}l=l.sibling}}function Xo(t,l){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Nn(a))}function jo(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Nn(t))}function il(t,l,a,e){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)n0(t,l,a,e),l=l.sibling}function n0(t,l,a,e){var n=l.flags;switch(l.tag){case 0:case 11:case 15:il(t,l,a,e),n&2048&&Tn(9,l);break;case 1:il(t,l,a,e);break;case 3:il(t,l,a,e),n&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&Nn(t)));break;case 12:if(n&2048){il(t,l,a,e),t=l.stateNode;try{var u=l.memoizedProps,i=u.id,o=u.onPostCommit;typeof o=="function"&&o(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){K(l,l.return,f)}}else il(t,l,a,e);break;case 31:il(t,l,a,e);break;case 13:il(t,l,a,e);break;case 23:break;case 22:u=l.stateNode,i=l.alternate,l.memoizedState!==null?u._visibility&2?il(t,l,a,e):Pe(t,l):u._visibility&2?il(t,l,a,e):(u._visibility|=2,ja(t,l,a,e,(l.subtreeFlags&10256)!==0||!1)),n&2048&&Xo(i,l);break;case 24:il(t,l,a,e),n&2048&&jo(l.alternate,l);break;default:il(t,l,a,e)}}function ja(t,l,a,e,n){for(n=n&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var u=t,i=l,o=a,f=e,r=i.flags;switch(i.tag){case 0:case 11:case 15:ja(u,i,o,f,n),Tn(8,i);break;case 23:break;case 22:var h=i.stateNode;i.memoizedState!==null?h._visibility&2?ja(u,i,o,f,n):Pe(u,i):(h._visibility|=2,ja(u,i,o,f,n)),n&&r&2048&&Xo(i.alternate,i);break;case 24:ja(u,i,o,f,n),n&&r&2048&&jo(i.alternate,i);break;default:ja(u,i,o,f,n)}l=l.sibling}}function Pe(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=t,e=l,n=e.flags;switch(e.tag){case 22:Pe(a,e),n&2048&&Xo(e.alternate,e);break;case 24:Pe(a,e),n&2048&&jo(e.alternate,e);break;default:Pe(a,e)}l=l.sibling}}var Qe=8192;function Xa(t,l,a){if(t.subtreeFlags&Qe)for(t=t.child;t!==null;)u0(t,l,a),t=t.sibling}function u0(t,l,a){switch(t.tag){case 26:Xa(t,l,a),t.flags&Qe&&t.memoizedState!==null&&$v(a,cl,t.memoizedState,t.memoizedProps);break;case 5:Xa(t,l,a);break;case 3:case 4:var e=cl;cl=Xu(t.stateNode.containerInfo),Xa(t,l,a),cl=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Qe,Qe=16777216,Xa(t,l,a),Qe=e):Xa(t,l,a));break;default:Xa(t,l,a)}}function i0(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function ke(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];yt=e,o0(e,t)}i0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)c0(t),t=t.sibling}function c0(t){switch(t.tag){case 0:case 11:case 15:ke(t),t.flags&2048&&oa(9,t,t.return);break;case 3:ke(t);break;case 12:ke(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,du(t)):ke(t);break;default:ke(t)}}function du(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];yt=e,o0(e,t)}i0(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:oa(8,l,l.return),du(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,du(l));break;default:du(l)}t=t.sibling}}function o0(t,l){for(;yt!==null;){var a=yt;switch(a.tag){case 0:case 11:case 15:oa(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Nn(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,yt=e;else t:for(a=t;yt!==null;){e=yt;var n=e.sibling,u=e.return;if(Ir(e),e===a){yt=null;break t}if(n!==null){n.return=u,yt=n;break t}yt=u}}}var vv={getCacheForType:function(t){var l=At(rt),a=l.data.get(t);return a===void 0&&(a=t(),l.data.set(t,a)),a},cacheSignal:function(){return At(rt).controller.signal}},pv=typeof WeakMap=="function"?WeakMap:Map,j=0,R=null,w=null,Y=0,V=0,Yt=null,Wl=!1,Ae=!1,Lo=!1,ql=0,it=0,fa=0,Ea=0,Qo=0,jt=0,ve=0,tn=null,Ut=null,jc=!1,ai=0,f0=0,Uu=1/0,qu=null,la=null,pt=0,aa=null,pe=null,Ol=0,Lc=0,Qc=null,s0=null,ln=0,Zc=null;function Vt(){return(j&2)!==0&&Y!==0?Y&-Y:B.T!==null?Vo():bd()}function d0(){if(jt===0)if((Y&536870912)===0||G){var t=Gn;Gn<<=1,(Gn&3932160)===0&&(Gn=262144),jt=t}else jt=536870912;return t=Jt.current,t!==null&&(t.flags|=32),jt}function qt(t,l,a){(t===R&&(V===2||V===9)||t.cancelPendingCommit!==null)&&(he(t,0),Rl(t,Y,jt,!1)),Sn(t,a),((j&2)===0||t!==R)&&(t===R&&((j&2)===0&&(Ea|=a),it===4&&Rl(t,Y,jt,!1)),pl(t))}function r0(t,l,a){if((j&6)!==0)throw Error(b(327));var e=!a&&(l&127)===0&&(l&t.expiredLanes)===0||xn(t,l),n=e?gv(t,l):tc(t,l,!0),u=e;do{if(n===0){Ae&&!e&&Rl(t,l,0,!1);break}else{if(a=t.current.alternate,u&&!hv(a)){n=tc(t,l,!1),u=!1;continue}if(n===2){if(u=l,t.errorRecoveryDisabledLanes&u)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var o=t;n=tn;var f=o.current.memoizedState.isDehydrated;if(f&&(he(o,i).flags|=256),i=tc(o,i,!1),i!==2){if(Lo&&!f){o.errorRecoveryDisabledLanes|=u,Ea|=u,n=4;break t}u=Ut,Ut=n,u!==null&&(Ut===null?Ut=u:Ut.push.apply(Ut,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){he(t,0),Rl(t,l,0,!0);break}t:{switch(e=t,u=n,u){case 0:case 1:throw Error(b(345));case 4:if((l&4194048)!==l)break;case 6:Rl(e,l,jt,!Wl);break t;case 2:Ut=null;break;case 3:case 5:break;default:throw Error(b(329))}if((l&62914560)===l&&(n=ai+300-Lt(),10<n)){if(Rl(e,l,jt,!Wl),Vu(e,0,!0)!==0)break t;Ol=l,e.timeoutHandle=C0(_s.bind(null,e,a,Ut,qu,jc,l,jt,Ea,ve,Wl,u,"Throttled",-0,0),n);break t}_s(e,a,Ut,qu,jc,l,jt,Ea,ve,Wl,u,null,-0,0)}}break}while(!0);pl(t)}function _s(t,l,a,e,n,u,i,o,f,r,h,y,m,v){if(t.timeoutHandle=-1,y=l.subtreeFlags,y&8192||(y&16785408)===16785408){y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zl},u0(l,u,y);var S=(u&62914560)===u?ai-Lt():(u&4194048)===u?f0-Lt():0;if(S=Iv(y,S),S!==null){Ol=u,t.cancelPendingCommit=S(Cs.bind(null,t,l,u,a,e,n,i,o,f,h,y,null,m,v)),Rl(t,u,i,!r);return}}Cs(t,l,u,a,e,n,i,o,f)}function hv(t){for(var l=t;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var n=a[e],u=n.getSnapshot;n=n.value;try{if(!Kt(u(),n))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function Rl(t,l,a,e){l&=~Qo,l&=~Ea,t.suspendedLanes|=l,t.pingedLanes&=~l,e&&(t.warmLanes|=l),e=t.expirationTimes;for(var n=l;0<n;){var u=31-Zt(n),i=1<<u;e[u]=-1,n&=~i}a!==0&&hd(t,a,l)}function ei(){return(j&6)===0?(Mn(0,!1),!1):!0}function Zo(){if(w!==null){if(V===0)var t=w.return;else t=w,Tl=Ca=null,Oo(t),ue=null,sn=0,t=w;for(;t!==null;)Vr(t.alternate,t),t=t.return;w=null}}function he(t,l){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,qv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Ol=0,Zo(),R=t,w=a=Ml(t.current,null),Y=l,V=0,Yt=null,Wl=!1,Ae=xn(t,l),Lo=!1,ve=jt=Qo=Ea=fa=it=0,Ut=tn=null,jc=!1,(l&8)!==0&&(l|=l&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=l;0<e;){var n=31-Zt(e),u=1<<n;l|=t[n],e&=~u}return ql=l,Ru(),a}function m0(t,l){q=null,B.H=rn,l===Ee||l===$u?(l=os(),V=3):l===Eo?(l=os(),V=4):V=l===Yo?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Yt=l,w===null&&(it=1,_u(t,ll(l,t.current)))}function v0(){var t=Jt.current;return t===null?!0:(Y&4194048)===Y?el===null:(Y&62914560)===Y||(Y&536870912)!==0?t===el:!1}function p0(){var t=B.H;return B.H=rn,t===null?rn:t}function h0(){var t=B.A;return B.A=vv,t}function Hu(){it=4,Wl||(Y&4194048)!==Y&&Jt.current!==null||(Ae=!0),(fa&134217727)===0&&(Ea&134217727)===0||R===null||Rl(R,Y,jt,!1)}function tc(t,l,a){var e=j;j|=2;var n=p0(),u=h0();(R!==t||Y!==l)&&(qu=null,he(t,l)),l=!1;var i=it;t:do try{if(V!==0&&w!==null){var o=w,f=Yt;switch(V){case 8:Zo(),i=6;break t;case 3:case 2:case 9:case 6:Jt.current===null&&(l=!0);var r=V;if(V=0,Yt=null,te(t,o,f,r),a&&Ae){i=0;break t}break;default:r=V,V=0,Yt=null,te(t,o,f,r)}}yv(),i=it;break}catch(h){m0(t,h)}while(!0);return l&&t.shellSuspendCounter++,Tl=Ca=null,j=e,B.H=n,B.A=u,w===null&&(R=null,Y=0,Ru()),i}function yv(){for(;w!==null;)y0(w)}function gv(t,l){var a=j;j|=2;var e=p0(),n=h0();R!==t||Y!==l?(qu=null,Uu=Lt()+500,he(t,l)):Ae=xn(t,l);t:do try{if(V!==0&&w!==null){l=w;var u=Yt;l:switch(V){case 1:V=0,Yt=null,te(t,l,u,1);break;case 2:case 9:if(cs(u)){V=0,Yt=null,Bs(l);break}l=function(){V!==2&&V!==9||R!==t||(V=7),pl(t)},u.then(l,l);break t;case 3:V=7;break t;case 4:V=5;break t;case 7:cs(u)?(V=0,Yt=null,Bs(l)):(V=0,Yt=null,te(t,l,u,7));break;case 5:var i=null;switch(w.tag){case 26:i=w.memoizedState;case 5:case 27:var o=w;if(i?w0(i):o.stateNode.complete){V=0,Yt=null;var f=o.sibling;if(f!==null)w=f;else{var r=o.return;r!==null?(w=r,ni(r)):w=null}break l}}V=0,Yt=null,te(t,l,u,5);break;case 6:V=0,Yt=null,te(t,l,u,6);break;case 8:Zo(),it=6;break t;default:throw Error(b(462))}}bv();break}catch(h){m0(t,h)}while(!0);return Tl=Ca=null,B.H=e,B.A=n,j=a,w!==null?0:(R=null,Y=0,Ru(),it)}function bv(){for(;w!==null&&!Lm();)y0(w)}function y0(t){var l=Zr(t.alternate,t,ql);t.memoizedProps=t.pendingProps,l===null?ni(t):w=l}function Bs(t){var l=t,a=l.alternate;switch(l.tag){case 15:case 0:l=Ns(a,l,l.pendingProps,l.type,void 0,Y);break;case 11:l=Ns(a,l,l.pendingProps,l.type.render,l.ref,Y);break;case 5:Oo(l);default:Vr(a,l),l=w=Vd(l,ql),l=Zr(a,l,ql)}t.memoizedProps=t.pendingProps,l===null?ni(t):w=l}function te(t,l,a,e){Tl=Ca=null,Oo(l),ue=null,sn=0;var n=l.return;try{if(cv(t,n,l,a,Y)){it=1,_u(t,ll(a,t.current)),w=null;return}}catch(u){if(n!==null)throw w=n,u;it=1,_u(t,ll(a,t.current)),w=null;return}l.flags&32768?(G||e===1?t=!0:Ae||(Y&536870912)!==0?t=!1:(Wl=t=!0,(e===2||e===9||e===3||e===6)&&(e=Jt.current,e!==null&&e.tag===13&&(e.flags|=16384))),g0(l,t)):ni(l)}function ni(t){var l=t;do{if((l.flags&32768)!==0){g0(l,Wl);return}t=l.return;var a=sv(l.alternate,l,ql);if(a!==null){w=a;return}if(l=l.sibling,l!==null){w=l;return}w=l=t}while(l!==null);it===0&&(it=5)}function g0(t,l){do{var a=dv(t.alternate,t);if(a!==null){a.flags&=32767,w=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(t=t.sibling,t!==null)){w=t;return}w=t=a}while(t!==null);it=6,w=null}function Cs(t,l,a,e,n,u,i,o,f){t.cancelPendingCommit=null;do ui();while(pt!==0);if((j&6)!==0)throw Error(b(327));if(l!==null){if(l===t.current)throw Error(b(177));if(u=l.lanes|l.childLanes,u|=po,Im(t,a,u,i,o,f),t===R&&(w=R=null,Y=0),pe=l,aa=t,Ol=a,Lc=u,Qc=n,s0=e,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Av(bu,function(){return A0(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||e){e=B.T,B.T=null,n=L.p,L.p=2,i=j,j|=4;try{rv(t,l,a)}finally{j=i,L.p=n,B.T=e}}pt=1,b0(),x0(),S0()}}function b0(){if(pt===1){pt=0;var t=aa,l=pe,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var e=L.p;L.p=2;var n=j;j|=4;try{a0(l,t);var u=Wc,i=wd(t.containerInfo),o=u.focusedElem,f=u.selectionRange;if(i!==o&&o&&o.ownerDocument&&kd(o.ownerDocument.documentElement,o)){if(f!==null&&vo(o)){var r=f.start,h=f.end;if(h===void 0&&(h=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(h,o.value.length);else{var y=o.ownerDocument||document,m=y&&y.defaultView||window;if(m.getSelection){var v=m.getSelection(),S=o.textContent.length,x=Math.min(f.start,S),z=f.end===void 0?x:Math.min(f.end,S);!v.extend&&x>z&&(i=z,z=x,x=i);var d=ts(o,x),s=ts(o,z);if(d&&s&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)){var p=y.createRange();p.setStart(d.node,d.offset),v.removeAllRanges(),x>z?(v.addRange(p),v.extend(s.node,s.offset)):(p.setEnd(s.node,s.offset),v.addRange(p))}}}}for(y=[],v=o;v=v.parentNode;)v.nodeType===1&&y.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<y.length;o++){var g=y[o];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Qu=!!Jc,Wc=Jc=null}finally{j=n,L.p=e,B.T=a}}t.current=l,pt=2}}function x0(){if(pt===2){pt=0;var t=aa,l=pe,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var e=L.p;L.p=2;var n=j;j|=4;try{$r(t,l.alternate,l)}finally{j=n,L.p=e,B.T=a}}pt=3}}function S0(){if(pt===4||pt===3){pt=0,Qm();var t=aa,l=pe,a=Ol,e=s0;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?pt=5:(pt=0,pe=aa=null,E0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(la=null),io(a),l=l.stateNode,Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(bn,l,void 0,(l.current.flags&128)===128)}catch{}if(e!==null){l=B.T,n=L.p,L.p=2,B.T=null;try{for(var u=t.onRecoverableError,i=0;i<e.length;i++){var o=e[i];u(o.value,{componentStack:o.stack})}}finally{B.T=l,L.p=n}}(Ol&3)!==0&&ui(),pl(t),n=t.pendingLanes,(a&261930)!==0&&(n&42)!==0?t===Zc?ln++:(ln=0,Zc=t):ln=0,Mn(0,!1)}}function E0(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,Nn(l)))}function ui(){return b0(),x0(),S0(),A0()}function A0(){if(pt!==5)return!1;var t=aa,l=Lc;Lc=0;var a=io(Ol),e=B.T,n=L.p;try{L.p=32>a?32:a,B.T=null,a=Qc,Qc=null;var u=aa,i=Ol;if(pt=0,pe=aa=null,Ol=0,(j&6)!==0)throw Error(b(331));var o=j;if(j|=4,c0(u.current),n0(u,u.current,i,a),j=o,Mn(0,!1),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(bn,u)}catch{}return!0}finally{L.p=n,B.T=e,E0(t,l)}}function Us(t,l,a){l=ll(a,l),l=wc(t.stateNode,l,2),t=ta(t,l,2),t!==null&&(Sn(t,2),pl(t))}function K(t,l,a){if(t.tag===3)Us(t,t,a);else for(;l!==null;){if(l.tag===3){Us(l,t,a);break}else if(l.tag===1){var e=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(la===null||!la.has(e))){t=ll(a,t),a=Yr(2),e=ta(l,a,2),e!==null&&(Gr(a,e,l,t),Sn(e,2),pl(e));break}}l=l.return}}function lc(t,l,a){var e=t.pingCache;if(e===null){e=t.pingCache=new pv;var n=new Set;e.set(l,n)}else n=e.get(l),n===void 0&&(n=new Set,e.set(l,n));n.has(a)||(Lo=!0,n.add(a),t=xv.bind(null,t,l,a),l.then(t,t))}function xv(t,l,a){var e=t.pingCache;e!==null&&e.delete(l),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,R===t&&(Y&a)===a&&(it===4||it===3&&(Y&62914560)===Y&&300>Lt()-ai?(j&2)===0&&he(t,0):Qo|=a,ve===Y&&(ve=0)),pl(t)}function N0(t,l){l===0&&(l=pd()),t=Ba(t,l),t!==null&&(Sn(t,l),pl(t))}function Sv(t){var l=t.memoizedState,a=0;l!==null&&(a=l.retryLane),N0(t,a)}function Ev(t,l){var a=0;switch(t.tag){case 31:case 13:var e=t.stateNode,n=t.memoizedState;n!==null&&(a=n.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(b(314))}e!==null&&e.delete(l),N0(t,a)}function Av(t,l){return no(t,l)}var ku=null,La=null,Vc=!1,wu=!1,ac=!1,Fl=0;function pl(t){t!==La&&t.next===null&&(La===null?ku=La=t:La=La.next=t),wu=!0,Vc||(Vc=!0,zv())}function Mn(t,l){if(!ac&&wu){ac=!0;do for(var a=!1,e=ku;e!==null;){if(!l)if(t!==0){var n=e.pendingLanes;if(n===0)var u=0;else{var i=e.suspendedLanes,o=e.pingedLanes;u=(1<<31-Zt(42|t)+1)-1,u&=n&~(i&~o),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,qs(e,u))}else u=Y,u=Vu(e,e===R?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(u&3)===0||xn(e,u)||(a=!0,qs(e,u));e=e.next}while(a);ac=!1}}function Nv(){z0()}function z0(){wu=Vc=!1;var t=0;Fl!==0&&Uv()&&(t=Fl);for(var l=Lt(),a=null,e=ku;e!==null;){var n=e.next,u=T0(e,l);u===0?(e.next=null,a===null?ku=n:a.next=n,n===null&&(La=a)):(a=e,(t!==0||(u&3)!==0)&&(wu=!0)),e=n}pt!==0&&pt!==5||Mn(t,!1),Fl!==0&&(Fl=0)}function T0(t,l){for(var a=t.suspendedLanes,e=t.pingedLanes,n=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var i=31-Zt(u),o=1<<i,f=n[i];f===-1?((o&a)===0||(o&e)!==0)&&(n[i]=$m(o,l)):f<=l&&(t.expiredLanes|=o),u&=~o}if(l=R,a=Y,a=Vu(t,t===l?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,a===0||t===l&&(V===2||V===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&Bi(e),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||xn(t,a)){if(l=a&-a,l===t.callbackPriority)return l;switch(e!==null&&Bi(e),io(a)){case 2:case 8:a=md;break;case 32:a=bu;break;case 268435456:a=vd;break;default:a=bu}return e=M0.bind(null,t),a=no(a,e),t.callbackPriority=l,t.callbackNode=a,l}return e!==null&&e!==null&&Bi(e),t.callbackPriority=2,t.callbackNode=null,2}function M0(t,l){if(pt!==0&&pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(ui()&&t.callbackNode!==a)return null;var e=Y;return e=Vu(t,t===R?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(r0(t,e,l),T0(t,Lt()),t.callbackNode!=null&&t.callbackNode===a?M0.bind(null,t):null)}function qs(t,l){if(ui())return null;r0(t,l,!0)}function zv(){Hv(function(){(j&6)!==0?no(rd,Nv):z0()})}function Vo(){if(Fl===0){var t=de;t===0&&(t=Yn,Yn<<=1,(Yn&261888)===0&&(Yn=256)),Fl=t}return Fl}function Hs(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:au(""+t)}function ks(t,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,t.id&&a.setAttribute("form",t.id),l.parentNode.insertBefore(a,l),t=new FormData(t),a.parentNode.removeChild(a),t}function Tv(t,l,a,e,n){if(l==="submit"&&a&&a.stateNode===n){var u=Hs((n[Ht]||null).action),i=e.submitter;i&&(l=(l=i[Ht]||null)?Hs(l.formAction):i.getAttribute("formAction"),l!==null&&(u=l,i=null));var o=new Ku("action","action",null,e,n);t.push({event:o,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Fl!==0){var f=i?ks(n,i):new FormData(n);Hc(a,{pending:!0,data:f,method:n.method,action:u},null,f)}}else typeof u=="function"&&(o.preventDefault(),f=i?ks(n,i):new FormData(n),Hc(a,{pending:!0,data:f,method:n.method,action:u},u,f))},currentTarget:n}]})}}for(Fn=0;Fn<Ac.length;Fn++)$n=Ac[Fn],ws=$n.toLowerCase(),Ys=$n[0].toUpperCase()+$n.slice(1),ol(ws,"on"+Ys);var $n,ws,Ys,Fn;ol(Gd,"onAnimationEnd");ol(Xd,"onAnimationIteration");ol(jd,"onAnimationStart");ol("dblclick","onDoubleClick");ol("focusin","onFocus");ol("focusout","onBlur");ol(Z1,"onTransitionRun");ol(V1,"onTransitionStart");ol(K1,"onTransitionCancel");ol(Ld,"onTransitionEnd");fe("onMouseEnter",["mouseout","mouseover"]);fe("onMouseLeave",["mouseout","mouseover"]);fe("onPointerEnter",["pointerout","pointerover"]);fe("onPointerLeave",["pointerout","pointerover"]);Da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Da("onBeforeInput",["compositionend","keypress","textInput","paste"]);Da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mn));function D0(t,l){l=(l&4)!==0;for(var a=0;a<t.length;a++){var e=t[a],n=e.event;e=e.listeners;t:{var u=void 0;if(l)for(var i=e.length-1;0<=i;i--){var o=e[i],f=o.instance,r=o.currentTarget;if(o=o.listener,f!==u&&n.isPropagationStopped())break t;u=o,n.currentTarget=r;try{u(n)}catch(h){Su(h)}n.currentTarget=null,u=f}else for(i=0;i<e.length;i++){if(o=e[i],f=o.instance,r=o.currentTarget,o=o.listener,f!==u&&n.isPropagationStopped())break t;u=o,n.currentTarget=r;try{u(n)}catch(h){Su(h)}n.currentTarget=null,u=f}}}}function k(t,l){var a=l[pc];a===void 0&&(a=l[pc]=new Set);var e=t+"__bubble";a.has(e)||(O0(l,t,2,!1),a.add(e))}function ec(t,l,a){var e=0;l&&(e|=4),O0(a,t,e,l)}var In="_reactListening"+Math.random().toString(36).slice(2);function Ko(t){if(!t[In]){t[In]=!0,xd.forEach(function(a){a!=="selectionchange"&&(Mv.has(a)||ec(a,!1,t),ec(a,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[In]||(l[In]=!0,ec("selectionchange",!1,l))}}function O0(t,l,a,e){switch(L0(l)){case 2:var n=lp;break;case 8:n=ap;break;default:n=Fo}a=n.bind(null,l,a,t),n=void 0,!xc||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(n=!0),e?n!==void 0?t.addEventListener(l,a,{capture:!0,passive:n}):t.addEventListener(l,a,!0):n!==void 0?t.addEventListener(l,a,{passive:n}):t.addEventListener(l,a,!1)}function nc(t,l,a,e,n){var u=e;if((l&1)===0&&(l&2)===0&&e!==null)t:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var o=e.stateNode.containerInfo;if(o===n)break;if(i===4)for(i=e.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;o!==null;){if(i=Va(o),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){e=u=i;continue t}o=o.parentNode}}e=e.return}Dd(function(){var r=u,h=fo(a),y=[];t:{var m=Qd.get(t);if(m!==void 0){var v=Ku,S=t;switch(t){case"keypress":if(nu(a)===0)break t;case"keydown":case"keyup":v=E1;break;case"focusin":S="focus",v=ki;break;case"focusout":S="blur",v=ki;break;case"beforeblur":case"afterblur":v=ki;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=s1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=z1;break;case Gd:case Xd:case jd:v=m1;break;case Ld:v=M1;break;case"scroll":case"scrollend":v=o1;break;case"wheel":v=O1;break;case"copy":case"cut":case"paste":v=p1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Jf;break;case"toggle":case"beforetoggle":v=B1}var x=(l&4)!==0,z=!x&&(t==="scroll"||t==="scrollend"),d=x?m!==null?m+"Capture":null:m;x=[];for(var s=r,p;s!==null;){var g=s;if(p=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||p===null||d===null||(g=nn(s,d),g!=null&&x.push(vn(s,g,p))),z)break;s=s.return}0<x.length&&(m=new v(m,S,null,a,h),y.push({event:m,listeners:x}))}}if((l&7)===0){t:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&a!==bc&&(S=a.relatedTarget||a.fromElement)&&(Va(S)||S[be]))break t;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(S=a.relatedTarget||a.toElement,v=r,S=S?Va(S):null,S!==null&&(z=gn(S),x=S.tag,S!==z||x!==5&&x!==27&&x!==6)&&(S=null)):(v=null,S=r),v!==S)){if(x=Vf,g="onMouseLeave",d="onMouseEnter",s="mouse",(t==="pointerout"||t==="pointerover")&&(x=Jf,g="onPointerLeave",d="onPointerEnter",s="pointer"),z=v==null?m:je(v),p=S==null?m:je(S),m=new x(g,s+"leave",v,a,h),m.target=z,m.relatedTarget=p,g=null,Va(h)===r&&(x=new x(d,s+"enter",S,a,h),x.target=p,x.relatedTarget=z,g=x),z=g,v&&S)l:{for(x=Dv,d=v,s=S,p=0,g=d;g;g=x(g))p++;g=0;for(var N=s;N;N=x(N))g++;for(;0<p-g;)d=x(d),p--;for(;0<g-p;)s=x(s),g--;for(;p--;){if(d===s||s!==null&&d===s.alternate){x=d;break l}d=x(d),s=x(s)}x=null}else x=null;v!==null&&Gs(y,m,v,x,!1),S!==null&&z!==null&&Gs(y,z,S,x,!0)}}t:{if(m=r?je(r):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var T=$f;else if(Ff(m))if(qd)T=j1;else{T=G1;var A=Y1}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?r&&oo(r.elementType)&&(T=$f):T=X1;if(T&&(T=T(t,r))){Ud(y,T,a,h);break t}A&&A(t,m,r),t==="focusout"&&r&&m.type==="number"&&r.memoizedProps.value!=null&&gc(m,"number",m.value)}switch(A=r?je(r):window,t){case"focusin":(Ff(A)||A.contentEditable==="true")&&(Wa=A,Sc=r,Ke=null);break;case"focusout":Ke=Sc=Wa=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,ls(y,a,h);break;case"selectionchange":if(Q1)break;case"keydown":case"keyup":ls(y,a,h)}var M;if(mo)t:{switch(t){case"compositionstart":var C="onCompositionStart";break t;case"compositionend":C="onCompositionEnd";break t;case"compositionupdate":C="onCompositionUpdate";break t}C=void 0}else Ja?Bd(t,a)&&(C="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(C="onCompositionStart");C&&(_d&&a.locale!=="ko"&&(Ja||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ja&&(M=Od()):(Jl=h,so="value"in Jl?Jl.value:Jl.textContent,Ja=!0)),A=Yu(r,C),0<A.length&&(C=new Kf(C,t,null,a,h),y.push({event:C,listeners:A}),M?C.data=M:(M=Cd(a),M!==null&&(C.data=M)))),(M=U1?q1(t,a):H1(t,a))&&(C=Yu(r,"onBeforeInput"),0<C.length&&(A=new Kf("onBeforeInput","beforeinput",null,a,h),y.push({event:A,listeners:C}),A.data=M)),Tv(y,t,r,a,h)}D0(y,l)})}function vn(t,l,a){return{instance:t,listener:l,currentTarget:a}}function Yu(t,l){for(var a=l+"Capture",e=[];t!==null;){var n=t,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=nn(t,a),n!=null&&e.unshift(vn(t,n,u)),n=nn(t,l),n!=null&&e.push(vn(t,n,u))),t.tag===3)return e;t=t.return}return[]}function Dv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Gs(t,l,a,e,n){for(var u=l._reactName,i=[];a!==null&&a!==e;){var o=a,f=o.alternate,r=o.stateNode;if(o=o.tag,f!==null&&f===e)break;o!==5&&o!==26&&o!==27||r===null||(f=r,n?(r=nn(a,u),r!=null&&i.unshift(vn(a,r,f))):n||(r=nn(a,u),r!=null&&i.push(vn(a,r,f)))),a=a.return}i.length!==0&&t.push({event:l,listeners:i})}var Ov=/\r\n?/g,_v=/\u0000|\uFFFD/g;function Xs(t){return(typeof t=="string"?t:""+t).replace(Ov,`
`).replace(_v,"")}function _0(t,l){return l=Xs(l),Xs(t)===l}function J(t,l,a,e,n,u){switch(a){case"children":typeof e=="string"?l==="body"||l==="textarea"&&e===""||se(t,e):(typeof e=="number"||typeof e=="bigint")&&l!=="body"&&se(t,""+e);break;case"className":jn(t,"class",e);break;case"tabIndex":jn(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":jn(t,a,e);break;case"style":Md(t,e,u);break;case"data":if(l!=="object"){jn(t,"data",e);break}case"src":case"href":if(e===""&&(l!=="a"||a!=="href")){t.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=au(""+e),t.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(l!=="input"&&J(t,l,"name",n.name,n,null),J(t,l,"formEncType",n.formEncType,n,null),J(t,l,"formMethod",n.formMethod,n,null),J(t,l,"formTarget",n.formTarget,n,null)):(J(t,l,"encType",n.encType,n,null),J(t,l,"method",n.method,n,null),J(t,l,"target",n.target,n,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=au(""+e),t.setAttribute(a,e);break;case"onClick":e!=null&&(t.onclick=zl);break;case"onScroll":e!=null&&k("scroll",t);break;case"onScrollEnd":e!=null&&k("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(b(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(b(60));t.innerHTML=a}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}a=au(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""+e):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":e===!0?t.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,e):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(a,e):t.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(a):t.setAttribute(a,e);break;case"popover":k("beforetoggle",t),k("toggle",t),lu(t,"popover",e);break;case"xlinkActuate":yl(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":yl(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":yl(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":yl(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":yl(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":yl(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":yl(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":yl(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":yl(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":lu(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=i1.get(a)||a,lu(t,a,e))}}function Kc(t,l,a,e,n,u){switch(a){case"style":Md(t,e,u);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(b(61));if(a=e.__html,a!=null){if(n.children!=null)throw Error(b(60));t.innerHTML=a}}break;case"children":typeof e=="string"?se(t,e):(typeof e=="number"||typeof e=="bigint")&&se(t,""+e);break;case"onScroll":e!=null&&k("scroll",t);break;case"onScrollEnd":e!=null&&k("scrollend",t);break;case"onClick":e!=null&&(t.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sd.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),l=a.slice(2,n?a.length-7:void 0),u=t[Ht]||null,u=u!=null?u[a]:null,typeof u=="function"&&t.removeEventListener(l,u,n),typeof e=="function")){typeof u!="function"&&u!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(l,e,n);break t}a in t?t[a]=e:e===!0?t.setAttribute(a,""):lu(t,a,e)}}}function Nt(t,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":k("error",t),k("load",t);var e=!1,n=!1,u;for(u in a)if(a.hasOwnProperty(u)){var i=a[u];if(i!=null)switch(u){case"src":e=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(b(137,l));default:J(t,l,u,i,a,null)}}n&&J(t,l,"srcSet",a.srcSet,a,null),e&&J(t,l,"src",a.src,a,null);return;case"input":k("invalid",t);var o=u=i=n=null,f=null,r=null;for(e in a)if(a.hasOwnProperty(e)){var h=a[e];if(h!=null)switch(e){case"name":n=h;break;case"type":i=h;break;case"checked":f=h;break;case"defaultChecked":r=h;break;case"value":u=h;break;case"defaultValue":o=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(b(137,l));break;default:J(t,l,e,h,a,null)}}Nd(t,u,o,f,r,i,n,!1);return;case"select":k("invalid",t),e=i=u=null;for(n in a)if(a.hasOwnProperty(n)&&(o=a[n],o!=null))switch(n){case"value":u=o;break;case"defaultValue":i=o;break;case"multiple":e=o;default:J(t,l,n,o,a,null)}l=u,a=i,t.multiple=!!e,l!=null?ae(t,!!e,l,!1):a!=null&&ae(t,!!e,a,!0);return;case"textarea":k("invalid",t),u=n=e=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":e=o;break;case"defaultValue":n=o;break;case"children":u=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(b(91));break;default:J(t,l,i,o,a,null)}Td(t,e,n,u);return;case"option":for(f in a)a.hasOwnProperty(f)&&(e=a[f],e!=null)&&(f==="selected"?t.selected=e&&typeof e!="function"&&typeof e!="symbol":J(t,l,f,e,a,null));return;case"dialog":k("beforetoggle",t),k("toggle",t),k("cancel",t),k("close",t);break;case"iframe":case"object":k("load",t);break;case"video":case"audio":for(e=0;e<mn.length;e++)k(mn[e],t);break;case"image":k("error",t),k("load",t);break;case"details":k("toggle",t);break;case"embed":case"source":case"link":k("error",t),k("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(r in a)if(a.hasOwnProperty(r)&&(e=a[r],e!=null))switch(r){case"children":case"dangerouslySetInnerHTML":throw Error(b(137,l));default:J(t,l,r,e,a,null)}return;default:if(oo(l)){for(h in a)a.hasOwnProperty(h)&&(e=a[h],e!==void 0&&Kc(t,l,h,e,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(e=a[o],e!=null&&J(t,l,o,e,a,null))}function Bv(t,l,a,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,o=null,f=null,r=null,h=null;for(v in a){var y=a[v];if(a.hasOwnProperty(v)&&y!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":f=y;default:e.hasOwnProperty(v)||J(t,l,v,null,e,y)}}for(var m in e){var v=e[m];if(y=a[m],e.hasOwnProperty(m)&&(v!=null||y!=null))switch(m){case"type":u=v;break;case"name":n=v;break;case"checked":r=v;break;case"defaultChecked":h=v;break;case"value":i=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(b(137,l));break;default:v!==y&&J(t,l,m,v,e,y)}}yc(t,i,o,f,r,h,u,n);return;case"select":v=i=o=m=null;for(u in a)if(f=a[u],a.hasOwnProperty(u)&&f!=null)switch(u){case"value":break;case"multiple":v=f;default:e.hasOwnProperty(u)||J(t,l,u,null,e,f)}for(n in e)if(u=e[n],f=a[n],e.hasOwnProperty(n)&&(u!=null||f!=null))switch(n){case"value":m=u;break;case"defaultValue":o=u;break;case"multiple":i=u;default:u!==f&&J(t,l,n,u,e,f)}l=o,a=i,e=v,m!=null?ae(t,!!a,m,!1):!!e!=!!a&&(l!=null?ae(t,!!a,l,!0):ae(t,!!a,a?[]:"",!1));return;case"textarea":v=m=null;for(o in a)if(n=a[o],a.hasOwnProperty(o)&&n!=null&&!e.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:J(t,l,o,null,e,n)}for(i in e)if(n=e[i],u=a[i],e.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":m=n;break;case"defaultValue":v=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(b(91));break;default:n!==u&&J(t,l,i,n,e,u)}zd(t,m,v);return;case"option":for(var S in a)m=a[S],a.hasOwnProperty(S)&&m!=null&&!e.hasOwnProperty(S)&&(S==="selected"?t.selected=!1:J(t,l,S,null,e,m));for(f in e)m=e[f],v=a[f],e.hasOwnProperty(f)&&m!==v&&(m!=null||v!=null)&&(f==="selected"?t.selected=m&&typeof m!="function"&&typeof m!="symbol":J(t,l,f,m,e,v));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var x in a)m=a[x],a.hasOwnProperty(x)&&m!=null&&!e.hasOwnProperty(x)&&J(t,l,x,null,e,m);for(r in e)if(m=e[r],v=a[r],e.hasOwnProperty(r)&&m!==v&&(m!=null||v!=null))switch(r){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(b(137,l));break;default:J(t,l,r,m,e,v)}return;default:if(oo(l)){for(var z in a)m=a[z],a.hasOwnProperty(z)&&m!==void 0&&!e.hasOwnProperty(z)&&Kc(t,l,z,void 0,e,m);for(h in e)m=e[h],v=a[h],!e.hasOwnProperty(h)||m===v||m===void 0&&v===void 0||Kc(t,l,h,m,e,v);return}}for(var d in a)m=a[d],a.hasOwnProperty(d)&&m!=null&&!e.hasOwnProperty(d)&&J(t,l,d,null,e,m);for(y in e)m=e[y],v=a[y],!e.hasOwnProperty(y)||m===v||m==null&&v==null||J(t,l,y,m,e,v)}function js(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Cv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,l=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var n=a[e],u=n.transferSize,i=n.initiatorType,o=n.duration;if(u&&o&&js(i)){for(i=0,o=n.responseEnd,e+=1;e<a.length;e++){var f=a[e],r=f.startTime;if(r>o)break;var h=f.transferSize,y=f.initiatorType;h&&js(y)&&(f=f.responseEnd,i+=h*(f<o?1:(o-r)/(f-r)))}if(--e,l+=8*(u+i)/(n.duration/1e3),t++,10<t)break}}if(0<t)return l/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Jc=null,Wc=null;function Gu(t){return t.nodeType===9?t:t.ownerDocument}function Ls(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function B0(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Rc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var uc=null;function Uv(){var t=window.event;return t&&t.type==="popstate"?t===uc?!1:(uc=t,!0):(uc=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,Qs=typeof Promise=="function"?Promise:void 0,Hv=typeof queueMicrotask=="function"?queueMicrotask:typeof Qs<"u"?function(t){return Qs.resolve(null).then(t).catch(kv)}:C0;function kv(t){setTimeout(function(){throw t})}function da(t){return t==="head"}function Zs(t,l){var a=l,e=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(e===0){t.removeChild(n),ge(l);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")an(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,an(a);for(var u=a.firstChild;u;){var i=u.nextSibling,o=u.nodeName;u[En]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=i}}else a==="body"&&an(t.ownerDocument.body);a=n}while(a);ge(l)}function Vs(t,l){var a=t;t=0;do{var e=a.nextSibling;if(a.nodeType===1?l?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(l?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=e}while(a)}function Fc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fc(a),co(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function wv(t,l,a,e){for(;t.nodeType===1;){var n=a;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[En])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=nl(t.nextSibling),t===null)break}return null}function Yv(t,l,a){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=nl(t.nextSibling),t===null))return null;return t}function U0(t,l){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=nl(t.nextSibling),t===null))return null;return t}function $c(t){return t.data==="$?"||t.data==="$~"}function Ic(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Gv(t,l){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=l;else if(t.data!=="$?"||a.readyState!=="loading")l();else{var e=function(){l(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function nl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return t}var Pc=null;function Ks(t){t=t.nextSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(l===0)return nl(t.nextSibling);l--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||l++}t=t.nextSibling}return null}function Js(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(l===0)return t;l--}else a!=="/$"&&a!=="/&"||l++}t=t.previousSibling}return null}function q0(t,l,a){switch(l=Gu(a),t){case"html":if(t=l.documentElement,!t)throw Error(b(452));return t;case"head":if(t=l.head,!t)throw Error(b(453));return t;case"body":if(t=l.body,!t)throw Error(b(454));return t;default:throw Error(b(451))}}function an(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);co(t)}var ul=new Map,Ws=new Set;function Xu(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Hl=L.d;L.d={f:Xv,r:jv,D:Lv,C:Qv,L:Zv,m:Vv,X:Jv,S:Kv,M:Wv};function Xv(){var t=Hl.f(),l=ei();return t||l}function jv(t){var l=xe(t);l!==null&&l.tag===5&&l.type==="form"?Mr(l):Hl.r(t)}var Ne=typeof document>"u"?null:document;function H0(t,l,a){var e=Ne;if(e&&typeof l=="string"&&l){var n=tl(l);n='link[rel="'+t+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),Ws.has(n)||(Ws.add(n),t={rel:t,crossOrigin:a,href:l},e.querySelector(n)===null&&(l=e.createElement("link"),Nt(l,"link",t),gt(l),e.head.appendChild(l)))}}function Lv(t){Hl.D(t),H0("dns-prefetch",t,null)}function Qv(t,l){Hl.C(t,l),H0("preconnect",t,l)}function Zv(t,l,a){Hl.L(t,l,a);var e=Ne;if(e&&t&&l){var n='link[rel="preload"][as="'+tl(l)+'"]';l==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+tl(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+tl(a.imageSizes)+'"]')):n+='[href="'+tl(t)+'"]';var u=n;switch(l){case"style":u=ye(t);break;case"script":u=ze(t)}ul.has(u)||(t=at({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:t,as:l},a),ul.set(u,t),e.querySelector(n)!==null||l==="style"&&e.querySelector(Dn(u))||l==="script"&&e.querySelector(On(u))||(l=e.createElement("link"),Nt(l,"link",t),gt(l),e.head.appendChild(l)))}}function Vv(t,l){Hl.m(t,l);var a=Ne;if(a&&t){var e=l&&typeof l.as=="string"?l.as:"script",n='link[rel="modulepreload"][as="'+tl(e)+'"][href="'+tl(t)+'"]',u=n;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=ze(t)}if(!ul.has(u)&&(t=at({rel:"modulepreload",href:t},l),ul.set(u,t),a.querySelector(n)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(On(u)))return}e=a.createElement("link"),Nt(e,"link",t),gt(e),a.head.appendChild(e)}}}function Kv(t,l,a){Hl.S(t,l,a);var e=Ne;if(e&&t){var n=le(e).hoistableStyles,u=ye(t);l=l||"default";var i=n.get(u);if(!i){var o={loading:0,preload:null};if(i=e.querySelector(Dn(u)))o.loading=5;else{t=at({rel:"stylesheet",href:t,"data-precedence":l},a),(a=ul.get(u))&&Jo(t,a);var f=i=e.createElement("link");gt(f),Nt(f,"link",t),f._p=new Promise(function(r,h){f.onload=r,f.onerror=h}),f.addEventListener("load",function(){o.loading|=1}),f.addEventListener("error",function(){o.loading|=2}),o.loading|=4,ru(i,l,e)}i={type:"stylesheet",instance:i,count:1,state:o},n.set(u,i)}}}function Jv(t,l){Hl.X(t,l);var a=Ne;if(a&&t){var e=le(a).hoistableScripts,n=ze(t),u=e.get(n);u||(u=a.querySelector(On(n)),u||(t=at({src:t,async:!0},l),(l=ul.get(n))&&Wo(t,l),u=a.createElement("script"),gt(u),Nt(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function Wv(t,l){Hl.M(t,l);var a=Ne;if(a&&t){var e=le(a).hoistableScripts,n=ze(t),u=e.get(n);u||(u=a.querySelector(On(n)),u||(t=at({src:t,async:!0,type:"module"},l),(l=ul.get(n))&&Wo(t,l),u=a.createElement("script"),gt(u),Nt(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},e.set(n,u))}}function Rs(t,l,a,e){var n=(n=$l.current)?Xu(n):null;if(!n)throw Error(b(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=ye(a.href),a=le(n).hoistableStyles,e=a.get(l),e||(e={type:"style",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ye(a.href);var u=le(n).hoistableStyles,i=u.get(t);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,i),(u=n.querySelector(Dn(t)))&&!u._p&&(i.instance=u,i.state.loading=5),ul.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ul.set(t,a),u||Rv(n,t,a,i.state))),l&&e===null)throw Error(b(528,""));return i}if(l&&e!==null)throw Error(b(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=ze(a),a=le(n).hoistableScripts,e=a.get(l),e||(e={type:"script",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(b(444,t))}}function ye(t){return'href="'+tl(t)+'"'}function Dn(t){return'link[rel="stylesheet"]['+t+"]"}function k0(t){return at({},t,{"data-precedence":t.precedence,precedence:null})}function Rv(t,l,a,e){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?e.loading=1:(l=t.createElement("link"),e.preload=l,l.addEventListener("load",function(){return e.loading|=1}),l.addEventListener("error",function(){return e.loading|=2}),Nt(l,"link",a),gt(l),t.head.appendChild(l))}function ze(t){return'[src="'+tl(t)+'"]'}function On(t){return"script[async]"+t}function Fs(t,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var e=t.querySelector('style[data-href~="'+tl(a.href)+'"]');if(e)return l.instance=e,gt(e),e;var n=at({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),gt(e),Nt(e,"style",n),ru(e,a.precedence,t),l.instance=e;case"stylesheet":n=ye(a.href);var u=t.querySelector(Dn(n));if(u)return l.state.loading|=4,l.instance=u,gt(u),u;e=k0(a),(n=ul.get(n))&&Jo(e,n),u=(t.ownerDocument||t).createElement("link"),gt(u);var i=u;return i._p=new Promise(function(o,f){i.onload=o,i.onerror=f}),Nt(u,"link",e),l.state.loading|=4,ru(u,a.precedence,t),l.instance=u;case"script":return u=ze(a.src),(n=t.querySelector(On(u)))?(l.instance=n,gt(n),n):(e=a,(n=ul.get(u))&&(e=at({},a),Wo(e,n)),t=t.ownerDocument||t,n=t.createElement("script"),gt(n),Nt(n,"link",e),t.head.appendChild(n),l.instance=n);case"void":return null;default:throw Error(b(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(e=l.instance,l.state.loading|=4,ru(e,a.precedence,t));return l.instance}function ru(t,l,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=e.length?e[e.length-1]:null,u=n,i=0;i<e.length;i++){var o=e[i];if(o.dataset.precedence===l)u=o;else if(u!==n)break}u?u.parentNode.insertBefore(t,u.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(t,l.firstChild))}function Jo(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Wo(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var mu=null;function $s(t,l,a){if(mu===null){var e=new Map,n=mu=new Map;n.set(a,e)}else n=mu,e=n.get(a),e||(e=new Map,n.set(a,e));if(e.has(t))return e;for(e.set(t,null),a=a.getElementsByTagName(t),n=0;n<a.length;n++){var u=a[n];if(!(u[En]||u[St]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(l)||"";i=t+i;var o=e.get(i);o?o.push(u):e.set(i,[u])}}return e}function Is(t,l,a){t=t.ownerDocument||t,t.head.insertBefore(a,l==="title"?t.querySelector("head > title"):null)}function Fv(t,l,a){if(a===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;return l.rel==="stylesheet"?(t=l.disabled,typeof l.precedence=="string"&&t==null):!0;case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function w0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $v(t,l,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=ye(e.href),u=l.querySelector(Dn(n));if(u){l=u._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(t.count++,t=ju.bind(t),l.then(t,t)),a.state.loading|=4,a.instance=u,gt(u);return}u=l.ownerDocument||l,e=k0(e),(n=ul.get(n))&&Jo(e,n),u=u.createElement("link"),gt(u);var i=u;i._p=new Promise(function(o,f){i.onload=o,i.onerror=f}),Nt(u,"link",e),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,l),(l=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ju.bind(t),l.addEventListener("load",a),l.addEventListener("error",a))}}var ic=0;function Iv(t,l){return t.stylesheets&&t.count===0&&vu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var e=setTimeout(function(){if(t.stylesheets&&vu(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+l);0<t.imgBytes&&ic===0&&(ic=62500*Cv());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&vu(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>ic?50:800)+l);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(e),clearTimeout(n)}}:null}function ju(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lu=null;function vu(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lu=new Map,l.forEach(Pv,t),Lu=null,ju.call(t))}function Pv(t,l){if(!(l.state.loading&4)){var a=Lu.get(t);if(a)var e=a.get(null);else{a=new Map,Lu.set(t,a);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),e=i)}e&&a.set(null,e)}n=l.instance,i=n.getAttribute("data-precedence"),u=a.get(i)||e,u===e&&a.set(null,n),a.set(i,n),this.count++,e=ju.bind(this),n.addEventListener("load",e),n.addEventListener("error",e),u?u.parentNode.insertBefore(n,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),l.state.loading|=4}}var pn={$$typeof:Nl,Provider:null,Consumer:null,_currentValue:ga,_currentValue2:ga,_threadCount:0};function tp(t,l,a,e,n,u,i,o,f){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.hiddenUpdates=Ci(null),this.identifierPrefix=e,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Y0(t,l,a,e,n,u,i,o,f,r,h,y){return t=new tp(t,l,a,i,f,r,h,y,o),l=1,u===!0&&(l|=24),u=Xt(3,null,null,l),t.current=u,u.stateNode=t,l=xo(),l.refCount++,t.pooledCache=l,l.refCount++,u.memoizedState={element:e,isDehydrated:a,cache:l},Ao(u),t}function G0(t){return t?(t=$a,t):$a}function X0(t,l,a,e,n,u){n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=Pl(l),e.payload={element:a},u=u===void 0?null:u,u!==null&&(e.callback=u),a=ta(t,e,l),a!==null&&(qt(a,t,l),We(a,t,l))}function Ps(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<l?a:l}}function Ro(t,l){Ps(t,l),(t=t.alternate)&&Ps(t,l)}function j0(t){if(t.tag===13||t.tag===31){var l=Ba(t,67108864);l!==null&&qt(l,t,67108864),Ro(t,67108864)}}function td(t){if(t.tag===13||t.tag===31){var l=Vt();l=uo(l);var a=Ba(t,l);a!==null&&qt(a,t,l),Ro(t,l)}}var Qu=!0;function lp(t,l,a,e){var n=B.T;B.T=null;var u=L.p;try{L.p=2,Fo(t,l,a,e)}finally{L.p=u,B.T=n}}function ap(t,l,a,e){var n=B.T;B.T=null;var u=L.p;try{L.p=8,Fo(t,l,a,e)}finally{L.p=u,B.T=n}}function Fo(t,l,a,e){if(Qu){var n=to(e);if(n===null)nc(t,l,e,Zu,a),ld(t,e);else if(np(n,t,l,a,e))e.stopPropagation();else if(ld(t,e),l&4&&-1<ep.indexOf(t)){for(;n!==null;){var u=xe(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=pa(u.pendingLanes);if(i!==0){var o=u;for(o.pendingLanes|=2,o.entangledLanes|=2;i;){var f=1<<31-Zt(i);o.entanglements[1]|=f,i&=~f}pl(u),(j&6)===0&&(Uu=Lt()+500,Mn(0,!1))}}break;case 31:case 13:o=Ba(u,2),o!==null&&qt(o,u,2),ei(),Ro(u,2)}if(u=to(e),u===null&&nc(t,l,e,Zu,a),u===n)break;n=u}n!==null&&e.stopPropagation()}else nc(t,l,e,null,a)}}function to(t){return t=fo(t),$o(t)}var Zu=null;function $o(t){if(Zu=null,t=Va(t),t!==null){var l=gn(t);if(l===null)t=null;else{var a=l.tag;if(a===13){if(t=cd(l),t!==null)return t;t=null}else if(a===31){if(t=od(l),t!==null)return t;t=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Zu=t,null}function L0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Zm()){case rd:return 2;case md:return 8;case bu:case Vm:return 32;case vd:return 268435456;default:return 32}default:return 32}}var lo=!1,ea=null,na=null,ua=null,hn=new Map,yn=new Map,Vl=[],ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ld(t,l){switch(t){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":ua=null;break;case"pointerover":case"pointerout":hn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":yn.delete(l.pointerId)}}function we(t,l,a,e,n,u){return t===null||t.nativeEvent!==u?(t={blockedOn:l,domEventName:a,eventSystemFlags:e,nativeEvent:u,targetContainers:[n]},l!==null&&(l=xe(l),l!==null&&j0(l)),t):(t.eventSystemFlags|=e,l=t.targetContainers,n!==null&&l.indexOf(n)===-1&&l.push(n),t)}function np(t,l,a,e,n){switch(l){case"focusin":return ea=we(ea,t,l,a,e,n),!0;case"dragenter":return na=we(na,t,l,a,e,n),!0;case"mouseover":return ua=we(ua,t,l,a,e,n),!0;case"pointerover":var u=n.pointerId;return hn.set(u,we(hn.get(u)||null,t,l,a,e,n)),!0;case"gotpointercapture":return u=n.pointerId,yn.set(u,we(yn.get(u)||null,t,l,a,e,n)),!0}return!1}function Q0(t){var l=Va(t.target);if(l!==null){var a=gn(l);if(a!==null){if(l=a.tag,l===13){if(l=cd(a),l!==null){t.blockedOn=l,Yf(t.priority,function(){td(a)});return}}else if(l===31){if(l=od(a),l!==null){t.blockedOn=l,Yf(t.priority,function(){td(a)});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pu(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var a=to(t.nativeEvent);if(a===null){a=t.nativeEvent;var e=new a.constructor(a.type,a);bc=e,a.target.dispatchEvent(e),bc=null}else return l=xe(a),l!==null&&j0(l),t.blockedOn=a,!1;l.shift()}return!0}function ad(t,l,a){pu(t)&&a.delete(l)}function up(){lo=!1,ea!==null&&pu(ea)&&(ea=null),na!==null&&pu(na)&&(na=null),ua!==null&&pu(ua)&&(ua=null),hn.forEach(ad),yn.forEach(ad)}function Pn(t,l){t.blockedOn===l&&(t.blockedOn=null,lo||(lo=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,up)))}var tu=null;function ed(t){tu!==t&&(tu=t,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,function(){tu===t&&(tu=null);for(var l=0;l<t.length;l+=3){var a=t[l],e=t[l+1],n=t[l+2];if(typeof e!="function"){if($o(e||a)===null)continue;break}var u=xe(a);u!==null&&(t.splice(l,3),l-=3,Hc(u,{pending:!0,data:n,method:a.method,action:e},e,n))}}))}function ge(t){function l(f){return Pn(f,t)}ea!==null&&Pn(ea,t),na!==null&&Pn(na,t),ua!==null&&Pn(ua,t),hn.forEach(l),yn.forEach(l);for(var a=0;a<Vl.length;a++){var e=Vl[a];e.blockedOn===t&&(e.blockedOn=null)}for(;0<Vl.length&&(a=Vl[0],a.blockedOn===null);)Q0(a),a.blockedOn===null&&Vl.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var n=a[e],u=a[e+1],i=n[Ht]||null;if(typeof u=="function")i||ed(a);else if(i){var o=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[Ht]||null)o=i.formAction;else if($o(n)!==null)continue}else o=i.action;typeof o=="function"?a[e+1]=o:(a.splice(e,3),e-=3),ed(a)}}}function Z0(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(i){return n=i})},focusReset:"manual",scroll:"manual"})}function l(){n!==null&&(n(),n=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),n!==null&&(n(),n=null)}}}function Io(t){this._internalRoot=t}ii.prototype.render=Io.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(b(409));var a=l.current,e=Vt();X0(a,e,t,l,null,null)};ii.prototype.unmount=Io.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;X0(t.current,2,null,t,null,null),ei(),l[be]=null}};function ii(t){this._internalRoot=t}ii.prototype.unstable_scheduleHydration=function(t){if(t){var l=bd();t={blockedOn:null,target:t,priority:l};for(var a=0;a<Vl.length&&l!==0&&l<Vl[a].priority;a++);Vl.splice(a,0,t),a===0&&Q0(t)}};var nd=ud.version;if(nd!=="19.2.5")throw Error(b(527,nd,"19.2.5"));L.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=wm(l),t=t!==null?fd(t):null,t=t===null?null:t.stateNode,t};var ip={bundleType:0,version:"19.2.5",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.5"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Ye=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Ye.isDisabled&&Ye.supportsFiber))try{bn=Ye.inject(ip),Qt=Ye}catch{}var Ye;ci.createRoot=function(t,l){if(!id(t))throw Error(b(299));var a=!1,e="",n=Hr,u=kr,i=wr;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onUncaughtError!==void 0&&(n=l.onUncaughtError),l.onCaughtError!==void 0&&(u=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError)),l=Y0(t,1,!1,null,null,a,e,null,n,u,i,Z0),t[be]=l.current,Ko(t),new Io(l)};ci.hydrateRoot=function(t,l,a){if(!id(t))throw Error(b(299));var e=!1,n="",u=Hr,i=kr,o=wr,f=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(f=a.formState)),l=Y0(t,1,!0,l,a??null,e,n,f,u,i,o,Z0),l.context=G0(null),a=l.current,e=Vt(),e=uo(e),n=Pl(e),n.callback=null,ta(a,n,e),a=e,l.current.lanes=a,Sn(l,a),pl(l),t[be]=l.current,Ko(t),new ii(l)};ci.version="19.2.5"});var W0=wl((ih,J0)=>{"use strict";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),J0.exports=V0()});var c=ef(Cn()),nm=ef(W0()),tf=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function R0(){let l=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),a=e=>+l.find(n=>n.type===e).value;return{hour:a("hour"),minute:a("minute"),second:a("second")}}function cp(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function H(t=0){let l=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(l)}function op(t=0){let l=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"narrow"}).format(l)}function Me(t){let[l,a]=t.split(":").map(Number);return l*60+a}function oi(t){let l=Math.floor(t/60)%24,a=t%60,e=l<12?"AM":"PM";return`${l%12===0?12:l%12}:${String(a).padStart(2,"0")} ${e}`}function lf(t){if(t<60)return`${t}m`;let l=Math.floor(t/60),a=t%60;return a?`${l}h ${a}m`:`${l}h`}function Po(t){let l=Math.floor(t/60)%24,a=t%60;return`${String(l).padStart(2,"0")}:${String(a).padStart(2,"0")}`}function fi(t){if(!t||t.length===0)return 0;let l=new Set(t),a;if(l.has(H(0)))a=0;else if(l.has(H(-1)))a=-1;else return 0;let e=0,n=a;for(;l.has(H(n));)e++,n-=1;return e}var fp=[15,30,45,60,90,120],sp=200,dp=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[H(-1),H(-2),H(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[H(-1),H(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[H(0),H(-1),H(-2),H(-3),H(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[H(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function um(){let[t,l]=(0,c.useState)(R0());return(0,c.useEffect)(()=>{let a=setInterval(()=>l(R0()),1e3);return()=>clearInterval(a)},[]),t}function im(t,l){return(0,c.useMemo)(()=>{let a=[...t].sort((u,i)=>Me(u.time)-Me(i.time));if(a.length===0)return{sorted:a,currentId:null,nextId:null};let e=a.length-1;for(let u=0;u<a.length&&Me(a[u].time)<=l;u++)e=u;let n=(e+1)%a.length;return{sorted:a,currentId:a[e].id,nextId:a[n].id}},[t,l])}function rp({history:t}){let l=new Set(t||[]),a=[-6,-5,-4,-3,-2,-1,0].map(e=>H(e));return c.default.createElement("span",{className:"week-dots"},a.map((e,n)=>c.default.createElement("span",{key:n,className:`week-dot ${l.has(e)?"filled":""}`})))}function mp({routine:t,status:l,index:a,onDelete:e,onToggleToday:n,onSave:u}){let i=Me(t.time),o=i+t.duration,f=fi(t.history),r=(t.history||[]).includes(H(0)),[h,y]=(0,c.useState)(0),m=(0,c.useRef)(!1),v=(0,c.useRef)(0),S=(0,c.useRef)(0),x=(0,c.useRef)(null),z=(0,c.useRef)(!1),[d,s]=(0,c.useState)(!1),[p,g]=(0,c.useState)(!1),[N,T]=(0,c.useState)(t.label),[A,M]=(0,c.useState)(t.time),[C,O]=(0,c.useState)(t.duration),D=()=>{T(t.label),M(t.time),O(t.duration),g(!0)},F=()=>{let Q=N.trim();Q&&(u(t.id,{label:Q,time:A||t.time,duration:Math.max(5,+C||t.duration)}),g(!1))},zt=Q=>{p||(m.current=!0,z.current=!1,x.current=null,v.current=Q.clientX,S.current=Q.clientY)},ft=Q=>{if(!m.current)return;let Wt=Q.clientX-v.current,ra=Q.clientY-S.current;if(x.current===null){if(Math.abs(Wt)<6&&Math.abs(ra)<6)return;if(x.current=Math.abs(Wt)>Math.abs(ra)?"x":"y",x.current==="y"){m.current=!1;return}}x.current==="x"&&(Math.abs(Wt)>4&&(z.current=!0),y(Math.max(-120,Math.min(0,Wt))))},wt=()=>{m.current&&(m.current=!1,h<-70?(s(!0),setTimeout(()=>e(t.id),200)):(y(0),z.current||D()))};return c.default.createElement("div",{className:`routine-row-wrap ${d?"removing":""}`,style:{animationDelay:`${a*35}ms`}},c.default.createElement("div",{className:"routine-delete-bg"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),c.default.createElement("div",{className:`routine-row ${l}`,style:{transform:`translateX(${h}px)`,transition:m.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)"},onPointerDown:zt,onPointerMove:ft,onPointerUp:wt,onPointerLeave:wt,onPointerCancel:wt},c.default.createElement("div",{className:"routine-line"},c.default.createElement("span",{className:`routine-node ${r?"quest-done":""}`}),c.default.createElement("span",{className:"routine-connector"})),p?c.default.createElement("div",{className:"routine-edit",onPointerDown:Q=>Q.stopPropagation()},c.default.createElement("input",{className:"edit-label",value:N,onChange:Q=>T(Q.target.value),onKeyDown:Q=>Q.key==="Enter"&&F(),autoFocus:!0}),c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{type:"time",className:"time-input",value:A,onChange:Q=>M(Q.target.value)}),c.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:C,onChange:Q=>O(Q.target.value)}),c.default.createElement("span",{className:"edit-unit"},"min")),c.default.createElement("div",{className:"edit-actions"},c.default.createElement("button",{className:"edit-cancel",onClick:()=>g(!1)},"cancel"),c.default.createElement("button",{className:"edit-save",onClick:F},"save"))):c.default.createElement("div",{className:"routine-main"},c.default.createElement("div",{className:"routine-top"},c.default.createElement("span",{className:"routine-time"},oi(i)),l==="current"&&c.default.createElement("span",{className:"live-tag"},"NOW"),f>0&&c.default.createElement("span",{className:"streak-tag"},"\u{1F525}",f)),c.default.createElement("span",{className:"routine-label"},t.label),c.default.createElement("span",{className:"routine-span"},oi(i)," \u2013 ",oi(o)," \xB7 ",lf(t.duration)),c.default.createElement(rp,{history:t.history})),!p&&c.default.createElement("button",{className:`quest-check ${r?"done":""}`,onClick:Q=>{Q.stopPropagation(),n(t.id)},onPointerDown:Q=>Q.stopPropagation(),"aria-label":"Mark done today"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},c.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:r?0:24,transition:"stroke-dashoffset 220ms ease"}})))))}function vp({routines:t}){let l=[-6,-5,-4,-3,-2,-1,0],a=t.length||1,e=l.map(n=>{let u=H(n),i=t.filter(o=>(o.history||[]).includes(u)).length;return{offset:n,pct:Math.round(i/a*100),label:op(n)}});return c.default.createElement("div",{className:"week-chart"},e.map((n,u)=>c.default.createElement("div",{className:"week-bar-col",key:u},c.default.createElement("div",{className:"week-bar-track"},c.default.createElement("div",{className:`week-bar-fill ${n.offset===0?"today":""}`,style:{height:`${Math.max(4,n.pct)}%`}})),c.default.createElement("span",{className:"week-bar-label"},n.label))))}function pp({routines:t,setRoutines:l}){let a=um(),e=a.hour*60+a.minute,{sorted:n,currentId:u,nextId:i}=im(t,e),o=n.find(D=>D.id===u),f=n.find(D=>D.id===i),[r,h]=(0,c.useState)(""),[y,m]=(0,c.useState)(()=>Po(e)),[v,S]=(0,c.useState)(30),[x,z]=(0,c.useState)(!1),d=()=>{let D=r.trim();if(!D){z(!0),setTimeout(()=>z(!1),420);return}let F=y||Po(e);l(zt=>[...zt,{id:sp++,time:F,label:D,duration:Math.max(5,+v||30),history:[]}]),h(""),m(Po(e)),S(30)},s=D=>l(F=>F.filter(zt=>zt.id!==D)),p=D=>{let F=H(0);l(zt=>zt.map(ft=>{if(ft.id!==D)return ft;let Q=(ft.history||[]).includes(F)?ft.history.filter(Wt=>Wt!==F):[...ft.history||[],F];return{...ft,history:Q.slice(-60)}}))},g=(D,F)=>l(zt=>zt.map(ft=>ft.id===D?{...ft,...F}:ft)),N=o?Me(o.time)+o.duration:0,T=f?(Me(f.time)-e+1440)%1440||1440:0,A=H(0),M=n.filter(D=>(D.history||[]).includes(A)).length,C=n.reduce((D,F)=>Math.max(D,fi(F.history)),0),O=n.length?Math.round(M/n.length*100):0;return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"hero-card"},c.default.createElement("div",{className:"hero-clock-row"},c.default.createElement("span",{className:"hero-clock"},String(a.hour%12===0?12:a.hour%12).padStart(2,"0"),":",String(a.minute).padStart(2,"0"),c.default.createElement("span",{className:"hero-sec"},":",String(a.second).padStart(2,"0")),c.default.createElement("span",{className:"hero-ampm"},a.hour<12?"AM":"PM")),c.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),c.default.createElement("span",{className:"hero-date"},cp()),c.default.createElement("div",{className:"hero-divider"}),o?c.default.createElement("div",{className:"hero-current"},c.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),c.default.createElement("div",{className:"hero-current-name"},c.default.createElement("span",{className:"pulse-dot"}),o.label),c.default.createElement("span",{className:"hero-sub"},"until ",oi(N)," \xB7 next: ",f?.label," in ",lf(T))):c.default.createElement("span",{className:"hero-sub"},"no routines yet")),c.default.createElement("div",{className:"quest-stats"},c.default.createElement("div",{className:"quest-stat-item"},c.default.createElement("span",{className:"quest-stat-value"},M,c.default.createElement("span",{className:"quest-stat-of"},"/",n.length)),c.default.createElement("span",{className:"quest-stat-label"},"today")),c.default.createElement("div",{className:"quest-stat-item"},c.default.createElement("span",{className:"quest-stat-value amber"},"\u{1F525}",C),c.default.createElement("span",{className:"quest-stat-label"},"best streak")),c.default.createElement("div",{className:"quest-stat-item quest-stat-ring"},c.default.createElement("svg",{viewBox:"0 0 36 36",width:"40",height:"40"},c.default.createElement("circle",{cx:"18",cy:"18",r:"15.5",fill:"none",stroke:"#1E2228",strokeWidth:"3"}),c.default.createElement("circle",{cx:"18",cy:"18",r:"15.5",fill:"none",stroke:"#5EEAD4",strokeWidth:"3",strokeDasharray:`${O*.974} 200`,strokeLinecap:"round",transform:"rotate(-90 18 18)",style:{transition:"stroke-dasharray 400ms ease"}})),c.default.createElement("span",{className:"quest-stat-pct"},O,"%"))),c.default.createElement(vp,{routines:n}),c.default.createElement("div",{className:`composer ${x?"shake":""}`},c.default.createElement("input",{type:"text",placeholder:"new routine...",value:r,onChange:D=>h(D.target.value),onKeyDown:D=>D.key==="Enter"&&d()}),c.default.createElement("input",{type:"time",className:"time-input",value:y,onChange:D=>m(D.target.value)}),c.default.createElement("button",{className:"add-btn",onClick:d,"aria-label":"Add routine"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),c.default.createElement("div",{className:"duration-chips"},fp.map(D=>c.default.createElement("button",{key:D,className:v===D?"active":"",onClick:()=>S(D)},lf(D))),c.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:D=>S(+D.target.value||5)})),c.default.createElement("div",{className:"task-list routine-list"},n.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):n.map((D,F)=>c.default.createElement(mp,{key:D.id,routine:D,index:F,status:D.id===u?"current":D.id===i?"next":"idle",onDelete:s,onToggleToday:p,onSave:g}))))}function hp(){let t=new Date,l=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(t),a=+l.find(i=>i.type==="year").value,e=+l.find(i=>i.type==="month").value,n=new Date(a,e,0).getDate(),u=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(t);return{y:a,m:e,daysInMonth:n,monthLabel:u}}function yp(t,l,a){return`${t}-${String(l).padStart(2,"0")}-${String(a).padStart(2,"0")}`}function cm(t){let l=new Set(t||[]),a=0;for(let e=-6;e<=0;e++)l.has(H(e))&&a++;return a}function gp(t){if(!t)return null;let l=new Date(t+"T00:00:00+05:30"),a=new Date(H(0)+"T00:00:00+05:30"),e=Math.round((l-a)/864e5);return e<0?{text:`${Math.abs(e)}d overdue`,overdue:!0}:e===0?{text:"due today",overdue:!1}:{text:`${e}d to go`,overdue:!1}}var bp=300,xp=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[H(0),H(-1),H(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[H(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[H(0)]}],Sp=400,Te=500,Ep=[{id:1,name:"Notion Template",dueDate:H(7),tasks:[{id:Te++,text:"Design layout",done:!0},{id:Te++,text:"Write docs",done:!1},{id:Te++,text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:H(7),tasks:[{id:Te++,text:"Script draft",done:!1},{id:Te++,text:"Record",done:!1}]}];function Ap({history:t}){let{y:l,m:a,daysInMonth:e,monthLabel:n}=hp(),u=new Set(t||[]),i=H(0),o=Array.from({length:e},(f,r)=>r+1);return c.default.createElement("div",{className:"month-grid-wrap"},c.default.createElement("span",{className:"month-grid-label"},n),c.default.createElement("div",{className:"month-grid"},o.map(f=>{let r=yp(l,a,f);return c.default.createElement("span",{key:f,className:`month-cell ${u.has(r)?"filled":""} ${r===i?"today":""}`,title:r})})))}function Np({habit:t,onToggleToday:l,onDelete:a,onSave:e}){let n=(t.history||[]).includes(H(0)),u=fi(t.history),i=cm(t.history),o=Math.min(100,Math.round(i/t.weeklyGoal*100)),[f,r]=(0,c.useState)(!1),[h,y]=(0,c.useState)(t.icon),[m,v]=(0,c.useState)(t.label),[S,x]=(0,c.useState)(t.weeklyGoal),z=()=>{y(t.icon),v(t.label),x(t.weeklyGoal),r(!0)},d=()=>{let s=m.trim();s&&(e(t.id,{icon:h.trim()||t.icon,label:s,weeklyGoal:Math.max(1,Math.min(7,+S||t.weeklyGoal))}),r(!1))};return f?c.default.createElement("div",{className:"vault-card"},c.default.createElement("div",{className:"routine-edit"},c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{className:"duration-input",style:{width:44},value:h,onChange:s=>y(s.target.value),maxLength:2}),c.default.createElement("input",{className:"edit-label",style:{flex:1},value:m,onChange:s=>v(s.target.value),onKeyDown:s=>s.key==="Enter"&&d(),autoFocus:!0})),c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:S,onChange:s=>x(s.target.value)}),c.default.createElement("span",{className:"edit-unit"},"x / week")),c.default.createElement("div",{className:"edit-actions"},c.default.createElement("button",{className:"edit-cancel",onClick:()=>r(!1)},"cancel"),c.default.createElement("button",{className:"edit-save",onClick:d},"save")))):c.default.createElement("div",{className:"vault-card"},c.default.createElement("div",{className:"vault-card-top"},c.default.createElement("span",{className:"vault-card-icon"},t.icon),c.default.createElement("div",{className:"vault-card-title"},c.default.createElement("span",{className:"vault-card-label"},t.label),c.default.createElement("span",{className:"vault-card-goal"},"weekly: ",t.weeklyGoal,"x")),c.default.createElement("button",{className:"vault-card-edit",onClick:z,"aria-label":"Edit habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),c.default.createElement("button",{className:"vault-card-del",onClick:()=>a(t.id),"aria-label":"Delete habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),c.default.createElement(Ap,{history:t.history}),c.default.createElement("div",{className:"progress-track small"},c.default.createElement("div",{className:"progress-fill",style:{width:`${o}%`}})),c.default.createElement("div",{className:"vault-card-bottom"},c.default.createElement("span",{className:"vault-card-pct"},o,"% ",c.default.createElement("span",{className:"muted"},"(",i,"/",t.weeklyGoal,")")),u>0&&c.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u)),c.default.createElement("button",{className:`vault-check ${n?"done":""}`,onClick:()=>l(t.id)},n?"\u2713 completed today":"mark complete today"))}function zp({habits:t,setHabits:l}){let[a,e]=(0,c.useState)(""),[n,u]=(0,c.useState)(7),[i,o]=(0,c.useState)(!1),f=()=>{let m=a.trim();if(!m){o(!0),setTimeout(()=>o(!1),420);return}l(v=>[...v,{id:bp++,icon:"\u25C6",label:m,weeklyGoal:n,history:[]}]),e(""),u(7)},r=m=>l(v=>v.filter(S=>S.id!==m)),h=(m,v)=>l(S=>S.map(x=>x.id===m?{...x,...v}:x)),y=m=>{let v=H(0);l(S=>S.map(x=>{if(x.id!==m)return x;let d=(x.history||[]).includes(v)?x.history.filter(s=>s!==v):[...x.history||[],v];return{...x,history:d.slice(-370)}}))};return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"section-header"},c.default.createElement("span",null,"HABIT-STREAK-TRACKING")),c.default.createElement("div",{className:"vault-grid"},t.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):t.map(m=>c.default.createElement(Np,{key:m.id,habit:m,onToggleToday:y,onDelete:r,onSave:h}))),c.default.createElement("div",{className:`composer ${i?"shake":""}`},c.default.createElement("input",{type:"text",placeholder:"new habit...",value:a,onChange:m=>e(m.target.value),onKeyDown:m=>m.key==="Enter"&&f()}),c.default.createElement("button",{className:"add-btn",onClick:f,"aria-label":"Add habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),c.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(m=>c.default.createElement("button",{key:m,className:n===m?"active":"",onClick:()=>u(m)},m,"x/wk"))))}function Tp({projectId:t,task:l,onToggle:a,onDelete:e,onEdit:n}){let[u,i]=(0,c.useState)(!1),[o,f]=(0,c.useState)(l.text),r=()=>{let h=o.trim();h&&n(t,l.id,h),i(!1)};return u?c.default.createElement("div",{className:"project-task-row"},c.default.createElement("input",{className:"project-task-edit",value:o,onChange:h=>f(h.target.value),onKeyDown:h=>h.key==="Enter"&&r(),onBlur:r,autoFocus:!0})):c.default.createElement("div",{className:"project-task-row"},c.default.createElement(om,{checked:l.done,onChange:()=>a(t,l.id),color:"#5EEAD4"}),c.default.createElement("span",{className:`project-task-text ${l.done?"done":""}`,onClick:()=>i(!0)},l.text),c.default.createElement("button",{className:"del-btn",onClick:()=>e(t,l.id),"aria-label":"Delete task"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Mp({project:t,onDelete:l,onAddTask:a,onToggleTask:e,onDeleteTask:n,onEditTask:u,onSave:i}){let[o,f]=(0,c.useState)(""),r=t.tasks.length,h=t.tasks.filter(T=>T.done).length,y=r?Math.round(h/r*100):0,m=gp(t.dueDate),[v,S]=(0,c.useState)(!1),[x,z]=(0,c.useState)(t.name),[d,s]=(0,c.useState)(t.dueDate||""),p=()=>{let T=o.trim();T&&(a(t.id,T),f(""))},g=()=>{z(t.name),s(t.dueDate||""),S(!0)},N=()=>{let T=x.trim();T&&(i(t.id,{name:T,dueDate:d||null}),S(!1))};return v?c.default.createElement("div",{className:"project-card"},c.default.createElement("div",{className:"routine-edit"},c.default.createElement("input",{className:"edit-label",value:x,onChange:T=>z(T.target.value),onKeyDown:T=>T.key==="Enter"&&N(),autoFocus:!0}),c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{type:"date",className:"time-input",value:d,onChange:T=>s(T.target.value)})),c.default.createElement("div",{className:"edit-actions"},c.default.createElement("button",{className:"edit-cancel",onClick:()=>S(!1)},"cancel"),c.default.createElement("button",{className:"edit-save",onClick:N},"save")))):c.default.createElement("div",{className:"project-card"},c.default.createElement("div",{className:"project-card-top"},c.default.createElement("span",{className:"project-name"},t.name),c.default.createElement("div",{className:"project-card-actions"},c.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit project"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),c.default.createElement("button",{className:"vault-card-del",onClick:()=>l(t.id),"aria-label":"Delete project"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),m&&c.default.createElement("span",{className:`project-due ${m.overdue?"overdue":""}`},m.text),c.default.createElement("div",{className:"progress-track small"},c.default.createElement("div",{className:"progress-fill",style:{width:`${y}%`}})),c.default.createElement("span",{className:"vault-card-pct"},h,"/",r," tasks \xB7 ",y,"%"),c.default.createElement("div",{className:"project-tasks"},t.tasks.map(T=>c.default.createElement(Tp,{key:T.id,projectId:t.id,task:T,onToggle:e,onDelete:n,onEdit:u}))),c.default.createElement("div",{className:"project-add-task"},c.default.createElement("input",{type:"text",placeholder:"+ add task...",value:o,onChange:T=>f(T.target.value),onKeyDown:T=>T.key==="Enter"&&p()})))}function Dp({projects:t,setProjects:l}){let[a,e]=(0,c.useState)(""),[n,u]=(0,c.useState)(""),[i,o]=(0,c.useState)(!1),f=()=>{let x=a.trim();if(!x){o(!0),setTimeout(()=>o(!1),420);return}l(z=>[...z,{id:Sp++,name:x,dueDate:n||null,tasks:[]}]),e(""),u("")},r=x=>l(z=>z.filter(d=>d.id!==x)),h=(x,z)=>l(d=>d.map(s=>s.id===x?{...s,...z}:s)),y=(x,z)=>l(d=>d.map(s=>s.id===x?{...s,tasks:[...s.tasks,{id:Te++,text:z,done:!1}]}:s)),m=(x,z)=>l(d=>d.map(s=>s.id!==x?s:{...s,tasks:s.tasks.map(p=>p.id===z?{...p,done:!p.done}:p)})),v=(x,z)=>l(d=>d.map(s=>s.id!==x?s:{...s,tasks:s.tasks.filter(p=>p.id!==z)})),S=(x,z,d)=>l(s=>s.map(p=>p.id!==x?p:{...p,tasks:p.tasks.map(g=>g.id===z?{...g,text:d}:g)}));return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"section-header"},c.default.createElement("span",null,"PROJECT-MANAGER")),c.default.createElement("div",{className:"vault-grid"},t.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},"no projects yet")):t.map(x=>c.default.createElement(Mp,{key:x.id,project:x,onDelete:r,onAddTask:y,onToggleTask:m,onDeleteTask:v,onEditTask:S,onSave:h}))),c.default.createElement("div",{className:`composer ${i?"shake":""}`},c.default.createElement("input",{type:"text",placeholder:"new project...",value:a,onChange:x=>e(x.target.value),onKeyDown:x=>x.key==="Enter"&&f()}),c.default.createElement("input",{type:"date",className:"time-input",value:n,onChange:x=>u(x.target.value)}),c.default.createElement("button",{className:"add-btn",onClick:f,"aria-label":"Add project"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function Op({vaultHabits:t,setVaultHabits:l,projects:a,setProjects:e}){return c.default.createElement("div",{className:"task-list vault-scroll"},c.default.createElement(zp,{habits:t,setHabits:l}),c.default.createElement(Dp,{projects:a,setProjects:e}))}var kl=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],F0=["Novice","Apprentice","Adept","Ranger","Knight","Wizard","Sage","Legend"];function _p(t,l,a){let e=t.reduce((i,o)=>i+o.xp*(o.history?.length||0),0),n=l.reduce((i,o)=>i+o.xp*(o.history?.length||0),0),u=a.reduce((i,o)=>i+o.cost*(o.claimed?.length||0),0);return e-n-u}function Bp(t,l,a){let e=l.filter(u=>u.area===t).reduce((u,i)=>u+i.xp*(i.history?.length||0),0),n=a.filter(u=>u.area===t).reduce((u,i)=>u+i.xp*(i.history?.length||0),0);return e-n}function Cp(t){let l=Math.max(0,t),a=Math.floor(l/100)+1,e=l%100;return{level:a,into:e,span:100}}function Up(t){return F0[Math.min(t-1,F0.length-1)]}var qp=600,Hp=700,kp=800,wp=[{id:1,label:"Deep Work",area:"work",xp:40,history:[H(0),H(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[H(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],Yp=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],Gp=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function Xp({area:t,xp:l}){return c.default.createElement("div",{className:"area-card"},c.default.createElement("span",{className:"area-dot",style:{background:t.color}}),c.default.createElement("span",{className:"area-label"},t.label),c.default.createElement("span",{className:"area-xp"},l," XP"))}function jp({habit:t,onToggleToday:l,onDelete:a,onSave:e}){let n=(t.history||[]).includes(H(0)),u=fi(t.history),i=kl.find(d=>d.key===t.area)||kl[0],[o,f]=(0,c.useState)(!1),[r,h]=(0,c.useState)(t.label),[y,m]=(0,c.useState)(t.area),[v,S]=(0,c.useState)(t.xp),x=()=>{h(t.label),m(t.area),S(t.xp),f(!0)},z=()=>{let d=r.trim();d&&(e(t.id,{label:d,area:y,xp:Math.max(1,+v||t.xp)}),f(!1))};return o?c.default.createElement("div",{className:"quest-habit-card good editing"},c.default.createElement("div",{className:"routine-edit"},c.default.createElement("input",{className:"edit-label",value:r,onChange:d=>h(d.target.value),onKeyDown:d=>d.key==="Enter"&&z(),autoFocus:!0}),c.default.createElement("div",{className:"edit-row"},kl.map(d=>c.default.createElement("button",{key:d.key,type:"button",className:`area-chip ${y===d.key?"active":""}`,style:{"--ac":d.color},onClick:()=>m(d.key)},d.label))),c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:v,onChange:d=>S(d.target.value)}),c.default.createElement("span",{className:"edit-unit"},"XP")),c.default.createElement("div",{className:"edit-actions"},c.default.createElement("button",{className:"edit-cancel",onClick:()=>f(!1)},"cancel"),c.default.createElement("button",{className:"edit-save",onClick:z},"save")))):c.default.createElement("div",{className:"quest-habit-card good"},c.default.createElement("span",{className:"area-dot",style:{background:i.color}}),c.default.createElement("div",{className:"quest-habit-main"},c.default.createElement("span",{className:"quest-habit-label"},t.label),c.default.createElement("span",{className:"quest-habit-meta"},"+",t.xp," XP \xB7 ",i.label,u>0?` \xB7 \u{1F525}${u}`:"")),c.default.createElement("button",{className:`quest-check ${n?"done":""}`,onClick:()=>l(t.id),"aria-label":"Mark done today"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},c.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:n?0:24,transition:"stroke-dashoffset 220ms ease"}}))),c.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),c.default.createElement("button",{className:"del-btn",onClick:()=>a(t.id),"aria-label":"Delete habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Lp({habit:t,onToggleToday:l,onDelete:a,onSave:e}){let n=(t.history||[]).includes(H(0)),u=kl.find(d=>d.key===t.area)||kl[0],i=cm(t.history),[o,f]=(0,c.useState)(!1),[r,h]=(0,c.useState)(t.label),[y,m]=(0,c.useState)(t.area),[v,S]=(0,c.useState)(t.xp),x=()=>{h(t.label),m(t.area),S(t.xp),f(!0)},z=()=>{let d=r.trim();d&&(e(t.id,{label:d,area:y,xp:Math.max(1,+v||t.xp)}),f(!1))};return o?c.default.createElement("div",{className:"quest-habit-card bad editing"},c.default.createElement("div",{className:"routine-edit"},c.default.createElement("input",{className:"edit-label",value:r,onChange:d=>h(d.target.value),onKeyDown:d=>d.key==="Enter"&&z(),autoFocus:!0}),c.default.createElement("div",{className:"edit-row"},kl.map(d=>c.default.createElement("button",{key:d.key,type:"button",className:`area-chip ${y===d.key?"active":""}`,style:{"--ac":d.color},onClick:()=>m(d.key)},d.label))),c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:v,onChange:d=>S(d.target.value)}),c.default.createElement("span",{className:"edit-unit"},"XP")),c.default.createElement("div",{className:"edit-actions"},c.default.createElement("button",{className:"edit-cancel",onClick:()=>f(!1)},"cancel"),c.default.createElement("button",{className:"edit-save",onClick:z},"save")))):c.default.createElement("div",{className:"quest-habit-card bad"},c.default.createElement("span",{className:"area-dot",style:{background:u.color}}),c.default.createElement("div",{className:"quest-habit-main"},c.default.createElement("span",{className:"quest-habit-label"},t.label),c.default.createElement("span",{className:"quest-habit-meta"},"-",t.xp," XP \xB7 ",u.label," \xB7 ",i,"x this week")),c.default.createElement("button",{className:`quest-check bad-check ${n?"done":""}`,onClick:()=>l(t.id),"aria-label":"Log slip today"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),c.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),c.default.createElement("button",{className:"del-btn",onClick:()=>a(t.id),"aria-label":"Delete habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function Qp({reward:t,canClaim:l,onClaim:a,onDelete:e,onSave:n}){let[u,i]=(0,c.useState)(!1),[o,f]=(0,c.useState)(t.label),[r,h]=(0,c.useState)(t.cost),y=()=>{f(t.label),h(t.cost),i(!0)},m=()=>{let v=o.trim();v&&(n(t.id,{label:v,cost:Math.max(1,+r||t.cost)}),i(!1))};return u?c.default.createElement("div",{className:"reward-card"},c.default.createElement("div",{className:"routine-edit"},c.default.createElement("input",{className:"edit-label",value:o,onChange:v=>f(v.target.value),onKeyDown:v=>v.key==="Enter"&&m(),autoFocus:!0}),c.default.createElement("div",{className:"edit-row"},c.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:r,onChange:v=>h(v.target.value)}),c.default.createElement("span",{className:"edit-unit"},"XP cost")),c.default.createElement("div",{className:"edit-actions"},c.default.createElement("button",{className:"edit-cancel",onClick:()=>i(!1)},"cancel"),c.default.createElement("button",{className:"edit-save",onClick:m},"save")))):c.default.createElement("div",{className:"reward-card"},c.default.createElement("div",{className:"reward-top"},c.default.createElement("span",{className:"reward-label"},t.label),c.default.createElement("div",{className:"project-card-actions"},c.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit reward"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),c.default.createElement("button",{className:"vault-card-del",onClick:()=>e(t.id),"aria-label":"Delete reward"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),c.default.createElement("span",{className:"reward-cost"},t.cost," XP"),c.default.createElement("button",{className:"reward-claim",disabled:!l,onClick:()=>a(t.id)},l?"claim reward":"not enough XP"),t.claimed?.length>0&&c.default.createElement("span",{className:"reward-claimed-count"},"claimed ",t.claimed.length,"x"))}function Zp({goodHabits:t,setGoodHabits:l,badHabits:a,setBadHabits:e,rewards:n,setRewards:u}){let i=(0,c.useMemo)(()=>_p(t,a,n),[t,a,n]),{level:o,into:f,span:r}=Cp(i),h=Math.round(f/r*100),y=E=>{let X=H(0);l(vt=>vt.map(Z=>{if(Z.id!==E)return Z;let di=(Z.history||[]).includes(X)?Z.history.filter(ri=>ri!==X):[...Z.history||[],X];return{...Z,history:di.slice(-370)}}))},m=E=>{let X=H(0);e(vt=>vt.map(Z=>{if(Z.id!==E)return Z;let di=(Z.history||[]).includes(X)?Z.history.filter(ri=>ri!==X):[...Z.history||[],X];return{...Z,history:di.slice(-370)}}))},v=E=>l(X=>X.filter(vt=>vt.id!==E)),S=E=>e(X=>X.filter(vt=>vt.id!==E)),x=(E,X)=>l(vt=>vt.map(Z=>Z.id===E?{...Z,...X}:Z)),z=(E,X)=>e(vt=>vt.map(Z=>Z.id===E?{...Z,...X}:Z)),d=E=>{let X=H(0);u(vt=>vt.map(Z=>Z.id===E?{...Z,claimed:[...Z.claimed||[],X]}:Z))},s=E=>u(X=>X.filter(vt=>vt.id!==E)),p=(E,X)=>u(vt=>vt.map(Z=>Z.id===E?{...Z,...X}:Z)),[g,N]=(0,c.useState)(""),[T,A]=(0,c.useState)("work"),[M,C]=(0,c.useState)(20),[O,D]=(0,c.useState)(""),[F,zt]=(0,c.useState)("work"),[ft,wt]=(0,c.useState)(20),[Q,Wt]=(0,c.useState)(""),[ra,si]=(0,c.useState)(100),_n=()=>{let E=g.trim();E&&(l(X=>[...X,{id:qp++,label:E,area:T,xp:+M||10,history:[]}]),N(""))},_=()=>{let E=O.trim();E&&(e(X=>[...X,{id:Hp++,label:E,area:F,xp:+ft||10,history:[]}]),D(""))},$=()=>{let E=Q.trim();E&&(u(X=>[...X,{id:kp++,label:E,cost:+ra||50,claimed:[]}]),Wt(""))};return c.default.createElement("div",{className:"task-list vault-scroll"},c.default.createElement("div",{className:"hero-card"},c.default.createElement("div",{className:"hero-clock-row"},c.default.createElement("span",{className:"hero-clock"},"LVL ",o),c.default.createElement("span",{className:"hero-tz"},Up(o))),c.default.createElement("span",{className:"hero-date"},i," XP total"),c.default.createElement("div",{className:"hero-divider"}),c.default.createElement("div",{className:"xp-bar-row"},c.default.createElement("div",{className:"progress-track small"},c.default.createElement("div",{className:"progress-fill xp",style:{width:`${h}%`}})),c.default.createElement("span",{className:"xp-bar-label"},f,"/",r," to next level"))),c.default.createElement("div",{className:"section-header"},c.default.createElement("span",null,"LIFE-AREAS")),c.default.createElement("div",{className:"area-grid"},kl.map(E=>c.default.createElement(Xp,{key:E.key,area:E,xp:Bp(E.key,t,a)}))),c.default.createElement("div",{className:"section-header"},c.default.createElement("span",null,"GOOD-HABITS")),c.default.createElement("div",{className:"quest-habit-list"},t.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},"no good habits yet")):t.map(E=>c.default.createElement(jp,{key:E.id,habit:E,onToggleToday:y,onDelete:v,onSave:x}))),c.default.createElement("div",{className:"composer"},c.default.createElement("input",{type:"text",placeholder:"new good habit...",value:g,onChange:E=>N(E.target.value),onKeyDown:E=>E.key==="Enter"&&_n()}),c.default.createElement("button",{className:"add-btn",onClick:_n,"aria-label":"Add good habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),c.default.createElement("div",{className:"duration-chips"},kl.map(E=>c.default.createElement("button",{key:E.key,className:T===E.key?"active":"",onClick:()=>A(E.key)},E.label)),c.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:M,onChange:E=>C(+E.target.value||5)})),c.default.createElement("div",{className:"section-header"},c.default.createElement("span",null,"BAD-HABITS")),c.default.createElement("div",{className:"quest-habit-list"},a.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},"no bad habits tracked")):a.map(E=>c.default.createElement(Lp,{key:E.id,habit:E,onToggleToday:m,onDelete:S,onSave:z}))),c.default.createElement("div",{className:"composer"},c.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:O,onChange:E=>D(E.target.value),onKeyDown:E=>E.key==="Enter"&&_()}),c.default.createElement("button",{className:"add-btn",onClick:_,"aria-label":"Add bad habit"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),c.default.createElement("div",{className:"duration-chips"},kl.map(E=>c.default.createElement("button",{key:E.key,className:F===E.key?"active":"",onClick:()=>zt(E.key)},E.label)),c.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:ft,onChange:E=>wt(+E.target.value||5)})),c.default.createElement("div",{className:"section-header"},c.default.createElement("span",null,"REWARD-CENTER")),c.default.createElement("div",{className:"vault-grid"},n.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(E=>c.default.createElement(Qp,{key:E.id,reward:E,canClaim:i>=E.cost,onClaim:d,onDelete:s,onSave:p}))),c.default.createElement("div",{className:"composer"},c.default.createElement("input",{type:"text",placeholder:"new reward...",value:Q,onChange:E=>Wt(E.target.value),onKeyDown:E=>E.key==="Enter"&&$()}),c.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:ra,onChange:E=>si(+E.target.value||50)}),c.default.createElement("button",{className:"add-btn",onClick:$,"aria-label":"Add reward"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var Vp=100,Kp=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function Jp(t=1e3*30){let[l,a]=(0,c.useState)(Date.now());return(0,c.useEffect)(()=>{let e=setInterval(()=>a(Date.now()),t);return()=>clearInterval(e)},[t]),l}function Wp(t,l){let a=Math.floor((l-t)/1e3);if(a<60)return"just now";let e=Math.floor(a/60);if(e<60)return`${e}m ago`;let n=Math.floor(e/60);return n<24?`${n}h ago`:`${Math.floor(n/24)}d ago`}function om({checked:t,onChange:l,color:a}){return c.default.createElement("button",{onClick:l,"aria-checked":t,role:"checkbox",className:"checkbox-btn",style:{"--c":a}},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},c.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:t?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function Rp({task:t,now:l,onToggle:a,onDelete:e,index:n}){let[u,i]=(0,c.useState)(!1),o=tf.find(r=>r.key===t.priority)||tf[0],f=()=>{i(!0),setTimeout(()=>e(t.id),220)};return c.default.createElement("div",{className:`task-row ${u?"leaving":""}`,style:{animationDelay:`${n*35}ms`}},c.default.createElement(om,{checked:t.done,onChange:()=>a(t.id),color:o.color}),c.default.createElement("div",{className:"task-main"},c.default.createElement("span",{className:`task-text ${t.done?"done":""}`},t.text),c.default.createElement("span",{className:"task-meta"},c.default.createElement("span",{className:"prio-dot",style:{background:o.color}}),c.default.createElement("span",{className:"prio-label"},o.label),c.default.createElement("span",{className:"dot-sep"},"\xB7"),c.default.createElement("span",null,Wp(t.createdAt,l)))),c.default.createElement("button",{className:"del-btn",onClick:f,"aria-label":"Delete task"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var $0="tasksh.tasks.v1",I0="tasksh.routines.v1",P0="tasksh.vaulthabits.v1",tm="tasksh.projects.v1",lm="tasksh.goodhabits.v1",am="tasksh.badhabits.v1",em="tasksh.rewards.v1";function Ua(t,l){try{let a=localStorage.getItem(t);return a?JSON.parse(a):l}catch{return l}}function Fp(){let[t,l]=(0,c.useState)("tasks"),[a,e]=(0,c.useState)(()=>Ua($0,Kp)),[n,u]=(0,c.useState)(()=>Ua(I0,dp)),[i,o]=(0,c.useState)(()=>Ua(P0,xp)),[f,r]=(0,c.useState)(()=>Ua(tm,Ep)),[h,y]=(0,c.useState)(()=>Ua(lm,wp)),[m,v]=(0,c.useState)(()=>Ua(am,Yp)),[S,x]=(0,c.useState)(()=>Ua(em,Gp)),[z,d]=(0,c.useState)(""),[s,p]=(0,c.useState)("mid"),[g,N]=(0,c.useState)("all"),T=(0,c.useRef)(null),A=Jp(),M=um(),C=M.hour*60+M.minute,{currentId:O,sorted:D}=im(n,C),[F,zt]=(0,c.useState)(null),ft=(0,c.useRef)(void 0);(0,c.useEffect)(()=>{if(ft.current===void 0){ft.current=O;return}if(O!==ft.current){let _=D.find($=>$.id===O);_&&zt({id:O,label:_.label,time:_.time}),ft.current=O}},[O,D]),(0,c.useEffect)(()=>{if(!F)return;let _=setTimeout(()=>zt(null),6e3);return()=>clearTimeout(_)},[F]),(0,c.useEffect)(()=>{try{localStorage.setItem($0,JSON.stringify(a))}catch{}},[a]),(0,c.useEffect)(()=>{try{localStorage.setItem(I0,JSON.stringify(n))}catch{}},[n]),(0,c.useEffect)(()=>{try{localStorage.setItem(P0,JSON.stringify(i))}catch{}},[i]),(0,c.useEffect)(()=>{try{localStorage.setItem(tm,JSON.stringify(f))}catch{}},[f]),(0,c.useEffect)(()=>{try{localStorage.setItem(lm,JSON.stringify(h))}catch{}},[h]),(0,c.useEffect)(()=>{try{localStorage.setItem(am,JSON.stringify(m))}catch{}},[m]),(0,c.useEffect)(()=>{try{localStorage.setItem(em,JSON.stringify(S))}catch{}},[S]);let wt=(0,c.useMemo)(()=>{let _=a.length,$=a.filter(vt=>vt.done).length,E=_-$,X=_===0?0:Math.round($/_*100);return{total:_,done:$,pending:E,pct:X}},[a]),Q=(0,c.useMemo)(()=>{let _=a;return g==="active"&&(_=_.filter($=>!$.done)),g==="done"&&(_=_.filter($=>$.done)),[..._].sort(($,E)=>{if($.done!==E.done)return $.done?1:-1;let X={high:0,mid:1,low:2};return X[$.priority]-X[E.priority]})},[a,g]),Wt=()=>{let _=z.trim();_&&(e($=>[...$,{id:Vp++,text:_,done:!1,priority:s,createdAt:Date.now()}]),d(""),T.current?.focus())},ra=_=>e($=>$.map(E=>E.id===_?{...E,done:!E.done}:E)),si=_=>e($=>$.filter(E=>E.id!==_)),_n=()=>e(_=>_.filter($=>!$.done));return c.default.createElement("div",{className:"app-root"},c.default.createElement("style",null,`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');

        * { box-sizing: border-box; }

        html, body, #root { height: 100%; }

        .app-root {
          height: 100vh;
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

        .tabs {
          display: flex;
          gap: 2px;
          padding: 10px 14px 0;
          border-bottom: 1px solid #1E2228;
        }

        .tabs button {
          border: none;
          background: transparent;
          color: #4B5563;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 9px 14px;
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
        }

        .month-cell.filled { background: #F5A623; }
        .month-cell.today { box-shadow: 0 0 0 1.5px #5EEAD4; }

        .vault-card-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
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
      `),c.default.createElement("div",{className:"panel"},F&&c.default.createElement("div",{className:"quest-banner",onClick:()=>zt(null)},c.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),c.default.createElement("span",{className:"quest-banner-text"},c.default.createElement("b",null,"Now:")," ",F.label),c.default.createElement("button",{className:"quest-banner-close",onClick:_=>{_.stopPropagation(),zt(null)},"aria-label":"Dismiss"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},c.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),c.default.createElement("div",{className:"titlebar"},c.default.createElement("div",{className:"titlebar-left"},c.default.createElement("div",{className:"dots"},c.default.createElement("span",{className:"dot red"}),c.default.createElement("span",{className:"dot amber"}),c.default.createElement("span",{className:"dot green"})),c.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),c.default.createElement("span",{className:"clock"},new Date(A).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))),c.default.createElement("div",{className:"tabs"},c.default.createElement("button",{className:t==="tasks"?"active":"",onClick:()=>l("tasks")},"tasks"),c.default.createElement("button",{className:t==="routines"?"active":"",onClick:()=>l("routines")},"routines"),c.default.createElement("button",{className:t==="vault"?"active":"",onClick:()=>l("vault")},"vault"),c.default.createElement("button",{className:t==="quest"?"active":"",onClick:()=>l("quest")},"quest")),t==="tasks"?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"stats-bar"},c.default.createElement("div",{className:"stats-top"},c.default.createElement("span",{className:"stats-title"},"TODAY'S LOAD"),c.default.createElement("span",{className:"stats-pct"},wt.pct,"%")),c.default.createElement("div",{className:"progress-track"},c.default.createElement("div",{className:"progress-fill",style:{width:`${wt.pct}%`}})),c.default.createElement("div",{className:"stats-row"},c.default.createElement("span",null,c.default.createElement("b",null,wt.total)," total"),c.default.createElement("span",null,c.default.createElement("b",null,wt.pending)," pending"),c.default.createElement("span",null,c.default.createElement("b",null,wt.done)," done"))),c.default.createElement("div",{className:"composer"},c.default.createElement("input",{ref:T,type:"text",placeholder:"add a task, press enter...",value:z,onChange:_=>d(_.target.value),onKeyDown:_=>_.key==="Enter"&&Wt()}),c.default.createElement("div",{className:"prio-select"},tf.map(_=>c.default.createElement("button",{key:_.key,className:s===_.key?"active":"",style:{"--pc":_.color},onClick:()=>p(_.key)},_.label))),c.default.createElement("button",{className:"add-btn",onClick:Wt,"aria-label":"Add task"},c.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},c.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),c.default.createElement("div",{className:"filters"},["all","active","done"].map(_=>c.default.createElement("button",{key:_,className:g===_?"active":"",onClick:()=>N(_)},_)),c.default.createElement("span",{className:"spacer"}),wt.done>0&&c.default.createElement("button",{className:"clear-btn",onClick:_n},"clear done")),c.default.createElement("div",{className:"task-list"},Q.length===0?c.default.createElement("div",{className:"empty-state"},c.default.createElement("div",{className:"glyph"},"{ }"),c.default.createElement("div",{className:"msg"},g==="done"?"nothing completed yet":"queue's empty \u2014 add something")):Q.map((_,$)=>c.default.createElement(Rp,{key:_.id,task:_,now:A,index:$,onToggle:ra,onDelete:si})))):t==="routines"?c.default.createElement(pp,{routines:n,setRoutines:u}):t==="vault"?c.default.createElement(Op,{vaultHabits:i,setVaultHabits:o,projects:f,setProjects:r}):c.default.createElement(Zp,{goodHabits:h,setGoodHabits:y,badHabits:m,setBadHabits:v,rewards:S,setRewards:x})))}var $p=nm.default.createRoot(document.getElementById("root"));$p.render(c.default.createElement(Fp));})();
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
