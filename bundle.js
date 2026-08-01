(()=>{var hp=Object.create;var os=Object.defineProperty;var vp=Object.getOwnPropertyDescriptor;var gp=Object.getOwnPropertyNames;var yp=Object.getPrototypeOf,xp=Object.prototype.hasOwnProperty;var Zt=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var kp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of gp(t))!xp.call(e,o)&&o!==n&&os(e,o,{get:()=>t[o],enumerable:!(r=vp(t,o))||r.enumerable});return e};var is=(e,t,n)=>(n=e!=null?hp(yp(e)):{},kp(t||!e||!e.__esModule?os(n,"default",{value:e,enumerable:!0}):n,e));var gs=Zt(W=>{"use strict";var Qn=Symbol.for("react.element"),wp=Symbol.for("react.portal"),bp=Symbol.for("react.fragment"),Np=Symbol.for("react.strict_mode"),Sp=Symbol.for("react.profiler"),Ep=Symbol.for("react.provider"),Cp=Symbol.for("react.context"),Mp=Symbol.for("react.forward_ref"),zp=Symbol.for("react.suspense"),_p=Symbol.for("react.memo"),Tp=Symbol.for("react.lazy"),as=Symbol.iterator;function Pp(e){return e===null||typeof e!="object"?null:(e=as&&e[as]||e["@@iterator"],typeof e=="function"?e:null)}var us={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ds=Object.assign,cs={};function yn(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||us}yn.prototype.isReactComponent={};yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ps(){}ps.prototype=yn.prototype;function Ei(e,t,n){this.props=e,this.context=t,this.refs=cs,this.updater=n||us}var Ci=Ei.prototype=new ps;Ci.constructor=Ei;ds(Ci,yn.prototype);Ci.isPureReactComponent=!0;var ls=Array.isArray,fs=Object.prototype.hasOwnProperty,Mi={current:null},ms={key:!0,ref:!0,__self:!0,__source:!0};function hs(e,t,n){var r,o={},a=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)fs.call(t,r)&&!ms.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),d=0;d<s;d++)u[d]=arguments[d+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Qn,type:e,key:a,ref:l,props:o,_owner:Mi.current}}function Lp(e,t){return{$$typeof:Qn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function zi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Qn}function Dp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ss=/\/+/g;function Si(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Dp(""+e.key):t.toString(36)}function qr(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Qn:case wp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Si(l,0):r,ls(o)?(n="",e!=null&&(n=e.replace(ss,"$&/")+"/"),qr(o,t,n,"",function(d){return d})):o!=null&&(zi(o)&&(o=Lp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ss,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ls(e))for(var s=0;s<e.length;s++){a=e[s];var u=r+Si(a,s);l+=qr(a,t,n,u,o)}else if(u=Pp(e),typeof u=="function")for(e=u.call(e),s=0;!(a=e.next()).done;)a=a.value,u=r+Si(a,s++),l+=qr(a,t,n,u,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Gr(e,t,n){if(e==null)return e;var r=[],o=0;return qr(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Ap(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},Qr={transition:null},Ip={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Qr,ReactCurrentOwner:Mi};function vs(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Gr,forEach:function(e,t,n){Gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Gr(e,function(){t++}),t},toArray:function(e){return Gr(e,function(t){return t})||[]},only:function(e){if(!zi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=yn;W.Fragment=bp;W.Profiler=Sp;W.PureComponent=Ei;W.StrictMode=Np;W.Suspense=zp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ip;W.act=vs;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ds({},e.props),o=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=Mi.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)fs.call(t,u)&&!ms.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var d=0;d<u;d++)s[d]=arguments[d+2];r.children=s}return{$$typeof:Qn,type:e.type,key:o,ref:a,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:Cp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ep,_context:e},e.Consumer=e};W.createElement=hs;W.createFactory=function(e){var t=hs.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Mp,render:e}};W.isValidElement=zi;W.lazy=function(e){return{$$typeof:Tp,_payload:{_status:-1,_result:e},_init:Ap}};W.memo=function(e,t){return{$$typeof:_p,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Qr.transition;Qr.transition={};try{e()}finally{Qr.transition=t}};W.unstable_act=vs;W.useCallback=function(e,t){return Me.current.useCallback(e,t)};W.useContext=function(e){return Me.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};W.useEffect=function(e,t){return Me.current.useEffect(e,t)};W.useId=function(){return Me.current.useId()};W.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Me.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};W.useRef=function(e){return Me.current.useRef(e)};W.useState=function(e){return Me.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Me.current.useTransition()};W.version="18.3.1"});var _i=Zt((G0,ys)=>{"use strict";ys.exports=gs()});var zs=Zt(X=>{"use strict";function Di(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<Yr(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Ye(e){return e.length===0?null:e[0]}function Rr(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var l=2*(r+1)-1,s=e[l],u=l+1,d=e[u];if(0>Yr(s,n))u<o&&0>Yr(d,s)?(e[r]=d,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>Yr(d,n))e[r]=d,e[u]=n,r=u;else break e}}return t}function Yr(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(xs=performance,X.unstable_now=function(){return xs.now()}):(Ti=Date,ks=Ti.now(),X.unstable_now=function(){return Ti.now()-ks});var xs,Ti,ks,it=[],Tt=[],Bp=1,He=null,be=3,eo=!1,Rt=!1,Zn=!1,Ns=typeof setTimeout=="function"?setTimeout:null,Ss=typeof clearTimeout=="function"?clearTimeout:null,ws=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ai(e){for(var t=Ye(Tt);t!==null;){if(t.callback===null)Rr(Tt);else if(t.startTime<=e)Rr(Tt),t.sortIndex=t.expirationTime,Di(it,t);else break;t=Ye(Tt)}}function Ii(e){if(Zn=!1,Ai(e),!Rt)if(Ye(it)!==null)Rt=!0,Fi(Bi);else{var t=Ye(Tt);t!==null&&Oi(Ii,t.startTime-e)}}function Bi(e,t){Rt=!1,Zn&&(Zn=!1,Ss(Rn),Rn=-1),eo=!0;var n=be;try{for(Ai(t),He=Ye(it);He!==null&&(!(He.expirationTime>t)||e&&!Ms());){var r=He.callback;if(typeof r=="function"){He.callback=null,be=He.priorityLevel;var o=r(He.expirationTime<=t);t=X.unstable_now(),typeof o=="function"?He.callback=o:He===Ye(it)&&Rr(it),Ai(t)}else Rr(it);He=Ye(it)}if(He!==null)var a=!0;else{var l=Ye(Tt);l!==null&&Oi(Ii,l.startTime-t),a=!1}return a}finally{He=null,be=n,eo=!1}}var to=!1,Zr=null,Rn=-1,Es=5,Cs=-1;function Ms(){return!(X.unstable_now()-Cs<Es)}function Pi(){if(Zr!==null){var e=X.unstable_now();Cs=e;var t=!0;try{t=Zr(!0,e)}finally{t?Yn():(to=!1,Zr=null)}}else to=!1}var Yn;typeof ws=="function"?Yn=function(){ws(Pi)}:typeof MessageChannel<"u"?(Li=new MessageChannel,bs=Li.port2,Li.port1.onmessage=Pi,Yn=function(){bs.postMessage(null)}):Yn=function(){Ns(Pi,0)};var Li,bs;function Fi(e){Zr=e,to||(to=!0,Yn())}function Oi(e,t){Rn=Ns(function(){e(X.unstable_now())},t)}X.unstable_IdlePriority=5;X.unstable_ImmediatePriority=1;X.unstable_LowPriority=4;X.unstable_NormalPriority=3;X.unstable_Profiling=null;X.unstable_UserBlockingPriority=2;X.unstable_cancelCallback=function(e){e.callback=null};X.unstable_continueExecution=function(){Rt||eo||(Rt=!0,Fi(Bi))};X.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Es=0<e?Math.floor(1e3/e):5};X.unstable_getCurrentPriorityLevel=function(){return be};X.unstable_getFirstCallbackNode=function(){return Ye(it)};X.unstable_next=function(e){switch(be){case 1:case 2:case 3:var t=3;break;default:t=be}var n=be;be=t;try{return e()}finally{be=n}};X.unstable_pauseExecution=function(){};X.unstable_requestPaint=function(){};X.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=be;be=e;try{return t()}finally{be=n}};X.unstable_scheduleCallback=function(e,t,n){var r=X.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Bp++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,Di(Tt,e),Ye(it)===null&&e===Ye(Tt)&&(Zn?(Ss(Rn),Rn=-1):Zn=!0,Oi(Ii,n-r))):(e.sortIndex=o,Di(it,e),Rt||eo||(Rt=!0,Fi(Bi))),e};X.unstable_shouldYield=Ms;X.unstable_wrapCallback=function(e){var t=be;return function(){var n=be;be=t;try{return e.apply(this,arguments)}finally{be=n}}}});var Ts=Zt((Q0,_s)=>{"use strict";_s.exports=zs()});var Ac=Zt(We=>{"use strict";var Fp=_i(),je=Ts();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fu=new Set,wr={};function fn(e,t){$n(e,t),$n(e+"Capture",t)}function $n(e,t){for(wr[e]=t,e=0;e<t.length;e++)Fu.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),la=Object.prototype.hasOwnProperty,Op=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ps={},Ls={};function $p(e){return la.call(Ls,e)?!0:la.call(Ps,e)?!1:Op.test(e)?Ls[e]=!0:(Ps[e]=!0,!1)}function jp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Up(e,t,n,r){if(t===null||typeof t>"u"||jp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,o,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ye[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ye[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ye[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ye[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ye[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ye[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ye[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ye[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ye[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ra=/[\-:]([a-z])/g;function el(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ra,el);ye[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ra,el);ye[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ra,el);ye[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ye[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ye.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ye[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,t,n,r){var o=ye.hasOwnProperty(t)?ye[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Up(t,n,o,r)&&(n=null),r||o===null?$p(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),wn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),Ou=Symbol.for("react.provider"),$u=Symbol.for("react.context"),rl=Symbol.for("react.forward_ref"),ua=Symbol.for("react.suspense"),da=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),ju=Symbol.for("react.offscreen"),Ds=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=Ds&&e[Ds]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,$i;function sr(e){if($i===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$i=t&&t[1]||""}return`
`+$i+e}var ji=!1;function Ui(e,t){if(!e||ji)return"";ji=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var o=d.stack.split(`
`),a=r.stack.split(`
`),l=o.length-1,s=a.length-1;1<=l&&0<=s&&o[l]!==a[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==a[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==a[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{ji=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?sr(e):""}function Wp(e){switch(e.tag){case 5:return sr(e.type);case 16:return sr("Lazy");case 13:return sr("Suspense");case 19:return sr("SuspenseList");case 0:case 2:case 15:return e=Ui(e.type,!1),e;case 11:return e=Ui(e.type.render,!1),e;case 1:return e=Ui(e.type,!0),e;default:return""}}function ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case wn:return"Portal";case sa:return"Profiler";case nl:return"StrictMode";case ua:return"Suspense";case da:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $u:return(e.displayName||"Context")+".Consumer";case Ou:return(e._context.displayName||"Context")+".Provider";case rl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ol:return t=e.displayName||null,t!==null?t:ca(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return ca(e(t))}catch{}}return null}function Hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ca(t);case 8:return t===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vp(e){var t=Uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ro(e){e._valueTracker||(e._valueTracker=Vp(e))}function Wu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pa(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function As(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Hu(e,t){t=t.checked,t!=null&&tl(e,"checked",t,!1)}function fa(e,t){Hu(e,t);var n=Kt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&ma(e,t.type,Kt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Is(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ma(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Dn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ha(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(ur(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kt(n)}}function Vu(e,t){var n=Kt(t.value),r=Kt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Fs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ju(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function va(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ju(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Ku=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function br(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jp=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){Jp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Xu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function Gu(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Xu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Kp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ga(e,t){if(t){if(Kp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ya(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xa=null;function il(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,An=null,In=null;function Os(e){if(e=jr(e)){if(typeof ka!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ai(t),ka(e.stateNode,e.type,t))}}function qu(e){An?In?In.push(e):In=[e]:An=e}function Qu(){if(An){var e=An,t=In;if(In=An=null,Os(e),t)for(e=0;e<t.length;e++)Os(t[e])}}function Yu(e,t){return e(t)}function Zu(){}var Wi=!1;function Ru(e,t,n){if(Wi)return e(t,n);Wi=!0;try{return Yu(e,t,n)}finally{Wi=!1,(An!==null||In!==null)&&(Zu(),Qu())}}function Nr(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var wa=!1;if(gt)try{xn={},Object.defineProperty(xn,"passive",{get:function(){wa=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{wa=!1}var xn;function Xp(e,t,n,r,o,a,l,s,u){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(m){this.onError(m)}}var fr=!1,Do=null,Ao=!1,ba=null,Gp={onError:function(e){fr=!0,Do=e}};function qp(e,t,n,r,o,a,l,s,u){fr=!1,Do=null,Xp.apply(Gp,arguments)}function Qp(e,t,n,r,o,a,l,s,u){if(qp.apply(this,arguments),fr){if(fr){var d=Do;fr=!1,Do=null}else throw Error(C(198));Ao||(Ao=!0,ba=d)}}function mn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ed(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $s(e){if(mn(e)!==e)throw Error(C(188))}function Yp(e){var t=e.alternate;if(!t){if(t=mn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return $s(o),e;if(a===r)return $s(o),t;a=a.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=a;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l){for(s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function td(e){return e=Yp(e),e!==null?nd(e):null}function nd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nd(e);if(t!==null)return t;e=e.sibling}return null}var rd=je.unstable_scheduleCallback,js=je.unstable_cancelCallback,Zp=je.unstable_shouldYield,Rp=je.unstable_requestPaint,ie=je.unstable_now,ef=je.unstable_getCurrentPriorityLevel,al=je.unstable_ImmediatePriority,od=je.unstable_UserBlockingPriority,Io=je.unstable_NormalPriority,tf=je.unstable_LowPriority,id=je.unstable_IdlePriority,ni=null,ut=null;function nf(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:af,rf=Math.log,of=Math.LN2;function af(e){return e>>>=0,e===0?32:31-(rf(e)/of|0)|0}var io=64,ao=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=dr(s):(a&=l,a!==0&&(r=dr(a)))}else l=n&~o,l!==0?r=dr(l):a!==0&&(r=dr(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function lf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-nt(a),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=lf(s,t)):u<=t&&(e.expiredLanes|=s),a&=~s}}function Na(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ad(){var e=io;return io<<=1,(io&4194240)===0&&(io=64),e}function Hi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Or(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function uf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function ll(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var J=0;function ld(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var sd,sl,ud,dd,cd,Sa=!1,lo=[],Ot=null,$t=null,jt=null,Sr=new Map,Er=new Map,At=[],df="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Us(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":$t=null;break;case"mouseover":case"mouseout":jt=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function tr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=jr(t),t!==null&&sl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function cf(e,t,n,r,o){switch(t){case"focusin":return Ot=tr(Ot,e,t,n,r,o),!0;case"dragenter":return $t=tr($t,e,t,n,r,o),!0;case"mouseover":return jt=tr(jt,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Sr.set(a,tr(Sr.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Er.set(a,tr(Er.get(a)||null,e,t,n,r,o)),!0}return!1}function pd(e){var t=nn(e.target);if(t!==null){var n=mn(t);if(n!==null){if(t=n.tag,t===13){if(t=ed(n),t!==null){e.blockedOn=t,cd(e.priority,function(){ud(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ea(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xa=r,n.target.dispatchEvent(r),xa=null}else return t=jr(n),t!==null&&sl(t),e.blockedOn=n,!1;t.shift()}return!0}function Ws(e,t,n){bo(e)&&n.delete(t)}function pf(){Sa=!1,Ot!==null&&bo(Ot)&&(Ot=null),$t!==null&&bo($t)&&($t=null),jt!==null&&bo(jt)&&(jt=null),Sr.forEach(Ws),Er.forEach(Ws)}function nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Sa||(Sa=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,pf)))}function Cr(e){function t(o){return nr(o,e)}if(0<lo.length){nr(lo[0],e);for(var n=1;n<lo.length;n++){var r=lo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&nr(Ot,e),$t!==null&&nr($t,e),jt!==null&&nr(jt,e),Sr.forEach(t),Er.forEach(t),n=0;n<At.length;n++)r=At[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)pd(n),n.blockedOn===null&&At.shift()}var Bn=wt.ReactCurrentBatchConfig,Fo=!0;function ff(e,t,n,r){var o=J,a=Bn.transition;Bn.transition=null;try{J=1,ul(e,t,n,r)}finally{J=o,Bn.transition=a}}function mf(e,t,n,r){var o=J,a=Bn.transition;Bn.transition=null;try{J=4,ul(e,t,n,r)}finally{J=o,Bn.transition=a}}function ul(e,t,n,r){if(Fo){var o=Ea(e,t,n,r);if(o===null)Qi(e,t,r,Oo,n),Us(e,r);else if(cf(o,e,t,n,r))r.stopPropagation();else if(Us(e,r),t&4&&-1<df.indexOf(e)){for(;o!==null;){var a=jr(o);if(a!==null&&sd(a),a=Ea(e,t,n,r),a===null&&Qi(e,t,r,Oo,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else Qi(e,t,r,null,n)}}var Oo=null;function Ea(e,t,n,r){if(Oo=null,e=il(r),e=nn(e),e!==null)if(t=mn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ed(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Oo=e,null}function fd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ef()){case al:return 1;case od:return 4;case Io:case tf:return 16;case id:return 536870912;default:return 16}default:return 16}}var Bt=null,dl=null,No=null;function md(){if(No)return No;var e,t=dl,n=t.length,r,o="value"in Bt?Bt.value:Bt.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[a-r];r++);return No=o.slice(e,1<r?1-r:void 0)}function So(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function so(){return!0}function Hs(){return!1}function Ue(e){function t(n,r,o,a,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?so:Hs,this.isPropagationStopped=Hs,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=so)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=so)},persist:function(){},isPersistent:so}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Ue(Kn),$r=ne({},Kn,{view:0,detail:0}),hf=Ue($r),Vi,Ji,rr,ri=ne({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rr&&(rr&&e.type==="mousemove"?(Vi=e.screenX-rr.screenX,Ji=e.screenY-rr.screenY):Ji=Vi=0,rr=e),Vi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),Vs=Ue(ri),vf=ne({},ri,{dataTransfer:0}),gf=Ue(vf),yf=ne({},$r,{relatedTarget:0}),Ki=Ue(yf),xf=ne({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),kf=Ue(xf),wf=ne({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bf=Ue(wf),Nf=ne({},Kn,{data:0}),Js=Ue(Nf),Sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ef={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cf[e])?!!t[e]:!1}function pl(){return Mf}var zf=ne({},$r,{key:function(e){if(e.key){var t=Sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=So(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ef[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?So(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?So(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_f=Ue(zf),Tf=ne({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ks=Ue(Tf),Pf=ne({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),Lf=Ue(Pf),Df=ne({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Af=Ue(Df),If=ne({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Bf=Ue(If),Ff=[9,13,27,32],fl=gt&&"CompositionEvent"in window,mr=null;gt&&"documentMode"in document&&(mr=document.documentMode);var Of=gt&&"TextEvent"in window&&!mr,hd=gt&&(!fl||mr&&8<mr&&11>=mr),Xs=" ",Gs=!1;function vd(e,t){switch(e){case"keyup":return Ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nn=!1;function $f(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(Gs=!0,Xs);case"textInput":return e=t.data,e===Xs&&Gs?null:e;default:return null}}function jf(e,t){if(Nn)return e==="compositionend"||!fl&&vd(e,t)?(e=md(),No=dl=Bt=null,Nn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hd&&t.locale!=="ko"?null:t.data;default:return null}}var Uf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Uf[e.type]:t==="textarea"}function yd(e,t,n,r){qu(r),t=$o(t,"onChange"),0<t.length&&(n=new cl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,Mr=null;function Wf(e){_d(e,0)}function oi(e){var t=Cn(e);if(Wu(t))return e}function Hf(e,t){if(e==="change")return t}var xd=!1;gt&&(gt?(co="oninput"in document,co||(Xi=document.createElement("div"),Xi.setAttribute("oninput","return;"),co=typeof Xi.oninput=="function"),uo=co):uo=!1,xd=uo&&(!document.documentMode||9<document.documentMode));var uo,co,Xi;function Qs(){hr&&(hr.detachEvent("onpropertychange",kd),Mr=hr=null)}function kd(e){if(e.propertyName==="value"&&oi(Mr)){var t=[];yd(t,Mr,e,il(e)),Ru(Wf,t)}}function Vf(e,t,n){e==="focusin"?(Qs(),hr=t,Mr=n,hr.attachEvent("onpropertychange",kd)):e==="focusout"&&Qs()}function Jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(Mr)}function Kf(e,t){if(e==="click")return oi(t)}function Xf(e,t){if(e==="input"||e==="change")return oi(t)}function Gf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:Gf;function zr(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!la.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function Ys(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zs(e,t){var n=Ys(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ys(n)}}function wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bd(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qf(e){var t=bd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wd(n.ownerDocument.documentElement,n)){if(r!==null&&ml(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=Zs(n,a);var l=Zs(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qf=gt&&"documentMode"in document&&11>=document.documentMode,Sn=null,Ca=null,vr=null,Ma=!1;function Rs(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ma||Sn==null||Sn!==Lo(r)||(r=Sn,"selectionStart"in r&&ml(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&zr(vr,r)||(vr=r,r=$o(Ca,"onSelect"),0<r.length&&(t=new cl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var En={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Gi={},Nd={};gt&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function ii(e){if(Gi[e])return Gi[e];if(!En[e])return e;var t=En[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Nd)return Gi[e]=t[n];return e}var Sd=ii("animationend"),Ed=ii("animationiteration"),Cd=ii("animationstart"),Md=ii("transitionend"),zd=new Map,eu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){zd.set(e,t),fn(t,[e])}for(fo=0;fo<eu.length;fo++)mo=eu[fo],tu=mo.toLowerCase(),nu=mo[0].toUpperCase()+mo.slice(1),Gt(tu,"on"+nu);var mo,tu,nu,fo;Gt(Sd,"onAnimationEnd");Gt(Ed,"onAnimationIteration");Gt(Cd,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Md,"onTransitionEnd");$n("onMouseEnter",["mouseout","mouseover"]);$n("onMouseLeave",["mouseout","mouseover"]);$n("onPointerEnter",["pointerout","pointerover"]);$n("onPointerLeave",["pointerout","pointerover"]);fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));function ru(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qp(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,d=s.currentTarget;if(s=s.listener,u!==a&&o.isPropagationStopped())break e;ru(o,s,d),a=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,d=s.currentTarget,s=s.listener,u!==a&&o.isPropagationStopped())break e;ru(o,s,d),a=u}}}if(Ao)throw e=ba,Ao=!1,ba=null,e}function Q(e,t){var n=t[La];n===void 0&&(n=t[La]=new Set);var r=e+"__bubble";n.has(r)||(Td(t,e,2,!1),n.add(r))}function qi(e,t,n){var r=0;t&&(r|=4),Td(n,e,r,t)}var ho="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[ho]){e[ho]=!0,Fu.forEach(function(n){n!=="selectionchange"&&(Yf.has(n)||qi(n,!1,e),qi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ho]||(t[ho]=!0,qi("selectionchange",!1,t))}}function Td(e,t,n,r){switch(fd(t)){case 1:var o=ff;break;case 4:o=mf;break;default:o=ul}n=o.bind(null,t,n,e),o=void 0,!wa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Qi(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=nn(s),l===null)return;if(u=l.tag,u===5||u===6){r=a=l;continue e}s=s.parentNode}}r=r.return}Ru(function(){var d=a,m=il(n),v=[];e:{var h=zd.get(e);if(h!==void 0){var g=cl,k=e;switch(e){case"keypress":if(So(n)===0)break e;case"keydown":case"keyup":g=_f;break;case"focusin":k="focus",g=Ki;break;case"focusout":k="blur",g=Ki;break;case"beforeblur":case"afterblur":g=Ki;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Lf;break;case Sd:case Ed:case Cd:g=kf;break;case Md:g=Af;break;case"scroll":g=hf;break;case"wheel":g=Bf;break;case"copy":case"cut":case"paste":g=bf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ks}var y=(t&4)!==0,b=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var c=d,f;c!==null;){f=c;var x=f.stateNode;if(f.tag===5&&x!==null&&(f=x,p!==null&&(x=Nr(c,p),x!=null&&y.push(Tr(c,x,f)))),b)break;c=c.return}0<y.length&&(h=new g(h,k,null,n,m),v.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",h&&n!==xa&&(k=n.relatedTarget||n.fromElement)&&(nn(k)||k[yt]))break e;if((g||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,g?(k=n.relatedTarget||n.toElement,g=d,k=k?nn(k):null,k!==null&&(b=mn(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(g=null,k=d),g!==k)){if(y=Vs,x="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=Ks,x="onPointerLeave",p="onPointerEnter",c="pointer"),b=g==null?h:Cn(g),f=k==null?h:Cn(k),h=new y(x,c+"leave",g,n,m),h.target=b,h.relatedTarget=f,x=null,nn(m)===d&&(y=new y(p,c+"enter",k,n,m),y.target=f,y.relatedTarget=b,x=y),b=x,g&&k)t:{for(y=g,p=k,c=0,f=y;f;f=kn(f))c++;for(f=0,x=p;x;x=kn(x))f++;for(;0<c-f;)y=kn(y),c--;for(;0<f-c;)p=kn(p),f--;for(;c--;){if(y===p||p!==null&&y===p.alternate)break t;y=kn(y),p=kn(p)}y=null}else y=null;g!==null&&ou(v,h,g,y,!1),k!==null&&b!==null&&ou(v,b,k,y,!0)}}e:{if(h=d?Cn(d):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var N=Hf;else if(qs(h))if(xd)N=Xf;else{N=Jf;var S=Vf}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(N=Kf);if(N&&(N=N(e,d))){yd(v,N,n,m);break e}S&&S(e,h,d),e==="focusout"&&(S=h._wrapperState)&&S.controlled&&h.type==="number"&&ma(h,"number",h.value)}switch(S=d?Cn(d):window,e){case"focusin":(qs(S)||S.contentEditable==="true")&&(Sn=S,Ca=d,vr=null);break;case"focusout":vr=Ca=Sn=null;break;case"mousedown":Ma=!0;break;case"contextmenu":case"mouseup":case"dragend":Ma=!1,Rs(v,n,m);break;case"selectionchange":if(Qf)break;case"keydown":case"keyup":Rs(v,n,m)}var E;if(fl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Nn?vd(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(hd&&n.locale!=="ko"&&(Nn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Nn&&(E=md()):(Bt=m,dl="value"in Bt?Bt.value:Bt.textContent,Nn=!0)),S=$o(d,z),0<S.length&&(z=new Js(z,e,null,n,m),v.push({event:z,listeners:S}),E?z.data=E:(E=gd(n),E!==null&&(z.data=E)))),(E=Of?$f(e,n):jf(e,n))&&(d=$o(d,"onBeforeInput"),0<d.length&&(m=new Js("onBeforeInput","beforeinput",null,n,m),v.push({event:m,listeners:d}),m.data=E))}_d(v,t)})}function Tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Nr(e,n),a!=null&&r.unshift(Tr(e,a,o)),a=Nr(e,t),a!=null&&r.push(Tr(e,a,o))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ou(e,t,n,r,o){for(var a=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,d=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&d!==null&&(s=d,o?(u=Nr(n,a),u!=null&&l.unshift(Tr(n,u,s))):o||(u=Nr(n,a),u!=null&&l.push(Tr(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Zf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function iu(e){return(typeof e=="string"?e:""+e).replace(Zf,`
`).replace(Rf,"")}function vo(e,t,n){if(t=iu(t),iu(e)!==t&&n)throw Error(C(425))}function jo(){}var za=null,_a=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pa=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,au=typeof Promise=="function"?Promise:void 0,tm=typeof queueMicrotask=="function"?queueMicrotask:typeof au<"u"?function(e){return au.resolve(null).then(e).catch(nm)}:Pa;function nm(e){setTimeout(function(){throw e})}function Yi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Cr(t)}function Ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function lu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),st="__reactFiber$"+Xn,Pr="__reactProps$"+Xn,yt="__reactContainer$"+Xn,La="__reactEvents$"+Xn,rm="__reactListeners$"+Xn,om="__reactHandles$"+Xn;function nn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lu(e);e!==null;){if(n=e[st])return n;e=lu(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[st]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ai(e){return e[Pr]||null}var Da=[],Mn=-1;function qt(e){return{current:e}}function Y(e){0>Mn||(e.current=Da[Mn],Da[Mn]=null,Mn--)}function G(e,t){Mn++,Da[Mn]=e.current,e.current=t}var Xt={},Ce=qt(Xt),De=qt(!1),sn=Xt;function jn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Uo(){Y(De),Y(Ce)}function su(e,t,n){if(Ce.current!==Xt)throw Error(C(168));G(Ce,t),G(De,n)}function Pd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Hp(e)||"Unknown",o));return ne({},n,r)}function Wo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,sn=Ce.current,G(Ce,e),G(De,De.current),!0}function uu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Pd(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,Y(De),Y(Ce),G(Ce,e)):Y(De),G(De,n)}var ft=null,li=!1,Zi=!1;function Ld(e){ft===null?ft=[e]:ft.push(e)}function im(e){li=!0,Ld(e)}function Qt(){if(!Zi&&ft!==null){Zi=!0;var e=0,t=J;try{var n=ft;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,li=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),rd(al,Qt),o}finally{J=t,Zi=!1}}return null}var zn=[],_n=0,Ho=null,Vo=0,Ve=[],Je=0,un=null,mt=1,ht="";function en(e,t){zn[_n++]=Vo,zn[_n++]=Ho,Ho=e,Vo=t}function Dd(e,t,n){Ve[Je++]=mt,Ve[Je++]=ht,Ve[Je++]=un,un=e;var r=mt;e=ht;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var a=32-nt(t)+o;if(30<a){var l=o-o%5;a=(r&(1<<l)-1).toString(32),r>>=l,o-=l,mt=1<<32-nt(t)+o|n<<o|r,ht=a+e}else mt=1<<a|n<<o|r,ht=e}function hl(e){e.return!==null&&(en(e,1),Dd(e,1,0))}function vl(e){for(;e===Ho;)Ho=zn[--_n],zn[_n]=null,Vo=zn[--_n],zn[_n]=null;for(;e===un;)un=Ve[--Je],Ve[Je]=null,ht=Ve[--Je],Ve[Je]=null,mt=Ve[--Je],Ve[Je]=null}var $e=null,Oe=null,R=!1,tt=null;function Ad(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function du(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Oe=Ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Oe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=un!==null?{id:mt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,$e=e,Oe=null,!0):!1;default:return!1}}function Aa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ia(e){if(R){var t=Oe;if(t){var n=t;if(!du(e,t)){if(Aa(e))throw Error(C(418));t=Ut(n.nextSibling);var r=$e;t&&du(e,t)?Ad(r,n):(e.flags=e.flags&-4097|2,R=!1,$e=e)}}else{if(Aa(e))throw Error(C(418));e.flags=e.flags&-4097|2,R=!1,$e=e}}}function cu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function go(e){if(e!==$e)return!1;if(!R)return cu(e),R=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=Oe)){if(Aa(e))throw Id(),Error(C(418));for(;t;)Ad(e,t),t=Ut(t.nextSibling)}if(cu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Oe=Ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Oe=null}}else Oe=$e?Ut(e.stateNode.nextSibling):null;return!0}function Id(){for(var e=Oe;e;)e=Ut(e.nextSibling)}function Un(){Oe=$e=null,R=!1}function gl(e){tt===null?tt=[e]:tt.push(e)}var am=wt.ReactCurrentBatchConfig;function or(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var s=o.refs;l===null?delete s[a]:s[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function pu(e){var t=e._init;return t(e._payload)}function Bd(e){function t(p,c){if(e){var f=p.deletions;f===null?(p.deletions=[c],p.flags|=16):f.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function o(p,c){return p=Jt(p,c),p.index=0,p.sibling=null,p}function a(p,c,f){return p.index=f,e?(f=p.alternate,f!==null?(f=f.index,f<c?(p.flags|=2,c):f):(p.flags|=2,c)):(p.flags|=1048576,c)}function l(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,c,f,x){return c===null||c.tag!==6?(c=ia(f,p.mode,x),c.return=p,c):(c=o(c,f),c.return=p,c)}function u(p,c,f,x){var N=f.type;return N===bn?m(p,c,f.props.children,x,f.key):c!==null&&(c.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Lt&&pu(N)===c.type)?(x=o(c,f.props),x.ref=or(p,c,f),x.return=p,x):(x=Po(f.type,f.key,f.props,null,p.mode,x),x.ref=or(p,c,f),x.return=p,x)}function d(p,c,f,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=aa(f,p.mode,x),c.return=p,c):(c=o(c,f.children||[]),c.return=p,c)}function m(p,c,f,x,N){return c===null||c.tag!==7?(c=ln(f,p.mode,x,N),c.return=p,c):(c=o(c,f),c.return=p,c)}function v(p,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ia(""+c,p.mode,f),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case no:return f=Po(c.type,c.key,c.props,null,p.mode,f),f.ref=or(p,null,c),f.return=p,f;case wn:return c=aa(c,p.mode,f),c.return=p,c;case Lt:var x=c._init;return v(p,x(c._payload),f)}if(ur(c)||er(c))return c=ln(c,p.mode,f,null),c.return=p,c;yo(p,c)}return null}function h(p,c,f,x){var N=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return N!==null?null:s(p,c,""+f,x);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case no:return f.key===N?u(p,c,f,x):null;case wn:return f.key===N?d(p,c,f,x):null;case Lt:return N=f._init,h(p,c,N(f._payload),x)}if(ur(f)||er(f))return N!==null?null:m(p,c,f,x,null);yo(p,f)}return null}function g(p,c,f,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(f)||null,s(c,p,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case no:return p=p.get(x.key===null?f:x.key)||null,u(c,p,x,N);case wn:return p=p.get(x.key===null?f:x.key)||null,d(c,p,x,N);case Lt:var S=x._init;return g(p,c,f,S(x._payload),N)}if(ur(x)||er(x))return p=p.get(f)||null,m(c,p,x,N,null);yo(c,x)}return null}function k(p,c,f,x){for(var N=null,S=null,E=c,z=c=0,$=null;E!==null&&z<f.length;z++){E.index>z?($=E,E=null):$=E.sibling;var A=h(p,E,f[z],x);if(A===null){E===null&&(E=$);break}e&&E&&A.alternate===null&&t(p,E),c=a(A,c,z),S===null?N=A:S.sibling=A,S=A,E=$}if(z===f.length)return n(p,E),R&&en(p,z),N;if(E===null){for(;z<f.length;z++)E=v(p,f[z],x),E!==null&&(c=a(E,c,z),S===null?N=E:S.sibling=E,S=E);return R&&en(p,z),N}for(E=r(p,E);z<f.length;z++)$=g(E,p,z,f[z],x),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?z:$.key),c=a($,c,z),S===null?N=$:S.sibling=$,S=$);return e&&E.forEach(function(I){return t(p,I)}),R&&en(p,z),N}function y(p,c,f,x){var N=er(f);if(typeof N!="function")throw Error(C(150));if(f=N.call(f),f==null)throw Error(C(151));for(var S=N=null,E=c,z=c=0,$=null,A=f.next();E!==null&&!A.done;z++,A=f.next()){E.index>z?($=E,E=null):$=E.sibling;var I=h(p,E,A.value,x);if(I===null){E===null&&(E=$);break}e&&E&&I.alternate===null&&t(p,E),c=a(I,c,z),S===null?N=I:S.sibling=I,S=I,E=$}if(A.done)return n(p,E),R&&en(p,z),N;if(E===null){for(;!A.done;z++,A=f.next())A=v(p,A.value,x),A!==null&&(c=a(A,c,z),S===null?N=A:S.sibling=A,S=A);return R&&en(p,z),N}for(E=r(p,E);!A.done;z++,A=f.next())A=g(E,p,z,A.value,x),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?z:A.key),c=a(A,c,z),S===null?N=A:S.sibling=A,S=A);return e&&E.forEach(function(F){return t(p,F)}),R&&en(p,z),N}function b(p,c,f,x){if(typeof f=="object"&&f!==null&&f.type===bn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case no:e:{for(var N=f.key,S=c;S!==null;){if(S.key===N){if(N=f.type,N===bn){if(S.tag===7){n(p,S.sibling),c=o(S,f.props.children),c.return=p,p=c;break e}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Lt&&pu(N)===S.type){n(p,S.sibling),c=o(S,f.props),c.ref=or(p,S,f),c.return=p,p=c;break e}n(p,S);break}else t(p,S);S=S.sibling}f.type===bn?(c=ln(f.props.children,p.mode,x,f.key),c.return=p,p=c):(x=Po(f.type,f.key,f.props,null,p.mode,x),x.ref=or(p,c,f),x.return=p,p=x)}return l(p);case wn:e:{for(S=f.key;c!==null;){if(c.key===S)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(p,c.sibling),c=o(c,f.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=aa(f,p.mode,x),c.return=p,p=c}return l(p);case Lt:return S=f._init,b(p,c,S(f._payload),x)}if(ur(f))return k(p,c,f,x);if(er(f))return y(p,c,f,x);yo(p,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(p,c.sibling),c=o(c,f),c.return=p,p=c):(n(p,c),c=ia(f,p.mode,x),c.return=p,p=c),l(p)):n(p,c)}return b}var Wn=Bd(!0),Fd=Bd(!1),Jo=qt(null),Ko=null,Tn=null,yl=null;function xl(){yl=Tn=Ko=null}function kl(e){var t=Jo.current;Y(Jo),e._currentValue=t}function Ba(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Fn(e,t){Ko=e,yl=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Le=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(yl!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(Ko===null)throw Error(C(308));Tn=e,Ko.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var rn=null;function wl(e){rn===null?rn=[e]:rn.push(e)}function Od(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,wl(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Dt=!1;function bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $d(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,wl(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function Eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ll(e,n)}}function fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var o=e.updateQueue;Dt=!1;var a=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,d=u.next;u.next=null,l===null?a=d:l.next=d,l=u;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=d:s.next=d,m.lastBaseUpdate=u))}if(a!==null){var v=o.baseState;l=0,m=d=u=null,s=a;do{var h=s.lane,g=s.eventTime;if((r&h)===h){m!==null&&(m=m.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(h=t,g=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){v=k.call(g,v,h);break e}v=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,h=typeof k=="function"?k.call(g,v,h):k,h==null)break e;v=ne({},v,h);break e;case 2:Dt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else g={eventTime:g,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(d=m=g,u=v):m=m.next=g,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(m===null&&(u=v),o.baseState=u,o.firstBaseUpdate=d,o.lastBaseUpdate=m,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);cn|=l,e.lanes=l,e.memoizedState=v}}function mu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var Ur={},dt=qt(Ur),Lr=qt(Ur),Dr=qt(Ur);function on(e){if(e===Ur)throw Error(C(174));return e}function Nl(e,t){switch(G(Dr,t),G(Lr,e),G(dt,Ur),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:va(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=va(t,e)}Y(dt),G(dt,t)}function Hn(){Y(dt),Y(Lr),Y(Dr)}function jd(e){on(Dr.current);var t=on(dt.current),n=va(t,e.type);t!==n&&(G(Lr,e),G(dt,n))}function Sl(e){Lr.current===e&&(Y(dt),Y(Lr))}var ee=qt(0);function Go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ri=[];function El(){for(var e=0;e<Ri.length;e++)Ri[e]._workInProgressVersionPrimary=null;Ri.length=0}var Co=wt.ReactCurrentDispatcher,ea=wt.ReactCurrentBatchConfig,dn=0,te=null,se=null,pe=null,qo=!1,gr=!1,Ar=0,lm=0;function Ne(){throw Error(C(321))}function Cl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Ml(e,t,n,r,o,a){if(dn=a,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Co.current=e===null||e.memoizedState===null?cm:pm,e=n(r,o),gr){a=0;do{if(gr=!1,Ar=0,25<=a)throw Error(C(301));a+=1,pe=se=null,t.updateQueue=null,Co.current=fm,e=n(r,o)}while(gr)}if(Co.current=Qo,t=se!==null&&se.next!==null,dn=0,pe=se=te=null,qo=!1,t)throw Error(C(300));return e}function zl(){var e=Ar!==0;return Ar=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?te.memoizedState=pe=e:pe=pe.next=e,pe}function qe(){if(se===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=pe===null?te.memoizedState:pe.next;if(t!==null)pe=t,se=e;else{if(e===null)throw Error(C(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},pe===null?te.memoizedState=pe=e:pe=pe.next=e}return pe}function Ir(e,t){return typeof t=="function"?t(e):t}function ta(e){var t=qe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=se,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var l=o.next;o.next=a.next,a.next=l}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=l=null,u=null,d=a;do{var m=d.lane;if((dn&m)===m)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var v={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(s=u=v,l=r):u=u.next=v,te.lanes|=m,cn|=m}d=d.next}while(d!==null&&d!==a);u===null?l=r:u.next=s,ot(r,t.memoizedState)||(Le=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,te.lanes|=a,cn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function na(e){var t=qe(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do a=e(a,l.action),l=l.next;while(l!==o);ot(a,t.memoizedState)||(Le=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ud(){}function Wd(e,t){var n=te,r=qe(),o=t(),a=!ot(r.memoizedState,o);if(a&&(r.memoizedState=o,Le=!0),r=r.queue,_l(Jd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Br(9,Vd.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(C(349));(dn&30)!==0||Hd(n,t,o)}return o}function Hd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Vd(e,t,n,r){t.value=n,t.getSnapshot=r,Kd(t)&&Xd(e)}function Jd(e,t,n){return n(function(){Kd(t)&&Xd(e)})}function Kd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Xd(e){var t=xt(e,1);t!==null&&rt(t,e,1,-1)}function hu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ir,lastRenderedState:e},t.queue=e,e=e.dispatch=dm.bind(null,te,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gd(){return qe().memoizedState}function Mo(e,t,n,r){var o=lt();te.flags|=e,o.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function si(e,t,n,r){var o=qe();r=r===void 0?null:r;var a=void 0;if(se!==null){var l=se.memoizedState;if(a=l.destroy,r!==null&&Cl(r,l.deps)){o.memoizedState=Br(t,n,a,r);return}}te.flags|=e,o.memoizedState=Br(1|t,n,a,r)}function vu(e,t){return Mo(8390656,8,e,t)}function _l(e,t){return si(2048,8,e,t)}function qd(e,t){return si(4,2,e,t)}function Qd(e,t){return si(4,4,e,t)}function Yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,si(4,4,Yd.bind(null,t,e),n)}function Tl(){}function Rd(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ec(e,t){var n=qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Cl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tc(e,t,n){return(dn&21)===0?(e.baseState&&(e.baseState=!1,Le=!0),e.memoizedState=n):(ot(n,t)||(n=ad(),te.lanes|=n,cn|=n,e.baseState=!0),t)}function sm(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=ea.transition;ea.transition={};try{e(!1),t()}finally{J=n,ea.transition=r}}function nc(){return qe().memoizedState}function um(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rc(e))oc(t,n);else if(n=Od(e,t,n,r),n!==null){var o=_e();rt(n,e,r,o),ic(n,t,r)}}function dm(e,t,n){var r=Vt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rc(e))oc(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,s=a(l,n);if(o.hasEagerState=!0,o.eagerState=s,ot(s,l)){var u=t.interleaved;u===null?(o.next=o,wl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=Od(e,t,o,r),n!==null&&(o=_e(),rt(n,e,r,o),ic(n,t,r))}}function rc(e){var t=e.alternate;return e===te||t!==null&&t===te}function oc(e,t){gr=qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ic(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ll(e,n)}}var Qo={readContext:Ge,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},cm={readContext:Ge,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:vu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,Yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=um.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:hu,useDebugValue:Tl,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=hu(!1),t=e[0];return e=sm.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,o=lt();if(R){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));(dn&30)!==0||Hd(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,vu(Jd.bind(null,r,a,e),[e]),r.flags|=2048,Br(9,Vd.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(R){var n=ht,r=mt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=lm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pm={readContext:Ge,useCallback:Rd,useContext:Ge,useEffect:_l,useImperativeHandle:Zd,useInsertionEffect:qd,useLayoutEffect:Qd,useMemo:ec,useReducer:ta,useRef:Gd,useState:function(){return ta(Ir)},useDebugValue:Tl,useDeferredValue:function(e){var t=qe();return tc(t,se.memoizedState,e)},useTransition:function(){var e=ta(Ir)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Wd,useId:nc,unstable_isNewReconciler:!1},fm={readContext:Ge,useCallback:Rd,useContext:Ge,useEffect:_l,useImperativeHandle:Zd,useInsertionEffect:qd,useLayoutEffect:Qd,useMemo:ec,useReducer:na,useRef:Gd,useState:function(){return na(Ir)},useDebugValue:Tl,useDeferredValue:function(e){var t=qe();return se===null?t.memoizedState=e:tc(t,se.memoizedState,e)},useTransition:function(){var e=na(Ir)[0],t=qe().memoizedState;return[e,t]},useMutableSource:Ud,useSyncExternalStore:Wd,useId:nc,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Fa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ui={isMounted:function(e){return(e=e._reactInternals)?mn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Vt(e),a=vt(r,o);a.payload=t,n!=null&&(a.callback=n),t=Wt(e,a,o),t!==null&&(rt(t,e,o,r),Eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Vt(e),a=vt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Wt(e,a,o),t!==null&&(rt(t,e,o,r),Eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Vt(e),o=vt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Wt(e,o,r),t!==null&&(rt(t,e,r,n),Eo(t,e,r))}};function gu(e,t,n,r,o,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,l):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(o,a):!0}function ac(e,t,n){var r=!1,o=Xt,a=t.contextType;return typeof a=="object"&&a!==null?a=Ge(a):(o=Ae(t)?sn:Ce.current,r=t.contextTypes,a=(r=r!=null)?jn(e,o):Xt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ui,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function yu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ui.enqueueReplaceState(t,t.state,null)}function Oa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},bl(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ge(a):(a=Ae(t)?sn:Ce.current,o.context=jn(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Fa(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ui.enqueueReplaceState(o,o.state,null),Xo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Wp(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function ra(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $a(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mm=typeof WeakMap=="function"?WeakMap:Map;function lc(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Zo||(Zo=!0,qa=r),$a(e,t)},n}function sc(e,t,n){n=vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){$a(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$a(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=zm.bind(null,e,t,n),t.then(e,e))}function ku(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var hm=wt.ReactCurrentOwner,Le=!1;function ze(e,t,n,r){t.child=e===null?Fd(t,null,n,r):Wn(t,e.child,n,r)}function bu(e,t,n,r,o){n=n.render;var a=t.ref;return Fn(t,o),r=Ml(e,t,n,r,a,o),n=zl(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(R&&n&&hl(t),t.flags|=1,ze(e,t,r,o),t.child)}function Nu(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Ol(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,uc(e,t,a,r,o)):(e=Po(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(l,r)&&e.ref===t.ref)return kt(e,t,o)}return t.flags|=1,e=Jt(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(zr(a,r)&&e.ref===t.ref)if(Le=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Le=!0);else return t.lanes=e.lanes,kt(e,t,o)}return ja(e,t,n,r,o)}function dc(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Ln,Fe),Fe|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Ln,Fe),Fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,G(Ln,Fe),Fe|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,G(Ln,Fe),Fe|=r;return ze(e,t,o,n),t.child}function cc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ja(e,t,n,r,o){var a=Ae(n)?sn:Ce.current;return a=jn(t,a),Fn(t,o),n=Ml(e,t,n,r,a,o),r=zl(),e!==null&&!Le?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(R&&r&&hl(t),t.flags|=1,ze(e,t,n,o),t.child)}function Su(e,t,n,r,o){if(Ae(n)){var a=!0;Wo(t)}else a=!1;if(Fn(t,o),t.stateNode===null)zo(e,t),ac(t,n,r),Oa(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ge(d):(d=Ae(n)?sn:Ce.current,d=jn(t,d));var m=n.getDerivedStateFromProps,v=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==d)&&yu(t,l,r,d),Dt=!1;var h=t.memoizedState;l.state=h,Xo(t,r,l,o),u=t.memoizedState,s!==r||h!==u||De.current||Dt?(typeof m=="function"&&(Fa(t,n,m,r),u=t.memoizedState),(s=Dt||gu(t,n,s,r,h,u,d))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=d,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,$d(e,t),s=t.memoizedProps,d=t.type===t.elementType?s:Re(t.type,s),l.props=d,v=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ge(u):(u=Ae(n)?sn:Ce.current,u=jn(t,u));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==v||h!==u)&&yu(t,l,r,u),Dt=!1,h=t.memoizedState,l.state=h,Xo(t,r,l,o);var k=t.memoizedState;s!==v||h!==k||De.current||Dt?(typeof g=="function"&&(Fa(t,n,g,r),k=t.memoizedState),(d=Dt||gu(t,n,d,r,h,k,u)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=d):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Ua(e,t,n,r,a,o)}function Ua(e,t,n,r,o,a){cc(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&uu(t,n,!1),kt(e,t,a);r=t.stateNode,hm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Wn(t,e.child,null,a),t.child=Wn(t,null,s,a)):ze(e,t,s,a),t.memoizedState=r.state,o&&uu(t,n,!0),t.child}function pc(e){var t=e.stateNode;t.pendingContext?su(e,t.pendingContext,t.pendingContext!==t.context):t.context&&su(e,t.context,!1),Nl(e,t.containerInfo)}function Eu(e,t,n,r,o){return Un(),gl(o),t.flags|=256,ze(e,t,n,r),t.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Ha(e){return{baseLanes:e,cachePool:null,transitions:null}}function fc(e,t,n){var r=t.pendingProps,o=ee.current,a=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),G(ee,o&1),e===null)return Ia(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,a?(r=t.mode,a=t.child,l={mode:"hidden",children:l},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=l):a=pi(l,r,0,null),e=ln(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ha(n),t.memoizedState=Wa,e):Pl(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return vm(e,t,l,r,s,o,n);if(a){a=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Jt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=Jt(s,a):(a=ln(a,l,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,l=e.child.memoizedState,l=l===null?Ha(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Wa,r}return a=e.child,e=a.sibling,r=Jt(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pl(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xo(e,t,n,r){return r!==null&&gl(r),Wn(t,e.child,null,n),e=Pl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function vm(e,t,n,r,o,a,l){if(n)return t.flags&256?(t.flags&=-257,r=ra(Error(C(422))),xo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=pi({mode:"visible",children:r.children},o,0,null),a=ln(a,o,l,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Wn(t,e.child,null,l),t.child.memoizedState=Ha(l),t.memoizedState=Wa,a);if((t.mode&1)===0)return xo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(C(419)),r=ra(a,r,void 0),xo(e,t,l,r)}if(s=(l&e.childLanes)!==0,Le||s){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,xt(e,o),rt(r,e,o,-1))}return Fl(),r=ra(Error(C(421))),xo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_m.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Oe=Ut(o.nextSibling),$e=t,R=!0,tt=null,e!==null&&(Ve[Je++]=mt,Ve[Je++]=ht,Ve[Je++]=un,mt=e.id,ht=e.overflow,un=t),t=Pl(t,r.children),t.flags|=4096,t)}function Cu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ba(e.return,t,n)}function oa(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function mc(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(ze(e,t,r.children,n),r=ee.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cu(e,n,t);else if(e.tag===19)Cu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(G(ee,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Go(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),oa(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Go(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}oa(t,!0,n,null,a);break;case"together":oa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Jt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gm(e,t,n){switch(t.tag){case 3:pc(t),Un();break;case 5:jd(t);break;case 1:Ae(t.type)&&Wo(t);break;case 4:Nl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;G(Jo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(G(ee,ee.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?fc(e,t,n):(G(ee,ee.current&1),e=kt(e,t,n),e!==null?e.sibling:null);G(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return mc(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),G(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,dc(e,t,n)}return kt(e,t,n)}var hc,Va,vc,gc;hc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Va=function(){};vc=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(dt.current);var a=null;switch(n){case"input":o=pa(e,o),r=pa(e,r),a=[];break;case"select":o=ne({},o,{value:void 0}),r=ne({},r,{value:void 0}),a=[];break;case"textarea":o=ha(e,o),r=ha(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=jo)}ga(n,r);var l;n=null;for(d in o)if(!r.hasOwnProperty(d)&&o.hasOwnProperty(d)&&o[d]!=null)if(d==="style"){var s=o[d];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(wr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var u=r[d];if(s=o?.[d],r.hasOwnProperty(d)&&u!==s&&(u!=null||s!=null))if(d==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(a||(a=[]),a.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(a=a||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(a=a||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(wr.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Q("scroll",e),a||s===u||(a=[])):(a=a||[]).push(d,u))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};gc=function(e,t,n,r){n!==r&&(t.flags|=4)};function ir(e,t){if(!R)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ym(e,t,n){var r=t.pendingProps;switch(vl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Se(t),null;case 1:return Ae(t.type)&&Uo(),Se(t),null;case 3:return r=t.stateNode,Hn(),Y(De),Y(Ce),El(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tt!==null&&(Za(tt),tt=null))),Va(e,t),Se(t),null;case 5:Sl(t);var o=on(Dr.current);if(n=t.type,e!==null&&t.stateNode!=null)vc(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Se(t),null}if(e=on(dt.current),go(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[st]=t,r[Pr]=a,e=(t.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(o=0;o<cr.length;o++)Q(cr[o],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":As(r,a),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Q("invalid",r);break;case"textarea":Bs(r,a),Q("invalid",r)}ga(n,a),o=null;for(var l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&vo(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&vo(r.textContent,s,e),o=["children",""+s]):wr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Q("scroll",r)}switch(n){case"input":ro(r),Is(r,a,!0);break;case"textarea":ro(r),Fs(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ju(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[st]=t,e[Pr]=r,hc(e,t,!1,!1),t.stateNode=e;e:{switch(l=ya(n,r),n){case"dialog":Q("cancel",e),Q("close",e),o=r;break;case"iframe":case"object":case"embed":Q("load",e),o=r;break;case"video":case"audio":for(o=0;o<cr.length;o++)Q(cr[o],e);o=r;break;case"source":Q("error",e),o=r;break;case"img":case"image":case"link":Q("error",e),Q("load",e),o=r;break;case"details":Q("toggle",e),o=r;break;case"input":As(e,r),o=pa(e,r),Q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ne({},r,{value:void 0}),Q("invalid",e);break;case"textarea":Bs(e,r),o=ha(e,r),Q("invalid",e);break;default:o=r}ga(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="style"?Gu(e,u):a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Ku(e,u)):a==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&br(e,u):typeof u=="number"&&br(e,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(wr.hasOwnProperty(a)?u!=null&&a==="onScroll"&&Q("scroll",e):u!=null&&tl(e,a,u,l))}switch(n){case"input":ro(e),Is(e,r,!1);break;case"textarea":ro(e),Fs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Dn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Dn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Se(t),null;case 6:if(e&&t.stateNode!=null)gc(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=on(Dr.current),on(dt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(a=r.nodeValue!==n)&&(e=$e,e!==null))switch(e.tag){case 3:vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&vo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return Se(t),null;case 13:if(Y(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(R&&Oe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Id(),Un(),t.flags|=98560,a=!1;else if(a=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(C(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(C(317));a[st]=t}else Un(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Se(t),a=!1}else tt!==null&&(Za(tt),tt=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ee.current&1)!==0?ue===0&&(ue=3):Fl())),t.updateQueue!==null&&(t.flags|=4),Se(t),null);case 4:return Hn(),Va(e,t),e===null&&_r(t.stateNode.containerInfo),Se(t),null;case 10:return kl(t.type._context),Se(t),null;case 17:return Ae(t.type)&&Uo(),Se(t),null;case 19:if(Y(ee),a=t.memoizedState,a===null)return Se(t),null;if(r=(t.flags&128)!==0,l=a.rendering,l===null)if(r)ir(a,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Go(e),l!==null){for(t.flags|=128,ir(a,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(ee,ee.current&1|2),t.child}e=e.sibling}a.tail!==null&&ie()>Jn&&(t.flags|=128,r=!0,ir(a,!1),t.lanes=4194304)}else{if(!r)if(e=Go(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ir(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!R)return Se(t),null}else 2*ie()-a.renderingStartTime>Jn&&n!==1073741824&&(t.flags|=128,r=!0,ir(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ie(),t.sibling=null,n=ee.current,G(ee,r?n&1|2:n&1),t):(Se(t),null);case 22:case 23:return Bl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Fe&1073741824)!==0&&(Se(t),t.subtreeFlags&6&&(t.flags|=8192)):Se(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function xm(e,t){switch(vl(t),t.tag){case 1:return Ae(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),Y(De),Y(Ce),El(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Sl(t),null;case 13:if(Y(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Un()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(ee),null;case 4:return Hn(),null;case 10:return kl(t.type._context),null;case 22:case 23:return Bl(),null;case 24:return null;default:return null}}var ko=!1,Ee=!1,km=typeof WeakSet=="function"?WeakSet:Set,P=null;function Pn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Ja(e,t,n){try{n()}catch(r){re(e,t,r)}}var Mu=!1;function wm(e,t){if(za=Fo,e=bd(),ml(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,d=0,m=0,v=e,h=null;t:for(;;){for(var g;v!==n||o!==0&&v.nodeType!==3||(s=l+o),v!==a||r!==0&&v.nodeType!==3||(u=l+r),v.nodeType===3&&(l+=v.nodeValue.length),(g=v.firstChild)!==null;)h=v,v=g;for(;;){if(v===e)break t;if(h===n&&++d===o&&(s=l),h===a&&++m===r&&(u=l),(g=v.nextSibling)!==null)break;v=h,h=v.parentNode}v=g}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_a={focusedElem:e,selectionRange:n},Fo=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,b=k.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),b);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){re(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return k=Mu,Mu=!1,k}function yr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Ja(t,n,a)}o=o.next}while(o!==r)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ka(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function yc(e){var t=e.alternate;t!==null&&(e.alternate=null,yc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Pr],delete t[La],delete t[rm],delete t[om])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function xc(e){return e.tag===5||e.tag===3||e.tag===4}function zu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=jo));else if(r!==4&&(e=e.child,e!==null))for(Xa(e,t,n),e=e.sibling;e!==null;)Xa(e,t,n),e=e.sibling}function Ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ga(e,t,n),e=e.sibling;e!==null;)Ga(e,t,n),e=e.sibling}var ve=null,et=!1;function Pt(e,t,n){for(n=n.child;n!==null;)kc(e,t,n),n=n.sibling}function kc(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:Ee||Pn(n,t);case 6:var r=ve,o=et;ve=null,Pt(e,t,n),ve=r,et=o,ve!==null&&(et?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(et?(e=ve,n=n.stateNode,e.nodeType===8?Yi(e.parentNode,n):e.nodeType===1&&Yi(e,n),Cr(e)):Yi(ve,n.stateNode));break;case 4:r=ve,o=et,ve=n.stateNode.containerInfo,et=!0,Pt(e,t,n),ve=r,et=o;break;case 0:case 11:case 14:case 15:if(!Ee&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,l=a.destroy;a=a.tag,l!==void 0&&((a&2)!==0||(a&4)!==0)&&Ja(n,t,l),o=o.next}while(o!==r)}Pt(e,t,n);break;case 1:if(!Ee&&(Pn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(Ee=(r=Ee)||n.memoizedState!==null,Pt(e,t,n),Ee=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function _u(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new km),t.forEach(function(r){var o=Tm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,et=!1;break e;case 3:ve=s.stateNode.containerInfo,et=!0;break e;case 4:ve=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(ve===null)throw Error(C(160));kc(a,l,o),ve=null,et=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(d){re(o,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)wc(t,e),t=t.sibling}function wc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),at(e),r&4){try{yr(3,e,e.return),di(3,e)}catch(y){re(e,e.return,y)}try{yr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Ze(t,e),at(e),r&512&&n!==null&&Pn(n,n.return);break;case 5:if(Ze(t,e),at(e),r&512&&n!==null&&Pn(n,n.return),e.flags&32){var o=e.stateNode;try{br(o,"")}catch(y){re(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Hu(o,a),ya(s,l);var d=ya(s,a);for(l=0;l<u.length;l+=2){var m=u[l],v=u[l+1];m==="style"?Gu(o,v):m==="dangerouslySetInnerHTML"?Ku(o,v):m==="children"?br(o,v):tl(o,m,v,d)}switch(s){case"input":fa(o,a);break;case"textarea":Vu(o,a);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var g=a.value;g!=null?Dn(o,!!a.multiple,g,!1):h!==!!a.multiple&&(a.defaultValue!=null?Dn(o,!!a.multiple,a.defaultValue,!0):Dn(o,!!a.multiple,a.multiple?[]:"",!1))}o[Pr]=a}catch(y){re(e,e.return,y)}}break;case 6:if(Ze(t,e),at(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(y){re(e,e.return,y)}}break;case 3:if(Ze(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Ze(t,e),at(e);break;case 13:Ze(t,e),at(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Al=ie())),r&4&&_u(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Ee=(d=Ee)||m,Ze(t,e),Ee=d):Ze(t,e),at(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!m&&(e.mode&1)!==0)for(P=e,m=e.child;m!==null;){for(v=P=m;P!==null;){switch(h=P,g=h.child,h.tag){case 0:case 11:case 14:case 15:yr(4,h,h.return);break;case 1:Pn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Pn(h,h.return);break;case 22:if(h.memoizedState!==null){Pu(v);continue}}g!==null?(g.return=h,P=g):Pu(v)}m=m.sibling}e:for(m=null,v=e;;){if(v.tag===5){if(m===null){m=v;try{o=v.stateNode,d?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=v.stateNode,u=v.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=Xu("display",l))}catch(y){re(e,e.return,y)}}}else if(v.tag===6){if(m===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(y){re(e,e.return,y)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;m===v&&(m=null),v=v.return}m===v&&(m=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ze(t,e),at(e),r&4&&_u(e);break;case 21:break;default:Ze(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(xc(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(br(o,""),r.flags&=-33);var a=zu(e);Ga(e,a,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=zu(e);Xa(e,s,l);break;default:throw Error(C(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bm(e,t,n){P=e,bc(e,t,n)}function bc(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var o=P,a=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||ko;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ee;s=ko;var d=Ee;if(ko=l,(Ee=u)&&!d)for(P=o;P!==null;)l=P,u=l.child,l.tag===22&&l.memoizedState!==null?Lu(o):u!==null?(u.return=l,P=u):Lu(o);for(;a!==null;)P=a,bc(a,t,n),a=a.sibling;P=o,ko=s,Ee=d}Tu(e,t,n)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,P=a):Tu(e,t,n)}}function Tu(e){for(;P!==null;){var t=P;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ee||di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ee)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&mu(t,a,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}mu(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var v=m.dehydrated;v!==null&&Cr(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ee||t.flags&512&&Ka(t)}catch(h){re(t,t.return,h)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function Pu(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function Lu(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{di(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){re(t,o,u)}}var a=t.return;try{Ka(t)}catch(u){re(t,a,u)}break;case 5:var l=t.return;try{Ka(t)}catch(u){re(t,l,u)}}}catch(u){re(t,t.return,u)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var Nm=Math.ceil,Yo=wt.ReactCurrentDispatcher,Ll=wt.ReactCurrentOwner,Xe=wt.ReactCurrentBatchConfig,V=0,fe=null,le=null,ge=0,Fe=0,Ln=qt(0),ue=0,Fr=null,cn=0,ci=0,Dl=0,xr=null,Pe=null,Al=0,Jn=1/0,pt=null,Zo=!1,qa=null,Ht=null,wo=!1,Ft=null,Ro=0,kr=0,Qa=null,_o=-1,To=0;function _e(){return(V&6)!==0?ie():_o!==-1?_o:_o=ie()}function Vt(e){return(e.mode&1)===0?1:(V&2)!==0&&ge!==0?ge&-ge:am.transition!==null?(To===0&&(To=ad()),To):(e=J,e!==0||(e=window.event,e=e===void 0?16:fd(e.type)),e)}function rt(e,t,n,r){if(50<kr)throw kr=0,Qa=null,Error(C(185));Or(e,n,r),((V&2)===0||e!==fe)&&(e===fe&&((V&2)===0&&(ci|=n),ue===4&&It(e,ge)),Ie(e,r),n===1&&V===0&&(t.mode&1)===0&&(Jn=ie()+500,li&&Qt()))}function Ie(e,t){var n=e.callbackNode;sf(e,t);var r=Bo(e,e===fe?ge:0);if(r===0)n!==null&&js(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&js(n),t===1)e.tag===0?im(Du.bind(null,e)):Ld(Du.bind(null,e)),tm(function(){(V&6)===0&&Qt()}),n=null;else{switch(ld(r)){case 1:n=al;break;case 4:n=od;break;case 16:n=Io;break;case 536870912:n=id;break;default:n=Io}n=Tc(n,Nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Nc(e,t){if(_o=-1,To=0,(V&6)!==0)throw Error(C(327));var n=e.callbackNode;if(On()&&e.callbackNode!==n)return null;var r=Bo(e,e===fe?ge:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ei(e,r);else{t=r;var o=V;V|=2;var a=Ec();(fe!==e||ge!==t)&&(pt=null,Jn=ie()+500,an(e,t));do try{Cm();break}catch(s){Sc(e,s)}while(!0);xl(),Yo.current=a,V=o,le!==null?t=0:(fe=null,ge=0,t=ue)}if(t!==0){if(t===2&&(o=Na(e),o!==0&&(r=o,t=Ya(e,o))),t===1)throw n=Fr,an(e,0),It(e,r),Ie(e,ie()),n;if(t===6)It(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Sm(o)&&(t=ei(e,r),t===2&&(a=Na(e),a!==0&&(r=a,t=Ya(e,a))),t===1))throw n=Fr,an(e,0),It(e,r),Ie(e,ie()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:tn(e,Pe,pt);break;case 3:if(It(e,r),(r&130023424)===r&&(t=Al+500-ie(),10<t)){if(Bo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Pa(tn.bind(null,e,Pe,pt),t);break}tn(e,Pe,pt);break;case 4:if(It(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-nt(r);a=1<<l,l=t[l],l>o&&(o=l),r&=~a}if(r=o,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nm(r/1960))-r,10<r){e.timeoutHandle=Pa(tn.bind(null,e,Pe,pt),r);break}tn(e,Pe,pt);break;case 5:tn(e,Pe,pt);break;default:throw Error(C(329))}}}return Ie(e,ie()),e.callbackNode===n?Nc.bind(null,e):null}function Ya(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=ei(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&Za(t)),e}function Za(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Sm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!ot(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function It(e,t){for(t&=~Dl,t&=~ci,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Du(e){if((V&6)!==0)throw Error(C(327));On();var t=Bo(e,0);if((t&1)===0)return Ie(e,ie()),null;var n=ei(e,t);if(e.tag!==0&&n===2){var r=Na(e);r!==0&&(t=r,n=Ya(e,r))}if(n===1)throw n=Fr,an(e,0),It(e,t),Ie(e,ie()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Pe,pt),Ie(e,ie()),null}function Il(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Jn=ie()+500,li&&Qt())}}function pn(e){Ft!==null&&Ft.tag===0&&(V&6)===0&&On();var t=V;V|=1;var n=Xe.transition,r=J;try{if(Xe.transition=null,J=1,e)return e()}finally{J=r,Xe.transition=n,V=t,(V&6)===0&&Qt()}}function Bl(){Fe=Ln.current,Y(Ln)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,em(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(vl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:Hn(),Y(De),Y(Ce),El();break;case 5:Sl(r);break;case 4:Hn();break;case 13:Y(ee);break;case 19:Y(ee);break;case 10:kl(r.type._context);break;case 22:case 23:Bl()}n=n.return}if(fe=e,le=e=Jt(e.current,null),ge=Fe=t,ue=0,Fr=null,Dl=ci=cn=0,Pe=xr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var l=a.next;a.next=o,r.next=l}n.pending=r}rn=null}return e}function Sc(e,t){do{var n=le;try{if(xl(),Co.current=Qo,qo){for(var r=te.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}qo=!1}if(dn=0,pe=se=te=null,gr=!1,Ar=0,Ll.current=null,n===null||n.return===null){ue=1,Fr=t,le=null;break}e:{var a=e,l=n.return,s=n,u=t;if(t=ge,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,m=s,v=m.tag;if((m.mode&1)===0&&(v===0||v===11||v===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=ku(l);if(g!==null){g.flags&=-257,wu(g,l,s,a,t),g.mode&1&&xu(a,d,t),t=g,u=d;var k=t.updateQueue;if(k===null){var y=new Set;y.add(u),t.updateQueue=y}else k.add(u);break e}else{if((t&1)===0){xu(a,d,t),Fl();break e}u=Error(C(426))}}else if(R&&s.mode&1){var b=ku(l);if(b!==null){(b.flags&65536)===0&&(b.flags|=256),wu(b,l,s,a,t),gl(Vn(u,s));break e}}a=u=Vn(u,s),ue!==4&&(ue=2),xr===null?xr=[a]:xr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=lc(a,u,t);fu(a,p);break e;case 1:s=u;var c=a.type,f=a.stateNode;if((a.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ht===null||!Ht.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=sc(a,s,t);fu(a,x);break e}}a=a.return}while(a!==null)}Mc(n)}catch(N){t=N,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Ec(){var e=Yo.current;return Yo.current=Qo,e===null?Qo:e}function Fl(){(ue===0||ue===3||ue===2)&&(ue=4),fe===null||(cn&268435455)===0&&(ci&268435455)===0||It(fe,ge)}function ei(e,t){var n=V;V|=2;var r=Ec();(fe!==e||ge!==t)&&(pt=null,an(e,t));do try{Em();break}catch(o){Sc(e,o)}while(!0);if(xl(),V=n,Yo.current=r,le!==null)throw Error(C(261));return fe=null,ge=0,ue}function Em(){for(;le!==null;)Cc(le)}function Cm(){for(;le!==null&&!Zp();)Cc(le)}function Cc(e){var t=_c(e.alternate,e,Fe);e.memoizedProps=e.pendingProps,t===null?Mc(e):le=t,Ll.current=null}function Mc(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=ym(n,t,Fe),n!==null){le=n;return}}else{if(n=xm(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ue===0&&(ue=5)}function tn(e,t,n){var r=J,o=Xe.transition;try{Xe.transition=null,J=1,Mm(e,t,n,r)}finally{Xe.transition=o,J=r}return null}function Mm(e,t,n,r){do On();while(Ft!==null);if((V&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(uf(e,a),e===fe&&(le=fe=null,ge=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||wo||(wo=!0,Tc(Io,function(){return On(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Xe.transition,Xe.transition=null;var l=J;J=1;var s=V;V|=4,Ll.current=null,wm(e,n),wc(n,e),qf(_a),Fo=!!za,_a=za=null,e.current=n,bm(n,e,o),Rp(),V=s,J=l,Xe.transition=a}else e.current=n;if(wo&&(wo=!1,Ft=e,Ro=o),a=e.pendingLanes,a===0&&(Ht=null),nf(n.stateNode,r),Ie(e,ie()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Zo)throw Zo=!1,e=qa,qa=null,e;return(Ro&1)!==0&&e.tag!==0&&On(),a=e.pendingLanes,(a&1)!==0?e===Qa?kr++:(kr=0,Qa=e):kr=0,Qt(),null}function On(){if(Ft!==null){var e=ld(Ro),t=Xe.transition,n=J;try{if(Xe.transition=null,J=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ro=0,(V&6)!==0)throw Error(C(331));var o=V;for(V|=4,P=e.current;P!==null;){var a=P,l=a.child;if((P.flags&16)!==0){var s=a.deletions;if(s!==null){for(var u=0;u<s.length;u++){var d=s[u];for(P=d;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:yr(8,m,a)}var v=m.child;if(v!==null)v.return=m,P=v;else for(;P!==null;){m=P;var h=m.sibling,g=m.return;if(yc(m),m===d){P=null;break}if(h!==null){h.return=g,P=h;break}P=g}}}var k=a.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var b=y.sibling;y.sibling=null,y=b}while(y!==null)}}P=a}}if((a.subtreeFlags&2064)!==0&&l!==null)l.return=a,P=l;else e:for(;P!==null;){if(a=P,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:yr(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,P=p;break e}P=a.return}}var c=e.current;for(P=c;P!==null;){l=P;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,P=f;else e:for(l=c;P!==null;){if(s=P,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:di(9,s)}}catch(N){re(s,s.return,N)}if(s===l){P=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,P=x;break e}P=s.return}}if(V=o,Qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{J=n,Xe.transition=t}}return!1}function Au(e,t,n){t=Vn(n,t),t=lc(e,t,1),e=Wt(e,t,1),t=_e(),e!==null&&(Or(e,1,t),Ie(e,t))}function re(e,t,n){if(e.tag===3)Au(e,e,n);else for(;t!==null;){if(t.tag===3){Au(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=Vn(n,e),e=sc(t,e,1),t=Wt(t,e,1),e=_e(),t!==null&&(Or(t,1,e),Ie(t,e));break}}t=t.return}}function zm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ge&n)===n&&(ue===4||ue===3&&(ge&130023424)===ge&&500>ie()-Al?an(e,0):Dl|=n),Ie(e,t)}function zc(e,t){t===0&&((e.mode&1)===0?t=1:(t=ao,ao<<=1,(ao&130023424)===0&&(ao=4194304)));var n=_e();e=xt(e,t),e!==null&&(Or(e,t,n),Ie(e,n))}function _m(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zc(e,n)}function Tm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),zc(e,n)}var _c;_c=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||De.current)Le=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Le=!1,gm(e,t,n);Le=(e.flags&131072)!==0}else Le=!1,R&&(t.flags&1048576)!==0&&Dd(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zo(e,t),e=t.pendingProps;var o=jn(t,Ce.current);Fn(t,n),o=Ml(null,t,r,e,o,n);var a=zl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(a=!0,Wo(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,bl(t),o.updater=ui,t.stateNode=o,o._reactInternals=t,Oa(t,r,e,n),t=Ua(null,t,r,!0,a,n)):(t.tag=0,R&&a&&hl(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Lm(r),e=Re(r,e),o){case 0:t=ja(null,t,r,e,n);break e;case 1:t=Su(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=Nu(null,t,r,Re(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),ja(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Su(e,t,r,o,n);case 3:e:{if(pc(t),e===null)throw Error(C(387));r=t.pendingProps,a=t.memoizedState,o=a.element,$d(e,t),Xo(t,r,null,n);var l=t.memoizedState;if(r=l.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Vn(Error(C(423)),t),t=Eu(e,t,r,n,o);break e}else if(r!==o){o=Vn(Error(C(424)),t),t=Eu(e,t,r,n,o);break e}else for(Oe=Ut(t.stateNode.containerInfo.firstChild),$e=t,R=!0,tt=null,n=Fd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Un(),r===o){t=kt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return jd(t),e===null&&Ia(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,l=o.children,Ta(r,o)?l=null:a!==null&&Ta(r,a)&&(t.flags|=32),cc(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&Ia(t),null;case 13:return fc(e,t,n);case 4:return Nl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),bu(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,l=o.value,G(Jo,r._currentValue),r._currentValue=l,a!==null)if(ot(a.value,l)){if(a.children===o.children&&!De.current){t=kt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){l=a.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(a.tag===1){u=vt(-1,n&-n),u.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?u.next=u:(u.next=m.next,m.next=u),d.pending=u}}a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ba(a.return,n,t),s.lanes|=n;break}u=u.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Ba(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Fn(t,n),o=Ge(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),Nu(e,t,r,o,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),zo(e,t),t.tag=1,Ae(r)?(e=!0,Wo(t)):e=!1,Fn(t,n),ac(t,r,o),Oa(t,r,o,n),Ua(null,t,r,!0,e,n);case 19:return mc(e,t,n);case 22:return dc(e,t,n)}throw Error(C(156,t.tag))};function Tc(e,t){return rd(e,t)}function Pm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Pm(e,t,n,r)}function Ol(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return Ol(e)?1:0;if(e!=null){if(e=e.$$typeof,e===rl)return 11;if(e===ol)return 14}return 2}function Jt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Po(e,t,n,r,o,a){var l=2;if(r=e,typeof e=="function")Ol(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bn:return ln(n.children,o,a,t);case nl:l=8,o|=8;break;case sa:return e=Ke(12,n,t,o|2),e.elementType=sa,e.lanes=a,e;case ua:return e=Ke(13,n,t,o),e.elementType=ua,e.lanes=a,e;case da:return e=Ke(19,n,t,o),e.elementType=da,e.lanes=a,e;case ju:return pi(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ou:l=10;break e;case $u:l=9;break e;case rl:l=11;break e;case ol:l=14;break e;case Lt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ke(l,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function ln(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function pi(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=ju,e.lanes=n,e.stateNode={isHidden:!1},e}function ia(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function aa(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hi(0),this.expirationTimes=Hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function $l(e,t,n,r,o,a,l,s,u){return e=new Dm(e,t,n,s,u),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Ke(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bl(a),e}function Am(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Pc(e){if(!e)return Xt;e=e._reactInternals;e:{if(mn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Pd(e,n,t)}return t}function Lc(e,t,n,r,o,a,l,s,u){return e=$l(n,r,!0,e,o,a,l,s,u),e.context=Pc(null),n=e.current,r=_e(),o=Vt(n),a=vt(r,o),a.callback=t??null,Wt(n,a,o),e.current.lanes=o,Or(e,o,r),Ie(e,r),e}function fi(e,t,n,r){var o=t.current,a=_e(),l=Vt(o);return n=Pc(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(a,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(o,t,l),e!==null&&(rt(e,o,l,a),Eo(e,o,l)),l}function ti(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Iu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function jl(e,t){Iu(e,t),(e=e.alternate)&&Iu(e,t)}function Im(){return null}var Dc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}mi.prototype.render=Ul.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));fi(e,t,null,null)};mi.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){fi(null,e,null,null)}),t[yt]=null}};function mi(e){this._internalRoot=e}mi.prototype.unstable_scheduleHydration=function(e){if(e){var t=dd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<At.length&&t!==0&&t<At[n].priority;n++);At.splice(n,0,e),n===0&&pd(e)}};function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bu(){}function Bm(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var d=ti(l);a.call(d)}}var l=Lc(t,r,e,0,null,!1,!1,"",Bu);return e._reactRootContainer=l,e[yt]=l.current,_r(e.nodeType===8?e.parentNode:e),pn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var d=ti(u);s.call(d)}}var u=$l(e,0,!1,null,null,!1,!1,"",Bu);return e._reactRootContainer=u,e[yt]=u.current,_r(e.nodeType===8?e.parentNode:e),pn(function(){fi(t,u,n,r)}),u}function vi(e,t,n,r,o){var a=n._reactRootContainer;if(a){var l=a;if(typeof o=="function"){var s=o;o=function(){var u=ti(l);s.call(u)}}fi(t,l,e,o)}else l=Bm(n,t,e,o,r);return ti(l)}sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(ll(t,n|1),Ie(t,ie()),(V&6)===0&&(Jn=ie()+500,Qt()))}break;case 13:pn(function(){var r=xt(e,1);if(r!==null){var o=_e();rt(r,e,1,o)}}),jl(e,1)}};sl=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=_e();rt(t,e,134217728,n)}jl(e,134217728)}};ud=function(e){if(e.tag===13){var t=Vt(e),n=xt(e,t);if(n!==null){var r=_e();rt(n,e,t,r)}jl(e,t)}};dd=function(){return J};cd=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};ka=function(e,t,n){switch(t){case"input":if(fa(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ai(r);if(!o)throw Error(C(90));Wu(r),fa(r,o)}}}break;case"textarea":Vu(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};Yu=Il;Zu=pn;var Fm={usingClientEntryPoint:!1,Events:[jr,Cn,ai,qu,Qu,Il]},ar={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Om={bundleType:ar.bundleType,version:ar.version,rendererPackageName:ar.rendererPackageName,rendererConfig:ar.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=td(e),e===null?null:e.stateNode},findFiberByHostInstance:ar.findFiberByHostInstance||Im,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(lr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!lr.isDisabled&&lr.supportsFiber))try{ni=lr.inject(Om),ut=lr}catch{}var lr;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wl(t))throw Error(C(200));return Am(e,t,null,n)};We.createRoot=function(e,t){if(!Wl(e))throw Error(C(299));var n=!1,r="",o=Dc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$l(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,_r(e.nodeType===8?e.parentNode:e),new Ul(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=td(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return pn(e)};We.hydrate=function(e,t,n){if(!hi(t))throw Error(C(200));return vi(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Wl(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",l=Dc;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Lc(t,null,e,1,n??null,o,!1,a,l),e[yt]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new mi(t)};We.render=function(e,t,n){if(!hi(t))throw Error(C(200));return vi(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!hi(e))throw Error(C(40));return e._reactRootContainer?(pn(function(){vi(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};We.unstable_batchedUpdates=Il;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!hi(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return vi(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426"});var Fc=Zt((Z0,Bc)=>{"use strict";function Ic(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic)}catch(e){console.error(e)}}Ic(),Bc.exports=Ac()});var $c=Zt(Hl=>{"use strict";var Oc=Fc();Hl.createRoot=Oc.createRoot,Hl.hydrateRoot=Oc.hydrateRoot;var R0});var i=is(_i()),rp=is($c()),yi=Date.now();function me(){return yi+=1,yi}var xi=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function ki(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(o=>o.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function $m(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function O(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function Qe(e){let[t,n]=e.split(":").map(Number);return t*60+n}function Nt(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function St(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function Vl(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Gl(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has(O(0)))n=0;else if(t.has(O(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,o=n,a=0,l=!0,s=!1;for(;;)if(t.has(O(o)))r++,a++,!l&&a>=7&&(l=!0,a=0),o-=1;else if(l)l=!1,a=0,s=!0,o-=1;else break;return{streak:r,freezeUsed:s}}var jm=[15,30,45,60,90,120],wi=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],jc=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function Uc(e){for(let t of jc)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return jc[2]}function Um(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var Wm=i.default.memo(function({theme:t,phase:n,calm:r}){let o=t.ambient.particle,a=(0,i.useMemo)(()=>o==="none"?[]:Array.from({length:o==="aurora"?16:o==="embers"?14:18},(u,d)=>{let m=o==="bubbles"?3+d%4*2:2+d%3;return{left:`${(d*37+11)%100}%`,size:m,delay:`${-(d*2.3)%26}s`,dur:`${(o==="bubbles"?20:30)+d%7*4}s`}}),[o]),l=(0,i.useMemo)(()=>n.stars?Array.from({length:34},(s,u)=>({left:`${(u*29+7)%100}%`,top:`${(u*53+13)%62}%`,delay:`${u%9*.7}s`,dur:`${2.6+u%5*.8}s`})):[],[n.stars]);return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"amb-layer amb-time"},i.default.createElement("div",{className:"amb-ray"})),l.length>0&&i.default.createElement("div",{className:"amb-layer amb-stars"},l.map((s,u)=>i.default.createElement("span",{key:u,style:{left:s.left,top:s.top,animationDelay:s.delay,animationDuration:s.dur}}))),a.length>0&&i.default.createElement("div",{className:"amb-layer amb-dust"},a.map((s,u)=>i.default.createElement("span",{key:u,style:{left:s.left,bottom:"-6vh",width:s.size,height:s.size,animationDelay:s.delay,animationDuration:s.dur}}))),i.default.createElement("div",{className:"amb-layer amb-grain"}),r&&i.default.createElement("div",{className:"calm-breath"}))}),Wc="tasksh.calm.v1";function Hm(e){let[t,n]=(0,i.useState)(()=>{try{return localStorage.getItem(Hc)||gi}catch{return gi}}),[r,o]=(0,i.useState)(()=>{try{return localStorage.getItem(Wc)==="1"}catch{return!1}}),[a,l]=(0,i.useState)(()=>Uc(ki().hour)),s=(0,i.useMemo)(()=>Vm(t),[t]);(0,i.useEffect)(()=>{!Kl(s,e)&&s.id!==gi&&n(gi)},[s,e]),(0,i.useEffect)(()=>{Jm(s);try{localStorage.setItem(Hc,s.id)}catch{}},[s]),(0,i.useEffect)(()=>{Um(a)},[a]),(0,i.useEffect)(()=>{let d=setInterval(()=>{let m=Uc(ki().hour);l(v=>v.id===m.id?v:m)},12e4);return()=>clearInterval(d)},[]),(0,i.useEffect)(()=>{let d=document.documentElement;d.style.setProperty("--calm",r?"1":"0"),d.style.setProperty("--motion-scale",r?"1.9":"1"),d.classList.toggle("calm-mode",r);try{localStorage.setItem(Wc,r?"1":"0")}catch{}},[r]);let u=(0,i.useMemo)(()=>wi.filter(d=>Kl(d,e)),[e]);return{theme:s,themeId:t,setThemeId:n,themes:wi,unlocked:u,phase:a,calm:r,setCalm:o}}var gi="terminal",Hc="tasksh.theme.v1";function Vm(e){return wi.find(t=>t.id===e)||wi[0]}function Kl(e,t){return t>=e.unlockLevel}function Jm(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((o,a)=>{t.style.setProperty(`--blob${a+1}`,`radial-gradient(${o[0]}, ${o[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var op="tasksh.sound.v1",Wr=null;function Km(){if(!Wr){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Wr=new e}return Wr.state==="suspended"&&Wr.resume(),Wr}function ip(){try{let e=localStorage.getItem(op);return e===null?!0:e==="1"}catch{return!0}}function Xm(e){try{localStorage.setItem(op,e?"1":"0")}catch{}}function vn(e){if(!ip())return;let t=Km();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:o=0,dur:a=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),d=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+o),d.gain.setValueAtTime(1e-4,n+o),d.gain.exponentialRampToValueAtTime(s,n+o+.008),d.gain.exponentialRampToValueAtTime(1e-4,n+o+a),u.connect(d),d.connect(t.destination),u.start(n+o),u.stop(n+o+a+.02)})}var B={click:()=>vn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>vn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>vn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>vn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>vn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>vn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function Gm(){let[e,t]=(0,i.useState)(ip());return[e,()=>{let r=!e;t(r),Xm(r),r&&vn([{freq:720,dur:.05,gain:.04}])}]}function qm(e,t=550){let[n,r]=(0,i.useState)(e),o=(0,i.useRef)(e),a=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let l=o.current,s=e;if(l===s)return;let u=performance.now(),d=v=>1-Math.pow(1-v,3),m=v=>{let h=v-u,g=Math.min(1,h/t),k=d(g);r(Math.round(l+(s-l)*k)),g<1?a.current=requestAnimationFrame(m):o.current=s};return a.current=requestAnimationFrame(m),()=>a.current&&cancelAnimationFrame(a.current)},[e,t]),n}function bt({value:e,className:t,suffix:n=""}){let r=qm(e);return i.default.createElement("span",{className:t},r,n)}function Qm({axes:e,size:t=220,maxValue:n}){let[r,o]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let b=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(b)},[]);let a=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),d=n??Math.max(1,...e.map(b=>b.value)),m=b=>Math.PI*2*b/a-Math.PI/2,v=(b,p)=>{let c=m(b);return[l+Math.cos(c)*u*p,s+Math.sin(c)*u*p]},h=a>6?46:22,g=[.25,.5,.75,1],y=e.map((b,p)=>v(p,r?Math.max(.04,b.value/d):.02)).map((b,p)=>`${p===0?"M":"L"}${b[0].toFixed(1)},${b[1].toFixed(1)}`).join(" ")+"Z";return i.default.createElement("svg",{viewBox:`${-h} 0 ${t+h*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},g.map((b,p)=>{let f=e.map((x,N)=>v(N,b)).map((x,N)=>`${N===0?"M":"L"}${x[0].toFixed(1)},${x[1].toFixed(1)}`).join(" ")+"Z";return i.default.createElement("path",{key:p,d:f,className:"radar-ring"})}),e.map((b,p)=>{let c=v(p,1);return i.default.createElement("line",{key:p,x1:l,y1:s,x2:c[0],y2:c[1],className:"radar-spoke"})}),i.default.createElement("path",{d:y,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((b,p)=>{let c=v(p,1.19),f=v(p,r?Math.max(.04,b.value/d):.02),x=Math.cos(m(p)),N=x>.25?"start":x<-.25?"end":"middle";return i.default.createElement("g",{key:b.key||p},i.default.createElement("circle",{cx:f[0],cy:f[1],r:a>6?2.8:3.5,fill:b.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),i.default.createElement("text",{x:c[0],y:c[1],textAnchor:N,dominantBaseline:"middle",className:"radar-label"},b.label))}))}function ql({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:o="#1E2228",label:a,sublabel:l}){let[s,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let y=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(y)},[]);let d=t/2-n,m=2*Math.PI*d,v=Math.max(0,Math.min(100,e)),h=m-(s?v/100:0)*m,g=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return i.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},i.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},i.default.createElement("circle",{cx:t/2,cy:t/2,r:d,fill:"none",stroke:o,strokeWidth:n}),i.default.createElement("circle",{cx:t/2,cy:t/2,r:d,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:m,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),i.default.createElement("div",{className:"radial-progress-center"},a&&i.default.createElement("span",{className:"radial-progress-label",style:{fontSize:g}},a),l&&i.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function ap({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:o}){let[a,l]=(0,i.useState)(!1);(0,i.useEffect)(()=>{let h=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,d=Math.max(1e-6,e.reduce((h,g)=>h+Math.max(0,g.value),0)),m=0,v=e.map(h=>{let g=Math.max(0,h.value),k=g/d,y=a?k*u:0,b=u-y,p=m/d*360;return m+=g,{...h,dash:y,gap:b,rotation:p,frac:k}});return i.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},i.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},i.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),v.map((h,g)=>i.default.createElement("circle",{key:h.key||g,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:v.length>1?"butt":"round"}))),i.default.createElement("div",{className:"donut-center"},r!==void 0&&i.default.createElement("span",{className:"donut-center-label"},r),o&&i.default.createElement("span",{className:"donut-center-sublabel"},o)))}function Ym({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],o=0,a=t*7,l=Array.from({length:a},(m,v)=>o-(a-1-v)),s=Math.max(1,...l.map(m=>e[O(m)]||0)),u=[];for(let m=0;m<t;m++)u.push(l.slice(m*7,m*7+7));let d=m=>{if(!m)return 0;let v=m/s;return v>.75?4:v>.5?3:v>.25?2:1};return i.default.createElement("div",{className:"heatmap-wrap"},i.default.createElement("div",{className:"heatmap-grid"},u.map((m,v)=>i.default.createElement("div",{className:"heatmap-col",key:v},m.map((h,g)=>{let k=O(h),y=e[k]||0,b=d(y);return i.default.createElement("span",{key:g,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[b],animationDelay:`${(v*7+g)*4}ms`},title:`${k}: ${y} completed`})})))),i.default.createElement("div",{className:"heatmap-legend"},i.default.createElement("span",null,"less"),r.map((m,v)=>i.default.createElement("span",{key:v,className:"heatmap-legend-cell",style:{background:m}})),i.default.createElement("span",null,"more")))}function Zm(e){let t=[],n=[];for(let r of e){let o=t.findIndex(a=>r.start>=a);o===-1?(o=t.length,t.push(r.end)):t[o]=r.end,n.push({...r,lane:o})}return{placed:n,laneCount:Math.max(1,t.length)}}function Rm({routines:e,nowMinutes:t,doneToday:n=0}){let[r,o]=(0,i.useState)(!1),[a,l]=(0,i.useState)(0),[s,u]=(0,i.useState)(0),d=(0,i.useRef)(null),m=(0,i.useRef)(!1);(0,i.useEffect)(()=>{let M=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(M)},[]),(0,i.useEffect)(()=>{if(!d.current)return;let M=d.current,L=new ResizeObserver(K=>{for(let xe of K)l(xe.contentRect.width)});return L.observe(M),l(M.getBoundingClientRect().width),()=>L.disconnect()},[]);let v=1440,h=O(0),g=e.map(M=>{let L=Qe(M.time);return{r:M,start:L,end:L+Math.max(1,M.duration)}}),{placed:k,laneCount:y}=Zm(g),p=Math.max(a,24*82),c=p/v,f=p>a+1,x=t*c;(0,i.useEffect)(()=>{if(!d.current||!a||m.current)return;if(!f){m.current=!0;return}let M=d.current,L=Math.max(0,Math.min(x-a/2,p-a));M.scrollTo({left:L,behavior:"auto"}),m.current=!0},[a,x,p,f]),(0,i.useEffect)(()=>{let M=d.current;if(!M)return;let L=0,K=()=>{L||(L=requestAnimationFrame(()=>{u(M.scrollLeft),L=0}))};return M.addEventListener("scroll",K,{passive:!0}),u(M.scrollLeft),()=>{M.removeEventListener("scroll",K),cancelAnimationFrame(L)}},[a]);let N=()=>{let M=d.current;M&&(M.scrollTo({left:Math.max(0,Math.min(x-a/2,p-a)),behavior:"smooth"}),B.click())},S=38,E=6,z=8,$=z*2+y*S+(y-1)*E,A=c*60>=40?1:3,I=[];for(let M=0;M<=24;M+=A)I.push(M);let F=M=>{let L=M%24;return L===0?"12a":L===12?"12p":L>12?`${L-12}p`:`${L}a`},w=e.length,D=w?Math.round(n/w*100):0;return i.default.createElement("div",{className:"timeline-wrap"},i.default.createElement("div",{className:"timeline-head"},i.default.createElement("div",{className:"timeline-head-left"},i.default.createElement("span",{className:"timeline-title"},"today's schedule"),w>0&&i.default.createElement("span",{className:"timeline-count"},n,"/",w," done")),f&&i.default.createElement("button",{className:"timeline-jump",onClick:N,title:"Jump to now"},"now")),w>0&&i.default.createElement("div",{className:"timeline-progress"},i.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${D}%`:"0%"}})),i.default.createElement("div",{className:"timeline-scroll",ref:d},i.default.createElement("div",{className:"timeline-inner",style:{width:p}},i.default.createElement("div",{className:"timeline-hours"},I.map(M=>i.default.createElement("div",{key:M,className:"timeline-hour",style:{left:M*60*c}},i.default.createElement("span",null,F(M))))),i.default.createElement("div",{className:"timeline-track",style:{height:$}},i.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*c}}),i.default.createElement("div",{className:"timeline-night",style:{left:1320*c,width:120*c}}),I.map(M=>i.default.createElement("div",{key:M,className:`timeline-gridline ${M%6===0?"major":""}`,style:{left:M*60*c}})),i.default.createElement("div",{className:"timeline-elapsed",style:{width:r?x:0}}),k.map(({r:M,start:L,lane:K},xe)=>{let H=L*c,oe=Math.max(1,M.duration)*c,ke=Math.max(4,Math.min(oe,p-H)),we=(M.history||[]).includes(h),Yt=Gn(M.id),he=Math.max(H,s),Et=Math.min(H+ke,s+a),j=Math.max(0,Et-he)>38,q=Math.max(0,Math.min(s-H,ke-46)),Z=t>=L&&t<L+M.duration;return i.default.createElement("div",{key:M.id,className:`timeline-block ${we?"done":""} ${Z?"active":""}`,style:{left:H,top:z+K*(S+E),width:r?ke:0,height:S,transitionDelay:`${Math.min(xe*18,260)}ms`,background:we?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Yt}, ${Yt}C4)`,boxShadow:we?"none":`0 2px 10px ${Yt}44`},title:`${M.label} \xB7 ${Nt(L)} \xB7 ${St(M.duration)}${we?" \xB7 done":""}`},j&&i.default.createElement("span",{className:"timeline-block-label",style:q>0?{paddingLeft:q+8}:void 0},we&&i.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),M.label))}),i.default.createElement("div",{className:"timeline-now",style:{left:x}})))),f&&i.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var e0=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[O(-1),O(-2),O(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[O(-1),O(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[O(0),O(-1),O(-2),O(-3),O(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[O(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function Ql(){let[e,t]=(0,i.useState)(ki());return(0,i.useEffect)(()=>{let n=setInterval(()=>t(ki()),1e3);return()=>clearInterval(n)},[]),e}function Yl(e,t){return(0,i.useMemo)(()=>{let n=[...e].sort((a,l)=>Qe(a.time)-Qe(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let a=0;a<n.length&&Qe(n[a].time)<=t;a++)r=a;let o=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[o].id}},[e,t])}function t0({routine:e,status:t,index:n,onDelete:r,onToggleToday:o,onSave:a}){let l=Qe(e.time),s=l+e.duration,{streak:u,freezeUsed:d}=Gl(e.history),m=(e.history||[]).includes(O(0)),[v,h]=(0,i.useState)(0),g=(0,i.useRef)(!1),k=(0,i.useRef)(0),y=(0,i.useRef)(0),b=(0,i.useRef)(null),p=(0,i.useRef)(!1),[c,f]=(0,i.useState)(!1),[x,N]=(0,i.useState)(!1),[S,E]=(0,i.useState)(e.label),[z,$]=(0,i.useState)(e.time),[A,I]=(0,i.useState)(e.duration),[F,w]=(0,i.useState)(e.alternatives||[]),D=()=>{E(e.label),$(e.time),I(e.duration),w(e.alternatives||[]),N(!0)},M=()=>{let H=S.trim();H&&(a(e.id,{label:H,time:z||e.time,duration:Math.max(5,+A||e.duration),alternatives:F.map(oe=>oe.trim()).filter(Boolean)}),N(!1))},L=H=>{x||(g.current=!0,p.current=!1,b.current=null,k.current=H.clientX,y.current=H.clientY)},K=H=>{if(!g.current)return;let oe=H.clientX-k.current,ke=H.clientY-y.current;if(b.current===null){if(Math.abs(oe)<6&&Math.abs(ke)<6)return;if(b.current=Math.abs(oe)>Math.abs(ke)?"x":"y",b.current==="y"){g.current=!1;return}}b.current==="x"&&(Math.abs(oe)>4&&(p.current=!0),h(Math.max(-120,Math.min(0,oe))))},xe=()=>{g.current&&(g.current=!1,v<-70?(f(!0),setTimeout(()=>r(e.id),200)):(h(0),p.current||D()))};return i.default.createElement("div",{className:`routine-row-wrap ${c?"removing":""}`,style:{animationDelay:`${n*35}ms`}},i.default.createElement("div",{className:"routine-delete-bg"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),i.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${v}px)`,transition:g.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${m?"#2A2F36":Gn(e.id)}`},onPointerDown:L,onPointerMove:K,onPointerUp:xe,onPointerLeave:xe,onPointerCancel:xe},i.default.createElement("div",{className:"routine-line"},i.default.createElement("span",{className:`routine-node ${m?"quest-done":""}`}),i.default.createElement("span",{className:"routine-connector"})),x?i.default.createElement("div",{className:"routine-edit",onPointerDown:H=>H.stopPropagation()},i.default.createElement("input",{className:"edit-label",value:S,onChange:H=>E(H.target.value),onKeyDown:H=>H.key==="Enter"&&M(),autoFocus:!0}),i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{type:"time",className:"time-input",value:z,onChange:H=>$(H.target.value)}),i.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:A,onChange:H=>I(H.target.value)}),i.default.createElement("span",{className:"edit-unit"},"min")),i.default.createElement("div",{className:"alt-composer"},i.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),F.map((H,oe)=>i.default.createElement("div",{className:"alt-composer-row",key:oe},i.default.createElement("input",{type:"text",placeholder:`alternative ${oe+1}`,value:H,onChange:ke=>{let we=[...F];we[oe]=ke.target.value,w(we)},onKeyDown:ke=>ke.key==="Enter"&&M()}),i.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>w(F.filter((ke,we)=>we!==oe)),"aria-label":"Remove alternative"},"\xD7"))),i.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>w([...F,""])},"+ another option")),i.default.createElement("div",{className:"edit-actions"},i.default.createElement("button",{className:"edit-cancel",onClick:()=>N(!1)},"cancel"),i.default.createElement("button",{className:"edit-save",onClick:M},"save"))):i.default.createElement("div",{className:"routine-main"},i.default.createElement("div",{className:"routine-top"},i.default.createElement("span",{className:"routine-time"},Nt(l)),t==="current"&&i.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&i.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,d&&i.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),i.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&i.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),i.default.createElement("span",{className:"routine-span"},Nt(l)," \u2013 ",Nt(s)," \xB7 ",St(e.duration)))))}function n0({routines:e,setRoutines:t}){let n=Ql(),r=n.hour*60+n.minute,{sorted:o,currentId:a,nextId:l}=Yl(e,r),s=o.find(w=>w.id===a),u=o.find(w=>w.id===l),[d,m]=(0,i.useState)(""),[v,h]=(0,i.useState)(()=>Vl(r)),[g,k]=(0,i.useState)(30),[y,b]=(0,i.useState)(!1),[p,c]=(0,i.useState)([]),[f,x]=(0,i.useState)(!1),N=()=>{let w=d.trim();if(!w){b(!0),setTimeout(()=>b(!1),420),B.error();return}let D=v||Vl(r),M=p.map(L=>L.trim()).filter(Boolean);t(L=>[...L,{id:me(),time:D,label:w,duration:Math.max(5,+g||30),history:[],alternatives:M}]),m(""),h(Vl(r)),k(30),c([]),x(!1),B.click()},S=w=>{t(D=>D.filter(M=>M.id!==w)),B.delete()},E=w=>{let D=O(0),M=!1;t(L=>L.map(K=>{if(K.id!==w)return K;let xe=(K.history||[]).includes(D);M=!xe;let H=xe?K.history.filter(oe=>oe!==D):[...K.history||[],D];return{...K,history:H.slice(-60)}})),M?B.success():B.click()},z=(w,D)=>t(M=>M.map(L=>L.id===w?{...L,...D}:L)),$=s?Qe(s.time)+s.duration:0,A=u?(Qe(u.time)-r+1440)%1440||1440:0,I=O(0),F=o.filter(w=>(w.history||[]).includes(I)).length;return i.default.createElement("div",{className:"task-list routine-list"},i.default.createElement("div",{className:"hero-card"},i.default.createElement("div",{className:"hero-clock-row"},i.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),i.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),i.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),i.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),i.default.createElement("span",{className:"hero-date"},$m()),i.default.createElement("div",{className:"hero-divider"}),s?i.default.createElement("div",{className:"hero-current"},i.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),i.default.createElement("div",{className:"hero-current-name"},i.default.createElement("span",{className:"pulse-dot"}),s.label),i.default.createElement("span",{className:"hero-sub"},"until ",Nt($)," \xB7 next: ",u?.label," in ",St(A))):i.default.createElement("span",{className:"hero-sub"},"no routines yet")),i.default.createElement(Rm,{routines:o,nowMinutes:r,doneToday:F}),i.default.createElement("div",{className:`composer ${y?"shake":""}`},i.default.createElement("input",{type:"text",placeholder:"new routine...",value:d,onChange:w=>m(w.target.value),onKeyDown:w=>w.key==="Enter"&&N()}),i.default.createElement("input",{type:"time",className:"time-input",value:v,onChange:w=>h(w.target.value)}),i.default.createElement("button",{type:"button",className:`alt-toggle-btn ${f?"active":""}`,onClick:()=>x(w=>!w),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),i.default.createElement("button",{className:"add-btn",onClick:N,"aria-label":"Add routine"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),f&&i.default.createElement("div",{className:"alt-composer"},i.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),p.map((w,D)=>i.default.createElement("div",{className:"alt-composer-row",key:D},i.default.createElement("input",{type:"text",placeholder:`alternative ${D+1}, e.g. "Drawing"`,value:w,onChange:M=>{let L=[...p];L[D]=M.target.value,c(L)},onKeyDown:M=>M.key==="Enter"&&N()}),i.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>c(p.filter((M,L)=>L!==D)),"aria-label":"Remove alternative"},"\xD7"))),i.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>c([...p,""])},"+ another option")),i.default.createElement("div",{className:"duration-chips"},jm.map(w=>i.default.createElement("button",{key:w,className:g===w?"active":"",onClick:()=>k(w)},St(w))),i.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:g,onChange:w=>k(+w.target.value||5)})),o.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):o.map((w,D)=>i.default.createElement(t0,{key:w.id,routine:w,index:D,status:w.id===a?"current":w.id===l?"next":"idle",onDelete:S,onToggleToday:E,onSave:z})))}function r0(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,o=new Date(n,r,0).getDate(),a=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:o,monthLabel:a}}function o0(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function lp(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has(O(r))&&n++;return n}function i0(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date(O(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var a0=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[O(0),O(-1),O(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[O(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[O(0)]}],l0=[{id:1,name:"Notion Template",dueDate:O(7),tasks:[{id:me(),text:"Design layout",done:!0},{id:me(),text:"Write docs",done:!1},{id:me(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:O(7),tasks:[{id:me(),text:"Script draft",done:!1},{id:me(),text:"Record",done:!1}]}];function s0({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:o}=r0(),a=new Set(e||[]),l=O(0),s=Array.from({length:r},(u,d)=>d+1);return i.default.createElement("div",{className:"month-grid-wrap"},i.default.createElement("span",{className:"month-grid-label"},o),i.default.createElement("div",{className:"month-grid"},s.map(u=>{let d=o0(t,n,u);return i.default.createElement("span",{key:u,className:`month-cell ${a.has(d)?"filled":""} ${d===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:d})})))}function u0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),{streak:a,freezeUsed:l}=Gl(e.history),s=lp(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[d,m]=(0,i.useState)(!1),[v,h]=(0,i.useState)(e.icon),[g,k]=(0,i.useState)(e.label),[y,b]=(0,i.useState)(e.weeklyGoal),p=()=>{h(e.icon),k(e.label),b(e.weeklyGoal),m(!0)},c=()=>{let f=g.trim();f&&(r(e.id,{icon:v.trim()||e.icon,label:f,weeklyGoal:Math.max(1,Math.min(7,+y||e.weeklyGoal))}),m(!1))};return d?i.default.createElement("div",{className:"vault-card"},i.default.createElement("div",{className:"routine-edit"},i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{className:"duration-input",style:{width:44},value:v,onChange:f=>h(f.target.value),maxLength:2}),i.default.createElement("input",{className:"edit-label",style:{flex:1},value:g,onChange:f=>k(f.target.value),onKeyDown:f=>f.key==="Enter"&&c(),autoFocus:!0})),i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:y,onChange:f=>b(f.target.value)}),i.default.createElement("span",{className:"edit-unit"},"x / week")),i.default.createElement("div",{className:"edit-actions"},i.default.createElement("button",{className:"edit-cancel",onClick:()=>m(!1)},"cancel"),i.default.createElement("button",{className:"edit-save",onClick:c},"save")))):i.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${Gn(e.id)}`}},i.default.createElement("div",{className:"vault-card-top"},i.default.createElement("span",{className:"vault-card-icon",style:{color:Gn(e.id)}},e.icon),i.default.createElement("div",{className:"vault-card-title"},i.default.createElement("span",{className:"vault-card-label"},e.label),i.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),i.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),i.default.createElement(s0,{history:e.history}),i.default.createElement("div",{className:"vault-card-bottom"},i.default.createElement("div",{className:"vault-card-ring-row"},i.default.createElement(ql,{pct:u,size:34,stroke:3.5,color:Gn(e.id)}),i.default.createElement("span",{className:"vault-card-pct"},u,"% ",i.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),a>0&&i.default.createElement("span",{className:"streak-tag"},"\u{1F525}",a,l&&i.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),i.default.createElement("button",{className:`vault-check ${o?"done":""}`,onClick:()=>t(e.id)},o?"\u2713 completed today":"mark complete today"))}function d0({habits:e,setHabits:t}){let[n,r]=(0,i.useState)(""),[o,a]=(0,i.useState)(7),[l,s]=(0,i.useState)(!1),u=()=>{let h=n.trim();if(!h){s(!0),setTimeout(()=>s(!1),420),B.error();return}t(g=>[...g,{id:me(),icon:"\u25C6",label:h,weeklyGoal:o,history:[]}]),r(""),a(7),B.click()},d=h=>{t(g=>g.filter(k=>k.id!==h)),B.delete()},m=(h,g)=>t(k=>k.map(y=>y.id===h?{...y,...g}:y)),v=h=>{let g=O(0),k=!1;t(y=>y.map(b=>{if(b.id!==h)return b;let p=(b.history||[]).includes(g);k=!p;let c=p?b.history.filter(f=>f!==g):[...b.history||[],g];return{...b,history:c.slice(-370)}})),k?B.success():B.click()};return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"HABIT-STREAK-TRACKING")),i.default.createElement("div",{className:"vault-grid"},e.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>i.default.createElement(u0,{key:h.id,habit:h,onToggleToday:v,onDelete:d,onSave:m}))),i.default.createElement("div",{className:`composer ${l?"shake":""}`},i.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),i.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),i.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>i.default.createElement("button",{key:h,className:o===h?"active":"",onClick:()=>a(h)},h,"x/wk"))))}function c0({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:o}){let[a,l]=(0,i.useState)(!1),[s,u]=(0,i.useState)(t.text),d=()=>{let m=s.trim();m&&o(e,t.id,m),l(!1)};return a?i.default.createElement("div",{className:"project-task-row"},i.default.createElement("input",{className:"project-task-edit",value:s,onChange:m=>u(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),onBlur:d,autoFocus:!0})):i.default.createElement("div",{className:"project-task-row"},i.default.createElement(dp,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),i.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),i.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function p0({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:o,onEditTask:a,onSave:l}){let[s,u]=(0,i.useState)(""),d=e.tasks.length,m=e.tasks.filter(S=>S.done).length,v=d?Math.round(m/d*100):0,h=i0(e.dueDate),[g,k]=(0,i.useState)(!1),[y,b]=(0,i.useState)(e.name),[p,c]=(0,i.useState)(e.dueDate||""),f=()=>{let S=s.trim();S&&(n(e.id,S),u(""))},x=()=>{b(e.name),c(e.dueDate||""),k(!0)},N=()=>{let S=y.trim();S&&(l(e.id,{name:S,dueDate:p||null}),k(!1))};return g?i.default.createElement("div",{className:"project-card"},i.default.createElement("div",{className:"routine-edit"},i.default.createElement("input",{className:"edit-label",value:y,onChange:S=>b(S.target.value),onKeyDown:S=>S.key==="Enter"&&N(),autoFocus:!0}),i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{type:"date",className:"time-input",value:p,onChange:S=>c(S.target.value)})),i.default.createElement("div",{className:"edit-actions"},i.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),i.default.createElement("button",{className:"edit-save",onClick:N},"save")))):i.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${Gn(e.id)}`}},i.default.createElement("div",{className:"project-card-top"},i.default.createElement("span",{className:"project-name"},e.name),i.default.createElement("div",{className:"project-card-actions"},i.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit project"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&i.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),i.default.createElement("div",{className:"progress-track small"},i.default.createElement("div",{className:"progress-fill",style:{width:`${v}%`}})),i.default.createElement("span",{className:"vault-card-pct"},m,"/",d," tasks \xB7 ",v,"%"),i.default.createElement("div",{className:"project-tasks"},e.tasks.map(S=>i.default.createElement(c0,{key:S.id,projectId:e.id,task:S,onToggle:r,onDelete:o,onEdit:a}))),i.default.createElement("div",{className:"project-add-task"},i.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:S=>u(S.target.value),onKeyDown:S=>S.key==="Enter"&&f()})))}function f0({projects:e,setProjects:t}){let[n,r]=(0,i.useState)(""),[o,a]=(0,i.useState)(""),[l,s]=(0,i.useState)(!1),u=()=>{let y=n.trim();if(!y){s(!0),setTimeout(()=>s(!1),420),B.error();return}t(b=>[...b,{id:me(),name:y,dueDate:o||null,tasks:[]}]),r(""),a(""),B.click()},d=y=>{t(b=>b.filter(p=>p.id!==y)),B.delete()},m=(y,b)=>t(p=>p.map(c=>c.id===y?{...c,...b}:c)),v=(y,b)=>{t(p=>p.map(c=>c.id===y?{...c,tasks:[...c.tasks,{id:me(),text:b,done:!1}]}:c)),B.click()},h=(y,b)=>{t(p=>p.map(c=>c.id!==y?c:{...c,tasks:c.tasks.map(f=>f.id===b?{...f,done:!f.done}:f)})),B.success()},g=(y,b)=>{t(p=>p.map(c=>c.id!==y?c:{...c,tasks:c.tasks.filter(f=>f.id!==b)})),B.delete()},k=(y,b,p)=>t(c=>c.map(f=>f.id!==y?f:{...f,tasks:f.tasks.map(x=>x.id===b?{...x,text:p}:x)}));return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"PROJECT-MANAGER")),i.default.createElement("div",{className:"vault-grid"},e.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no projects yet")):e.map(y=>i.default.createElement(p0,{key:y.id,project:y,onDelete:d,onAddTask:v,onToggleTask:h,onDeleteTask:g,onEditTask:k,onSave:m}))),i.default.createElement("div",{className:`composer ${l?"shake":""}`},i.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:y=>r(y.target.value),onKeyDown:y=>y.key==="Enter"&&u()}),i.default.createElement("input",{type:"date",className:"time-input",value:o,onChange:y=>a(y.target.value)}),i.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function m0({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return i.default.createElement("div",{className:"task-list vault-scroll"},i.default.createElement(d0,{habits:e,setHabits:t}),i.default.createElement(f0,{projects:n,setProjects:r}))}var ct=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],Zl=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],Vr=ct.reduce((e,t)=>(e[t.key]=Zl.filter(n=>n.area===t.key),e),{});function Vc(e){return Zl.find(t=>t.key===e)||null}function qn(e){if(e.sub&&Vc(e.sub)&&Vc(e.sub).area===e.area)return e.sub;let t=Vr[e.area];return t&&t.length?t[0].key:null}function h0(e,t,n){let r=t.filter(a=>qn(a)===e).reduce((a,l)=>a+l.xp*(l.history?.length||0),0),o=n.filter(a=>qn(a)===e).reduce((a,l)=>a+l.xp*(l.history?.length||0),0);return r-o}var Jc=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Gn(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return Jc[Math.abs(t)%Jc.length]}var Hr=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function sp(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),o=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),a=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return r-o-a}function gn(e){return 12.5*(e-1)*(e+6)}function up(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-gn(n),o=gn(n+1)-gn(n);return{level:n,into:r,span:o}}function v0(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[o,a]of t)for(;n>=o;)r+=a,n-=o;return r}function g0(e){if(e<=Hr.length)return Hr[e-1];let t=e-Hr.length+1;return`${Hr[Hr.length-1]} ${v0(t)}`}var y0=[{id:1,label:"Deep Work",area:"work",xp:40,history:[O(0),O(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[O(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],x0=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],k0=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function w0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),[a,l]=(0,i.useState)(0),s=()=>{o||l(E=>E+1)},{streak:u,freezeUsed:d}=Gl(e.history),m=ct.find(E=>E.key===e.area)||ct[0],[v,h]=(0,i.useState)(!1),[g,k]=(0,i.useState)(e.label),[y,b]=(0,i.useState)(e.area),[p,c]=(0,i.useState)(()=>qn(e)),[f,x]=(0,i.useState)(e.xp),N=()=>{k(e.label),b(e.area),c(qn(e)),x(e.xp),h(!0)},S=()=>{let E=g.trim();E&&(r(e.id,{label:E,area:y,sub:p,xp:Math.max(1,+f||e.xp)}),h(!1))};return v?i.default.createElement("div",{className:"quest-habit-card good editing"},i.default.createElement("div",{className:"routine-edit"},i.default.createElement("input",{className:"edit-label",value:g,onChange:E=>k(E.target.value),onKeyDown:E=>E.key==="Enter"&&S(),autoFocus:!0}),i.default.createElement("div",{className:"edit-row"},ct.map(E=>i.default.createElement("button",{key:E.key,type:"button",className:`area-chip ${y===E.key?"active":""}`,style:{"--ac":E.color},onClick:()=>{b(E.key);let z=Vr[E.key]||[];c(z.length?z[0].key:null)}},E.label))),i.default.createElement("div",{className:"edit-row edit-row-subs"},(Vr[y]||[]).map(E=>i.default.createElement("button",{key:E.key,type:"button",className:`sub-chip ${p===E.key?"active":""}`,onClick:()=>c(E.key)},E.label))),i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:f,onChange:E=>x(E.target.value)}),i.default.createElement("span",{className:"edit-unit"},"XP")),i.default.createElement("div",{className:"edit-actions"},i.default.createElement("button",{className:"edit-cancel",onClick:()=>h(!1)},"cancel"),i.default.createElement("button",{className:"edit-save",onClick:S},"save")))):i.default.createElement("div",{className:`quest-habit-card good ${a?"just-completed":""}`,key:`g${e.id}`},a>0&&i.default.createElement("span",{className:"xp-pop",key:a},"+",e.xp),i.default.createElement("span",{className:"area-dot",style:{background:m.color}}),i.default.createElement("div",{className:"quest-habit-main"},i.default.createElement("span",{className:"quest-habit-label"},e.label),i.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",m.label,u>0?` \xB7 \u{1F525}${u}${d?" \u2744\uFE0F":""}`:"")),i.default.createElement("button",{className:`quest-check ${o?"done":""}`,onClick:()=>{s(),t(e.id)},"aria-label":"Mark done today"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:o?0:24,transition:"stroke-dashoffset 220ms ease"}}))),i.default.createElement("button",{className:"vault-card-edit",onClick:N,"aria-label":"Edit habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function b0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes(O(0)),a=ct.find(f=>f.key===e.area)||ct[0],l=lp(e.history),[s,u]=(0,i.useState)(!1),[d,m]=(0,i.useState)(e.label),[v,h]=(0,i.useState)(e.area),[g,k]=(0,i.useState)(()=>qn(e)),[y,b]=(0,i.useState)(e.xp),p=()=>{m(e.label),h(e.area),k(qn(e)),b(e.xp),u(!0)},c=()=>{let f=d.trim();f&&(r(e.id,{label:f,area:v,sub:g,xp:Math.max(1,+y||e.xp)}),u(!1))};return s?i.default.createElement("div",{className:"quest-habit-card bad editing"},i.default.createElement("div",{className:"routine-edit"},i.default.createElement("input",{className:"edit-label",value:d,onChange:f=>m(f.target.value),onKeyDown:f=>f.key==="Enter"&&c(),autoFocus:!0}),i.default.createElement("div",{className:"edit-row"},ct.map(f=>i.default.createElement("button",{key:f.key,type:"button",className:`area-chip ${v===f.key?"active":""}`,style:{"--ac":f.color},onClick:()=>{h(f.key);let x=Vr[f.key]||[];k(x.length?x[0].key:null)}},f.label))),i.default.createElement("div",{className:"edit-row edit-row-subs"},(Vr[v]||[]).map(f=>i.default.createElement("button",{key:f.key,type:"button",className:`sub-chip ${g===f.key?"active":""}`,onClick:()=>k(f.key)},f.label))),i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:f=>b(f.target.value)}),i.default.createElement("span",{className:"edit-unit"},"XP")),i.default.createElement("div",{className:"edit-actions"},i.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),i.default.createElement("button",{className:"edit-save",onClick:c},"save")))):i.default.createElement("div",{className:"quest-habit-card bad"},i.default.createElement("span",{className:"area-dot",style:{background:a.color}}),i.default.createElement("div",{className:"quest-habit-main"},i.default.createElement("span",{className:"quest-habit-label"},e.label),i.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",a.label," \xB7 ",l,"x this week")),i.default.createElement("button",{className:`quest-check bad-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Log slip today"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),i.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function N0({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:o}){let[a,l]=(0,i.useState)(!1),[s,u]=(0,i.useState)(e.label),[d,m]=(0,i.useState)(e.cost),v=()=>{u(e.label),m(e.cost),l(!0)},h=()=>{let g=s.trim();g&&(o(e.id,{label:g,cost:Math.max(1,+d||e.cost)}),l(!1))};return a?i.default.createElement("div",{className:"reward-card"},i.default.createElement("div",{className:"routine-edit"},i.default.createElement("input",{className:"edit-label",value:s,onChange:g=>u(g.target.value),onKeyDown:g=>g.key==="Enter"&&h(),autoFocus:!0}),i.default.createElement("div",{className:"edit-row"},i.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:d,onChange:g=>m(g.target.value)}),i.default.createElement("span",{className:"edit-unit"},"XP cost")),i.default.createElement("div",{className:"edit-actions"},i.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),i.default.createElement("button",{className:"edit-save",onClick:h},"save")))):i.default.createElement("div",{className:"reward-card"},i.default.createElement("div",{className:"reward-top"},i.default.createElement("span",{className:"reward-label"},e.label),i.default.createElement("div",{className:"project-card-actions"},i.default.createElement("button",{className:"vault-card-edit",onClick:v,"aria-label":"Edit reward"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),i.default.createElement("span",{className:"reward-cost"},e.cost," XP"),i.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&i.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function S0({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:o,setRewards:a}){let l=(0,i.useMemo)(()=>sp(e,n,o),[e,n,o]),{level:s,into:u,span:d}=up(l),m=Math.round(u/d*100),v=_=>{let j=O(0),q=!1;t(Z=>Z.map(ae=>{if(ae.id!==_)return ae;let Ct=(ae.history||[]).includes(j);q=!Ct;let Mt=Ct?ae.history.filter(zt=>zt!==j):[...ae.history||[],j];return{...ae,history:Mt.slice(-370)}})),q?B.success():B.click()},h=_=>{let j=O(0),q=!1;r(Z=>Z.map(ae=>{if(ae.id!==_)return ae;let Ct=(ae.history||[]).includes(j);q=!Ct;let Mt=Ct?ae.history.filter(zt=>zt!==j):[...ae.history||[],j];return{...ae,history:Mt.slice(-370)}})),q?B.error():B.click()},g=_=>{t(j=>j.filter(q=>q.id!==_)),B.delete()},k=_=>{r(j=>j.filter(q=>q.id!==_)),B.delete()},y=(_,j)=>t(q=>q.map(Z=>Z.id===_?{...Z,...j}:Z)),b=(_,j)=>r(q=>q.map(Z=>Z.id===_?{...Z,...j}:Z)),p=_=>{let j=O(0);a(q=>q.map(Z=>Z.id===_?{...Z,claimed:[...Z.claimed||[],j]}:Z)),B.success()},c=_=>{a(j=>j.filter(q=>q.id!==_)),B.delete()},f=(_,j)=>a(q=>q.map(Z=>Z.id===_?{...Z,...j}:Z)),[x,N]=(0,i.useState)(""),[S,E]=(0,i.useState)("work"),[z,$]=(0,i.useState)(20),[A,I]=(0,i.useState)(""),[F,w]=(0,i.useState)("work"),[D,M]=(0,i.useState)(20),[L,K]=(0,i.useState)(""),[xe,H]=(0,i.useState)(100),oe=()=>{let _=x.trim();_&&(t(j=>[...j,{id:me(),label:_,area:S,xp:+z||10,history:[]}]),N(""),B.click())},ke=()=>{let _=A.trim();_&&(r(j=>[...j,{id:me(),label:_,area:F,xp:+D||10,history:[]}]),I(""),B.click())},we=()=>{let _=L.trim();_&&(a(j=>[...j,{id:me(),label:_,cost:+xe||50,claimed:[]}]),K(""),B.click())},Yt=Zl.map(_=>({key:_.key,label:_.label,color:(ct.find(j=>j.key===_.area)||{}).color,value:Math.max(0,h0(_.key,e,n))})),he=e.reduce((_,j)=>_+j.xp*(j.history?.length||0),0),Et=n.reduce((_,j)=>_+j.xp*(j.history?.length||0),0);return i.default.createElement("div",{className:"task-list vault-scroll"},i.default.createElement("div",{className:"hero-card hero-card-viz"},i.default.createElement("div",{className:"hero-viz-row"},i.default.createElement(ql,{pct:m,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${s}`,sublabel:g0(s)}),i.default.createElement("div",{className:"hero-viz-stats"},i.default.createElement("span",{className:"hero-xp-total"},i.default.createElement(bt,{value:l})," ",i.default.createElement("small",null,"XP")),i.default.createElement("span",{className:"hero-xp-sub"},u,"/",d," to next level"),i.default.createElement("div",{className:"hero-xp-split"},i.default.createElement("span",{className:"hero-xp-earned"},"+",i.default.createElement(bt,{value:he})),i.default.createElement("span",{className:"hero-xp-lost"},"\u2212",i.default.createElement(bt,{value:Et})))))),i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"LIFE-AREAS")),i.default.createElement("div",{className:"radar-card"},i.default.createElement(Qm,{axes:Yt,size:252})),(he>0||Et>0)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"XP SOURCE")),i.default.createElement("div",{className:"donut-card"},i.default.createElement(ap,{size:120,stroke:16,centerLabel:l,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:he,color:"#5EEAD4"},{key:"lost",label:"Lost",value:Et,color:"#F0576B"}]}),i.default.createElement("div",{className:"donut-legend"},i.default.createElement("div",{className:"donut-legend-row"},i.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),i.default.createElement("span",null,"Earned from good habits"),i.default.createElement("span",{className:"donut-legend-val"},i.default.createElement(bt,{value:he}))),i.default.createElement("div",{className:"donut-legend-row"},i.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),i.default.createElement("span",null,"Lost to bad habits"),i.default.createElement("span",{className:"donut-legend-val"},i.default.createElement(bt,{value:Et})))))),i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"GOOD-HABITS")),i.default.createElement("div",{className:"quest-habit-list"},e.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no good habits yet")):e.map(_=>i.default.createElement(w0,{key:_.id,habit:_,onToggleToday:v,onDelete:g,onSave:y}))),i.default.createElement("div",{className:"composer"},i.default.createElement("input",{type:"text",placeholder:"new good habit...",value:x,onChange:_=>N(_.target.value),onKeyDown:_=>_.key==="Enter"&&oe()}),i.default.createElement("button",{className:"add-btn",onClick:oe,"aria-label":"Add good habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),i.default.createElement("div",{className:"duration-chips"},ct.map(_=>i.default.createElement("button",{key:_.key,className:S===_.key?"active":"",onClick:()=>E(_.key)},_.label)),i.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:z,onChange:_=>$(+_.target.value||5)})),i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"BAD-HABITS")),i.default.createElement("div",{className:"quest-habit-list"},n.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no bad habits tracked")):n.map(_=>i.default.createElement(b0,{key:_.id,habit:_,onToggleToday:h,onDelete:k,onSave:b}))),i.default.createElement("div",{className:"composer"},i.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:A,onChange:_=>I(_.target.value),onKeyDown:_=>_.key==="Enter"&&ke()}),i.default.createElement("button",{className:"add-btn",onClick:ke,"aria-label":"Add bad habit"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),i.default.createElement("div",{className:"duration-chips"},ct.map(_=>i.default.createElement("button",{key:_.key,className:F===_.key?"active":"",onClick:()=>w(_.key)},_.label)),i.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:D,onChange:_=>M(+_.target.value||5)})),i.default.createElement("div",{className:"section-header"},i.default.createElement("span",null,"REWARD-CENTER")),i.default.createElement("div",{className:"vault-grid"},o.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no rewards set up")):o.map(_=>i.default.createElement(N0,{key:_.id,reward:_,canClaim:l>=_.cost,onClaim:p,onDelete:c,onSave:f}))),i.default.createElement("div",{className:"composer"},i.default.createElement("input",{type:"text",placeholder:"new reward...",value:L,onChange:_=>K(_.target.value),onKeyDown:_=>_.key==="Enter"&&we()}),i.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:xe,onChange:_=>H(+_.target.value||50)}),i.default.createElement("button",{className:"add-btn",onClick:we,"aria-label":"Add reward"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var E0=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function C0(e=1e3*30){let[t,n]=(0,i.useState)(Date.now());return(0,i.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function M0(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function dp({checked:e,onChange:t,color:n}){return i.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function z0({task:e,now:t,onToggle:n,onDelete:r,index:o}){let[a,l]=(0,i.useState)(!1),s=xi.find(d=>d.key===e.priority)||xi[0],u=()=>{l(!0),setTimeout(()=>r(e.id),220)};return i.default.createElement("div",{className:`task-row ${a?"leaving":""}`,style:{animationDelay:`${o*35}ms`}},i.default.createElement(dp,{checked:e.done,onChange:()=>n(e.id),color:s.color}),i.default.createElement("div",{className:"task-main"},i.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),i.default.createElement("span",{className:"task-meta"},i.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),i.default.createElement("span",{className:"prio-label"},s.label),i.default.createElement("span",{className:"dot-sep"},"\xB7"),i.default.createElement("span",null,M0(e.createdAt,t)))),i.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var Kc="tasksh.tasks.v1",Xc="tasksh.routines.v1",Gc="tasksh.vaulthabits.v1",qc="tasksh.projects.v1",Qc="tasksh.goodhabits.v1",Yc="tasksh.badhabits.v1",Zc="tasksh.rewards.v1",Rc="tasksh.deviceid.v1",Jl="tasksh.notifyenabled.v1",Xl="tasksh.aikey.v1";function _0({ctl:e,level:t,totalXP:n,onClose:r}){let o=gn(t+1),a=gn(t);return i.default.createElement("div",{className:"sheet-backdrop",onClick:r},i.default.createElement("div",{className:"sheet",onClick:l=>l.stopPropagation()},i.default.createElement("div",{className:"sheet-head"},i.default.createElement("span",{className:"sheet-title"},"themes"),i.default.createElement("button",{className:"sheet-close",onClick:r,"aria-label":"Close"},"\xD7")),i.default.createElement("div",{className:"theme-grid"},e.themes.map(l=>{let s=Kl(l,t),u=e.themeId===l.id,d=gn(l.unlockLevel),m=gn(Math.max(1,l.unlockLevel-1)),v=s?100:Math.max(0,Math.min(99,Math.round((n-m)/(d-m)*100)));return i.default.createElement("button",{key:l.id,className:`theme-card ${u?"active":""} ${s?"":"locked"}`,onClick:()=>{s?(e.setThemeId(l.id),B.success()):B.error()},disabled:!s},i.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${l.colors.bg} 0%, ${l.colors.panel} 45%, ${l.colors.accent} 100%)`}},!s&&i.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},i.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),i.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),u&&i.default.createElement("span",{className:"theme-active-dot"})),i.default.createElement("span",{className:"theme-name"},l.name),s?i.default.createElement("span",{className:"theme-blurb"},l.blurb):i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{className:"theme-req"},"level ",l.unlockLevel),i.default.createElement("span",{className:"theme-bar"},i.default.createElement("span",{className:"theme-bar-fill",style:{width:`${v}%`}})),i.default.createElement("span",{className:"theme-pct"},v,"%")))})),i.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,o-n)," XP to level ",t+1),i.default.createElement("div",{className:"calm-toggle-row"},i.default.createElement("div",null,i.default.createElement("div",{className:"calm-toggle-label"},"calm mode"),i.default.createElement("div",{className:"calm-toggle-hint"},"slower motion, softer light, a breathing guide")),i.default.createElement("button",{className:`calm-switch ${e.calm?"on":""}`,onClick:()=>{e.setCalm(!e.calm),B.click()},"aria-pressed":e.calm},i.default.createElement("span",{className:"calm-knob"}))),i.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",i.default.createElement("b",null,e.phase.label))))}var Jr="https://tasksh-notify.techcraftor.workers.dev",T0="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function P0(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return o}function Rl(){let e=localStorage.getItem(Rc);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(Rc,e)),e}async function L0(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:P0(T0)}));let r=Rl();if(!(await fetch(`${Jr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function D0(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=Rl();try{await fetch(`${Jr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function ep(e){let t=Rl();try{await fetch(`${Jr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function A0(){try{return localStorage.getItem(Xl)||""}catch{return""}}function cp(e){try{e?localStorage.setItem(Xl,e):localStorage.removeItem(Xl)}catch{}}function I0(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var bi=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function B0(e){let t=await fetch(`${Jr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function F0(e,t,n){let r=await fetch(`${Jr}/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,data:t,apiKey:n})}),o=null;try{o=await r.json()}catch{}if(!r.ok){let a=o&&o.error;throw a==="no_key"||a==="bad_key"?new bi(o&&o.message||"Your API key was rejected."):a==="quota"?new Error(o&&o.message||"Daily AI limit reached."):new Error(o&&o.message||o&&o.error||`AI request failed (${r.status}).`)}return{reply:o.reply||"",actions:o.actions||[]}}function tp(e,t){let n=(r,o)=>(r||[]).find(a=>a.id===o);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Nt(Qe(e.time))} \xB7 ${e.label} (${St(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),o=[];return e.time!==void 0&&e.time!==r?.time&&o.push(`${Nt(Qe(r?.time||"00:00"))} \u2192 ${Nt(Qe(e.time))}`),e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&o.push(`${St(r?.duration||0)} \u2192 ${St(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${o.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),o=[];return e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&o.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${o.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function O0(e,t,n){let{routines:r,vaultHabits:o,goodHabits:a,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let d of e)switch(d.op){case"add_routine":r=[...r,{id:me(),time:d.time,label:d.label,duration:d.duration,history:[],...d.alternatives?.length?{alternatives:d.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(m=>m.id===d.id?{...m,...d.time!==void 0?{time:d.time}:{},...d.label!==void 0?{label:d.label}:{},...d.duration!==void 0?{duration:d.duration}:{}}:m),u.add("routines");break;case"delete_routine":r=r.filter(m=>m.id!==d.id),u.add("routines");break;case"add_vault_habit":o=[...o,{id:me(),icon:d.icon,label:d.label,weeklyGoal:d.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":o=o.map(m=>m.id===d.id?{...m,...d.label!==void 0?{label:d.label}:{},...d.weeklyGoal!==void 0?{weeklyGoal:d.weeklyGoal}:{}}:m),u.add("vaultHabits");break;case"delete_vault_habit":o=o.filter(m=>m.id!==d.id),u.add("vaultHabits");break;case"add_good_habit":a=[...a,{id:me(),label:d.label,area:d.area,...d.sub?{sub:d.sub}:{},xp:d.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":a=a.filter(m=>m.id!==d.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:me(),label:d.label,area:d.area,...d.sub?{sub:d.sub}:{},xp:d.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(m=>m.id!==d.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:me(),label:d.label,cost:d.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(m=>m.id!==d.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(o),u.has("goodHabits")&&n.setGoodHabits(a),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}var $0=["build me a study preset for exam month","my evenings are too packed \u2014 spread them out","add a gym routine at 6am for an hour","what am I neglecting?"];function np({onSaved:e,initialError:t,onCancel:n}){let[r,o]=(0,i.useState)(""),[a,l]=(0,i.useState)(!1),[s,u]=(0,i.useState)(t||null),d=(0,i.useRef)(null);(0,i.useEffect)(()=>{d.current?.focus()},[]);let m=async()=>{let v=r.trim();if(!(!v||a)){l(!0),u(null);try{let h=await B0(v);cp(v),B.success(),e(v,h)}catch(h){u(h.message||"Couldn't verify that key."),B.error()}finally{l(!1)}}};return i.default.createElement("div",{className:"task-list ai-scroll"},i.default.createElement("div",{className:"ai-gate"},i.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),i.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),i.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),i.default.createElement("ol",{className:"ai-gate-steps"},i.default.createElement("li",null,"open"," ",i.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),i.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),i.default.createElement("li",null,"copy it and paste it below")),i.default.createElement("input",{ref:d,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:v=>o(v.target.value),onKeyDown:v=>{v.key==="Enter"&&m()},disabled:a}),s&&i.default.createElement("div",{className:"ai-error ai-gate-error"},s),i.default.createElement("div",{className:"ai-gate-actions"},i.default.createElement("button",{className:"ai-apply",onClick:m,disabled:a||!r.trim()},a?"checking\u2026":"save key"),n&&i.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),i.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function j0({state:e,setters:t,showDataMsg:n}){let[r,o]=(0,i.useState)(()=>A0()),[a,l]=(0,i.useState)(!1),[s,u]=(0,i.useState)(null),[d,m]=(0,i.useState)(""),[v,h]=(0,i.useState)(!1),[g,k]=(0,i.useState)(null),[y,b]=(0,i.useState)(null),[p,c]=(0,i.useState)(()=>new Set),f=(0,i.useRef)(null),x=(0,i.useRef)(0),[N,S]=(0,i.useState)(0);(0,i.useEffect)(()=>{if(!v){S(0);return}let w=Date.now(),D=setInterval(()=>S((Date.now()-w)/1e3),100);return()=>clearInterval(D)},[v]);let E=async w=>{let D=(w??d).trim();if(!D||v)return;let M=Date.now()-x.current;if(M<3e3){k(`Hold on a moment \u2014 wait ${Math.ceil((3e3-M)/1e3)}s before asking again.`);return}x.current=Date.now(),h(!0),k(null),b(null),c(new Set),B.click();try{let L=await F0(D,{routines:e.routines,vaultHabits:e.vaultHabits,goodHabits:e.goodHabits,badHabits:e.badHabits,rewards:e.rewards,totalXP:e.totalXP},r);b(L),L.actions.length&&B.success()}catch(L){L instanceof bi?(cp(""),o(""),u(L.message)):k(L.message||"Something went wrong."),B.error()}finally{h(!1)}},z=w=>{c(D=>{let M=new Set(D);return M.has(w)?M.delete(w):M.add(w),M})},$=y?y.actions.filter((w,D)=>!p.has(D)):[],A=()=>{$.length&&(O0($,e,t),B.success(),n("success",`Applied ${$.length} change${$.length===1?"":"s"}`),b(null),m(""),c(new Set))},I=()=>{B.whoosh(),b(null),c(new Set)},F=$.reduce((w,D)=>{let M=tp(D,e).kind;return w[M]=(w[M]||0)+1,w},{});return r?a?i.default.createElement(np,{onCancel:()=>l(!1),onSaved:(w,D)=>{o(w),l(!1),n("success",D||"AI key updated")}}):i.default.createElement("div",{className:"task-list ai-scroll"},i.default.createElement("div",{className:"ai-intro"},i.default.createElement("div",{className:"ai-intro-row"},i.default.createElement("div",{className:"ai-intro-title"},"ask anything"),i.default.createElement("button",{className:"ai-key-btn",onClick:()=>l(!0),title:`Key ${I0(r)} \u2014 tap to change`},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},i.default.createElement("circle",{cx:"8",cy:"15",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),i.default.createElement("path",{d:"M10.85 12.15L19 4M17 6l2 2M14 9l2 2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),i.default.createElement("span",null,"key"))),i.default.createElement("div",{className:"ai-intro-sub"},"it can add, edit or remove routines, vault habits, quests and rewards \u2014 nothing changes until you approve it.")),i.default.createElement("div",{className:"ai-composer"},i.default.createElement("textarea",{ref:f,className:"ai-input",rows:3,placeholder:"e.g. add a 30 min reading routine before bed",value:d,onChange:w=>m(w.target.value),onKeyDown:w=>{w.key==="Enter"&&(w.metaKey||w.ctrlKey)&&(w.preventDefault(),E())},disabled:v}),i.default.createElement("button",{className:"ai-send",onClick:()=>E(),disabled:v||!d.trim()},v?"thinking\u2026":"ask")),!y&&!v&&i.default.createElement("div",{className:"ai-chips"},$0.map(w=>i.default.createElement("button",{key:w,className:"ai-chip",onClick:()=>{m(w),E(w)}},w))),v&&i.default.createElement("div",{className:"ai-thinking"},i.default.createElement("div",{className:"ai-dots"},i.default.createElement("span",{className:"ai-dot"}),i.default.createElement("span",{className:"ai-dot"}),i.default.createElement("span",{className:"ai-dot"})),i.default.createElement("div",{className:"ai-elapsed"},N<1?"thinking\u2026":`thinking\u2026 ${N.toFixed(1)}s`,N>12&&i.default.createElement("span",{className:"ai-slow"}," \xB7 taking longer than usual"))),g&&i.default.createElement("div",{className:"ai-error"},g),y&&i.default.createElement("div",{className:"ai-result"},y.reply&&i.default.createElement("div",{className:"ai-reply"},y.reply),y.actions.length===0?i.default.createElement("div",{className:"ai-noop"},"no changes proposed"):i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"ai-diff-head"},i.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),i.default.createElement("span",{className:"ai-diff-counts"},F.add?i.default.createElement("span",{className:"c-add"},"+",F.add):null,F.edit?i.default.createElement("span",{className:"c-edit"},"~",F.edit):null,F.remove?i.default.createElement("span",{className:"c-remove"},"\u2212",F.remove):null)),i.default.createElement("div",{className:"ai-diff"},y.actions.map((w,D)=>{let M=tp(w,e),L=p.has(D);return i.default.createElement("button",{key:D,className:`ai-diff-row ${M.kind} ${L?"skipped":""}`,onClick:()=>z(D),title:L?"click to include":"click to skip"},i.default.createElement("span",{className:"ai-sign"},M.kind==="add"?"+":M.kind==="remove"?"\u2212":"~"),i.default.createElement("span",{className:"ai-surface"},M.surface),i.default.createElement("span",{className:"ai-diff-text"},M.text),i.default.createElement("span",{className:"ai-skip-mark"},L?"skipped":""))})),i.default.createElement("div",{className:"ai-actions"},i.default.createElement("button",{className:"ai-apply",onClick:A,disabled:!$.length},"apply ",$.length||""),i.default.createElement("button",{className:"ai-discard",onClick:I},"discard")),i.default.createElement("div",{className:"ai-hint"},"tap any row to skip it")))):i.default.createElement(np,{initialError:s,onSaved:(w,D)=>{o(w),u(null),n("success",D||"AI key saved")}})}function hn(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function U0(e){typeof e=="number"&&Number.isFinite(e)&&e>yi&&(yi=e)}function W0(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(o=>n(o?.id))}),t}function H0({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:o,goodHabits:a,rewards:l,setRewards:s,totalXP:u,setTab:d}){let m=Ql(),v=m.hour*60+m.minute,{sorted:h,currentId:g,nextId:k}=Yl(e,v),y=h.find(I=>I.id===g),b=h.find(I=>I.id===k),p=O(0),c=I=>{let F=!1;t(w=>w.map(D=>{if(D.id!==I)return D;let M=(D.history||[]).includes(p);F=!M;let L=M?D.history.filter(K=>K!==p):[...D.history||[],p];return{...D,history:L.slice(-60)}})),F?B.success():B.click()},f=(0,i.useMemo)(()=>{let I={high:0,mid:1,low:2};return[...n].filter(F=>!F.done).sort((F,w)=>I[F.priority]-I[w.priority])},[n]),x=I=>{r(F=>F.map(w=>w.id===I?{...w,done:!w.done}:w)),B.success()},N=(0,i.useMemo)(()=>l.filter(I=>u>=I.cost),[l,u]),S=I=>{s(F=>F.map(w=>w.id===I?{...w,claimed:[...w.claimed||[],p]}:w)),B.success()},E=(0,i.useMemo)(()=>{let I={},F=w=>{(w||[]).forEach(D=>{I[D]=(I[D]||0)+1})};return e.forEach(w=>F(w.history)),o.forEach(w=>F(w.history)),a.forEach(w=>F(w.history)),I},[e,o,a]),z=y||b,$=!!y,A=z?(z.history||[]).includes(p):!1;return i.default.createElement("div",{className:"task-list today-view"},i.default.createElement("div",{className:"filters today-section-header"},i.default.createElement("span",null,$?"HAPPENING NOW":"NEXT UP")),z?i.default.createElement("div",{className:"today-card"},i.default.createElement("div",{className:"today-card-row"},i.default.createElement("span",{className:"today-card-time"},Nt(Qe(z.time))),i.default.createElement("span",{className:"today-card-label"},z.label)),i.default.createElement("div",{className:"today-card-sub"},$?`in progress \xB7 ${St(z.duration)}`:`in ${Math.max(0,Qe(z.time)-v)}m \xB7 ${St(z.duration)}`),i.default.createElement("button",{className:`today-mark-btn ${A?"done":""}`,onClick:()=>c(z.id)},A?"\u2713 completed today":"mark complete")):i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"no routines set up yet")),i.default.createElement("div",{className:"filters today-section-header"},i.default.createElement("span",null,"ACTIVITY")),i.default.createElement(Ym,{counts:E,weeksBack:12}),i.default.createElement("div",{className:"filters today-section-header"},i.default.createElement("span",null,"OPEN TASKS"),f.length>0&&i.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),f.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):i.default.createElement("div",{className:"today-list"},f.slice(0,5).map((I,F)=>i.default.createElement("div",{key:I.id,className:"today-task-row",style:{animationDelay:`${F*35}ms`}},i.default.createElement("button",{className:"today-task-check",onClick:()=>x(I.id),"aria-label":"Complete task"}),i.default.createElement("span",{className:"today-task-text"},I.text),i.default.createElement("span",{className:`today-prio-dot ${I.priority}`}))),f.length>5&&i.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",f.length-5," more")),i.default.createElement("div",{className:"filters today-section-header"},i.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),i.default.createElement("span",{className:"today-xp-total"},i.default.createElement(bt,{value:u})," XP")),N.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):i.default.createElement("div",{className:"today-list"},N.map((I,F)=>i.default.createElement("div",{key:I.id,className:"today-task-row",style:{animationDelay:`${F*35}ms`}},i.default.createElement("span",{className:"today-task-text"},I.label),i.default.createElement("span",{className:"today-reward-cost"},I.cost," XP"),i.default.createElement("button",{className:"today-claim-btn",onClick:()=>S(I.id)},"claim")))))}function V0(){let[e,t]=(0,i.useState)("today"),[n,r]=Gm(),o=T=>{T!==e&&B.whoosh(),t(T)},[a,l]=(0,i.useState)(()=>hn(Kc,E0)),[s,u]=(0,i.useState)(()=>hn(Xc,e0)),[d,m]=(0,i.useState)(()=>hn(Gc,a0)),[v,h]=(0,i.useState)(()=>hn(qc,l0)),[g,k]=(0,i.useState)(()=>hn(Qc,y0)),[y,b]=(0,i.useState)(()=>hn(Yc,x0)),[p,c]=(0,i.useState)(()=>hn(Zc,k0)),f=(0,i.useMemo)(()=>sp(g,y,p),[g,y,p]),x=(0,i.useMemo)(()=>up(f).level,[f]),N=Hm(x),[S,E]=(0,i.useState)(""),[z,$]=(0,i.useState)("mid"),[A,I]=(0,i.useState)("all"),F=(0,i.useRef)(null),w=(0,i.useRef)(null),[D,M]=(0,i.useState)(null),L=C0(),[K,xe]=(0,i.useState)(()=>localStorage.getItem(Jl)==="1"),[H,oe]=(0,i.useState)(!1),[ke,we]=(0,i.useState)(!1);(0,i.useEffect)(()=>{K&&ep(s)},[s,K]);let Yt=async()=>{if(!H){oe(!0);try{K?(await D0(),localStorage.setItem(Jl,"0"),xe(!1),he("success","Notifications turned off")):(await L0(),await ep(s),localStorage.setItem(Jl,"1"),xe(!0),he("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(T){he("error",T.message||"Couldn't set up notifications")}finally{oe(!1)}}},he=(T,U)=>{M({type:T,text:U})};(0,i.useEffect)(()=>{if(!D)return;let T=setTimeout(()=>M(null),3200);return()=>clearTimeout(T)},[D]);let Et=()=>{try{let T={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:a,routines:s,vaultHabits:d,projects:v,goodHabits:g,badHabits:y,rewards:p}},U=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),de=URL.createObjectURL(U),ce=O(0),Be=document.createElement("a");Be.href=de,Be.download=`tasks-sh-backup-${ce}.json`,document.body.appendChild(Be),Be.click(),Be.remove(),URL.revokeObjectURL(de),he("ok","backup exported")}catch{he("err","export failed")}},_=()=>w.current?.click(),j=T=>{let U=T.target.files&&T.target.files[0];if(T.target.value="",!U)return;let de=new FileReader;de.onerror=()=>he("err","couldn't read that file"),de.onload=()=>{try{let ce=JSON.parse(String(de.result)),Be=ce&&typeof ce=="object"&&ce.data?ce.data:ce;if(!Be||typeof Be!="object")throw new Error("bad shape");let rs={tasks:l,routines:u,vaultHabits:m,projects:h,goodHabits:k,badHabits:b,rewards:c},Xr=0;for(let Ni of Object.keys(rs))Array.isArray(Be[Ni])&&(rs[Ni](Be[Ni]),Xr++);if(Xr===0){he("err","no recognizable data in that file");return}U0(W0(Be)),he("ok",`imported ${Xr} data set${Xr===1?"":"s"}`)}catch{he("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},de.readAsText(U)},q=Ql(),Z=q.hour*60+q.minute,{currentId:ae,sorted:Ct}=Yl(s,Z),[Mt,zt]=(0,i.useState)(null),Kr=(0,i.useRef)(void 0);(0,i.useEffect)(()=>{if(Kr.current===void 0){Kr.current=ae;return}if(ae!==Kr.current){let T=Ct.find(U=>U.id===ae);T&&zt({id:ae,label:T.label,time:T.time}),Kr.current=ae}},[ae,Ct]),(0,i.useEffect)(()=>{if(!Mt)return;let T=setTimeout(()=>zt(null),6e3);return()=>clearTimeout(T)},[Mt]),(0,i.useEffect)(()=>{try{localStorage.setItem(Kc,JSON.stringify(a))}catch{}},[a]),(0,i.useEffect)(()=>{try{localStorage.setItem(Xc,JSON.stringify(s))}catch{}},[s]),(0,i.useEffect)(()=>{try{localStorage.setItem(Gc,JSON.stringify(d))}catch{}},[d]),(0,i.useEffect)(()=>{try{localStorage.setItem(qc,JSON.stringify(v))}catch{}},[v]),(0,i.useEffect)(()=>{try{localStorage.setItem(Qc,JSON.stringify(g))}catch{}},[g]),(0,i.useEffect)(()=>{try{localStorage.setItem(Yc,JSON.stringify(y))}catch{}},[y]),(0,i.useEffect)(()=>{try{localStorage.setItem(Zc,JSON.stringify(p))}catch{}},[p]);let _t=(0,i.useMemo)(()=>{let T=a.length,U=a.filter(Be=>Be.done).length,de=T-U,ce=T===0?0:Math.round(U/T*100);return{total:T,done:U,pending:de,pct:ce}},[a]),es=(0,i.useMemo)(()=>{let T=a.filter(U=>!U.done);return xi.map(U=>({key:U.key,label:U.label,color:U.color,value:T.filter(de=>de.priority===U.key).length}))},[a]),ts=(0,i.useMemo)(()=>{let T=a;return A==="active"&&(T=T.filter(U=>!U.done)),A==="done"&&(T=T.filter(U=>U.done)),[...T].sort((U,de)=>{if(U.done!==de.done)return U.done?1:-1;let ce={high:0,mid:1,low:2};return ce[U.priority]-ce[de.priority]})},[a,A]),ns=()=>{let T=S.trim();T&&(l(U=>[...U,{id:me(),text:T,done:!1,priority:z,createdAt:Date.now()}]),E(""),F.current?.focus(),B.click())},pp=T=>{let U=!1;l(de=>de.map(ce=>ce.id!==T?ce:(U=!ce.done,{...ce,done:!ce.done}))),U?B.success():B.click()},fp=T=>{l(U=>U.filter(de=>de.id!==T)),B.delete()},mp=()=>{l(T=>T.filter(U=>!U.done)),B.whoosh()};return i.default.createElement("div",{className:"app-root","data-particle":N.theme.ambient.particle},i.default.createElement(Wm,{theme:N.theme,phase:N.phase,calm:N.calm}),ke&&i.default.createElement(_0,{ctl:N,level:x,totalXP:f,onClose:()=>we(!1)}),i.default.createElement("style",null,`
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
        .app-root::before {
          content: "";
          position: absolute;
          inset: -25%;
          z-index: -1;
          pointer-events: none;
          background: var(--blob1), var(--blob2), var(--blob3);
          animation: ambientDrift 96s ease-in-out infinite alternate;
          will-change: transform;
        }

        /* Second, slower layer on a different cycle length so the two never
           line up -- keeps the motion from feeling like a loop. */
        .app-root::after {
          content: "";
          position: absolute;
          inset: -25%;
          z-index: -1;
          pointer-events: none;
          background:
            radial-gradient(46% 40% at 78% 18%, rgba(139,156,247,0.042), transparent 72%),
            radial-gradient(40% 44% at 22% 82%, rgba(94,234,212,0.038), transparent 72%);
          animation: ambientDriftAlt 138s ease-in-out infinite alternate;
          will-change: transform, opacity;
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
          filter: blur(26px);
          transform: rotate(8deg);
          animation: raySweep calc(180s * var(--motion-scale)) ease-in-out infinite alternate;
        }

        @keyframes raySweep {
          0%   { transform: translateX(-12%) rotate(8deg); opacity: 0.55; }
          100% { transform: translateX(115%) rotate(8deg); opacity: 0.95; }
        }

        /* film grain: one tiny repeating SVG, no image request */
        .amb-grain {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: var(--grain-opacity, 0.018);
          mix-blend-mode: overlay;
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
      `),i.default.createElement("div",{className:"panel"},Mt&&i.default.createElement("div",{className:"quest-banner",onClick:()=>zt(null)},i.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),i.default.createElement("span",{className:"quest-banner-text"},i.default.createElement("b",null,"Now:")," ",Mt.label),i.default.createElement("button",{className:"quest-banner-close",onClick:T=>{T.stopPropagation(),zt(null)},"aria-label":"Dismiss"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},i.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),i.default.createElement("div",{className:"titlebar"},i.default.createElement("div",{className:"titlebar-left"},i.default.createElement("div",{className:"dots"},i.default.createElement("span",{className:"dot red"}),i.default.createElement("span",{className:"dot amber"}),i.default.createElement("span",{className:"dot green"})),i.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),i.default.createElement("div",{className:"titlebar-right"},i.default.createElement("input",{type:"file",accept:"application/json",ref:w,onChange:j,style:{display:"none"}}),i.default.createElement("button",{className:`titlebar-icon-btn ${K?"notify-on":""}`,onClick:Yt,disabled:H,"aria-label":K?"Turn off notifications":"Turn on notifications",title:K?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},K?i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),i.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),i.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),i.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{we(!0),B.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),i.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),i.default.createElement("button",{className:"titlebar-icon-btn",onClick:_,"aria-label":"Import backup",title:"Import backup"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("button",{className:"titlebar-icon-btn",onClick:Et,"aria-label":"Export backup",title:"Export backup"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},i.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),i.default.createElement("span",{className:"clock"},new Date(L).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),D&&i.default.createElement("div",{className:`data-toast ${D.type}`},D.text),i.default.createElement("div",{className:"tabs"},i.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>o("today")},"today"),i.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>o("tasks")},"tasks"),i.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>o("routines")},"routines"),i.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>o("vault")},"vault"),i.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>o("quest")},"quest"),i.default.createElement("button",{className:`tab-ai ${e==="ai"?"active":""}`,onClick:()=>o("ai")},"ai")),i.default.createElement("div",{key:e,className:"tab-content"},e==="today"?i.default.createElement(H0,{routines:s,setRoutines:u,tasks:a,setTasks:l,vaultHabits:d,goodHabits:g,rewards:p,setRewards:c,totalXP:f,setTab:o}):e==="tasks"?i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"stats-bar stats-bar-viz"},i.default.createElement(ql,{pct:_t.pct,size:64,stroke:5.5,label:`${_t.pct}%`}),i.default.createElement("div",{className:"stats-row-viz"},i.default.createElement("span",null,i.default.createElement("b",null,i.default.createElement(bt,{value:_t.total}))," total"),i.default.createElement("span",null,i.default.createElement("b",null,i.default.createElement(bt,{value:_t.pending}))," pending"),i.default.createElement("span",null,i.default.createElement("b",null,i.default.createElement(bt,{value:_t.done}))," done"))),_t.pending>0&&i.default.createElement("div",{className:"donut-card"},i.default.createElement(ap,{size:96,stroke:14,centerLabel:_t.pending,centerSublabel:"open",segments:es.map(T=>({key:T.key,value:T.value,color:T.color}))}),i.default.createElement("div",{className:"donut-legend"},es.map(T=>i.default.createElement("div",{className:"donut-legend-row",key:T.key},i.default.createElement("span",{className:"donut-legend-dot",style:{background:T.color}}),i.default.createElement("span",null,T.label," priority"),i.default.createElement("span",{className:"donut-legend-val"},T.value))))),i.default.createElement("div",{className:"composer"},i.default.createElement("input",{ref:F,type:"text",placeholder:"add a task, press enter...",value:S,onChange:T=>E(T.target.value),onKeyDown:T=>T.key==="Enter"&&ns()}),i.default.createElement("div",{className:"prio-select"},xi.map(T=>i.default.createElement("button",{key:T.key,className:z===T.key?"active":"",style:{"--pc":T.color},onClick:()=>$(T.key)},T.label))),i.default.createElement("button",{className:"add-btn",onClick:ns,"aria-label":"Add task"},i.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},i.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),i.default.createElement("div",{className:"filters"},["all","active","done"].map(T=>i.default.createElement("button",{key:T,className:A===T?"active":"",onClick:()=>I(T)},T)),i.default.createElement("span",{className:"spacer"}),_t.done>0&&i.default.createElement("button",{className:"clear-btn",onClick:mp},"clear done")),i.default.createElement("div",{className:"task-list"},ts.length===0?i.default.createElement("div",{className:"empty-state"},i.default.createElement("div",{className:"glyph"},"{ }"),i.default.createElement("div",{className:"msg"},A==="done"?"nothing completed yet":"queue's empty \u2014 add something")):ts.map((T,U)=>i.default.createElement(z0,{key:T.id,task:T,now:L,index:U,onToggle:pp,onDelete:fp})))):e==="routines"?i.default.createElement(n0,{routines:s,setRoutines:u}):e==="vault"?i.default.createElement(m0,{vaultHabits:d,setVaultHabits:m,projects:v,setProjects:h}):e==="quest"?i.default.createElement(S0,{goodHabits:g,setGoodHabits:k,badHabits:y,setBadHabits:b,rewards:p,setRewards:c}):i.default.createElement(j0,{state:{routines:s,vaultHabits:d,goodHabits:g,badHabits:y,rewards:p,totalXP:f},setters:{setRoutines:u,setVaultHabits:m,setGoodHabits:k,setBadHabits:b,setRewards:c},showDataMsg:he}))))}var J0=rp.default.createRoot(document.getElementById("root"));J0.render(i.default.createElement(V0));})();
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
