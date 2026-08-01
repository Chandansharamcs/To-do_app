(()=>{var Wp=Object.create;var Ns=Object.defineProperty;var Hp=Object.getOwnPropertyDescriptor;var Jp=Object.getOwnPropertyNames;var Vp=Object.getPrototypeOf,Gp=Object.prototype.hasOwnProperty;var Rt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Kp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Jp(t))!Gp.call(e,o)&&o!==n&&Ns(e,o,{get:()=>t[o],enumerable:!(r=Hp(t,o))||r.enumerable});return e};var Ss=(e,t,n)=>(n=e!=null?Wp(Vp(e)):{},Kp(t||!e||!e.__esModule?Ns(n,"default",{value:e,enumerable:!0}):n,e));var Bs=Rt(G=>{"use strict";var rr=Symbol.for("react.element"),Xp=Symbol.for("react.portal"),qp=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),Qp=Symbol.for("react.profiler"),Zp=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),ef=Symbol.for("react.forward_ref"),tf=Symbol.for("react.suspense"),nf=Symbol.for("react.memo"),rf=Symbol.for("react.lazy"),Es=Symbol.iterator;function of(e){return e===null||typeof e!="object"?null:(e=Es&&e[Es]||e["@@iterator"],typeof e=="function"?e:null)}var zs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_s=Object.assign,Ts={};function bn(e,t,n){this.props=e,this.context=t,this.refs=Ts,this.updater=n||zs}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ls(){}Ls.prototype=bn.prototype;function $a(e,t,n){this.props=e,this.context=t,this.refs=Ts,this.updater=n||zs}var Oa=$a.prototype=new Ls;Oa.constructor=$a;_s(Oa,bn.prototype);Oa.isPureReactComponent=!0;var Cs=Array.isArray,Ps=Object.prototype.hasOwnProperty,ja={current:null},Ds={key:!0,ref:!0,__self:!0,__source:!0};function As(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ps.call(t,r)&&!Ds.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:rr,type:e,key:i,ref:l,props:o,_owner:ja.current}}function af(e,t){return{$$typeof:rr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ua(e){return typeof e=="object"&&e!==null&&e.$$typeof===rr}function lf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ms=/\/+/g;function Ia(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lf(""+e.key):t.toString(36)}function lo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case rr:case Xp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Ia(l,0):r,Cs(o)?(n="",e!=null&&(n=e.replace(Ms,"$&/")+"/"),lo(o,t,n,"",function(c){return c})):o!=null&&(Ua(o)&&(o=af(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Ms,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Cs(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Ia(i,s);l+=lo(i,t,n,u,o)}else if(u=of(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Ia(i,s++),l+=lo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function io(e,t,n){if(e==null)return e;var r=[],o=0;return lo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function sf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Te={current:null},so={transition:null},uf={ReactCurrentDispatcher:Te,ReactCurrentBatchConfig:so,ReactCurrentOwner:ja};function Fs(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:io,forEach:function(e,t,n){io(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return io(e,function(){t++}),t},toArray:function(e){return io(e,function(t){return t})||[]},only:function(e){if(!Ua(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=bn;G.Fragment=qp;G.Profiler=Qp;G.PureComponent=$a;G.StrictMode=Yp;G.Suspense=tf;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uf;G.act=Fs;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=_s({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ja.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ps.call(t,u)&&!Ds.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:rr,type:e.type,key:o,ref:i,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Rp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zp,_context:e},e.Consumer=e};G.createElement=As;G.createFactory=function(e){var t=As.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:ef,render:e}};G.isValidElement=Ua;G.lazy=function(e){return{$$typeof:rf,_payload:{_status:-1,_result:e},_init:sf}};G.memo=function(e,t){return{$$typeof:nf,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};G.unstable_act=Fs;G.useCallback=function(e,t){return Te.current.useCallback(e,t)};G.useContext=function(e){return Te.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Te.current.useDeferredValue(e)};G.useEffect=function(e,t){return Te.current.useEffect(e,t)};G.useId=function(){return Te.current.useId()};G.useImperativeHandle=function(e,t,n){return Te.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Te.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Te.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Te.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Te.current.useReducer(e,t,n)};G.useRef=function(e){return Te.current.useRef(e)};G.useState=function(e){return Te.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Te.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Te.current.useTransition()};G.version="18.3.1"});var Wa=Rt((Dh,Is)=>{"use strict";Is.exports=Bs()});var Ks=Rt(Q=>{"use strict";function Ga(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<uo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function tt(e){return e.length===0?null:e[0]}function po(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>uo(s,n))u<o&&0>uo(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>uo(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function uo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?($s=performance,Q.unstable_now=function(){return $s.now()}):(Ha=Date,Os=Ha.now(),Q.unstable_now=function(){return Ha.now()-Os});var $s,Ha,Os,ut=[],Tt=[],cf=1,Ge=null,Ne=3,fo=!1,en=!1,ar=!1,Ws=typeof setTimeout=="function"?setTimeout:null,Hs=typeof clearTimeout=="function"?clearTimeout:null,js=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ka(e){for(var t=tt(Tt);t!==null;){if(t.callback===null)po(Tt);else if(t.startTime<=e)po(Tt),t.sortIndex=t.expirationTime,Ga(ut,t);else break;t=tt(Tt)}}function Xa(e){if(ar=!1,Ka(e),!en)if(tt(ut)!==null)en=!0,Ya(qa);else{var t=tt(Tt);t!==null&&Qa(Xa,t.startTime-e)}}function qa(e,t){en=!1,ar&&(ar=!1,Hs(ir),ir=-1),fo=!0;var n=Ne;try{for(Ka(t),Ge=tt(ut);Ge!==null&&(!(Ge.expirationTime>t)||e&&!Gs());){var r=Ge.callback;if(typeof r=="function"){Ge.callback=null,Ne=Ge.priorityLevel;var o=r(Ge.expirationTime<=t);t=Q.unstable_now(),typeof o=="function"?Ge.callback=o:Ge===tt(ut)&&po(ut),Ka(t)}else po(ut);Ge=tt(ut)}if(Ge!==null)var i=!0;else{var l=tt(Tt);l!==null&&Qa(Xa,l.startTime-t),i=!1}return i}finally{Ge=null,Ne=n,fo=!1}}var mo=!1,co=null,ir=-1,Js=5,Vs=-1;function Gs(){return!(Q.unstable_now()-Vs<Js)}function Ja(){if(co!==null){var e=Q.unstable_now();Vs=e;var t=!0;try{t=co(!0,e)}finally{t?or():(mo=!1,co=null)}}else mo=!1}var or;typeof js=="function"?or=function(){js(Ja)}:typeof MessageChannel<"u"?(Va=new MessageChannel,Us=Va.port2,Va.port1.onmessage=Ja,or=function(){Us.postMessage(null)}):or=function(){Ws(Ja,0)};var Va,Us;function Ya(e){co=e,mo||(mo=!0,or())}function Qa(e,t){ir=Ws(function(){e(Q.unstable_now())},t)}Q.unstable_IdlePriority=5;Q.unstable_ImmediatePriority=1;Q.unstable_LowPriority=4;Q.unstable_NormalPriority=3;Q.unstable_Profiling=null;Q.unstable_UserBlockingPriority=2;Q.unstable_cancelCallback=function(e){e.callback=null};Q.unstable_continueExecution=function(){en||fo||(en=!0,Ya(qa))};Q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Js=0<e?Math.floor(1e3/e):5};Q.unstable_getCurrentPriorityLevel=function(){return Ne};Q.unstable_getFirstCallbackNode=function(){return tt(ut)};Q.unstable_next=function(e){switch(Ne){case 1:case 2:case 3:var t=3;break;default:t=Ne}var n=Ne;Ne=t;try{return e()}finally{Ne=n}};Q.unstable_pauseExecution=function(){};Q.unstable_requestPaint=function(){};Q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=Ne;Ne=e;try{return t()}finally{Ne=n}};Q.unstable_scheduleCallback=function(e,t,n){var r=Q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:cf++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Ga(Tt,e),tt(ut)===null&&e===tt(Tt)&&(ar?(Hs(ir),ir=-1):ar=!0,Qa(Xa,n-r))):(e.sortIndex=o,Ga(ut,e),en||fo||(en=!0,Ya(qa))),e};Q.unstable_shouldYield=Gs;Q.unstable_wrapCallback=function(e){var t=Ne;return function(){var n=Ne;Ne=t;try{return e.apply(this,arguments)}finally{Ne=n}}}});var qs=Rt((Fh,Xs)=>{"use strict";Xs.exports=Ks()});var Rd=Rt(Ve=>{"use strict";var df=Wa(),He=qs();function E(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nc=new Set,zr={};function mn(e,t){Wn(e,t),Wn(e+"Capture",t)}function Wn(e,t){for(zr[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ki=Object.prototype.hasOwnProperty,pf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Qs={};function ff(e){return ki.call(Qs,e)?!0:ki.call(Ys,e)?!1:pf.test(e)?Qs[e]=!0:(Ys[e]=!0,!1)}function mf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function hf(e,t,n,r){if(t===null||typeof t>"u"||mf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function De(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ke[e]=new De(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ke[t]=new De(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ke[e]=new De(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ke[e]=new De(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ke[e]=new De(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ke[e]=new De(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ke[e]=new De(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ke[e]=new De(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ke[e]=new De(e,5,!1,e.toLowerCase(),null,!1,!1)});var pl=/[\-:]([a-z])/g;function fl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pl,fl);ke[t]=new De(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pl,fl);ke[t]=new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pl,fl);ke[t]=new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!1,!1)});ke.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ke[e]=new De(e,1,!1,e.toLowerCase(),null,!0,!0)});function ml(e,t,n,r){var o=ke.hasOwnProperty(t)?ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(hf(t,n,o,r)&&(n=null),r||o===null?ff(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),En=Symbol.for("react.fragment"),hl=Symbol.for("react.strict_mode"),bi=Symbol.for("react.profiler"),rc=Symbol.for("react.provider"),oc=Symbol.for("react.context"),gl=Symbol.for("react.forward_ref"),wi=Symbol.for("react.suspense"),Ni=Symbol.for("react.suspense_list"),vl=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ac=Symbol.for("react.offscreen"),Zs=Symbol.iterator;function lr(e){return e===null||typeof e!="object"?null:(e=Zs&&e[Zs]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Za;function hr(e){if(Za===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Za=t&&t[1]||""}return`
`+Za+e}var Ra=!1;function ei(e,t){if(!e||Ra)return"";Ra=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{Ra=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?hr(e):""}function gf(e){switch(e.tag){case 5:return hr(e.type);case 16:return hr("Lazy");case 13:return hr("Suspense");case 19:return hr("SuspenseList");case 0:case 2:case 15:return e=ei(e.type,!1),e;case 11:return e=ei(e.type.render,!1),e;case 1:return e=ei(e.type,!0),e;default:return""}}function Si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case En:return"Fragment";case Sn:return"Portal";case bi:return"Profiler";case hl:return"StrictMode";case wi:return"Suspense";case Ni:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oc:return(e.displayName||"Context")+".Consumer";case rc:return(e._context.displayName||"Context")+".Provider";case gl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case vl:return t=e.displayName||null,t!==null?t:Si(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return Si(e(t))}catch{}}return null}function vf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Si(t);case 8:return t===hl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Gt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yf(e){var t=ic(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function go(e){e._valueTracker||(e._valueTracker=yf(e))}function lc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ic(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ei(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Rs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Gt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function sc(e,t){t=t.checked,t!=null&&ml(e,"checked",t,!1)}function Ci(e,t){sc(e,t);var n=Gt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Mi(e,t.type,Gt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function eu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Mi(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var gr=Array.isArray;function Bn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Gt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function zi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(E(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function tu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(E(92));if(gr(n)){if(1<n.length)throw Error(E(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Gt(n)}}function uc(e,t){var n=Gt(t.value),r=Gt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vo,dc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function _r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xf=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){xf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var kf=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ti(e,t){if(t){if(kf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(E(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(E(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(E(61))}if(t.style!=null&&typeof t.style!="object")throw Error(E(62))}}function Li(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pi=null;function yl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Di=null,In=null,$n=null;function ru(e){if(e=Kr(e)){if(typeof Di!="function")throw Error(E(280));var t=e.stateNode;t&&(t=ya(t),Di(e.stateNode,e.type,t))}}function mc(e){In?$n?$n.push(e):$n=[e]:In=e}function hc(){if(In){var e=In,t=$n;if($n=In=null,ru(e),t)for(e=0;e<t.length;e++)ru(t[e])}}function gc(e,t){return e(t)}function vc(){}var ti=!1;function yc(e,t,n){if(ti)return e(t,n);ti=!0;try{return gc(e,t,n)}finally{ti=!1,(In!==null||$n!==null)&&(vc(),hc())}}function Tr(e,t){var n=e.stateNode;if(n===null)return null;var r=ya(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(E(231,t,typeof n));return n}var Ai=!1;if(bt)try{wn={},Object.defineProperty(wn,"passive",{get:function(){Ai=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Ai=!1}var wn;function bf(e,t,n,r,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var kr=!1,Vo=null,Go=!1,Fi=null,wf={onError:function(e){kr=!0,Vo=e}};function Nf(e,t,n,r,o,i,l,s,u){kr=!1,Vo=null,bf.apply(wf,arguments)}function Sf(e,t,n,r,o,i,l,s,u){if(Nf.apply(this,arguments),kr){if(kr){var c=Vo;kr=!1,Vo=null}else throw Error(E(198));Go||(Go=!0,Fi=c)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function xc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ou(e){if(hn(e)!==e)throw Error(E(188))}function Ef(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(E(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ou(o),e;if(i===r)return ou(o),t;i=i.sibling}throw Error(E(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?e:t}function kc(e){return e=Ef(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var wc=He.unstable_scheduleCallback,au=He.unstable_cancelCallback,Cf=He.unstable_shouldYield,Mf=He.unstable_requestPaint,se=He.unstable_now,zf=He.unstable_getCurrentPriorityLevel,xl=He.unstable_ImmediatePriority,Nc=He.unstable_UserBlockingPriority,Ko=He.unstable_NormalPriority,_f=He.unstable_LowPriority,Sc=He.unstable_IdlePriority,ma=null,ft=null;function Tf(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(ma,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Df,Lf=Math.log,Pf=Math.LN2;function Df(e){return e>>>=0,e===0?32:31-(Lf(e)/Pf|0)|0}var yo=64,xo=4194304;function vr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=vr(s):(i&=l,i!==0&&(r=vr(i)))}else l=n&~o,l!==0?r=vr(l):i!==0&&(r=vr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),o=1<<n,r|=e[n],t&=~o;return r}function Af(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ff(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-it(i),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=Af(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Bi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ec(){var e=yo;return yo<<=1,(yo&4194240)===0&&(yo=64),e}function ni(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function Bf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-it(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function kl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function Cc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Mc,bl,zc,_c,Tc,Ii=!1,ko=[],$t=null,Ot=null,jt=null,Lr=new Map,Pr=new Map,At=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function iu(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Lr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function sr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Kr(t),t!==null&&bl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $f(e,t,n,r,o){switch(t){case"focusin":return $t=sr($t,e,t,n,r,o),!0;case"dragenter":return Ot=sr(Ot,e,t,n,r,o),!0;case"mouseover":return jt=sr(jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Lr.set(i,sr(Lr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pr.set(i,sr(Pr.get(i)||null,e,t,n,r,o)),!0}return!1}function Lc(e){var t=rn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=xc(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){zc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$i(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Pi=r,n.target.dispatchEvent(r),Pi=null}else return t=Kr(n),t!==null&&bl(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Ao(e)&&n.delete(t)}function Of(){Ii=!1,$t!==null&&Ao($t)&&($t=null),Ot!==null&&Ao(Ot)&&(Ot=null),jt!==null&&Ao(jt)&&(jt=null),Lr.forEach(lu),Pr.forEach(lu)}function ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Ii||(Ii=!0,He.unstable_scheduleCallback(He.unstable_NormalPriority,Of)))}function Dr(e){function t(o){return ur(o,e)}if(0<ko.length){ur(ko[0],e);for(var n=1;n<ko.length;n++){var r=ko[n];r.blockedOn===e&&(r.blockedOn=null)}}for($t!==null&&ur($t,e),Ot!==null&&ur(Ot,e),jt!==null&&ur(jt,e),Lr.forEach(t),Pr.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Lc(n),n.blockedOn===null&&At.shift()}var On=Et.ReactCurrentBatchConfig,qo=!0;function jf(e,t,n,r){var o=X,i=On.transition;On.transition=null;try{X=1,wl(e,t,n,r)}finally{X=o,On.transition=i}}function Uf(e,t,n,r){var o=X,i=On.transition;On.transition=null;try{X=4,wl(e,t,n,r)}finally{X=o,On.transition=i}}function wl(e,t,n,r){if(qo){var o=$i(e,t,n,r);if(o===null)ui(e,t,r,Yo,n),iu(e,r);else if($f(o,e,t,n,r))r.stopPropagation();else if(iu(e,r),t&4&&-1<If.indexOf(e)){for(;o!==null;){var i=Kr(o);if(i!==null&&Mc(i),i=$i(e,t,n,r),i===null&&ui(e,t,r,Yo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ui(e,t,r,null,n)}}var Yo=null;function $i(e,t,n,r){if(Yo=null,e=yl(r),e=rn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=xc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yo=e,null}function Pc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zf()){case xl:return 1;case Nc:return 4;case Ko:case _f:return 16;case Sc:return 536870912;default:return 16}default:return 16}}var Bt=null,Nl=null,Fo=null;function Dc(){if(Fo)return Fo;var e,t=Nl,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Fo=o.slice(e,1<r?1-r:void 0)}function Bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bo(){return!0}function su(){return!1}function Je(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?bo:su,this.isPropagationStopped=su,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Je(qn),Gr=ie({},qn,{view:0,detail:0}),Wf=Je(Gr),ri,oi,cr,ha=ie({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:El,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cr&&(cr&&e.type==="mousemove"?(ri=e.screenX-cr.screenX,oi=e.screenY-cr.screenY):oi=ri=0,cr=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:oi}}),uu=Je(ha),Hf=ie({},ha,{dataTransfer:0}),Jf=Je(Hf),Vf=ie({},Gr,{relatedTarget:0}),ai=Je(Vf),Gf=ie({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Kf=Je(Gf),Xf=ie({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qf=Je(Xf),Yf=ie({},qn,{data:0}),cu=Je(Yf),Qf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function em(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rf[e])?!!t[e]:!1}function El(){return em}var tm=ie({},Gr,{key:function(e){if(e.key){var t=Qf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:El,charCode:function(e){return e.type==="keypress"?Bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nm=Je(tm),rm=ie({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=Je(rm),om=ie({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:El}),am=Je(om),im=ie({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lm=Je(im),sm=ie({},ha,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),um=Je(sm),cm=[9,13,27,32],Cl=bt&&"CompositionEvent"in window,br=null;bt&&"documentMode"in document&&(br=document.documentMode);var dm=bt&&"TextEvent"in window&&!br,Ac=bt&&(!Cl||br&&8<br&&11>=br),pu=" ",fu=!1;function Fc(e,t){switch(e){case"keyup":return cm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function pm(e,t){switch(e){case"compositionend":return Bc(t);case"keypress":return t.which!==32?null:(fu=!0,pu);case"textInput":return e=t.data,e===pu&&fu?null:e;default:return null}}function fm(e,t){if(Cn)return e==="compositionend"||!Cl&&Fc(e,t)?(e=Dc(),Fo=Nl=Bt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ac&&t.locale!=="ko"?null:t.data;default:return null}}var mm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mm[e.type]:t==="textarea"}function Ic(e,t,n,r){mc(r),t=Qo(t,"onChange"),0<t.length&&(n=new Sl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Ar=null;function hm(e){Xc(e,0)}function ga(e){var t=_n(e);if(lc(t))return e}function gm(e,t){if(e==="change")return t}var $c=!1;bt&&(bt?(No="oninput"in document,No||(ii=document.createElement("div"),ii.setAttribute("oninput","return;"),No=typeof ii.oninput=="function"),wo=No):wo=!1,$c=wo&&(!document.documentMode||9<document.documentMode));var wo,No,ii;function hu(){wr&&(wr.detachEvent("onpropertychange",Oc),Ar=wr=null)}function Oc(e){if(e.propertyName==="value"&&ga(Ar)){var t=[];Ic(t,Ar,e,yl(e)),yc(hm,t)}}function vm(e,t,n){e==="focusin"?(hu(),wr=t,Ar=n,wr.attachEvent("onpropertychange",Oc)):e==="focusout"&&hu()}function ym(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(Ar)}function xm(e,t){if(e==="click")return ga(t)}function km(e,t){if(e==="input"||e==="change")return ga(t)}function bm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var st=typeof Object.is=="function"?Object.is:bm;function Fr(e,t){if(st(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ki.call(t,o)||!st(e[o],t[o]))return!1}return!0}function gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,t){var n=gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gu(n)}}function jc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Uc(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function Ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function wm(e){var t=Uc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jc(n.ownerDocument.documentElement,n)){if(r!==null&&Ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=vu(n,i);var l=vu(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Nm=bt&&"documentMode"in document&&11>=document.documentMode,Mn=null,Oi=null,Nr=null,ji=!1;function yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ji||Mn==null||Mn!==Jo(r)||(r=Mn,"selectionStart"in r&&Ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Fr(Nr,r)||(Nr=r,r=Qo(Oi,"onSelect"),0<r.length&&(t=new Sl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mn)))}function So(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},li={},Wc={};bt&&(Wc=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function va(e){if(li[e])return li[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wc)return li[e]=t[n];return e}var Hc=va("animationend"),Jc=va("animationiteration"),Vc=va("animationstart"),Gc=va("transitionend"),Kc=new Map,xu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Kc.set(e,t),mn(t,[e])}for(Eo=0;Eo<xu.length;Eo++)Co=xu[Eo],ku=Co.toLowerCase(),bu=Co[0].toUpperCase()+Co.slice(1),Xt(ku,"on"+bu);var Co,ku,bu,Eo;Xt(Hc,"onAnimationEnd");Xt(Jc,"onAnimationIteration");Xt(Vc,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Gc,"onTransitionEnd");Wn("onMouseEnter",["mouseout","mouseover"]);Wn("onMouseLeave",["mouseout","mouseover"]);Wn("onPointerEnter",["pointerout","pointerover"]);Wn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sm=new Set("cancel close invalid load scroll toggle".split(" ").concat(yr));function wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Sf(r,t,void 0,e),e.currentTarget=null}function Xc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;wu(o,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;wu(o,s,c),i=u}}}if(Go)throw e=Fi,Go=!1,Fi=null,e}function ee(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+"__bubble";n.has(r)||(qc(t,e,2,!1),n.add(r))}function si(e,t,n){var r=0;t&&(r|=4),qc(n,e,r,t)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Mo]){e[Mo]=!0,nc.forEach(function(n){n!=="selectionchange"&&(Sm.has(n)||si(n,!1,e),si(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mo]||(t[Mo]=!0,si("selectionchange",!1,t))}}function qc(e,t,n,r){switch(Pc(t)){case 1:var o=jf;break;case 4:o=Uf;break;default:o=wl}n=o.bind(null,t,n,e),o=void 0,!Ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ui(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=rn(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}yc(function(){var c=i,p=yl(n),g=[];e:{var h=Kc.get(e);if(h!==void 0){var v=Sl,k=e;switch(e){case"keypress":if(Bo(n)===0)break e;case"keydown":case"keyup":v=nm;break;case"focusin":k="focus",v=ai;break;case"focusout":k="blur",v=ai;break;case"beforeblur":case"afterblur":v=ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=am;break;case Hc:case Jc:case Vc:v=Kf;break;case Gc:v=lm;break;case"scroll":v=Wf;break;case"wheel":v=um;break;case"copy":case"cut":case"paste":v=qf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=du}var x=(t&4)!==0,w=!x&&e==="scroll",m=x?h!==null?h+"Capture":null:h;x=[];for(var d=c,f;d!==null;){f=d;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,m!==null&&(y=Tr(d,m),y!=null&&x.push(Ir(d,y,f)))),w)break;d=d.return}0<x.length&&(h=new v(h,k,null,n,p),g.push({event:h,listeners:x}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Pi&&(k=n.relatedTarget||n.fromElement)&&(rn(k)||k[wt]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?rn(k):null,k!==null&&(w=hn(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(x=uu,y="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(x=du,y="onPointerLeave",m="onPointerEnter",d="pointer"),w=v==null?h:_n(v),f=k==null?h:_n(k),h=new x(y,d+"leave",v,n,p),h.target=w,h.relatedTarget=f,y=null,rn(p)===c&&(x=new x(m,d+"enter",k,n,p),x.target=f,x.relatedTarget=w,y=x),w=y,v&&k)t:{for(x=v,m=k,d=0,f=x;f;f=Nn(f))d++;for(f=0,y=m;y;y=Nn(y))f++;for(;0<d-f;)x=Nn(x),d--;for(;0<f-d;)m=Nn(m),f--;for(;d--;){if(x===m||m!==null&&x===m.alternate)break t;x=Nn(x),m=Nn(m)}x=null}else x=null;v!==null&&Nu(g,h,v,x,!1),k!==null&&w!==null&&Nu(g,w,k,x,!0)}}e:{if(h=c?_n(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var N=gm;else if(mu(h))if($c)N=km;else{N=ym;var b=vm}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=xm);if(N&&(N=N(e,c))){Ic(g,N,n,p);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Mi(h,"number",h.value)}switch(b=c?_n(c):window,e){case"focusin":(mu(b)||b.contentEditable==="true")&&(Mn=b,Oi=c,Nr=null);break;case"focusout":Nr=Oi=Mn=null;break;case"mousedown":ji=!0;break;case"contextmenu":case"mouseup":case"dragend":ji=!1,yu(g,n,p);break;case"selectionchange":if(Nm)break;case"keydown":case"keyup":yu(g,n,p)}var S;if(Cl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Cn?Fc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ac&&n.locale!=="ko"&&(Cn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Cn&&(S=Dc()):(Bt=p,Nl="value"in Bt?Bt.value:Bt.textContent,Cn=!0)),b=Qo(c,z),0<b.length&&(z=new cu(z,e,null,n,p),g.push({event:z,listeners:b}),S?z.data=S:(S=Bc(n),S!==null&&(z.data=S)))),(S=dm?pm(e,n):fm(e,n))&&(c=Qo(c,"onBeforeInput"),0<c.length&&(p=new cu("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:c}),p.data=S))}Xc(g,t)})}function Ir(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Tr(e,n),i!=null&&r.unshift(Ir(e,i,o)),i=Tr(e,t),i!=null&&r.push(Ir(e,i,o))),e=e.return}return r}function Nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=Tr(n,i),u!=null&&l.unshift(Ir(n,u,s))):o||(u=Tr(n,i),u!=null&&l.push(Ir(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Em=/\r\n?/g,Cm=/\u0000|\uFFFD/g;function Su(e){return(typeof e=="string"?e:""+e).replace(Em,`
`).replace(Cm,"")}function zo(e,t,n){if(t=Su(t),Su(e)!==t&&n)throw Error(E(425))}function Zo(){}var Ui=null,Wi=null;function Hi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,Mm=typeof clearTimeout=="function"?clearTimeout:void 0,Eu=typeof Promise=="function"?Promise:void 0,zm=typeof queueMicrotask=="function"?queueMicrotask:typeof Eu<"u"?function(e){return Eu.resolve(null).then(e).catch(_m)}:Ji;function _m(e){setTimeout(function(){throw e})}function ci(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),pt="__reactFiber$"+Yn,$r="__reactProps$"+Yn,wt="__reactContainer$"+Yn,Vi="__reactEvents$"+Yn,Tm="__reactListeners$"+Yn,Lm="__reactHandles$"+Yn;function rn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[pt])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[pt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(E(33))}function ya(e){return e[$r]||null}var Gi=[],Tn=-1;function qt(e){return{current:e}}function te(e){0>Tn||(e.current=Gi[Tn],Gi[Tn]=null,Tn--)}function Z(e,t){Tn++,Gi[Tn]=e.current,e.current=t}var Kt={},Me=qt(Kt),Be=qt(!1),un=Kt;function Hn(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Ro(){te(Be),te(Me)}function Mu(e,t,n){if(Me.current!==Kt)throw Error(E(168));Z(Me,t),Z(Be,n)}function Yc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(E(108,vf(e)||"Unknown",o));return ie({},n,r)}function ea(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,un=Me.current,Z(Me,e),Z(Be,Be.current),!0}function zu(e,t,n){var r=e.stateNode;if(!r)throw Error(E(169));n?(e=Yc(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,te(Be),te(Me),Z(Me,e)):te(Be),Z(Be,n)}var vt=null,xa=!1,di=!1;function Qc(e){vt===null?vt=[e]:vt.push(e)}function Pm(e){xa=!0,Qc(e)}function Yt(){if(!di&&vt!==null){di=!0;var e=0,t=X;try{var n=vt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}vt=null,xa=!1}catch(o){throw vt!==null&&(vt=vt.slice(e+1)),wc(xl,Yt),o}finally{X=t,di=!1}}return null}var Ln=[],Pn=0,ta=null,na=0,Ke=[],Xe=0,cn=null,yt=1,xt="";function tn(e,t){Ln[Pn++]=na,Ln[Pn++]=ta,ta=e,na=t}function Zc(e,t,n){Ke[Xe++]=yt,Ke[Xe++]=xt,Ke[Xe++]=cn,cn=e;var r=yt;e=xt;var o=32-it(r)-1;r&=~(1<<o),n+=1;var i=32-it(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,yt=1<<32-it(t)+o|n<<o|r,xt=i+e}else yt=1<<i|n<<o|r,xt=e}function zl(e){e.return!==null&&(tn(e,1),Zc(e,1,0))}function _l(e){for(;e===ta;)ta=Ln[--Pn],Ln[Pn]=null,na=Ln[--Pn],Ln[Pn]=null;for(;e===cn;)cn=Ke[--Xe],Ke[Xe]=null,xt=Ke[--Xe],Ke[Xe]=null,yt=Ke[--Xe],Ke[Xe]=null}var We=null,Ue=null,ne=!1,at=null;function Rc(e,t){var n=qe(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,We=e,Ue=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,We=e,Ue=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:yt,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qe(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,We=e,Ue=null,!0):!1;default:return!1}}function Ki(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xi(e){if(ne){var t=Ue;if(t){var n=t;if(!_u(e,t)){if(Ki(e))throw Error(E(418));t=Ut(n.nextSibling);var r=We;t&&_u(e,t)?Rc(r,n):(e.flags=e.flags&-4097|2,ne=!1,We=e)}}else{if(Ki(e))throw Error(E(418));e.flags=e.flags&-4097|2,ne=!1,We=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;We=e}function _o(e){if(e!==We)return!1;if(!ne)return Tu(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hi(e.type,e.memoizedProps)),t&&(t=Ue)){if(Ki(e))throw ed(),Error(E(418));for(;t;)Rc(e,t),t=Ut(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ue=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ue=null}}else Ue=We?Ut(e.stateNode.nextSibling):null;return!0}function ed(){for(var e=Ue;e;)e=Ut(e.nextSibling)}function Jn(){Ue=We=null,ne=!1}function Tl(e){at===null?at=[e]:at.push(e)}var Dm=Et.ReactCurrentBatchConfig;function dr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,e))}return e}function To(e,t){throw e=Object.prototype.toString.call(t),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lu(e){var t=e._init;return t(e._payload)}function td(e){function t(m,d){if(e){var f=m.deletions;f===null?(m.deletions=[d],m.flags|=16):f.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function o(m,d){return m=Vt(m,d),m.index=0,m.sibling=null,m}function i(m,d,f){return m.index=f,e?(f=m.alternate,f!==null?(f=f.index,f<d?(m.flags|=2,d):f):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function s(m,d,f,y){return d===null||d.tag!==6?(d=yi(f,m.mode,y),d.return=m,d):(d=o(d,f),d.return=m,d)}function u(m,d,f,y){var N=f.type;return N===En?p(m,d,f.props.children,y,f.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pt&&Lu(N)===d.type)?(y=o(d,f.props),y.ref=dr(m,d,f),y.return=m,y):(y=Ho(f.type,f.key,f.props,null,m.mode,y),y.ref=dr(m,d,f),y.return=m,y)}function c(m,d,f,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==f.containerInfo||d.stateNode.implementation!==f.implementation?(d=xi(f,m.mode,y),d.return=m,d):(d=o(d,f.children||[]),d.return=m,d)}function p(m,d,f,y,N){return d===null||d.tag!==7?(d=sn(f,m.mode,y,N),d.return=m,d):(d=o(d,f),d.return=m,d)}function g(m,d,f){if(typeof d=="string"&&d!==""||typeof d=="number")return d=yi(""+d,m.mode,f),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ho:return f=Ho(d.type,d.key,d.props,null,m.mode,f),f.ref=dr(m,null,d),f.return=m,f;case Sn:return d=xi(d,m.mode,f),d.return=m,d;case Pt:var y=d._init;return g(m,y(d._payload),f)}if(gr(d)||lr(d))return d=sn(d,m.mode,f,null),d.return=m,d;To(m,d)}return null}function h(m,d,f,y){var N=d!==null?d.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(m,d,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ho:return f.key===N?u(m,d,f,y):null;case Sn:return f.key===N?c(m,d,f,y):null;case Pt:return N=f._init,h(m,d,N(f._payload),y)}if(gr(f)||lr(f))return N!==null?null:p(m,d,f,y,null);To(m,f)}return null}function v(m,d,f,y,N){if(typeof y=="string"&&y!==""||typeof y=="number")return m=m.get(f)||null,s(d,m,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ho:return m=m.get(y.key===null?f:y.key)||null,u(d,m,y,N);case Sn:return m=m.get(y.key===null?f:y.key)||null,c(d,m,y,N);case Pt:var b=y._init;return v(m,d,f,b(y._payload),N)}if(gr(y)||lr(y))return m=m.get(f)||null,p(d,m,y,N,null);To(d,y)}return null}function k(m,d,f,y){for(var N=null,b=null,S=d,z=d=0,j=null;S!==null&&z<f.length;z++){S.index>z?(j=S,S=null):j=S.sibling;var L=h(m,S,f[z],y);if(L===null){S===null&&(S=j);break}e&&S&&L.alternate===null&&t(m,S),d=i(L,d,z),b===null?N=L:b.sibling=L,b=L,S=j}if(z===f.length)return n(m,S),ne&&tn(m,z),N;if(S===null){for(;z<f.length;z++)S=g(m,f[z],y),S!==null&&(d=i(S,d,z),b===null?N=S:b.sibling=S,b=S);return ne&&tn(m,z),N}for(S=r(m,S);z<f.length;z++)j=v(S,m,z,f[z],y),j!==null&&(e&&j.alternate!==null&&S.delete(j.key===null?z:j.key),d=i(j,d,z),b===null?N=j:b.sibling=j,b=j);return e&&S.forEach(function(D){return t(m,D)}),ne&&tn(m,z),N}function x(m,d,f,y){var N=lr(f);if(typeof N!="function")throw Error(E(150));if(f=N.call(f),f==null)throw Error(E(151));for(var b=N=null,S=d,z=d=0,j=null,L=f.next();S!==null&&!L.done;z++,L=f.next()){S.index>z?(j=S,S=null):j=S.sibling;var D=h(m,S,L.value,y);if(D===null){S===null&&(S=j);break}e&&S&&D.alternate===null&&t(m,S),d=i(D,d,z),b===null?N=D:b.sibling=D,b=D,S=j}if(L.done)return n(m,S),ne&&tn(m,z),N;if(S===null){for(;!L.done;z++,L=f.next())L=g(m,L.value,y),L!==null&&(d=i(L,d,z),b===null?N=L:b.sibling=L,b=L);return ne&&tn(m,z),N}for(S=r(m,S);!L.done;z++,L=f.next())L=v(S,m,z,L.value,y),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?z:L.key),d=i(L,d,z),b===null?N=L:b.sibling=L,b=L);return e&&S.forEach(function(J){return t(m,J)}),ne&&tn(m,z),N}function w(m,d,f,y){if(typeof f=="object"&&f!==null&&f.type===En&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ho:e:{for(var N=f.key,b=d;b!==null;){if(b.key===N){if(N=f.type,N===En){if(b.tag===7){n(m,b.sibling),d=o(b,f.props.children),d.return=m,m=d;break e}}else if(b.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pt&&Lu(N)===b.type){n(m,b.sibling),d=o(b,f.props),d.ref=dr(m,b,f),d.return=m,m=d;break e}n(m,b);break}else t(m,b);b=b.sibling}f.type===En?(d=sn(f.props.children,m.mode,y,f.key),d.return=m,m=d):(y=Ho(f.type,f.key,f.props,null,m.mode,y),y.ref=dr(m,d,f),y.return=m,m=y)}return l(m);case Sn:e:{for(b=f.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){n(m,d.sibling),d=o(d,f.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=xi(f,m.mode,y),d.return=m,m=d}return l(m);case Pt:return b=f._init,w(m,d,b(f._payload),y)}if(gr(f))return k(m,d,f,y);if(lr(f))return x(m,d,f,y);To(m,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,d!==null&&d.tag===6?(n(m,d.sibling),d=o(d,f),d.return=m,m=d):(n(m,d),d=yi(f,m.mode,y),d.return=m,m=d),l(m)):n(m,d)}return w}var Vn=td(!0),nd=td(!1),ra=qt(null),oa=null,Dn=null,Ll=null;function Pl(){Ll=Dn=oa=null}function Dl(e){var t=ra.current;te(ra),e._currentValue=t}function qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){oa=e,Ll=Dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Fe=!0),e.firstContext=null)}function Qe(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},Dn===null){if(oa===null)throw Error(E(308));Dn=e,oa.dependencies={lanes:0,firstContext:e}}else Dn=Dn.next=e;return t}var on=null;function Al(e){on===null?on=[e]:on.push(e)}function rd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Al(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function od(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(K&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Al(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kl(e,n)}}function Pu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function aa(e,t,n,r){var o=e.updateQueue;Dt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(i!==null){var g=o.baseState;l=0,p=c=u=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,x=s;switch(h=t,v=n,x.tag){case 1:if(k=x.payload,typeof k=="function"){g=k.call(v,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,h=typeof k=="function"?k.call(v,g,h):k,h==null)break e;g=ie({},g,h);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=v,u=g):p=p.next=v,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(u=g),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=g}}function Du(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(E(191,o));o.call(r)}}}var Xr={},mt=qt(Xr),Or=qt(Xr),jr=qt(Xr);function an(e){if(e===Xr)throw Error(E(174));return e}function Bl(e,t){switch(Z(jr,t),Z(Or,e),Z(mt,Xr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_i(t,e)}te(mt),Z(mt,t)}function Gn(){te(mt),te(Or),te(jr)}function ad(e){an(jr.current);var t=an(mt.current),n=_i(t,e.type);t!==n&&(Z(Or,e),Z(mt,n))}function Il(e){Or.current===e&&(te(mt),te(Or))}var oe=qt(0);function ia(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pi=[];function $l(){for(var e=0;e<pi.length;e++)pi[e]._workInProgressVersionPrimary=null;pi.length=0}var $o=Et.ReactCurrentDispatcher,fi=Et.ReactCurrentBatchConfig,dn=0,ae=null,fe=null,he=null,la=!1,Sr=!1,Ur=0,Am=0;function Se(){throw Error(E(321))}function Ol(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!st(e[n],t[n]))return!1;return!0}function jl(e,t,n,r,o,i){if(dn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,$o.current=e===null||e.memoizedState===null?$m:Om,e=n(r,o),Sr){i=0;do{if(Sr=!1,Ur=0,25<=i)throw Error(E(301));i+=1,he=fe=null,t.updateQueue=null,$o.current=jm,e=n(r,o)}while(Sr)}if($o.current=sa,t=fe!==null&&fe.next!==null,dn=0,he=fe=ae=null,la=!1,t)throw Error(E(300));return e}function Ul(){var e=Ur!==0;return Ur=0,e}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?ae.memoizedState=he=e:he=he.next=e,he}function Ze(){if(fe===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=he===null?ae.memoizedState:he.next;if(t!==null)he=t,fe=e;else{if(e===null)throw Error(E(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},he===null?ae.memoizedState=he=e:he=he.next=e}return he}function Wr(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=fe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var p=c.lane;if((dn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,ae.lanes|=p,pn|=p}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,st(r,t.memoizedState)||(Fe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ae.lanes|=i,pn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function hi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);st(i,t.memoizedState)||(Fe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function id(){}function ld(e,t){var n=ae,r=Ze(),o=t(),i=!st(r.memoizedState,o);if(i&&(r.memoizedState=o,Fe=!0),r=r.queue,Wl(cd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,Hr(9,ud.bind(null,n,r,o,t),void 0,null),ge===null)throw Error(E(349));(dn&30)!==0||sd(n,t,o)}return o}function sd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ud(e,t,n,r){t.value=n,t.getSnapshot=r,dd(t)&&pd(e)}function cd(e,t,n){return n(function(){dd(t)&&pd(e)})}function dd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!st(e,n)}catch{return!0}}function pd(e){var t=Nt(e,1);t!==null&&lt(t,e,1,-1)}function Au(e){var t=dt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wr,lastRenderedState:e},t.queue=e,e=e.dispatch=Im.bind(null,ae,e),[t.memoizedState,e]}function Hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fd(){return Ze().memoizedState}function Oo(e,t,n,r){var o=dt();ae.flags|=e,o.memoizedState=Hr(1|t,n,void 0,r===void 0?null:r)}function ka(e,t,n,r){var o=Ze();r=r===void 0?null:r;var i=void 0;if(fe!==null){var l=fe.memoizedState;if(i=l.destroy,r!==null&&Ol(r,l.deps)){o.memoizedState=Hr(t,n,i,r);return}}ae.flags|=e,o.memoizedState=Hr(1|t,n,i,r)}function Fu(e,t){return Oo(8390656,8,e,t)}function Wl(e,t){return ka(2048,8,e,t)}function md(e,t){return ka(4,2,e,t)}function hd(e,t){return ka(4,4,e,t)}function gd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vd(e,t,n){return n=n!=null?n.concat([e]):null,ka(4,4,gd.bind(null,t,e),n)}function Hl(){}function yd(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ol(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xd(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ol(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function kd(e,t,n){return(dn&21)===0?(e.baseState&&(e.baseState=!1,Fe=!0),e.memoizedState=n):(st(n,t)||(n=Ec(),ae.lanes|=n,pn|=n,e.baseState=!0),t)}function Fm(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=fi.transition;fi.transition={};try{e(!1),t()}finally{X=n,fi.transition=r}}function bd(){return Ze().memoizedState}function Bm(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},wd(e))Nd(t,n);else if(n=rd(e,t,n,r),n!==null){var o=Pe();lt(n,e,r,o),Sd(n,t,r)}}function Im(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(wd(e))Nd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,st(s,l)){var u=t.interleaved;u===null?(o.next=o,Al(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=rd(e,t,o,r),n!==null&&(o=Pe(),lt(n,e,r,o),Sd(n,t,r))}}function wd(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Nd(e,t){Sr=la=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,kl(e,n)}}var sa={readContext:Qe,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useInsertionEffect:Se,useLayoutEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useMutableSource:Se,useSyncExternalStore:Se,useId:Se,unstable_isNewReconciler:!1},$m={readContext:Qe,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:Qe,useEffect:Fu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Oo(4194308,4,gd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Oo(4,2,e,t)},useMemo:function(e,t){var n=dt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bm.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:Au,useDebugValue:Hl,useDeferredValue:function(e){return dt().memoizedState=e},useTransition:function(){var e=Au(!1),t=e[0];return e=Fm.bind(null,e[1]),dt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,o=dt();if(ne){if(n===void 0)throw Error(E(407));n=n()}else{if(n=t(),ge===null)throw Error(E(349));(dn&30)!==0||sd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Fu(cd.bind(null,r,i,e),[e]),r.flags|=2048,Hr(9,ud.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=dt(),t=ge.identifierPrefix;if(ne){var n=xt,r=yt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ur++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Am++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Om={readContext:Qe,useCallback:yd,useContext:Qe,useEffect:Wl,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:xd,useReducer:mi,useRef:fd,useState:function(){return mi(Wr)},useDebugValue:Hl,useDeferredValue:function(e){var t=Ze();return kd(t,fe.memoizedState,e)},useTransition:function(){var e=mi(Wr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:bd,unstable_isNewReconciler:!1},jm={readContext:Qe,useCallback:yd,useContext:Qe,useEffect:Wl,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:xd,useReducer:hi,useRef:fd,useState:function(){return hi(Wr)},useDebugValue:Hl,useDeferredValue:function(e){var t=Ze();return fe===null?t.memoizedState=e:kd(t,fe.memoizedState,e)},useTransition:function(){var e=hi(Wr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:id,useSyncExternalStore:ld,useId:bd,unstable_isNewReconciler:!1};function rt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ba={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Jt(e),i=kt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(lt(t,e,o,r),Io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pe(),o=Jt(e),i=kt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Wt(e,i,o),t!==null&&(lt(t,e,o,r),Io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pe(),r=Jt(e),o=kt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(lt(t,e,r,n),Io(t,e,r))}};function Bu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Fr(n,r)||!Fr(o,i):!0}function Ed(e,t,n){var r=!1,o=Kt,i=t.contextType;return typeof i=="object"&&i!==null?i=Qe(i):(o=Ie(t)?un:Me.current,r=t.contextTypes,i=(r=r!=null)?Hn(e,o):Kt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ba,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Iu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ba.enqueueReplaceState(t,t.state,null)}function Qi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Fl(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Qe(i):(i=Ie(t)?un:Me.current,o.context=Hn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Yi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ba.enqueueReplaceState(o,o.state,null),aa(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Kn(e,t){try{var n="",r=t;do n+=gf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function gi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Um=typeof WeakMap=="function"?WeakMap:Map;function Cd(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ca||(ca=!0,sl=r),Zi(e,t)},n}function Md(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Zi(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function $u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Um;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=t0.bind(null,e,t,n),t.then(e,e))}function Ou(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ju(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Wm=Et.ReactCurrentOwner,Fe=!1;function Le(e,t,n,r){t.child=e===null?nd(t,null,n,r):Vn(t,e.child,n,r)}function Uu(e,t,n,r,o){n=n.render;var i=t.ref;return jn(t,o),r=jl(e,t,n,r,i,o),n=Ul(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(ne&&n&&zl(t),t.flags|=1,Le(e,t,r,o),t.child)}function Wu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Ql(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,zd(e,t,i,r,o)):(e=Ho(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Fr,n(l,r)&&e.ref===t.ref)return St(e,t,o)}return t.flags|=1,e=Vt(i,r),e.ref=t.ref,e.return=t,t.child=e}function zd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Fr(i,r)&&e.ref===t.ref)if(Fe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Fe=!0);else return t.lanes=e.lanes,St(e,t,o)}return Ri(e,t,n,r,o)}function _d(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Fn,je),je|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Z(Fn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Z(Fn,je),je|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Z(Fn,je),je|=r;return Le(e,t,o,n),t.child}function Td(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ri(e,t,n,r,o){var i=Ie(n)?un:Me.current;return i=Hn(t,i),jn(t,o),n=jl(e,t,n,r,i,o),r=Ul(),e!==null&&!Fe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,St(e,t,o)):(ne&&r&&zl(t),t.flags|=1,Le(e,t,n,o),t.child)}function Hu(e,t,n,r,o){if(Ie(n)){var i=!0;ea(t)}else i=!1;if(jn(t,o),t.stateNode===null)jo(e,t),Ed(t,n,r),Qi(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qe(c):(c=Ie(n)?un:Me.current,c=Hn(t,c));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&Iu(t,l,r,c),Dt=!1;var h=t.memoizedState;l.state=h,aa(t,r,l,o),u=t.memoizedState,s!==r||h!==u||Be.current||Dt?(typeof p=="function"&&(Yi(t,n,p,r),u=t.memoizedState),(s=Dt||Bu(t,n,s,r,h,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,od(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:rt(t.type,s),l.props=c,g=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Qe(u):(u=Ie(n)?un:Me.current,u=Hn(t,u));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||h!==u)&&Iu(t,l,r,u),Dt=!1,h=t.memoizedState,l.state=h,aa(t,r,l,o);var k=t.memoizedState;s!==g||h!==k||Be.current||Dt?(typeof v=="function"&&(Yi(t,n,v,r),k=t.memoizedState),(c=Dt||Bu(t,n,c,r,h,k,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return el(e,t,n,r,i,o)}function el(e,t,n,r,o,i){Td(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&zu(t,n,!1),St(e,t,i);r=t.stateNode,Wm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Vn(t,e.child,null,i),t.child=Vn(t,null,s,i)):Le(e,t,s,i),t.memoizedState=r.state,o&&zu(t,n,!0),t.child}function Ld(e){var t=e.stateNode;t.pendingContext?Mu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Mu(e,t.context,!1),Bl(e,t.containerInfo)}function Ju(e,t,n,r,o){return Jn(),Tl(o),t.flags|=256,Le(e,t,n,r),t.child}var tl={dehydrated:null,treeContext:null,retryLane:0};function nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Pd(e,t,n){var r=t.pendingProps,o=oe.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Z(oe,o&1),e===null)return Xi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Sa(l,r,0,null),e=sn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=nl(n),t.memoizedState=tl,e):Jl(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Hm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Vt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Vt(s,i):(i=sn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?nl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=tl,r}return i=e.child,e=i.sibling,r=Vt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Jl(e,t){return t=Sa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Lo(e,t,n,r){return r!==null&&Tl(r),Vn(t,e.child,null,n),e=Jl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Hm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=gi(Error(E(422))),Lo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Sa({mode:"visible",children:r.children},o,0,null),i=sn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Vn(t,e.child,null,l),t.child.memoizedState=nl(l),t.memoizedState=tl,i);if((t.mode&1)===0)return Lo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(E(419)),r=gi(i,r,void 0),Lo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Fe||s){if(r=ge,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),lt(r,e,o,-1))}return Yl(),r=gi(Error(E(421))),Lo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=n0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ue=Ut(o.nextSibling),We=t,ne=!0,at=null,e!==null&&(Ke[Xe++]=yt,Ke[Xe++]=xt,Ke[Xe++]=cn,yt=e.id,xt=e.overflow,cn=t),t=Jl(t,r.children),t.flags|=4096,t)}function Vu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qi(e.return,t,n)}function vi(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Dd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Le(e,t,r.children,n),r=oe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vu(e,n,t);else if(e.tag===19)Vu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Z(oe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ia(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),vi(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ia(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}vi(t,!0,n,null,i);break;case"together":vi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function St(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(E(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jm(e,t,n){switch(t.tag){case 3:Ld(t),Jn();break;case 5:ad(t);break;case 1:Ie(t.type)&&ea(t);break;case 4:Bl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;Z(ra,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Z(oe,oe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Pd(e,t,n):(Z(oe,oe.current&1),e=St(e,t,n),e!==null?e.sibling:null);Z(oe,oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Dd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Z(oe,oe.current),r)break;return null;case 22:case 23:return t.lanes=0,_d(e,t,n)}return St(e,t,n)}var Ad,rl,Fd,Bd;Ad=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rl=function(){};Fd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,an(mt.current);var i=null;switch(n){case"input":o=Ei(e,o),r=Ei(e,r),i=[];break;case"select":o=ie({},o,{value:void 0}),r=ie({},r,{value:void 0}),i=[];break;case"textarea":o=zi(e,o),r=zi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Zo)}Ti(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(zr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(zr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ee("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Bd=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vm(e,t,n){var r=t.pendingProps;switch(_l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ie(t.type)&&Ro(),Ee(t),null;case 3:return r=t.stateNode,Gn(),te(Be),te(Me),$l(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_o(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,at!==null&&(dl(at),at=null))),rl(e,t),Ee(t),null;case 5:Il(t);var o=an(jr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(E(166));return Ee(t),null}if(e=an(mt.current),_o(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pt]=t,r[$r]=i,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(o=0;o<yr.length;o++)ee(yr[o],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Rs(r,i),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ee("invalid",r);break;case"textarea":tu(r,i),ee("invalid",r)}Ti(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&zo(r.textContent,s,e),o=["children",""+s]):zr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":go(r),eu(r,i,!0);break;case"textarea":go(r),nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Zo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[pt]=t,e[$r]=r,Ad(e,t,!1,!1),t.stateNode=e;e:{switch(l=Li(n,r),n){case"dialog":ee("cancel",e),ee("close",e),o=r;break;case"iframe":case"object":case"embed":ee("load",e),o=r;break;case"video":case"audio":for(o=0;o<yr.length;o++)ee(yr[o],e);o=r;break;case"source":ee("error",e),o=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),o=r;break;case"details":ee("toggle",e),o=r;break;case"input":Rs(e,r),o=Ei(e,r),ee("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ie({},r,{value:void 0}),ee("invalid",e);break;case"textarea":tu(e,r),o=zi(e,r),ee("invalid",e);break;default:o=r}Ti(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?fc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&dc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&_r(e,u):typeof u=="number"&&_r(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(zr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ee("scroll",e):u!=null&&ml(e,i,u,l))}switch(n){case"input":go(e),eu(e,r,!1);break;case"textarea":go(e),nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Gt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Bn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Bn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Bd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(E(166));if(n=an(jr.current),an(mt.current),_o(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(i=r.nodeValue!==n)&&(e=We,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return Ee(t),null;case 13:if(te(oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Ue!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ed(),Jn(),t.flags|=98560,i=!1;else if(i=_o(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(E(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(E(317));i[pt]=t}else Jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else at!==null&&(dl(at),at=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(oe.current&1)!==0?me===0&&(me=3):Yl())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Gn(),rl(e,t),e===null&&Br(t.stateNode.containerInfo),Ee(t),null;case 10:return Dl(t.type._context),Ee(t),null;case 17:return Ie(t.type)&&Ro(),Ee(t),null;case 19:if(te(oe),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)pr(i,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ia(e),l!==null){for(t.flags|=128,pr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Z(oe,oe.current&1|2),t.child}e=e.sibling}i.tail!==null&&se()>Xn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ia(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ne)return Ee(t),null}else 2*se()-i.renderingStartTime>Xn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=se(),t.sibling=null,n=oe.current,Z(oe,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return ql(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(je&1073741824)!==0&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(E(156,t.tag))}function Gm(e,t){switch(_l(t),t.tag){case 1:return Ie(t.type)&&Ro(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Gn(),te(Be),te(Me),$l(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Il(t),null;case 13:if(te(oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(E(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(oe),null;case 4:return Gn(),null;case 10:return Dl(t.type._context),null;case 22:case 23:return ql(),null;case 24:return null;default:return null}}var Po=!1,Ce=!1,Km=typeof WeakSet=="function"?WeakSet:Set,P=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function ol(e,t,n){try{n()}catch(r){le(e,t,r)}}var Gu=!1;function Xm(e,t){if(Ui=qo,e=Uc(),Ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,p=0,g=e,h=null;t:for(;;){for(var v;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)h=g,g=v;for(;;){if(g===e)break t;if(h===n&&++c===o&&(s=l),h===i&&++p===r&&(u=l),(v=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Wi={focusedElem:e,selectionRange:n},qo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,w=k.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:rt(t.type,x),w);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){le(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=Gu,Gu=!1,k}function Er(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ol(t,n,i)}o=o.next}while(o!==r)}}function wa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function al(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function Id(e){var t=e.alternate;t!==null&&(e.alternate=null,Id(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[$r],delete t[Vi],delete t[Tm],delete t[Lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $d(e){return e.tag===5||e.tag===3||e.tag===4}function Ku(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function il(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Zo));else if(r!==4&&(e=e.child,e!==null))for(il(e,t,n),e=e.sibling;e!==null;)il(e,t,n),e=e.sibling}function ll(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ll(e,t,n),e=e.sibling;e!==null;)ll(e,t,n),e=e.sibling}var ye=null,ot=!1;function Lt(e,t,n){for(n=n.child;n!==null;)Od(e,t,n),n=n.sibling}function Od(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(ma,n)}catch{}switch(n.tag){case 5:Ce||An(n,t);case 6:var r=ye,o=ot;ye=null,Lt(e,t,n),ye=r,ot=o,ye!==null&&(ot?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ot?(e=ye,n=n.stateNode,e.nodeType===8?ci(e.parentNode,n):e.nodeType===1&&ci(e,n),Dr(e)):ci(ye,n.stateNode));break;case 4:r=ye,o=ot,ye=n.stateNode.containerInfo,ot=!0,Lt(e,t,n),ye=r,ot=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&ol(n,t,l),o=o.next}while(o!==r)}Lt(e,t,n);break;case 1:if(!Ce&&(An(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){le(n,t,s)}Lt(e,t,n);break;case 21:Lt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Lt(e,t,n),Ce=r):Lt(e,t,n);break;default:Lt(e,t,n)}}function Xu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Km),t.forEach(function(r){var o=r0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ye=s.stateNode,ot=!1;break e;case 3:ye=s.stateNode.containerInfo,ot=!0;break e;case 4:ye=s.stateNode.containerInfo,ot=!0;break e}s=s.return}if(ye===null)throw Error(E(160));Od(i,l,o),ye=null,ot=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){le(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jd(t,e),t=t.sibling}function jd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(nt(t,e),ct(e),r&4){try{Er(3,e,e.return),wa(3,e)}catch(x){le(e,e.return,x)}try{Er(5,e,e.return)}catch(x){le(e,e.return,x)}}break;case 1:nt(t,e),ct(e),r&512&&n!==null&&An(n,n.return);break;case 5:if(nt(t,e),ct(e),r&512&&n!==null&&An(n,n.return),e.flags&32){var o=e.stateNode;try{_r(o,"")}catch(x){le(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&sc(o,i),Li(s,l);var c=Li(s,i);for(l=0;l<u.length;l+=2){var p=u[l],g=u[l+1];p==="style"?fc(o,g):p==="dangerouslySetInnerHTML"?dc(o,g):p==="children"?_r(o,g):ml(o,p,g,c)}switch(s){case"input":Ci(o,i);break;case"textarea":uc(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?Bn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?Bn(o,!!i.multiple,i.defaultValue,!0):Bn(o,!!i.multiple,i.multiple?[]:"",!1))}o[$r]=i}catch(x){le(e,e.return,x)}}break;case 6:if(nt(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(E(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){le(e,e.return,x)}}break;case 3:if(nt(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(x){le(e,e.return,x)}break;case 4:nt(t,e),ct(e);break;case 13:nt(t,e),ct(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Kl=se())),r&4&&Xu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(c=Ce)||p,nt(t,e),Ce=c):nt(t,e),ct(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(P=e,p=e.child;p!==null;){for(g=P=p;P!==null;){switch(h=P,v=h.child,h.tag){case 0:case 11:case 14:case 15:Er(4,h,h.return);break;case 1:An(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(x){le(r,n,x)}}break;case 5:An(h,h.return);break;case 22:if(h.memoizedState!==null){Yu(g);continue}}v!==null?(v.return=h,P=v):Yu(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=pc("display",l))}catch(x){le(e,e.return,x)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(x){le(e,e.return,x)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:nt(t,e),ct(e),r&4&&Xu(e);break;case 21:break;default:nt(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($d(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(_r(o,""),r.flags&=-33);var i=Ku(e);ll(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=Ku(e);il(e,s,l);break;default:throw Error(E(161))}}catch(u){le(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qm(e,t,n){P=e,Ud(e,t,n)}function Ud(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Po;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ce;s=Po;var c=Ce;if(Po=l,(Ce=u)&&!c)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?Qu(o):u!==null?(u.return=l,P=u):Qu(o);for(;i!==null;)P=i,Ud(i,t,n),i=i.sibling;P=o,Po=s,Ce=c}qu(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,P=i):qu(e,t,n)}}function qu(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ce||wa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:rt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Du(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Du(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Dr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}Ce||t.flags&512&&al(t)}catch(h){le(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Yu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Qu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wa(4,t)}catch(u){le(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){le(t,o,u)}}var i=t.return;try{al(t)}catch(u){le(t,i,u)}break;case 5:var l=t.return;try{al(t)}catch(u){le(t,l,u)}}}catch(u){le(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Ym=Math.ceil,ua=Et.ReactCurrentDispatcher,Vl=Et.ReactCurrentOwner,Ye=Et.ReactCurrentBatchConfig,K=0,ge=null,ce=null,xe=0,je=0,Fn=qt(0),me=0,Jr=null,pn=0,Na=0,Gl=0,Cr=null,Ae=null,Kl=0,Xn=1/0,gt=null,ca=!1,sl=null,Ht=null,Do=!1,It=null,da=0,Mr=0,ul=null,Uo=-1,Wo=0;function Pe(){return(K&6)!==0?se():Uo!==-1?Uo:Uo=se()}function Jt(e){return(e.mode&1)===0?1:(K&2)!==0&&xe!==0?xe&-xe:Dm.transition!==null?(Wo===0&&(Wo=Ec()),Wo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Pc(e.type)),e)}function lt(e,t,n,r){if(50<Mr)throw Mr=0,ul=null,Error(E(185));Vr(e,n,r),((K&2)===0||e!==ge)&&(e===ge&&((K&2)===0&&(Na|=n),me===4&&Ft(e,xe)),$e(e,r),n===1&&K===0&&(t.mode&1)===0&&(Xn=se()+500,xa&&Yt()))}function $e(e,t){var n=e.callbackNode;Ff(e,t);var r=Xo(e,e===ge?xe:0);if(r===0)n!==null&&au(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&au(n),t===1)e.tag===0?Pm(Zu.bind(null,e)):Qc(Zu.bind(null,e)),zm(function(){(K&6)===0&&Yt()}),n=null;else{switch(Cc(r)){case 1:n=xl;break;case 4:n=Nc;break;case 16:n=Ko;break;case 536870912:n=Sc;break;default:n=Ko}n=qd(n,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wd(e,t){if(Uo=-1,Wo=0,(K&6)!==0)throw Error(E(327));var n=e.callbackNode;if(Un()&&e.callbackNode!==n)return null;var r=Xo(e,e===ge?xe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=pa(e,r);else{t=r;var o=K;K|=2;var i=Jd();(ge!==e||xe!==t)&&(gt=null,Xn=se()+500,ln(e,t));do try{Rm();break}catch(s){Hd(e,s)}while(!0);Pl(),ua.current=i,K=o,ce!==null?t=0:(ge=null,xe=0,t=me)}if(t!==0){if(t===2&&(o=Bi(e),o!==0&&(r=o,t=cl(e,o))),t===1)throw n=Jr,ln(e,0),Ft(e,r),$e(e,se()),n;if(t===6)Ft(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Qm(o)&&(t=pa(e,r),t===2&&(i=Bi(e),i!==0&&(r=i,t=cl(e,i))),t===1))throw n=Jr,ln(e,0),Ft(e,r),$e(e,se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(E(345));case 2:nn(e,Ae,gt);break;case 3:if(Ft(e,r),(r&130023424)===r&&(t=Kl+500-se(),10<t)){if(Xo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Pe(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ji(nn.bind(null,e,Ae,gt),t);break}nn(e,Ae,gt);break;case 4:if(Ft(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-it(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ym(r/1960))-r,10<r){e.timeoutHandle=Ji(nn.bind(null,e,Ae,gt),r);break}nn(e,Ae,gt);break;case 5:nn(e,Ae,gt);break;default:throw Error(E(329))}}}return $e(e,se()),e.callbackNode===n?Wd.bind(null,e):null}function cl(e,t){var n=Cr;return e.current.memoizedState.isDehydrated&&(ln(e,t).flags|=256),e=pa(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&dl(t)),e}function dl(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function Qm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!st(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ft(e,t){for(t&=~Gl,t&=~Na,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Zu(e){if((K&6)!==0)throw Error(E(327));Un();var t=Xo(e,0);if((t&1)===0)return $e(e,se()),null;var n=pa(e,t);if(e.tag!==0&&n===2){var r=Bi(e);r!==0&&(t=r,n=cl(e,r))}if(n===1)throw n=Jr,ln(e,0),Ft(e,t),$e(e,se()),n;if(n===6)throw Error(E(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,nn(e,Ae,gt),$e(e,se()),null}function Xl(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(Xn=se()+500,xa&&Yt())}}function fn(e){It!==null&&It.tag===0&&(K&6)===0&&Un();var t=K;K|=1;var n=Ye.transition,r=X;try{if(Ye.transition=null,X=1,e)return e()}finally{X=r,Ye.transition=n,K=t,(K&6)===0&&Yt()}}function ql(){je=Fn.current,te(Fn)}function ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Mm(n)),ce!==null)for(n=ce.return;n!==null;){var r=n;switch(_l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ro();break;case 3:Gn(),te(Be),te(Me),$l();break;case 5:Il(r);break;case 4:Gn();break;case 13:te(oe);break;case 19:te(oe);break;case 10:Dl(r.type._context);break;case 22:case 23:ql()}n=n.return}if(ge=e,ce=e=Vt(e.current,null),xe=je=t,me=0,Jr=null,Gl=Na=pn=0,Ae=Cr=null,on!==null){for(t=0;t<on.length;t++)if(n=on[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}on=null}return e}function Hd(e,t){do{var n=ce;try{if(Pl(),$o.current=sa,la){for(var r=ae.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}la=!1}if(dn=0,he=fe=ae=null,Sr=!1,Ur=0,Vl.current=null,n===null||n.return===null){me=1,Jr=t,ce=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=xe,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,g=p.tag;if((p.mode&1)===0&&(g===0||g===11||g===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Ou(l);if(v!==null){v.flags&=-257,ju(v,l,s,i,t),v.mode&1&&$u(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var x=new Set;x.add(u),t.updateQueue=x}else k.add(u);break e}else{if((t&1)===0){$u(i,c,t),Yl();break e}u=Error(E(426))}}else if(ne&&s.mode&1){var w=Ou(l);if(w!==null){(w.flags&65536)===0&&(w.flags|=256),ju(w,l,s,i,t),Tl(Kn(u,s));break e}}i=u=Kn(u,s),me!==4&&(me=2),Cr===null?Cr=[i]:Cr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Cd(i,u,t);Pu(i,m);break e;case 1:s=u;var d=i.type,f=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=Md(i,s,t);Pu(i,y);break e}}i=i.return}while(i!==null)}Gd(n)}catch(N){t=N,ce===n&&n!==null&&(ce=n=n.return);continue}break}while(!0)}function Jd(){var e=ua.current;return ua.current=sa,e===null?sa:e}function Yl(){(me===0||me===3||me===2)&&(me=4),ge===null||(pn&268435455)===0&&(Na&268435455)===0||Ft(ge,xe)}function pa(e,t){var n=K;K|=2;var r=Jd();(ge!==e||xe!==t)&&(gt=null,ln(e,t));do try{Zm();break}catch(o){Hd(e,o)}while(!0);if(Pl(),K=n,ua.current=r,ce!==null)throw Error(E(261));return ge=null,xe=0,me}function Zm(){for(;ce!==null;)Vd(ce)}function Rm(){for(;ce!==null&&!Cf();)Vd(ce)}function Vd(e){var t=Xd(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?Gd(e):ce=t,Vl.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Vm(n,t,je),n!==null){ce=n;return}}else{if(n=Gm(n,t),n!==null){n.flags&=32767,ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{me=6,ce=null;return}}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);me===0&&(me=5)}function nn(e,t,n){var r=X,o=Ye.transition;try{Ye.transition=null,X=1,e0(e,t,n,r)}finally{Ye.transition=o,X=r}return null}function e0(e,t,n,r){do Un();while(It!==null);if((K&6)!==0)throw Error(E(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(E(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bf(e,i),e===ge&&(ce=ge=null,xe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Do||(Do=!0,qd(Ko,function(){return Un(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Ye.transition,Ye.transition=null;var l=X;X=1;var s=K;K|=4,Vl.current=null,Xm(e,n),jd(n,e),wm(Wi),qo=!!Ui,Wi=Ui=null,e.current=n,qm(n,e,o),Mf(),K=s,X=l,Ye.transition=i}else e.current=n;if(Do&&(Do=!1,It=e,da=o),i=e.pendingLanes,i===0&&(Ht=null),Tf(n.stateNode,r),$e(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(ca)throw ca=!1,e=sl,sl=null,e;return(da&1)!==0&&e.tag!==0&&Un(),i=e.pendingLanes,(i&1)!==0?e===ul?Mr++:(Mr=0,ul=e):Mr=0,Yt(),null}function Un(){if(It!==null){var e=Cc(da),t=Ye.transition,n=X;try{if(Ye.transition=null,X=16>e?16:e,It===null)var r=!1;else{if(e=It,It=null,da=0,(K&6)!==0)throw Error(E(331));var o=K;for(K|=4,P=e.current;P!==null;){var i=P,l=i.child;if((P.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(P=c;P!==null;){var p=P;switch(p.tag){case 0:case 11:case 15:Er(8,p,i)}var g=p.child;if(g!==null)g.return=p,P=g;else for(;P!==null;){p=P;var h=p.sibling,v=p.return;if(Id(p),p===c){P=null;break}if(h!==null){h.return=v,P=h;break}P=v}}}var k=i.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var w=x.sibling;x.sibling=null,x=w}while(x!==null)}}P=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,P=l;else e:for(;P!==null;){if(i=P,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Er(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,P=m;break e}P=i.return}}var d=e.current;for(P=d;P!==null;){l=P;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,P=f;else e:for(l=d;P!==null;){if(s=P,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:wa(9,s)}}catch(N){le(s,s.return,N)}if(s===l){P=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,P=y;break e}P=s.return}}if(K=o,Yt(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(ma,e)}catch{}r=!0}return r}finally{X=n,Ye.transition=t}}return!1}function Ru(e,t,n){t=Kn(n,t),t=Cd(e,t,1),e=Wt(e,t,1),t=Pe(),e!==null&&(Vr(e,1,t),$e(e,t))}function le(e,t,n){if(e.tag===3)Ru(e,e,n);else for(;t!==null;){if(t.tag===3){Ru(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Kn(n,e),e=Md(t,e,1),t=Wt(t,e,1),e=Pe(),t!==null&&(Vr(t,1,e),$e(t,e));break}}t=t.return}}function t0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Pe(),e.pingedLanes|=e.suspendedLanes&n,ge===e&&(xe&n)===n&&(me===4||me===3&&(xe&130023424)===xe&&500>se()-Kl?ln(e,0):Gl|=n),$e(e,t)}function Kd(e,t){t===0&&((e.mode&1)===0?t=1:(t=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var n=Pe();e=Nt(e,t),e!==null&&(Vr(e,t,n),$e(e,n))}function n0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Kd(e,n)}function r0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(t),Kd(e,n)}var Xd;Xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Fe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Fe=!1,Jm(e,t,n);Fe=(e.flags&131072)!==0}else Fe=!1,ne&&(t.flags&1048576)!==0&&Zc(t,na,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var o=Hn(t,Me.current);jn(t,n),o=jl(null,t,r,e,o,n);var i=Ul();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,ea(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fl(t),o.updater=ba,t.stateNode=o,o._reactInternals=t,Qi(t,r,e,n),t=el(null,t,r,!0,i,n)):(t.tag=0,ne&&i&&zl(t),Le(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=a0(r),e=rt(r,e),o){case 0:t=Ri(null,t,r,e,n);break e;case 1:t=Hu(null,t,r,e,n);break e;case 11:t=Uu(null,t,r,e,n);break e;case 14:t=Wu(null,t,r,rt(r.type,e),n);break e}throw Error(E(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Ri(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Hu(e,t,r,o,n);case 3:e:{if(Ld(t),e===null)throw Error(E(387));r=t.pendingProps,i=t.memoizedState,o=i.element,od(e,t),aa(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Kn(Error(E(423)),t),t=Ju(e,t,r,n,o);break e}else if(r!==o){o=Kn(Error(E(424)),t),t=Ju(e,t,r,n,o);break e}else for(Ue=Ut(t.stateNode.containerInfo.firstChild),We=t,ne=!0,at=null,n=nd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===o){t=St(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return ad(t),e===null&&Xi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Hi(r,o)?l=null:i!==null&&Hi(r,i)&&(t.flags|=32),Td(e,t),Le(e,t,l,n),t.child;case 6:return e===null&&Xi(t),null;case 13:return Pd(e,t,n);case 4:return Bl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),Uu(e,t,r,o,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,Z(ra,r._currentValue),r._currentValue=l,i!==null)if(st(i.value,l)){if(i.children===o.children&&!Be.current){t=St(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=kt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),qi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(E(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),qi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Le(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=Qe(o),r=r(o),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,o=rt(r,t.pendingProps),o=rt(r.type,o),Wu(e,t,r,o,n);case 15:return zd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:rt(r,o),jo(e,t),t.tag=1,Ie(r)?(e=!0,ea(t)):e=!1,jn(t,n),Ed(t,r,o),Qi(t,r,o,n),el(null,t,r,!0,e,n);case 19:return Dd(e,t,n);case 22:return _d(e,t,n)}throw Error(E(156,t.tag))};function qd(e,t){return wc(e,t)}function o0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qe(e,t,n,r){return new o0(e,t,n,r)}function Ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function a0(e){if(typeof e=="function")return Ql(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gl)return 11;if(e===vl)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ho(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Ql(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case En:return sn(n.children,o,i,t);case hl:l=8,o|=8;break;case bi:return e=qe(12,n,t,o|2),e.elementType=bi,e.lanes=i,e;case wi:return e=qe(13,n,t,o),e.elementType=wi,e.lanes=i,e;case Ni:return e=qe(19,n,t,o),e.elementType=Ni,e.lanes=i,e;case ac:return Sa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rc:l=10;break e;case oc:l=9;break e;case gl:l=11;break e;case vl:l=14;break e;case Pt:l=16,r=null;break e}throw Error(E(130,e==null?e:typeof e,""))}return t=qe(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function sn(e,t,n,r){return e=qe(7,e,r,t),e.lanes=n,e}function Sa(e,t,n,r){return e=qe(22,e,r,t),e.elementType=ac,e.lanes=n,e.stateNode={isHidden:!1},e}function yi(e,t,n){return e=qe(6,e,null,t),e.lanes=n,e}function xi(e,t,n){return t=qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function i0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ni(0),this.expirationTimes=ni(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Zl(e,t,n,r,o,i,l,s,u){return e=new i0(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=qe(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(i),e}function l0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Yd(e){if(!e)return Kt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(E(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(E(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Yc(e,n,t)}return t}function Qd(e,t,n,r,o,i,l,s,u){return e=Zl(n,r,!0,e,o,i,l,s,u),e.context=Yd(null),n=e.current,r=Pe(),o=Jt(n),i=kt(r,o),i.callback=t??null,Wt(n,i,o),e.current.lanes=o,Vr(e,o,r),$e(e,r),e}function Ea(e,t,n,r){var o=t.current,i=Pe(),l=Jt(o);return n=Yd(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,l),e!==null&&(lt(e,o,l,i),Io(e,o,l)),l}function fa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function ec(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rl(e,t){ec(e,t),(e=e.alternate)&&ec(e,t)}function s0(){return null}var Zd=typeof reportError=="function"?reportError:function(e){console.error(e)};function es(e){this._internalRoot=e}Ca.prototype.render=es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(E(409));Ea(e,t,null,null)};Ca.prototype.unmount=es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){Ea(null,e,null,null)}),t[wt]=null}};function Ca(e){this._internalRoot=e}Ca.prototype.unstable_scheduleHydration=function(e){if(e){var t=_c();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&Lc(e)}};function ts(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tc(){}function u0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=fa(l);i.call(c)}}var l=Qd(t,r,e,0,null,!1,!1,"",tc);return e._reactRootContainer=l,e[wt]=l.current,Br(e.nodeType===8?e.parentNode:e),fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=fa(u);s.call(c)}}var u=Zl(e,0,!1,null,null,!1,!1,"",tc);return e._reactRootContainer=u,e[wt]=u.current,Br(e.nodeType===8?e.parentNode:e),fn(function(){Ea(t,u,n,r)}),u}function za(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=fa(l);s.call(u)}}Ea(t,l,e,o)}else l=u0(n,t,e,o,r);return fa(l)}Mc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vr(t.pendingLanes);n!==0&&(kl(t,n|1),$e(t,se()),(K&6)===0&&(Xn=se()+500,Yt()))}break;case 13:fn(function(){var r=Nt(e,1);if(r!==null){var o=Pe();lt(r,e,1,o)}}),Rl(e,1)}};bl=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Pe();lt(t,e,134217728,n)}Rl(e,134217728)}};zc=function(e){if(e.tag===13){var t=Jt(e),n=Nt(e,t);if(n!==null){var r=Pe();lt(n,e,t,r)}Rl(e,t)}};_c=function(){return X};Tc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Di=function(e,t,n){switch(t){case"input":if(Ci(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ya(r);if(!o)throw Error(E(90));lc(r),Ci(r,o)}}}break;case"textarea":uc(e,n);break;case"select":t=n.value,t!=null&&Bn(e,!!n.multiple,t,!1)}};gc=Xl;vc=fn;var c0={usingClientEntryPoint:!1,Events:[Kr,_n,ya,mc,hc,Xl]},fr={findFiberByHostInstance:rn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},d0={bundleType:fr.bundleType,version:fr.version,rendererPackageName:fr.rendererPackageName,rendererConfig:fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=kc(e),e===null?null:e.stateNode},findFiberByHostInstance:fr.findFiberByHostInstance||s0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(mr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!mr.isDisabled&&mr.supportsFiber))try{ma=mr.inject(d0),ft=mr}catch{}var mr;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c0;Ve.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ts(t))throw Error(E(200));return l0(e,t,null,n)};Ve.createRoot=function(e,t){if(!ts(e))throw Error(E(299));var n=!1,r="",o=Zd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Zl(e,1,!1,null,null,n,!1,r,o),e[wt]=t.current,Br(e.nodeType===8?e.parentNode:e),new es(t)};Ve.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=kc(t),e=e===null?null:e.stateNode,e};Ve.flushSync=function(e){return fn(e)};Ve.hydrate=function(e,t,n){if(!Ma(t))throw Error(E(200));return za(null,e,t,!0,n)};Ve.hydrateRoot=function(e,t,n){if(!ts(e))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Zd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Qd(t,null,e,1,n??null,o,!1,i,l),e[wt]=t.current,Br(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ca(t)};Ve.render=function(e,t,n){if(!Ma(t))throw Error(E(200));return za(null,e,t,!1,n)};Ve.unmountComponentAtNode=function(e){if(!Ma(e))throw Error(E(40));return e._reactRootContainer?(fn(function(){za(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1};Ve.unstable_batchedUpdates=Xl;Ve.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ma(n))throw Error(E(200));if(e==null||e._reactInternals===void 0)throw Error(E(38));return za(e,t,n,!1,r)};Ve.version="18.3.1-next-f1338f8080-20240426"});var np=Rt((Ih,tp)=>{"use strict";function ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep)}catch(e){console.error(e)}}ep(),tp.exports=Rd()});var op=Rt(ns=>{"use strict";var rp=np();ns.createRoot=rp.createRoot,ns.hydrateRoot=rp.hydrateRoot;var $h});var a=Ss(Wa()),Cp=Ss(op()),Pa=Date.now();function ve(){return Pa+=1,Pa}var Da=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Zn(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(o=>o.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function p0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function U(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function Re(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Mt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function zt(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function rs(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Fa(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(U(0)))n=0;else if(t.has(U(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,o=n,i=0,l=!0,s=!1;for(;;)if(t.has(U(o)))r++,i++,!l&&i>=7&&(l=!0,i=0),o-=1;else if(l)l=!1,i=0,s=!0,o-=1;else break;return{streak:r,freezeUsed:s}}function os(e){return Fa(e).streak}var f0=[15,30,45,60,90,120],Zr="tasksh.meta.v1";function Rr(e){try{let t=Oe(Zr,{});localStorage.setItem(Zr,JSON.stringify({...t,...e}))}catch{}}function m0(e,t=1){let n=Oe(Zr,{});Rr({[e]:(n[e]||0)+t})}var ap="tasksh.achievements.v1",ip="tasksh.wallet.v1",Qr=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:e=>e.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:e=>e.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:e=>e.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:e=>e.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:e=>e.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:e=>e.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:e=>e.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:e=>e.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:e=>e.totalHabits>0&&e.doneToday>=e.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:e=>e.totalRoutines>0&&e.routinesDoneToday>=e.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:e=>e.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:e=>e.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:e=>e.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:e=>e.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:e=>e.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:e=>e.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:e=>e.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:e=>e.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:e=>e.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:e=>e.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:e=>e.coins>=1e3}];function Mp(e){return Qr.find(t=>t.id===e)}function h0(e,t){let n=new Set(t),r=[];for(let o of Qr){if(n.has(o.id))continue;let i=!1;try{i=!!o.test(e)}catch{i=!1}i&&r.push(o.id)}return r}var g0=e=>20+e*5;function v0(e){let[t,n]=(0,a.useState)(()=>Oe(ap,[])),[r,o]=(0,a.useState)(()=>Oe(ip,{coins:0})),[i,l]=(0,a.useState)([]);(0,a.useEffect)(()=>{try{localStorage.setItem(ap,JSON.stringify(t))}catch{}},[t]),(0,a.useEffect)(()=>{try{localStorage.setItem(ip,JSON.stringify(r))}catch{}},[r]),(0,a.useEffect)(()=>{let c=h0({...e,coins:r.coins},t);if(!c.length)return;n(g=>[...g,...c]),l(g=>[...g,...c]);let p=c.reduce((g,h)=>g+(Mp(h)?.coins||0),0);p&&o(g=>({...g,coins:g.coins+p}))},[e,t,r.coins]);let s=(0,a.useCallback)(c=>o(p=>({...p,coins:Math.max(0,p.coins+c)})),[]),u=(0,a.useCallback)(()=>l(c=>c.slice(1)),[]);return{earned:t,wallet:r,coins:r.coins,queue:i,current:i[0]||null,shift:u,addCoins:s}}var Zt={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},lp="tasksh.pet.v1",xn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function La(e){let t=xn[0];for(let n of xn)e>=n.minLevel&&(t=n);return t}function ls(e){return xn.find(t=>t.minLevel>e)||null}var sp={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},vn=e=>Math.max(0,Math.min(100,Math.round(e)));function up(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let o=i=>r*i;return{...e,happiness:vn(e.happiness-o(.55)),energy:vn(e.energy-o(.75)),friendship:vn(e.friendship-o(.12)),intelligence:e.intelligence,lastTick:t}}var y0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function as(e,t){let n=y0[t];return n?{...e,happiness:vn(e.happiness+(n.happiness||0)),energy:vn(e.energy+(n.energy||0)),friendship:vn(e.friendship+(n.friendship||0)),intelligence:vn(e.intelligence+(n.intelligence||0))}:e}function ds(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function zp(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function Qt(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function x0(e){let{pet:t,level:n,hour:r,doneToday:o,totalToday:i,streak:l,phase:s}=e,u=ds(t),c=Math.floor(Date.now()/36e5);return t.energy<22?Qt(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&o===i?Qt([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?Qt([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):o===0&&r>=14?Qt(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?Qt(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?Qt(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?Qt(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":Qt([`${o} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function k0(e){let{pet:t,level:n,doneToday:r,totalToday:o,streak:i,routineNow:l,nextRoutine:s}=e,u=ds(t);return[`pet: ${t.name}, ${xn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${zp(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${o} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function b0(e,t){let[n,r]=(0,a.useState)(()=>{let p=Oe(lp,null),g=p?{...sp,...p}:{...sp,born:Date.now(),lastTick:Date.now()};return up(g,Date.now())}),[o,i]=(0,a.useState)(null);(0,a.useEffect)(()=>{try{localStorage.setItem(lp,JSON.stringify(n))}catch{}},[n]),(0,a.useEffect)(()=>{let p=setInterval(()=>r(g=>up(g,Date.now())),3e5);return()=>clearInterval(p)},[]);let l=(0,a.useMemo)(()=>La(e),[e]);(0,a.useEffect)(()=>{if(l.stage>n.stage){let p=n.stage;i({from:p,to:l.stage}),r(g=>as({...g,stage:l.stage},"levelUp")),$.success()}else l.stage<n.stage&&r(p=>({...p,stage:l.stage}))},[l.stage,n.stage]);let s=(0,a.useCallback)(p=>{r(g=>as(g,p))},[]);(0,a.useEffect)(()=>Zt.on(p=>r(g=>as(g,p))),[]);let u=(0,a.useCallback)(p=>{let g=String(p||"").trim().slice(0,14);g&&r(h=>({...h,name:g}))},[]),c=(0,a.useCallback)((p,g)=>{r(h=>({...h,chats:p==="user"?h.chats+1:h.chats,log:[...h.log||[],{role:p,text:String(g).slice(0,240)}].slice(-8)}))},[]);return{pet:n,form:l,mood:ds(n),evolution:o,clearEvolution:()=>i(null),nudge:s,rename:u,remember:c}}var ss=a.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:o=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,p=c-s*.8-u*.62-(l>=3?5:0),g=4.6-l*.3,h=Math.min(6+l*5.2,Math.max(4,p-u-9)),v=9+l*1.1,k=9+l*5.4,x=33+l*5.2,w=l>=3,m=l>=4,d=l>=6,f=l>=5,y=l>=2?Math.min(4,l-1):0,N=n==="sleepy"||n==="tired",b=n==="joyful",S=n==="low"||n==="drained",z=N?.9:g*(b?1.16:1)*2,j=S?`M 56 ${p+9} q 8 -5 16 0`:b?`M 55 ${p+6} q 9 8 18 0`:`M 57 ${p+7} q 7 4 14 0`;return a.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${o?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":xn[l].scale},role:"img","aria-label":`${xn[l].name}, ${n}`},a.default.createElement("defs",null,a.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},a.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),a.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),a.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},a.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),a.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),a.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:x,fill:`url(#pg-aura-${l})`}),m&&a.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},a.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),a.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),a.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&a.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),w&&a.default.createElement("rect",{x:"59",y:p+u-5,width:"10",height:Math.max(0,c-s*.7-p-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),f&&a.default.createElement("g",{opacity:"0.8"},[0,1,2].map(L=>a.default.createElement("path",{key:L,d:`M ${64-s*.72+L*3} ${c-6-L*7} l -${6+L} -${5+L*2} l ${9+L} ${1+L} Z`,fill:"var(--accent2)"}))),a.default.createElement("g",{className:"pet-body"},a.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),a.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:y}).map((L,D)=>a.default.createElement("circle",{key:D,cx:50+D*14,cy:68+D%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),a.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("g",{className:"pet-head"},a.default.createElement("path",{d:`M ${64-v} ${p-u*.72}
                  q -3 -${h} 3 -${h*1.25}
                  q 5 ${h*.45} 4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),a.default.createElement("path",{d:`M ${64+v} ${p-u*.72}
                  q 3 -${h} -3 -${h*1.25}
                  q -5 ${h*.45} -4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),d&&a.default.createElement("g",{className:"pet-crown"},a.default.createElement("path",{d:`M 51 ${p-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),a.default.createElement("circle",{cx:"64",cy:p-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),a.default.createElement("circle",{cx:"64",cy:p,r:u,fill:`url(#pg-body-${l})`}),N?a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:`M ${64-8.5} ${p} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),a.default.createElement("path",{d:`M ${64+.5} ${p} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):a.default.createElement("g",{className:"pet-eyes"},a.default.createElement("ellipse",{cx:64-7.5,cy:p,rx:g,ry:z/2,fill:"var(--bg)"}),a.default.createElement("ellipse",{cx:64+7.5,cy:p,rx:g,ry:z/2,fill:"var(--bg)"}),a.default.createElement("circle",{cx:64-6.2,cy:p-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),a.default.createElement("circle",{cx:64+8.8,cy:p-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),a.default.createElement("path",{d:j,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&a.default.createElement(a.default.Fragment,null,a.default.createElement("ellipse",{cx:49,cy:p+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),a.default.createElement("ellipse",{cx:79,cy:p+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&a.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((L,D)=>a.default.createElement("circle",{key:D,cx:"64",cy:c-8-x,r:1.6+D*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${D*(360/Math.min(4,l))}deg)`}}))))}),Rn=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],cp=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function dp(e){for(let t of cp)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return cp[2]}function w0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var N0=a.default.memo(function({theme:t,phase:n,calm:r,scoped:o=!1}){let i=t.ambient.particle,l=o?"amb-layer amb-scoped":"amb-layer",s=(0,a.useMemo)(()=>i==="none"?[]:Array.from({length:i==="aurora"?16:i==="embers"?14:18},(p,g)=>{let h=i==="bubbles"?3+g%4*2:2+g%3;return{left:`${(g*37+11)%100}%`,size:h,delay:`${-(g*2.3)%26}s`,dur:`${(i==="bubbles"?20:30)+g%7*4}s`}}),[i]),u=(0,a.useMemo)(()=>n.stars?Array.from({length:34},(c,p)=>({left:`${(p*29+7)%100}%`,top:`${(p*53+13)%62}%`,delay:`${p%9*.7}s`,dur:`${2.6+p%5*.8}s`})):[],[n.stars]);return a.default.createElement(a.default.Fragment,null,o&&a.default.createElement("div",{className:`${l} amb-blobs`}),a.default.createElement("div",{className:`${l} amb-time`},a.default.createElement("div",{className:"amb-ray"})),u.length>0&&a.default.createElement("div",{className:`${l} amb-stars`},u.map((c,p)=>a.default.createElement("span",{key:p,style:{left:c.left,top:c.top,animationDelay:c.delay,animationDuration:c.dur}}))),s.length>0&&a.default.createElement("div",{className:`${l} amb-dust`},s.map((c,p)=>a.default.createElement("span",{key:p,style:{left:c.left,bottom:"-6vh",width:c.size,height:c.size,animationDelay:c.delay,animationDuration:c.dur}}))),a.default.createElement("div",{className:`${l} amb-grain`}),r&&a.default.createElement("div",{className:"calm-breath"}))}),pp="tasksh.calm.v1";function S0(e){let[t,n]=(0,a.useState)(()=>{try{return localStorage.getItem(fp)||_a}catch{return _a}}),[r,o]=(0,a.useState)(()=>{try{return localStorage.getItem(pp)==="1"}catch{return!1}}),[i,l]=(0,a.useState)(()=>dp(Zn().hour)),s=(0,a.useMemo)(()=>E0(t),[t]);(0,a.useEffect)(()=>{!us(s,e)&&s.id!==_a&&n(_a)},[s,e]),(0,a.useEffect)(()=>{C0(s);try{localStorage.setItem(fp,s.id)}catch{}},[s]),(0,a.useEffect)(()=>{w0(i)},[i]),(0,a.useEffect)(()=>{let c=setInterval(()=>{let p=dp(Zn().hour);l(g=>g.id===p.id?g:p)},12e4);return()=>clearInterval(c)},[]),(0,a.useEffect)(()=>{let c=document.documentElement;c.style.setProperty("--calm",r?"1":"0"),c.style.setProperty("--motion-scale",r?"1.9":"1"),c.classList.toggle("calm-mode",r);try{localStorage.setItem(pp,r?"1":"0")}catch{}},[r]);let u=(0,a.useMemo)(()=>Rn.filter(c=>us(c,e)),[e]);return{theme:s,themeId:t,setThemeId:n,themes:Rn,unlocked:u,phase:i,calm:r,setCalm:o}}var _a="terminal",fp="tasksh.theme.v1";function E0(e){return Rn.find(t=>t.id===e)||Rn[0]}function us(e,t){return t>=e.unlockLevel}function C0(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((o,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${o[0]}, ${o[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var _p="tasksh.sound.v1",qr=null;function M0(){if(!qr){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;qr=new e}return qr.state==="suspended"&&qr.resume(),qr}function Tp(){try{let e=localStorage.getItem(_p);return e===null?!0:e==="1"}catch{return!0}}function z0(e){try{localStorage.setItem(_p,e?"1":"0")}catch{}}function gn(e){if(!Tp())return;let t=M0();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:o=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+o),c.gain.setValueAtTime(1e-4,n+o),c.gain.exponentialRampToValueAtTime(s,n+o+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+o+i),u.connect(c),c.connect(t.destination),u.start(n+o),u.stop(n+o+i+.02)})}var $={click:()=>gn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>gn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>gn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>gn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>gn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>gn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function _0(){let[e,t]=(0,a.useState)(Tp());return[e,()=>{let r=!e;t(r),z0(r),r&&gn([{freq:720,dur:.05,gain:.04}])}]}function T0(e,t=550){let[n,r]=(0,a.useState)(e),o=(0,a.useRef)(e),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let l=o.current,s=e;if(l===s)return;let u=performance.now(),c=g=>1-Math.pow(1-g,3),p=g=>{let h=g-u,v=Math.min(1,h/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(p):o.current=s};return i.current=requestAnimationFrame(p),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function Ct({value:e,className:t,suffix:n=""}){let r=T0(e);return a.default.createElement("span",{className:t},r,n)}function L0({axes:e,size:t=220,maxValue:n}){let[r,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let w=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(w)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(w=>w.value)),p=w=>Math.PI*2*w/i-Math.PI/2,g=(w,m)=>{let d=p(w);return[l+Math.cos(d)*u*m,s+Math.sin(d)*u*m]},h=i>6?46:22,v=[.25,.5,.75,1],x=e.map((w,m)=>g(m,r?Math.max(.04,w.value/c):.02)).map((w,m)=>`${m===0?"M":"L"}${w[0].toFixed(1)},${w[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("svg",{viewBox:`${-h} 0 ${t+h*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},v.map((w,m)=>{let f=e.map((y,N)=>g(N,w)).map((y,N)=>`${N===0?"M":"L"}${y[0].toFixed(1)},${y[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("path",{key:m,d:f,className:"radar-ring"})}),e.map((w,m)=>{let d=g(m,1);return a.default.createElement("line",{key:m,x1:l,y1:s,x2:d[0],y2:d[1],className:"radar-spoke"})}),a.default.createElement("path",{d:x,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((w,m)=>{let d=g(m,1.19),f=g(m,r?Math.max(.04,w.value/c):.02),y=Math.cos(p(m)),N=y>.25?"start":y<-.25?"end":"middle";return a.default.createElement("g",{key:w.key||m},a.default.createElement("circle",{cx:f[0],cy:f[1],r:i>6?2.8:3.5,fill:w.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),a.default.createElement("text",{x:d[0],y:d[1],textAnchor:N,dominantBaseline:"middle",className:"radar-label"},w.label))}))}function ps({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:o="#1E2228",label:i,sublabel:l}){let[s,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let x=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(x)},[]);let c=t/2-n,p=2*Math.PI*c,g=Math.max(0,Math.min(100,e)),h=p-(s?g/100:0)*p,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return a.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},a.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},a.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:o,strokeWidth:n}),a.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:p,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),a.default.createElement("div",{className:"radial-progress-center"},i&&a.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&a.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function Lp({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:o}){let[i,l]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let h=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((h,v)=>h+Math.max(0,v.value),0)),p=0,g=e.map(h=>{let v=Math.max(0,h.value),k=v/c,x=i?k*u:0,w=u-x,m=p/c*360;return p+=v,{...h,dash:x,gap:w,rotation:m,frac:k}});return a.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},a.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},a.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),g.map((h,v)=>a.default.createElement("circle",{key:h.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:g.length>1?"butt":"round"}))),a.default.createElement("div",{className:"donut-center"},r!==void 0&&a.default.createElement("span",{className:"donut-center-label"},r),o&&a.default.createElement("span",{className:"donut-center-sublabel"},o)))}function P0({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],o=0,i=t*7,l=Array.from({length:i},(p,g)=>o-(i-1-g)),s=Math.max(1,...l.map(p=>e[U(p)]||0)),u=[];for(let p=0;p<t;p++)u.push(l.slice(p*7,p*7+7));let c=p=>{if(!p)return 0;let g=p/s;return g>.75?4:g>.5?3:g>.25?2:1};return a.default.createElement("div",{className:"heatmap-wrap"},a.default.createElement("div",{className:"heatmap-grid"},u.map((p,g)=>a.default.createElement("div",{className:"heatmap-col",key:g},p.map((h,v)=>{let k=U(h),x=e[k]||0,w=c(x);return a.default.createElement("span",{key:v,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[w],animationDelay:`${(g*7+v)*4}ms`},title:`${k}: ${x} completed`})})))),a.default.createElement("div",{className:"heatmap-legend"},a.default.createElement("span",null,"less"),r.map((p,g)=>a.default.createElement("span",{key:g,className:"heatmap-legend-cell",style:{background:p}})),a.default.createElement("span",null,"more")))}function D0(e){let t=[],n=[];for(let r of e){let o=t.findIndex(i=>r.start>=i);o===-1?(o=t.length,t.push(r.end)):t[o]=r.end,n.push({...r,lane:o})}return{placed:n,laneCount:Math.max(1,t.length)}}function A0({routines:e,nowMinutes:t,doneToday:n=0}){let[r,o]=(0,a.useState)(!1),[i,l]=(0,a.useState)(0),[s,u]=(0,a.useState)(0),c=(0,a.useRef)(null),p=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let T=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(T)},[]),(0,a.useEffect)(()=>{if(!c.current)return;let T=c.current,F=new ResizeObserver(R=>{for(let be of R)l(be.contentRect.width)});return F.observe(T),l(T.getBoundingClientRect().width),()=>F.disconnect()},[]);let g=1440,h=U(0),v=e.map(T=>{let F=Re(T.time);return{r:T,start:F,end:F+Math.max(1,T.duration)}}),{placed:k,laneCount:x}=D0(v),m=Math.max(i,24*82),d=m/g,f=m>i+1,y=t*d;(0,a.useEffect)(()=>{if(!c.current||!i||p.current)return;if(!f){p.current=!0;return}let T=c.current,F=Math.max(0,Math.min(y-i/2,m-i));T.scrollTo({left:F,behavior:"auto"}),p.current=!0},[i,y,m,f]),(0,a.useEffect)(()=>{let T=c.current;if(!T)return;let F=0,R=()=>{F||(F=requestAnimationFrame(()=>{u(T.scrollLeft),F=0}))};return T.addEventListener("scroll",R,{passive:!0}),u(T.scrollLeft),()=>{T.removeEventListener("scroll",R),cancelAnimationFrame(F)}},[i]);let N=()=>{let T=c.current;T&&(T.scrollTo({left:Math.max(0,Math.min(y-i/2,m-i)),behavior:"smooth"}),$.click())},b=38,S=6,z=8,j=z*2+x*b+(x-1)*S,L=d*60>=40?1:3,D=[];for(let T=0;T<=24;T+=L)D.push(T);let J=T=>{let F=T%24;return F===0?"12a":F===12?"12p":F>12?`${F-12}p`:`${F}a`},_=e.length,W=_?Math.round(n/_*100):0;return a.default.createElement("div",{className:"timeline-wrap"},a.default.createElement("div",{className:"timeline-head"},a.default.createElement("div",{className:"timeline-head-left"},a.default.createElement("span",{className:"timeline-title"},"today's schedule"),_>0&&a.default.createElement("span",{className:"timeline-count"},n,"/",_," done")),f&&a.default.createElement("button",{className:"timeline-jump",onClick:N,title:"Jump to now"},"now")),_>0&&a.default.createElement("div",{className:"timeline-progress"},a.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${W}%`:"0%"}})),a.default.createElement("div",{className:"timeline-scroll",ref:c},a.default.createElement("div",{className:"timeline-inner",style:{width:m}},a.default.createElement("div",{className:"timeline-hours"},D.map(T=>a.default.createElement("div",{key:T,className:"timeline-hour",style:{left:T*60*d}},a.default.createElement("span",null,J(T))))),a.default.createElement("div",{className:"timeline-track",style:{height:j}},a.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*d}}),a.default.createElement("div",{className:"timeline-night",style:{left:1320*d,width:120*d}}),D.map(T=>a.default.createElement("div",{key:T,className:`timeline-gridline ${T%6===0?"major":""}`,style:{left:T*60*d}})),a.default.createElement("div",{className:"timeline-elapsed",style:{width:r?y:0}}),k.map(({r:T,start:F,lane:R},be)=>{let V=F*d,q=Math.max(1,T.duration)*d,de=Math.max(4,Math.min(q,m-V)),ue=(T.history||[]).includes(h),ze=Qn(T.id),pe=Math.max(V,s),et=Math.min(V+de,s+i),O=Math.max(0,et-pe)>38,A=Math.max(0,Math.min(s-V,de-46)),I=t>=F&&t<F+T.duration;return a.default.createElement("div",{key:T.id,className:`timeline-block ${ue?"done":""} ${I?"active":""}`,style:{left:V,top:z+R*(b+S),width:r?de:0,height:b,transitionDelay:`${Math.min(be*18,260)}ms`,background:ue?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${ze}, ${ze}C4)`,boxShadow:ue?"none":`0 2px 10px ${ze}44`},title:`${T.label} \xB7 ${Mt(F)} \xB7 ${zt(T.duration)}${ue?" \xB7 done":""}`},O&&a.default.createElement("span",{className:"timeline-block-label",style:A>0?{paddingLeft:A+8}:void 0},ue&&a.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),T.label))}),a.default.createElement("div",{className:"timeline-now",style:{left:y}})))),f&&a.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var F0=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[U(-1),U(-2),U(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[U(-1),U(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[U(0),U(-1),U(-2),U(-3),U(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[U(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function fs(){let[e,t]=(0,a.useState)(Zn());return(0,a.useEffect)(()=>{let n=setInterval(()=>t(Zn()),1e3);return()=>clearInterval(n)},[]),e}function ms(e,t){return(0,a.useMemo)(()=>{let n=[...e].sort((i,l)=>Re(i.time)-Re(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&Re(n[i].time)<=t;i++)r=i;let o=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[o].id}},[e,t])}function B0({routine:e,status:t,index:n,onDelete:r,onToggleToday:o,onSave:i}){let l=Re(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=Fa(e.history),p=(e.history||[]).includes(U(0)),[g,h]=(0,a.useState)(0),v=(0,a.useRef)(!1),k=(0,a.useRef)(0),x=(0,a.useRef)(0),w=(0,a.useRef)(null),m=(0,a.useRef)(!1),[d,f]=(0,a.useState)(!1),[y,N]=(0,a.useState)(!1),[b,S]=(0,a.useState)(e.label),[z,j]=(0,a.useState)(e.time),[L,D]=(0,a.useState)(e.duration),[J,_]=(0,a.useState)(e.alternatives||[]),W=()=>{S(e.label),j(e.time),D(e.duration),_(e.alternatives||[]),N(!0)},T=()=>{let V=b.trim();V&&(i(e.id,{label:V,time:z||e.time,duration:Math.max(5,+L||e.duration),alternatives:J.map(q=>q.trim()).filter(Boolean)}),N(!1))},F=V=>{y||(v.current=!0,m.current=!1,w.current=null,k.current=V.clientX,x.current=V.clientY)},R=V=>{if(!v.current)return;let q=V.clientX-k.current,de=V.clientY-x.current;if(w.current===null){if(Math.abs(q)<6&&Math.abs(de)<6)return;if(w.current=Math.abs(q)>Math.abs(de)?"x":"y",w.current==="y"){v.current=!1;return}}w.current==="x"&&(Math.abs(q)>4&&(m.current=!0),h(Math.max(-120,Math.min(0,q))))},be=()=>{v.current&&(v.current=!1,g<-70?(f(!0),setTimeout(()=>r(e.id),200)):(h(0),m.current||W()))};return a.default.createElement("div",{className:`routine-row-wrap ${d?"removing":""}`,style:{animationDelay:`${n*35}ms`}},a.default.createElement("div",{className:"routine-delete-bg"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),a.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${g}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${p?"#2A2F36":Qn(e.id)}`},onPointerDown:F,onPointerMove:R,onPointerUp:be,onPointerLeave:be,onPointerCancel:be},a.default.createElement("div",{className:"routine-line"},a.default.createElement("span",{className:`routine-node ${p?"quest-done":""}`}),a.default.createElement("span",{className:"routine-connector"})),y?a.default.createElement("div",{className:"routine-edit",onPointerDown:V=>V.stopPropagation()},a.default.createElement("input",{className:"edit-label",value:b,onChange:V=>S(V.target.value),onKeyDown:V=>V.key==="Enter"&&T(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"time",className:"time-input",value:z,onChange:V=>j(V.target.value)}),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:L,onChange:V=>D(V.target.value)}),a.default.createElement("span",{className:"edit-unit"},"min")),a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),J.map((V,q)=>a.default.createElement("div",{className:"alt-composer-row",key:q},a.default.createElement("input",{type:"text",placeholder:`alternative ${q+1}`,value:V,onChange:de=>{let ue=[...J];ue[q]=de.target.value,_(ue)},onKeyDown:de=>de.key==="Enter"&&T()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>_(J.filter((de,ue)=>ue!==q)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>_([...J,""])},"+ another option")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>N(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:T},"save"))):a.default.createElement("div",{className:"routine-main"},a.default.createElement("div",{className:"routine-top"},a.default.createElement("span",{className:"routine-time"},Mt(l)),t==="current"&&a.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&a.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),a.default.createElement("span",{className:"routine-span"},Mt(l)," \u2013 ",Mt(s)," \xB7 ",zt(e.duration)))))}function I0({routines:e,setRoutines:t}){let n=fs(),r=n.hour*60+n.minute,{sorted:o,currentId:i,nextId:l}=ms(e,r),s=o.find(_=>_.id===i),u=o.find(_=>_.id===l),[c,p]=(0,a.useState)(""),[g,h]=(0,a.useState)(()=>rs(r)),[v,k]=(0,a.useState)(30),[x,w]=(0,a.useState)(!1),[m,d]=(0,a.useState)([]),[f,y]=(0,a.useState)(!1),N=()=>{let _=c.trim();if(!_){w(!0),setTimeout(()=>w(!1),420),$.error();return}let W=g||rs(r),T=m.map(F=>F.trim()).filter(Boolean);t(F=>[...F,{id:ve(),time:W,label:_,duration:Math.max(5,+v||30),history:[],alternatives:T}]),p(""),h(rs(r)),k(30),d([]),y(!1),$.click()},b=_=>{t(W=>W.filter(T=>T.id!==_)),$.delete()},S=_=>{let W=U(0),T=!(e.find(F=>F.id===_)?.history||[]).includes(W);t(F=>F.map(R=>{if(R.id!==_)return R;let V=(R.history||[]).includes(W)?R.history.filter(q=>q!==W):[...R.history||[],W];return{...R,history:V.slice(-60)}})),T?($.success(),Zt.emit("routineDone")):$.click()},z=(_,W)=>t(T=>T.map(F=>F.id===_?{...F,...W}:F)),j=s?Re(s.time)+s.duration:0,L=u?(Re(u.time)-r+1440)%1440||1440:0,D=U(0),J=o.filter(_=>(_.history||[]).includes(D)).length;return a.default.createElement("div",{className:"task-list routine-list"},a.default.createElement("div",{className:"hero-card"},a.default.createElement("div",{className:"hero-clock-row"},a.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),a.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),a.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),a.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),a.default.createElement("span",{className:"hero-date"},p0()),a.default.createElement("div",{className:"hero-divider"}),s?a.default.createElement("div",{className:"hero-current"},a.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),a.default.createElement("div",{className:"hero-current-name"},a.default.createElement("span",{className:"pulse-dot"}),s.label),a.default.createElement("span",{className:"hero-sub"},"until ",Mt(j)," \xB7 next: ",u?.label," in ",zt(L))):a.default.createElement("span",{className:"hero-sub"},"no routines yet")),a.default.createElement(A0,{routines:o,nowMinutes:r,doneToday:J}),a.default.createElement("div",{className:`composer ${x?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:_=>p(_.target.value),onKeyDown:_=>_.key==="Enter"&&N()}),a.default.createElement("input",{type:"time",className:"time-input",value:g,onChange:_=>h(_.target.value)}),a.default.createElement("button",{type:"button",className:`alt-toggle-btn ${f?"active":""}`,onClick:()=>y(_=>!_),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),a.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),f&&a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),m.map((_,W)=>a.default.createElement("div",{className:"alt-composer-row",key:W},a.default.createElement("input",{type:"text",placeholder:`alternative ${W+1}, e.g. "Drawing"`,value:_,onChange:T=>{let F=[...m];F[W]=T.target.value,d(F)},onKeyDown:T=>T.key==="Enter"&&N()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>d(m.filter((T,F)=>F!==W)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>d([...m,""])},"+ another option")),a.default.createElement("div",{className:"duration-chips"},f0.map(_=>a.default.createElement("button",{key:_,className:v===_?"active":"",onClick:()=>k(_)},zt(_))),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:_=>k(+_.target.value||5)})),o.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):o.map((_,W)=>a.default.createElement(B0,{key:_.id,routine:_,index:W,status:_.id===i?"current":_.id===l?"next":"idle",onDelete:b,onToggleToday:S,onSave:z})))}function $0(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,o=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:o,monthLabel:i}}function O0(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function Pp(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(U(r))&&n++;return n}function j0(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(U(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var U0=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[U(0),U(-1),U(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[U(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[U(0)]}],W0=[{id:1,name:"Notion Template",dueDate:U(7),tasks:[{id:ve(),text:"Design layout",done:!0},{id:ve(),text:"Write docs",done:!1},{id:ve(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:U(7),tasks:[{id:ve(),text:"Script draft",done:!1},{id:ve(),text:"Record",done:!1}]}];function H0({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:o}=$0(),i=new Set(e||[]),l=U(0),s=Array.from({length:r},(u,c)=>c+1);return a.default.createElement("div",{className:"month-grid-wrap"},a.default.createElement("span",{className:"month-grid-label"},o),a.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=O0(t,n,u);return a.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function J0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(U(0)),{streak:i,freezeUsed:l}=Fa(e.history),s=Pp(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,p]=(0,a.useState)(!1),[g,h]=(0,a.useState)(e.icon),[v,k]=(0,a.useState)(e.label),[x,w]=(0,a.useState)(e.weeklyGoal),m=()=>{h(e.icon),k(e.label),w(e.weeklyGoal),p(!0)},d=()=>{let f=v.trim();f&&(r(e.id,{icon:g.trim()||e.icon,label:f,weeklyGoal:Math.max(1,Math.min(7,+x||e.weeklyGoal))}),p(!1))};return c?a.default.createElement("div",{className:"vault-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{className:"duration-input",style:{width:44},value:g,onChange:f=>h(f.target.value),maxLength:2}),a.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:f=>k(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0})),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:x,onChange:f=>w(f.target.value)}),a.default.createElement("span",{className:"edit-unit"},"x / week")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>p(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:d},"save")))):a.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${Qn(e.id)}`}},a.default.createElement("div",{className:"vault-card-top"},a.default.createElement("span",{className:"vault-card-icon",style:{color:Qn(e.id)}},e.icon),a.default.createElement("div",{className:"vault-card-title"},a.default.createElement("span",{className:"vault-card-label"},e.label),a.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),a.default.createElement("button",{className:"vault-card-edit",onClick:m,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),a.default.createElement(H0,{history:e.history}),a.default.createElement("div",{className:"vault-card-bottom"},a.default.createElement("div",{className:"vault-card-ring-row"},a.default.createElement(ps,{pct:u,size:34,stroke:3.5,color:Qn(e.id)}),a.default.createElement("span",{className:"vault-card-pct"},u,"% ",a.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("button",{className:`vault-check ${o?"done":""}`,onClick:()=>t(e.id)},o?"\u2713 completed today":"mark complete today"))}function V0({habits:e,setHabits:t}){let[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(7),[l,s]=(0,a.useState)(!1),u=()=>{let h=n.trim();if(!h){s(!0),setTimeout(()=>s(!1),420),$.error();return}t(v=>[...v,{id:ve(),icon:"\u25C6",label:h,weeklyGoal:o,history:[]}]),r(""),i(7),$.click()},c=h=>{t(v=>v.filter(k=>k.id!==h)),$.delete()},p=(h,v)=>t(k=>k.map(x=>x.id===h?{...x,...v}:x)),g=h=>{let v=U(0),k=!(e.find(x=>x.id===h)?.history||[]).includes(v);t(x=>x.map(w=>{if(w.id!==h)return w;let d=(w.history||[]).includes(v)?w.history.filter(f=>f!==v):[...w.history||[],v];return{...w,history:d.slice(-370)}})),k?($.success(),Zt.emit("vaultDone")):$.click()};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"HABIT-STREAK-TRACKING")),a.default.createElement("div",{className:"vault-grid"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>a.default.createElement(J0,{key:h.id,habit:h,onToggleToday:g,onDelete:c,onSave:p}))),a.default.createElement("div",{className:`composer ${l?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),a.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>a.default.createElement("button",{key:h,className:o===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function G0({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:o}){let[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(t.text),c=()=>{let p=s.trim();p&&o(e,t.id,p),l(!1)};return i?a.default.createElement("div",{className:"project-task-row"},a.default.createElement("input",{className:"project-task-edit",value:s,onChange:p=>u(p.target.value),onKeyDown:p=>p.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):a.default.createElement("div",{className:"project-task-row"},a.default.createElement(Bp,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),a.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),a.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function K0({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:o,onEditTask:i,onSave:l}){let[s,u]=(0,a.useState)(""),c=e.tasks.length,p=e.tasks.filter(b=>b.done).length,g=c?Math.round(p/c*100):0,h=j0(e.dueDate),[v,k]=(0,a.useState)(!1),[x,w]=(0,a.useState)(e.name),[m,d]=(0,a.useState)(e.dueDate||""),f=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},y=()=>{w(e.name),d(e.dueDate||""),k(!0)},N=()=>{let b=x.trim();b&&(l(e.id,{name:b,dueDate:m||null}),k(!1))};return v?a.default.createElement("div",{className:"project-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:x,onChange:b=>w(b.target.value),onKeyDown:b=>b.key==="Enter"&&N(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"date",className:"time-input",value:m,onChange:b=>d(b.target.value)})),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:N},"save")))):a.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${Qn(e.id)}`}},a.default.createElement("div",{className:"project-card-top"},a.default.createElement("span",{className:"project-name"},e.name),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:y,"aria-label":"Edit project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&a.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),a.default.createElement("div",{className:"progress-track small"},a.default.createElement("div",{className:"progress-fill",style:{width:`${g}%`}})),a.default.createElement("span",{className:"vault-card-pct"},p,"/",c," tasks \xB7 ",g,"%"),a.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>a.default.createElement(G0,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:o,onEdit:i}))),a.default.createElement("div",{className:"project-add-task"},a.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&f()})))}function X0({projects:e,setProjects:t}){let[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(""),[l,s]=(0,a.useState)(!1),u=()=>{let x=n.trim();if(!x){s(!0),setTimeout(()=>s(!1),420),$.error();return}t(w=>[...w,{id:ve(),name:x,dueDate:o||null,tasks:[]}]),r(""),i(""),$.click()},c=x=>{t(w=>w.filter(m=>m.id!==x)),$.delete()},p=(x,w)=>t(m=>m.map(d=>d.id===x?{...d,...w}:d)),g=(x,w)=>{t(m=>m.map(d=>d.id===x?{...d,tasks:[...d.tasks,{id:ve(),text:w,done:!1}]}:d)),$.click()},h=(x,w)=>{t(m=>m.map(d=>d.id!==x?d:{...d,tasks:d.tasks.map(f=>f.id===w?{...f,done:!f.done}:f)})),$.success()},v=(x,w)=>{t(m=>m.map(d=>d.id!==x?d:{...d,tasks:d.tasks.filter(f=>f.id!==w)})),$.delete()},k=(x,w,m)=>t(d=>d.map(f=>f.id!==x?f:{...f,tasks:f.tasks.map(y=>y.id===w?{...y,text:m}:y)}));return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"PROJECT-MANAGER")),a.default.createElement("div",{className:"vault-grid"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no projects yet")):e.map(x=>a.default.createElement(K0,{key:x.id,project:x,onDelete:c,onAddTask:g,onToggleTask:h,onDeleteTask:v,onEditTask:k,onSave:p}))),a.default.createElement("div",{className:`composer ${l?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:x=>r(x.target.value),onKeyDown:x=>x.key==="Enter"&&u()}),a.default.createElement("input",{type:"date",className:"time-input",value:o,onChange:x=>i(x.target.value)}),a.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function q0({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement(V0,{habits:e,setHabits:t}),a.default.createElement(X0,{projects:n,setProjects:r}))}var ht=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],hs=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],eo=ht.reduce((e,t)=>(e[t.key]=hs.filter(n=>n.area===t.key),e),{});function mp(e){return hs.find(t=>t.key===e)||null}function er(e){if(e.sub&&mp(e.sub)&&mp(e.sub).area===e.area)return e.sub;let t=eo[e.area];return t&&t.length?t[0].key:null}function Y0(e,t,n){let r=t.filter(i=>er(i)===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),o=n.filter(i=>er(i)===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-o}var hp=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Qn(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return hp[Math.abs(t)%hp.length]}var Yr=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function Dp(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),o=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return r-o-i}function yn(e){return 12.5*(e-1)*(e+6)}function Ap(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-yn(n),o=yn(n+1)-yn(n);return{level:n,into:r,span:o}}function Q0(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[o,i]of t)for(;n>=o;)r+=i,n-=o;return r}function Fp(e){if(e<=Yr.length)return Yr[e-1];let t=e-Yr.length+1;return`${Yr[Yr.length-1]} ${Q0(t)}`}var Z0=[{id:1,label:"Deep Work",area:"work",xp:40,history:[U(0),U(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[U(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],R0=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],eh=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function th({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(U(0)),[i,l]=(0,a.useState)(0),s=()=>{o||l(S=>S+1)},{streak:u,freezeUsed:c}=Fa(e.history),p=ht.find(S=>S.key===e.area)||ht[0],[g,h]=(0,a.useState)(!1),[v,k]=(0,a.useState)(e.label),[x,w]=(0,a.useState)(e.area),[m,d]=(0,a.useState)(()=>er(e)),[f,y]=(0,a.useState)(e.xp),N=()=>{k(e.label),w(e.area),d(er(e)),y(e.xp),h(!0)},b=()=>{let S=v.trim();S&&(r(e.id,{label:S,area:x,sub:m,xp:Math.max(1,+f||e.xp)}),h(!1))};return g?a.default.createElement("div",{className:"quest-habit-card good editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:v,onChange:S=>k(S.target.value),onKeyDown:S=>S.key==="Enter"&&b(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},ht.map(S=>a.default.createElement("button",{key:S.key,type:"button",className:`area-chip ${x===S.key?"active":""}`,style:{"--ac":S.color},onClick:()=>{w(S.key);let z=eo[S.key]||[];d(z.length?z[0].key:null)}},S.label))),a.default.createElement("div",{className:"edit-row edit-row-subs"},(eo[x]||[]).map(S=>a.default.createElement("button",{key:S.key,type:"button",className:`sub-chip ${m===S.key?"active":""}`,onClick:()=>d(S.key)},S.label))),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:f,onChange:S=>y(S.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>h(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:b},"save")))):a.default.createElement("div",{className:`quest-habit-card good ${i?"just-completed":""}`,key:`g${e.id}`},i>0&&a.default.createElement("span",{className:"xp-pop",key:i},"+",e.xp),a.default.createElement("span",{className:"area-dot",style:{background:p.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},e.label),a.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",p.label,u>0?` \xB7 \u{1F525}${u}${c?" \u2744\uFE0F":""}`:"")),a.default.createElement("button",{className:`quest-check ${o?"done":""}`,onClick:()=>{s(),t(e.id)},"aria-label":"Mark done today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:o?0:24,transition:"stroke-dashoffset 220ms ease"}}))),a.default.createElement("button",{className:"vault-card-edit",onClick:N,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function nh({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(U(0)),i=ht.find(f=>f.key===e.area)||ht[0],l=Pp(e.history),[s,u]=(0,a.useState)(!1),[c,p]=(0,a.useState)(e.label),[g,h]=(0,a.useState)(e.area),[v,k]=(0,a.useState)(()=>er(e)),[x,w]=(0,a.useState)(e.xp),m=()=>{p(e.label),h(e.area),k(er(e)),w(e.xp),u(!0)},d=()=>{let f=c.trim();f&&(r(e.id,{label:f,area:g,sub:v,xp:Math.max(1,+x||e.xp)}),u(!1))};return s?a.default.createElement("div",{className:"quest-habit-card bad editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:c,onChange:f=>p(f.target.value),onKeyDown:f=>f.key==="Enter"&&d(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},ht.map(f=>a.default.createElement("button",{key:f.key,type:"button",className:`area-chip ${g===f.key?"active":""}`,style:{"--ac":f.color},onClick:()=>{h(f.key);let y=eo[f.key]||[];k(y.length?y[0].key:null)}},f.label))),a.default.createElement("div",{className:"edit-row edit-row-subs"},(eo[g]||[]).map(f=>a.default.createElement("button",{key:f.key,type:"button",className:`sub-chip ${v===f.key?"active":""}`,onClick:()=>k(f.key)},f.label))),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:x,onChange:f=>w(f.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:d},"save")))):a.default.createElement("div",{className:"quest-habit-card bad"},a.default.createElement("span",{className:"area-dot",style:{background:i.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},e.label),a.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",i.label," \xB7 ",l,"x this week")),a.default.createElement("button",{className:`quest-check bad-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Log slip today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),a.default.createElement("button",{className:"vault-card-edit",onClick:m,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function rh({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:o}){let[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(e.label),[c,p]=(0,a.useState)(e.cost),g=()=>{u(e.label),p(e.cost),l(!0)},h=()=>{let v=s.trim();v&&(o(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>p(v.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP cost")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:h},"save")))):a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"reward-top"},a.default.createElement("span",{className:"reward-label"},e.label),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),a.default.createElement("span",{className:"reward-cost"},e.cost," XP"),a.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&a.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function oh({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:o,setRewards:i}){let l=(0,a.useMemo)(()=>Dp(e,n,o),[e,n,o]),{level:s,into:u,span:c}=Ap(l),p=Math.round(u/c*100),g=M=>{let O=U(0),A=!(e.find(I=>I.id===M)?.history||[]).includes(O);if(t(I=>I.map(H=>{if(H.id!==M)return H;let tr=(H.history||[]).includes(O)?H.history.filter(nr=>nr!==O):[...H.history||[],O];return{...H,history:tr.slice(-370)}})),A){$.success(),Zt.emit("habitDone");let I=Zn().hour;I<6&&Rr({earlyFinish:!0}),I>=0&&I<4&&Rr({lateFinish:!0})}else $.click()},h=M=>{let O=U(0),A=!(n.find(I=>I.id===M)?.history||[]).includes(O);r(I=>I.map(H=>{if(H.id!==M)return H;let tr=(H.history||[]).includes(O)?H.history.filter(nr=>nr!==O):[...H.history||[],O];return{...H,history:tr.slice(-370)}})),A?$.error():$.click()},v=M=>{t(O=>O.filter(A=>A.id!==M)),$.delete()},k=M=>{r(O=>O.filter(A=>A.id!==M)),$.delete()},x=(M,O)=>t(A=>A.map(I=>I.id===M?{...I,...O}:I)),w=(M,O)=>r(A=>A.map(I=>I.id===M?{...I,...O}:I)),m=M=>{let O=U(0);i(A=>A.map(I=>I.id===M?{...I,claimed:[...I.claimed||[],O]}:I)),$.success(),Zt.emit("rewardClaimed")},d=M=>{i(O=>O.filter(A=>A.id!==M)),$.delete()},f=(M,O)=>i(A=>A.map(I=>I.id===M?{...I,...O}:I)),[y,N]=(0,a.useState)(""),[b,S]=(0,a.useState)("work"),[z,j]=(0,a.useState)(20),[L,D]=(0,a.useState)(""),[J,_]=(0,a.useState)("work"),[W,T]=(0,a.useState)(20),[F,R]=(0,a.useState)(""),[be,V]=(0,a.useState)(100),q=()=>{let M=y.trim();M&&(t(O=>[...O,{id:ve(),label:M,area:b,xp:+z||10,history:[]}]),N(""),$.click())},de=()=>{let M=L.trim();M&&(r(O=>[...O,{id:ve(),label:M,area:J,xp:+W||10,history:[]}]),D(""),$.click())},ue=()=>{let M=F.trim();M&&(i(O=>[...O,{id:ve(),label:M,cost:+be||50,claimed:[]}]),R(""),$.click())},ze=hs.map(M=>({key:M.key,label:M.label,color:(ht.find(O=>O.key===M.area)||{}).color,value:Math.max(0,Y0(M.key,e,n))})),pe=e.reduce((M,O)=>M+O.xp*(O.history?.length||0),0),et=n.reduce((M,O)=>M+O.xp*(O.history?.length||0),0);return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"hero-card hero-card-viz"},a.default.createElement("div",{className:"hero-viz-row"},a.default.createElement(ps,{pct:p,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${s}`,sublabel:Fp(s)}),a.default.createElement("div",{className:"hero-viz-stats"},a.default.createElement("span",{className:"hero-xp-total"},a.default.createElement(Ct,{value:l})," ",a.default.createElement("small",null,"XP")),a.default.createElement("span",{className:"hero-xp-sub"},u,"/",c," to next level"),a.default.createElement("div",{className:"hero-xp-split"},a.default.createElement("span",{className:"hero-xp-earned"},"+",a.default.createElement(Ct,{value:pe})),a.default.createElement("span",{className:"hero-xp-lost"},"\u2212",a.default.createElement(Ct,{value:et})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"LIFE-AREAS")),a.default.createElement("div",{className:"radar-card"},a.default.createElement(L0,{axes:ze,size:252})),(pe>0||et>0)&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"XP SOURCE")),a.default.createElement("div",{className:"donut-card"},a.default.createElement(Lp,{size:120,stroke:16,centerLabel:l,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:pe,color:"#5EEAD4"},{key:"lost",label:"Lost",value:et,color:"#F0576B"}]}),a.default.createElement("div",{className:"donut-legend"},a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),a.default.createElement("span",null,"Earned from good habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(Ct,{value:pe}))),a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),a.default.createElement("span",null,"Lost to bad habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(Ct,{value:et})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"GOOD-HABITS")),a.default.createElement("div",{className:"quest-habit-list"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no good habits yet")):e.map(M=>a.default.createElement(th,{key:M.id,habit:M,onToggleToday:g,onDelete:v,onSave:x}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new good habit...",value:y,onChange:M=>N(M.target.value),onKeyDown:M=>M.key==="Enter"&&q()}),a.default.createElement("button",{className:"add-btn",onClick:q,"aria-label":"Add good habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},ht.map(M=>a.default.createElement("button",{key:M.key,className:b===M.key?"active":"",onClick:()=>S(M.key)},M.label)),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:z,onChange:M=>j(+M.target.value||5)})),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"BAD-HABITS")),a.default.createElement("div",{className:"quest-habit-list"},n.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no bad habits tracked")):n.map(M=>a.default.createElement(nh,{key:M.id,habit:M,onToggleToday:h,onDelete:k,onSave:w}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:L,onChange:M=>D(M.target.value),onKeyDown:M=>M.key==="Enter"&&de()}),a.default.createElement("button",{className:"add-btn",onClick:de,"aria-label":"Add bad habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},ht.map(M=>a.default.createElement("button",{key:M.key,className:J===M.key?"active":"",onClick:()=>_(M.key)},M.label)),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:W,onChange:M=>T(+M.target.value||5)})),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"REWARD-CENTER")),a.default.createElement("div",{className:"vault-grid"},o.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no rewards set up")):o.map(M=>a.default.createElement(rh,{key:M.id,reward:M,canClaim:l>=M.cost,onClaim:m,onDelete:d,onSave:f}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new reward...",value:F,onChange:M=>R(M.target.value),onKeyDown:M=>M.key==="Enter"&&ue()}),a.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:be,onChange:M=>V(+M.target.value||50)}),a.default.createElement("button",{className:"add-btn",onClick:ue,"aria-label":"Add reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var ah=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function ih(e=1e3*30){let[t,n]=(0,a.useState)(Date.now());return(0,a.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function lh(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function Bp({checked:e,onChange:t,color:n}){return a.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function sh({task:e,now:t,onToggle:n,onDelete:r,index:o}){let[i,l]=(0,a.useState)(!1),s=Da.find(c=>c.key===e.priority)||Da[0],u=()=>{l(!0),setTimeout(()=>r(e.id),220)};return a.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${o*35}ms`}},a.default.createElement(Bp,{checked:e.done,onChange:()=>n(e.id),color:s.color}),a.default.createElement("div",{className:"task-main"},a.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),a.default.createElement("span",{className:"task-meta"},a.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),a.default.createElement("span",{className:"prio-label"},s.label),a.default.createElement("span",{className:"dot-sep"},"\xB7"),a.default.createElement("span",null,lh(e.createdAt,t)))),a.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var gp="tasksh.tasks.v1",vp="tasksh.routines.v1",yp="tasksh.vaulthabits.v1",xp="tasksh.projects.v1",kp="tasksh.goodhabits.v1",bp="tasksh.badhabits.v1",wp="tasksh.rewards.v1",Np="tasksh.deviceid.v1",is="tasksh.notifyenabled.v1",cs="tasksh.aikey.v1";function uh({id:e,onDone:t}){let n=Mp(e);return(0,a.useEffect)(()=>{let r=setTimeout(t,4200);return()=>clearTimeout(r)},[e,t]),n?a.default.createElement("div",{className:"ach-toast",onClick:t},a.default.createElement("span",{className:"ach-toast-icon"},n.icon),a.default.createElement("span",{className:"ach-toast-body"},a.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),a.default.createElement("span",{className:"ach-toast-name"},n.name),a.default.createElement("span",{className:"ach-toast-desc"},n.desc)),a.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins)):null}function ch({level:e,coins:t,unlockedTheme:n,extraThemes:r=0,evolvedTo:o,onDone:i}){let l=Rn.find(u=>u.unlockLevel>e),s=ls(e);return a.default.createElement("div",{className:"lvl-backdrop",onClick:i},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"lvl-card",onClick:u=>u.stopPropagation()},a.default.createElement("div",{className:"lvl-kicker"},"level up"),a.default.createElement("div",{className:"lvl-num"},e),a.default.createElement("div",{className:"lvl-title"},Fp(e)),a.default.createElement("div",{className:"lvl-rewards"},a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),a.default.createElement("span",{className:"lvl-reward-text"},"+",t," coins")),n&&a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),a.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",a.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),o!=null&&a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),a.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),a.default.createElement("div",{className:"lvl-next"},l?`next theme at level ${l.unlockLevel}`:"all themes unlocked",s?` \xB7 next form at ${s.minLevel}`:""),a.default.createElement("button",{className:"evo-btn",onClick:i},"continue")))}function dh({earned:e,coins:t}){let n=new Set(e),r=Qr.filter(i=>!i.hidden||n.has(i.id)),o=Qr.filter(i=>i.hidden&&!n.has(i.id)).length;return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"ach-head"},a.default.createElement("span",{className:"sheet-title"},"achievements"),a.default.createElement("span",{className:"ach-count"},n.size,"/",Qr.length," \xB7 \u25C9 ",t)),a.default.createElement("div",{className:"ach-grid"},r.map(i=>{let l=n.has(i.id);return a.default.createElement("div",{key:i.id,className:`ach-card ${l?"got":""}`},a.default.createElement("span",{className:"ach-icon"},l?i.icon:"\xB7"),a.default.createElement("span",{className:"ach-name"},i.name),a.default.createElement("span",{className:"ach-desc"},i.desc),a.default.createElement("span",{className:"ach-coins"},"\u25C9 ",i.coins))})),o>0&&a.default.createElement("div",{className:"ach-hidden-note"},o," hidden achievement",o===1?"":"s"," left to discover"))}function ph({ctl:e,level:t,totalXP:n,earned:r=[],coins:o=0,onClose:i}){let l=yn(t+1),s=yn(t);return a.default.createElement("div",{className:"sheet-backdrop",onClick:i},a.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},"themes"),a.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"theme-grid"},e.themes.map(u=>{let c=us(u,t),p=e.themeId===u.id,g=yn(u.unlockLevel),h=yn(Math.max(1,u.unlockLevel-1)),v=c?100:Math.max(0,Math.min(99,Math.round((n-h)/(g-h)*100)));return a.default.createElement("button",{key:u.id,className:`theme-card ${p?"active":""} ${c?"":"locked"}`,onClick:()=>{c?(e.setThemeId(u.id),$.success()):$.error()},disabled:!c},a.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${u.colors.bg} 0%, ${u.colors.panel} 45%, ${u.colors.accent} 100%)`}},!c&&a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},a.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),p&&a.default.createElement("span",{className:"theme-active-dot"})),a.default.createElement("span",{className:"theme-name"},u.name),c?a.default.createElement("span",{className:"theme-blurb"},u.blurb):a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"theme-req"},"level ",u.unlockLevel),a.default.createElement("span",{className:"theme-bar"},a.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),a.default.createElement("span",{className:"theme-pct"},v,"%")))})),a.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,l-n)," XP to level ",t+1),a.default.createElement("div",{className:"ach-section"},a.default.createElement(dh,{earned:r,coins:o})),a.default.createElement("div",{className:"calm-toggle-row"},a.default.createElement("div",null,a.default.createElement("div",{className:"calm-toggle-label"},"calm mode"),a.default.createElement("div",{className:"calm-toggle-hint"},"slower motion, softer light, a breathing guide")),a.default.createElement("button",{className:`calm-switch ${e.calm?"on":""}`,onClick:()=>{e.calm||(Zt.emit("calmSession"),m0("calmSessions")),e.setCalm(!e.calm),$.click()},"aria-pressed":e.calm},a.default.createElement("span",{className:"calm-knob"}))),a.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",a.default.createElement("b",null,e.phase.label))))}function Ta({label:e,value:t,color:n}){return a.default.createElement("div",{className:"pet-stat"},a.default.createElement("div",{className:"pet-stat-top"},a.default.createElement("span",{className:"pet-stat-label"},e),a.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),a.default.createElement("div",{className:"pet-stat-track"},a.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function fh({from:e,to:t,petName:n,onDone:r}){(0,a.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let o=xn[t];return a.default.createElement("div",{className:"evo-backdrop",onClick:r},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},a.default.createElement("div",{className:"evo-kicker"},"evolution"),a.default.createElement("div",{className:"evo-stage-row"},a.default.createElement("div",{className:"evo-old"},a.default.createElement(ss,{stage:e,mood:"content",size:72,animate:!1})),a.default.createElement("span",{className:"evo-arrow"},"\u2192"),a.default.createElement("div",{className:"evo-new"},a.default.createElement(ss,{stage:t,mood:"joyful",size:132,evolving:!0}))),a.default.createElement("div",{className:"evo-name"},n," became ",a.default.createElement("b",null,o.name)),a.default.createElement("div",{className:"evo-title"},o.title),a.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var to="https://tasksh-notify.techcraftor.workers.dev",mh="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function hh(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;i++)o[i]=r.charCodeAt(i);return o}function gs(){let e=localStorage.getItem(Np);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Np,e)),e}async function gh(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:hh(mh)}));let r=gs();if(!(await fetch(`${to}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function vh(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=gs();try{await fetch(`${to}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function Sp(e){let t=gs();try{await fetch(`${to}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function yh(){try{return localStorage.getItem(cs)||""}catch{return""}}function Ip(e){try{e?localStorage.setItem(cs,e):localStorage.removeItem(cs)}catch{}}function xh(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var Aa=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function kh(e){let t=await fetch(`${to}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function bh(e,t,n,r,o){let i=await fetch(`${to}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,data:t,context:n,log:r,apiKey:o})}),l=null;try{l=await i.json()}catch{}if(!i.ok){let s=l&&l.error;throw s==="no_key"||s==="bad_key"?new Aa(l&&l.message||"key rejected"):new Error(l&&l.message||`request failed (${i.status})`)}return{reply:l&&l.reply||"\u2026",actions:l&&l.actions||[]}}var wh=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function Ep(e,t){let n=(r,o)=>(r||[]).find(i=>i.id===o);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Mt(Re(e.time))} \xB7 ${e.label} (${zt(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),o=[];return e.time!==void 0&&e.time!==r?.time&&o.push(`${Mt(Re(r?.time||"00:00"))} \u2192 ${Mt(Re(e.time))}`),e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&o.push(`${zt(r?.duration||0)} \u2192 ${zt(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${o.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),o=[];return e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&o.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${o.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function Nh(e,t,n){let{routines:r,vaultHabits:o,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:ve(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(p=>p.id===c.id?{...p,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:p),u.add("routines");break;case"delete_routine":r=r.filter(p=>p.id!==c.id),u.add("routines");break;case"add_vault_habit":o=[...o,{id:ve(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":o=o.map(p=>p.id===c.id?{...p,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:p),u.add("vaultHabits");break;case"delete_vault_habit":o=o.filter(p=>p.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:ve(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(p=>p.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:ve(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(p=>p.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:ve(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(p=>p.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(o),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}function Sh({petCtl:e,state:t,setters:n,ctx:r,showDataMsg:o}){let{pet:i,form:l,mood:s,nudge:u,remember:c,rename:p}=e,[g,h]=(0,a.useState)(()=>yh()),[v,k]=(0,a.useState)(!1),[x,w]=(0,a.useState)(null),[m,d]=(0,a.useState)(""),[f,y]=(0,a.useState)(!1),[N,b]=(0,a.useState)(0),[S,z]=(0,a.useState)(null),[j,L]=(0,a.useState)(null),[D,J]=(0,a.useState)(()=>new Set),[_,W]=(0,a.useState)(!1),[T,F]=(0,a.useState)(i.name),[R,be]=(0,a.useState)(!0),V=(0,a.useRef)(null),q=(0,a.useRef)(0),de=(0,a.useMemo)(()=>x0(r),[r]);(0,a.useEffect)(()=>{if(!f){b(0);return}let A=Date.now(),I=setInterval(()=>b((Date.now()-A)/1e3),100);return()=>clearInterval(I)},[f]),(0,a.useEffect)(()=>{V.current&&(V.current.scrollTop=V.current.scrollHeight)},[i.log,j,f]);let ue=async A=>{let I=(A??m).trim();if(!I||f)return;let H=Date.now()-q.current;if(H<3e3){z(`give me a second \u2014 ${Math.ceil((3e3-H)/1e3)}s`);return}if(d(""),c("user",I),u("chat"),$.click(),!g){c("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),k(!0);return}q.current=Date.now(),y(!0),z(null),L(null),J(new Set);try{let _e=await bh(I,{routines:t.routines,vaultHabits:t.vaultHabits,goodHabits:t.goodHabits,badHabits:t.badHabits,rewards:t.rewards,totalXP:t.totalXP},k0(r),i.log||[],g);c("pet",_e.reply),_e.actions.length&&(L(_e),$.success())}catch(_e){_e instanceof Aa?(Ip(""),h(""),w(_e.message),k(!0),c("pet","my link to the wider world got rejected. mind checking the key?")):(c("pet","couldn't reach far enough to answer that. try again in a moment."),z(_e.message||null)),$.error()}finally{y(!1)}},ze=A=>J(I=>{let H=new Set(I);return H.has(A)?H.delete(A):H.add(A),H}),pe=j?j.actions.filter((A,I)=>!D.has(I)):[],et=()=>{pe.length&&(Nh(pe,t,n),$.success(),u("chat"),o("success",`applied ${pe.length} change${pe.length===1?"":"s"}`),c("pet",`done \u2014 ${pe.length} change${pe.length===1?"":"s"} applied.`),L(null),J(new Set))},M=()=>{$.whoosh(),c("pet","left it as it was."),L(null),J(new Set)};if(v)return a.default.createElement(Eh,{initialError:x,onCancel:()=>k(!1),onSaved:(A,I)=>{h(A),w(null),k(!1),o("success",I||"connected")}});let O=pe.reduce((A,I)=>{let H=Ep(I,t).kind;return A[H]=(A[H]||0)+1,A},{});return a.default.createElement("div",{className:"task-list companion-scroll"},a.default.createElement("div",{className:"cmp-hero"},a.default.createElement(ss,{stage:l.stage,mood:s.key,size:132}),a.default.createElement("div",{className:"cmp-id"},_?a.default.createElement("input",{className:"pet-name-input",value:T,autoFocus:!0,maxLength:14,onChange:A=>F(A.target.value),onBlur:()=>{p(T),W(!1)},onKeyDown:A=>{A.key==="Enter"&&(p(T),W(!1))}}):a.default.createElement("button",{className:"pet-name",onClick:()=>{F(i.name),W(!0)}},i.name),a.default.createElement("span",{className:"pet-form"},l.name," \xB7 ",s.label)),a.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>be(A=>!A)},R?"stats":"hide")),!R&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"pet-stats"},a.default.createElement(Ta,{label:"happiness",value:i.happiness,color:"var(--accent)"}),a.default.createElement(Ta,{label:"energy",value:i.energy,color:"var(--accent2)"}),a.default.createElement(Ta,{label:"friendship",value:i.friendship,color:"var(--accent)"}),a.default.createElement(Ta,{label:"intelligence",value:i.intelligence,color:"var(--accent2)"})),a.default.createElement("div",{className:"pet-next"},zp(i.friendship),ls(r.level)?` \xB7 next form at level ${ls(r.level).minLevel}`:" \xB7 final form")),a.default.createElement("div",{className:"cmp-chat",ref:V},a.default.createElement("div",{className:"pet-msg pet cmp-greeting"},de),(i.log||[]).map((A,I)=>a.default.createElement("div",{key:I,className:`pet-msg ${A.role}`},A.text)),f&&a.default.createElement("div",{className:"pet-msg pet thinking"},a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),N>=1&&a.default.createElement("span",{className:"cmp-elapsed"},N.toFixed(1),"s")),j&&j.actions.length>0&&a.default.createElement("div",{className:"cmp-diff-wrap"},a.default.createElement("div",{className:"ai-diff-head"},a.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),a.default.createElement("span",{className:"ai-diff-counts"},O.add?a.default.createElement("span",{className:"c-add"},"+",O.add):null,O.edit?a.default.createElement("span",{className:"c-edit"},"~",O.edit):null,O.remove?a.default.createElement("span",{className:"c-remove"},"\u2212",O.remove):null)),a.default.createElement("div",{className:"ai-diff"},j.actions.map((A,I)=>{let H=Ep(A,t),_e=D.has(I);return a.default.createElement("button",{key:I,className:`ai-diff-row ${H.kind} ${_e?"skipped":""}`,onClick:()=>ze(I),title:_e?"click to include":"click to skip"},a.default.createElement("span",{className:"ai-sign"},H.kind==="add"?"+":H.kind==="remove"?"\u2212":"~"),a.default.createElement("span",{className:"ai-surface"},H.surface),a.default.createElement("span",{className:"ai-diff-text"},H.text),a.default.createElement("span",{className:"ai-skip-mark"},_e?"skipped":""))})),a.default.createElement("div",{className:"ai-actions"},a.default.createElement("button",{className:"ai-apply",onClick:et,disabled:!pe.length},"apply ",pe.length||""),a.default.createElement("button",{className:"ai-discard",onClick:M},"discard")),a.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),S&&a.default.createElement("div",{className:"ai-error cmp-error"},S),(i.log||[]).length===0&&!f&&a.default.createElement("div",{className:"ai-chips cmp-chips"},wh.map(A=>a.default.createElement("button",{key:A,className:"ai-chip",onClick:()=>ue(A)},A))),a.default.createElement("div",{className:"pet-composer"},a.default.createElement("input",{className:"pet-input",placeholder:g?`talk to ${i.name}\u2026`:`say hello to ${i.name}\u2026`,value:m,onChange:A=>d(A.target.value),onKeyDown:A=>A.key==="Enter"&&ue(),disabled:f}),a.default.createElement("button",{className:"pet-send",onClick:()=>ue(),disabled:f||!m.trim()},"say")),a.default.createElement("button",{className:"cmp-key-link",onClick:()=>k(!0)},g?`key ${xh(g)}`:"connect an ai key"))}function Eh({onSaved:e,initialError:t,onCancel:n}){let[r,o]=(0,a.useState)(""),[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(t||null),c=(0,a.useRef)(null);(0,a.useEffect)(()=>{c.current?.focus()},[]);let p=async()=>{let g=r.trim();if(!(!g||i)){l(!0),u(null);try{let h=await kh(g);Ip(g),$.success(),e(g,h)}catch(h){u(h.message||"Couldn't verify that key."),$.error()}finally{l(!1)}}};return a.default.createElement("div",{className:"task-list ai-scroll"},a.default.createElement("div",{className:"ai-gate"},a.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),a.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),a.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),a.default.createElement("ol",{className:"ai-gate-steps"},a.default.createElement("li",null,"open"," ",a.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),a.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),a.default.createElement("li",null,"copy it and paste it below")),a.default.createElement("input",{ref:c,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:g=>o(g.target.value),onKeyDown:g=>{g.key==="Enter"&&p()},disabled:i}),s&&a.default.createElement("div",{className:"ai-error ai-gate-error"},s),a.default.createElement("div",{className:"ai-gate-actions"},a.default.createElement("button",{className:"ai-apply",onClick:p,disabled:i||!r.trim()},i?"checking\u2026":"save key"),n&&a.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),a.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function Oe(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ch(e){typeof e=="number"&&Number.isFinite(e)&&e>Pa&&(Pa=e)}function Mh(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(o=>n(o?.id))}),t}function zh({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:o,goodHabits:i,rewards:l,setRewards:s,totalXP:u,setTab:c}){let p=fs(),g=p.hour*60+p.minute,{sorted:h,currentId:v,nextId:k}=ms(e,g),x=h.find(D=>D.id===v),w=h.find(D=>D.id===k),m=U(0),d=D=>{let J=!(e.find(_=>_.id===D)?.history||[]).includes(m);t(_=>_.map(W=>{if(W.id!==D)return W;let F=(W.history||[]).includes(m)?W.history.filter(R=>R!==m):[...W.history||[],m];return{...W,history:F.slice(-60)}})),J?($.error(),Zt.emit("badHabit")):$.click()},f=(0,a.useMemo)(()=>{let D={high:0,mid:1,low:2};return[...n].filter(J=>!J.done).sort((J,_)=>D[J.priority]-D[_.priority])},[n]),y=D=>{r(J=>J.map(_=>_.id===D?{..._,done:!_.done}:_)),$.success()},N=(0,a.useMemo)(()=>l.filter(D=>u>=D.cost),[l,u]),b=D=>{s(J=>J.map(_=>_.id===D?{..._,claimed:[..._.claimed||[],m]}:_)),$.success()},S=(0,a.useMemo)(()=>{let D={},J=_=>{(_||[]).forEach(W=>{D[W]=(D[W]||0)+1})};return e.forEach(_=>J(_.history)),o.forEach(_=>J(_.history)),i.forEach(_=>J(_.history)),D},[e,o,i]),z=x||w,j=!!x,L=z?(z.history||[]).includes(m):!1;return a.default.createElement("div",{className:"task-list today-view"},a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,j?"HAPPENING NOW":"NEXT UP")),z?a.default.createElement("div",{className:"today-card"},a.default.createElement("div",{className:"today-card-row"},a.default.createElement("span",{className:"today-card-time"},Mt(Re(z.time))),a.default.createElement("span",{className:"today-card-label"},z.label)),a.default.createElement("div",{className:"today-card-sub"},j?`in progress \xB7 ${zt(z.duration)}`:`in ${Math.max(0,Re(z.time)-g)}m \xB7 ${zt(z.duration)}`),a.default.createElement("button",{className:`today-mark-btn ${L?"done":""}`,onClick:()=>d(z.id)},L?"\u2713 completed today":"mark complete")):a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no routines set up yet")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"ACTIVITY")),a.default.createElement(P0,{counts:S,weeksBack:12}),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"OPEN TASKS"),f.length>0&&a.default.createElement("button",{className:"today-view-all",onClick:()=>c("tasks")},"view all in tasks \u2192")),f.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):a.default.createElement("div",{className:"today-list"},f.slice(0,5).map((D,J)=>a.default.createElement("div",{key:D.id,className:"today-task-row",style:{animationDelay:`${J*35}ms`}},a.default.createElement("button",{className:"today-task-check",onClick:()=>y(D.id),"aria-label":"Complete task"}),a.default.createElement("span",{className:"today-task-text"},D.text),a.default.createElement("span",{className:`today-prio-dot ${D.priority}`}))),f.length>5&&a.default.createElement("button",{className:"today-more",onClick:()=>c("tasks")},"+",f.length-5," more")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),a.default.createElement("span",{className:"today-xp-total"},a.default.createElement(Ct,{value:u})," XP")),N.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):a.default.createElement("div",{className:"today-list"},N.map((D,J)=>a.default.createElement("div",{key:D.id,className:"today-task-row",style:{animationDelay:`${J*35}ms`}},a.default.createElement("span",{className:"today-task-text"},D.label),a.default.createElement("span",{className:"today-reward-cost"},D.cost," XP"),a.default.createElement("button",{className:"today-claim-btn",onClick:()=>b(D.id)},"claim")))))}function _h(){let[e,t]=(0,a.useState)("today"),[n,r]=_0(),o=C=>{C!==e&&$.whoosh(),t(C)},[i,l]=(0,a.useState)(()=>Oe(gp,ah)),[s,u]=(0,a.useState)(()=>Oe(vp,F0)),[c,p]=(0,a.useState)(()=>Oe(yp,U0)),[g,h]=(0,a.useState)(()=>Oe(xp,W0)),[v,k]=(0,a.useState)(()=>Oe(kp,Z0)),[x,w]=(0,a.useState)(()=>Oe(bp,R0)),[m,d]=(0,a.useState)(()=>Oe(wp,eh)),f=(0,a.useMemo)(()=>Dp(v,x,m),[v,x,m]),y=(0,a.useMemo)(()=>Ap(f).level,[f]),N=S0(y),b=b0(y),S=U(0),z=(0,a.useMemo)(()=>{let C=Oe(Zr,{});return{level:y,tasksDone:i.filter(B=>B.done).length,bestStreak:Math.max(v.reduce((B,Y)=>Math.max(B,os(Y.history)),0),s.reduce((B,Y)=>Math.max(B,os(Y.history)),0)),doneToday:v.filter(B=>(B.history||[]).includes(S)).length,totalHabits:v.length,routinesDoneToday:s.filter(B=>(B.history||[]).includes(S)).length,totalRoutines:s.length,vaultCount:c.length,friendship:b.pet.friendship,petStage:b.pet.stage,chats:b.pet.chats,calmSessions:C.calmSessions||0,earlyFinish:!!C.earlyFinish,lateFinish:!!C.lateFinish,returnedAfterGap:!!C.returnedAfterGap}},[y,i,v,s,c,b.pet,S]),j=v0(z),[L,D]=(0,a.useState)(null);(0,a.useEffect)(()=>{let B=Oe(Zr,{}).seenLevel||1;if(y>B){let Y=g0(y);j.addCoins(Y);let re=Rn.filter(we=>we.unlockLevel>B&&we.unlockLevel<=y);D({level:y,coins:Y,unlockedTheme:re.length?re[re.length-1]:null,extraThemes:re.length>1?re.length-1:0,evolvedTo:La(y).stage>La(B).stage?La(y).stage:null}),Rr({seenLevel:y})}else y<B&&Rr({seenLevel:y})},[y]);let[J,_]=(0,a.useState)(""),[W,T]=(0,a.useState)("mid"),[F,R]=(0,a.useState)("all"),be=(0,a.useRef)(null),V=(0,a.useRef)(null),[q,de]=(0,a.useState)(null),ue=ih(),[ze,pe]=(0,a.useState)(()=>localStorage.getItem(is)==="1"),[et,M]=(0,a.useState)(!1),[O,A]=(0,a.useState)(!1);(0,a.useEffect)(()=>{ze&&Sp(s)},[s,ze]);let I=async()=>{if(!et){M(!0);try{ze?(await vh(),localStorage.setItem(is,"0"),pe(!1),H("success","Notifications turned off")):(await gh(),await Sp(s),localStorage.setItem(is,"1"),pe(!0),H("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(C){H("error",C.message||"Couldn't set up notifications")}finally{M(!1)}}},H=(C,B)=>{de({type:C,text:B})};(0,a.useEffect)(()=>{if(!q)return;let C=setTimeout(()=>de(null),3200);return()=>clearTimeout(C)},[q]);let _e=()=>{try{let C={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:g,goodHabits:v,badHabits:x,rewards:m}},B=new Blob([JSON.stringify(C,null,2)],{type:"application/json"}),Y=URL.createObjectURL(B),re=U(0),we=document.createElement("a");we.href=Y,we.download=`tasks-sh-backup-${re}.json`,document.body.appendChild(we),we.click(),we.remove(),URL.revokeObjectURL(Y),H("ok","backup exported")}catch{H("err","export failed")}},tr=()=>V.current?.click(),nr=C=>{let B=C.target.files&&C.target.files[0];if(C.target.value="",!B)return;let Y=new FileReader;Y.onerror=()=>H("err","couldn't read that file"),Y.onload=()=>{try{let re=JSON.parse(String(Y.result)),we=re&&typeof re=="object"&&re.data?re.data:re;if(!we||typeof we!="object")throw new Error("bad shape");let ws={tasks:l,routines:u,vaultHabits:p,projects:h,goodHabits:k,badHabits:w,rewards:d},ao=0;for(let Ba of Object.keys(ws))Array.isArray(we[Ba])&&(ws[Ba](we[Ba]),ao++);if(ao===0){H("err","no recognizable data in that file");return}Ch(Mh(we)),H("ok",`imported ${ao} data set${ao===1?"":"s"}`)}catch{H("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},Y.readAsText(B)},vs=fs(),$p=vs.hour*60+vs.minute,{currentId:kn,sorted:ys}=ms(s,$p),[no,ro]=(0,a.useState)(null),oo=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{if(oo.current===void 0){oo.current=kn;return}if(kn!==oo.current){let C=ys.find(B=>B.id===kn);C&&ro({id:kn,label:C.label,time:C.time}),oo.current=kn}},[kn,ys]),(0,a.useEffect)(()=>{if(!no)return;let C=setTimeout(()=>ro(null),6e3);return()=>clearTimeout(C)},[no]),(0,a.useEffect)(()=>{try{localStorage.setItem(gp,JSON.stringify(i))}catch{}},[i]),(0,a.useEffect)(()=>{try{localStorage.setItem(vp,JSON.stringify(s))}catch{}},[s]),(0,a.useEffect)(()=>{try{localStorage.setItem(yp,JSON.stringify(c))}catch{}},[c]),(0,a.useEffect)(()=>{try{localStorage.setItem(xp,JSON.stringify(g))}catch{}},[g]),(0,a.useEffect)(()=>{try{localStorage.setItem(kp,JSON.stringify(v))}catch{}},[v]),(0,a.useEffect)(()=>{try{localStorage.setItem(bp,JSON.stringify(x))}catch{}},[x]),(0,a.useEffect)(()=>{try{localStorage.setItem(wp,JSON.stringify(m))}catch{}},[m]);let _t=(0,a.useMemo)(()=>{let C=i.length,B=i.filter(we=>we.done).length,Y=C-B,re=C===0?0:Math.round(B/C*100);return{total:C,done:B,pending:Y,pct:re}},[i]),xs=(0,a.useMemo)(()=>{let C=i.filter(B=>!B.done);return Da.map(B=>({key:B.key,label:B.label,color:B.color,value:C.filter(Y=>Y.priority===B.key).length}))},[i]),ks=(0,a.useMemo)(()=>{let C=i;return F==="active"&&(C=C.filter(B=>!B.done)),F==="done"&&(C=C.filter(B=>B.done)),[...C].sort((B,Y)=>{if(B.done!==Y.done)return B.done?1:-1;let re={high:0,mid:1,low:2};return re[B.priority]-re[Y.priority]})},[i,F]),bs=()=>{let C=J.trim();C&&(l(B=>[...B,{id:ve(),text:C,done:!1,priority:W,createdAt:Date.now()}]),_(""),be.current?.focus(),$.click())},Op=C=>{let B=!i.find(Y=>Y.id===C)?.done;l(Y=>Y.map(re=>re.id===C?{...re,done:!re.done}:re)),B?($.success(),Zt.emit("taskDone")):$.click()},jp=C=>{l(B=>B.filter(Y=>Y.id!==C)),$.delete()},Up=()=>{l(C=>C.filter(B=>!B.done)),$.whoosh()};return a.default.createElement("div",{className:"app-root","data-particle":N.theme.ambient.particle},j.current&&a.default.createElement(uh,{id:j.current,onDone:j.shift}),L&&a.default.createElement(ch,{level:L.level,coins:L.coins,unlockedTheme:L.unlockedTheme,extraThemes:L.extraThemes,evolvedTo:L.evolvedTo,onDone:()=>D(null)}),b.evolution&&a.default.createElement(fh,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),O&&a.default.createElement(ph,{ctl:N,level:y,totalXP:f,earned:j.earned,coins:j.coins,onClose:()=>A(!1)}),a.default.createElement("style",null,`
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
          scale: 3;
          background:
            radial-gradient(58% 42% at 14% 8%,  var(--accent),  transparent 62%),
            radial-gradient(52% 40% at 88% 92%, var(--accent2), transparent 62%),
            radial-gradient(46% 38% at 72% 26%, var(--accent),  transparent 66%),
            radial-gradient(50% 44% at 26% 74%, var(--accent2), transparent 66%);
          /* the gradients use full-strength theme colours and are dimmed
             here, so every theme keeps its own character */
          opacity: 0.14;
          animation: ambientDriftScaled calc(96s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        /* drift keyframes for the downscaled layer: the parent already has
           scale:3, so these only translate */
        @keyframes ambientDriftScaled {
          0%   { translate: 0 0; }
          50%  { translate: 2.5% -2%; }
          100% { translate: -2% 2.5%; }
        }

        /* a second, slower counter-drifting layer stops it reading as a
           static wash */
        .amb-scoped.amb-blobs::after {
          content: "";
          position: absolute;
          inset: -18%;
          background:
            radial-gradient(46% 40% at 78% 18%, var(--accent),  transparent 64%),
            radial-gradient(44% 42% at 20% 84%, var(--accent2), transparent 64%);
          opacity: 0.55;
          will-change: transform;
          animation: ambientDriftAlt calc(138s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        /* the time-of-day wash needs more presence inside the panel too */
        .amb-scoped.amb-time {
          /* same 1/3-resolution trick as the blobs: pure gradient, so the
             upscale is free but the rasterised area drops ~9x */
          width: 34.5%;
          height: 34.5%;
          inset: 0 auto auto 0;
          transform-origin: 0 0;
          scale: 3;
          background: radial-gradient(130% 78% at 50% -8%, var(--time-warm), transparent 62%);
          opacity: calc(var(--time-light, 1) * 2.2);
        }

        /* Large panels: the ambience costs fill-rate proportional to area,
           and the subtlest layers are the least visible on a big screen.
           Shed them above 900px rather than dropping frames for effects
           nobody can see. Phones keep the full stack. */
        @media (min-width: 900px) {
          .amb-scoped.amb-grain { display: none; }
          .amb-scoped.amb-time { opacity: calc(var(--time-light, 1) * 1.4); }
          .amb-scoped.amb-blobs { opacity: 0.10; }
        }

        /* Everything the user actually reads sits above the ambience. */
        .panel > .titlebar,
        .panel > .tabs,
        .panel > .tab-content,
        .panel > .data-msg,
        .panel > .banner { position: relative; z-index: 1; }



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
        .amb-stars span {
          position: absolute;
          width: 2px; height: 2px;
          border-radius: 50%;
          background: #FFFFFF;
          animation: twinkle ease-in-out infinite alternate;
        }
        @keyframes twinkle {
          from { opacity: 0.12; }
          to   { opacity: 0.6; }
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
      `),a.default.createElement("div",{className:"panel"},a.default.createElement(N0,{theme:N.theme,phase:N.phase,calm:N.calm,scoped:!0}),no&&a.default.createElement("div",{className:"quest-banner",onClick:()=>ro(null)},a.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),a.default.createElement("span",{className:"quest-banner-text"},a.default.createElement("b",null,"Now:")," ",no.label),a.default.createElement("button",{className:"quest-banner-close",onClick:C=>{C.stopPropagation(),ro(null)},"aria-label":"Dismiss"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),a.default.createElement("div",{className:"titlebar"},a.default.createElement("div",{className:"titlebar-left"},a.default.createElement("div",{className:"dots"},a.default.createElement("span",{className:"dot red"}),a.default.createElement("span",{className:"dot amber"}),a.default.createElement("span",{className:"dot green"})),a.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),a.default.createElement("div",{className:"titlebar-right"},a.default.createElement("input",{type:"file",accept:"application/json",ref:V,onChange:nr,style:{display:"none"}}),a.default.createElement("button",{className:`titlebar-icon-btn ${ze?"notify-on":""}`,onClick:I,disabled:et,"aria-label":ze?"Turn off notifications":"Turn on notifications",title:ze?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},ze?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{A(!0),$.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:tr,"aria-label":"Import backup",title:"Import backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:_e,"aria-label":"Export backup",title:"Export backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("span",{className:"clock"},new Date(ue).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),q&&a.default.createElement("div",{className:`data-toast ${q.type}`},q.text),a.default.createElement("div",{className:"tabs"},a.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>o("today")},"today"),a.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>o("tasks")},"tasks"),a.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>o("routines")},"routines"),a.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>o("vault")},"vault"),a.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>o("quest")},"quest"),a.default.createElement("button",{className:`tab-pet ${e==="pet"?"active":""}`,onClick:()=>o("pet")},b.pet.name.toLowerCase())),a.default.createElement("div",{key:e,className:"tab-content"},e==="today"?a.default.createElement(zh,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:v,rewards:m,setRewards:d,totalXP:f,setTab:o}):e==="tasks"?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"stats-bar stats-bar-viz"},a.default.createElement(ps,{pct:_t.pct,size:64,stroke:5.5,label:`${_t.pct}%`}),a.default.createElement("div",{className:"stats-row-viz"},a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Ct,{value:_t.total}))," total"),a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Ct,{value:_t.pending}))," pending"),a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Ct,{value:_t.done}))," done"))),_t.pending>0&&a.default.createElement("div",{className:"donut-card"},a.default.createElement(Lp,{size:96,stroke:14,centerLabel:_t.pending,centerSublabel:"open",segments:xs.map(C=>({key:C.key,value:C.value,color:C.color}))}),a.default.createElement("div",{className:"donut-legend"},xs.map(C=>a.default.createElement("div",{className:"donut-legend-row",key:C.key},a.default.createElement("span",{className:"donut-legend-dot",style:{background:C.color}}),a.default.createElement("span",null,C.label," priority"),a.default.createElement("span",{className:"donut-legend-val"},C.value))))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{ref:be,type:"text",placeholder:"add a task, press enter...",value:J,onChange:C=>_(C.target.value),onKeyDown:C=>C.key==="Enter"&&bs()}),a.default.createElement("div",{className:"prio-select"},Da.map(C=>a.default.createElement("button",{key:C.key,className:W===C.key?"active":"",style:{"--pc":C.color},onClick:()=>T(C.key)},C.label))),a.default.createElement("button",{className:"add-btn",onClick:bs,"aria-label":"Add task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"filters"},["all","active","done"].map(C=>a.default.createElement("button",{key:C,className:F===C?"active":"",onClick:()=>R(C)},C)),a.default.createElement("span",{className:"spacer"}),_t.done>0&&a.default.createElement("button",{className:"clear-btn",onClick:Up},"clear done")),a.default.createElement("div",{className:"task-list"},ks.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},F==="done"?"nothing completed yet":"queue's empty \u2014 add something")):ks.map((C,B)=>a.default.createElement(sh,{key:C.id,task:C,now:ue,index:B,onToggle:Op,onDelete:jp})))):e==="routines"?a.default.createElement(I0,{routines:s,setRoutines:u}):e==="vault"?a.default.createElement(q0,{vaultHabits:c,setVaultHabits:p,projects:g,setProjects:h}):e==="quest"?a.default.createElement(oh,{goodHabits:v,setGoodHabits:k,badHabits:x,setBadHabits:w,rewards:m,setRewards:d}):a.default.createElement(Sh,{petCtl:b,state:{routines:s,vaultHabits:c,goodHabits:v,badHabits:x,rewards:m,totalXP:f},setters:{setRoutines:u,setVaultHabits:p,setGoodHabits:k,setBadHabits:w,setRewards:d},showDataMsg:H,ctx:{pet:b.pet,level:y,hour:Zn().hour,phase:N.phase.id,doneToday:v.filter(C=>(C.history||[]).includes(U(0))).length,totalToday:v.length,streak:v.reduce((C,B)=>Math.max(C,os(B.history)),0),routineNow:null,nextRoutine:null}}))))}var Th=Cp.default.createRoot(document.getElementById("root"));Th.render(a.default.createElement(_h));})();
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
