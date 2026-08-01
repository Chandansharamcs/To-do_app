(()=>{var Tp=Object.create;var ms=Object.defineProperty;var Pp=Object.getOwnPropertyDescriptor;var Dp=Object.getOwnPropertyNames;var Lp=Object.getPrototypeOf,Ap=Object.prototype.hasOwnProperty;var en=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Fp=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Dp(t))!Ap.call(e,o)&&o!==n&&ms(e,o,{get:()=>t[o],enumerable:!(r=Pp(t,o))||r.enumerable});return e};var hs=(e,t,n)=>(n=e!=null?Tp(Lp(e)):{},Fp(t||!e||!e.__esModule?ms(n,"default",{value:e,enumerable:!0}):n,e));var Ms=en(W=>{"use strict";var nr=Symbol.for("react.element"),Bp=Symbol.for("react.portal"),Ip=Symbol.for("react.fragment"),$p=Symbol.for("react.strict_mode"),Op=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Up=Symbol.for("react.context"),Wp=Symbol.for("react.forward_ref"),Hp=Symbol.for("react.suspense"),Vp=Symbol.for("react.memo"),Jp=Symbol.for("react.lazy"),gs=Symbol.iterator;function Kp(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var xs={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ks=Object.assign,ws={};function bn(e,t,n){this.props=e,this.context=t,this.refs=ws,this.updater=n||xs}bn.prototype.isReactComponent={};bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function bs(){}bs.prototype=bn.prototype;function Da(e,t,n){this.props=e,this.context=t,this.refs=ws,this.updater=n||xs}var La=Da.prototype=new bs;La.constructor=Da;ks(La,bn.prototype);La.isPureReactComponent=!0;var vs=Array.isArray,Ns=Object.prototype.hasOwnProperty,Aa={current:null},Ss={key:!0,ref:!0,__self:!0,__source:!0};function Es(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ns.call(t,r)&&!Ss.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:nr,type:e,key:i,ref:l,props:o,_owner:Aa.current}}function qp(e,t){return{$$typeof:nr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===nr}function Xp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ys=/\/+/g;function Pa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Xp(""+e.key):t.toString(36)}function no(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case nr:case Bp:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Pa(l,0):r,vs(o)?(n="",e!=null&&(n=e.replace(ys,"$&/")+"/"),no(o,t,n,"",function(c){return c})):o!=null&&(Fa(o)&&(o=qp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ys,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",vs(e))for(var s=0;s<e.length;s++){i=e[s];var u=r+Pa(i,s);l+=no(i,t,n,u,o)}else if(u=Kp(e),typeof u=="function")for(e=u.call(e),s=0;!(i=e.next()).done;)i=i.value,u=r+Pa(i,s++),l+=no(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function to(e,t,n){if(e==null)return e;var r=[],o=0;return no(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Gp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Me={current:null},ro={transition:null},Yp={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:ro,ReactCurrentOwner:Aa};function Cs(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:to,forEach:function(e,t,n){to(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!Fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=bn;W.Fragment=Ip;W.Profiler=Op;W.PureComponent=Da;W.StrictMode=$p;W.Suspense=Hp;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;W.act=Cs;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ks({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=Aa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)Ns.call(t,u)&&!Ss.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&s!==void 0?s[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:nr,type:e.type,key:o,ref:i,props:r,_owner:l}};W.createContext=function(e){return e={$$typeof:Up,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jp,_context:e},e.Consumer=e};W.createElement=Es;W.createFactory=function(e){var t=Es.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:Wp,render:e}};W.isValidElement=Fa;W.lazy=function(e){return{$$typeof:Jp,_payload:{_status:-1,_result:e},_init:Gp}};W.memo=function(e,t){return{$$typeof:Vp,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=ro.transition;ro.transition={};try{e()}finally{ro.transition=t}};W.unstable_act=Cs;W.useCallback=function(e,t){return Me.current.useCallback(e,t)};W.useContext=function(e){return Me.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Me.current.useDeferredValue(e)};W.useEffect=function(e,t){return Me.current.useEffect(e,t)};W.useId=function(){return Me.current.useId()};W.useImperativeHandle=function(e,t,n){return Me.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Me.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Me.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Me.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Me.current.useReducer(e,t,n)};W.useRef=function(e){return Me.current.useRef(e)};W.useState=function(e){return Me.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Me.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Me.current.useTransition()};W.version="18.3.1"});var Ba=en((vh,zs)=>{"use strict";zs.exports=Ms()});var $s=en(q=>{"use strict";function ja(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<oo(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Qe(e){return e.length===0?null:e[0]}function io(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,i=o>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>oo(s,n))u<o&&0>oo(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else if(u<o&&0>oo(c,n))e[r]=c,e[u]=n,r=u;else break e}}return t}function oo(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(_s=performance,q.unstable_now=function(){return _s.now()}):(Ia=Date,Ts=Ia.now(),q.unstable_now=function(){return Ia.now()-Ts});var _s,Ia,Ts,at=[],Pt=[],Qp=1,He=null,ke=3,lo=!1,tn=!1,or=!1,Ls=typeof setTimeout=="function"?setTimeout:null,As=typeof clearTimeout=="function"?clearTimeout:null,Ps=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Ua(e){for(var t=Qe(Pt);t!==null;){if(t.callback===null)io(Pt);else if(t.startTime<=e)io(Pt),t.sortIndex=t.expirationTime,ja(at,t);else break;t=Qe(Pt)}}function Wa(e){if(or=!1,Ua(e),!tn)if(Qe(at)!==null)tn=!0,Va(Ha);else{var t=Qe(Pt);t!==null&&Ja(Wa,t.startTime-e)}}function Ha(e,t){tn=!1,or&&(or=!1,As(ar),ar=-1),lo=!0;var n=ke;try{for(Ua(t),He=Qe(at);He!==null&&(!(He.expirationTime>t)||e&&!Is());){var r=He.callback;if(typeof r=="function"){He.callback=null,ke=He.priorityLevel;var o=r(He.expirationTime<=t);t=q.unstable_now(),typeof o=="function"?He.callback=o:He===Qe(at)&&io(at),Ua(t)}else io(at);He=Qe(at)}if(He!==null)var i=!0;else{var l=Qe(Pt);l!==null&&Ja(Wa,l.startTime-t),i=!1}return i}finally{He=null,ke=n,lo=!1}}var so=!1,ao=null,ar=-1,Fs=5,Bs=-1;function Is(){return!(q.unstable_now()-Bs<Fs)}function $a(){if(ao!==null){var e=q.unstable_now();Bs=e;var t=!0;try{t=ao(!0,e)}finally{t?rr():(so=!1,ao=null)}}else so=!1}var rr;typeof Ps=="function"?rr=function(){Ps($a)}:typeof MessageChannel<"u"?(Oa=new MessageChannel,Ds=Oa.port2,Oa.port1.onmessage=$a,rr=function(){Ds.postMessage(null)}):rr=function(){Ls($a,0)};var Oa,Ds;function Va(e){ao=e,so||(so=!0,rr())}function Ja(e,t){ar=Ls(function(){e(q.unstable_now())},t)}q.unstable_IdlePriority=5;q.unstable_ImmediatePriority=1;q.unstable_LowPriority=4;q.unstable_NormalPriority=3;q.unstable_Profiling=null;q.unstable_UserBlockingPriority=2;q.unstable_cancelCallback=function(e){e.callback=null};q.unstable_continueExecution=function(){tn||lo||(tn=!0,Va(Ha))};q.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Fs=0<e?Math.floor(1e3/e):5};q.unstable_getCurrentPriorityLevel=function(){return ke};q.unstable_getFirstCallbackNode=function(){return Qe(at)};q.unstable_next=function(e){switch(ke){case 1:case 2:case 3:var t=3;break;default:t=ke}var n=ke;ke=t;try{return e()}finally{ke=n}};q.unstable_pauseExecution=function(){};q.unstable_requestPaint=function(){};q.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ke;ke=e;try{return t()}finally{ke=n}};q.unstable_scheduleCallback=function(e,t,n){var r=q.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:Qp++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,ja(Pt,e),Qe(at)===null&&e===Qe(Pt)&&(or?(As(ar),ar=-1):or=!0,Ja(Wa,n-r))):(e.sortIndex=o,ja(at,e),tn||lo||(tn=!0,Va(Ha))),e};q.unstable_shouldYield=Is;q.unstable_wrapCallback=function(e){var t=ke;return function(){var n=ke;ke=t;try{return e.apply(this,arguments)}finally{ke=n}}}});var js=en((xh,Os)=>{"use strict";Os.exports=$s()});var Vd=en(We=>{"use strict";var Zp=Ba(),je=js();function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qu=new Set,Mr={};function hn(e,t){Hn(e,t),Hn(e+"Capture",t)}function Hn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)qu.add(t[e])}var vt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mi=Object.prototype.hasOwnProperty,Rp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Us={},Ws={};function ef(e){return mi.call(Ws,e)?!0:mi.call(Us,e)?!1:Rp.test(e)?Ws[e]=!0:(Us[e]=!0,!1)}function tf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function nf(e,t,n,r){if(t===null||typeof t>"u"||tf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,ll);xe[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,ll);xe[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,ll);xe[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function sl(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(nf(t,n,o,r)&&(n=null),r||o===null?ef(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var wt=Zp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,uo=Symbol.for("react.element"),En=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),ul=Symbol.for("react.strict_mode"),hi=Symbol.for("react.profiler"),Xu=Symbol.for("react.provider"),Gu=Symbol.for("react.context"),cl=Symbol.for("react.forward_ref"),gi=Symbol.for("react.suspense"),vi=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),Lt=Symbol.for("react.lazy"),Yu=Symbol.for("react.offscreen"),Hs=Symbol.iterator;function ir(e){return e===null||typeof e!="object"?null:(e=Hs&&e[Hs]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Ka;function mr(e){if(Ka===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ka=t&&t[1]||""}return`
`+Ka+e}var qa=!1;function Xa(e,t){if(!e||qa)return"";qa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=s);break}}}finally{qa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?mr(e):""}function rf(e){switch(e.tag){case 5:return mr(e.type);case 16:return mr("Lazy");case 13:return mr("Suspense");case 19:return mr("SuspenseList");case 0:case 2:case 15:return e=Xa(e.type,!1),e;case 11:return e=Xa(e.type.render,!1),e;case 1:return e=Xa(e.type,!0),e;default:return""}}function yi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case En:return"Portal";case hi:return"Profiler";case ul:return"StrictMode";case gi:return"Suspense";case vi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gu:return(e.displayName||"Context")+".Consumer";case Xu:return(e._context.displayName||"Context")+".Provider";case cl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dl:return t=e.displayName||null,t!==null?t:yi(e.type)||"Memo";case Lt:t=e._payload,e=e._init;try{return yi(e(t))}catch{}}return null}function of(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yi(t);case 8:return t===ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function af(e){var t=Qu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function co(e){e._valueTracker||(e._valueTracker=af(e))}function Zu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xi(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ru(e,t){t=t.checked,t!=null&&sl(e,"checked",t,!1)}function ki(e,t){Ru(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wi(e,t.type,n):t.hasOwnProperty("defaultValue")&&wi(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wi(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var hr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ks(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(hr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function ec(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function qs(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ni(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var po,nc=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=po.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function zr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var yr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lf=["Webkit","ms","Moz","O"];Object.keys(yr).forEach(function(e){lf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yr[t]=yr[e]})});function rc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||yr.hasOwnProperty(e)&&yr[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=rc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var sf=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Si(e,t){if(t){if(sf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Ei(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function pl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mi=null,$n=null,On=null;function Xs(e){if(e=Kr(e)){if(typeof Mi!="function")throw Error(C(280));var t=e.stateNode;t&&(t=fa(t),Mi(e.stateNode,e.type,t))}}function ac(e){$n?On?On.push(e):On=[e]:$n=e}function ic(){if($n){var e=$n,t=On;if(On=$n=null,Xs(e),t)for(e=0;e<t.length;e++)Xs(t[e])}}function lc(e,t){return e(t)}function sc(){}var Ga=!1;function uc(e,t,n){if(Ga)return e(t,n);Ga=!0;try{return lc(e,t,n)}finally{Ga=!1,($n!==null||On!==null)&&(sc(),ic())}}function _r(e,t){var n=e.stateNode;if(n===null)return null;var r=fa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var zi=!1;if(vt)try{Nn={},Object.defineProperty(Nn,"passive",{get:function(){zi=!0}}),window.addEventListener("test",Nn,Nn),window.removeEventListener("test",Nn,Nn)}catch{zi=!1}var Nn;function uf(e,t,n,r,o,i,l,s,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(p){this.onError(p)}}var xr=!1,jo=null,Uo=!1,_i=null,cf={onError:function(e){xr=!0,jo=e}};function df(e,t,n,r,o,i,l,s,u){xr=!1,jo=null,uf.apply(cf,arguments)}function pf(e,t,n,r,o,i,l,s,u){if(df.apply(this,arguments),xr){if(xr){var c=jo;xr=!1,jo=null}else throw Error(C(198));Uo||(Uo=!0,_i=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Gs(e){if(gn(e)!==e)throw Error(C(188))}function ff(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Gs(o),e;if(i===r)return Gs(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function dc(e){return e=ff(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pc(e);if(t!==null)return t;e=e.sibling}return null}var fc=je.unstable_scheduleCallback,Ys=je.unstable_cancelCallback,mf=je.unstable_shouldYield,hf=je.unstable_requestPaint,ae=je.unstable_now,gf=je.unstable_getCurrentPriorityLevel,fl=je.unstable_ImmediatePriority,mc=je.unstable_UserBlockingPriority,Wo=je.unstable_NormalPriority,vf=je.unstable_LowPriority,hc=je.unstable_IdlePriority,ua=null,ut=null;function yf(e){if(ut&&typeof ut.onCommitFiberRoot=="function")try{ut.onCommitFiberRoot(ua,e,void 0,(e.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:wf,xf=Math.log,kf=Math.LN2;function wf(e){return e>>>=0,e===0?32:31-(xf(e)/kf|0)|0}var fo=64,mo=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=gr(s):(i&=l,i!==0&&(r=gr(i)))}else l=n&~o,l!==0?r=gr(l):i!==0&&(r=gr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-nt(t),o=1<<n,r|=e[n],t&=~o;return r}function bf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-nt(i),s=1<<l,u=o[l];u===-1?((s&n)===0||(s&r)!==0)&&(o[l]=bf(s,t)):u<=t&&(e.expiredLanes|=s),i&=~s}}function Ti(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gc(){var e=fo;return fo<<=1,(fo&4194240)===0&&(fo=64),e}function Ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-nt(t),e[t]=n}function Sf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-nt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ml(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var K=0;function vc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var yc,hl,xc,kc,wc,Pi=!1,ho=[],Ot=null,jt=null,Ut=null,Tr=new Map,Pr=new Map,Ft=[],Ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qs(e,t){switch(e){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Tr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function lr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Kr(t),t!==null&&hl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Cf(e,t,n,r,o){switch(t){case"focusin":return Ot=lr(Ot,e,t,n,r,o),!0;case"dragenter":return jt=lr(jt,e,t,n,r,o),!0;case"mouseover":return Ut=lr(Ut,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Tr.set(i,lr(Tr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Pr.set(i,lr(Pr.get(i)||null,e,t,n,r,o)),!0}return!1}function bc(e){var t=on(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=cc(n),t!==null){e.blockedOn=t,wc(e.priority,function(){xc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Di(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ci=r,n.target.dispatchEvent(r),Ci=null}else return t=Kr(n),t!==null&&hl(t),e.blockedOn=n,!1;t.shift()}return!0}function Zs(e,t,n){_o(e)&&n.delete(t)}function Mf(){Pi=!1,Ot!==null&&_o(Ot)&&(Ot=null),jt!==null&&_o(jt)&&(jt=null),Ut!==null&&_o(Ut)&&(Ut=null),Tr.forEach(Zs),Pr.forEach(Zs)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,Pi||(Pi=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Mf)))}function Dr(e){function t(o){return sr(o,e)}if(0<ho.length){sr(ho[0],e);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ot!==null&&sr(Ot,e),jt!==null&&sr(jt,e),Ut!==null&&sr(Ut,e),Tr.forEach(t),Pr.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)bc(n),n.blockedOn===null&&Ft.shift()}var jn=wt.ReactCurrentBatchConfig,Vo=!0;function zf(e,t,n,r){var o=K,i=jn.transition;jn.transition=null;try{K=1,gl(e,t,n,r)}finally{K=o,jn.transition=i}}function _f(e,t,n,r){var o=K,i=jn.transition;jn.transition=null;try{K=4,gl(e,t,n,r)}finally{K=o,jn.transition=i}}function gl(e,t,n,r){if(Vo){var o=Di(e,t,n,r);if(o===null)ri(e,t,r,Jo,n),Qs(e,r);else if(Cf(o,e,t,n,r))r.stopPropagation();else if(Qs(e,r),t&4&&-1<Ef.indexOf(e)){for(;o!==null;){var i=Kr(o);if(i!==null&&yc(i),i=Di(e,t,n,r),i===null&&ri(e,t,r,Jo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else ri(e,t,r,null,n)}}var Jo=null;function Di(e,t,n,r){if(Jo=null,e=pl(r),e=on(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Jo=e,null}function Nc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gf()){case fl:return 1;case mc:return 4;case Wo:case vf:return 16;case hc:return 536870912;default:return 16}default:return 16}}var It=null,vl=null,To=null;function Sc(){if(To)return To;var e,t=vl,n=t.length,r,o="value"in It?It.value:It.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return To=o.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function go(){return!0}function Rs(){return!1}function Ue(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?go:Rs,this.isPropagationStopped=Rs,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=Ue(Yn),Jr=te({},Yn,{view:0,detail:0}),Tf=Ue(Jr),Qa,Za,ur,ca=te({},Jr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ur&&(ur&&e.type==="mousemove"?(Qa=e.screenX-ur.screenX,Za=e.screenY-ur.screenY):Za=Qa=0,ur=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Za}}),eu=Ue(ca),Pf=te({},ca,{dataTransfer:0}),Df=Ue(Pf),Lf=te({},Jr,{relatedTarget:0}),Ra=Ue(Lf),Af=te({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=Ue(Af),Bf=te({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),If=Ue(Bf),$f=te({},Yn,{data:0}),tu=Ue($f),Of={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Uf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Uf[e])?!!t[e]:!1}function xl(){return Wf}var Hf=te({},Jr,{key:function(e){if(e.key){var t=Of[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xl,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vf=Ue(Hf),Jf=te({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nu=Ue(Jf),Kf=te({},Jr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xl}),qf=Ue(Kf),Xf=te({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gf=Ue(Xf),Yf=te({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qf=Ue(Yf),Zf=[9,13,27,32],kl=vt&&"CompositionEvent"in window,kr=null;vt&&"documentMode"in document&&(kr=document.documentMode);var Rf=vt&&"TextEvent"in window&&!kr,Ec=vt&&(!kl||kr&&8<kr&&11>=kr),ru=" ",ou=!1;function Cc(e,t){switch(e){case"keyup":return Zf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mn=!1;function em(e,t){switch(e){case"compositionend":return Mc(t);case"keypress":return t.which!==32?null:(ou=!0,ru);case"textInput":return e=t.data,e===ru&&ou?null:e;default:return null}}function tm(e,t){if(Mn)return e==="compositionend"||!kl&&Cc(e,t)?(e=Sc(),To=vl=It=null,Mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ec&&t.locale!=="ko"?null:t.data;default:return null}}var nm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function au(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nm[e.type]:t==="textarea"}function zc(e,t,n,r){ac(r),t=Ko(t,"onChange"),0<t.length&&(n=new yl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wr=null,Lr=null;function rm(e){Oc(e,0)}function da(e){var t=Tn(e);if(Zu(t))return e}function om(e,t){if(e==="change")return t}var _c=!1;vt&&(vt?(yo="oninput"in document,yo||(ei=document.createElement("div"),ei.setAttribute("oninput","return;"),yo=typeof ei.oninput=="function"),vo=yo):vo=!1,_c=vo&&(!document.documentMode||9<document.documentMode));var vo,yo,ei;function iu(){wr&&(wr.detachEvent("onpropertychange",Tc),Lr=wr=null)}function Tc(e){if(e.propertyName==="value"&&da(Lr)){var t=[];zc(t,Lr,e,pl(e)),uc(rm,t)}}function am(e,t,n){e==="focusin"?(iu(),wr=t,Lr=n,wr.attachEvent("onpropertychange",Tc)):e==="focusout"&&iu()}function im(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return da(Lr)}function lm(e,t){if(e==="click")return da(t)}function sm(e,t){if(e==="input"||e==="change")return da(t)}function um(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:um;function Ar(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!mi.call(t,o)||!ot(e[o],t[o]))return!1}return!0}function lu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function su(e,t){var n=lu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lu(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dc(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function wl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cm(e){var t=Dc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&wl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=su(n,i);var l=su(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dm=vt&&"documentMode"in document&&11>=document.documentMode,zn=null,Li=null,br=null,Ai=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ai||zn==null||zn!==Oo(r)||(r=zn,"selectionStart"in r&&wl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&Ar(br,r)||(br=r,r=Ko(Li,"onSelect"),0<r.length&&(t=new yl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var _n={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},ti={},Lc={};vt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete _n.animationend.animation,delete _n.animationiteration.animation,delete _n.animationstart.animation),"TransitionEvent"in window||delete _n.transitionend.transition);function pa(e){if(ti[e])return ti[e];if(!_n[e])return e;var t=_n[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Lc)return ti[e]=t[n];return e}var Ac=pa("animationend"),Fc=pa("animationiteration"),Bc=pa("animationstart"),Ic=pa("transitionend"),$c=new Map,cu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gt(e,t){$c.set(e,t),hn(t,[e])}for(ko=0;ko<cu.length;ko++)wo=cu[ko],du=wo.toLowerCase(),pu=wo[0].toUpperCase()+wo.slice(1),Gt(du,"on"+pu);var wo,du,pu,ko;Gt(Ac,"onAnimationEnd");Gt(Fc,"onAnimationIteration");Gt(Bc,"onAnimationStart");Gt("dblclick","onDoubleClick");Gt("focusin","onFocus");Gt("focusout","onBlur");Gt(Ic,"onTransitionEnd");Hn("onMouseEnter",["mouseout","mouseover"]);Hn("onMouseLeave",["mouseout","mouseover"]);Hn("onPointerEnter",["pointerout","pointerover"]);Hn("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pm=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function fu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,pf(r,t,void 0,e),e.currentTarget=null}function Oc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],u=s.instance,c=s.currentTarget;if(s=s.listener,u!==i&&o.isPropagationStopped())break e;fu(o,s,c),i=u}else for(l=0;l<r.length;l++){if(s=r[l],u=s.instance,c=s.currentTarget,s=s.listener,u!==i&&o.isPropagationStopped())break e;fu(o,s,c),i=u}}}if(Uo)throw e=_i,Uo=!1,_i=null,e}function Y(e,t){var n=t[Oi];n===void 0&&(n=t[Oi]=new Set);var r=e+"__bubble";n.has(r)||(jc(t,e,2,!1),n.add(r))}function ni(e,t,n){var r=0;t&&(r|=4),jc(n,e,r,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[bo]){e[bo]=!0,qu.forEach(function(n){n!=="selectionchange"&&(pm.has(n)||ni(n,!1,e),ni(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,ni("selectionchange",!1,t))}}function jc(e,t,n,r){switch(Nc(t)){case 1:var o=zf;break;case 4:o=_f;break;default:o=gl}n=o.bind(null,t,n,e),o=void 0,!zi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function ri(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;s!==null;){if(l=on(s),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}s=s.parentNode}}r=r.return}uc(function(){var c=i,p=pl(n),g=[];e:{var h=$c.get(e);if(h!==void 0){var v=yl,k=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":v=Vf;break;case"focusin":k="focus",v=Ra;break;case"focusout":k="blur",v=Ra;break;case"beforeblur":case"afterblur":v=Ra;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=eu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Df;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=qf;break;case Ac:case Fc:case Bc:v=Ff;break;case Ic:v=Gf;break;case"scroll":v=Tf;break;case"wheel":v=Qf;break;case"copy":case"cut":case"paste":v=If;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=nu}var y=(t&4)!==0,N=!y&&e==="scroll",f=y?h!==null?h+"Capture":null:h;y=[];for(var d=c,m;d!==null;){m=d;var x=m.stateNode;if(m.tag===5&&x!==null&&(m=x,f!==null&&(x=_r(d,f),x!=null&&y.push(Br(d,x,m)))),N)break;d=d.return}0<y.length&&(h=new v(h,k,null,n,p),g.push({event:h,listeners:y}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Ci&&(k=n.relatedTarget||n.fromElement)&&(on(k)||k[yt]))break e;if((v||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=c,k=k?on(k):null,k!==null&&(N=gn(k),k!==N||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=c),v!==k)){if(y=eu,x="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=nu,x="onPointerLeave",f="onPointerEnter",d="pointer"),N=v==null?h:Tn(v),m=k==null?h:Tn(k),h=new y(x,d+"leave",v,n,p),h.target=N,h.relatedTarget=m,x=null,on(p)===c&&(y=new y(f,d+"enter",k,n,p),y.target=m,y.relatedTarget=N,x=y),N=x,v&&k)t:{for(y=v,f=k,d=0,m=y;m;m=Sn(m))d++;for(m=0,x=f;x;x=Sn(x))m++;for(;0<d-m;)y=Sn(y),d--;for(;0<m-d;)f=Sn(f),m--;for(;d--;){if(y===f||f!==null&&y===f.alternate)break t;y=Sn(y),f=Sn(f)}y=null}else y=null;v!==null&&mu(g,h,v,y,!1),k!==null&&N!==null&&mu(g,N,k,y,!0)}}e:{if(h=c?Tn(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var w=om;else if(au(h))if(_c)w=sm;else{w=im;var b=am}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(w=lm);if(w&&(w=w(e,c))){zc(g,w,n,p);break e}b&&b(e,h,c),e==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&wi(h,"number",h.value)}switch(b=c?Tn(c):window,e){case"focusin":(au(b)||b.contentEditable==="true")&&(zn=b,Li=c,br=null);break;case"focusout":br=Li=zn=null;break;case"mousedown":Ai=!0;break;case"contextmenu":case"mouseup":case"dragend":Ai=!1,uu(g,n,p);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":uu(g,n,p)}var E;if(kl)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Mn?Cc(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(Ec&&n.locale!=="ko"&&(Mn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Mn&&(E=Sc()):(It=p,vl="value"in It?It.value:It.textContent,Mn=!0)),b=Ko(c,z),0<b.length&&(z=new tu(z,e,null,n,p),g.push({event:z,listeners:b}),E?z.data=E:(E=Mc(n),E!==null&&(z.data=E)))),(E=Rf?em(e,n):tm(e,n))&&(c=Ko(c,"onBeforeInput"),0<c.length&&(p=new tu("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:c}),p.data=E))}Oc(g,t)})}function Br(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ko(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=_r(e,n),i!=null&&r.unshift(Br(e,i,o)),i=_r(e,t),i!=null&&r.push(Br(e,i,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function mu(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,u=s.alternate,c=s.stateNode;if(u!==null&&u===r)break;s.tag===5&&c!==null&&(s=c,o?(u=_r(n,i),u!=null&&l.unshift(Br(n,u,s))):o||(u=_r(n,i),u!=null&&l.push(Br(n,u,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var fm=/\r\n?/g,mm=/\u0000|\uFFFD/g;function hu(e){return(typeof e=="string"?e:""+e).replace(fm,`
`).replace(mm,"")}function No(e,t,n){if(t=hu(t),hu(e)!==t&&n)throw Error(C(425))}function qo(){}var Fi=null,Bi=null;function Ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var $i=typeof setTimeout=="function"?setTimeout:void 0,hm=typeof clearTimeout=="function"?clearTimeout:void 0,gu=typeof Promise=="function"?Promise:void 0,gm=typeof queueMicrotask=="function"?queueMicrotask:typeof gu<"u"?function(e){return gu.resolve(null).then(e).catch(vm)}:$i;function vm(e){setTimeout(function(){throw e})}function oi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Dr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Dr(t)}function Wt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function vu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),st="__reactFiber$"+Qn,Ir="__reactProps$"+Qn,yt="__reactContainer$"+Qn,Oi="__reactEvents$"+Qn,ym="__reactListeners$"+Qn,xm="__reactHandles$"+Qn;function on(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=vu(e);e!==null;){if(n=e[st])return n;e=vu(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[st]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function fa(e){return e[Ir]||null}var ji=[],Pn=-1;function Yt(e){return{current:e}}function Q(e){0>Pn||(e.current=ji[Pn],ji[Pn]=null,Pn--)}function X(e,t){Pn++,ji[Pn]=e.current,e.current=t}var Xt={},Se=Yt(Xt),Le=Yt(!1),cn=Xt;function Vn(e,t){var n=e.type.contextTypes;if(!n)return Xt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ae(e){return e=e.childContextTypes,e!=null}function Xo(){Q(Le),Q(Se)}function yu(e,t,n){if(Se.current!==Xt)throw Error(C(168));X(Se,t),X(Le,n)}function Uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,of(e)||"Unknown",o));return te({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Xt,cn=Se.current,X(Se,e),X(Le,Le.current),!0}function xu(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Uc(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,Q(Le),Q(Se),X(Se,e)):Q(Le),X(Le,n)}var ft=null,ma=!1,ai=!1;function Wc(e){ft===null?ft=[e]:ft.push(e)}function km(e){ma=!0,Wc(e)}function Qt(){if(!ai&&ft!==null){ai=!0;var e=0,t=K;try{var n=ft;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ft=null,ma=!1}catch(o){throw ft!==null&&(ft=ft.slice(e+1)),fc(fl,Qt),o}finally{K=t,ai=!1}}return null}var Dn=[],Ln=0,Yo=null,Qo=0,Ve=[],Je=0,dn=null,mt=1,ht="";function nn(e,t){Dn[Ln++]=Qo,Dn[Ln++]=Yo,Yo=e,Qo=t}function Hc(e,t,n){Ve[Je++]=mt,Ve[Je++]=ht,Ve[Je++]=dn,dn=e;var r=mt;e=ht;var o=32-nt(r)-1;r&=~(1<<o),n+=1;var i=32-nt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,mt=1<<32-nt(t)+o|n<<o|r,ht=i+e}else mt=1<<i|n<<o|r,ht=e}function bl(e){e.return!==null&&(nn(e,1),Hc(e,1,0))}function Nl(e){for(;e===Yo;)Yo=Dn[--Ln],Dn[Ln]=null,Qo=Dn[--Ln],Dn[Ln]=null;for(;e===dn;)dn=Ve[--Je],Ve[Je]=null,ht=Ve[--Je],Ve[Je]=null,mt=Ve[--Je],Ve[Je]=null}var Oe=null,$e=null,Z=!1,tt=null;function Vc(e,t){var n=Ke(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ku(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Oe=e,$e=Wt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Oe=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:mt,overflow:ht}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ke(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oe=e,$e=null,!0):!1;default:return!1}}function Ui(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wi(e){if(Z){var t=$e;if(t){var n=t;if(!ku(e,t)){if(Ui(e))throw Error(C(418));t=Wt(n.nextSibling);var r=Oe;t&&ku(e,t)?Vc(r,n):(e.flags=e.flags&-4097|2,Z=!1,Oe=e)}}else{if(Ui(e))throw Error(C(418));e.flags=e.flags&-4097|2,Z=!1,Oe=e}}}function wu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oe=e}function So(e){if(e!==Oe)return!1;if(!Z)return wu(e),Z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ii(e.type,e.memoizedProps)),t&&(t=$e)){if(Ui(e))throw Jc(),Error(C(418));for(;t;)Vc(e,t),t=Wt(t.nextSibling)}if(wu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){$e=Wt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Oe?Wt(e.stateNode.nextSibling):null;return!0}function Jc(){for(var e=$e;e;)e=Wt(e.nextSibling)}function Jn(){$e=Oe=null,Z=!1}function Sl(e){tt===null?tt=[e]:tt.push(e)}var wm=wt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bu(e){var t=e._init;return t(e._payload)}function Kc(e){function t(f,d){if(e){var m=f.deletions;m===null?(f.deletions=[d],f.flags|=16):m.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function o(f,d){return f=Kt(f,d),f.index=0,f.sibling=null,f}function i(f,d,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<d?(f.flags|=2,d):m):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,m,x){return d===null||d.tag!==6?(d=pi(m,f.mode,x),d.return=f,d):(d=o(d,m),d.return=f,d)}function u(f,d,m,x){var w=m.type;return w===Cn?p(f,d,m.props.children,x,m.key):d!==null&&(d.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Lt&&bu(w)===d.type)?(x=o(d,m.props),x.ref=cr(f,d,m),x.return=f,x):(x=$o(m.type,m.key,m.props,null,f.mode,x),x.ref=cr(f,d,m),x.return=f,x)}function c(f,d,m,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=fi(m,f.mode,x),d.return=f,d):(d=o(d,m.children||[]),d.return=f,d)}function p(f,d,m,x,w){return d===null||d.tag!==7?(d=un(m,f.mode,x,w),d.return=f,d):(d=o(d,m),d.return=f,d)}function g(f,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=pi(""+d,f.mode,m),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case uo:return m=$o(d.type,d.key,d.props,null,f.mode,m),m.ref=cr(f,null,d),m.return=f,m;case En:return d=fi(d,f.mode,m),d.return=f,d;case Lt:var x=d._init;return g(f,x(d._payload),m)}if(hr(d)||ir(d))return d=un(d,f.mode,m,null),d.return=f,d;Eo(f,d)}return null}function h(f,d,m,x){var w=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return w!==null?null:s(f,d,""+m,x);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:return m.key===w?u(f,d,m,x):null;case En:return m.key===w?c(f,d,m,x):null;case Lt:return w=m._init,h(f,d,w(m._payload),x)}if(hr(m)||ir(m))return w!==null?null:p(f,d,m,x,null);Eo(f,m)}return null}function v(f,d,m,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(m)||null,s(d,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case uo:return f=f.get(x.key===null?m:x.key)||null,u(d,f,x,w);case En:return f=f.get(x.key===null?m:x.key)||null,c(d,f,x,w);case Lt:var b=x._init;return v(f,d,m,b(x._payload),w)}if(hr(x)||ir(x))return f=f.get(m)||null,p(d,f,x,w,null);Eo(d,x)}return null}function k(f,d,m,x){for(var w=null,b=null,E=d,z=d=0,I=null;E!==null&&z<m.length;z++){E.index>z?(I=E,E=null):I=E.sibling;var A=h(f,E,m[z],x);if(A===null){E===null&&(E=I);break}e&&E&&A.alternate===null&&t(f,E),d=i(A,d,z),b===null?w=A:b.sibling=A,b=A,E=I}if(z===m.length)return n(f,E),Z&&nn(f,z),w;if(E===null){for(;z<m.length;z++)E=g(f,m[z],x),E!==null&&(d=i(E,d,z),b===null?w=E:b.sibling=E,b=E);return Z&&nn(f,z),w}for(E=r(f,E);z<m.length;z++)I=v(E,f,z,m[z],x),I!==null&&(e&&I.alternate!==null&&E.delete(I.key===null?z:I.key),d=i(I,d,z),b===null?w=I:b.sibling=I,b=I);return e&&E.forEach(function(P){return t(f,P)}),Z&&nn(f,z),w}function y(f,d,m,x){var w=ir(m);if(typeof w!="function")throw Error(C(150));if(m=w.call(m),m==null)throw Error(C(151));for(var b=w=null,E=d,z=d=0,I=null,A=m.next();E!==null&&!A.done;z++,A=m.next()){E.index>z?(I=E,E=null):I=E.sibling;var P=h(f,E,A.value,x);if(P===null){E===null&&(E=I);break}e&&E&&P.alternate===null&&t(f,E),d=i(P,d,z),b===null?w=P:b.sibling=P,b=P,E=I}if(A.done)return n(f,E),Z&&nn(f,z),w;if(E===null){for(;!A.done;z++,A=m.next())A=g(f,A.value,x),A!==null&&(d=i(A,d,z),b===null?w=A:b.sibling=A,b=A);return Z&&nn(f,z),w}for(E=r(f,E);!A.done;z++,A=m.next())A=v(E,f,z,A.value,x),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?z:A.key),d=i(A,d,z),b===null?w=A:b.sibling=A,b=A);return e&&E.forEach(function(O){return t(f,O)}),Z&&nn(f,z),w}function N(f,d,m,x){if(typeof m=="object"&&m!==null&&m.type===Cn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case uo:e:{for(var w=m.key,b=d;b!==null;){if(b.key===w){if(w=m.type,w===Cn){if(b.tag===7){n(f,b.sibling),d=o(b,m.props.children),d.return=f,f=d;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Lt&&bu(w)===b.type){n(f,b.sibling),d=o(b,m.props),d.ref=cr(f,b,m),d.return=f,f=d;break e}n(f,b);break}else t(f,b);b=b.sibling}m.type===Cn?(d=un(m.props.children,f.mode,x,m.key),d.return=f,f=d):(x=$o(m.type,m.key,m.props,null,f.mode,x),x.ref=cr(f,d,m),x.return=f,f=x)}return l(f);case En:e:{for(b=m.key;d!==null;){if(d.key===b)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){n(f,d.sibling),d=o(d,m.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=fi(m,f.mode,x),d.return=f,f=d}return l(f);case Lt:return b=m._init,N(f,d,b(m._payload),x)}if(hr(m))return k(f,d,m,x);if(ir(m))return y(f,d,m,x);Eo(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(n(f,d.sibling),d=o(d,m),d.return=f,f=d):(n(f,d),d=pi(m,f.mode,x),d.return=f,f=d),l(f)):n(f,d)}return N}var Kn=Kc(!0),qc=Kc(!1),Zo=Yt(null),Ro=null,An=null,El=null;function Cl(){El=An=Ro=null}function Ml(e){var t=Zo.current;Q(Zo),e._currentValue=t}function Hi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Un(e,t){Ro=e,El=An=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(El!==e)if(e={context:e,memoizedValue:t,next:null},An===null){if(Ro===null)throw Error(C(308));An=e,Ro.dependencies={lanes:0,firstContext:e}}else An=An.next=e;return t}var an=null;function zl(e){an===null?an=[e]:an.push(e)}function Xc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zl(t)):(n.next=o.next,o.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function _l(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ht(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,xt(e,n)}return o=r.interleaved,o===null?(t.next=t,zl(r)):(t.next=o.next,o.next=t),r.interleaved=t,xt(e,n)}function Do(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}function Nu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ea(e,t,n,r){var o=e.updateQueue;At=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var u=s,c=u.next;u.next=null,l===null?i=c:l.next=c,l=u;var p=e.alternate;p!==null&&(p=p.updateQueue,s=p.lastBaseUpdate,s!==l&&(s===null?p.firstBaseUpdate=c:s.next=c,p.lastBaseUpdate=u))}if(i!==null){var g=o.baseState;l=0,p=c=u=null,s=i;do{var h=s.lane,v=s.eventTime;if((r&h)===h){p!==null&&(p=p.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var k=e,y=s;switch(h=t,v=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){g=k.call(v,g,h);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,h=typeof k=="function"?k.call(v,g,h):k,h==null)break e;g=te({},g,h);break e;case 2:At=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[s]:h.push(s))}else v={eventTime:v,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},p===null?(c=p=v,u=g):p=p.next=v,l|=h;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;h=s,s=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(p===null&&(u=g),o.baseState=u,o.firstBaseUpdate=c,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);fn|=l,e.lanes=l,e.memoizedState=g}}function Su(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var qr={},ct=Yt(qr),$r=Yt(qr),Or=Yt(qr);function ln(e){if(e===qr)throw Error(C(174));return e}function Tl(e,t){switch(X(Or,t),X($r,e),X(ct,qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ni(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ni(t,e)}Q(ct),X(ct,t)}function qn(){Q(ct),Q($r),Q(Or)}function Yc(e){ln(Or.current);var t=ln(ct.current),n=Ni(t,e.type);t!==n&&(X($r,e),X(ct,n))}function Pl(e){$r.current===e&&(Q(ct),Q($r))}var R=Yt(0);function ta(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ii=[];function Dl(){for(var e=0;e<ii.length;e++)ii[e]._workInProgressVersionPrimary=null;ii.length=0}var Lo=wt.ReactCurrentDispatcher,li=wt.ReactCurrentBatchConfig,pn=0,ee=null,ue=null,pe=null,na=!1,Nr=!1,jr=0,bm=0;function we(){throw Error(C(321))}function Ll(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Al(e,t,n,r,o,i){if(pn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lo.current=e===null||e.memoizedState===null?Cm:Mm,e=n(r,o),Nr){i=0;do{if(Nr=!1,jr=0,25<=i)throw Error(C(301));i+=1,pe=ue=null,t.updateQueue=null,Lo.current=zm,e=n(r,o)}while(Nr)}if(Lo.current=ra,t=ue!==null&&ue.next!==null,pn=0,pe=ue=ee=null,na=!1,t)throw Error(C(300));return e}function Fl(){var e=jr!==0;return jr=0,e}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=e:pe=pe.next=e,pe}function Ge(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?ee.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(C(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?ee.memoizedState=pe=e:pe=pe.next=e}return pe}function Ur(e,t){return typeof t=="function"?t(e):t}function si(e){var t=Ge(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,u=null,c=i;do{var p=c.lane;if((pn&p)===p)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(s=u=g,l=r):u=u.next=g,ee.lanes|=p,fn|=p}c=c.next}while(c!==null&&c!==i);u===null?l=r:u.next=s,ot(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,fn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ui(e){var t=Ge(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);ot(i,t.memoizedState)||(De=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qc(){}function Zc(e,t){var n=ee,r=Ge(),o=t(),i=!ot(r.memoizedState,o);if(i&&(r.memoizedState=o,De=!0),r=r.queue,Bl(td.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,Wr(9,ed.bind(null,n,r,o,t),void 0,null),fe===null)throw Error(C(349));(pn&30)!==0||Rc(n,t,o)}return o}function Rc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ed(e,t,n,r){t.value=n,t.getSnapshot=r,nd(t)&&rd(e)}function td(e,t,n){return n(function(){nd(t)&&rd(e)})}function nd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function rd(e){var t=xt(e,1);t!==null&&rt(t,e,1,-1)}function Eu(e){var t=lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ur,lastRenderedState:e},t.queue=e,e=e.dispatch=Em.bind(null,ee,e),[t.memoizedState,e]}function Wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function od(){return Ge().memoizedState}function Ao(e,t,n,r){var o=lt();ee.flags|=e,o.memoizedState=Wr(1|t,n,void 0,r===void 0?null:r)}function ha(e,t,n,r){var o=Ge();r=r===void 0?null:r;var i=void 0;if(ue!==null){var l=ue.memoizedState;if(i=l.destroy,r!==null&&Ll(r,l.deps)){o.memoizedState=Wr(t,n,i,r);return}}ee.flags|=e,o.memoizedState=Wr(1|t,n,i,r)}function Cu(e,t){return Ao(8390656,8,e,t)}function Bl(e,t){return ha(2048,8,e,t)}function ad(e,t){return ha(4,2,e,t)}function id(e,t){return ha(4,4,e,t)}function ld(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sd(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,4,ld.bind(null,t,e),n)}function Il(){}function ud(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ll(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cd(e,t){var n=Ge();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ll(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function dd(e,t,n){return(pn&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n):(ot(n,t)||(n=gc(),ee.lanes|=n,fn|=n,e.baseState=!0),t)}function Nm(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=li.transition;li.transition={};try{e(!1),t()}finally{K=n,li.transition=r}}function pd(){return Ge().memoizedState}function Sm(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fd(e))md(t,n);else if(n=Xc(e,t,n,r),n!==null){var o=_e();rt(n,e,r,o),hd(n,t,r)}}function Em(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fd(e))md(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,ot(s,l)){var u=t.interleaved;u===null?(o.next=o,zl(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}n=Xc(e,t,o,r),n!==null&&(o=_e(),rt(n,e,r,o),hd(n,t,r))}}function fd(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function md(e,t){Nr=na=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ml(e,n)}}var ra={readContext:Xe,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useInsertionEffect:we,useLayoutEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useMutableSource:we,useSyncExternalStore:we,useId:we,unstable_isNewReconciler:!1},Cm={readContext:Xe,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ao(4194308,4,ld.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ao(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ao(4,2,e,t)},useMemo:function(e,t){var n=lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Sm.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:Eu,useDebugValue:Il,useDeferredValue:function(e){return lt().memoizedState=e},useTransition:function(){var e=Eu(!1),t=e[0];return e=Nm.bind(null,e[1]),lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=lt();if(Z){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),fe===null)throw Error(C(349));(pn&30)!==0||Rc(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,Cu(td.bind(null,r,i,e),[e]),r.flags|=2048,Wr(9,ed.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=lt(),t=fe.identifierPrefix;if(Z){var n=ht,r=mt;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=jr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=bm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mm={readContext:Xe,useCallback:ud,useContext:Xe,useEffect:Bl,useImperativeHandle:sd,useInsertionEffect:ad,useLayoutEffect:id,useMemo:cd,useReducer:si,useRef:od,useState:function(){return si(Ur)},useDebugValue:Il,useDeferredValue:function(e){var t=Ge();return dd(t,ue.memoizedState,e)},useTransition:function(){var e=si(Ur)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Zc,useId:pd,unstable_isNewReconciler:!1},zm={readContext:Xe,useCallback:ud,useContext:Xe,useEffect:Bl,useImperativeHandle:sd,useInsertionEffect:ad,useLayoutEffect:id,useMemo:cd,useReducer:ui,useRef:od,useState:function(){return ui(Ur)},useDebugValue:Il,useDeferredValue:function(e){var t=Ge();return ue===null?t.memoizedState=e:dd(t,ue.memoizedState,e)},useTransition:function(){var e=ui(Ur)[0],t=Ge().memoizedState;return[e,t]},useMutableSource:Qc,useSyncExternalStore:Zc,useId:pd,unstable_isNewReconciler:!1};function Re(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Vi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ga={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Jt(e),i=gt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(rt(t,e,o,r),Do(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_e(),o=Jt(e),i=gt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ht(e,i,o),t!==null&&(rt(t,e,o,r),Do(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_e(),r=Jt(e),o=gt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Ht(e,o,r),t!==null&&(rt(t,e,r,n),Do(t,e,r))}};function Mu(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(o,i):!0}function gd(e,t,n){var r=!1,o=Xt,i=t.contextType;return typeof i=="object"&&i!==null?i=Xe(i):(o=Ae(t)?cn:Se.current,r=t.contextTypes,i=(r=r!=null)?Vn(e,o):Xt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ga,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ga.enqueueReplaceState(t,t.state,null)}function Ji(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},_l(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Xe(i):(i=Ae(t)?cn:Se.current,o.context=Vn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vi(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&ga.enqueueReplaceState(o,o.state,null),ea(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Xn(e,t){try{var n="",r=t;do n+=rf(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ki(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _m=typeof WeakMap=="function"?WeakMap:Map;function vd(e,t,n){n=gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){aa||(aa=!0,nl=r),Ki(e,t)},n}function yd(e,t,n){n=gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ki(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ki(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _m;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Hm.bind(null,e,t,n),t.then(e,e))}function Tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gt(-1,1),t.tag=2,Ht(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Tm=wt.ReactCurrentOwner,De=!1;function ze(e,t,n,r){t.child=e===null?qc(t,null,n,r):Kn(t,e.child,n,r)}function Du(e,t,n,r,o){n=n.render;var i=t.ref;return Un(t,o),r=Al(e,t,n,r,i,o),n=Fl(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(Z&&n&&bl(t),t.flags|=1,ze(e,t,r,o),t.child)}function Lu(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Jl(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,xd(e,t,i,r,o)):(e=$o(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ar,n(l,r)&&e.ref===t.ref)return kt(e,t,o)}return t.flags|=1,e=Kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function xd(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Ar(i,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,kt(e,t,o)}return qi(e,t,n,r,o)}function kd(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Bn,Ie),Ie|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Bn,Ie),Ie|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,X(Bn,Ie),Ie|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,X(Bn,Ie),Ie|=r;return ze(e,t,o,n),t.child}function wd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function qi(e,t,n,r,o){var i=Ae(n)?cn:Se.current;return i=Vn(t,i),Un(t,o),n=Al(e,t,n,r,i,o),r=Fl(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kt(e,t,o)):(Z&&r&&bl(t),t.flags|=1,ze(e,t,n,o),t.child)}function Au(e,t,n,r,o){if(Ae(n)){var i=!0;Go(t)}else i=!1;if(Un(t,o),t.stateNode===null)Fo(e,t),gd(t,n,r),Ji(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=Xe(c):(c=Ae(n)?cn:Se.current,c=Vn(t,c));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||u!==c)&&zu(t,l,r,c),At=!1;var h=t.memoizedState;l.state=h,ea(t,r,l,o),u=t.memoizedState,s!==r||h!==u||Le.current||At?(typeof p=="function"&&(Vi(t,n,p,r),u=t.memoizedState),(s=At||Mu(t,n,s,r,h,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Gc(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:Re(t.type,s),l.props=c,g=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=Xe(u):(u=Ae(n)?cn:Se.current,u=Vn(t,u));var v=n.getDerivedStateFromProps;(p=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||h!==u)&&zu(t,l,r,u),At=!1,h=t.memoizedState,l.state=h,ea(t,r,l,o);var k=t.memoizedState;s!==g||h!==k||Le.current||At?(typeof v=="function"&&(Vi(t,n,v,r),k=t.memoizedState),(c=At||Mu(t,n,c,r,h,k,u)||!1)?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,k,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,k,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),l.props=r,l.state=k,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Xi(e,t,n,r,i,o)}function Xi(e,t,n,r,o,i){wd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&xu(t,n,!1),kt(e,t,i);r=t.stateNode,Tm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Kn(t,e.child,null,i),t.child=Kn(t,null,s,i)):ze(e,t,s,i),t.memoizedState=r.state,o&&xu(t,n,!0),t.child}function bd(e){var t=e.stateNode;t.pendingContext?yu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&yu(e,t.context,!1),Tl(e,t.containerInfo)}function Fu(e,t,n,r,o){return Jn(),Sl(o),t.flags|=256,ze(e,t,n,r),t.child}var Gi={dehydrated:null,treeContext:null,retryLane:0};function Yi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,n){var r=t.pendingProps,o=R.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),X(R,o&1),e===null)return Wi(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=xa(l,r,0,null),e=un(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Yi(n),t.memoizedState=Gi,e):$l(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return Pm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Kt(o,u),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Kt(s,i):(i=un(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Yi(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Gi,r}return i=e.child,e=i.sibling,r=Kt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function $l(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&Sl(r),Kn(t,e.child,null,n),e=$l(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Pm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ci(Error(C(422))),Co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=xa({mode:"visible",children:r.children},o,0,null),i=un(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Kn(t,e.child,null,l),t.child.memoizedState=Yi(l),t.memoizedState=Gi,i);if((t.mode&1)===0)return Co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(C(419)),r=ci(i,r,void 0),Co(e,t,l,r)}if(s=(l&e.childLanes)!==0,De||s){if(r=fe,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,xt(e,o),rt(r,e,o,-1))}return Vl(),r=ci(Error(C(421))),Co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Vm.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,$e=Wt(o.nextSibling),Oe=t,Z=!0,tt=null,e!==null&&(Ve[Je++]=mt,Ve[Je++]=ht,Ve[Je++]=dn,mt=e.id,ht=e.overflow,dn=t),t=$l(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hi(e.return,t,n)}function di(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Sd(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=R.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(R,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ta(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),di(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ta(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}di(t,!0,n,null,i);break;case"together":di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Dm(e,t,n){switch(t.tag){case 3:bd(t),Jn();break;case 5:Yc(t);break;case 1:Ae(t.type)&&Go(t);break;case 4:Tl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;X(Zo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(R,R.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Nd(e,t,n):(X(R,R.current&1),e=kt(e,t,n),e!==null?e.sibling:null);X(R,R.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Sd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),X(R,R.current),r)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,n)}return kt(e,t,n)}var Ed,Qi,Cd,Md;Ed=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qi=function(){};Cd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,ln(ct.current);var i=null;switch(n){case"input":o=xi(e,o),r=xi(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=bi(e,o),r=bi(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qo)}Si(n,r);var l;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var s=o[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mr.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=o?.[c],r.hasOwnProperty(c)&&u!==s&&(u!=null||s!=null))if(c==="style")if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,s=s?s.__html:void 0,u!=null&&s!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Y("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Md=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lm(e,t,n){var r=t.pendingProps;switch(Nl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Ae(t.type)&&Xo(),be(t),null;case 3:return r=t.stateNode,qn(),Q(Le),Q(Se),Dl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(So(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tt!==null&&(al(tt),tt=null))),Qi(e,t),be(t),null;case 5:Pl(t);var o=ln(Or.current);if(n=t.type,e!==null&&t.stateNode!=null)Cd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return be(t),null}if(e=ln(ct.current),So(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[st]=t,r[Ir]=i,e=(t.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(o=0;o<vr.length;o++)Y(vr[o],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Vs(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":Ks(r,i),Y("invalid",r)}Si(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&No(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&No(r.textContent,s,e),o=["children",""+s]):Mr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&Y("scroll",r)}switch(n){case"input":co(r),Js(r,i,!0);break;case"textarea":co(r),qs(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=tc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[st]=t,e[Ir]=r,Ed(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ei(n,r),n){case"dialog":Y("cancel",e),Y("close",e),o=r;break;case"iframe":case"object":case"embed":Y("load",e),o=r;break;case"video":case"audio":for(o=0;o<vr.length;o++)Y(vr[o],e);o=r;break;case"source":Y("error",e),o=r;break;case"img":case"image":case"link":Y("error",e),Y("load",e),o=r;break;case"details":Y("toggle",e),o=r;break;case"input":Vs(e,r),o=xi(e,r),Y("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),Y("invalid",e);break;case"textarea":Ks(e,r),o=bi(e,r),Y("invalid",e);break;default:o=r}Si(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var u=s[i];i==="style"?oc(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&nc(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&zr(e,u):typeof u=="number"&&zr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Y("scroll",e):u!=null&&sl(e,i,u,l))}switch(n){case"input":co(e),Js(e,r,!1);break;case"textarea":co(e),qs(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?In(e,!!r.multiple,i,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Md(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=ln(Or.current),ln(ct.current),So(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(i=r.nodeValue!==n)&&(e=Oe,e!==null))switch(e.tag){case 3:No(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return be(t),null;case 13:if(Q(R),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Z&&$e!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Jc(),Jn(),t.flags|=98560,i=!1;else if(i=So(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[st]=t}else Jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),i=!1}else tt!==null&&(al(tt),tt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(R.current&1)!==0?ce===0&&(ce=3):Vl())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return qn(),Qi(e,t),e===null&&Fr(t.stateNode.containerInfo),be(t),null;case 10:return Ml(t.type._context),be(t),null;case 17:return Ae(t.type)&&Xo(),be(t),null;case 19:if(Q(R),i=t.memoizedState,i===null)return be(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)dr(i,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ta(e),l!==null){for(t.flags|=128,dr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(R,R.current&1|2),t.child}e=e.sibling}i.tail!==null&&ae()>Gn&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ta(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Z)return be(t),null}else 2*ae()-i.renderingStartTime>Gn&&n!==1073741824&&(t.flags|=128,r=!0,dr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ae(),t.sibling=null,n=R.current,X(R,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Hl(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ie&1073741824)!==0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Am(e,t){switch(Nl(t),t.tag){case 1:return Ae(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(),Q(Le),Q(Se),Dl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Pl(t),null;case 13:if(Q(R),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(R),null;case 4:return qn(),null;case 10:return Ml(t.type._context),null;case 22:case 23:return Hl(),null;case 24:return null;default:return null}}var Mo=!1,Ne=!1,Fm=typeof WeakSet=="function"?WeakSet:Set,D=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function Zi(e,t,n){try{n()}catch(r){re(e,t,r)}}var Iu=!1;function Bm(e,t){if(Fi=Vo,e=Dc(),wl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,u=-1,c=0,p=0,g=e,h=null;t:for(;;){for(var v;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(v=g.firstChild)!==null;)h=g,g=v;for(;;){if(g===e)break t;if(h===n&&++c===o&&(s=l),h===i&&++p===r&&(u=l),(v=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=v}n=s===-1||u===-1?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bi={focusedElem:e,selectionRange:n},Vo=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var k=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,N=k.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:Re(t.type,y),N);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){re(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return k=Iu,Iu=!1,k}function Sr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Zi(t,n,i)}o=o.next}while(o!==r)}}function va(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ri(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function zd(e){var t=e.alternate;t!==null&&(e.alternate=null,zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Ir],delete t[Oi],delete t[ym],delete t[xm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function _d(e){return e.tag===5||e.tag===3||e.tag===4}function $u(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||_d(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qo));else if(r!==4&&(e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}var ve=null,et=!1;function Dt(e,t,n){for(n=n.child;n!==null;)Td(e,t,n),n=n.sibling}function Td(e,t,n){if(ut&&typeof ut.onCommitFiberUnmount=="function")try{ut.onCommitFiberUnmount(ua,n)}catch{}switch(n.tag){case 5:Ne||Fn(n,t);case 6:var r=ve,o=et;ve=null,Dt(e,t,n),ve=r,et=o,ve!==null&&(et?(e=ve,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ve.removeChild(n.stateNode));break;case 18:ve!==null&&(et?(e=ve,n=n.stateNode,e.nodeType===8?oi(e.parentNode,n):e.nodeType===1&&oi(e,n),Dr(e)):oi(ve,n.stateNode));break;case 4:r=ve,o=et,ve=n.stateNode.containerInfo,et=!0,Dt(e,t,n),ve=r,et=o;break;case 0:case 11:case 14:case 15:if(!Ne&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Zi(n,t,l),o=o.next}while(o!==r)}Dt(e,t,n);break;case 1:if(!Ne&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){re(n,t,s)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(Ne=(r=Ne)||n.memoizedState!==null,Dt(e,t,n),Ne=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function Ou(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Fm),t.forEach(function(r){var o=Jm.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:ve=s.stateNode,et=!1;break e;case 3:ve=s.stateNode.containerInfo,et=!0;break e;case 4:ve=s.stateNode.containerInfo,et=!0;break e}s=s.return}if(ve===null)throw Error(C(160));Td(i,l,o),ve=null,et=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(c){re(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pd(t,e),t=t.sibling}function Pd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),it(e),r&4){try{Sr(3,e,e.return),va(3,e)}catch(y){re(e,e.return,y)}try{Sr(5,e,e.return)}catch(y){re(e,e.return,y)}}break;case 1:Ze(t,e),it(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(Ze(t,e),it(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var o=e.stateNode;try{zr(o,"")}catch(y){re(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Ru(o,i),Ei(s,l);var c=Ei(s,i);for(l=0;l<u.length;l+=2){var p=u[l],g=u[l+1];p==="style"?oc(o,g):p==="dangerouslySetInnerHTML"?nc(o,g):p==="children"?zr(o,g):sl(o,p,g,c)}switch(s){case"input":ki(o,i);break;case"textarea":ec(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?In(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?In(o,!!i.multiple,i.defaultValue,!0):In(o,!!i.multiple,i.multiple?[]:"",!1))}o[Ir]=i}catch(y){re(e,e.return,y)}}break;case 6:if(Ze(t,e),it(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(y){re(e,e.return,y)}}break;case 3:if(Ze(t,e),it(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Dr(t.containerInfo)}catch(y){re(e,e.return,y)}break;case 4:Ze(t,e),it(e);break;case 13:Ze(t,e),it(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ul=ae())),r&4&&Ou(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(Ne=(c=Ne)||p,Ze(t,e),Ne=c):Ze(t,e),it(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!p&&(e.mode&1)!==0)for(D=e,p=e.child;p!==null;){for(g=D=p;D!==null;){switch(h=D,v=h.child,h.tag){case 0:case 11:case 14:case 15:Sr(4,h,h.return);break;case 1:Fn(h,h.return);var k=h.stateNode;if(typeof k.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Fn(h,h.return);break;case 22:if(h.memoizedState!==null){Uu(g);continue}}v!==null?(v.return=h,D=v):Uu(g)}p=p.sibling}e:for(p=null,g=e;;){if(g.tag===5){if(p===null){p=g;try{o=g.stateNode,c?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,s.style.display=rc("display",l))}catch(y){re(e,e.return,y)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(y){re(e,e.return,y)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ze(t,e),it(e),r&4&&Ou(e);break;case 21:break;default:Ze(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(_d(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(zr(o,""),r.flags&=-33);var i=$u(e);tl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=$u(e);el(e,s,l);break;default:throw Error(C(161))}}catch(u){re(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Im(e,t,n){D=e,Dd(e,t,n)}function Dd(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Mo;if(!l){var s=o.alternate,u=s!==null&&s.memoizedState!==null||Ne;s=Mo;var c=Ne;if(Mo=l,(Ne=u)&&!c)for(D=o;D!==null;)l=D,u=l.child,l.tag===22&&l.memoizedState!==null?Wu(o):u!==null?(u.return=l,D=u):Wu(o);for(;i!==null;)D=i,Dd(i,t,n),i=i.sibling;D=o,Mo=s,Ne=c}ju(e,t,n)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,D=i):ju(e,t,n)}}function ju(e){for(;D!==null;){var t=D;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ne||va(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ne)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Re(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Su(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Su(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&Dr(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Ne||t.flags&512&&Ri(t)}catch(h){re(t,t.return,h)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Uu(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Wu(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{va(4,t)}catch(u){re(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){re(t,o,u)}}var i=t.return;try{Ri(t)}catch(u){re(t,i,u)}break;case 5:var l=t.return;try{Ri(t)}catch(u){re(t,l,u)}}}catch(u){re(t,t.return,u)}if(t===e){D=null;break}var s=t.sibling;if(s!==null){s.return=t.return,D=s;break}D=t.return}}var $m=Math.ceil,oa=wt.ReactCurrentDispatcher,Ol=wt.ReactCurrentOwner,qe=wt.ReactCurrentBatchConfig,V=0,fe=null,le=null,ye=0,Ie=0,Bn=Yt(0),ce=0,Hr=null,fn=0,ya=0,jl=0,Er=null,Pe=null,Ul=0,Gn=1/0,pt=null,aa=!1,nl=null,Vt=null,zo=!1,$t=null,ia=0,Cr=0,rl=null,Bo=-1,Io=0;function _e(){return(V&6)!==0?ae():Bo!==-1?Bo:Bo=ae()}function Jt(e){return(e.mode&1)===0?1:(V&2)!==0&&ye!==0?ye&-ye:wm.transition!==null?(Io===0&&(Io=gc()),Io):(e=K,e!==0||(e=window.event,e=e===void 0?16:Nc(e.type)),e)}function rt(e,t,n,r){if(50<Cr)throw Cr=0,rl=null,Error(C(185));Vr(e,n,r),((V&2)===0||e!==fe)&&(e===fe&&((V&2)===0&&(ya|=n),ce===4&&Bt(e,ye)),Fe(e,r),n===1&&V===0&&(t.mode&1)===0&&(Gn=ae()+500,ma&&Qt()))}function Fe(e,t){var n=e.callbackNode;Nf(e,t);var r=Ho(e,e===fe?ye:0);if(r===0)n!==null&&Ys(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ys(n),t===1)e.tag===0?km(Hu.bind(null,e)):Wc(Hu.bind(null,e)),gm(function(){(V&6)===0&&Qt()}),n=null;else{switch(vc(r)){case 1:n=fl;break;case 4:n=mc;break;case 16:n=Wo;break;case 536870912:n=hc;break;default:n=Wo}n=jd(n,Ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ld(e,t){if(Bo=-1,Io=0,(V&6)!==0)throw Error(C(327));var n=e.callbackNode;if(Wn()&&e.callbackNode!==n)return null;var r=Ho(e,e===fe?ye:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=la(e,r);else{t=r;var o=V;V|=2;var i=Fd();(fe!==e||ye!==t)&&(pt=null,Gn=ae()+500,sn(e,t));do try{Um();break}catch(s){Ad(e,s)}while(!0);Cl(),oa.current=i,V=o,le!==null?t=0:(fe=null,ye=0,t=ce)}if(t!==0){if(t===2&&(o=Ti(e),o!==0&&(r=o,t=ol(e,o))),t===1)throw n=Hr,sn(e,0),Bt(e,r),Fe(e,ae()),n;if(t===6)Bt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Om(o)&&(t=la(e,r),t===2&&(i=Ti(e),i!==0&&(r=i,t=ol(e,i))),t===1))throw n=Hr,sn(e,0),Bt(e,r),Fe(e,ae()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:rn(e,Pe,pt);break;case 3:if(Bt(e,r),(r&130023424)===r&&(t=Ul+500-ae(),10<t)){if(Ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){_e(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=$i(rn.bind(null,e,Pe,pt),t);break}rn(e,Pe,pt);break;case 4:if(Bt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-nt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$m(r/1960))-r,10<r){e.timeoutHandle=$i(rn.bind(null,e,Pe,pt),r);break}rn(e,Pe,pt);break;case 5:rn(e,Pe,pt);break;default:throw Error(C(329))}}}return Fe(e,ae()),e.callbackNode===n?Ld.bind(null,e):null}function ol(e,t){var n=Er;return e.current.memoizedState.isDehydrated&&(sn(e,t).flags|=256),e=la(e,t),e!==2&&(t=Pe,Pe=n,t!==null&&al(t)),e}function al(e){Pe===null?Pe=e:Pe.push.apply(Pe,e)}function Om(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ot(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Bt(e,t){for(t&=~jl,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-nt(t),r=1<<n;e[n]=-1,t&=~r}}function Hu(e){if((V&6)!==0)throw Error(C(327));Wn();var t=Ho(e,0);if((t&1)===0)return Fe(e,ae()),null;var n=la(e,t);if(e.tag!==0&&n===2){var r=Ti(e);r!==0&&(t=r,n=ol(e,r))}if(n===1)throw n=Hr,sn(e,0),Bt(e,t),Fe(e,ae()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Pe,pt),Fe(e,ae()),null}function Wl(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Gn=ae()+500,ma&&Qt())}}function mn(e){$t!==null&&$t.tag===0&&(V&6)===0&&Wn();var t=V;V|=1;var n=qe.transition,r=K;try{if(qe.transition=null,K=1,e)return e()}finally{K=r,qe.transition=n,V=t,(V&6)===0&&Qt()}}function Hl(){Ie=Bn.current,Q(Bn)}function sn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,hm(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Nl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:qn(),Q(Le),Q(Se),Dl();break;case 5:Pl(r);break;case 4:qn();break;case 13:Q(R);break;case 19:Q(R);break;case 10:Ml(r.type._context);break;case 22:case 23:Hl()}n=n.return}if(fe=e,le=e=Kt(e.current,null),ye=Ie=t,ce=0,Hr=null,jl=ya=fn=0,Pe=Er=null,an!==null){for(t=0;t<an.length;t++)if(n=an[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}an=null}return e}function Ad(e,t){do{var n=le;try{if(Cl(),Lo.current=ra,na){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}na=!1}if(pn=0,pe=ue=ee=null,Nr=!1,jr=0,Ol.current=null,n===null||n.return===null){ce=1,Hr=t,le=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=ye,s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,p=s,g=p.tag;if((p.mode&1)===0&&(g===0||g===11||g===15)){var h=p.alternate;h?(p.updateQueue=h.updateQueue,p.memoizedState=h.memoizedState,p.lanes=h.lanes):(p.updateQueue=null,p.memoizedState=null)}var v=Tu(l);if(v!==null){v.flags&=-257,Pu(v,l,s,i,t),v.mode&1&&_u(i,c,t),t=v,u=c;var k=t.updateQueue;if(k===null){var y=new Set;y.add(u),t.updateQueue=y}else k.add(u);break e}else{if((t&1)===0){_u(i,c,t),Vl();break e}u=Error(C(426))}}else if(Z&&s.mode&1){var N=Tu(l);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),Pu(N,l,s,i,t),Sl(Xn(u,s));break e}}i=u=Xn(u,s),ce!==4&&(ce=2),Er===null?Er=[i]:Er.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=vd(i,u,t);Nu(i,f);break e;case 1:s=u;var d=i.type,m=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Vt===null||!Vt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=yd(i,s,t);Nu(i,x);break e}}i=i.return}while(i!==null)}Id(n)}catch(w){t=w,le===n&&n!==null&&(le=n=n.return);continue}break}while(!0)}function Fd(){var e=oa.current;return oa.current=ra,e===null?ra:e}function Vl(){(ce===0||ce===3||ce===2)&&(ce=4),fe===null||(fn&268435455)===0&&(ya&268435455)===0||Bt(fe,ye)}function la(e,t){var n=V;V|=2;var r=Fd();(fe!==e||ye!==t)&&(pt=null,sn(e,t));do try{jm();break}catch(o){Ad(e,o)}while(!0);if(Cl(),V=n,oa.current=r,le!==null)throw Error(C(261));return fe=null,ye=0,ce}function jm(){for(;le!==null;)Bd(le)}function Um(){for(;le!==null&&!mf();)Bd(le)}function Bd(e){var t=Od(e.alternate,e,Ie);e.memoizedProps=e.pendingProps,t===null?Id(e):le=t,Ol.current=null}function Id(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Lm(n,t,Ie),n!==null){le=n;return}}else{if(n=Am(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function rn(e,t,n){var r=K,o=qe.transition;try{qe.transition=null,K=1,Wm(e,t,n,r)}finally{qe.transition=o,K=r}return null}function Wm(e,t,n,r){do Wn();while($t!==null);if((V&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Sf(e,i),e===fe&&(le=fe=null,ye=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||zo||(zo=!0,jd(Wo,function(){return Wn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=qe.transition,qe.transition=null;var l=K;K=1;var s=V;V|=4,Ol.current=null,Bm(e,n),Pd(n,e),cm(Bi),Vo=!!Fi,Bi=Fi=null,e.current=n,Im(n,e,o),hf(),V=s,K=l,qe.transition=i}else e.current=n;if(zo&&(zo=!1,$t=e,ia=o),i=e.pendingLanes,i===0&&(Vt=null),yf(n.stateNode,r),Fe(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(aa)throw aa=!1,e=nl,nl=null,e;return(ia&1)!==0&&e.tag!==0&&Wn(),i=e.pendingLanes,(i&1)!==0?e===rl?Cr++:(Cr=0,rl=e):Cr=0,Qt(),null}function Wn(){if($t!==null){var e=vc(ia),t=qe.transition,n=K;try{if(qe.transition=null,K=16>e?16:e,$t===null)var r=!1;else{if(e=$t,$t=null,ia=0,(V&6)!==0)throw Error(C(331));var o=V;for(V|=4,D=e.current;D!==null;){var i=D,l=i.child;if((D.flags&16)!==0){var s=i.deletions;if(s!==null){for(var u=0;u<s.length;u++){var c=s[u];for(D=c;D!==null;){var p=D;switch(p.tag){case 0:case 11:case 15:Sr(8,p,i)}var g=p.child;if(g!==null)g.return=p,D=g;else for(;D!==null;){p=D;var h=p.sibling,v=p.return;if(zd(p),p===c){D=null;break}if(h!==null){h.return=v,D=h;break}D=v}}}var k=i.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var N=y.sibling;y.sibling=null,y=N}while(y!==null)}}D=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Sr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,D=f;break e}D=i.return}}var d=e.current;for(D=d;D!==null;){l=D;var m=l.child;if((l.subtreeFlags&2064)!==0&&m!==null)m.return=l,D=m;else e:for(l=d;D!==null;){if(s=D,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:va(9,s)}}catch(w){re(s,s.return,w)}if(s===l){D=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,D=x;break e}D=s.return}}if(V=o,Qt(),ut&&typeof ut.onPostCommitFiberRoot=="function")try{ut.onPostCommitFiberRoot(ua,e)}catch{}r=!0}return r}finally{K=n,qe.transition=t}}return!1}function Vu(e,t,n){t=Xn(n,t),t=vd(e,t,1),e=Ht(e,t,1),t=_e(),e!==null&&(Vr(e,1,t),Fe(e,t))}function re(e,t,n){if(e.tag===3)Vu(e,e,n);else for(;t!==null;){if(t.tag===3){Vu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Xn(n,e),e=yd(t,e,1),t=Ht(t,e,1),e=_e(),t!==null&&(Vr(t,1,e),Fe(t,e));break}}t=t.return}}function Hm(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=_e(),e.pingedLanes|=e.suspendedLanes&n,fe===e&&(ye&n)===n&&(ce===4||ce===3&&(ye&130023424)===ye&&500>ae()-Ul?sn(e,0):jl|=n),Fe(e,t)}function $d(e,t){t===0&&((e.mode&1)===0?t=1:(t=mo,mo<<=1,(mo&130023424)===0&&(mo=4194304)));var n=_e();e=xt(e,t),e!==null&&(Vr(e,t,n),Fe(e,n))}function Vm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),$d(e,n)}function Jm(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),$d(e,n)}var Od;Od=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Le.current)De=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return De=!1,Dm(e,t,n);De=(e.flags&131072)!==0}else De=!1,Z&&(t.flags&1048576)!==0&&Hc(t,Qo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Fo(e,t),e=t.pendingProps;var o=Vn(t,Se.current);Un(t,n),o=Al(null,t,r,e,o,n);var i=Fl();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ae(r)?(i=!0,Go(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,_l(t),o.updater=ga,t.stateNode=o,o._reactInternals=t,Ji(t,r,e,n),t=Xi(null,t,r,!0,i,n)):(t.tag=0,Z&&i&&bl(t),ze(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Fo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=qm(r),e=Re(r,e),o){case 0:t=qi(null,t,r,e,n);break e;case 1:t=Au(null,t,r,e,n);break e;case 11:t=Du(null,t,r,e,n);break e;case 14:t=Lu(null,t,r,Re(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),qi(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Au(e,t,r,o,n);case 3:e:{if(bd(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Gc(e,t),ea(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Xn(Error(C(423)),t),t=Fu(e,t,r,n,o);break e}else if(r!==o){o=Xn(Error(C(424)),t),t=Fu(e,t,r,n,o);break e}else for($e=Wt(t.stateNode.containerInfo.firstChild),Oe=t,Z=!0,tt=null,n=qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jn(),r===o){t=kt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return Yc(t),e===null&&Wi(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ii(r,o)?l=null:i!==null&&Ii(r,i)&&(t.flags|=32),wd(e,t),ze(e,t,l,n),t.child;case 6:return e===null&&Wi(t),null;case 13:return Nd(e,t,n);case 4:return Tl(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Kn(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Du(e,t,r,o,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,X(Zo,r._currentValue),r._currentValue=l,i!==null)if(ot(i.value,l)){if(i.children===o.children&&!Le.current){t=kt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var u=s.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=gt(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?u.next=u:(u.next=p.next,p.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Hi(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Hi(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}ze(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Un(t,n),o=Xe(o),r=r(o),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,o=Re(r,t.pendingProps),o=Re(r.type,o),Lu(e,t,r,o,n);case 15:return xd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Re(r,o),Fo(e,t),t.tag=1,Ae(r)?(e=!0,Go(t)):e=!1,Un(t,n),gd(t,r,o),Ji(t,r,o,n),Xi(null,t,r,!0,e,n);case 19:return Sd(e,t,n);case 22:return kd(e,t,n)}throw Error(C(156,t.tag))};function jd(e,t){return fc(e,t)}function Km(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ke(e,t,n,r){return new Km(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qm(e){if(typeof e=="function")return Jl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cl)return 11;if(e===dl)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Ke(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $o(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Jl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Cn:return un(n.children,o,i,t);case ul:l=8,o|=8;break;case hi:return e=Ke(12,n,t,o|2),e.elementType=hi,e.lanes=i,e;case gi:return e=Ke(13,n,t,o),e.elementType=gi,e.lanes=i,e;case vi:return e=Ke(19,n,t,o),e.elementType=vi,e.lanes=i,e;case Yu:return xa(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xu:l=10;break e;case Gu:l=9;break e;case cl:l=11;break e;case dl:l=14;break e;case Lt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=Ke(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function un(e,t,n,r){return e=Ke(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=Ke(22,e,r,t),e.elementType=Yu,e.lanes=n,e.stateNode={isHidden:!1},e}function pi(e,t,n){return e=Ke(6,e,null,t),e.lanes=n,e}function fi(e,t,n){return t=Ke(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Xm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ya(0),this.expirationTimes=Ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ya(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Kl(e,t,n,r,o,i,l,s,u){return e=new Xm(e,t,n,s,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ke(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_l(i),e}function Gm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:En,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ud(e){if(!e)return Xt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ae(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ae(n))return Uc(e,n,t)}return t}function Wd(e,t,n,r,o,i,l,s,u){return e=Kl(n,r,!0,e,o,i,l,s,u),e.context=Ud(null),n=e.current,r=_e(),o=Jt(n),i=gt(r,o),i.callback=t??null,Ht(n,i,o),e.current.lanes=o,Vr(e,o,r),Fe(e,r),e}function ka(e,t,n,r){var o=t.current,i=_e(),l=Jt(o);return n=Ud(n),t.context===null?t.context=n:t.pendingContext=n,t=gt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ht(o,t,l),e!==null&&(rt(e,o,l,i),Do(e,o,l)),l}function sa(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Ju(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ql(e,t){Ju(e,t),(e=e.alternate)&&Ju(e,t)}function Ym(){return null}var Hd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xl(e){this._internalRoot=e}wa.prototype.render=Xl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));ka(e,t,null,null)};wa.prototype.unmount=Xl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mn(function(){ka(null,e,null,null)}),t[yt]=null}};function wa(e){this._internalRoot=e}wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=kc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&bc(e)}};function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ba(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ku(){}function Qm(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var c=sa(l);i.call(c)}}var l=Wd(t,r,e,0,null,!1,!1,"",Ku);return e._reactRootContainer=l,e[yt]=l.current,Fr(e.nodeType===8?e.parentNode:e),mn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var c=sa(u);s.call(c)}}var u=Kl(e,0,!1,null,null,!1,!1,"",Ku);return e._reactRootContainer=u,e[yt]=u.current,Fr(e.nodeType===8?e.parentNode:e),mn(function(){ka(t,u,n,r)}),u}function Na(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var u=sa(l);s.call(u)}}ka(t,l,e,o)}else l=Qm(n,t,e,o,r);return sa(l)}yc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(ml(t,n|1),Fe(t,ae()),(V&6)===0&&(Gn=ae()+500,Qt()))}break;case 13:mn(function(){var r=xt(e,1);if(r!==null){var o=_e();rt(r,e,1,o)}}),ql(e,1)}};hl=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=_e();rt(t,e,134217728,n)}ql(e,134217728)}};xc=function(e){if(e.tag===13){var t=Jt(e),n=xt(e,t);if(n!==null){var r=_e();rt(n,e,t,r)}ql(e,t)}};kc=function(){return K};wc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};Mi=function(e,t,n){switch(t){case"input":if(ki(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=fa(r);if(!o)throw Error(C(90));Zu(r),ki(r,o)}}}break;case"textarea":ec(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};lc=Wl;sc=mn;var Zm={usingClientEntryPoint:!1,Events:[Kr,Tn,fa,ac,ic,Wl]},pr={findFiberByHostInstance:on,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rm={bundleType:pr.bundleType,version:pr.version,rendererPackageName:pr.rendererPackageName,rendererConfig:pr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=dc(e),e===null?null:e.stateNode},findFiberByHostInstance:pr.findFiberByHostInstance||Ym,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(fr=__REACT_DEVTOOLS_GLOBAL_HOOK__,!fr.isDisabled&&fr.supportsFiber))try{ua=fr.inject(Rm),ut=fr}catch{}var fr;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zm;We.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gl(t))throw Error(C(200));return Gm(e,t,null,n)};We.createRoot=function(e,t){if(!Gl(e))throw Error(C(299));var n=!1,r="",o=Hd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Kl(e,1,!1,null,null,n,!1,r,o),e[yt]=t.current,Fr(e.nodeType===8?e.parentNode:e),new Xl(t)};We.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=dc(t),e=e===null?null:e.stateNode,e};We.flushSync=function(e){return mn(e)};We.hydrate=function(e,t,n){if(!ba(t))throw Error(C(200));return Na(null,e,t,!0,n)};We.hydrateRoot=function(e,t,n){if(!Gl(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Hd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wd(t,null,e,1,n??null,o,!1,i,l),e[yt]=t.current,Fr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wa(t)};We.render=function(e,t,n){if(!ba(t))throw Error(C(200));return Na(null,e,t,!1,n)};We.unmountComponentAtNode=function(e){if(!ba(e))throw Error(C(40));return e._reactRootContainer?(mn(function(){Na(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};We.unstable_batchedUpdates=Wl;We.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ba(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Na(e,t,n,!1,r)};We.version="18.3.1-next-f1338f8080-20240426"});var qd=en((wh,Kd)=>{"use strict";function Jd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jd)}catch(e){console.error(e)}}Jd(),Kd.exports=Vd()});var Gd=en(Yl=>{"use strict";var Xd=qd();Yl.createRoot=Xd.createRoot,Yl.hydrateRoot=Xd.hydrateRoot;var bh});var a=hs(Ba()),gp=hs(Gd()),Ca=Date.now();function me(){return Ca+=1,Ca}var Ma=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Yr(){let t=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+t.find(o=>o.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function e0(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function $(e=0){let t=new Date(Date.now()+e*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(t)}function Ye(e){let[t,n]=e.split(":").map(Number);return t*60+n}function St(e){let t=Math.floor(e/60)%24,n=e%60,r=t<12?"AM":"PM";return`${t%12===0?12:t%12}:${String(n).padStart(2,"0")} ${r}`}function Et(e){if(e<60)return`${e}m`;let t=Math.floor(e/60),n=e%60;return n?`${t}h ${n}m`:`${t}h`}function Ql(e){let t=Math.floor(e/60)%24,n=e%60;return`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function _a(e){if(!e||e.length===0)return{streak:0,freezeUsed:!1};let t=new Set(e),n;if(t.has($(0)))n=0;else if(t.has($(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,o=n,i=0,l=!0,s=!1;for(;;)if(t.has($(o)))r++,i++,!l&&i>=7&&(l=!0,i=0),o-=1;else if(l)l=!1,i=0,s=!0,o-=1;else break;return{streak:r,freezeUsed:s}}function t0(e){return _a(e).streak}var n0=[15,30,45,60,90,120],Rt={listeners:new Set,emit(e){this.listeners.forEach(t=>{try{t(e)}catch{}})},on(e){return this.listeners.add(e),()=>this.listeners.delete(e)}},Yd="tasksh.pet.v1",kn=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:3,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:6,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:10,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:14,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:17,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:20,name:"Aurelis",title:"legendary guardian",scale:1.06}];function r0(e){let t=kn[0];for(let n of kn)e>=n.minLevel&&(t=n);return t}function Zl(e){return kn.find(t=>t.minLevel>e)||null}var Qd={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},yn=e=>Math.max(0,Math.min(100,Math.round(e)));function Zd(e,t){let n=e.lastTick||t,r=Math.max(0,(t-n)/36e5);if(r<.25)return e;let o=i=>r*i;return{...e,happiness:yn(e.happiness-o(.55)),energy:yn(e.energy-o(.75)),friendship:yn(e.friendship-o(.12)),intelligence:e.intelligence,lastTick:t}}var o0={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function Rl(e,t){let n=o0[t];return n?{...e,happiness:yn(e.happiness+(n.happiness||0)),energy:yn(e.energy+(n.energy||0)),friendship:yn(e.friendship+(n.friendship||0)),intelligence:yn(e.intelligence+(n.intelligence||0))}:e}function os(e){let{happiness:t,energy:n}=e;return t>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:t>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:t>=60?{key:"content",label:"content",face:"^ ^"}:t>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:t>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function vp(e){return e>=90?"inseparable":e>=70?"close":e>=45?"warming up":e>=20?"getting to know you":"new here"}function bt(e,t){if(!e.length)return"";let n=Math.abs(Math.floor(t))%e.length;return e[n]}function a0(e){let{pet:t,level:n,hour:r,doneToday:o,totalToday:i,streak:l,phase:s}=e,u=os(t),c=Math.floor(Date.now()/36e5);return t.energy<22?bt(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],c):i>0&&o===i?bt([`all ${i} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],c):l>=7?bt([`${l} days running. that's a habit now, not an effort.`,`${l} in a row. the hard part's behind you.`],c):o===0&&r>=14?bt(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],c):s==="night"&&r>=23?bt(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],c):s==="morning"?bt(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],c):u.key==="joyful"?bt(["good day so far. i can tell.","you're in a rhythm. keep it easy."],c):t.friendship<15?"still getting to know you. tell me something.":bt([`${o} of ${i} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],c)}function i0(e){let{pet:t,level:n,doneToday:r,totalToday:o,streak:i,routineNow:l,nextRoutine:s}=e,u=os(t);return[`pet: ${t.name}, ${kn[t.stage].name} form, mood ${u.label}`,`stats: happiness ${t.happiness}, energy ${t.energy}, friendship ${t.friendship} (${vp(t.friendship)}), intelligence ${t.intelligence}`,`owner: level ${n}, ${r}/${o} habits done today, best streak ${i}`,l?`right now: ${l}`:"no routine running",s?`next up: ${s}`:""].filter(Boolean).join("; ")}function l0(e,t){let[n,r]=(0,a.useState)(()=>{let p=Zt(Yd,null),g=p?{...Qd,...p}:{...Qd,born:Date.now(),lastTick:Date.now()};return Zd(g,Date.now())}),[o,i]=(0,a.useState)(null);(0,a.useEffect)(()=>{try{localStorage.setItem(Yd,JSON.stringify(n))}catch{}},[n]),(0,a.useEffect)(()=>{let p=setInterval(()=>r(g=>Zd(g,Date.now())),3e5);return()=>clearInterval(p)},[]);let l=(0,a.useMemo)(()=>r0(e),[e]);(0,a.useEffect)(()=>{if(l.stage>n.stage){let p=n.stage;i({from:p,to:l.stage}),r(g=>Rl({...g,stage:l.stage},"levelUp")),B.success()}else l.stage<n.stage&&r(p=>({...p,stage:l.stage}))},[l.stage,n.stage]);let s=(0,a.useCallback)(p=>{r(g=>Rl(g,p))},[]);(0,a.useEffect)(()=>Rt.on(p=>r(g=>Rl(g,p))),[]);let u=(0,a.useCallback)(p=>{let g=String(p||"").trim().slice(0,14);g&&r(h=>({...h,name:g}))},[]),c=(0,a.useCallback)((p,g)=>{r(h=>({...h,chats:p==="user"?h.chats+1:h.chats,log:[...h.log||[],{role:p,text:String(g).slice(0,240)}].slice(-8)}))},[]);return{pet:n,form:l,mood:os(n),evolution:o,clearEvolution:()=>i(null),nudge:s,rename:u,remember:c}}var ts=a.default.memo(function({stage:t=0,mood:n="content",size:r=128,animate:o=!0,evolving:i=!1}){let l=Math.max(0,Math.min(6,t)),s=25+l*1.9,u=22-l*.55,c=78+l*.9,p=c-s*.8-u*.62-(l>=3?5:0),g=4.6-l*.3,h=Math.min(6+l*5.2,Math.max(4,p-u-9)),v=9+l*1.1,k=9+l*5.4,y=33+l*5.2,N=l>=3,f=l>=4,d=l>=6,m=l>=5,x=l>=2?Math.min(4,l-1):0,w=n==="sleepy"||n==="tired",b=n==="joyful",E=n==="low"||n==="drained",z=w?.9:g*(b?1.16:1)*2,I=E?`M 56 ${p+9} q 8 -5 16 0`:b?`M 55 ${p+6} q 9 8 18 0`:`M 57 ${p+7} q 7 4 14 0`;return a.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${o?"pet-anim":""} ${i?"pet-evolving":""}`,style:{"--pet-scale":kn[l].scale},role:"img","aria-label":`${kn[l].name}, ${n}`},a.default.createElement("defs",null,a.default.createElement("radialGradient",{id:`pg-body-${l}`,cx:"38%",cy:"30%"},a.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),a.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),a.default.createElement("radialGradient",{id:`pg-aura-${l}`,cx:"50%",cy:"50%"},a.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),a.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),a.default.createElement("circle",{className:"pet-aura",cx:"64",cy:c-8,r:y,fill:`url(#pg-aura-${l})`}),f&&a.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},a.default.createElement("path",{d:`M ${64-s*.75} ${c-8} q -${16+l*2} -${12+l*2} -${5+l} 8 q 4 9 21 5 Z`}),a.default.createElement("path",{d:`M ${64+s*.75} ${c-8} q ${16+l*2} -${12+l*2} ${5+l} 8 q -4 9 -21 5 Z`})),a.default.createElement("path",{className:"pet-tail",d:`M ${64+s*.85} ${c} q ${k} 2 ${k*.9} -${k*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),l>=3&&a.default.createElement("circle",{cx:64+s*.85+k*.9,cy:c-k*.85,r:2.4+l*.35,fill:"var(--accent2)",className:"pet-tailtip"}),N&&a.default.createElement("rect",{x:"59",y:p+u-5,width:"10",height:Math.max(0,c-s*.7-p-u+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),m&&a.default.createElement("g",{opacity:"0.8"},[0,1,2].map(A=>a.default.createElement("path",{key:A,d:`M ${64-s*.72+A*3} ${c-6-A*7} l -${6+A} -${5+A*2} l ${9+A} ${1+A} Z`,fill:"var(--accent2)"}))),a.default.createElement("g",{className:"pet-body"},a.default.createElement("ellipse",{cx:"64",cy:c,rx:s,ry:s*.86,fill:`url(#pg-body-${l})`}),a.default.createElement("ellipse",{cx:"64",cy:c+2,rx:s*.56,ry:s*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:x}).map((A,P)=>a.default.createElement("circle",{key:P,cx:50+P*14,cy:68+P%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),a.default.createElement("ellipse",{cx:64-s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("ellipse",{cx:64+s*.42,cy:c+s*.8,rx:5.5+l*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("g",{className:"pet-head"},a.default.createElement("path",{d:`M ${64-v} ${p-u*.72}
                  q -3 -${h} 3 -${h*1.25}
                  q 5 ${h*.45} 4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),a.default.createElement("path",{d:`M ${64+v} ${p-u*.72}
                  q 3 -${h} -3 -${h*1.25}
                  q -5 ${h*.45} -4 ${h*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),d&&a.default.createElement("g",{className:"pet-crown"},a.default.createElement("path",{d:`M 51 ${p-u+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),a.default.createElement("circle",{cx:"64",cy:p-u-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),a.default.createElement("circle",{cx:"64",cy:p,r:u,fill:`url(#pg-body-${l})`}),w?a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:`M ${64-8.5} ${p} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),a.default.createElement("path",{d:`M ${64+.5} ${p} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):a.default.createElement("g",{className:"pet-eyes"},a.default.createElement("ellipse",{cx:64-7.5,cy:p,rx:g,ry:z/2,fill:"var(--bg)"}),a.default.createElement("ellipse",{cx:64+7.5,cy:p,rx:g,ry:z/2,fill:"var(--bg)"}),a.default.createElement("circle",{cx:64-6.2,cy:p-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),a.default.createElement("circle",{cx:64+8.8,cy:p-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),a.default.createElement("path",{d:I,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),b&&a.default.createElement(a.default.Fragment,null,a.default.createElement("ellipse",{cx:49,cy:p+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),a.default.createElement("ellipse",{cx:79,cy:p+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),l>=1&&a.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,l)}).map((A,P)=>a.default.createElement("circle",{key:P,cx:"64",cy:c-8-y,r:1.6+P*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${c-8}px`,transform:`rotate(${P*(360/Math.min(4,l))}deg)`}}))))}),za=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},ambient:{blobs:[["38% 42% at 18% 12%","rgba(94,234,212,0.065)"],["42% 38% at 82% 88%","rgba(245,166,35,0.055)"],["35% 40% at 62% 28%","rgba(121,192,255,0.045)"]],particle:"none",grain:.018}},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:3,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},ambient:{blobs:[["40% 44% at 22% 16%","rgba(126,231,135,0.06)"],["38% 40% at 78% 82%","rgba(217,195,107,0.045)"],["36% 38% at 55% 45%","rgba(60,140,110,0.05)"]],particle:"motes",grain:.022}},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:6,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},ambient:{blobs:[["44% 40% at 16% 20%","rgba(199,155,255,0.075)"],["40% 44% at 84% 78%","rgba(255,158,107,0.06)"],["38% 36% at 50% 50%","rgba(120,80,190,0.05)"]],particle:"motes",grain:.02}},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:10,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},ambient:{blobs:[["46% 42% at 20% 14%","rgba(79,195,247,0.07)"],["42% 46% at 80% 86%","rgba(94,234,212,0.05)"],["40% 38% at 60% 40%","rgba(30,90,160,0.06)"]],particle:"bubbles",grain:.024}},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:14,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},ambient:{blobs:[["42% 44% at 18% 82%","rgba(255,159,69,0.075)"],["40% 42% at 82% 18%","rgba(255,209,102,0.05)"],["36% 38% at 50% 55%","rgba(180,60,30,0.055)"]],particle:"embers",grain:.026}},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:20,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},ambient:{blobs:[["50% 38% at 24% 10%","rgba(110,231,200,0.085)"],["46% 42% at 76% 86%","rgba(167,139,250,0.07)"],["44% 40% at 52% 42%","rgba(64,190,255,0.055)"]],particle:"aurora",grain:.02}}],Rd=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function ep(e){for(let t of Rd)if(t.from<t.to?e>=t.from&&e<t.to:e>=t.from||e<t.to)return t;return Rd[2]}function s0(e){let t=document.documentElement;t.style.setProperty("--time-warm",e.warm),t.style.setProperty("--time-light",String(e.light)),t.dataset.phase=e.id}var u0=a.default.memo(function({theme:t,phase:n,calm:r}){let o=t.ambient.particle,i=(0,a.useMemo)(()=>o==="none"?[]:Array.from({length:o==="aurora"?16:o==="embers"?14:18},(u,c)=>{let p=o==="bubbles"?3+c%4*2:2+c%3;return{left:`${(c*37+11)%100}%`,size:p,delay:`${-(c*2.3)%26}s`,dur:`${(o==="bubbles"?20:30)+c%7*4}s`}}),[o]),l=(0,a.useMemo)(()=>n.stars?Array.from({length:34},(s,u)=>({left:`${(u*29+7)%100}%`,top:`${(u*53+13)%62}%`,delay:`${u%9*.7}s`,dur:`${2.6+u%5*.8}s`})):[],[n.stars]);return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"amb-layer amb-time"},a.default.createElement("div",{className:"amb-ray"})),l.length>0&&a.default.createElement("div",{className:"amb-layer amb-stars"},l.map((s,u)=>a.default.createElement("span",{key:u,style:{left:s.left,top:s.top,animationDelay:s.delay,animationDuration:s.dur}}))),i.length>0&&a.default.createElement("div",{className:"amb-layer amb-dust"},i.map((s,u)=>a.default.createElement("span",{key:u,style:{left:s.left,bottom:"-6vh",width:s.size,height:s.size,animationDelay:s.delay,animationDuration:s.dur}}))),a.default.createElement("div",{className:"amb-layer amb-grain"}),r&&a.default.createElement("div",{className:"calm-breath"}))}),tp="tasksh.calm.v1";function c0(e){let[t,n]=(0,a.useState)(()=>{try{return localStorage.getItem(np)||Sa}catch{return Sa}}),[r,o]=(0,a.useState)(()=>{try{return localStorage.getItem(tp)==="1"}catch{return!1}}),[i,l]=(0,a.useState)(()=>ep(Yr().hour)),s=(0,a.useMemo)(()=>d0(t),[t]);(0,a.useEffect)(()=>{!ns(s,e)&&s.id!==Sa&&n(Sa)},[s,e]),(0,a.useEffect)(()=>{p0(s);try{localStorage.setItem(np,s.id)}catch{}},[s]),(0,a.useEffect)(()=>{s0(i)},[i]),(0,a.useEffect)(()=>{let c=setInterval(()=>{let p=ep(Yr().hour);l(g=>g.id===p.id?g:p)},12e4);return()=>clearInterval(c)},[]),(0,a.useEffect)(()=>{let c=document.documentElement;c.style.setProperty("--calm",r?"1":"0"),c.style.setProperty("--motion-scale",r?"1.9":"1"),c.classList.toggle("calm-mode",r);try{localStorage.setItem(tp,r?"1":"0")}catch{}},[r]);let u=(0,a.useMemo)(()=>za.filter(c=>ns(c,e)),[e]);return{theme:s,themeId:t,setThemeId:n,themes:za,unlocked:u,phase:i,calm:r,setCalm:o}}var Sa="terminal",np="tasksh.theme.v1";function d0(e){return za.find(t=>t.id===e)||za[0]}function ns(e,t){return t>=e.unlockLevel}function p0(e){let t=document.documentElement,n=e.colors;t.style.setProperty("--bg",n.bg),t.style.setProperty("--panel",n.panel),t.style.setProperty("--track",n.track),t.style.setProperty("--border",n.border),t.style.setProperty("--text",n.text),t.style.setProperty("--muted",n.muted),t.style.setProperty("--accent",n.accent),t.style.setProperty("--accent2",n.accent2),t.style.setProperty("--danger",n.danger),t.style.setProperty("--glow",n.glow),e.ambient.blobs.forEach((o,i)=>{t.style.setProperty(`--blob${i+1}`,`radial-gradient(${o[0]}, ${o[1]}, transparent 70%)`)}),t.style.setProperty("--grain-opacity",String(e.ambient.grain));let r=document.querySelector('meta[name="theme-color"]');r&&r.setAttribute("content",n.bg)}var yp="tasksh.sound.v1",Xr=null;function f0(){if(!Xr){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;Xr=new e}return Xr.state==="suspended"&&Xr.resume(),Xr}function xp(){try{let e=localStorage.getItem(yp);return e===null?!0:e==="1"}catch{return!0}}function m0(e){try{localStorage.setItem(yp,e?"1":"0")}catch{}}function vn(e){if(!xp())return;let t=f0();if(!t)return;let n=t.currentTime;e.forEach(({freq:r,start:o=0,dur:i=.08,type:l="sine",gain:s=.05})=>{let u=t.createOscillator(),c=t.createGain();u.type=l,u.frequency.setValueAtTime(r,n+o),c.gain.setValueAtTime(1e-4,n+o),c.gain.exponentialRampToValueAtTime(s,n+o+.008),c.gain.exponentialRampToValueAtTime(1e-4,n+o+i),u.connect(c),c.connect(t.destination),u.start(n+o),u.stop(n+o+i+.02)})}var B={click:()=>vn([{freq:720,dur:.045,type:"sine",gain:.035}]),toggle:()=>vn([{freq:560,dur:.06,type:"sine",gain:.04}]),success:()=>vn([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>vn([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),whoosh:()=>vn([{freq:340,dur:.07,type:"triangle",gain:.025}]),delete:()=>vn([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}])};function h0(){let[e,t]=(0,a.useState)(xp());return[e,()=>{let r=!e;t(r),m0(r),r&&vn([{freq:720,dur:.05,gain:.04}])}]}function g0(e,t=550){let[n,r]=(0,a.useState)(e),o=(0,a.useRef)(e),i=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let l=o.current,s=e;if(l===s)return;let u=performance.now(),c=g=>1-Math.pow(1-g,3),p=g=>{let h=g-u,v=Math.min(1,h/t),k=c(v);r(Math.round(l+(s-l)*k)),v<1?i.current=requestAnimationFrame(p):o.current=s};return i.current=requestAnimationFrame(p),()=>i.current&&cancelAnimationFrame(i.current)},[e,t]),n}function Nt({value:e,className:t,suffix:n=""}){let r=g0(e);return a.default.createElement("span",{className:t},r,n)}function v0({axes:e,size:t=220,maxValue:n}){let[r,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let N=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(N)},[]);let i=e.length,l=t/2,s=t/2,u=t/2-(e.length>6?46:34),c=n??Math.max(1,...e.map(N=>N.value)),p=N=>Math.PI*2*N/i-Math.PI/2,g=(N,f)=>{let d=p(N);return[l+Math.cos(d)*u*f,s+Math.sin(d)*u*f]},h=i>6?46:22,v=[.25,.5,.75,1],y=e.map((N,f)=>g(f,r?Math.max(.04,N.value/c):.02)).map((N,f)=>`${f===0?"M":"L"}${N[0].toFixed(1)},${N[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("svg",{viewBox:`${-h} 0 ${t+h*2} ${t}`,width:"100%",height:t,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},v.map((N,f)=>{let m=e.map((x,w)=>g(w,N)).map((x,w)=>`${w===0?"M":"L"}${x[0].toFixed(1)},${x[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("path",{key:f,d:m,className:"radar-ring"})}),e.map((N,f)=>{let d=g(f,1);return a.default.createElement("line",{key:f,x1:l,y1:s,x2:d[0],y2:d[1],className:"radar-spoke"})}),a.default.createElement("path",{d:y,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),e.map((N,f)=>{let d=g(f,1.19),m=g(f,r?Math.max(.04,N.value/c):.02),x=Math.cos(p(f)),w=x>.25?"start":x<-.25?"end":"middle";return a.default.createElement("g",{key:N.key||f},a.default.createElement("circle",{cx:m[0],cy:m[1],r:i>6?2.8:3.5,fill:N.color||"#5EEAD4",style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1)"}}),a.default.createElement("text",{x:d[0],y:d[1],textAnchor:w,dominantBaseline:"middle",className:"radar-label"},N.label))}))}function as({pct:e,size:t=108,stroke:n=9,color:r="#5EEAD4",trackColor:o="#1E2228",label:i,sublabel:l}){let[s,u]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let y=requestAnimationFrame(()=>u(!0));return()=>cancelAnimationFrame(y)},[]);let c=t/2-n,p=2*Math.PI*c,g=Math.max(0,Math.min(100,e)),h=p-(s?g/100:0)*p,v=Math.max(8,Math.round(t*.135)),k=Math.max(6.5,Math.round(t*.075));return a.default.createElement("div",{className:"radial-progress-wrap",style:{width:t,height:t}},a.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},a.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:o,strokeWidth:n}),a.default.createElement("circle",{cx:t/2,cy:t/2,r:c,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:p,strokeDashoffset:h,transform:`rotate(-90 ${t/2} ${t/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),a.default.createElement("div",{className:"radial-progress-center"},i&&a.default.createElement("span",{className:"radial-progress-label",style:{fontSize:v}},i),l&&a.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:k}},l)))}function kp({segments:e,size:t=132,stroke:n=18,centerLabel:r,centerSublabel:o}){let[i,l]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let h=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(h)},[]);let s=t/2-n/2,u=2*Math.PI*s,c=Math.max(1e-6,e.reduce((h,v)=>h+Math.max(0,v.value),0)),p=0,g=e.map(h=>{let v=Math.max(0,h.value),k=v/c,y=i?k*u:0,N=u-y,f=p/c*360;return p+=v,{...h,dash:y,gap:N,rotation:f,frac:k}});return a.default.createElement("div",{className:"donut-wrap",style:{width:t,height:t}},a.default.createElement("svg",{viewBox:`0 0 ${t} ${t}`,width:t,height:t},a.default.createElement("circle",{cx:t/2,cy:t/2,r:s,fill:"none",stroke:"#1E2228",strokeWidth:n}),g.map((h,v)=>a.default.createElement("circle",{key:h.key||v,cx:t/2,cy:t/2,r:s,fill:"none",stroke:h.color,strokeWidth:n,strokeDasharray:`${h.dash} ${h.gap}`,strokeDashoffset:0,transform:`rotate(${h.rotation-90} ${t/2} ${t/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:g.length>1?"butt":"round"}))),a.default.createElement("div",{className:"donut-center"},r!==void 0&&a.default.createElement("span",{className:"donut-center-label"},r),o&&a.default.createElement("span",{className:"donut-center-sublabel"},o)))}function y0({counts:e,weeksBack:t=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],o=0,i=t*7,l=Array.from({length:i},(p,g)=>o-(i-1-g)),s=Math.max(1,...l.map(p=>e[$(p)]||0)),u=[];for(let p=0;p<t;p++)u.push(l.slice(p*7,p*7+7));let c=p=>{if(!p)return 0;let g=p/s;return g>.75?4:g>.5?3:g>.25?2:1};return a.default.createElement("div",{className:"heatmap-wrap"},a.default.createElement("div",{className:"heatmap-grid"},u.map((p,g)=>a.default.createElement("div",{className:"heatmap-col",key:g},p.map((h,v)=>{let k=$(h),y=e[k]||0,N=c(y);return a.default.createElement("span",{key:v,className:`heatmap-cell ${h===0?"today":""}`,style:{background:r[N],animationDelay:`${(g*7+v)*4}ms`},title:`${k}: ${y} completed`})})))),a.default.createElement("div",{className:"heatmap-legend"},a.default.createElement("span",null,"less"),r.map((p,g)=>a.default.createElement("span",{key:g,className:"heatmap-legend-cell",style:{background:p}})),a.default.createElement("span",null,"more")))}function x0(e){let t=[],n=[];for(let r of e){let o=t.findIndex(i=>r.start>=i);o===-1?(o=t.length,t.push(r.end)):t[o]=r.end,n.push({...r,lane:o})}return{placed:n,laneCount:Math.max(1,t.length)}}function k0({routines:e,nowMinutes:t,doneToday:n=0}){let[r,o]=(0,a.useState)(!1),[i,l]=(0,a.useState)(0),[s,u]=(0,a.useState)(0),c=(0,a.useRef)(null),p=(0,a.useRef)(!1);(0,a.useEffect)(()=>{let M=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(M)},[]),(0,a.useEffect)(()=>{if(!c.current)return;let M=c.current,L=new ResizeObserver(G=>{for(let se of G)l(se.contentRect.width)});return L.observe(M),l(M.getBoundingClientRect().width),()=>L.disconnect()},[]);let g=1440,h=$(0),v=e.map(M=>{let L=Ye(M.time);return{r:M,start:L,end:L+Math.max(1,M.duration)}}),{placed:k,laneCount:y}=x0(v),f=Math.max(i,24*82),d=f/g,m=f>i+1,x=t*d;(0,a.useEffect)(()=>{if(!c.current||!i||p.current)return;if(!m){p.current=!0;return}let M=c.current,L=Math.max(0,Math.min(x-i/2,f-i));M.scrollTo({left:L,behavior:"auto"}),p.current=!0},[i,x,f,m]),(0,a.useEffect)(()=>{let M=c.current;if(!M)return;let L=0,G=()=>{L||(L=requestAnimationFrame(()=>{u(M.scrollLeft),L=0}))};return M.addEventListener("scroll",G,{passive:!0}),u(M.scrollLeft),()=>{M.removeEventListener("scroll",G),cancelAnimationFrame(L)}},[i]);let w=()=>{let M=c.current;M&&(M.scrollTo({left:Math.max(0,Math.min(x-i/2,f-i)),behavior:"smooth"}),B.click())},b=38,E=6,z=8,I=z*2+y*b+(y-1)*E,A=d*60>=40?1:3,P=[];for(let M=0;M<=24;M+=A)P.push(M);let O=M=>{let L=M%24;return L===0?"12a":L===12?"12p":L>12?`${L-12}p`:`${L}a`},S=e.length,F=S?Math.round(n/S*100):0;return a.default.createElement("div",{className:"timeline-wrap"},a.default.createElement("div",{className:"timeline-head"},a.default.createElement("div",{className:"timeline-head-left"},a.default.createElement("span",{className:"timeline-title"},"today's schedule"),S>0&&a.default.createElement("span",{className:"timeline-count"},n,"/",S," done")),m&&a.default.createElement("button",{className:"timeline-jump",onClick:w,title:"Jump to now"},"now")),S>0&&a.default.createElement("div",{className:"timeline-progress"},a.default.createElement("div",{className:"timeline-progress-fill",style:{width:r?`${F}%`:"0%"}})),a.default.createElement("div",{className:"timeline-scroll",ref:c},a.default.createElement("div",{className:"timeline-inner",style:{width:f}},a.default.createElement("div",{className:"timeline-hours"},P.map(M=>a.default.createElement("div",{key:M,className:"timeline-hour",style:{left:M*60*d}},a.default.createElement("span",null,O(M))))),a.default.createElement("div",{className:"timeline-track",style:{height:I}},a.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*d}}),a.default.createElement("div",{className:"timeline-night",style:{left:1320*d,width:120*d}}),P.map(M=>a.default.createElement("div",{key:M,className:`timeline-gridline ${M%6===0?"major":""}`,style:{left:M*60*d}})),a.default.createElement("div",{className:"timeline-elapsed",style:{width:r?x:0}}),k.map(({r:M,start:L,lane:G},se)=>{let H=L*d,oe=Math.max(1,M.duration)*d,he=Math.max(4,Math.min(oe,f-H)),Ee=(M.history||[]).includes(h),Ct=Zn(M.id),Mt=Math.max(H,s),de=Math.min(H+he,s+i),j=Math.max(0,de-Mt)>38,ne=Math.max(0,Math.min(s-H,he-46)),J=t>=L&&t<L+M.duration;return a.default.createElement("div",{key:M.id,className:`timeline-block ${Ee?"done":""} ${J?"active":""}`,style:{left:H,top:z+G*(b+E),width:r?he:0,height:b,transitionDelay:`${Math.min(se*18,260)}ms`,background:Ee?"linear-gradient(180deg, #2E343C, #23282F)":`linear-gradient(180deg, ${Ct}, ${Ct}C4)`,boxShadow:Ee?"none":`0 2px 10px ${Ct}44`},title:`${M.label} \xB7 ${St(L)} \xB7 ${Et(M.duration)}${Ee?" \xB7 done":""}`},j&&a.default.createElement("span",{className:"timeline-block-label",style:ne>0?{paddingLeft:ne+8}:void 0},Ee&&a.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),M.label))}),a.default.createElement("div",{className:"timeline-now",style:{left:x}})))),m&&a.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var w0=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[$(-1),$(-2),$(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[$(-1),$(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[$(0),$(-1),$(-2),$(-3),$(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[$(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function is(){let[e,t]=(0,a.useState)(Yr());return(0,a.useEffect)(()=>{let n=setInterval(()=>t(Yr()),1e3);return()=>clearInterval(n)},[]),e}function ls(e,t){return(0,a.useMemo)(()=>{let n=[...e].sort((i,l)=>Ye(i.time)-Ye(l.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let i=0;i<n.length&&Ye(n[i].time)<=t;i++)r=i;let o=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[o].id}},[e,t])}function b0({routine:e,status:t,index:n,onDelete:r,onToggleToday:o,onSave:i}){let l=Ye(e.time),s=l+e.duration,{streak:u,freezeUsed:c}=_a(e.history),p=(e.history||[]).includes($(0)),[g,h]=(0,a.useState)(0),v=(0,a.useRef)(!1),k=(0,a.useRef)(0),y=(0,a.useRef)(0),N=(0,a.useRef)(null),f=(0,a.useRef)(!1),[d,m]=(0,a.useState)(!1),[x,w]=(0,a.useState)(!1),[b,E]=(0,a.useState)(e.label),[z,I]=(0,a.useState)(e.time),[A,P]=(0,a.useState)(e.duration),[O,S]=(0,a.useState)(e.alternatives||[]),F=()=>{E(e.label),I(e.time),P(e.duration),S(e.alternatives||[]),w(!0)},M=()=>{let H=b.trim();H&&(i(e.id,{label:H,time:z||e.time,duration:Math.max(5,+A||e.duration),alternatives:O.map(oe=>oe.trim()).filter(Boolean)}),w(!1))},L=H=>{x||(v.current=!0,f.current=!1,N.current=null,k.current=H.clientX,y.current=H.clientY)},G=H=>{if(!v.current)return;let oe=H.clientX-k.current,he=H.clientY-y.current;if(N.current===null){if(Math.abs(oe)<6&&Math.abs(he)<6)return;if(N.current=Math.abs(oe)>Math.abs(he)?"x":"y",N.current==="y"){v.current=!1;return}}N.current==="x"&&(Math.abs(oe)>4&&(f.current=!0),h(Math.max(-120,Math.min(0,oe))))},se=()=>{v.current&&(v.current=!1,g<-70?(m(!0),setTimeout(()=>r(e.id),200)):(h(0),f.current||F()))};return a.default.createElement("div",{className:`routine-row-wrap ${d?"removing":""}`,style:{animationDelay:`${n*35}ms`}},a.default.createElement("div",{className:"routine-delete-bg"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),a.default.createElement("div",{className:`routine-row ${t}`,style:{transform:`translateX(${g}px)`,transition:v.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",borderLeft:`3px solid ${p?"#2A2F36":Zn(e.id)}`},onPointerDown:L,onPointerMove:G,onPointerUp:se,onPointerLeave:se,onPointerCancel:se},a.default.createElement("div",{className:"routine-line"},a.default.createElement("span",{className:`routine-node ${p?"quest-done":""}`}),a.default.createElement("span",{className:"routine-connector"})),x?a.default.createElement("div",{className:"routine-edit",onPointerDown:H=>H.stopPropagation()},a.default.createElement("input",{className:"edit-label",value:b,onChange:H=>E(H.target.value),onKeyDown:H=>H.key==="Enter"&&M(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"time",className:"time-input",value:z,onChange:H=>I(H.target.value)}),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:A,onChange:H=>P(H.target.value)}),a.default.createElement("span",{className:"edit-unit"},"min")),a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),O.map((H,oe)=>a.default.createElement("div",{className:"alt-composer-row",key:oe},a.default.createElement("input",{type:"text",placeholder:`alternative ${oe+1}`,value:H,onChange:he=>{let Ee=[...O];Ee[oe]=he.target.value,S(Ee)},onKeyDown:he=>he.key==="Enter"&&M()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>S(O.filter((he,Ee)=>Ee!==oe)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>S([...O,""])},"+ another option")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>w(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:M},"save"))):a.default.createElement("div",{className:"routine-main"},a.default.createElement("div",{className:"routine-top"},a.default.createElement("span",{className:"routine-time"},St(l)),t==="current"&&a.default.createElement("span",{className:"live-tag"},"NOW"),u>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",u,c&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("span",{className:"routine-label"},e.label),e.alternatives&&e.alternatives.length>0&&a.default.createElement("span",{className:"routine-alts"},"or: ",e.alternatives.join(" \xB7 ")),a.default.createElement("span",{className:"routine-span"},St(l)," \u2013 ",St(s)," \xB7 ",Et(e.duration)))))}function N0({routines:e,setRoutines:t}){let n=is(),r=n.hour*60+n.minute,{sorted:o,currentId:i,nextId:l}=ls(e,r),s=o.find(S=>S.id===i),u=o.find(S=>S.id===l),[c,p]=(0,a.useState)(""),[g,h]=(0,a.useState)(()=>Ql(r)),[v,k]=(0,a.useState)(30),[y,N]=(0,a.useState)(!1),[f,d]=(0,a.useState)([]),[m,x]=(0,a.useState)(!1),w=()=>{let S=c.trim();if(!S){N(!0),setTimeout(()=>N(!1),420),B.error();return}let F=g||Ql(r),M=f.map(L=>L.trim()).filter(Boolean);t(L=>[...L,{id:me(),time:F,label:S,duration:Math.max(5,+v||30),history:[],alternatives:M}]),p(""),h(Ql(r)),k(30),d([]),x(!1),B.click()},b=S=>{t(F=>F.filter(M=>M.id!==S)),B.delete()},E=S=>{let F=$(0),M=!(e.find(L=>L.id===S)?.history||[]).includes(F);t(L=>L.map(G=>{if(G.id!==S)return G;let H=(G.history||[]).includes(F)?G.history.filter(oe=>oe!==F):[...G.history||[],F];return{...G,history:H.slice(-60)}})),M?(B.success(),Rt.emit("routineDone")):B.click()},z=(S,F)=>t(M=>M.map(L=>L.id===S?{...L,...F}:L)),I=s?Ye(s.time)+s.duration:0,A=u?(Ye(u.time)-r+1440)%1440||1440:0,P=$(0),O=o.filter(S=>(S.history||[]).includes(P)).length;return a.default.createElement("div",{className:"task-list routine-list"},a.default.createElement("div",{className:"hero-card"},a.default.createElement("div",{className:"hero-clock-row"},a.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),a.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),a.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),a.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),a.default.createElement("span",{className:"hero-date"},e0()),a.default.createElement("div",{className:"hero-divider"}),s?a.default.createElement("div",{className:"hero-current"},a.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),a.default.createElement("div",{className:"hero-current-name"},a.default.createElement("span",{className:"pulse-dot"}),s.label),a.default.createElement("span",{className:"hero-sub"},"until ",St(I)," \xB7 next: ",u?.label," in ",Et(A))):a.default.createElement("span",{className:"hero-sub"},"no routines yet")),a.default.createElement(k0,{routines:o,nowMinutes:r,doneToday:O}),a.default.createElement("div",{className:`composer ${y?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new routine...",value:c,onChange:S=>p(S.target.value),onKeyDown:S=>S.key==="Enter"&&w()}),a.default.createElement("input",{type:"time",className:"time-input",value:g,onChange:S=>h(S.target.value)}),a.default.createElement("button",{type:"button",className:`alt-toggle-btn ${m?"active":""}`,onClick:()=>x(S=>!S),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),a.default.createElement("button",{className:"add-btn",onClick:w,"aria-label":"Add routine"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),m&&a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),f.map((S,F)=>a.default.createElement("div",{className:"alt-composer-row",key:F},a.default.createElement("input",{type:"text",placeholder:`alternative ${F+1}, e.g. "Drawing"`,value:S,onChange:M=>{let L=[...f];L[F]=M.target.value,d(L)},onKeyDown:M=>M.key==="Enter"&&w()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>d(f.filter((M,L)=>L!==F)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>d([...f,""])},"+ another option")),a.default.createElement("div",{className:"duration-chips"},n0.map(S=>a.default.createElement("button",{key:S,className:v===S?"active":"",onClick:()=>k(S)},Et(S))),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:v,onChange:S=>k(+S.target.value||5)})),o.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):o.map((S,F)=>a.default.createElement(b0,{key:S.id,routine:S,index:F,status:S.id===i?"current":S.id===l?"next":"idle",onDelete:b,onToggleToday:E,onSave:z})))}function S0(){let e=new Date,t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e),n=+t.find(l=>l.type==="year").value,r=+t.find(l=>l.type==="month").value,o=new Date(n,r,0).getDate(),i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",month:"short",year:"numeric"}).format(e);return{y:n,m:r,daysInMonth:o,monthLabel:i}}function E0(e,t,n){return`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`}function wp(e){let t=new Set(e||[]),n=0;for(let r=-6;r<=0;r++)t.has($(r))&&n++;return n}function C0(e){if(!e)return null;let t=new Date(e+"T00:00:00+05:30"),n=new Date($(0)+"T00:00:00+05:30"),r=Math.round((t-n)/864e5);return r<0?{text:`${Math.abs(r)}d overdue`,overdue:!0}:r===0?{text:"due today",overdue:!1}:{text:`${r}d to go`,overdue:!1}}var M0=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[$(0),$(-1),$(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[$(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[$(0)]}],z0=[{id:1,name:"Notion Template",dueDate:$(7),tasks:[{id:me(),text:"Design layout",done:!0},{id:me(),text:"Write docs",done:!1},{id:me(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:$(7),tasks:[{id:me(),text:"Script draft",done:!1},{id:me(),text:"Record",done:!1}]}];function _0({history:e}){let{y:t,m:n,daysInMonth:r,monthLabel:o}=S0(),i=new Set(e||[]),l=$(0),s=Array.from({length:r},(u,c)=>c+1);return a.default.createElement("div",{className:"month-grid-wrap"},a.default.createElement("span",{className:"month-grid-label"},o),a.default.createElement("div",{className:"month-grid"},s.map(u=>{let c=E0(t,n,u);return a.default.createElement("span",{key:u,className:`month-cell ${i.has(c)?"filled":""} ${c===l?"today":""}`,style:{animationDelay:`${u*6}ms`},title:c})})))}function T0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes($(0)),{streak:i,freezeUsed:l}=_a(e.history),s=wp(e.history),u=Math.min(100,Math.round(s/e.weeklyGoal*100)),[c,p]=(0,a.useState)(!1),[g,h]=(0,a.useState)(e.icon),[v,k]=(0,a.useState)(e.label),[y,N]=(0,a.useState)(e.weeklyGoal),f=()=>{h(e.icon),k(e.label),N(e.weeklyGoal),p(!0)},d=()=>{let m=v.trim();m&&(r(e.id,{icon:g.trim()||e.icon,label:m,weeklyGoal:Math.max(1,Math.min(7,+y||e.weeklyGoal))}),p(!1))};return c?a.default.createElement("div",{className:"vault-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{className:"duration-input",style:{width:44},value:g,onChange:m=>h(m.target.value),maxLength:2}),a.default.createElement("input",{className:"edit-label",style:{flex:1},value:v,onChange:m=>k(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),autoFocus:!0})),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",max:"7",className:"duration-input",value:y,onChange:m=>N(m.target.value)}),a.default.createElement("span",{className:"edit-unit"},"x / week")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>p(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:d},"save")))):a.default.createElement("div",{className:"vault-card",style:{borderLeft:`3px solid ${Zn(e.id)}`}},a.default.createElement("div",{className:"vault-card-top"},a.default.createElement("span",{className:"vault-card-icon",style:{color:Zn(e.id)}},e.icon),a.default.createElement("div",{className:"vault-card-title"},a.default.createElement("span",{className:"vault-card-label"},e.label),a.default.createElement("span",{className:"vault-card-goal"},"weekly: ",e.weeklyGoal,"x")),a.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))),a.default.createElement(_0,{history:e.history}),a.default.createElement("div",{className:"vault-card-bottom"},a.default.createElement("div",{className:"vault-card-ring-row"},a.default.createElement(as,{pct:u,size:34,stroke:3.5,color:Zn(e.id)}),a.default.createElement("span",{className:"vault-card-pct"},u,"% ",a.default.createElement("span",{className:"muted"},"(",s,"/",e.weeklyGoal,")"))),i>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",i,l&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("button",{className:`vault-check ${o?"done":""}`,onClick:()=>t(e.id)},o?"\u2713 completed today":"mark complete today"))}function P0({habits:e,setHabits:t}){let[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(7),[l,s]=(0,a.useState)(!1),u=()=>{let h=n.trim();if(!h){s(!0),setTimeout(()=>s(!1),420),B.error();return}t(v=>[...v,{id:me(),icon:"\u25C6",label:h,weeklyGoal:o,history:[]}]),r(""),i(7),B.click()},c=h=>{t(v=>v.filter(k=>k.id!==h)),B.delete()},p=(h,v)=>t(k=>k.map(y=>y.id===h?{...y,...v}:y)),g=h=>{let v=$(0),k=!(e.find(y=>y.id===h)?.history||[]).includes(v);t(y=>y.map(N=>{if(N.id!==h)return N;let d=(N.history||[]).includes(v)?N.history.filter(m=>m!==v):[...N.history||[],v];return{...N,history:d.slice(-370)}})),k?(B.success(),Rt.emit("vaultDone")):B.click()};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"HABIT-STREAK-TRACKING")),a.default.createElement("div",{className:"vault-grid"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no habits yet \u2014 add your first")):e.map(h=>a.default.createElement(T0,{key:h.id,habit:h,onToggleToday:g,onDelete:c,onSave:p}))),a.default.createElement("div",{className:`composer ${l?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new habit...",value:n,onChange:h=>r(h.target.value),onKeyDown:h=>h.key==="Enter"&&u()}),a.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},[3,4,5,6,7].map(h=>a.default.createElement("button",{key:h,className:o===h?"active":"",onClick:()=>i(h)},h,"x/wk"))))}function D0({projectId:e,task:t,onToggle:n,onDelete:r,onEdit:o}){let[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(t.text),c=()=>{let p=s.trim();p&&o(e,t.id,p),l(!1)};return i?a.default.createElement("div",{className:"project-task-row"},a.default.createElement("input",{className:"project-task-edit",value:s,onChange:p=>u(p.target.value),onKeyDown:p=>p.key==="Enter"&&c(),onBlur:c,autoFocus:!0})):a.default.createElement("div",{className:"project-task-row"},a.default.createElement(Sp,{checked:t.done,onChange:()=>n(e,t.id),color:"#5EEAD4"}),a.default.createElement("span",{className:`project-task-text ${t.done?"done":""}`,onClick:()=>l(!0)},t.text),a.default.createElement("button",{className:"del-btn",onClick:()=>r(e,t.id),"aria-label":"Delete task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function L0({project:e,onDelete:t,onAddTask:n,onToggleTask:r,onDeleteTask:o,onEditTask:i,onSave:l}){let[s,u]=(0,a.useState)(""),c=e.tasks.length,p=e.tasks.filter(b=>b.done).length,g=c?Math.round(p/c*100):0,h=C0(e.dueDate),[v,k]=(0,a.useState)(!1),[y,N]=(0,a.useState)(e.name),[f,d]=(0,a.useState)(e.dueDate||""),m=()=>{let b=s.trim();b&&(n(e.id,b),u(""))},x=()=>{N(e.name),d(e.dueDate||""),k(!0)},w=()=>{let b=y.trim();b&&(l(e.id,{name:b,dueDate:f||null}),k(!1))};return v?a.default.createElement("div",{className:"project-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:y,onChange:b=>N(b.target.value),onKeyDown:b=>b.key==="Enter"&&w(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"date",className:"time-input",value:f,onChange:b=>d(b.target.value)})),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>k(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:w},"save")))):a.default.createElement("div",{className:"project-card",style:{borderLeft:`3px solid ${Zn(e.id)}`}},a.default.createElement("div",{className:"project-card-top"},a.default.createElement("span",{className:"project-name"},e.name),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:x,"aria-label":"Edit project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>t(e.id),"aria-label":"Delete project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),h&&a.default.createElement("span",{className:`project-due ${h.overdue?"overdue":""}`},h.text),a.default.createElement("div",{className:"progress-track small"},a.default.createElement("div",{className:"progress-fill",style:{width:`${g}%`}})),a.default.createElement("span",{className:"vault-card-pct"},p,"/",c," tasks \xB7 ",g,"%"),a.default.createElement("div",{className:"project-tasks"},e.tasks.map(b=>a.default.createElement(D0,{key:b.id,projectId:e.id,task:b,onToggle:r,onDelete:o,onEdit:i}))),a.default.createElement("div",{className:"project-add-task"},a.default.createElement("input",{type:"text",placeholder:"+ add task...",value:s,onChange:b=>u(b.target.value),onKeyDown:b=>b.key==="Enter"&&m()})))}function A0({projects:e,setProjects:t}){let[n,r]=(0,a.useState)(""),[o,i]=(0,a.useState)(""),[l,s]=(0,a.useState)(!1),u=()=>{let y=n.trim();if(!y){s(!0),setTimeout(()=>s(!1),420),B.error();return}t(N=>[...N,{id:me(),name:y,dueDate:o||null,tasks:[]}]),r(""),i(""),B.click()},c=y=>{t(N=>N.filter(f=>f.id!==y)),B.delete()},p=(y,N)=>t(f=>f.map(d=>d.id===y?{...d,...N}:d)),g=(y,N)=>{t(f=>f.map(d=>d.id===y?{...d,tasks:[...d.tasks,{id:me(),text:N,done:!1}]}:d)),B.click()},h=(y,N)=>{t(f=>f.map(d=>d.id!==y?d:{...d,tasks:d.tasks.map(m=>m.id===N?{...m,done:!m.done}:m)})),B.success()},v=(y,N)=>{t(f=>f.map(d=>d.id!==y?d:{...d,tasks:d.tasks.filter(m=>m.id!==N)})),B.delete()},k=(y,N,f)=>t(d=>d.map(m=>m.id!==y?m:{...m,tasks:m.tasks.map(x=>x.id===N?{...x,text:f}:x)}));return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"PROJECT-MANAGER")),a.default.createElement("div",{className:"vault-grid"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no projects yet")):e.map(y=>a.default.createElement(L0,{key:y.id,project:y,onDelete:c,onAddTask:g,onToggleTask:h,onDeleteTask:v,onEditTask:k,onSave:p}))),a.default.createElement("div",{className:`composer ${l?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new project...",value:n,onChange:y=>r(y.target.value),onKeyDown:y=>y.key==="Enter"&&u()}),a.default.createElement("input",{type:"date",className:"time-input",value:o,onChange:y=>i(y.target.value)}),a.default.createElement("button",{className:"add-btn",onClick:u,"aria-label":"Add project"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}function F0({vaultHabits:e,setVaultHabits:t,projects:n,setProjects:r}){return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement(P0,{habits:e,setHabits:t}),a.default.createElement(A0,{projects:n,setProjects:r}))}var dt=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"fitness",label:"Fitness",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self-Dev",color:"#8B9CF7"}],ss=[{key:"deep",area:"work",label:"Deep Work"},{key:"admin",area:"work",label:"Admin"},{key:"learning",area:"work",label:"Learning"},{key:"training",area:"fitness",label:"Training"},{key:"movement",area:"fitness",label:"Movement"},{key:"nutrition",area:"health",label:"Nutrition"},{key:"sleep",area:"health",label:"Sleep"},{key:"mind",area:"health",label:"Mind"},{key:"creative",area:"self",label:"Creative"},{key:"social",area:"self",label:"Social"}],Qr=dt.reduce((e,t)=>(e[t.key]=ss.filter(n=>n.area===t.key),e),{});function rp(e){return ss.find(t=>t.key===e)||null}function Rn(e){if(e.sub&&rp(e.sub)&&rp(e.sub).area===e.area)return e.sub;let t=Qr[e.area];return t&&t.length?t[0].key:null}function B0(e,t,n){let r=t.filter(i=>Rn(i)===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0),o=n.filter(i=>Rn(i)===e).reduce((i,l)=>i+l.xp*(l.history?.length||0),0);return r-o}var op=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EE787","#F778BA","#79C0FF","#E3B341"];function Zn(e){let t=typeof e=="number"?e:String(e).split("").reduce((n,r)=>n+r.charCodeAt(0),0);return op[Math.abs(t)%op.length]}var Gr=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"];function bp(e,t,n){let r=e.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),o=t.reduce((l,s)=>l+s.xp*(s.history?.length||0),0),i=n.reduce((l,s)=>l+s.cost*(s.claimed?.length||0),0);return r-o-i}function xn(e){return 12.5*(e-1)*(e+6)}function Np(e){let t=Math.max(0,e),n=Math.max(1,Math.floor((-5+Math.sqrt(49+.32*t))/2)),r=t-xn(n),o=xn(n+1)-xn(n);return{level:n,into:r,span:o}}function I0(e){let t=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=e,r="";for(let[o,i]of t)for(;n>=o;)r+=i,n-=o;return r}function $0(e){if(e<=Gr.length)return Gr[e-1];let t=e-Gr.length+1;return`${Gr[Gr.length-1]} ${I0(t)}`}var O0=[{id:1,label:"Deep Work",area:"work",xp:40,history:[$(0),$(-1)]},{id:2,label:"Workout",area:"fitness",xp:20,history:[$(-1)]},{id:3,label:"Healthy Diet",area:"health",xp:10,history:[]},{id:4,label:"Reading",area:"self",xp:10,history:[]}],j0=[{id:1,label:"High Screen Time",area:"self",xp:20,history:[]},{id:2,label:"Junk Food",area:"health",xp:20,history:[]}],U0=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function W0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes($(0)),[i,l]=(0,a.useState)(0),s=()=>{o||l(E=>E+1)},{streak:u,freezeUsed:c}=_a(e.history),p=dt.find(E=>E.key===e.area)||dt[0],[g,h]=(0,a.useState)(!1),[v,k]=(0,a.useState)(e.label),[y,N]=(0,a.useState)(e.area),[f,d]=(0,a.useState)(()=>Rn(e)),[m,x]=(0,a.useState)(e.xp),w=()=>{k(e.label),N(e.area),d(Rn(e)),x(e.xp),h(!0)},b=()=>{let E=v.trim();E&&(r(e.id,{label:E,area:y,sub:f,xp:Math.max(1,+m||e.xp)}),h(!1))};return g?a.default.createElement("div",{className:"quest-habit-card good editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:v,onChange:E=>k(E.target.value),onKeyDown:E=>E.key==="Enter"&&b(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},dt.map(E=>a.default.createElement("button",{key:E.key,type:"button",className:`area-chip ${y===E.key?"active":""}`,style:{"--ac":E.color},onClick:()=>{N(E.key);let z=Qr[E.key]||[];d(z.length?z[0].key:null)}},E.label))),a.default.createElement("div",{className:"edit-row edit-row-subs"},(Qr[y]||[]).map(E=>a.default.createElement("button",{key:E.key,type:"button",className:`sub-chip ${f===E.key?"active":""}`,onClick:()=>d(E.key)},E.label))),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:m,onChange:E=>x(E.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>h(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:b},"save")))):a.default.createElement("div",{className:`quest-habit-card good ${i?"just-completed":""}`,key:`g${e.id}`},i>0&&a.default.createElement("span",{className:"xp-pop",key:i},"+",e.xp),a.default.createElement("span",{className:"area-dot",style:{background:p.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},e.label),a.default.createElement("span",{className:"quest-habit-meta"},"+",e.xp," XP \xB7 ",p.label,u>0?` \xB7 \u{1F525}${u}${c?" \u2744\uFE0F":""}`:"")),a.default.createElement("button",{className:`quest-check ${o?"done":""}`,onClick:()=>{s(),t(e.id)},"aria-label":"Mark done today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:o?0:24,transition:"stroke-dashoffset 220ms ease"}}))),a.default.createElement("button",{className:"vault-card-edit",onClick:w,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function H0({habit:e,onToggleToday:t,onDelete:n,onSave:r}){let o=(e.history||[]).includes($(0)),i=dt.find(m=>m.key===e.area)||dt[0],l=wp(e.history),[s,u]=(0,a.useState)(!1),[c,p]=(0,a.useState)(e.label),[g,h]=(0,a.useState)(e.area),[v,k]=(0,a.useState)(()=>Rn(e)),[y,N]=(0,a.useState)(e.xp),f=()=>{p(e.label),h(e.area),k(Rn(e)),N(e.xp),u(!0)},d=()=>{let m=c.trim();m&&(r(e.id,{label:m,area:g,sub:v,xp:Math.max(1,+y||e.xp)}),u(!1))};return s?a.default.createElement("div",{className:"quest-habit-card bad editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:c,onChange:m=>p(m.target.value),onKeyDown:m=>m.key==="Enter"&&d(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},dt.map(m=>a.default.createElement("button",{key:m.key,type:"button",className:`area-chip ${g===m.key?"active":""}`,style:{"--ac":m.color},onClick:()=>{h(m.key);let x=Qr[m.key]||[];k(x.length?x[0].key:null)}},m.label))),a.default.createElement("div",{className:"edit-row edit-row-subs"},(Qr[g]||[]).map(m=>a.default.createElement("button",{key:m.key,type:"button",className:`sub-chip ${v===m.key?"active":""}`,onClick:()=>k(m.key)},m.label))),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"5",className:"duration-input",value:y,onChange:m=>N(m.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>u(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:d},"save")))):a.default.createElement("div",{className:"quest-habit-card bad"},a.default.createElement("span",{className:"area-dot",style:{background:i.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},e.label),a.default.createElement("span",{className:"quest-habit-meta"},"-",e.xp," XP \xB7 ",i.label," \xB7 ",l,"x this week")),a.default.createElement("button",{className:`quest-check bad-check ${o?"done":""}`,onClick:()=>t(e.id),"aria-label":"Log slip today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round"}))),a.default.createElement("button",{className:"vault-card-edit",onClick:f,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"del-btn",onClick:()=>n(e.id),"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}function V0({reward:e,canClaim:t,onClaim:n,onDelete:r,onSave:o}){let[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(e.label),[c,p]=(0,a.useState)(e.cost),g=()=>{u(e.label),p(e.cost),l(!0)},h=()=>{let v=s.trim();v&&(o(e.id,{label:v,cost:Math.max(1,+c||e.cost)}),l(!1))};return i?a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:s,onChange:v=>u(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:c,onChange:v=>p(v.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP cost")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>l(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:h},"save")))):a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"reward-top"},a.default.createElement("span",{className:"reward-label"},e.label),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:g,"aria-label":"Edit reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>r(e.id),"aria-label":"Delete reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),a.default.createElement("span",{className:"reward-cost"},e.cost," XP"),a.default.createElement("button",{className:"reward-claim",disabled:!t,onClick:()=>n(e.id)},t?"claim reward":"not enough XP"),e.claimed?.length>0&&a.default.createElement("span",{className:"reward-claimed-count"},"claimed ",e.claimed.length,"x"))}function J0({goodHabits:e,setGoodHabits:t,badHabits:n,setBadHabits:r,rewards:o,setRewards:i}){let l=(0,a.useMemo)(()=>bp(e,n,o),[e,n,o]),{level:s,into:u,span:c}=Np(l),p=Math.round(u/c*100),g=_=>{let j=$(0),ne=!(e.find(J=>J.id===_)?.history||[]).includes(j);t(J=>J.map(Ce=>{if(Ce.id!==_)return Ce;let wn=(Ce.history||[]).includes(j)?Ce.history.filter(_t=>_t!==j):[...Ce.history||[],j];return{...Ce,history:wn.slice(-370)}})),ne?(B.success(),Rt.emit("habitDone")):B.click()},h=_=>{let j=$(0),ne=!(n.find(J=>J.id===_)?.history||[]).includes(j);r(J=>J.map(Ce=>{if(Ce.id!==_)return Ce;let wn=(Ce.history||[]).includes(j)?Ce.history.filter(_t=>_t!==j):[...Ce.history||[],j];return{...Ce,history:wn.slice(-370)}})),ne?B.error():B.click()},v=_=>{t(j=>j.filter(ne=>ne.id!==_)),B.delete()},k=_=>{r(j=>j.filter(ne=>ne.id!==_)),B.delete()},y=(_,j)=>t(ne=>ne.map(J=>J.id===_?{...J,...j}:J)),N=(_,j)=>r(ne=>ne.map(J=>J.id===_?{...J,...j}:J)),f=_=>{let j=$(0);i(ne=>ne.map(J=>J.id===_?{...J,claimed:[...J.claimed||[],j]}:J)),B.success(),Rt.emit("rewardClaimed")},d=_=>{i(j=>j.filter(ne=>ne.id!==_)),B.delete()},m=(_,j)=>i(ne=>ne.map(J=>J.id===_?{...J,...j}:J)),[x,w]=(0,a.useState)(""),[b,E]=(0,a.useState)("work"),[z,I]=(0,a.useState)(20),[A,P]=(0,a.useState)(""),[O,S]=(0,a.useState)("work"),[F,M]=(0,a.useState)(20),[L,G]=(0,a.useState)(""),[se,H]=(0,a.useState)(100),oe=()=>{let _=x.trim();_&&(t(j=>[...j,{id:me(),label:_,area:b,xp:+z||10,history:[]}]),w(""),B.click())},he=()=>{let _=A.trim();_&&(r(j=>[...j,{id:me(),label:_,area:O,xp:+F||10,history:[]}]),P(""),B.click())},Ee=()=>{let _=L.trim();_&&(i(j=>[...j,{id:me(),label:_,cost:+se||50,claimed:[]}]),G(""),B.click())},Ct=ss.map(_=>({key:_.key,label:_.label,color:(dt.find(j=>j.key===_.area)||{}).color,value:Math.max(0,B0(_.key,e,n))})),Mt=e.reduce((_,j)=>_+j.xp*(j.history?.length||0),0),de=n.reduce((_,j)=>_+j.xp*(j.history?.length||0),0);return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"hero-card hero-card-viz"},a.default.createElement("div",{className:"hero-viz-row"},a.default.createElement(as,{pct:p,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${s}`,sublabel:$0(s)}),a.default.createElement("div",{className:"hero-viz-stats"},a.default.createElement("span",{className:"hero-xp-total"},a.default.createElement(Nt,{value:l})," ",a.default.createElement("small",null,"XP")),a.default.createElement("span",{className:"hero-xp-sub"},u,"/",c," to next level"),a.default.createElement("div",{className:"hero-xp-split"},a.default.createElement("span",{className:"hero-xp-earned"},"+",a.default.createElement(Nt,{value:Mt})),a.default.createElement("span",{className:"hero-xp-lost"},"\u2212",a.default.createElement(Nt,{value:de})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"LIFE-AREAS")),a.default.createElement("div",{className:"radar-card"},a.default.createElement(v0,{axes:Ct,size:252})),(Mt>0||de>0)&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"XP SOURCE")),a.default.createElement("div",{className:"donut-card"},a.default.createElement(kp,{size:120,stroke:16,centerLabel:l,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:Mt,color:"#5EEAD4"},{key:"lost",label:"Lost",value:de,color:"#F0576B"}]}),a.default.createElement("div",{className:"donut-legend"},a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),a.default.createElement("span",null,"Earned from good habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(Nt,{value:Mt}))),a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),a.default.createElement("span",null,"Lost to bad habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(Nt,{value:de})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"GOOD-HABITS")),a.default.createElement("div",{className:"quest-habit-list"},e.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no good habits yet")):e.map(_=>a.default.createElement(W0,{key:_.id,habit:_,onToggleToday:g,onDelete:v,onSave:y}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new good habit...",value:x,onChange:_=>w(_.target.value),onKeyDown:_=>_.key==="Enter"&&oe()}),a.default.createElement("button",{className:"add-btn",onClick:oe,"aria-label":"Add good habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},dt.map(_=>a.default.createElement("button",{key:_.key,className:b===_.key?"active":"",onClick:()=>E(_.key)},_.label)),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:z,onChange:_=>I(+_.target.value||5)})),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"BAD-HABITS")),a.default.createElement("div",{className:"quest-habit-list"},n.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no bad habits tracked")):n.map(_=>a.default.createElement(H0,{key:_.id,habit:_,onToggleToday:h,onDelete:k,onSave:N}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new bad habit...",value:A,onChange:_=>P(_.target.value),onKeyDown:_=>_.key==="Enter"&&he()}),a.default.createElement("button",{className:"add-btn",onClick:he,"aria-label":"Add bad habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},dt.map(_=>a.default.createElement("button",{key:_.key,className:O===_.key?"active":"",onClick:()=>S(_.key)},_.label)),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:F,onChange:_=>M(+_.target.value||5)})),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"REWARD-CENTER")),a.default.createElement("div",{className:"vault-grid"},o.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no rewards set up")):o.map(_=>a.default.createElement(V0,{key:_.id,reward:_,canClaim:l>=_.cost,onClaim:f,onDelete:d,onSave:m}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new reward...",value:L,onChange:_=>G(_.target.value),onKeyDown:_=>_.key==="Enter"&&Ee()}),a.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:se,onChange:_=>H(+_.target.value||50)}),a.default.createElement("button",{className:"add-btn",onClick:Ee,"aria-label":"Add reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var K0=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function q0(e=1e3*30){let[t,n]=(0,a.useState)(Date.now());return(0,a.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),e);return()=>clearInterval(r)},[e]),t}function X0(e,t){let n=Math.floor((t-e)/1e3);if(n<60)return"just now";let r=Math.floor(n/60);if(r<60)return`${r}m ago`;let o=Math.floor(r/60);return o<24?`${o}h ago`:`${Math.floor(o/24)}d ago`}function Sp({checked:e,onChange:t,color:n}){return a.default.createElement("button",{onClick:t,"aria-checked":e,role:"checkbox",className:"checkbox-btn",style:{"--c":n}},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:e?0:24,transition:"stroke-dashoffset 260ms cubic-bezier(.65,0,.35,1)"}})))}function G0({task:e,now:t,onToggle:n,onDelete:r,index:o}){let[i,l]=(0,a.useState)(!1),s=Ma.find(c=>c.key===e.priority)||Ma[0],u=()=>{l(!0),setTimeout(()=>r(e.id),220)};return a.default.createElement("div",{className:`task-row ${i?"leaving":""}`,style:{animationDelay:`${o*35}ms`}},a.default.createElement(Sp,{checked:e.done,onChange:()=>n(e.id),color:s.color}),a.default.createElement("div",{className:"task-main"},a.default.createElement("span",{className:`task-text ${e.done?"done":""}`},e.text),a.default.createElement("span",{className:"task-meta"},a.default.createElement("span",{className:"prio-dot",style:{background:s.color}}),a.default.createElement("span",{className:"prio-label"},s.label),a.default.createElement("span",{className:"dot-sep"},"\xB7"),a.default.createElement("span",null,X0(e.createdAt,t)))),a.default.createElement("button",{className:"del-btn",onClick:u,"aria-label":"Delete task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))}var ap="tasksh.tasks.v1",ip="tasksh.routines.v1",lp="tasksh.vaulthabits.v1",sp="tasksh.projects.v1",up="tasksh.goodhabits.v1",cp="tasksh.badhabits.v1",dp="tasksh.rewards.v1",pp="tasksh.deviceid.v1",es="tasksh.notifyenabled.v1",rs="tasksh.aikey.v1";function Y0({ctl:e,level:t,totalXP:n,onClose:r}){let o=xn(t+1),i=xn(t);return a.default.createElement("div",{className:"sheet-backdrop",onClick:r},a.default.createElement("div",{className:"sheet",onClick:l=>l.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},"themes"),a.default.createElement("button",{className:"sheet-close",onClick:r,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"theme-grid"},e.themes.map(l=>{let s=ns(l,t),u=e.themeId===l.id,c=xn(l.unlockLevel),p=xn(Math.max(1,l.unlockLevel-1)),g=s?100:Math.max(0,Math.min(99,Math.round((n-p)/(c-p)*100)));return a.default.createElement("button",{key:l.id,className:`theme-card ${u?"active":""} ${s?"":"locked"}`,onClick:()=>{s?(e.setThemeId(l.id),B.success()):B.error()},disabled:!s},a.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${l.colors.bg} 0%, ${l.colors.panel} 45%, ${l.colors.accent} 100%)`}},!s&&a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},a.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),u&&a.default.createElement("span",{className:"theme-active-dot"})),a.default.createElement("span",{className:"theme-name"},l.name),s?a.default.createElement("span",{className:"theme-blurb"},l.blurb):a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"theme-req"},"level ",l.unlockLevel),a.default.createElement("span",{className:"theme-bar"},a.default.createElement("span",{className:"theme-bar-fill",style:{width:`${g}%`}})),a.default.createElement("span",{className:"theme-pct"},g,"%")))})),a.default.createElement("div",{className:"sheet-sub"},"level ",t," \xB7 ",Math.max(0,o-n)," XP to level ",t+1),a.default.createElement("div",{className:"calm-toggle-row"},a.default.createElement("div",null,a.default.createElement("div",{className:"calm-toggle-label"},"calm mode"),a.default.createElement("div",{className:"calm-toggle-hint"},"slower motion, softer light, a breathing guide")),a.default.createElement("button",{className:`calm-switch ${e.calm?"on":""}`,onClick:()=>{e.calm||Rt.emit("calmSession"),e.setCalm(!e.calm),B.click()},"aria-pressed":e.calm},a.default.createElement("span",{className:"calm-knob"}))),a.default.createElement("div",{className:"sheet-foot"},"ambience follows the time of day \xB7 currently ",a.default.createElement("b",null,e.phase.label))))}function Ea({label:e,value:t,color:n}){return a.default.createElement("div",{className:"pet-stat"},a.default.createElement("div",{className:"pet-stat-top"},a.default.createElement("span",{className:"pet-stat-label"},e),a.default.createElement("span",{className:"pet-stat-val"},Math.round(t))),a.default.createElement("div",{className:"pet-stat-track"},a.default.createElement("div",{className:"pet-stat-fill",style:{width:`${t}%`,background:n}})))}function Q0({from:e,to:t,petName:n,onDone:r}){(0,a.useEffect)(()=>{let i=setTimeout(r,5200);return()=>clearTimeout(i)},[r]);let o=kn[t];return a.default.createElement("div",{className:"evo-backdrop",onClick:r},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"evo-card",onClick:i=>i.stopPropagation()},a.default.createElement("div",{className:"evo-kicker"},"evolution"),a.default.createElement("div",{className:"evo-stage-row"},a.default.createElement("div",{className:"evo-old"},a.default.createElement(ts,{stage:e,mood:"content",size:72,animate:!1})),a.default.createElement("span",{className:"evo-arrow"},"\u2192"),a.default.createElement("div",{className:"evo-new"},a.default.createElement(ts,{stage:t,mood:"joyful",size:132,evolving:!0}))),a.default.createElement("div",{className:"evo-name"},n," became ",a.default.createElement("b",null,o.name)),a.default.createElement("div",{className:"evo-title"},o.title),a.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}function Z0({petCtl:e,ctx:t,apiKey:n,showDataMsg:r}){let{pet:o,form:i,mood:l,nudge:s,rename:u,remember:c}=e,[p,g]=(0,a.useState)(""),[h,v]=(0,a.useState)(!1),[k,y]=(0,a.useState)(!1),[N,f]=(0,a.useState)(o.name),d=(0,a.useRef)(null),m=(0,a.useMemo)(()=>a0(t),[t]);(0,a.useEffect)(()=>{d.current&&(d.current.scrollTop=d.current.scrollHeight)},[o.log]);let x=async()=>{let w=p.trim();if(!(!w||h)){if(g(""),c("user",w),s("chat"),B.click(),!n){c("pet",bt(["i can hear you, but my words are limited right now. add an ai key in the ai tab and i can really talk.","i'm listening \u2014 though i can only nod until you connect an ai key."],Date.now()/1e3));return}v(!0);try{let b=await ah(w,i0(t),o.log||[],n);c("pet",b.reply),B.success()}catch(b){c("pet",b instanceof er?"my link to the wider world got rejected. check the key in the ai tab.":"couldn't reach far enough to answer that. try again in a moment."),B.error()}finally{v(!1)}}};return a.default.createElement("div",{className:"task-list pet-scroll"},a.default.createElement("div",{className:"pet-stage"},a.default.createElement(ts,{stage:i.stage,mood:l.key,size:168}),a.default.createElement("div",{className:"pet-id"},k?a.default.createElement("input",{className:"pet-name-input",value:N,autoFocus:!0,maxLength:14,onChange:w=>f(w.target.value),onBlur:()=>{u(N),y(!1)},onKeyDown:w=>{w.key==="Enter"&&(u(N),y(!1))}}):a.default.createElement("button",{className:"pet-name",onClick:()=>{f(o.name),y(!0)}},o.name),a.default.createElement("span",{className:"pet-form"},i.name," \xB7 ",l.label),a.default.createElement("span",{className:"pet-bond"},vp(o.friendship)))),a.default.createElement("div",{className:"pet-speech"},m),a.default.createElement("div",{className:"pet-stats"},a.default.createElement(Ea,{label:"happiness",value:o.happiness,color:"var(--accent)"}),a.default.createElement(Ea,{label:"energy",value:o.energy,color:"var(--accent2)"}),a.default.createElement(Ea,{label:"friendship",value:o.friendship,color:"var(--accent)"}),a.default.createElement(Ea,{label:"intelligence",value:o.intelligence,color:"var(--accent2)"})),Zl(t.level)&&a.default.createElement("div",{className:"pet-next"},"next form at level ",Zl(t.level).minLevel," \xB7 ",Zl(t.level).name),a.default.createElement("div",{className:"pet-chat",ref:d},(o.log||[]).length===0?a.default.createElement("div",{className:"pet-chat-empty"},"say something \u2014 it remembers."):(o.log||[]).map((w,b)=>a.default.createElement("div",{key:b,className:`pet-msg ${w.role}`},w.text)),h&&a.default.createElement("div",{className:"pet-msg pet thinking"},a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}))),a.default.createElement("div",{className:"pet-composer"},a.default.createElement("input",{className:"pet-input",placeholder:`talk to ${o.name}\u2026`,value:p,onChange:w=>g(w.target.value),onKeyDown:w=>w.key==="Enter"&&x(),disabled:h}),a.default.createElement("button",{className:"pet-send",onClick:x,disabled:h||!p.trim()},"say")))}var tr="https://tasksh-notify.techcraftor.workers.dev",R0="BO0VGBlyG--zbIASY0_ws98Y9V25Sh9QjS1OwR8eMV9hhgGo50N38rAXuJ-umahm5ORhmQcpG_ibLEFOOVRI4_Y";function eh(e){let t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;i++)o[i]=r.charCodeAt(i);return o}function us(){let e=localStorage.getItem(pp);return e||(e="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(pp,e)),e}async function th(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let t=await navigator.serviceWorker.ready,n=await t.pushManager.getSubscription();n||(n=await t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:eh(R0)}));let r=us();if(!(await fetch(`${tr}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function nh(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let e=us();try{await fetch(`${tr}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:e})})}catch{}}async function fp(e){let t=us();try{await fetch(`${tr}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t,routines:e.map(n=>({id:n.id,time:n.time,label:n.label}))})})}catch{}}function Ep(){try{return localStorage.getItem(rs)||""}catch{return""}}function Cp(e){try{e?localStorage.setItem(rs,e):localStorage.removeItem(rs)}catch{}}function rh(e){return e?e.length<=10?"\u2022".repeat(e.length):`${e.slice(0,4)}${"\u2022".repeat(8)}${e.slice(-4)}`:""}var er=class extends Error{constructor(t){super(t),this.name="AIKeyError"}};async function oh(e){let t=await fetch(`${tr}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:e})}),n=null;try{n=await t.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${t.status}).`);return n.warning||null}async function ah(e,t,n,r){let o=await fetch(`${tr}/pet`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:e,context:t,log:n,apiKey:r})}),i=null;try{i=await o.json()}catch{}if(!o.ok){let l=i&&i.error;throw l==="no_key"||l==="bad_key"?new er(i&&i.message||"key rejected"):new Error(i&&i.message||`pet request failed (${o.status})`)}return{reply:i&&i.reply||"\u2026"}}async function ih(e,t,n){let r=await fetch(`${tr}/ai`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e,data:t,apiKey:n})}),o=null;try{o=await r.json()}catch{}if(!r.ok){let i=o&&o.error;throw i==="no_key"||i==="bad_key"?new er(o&&o.message||"Your API key was rejected."):i==="quota"?new Error(o&&o.message||"Daily AI limit reached."):new Error(o&&o.message||o&&o.error||`AI request failed (${r.status}).`)}return{reply:o.reply||"",actions:o.actions||[]}}function mp(e,t){let n=(r,o)=>(r||[]).find(i=>i.id===o);switch(e.op){case"add_routine":return{kind:"add",surface:"routine",text:`${St(Ye(e.time))} \xB7 ${e.label} (${Et(e.duration)})`+(e.alternatives?.length?` \xB7 or: ${e.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(t.routines,e.id),o=[];return e.time!==void 0&&e.time!==r?.time&&o.push(`${St(Ye(r?.time||"00:00"))} \u2192 ${St(Ye(e.time))}`),e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.duration!==void 0&&e.duration!==r?.duration&&o.push(`${Et(r?.duration||0)} \u2192 ${Et(e.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${o.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(t.routines,e.id)?.label||`#${e.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${e.icon} ${e.label} \xB7 ${e.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(t.vaultHabits,e.id),o=[];return e.label!==void 0&&e.label!==r?.label&&o.push(`"${r?.label}" \u2192 "${e.label}"`),e.weeklyGoal!==void 0&&e.weeklyGoal!==r?.weeklyGoal&&o.push(`${r?.weeklyGoal}x \u2192 ${e.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${o.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(t.vaultHabits,e.id)?.label||`#${e.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${e.xp} XP \xB7 ${e.label} (${e.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${e.xp} XP \xB7 ${e.label} (${e.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(t.goodHabits,e.id)?.label||`#${e.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(t.badHabits,e.id)?.label||`#${e.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${e.label} \xB7 ${e.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(t.rewards,e.id)?.label||`#${e.id}`};default:return{kind:"edit",surface:"?",text:e.op}}}function lh(e,t,n){let{routines:r,vaultHabits:o,goodHabits:i,badHabits:l,rewards:s}={routines:[...t.routines],vaultHabits:[...t.vaultHabits],goodHabits:[...t.goodHabits],badHabits:[...t.badHabits],rewards:[...t.rewards]},u=new Set;for(let c of e)switch(c.op){case"add_routine":r=[...r,{id:me(),time:c.time,label:c.label,duration:c.duration,history:[],...c.alternatives?.length?{alternatives:c.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(p=>p.id===c.id?{...p,...c.time!==void 0?{time:c.time}:{},...c.label!==void 0?{label:c.label}:{},...c.duration!==void 0?{duration:c.duration}:{}}:p),u.add("routines");break;case"delete_routine":r=r.filter(p=>p.id!==c.id),u.add("routines");break;case"add_vault_habit":o=[...o,{id:me(),icon:c.icon,label:c.label,weeklyGoal:c.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":o=o.map(p=>p.id===c.id?{...p,...c.label!==void 0?{label:c.label}:{},...c.weeklyGoal!==void 0?{weeklyGoal:c.weeklyGoal}:{}}:p),u.add("vaultHabits");break;case"delete_vault_habit":o=o.filter(p=>p.id!==c.id),u.add("vaultHabits");break;case"add_good_habit":i=[...i,{id:me(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("goodHabits");break;case"delete_good_habit":i=i.filter(p=>p.id!==c.id),u.add("goodHabits");break;case"add_bad_habit":l=[...l,{id:me(),label:c.label,area:c.area,...c.sub?{sub:c.sub}:{},xp:c.xp,history:[]}],u.add("badHabits");break;case"delete_bad_habit":l=l.filter(p=>p.id!==c.id),u.add("badHabits");break;case"add_reward":s=[...s,{id:me(),label:c.label,cost:c.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(p=>p.id!==c.id),u.add("rewards");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(o),u.has("goodHabits")&&n.setGoodHabits(i),u.has("badHabits")&&n.setBadHabits(l),u.has("rewards")&&n.setRewards(s)}var sh=["build me a study preset for exam month","my evenings are too packed \u2014 spread them out","add a gym routine at 6am for an hour","what am I neglecting?"];function hp({onSaved:e,initialError:t,onCancel:n}){let[r,o]=(0,a.useState)(""),[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(t||null),c=(0,a.useRef)(null);(0,a.useEffect)(()=>{c.current?.focus()},[]);let p=async()=>{let g=r.trim();if(!(!g||i)){l(!0),u(null);try{let h=await oh(g);Cp(g),B.success(),e(g,h)}catch(h){u(h.message||"Couldn't verify that key."),B.error()}finally{l(!1)}}};return a.default.createElement("div",{className:"task-list ai-scroll"},a.default.createElement("div",{className:"ai-gate"},a.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),a.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),a.default.createElement("div",{className:"ai-gate-sub"},"the assistant runs on Google's Gemini. it's free \u2014 you just need your own key. takes about a minute."),a.default.createElement("ol",{className:"ai-gate-steps"},a.default.createElement("li",null,"open"," ",a.default.createElement("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noopener noreferrer"},"aistudio.google.com/apikey")),a.default.createElement("li",null,"sign in and hit \u201Ccreate API key\u201D"),a.default.createElement("li",null,"copy it and paste it below")),a.default.createElement("input",{ref:c,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AIza\u2026",value:r,onChange:g=>o(g.target.value),onKeyDown:g=>{g.key==="Enter"&&p()},disabled:i}),s&&a.default.createElement("div",{className:"ai-error ai-gate-error"},s),a.default.createElement("div",{className:"ai-gate-actions"},a.default.createElement("button",{className:"ai-apply",onClick:p,disabled:i||!r.trim()},i?"checking\u2026":"save key"),n&&a.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),a.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}function uh({state:e,setters:t,showDataMsg:n}){let[r,o]=(0,a.useState)(()=>Ep()),[i,l]=(0,a.useState)(!1),[s,u]=(0,a.useState)(null),[c,p]=(0,a.useState)(""),[g,h]=(0,a.useState)(!1),[v,k]=(0,a.useState)(null),[y,N]=(0,a.useState)(null),[f,d]=(0,a.useState)(()=>new Set),m=(0,a.useRef)(null),x=(0,a.useRef)(0),[w,b]=(0,a.useState)(0);(0,a.useEffect)(()=>{if(!g){b(0);return}let S=Date.now(),F=setInterval(()=>b((Date.now()-S)/1e3),100);return()=>clearInterval(F)},[g]);let E=async S=>{let F=(S??c).trim();if(!F||g)return;let M=Date.now()-x.current;if(M<3e3){k(`Hold on a moment \u2014 wait ${Math.ceil((3e3-M)/1e3)}s before asking again.`);return}x.current=Date.now(),h(!0),k(null),N(null),d(new Set),B.click();try{let L=await ih(F,{routines:e.routines,vaultHabits:e.vaultHabits,goodHabits:e.goodHabits,badHabits:e.badHabits,rewards:e.rewards,totalXP:e.totalXP},r);N(L),L.actions.length&&B.success()}catch(L){L instanceof er?(Cp(""),o(""),u(L.message)):k(L.message||"Something went wrong."),B.error()}finally{h(!1)}},z=S=>{d(F=>{let M=new Set(F);return M.has(S)?M.delete(S):M.add(S),M})},I=y?y.actions.filter((S,F)=>!f.has(F)):[],A=()=>{I.length&&(lh(I,e,t),B.success(),n("success",`Applied ${I.length} change${I.length===1?"":"s"}`),N(null),p(""),d(new Set))},P=()=>{B.whoosh(),N(null),d(new Set)},O=I.reduce((S,F)=>{let M=mp(F,e).kind;return S[M]=(S[M]||0)+1,S},{});return r?i?a.default.createElement(hp,{onCancel:()=>l(!1),onSaved:(S,F)=>{o(S),l(!1),n("success",F||"AI key updated")}}):a.default.createElement("div",{className:"task-list ai-scroll"},a.default.createElement("div",{className:"ai-intro"},a.default.createElement("div",{className:"ai-intro-row"},a.default.createElement("div",{className:"ai-intro-title"},"ask anything"),a.default.createElement("button",{className:"ai-key-btn",onClick:()=>l(!0),title:`Key ${rh(r)} \u2014 tap to change`},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12","aria-hidden":"true"},a.default.createElement("circle",{cx:"8",cy:"15",r:"4",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M10.85 12.15L19 4M17 6l2 2M14 9l2 2",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})),a.default.createElement("span",null,"key"))),a.default.createElement("div",{className:"ai-intro-sub"},"it can add, edit or remove routines, vault habits, quests and rewards \u2014 nothing changes until you approve it.")),a.default.createElement("div",{className:"ai-composer"},a.default.createElement("textarea",{ref:m,className:"ai-input",rows:3,placeholder:"e.g. add a 30 min reading routine before bed",value:c,onChange:S=>p(S.target.value),onKeyDown:S=>{S.key==="Enter"&&(S.metaKey||S.ctrlKey)&&(S.preventDefault(),E())},disabled:g}),a.default.createElement("button",{className:"ai-send",onClick:()=>E(),disabled:g||!c.trim()},g?"thinking\u2026":"ask")),!y&&!g&&a.default.createElement("div",{className:"ai-chips"},sh.map(S=>a.default.createElement("button",{key:S,className:"ai-chip",onClick:()=>{p(S),E(S)}},S))),g&&a.default.createElement("div",{className:"ai-thinking"},a.default.createElement("div",{className:"ai-dots"},a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"})),a.default.createElement("div",{className:"ai-elapsed"},w<1?"thinking\u2026":`thinking\u2026 ${w.toFixed(1)}s`,w>12&&a.default.createElement("span",{className:"ai-slow"}," \xB7 taking longer than usual"))),v&&a.default.createElement("div",{className:"ai-error"},v),y&&a.default.createElement("div",{className:"ai-result"},y.reply&&a.default.createElement("div",{className:"ai-reply"},y.reply),y.actions.length===0?a.default.createElement("div",{className:"ai-noop"},"no changes proposed"):a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"ai-diff-head"},a.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),a.default.createElement("span",{className:"ai-diff-counts"},O.add?a.default.createElement("span",{className:"c-add"},"+",O.add):null,O.edit?a.default.createElement("span",{className:"c-edit"},"~",O.edit):null,O.remove?a.default.createElement("span",{className:"c-remove"},"\u2212",O.remove):null)),a.default.createElement("div",{className:"ai-diff"},y.actions.map((S,F)=>{let M=mp(S,e),L=f.has(F);return a.default.createElement("button",{key:F,className:`ai-diff-row ${M.kind} ${L?"skipped":""}`,onClick:()=>z(F),title:L?"click to include":"click to skip"},a.default.createElement("span",{className:"ai-sign"},M.kind==="add"?"+":M.kind==="remove"?"\u2212":"~"),a.default.createElement("span",{className:"ai-surface"},M.surface),a.default.createElement("span",{className:"ai-diff-text"},M.text),a.default.createElement("span",{className:"ai-skip-mark"},L?"skipped":""))})),a.default.createElement("div",{className:"ai-actions"},a.default.createElement("button",{className:"ai-apply",onClick:A,disabled:!I.length},"apply ",I.length||""),a.default.createElement("button",{className:"ai-discard",onClick:P},"discard")),a.default.createElement("div",{className:"ai-hint"},"tap any row to skip it")))):a.default.createElement(hp,{initialError:s,onSaved:(S,F)=>{o(S),u(null),n("success",F||"AI key saved")}})}function Zt(e,t){try{let n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function ch(e){typeof e=="number"&&Number.isFinite(e)&&e>Ca&&(Ca=e)}function dh(e){let t=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>t&&(t=r)};return(e.tasks||[]).forEach(r=>n(r?.id)),(e.routines||[]).forEach(r=>n(r?.id)),(e.vaultHabits||[]).forEach(r=>n(r?.id)),(e.goodHabits||[]).forEach(r=>n(r?.id)),(e.badHabits||[]).forEach(r=>n(r?.id)),(e.rewards||[]).forEach(r=>n(r?.id)),(e.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(o=>n(o?.id))}),t}function ph({routines:e,setRoutines:t,tasks:n,setTasks:r,vaultHabits:o,goodHabits:i,rewards:l,setRewards:s,totalXP:u,setTab:c}){let p=is(),g=p.hour*60+p.minute,{sorted:h,currentId:v,nextId:k}=ls(e,g),y=h.find(P=>P.id===v),N=h.find(P=>P.id===k),f=$(0),d=P=>{let O=!(e.find(S=>S.id===P)?.history||[]).includes(f);t(S=>S.map(F=>{if(F.id!==P)return F;let L=(F.history||[]).includes(f)?F.history.filter(G=>G!==f):[...F.history||[],f];return{...F,history:L.slice(-60)}})),O?(B.error(),Rt.emit("badHabit")):B.click()},m=(0,a.useMemo)(()=>{let P={high:0,mid:1,low:2};return[...n].filter(O=>!O.done).sort((O,S)=>P[O.priority]-P[S.priority])},[n]),x=P=>{r(O=>O.map(S=>S.id===P?{...S,done:!S.done}:S)),B.success()},w=(0,a.useMemo)(()=>l.filter(P=>u>=P.cost),[l,u]),b=P=>{s(O=>O.map(S=>S.id===P?{...S,claimed:[...S.claimed||[],f]}:S)),B.success()},E=(0,a.useMemo)(()=>{let P={},O=S=>{(S||[]).forEach(F=>{P[F]=(P[F]||0)+1})};return e.forEach(S=>O(S.history)),o.forEach(S=>O(S.history)),i.forEach(S=>O(S.history)),P},[e,o,i]),z=y||N,I=!!y,A=z?(z.history||[]).includes(f):!1;return a.default.createElement("div",{className:"task-list today-view"},a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,I?"HAPPENING NOW":"NEXT UP")),z?a.default.createElement("div",{className:"today-card"},a.default.createElement("div",{className:"today-card-row"},a.default.createElement("span",{className:"today-card-time"},St(Ye(z.time))),a.default.createElement("span",{className:"today-card-label"},z.label)),a.default.createElement("div",{className:"today-card-sub"},I?`in progress \xB7 ${Et(z.duration)}`:`in ${Math.max(0,Ye(z.time)-g)}m \xB7 ${Et(z.duration)}`),a.default.createElement("button",{className:`today-mark-btn ${A?"done":""}`,onClick:()=>d(z.id)},A?"\u2713 completed today":"mark complete")):a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no routines set up yet")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"ACTIVITY")),a.default.createElement(y0,{counts:E,weeksBack:12}),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"OPEN TASKS"),m.length>0&&a.default.createElement("button",{className:"today-view-all",onClick:()=>c("tasks")},"view all in tasks \u2192")),m.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):a.default.createElement("div",{className:"today-list"},m.slice(0,5).map((P,O)=>a.default.createElement("div",{key:P.id,className:"today-task-row",style:{animationDelay:`${O*35}ms`}},a.default.createElement("button",{className:"today-task-check",onClick:()=>x(P.id),"aria-label":"Complete task"}),a.default.createElement("span",{className:"today-task-text"},P.text),a.default.createElement("span",{className:`today-prio-dot ${P.priority}`}))),m.length>5&&a.default.createElement("button",{className:"today-more",onClick:()=>c("tasks")},"+",m.length-5," more")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),a.default.createElement("span",{className:"today-xp-total"},a.default.createElement(Nt,{value:u})," XP")),w.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"keep earning XP \u2014 nothing unlocked yet")):a.default.createElement("div",{className:"today-list"},w.map((P,O)=>a.default.createElement("div",{key:P.id,className:"today-task-row",style:{animationDelay:`${O*35}ms`}},a.default.createElement("span",{className:"today-task-text"},P.label),a.default.createElement("span",{className:"today-reward-cost"},P.cost," XP"),a.default.createElement("button",{className:"today-claim-btn",onClick:()=>b(P.id)},"claim")))))}function fh(){let[e,t]=(0,a.useState)("today"),[n,r]=h0(),o=T=>{T!==e&&B.whoosh(),t(T)},[i,l]=(0,a.useState)(()=>Zt(ap,K0)),[s,u]=(0,a.useState)(()=>Zt(ip,w0)),[c,p]=(0,a.useState)(()=>Zt(lp,M0)),[g,h]=(0,a.useState)(()=>Zt(sp,z0)),[v,k]=(0,a.useState)(()=>Zt(up,O0)),[y,N]=(0,a.useState)(()=>Zt(cp,j0)),[f,d]=(0,a.useState)(()=>Zt(dp,U0)),m=(0,a.useMemo)(()=>bp(v,y,f),[v,y,f]),x=(0,a.useMemo)(()=>Np(m).level,[m]),w=c0(x),b=l0(x),[E,z]=(0,a.useState)(""),[I,A]=(0,a.useState)("mid"),[P,O]=(0,a.useState)("all"),S=(0,a.useRef)(null),F=(0,a.useRef)(null),[M,L]=(0,a.useState)(null),G=q0(),[se,H]=(0,a.useState)(()=>localStorage.getItem(es)==="1"),[oe,he]=(0,a.useState)(!1),[Ee,Ct]=(0,a.useState)(!1);(0,a.useEffect)(()=>{se&&fp(s)},[s,se]);let Mt=async()=>{if(!oe){he(!0);try{se?(await nh(),localStorage.setItem(es,"0"),H(!1),de("success","Notifications turned off")):(await th(),await fp(s),localStorage.setItem(es,"1"),H(!0),de("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(T){de("error",T.message||"Couldn't set up notifications")}finally{he(!1)}}},de=(T,U)=>{L({type:T,text:U})};(0,a.useEffect)(()=>{if(!M)return;let T=setTimeout(()=>L(null),3200);return()=>clearTimeout(T)},[M]);let _=()=>{try{let T={app:"tasks.sh",version:1,exportedAt:new Date().toISOString(),data:{tasks:i,routines:s,vaultHabits:c,projects:g,goodHabits:v,badHabits:y,rewards:f}},U=new Blob([JSON.stringify(T,null,2)],{type:"application/json"}),ie=URL.createObjectURL(U),ge=$(0),Be=document.createElement("a");Be.href=ie,Be.download=`tasks-sh-backup-${ge}.json`,document.body.appendChild(Be),Be.click(),Be.remove(),URL.revokeObjectURL(ie),de("ok","backup exported")}catch{de("err","export failed")}},j=()=>F.current?.click(),ne=T=>{let U=T.target.files&&T.target.files[0];if(T.target.value="",!U)return;let ie=new FileReader;ie.onerror=()=>de("err","couldn't read that file"),ie.onload=()=>{try{let ge=JSON.parse(String(ie.result)),Be=ge&&typeof ge=="object"&&ge.data?ge.data:ge;if(!Be||typeof Be!="object")throw new Error("bad shape");let fs={tasks:l,routines:u,vaultHabits:p,projects:h,goodHabits:k,badHabits:N,rewards:d},eo=0;for(let Ta of Object.keys(fs))Array.isArray(Be[Ta])&&(fs[Ta](Be[Ta]),eo++);if(eo===0){de("err","no recognizable data in that file");return}ch(dh(Be)),de("ok",`imported ${eo} data set${eo===1?"":"s"}`)}catch{de("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},ie.readAsText(U)},J=is(),Ce=J.hour*60+J.minute,{currentId:zt,sorted:wn}=ls(s,Ce),[_t,Zr]=(0,a.useState)(null),Rr=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{if(Rr.current===void 0){Rr.current=zt;return}if(zt!==Rr.current){let T=wn.find(U=>U.id===zt);T&&Zr({id:zt,label:T.label,time:T.time}),Rr.current=zt}},[zt,wn]),(0,a.useEffect)(()=>{if(!_t)return;let T=setTimeout(()=>Zr(null),6e3);return()=>clearTimeout(T)},[_t]),(0,a.useEffect)(()=>{try{localStorage.setItem(ap,JSON.stringify(i))}catch{}},[i]),(0,a.useEffect)(()=>{try{localStorage.setItem(ip,JSON.stringify(s))}catch{}},[s]),(0,a.useEffect)(()=>{try{localStorage.setItem(lp,JSON.stringify(c))}catch{}},[c]),(0,a.useEffect)(()=>{try{localStorage.setItem(sp,JSON.stringify(g))}catch{}},[g]),(0,a.useEffect)(()=>{try{localStorage.setItem(up,JSON.stringify(v))}catch{}},[v]),(0,a.useEffect)(()=>{try{localStorage.setItem(cp,JSON.stringify(y))}catch{}},[y]),(0,a.useEffect)(()=>{try{localStorage.setItem(dp,JSON.stringify(f))}catch{}},[f]);let Tt=(0,a.useMemo)(()=>{let T=i.length,U=i.filter(Be=>Be.done).length,ie=T-U,ge=T===0?0:Math.round(U/T*100);return{total:T,done:U,pending:ie,pct:ge}},[i]),cs=(0,a.useMemo)(()=>{let T=i.filter(U=>!U.done);return Ma.map(U=>({key:U.key,label:U.label,color:U.color,value:T.filter(ie=>ie.priority===U.key).length}))},[i]),ds=(0,a.useMemo)(()=>{let T=i;return P==="active"&&(T=T.filter(U=>!U.done)),P==="done"&&(T=T.filter(U=>U.done)),[...T].sort((U,ie)=>{if(U.done!==ie.done)return U.done?1:-1;let ge={high:0,mid:1,low:2};return ge[U.priority]-ge[ie.priority]})},[i,P]),ps=()=>{let T=E.trim();T&&(l(U=>[...U,{id:me(),text:T,done:!1,priority:I,createdAt:Date.now()}]),z(""),S.current?.focus(),B.click())},Mp=T=>{let U=!i.find(ie=>ie.id===T)?.done;l(ie=>ie.map(ge=>ge.id===T?{...ge,done:!ge.done}:ge)),U?(B.success(),Rt.emit("taskDone")):B.click()},zp=T=>{l(U=>U.filter(ie=>ie.id!==T)),B.delete()},_p=()=>{l(T=>T.filter(U=>!U.done)),B.whoosh()};return a.default.createElement("div",{className:"app-root","data-particle":w.theme.ambient.particle},a.default.createElement(u0,{theme:w.theme,phase:w.phase,calm:w.calm}),b.evolution&&a.default.createElement(Q0,{from:b.evolution.from,to:b.evolution.to,petName:b.pet.name,onDone:b.clearEvolution}),Ee&&a.default.createElement(Y0,{ctl:w,level:x,totalXP:m,onClose:()=>Ct(!1)}),a.default.createElement("style",null,`
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


        /* ---- pet (v23) ---- */
        .tabs button.tab-pet { color: var(--accent2); }

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
      `),a.default.createElement("div",{className:"panel"},_t&&a.default.createElement("div",{className:"quest-banner",onClick:()=>Zr(null)},a.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),a.default.createElement("span",{className:"quest-banner-text"},a.default.createElement("b",null,"Now:")," ",_t.label),a.default.createElement("button",{className:"quest-banner-close",onClick:T=>{T.stopPropagation(),Zr(null)},"aria-label":"Dismiss"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),a.default.createElement("div",{className:"titlebar"},a.default.createElement("div",{className:"titlebar-left"},a.default.createElement("div",{className:"dots"},a.default.createElement("span",{className:"dot red"}),a.default.createElement("span",{className:"dot amber"}),a.default.createElement("span",{className:"dot green"})),a.default.createElement("span",{className:"titlebar-name"},"tasks.sh")),a.default.createElement("div",{className:"titlebar-right"},a.default.createElement("input",{type:"file",accept:"application/json",ref:F,onChange:ne,style:{display:"none"}}),a.default.createElement("button",{className:`titlebar-icon-btn ${se?"notify-on":""}`,onClick:Mt,disabled:oe,"aria-label":se?"Turn off notifications":"Turn on notifications",title:se?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},se?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{Ct(!0),B.click()},"aria-label":"Themes and ambience",title:"Themes & ambience"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:j,"aria-label":"Import backup",title:"Import backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:_,"aria-label":"Export backup",title:"Export backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("span",{className:"clock"},new Date(G).toLocaleTimeString([],{hour:"numeric",minute:"2-digit",hour12:!0})))),M&&a.default.createElement("div",{className:`data-toast ${M.type}`},M.text),a.default.createElement("div",{className:"tabs"},a.default.createElement("button",{className:e==="today"?"active":"",onClick:()=>o("today")},"today"),a.default.createElement("button",{className:e==="tasks"?"active":"",onClick:()=>o("tasks")},"tasks"),a.default.createElement("button",{className:e==="routines"?"active":"",onClick:()=>o("routines")},"routines"),a.default.createElement("button",{className:e==="vault"?"active":"",onClick:()=>o("vault")},"vault"),a.default.createElement("button",{className:e==="quest"?"active":"",onClick:()=>o("quest")},"quest"),a.default.createElement("button",{className:`tab-pet ${e==="pet"?"active":""}`,onClick:()=>o("pet")},"pet"),a.default.createElement("button",{className:`tab-ai ${e==="ai"?"active":""}`,onClick:()=>o("ai")},"ai")),a.default.createElement("div",{key:e,className:"tab-content"},e==="today"?a.default.createElement(ph,{routines:s,setRoutines:u,tasks:i,setTasks:l,vaultHabits:c,goodHabits:v,rewards:f,setRewards:d,totalXP:m,setTab:o}):e==="tasks"?a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"stats-bar stats-bar-viz"},a.default.createElement(as,{pct:Tt.pct,size:64,stroke:5.5,label:`${Tt.pct}%`}),a.default.createElement("div",{className:"stats-row-viz"},a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Nt,{value:Tt.total}))," total"),a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Nt,{value:Tt.pending}))," pending"),a.default.createElement("span",null,a.default.createElement("b",null,a.default.createElement(Nt,{value:Tt.done}))," done"))),Tt.pending>0&&a.default.createElement("div",{className:"donut-card"},a.default.createElement(kp,{size:96,stroke:14,centerLabel:Tt.pending,centerSublabel:"open",segments:cs.map(T=>({key:T.key,value:T.value,color:T.color}))}),a.default.createElement("div",{className:"donut-legend"},cs.map(T=>a.default.createElement("div",{className:"donut-legend-row",key:T.key},a.default.createElement("span",{className:"donut-legend-dot",style:{background:T.color}}),a.default.createElement("span",null,T.label," priority"),a.default.createElement("span",{className:"donut-legend-val"},T.value))))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{ref:S,type:"text",placeholder:"add a task, press enter...",value:E,onChange:T=>z(T.target.value),onKeyDown:T=>T.key==="Enter"&&ps()}),a.default.createElement("div",{className:"prio-select"},Ma.map(T=>a.default.createElement("button",{key:T.key,className:I===T.key?"active":"",style:{"--pc":T.color},onClick:()=>A(T.key)},T.label))),a.default.createElement("button",{className:"add-btn",onClick:ps,"aria-label":"Add task"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"filters"},["all","active","done"].map(T=>a.default.createElement("button",{key:T,className:P===T?"active":"",onClick:()=>O(T)},T)),a.default.createElement("span",{className:"spacer"}),Tt.done>0&&a.default.createElement("button",{className:"clear-btn",onClick:_p},"clear done")),a.default.createElement("div",{className:"task-list"},ds.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},P==="done"?"nothing completed yet":"queue's empty \u2014 add something")):ds.map((T,U)=>a.default.createElement(G0,{key:T.id,task:T,now:G,index:U,onToggle:Mp,onDelete:zp})))):e==="routines"?a.default.createElement(N0,{routines:s,setRoutines:u}):e==="vault"?a.default.createElement(F0,{vaultHabits:c,setVaultHabits:p,projects:g,setProjects:h}):e==="quest"?a.default.createElement(J0,{goodHabits:v,setGoodHabits:k,badHabits:y,setBadHabits:N,rewards:f,setRewards:d}):e==="pet"?a.default.createElement(Z0,{petCtl:b,apiKey:Ep(),showDataMsg:de,ctx:{pet:b.pet,level:x,hour:G?new Date(G).getHours():Yr().hour,phase:w.phase.id,doneToday:v.filter(T=>(T.history||[]).includes($(0))).length,totalToday:v.length,streak:v.reduce((T,U)=>Math.max(T,t0(U.history)),0),routineNow:null,nextRoutine:null}}):a.default.createElement(uh,{state:{routines:s,vaultHabits:c,goodHabits:v,badHabits:y,rewards:f,totalXP:m},setters:{setRoutines:u,setVaultHabits:p,setGoodHabits:k,setBadHabits:N,setRewards:d},showDataMsg:de}))))}var mh=gp.default.createRoot(document.getElementById("root"));mh.render(a.default.createElement(fh));})();
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
