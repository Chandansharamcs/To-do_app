(()=>{var sk=Object.create;var r0=Object.defineProperty;var ak=Object.getOwnPropertyDescriptor;var lk=Object.getOwnPropertyNames;var ck=Object.getPrototypeOf,dk=Object.prototype.hasOwnProperty;var Ai=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var uk=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of lk(e))!dk.call(t,i)&&i!==n&&r0(t,i,{get:()=>e[i],enumerable:!(r=ak(e,i))||r.enumerable});return t};var i0=(t,e,n)=>(n=t!=null?sk(ck(t)):{},uk(e||!t||!t.__esModule?r0(n,"default",{value:t,enumerable:!0}):n,t));var g0=Ai(me=>{"use strict";var $s=Symbol.for("react.element"),pk=Symbol.for("react.portal"),fk=Symbol.for("react.fragment"),mk=Symbol.for("react.strict_mode"),hk=Symbol.for("react.profiler"),gk=Symbol.for("react.provider"),yk=Symbol.for("react.context"),vk=Symbol.for("react.forward_ref"),bk=Symbol.for("react.suspense"),xk=Symbol.for("react.memo"),wk=Symbol.for("react.lazy"),o0=Symbol.iterator;function kk(t){return t===null||typeof t!="object"?null:(t=o0&&t[o0]||t["@@iterator"],typeof t=="function"?t:null)}var l0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},c0=Object.assign,d0={};function go(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||l0}go.prototype.isReactComponent={};go.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};go.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function u0(){}u0.prototype=go.prototype;function Mu(t,e,n){this.props=t,this.context=e,this.refs=d0,this.updater=n||l0}var Ou=Mu.prototype=new u0;Ou.constructor=Mu;c0(Ou,go.prototype);Ou.isPureReactComponent=!0;var s0=Array.isArray,p0=Object.prototype.hasOwnProperty,Bu={current:null},f0={key:!0,ref:!0,__self:!0,__source:!0};function m0(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)p0.call(e,r)&&!f0.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$s,type:t,key:o,ref:s,props:i,_owner:Bu.current}}function Ak(t,e){return{$$typeof:$s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fu(t){return typeof t=="object"&&t!==null&&t.$$typeof===$s}function Sk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var a0=/\/+/g;function Pu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sk(""+t.key):e.toString(36)}function _l(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case $s:case pk:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Pu(s,0):r,s0(i)?(n="",t!=null&&(n=t.replace(a0,"$&/")+"/"),_l(i,e,n,"",function(d){return d})):i!=null&&(Fu(i)&&(i=Ak(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(a0,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",s0(t))for(var l=0;l<t.length;l++){o=t[l];var c=r+Pu(o,l);s+=_l(o,e,n,c,i)}else if(c=kk(t),typeof c=="function")for(t=c.call(t),l=0;!(o=t.next()).done;)o=o.value,c=r+Pu(o,l++),s+=_l(o,e,n,c,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Cl(t,e,n){if(t==null)return t;var r=[],i=0;return _l(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Ek(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var At={current:null},Il={transition:null},Tk={ReactCurrentDispatcher:At,ReactCurrentBatchConfig:Il,ReactCurrentOwner:Bu};function h0(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!Fu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=go;me.Fragment=fk;me.Profiler=hk;me.PureComponent=Mu;me.StrictMode=mk;me.Suspense=bk;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tk;me.act=h0;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=c0({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Bu.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)p0.call(e,c)&&!f0.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:$s,type:t.type,key:i,ref:o,props:r,_owner:s}};me.createContext=function(t){return t={$$typeof:yk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gk,_context:t},t.Consumer=t};me.createElement=m0;me.createFactory=function(t){var e=m0.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:vk,render:t}};me.isValidElement=Fu;me.lazy=function(t){return{$$typeof:wk,_payload:{_status:-1,_result:t},_init:Ek}};me.memo=function(t,e){return{$$typeof:xk,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};me.unstable_act=h0;me.useCallback=function(t,e){return At.current.useCallback(t,e)};me.useContext=function(t){return At.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return At.current.useDeferredValue(t)};me.useEffect=function(t,e){return At.current.useEffect(t,e)};me.useId=function(){return At.current.useId()};me.useImperativeHandle=function(t,e,n){return At.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return At.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return At.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return At.current.useMemo(t,e)};me.useReducer=function(t,e,n){return At.current.useReducer(t,e,n)};me.useRef=function(t){return At.current.useRef(t)};me.useState=function(t){return At.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return At.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return At.current.useTransition()};me.version="18.3.1"});var Du=Ai((f4,y0)=>{"use strict";y0.exports=g0()});var C0=Ai(Pe=>{"use strict";function Vu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var r=n-1>>>1,i=t[r];if(0<Nl(i,e))t[r]=e,t[n]=i,n=r;else break e}}function vn(t){return t.length===0?null:t[0]}function Ml(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var r=0,i=t.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=t[s],c=s+1,d=t[c];if(0>Nl(l,n))c<i&&0>Nl(d,l)?(t[r]=d,t[c]=n,r=c):(t[r]=l,t[s]=n,r=s);else if(c<i&&0>Nl(d,n))t[r]=d,t[c]=n,r=c;else break e}}return e}function Nl(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(v0=performance,Pe.unstable_now=function(){return v0.now()}):(zu=Date,b0=zu.now(),Pe.unstable_now=function(){return zu.now()-b0});var v0,zu,b0,Un=[],Dr=[],Ck=1,Yt=null,mt=3,Ol=!1,Si=!1,qs=!1,k0=typeof setTimeout=="function"?setTimeout:null,A0=typeof clearTimeout=="function"?clearTimeout:null,x0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Wu(t){for(var e=vn(Dr);e!==null;){if(e.callback===null)Ml(Dr);else if(e.startTime<=t)Ml(Dr),e.sortIndex=e.expirationTime,Vu(Un,e);else break;e=vn(Dr)}}function $u(t){if(qs=!1,Wu(t),!Si)if(vn(Un)!==null)Si=!0,qu(Hu);else{var e=vn(Dr);e!==null&&Ru($u,e.startTime-t)}}function Hu(t,e){Si=!1,qs&&(qs=!1,A0(Rs),Rs=-1),Ol=!0;var n=mt;try{for(Wu(e),Yt=vn(Un);Yt!==null&&(!(Yt.expirationTime>e)||t&&!T0());){var r=Yt.callback;if(typeof r=="function"){Yt.callback=null,mt=Yt.priorityLevel;var i=r(Yt.expirationTime<=e);e=Pe.unstable_now(),typeof i=="function"?Yt.callback=i:Yt===vn(Un)&&Ml(Un),Wu(e)}else Ml(Un);Yt=vn(Un)}if(Yt!==null)var o=!0;else{var s=vn(Dr);s!==null&&Ru($u,s.startTime-e),o=!1}return o}finally{Yt=null,mt=n,Ol=!1}}var Bl=!1,Pl=null,Rs=-1,S0=5,E0=-1;function T0(){return!(Pe.unstable_now()-E0<S0)}function Lu(){if(Pl!==null){var t=Pe.unstable_now();E0=t;var e=!0;try{e=Pl(!0,t)}finally{e?Hs():(Bl=!1,Pl=null)}}else Bl=!1}var Hs;typeof x0=="function"?Hs=function(){x0(Lu)}:typeof MessageChannel<"u"?(Uu=new MessageChannel,w0=Uu.port2,Uu.port1.onmessage=Lu,Hs=function(){w0.postMessage(null)}):Hs=function(){k0(Lu,0)};var Uu,w0;function qu(t){Pl=t,Bl||(Bl=!0,Hs())}function Ru(t,e){Rs=k0(function(){t(Pe.unstable_now())},e)}Pe.unstable_IdlePriority=5;Pe.unstable_ImmediatePriority=1;Pe.unstable_LowPriority=4;Pe.unstable_NormalPriority=3;Pe.unstable_Profiling=null;Pe.unstable_UserBlockingPriority=2;Pe.unstable_cancelCallback=function(t){t.callback=null};Pe.unstable_continueExecution=function(){Si||Ol||(Si=!0,qu(Hu))};Pe.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S0=0<t?Math.floor(1e3/t):5};Pe.unstable_getCurrentPriorityLevel=function(){return mt};Pe.unstable_getFirstCallbackNode=function(){return vn(Un)};Pe.unstable_next=function(t){switch(mt){case 1:case 2:case 3:var e=3;break;default:e=mt}var n=mt;mt=e;try{return t()}finally{mt=n}};Pe.unstable_pauseExecution=function(){};Pe.unstable_requestPaint=function(){};Pe.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=mt;mt=t;try{return e()}finally{mt=n}};Pe.unstable_scheduleCallback=function(t,e,n){var r=Pe.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,t){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=n+i,t={id:Ck++,callback:e,priorityLevel:t,startTime:n,expirationTime:i,sortIndex:-1},n>r?(t.sortIndex=n,Vu(Dr,t),vn(Un)===null&&t===vn(Dr)&&(qs?(A0(Rs),Rs=-1):qs=!0,Ru($u,n-r))):(t.sortIndex=i,Vu(Un,t),Si||Ol||(Si=!0,qu(Hu))),t};Pe.unstable_shouldYield=T0;Pe.unstable_wrapCallback=function(t){var e=mt;return function(){var n=mt;mt=e;try{return t.apply(this,arguments)}finally{mt=n}}}});var I0=Ai((h4,_0)=>{"use strict";_0.exports=C0()});var Ov=Ai(Rt=>{"use strict";var _k=Du(),Ht=I0();function H(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dg=new Set,fa={};function zi(t,e){zo(t,e),zo(t+"Capture",e)}function zo(t,e){for(fa[t]=e,t=0;t<e.length;t++)Dg.add(e[t])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mp=Object.prototype.hasOwnProperty,Ik=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N0={},P0={};function Nk(t){return mp.call(P0,t)?!0:mp.call(N0,t)?!1:Ik.test(t)?P0[t]=!0:(N0[t]=!0,!1)}function Pk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mk(t,e,n,r){if(e===null||typeof e>"u"||Pk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var af=/[\-:]([a-z])/g;function lf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(af,lf);ut[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(af,lf);ut[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(af,lf);ut[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function cf(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mk(e,n,i,r)&&(n=null),r||i===null?Nk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var fr=_k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fl=Symbol.for("react.element"),bo=Symbol.for("react.portal"),xo=Symbol.for("react.fragment"),df=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),zg=Symbol.for("react.provider"),Lg=Symbol.for("react.context"),uf=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),yp=Symbol.for("react.suspense_list"),pf=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),Ug=Symbol.for("react.offscreen"),M0=Symbol.iterator;function js(t){return t===null||typeof t!="object"?null:(t=M0&&t[M0]||t["@@iterator"],typeof t=="function"?t:null)}var $e=Object.assign,ju;function ea(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var Gu=!1;function Qu(t,e){if(!t||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=s&&0<=l);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ea(t):""}function Ok(t){switch(t.tag){case 5:return ea(t.type);case 16:return ea("Lazy");case 13:return ea("Suspense");case 19:return ea("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function vp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case xo:return"Fragment";case bo:return"Portal";case hp:return"Profiler";case df:return"StrictMode";case gp:return"Suspense";case yp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lg:return(t.displayName||"Context")+".Consumer";case zg:return(t._context.displayName||"Context")+".Provider";case uf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pf:return e=t.displayName||null,e!==null?e:vp(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return vp(t(e))}catch{}}return null}function Bk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vp(e);case 8:return e===df?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Vg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fk(t){var e=Vg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Dl(t){t._valueTracker||(t._valueTracker=Fk(t))}function Wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Vg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bp(t,e){var n=e.checked;return $e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function O0(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $g(t,e){e=e.checked,e!=null&&cf(t,"checked",e,!1)}function xp(t,e){$g(t,e);var n=Jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wp(t,e.type,n):e.hasOwnProperty("defaultValue")&&wp(t,e.type,Jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function B0(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wp(t,e,n){(e!=="number"||dc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ta=Array.isArray;function Po(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function kp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(H(91));return $e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function F0(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(H(92));if(ta(n)){if(1<n.length)throw Error(H(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jr(n)}}function Hg(t,e){var n=Jr(e.value),r=Jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function D0(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function qg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ap(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?qg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zl,Rg=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t})(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zl=zl||document.createElement("div"),zl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dk=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(t){Dk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ia[e]=ia[t]})});function jg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ia.hasOwnProperty(t)&&ia[t]?(""+e).trim():e+"px"}function Gg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=jg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zk=$e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sp(t,e){if(e){if(zk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(H(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(H(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(H(61))}if(e.style!=null&&typeof e.style!="object")throw Error(H(62))}}function Ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tp=null;function ff(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cp=null,Mo=null,Oo=null;function z0(t){if(t=Ma(t)){if(typeof Cp!="function")throw Error(H(280));var e=t.stateNode;e&&(e=Lc(e),Cp(t.stateNode,t.type,e))}}function Qg(t){Mo?Oo?Oo.push(t):Oo=[t]:Mo=t}function Kg(){if(Mo){var t=Mo,e=Oo;if(Oo=Mo=null,z0(t),e)for(t=0;t<e.length;t++)z0(e[t])}}function Xg(t,e){return t(e)}function Yg(){}var Ku=!1;function Jg(t,e,n){if(Ku)return t(e,n);Ku=!0;try{return Xg(t,e,n)}finally{Ku=!1,(Mo!==null||Oo!==null)&&(Yg(),Kg())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(H(231,e,typeof n));return n}var _p=!1;if(cr)try{yo={},Object.defineProperty(yo,"passive",{get:function(){_p=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{_p=!1}var yo;function Lk(t,e,n,r,i,o,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(u){this.onError(u)}}var oa=!1,uc=null,pc=!1,Ip=null,Uk={onError:function(t){oa=!0,uc=t}};function Vk(t,e,n,r,i,o,s,l,c){oa=!1,uc=null,Lk.apply(Uk,arguments)}function Wk(t,e,n,r,i,o,s,l,c){if(Vk.apply(this,arguments),oa){if(oa){var d=uc;oa=!1,uc=null}else throw Error(H(198));pc||(pc=!0,Ip=d)}}function Li(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function L0(t){if(Li(t)!==t)throw Error(H(188))}function $k(t){var e=t.alternate;if(!e){if(e=Li(t),e===null)throw Error(H(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return L0(i),t;if(o===r)return L0(i),e;o=o.sibling}throw Error(H(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(H(189))}}if(n.alternate!==r)throw Error(H(190))}if(n.tag!==3)throw Error(H(188));return n.stateNode.current===n?t:e}function ey(t){return t=$k(t),t!==null?ty(t):null}function ty(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ty(t);if(e!==null)return e;t=t.sibling}return null}var ny=Ht.unstable_scheduleCallback,U0=Ht.unstable_cancelCallback,Hk=Ht.unstable_shouldYield,qk=Ht.unstable_requestPaint,Ge=Ht.unstable_now,Rk=Ht.unstable_getCurrentPriorityLevel,mf=Ht.unstable_ImmediatePriority,ry=Ht.unstable_UserBlockingPriority,fc=Ht.unstable_NormalPriority,jk=Ht.unstable_LowPriority,iy=Ht.unstable_IdlePriority,Bc=null,Hn=null;function Gk(t){if(Hn&&typeof Hn.onCommitFiberRoot=="function")try{Hn.onCommitFiberRoot(Bc,t,void 0,(t.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:Xk,Qk=Math.log,Kk=Math.LN2;function Xk(t){return t>>>=0,t===0?32:31-(Qk(t)/Kk|0)|0}var Ll=64,Ul=4194304;function na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=na(l):(o&=s,o!==0&&(r=na(o)))}else s=n&~i,s!==0?r=na(s):o!==0&&(r=na(o));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-An(e),i=1<<n,r|=t[n],e&=~i;return r}function Yk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-An(o),l=1<<s,c=i[s];c===-1?((l&n)===0||(l&r)!==0)&&(i[s]=Yk(l,e)):c<=e&&(t.expiredLanes|=l),o&=~l}}function Np(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oy(){var t=Ll;return Ll<<=1,(Ll&4194240)===0&&(Ll=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-An(e),t[e]=n}function Zk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-An(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function hf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-An(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function sy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ay,gf,ly,cy,dy,Pp=!1,Vl=[],qr=null,Rr=null,jr=null,ga=new Map,ya=new Map,Vr=[],e2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function V0(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":jr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Gs(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ma(e),e!==null&&gf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function t2(t,e,n,r,i){switch(e){case"focusin":return qr=Gs(qr,t,e,n,r,i),!0;case"dragenter":return Rr=Gs(Rr,t,e,n,r,i),!0;case"mouseover":return jr=Gs(jr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return ga.set(o,Gs(ga.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ya.set(o,Gs(ya.get(o)||null,t,e,n,r,i)),!0}return!1}function uy(t){var e=Ci(t.target);if(e!==null){var n=Li(e);if(n!==null){if(e=n.tag,e===13){if(e=Zg(n),e!==null){t.blockedOn=e,dy(t.priority,function(){ly(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tp=r,n.target.dispatchEvent(r),Tp=null}else return e=Ma(n),e!==null&&gf(e),t.blockedOn=n,!1;e.shift()}return!0}function W0(t,e,n){ec(t)&&n.delete(e)}function n2(){Pp=!1,qr!==null&&ec(qr)&&(qr=null),Rr!==null&&ec(Rr)&&(Rr=null),jr!==null&&ec(jr)&&(jr=null),ga.forEach(W0),ya.forEach(W0)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Pp||(Pp=!0,Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority,n2)))}function va(t){function e(i){return Qs(i,t)}if(0<Vl.length){Qs(Vl[0],t);for(var n=1;n<Vl.length;n++){var r=Vl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&Qs(qr,t),Rr!==null&&Qs(Rr,t),jr!==null&&Qs(jr,t),ga.forEach(e),ya.forEach(e),n=0;n<Vr.length;n++)r=Vr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vr.length&&(n=Vr[0],n.blockedOn===null);)uy(n),n.blockedOn===null&&Vr.shift()}var Bo=fr.ReactCurrentBatchConfig,hc=!0;function r2(t,e,n,r){var i=Te,o=Bo.transition;Bo.transition=null;try{Te=1,yf(t,e,n,r)}finally{Te=i,Bo.transition=o}}function i2(t,e,n,r){var i=Te,o=Bo.transition;Bo.transition=null;try{Te=4,yf(t,e,n,r)}finally{Te=i,Bo.transition=o}}function yf(t,e,n,r){if(hc){var i=Mp(t,e,n,r);if(i===null)rp(t,e,r,gc,n),V0(t,r);else if(t2(i,t,e,n,r))r.stopPropagation();else if(V0(t,r),e&4&&-1<e2.indexOf(t)){for(;i!==null;){var o=Ma(i);if(o!==null&&ay(o),o=Mp(t,e,n,r),o===null&&rp(t,e,r,gc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else rp(t,e,r,null,n)}}var gc=null;function Mp(t,e,n,r){if(gc=null,t=ff(r),t=Ci(t),t!==null)if(e=Li(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return gc=t,null}function py(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rk()){case mf:return 1;case ry:return 4;case fc:case jk:return 16;case iy:return 536870912;default:return 16}default:return 16}}var $r=null,vf=null,tc=null;function fy(){if(tc)return tc;var t,e=vf,n=e.length,r,i="value"in $r?$r.value:$r.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return tc=i.slice(t,1<r?1-r:void 0)}function nc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wl(){return!0}function $0(){return!1}function qt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wl:$0,this.isPropagationStopped=$0,this}return $e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=qt(qo),Pa=$e({},qo,{view:0,detail:0}),o2=qt(Pa),Yu,Ju,Ks,Fc=$e({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ks&&(Ks&&t.type==="mousemove"?(Yu=t.screenX-Ks.screenX,Ju=t.screenY-Ks.screenY):Ju=Yu=0,Ks=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),H0=qt(Fc),s2=$e({},Fc,{dataTransfer:0}),a2=qt(s2),l2=$e({},Pa,{relatedTarget:0}),Zu=qt(l2),c2=$e({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),d2=qt(c2),u2=$e({},qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p2=qt(u2),f2=$e({},qo,{data:0}),q0=qt(f2),m2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},h2={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g2={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y2(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=g2[t])?!!e[t]:!1}function xf(){return y2}var v2=$e({},Pa,{key:function(t){if(t.key){var e=m2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?h2[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xf,charCode:function(t){return t.type==="keypress"?nc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),b2=qt(v2),x2=$e({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),R0=qt(x2),w2=$e({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xf}),k2=qt(w2),A2=$e({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),S2=qt(A2),E2=$e({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T2=qt(E2),C2=[9,13,27,32],wf=cr&&"CompositionEvent"in window,sa=null;cr&&"documentMode"in document&&(sa=document.documentMode);var _2=cr&&"TextEvent"in window&&!sa,my=cr&&(!wf||sa&&8<sa&&11>=sa),j0=" ",G0=!1;function hy(t,e){switch(t){case"keyup":return C2.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wo=!1;function I2(t,e){switch(t){case"compositionend":return gy(e);case"keypress":return e.which!==32?null:(G0=!0,j0);case"textInput":return t=e.data,t===j0&&G0?null:t;default:return null}}function N2(t,e){if(wo)return t==="compositionend"||!wf&&hy(t,e)?(t=fy(),tc=vf=$r=null,wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return my&&e.locale!=="ko"?null:e.data;default:return null}}var P2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P2[t.type]:e==="textarea"}function yy(t,e,n,r){Qg(r),e=yc(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var aa=null,ba=null;function M2(t){_y(t,0)}function Dc(t){var e=So(t);if(Wg(e))return t}function O2(t,e){if(t==="change")return e}var vy=!1;cr&&(cr?(Hl="oninput"in document,Hl||(ep=document.createElement("div"),ep.setAttribute("oninput","return;"),Hl=typeof ep.oninput=="function"),$l=Hl):$l=!1,vy=$l&&(!document.documentMode||9<document.documentMode));var $l,Hl,ep;function K0(){aa&&(aa.detachEvent("onpropertychange",by),ba=aa=null)}function by(t){if(t.propertyName==="value"&&Dc(ba)){var e=[];yy(e,ba,t,ff(t)),Jg(M2,e)}}function B2(t,e,n){t==="focusin"?(K0(),aa=e,ba=n,aa.attachEvent("onpropertychange",by)):t==="focusout"&&K0()}function F2(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dc(ba)}function D2(t,e){if(t==="click")return Dc(e)}function z2(t,e){if(t==="input"||t==="change")return Dc(e)}function L2(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var En=typeof Object.is=="function"?Object.is:L2;function xa(t,e){if(En(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!mp.call(e,i)||!En(t[i],e[i]))return!1}return!0}function X0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Y0(t,e){var n=X0(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=X0(n)}}function xy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?xy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wy(){for(var t=window,e=dc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dc(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function U2(t){var e=wy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&xy(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Y0(n,o);var s=Y0(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var V2=cr&&"documentMode"in document&&11>=document.documentMode,ko=null,Op=null,la=null,Bp=!1;function J0(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bp||ko==null||ko!==dc(r)||(r=ko,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&xa(la,r)||(la=r,r=yc(Op,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ko)))}function ql(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ao={animationend:ql("Animation","AnimationEnd"),animationiteration:ql("Animation","AnimationIteration"),animationstart:ql("Animation","AnimationStart"),transitionend:ql("Transition","TransitionEnd")},tp={},ky={};cr&&(ky=document.createElement("div").style,"AnimationEvent"in window||(delete Ao.animationend.animation,delete Ao.animationiteration.animation,delete Ao.animationstart.animation),"TransitionEvent"in window||delete Ao.transitionend.transition);function zc(t){if(tp[t])return tp[t];if(!Ao[t])return t;var e=Ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ky)return tp[t]=e[n];return t}var Ay=zc("animationend"),Sy=zc("animationiteration"),Ey=zc("animationstart"),Ty=zc("transitionend"),Cy=new Map,Z0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ei(t,e){Cy.set(t,e),zi(e,[t])}for(Rl=0;Rl<Z0.length;Rl++)jl=Z0[Rl],eg=jl.toLowerCase(),tg=jl[0].toUpperCase()+jl.slice(1),ei(eg,"on"+tg);var jl,eg,tg,Rl;ei(Ay,"onAnimationEnd");ei(Sy,"onAnimationIteration");ei(Ey,"onAnimationStart");ei("dblclick","onDoubleClick");ei("focusin","onFocus");ei("focusout","onBlur");ei(Ty,"onTransitionEnd");zo("onMouseEnter",["mouseout","mouseover"]);zo("onMouseLeave",["mouseout","mouseover"]);zo("onPointerEnter",["pointerout","pointerover"]);zo("onPointerLeave",["pointerout","pointerover"]);zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zi("onBeforeInput",["compositionend","keypress","textInput","paste"]);zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),W2=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function ng(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Wk(r,e,void 0,t),t.currentTarget=null}function _y(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;ng(i,l,d),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;ng(i,l,d),o=c}}}if(pc)throw t=Ip,pc=!1,Ip=null,t}function Oe(t,e){var n=e[Up];n===void 0&&(n=e[Up]=new Set);var r=t+"__bubble";n.has(r)||(Iy(e,t,2,!1),n.add(r))}function np(t,e,n){var r=0;e&&(r|=4),Iy(n,t,r,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[Gl]){t[Gl]=!0,Dg.forEach(function(n){n!=="selectionchange"&&(W2.has(n)||np(n,!1,t),np(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,np("selectionchange",!1,e))}}function Iy(t,e,n,r){switch(py(e)){case 1:var i=r2;break;case 4:i=i2;break;default:i=yf}n=i.bind(null,e,n,t),i=void 0,!_p||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rp(t,e,n,r,i){var o=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Ci(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}Jg(function(){var d=o,u=ff(n),p=[];e:{var f=Cy.get(t);if(f!==void 0){var m=bf,h=t;switch(t){case"keypress":if(nc(n)===0)break e;case"keydown":case"keyup":m=b2;break;case"focusin":h="focus",m=Zu;break;case"focusout":h="blur",m=Zu;break;case"beforeblur":case"afterblur":m=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=H0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=k2;break;case Ay:case Sy:case Ey:m=d2;break;case Ty:m=S2;break;case"scroll":m=o2;break;case"wheel":m=T2;break;case"copy":case"cut":case"paste":m=p2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=R0}var v=(e&4)!==0,x=!v&&t==="scroll",y=v?f!==null?f+"Capture":null:f;v=[];for(var g=d,b;g!==null;){b=g;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,y!==null&&(w=ha(g,y),w!=null&&v.push(ka(g,w,b)))),x)break;g=g.return}0<v.length&&(f=new m(f,h,null,n,u),p.push({event:f,listeners:v}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Tp&&(h=n.relatedTarget||n.fromElement)&&(Ci(h)||h[dr]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(h=n.relatedTarget||n.toElement,m=d,h=h?Ci(h):null,h!==null&&(x=Li(h),h!==x||h.tag!==5&&h.tag!==6)&&(h=null)):(m=null,h=d),m!==h)){if(v=H0,w="onMouseLeave",y="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=R0,w="onPointerLeave",y="onPointerEnter",g="pointer"),x=m==null?f:So(m),b=h==null?f:So(h),f=new v(w,g+"leave",m,n,u),f.target=x,f.relatedTarget=b,w=null,Ci(u)===d&&(v=new v(y,g+"enter",h,n,u),v.target=b,v.relatedTarget=x,w=v),x=w,m&&h)t:{for(v=m,y=h,g=0,b=v;b;b=vo(b))g++;for(b=0,w=y;w;w=vo(w))b++;for(;0<g-b;)v=vo(v),g--;for(;0<b-g;)y=vo(y),b--;for(;g--;){if(v===y||y!==null&&v===y.alternate)break t;v=vo(v),y=vo(y)}v=null}else v=null;m!==null&&rg(p,f,m,v,!1),h!==null&&x!==null&&rg(p,x,h,v,!0)}}e:{if(f=d?So(d):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var k=O2;else if(Q0(f))if(vy)k=z2;else{k=F2;var S=B2}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=D2);if(k&&(k=k(t,d))){yy(p,k,n,u);break e}S&&S(t,f,d),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&wp(f,"number",f.value)}switch(S=d?So(d):window,t){case"focusin":(Q0(S)||S.contentEditable==="true")&&(ko=S,Op=d,la=null);break;case"focusout":la=Op=ko=null;break;case"mousedown":Bp=!0;break;case"contextmenu":case"mouseup":case"dragend":Bp=!1,J0(p,n,u);break;case"selectionchange":if(V2)break;case"keydown":case"keyup":J0(p,n,u)}var E;if(wf)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else wo?hy(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(my&&n.locale!=="ko"&&(wo||T!=="onCompositionStart"?T==="onCompositionEnd"&&wo&&(E=fy()):($r=u,vf="value"in $r?$r.value:$r.textContent,wo=!0)),S=yc(d,T),0<S.length&&(T=new q0(T,t,null,n,u),p.push({event:T,listeners:S}),E?T.data=E:(E=gy(n),E!==null&&(T.data=E)))),(E=_2?I2(t,n):N2(t,n))&&(d=yc(d,"onBeforeInput"),0<d.length&&(u=new q0("onBeforeInput","beforeinput",null,n,u),p.push({event:u,listeners:d}),u.data=E))}_y(p,e)})}function ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ha(t,n),o!=null&&r.unshift(ka(t,o,i)),o=ha(t,e),o!=null&&r.push(ka(t,o,i))),t=t.return}return r}function vo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=ha(n,o),c!=null&&s.unshift(ka(n,c,l))):i||(c=ha(n,o),c!=null&&s.push(ka(n,c,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var $2=/\r\n?/g,H2=/\u0000|\uFFFD/g;function ig(t){return(typeof t=="string"?t:""+t).replace($2,`
`).replace(H2,"")}function Ql(t,e,n){if(e=ig(e),ig(t)!==e&&n)throw Error(H(425))}function vc(){}var Fp=null,Dp=null;function zp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Lp=typeof setTimeout=="function"?setTimeout:void 0,q2=typeof clearTimeout=="function"?clearTimeout:void 0,og=typeof Promise=="function"?Promise:void 0,R2=typeof queueMicrotask=="function"?queueMicrotask:typeof og<"u"?function(t){return og.resolve(null).then(t).catch(j2)}:Lp;function j2(t){setTimeout(function(){throw t})}function ip(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function Gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ro=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ro,Aa="__reactProps$"+Ro,dr="__reactContainer$"+Ro,Up="__reactEvents$"+Ro,G2="__reactListeners$"+Ro,Q2="__reactHandles$"+Ro;function Ci(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sg(t);t!==null;){if(n=t[$n])return n;t=sg(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[$n]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function So(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(H(33))}function Lc(t){return t[Aa]||null}var Vp=[],Eo=-1;function ti(t){return{current:t}}function Be(t){0>Eo||(t.current=Vp[Eo],Vp[Eo]=null,Eo--)}function Me(t,e){Eo++,Vp[Eo]=t.current,t.current=e}var Zr={},vt=ti(Zr),Bt=ti(!1),Mi=Zr;function Lo(t,e){var n=t.type.contextTypes;if(!n)return Zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ft(t){return t=t.childContextTypes,t!=null}function bc(){Be(Bt),Be(vt)}function ag(t,e,n){if(vt.current!==Zr)throw Error(H(168));Me(vt,e),Me(Bt,n)}function Ny(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(H(108,Bk(t)||"Unknown",i));return $e({},n,r)}function xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Mi=vt.current,Me(vt,t),Me(Bt,Bt.current),!0}function lg(t,e,n){var r=t.stateNode;if(!r)throw Error(H(169));n?(t=Ny(t,e,Mi),r.__reactInternalMemoizedMergedChildContext=t,Be(Bt),Be(vt),Me(vt,t)):Be(Bt),Me(Bt,n)}var or=null,Uc=!1,op=!1;function Py(t){or===null?or=[t]:or.push(t)}function K2(t){Uc=!0,Py(t)}function ni(){if(!op&&or!==null){op=!0;var t=0,e=Te;try{var n=or;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}or=null,Uc=!1}catch(i){throw or!==null&&(or=or.slice(t+1)),ny(mf,ni),i}finally{Te=e,op=!1}}return null}var To=[],Co=0,wc=null,kc=0,Jt=[],Zt=0,Oi=null,sr=1,ar="";function Ei(t,e){To[Co++]=kc,To[Co++]=wc,wc=t,kc=e}function My(t,e,n){Jt[Zt++]=sr,Jt[Zt++]=ar,Jt[Zt++]=Oi,Oi=t;var r=sr;t=ar;var i=32-An(r)-1;r&=~(1<<i),n+=1;var o=32-An(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,sr=1<<32-An(e)+i|n<<i|r,ar=o+t}else sr=1<<o|n<<i|r,ar=t}function Af(t){t.return!==null&&(Ei(t,1),My(t,1,0))}function Sf(t){for(;t===wc;)wc=To[--Co],To[Co]=null,kc=To[--Co],To[Co]=null;for(;t===Oi;)Oi=Jt[--Zt],Jt[Zt]=null,ar=Jt[--Zt],Jt[Zt]=null,sr=Jt[--Zt],Jt[Zt]=null}var $t=null,Wt=null,Le=!1,kn=null;function Oy(t,e){var n=en(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$t=t,Wt=Gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$t=t,Wt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Oi!==null?{id:sr,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=en(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$t=t,Wt=null,!0):!1;default:return!1}}function Wp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $p(t){if(Le){var e=Wt;if(e){var n=e;if(!cg(t,e)){if(Wp(t))throw Error(H(418));e=Gr(n.nextSibling);var r=$t;e&&cg(t,e)?Oy(r,n):(t.flags=t.flags&-4097|2,Le=!1,$t=t)}}else{if(Wp(t))throw Error(H(418));t.flags=t.flags&-4097|2,Le=!1,$t=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$t=t}function Kl(t){if(t!==$t)return!1;if(!Le)return dg(t),Le=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zp(t.type,t.memoizedProps)),e&&(e=Wt)){if(Wp(t))throw By(),Error(H(418));for(;e;)Oy(t,e),e=Gr(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(H(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Wt=Gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Wt=null}}else Wt=$t?Gr(t.stateNode.nextSibling):null;return!0}function By(){for(var t=Wt;t;)t=Gr(t.nextSibling)}function Uo(){Wt=$t=null,Le=!1}function Ef(t){kn===null?kn=[t]:kn.push(t)}var X2=fr.ReactCurrentBatchConfig;function Xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(H(309));var r=n.stateNode}if(!r)throw Error(H(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(H(284));if(!n._owner)throw Error(H(290,t))}return t}function Xl(t,e){throw t=Object.prototype.toString.call(e),Error(H(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ug(t){var e=t._init;return e(t._payload)}function Fy(t){function e(y,g){if(t){var b=y.deletions;b===null?(y.deletions=[g],y.flags|=16):b.push(g)}}function n(y,g){if(!t)return null;for(;g!==null;)e(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=Yr(y,g),y.index=0,y.sibling=null,y}function o(y,g,b){return y.index=b,t?(b=y.alternate,b!==null?(b=b.index,b<g?(y.flags|=2,g):b):(y.flags|=2,g)):(y.flags|=1048576,g)}function s(y){return t&&y.alternate===null&&(y.flags|=2),y}function l(y,g,b,w){return g===null||g.tag!==6?(g=pp(b,y.mode,w),g.return=y,g):(g=i(g,b),g.return=y,g)}function c(y,g,b,w){var k=b.type;return k===xo?u(y,g,b.props.children,w,b.key):g!==null&&(g.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lr&&ug(k)===g.type)?(w=i(g,b.props),w.ref=Xs(y,g,b),w.return=y,w):(w=cc(b.type,b.key,b.props,null,y.mode,w),w.ref=Xs(y,g,b),w.return=y,w)}function d(y,g,b,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==b.containerInfo||g.stateNode.implementation!==b.implementation?(g=fp(b,y.mode,w),g.return=y,g):(g=i(g,b.children||[]),g.return=y,g)}function u(y,g,b,w,k){return g===null||g.tag!==7?(g=Pi(b,y.mode,w,k),g.return=y,g):(g=i(g,b),g.return=y,g)}function p(y,g,b){if(typeof g=="string"&&g!==""||typeof g=="number")return g=pp(""+g,y.mode,b),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fl:return b=cc(g.type,g.key,g.props,null,y.mode,b),b.ref=Xs(y,null,g),b.return=y,b;case bo:return g=fp(g,y.mode,b),g.return=y,g;case Lr:var w=g._init;return p(y,w(g._payload),b)}if(ta(g)||js(g))return g=Pi(g,y.mode,b,null),g.return=y,g;Xl(y,g)}return null}function f(y,g,b,w){var k=g!==null?g.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return k!==null?null:l(y,g,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fl:return b.key===k?c(y,g,b,w):null;case bo:return b.key===k?d(y,g,b,w):null;case Lr:return k=b._init,f(y,g,k(b._payload),w)}if(ta(b)||js(b))return k!==null?null:u(y,g,b,w,null);Xl(y,b)}return null}function m(y,g,b,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return y=y.get(b)||null,l(g,y,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Fl:return y=y.get(w.key===null?b:w.key)||null,c(g,y,w,k);case bo:return y=y.get(w.key===null?b:w.key)||null,d(g,y,w,k);case Lr:var S=w._init;return m(y,g,b,S(w._payload),k)}if(ta(w)||js(w))return y=y.get(b)||null,u(g,y,w,k,null);Xl(g,w)}return null}function h(y,g,b,w){for(var k=null,S=null,E=g,T=g=0,_=null;E!==null&&T<b.length;T++){E.index>T?(_=E,E=null):_=E.sibling;var C=f(y,E,b[T],w);if(C===null){E===null&&(E=_);break}t&&E&&C.alternate===null&&e(y,E),g=o(C,g,T),S===null?k=C:S.sibling=C,S=C,E=_}if(T===b.length)return n(y,E),Le&&Ei(y,T),k;if(E===null){for(;T<b.length;T++)E=p(y,b[T],w),E!==null&&(g=o(E,g,T),S===null?k=E:S.sibling=E,S=E);return Le&&Ei(y,T),k}for(E=r(y,E);T<b.length;T++)_=m(E,y,T,b[T],w),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?T:_.key),g=o(_,g,T),S===null?k=_:S.sibling=_,S=_);return t&&E.forEach(function(I){return e(y,I)}),Le&&Ei(y,T),k}function v(y,g,b,w){var k=js(b);if(typeof k!="function")throw Error(H(150));if(b=k.call(b),b==null)throw Error(H(151));for(var S=k=null,E=g,T=g=0,_=null,C=b.next();E!==null&&!C.done;T++,C=b.next()){E.index>T?(_=E,E=null):_=E.sibling;var I=f(y,E,C.value,w);if(I===null){E===null&&(E=_);break}t&&E&&I.alternate===null&&e(y,E),g=o(I,g,T),S===null?k=I:S.sibling=I,S=I,E=_}if(C.done)return n(y,E),Le&&Ei(y,T),k;if(E===null){for(;!C.done;T++,C=b.next())C=p(y,C.value,w),C!==null&&(g=o(C,g,T),S===null?k=C:S.sibling=C,S=C);return Le&&Ei(y,T),k}for(E=r(y,E);!C.done;T++,C=b.next())C=m(E,y,T,C.value,w),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?T:C.key),g=o(C,g,T),S===null?k=C:S.sibling=C,S=C);return t&&E.forEach(function(M){return e(y,M)}),Le&&Ei(y,T),k}function x(y,g,b,w){if(typeof b=="object"&&b!==null&&b.type===xo&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Fl:e:{for(var k=b.key,S=g;S!==null;){if(S.key===k){if(k=b.type,k===xo){if(S.tag===7){n(y,S.sibling),g=i(S,b.props.children),g.return=y,y=g;break e}}else if(S.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Lr&&ug(k)===S.type){n(y,S.sibling),g=i(S,b.props),g.ref=Xs(y,S,b),g.return=y,y=g;break e}n(y,S);break}else e(y,S);S=S.sibling}b.type===xo?(g=Pi(b.props.children,y.mode,w,b.key),g.return=y,y=g):(w=cc(b.type,b.key,b.props,null,y.mode,w),w.ref=Xs(y,g,b),w.return=y,y=w)}return s(y);case bo:e:{for(S=b.key;g!==null;){if(g.key===S)if(g.tag===4&&g.stateNode.containerInfo===b.containerInfo&&g.stateNode.implementation===b.implementation){n(y,g.sibling),g=i(g,b.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else e(y,g);g=g.sibling}g=fp(b,y.mode,w),g.return=y,y=g}return s(y);case Lr:return S=b._init,x(y,g,S(b._payload),w)}if(ta(b))return h(y,g,b,w);if(js(b))return v(y,g,b,w);Xl(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,b),g.return=y,y=g):(n(y,g),g=pp(b,y.mode,w),g.return=y,y=g),s(y)):n(y,g)}return x}var Vo=Fy(!0),Dy=Fy(!1),Ac=ti(null),Sc=null,_o=null,Tf=null;function Cf(){Tf=_o=Sc=null}function _f(t){var e=Ac.current;Be(Ac),t._currentValue=e}function Hp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fo(t,e){Sc=t,Tf=_o=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(Ot=!0),t.firstContext=null)}function nn(t){var e=t._currentValue;if(Tf!==t)if(t={context:t,memoizedValue:e,next:null},_o===null){if(Sc===null)throw Error(H(308));_o=t,Sc.dependencies={lanes:0,firstContext:t}}else _o=_o.next=t;return e}var _i=null;function If(t){_i===null?_i=[t]:_i.push(t)}function zy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,If(e)):(n.next=i.next,i.next=n),e.interleaved=n,ur(t,r)}function ur(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ly(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function lr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ke&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,ur(t,n)}return i=r.interleaved,i===null?(e.next=e,If(r)):(e.next=i.next,i.next=e),r.interleaved=e,ur(t,n)}function rc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}function pg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ec(t,e,n,r){var i=t.updateQueue;Ur=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?o=d:s.next=d,s=c;var u=t.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==s&&(l===null?u.firstBaseUpdate=d:l.next=d,u.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,u=d=c=null,l=o;do{var f=l.lane,m=l.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=t,v=l;switch(f=e,m=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){p=h.call(m,p,f);break e}p=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,f=typeof h=="function"?h.call(m,p,f):h,f==null)break e;p=$e({},p,f);break e;case 2:Ur=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(d=u=m,c=p):u=u.next=m,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(c=p),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);Fi|=s,t.lanes=s,t.memoizedState=p}}function fg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(H(191,i));i.call(r)}}}var Oa={},qn=ti(Oa),Sa=ti(Oa),Ea=ti(Oa);function Ii(t){if(t===Oa)throw Error(H(174));return t}function Pf(t,e){switch(Me(Ea,e),Me(Sa,t),Me(qn,Oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ap(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ap(e,t)}Be(qn),Me(qn,e)}function Wo(){Be(qn),Be(Sa),Be(Ea)}function Uy(t){Ii(Ea.current);var e=Ii(qn.current),n=Ap(e,t.type);e!==n&&(Me(Sa,t),Me(qn,n))}function Mf(t){Sa.current===t&&(Be(qn),Be(Sa))}var Ve=ti(0);function Tc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sp=[];function Of(){for(var t=0;t<sp.length;t++)sp[t]._workInProgressVersionPrimary=null;sp.length=0}var ic=fr.ReactCurrentDispatcher,ap=fr.ReactCurrentBatchConfig,Bi=0,We=null,tt=null,ot=null,Cc=!1,ca=!1,Ta=0,Y2=0;function ht(){throw Error(H(321))}function Bf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!En(t[n],e[n]))return!1;return!0}function Ff(t,e,n,r,i,o){if(Bi=o,We=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ic.current=t===null||t.memoizedState===null?tA:nA,t=n(r,i),ca){o=0;do{if(ca=!1,Ta=0,25<=o)throw Error(H(301));o+=1,ot=tt=null,e.updateQueue=null,ic.current=rA,t=n(r,i)}while(ca)}if(ic.current=_c,e=tt!==null&&tt.next!==null,Bi=0,ot=tt=We=null,Cc=!1,e)throw Error(H(300));return t}function Df(){var t=Ta!==0;return Ta=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?We.memoizedState=ot=t:ot=ot.next=t,ot}function rn(){if(tt===null){var t=We.alternate;t=t!==null?t.memoizedState:null}else t=tt.next;var e=ot===null?We.memoizedState:ot.next;if(e!==null)ot=e,tt=t;else{if(t===null)throw Error(H(310));tt=t,t={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},ot===null?We.memoizedState=ot=t:ot=ot.next=t}return ot}function Ca(t,e){return typeof e=="function"?e(t):e}function lp(t){var e=rn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=tt,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,d=o;do{var u=d.lane;if((Bi&u)===u)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var p={lane:u,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=p,s=r):c=c.next=p,We.lanes|=u,Fi|=u}d=d.next}while(d!==null&&d!==o);c===null?s=r:c.next=l,En(r,e.memoizedState)||(Ot=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,We.lanes|=o,Fi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function cp(t){var e=rn(),n=e.queue;if(n===null)throw Error(H(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);En(o,e.memoizedState)||(Ot=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function Vy(){}function Wy(t,e){var n=We,r=rn(),i=e(),o=!En(r.memoizedState,i);if(o&&(r.memoizedState=i,Ot=!0),r=r.queue,zf(qy.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||ot!==null&&ot.memoizedState.tag&1){if(n.flags|=2048,_a(9,Hy.bind(null,n,r,i,e),void 0,null),st===null)throw Error(H(349));(Bi&30)!==0||$y(n,e,i)}return i}function $y(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hy(t,e,n,r){e.value=n,e.getSnapshot=r,Ry(e)&&jy(t)}function qy(t,e,n){return n(function(){Ry(e)&&jy(t)})}function Ry(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!En(t,n)}catch{return!0}}function jy(t){var e=ur(t,1);e!==null&&Sn(e,t,1,-1)}function mg(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=eA.bind(null,We,t),[e.memoizedState,t]}function _a(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=We.updateQueue,e===null?(e={lastEffect:null,stores:null},We.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Gy(){return rn().memoizedState}function oc(t,e,n,r){var i=Wn();We.flags|=t,i.memoizedState=_a(1|e,n,void 0,r===void 0?null:r)}function Vc(t,e,n,r){var i=rn();r=r===void 0?null:r;var o=void 0;if(tt!==null){var s=tt.memoizedState;if(o=s.destroy,r!==null&&Bf(r,s.deps)){i.memoizedState=_a(e,n,o,r);return}}We.flags|=t,i.memoizedState=_a(1|e,n,o,r)}function hg(t,e){return oc(8390656,8,t,e)}function zf(t,e){return Vc(2048,8,t,e)}function Qy(t,e){return Vc(4,2,t,e)}function Ky(t,e){return Vc(4,4,t,e)}function Xy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yy(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,Xy.bind(null,e,t),n)}function Lf(){}function Jy(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zy(t,e){var n=rn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ev(t,e,n){return(Bi&21)===0?(t.baseState&&(t.baseState=!1,Ot=!0),t.memoizedState=n):(En(n,e)||(n=oy(),We.lanes|=n,Fi|=n,t.baseState=!0),e)}function J2(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=ap.transition;ap.transition={};try{t(!1),e()}finally{Te=n,ap.transition=r}}function tv(){return rn().memoizedState}function Z2(t,e,n){var r=Xr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nv(t))rv(e,n);else if(n=zy(t,e,n,r),n!==null){var i=Et();Sn(n,t,r,i),iv(n,e,r)}}function eA(t,e,n){var r=Xr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nv(t))rv(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,En(l,s)){var c=e.interleaved;c===null?(i.next=i,If(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}n=zy(t,e,i,r),n!==null&&(i=Et(),Sn(n,t,r,i),iv(n,e,r))}}function nv(t){var e=t.alternate;return t===We||e!==null&&e===We}function rv(t,e){ca=Cc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hf(t,n)}}var _c={readContext:nn,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useInsertionEffect:ht,useLayoutEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useMutableSource:ht,useSyncExternalStore:ht,useId:ht,unstable_isNewReconciler:!1},tA={readContext:nn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,oc(4194308,4,Xy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oc(4194308,4,t,e)},useInsertionEffect:function(t,e){return oc(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Wn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Z2.bind(null,We,t),[r.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:mg,useDebugValue:Lf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=mg(!1),e=t[0];return t=J2.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=We,i=Wn();if(Le){if(n===void 0)throw Error(H(407));n=n()}else{if(n=e(),st===null)throw Error(H(349));(Bi&30)!==0||$y(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,hg(qy.bind(null,r,o,t),[t]),r.flags|=2048,_a(9,Hy.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Wn(),e=st.identifierPrefix;if(Le){var n=ar,r=sr;n=(r&~(1<<32-An(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ta++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Y2++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nA={readContext:nn,useCallback:Jy,useContext:nn,useEffect:zf,useImperativeHandle:Yy,useInsertionEffect:Qy,useLayoutEffect:Ky,useMemo:Zy,useReducer:lp,useRef:Gy,useState:function(){return lp(Ca)},useDebugValue:Lf,useDeferredValue:function(t){var e=rn();return ev(e,tt.memoizedState,t)},useTransition:function(){var t=lp(Ca)[0],e=rn().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Wy,useId:tv,unstable_isNewReconciler:!1},rA={readContext:nn,useCallback:Jy,useContext:nn,useEffect:zf,useImperativeHandle:Yy,useInsertionEffect:Qy,useLayoutEffect:Ky,useMemo:Zy,useReducer:cp,useRef:Gy,useState:function(){return cp(Ca)},useDebugValue:Lf,useDeferredValue:function(t){var e=rn();return tt===null?e.memoizedState=t:ev(e,tt.memoizedState,t)},useTransition:function(){var t=cp(Ca)[0],e=rn().memoizedState;return[t,e]},useMutableSource:Vy,useSyncExternalStore:Wy,useId:tv,unstable_isNewReconciler:!1};function xn(t,e){if(t&&t.defaultProps){e=$e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wc={isMounted:function(t){return(t=t._reactInternals)?Li(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Xr(t),o=lr(r,i);o.payload=e,n!=null&&(o.callback=n),e=Qr(t,o,i),e!==null&&(Sn(e,t,i,r),rc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Et(),i=Xr(t),o=lr(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Qr(t,o,i),e!==null&&(Sn(e,t,i,r),rc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Et(),r=Xr(t),i=lr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Qr(t,i,r),e!==null&&(Sn(e,t,r,n),rc(e,t,r))}};function gg(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!xa(n,r)||!xa(i,o):!0}function ov(t,e,n){var r=!1,i=Zr,o=e.contextType;return typeof o=="object"&&o!==null?o=nn(o):(i=Ft(e)?Mi:vt.current,r=e.contextTypes,o=(r=r!=null)?Lo(t,i):Zr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wc.enqueueReplaceState(e,e.state,null)}function Rp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Nf(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=nn(o):(o=Ft(e)?Mi:vt.current,i.context=Lo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(qp(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wc.enqueueReplaceState(i,i.state,null),Ec(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $o(t,e){try{var n="",r=e;do n+=Ok(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function dp(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iA=typeof WeakMap=="function"?WeakMap:Map;function sv(t,e,n){n=lr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Nc||(Nc=!0,nf=r),jp(t,e)},n}function av(t,e,n){n=lr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jp(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){jp(t,e),typeof r!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function vg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=vA.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=lr(-1,1),e.tag=2,Qr(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var oA=fr.ReactCurrentOwner,Ot=!1;function St(t,e,n,r){e.child=t===null?Dy(e,null,n,r):Vo(e,t.child,n,r)}function wg(t,e,n,r,i){n=n.render;var o=e.ref;return Fo(e,i),r=Ff(t,e,n,r,o,i),n=Df(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(Le&&n&&Af(e),e.flags|=1,St(t,e,r,i),e.child)}function kg(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!jf(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,lv(t,e,o,r,i)):(t=cc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,(t.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:xa,n(s,r)&&t.ref===e.ref)return pr(t,e,i)}return e.flags|=1,t=Yr(o,r),t.ref=e.ref,t.return=e,e.child=t}function lv(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(xa(o,r)&&t.ref===e.ref)if(Ot=!1,e.pendingProps=r=o,(t.lanes&i)!==0)(t.flags&131072)!==0&&(Ot=!0);else return e.lanes=t.lanes,pr(t,e,i)}return Gp(t,e,n,r,i)}function cv(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(No,Vt),Vt|=n;else{if((n&1073741824)===0)return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Me(No,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Me(No,Vt),Vt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,Me(No,Vt),Vt|=r;return St(t,e,i,n),e.child}function dv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Gp(t,e,n,r,i){var o=Ft(n)?Mi:vt.current;return o=Lo(e,o),Fo(e,i),n=Ff(t,e,n,r,o,i),r=Df(),t!==null&&!Ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(Le&&r&&Af(e),e.flags|=1,St(t,e,n,i),e.child)}function Ag(t,e,n,r,i){if(Ft(n)){var o=!0;xc(e)}else o=!1;if(Fo(e,i),e.stateNode===null)sc(t,e),ov(e,n,r),Rp(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=nn(d):(d=Ft(n)?Mi:vt.current,d=Lo(e,d));var u=n.getDerivedStateFromProps,p=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==d)&&yg(e,s,r,d),Ur=!1;var f=e.memoizedState;s.state=f,Ec(e,r,s,i),c=e.memoizedState,l!==r||f!==c||Bt.current||Ur?(typeof u=="function"&&(qp(e,n,u,r),c=e.memoizedState),(l=Ur||gg(e,n,l,r,f,c,d))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),s.props=r,s.state=c,s.context=d,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,Ly(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:xn(e.type,l),s.props=d,p=e.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=nn(c):(c=Ft(n)?Mi:vt.current,c=Lo(e,c));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||f!==c)&&yg(e,s,r,c),Ur=!1,f=e.memoizedState,s.state=f,Ec(e,r,s,i);var h=e.memoizedState;l!==p||f!==h||Bt.current||Ur?(typeof m=="function"&&(qp(e,n,m,r),h=e.memoizedState),(d=Ur||gg(e,n,d,r,f,h,c)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,c)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=h),s.props=r,s.state=h,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Qp(t,e,n,r,o,i)}function Qp(t,e,n,r,i,o){dv(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&lg(e,n,!1),pr(t,e,o);r=e.stateNode,oA.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=Vo(e,t.child,null,o),e.child=Vo(e,null,l,o)):St(t,e,l,o),e.memoizedState=r.state,i&&lg(e,n,!0),e.child}function uv(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),Pf(t,e.containerInfo)}function Sg(t,e,n,r,i){return Uo(),Ef(i),e.flags|=256,St(t,e,n,r),e.child}var Kp={dehydrated:null,treeContext:null,retryLane:0};function Xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function pv(t,e,n){var r=e.pendingProps,i=Ve.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Me(Ve,i&1),t===null)return $p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=qc(s,r,0,null),t=Pi(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Xp(n),e.memoizedState=Kp,t):Uf(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return sA(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var c={mode:"hidden",children:r.children};return(s&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Yr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Yr(l,o):(o=Pi(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?Xp(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Kp,r}return o=t.child,t=o.sibling,r=Yr(o,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Uf(t,e){return e=qc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Yl(t,e,n,r){return r!==null&&Ef(r),Vo(e,t.child,null,n),t=Uf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function sA(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=dp(Error(H(422))),Yl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=qc({mode:"visible",children:r.children},i,0,null),o=Pi(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,(e.mode&1)!==0&&Vo(e,t.child,null,s),e.child.memoizedState=Xp(s),e.memoizedState=Kp,o);if((e.mode&1)===0)return Yl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(H(419)),r=dp(o,r,void 0),Yl(t,e,s,r)}if(l=(s&t.childLanes)!==0,Ot||l){if(r=st,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,ur(t,i),Sn(r,t,i,-1))}return Rf(),r=dp(Error(H(421))),Yl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bA.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Wt=Gr(i.nextSibling),$t=e,Le=!0,kn=null,t!==null&&(Jt[Zt++]=sr,Jt[Zt++]=ar,Jt[Zt++]=Oi,sr=t.id,ar=t.overflow,Oi=e),e=Uf(e,r.children),e.flags|=4096,e)}function Eg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hp(t.return,e,n)}function up(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function fv(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(St(t,e,r.children,n),r=Ve.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,n,e);else if(t.tag===19)Eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Me(Ve,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Tc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),up(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Tc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}up(e,!0,n,null,o);break;case"together":up(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fi|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(H(153));if(e.child!==null){for(t=e.child,n=Yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aA(t,e,n){switch(e.tag){case 3:uv(e),Uo();break;case 5:Uy(e);break;case 1:Ft(e.type)&&xc(e);break;case 4:Pf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Me(Ac,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ve,Ve.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?pv(t,e,n):(Me(Ve,Ve.current&1),t=pr(t,e,n),t!==null?t.sibling:null);Me(Ve,Ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return fv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Me(Ve,Ve.current),r)break;return null;case 22:case 23:return e.lanes=0,cv(t,e,n)}return pr(t,e,n)}var mv,Yp,hv,gv;mv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yp=function(){};hv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ii(qn.current);var o=null;switch(n){case"input":i=bp(t,i),r=bp(t,r),o=[];break;case"select":i=$e({},i,{value:void 0}),r=$e({},r,{value:void 0}),o=[];break;case"textarea":i=kp(t,i),r=kp(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=vc)}Sp(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(fa.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in r){var c=r[d];if(l=i?.[d],r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(fa.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Oe("scroll",t),o||l===c||(o=[])):(o=o||[]).push(d,c))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};gv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ys(t,e){if(!Le)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lA(t,e,n){var r=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(e),null;case 1:return Ft(e.type)&&bc(),gt(e),null;case 3:return r=e.stateNode,Wo(),Be(Bt),Be(vt),Of(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,kn!==null&&(sf(kn),kn=null))),Yp(t,e),gt(e),null;case 5:Mf(e);var i=Ii(Ea.current);if(n=e.type,t!==null&&e.stateNode!=null)hv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(H(166));return gt(e),null}if(t=Ii(qn.current),Kl(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[$n]=e,r[Aa]=o,t=(e.mode&1)!==0,n){case"dialog":Oe("cancel",r),Oe("close",r);break;case"iframe":case"object":case"embed":Oe("load",r);break;case"video":case"audio":for(i=0;i<ra.length;i++)Oe(ra[i],r);break;case"source":Oe("error",r);break;case"img":case"image":case"link":Oe("error",r),Oe("load",r);break;case"details":Oe("toggle",r);break;case"input":O0(r,o),Oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Oe("invalid",r);break;case"textarea":F0(r,o),Oe("invalid",r)}Sp(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ql(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ql(r.textContent,l,t),i=["children",""+l]):fa.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Oe("scroll",r)}switch(n){case"input":Dl(r),B0(r,o,!0);break;case"textarea":Dl(r),D0(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=vc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=qg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[$n]=e,t[Aa]=r,mv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Ep(n,r),n){case"dialog":Oe("cancel",t),Oe("close",t),i=r;break;case"iframe":case"object":case"embed":Oe("load",t),i=r;break;case"video":case"audio":for(i=0;i<ra.length;i++)Oe(ra[i],t);i=r;break;case"source":Oe("error",t),i=r;break;case"img":case"image":case"link":Oe("error",t),Oe("load",t),i=r;break;case"details":Oe("toggle",t),i=r;break;case"input":O0(t,r),i=bp(t,r),Oe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$e({},r,{value:void 0}),Oe("invalid",t);break;case"textarea":F0(t,r),i=kp(t,r),Oe("invalid",t);break;default:i=r}Sp(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Gg(t,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Rg(t,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ma(t,c):typeof c=="number"&&ma(t,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fa.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Oe("scroll",t):c!=null&&cf(t,o,c,s))}switch(n){case"input":Dl(t),B0(t,r,!1);break;case"textarea":Dl(t),D0(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jr(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Po(t,!!r.multiple,o,!1):r.defaultValue!=null&&Po(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=vc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return gt(e),null;case 6:if(t&&e.stateNode!=null)gv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(H(166));if(n=Ii(Ea.current),Ii(qn.current),Kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(o=r.nodeValue!==n)&&(t=$t,t!==null))switch(t.tag){case 3:Ql(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ql(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return gt(e),null;case 13:if(Be(Ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Le&&Wt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)By(),Uo(),e.flags|=98560,o=!1;else if(o=Kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(H(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(H(317));o[$n]=e}else Uo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;gt(e),o=!1}else kn!==null&&(sf(kn),kn=null),o=!0;if(!o)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(Ve.current&1)!==0?nt===0&&(nt=3):Rf())),e.updateQueue!==null&&(e.flags|=4),gt(e),null);case 4:return Wo(),Yp(t,e),t===null&&wa(e.stateNode.containerInfo),gt(e),null;case 10:return _f(e.type._context),gt(e),null;case 17:return Ft(e.type)&&bc(),gt(e),null;case 19:if(Be(Ve),o=e.memoizedState,o===null)return gt(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Ys(o,!1);else{if(nt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(s=Tc(t),s!==null){for(e.flags|=128,Ys(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Me(Ve,Ve.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ge()>Ho&&(e.flags|=128,r=!0,Ys(o,!1),e.lanes=4194304)}else{if(!r)if(t=Tc(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Le)return gt(e),null}else 2*Ge()-o.renderingStartTime>Ho&&n!==1073741824&&(e.flags|=128,r=!0,Ys(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ge(),e.sibling=null,n=Ve.current,Me(Ve,r?n&1|2:n&1),e):(gt(e),null);case 22:case 23:return qf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Vt&1073741824)!==0&&(gt(e),e.subtreeFlags&6&&(e.flags|=8192)):gt(e),null;case 24:return null;case 25:return null}throw Error(H(156,e.tag))}function cA(t,e){switch(Sf(e),e.tag){case 1:return Ft(e.type)&&bc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wo(),Be(Bt),Be(vt),Of(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Mf(e),null;case 13:if(Be(Ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(H(340));Uo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Be(Ve),null;case 4:return Wo(),null;case 10:return _f(e.type._context),null;case 22:case 23:return qf(),null;case 24:return null;default:return null}}var Jl=!1,yt=!1,dA=typeof WeakSet=="function"?WeakSet:Set,J=null;function Io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Jp(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Tg=!1;function uA(t,e){if(Fp=hc,t=wy(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,d=0,u=0,p=t,f=null;t:for(;;){for(var m;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++d===i&&(l=s),f===o&&++u===r&&(c=s),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dp={focusedElem:t,selectionRange:n},hc=!1,J=e;J!==null;)if(e=J,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,J=t;else for(;J!==null;){e=J;try{var h=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,x=h.memoizedState,y=e.stateNode,g=y.getSnapshotBeforeUpdate(e.elementType===e.type?v:xn(e.type,v),x);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(H(163))}}catch(w){Re(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,J=t;break}J=e.return}return h=Tg,Tg=!1,h}function da(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&Jp(e,n,o)}i=i.next}while(i!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Zp(t){var e=t.ref;if(e!==null){var n=t.stateNode;t.tag,t=n,typeof e=="function"?e(t):e.current=t}}function yv(t){var e=t.alternate;e!==null&&(t.alternate=null,yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Aa],delete e[Up],delete e[G2],delete e[Q2])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function vv(t){return t.tag===5||t.tag===3||t.tag===4}function Cg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||vv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ef(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vc));else if(r!==4&&(t=t.child,t!==null))for(ef(t,e,n),t=t.sibling;t!==null;)ef(t,e,n),t=t.sibling}function tf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(tf(t,e,n),t=t.sibling;t!==null;)tf(t,e,n),t=t.sibling}var ct=null,wn=!1;function zr(t,e,n){for(n=n.child;n!==null;)bv(t,e,n),n=n.sibling}function bv(t,e,n){if(Hn&&typeof Hn.onCommitFiberUnmount=="function")try{Hn.onCommitFiberUnmount(Bc,n)}catch{}switch(n.tag){case 5:yt||Io(n,e);case 6:var r=ct,i=wn;ct=null,zr(t,e,n),ct=r,wn=i,ct!==null&&(wn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(wn?(t=ct,n=n.stateNode,t.nodeType===8?ip(t.parentNode,n):t.nodeType===1&&ip(t,n),va(t)):ip(ct,n.stateNode));break;case 4:r=ct,i=wn,ct=n.stateNode.containerInfo,wn=!0,zr(t,e,n),ct=r,wn=i;break;case 0:case 11:case 14:case 15:if(!yt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Jp(n,e,s),i=i.next}while(i!==r)}zr(t,e,n);break;case 1:if(!yt&&(Io(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}zr(t,e,n);break;case 21:zr(t,e,n);break;case 22:n.mode&1?(yt=(r=yt)||n.memoizedState!==null,zr(t,e,n),yt=r):zr(t,e,n);break;default:zr(t,e,n)}}function _g(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dA),e.forEach(function(r){var i=xA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:ct=l.stateNode,wn=!1;break e;case 3:ct=l.stateNode.containerInfo,wn=!0;break e;case 4:ct=l.stateNode.containerInfo,wn=!0;break e}l=l.return}if(ct===null)throw Error(H(160));bv(o,s,i),ct=null,wn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){Re(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)xv(e,t),e=e.sibling}function xv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Vn(t),r&4){try{da(3,t,t.return),$c(3,t)}catch(v){Re(t,t.return,v)}try{da(5,t,t.return)}catch(v){Re(t,t.return,v)}}break;case 1:bn(e,t),Vn(t),r&512&&n!==null&&Io(n,n.return);break;case 5:if(bn(e,t),Vn(t),r&512&&n!==null&&Io(n,n.return),t.flags&32){var i=t.stateNode;try{ma(i,"")}catch(v){Re(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&$g(i,o),Ep(l,s);var d=Ep(l,o);for(s=0;s<c.length;s+=2){var u=c[s],p=c[s+1];u==="style"?Gg(i,p):u==="dangerouslySetInnerHTML"?Rg(i,p):u==="children"?ma(i,p):cf(i,u,p,d)}switch(l){case"input":xp(i,o);break;case"textarea":Hg(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Po(i,!!o.multiple,m,!1):f!==!!o.multiple&&(o.defaultValue!=null?Po(i,!!o.multiple,o.defaultValue,!0):Po(i,!!o.multiple,o.multiple?[]:"",!1))}i[Aa]=o}catch(v){Re(t,t.return,v)}}break;case 6:if(bn(e,t),Vn(t),r&4){if(t.stateNode===null)throw Error(H(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){Re(t,t.return,v)}}break;case 3:if(bn(e,t),Vn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(v){Re(t,t.return,v)}break;case 4:bn(e,t),Vn(t);break;case 13:bn(e,t),Vn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||($f=Ge())),r&4&&_g(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(yt=(d=yt)||u,bn(e,t),yt=d):bn(e,t),Vn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!u&&(t.mode&1)!==0)for(J=t,u=t.child;u!==null;){for(p=J=u;J!==null;){switch(f=J,m=f.child,f.tag){case 0:case 11:case 14:case 15:da(4,f,f.return);break;case 1:Io(f,f.return);var h=f.stateNode;if(typeof h.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,h.props=e.memoizedProps,h.state=e.memoizedState,h.componentWillUnmount()}catch(v){Re(r,n,v)}}break;case 5:Io(f,f.return);break;case 22:if(f.memoizedState!==null){Ng(p);continue}}m!==null?(m.return=f,J=m):Ng(p)}u=u.sibling}e:for(u=null,p=t;;){if(p.tag===5){if(u===null){u=p;try{i=p.stateNode,d?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=jg("display",s))}catch(v){Re(t,t.return,v)}}}else if(p.tag===6){if(u===null)try{p.stateNode.nodeValue=d?"":p.memoizedProps}catch(v){Re(t,t.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;u===p&&(u=null),p=p.return}u===p&&(u=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:bn(e,t),Vn(t),r&4&&_g(t);break;case 21:break;default:bn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(vv(n)){var r=n;break e}n=n.return}throw Error(H(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ma(i,""),r.flags&=-33);var o=Cg(t);tf(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Cg(t);ef(t,l,s);break;default:throw Error(H(161))}}catch(c){Re(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function pA(t,e,n){J=t,wv(t,e,n)}function wv(t,e,n){for(var r=(t.mode&1)!==0;J!==null;){var i=J,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Jl;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||yt;l=Jl;var d=yt;if(Jl=s,(yt=c)&&!d)for(J=i;J!==null;)s=J,c=s.child,s.tag===22&&s.memoizedState!==null?Pg(i):c!==null?(c.return=s,J=c):Pg(i);for(;o!==null;)J=o,wv(o,e,n),o=o.sibling;J=i,Jl=l,yt=d}Ig(t,e,n)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,J=o):Ig(t,e,n)}}function Ig(t){for(;J!==null;){var e=J;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:yt||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!yt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&fg(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fg(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var u=d.memoizedState;if(u!==null){var p=u.dehydrated;p!==null&&va(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(H(163))}yt||e.flags&512&&Zp(e)}catch(f){Re(e,e.return,f)}}if(e===t){J=null;break}if(n=e.sibling,n!==null){n.return=e.return,J=n;break}J=e.return}}function Ng(t){for(;J!==null;){var e=J;if(e===t){J=null;break}var n=e.sibling;if(n!==null){n.return=e.return,J=n;break}J=e.return}}function Pg(t){for(;J!==null;){var e=J;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(c){Re(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){Re(e,i,c)}}var o=e.return;try{Zp(e)}catch(c){Re(e,o,c)}break;case 5:var s=e.return;try{Zp(e)}catch(c){Re(e,s,c)}}}catch(c){Re(e,e.return,c)}if(e===t){J=null;break}var l=e.sibling;if(l!==null){l.return=e.return,J=l;break}J=e.return}}var fA=Math.ceil,Ic=fr.ReactCurrentDispatcher,Vf=fr.ReactCurrentOwner,tn=fr.ReactCurrentBatchConfig,ke=0,st=null,Ye=null,dt=0,Vt=0,No=ti(0),nt=0,Ia=null,Fi=0,Hc=0,Wf=0,ua=null,Mt=null,$f=0,Ho=1/0,ir=null,Nc=!1,nf=null,Kr=null,Zl=!1,Hr=null,Pc=0,pa=0,rf=null,ac=-1,lc=0;function Et(){return(ke&6)!==0?Ge():ac!==-1?ac:ac=Ge()}function Xr(t){return(t.mode&1)===0?1:(ke&2)!==0&&dt!==0?dt&-dt:X2.transition!==null?(lc===0&&(lc=oy()),lc):(t=Te,t!==0||(t=window.event,t=t===void 0?16:py(t.type)),t)}function Sn(t,e,n,r){if(50<pa)throw pa=0,rf=null,Error(H(185));Na(t,n,r),((ke&2)===0||t!==st)&&(t===st&&((ke&2)===0&&(Hc|=n),nt===4&&Wr(t,dt)),Dt(t,r),n===1&&ke===0&&(e.mode&1)===0&&(Ho=Ge()+500,Uc&&ni()))}function Dt(t,e){var n=t.callbackNode;Jk(t,e);var r=mc(t,t===st?dt:0);if(r===0)n!==null&&U0(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&U0(n),e===1)t.tag===0?K2(Mg.bind(null,t)):Py(Mg.bind(null,t)),R2(function(){(ke&6)===0&&ni()}),n=null;else{switch(sy(r)){case 1:n=mf;break;case 4:n=ry;break;case 16:n=fc;break;case 536870912:n=iy;break;default:n=fc}n=Iv(n,kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function kv(t,e){if(ac=-1,lc=0,(ke&6)!==0)throw Error(H(327));var n=t.callbackNode;if(Do()&&t.callbackNode!==n)return null;var r=mc(t,t===st?dt:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Mc(t,r);else{e=r;var i=ke;ke|=2;var o=Sv();(st!==t||dt!==e)&&(ir=null,Ho=Ge()+500,Ni(t,e));do try{gA();break}catch(l){Av(t,l)}while(!0);Cf(),Ic.current=o,ke=i,Ye!==null?e=0:(st=null,dt=0,e=nt)}if(e!==0){if(e===2&&(i=Np(t),i!==0&&(r=i,e=of(t,i))),e===1)throw n=Ia,Ni(t,0),Wr(t,r),Dt(t,Ge()),n;if(e===6)Wr(t,r);else{if(i=t.current.alternate,(r&30)===0&&!mA(i)&&(e=Mc(t,r),e===2&&(o=Np(t),o!==0&&(r=o,e=of(t,o))),e===1))throw n=Ia,Ni(t,0),Wr(t,r),Dt(t,Ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(H(345));case 2:Ti(t,Mt,ir);break;case 3:if(Wr(t,r),(r&130023424)===r&&(e=$f+500-Ge(),10<e)){if(mc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Lp(Ti.bind(null,t,Mt,ir),e);break}Ti(t,Mt,ir);break;case 4:if(Wr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-An(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fA(r/1960))-r,10<r){t.timeoutHandle=Lp(Ti.bind(null,t,Mt,ir),r);break}Ti(t,Mt,ir);break;case 5:Ti(t,Mt,ir);break;default:throw Error(H(329))}}}return Dt(t,Ge()),t.callbackNode===n?kv.bind(null,t):null}function of(t,e){var n=ua;return t.current.memoizedState.isDehydrated&&(Ni(t,e).flags|=256),t=Mc(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&sf(e)),t}function sf(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function mA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!En(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wr(t,e){for(e&=~Wf,e&=~Hc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-An(e),r=1<<n;t[n]=-1,e&=~r}}function Mg(t){if((ke&6)!==0)throw Error(H(327));Do();var e=mc(t,0);if((e&1)===0)return Dt(t,Ge()),null;var n=Mc(t,e);if(t.tag!==0&&n===2){var r=Np(t);r!==0&&(e=r,n=of(t,r))}if(n===1)throw n=Ia,Ni(t,0),Wr(t,e),Dt(t,Ge()),n;if(n===6)throw Error(H(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ti(t,Mt,ir),Dt(t,Ge()),null}function Hf(t,e){var n=ke;ke|=1;try{return t(e)}finally{ke=n,ke===0&&(Ho=Ge()+500,Uc&&ni())}}function Di(t){Hr!==null&&Hr.tag===0&&(ke&6)===0&&Do();var e=ke;ke|=1;var n=tn.transition,r=Te;try{if(tn.transition=null,Te=1,t)return t()}finally{Te=r,tn.transition=n,ke=e,(ke&6)===0&&ni()}}function qf(){Vt=No.current,Be(No)}function Ni(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,q2(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bc();break;case 3:Wo(),Be(Bt),Be(vt),Of();break;case 5:Mf(r);break;case 4:Wo();break;case 13:Be(Ve);break;case 19:Be(Ve);break;case 10:_f(r.type._context);break;case 22:case 23:qf()}n=n.return}if(st=t,Ye=t=Yr(t.current,null),dt=Vt=e,nt=0,Ia=null,Wf=Hc=Fi=0,Mt=ua=null,_i!==null){for(e=0;e<_i.length;e++)if(n=_i[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}_i=null}return t}function Av(t,e){do{var n=Ye;try{if(Cf(),ic.current=_c,Cc){for(var r=We.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cc=!1}if(Bi=0,ot=tt=We=null,ca=!1,Ta=0,Vf.current=null,n===null||n.return===null){nt=1,Ia=e,Ye=null;break}e:{var o=t,s=n.return,l=n,c=e;if(e=dt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,u=l,p=u.tag;if((u.mode&1)===0&&(p===0||p===11||p===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=bg(s);if(m!==null){m.flags&=-257,xg(m,s,l,o,e),m.mode&1&&vg(o,d,e),e=m,c=d;var h=e.updateQueue;if(h===null){var v=new Set;v.add(c),e.updateQueue=v}else h.add(c);break e}else{if((e&1)===0){vg(o,d,e),Rf();break e}c=Error(H(426))}}else if(Le&&l.mode&1){var x=bg(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),xg(x,s,l,o,e),Ef($o(c,l));break e}}o=c=$o(c,l),nt!==4&&(nt=2),ua===null?ua=[o]:ua.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var y=sv(o,c,e);pg(o,y);break e;case 1:l=c;var g=o.type,b=o.stateNode;if((o.flags&128)===0&&(typeof g.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Kr===null||!Kr.has(b)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=av(o,l,e);pg(o,w);break e}}o=o.return}while(o!==null)}Tv(n)}catch(k){e=k,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function Sv(){var t=Ic.current;return Ic.current=_c,t===null?_c:t}function Rf(){(nt===0||nt===3||nt===2)&&(nt=4),st===null||(Fi&268435455)===0&&(Hc&268435455)===0||Wr(st,dt)}function Mc(t,e){var n=ke;ke|=2;var r=Sv();(st!==t||dt!==e)&&(ir=null,Ni(t,e));do try{hA();break}catch(i){Av(t,i)}while(!0);if(Cf(),ke=n,Ic.current=r,Ye!==null)throw Error(H(261));return st=null,dt=0,nt}function hA(){for(;Ye!==null;)Ev(Ye)}function gA(){for(;Ye!==null&&!Hk();)Ev(Ye)}function Ev(t){var e=_v(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?Tv(t):Ye=e,Vf.current=null}function Tv(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=lA(n,e,Vt),n!==null){Ye=n;return}}else{if(n=cA(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nt=6,Ye=null;return}}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);nt===0&&(nt=5)}function Ti(t,e,n){var r=Te,i=tn.transition;try{tn.transition=null,Te=1,yA(t,e,n,r)}finally{tn.transition=i,Te=r}return null}function yA(t,e,n,r){do Do();while(Hr!==null);if((ke&6)!==0)throw Error(H(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(H(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Zk(t,o),t===st&&(Ye=st=null,dt=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Zl||(Zl=!0,Iv(fc,function(){return Do(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=tn.transition,tn.transition=null;var s=Te;Te=1;var l=ke;ke|=4,Vf.current=null,uA(t,n),xv(n,t),U2(Dp),hc=!!Fp,Dp=Fp=null,t.current=n,pA(n,t,i),qk(),ke=l,Te=s,tn.transition=o}else t.current=n;if(Zl&&(Zl=!1,Hr=t,Pc=i),o=t.pendingLanes,o===0&&(Kr=null),Gk(n.stateNode,r),Dt(t,Ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Nc)throw Nc=!1,t=nf,nf=null,t;return(Pc&1)!==0&&t.tag!==0&&Do(),o=t.pendingLanes,(o&1)!==0?t===rf?pa++:(pa=0,rf=t):pa=0,ni(),null}function Do(){if(Hr!==null){var t=sy(Pc),e=tn.transition,n=Te;try{if(tn.transition=null,Te=16>t?16:t,Hr===null)var r=!1;else{if(t=Hr,Hr=null,Pc=0,(ke&6)!==0)throw Error(H(331));var i=ke;for(ke|=4,J=t.current;J!==null;){var o=J,s=o.child;if((J.flags&16)!==0){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(J=d;J!==null;){var u=J;switch(u.tag){case 0:case 11:case 15:da(8,u,o)}var p=u.child;if(p!==null)p.return=u,J=p;else for(;J!==null;){u=J;var f=u.sibling,m=u.return;if(yv(u),u===d){J=null;break}if(f!==null){f.return=m,J=f;break}J=m}}}var h=o.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}J=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,J=s;else e:for(;J!==null;){if(o=J,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:da(9,o,o.return)}var y=o.sibling;if(y!==null){y.return=o.return,J=y;break e}J=o.return}}var g=t.current;for(J=g;J!==null;){s=J;var b=s.child;if((s.subtreeFlags&2064)!==0&&b!==null)b.return=s,J=b;else e:for(s=g;J!==null;){if(l=J,(l.flags&2048)!==0)try{switch(l.tag){case 0:case 11:case 15:$c(9,l)}}catch(k){Re(l,l.return,k)}if(l===s){J=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,J=w;break e}J=l.return}}if(ke=i,ni(),Hn&&typeof Hn.onPostCommitFiberRoot=="function")try{Hn.onPostCommitFiberRoot(Bc,t)}catch{}r=!0}return r}finally{Te=n,tn.transition=e}}return!1}function Og(t,e,n){e=$o(n,e),e=sv(t,e,1),t=Qr(t,e,1),e=Et(),t!==null&&(Na(t,1,e),Dt(t,e))}function Re(t,e,n){if(t.tag===3)Og(t,t,n);else for(;e!==null;){if(e.tag===3){Og(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kr===null||!Kr.has(r))){t=$o(n,t),t=av(e,t,1),e=Qr(e,t,1),t=Et(),e!==null&&(Na(e,1,t),Dt(e,t));break}}e=e.return}}function vA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Et(),t.pingedLanes|=t.suspendedLanes&n,st===t&&(dt&n)===n&&(nt===4||nt===3&&(dt&130023424)===dt&&500>Ge()-$f?Ni(t,0):Wf|=n),Dt(t,e)}function Cv(t,e){e===0&&((t.mode&1)===0?e=1:(e=Ul,Ul<<=1,(Ul&130023424)===0&&(Ul=4194304)));var n=Et();t=ur(t,e),t!==null&&(Na(t,e,n),Dt(t,n))}function bA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Cv(t,n)}function xA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(H(314))}r!==null&&r.delete(e),Cv(t,n)}var _v;_v=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bt.current)Ot=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return Ot=!1,aA(t,e,n);Ot=(t.flags&131072)!==0}else Ot=!1,Le&&(e.flags&1048576)!==0&&My(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sc(t,e),t=e.pendingProps;var i=Lo(e,vt.current);Fo(e,n),i=Ff(null,e,r,t,i,n);var o=Df();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ft(r)?(o=!0,xc(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nf(e),i.updater=Wc,e.stateNode=i,i._reactInternals=e,Rp(e,r,t,n),e=Qp(null,e,r,!0,o,n)):(e.tag=0,Le&&o&&Af(e),St(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kA(r),t=xn(r,t),i){case 0:e=Gp(null,e,r,t,n);break e;case 1:e=Ag(null,e,r,t,n);break e;case 11:e=wg(null,e,r,t,n);break e;case 14:e=kg(null,e,r,xn(r.type,t),n);break e}throw Error(H(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Gp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),Ag(t,e,r,i,n);case 3:e:{if(uv(e),t===null)throw Error(H(387));r=e.pendingProps,o=e.memoizedState,i=o.element,Ly(t,e),Ec(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=$o(Error(H(423)),e),e=Sg(t,e,r,n,i);break e}else if(r!==i){i=$o(Error(H(424)),e),e=Sg(t,e,r,n,i);break e}else for(Wt=Gr(e.stateNode.containerInfo.firstChild),$t=e,Le=!0,kn=null,n=Dy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Uo(),r===i){e=pr(t,e,n);break e}St(t,e,r,n)}e=e.child}return e;case 5:return Uy(e),t===null&&$p(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,zp(r,i)?s=null:o!==null&&zp(r,o)&&(e.flags|=32),dv(t,e),St(t,e,s,n),e.child;case 6:return t===null&&$p(e),null;case 13:return pv(t,e,n);case 4:return Pf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Vo(e,null,r,n):St(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),wg(t,e,r,i,n);case 7:return St(t,e,e.pendingProps,n),e.child;case 8:return St(t,e,e.pendingProps.children,n),e.child;case 12:return St(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,Me(Ac,r._currentValue),r._currentValue=s,o!==null)if(En(o.value,s)){if(o.children===i.children&&!Bt.current){e=pr(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=lr(-1,n&-n),c.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var u=d.pending;u===null?c.next=c:(c.next=u.next,u.next=c),d.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Hp(o.return,n,e),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(H(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Hp(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}St(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fo(e,n),i=nn(i),r=r(i),e.flags|=1,St(t,e,r,n),e.child;case 14:return r=e.type,i=xn(r,e.pendingProps),i=xn(r.type,i),kg(t,e,r,i,n);case 15:return lv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:xn(r,i),sc(t,e),e.tag=1,Ft(r)?(t=!0,xc(e)):t=!1,Fo(e,n),ov(e,r,i),Rp(e,r,i,n),Qp(null,e,r,!0,t,n);case 19:return fv(t,e,n);case 22:return cv(t,e,n)}throw Error(H(156,e.tag))};function Iv(t,e){return ny(t,e)}function wA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function en(t,e,n,r){return new wA(t,e,n,r)}function jf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kA(t){if(typeof t=="function")return jf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===uf)return 11;if(t===pf)return 14}return 2}function Yr(t,e){var n=t.alternate;return n===null?(n=en(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cc(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")jf(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case xo:return Pi(n.children,i,o,e);case df:s=8,i|=8;break;case hp:return t=en(12,n,e,i|2),t.elementType=hp,t.lanes=o,t;case gp:return t=en(13,n,e,i),t.elementType=gp,t.lanes=o,t;case yp:return t=en(19,n,e,i),t.elementType=yp,t.lanes=o,t;case Ug:return qc(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zg:s=10;break e;case Lg:s=9;break e;case uf:s=11;break e;case pf:s=14;break e;case Lr:s=16,r=null;break e}throw Error(H(130,t==null?t:typeof t,""))}return e=en(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function Pi(t,e,n,r){return t=en(7,t,r,e),t.lanes=n,t}function qc(t,e,n,r){return t=en(22,t,r,e),t.elementType=Ug,t.lanes=n,t.stateNode={isHidden:!1},t}function pp(t,e,n){return t=en(6,t,null,e),t.lanes=n,t}function fp(t,e,n){return e=en(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gf(t,e,n,r,i,o,s,l,c){return t=new AA(t,e,n,l,c),e===1?(e=1,o===!0&&(e|=8)):e=0,o=en(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nf(o),t}function SA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bo,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Nv(t){if(!t)return Zr;t=t._reactInternals;e:{if(Li(t)!==t||t.tag!==1)throw Error(H(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(H(171))}if(t.tag===1){var n=t.type;if(Ft(n))return Ny(t,n,e)}return e}function Pv(t,e,n,r,i,o,s,l,c){return t=Gf(n,r,!0,t,i,o,s,l,c),t.context=Nv(null),n=t.current,r=Et(),i=Xr(n),o=lr(r,i),o.callback=e??null,Qr(n,o,i),t.current.lanes=i,Na(t,i,r),Dt(t,r),t}function Rc(t,e,n,r){var i=e.current,o=Et(),s=Xr(i);return n=Nv(n),e.context===null?e.context=n:e.pendingContext=n,e=lr(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Qr(i,e,s),t!==null&&(Sn(t,i,s,o),rc(t,i,s)),s}function Oc(t){return t=t.current,t.child?(t.child.tag===5,t.child.stateNode):null}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function EA(){return null}var Mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kf(t){this._internalRoot=t}jc.prototype.render=Kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(H(409));Rc(t,e,null,null)};jc.prototype.unmount=Kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Di(function(){Rc(null,t,null,null)}),e[dr]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var e=cy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vr.length&&e!==0&&e<Vr[n].priority;n++);Vr.splice(n,0,t),n===0&&uy(t)}};function Xf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fg(){}function TA(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var d=Oc(s);o.call(d)}}var s=Pv(e,r,t,0,null,!1,!1,"",Fg);return t._reactRootContainer=s,t[dr]=s.current,wa(t.nodeType===8?t.parentNode:t),Di(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Oc(c);l.call(d)}}var c=Gf(t,0,!1,null,null,!1,!1,"",Fg);return t._reactRootContainer=c,t[dr]=c.current,wa(t.nodeType===8?t.parentNode:t),Di(function(){Rc(e,c,n,r)}),c}function Qc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Oc(s);l.call(c)}}Rc(e,s,t,i)}else s=TA(n,e,t,i,r);return Oc(s)}ay=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=na(e.pendingLanes);n!==0&&(hf(e,n|1),Dt(e,Ge()),(ke&6)===0&&(Ho=Ge()+500,ni()))}break;case 13:Di(function(){var r=ur(t,1);if(r!==null){var i=Et();Sn(r,t,1,i)}}),Qf(t,1)}};gf=function(t){if(t.tag===13){var e=ur(t,134217728);if(e!==null){var n=Et();Sn(e,t,134217728,n)}Qf(t,134217728)}};ly=function(t){if(t.tag===13){var e=Xr(t),n=ur(t,e);if(n!==null){var r=Et();Sn(n,t,e,r)}Qf(t,e)}};cy=function(){return Te};dy=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Cp=function(t,e,n){switch(e){case"input":if(xp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lc(r);if(!i)throw Error(H(90));Wg(r),xp(r,i)}}}break;case"textarea":Hg(t,n);break;case"select":e=n.value,e!=null&&Po(t,!!n.multiple,e,!1)}};Xg=Hf;Yg=Di;var CA={usingClientEntryPoint:!1,Events:[Ma,So,Lc,Qg,Kg,Hf]},Js={findFiberByHostInstance:Ci,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_A={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:fr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ey(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||EA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Zs.isDisabled&&Zs.supportsFiber))try{Bc=Zs.inject(_A),Hn=Zs}catch{}var Zs;Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CA;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xf(e))throw Error(H(200));return SA(t,e,null,n)};Rt.createRoot=function(t,e){if(!Xf(t))throw Error(H(299));var n=!1,r="",i=Mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gf(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,wa(t.nodeType===8?t.parentNode:t),new Kf(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(H(188)):(t=Object.keys(t).join(","),Error(H(268,t)));return t=ey(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Di(t)};Rt.hydrate=function(t,e,n){if(!Gc(e))throw Error(H(200));return Qc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Xf(t))throw Error(H(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Mv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=Pv(e,null,t,1,n??null,i,!1,o,s),t[dr]=e.current,wa(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new jc(e)};Rt.render=function(t,e,n){if(!Gc(e))throw Error(H(200));return Qc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Gc(t))throw Error(H(40));return t._reactRootContainer?(Di(function(){Qc(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Rt.unstable_batchedUpdates=Hf;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gc(n))throw Error(H(200));if(t==null||t._reactInternals===void 0)throw Error(H(38));return Qc(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426"});var Dv=Ai((y4,Fv)=>{"use strict";function Bv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Bv)}catch(t){console.error(t)}}Bv(),Fv.exports=Ov()});var Lv=Ai(Yf=>{"use strict";var zv=Dv();Yf.createRoot=zv.createRoot,Yf.hydrateRoot=zv.hydrateRoot;var v4});var a=i0(Du()),nw=i0(Lv());function A(t){if(!t)throw new Error("Assertion failed.")}var IA=Math.PI/180,NA=180/Math.PI,Vv=t=>{let e=(t%360+360)%360;if(e===0||e===90||e===180||e===270)return e;throw new Error(`Invalid rotation ${t}.`)},Qo=[1,0,0,0,1,0,0,0,1],Wv=(t,e,n)=>{let[r,i,,o,s]=t,l=Math.abs(r)*e+Math.abs(o)*n,c=Math.abs(i)*e+Math.abs(s)*n;return jo(jo(Uv(-e/2,-n/2),t),Uv(l/2,c/2))},Ba=t=>{let[e,n]=t,r=Math.atan2(n,tm(t)?-e:e);return Vv(Xc(r*NA,90))},tm=t=>{let[e,n,,r,i]=t;return e*i-n*r<0},$v=t=>{let e=t*IA,n=Math.round(Math.cos(e)),r=Math.round(Math.sin(e));return[n,r,0,-r,n,0,0,0,1]},Uv=(t,e)=>[1,0,0,0,1,0,t,e,1],Hv=(t,e)=>[t,0,0,0,e,0,0,0,1],jo=(t,e)=>{let n=new Array(9);for(let r=0;r<3;r++)for(let i=0;i<3;i++)n[3*r+i]=t[3*r]*e[i]+t[3*r+1]*e[3+i]+t[3*r+2]*e[6+i];return n},qv=(t,e,n,r)=>({rotation:Vv(t+(e?-n:n)),flip:e!==r}),He=t=>t&&t[t.length-1],Rn=t=>t>=0&&t<2**32,Rv=t=>t>=-(2**31)&&t<2**31,R=t=>{let e=0;for(;t.readBits(1)===0&&e<32;)e++;if(e>=32)throw new Error("Invalid exponential-Golomb code.");return(1<<e)-1+t.readBits(e)},Vi=(t,e)=>{let n=e+1,r=Math.floor(Math.log2(n));t.writeBits(r,0),t.writeBits(1,1),t.writeBits(r,n-2**r)},jn=t=>{let e=R(t);return(e&1)===0?-(e>>1):e+1>>1};var Qe=t=>t.constructor===Uint8Array?t:ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(t),ye=t=>t.constructor===DataView?t:ArrayBuffer.isView(t)?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(t),PA=typeof globalThis.TextEncoder<"u"?globalThis.TextEncoder:class{constructor(){this.encoding="utf-8"}encode(e=""){let n=new Uint8Array(3*e.length),r=0;for(let i=0;i<e.length;i++){let o=e.charCodeAt(i);if(o<128)n[r++]=o;else if(o<2048)n[r++]=192|o>>6,n[r++]=128|o&63;else if(o<55296||o>57343)n[r++]=224|o>>12,n[r++]=128|o>>6&63,n[r++]=128|o&63;else{let s=i+1<e.length?e.charCodeAt(i+1):0;o<56320&&s>=56320&&s<=57343?(o=65536+(o-55296<<10)+(s-56320),i++,n[r++]=240|o>>18,n[r++]=128|o>>12&63,n[r++]=128|o>>6&63,n[r++]=128|o&63):(n[r++]=239,n[r++]=191,n[r++]=189)}}return n.slice(0,r)}},nm=typeof globalThis.TextDecoder<"u"?globalThis.TextDecoder:class{constructor(e="utf-8"){let n=e.trim().toLowerCase();if(n==="utf-8"||n==="utf8"||n==="unicode-1-1-utf-8")this.encoding="utf-8";else if(n==="utf-16le"||n==="utf-16")this.encoding="utf-16le";else if(n==="utf-16be")this.encoding="utf-16be";else throw new RangeError(`The encoding label provided ('${e}') is invalid.`)}decode(e){let n=e?Qe(e):new Uint8Array(0),r=[];if(this.encoding==="utf-8"){let o=n.length>=3&&n[0]===239&&n[1]===187&&n[2]===191?3:0;for(;o<n.length;){let s=n[o];if(s<128){r.push(s),o++;continue}let l,c;if(s>=194&&s<224)l=1,c=s&31;else if(s>=224&&s<240)l=2,c=s&15;else if(s>=240&&s<245)l=3,c=s&7;else{r.push(65533),o++;continue}let d=s===224?160:s===240?144:128,u=s===237?159:s===244?143:191,p=1;for(;p<=l;p++){let f=o+p<n.length?n[o+p]:0;if(f<d||f>u)break;c=c<<6|f&63,d=128,u=191}o+=p,p<=l?r.push(65533):c>=65536?(c-=65536,r.push(55296|c>>10,56320|c&1023)):r.push(c)}}else{let o=this.encoding==="utf-16le",s=o?255:254,l=o?254:255,c=n.length>=2&&n[0]===s&&n[1]===l?2:0;for(;c+1<n.length;){let d=o?n[c]|n[c+1]<<8:n[c]<<8|n[c+1];if(c+=2,d>=55296&&d<=56319){let u=c+1<n.length?o?n[c]|n[c+1]<<8:n[c]<<8|n[c+1]:-1;u>=56320&&u<=57343?(r.push(d,u),c+=2):r.push(65533)}else d>=56320&&d<=57343?r.push(65533):r.push(d)}c<n.length&&r.push(65533)}let i="";for(let o=0;o<r.length;o+=8192)i+=String.fromCharCode(...r.slice(o,o+8192));return i}},ri=new nm,sn=new PA;var rm=t=>Object.fromEntries(Object.entries(t).map(([e,n])=>[n,e])),mr={bt709:1,bt470bg:5,smpte170m:6,bt2020:9,smpte432:12},ii=rm(mr),hr={bt709:1,smpte170m:6,linear:8,"iec61966-2-1":13,pq:16,hlg:18},oi=rm(hr),gr={rgb:0,bt709:1,bt470bg:5,smpte170m:6,"bt2020-ncl":9},si=rm(gr),Kc=t=>!!t&&!!t.primaries&&!!t.transfer&&!!t.matrix&&t.fullRange!==void 0,jv=t=>!t||t.primaries==null&&t.transfer==null&&t.matrix==null&&t.fullRange==null,Gv={primaries:void 0,transfer:void 0,matrix:void 0,fullRange:void 0},Ko=t=>t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer||ArrayBuffer.isView(t),Go=class{constructor(){this.currentPromise=Promise.resolve(),this.pending=0}async acquire(){let e,n=new Promise(i=>{let o=!1;e=()=>{o||(i(),this.pending--,o=!0)}}),r=this.currentPromise;return this.currentPromise=n,this.pending++,await r,e}},Qv=/^[0-9a-fA-F]+$/,ai=t=>[...t].map(e=>e.toString(16).padStart(2,"0")).join(""),Kv=t=>{A(t.length%2===0);let e=new Uint8Array(t.length/2);for(let n=0;n<t.length;n+=2)e[n/2]=parseInt(t.slice(n,n+2),16);return e},im=t=>(t=t>>1&1431655765|(t&1431655765)<<1,t=t>>2&858993459|(t&858993459)<<2,t=t>>4&252645135|(t&252645135)<<4,t=t>>8&16711935|(t&16711935)<<8,t=t>>16&65535|(t&65535)<<16,t>>>0),om=(t,e,n)=>{let r=0,i=t.length-1,o=-1;for(;r<=i;){let s=r+i>>1,l=n(t[s]);l===e?(o=s,i=s-1):l<e?r=s+1:i=s-1}return o},Fe=(t,e,n)=>{let r=0,i=t.length-1,o=-1;for(;r<=i;){let s=r+(i-r+1)/2|0;n(t[s])<=e?(o=s,r=s+1):i=s-1}return o},sm=(t,e,n)=>{let r=Fe(t,n(e),n);t.splice(r+1,0,e)},Ke=()=>{let t,e;return{promise:new Promise((r,i)=>{t=r,e=i}),resolve:t,reject:e}},Fa=(t,e)=>{let n=t.indexOf(e);n!==-1&&t.splice(n,1)};var Xv=(t,e)=>{for(let n=t.length-1;n>=0;n--)if(e(t[n]))return n;return-1},Yv=async function*(t){Symbol.iterator in t?yield*t[Symbol.iterator]():yield*t[Symbol.asyncIterator]()},Jv=t=>{if(!(Symbol.iterator in t)&&!(Symbol.asyncIterator in t))throw new TypeError("Argument must be an iterable or async iterable.")},Ct=t=>{throw new Error(`Unexpected value: ${t}`)},Wi=(t,e,n)=>{let r=t.getUint8(e),i=t.getUint8(e+1),o=t.getUint8(e+2);return n?r|i<<8|o<<16:r<<16|i<<8|o},Zv=(t,e,n)=>Wi(t,e,n)<<8>>8,am=(t,e,n,r)=>{n=n>>>0,n=n&16777215,r?(t.setUint8(e,n&255),t.setUint8(e+1,n>>>8&255),t.setUint8(e+2,n>>>16&255)):(t.setUint8(e,n>>>16&255),t.setUint8(e+1,n>>>8&255),t.setUint8(e+2,n&255))};var Da=(t,e)=>({async next(){let n=await t.next();return n.done?{value:void 0,done:!0}:{value:e(n.value),done:!1}},return(){return t.return()},throw(n){return t.throw(n)},[Symbol.asyncIterator](){return this}}),_t=(t,e,n)=>Math.max(e,Math.min(n,t)),eb=(t,e,n)=>t+(e-t)*n;var za="und",tb=t=>{let e=Math.round(t);return Math.abs(t/e-1)<10*Number.EPSILON?e:t},Xc=(t,e)=>Math.round(t/e)*e,lm=(t,e)=>Math.round(t*e)/e;var cm=(t,e)=>Math.floor(t*e)/e;var Yc=t=>{let e=0;for(;t!==0;)t&=t-1,e++;return e},MA=/^[a-z]{3}$/,Jc=t=>MA.test(t),Gn=1e6*(1+Number.EPSILON);var nb=(t,e)=>{let n=t<0?-1:1;t=Math.abs(t);let r=0,i=1,o=1,s=0,l=t;for(;;){let c=Math.floor(l),d=c*o+r,u=c*s+i;if(u>e)return{num:n*o,den:s};if(r=o,i=s,o=d,s=u,l=1/(l-c),!isFinite(l))break}return{num:n*o,den:s}},Ui=class{constructor(){this.currentPromise=Promise.resolve()}call(e){return this.currentPromise=this.currentPromise.then(e)}},Jf=null,yr=()=>Jf!==null?Jf:Jf=!!(typeof navigator<"u"&&(navigator.vendor?.match(/apple/i)||/AppleWebKit/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)||/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent))),Zf=null,$i=()=>Zf!==null?Zf:Zf=typeof navigator<"u"&&navigator.userAgent?.includes("Firefox"),em=null,La=()=>em!==null?em:em=!!(typeof navigator<"u"&&(navigator.vendor?.includes("Google Inc")||/Chrome/.test(navigator.userAgent)));var Ua=t=>typeof globalThis.isSecureContext<"u"&&!globalThis.isSecureContext?`${t} is not available in this environment; this may be because this page is running in an insecure context. Try serving your page over HTTPS or use localhost.`:`${t} is not available in this environment.`,OA=(async()=>{})().constructor,le=t=>t instanceof OA||t instanceof Promise?!0:typeof t?.then=="function";var Zc=(t,e,n,r)=>t<=r&&n<=e,ed=function*(t){for(let e in t){let n=t[e];n!==void 0&&(yield{key:e,value:n})}};var rb=(t,e)=>{if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0},Xo=()=>{Symbol.dispose??=Symbol("Symbol.dispose")},li=t=>typeof t=="number"&&!Number.isNaN(t);var ib=(t,e)=>{let n=0;for(let r=0;r<t.length;r++)e(t[r])&&n++;return n},td=(t,e)=>{let n=-1,r=1/0;for(let i=0;i<t.length;i++){let o=e(t[i]);o<r&&(r=o,n=i)}return n};var ci=t=>{A(Number.isInteger(t.num)),A(Number.isInteger(t.den)),A(t.den!==0);let e=Math.abs(t.num),n=Math.abs(t.den);for(;n!==0;){let i=e%n;e=n,n=i}let r=e||1;return{num:t.num/r,den:t.den/r}},nd=(t,e)=>{if(typeof t!="object"||!t)throw new TypeError(`${e} must be an object.`);if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(`${e}.left must be a non-negative integer.`);if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(`${e}.top must be a non-negative integer.`);if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(`${e}.width must be a non-negative integer.`);if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(`${e}.height must be a non-negative integer.`)};var dm=t=>new Promise(e=>setTimeout(e,t));var rd=t=>Array.isArray(t)?t:[t],on=class{constructor(){this._listeners=new Map}on(e,n,r){this._listeners.has(e)||this._listeners.set(e,new Set);let i={fn:n,once:r?.once??!1};return this._listeners.get(e).add(i),()=>{this._listeners.get(e)?.delete(i)}}_emit(...e){let[n,r]=e,i=this._listeners.get(n);if(i)for(let o of i){try{o.fn(r)}catch(s){console.error(s)}o.once&&i.delete(o)}}};var ob=t=>t!==null&&typeof t=="object"&&Object.getPrototypeOf(t)===Object.prototype&&Object.values(t).every(e=>typeof e=="string");var Qn;(function(t){t[t.Silent=0]="Silent",t[t.Errors=1]="Errors",t[t.Warnings=2]="Warnings",t[t.Info=3]="Info"})(Qn||(Qn={}));var ce=class t{constructor(){}static get level(){return t._level}static set level(e){if(e!==Qn.Silent&&e!==Qn.Errors&&e!==Qn.Warnings&&e!==Qn.Info)throw new TypeError("Invalid log level. Use one of the values of the LogLevel enum.");t._level=e}static get _emitter(){return t._emitterInstance??=new on}static on(e,n,r){return t._emitter.on(e,n,r)}static _error(...e){t._emitter._emit("error",e),t._level>=Qn.Errors&&console.error(...e)}static _warn(...e){t._emitter._emit("warn",e),t._level>=Qn.Warnings&&console.warn(...e)}static _info(...e){t._emitter._emit("info",e),t._level>=Qn.Info&&console.info(...e)}};ce._level=Qn.Info;ce._emitterInstance=null;var Tn=class{constructor(e,n){if(this.data=e,this.mimeType=n,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(typeof n!="string")throw new TypeError("mimeType must be a string.")}},um=class{constructor(e,n,r,i){if(this.data=e,this.mimeType=n,this.name=r,this.description=i,!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(n!==void 0&&typeof n!="string")throw new TypeError("mimeType, when provided, must be a string.");if(r!==void 0&&typeof r!="string")throw new TypeError("name, when provided, must be a string.");if(i!==void 0&&typeof i!="string")throw new TypeError("description, when provided, must be a string.")}},sb=t=>{if(!t||typeof t!="object")throw new TypeError("tags must be an object.");if(t.title!==void 0&&typeof t.title!="string")throw new TypeError("tags.title, when provided, must be a string.");if(t.description!==void 0&&typeof t.description!="string")throw new TypeError("tags.description, when provided, must be a string.");if(t.artist!==void 0&&typeof t.artist!="string")throw new TypeError("tags.artist, when provided, must be a string.");if(t.album!==void 0&&typeof t.album!="string")throw new TypeError("tags.album, when provided, must be a string.");if(t.albumArtist!==void 0&&typeof t.albumArtist!="string")throw new TypeError("tags.albumArtist, when provided, must be a string.");if(t.trackNumber!==void 0&&(!Number.isInteger(t.trackNumber)||t.trackNumber<=0))throw new TypeError("tags.trackNumber, when provided, must be a positive integer.");if(t.tracksTotal!==void 0&&(!Number.isInteger(t.tracksTotal)||t.tracksTotal<=0))throw new TypeError("tags.tracksTotal, when provided, must be a positive integer.");if(t.discNumber!==void 0&&(!Number.isInteger(t.discNumber)||t.discNumber<=0))throw new TypeError("tags.discNumber, when provided, must be a positive integer.");if(t.discsTotal!==void 0&&(!Number.isInteger(t.discsTotal)||t.discsTotal<=0))throw new TypeError("tags.discsTotal, when provided, must be a positive integer.");if(t.genre!==void 0&&typeof t.genre!="string")throw new TypeError("tags.genre, when provided, must be a string.");if(t.date!==void 0&&(!(t.date instanceof Date)||Number.isNaN(t.date.getTime())))throw new TypeError("tags.date, when provided, must be a valid Date.");if(t.beatsPerMinute!==void 0&&(!Number.isInteger(t.beatsPerMinute)||t.beatsPerMinute<=0))throw new TypeError("tags.beatsPerMinute, when provided, must be a positive integer.");if(t.lyrics!==void 0&&typeof t.lyrics!="string")throw new TypeError("tags.lyrics, when provided, must be a string.");if(t.images!==void 0){if(!Array.isArray(t.images))throw new TypeError("tags.images, when provided, must be an array.");for(let e of t.images){if(!e||typeof e!="object")throw new TypeError("Each image in tags.images must be an object.");if(!(e.data instanceof Uint8Array))throw new TypeError("Each image.data must be a Uint8Array.");if(typeof e.mimeType!="string")throw new TypeError("Each image.mimeType must be a string.");if(!["coverFront","coverBack","unknown"].includes(e.kind))throw new TypeError("Each image.kind must be 'coverFront', 'coverBack', or 'unknown'.")}}if(t.comment!==void 0&&typeof t.comment!="string")throw new TypeError("tags.comment, when provided, must be a string.");if(t.raw!==void 0){if(!t.raw||typeof t.raw!="object")throw new TypeError("tags.raw, when provided, must be an object.");for(let e of Object.values(t.raw))if(e!==null&&typeof e!="string"&&!(Array.isArray(e)&&e.every(n=>typeof n=="string"))&&!(e instanceof Uint8Array)&&!(e instanceof Tn)&&!(e instanceof um)&&!ob(e))throw new TypeError("Each value in tags.raw must be a string, string array, Uint8Array, RichImageData, AttachedFile, Record<string, string>, or null.")}};var ab={default:!0,primary:!0,forced:!1,original:!1,commentary:!1,hearingImpaired:!1,visuallyImpaired:!1},lb=t=>{if(!t||typeof t!="object")throw new TypeError("disposition must be an object.");if(t.default!==void 0&&typeof t.default!="boolean")throw new TypeError("disposition.default must be a boolean.");if(t.primary!==void 0&&typeof t.primary!="boolean")throw new TypeError("disposition.primary must be a boolean.");if(t.forced!==void 0&&typeof t.forced!="boolean")throw new TypeError("disposition.forced must be a boolean.");if(t.original!==void 0&&typeof t.original!="boolean")throw new TypeError("disposition.original must be a boolean.");if(t.commentary!==void 0&&typeof t.commentary!="boolean")throw new TypeError("disposition.commentary must be a boolean.");if(t.hearingImpaired!==void 0&&typeof t.hearingImpaired!="boolean")throw new TypeError("disposition.hearingImpaired must be a boolean.");if(t.visuallyImpaired!==void 0&&typeof t.visuallyImpaired!="boolean")throw new TypeError("disposition.visuallyImpaired must be a boolean.")};var Ae=class t{constructor(e){this.bytes=e,this.pos=0}seekToByte(e){this.pos=8*e}readBit(){let e=Math.floor(this.pos/8),n=this.bytes[e]??0,r=7-(this.pos&7),i=(n&1<<r)>>r;return this.pos++,i}readBits(e){if(e===1)return this.readBit();let n=0;for(let r=0;r<e;r++)n<<=1,n|=this.readBit();return n}writeBits(e,n){let r=this.pos+e;for(let i=this.pos;i<r;i++){let o=Math.floor(i/8),s=this.bytes[o],l=7-(i&7);s&=~(1<<l),s|=(n&1<<r-i-1)>>r-i-1<<l,this.bytes[o]=s}this.pos=r}copyBits(e,n){let r=0;for(r;r<e-7;r+=8)this.writeBits(8,n.readBits(8));let i=e-r;i>0&&this.writeBits(i,n.readBits(i))}readAlignedByte(){if(this.pos%8!==0)throw new Error("Bitstream is not byte-aligned.");let e=this.pos/8,n=this.bytes[e]??0;return this.pos+=8,n}skipBits(e){this.pos+=e}getBitsLeft(){return this.bytes.length*8-this.pos}clone(){let e=new t(this.bytes);return e.pos=this.pos,e}};var Va=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],id=[-1,1,2,3,4,5,6,8],od=t=>{if(!t||t.byteLength<2)throw new TypeError("AAC description must be at least 2 bytes long.");let e=new Ae(t),n=pm(e),{frequencyIndex:r,sampleRate:i}=fm(e),o=e.readBits(4),s=null;o>=1&&o<=7&&(s=id[o]);let l=n,c=!1,d=i;if(n===5||n===29)c=n===29,d=fm(e).sampleRate,l=pm(e),l===22&&e.skipBits(4);else for(;e.getBitsLeft()>15;){let u=e.pos;if(e.readBits(11)!==695){e.pos=u+1;continue}pm(e)===5&&e.readBits(1)&&(d=fm(e).sampleRate,e.getBitsLeft()>11&&e.readBits(11)===1352&&(c=!!e.readBits(1)));break}return s!==null&&s>1&&(c=!1),{objectType:n,coreObjectType:l,frequencyIndex:r,channelConfiguration:o,outputSampleRate:d,outputNumberOfChannels:c&&s===1?2:s}},pm=t=>{let e=t.readBits(5);return e===31?32+t.readBits(6):e},fm=t=>{let e=t.readBits(4);return e===15?{frequencyIndex:e,sampleRate:t.readBits(24)}:{frequencyIndex:e,sampleRate:e<Va.length?Va[e]:null}},ub=t=>{let e=t.objectType===5||t.objectType===29,n=t.objectType===29,r=e?t.outputSampleRate/2:t.outputSampleRate,i=n?1:t.outputNumberOfChannels,o=id.indexOf(i);if(o===-1)throw new TypeError(`Unsupported number of channels: ${t.outputNumberOfChannels}`);let s=16;t.objectType>=32&&(s+=6),mm(r)===15&&(s+=24),e&&(s+=9,mm(t.outputSampleRate)===15&&(s+=24));let l=Math.ceil(s/8),c=new Uint8Array(l),d=new Ae(c);return cb(d,t.objectType),db(d,r),d.writeBits(4,o),e&&(db(d,t.outputSampleRate),cb(d,2)),d.writeBits(3,0),c},cb=(t,e)=>{e<32?t.writeBits(5,e):(t.writeBits(5,31),t.writeBits(6,e-32))},db=(t,e)=>{let n=mm(e);t.writeBits(4,n),n===15&&t.writeBits(24,e)},mm=t=>{let e=Va.indexOf(t);return e===-1?15:e};var Wa=[48e3,44100,32e3],hm=[24e3,22050,16e3];var an;(function(t){t[t.NON_IDR_SLICE=1]="NON_IDR_SLICE",t[t.SLICE_DPA=2]="SLICE_DPA",t[t.SLICE_DPB=3]="SLICE_DPB",t[t.SLICE_DPC=4]="SLICE_DPC",t[t.IDR=5]="IDR",t[t.SEI=6]="SEI",t[t.SPS=7]="SPS",t[t.PPS=8]="PPS",t[t.AUD=9]="AUD",t[t.SPS_EXT=13]="SPS_EXT"})(an||(an={}));var at;(function(t){t[t.RASL_N=8]="RASL_N",t[t.RASL_R=9]="RASL_R",t[t.BLA_W_LP=16]="BLA_W_LP",t[t.RSV_IRAP_VCL23=23]="RSV_IRAP_VCL23",t[t.VPS_NUT=32]="VPS_NUT",t[t.SPS_NUT=33]="SPS_NUT",t[t.PPS_NUT=34]="PPS_NUT",t[t.AUD_NUT=35]="AUD_NUT",t[t.PREFIX_SEI_NUT=39]="PREFIX_SEI_NUT",t[t.SUFFIX_SEI_NUT=40]="SUFFIX_SEI_NUT"})(at||(at={}));var Jo=function*(t){let e=0,n=-1;for(;e<t.length-2;){let r=t.indexOf(0,e);if(r===-1||r>=t.length-2)break;e=r;let i=0;if(e+3<t.length&&t[e+1]===0&&t[e+2]===0&&t[e+3]===1?i=4:t[e+1]===0&&t[e+2]===1&&(i=3),i===0){e++;continue}n!==-1&&e>n&&(yield{offset:n,length:e-n}),n=e+i,e=n}n!==-1&&n<t.length&&(yield{offset:n,length:t.length-n})},hb=function*(t,e){let n=0,r=new DataView(t.buffer,t.byteOffset,t.byteLength);for(;n+e<=t.length;){let i;e===1?i=r.getUint8(n):e===2?i=r.getUint16(n,!1):e===3?i=Wi(r,n,!1):(A(e===4),i=r.getUint32(n,!1)),n+=e,yield{offset:n,length:i},n+=i}},ym=(t,e)=>{if(e.description){let i=(Qe(e.description)[4]&3)+1;return hb(t,i)}else return Jo(t)},qa=t=>t&31,ld=t=>{let e=[],n=t.length;for(let r=0;r<n;r++)r+2<n&&t[r]===0&&t[r+1]===0&&t[r+2]===3?(e.push(0,0),r+=2):e.push(t[r]);return new Uint8Array(e)},FA=t=>{let e=[],n=0;for(let r of t)n===2&&r<=3&&(e.push(3),n=0),e.push(r),n=r===0?n+1:0;return new Uint8Array(e)},gm=new Uint8Array([0,0,0,1]),gb=t=>{let e=t.reduce((i,o)=>i+gm.byteLength+o.byteLength,0),n=new Uint8Array(e),r=0;for(let i of t)n.set(gm,r),r+=gm.byteLength,n.set(i,r),r+=i.byteLength;return n},cd=(t,e)=>{let n=t.reduce((o,s)=>o+e+s.byteLength,0),r=new Uint8Array(n),i=0;for(let o of t){let s=new DataView(r.buffer,r.byteOffset,r.byteLength);switch(e){case 1:s.setUint8(i,o.byteLength);break;case 2:s.setUint16(i,o.byteLength,!1);break;case 3:am(s,i,o.byteLength,!1);break;case 4:s.setUint32(i,o.byteLength,!1);break}i+=e,r.set(o,i),i+=o.byteLength}return r},yb=(t,e)=>{if(e.description){let i=(Qe(e.description)[4]&3)+1;return cd(t,i)}else return gb(t)},dd=t=>{try{let e=[],n=[],r=[];for(let l of Jo(t)){let c=t.subarray(l.offset,l.offset+l.length),d=qa(c[0]);d===an.SPS?e.push(c):d===an.PPS?n.push(c):d===an.SPS_EXT&&r.push(c)}if(e.length===0||n.length===0)return null;let i=e[0],o=Zo(i);A(o!==null);let s=o.profileIdc===100||o.profileIdc===110||o.profileIdc===122||o.profileIdc===144;return{configurationVersion:1,avcProfileIndication:o.profileIdc,profileCompatibility:o.constraintFlags,avcLevelIndication:o.levelIdc,lengthSizeMinusOne:3,sequenceParameterSets:e,pictureParameterSets:n,chromaFormat:s?o.chromaFormatIdc:null,bitDepthLumaMinus8:s?o.bitDepthLumaMinus8:null,bitDepthChromaMinus8:s?o.bitDepthChromaMinus8:null,sequenceParameterSetExt:s?r:null}}catch(e){return ce._error("Error building AVC Decoder Configuration Record:",e),null}},ud=t=>{let e=[];e.push(t.configurationVersion),e.push(t.avcProfileIndication),e.push(t.profileCompatibility),e.push(t.avcLevelIndication),e.push(252|t.lengthSizeMinusOne&3),e.push(224|t.sequenceParameterSets.length&31);for(let n of t.sequenceParameterSets){let r=n.byteLength;e.push(r>>8),e.push(r&255);for(let i=0;i<r;i++)e.push(n[i])}e.push(t.pictureParameterSets.length);for(let n of t.pictureParameterSets){let r=n.byteLength;e.push(r>>8),e.push(r&255);for(let i=0;i<r;i++)e.push(n[i])}if((t.avcProfileIndication===100||t.avcProfileIndication===110||t.avcProfileIndication===122||t.avcProfileIndication===144)&&t.chromaFormat!==null){A(t.bitDepthLumaMinus8!==null),A(t.bitDepthChromaMinus8!==null),A(t.sequenceParameterSetExt!==null),e.push(252|t.chromaFormat&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.sequenceParameterSetExt.length);for(let n of t.sequenceParameterSetExt){let r=n.byteLength;e.push(r>>8),e.push(r&255);for(let i=0;i<r;i++)e.push(n[i])}}return new Uint8Array(e)},pd=t=>{try{let e=ye(t),n=0,r=e.getUint8(n++),i=e.getUint8(n++),o=e.getUint8(n++),s=e.getUint8(n++),l=e.getUint8(n++)&3,c=e.getUint8(n++)&31,d=[];for(let m=0;m<c;m++){let h=e.getUint16(n,!1);n+=2,d.push(t.subarray(n,n+h)),n+=h}let u=e.getUint8(n++),p=[];for(let m=0;m<u;m++){let h=e.getUint16(n,!1);n+=2,p.push(t.subarray(n,n+h)),n+=h}let f={configurationVersion:r,avcProfileIndication:i,profileCompatibility:o,avcLevelIndication:s,lengthSizeMinusOne:l,sequenceParameterSets:d,pictureParameterSets:p,chromaFormat:null,bitDepthLumaMinus8:null,bitDepthChromaMinus8:null,sequenceParameterSetExt:null};if((i===100||i===110||i===122||i===144)&&n+4<=t.length){let m=e.getUint8(n++)&3,h=e.getUint8(n++)&7,v=e.getUint8(n++)&7,x=e.getUint8(n++);f.chromaFormat=m,f.bitDepthLumaMinus8=h,f.bitDepthChromaMinus8=v;let y=[];for(let g=0;g<x;g++){let b=e.getUint16(n,!1);n+=2,y.push(t.subarray(n,n+b)),n+=b}f.sequenceParameterSetExt=y}return f}catch(e){return ce._error("Error deserializing AVC Decoder Configuration Record:",e),null}},vb={1:{num:1,den:1},2:{num:12,den:11},3:{num:10,den:11},4:{num:16,den:11},5:{num:40,den:33},6:{num:24,den:11},7:{num:20,den:11},8:{num:32,den:11},9:{num:80,den:33},10:{num:18,den:11},11:{num:15,den:11},12:{num:64,den:33},13:{num:160,den:99},14:{num:4,den:3},15:{num:3,den:2},16:{num:2,den:1}},Zo=t=>{try{let e=ld(t),n=new Ae(e);if(n.skipBits(1),n.skipBits(2),n.readBits(5)!==7)return null;let i=n.readAlignedByte(),o=n.readAlignedByte(),s=n.readAlignedByte();R(n);let l=1,c=0,d=0,u=0;if((i===100||i===110||i===122||i===244||i===44||i===83||i===86||i===118||i===128)&&(l=R(n),l===3&&(u=n.readBits(1)),c=R(n),d=R(n),n.skipBits(1),n.readBits(1))){for(let U=0;U<(l!==3?8:12);U++)if(n.readBits(1)){let oe=U<6?16:64,se=8,N=8;for(let G=0;G<oe;G++){if(N!==0){let X=jn(n);N=(se+X+256)%256}se=N===0?se:N}}}R(n);let p=R(n);if(p===0)R(n);else if(p===1){n.skipBits(1),jn(n),jn(n);let D=R(n);for(let U=0;U<D;U++)jn(n)}R(n),n.skipBits(1);let f=R(n),m=R(n),h=16*(f+1),v=16*(m+1),x=h,y=v,g=n.readBits(1);if(g||n.skipBits(1),n.skipBits(1),n.readBits(1)){let D=R(n),U=R(n),j=R(n),oe=R(n),se,N;if((u===0?l:0)===0)se=1,N=2-g;else{let X=l===3?1:2,ie=l===1?2:1;se=X,N=ie*(2-g)}x-=se*(D+U),y-=N*(j+oe)}let w=2,k=2,S=2,E=0,T={num:1,den:1},_=null,C=null,I=null,M=null,O=n.pos;if(n.readBits(1)){if(n.readBits(1)){let X=n.readBits(8);if(X===255)T={num:n.readBits(16),den:n.readBits(16)};else{let ie=vb[X];ie&&(T=ie)}}n.readBits(1)&&n.skipBits(1),n.readBits(1)&&(n.skipBits(3),E=n.readBits(1),n.readBits(1)&&(w=n.readBits(8),k=n.readBits(8),S=n.readBits(8))),n.readBits(1)&&(R(n),R(n)),n.readBits(1)&&(n.skipBits(32),n.skipBits(32),n.skipBits(1));let N=n.readBits(1);N&&pb(n);let G=n.readBits(1);G&&pb(n),(N||G)&&n.skipBits(1),n.skipBits(1),I=n.pos,M=n.readBits(1),M&&(n.skipBits(1),R(n),R(n),R(n),R(n),_=R(n),C=R(n))}if(_===null){A(C===null);let D=o&16;if((i===44||i===86||i===100||i===110||i===122||i===244)&&D)_=0,C=0;else{let U=f+1,j=m+1,oe=(2-g)*j,se=Ha.find(G=>G.level>=s)??He(Ha),N=Math.min(Math.floor(se.maxDpbMbs/(U*oe)),16);_=N,C=N}}return A(C!==null),{emulationUnpreventedBytes:e,profileIdc:i,constraintFlags:o,levelIdc:s,frameMbsOnlyFlag:g,chromaFormatIdc:l,bitDepthLumaMinus8:c,bitDepthChromaMinus8:d,codedWidth:h,codedHeight:v,displayWidth:x,displayHeight:y,pixelAspectRatio:T,colourPrimaries:w,matrixCoefficients:S,transferCharacteristics:k,fullRangeFlag:E,numReorderFrames:_,maxDecFrameBuffering:C,vuiParametersFlagBitOffset:O,bitstreamRestrictionFlagBitOffset:I,bitstreamRestrictionFlag:M}}catch(e){return ce._error("Error parsing AVC SPS:",e),null}},pb=t=>{let e=R(t);t.skipBits(4),t.skipBits(4);for(let n=0;n<=e;n++)R(t),R(t),t.skipBits(1);t.skipBits(5),t.skipBits(5),t.skipBits(5),t.skipBits(5)},vm=t=>{A(t.bitstreamRestrictionFlag!==1);let e=new Uint8Array(t.emulationUnpreventedBytes.byteLength+64),n=new Ae(t.emulationUnpreventedBytes),r=new Ae(e);t.bitstreamRestrictionFlag===null?(r.copyBits(t.vuiParametersFlagBitOffset,n),r.writeBits(1,1),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0),r.writeBits(1,0)):(A(t.bitstreamRestrictionFlagBitOffset!==null),r.copyBits(t.bitstreamRestrictionFlagBitOffset,n)),r.writeBits(1,1),r.writeBits(1,1),Vi(r,2),Vi(r,1),Vi(r,16),Vi(r,16),Vi(r,t.numReorderFrames),Vi(r,t.maxDecFrameBuffering),r.writeBits(1,1),r.writeBits((8-r.pos%8)%8,0);let i=r.pos/8;return A(Number.isInteger(i)),FA(e.subarray(0,i))},DA=(t,e)=>{if(e.description){let i=(Qe(e.description)[21]&3)+1;return cd(t,i)}else return gb(t)},$a=(t,e)=>{if(e.description){let i=(Qe(e.description)[21]&3)+1;return hb(t,i)}else return Jo(t)},Yo=t=>t>>1&63,bm=t=>{try{let e=new Ae(ld(t));e.skipBits(16),e.readBits(4);let n=e.readBits(3),r=e.readBits(1),{general_profile_space:i,general_tier_flag:o,general_profile_idc:s,general_profile_compatibility_flags:l,general_constraint_indicator_flags:c,general_level_idc:d}=zA(e,n);R(e);let u=R(e),p=0;u===3&&(p=e.readBits(1));let f=R(e),m=R(e),h=f,v=m;if(e.readBits(1)){let M=R(e),O=R(e),$=R(e),D=R(e),U=1,j=1,oe=p===0?u:0;oe===1?(U=2,j=2):oe===2&&(U=2,j=1),h-=(M+O)*U,v-=($+D)*j}let x=R(e),y=R(e);R(e);let b=e.readBits(1)?0:n,w=0;for(let M=b;M<=n;M++)R(e),w=R(e),R(e);R(e),R(e),R(e),R(e),R(e),R(e),e.readBits(1)&&e.readBits(1)&&LA(e),e.skipBits(1),e.skipBits(1),e.readBits(1)&&(e.skipBits(4),e.skipBits(4),R(e),R(e),e.skipBits(1));let k=R(e);if(UA(e,k),e.readBits(1)){let M=R(e);for(let O=0;O<M;O++)R(e),e.skipBits(1)}e.skipBits(1),e.skipBits(1);let S=2,E=2,T=2,_=0,C=0,I={num:1,den:1};if(e.readBits(1)){let M=WA(e,n);I=M.pixelAspectRatio,S=M.colourPrimaries,E=M.transferCharacteristics,T=M.matrixCoefficients,_=M.fullRangeFlag,C=M.minSpatialSegmentationIdc}return{displayWidth:h,displayHeight:v,pixelAspectRatio:I,colourPrimaries:S,transferCharacteristics:E,matrixCoefficients:T,fullRangeFlag:_,maxDecFrameBuffering:w+1,spsMaxSubLayersMinus1:n,spsTemporalIdNestingFlag:r,generalProfileSpace:i,generalTierFlag:o,generalProfileIdc:s,generalProfileCompatibilityFlags:l,generalConstraintIndicatorFlags:c,generalLevelIdc:d,chromaFormatIdc:u,bitDepthLumaMinus8:x,bitDepthChromaMinus8:y,minSpatialSegmentationIdc:C}}catch(e){return ce._error("Error parsing HEVC SPS:",e),null}},fd=t=>{try{let e=[],n=[],r=[],i=[];for(let d of Jo(t)){let u=t.subarray(d.offset,d.offset+d.length),p=Yo(u[0]);p===at.VPS_NUT?e.push(u):p===at.SPS_NUT?n.push(u):p===at.PPS_NUT?r.push(u):(p===at.PREFIX_SEI_NUT||p===at.SUFFIX_SEI_NUT)&&i.push(u)}if(n.length===0||r.length===0)return null;let o=bm(n[0]);if(!o)return null;let s=0;if(r.length>0){let d=r[0],u=new Ae(ld(d));u.skipBits(16),R(u),R(u),u.skipBits(1),u.skipBits(1),u.skipBits(3),u.skipBits(1),u.skipBits(1),R(u),R(u),jn(u),u.skipBits(1),u.skipBits(1),u.readBits(1)&&R(u),jn(u),jn(u),u.skipBits(1),u.skipBits(1),u.skipBits(1),u.skipBits(1);let p=u.readBits(1),f=u.readBits(1);!p&&!f?s=0:p&&!f?s=2:!p&&f?s=3:s=0}let l=[...e.length?[{arrayCompleteness:1,nalUnitType:at.VPS_NUT,nalUnits:e}]:[],...n.length?[{arrayCompleteness:1,nalUnitType:at.SPS_NUT,nalUnits:n}]:[],...r.length?[{arrayCompleteness:1,nalUnitType:at.PPS_NUT,nalUnits:r}]:[],...i.length?[{arrayCompleteness:1,nalUnitType:Yo(i[0][0]),nalUnits:i}]:[]];return{configurationVersion:1,generalProfileSpace:o.generalProfileSpace,generalTierFlag:o.generalTierFlag,generalProfileIdc:o.generalProfileIdc,generalProfileCompatibilityFlags:o.generalProfileCompatibilityFlags,generalConstraintIndicatorFlags:o.generalConstraintIndicatorFlags,generalLevelIdc:o.generalLevelIdc,minSpatialSegmentationIdc:o.minSpatialSegmentationIdc,parallelismType:s,chromaFormatIdc:o.chromaFormatIdc,bitDepthLumaMinus8:o.bitDepthLumaMinus8,bitDepthChromaMinus8:o.bitDepthChromaMinus8,avgFrameRate:0,constantFrameRate:0,numTemporalLayers:o.spsMaxSubLayersMinus1+1,temporalIdNested:o.spsTemporalIdNestingFlag,lengthSizeMinusOne:3,arrays:l}}catch(e){return ce._error("Error building HEVC Decoder Configuration Record:",e),null}},zA=(t,e)=>{let n=t.readBits(2),r=t.readBits(1),i=t.readBits(5),o=0;for(let u=0;u<32;u++)o=o<<1|t.readBits(1);let s=new Uint8Array(6);for(let u=0;u<6;u++)s[u]=t.readBits(8);let l=t.readBits(8),c=[],d=[];for(let u=0;u<e;u++)c.push(t.readBits(1)),d.push(t.readBits(1));if(e>0)for(let u=e;u<8;u++)t.skipBits(2);for(let u=0;u<e;u++)c[u]&&t.skipBits(88),d[u]&&t.skipBits(8);return{general_profile_space:n,general_tier_flag:r,general_profile_idc:i,general_profile_compatibility_flags:o,general_constraint_indicator_flags:s,general_level_idc:l}},LA=t=>{for(let e=0;e<4;e++)for(let n=0;n<(e===3?2:6);n++)if(!t.readBits(1))R(t);else{let i=Math.min(64,1<<4+(e<<1));e>1&&jn(t);for(let o=0;o<i;o++)jn(t)}},UA=(t,e)=>{let n=[];for(let r=0;r<e;r++)n[r]=VA(t,r,e,n)},VA=(t,e,n,r)=>{let i=0,o=0,s=0;if(e!==0&&(o=t.readBits(1)),o){if(e===n){let c=R(t);s=e-(c+1)}else s=e-1;t.readBits(1),R(t);let l=r[s]??0;for(let c=0;c<=l;c++)t.readBits(1)||t.readBits(1);i=r[s]}else{let l=R(t),c=R(t);for(let d=0;d<l;d++)R(t),t.readBits(1);for(let d=0;d<c;d++)R(t),t.readBits(1);i=l+c}return i},WA=(t,e)=>{let n=2,r=2,i=2,o=0,s=0,l={num:1,den:1};if(t.readBits(1)){let c=t.readBits(8);if(c===255)l={num:t.readBits(16),den:t.readBits(16)};else{let d=vb[c];d&&(l=d)}}return t.readBits(1)&&t.readBits(1),t.readBits(1)&&(t.readBits(3),o=t.readBits(1),t.readBits(1)&&(n=t.readBits(8),r=t.readBits(8),i=t.readBits(8))),t.readBits(1)&&(R(t),R(t)),t.readBits(1),t.readBits(1),t.readBits(1),t.readBits(1)&&(R(t),R(t),R(t),R(t)),t.readBits(1)&&(t.readBits(32),t.readBits(32),t.readBits(1)&&R(t),t.readBits(1)&&$A(t,!0,e)),t.readBits(1)&&(t.readBits(1),t.readBits(1),t.readBits(1),s=R(t),R(t),R(t),R(t),R(t)),{pixelAspectRatio:l,colourPrimaries:n,transferCharacteristics:r,matrixCoefficients:i,fullRangeFlag:o,minSpatialSegmentationIdc:s}},$A=(t,e,n)=>{let r=!1,i=!1,o=!1;e&&(r=t.readBits(1)===1,i=t.readBits(1)===1,(r||i)&&(o=t.readBits(1)===1,o&&(t.readBits(8),t.readBits(5),t.readBits(1),t.readBits(5)),t.readBits(4),t.readBits(4),o&&t.readBits(4),t.readBits(5),t.readBits(5),t.readBits(5)));for(let s=0;s<=n;s++){let l=t.readBits(1)===1,c=!0;l||(c=t.readBits(1)===1);let d=!1;c?R(t):d=t.readBits(1)===1;let u=1;d||(u=R(t)+1),r&&fb(t,u,o),i&&fb(t,u,o)}},fb=(t,e,n)=>{for(let r=0;r<e;r++)R(t),R(t),n&&(R(t),R(t)),t.readBits(1)},bb=t=>{let e=[];e.push(t.configurationVersion),e.push((t.generalProfileSpace&3)<<6|(t.generalTierFlag&1)<<5|t.generalProfileIdc&31),e.push(t.generalProfileCompatibilityFlags>>>24&255),e.push(t.generalProfileCompatibilityFlags>>>16&255),e.push(t.generalProfileCompatibilityFlags>>>8&255),e.push(t.generalProfileCompatibilityFlags&255),e.push(...t.generalConstraintIndicatorFlags),e.push(t.generalLevelIdc&255),e.push(240|t.minSpatialSegmentationIdc>>8&15),e.push(t.minSpatialSegmentationIdc&255),e.push(252|t.parallelismType&3),e.push(252|t.chromaFormatIdc&3),e.push(248|t.bitDepthLumaMinus8&7),e.push(248|t.bitDepthChromaMinus8&7),e.push(t.avgFrameRate>>8&255),e.push(t.avgFrameRate&255),e.push((t.constantFrameRate&3)<<6|(t.numTemporalLayers&7)<<3|(t.temporalIdNested&1)<<2|t.lengthSizeMinusOne&3),e.push(t.arrays.length&255);for(let n of t.arrays){e.push((n.arrayCompleteness&1)<<7|0|n.nalUnitType&63),e.push(n.nalUnits.length>>8&255),e.push(n.nalUnits.length&255);for(let r of n.nalUnits){e.push(r.length>>8&255),e.push(r.length&255);for(let i=0;i<r.length;i++)e.push(r[i])}}return new Uint8Array(e)},xb=t=>{try{let e=ye(t),n=0,r=e.getUint8(n++),i=e.getUint8(n++),o=i>>6&3,s=i>>5&1,l=i&31,c=e.getUint32(n,!1);n+=4;let d=t.subarray(n,n+6);n+=6;let u=e.getUint8(n++),p=(e.getUint8(n++)&15)<<8|e.getUint8(n++),f=e.getUint8(n++)&3,m=e.getUint8(n++)&3,h=e.getUint8(n++)&7,v=e.getUint8(n++)&7,x=e.getUint16(n,!1);n+=2;let y=e.getUint8(n++),g=y>>6&3,b=y>>3&7,w=y>>2&1,k=y&3,S=e.getUint8(n++),E=[];for(let T=0;T<S;T++){let _=e.getUint8(n++),C=_>>7&1,I=_&63,M=e.getUint16(n,!1);n+=2;let O=[];for(let $=0;$<M;$++){let D=e.getUint16(n,!1);n+=2,O.push(t.subarray(n,n+D)),n+=D}E.push({arrayCompleteness:C,nalUnitType:I,nalUnits:O})}return{configurationVersion:r,generalProfileSpace:o,generalTierFlag:s,generalProfileIdc:l,generalProfileCompatibilityFlags:c,generalConstraintIndicatorFlags:d,generalLevelIdc:u,minSpatialSegmentationIdc:p,parallelismType:f,chromaFormatIdc:m,bitDepthLumaMinus8:h,bitDepthChromaMinus8:v,avgFrameRate:x,constantFrameRate:g,numTemporalLayers:b,temporalIdNested:w,lengthSizeMinusOne:k,arrays:E}}catch(e){return ce._error("Error deserializing HEVC Decoder Configuration Record:",e),null}},bt;(function(t){t[t.audAllowed=0]="audAllowed",t[t.beforeFirstVcl=1]="beforeFirstVcl",t[t.afterFirstVcl=2]="afterFirstVcl",t[t.eoBitstreamAllowed=3]="eoBitstreamAllowed",t[t.noMoreDataAllowed=4]="noMoreDataAllowed"})(bt||(bt={}));var wb=(t,e)=>{let n=new Set,r=bt.audAllowed;for(let o of $a(t,e)){if(r===bt.noMoreDataAllowed){n.add(o.offset);continue}let s=Yo(t[o.offset]);if(r===bt.eoBitstreamAllowed&&s!==37){n.add(o.offset);continue}let l=!1;s===35?r>bt.audAllowed?l=!0:r=bt.beforeFirstVcl:s<=31?r>bt.afterFirstVcl?l=!0:r=bt.afterFirstVcl:s===36?r!==bt.afterFirstVcl?l=!0:r=bt.eoBitstreamAllowed:s===37?r<bt.afterFirstVcl?l=!0:r=bt.noMoreDataAllowed:s===32||s===33||s===34||s===39||s>=41&&s<=44||s>=48&&s<=55?r>bt.beforeFirstVcl?l=!0:r=bt.beforeFirstVcl:(s===38||s===40||s>=45&&s<=47||s>=56&&s<=63)&&r<bt.afterFirstVcl&&(l=!0),l&&n.add(o.offset)}if(n.size===0)return null;let i=[];for(let o of $a(t,e))n.has(o.offset)||i.push(t.subarray(o.offset,o.offset+o.length));return DA(i,e)},HA={1:{colourPrimaries:5,transferCharacteristics:6,matrixCoefficients:5},2:{colourPrimaries:1,transferCharacteristics:1,matrixCoefficients:1},3:{colourPrimaries:6,transferCharacteristics:6,matrixCoefficients:6},4:{colourPrimaries:7,transferCharacteristics:7,matrixCoefficients:7},5:{colourPrimaries:9,transferCharacteristics:14,matrixCoefficients:9},7:{colourPrimaries:1,transferCharacteristics:13,matrixCoefficients:0}},kb=t=>{let e=new Ae(t);if(e.readBits(2)!==2)return null;let r=e.readBits(1),o=(e.readBits(1)<<1)+r;if(o===3&&e.skipBits(1),e.readBits(1)===1||e.readBits(1)!==0||(e.skipBits(2),e.readBits(24)!==4817730))return null;let d=8;o>=2&&(d=e.readBits(1)?12:10);let u=e.readBits(3),p=0,f=0;if(u!==7)if(f=e.readBits(1),o===1||o===3){let T=e.readBits(1),_=e.readBits(1);p=!T&&!_?3:T&&!_?2:1,e.skipBits(1)}else p=1;else p=3,f=1;let m=e.readBits(16),h=e.readBits(16),v=m+1,x=h+1,y=v*x,g=He(vr).level;for(let E of vr)if(y<=E.maxPictureSize){g=E.level;break}let b=HA[u],w=b?.colourPrimaries??2,k=b?.transferCharacteristics??2,S=b?.matrixCoefficients??2;return{profile:o,level:g,bitDepth:d,chromaSubsampling:p,videoFullRangeFlag:f,colourPrimaries:w,transferCharacteristics:k,matrixCoefficients:S}},Ab=t=>t.colourPrimaries!==2||t.transferCharacteristics!==2||t.matrixCoefficients!==2,Sb=function*(t){let e=new Ae(t),n=()=>{let r=0;for(let i=0;i<8;i++){let o=e.readAlignedByte();if(r+=(o&127)*2**(i*7),!(o&128))break;if(i===7&&o&128)return null}return r>2**32-1?null:r};for(;e.getBitsLeft()>=8;){e.skipBits(1);let r=e.readBits(4),i=e.readBits(1),o=e.readBits(1);e.skipBits(1),i&&e.skipBits(8);let s;if(o){let l=n();if(l===null)return;s=l}else s=Math.floor(e.getBitsLeft()/8);A(e.pos%8===0),yield{type:r,data:t.subarray(e.pos/8,e.pos/8+s)},e.skipBits(s*8)}},xm=t=>{for(let{type:e,data:n}of Sb(t)){if(e!==1)continue;let r=new Ae(n),i=r.readBits(3),o=r.readBits(1),s=r.readBits(1),l=0,c=0,d=0;if(s)l=r.readBits(5);else{let C=r.readBits(1),I=0;if(C){if(r.skipBits(32),r.skipBits(32),r.readBits(1)){let D=0;for(;D<32&&!r.readBits(1);)D++;D<32&&r.skipBits(D)}I=r.readBits(1),I&&(d=r.readBits(5),r.skipBits(32),r.skipBits(5),r.skipBits(5))}let M=r.readBits(1),O=r.readBits(5);for(let $=0;$<=O;$++){r.skipBits(12);let D=r.readBits(5);if($===0&&(l=D),D>7){let U=r.readBits(1);$===0&&(c=U)}if(I&&r.readBits(1)){let j=d+1;r.skipBits(j),r.skipBits(j),r.skipBits(1)}M&&r.readBits(1)&&r.skipBits(4)}}let u=r.readBits(4),p=r.readBits(4),f=u+1;r.skipBits(f);let m=p+1;r.skipBits(m);let h=0;if(s?h=0:h=r.readBits(1),h&&(r.skipBits(4),r.skipBits(3)),r.skipBits(1),r.skipBits(1),r.skipBits(1),!s){r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);let C=r.readBits(1);C&&(r.skipBits(1),r.skipBits(1));let I=r.readBits(1),M=0;I?M=2:M=r.readBits(1),M>0&&(r.readBits(1)||r.skipBits(1)),C&&r.skipBits(3)}r.skipBits(1),r.skipBits(1),r.skipBits(1);let v=r.readBits(1),x=8;i===2&&v?x=r.readBits(1)?12:10:i<=2&&(x=v?10:8);let y=0;i!==1&&(y=r.readBits(1));let g=2,b=2,w=2;r.readBits(1)&&(g=r.readBits(8),b=r.readBits(8),w=r.readBits(8));let S=0,E=1,T=1,_=0;return y?S=r.readBits(1):g===1&&b===13&&w===0?(S=1,E=0,T=0):(S=r.readBits(1),i===0?(E=1,T=1):i===1?(E=0,T=0):x===12?(E=r.readBits(1),T=E?r.readBits(1):0):(E=1,T=0),E&&T&&(_=r.readBits(2))),{profile:i,level:l,tier:c,bitDepth:x,monochrome:y,chromaSubsamplingX:E,chromaSubsamplingY:T,chromaSamplePosition:_,videoFullRangeFlag:S,colourPrimaries:g,transferCharacteristics:b,matrixCoefficients:w}}return null},Eb=t=>t.colourPrimaries!==2||t.transferCharacteristics!==2||t.matrixCoefficients!==2,Tb=t=>{if(t.length<36)return null;let n=ye(t);return n.getUint32(4)!==1768124518||n.getUint16(8)<28?null:{fullRange:!1,colourPrimaries:n.getUint8(22),transferCharacteristics:n.getUint8(23),matrixCoefficients:n.getUint8(24)}},Cb=t=>{let e=ye(t),n=e.getUint8(9),r=e.getUint16(10,!0),i=e.getUint32(12,!0),o=e.getInt16(16,!0),s=e.getUint8(18),l=null;return s&&(l=t.subarray(19,21+n)),{outputChannelCount:n,preSkip:r,inputSampleRate:i,outputGain:o,channelMappingFamily:s,channelMappingTable:l}};var es=(t,e,n)=>{switch(t){case"avc":{for(let r of ym(n,e)){let i=n[r.offset],o=qa(i);if(o>=an.NON_IDR_SLICE&&o<=an.SLICE_DPC)return"delta";if(o===an.IDR)return"key";if(o===an.SEI&&!La()){let s=n.subarray(r.offset,r.offset+r.length),l=ld(s),c=1;do{let d=0;for(;;){let f=l[c++];if(f===void 0||(d+=f,f<255))break}let u=0;for(;;){let f=l[c++];if(f===void 0||(u+=f,f<255))break}if(d===6){let f=new Ae(l);f.pos=8*c;let m=R(f),h=f.readBits(1);if(m===0&&h===1)return"key"}c+=u}while(c<l.length-1)}}return"delta"}case"hevc":{for(let r of $a(n,e)){let i=Yo(n[r.offset]);if(i<at.BLA_W_LP)return"delta";if(i<=at.RSV_IRAP_VCL23)return"key"}return"delta"}case"vp8":return(n[0]&1)===0?"key":"delta";case"vp9":{let r=new Ae(n);if(r.readBits(2)!==2)return null;let i=r.readBits(1);return(r.readBits(1)<<1)+i===3&&r.skipBits(1),r.readBits(1)?null:r.readBits(1)===0?"key":"delta"}case"av1":{let r=!1;for(let{type:i,data:o}of Sb(n))if(i===1){let s=new Ae(o);s.skipBits(4),r=!!s.readBits(1)}else if(i===3||i===6||i===7){if(r)return"key";let s=new Ae(o);return s.readBits(1)?null:s.readBits(2)===0?"key":"delta"}return null}case"prores":return"key";default:Ct(t),A(!1)}},sd;(function(t){t[t.STREAMINFO=0]="STREAMINFO",t[t.VORBIS_COMMENT=4]="VORBIS_COMMENT",t[t.PICTURE=6]="PICTURE"})(sd||(sd={}));var wm=[2,1,2,3,3,4,4,5],_b=t=>{if(t.length<7||t[0]!==11||t[1]!==119)return null;let e=new Ae(t);e.skipBits(16),e.skipBits(16);let n=e.readBits(2);if(n===3)return null;let r=e.readBits(6),i=e.readBits(5);if(i>8)return null;let o=e.readBits(3),s=e.readBits(3);(s&1)!==0&&s!==1&&e.skipBits(2),(s&4)!==0&&e.skipBits(2),s===2&&e.skipBits(2);let l=e.readBits(1),c=Math.floor(r/2);return{fscod:n,bsid:i,bsmod:o,acmod:s,lfeon:l,bitRateCode:c}},z4=[128,138,192,128,140,192,160,174,240,160,176,240,192,208,288,192,210,288,224,242,336,224,244,336,256,278,384,256,280,384,320,348,480,320,350,480,384,416,288*2,384,418,288*2,448,486,336*2,448,488,336*2,256*2,278*2,384*2,256*2,279*2,384*2,320*2,348*2,480*2,320*2,349*2,480*2,384*2,417*2,576*2,384*2,418*2,576*2,448*2,487*2,672*2,448*2,488*2,672*2,512*2,557*2,768*2,512*2,558*2,768*2,640*2,696*2,960*2,640*2,697*2,960*2,768*2,835*2,1152*2,768*2,836*2,1152*2,896*2,975*2,1344*2,896*2,976*2,1344*2,1024*2,1114*2,1536*2,1024*2,1115*2,1536*2,1152*2,1253*2,1728*2,1152*2,1254*2,1728*2,1280*2,1393*2,1920*2,1280*2,1394*2,1920*2];var L4=new Uint8Array([5,4,65,67,45,51]),U4=new Uint8Array([5,4,69,65,67,51]),qA=[1,2,3,6],Ib=t=>{if(t.length<6||t[0]!==11||t[1]!==119)return null;let e=new Ae(t);e.skipBits(16);let n=e.readBits(2);if(e.skipBits(3),n!==0&&n!==2)return null;let r=e.readBits(11),i=e.readBits(2),o=0,s;i===3?(o=e.readBits(2),s=3):s=e.readBits(2);let l=e.readBits(3),c=e.readBits(1),d=e.readBits(5);if(d<11||d>16)return null;let u=qA[s],p;return i<3?p=Wa[i]/1e3:p=hm[o]/1e3,{dataRate:Math.round((r+1)*p/(u*16)),substreams:[{fscod:i,fscod2:o,bsid:d,bsmod:0,acmod:l,lfeon:c,numDepSub:0,chanLoc:0}]}},Nb=t=>{if(t.length<2)return null;let e=new Ae(t),n=e.readBits(13),r=e.readBits(3),i=[];for(let o=0;o<=r&&!(Math.ceil(e.pos/8)+3>t.length);o++){let s=e.readBits(2),l=e.readBits(5);e.skipBits(1),e.skipBits(1);let c=e.readBits(3),d=e.readBits(3),u=e.readBits(1);e.skipBits(3);let p=e.readBits(4),f=0;p>0?f=e.readBits(9):e.skipBits(1),i.push({fscod:s,fscod2:null,bsid:l,bsmod:c,acmod:d,lfeon:u,numDepSub:p,chanLoc:f})}return i.length===0?null:{dataRate:n,substreams:i}},Pb=t=>{let e=t.substreams[0];return A(e),e.fscod<3?Wa[e.fscod]:e.fscod2!==null&&e.fscod2<3?hm[e.fscod2]:null},Mb=t=>{let e=t.substreams[0];A(e);let n=wm[e.acmod]+e.lfeon;if(e.numDepSub>0){let r=[2,2,1,1,2,2,2,1,1];for(let i=0;i<9;i++)e.chanLoc&1<<8-i&&(n+=r[i])}return n};var RA=1683496997,jA=18,GA=10;var mb=32,md=20,QA=8,KA=[0,8e3,16e3,32e3,0,0,11025,22050,44100,0,0,12e3,24e3,48e3,96e3,192e3],XA=[32e3,56e3,64e3,96e3,112e3,128e3,192e3,224e3,256e3,32e4,384e3,448e3,512e3,576e3,64e4,768e3,96e4,1024e3,1152e3,128e4,1344e3,1408e3,1411200,1472e3,1536e3,192e4,2048e3,3072e3,384e4,0,0,0],YA=[16,16,20,20,0,24,24,0],ad=[1,2,2,2,2,3,3,4,4,5,6,6,6,7,8,8],JA=[1,2,2,2,2,3,18,19,6,7,518,323,83,519,582,535],ZA=8,eS=44646,tS=[32e3,44100,48e3,0],nS=[8e3,16e3,32e3,64e3,128e3,22050,44100,88200,176400,352800,12e3,24e3,48e3,96e3,192e3,384e3],Ob=[512,1024,2048,4096],km=t=>{let e=rS(t),n=ye(t),r=e?Math.ceil(e.frameSize/4)*4:0,i=null;for(;r+4<=t.length&&n.getUint32(r)===RA;){let s=iS(t.subarray(r));if(!s)break;i??=s,r+=s.frameSize}if(e)return{frameSize:i?r:e.frameSize,sampleRate:e.sampleRate,numberOfChannels:e.numberOfChannels,sampleCount:e.sampleCount,channelLayout:e.channelLayout,pcmResolution:e.pcmResolution,bitRate:e.bitRate,core:e,hasExtensions:i!==null};if(!i?.asset)return null;let{asset:o}=i;return{frameSize:r,sampleRate:o.sampleRate,numberOfChannels:o.numberOfChannels,sampleCount:o.sampleCount,channelLayout:o.channelLayout,pcmResolution:o.pcmResolution,bitRate:0,core:null,hasExtensions:!0}},Bb=t=>{let e=km(t);return e?.core?e.hasExtensions?"dtsh":"dtsc":null},rS=t=>{if(t.length<jA||t[0]!==127||t[1]!==254||t[2]!==128||t[3]!==1)return null;let e=new Ae(t);if(e.skipBits(32),e.skipBits(1),e.readBits(5)!==mb-1)return null;let n=e.readBits(1),r=e.readBits(7)+1;if(r%QA!==0)return null;let i=e.readBits(14)+1;if(i<96)return null;let o=e.readBits(6);if(o>=ad.length)return null;let s=KA[e.readBits(4)];if(s===0)return null;let l=XA[e.readBits(5)];if(e.readBits(1)!==0)return null;e.skipBits(4),e.skipBits(5);let c=e.readBits(2);if(c===3)return null;e.skipBits(1),n&&e.skipBits(16),e.skipBits(7);let d=YA[e.readBits(3)];if(d===0)return null;let u=c!==0;return{frameSize:i,sampleRate:s,numberOfChannels:ad[o]+(u?1:0),sampleCount:r*mb,channelLayout:JA[o]|(u?ZA:0),amode:o,lfePresent:u,bitRate:l,pcmResolution:d}},iS=t=>{if(t.length<GA||t[0]!==100||t[1]!==88||t[2]!==32||t[3]!==37)return null;let e=new Ae(t);e.skipBits(32),e.skipBits(8);let n=e.readBits(2),r=e.readBits(1),i=8+4*r,o=16+4*r;e.skipBits(i);let s=e.readBits(o)+1,l={frameSize:s,asset:null};if(!e.readBits(1))return l;let c=tS[e.readBits(2)],d=512*(e.readBits(3)+1);e.readBits(1)&&e.skipBits(36);let u=e.readBits(3)+1,p=e.readBits(3)+1,f=[];for(let y=0;y<u;y++)f.push(e.readBits(n+1));for(let y of f)e.skipBits(8*Yc(y));if(e.readBits(1)){e.skipBits(2);let y=e.readBits(2)+1<<2,g=e.readBits(2)+1;e.skipBits(g*y)}for(let y=0;y<p;y++)e.skipBits(o);e.skipBits(9),e.skipBits(3),e.readBits(1)&&e.skipBits(4),e.readBits(1)&&e.skipBits(24),e.readBits(1)&&e.skipBits(8*(e.readBits(10)+1));let m=e.readBits(5)+1,h=nS[e.readBits(4)],v=e.readBits(8)+1,x=0;if(e.readBits(1)&&(v>2&&e.skipBits(1),v>6&&e.skipBits(1),e.readBits(1))){let y=e.readBits(2)+1<<2;x=e.readBits(y)}return c===0||e.getBitsLeft()<0?l:{frameSize:s,asset:{sampleRate:h,numberOfChannels:v,sampleCount:Math.round(d*h/c),channelLayout:x,pcmResolution:m}}},Fb=t=>{if(t.length<md)return null;let e=ye(t),n=e.getUint32(0);if(n===0)return null;let r=new Ae(t);r.seekToByte(13);let i=r.readBits(2);r.skipBits(5);let o=r.readBits(1),s=r.readBits(6);r.skipBits(14),r.skipBits(1),r.skipBits(3);let l=r.readBits(16),c=null;return l!==0?c=oS(l):s<ad.length&&(c=ad[s]+o),{sampleRate:n,maxBitrate:e.getUint32(4),avgBitrate:e.getUint32(8),pcmSampleDepth:t[12],sampleCount:Ob[i],channelLayout:l,numberOfChannels:c}},Db=t=>{let e=new Uint8Array(md),n=ye(e);n.setUint32(0,t.sampleRate),n.setUint32(4,t.bitRate),n.setUint32(8,t.bitRate),e[12]=t.pcmResolution;let r=t.core&&!t.hasExtensions?1:0,i=new Ae(e);return i.seekToByte(13),i.writeBits(2,Math.max(Ob.indexOf(t.sampleCount),0)),i.writeBits(5,r),i.writeBits(1,t.core?.lfePresent?1:0),i.writeBits(6,t.core?.amode??0),i.writeBits(14,t.core?t.core.frameSize-1:0),i.writeBits(1,0),i.writeBits(3,0),i.writeBits(16,t.channelLayout),i.writeBits(1,0),i.writeBits(1,0),i.writeBits(1,0),i.writeBits(5,0),e},oS=t=>Yc(t)+Yc(t&eS);var ln=["avc","hevc","vp9","av1","vp8","prores"],Je=["pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be","pcm-u8","pcm-s8","ulaw","alaw"],hd=["aac","opus","mp3","vorbis","flac","ac3","eac3","dts"],qi=[...hd,...Je],di=["webvtt"],Ha=[{maxMacroblocks:99,maxBitrate:64e3,maxDpbMbs:396,level:10},{maxMacroblocks:396,maxBitrate:192e3,maxDpbMbs:900,level:11},{maxMacroblocks:396,maxBitrate:384e3,maxDpbMbs:2376,level:12},{maxMacroblocks:396,maxBitrate:768e3,maxDpbMbs:2376,level:13},{maxMacroblocks:396,maxBitrate:2e6,maxDpbMbs:2376,level:20},{maxMacroblocks:792,maxBitrate:4e6,maxDpbMbs:4752,level:21},{maxMacroblocks:1620,maxBitrate:4e6,maxDpbMbs:8100,level:22},{maxMacroblocks:1620,maxBitrate:1e7,maxDpbMbs:8100,level:30},{maxMacroblocks:3600,maxBitrate:14e6,maxDpbMbs:18e3,level:31},{maxMacroblocks:5120,maxBitrate:2e7,maxDpbMbs:20480,level:32},{maxMacroblocks:8192,maxBitrate:2e7,maxDpbMbs:32768,level:40},{maxMacroblocks:8192,maxBitrate:5e7,maxDpbMbs:32768,level:41},{maxMacroblocks:8704,maxBitrate:5e7,maxDpbMbs:34816,level:42},{maxMacroblocks:22080,maxBitrate:135e6,maxDpbMbs:110400,level:50},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:51},{maxMacroblocks:36864,maxBitrate:24e7,maxDpbMbs:184320,level:52},{maxMacroblocks:139264,maxBitrate:24e7,maxDpbMbs:696320,level:60},{maxMacroblocks:139264,maxBitrate:48e7,maxDpbMbs:696320,level:61},{maxMacroblocks:139264,maxBitrate:8e8,maxDpbMbs:696320,level:62}],zb=[{maxPictureSize:36864,maxBitrate:128e3,tier:"L",level:30},{maxPictureSize:122880,maxBitrate:15e5,tier:"L",level:60},{maxPictureSize:245760,maxBitrate:3e6,tier:"L",level:63},{maxPictureSize:552960,maxBitrate:6e6,tier:"L",level:90},{maxPictureSize:983040,maxBitrate:1e7,tier:"L",level:93},{maxPictureSize:2228224,maxBitrate:12e6,tier:"L",level:120},{maxPictureSize:2228224,maxBitrate:3e7,tier:"H",level:120},{maxPictureSize:2228224,maxBitrate:2e7,tier:"L",level:123},{maxPictureSize:2228224,maxBitrate:5e7,tier:"H",level:123},{maxPictureSize:8912896,maxBitrate:25e6,tier:"L",level:150},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:150},{maxPictureSize:8912896,maxBitrate:4e7,tier:"L",level:153},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:153},{maxPictureSize:8912896,maxBitrate:6e7,tier:"L",level:156},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:156},{maxPictureSize:35651584,maxBitrate:6e7,tier:"L",level:180},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:180},{maxPictureSize:35651584,maxBitrate:12e7,tier:"L",level:183},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:183},{maxPictureSize:35651584,maxBitrate:24e7,tier:"L",level:186},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:186}],vr=[{maxPictureSize:36864,maxBitrate:2e5,level:10},{maxPictureSize:73728,maxBitrate:8e5,level:11},{maxPictureSize:122880,maxBitrate:18e5,level:20},{maxPictureSize:245760,maxBitrate:36e5,level:21},{maxPictureSize:552960,maxBitrate:72e5,level:30},{maxPictureSize:983040,maxBitrate:12e6,level:31},{maxPictureSize:2228224,maxBitrate:18e6,level:40},{maxPictureSize:2228224,maxBitrate:3e7,level:41},{maxPictureSize:8912896,maxBitrate:6e7,level:50},{maxPictureSize:8912896,maxBitrate:12e7,level:51},{maxPictureSize:8912896,maxBitrate:18e7,level:52},{maxPictureSize:35651584,maxBitrate:18e7,level:60},{maxPictureSize:35651584,maxBitrate:24e7,level:61},{maxPictureSize:35651584,maxBitrate:48e7,level:62}],Lb=[{maxPictureSize:147456,maxBitrate:15e5,tier:"M",level:0},{maxPictureSize:278784,maxBitrate:3e6,tier:"M",level:1},{maxPictureSize:665856,maxBitrate:6e6,tier:"M",level:4},{maxPictureSize:1065024,maxBitrate:1e7,tier:"M",level:5},{maxPictureSize:2359296,maxBitrate:12e6,tier:"M",level:8},{maxPictureSize:2359296,maxBitrate:3e7,tier:"H",level:8},{maxPictureSize:2359296,maxBitrate:2e7,tier:"M",level:9},{maxPictureSize:2359296,maxBitrate:5e7,tier:"H",level:9},{maxPictureSize:8912896,maxBitrate:3e7,tier:"M",level:12},{maxPictureSize:8912896,maxBitrate:1e8,tier:"H",level:12},{maxPictureSize:8912896,maxBitrate:4e7,tier:"M",level:13},{maxPictureSize:8912896,maxBitrate:16e7,tier:"H",level:13},{maxPictureSize:8912896,maxBitrate:6e7,tier:"M",level:14},{maxPictureSize:8912896,maxBitrate:24e7,tier:"H",level:14},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:15},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:15},{maxPictureSize:35651584,maxBitrate:6e7,tier:"M",level:16},{maxPictureSize:35651584,maxBitrate:24e7,tier:"H",level:16},{maxPictureSize:35651584,maxBitrate:1e8,tier:"M",level:17},{maxPictureSize:35651584,maxBitrate:48e7,tier:"H",level:17},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:18},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:18},{maxPictureSize:35651584,maxBitrate:16e7,tier:"M",level:19},{maxPictureSize:35651584,maxBitrate:8e8,tier:"H",level:19}],Ub=".01.01.01.01.00",Vb=".0.110.01.01.01.0",Hi=["ap4x","ap4h","apch","apcn","apcs","apco"],Ra=["dtsc","dtsh","dtsl","dtse"],sS=[{fourCc:"apco",bitrate:45e6,alpha:!1},{fourCc:"apcs",bitrate:102e6,alpha:!1},{fourCc:"apcn",bitrate:147e6,alpha:!1},{fourCc:"apch",bitrate:22e7,alpha:!1},{fourCc:"ap4h",bitrate:33e7,alpha:!0},{fourCc:"ap4x",bitrate:5e8,alpha:!0}],Wb=(t,e,n,r,i)=>{if(t==="avc"){let s=Math.ceil(e/16)*Math.ceil(n/16),l=Ha.find(f=>s<=f.maxMacroblocks&&r<=f.maxBitrate)??He(Ha),c=l?l.level:0,d="64".padStart(2,"0"),u="00",p=c.toString(16).padStart(2,"0");return`avc1.${d}${u}${p}`}else if(t==="hevc"){let c=e*n,d=zb.find(p=>c<=p.maxPictureSize&&r<=p.maxBitrate)??He(zb);return`hev1.1.6.${d.tier}${d.level}.B0`}else{if(t==="vp8")return"vp8";if(t==="vp9"){let s=e*n;return`vp09.00.${(vr.find(d=>s<=d.maxPictureSize&&r<=d.maxBitrate)??He(vr)).level.toString().padStart(2,"0")}.08`}else if(t==="av1"){let s=e*n,l=Lb.find(u=>s<=u.maxPictureSize&&r<=u.maxBitrate)??He(Lb);return`av01.0.${l.level.toString().padStart(2,"0")}${l.tier}.08`}else if(t==="prores"){let s=Math.pow(e*n/2073600,.95),l=sS.filter(u=>u.alpha===i),c=l[0].fourCc,d=1/0;for(let{fourCc:u,bitrate:p}of l){let f=Math.abs(p*s-r);f<d&&(d=f,c=u)}return c}else Ct(t)}throw new TypeError(`Unhandled codec '${String(t)}'.`)};var $b=t=>{let e=t.split("."),i=(1<<7)+1,o=Number(e[1]),s=e[2],l=Number(s.slice(0,-1)),c=(o<<5)+l,d=s.slice(-1)==="H"?1:0,u=Number(e[3]),p=u===8?0:1,f=u===12?1:0,m=e[4]?Number(e[4]):0,h=e[5]?Number(e[5][0]):1,v=e[5]?Number(e[5][1]):1,x=e[5]?Number(e[5][2]):0,y=(d<<7)+(p<<6)+(f<<5)+(m<<4)+(h<<3)+(v<<2)+x;return[i,c,y,0]},Hb=t=>{let{codec:e,codecDescription:n,colorSpace:r,avcCodecInfo:i,hevcCodecInfo:o,vp9CodecInfo:s,av1CodecInfo:l,proresFormat:c}=t;if(e==="avc"){if(A(t.avcType!==null),i){let d=new Uint8Array([i.avcProfileIndication,i.profileCompatibility,i.avcLevelIndication]);return`avc${t.avcType}.${ai(d)}`}if(!n||n.byteLength<4)throw new TypeError("AVC decoder description is not provided or is not at least 4 bytes long.");return`avc${t.avcType}.${ai(n.subarray(1,4))}`}else if(e==="hevc"){let d,u,p,f,m,h;if(o)d=o.generalProfileSpace,u=o.generalProfileIdc,p=im(o.generalProfileCompatibilityFlags),f=o.generalTierFlag,m=o.generalLevelIdc,h=[...o.generalConstraintIndicatorFlags];else{if(!n||n.byteLength<23)throw new TypeError("HEVC decoder description is not provided or is not at least 23 bytes long.");let x=ye(n),y=x.getUint8(1);d=y>>6&3,u=y&31,p=im(x.getUint32(2)),f=y>>5&1,m=x.getUint8(12),h=[];for(let g=0;g<6;g++)h.push(x.getUint8(6+g))}let v="hev1.";for(v+=["","A","B","C"][d]+u,v+=".",v+=p.toString(16).toUpperCase(),v+=".",v+=f===0?"L":"H",v+=m;h.length>0&&h[h.length-1]===0;)h.pop();return h.length>0&&(v+=".",v+=h.map(x=>x.toString(16).toUpperCase()).join(".")),v}else{if(e==="vp8")return"vp8";if(e==="vp9"){if(!s){let g=t.width*t.height,b=He(vr).level;for(let w of vr)if(g<=w.maxPictureSize){b=w.level;break}return`vp09.00.${b.toString().padStart(2,"0")}.08`}let d=s.profile.toString().padStart(2,"0"),u=s.level.toString().padStart(2,"0"),p=s.bitDepth.toString().padStart(2,"0"),f=s.chromaSubsampling.toString().padStart(2,"0"),m=s.colourPrimaries.toString().padStart(2,"0"),h=s.transferCharacteristics.toString().padStart(2,"0"),v=s.matrixCoefficients.toString().padStart(2,"0"),x=s.videoFullRangeFlag.toString().padStart(2,"0"),y=`vp09.${d}.${u}.${p}.${f}`;return y+=`.${m}.${h}.${v}.${x}`,y.endsWith(Ub)&&(y=y.slice(0,-Ub.length)),y}else if(e==="av1"){if(!l){let w=t.width*t.height,k=He(vr).level;for(let S of vr)if(w<=S.maxPictureSize){k=S.level;break}return`av01.0.${k.toString().padStart(2,"0")}M.08`}let d=l.profile,u=l.level.toString().padStart(2,"0"),p=l.tier?"H":"M",f=l.bitDepth.toString().padStart(2,"0"),m=l.monochrome?"1":"0",h=100*l.chromaSubsamplingX+10*l.chromaSubsamplingY+1*(l.chromaSubsamplingX&&l.chromaSubsamplingY?l.chromaSamplePosition:0),v=r?.primaries?mr[r.primaries]:1,x=r?.transfer?hr[r.transfer]:1,y=r?.matrix?gr[r.matrix]:1,g=r?.fullRange?1:0,b=`av01.${d}.${u}${p}.${f}`;return b+=`.${m}.${h.toString().padStart(3,"0")}`,b+=`.${v.toString().padStart(2,"0")}`,b+=`.${x.toString().padStart(2,"0")}`,b+=`.${y.toString().padStart(2,"0")}`,b+=`.${g}`,b.endsWith(Vb)&&(b=b.slice(0,-Vb.length)),b}else{if(e==="prores")return c??"apch";e!==null&&Ct(e)}}throw new TypeError(`Unhandled codec '${e}'.`)},qb=t=>{switch(t.codec){case"avc":{let e=t.avcCodecInfo?.sequenceParameterSets[0];if(!e&&t.codecDescription&&(e=pd(t.codecDescription)?.sequenceParameterSets[0]),e){let n=Zo(e);if(n)return{primaries:ii[n.colourPrimaries],transfer:oi[n.transferCharacteristics],matrix:si[n.matrixCoefficients],fullRange:!!n.fullRangeFlag}}}break;case"hevc":{let e=t.hevcCodecInfo?.arrays.find(n=>n.nalUnitType===at.SPS_NUT)?.nalUnits[0];if(!e&&t.codecDescription&&(e=xb(t.codecDescription)?.arrays.find(n=>n.nalUnitType===at.SPS_NUT)?.nalUnits[0]),e){let n=bm(e);if(n)return{primaries:ii[n.colourPrimaries],transfer:oi[n.transferCharacteristics],matrix:si[n.matrixCoefficients],fullRange:!!n.fullRangeFlag}}}break;case"vp8":break;case"vp9":if(t.vp9CodecInfo)return{primaries:ii[t.vp9CodecInfo.colourPrimaries],transfer:oi[t.vp9CodecInfo.transferCharacteristics],matrix:si[t.vp9CodecInfo.matrixCoefficients],fullRange:!!t.vp9CodecInfo.videoFullRangeFlag};break;case"av1":if(t.av1CodecInfo)return{primaries:ii[t.av1CodecInfo.colourPrimaries],transfer:oi[t.av1CodecInfo.transferCharacteristics],matrix:si[t.av1CodecInfo.matrixCoefficients],fullRange:!!t.av1CodecInfo.videoFullRangeFlag};break;case"prores":if(t.proresCodecInfo)return{primaries:ii[t.proresCodecInfo.colourPrimaries],transfer:oi[t.proresCodecInfo.transferCharacteristics],matrix:si[t.proresCodecInfo.matrixCoefficients],fullRange:t.proresCodecInfo.fullRange};break}return{primaries:void 0,transfer:void 0,matrix:void 0,fullRange:void 0}};var Rb=t=>{let{codec:e,codecDescription:n,aacCodecInfo:r,dtsFormat:i}=t;if(e==="aac"){if(!r)throw new TypeError("AAC codec info must be provided.");if(r.isMpeg2)return"mp4a.67";{let o;return r.objectType!==null?o=r.objectType:o=od(n).objectType,`mp4a.40.${o}`}}else{if(e==="mp3")return"mp3";if(e==="opus")return"opus";if(e==="vorbis")return"vorbis";if(e==="flac")return"flac";if(e==="ac3")return"ac-3";if(e==="eac3")return"ec-3";if(e==="dts")return i??"dtsc";if(e&&Je.includes(e))return e}throw new TypeError(`Unhandled codec '${e}'.`)};var jb=48e3,Gb=/^pcm-([usf])(\d+)(be)?$/,jt=t=>{if(A(Je.includes(t)),t==="ulaw")return{dataType:"ulaw",sampleSize:1,littleEndian:!0,silentValue:255};if(t==="alaw")return{dataType:"alaw",sampleSize:1,littleEndian:!0,silentValue:213};let e=Gb.exec(t);A(e);let n;e[1]==="u"?n="unsigned":e[1]==="s"?n="signed":n="float";let r=Number(e[2])/8,i=e[3]!=="be",o=t==="pcm-u8"?2**7:0;return{dataType:n,sampleSize:r,littleEndian:i,silentValue:o}},gd=t=>t.startsWith("avc1")||t.startsWith("avc3")?"avc":t.startsWith("hev1")||t.startsWith("hvc1")?"hevc":t==="vp8"?"vp8":t.startsWith("vp09")?"vp9":t.startsWith("av01")?"av1":Hi.includes(t)?"prores":t==="mp3"||t==="mp4a.69"||t==="mp4a.6B"||t==="mp4a.6b"||t==="mp4a.40.34"?"mp3":t.startsWith("mp4a.40.")||t==="mp4a.67"?"aac":t==="opus"||t==="Opus"?"opus":t==="vorbis"?"vorbis":t==="flac"?"flac":t==="ac-3"||t==="ac3"?"ac3":t==="ec-3"||t==="eac3"?"eac3":Ra.includes(t)?"dts":t==="ulaw"?"ulaw":t==="alaw"?"alaw":Gb.test(t)?t:t==="webvtt"?"webvtt":null,Qb=t=>t==="avc"?{avc:{format:"avc"}}:t==="hevc"?{hevc:{format:"hevc"}}:{};var aS=["avc1","avc3","hev1","hvc1","vp8","vp09","av01",...Hi],lS=/^(avc1|avc3)\.[0-9a-fA-F]{6}$/,cS=/^(hev1|hvc1)\.(?:[ABC]?\d+)\.[0-9a-fA-F]{1,8}\.[LH]\d+(?:\.[0-9a-fA-F]{1,2}){0,6}$/,dS=/^vp09(?:\.\d{2}){3}(?:(?:\.\d{2}){5})?$/,uS=/^av01\.\d\.\d{2}[MH]\.\d{2}(?:\.\d\.\d{3}\.\d{2}\.\d{2}\.\d{2}\.\d)?$/,yd=(t,e)=>{if(!t)throw new TypeError("Video chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Video chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Video chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Video chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Video chunk metadata decoder configuration must specify a codec string.");if(!aS.some(n=>t.decoderConfig.codec.startsWith(n)))throw new TypeError("Video chunk metadata decoder configuration codec string must be a valid video codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.codedWidth)||t.decoderConfig.codedWidth<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedWidth (positive integer).");if(!Number.isInteger(t.decoderConfig.codedHeight)||t.decoderConfig.codedHeight<=0)throw new TypeError("Video chunk metadata decoder configuration must specify a valid codedHeight (positive integer).");if(t.decoderConfig.displayAspectWidth!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectWidth)||t.decoderConfig.displayAspectWidth<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectWidth, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectHeight!==void 0&&(!Number.isInteger(t.decoderConfig.displayAspectHeight)||t.decoderConfig.displayAspectHeight<=0))throw new TypeError("Video chunk metadata decoder configuration displayAspectHeight, when defined, must be a positive integer.");if(t.decoderConfig.displayAspectWidth!==void 0!=(t.decoderConfig.displayAspectHeight!==void 0))throw new TypeError("Video chunk metadata decoder configuration must specify both displayAspectWidth and displayAspectHeight, or neither.");if(t.decoderConfig.description!==void 0&&!Ko(t.decoderConfig.description))throw new TypeError("Video chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.colorSpace!==void 0){let{colorSpace:n}=t.decoderConfig;if(typeof n!="object")throw new TypeError("Video chunk metadata decoder configuration colorSpace, when provided, must be an object.");let r=Object.keys(mr);if(n.primaries!=null&&!r.includes(n.primaries))throw new TypeError(`Video chunk metadata decoder configuration colorSpace primaries, when defined, must be one of ${r.join(", ")}.`);let i=Object.keys(hr);if(n.transfer!=null&&!i.includes(n.transfer))throw new TypeError(`Video chunk metadata decoder configuration colorSpace transfer, when defined, must be one of ${i.join(", ")}.`);let o=Object.keys(gr);if(n.matrix!=null&&!o.includes(n.matrix))throw new TypeError(`Video chunk metadata decoder configuration colorSpace matrix, when defined, must be one of ${o.join(", ")}.`);if(n.fullRange!=null&&typeof n.fullRange!="boolean")throw new TypeError("Video chunk metadata decoder configuration colorSpace fullRange, when defined, must be a boolean.")}if(t.decoderConfig.codec.startsWith("avc1")||t.decoderConfig.codec.startsWith("avc3")){if(!lS.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for AVC must be a valid AVC codec string as specified in Section 3.4 of RFC 6381.")}else if(t.decoderConfig.codec.startsWith("hev1")||t.decoderConfig.codec.startsWith("hvc1")){if(!cS.test(t.decoderConfig.codec))throw new TypeError("Video chunk metadata decoder configuration codec string for HEVC must be a valid HEVC codec string as specified in Section E.3 of ISO 14496-15.")}else if(t.decoderConfig.codec.startsWith("vp8")){if(t.decoderConfig.codec!=="vp8")throw new TypeError('Video chunk metadata decoder configuration codec string for VP8 must be "vp8".')}else if(t.decoderConfig.codec.startsWith("vp09")){if(!dS.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for VP9 must be a valid VP9 codec string as specified in Section "Codecs Parameter String" of https://www.webmproject.org/vp9/mp4/.')}else if(t.decoderConfig.codec.startsWith("av01")){if(!uS.test(t.decoderConfig.codec))throw new TypeError('Video chunk metadata decoder configuration codec string for AV1 must be a valid AV1 codec string as specified in Section "Codecs Parameter String" of https://aomediacodec.github.io/av1-isobmff/.')}else if(Hi.some(n=>t.decoderConfig.codec.startsWith(n))&&!Hi.some(n=>t.decoderConfig.codec===n))throw new TypeError(`Video chunk metadata decoder configuration codec string for ProRes must be one of the valid ProRes four-character codes: ${Hi.join(", ")}.`);if(e!==null&&gd(t.decoderConfig.codec)!==e)throw new TypeError(`Video chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},pS=["mp4a","mp3","opus","vorbis","flac","ulaw","alaw","pcm","ac-3","ec-3","dts"],vd=(t,e)=>{if(!t)throw new TypeError("Audio chunk metadata must be provided.");if(typeof t!="object")throw new TypeError("Audio chunk metadata must be an object.");if(!t.decoderConfig)throw new TypeError("Audio chunk metadata must include a decoder configuration.");if(typeof t.decoderConfig!="object")throw new TypeError("Audio chunk metadata decoder configuration must be an object.");if(typeof t.decoderConfig.codec!="string")throw new TypeError("Audio chunk metadata decoder configuration must specify a codec string.");if(!pS.some(n=>t.decoderConfig.codec.startsWith(n)))throw new TypeError("Audio chunk metadata decoder configuration codec string must be a valid audio codec string as specified in the Mediabunny Codec Registry.");if(!Number.isInteger(t.decoderConfig.sampleRate)||t.decoderConfig.sampleRate<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid sampleRate (positive integer).");if(!Number.isInteger(t.decoderConfig.numberOfChannels)||t.decoderConfig.numberOfChannels<=0)throw new TypeError("Audio chunk metadata decoder configuration must specify a valid numberOfChannels (positive integer).");if(t.decoderConfig.description!==void 0&&!Ko(t.decoderConfig.description))throw new TypeError("Audio chunk metadata decoder configuration description, when defined, must be an ArrayBuffer or an ArrayBuffer view.");if(t.decoderConfig.codec.startsWith("mp4a")&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b"){if(!["mp4a.40.2","mp4a.40.02","mp4a.40.5","mp4a.40.05","mp4a.40.29","mp4a.67"].includes(t.decoderConfig.codec))throw new TypeError("Audio chunk metadata decoder configuration codec string for AAC must be a valid AAC codec string as specified in https://www.w3.org/TR/webcodecs-aac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("mp3")||t.decoderConfig.codec.startsWith("mp4a")){if(t.decoderConfig.codec!=="mp3"&&t.decoderConfig.codec!=="mp4a.69"&&t.decoderConfig.codec!=="mp4a.6B"&&t.decoderConfig.codec!=="mp4a.6b")throw new TypeError('Audio chunk metadata decoder configuration codec string for MP3 must be "mp3", "mp4a.69" or "mp4a.6B".')}else if(t.decoderConfig.codec.startsWith("opus")){if(t.decoderConfig.codec!=="opus")throw new TypeError('Audio chunk metadata decoder configuration codec string for Opus must be "opus".');if(t.decoderConfig.description&&t.decoderConfig.description.byteLength<18)throw new TypeError("Audio chunk metadata decoder configuration description, when specified, is expected to be an Identification Header as specified in Section 5.1 of RFC 7845.")}else if(t.decoderConfig.codec.startsWith("vorbis")){if(t.decoderConfig.codec!=="vorbis")throw new TypeError('Audio chunk metadata decoder configuration codec string for Vorbis must be "vorbis".');if(!t.decoderConfig.description)throw new TypeError("Audio chunk metadata decoder configuration for Vorbis must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-vorbis-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("flac")){if(t.decoderConfig.codec!=="flac")throw new TypeError('Audio chunk metadata decoder configuration codec string for FLAC must be "flac".');if(!t.decoderConfig.description||t.decoderConfig.description.byteLength<42)throw new TypeError("Audio chunk metadata decoder configuration for FLAC must include a description, which is expected to adhere to the format described in https://www.w3.org/TR/webcodecs-flac-codec-registration/.")}else if(t.decoderConfig.codec.startsWith("ac-3")||t.decoderConfig.codec.startsWith("ac3")){if(t.decoderConfig.codec!=="ac-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for AC-3 must be "ac-3".')}else if(t.decoderConfig.codec.startsWith("ec-3")||t.decoderConfig.codec.startsWith("eac3")){if(t.decoderConfig.codec!=="ec-3")throw new TypeError('Audio chunk metadata decoder configuration codec string for EC-3 must be "ec-3".')}else if(t.decoderConfig.codec.startsWith("dts")){if(!Ra.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for DTS must be one of the following four-character codes: ${Ra.join(", ")}.`)}else if((t.decoderConfig.codec.startsWith("pcm")||t.decoderConfig.codec.startsWith("ulaw")||t.decoderConfig.codec.startsWith("alaw"))&&!Je.includes(t.decoderConfig.codec))throw new TypeError(`Audio chunk metadata decoder configuration codec string for PCM must be one of the supported PCM codecs (${Je.join(", ")}).`);if(e!==null&&gd(t.decoderConfig.codec)!==e)throw new TypeError(`Audio chunk metadata decoder configuration codec string '${t.decoderConfig.codec}' does not fit to the track codec '${e}'.`)},Kb=t=>{if(!t)throw new TypeError("Subtitle metadata must be provided.");if(typeof t!="object")throw new TypeError("Subtitle metadata must be an object.");if(!t.config)throw new TypeError("Subtitle metadata must include a config object.");if(typeof t.config!="object")throw new TypeError("Subtitle metadata config must be an object.");if(typeof t.config.description!="string")throw new TypeError("Subtitle metadata config description must be a string.")};var bd=class{constructor(e){this.input=e}dispose(){}};var ja=new Uint8Array(0),je=class t{constructor(e,n,r,i,o=-1,s,l){if(this.data=e,this.type=n,this.timestamp=r,this.duration=i,this.sequenceNumber=o,e===ja&&s===void 0)throw new Error("Internal error: byteLength must be explicitly provided when constructing metadata-only packets.");if(s===void 0&&(s=e.byteLength),!(e instanceof Uint8Array))throw new TypeError("data must be a Uint8Array.");if(n!=="key"&&n!=="delta")throw new TypeError('type must be either "key" or "delta".');if(!Number.isFinite(r))throw new TypeError("timestamp must be a number.");if(!Number.isFinite(i)||i<0)throw new TypeError("duration must be a non-negative number.");if(!Number.isFinite(o))throw new TypeError("sequenceNumber must be a number.");if(!Number.isInteger(s)||s<0)throw new TypeError("byteLength must be a non-negative integer.");if(l!==void 0&&(typeof l!="object"||!l))throw new TypeError("sideData, when provided, must be an object.");if(l?.alpha!==void 0&&!(l.alpha instanceof Uint8Array))throw new TypeError("sideData.alpha, when provided, must be a Uint8Array.");if(l?.alphaByteLength!==void 0&&(!Number.isInteger(l.alphaByteLength)||l.alphaByteLength<0))throw new TypeError("sideData.alphaByteLength, when provided, must be a non-negative integer.");this.byteLength=s,this.sideData=l??{},this.sideData.alpha&&this.sideData.alphaByteLength===void 0&&(this.sideData.alphaByteLength=this.sideData.alpha.byteLength)}get isMetadataOnly(){return this.data===ja}get microsecondTimestamp(){return Math.trunc(Gn*this.timestamp)}get microsecondDuration(){return Math.trunc(Gn*this.duration)}toEncodedVideoChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}alphaToEncodedVideoChunk(e=this.type){if(!this.sideData.alpha)throw new TypeError("This packet does not contain alpha side data.");if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to a video chunk.");if(typeof EncodedVideoChunk>"u")throw new Error("EncodedVideoChunk is not available in this environment.");return new EncodedVideoChunk({data:this.sideData.alpha,type:e,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}toEncodedAudioChunk(){if(this.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be converted to an audio chunk.");if(typeof EncodedAudioChunk>"u")throw new Error("EncodedAudioChunk is not available in this environment.");return new EncodedAudioChunk({data:this.data,type:this.type,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration})}static fromEncodedChunk(e,n){if(!(e instanceof EncodedVideoChunk||e instanceof EncodedAudioChunk))throw new TypeError("chunk must be an EncodedVideoChunk or EncodedAudioChunk.");let r=new Uint8Array(e.byteLength);return e.copyTo(r),new t(r,e.type,e.timestamp/1e6,(e.duration??0)/1e6,void 0,void 0,n)}clone(e){if(e!==void 0&&(typeof e!="object"||e===null))throw new TypeError("options, when provided, must be an object.");if(e?.data!==void 0&&!(e.data instanceof Uint8Array))throw new TypeError("options.data, when provided, must be a Uint8Array.");if(e?.type!==void 0&&e.type!=="key"&&e.type!=="delta")throw new TypeError('options.type, when provided, must be either "key" or "delta".');if(e?.timestamp!==void 0&&!Number.isFinite(e.timestamp))throw new TypeError("options.timestamp, when provided, must be a number.");if(e?.duration!==void 0&&!Number.isFinite(e.duration))throw new TypeError("options.duration, when provided, must be a number.");if(e?.sequenceNumber!==void 0&&!Number.isFinite(e.sequenceNumber))throw new TypeError("options.sequenceNumber, when provided, must be a number.");if(e?.sideData!==void 0&&(typeof e.sideData!="object"||e.sideData===null))throw new TypeError("options.sideData, when provided, must be an object.");return new t(e?.data??this.data,e?.type??this.type,e?.timestamp??this.timestamp,e?.duration??this.duration,e?.sequenceNumber??this.sequenceNumber,this.byteLength,e?.sideData??this.sideData)}};var xd=t=>{let n=(t.hasVideo?"video/":t.hasAudio?"audio/":"application/")+(t.isQuickTime?"quicktime":"mp4");if(t.codecStrings.length>0){let r=[...new Set(t.codecStrings)];n+=`; codecs="${r.join(", ")}"`}return n},Xb=t=>{let e=ye(t),n=0,r=e.getUint8(n);n+=1,n+=3;let i=ai(t.subarray(n,n+16));n+=16;let o=null;if(r>0){let l=e.getUint32(n);if(n+=4,l>0){o=[];for(let c=0;c<l;c++)o.push(ai(t.subarray(n,n+16))),n+=16}}let s=e.getUint32(n);return n+=4,{systemId:i,keyIds:o,data:t.slice(n,n+s)}},Yb=(t,e)=>t.systemId===e.systemId&&rb(t.data,e.data);var Cn=8,br=16,xr=t=>{let e=q(t),n=zt(t,4),r=8;e===1&&(e=xt(t),r=16);let o=e-r;return o<0?null:{name:n,totalSize:e,headerSize:r,contentSize:o}},ui=t=>wr(t)/65536,wd=t=>wr(t)/1073741824,kd=t=>{let e=0;for(let n=0;n<4;n++){e<<=7;let r=pe(t);if(e|=r&127,(r&128)===0)break}return e},_n=t=>{let e=rt(t);return t.skip(2),e=Math.min(e,t.remainingLength),ri.decode(Ce(t,e))},Jb=t=>{let e=xr(t);if(!e||e.name!=="data"||t.remainingLength<8)return null;let n=q(t);t.skip(4);let r=Ce(t,e.contentSize-8);switch(n){case 1:return ri.decode(r);case 2:return new nm("utf-16be").decode(r);case 13:return new Tn(r,"image/jpeg");case 14:return new Tn(r,"image/png");case 27:return new Tn(r,"image/bmp");default:return r}};var Am=16,kr=new Uint32Array(256),ts=new Uint32Array(256),ns=new Uint32Array(256),rs=new Uint32Array(256),is=new Uint32Array(256),pt=new Uint32Array(256),Zb=new Uint32Array(10),e1=!1,fS=()=>{let t=new Uint8Array(256),e=new Uint8Array(256),n=new Uint8Array(256);for(let o=0,s=1;o<256;o++)n[o]=s,e[s]=o,s=s^s<<1^(s&128?283:0);let r=(o,s)=>o&&s?n[(e[o]+e[s])%255]:0;t[0]=99;for(let o=1;o<256;o++){let s=n[255-e[o]],l=s^s<<1^s<<2^s<<3^s<<4;l=l>>>8^l&255^99,t[o]=l}for(let o=0;o<256;o++){let s=t[o],l=t.indexOf(o);kr[o]=s<<24|s<<16|s<<8|s,pt[o]=l<<24|l<<16|l<<8|l;let c=r(l,14),d=r(l,9),u=r(l,13),p=r(l,11),f=c<<24|d<<16|u<<8|p;ts[o]=f,ns[o]=f>>>8|f<<24,rs[o]=f>>>16|f<<16,is[o]=f>>>24|f<<8}let i=1;for(let o=0;o<10;o++)Zb[o]=i<<24,i=i<<1^(i&128?283:0);e1=!0},Ad=class{constructor(){this.roundkey=new Uint32Array(44),this.iv=new Uint32Array(Am/Uint32Array.BYTES_PER_ELEMENT),this.in=new Uint8Array(Am),this.out=new Uint8Array(Am),this.inView=new DataView(this.in.buffer),this.outView=new DataView(this.out.buffer)}init({key:e,iv:n}){A(e.byteLength===16),A(n.byteLength===16),e1||fS();let r=new DataView(e.buffer,e.byteOffset,e.byteLength),i=new DataView(n.buffer,n.byteOffset,n.byteLength);this.roundkey[0]=r.getUint32(0,!1),this.roundkey[1]=r.getUint32(4,!1),this.roundkey[2]=r.getUint32(8,!1),this.roundkey[3]=r.getUint32(12,!1),this.iv[0]=i.getUint32(0,!1),this.iv[1]=i.getUint32(4,!1),this.iv[2]=i.getUint32(8,!1),this.iv[3]=i.getUint32(12,!1);for(let o=4;o<44;o+=4){let s=this.roundkey[o-1];this.roundkey[o]=this.roundkey[o-4]^kr[s>>>16&255]&4278190080^kr[s>>>8&255]&16711680^kr[s>>>0&255]&65280^kr[s>>>24&255]&255^Zb[o/4-1],this.roundkey[o+1]=this.roundkey[o-3]^this.roundkey[o],this.roundkey[o+2]=this.roundkey[o-2]^this.roundkey[o+1],this.roundkey[o+3]=this.roundkey[o-1]^this.roundkey[o+2]}for(let o=0,s=40;o<s;o+=4,s-=4)for(let l=0;l<4;l++){let c=this.roundkey[o+l];this.roundkey[o+l]=this.roundkey[s+l],this.roundkey[s+l]=c}for(let o=4;o<40;o+=4)for(let s=0;s<4;s++){let l=this.roundkey[o+s];this.roundkey[o+s]=ts[kr[l>>>24&255]&255]^ns[kr[l>>>16&255]&255]^rs[kr[l>>>8&255]&255]^is[kr[l>>>0&255]&255]}}decrypt(){let e=this.inView.getUint32(0,!1)^this.roundkey[0],n=this.inView.getUint32(4,!1)^this.roundkey[1],r=this.inView.getUint32(8,!1)^this.roundkey[2],i=this.inView.getUint32(12,!1)^this.roundkey[3],o=this.inView.getUint32(0,!1),s=this.inView.getUint32(4,!1),l=this.inView.getUint32(8,!1),c=this.inView.getUint32(12,!1),d,u,p,f;for(let y=1;y<10;y++){let g=y*4;d=ts[e>>>24]^ns[i>>>16&255]^rs[r>>>8&255]^is[n&255]^this.roundkey[g],u=ts[n>>>24]^ns[e>>>16&255]^rs[i>>>8&255]^is[r&255]^this.roundkey[g+1],p=ts[r>>>24]^ns[n>>>16&255]^rs[e>>>8&255]^is[i&255]^this.roundkey[g+2],f=ts[i>>>24]^ns[r>>>16&255]^rs[n>>>8&255]^is[e&255]^this.roundkey[g+3],e=d,n=u,r=p,i=f}let m=pt[e>>>24&255]&4278190080^pt[i>>>16&255]&16711680^pt[r>>>8&255]&65280^pt[n>>>0&255]&255^this.roundkey[40],h=pt[n>>>24&255]&4278190080^pt[e>>>16&255]&16711680^pt[i>>>8&255]&65280^pt[r>>>0&255]&255^this.roundkey[41],v=pt[r>>>24&255]&4278190080^pt[n>>>16&255]&16711680^pt[e>>>8&255]&65280^pt[i>>>0&255]&255^this.roundkey[42],x=pt[i>>>24&255]&4278190080^pt[r>>>16&255]&16711680^pt[n>>>8&255]&65280^pt[e>>>0&255]&255^this.roundkey[43];this.outView.setUint32(0,m^this.iv[0],!1),this.outView.setUint32(4,h^this.iv[1],!1),this.outView.setUint32(8,v^this.iv[2],!1),this.outView.setUint32(12,x^this.iv[3],!1),this.iv[0]=o,this.iv[1]=s,this.iv[2]=l,this.iv[3]=c}};var Sd=class t extends bd{constructor(e){super(e),this.moovSlice=null,this.currentTrack=null,this.tracks=[],this.metadataPromise=null,this.movieTimescale=-1,this.movieDurationInTimescale=-1,this.movieMatrix=Qo,this.isQuickTime=!1,this.metadataTags={},this.currentMetadataKeys=null,this.isFragmented=!1,this.fragmentTrackDefaults=[],this.psshBoxes=[],this.currentFragment=null,this.lastReadFragment=null,this.decryptionKeyCache=new Map,this.reader=e._reader}async getTrackBackings(){return await this.readMetadata(),this.tracks.map(e=>e.trackBacking)}async getMimeType(){await this.readMetadata();let e=await this.getTrackBackings(),n=await Promise.all(e.map(r=>r.getDecoderConfig().then(i=>i?.codec??null)));return xd({isQuickTime:this.isQuickTime,hasVideo:this.tracks.some(r=>r.info?.type==="video"),hasAudio:this.tracks.some(r=>r.info?.type==="audio"),codecStrings:n.filter(Boolean)})}async getMetadataTags(){return await this.readMetadata(),this.metadataTags}readMetadata(){return this.metadataPromise??=(async()=>{let e=0,n=!1,r=!1;for(;;){let i=this.reader.requestSliceRange(e,Cn,br);if(le(i)&&(i=await i),!i)break;let o=e,s=xr(i);if(!s)break;if(s.name==="ftyp"||s.name==="styp"){let l=zt(i,4);this.isQuickTime=l==="qt  "}else if(s.name==="moov"){let l=this.reader.requestSlice(i.filePos,s.contentSize);if(le(l)&&(l=await l),!l)break;this.moovSlice=l,this.readContiguousBoxes(this.moovSlice);for(let c of this.tracks){let d=c.editListPreviousSegmentDurations/this.movieTimescale;c.editListOffset-=Math.round(d*c.timescale)}n=this.isFragmented&&this.reader.fileSize!==null&&this.reader.fileSize>o+s.totalSize,r=!0;break}else if(s.name==="moof"){if(!this.input._initInput)throw new Error('"moof" box encountered with no "moov" box present; this file is likely a Segment as described in ISO/IEC 14496-12 Section 8.16. A separate init file that contains a "moov" box is required to read this file, please provide it using InputOptions.initInput.');await this.copyMetadataFromInitInput(this.input._initInput),n=!1,r=!0;break}e=o+s.totalSize}if(!r&&this.input._initInput&&await this.copyMetadataFromInitInput(this.input._initInput),n){A(this.reader.fileSize!==null);let i=this.reader.requestSlice(this.reader.fileSize-4,4);le(i)&&(i=await i),A(i);let o=q(i),s=this.reader.fileSize-o;if(s>=0&&s<=this.reader.fileSize-br){let l=this.reader.requestSliceRange(s,Cn,br);if(le(l)&&(l=await l),l){let c=xr(l);if(c&&c.name==="mfra"){let d=this.reader.requestSlice(l.filePos,c.contentSize);le(d)&&(d=await d),d&&this.readContiguousBoxes(d)}}}}})()}async copyMetadataFromInitInput(e){let n=await e._getDemuxer();if(n.constructor!==t)throw new Error("Init input must match the input's format.");await n.readMetadata(),this.movieTimescale=n.movieTimescale,this.movieDurationInTimescale=n.movieDurationInTimescale,this.movieMatrix=n.movieMatrix,this.metadataTags=n.metadataTags,this.isFragmented=!0,this.fragmentTrackDefaults=n.fragmentTrackDefaults,this.psshBoxes=n.psshBoxes;for(let r of n.tracks){let i={id:r.id,demuxer:this,trackBacking:null,disposition:r.disposition,timescale:r.timescale,durationInMediaTimescale:r.durationInMediaTimescale,durationInMovieTimescale:r.durationInMovieTimescale,matrix:r.matrix,internalCodecId:r.internalCodecId,name:r.name,languageCode:r.languageCode,sampleTableByteOffset:null,sampleTable:null,fragmentLookupTable:[],currentFragmentState:null,fragmentPositionCache:[],editListPreviousSegmentDurations:r.editListPreviousSegmentDurations,editListOffset:r.editListOffset,encryptionInfo:r.encryptionInfo,encryptionAuxInfo:null,frmaCodecString:null,maxBitrate:r.maxBitrate,avgBitrate:r.avgBitrate,info:r.info};if(r.trackBacking){if(A(i.info),i.info.type==="video"&&i.info.width!==-1){let o=i;i.trackBacking=new Td(o),this.tracks.push(i)}else if(i.info.type==="audio"&&i.info.numberOfChannels!==-1){let o=i;i.trackBacking=new Cd(o),this.tracks.push(i)}}}}getSampleTableForTrack(e){if(e.sampleTable)return e.sampleTable;let n={sampleTimingEntries:[],sampleCompositionTimeOffsets:[],sampleSizes:[],keySampleIndices:null,chunkOffsets:[],sampleToChunk:[],presentationTimestamps:null,presentationTimestampIndexMap:null};if(e.sampleTable=n,e.sampleTableByteOffset===null)return n;A(this.moovSlice);let r=this.moovSlice.slice(e.sampleTableByteOffset);if(this.currentTrack=e,this.traverseBox(r),this.currentTrack=null,e.info?.type==="audio"&&e.info.codec&&Je.includes(e.info.codec)&&n.sampleCompositionTimeOffsets.length===0){A(e.info?.type==="audio");let o=jt(e.info.codec),s=[],l=[];for(let c=0;c<n.sampleToChunk.length;c++){let d=n.sampleToChunk[c],u=n.sampleToChunk[c+1],p=(u?u.startChunkIndex:n.chunkOffsets.length)-d.startChunkIndex;for(let f=0;f<p;f++){let m=d.startSampleIndex+f*d.samplesPerChunk,h=m+d.samplesPerChunk,v=Fe(n.sampleTimingEntries,m,T=>T.startIndex),x=n.sampleTimingEntries[v],y=Fe(n.sampleTimingEntries,h,T=>T.startIndex),g=n.sampleTimingEntries[y],b=x.startDecodeTimestamp+(m-x.startIndex)*x.delta,k=g.startDecodeTimestamp+(h-g.startIndex)*g.delta-b,S=He(s);S&&S.delta===k?S.count++:s.push({startIndex:d.startChunkIndex+f,startDecodeTimestamp:b,count:1,delta:k});let E=d.samplesPerChunk*o.sampleSize*e.info.numberOfChannels;l.push(E)}d.startSampleIndex=d.startChunkIndex,d.samplesPerChunk=1}n.sampleTimingEntries=s,n.sampleSizes=l}if(n.sampleCompositionTimeOffsets.length>0){n.presentationTimestamps=[];for(let o of n.sampleTimingEntries)for(let s=0;s<o.count;s++)n.presentationTimestamps.push({presentationTimestamp:o.startDecodeTimestamp+s*o.delta,sampleIndex:o.startIndex+s});for(let o of n.sampleCompositionTimeOffsets)for(let s=0;s<o.count;s++){let l=o.startIndex+s,c=n.presentationTimestamps[l];c&&(c.presentationTimestamp+=o.offset)}n.presentationTimestamps.sort((o,s)=>o.presentationTimestamp-s.presentationTimestamp),n.presentationTimestampIndexMap=Array(n.presentationTimestamps.length).fill(-1);for(let o=0;o<n.presentationTimestamps.length;o++)n.presentationTimestampIndexMap[n.presentationTimestamps[o].sampleIndex]=o}return n}async readFragment(e){if(this.lastReadFragment?.moofOffset===e)return this.lastReadFragment;let n=this.reader.requestSliceRange(e,Cn,br);le(n)&&(n=await n),A(n);let r=xr(n);A(r?.name==="moof");let i=this.reader.requestSlice(e,r.totalSize);le(i)&&(i=await i),A(i),this.traverseBox(i);let o=this.lastReadFragment;A(o&&o.moofOffset===e);for(let[,s]of o.trackData){let l=s.track,{fragmentPositionCache:c}=l;if(!s.startTimestampIsFinal){let u=l.fragmentLookupTable.find(p=>p.moofOffset===o.moofOffset);if(u)Sm(s,u.timestamp);else{let p=Fe(c,o.moofOffset-1,f=>f.moofOffset);if(p!==-1){let f=c[p];Sm(s,f.endTimestamp)}}s.startTimestampIsFinal=!0}let d=Fe(c,s.startTimestamp,u=>u.startTimestamp);if((d===-1||c[d].moofOffset!==o.moofOffset)&&c.splice(d+1,0,{moofOffset:o.moofOffset,startTimestamp:s.startTimestamp,endTimestamp:s.endTimestamp}),s.encryptionAuxInfo&&l.encryptionInfo){let u=await s1(this.reader,l.encryptionInfo,s.encryptionAuxInfo);for(let p=0;p<Math.min(s.samples.length,u.length);p++){let f=u[p];s.samples[p].encryption=f}}}return o}readContiguousBoxes(e){let n=e.filePos;for(;e.filePos-n<=e.length-Cn&&this.traverseBox(e););}*iterateContiguousBoxes(e){let n=e.filePos;for(;e.filePos-n<=e.length-Cn;){let r=e.filePos,i=xr(e);if(!i)break;yield{boxInfo:i,slice:e},e.filePos=r+i.totalSize}}traverseBox(e){let n=e.filePos,r=xr(e);if(!r)return!1;let i=e.filePos,o=n+r.totalSize;switch(r.name){case"mdia":case"minf":case"dinf":case"mfra":case"edts":case"sinf":case"schi":this.readContiguousBoxes(e.slice(i,r.contentSize));break;case"mvhd":{let s=pe(e);e.skip(3),s===1?(e.skip(16),this.movieTimescale=q(e),this.movieDurationInTimescale=xt(e)):(e.skip(8),this.movieTimescale=q(e),this.movieDurationInTimescale=q(e)),e.skip(16),this.movieMatrix=t1(e)}break;case"trak":{let s={id:-1,demuxer:this,trackBacking:null,disposition:{...ab,primary:!1},info:null,timescale:-1,durationInMovieTimescale:-1,durationInMediaTimescale:-1,matrix:Qo,internalCodecId:null,name:null,languageCode:za,sampleTableByteOffset:-1,sampleTable:null,fragmentLookupTable:[],currentFragmentState:null,fragmentPositionCache:[],editListPreviousSegmentDurations:0,editListOffset:0,encryptionInfo:null,encryptionAuxInfo:null,frmaCodecString:null,maxBitrate:null,avgBitrate:null};if(this.currentTrack=s,this.readContiguousBoxes(e.slice(i,r.contentSize)),s.id!==-1&&s.timescale!==-1&&s.info!==null){if(s.info.type==="video"&&s.info.width!==-1){let l=s;s.trackBacking=new Td(l),this.tracks.push(s)}else if(s.info.type==="audio"&&s.info.numberOfChannels!==-1){let l=s;s.trackBacking=new Cd(l),this.tracks.push(s)}}this.currentTrack=null}break;case"tkhd":{let s=this.currentTrack;if(!s)break;let l=pe(e),d=!!(Ar(e)&1);if(s.disposition.default=d,l===0)e.skip(8),s.id=q(e),e.skip(4),s.durationInMovieTimescale=q(e);else if(l===1)e.skip(16),s.id=q(e),e.skip(4),s.durationInMovieTimescale=xt(e);else throw new Error(`Incorrect track header version ${l}.`);e.skip(16);let u=t1(e);s.matrix=jo(u,this.movieMatrix)}break;case"elst":{let s=this.currentTrack;if(!s)break;let l=pe(e);e.skip(3);let c=!1,d=0,u=q(e);for(let p=0;p<u;p++){let f=l===1?xt(e):q(e),m=l===1?c1(e):wr(e),h=ui(e);if(c){ce._warn("Unsupported edit list: multiple edits are not currently supported. Only using first edit.");break}if(m===-1){d+=f;continue}if(h!==1){ce._warn("Unsupported edit list entry: media rate must be 1.");break}s.editListPreviousSegmentDurations=d,s.editListOffset=m,c=!0}}break;case"mdhd":{let s=this.currentTrack;if(!s)break;let l=pe(e);e.skip(3),l===0?(e.skip(8),s.timescale=q(e),s.durationInMediaTimescale=q(e)):l===1&&(e.skip(16),s.timescale=q(e),s.durationInMediaTimescale=xt(e));let c=rt(e);if(c>0){s.languageCode="";for(let d=0;d<3;d++)s.languageCode=String.fromCharCode(96+(c&31))+s.languageCode,c>>=5;Jc(s.languageCode)||(s.languageCode=za)}}break;case"hdlr":{let s=this.currentTrack;if(!s)break;e.skip(8);let l=zt(e,4);l==="vide"?s.info={type:"video",width:-1,height:-1,squarePixelWidth:-1,squarePixelHeight:-1,codec:null,codecDescription:null,colorSpace:{...Gv},avcType:null,avcCodecInfo:null,hevcCodecInfo:null,vp9CodecInfo:null,av1CodecInfo:null,proresCodecInfo:null,proresFormat:null}:l==="soun"&&(s.info={type:"audio",numberOfChannels:-1,sampleRate:-1,codec:null,codecDescription:null,aacCodecInfo:null,dtsFormat:null,pcmLittleEndian:!1,pcmSampleSize:null})}break;case"stbl":{let s=this.currentTrack;if(!s)break;s.sampleTableByteOffset=n,this.readContiguousBoxes(e.slice(i,r.contentSize))}break;case"stsd":{let s=this.currentTrack;if(!s||s.info===null||s.sampleTable)break;let l=pe(e);e.skip(3);let c=q(e);for(let d=0;d<c;d++){let u=e.filePos,p=xr(e);if(!p)break;s.internalCodecId=p.name;let f=p.name.toLowerCase();if(s.info.type==="video"){e.skip(24),s.info.width=rt(e),s.info.height=rt(e),s.info.squarePixelWidth=s.info.width,s.info.squarePixelHeight=s.info.height,e.skip(50),s.frmaCodecString=null,this.readContiguousBoxes(e.slice(e.filePos,u+p.totalSize-e.filePos));let m=f==="encv"?s.frmaCodecString:f;s.frmaCodecString=null,m==="avc1"||m==="avc3"?(s.info.codec="avc",s.info.avcType=m==="avc1"?1:3):m==="hvc1"||m==="hev1"?s.info.codec="hevc":m==="vp08"?s.info.codec="vp8":m==="vp09"?s.info.codec="vp9":m==="av01"?s.info.codec="av1":Hi.includes(f)?(s.info.codec="prores",s.info.proresFormat=f):m===null?ce._warn("Unknown encrypted video codec due to missing frma box."):ce._warn(`Unsupported video codec (sample entry type '${p.name}').`)}else{e.skip(8);let m=rt(e);e.skip(6);let h=rt(e),v=rt(e);e.skip(4);let x=q(e)/65536,y=null;l===0&&m>0&&(m===1?(e.skip(4),v=8*q(e),e.skip(8)):m===2&&(e.skip(4),x=d1(e),h=q(e),e.skip(4),v=q(e),y=q(e),e.skip(8))),s.info.numberOfChannels=h,s.info.sampleRate=x,s.frmaCodecString=null,this.readContiguousBoxes(e.slice(e.filePos,u+p.totalSize-e.filePos));let g=f==="enca"?s.frmaCodecString:f;if(s.frmaCodecString=null,g!=="mp4a")if(g==="opus")s.info.codec="opus",s.info.sampleRate=jb;else if(g==="flac")s.info.codec="flac";else if(g==="ulaw")s.info.codec="ulaw";else if(g==="alaw")s.info.codec="alaw";else if(g==="ac-3")s.info.codec="ac3";else if(g==="ec-3")s.info.codec="eac3";else if(Ra.includes(g))s.info.codec="dts",s.info.dtsFormat=g;else if(g==="twos")v===8?s.info.codec="pcm-s8":v===16?s.info.codec=s.info.pcmLittleEndian?"pcm-s16":"pcm-s16be":(ce._warn(`Unsupported sample size ${v} for codec 'twos'.`),s.info.codec=null);else if(g==="sowt")v===8?s.info.codec="pcm-s8":v===16?s.info.codec="pcm-s16":(ce._warn(`Unsupported sample size ${v} for codec 'sowt'.`),s.info.codec=null);else if(g==="raw ")s.info.codec="pcm-u8";else if(g==="in24")s.info.codec=s.info.pcmLittleEndian?"pcm-s24":"pcm-s24be";else if(g==="in32")s.info.codec=s.info.pcmLittleEndian?"pcm-s32":"pcm-s32be";else if(g==="fl32")s.info.codec=s.info.pcmLittleEndian?"pcm-f32":"pcm-f32be";else if(g==="fl64")s.info.codec=s.info.pcmLittleEndian?"pcm-f64":"pcm-f64be";else if(g==="ipcm"){let b=s.info.pcmSampleSize;s.info.pcmLittleEndian?b===16?s.info.codec="pcm-s16":b===24?s.info.codec="pcm-s24":b===32?s.info.codec="pcm-s32":(ce._warn(`Invalid ipcm sample size ${b}.`),s.info.codec=null):b===16?s.info.codec="pcm-s16be":b===24?s.info.codec="pcm-s24be":b===32?s.info.codec="pcm-s32be":(ce._warn(`Invalid ipcm sample size ${b}.`),s.info.codec=null)}else if(g==="fpcm"){let b=s.info.pcmSampleSize;s.info.pcmLittleEndian?b===32?s.info.codec="pcm-f32":b===64?s.info.codec="pcm-f64":(ce._warn(`Invalid fpcm sample size ${b}.`),s.info.codec=null):b===32?s.info.codec="pcm-f32be":b===64?s.info.codec="pcm-f64be":(ce._warn(`Invalid fpcm sample size ${b}.`),s.info.codec=null)}else if(g==="lpcm"&&y!==null){let b=v+7>>3,w=!!(y&1),k=!!(y&2),S=y&4?-1:0;v>0&&v<=64&&(w?v===32&&(s.info.codec=k?"pcm-f32be":"pcm-f32"):S&1<<b-1?b===1?s.info.codec="pcm-s8":b===2?s.info.codec=k?"pcm-s16be":"pcm-s16":b===3?s.info.codec=k?"pcm-s24be":"pcm-s24":b===4&&(s.info.codec=k?"pcm-s32be":"pcm-s32"):b===1&&(s.info.codec="pcm-u8")),s.info.codec===null&&ce._warn("Unsupported PCM format.")}else g===null?ce._warn("Unknown encrypted audio codec due to missing frma box."):ce._warn(`Unsupported audio codec (sample entry type '${p.name}').`)}e.filePos=u+p.totalSize}}break;case"frma":{let s=this.currentTrack;if(!s)break;let c=zt(e,4).toLowerCase();s.frmaCodecString=c}break;case"schm":{let s=this.currentTrack;if(!s)break;e.skip(4);let l=zt(e,4);l==="cenc"||l==="cens"||l==="cbcs"?s.encryptionInfo={scheme:l,defaultKid:null,defaultIsProtected:null,defaultPerSampleIvSize:null,defaultConstantIv:null,defaultCryptByteBlock:null,defaultSkipByteBlock:null}:ce._warn(`Unsupported encryption scheme '${l}'.`)}break;case"tenc":{let s=this.currentTrack;if(!s||!s.encryptionInfo)break;let l=pe(e);e.skip(3),e.skip(1);let c=pe(e);if(l>0?(s.encryptionInfo.defaultCryptByteBlock=c>>4,s.encryptionInfo.defaultSkipByteBlock=c&15):(s.encryptionInfo.defaultCryptByteBlock=0,s.encryptionInfo.defaultSkipByteBlock=0),s.encryptionInfo.defaultIsProtected=pe(e)!==0,s.encryptionInfo.defaultPerSampleIvSize=pe(e),s.encryptionInfo.defaultKid=ai(Ce(e,16)),s.encryptionInfo.defaultIsProtected&&s.encryptionInfo.defaultPerSampleIvSize===0){let d=pe(e),u=new Uint8Array(16);u.set(Ce(e,d),0),s.encryptionInfo.defaultConstantIv=u}}break;case"avcC":{let s=this.currentTrack;if(!s||(A(s.info),r.contentSize===0))break;s.info.codecDescription=Ce(e,r.contentSize)}break;case"hvcC":{let s=this.currentTrack;if(!s||(A(s.info),r.contentSize===0))break;s.info.codecDescription=Ce(e,r.contentSize)}break;case"vpcC":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="video"),e.skip(4);let l=pe(e),c=pe(e),d=pe(e),u=d>>4,p=d>>1&7,f=d&1,m=pe(e),h=pe(e),v=pe(e);s.info.vp9CodecInfo={profile:l,level:c,bitDepth:u,chromaSubsampling:p,videoFullRangeFlag:f,colourPrimaries:m,transferCharacteristics:h,matrixCoefficients:v}}break;case"av1C":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="video"),e.skip(1);let l=pe(e),c=l>>5,d=l&31,u=pe(e),p=u>>7,f=u>>6&1,m=u>>5&1,h=u>>4&1,v=u>>3&1,x=u>>2&1,y=u&3,g=c===2&&f?m?12:10:f?10:8;e.skip(1);let b=Ce(e,r.contentSize-4),w=xm(b);s.info.av1CodecInfo={profile:c,level:d,tier:p,bitDepth:g,monochrome:h,chromaSubsamplingX:v,chromaSubsamplingY:x,chromaSamplePosition:y,videoFullRangeFlag:w?.videoFullRangeFlag??0,colourPrimaries:w?.colourPrimaries??2,transferCharacteristics:w?.transferCharacteristics??2,matrixCoefficients:w?.matrixCoefficients??2}}break;case"colr":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="video");let l=zt(e,4);if(l!=="nclx"&&l!=="nclc")break;let c=rt(e),d=rt(e),u=rt(e),p;l==="nclx"&&(p=!!(pe(e)&128)),s.info.colorSpace={primaries:ii[c],transfer:oi[d],matrix:si[u],fullRange:p}}break;case"pasp":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="video");let l=q(e),c=q(e);l>0&&c>0&&(l>c?s.info.squarePixelWidth=Math.round(s.info.width*l/c):s.info.squarePixelHeight=Math.round(s.info.height*c/l))}break;case"btrt":{let s=this.currentTrack;if(!s)break;e.skip(4);let l=q(e),c=q(e);s.maxBitrate=l>0?l:null,s.avgBitrate=c>0?c:null}break;case"wave":this.readContiguousBoxes(e.slice(i,r.contentSize));break;case"esds":{let s=this.currentTrack;if(!s||s.info?.type!=="audio")break;e.skip(4);let l=pe(e);A(l===3),kd(e),e.skip(2);let c=pe(e),d=(c&128)!==0,u=(c&64)!==0,p=(c&32)!==0;if(d&&e.skip(2),u){let x=pe(e);e.skip(x)}p&&e.skip(2);let f=pe(e);A(f===4);let m=kd(e),h=e.filePos,v=pe(e);if(v===64||v===103?(s.info.codec="aac",s.info.aacCodecInfo={isMpeg2:v===103,objectType:null}):v===105||v===107?s.info.codec="mp3":v===221?s.info.codec="vorbis":v===169?s.info.codec="dts":ce._warn(`Unsupported audio codec (objectTypeIndication ${v}) - discarding track.`),e.skip(12),m>e.filePos-h){let x=pe(e);A(x===5);let y=kd(e);if(s.info.codecDescription=Ce(e,y),s.info.codec==="aac"){let g=od(s.info.codecDescription);g.outputNumberOfChannels!==null&&(s.info.numberOfChannels=g.outputNumberOfChannels),g.outputSampleRate!==null&&(s.info.sampleRate=g.outputSampleRate)}}}break;case"enda":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio"),s.info.pcmLittleEndian=!!(rt(e)&255)}break;case"pcmC":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio"),e.skip(4);let l=pe(e);s.info.pcmLittleEndian=!!(l&1),s.info.pcmSampleSize=pe(e)}break;case"dOps":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio"),e.skip(1);let l=pe(e),c=rt(e),d=q(e),u=l1(e),p=pe(e),f;p!==0?f=Ce(e,2+l):f=new Uint8Array(0);let m=new Uint8Array(19+f.byteLength),h=new DataView(m.buffer);h.setUint32(0,1332770163,!1),h.setUint32(4,1214603620,!1),h.setUint8(8,1),h.setUint8(9,l),h.setUint16(10,c,!0),h.setUint32(12,d,!0),h.setInt16(16,u,!0),h.setUint8(18,p),m.set(f,19),s.info.codecDescription=m,s.info.numberOfChannels=l}break;case"dfLa":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio"),e.skip(4);let l=127,c=128,d=e.filePos;for(;e.filePos<o;){let h=pe(e),v=Ar(e);if((h&l)===sd.STREAMINFO){e.skip(10);let y=q(e),g=y>>>12,b=(y>>9&7)+1;s.info.sampleRate=g,s.info.numberOfChannels=b,e.skip(20)}else e.skip(v);if(h&c)break}let u=e.filePos;e.filePos=d;let p=Ce(e,u-d),f=new Uint8Array(4+p.byteLength);new DataView(f.buffer).setUint32(0,1716281667,!1),f.set(p,4),s.info.codecDescription=f}break;case"dac3":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio");let l=Ce(e,3),c=new Ae(l),d=c.readBits(2);c.skipBits(8);let u=c.readBits(3),p=c.readBits(1);d<3&&(s.info.sampleRate=Wa[d]),s.info.numberOfChannels=wm[u]+p}break;case"dec3":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio");let l=Ce(e,r.contentSize),c=Nb(l);if(!c){ce._warn("Invalid dec3 box contents, ignoring.");break}let d=Pb(c);d!==null&&(s.info.sampleRate=d),s.info.numberOfChannels=Mb(c)}break;case"ddts":{let s=this.currentTrack;if(!s)break;A(s.info?.type==="audio");let l=Ce(e,Math.min(r.contentSize,md)),c=Fb(l);if(!c){ce._warn("Invalid ddts box contents, ignoring.");break}s.info.sampleRate=c.sampleRate,c.numberOfChannels!==null&&(s.info.numberOfChannels=c.numberOfChannels)}break;case"stts":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4);let l=q(e),c=0,d=0;for(let u=0;u<l;u++){let p=q(e),f=q(e);s.sampleTable.sampleTimingEntries.push({startIndex:c,startDecodeTimestamp:d,count:p,delta:f}),c+=p,d+=p*f}}break;case"ctts":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4);let l=q(e),c=0;for(let d=0;d<l;d++){let u=q(e),p=wr(e);s.sampleTable.sampleCompositionTimeOffsets.push({startIndex:c,count:u,offset:p}),c+=u}}break;case"stsz":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4);let l=q(e),c=q(e);if(l===0)for(let d=0;d<c;d++){let u=q(e);s.sampleTable.sampleSizes.push(u)}else s.sampleTable.sampleSizes.push(l)}break;case"stz2":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4),e.skip(3);let l=pe(e),c=q(e),d=Ce(e,Math.ceil(c*l/8)),u=new Ae(d);for(let p=0;p<c;p++){let f=u.readBits(l);s.sampleTable.sampleSizes.push(f)}}break;case"stss":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4),s.sampleTable.keySampleIndices=[];let l=q(e);for(let c=0;c<l;c++){let d=q(e)-1;s.sampleTable.keySampleIndices.push(d)}s.sampleTable.keySampleIndices[0]!==0&&s.sampleTable.keySampleIndices.unshift(0)}break;case"stsc":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4);let l=q(e);for(let d=0;d<l;d++){let u=q(e)-1,p=q(e),f=q(e);s.sampleTable.sampleToChunk.push({startSampleIndex:-1,startChunkIndex:u,samplesPerChunk:p,sampleDescriptionIndex:f})}let c=0;for(let d=0;d<s.sampleTable.sampleToChunk.length;d++)if(s.sampleTable.sampleToChunk[d].startSampleIndex=c,d<s.sampleTable.sampleToChunk.length-1){let p=s.sampleTable.sampleToChunk[d+1].startChunkIndex-s.sampleTable.sampleToChunk[d].startChunkIndex;c+=p*s.sampleTable.sampleToChunk[d].samplesPerChunk}}break;case"stco":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4);let l=q(e);for(let c=0;c<l;c++){let d=q(e);s.sampleTable.chunkOffsets.push(d)}}break;case"co64":{let s=this.currentTrack;if(!s||!s.sampleTable)break;e.skip(4);let l=q(e);for(let c=0;c<l;c++){let d=xt(e);s.sampleTable.chunkOffsets.push(d)}}break;case"mvex":this.isFragmented=!0,this.readContiguousBoxes(e.slice(i,r.contentSize));break;case"mehd":{let s=pe(e);e.skip(3);let l=s===1?xt(e):q(e);this.movieDurationInTimescale=l}break;case"trex":{e.skip(4);let s=q(e),l=q(e),c=q(e),d=q(e),u=q(e);this.fragmentTrackDefaults.push({trackId:s,defaultSampleDescriptionIndex:l,defaultSampleDuration:c,defaultSampleSize:d,defaultSampleFlags:u})}break;case"tfra":{let s=pe(e);e.skip(3);let l=q(e),c=this.tracks.find(g=>g.id===l);if(!c)break;let d=q(e),u=(d&48)>>4,p=(d&12)>>2,f=d&3,m=[pe,rt,Ar,q],h=m[u],v=m[p],x=m[f],y=q(e);for(let g=0;g<y;g++){let b=s===1?xt(e):q(e),w=s===1?xt(e):q(e);h(e),v(e),x(e),c.fragmentLookupTable.push({timestamp:b,moofOffset:w})}c.fragmentLookupTable.sort((g,b)=>g.timestamp-b.timestamp);for(let g=0;g<c.fragmentLookupTable.length-1;g++){let b=c.fragmentLookupTable[g],w=c.fragmentLookupTable[g+1];b.timestamp===w.timestamp&&(c.fragmentLookupTable.splice(g+1,1),g--)}}break;case"moof":this.currentFragment={moofOffset:n,moofSize:r.totalSize,implicitBaseDataOffset:n,trackData:new Map,psshBoxes:[]},this.readContiguousBoxes(e.slice(i,r.contentSize)),this.lastReadFragment=this.currentFragment,this.currentFragment=null;break;case"traf":if(A(this.currentFragment),this.readContiguousBoxes(e.slice(i,r.contentSize)),this.currentTrack){let s=this.currentFragment.trackData.get(this.currentTrack.id);e:if(s){if(s.samples.length===0){this.currentFragment.trackData.delete(this.currentTrack.id);break e}s.presentationTimestamps=s.samples.map((u,p)=>({presentationTimestamp:u.presentationTimestamp,sampleIndex:p})).sort((u,p)=>u.presentationTimestamp-p.presentationTimestamp);for(let u=0;u<s.presentationTimestamps.length;u++){let p=s.presentationTimestamps[u],f=s.samples[p.sampleIndex];if(s.firstKeyFrameTimestamp===null&&f.isKeyFrame&&(s.firstKeyFrameTimestamp=f.presentationTimestamp),u<s.presentationTimestamps.length-1){let h=s.presentationTimestamps[u+1].presentationTimestamp-p.presentationTimestamp;f.duration=h}}let l=s.samples[s.presentationTimestamps[0].sampleIndex],c=s.samples[He(s.presentationTimestamps).sampleIndex];s.startTimestamp=l.presentationTimestamp,s.endTimestamp=c.presentationTimestamp+c.duration;let{currentFragmentState:d}=this.currentTrack;A(d),d.startTimestamp!==null&&(Sm(s,d.startTimestamp),s.startTimestampIsFinal=!0),d.encryptionAuxInfo&&!s.samples[0].encryption&&(s.encryptionAuxInfo=d.encryptionAuxInfo)}this.currentTrack.currentFragmentState=null,this.currentTrack=null}break;case"pssh":{if(this.input._formatOptions.isobmff?._suppressPsshParsing)break;let s=Xb(Ce(e,r.contentSize));this.currentFragment?this.currentFragment.psshBoxes.push(s):this.currentTrack||this.psshBoxes.push(s)}break;case"tfhd":{A(this.currentFragment),e.skip(1);let s=Ar(e),l=!!(s&1),c=!!(s&2),d=!!(s&8),u=!!(s&16),p=!!(s&32),f=!!(s&65536),m=!!(s&131072),h=q(e),v=this.tracks.find(y=>y.id===h);if(!v)break;let x=this.fragmentTrackDefaults.find(y=>y.trackId===h);this.currentTrack=v,v.currentFragmentState={baseDataOffset:this.currentFragment.implicitBaseDataOffset,sampleDescriptionIndex:x?.defaultSampleDescriptionIndex??null,defaultSampleDuration:x?.defaultSampleDuration??null,defaultSampleSize:x?.defaultSampleSize??null,defaultSampleFlags:x?.defaultSampleFlags??null,startTimestamp:null,encryptionAuxInfo:null},l?v.currentFragmentState.baseDataOffset=xt(e):m&&(v.currentFragmentState.baseDataOffset=this.currentFragment.moofOffset),c&&(v.currentFragmentState.sampleDescriptionIndex=q(e)),d&&(v.currentFragmentState.defaultSampleDuration=q(e)),u&&(v.currentFragmentState.defaultSampleSize=q(e)),p&&(v.currentFragmentState.defaultSampleFlags=q(e)),f&&(v.currentFragmentState.defaultSampleDuration=0)}break;case"tfdt":{let s=this.currentTrack;if(!s)break;A(s.currentFragmentState);let l=pe(e);e.skip(3);let c=l===0?q(e):xt(e);s.currentFragmentState.startTimestamp=c}break;case"trun":{let s=this.currentTrack;if(!s)break;A(this.currentFragment),A(s.currentFragmentState);let l=pe(e),c=Ar(e),d=!!(c&1),u=!!(c&4),p=!!(c&256),f=!!(c&512),m=!!(c&1024),h=!!(c&2048),v=q(e),x=null;d&&(x=wr(e));let y=null;u&&(y=q(e));let g;this.currentFragment.trackData.has(s.id)?(g=this.currentFragment.trackData.get(s.id),x!==null&&(g.currentOffset=s.currentFragmentState.baseDataOffset+x)):(g={track:s,currentTimestamp:0,currentOffset:s.currentFragmentState.baseDataOffset+(x??0),startTimestamp:0,endTimestamp:0,firstKeyFrameTimestamp:null,samples:[],presentationTimestamps:[],startTimestampIsFinal:!1,encryptionAuxInfo:null},this.currentFragment.trackData.set(s.id,g));for(let b=0;b<v;b++){let w;p?w=q(e):(A(s.currentFragmentState.defaultSampleDuration!==null),w=s.currentFragmentState.defaultSampleDuration);let k;f?k=q(e):(A(s.currentFragmentState.defaultSampleSize!==null),k=s.currentFragmentState.defaultSampleSize);let S;m?S=q(e):(A(s.currentFragmentState.defaultSampleFlags!==null),S=s.currentFragmentState.defaultSampleFlags),b===0&&y!==null&&(S=y);let E=0;h&&(l===0?E=q(e):E=wr(e));let T=!(S&65536);g.samples.push({presentationTimestamp:g.currentTimestamp+E,duration:w,byteOffset:g.currentOffset,byteSize:k,isKeyFrame:T,encryption:null}),g.currentOffset+=k,g.currentTimestamp+=w}this.currentFragment.implicitBaseDataOffset=g.currentOffset}break;case"saiz":{let s=this.currentTrack;if(!s||!s.encryptionInfo)break;if(e.skip(1),Ar(e)&1){let f=zt(e,4),m=q(e);if(f!==s.encryptionInfo.scheme||m!==0)break}let c=pe(e),d=q(e),u=null;c===0&&d>0&&(u=Ce(e,d));let p=r1(s);p.defaultSampleInfoSize=c,p.sampleSizes=u,p.sampleCount=d}break;case"saio":{let s=this.currentTrack;if(!s||!s.encryptionInfo)break;let l=pe(e);if(Ar(e)&1){let f=zt(e,4),m=q(e);if(f!==s.encryptionInfo.scheme||m!==0)break}let d=q(e);if(d===0)break;d>1&&ce._warn("Multiple saio entries are not supported; using the first offset only.");let u=l===0?q(e):Number(xt(e));this.currentFragment&&(u+=this.currentFragment.moofOffset);let p=r1(s);p.offset=u}break;case"senc":{let s=this.currentTrack;if(!s||!s.encryptionInfo)break;A(this.currentFragment);let l=this.currentFragment.trackData.get(s.id);if(!l)break;e.skip(1);let d=!!(Ar(e)&2),u=q(e),p=s.encryptionInfo.defaultPerSampleIvSize;A(p!==null);for(let f=0;f<Math.min(u,l.samples.length);f++){let m=new Uint8Array(16);p>0?m.set(Ce(e,p),0):m.set(s.encryptionInfo.defaultConstantIv,0);let h=null;if(d){let x=rt(e);h=[];for(let y=0;y<x;y++){let g=rt(e),b=q(e);h.push({clearLen:g,protectedLen:b})}}let v=l.samples[f];v.encryption={iv:m,subsamples:h}}}break;case"udta":{let s=this.iterateContiguousBoxes(e.slice(i,r.contentSize));for(let{boxInfo:l,slice:c}of s){if(l.name!=="meta"&&!this.currentTrack){let d=c.filePos;this.metadataTags.raw??={},l.name[0]==="\xA9"?this.metadataTags.raw[l.name]??=_n(c):this.metadataTags.raw[l.name]??=Ce(c,l.contentSize),c.filePos=d}switch(l.name){case"meta":c.skip(-l.headerSize),this.traverseBox(c);break;case"\xA9nam":case"name":this.currentTrack?this.currentTrack.name=ri.decode(Ce(c,l.contentSize)):this.metadataTags.title??=_n(c);break;case"\xA9des":this.currentTrack||(this.metadataTags.description??=_n(c));break;case"\xA9ART":this.currentTrack||(this.metadataTags.artist??=_n(c));break;case"\xA9alb":this.currentTrack||(this.metadataTags.album??=_n(c));break;case"albr":this.currentTrack||(this.metadataTags.albumArtist??=_n(c));break;case"\xA9gen":this.currentTrack||(this.metadataTags.genre??=_n(c));break;case"\xA9day":if(!this.currentTrack){let d=new Date(_n(c));Number.isNaN(d.getTime())||(this.metadataTags.date??=d)}break;case"\xA9cmt":this.currentTrack||(this.metadataTags.comment??=_n(c));break;case"\xA9lyr":this.currentTrack||(this.metadataTags.lyrics??=_n(c));break}}}break;case"meta":{if(this.currentTrack)break;let l=q(e)!==0;this.currentMetadataKeys=new Map,l?this.readContiguousBoxes(e.slice(i,r.contentSize)):this.readContiguousBoxes(e.slice(i+4,r.contentSize-4)),this.currentMetadataKeys=null}break;case"keys":{if(!this.currentMetadataKeys)break;e.skip(4);let s=q(e);for(let l=0;l<s;l++){let c=q(e);e.skip(4);let d=ri.decode(Ce(e,c-8));this.currentMetadataKeys.set(l+1,d)}}break;case"ilst":{if(!this.currentMetadataKeys)break;let s=this.iterateContiguousBoxes(e.slice(i,r.contentSize));for(let{boxInfo:l,slice:c}of s){let d=l.name,u=(d.charCodeAt(0)<<24)+(d.charCodeAt(1)<<16)+(d.charCodeAt(2)<<8)+d.charCodeAt(3);this.currentMetadataKeys.has(u)&&(d=this.currentMetadataKeys.get(u));let p=Jb(c);switch(this.metadataTags.raw??={},this.metadataTags.raw[d]??=p,d){case"\xA9nam":case"titl":case"com.apple.quicktime.title":case"title":typeof p=="string"&&(this.metadataTags.title??=p);break;case"\xA9des":case"desc":case"dscp":case"com.apple.quicktime.description":case"description":typeof p=="string"&&(this.metadataTags.description??=p);break;case"\xA9ART":case"com.apple.quicktime.artist":case"artist":typeof p=="string"&&(this.metadataTags.artist??=p);break;case"\xA9alb":case"albm":case"com.apple.quicktime.album":case"album":typeof p=="string"&&(this.metadataTags.album??=p);break;case"aART":case"album_artist":typeof p=="string"&&(this.metadataTags.albumArtist??=p);break;case"\xA9cmt":case"com.apple.quicktime.comment":case"comment":typeof p=="string"&&(this.metadataTags.comment??=p);break;case"\xA9gen":case"gnre":case"com.apple.quicktime.genre":case"genre":typeof p=="string"&&(this.metadataTags.genre??=p);break;case"\xA9lyr":case"lyrics":typeof p=="string"&&(this.metadataTags.lyrics??=p);break;case"\xA9day":case"rldt":case"com.apple.quicktime.creationdate":case"date":if(typeof p=="string"){let f=new Date(p);Number.isNaN(f.getTime())||(this.metadataTags.date??=f)}break;case"tmpo":if(p instanceof Uint8Array&&p.length>=2){let f=ye(p).getInt16(0,!1);f>0&&(this.metadataTags.beatsPerMinute??=f)}break;case"covr":case"com.apple.quicktime.artwork":p instanceof Tn?(this.metadataTags.images??=[],this.metadataTags.images.push({data:p.data,kind:"coverFront",mimeType:p.mimeType})):p instanceof Uint8Array&&(this.metadataTags.images??=[],this.metadataTags.images.push({data:p,kind:"coverFront",mimeType:"image/*"}));break;case"track":if(typeof p=="string"){let f=p.split("/"),m=Number.parseInt(f[0],10),h=f[1]&&Number.parseInt(f[1],10);Number.isInteger(m)&&m>0&&(this.metadataTags.trackNumber??=m),h&&Number.isInteger(h)&&h>0&&(this.metadataTags.tracksTotal??=h)}break;case"trkn":if(p instanceof Uint8Array&&p.length>=6){let f=ye(p),m=f.getUint16(2,!1),h=f.getUint16(4,!1);m>0&&(this.metadataTags.trackNumber??=m),h>0&&(this.metadataTags.tracksTotal??=h)}break;case"disc":case"disk":if(p instanceof Uint8Array&&p.length>=6){let f=ye(p),m=f.getUint16(2,!1),h=f.getUint16(4,!1);m>0&&(this.metadataTags.discNumber??=m),h>0&&(this.metadataTags.discsTotal??=h)}break}}}break}return e.filePos=o,!0}},Ed=class{constructor(e){this.internalTrack=e,this.packetToSampleIndex=new WeakMap,this.packetToFragmentLocation=new WeakMap}getId(){return this.internalTrack.id}getNumber(){let e=this.internalTrack.demuxer,n=this.internalTrack.trackBacking.getType(),r=0;for(let i of e.tracks)if(i.trackBacking.getType()===n&&r++,i===this.internalTrack)break;return r}getCodec(){throw new Error("Not implemented on base class.")}getInternalCodecId(){return this.internalTrack.internalCodecId}getName(){return this.internalTrack.name}getLanguageCode(){return this.internalTrack.languageCode}getTimeResolution(){return this.internalTrack.timescale}isRelativeToUnixEpoch(){return!1}getUnixTimeForTimestamp(){return null}getDisposition(){return this.internalTrack.disposition}getPairingMask(){return 1n}getBitrate(){return this.internalTrack.maxBitrate}getAverageBitrate(){return this.internalTrack.avgBitrate}async getDurationFromMetadata(){let e=this.internalTrack;return e.durationInMediaTimescale<=0?null:(A(e.trackBacking),((await e.trackBacking.getFirstPacket({metadataOnly:!0}))?.timestamp??0)+e.durationInMediaTimescale/e.timescale)}async getLiveRefreshInterval(){return null}async getFirstPacket(e){let n=await this.fetchPacketForSampleIndex(0,e);return n||!this.internalTrack.demuxer.isFragmented?n:this.performFragmentedLookup(null,r=>r.trackData.get(this.internalTrack.id)?{sampleIndex:0,correctSampleFound:!0}:{sampleIndex:-1,correctSampleFound:!1},-1/0,1/0,e)}mapTimestampIntoTimescale(e){return tb(e*this.internalTrack.timescale)+this.internalTrack.editListOffset}async getPacket(e,n){let r=this.mapTimestampIntoTimescale(e),i=this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack),o=Em(i,r),s=await this.fetchPacketForSampleIndex(o,n);return!n1(i)||!this.internalTrack.demuxer.isFragmented?s:this.performFragmentedLookup(null,l=>{let c=l.trackData.get(this.internalTrack.id);if(!c)return{sampleIndex:-1,correctSampleFound:!1};let d=Fe(c.presentationTimestamps,r,f=>f.presentationTimestamp),u=d!==-1?c.presentationTimestamps[d].sampleIndex:-1,p=d!==-1&&r<c.endTimestamp;return{sampleIndex:u,correctSampleFound:p}},r,r,n)}async getNextPacket(e,n){let r=this.packetToSampleIndex.get(e);if(r!==void 0)return this.fetchPacketForSampleIndex(r+1,n);let i=this.packetToFragmentLocation.get(e);if(i===void 0)throw new Error("Packet was not created from this track.");return this.performFragmentedLookup(i.fragment,o=>{if(o===i.fragment){let s=o.trackData.get(this.internalTrack.id);if(i.sampleIndex+1<s.samples.length)return{sampleIndex:i.sampleIndex+1,correctSampleFound:!0}}else if(o.trackData.get(this.internalTrack.id))return{sampleIndex:0,correctSampleFound:!0};return{sampleIndex:-1,correctSampleFound:!1}},-1/0,1/0,n)}async getKeyPacket(e,n){let r=this.mapTimestampIntoTimescale(e),i=this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack),o=mS(i,r),s=await this.fetchPacketForSampleIndex(o,n);return!n1(i)||!this.internalTrack.demuxer.isFragmented?s:this.performFragmentedLookup(null,l=>{let c=l.trackData.get(this.internalTrack.id);if(!c)return{sampleIndex:-1,correctSampleFound:!1};let d=Xv(c.presentationTimestamps,f=>c.samples[f.sampleIndex].isKeyFrame&&f.presentationTimestamp<=r),u=d!==-1?c.presentationTimestamps[d].sampleIndex:-1,p=d!==-1&&r<c.endTimestamp;return{sampleIndex:u,correctSampleFound:p}},r,r,n)}async getNextKeyPacket(e,n){let r=this.packetToSampleIndex.get(e);if(r!==void 0){let o=this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack),s=gS(o,r);return this.fetchPacketForSampleIndex(s,n)}let i=this.packetToFragmentLocation.get(e);if(i===void 0)throw new Error("Packet was not created from this track.");return this.performFragmentedLookup(i.fragment,o=>{if(o===i.fragment){let l=o.trackData.get(this.internalTrack.id).samples.findIndex((c,d)=>c.isKeyFrame&&d>i.sampleIndex);if(l!==-1)return{sampleIndex:l,correctSampleFound:!0}}else{let s=o.trackData.get(this.internalTrack.id);if(s&&s.firstKeyFrameTimestamp!==null){let l=s.samples.findIndex(c=>c.isKeyFrame);return A(l!==-1),{sampleIndex:l,correctSampleFound:!0}}}return{sampleIndex:-1,correctSampleFound:!1}},-1/0,1/0,n)}async fetchPacketForSampleIndex(e,n){if(e===-1)return null;let r=this.internalTrack.demuxer.getSampleTableForTrack(this.internalTrack),i=hS(r,e);if(!i)return null;let o;if(n.metadataOnly)o=ja;else{let d=this.internalTrack.demuxer.reader.requestSlice(i.sampleOffset,i.sampleSize);if(le(d)&&(d=await d),!d)return null;if(o=Ce(d,i.sampleSize),this.internalTrack.encryptionInfo){let u=null;if(this.internalTrack.encryptionAuxInfo){let p=await s1(this.internalTrack.demuxer.reader,this.internalTrack.encryptionInfo,this.internalTrack.encryptionAuxInfo);e<p.length&&(u=p[e])}u??=i1(this.internalTrack.encryptionInfo),u&&(o=await o1(this.internalTrack,u,o,null))}}let s=(i.presentationTimestamp-this.internalTrack.editListOffset)/this.internalTrack.timescale,l=i.duration/this.internalTrack.timescale,c=new je(o,i.isKeyFrame?"key":"delta",s,l,e,i.sampleSize);return this.packetToSampleIndex.set(c,e),c}async fetchPacketInFragment(e,n,r){if(n===-1)return null;let o=e.trackData.get(this.internalTrack.id).samples[n];A(o);let s;if(r.metadataOnly)s=ja;else{let u=this.internalTrack.demuxer.reader.requestSlice(o.byteOffset,o.byteSize);if(le(u)&&(u=await u),!u)return null;if(s=Ce(u,o.byteSize),this.internalTrack.encryptionInfo){let p=o.encryption??i1(this.internalTrack.encryptionInfo);p&&(s=await o1(this.internalTrack,p,s,e))}}let l=(o.presentationTimestamp-this.internalTrack.editListOffset)/this.internalTrack.timescale,c=o.duration/this.internalTrack.timescale,d=new je(s,o.isKeyFrame?"key":"delta",l,c,e.moofOffset+n,o.byteSize);return this.packetToFragmentLocation.set(d,{fragment:e,sampleIndex:n}),d}async performFragmentedLookup(e,n,r,i,o){let s=this.internalTrack.demuxer,l=null,c=null,d=-1;if(e){let{sampleIndex:x,correctSampleFound:y}=n(e);if(y)return this.fetchPacketInFragment(e,x,o);x!==-1&&(c=e,d=x)}let u=Fe(this.internalTrack.fragmentLookupTable,r,x=>x.timestamp),p=u!==-1?this.internalTrack.fragmentLookupTable[u]:null,f=Fe(this.internalTrack.fragmentPositionCache,r,x=>x.startTimestamp),m=f!==-1?this.internalTrack.fragmentPositionCache[f]:null,h=Math.max(p?.moofOffset??0,m?.moofOffset??0)||null,v;for(e?h===null||e.moofOffset>=h?(v=e.moofOffset+e.moofSize,l=e):v=h:v=h??0;;){if(l){let b=l.trackData.get(this.internalTrack.id);if(b&&b.startTimestamp>i)break}let x=s.reader.requestSliceRange(v,Cn,br);if(le(x)&&(x=await x),!x)break;let y=v,g=xr(x);if(!g)break;if(g.name==="moof"){l=await s.readFragment(y);let{sampleIndex:b,correctSampleFound:w}=n(l);if(w)return this.fetchPacketInFragment(l,b,o);b!==-1&&(c=l,d=b)}v=y+g.totalSize}if(p&&(!c||c.moofOffset<p.moofOffset)){let x=this.internalTrack.fragmentLookupTable[u-1];A(!x||x.timestamp<p.timestamp);let y=x?.timestamp??-1/0;return this.performFragmentedLookup(null,n,y,i,o)}return c?this.fetchPacketInFragment(c,d,o):null}},Td=class extends Ed{constructor(e){super(e),this.decoderConfigPromise=null}getType(){return"video"}getCodec(){return this.internalTrack.info.codec}getCodedWidth(){return this.internalTrack.info.width}getCodedHeight(){return this.internalTrack.info.height}getSquarePixelWidth(){return this.internalTrack.info.squarePixelWidth}getSquarePixelHeight(){return this.internalTrack.info.squarePixelHeight}getTransformationMatrix(){return[...this.internalTrack.matrix]}async getColorSpace(){let e=await this.getDecoderConfig();return e?{primaries:e.colorSpace?.primaries,transfer:e.colorSpace?.transfer,matrix:e.colorSpace?.matrix,fullRange:e.colorSpace?.fullRange}:this.internalTrack.info.colorSpace}async canBeTransparent(){return this.internalTrack.info.codec==="prores"&&(this.internalTrack.info.proresFormat==="ap4h"||this.internalTrack.info.proresFormat==="ap4x")}async getDecoderConfig(){return this.internalTrack.info.codec?this.decoderConfigPromise??=(async()=>{if(this.internalTrack.info.codec==="avc"&&!this.internalTrack.info.codecDescription){let n=await this.getFirstPacket({});this.internalTrack.info.avcCodecInfo=n&&dd(n.data)}else if(this.internalTrack.info.codec==="hevc"&&!this.internalTrack.info.codecDescription){let n=await this.getFirstPacket({});this.internalTrack.info.hevcCodecInfo=n&&fd(n.data)}else if(this.internalTrack.info.codec==="vp9"&&(!this.internalTrack.info.vp9CodecInfo||!Ab(this.internalTrack.info.vp9CodecInfo))){let n=await this.getFirstPacket({}),r=n&&kb(n.data);r&&(this.internalTrack.info.vp9CodecInfo={...this.internalTrack.info.vp9CodecInfo??r,videoFullRangeFlag:r.videoFullRangeFlag,colourPrimaries:r.colourPrimaries,transferCharacteristics:r.transferCharacteristics,matrixCoefficients:r.matrixCoefficients})}else if(this.internalTrack.info.codec==="av1"&&(!this.internalTrack.info.av1CodecInfo||!Eb(this.internalTrack.info.av1CodecInfo))){let n=await this.getFirstPacket({}),r=n&&xm(n.data);r&&(this.internalTrack.info.av1CodecInfo=r)}else if(this.internalTrack.info.codec==="prores"&&!this.internalTrack.info.proresCodecInfo){let n=await this.getFirstPacket({});this.internalTrack.info.proresCodecInfo=n&&Tb(n.data)}if(!Kc(this.internalTrack.info.colorSpace)){let n=qb(this.internalTrack.info);this.internalTrack.info.colorSpace.primaries??=n.primaries,this.internalTrack.info.colorSpace.transfer??=n.transfer,this.internalTrack.info.colorSpace.matrix??=n.matrix,this.internalTrack.info.colorSpace.fullRange??=n.fullRange}let e={codec:Hb(this.internalTrack.info),codedWidth:this.internalTrack.info.width,codedHeight:this.internalTrack.info.height,description:this.internalTrack.info.codecDescription??void 0,colorSpace:this.internalTrack.info.colorSpace};return(this.internalTrack.info.width!==this.internalTrack.info.squarePixelWidth||this.internalTrack.info.height!==this.internalTrack.info.squarePixelHeight)&&(e.displayAspectWidth=this.internalTrack.info.squarePixelWidth,e.displayAspectHeight=this.internalTrack.info.squarePixelHeight),e})():null}},Cd=class extends Ed{constructor(e){super(e),this.decoderConfigPromise=null}getType(){return"audio"}getCodec(){return this.internalTrack.info.codec}getNumberOfChannels(){return this.internalTrack.info.numberOfChannels}getSampleRate(){return this.internalTrack.info.sampleRate}async getDecoderConfig(){return this.internalTrack.info.codec?this.decoderConfigPromise??=(async()=>{if(this.internalTrack.info.codec==="dts"&&!this.internalTrack.info.dtsFormat){let e=await this.getFirstPacket({});this.internalTrack.info.dtsFormat=e&&Bb(e.data)}return{codec:Rb(this.internalTrack.info),numberOfChannels:this.internalTrack.info.numberOfChannels,sampleRate:this.internalTrack.info.sampleRate,description:this.internalTrack.info.codecDescription??void 0}})():null}},Em=(t,e)=>{if(t.presentationTimestamps){let n=Fe(t.presentationTimestamps,e,r=>r.presentationTimestamp);return n===-1?-1:t.presentationTimestamps[n].sampleIndex}else{let n=Fe(t.sampleTimingEntries,e,i=>i.startDecodeTimestamp);if(n===-1)return-1;let r=t.sampleTimingEntries[n];return r.startIndex+Math.min(Math.floor((e-r.startDecodeTimestamp)/r.delta),r.count-1)}},mS=(t,e)=>{if(!t.keySampleIndices)return Em(t,e);if(t.presentationTimestamps){let n=Fe(t.presentationTimestamps,e,r=>r.presentationTimestamp);if(n===-1)return-1;for(let r=n;r>=0;r--){let i=t.presentationTimestamps[r].sampleIndex;if(om(t.keySampleIndices,i,s=>s)!==-1)return i}return-1}else{let n=Em(t,e),r=Fe(t.keySampleIndices,n,i=>i);return t.keySampleIndices[r]??-1}},hS=(t,e)=>{let n=Fe(t.sampleTimingEntries,e,y=>y.startIndex),r=t.sampleTimingEntries[n];if(!r||r.startIndex+r.count<=e)return null;let o=r.startDecodeTimestamp+(e-r.startIndex)*r.delta,s=Fe(t.sampleCompositionTimeOffsets,e,y=>y.startIndex),l=t.sampleCompositionTimeOffsets[s];l&&e-l.startIndex<l.count&&(o+=l.offset);let c=t.sampleSizes[Math.min(e,t.sampleSizes.length-1)],d=Fe(t.sampleToChunk,e,y=>y.startSampleIndex),u=t.sampleToChunk[d];A(u);let p=u.startChunkIndex+Math.floor((e-u.startSampleIndex)/u.samplesPerChunk),f=t.chunkOffsets[p],m=u.startSampleIndex+(p-u.startChunkIndex)*u.samplesPerChunk,h=0,v=f;if(t.sampleSizes.length===1)v+=c*(e-m),h+=c*u.samplesPerChunk;else for(let y=m;y<m+u.samplesPerChunk;y++){let g=t.sampleSizes[y];y<e&&(v+=g),h+=g}let x=r.delta;if(t.presentationTimestamps){let y=t.presentationTimestampIndexMap[e];A(y!==void 0),y<t.presentationTimestamps.length-1&&(x=t.presentationTimestamps[y+1].presentationTimestamp-o)}return{presentationTimestamp:o,duration:x,sampleOffset:v,sampleSize:c,chunkOffset:f,chunkSize:h,isKeyFrame:t.keySampleIndices?om(t.keySampleIndices,e,y=>y)!==-1:!0}},gS=(t,e)=>{if(!t.keySampleIndices)return e+1;let n=Fe(t.keySampleIndices,e,r=>r);return t.keySampleIndices[n+1]??-1},Sm=(t,e)=>{t.startTimestamp+=e,t.endTimestamp+=e;for(let n of t.samples)n.presentationTimestamp+=e;for(let n of t.presentationTimestamps)n.presentationTimestamp+=e},t1=t=>[ui(t),ui(t),wd(t),ui(t),ui(t),wd(t),ui(t),ui(t),wd(t)],n1=t=>t.sampleSizes.length===0,r1=t=>t.currentFragmentState?t.currentFragmentState.encryptionAuxInfo??={defaultSampleInfoSize:0,sampleSizes:null,sampleCount:0,offset:null,resolved:null}:t.encryptionAuxInfo??={defaultSampleInfoSize:0,sampleSizes:null,sampleCount:0,offset:null,resolved:null},s1=async(t,e,n)=>{if(n.resolved)return n.resolved;if(n.offset===null||n.sampleCount===0)throw new Error("Incomplete saiz/saio info; cannot resolve encryption data.");let r=0;if(n.defaultSampleInfoSize>0)r=n.defaultSampleInfoSize*n.sampleCount;else{A(n.sampleSizes);for(let l=0;l<n.sampleCount;l++)r+=n.sampleSizes[l]}let i=t.requestSlice(n.offset,r);if(le(i)&&(i=await i),!i)throw new Error("Failed to read auxiliary encryption info.");let o=e.defaultPerSampleIvSize;A(o!==null);let s=[];for(let l=0;l<n.sampleCount;l++){let c=n.defaultSampleInfoSize>0?n.defaultSampleInfoSize:n.sampleSizes[l],d=new Uint8Array(16);o>0?d.set(Ce(i,o),0):d.set(e.defaultConstantIv,0);let u=null;if(c>o){let p=rt(i);u=[];for(let f=0;f<p;f++){let m=rt(i),h=q(i);u.push({clearLen:m,protectedLen:h})}}s.push({iv:d,subsamples:u})}return n.resolved=s,s},i1=t=>t.defaultConstantIv?{iv:t.defaultConstantIv,subsamples:null}:null,o1=async(t,e,n,r)=>{A(t.encryptionInfo);let i=t.encryptionInfo;A(i.defaultKid!==null);let o=i.defaultKid,s,l=t.demuxer.decryptionKeyCache.get(o);if(l)s=await l;else{if(!t.demuxer.input._formatOptions.isobmff?.resolveKeyId)throw new Error("Encrypted media samples encountered. To decrypt them, please provide a callback for InputOptions.formatOptions.isobmff.resolveKeyId.");let c=(async()=>{let d=t.demuxer.psshBoxes;if(r){d=[...d,...r.psshBoxes].filter(p=>p.keyIds===null||p.keyIds.includes(o));for(let p=0;p<d.length-1;p++)for(let f=p+1;f<d.length;f++)Yb(d[p],d[f])&&(d.splice(f,1),f--)}let u=await t.demuxer.input._formatOptions.isobmff.resolveKeyId({keyId:o,psshBoxes:d});if(!(typeof u=="string"&&u.length===32&&Qv.test(u)||u instanceof Uint8Array&&u.byteLength===16))throw new TypeError("resolveKeyId must return a 32-character hex string or a 16-byte Uint8Array containing the decryption key.");return u instanceof Uint8Array?u:Kv(u)})();t.demuxer.decryptionKeyCache.set(o,c),s=await c}return i.scheme==="cenc"||i.scheme==="cens"?yS(s,i,e,n):vS(s,i,e,n)},yS=async(t,e,n,r)=>{let i=new Uint8Array(16);i.set(n.iv,0);let o=await crypto.subtle.importKey("raw",t,{name:"AES-CTR"},!1,["decrypt"]),s=async h=>{let v=await crypto.subtle.decrypt({name:"AES-CTR",counter:i,length:64},o,h);return new Uint8Array(v)};if(!n.subsamples)return s(r);A(e.defaultCryptByteBlock!==null&&e.defaultSkipByteBlock!==null);let l=a1(n.subsamples,e.defaultCryptByteBlock,e.defaultSkipByteBlock),c=0;for(let h of l)for(let v of h.perSubsample)c+=v.length;let d=new Uint8Array(c),u=0;for(let h of l)for(let v of h.perSubsample)d.set(r.subarray(v.offset,v.offset+v.length),u),u+=v.length;let p=await s(d),f=new Uint8Array(r),m=0;for(let h of l)for(let v of h.perSubsample)f.set(p.subarray(m,m+v.length),v.offset),m+=v.length;return f},vS=(t,e,n,r)=>{let i=new Ad;i.init({key:t,iv:n.iv});let o=e.defaultCryptByteBlock,s=e.defaultSkipByteBlock;if(A(o!==null&&s!==null),!n.subsamples){let u=new Uint8Array(r),p=Math.floor(r.length/16);for(let f=0;f<p;f++){let m=f*16;i.in.set(r.subarray(m,m+16)),i.decrypt(),u.set(i.out,m)}return u}if(o===0&&s===0)throw new Error("cbcs with subsamples requires pattern encryption.");let l=new Uint8Array(r),c=a1(n.subsamples,o,s),d=new DataView(n.iv.buffer,n.iv.byteOffset,16);for(let u of c){i.iv[0]=d.getUint32(0,!1),i.iv[1]=d.getUint32(4,!1),i.iv[2]=d.getUint32(8,!1),i.iv[3]=d.getUint32(12,!1);for(let p of u.perSubsample){let f=p.length/16;for(let m=0;m<f;m++){let h=p.offset+m*16;i.in.set(r.subarray(h,h+16)),i.decrypt(),l.set(i.out,h)}}}return l},a1=(t,e,n)=>{let r=[],i=e!==0||n!==0,o=0;for(let s of t){o+=s.clearLen;let l=[];if(!i)s.protectedLen>0&&l.push({offset:o,length:s.protectedLen}),o+=s.protectedLen;else{let c=s.protectedLen,d=o;for(;c>0&&!(c<16*e);){let u=16*e;l.push({offset:d,length:u}),d+=u,c-=u;let p=Math.min(16*n,c);d+=p,c-=p}o+=s.protectedLen}r.push({perSubsample:l})}return r};var u1=7,p1=9,Tm=t=>{let e=t.filePos,n=Ce(t,9),r=new Ae(n);if(r.readBits(12)!==4095||(r.skipBits(1),r.readBits(2)!==0))return null;let s=r.readBits(1),l=r.readBits(2)+1,c=r.readBits(4);if(c===15)return null;r.skipBits(1);let d=r.readBits(3);if(d===0)throw new Error("ADTS frames with channel configuration 0 are not supported.");r.skipBits(1),r.skipBits(1),r.skipBits(1),r.skipBits(1);let u=r.readBits(13);r.skipBits(11);let p=r.readBits(2)+1;if(p!==1)throw new Error("ADTS frames with more than one AAC frame are not supported.");let f=null;return s===1?t.filePos-=2:f=r.readBits(16),{objectType:l,samplingFrequencyIndex:c,channelConfiguration:d,frameLength:u,numberOfAacFrames:p,crcCheck:f,startPos:e}};Xo();var _m=0,Im=1/0,bS=null;typeof FinalizationRegistry<"u"&&(bS=new FinalizationRegistry(t=>{t()}));var cn=class extends on{constructor(){super(),this._disposed=!1,this._refCount=0,this._usedForHls=!1,this._refFinalizationRegistry=null,this._sizePromise=null,this.onread=null,typeof FinalizationRegistry<"u"&&(this._refFinalizationRegistry=new FinalizationRegistry(e=>{e._decrementRefCount()}))}async getSizeOrNull(){if(this._disposed)throw new Xe;return this._sizePromise??=(async()=>{let e=this._getFileSize();return e!==void 0||(await this._read(0,1,_m,Im),e=this._getFileSize(),A(e!==void 0)),e})()}async getSize(){if(this._disposed)throw new Xe;let e=await this.getSizeOrNull();if(e===null)throw new Error("Cannot determine the size of an unsized source.");return e}slice(e,n){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");if(n!==void 0&&(!Number.isInteger(n)||n<0))throw new TypeError("length, when provided, must be a non-negative integer.");return new _d(this,e,n)}_dispatchRead(e,n){this.onread?.(e,n),this._emit("read",{start:e,end:n})}ref(){return new Ri(this)}_incrementRefCount(){this._refCount++}_decrementRefCount(){this._refCount--,this._refCount===0&&(this._dispose(),this._disposed=!0)}},Ri=class{constructor(e){if(this._freed=!1,e._disposed)throw new Error("Cannot ref a disposed source.");e._incrementRefCount(),e._refFinalizationRegistry?.register(this,e,this),this._source=e}get source(){if(!this._source)throw new Error("Can't get source; ref has already been freed.");return this._source}get freed(){return this._freed}free(){if(this._freed)throw new Error("Illegal operation: double free on SourceRef.");let e=this.source;A(e._refCount>0),e._decrementRefCount(),e._refFinalizationRegistry?.unregister(this),this._freed=!0,this._source=null}[Symbol.dispose](){this.freed||this.free()}},Ga=class extends cn{constructor(e,n){if(typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof n!="function")throw new TypeError("requestHandler must be a function.");super(),this.rootPath=e,this.requestHandler=n}_resolveRequest(e){let n=this.requestHandler(e),r=i=>{if(!(i instanceof cn||i instanceof Ri))throw new TypeError("requestHandler must return or resolve to a Source or SourceRef.");let o=i instanceof cn?i.ref():i;return o.source._usedForHls||=this._usedForHls,o};return le(n)?n.then(r):r(n)}},Nm=(t,e)=>t.path===e.path;var f1=typeof FinalizationRegistry<"u"?new FinalizationRegistry(t=>{t.cancel().catch(()=>{})}):null,os=class extends cn{constructor(e,n={}){if(!(e instanceof Blob))throw new TypeError("blob must be a Blob.");if(!n||typeof n!="object")throw new TypeError("options must be an object.");if(n.maxCacheSize!==void 0&&(!li(n.maxCacheSize)||n.maxCacheSize<0))throw new TypeError("options.maxCacheSize, when provided, must be a non-negative number.");if(n.useStreamReader!==void 0&&typeof n.useStreamReader!="boolean")throw new TypeError("options.useStreamReader, when provided, must be a boolean.");if(n.handleUnhandledError!==void 0&&typeof n.handleUnhandledError!="function")throw new TypeError("options.handleUnhandledError, when provided, must be a function.");super(),this._readers=new WeakMap,this._blob=e,this._options=n,this._orchestrator=new Cm({maxCacheSize:n.maxCacheSize??8*2**20,maxWorkerCount:4,runWorker:this._runWorker.bind(this),onIdleWorkerRemoved:r=>{let i=this._readers.get(r);i&&(this._readers.delete(r),f1?.unregister(r),i.cancel().catch(()=>{}))},prefetchProfile:wS.fileSystem,handleUnhandledError:n.handleUnhandledError}),this._orchestrator.fileSize=e.size}_getFileSize(){return this._orchestrator.fileSize}_read(e,n,r,i){return this._orchestrator.read(e,n,r,i)}async _runWorker(e){A(e.strictTarget);let n=this._readers.get(e);for(n===void 0&&("stream"in this._blob&&!yr()&&this._options.useStreamReader!==!1?(n=this._blob.slice(e.currentPos).stream().getReader(),f1?.register(e,n,e)):n=null,this._readers.set(e,n));e.currentPos<e.targetPos&&!e.aborted;)if(n){let{done:r,value:i}=await n.read();if(r)throw this._orchestrator.onWorkerFinished(e),new Error("Blob reader stopped unexpectedly before all requested data was read.");if(e.aborted)break;this._dispatchRead(e.currentPos,e.currentPos+i.length),this._orchestrator.supplyWorkerData(e,i)}else{let r=await this._blob.slice(e.currentPos,e.targetPos).arrayBuffer();if(e.aborted)break;this._dispatchRead(e.currentPos,e.currentPos+r.byteLength),this._orchestrator.supplyWorkerData(e,new Uint8Array(r))}this._orchestrator.signalWorkerStoppedRunning(e),e.aborted&&await n?.cancel().catch(()=>{})}_dispose(){this._orchestrator.dispose()}},xS=.5*2**20;var wS={none:(t,e)=>({start:t,end:e}),fileSystem:(t,e)=>(t=Math.floor((t-65536)/65536)*65536,e=Math.ceil((e+65536)/65536)*65536,{start:t,end:e}),network:(t,e,n)=>{t=Math.max(0,Math.floor((t-65536)/65536)*65536);for(let i of n){let s=Math.max((i.startPos+i.targetPos)/2,i.targetPos-8388608);if(Zc(t,e,s,i.targetPos)){let l=i.targetPos-i.startPos,c=Math.ceil((l+1)/8388608)*8388608,d=2**Math.ceil(Math.log2(l+1)),u=Math.min(d,c);e=Math.max(e,i.startPos+u)}}return e=Math.max(e,t+xS),{start:t,end:e}}},Cm=class{constructor(e){this.options=e,this.fileSize=null,this.nextAge=0,this.workers=[],this.cache=[],this.currentCacheSize=0,this.disposed=!1,this.queuedReads=[]}read(e,n,r,i){A(!this.disposed);let o=this.options.prefetchProfile(e,n,this.workers),s=Math.max(o.start,r),l=Math.min(o.end,this.fileSize??1/0,i);A(s<=e&&n<=l);let c=null,d=Fe(this.cache,e,k=>k.start),u=d!==-1?this.cache[d]:null;u&&u.start<=e&&n<=u.end&&(u.age=this.nextAge++,c={bytes:u.bytes,view:u.view,offset:u.start});let p=Fe(this.cache,s,k=>k.start),f=c?null:new Uint8Array(n-e),m=0,h=s,v=[];if(p!==-1){for(let k=p;k<this.cache.length;k++){let S=this.cache[k];if(S.start>=l)break;if(S.end<=s)continue;let E=Math.max(s,S.start),T=Math.min(l,S.end);if(A(E<=T),h<E&&v.push({start:h,end:E}),h=T,f){let _=Math.max(e,S.start),C=Math.min(n,S.end);if(_<C){let I=_-e;f.set(S.bytes.subarray(_-S.start,C-S.start),I),I===m&&(m=C-e)}}S.age=this.nextAge++}h<l&&v.push({start:h,end:l})}else v.push({start:s,end:l});if(f&&m>=f.length&&(c={bytes:f,view:ye(f),offset:e}),v.length===0)return A(c),c;let{promise:x,resolve:y,reject:g}=Ke(),b=[];for(let k of v){let S=Math.max(e,k.start),E=Math.min(n,k.end);S===k.start&&E===k.end?b.push(k):S<E&&b.push({start:S,end:E})}let w=f&&{start:e,bytes:f,holes:b,resolve:y,reject:g};e:for(let k of v){for(let T of this.workers)if(this.checkHoleAgainstWorker(T,k,w?[w]:[])){this.checkQueuedReadsAgainstWorker(T);continue e}let S=k.end<l||this.fileSize!==null,E=this.createWorker(k.start,k.end,S);if(E)w&&(E.pendingSlices=[w]),this.runWorker(E);else{let T=Fe(this.queuedReads,k.start,C=>C.hole.start),_=T!==-1?this.queuedReads[T]:null;for(_&&k.start<=_.hole.end?(_.hole.end=Math.max(_.hole.end,k.end),_.strictTarget&&=S,w&&_.pendingSlices.push(w)):(T++,_={hole:{start:k.start,end:k.end},strictTarget:S,pendingSlices:w?[w]:[],age:this.nextAge++},this.queuedReads.splice(T,0,_));T+1<this.queuedReads.length;){let C=this.queuedReads[T+1];if(C.hole.start>_.hole.end)break;_.hole.end=Math.max(_.hole.end,C.hole.end),_.pendingSlices.push(...C.pendingSlices),_.strictTarget&&=C.strictTarget,_.age=Math.min(_.age,C.age),this.queuedReads.splice(T+1,1)}}}return c?x.catch(k=>{if(!this.disposed)if(this.options.handleUnhandledError)this.options.handleUnhandledError(k);else throw k}):(A(f),c=x.then(k=>k&&{bytes:k,view:ye(k),offset:e})),c}checkHoleAgainstWorker(e,n,r){if(Zc(n.start-131072,n.start,e.currentPos,e.targetPos)){e.targetPos=Math.max(e.targetPos,n.end);for(let o=0;o<r.length;o++){let s=r[o];e.pendingSlices.includes(s)||e.pendingSlices.push(s)}return e.running||this.runWorker(e),!0}return!1}checkQueuedReadsAgainstWorker(e){let n=!1;for(let r=0;r<this.queuedReads.length;r++){let i=this.queuedReads[r];if(this.checkHoleAgainstWorker(e,i.hole,i.pendingSlices))this.queuedReads.splice(r,1),r--,n=!0;else if(n)break}}createWorker(e,n,r){if(this.workers.length>=this.options.maxWorkerCount){let o=null,s=null;for(let l=0;l<this.workers.length;l++){let c=this.workers[l];!c.running&&c.pendingSlices.length===0&&(!o||c.age<o.age)&&(s=l,o=c)}if(o)A(s!==null),A(o.pendingSlices.length===0),this.workers.splice(s,1),this.options.onIdleWorkerRemoved?.(o);else return null}let i={startPos:e,currentPos:e,targetPos:n,strictTarget:r,running:!1,aborted:this.disposed,pendingSlices:[],age:this.nextAge++};return this.workers.push(i),i}runWorker(e){A(!e.running),A(e.currentPos<e.targetPos),e.running=!0,e.age=this.nextAge++,this.options.runWorker(e).catch(n=>{if(e.running=!1,e.pendingSlices.length>0)e.pendingSlices.forEach(r=>r.reject(n)),e.pendingSlices.length=0;else if(!e.aborted&&!this.disposed)if(this.options.handleUnhandledError)this.options.handleUnhandledError(n);else throw n}).finally(()=>{if(!e.running&&this.queuedReads.length>0){let n=0;for(let o=1;o<this.queuedReads.length;o++)this.queuedReads[o].age<this.queuedReads[n].age&&(n=o);let r=this.queuedReads[n],i=this.createWorker(r.hole.start,r.hole.end,r.strictTarget);if(!i)return;this.queuedReads.splice(n,1),i.pendingSlices=r.pendingSlices,this.runWorker(i)}})}supplyWorkerData(e,n){A(!e.aborted);let r=e.currentPos,i=r+n.length;this.insertIntoCache({start:r,end:i,bytes:n,view:ye(n),age:this.nextAge++}),e.currentPos+=n.length,e.currentPos>e.targetPos&&(e.targetPos=e.currentPos,this.checkQueuedReadsAgainstWorker(e));for(let o=0;o<e.pendingSlices.length;o++){let s=e.pendingSlices[o],l=Math.max(r,s.start),c=Math.min(i,s.start+s.bytes.length);l<c&&s.bytes.set(n.subarray(l-r,c-r),l-s.start);for(let d=0;d<s.holes.length;d++){let u=s.holes[d];r<=u.start&&i>u.start&&(u.start=i),u.end<=u.start&&(s.holes.splice(d,1),d--)}s.holes.length===0&&(s.resolve(s.bytes),e.pendingSlices.splice(o,1),o--)}for(let o=0;o<this.workers.length;o++){let s=this.workers[o];e===s||s.running||Zc(r,i,s.currentPos,s.targetPos)&&(this.workers.splice(o,1),this.options.onIdleWorkerRemoved?.(s),o--)}}supplyFileSize(e){A(this.fileSize===null),this.fileSize=e;for(let n of this.workers){n.targetPos=Math.min(n.targetPos,e),n.strictTarget=!0;for(let r=0;r<n.pendingSlices.length;r++){let i=n.pendingSlices[r];for(let o of i.holes)if(o.end>e){i.resolve(null),n.pendingSlices.splice(r,1),r--;break}}}for(let n=0;n<this.queuedReads.length;n++){let r=this.queuedReads[n];if(r.hole.start>=e){for(let i of r.pendingSlices)i.resolve(null);this.queuedReads.splice(n,1),n--}else if(r.hole.end>e){r.hole.end=e,r.strictTarget=!0;for(let i=0;i<r.pendingSlices.length;i++){let o=r.pendingSlices[i];o.start>=e&&(o.resolve(null),r.pendingSlices.splice(i,1),i--)}}}}signalWorkerStoppedRunning(e){e.running=!1,e.aborted||(e.pendingSlices.length=0)}onWorkerFinished(e){let n=this.workers.indexOf(e);A(n!==-1),e.running=!1,this.workers.splice(n,1),this.options.onIdleWorkerRemoved?.(e),this.fileSize===null&&this.supplyFileSize(e.currentPos);for(let r of e.pendingSlices)r.resolve(null)}insertIntoCache(e){if(this.options.maxCacheSize===0)return;let n=Fe(this.cache,e.start,r=>r.start)+1;if(n>0){let r=this.cache[n-1];if(r.end>=e.end)return;if(r.end>e.start){let i=new Uint8Array(e.end-r.start);i.set(r.bytes,0),i.set(e.bytes,e.start-r.start),this.currentCacheSize+=e.end-r.end,r.bytes=i,r.view=ye(i),r.end=e.end,n--,e=r}else this.cache.splice(n,0,e),this.currentCacheSize+=e.bytes.length}else this.cache.splice(n,0,e),this.currentCacheSize+=e.bytes.length;for(let r=n+1;r<this.cache.length;r++){let i=this.cache[r];if(e.end<=i.start)break;if(e.end>=i.end){this.cache.splice(r,1),this.currentCacheSize-=i.bytes.length,r--;continue}let o=new Uint8Array(i.end-e.start);o.set(e.bytes,0),o.set(i.bytes,i.start-e.start),this.currentCacheSize-=e.end-i.start,e.bytes=o,e.view=ye(o),e.end=i.end,this.cache.splice(r,1);break}for(;this.currentCacheSize>this.options.maxCacheSize;){let r=0,i=this.cache[0];for(let o=1;o<this.cache.length;o++){let s=this.cache[o];s.age<i.age&&(r=o,i=s)}if(this.currentCacheSize-i.bytes.length<=this.options.maxCacheSize)break;this.cache.splice(r,1),this.currentCacheSize-=i.bytes.length}}dispose(){for(let e of this.workers){for(let n of e.pendingSlices)n.reject(new Xe);e.pendingSlices.length=0,e.aborted=!0,e.running||this.options.onIdleWorkerRemoved?.(e)}for(let e of this.queuedReads)for(let n of e.pendingSlices)n.reject(new Xe);this.workers.length=0,this.cache.length=0,this.queuedReads.length=0,this.disposed=!0}};var _d=class extends cn{constructor(e,n,r){if(super(),this._ref=null,e._disposed)throw new Error("Cannot create a slice of a disposed source.");this._baseSource=e,this._offset=n,this._length=r??null}_getFileSize(){let e=this._baseSource._getFileSize();return e===void 0?this._length!==null?this._length:void 0:e===null?this._length!==null?this._length:null:_t(e-this._offset,0,this._length??1/0)}_read(e,n,r,i){if(this._length!==null&&n>this._length)return null;let o=this._baseSource._read(this._offset+e,this._offset+n,this._offset+r,this._offset+i),s=l=>l?(l.offset-=this._offset,l):null;return le(o)?o.then(s):s(o)}_dispose(){this._ref?.free()}ref(){return this._ref??=this._baseSource.ref(),super.ref()}};var ss=class{constructor(){this._isIsobmff=!1}},Qa=class extends ss{constructor(){super(...arguments),this._isIsobmff=!0}async _getMajorBrand(e){let n=e._reader.requestSlice(0,12);if(le(n)&&(n=await n),!n)return null;n.skip(4);let r=zt(n,4);return r!=="ftyp"&&r!=="styp"?null:zt(n,4)}_createDemuxer(e){return new Sd(e)}},Id=class extends Qa{async _canReadInput(e){let n=await this._getMajorBrand(e);if(n!==null)return n!=="qt  ";let r=0;for(let i=0;i<10;i++){let o=e._reader.requestSlice(r,8);if(le(o)&&(o=await o),!o)return!1;let s=q(o),l=8;if(s===1){let d=e._reader.requestSlice(r+8,8);if(le(d)&&(d=await d),!d)return!1;s=xt(d),l=16}if(s<l)return!1;let c=zt(o,4);if(c==="moof"||c==="sidx")return!0;if(c==="emsg"||c==="prft"||c==="free")r+=s;else return!1}return!1}get name(){return"MP4"}get mimeType(){return"video/mp4"}},Nd=class extends Qa{async _canReadInput(e){return await this._getMajorBrand(e)==="qt  "}get name(){return"QuickTime File Format"}get mimeType(){return"video/quicktime"}};var Pd=new Id,Pm=new Nd;var m1=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(`${e}, when provided, must be an object.`);if(t.isobmff!==void 0){if(!t.isobmff||typeof t.isobmff!="object")throw new TypeError(`${e}.isobmff, when provided, must be an object.`);if(t.isobmff.resolveKeyId!==void 0&&typeof t.isobmff.resolveKeyId!="function")throw new TypeError(`${e}.isobmff.resolveKeyId, when provided, must be a function.`)}if(t.hls!==void 0){if(!t.hls||typeof t.hls!="object")throw new TypeError(`${e}.hls, when provided, must be an object.`);if(t.hls.offsetTimestampsByDateTime!==void 0&&typeof t.hls.offsetTimestampsByDateTime!="boolean")throw new TypeError(`${e}.hls.offsetTimestampsByDateTime, when provided, must be a boolean.`)}};var kS=function(t,e,n){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,i;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],n&&(i=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");i&&(r=function(){try{i.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:r,async:n})}else n&&t.stack.push({async:!0});return e},AS=(function(t){return function(e){function n(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,i=0;function o(){for(;r=e.stack.pop();)try{if(!r.async&&i===1)return i=0,e.stack.push(r),Promise.resolve().then(o);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(s).then(o,function(l){return n(l),o()})}else i|=1}catch(l){n(l)}if(i===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,n){var r=new Error(n);return r.name="SuppressedError",r.error=t,r.suppressed=e,r});Xo();var h1=-1/0,g1=-1/0,Za=null;typeof FinalizationRegistry<"u"&&(Za=new FinalizationRegistry(t=>{let e=performance.now();t.type==="video"?(e-h1>=1e3&&(ce._error("A VideoSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your VideoSamples as soon as you're done using them."),h1=e),typeof VideoFrame<"u"&&t.data instanceof VideoFrame&&t.data.close()):(e-g1>=1e3&&(ce._error("An AudioSample was garbage collected without first being closed. For proper resource management, make sure to call close() on all your AudioSamples as soon as you're done using them."),g1=e),typeof AudioData<"u"&&t.data instanceof AudioData&&t.data.close())}));var Sr=class{constructor(){this._referenceCount=0,this._lastAllocationBuffer=null}},Mm=["I420","I420P10","I420P12","I420A","I420AP10","I420AP12","I422","I422P10","I422P12","I422A","I422AP10","I422AP12","I444","I444P10","I444P12","I444A","I444AP10","I444AP12","NV12","RGBA","RGBX","BGRA","BGRX"],SS=new Set(Mm),dn=class t{get codedWidth(){return this.visibleRect.width}get codedHeight(){return this.visibleRect.height}get displayWidth(){return this.rotation%180===0?this.squarePixelWidth:this.squarePixelHeight}get displayHeight(){return this.rotation%180===0?this.squarePixelHeight:this.squarePixelWidth}get microsecondTimestamp(){return Math.trunc(Gn*this.timestamp)}get microsecondDuration(){return Math.trunc(Gn*this.duration)}get hasAlpha(){return this.format&&this.format.includes("A")}constructor(e,n){if(this._closed=!1,e instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&e instanceof SharedArrayBuffer||ArrayBuffer.isView(e)){if(!n||typeof n!="object")throw new TypeError("init must be an object.");if(n.format===void 0||!SS.has(n.format))throw new TypeError("init.format must be one of: "+Mm.join(", "));if(!Number.isInteger(n.codedWidth)||n.codedWidth<=0)throw new TypeError("init.codedWidth must be a positive integer.");if(!Number.isInteger(n.codedHeight)||n.codedHeight<=0)throw new TypeError("init.codedHeight must be a positive integer.");if(n.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(n.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(!Number.isFinite(n.timestamp))throw new TypeError("init.timestamp must be a number.");if(n.duration!==void 0&&(!Number.isFinite(n.duration)||n.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(n.layout!==void 0){if(!Array.isArray(n.layout))throw new TypeError("init.layout, when provided, must be an array.");for(let o of n.layout){if(!o||typeof o!="object"||Array.isArray(o))throw new TypeError("Each entry in init.layout must be an object.");if(!Number.isInteger(o.offset)||o.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(o.stride)||o.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(n.visibleRect!==void 0&&nd(n.visibleRect,"init.visibleRect"),n.displayWidth!==void 0&&(!Number.isInteger(n.displayWidth)||n.displayWidth<=0))throw new TypeError("init.displayWidth, when provided, must be a positive integer.");if(n.displayHeight!==void 0&&(!Number.isInteger(n.displayHeight)||n.displayHeight<=0))throw new TypeError("init.displayHeight, when provided, must be a positive integer.");if(n.displayWidth!==void 0!=(n.displayHeight!==void 0))throw new TypeError("init.displayWidth and init.displayHeight must be either both provided or both omitted.");this.format=n.format,this.rotation=n.rotation??0,this.flip=n.flip??!1,this.timestamp=n.timestamp,this.duration=n.duration??0;let r=n.layout??CS(n.format,n.codedWidth,n.codedHeight),i=n.colorSpace??null;i===null&&(this.format==="RGBA"||this.format==="RGBX"||this.format==="BGRA"||this.format==="BGRX"?i={primaries:"bt709",transfer:"iec61966-2-1",matrix:"rgb",fullRange:!0}:i={primaries:"bt709",transfer:"bt709",matrix:"bt709",fullRange:!1}),this.visibleRect={left:n.visibleRect?.left??0,top:n.visibleRect?.top??0,width:n.visibleRect?.width??n.codedWidth,height:n.visibleRect?.height??n.codedHeight},n.displayWidth!==void 0?(this.squarePixelWidth=this.rotation%180===0?n.displayWidth:n.displayHeight,this.squarePixelHeight=this.rotation%180===0?n.displayHeight:n.displayWidth):(this.squarePixelWidth=this.visibleRect.width,this.squarePixelHeight=this.visibleRect.height),this._data=n._doNotCopy?Qe(e):Qe(e).slice(),this._layout=r,this.colorSpace=new Ja(i)}else if(typeof VideoFrame<"u"&&e instanceof VideoFrame){if(n?.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(n?.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(n?.timestamp!==void 0&&!Number.isFinite(n?.timestamp))throw new TypeError("init.timestamp, when provided, must be a number.");if(n?.duration!==void 0&&(!Number.isFinite(n.duration)||n.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");n?.visibleRect!==void 0&&nd(n.visibleRect,"init.visibleRect"),this._data=e,this._layout=null,this.format=e.format,this.visibleRect={left:e.visibleRect?.x??0,top:e.visibleRect?.y??0,width:e.visibleRect?.width??e.codedWidth,height:e.visibleRect?.height??e.codedHeight},this.rotation=n?.rotation??0,this.flip=n?.flip??!1,this.squarePixelWidth=e.displayWidth,this.squarePixelHeight=e.displayHeight,this.timestamp=n?.timestamp??e.timestamp/1e6,this.duration=n?.duration??(e.duration??0)/1e6,this.colorSpace=new Ja(e.colorSpace)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof SVGImageElement<"u"&&e instanceof SVGImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){if(!n||typeof n!="object")throw new TypeError("init must be an object.");if(n.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(n.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(!Number.isFinite(n.timestamp))throw new TypeError("init.timestamp must be a number.");if(n.duration!==void 0&&(!Number.isFinite(n.duration)||n.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(n.visibleRect!==void 0&&nd(n.visibleRect,"init.visibleRect"),typeof VideoFrame<"u")return new t(new VideoFrame(e,{timestamp:Math.trunc(n.timestamp*Gn),duration:Math.trunc((n.duration??0)*Gn)||void 0,visibleRect:n.visibleRect&&{x:n.visibleRect.left,y:n.visibleRect.top,width:n.visibleRect.width,height:n.visibleRect.height}}),n);let r=0,i=0;if("naturalWidth"in e?(r=e.naturalWidth,i=e.naturalHeight):"videoWidth"in e?(r=e.videoWidth,i=e.videoHeight):"width"in e&&(r=Number(e.width),i=Number(e.height)),!r||!i)throw new TypeError("Could not determine dimensions.");let o=n.visibleRect??{left:0,top:0,width:r,height:i},s=new OffscreenCanvas(o.width,o.height),l=s.getContext("2d",{alpha:$i(),willReadFrequently:!0});if(!l)throw new Error("OffscreenCanvas must have support for the '2d' context in order to create a VideoSample from this data.");l.drawImage(e,-o.left,-o.top),this._data=s,this._layout=null,this.format="RGBX",this.visibleRect={left:0,top:0,width:o.width,height:o.height},this.squarePixelWidth=o.width,this.squarePixelHeight=o.height,this.rotation=n.rotation??0,this.flip=n.flip??!1,this.timestamp=n.timestamp,this.duration=n.duration??0,this.colorSpace=new Ja({matrix:"rgb",primaries:"bt709",transfer:"iec61966-2-1",fullRange:!0})}else if(e instanceof Sr){if(!n||typeof n!="object")throw new TypeError("init must be an object.");if(n.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError("init.rotation, when provided, must be 0, 90, 180, or 270.");if(n.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("init.flip, when provided, must be a boolean.");if(!Number.isFinite(n.timestamp))throw new TypeError("init.timestamp must be a number.");if(n.duration!==void 0&&(!Number.isFinite(n.duration)||n.duration<0))throw new TypeError("init.duration, when provided, must be a non-negative number.");if(this._data=e,e._referenceCount++,this.format=e.getFormat(),this.format!==null&&!Mm.includes(this.format))throw new TypeError("getFormat() must return a VideoSamplePixelFormat or null.");if(this.visibleRect={left:0,top:0,width:e.getCodedWidth(),height:e.getCodedHeight()},!Number.isInteger(this.visibleRect.width)||this.visibleRect.width<=0)throw new TypeError("getCodedWidth() must return a positive integer.");if(!Number.isInteger(this.visibleRect.height)||this.visibleRect.height<=0)throw new TypeError("getCodedHeight() must return a positive integer.");if(this.squarePixelWidth=e.getSquarePixelWidth(),!Number.isInteger(this.squarePixelWidth)||this.squarePixelWidth<=0)throw new TypeError("getSquarePixelWidth() must return a positive integer.");if(this.squarePixelHeight=e.getSquarePixelHeight(),!Number.isInteger(this.squarePixelHeight)||this.squarePixelHeight<=0)throw new TypeError("getSquarePixelHeight() must return a positive integer.");this.rotation=n.rotation??0,this.flip=n.flip??!1,this.timestamp=n.timestamp,this.duration=n.duration??0,this.colorSpace=e.getColorSpace()}else throw new TypeError("Invalid data type: Must be a BufferSource, CanvasImageSource, or VideoSampleResource.");this.encodeOptions=n?.encodeOptions??{},this.pixelAspectRatio=ci({num:this.squarePixelWidth*this.codedHeight,den:this.squarePixelHeight*this.codedWidth}),Za?.register(this,{type:"video",data:this._data},this)}clone(){if(this._closed)throw new Error("VideoSample is closed.");return A(this._data!==null),this._data instanceof Sr?new t(this._data,{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,flip:this.flip,encodeOptions:this.encodeOptions}):Xa(this._data)?new t(this._data.clone(),{timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,flip:this.flip,encodeOptions:this.encodeOptions}):this._data instanceof Uint8Array?(A(this._layout),new t(this._data,{format:this.format,layout:this._layout,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,flip:this.flip,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions,_doNotCopy:!0})):new t(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.timestamp,duration:this.duration,colorSpace:this.colorSpace,rotation:this.rotation,flip:this.flip,visibleRect:this.visibleRect,displayWidth:this.displayWidth,displayHeight:this.displayHeight,encodeOptions:this.encodeOptions})}close(){this._closed||(Za?.unregister(this),this._data instanceof Sr?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Xa(this._data)?this._data.close():this._data=null,this._closed=!0)}allocationSize(e={}){if(b1(e),this._closed)throw new Error("VideoSample is closed.");if((e.format??this.format)==null)throw new Error("Cannot get allocation size when format is null.");return Xa(this._data)?this._data.allocationSize(e):x1(this,e).allocationSize}async copyTo(e,n={}){if(!Ko(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(b1(n),this._closed)throw new Error("VideoSample is closed.");if((n.format??this.format)==null)throw new Error("Cannot copy video sample data when format is null.");if(A(this._data!==null),Xa(this._data))return this._data.copyTo(e,n);if(n.format&&!["RGBA","RGBX","BGRA","BGRX"].includes(this.format)&&["RGBA","RGBX","BGRA","BGRX"].includes(n.format))if(this._data instanceof Sr){let d={stack:[],error:void 0,hasError:!1};try{let u=kS(d,await this._data.toRgbSample({timestamp:this.timestamp,duration:this.duration,rotation:this.rotation,flip:this.flip},n.colorSpace??"srgb"),!1);if(!(u instanceof t))throw new TypeError("toRgbSample() must return a VideoSample.");if(!["RGBA","RGBX","BGRA","BGRX"].includes(u.format))throw new Error(`Sample returned by toRgbSample was expected to have an RGB format, got '${u.format}' instead.`);return await u.copyTo(e,n)}catch(u){d.error=u,d.hasError=!0}finally{AS(d)}}else{if(typeof VideoFrame>"u")throw new Error("For this sample, converting from a non-RGB to an RGB format requires VideoFrame to be defined.");let d=this.toVideoFrame(),u=await d.copyTo(e,n);return d.close(),u}let r=x1(this,n);A(this.format);let i=Qe(e);if(i.byteLength<r.allocationSize)throw new TypeError(`Destination buffer too small. Required: ${r.allocationSize}, Available: ${i.byteLength}`);let o=Bd(this.format),s;if(this._data instanceof Sr){let d=this._data.getDataPlanes();if(le(d)&&(d=await d),!Array.isArray(d)||d.some(u=>!(u.data instanceof Uint8Array)||!Number.isInteger(u.stride)||u.stride<0))throw new TypeError('getDataPlanes() must return an array of objects with a Uint8Array "data" property and a non-negative integer "stride" property.');s=d}else if(this._data instanceof Uint8Array)A(this._layout),A(this._layout.length===o.length),s=this._layout.map((d,u)=>{let p=Math.ceil(this.codedHeight/o[u].heightDivisor);return{data:this._data.subarray(d.offset,d.offset+d.stride*p),stride:d.stride}});else{let u=this._data.getContext("2d");A(u);let p=u.getImageData(0,0,this.codedWidth,this.codedHeight);s=[{data:Qe(p.data),stride:4*this.codedWidth}]}let l=[],c=o.length;for(let d=0;d<c;d++){let u=r.computedLayouts[d],p=s[d].stride,f=s[d].data,m=u.sourceTop*p;m+=u.sourceLeftBytes;let h=u.destinationOffset,v=u.sourceWidthBytes,x={offset:h,stride:u.destinationStride};for(let y=0;y<u.sourceHeight;y++){if(m+v>f.byteLength)throw new Error("Source buffer OOB read.");if(h+v>i.byteLength)throw new Error("Destination buffer OOB write.");let g=f.subarray(m,m+v);i.set(g,h),m+=p,h+=u.destinationStride}l.push(x)}if(n.format!==void 0){let d=this.format.startsWith("RGB")!==n.format.startsWith("RGB"),u=this.format.includes("X")&&n.format.includes("A");if(d||u)for(let p=0;p<r.allocationSize;p+=4){if(d){let f=i[p],m=i[p+2];i[p]=m,i[p+2]=f}u&&(i[p+3]=255)}}return l}toVideoFrame(){if(this._closed)throw new Error("VideoSample is closed.");if(A(this._data!==null),this._data instanceof Sr){if(this.format===null)throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if format is null.");let e=this._data.getDataPlanes();if(le(e))throw new Error("Cannot convert a VideoSampleResource-backed VideoSample to VideoFrame if getDataPlanes() returns a promise.");let n=e.reduce((s,l)=>s+l.data.byteLength,0),r=new Uint8Array(n),i=0,o=[];for(let s of e)r.set(s.data,i),o.push(i),i+=s.data.byteLength;return new VideoFrame(r,{format:this.format,layout:e.map((s,l)=>({offset:o[l],stride:s.stride})),codedWidth:this.codedWidth,codedHeight:this.codedHeight,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})}else return Xa(this._data)?new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0}):this._data instanceof Uint8Array?(A(this._layout),new VideoFrame(this._data,{format:this.format,codedWidth:this.codedWidth,codedHeight:this.codedHeight,layout:this._layout,timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0,colorSpace:this.colorSpace,visibleRect:this.visibleRect,displayWidth:this.squarePixelWidth,displayHeight:this.squarePixelHeight})):new VideoFrame(this._data,{timestamp:this.microsecondTimestamp,duration:this.microsecondDuration||void 0})}draw(e,n,r,i,o,s,l,c,d){let u=0,p=0,f=this.displayWidth,m=this.displayHeight,h=0,v=0,x=this.displayWidth,y=this.displayHeight;if(s!==void 0?(u=n,p=r,f=i,m=o,h=s,v=l,c!==void 0?(x=c,y=d):(x=f,y=m)):(h=n,v=r,i!==void 0&&(x=i,y=o)),!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!Number.isFinite(u))throw new TypeError("sx must be a number.");if(!Number.isFinite(p))throw new TypeError("sy must be a number.");if(!Number.isFinite(f)||f<0)throw new TypeError("sWidth must be a non-negative number.");if(!Number.isFinite(m)||m<0)throw new TypeError("sHeight must be a non-negative number.");if(!Number.isFinite(h))throw new TypeError("dx must be a number.");if(!Number.isFinite(v))throw new TypeError("dy must be a number.");if(!Number.isFinite(x)||x<0)throw new TypeError("dWidth must be a non-negative number.");if(!Number.isFinite(y)||y<0)throw new TypeError("dHeight must be a non-negative number.");if(this._closed)throw new Error("VideoSample is closed.");({sx:u,sy:p,sWidth:f,sHeight:m}=this._unmapSourceRegion(u,p,f,m,this.rotation,this.flip));let g=this.toCanvasImageSource();e.save();let b=h+x/2,w=v+y/2;e.translate(b,w),this.flip&&e.scale(-1,1),e.rotate(this.rotation*Math.PI/180);let k=this.rotation%180===0?1:x/y;e.scale(1/k,k),e.drawImage(g,u,p,f,m,-x/2,-y/2,x,y),e.restore()}drawWithFit(e,n){if(!(typeof CanvasRenderingContext2D<"u"&&e instanceof CanvasRenderingContext2D||typeof OffscreenCanvasRenderingContext2D<"u"&&e instanceof OffscreenCanvasRenderingContext2D))throw new TypeError("context must be a CanvasRenderingContext2D or OffscreenCanvasRenderingContext2D.");if(!n||typeof n!="object")throw new TypeError("options must be an object.");if(!["fill","contain","cover"].includes(n.fit))throw new TypeError("options.fit must be 'fill', 'contain', or 'cover'.");if(n.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180, or 270.");if(n.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("options.flip, when provided, must be a boolean.");n.crop!==void 0&&as(n.crop,"options.");let r=e.canvas.width,i=e.canvas.height,o=n.rotation??this.rotation,s=n.flip??this.flip,[l,c]=o%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],d=n.crop;d&&(d=Od(d,l,c));let u,p,f,m,{sx:h,sy:v,sWidth:x,sHeight:y}=this._unmapSourceRegion(n.crop?.left??0,n.crop?.top??0,n.crop?.width??l,n.crop?.height??c,o,s);if(n.fit==="fill")u=0,p=0,f=r,m=i;else{let[b,w]=n.crop?[n.crop.width,n.crop.height]:[l,c],k=n.fit==="contain"?Math.min(r/b,i/w):Math.max(r/b,i/w);f=b*k,m=w*k,u=(r-f)/2,p=(i-m)/2}e.save();let g=o%180===0?1:f/m;e.translate(r/2,i/2),s&&e.scale(-1,1),e.rotate(o*Math.PI/180),e.scale(1/g,g),e.translate(-r/2,-i/2),e.drawImage(this.toCanvasImageSource(),h,v,x,y,u,p,f,m),e.restore()}_unmapSourceRegion(e,n,r,i,o,s){return s&&(e=(o%180===0?this.squarePixelWidth:this.squarePixelHeight)-e-r),o===90?[e,n,r,i]=[n,this.squarePixelHeight-e-r,i,r]:o===180?[e,n]=[this.squarePixelWidth-e-r,this.squarePixelHeight-n-i]:o===270&&([e,n,r,i]=[this.squarePixelWidth-n-i,e,i,r]),{sx:e,sy:n,sWidth:r,sHeight:i}}_drawWithFitAndMipmapping(e,n,r){let i=e.width,o=e.height,[s,l]=r.rotation%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],c=r.crop?r.crop.width:s,d=r.crop?r.crop.height:l,u=0;2*i<c&&2*o<d&&(u=Math.floor(Math.log2(Math.min(c/i,d/o))));let p=i*2**u,f=o*2**u,{canvas:m,context:h,isNew:v}=u>0?v1(p,f):{canvas:e,context:n,isNew:r.targetIsFresh};h.imageSmoothingQuality="high",r.fillBlack?(h.fillStyle="black",h.fillRect(0,0,p,f)):v||h.clearRect(0,0,p,f),this.drawWithFit(h,{fit:r.fit,rotation:r.rotation,flip:r.flip,crop:r.crop}),h.globalCompositeOperation="copy";for(let x=u;x>1;x--){let y=i*2**x,g=o*2**x;h.drawImage(m,0,0,y,g,0,0,y/2,g/2)}h.globalCompositeOperation="source-over",u>0&&(n.imageSmoothingQuality="high",n.globalCompositeOperation="copy",n.drawImage(m,0,0,2*i,2*o,0,0,i,o),n.globalCompositeOperation="source-over")}toCanvasImageSource(){if(this._closed)throw new Error("VideoSample is closed.");if(A(this._data!==null),this._data instanceof Sr||this._data instanceof Uint8Array){let e=this.toVideoFrame();return queueMicrotask(()=>e.close()),e}else return this._data}async transform(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.width!==void 0&&(!Number.isInteger(e.width)||e.width<=0))throw new TypeError("options.width, when provided, must be a positive integer.");if(e.height!==void 0&&(!Number.isInteger(e.height)||e.height<=0))throw new TypeError("options.height, when provided, must be a positive integer.");if(e.roundDimensionsTo!==void 0&&(!Number.isInteger(e.roundDimensionsTo)||e.roundDimensionsTo<=0))throw new TypeError("options.roundDimensionsTo, when provided, must be a positive integer.");if(e.fit!==void 0&&!["fill","contain","cover"].includes(e.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(e.width!==void 0&&e.height!==void 0&&e.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(e.rotate!==void 0&&![0,90,180,270].includes(e.rotate))throw new TypeError("options.rotate, when provided, must be 0, 90, 180 or 270.");if(e.flip!==void 0&&typeof e.flip!="boolean")throw new TypeError("options.flip, when provided, must be a boolean.");if(e.crop!==void 0&&as(e.crop,"options."),e.alpha!==void 0&&!["keep","discard"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'keep' or 'discard'.");let{rotation:n,flip:r}=qv(this.rotation,this.flip,e.rotate??0,e.flip??!1),[i,o]=n%180===0?[this.squarePixelWidth,this.squarePixelHeight]:[this.squarePixelHeight,this.squarePixelWidth],s=e.crop;s&&(s=Od(s,i,o));let l=s?s.width:i,c=s?s.height:o,d=l/c,u,p;e.width!==void 0&&e.height===void 0?(u=e.width,p=u/d):e.width===void 0&&e.height!==void 0?(p=e.height,u=p*d):e.width!==void 0&&e.height!==void 0?(u=e.width,p=e.height):(u=l,p=c),u=Xc(u,e.roundDimensionsTo??1),p=Xc(p,e.roundDimensionsTo??1);let f={width:u,height:p,fit:e.fit??"fill",rotation:n,flip:r,crop:s??{left:0,top:0,width:i,height:o},alpha:e.alpha??"keep"};for(let x of ES){let y=x(this,f);if(le(y)&&(y=await y),y!==null)return y}let{canvas:m,context:h,isNew:v}=v1(f.width,f.height);return this._drawWithFitAndMipmapping(m,h,{fit:f.fit,rotation:f.rotation,flip:f.flip,crop:f.crop,targetIsFresh:v,fillBlack:f.alpha==="discard"}),new t(m,{timestamp:this.timestamp,duration:this.duration,rotation:0,flip:!1})}setRotation(e){if(![0,90,180,270].includes(e))throw new TypeError("newRotation must be 0, 90, 180, or 270.");this.rotation=e}setFlip(e){if(typeof e!="boolean")throw new TypeError("newFlip must be a boolean.");this.flip=e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}setDuration(e){if(!Number.isFinite(e)||e<0)throw new TypeError("newDuration must be a non-negative number.");this.duration=e}setEncodeOptions(e){if(!e||typeof e!="object")throw new TypeError("newEncodeOptions must be an object.");this.encodeOptions=e}[Symbol.dispose](){this.close()}},ES=[];var TS=3,Ka=[],y1=0,v1=(t,e)=>{for(let i of Ka)if(i.canvas.width===t&&i.canvas.height===e)return i.age=y1++,{canvas:i.canvas,context:i.context,isNew:!1};let n;if(typeof OffscreenCanvas<"u")n=new OffscreenCanvas(t,e);else{if(typeof window>"u"||typeof document>"u")throw new Error("Cannot transform VideoSamples in this environment. Either run in an environment with OffscreenCanvas or HTMLCanvasElement, or supply a custom VideoSample transformer using registerVideoSampleTransformer().");n=document.createElement("canvas"),n.width=t,n.height=e}let r=n.getContext("2d",{alpha:!0,willReadFrequently:!1});if(!r)throw new Error("The '2d' canvas context is required to transform VideoSamples. Register a custom transformer using registerVideoSampleTransformer to work around this limitation.");return Ka.length>=TS&&Ka.splice(td(Ka,i=>i.age),1),Ka.push({canvas:n,context:r,age:y1++}),{canvas:n,context:r,isNew:!0}},Ja=class{constructor(e){if(e!==void 0){if(!e||typeof e!="object")throw new TypeError("init.colorSpace, when provided, must be an object.");let n=Object.keys(mr);if(e.primaries!=null&&!n.includes(e.primaries))throw new TypeError(`init.colorSpace.primaries, when provided, must be one of ${n.join(", ")}.`);let r=Object.keys(hr);if(e.transfer!=null&&!r.includes(e.transfer))throw new TypeError(`init.colorSpace.transfer, when provided, must be one of ${r.join(", ")}.`);let i=Object.keys(gr);if(e.matrix!=null&&!i.includes(e.matrix))throw new TypeError(`init.colorSpace.matrix, when provided, must be one of ${i.join(", ")}.`);if(e.fullRange!=null&&typeof e.fullRange!="boolean")throw new TypeError("init.colorSpace.fullRange, when provided, must be a boolean.")}this.primaries=e?.primaries??null,this.transfer=e?.transfer??null,this.matrix=e?.matrix??null,this.fullRange=e?.fullRange??null}toJSON(){return{primaries:this.primaries,transfer:this.transfer,matrix:this.matrix,fullRange:this.fullRange}}},Xa=t=>typeof VideoFrame<"u"&&t instanceof VideoFrame,Od=(t,e,n)=>{let r=Math.min(t.left,e),i=Math.min(t.top,n),o=Math.min(t.width,e-r),s=Math.min(t.height,n-i);return A(o>=0),A(s>=0),{left:r,top:i,width:o,height:s}},as=(t,e)=>{if(!t||typeof t!="object")throw new TypeError(e+"crop, when provided, must be an object.");if(!Number.isInteger(t.left)||t.left<0)throw new TypeError(e+"crop.left must be a non-negative integer.");if(!Number.isInteger(t.top)||t.top<0)throw new TypeError(e+"crop.top must be a non-negative integer.");if(!Number.isInteger(t.width)||t.width<0)throw new TypeError(e+"crop.width must be a non-negative integer.");if(!Number.isInteger(t.height)||t.height<0)throw new TypeError(e+"crop.height must be a non-negative integer.")},b1=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.colorSpace!==void 0&&!["display-p3","srgb"].includes(t.colorSpace))throw new TypeError("options.colorSpace, when provided, must be 'display-p3' or 'srgb'.");if(t.format!==void 0&&typeof t.format!="string")throw new TypeError("options.format, when provided, must be a string.");if(t.layout!==void 0){if(!Array.isArray(t.layout))throw new TypeError("options.layout, when provided, must be an array.");for(let e of t.layout){if(!e||typeof e!="object")throw new TypeError("Each entry in options.layout must be an object.");if(!Number.isInteger(e.offset)||e.offset<0)throw new TypeError("plane.offset must be a non-negative integer.");if(!Number.isInteger(e.stride)||e.stride<0)throw new TypeError("plane.stride must be a non-negative integer.")}}if(t.rect!==void 0){if(!t.rect||typeof t.rect!="object")throw new TypeError("options.rect, when provided, must be an object.");if(t.rect.x!==void 0&&(!Number.isInteger(t.rect.x)||t.rect.x<0))throw new TypeError("options.rect.x, when provided, must be a non-negative integer.");if(t.rect.y!==void 0&&(!Number.isInteger(t.rect.y)||t.rect.y<0))throw new TypeError("options.rect.y, when provided, must be a non-negative integer.");if(t.rect.width!==void 0&&(!Number.isInteger(t.rect.width)||t.rect.width<0))throw new TypeError("options.rect.width, when provided, must be a non-negative integer.");if(t.rect.height!==void 0&&(!Number.isInteger(t.rect.height)||t.rect.height<0))throw new TypeError("options.rect.height, when provided, must be a non-negative integer.")}},CS=(t,e,n)=>{let r=Bd(t),i=[],o=0;for(let s of r){let l=Math.ceil(e/s.widthDivisor),c=Math.ceil(n/s.heightDivisor),d=l*s.sampleBytes,u=d*c;i.push({offset:o,stride:d}),o+=u}return i},Bd=t=>{let e=(n,r,i,o,s)=>{let l=[{sampleBytes:n,widthDivisor:1,heightDivisor:1},{sampleBytes:r,widthDivisor:i,heightDivisor:o},{sampleBytes:r,widthDivisor:i,heightDivisor:o}];return s&&l.push({sampleBytes:n,widthDivisor:1,heightDivisor:1}),l};switch(t){case"I420":return e(1,1,2,2,!1);case"I420P10":case"I420P12":return e(2,2,2,2,!1);case"I420A":return e(1,1,2,2,!0);case"I420AP10":case"I420AP12":return e(2,2,2,2,!0);case"I422":return e(1,1,2,1,!1);case"I422P10":case"I422P12":return e(2,2,2,1,!1);case"I422A":return e(1,1,2,1,!0);case"I422AP10":case"I422AP12":return e(2,2,2,1,!0);case"I444":return e(1,1,1,1,!1);case"I444P10":case"I444P12":return e(2,2,1,1,!1);case"I444A":return e(1,1,1,1,!0);case"I444AP10":case"I444AP12":return e(2,2,1,1,!0);case"NV12":return[{sampleBytes:1,widthDivisor:1,heightDivisor:1},{sampleBytes:2,widthDivisor:2,heightDivisor:2}];case"RGBA":case"RGBX":case"BGRA":case"BGRX":return[{sampleBytes:4,widthDivisor:1,heightDivisor:1}];default:Ct(t),A(!1)}},x1=(t,e)=>{let n={left:0,top:0,width:t.codedWidth,height:t.codedHeight},r=e.rect,i=_S(n,r,t.codedWidth,t.codedHeight,t.format),o=e.layout,s;if(!e.format||e.format===t.format)s=t.format;else if(["RGBA","RGBX","BGRA","BGRX"].includes(e.format))s=e.format;else throw new Error("NotSupportedError: Invalid destination format.");return NS(i,s,o)},_S=(t,e,n,r,i)=>{let o={...t};if(e!==void 0){if(e.width===0||e.height===0)throw new TypeError("visibleRect dimensions cannot be zero.");if((e.x||0)+(e.width||0)>n)throw new TypeError("visibleRect exceeds codedWidth.");if((e.y||0)+(e.height||0)>r)throw new TypeError("visibleRect exceeds codedHeight.");o.x=e.x||0,o.y=e.y||0,o.width=e.width||0,o.height=e.height||0}if(!IS(i,o))throw new TypeError("visibleRect alignment is invalid for the format.");return o},IS=(t,e)=>{if(t===null)return!0;let n=Bd(t);for(let r=0;r<n.length;r++){let i=n[r],o=i.widthDivisor,s=i.heightDivisor;if((e.x||0)%o!==0||(e.y||0)%s!==0)return!1}return!0},NS=(t,e,n)=>{let r=Bd(e),i=r.length;if(n!==void 0&&n.length!==i)throw new TypeError(`Layout must have ${i} planes.`);let o=0,s=[],l=[];for(let c=0;c<i;c++){let d=r[c],u=d.sampleBytes,p=d.widthDivisor,f=d.heightDivisor,m={destinationOffset:0,destinationStride:0,sourceTop:0,sourceHeight:0,sourceLeftBytes:0,sourceWidthBytes:0};if(m.sourceTop=Math.ceil(Math.trunc(t.y||0)/f),m.sourceHeight=Math.ceil(Math.trunc(t.height||0)/f),m.sourceLeftBytes=Math.floor(Math.trunc(t.x||0)/p)*u,m.sourceWidthBytes=Math.floor(Math.trunc(t.width||0)/p)*u,n!==void 0){let x=n[c];if(x.stride<m.sourceWidthBytes)throw new TypeError(`Stride for plane ${c} is too small.`);m.destinationOffset=x.offset,m.destinationStride=x.stride}else m.destinationOffset=o,m.destinationStride=m.sourceWidthBytes;let v=m.destinationStride*m.sourceHeight+m.destinationOffset;if(v>4294967295)throw new TypeError("Allocation size exceeds limit.");l.push(v),o=Math.max(o,v);for(let x=0;x<c;x++){let y=s[x];if(!(l[c]<=y.destinationOffset||l[x]<=m.destinationOffset))throw new TypeError("Planes overlap.")}s.push(m)}return{allocationSize:o,computedLayouts:s}},Md=new Set(["f32","f32-planar","s16","s16-planar","s32","s32-planar","u8","u8-planar"]),ji=class{constructor(){this._referenceCount=0}},Qi=class t{get microsecondTimestamp(){return Math.trunc(Gn*this.timestamp)}get microsecondDuration(){return Math.trunc(Gn*this.duration)}constructor(e){if(this._closed=!1,Ya(e)){if(e.format===null)throw new TypeError("AudioData with null format is not supported.");this._data=e,this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=e.numberOfFrames,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp/1e6,this.duration=e.numberOfFrames/e.sampleRate}else if(e instanceof ji){if(this._data=e,e._referenceCount++,this.format=e.getFormat(),!Md.has(this.format))throw new TypeError("getFormat() must return an AudioSampleFormat.");if(this.sampleRate=e.getSampleRate(),!Number.isInteger(this.sampleRate)||this.sampleRate<=0)throw new TypeError("getSampleRate() must return a positive integer.");if(this.numberOfFrames=e.getNumberOfFrames(),!Number.isInteger(this.numberOfFrames)||this.numberOfFrames<0)throw new TypeError("getNumberOfFrames() must return a non-negative integer.");if(this.numberOfChannels=e.getNumberOfChannels(),!Number.isInteger(this.numberOfChannels)||this.numberOfChannels<=0)throw new TypeError("getNumberOfChannels() must return a positive integer.");if(this.timestamp=e.getTimestamp(),!Number.isFinite(this.timestamp))throw new TypeError("getTimestamp() must return a finite number.");this.duration=this.numberOfFrames/this.sampleRate}else{if(!e||typeof e!="object")throw new TypeError("Invalid AudioDataInit: must be an object.");if(!Md.has(e.format))throw new TypeError("Invalid AudioDataInit: invalid format.");if(!Number.isFinite(e.sampleRate)||e.sampleRate<=0)throw new TypeError("Invalid AudioDataInit: sampleRate must be > 0.");if(!Number.isInteger(e.numberOfChannels)||e.numberOfChannels===0)throw new TypeError("Invalid AudioDataInit: numberOfChannels must be an integer > 0.");if(!Number.isFinite(e?.timestamp))throw new TypeError("init.timestamp must be a number.");let n=e.data.byteLength/(pi(e.format)*e.numberOfChannels);if(!Number.isInteger(n))throw new TypeError("Invalid AudioDataInit: data size is not a multiple of frame size.");this.format=e.format,this.sampleRate=e.sampleRate,this.numberOfFrames=n,this.numberOfChannels=e.numberOfChannels,this.timestamp=e.timestamp,this.duration=n/e.sampleRate;let r;if(e.data instanceof ArrayBuffer)r=new Uint8Array(e.data);else if(ArrayBuffer.isView(e.data))r=new Uint8Array(e.data.buffer,e.data.byteOffset,e.data.byteLength);else throw new TypeError("Invalid AudioDataInit: data is not a BufferSource.");let i=this.numberOfFrames*this.numberOfChannels*pi(this.format);if(r.byteLength<i)throw new TypeError("Invalid AudioDataInit: insufficient data size.");this._data=r}Za?.register(this,{type:"audio",data:this._data},this)}allocationSize(e){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(e.planeIndex)||e.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(e.format!==void 0&&!Md.has(e.format))throw new TypeError("Invalid format.");if(e.frameOffset!==void 0&&(!Number.isInteger(e.frameOffset)||e.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(e.frameCount!==void 0&&(!Number.isInteger(e.frameCount)||e.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");let n=e.format??this.format,r=e.frameOffset??0;if(r>=this.numberOfFrames)throw new RangeError("frameOffset out of range");let i=e.frameCount!==void 0?e.frameCount:this.numberOfFrames-r;if(i>this.numberOfFrames-r)throw new RangeError("frameCount out of range");let o=pi(n),s=Gi(n);if(s&&e.planeIndex>=this.numberOfChannels)throw new RangeError("planeIndex out of range");if(!s&&e.planeIndex!==0)throw new RangeError("planeIndex out of range");return(s?i:i*this.numberOfChannels)*o}copyTo(e,n){if(!Ko(e))throw new TypeError("destination must be an ArrayBuffer or an ArrayBuffer view.");if(!n||typeof n!="object")throw new TypeError("options must be an object.");if(!Number.isInteger(n.planeIndex)||n.planeIndex<0)throw new TypeError("planeIndex must be a non-negative integer.");if(n.format!==void 0&&!Md.has(n.format))throw new TypeError("Invalid format.");if(n.frameOffset!==void 0&&(!Number.isInteger(n.frameOffset)||n.frameOffset<0))throw new TypeError("frameOffset must be a non-negative integer.");if(n.frameCount!==void 0&&(!Number.isInteger(n.frameCount)||n.frameCount<0))throw new TypeError("frameCount must be a non-negative integer.");if(this._closed)throw new Error("AudioSample is closed.");let{format:r,frameCount:i,frameOffset:o}=n,{planeIndex:s}=n,l=this.format,c=r??this.format;if(!c)throw new Error("Destination format not determined");let d=this.numberOfFrames,u=this.numberOfChannels,p=o??0;if(p>=d)throw new RangeError("frameOffset out of range");let f=i!==void 0?i:d-p;if(f>d-p)throw new RangeError("frameCount out of range");let m=pi(c),h=Gi(c);if(h&&s>=u)throw new RangeError("planeIndex out of range");if(!h&&s!==0)throw new RangeError("planeIndex out of range");let x=(h?f:f*u)*m;if(e.byteLength<x)throw new RangeError("Destination buffer is too small");let y=ye(e),g=k1(c);if(Ya(this._data))if(yr()&&u>2&&c!==l){PS(this._data,y,l,c,u,s,p,f);return}else try{this._data.copyTo(e,{planeIndex:s,frameOffset:p,frameCount:f,format:c});return}catch(T){if(c==="f32-planar")throw T;l="f32-planar"}let b=w1(l),w=pi(l),k=Gi(l),S;if(this._data instanceof ji){let T=_=>{let C=this._data.getDataPlane(_);if(!(C instanceof Uint8Array))throw new TypeError("getDataPlane() must return a Uint8Array.");let I=d*w*(k?1:u);if(C.byteLength!==I)throw new TypeError(`Data plane ${_} has invalid size. Expected exactly ${I} bytes, got ${C.byteLength} bytes.`);return C};if(k)if(h)S=T(s),s=0;else{S=new Uint8Array(d*w*u);for(let _=0;_<u;_++){let C=T(_);S.set(C,_*d*w)}}else S=T(0)}else if(this._data instanceof Uint8Array)S=this._data;else if(A(l==="f32-planar"),h)S=new Uint8Array(this._data.allocationSize({format:"f32-planar",planeIndex:s})),this._data.copyTo(S,{format:"f32-planar",planeIndex:s}),s=0;else{S=new Uint8Array(this._data.allocationSize({format:"f32-planar",planeIndex:0})*u);for(let T=0;T<u;T++)this._data.copyTo(S.subarray(T*d*w,(T+1)*d*w),{format:"f32-planar",planeIndex:T})}let E=ye(S);for(let T=0;T<f;T++)if(h){let _=T*m,C;k?C=(s*d+(T+p))*w:C=((T+p)*u+s)*w;let I=b(E,C);g(y,_,I)}else for(let _=0;_<u;_++){let I=(T*u+_)*m,M;k?M=(_*d+(T+p))*w:M=((T+p)*u+_)*w;let O=b(E,M);g(y,I,O)}}clone(){if(this._closed)throw new Error("AudioSample is closed.");if(this._data instanceof ji){let e=new t(this._data);return e.setTimestamp(this.timestamp),e}else if(Ya(this._data)){let e=new t(this._data.clone());return e.setTimestamp(this.timestamp),e}else return new t({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp,data:this._data})}trim(e,n=this.numberOfFrames){if(!Number.isInteger(e)||e<0)throw new TypeError("startFrame must be a non-negative integer.");if(!Number.isInteger(n)||n<0)throw new TypeError("endFrame must be a non-negative integer.");if(e>this.numberOfFrames)throw new RangeError("startFrame out of range.");if(n>this.numberOfFrames)throw new RangeError("endFrame out of range.");if(n<e)throw new RangeError("endFrame must not be less than startFrame.");if(this._closed)throw new Error("AudioSample is closed.");let r=n-e,i=pi(this.format),o;if(Gi(this.format)){let s=r*i;if(o=new Uint8Array(s*this.numberOfChannels),r>0)for(let l=0;l<this.numberOfChannels;l++)this.copyTo(o.subarray(l*s,(l+1)*s),{planeIndex:l,format:this.format,frameOffset:e,frameCount:r})}else o=new Uint8Array(r*this.numberOfChannels*i),r>0&&this.copyTo(o,{planeIndex:0,format:this.format,frameOffset:e,frameCount:r});return new t({data:o,format:this.format,sampleRate:this.sampleRate,numberOfChannels:this.numberOfChannels,timestamp:this.timestamp+e/this.sampleRate})}close(){this._closed||(Za?.unregister(this),this._data instanceof ji?(this._data._referenceCount--,this._data._referenceCount===0&&this._data.close()):Ya(this._data)?this._data.close():this._data=new Uint8Array(0),this._closed=!0)}toAudioData(){if(this._closed)throw new Error("AudioSample is closed.");return this._data instanceof ji?this._createAudioDataFromData():Ya(this._data)?this._data.timestamp===this.microsecondTimestamp?this._data.clone():this._createAudioDataFromData():new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:this._data.buffer instanceof ArrayBuffer?this._data.buffer:this._data.slice()})}_createAudioDataFromData(){if(Gi(this.format)){let e=this.allocationSize({planeIndex:0,format:this.format}),n=new ArrayBuffer(e*this.numberOfChannels);for(let r=0;r<this.numberOfChannels;r++)this.copyTo(new Uint8Array(n,r*e,e),{planeIndex:r,format:this.format});return new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:n})}else{let e=new ArrayBuffer(this.allocationSize({planeIndex:0,format:this.format}));return this.copyTo(e,{planeIndex:0,format:this.format}),new AudioData({format:this.format,sampleRate:this.sampleRate,numberOfFrames:this.numberOfFrames,numberOfChannels:this.numberOfChannels,timestamp:this.microsecondTimestamp,data:e})}}toAudioBuffer(){if(this._closed)throw new Error("AudioSample is closed.");let e=new AudioBuffer({numberOfChannels:this.numberOfChannels,length:this.numberOfFrames,sampleRate:this.sampleRate}),n=new Float32Array(this.allocationSize({planeIndex:0,format:"f32-planar"})/4);for(let r=0;r<this.numberOfChannels;r++)this.copyTo(n,{planeIndex:r,format:"f32-planar"}),e.copyToChannel(n,r);return e}setTimestamp(e){if(!Number.isFinite(e))throw new TypeError("newTimestamp must be a number.");this.timestamp=e}[Symbol.dispose](){this.close()}static*_fromAudioBuffer(e,n){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");let r=48e3*5,i=e.numberOfChannels,o=e.sampleRate,s=e.length,l=Math.floor(r/i),c=0,d=s;for(;d>0;){let u=Math.min(l,d),p=new Float32Array(i*u);for(let f=0;f<i;f++)e.copyFromChannel(p.subarray(f*u,(f+1)*u),f,c);yield new t({format:"f32-planar",sampleRate:o,numberOfFrames:u,numberOfChannels:i,timestamp:n+c/o,data:p}),c+=u,d-=u}}static fromAudioBuffer(e,n){if(!(e instanceof AudioBuffer))throw new TypeError("audioBuffer must be an AudioBuffer.");let r=48e3*5,i=e.numberOfChannels,o=e.sampleRate,s=e.length,l=Math.floor(r/i),c=0,d=s,u=[];for(;d>0;){let p=Math.min(l,d),f=new Float32Array(i*p);for(let h=0;h<i;h++)e.copyFromChannel(f.subarray(h*p,(h+1)*p),h,c);let m=new t({format:"f32-planar",sampleRate:o,numberOfFrames:p,numberOfChannels:i,timestamp:n+c/o,data:f});u.push(m),c+=p,d-=p}return u}},pi=t=>{switch(t){case"u8":case"u8-planar":return 1;case"s16":case"s16-planar":return 2;case"s32":case"s32-planar":return 4;case"f32":case"f32-planar":return 4;default:throw new Error("Unknown AudioSampleFormat")}},Gi=t=>{switch(t){case"u8-planar":case"s16-planar":case"s32-planar":case"f32-planar":return!0;default:return!1}},w1=t=>{switch(t){case"u8":case"u8-planar":return(e,n)=>(e.getUint8(n)-128)/128;case"s16":case"s16-planar":return(e,n)=>e.getInt16(n,!0)/32768;case"s32":case"s32-planar":return(e,n)=>e.getInt32(n,!0)/2147483648;case"f32":case"f32-planar":return(e,n)=>e.getFloat32(n,!0)}},k1=t=>{switch(t){case"u8":case"u8-planar":return(e,n,r)=>e.setUint8(n,_t(Math.round(r*128)+128,0,255));case"s16":case"s16-planar":return(e,n,r)=>e.setInt16(n,_t(Math.round(r*32768),-32768,32767),!0);case"s32":case"s32-planar":return(e,n,r)=>e.setInt32(n,_t(Math.round(r*2147483648),-2147483648,2147483647),!0);case"f32":case"f32-planar":return(e,n,r)=>e.setFloat32(n,r,!0)}},Ya=t=>typeof AudioData<"u"&&t instanceof AudioData;var PS=(t,e,n,r,i,o,s,l)=>{let c=w1(n),d=k1(r),u=pi(n),p=pi(r),f=Gi(n);if(Gi(r))if(f){let h=new ArrayBuffer(l*u),v=ye(h);t.copyTo(h,{planeIndex:o,frameOffset:s,frameCount:l,format:n});for(let x=0;x<l;x++){let y=x*u,g=x*p,b=c(v,y);d(e,g,b)}}else{let h=new ArrayBuffer(l*i*u),v=ye(h);t.copyTo(h,{planeIndex:0,frameOffset:s,frameCount:l,format:n});for(let x=0;x<l;x++){let y=(x*i+o)*u,g=x*p,b=c(v,y);d(e,g,b)}}else if(f){let h=l*u,v=new ArrayBuffer(h),x=ye(v);for(let y=0;y<i;y++){t.copyTo(v,{planeIndex:y,frameOffset:s,frameCount:l,format:n});for(let g=0;g<l;g++){let b=g*u,w=(g*i+y)*p,k=c(x,b);d(e,w,k)}}}else{let h=new ArrayBuffer(l*i*u),v=ye(h);t.copyTo(h,{planeIndex:0,frameOffset:s,frameCount:l,format:n});for(let x=0;x<l;x++)for(let y=0;y<i;y++){let g=x*i+y,b=g*u,w=g*p,k=c(v,b);d(e,w,k)}}};var A1=new Map;var T1=t=>{if(!t||typeof t!="object")throw new TypeError("Encoding config must be an object.");if(!ln.includes(t.codec))throw new TypeError(`Invalid video codec '${t.codec}'. Must be one of: ${ln.join(", ")}.`);let e=t.bitrate;if(t.quality===void 0&&e===void 0)throw new TypeError("config.quality must be provided.");if(t.quality!==void 0&&e!==void 0)throw new TypeError("config.quality and config.bitrate cannot both be provided.");if(t.quality!==void 0&&!(t.quality instanceof In))throw new TypeError("config.quality, when provided, must be a Quality.");if(e!==void 0&&!(e instanceof In)&&(!Number.isInteger(e)||e<=0))throw new TypeError("config.bitrate, when provided, must be a positive integer or a quality.");if(t.keyFrameInterval!==void 0&&(!Number.isFinite(t.keyFrameInterval)||t.keyFrameInterval<0))throw new TypeError("config.keyFrameInterval, when provided, must be a non-negative number.");if(t.sizeChangeBehavior!==void 0&&!["deny","passThrough","fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("config.sizeChangeBehavior, when provided, must be 'deny', 'passThrough', 'fill', 'contain' or 'cover'.");if(t.transform!==void 0){if(typeof t.transform!="object"||!t.transform)throw new TypeError("config.transform, when provided, must be an object.");if(t.transform.width!==void 0&&(!Number.isInteger(t.transform.width)||t.transform.width<=0))throw new TypeError("config.transform.width, when provided, must be a positive integer.");if(t.transform.height!==void 0&&(!Number.isInteger(t.transform.height)||t.transform.height<=0))throw new TypeError("config.transform.height, when provided, must be a positive integer.");if(t.transform.fit!==void 0&&!["fill","contain","cover"].includes(t.transform.fit))throw new TypeError('config.transform.fit, when provided, must be one of "fill", "contain", or "cover".');if(t.transform.width!==void 0&&t.transform.height!==void 0&&t.transform.fit===void 0&&!["fill","contain","cover"].includes(t.sizeChangeBehavior))throw new TypeError("When both config.transform.width and config.transform.height are provided, config.transform.fit must also be provided.");if(t.transform.fit!==void 0&&["fill","contain","cover"].includes(t.sizeChangeBehavior)&&t.transform.fit!==t.sizeChangeBehavior)throw new TypeError("config.transform.fit, when provided, cannot differ from config.sizeChangeBehavior when config.sizeChangeBehavior is 'fill', 'contain' or 'cover', as sizeChangeBehavior already determines the fitting algorithm.");if(t.transform.rotate!==void 0&&![0,90,180,270].includes(t.transform.rotate))throw new TypeError("config.transform.rotate, when provided, must be 0, 90, 180 or 270.");if(t.transform.flip!==void 0&&typeof t.transform.flip!="boolean")throw new TypeError("config.transform.flip, when provided, must be a boolean.");if(t.transform.crop!==void 0&&as(t.transform.crop,"config.transform."),t.transform.process!==void 0&&typeof t.transform.process!="function")throw new TypeError("config.transform.process, when provided, must be a function.");if(t.transform.frameRate!==void 0&&(!Number.isFinite(t.transform.frameRate)||t.transform.frameRate<=0))throw new TypeError("config.transform.frameRate, when provided, must be a finite positive number.");if(t.transform.force!==void 0&&typeof t.transform.force!="boolean")throw new TypeError("config.transform.force, when provided, must be a boolean.")}if(t.onEncodedPacket!==void 0&&typeof t.onEncodedPacket!="function")throw new TypeError("config.onEncodedPacket, when provided, must be a function.");if(t.onEncoderConfig!==void 0&&typeof t.onEncoderConfig!="function")throw new TypeError("config.onEncoderConfig, when provided, must be a function.");if(t.onEncodedSample!==void 0&&typeof t.onEncodedSample!="function")throw new TypeError("config.onEncodedSample, when provided, must be a function.");C1(t.codec,t)},C1=(t,e)=>{if(!e||typeof e!="object")throw new TypeError("Encoding options must be an object.");if(e.alpha!==void 0&&!["discard","keep"].includes(e.alpha))throw new TypeError("options.alpha, when provided, must be 'discard' or 'keep'.");let n=e.bitrateMode;if(n!==void 0&&!["constant","variable"].includes(n))throw new TypeError("bitrateMode, when provided, must be 'constant' or 'variable'.");if(e.latencyMode!==void 0&&!["quality","realtime"].includes(e.latencyMode))throw new TypeError("latencyMode, when provided, must be 'quality' or 'realtime'.");if(e.fullCodecString!==void 0&&typeof e.fullCodecString!="string")throw new TypeError("fullCodecString, when provided, must be a string.");if(e.fullCodecString!==void 0&&gd(e.fullCodecString)!==t)throw new TypeError(`fullCodecString, when provided, must be a string that matches the specified codec (${t}).`);if(e.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(e.hardwareAcceleration))throw new TypeError("hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(e.scalabilityMode!==void 0&&typeof e.scalabilityMode!="string")throw new TypeError("scalabilityMode, when provided, must be a string.");if(e.contentHint!==void 0&&typeof e.contentHint!="string")throw new TypeError("contentHint, when provided, must be a string.")},Bm=t=>{let e=t.bitrateMode,n=t.quality._toVideoRateControl(t.codec,t.width,t.height,e),r=(o,s,l)=>({codec:t.fullCodecString??Wb(t.codec,t.width,t.height,l,t.alpha==="keep"),width:t.width,height:t.height,displayWidth:t.squarePixelWidth,displayHeight:t.squarePixelHeight,bitrate:o,bitrateMode:s,alpha:t.alpha??"discard",framerate:t.framerate,latencyMode:t.latencyMode,hardwareAcceleration:t.hardwareAcceleration,scalabilityMode:t.scalabilityMode,contentHint:t.contentHint,...Qb(t.codec)}),i=[];return n.quantizer!==null&&i.push({config:r(void 0,"quantizer",n.bitrate),quantizer:n.quantizer}),n.bitrateMode!=="quantizer"&&i.push({config:r(n.bitrate,n.bitrateMode,n.bitrate),quantizer:null}),A(i.length>0),i};var In=class{constructor(e){if((typeof e=="number"||typeof e=="string")&&(e={quality:e}),!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.bitrateMode!==void 0&&!["constant","variable"].includes(e.bitrateMode))throw new TypeError("options.bitrateMode, when provided, must be 'constant' or 'variable'.");if("quality"in e){if(typeof e.quality=="string"?!(e.quality in S1):typeof e.quality!="number"||Number.isNaN(e.quality))throw new TypeError("options.quality must be a number, or one of 'very-low', 'low', 'medium', 'high' or 'very-high'.");if(e.preferBitrate!==void 0&&typeof e.preferBitrate!="boolean")throw new TypeError("options.preferBitrate, when provided, must be a boolean.");if("bitrate"in e||"quantizer"in e)throw new TypeError("options.quality cannot be combined with options.bitrate or options.quantizer.");this._quality=typeof e.quality=="string"?S1[e.quality]:e.quality,this._preferBitrate=e.preferBitrate??!1,this._bitrate=void 0,this._quantizer=void 0}else{if(e.bitrate!==void 0&&(!Number.isInteger(e.bitrate)||e.bitrate<=0))throw new TypeError("options.bitrate, when provided, must be a positive integer.");if(e.quantizer!==void 0&&(!Number.isInteger(e.quantizer)||e.quantizer<0))throw new TypeError("options.quantizer, when provided, must be a non-negative integer.");if(e.bitrate===void 0&&e.quantizer===void 0)throw new TypeError("At least one of options.bitrate or options.quantizer must be set.");if("preferBitrate"in e)throw new TypeError("options.preferBitrate can only be combined with options.quality.");this._quality=void 0,this._preferBitrate=!1,this._bitrate=e.bitrate,this._quantizer=e.quantizer}this._bitrateMode=e.bitrateMode}_toVideoRateControl(e,n,r,i){let o=MS[e],s=null,l=this._bitrateMode??i??"variable";if(this._quantizer!==void 0){if(o)if(this._quantizer<o.min||this._quantizer>o.max){if(this._bitrate===void 0)throw new Error(`Quantizer ${this._quantizer} is out of range for codec '${e}'; must be between ${o.min} and ${o.max}.`)}else s=this._quantizer,this._bitrate===void 0&&(l="quantizer");else if(this._bitrate===void 0)throw new Error(`Codec '${e}' does not support quantizer-based encoding. Provide a bitrate in the Quality to define a fallback.`)}else this._bitrate===void 0&&o&&!this._preferBitrate&&(A(this._quality!==void 0),s=_t(Math.round(eb(o.worst,o.best,this._quality)),o.min,o.max));let c;if(this._bitrate!==void 0)c=this._bitrate;else{let d=this._quality;d===void 0&&(A(s!==null&&o),d=_t((s-o.worst)/(o.best-o.worst),0,1)),c=E1(e,n,r,Om(d))}return{quantizer:s,bitrate:c,bitrateMode:l}}_toVideoBitrate(e,n,r){return this._bitrate!==void 0?this._bitrate:(A(this._quality!==void 0),E1(e,n,r,Om(this._quality)))}_toAudioBitrate(e){if(Je.includes(e)||e==="flac")return;if(this._bitrate!==void 0)return this._bitrate;if(this._quality===void 0)throw new Error("This Quality defines neither a quality level nor a bitrate and therefore cannot be used for audio encoding.");let n=Om(this._quality),i={aac:128e3,opus:64e3,mp3:16e4,vorbis:64e3,ac3:384e3,eac3:192e3,dts:768e3}[e];if(!i)throw new Error(`Unhandled codec: ${e}`);let o=i*n;return e==="aac"?o=[96e3,128e3,16e4,192e3].reduce((l,c)=>Math.abs(c-o)<Math.abs(l-o)?c:l):e==="opus"||e==="vorbis"?o=Math.max(6e3,o):e==="mp3"&&(o=[8e3,16e3,24e3,32e3,4e4,48e3,64e3,8e4,96e3,112e3,128e3,16e4,192e3,224e3,256e3,32e4].reduce((l,c)=>Math.abs(c-o)<Math.abs(l-o)?c:l)),Math.round(o/1e3)*1e3}},S1={"very-low":0,low:.25,medium:.5,high:.75,"very-high":1},MS={avc:{min:0,max:51,worst:41,best:16},hevc:{min:0,max:51,worst:41,best:16},vp9:{min:0,max:63,worst:52,best:20},av1:{min:0,max:255,worst:208,best:80}},Om=t=>.3*Math.exp(2.5538*t),E1=(t,e,n,r)=>{let i=e*n,o=1920*1080,s=3e6,l=Math.pow(i/o,.95),c=s*l,d={avc:1,hevc:.6,vp9:.6,av1:.4,vp8:1.2,prores:22e7/s},p=c*d[t]*r;return Math.ceil(p/1e3)*1e3},Fm=(t,e)=>{if(t==="avc")return{avc:{quantizer:e}};if(t==="hevc")return{hevc:{quantizer:e}};if(t==="vp9")return{vp9:{quantizer:e}};if(t==="av1")return{av1:{quantizer:e}};A(!1)};var Dm=new In("high");var zm=async(t,e={})=>{let{width:n=1280,height:r=720,quality:i,bitrate:o,frameRate:s,...l}=e;if(!ln.includes(t))return!1;if(!Number.isInteger(n)||n<=0)throw new TypeError("width must be a positive integer.");if(!Number.isInteger(r)||r<=0)throw new TypeError("height must be a positive integer.");if(i!==void 0&&!(i instanceof In))throw new TypeError("quality, when provided, must be a Quality.");if(i!==void 0&&o!==void 0)throw new TypeError("quality and bitrate cannot both be provided.");if(o!==void 0&&!(o instanceof In)&&(!Number.isInteger(o)||o<=0))throw new TypeError("bitrate must be a positive integer or a quality.");if(s!==void 0&&(!Number.isFinite(s)||s<=0))throw new TypeError("frameRate, when provided, must be a finite positive number.");C1(t,l);let c=Lm(i,o)??new In("medium"),d;try{d=Bm({codec:t,width:n,height:r,quality:c,framerate:s,...l,alpha:"discard"})}catch{return!1}let u=JSON.stringify(d),p=A1.get(u);if(p)return p;let f=(async()=>{for(let{config:h}of d)if(Fd.some(v=>v.supports(t,h)))return!0;if(typeof VideoEncoder>"u"||(n%2===1||r%2===1)&&(t==="avc"||t==="hevc"))return!1;for(let{config:h,quantizer:v}of d){try{if(!(await VideoEncoder.isConfigSupported(h)).supported)continue}catch{continue}if(!$i()||await new Promise(async y=>{try{let g=new VideoEncoder({output:()=>{},error:()=>y(!1)});g.configure(h);let b=new Uint8Array(n*r*4),w=new VideoFrame(b,{format:"RGBA",codedWidth:n,codedHeight:r,timestamp:0});g.encode(w,v!==null?Fm(t,v):void 0),w.close(),await g.flush(),y(!0)}catch{y(!1)}}))return!0}return!1})();return A1.set(u,f),f};var Lm=(t,e)=>{if(t!==void 0)return t;if(e!==void 0)return e instanceof In?e:new In({bitrate:e})};var Dd=[],zd=[],Fd=[];var _1=t=>{let n=0,r=0,i=~t;i&128&&(i&=-129,n=-1),r=((i&240)>>4)+5;let o=(1<<r|(i&15)<<r-4|1<<r-5)-33;return(n===0?o:-o)<<2};var I1=t=>{let e=0,n=0,r=t^85;r&128&&(r&=-129,e=-1),n=((r&240)>>4)+4;let i=0;return n!==4?i=1<<n|(r&15)<<n-4|1<<n-5:i=r<<1|1,(e===0?-i:i)<<3};var Ki=t=>{if(!t||typeof t!="object")throw new TypeError("options must be an object.");if(t.metadataOnly!==void 0&&typeof t.metadataOnly!="boolean")throw new TypeError("options.metadataOnly, when defined, must be a boolean.");if(t.verifyKeyPackets!==void 0&&typeof t.verifyKeyPackets!="boolean")throw new TypeError("options.verifyKeyPackets, when defined, must be a boolean.");if(t.verifyKeyPackets&&t.metadataOnly)throw new TypeError("options.verifyKeyPackets and options.metadataOnly cannot be enabled together.");if(t.skipLiveWait!==void 0&&typeof t.skipLiveWait!="boolean")throw new TypeError("options.skipLiveWait, when defined, must be a boolean.")},Er=t=>{if(!li(t))throw new TypeError("timestamp must be a number.")},Um=(t,e,n)=>n.verifyKeyPackets?e.then(async r=>{if(!r||r.type==="delta")return r;let i=await t.determinePacketType(r);return i&&(r.type=i),r}):e,Kn=class{constructor(e){if(!(e instanceof ls))throw new TypeError("track must be an InputTrack.");this._track=e}async getFirstPacket(e={}){if(Ki(e),this._track.input._disposed)throw new Xe;return Um(this._track,this._track._backing.getFirstPacket(e),e)}async getFirstKeyPacket(e={}){Ki(e);let n=await this.getFirstPacket(e);return n?n.type==="key"?n:this.getNextKeyPacket(n,e):null}async getPacket(e,n={}){if(Er(e),Ki(n),this._track.input._disposed)throw new Xe;return Um(this._track,this._track._backing.getPacket(e,n),n)}async getNextPacket(e,n={}){if(!(e instanceof je))throw new TypeError("packet must be an EncodedPacket.");if(Ki(n),this._track.input._disposed)throw new Xe;return Um(this._track,this._track._backing.getNextPacket(e,n),n)}async getKeyPacket(e,n={}){if(Er(e),Ki(n),this._track.input._disposed)throw new Xe;if(!n.verifyKeyPackets)return this._track._backing.getKeyPacket(e,n);let r=await this._track._backing.getKeyPacket(e,n);return r&&(A(r.type==="key"),await this._track.determinePacketType(r)==="delta"?this.getKeyPacket(r.timestamp-1/await this._track.getTimeResolution(),n):r)}async getNextKeyPacket(e,n={}){if(!(e instanceof je))throw new TypeError("packet must be an EncodedPacket.");if(Ki(n),this._track.input._disposed)throw new Xe;if(!n.verifyKeyPackets)return this._track._backing.getNextKeyPacket(e,n);let r=await this._track._backing.getNextKeyPacket(e,n);return r&&(A(r.type==="key"),await this._track.determinePacketType(r)==="delta"?this.getNextKeyPacket(r,n):r)}packets(e,n,r={}){if(e!==void 0&&!(e instanceof je))throw new TypeError("startPacket must be an EncodedPacket.");if(e!==void 0&&e.isMetadataOnly&&!r?.metadataOnly)throw new TypeError("startPacket can only be metadata-only if options.metadataOnly is enabled.");if(n!==void 0&&!(n instanceof je))throw new TypeError("endPacket must be an EncodedPacket.");if(Ki(r),this._track.input._disposed)throw new Xe;let i=[],{promise:o,resolve:s}=Ke(),{promise:l,resolve:c}=Ke(),d=!1,u=!1,p=null,f=!1,m=[],h=()=>Math.max(2,m.length);(async()=>{let x=e??await this.getFirstPacket(r);for(;x&&!u&&!this._track.input._disposed&&!(n&&x.sequenceNumber>=n?.sequenceNumber);){if(i.length>h()){({promise:l,resolve:c}=Ke()),await l;continue}i.push(x),s(),{promise:o,resolve:s}=Ke(),x=await this.getNextPacket(x,r)}d=!0,s()})().catch(x=>{f||(p=x,f=!0,s())});let v=this._track;return{async next(){for(;;){if(v.input._disposed)throw new Xe;if(u)return{value:void 0,done:!0};if(f)throw p;if(i.length>0){let x=i.shift(),y=performance.now();for(m.push(y);m.length>0&&y-m[0]>=1e3;)m.shift();return c(),{value:x,done:!1}}else{if(d)return{value:void 0,done:!0};await o}}},async return(){return u=!0,c(),s(),{value:void 0,done:!0}},async throw(x){throw x},[Symbol.asyncIterator](){return this}}}},el=class{constructor(e,n){this.onSample=e,this.onError=n}},tl=class{mediaSamplesInRange(e=-1/0,n=1/0,r){Er(e),Er(n);let i=[],o=!1,s=null,{promise:l,resolve:c}=Ke(),{promise:d,resolve:u}=Ke(),p=!1,f=!1,m=!1,h=null,v=null,x=!1,y={...r,verifyKeyPackets:!0,metadataOnly:!1};(async()=>{h=await this._createDecoder(_=>{if(u(),_.timestamp>=n&&(f=!0),f){_.close();return}s&&(_.timestamp>e?(i.push(s),o=!0):s.close()),_.timestamp>=e&&(i.push(_),o=!0),s=o?null:_,i.length>0&&(c(),{promise:l,resolve:c}=Ke())},_=>{x||(v=_,x=!0,c())});let w=this._createPacketSink(),k=await w.getKeyPacket(e,y)??await w.getFirstKeyPacket(y),S=k,T=w.packets(k??void 0,void 0,y);for(await T.next();S&&!f&&!this._track.input._disposed;){let _=N1(i.length);if(i.length+h.getDecodeQueueSize()>_){({promise:d,resolve:u}=Ke()),await d;continue}h.decode(S);let C=await T.next();if(C.done)break;S=C.value}await T.return(),!m&&!this._track.input._disposed&&await h.flush(),!o&&s&&i.push(s),p=!0,c()})().catch(w=>{x||(v=w,x=!0,c())}).finally(()=>{h?.close()});let g=this._track,b=()=>{s?.close();for(let w of i)w.close()};return{async next(){for(;;){if(g.input._disposed)throw m=!0,f=!0,b(),new Xe;if(m)return{value:void 0,done:!0};if(x)throw m=!0,f=!0,b(),v;if(i.length>0){let w=i.shift();return u(),{value:w,done:!1}}else if(!p)await l;else return{value:void 0,done:!0}}},async return(){return m=!0,f=!0,u(),c(),b(),{value:void 0,done:!0}},async throw(w){throw w},[Symbol.asyncIterator](){return this}}}mediaSamplesAtTimestamps(e,n){Jv(e);let r=Yv(e),i=[],o=[],{promise:s,resolve:l}=Ke(),{promise:c,resolve:d}=Ke(),u=!1,p=!1,f=null,m=null,h=!1,v=b=>{o.push(b),l(),{promise:s,resolve:l}=Ke()},x={...n,verifyKeyPackets:!0,metadataOnly:!1};(async()=>{f=await this._createDecoder(_=>{if(d(),p){_.close();return}let C=0;for(;i.length>0&&_.timestamp-i[0]>-1e-10;)C++,i.shift();if(C>0)for(let I=0;I<C;I++)v(I<C-1?_.clone():_);else _.close()},_=>{h||(m=_,h=!0,l())});let b=this._createPacketSink(),w=null,k=null,S=-1,E=async()=>{A(k),A(f);let _=k;for(f.decode(_);_.sequenceNumber<S;){let C=N1(o.length);for(;o.length+f.getDecodeQueueSize()>C&&!p;)({promise:c,resolve:d}=Ke()),await c;if(p)break;let I=await b.getNextPacket(_,x);A(I),f.decode(I),_=I}S=-1},T=async()=>{A(f),await f.flush();for(let _=0;_<i.length;_++)v(null);i.length=0};for await(let _ of r){if(Er(_),p||this._track.input._disposed)break;let C=await b.getPacket(_,x),I=C&&await b.getKeyPacket(_,x);if(!I){S!==-1&&(await E(),await T()),v(null),w=null;continue}w&&(I.sequenceNumber!==k.sequenceNumber||C.timestamp<w.timestamp)&&(await E(),await T()),i.push(C.timestamp),S=Math.max(C.sequenceNumber,S),w=C,k=I}!p&&!this._track.input._disposed&&(S!==-1&&await E(),await T()),u=!0,l()})().catch(b=>{h||(m=b,h=!0,l())}).finally(()=>{f?.close()});let y=this._track,g=()=>{for(let b of o)b?.close()};return{async next(){for(;;){if(y.input._disposed)throw p=!0,g(),new Xe;if(p)return{value:void 0,done:!0};if(h)throw p=!0,g(),m;if(o.length>0){let b=o.shift();return A(b!==void 0),d(),{value:b,done:!1}}else if(!u)await s;else return{value:void 0,done:!0}}},async return(){return p=!0,d(),l(),g(),{value:void 0,done:!0}},async throw(b){throw b},[Symbol.asyncIterator](){return this}}}},N1=t=>t===0?40:8,Wm=class extends el{constructor(e,n,r,i,o,s,l){super(e,n),this.codec=r,this.decoderConfig=i,this.rotation=o,this.flip=s,this.timeResolution=l,this.decoder=null,this.customDecoder=null,this.customDecoderCallSerializer=new Ui,this.customDecoderQueueSize=0,this.inputTimestamps=[],this.sampleQueue=[],this.currentPacketIndex=0,this.raslSkipped=!1,this.alphaDecoder=null,this.alphaHadKeyframe=!1,this.colorQueue=[],this.alphaQueue=[],this.merger=null,this.decodedAlphaChunkCount=0,this.alphaDecoderQueueSize=0,this.nullAlphaFrameQueue=[],this.currentAlphaPacketIndex=0,this.alphaRaslSkipped=!1,this.finalSamples=[],this.mergeAlphaPromises=[];let c=Dd.find(d=>d.supports(r,i));if(c)this.customDecoder=new c,this.customDecoder.codec=r,this.customDecoder.config=i,this.customDecoder.onSample=d=>{if(!(d instanceof dn))throw new TypeError("The argument passed to onSample must be a VideoSample.");this.finalizeAndEmitSample(d)},this.customDecoder.onError=d=>{n(d)},this.customDecoderCallSerializer.call(()=>this.customDecoder.init()).catch(d=>n(d));else{let d=p=>{if(this.alphaQueue.length>0){let f=this.alphaQueue.shift();A(f!==void 0),this.mergeAlpha(p,f)}else this.colorQueue.push(p)};if(La()){if(r==="avc"&&this.decoderConfig.description){let p=pd(Qe(this.decoderConfig.description));if(p&&p.sequenceParameterSets.length>0){let f=Zo(p.sequenceParameterSets[0]);f&&(f.frameMbsOnlyFlag===0&&(this.decoderConfig={...this.decoderConfig,hardwareAcceleration:"prefer-software"}),f.maxDecFrameBuffering!==0&&f.bitstreamRestrictionFlag!==1&&(p.sequenceParameterSets[0]=vm(f),this.decoderConfig={...this.decoderConfig,description:ud(p)}))}}Kc(this.decoderConfig.colorSpace)||(this.decoderConfig={...this.decoderConfig,colorSpace:{primaries:this.decoderConfig.colorSpace?.primaries??"bt709",matrix:this.decoderConfig.colorSpace?.matrix??"bt709",transfer:this.decoderConfig.colorSpace?.transfer??"bt709",fullRange:this.decoderConfig.colorSpace?.fullRange??!1}})}let u=new Error("Decoding error").stack;this.decoder=new VideoDecoder({output:p=>{try{d(p)}catch(f){this.onError(f)}},error:p=>{p.stack=u,this.onError(p)}}),this.decoder.configure(this.decoderConfig)}}getDecodeQueueSize(){return this.customDecoder?this.customDecoderQueueSize:(A(this.decoder),Math.max(this.decoder.decodeQueueSize,this.alphaDecoder?.decodeQueueSize??0))}decode(e){if(this.codec==="hevc"&&this.currentPacketIndex>0&&!this.raslSkipped){if(this.hasHevcRaslPicture(e.data))return;this.raslSkipped=!0}if(this.customDecoder)this.customDecoderQueueSize++,this.customDecoderCallSerializer.call(()=>this.customDecoder.decode(e)).catch(n=>this.onError(n)).finally(()=>this.customDecoderQueueSize--);else{if(A(this.decoder),yr()||sm(this.inputTimestamps,e.timestamp,n=>n),La()&&this.currentPacketIndex===0){if(this.codec==="avc"){let n=[],r=!1;for(let o of ym(e.data,this.decoderConfig)){let s=qa(e.data[o.offset]);if(r||=s>=1&&s<=5,s===an.AUD){if(r)break;n.length=0}s>=20&&s<=31||n.push(e.data.subarray(o.offset,o.offset+o.length))}if(!this.decoderConfig.description)for(let o=0;o<n.length;o++){let s=n[o];if(qa(s[0])!==an.SPS)continue;let l=Zo(s);l&&l.maxDecFrameBuffering!==0&&l.bitstreamRestrictionFlag!==1&&(n[o]=vm(l));break}let i=yb(n,this.decoderConfig);e=new je(i,e.type,e.timestamp,e.duration)}else if(this.codec==="hevc"){let n=wb(e.data,this.decoderConfig);n&&(e=new je(n,e.type,e.timestamp,e.duration))}}this.decoder.decode(e.toEncodedVideoChunk()),this.decodeAlphaData(e)}this.currentPacketIndex++}decodeAlphaData(e){if(!e.sideData.alpha){this.pushNullAlphaFrame();return}if(this.merger||(this.merger=new $m),!this.alphaDecoder){let r=o=>{if(this.colorQueue.length>0){let s=this.colorQueue.shift();A(s!==void 0),this.mergeAlpha(s,o)}else this.alphaQueue.push(o);for(this.decodedAlphaChunkCount++;this.nullAlphaFrameQueue.length>0&&this.nullAlphaFrameQueue[0]===this.decodedAlphaChunkCount;)if(this.nullAlphaFrameQueue.shift(),this.colorQueue.length>0){let s=this.colorQueue.shift();A(s!==void 0),this.mergeAlpha(s,null)}else this.alphaQueue.push(null);this.alphaDecoderQueueSize--},i=new Error("Decoding error").stack;this.alphaDecoder=new VideoDecoder({output:o=>{try{r(o)}catch(s){this.onError(s)}},error:o=>{o.stack=i,this.onError(o)}}),this.alphaDecoder.configure(this.decoderConfig)}let n=es(this.codec,this.decoderConfig,e.sideData.alpha);if(this.alphaHadKeyframe||(this.alphaHadKeyframe=n==="key"),this.alphaHadKeyframe){if(this.codec==="hevc"&&this.currentAlphaPacketIndex>0&&!this.alphaRaslSkipped){if(this.hasHevcRaslPicture(e.sideData.alpha)){this.pushNullAlphaFrame();return}this.alphaRaslSkipped=!0}this.currentAlphaPacketIndex++,this.alphaDecoder.decode(e.alphaToEncodedVideoChunk(n??e.type)),this.alphaDecoderQueueSize++}else this.pushNullAlphaFrame()}pushNullAlphaFrame(){this.alphaDecoderQueueSize===0?this.alphaQueue.push(null):this.nullAlphaFrameQueue.push(this.decodedAlphaChunkCount+this.alphaDecoderQueueSize)}hasHevcRaslPicture(e){for(let n of $a(e,this.decoderConfig)){let r=Yo(e[n.offset]);if(r===at.RASL_N||r===at.RASL_R)return!0}return!1}sampleHandler(e){if(yr()){if(this.sampleQueue.length>0&&e.timestamp>=He(this.sampleQueue).timestamp){for(let n of this.sampleQueue)this.finalizeAndEmitSample(n);this.sampleQueue.length=0}sm(this.sampleQueue,e,n=>n.timestamp)}else{let n=this.inputTimestamps.shift();A(n!==void 0),e.setTimestamp(n),this.finalizeAndEmitSample(e)}}finalizeAndEmitSample(e){e.setTimestamp(Math.round(e.timestamp*this.timeResolution)/this.timeResolution),e.setDuration(Math.round(e.duration*this.timeResolution)/this.timeResolution),e.setRotation(this.rotation),e.setFlip(this.flip),this.onSample(e)}async mergeAlpha(e,n){let r=Ke();this.mergeAlphaPromises.push(r.promise);let i={sample:null};this.finalSamples.push(i);try{if(!n)i.sample=new dn(e);else{A(this.merger);let o=await this.merger.merge(e,n);i.sample=new dn(o)}for(;this.finalSamples.length>0&&this.finalSamples[0].sample!==null;){let o=this.finalSamples.shift();this.sampleHandler(o.sample)}}catch(o){Fa(this.finalSamples,i),this.onError(o)}finally{Fa(this.mergeAlphaPromises,r.promise),r.resolve()}}async flush(){if(this.customDecoder?await this.customDecoderCallSerializer.call(()=>this.customDecoder.flush()):(A(this.decoder),await Promise.all([this.decoder.flush(),this.alphaDecoder?.flush()]),await Promise.all(this.mergeAlphaPromises),this.colorQueue.forEach(e=>e.close()),this.colorQueue.length=0,this.alphaQueue.forEach(e=>e?.close()),this.alphaQueue.length=0,this.alphaHadKeyframe=!1,this.decodedAlphaChunkCount=0,this.alphaDecoderQueueSize=0,this.nullAlphaFrameQueue.length=0,this.currentAlphaPacketIndex=0,this.alphaRaslSkipped=!1),yr()){for(let e of this.sampleQueue)this.finalizeAndEmitSample(e);this.sampleQueue.length=0}this.currentPacketIndex=0,this.raslSkipped=!1}close(){this.customDecoder?this.customDecoderCallSerializer.call(()=>this.customDecoder.close()):(A(this.decoder),this.decoder.state!=="closed"&&this.decoder.close(),this.alphaDecoder&&this.alphaDecoder.state!=="closed"&&this.alphaDecoder.close(),this.colorQueue.forEach(e=>e.close()),this.colorQueue.length=0,this.alphaQueue.forEach(e=>e?.close()),this.alphaQueue.length=0,this.merger?.close());for(let e of this.sampleQueue)e.close();this.sampleQueue.length=0}},Vm=null,$m=class{constructor(){this.workers=[],this.nextWorkerIndex=0,this.pendingRequests=new Map,this.nextRequestId=0}merge(e,n){if(this.workers.length===0){if(!Vm){let l=new Blob([`(${BS.toString()})()`],{type:"application/javascript"});Vm=URL.createObjectURL(l)}let s=_t(navigator.hardwareConcurrency,1,4);for(let l=0;l<s;l++){let c=new Worker(Vm);c.addEventListener("message",d=>{let u=d.data,p=this.pendingRequests.get(u.id);p&&(this.pendingRequests.delete(u.id),"error"in u?p.reject(new Error(u.error)):p.resolve(u.frame))}),c.addEventListener("error",d=>{let u=new Error(d.message||"Color/alpha merge worker error.");for(let p of this.pendingRequests.values())p.reject(u);this.pendingRequests.clear()}),this.workers.push(c)}}let r=this.nextRequestId++,i=Ke();this.pendingRequests.set(r,i);let o=this.workers[this.nextWorkerIndex];return this.nextWorkerIndex=(this.nextWorkerIndex+1)%this.workers.length,o.postMessage({id:r,color:e,alpha:n},{transfer:[e,n]}),i.promise}close(){for(let n of this.workers)n.terminate();this.workers.length=0;let e=new Error("Color/alpha merger closed.");for(let n of this.pendingRequests.values())n.reject(e);this.pendingRequests.clear()}},BS=()=>{let t=null,e=null,n=Promise.resolve();self.addEventListener("message",c=>{let{id:d,color:u,alpha:p}=c.data;n=n.then(async()=>{try{let f=await r(u,p);self.postMessage({id:d,frame:f},{transfer:[f]})}catch(f){self.postMessage({id:d,error:f.message})}finally{u.close(),p.close()}})});let r=async(c,d)=>{let u=c.format,p=d.format;if(!u||!p)throw new Error("CPU color/alpha merging requires a known VideoFrame format.");let f=u.includes("P10"),m=u.includes("P12"),h=p.includes("P10"),v=p.includes("P12");if(h!==f||v!==m)throw new Error(`CPU color/alpha merging requires the alpha frame to have the same bit depth as the color frame (color: '${u}', alpha: '${p}').`);if(u==="RGBX"||u==="RGBA"||u==="BGRX"||u==="BGRA")return await i(c,d,u);if(u==="I420"||u==="I420P10"||u==="I420P12"||u==="I422"||u==="I422P10"||u==="I422P12"||u==="I444"||u==="I444P10"||u==="I444P12")return await o(c,d,u);if(u==="NV12")return await s(c,d);throw new Error(`CPU color/alpha merging does not support format '${u}'.`)},i=async(c,d,u)=>{let p=c.visibleRect?.width??c.codedWidth,f=c.visibleRect?.height??c.codedHeight,m=p*f,h=new Uint8Array(m*4);await c.copyTo(h);let v=await l(d,p,f,1);for(let g=0,b=3;g<m;g++,b+=4)h[b]=v[g];let y={format:u==="RGBX"||u==="RGBA"?"RGBA":"BGRA",codedWidth:p,codedHeight:f,timestamp:c.timestamp,duration:c.duration??void 0,transfer:[h.buffer]};return new VideoFrame(h,y)},o=async(c,d,u)=>{let p=c.visibleRect?.width??c.codedWidth,f=c.visibleRect?.height??c.codedHeight,m=u.includes("P10"),h=u.includes("P12"),v=m||h?2:1,x,y;u.startsWith("I420")?(x=Math.ceil(p/2),y=Math.ceil(f/2)):u.startsWith("I422")?(x=Math.ceil(p/2),y=f):(x=p,y=f);let g=p*f,b=x*y,w=g*v,k=b*v,S=g*v,E=w+2*k+S,T=new Uint8Array(E);await c.copyTo(T);let _=await l(d,p,f,v),C=w+2*k;T.set(_,C);let M={format:u.slice(0,4)+"A"+u.slice(4),codedWidth:p,codedHeight:f,timestamp:c.timestamp,duration:c.duration??void 0,transfer:[T.buffer]};return new VideoFrame(T,M)},s=async(c,d)=>{let u=c.visibleRect?.width??c.codedWidth,p=c.visibleRect?.height??c.codedHeight,f=u*p,m=Math.ceil(u/2),h=Math.ceil(p/2),v=m*h,x=c.allocationSize();(!e||e.byteLength!==x)&&(e=new Uint8Array(x)),await c.copyTo(e);let y=new Uint8Array(f+2*v+f);y.set(e.subarray(0,f),0);let g=f,b=f+v,w=f;for(let E=0;E<v;E++)y[g+E]=e[w+E*2],y[b+E]=e[w+E*2+1];let k=await l(d,u,p,1);y.set(k,f+2*v);let S={format:"I420A",codedWidth:u,codedHeight:p,timestamp:c.timestamp,duration:c.duration??void 0,transfer:[y.buffer]};return new VideoFrame(y,S)},l=async(c,d,u,p)=>{let f=c.allocationSize();(!t||t.byteLength!==f)&&(t=new Uint8Array(f)),await c.copyTo(t);let m=c.format;if(m==="RGBA"||m==="BGRA"||m==="RGBX"||m==="BGRX"){let h=m==="RGBA"||m==="RGBX"?0:2,v=d*u;for(let x=0;x<v;x++)t[x]=t[x*4+h];return t.subarray(0,v)}else return t.subarray(0,d*u*p)}},P1=t=>{if(!t||typeof t!="object")throw new TypeError("decoderOptions must be an object.");if(t.hardwareAcceleration!==void 0&&!["no-preference","prefer-hardware","prefer-software"].includes(t.hardwareAcceleration))throw new TypeError("decoderOptions.hardwareAcceleration, when provided, must be 'no-preference', 'prefer-hardware' or 'prefer-software'.");if(t.optimizeForLatency!==void 0&&typeof t.optimizeForLatency!="boolean")throw new TypeError("decoderOptions.optimizeForLatency, when provided, must be a boolean.")},Ld=class extends tl{constructor(e,n={}){if(!(e instanceof fi))throw new TypeError("videoTrack must be an InputVideoTrack.");P1(n),super(),this._track=e,this._decoderOptions=n}async _createDecoder(e,n){if(!await this._track.canDecode())throw typeof VideoDecoder>"u"?new Error(Ua("VideoDecoder")):new Error("This video track cannot be decoded in this environment. Make sure to check decodability before using a track.");let r=await this._track.getCodec(),i=await this._track.getRotation(),o=await this._track.getFlip(),s=await this._track.getDecoderConfig(),l=await this._track.getTimeResolution();return A(r&&s),s={...s,hardwareAcceleration:this._decoderOptions.hardwareAcceleration,optimizeForLatency:this._decoderOptions.optimizeForLatency},new Wm(e,n,r,s,i,o,l)}_createPacketSink(){return new Kn(this._track)}async getSample(e,n={}){Er(e);for await(let r of this.mediaSamplesAtTimestamps([e],n))return r;throw new Error("Internal error: Iterator returned nothing.")}samples(e,n,r={}){return this.mediaSamplesInRange(e,n,r)}samplesAtTimestamps(e,n={}){return this.mediaSamplesAtTimestamps(e,n)}},nl=class{constructor(e,n={}){if(this._rotation=0,this._flip=!1,this._initPromise=null,this._nextCanvasIndex=0,!(e instanceof fi))throw new TypeError("videoTrack must be an InputVideoTrack.");if(n&&typeof n!="object")throw new TypeError("options must be an object.");if(n.alpha!==void 0&&typeof n.alpha!="boolean")throw new TypeError("options.alpha, when provided, must be a boolean.");if(n.width!==void 0&&(!Number.isInteger(n.width)||n.width<=0))throw new TypeError("options.width, when defined, must be a positive integer.");if(n.height!==void 0&&(!Number.isInteger(n.height)||n.height<=0))throw new TypeError("options.height, when defined, must be a positive integer.");if(n.fit!==void 0&&!["fill","contain","cover"].includes(n.fit))throw new TypeError('options.fit, when provided, must be one of "fill", "contain", or "cover".');if(n.width!==void 0&&n.height!==void 0&&n.fit===void 0)throw new TypeError("When both options.width and options.height are provided, options.fit must also be provided.");if(n.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError("options.rotation, when provided, must be 0, 90, 180 or 270.");if(n.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("options.flip, when provided, must be a boolean.");if(n.crop!==void 0&&as(n.crop,"options."),n.poolSize!==void 0&&(typeof n.poolSize!="number"||!Number.isInteger(n.poolSize)||n.poolSize<0))throw new TypeError("poolSize must be a non-negative integer.");n.decoderOptions!==void 0&&P1(n.decoderOptions),this._videoTrack=e,this._alpha=n.alpha??!1,this._options=n,this._fit=n.fit??"fill",this._videoSampleSink=new Ld(e,n.decoderOptions),this._canvasPool=Array.from({length:n.poolSize??0},()=>null)}_ensureInit(){return this._initPromise??=(async()=>{let e=this._options,n=this._videoTrack,r=e.rotation??await n.getRotation(),i=e.flip??await n.getFlip(),o=await n.getSquarePixelWidth(),s=await n.getSquarePixelHeight(),[l,c]=r%180===0?[o,s]:[s,o],d=e.crop;d&&(d=Od(d,l,c));let[u,p]=d?[d.width,d.height]:[l,c],f=u/p;e.width!==void 0&&e.height===void 0?(u=e.width,p=Math.round(u/f)):e.width===void 0&&e.height!==void 0?(p=e.height,u=Math.round(p*f)):e.width!==void 0&&e.height!==void 0&&(u=e.width,p=e.height),this._width=u,this._height=p,this._rotation=r,this._flip=i,this._crop=d})()}_videoSampleToWrappedCanvas(e){let n=this._width,r=this._height,i=this._canvasPool[this._nextCanvasIndex],o=!1;i||(typeof document<"u"?(i=document.createElement("canvas"),i.width=n,i.height=r):i=new OffscreenCanvas(n,r),this._canvasPool.length>0&&(this._canvasPool[this._nextCanvasIndex]=i),o=!0),this._canvasPool.length>0&&(this._nextCanvasIndex=(this._nextCanvasIndex+1)%this._canvasPool.length);let s=i.getContext("2d",{alpha:this._alpha||$i()});A(s),e._drawWithFitAndMipmapping(i,s,{fit:this._fit,rotation:this._rotation,flip:this._flip,crop:this._crop,targetIsFresh:o,fillBlack:!this._alpha&&$i()});let l={canvas:i,timestamp:e.timestamp,duration:e.duration};return e.close(),l}async getCanvas(e,n){Er(e),await this._ensureInit();let r=await this._videoSampleSink.getSample(e,n);return r&&this._videoSampleToWrappedCanvas(r)}async*canvases(e,n,r){await this._ensureInit(),yield*Da(this._videoSampleSink.samples(e,n,r),i=>this._videoSampleToWrappedCanvas(i))}async*canvasesAtTimestamps(e,n){await this._ensureInit(),yield*Da(this._videoSampleSink.samplesAtTimestamps(e,n),r=>r&&this._videoSampleToWrappedCanvas(r))}},Hm=class extends el{constructor(e,n,r,i){super(e,n),this.decoder=null,this.customDecoder=null,this.customDecoderCallSerializer=new Ui,this.customDecoderQueueSize=0,this.currentTimestamp=null,this.expectedFirstTimestamp=null,this.timestampOffset=0;let o=l=>{let c=l.timestamp;this.expectedFirstTimestamp!==null&&this.currentTimestamp===null&&(this.timestampOffset=this.expectedFirstTimestamp-c),c+=this.timestampOffset,(this.currentTimestamp===null||Math.abs(c-this.currentTimestamp)>=l.duration)&&(this.currentTimestamp=c);let d=this.currentTimestamp;if(this.currentTimestamp+=l.duration,l.numberOfFrames===0){l.close();return}let u=i.sampleRate;l.setTimestamp(Math.round(d*u)/u),e(l)},s=zd.find(l=>l.supports(r,i));if(s)this.customDecoder=new s,this.customDecoder.codec=r,this.customDecoder.config=i,this.customDecoder.onSample=l=>{if(!(l instanceof Qi))throw new TypeError("The argument passed to onSample must be an AudioSample.");o(l)},this.customDecoder.onError=l=>{n(l)},this.customDecoderCallSerializer.call(()=>this.customDecoder.init()).catch(l=>n(l));else{let l=new Error("Decoding error").stack;this.decoder=new AudioDecoder({output:c=>{try{o(new Qi(c))}catch(d){this.onError(d)}},error:c=>{c.stack=l,this.onError(c)}}),this.decoder.configure(i)}}getDecodeQueueSize(){return this.customDecoder?this.customDecoderQueueSize:(A(this.decoder),this.decoder.decodeQueueSize)}decode(e){this.customDecoder?(this.customDecoderQueueSize++,this.customDecoderCallSerializer.call(()=>this.customDecoder.decode(e)).catch(n=>this.onError(n)).finally(()=>this.customDecoderQueueSize--)):(A(this.decoder),this.expectedFirstTimestamp??=e.timestamp,this.decoder.decode(e.toEncodedAudioChunk()))}async flush(){this.customDecoder?await this.customDecoderCallSerializer.call(()=>this.customDecoder.flush()):(A(this.decoder),await this.decoder.flush()),this.currentTimestamp=null,this.expectedFirstTimestamp=null,this.timestampOffset=0}close(){this.customDecoder?this.customDecoderCallSerializer.call(()=>this.customDecoder.close()):(A(this.decoder),this.decoder.state!=="closed"&&this.decoder.close())}},qm=class extends el{constructor(e,n,r){super(e,n),this.decoderConfig=r,this.currentTimestamp=null,A(Je.includes(r.codec)),this.codec=r.codec;let{dataType:i,sampleSize:o,littleEndian:s}=jt(this.codec);switch(this.inputSampleSize=o,o){case 1:i==="unsigned"?this.readInputValue=(l,c)=>l.getUint8(c)-2**7:i==="signed"?this.readInputValue=(l,c)=>l.getInt8(c):i==="ulaw"?this.readInputValue=(l,c)=>_1(l.getUint8(c)):i==="alaw"?this.readInputValue=(l,c)=>I1(l.getUint8(c)):A(!1);break;case 2:i==="unsigned"?this.readInputValue=(l,c)=>l.getUint16(c,s)-2**15:i==="signed"?this.readInputValue=(l,c)=>l.getInt16(c,s):A(!1);break;case 3:i==="unsigned"?this.readInputValue=(l,c)=>Wi(l,c,s)-2**23:i==="signed"?this.readInputValue=(l,c)=>Zv(l,c,s):A(!1);break;case 4:i==="unsigned"?this.readInputValue=(l,c)=>l.getUint32(c,s)-2**31:i==="signed"?this.readInputValue=(l,c)=>l.getInt32(c,s):i==="float"?this.readInputValue=(l,c)=>l.getFloat32(c,s):A(!1);break;case 8:i==="float"?this.readInputValue=(l,c)=>l.getFloat64(c,s):A(!1);break;default:Ct(o),A(!1)}switch(o){case 1:i==="ulaw"||i==="alaw"?(this.outputSampleSize=2,this.outputFormat="s16",this.writeOutputValue=(l,c,d)=>l.setInt16(c,d,!0)):(this.outputSampleSize=1,this.outputFormat="u8",this.writeOutputValue=(l,c,d)=>l.setUint8(c,d+2**7));break;case 2:this.outputSampleSize=2,this.outputFormat="s16",this.writeOutputValue=(l,c,d)=>l.setInt16(c,d,!0);break;case 3:this.outputSampleSize=4,this.outputFormat="s32",this.writeOutputValue=(l,c,d)=>l.setInt32(c,d<<8,!0);break;case 4:this.outputSampleSize=4,i==="float"?(this.outputFormat="f32",this.writeOutputValue=(l,c,d)=>l.setFloat32(c,d,!0)):(this.outputFormat="s32",this.writeOutputValue=(l,c,d)=>l.setInt32(c,d,!0));break;case 8:this.outputSampleSize=4,this.outputFormat="f32",this.writeOutputValue=(l,c,d)=>l.setFloat32(c,d,!0);break;default:Ct(o),A(!1)}}getDecodeQueueSize(){return 0}decode(e){let n=ye(e.data),r=e.byteLength/this.decoderConfig.numberOfChannels/this.inputSampleSize,i=r*this.decoderConfig.numberOfChannels*this.outputSampleSize,o=new ArrayBuffer(i),s=new DataView(o);for(let u=0;u<r*this.decoderConfig.numberOfChannels;u++){let p=u*this.inputSampleSize,f=u*this.outputSampleSize,m=this.readInputValue(n,p);this.writeOutputValue(s,f,m)}let l=r/this.decoderConfig.sampleRate;(this.currentTimestamp===null||Math.abs(e.timestamp-this.currentTimestamp)>=l)&&(this.currentTimestamp=e.timestamp);let c=this.currentTimestamp;this.currentTimestamp+=l;let d=new Qi({format:this.outputFormat,data:o,numberOfChannels:this.decoderConfig.numberOfChannels,sampleRate:this.decoderConfig.sampleRate,numberOfFrames:r,timestamp:c});this.onSample(d)}async flush(){}close(){}},Ud=class extends tl{constructor(e){if(!(e instanceof mi))throw new TypeError("audioTrack must be an InputAudioTrack.");super(),this._track=e}async _createDecoder(e,n){if(!await this._track.canDecode())throw typeof AudioDecoder>"u"?new Error(Ua("AudioDecoder")):new Error("This audio track cannot be decoded in this environment. Make sure to check decodability before using a track.");let r=await this._track.getCodec(),i=await this._track.getDecoderConfig();return A(r&&i),Je.includes(i.codec)?new qm(e,n,i):new Hm(e,n,r,i)}_createPacketSink(){return new Kn(this._track)}async getSample(e,n={}){Er(e);for await(let r of this.mediaSamplesAtTimestamps([e],n))return r;throw new Error("Internal error: Iterator returned nothing.")}samples(e,n,r={}){return this.mediaSamplesInRange(e,n,r)}samplesAtTimestamps(e,n={}){return this.mediaSamplesAtTimestamps(e,n)}},rl=class{constructor(e){if(!(e instanceof mi))throw new TypeError("audioTrack must be an InputAudioTrack.");this._audioSampleSink=new Ud(e)}_audioSampleToWrappedArrayBuffer(e){let n={buffer:e.toAudioBuffer(),timestamp:e.timestamp,duration:e.duration};return e.close(),n}async getBuffer(e,n){Er(e);let r=await this._audioSampleSink.getSample(e,n);return r&&this._audioSampleToWrappedArrayBuffer(r)}buffers(e,n,r){return Da(this._audioSampleSink.samples(e,n,r),i=>this._audioSampleToWrappedArrayBuffer(i))}buffersAtTimestamps(e,n){return Da(this._audioSampleSink.samplesAtTimestamps(e,n),r=>r&&this._audioSampleToWrappedArrayBuffer(r))}};var ls=class t{constructor(e,n){this.input=e,this._backing=n}isVideoTrack(){return this instanceof fi}isAudioTrack(){return this instanceof mi}get id(){return this._backing.getId()}get number(){return this._backing.getNumber()}async getInternalCodecId(){return this._backing.getInternalCodecId()}get internalCodecId(){return Ue(this._backing.getInternalCodecId(),"internalCodecId","getInternalCodecId")}async getLanguageCode(){return this._backing.getLanguageCode()}get languageCode(){return Ue(this._backing.getLanguageCode(),"languageCode","getLanguageCode")}async getName(){return this._backing.getName()}get name(){return Ue(this._backing.getName(),"name","getName")}async getTimeResolution(){return this._backing.getTimeResolution()}get timeResolution(){return Ue(this._backing.getTimeResolution(),"timeResolution","getTimeResolution")}async isRelativeToUnixEpoch(){return this._backing.isRelativeToUnixEpoch()}async getUnixTimeForTimestamp(e){return this._backing.getUnixTimeForTimestamp(e)}async hasUnixTimeMapping(){return await this._backing.getUnixTimeForTimestamp(await this.getFirstTimestamp())!==null}async getDisposition(){return this._backing.getDisposition()}get disposition(){return Ue(this._backing.getDisposition(),"disposition","getDisposition")}async getBitrate(){return this._backing.getBitrate()}async getAverageBitrate(){return this._backing.getAverageBitrate()}async getFirstTimestamp(){return(await this._backing.getFirstPacket({metadataOnly:!0}))?.timestamp??0}async computeDuration(e){let n=await this._backing.getPacket(1/0,{metadataOnly:!0,...e}),r=(n?.timestamp??0)+(n?.duration??0);return lm(r,await this.getTimeResolution())}async getDurationFromMetadata(e={}){return this._backing.getDurationFromMetadata(e)}async computePacketStats(e=1/0,n){let r=new Kn(this),i=1/0,o=-1/0,s=0,l=0;for await(let c of r.packets(void 0,void 0,{metadataOnly:!0,...n})){if(s>=e&&c.timestamp>=o)break;i=Math.min(i,c.timestamp),o=Math.max(o,c.timestamp+c.duration),s++,l+=c.byteLength}return{packetCount:s,averagePacketRate:s?Number((s/(o-i)).toPrecision(16)):0,averageBitrate:s?Number((8*l/(o-i)).toPrecision(16)):0}}async isLive(){return await this._backing.getLiveRefreshInterval()!==null}async getLiveRefreshInterval(){return this._backing.getLiveRefreshInterval()}canBePairedWith(e){if(!(e instanceof t))throw new TypeError("other must be an InputTrack.");return this.input!==e.input||this===e?!1:(this._backing.getPairingMask()&e._backing.getPairingMask())!==0n}async getPairableTracks(e){return this.input.getTracks(hi({filter:n=>n.canBePairedWith(this)},e))}async getPairableVideoTracks(e){return this.input.getVideoTracks(hi({filter:n=>n.canBePairedWith(this)},e))}async getPairableAudioTracks(e){return this.input.getAudioTracks(hi({filter:n=>n.canBePairedWith(this)},e))}async getPrimaryPairableVideoTrack(e){return this.input.getPrimaryVideoTrack(hi({filter:n=>n.canBePairedWith(this)},e))}async getPrimaryPairableAudioTrack(e){return this.input.getPrimaryAudioTrack(hi({filter:n=>n.canBePairedWith(this)},e))}async hasPairableTrack(e){e&&=Rm(e);let n=await this.input.getTracks();for(let r of n)if(this.canBePairedWith(r)&&(!e||await e(r)))return!0;return!1}hasPairableVideoTrack(e){return e&&=Rm(e),this.hasPairableTrack(async n=>n.isVideoTrack()&&(!e||await e(n)))}hasPairableAudioTrack(e){return e&&=Rm(e),this.hasPairableTrack(async n=>n.isAudioTrack()&&(!e||await e(n)))}},Ue=(t,e,n)=>{if(le(t))throw new Error(`'${e}' is deprecated and not available synchronously for this track. Use the preferred '${n}()' instead.`);return t},Rm=t=>{if(t!==void 0&&typeof t!="function")throw new TypeError("predicate, when provided, must be a function.");return t?e=>{let n=i=>{if(typeof i!="boolean")throw new TypeError("predicate must return or resolve to a boolean value.");return i},r=t(e);return le(r)?r.then(n):n(r)}:void 0},fi=class extends ls{constructor(e,n){super(e,n),this._pixelAspectRatioCache=null}get type(){return"video"}async getCodec(){return this._backing.getCodec()}get codec(){return Ue(this._backing.getCodec(),"codec","getCodec")}async hasOnlyKeyPackets(){return await this._backing.getHasOnlyKeyPackets?.()??await this._backing.getCodec()==="prores"}async getCodedWidth(){return this._backing.getCodedWidth()}get codedWidth(){return Ue(this._backing.getCodedWidth(),"codedWidth","getCodedWidth")}async getCodedHeight(){return this._backing.getCodedHeight()}get codedHeight(){return Ue(this._backing.getCodedHeight(),"codedHeight","getCodedHeight")}async getTransformationMatrix(){return this._backing.getTransformationMatrix()}async getRotation(){return Ba(await this._backing.getTransformationMatrix())}get rotation(){return Ba(Ue(this._backing.getTransformationMatrix(),"rotation","getRotation"))}async getFlip(){return tm(await this._backing.getTransformationMatrix())}async getSquarePixelWidth(){return this._backing.getSquarePixelWidth()}get squarePixelWidth(){return Ue(this._backing.getSquarePixelWidth(),"squarePixelWidth","getSquarePixelWidth")}async getSquarePixelHeight(){return this._backing.getSquarePixelHeight()}get squarePixelHeight(){return Ue(this._backing.getSquarePixelHeight(),"squarePixelHeight","getSquarePixelHeight")}async getPixelAspectRatio(){return this._pixelAspectRatioCache??=ci({num:await this.getSquarePixelWidth()*await this.getCodedHeight(),den:await this.getSquarePixelHeight()*await this.getCodedWidth()})}get pixelAspectRatio(){return this._pixelAspectRatioCache??=ci({num:Ue(this._backing.getSquarePixelWidth(),"pixelAspectRatio","getPixelAspectRatio")*Ue(this._backing.getCodedHeight(),"pixelAspectRatio","getPixelAspectRatio"),den:Ue(this._backing.getSquarePixelHeight(),"pixelAspectRatio","getPixelAspectRatio")*Ue(this._backing.getCodedWidth(),"pixelAspectRatio","getPixelAspectRatio")})}async getDisplayWidth(){let e=await this._backing.getMetadataDisplayWidth?.();return e??(await this.getRotation()%180===0?this.getSquarePixelWidth():this.getSquarePixelHeight())}get displayWidth(){let e=this._backing.getMetadataDisplayWidth?.();if(e!==void 0){let i=Ue(e,"displayWidth","getDisplayWidth");if(i!==null)return i}let r=Ba(Ue(this._backing.getTransformationMatrix(),"displayWidth","getDisplayWidth"))%180===0?this._backing.getSquarePixelWidth():this._backing.getSquarePixelHeight();return Ue(r,"displayWidth","getDisplayWidth")}async getDisplayHeight(){let e=await this._backing.getMetadataDisplayHeight?.();return e??(await this.getRotation()%180===0?this.getSquarePixelHeight():this.getSquarePixelWidth())}get displayHeight(){let e=this._backing.getMetadataDisplayHeight?.();if(e!==void 0){let i=Ue(e,"displayHeight","getDisplayHeight");if(i!==null)return i}let r=Ba(Ue(this._backing.getTransformationMatrix(),"displayHeight","getDisplayHeight"))%180===0?this._backing.getSquarePixelHeight():this._backing.getSquarePixelWidth();return Ue(r,"displayHeight","getDisplayHeight")}async getColorSpace(){return this._backing.getColorSpace()}async hasHighDynamicRange(){let e=await this._backing.getColorSpace();return e.primaries==="bt2020"||e.primaries==="smpte432"||e.transfer==="pq"||e.transfer==="hlg"||e.matrix==="bt2020-ncl"}async canBeTransparent(){return this._backing.canBeTransparent()}async getDecoderConfig(){return this._backing.getDecoderConfig()}async getCodecParameterString(){let e=await this._backing.getMetadataCodecParameterString?.();return e??(await this._backing.getDecoderConfig())?.codec??null}async canDecode(){try{let e=await this._backing.getDecoderConfig();if(!e)return!1;let n=await this._backing.getCodec();return A(n!==null),Dd.some(i=>i.supports(n,e))?!0:typeof VideoDecoder>"u"?!1:(await VideoDecoder.isConfigSupported(e)).supported===!0}catch(e){return ce._error("Error during decodability check:",e),!1}}async determinePacketType(e){if(!(e instanceof je))throw new TypeError("packet must be an EncodedPacket.");if(e.isMetadataOnly)throw new TypeError("packet must not be metadata-only to determine its type.");let n=await this.getCodec();if(n===null)return null;let r=await this.getDecoderConfig();return A(r),es(n,r,e.data)}async computeFrameRateMetrics(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.targetPacketCount!==void 0&&(!li(e.targetPacketCount)||e.targetPacketCount<0))throw new TypeError("options.targetPacketCount must be a non-negative number.");let n=await this.getTimeResolution(),r=e.targetPacketCount??256,i=new Kn(this),o=[],s=-1/0,l=0;for await(let C of i.packets(void 0,void 0,{metadataOnly:!0})){if(o.length>=r&&C.timestamp>=s)break;o.push(C.timestamp),s=Math.max(s,C.timestamp),l++}let c=new Float64Array(o.length);for(let C=0;C<o.length;C++)c[C]=Math.round(o[C]*n);c.sort();let d=1;for(let C=1;C<c.length;C++)c[C]!==c[d-1]&&(c[d++]=c[C]);if(d<2)return{underlyingFrameRate:null,bestGuessFrameRate:n,minFrameRate:n,maxFrameRate:n,averageFrameRate:n,medianFrameRate:n,frameRateIsConstant:!0,probedPacketCount:l};let u=c.subarray(0,d),p=FS(u,n),f=p??n,m=p!==null?n/p:null,h=new Map,v=1/0,x=-1/0,y=0;for(let C=1;C<d;C++){let I=u[C]-u[C-1],M=m!==null?Math.max(1,Math.round(I/m)):I;h.set(M,(h.get(M)??0)+1),v=Math.min(v,M),x=Math.max(x,M),y+=M}let g=d-1,b=[...h.keys()].sort((C,I)=>C-I),w=g-1>>1,k=g>>1,S=0,E=0,T=0;for(let C of b)if(T+=h.get(C),S===0&&T>w&&(S=C),T>k){E=C;break}let _=(f/S+f/E)/2;return{underlyingFrameRate:p,bestGuessFrameRate:p!==null?p:DS(_),minFrameRate:f/x,maxFrameRate:f/v,averageFrameRate:f*g/y,medianFrameRate:_,frameRateIsConstant:p!==null&&v===1&&x===1,probedPacketCount:l}}},mi=class extends ls{constructor(e,n){super(e,n)}get type(){return"audio"}async getCodec(){return this._backing.getCodec()}get codec(){return Ue(this._backing.getCodec(),"codec","getCodec")}async hasOnlyKeyPackets(){return await this._backing.getHasOnlyKeyPackets?.()??!0}async getNumberOfChannels(){return this._backing.getNumberOfChannels()}get numberOfChannels(){return Ue(this._backing.getNumberOfChannels(),"numberOfChannels","getNumberOfChannels")}async getSampleRate(){return this._backing.getSampleRate()}get sampleRate(){return Ue(this._backing.getSampleRate(),"sampleRate","getSampleRate")}async getDecoderConfig(){return this._backing.getDecoderConfig()}async getCodecParameterString(){let e=await this._backing.getMetadataCodecParameterString?.();return e??(await this._backing.getDecoderConfig())?.codec??null}async canDecode(){try{let e=await this._backing.getDecoderConfig();if(!e)return!1;let n=await this._backing.getCodec();return A(n!==null),zd.some(r=>r.supports(n,e))||Je.includes(e.codec)?!0:typeof AudioDecoder>"u"?!1:(await AudioDecoder.isConfigSupported(e)).supported===!0}catch(e){return ce._error("Error during decodability check:",e),!1}}async determinePacketType(e){if(!(e instanceof je))throw new TypeError("packet must be an EncodedPacket.");return await this.getCodec()===null?null:"key"}};var jm=t=>-(t??-1/0),cs=t=>-t,ds=t=>{if(typeof t!="object"||!t)throw new TypeError("query must be an object.");if(t.filter!==void 0&&typeof t.filter!="function")throw new TypeError("query.filter, when provided, must be a function.");if(t.sortBy!==void 0&&typeof t.sortBy!="function")throw new TypeError("query.sortBy, when provided, must be a function.");return{filter:t.filter?e=>{let n=i=>{if(typeof i!="boolean")throw new TypeError("query.filter must return or resolve to a boolean.");return i},r=t.filter(e);return le(r)?r.then(n):n(r)}:void 0,sortBy:t.sortBy?e=>{let n=i=>{if(typeof i!="number"&&(!Array.isArray(i)||!i.every(o=>typeof o=="number")))throw new TypeError("query.sortBy must return or resolve to a number or an array of numbers.");return i},r=t.sortBy(e);return le(r)?r.then(n):n(r)}:void 0}},hi=(t,e)=>({filter:t?.filter||e?.filter?n=>{let r=t?.filter?.(n)??!0,i=o=>o===!1?!1:e?.filter?.(n)??!0;return le(r)?r.then(i):i(r)}:void 0,sortBy:t?.sortBy||e?.sortBy?n=>{let r=t?.sortBy?.(n)??[],i=e?.sortBy?.(n)??[],o=(s,l)=>[...Array.isArray(s)?s:[s],...Array.isArray(l)?l:[l]];return le(r)||le(i)?Promise.all([r,i]).then(([s,l])=>o(s,l)):o(r,i)}:void 0}),Vd=async(t,e)=>{let n=t;if(e?.filter){let s=t.map(c=>e.filter(c));if(s.some(c=>le(c))){let c=await Promise.all(s);n=t.filter((d,u)=>c[u])}else n=t.filter((c,d)=>s[d])}if(!e?.sortBy)return n;let r=n.map(s=>e.sortBy(s)),o=r.some(s=>le(s))?await Promise.all(r):r;return n.map((s,l)=>({track:s,sortValue:o[l]})).sort((s,l)=>{let c=Array.isArray(s.sortValue)?s.sortValue:[s.sortValue],d=Array.isArray(l.sortValue)?l.sortValue:[l.sortValue],u=Math.max(c.length,d.length);for(let p=0;p<u;p++){let f=c[p]??0,m=d[p]??0;if(f!==m)return f-m}return 0}).map(s=>s.track)},FS=(t,e)=>{let i=1.000000001,o=1e3,s=[12,15,20,24e3/1001,24,25,3e4/1001,30,48,50,6e4/1001,60,100,12e4/1001,120,144,240];if(t.length<2)return null;let l=new Float64Array(t.length-1);for(let E=1;E<t.length;E++){let T=t[E]-t[E-1];if(!(T>0))return null;l[E-1]=T}let c=l.slice();c.sort();let d=c[Math.floor(c.length*.05)];for(let E=0;E<6;E++){let T=0,_=0;for(let I of l){let M=Math.max(1,Math.round(I/d));Math.abs(I-M*d)>=i||(T+=I,_+=M)}if(_===0)return null;let C=T/_;if(Math.abs(C-d)<=1e-12*Math.max(1,d)){d=C;break}d=C}let u=0,p=0,f=0;for(let E of l){let T=Math.max(1,Math.round(E/d));Math.abs(E-T*d)>=i||(u++,p+=E,f+=T)}if(u/l.length<.98)return null;d=p/f;let m=1/Math.min(f,o),h=Math.max(Number.EPSILON,d-m),v=d+m,x=e/v,y=e/h,g=e/d,b=null,w=1/0;for(let E of s){if(E<x||E>y)continue;let T=Math.abs(E/g-1);T<w&&(b=E,w=T)}if(b===null){let E=M1(h,v,1e6),T=M1(x,y,1e6);if(T&&(!E||T.den<E.den||T.den===E.den&&T.num<=E.num))b=T.num/T.den;else if(E)b=e*E.den/E.num;else return null}let k=e/b,S=0;for(let E of l){let T=Math.max(1,Math.round(E/k));Math.abs(E-T*k)<i&&S++}return S/l.length<.98?null:b},M1=(t,e,n)=>{for(let r=1;r<=n;r++){let i=Math.floor(t*r)+1;if(i/r<e)return ci({num:i,den:r})}return null},DS=t=>{let e=[23.976023976023978,29.970029970029973,59.940059940059946,119.88011988011989],n=[12,15,20,24,25,30,48,50,60,100,120,144,240],r=5e-4,i=.025;for(let l of e)if(Math.abs(l/t-1)<=r)return l;let o=t,s=1/0;for(let l of n){let c=Math.abs(l/t-1);c<=i&&c<s&&(o=l,s=c)}return o};Xo();var zS=1;var us=class t extends on{get disposed(){return this._disposed}constructor(e){if(super(),this._demuxerPromise=null,this._format=null,this._trackBackingsCache=null,this._backingToTrack=new Map,this._disposed=!1,this._nextSourceCacheAge=0,this._sourceRefs=[],this._sourceCache=[],this._sourceCachePromises=[],this._onFormatDetermined=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!Array.isArray(e.formats)||e.formats.some(n=>!(n instanceof ss)))throw new TypeError("options.formats must be an array of InputFormat.");if(!(e.source instanceof cn||e.source instanceof Ri))throw new TypeError("options.source must be a Source or SourceRef.");if(e.source instanceof cn&&e.source._disposed)throw new TypeError("options.source must not be a disposed Source.");if(e.initInput!==void 0&&!(e.initInput instanceof t))throw new TypeError("options.initInput, when provided, must be an Input.");e.formatOptions!==void 0&&m1(e.formatOptions,"formatOptions"),this._formats=e.formats,this._initInput=e.initInput??null,this._formatOptions=e.formatOptions??{},e.source instanceof cn?this._rootRef=e.source.ref():this._rootRef=e.source,this._sourceRefs.push(this._rootRef)}get _rootSource(){return this._rootRef.source}async _getSourceUncached(e){A(this._rootSource instanceof Ga);let n=await this._rootSource._resolveRequest(e);return this._emit("source",{source:n.source,request:e,isRoot:e.isRoot}),n}_getSourceCached(e,n=zS){let r=this._sourceCache.find(s=>s.cacheGroup===n&&Nm(s.request,e));if(r)return r.age++,Promise.resolve(r.sourceRef.source.ref());let i=this._sourceCachePromises.find(s=>s.cacheGroup===n&&Nm(s.request,e));if(i)return i.promise.then(s=>s.sourceRef.source.ref());let o=(async()=>{let s=await this._getSourceUncached(e);if(ib(this._sourceCache,p=>p.cacheGroup===n&&p.sourceRef.source._refCount===1)>=4){let p=td(this._sourceCache,m=>m.cacheGroup===n&&m.sourceRef.source._refCount===1?m.age:1/0);A(p!==-1);let f=this._sourceCache[p];this._sourceCache.splice(p,1),f.sourceRef.free(),Fa(this._sourceRefs,f.sourceRef)}this._sourceRefs.push(s);let d=this._sourceCachePromises.findIndex(p=>p.request===e);return A(d!==-1),this._sourceCachePromises.splice(d,1),{request:e,sourceRef:s,age:this._nextSourceCacheAge++,cacheGroup:n}})();return this._sourceCachePromises.push({request:e,cacheGroup:n,promise:o}),o.then(s=>{let l=s.sourceRef.source.ref();return this._sourceCache.push(s),l})}_getDemuxer(){return this._demuxerPromise??=(async()=>{this._reader=new Wd(this._rootSource),this._emit("source",{source:this._rootSource,request:null,isRoot:!0});for(let e of this._formats)if(await e._canReadInput(this))return this._format=e,this._onFormatDetermined?.(e),e._createDemuxer(this);throw new il})()}get source(){return this._rootSource}async getFormat(){return await this._getDemuxer(),A(this._format),this._format}async canRead(){try{return await this._getDemuxer(),!0}catch(e){if(e instanceof il)return!1;throw e}}async getFirstTimestamp(e){e??=await this.getTracks();let n=e.filter(o=>o!==null);if(n.length===0)return 0;let r=await Promise.all(n.map(o=>o._backing.getFirstPacket({metadataOnly:!0}))),i=Math.min(...r.map(o=>o?.timestamp??1/0));return i===1/0?0:i}async computeDuration(e,n){e??=await this.getTracks();let r=e.filter(o=>o!==null);if(r.length===0)return 0;let i=await Promise.all(r.map(o=>o.computeDuration(n)));return Math.max(...i)}async getDurationFromMetadata(e,n){e??=await this.getTracks();let r=e.filter(s=>s!==null),o=(await Promise.all(r.map(s=>s.getDurationFromMetadata(n)))).filter(s=>s!==null);return o.length===0?null:Math.max(...o)}async getTracks(e){e&&=ds(e);let r=(await this._getTrackBackings()).map(i=>this._wrapBackingAsTrack(i));return Vd(r,e)}async getVideoTracks(e){e&&=ds(e);let r=(await this.getTracks()).filter(i=>i.isVideoTrack());return Vd(r,e)}async getAudioTracks(e){e&&=ds(e);let r=(await this.getTracks()).filter(i=>i.isAudioTrack());return Vd(r,e)}async getPrimaryVideoTrack(e){e&&=ds(e);let n=hi(e,{sortBy:async i=>[cs((await i.getDisposition()).default),cs(await i.hasPairableAudioTrack()),cs(!await i.hasOnlyKeyPackets()),jm(await i.getBitrate())]});return(await this.getVideoTracks(n))[0]??null}async getPrimaryAudioTrack(e){e&&=ds(e);let n=await this.getPrimaryVideoTrack(),r=hi(e,{sortBy:async o=>[cs(!n||o.canBePairedWith(n)),cs((await o.getDisposition()).default),jm(await o.getBitrate())]});return(await this.getAudioTracks(r))[0]??null}async _getTrackBackings(){let e=await this._getDemuxer();return this._trackBackingsCache??=await e.getTrackBackings()}_wrapBackingAsTrack(e){let n=this._backingToTrack.get(e);if(n)return n;let i=e.getType()==="video"?new fi(this,e):new mi(this,e);return this._backingToTrack.set(e,i),i}async getMimeType(){return(await this._getDemuxer()).getMimeType()}async getMetadataTags(){return(await this._getDemuxer()).getMetadataTags()}dispose(){if(!this._disposed){this._disposed=!0;for(let e of this._sourceRefs)e.free();this._sourceRefs.length=0,this._demuxerPromise&&this._demuxerPromise.then(e=>e.dispose()).catch(()=>{})}}[Symbol.dispose](){this.dispose()}},il=class extends Error{constructor(e="Input has an unsupported or unrecognizable format."){super(e),this.name="UnsupportedInputFormatError"}},Xe=class extends Error{constructor(e="Input has been disposed."){super(e),this.name="InputDisposedError"}};var Wd=class{constructor(e){this.source=e}get fileSize(){let e=this.source._getFileSize();if(e===void 0)throw new Error("Reading file size too early; read required first.");return e}get fileSizeNonStrict(){return this.source._getFileSize()??null}requestSlice(e,n){if(this.source._disposed)throw new Xe;if(e<0||this.fileSizeNonStrict!==null&&e+n>this.fileSizeNonStrict)return null;if(n===0){let o=new Uint8Array(0);return new Tr(o,ye(o),0,e,e)}let r=e+n,i=this.source._read(e,r,_m,Im);return le(i)?i.then(o=>o?new Tr(o.bytes,o.view,o.offset,e,r):null):i?new Tr(i.bytes,i.view,i.offset,e,r):null}requestSliceRange(e,n,r){if(this.source._disposed)throw new Xe;if(e<0)return null;if(this.fileSizeNonStrict!==null)return this.requestSlice(e,_t(this.fileSizeNonStrict-e,n,r));{let i=this.requestSlice(e,r),o=s=>s||(A(this.fileSizeNonStrict!==null),this.requestSlice(e,_t(this.fileSizeNonStrict-e,n,r)));return le(i)?i.then(o):o(i)}}requestEntireFile(){if(this.fileSizeNonStrict!==null)return this.requestSlice(0,this.fileSizeNonStrict);let e=1024;return(async()=>{let n=[],r=0;for(;;){if(n.length===1&&this.fileSizeNonStrict!==null)return this.requestSlice(0,this.fileSizeNonStrict);let s=this.requestSliceRange(r,0,e);if(le(s)&&(s=await s),!s||s.length===0)break;let l=Ce(s,s.length);n.push(l),r+=s.length}let i=new Uint8Array(r),o=0;for(let s of n)i.set(s,o),o+=s.length;return new Tr(i,ye(i),0,0,r)})()}},Tr=class t{constructor(e,n,r,i,o){this.bytes=e,this.view=n,this.offset=r,this.start=i,this.end=o,this.bufferPos=i-r}static tempFromBytes(e){return new t(e,ye(e),0,0,e.length)}get length(){return this.end-this.start}get filePos(){return this.offset+this.bufferPos}set filePos(e){this.bufferPos=e-this.offset}get remainingLength(){return Math.max(this.end-this.filePos,0)}skip(e){this.bufferPos+=e}slice(e,n=this.end-e){if(e<this.start||e+n>this.end)throw new RangeError("Slicing outside of original slice.");return new t(this.bytes,this.view,this.offset,e,e+n)}},Cr=(t,e)=>{if(t.filePos<t.start||t.filePos+e>t.end)throw new RangeError(`Tried reading [${t.filePos}, ${t.filePos+e}), but slice is [${t.start}, ${t.end}). This is likely an internal error, please report it alongside the file that caused it.`)},Ce=(t,e)=>{Cr(t,e);let n=t.bytes.subarray(t.bufferPos,t.bufferPos+e);return t.bufferPos+=e,n},pe=t=>(Cr(t,1),t.view.getUint8(t.bufferPos++));var rt=t=>{Cr(t,2);let e=t.view.getUint16(t.bufferPos,!1);return t.bufferPos+=2,e},Ar=t=>{Cr(t,3);let e=Wi(t.view,t.bufferPos,!1);return t.bufferPos+=3,e},l1=t=>{Cr(t,2);let e=t.view.getInt16(t.bufferPos,!1);return t.bufferPos+=2,e};var q=t=>{Cr(t,4);let e=t.view.getUint32(t.bufferPos,!1);return t.bufferPos+=4,e};var wr=t=>{Cr(t,4);let e=t.view.getInt32(t.bufferPos,!1);return t.bufferPos+=4,e};var xt=t=>{let e=q(t),n=q(t);return e*4294967296+n},c1=t=>{let e=wr(t),n=q(t);return e*4294967296+n};var d1=t=>{Cr(t,8);let e=t.view.getFloat64(t.bufferPos,!1);return t.bufferPos+=8,e},zt=(t,e)=>{Cr(t,e);let n="";for(let r=0;r<e;r++)n+=String.fromCharCode(t.bytes[t.bufferPos++]);return n};var $d=class{constructor(e){this.mutex=new Go,this.trackTimestampInfo=new WeakMap,this.output=e}onTrackClose(e){}validateTimestamp(e,n,r){let i=this.trackTimestampInfo.get(e);if(i){if(r&&(i.maxTimestampBeforeLastKeyPacket=i.maxTimestamp),i.maxTimestampBeforeLastKeyPacket!==null&&n<i.maxTimestampBeforeLastKeyPacket)throw new Error(`Timestamps cannot be smaller than the largest timestamp of the previous GOP (a GOP begins with a key packet and ends right before the next key packet). Got ${n}s, but largest timestamp is ${i.maxTimestampBeforeLastKeyPacket}s.`);i.maxTimestamp=Math.max(i.maxTimestamp,n)}else{if(!r)throw new Error("First packet must be a key packet.");i={maxTimestamp:n,maxTimestampBeforeLastKeyPacket:null},this.trackTimestampInfo.set(e,i)}}};var Gm=/<(?:(\d{2}):)?(\d{2}):(\d{2}).(\d{3})>/g;var O1=t=>{let e=Math.floor(t/36e5),n=Math.floor(t%(3600*1e3)/(60*1e3)),r=Math.floor(t%(60*1e3)/1e3),i=t%1e3;return e.toString().padStart(2,"0")+":"+n.toString().padStart(2,"0")+":"+r.toString().padStart(2,"0")+"."+i.toString().padStart(3,"0")};var Xi=class{constructor(e){this.writer=e,this.helper=new Uint8Array(8),this.helperView=new DataView(this.helper.buffer),this.offsets=new WeakMap}writeU32(e){this.helperView.setUint32(0,e,!1),this.writer.write(this.helper.subarray(0,4))}writeU64(e){this.helperView.setUint32(0,Math.floor(e/2**32),!1),this.helperView.setUint32(4,e,!1),this.writer.write(this.helper.subarray(0,8))}writeAscii(e){for(let n=0;n<e.length;n++)this.helperView.setUint8(n%8,e.charCodeAt(n)),n%8===7&&this.writer.write(this.helper);e.length%8!==0&&this.writer.write(this.helper.subarray(0,e.length%8))}writeBox(e){if(this.offsets.set(e,this.writer.getPos()),e.contents&&!e.children)this.writeBoxHeader(e,e.size??e.contents.byteLength+8),this.writer.write(e.contents);else{let n=this.writer.getPos();if(this.writeBoxHeader(e,0),e.contents&&this.writer.write(e.contents),e.children)for(let o of e.children)o&&this.writeBox(o);let r=this.writer.getPos(),i=e.size??r-n;this.writer.seek(n),this.writeBoxHeader(e,i),this.writer.seek(r)}}writeBoxHeader(e,n){this.writeU32(e.largeSize?1:n),this.writeAscii(e.type),e.largeSize&&this.writeU64(n)}measureBoxHeader(e){return 8+(e.largeSize?8:0)}patchBox(e){let n=this.offsets.get(e);A(n!==void 0);let r=this.writer.getPos();this.writer.seek(n),this.writeBox(e),this.writer.seek(r)}measureBox(e){if(e.contents&&!e.children)return this.measureBoxHeader(e)+e.contents.byteLength;{let n=this.measureBoxHeader(e);if(e.contents&&(n+=e.contents.byteLength),e.children)for(let r of e.children)r&&(n+=this.measureBox(r));return n}}},de=new Uint8Array(8),pn=new DataView(de.buffer),qe=t=>[(t%256+256)%256],te=t=>(pn.setUint16(0,t,!1),[de[0],de[1]]),Ym=t=>(pn.setInt16(0,t,!1),[de[0],de[1]]),z1=t=>(pn.setUint32(0,t,!1),[de[1],de[2],de[3]]),L=t=>(pn.setUint32(0,t,!1),[de[0],de[1],de[2],de[3]]),Jn=t=>(pn.setInt32(0,t,!1),[de[0],de[1],de[2],de[3]]),Pn=t=>(pn.setUint32(0,Math.floor(t/2**32),!1),pn.setUint32(4,t,!1),[de[0],de[1],de[2],de[3],de[4],de[5],de[6],de[7]]),B1=t=>(pn.setInt32(0,Math.floor(t/2**32),!1),pn.setUint32(4,t,!1),[de[0],de[1],de[2],de[3],de[4],de[5],de[6],de[7]]),L1=t=>(pn.setInt16(0,2**8*t,!1),[de[0],de[1]]),un=t=>(pn.setInt32(0,2**16*t,!1),[de[0],de[1],de[2],de[3]]),Qm=t=>(pn.setInt32(0,2**30*t,!1),[de[0],de[1],de[2],de[3]]),Km=(t,e)=>{let n=[],r=t;do{let i=r&127;r>>=7,n.length>0&&(i|=128),n.push(i),e!==void 0&&e--}while(r>0||e);return n.reverse()},_e=(t,e=!1)=>{let n=Array(t.length).fill(null).map((r,i)=>t.charCodeAt(i));return e&&n.push(0),n},U1=t=>[un(t[0]),un(t[1]),Qm(t[2]),un(t[3]),un(t[4]),Qm(t[5]),un(t[6]),un(t[7]),Qm(t[8])],Z=(t,e,n)=>({type:t,contents:e&&new Uint8Array(e.flat(10)),children:n}),ve=(t,e,n,r,i)=>Z(t,[qe(e),z1(n),r??[]],i),V1=t=>t.isQuickTime?Z("ftyp",[_e("qt  "),L(512),_e("qt  ")]):t.fragmented?t.cmaf?Z("ftyp",[_e("iso5"),L(512),_e("iso5"),_e("iso6"),_e("mp41"),_e("cmfc"),_e("dash")]):Z("ftyp",[_e("iso5"),L(512),_e("iso5"),_e("iso6"),_e("mp41")]):Z("ftyp",[_e("isom"),L(512),_e("isom"),t.holdsAvc?_e("avc1"):[],_e("mp41")]),Jm=()=>Z("styp",[_e("iso5"),L(0),_e("iso5"),_e("iso6"),_e("mp41"),_e("cmfc"),_e("dash")]),Zm=(t,e)=>{let n=Math.max(0,t.minWrittenTimestamp),r=Math.max(0,t.maxWrittenEndTimestamp-n);return Number.isFinite(r)||(r=0),ve("sidx",1,0,[L(1),L(Lt),Pn(Ie(n,Lt)),Pn(0),te(0),te(1),L(e&2147483647),L(Ie(r,Lt)),L(0)])},ol=t=>({type:"mdat",largeSize:t}),W1=t=>({type:"free",size:t}),ps=t=>Z("moov",void 0,[LS(t.creationTime,t.trackDatas),...t.trackDatas.map(e=>US(e,t.creationTime)),t.isFragmented?EE(t.trackDatas):null,BE(t)]),LS=(t,e)=>{let n=Math.max(0,...e.map(s=>Math.max(0,Ie(Yi(s),Lt)+Ie(s.startTimestampOffset??0,Lt)))),r=Math.max(0,...e.map(s=>s.track.id))+1,i=!Rn(t)||!Rn(n),o=i?Pn:L;return ve("mvhd",+i,0,[o(t),o(t),L(Lt),o(n),un(1),L1(1),Array(10).fill(0),U1(Qo),Array(24).fill(0),L(r)])},US=(t,e)=>{let n=X1(t),r=t.startTimestampOffset!==null&&t.startTimestampOffset!==0;return Z("trak",void 0,[VS(t,e),r?WS(t):null,$S(t,e),n.name!==void 0?Z("udta",void 0,[Z("name",[...sn.encode(n.name)])]):null])},VS=(t,e)=>{let n=Math.max(0,Ie(Yi(t),Lt)+Ie(t.startTimestampOffset??0,Lt)),r=!Rn(e)||!Rn(n),i=r?Pn:L,o;if(t.type==="video"&&t.track.metadata.transformationMatrix)o=t.track.metadata.transformationMatrix;else if(t.type==="video"){let{rotation:c,flip:d}=t.track.metadata,u=jo($v(c??0),Hv(d?-1:1,1));o=Wv(u,t.info.width,t.info.height)}else o=Qo;let s=2;t.track.metadata.disposition?.default!==!1&&(s|=1);let l=t.type==="video"?0:t.type==="audio"?1:t.type==="subtitle"?2:Ct(t);return ve("tkhd",+r,s,[i(e),i(e),L(t.track.id),L(0),i(n),Array(8).fill(0),te(0),te(l),L1(t.type==="audio"?1:0),te(0),U1(o),un(t.type==="video"?t.info.width:0),un(t.type==="video"?t.info.height:0)])},WS=t=>{let e=t.startTimestampOffset;if(A(e!==null),e>0){let n=Ie(e,Lt),r=Ie(Yi(t),Lt),i=!Rn(n)||!Rn(r),o=i?Pn:L,s=i?B1:Jn;return Z("edts",void 0,[ve("elst",i?1:0,0,[L(2),o(n),s(-1),un(1),o(r),s(0),un(1)])])}else{let n=Ie(-e,t.timescale),r=Math.max(0,Ie(Yi(t),Lt)+Ie(e,Lt)),i=!Rv(n)||!Rn(r),o=i?Pn:L,s=i?B1:Jn;return Z("edts",void 0,[ve("elst",i?1:0,0,[L(1),o(r),s(n),un(1)])])}},$S=(t,e)=>Z("mdia",void 0,[HS(t,e),eh(!0,qS[t.type],RS[t.type]),jS(t)]),HS=(t,e)=>{let n=Ie(Yi(t),t.timescale),r=!Rn(e)||!Rn(n),i=r?Pn:L;return ve("mdhd",+r,0,[i(e),i(e),L(t.timescale),i(n),te(K1(t.track.metadata.languageCode??za)),te(0)])},qS={video:"vide",audio:"soun",subtitle:"text"},RS={video:"MediabunnyVideoHandler",audio:"MediabunnySoundHandler",subtitle:"MediabunnyTextHandler"},eh=(t,e,n,r="\0\0\0\0")=>ve("hdlr",0,0,[t?_e("mhlr"):L(0),_e(e),_e(r),L(0),L(0),_e(n,!0)]),jS=t=>Z("minf",void 0,[XS[t.type](),YS(),eE(t)]),GS=()=>ve("vmhd",0,1,[te(0),te(0),te(0),te(0)]),QS=()=>ve("smhd",0,0,[te(0),te(0)]),KS=()=>ve("nmhd",0,0),XS={video:GS,audio:QS,subtitle:KS},YS=()=>Z("dinf",void 0,[JS()]),JS=()=>ve("dref",0,0,[L(1)],[ZS()]),ZS=()=>ve("url ",0,1),eE=t=>{let e=t.compositionTimeOffsetTable.length>1||t.compositionTimeOffsetTable.some(n=>n.sampleCompositionTimeOffset!==0);return Z("stbl",void 0,[tE(t),vE(t),e?AE(t):null,e?SE(t):null,xE(t),wE(t),kE(t),bE(t)])},tE=t=>{let e;if(t.type==="video")e=nE(LE(t.track.source._codec,t.info.decoderConfig.codec),t);else if(t.type==="audio"){let n=Q1(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime);A(n),e=lE(n,t)}else t.type==="subtitle"&&(e=gE(WE[t.track.source._codec],t));return A(e),ve("stsd",0,0,[L(1)],[e])},nE=(t,e)=>Z(t,[Array(6).fill(0),te(1),te(0),te(0),Array(12).fill(0),te(e.info.width),te(e.info.height),L(4718592),L(4718592),L(0),te(1),qe(10),_e("Mediabunny"),Array(21).fill(0),te(e.info.hasAlphaChannel?32:24),Ym(65535)],[UE[e.track.source._codec]?.(e)??null,rE(e),jv(e.info.decoderConfig.colorSpace)?null:iE(e),th(e)]),th=t=>t.avgBitrate===0&&t.maxBitrate===0?null:Z("btrt",[L(0),L(t.maxBitrate),L(t.avgBitrate)]),rE=t=>t.info.pixelAspectRatio.num===t.info.pixelAspectRatio.den?null:Z("pasp",[L(t.info.pixelAspectRatio.num),L(t.info.pixelAspectRatio.den)]),iE=t=>{let e=t.info.decoderConfig.colorSpace;return Z("colr",[_e(t.muxer.isQuickTime?"nclc":"nclx"),te(e?.primaries!=null?mr[e.primaries]:2),te(e?.transfer!=null?hr[e.transfer]:2),te(e?.matrix!=null?gr[e.matrix]:2),t.muxer.isQuickTime?[]:qe((e?.fullRange?1:0)<<7)])},oE=t=>t.info.decoderConfig&&Z("avcC",[...Qe(t.info.decoderConfig.description)]),sE=t=>t.info.decoderConfig&&Z("hvcC",[...Qe(t.info.decoderConfig.description)]),F1=t=>{if(!t.info.decoderConfig)return null;let e=t.info.decoderConfig,n=e.codec.split("."),r=Number(n[1]),i=Number(n[2]),o=Number(n[3]),s=n[4]?Number(n[4]):1,l=n[8]?Number(n[8]):Number(e.colorSpace?.fullRange??0),c=(o<<4)+(s<<1)+l,d=n[5]?Number(n[5]):e.colorSpace?.primaries?mr[e.colorSpace.primaries]:1,u=n[6]?Number(n[6]):e.colorSpace?.transfer?hr[e.colorSpace.transfer]:1,p=n[7]?Number(n[7]):e.colorSpace?.matrix?gr[e.colorSpace.matrix]:1;return ve("vpcC",1,0,[qe(r),qe(i),qe(c),qe(d),qe(u),qe(p),te(0)])},aE=t=>Z("av1C",$b(t.info.decoderConfig.codec)),lE=(t,e)=>{let n=0,r,i=16,o=Je.includes(e.track.source._codec);if(o){let s=e.track.source._codec,{sampleSize:l}=jt(s);i=8*l,i>16&&(n=1)}if(e.muxer.isQuickTime&&(n=1),n===0)r=[Array(6).fill(0),te(1),te(n),te(0),L(0),te(e.info.numberOfChannels),te(i),te(0),te(0),te(e.info.sampleRate<2**16?e.info.sampleRate:0),te(0)];else{let s=o?0:-2;r=[Array(6).fill(0),te(1),te(n),te(0),L(0),te(e.info.numberOfChannels),te(Math.min(i,16)),Ym(s),te(0),te(e.info.sampleRate<2**16?e.info.sampleRate:0),te(0),o?[L(1),L(i/8),L(e.info.numberOfChannels*i/8)]:[L(0),L(0),L(0)],L(2)]}return Z(t,r,[VE(e.track.source._codec,e.muxer.isQuickTime)?.(e)??null,th(e)])},Xm=t=>{let e;switch(t.track.source._codec){case"aac":e=64;break;case"mp3":e=107;break;case"vorbis":e=221;break;default:throw new Error(`Unhandled audio codec: ${t.track.source._codec}`)}let n=[...qe(e),...qe(21),...z1(0),...L(t.maxBitrate),...L(t.avgBitrate)];if(t.info.decoderConfig.description){let r=Qe(t.info.decoderConfig.description);n=[...n,...qe(5),...Km(r.byteLength),...r]}return n=[...te(1),...qe(0),...qe(4),...Km(n.length),...n,...qe(6),...qe(1),...qe(2)],n=[...qe(3),...Km(n.length),...n],ve("esds",0,0,n)},gi=t=>Z("wave",void 0,[cE(t),dE(t),Z("\0\0\0\0")]),cE=t=>Z("frma",[_e(Q1(t.track.source._codec,t.info.decoderConfig.codec,t.muxer.isQuickTime))]),dE=t=>{let{littleEndian:e}=jt(t.track.source._codec);return Z("enda",[te(+e)])},uE=t=>{let e=t.info.numberOfChannels,n=3840,r=t.info.sampleRate,i=0,o=0,s=new Uint8Array(0),l=t.info.decoderConfig?.description;if(l){A(l.byteLength>=18);let c=Qe(l),d=Cb(c);e=d.outputChannelCount,n=d.preSkip,r=d.inputSampleRate,i=d.outputGain,o=d.channelMappingFamily,d.channelMappingTable&&(s=d.channelMappingTable)}return Z("dOps",[qe(0),qe(e),te(n),L(r),Ym(i),qe(o),...s])},pE=t=>{let e=t.info.decoderConfig?.description;A(e);let n=Qe(e);return ve("dfLa",0,0,[...n.subarray(4)])},Xn=t=>{let{littleEndian:e,sampleSize:n}=jt(t.track.source._codec),r=+e;return ve("pcmC",0,0,[qe(r),qe(8*n)])},fE=t=>{A(t.info.primingPacket);let e=_b(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract AC-3 frame info from the audio packet. Ensure the packets contain valid AC-3 sync frames (as specified in ETSI TS 102 366).");let n=new Uint8Array(3),r=new Ae(n);return r.writeBits(2,e.fscod),r.writeBits(5,e.bsid),r.writeBits(3,e.bsmod),r.writeBits(3,e.acmod),r.writeBits(1,e.lfeon),r.writeBits(5,e.bitRateCode),r.writeBits(5,0),Z("dac3",[...n])},mE=t=>{A(t.info.primingPacket);let e=Ib(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract E-AC-3 frame info from the audio packet. Ensure the packets contain valid E-AC-3 sync frames (as specified in ETSI TS 102 366).");let n=16;for(let s of e.substreams)n+=23,s.numDepSub>0?n+=9:n+=1;let r=Math.ceil(n/8),i=new Uint8Array(r),o=new Ae(i);o.writeBits(13,e.dataRate),o.writeBits(3,e.substreams.length-1);for(let s of e.substreams)o.writeBits(2,s.fscod),o.writeBits(5,s.bsid),o.writeBits(1,0),o.writeBits(1,0),o.writeBits(3,s.bsmod),o.writeBits(3,s.acmod),o.writeBits(1,s.lfeon),o.writeBits(3,0),o.writeBits(4,s.numDepSub),s.numDepSub>0?o.writeBits(9,s.chanLoc):o.writeBits(1,0);return Z("dec3",[...i])},hE=t=>{A(t.info.primingPacket);let e=km(t.info.primingPacket.data);if(!e)throw new Error("Couldn't extract DTS frame info from the audio packet. Ensure the packets contain valid DTS frames as specified in ETSI TS 102 114.");return Z("ddts",[...Db(e)])},gE=(t,e)=>Z(t,[Array(6).fill(0),te(1)],[$E[e.track.source._codec](e),th(e)]),yE=t=>Z("vttC",[...sn.encode(t.info.config.description)]);var vE=t=>ve("stts",0,0,[L(t.timeToSampleTable.length),t.timeToSampleTable.map(e=>[L(e.sampleCount),L(e.sampleDelta)])]),bE=t=>{if(t.samples.every(n=>n.type==="key"))return null;let e=[...t.samples.entries()].filter(([,n])=>n.type==="key");return ve("stss",0,0,[L(e.length),e.map(([n])=>L(n+1))])},xE=t=>ve("stsc",0,0,[L(t.compactlyCodedChunkTable.length),t.compactlyCodedChunkTable.map(e=>[L(e.firstChunk),L(e.samplesPerChunk),L(1)])]),wE=t=>{if(t.type==="audio"&&t.info.requiresPcmTransformation){let{sampleSize:e}=jt(t.track.source._codec);return ve("stsz",0,0,[L(e*t.info.numberOfChannels),L(t.samples.reduce((n,r)=>n+Ie(r.duration,t.timescale),0))])}return ve("stsz",0,0,[L(0),L(t.samples.length),t.samples.map(e=>L(e.size))])},kE=t=>t.finalizedChunks.length>0&&He(t.finalizedChunks).offset>=2**32?ve("co64",0,0,[L(t.finalizedChunks.length),t.finalizedChunks.map(e=>Pn(e.offset))]):ve("stco",0,0,[L(t.finalizedChunks.length),t.finalizedChunks.map(e=>L(e.offset))]),AE=t=>ve("ctts",1,0,[L(t.compositionTimeOffsetTable.length),t.compositionTimeOffsetTable.map(e=>[L(e.sampleCount),Jn(e.sampleCompositionTimeOffset)])]),SE=t=>{let e=1/0,n=-1/0,r=1/0,i=-1/0;A(t.compositionTimeOffsetTable.length>0),A(t.samples.length>0);for(let s=0;s<t.compositionTimeOffsetTable.length;s++){let l=t.compositionTimeOffsetTable[s];e=Math.min(e,l.sampleCompositionTimeOffset),n=Math.max(n,l.sampleCompositionTimeOffset)}for(let s=0;s<t.samples.length;s++){let l=t.samples[s];r=Math.min(r,Ie(l.timestamp,t.timescale)),i=Math.max(i,Ie(l.timestamp+l.duration,t.timescale))}let o=Math.max(-e,0);return i>=2**31?null:ve("cslg",0,0,[Jn(o),Jn(e),Jn(n),Jn(r),Jn(i)])},EE=t=>Z("mvex",void 0,t.map(TE)),TE=t=>ve("trex",0,0,[L(t.track.id),L(1),L(0),L(0),L(0)]),nh=(t,e)=>Z("moof",void 0,[CE(t),...e.map(_E)]),CE=t=>ve("mfhd",0,0,[L(t)]),$1=t=>{let e=0,n=0,r=0,i=0,o=t.type==="delta";return n|=+o,o?e|=1:e|=2,e<<24|n<<16|r<<8|i},_E=t=>Z("traf",void 0,[IE(t),NE(t),PE(t)]),IE=t=>{A(t.currentChunk);let e=0;e|=8,e|=16,e|=32,e|=131072;let n=t.currentChunk.samples[1]??t.currentChunk.samples[0],r={duration:n.timescaleUnitsToNextSample,size:n.size,flags:$1(n)};return ve("tfhd",0,e,[L(t.track.id),L(r.duration),L(r.size),L(r.flags)])},NE=t=>(A(t.currentChunk),ve("tfdt",1,0,[Pn(Ie(t.currentChunk.startTimestamp,t.timescale))])),PE=t=>{A(t.currentChunk);let e=t.currentChunk.samples.map(v=>v.timescaleUnitsToNextSample),n=t.currentChunk.samples.map(v=>v.size),r=t.currentChunk.samples.map($1),i=t.currentChunk.samples.map(v=>Ie(v.timestamp-v.decodeTimestamp,t.timescale)),o=new Set(e),s=new Set(n),l=new Set(r),c=new Set(i),d=l.size===2&&r[0]!==r[1],u=o.size>1,p=s.size>1,f=!d&&l.size>1,m=c.size>1||[...c].some(v=>v!==0),h=0;return h|=1,h|=4*+d,h|=256*+u,h|=512*+p,h|=1024*+f,h|=2048*+m,ve("trun",1,h,[L(t.currentChunk.samples.length),L(t.currentChunk.offset-t.currentChunk.moofOffset||0),d?L(r[0]):[],t.currentChunk.samples.map((v,x)=>[u?L(e[x]):[],p?L(n[x]):[],f?L(r[x]):[],m?Jn(i[x]):[]])])},H1=t=>Z("mfra",void 0,[...t.map(ME),OE()]),ME=t=>ve("tfra",1,0,[L(t.track.id),L(63),L(t.finalizedChunks.length),t.finalizedChunks.map(n=>[Pn(Ie(n.samples[0].timestamp,t.timescale)),Pn(n.moofOffset),L(n.trafIndex+1),L(1),L(1)])]),OE=()=>ve("mfro",0,0,[L(0)]),q1=()=>Z("vtte"),R1=(t,e,n,r,i)=>Z("vttc",void 0,[i!==null?Z("vsid",[Jn(i)]):null,n!==null?Z("iden",[...sn.encode(n)]):null,e!==null?Z("ctim",[...sn.encode(O1(e))]):null,r!==null?Z("sttg",[...sn.encode(r)]):null,Z("payl",[...sn.encode(t)])]),j1=t=>Z("vtta",[...sn.encode(t)]),BE=t=>{let e=[],n=t.format._options.metadataFormat??"auto",r=t.output._metadataTags;if(n==="mdir"||n==="auto"&&!t.isQuickTime){let i=DE(r);i&&e.push(i)}else if(n==="mdta"){let i=zE(r);i&&e.push(i)}else(n==="udta"||n==="auto"&&t.isQuickTime)&&FE(e,t.output._metadataTags);return e.length===0?null:Z("udta",void 0,e)},FE=(t,e)=>{for(let{key:n,value:r}of ed(e))switch(n){case"title":t.push(Yn("\xA9nam",r));break;case"description":t.push(Yn("\xA9des",r));break;case"artist":t.push(Yn("\xA9ART",r));break;case"album":t.push(Yn("\xA9alb",r));break;case"albumArtist":t.push(Yn("albr",r));break;case"genre":t.push(Yn("\xA9gen",r));break;case"date":t.push(Yn("\xA9day",r.toISOString().slice(0,10)));break;case"comment":t.push(Yn("\xA9cmt",r));break;case"lyrics":t.push(Yn("\xA9lyr",r));break;case"raw":break;case"discNumber":case"discsTotal":case"trackNumber":case"tracksTotal":case"beatsPerMinute":case"images":break;default:Ct(n)}if(e.raw)for(let n in e.raw){let r=e.raw[n];r==null||n.length!==4||t.some(i=>i.type===n)||(typeof r=="string"?t.push(Yn(n,r)):r instanceof Uint8Array&&t.push(Z(n,Array.from(r))))}},Yn=(t,e)=>{let n=sn.encode(e);return Z(t,[te(n.length),te(K1("und")),Array.from(n)])},D1={"image/jpeg":13,"image/png":14,"image/bmp":27},G1=(t,e)=>{let n=[];for(let{key:r,value:i}of ed(t))switch(r){case"title":n.push({key:e?"title":"\xA9nam",value:Nn(i)});break;case"description":n.push({key:e?"description":"\xA9des",value:Nn(i)});break;case"artist":n.push({key:e?"artist":"\xA9ART",value:Nn(i)});break;case"album":n.push({key:e?"album":"\xA9alb",value:Nn(i)});break;case"albumArtist":n.push({key:e?"album_artist":"aART",value:Nn(i)});break;case"comment":n.push({key:e?"comment":"\xA9cmt",value:Nn(i)});break;case"genre":n.push({key:e?"genre":"\xA9gen",value:Nn(i)});break;case"beatsPerMinute":e||n.push({key:"tmpo",value:Z("data",[L(21),L(0),te(i)])});break;case"lyrics":n.push({key:e?"lyrics":"\xA9lyr",value:Nn(i)});break;case"date":n.push({key:e?"date":"\xA9day",value:Nn(i.toISOString().slice(0,10))});break;case"images":for(let o of i)o.kind==="coverFront"&&n.push({key:"covr",value:Z("data",[L(D1[o.mimeType]??0),L(0),Array.from(o.data)])});break;case"trackNumber":if(e){let o=t.tracksTotal!==void 0?`${i}/${t.tracksTotal}`:i.toString();n.push({key:"track",value:Nn(o)})}else n.push({key:"trkn",value:Z("data",[L(0),L(0),te(0),te(i),te(t.tracksTotal??0),te(0)])});break;case"discNumber":e||n.push({key:"disc",value:Z("data",[L(0),L(0),te(0),te(i),te(t.discsTotal??0),te(0)])});break;case"tracksTotal":case"discsTotal":break;case"raw":break;default:Ct(r)}if(t.raw)for(let r in t.raw){let i=t.raw[r];i==null||!e&&r.length!==4||n.some(o=>o.key===r)||(typeof i=="string"?n.push({key:r,value:Nn(i)}):i instanceof Uint8Array?n.push({key:r,value:Z("data",[L(0),L(0),Array.from(i)])}):i instanceof Tn&&n.push({key:r,value:Z("data",[L(D1[i.mimeType]??0),L(0),Array.from(i.data)])}))}return n},DE=t=>{let e=G1(t,!1);return e.length===0?null:ve("meta",0,0,void 0,[eh(!1,"mdir","","appl"),Z("ilst",void 0,e.map(n=>Z(n.key,void 0,[n.value])))])},zE=t=>{let e=G1(t,!0);return e.length===0?null:Z("meta",void 0,[eh(!1,"mdta",""),ve("keys",0,0,[L(e.length)],e.map(n=>Z("mdta",[...sn.encode(n.key)]))),Z("ilst",void 0,e.map((n,r)=>{let i=String.fromCharCode(...L(r+1));return Z(i,void 0,[n.value])}))])},Nn=t=>Z("data",[L(1),L(0),...sn.encode(t)]),LE=(t,e)=>{switch(t){case"avc":return e.startsWith("avc3")?"avc3":"avc1";case"hevc":return"hvc1";case"vp8":return"vp08";case"vp9":return"vp09";case"av1":return"av01";case"prores":return e}},UE={avc:oE,hevc:sE,vp8:F1,vp9:F1,av1:aE,prores:null},Q1=(t,e,n)=>{switch(t){case"aac":return"mp4a";case"mp3":return"mp4a";case"opus":return"Opus";case"vorbis":return"mp4a";case"flac":return"fLaC";case"ulaw":return"ulaw";case"alaw":return"alaw";case"pcm-u8":return"raw ";case"pcm-s8":return"sowt";case"ac3":return"ac-3";case"eac3":return"ec-3";case"dts":return e}if(n)switch(t){case"pcm-s16":return"sowt";case"pcm-s16be":return"twos";case"pcm-s24":return"in24";case"pcm-s24be":return"in24";case"pcm-s32":return"in32";case"pcm-s32be":return"in32";case"pcm-f32":return"fl32";case"pcm-f32be":return"fl32";case"pcm-f64":return"fl64";case"pcm-f64be":return"fl64"}else switch(t){case"pcm-s16":return"ipcm";case"pcm-s16be":return"ipcm";case"pcm-s24":return"ipcm";case"pcm-s24be":return"ipcm";case"pcm-s32":return"ipcm";case"pcm-s32be":return"ipcm";case"pcm-f32":return"fpcm";case"pcm-f32be":return"fpcm";case"pcm-f64":return"fpcm";case"pcm-f64be":return"fpcm"}},VE=(t,e)=>{switch(t){case"aac":return Xm;case"mp3":return Xm;case"opus":return uE;case"vorbis":return Xm;case"flac":return pE;case"ac3":return fE;case"eac3":return mE;case"dts":return hE}if(e)switch(t){case"pcm-s24":return gi;case"pcm-s24be":return gi;case"pcm-s32":return gi;case"pcm-s32be":return gi;case"pcm-f32":return gi;case"pcm-f32be":return gi;case"pcm-f64":return gi;case"pcm-f64be":return gi}else switch(t){case"pcm-s16":return Xn;case"pcm-s16be":return Xn;case"pcm-s24":return Xn;case"pcm-s24be":return Xn;case"pcm-s32":return Xn;case"pcm-s32be":return Xn;case"pcm-f32":return Xn;case"pcm-f32be":return Xn;case"pcm-f64":return Xn;case"pcm-f64be":return Xn}return null},WE={webvtt:"wvtt"},$E={webvtt:yE},K1=t=>{A(t.length===3);let e=0;for(let n=0;n<3;n++)e<<=5,e+=t.charCodeAt(n)-96;return e};var Ji=class{constructor(e,n){if(this.finalized=!1,this.started=!1,this.pos=0,this.trackedWrites=null,this.trackedStart=-1,this.trackedEnd=-1,e._writerAcquired)throw new Error("Can't have multiple Writers for the same Target.");this.target=e,e._setMonotonicity(n),e._writerAcquired=!0}start(){A(!this.started),this.target._start(),this.started=!0}write(e){A(this.started&&!this.finalized),this.maybeTrackWrites(e),this.target._write(e,this.pos),this.pos+=e.byteLength}seek(e){this.pos=e}getPos(){return this.pos}async flush(){return A(this.started&&!this.finalized),this.target._flush()}async finalize(){A(this.started&&!this.finalized),await this.target._finalize(),this.finalized=!0}maybeTrackWrites(e){if(!this.trackedWrites)return;let n=this.getPos();if(n<this.trackedStart){if(n+e.byteLength<=this.trackedStart)return;e=e.subarray(this.trackedStart-n),n=0}let r=n+e.byteLength-this.trackedStart,i=this.trackedWrites.byteLength;for(;i<r;)i*=2;if(i!==this.trackedWrites.byteLength){let o=new Uint8Array(i);o.set(this.trackedWrites,0),this.trackedWrites=o}this.trackedWrites.set(e,n-this.trackedStart),this.trackedEnd=Math.max(this.trackedEnd,n+e.byteLength)}startTrackingWrites(){this.trackedWrites=new Uint8Array(2**10),this.trackedStart=this.getPos(),this.trackedEnd=this.trackedStart}stopTrackingWrites(){if(!this.trackedWrites)throw new Error("Internal error: Can't get tracked writes since nothing was tracked.");let n={data:this.trackedWrites.subarray(0,this.trackedEnd-this.trackedStart),start:this.trackedStart,end:this.trackedEnd};return this.trackedWrites=null,n}};var Gt=class extends on{constructor(){super(...arguments),this._writerAcquired=!1,this._monotonicity=null,this.onwrite=null}_setMonotonicity(e){this._monotonicity!==!1&&(this._monotonicity=e)}_dispatchWrite(e,n){this.onwrite?.(e,n),this._emit("write",{start:e,end:n})}slice(e){if(!Number.isInteger(e)||e<0)throw new TypeError("offset must be a non-negative integer.");return new Hd(this,e)}},rh=2**16,ih=2**32,Zn=class extends Gt{constructor(e={}){if(super(),this.buffer=null,this._maxPos=0,!e||typeof e!="object")throw new TypeError("BufferTarget options, when provided, must be an object.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");if(this._options=e,this._supportsResize="resize"in new ArrayBuffer(0),this._supportsResize)try{this._buffer=new ArrayBuffer(rh,{maxByteLength:ih})}catch{this._buffer=new ArrayBuffer(rh),this._supportsResize=!1}else this._buffer=new ArrayBuffer(rh);this._bytes=new Uint8Array(this._buffer)}_ensureSize(e){let n=this._buffer.byteLength;for(;n<e;)n*=2;if(n!==this._buffer.byteLength){if(n>ih)throw new Error(`ArrayBuffer exceeded maximum size of ${ih} bytes. Please consider using another target.`);if(this._supportsResize)this._buffer.resize(n);else{let r=new ArrayBuffer(n),i=new Uint8Array(r);i.set(this._bytes,0),this._buffer=r,this._bytes=i}}}_start(){}_write(e,n){this._ensureSize(n+e.byteLength),this._bytes.set(e,n),this._maxPos=Math.max(this._maxPos,n+e.byteLength),this._dispatchWrite(n,n+e.byteLength)}async _flush(){}async _finalize(){this.buffer=this._buffer.slice(0,this._maxPos),this._options.onFinalize&&await this._options.onFinalize(this.buffer),this._emit("finalized")}async _close(){}_getSlice(e,n){return this._bytes.slice(e,n)}},NP=2**24;var Hd=class extends Gt{constructor(e,n){super(),this._baseTarget=e,this._offset=n}_start(){}_write(e,n){this._baseTarget._write(e,this._offset+n),this._dispatchWrite(n,n+e.byteLength)}_flush(){return this._baseTarget._flush()}async _finalize(){this._emit("finalized")}async _close(){}_setMonotonicity(e){super._setMonotonicity(e),this._baseTarget._setMonotonicity(e)}},Zi=class{constructor(e,n){if(this.rootPath=e,this.getTarget=n,typeof e!="string")throw new TypeError("rootPath must be a string.");if(typeof n!="function")throw new TypeError("getTarget must be a function.")}};var Lt=57600,HE=2082844800,X1=t=>{let e={},n=t.track;return n.metadata.name!==void 0&&(e.name=n.metadata.name),e},Ie=(t,e,n=!0)=>{let r=t*e;return n?Math.round(r):r},Yi=t=>{if(t.samples.length===0)return 0;let e=1/0,n=-1/0;for(let r=0;r<t.samples.length;r++){let i=t.samples[r];i.timestamp<e&&(e=i.timestamp),i.timestamp+i.duration>n&&(n=i.timestamp+i.duration)}return e===1/0?0:n-e},qd=class extends $d{constructor(e,n){super(e),this.writer=null,this.boxWriter=null,this.initWriter=null,this.initBoxWriter=null,this.auxTarget=new Zn,this.auxWriter=new Ji(this.auxTarget,!1),this.auxBoxWriter=new Xi(this.auxWriter),this.mdat=null,this.ftypSize=null,this.trackDatas=[],this.allTracksKnown=Ke(),this.creationTime=Math.floor(Date.now()/1e3)+HE,this.finalizedChunks=[],this.wroteFragmentedHeader=!1,this.nextFragmentNumber=1,this.maxWrittenTimestamp=-1/0,this.minWrittenTimestamp=1/0,this.maxWrittenEndTimestamp=-1/0,this.segmentHeaderSize=null,this.format=n,this.formatOptions={...n._options},this.isQuickTime=n instanceof ms,this.isCmaf=n instanceof fs,this.minimumFragmentDuration=this.formatOptions.minimumFragmentDuration??(n instanceof fs?1/0:1),this.auxWriter.start()}async start(){let e=await this.mutex.acquire();if(this.isCmaf?(this.fastStart="fragmented",this.isFragmented=!0):(this.writer=await this.output._getRootWriter(r=>this.formatOptions.fastStart!==void 0?this.formatOptions.fastStart==="fragmented":r instanceof Zn),this.boxWriter=new Xi(this.writer),this.fastStart=this.formatOptions.fastStart??(this.writer.target instanceof Zn?"in-memory":!1),this.isFragmented=this.fastStart==="fragmented"),this.isCmaf){if(!this.output._hasInitTarget())throw new Error("CMAF outputs require the initTarget field in OutputOptions to be set; the init segment will be written to it.");let r=await this.output._getInitTarget(),i=new Ji(r,!0);i.start(),this.initWriter=i,this.initBoxWriter=new Xi(i)}let n=this.output.tracks.some(r=>r.isVideoTrack()&&r.source._codec==="avc");{let r=this.initBoxWriter??this.boxWriter;if(A(r),this.formatOptions.onFtyp&&r.writer.startTrackingWrites(),r.writeBox(V1({isQuickTime:this.isQuickTime,holdsAvc:n,fragmented:this.isFragmented,cmaf:this.isCmaf})),this.formatOptions.onFtyp){let{data:i,start:o}=r.writer.stopTrackingWrites();this.formatOptions.onFtyp(i,o)}this.ftypSize=r.writer.getPos(),this.isCmaf&&await this.initWriter.flush()}if(this.fastStart!=="in-memory")if(this.fastStart==="reserve"){for(let r of this.output.tracks)if(r.metadata.maximumPacketCount===void 0)throw new Error("All tracks must specify maximumPacketCount in their metadata when using fastStart: 'reserve'.")}else this.isFragmented||(A(this.writer),A(this.boxWriter),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ol(!0),this.boxWriter.writeBox(this.mdat));await this.writer?.flush();for(let r of this.output.tracks)r.isVideoTrack()&&r.metadata.decoderConfig?this.getVideoTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig}):r.isAudioTrack()&&r.metadata.decoderConfig&&this.getAudioTrackData(r,r.metadata.primingPacket??null,{decoderConfig:r.metadata.decoderConfig});e()}allTracksAreKnown(){for(let e of this.output.tracks)if(!e.source._closed&&!this.trackDatas.some(n=>n.track===e))return!1;return!0}async getMimeType(){await this.allTracksKnown.promise;let e=this.trackDatas.map(n=>n.type==="video"||n.type==="audio"?n.info.decoderConfig.codec:{webvtt:"wvtt"}[n.track.source._codec]);return xd({isQuickTime:this.isQuickTime,hasVideo:this.trackDatas.some(n=>n.type==="video"),hasAudio:this.trackDatas.some(n=>n.type==="audio"),codecStrings:e})}getVideoTrackData(e,n,r){let i=this.trackDatas.find(m=>m.track===e);if(i)return i;yd(r,e.source._codec),A(r),A(r.decoderConfig);let o={...r.decoderConfig};A(o.codedWidth!==void 0),A(o.codedHeight!==void 0);let s=!1;if(e.source._codec==="avc"&&!o.description){if(!n)throw new Error("No AVC description provided; you must therefore provide a priming packet.");let m=dd(n.data);if(!m)throw new Error("Couldn't extract an AVCDecoderConfigurationRecord from the AVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.264) when not providing a description, or provide a description (must be an AVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in AVCC format.");o.description=ud(m),s=!0}else if(e.source._codec==="hevc"&&!o.description){if(!n)throw new Error("No HEVC description provided; you must therefore provide a priming packet.");let m=fd(n.data);if(!m)throw new Error("Couldn't extract an HEVCDecoderConfigurationRecord from the HEVC packet. Make sure the packets are in Annex B format (as specified in ITU-T-REC-H.265) when not providing a description, or provide a description (must be an HEVCDecoderConfigurationRecord as specified in ISO 14496-15) and ensure the packets are in HEVC format.");o.description=bb(m),s=!0}let l=nb(1/(e.metadata.frameRate??Lt),1e6).den,c=o.displayAspectWidth,d=o.displayAspectHeight,u=c===void 0||d===void 0?{num:1,den:1}:ci({num:c*o.codedHeight,den:d*o.codedWidth}),p=o.codec==="ap4h"||o.codec==="ap4x",f={muxer:this,track:e,type:"video",info:{width:o.codedWidth,height:o.codedHeight,pixelAspectRatio:u,decoderConfig:o,requiresAnnexBTransformation:s,hasAlphaChannel:p},timescale:l,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:e.source._nominalBitrate??e.metadata.averageBitrate??0,maxBitrate:e.source._nominalBitrate??e.metadata.bitrate??0};return this.trackDatas.push(f),this.trackDatas.sort((m,h)=>m.track.id-h.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),f}getAudioTrackData(e,n,r){let i=this.trackDatas.find(c=>c.track===e);if(i)return i;vd(r,e.source._codec),A(r),A(r.decoderConfig);let o={...r.decoderConfig},s=!1;if(e.source._codec==="aac"&&!o.description){if(!n)throw new Error("No AAC description provided; you must therefore provide a priming packet.");let c=Tm(Tr.tempFromBytes(n.data));if(!c)throw new Error("Couldn't parse ADTS header from the AAC packet. Make sure the packets are in ADTS format (as specified in ISO 13818-7) when not providing a description, or provide a description (must be an AudioSpecificConfig as specified in ISO 14496-3) and ensure the packets are raw AAC data.");let d=Va[c.samplingFrequencyIndex],u=id[c.channelConfiguration];if(d===void 0||u===void 0)throw new Error("Invalid ADTS frame header.");o.description=ub({objectType:c.objectType,outputSampleRate:d,outputNumberOfChannels:u}),s=!0}if(!n){if(e.source._codec==="ac3"||e.source._codec==="eac3")throw new Error("AC-3/E-AC-3 require a priming packet.");if(e.source._codec==="dts")throw new Error("DTS requires a priming packet.")}let l={muxer:this,track:e,type:"audio",info:{numberOfChannels:r.decoderConfig.numberOfChannels,sampleRate:r.decoderConfig.sampleRate,decoderConfig:o,requiresPcmTransformation:!this.isFragmented&&Je.includes(e.source._codec),expectedNextPcmPacketTimestamp:null,requiresAdtsStripping:s,primingPacket:n},timescale:o.sampleRate,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:e.source._nominalBitrate??e.metadata.averageBitrate??0,maxBitrate:e.source._nominalBitrate??e.metadata.bitrate??0};return this.trackDatas.push(l),this.trackDatas.sort((c,d)=>c.track.id-d.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),l}getSubtitleTrackData(e,n){let r=this.trackDatas.find(o=>o.track===e);if(r)return r;Kb(n),A(n),A(n.config);let i={muxer:this,track:e,type:"subtitle",info:{config:n.config},timescale:1e3,samples:[],sampleQueue:[],timestampProcessingQueue:[],timeToSampleTable:[],compositionTimeOffsetTable:[],lastTimescaleUnits:null,lastSample:null,startTimestampOffset:null,finalizedChunks:[],currentChunk:null,compactlyCodedChunkTable:[],closed:!1,avgBitrate:e.source._nominalBitrate??e.metadata.averageBitrate??0,maxBitrate:e.source._nominalBitrate??e.metadata.bitrate??0,lastCueEndTimestamp:null,cueQueue:[],nextSourceId:0,cueToSourceId:new WeakMap};return this.trackDatas.push(i),this.trackDatas.sort((o,s)=>o.track.id-s.track.id),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),i}async addEncodedVideoPacket(e,n,r){let i=await this.mutex.acquire();try{let o=this.getVideoTrackData(e,n,r),s=n.data;if(o.info.requiresAnnexBTransformation){let c=[...Jo(s)].map(d=>s.subarray(d.offset,d.offset+d.length));if(c.length===0)throw new Error("Failed to transform packet data. Make sure all packets are provided in Annex B format, as specified in ITU-T-REC-H.264 and ITU-T-REC-H.265.");s=cd(c,4)}this.validateTimestamp(o.track,n.timestamp,n.type==="key");let l=this.createSampleForTrack(o,s,n.timestamp,n.duration,n.type);await this.registerSample(o,l)}finally{i()}}async addEncodedAudioPacket(e,n,r){let i=await this.mutex.acquire();try{let o=this.getAudioTrackData(e,n,r),s=n.data;if(o.info.requiresAdtsStripping){let u=Tm(Tr.tempFromBytes(s));if(!u)throw new Error("Expected ADTS frame, didn't get one.");let p=u.crcCheck===null?u1:p1;s=s.subarray(p)}this.validateTimestamp(o.track,n.timestamp,n.type==="key");let l=n.timestamp,c=n.duration;if(o.info.requiresPcmTransformation){let p=jt(o.info.decoderConfig.codec).sampleSize*o.info.numberOfChannels;if(c=s.byteLength/p/o.info.sampleRate,o.info.expectedNextPcmPacketTimestamp!==null){let f=l-o.info.expectedNextPcmPacketTimestamp;if(f<.01)l=o.info.expectedNextPcmPacketTimestamp;else{let m=await this.padWithSilence(o,o.info.expectedNextPcmPacketTimestamp,f);l=o.info.expectedNextPcmPacketTimestamp+m}}o.info.expectedNextPcmPacketTimestamp=l+c}let d=this.createSampleForTrack(o,s,l,c,n.type);await this.registerSample(o,d)}finally{i()}}async padWithSilence(e,n,r){let i=Ie(r,e.timescale);if(r=i/e.timescale,i>0){let{sampleSize:o,silentValue:s}=jt(e.info.decoderConfig.codec),l=i*e.info.numberOfChannels,c=new Uint8Array(o*l).fill(s),d=this.createSampleForTrack(e,new Uint8Array(c.buffer),n,r,"key");await this.registerSample(e,d)}return r}async addSubtitleCue(e,n,r){let i=await this.mutex.acquire();try{let o=this.getSubtitleTrackData(e,r);this.validateTimestamp(o.track,n.timestamp,!0),e.source._codec==="webvtt"&&(o.cueQueue.push(n),await this.processWebVTTCues(o,n.timestamp))}finally{i()}}async processWebVTTCues(e,n){for(;e.cueQueue.length>0;){e.lastCueEndTimestamp??=Math.min(0,e.cueQueue[0].timestamp);let r=new Set([]);for(let d of e.cueQueue)A(d.timestamp<=n),A(e.lastCueEndTimestamp<=d.timestamp+d.duration),r.add(Math.max(d.timestamp,e.lastCueEndTimestamp)),r.add(d.timestamp+d.duration);let i=[...r].sort((d,u)=>d-u),o=i[0],s=i[1]??o;if(n<s)break;if(e.lastCueEndTimestamp<o){this.auxWriter.seek(0);let d=q1();this.auxBoxWriter.writeBox(d);let u=this.auxTarget._getSlice(0,this.auxWriter.getPos()),p=this.createSampleForTrack(e,u,e.lastCueEndTimestamp,o-e.lastCueEndTimestamp,"key");await this.registerSample(e,p),e.lastCueEndTimestamp=o}this.auxWriter.seek(0);for(let d=0;d<e.cueQueue.length;d++){let u=e.cueQueue[d];if(u.timestamp>=s)break;Gm.lastIndex=0;let p=Gm.test(u.text),f=u.timestamp+u.duration,m=e.cueToSourceId.get(u);if(m===void 0&&s<f&&(m=e.nextSourceId++,e.cueToSourceId.set(u,m)),u.notes){let v=j1(u.notes);this.auxBoxWriter.writeBox(v)}let h=R1(u.text,p?o:null,u.identifier??null,u.settings??null,m??null);this.auxBoxWriter.writeBox(h),f===s&&e.cueQueue.splice(d--,1)}let l=this.auxTarget._getSlice(0,this.auxWriter.getPos()),c=this.createSampleForTrack(e,l,o,s-o,"key");await this.registerSample(e,c),e.lastCueEndTimestamp=s}}createSampleForTrack(e,n,r,i,o){return{timestamp:r,decodeTimestamp:r,duration:i,data:n,size:n.byteLength,type:o,timescaleUnitsToNextSample:Ie(i,e.timescale)}}processTimestamps(e,n){if(e.timestampProcessingQueue.length===0)return;if(e.type==="audio"&&e.info.requiresPcmTransformation){A(!this.isFragmented),e.startTimestampOffset??=e.timestampProcessingQueue[0].timestamp;let i=0;for(let o=0;o<e.timestampProcessingQueue.length;o++){let s=e.timestampProcessingQueue[o],l=Ie(s.duration,e.timescale);i+=l}if(e.timeToSampleTable.length===0)e.timeToSampleTable.push({sampleCount:i,sampleDelta:1});else{let o=He(e.timeToSampleTable);o.sampleCount+=i}e.timestampProcessingQueue.length=0;return}let r=e.timestampProcessingQueue.map(i=>i.timestamp).sort((i,o)=>i-o);this.isFragmented?e.startTimestampOffset??=Math.min(r[0],0):e.startTimestampOffset??=r[0];for(let i=0;i<e.timestampProcessingQueue.length;i++){let o=e.timestampProcessingQueue[i];o.decodeTimestamp=r[i];let s=Ie(o.timestamp-o.decodeTimestamp,e.timescale),l=Ie(o.duration,e.timescale);if(e.lastTimescaleUnits!==null){A(e.lastSample);let c=Ie(o.decodeTimestamp,e.timescale,!1),d=Math.round(c-e.lastTimescaleUnits);if(A(d>=0),e.lastTimescaleUnits+=d,e.lastSample.timescaleUnitsToNextSample=d,!this.isFragmented){let u=He(e.timeToSampleTable);if(A(u),u.sampleCount===1){u.sampleDelta=d;let f=e.timeToSampleTable[e.timeToSampleTable.length-2];f&&f.sampleDelta===d&&(f.sampleCount++,e.timeToSampleTable.pop(),u=f)}else u.sampleDelta!==d&&(u.sampleCount--,e.timeToSampleTable.push(u={sampleCount:1,sampleDelta:d}));u.sampleDelta===l?u.sampleCount++:e.timeToSampleTable.push({sampleCount:1,sampleDelta:l});let p=He(e.compositionTimeOffsetTable);A(p),p.sampleCompositionTimeOffset===s?p.sampleCount++:e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s})}}else e.lastTimescaleUnits=Ie(o.decodeTimestamp,e.timescale,!1),this.isFragmented||(e.timeToSampleTable.push({sampleCount:1,sampleDelta:l}),e.compositionTimeOffsetTable.push({sampleCount:1,sampleCompositionTimeOffset:s}));e.lastSample=o}if(e.timestampProcessingQueue.length=0,A(e.lastSample),A(e.lastTimescaleUnits!==null),n!==void 0&&e.lastSample.timescaleUnitsToNextSample===0){A(n.type==="key");let i=Ie(n.timestamp,e.timescale,!1),o=Math.round(i-e.lastTimescaleUnits);e.lastSample.timescaleUnitsToNextSample=o}}async registerSample(e,n){n.type==="key"&&this.processTimestamps(e,n),e.timestampProcessingQueue.push(n),this.isFragmented?(e.sampleQueue.push(n),await this.interleaveSamples()):this.fastStart==="reserve"?await this.registerSampleFastStartReserve(e,n):await this.addSampleToTrack(e,n)}async addSampleToTrack(e,n){if(!this.isFragmented&&(e.samples.push(n),this.fastStart==="reserve")){let i=e.track.metadata.maximumPacketCount;if(A(i!==void 0),e.samples.length>i)throw new Error(`Track #${e.track.id} has already reached the maximum packet count (${i}). Either add less packets or increase the maximum packet count.`)}let r=!1;if(!e.currentChunk)r=!0;else{e.currentChunk.startTimestamp=Math.min(e.currentChunk.startTimestamp,n.timestamp);let i=n.timestamp-e.currentChunk.startTimestamp;if(this.isFragmented){let o=this.trackDatas.every(s=>{if(e===s)return n.type==="key";let l=s.sampleQueue[0];return l?l.type==="key":s.closed});i>=this.minimumFragmentDuration&&o&&n.timestamp>this.maxWrittenTimestamp&&(r=!0,await this.finalizeFragment())}else r=i>=.5}r&&(e.currentChunk&&await this.finalizeCurrentChunk(e),e.currentChunk={startTimestamp:n.timestamp,samples:[],offset:null,moofOffset:null,trafIndex:null}),A(e.currentChunk),e.currentChunk.samples.push(n),this.isFragmented&&(this.maxWrittenTimestamp=Math.max(this.maxWrittenTimestamp,n.timestamp),this.maxWrittenEndTimestamp=Math.max(this.maxWrittenEndTimestamp,n.timestamp+n.duration),this.minWrittenTimestamp=Math.min(this.minWrittenTimestamp,n.timestamp))}async finalizeCurrentChunk(e){if(A(!this.isFragmented),A(this.writer),!e.currentChunk)return;e.finalizedChunks.push(e.currentChunk),this.finalizedChunks.push(e.currentChunk);let n=e.currentChunk.samples.length;if(e.type==="audio"&&e.info.requiresPcmTransformation&&(n=e.currentChunk.samples.reduce((r,i)=>r+Ie(i.duration,e.timescale),0)),(e.compactlyCodedChunkTable.length===0||He(e.compactlyCodedChunkTable).samplesPerChunk!==n)&&e.compactlyCodedChunkTable.push({firstChunk:e.finalizedChunks.length,samplesPerChunk:n}),this.fastStart==="in-memory"){e.currentChunk.offset=0;return}e.currentChunk.offset=this.writer.getPos();for(let r of e.currentChunk.samples)A(r.data),this.writer.write(r.data),r.data=null;await this.writer.flush()}async interleaveSamples(e=!1){if(A(this.isFragmented),!(!e&&!this.allTracksAreKnown()))e:for(;;){let n=null,r=1/0;for(let o of this.trackDatas){if(!e&&o.sampleQueue.length===0&&!o.closed)break e;o.sampleQueue.length>0&&o.sampleQueue[0].timestamp<r&&(n=o,r=o.sampleQueue[0].timestamp)}if(!n)break;let i=n.sampleQueue.shift();await this.addSampleToTrack(n,i)}}async finalizeFragment(e=!this.isCmaf){if(A(this.isFragmented),!this.wroteFragmentedHeader){this.wroteFragmentedHeader=!0;let m=this.initBoxWriter??this.boxWriter;A(m),this.formatOptions.onMoov&&m.writer.startTrackingWrites(),this.ensureOneEnabledTrack();let h=ps(this);if(m.writeBox(h),this.formatOptions.onMoov){let{data:v,start:x}=m.writer.stopTrackingWrites();this.formatOptions.onMoov(v,x)}if(this.isCmaf){A(this.initWriter),await this.initWriter.flush(),await this.initWriter.finalize(),this.writer=await this.output._getRootWriter(!0),this.boxWriter=new Xi(this.writer);let v=this.boxWriter.measureBox(Jm()),x=this.boxWriter.measureBox(Zm(this,0));this.segmentHeaderSize=v+x,this.writer.seek(this.segmentHeaderSize)}}A(this.writer),A(this.boxWriter);let n=this.trackDatas.filter(m=>m.currentChunk);if(n.length===0){e&&await this.writer.flush();return}let r=this.nextFragmentNumber++,i=nh(r,n),o=this.writer.getPos(),s=o+this.boxWriter.measureBox(i),l=s+Cn,c=1/0;for(let m=0;m<n.length;m++){let h=n[m];A(h.currentChunk),A(h.startTimestampOffset!==null),h.currentChunk.offset=l,h.currentChunk.moofOffset=o,h.currentChunk.trafIndex=m,h.currentChunk.startTimestamp-=h.startTimestampOffset;for(let v of h.currentChunk.samples)l+=v.size,v.timestamp-=h.startTimestampOffset,v.decodeTimestamp-=h.startTimestampOffset;c=Math.min(c,h.currentChunk.startTimestamp)}let d=l-s,u=d>=2**32;if(u)for(let m of n)m.currentChunk.offset+=br-Cn;this.formatOptions.onMoof&&this.writer.startTrackingWrites();let p=nh(r,n);if(this.boxWriter.writeBox(p),this.formatOptions.onMoof){let{data:m,start:h}=this.writer.stopTrackingWrites();this.formatOptions.onMoof(m,h,c)}A(this.writer.getPos()===s),this.formatOptions.onMdat&&this.writer.startTrackingWrites();let f=ol(u);f.size=d,this.boxWriter.writeBox(f),this.writer.seek(s+(u?br:Cn));for(let m of n)for(let h of m.currentChunk.samples)this.writer.write(h.data),h.data=null;if(this.formatOptions.onMdat){let{data:m,start:h}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(m,h)}for(let m of n)m.finalizedChunks.push(m.currentChunk),this.finalizedChunks.push(m.currentChunk),m.currentChunk=null;e&&await this.writer.flush()}async registerSampleFastStartReserve(e,n){this.allTracksAreKnown()?(this.mdat||await this.createFastStartReserveMdat(),await this.addSampleToTrack(e,n)):e.sampleQueue.push(n)}async createFastStartReserveMdat(){A(this.writer),A(this.boxWriter),this.ensureOneEnabledTrack();let e=ps(this),r=this.boxWriter.measureBox(e)+this.computeSampleTableSizeUpperBound()+4096;A(this.ftypSize!==null),this.writer.seek(this.ftypSize+r),this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat=ol(!0),this.boxWriter.writeBox(this.mdat);for(let i of this.trackDatas){for(let o of i.sampleQueue)await this.addSampleToTrack(i,o);i.sampleQueue.length=0}}computeSampleTableSizeUpperBound(){A(this.fastStart==="reserve");let e=0;for(let n of this.trackDatas){let r=n.track.metadata.maximumPacketCount;A(r!==void 0),e+=8*Math.ceil(2/3*r),e+=4*r,e+=8*Math.ceil(2/3*r),e+=12*Math.ceil(2/3*r),e+=4*r,e+=8*r}return e}async onTrackClose(e){let n=await this.mutex.acquire(),r=this.trackDatas.find(i=>i.track===e);r&&(r.closed=!0,r.type==="subtitle"&&e.source._codec==="webvtt"&&await this.processWebVTTCues(r,1/0),this.processTimestamps(r)),this.allTracksAreKnown()&&this.allTracksKnown.resolve(),this.isFragmented&&await this.interleaveSamples(),n()}ensureOneEnabledTrack(){for(let e of["video","audio","subtitle"]){let n=this.trackDatas.filter(i=>i.type===e);if(n.length===0)continue;if(!n.some(i=>i.track.metadata.disposition?.default!==!1)){let i=n[0];i.track.metadata.disposition={...i.track.metadata.disposition,default:!0}}}}async forceFragmentFinalization(){A(this.isFragmented);let e=await this.mutex.acquire();try{for(let n of this.trackDatas)n.type==="subtitle"&&n.track.source._codec==="webvtt"&&await this.processWebVTTCues(n,1/0),this.processTimestamps(n);await this.interleaveSamples(!0),await this.finalizeFragment()}finally{e()}}async finalize(){let e=await this.mutex.acquire();this.allTracksKnown.resolve(),this.ensureOneEnabledTrack(),!this.mdat&&this.fastStart==="reserve"&&await this.createFastStartReserveMdat();for(let n of this.trackDatas)n.closed=!0,n.type==="subtitle"&&n.track.source._codec==="webvtt"&&await this.processWebVTTCues(n,1/0),this.processTimestamps(n);if(this.isFragmented)await this.interleaveSamples(!0),await this.finalizeFragment(!1);else for(let n of this.trackDatas){await this.finalizeCurrentChunk(n);let r=Yi(n);if(r>0){let l=0;for(let c of n.samples)l+=c.size;n.avgBitrate=Math.round(8*l/r)}else n.avgBitrate=0;let i=0,o=0,s=0;for(let l=0;l<n.samples.length;l++){let c=n.samples[l];for(o+=c.size;c.decodeTimestamp-n.samples[i].decodeTimestamp>=1;)o-=n.samples[i].size,i++;s=Math.max(s,o)}if(n.maxBitrate=8*s,n.startTimestampOffset!==null)for(let l=0;l<n.samples.length;l++){let c=n.samples[l];c.timestamp-=n.startTimestampOffset,c.decodeTimestamp-=n.startTimestampOffset}}if(A(this.writer),A(this.boxWriter),this.fastStart==="in-memory"){this.mdat=ol(!1);let n;for(let i=0;i<2;i++){let o=ps(this),s=this.boxWriter.measureBox(o);n=this.boxWriter.measureBox(this.mdat);let l=this.writer.getPos()+s+n;for(let c of this.finalizedChunks){c.offset=l;for(let{data:d}of c.samples)A(d),l+=d.byteLength,n+=d.byteLength}if(l<2**32)break;n>=2**32&&(this.mdat.largeSize=!0)}this.formatOptions.onMoov&&this.writer.startTrackingWrites();let r=ps(this);if(this.boxWriter.writeBox(r),this.formatOptions.onMoov){let{data:i,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(i,o)}this.formatOptions.onMdat&&this.writer.startTrackingWrites(),this.mdat.size=n,this.boxWriter.writeBox(this.mdat);for(let i of this.finalizedChunks)for(let o of i.samples)A(o.data),this.writer.write(o.data),o.data=null;if(this.formatOptions.onMdat){let{data:i,start:o}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(i,o)}}else if(this.isFragmented)if(this.isCmaf){let n=this.segmentHeaderSize!==null?this.writer.getPos()-this.segmentHeaderSize:0;this.writer.seek(0),this.boxWriter.writeBox(Jm()),this.boxWriter.writeBox(Zm(this,n))}else{let n=this.writer.getPos(),r=H1(this.trackDatas);this.boxWriter.writeBox(r);let i=this.writer.getPos()-n;this.writer.seek(this.writer.getPos()-4),this.boxWriter.writeU32(i)}else{A(this.mdat);let n=this.boxWriter.offsets.get(this.mdat);A(n!==void 0);let r=this.writer.getPos()-n;if(this.mdat.size=r,this.mdat.largeSize=r>=2**32,this.boxWriter.patchBox(this.mdat),this.formatOptions.onMdat){let{data:o,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMdat(o,s)}let i=ps(this);if(this.fastStart==="reserve"){A(this.ftypSize!==null),this.writer.seek(this.ftypSize),this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(i);let o=this.boxWriter.offsets.get(this.mdat)-this.writer.getPos();this.boxWriter.writeBox(W1(o))}else this.formatOptions.onMoov&&this.writer.startTrackingWrites(),this.boxWriter.writeBox(i);if(this.formatOptions.onMoov){let{data:o,start:s}=this.writer.stopTrackingWrites();this.formatOptions.onMoov(o,s)}}e()}};var qE=function(t,e,n){if(e!=null){if(typeof e!="object"&&typeof e!="function")throw new TypeError("Object expected.");var r,i;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(r===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose],n&&(i=r)}if(typeof r!="function")throw new TypeError("Object not disposable.");i&&(r=function(){try{i.call(this)}catch(o){return Promise.reject(o)}}),t.stack.push({value:e,dispose:r,async:n})}else n&&t.stack.push({async:!0});return e},RE=(function(t){return function(e){function n(s){e.error=e.hasError?new t(s,e.error,"An error was suppressed during disposal."):s,e.hasError=!0}var r,i=0;function o(){for(;r=e.stack.pop();)try{if(!r.async&&i===1)return i=0,e.stack.push(r),Promise.resolve().then(o);if(r.dispose){var s=r.dispose.call(r.value);if(r.async)return i|=2,Promise.resolve(s).then(o,function(l){return n(l),o()})}else i|=1}catch(l){n(l)}if(i===1)return e.hasError?Promise.reject(e.error):Promise.resolve();if(e.hasError)throw e.error}return o()}})(typeof SuppressedError=="function"?SuppressedError:function(t,e,n){var r=new Error(n);return r.name="SuppressedError",r.error=t,r.suppressed=e,r}),hs=class{constructor(){this._connectedTrack=null,this._closingPromise=null,this._closed=!1,this._nominalBitrate=null}_ensureValidAdd(){if(!this._connectedTrack)throw new Error("Source is not connected to an output track.");if(this._connectedTrack.output.state==="canceled")throw new Error("Output has been canceled.");if(this._connectedTrack.output.state==="finalizing"||this._connectedTrack.output.state==="finalized")throw new Error("Output has been finalized.");if(this._connectedTrack.output.state==="pending")throw new Error("Output has not started.");if(this._closed)throw new Error("Source is closed.")}async _start(){}async _flushAndClose(e){}close(){if(this._closingPromise)return;let e=this._connectedTrack;if(!e)throw new Error("Cannot call close without connecting the source to an output track.");if(e.output.state==="pending")throw new Error("Cannot call close before output has been started.");this._closingPromise=(async()=>{await this._flushAndClose(!1),this._closed=!0,!(e.output.state==="finalizing"||e.output.state==="finalized")&&e.output._muxer.onTrackClose(e)})()}async _flushOrWaitForOngoingClose(e){return this._closingPromise??=(async()=>{await this._flushAndClose(e),this._closed=!0})()}},gs=class extends hs{constructor(e){if(super(),!ln.includes(e))throw new TypeError(`Invalid video codec '${e}'. Must be one of: ${ln.join(", ")}.`);this._codec=e}},Y1=(t,e)=>{if(t.metadata.hasOnlyKeyPackets&&e.type!=="key")throw new Error("Cannot add non-key packets to a hasOnlyKeyPackets video track.")};var sh=class{setError(e){this.errorSet||(this.error=e,this.errorSet=!0)}constructor(e,n){this.source=e,this.encodingConfig=n,this.ensureEncoderPromise=null,this.encoderInitialized=!1,this.encoder=null,this.muxer=null,this.lastMultipleOfKeyFrameInterval=-1,this.emittedEncoderPackets=0,this.codedWidth=null,this.codedHeight=null,this.outputWidth=null,this.outputHeight=null,this.frameRateLastSample=null,this.frameRateLastTimestamp=null,this.frameRateLastEndTimestamp=null,this.preciseTimings=[],this.customEncoder=null,this.customEncoderCallSerializer=new Ui,this.customEncoderQueueSize=0,this.defaultEncodeOptions={},this.alphaEncoder=null,this.splitter=null,this.splitterCreationFailed=!1,this.alphaFrameQueue=[],this.error=null,this.errorSet=!1,this.lastMuxerPromise=Promise.resolve(),this.closed=!1}async add(e,n,r){let i=e;try{this.checkForEncoderError(),this.source._ensureValidAdd();let o=this.encodingConfig,s=o.sizeChangeBehavior??"deny",l=!1;if(this.codedWidth!==null&&this.codedHeight!==null){if((e.codedWidth!==this.codedWidth||e.codedHeight!==this.codedHeight)&&(l=!0,s==="deny"))throw new Error(`Video sample size must remain constant. Expected ${this.codedWidth}x${this.codedHeight}, got ${e.codedWidth}x${e.codedHeight}. To allow the sample size to change over time, set \`sizeChangeBehavior\` to a value other than 'deny' in the encoding options.`)}else this.codedWidth=e.codedWidth,this.codedHeight=e.codedHeight;if(o.transform?.width!==void 0||o.transform?.height!==void 0||o.transform?.rotate!==void 0||o.transform?.flip!==void 0||o.transform?.crop!==void 0||o.transform?.force===!0||l&&s!=="passThrough"){let p=o.transform?.width,f=o.transform?.height,m=o.transform?.fit??"fill";l&&s!=="passThrough"&&(A(this.outputWidth),A(this.outputHeight),A(s!=="deny"),p=this.outputWidth,f=this.outputHeight,m=s);let h=await e.transform({width:p,height:f,roundDimensionsTo:2,crop:o.transform?.crop,rotate:o.transform?.rotate,flip:o.transform?.flip,fit:m,alpha:o.alpha});(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=h.displayWidth,this.outputHeight=h.displayHeight),n&&e.close(),e=h,n=!0}else(this.outputWidth===null||this.outputHeight===null)&&(this.outputWidth=e.codedWidth,this.outputHeight=e.codedHeight);let u=o.transform?.frameRate;if(u!==void 0){let p=e.timestamp+e.duration,f=cm(e.timestamp,u);if(this.frameRateLastSample!==null)if(f<=this.frameRateLastTimestamp){this.frameRateLastSample.close(),this.frameRateLastSample=e.clone(),this.frameRateLastEndTimestamp=p;return}else await this.padFrameRate(f,r);e===i&&(e=e.clone(),n=!0),e.setTimestamp(f),e.setDuration(1/u),this.frameRateLastSample?.close(),this.frameRateLastSample=e.clone(),this.frameRateLastTimestamp=f,this.frameRateLastEndTimestamp=p}await this.processAndEncode(e,r)}finally{n&&e.close()}}async processAndEncode(e,n){let r=this.encodingConfig,i;if(r.transform?.process){let o=r.transform.process(e);if(le(o)&&(o=await o),o===null)return;Array.isArray(o)||(o=[o]);let s=[];try{for(let l of o)l instanceof dn?s.push(l):typeof VideoFrame<"u"&&l instanceof VideoFrame?s.push(new dn(l)):s.push(new dn(l,{timestamp:e.timestamp,duration:e.duration}))}catch(l){for(let c of s)c!==e&&c.close();for(let c of o)(c instanceof dn&&c!==e||typeof VideoFrame<"u"&&c instanceof VideoFrame)&&c.close();throw l}i=s}else i=[e];try{for(let o of i){if(this.encoderInitialized||(this.ensureEncoderPromise||this.ensureEncoder(o),this.encoderInitialized||await this.ensureEncoderPromise),A(this.encoderInitialized),this.closed)break;let s=this.encodingConfig.keyFrameInterval??2,l=Math.floor(o.timestamp/s),c={...this.defaultEncodeOptions,...o.encodeOptions,...n},d={...c,keyFrame:c.keyFrame!==void 0?c.keyFrame:s===0||l!==this.lastMultipleOfKeyFrameInterval};if(this.lastMultipleOfKeyFrameInterval=l,this.encodingConfig.onEncodedSample?.(o),this.customEncoder){this.customEncoderQueueSize++;let u=o.clone(),p=this.customEncoderCallSerializer.call(()=>this.customEncoder.encode(u,d)).catch(f=>this.setError(f)).finally(()=>{this.customEncoderQueueSize--,u.close()});this.customEncoderQueueSize>=4&&await p}else{A(this.encoder);let u=o.toVideoFrame(),p=Fe(this.preciseTimings,u.timestamp,m=>m.microsecondTimestamp),f=p!==-1?this.preciseTimings[p]:null;if(f&&f.microsecondTimestamp===u.timestamp?(f.timestamp!==o.timestamp&&(f.timestampIsValid=!1),f.duration!==o.duration&&(f.durationIsValid=!1)):(this.preciseTimings.splice(p+1,0,{microsecondTimestamp:u.timestamp,timestamp:o.timestamp,duration:o.duration,timestampIsValid:!0,durationIsValid:!0}),this.preciseTimings.length>128&&this.preciseTimings.shift()),this.alphaEncoder)if(!!u.format&&!u.format.includes("A")||this.splitterCreationFailed){this.alphaFrameQueue.push(null);try{this.encoder.encode(u,d)}finally{u.close()}}else{this.splitter||(this.splitter=new ah);let{colorFrame:h,alphaFrame:v}=await this.splitter.split(u);this.alphaFrameQueue.push(v);try{this.encoder.encode(h,d)}finally{h.close()}}else try{this.encoder.encode(u,d)}finally{u.close()}this.encoder.encodeQueueSize>=4&&await new Promise(m=>this.encoder.addEventListener("dequeue",m,{once:!0}))}await this.lastMuxerPromise}}finally{for(let o of i)o!==e&&o.close()}}async padFrameRate(e,n){let r=this.encodingConfig.transform.frameRate;A(this.frameRateLastSample);let i=Math.round((e-this.frameRateLastTimestamp)*r);for(let o=1;o<i;o++){let s={stack:[],error:void 0,hasError:!1};try{let l=qE(s,this.frameRateLastSample.clone(),!1);l.setTimestamp(this.frameRateLastTimestamp+o/r),l.setDuration(1/r),await this.processAndEncode(l,n)}catch(l){s.error=l,s.hasError=!0}finally{RE(s)}}}ensureEncoder(e){this.ensureEncoderPromise=(async()=>{let n=Lm(this.encodingConfig.quality,this.encodingConfig.bitrate);A(n!==void 0);let r=Bm({...this.encodingConfig,quality:n,width:e.codedWidth,height:e.codedHeight,squarePixelWidth:e.squarePixelWidth,squarePixelHeight:e.squarePixelHeight,framerate:this.source._connectedTrack?.metadata.frameRate}),i=null,o;for(let l of r){let c=l.config;if(this.encodingConfig.onEncoderConfig?.(c),o=Fd.find(u=>u.supports(this.encodingConfig.codec,c)),o){i=l;break}if(typeof VideoEncoder>"u")continue;if(c.alpha="discard",this.encodingConfig.alpha==="keep"&&(c.latencyMode="quality"),(c.width%2===1||c.height%2===1)&&(this.encodingConfig.codec==="avc"||this.encodingConfig.codec==="hevc"))throw new Error(`The dimensions ${c.width}x${c.height} are not supported for codec '${this.encodingConfig.codec}'; both width and height must be even numbers. Make sure to round your dimensions to the nearest even number.`);try{if((await VideoEncoder.isConfigSupported(c)).supported){i=l;break}}catch{}}if(!i){if(typeof VideoEncoder>"u")throw new Error(Ua("VideoEncoder"));let l=r[0].config,c=r.map(({config:d,quantizer:u})=>u!==null?`quantizer ${u}`:`${d.bitrate} bps`);throw new Error(`This specific encoder configuration (${l.codec}, ${c.join(" / ")}, ${l.width}x${l.height}, hardware acceleration: ${l.hardwareAcceleration??"no-preference"}) is not supported in this environment. Consider using another codec or changing your video parameters.`)}let s=i.config;if(i.quantizer!==null?this.defaultEncodeOptions=Fm(this.encodingConfig.codec,i.quantizer):this.source._nominalBitrate=s.bitrate??null,o)this.customEncoder=new o,this.customEncoder.codec=this.encodingConfig.codec,this.customEncoder.config=s,this.customEncoder.onPacket=(l,c)=>{if(!(l instanceof je))throw new TypeError("The first argument passed to onPacket must be an EncodedPacket.");if(c!==void 0&&(!c||typeof c!="object"))throw new TypeError("The second argument passed to onPacket must be an object or undefined.");Y1(this.source._connectedTrack,l),this.encodingConfig.onEncodedPacket?.(l,c),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,l,c).catch(d=>{this.setError(d)})},this.customEncoder.onError=l=>{this.setError(l)},await this.customEncoder.init();else{let l=[],c=[],d=0,u=0,p=(m,h,v)=>{let x={};if(h){let k=new Uint8Array(h.byteLength);h.copyTo(k),x.alpha=k}let y=je.fromEncodedChunk(m,x),g=Fe(this.preciseTimings,m.timestamp,k=>k.microsecondTimestamp),b=g!==-1?this.preciseTimings[g]:null,w=null;this.emittedEncoderPackets===0&&y.type==="delta"&&v?.decoderConfig&&(w=es(this.encodingConfig.codec,v.decoderConfig,y.data)),(b&&b.microsecondTimestamp===m.timestamp||w!==null)&&(y=y.clone({timestamp:b?.timestampIsValid?b.timestamp:void 0,duration:b?.durationIsValid?b.duration:void 0,type:w??void 0})),Y1(this.source._connectedTrack,y),this.encodingConfig.onEncodedPacket?.(y,v),this.lastMuxerPromise=this.muxer.addEncodedVideoPacket(this.source._connectedTrack,y,v).catch(k=>{this.setError(k)}),this.emittedEncoderPackets++},f=new Error("Encoding error").stack;if(this.encoder=new VideoEncoder({output:(m,h)=>{if(!this.alphaEncoder){p(m,null,h);return}let v=this.alphaFrameQueue.shift();A(v!==void 0),v?(this.alphaEncoder.encode(v,{...this.defaultEncodeOptions,keyFrame:m.type==="key"}),u++,v.close(),l.push({chunk:m,meta:h})):u===0?p(m,null,h):(c.push(d+u),l.push({chunk:m,meta:h}))},error:m=>{m.stack=f,this.setError(m)}}),this.encoder.configure(s),this.encodingConfig.alpha==="keep"){let m=new Error("Encoding error").stack;this.alphaEncoder=new VideoEncoder({output:(h,v)=>{u--;let x=l.shift();for(A(x!==void 0),p(x.chunk,h,x.meta),d++;c.length>0&&c[0]===d;){c.shift();let y=l.shift();A(y!==void 0),p(y.chunk,null,y.meta)}},error:h=>{h.stack=m,this.setError(h)}}),this.alphaEncoder.configure(s)}}A(this.source._connectedTrack),this.muxer=this.source._connectedTrack.output._muxer,this.encoderInitialized=!0})()}async flushAndClose(e){try{if(!e&&(this.checkForEncoderError(),this.frameRateLastSample)){let n=this.encodingConfig.transform.frameRate,r=cm(this.frameRateLastEndTimestamp,n);await this.padFrameRate(r)}this.closed=!0,e||(this.customEncoder?this.customEncoderCallSerializer.call(()=>this.customEncoder.flush()):this.encoder&&(await this.encoder.flush(),await this.alphaEncoder?.flush(),await dm(25)))}finally{this.closed=!0,this.frameRateLastSample?.close(),this.frameRateLastSample=null,this.customEncoder?await this.customEncoderCallSerializer.call(()=>this.customEncoder.close()).catch(n=>this.setError(n)):this.encoder&&(this.encoder.state!=="closed"&&this.encoder.close(),this.alphaEncoder&&this.alphaEncoder.state!=="closed"&&this.alphaEncoder.close(),this.alphaFrameQueue.forEach(n=>n?.close()),this.alphaFrameQueue.length=0,this.splitter?.close())}e||this.checkForEncoderError()}getQueueSize(){return this.customEncoder?this.customEncoderQueueSize:this.encoder?.encodeQueueSize??0}checkForEncoderError(){if(this.errorSet)throw this.error}},oh=null,ah=class{constructor(){this.worker=null,this.pendingRequests=new Map,this.nextRequestId=0}split(e){if(!this.worker){if(!oh){let i=new Blob([`(${jE.toString()})()`],{type:"application/javascript"});oh=URL.createObjectURL(i)}this.worker=new Worker(oh),this.worker.addEventListener("message",i=>{let o=i.data,s=this.pendingRequests.get(o.id);s&&(this.pendingRequests.delete(o.id),"error"in o?s.reject(new Error(o.error)):s.resolve({colorFrame:o.colorFrame,alphaFrame:o.alphaFrame}))}),this.worker.addEventListener("error",i=>{let o=new Error(i.message||"Color/alpha splitter worker error.");for(let s of this.pendingRequests.values())s.reject(o);this.pendingRequests.clear()})}let n=this.nextRequestId++,r=Ke();return this.pendingRequests.set(n,r),this.worker.postMessage({id:n,sourceFrame:e},{transfer:[e]}),r.promise}close(){this.worker?.terminate(),this.worker=null;let e=new Error("Color/alpha splitter closed.");for(let n of this.pendingRequests.values())n.reject(e);this.pendingRequests.clear()}},jE=()=>{let t=null,e=Promise.resolve();self.addEventListener("message",o=>{let{id:s,sourceFrame:l}=o.data;e=e.then(async()=>{try{let{colorFrame:c,alphaFrame:d}=await n(l);self.postMessage({id:s,colorFrame:c,alphaFrame:d},{transfer:[c,d]})}catch(c){self.postMessage({id:s,error:c.message})}finally{l.close()}})});let n=async o=>{let s=o.format;if(!s)throw new Error("CPU color/alpha splitting requires a known VideoFrame format.");let l=o.allocationSize();if((!t||t.byteLength!==l)&&(t=new Uint8Array(l)),await o.copyTo(t),s==="RGBA"||s==="BGRA")return r(t,s,o);if(s==="I420A"||s==="I420AP10"||s==="I420AP12"||s==="I422A"||s==="I422AP10"||s==="I422AP12"||s==="I444A"||s==="I444AP10"||s==="I444AP12")return i(t,s,o);throw new Error(`CPU color/alpha splitting does not support format '${s}'.`)},r=(o,s,l)=>{let c=l.visibleRect?.width??l.codedWidth,d=l.visibleRect?.height??l.codedHeight,u=c*d,p=Math.ceil(c/2),f=Math.ceil(d/2),m=u+p*f*2,h=new Uint8Array(m);for(let g=0,b=3;g<u;g++,b+=4)h[g]=o[b];h.fill(128,u);let v=new VideoFrame(o,{format:s==="RGBA"?"RGBX":"BGRX",codedWidth:c,codedHeight:d,timestamp:l.timestamp,duration:l.duration??void 0}),x={format:"I420",codedWidth:c,codedHeight:d,timestamp:l.timestamp,duration:l.duration??void 0,transfer:[h.buffer]},y=new VideoFrame(h,x);return{colorFrame:v,alphaFrame:y}},i=(o,s,l)=>{let c=l.visibleRect?.width??l.codedWidth,d=l.visibleRect?.height??l.codedHeight,u=s.includes("P10"),p=s.includes("P12"),f=u||p?2:1,m,h;s.startsWith("I420")?(m=Math.ceil(c/2),h=Math.ceil(d/2)):s.startsWith("I422")?(m=Math.ceil(c/2),h=d):(m=c,h=d);let v=c*d,x=m*h,y=v*f,g=x*f,b=v*f,w=y+g*2,k=s.replace("A",""),S=Math.ceil(c/2),E=Math.ceil(d/2),T=S*E,_=T*f,C=b+2*_,I=new Uint8Array(C),M=w;I.set(o.subarray(M,M+b),0);let O=b,$=u?512:p?2048:128;f===1?I.fill($,O):new Uint16Array(I.buffer,O,2*T).fill($);let D=u?"I420P10":p?"I420P12":"I420",U=new VideoFrame(o.subarray(0,w),{format:k,codedWidth:c,codedHeight:d,timestamp:l.timestamp,duration:l.duration??void 0}),j={format:D,codedWidth:c,codedHeight:d,timestamp:l.timestamp,duration:l.duration??void 0,transfer:[I.buffer]},oe=new VideoFrame(I,j);return{colorFrame:U,alphaFrame:oe}}};var ys=class extends gs{constructor(e,n){if(!(typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement)&&!(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas))throw new TypeError("canvas must be an HTMLCanvasElement or OffscreenCanvas.");T1(n),super(n.codec),this._encoder=new sh(this,n),this._canvas=e}add(e,n=0,r){if(!Number.isFinite(e))throw new TypeError("timestamp must be a finite number.");if(!Number.isFinite(n)||n<0)throw new TypeError("duration must be a non-negative number.");let i=new dn(this._canvas,{timestamp:e,duration:n});return this._encoder.add(i,!0,r)}_flushAndClose(e){return this._encoder.flushAndClose(e)}};var vs=class extends hs{constructor(e){if(super(),!qi.includes(e))throw new TypeError(`Invalid audio codec '${e}'. Must be one of: ${qi.join(", ")}.`);this._codec=e}},sl=class extends vs{constructor(e){super(e)}add(e,n){if(!(e instanceof je))throw new TypeError("packet must be an EncodedPacket.");if(e.isMetadataOnly)throw new TypeError("Metadata-only packets cannot be added.");if(n!==void 0&&(!n||typeof n!="object"))throw new TypeError("meta, when provided, must be an object.");return this._ensureValidAdd(),this._connectedTrack.output._muxer.addEncodedAudioPacket(this._connectedTrack,e,n)}};var al=class extends hs{constructor(e){if(super(),!di.includes(e))throw new TypeError(`Invalid subtitle codec '${e}'. Must be one of: ${di.join(", ")}.`);this._codec=e}};var bs=class{get supportsVideoRotationMetadata(){return this.supportsVideoTransformationMetadata}getSupportedVideoCodecs(){return this.getSupportedCodecs().filter(e=>ln.includes(e))}getSupportedAudioCodecs(){return this.getSupportedCodecs().filter(e=>qi.includes(e))}getSupportedSubtitleCodecs(){return this.getSupportedCodecs().filter(e=>di.includes(e))}_codecUnsupportedHint(e){return""}_isFragmentedIsobmff(){return!1}},xs=class extends bs{constructor(e={}){if(!e||typeof e!="object")throw new TypeError("options must be an object.");if(e.fastStart!==void 0&&![!1,"in-memory","reserve","fragmented"].includes(e.fastStart))throw new TypeError("options.fastStart, when provided, must be false, 'in-memory', 'reserve', or 'fragmented'.");if(e.minimumFragmentDuration!==void 0&&(!li(e.minimumFragmentDuration)||e.minimumFragmentDuration<0))throw new TypeError("options.minimumFragmentDuration, when provided, must be a non-negative number.");if(e.onFtyp!==void 0&&typeof e.onFtyp!="function")throw new TypeError("options.onFtyp, when provided, must be a function.");if(e.onMoov!==void 0&&typeof e.onMoov!="function")throw new TypeError("options.onMoov, when provided, must be a function.");if(e.onMdat!==void 0&&typeof e.onMdat!="function")throw new TypeError("options.onMdat, when provided, must be a function.");if(e.onMoof!==void 0&&typeof e.onMoof!="function")throw new TypeError("options.onMoof, when provided, must be a function.");if(e.metadataFormat!==void 0&&!["mdir","mdta","udta","auto"].includes(e.metadataFormat))throw new TypeError("options.metadataFormat, when provided, must be either 'auto', 'mdir', 'mdta', or 'udta'.");super(),this._options=e}getSupportedTrackCounts(){return{video:{min:0,max:4294967295},audio:{min:0,max:4294967295},subtitle:{min:0,max:4294967295},total:{min:0,max:4294967295}}}get supportsVideoTransformationMetadata(){return!0}get supportsTimestampedMediaData(){return!0}get negativeTimestampSupport(){return"full"}_createMuxer(e){return new qd(e,this)}_isFragmentedIsobmff(){return this._options.fastStart==="fragmented"}},eo=class extends xs{constructor(e){super(e)}get _name(){return"MP4"}get fileExtension(){return".mp4"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ln,...hd,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...di]}_codecUnsupportedHint(e){return new ms().getSupportedCodecs().includes(e)?" Switching to MOV will grant support for this codec.":""}},fs=class extends xs{constructor(e){super(e)}get _name(){return"CMAF"}get fileExtension(){return".m4s"}get mimeType(){return"video/mp4"}getSupportedCodecs(){return[...ln,...hd,"pcm-s16","pcm-s16be","pcm-s24","pcm-s24be","pcm-s32","pcm-s32be","pcm-f32","pcm-f32be","pcm-f64","pcm-f64be",...di]}},ms=class extends xs{constructor(e){super(e)}get _name(){return"MOV"}get fileExtension(){return".mov"}get mimeType(){return"video/quicktime"}getSupportedCodecs(){return[...ln,...qi]}_codecUnsupportedHint(e){return new eo().getSupportedCodecs().includes(e)?" Switching to MP4 will grant support for this codec.":""}};var J1=["video","audio","subtitle"],ws=class t{constructor(e,n,r,i,o){this.id=e,this.output=n,this.type=r,this.source=i,this.metadata=o}isVideoTrack(){return this.type==="video"}isAudioTrack(){return this.type==="audio"}isSubtitleTrack(){return this.type==="subtitle"}canBePairedWith(e){if(!(e instanceof t))throw new TypeError("other must be an OutputTrack.");if(this===e)return!1;let n=rd(this.metadata.group),r=rd(e.metadata.group);for(let i of n)if(this.type!==e.type&&r.some(l=>i===l)||r.some(l=>i._pairedGroups.has(l)))return!0;return!1}},Rd=class extends ws{constructor(e,n,r,i){super(e,n,"video",r,i)}},jd=class extends ws{constructor(e,n,r,i){super(e,n,"audio",r,i)}},Gd=class extends ws{constructor(e,n,r,i){super(e,n,"subtitle",r,i)}},ks=class t{constructor(){this._pairedGroups=new Set}pairWith(e){if(!(e instanceof t))throw new TypeError("other must be an OutputTrackGroup.");if(this===e)throw new TypeError("Cannot pair a group with itself.");this._pairedGroups.add(e),e._pairedGroups.add(this)}},lh=t=>{if(!t||typeof t!="object")throw new TypeError("metadata must be an object.");if(t.languageCode!==void 0&&!Jc(t.languageCode))throw new TypeError("metadata.languageCode, when provided, must be a three-letter, ISO 639-2/T language code.");if(t.name!==void 0&&typeof t.name!="string")throw new TypeError("metadata.name, when provided, must be a string.");if(t.disposition!==void 0&&lb(t.disposition),t.maximumPacketCount!==void 0&&(!Number.isInteger(t.maximumPacketCount)||t.maximumPacketCount<0))throw new TypeError("metadata.maximumPacketCount, when provided, must be a non-negative integer.");if(t.bitrate!==void 0&&(!Number.isFinite(t.bitrate)||t.bitrate<0))throw new TypeError("metadata.bitrate, when provided, must be a non-negative number.");if(t.averageBitrate!==void 0&&(!Number.isFinite(t.averageBitrate)||t.averageBitrate<0))throw new TypeError("metadata.averageBitrate, when provided, must be a non-negative number.");if(t.group!==void 0&&!(t.group instanceof ks)&&(!Array.isArray(t.group)||t.group.some(e=>!(e instanceof ks))))throw new TypeError("metadata.group, when provided, must be an OutputTrackGroup instance or an array of OutputTrackGroup instances.")},As=class extends on{get target(){let e="Output.target cannot be used when using PathedTarget with an async callback. Use the 'target' event instead.";if(this._rootTargetPromise)throw new TypeError(e);let n=this._getRootTarget();if(le(n))throw new TypeError(e);return n}constructor(e){if(super(),this.state="pending",this.defaultTrackGroup=new ks,this.tracks=[],this._onFinalize=null,this._unfinalizedTargets=new Set,this._rootWriterPromise=null,this._startPromise=null,this._cancelPromise=null,this._finalizePromise=null,this._mutex=new Go,this._metadataTags={},this._rootTarget=null,this._rootTargetPromise=null,this._firstMediaStreamTimestamp=null,!e||typeof e!="object")throw new TypeError("options must be an object.");if(!(e.format instanceof bs))throw new TypeError("options.format must be an OutputFormat.");if(!(e.target instanceof Gt||e.target instanceof Zi))throw new TypeError("options.target must be a Target or a PathedTarget.");if(e.target instanceof Gt&&this._rememberTarget(e.target),e.initTarget!==void 0&&!(e.initTarget instanceof Gt)&&typeof e.initTarget!="function")throw new Error("options.initTarget, when provided, must be a Target or a function that returns or resolves to a Target.");if(e.onFinalize!==void 0&&typeof e.onFinalize!="function")throw new TypeError("options.onFinalize, when provided, must be a function.");this.format=e.format,this._target=e.target,this._onFinalize=e.onFinalize??null,this._initTarget=e.initTarget??null,this._initTarget instanceof Gt&&this._rememberTarget(this._initTarget),this._muxer=e.format._createMuxer(this)}_getTargetValidated(e){A(this._target instanceof Zi);let n=this._target.getTarget(e),r=i=>{if(!(i instanceof Gt))throw new TypeError("getTarget must return a Target.");return i};return le(n)?n.then(r):r(n)}async _getTarget(e){A(this._target instanceof Zi);let n=await this._getTargetValidated(e);return this._emit("target",{target:n,request:e,isRoot:e.isRoot}),this.state==="canceled"?await n._close():this._rememberTarget(n),n}_rememberTarget(e){this._unfinalizedTargets.add(e),e.on("finalized",()=>this._unfinalizedTargets.delete(e),{once:!0})}async _getInitTarget(){if(A(this._initTarget!==null),this._initTarget instanceof Gt)return this._initTarget;let e=await this._initTarget();return this.state==="canceled"?await e._close():this._rememberTarget(e),e}_hasInitTarget(){return this._initTarget!==null}_getRootTarget(){if(this._rootTarget)return this._rootTarget;if(this._rootTargetPromise)return this._rootTargetPromise;if(this._target instanceof Gt)return this._emit("target",{target:this._target,request:null,isRoot:!0}),this._rootTarget=this._target,this._target;let e={path:this._target.rootPath,isRoot:!0,mimeType:this.format.mimeType},n=this._getTargetValidated(e),r=i=>(this.state==="canceled"?i._close():this._rememberTarget(i),this._emit("target",{target:i,request:e,isRoot:!0}),this._rootTarget=i,i);return le(n)?this._rootTargetPromise=n.then(r):r(n)}_getRootWriter(e){return this._rootWriterPromise??=(async()=>{let n=await this._getRootTarget(),r=new Ji(n,typeof e=="boolean"?e:e(n));return r.start(),r})()}addVideoTrack(e,n={}){if(!(e instanceof gs))throw new TypeError("source must be a VideoSource.");if(lh(n),n.rotation!==void 0&&![0,90,180,270].includes(n.rotation))throw new TypeError(`Invalid video rotation: ${n.rotation}. Has to be 0, 90, 180 or 270.`);if(n.flip!==void 0&&typeof n.flip!="boolean")throw new TypeError("metadata.flip, when provided, must be a boolean.");if(n.transformationMatrix!==void 0&&(!Array.isArray(n.transformationMatrix)||n.transformationMatrix.length!==9||!n.transformationMatrix.every(i=>Number.isFinite(i))))throw new TypeError("metadata.transformationMatrix, when provided, must be an array of 9 finite numbers.");if(n.frameRate!==void 0&&(!Number.isFinite(n.frameRate)||n.frameRate<=0))throw new TypeError(`Invalid video frame rate: ${n.frameRate}. Must be a positive number.`);if(n.hasOnlyKeyPackets!==void 0&&typeof n.hasOnlyKeyPackets!="boolean")throw new TypeError("metadata.hasOnlyKeyPackets, when provided, must be a boolean.");if(n.canBeTransparent!==void 0&&typeof n.canBeTransparent!="boolean")throw new TypeError("metadata.canBeTransparent, when provided, must be a boolean.");if(n.decoderConfig!==void 0&&yd({decoderConfig:n.decoderConfig},e._codec),n.primingPacket!==void 0){if(!(n.primingPacket instanceof je))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(n.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}let r={...n};return r.group??=this.defaultTrackGroup,this._addTrack(new Rd(this.tracks.length+1,this,e,r))}addAudioTrack(e,n={}){if(!(e instanceof vs))throw new TypeError("source must be an AudioSource.");if(lh(n),n.decoderConfig!==void 0&&vd({decoderConfig:n.decoderConfig},e._codec),n.primingPacket!==void 0){if(!(n.primingPacket instanceof je))throw new TypeError("metadata.primingPacket, when provided, must be an EncodedPacket.");if(n.decoderConfig===void 0)throw new TypeError("metadata.primingPacket can only be provided alongside metadata.decoderConfig.")}let r={...n};return r.group??=this.defaultTrackGroup,this._addTrack(new jd(this.tracks.length+1,this,e,r))}addSubtitleTrack(e,n={}){if(!(e instanceof al))throw new TypeError("source must be a SubtitleSource.");lh(n);let r={...n};return r.group??=this.defaultTrackGroup,this._addTrack(new Gd(this.tracks.length+1,this,e,r))}setMetadataTags(e){if(sb(e),this.state!=="pending")throw new Error("Cannot set metadata tags after output has been started or canceled.");this._metadataTags=e}_addTrack(e){if(this.state!=="pending")throw new Error("Cannot add track after output has been started or canceled.");if(e.source._connectedTrack)throw new Error("Source is already used for a track.");let n=this.format.getSupportedTrackCounts(),r=this.tracks.reduce((s,l)=>s+(l.type===e.type?1:0),0),i=n[e.type].max;if(r===i)throw new Error(i===0?`${this.format._name} does not support ${e.type} tracks.`:`${this.format._name} does not support more than ${i} ${e.type} track${i===1?"":"s"}.`);let o=n.total.max;if(this.tracks.length===o)throw new Error(`${this.format._name} does not support more than ${o} tracks${o===1?"":"s"} in total.`);if(e.isVideoTrack()){let s=this.format.getSupportedVideoCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support video tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported video codecs are: ${s.map(l=>`'${l}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isAudioTrack()){let s=this.format.getSupportedAudioCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support audio tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported audio codecs are: ${s.map(l=>`'${l}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}else if(e.isSubtitleTrack()){let s=this.format.getSupportedSubtitleCodecs();if(s.length===0)throw new Error(`${this.format._name} does not support subtitle tracks.`+this.format._codecUnsupportedHint(e.source._codec));if(!s.includes(e.source._codec))throw new Error(`Codec '${e.source._codec}' cannot be contained within ${this.format._name}. Supported subtitle codecs are: ${s.map(l=>`'${l}'`).join(", ")}.`+this.format._codecUnsupportedHint(e.source._codec))}return this.tracks.push(e),e.source._connectedTrack=e,e}hasEnoughTracks(){let e=this.format.getSupportedTrackCounts();for(let r of J1){let i=this.tracks.reduce((s,l)=>s+(l.type===r?1:0),0),o=e[r].min;if(i<o)return!1}let n=e.total.min;return!(this.tracks.length<n)}async start(){let e=this.format.getSupportedTrackCounts();for(let r of J1){let i=this.tracks.reduce((s,l)=>s+(l.type===r?1:0),0),o=e[r].min;if(i<o)throw new Error(o===e[r].max?`${this.format._name} requires exactly ${o} ${r} track${o===1?"":"s"}.`:`${this.format._name} requires at least ${o} ${r} track${o===1?"":"s"}.`)}let n=e.total.min;if(this.tracks.length<n)throw new Error(n===e.total.max?`${this.format._name} requires exactly ${n} track${n===1?"":"s"}.`:`${this.format._name} requires at least ${n} track${n===1?"":"s"}.`);if(this.state==="canceled")throw new Error("Output has been canceled.");return this._startPromise?(ce._warn("Output has already been started."),this._startPromise):this._startPromise=(async()=>{this.state="started";let r=this._mutex.acquire();try{await this._muxer.start();let i=this.tracks.map(o=>o.source._start());await Promise.all(i)}finally{(await r)()}})()}getMimeType(){return this._muxer.getMimeType()}async cancel(){if(this.state==="canceled")return this._cancelPromise??void 0;if(this.state==="finalizing"||this.state==="finalized"){this.state==="finalized"&&ce._warn("Output has already been finalized.");return}return this._cancelPromise=(async()=>{this.state="canceled";let e=await this._mutex.acquire();try{let n=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!0));await Promise.all(n),await Promise.all([...this._unfinalizedTargets].map(r=>r._close())),this._unfinalizedTargets.clear()}finally{e()}})()}async finalize(){if(this.state==="pending")throw new Error("Cannot finalize before starting.");if(this.state==="canceled")throw new Error("Cannot finalize after canceling.");return this._finalizePromise?(ce._warn("Output has already been finalized."),this._finalizePromise):this._finalizePromise=(async()=>{this.state="finalizing";let e=await this._mutex.acquire();try{let n=this.tracks.map(r=>r.source._flushOrWaitForOngoingClose(!1));if(await Promise.all(n),await this._muxer.finalize(),this._rootWriterPromise){let r=await this._rootWriterPromise;r.finalized||(await r.flush(),await r.finalize())}this._onFinalize&&await this._onFinalize(),this.state="finalized"}catch(n){throw this.state="canceled",n}finally{await Promise.all([...this._unfinalizedTargets].map(n=>n._close().catch(()=>{}))),this._unfinalizedTargets.clear(),e()}})()}};var Z1=Symbol.for("mediabunny loaded");globalThis[Z1]&&ce._error(`[WARNING]
Mediabunny was loaded twice. This will likely cause Mediabunny not to work correctly. Check if multiple dependencies are importing different versions of Mediabunny, or if something is being bundled incorrectly.`);globalThis[Z1]=!0;var du=Date.now();function Ne(){return du+=1,du}var GE=[{key:"low",label:"low",color:"#6B7280"},{key:"mid",label:"mid",color:"#5EEAD4"},{key:"high",label:"high",color:"#F5A623"}];function Bs(){let e=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kolkata",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).formatToParts(new Date),n=r=>+e.find(i=>i.type===r).value;return{hour:n("hour"),minute:n("minute"),second:n("second")}}function QE(){return new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Kolkata",weekday:"short",day:"numeric",month:"short"}).format(new Date)}function ne(t=0){let e=new Date(Date.now()+t*864e5);return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Kolkata"}).format(e)}function mn(t){let[e,n]=t.split(":").map(Number);return e*60+n}function Fn(t){let e=Math.floor(t/60)%24,n=t%60,r=e<12?"AM":"PM";return`${e%12===0?12:e%12}:${String(n).padStart(2,"0")} ${r}`}function Mr(t){if(t<60)return`${t}m`;let e=Math.floor(t/60),n=t%60;return n?`${e}h ${n}m`:`${e}h`}function ch(t){let e=Math.floor(t/60)%24,n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`}function Vh(t){if(!t||t.length===0)return{streak:0,freezeUsed:!1};let e=new Set(t),n;if(e.has(ne(0)))n=0;else if(e.has(ne(-1)))n=-1;else return{streak:0,freezeUsed:!1};let r=0,i=n,o=0,s=!0,l=!1;for(;;)if(e.has(ne(i)))r++,o++,!s&&o>=7&&(s=!0,o=0),i-=1;else if(s)s=!1,o=0,l=!0,i-=1;else break;return{streak:r,freezeUsed:l}}function iu(t){return Vh(t).streak}var KE=[15,30,45,60,90,120],Wh={fn:null,register(t){return this.fn=t,()=>{this.fn=null}},open(t){this.fn&&this.fn(t)}},ku={fn:null,register(t){return this.fn=t,()=>{this.fn=null}},propagate(t,e,n){this.fn&&this.fn(t,e,n)}},ex="tasksh.links.v1",rw={routine:{label:"routine",plural:"routines"},good:{label:"quest",plural:"quest habits"},vault:{label:"vault",plural:"vault habits"}},Cs=(t,e)=>`${t}:${e}`,iw=t=>{let e=String(t).indexOf(":");return{kind:String(t).slice(0,e),id:Number(String(t).slice(e+1))}};function ow(t,e){let n=[];for(let[r,i]of t)r===e?n.push(i):i===e&&n.push(r);return n}function XE(t,e,n){return t.some(([r,i])=>r===e&&i===n||r===n&&i===e)}function YE(t,e,n){return e===n||XE(t,e,n)?t:[...t,[e,n]]}function JE(t,e,n){return t.filter(([r,i])=>!(r===e&&i===n||r===n&&i===e))}function tx(t,e){let{kind:n,id:r}=iw(t),i=n==="routine"?e.routines:n==="good"?e.habits:n==="vault"?e.vaultHabits:null;if(!i)return null;let o=i.find(s=>s.id===r);return o?{kind:n,id:r,label:o.label,meta:rw[n]?.label||n}:null}function ZE(t,e,n,r,i){let o=ow(n,t);if(!o.length)return 0;let s=(c,d)=>c.map(u=>{if(u.id!==d)return u;let p=u.history||[];if(p.some(h=>h&&typeof h=="object")||u.penalty!==void 0){let h=Kt(p),v=h.some(y=>y.d===i&&y.t==="done");if(e===v)return u;let x=h.filter(y=>y.d!==i);return{...u,history:e?[...x,{d:i,t:"done"}]:x}}let m=p.includes(i);return e===m?u:{...u,history:e?[...p,i]:p.filter(h=>h!==i)}}),l={routine:[],good:[],vault:[]};for(let c of o){let{kind:d,id:u}=iw(c);l[d]&&l[d].push(u)}return l.routine.length&&r.setRoutines&&r.setRoutines(c=>l.routine.reduce((d,u)=>s(d,u),c)),l.good.length&&r.setHabits&&r.setHabits(c=>l.good.reduce((d,u)=>s(d,u),c)),l.vault.length&&r.setVaultHabits&&r.setVaultHabits(c=>l.vault.reduce((d,u)=>s(d,u),c)),o.length}function eT(){let[t,e]=(0,a.useState)(()=>De(ex,[]));return(0,a.useEffect)(()=>{try{localStorage.setItem(ex,JSON.stringify(t))}catch{}},[t]),{links:t,setLinks:e}}var uu="tasksh.meta.v1";function hl(t){try{let e=De(uu,{});localStorage.setItem(uu,JSON.stringify({...e,...t}))}catch{}}var nx="tasksh.achievements.v1",rx="tasksh.wallet.v1",gl=[{id:"first_task",icon:"\u25C7",name:"First Step",desc:"complete your first task",coins:10,test:t=>t.tasksDone>=1},{id:"ten_tasks",icon:"\u25C8",name:"Getting Going",desc:"complete 10 tasks",coins:25,test:t=>t.tasksDone>=10},{id:"streak_7",icon:"\u25B2",name:"One Week",desc:"hold a 7-day streak",coins:40,test:t=>t.bestStreak>=7},{id:"streak_30",icon:"\u25B2",name:"One Month",desc:"hold a 30-day streak",coins:120,test:t=>t.bestStreak>=30},{id:"streak_100",icon:"\u2605",name:"Centurion",desc:"hold a 100-day streak",coins:500,test:t=>t.bestStreak>=100},{id:"level_5",icon:"\u25C6",name:"Finding Rhythm",desc:"reach level 5",coins:30,test:t=>t.level>=5},{id:"level_10",icon:"\u25C6",name:"Committed",desc:"reach level 10",coins:80,test:t=>t.level>=10},{id:"level_20",icon:"\u2726",name:"Ascendant",desc:"reach level 20",coins:400,test:t=>t.level>=20},{id:"perfect_day",icon:"\u25CF",name:"Clean Sweep",desc:"complete every habit in one day",coins:35,test:t=>t.totalHabits>0&&t.doneToday>=t.totalHabits},{id:"full_routine",icon:"\u25A3",name:"On Schedule",desc:"complete every routine in one day",coins:45,test:t=>t.totalRoutines>0&&t.routinesDoneToday>=t.totalRoutines},{id:"vault_5",icon:"\u25A2",name:"Vault Keeper",desc:"keep 5 habits in the vault",coins:20,test:t=>t.vaultCount>=5},{id:"bond_max",icon:"\u2661",name:"Inseparable",desc:"reach maximum friendship with your pet",coins:150,test:t=>t.friendship>=95},{id:"evolved",icon:"\u2727",name:"Metamorphosis",desc:"see your pet evolve",coins:25,test:t=>t.petStage>=1},{id:"final_form",icon:"\u2726",name:"Guardian",desc:"reach your pet's final form",coins:350,test:t=>t.petStage>=6},{id:"early_bird",icon:"\u2600",name:"Before Sunrise",desc:"finish something before 6am",coins:60,hidden:!0,test:t=>t.earlyFinish},{id:"night_owl",icon:"\u263E",name:"Night Shift",desc:"finish something after midnight",coins:60,hidden:!0,test:t=>t.lateFinish},{id:"chatterbox",icon:"\u25CC",name:"Good Company",desc:"have 50 conversations with your pet",coins:90,hidden:!0,test:t=>t.chats>=50},{id:"themed",icon:"\u25D0",name:"Interior Design",desc:"unlock every theme",coins:200,hidden:!0,test:t=>t.level>=20},{id:"calm_soul",icon:"\u25EF",name:"Stillness",desc:"use calm mode 10 times",coins:70,hidden:!0,test:t=>t.calmSessions>=10},{id:"comeback",icon:"\u21BB",name:"Back Again",desc:"return after a week away",coins:50,hidden:!0,test:t=>t.returnedAfterGap},{id:"wealthy",icon:"\u25C9",name:"Saver",desc:"hold 1000 coins at once",coins:100,hidden:!0,test:t=>t.coins>=1e3}];function sw(t){return gl.find(e=>e.id===t)}function tT(t,e){let n=new Set(e),r=[];for(let i of gl){if(n.has(i.id))continue;let o=!1;try{o=!!i.test(t)}catch{o=!1}o&&r.push(i.id)}return r}var nT=t=>20+t*5;function rT(t){let[e,n]=(0,a.useState)(()=>De(nx,[])),[r,i]=(0,a.useState)(()=>De(rx,{coins:0})),[o,s]=(0,a.useState)([]);(0,a.useEffect)(()=>{try{localStorage.setItem(nx,JSON.stringify(e))}catch{}},[e]),(0,a.useEffect)(()=>{try{localStorage.setItem(rx,JSON.stringify(r))}catch{}},[r]),(0,a.useEffect)(()=>{let d=tT({...t,coins:r.coins},e);if(!d.length)return;n(p=>[...p,...d]),s(p=>[...p,...d]);let u=d.reduce((p,f)=>p+(sw(f)?.coins||0),0);u&&i(p=>({...p,coins:p.coins+u}))},[t,e,r.coins]);let l=(0,a.useCallback)(d=>{d>0&&P.coin(),i(u=>({...u,coins:Math.max(0,u.coins+d)}))},[]),c=(0,a.useCallback)(()=>s(d=>d.slice(1)),[]);return{earned:e,wallet:r,coins:r.coins,queue:o,current:o[0]||null,shift:c,addCoins:l}}var Or={listeners:new Set,emit(t){this.listeners.forEach(e=>{try{e(t)}catch{}})},on(t){return this.listeners.add(t),()=>this.listeners.delete(t)}},dh="tasksh.pet.v1",oo=[{stage:0,minLevel:1,name:"Spark",title:"just hatched",scale:.62},{stage:1,minLevel:10,name:"Sprout",title:"finding its feet",scale:.72},{stage:2,minLevel:20,name:"Drift",title:"curious and quick",scale:.82},{stage:3,minLevel:30,name:"Ember",title:"steady, warm",scale:.9},{stage:4,minLevel:40,name:"Cirrus",title:"calm and knowing",scale:.96},{stage:5,minLevel:50,name:"Solenn",title:"quietly powerful",scale:1},{stage:6,minLevel:60,name:"Aurelis",title:"legendary guardian",scale:1.06}];function ou(t){let e=oo[0];for(let n of oo)t>=n.minLevel&&(e=n);return e}function Eh(t){return oo.find(e=>e.minLevel>t)||null}var ix={name:"Pip",happiness:70,energy:80,friendship:20,intelligence:30,stage:0,lastTick:0,chats:0,born:0,log:[]},no=t=>Math.max(0,Math.min(100,Math.round(t)));function ox(t,e){let n=t.lastTick||e,r=Math.max(0,(e-n)/36e5);if(r<.25)return t;let i=o=>r*o;return{...t,happiness:no(t.happiness-i(.55)),energy:no(t.energy-i(.75)),friendship:no(t.friendship-i(.12)),intelligence:t.intelligence,lastTick:e}}var iT={habitDone:{happiness:6,energy:-2,friendship:1},routineDone:{happiness:4,energy:-3,friendship:1},taskDone:{happiness:3,energy:-2},vaultDone:{happiness:5,energy:-2,friendship:1},badHabit:{happiness:-7,energy:-4},chat:{friendship:3,happiness:2,intelligence:1},rewardClaimed:{happiness:9,energy:6},calmSession:{happiness:4,energy:12,intelligence:2},levelUp:{happiness:14,energy:18,friendship:5,intelligence:4}};function uh(t,e){let n=iT[e];return n?{...t,happiness:no(t.happiness+(n.happiness||0)),energy:no(t.energy+(n.energy||0)),friendship:no(t.friendship+(n.friendship||0)),intelligence:no(t.intelligence+(n.intelligence||0))}:t}function $h(t){let{happiness:e,energy:n}=t;return e>=78&&n>=60?{key:"joyful",label:"joyful",face:"^^"}:e>=60&&n<32?{key:"sleepy",label:"sleepy",face:"-_-"}:e>=60?{key:"content",label:"content",face:"^ ^"}:e>=35&&n<32?{key:"tired",label:"tired",face:"u_u"}:e>=35?{key:"okay",label:"okay",face:"o o"}:n<30?{key:"drained",label:"drained",face:"x_x"}:{key:"low",label:"a bit low",face:"._."}}function aw(t){return t>=90?"inseparable":t>=70?"close":t>=45?"warming up":t>=20?"getting to know you":"new here"}function yi(t,e){if(!t.length)return"";let n=Math.abs(Math.floor(e))%t.length;return t[n]}function oT(t){let{pet:e,level:n,hour:r,doneToday:i,totalToday:o,streak:s,phase:l}=t,c=$h(e),d=Math.floor(Date.now()/36e5);return e.energy<22?yi(["i'm running low. maybe we both rest a bit.","energy's thin today. no shame in a slow afternoon."],d):o>0&&i===o?yi([`all ${o} done. that's the whole list.`,"everything's ticked off. genuinely well done.","clean sweep today. i noticed."],d):s>=7?yi([`${s} days running. that's a habit now, not an effort.`,`${s} in a row. the hard part's behind you.`],d):i===0&&r>=14?yi(["nothing marked yet. one small thing counts.","still a blank slate today. pick the easiest one."],d):l==="night"&&r>=23?yi(["late one. tomorrow will still be there.","it's late. i'd sleep if i were you."],d):l==="morning"?yi(["morning. what's the one thing that matters today?","fresh day. no debts from yesterday."],d):c.key==="joyful"?yi(["good day so far. i can tell.","you're in a rhythm. keep it easy."],d):e.friendship<15?"still getting to know you. tell me something.":yi([`${i} of ${o} today. steady.`,"here whenever you need. no rush.","quiet so far. that's allowed."],d)}function sT(t){let{pet:e,level:n,doneToday:r,totalToday:i,streak:o,routineNow:s,nextRoutine:l}=t,c=$h(e);return[`pet: ${e.name}, ${oo[e.stage].name} form, mood ${c.label}`,`stats: happiness ${e.happiness}, energy ${e.energy}, friendship ${e.friendship} (${aw(e.friendship)}), intelligence ${e.intelligence}`,`owner: level ${n}, ${r}/${i} habits done today, best streak ${o}`,s?`right now: ${s}`:"no routine running",l?`next up: ${l}`:""].filter(Boolean).join("; ")}function aT(t,e){let n=(0,a.useRef)(De(dh,null)===null),[r,i]=(0,a.useState)(()=>{let p=De(dh,null),f=p?{...ix,...p}:{...ix,born:Date.now(),lastTick:Date.now()};return ox(f,Date.now())}),[o,s]=(0,a.useState)(null);(0,a.useEffect)(()=>{try{localStorage.setItem(dh,JSON.stringify(r))}catch{}},[r]),(0,a.useEffect)(()=>{let p=setInterval(()=>i(f=>ox(f,Date.now())),3e5);return()=>clearInterval(p)},[]);let l=(0,a.useMemo)(()=>ou(t),[t]);(0,a.useEffect)(()=>{if(n.current){n.current=!1,l.stage!==r.stage&&i(p=>({...p,stage:l.stage}));return}if(l.stage>r.stage){let p=r.stage;s({from:p,to:l.stage}),i(f=>uh({...f,stage:l.stage},"levelUp")),P.success()}else l.stage<r.stage&&i(p=>({...p,stage:l.stage}))},[l.stage,r.stage]);let c=(0,a.useCallback)(p=>{i(f=>uh(f,p))},[]);(0,a.useEffect)(()=>Or.on(p=>i(f=>uh(f,p))),[]);let d=(0,a.useCallback)(p=>{let f=String(p||"").trim().slice(0,14);f&&i(m=>({...m,name:f}))},[]),u=(0,a.useCallback)((p,f)=>{i(m=>({...m,chats:p==="user"?m.chats+1:m.chats,log:[...m.log||[],{role:p,text:String(f).slice(0,240)}].slice(-8)}))},[]);return{pet:r,form:l,mood:$h(r),evolution:o,clearEvolution:()=>s(null),nudge:c,rename:d,remember:u}}var Th=a.default.memo(function({stage:e=0,mood:n="content",size:r=128,animate:i=!0,evolving:o=!1}){let s=Math.max(0,Math.min(6,e)),l=25+s*1.9,c=22-s*.55,d=78+s*.9,u=d-l*.8-c*.62-(s>=3?5:0),p=4.6-s*.3,f=Math.min(6+s*5.2,Math.max(4,u-c-9)),m=9+s*1.1,h=9+s*5.4,v=33+s*5.2,x=s>=3,y=s>=4,g=s>=6,b=s>=5,w=s>=2?Math.min(4,s-1):0,k=n==="sleepy"||n==="tired",S=n==="joyful",E=n==="low"||n==="drained",T=k?.9:p*(S?1.16:1)*2,_=E?`M 56 ${u+9} q 8 -5 16 0`:S?`M 55 ${u+6} q 9 8 18 0`:`M 57 ${u+7} q 7 4 14 0`;return a.default.createElement("svg",{viewBox:"-8 4 148 144",width:r,height:r,className:`pet-svg ${i?"pet-anim":""} ${o?"pet-evolving":""}`,style:{"--pet-scale":oo[s].scale},role:"img","aria-label":`${oo[s].name}, ${n}`},a.default.createElement("defs",null,a.default.createElement("radialGradient",{id:`pg-body-${s}`,cx:"38%",cy:"30%"},a.default.createElement("stop",{offset:"0%",stopColor:"var(--accent)",stopOpacity:"1"}),a.default.createElement("stop",{offset:"62%",stopColor:"var(--accent)",stopOpacity:"0.88"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0.55"})),a.default.createElement("radialGradient",{id:`pg-aura-${s}`,cx:"50%",cy:"50%"},a.default.createElement("stop",{offset:"55%",stopColor:"var(--accent)",stopOpacity:"0"}),a.default.createElement("stop",{offset:"88%",stopColor:"var(--accent)",stopOpacity:"0.16"}),a.default.createElement("stop",{offset:"100%",stopColor:"var(--accent)",stopOpacity:"0"}))),a.default.createElement("circle",{className:"pet-aura",cx:"64",cy:d-8,r:v,fill:`url(#pg-aura-${s})`}),y&&a.default.createElement("g",{className:"pet-wings",fill:"var(--accent)",opacity:"0.26"},a.default.createElement("path",{d:`M ${64-l*.75} ${d-8} q -${16+s*2} -${12+s*2} -${5+s} 8 q 4 9 21 5 Z`}),a.default.createElement("path",{d:`M ${64+l*.75} ${d-8} q ${16+s*2} -${12+s*2} ${5+s} 8 q -4 9 -21 5 Z`})),a.default.createElement("path",{className:"pet-tail",d:`M ${64+l*.85} ${d} q ${h} 2 ${h*.9} -${h*.85}`,stroke:"var(--accent)",strokeWidth:3.2,strokeLinecap:"round",fill:"none",opacity:"0.85"}),s>=3&&a.default.createElement("circle",{cx:64+l*.85+h*.9,cy:d-h*.85,r:2.4+s*.35,fill:"var(--accent2)",className:"pet-tailtip"}),x&&a.default.createElement("rect",{x:"59",y:u+c-5,width:"10",height:Math.max(0,d-l*.7-u-c+8),rx:"5",fill:"var(--accent)",opacity:"0.75"}),b&&a.default.createElement("g",{opacity:"0.8"},[0,1,2].map(C=>a.default.createElement("path",{key:C,d:`M ${64-l*.72+C*3} ${d-6-C*7} l -${6+C} -${5+C*2} l ${9+C} ${1+C} Z`,fill:"var(--accent2)"}))),a.default.createElement("g",{className:"pet-body"},a.default.createElement("ellipse",{cx:"64",cy:d,rx:l,ry:l*.86,fill:`url(#pg-body-${s})`}),a.default.createElement("ellipse",{cx:"64",cy:d+2,rx:l*.56,ry:l*.5,fill:"#FFFFFF",opacity:"0.13"}),Array.from({length:w}).map((C,I)=>a.default.createElement("circle",{key:I,cx:50+I*14,cy:68+I%2*5,r:1.9,fill:"var(--accent2)",opacity:"0.75"}))),a.default.createElement("ellipse",{cx:64-l*.42,cy:d+l*.8,rx:5.5+s*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("ellipse",{cx:64+l*.42,cy:d+l*.8,rx:5.5+s*.3,ry:3.4,fill:"var(--accent)",opacity:"0.75"}),a.default.createElement("g",{className:"pet-head"},a.default.createElement("path",{d:`M ${64-m} ${u-c*.72}
                  q -3 -${f} 3 -${f*1.25}
                  q 5 ${f*.45} 4 ${f*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),a.default.createElement("path",{d:`M ${64+m} ${u-c*.72}
                  q 3 -${f} -3 -${f*1.25}
                  q -5 ${f*.45} -4 ${f*.95} Z`,fill:"var(--accent)",opacity:"0.9"}),g&&a.default.createElement("g",{className:"pet-crown"},a.default.createElement("path",{d:`M 51 ${u-c+2}
                      l 4 -8 l 4.5 5 l 4.5 -9 l 4.5 9 l 4.5 -5 l 4 8 Z`,fill:"var(--accent2)",opacity:"0.95"}),a.default.createElement("circle",{cx:"64",cy:u-c-6,r:"2",fill:"#FFFFFF",opacity:"0.9"})),a.default.createElement("circle",{cx:"64",cy:u,r:c,fill:`url(#pg-body-${s})`}),k?a.default.createElement(a.default.Fragment,null,a.default.createElement("path",{d:`M ${64-8.5} ${u} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),a.default.createElement("path",{d:`M ${64+.5} ${u} q 4 3 8 0`,stroke:"var(--bg)",strokeWidth:"2",fill:"none",strokeLinecap:"round"})):a.default.createElement("g",{className:"pet-eyes"},a.default.createElement("ellipse",{cx:64-7.5,cy:u,rx:p,ry:T/2,fill:"var(--bg)"}),a.default.createElement("ellipse",{cx:64+7.5,cy:u,rx:p,ry:T/2,fill:"var(--bg)"}),a.default.createElement("circle",{cx:64-6.2,cy:u-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"}),a.default.createElement("circle",{cx:64+8.8,cy:u-1.4,r:1.25,fill:"#FFFFFF",opacity:"0.92"})),a.default.createElement("path",{d:_,stroke:"var(--bg)",strokeWidth:"1.8",fill:"none",strokeLinecap:"round",opacity:"0.85"}),S&&a.default.createElement(a.default.Fragment,null,a.default.createElement("ellipse",{cx:49,cy:u+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}),a.default.createElement("ellipse",{cx:79,cy:u+4,rx:"3.4",ry:"2.1",fill:"var(--accent2)",opacity:"0.5"}))),s>=1&&a.default.createElement("g",{className:"pet-orbit"},Array.from({length:Math.min(4,s)}).map((C,I)=>a.default.createElement("circle",{key:I,cx:"64",cy:d-8-v,r:1.6+I*.25,fill:"var(--accent2)",opacity:"0.8",style:{transformOrigin:`64px ${d-8}px`,transform:`rotate(${I*(360/Math.min(4,s))}deg)`}}))))}),so=[{id:"terminal",name:"Terminal",blurb:"where it all started",unlockLevel:1,colors:{bg:"#0B0D10",panel:"#14171C",track:"#1E2228",border:"#23272E",text:"#E7EAEE",muted:"#6B7280",accent:"#5EEAD4",accent2:"#F5A623",danger:"#F0576B",glow:"rgba(94,234,212,0.35)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'Inter', system-ui, sans-serif"},shape:{card:10,btn:8,chip:999,border:1,glow:0},ramp:[352,171]},{id:"moss",name:"Moss",blurb:"quiet green, like a forest floor",unlockLevel:10,colors:{bg:"#080D0A",panel:"#111814",track:"#19231D",border:"#1F2C25",text:"#E4EDE7",muted:"#67796F",accent:"#7EE787",accent2:"#D9C36B",danger:"#E8737A",glow:"rgba(126,231,135,0.32)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'Inter', system-ui, sans-serif"},shape:{card:12,btn:10,chip:999,border:1,glow:0},ramp:[28,150]},{id:"dusk",name:"Dusk",blurb:"the hour after sunset",unlockLevel:15,colors:{bg:"#0D0912",panel:"#171122",track:"#20182E",border:"#2A2038",text:"#EDE7F2",muted:"#7A6E88",accent:"#C79BFF",accent2:"#FF9E6B",danger:"#FF6B8A",glow:"rgba(199,155,255,0.38)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"Georgia, 'Times New Roman', serif"},shape:{card:14,btn:12,chip:999,border:1,glow:1},ramp:[330,255]},{id:"abyss",name:"Abyss",blurb:"deep water, far from the surface",unlockLevel:25,colors:{bg:"#050A12",panel:"#0D1520",track:"#141F2C",border:"#1B2938",text:"#DFEAF5",muted:"#5F7286",accent:"#4FC3F7",accent2:"#5EEAD4",danger:"#FF7A93",glow:"rgba(79,195,247,0.4)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'Inter', system-ui, sans-serif"},shape:{card:10,btn:8,chip:999,border:1,glow:2},ramp:[275,186]},{id:"ember",name:"Ember",blurb:"banked coals at midnight",unlockLevel:30,colors:{bg:"#0F0906",panel:"#1A110C",track:"#241812",border:"#2F2118",text:"#F5E9E0",muted:"#8A7264",accent:"#FF9F45",accent2:"#FFD166",danger:"#FF6B5B",glow:"rgba(255,159,69,0.4)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'Inter', system-ui, sans-serif"},shape:{card:14,btn:12,chip:999,border:1,glow:2},ramp:[8,48]},{id:"aurora",name:"Aurora",blurb:"light over a frozen sky",unlockLevel:40,colors:{bg:"#060A10",panel:"#0F1720",track:"#16212C",border:"#1E2B39",text:"#E8F4F2",muted:"#63808A",accent:"#6EE7C8",accent2:"#A78BFA",danger:"#FB7185",glow:"rgba(110,231,200,0.45)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'Inter', system-ui, sans-serif"},shape:{card:16,btn:12,chip:999,border:1,glow:2},ramp:[192,300]},{id:"bone",name:"Bone",blurb:"warm paper, low light",unlockLevel:5,colors:{bg:"#100E0C",panel:"#1A1714",track:"#241F1A",border:"#2E2822",text:"#EDE4D8",muted:"#8A7C6C",accent:"#E0B080",accent2:"#C98A5B",danger:"#D2695E",glow:"rgba(224,176,128,0.32)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"Georgia, 'Times New Roman', serif"},shape:{card:12,btn:10,chip:999,border:1,glow:0},ramp:[18,96]},{id:"neon",name:"Neon",blurb:"signage after rain",unlockLevel:20,colors:{bg:"#07070C",panel:"#0E0E18",track:"#181826",border:"#242438",text:"#EDEDFF",muted:"#6E6E94",accent:"#FF4FD8",accent2:"#4FE3FF",danger:"#FF5470",glow:"rgba(255,79,216,0.45)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'JetBrains Mono', ui-monospace, monospace"},shape:{card:4,btn:3,chip:4,border:1,glow:3},ramp:[316,196]},{id:"sakura",name:"Sakura",blurb:"petals on dark water",unlockLevel:35,colors:{bg:"#0D0910",panel:"#171020",track:"#211829",border:"#2C2136",text:"#F2E6F0",muted:"#8A7594",accent:"#F7A8C4",accent2:"#C58BE8",danger:"#E8607F",glow:"rgba(247,168,196,0.34)"},type:{mono:"'JetBrains Mono', ui-monospace, monospace",ui:"'Inter', system-ui, sans-serif"},shape:{card:18,btn:14,chip:999,border:1,glow:1},ramp:[338,278]}],sx=[{id:"night",from:22,to:5,label:"night",warm:"rgba(40,70,140,0.055)",light:.86,stars:!0},{id:"morning",from:5,to:11,label:"morning",warm:"rgba(255,190,120,0.055)",light:1.04,stars:!1},{id:"afternoon",from:11,to:17,label:"afternoon",warm:"rgba(210,225,255,0.035)",light:1,stars:!1},{id:"evening",from:17,to:22,label:"evening",warm:"rgba(255,130,90,0.055)",light:.94,stars:!1}];function ax(t){for(let e of sx)if(e.from<e.to?t>=e.from&&t<e.to:t>=e.from||t<e.to)return e;return sx[2]}function lT(t){let e=document.documentElement;e.dataset.phase=t.id}var lx="tasksh.calm.v1";function cT(t){let[e,n]=(0,a.useState)(()=>{try{return localStorage.getItem(cx)||Qd}catch{return Qd}}),[r,i]=(0,a.useState)(()=>{try{return localStorage.getItem(lx)==="1"}catch{return!1}}),[o,s]=(0,a.useState)(()=>ax(Bs().hour)),l=(0,a.useMemo)(()=>dT(e),[e]);(0,a.useEffect)(()=>{!Ch(l,t)&&l.id!==Qd&&n(Qd)},[l,t]),(0,a.useEffect)(()=>{uT(l);try{localStorage.setItem(cx,l.id)}catch{}},[l]),(0,a.useEffect)(()=>{lT(o)},[o]),(0,a.useEffect)(()=>{let d=setInterval(()=>{let u=ax(Bs().hour);s(p=>p.id===u.id?p:u)},12e4);return()=>clearInterval(d)},[]),(0,a.useEffect)(()=>{let d=document.documentElement;d.style.setProperty("--calm",r?"1":"0"),d.style.setProperty("--motion-scale",r?"1.9":"1"),d.classList.toggle("calm-mode",r);try{localStorage.setItem(lx,r?"1":"0")}catch{}},[r]);let c=(0,a.useMemo)(()=>so.filter(d=>Ch(d,t)),[t]);return{theme:l,themeId:e,setThemeId:n,themes:so,unlocked:c,phase:o,calm:r,setCalm:i}}so.sort((t,e)=>t.unlockLevel-e.unlockLevel||t.id.localeCompare(e.id));var Qd="terminal",cx="tasksh.theme.v1";function dT(t){return so.find(e=>e.id===t)||so[0]}function Ch(t,e){return e>=t.unlockLevel}function uT(t){let e=document.documentElement,n=t.colors;e.style.setProperty("--bg",n.bg),e.style.setProperty("--panel",n.panel),e.style.setProperty("--track",n.track),e.style.setProperty("--border",n.border),e.style.setProperty("--text",n.text),e.style.setProperty("--muted",n.muted),e.style.setProperty("--accent",n.accent),e.style.setProperty("--accent2",n.accent2),e.style.setProperty("--danger",n.danger),e.style.setProperty("--glow",n.glow);let r=t.type||{},i=t.shape||{};e.style.setProperty("--font-mono",r.mono||"'JetBrains Mono', ui-monospace, monospace"),e.style.setProperty("--font-ui",r.ui||"'Inter', system-ui, sans-serif"),e.style.setProperty("--r-card",`${i.card==null?3:i.card}px`),e.style.setProperty("--r-btn",`${i.btn==null?3:i.btn}px`),e.style.setProperty("--r-chip",`${i.chip==null?3:i.chip}px`),e.style.setProperty("--border-w",`${i.border==null?1:i.border}px`),e.style.setProperty("--glow-w",`${i.glow==null?0:i.glow}px`),$T(t.ramp);let o=document.querySelector('meta[name="theme-color"]');o&&o.setAttribute("content",n.bg)}var lw="tasksh.sound.v1",cw="tasksh.soundcfg.v1",Kd={volume:70,ambient:"off",ambientVolume:35,alarmSeconds:10};function Fs(){try{let t=JSON.parse(localStorage.getItem(cw)||"null")||{},e=(n,r)=>Number.isFinite(n)?Math.max(0,Math.min(100,n)):r;return{volume:e(t.volume,Kd.volume),ambientVolume:e(t.ambientVolume,Kd.ambientVolume),ambient:_h.some(n=>n.id===t.ambient)?t.ambient:"off",alarmSeconds:[0,3,10,20].includes(t.alarmSeconds)?t.alarmSeconds:Kd.alarmSeconds}}catch{return{...Kd}}}function pT(t){try{localStorage.setItem(cw,JSON.stringify(t))}catch{}}var ll=null,tr=null;function fT(){if(!ll){let t=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(!t)return null;ll=new t}return ll.state==="suspended"&&ll.resume(),ll}function Hh(){let t=fT();if(!t)return null;if(tr&&tr.ctx===t)return tr;let e=t.createGain();e.connect(t.destination);let n=r=>{let i=t.createGain();return i.gain.value=r,i.connect(e),i};return tr={ctx:t,master:e,ui:n(1),ambient:n(0),alarm:n(1)},dw(Fs()),tr}function dw(t){if(!tr)return;let e=tr.ctx.currentTime;tr.master.gain.setTargetAtTime(t.volume/100,e,.02),tr.ambient.gain.setTargetAtTime(t.ambient==="off"?0:t.ambientVolume/100*.5,e,.35)}function ao(){try{let t=localStorage.getItem(lw);return t===null?!0:t==="1"}catch{return!0}}function mT(t){try{localStorage.setItem(lw,t?"1":"0")}catch{}}function It(t,e="ui"){if(!ao())return;let n=Hh();if(!n)return;let{ctx:r}=n,i=n[e]||n.ui,o=r.currentTime;t.forEach(({freq:s,start:l=0,dur:c=.08,type:d="sine",gain:u=.05,detune:p=0,slideTo:f=0})=>{let m=r.createOscillator(),h=r.createGain();m.type=d,m.frequency.setValueAtTime(s,o+l),f&&m.frequency.exponentialRampToValueAtTime(Math.max(1,f),o+l+c),p&&m.detune.setValueAtTime(p,o+l),h.gain.setValueAtTime(1e-4,o+l),h.gain.exponentialRampToValueAtTime(u,o+l+.008),h.gain.exponentialRampToValueAtTime(1e-4,o+l+c),m.connect(h),h.connect(i),m.start(o+l),m.stop(o+l+c+.02)})}function Xd({dur:t=.08,gain:e=.03,type:n="highpass",freq:r=1200,q:i=1}={},o="ui"){if(!ao())return;let s=Hh();if(!s)return;let{ctx:l}=s,c=Math.max(1,Math.floor(l.sampleRate*t)),d=l.createBuffer(1,c,l.sampleRate),u=d.getChannelData(0);for(let v=0;v<c;v++)u[v]=Math.random()*2-1;let p=l.createBufferSource();p.buffer=d;let f=l.createBiquadFilter();f.type=n,f.frequency.value=r,f.Q.value=i;let m=l.createGain(),h=l.currentTime;m.gain.setValueAtTime(e,h),m.gain.exponentialRampToValueAtTime(1e-4,h+t),p.connect(f),f.connect(m),m.connect(s[o]||s.ui),p.start(h),p.stop(h+t+.02)}var P={click:()=>It([{freq:720,dur:.045,type:"sine",gain:.035}]),tick:()=>Xd({dur:.02,gain:.018,freq:2600,type:"highpass"}),toggle:()=>It([{freq:560,dur:.06,type:"sine",gain:.04}]),whoosh:()=>Xd({dur:.09,gain:.016,freq:900,type:"bandpass",q:.7}),success:()=>It([{freq:660,start:0,dur:.09,type:"sine",gain:.045},{freq:990,start:.07,dur:.13,type:"sine",gain:.05}]),error:()=>It([{freq:220,start:0,dur:.1,type:"square",gain:.03},{freq:165,start:.08,dur:.14,type:"square",gain:.03}]),delete:()=>It([{freq:300,start:0,dur:.09,type:"sawtooth",gain:.025}]),complete:()=>{Xd({dur:.07,gain:.014,freq:1400,type:"bandpass",q:.8}),It([{freq:587,start:.02,dur:.1,type:"sine",gain:.04},{freq:880,start:.09,dur:.16,type:"sine",gain:.045}])},fail:()=>It([{freq:392,start:0,dur:.1,type:"triangle",gain:.035},{freq:370,start:.07,dur:.16,type:"triangle",gain:.032}]),coin:()=>It([{freq:1320,start:0,dur:.05,type:"square",gain:.022},{freq:1760,start:.04,dur:.1,type:"square",gain:.022}]),levelUp:()=>It([{freq:523,start:0,dur:.12,type:"sine",gain:.045},{freq:659,start:.1,dur:.12,type:"sine",gain:.045},{freq:784,start:.2,dur:.14,type:"sine",gain:.05},{freq:1047,start:.32,dur:.3,type:"sine",gain:.055},{freq:1047,start:.32,dur:.3,type:"sine",gain:.02,detune:8}]),achievement:()=>It([{freq:880,start:0,dur:.1,type:"triangle",gain:.04},{freq:1175,start:.08,dur:.1,type:"triangle",gain:.04},{freq:1568,start:.16,dur:.22,type:"triangle",gain:.045}]),reveal:(t=600)=>{let e=Math.max(.12,Math.min(3,t/1e3));It([{freq:220,dur:e,type:"triangle",gain:.02,slideTo:760}])},land:(t=0)=>{let e=Number.isFinite(t)?Math.max(0,Math.min(5,Math.round(t))):0,n=[392,494,587,698,880,1175][e];It([{freq:n,start:0,dur:.14,type:"sine",gain:.05},{freq:n*1.5,start:.1,dur:.22,type:"sine",gain:.04},...e>=4?[{freq:n*2,start:.22,dur:.34,type:"sine",gain:.045}]:[]])},cash:()=>{Xd({dur:.05,gain:.02,freq:3e3,type:"highpass"}),It([{freq:1047,start:.03,dur:.12,type:"triangle",gain:.03}])}};function hT(t=10){let e=Math.max(0,Math.min(60,t));if(!e)return[];let n=1,r=Math.max(1,Math.ceil(e/n)),i=[];for(let o=0;o<r;o++){let s=o*n;if(s>=e)break;let l=Math.min(.085,.045+o*.006),c=Math.min(4,o);[660+c*20,880+c*30,990+c*40].forEach((u,p)=>{let f=s+p*.22;f>=e||i.push({freq:u,start:f,dur:Math.min(.2,Math.max(.04,e-f)),type:"sine",gain:l})})}if(i.length){let o=i[i.length-1];o.start+o.dur<e-.02&&(o.dur=e-o.start)}return i}function gT(t=10){let e=Math.max(0,Math.min(60,t))*1e3,n=[],r=0;for(;r<e&&!(r+220>e||(n.push(220),r+=220,r+380>e));)n.push(380),r+=380;return n}var Es=null;function uw(t){let e=Fs(),n=t===void 0?e.alarmSeconds:t;if(lo(),!n)return()=>{};let r=hT(n);ao()&&It(r,"alarm");try{navigator.vibrate&&navigator.vibrate(gT(n))}catch{}let i=tr,o=setTimeout(()=>{Es=null},n*1e3+400);return Es=()=>{clearTimeout(o);try{navigator.vibrate&&navigator.vibrate(0)}catch{}if(i){let s=i.ctx.currentTime;i.alarm.gain.cancelScheduledValues(s),i.alarm.gain.setTargetAtTime(0,s,.02),setTimeout(()=>{try{i.alarm.gain.setValueAtTime(1,i.ctx.currentTime)}catch{}},250)}Es=null},Es}function lo(){Es&&Es()}var _h=[{id:"off",label:"off",desc:"silence"},{id:"rain",label:"rain",desc:"steady, filtered, no thunder"},{id:"room",label:"server room",desc:"a low hum and some air"},{id:"tape",label:"tape",desc:"pink noise with slow wow"},{id:"night",label:"night",desc:"a deep drone, very little else"}],_s=null;function fl(t){if(fl.cache&&fl.cache.sampleRate===t.sampleRate)return fl.cache;let e=t.sampleRate*4,n=t.createBuffer(1,e,t.sampleRate),r=n.getChannelData(0),i=0,o=0,s=0;for(let l=0;l<e;l++){let c=Math.random()*2-1;i=.99765*i+c*.099046,o=.963*o+c*.2965164,s=.57*s+c*1.0526913,r[l]=(i+o+s+c*.1848)*.22}return fl.cache=n,n}function Is(){if(_s){try{_s.nodes.forEach(t=>{try{t.stop&&t.stop()}catch{}try{t.disconnect()}catch{}})}catch{}_s=null}}function Ih(t){let e=Hh();if(!e)return;if(!t||t==="off"||!ao()){Is();return}if(_s&&_s.id===t)return;Is();let{ctx:n}=e,r=[],i=n.createBufferSource();i.buffer=fl(n),i.loop=!0,r.push(i);let o=n.createBiquadFilter(),s=n.createGain();if(s.gain.value=0,r.push(o,s),t==="rain")o.type="bandpass",o.frequency.value=1400,o.Q.value=.5,s.gain.setTargetAtTime(.55,n.currentTime,1.5);else if(t==="room"){o.type="lowpass",o.frequency.value=320,o.Q.value=.7,s.gain.setTargetAtTime(.75,n.currentTime,1.5);let d=n.createOscillator(),u=n.createGain();d.type="sine",d.frequency.value=58,u.gain.value=.05,d.connect(u),u.connect(e.ambient),d.start(),r.push(d,u)}else if(t==="tape"){o.type="lowpass",o.frequency.value=2600,o.Q.value=.4,s.gain.setTargetAtTime(.4,n.currentTime,1.5);let d=n.createOscillator(),u=n.createGain();d.frequency.value=.22,u.gain.value=14,d.connect(u),u.connect(i.detune),d.start(),r.push(d,u)}else{o.type="lowpass",o.frequency.value=180,o.Q.value=.8,s.gain.setTargetAtTime(.5,n.currentTime,2);let d=n.createOscillator(),u=n.createGain();d.type="sine",d.frequency.value=72,u.gain.value=.07,d.connect(u),u.connect(e.ambient),d.start(),r.push(d,u)}let l=n.createOscillator(),c=n.createGain();l.frequency.value=.05,c.gain.value=t==="rain"?320:60,l.connect(c),c.connect(o.frequency),l.start(),r.push(l,c),i.connect(o),o.connect(s),s.connect(e.ambient),i.start(),_s={id:t,nodes:r}}function pw(){let[t,e]=(0,a.useState)(ao());return[t,()=>{let r=!t;e(r),mT(r),r?(It([{freq:720,dur:.05,gain:.04}]),Ih(Fs().ambient)):(Is(),lo())}]}function yT(){let[t,e]=(0,a.useState)(Fs);(0,a.useEffect)(()=>{pT(t),dw(t),document.hidden?Is():Ih(ao()?t.ambient:"off")},[t]),(0,a.useEffect)(()=>{let r=()=>{document.hidden?(Is(),lo()):Ih(ao()?Fs().ambient:"off")};return document.addEventListener("visibilitychange",r),()=>{document.removeEventListener("visibilitychange",r),Is()}},[]);let n=(0,a.useCallback)(r=>e(i=>({...i,...r})),[]);return[t,n]}function vT(t,e=550){let[n,r]=(0,a.useState)(t),i=(0,a.useRef)(t),o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let s=i.current,l=t;if(s===l)return;let c=performance.now(),d=p=>1-Math.pow(1-p,3),u=p=>{let f=p-c,m=Math.min(1,f/e),h=d(m);r(Math.round(s+(l-s)*h)),m<1?o.current=requestAnimationFrame(u):i.current=l};return o.current=requestAnimationFrame(u),()=>o.current&&cancelAnimationFrame(o.current)},[t,e]),n}function _r({value:t,className:e,suffix:n=""}){let r=vT(t);return a.default.createElement("span",{className:e},r,n)}function bT({axes:t,size:e=220,maxValue:n,onPick:r,picked:i}){let[o,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let k=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(k)},[]);let l=t.length,c=e/2,d=e/2,u=e/2-(t.length>6?46:34),p=n??Math.max(1,...t.map(k=>k.value)),f=k=>Math.PI*2*k/l-Math.PI/2,m=.16,h=Math.min(0,...t.map(k=>k.value)),v=k=>k>0?m+(1-m)*Math.min(1,k/p):k===0||!h?m:m*(1-.8*Math.min(1,k/h)),x=(k,S)=>{let E=f(k);return[c+Math.cos(E)*u*S,d+Math.sin(E)*u*S]},y=l>6?46:22,g=[.25,.5,.75,1],w=t.map((k,S)=>x(S,o?v(k.value):.02)).map((k,S)=>`${S===0?"M":"L"}${k[0].toFixed(1)},${k[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("svg",{viewBox:`${-y} 0 ${e+y*2} ${e}`,width:"100%",height:e,className:"radar-chart",preserveAspectRatio:"xMidYMid meet"},g.map((k,S)=>{let T=t.map((_,C)=>x(C,m+(1-m)*k)).map((_,C)=>`${C===0?"M":"L"}${_[0].toFixed(1)},${_[1].toFixed(1)}`).join(" ")+"Z";return a.default.createElement("path",{key:S,d:T,className:"radar-ring"})}),a.default.createElement("path",{d:t.map((k,S)=>{let E=x(S,m);return`${S===0?"M":"L"}${E[0].toFixed(1)},${E[1].toFixed(1)}`}).join(" ")+"Z",className:"radar-zero"}),t.map((k,S)=>{let E=x(S,1);return a.default.createElement("line",{key:S,x1:c,y1:d,x2:E[0],y2:E[1],className:"radar-spoke"})}),a.default.createElement("path",{d:w,className:"radar-fill",style:{transition:"d 700ms cubic-bezier(0.22, 1, 0.36, 1)"}}),t.map((k,S)=>{let E=x(S,1.19),T=x(S,o?v(k.value):.02),_=k.value<0,C=Math.cos(f(S)),I=C>.25?"start":C<-.25?"end":"middle",M=i===(k.key||S);return a.default.createElement("g",{key:k.key||S},a.default.createElement("circle",{cx:T[0],cy:T[1],r:M?l>6?5:6:l>6?2.8:3.5,fill:_?"none":k.color||"#5EEAD4",stroke:_?"var(--danger)":"none",strokeWidth:_?1.4:0,style:{transition:"cx 700ms cubic-bezier(0.22,1,0.36,1), cy 700ms cubic-bezier(0.22,1,0.36,1), r 140ms ease"}}),a.default.createElement("text",{x:E[0],y:E[1],textAnchor:I,dominantBaseline:"middle",className:`radar-label ${_?"radar-label-neg":""} ${M?"on":""}`,style:r?{cursor:"pointer"}:void 0,onClick:r?()=>r(k):void 0},_?`${k.label} \u2193`:k.label))}),r&&t.map((k,S)=>{let E=Math.PI/l,T=f(S)-E,_=f(S)+E,C=u*1.42,I=c+Math.cos(T)*C,M=d+Math.sin(T)*C,O=c+Math.cos(_)*C,$=d+Math.sin(_)*C,D=2*E>Math.PI?1:0;return a.default.createElement("path",{key:`hit-${k.key||S}`,className:"radar-hit",d:`M${c},${d} L${I.toFixed(1)},${M.toFixed(1)} A${C.toFixed(1)},${C.toFixed(1)} 0 ${D} 1 ${O.toFixed(1)},${$.toFixed(1)} Z`,fill:"transparent",style:{cursor:"pointer"},onClick:()=>r(k),role:"button",tabIndex:0,"aria-label":`${k.label}: ${k.value} XP`})}))}function xT({pct:t,size:e=108,stroke:n=9,color:r="#5EEAD4",trackColor:i="#1E2228",label:o,sublabel:s}){let[l,c]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let v=requestAnimationFrame(()=>c(!0));return()=>cancelAnimationFrame(v)},[]);let d=e/2-n,u=2*Math.PI*d,p=Math.max(0,Math.min(100,t)),f=u-(l?p/100:0)*u,m=Math.max(8,Math.round(e*.135)),h=Math.max(6.5,Math.round(e*.075));return a.default.createElement("div",{className:"radial-progress-wrap",style:{width:e,height:e}},a.default.createElement("svg",{viewBox:`0 0 ${e} ${e}`,width:e,height:e},a.default.createElement("circle",{cx:e/2,cy:e/2,r:d,fill:"none",stroke:i,strokeWidth:n}),a.default.createElement("circle",{cx:e/2,cy:e/2,r:d,fill:"none",stroke:r,strokeWidth:n,strokeLinecap:"round",strokeDasharray:u,strokeDashoffset:f,transform:`rotate(-90 ${e/2} ${e/2})`,style:{transition:"stroke-dashoffset 900ms cubic-bezier(0.22, 1, 0.36, 1)"}})),a.default.createElement("div",{className:"radial-progress-center"},o&&a.default.createElement("span",{className:"radial-progress-label",style:{fontSize:m}},o),s&&a.default.createElement("span",{className:"radial-progress-sublabel",style:{fontSize:h}},s)))}function Nh({segments:t,size:e=132,stroke:n=18,centerLabel:r,centerSublabel:i}){let[o,s]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let f=requestAnimationFrame(()=>s(!0));return()=>cancelAnimationFrame(f)},[]);let l=e/2-n/2,c=2*Math.PI*l,d=Math.max(1e-6,t.reduce((f,m)=>f+Math.max(0,m.value),0)),u=0,p=t.map(f=>{let m=Math.max(0,f.value),h=m/d,v=o?h*c:0,x=c-v,y=u/d*360;return u+=m,{...f,dash:v,gap:x,rotation:y,frac:h}});return a.default.createElement("div",{className:"donut-wrap",style:{width:e,height:e}},a.default.createElement("svg",{viewBox:`0 0 ${e} ${e}`,width:e,height:e},a.default.createElement("circle",{cx:e/2,cy:e/2,r:l,fill:"none",stroke:"#1E2228",strokeWidth:n}),p.map((f,m)=>a.default.createElement("circle",{key:f.key||m,cx:e/2,cy:e/2,r:l,fill:"none",stroke:f.color,strokeWidth:n,strokeDasharray:`${f.dash} ${f.gap}`,strokeDashoffset:0,transform:`rotate(${f.rotation-90} ${e/2} ${e/2})`,style:{transition:"stroke-dasharray 800ms cubic-bezier(0.22, 1, 0.36, 1)"},strokeLinecap:p.length>1?"butt":"round"}))),a.default.createElement("div",{className:"donut-center"},r!==void 0&&a.default.createElement("span",{className:"donut-center-label"},r),i&&a.default.createElement("span",{className:"donut-center-sublabel"},i)))}function wT({counts:t,weeksBack:e=12,colorSteps:n}){let r=n||["#14171C","#0F3A34","#12564C","#17836F","#5EEAD4"],i=0,o=e*7,s=Array.from({length:o},(u,p)=>i-(o-1-p)),l=Math.max(1,...s.map(u=>t[ne(u)]||0)),c=[];for(let u=0;u<e;u++)c.push(s.slice(u*7,u*7+7));let d=u=>{if(!u)return 0;let p=u/l;return p>.75?4:p>.5?3:p>.25?2:1};return a.default.createElement("div",{className:"heatmap-wrap"},a.default.createElement("div",{className:"heatmap-grid"},c.map((u,p)=>a.default.createElement("div",{className:"heatmap-col",key:p},u.map((f,m)=>{let h=ne(f),v=t[h]||0,x=d(v);return a.default.createElement("span",{key:m,className:`heatmap-cell ${f===0?"today":""}`,style:{background:r[x],animationDelay:`${(p*7+m)*4}ms`},title:`${h}: ${v} completed`})})))),a.default.createElement("div",{className:"heatmap-legend"},a.default.createElement("span",null,"less"),r.map((u,p)=>a.default.createElement("span",{key:p,className:"heatmap-legend-cell",style:{background:u}})),a.default.createElement("span",null,"more")))}function kT(t){let e=[],n=[];for(let r of t){let i=e.findIndex(o=>r.start>=o);i===-1?(i=e.length,e.push(r.end)):e[i]=r.end,n.push({...r,lane:i})}return{placed:n,laneCount:Math.max(1,e.length)}}function AT({routines:t,nowMinutes:e,doneToday:n=0,onToggleToday:r}){let[i,o]=(0,a.useState)(!1),[s,l]=(0,a.useState)(0),[c,d]=(0,a.useState)(0),u=(0,a.useRef)(null),p=(0,a.useRef)(!1),f=(0,a.useRef)({id:null,at:0,x:0,y:0,moved:!1}),[m,h]=(0,a.useState)(null),v=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{v.current&&clearTimeout(v.current)},[]);let x=F=>{r?.(F),h(F),v.current&&clearTimeout(v.current),v.current=setTimeout(()=>{h(null),v.current=null},420)},y=(F,ee)=>{f.current.x=F.clientX,f.current.y=F.clientY,f.current.moved=!1},g=()=>{f.current.moved=!0},b=(F,ee)=>{let re=f.current;if(Math.abs(F.clientX-re.x)>8||Math.abs(F.clientY-re.y)>8){re.id=null;return}let xe=Date.now();re.id===ee&&xe-re.at<400?(x(ee),re.id=null,re.at=0):(re.id=ee,re.at=xe)};(0,a.useEffect)(()=>{let F=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(F)},[]),(0,a.useEffect)(()=>{if(!u.current)return;let F=u.current,ee=new ResizeObserver(re=>{for(let xe of re)l(xe.contentRect.width)});return ee.observe(F),l(F.getBoundingClientRect().width),()=>ee.disconnect()},[]);let w=1440,k=ne(0),S=t.map(F=>{let ee=mn(F.time);return{r:F,start:ee,end:ee+Math.max(1,F.duration)}}),{placed:E,laneCount:T}=kT(S),C=Math.max(s,24*82),I=C/w,M=C>s+1,O=e*I;(0,a.useEffect)(()=>{if(!u.current||!s||p.current)return;if(!M){p.current=!0;return}let F=u.current,ee=Math.max(0,Math.min(O-s/2,C-s));F.scrollTo({left:ee,behavior:"auto"}),p.current=!0},[s,O,C,M]),(0,a.useEffect)(()=>{let F=u.current;if(!F)return;let ee=0,re=()=>{ee||(ee=requestAnimationFrame(()=>{d(F.scrollLeft),ee=0}))};return F.addEventListener("scroll",re,{passive:!0}),d(F.scrollLeft),()=>{F.removeEventListener("scroll",re),cancelAnimationFrame(ee)}},[s]);let $=()=>{let F=u.current;F&&(F.scrollTo({left:Math.max(0,Math.min(O-s/2,C-s)),behavior:"smooth"}),P.click())},D=38,U=6,j=8,oe=j*2+T*D+(T-1)*U,se=I*60>=40?1:3,N=[];for(let F=0;F<=24;F+=se)N.push(F);let G=F=>{let ee=F%24;return ee===0?"12a":ee===12?"12p":ee>12?`${ee-12}p`:`${ee}a`},X=t.length,ie=X?Math.round(n/X*100):0;return a.default.createElement("div",{className:"timeline-wrap"},a.default.createElement("div",{className:"timeline-head"},a.default.createElement("div",{className:"timeline-head-left"},a.default.createElement("span",{className:"timeline-title"},"today's schedule"),X>0&&a.default.createElement("span",{className:"timeline-count"},n,"/",X," done")),M&&a.default.createElement("button",{className:"timeline-jump",onClick:$,title:"Jump to now"},"now")),X>0&&a.default.createElement("div",{className:"timeline-progress"},a.default.createElement("div",{className:"timeline-progress-fill",style:{width:i?`${ie}%`:"0%"}})),a.default.createElement("div",{className:"timeline-scroll",ref:u},a.default.createElement("div",{className:"timeline-inner",style:{width:C}},a.default.createElement("div",{className:"timeline-hours"},N.map(F=>a.default.createElement("div",{key:F,className:"timeline-hour",style:{left:F*60*I}},a.default.createElement("span",null,G(F))))),a.default.createElement("div",{className:"timeline-track",style:{height:oe}},a.default.createElement("div",{className:"timeline-night",style:{left:0,width:360*I}}),a.default.createElement("div",{className:"timeline-night",style:{left:1320*I,width:120*I}}),N.map(F=>a.default.createElement("div",{key:F,className:`timeline-gridline ${F%6===0?"major":""}`,style:{left:F*60*I}})),a.default.createElement("div",{className:"timeline-elapsed",style:{width:i?O:0}}),E.map(({r:F,start:ee,lane:re},xe)=>{let B=ee*I,K=Math.max(1,F.duration)*I,V=Math.max(4,Math.min(K,C-B)),ae=(F.history||[]).includes(k),ze=e>=ee&&e<ee+F.duration,Se=ae?"#39D7BE":ze?"var(--accent2)":"#38414D",ft=Math.max(B,c),Nt=Math.min(B+V,c+s),fo=Math.max(0,Nt-ft)>38,z=Math.max(0,Math.min(c-B,V-46));return a.default.createElement("div",{key:F.id,role:r?"button":void 0,tabIndex:r?0:void 0,"aria-pressed":r?ae:void 0,"aria-label":r?`${F.label}, ${Fn(ee)}${ae?", done":""}. Double-tap to toggle.`:void 0,onPointerDown:r?Y=>y(Y,F.id):void 0,onPointerUp:r?Y=>b(Y,F.id):void 0,onPointerCancel:r?g:void 0,onKeyDown:r?Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),x(F.id))}:void 0,className:`timeline-block ${ae?"done":""} ${ze?"active":""} ${r?"tappable":""} ${m===F.id?"pulse":""}`,style:{left:B,top:j+re*(D+U),width:i?V:0,height:D,transitionDelay:`${Math.min(xe*18,260)}ms`,background:Se,opacity:ae?.75:1},title:`${F.label} \xB7 ${Fn(ee)} \xB7 ${Mr(F.duration)}${ae?" \xB7 done":""}`},fo&&a.default.createElement("span",{className:"timeline-block-label",style:z>0?{paddingLeft:z+8}:void 0},ae&&a.default.createElement("span",{className:"timeline-block-tick"},"\u2713"),F.label))}),a.default.createElement("div",{className:"timeline-now",style:{left:O}},a.default.createElement("span",{className:"timeline-now-time"},Fn(e)))))),M&&a.default.createElement("div",{className:"timeline-hint"},"scroll sideways to see the full day"))}var ST=[{id:1,time:"06:30",label:"Wake + hydrate",duration:30,history:[ne(-1),ne(-2),ne(-3)]},{id:2,time:"07:00",label:"Workout",duration:60,history:[ne(-1),ne(-2)]},{id:3,time:"09:00",label:"Deep work block",duration:180,history:[ne(0),ne(-1),ne(-2),ne(-3),ne(-4)]},{id:4,time:"13:00",label:"Lunch break",duration:45,history:[]},{id:5,time:"14:00",label:"Admin / errands",duration:120,history:[]},{id:6,time:"18:00",label:"Rice / creative projects",duration:90,history:[ne(-1)]},{id:7,time:"20:00",label:"Dinner",duration:45,history:[]},{id:8,time:"21:30",label:"Anime / wind down",duration:90,history:[]},{id:9,time:"23:00",label:"Sleep",duration:450,history:[]}];function fw(){let[t,e]=(0,a.useState)(null);return(0,a.useEffect)(()=>{let n=!1,r=async()=>{try{if(typeof caches>"u"||!caches.keys)return;let s=(await caches.keys()).filter(l=>/^tasksh-v\d+$/.test(l)).sort((l,c)=>parseInt(c.slice(8),10)-parseInt(l.slice(8),10))[0];!n&&s&&e(s.replace("tasksh-",""))}catch{}};r();let i=navigator.serviceWorker;return i?.addEventListener?.("controllerchange",r),()=>{n=!0,i?.removeEventListener?.("controllerchange",r)}},[]),t}function ET({text:t="tasks.sh"}){let e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,[n,r]=(0,a.useState)(e?t.length:0);return(0,a.useEffect)(()=>{if(e||n>=t.length)return;let i=setTimeout(()=>r(o=>o+1),55);return()=>clearTimeout(i)},[n,e,t.length]),a.default.createElement("span",{className:"titlebar-name"},t.slice(0,n),a.default.createElement("span",{className:`type-caret ${n>=t.length?"idle":""}`}))}var dx={today:"M4 7h16M4 12h16M4 17h10",tasks:"M9 6h11M9 12h11M9 18h11M4.5 6l1 1 2-2M4.5 12l1 1 2-2M4.5 18l1 1 2-2",routines:"M12 7v5l3 2M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9z",vault:"M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM12 9.5v5M9.5 12h5",quest:"M12 3l2.6 5.6 6.1.8-4.5 4.2 1.2 6.1L12 16.8 6.6 19.7l1.2-6.1L3.3 9.4l6.1-.8L12 3z",tools:"M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6 1.4 1.4 2.6-2.6a4 4 0 0 1-4.4-4.4z",pet:"M12 20s-7-4.4-7-9.2A4 4 0 0 1 12 8a4 4 0 0 1 7 2.8C19 15.6 12 20 12 20z"};function TT({id:t}){let e=dx[t]||dx.today;return a.default.createElement("svg",{viewBox:"0 0 24 24",width:"21",height:"21","aria-hidden":"true",focusable:"false"},a.default.createElement("path",{d:e,fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))}function CT(){let t=fw();return t?a.default.createElement("span",{className:"version-badge",title:`running build ${t}`},t):null}function Au(t=420){let[e,n]=(0,a.useState)(!1),r=(0,a.useRef)(null),i=(0,a.useCallback)(()=>{r.current&&clearTimeout(r.current),n(!0),r.current=setTimeout(()=>{n(!1),r.current=null},t)},[t]);return(0,a.useEffect)(()=>()=>{r.current&&clearTimeout(r.current)},[]),[e,i]}function qh(){let[t,e]=(0,a.useState)(Bs());return(0,a.useEffect)(()=>{let n=setInterval(()=>e(Bs()),1e3);return()=>clearInterval(n)},[]),t}function Rh(t,e){return(0,a.useMemo)(()=>{let n=[...t].sort((o,s)=>mn(o.time)-mn(s.time));if(n.length===0)return{sorted:n,currentId:null,nextId:null};let r=n.length-1;for(let o=0;o<n.length&&mn(n[o].time)<=e;o++)r=o;let i=(r+1)%n.length;return{sorted:n,currentId:n[r].id,nextId:n[i].id}},[t,e])}function _T({routine:t,status:e,index:n,total:r=1,nowMinutes:i=0,onDelete:o,onToggleToday:s,onSave:l}){let c=mn(t.time),d=c+t.duration,u=t.duration>0?Math.max(0,Math.min(100,(i-c)/t.duration*100)):0,{streak:p,freezeUsed:f}=Vh(t.history),m=(t.history||[]).includes(ne(0)),h=(0,a.useMemo)(()=>{let F=new Set(t.history||[]);return Array.from({length:7},(ee,re)=>{let xe=re-6,B=ne(xe);return{d:B,on:F.has(B),today:xe===0}})},[t.history]),[v,x]=(0,a.useState)(0),y=(0,a.useRef)(!1),g=(0,a.useRef)(0),b=(0,a.useRef)(0),w=(0,a.useRef)(null),k=(0,a.useRef)(!1),[S,E]=(0,a.useState)(!1),T=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{T.current&&clearTimeout(T.current)},[]);let[_,C]=(0,a.useState)(!1),[I,M]=(0,a.useState)(t.label),[O,$]=(0,a.useState)(t.time),[D,U]=(0,a.useState)(t.duration),[j,oe]=(0,a.useState)(t.alternatives||[]),se=()=>{M(t.label),$(t.time),U(t.duration),oe(t.alternatives||[]),C(!0)},N=()=>{let F=I.trim();F&&(l(t.id,{label:F,time:O||t.time,duration:Math.max(5,+D||t.duration),alternatives:j.map(ee=>ee.trim()).filter(Boolean)}),C(!1))},G=F=>{_||(y.current=!0,k.current=!1,w.current=null,g.current=F.clientX,b.current=F.clientY)},X=F=>{if(!y.current)return;let ee=F.clientX-g.current,re=F.clientY-b.current;if(w.current===null){if(Math.abs(ee)<6&&Math.abs(re)<6)return;if(w.current=Math.abs(ee)>Math.abs(re)?"x":"y",w.current==="y"){y.current=!1;return}}w.current==="x"&&(Math.abs(ee)>4&&(k.current=!0),x(Math.max(-120,Math.min(0,ee))))},ie=()=>{y.current&&(y.current=!1,v<-70?(E(!0),T.current||(T.current=setTimeout(()=>o(t.id),200))):(x(0),k.current||se()))};return a.default.createElement("div",{className:`routine-row-wrap ${S?"removing":""}`,style:{animationDelay:`${n*35}ms`}},a.default.createElement("div",{className:"routine-delete-bg"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"#fff",strokeWidth:"2.2",strokeLinecap:"round"}))),a.default.createElement("div",{className:`routine-row ${e} edge`,style:{transform:`translateX(${v}px)`,transition:y.current?"none":"transform 220ms cubic-bezier(.65,0,.35,1)",...gw(m?"done":null)},onPointerDown:G,onPointerMove:X,onPointerUp:ie,onPointerLeave:ie,onPointerCancel:ie},a.default.createElement("div",{className:"routine-line"},a.default.createElement("span",{className:`routine-node ${m?"quest-done":""}`})),_?a.default.createElement("div",{className:"routine-edit",onPointerDown:F=>F.stopPropagation()},a.default.createElement("input",{className:"edit-label",value:I,onChange:F=>M(F.target.value),onKeyDown:F=>F.key==="Enter"&&N(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"time",className:"time-input",value:O,onChange:F=>$(F.target.value)}),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-input",value:D,onChange:F=>U(F.target.value)}),a.default.createElement("span",{className:"edit-unit"},"min")),a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do instead"),j.map((F,ee)=>a.default.createElement("div",{className:"alt-composer-row",key:ee},a.default.createElement("input",{type:"text",placeholder:`alternative ${ee+1}`,value:F,onChange:re=>{let xe=[...j];xe[ee]=re.target.value,oe(xe)},onKeyDown:re=>re.key==="Enter"&&N()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>oe(j.filter((re,xe)=>xe!==ee)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>oe([...j,""])},"+ another option")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>C(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:N},"save"))):a.default.createElement("div",{className:"routine-main"},a.default.createElement("div",{className:"routine-top"},a.default.createElement("span",{className:"routine-time"},Fn(c)),e==="current"&&a.default.createElement("span",{className:"live-tag"},"NOW"),p>0&&a.default.createElement("span",{className:"streak-tag"},"\u{1F525}",p,f&&a.default.createElement("span",{className:"freeze-tag",title:"a missed day was covered by a streak freeze"},"\u2744\uFE0F"))),a.default.createElement("span",{className:"routine-label"},t.label),t.alternatives&&t.alternatives.length>0&&a.default.createElement("span",{className:"routine-alts"},"or: ",t.alternatives.join(" \xB7 ")),a.default.createElement("span",{className:"routine-span"},Fn(c)," \u2013 ",Fn(d)," \xB7 ",Mr(t.duration)),a.default.createElement("div",{className:"routine-week","aria-label":`${h.filter(F=>F.on).length} of the last 7 days`},h.map(F=>a.default.createElement("span",{key:F.d,className:`rw-dot ${F.on?"on":""} ${F.today?"today":""}`,title:F.d})),a.default.createElement("span",{className:"rw-count"},h.filter(F=>F.on).length,"/7")),e==="current"&&a.default.createElement("div",{className:"routine-progress"},a.default.createElement("span",{className:"rp-fill",style:{width:`${Math.round(u)}%`}}))),!_&&a.default.createElement("button",{className:"link-btn routine-link",onClick:F=>{F.stopPropagation(),Wh.open(Cs("routine",t.id)),P.click()},"aria-label":"Links",title:"Link to other items"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},a.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),a.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function IT({routines:t,setRoutines:e}){let n=qh(),r=n.hour*60+n.minute,{sorted:i,currentId:o,nextId:s}=Rh(t,r),l=i.find(O=>O.id===o),c=i.find(O=>O.id===s),[d,u]=(0,a.useState)(""),[p,f]=(0,a.useState)(()=>ch(r)),[m,h]=(0,a.useState)(30),[v,x]=Au(),[y,g]=(0,a.useState)([]),[b,w]=(0,a.useState)(!1),k=()=>{let O=d.trim();if(!O){x(),P.error();return}let $=p||ch(r),D=y.map(U=>U.trim()).filter(Boolean);e(U=>[...U,{id:Ne(),time:$,label:O,duration:Math.max(5,+m||30),history:[],alternatives:D}]),u(""),f(ch(r)),h(30),g([]),w(!1),P.click()},S=O=>{e($=>$.filter(D=>D.id!==O)),P.delete()},E=O=>{let $=ne(0),D=!(t.find(U=>U.id===O)?.history||[]).includes($);e(U=>U.map(j=>{if(j.id!==O)return j;let se=(j.history||[]).includes($)?j.history.filter(N=>N!==$):[...j.history||[],$];return{...j,history:se.slice(-60)}})),ku.propagate("routine",O,D),D?(P.success(),Or.emit("routineDone")):P.click()},T=(O,$)=>e(D=>D.map(U=>U.id===O?{...U,...$}:U)),_=l?mn(l.time)+l.duration:0,C=c?(mn(c.time)-r+1440)%1440||1440:0,I=ne(0),M=i.filter(O=>(O.history||[]).includes(I)).length;return a.default.createElement("div",{className:"task-list routine-list"},a.default.createElement("div",{className:"hero-card"},a.default.createElement("div",{className:"hero-clock-row"},a.default.createElement("span",{className:"hero-clock"},String(n.hour%12===0?12:n.hour%12).padStart(2,"0"),":",String(n.minute).padStart(2,"0"),a.default.createElement("span",{className:"hero-sec"},":",String(n.second).padStart(2,"0")),a.default.createElement("span",{className:"hero-ampm"},n.hour<12?"AM":"PM")),a.default.createElement("span",{className:"hero-tz"},"IST \xB7 INDIA")),a.default.createElement("span",{className:"hero-date"},QE()),a.default.createElement("div",{className:"hero-divider"}),l?a.default.createElement("div",{className:"hero-current"},a.default.createElement("span",{className:"hero-label"},"CURRENT ROUTINE"),a.default.createElement("div",{className:"hero-current-name"},a.default.createElement("span",{className:"pulse-dot"}),l.label),a.default.createElement("span",{className:"hero-sub"},"until ",Fn(_)," \xB7 next: ",c?.label," in ",Mr(C))):a.default.createElement("span",{className:"hero-sub"},"no routines yet")),a.default.createElement(AT,{routines:i,nowMinutes:r,doneToday:M,onToggleToday:E}),a.default.createElement("div",{className:`composer ${v?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"new routine...",value:d,onChange:O=>u(O.target.value),onKeyDown:O=>O.key==="Enter"&&k()}),a.default.createElement("input",{type:"time",className:"time-input",value:p,onChange:O=>f(O.target.value)}),a.default.createElement("button",{type:"button",className:`alt-toggle-btn ${b?"active":""}`,onClick:()=>w(O=>!O),"aria-label":"Add optional alternatives for this slot",title:"Add optional alternatives for this slot"},"or"),a.default.createElement("button",{className:"add-btn",onClick:k,"aria-label":"Add routine"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),b&&a.default.createElement("div",{className:"alt-composer"},a.default.createElement("span",{className:"alt-composer-hint"},"optional: other things you could do in this slot instead"),y.map((O,$)=>a.default.createElement("div",{className:"alt-composer-row",key:$},a.default.createElement("input",{type:"text",placeholder:`alternative ${$+1}, e.g. "Drawing"`,value:O,onChange:D=>{let U=[...y];U[$]=D.target.value,g(U)},onKeyDown:D=>D.key==="Enter"&&k()}),a.default.createElement("button",{type:"button",className:"alt-remove-btn",onClick:()=>g(y.filter((D,U)=>U!==$)),"aria-label":"Remove alternative"},"\xD7"))),a.default.createElement("button",{type:"button",className:"alt-add-btn",onClick:()=>g([...y,""])},"+ another option")),a.default.createElement("div",{className:"duration-chips"},KE.map(O=>a.default.createElement("button",{key:O,className:m===O?"active":"",onClick:()=>h(O)},Mr(O))),a.default.createElement("input",{type:"number",min:"5",step:"5",className:"duration-custom",value:m,onChange:O=>h(+O.target.value||5)})),i.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no quests yet \u2014 add your first routine")):i.map((O,$)=>a.default.createElement(_T,{key:O.id,routine:O,index:$,total:i.length,status:O.id===o?"current":O.id===s?"next":"idle",nowMinutes:r,onDelete:S,onToggleToday:E,onSave:T})))}var NT=[{id:1,icon:"\u25C6",label:"6 Hr Deep Work",weeklyGoal:7,history:[ne(0),ne(-1),ne(-2)]},{id:2,icon:"\u25C7",label:"Eat Healthy",weeklyGoal:7,history:[ne(-1)]},{id:3,icon:"\u25A2",label:"Reading",weeklyGoal:4,history:[]},{id:4,icon:"\u25B2",label:"Workout",weeklyGoal:6,history:[ne(0)]}],PT=[{id:1,name:"Notion Template",dueDate:ne(7),tasks:[{id:Ne(),text:"Design layout",done:!0},{id:Ne(),text:"Write docs",done:!1},{id:Ne(),text:"Publish",done:!1}]},{id:2,name:"Content Creation",dueDate:ne(7),tasks:[{id:Ne(),text:"Script draft",done:!1},{id:Ne(),text:"Record",done:!1}]}];var ux="tasksh.notes.v1",MT=[{id:1,title:"ideas.md",body:`things to build next:
- undo toast on delete
- keyboard shortcuts (ctrl+k)
- xp sparkline over time`,updated:Date.now()}];function OT(){let[t,e]=yT(),[n,r]=pw(),[i,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>()=>lo(),[]);let s=()=>{if(i){lo(),o(!1);return}o(!0),uw(t.alarmSeconds),setTimeout(()=>o(!1),t.alarmSeconds*1e3+300)};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"SOUND")),a.default.createElement("div",{className:"snd"},a.default.createElement("button",{className:`snd-mute ${n?"on":""}`,onClick:r},n?"sound is on":"muted"),a.default.createElement("label",{className:"snd-slider"},a.default.createElement("span",{className:"snd-label"},"volume"),a.default.createElement("input",{type:"range",min:"0",max:"100",step:"5",value:t.volume,onChange:l=>e({volume:+l.target.value})}),a.default.createElement("span",{className:"snd-val"},t.volume)),a.default.createElement("div",{className:"snd-sub"},"AMBIENT"),a.default.createElement("div",{className:"snd-scenes"},_h.map(l=>a.default.createElement("button",{key:l.id,className:t.ambient===l.id?"on":"",onClick:()=>{e({ambient:l.id}),P.click()},title:l.desc},l.label))),a.default.createElement("div",{className:"snd-hint"},(_h.find(l=>l.id===t.ambient)||{}).desc,t.ambient!=="off"&&" \xB7 stops when the app is in the background"),t.ambient!=="off"&&a.default.createElement("label",{className:"snd-slider"},a.default.createElement("span",{className:"snd-label"},"bed level"),a.default.createElement("input",{type:"range",min:"0",max:"100",step:"5",value:t.ambientVolume,onChange:l=>e({ambientVolume:+l.target.value})}),a.default.createElement("span",{className:"snd-val"},t.ambientVolume)),a.default.createElement("div",{className:"snd-sub"},"POMODORO RING"),a.default.createElement("div",{className:"snd-scenes"},[[0,"silent"],[3,"3s"],[10,"10s"],[20,"20s"]].map(([l,c])=>a.default.createElement("button",{key:l,className:t.alarmSeconds===l?"on":"",onClick:()=>{e({alarmSeconds:l}),P.click()}},c)),a.default.createElement("button",{className:`snd-test ${i?"on":""}`,onClick:s},i?"stop":"test")),a.default.createElement("div",{className:"snd-hint"},"the in-app ring only fires while the app is open. the push notification is the one that works with the screen off.")))}function BT(){return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement(KC,null),a.default.createElement(e_,null),a.default.createElement(OT,null),a.default.createElement("pre",{className:"cap-note"},"habits, projects and notes moved out of here in v44. nothing was deleted \u2014 they are still in your backups."))}var co=[{key:"work",label:"Work",color:"#5EEAD4"},{key:"body",label:"Body",color:"#F5A623"},{key:"health",label:"Health",color:"#F0576B"},{key:"self",label:"Self",color:"#8B9CF7"},{key:"discipline",label:"Discipline",color:"#60A5FA"}],io=["#5EEAD4","#F5A623","#F0576B","#8B9CF7","#60A5FA","#7EE787","#FB7185","#C084FC","#34D399","#FBBF24","#F472B6","#38BDF8"],pu=12,mw="tasksh.tags.v1";function vl(){let t=De(mw,null);if(!Array.isArray(t)||!t.length)return co;let e=t.filter(n=>n&&typeof n.key=="string"&&typeof n.label=="string").map(n=>({key:n.key,label:String(n.label).slice(0,14),color:/^#[0-9a-fA-F]{6}$/.test(n.color)?n.color:io[0]})).slice(0,pu);return e.length?e:co}function er(t,e=co){let n=new Set(e.map(i=>i.key));if(Array.isArray(t&&t.tags)){let i=t.tags.filter(o=>n.has(o));if(i.length)return i}let r=Ph(t,n);return r.length?r:[e[0].key]}var FT={work:"work",fitness:"body",health:"health",self:"self"};function Ph(t,e){let n=[],r=o=>{o&&e.has(o)&&!n.includes(o)&&n.push(o)},i={screen:"discipline",admin:"discipline",movement:"health",spirituality:"self",social:"self",mind:"health"};return t&&t.sub&&i[t.sub]&&r(i[t.sub]),t&&t.area&&r(FT[t.area]),n}function Kt(t){return Array.isArray(t)?t.map(e=>typeof e=="string"?{d:e,t:"done"}:e).filter(e=>e&&typeof e.d=="string"):[]}function Ds(t,e){return Kt(t.history).filter(n=>n.t===e).length}function bi(t){return Math.max(0,+t.xp||0)}function ro(t){return Math.max(0,+t.penalty||0)}function jh(t){return bi(t)*Ds(t,"done")-ro(t)*Ds(t,"slip")}function bl(t,e){return Kt(t.history).some(n=>n.d===e&&n.t==="done")}function Mh(t,e){return Kt(t.history).some(n=>n.d===e&&n.t==="slip")}function px(t,e,n){let r=Kt(t.history),i=r.find(s=>s.d===e),o=r.filter(s=>s.d!==e);return i&&i.t===n?{...t,history:o.slice(-400)}:{...t,history:[...o,{d:e,t:n}].slice(-400)}}function DT(t,e){let n=(Array.isArray(t)?t:[]).map(s=>({...s,xp:Math.max(0,+s.xp||0),penalty:Math.max(0,+s.penalty||0),history:Kt(s.history)})),r=new Set(n.map(s=>s.id)),i=new Map,o=(Array.isArray(e)?e:[]).map(s=>{let l=s.id;return r.has(l)&&(l=Ne(),i.set(s.id,l)),r.add(l),{...s,id:l,xp:Math.max(0,+s.xp2||0),penalty:Math.max(0,+s.xp||0),history:Kt(s.history).map(c=>({d:c.d,t:"slip"})),wasBad:!0}});return[...n,...o]}function zT(t,e,n){return(e||[]).filter(r=>er(r,n).includes(t)).reduce((r,i)=>r+jh(i),0)}function LT(t,e,n){let r=(t||[]).filter(e),i=0,o=0,s=0,l=0;for(let p of r){let f=Ds(p,"done"),m=Ds(p,"slip");i+=bi(p)*f,o+=ro(p)*m,s+=f,l+=m}let c=(n||[]).filter(p=>fu(p)>0);for(let p of c)i+=Ns(p),s+=fu(p);let d=i-o,u=r.map(p=>({id:p.id,label:p.label,net:jh(p),daily:!1})).concat(c.map(p=>({id:`d${p.id}`,label:p.text,net:Ns(p),daily:!0}))).sort((p,f)=>f.net-p.net);return{count:r.length+c.length,gained:i,lost:o,done:s,slipped:l,raw:d,value:Math.max(0,d),rows:u,dailyCount:c.length,dailyXP:c.reduce((p,f)=>p+Ns(f),0)}}function hw(t,e,n,r){return zT(t,e,n)+RT(t,r,n)}function UT(t,e,n,r){return Math.max(0,hw(t,e,n,r))}function VT(){let[t,e]=(0,a.useState)(vl);(0,a.useEffect)(()=>{try{localStorage.setItem(mw,JSON.stringify(t))}catch{}},[t]);let n=(0,a.useCallback)((l,c)=>{let d=String(c||"").trim().slice(0,14);d&&e(u=>u.map(p=>p.key===l?{...p,label:d}:p))},[]),r=(0,a.useCallback)((l,c)=>{/^#[0-9a-fA-F]{6}$/.test(c)&&e(d=>d.map(u=>u.key===l?{...u,color:c}:u))},[]),i=(0,a.useCallback)(l=>{let c=String(l||"").trim().slice(0,14);c&&e(d=>{if(d.length>=pu)return d;let u=c.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,12)||"tag",p=u,f=2;for(;d.some(v=>v.key===p);)p=`${u}${f++}`;let m=new Set(d.map(v=>v.color)),h=io.find(v=>!m.has(v))||io[d.length%io.length];return[...d,{key:p,label:c,color:h}]})},[]),o=(0,a.useCallback)((l,c)=>{e(d=>d.length<=1?d:d.filter(u=>u.key!==l)),c&&c(l)},[]),s=(0,a.useCallback)(()=>e(co),[]);return{tags:t,renameTag:n,recolourTag:r,addTag:i,removeTag:o,resetTags:s}}var WT=[352,171];function $T(t){WT=Array.isArray(t)&&t.length===2?t:[352,171]}function gw(t){return t==="done"?{"--edge":"hsla(171, 80%, 55%, 0.85)"}:t==="failed"?{"--edge":"hsla(352, 80%, 60%, 0.85)"}:{}}var cl=["Novice","Apprentice","Adept","Ranger","Knight","Vanguard","Wizard","Sage","Champion","Sentinel","Archon","Warlord","Mystic","Overlord","Ascendant","Legend","Mythic","Immortal","Transcendent","Eternal"],xi={easy:10,mid:50,hard:100},HT=400;function qT(t){return xi[t&&t.diff]||xi.easy}function fu(t){return Array.isArray(t&&t.history)?t.history.length:0}function Ns(t){return qT(t)*fu(t)}function fn(t,e){let n=new Set((e||[]).map(r=>r.key));return Array.isArray(t&&t.tags)?t.tags.filter(r=>n.has(r)):[]}function RT(t,e,n){return(e||[]).filter(r=>fn(r,n).includes(t)).reduce((r,i)=>r+Ns(i),0)}function yw(t){return(t||[]).reduce((e,n)=>e+Ns(n),0)}function jT(t,e,n){return(t||[]).map(r=>{if(r.id!==e)return r;let i=Array.isArray(r.history)?r.history:[];return i.includes(n)?r:{...r,history:[...i,n].slice(-HT)}})}function vw(t,e){let n=(t||[]).reduce((i,o)=>i+jh(o),0),r=(e||[]).reduce((i,o)=>i+(xi[o&&o.diff]||xi.easy)*(Array.isArray(o&&o.history)?o.history.length:0),0);return Math.max(0,n+r)}var bw=160,xw=1.35;function Ir(t){return t<=1?0:Math.round(bw*Math.pow(t-1,xw))}function ww(t){let e=Math.max(0,t),n=Math.max(1,Math.floor(1+Math.pow(e/bw,1/xw)));for(;Ir(n+1)<=e;)n++;for(;n>1&&Ir(n)>e;)n--;let r=e-Ir(n),i=Ir(n+1)-Ir(n);return{level:n,into:r,span:i}}function GT(t){let e=[[1e3,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],[10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]],n=t,r="";for(let[i,o]of e)for(;n>=i;)r+=o,n-=i;return r}function kw(t){let e=Math.floor((Math.max(1,t)-1)/3);if(e<cl.length)return cl[e];let n=e-cl.length+2;return`${cl[cl.length-1]} ${GT(n)}`}var QT=[{id:1,label:"Deep Work",tags:["work"],desc:"one uninterrupted block, no phone",xp:40,history:[ne(0),ne(-1)]},{id:2,label:"Workout",tags:["body"],desc:"any real session, however short",xp:20,history:[ne(-1)]},{id:3,label:"Healthy Diet",tags:["health"],desc:"no junk for the whole day",xp:10,history:[]},{id:4,label:"Reading",tags:["self"],desc:"a chapter, for yourself not for school",xp:10,history:[]}],KT=[{id:1,label:"High Screen Time",tags:["discipline"],xp:20,history:[]},{id:2,label:"Junk Food",tags:["health"],xp:20,history:[]}],XT=[{id:1,label:"Watch a movie",cost:100,claimed:[]},{id:2,label:"Order takeout",cost:150,claimed:[]},{id:3,label:"Take a day off",cost:250,claimed:[]}];function YT(t,e,n,r){let i={};for(let p of Kt(t&&t.history))i[p.d]=p.t;let o=p=>String(p).padStart(2,"0"),s=new Date(Date.UTC(e,n-1,1)),l=new Date(Date.UTC(e,n,0)).getUTCDate(),c=(s.getUTCDay()+6)%7,d=[];for(let p=0;p<c;p++)d.push(null);for(let p=1;p<=l;p++){let f=`${e}-${o(n)}-${o(p)}`;d.push({d:f,day:p,state:i[f]||null,today:f===r,future:f>r})}for(;d.length%7!==0;)d.push(null);for(;d.length<42;)d.push(null);let u=[];for(let p=0;p<d.length;p+=7)u.push(d.slice(p,p+7));return u}function JT(t,e,n){let r=Kt(t&&t.history),i=`${e}-${String(n).padStart(2,"0")}`,o=r.filter(c=>c.d.startsWith(i)),s=(c,d)=>c.filter(u=>u.t===d).length,l=r.filter(c=>c.t==="done").map(c=>c.d);return{monthDone:s(o,"done"),monthSlip:s(o,"slip"),allDone:s(r,"done"),allSlip:s(r,"slip"),streak:iu(l),best:ZT(l)}}function ZT(t){let e=[...new Set(t)].sort(),n=0,r=0,i=null,o=s=>{let[l,c,d]=s.split("-").map(Number),u=new Date(Date.UTC(l,c-1,d)+864e5);return`${u.getUTCFullYear()}-${String(u.getUTCMonth()+1).padStart(2,"0")}-${String(u.getUTCDate()).padStart(2,"0")}`};for(let s of e)r=i&&o(i)===s?r+1:1,r>n&&(n=r),i=s;return n}var Gh=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];function fx(t,e){let n=t.year*12+(t.month-1)+e;return{year:Math.floor(n/12),month:n%12+1}}function Qh({onRight:t,onLeft:e,threshold:n=64,enabled:r=!0}){let[i,o]=(0,a.useState)(0),s=(0,a.useRef)(!1),l=(0,a.useRef)({x:0,y:0}),c=(0,a.useRef)(null),d=(0,a.useRef)(!1),u=h=>{r&&(s.current=!0,d.current=!1,c.current=null,l.current={x:h.clientX,y:h.clientY})},p=h=>{if(!s.current)return;let v=h.clientX-l.current.x,x=h.clientY-l.current.y;if(c.current===null){if(Math.abs(v)<6&&Math.abs(x)<6)return;if(c.current=Math.abs(v)>Math.abs(x)?"x":"y",c.current==="y"){s.current=!1,o(0);return}}if(c.current!=="x")return;Math.abs(v)>4&&(d.current=!0);let y=Math.sign(v)*Math.min(Math.abs(v),n+(Math.abs(v)-n)*.35);o(Math.abs(v)>n?y:v)},f=()=>{if(!s.current){o(0);return}s.current=!1;let h=i;o(0),h>=n&&t?t():h<=-n&&e&&e()},m=()=>{s.current=!1,o(0)};return{dx:i,armed:i>=n?"right":i<=-n?"left":null,dragging:s.current,handlers:{onPointerDown:u,onPointerMove:p,onPointerUp:f,onPointerCancel:m,onPointerLeave:f}}}function eC({habit:t,onClose:e}){let n=ne(0),[r,i]=n.split("-").map(Number),[o,s]=(0,a.useState)({year:r,month:i}),l=(0,a.useMemo)(()=>YT(t,o.year,o.month,n),[t,o,n]),c=(0,a.useMemo)(()=>JT(t,o.year,o.month),[t,o]),d=o.year===r&&o.month===i;return a.default.createElement("div",{className:"sheet-backdrop",onClick:e},a.default.createElement("div",{className:"sheet qh-sheet",onClick:u=>u.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},t.label),a.default.createElement("button",{className:"sheet-close",onClick:e,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"qh-nav"},a.default.createElement("button",{onClick:()=>{s(fx(o,-1)),P.click()},"aria-label":"Previous month"},"\u2039"),a.default.createElement("span",{className:"qh-month"},Gh[o.month-1]," ",o.year),a.default.createElement("button",{disabled:d,onClick:()=>{s(fx(o,1)),P.click()},"aria-label":"Next month"},"\u203A")),a.default.createElement("div",{className:"qh-dow"},["m","t","w","t","f","s","s"].map((u,p)=>a.default.createElement("span",{key:p},u))),a.default.createElement("div",{className:"qh-grid"},l.map((u,p)=>u.map((f,m)=>a.default.createElement("span",{key:`${p}-${m}`,className:`qh-cell ${f?"":"blank"} ${f&&f.state?f.state:""} ${f&&f.today?"today":""} ${f&&f.future?"future":""}`,title:f?`${f.d}: ${f.state||"nothing recorded"}`:""},f?f.day:"")))),a.default.createElement("div",{className:"qh-key"},a.default.createElement("span",null,a.default.createElement("i",{className:"qh-swatch done"})," completed"),a.default.createElement("span",null,a.default.createElement("i",{className:"qh-swatch slip"})," skipped"),a.default.createElement("span",null,a.default.createElement("i",{className:"qh-swatch"})," nothing")),a.default.createElement("div",{className:"qh-stats"},a.default.createElement("div",null,a.default.createElement("span",{className:"qh-stat-n"},c.monthDone),a.default.createElement("span",{className:"qh-stat-l"},"done this month")),a.default.createElement("div",null,a.default.createElement("span",{className:"qh-stat-n"},c.monthSlip),a.default.createElement("span",{className:"qh-stat-l"},"skipped")),a.default.createElement("div",null,a.default.createElement("span",{className:"qh-stat-n"},c.streak),a.default.createElement("span",{className:"qh-stat-l"},"streak now")),a.default.createElement("div",null,a.default.createElement("span",{className:"qh-stat-n"},c.best),a.default.createElement("span",{className:"qh-stat-l"},"best run"))),a.default.createElement("div",{className:"qh-all"},c.allDone," completed and ",c.allSlip," skipped all time")))}function tC({habit:t,tags:e=co,allHabits:n=[],onMark:r,onDelete:i,onSave:o,onHistory:s,reorder:l=!1,onMove:c,canUp:d=!1,canDown:u=!1,index:p=0,total:f=1}){let m=ne(0),h=bl(t,m),v=Mh(t,m),[x,y]=(0,a.useState)(0),g=()=>{h||y(V=>V+1)},b=Qh({onRight:()=>{g(),P.complete(),r(t.id,"done",!0)},onLeft:()=>{P.fail(),r(t.id,"slip",!0)}}),{streak:w,freezeUsed:k}=Vh(Kt(t.history).filter(V=>V.t==="done").map(V=>V.d)),E=er(t,e).map(V=>e.find(ae=>ae.key===V)).filter(Boolean),T=E[0]||e[0],[_,C]=(0,a.useState)(!1),I=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{I.current&&clearTimeout(I.current)},[]);let M=()=>{if(_){i(t.id);return}C(!0),P.click(),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{C(!1),I.current=null},4e3)},[O,$]=(0,a.useState)(!1),[D,U]=(0,a.useState)(t.label),[j,oe]=(0,a.useState)(()=>er(t,e)),[se,N]=(0,a.useState)(t.desc||""),[G,X]=(0,a.useState)(bi(t)),[ie,F]=(0,a.useState)(ro(t)),[ee,re]=(0,a.useState)(t.opposite||""),xe=()=>{U(t.label),oe(er(t,e)),N(t.desc||""),X(bi(t)),F(ro(t)),re(t.opposite||""),$(!0)},B=()=>{let V=D.trim();V&&(o(t.id,{label:V,tags:j,desc:se.trim().slice(0,90),xp:Math.max(0,+G||0),penalty:Math.max(0,+ie||0),opposite:ee||null}),$(!1))};if(O)return a.default.createElement("div",{className:"quest-habit-card good editing"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:D,onChange:V=>U(V.target.value),onKeyDown:V=>V.key==="Enter"&&B(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row edit-row-tags"},e.map(V=>{let ae=j.includes(V.key);return a.default.createElement("button",{key:V.key,type:"button",className:`area-chip ${ae?"active":""}`,style:{"--ac":V.color},onClick:()=>oe(ze=>ze.includes(V.key)?ze.length>1?ze.filter(Se=>Se!==V.key):ze:[...ze,V.key])},V.label)})),j.length>1&&a.default.createElement("div",{className:"edit-tag-note"},"counts in full toward ",j.length," tags \u2014 use sparingly"),a.default.createElement("input",{className:"edit-label edit-desc",placeholder:"what this actually means (optional)",value:se,maxLength:90,onChange:V=>N(V.target.value),onKeyDown:V=>V.key==="Enter"&&B()}),a.default.createElement("div",{className:"edit-row edit-xp-row"},a.default.createElement("label",{className:"edit-xp-field"},a.default.createElement("span",{className:"edit-xp-tag gain"},"\u2713 adds"),a.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-input",value:G,onChange:V=>X(V.target.value)})),a.default.createElement("label",{className:"edit-xp-field"},a.default.createElement("span",{className:"edit-xp-tag lose"},"\u2717 cuts"),a.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-input",value:ie,onChange:V=>F(V.target.value)}))),a.default.createElement("div",{className:"edit-row edit-opp-row"},a.default.createElement("span",{className:"edit-xp-tag"},"opposite of"),a.default.createElement("select",{className:"edit-opp-select",value:ee,onChange:V=>re(V.target.value)},a.default.createElement("option",{value:""},"\u2014 none \u2014"),n.filter(V=>V.id!==t.id).map(V=>a.default.createElement("option",{key:V.id,value:V.id},V.label)))),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>$(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:B},"save"))));if(l)return a.default.createElement("div",{className:"quest-habit-card good reordering"},a.default.createElement("span",{className:"area-dot",style:{background:T.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},t.label),a.default.createElement("span",{className:"quest-habit-meta"},T.label)),a.default.createElement("button",{className:"keypool-move",disabled:!d,onClick:()=>c(t.id,-1),"aria-label":"Move up"},"\u2191"),a.default.createElement("button",{className:"keypool-move",disabled:!u,onClick:()=>c(t.id,1),"aria-label":"Move down"},"\u2193"));let K=[];return bi(t)>0&&K.push(`+${bi(t)}`),ro(t)>0&&K.push(`\u2212${ro(t)}`),a.default.createElement("div",{className:"swipe-rail"},a.default.createElement("div",{className:`swipe-hint right ${b.dx>0?"show":""} ${b.armed==="right"?"armed":""}`},a.default.createElement("span",null,"\u2713 done")),a.default.createElement("div",{className:`swipe-hint left ${b.dx<0?"show":""} ${b.armed==="left"?"armed":""}`},a.default.createElement("span",null,"\u2717 failed")),a.default.createElement("div",{className:`quest-habit-card good edge ${x?"just-completed":""} ${v?"slipped":""}`,key:`h${t.id}`,style:{...gw(h?"done":v?"failed":null),transform:b.dx?`translateX(${b.dx}px)`:void 0,transition:b.dragging?"none":"transform 200ms cubic-bezier(.65,0,.35,1)"},...b.handlers},x>0&&a.default.createElement("span",{className:"xp-pop",key:x},"+",bi(t)),a.default.createElement("span",{className:"area-dot",style:{background:T.color}}),a.default.createElement("div",{className:"quest-habit-main"},a.default.createElement("span",{className:"quest-habit-label"},t.label),a.default.createElement("span",{className:"quest-habit-meta"},K.join(" / ")," XP",E.map(V=>a.default.createElement("span",{key:V.key,className:"quest-tag-pip",style:{color:V.color}}," \xB7 ",V.label)),w>0?` \xB7 \u{1F525}${w}${k?" \u2744\uFE0F":""}`:""),t.desc&&a.default.createElement("span",{className:"quest-habit-desc"},t.desc)),a.default.createElement("button",{className:"hist-btn",onClick:V=>{V.stopPropagation(),s&&s(t),P.click()},"aria-label":"Quest history",title:"calendar history"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("rect",{x:"3",y:"5",width:"18",height:"16",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M3 10h18M8 3v4M16 3v4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),a.default.createElement("rect",{x:"7",y:"13",width:"3",height:"3",fill:"currentColor"}),a.default.createElement("rect",{x:"14",y:"13",width:"3",height:"3",fill:"currentColor",opacity:"0.45"}))),a.default.createElement("button",{className:"link-btn",onClick:V=>{V.stopPropagation(),Wh.open(Cs("good",t.id)),P.click()},"aria-label":"Links",title:"Link to other items"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},a.default.createElement("path",{d:"M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}),a.default.createElement("path",{d:"M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:`quest-slip ${v?"on":""}`,onClick:()=>r(t.id,"slip"),"aria-label":"Mark slipped today",title:"did the opposite"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"}))),a.default.createElement("button",{className:`quest-check ${h?"done":""}`,onClick:()=>{g(),r(t.id,"done")},"aria-label":"Mark done today"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("polyline",{points:"4,13 9,18 20,6",fill:"none",stroke:"#0B0D10",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:24,strokeDashoffset:h?0:24,transition:"stroke-dashoffset 220ms ease"}}))),a.default.createElement("button",{className:"vault-card-edit",onClick:xe,"aria-label":"Edit habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),_?a.default.createElement("button",{className:"del-btn armed",onClick:M,"aria-label":"Confirm delete habit"},"sure?"):a.default.createElement("button",{className:"del-btn",onClick:M,"aria-label":"Delete habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))}function nC({reward:t,canClaim:e,onClaim:n,onDelete:r,onSave:i}){let[o,s]=(0,a.useState)(!1),[l,c]=(0,a.useState)(t.label),[d,u]=(0,a.useState)(t.cost),p=()=>{c(t.label),u(t.cost),s(!0)},f=()=>{let m=l.trim();m&&(i(t.id,{label:m,cost:Math.max(1,+d||t.cost)}),s(!1))};return o?a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"routine-edit"},a.default.createElement("input",{className:"edit-label",value:l,onChange:m=>c(m.target.value),onKeyDown:m=>m.key==="Enter"&&f(),autoFocus:!0}),a.default.createElement("div",{className:"edit-row"},a.default.createElement("input",{type:"number",min:"1",step:"10",className:"duration-input",value:d,onChange:m=>u(m.target.value)}),a.default.createElement("span",{className:"edit-unit"},"XP cost")),a.default.createElement("div",{className:"edit-actions"},a.default.createElement("button",{className:"edit-cancel",onClick:()=>s(!1)},"cancel"),a.default.createElement("button",{className:"edit-save",onClick:f},"save")))):a.default.createElement("div",{className:"reward-card"},a.default.createElement("div",{className:"reward-top"},a.default.createElement("span",{className:"reward-label"},t.label),a.default.createElement("div",{className:"project-card-actions"},a.default.createElement("button",{className:"vault-card-edit",onClick:p,"aria-label":"Edit reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"vault-card-del",onClick:()=>r(t.id),"aria-label":"Delete reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))))),a.default.createElement("span",{className:"reward-cost"},t.cost," \u25C9"),a.default.createElement("button",{className:"reward-claim",disabled:!e,onClick:()=>n(t.id)},e?"claim reward":"not enough coins"),t.claimed?.length>0&&a.default.createElement("span",{className:"reward-claimed-count"},"claimed ",t.claimed.length,"x"))}function rC({axis:t,habits:e,onClose:n}){let r=(0,a.useMemo)(()=>LT(e,t.pick,t.daily),[e,t]),i=r.raw<0;return a.default.createElement("div",{className:"axis-pop",role:"dialog","aria-label":`${t.label} points`},a.default.createElement("div",{className:"axis-pop-head"},a.default.createElement("span",{className:"axis-pop-dot",style:{background:t.color||"var(--accent)"}}),a.default.createElement("span",{className:"axis-pop-name"},t.label),a.default.createElement("button",{className:"axis-pop-close",onClick:n,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"axis-pop-value"},a.default.createElement("span",{className:"axis-pop-xp"},r.value),a.default.createElement("span",{className:"axis-pop-unit"},"XP"),i&&a.default.createElement("span",{className:"axis-pop-raw"},"held at zero \xB7 true balance ",r.raw)),a.default.createElement("div",{className:"axis-pop-split"},a.default.createElement("span",{className:"axis-pop-gain"},"+",r.gained),a.default.createElement("span",{className:"axis-pop-sep"},"/"),a.default.createElement("span",{className:"axis-pop-lose"},"\u2212",r.lost),a.default.createElement("span",{className:"axis-pop-meta"},r.done," done \xB7 ",r.slipped," slipped \xB7 ",r.count," item",r.count===1?"":"s")),r.dailyCount>0&&a.default.createElement("div",{className:"axis-pop-daily"},r.dailyXP," of that is daily tasks (",r.dailyCount," tagged here)"),r.rows.length===0?a.default.createElement("div",{className:"axis-pop-empty"},"nothing tagged here yet"):a.default.createElement("div",{className:"axis-pop-rows"},r.rows.slice(0,6).map(o=>a.default.createElement("div",{key:o.id,className:"axis-pop-row"},a.default.createElement("span",{className:"axis-pop-row-label"},o.daily&&a.default.createElement("span",{className:"axis-pop-daily-mark"},"\u25C9"),o.label),a.default.createElement("span",{className:`axis-pop-row-net ${o.net<0?"neg":o.net>0?"pos":""}`},o.net>0?`+${o.net}`:o.net))),r.rows.length>6&&a.default.createElement("div",{className:"axis-pop-more"},"+",r.rows.length-6," more")))}function iC({habits:t,setHabits:e,rewards:n,setRewards:r,tagCtl:i,coins:o=0,spend:s,inventory:l=[],setInventory:c}){let d=i.tags,[u,p]=(0,a.useState)("all"),[f,m]=(0,a.useState)(!1),[h,v]=(0,a.useState)(null),[x,y]=(0,a.useState)(null),g=(0,a.useMemo)(()=>vw(t,l),[t,l]),{level:b,into:w,span:k}=ww(g),S=Math.round(w/k*100),E=(z,Y,ge=!1)=>{let Ee=ne(0),et=t.find(Dn=>Dn.id===z);if(!et)return;let kt=!(Y==="done"?bl(et,Ee):Mh(et,Ee)),Fr=et.opposite?String(et.opposite):null;if(e(Dn=>Dn.map(zn=>{if(zn.id===z)return px(zn,Ee,Y);if(kt&&Fr&&String(zn.id)===Fr){let Pt=Y==="done"?"slip":"done";return(Pt==="done"?bl(zn,Ee):Mh(zn,Ee))?zn:px(zn,Ee,Pt)}return zn})),Y==="done"&&ku.propagate("good",z,kt),!kt){P.click();return}if(Y==="done"){ge||P.success(),Or.emit("habitDone");let Dn=Bs().hour;Dn<6&&hl({earlyFinish:!0}),Dn>=0&&Dn<4&&hl({lateFinish:!0})}else ge||P.error(),Or.emit("badHabit")},[T,_]=(0,a.useState)(!1),C=(z,Y)=>{e(ge=>{let Ee=ge.findIndex(Fr=>Fr.id===z);if(Ee<0)return ge;let et=Fr=>u==="all"||er(Fr,d).includes(u),yn=Ee+Y;for(;yn>=0&&yn<ge.length&&!et(ge[yn]);)yn+=Y;if(yn<0||yn>=ge.length)return ge;let kt=[...ge];return[kt[Ee],kt[yn]]=[kt[yn],kt[Ee]],kt}),P.click()},I=z=>{e(Y=>Y.filter(ge=>ge.id!==z)),P.delete()},M=(z,Y)=>e(ge=>ge.map(Ee=>Ee.id===z?{...Ee,...Y}:Ee)),O=z=>{let Y=n.find(Ee=>Ee.id===z);if(!Y||o<Y.cost){P.error();return}let ge=ne(0);s&&s(Y.cost),r(Ee=>Ee.map(et=>et.id===z?{...et,claimed:[...et.claimed||[],ge]}:et)),P.success(),Or.emit("rewardClaimed")},$=z=>{r(Y=>Y.filter(ge=>ge.id!==z)),P.delete()},D=(z,Y)=>r(ge=>ge.map(Ee=>Ee.id===z?{...Ee,...Y}:Ee)),[U,j]=(0,a.useState)(""),[oe,se]=(0,a.useState)(()=>d[0]?d[0].key:"work"),[N,G]=(0,a.useState)(20),[X,ie]=(0,a.useState)(0),[F,ee]=(0,a.useState)(""),[re,xe]=(0,a.useState)(100),B=()=>{let z=U.trim();z&&(e(Y=>[...Y,{id:Ne(),label:z,tags:[oe],xp:Math.max(0,+N||0),penalty:Math.max(0,+X||0),history:[]}]),j(""),P.click())},K=()=>{let z=F.trim();z&&(r(Y=>[...Y,{id:Ne(),label:z,cost:+re||50,claimed:[]}]),ee(""),P.click())},V=(0,a.useMemo)(()=>d.map(z=>({key:z.key,label:z.label,color:z.color,value:UT(z.key,t,d,l),raw:hw(z.key,t,d,l),pick:Y=>er(Y,d).includes(z.key),daily:(l||[]).filter(Y=>fn(Y,d).includes(z.key))})),[d,t,l]),ae=(0,a.useMemo)(()=>{let z=Math.max(...V.map(ge=>ge.value),1),Y=z<=100?25:z<=500?50:100;return Math.ceil(z/Y)*Y},[V]),ze=(0,a.useMemo)(()=>t.filter(z=>er(z,d).length>1).length+(l||[]).filter(z=>fn(z,d).length>1).length,[t,l,d]),Se=(0,a.useMemo)(()=>(l||[]).filter(z=>fn(z,d).length===0).length,[l,d]),ft=u==="all"?t:t.filter(z=>er(z,d).includes(u)),Nt=t.reduce((z,Y)=>z+bi(Y)*Ds(Y,"done"),0)+yw(l),gn=t.reduce((z,Y)=>z+ro(Y)*Ds(Y,"slip"),0),fo=n.reduce((z,Y)=>z+Y.cost*(Y.claimed?.length||0),0);return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"hero-card hero-card-viz"},a.default.createElement("div",{className:"hero-viz-row"},a.default.createElement(xT,{pct:S,size:112,stroke:9,color:"#5EEAD4",label:`LVL ${b}`,sublabel:kw(b)}),a.default.createElement("div",{className:"hero-viz-stats"},a.default.createElement("span",{className:"hero-xp-total"},a.default.createElement(_r,{value:g})," ",a.default.createElement("small",null,"XP")),a.default.createElement("span",{className:"hero-xp-spend"},"\u25C9 ",o," to spend"),a.default.createElement("span",{className:"hero-xp-sub"},w,"/",k," to next level"),a.default.createElement("div",{className:"hero-xp-split"},a.default.createElement("span",{className:"hero-xp-earned"},"+",a.default.createElement(_r,{value:Nt})),a.default.createElement("span",{className:"hero-xp-lost"},"\u2212",a.default.createElement(_r,{value:gn})))))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"TAGS")),a.default.createElement("div",{className:"radar-card"},a.default.createElement("div",{className:"radar-controls"},a.default.createElement("div",{className:"radar-mode"},a.default.createElement("span",{className:"radar-count"},d.length," tag",d.length===1?"":"s")),a.default.createElement("button",{className:"radar-edit",onClick:()=>m(!0)},"edit tags")),a.default.createElement(bT,{axes:V,size:252,maxValue:ae,picked:h,onPick:z=>{v(h===z.key?null:z.key),P.click()}}),h&&V.some(z=>z.key===h)&&a.default.createElement(rC,{axis:V.find(z=>z.key===h),habits:t,onClose:()=>{v(null),P.whoosh()}}),!h&&a.default.createElement("div",{className:"radar-hint"},"tap a dot for its exact points"),ze>0&&a.default.createElement("div",{className:"radar-note"},ze," thing",ze===1?" counts":"s count"," toward more than one tag, in full. The axes add up to more than your XP on purpose \u2014 your level still counts each one once."),Se>0&&a.default.createElement("div",{className:"radar-note"},Se," daily task",Se===1?" has":"s have"," no tag \u2014 ",Se===1?"it pays":"they pay"," coins and level but ",Se===1?"lands":"land"," on no axis. Tag ",Se===1?"it":"them"," on the TASKS tab.")),(Nt>0||gn>0)&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"XP SOURCE")),a.default.createElement("div",{className:"donut-card"},a.default.createElement(Nh,{size:120,stroke:16,centerLabel:g,centerSublabel:"net XP",segments:[{key:"earned",label:"Earned",value:Nt,color:"#5EEAD4"},{key:"lost",label:"Lost",value:gn,color:"#F0576B"}]}),a.default.createElement("div",{className:"donut-legend"},a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#5EEAD4"}}),a.default.createElement("span",null,"Earned from good habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(_r,{value:Nt}))),a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F0576B"}}),a.default.createElement("span",null,"Lost to bad habits"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(_r,{value:gn}))),a.default.createElement("div",{className:"donut-legend-row"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"#F5A623"}}),a.default.createElement("span",null,"Coins spent on rewards"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(_r,{value:fo}))),a.default.createElement("div",{className:"donut-legend-row donut-legend-total"},a.default.createElement("span",{className:"donut-legend-dot",style:{background:"transparent"}}),a.default.createElement("span",null,"Level progress (spending doesn't count)"),a.default.createElement("span",{className:"donut-legend-val"},a.default.createElement(_r,{value:g})))))),a.default.createElement("div",{className:"area-filter"},a.default.createElement("button",{className:u==="all"?"active":"",onClick:()=>p("all")},"all"),d.map(z=>a.default.createElement("button",{key:z.key,className:u===z.key?"active":"",style:{"--ac":z.color},onClick:()=>{p(z.key),P.click()}},z.label))),f&&a.default.createElement(mC,{tagCtl:i,usage:Object.fromEntries(d.map(z=>[z.key,t.filter(Y=>er(Y,d).includes(z.key)).length+(l||[]).filter(Y=>fn(Y,d).includes(z.key)).length])),onDropTag:z=>{e(Y=>Y.map(ge=>{let Ee=er(ge,d).filter(et=>et!==z);return{...ge,tags:Ee.length?Ee:[d.find(et=>et.key!==z)?.key].filter(Boolean)}})),c&&c(Y=>Y.map(ge=>fn(ge,d).includes(z)?{...ge,tags:fn(ge,d).filter(Ee=>Ee!==z)}:ge))},onClose:()=>m(!1)}),x&&a.default.createElement(eC,{habit:t.find(z=>z.id===x.id)||x,onClose:()=>{y(null),P.whoosh()}}),a.default.createElement("div",{className:"section-header habits-header"},a.default.createElement("span",null,"HABITS"),a.default.createElement("button",{className:`radar-edit ${T?"on":""}`,onClick:()=>{_(z=>!z),P.click()}},T?"done":"reorder")),a.default.createElement("div",{className:"quest-habit-list"},t.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no habits yet")):ft.map((z,Y)=>a.default.createElement(tC,{key:z.id,habit:z,allHabits:t,tags:d,onMark:E,onHistory:ge=>y(ge),onDelete:I,onSave:M,reorder:T,onMove:C,canUp:Y>0,canDown:Y<ft.length-1,index:Y,total:ft.length}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new habit...",value:U,onChange:z=>j(z.target.value),onKeyDown:z=>z.key==="Enter"&&B()}),a.default.createElement("button",{className:"add-btn",onClick:B,"aria-label":"Add habit"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},d.map(z=>a.default.createElement("button",{key:z.key,className:oe===z.key?"active":"",style:{"--ac":z.color},onClick:()=>se(z.key)},z.label)),a.default.createElement("label",{className:"new-xp-field"},a.default.createElement("span",{className:"edit-xp-tag gain"},"\u2713"),a.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-custom",value:N,onChange:z=>G(+z.target.value||0)})),a.default.createElement("label",{className:"new-xp-field"},a.default.createElement("span",{className:"edit-xp-tag lose"},"\u2717"),a.default.createElement("input",{type:"number",min:"0",step:"5",className:"duration-custom",value:X,onChange:z=>ie(+z.target.value||0)}))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"REWARD-CENTER")),a.default.createElement("div",{className:"vault-grid"},n.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no rewards set up")):n.map(z=>a.default.createElement(nC,{key:z.id,reward:z,canClaim:o>=z.cost,onClaim:O,onDelete:$,onSave:D}))),a.default.createElement("div",{className:"composer"},a.default.createElement("input",{type:"text",placeholder:"new reward...",value:F,onChange:z=>ee(z.target.value),onKeyDown:z=>z.key==="Enter"&&K()}),a.default.createElement("input",{type:"number",min:"10",step:"10",className:"duration-custom",value:re,onChange:z=>xe(+z.target.value||50)}),a.default.createElement("button",{className:"add-btn",onClick:K,"aria-label":"Add reward"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))))}var mx="tasksh.inventory.v1",hx="tasksh.daily.v1",Nr=[{key:"easy",label:"easy",coins:xi.easy,color:"#7EE787"},{key:"mid",label:"mid",coins:xi.mid,color:"#F5A623"},{key:"hard",label:"hard",coins:xi.hard,color:"#F0576B"}],Yd=t=>Nr.find(e=>e.key===t)||Nr[0],oC=[["body",/push\s?up|pushup|press\s?up|squat|punch|kick|\blaps?\b|\brun\b|running|jog|sprint|\bhangs?\b|pull\s?up|plank|workout|work out|\bgym\b|karate|spar|crunch|burpee|\babs\b|dumbbell|lift/i],["health",/water|hydrat|sleep|slept|bed\s?time|eat\b|meal|diet|fruit|veg|junk|walk|stretch|meditat|breath|yoga|bath|shower|brush|floss|nap\b|sun\b|sunlight/i],["work",/stud(y|ied)|revis|chapter|read|homework|assignment|exam|test\b|notes?\b|project|code|build|ship|write|essay|upload|learn|practice|practise|skill/i],["self",/draw|sketch|paint|art\b|music|guitar|sing|journal|gratitude|pray|temple|plant|garden|happy|rest\b|hobby|create|creative|new thing|something new/i],["discipline",/\bno\b|\bnot\b|skip|avoid|quit|limit|less than|under \d|screen|scroll|phone|lock in|wake|early|clean|tidy|save|budget|streak|follow (the|something)/i]];function su(t,e){let n=new Set((e||[]).map(o=>o.key)),r=String(t||""),i=[];for(let[o,s]of oC){if(i.length>=2)break;n.has(o)&&s.test(r)&&i.push(o)}return i}function gx(t,e){return Array.isArray(t)?t.map(n=>{if(!n||typeof n!="object")return n;let r=Array.isArray(n.tags);return{...n,tags:r?n.tags:su(n.text,e),history:Array.isArray(n.history)?n.history:[]}}):t}function sC(t,e){let n=(t||[]).map(i=>typeof i.time=="string"&&/^\d{2}:\d{2}$/.test(i.time)?Number(i.time.slice(0,2))*60+Number(i.time.slice(3,5)):null).filter(i=>i!==null),r=n.length?Math.min(...n):0;return e<r?ne(-1):ne(0)}function Aw(t,e){let n={};for(let r of Nr){let i=(t||[]).filter(o=>o.diff===r.key);n[r.key]=i.length?i[Math.floor(Math.random()*i.length)].id:null}return{day:e,picks:n,done:[]}}function aC(t){let e={high:"hard",mid:"mid",low:"easy"};return(Array.isArray(t)?t:[]).map(n=>({id:n.id,text:n.text,diff:e[n.priority]||"mid",tags:[],history:[]}))}var lC=[{id:9001,text:"100 pushups",diff:"hard",tags:["body"],history:[]},{id:9002,text:"Read 20 pages",diff:"mid",tags:["work"],history:[]},{id:9003,text:"Water the plants",diff:"easy",tags:["self"],history:[]}],cC=[{id:1,text:"ship rice theme v2 captions",done:!1,priority:"high",createdAt:Date.now()-8e6},{id:2,text:"review conky widget layout",done:!1,priority:"mid",createdAt:Date.now()-5e6},{id:3,text:"reply to anilist thread",done:!0,priority:"low",createdAt:Date.now()-3e6}];function dC(t=1e3*30){let[e,n]=(0,a.useState)(Date.now());return(0,a.useEffect)(()=>{let r=setInterval(()=>n(Date.now()),t);return()=>clearInterval(r)},[t]),e}function yx({tags:t,picked:e,onToggle:n,onSuggest:r}){return a.default.createElement("div",{className:"duration-chips inv-tag-chips"},t.map(i=>{let o=e.includes(i.key);return a.default.createElement("button",{key:i.key,className:o?"active":"",style:{"--ac":i.color},onClick:()=>n(i.key),"aria-pressed":o},o?"\u2713 ":"",i.label)}),r&&a.default.createElement("button",{className:"inv-suggest",onClick:r,title:"guess from the words"},"suggest"))}function uC({inventory:t,setInventory:e,daily:n,setDaily:r,routines:i,onReward:o,onComplete:s,coins:l=0,tags:c=co}){let[d,u]=(0,a.useState)(""),[p,f]=(0,a.useState)("mid"),[m,h]=(0,a.useState)([]),[v,x]=Au(),[y,g]=(0,a.useState)(null),[b,w]=(0,a.useState)(null),[k,S]=(0,a.useState)(""),[E,T]=(0,a.useState)("mid"),[_,C]=(0,a.useState)([]),I=(0,a.useRef)(null),M=B=>c.find(K=>K.key===B)||null,O=(B,K)=>B.includes(K)?B.filter(V=>V!==K):B.length>=2?B:[...B,K];(0,a.useEffect)(()=>()=>{I.current&&clearTimeout(I.current)},[]);let $=(B,K)=>{r(V=>{let ae={...V.picks||{}};if(ae[K]!==B)return V;let ze=V.done||[],Se=Object.values(ae),ft=t.filter(Nt=>Nt.id!==B&&Nt.diff===K&&!Se.includes(Nt.id)&&!ze.includes(Nt.id));return ft.length?ae[K]=ft[Math.floor(Math.random()*ft.length)].id:delete ae[K],{...V,picks:ae}})},D=B=>Object.keys(n.picks||{}).find(K=>n.picks[K]===B)||null,U=B=>{g(null),w(B.id),S(B.text),T(B.diff),C(fn(B,c)),P.click()},j=()=>{w(null),P.whoosh()},oe=B=>{let K=k.trim();if(!K){x(),P.error();return}if(E!==B.diff){let V=D(B.id);V&&$(B.id,V)}e(V=>V.map(ae=>ae.id===B.id?{...ae,text:K,diff:E,tags:_}:ae)),w(null),P.success()},se=()=>{let B=d.trim();if(!B){x(),P.error();return}let K=m.length?m:su(B,c);e(V=>[...V,{id:Ne(),text:B,diff:p,tags:K,history:[]}]),u(""),h([]),P.click()},N=B=>{if(y!==B){g(B),P.click(),I.current&&clearTimeout(I.current),I.current=setTimeout(()=>{g(null),I.current=null},4e3);return}let K=D(B);K&&$(B,K),e(V=>V.filter(ae=>ae.id!==B)),g(null),P.delete()},G=(B,K)=>s(B,K),X=n.day||"none",ie=(n.rerolledOn||null)===X,F=()=>{if(ie){P.error();return}r({...Aw(t,n.day),rerolledOn:X}),P.click()},ee=B=>t.find(K=>K.id===B)||null,re=Nr.filter(B=>{let K=n.picks?.[B.key];return K&&(n.done||[]).includes(K)}).length,xe=Nr.filter(B=>ee(n.picks?.[B.key])).length;return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"section-header habits-header"},a.default.createElement("span",null,"TODAY'S QUESTS"),a.default.createElement("span",{className:"keypool-hint"},re,"/",xe," done \xB7 ",a.default.createElement("span",{className:"coin-total"},a.default.createElement(_r,{value:l})," \u25C9"))),xe===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing in the inventory yet \u2014 add some below")):a.default.createElement("div",{className:"daily-grid"},Nr.map(B=>{let K=ee(n.picks?.[B.key]);if(!K)return null;let V=(n.done||[]).includes(K.id);return a.default.createElement("button",{key:B.key,className:`daily-card ${V?"done":""}`,style:{"--dc":B.color},onClick:()=>G(K.id,B.coins),disabled:V},a.default.createElement("span",{className:"daily-diff"},B.label),a.default.createElement("span",{className:"daily-text"},K.text),a.default.createElement("span",{className:"daily-coins"},V?"\u2713 claimed":`+${B.coins} \u25C9`),a.default.createElement("span",{className:"daily-tags"},fn(K,c).length===0?a.default.createElement("span",{className:"daily-tag none"},"untagged"):fn(K,c).map(ae=>{let ze=M(ae);return a.default.createElement("span",{key:ae,className:"daily-tag",style:{"--tc":ze.color}},V?"\u2713":"+",B.coins," ",ze.label)})))})),a.default.createElement("div",{className:"daily-note"},"new draw when your first routine starts",i?.length?` (${[...i].map(B=>B.time).sort()[0]})`:"",a.default.createElement("button",{className:"note-btn",onClick:F,disabled:ie},ie?"rerolled today":"reroll")),a.default.createElement("div",{className:"section-header habits-header"},a.default.createElement("span",null,"INVENTORY"),a.default.createElement("span",{className:"keypool-hint"},t.length," item",t.length===1?"":"s"," \xB7 ",yw(t)," pts earned")),a.default.createElement("div",{className:`composer ${v?"shake":""}`},a.default.createElement("input",{type:"text",placeholder:"something you might do...",value:d,onChange:B=>u(B.target.value),onKeyDown:B=>B.key==="Enter"&&se()}),a.default.createElement("button",{className:"add-btn",onClick:se,"aria-label":"Add to inventory"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"16",height:"16"},a.default.createElement("path",{d:"M12 5v14M5 12h14",stroke:"currentColor",strokeWidth:"2.4",strokeLinecap:"round"})))),a.default.createElement("div",{className:"duration-chips"},Nr.map(B=>a.default.createElement("button",{key:B.key,className:p===B.key?"active":"",style:{"--ac":B.color},onClick:()=>f(B.key)},B.label," \xB7 ",B.coins,"\u25C9"))),a.default.createElement(yx,{tags:c,picked:m,onToggle:B=>{h(K=>O(K,B)),P.click()},onSuggest:d.trim()?()=>{h(su(d,c)),P.click()}:null}),a.default.createElement("div",{className:"inv-tag-note"},m.length===0?`no tag \u2014 coins and level only \xB7 ${Yd(p).coins} pts go nowhere on the radar`:`+${Yd(p).coins} \u25C9 and +${Yd(p).coins} to ${m.map(B=>(M(B)||{}).label).join(" and ")}`),a.default.createElement("div",{className:"quest-habit-list"},t.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"inventory is empty")):t.map(B=>{let K=Yd(B.diff),V=Object.values(n.picks||{}).includes(B.id),ae=fn(B,c),ze=fu(B);return a.default.createElement("div",{className:`quest-habit-card good ${V?"drawn":""}`,key:B.id},b===B.id?a.default.createElement("div",{className:"inv-edit"},a.default.createElement("input",{className:"inv-edit-input",value:k,onChange:Se=>S(Se.target.value),onKeyDown:Se=>{Se.key==="Enter"&&oe(B),Se.key==="Escape"&&j()},"aria-label":"Edit inventory item",autoFocus:!0}),a.default.createElement("div",{className:"duration-chips inv-edit-chips"},Nr.map(Se=>a.default.createElement("button",{key:Se.key,className:E===Se.key?"active":"",style:{"--ac":Se.color},onClick:()=>{T(Se.key),P.click()}},Se.label," \xB7 ",Se.coins,"\u25C9"))),a.default.createElement(yx,{tags:c,picked:_,onToggle:Se=>{C(ft=>O(ft,Se)),P.click()},onSuggest:()=>{C(su(k,c)),P.click()}}),a.default.createElement("div",{className:"inv-edit-actions"},a.default.createElement("button",{className:"note-btn save",onClick:()=>oe(B)},"save"),a.default.createElement("button",{className:"note-btn",onClick:j},"cancel"))):a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"area-dot",style:{background:K.color}}),a.default.createElement("button",{className:"quest-habit-main inv-tap",onClick:()=>U(B)},a.default.createElement("span",{className:"quest-habit-label"},B.text,ae.map(Se=>{let ft=M(Se);return a.default.createElement("span",{key:Se,className:"inv-tag-dot",style:{background:ft.color},title:ft.label})})),a.default.createElement("span",{className:"quest-habit-meta"},K.label," \xB7 +",K.coins," \u25C9",ae.length?` \u2192 ${ae.map(Se=>(M(Se)||{}).label).join(" + ")}`:" \xB7 untagged",ze?` \xB7 ${ze}\xD7 = ${Ns(B)} pts`:"",V?" \xB7 drawn":"")),y===B.id?a.default.createElement("button",{className:"del-btn armed",onClick:()=>N(B.id)},"sure?"):a.default.createElement("button",{className:"del-btn",onClick:()=>N(B.id),"aria-label":"Remove from inventory"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))})))}var ph="tasksh.tasks.v1",vx="tasksh.routines.v1",bx="tasksh.vaulthabits.v1",xx="tasksh.projects.v1",pC="tasksh.goodhabits.v1",fC="tasksh.badhabits.v1",wx="tasksh.habits.v1",kx="tasksh.rewards.v1",zs="tasksh.deviceid.v1",fh="tasksh.notifyenabled.v1",mu="tasksh.aikey.v1";function mC({tagCtl:t,onClose:e,onDropTag:n,usage:r}){let[i,o]=(0,a.useState)(!1),[s,l]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),u=t.tags,p=u.length>=pu,f=()=>{s.trim()&&(t.addTag(s),P.success()),l(""),o(!1)};return a.default.createElement("div",{className:"sheet-backdrop",onClick:e},a.default.createElement("div",{className:"sheet",onClick:m=>m.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},"tags"),a.default.createElement("button",{className:"sheet-close",onClick:e,"aria-label":"Close"},"\xD7")),u.map(m=>{let h=r&&r[m.key]||0;return a.default.createElement("div",{key:m.key,className:"tag-row"},a.default.createElement("button",{className:"tag-dot swatch",style:{background:m.color},title:"change colour",onClick:()=>{let v=io.indexOf(m.color);t.recolourTag(m.key,io[(v+1)%io.length]),P.click()}}),a.default.createElement("input",{className:"tag-input",defaultValue:m.label,maxLength:14,onBlur:v=>t.renameTag(m.key,v.target.value),onKeyDown:v=>{v.key==="Enter"&&v.target.blur()}}),a.default.createElement("span",{className:"tag-use"},h),c===m.key?a.default.createElement("button",{className:"tag-del armed",onClick:()=>{t.removeTag(m.key,n),d(null),P.delete()}},"sure?"):a.default.createElement("button",{className:"tag-del",disabled:u.length<=1,title:u.length<=1?"you need at least one tag":"remove",onClick:()=>{d(m.key),P.click()}},"\xD7"))}),i?a.default.createElement("div",{className:"tag-row"},a.default.createElement("input",{className:"tag-input",autoFocus:!0,placeholder:"new tag\u2026",maxLength:14,value:s,onChange:m=>l(m.target.value),onBlur:f,onKeyDown:m=>{m.key==="Enter"&&f(),m.key==="Escape"&&(l(""),o(!1))}})):a.default.createElement("button",{className:"tag-add",disabled:p,onClick:()=>{l(""),o(!0)}},p?`${pu} is the most the radar can read`:"+ add tag"),a.default.createElement("div",{className:"sheet-foot"},"the number is how many quests wear it. renaming keeps them; deleting takes the tag off them.",a.default.createElement("button",{className:"tag-reset",onClick:()=>{t.resetTags(),P.click()}},"reset to defaults"))))}function hC({selfRef:t,data:e,links:n,setLinks:r,onClose:i}){let[o,s]=(0,a.useState)(!1),l=tx(t,e),c=ow(n,t),d=(0,a.useMemo)(()=>[...e.routines.map(p=>({ref:Cs("routine",p.id),label:p.label,kind:"routine"})),...(e.habits||[]).map(p=>({ref:Cs("good",p.id),label:p.label,kind:"good"})),...e.vaultHabits.map(p=>({ref:Cs("vault",p.id),label:p.label,kind:"vault"}))].filter(p=>p.ref!==t&&!c.includes(p.ref)),[e,t,c]);return a.default.createElement("div",{className:"sheet-backdrop",onClick:i},a.default.createElement("div",{className:"sheet",onClick:u=>u.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},"links \xB7 ",l?.label||"item"),a.default.createElement("button",{className:"sheet-close",onClick:i,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"link-intro"},"ticking any of these completes all of them, both ways."),c.length===0?a.default.createElement("div",{className:"link-empty"},"not linked to anything yet"):a.default.createElement("div",{className:"link-list"},c.map(u=>{let p=tx(u,e);return a.default.createElement("div",{key:u,className:`link-row ${p?"":"stale"}`},a.default.createElement("span",{className:"link-kind"},p?p.meta:"missing"),a.default.createElement("span",{className:"link-label"},p?p.label:"deleted item"),a.default.createElement("button",{className:"link-remove",onClick:()=>{r(f=>JE(f,t,u)),P.delete()}},"unlink"))})),o?a.default.createElement("div",{className:"link-picker"},d.length===0?a.default.createElement("div",{className:"link-empty"},"nothing else to link to"):d.map(u=>a.default.createElement("button",{key:u.ref,className:"link-candidate",onClick:()=>{r(p=>YE(p,t,u.ref)),s(!1),P.success()}},a.default.createElement("span",{className:"link-kind"},rw[u.kind].label),a.default.createElement("span",{className:"link-label"},u.label),a.default.createElement("span",{className:"link-plus"},"+")))):a.default.createElement("button",{className:"link-add-btn",onClick:()=>s(!0)},"+ link to something")))}function gC({id:t,onDone:e}){let n=sw(t);return(0,a.useEffect)(()=>{let r=setTimeout(e,4200);return()=>clearTimeout(r)},[t,e]),n?a.default.createElement("div",{className:"ach-toast"},a.default.createElement("span",{className:"ach-toast-icon"},n.icon),a.default.createElement("span",{className:"ach-toast-body"},a.default.createElement("span",{className:"ach-toast-kicker"},"achievement"),a.default.createElement("span",{className:"ach-toast-name"},n.name),a.default.createElement("span",{className:"ach-toast-desc"},n.desc)),a.default.createElement("span",{className:"ach-toast-coins"},"+",n.coins),a.default.createElement("button",{className:"ach-toast-x",onClick:e,"aria-label":"Dismiss"},"\xD7")):null}function yC({level:t,coins:e,unlockedTheme:n,extraThemes:r=0,evolvedTo:i,onDone:o}){let s=so.find(c=>c.unlockLevel>t),l=Eh(t);return a.default.createElement("div",{className:"lvl-backdrop",onClick:o},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"lvl-card",onClick:c=>c.stopPropagation()},a.default.createElement("div",{className:"lvl-kicker"},"level up"),a.default.createElement("div",{className:"lvl-num"},t),a.default.createElement("div",{className:"lvl-title"},kw(t)),a.default.createElement("div",{className:"lvl-rewards"},a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon"},"\u25C9"),a.default.createElement("span",{className:"lvl-reward-text"},"+",e," coins")),n&&a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon",style:{color:n.colors.accent}},"\u25D0"),a.default.createElement("span",{className:"lvl-reward-text"},"theme unlocked \xB7 ",a.default.createElement("b",null,n.name),r>0?` +${r} more`:"")),i!=null&&a.default.createElement("div",{className:"lvl-reward"},a.default.createElement("span",{className:"lvl-reward-icon"},"\u2727"),a.default.createElement("span",{className:"lvl-reward-text"},"your pet is evolving\u2026"))),a.default.createElement("div",{className:"lvl-next"},s?`next theme at level ${s.unlockLevel}`:"all themes unlocked",l?` \xB7 next form at ${l.minLevel}`:""),a.default.createElement("button",{className:"evo-btn",onClick:o},"continue")))}function vC({earned:t,coins:e}){let n=new Set(t),r=gl.filter(o=>!o.hidden||n.has(o.id)),i=gl.filter(o=>o.hidden&&!n.has(o.id)).length;return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"ach-head"},a.default.createElement("span",{className:"sheet-title"},"achievements"),a.default.createElement("span",{className:"ach-count"},n.size,"/",gl.length," \xB7 \u25C9 ",e)),a.default.createElement("div",{className:"ach-grid"},r.map(o=>{let s=n.has(o.id);return a.default.createElement("div",{key:o.id,className:`ach-card ${s?"got":""}`},a.default.createElement("span",{className:"ach-icon"},s?o.icon:"\xB7"),a.default.createElement("span",{className:"ach-name"},o.name),a.default.createElement("span",{className:"ach-desc"},o.desc),a.default.createElement("span",{className:"ach-coins"},"\u25C9 ",o.coins))})),i>0&&a.default.createElement("div",{className:"ach-hidden-note"},i," hidden achievement",i===1?"":"s"," left to discover"))}function bC({ctl:t,level:e,totalXP:n,earned:r=[],coins:i=0,onClose:o}){let s=Ir(e+1),l=Ir(e);return a.default.createElement("div",{className:"sheet-backdrop",onClick:o},a.default.createElement("div",{className:"sheet",onClick:c=>c.stopPropagation()},a.default.createElement("div",{className:"sheet-head"},a.default.createElement("span",{className:"sheet-title"},"themes"),a.default.createElement("button",{className:"sheet-close",onClick:o,"aria-label":"Close"},"\xD7")),a.default.createElement("div",{className:"theme-grid"},t.themes.map(c=>{let d=Ch(c,e),u=t.themeId===c.id,p=Ir(c.unlockLevel),f=Ir(Math.max(1,c.unlockLevel-1)),m=d?100:Math.max(0,Math.min(99,Math.round((n-f)/(p-f)*100)));return a.default.createElement("button",{key:c.id,className:`theme-card ${u?"active":""} ${d?"":"locked"}`,onClick:()=>{d?(t.setThemeId(c.id),P.success()):P.error()},disabled:!d},a.default.createElement("span",{className:"theme-swatch",style:{background:`linear-gradient(135deg, ${c.colors.bg} 0%, ${c.colors.panel} 45%, ${c.colors.accent} 100%)`}},!d&&a.default.createElement("svg",{viewBox:"0 0 24 24",width:"15",height:"15",className:"theme-lock"},a.default.createElement("rect",{x:"5",y:"11",width:"14",height:"9",rx:"2",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M8 11V8a4 4 0 0 1 8 0v3",fill:"none",stroke:"currentColor",strokeWidth:"2"})),u&&a.default.createElement("span",{className:"theme-active-dot"})),a.default.createElement("span",{className:"theme-name"},c.name),d?a.default.createElement("span",{className:"theme-blurb"},c.blurb):a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:"theme-req"},"level ",c.unlockLevel),a.default.createElement("span",{className:"theme-bar"},a.default.createElement("span",{className:"theme-bar-fill",style:{width:`${m}%`}})),a.default.createElement("span",{className:"theme-pct"},m,"%")))})),a.default.createElement("div",{className:"sheet-sub"},"level ",e," \xB7 ",Math.max(0,s-n)," XP to level ",e+1),a.default.createElement("div",{className:"ach-section"},a.default.createElement(vC,{earned:r,coins:i})),a.default.createElement("div",{className:"sheet-foot"},"theme colours follow your level \xB7 currently ",a.default.createElement("b",null,t.phase.label))))}function Jd({label:t,value:e,color:n}){return a.default.createElement("div",{className:"pet-stat"},a.default.createElement("div",{className:"pet-stat-top"},a.default.createElement("span",{className:"pet-stat-label"},t),a.default.createElement("span",{className:"pet-stat-val"},Math.round(e))),a.default.createElement("div",{className:"pet-stat-track"},a.default.createElement("div",{className:"pet-stat-fill",style:{width:`${e}%`,background:n}})))}function xC({from:t,to:e,petName:n,onDone:r}){(0,a.useEffect)(()=>{let o=setTimeout(r,5200);return()=>clearTimeout(o)},[r]);let i=oo[e];return a.default.createElement("div",{className:"evo-backdrop",onClick:r},a.default.createElement("div",{className:"screen-pulse"}),a.default.createElement("div",{className:"burst"}),a.default.createElement("div",{className:"evo-card",onClick:o=>o.stopPropagation()},a.default.createElement("div",{className:"evo-kicker"},"evolution"),a.default.createElement("div",{className:"evo-stage-row"},a.default.createElement("div",{className:"evo-old"},a.default.createElement(Th,{stage:t,mood:"content",size:72,animate:!1})),a.default.createElement("span",{className:"evo-arrow"},"\u2192"),a.default.createElement("div",{className:"evo-new"},a.default.createElement(Th,{stage:e,mood:"joyful",size:132,evolving:!0}))),a.default.createElement("div",{className:"evo-name"},n," became ",a.default.createElement("b",null,i.name)),a.default.createElement("div",{className:"evo-title"},i.title),a.default.createElement("button",{className:"evo-btn",onClick:r},"continue")))}var wi="https://tasksh-notify.techcraftor.workers.dev",wC="BO6-Y8l-bh_WOLy4A7zYXX_8cAPCYiY2gzlkn7kuWqMlvK921aU5IebajkHiQlRuQaoOQxSjfIAFj--bO_Vvyi0";function kC(t){let e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let o=0;o<r.length;o++)i[o]=r.charCodeAt(o);return i}function Su(){let t=localStorage.getItem(zs);return t||(t="dev_"+Date.now().toString(36)+Math.random().toString(36).slice(2,10),localStorage.setItem(zs,t)),t}async function AC(){if(!("serviceWorker"in navigator)||!("PushManager"in window))throw new Error("Push notifications aren't supported in this browser.");if(await Notification.requestPermission()!=="granted")throw new Error("Notification permission was not granted.");let e=await navigator.serviceWorker.ready,n=await e.pushManager.getSubscription();n||(n=await e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:kC(wC)}));let r=Su();if(!(await fetch(`${wi}/subscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:r,subscription:n.toJSON()})})).ok)throw new Error("Worker rejected the subscription (check NOTIFY_WORKER_URL).");return!0}async function SC(){try{let n=await(await navigator.serviceWorker.ready).pushManager.getSubscription();n&&await n.unsubscribe()}catch{}let t=Su();try{await fetch(`${wi}/unsubscribe`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:t})})}catch{}}var Sw="tasksh.syncsent.v1";async function Ax(t,{force:e=!1}={}){let n=Su(),r=JSON.stringify({deviceId:n,routines:(t||[]).map(i=>({id:i.id,time:i.time,label:i.label,duration:i.duration}))});if(!e&&EC(r))return{skipped:!0};try{let i=await fetch(`${wi}/sync`,{method:"POST",headers:{"Content-Type":"application/json"},body:r});if(i&&i.ok){try{localStorage.setItem(Sw,r)}catch{}return{sent:!0}}return{sent:!1,status:i&&i.status}}catch{return{sent:!1}}}function EC(t){try{return localStorage.getItem(Sw)===t}catch{return!1}}var hu=[{id:"gemini",label:"Gemini",test:t=>/^(AIza|AQ\.)/.test(t),where:"aistudio.google.com/apikey",free:"~1000 req/day",shared:!0},{id:"groq",label:"Groq",test:t=>/^gsk_/.test(t),where:"console.groq.com",free:"~1000 req/day, fastest"},{id:"cerebras",label:"Cerebras",test:t=>/^csk-/.test(t),where:"cloud.cerebras.ai",free:"1M tokens/day"},{id:"nvidia",label:"NVIDIA NIM",test:t=>/^nvapi-/.test(t),where:"build.nvidia.com",free:"40 req/min, 1000 credits"},{id:"mistral",label:"Mistral",test:()=>!1,prefixed:!0,where:"console.mistral.ai",free:"paste as mistral:YOUR_KEY"},{id:"openrouter",label:"OpenRouter",test:t=>/^sk-or-/.test(t),where:"openrouter.ai/keys",free:"50 req/day"},{id:"openai",label:"OpenAI",test:t=>/^sk-/.test(t),where:"platform.openai.com"}];function dl(t){let e=String(t||"").trim(),n=e.match(/^([a-z][a-z0-9]*):(.+)$/i);if(n){let r=hu.find(i=>i.id===n[1].toLowerCase());if(r)return r}return hu.find(r=>r.test(e))||null}var Kh="tasksh.aikeys.v1";function rr(){try{let t=JSON.parse(localStorage.getItem(Kh)||"null");if(Array.isArray(t)&&t.length)return t.filter(Boolean);let e=localStorage.getItem(mu);return e?[e]:[]}catch{return[]}}function Eu(t){let e=[...new Set(t.map(n=>String(n).trim()).filter(Boolean))].slice(0,10);try{localStorage.setItem(Kh,JSON.stringify(e)),e.length?localStorage.setItem(mu,e[0]):localStorage.removeItem(mu)}catch{}}function TC(t){let e=String(t||"").trim();if(!e)return rr();let n=[...rr(),e];return Eu(n),rr()}function Sx(t,e){let n=rr(),r=n.indexOf(t),i=r+e;if(r<0||i<0||i>=n.length)return n;let o=[...n];return[o[r],o[i]]=[o[i],o[r]],Eu(o),rr()}function CC(t){let e=rr().filter(n=>n!==t);return Eu(e),e}function _C(){return rr()[0]||""}function IC(t){Eu(t?[t]:[])}function Xh(t){if(!t)return"";let e=String(t).match(/^([a-z][a-z0-9]*:)(.+)$/i);return e&&hu.some(n=>n.id===e[1].slice(0,-1).toLowerCase())?e[1]+Xh(e[2]):t.length<=10?"\u2022".repeat(t.length):`${t.slice(0,4)}${"\u2022".repeat(8)}${t.slice(-4)}`}var gu=class extends Error{constructor(e){super(e),this.name="AIKeyError"}};async function NC(t){let e=await fetch(`${wi}/ai-verify`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:t})}),n=null;try{n=await e.json()}catch{}if(!n||!n.ok)throw new Error(n&&n.message||`Couldn't verify that key (${e.status}).`);return n.warning||null}async function PC(t,e,n,r,i){let o=await fetch(`${wi}/companion`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,data:e,context:n,log:r,apiKey:i,apiKeys:rr()})}),s=null;try{s=await o.json()}catch{}if(!o.ok){let l=s&&s.error;throw l==="no_key"||l==="bad_key"?new gu(s&&s.message||"key rejected"):new Error(s&&s.message||`request failed (${o.status})`)}return{reply:s&&s.reply||"\u2026",actions:s&&s.actions||[]}}var MC=["how am I doing?","add a 30 min reading routine before bed","what am I neglecting?","my evenings are too packed"];function Ex(t,e){let n=(r,i)=>(r||[]).find(o=>o.id===i);switch(t.op){case"add_routine":return{kind:"add",surface:"routine",text:`${Fn(mn(t.time))} \xB7 ${t.label} (${Mr(t.duration)})`+(t.alternatives?.length?` \xB7 or: ${t.alternatives.join(", ")}`:"")};case"edit_routine":{let r=n(e.routines,t.id),i=[];return t.time!==void 0&&t.time!==r?.time&&i.push(`${Fn(mn(r?.time||"00:00"))} \u2192 ${Fn(mn(t.time))}`),t.label!==void 0&&t.label!==r?.label&&i.push(`"${r?.label}" \u2192 "${t.label}"`),t.duration!==void 0&&t.duration!==r?.duration&&i.push(`${Mr(r?.duration||0)} \u2192 ${Mr(t.duration)}`),{kind:"edit",surface:"routine",text:`${r?.label||"routine"}: ${i.join(", ")||"no change"}`}}case"delete_routine":return{kind:"remove",surface:"routine",text:n(e.routines,t.id)?.label||`#${t.id}`};case"add_vault_habit":return{kind:"add",surface:"vault",text:`${t.icon} ${t.label} \xB7 ${t.weeklyGoal}x/week`};case"edit_vault_habit":{let r=n(e.vaultHabits,t.id),i=[];return t.label!==void 0&&t.label!==r?.label&&i.push(`"${r?.label}" \u2192 "${t.label}"`),t.weeklyGoal!==void 0&&t.weeklyGoal!==r?.weeklyGoal&&i.push(`${r?.weeklyGoal}x \u2192 ${t.weeklyGoal}x/week`),{kind:"edit",surface:"vault",text:`${r?.label||"habit"}: ${i.join(", ")||"no change"}`}}case"delete_vault_habit":return{kind:"remove",surface:"vault",text:n(e.vaultHabits,t.id)?.label||`#${t.id}`};case"add_good_habit":return{kind:"add",surface:"quest",text:`+${t.xp} XP \xB7 ${t.label} (${t.area})`};case"add_bad_habit":return{kind:"add",surface:"quest",text:`\u2212${t.xp} XP \xB7 ${t.label} (${t.area})`};case"delete_good_habit":return{kind:"remove",surface:"quest",text:n(e.habits,t.id)?.label||`#${t.id}`};case"delete_bad_habit":return{kind:"remove",surface:"quest",text:n(e.habits,t.id)?.label||`#${t.id}`};case"add_reward":return{kind:"add",surface:"reward",text:`${t.label} \xB7 ${t.cost} XP`};case"delete_reward":return{kind:"remove",surface:"reward",text:n(e.rewards,t.id)?.label||`#${t.id}`};case"add_quest":return{kind:"add",surface:"quest",text:`${t.label} \xB7 +${t.xp}${t.penalty?` / \u2212${t.penalty}`:""} XP \xB7 ${(t.tags||[]).join(" + ")||"untagged"}`};case"edit_quest":{let r=n(e.habits,t.id),i=[];return t.label!==void 0&&t.label!==r?.label&&i.push(`"${r?.label}" \u2192 "${t.label}"`),t.xp!==void 0&&t.xp!==r?.xp&&i.push(`+${r?.xp} \u2192 +${t.xp} XP`),t.penalty!==void 0&&t.penalty!==r?.penalty&&i.push(`\u2212${r?.penalty} \u2192 \u2212${t.penalty}`),t.tags!==void 0&&i.push(`tags \u2192 ${t.tags.join(" + ")}`),t.desc!==void 0&&i.push("new description"),{kind:"edit",surface:"quest",text:`${r?.label||"quest"}: ${i.join(", ")||"no change"}`}}case"delete_quest":return{kind:"remove",surface:"quest",text:n(e.habits,t.id)?.label||`#${t.id}`};case"add_daily_task":return{kind:"add",surface:"daily",text:`${t.text} \xB7 ${t.diff} (+${xi[t.diff]??10})${(t.tags||[]).length?` \u2192 ${t.tags.join(" + ")}`:" \xB7 untagged"}`};case"delete_daily_task":return{kind:"remove",surface:"daily",text:n(e.inventory,t.id)?.text||`#${t.id}`};case"add_tag":return{kind:"add",surface:"tag",text:t.label};case"add_expense_cat":return{kind:"add",surface:"money",text:`new category: ${t.label}`};case"add_expense":{let r=(e.expenseCats||[]).find(i=>i.key===t.cat);return{kind:"add",surface:"money",text:`${he(Os(t.amount),e.currency)} \xB7 ${r?r.label:t.cat}${t.name?` \xB7 ${t.name}`:""}${t.date?` \xB7 ${t.date}`:""}`}}case"delete_expense":{let r=n(e.expenses,t.id);return{kind:"remove",surface:"money",text:r?`${e.currency||"\u20B9"}${r.amt} \xB7 ${r.note||r.cat}`:`#${t.id}`}}case"add_recurring":return{kind:"add",surface:"money",text:wu({...t,amount:Os(t.amount)},e.expenseCats||[],e.currency||"\u20B9")};case"edit_recurring":{let r=n(e.recurring,t.id),i=[];return t.amount!==void 0&&i.push(`${he(r?.amount||0,e.currency)} \u2192 ${he(Os(t.amount),e.currency)}`),t.active!==void 0&&i.push(t.active?"resumed":"paused"),{kind:"edit",surface:"money",text:`${r?.name||"rule"}: ${i.join(", ")||"no change"}`}}case"delete_recurring":{let r=n(e.recurring,t.id);return{kind:"remove",surface:"money",text:r?wu(r,e.expenseCats||[],e.currency||"\u20B9"):`#${t.id}`}}case"add_note":return{kind:"add",surface:"note",text:t.title};default:return{kind:"edit",surface:"?",text:t.op}}}function OC(t,e,n){let{routines:r,vaultHabits:i,habits:o,rewards:s}={routines:[...e.routines],vaultHabits:[...e.vaultHabits],habits:[...e.habits],rewards:[...e.rewards]},l=[...e.inventory||[]],c=[...e.notes||[]],d={items:[...e.expenses||[]],cats:[...e.expenseCats||[]],rules:[...e.recurring||[]],currency:e.currency||"\u20B9"},u=new Set;for(let p of t)switch(p.op){case"add_routine":r=[...r,{id:Ne(),time:p.time,label:p.label,duration:p.duration,history:[],...p.alternatives?.length?{alternatives:p.alternatives}:{}}],u.add("routines");break;case"edit_routine":r=r.map(f=>f.id===p.id?{...f,...p.time!==void 0?{time:p.time}:{},...p.label!==void 0?{label:p.label}:{},...p.duration!==void 0?{duration:p.duration}:{}}:f),u.add("routines");break;case"delete_routine":r=r.filter(f=>f.id!==p.id),u.add("routines");break;case"add_vault_habit":i=[...i,{id:Ne(),icon:p.icon,label:p.label,weeklyGoal:p.weeklyGoal,history:[]}],u.add("vaultHabits");break;case"edit_vault_habit":i=i.map(f=>f.id===p.id?{...f,...p.label!==void 0?{label:p.label}:{},...p.weeklyGoal!==void 0?{weeklyGoal:p.weeklyGoal}:{}}:f),u.add("vaultHabits");break;case"delete_vault_habit":i=i.filter(f=>f.id!==p.id),u.add("vaultHabits");break;case"add_good_habit":o=[...o,{id:Ne(),label:p.label,tags:Array.isArray(p.tags)&&p.tags.length?p.tags:Ph(p,new Set(vl().map(f=>f.key))),xp:p.xp,penalty:0,history:[]}],u.add("habits");break;case"delete_good_habit":o=o.filter(f=>f.id!==p.id),u.add("habits");break;case"add_bad_habit":o=[...o,{id:Ne(),label:p.label,tags:Array.isArray(p.tags)&&p.tags.length?p.tags:Ph(p,new Set(vl().map(f=>f.key))),xp:0,penalty:p.xp,history:[]}],u.add("habits");break;case"delete_bad_habit":o=o.filter(f=>f.id!==p.id),u.add("habits");break;case"add_reward":s=[...s,{id:Ne(),label:p.label,cost:p.cost,claimed:[]}],u.add("rewards");break;case"delete_reward":s=s.filter(f=>f.id!==p.id),u.add("rewards");break;case"add_quest":o=[...o,{id:Ne(),label:p.label,tags:p.tags||[],desc:p.desc||"",xp:p.xp,penalty:p.penalty||0,history:[]}],u.add("habits");break;case"edit_quest":o=o.map(f=>f.id===p.id?{...f,...p.label!==void 0?{label:p.label}:{},...p.desc!==void 0?{desc:p.desc}:{},...p.tags!==void 0?{tags:p.tags}:{},...p.xp!==void 0?{xp:p.xp}:{},...p.penalty!==void 0?{penalty:p.penalty}:{}}:f),u.add("habits");break;case"delete_quest":o=o.filter(f=>f.id!==p.id),u.add("habits");break;case"add_daily_task":l=[...l,{id:Ne(),text:p.text,diff:p.diff||"mid",tags:p.tags||[],history:[]}],u.add("inventory");break;case"delete_daily_task":l=l.filter(f=>f.id!==p.id),u.add("inventory");break;case"add_tag":n.tagCtl&&n.tagCtl.addTag(p.label);break;case"add_expense_cat":d={...d,cats:ek(d.cats,p.label)},u.add("money");break;case"add_expense":d={...d,items:[...d.items,{id:Ne(),amt:Os(p.amount),cat:p.cat,note:p.name||"",d:p.date||ne(0),at:Date.now()}]},u.add("money");break;case"delete_expense":d={...d,items:d.items.filter(f=>f.id!==p.id)},u.add("money");break;case"add_recurring":d={...d,rules:[...d.rules,{id:Ne(),kind:"expense",every:p.every,day:p.day,amount:Os(p.amount),cat:p.cat,name:p.name||"",active:!0,createdOn:ne(0),lastRun:null}]},u.add("money");break;case"edit_recurring":d={...d,rules:d.rules.map(f=>f.id===p.id?{...f,...p.amount!==void 0?{amount:Os(p.amount)}:{},...p.active!==void 0?{active:p.active}:{}}:f)},u.add("money");break;case"delete_recurring":d={...d,rules:d.rules.filter(f=>f.id!==p.id)},u.add("money");break;case"add_note":c=[...c,{id:Ne(),title:p.title,body:p.body||"",at:Date.now()}],u.add("notes");break;default:break}u.has("routines")&&n.setRoutines(r),u.has("vaultHabits")&&n.setVaultHabits(i),u.has("habits")&&n.setHabits(o),u.has("rewards")&&n.setRewards(s),u.has("inventory")&&n.setInventory&&n.setInventory(l),u.has("notes")&&n.setNotes&&n.setNotes(c),u.has("money")&&n.setMoney&&n.setMoney(p=>({...p,...d}))}function BC({petCtl:t,state:e,setters:n,ctx:r,showDataMsg:i}){let{pet:o,form:s,mood:l,nudge:c,remember:d,rename:u}=t,[p,f]=(0,a.useState)(()=>_C()),[m,h]=(0,a.useState)(!1),[v,x]=(0,a.useState)(null),[y,g]=(0,a.useState)(""),[b,w]=(0,a.useState)(!1),[k,S]=(0,a.useState)(0),[E,T]=(0,a.useState)(null),[_,C]=(0,a.useState)(null),[I,M]=(0,a.useState)(()=>new Set),[O,$]=(0,a.useState)(!1),[D,U]=(0,a.useState)(o.name),[j,oe]=(0,a.useState)(!0),se=(0,a.useRef)(null),N=(0,a.useRef)(0),G=(0,a.useMemo)(()=>oT(r),[r]);(0,a.useEffect)(()=>{if(!b){S(0);return}let B=Date.now(),K=setInterval(()=>S((Date.now()-B)/1e3),100);return()=>clearInterval(K)},[b]),(0,a.useEffect)(()=>{se.current&&(se.current.scrollTop=se.current.scrollHeight)},[o.log,_,b]);let X=async B=>{let K=(B??y).trim();if(!K||b)return;let V=Date.now()-N.current;if(V<3e3){T(`give me a second \u2014 ${Math.ceil((3e3-V)/1e3)}s`);return}if(g(""),d("user",K),c("chat"),P.click(),!p){d("pet","i can hear you, but i can't say much yet. connect an ai key and i can really talk \u2014 and change things for you."),h(!0);return}N.current=Date.now(),w(!0),T(null),C(null),M(new Set);try{let ae=await PC(K,{routines:e.routines,vaultHabits:e.vaultHabits,habits:e.habits,rewards:e.rewards,totalXP:e.totalXP,tags:e.tags,inventory:e.inventory,expenses:e.expenses,expenseCats:e.expenseCats,recurring:e.recurring,currency:e.currency,notes:e.notes,coins:e.coins,today:ne(0)},sT(r),o.log||[],p);d("pet",ae.reply),ae.actions.length&&(C(ae),P.success())}catch(ae){ae instanceof gu?(IC(""),f(""),x(ae.message),h(!0),d("pet","my link to the wider world got rejected. mind checking the key?")):(d("pet","couldn't reach far enough to answer that. try again in a moment."),T(ae.message||null)),P.error()}finally{w(!1)}},ie=B=>M(K=>{let V=new Set(K);return V.has(B)?V.delete(B):V.add(B),V}),F=_?_.actions.filter((B,K)=>!I.has(K)):[],ee=()=>{F.length&&(OC(F,e,n),P.success(),c("chat"),i("success",`applied ${F.length} change${F.length===1?"":"s"}`),d("pet",`done \u2014 ${F.length} change${F.length===1?"":"s"} applied.`),C(null),M(new Set))},re=()=>{P.whoosh(),d("pet","left it as it was."),C(null),M(new Set)};if(m)return a.default.createElement(FC,{initialError:v,onCancel:()=>h(!1),onSaved:(B,K,V={})=>{f(B),x(null),V.keepOpen||h(!1),i("success",K||"connected")}});let xe=F.reduce((B,K)=>{let V=Ex(K,e).kind;return B[V]=(B[V]||0)+1,B},{});return a.default.createElement("div",{className:"task-list companion-scroll"},a.default.createElement("div",{className:"cmp-hero"},a.default.createElement(Th,{stage:s.stage,mood:l.key,size:132}),a.default.createElement("div",{className:"cmp-id"},O?a.default.createElement("input",{className:"pet-name-input",value:D,autoFocus:!0,maxLength:14,onChange:B=>U(B.target.value),onBlur:()=>{u(D),$(!1)},onKeyDown:B=>{B.key==="Enter"&&(u(D),$(!1))}}):a.default.createElement("button",{className:"pet-name",onClick:()=>{U(o.name),$(!0)}},o.name),a.default.createElement("span",{className:"pet-form"},s.name," \xB7 ",l.label)),a.default.createElement("button",{className:"cmp-stats-toggle",onClick:()=>oe(B=>!B)},j?"stats":"hide")),!j&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"pet-stats"},a.default.createElement(Jd,{label:"happiness",value:o.happiness,color:"var(--accent)"}),a.default.createElement(Jd,{label:"energy",value:o.energy,color:"var(--accent2)"}),a.default.createElement(Jd,{label:"friendship",value:o.friendship,color:"var(--accent)"}),a.default.createElement(Jd,{label:"intelligence",value:o.intelligence,color:"var(--accent2)"})),a.default.createElement("div",{className:"pet-next"},aw(o.friendship),Eh(r.level)?` \xB7 next form at level ${Eh(r.level).minLevel}`:" \xB7 final form")),a.default.createElement("div",{className:"cmp-chat",ref:se},a.default.createElement("div",{className:"pet-msg pet cmp-greeting"},G),(o.log||[]).map((B,K)=>a.default.createElement("div",{key:K,className:`pet-msg ${B.role}`},B.text)),b&&a.default.createElement("div",{className:"pet-msg pet thinking"},a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),a.default.createElement("span",{className:"ai-dot"}),k>=1&&a.default.createElement("span",{className:"cmp-elapsed"},k.toFixed(1),"s")),_&&_.actions.length>0&&a.default.createElement("div",{className:"cmp-diff-wrap"},a.default.createElement("div",{className:"ai-diff-head"},a.default.createElement("span",{className:"ai-diff-title"},"proposed changes"),a.default.createElement("span",{className:"ai-diff-counts"},xe.add?a.default.createElement("span",{className:"c-add"},"+",xe.add):null,xe.edit?a.default.createElement("span",{className:"c-edit"},"~",xe.edit):null,xe.remove?a.default.createElement("span",{className:"c-remove"},"\u2212",xe.remove):null)),a.default.createElement("div",{className:"ai-diff"},_.actions.map((B,K)=>{let V=Ex(B,e),ae=I.has(K);return a.default.createElement("button",{key:K,className:`ai-diff-row ${V.kind} ${ae?"skipped":""}`,onClick:()=>ie(K),title:ae?"click to include":"click to skip"},a.default.createElement("span",{className:"ai-sign"},V.kind==="add"?"+":V.kind==="remove"?"\u2212":"~"),a.default.createElement("span",{className:"ai-surface"},V.surface),a.default.createElement("span",{className:"ai-diff-text"},V.text),a.default.createElement("span",{className:"ai-skip-mark"},ae?"skipped":""))})),a.default.createElement("div",{className:"ai-actions"},a.default.createElement("button",{className:"ai-apply",onClick:ee,disabled:!F.length},"apply ",F.length||""),a.default.createElement("button",{className:"ai-discard",onClick:re},"discard")),a.default.createElement("div",{className:"ai-hint"},"tap any row to skip it"))),E&&a.default.createElement("div",{className:"ai-error cmp-error"},E),(o.log||[]).length===0&&!b&&a.default.createElement("div",{className:"ai-chips cmp-chips"},MC.map(B=>a.default.createElement("button",{key:B,className:"ai-chip",onClick:()=>X(B)},B))),a.default.createElement("div",{className:"pet-composer"},a.default.createElement("input",{className:"pet-input",placeholder:p?`talk to ${o.name}\u2026`:`say hello to ${o.name}\u2026`,value:y,onChange:B=>g(B.target.value),onKeyDown:B=>B.key==="Enter"&&X(),disabled:b}),a.default.createElement("button",{className:"pet-send",onClick:()=>X(),disabled:b||!y.trim()},"say")),a.default.createElement("button",{className:"cmp-key-link",onClick:()=>h(!0)},p?`key ${Xh(p)}`:"connect an ai key"))}function FC({onSaved:t,initialError:e,onCancel:n}){let[r,i]=(0,a.useState)(""),[o,s]=(0,a.useState)(()=>rr()),[l,c]=(0,a.useState)(!1),[d,u]=(0,a.useState)(e||null),p=(0,a.useRef)(null);(0,a.useEffect)(()=>{p.current?.focus()},[]);let f=async()=>{let m=r.trim();if(!(!m||l)){c(!0),u(null);try{let h=await NC(m),v=TC(m);s(v),i(""),P.success(),t(m,h||(v.length>1?`${v.length} keys connected`:null),{keepOpen:v.length>1})}catch(h){u(h.message||"Couldn't verify that key."),P.error()}finally{c(!1)}}};return a.default.createElement("div",{className:"task-list ai-scroll"},a.default.createElement("div",{className:"ai-gate"},a.default.createElement("div",{className:"ai-gate-icon"},"\u2726"),a.default.createElement("div",{className:"ai-gate-title"},"connect an AI key"),a.default.createElement("div",{className:"ai-gate-sub"},"the assistant needs an AI key. all of these have a free tier \u2014 pick whichever you like, or add several so it keeps working when one runs out."),a.default.createElement("div",{className:"prov-list"},hu.filter(m=>m.free).map(m=>a.default.createElement("a",{key:m.id,className:"prov-chip",href:`https://${m.where}`,target:"_blank",rel:"noopener noreferrer"},a.default.createElement("span",{className:"prov-chip-main"},a.default.createElement("span",{className:"prov-name"},m.label),a.default.createElement("span",{className:"prov-where"},m.where)),a.default.createElement("span",{className:"prov-free"},m.free)))),a.default.createElement("div",{className:"ai-gate-steps-note"},"sign in, create a key, paste it below. no card needed for any of them. adding two from ",a.default.createElement("i",null,"different")," providers is what actually buys you headroom."),a.default.createElement("input",{ref:p,className:"ai-key-input",type:"password",autoComplete:"off",spellCheck:!1,placeholder:"AQ.\u2026 \xB7 AIza\u2026 \xB7 gsk_\u2026 \xB7 csk-\u2026 \xB7 nvapi-\u2026",value:r,onChange:m=>i(m.target.value),onKeyDown:m=>{m.key==="Enter"&&f()},disabled:l}),(()=>{let m=dl(r);return r.trim()?m?a.default.createElement("div",{className:"prov-detected"},"detected: ",m.label,m.note?` \u2014 ${m.note}`:""):a.default.createElement("div",{className:"prov-detected prov-detected-warn"},"unknown prefix \u2014 if it's a Mistral key, paste it as mistral:YOUR_KEY"):null})(),d&&a.default.createElement("div",{className:"ai-error ai-gate-error"},d),a.default.createElement("div",{className:"ai-gate-actions"},a.default.createElement("button",{className:"ai-apply",onClick:f,disabled:l||!r.trim()},l?"checking\u2026":o.length?"add key":"save key"),n&&a.default.createElement("button",{className:"ai-discard",onClick:n},"cancel")),o.length>0&&a.default.createElement("div",{className:"keypool"},a.default.createElement("div",{className:"keypool-head"},a.default.createElement("span",null,o.length," key",o.length===1?"":"s"," connected"),a.default.createElement("span",{className:"keypool-hint"},"tried in order")),o.map((m,h)=>{let v=dl(m);return a.default.createElement("div",{className:"keypool-row",key:m},a.default.createElement("span",{className:"keypool-num"},h+1),a.default.createElement("span",{className:"keypool-prov"},v?v.label:"?"),a.default.createElement("span",{className:"keypool-val"},Xh(m)),a.default.createElement("button",{className:"keypool-move",disabled:h===0,onClick:()=>{s(Sx(m,-1)),P.click()},"aria-label":"Try this key earlier",title:"move up"},"\u2191"),a.default.createElement("button",{className:"keypool-move",disabled:h===o.length-1,onClick:()=>{s(Sx(m,1)),P.click()},"aria-label":"Try this key later",title:"move down"},"\u2193"),a.default.createElement("button",{className:"keypool-del",onClick:()=>{s(CC(m)),P.delete()}},"remove"))}),a.default.createElement("div",{className:"keypool-note"},"tried top to bottom; a rate-limited key is skipped automatically.",o.filter(m=>dl(m)?.id==="gemini").length>1&&a.default.createElement(a.default.Fragment,null," ",a.default.createElement("b",null,"heads up:")," several Gemini keys from the same google account share one quota and add no capacity \u2014 mix in a different provider instead."),(()=>{let m=new Set(o.map(h=>dl(h)?.id).filter(Boolean));return o.length<2||m.size!==1||m.has("gemini")?null:a.default.createElement(a.default.Fragment,null," ",a.default.createElement("b",null,"heads up:")," every key is ",dl(o[0]).label," \u2014 one outage takes the assistant down. add a second provider.")})())),a.default.createElement("div",{className:"ai-gate-note"},"stored only on this device. it isn't included in your backup exports, and the server never keeps it.")))}var Us="tasksh.cloud.v1",Tx="0123456789abcdefghjkmnpqrstvwxyz",DC=10,zC=16,LC=2e5,UC=3600*1e3,VC=[mu,Kh,Us];function Cx(t){let e=new Uint8Array(t);crypto.getRandomValues(e);let n="";for(let r=0;r<t;r++)n+=Tx[e[r]%Tx.length];return n}function WC(){return`tsh-${Cx(DC)}-${Cx(zC)}`}function _x(t){let n=String(t||"").trim().toLowerCase().replace(/\s+/g,"").replace(/[il]/g,"1").replace(/o/g,"0").match(/^tsh-([0-9a-z]{10})-([0-9a-z]{16})$/);return n?{id:n[1],secret:n[2]}:null}function $C(t,e,n=UC){return typeof t!="number"||!isFinite(t)||t<=0||t>e?!0:e-t>=n}function mh(t){let e="";for(let r=0;r<t.length;r+=32768)e+=String.fromCharCode.apply(null,t.subarray(r,r+32768));return btoa(e)}function hh(t){let e=atob(t),n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}async function Ew(t,e){let n=await crypto.subtle.importKey("raw",new TextEncoder().encode(t),"PBKDF2",!1,["deriveKey"]);return crypto.subtle.deriveKey({name:"PBKDF2",salt:e,iterations:LC,hash:"SHA-256"},n,{name:"AES-GCM",length:256},!1,["encrypt","decrypt"])}async function HC(t,e){let n=crypto.getRandomValues(new Uint8Array(16)),r=crypto.getRandomValues(new Uint8Array(12)),i=await Ew(e,n),o=new Uint8Array(await crypto.subtle.encrypt({name:"AES-GCM",iv:r},i,new TextEncoder().encode(t)));return["v1",mh(n),mh(r),mh(o)].join(".")}async function qC(t,e){let n=String(t||"").split(".");if(n.length!==4||n[0]!=="v1")throw new Error("unrecognised backup format");let r=await Ew(e,hh(n[1])),i;try{i=await crypto.subtle.decrypt({name:"AES-GCM",iv:hh(n[2])},r,hh(n[3]))}catch{throw new Error("wrong recovery code")}return new TextDecoder().decode(i)}function Tw(t,e){let n=e||[],r={};for(let i=0;i<localStorage.length;i++){let o=localStorage.key(i);!o||!o.startsWith("tasksh.")||n.indexOf(o)===-1&&(!t&&VC.indexOf(o)!==-1||(r[o]=localStorage.getItem(o)))}return r}function Cw(){return JSON.stringify({app:"tasks.sh",version:2,exportedAt:new Date().toISOString(),containsKeys:!0,store:Tw(!0,[zs,Us])})}function yu(){let t=De(Us,null);return!t||typeof t!="object"||!t.id||!t.secret?null:t}function Ps(t){let e={...yu()||{},...t};try{localStorage.setItem(Us,JSON.stringify(e))}catch{}try{window.dispatchEvent(new Event("tasksh-cloud"))}catch{}return e}function RC(){try{localStorage.removeItem(Us)}catch{}try{window.dispatchEvent(new Event("tasksh-cloud"))}catch{}}async function _w(t,e){let n=await HC(e,t.secret),r=await fetch(`${wi}/backup`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t.id,blob:n})}),i={};try{i=await r.json()}catch{}if(r.status===429){let o=new Error("already saved");throw o.alreadySaved=!0,o.retryInMs=i.retryInMs||0,o}if(!r.ok)throw new Error(i.error||`push failed (${r.status})`);return{at:i.at||Date.now(),size:i.size||n.length}}async function jC(t,e){let n=e||{},r=new URLSearchParams({id:t});n.meta&&r.set("meta","1"),n.prev&&r.set("prev","1");let i=await fetch(`${wi}/backup?${r.toString()}`),o={};try{o=await i.json()}catch{}if(i.status===404)throw new Error("no backup stored for that code");if(!i.ok)throw new Error(o.error||`fetch failed (${i.status})`);return o}function GC(t){let e=Object.keys(t||{}).filter(r=>r.startsWith("tasksh.")),n=0;for(let r of e)if(r!==zs&&r!==Us)try{localStorage.setItem(r,t[r]),n++}catch{}return n}function gh(t,e){if(!t)return"never";let n=Math.max(0,Math.round((e-t)/1e3));if(n<60)return"just now";let r=Math.round(n/60);if(r<60)return`${r}m ago`;let i=Math.round(r/60);return i<24?`${i}h ago`:`${Math.round(i/24)}d ago`}function yh(t){return t?t<1024?`${t} B`:`${(t/1024).toFixed(1)} KB`:"0 B"}function QC(){(0,a.useEffect)(()=>{let t=!1,e=async()=>{if(t)return;let i=yu();if(i&&$C(i.lastAt,Date.now()))try{let o=await _w(i,Cw());t||Ps({lastAt:o.at,lastSize:o.size,lastError:null})}catch(o){if(t)return;o.alreadySaved?Ps({lastError:null}):Ps({lastError:String(o.message||o)})}},n=()=>{document.hidden||e()},r=setTimeout(e,2500);return document.addEventListener("visibilitychange",n),()=>{t=!0,clearTimeout(r),document.removeEventListener("visibilitychange",n)}},[])}function KC(){let[t,e]=(0,a.useState)(()=>yu()),[n,r]=(0,a.useState)(!1),[i,o]=(0,a.useState)(!1),[s,l]=(0,a.useState)(null),[c,d]=(0,a.useState)(!1),[u,p]=(0,a.useState)(""),[f,m]=(0,a.useState)(null),[h,v]=(0,a.useState)(!1),x=(0,a.useRef)(null);(0,a.useEffect)(()=>{let _=()=>e(yu());return window.addEventListener("tasksh-cloud",_),()=>window.removeEventListener("tasksh-cloud",_)},[]),(0,a.useEffect)(()=>()=>{x.current&&clearTimeout(x.current)},[]);let y=t?`tsh-${t.id}-${t.secret}`:"",g=()=>{let _=_x(WC());e(Ps({id:_.id,secret:_.secret,lastAt:0})),r(!0),l({type:"ok",text:"first backup running in the background\u2026"}),P.click()},b=()=>{RC(),e(null),r(!1),l(null),P.click()},w=async()=>{if(!(!t||i)){o(!0),l(null);try{let _=await _w(t,Cw());e(Ps({lastAt:_.at,lastSize:_.size,lastError:null})),l({type:"ok",text:`pushed ${yh(_.size)}`})}catch(_){if(_.alreadySaved){let C=Math.ceil((_.retryInMs||0)/6e4);l({type:"ok",text:`already saved ${gh(t.lastAt,Date.now())}${C?` \xB7 next in ${C}m`:""}`})}else l({type:"err",text:String(_.message||_)})}finally{o(!1)}}},k=async()=>{try{await navigator.clipboard.writeText(y),v(!0),P.click(),x.current&&clearTimeout(x.current),x.current=setTimeout(()=>{v(!1),x.current=null},2e3)}catch{r(!0)}},S=async()=>{let _=_x(u);if(!_){l({type:"err",text:"that doesn't look like a recovery code"});return}o(!0),l(null);try{let C=await jC(_.id,{}),I=await qC(C.blob,_.secret),M=JSON.parse(I),O=M.store||{};m({parsed:_,rec:C,store:O,keys:Object.keys(O).length,when:M.exportedAt}),l(null)}catch(C){m(null),l({type:"err",text:String(C.message||C)})}finally{o(!1)}},E=()=>{if(!f)return;let _=GC(f.store);Ps({id:f.parsed.id,secret:f.parsed.secret,lastAt:f.rec.at||0,lastSize:f.rec.size||0,lastError:null}),l({type:"ok",text:`restored ${_} keys \u2014 reloading`}),setTimeout(()=>window.location.reload(),700)},T=Date.now();return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"CLOUD-BACKUP")),a.default.createElement("div",{className:"note-card cloud-card"},a.default.createElement("div",{className:"note-head"},a.default.createElement("span",{className:"note-prompt"},"~/backup"),a.default.createElement("span",{className:"note-when"},t?`${gh(t.lastAt,T)}${t.lastSize?` \xB7 ${yh(t.lastSize)}`:""}`:"off")),!t&&!c&&a.default.createElement("pre",{className:"note-body"},"an encrypted copy, pushed hourly. the code below is the only way to read it back \u2014 the server cannot."),t&&a.default.createElement("pre",{className:"note-body cloud-key"},n?y:"recovery code hidden \xB7 tap reveal"),t&&n&&a.default.createElement("pre",{className:"note-body cloud-warn"},"save this somewhere off the phone. without it the backup is unreadable \u2014 that is what makes it safe to store."),t&&t.lastError&&a.default.createElement("pre",{className:"note-body cloud-warn"},"last push failed: ",t.lastError),c&&a.default.createElement(a.default.Fragment,null,a.default.createElement("input",{className:"cloud-input",value:u,onChange:_=>p(_.target.value),placeholder:"tsh-xxxxxxxxxx-xxxxxxxxxxxxxxxx",spellCheck:"false",autoCapitalize:"none",autoComplete:"off","aria-label":"recovery code"}),f&&a.default.createElement("pre",{className:"note-body cloud-preview"},`${f.keys} keys \xB7 ${yh(f.rec.size)} \xB7 saved ${gh(f.rec.at,T)}`,`
`,"applying overwrites everything on this device.")),s&&a.default.createElement("pre",{className:`note-body cloud-msg ${s.type}`},s.text),a.default.createElement("div",{className:"note-actions"},!t&&!c&&a.default.createElement("button",{className:"note-btn save",onClick:g},"turn on"),t&&!c&&a.default.createElement(a.default.Fragment,null,a.default.createElement("button",{className:"note-btn",onClick:()=>{r(_=>!_),P.click()}},n?"hide":"reveal"),a.default.createElement("button",{className:"note-btn",onClick:k},h?"copied":"copy code"),a.default.createElement("button",{className:"note-btn save",onClick:w,disabled:i},i?"pushing\u2026":"back up now")),!c&&a.default.createElement("button",{className:"note-btn",onClick:()=>{d(!0),l(null),P.click()}},"restore"),c&&a.default.createElement(a.default.Fragment,null,a.default.createElement("button",{className:"note-btn",onClick:S,disabled:i},i?"checking\u2026":"look up"),f&&a.default.createElement("button",{className:"note-btn danger",onClick:E},"apply"),a.default.createElement("button",{className:"note-btn",onClick:()=>{d(!1),m(null),p(""),l(null),P.click()}},"cancel")),t&&!c&&a.default.createElement("button",{className:"note-btn danger",onClick:b},"turn off"))))}function Ix(t){let e=t&&t.activeElement;if(!e)return!1;let n=String(e.tagName||"").toLowerCase();return n==="input"||n==="textarea"||e.isContentEditable===!0}function XC(t,e,n){return n?t&&!e?"reload":"prompt":"ignore"}async function YC(){try{let t=await navigator.serviceWorker.getRegistrations();await Promise.all(t.map(e=>e.unregister()))}catch{}try{let t=await caches.keys();await Promise.all(t.map(e=>caches.delete(e)))}catch{}window.location.reload()}var JC=1800*1e3;function ZC(){let[t,e]=(0,a.useState)(!1),n=(0,a.useRef)(!1),r=(0,a.useRef)(!1),i=l=>{n.current=l,e(l)},o=()=>{r.current||(r.current=!0,window.location.reload())},s=async()=>{try{let l=window.__swReg||await navigator.serviceWorker.getRegistration();return l&&await l.update(),!0}catch{return!1}};return(0,a.useEffect)(()=>{let l=navigator.serviceWorker;if(!l)return;let c=!!l.controller,d=()=>{let f=XC(document.hidden,Ix(document),c);c=!!l.controller,f!=="ignore"&&(f==="reload"?o():i(!0))},u=()=>{document.hidden?n.current&&!Ix(document)&&o():s()};l.addEventListener("controllerchange",d),document.addEventListener("visibilitychange",u),s();let p=setInterval(s,JC);return()=>{l.removeEventListener("controllerchange",d),document.removeEventListener("visibilitychange",u),clearInterval(p)}},[]),{pending:t,apply:o,check:s}}function e_(){let t=fw(),[e,n]=(0,a.useState)("idle"),[r,i]=(0,a.useState)(!1),o=(0,a.useRef)(null);return(0,a.useEffect)(()=>()=>{o.current&&clearTimeout(o.current)},[]),a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"APP-UPDATE")),a.default.createElement("div",{className:"note-card update-card"},a.default.createElement("div",{className:"note-head"},a.default.createElement("span",{className:"note-prompt"},"~/build"),a.default.createElement("span",{className:"note-when"},t||"unknown")),a.default.createElement("pre",{className:"note-body"},e==="checking"?"checking for a new build\u2026":e==="checked"?"checked \u2014 a new build reloads on its own":e==="failed"?"couldn't reach the server":"reload app code drops the cache and re-downloads. your tasks, habits and XP are not touched."),a.default.createElement("div",{className:"note-actions"},a.default.createElement("button",{className:"note-btn",onClick:async()=>{n("checking"),P.click();try{let l=window.__swReg||await navigator.serviceWorker.getRegistration();l&&await l.update(),n("checked")}catch{n("failed")}o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{n("idle"),o.current=null},4e3)}},"check now"),r?a.default.createElement(a.default.Fragment,null,a.default.createElement("button",{className:"note-btn danger",onClick:()=>{P.click(),YC()}},"confirm reload"),a.default.createElement("button",{className:"note-btn",onClick:()=>{i(!1),P.click()}},"cancel")):a.default.createElement("button",{className:"note-btn save",onClick:()=>{i(!0),P.click()}},"reload app code"))))}var Iw="tasksh.pomodoro.v1",vh={work:25,short:5,long:15,rounds:4},Nx={work:[1,120],short:[1,60],long:[1,90],rounds:[1,12]},t_=7200*1e3,Zd={work:{label:"focus",color:"var(--accent)"},short:{label:"short break",color:"var(--accent2)"},long:{label:"long break",color:"#8B9CF7"}};function kl(t){let e={...vh,...t||{}};for(let n of Object.keys(Nx)){let[r,i]=Nx[n],o=e[n];if(o==null||o===""){e[n]=vh[n];continue}let s=Math.round(Number(o));e[n]=isFinite(s)?Math.min(i,Math.max(r,s)):vh[n]}return e}function Oh(t,e){let n=kl(e);return t==="short"?n.short:t==="long"?n.long:n.work}function Bh(t,e,n){let r=kl(n);return t==="work"?e>=r.rounds?{phase:"long",round:e}:{phase:"short",round:e}:t==="short"?{phase:"work",round:Math.min(r.rounds,e+1)}:{phase:"work",round:1}}function Fh(t){let e=Math.round(Number(t)||0);return Math.min(60,Math.max(1,e))}function n_(t){let e=Math.max(0,Math.ceil(t/1e3)),n=Math.floor(e/3600),r=Math.floor(e%3600/60),i=e%60,o=s=>String(s).padStart(2,"0");return n>0?`${n}:${o(r)}:${o(i)}`:`${o(r)}:${o(i)}`}function r_(t,e){if(!t||!t.running||!t.endsAt)return{finished:null,stale:!1};if(e<t.endsAt)return{finished:null,stale:!1};let n=e-t.endsAt;return{finished:t.phase,overdueMs:n,stale:n>t_}}function i_(t,e){let n=kl(t&&t.settings),r=t&&t.session||null,i=(d,u)=>({phase:d,round:u,running:!1,endsAt:null,remainingMs:null}),o=r_(r,e);if(!o.finished)return{settings:n,session:r,payout:0,rang:!1};if(o.stale)return{settings:n,session:i("work",1),payout:0,rang:!1};let s=r.round||1,l=Bh(r.phase,s,n),c=r.phase==="work"?Fh(Oh("work",n)):0;return{settings:n,session:i(l.phase,l.round),payout:c,rang:!0}}function Px(){let t=De(Iw,null)||{};return{settings:kl(t.settings),session:t.session&&typeof t.session=="object"?t.session:null}}function o_(t){try{localStorage.setItem(Iw,JSON.stringify(t))}catch{}}async function vi(t,e){try{await fetch(`${wi}/timer`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({deviceId:Su(),at:t||0,label:e||"focus block"})})}catch{}}function s_({onReward:t}){let e=(0,a.useRef)(null);e.current||(e.current=i_(Px(),Date.now()));let[n,r]=(0,a.useState)(e.current.settings),[i,o]=(0,a.useState)(e.current.session),[s,l]=(0,a.useState)(0),[c,d]=(0,a.useState)(null),[u,p]=(0,a.useState)(!1),f=(0,a.useRef)(null),m=(0,a.useRef)(null);(0,a.useEffect)(()=>()=>{lo(),m.current&&clearTimeout(m.current)},[]);let h=i?.phase||"work",v=i?.round||1,x=!!i?.running,y=Oh(h,n)*6e4,g=x?Math.max(0,(i.endsAt||0)-Date.now()):i?.remainingMs??y;(0,a.useEffect)(()=>{o_({settings:n,session:i})},[n,i]),(0,a.useEffect)(()=>{let D=!1,U=async()=>{try{x&&"wakeLock"in navigator&&(f.current=await navigator.wakeLock.request("screen"))}catch{}},j=()=>{try{f.current&&f.current.release()}catch{}f.current=null};return x?U():j(),()=>{D||(D=!0,j())}},[x]);let b=(D,U)=>{let j=U&&U.silent;if(D==="work"&&!(U&&U.noCoins)&&t(Fh(Oh("work",n))),!j){let N=Fs().alarmSeconds;uw(N),N&&(p(!0),m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{p(!1),m.current=null},N*1e3+300))}let se=Bh(D,v,n);o({phase:se.phase,round:se.round,running:!1,endsAt:null,remainingMs:null}),vi(0)};(0,a.useEffect)(()=>{e.current.payout&&t(e.current.payout),(e.current.rang||e.current.session!==Px().session)&&vi(0)},[]),(0,a.useEffect)(()=>{if(!x)return;let D=setInterval(()=>l(U=>U+1),250);return()=>clearInterval(D)},[x]),(0,a.useEffect)(()=>{!x||!i?.endsAt||Date.now()<i.endsAt||b(i.phase,{})},[s,x,i]);let w=()=>{let D=i?.remainingMs??y,U=Date.now()+D;o({phase:h,round:v,running:!0,endsAt:U,remainingMs:null}),vi(U,Zd[h].label),P.click()},k=()=>{o({phase:h,round:v,running:!1,endsAt:null,remainingMs:g}),vi(0),P.toggle()},S=()=>{o({phase:h,round:v,running:!1,endsAt:null,remainingMs:null}),vi(0),P.delete()},E=D=>{o({phase:D,round:v,running:!1,endsAt:null,remainingMs:null}),vi(0),P.click()},T=D=>{let U=Math.min(n.rounds,Math.max(1,D));o({phase:h,round:U,running:!1,endsAt:null,remainingMs:null}),vi(0),P.click()},_=()=>{let D=Bh(h,v,n);o({phase:D.phase,round:D.round,running:!1,endsAt:null,remainingMs:null}),vi(0),P.whoosh()},C=(D,U)=>{r(j=>kl({...j,[D]:(j[D]||0)+U})),x||o(j=>j&&{...j,remainingMs:null}),P.click()},I=y>0?Math.min(1,Math.max(0,1-g/y)):0,M=52,O=2*Math.PI*M,$=Zd[h];return a.default.createElement("div",{className:"pomo"},a.default.createElement("div",{className:"pomo-dial"},a.default.createElement("svg",{viewBox:"0 0 120 120",className:"pomo-ring","aria-hidden":"true"},a.default.createElement("circle",{cx:"60",cy:"60",r:M,className:"pomo-ring-track"}),a.default.createElement("circle",{cx:"60",cy:"60",r:M,className:"pomo-ring-fill",style:{stroke:$.color,strokeDasharray:O,strokeDashoffset:O*(1-I)}})),a.default.createElement("div",{className:"pomo-centre"},a.default.createElement("div",{className:"pomo-clock"},n_(g)),a.default.createElement("div",{className:"pomo-phase",style:{color:$.color}},$.label))),u&&a.default.createElement("button",{className:"pomo-silence",onClick:()=>{lo(),p(!1),m.current&&(clearTimeout(m.current),m.current=null)}},"\u25A0 silence"),a.default.createElement("div",{className:"pomo-phase-pick",role:"group","aria-label":"Choose a block"},[["work","focus"],["short","short"],["long","long"]].map(([D,U])=>a.default.createElement("button",{key:D,className:`pomo-chip ${h===D?"on":""}`,style:h===D?{borderColor:Zd[D].color,color:Zd[D].color}:void 0,onClick:()=>E(D)},U))),a.default.createElement("div",{className:"pomo-pips","aria-label":`round ${v} of ${n.rounds}`},Array.from({length:n.rounds},(D,U)=>a.default.createElement("button",{key:U,className:`pomo-pip ${U+1<v?"done":""} ${U+1===v?"active":""}`,onClick:()=>T(U+1),"aria-label":`go to round ${U+1}`})),a.default.createElement("span",{className:"pomo-round"},"round ",v,"/",n.rounds)),a.default.createElement("div",{className:"pomo-controls"},x?a.default.createElement("button",{className:"pomo-btn primary",onClick:k},"pause"):a.default.createElement("button",{className:"pomo-btn primary",onClick:w},g<y?"resume":"start"),a.default.createElement("button",{className:"pomo-btn",onClick:S},"reset"),a.default.createElement("button",{className:"pomo-btn",onClick:_},"skip")),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"LENGTHS")),a.default.createElement("div",{className:"pomo-settings"},[["work","focus","m"],["short","short break","m"],["long","long break","m"],["rounds","rounds",""]].map(([D,U,j])=>a.default.createElement("div",{className:`pomo-set ${c===D?"open":""}`,key:D},a.default.createElement("button",{className:"pomo-set-face",onClick:()=>{d(c===D?null:D),P.click()}},a.default.createElement("span",{className:"pomo-set-label"},U),a.default.createElement("span",{className:"pomo-set-value"},n[D],j)),c===D&&a.default.createElement("div",{className:"pomo-stepper"},a.default.createElement("button",{onClick:()=>C(D,-1),"aria-label":`decrease ${U}`},"\u2212"),a.default.createElement("button",{onClick:()=>C(D,-5),disabled:D==="rounds"},"\u22125"),a.default.createElement("button",{onClick:()=>C(D,5),disabled:D==="rounds"},"+5"),a.default.createElement("button",{onClick:()=>C(D,1),"aria-label":`increase ${U}`},"+"))))),a.default.createElement("div",{className:"pomo-note"},a.default.createElement("div",null,"finishing a focus block pays ",Fh(n.work)," coins."),a.default.createElement("div",null,"it also rings as a notification, so it works with the screen off \u2014 up to a minute late, because the worker ticks once a minute.")))}var Mx="tasksh.captions.v1",bh=60,a_="https://api.groq.com/openai/v1/audio/transcriptions",l_="whisper-large-v3-turbo",c_="whisper-large-v3",d_="music|outro music|intro music|applause|laughter|silence|inaudible|background music|singing|instrumental|no speech|sound effects|clapping|cheering|blank_audio",u_=new RegExp("^[\\s\\u266a~\\-]*[\\[\\(\\{]\\s*("+d_+")\\s*[\\]\\)\\}][\\s\\u266a~\\-.!]*$","i"),p_=new RegExp("^[\\s\\u266a~\\-]*(outro music|intro music|background music|no speech|blank_audio|sound effects)[\\s\\u266a~\\-.!]*$","i");function f_(t){let e=String(t||"").trim();return!e||u_.test(e)||p_.test(e)||/^[\[\(\{].*[\]\)\}]$/.test(e)?!0:/^[\u266a~\-\s.]+$/.test(e)}function Nw(t){return(t||[]).filter(e=>!f_(e.text))}function m_(t,e){let n=Nw(t);return n.length<3?!0:!e||e<=0?!1:n.reduce((i,o)=>i+Math.max(0,o.end-o.start),0)/e<.12}var Ox="Song lyrics, sung vocals. Transcribe the words that are sung, verse by verse. Do not describe the music. Do not write [Music] or (outro music).";function Dh(t,e){let n=e||{},r=n.maxWords||3,i=n.maxChars||22,o=n.gapBreak==null?.35:n.gapBreak,s=n.minDur==null?.25:n.minDur,l=[],c=null;for(let d of t||[]){let u=String(d&&(d.word!=null?d.word:d.text)||"").trim(),p=Number(d&&d.start),f=Number(d&&d.end);if(!u||!isFinite(p)||!isFinite(f)||f<p)continue;let m=c&&c.words[c.words.length-1];!c||c.words.length>=r||(c.text+" "+u).length>i||p-c.end>o||/[.!?]$/.test(m.text)?(c={start:p,end:f,text:u,words:[{text:u,start:p,end:f}]},l.push(c)):(c.words.push({text:u,start:p,end:f}),c.end=f,c.text+=" "+u)}for(let d=0;d<l.length;d++){let u=l[d],p=l[d+1];u.end-u.start<s&&(u.end=u.start+s),p&&u.end>p.start&&(u.end=p.start)}return l}function Pw(t,e){for(let n of t||[])if(e>=n.start&&e<n.end)return n;return null}function h_(t,e){if(!t)return-1;for(let n=t.words.length-1;n>=0;n--)if(e>=t.words[n].start)return n;return-1}var Bx={size:[.028,.12],weight:[400,900],tracking:[-.02,.12],maxWords:[1,5],posY:[.25,.92],strokeW:[0,.28]},vu=[{id:"inter",name:"inter",stack:"Inter, system-ui, sans-serif"},{id:"mono",name:"mono",stack:"var(--font-mono)"},{id:"system",name:"system",stack:"system-ui, -apple-system, Roboto, 'Helvetica Neue', sans-serif"},{id:"serif",name:"serif",stack:"Georgia, 'Times New Roman', serif"}],g_=t=>(vu.find(e=>e.id===t)||vu[0]).stack,zh=[{id:"none",name:"none",hint:"every word the same"},{id:"colour",name:"colour",hint:"spoken word changes colour"},{id:"pop",name:"pop",hint:"one word at a time, scaling in"},{id:"box",name:"box",hint:"spoken word on a filled chip"}],y_=["#FFFFFF","#000000","#5EEAD4","#F5A623","#F0576B","#8B9CF7","#7EED5A","#FFE066"],ml={font:"inter",size:.055,weight:800,tracking:.01,upper:!1,maxWords:3,posY:.82,align:"center",fill:"#FFFFFF",active:"#5EEAD4",stroke:"#000000",strokeW:.16,highlight:"colour",boxColor:"#5EEAD4"},v_=[{id:"clean",name:"clean",patch:{highlight:"none",size:.055,weight:800,upper:!1,fill:"#FFFFFF",strokeW:.16,maxWords:3}},{id:"karaoke",name:"karaoke",patch:{highlight:"colour",size:.055,weight:800,upper:!1,active:"#5EEAD4",strokeW:.16,maxWords:3}},{id:"pop",name:"word pop",patch:{highlight:"pop",size:.078,weight:900,upper:!0,active:"#F5A623",strokeW:.18,maxWords:3}},{id:"chip",name:"chip",patch:{highlight:"box",size:.05,weight:800,upper:!0,boxColor:"#F5A623",fill:"#FFFFFF",strokeW:.08,maxWords:2}}];function Yh(t){let e={...ml,...t||{}};for(let n of Object.keys(Bx)){let[r,i]=Bx[n],o=Number(e[n]);e[n]=isFinite(o)?Math.min(i,Math.max(r,o)):ml[n]}return e.maxWords=Math.round(e.maxWords),e.weight=Math.round(e.weight/100)*100,vu.some(n=>n.id===e.font)||(e.font=ml.font),zh.some(n=>n.id===e.highlight)||(e.highlight=ml.highlight),["left","center","right"].indexOf(e.align)===-1&&(e.align="center"),e.upper=!!e.upper,e}function Mw(t,e,n,r,i,o){if(!e)return;let s=Yh(r),l=Math.round(o*s.size),c=Math.round(l*s.strokeW);t.save(),t.textAlign="center",t.textBaseline="alphabetic",t.lineJoin="round",t.miterLimit=2,t.font=`${s.weight} ${l}px ${g_(s.font)}`;let d=h_(e,n),u=s.highlight==="pop"?[e.words[Math.max(0,d)]].filter(Boolean):e.words;if(!u.length){t.restore();return}let p=g=>s.upper?g.text.toUpperCase():g.text,f=l*(.28+s.tracking),m=u.map(g=>t.measureText(p(g)).width),h=m.reduce((g,b)=>g+b,0)+f*(u.length-1),v=Math.round(i*.06),x=Math.round(o*s.posY),y=s.align==="left"?v:s.align==="right"?i-v-h:(i-h)/2;for(let g=0;g<u.length;g++){let b=u[g],w=s.highlight==="pop"?!0:e.words.indexOf(b)===d,k=y+m[g]/2,S=1;if(s.highlight==="pop"||s.highlight==="box"&&w){let E=Math.max(0,n-b.start),T=Math.min(1,E/.12);S=.88+.12*(1-Math.pow(1-T,3))}if(t.save(),t.translate(k,x),t.scale(S,S),s.highlight==="box"&&w){let E=m[g]+l*.36,T=l*1.24,_=Math.min(T/2,l*.22),C=-E/2,I=-l*.92;t.beginPath(),t.moveTo(C+_,I),t.arcTo(C+E,I,C+E,I+T,_),t.arcTo(C+E,I+T,C,I+T,_),t.arcTo(C,I+T,C,I,_),t.arcTo(C,I,C+E,I,_),t.closePath(),t.fillStyle=s.boxColor,t.fill()}c>0&&(t.lineWidth=c,t.strokeStyle=s.stroke,t.strokeText(p(b),0,0)),t.fillStyle=s.highlight==="box"&&w?s.fill:w&&s.highlight!=="none"?s.active:s.fill,t.fillText(p(b),0,0),t.restore(),y+=m[g]+f}t.restore()}var b_=[{word:"this",start:.1,end:.42},{word:"is",start:.42,end:.62},{word:"exactly",start:.62,end:1.16},{word:"how",start:1.16,end:1.4},{word:"it",start:1.4,end:1.58},{word:"burns",start:1.58,end:2.05},{word:"in.",start:2.05,end:2.35},{word:"tune",start:2.95,end:3.3},{word:"it",start:3.3,end:3.48},{word:"here",start:3.48,end:3.85},{word:"first",start:3.85,end:4.35}],x_=5;function w_({chunks:t,style:e,video:n,aspect:r}){let i=(0,a.useRef)(null),o=(0,a.useRef)(null);(0,a.useEffect)(()=>{let l=()=>{let c=i.current;if(c){let d=c.getContext("2d"),u=c.width,p=c.height,f=n&&n.current,m=f&&f.readyState>=2&&!f.paused;if(f&&f.readyState>=2)try{d.drawImage(f,0,0,u,p)}catch{}else{let v=d.createLinearGradient(0,0,0,p);v.addColorStop(0,"#2A3138"),v.addColorStop(1,"#14171C"),d.fillStyle=v,d.fillRect(0,0,u,p),d.fillStyle="rgba(255,255,255,0.05)";for(let x=0;x<7;x++)d.fillRect(0,p/7*x,u,1)}let h=m?f.currentTime:performance.now()/1e3%x_;Mw(d,Pw(t,h),h,e,u,p)}o.current=requestAnimationFrame(l)};return o.current=requestAnimationFrame(l),()=>{o.current&&cancelAnimationFrame(o.current)}},[t,e,n]);let s=Math.round(300*(r||16/9));return a.default.createElement("canvas",{ref:i,className:"cap-preview",width:300,height:s})}function Ss({label:t,value:e,onLess:n,onMore:r,wide:i}){return a.default.createElement("div",{className:`cap-row ${i?"wide":""}`},a.default.createElement("span",{className:"cap-row-label"},t),a.default.createElement("div",{className:"cap-step"},a.default.createElement("button",{onClick:n,"aria-label":`decrease ${t}`},"\u2212"),a.default.createElement("span",{className:"cap-step-val"},e),a.default.createElement("button",{onClick:r,"aria-label":`increase ${t}`},"+")))}function eu({label:t,value:e,onChange:n}){return a.default.createElement("div",{className:"cap-row wide"},a.default.createElement("span",{className:"cap-row-label"},t),a.default.createElement("div",{className:"cap-swatches"},y_.map(r=>a.default.createElement("button",{key:r,className:`cap-swatch ${e.toLowerCase()===r.toLowerCase()?"on":""}`,style:{background:r},onClick:()=>n(r),"aria-label":`${t} ${r}`})),a.default.createElement("label",{className:"cap-swatch custom","aria-label":`${t} custom colour`},a.default.createElement("input",{type:"color",value:e,onChange:r=>n(r.target.value)}),a.default.createElement("span",null,"+"))))}function k_({style:t,setStyle:e}){let n=i=>e(Yh({...t,...i})),r=i=>`${Math.round(i*100)}%`;return a.default.createElement("div",{className:"cap-editor"},a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"PRESETS")),a.default.createElement("div",{className:"cap-chips"},v_.map(i=>a.default.createElement("button",{key:i.id,className:"cap-chip",onClick:()=>{n(i.patch),P.click()}},i.name)),a.default.createElement("button",{className:"cap-chip",onClick:()=>{e({...ml}),P.click()}},"reset")),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"TYPE")),a.default.createElement("div",{className:"cap-chips"},vu.map(i=>a.default.createElement("button",{key:i.id,className:`cap-chip ${t.font===i.id?"on":""}`,style:{fontFamily:i.stack},onClick:()=>{n({font:i.id}),P.click()}},i.name))),a.default.createElement(Ss,{label:"size",value:r(t.size),onLess:()=>n({size:t.size-.005}),onMore:()=>n({size:t.size+.005})}),a.default.createElement(Ss,{label:"weight",value:t.weight,onLess:()=>n({weight:t.weight-100}),onMore:()=>n({weight:t.weight+100})}),a.default.createElement(Ss,{label:"spacing",value:r(t.tracking),onLess:()=>n({tracking:t.tracking-.01}),onMore:()=>n({tracking:t.tracking+.01})}),a.default.createElement(Ss,{label:"words / line",value:t.maxWords,onLess:()=>n({maxWords:t.maxWords-1}),onMore:()=>n({maxWords:t.maxWords+1})}),a.default.createElement("div",{className:"cap-row"},a.default.createElement("span",{className:"cap-row-label"},"caps"),a.default.createElement("button",{className:`cap-chip ${t.upper?"on":""}`,onClick:()=>{n({upper:!t.upper}),P.click()}},t.upper?"UPPERCASE":"as spoken")),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"POSITION")),a.default.createElement(Ss,{label:"height",value:r(t.posY),onLess:()=>n({posY:t.posY-.02}),onMore:()=>n({posY:t.posY+.02})}),a.default.createElement("div",{className:"cap-row"},a.default.createElement("span",{className:"cap-row-label"},"align"),a.default.createElement("div",{className:"cap-chips tight"},["left","center","right"].map(i=>a.default.createElement("button",{key:i,className:`cap-chip ${t.align===i?"on":""}`,onClick:()=>{n({align:i}),P.click()}},i)))),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"HIGHLIGHT")),a.default.createElement("div",{className:"cap-chips"},zh.map(i=>a.default.createElement("button",{key:i.id,className:`cap-chip ${t.highlight===i.id?"on":""}`,onClick:()=>{n({highlight:i.id}),P.click()}},i.name))),a.default.createElement("div",{className:"cap-hint"},(zh.find(i=>i.id===t.highlight)||{}).hint),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"COLOUR")),a.default.createElement(eu,{label:"text",value:t.fill,onChange:i=>n({fill:i})}),t.highlight!=="none"&&t.highlight!=="box"&&a.default.createElement(eu,{label:"spoken",value:t.active,onChange:i=>n({active:i})}),t.highlight==="box"&&a.default.createElement(eu,{label:"chip",value:t.boxColor,onChange:i=>n({boxColor:i})}),a.default.createElement(eu,{label:"outline",value:t.stroke,onChange:i=>n({stroke:i})}),a.default.createElement(Ss,{label:"outline width",value:r(t.strokeW),onLess:()=>n({strokeW:t.strokeW-.02}),onMore:()=>n({strokeW:t.strokeW+.02})}))}function A_(t){return!t||typeof t!="object"?[]:Array.isArray(t.words)&&t.words.length?t.words.map(e=>({text:String(e.word||e.text||""),start:+e.start,end:+e.end})):Array.isArray(t.segments)?t.segments.map(e=>({text:String(e.text||"").trim(),start:+e.start,end:+e.end})):[]}function S_(){return rr().filter(t=>String(t).startsWith("gsk_"))}async function Fx(t,e,n){let r=n||{},i=new FormData;i.append("file",t,"audio.wav"),i.append("model",r.model||l_),i.append("response_format","verbose_json"),i.append("timestamp_granularities[]","word"),i.append("temperature","0"),r.language&&i.append("language",r.language),r.prompt&&i.append("prompt",r.prompt);let o=await fetch(a_,{method:"POST",headers:{Authorization:`Bearer ${e}`},body:i});if(o.status===401)throw new Error("that Groq key was rejected");if(o.status===429)throw new Error("Groq rate limit \u2014 wait a minute");if(!o.ok){let s="";try{s=(await o.json()).error?.message||""}catch{}throw new Error(s||`transcription failed (${o.status})`)}return A_(await o.json())}function Jh(t){return new us({source:new os(t),formats:[Pd,Pm]})}function E_(t,e){let n=new ArrayBuffer(44+t.length*2),r=new DataView(n),i=(o,s)=>{for(let l=0;l<s.length;l++)r.setUint8(o+l,s.charCodeAt(l))};i(0,"RIFF"),r.setUint32(4,36+t.length*2,!0),i(8,"WAVEfmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,e,!0),r.setUint32(28,e*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),i(36,"data"),r.setUint32(40,t.length*2,!0);for(let o=0;o<t.length;o++){let s=Math.max(-1,Math.min(1,t[o]));r.setInt16(44+o*2,s<0?s*32768:s*32767,!0)}return n}function T_(t,e,n){let r=t[0],i=t.length,o=e/n,s=Math.floor(r.length/o),l=new Float32Array(s);for(let c=0;c<s;c++){let d=Math.floor(c*o),u=0;for(let p=0;p<i;p++)u+=t[p][d]||0;l[c]=u/i}return l}async function C_(t){let n=await Jh(t).getPrimaryAudioTrack();if(!n)throw new Error("that clip has no audio track");let r=new rl(n),i=[],o=16e3;for await(let d of r.buffers()){let u=d.buffer;o=u.sampleRate;let p=[];for(let f=0;f<u.numberOfChannels;f++)p.push(u.getChannelData(f));i.push(T_(p,o,16e3))}let s=0;for(let d of i)s+=d.length;let l=new Float32Array(s),c=0;for(let d of i)l.set(d,c),c+=d.length;return new Blob([E_(l,16e3)],{type:"audio/wav"})}async function Ow(t){let e=Jh(t),n=await e.getPrimaryVideoTrack(),r=await e.computeDuration(),i=await e.getPrimaryAudioTrack();return{duration:r,width:n?n.displayWidth:0,height:n?n.displayHeight:0,hasAudio:!!i}}async function Bw(t=2,e=12){let n=document.createElement("canvas");n.width=320,n.height=180;let r=n.getContext("2d",{alpha:!1}),i=new As({format:new eo,target:new Zn}),o=new ys(n,{codec:"avc",bitrate:4e5});i.addVideoTrack(o),await i.start();let s=Math.max(2,Math.round(t*e));for(let l=0;l<s;l++)r.fillStyle=l%2?"#101418":"#1b2026",r.fillRect(0,0,320,180),await o.add(l/e,1/e);return o.close(),await i.finalize(),new Blob([i.target.buffer],{type:"video/mp4"})}async function Fw(){let t={webcodecs:typeof VideoEncoder<"u",encodeH264:!1,decodeH264:!1,roundTrip:!1,ms:0,note:""};if(!t.webcodecs)return t.note="this browser has no WebCodecs",t;try{t.encodeH264=await zm("avc",{width:1080,height:1920})}catch(e){t.note=String(e.message||e)}try{let e=await VideoDecoder.isConfigSupported({codec:"avc1.42001f",codedWidth:1080,codedHeight:1920});t.decodeH264=!!e.supported}catch{}if(t.encodeH264){let e=Date.now();try{let n=await Bw(1,12),i=await new us({source:new os(n),formats:[Pd]}).getPrimaryVideoTrack();t.roundTrip=!!i&&n.size>1e3,t.ms=Date.now()-e}catch(n){t.note=`encode failed for real: ${String(n.message||n)}`}}return!t.note&&!t.encodeH264&&(t.note="no H.264 encoder \u2014 export unavailable, preview still works"),!t.note&&t.roundTrip&&(t.note="export will work on this device"),t}async function Dw(t,e,n,r){let i=Jh(t),o=await i.getPrimaryVideoTrack();if(!o)throw new Error("no video track in that file");let s=await i.computeDuration(),l=o.displayWidth,c=o.displayHeight,d=document.createElement("canvas");d.width=l,d.height=c;let u=d.getContext("2d",{alpha:!1}),p=new As({format:new eo,target:new Zn}),f=new ys(d,{codec:"avc",bitrate:Dm});p.addVideoTrack(f);let m=await i.getPrimaryAudioTrack(),h=null;if(m)try{let y=await m.getCodec();y&&(h=new sl(y),p.addAudioTrack(h))}catch{h=null}if(await p.start(),h){let y=new Kn(m),g=await m.getDecoderConfig();for await(let b of y.packets())await h.add(b,{decoderConfig:g});h.close()}let v=new nl(o,{poolSize:2}),x=0;for await(let y of v.canvases()){let g=y.timestamp;u.drawImage(y.canvas,0,0,l,c),Mw(u,Pw(e,g),g,n,l,c);let b=Math.max(1/60,y.duration||1/30);await f.add(g,b),x=g,r&&s&&r(Math.min(.99,g/s))}return f.close(),await p.finalize(),r&&r(1),new Blob([p.target.buffer],{type:"video/mp4"})}function __(){let[t,e]=(0,a.useState)(null),[n,r]=(0,a.useState)(null),[i,o]=(0,a.useState)([]),[s,l]=(0,a.useState)(()=>{let M=De(Mx,null);return Yh(M&&M.style)}),[c,d]=(0,a.useState)("idle"),[u,p]=(0,a.useState)(null),[f,m]=(0,a.useState)(0),[h,v]=(0,a.useState)(null),[x,y]=(0,a.useState)(!1),g=(0,a.useRef)(null),b=(0,a.useRef)(null);(0,a.useEffect)(()=>{try{localStorage.setItem(Mx,JSON.stringify({style:s}))}catch{}},[s]),(0,a.useEffect)(()=>()=>{b.current&&URL.revokeObjectURL(b.current)},[]);let w=(0,a.useMemo)(()=>Dh(i,{maxWords:s.maxWords}),[i,s.maxWords]),k=(0,a.useMemo)(()=>Dh(b_,{maxWords:s.maxWords}),[s.maxWords]),S=w.length?w:k,E=n&&n.width?n.height/n.width:16/9,T=async M=>{let O=M.target.files&&M.target.files[0];if(M.target.value="",!!O){p(null),o([]),d("probing");try{let $=await Ow(O);if($.duration>bh+.5){d("idle"),p({type:"err",text:`${Math.round($.duration)}s \u2014 trim it under ${bh}s first`});return}if(!$.hasAudio){d("idle"),p({type:"err",text:"that clip has no audio track"});return}b.current&&URL.revokeObjectURL(b.current),b.current=URL.createObjectURL(O),e(O),r($),d("picked")}catch($){d("idle"),p({type:"err",text:`couldn't read that file \u2014 ${String($.message||$)}`})}}},_=async()=>{let M=S_();if(!M.length){p({type:"err",text:"needs a Groq key (gsk_\u2026) \u2014 add one in the AI tab"});return}d("transcribing"),p(null);try{let O=await C_(t),$=n&&n.duration||0,D=await Fx(O,M[0],{language:"en",prompt:Ox}),U="turbo";m_(D,$)&&(p({type:"ok",text:"mostly music \u2014 retrying with the accurate model\u2026"}),D=await Fx(O,M[0],{model:c_,language:"en",prompt:Ox}),U="large-v3");let j=Nw(D);if(!j.length)throw new Error("no words could be made out \u2014 if it is sung, the vocals may sit too far under the mix");o(j),d("ready");let oe=D.length-j.length;p({type:"ok",text:`${j.length} words \xB7 ${U}`+(oe?` \xB7 dropped ${oe} music tag${oe===1?"":"s"}`:"")+` \xB7 ${Math.round(O.size/1024)} KB sent`}),P.success()}catch(O){d("picked"),p({type:"err",text:String(O.message||O)}),P.error()}},C=()=>{let M=g.current;M&&(M.paused?(M.play(),y(!0)):(M.pause(),y(!1)),P.click())},I=async()=>{d("exporting"),m(0),p(null);try{let M=await Dw(t,w,s,m),O=document.createElement("a");O.href=URL.createObjectURL(M),O.download=`captioned-${Date.now()}.mp4`,document.body.appendChild(O),O.click(),O.remove(),setTimeout(()=>URL.revokeObjectURL(O.href),4e3),d("ready"),p({type:"ok",text:`exported ${(M.size/1048576).toFixed(1)} MB`}),P.success()}catch(M){d("ready"),p({type:"err",text:`export failed \u2014 ${String(M.message||M)}`}),P.error()}};return a.default.createElement("div",{className:"cap"},a.default.createElement("div",{className:"cap-preview-wrap"},a.default.createElement(w_,{chunks:S,style:s,video:g,aspect:E}),!t&&a.default.createElement("div",{className:"cap-preview-tag"},"sample \xB7 5s loop")),t&&a.default.createElement("video",{ref:g,src:b.current,className:"cap-source",playsInline:!0,loop:!0,muted:!1,onEnded:()=>y(!1)}),a.default.createElement("div",{className:"cap-actions"},a.default.createElement("label",{className:"pomo-btn primary cap-file"},a.default.createElement("input",{type:"file",accept:"video/*",onChange:T}),t?"change clip":"choose clip"),t&&a.default.createElement("button",{className:"pomo-btn",onClick:C},x?"pause":"play"),t&&!w.length&&c!=="transcribing"&&a.default.createElement("button",{className:"pomo-btn primary",onClick:_},"get captions"),c==="transcribing"&&a.default.createElement("button",{className:"pomo-btn",disabled:!0},"listening\u2026"),w.length>0&&c!=="exporting"&&a.default.createElement("button",{className:"pomo-btn primary",onClick:I},"export mp4")),a.default.createElement("div",{className:"cap-meta"},n?`${n.width}\xD7${n.height} \xB7 ${n.duration.toFixed(1)}s`:`no clip yet \xB7 under ${bh}s`,w.length?` \xB7 ${w.length} lines`:""),u&&a.default.createElement("pre",{className:`cap-msg ${u.type}`},u.text),c==="exporting"&&a.default.createElement("div",{className:"cap-progress"},a.default.createElement("div",{className:"cap-progress-fill",style:{width:`${Math.round(f*100)}%`}}),a.default.createElement("span",null,Math.round(f*100),"%")),a.default.createElement(k_,{style:s,setStyle:l}),a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"DEVICE")),a.default.createElement("div",{className:"cap-actions"},a.default.createElement("button",{className:"pomo-btn",onClick:async()=>{v(await Fw())}},"check phone")),h&&a.default.createElement("pre",{className:"cap-note"},`webcodecs   ${h.webcodecs?"yes":"no"}
`,`h.264 encode ${h.encodeH264?"yes":"no"}
`,`h.264 decode ${h.decodeH264?"yes":"no"}
`,`real encode  ${h.roundTrip?`yes \xB7 ${h.ms}ms for 1s`:"no"}`,h.note?`
${h.note}`:""),a.default.createElement("pre",{className:"cap-note"},"only the audio leaves the phone (~2 MB), and only to Groq for the timings. the video is captioned here on the device."))}typeof window<"u"&&(window.__tasksh={burnCaptions:Dw,chunkWords:Dh,encodeProbeClip:Bw,probeVideo:Ow,codecSelfTest:Fw});var Ut=1e6,Ze=t=>[...t].map(Number),to=t=>Ze(t).reduce((e,n)=>e+n,0),I_=t=>Ze(t).reduce((e,n)=>e*n,1),lt=t=>{let e={};for(let n of t)e[n]=(e[n]||0)+1;return e},xh=t=>Math.max(...Object.values(lt(t))),Mn=t=>Object.keys(lt(t)).length,fe=t=>(e,n)=>n.includes(t),be=t=>(e,n)=>n===t,ul=t=>(e,n)=>{for(let r=0;r+t<=n.length;r++){let i=!0;for(let o=1;o<t;o++)if(n[r+o]!==n[r]){i=!1;break}if(i)return!0}return!1},wt=t=>(e,n)=>n.endsWith(t),zw=t=>{for(let e=0,n=t.length-1;e<n;e++,n--)if(t[e]!==t[n])return!1;return!0},Xt=t=>{let e=new Set;for(let n=0;;n++){let r=Math.pow(n,t);if(r>Ut)break;e.add(r)}return e},Tu=t=>{let e=new Set,n=1;for(;n<=Ut;)e.add(n),n*=t;return e},N_=Xt(2),P_=Xt(3),M_=Xt(4),O_=Xt(5),B_=Xt(6),F_=Xt(7),D_=Xt(8),z_=Xt(9),L_=Xt(10),U_=Xt(11),V_=Xt(13),W_=Xt(17),$_=Xt(19),H_=Tu(2),q_=Tu(3),R_=Tu(5),j_=Tu(7),G_=new Set([1,4,27,256,3125,46656,823543]),Q_=(()=>{let t=new Set,e=1,n=1;for(t.add(1);e<=Ut;)e*=n,e<=Ut&&t.add(e),n++;return t})(),K_=(()=>{let t=new Set([0,1]),e=0,n=1;for(;n<=Ut;)t.add(n),[e,n]=[n,e+n];return t})(),X_=(()=>{let t=new Set;for(let e=0;e*(e+1)<=Ut;e++)t.add(e*(e+1));return t})();function au(t){if(!au.sieve){let e=new Uint8Array(Ut+1);e[0]=e[1]=1;for(let n=2;n*n<=Ut;n++)if(!e[n])for(let r=n*n;r<=Ut;r+=n)e[r]=1;au.sieve=e}return t>=2&&!au.sieve[t]}var Y_=t=>t.length>=2&&t.every((e,n)=>n===0||e>t[n-1]),J_=t=>t.length>=2&&t.every((e,n)=>n===0||e<t[n-1]),Z_=t=>t.every((e,n)=>n===0||e>=t[n-1]),eI=t=>t.every((e,n)=>n===0||e<=t[n-1]);function tu(t,e,n){if(t.length<3)return!1;let r=[];for(let d=1;d<t.length;d++){let u=t[d]-t[d-1];if(u===0){if(n)return!1;r.push(0)}else r.push(u>0?1:-1)}let i=r.filter(d=>d!==0);if(i.length<2)return!1;let o=e,s=-e,l=0;for(;l<i.length&&i[l]===o;)l++;if(l===0)return!1;let c=i.slice(l);return c.length===0?!1:c.every(d=>d===s)}var Br=t=>!(t.length>1&&t[0]==="0"),Al=t=>t.some(e=>e.length>=2);function nu(t,e,n){let r=(i,o)=>{if(o.length===e-1){let s=t.slice(i);if(!s||!Br(s))return!1;let l=[...o,s];if(!Al(l))return!1;let c=l.map(Number),d=[...c].sort((p,f)=>p-f);for(let p=1;p<d.length;p++)if(d[p]!==d[p-1]+1)return!1;let u=c.every((p,f)=>f===0||p>c[f-1])||c.every((p,f)=>f===0||p<c[f-1]);return!(n===!0&&!u||n===!1&&u)}for(let s=i+1;s<=t.length-(e-o.length-1);s++){let l=t.slice(i,s);if(Br(l)&&r(s,[...o,l]))return!0}return!1};return r(0,[])}function Dx(t,e){for(let n=0;n<t.length;n++)for(let r=1;n+r<=t.length;r++){let i=t.slice(n,n+r);if(Br(i))for(let o of[1,-1]){let s=n+r,l=[i],c=!0;for(let d=1;d<e;d++){let u=String(Number(i)+d*o);if(s+u.length>t.length||t.slice(s,s+u.length)!==u){c=!1;break}l.push(u),s+=u.length}if(c&&!(n===0&&s===t.length)&&Al(l))return!0}}return!1}function tI(t){let e=[];for(let n=0;n<t.length;n++)for(let r=1;n+r<=t.length;r++){let i=t.slice(n,n+r);Br(i)&&e.push({v:Number(i),from:n,to:n+r,text:i})}for(let n=0;n<e.length;n++)for(let r=n+1;r<e.length;r++){let i=e[n],o=e[r];if(Math.abs(i.v-o.v)!==1||!Al([i.text,o.text])||i.to===o.from||o.to===i.from)continue;let s=i.from<=o.from&&o.to<=i.to||o.from<=i.from&&i.to<=o.to,l=i.to<o.from||o.to<i.from;if(s||l)return!0}return!1}function nI(t){for(let e=0;e<t.length;e++)for(let n=1;e+n<t.length;n++){let r=t.slice(e,e+n);if(!Br(r))continue;let i=Number(r);for(let o of[i+1,i-1]){if(o<0)continue;let s=String(o);if(t.slice(e+n,e+n+s.length)!==s)continue;let l=e+n+s.length;if(!(e===0&&l===t.length)&&Al([r,s]))return!0}}return!1}function rI(t){for(let e=1;e<t.length;e++){let n=t.slice(0,e),r=t.slice(e);if(!(!Br(n)||!Br(r)||!Al([n,r]))&&Math.abs(Number(n)-Number(r))===1)return!0}return!1}function iI(t){for(let e=1;e<t.length-1;e++)for(let n=e+1;n<t.length;n++){let r=[t.slice(0,e),t.slice(e,n),t.slice(n)];if(r.some(l=>!Br(l)))continue;let[i,o,s]=r.map(Number);if(!(i===0||o===0||s===0)&&(i+o===s||i-o===s||i*o===s||i/o===s))return!0}return!1}function zx(t,e){let n=i=>{if(i.length<3)return!1;if(e==="arith"){let o=i[1]-i[0];return o===0||o===1||o===-1?!1:i.every((s,l)=>l===0||s-i[l-1]===o)}if(i.some(o=>o<=0)||i[0]===i[1])return!1;for(let o=0;o+2<i.length;o++)if(i[o+1]*i[o+1]!==i[o]*i[o+2])return!1;return!0},r=(i,o)=>{if(i>=t.length)return n(o.map(Number));for(let s=i+1;s<=t.length;s++){let l=t.slice(i,s);if(Br(l)&&r(s,[...o,l]))return!0}return!1};return r(0,[])}var ru=t=>(e,n)=>{for(let r=0;r+t<=n.length;r++){let i=!0,o=!0;for(let s=1;s<t;s++)+n[r+s]!=+n[r+s-1]+1&&(i=!1),+n[r+s]!==+n[r+s-1]-1&&(o=!1);if(i||o)return!0}return!1},oI=(t,e)=>{for(let n=0;n+5<=e.length;n++){let r=e.slice(n,n+5);if(r==="02468"||r==="13579"||r==="86420"||r==="97531")return!0}return!1},sI={0:"0",1:"1",6:"9",8:"8",9:"6"},aI=t=>{let e="";for(let n=t.length-1;n>=0;n--){let r=sI[t[n]];if(r===void 0)return!1;e+=r}return e===t};function Lx(t,e){let n=t;if(e)n=t.filter((r,i)=>i===0||r!==t[i-1]);else for(let r=1;r<n.length;r++)if(n[r]===n[r-1])return!1;if(n.length<4)return!1;for(let r=2;r<n.length;r++)if((n[r]-n[r-1])*(n[r-1]-n[r-2])>0)return!1;return!0}var lI=t=>{let e=[],n=0;for(;n<t.length;){let r=n;for(;r<t.length&&t[r]===t[n];)r++;e.push({ch:t[n],len:r-n,at:n}),n=r}return e},cI=t=>{let e=lI(t);for(let n=0;n+1<e.length;n++)if(e[n].len>=3&&e[n+1].len>=2||e[n].len>=2&&e[n+1].len>=3)return!0;return!1},dI=t=>{for(let e=0;e+4<=t.length;e++)if(t[e]===t[e+1]&&t[e+2]===t[e+3]&&t[e]!==t[e+2])return!0;return!1},uI=t=>{for(let e=0;e+6<=t.length;e++){let n=t[e],r=t[e+2],i=t[e+4];if(t[e+1]===n&&t[e+3]===r&&t[e+5]===i&&n!==r&&r!==i&&n!==i)return!0}return!1},pI=(t,e)=>{for(let n=e;n<=t.length;n++)for(let r=0;r+n<=t.length;r++)if(zw(t.slice(r,r+n)))return!0;return!1},fI=(t,e)=>{for(let n=e;n<=t.length;n++)for(let r=0;r+n<=t.length;r++){let i=Ze(t.slice(r,r+n)).sort((s,l)=>s-l),o=!0;for(let s=1;s<i.length;s++)if(i[s]!==i[s-1]+1){o=!1;break}if(o)return!0}return!1},Ux=(t,e)=>{if(t.length<3)return!1;if(!e){let r=t[1]-t[0];return t.every((i,o)=>o===0||i-t[o-1]===r)}let n=Math.abs(t[1]-t[0]);return t.every((r,i)=>i===0||Math.abs(r-t[i-1])===n)},mI=t=>{if(t.length<2||Mn(t)!==2)return!1;for(let e=2;e<t.length;e++)if(t[e]!==t[e-2])return!1;return t[0]!==t[1]},hI={ONE_DIGIT:(t,e)=>e.length===1,TWO_DIGITS:(t,e)=>e.length===2,THREE_DIGITS:(t,e)=>e.length===3,FOUR_DIGITS:(t,e)=>e.length===4,FIVE_DIGITS:(t,e)=>e.length===5,SIX_DIGITS:(t,e)=>e.length===6,COLOSSAL:t=>t>999e3,ONE_MILLION:t=>t===1e6,DIGIT_ZERO:be("0"),DIGIT_ONE:be("1"),DIGIT_TWO:be("2"),DIGIT_THREE:be("3"),DIGIT_FOUR:be("4"),DIGIT_FIVE:be("5"),DIGIT_SIX:be("6"),DIGIT_SEVEN:be("7"),DIGIT_EIGHT:be("8"),DIGIT_NINE:be("9"),EVEN:t=>t%2===0,ODD:t=>t%2===1,LUCKY_SEVEN_DIV:t=>t>0&&t%7===0,ELEVEN:t=>t>0&&t%11===0,DOZEN:t=>t>0&&t%12===0,HARSHAD:(t,e)=>{let n=to(e);return t>0&&n>0&&t%n===0},PRIME:t=>au(t),DIVISIBLE_BY_THREE:(t,e)=>[...e].every(n=>+n%3===0),HYDROGEN:(t,e)=>lt(e)[1]===1,HELIUM:(t,e)=>lt(e)[2]===1,LITHIUM:(t,e)=>lt(e)[3]===1,BERYLLIUM:(t,e)=>lt(e)[4]===1,BORON:(t,e)=>lt(e)[5]===1,CARBON:(t,e)=>lt(e)[6]===1,NITROGEN:(t,e)=>lt(e)[7]===1,OXYGEN:(t,e)=>lt(e)[8]===1,FLUORINE:(t,e)=>lt(e)[9]===1,GHOST:(t,e)=>lt(e)[0]===1,VOID:(t,e)=>!e.includes("0"),DEEP_VOID:fe("00"),DEEP_VOID_THREE:fe("000"),DEEP_VOID_FOUR:fe("0000"),DEEP_VOID_FIVE:fe("00000"),CLEAN:wt("0"),SEMI_CLEAN:wt("5"),CENTURY:wt("00"),SEMI_CENTURY:wt("50"),QUARTER_CENTURY:wt("25"),THREE_QUARTER_CENTURY:wt("75"),MILLENNIUM:wt("000"),SEMI_MILLENNIUM:wt("500"),EPOCH:wt("0000"),SEMI_EPOCH:wt("5000"),EON:wt("00000"),SEMI_EON:wt("50000"),DOUBLE_NINE:wt("99"),TRIPLE_NINE:wt("999"),QUAD_NINE:wt("9999"),QUINT_NINE:wt("99999"),HETEROGENEOUS:(t,e)=>Mn(e)===e.length,HOMOGENEOUS:(t,e)=>e.length>=2&&Mn(e)===1,DUALITY:(t,e)=>Mn(e)===2,TRINITY:(t,e)=>Mn(e)===3,QUARTET:(t,e)=>Mn(e)===4,BINARY_SOUL:(t,e)=>[...e].every(n=>n==="0"||n==="1"),LOW_BALL:(t,e)=>[...e].every(n=>+n<=4),HIGH_ROLLER:(t,e)=>[...e].every(n=>+n>=5),FLUSH:(t,e)=>[...e].every(n=>+n%2===0)||[...e].every(n=>+n%2===1),ALTERNATOR:(t,e)=>e.length>=2&&[...e].every((n,r)=>r===0||+n%2!==+e[r-1]%2),NEIGHBORS:(t,e)=>{for(let n=1;n<e.length;n++)if(Math.abs(+e[n]-+e[n-1])===1)return!0;return!1},BLACKJACK:(t,e)=>to(e)===21,FEATHER:(t,e)=>to(e)<15,HEAVY:(t,e)=>to(e)>45,BALANCED:(t,e)=>e.length%2===0&&to(e.slice(0,e.length/2))===to(e.slice(e.length/2)),SPY:(t,e)=>t!==1&&t!==2&&to(e)===I_(e),EQUATION:(t,e)=>iI(e),LIFTOFF:(t,e)=>+e[0]>+e[e.length-1],GROUNDED:(t,e)=>+e[0]<+e[e.length-1],EQUILIBRIUM:(t,e)=>e.length>=2&&e[0]===e[e.length-1],SANDWICH:(t,e)=>e.length>=2&&e[0]===e[e.length-1]&&Mn(e)>1,GAP_ONE:(t,e)=>Math.abs(+e[0]-+e[e.length-1])===1,BOOKENDS:(t,e)=>e.length>=4&&e.slice(0,2)===e.slice(-2),MIRROR_BOOKENDS:(t,e)=>e.length>=4&&e[0]===e[e.length-1]&&e[1]===e[e.length-2],PAIRED_BOOKENDS:(t,e)=>e.length>=4&&e[0]===e[1]&&e[e.length-1]===e[e.length-2]&&e[0]!==e[e.length-1],PAIR:(t,e)=>xh(e)>=2,TWO_PAIR:(t,e)=>Object.values(lt(e)).filter(n=>n>=2).length>=2,THREE_PAIR:(t,e)=>Object.values(lt(e)).filter(n=>n>=2).length>=3,TRIPS:(t,e)=>Object.values(lt(e)).some(n=>n===3),QUADS:(t,e)=>xh(e)>=4,FIVE_OF_A_KIND:(t,e)=>xh(e)>=5,BOAT:(t,e)=>{let n=Object.values(lt(e)).sort((r,i)=>i-r);return n[0]>=3&&n[1]>=2},SNAKE_EYES:(t,e)=>{let n=lt(e);return n[1]===2&&Object.entries(n).every(([r,i])=>r==="1"||i<2)},CONTIGUOUS_PAIR:ul(2),CONTIGUOUS_TRIPS:ul(3),CONTIGUOUS_QUADS:ul(4),CONTIGUOUS_FIVES:ul(5),CONTIGUOUS_SIXES:ul(6),CONTIGUOUS_TWO_PAIR:(t,e)=>dI(e),CONTIGUOUS_THREE_PAIR:(t,e)=>uI(e),CONTIGUOUS_BOAT:(t,e)=>cI(e),FRAMED_PAIR:(t,e)=>e.length===4&&e[1]===e[2]&&e[1]!==e[0]&&e[1]!==e[3],FRAMED_TRIPLE:(t,e)=>e.length===5&&e[1]===e[2]&&e[2]===e[3]&&e[1]!==e[0]&&e[1]!==e[4],FRAMED_QUAD:(t,e)=>e.length===6&&e[1]===e[2]&&e[2]===e[3]&&e[3]===e[4]&&e[1]!==e[0]&&e[1]!==e[5],FRAMED_DOUBLE:(t,e)=>e.length===6&&e[1]===e[2]&&e[3]===e[4]&&e[1]!==e[3]&&e[0]!==e[1]&&e[5]!==e[4],FIREFLY:(t,e)=>{if(e.length<4)return!1;let n=Object.values(lt(e));return n.length===2&&n.includes(1)},STEPS:(t,e)=>e.length>=2&&Z_(Ze(e))&&Mn(e)>1,SLOPES:(t,e)=>e.length>=2&&eI(Ze(e))&&Mn(e)>1,ASCENSION:(t,e)=>Y_(Ze(e)),DECAY:(t,e)=>J_(Ze(e)),MOUNTAIN:(t,e)=>tu(Ze(e),1,!0),VALLEY:(t,e)=>tu(Ze(e),-1,!0),MESA:(t,e)=>tu(Ze(e),1,!1),CANYON:(t,e)=>tu(Ze(e),-1,!1),HILLS:(t,e)=>Lx(Ze(e),!1),DUNES:(t,e)=>Lx(Ze(e),!0),TURTLE:(t,e)=>e.length>=2&&Ze(e).every((n,r)=>r===0||Math.abs(n-Ze(e)[r-1])<=1),CASCADE:(t,e)=>e.length>=2&&Ze(e).every((n,r)=>r===0||n===+e[r-1]+1),WATERFALL:(t,e)=>e.length>=2&&Ze(e).every((n,r)=>r===0||n===+e[r-1]-1),ZIPPER:(t,e)=>mI(e),EVEN_SPACING:(t,e)=>Ux(Ze(e),!1),EVEN_SPACING_ABS:(t,e)=>Ux(Ze(e),!0),HOPSCOTCH:(t,e)=>{if(e.length<3||Mn(e)<2)return!1;for(let n=0;n+3<=e.length;n++)if(e[n]===e[n+2]&&!(n+4<e.length&&e[n+4]===e[n]||n>=2&&e[n-2]===e[n]))return!0;return!1},DOUBLE_HOP:(t,e)=>{if(e.length<5||Mn(e)<2)return!1;for(let n=0;n+5<=e.length;n++)if(e[n+2]===e[n]&&e[n+4]===e[n])return!0;return!1},SEQUENCE_3:ru(3),SEQUENCE_4:ru(4),SEQUENCE_6:ru(6),STRAIGHT:ru(5),ROYAL_FLUSH:fe("56789"),STRAIGHT_FLUSH:oI,MINI_SCRAMBLE:(t,e)=>fI(e,3),SCRAMBLE:(t,e)=>{let n=Ze(e).sort((r,i)=>r-i);if(n.length<2)return!1;for(let r=1;r<n.length;r++)if(n[r]!==n[r-1]+1)return!1;return!0},ARITHMETIC:(t,e)=>zx(e,"arith"),GEOMETRIC:(t,e)=>zx(e,"geom"),CONSEC_PAIR_EXACT:(t,e)=>rI(e),CONSEC_PAIR_ADJACENT:(t,e)=>nI(e),CONSEC_PAIR_NEARBY:(t,e)=>tI(e),CONSEC_TRIPLE_EXACT:(t,e)=>nu(e,3,!0),CONSEC_TRIPLE_SCRAMBLED:(t,e)=>nu(e,3,!1),CONSEC_TRIPLE_CONTAINS:(t,e)=>Dx(e,3),CONSEC_QUAD_EXACT:(t,e)=>nu(e,4,!0),CONSEC_QUAD_SCRAMBLED:(t,e)=>nu(e,4,!1),CONSEC_QUAD_CONTAINS:(t,e)=>Dx(e,4),PALINDROME:(t,e)=>zw(e),POCKET_MIRROR:(t,e)=>pI(e,4),STROBOGRAMMATIC:(t,e)=>aI(e),ECHO:(t,e)=>e.length%2===0&&e.slice(0,e.length/2)===e.slice(e.length/2),RHYME:(t,e)=>{if(e.length<4)return!1;for(let n=2;n<=Math.floor(e.length/2);n++)for(let r=0;r+n<=e.length;r++)if(e.indexOf(e.slice(r,r+n),r+n)!==-1)return!0;return!1},MINI_ECHO:(t,e)=>{for(let n=0;n+4<=e.length;n++)if(e.slice(n,n+2)===e.slice(n+2,n+4))return!0;return!1},SQUARE:t=>N_.has(t),CUBE:t=>P_.has(t),FOURTH_POWER:t=>M_.has(t),FIFTH_POWER:t=>O_.has(t),SIXTH_POWER:t=>B_.has(t),SEVENTH_POWER:t=>F_.has(t),EIGHTH_POWER:t=>D_.has(t),NINTH_POWER:t=>z_.has(t),TENTH_POWER:t=>L_.has(t),ELEVENTH_POWER:t=>U_.has(t),THIRTEENTH_POWER:t=>V_.has(t),SEVENTEENTH_POWER:t=>W_.has(t),NINETEENTH_POWER:t=>$_.has(t),POWER_OF_TWO:t=>H_.has(t),POWER_OF_THREE:t=>q_.has(t),POWER_OF_FIVE:t=>R_.has(t),POWER_OF_SEVEN:t=>j_.has(t),OUROBOROS:t=>G_.has(t),FACTORIAL:t=>Q_.has(t),FIBONACCI:t=>K_.has(t),PRONIC:t=>X_.has(t),LUCKY_7:fe("7"),JACKPOT:fe("777"),JACKPOT_FOUR:fe("7777"),JACKPOT_FIVE:fe("77777"),JACKPOT_SIX:fe("777777"),JACKPOT_EXACT:be("777"),DEVIL:fe("666"),DEVIL_EXACT:be("666"),INFERNAL:be("666666"),NICE:fe("69"),VERY_NICE:fe("6969"),NICE_EXACT:be("69"),VERY_VERY_NICE:be("696969"),MEANING:fe("42"),DEEPER_MEANING:fe("4242"),MEANING_EXACT:be("42"),UNIVERSAL_ANSWER:be("424242"),BOTANIST:fe("420"),BOTANIST_EXACT:be("420"),HOTBOX:be("420420"),LEET:fe("1337"),LEET_EXACT:be("1337"),SIXTY_SEVEN:fe("67"),SIXTY_SEVEN_DOUBLE:fe("6767"),SIXTY_SEVEN_EXACT:be("67"),BRAINROT:be("676767"),EIGHTY_SIX:fe("86"),EIGHTY_SIX_EXACT:be("86"),BIG_BROTHER:fe("1984"),BIG_BROTHER_EXACT:be("1984"),ERROR:fe("404"),ERROR_EXACT:be("404"),ORIENTATION:fe("101"),ORIENTATION_EXACT:be("101"),EMERGENCY:fe("911"),EMERGENCY_EXACT:be("911"),MAYDAY:be("911911"),CALENDAR:fe("365"),CALENDAR_EXACT:be("365"),GROUNDHOG_DAY:be("365365"),ALWAYS:(t,e)=>e==="247365"||e==="365247",SECRET_AGENT:fe("007"),HELL:fe("7734"),EXACT_HELL:be("7734"),HELLO:fe("07734"),BOOB_8008:fe("8008"),BOOB_58008:fe("58008"),BOOB_80085:fe("80085"),EXACT_BOOB:(t,e)=>e==="8008"||e==="58008",EXACT_BOOB_80085:be("80085"),ULTIMEME:(t,e)=>e.includes("69")&&e.includes("420"),ULTIMEME_EXACT:(t,e)=>e==="69420"||e==="42069",FOOTBALL_17776:be("17776"),FULL_DAY:be("86400"),PI:(t,e)=>["314","3141","31415","314159"].includes(e),PI_CONTAINS_3:fe("314"),PI_CONTAINS_4:fe("3141"),PI_CONTAINS_5:fe("31415"),E:(t,e)=>["271","2718","27182","271828"].includes(e),E_CONTAINS_3:fe("271"),E_CONTAINS_4:fe("2718"),E_CONTAINS_5:fe("27182"),TAU:(t,e)=>["6283","62831","628318"].includes(e),TAU_SLICE_4:fe("6283"),TAU_SLICE_5:fe("62831"),GOLDEN_RATIO:(t,e)=>["1618","16180","161803"].includes(e)},gI=[["BIG_BROTHER_EXACT","Orwellian","\u{1F441}\uFE0F","m",100000100,1,"BIG_BROTHER",'exactly "1984"'],["BOTANIST_EXACT","Exact Botanist","\u{1F33F}","m",100000100,1,"BOTANIST",'exactly "420"'],["BRAINROT","Brainrot","\u{1FAE0}","m",100000100,1,"SIXTY_SEVEN",'exactly "676767"'],["CALENDAR_EXACT","Exact Calendar","\u{1F4C5}","m",100000100,1,"CALENDAR",'exactly "365"'],["DEVIL_EXACT","Exact Devil","\u{1F608}","m",100000100,1,"DEVIL",'exactly "666"'],["DIGIT_EIGHT","Eight","8\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number eight"],["DIGIT_FIVE","Five","5\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number five"],["DIGIT_FOUR","Four","4\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number four"],["DIGIT_NINE","Nine","9\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number nine"],["DIGIT_ONE","One","1\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number one"],["DIGIT_SEVEN","Seven","7\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number seven"],["DIGIT_SIX","Six","6\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number six"],["DIGIT_THREE","Three","3\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number three"],["DIGIT_TWO","Two","2\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number two"],["DIGIT_ZERO","Zero","0\uFE0F\u20E3","m",100000100,1,"SINGLE_DIGIT","the number zero"],["EIGHTY_SIX_EXACT","Exact Eighty-Six","\u{1F37D}\uFE0F","m",100000100,1,"EIGHTY_SIX",'exactly "86"'],["EMERGENCY_EXACT","Exact Emergency","\u{1F691}","m",100000100,1,"EMERGENCY",'exactly "911"'],["ERROR_EXACT","Not Found","\u{1F6AB}","m",100000100,1,"ERROR",'exactly "404"'],["EXACT_BOOB_80085","Exact 80085","\u{1F48E}","m",100000100,1,"BOOB",'exactly "80085"'],["EXACT_HELL","Exact Hell","\u{1F479}","m",100000100,1,"HELL",'exactly "7734"'],["FOOTBALL_17776","17776","\u{1F3C8}","m",100000100,1,"",'exactly "17776"'],["FULL_DAY","Full Day","\u23F3","m",100000100,1,"",'exactly "86400", the number of seconds in a day'],["GROUNDHOG_DAY","Groundhog Day","\u{1F4C5}","m",100000100,1,"CALENDAR",'exactly "365365"'],["HOTBOX","Hotbox","\u{1F33F}","m",100000100,1,"BOTANIST",'exactly "420420"'],["INFERNAL","Infernal","\u{1F531}","m",100000100,1,"DEVIL",'exactly "666666"'],["JACKPOT_EXACT","Exact Jackpot","\u{1F4B0}","m",100000100,1,"JACKPOT",'exactly "777"'],["JACKPOT_SIX","Jackpot Six","\u{1F3E6}","m",100000100,1,"JACKPOT","contains six 7s in a row"],["LEET_EXACT","Exact Leet","\u{1F4BB}","m",100000100,1,"LEET",'exactly "1337"'],["MAYDAY","Mayday","\u{1F691}","m",100000100,1,"EMERGENCY",'exactly "911911"'],["MEANING_EXACT","Exact Meaning","\u{1F30C}","m",100000100,1,"BOTANIST",'exactly "42"'],["NICE_EXACT","Exact Nice","\u{1F60F}","m",100000100,1,"NICE",'exactly "69"'],["ONE_MILLION","One Million","\u{1F410}","m",100000100,1,"","the number one million"],["ORIENTATION_EXACT","Exact Orientation","\u{1F9ED}","m",100000100,1,"ORIENTATION",'exactly "101"'],["SIXTY_SEVEN_EXACT","Exact Six-Seven","\u{1FAE0}","m",100000100,1,"SIXTY_SEVEN",'exactly "67"'],["UNIVERSAL_ANSWER","Universal Answer","\u{1F30C}","m",100000100,1,"MEANING",'exactly "424242"'],["VERY_VERY_NICE","Very Very Nice","\u{1F60F}","m",100000100,1,"NICE",'exactly "696969"'],["ALWAYS","Always","\u267E\uFE0F","m",50000050,2,"CALENDAR",'exactly "247365" or "365247" (24/7, 365)'],["EXACT_BOOB","Exact Boob","\u{1F348}","m",50000050,2,"BOOB",'exactly "8008" or "58008"'],["ULTIMEME_EXACT","Funny Number","\u{1F602}","m",50000050,2,"ULTIMEME",'exactly "69420" or "42069"'],["GOLDEN_RATIO","Golden Ratio","\u{1F41A}","m",33333367,3,"","exactly \u03C6 (1618, 16180, or 161803)"],["NINETEENTH_POWER","19th Power","\u{1F311}","m",33333367,3,"POWER","a perfect nineteenth power (n\xB9\u2079)"],["SEVENTEENTH_POWER","17th Power","\u{1F9D9}","m",33333367,3,"POWER","a perfect seventeenth power (n\xB9\u2077)"],["TAU","Tau","\u{1F300}","m",33333367,3,"TAU","exactly \u03C4 (6283, 62831, or 628318)"],["THIRTEENTH_POWER","13th Power","\u{1F480}","m",33333367,3,"POWER","a perfect thirteenth power (n\xB9\xB3)"],["CONSEC_QUAD_EXACT","4 Consecutive Numbers","\u26D3\uFE0F","m",25000025,4,"CONSECUTIVE","the entire number splits into four consecutive integers in order"],["E","Euler's Number","\u{1F4C8}","m",25000025,4,"E","the number e (271, 2718, 27182, or 271828)"],["ELEVENTH_POWER","11th Power","\u{1F55A}","m",25000025,4,"POWER","a perfect eleventh power (n\xB9\xB9)"],["PI","Pi","\u{1F967}","m",25000025,4,"PI","exactly \u03C0 (314, 3141, 31415, or 314159)"],["TENTH_POWER","10th Power","\u{1F51F}","m",25000025,4,"POWER","a perfect tenth power (n\xB9\u2070)"],["NINTH_POWER","9th Power","\u2601\uFE0F","m",20000020,5,"POWER","a perfect ninth power (n\u2079)"],["EIGHTH_POWER","8th Power","\u{1F3B1}","m",16666683,6,"POWER","a perfect eighth power (n\u2078)"],["OUROBOROS","Ouroboros","\u{1F40D}","m",14285729,7,"POWER","a number raised to itself: n\u207F (1\xB9, 2\xB2, ... 7\u2077)"],["POWER_OF_SEVEN","Power of Seven","7\uFE0F\u20E3","m",12500013,8,"","a power of 7 (7\u207F)"],["SEVENTH_POWER","7th Power","\u{1F308}","m",12500013,8,"POWER","a perfect seventh power (n\u2077)"],["FACTORIAL","Factorial","\u2757","m",11111122,9,"","a factorial number (n!)"],["HELLO","Hello","\u{1F44B}","m",11111122,9,"",'contains "07734" (spells HELLO upside-down)'],["POWER_OF_FIVE","Power of Five","5\uFE0F\u20E3","m",11111122,9,"","a power of 5 (5\u207F)"],["SEQUENCE_6","Sequence (6)","\u{1F522}","m",11111122,9,"PROGRESSION","contains a sequence of 6 consecutive digits"],["CONTIGUOUS_SIXES","Contiguous Sixes","\u2796\u2796\u2796\u2796","m",10000010,10,"CONTIGUOUS_RUN","six identical consecutive digits"],["DEEP_VOID_FIVE","Deep Void (5)","\u26AB","m",10000010,10,"VOID_DEPTH",'contains "00000"'],["EON","Eon","\u{1F5FF}","m",10000010,10,"VOID_DEPTH","ends in five zeros"],["ONE_DIGIT","Single Digit","\u261D\uFE0F","m",10000010,10,"SINGLE_DIGIT","has exactly one digit"],["QUINT_NINE","Quint Nine","\u{1F973}","m",10000010,10,"NINE_ENDING","ends in 99999"],["SEMI_EON","Semi-Eon","\u{1F9B4}","m",10000010,10,"VOID_DEPTH",'ends in "50000"'],["SIXTH_POWER","6th Power","\u{1F3B2}","a",9090918,11,"POWER","a perfect sixth power (n\u2076)"],["POWER_OF_THREE","Power of Three","\u{1F53A}","a",7692315,13,"","a power of 3 (3\u207F)"],["FIFTH_POWER","5th Power","\u{1F590}\uFE0F","a",6250006,16,"POWER","a perfect fifth power (n\u2075)"],["JACKPOT_FIVE","Jackpot Five","\u{1F4B0}\u{1F4B0}\u{1F4B0}","a",5263163,19,"JACKPOT","contains five 7s in a row"],["BOOB_58008","58008","\u{1F520}","a",5000005,20,"BOOB",'contains "58008" (spells BOOBS upside-down)'],["BOOB_80085","80085","\u{1F171}\uFE0F","a",5000005,20,"BOOB",'contains "80085" (spells BOOBS)'],["E_CONTAINS_5","E Slice (5)","\u{1F4C8}","a",5000005,20,"E",'contains "27182"'],["PI_CONTAINS_5","Pi Slice (5)","\u{1F967}","a",5000005,20,"PI",'contains "31415"'],["POWER_OF_TWO","Power of Two","\u{1F4BE}","a",5000005,20,"","a power of 2 (2\u207F)"],["ROYAL_FLUSH","Royal Flush","\u{1F451}","a",5000005,20,"STRAIGHT","contains 56789 \u2014 the highest possible straight"],["TAU_SLICE_5","Tau Slice (5)","\u{1F300}","a",5000005,20,"TAU",'contains "62831"'],["CASCADE","Cascade","\u{1F30A}","a",3333337,30,"PROGRESSION","every digit increases by exactly 1 from the previous"],["FIBONACCI","Fibonacci Number","\u{1F41A}","a",3333337,30,"","part of the golden ratio sequence found in nature"],["FOURTH_POWER","4th Power","\u{1F4E6}","a",3125003,32,"POWER","a perfect fourth power (n\u2074)"],["WATERFALL","Waterfall","\u{1F6BF}","a",2857146,35,"PROGRESSION","every digit decreases by exactly 1 from the previous"],["CONSEC_QUAD_CONTAINS","4 Consecutive Numbers (Contains)","\u{1F517}","a",2631582,38,"CONSECUTIVE","contains four adjacent consecutive integers"],["CONSEC_QUAD_SCRAMBLED","4 Consecutive Numbers (Scrambled)","\u{1F500}","a",2272730,44,"CONSECUTIVE","the entire number splits into four consecutive integers, but not in order"],["HOMOGENEOUS","Homogeneous","\u{1F95B}","a",2222224,45,"","all digits are the same"],["ULTIMEME","Funny Numbers","\u{1F602}","a",1666668,60,"ULTIMEME",'contains both "69" and "420"'],["BINARY_SOUL","Binary Soul","\u{1F916}","a",1538463,65,"","only 0s and 1s"],["STRAIGHT_FLUSH","Straight Flush","\u{1F0CF}","a",1449277,69,"STRAIGHT","contains 5 consecutive same-parity digits (02468, 13579, or their reverse)"],["TWO_DIGITS","Two Digits","\u270C\uFE0F","a",1111112,90,"","has exactly two digits"],["SPY","Spy Number","\u{1F575}\uFE0F","a",1030929,97,"","the sum of its digits equals the product of its digits"],["EPOCH","Epoch","\u{1F3DB}\uFE0F","a",1000001,100,"VOID_DEPTH","ends in four zeros"],["QUAD_NINE","Quad Nine","\u{1F38A}","a",1000001,100,"NINE_ENDING","ends in 9999"],["SEMI_EPOCH","Semi-Epoch","\u231B","a",1000001,100,"VOID_DEPTH",'ends in "5000"'],["CUBE","3rd Power","\u{1F9CA}","e",990100,101,"POWER","a perfect cube (n\xB3)"],["EVEN_SPACING","Even Spacing","\u{1F4CF}","e",862070,116,"PROGRESSION","all digits are evenly spaced in an arithmetic sequence"],["CONSEC_TRIPLE_EXACT","3 Consecutive Numbers","\u26D3\uFE0F","e",555556,180,"CONSECUTIVE","the entire number splits into three consecutive integers in order"],["CONTIGUOUS_FIVES","Contiguous Fives","\u2796\u2796\u2796","e",552487,181,"CONTIGUOUS_RUN","five identical consecutive digits"],["DEEP_VOID_FOUR","Deep Void (4)","\u{1F30C}","e",552487,181,"VOID_DEPTH",'contains "0000"'],["STROBOGRAMMATIC","Strobogrammatic","\u{1F643}","e",502513,199,"","looks the same when rotated 180 degrees"],["STRAIGHT","Straight","\u{1F4CF}","e",454546,220,"STRAIGHT","contains a sequence of 5 consecutive digits (ascending or descending)"],["JACKPOT_FOUR","Jackpot Four","\u{1F4B0}\u{1F4B0}","e",357143,280,"JACKPOT","contains four 7s in a row"],["DEEPER_MEANING","Deeper Meaning","\u{1F30C}","e",334448,299,"MEANING",'contains "4242"'],["SIXTY_SEVEN_DOUBLE","6767","\u{1FAE0}","e",334448,299,"SIXTY_SEVEN",'contains "6767"'],["VERY_NICE","Very Nice","\u{1F975}","e",334448,299,"NICE",'contains "6969"'],["BIG_BROTHER","Big Brother","\u{1F441}\uFE0F","e",333334,300,"BIG_BROTHER",'contains "1984"'],["BOOB_8008","8008","\u{1F522}","e",333334,300,"BOOB",'contains "8008" (spells BOOB upside-down)'],["E_CONTAINS_4","E Slice (4)","\u{1F4C8}","e",333334,300,"E",'contains "2718"'],["HELL","Hell","\u{1F525}","e",333334,300,"HELL",'contains "7734" (spells HELL upside-down)'],["LEET","Leet","\u{1F4BB}","e",333334,300,"LEET",'contains "1337"'],["PI_CONTAINS_4","Pi Slice (4)","\u{1F967}","e",333334,300,"PI",'contains "3141"'],["TAU_SLICE_4","Tau Slice (4)","\u{1F300}","e",333334,300,"TAU",'contains "6283"'],["CONSEC_TRIPLE_SCRAMBLED","3 Consecutive Numbers (Scrambled)","\u{1F500}","e",277778,360,"CONSECUTIVE","the entire number splits into three consecutive integers, but not in order"],["ZIPPER","Zipper","\u{1F910}","e",246914,405,"","two digits alternating perfectly"],["ASCENSION","Ascension","\u{1F4C8}","e",219298,456,"MONOTONIC","every digit is strictly larger than the previous"],["GEOMETRIC","Crescendo","\u{1F50A}","e",208334,480,"PROGRESSION","splits into three or more numbers with a constant ratio"],["FIVE_OF_A_KIND","Five of a Kind","\u{1F0CF}","e",198020,505,"OF_A_KIND","contains five identical digits"],["CONSEC_TRIPLE_CONTAINS","3 Consecutive Numbers (Contains)","\u{1F517}","e",157978,633,"CONSECUTIVE","contains three adjacent consecutive integers"],["CONTIGUOUS_THREE_PAIR","Contiguous Three Pair","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}\u{1F46F}","e",154321,648,"PAIRS","contains three adjacent contiguous pairs"],["FRAMED_PAIR","Framed Pair","\u{1F5BC}\uFE0F","e",137174,729,"PAIRS","a 4-digit number where the middle two digits match each other but differ from both end digits"],["FRAMED_QUAD","Framed Quad","\u{1FA9F}","e",137174,729,"OF_A_KIND","four of a kind in the middle, bookended by different digits"],["FRAMED_TRIPLE","Framed Triple","\u{1F5BC}\uFE0F\u{1F5BC}\uFE0F","e",137174,729,"OF_A_KIND","a triple in the middle, bookended by different digits"],["DECAY","Decay","\u{1F4C9}","e",119474,837,"MONOTONIC","every digit is strictly smaller than the previous"],["THREE_DIGITS","Three Digits","\u{1F91F}","e",111111,900,"","has exactly three digits"],["ECHO","Echo","\u{1F4E3}","e",100100,999,"","the first half repeats as the second half"],["COLOSSAL","Colossal","\u{1FAA8}","e",1e5,1e3,"","a number greater than 999,000"],["MILLENNIUM","Millennium","\u{1F5D3}\uFE0F","e",1e5,1e3,"VOID_DEPTH","ends in triple zeros"],["PRONIC","Pronic Number","\u{1F9EE}","e",1e5,1e3,"","the product of two consecutive integers (n * n+1)"],["SEMI_MILLENNIUM","Semi-Millennium","\u{1F4DC}","e",1e5,1e3,"VOID_DEPTH",'ends in "500"'],["TRIPLE_NINE","Triple Nine","\u{1F389}","e",1e5,1e3,"NINE_ENDING","ends in 999"],["SQUARE","2nd Power","\u{1F7E6}","r",99900,1001,"POWER","a perfect square (n\xB2)"],["EVEN_SPACING_ABS","Even Spacing (Absolute)","\u{1F4D0}","r",90992,1099,"PROGRESSION","all digits have the same absolute spacing (e.g., \xB12 each time)"],["FIREFLY","Firefly","\u{1FAB2}","r",82237,1216,"DUALITY","one unique digit among identical others"],["CONSEC_PAIR_EXACT","2 Consecutive Numbers","\u{1F517}","r",50505,1980,"CONSECUTIVE","the entire number splits into two consecutive integers"],["PALINDROME","Palindrome","\u{1FA9E}","r",50025,1999,"PALINDROME","reads the same forwards and backwards"],["CONTIGUOUS_QUADS","Contiguous Quads","\u2796\u2796","r",37023,2701,"CONTIGUOUS_RUN","four identical consecutive digits"],["DEEP_VOID_THREE","Deep Void (3)","\u{1F311}","r",37023,2701,"VOID_DEPTH",'contains "000"'],["TURTLE","Turtle","\u{1F422}","r",36049,2774,"PROGRESSION","all consecutive digits differ by at most 1"],["SECRET_AGENT","Secret Agent","\u{1F576}\uFE0F","r",34614,2889,"",'contains "007"'],["HEAVY","Heavy","\u{1F9F1}","r",33300,3003,"","the sum of its digits exceeds 45"],["CONTIGUOUS_BOAT","Contiguous Full House","\u{1F3F0}","r",30111,3321,"BOAT","contains a contiguous set of three adjacent to a contiguous set of two"],["DEVIL","Devil","\u{1F608}","r",27027,3700,"DEVIL",'contains "666"'],["JACKPOT","Jackpot","\u{1F4B0}","r",27027,3700,"JACKPOT",'contains "777"'],["SEQUENCE_4","Sequence (4)","\u{1F522}","r",25907,3860,"PROGRESSION","contains a sequence of 4 consecutive digits"],["ERROR","Error 404","\u{1F6AB}","r",25132,3979,"ERROR",'contains "404"'],["ORIENTATION","Orientation","\u{1F9ED}","r",25132,3979,"ORIENTATION",'contains "101" (intro course number)'],["BOTANIST","Botanist","\u{1F33F}","r",25006,3999,"BOTANIST",'contains "420"'],["CALENDAR","Calendar","\u{1F4C5}","r",25006,3999,"CALENDAR",'contains "365" (days in a year)'],["E_CONTAINS_3","E Slice (3)","\u{1F4C8}","r",25006,3999,"E",'contains "271"'],["EMERGENCY","Emergency","\u{1F691}","r",25006,3999,"EMERGENCY",'contains "911"'],["PI_CONTAINS_3","Pi Slice (3)","\u{1F967}","r",25006,3999,"PI",'contains "314"'],["DIVISIBLE_BY_THREE","Divisible by Three","\u{1F53A}","r",24414,4096,"","every digit is divisible by 3"],["SCRAMBLE","Scramble","\u{1F500}","r",22722,4401,"PROGRESSION","all digits form a consecutive sequence when sorted"],["DUALITY","Duality","\u262F\uFE0F","r",21654,4618,"DUALITY","uses exactly two different digits"],["STEPS","Steps","\u{1FA9C}","r",20202,4950,"MONOTONIC","digits never decrease"],["ARITHMETIC","Metronome","\u{1F3BC}","r",17784,5623,"PROGRESSION","splits into three or more numbers with a constant difference"],["FRAMED_DOUBLE","Framed Double","\u{1F5BC}\uFE0F\u{1F5BC}\uFE0F\u{1F5BC}\uFE0F","r",15242,6561,"PAIRS","two pairs in the middle, bookended by different digits"],["SLOPES","Slopes","\u{1F6DD}","r",12582,7948,"MONOTONIC","digits never increase"],["PAIRED_BOOKENDS","Paired Bookends","\u{1F450}","r",11122,8991,"BOOKENDS","starts with a pair and ends with a different pair"],["FOUR_DIGITS","Four Digits","\u{1F340}","r",11111,9e3,"","has exactly four digits"],["THREE_PAIR","Three Pair","\u{1F46F}\u200D\u2640\uFE0F\u{1F46F}","r",10288,9720,"PAIRS","contains three distinct pairs of matching digits"],["BOOKENDS","Bookends","\u{1F4DA}","r",10010,9990,"BOOKENDS","the first two digits match the last two"],["MIRROR_BOOKENDS","Mirror Bookends","\u{1F4D6}","r",10010,9990,"BOOKENDS","first two digits are reversed as the last two"],["CENTURY","Century","\u{1F4AF}","r",1e4,1e4,"VOID_DEPTH","ends in double zeros"],["DOUBLE_NINE","Double Nine","\u{1F388}","r",1e4,1e4,"NINE_ENDING","ends in 99"],["QUARTER_CENTURY","Quarter-Century","\u{1FA99}","r",1e4,1e4,"",'ends in "25"'],["SEMI_CENTURY","Semi-Century","\u{1F5D3}\uFE0F","r",1e4,1e4,"VOID_DEPTH",'ends in "50"'],["THREE_QUARTER_CENTURY","Three-Quarter Century","\u{1F570}\uFE0F","r",1e4,1e4,"",'ends in "75"'],["QUADS","Four of a Kind","\u{1F340}","u",8436,11854,"OF_A_KIND","contains four identical digits"],["EQUATION","Equation","\u{1F7F0}","u",7720,12954,"","insert one of + \u2212 \xD7 \xF7 and an equals sign to make a true equation"],["LOW_BALL","Low Ball","\u{1F4C9}","u",6400,15626,"","contains only digits from 0 to 4"],["MOUNTAIN","Mountain","\u{1F3D4}\uFE0F","u",5885,16992,"PEAK","digits ascend to a peak and then descend"],["DOUBLE_HOP","Double Hop","\u{1F998}\u{1F998}","u",5321,18793,"HOPSCOTCH","a digit appears at every other position (3 times)"],["HIGH_ROLLER","High Roller","\u{1F911}","u",5120,19530,"","contains only digits from 5 to 9"],["VALLEY","Valley","\u{1F3DC}\uFE0F","u",4199,23817,"PEAK","digits descend to a trough and then ascend"],["CONTIGUOUS_TWO_PAIR","Contiguous Two Pair","\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}","u",3957,25272,"PAIRS","contains two adjacent contiguous pairs"],["MINI_ECHO","Mini Echo","\u{1F502}","u",3704,27001,"REPEAT","contains an adjacent 2-digit repeat"],["ALTERNATOR","Alternator","\u26A1","u",2845,35145,"","digits strictly alternate between even and odd"],["FLUSH","Flush","\u{1F3A8}","u",2845,35155,"","all digits are either all even or all odd"],["CONTIGUOUS_TRIPS","Contiguous Trips","\u2796","u",2784,35920,"CONTIGUOUS_RUN","three identical consecutive digits"],["DEEP_VOID","Deep Void","\u{1F573}\uFE0F","u",2784,35920,"VOID_DEPTH",'contains "00"'],["FEATHER","Feather","\u{1FAB6}","u",2667,37501,"","the sum of its digits is less than 15"],["BLACKJACK","Blackjack","\u2660\uFE0F","u",2521,39662,"","digits sum exactly to 21"],["BOAT","Full House","\u{1F3E0}","u",2397,41715,"BOAT","contains a set of three and a set of two"],["POCKET_MIRROR","Pocket Mirror","\u{1FA9E}","u",2124,47089,"PALINDROME","contains a palindrome of 4 or more digits"],["SNAKE_EYES","Snake Eyes","\u{1F3B2}","u",2121,47139,"","contains a single pair of ones and no other pairs"],["EIGHTY_SIX","Eighty-Six","\u{1F37D}\uFE0F","u",2024,49401,"EIGHTY_SIX",'contains "86" (restaurant slang for "out of")'],["MEANING","Meaning of Life","\u{1F30C}","u",2024,49401,"BOTANIST",'contains "42"'],["NICE","Nice","\u{1F60F}","u",2024,49401,"NICE","contains the number 69"],["SIXTY_SEVEN","Six-Seven","\u{1FAE0}","u",2024,49401,"SIXTY_SEVEN",'contains "67"'],["BALANCED","Balanced","\u2696\uFE0F","u",1959,51036,"","sum of first half of digits equals sum of second half"],["RHYME","Rhyme","\u{1F3B6}","u",1872,53407,"REPEAT","contains the same 2+ digit substring twice"],["SEQUENCE_3","Sequence (3)","\u{1F522}","u",1716,58287,"PROGRESSION","contains a sequence of 3 consecutive digits"],["CONSEC_PAIR_ADJACENT","2 Consecutive Numbers (Contains)","\u{1F517}","u",1659,60270,"CONSECUTIVE","contains two adjacent substrings that are consecutive integers"],["CONSEC_PAIR_NEARBY","2 Consecutive Numbers (Nearby)","\u{1F517}","u",1575,63491,"CONSECUTIVE","contains two non-adjacent substrings that are consecutive integers"],["MESA","Mesa","\u{1F5FB}","u",1568,63762,"PEAK","digits rise to a peak, then fall (flat stretches allowed)"],["PRIME","Prime Number","\u{1F48E}","u",1274,78498,"","divisible only by 1 and itself"],["TRINITY","Trinity","\u269C\uFE0F","u",1265,79056,"","uses exactly three different digits"],["DOZEN","Dozen","\u{1F369}","u",1200,83333,"","divisible by 12"],["CANYON","Canyon","\u{1F304}","u",1184,84432,"PEAK","digits fall to a floor, then rise (flat stretches allowed)"],["FIVE_DIGITS","Five Digits","\u{1F590}\uFE0F","u",1111,9e4,"","has exactly five digits"],["ELEVEN","Eleven","\u{1F55A}","u",1100,90909,"","divisible by 11"],["HARSHAD","Harshad Number","\u{1F91D}","u",1048,95428,"","divisible by the sum of its own digits"],["SANDWICH","Sandwich","\u{1F96A}","u",1e3,99954,"EQUILIBRIUM","first and last digits match, with at least one different digit between them"],["EQUILIBRIUM","Equilibrium","\u{1F9D8}","u",1e3,99999,"EQUILIBRIUM","the first and last digits are identical"],["SEMI_CLEAN","Semi-Clean","\u{1F9F9}","u",1e3,1e5,"","ends in a 5"],["CLEAN","Clean","\u{1F9FC}","u",1e3,100001,"VOID_DEPTH","ends in a zero"],["HILLS","Hills","\u{1F3DE}\uFE0F","c",733,136425,"HILLS","digits strictly alternate between rising and falling"],["TRIPS","Three of a Kind","\u{1F3B0}","c",724,138033,"OF_A_KIND","contains three identical digits"],["LUCKY_SEVEN_DIV","Lucky Seven (Divisible)","\u{1F3B0}","c",700,142857,"","divisible by 7"],["HETEROGENEOUS","Heterogeneous","\u{1F957}","c",593,168571,"","no repeated digits"],["MINI_SCRAMBLE","Mini Scramble","\u{1F9E9}","c",579,172847,"PROGRESSION","contains 3 or more adjacent digits that form a run when sorted"],["GAP_ONE","Gap One","\u2195\uFE0F","c",529,188888,"","the first and last digits differ by exactly 1"],["TWO_PAIR","Two Pair","\u{1F46F}\u200D\u2640\uFE0F","c",377,265518,"PAIRS","contains two distinct pairs of matching digits"],["DUNES","Dunes","\u{1F42B}","c",364,274590,"HILLS","rises and falls keep alternating (flat stretches allowed)"],["HOPSCOTCH","Hopscotch","\u{1F998}","c",312,320193,"HOPSCOTCH","a digit appears at every other position (2 times)"],["GHOST","Ghost","\u{1F47B}","c",309,323848,"",'contains exactly one "0"'],["QUARTET","Quartet","\u{1F3BB}","c",290,344736,"","uses exactly four different digits"],["BERYLLIUM","Beryllium (4)","\u{1F48E}","c",282,354294,"",'contains exactly one "4"'],["BORON","Boron (5)","\u{1F9FC}","c",282,354294,"",'contains exactly one "5"'],["CARBON","Carbon (6)","\u270F\uFE0F","c",282,354294,"",'contains exactly one "6"'],["FLUORINE","Fluorine (9)","\u{1F9B7}","c",282,354294,"",'contains exactly one "9"'],["HELIUM","Helium (2)","\u{1F388}","c",282,354294,"",'contains exactly one "2"'],["LITHIUM","Lithium (3)","\u{1F50B}","c",282,354294,"",'contains exactly one "3"'],["NITROGEN","Nitrogen (7)","\u2744\uFE0F","c",282,354294,"",'contains exactly one "7"'],["OXYGEN","Oxygen (8)","\u{1F4A8}","c",282,354294,"",'contains exactly one "8"'],["HYDROGEN","Hydrogen (1)","\u{1F4A7}","c",282,354295,"",'contains exactly one "1"'],["GROUNDED","Grounded","\u2693","c",250,399996,"","the first digit is smaller than the last"],["CONTIGUOUS_PAIR","Contiguous Pair","\u{1FAC2}","c",249,402130,"PAIRS","contains a contiguous pair of matching digits"],["LUCKY_7","Lucky Seven","7\uFE0F\u20E3","c",213,468559,"","contains the number 7"],["LIFTOFF","Liftoff","\u{1F680}","c",200,499996,"","the first digit is larger than the last"],["ODD","Odd","\u{1F984}","c",200,5e5,"","not divisible by 2"],["EVEN","Even","\u2696\uFE0F","c",200,500001,"","divisible by 2"],["VOID","Void","\u{1F573}\uFE0F","c",167,597870,"","contains no zeros"],["NEIGHBORS","Neighbors","\u{1F3D8}\uFE0F","c",161,620689,"","contains two digits that are adjacent in value"],["PAIR","Pair","\u{1F46F}","c",120,831430,"PAIRS","contains a pair of matching digits"],["SIX_DIGITS","Six Digits","\u{1F41D}","c",111,9e5,"","has exactly six digits"]],yI=[[1759,0],[1915,.182],[1976,.486],[2081,.999],[2210,1.988],[2300,2.839],[2432,3.994],[2542,4.981],[2666,5.978],[2797,6.996],[2879,7.969],[2968,8.997],[3033,9.991],[3099,10.996],[3174,11.999],[3226,12.963],[3295,13.989],[3366,14.982],[3445,15.98],[3522,16.974],[3606,17.999],[3673,18.991],[3737,19.998],[3799,20.997],[3866,21.959],[3925,22.967],[3980,23.989],[4040,24.999],[4105,25.989],[4169,26.997],[4234,27.995],[4296,28.984],[4360,29.988],[4426,30.985],[4486,31.984],[4551,32.994],[4622,33.991],[4683,34.986],[4754,35.981],[4826,36.984],[4893,37.971],[4962,38.996],[5027,39.99],[5095,40.997],[5161,41.99],[5229,42.996],[5304,43.997],[5381,44.994],[5464,45.988],[5547,46.976],[5635,47.998],[5718,48.994],[5801,49.993],[5889,50.99],[5972,51.991],[6060,52.997],[6151,53.994],[6250,54.992],[6355,55.995],[6467,56.992],[6582,57.998],[6693,58.987],[6810,59.999],[6929,60.992],[7061,61.999],[7201,62.999],[7351,63.998],[7509,64.995],[7677,65.996],[7859,66.999],[8042,67.997],[8243,68.996],[8485,69.997],[8744,70.996],[9015,71.999],[9322,72.996],[9691,73.999],[10073,75],[10527,75.998],[11021,76.999],[11628,77.999],[12218,79],[12833,79.998],[13413,80.999],[13993,82],[14565,82.998],[15169,84],[15869,84.999],[16722,85.999],[17686,86.999],[18871,87.999],[20366,88.997],[22292,90],[25465,91],[28158,91.999],[29803,93],[31929,93.999],[35468,94.999],[41348,96],[51811,97],[94666,98],[162291,99],[337578,99.5],[514418,99.8],[1053947,99.9],[2278448,99.95],[13933656,99.99],[112146596,99.999],[186186584,100]],Vx={c:"common",u:"uncommon",r:"rare",e:"epic",a:"anomaly",m:"mythic"},Wx=["c","u","r","e","a","m"],lu={c:"t-common",u:"t-uncommon",r:"t-rare",e:"t-epic",a:"t-anomaly",m:"t-mythic"},bu=gI.map(([t,e,n,r,i,o,s,l])=>({id:t,label:e,emoji:n,tier:r,ep:i,count:o,family:s||null,desc:l,odds:o/(Ut+1)})),W5=Object.fromEntries(bu.map(t=>[t.id,t])),wh=[{key:"mythic",min:162292,label:"MYTHIC",note:"top 1%",coins:60},{key:"anomaly",min:35469,label:"ANOMALY",note:"top 5%",coins:30},{key:"epic",min:22293,label:"EPIC",note:"top 10%",coins:15},{key:"rare",min:10074,label:"RARE",note:"top 25%",coins:8},{key:"uncommon",min:5802,label:"UNCOMMON",note:"top half",coins:4},{key:"common",min:2087,label:"COMMON",note:"bottom half",coins:2},{key:"trash",min:0,label:"TRASH",note:"bottom 1%",coins:1}];function vI(t){let e=String(t),n=[];for(let l=0;l<bu.length;l++){let c=bu[l],d=hI[c.id];d&&d(t,e)&&n.push(c)}let r={};for(let l of n)l.family&&(!r[l.family]||l.ep>r[l.family].ep)&&(r[l.family]=l);let i=[],o=[];for(let l of n)!l.family||r[l.family].id===l.id?i.push(l):o.push(l);let s=i.reduce((l,c)=>l+c.ep,0);return i.sort((l,c)=>c.ep-l.ep),o.sort((l,c)=>c.ep-l.ep),{n:t,ep:s,earned:n,paid:i,outranked:o,band:bI(s),percentile:xI(s)}}function bI(t){for(let e of wh)if(t>=e.min)return e;return wh[wh.length-1]}function xI(t){let e=yI;if(t<=e[0][0])return e[0][1];if(t>=e[e.length-1][0])return e[e.length-1][1];let n=0,r=e.length-1;for(;r-n>1;){let c=n+r>>1;e[c][0]<=t?n=c:r=c}let[i,o]=e[n],[s,l]=e[r];return s===i?l:o+(t-i)*(l-o)/(s-i)}function On(t){let e=String(t),n="";for(let r=0;r<e.length;r++)r>0&&(e.length-r)%3===0&&(n+=","),n+=e[r];return n}var wI=[["skill-bay-1","skill-slot","Skill Bay I",1e6,0,0,"","a second slot on the rack, so two skills can fire on one roll."],["skill-bay-2","skill-slot","Skill Bay II",4e6,0,0,"skill-bay-1","a third slot. three skills, one roll."],["quickwind-1","roll","Quickwind I",3e4,2200,3e3,"","a tighter spring on the reveal. every digit still gets its moment, just sooner."],["quickwind-2","roll","Quickwind II",11e4,1600,2200,"quickwind-1","fine-tunes the mechanism. the badges still land in order."],["quickwind-3","roll","Quickwind III",38e4,1e3,1600,"quickwind-2","a brisk reveal with the whole sequence intact."],["quickwind-4","roll","Quickwind IV",12e5,600,1e3,"quickwind-3","the fastest reveal the mechanism allows."],["clockwork-1","cooldown","Clockwork I",5e4,3e3,4e3,"","a stronger spring brings the next roll round sooner."],["clockwork-2","cooldown","Clockwork II",18e4,2e3,3e3,"clockwork-1","rewound harder. less standing about between numbers."],["clockwork-3","cooldown","Clockwork III",62e4,1e3,2e3,"clockwork-2","the wait stops being a wait."],["clockwork-4","cooldown","Clockwork IV",17e5,600,1e3,"clockwork-3","barely a pause now."],["clockwork-5","cooldown","Clockwork V",38e5,300,600,"clockwork-4","a blink between rolls."],["clockwork-6","cooldown","Clockwork VI",9e6,120,300,"clockwork-5","as close to continuous as the ladder goes."],["flywheel","pace","Flywheel",45e4,0,0,"","rolling without stopping builds momentum: +2% banked every 10 rolls in a row, up to +30%. breaking the run resets it."],["flywheel-2","pace","Flywheel II",15e5,0,0,"flywheel","a heavier wheel. +3% every 8 rolls, up to +60%."],["flywheel-3","pace","Flywheel III",36e5,0,0,"flywheel-2","+5% every 6 rolls, up to double. the reward for not putting the phone down."],["glitch","aura","Glitchwave",165e4,0,0,"","The digits tear and re-register on every rarity change."],["monolith","aura","Monolith",27e5,0,0,"","A single flat slab, no gradient, no glow. Just the number."],["blueprint","aura","Blueprint",145e4,0,0,"","Draughting-paper grid behind the number, in cold cyan."],["static","aura","Scanline",26e4,0,0,"","Horizontal sweep across the rarity box, like a CRT refreshing."],["scramble","aura","Scramble",18e5,0,0,"","Unresolved digits churn through glyphs before they settle."],["hexdump","aura","Hex Dump",3e6,0,0,"","Faint hexadecimal spill behind the result, like a memory view."],["offline-roller","utility","Offline Roller",26e5,0,0,"","keeps rolling while the app is shut. pays the median roll, not the jackpot one \u2014 closing the app must never beat opening it."],["offline-clock-1","offline","Offline Clock I",36e5,9e4,12e4,"offline-roller","the offline mechanism ticks over faster."],["offline-clock-2","offline","Offline Clock II",54e5,6e4,9e4,"offline-clock-1","faster still."],["offline-clock-3","offline","Offline Clock III",85e5,36e3,6e4,"offline-clock-2","the quickest the offline clock runs."],["offline-vault-1","offline-cap","Offline Vault I",6e6,216,144,"offline-clock-1","a bigger store, so a long absence is not wasted."],["offline-vault-2","offline-cap","Offline Vault II",11e6,288,216,"offline-vault-1","bigger again."],["offline-vault-3","offline-cap","Offline Vault III",18e6,360,288,"offline-vault-2","the largest store. a weekend away still fills it."],["auto-roll","utility","Auto-Roll",16e5,0,0,"","fires the next roll the moment the cooldown clears. off by default \u2014 an idle game that plays itself is a screensaver."],["persistence-core","utility","Persistence Core",48e5,0,0,"auto-roll","auto-roll keeps running while you are on another tab of the app."],["archive-lens","utility","Archive Lens",12e4,0,0,"","keeps a longer history of your rolls on the stats page."]],kI=[["pebble","Pebble","#a8a29e",1.05,125e3,40,"a small loyal rock. does very little, extremely reliably."],["moth","Lumen Moth","#fbbf24",1.09,3e5,30,"drawn to bright numbers. flutters round the reveal."],["kit","Static Kit","#fb923c",1.13,6e5,22,"a fox with a permanent case of bed-hair."],["snail","Lunar Snail","#a78bfa",1.17,9e5,16,"crosses the whole screen during a single cooldown."],["jelly","Tide Jelly","#38bdf8",1.21,125e4,12,"drifts through the cooldown without a care."],["bee","Amber Bee","#facc15",1.26,165e4,9,"busy. audibly so."],["corvid","Ledger Corvid","#818cf8",1.31,205e4,7,"keeps a ledger of everything you have rolled. will not show you."],["owl","Archive Owl","#f59e0b",1.37,25e5,5,"has read the whole badge catalogue. mentions it."],["turtle","Patient Turtle","#34d399",1.43,31e5,4,"in no hurry. gets there anyway."],["griffin","Storm Griffin","#60a5fa",1.5,38e5,3,"arrives with weather."],["unicorn","Astral Unicorn","#f472b6",1.6,5e6,2,"improbable, which is rather the point."],["serpent","Void Serpent","#8b5cf6",1.7,7e6,1,"swallows the numbers you did not keep."],["dragonet","Ember Dragonet","#ef4444",1.8,1e7,1,"small, extremely warm, sits on the wallet."]],AI=[["surge","shop","","Surge","wallet",2,0,0,5,18e4,"the next roll banks double EP. the number, its badges and its scored EP are untouched."],["trail","shop","","Trail","pet-luck",4,0,0,5,16e4,"a friend is four times as likely to turn up on the next roll. their luck is its own draw."],["bounce","shop","","Bounce","waive",0,0,0,4,5e5,"the next roll has no cooldown after its reveal."],["twice","shop","","Double Vision","best-of",0,2,0,7,9e5,"the next roll is drawn twice; you keep whichever scores more. both draws are ordinary."],["bedrock","shop","","Bedrock","floor",0,4,25e3,6,16e5,"redraws until the roll clears 25,000 EP, up to four draws. keeps the best if none do."],["turbo","shop","","Turbo","overdrive",3,0,0,7,26e5,"the next roll counts triple towards the flywheel and every skill's charge."],["quarry","shop","","Big Game","floor",0,5,1e5,11,6e6,"redraws until the roll clears 100,000 EP, up to five draws."],["miser","shop","","Miser","wallet",3,0,0,7,9e6,"the next roll banks triple EP."],["triptych","shop","","Triptych","best-of",0,3,0,6,12e6,"drawn three times; you keep the highest."],["pebble-steady","pet","pebble","Steady Step","floor",0,3,8e3,5,0,"redraws until the roll clears 8,000 EP, up to three draws."],["moth-glow","pet","moth","Glow","wallet",1.5,0,0,4,0,"the next roll banks 50% more."],["kit-spark","pet","kit","Static Spark","waive",0,0,0,5,0,"the next roll has no cooldown after its reveal."],["snail-shell","pet","snail","Shell","best-of",0,2,0,6,0,"drawn twice; you keep the better one."],["jelly-drift","pet","jelly","Drift","pet-luck",3,0,0,4,0,"friends are likelier to turn up on the next roll."],["bee-swarm","pet","bee","Swarm","wallet",1.75,0,0,5,0,"the next roll banks more."],["corvid-ledger","pet","corvid","Ledger","overdrive",2,0,0,6,0,"the next roll counts double towards every charge."],["owl-lore","pet","owl","Lore","floor",0,4,2e4,7,0,"redraws until the roll clears its bar."],["turtle-long","pet","turtle","Long Game","floor",0,5,15e3,6,0,"redraws patiently, several times, for a floor."],["griffin-dive","pet","griffin","Dive","best-of",0,3,0,8,0,"drawn twice; the better one is kept."],["unicorn-wish","pet","unicorn","Wish","wallet",2.5,0,0,7,0,"the next roll banks considerably more."],["serpent-maw","pet","serpent","Maw","floor",0,5,6e4,8,0,"redraws hard for a high floor."],["dragonet-pyre","pet","dragonet","Pyre","floor",0,6,15e4,8,0,"redraws for the highest floor any friend offers."],["reborn-drive","rebirth","","Reborn Drive","wallet",1.5,0,0,5,0,"a rebirth's own skill: the next roll banks more."],["reborn-tempo","rebirth","","Reborn Tempo","waive",0,0,0,4,0,"a rebirth's own skill: no cooldown on the next roll."],["reborn-depth","rebirth","","Reborn Depth","best-of",0,2,0,6,0,"a rebirth's own skill: an extra draw, best kept."],["reborn-vault","rebirth","","Reborn Vault","floor",0,4,3e4,7,0,"a rebirth's own skill: redraws for a floor."],["reborn-omen","rebirth","","Reborn Omen","best-of",0,3,0,9,0,"a rebirth's own skill: several draws, best kept."],["reborn-paragon","rebirth","","Reborn Paragon","floor",0,6,75e3,10,0,"a rebirth's own skill: the highest floor on the ladder."]],Lw=3e3,SI=4e3,EI=12e4,TI=144,CI=.004,_I=6,II=3e5,NI=3,Uw=40,$x=(()=>{let t=[];for(let e=1;e<=9;e++)for(let n=0;n<=9;n++)e!==n&&t.push(+`${e}${n}${e}${n}${e}${n}`);return t})(),Hx=Array.from({length:14},(t,e)=>(e+10)*1e4+5959),Vw=[{id:"INFINITE_PENDULUM",label:"Pendulum",emoji:"\u2195",tier:"a",ep:25e3,count:$x.length,family:null,desc:"six digits swinging between two values: ABABAB",set:new Set($x)},{id:"INFINITE_LAST_SECOND",label:"Last Second",emoji:"\u23F3",tier:"m",ep:75e3,count:Hx.length,family:null,desc:"a 24-hour time at its final second: HH5959, hours 10 to 23",set:new Set(Hx)}].map(t=>({...t,odds:t.count/(Ut+1)})),Ts=[...bu,...Vw],xl=Ts.length,$5=Object.fromEntries(Ts.map(t=>[t.id,t]));function qx(t){let e=vI(t),n=Vw.filter(r=>r.set.has(t));return n.length?{...e,earned:[...e.earned,...n],paid:[...e.paid,...n].sort((r,i)=>i.ep-r.ep),ep:e.ep+n.reduce((r,i)=>r+i.ep,0)}:e}var Lh=wI.map(([t,e,n,r,i,o,s,l])=>({id:t,kind:e,name:n,price:r,value:i,from:o,requires:s||null,desc:l})),uo=Object.fromEntries(Lh.map(t=>[t.id,t])),Cu=kI.map(([t,e,n,r,i,o,s])=>({id:t,name:e,accent:n,multiplier:r,price:i,dropWeight:o,desc:s})),po=Object.fromEntries(Cu.map(t=>[t.id,t])),Ls=AI.map(([t,e,n,r,i,o,s,l,c,d,u])=>({id:t,source:e,petId:n||null,name:r,kind:i,value:o,attempts:s,floor:l,charges:c,price:d,desc:u})),hn=Object.fromEntries(Ls.map(t=>[t.id,t])),kh=[{id:"pace",label:"pace",blurb:"shorter reveals, shorter cooldowns",kinds:["roll","cooldown","pace"]},{id:"skills",label:"skills",blurb:"charged effects, and the rack that fires them",kinds:["skill","skill-slot"]},{id:"pets",label:"friends",blurb:"wallet multipliers, one worn at a time",kinds:["companion"]},{id:"offline",label:"offline",blurb:"earn while the app is shut",kinds:["offline","offline-cap","offline-roller"]},{id:"tools",label:"tools",blurb:"automation and the archive",kinds:["utility"]},{id:"auras",label:"skins",blurb:"cosmetic only, never odds",kinds:["aura"]}];function Zh(t=[]){let e=Lw,n=SI;for(let r of t){let i=uo[r];i&&(i.kind==="roll"&&(e=Math.min(e,i.value)),i.kind==="cooldown"&&(n=Math.min(n,i.value)))}return{revealMS:e,cooldownMS:n}}function PI(t=[]){let e=EI,n=TI;for(let r of t){let i=uo[r];i&&(i.kind==="offline"&&(e=Math.min(e,i.value)),i.kind==="offline-cap"&&(n=Math.max(n,i.value)))}return{intervalMS:e,cap:n}}function Ww(t=[],e=0){let n=t.includes("flywheel-3")?3:t.includes("flywheel-2")?2:t.includes("flywheel")?1:0;if(!n)return{tier:0,step:0,bonus:1,cap:1,next:0};let r=[0,10,8,6][n],i=[0,.02,.03,.05][n],o=[1,1.3,1.6,2][n],s=Math.floor(Math.max(0,e)/r);return{tier:n,step:r,bonus:Math.min(o,1+s*i),cap:o,next:r-Math.max(0,e)%r}}function _u(t){let e=t.wearing&&po[t.wearing]?po[t.wearing].multiplier:1,n=1+.02*Math.max(0,t.rebirths||0),r=1+.1*Math.max(0,t.prestiges||0),i=1+.25*Math.max(0,t.rollbacks||0),o=1+Math.max(0,t.surplusPct||0)/100,s=Ww(t.owned,t.streak).bonus;return{pet:e,rebirth:n,prestige:r,rollback:i,surplus:o,flywheel:s,total:e*n*r*i*o*s}}function $w(t){if(uo[t])return{...uo[t]};let e=po[t];if(e)return{id:e.id,kind:"companion",name:e.name,price:e.price,desc:e.desc,requires:null};let n=hn[t];return n&&n.price?{id:n.id,kind:"skill",name:n.name,price:n.price,desc:n.desc,requires:null}:null}function MI(t,e){return(t.owned||[]).includes(e)||(t.pets||[]).includes(e)||(t.skills||[]).includes(e)}function OI(t,e){let n=$w(e);return n?!n.requires||(t.owned||[]).includes(n.requires):!1}function BI(t){return Math.floor(t/II)}function FI(t,e=[],n=NI){let r=Ls.filter(l=>l.source==="shop"&&l.price>0&&!e.includes(l.id));if(r.length<=n)return r.map(l=>l.id);let i=[],o=t*2654435761>>>0,s=new Set;for(;i.length<n;){o=Math.imul(o^o>>>15,2246822507)+374761393>>>0;let l=o%r.length;s.has(l)||(s.add(l),i.push(r[l].id))}return i}function Hw(t,e){let n=FI(BI(e),t.skills||[]),r=Ls.filter(o=>o.source==="pet"&&(t.pets||[]).includes(o.petId)).map(o=>o.id),i=(t.rebirths||0)>0?Ls.filter(o=>o.id.startsWith("reborn-")).map(o=>o.id):[];return[...new Set([...n,...r,...i])]}function DI(t,e,n=Date.now()){let r=$w(e);if(!r||MI(t,e)||!OI(t,e)||r.kind==="skill"&&!Hw(t,n).includes(e)||(t.ep||0)<r.price)return t;let i={...t,ep:t.ep-r.price,spent:(t.spent||0)+r.price};return r.kind==="companion"?(i.pets=[...t.pets||[],e],t.wearing||(i.wearing=e)):r.kind==="skill"?i.skills=[...t.skills||[],e]:(i.owned=[...t.owned||[],e],r.kind==="aura"&&(i.aura=e)),i}function Rx(t){if(t)return Math.floor(t()*(Ut+1));let e=typeof crypto<"u"&&crypto.getRandomValues?crypto:null;if(!e)return Math.floor(Math.random()*(Ut+1));let n=Ut+1,r=Math.floor(4294967296/n)*n,i=new Uint32Array(1);do e.getRandomValues(i);while(i[0]>=r);return i[0]%n}function jx(t){if(t)return t();let e=typeof crypto<"u"&&crypto.getRandomValues?crypto:null;if(!e)return Math.random();let n=new Uint32Array(1);return e.getRandomValues(n),n[0]/4294967296}function zI(t){let e=[];for(let n of t){let r=hn[n];r&&(r.kind==="best-of"?e.push({id:n,attempts:r.attempts||2,floor:0}):r.kind==="floor"&&e.push({id:n,attempts:r.attempts||3,floor:r.floor||0}))}return e}function LI(t,e){let n=[],r=null,i=null;for(let l of t){let c=Math.min(l.attempts,_I-n.length),d=null;for(let u=0;u<c;u++){let p=Rx(e);n.push(p);let f=qx(p);if((!d||f.ep>d.ep)&&(d=f),l.floor>0&&f.ep>=l.floor)break}d&&(!r||d.ep>r.ep)&&(r=d,i=l.id)}let o=Rx(e);n.push(o);let s=qx(o);return(!r||s.ep>r.ep)&&(r=s,i=null),{draws:n,result:r,winner:i}}function UI(t){let e=1,n=1,r=1,i=!1;for(let o of t){let s=hn[o];s&&(s.kind==="wallet"&&(e*=s.value||1),s.kind==="overdrive"&&(n=Math.max(n,s.value||1)),s.kind==="pet-luck"&&(r=Math.max(r,s.value||1)),s.kind==="waive"&&(i=!0))}return{wallet:e,overdrive:n,petLuck:r,waive:i}}function VI(t,e,n){let r=Cu.filter(s=>!(t.pets||[]).includes(s.id));if(!r.length||jx(n)>=Math.min(1,CI*e))return null;let i=r.reduce((s,l)=>s+l.dropWeight,0),o=jx(n)*i;for(let s of r)if(o-=s.dropWeight,o<=0)return s.id;return r[r.length-1].id}function WI(t,e=Date.now(),n=null){let r=(t.armed||[]).filter(g=>hn[g]),i=UI(r),{draws:o,result:s,winner:l}=LI(zI(r),n),c=_u(t),d=Math.round(s.ep*c.total*i.wallet),{revealMS:u,cooldownMS:p}=Zh(t.owned),f=VI(t,i.petLuck,n),m={...t.seen||{}},h=[];for(let g of s.earned)m[g.id]||h.push(g.id),m[g.id]=(m[g.id]||0)+1;let v=(t.streak||0)+i.overdrive,x={n:s.n,ep:s.ep,banked:d,at:e,band:s.band.key};return{state:{...t,ep:(t.ep||0)+d,earned:(t.earned||0)+d,lifetime:(t.lifetime||0)+d,rolls:(t.rolls||0)+1,totalRolls:(t.totalRolls||0)+1,draws:(t.draws||0)+o.length,streak:v,seen:m,armed:[],charges:$I(t.charges,r),best:!t.best||s.ep>t.best.ep?{n:s.n,ep:s.ep}:t.best,history:[...t.history||[],x].slice(-Uw),pets:f?[...t.pets||[],f]:t.pets,wearing:t.wearing||f||null,revealUntil:e+u,cooldownUntil:e+u+(i.waive?0:p),lastRollAt:e},outcome:{result:s,banked:d,mult:c,fx:i,draws:o,winner:l,drop:f,fresh:h,revealMS:u,cooldownMS:i.waive?0:p}}}function $I(t,e){let n={...t||{}};for(let r of e)n[r]=0;return n}function HI(t,e=1){let n={...t.charges||{}};for(let r of t.skills||[]){let i=hn[r];i&&(n[r]=Math.min(i.charges,(n[r]||0)+e))}for(let r of Ls)r.source!=="pet"||!(t.pets||[]).includes(r.petId)||(n[r.id]=Math.min(r.charges,(n[r.id]||0)+e));return n}function qI(t,e){let n=hn[e];return n?((t.charges||{})[e]||0)>=n.charges:!1}function RI(t){let e=(t.skills||[]).filter(r=>hn[r]),n=Ls.filter(r=>r.source==="pet"&&(t.pets||[]).includes(r.petId)).map(r=>r.id);return[...new Set([...e,...n])]}function jI(t){return 1+((t.owned||[]).includes("skill-bay-1")?1:0)+((t.owned||[]).includes("skill-bay-2")?1:0)}function GI(t,e=Date.now()){if(!(t.owned||[]).includes("offline-roller"))return null;let n=t.lastSeen||0;if(!n||e<=n)return null;let{intervalMS:r,cap:i}=PI(t.owned),o=Math.min(i,Math.floor((e-n)/r));if(o<1)return null;let s=_u({...t,streak:0}),l=Math.round(o*QI*s.total);return{rolls:o,ep:l,cap:i,capped:o>=i,awayMS:e-n}}var QI=5801;function KI(t,e,n=Date.now()){return e?{...t,ep:(t.ep||0)+e.ep,earned:(t.earned||0)+e.ep,lifetime:(t.lifetime||0)+e.ep,totalRolls:(t.totalRolls||0)+e.rolls,offlineRolls:(t.offlineRolls||0)+e.rolls,lastSeen:n}:{...t,lastSeen:n}}var Bn=4,Gx=[{badges:.2,ep:25e4*Bn},{badges:.25,ep:6e5*Bn},{badges:.3,ep:15e5*Bn},{badges:.35,ep:35e5*Bn},{badges:.4,ep:75e5*Bn},{badges:.45,ep:15e6*Bn}],XI={badges:.5,ep:3e7*Bn},YI={badges:.75,ep:6e7*Bn},JI=3,ZI=Math.ceil(xl*.15);function eN(t){return Object.keys(t.seen||{}).length}function qw(t){let e=t.rebirths||0,n=t.prestiges||0,r=eN(t),i=t.earned||0,o,s;e<Gx.length?(o="rebirth",s=Gx[e]):n<JI?(o="prestige",s=XI):(o="rollback",s=YI);let l=Math.ceil(xl*s.badges);return{kind:o,needBadges:l,needEp:s.ep,badges:r,earned:i,ready:r>=l&&i>=s.ep,visible:r>=ZI,bonus:o==="rebirth"?2:o==="prestige"?10:25}}function tN(t,e){let n=Math.max(0,(t||0)-Math.max(0,e||0));return n?{surplus:n,starter:Math.floor(n*.25),bankedPct:Math.min(5,Math.floor(n/(5e6*Bn)))}:{surplus:0,starter:0,bankedPct:0}}function nN(t,e=Date.now()){let n=qw(t);if(!n||!n.ready)return t;let{starter:r,bankedPct:i}=tN(t.earned,n.needEp),o=n.kind==="rebirth"?(t.rebirths||0)+1:t.rebirths||0,s=n.kind==="prestige"?(t.prestiges||0)+1:t.prestiges||0,l=n.kind==="rollback"?(t.rollbacks||0)+1:t.rollbacks||0,c=25e4*Bn*o+1e6*Bn*s;return{...t,ep:c+r,earned:0,rolls:0,streak:0,owned:[],armed:[],charges:{},skills:n.kind==="rebirth"?t.skills:[],best:null,history:[],aura:null,rebirths:o,prestiges:s,rollbacks:l,surplusPct:(t.surplusPct||0)+i,cycles:[...t.cycles||[],{kind:n.kind,at:e,earned:t.earned||0,rolls:t.rolls||0}].slice(-20),revealUntil:0,cooldownUntil:0}}function Qt(t){let e=Math.round(t||0);return e<1e4?On(e):e<1e6?`${(e/1e3).toFixed(e<1e5?1:0)}K`:e<1e9?`${(e/1e6).toFixed(e<1e7?2:1)}M`:`${(e/1e9).toFixed(2)}B`}function Pr(t){let e=Math.max(0,Math.round(t/100)/10);return e>=10?`${Math.round(e)}s`:`${e}s`}var rN=100,iN=400,oN=700;function sN(t,e){let n=Math.max(6,t),r=[2e3];for(let f=1;f<n;f++)r.push(r[f-1]+1e3+1e3*Math.pow((f-1)/(n-1),2));let i=r[r.length-1],o=i+1e3,s=[],l=Math.max(1,e);for(let f=0;f<l;f++)s.push(o),f<l-1&&(o+=500+1e3*Math.pow(f/(l-1),1.5));let c=o+1500,d=c+1e3,u=d+250,p=u+1e3;return{slots:n,digitTimes:r,collapse:i,badgeTimes:s,summary:c,rarity:d,stats:u,end:p}}function aN(t,e,n){let r=Number.isFinite(n)&&n>0?n:Lw,i=sN(t,e),o=r/i.end,s={};for(let[l,c]of Object.entries(i))s[l]=l==="slots"?c:Array.isArray(c)?c.map(d=>d*o):c*o;return{...s,end:r,scale:o,settleMS:iN*o,pulseMS:oN*o,scrambleMS:Math.max(40,rN*o)}}function lN(t){let e=[...t.digitTimes,...t.digitTimes.map(n=>n+t.settleMS),t.collapse+t.pulseMS,...t.badgeTimes,t.summary,t.rarity,t.rarity+t.pulseMS,t.stats,t.end];return[...new Set(e.map(n=>Math.round(n)))].filter(n=>n>=0).sort((n,r)=>n-r)}function Rw(t,e){let n=t.digitTimes.filter(r=>e>=r).length;return{landed:n,spinning:n<t.slots,badgeGroups:t.badgeTimes.filter(r=>e>=r).length,showSummary:e>=t.summary,showRarity:e>=t.rarity,showStats:e>=t.stats,done:e>=t.end,collapsing:e>=t.collapse&&e<t.collapse+t.pulseMS,popping:e>=t.rarity&&e<t.rarity+t.pulseMS}}var jw="tasksh.rngdle.v2",Ah={ep:0,earned:0,lifetime:0,spent:0,rolls:0,totalRolls:0,offlineRolls:0,draws:0,streak:0,owned:[],pets:[],wearing:null,skills:[],armed:[],charges:{},seen:{},best:null,history:[],cycles:[],rebirths:0,prestiges:0,rollbacks:0,surplusPct:0,aura:null,autoRoll:!1,revealUntil:0,cooldownUntil:0,lastRollAt:0,lastSeen:0};function Qx(){try{let t=JSON.parse(localStorage.getItem(jw)||"null");if(!t||typeof t!="object")return{...Ah};let e=(r,i=0)=>Number.isFinite(r)?r:i,n=r=>Array.isArray(r)?r.filter(i=>typeof i=="string"):[];return{...Ah,...t,ep:Math.max(0,e(t.ep)),earned:Math.max(0,e(t.earned)),lifetime:Math.max(0,e(t.lifetime)),rolls:Math.max(0,e(t.rolls)),totalRolls:Math.max(0,e(t.totalRolls)),streak:Math.max(0,e(t.streak)),owned:n(t.owned).filter(r=>uo[r]),pets:n(t.pets).filter(r=>po[r]),skills:n(t.skills).filter(r=>hn[r]),armed:n(t.armed).filter(r=>hn[r]),seen:t.seen&&typeof t.seen=="object"?t.seen:{},history:Array.isArray(t.history)?t.history.slice(-Uw):[],wearing:po[t.wearing]?t.wearing:null,aura:uo[t.aura]?t.aura:null}}catch{return{...Ah}}}function Kx(t){try{localStorage.setItem(jw,JSON.stringify(t))}catch{}}function cN(t,e=80){let[,n]=(0,a.useState)(0);return(0,a.useEffect)(()=>{if(!t)return;let r=setInterval(()=>n(i=>i+1),e);return()=>clearInterval(r)},[t,e]),Date.now()}function wl({frac:t,className:e=""}){return a.default.createElement("div",{className:`rngi-bar ${e}`},a.default.createElement("span",{style:{width:`${Math.max(0,Math.min(1,t))*100}%`}}))}function dN({aura:t}){let e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,n=t==="scramble"?Qw:Gw,[r,i]=(0,a.useState)(()=>Array(7).fill("0"));return(0,a.useEffect)(()=>{if(e)return;let o=!0,s=()=>i(Array.from({length:7},()=>n[Math.floor(Math.random()*n.length)])),l=setInterval(()=>{!document.hidden&&o&&s()},110);return s(),()=>{o=!1,clearInterval(l)}},[n,e]),a.default.createElement("div",{className:"rngi-idle"},a.default.createElement("div",{className:"rngi-digits idling","aria-hidden":"true"},r.map((o,s)=>a.default.createElement("span",{key:s,className:"rngi-digit scrambling"},o))),a.default.createElement("div",{className:"rngi-idle-msg"},"0 to 1,000,000 \xB7 no limit, no seed, no picking"))}function uN(t,e,n){let[r,i]=(0,a.useState)(()=>e?Date.now()-e:0);return(0,a.useEffect)(()=>{if(!n||!t||!e)return;let s=lN(t).map(l=>{let c=e+l-Date.now();return c<-2e3?null:setTimeout(()=>i(Date.now()-e),Math.max(0,c))}).filter(Boolean);return i(Date.now()-e),()=>s.forEach(clearTimeout)},[t,e,n]),r}var Gw="0123456789",Qw="0123456789#%&@$?*/\\";function pN({value:t,timeline:e,elapsed:n,aura:r,tier:i}){let o=String(t),s=e?e.slots:7,l=s-o.length,c=e?Rw(e,n):{landed:s,spinning:!1},d=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,u=d?s:c.landed,[p,f]=(0,a.useState)(()=>Array(8).fill("?")),m=r==="scramble"?Qw:Gw;return(0,a.useEffect)(()=>{if(!c.spinning||d)return;let h=Math.max(40,e?e.scrambleMS:100),v=setInterval(()=>f(Array.from({length:8},()=>m[Math.floor(Math.random()*m.length)])),h);return()=>clearInterval(v)},[c.spinning,e,m,d]),a.default.createElement("div",{className:`rngi-digits ${c.spinning?"spinning":"settled"} ${c.collapsing?"collapse":""} t-${i||"none"}`,"aria-label":On(t)},Array.from({length:s},(h,v)=>{let x=v<u,y=x&&v<l,g=x&&!y&&e&&n<e.digitTimes[v]+e.settleMS;return a.default.createElement("span",{key:v,className:`rngi-digit ${y?"blank":""} ${x?"":"scrambling"} ${g?"settling":""}`},y?"\xA0":x?o[v-l]:p[v])}))}function Xx({badge:t,dim:e,note:n,drop:r,index:i=0}){return a.default.createElement("div",{className:`rngi-chip ${lu[t.tier]} ${e?"dim":""} ${r?"drop":""}`,style:r?{animationDelay:`${Math.min(i,8)*45}ms`}:void 0},a.default.createElement("span",{className:"rngi-chip-ico"},t.emoji),a.default.createElement("span",{className:"rngi-chip-body"},a.default.createElement("span",{className:"rngi-chip-name"},t.label),a.default.createElement("span",{className:"rngi-chip-note"},n||t.desc)),a.default.createElement("span",{className:"rngi-chip-ep"},Qt(t.ep)))}function fN({state:t,setState:e,outcome:n,setOutcome:r}){let[i,o]=(0,a.useState)(null),s=Zh(t.owned),l=cN(Date.now()<t.cooldownUntil),c=l<t.revealUntil,d=l<t.cooldownUntil,u=c&&n?1-(t.revealUntil-l)/Math.max(1,n.revealMS):1;(0,a.useEffect)(()=>{let k=GI(t,Date.now());k?o(k):e(S=>({...S,lastSeen:Date.now()}))},[]),(0,a.useEffect)(()=>{let k=setInterval(()=>e(S=>({...S,lastSeen:Date.now()})),2e4);return()=>clearInterval(k)},[e]);let p=(0,a.useCallback)(()=>{let k=Date.now();if(k<t.cooldownUntil){P.error();return}let{state:S,outcome:E}=WI(t,k);e({...S,charges:HI(S,E.fx.overdrive)}),r(E);let T=["trash","common","uncommon","rare","epic","anomaly","mythic"];P.reveal(E.revealMS);let _=Math.max(0,T.indexOf(E.result.band.key)-1);setTimeout(()=>P.land(_),E.revealMS),E.drop&&setTimeout(()=>P.achievement(),E.revealMS+320)},[t,e,r]);(0,a.useEffect)(()=>{if(!t.autoRoll||!(t.owned||[]).includes("auto-roll"))return;if(Date.now()>=t.cooldownUntil){let S=setTimeout(p,120);return()=>clearTimeout(S)}let k=setTimeout(p,t.cooldownUntil-Date.now()+60);return()=>clearTimeout(k)},[t.autoRoll,t.owned,t.cooldownUntil,p]);let f=_u(t),m=Ww(t.owned,t.streak),h=n&&n.result,v=(0,a.useMemo)(()=>n?aN(String(n.result.n).length,Math.max(1,Math.min(6,n.result.paid.length)),n.revealMS):null,[n]),x=t.lastRollAt||0,y=uN(v,x,!!n&&c),g=v?Rw(v,c?y:v.end+1):{landed:9,spinning:!1,badgeGroups:9,showSummary:!0,showRarity:!0,showStats:!0,done:!0,popping:!1},b=h?Math.max(0,["trash","common","uncommon","rare","epic","anomaly","mythic"].indexOf(h.band.key)-1):0,w=()=>{e(k=>KI(k,i,Date.now())),o(null),P.success()};return a.default.createElement(a.default.Fragment,null,i&&a.default.createElement("div",{className:"rngi-offline"},a.default.createElement("span",{className:"rngi-offline-head"},"while you were away"),a.default.createElement("span",{className:"rngi-offline-ep"},"+",Qt(i.ep)," EP"),a.default.createElement("span",{className:"rngi-offline-sub"},i.rolls," offline roll",i.rolls===1?"":"s",i.capped?" \xB7 vault full":""),a.default.createElement("button",{className:"rngi-btn small",onClick:w},"collect")),a.default.createElement("div",{className:`rngi-stage ${h?`band-${h.band.key}`:""} ${t.aura?`aura-${t.aura}`:""}`},t.aura&&a.default.createElement("span",{className:"rngi-aura-layer","aria-hidden":"true"}),h?a.default.createElement(a.default.Fragment,null,a.default.createElement(pN,{value:h.n,timeline:v,elapsed:c?y:v?v.end+1:0,aura:t.aura,tier:g.showRarity?h.band.key:null}),a.default.createElement("div",{className:`rngi-verdict ${g.showRarity?"in":"pending"}`},g.showRarity?a.default.createElement(a.default.Fragment,null,a.default.createElement("span",{className:`rngi-band band-${h.band.key} ${g.popping?"slam":""}`},h.band.label),a.default.createElement("span",{className:"rngi-rank"},h.percentile>=50?`top ${(100-h.percentile).toFixed(h.percentile>99?3:1)}%`:`bottom ${h.percentile.toFixed(1)}%`)):a.default.createElement("span",{className:"rngi-band pending-band"},"\u2014 \u2014 \u2014")),g.showSummary&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-scored rise"},On(h.ep)," EP scored"),a.default.createElement("div",{className:"rngi-banked rise"},a.default.createElement("span",{className:"rngi-banked-v"},"+",Qt(n.banked)),a.default.createElement("span",{className:"rngi-banked-l"},"banked"),f.total*n.fx.wallet>1.001&&a.default.createElement("span",{className:"rngi-banked-m"},"\xD7",(f.total*n.fx.wallet).toFixed(2)),a.default.createElement("span",{className:"rngi-ep-float",key:`${h.n}-${x}`},"+",Qt(n.banked)))),g.showStats&&n.draws.length>1&&a.default.createElement("div",{className:"rngi-draws rise"},"kept the best of ",n.draws.length,n.winner?` \xB7 ${hn[n.winner].name}`:" \xB7 the plain draw won"),g.showStats&&n.drop&&a.default.createElement("div",{className:"rngi-drop rise"},"a friend turned up: ",po[n.drop].name)):a.default.createElement(dN,{aura:t.aura})),a.default.createElement("div",{className:"rngi-controls"},d?a.default.createElement(a.default.Fragment,null,a.default.createElement(wl,{frac:c?u:1-(t.cooldownUntil-l)/Math.max(1,n?n.cooldownMS:s.cooldownMS),className:c?"reveal":"cool"}),a.default.createElement("div",{className:"rngi-wait"},c?"REVEALING":"NEXT ROLL IN"," ",((t.cooldownUntil-l)/1e3).toFixed(1),"s")):a.default.createElement("button",{className:"rngi-btn generate",onClick:p},t.totalRolls?"ROLL AGAIN":"GENERATE"),a.default.createElement("div",{className:"rngi-pace"},"reveal ",Pr(s.revealMS)," \xB7 cooldown ",Pr(s.cooldownMS),m.tier>0&&a.default.createElement(a.default.Fragment,null," \xB7 flywheel \xD7",m.bonus.toFixed(2),m.bonus<m.cap?` (${m.next} to next)`:"")),(t.owned||[]).includes("auto-roll")&&a.default.createElement("button",{className:`rngi-auto ${t.autoRoll?"on":""}`,onClick:()=>{e(k=>({...k,autoRoll:!k.autoRoll})),P.toggle()}},"auto-roll ",t.autoRoll?"on":"off")),a.default.createElement(mN,{state:t,setState:e}),h&&g.badgeGroups>0&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"PAID \xB7 ",h.paid.length),a.default.createElement("span",{className:"rngi-section-note"},h.earned.length," earned")),a.default.createElement("div",{className:"rngi-chips"},h.paid.slice(0,g.done?h.paid.length:Math.ceil(g.badgeGroups/Math.max(1,v.badgeTimes.length)*h.paid.length)).map((k,S)=>a.default.createElement(Xx,{key:k.id,badge:k,drop:!g.done,index:S,note:n.fresh.includes(k.id)?"NEW \u2014 first time seen":null}))),g.done&&h.outranked.length>0&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"OUTRANKED \xB7 ",h.outranked.length),a.default.createElement("span",{className:"rngi-section-note"},"same family, lower EP")),a.default.createElement("div",{className:"rngi-chips"},h.outranked.map(k=>a.default.createElement(Xx,{key:k.id,badge:k,dim:!0}))))))}function mN({state:t,setState:e}){let n=RI(t);if(!n.length)return null;let r=jI(t),i=t.armed||[],o=s=>{if(!qI(t,s)){P.error();return}e(l=>(l.armed||[]).includes(s)?{...l,armed:l.armed.filter(d=>d!==s)}:(l.armed||[]).length>=r?l:{...l,armed:[...l.armed||[],s]}),P.toggle()};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"RACK"),a.default.createElement("span",{className:"rngi-section-note"},i.length,"/",r," armed \xB7 fires on the next roll")),a.default.createElement("div",{className:"rngi-rack"},n.map(s=>{let l=hn[s],c=(t.charges||{})[s]||0,d=c>=l.charges;return a.default.createElement("button",{key:s,className:`rngi-skill ${d?"ready":""} ${i.includes(s)?"armed":""}`,onClick:()=>o(s),title:l.desc},a.default.createElement("span",{className:"rngi-skill-name"},l.name),a.default.createElement("span",{className:"rngi-skill-charge"},d?"READY":`${c}/${l.charges}`),a.default.createElement(wl,{frac:c/l.charges}))})))}function hN({state:t,setState:e}){let[n,r]=(0,a.useState)("pace"),i=Date.now(),o=Hw(t,i),s=(0,a.useMemo)(()=>{if(n==="pets")return Cu.map(p=>({id:p.id,kind:"companion",name:p.name,price:p.price,desc:p.desc,owned:(t.pets||[]).includes(p.id),extra:`\xD7${p.multiplier} banked`}));if(n==="skills"){let p=Lh.filter(m=>m.kind==="skill-slot").map(m=>({id:m.id,kind:m.kind,name:m.name,price:m.price,desc:m.desc,requires:m.requires,owned:(t.owned||[]).includes(m.id),locked:m.requires&&!(t.owned||[]).includes(m.requires),extra:"+1 skill slot"})),f=o.map(m=>hn[m]).filter(Boolean).map(m=>({id:m.id,kind:"skill",name:m.name,price:m.price,desc:m.desc,owned:(t.skills||[]).includes(m.id)||m.source!=="shop",free:m.source!=="shop",extra:`${m.charges} rolls to charge`}));return[...p,...f].sort((m,h)=>m.price-h.price)}let u=(kh.find(p=>p.id===n)||{}).kinds||[];return Lh.filter(p=>u.includes(p.kind)||n==="offline"&&p.id==="offline-roller").map(p=>({id:p.id,kind:p.kind,name:p.name,price:p.price,desc:p.desc,requires:p.requires,owned:(t.owned||[]).includes(p.id),locked:p.requires&&!(t.owned||[]).includes(p.requires),extra:p.kind==="roll"?`reveal ${Pr(p.from)} \u2192 ${Pr(p.value)}`:p.kind==="cooldown"?`cooldown ${Pr(p.from)} \u2192 ${Pr(p.value)}`:p.kind==="offline"?`one offline roll every ${Pr(p.value)}`:p.kind==="offline-cap"?`store up to ${p.value} offline rolls`:null})).sort((p,f)=>p.price-f.price)},[n,t.owned,t.pets,t.skills,o]),l=u=>{let p=t.ep,f=DI(t,u,Date.now());if(f.ep===p&&f===t){P.error();return}e(f),P.success()},c=u=>{e(p=>({...p,wearing:p.wearing===u?null:u})),P.toggle()},d=u=>{e(p=>({...p,aura:p.aura===u?null:u})),P.toggle()};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-shelves"},kh.map(u=>a.default.createElement("button",{key:u.id,className:n===u.id?"on":"",onClick:()=>{r(u.id),P.whoosh()}},u.label))),a.default.createElement("div",{className:"rngi-shelf-blurb"},(kh.find(u=>u.id===n)||{}).blurb,(()=>{let u=s.filter(p=>!p.owned&&!p.locked&&!p.free&&t.ep>=p.price).length;return u?a.default.createElement("span",{className:"rngi-afford-count"}," \xB7 ",u," you can afford"):null})()),n==="skills"&&a.default.createElement("div",{className:"rngi-shelf-blurb dim"},"three on sale at a time \xB7 the stall rotates every 5 minutes"),a.default.createElement("div",{className:"rngi-items"},s.length===0&&a.default.createElement("div",{className:"rngi-empty"},"nothing on this shelf yet"),s.map(u=>{let p=t.ep>=u.price;return a.default.createElement("div",{key:u.id,className:`rngi-item ${u.owned?"owned":""} ${u.locked?"locked":""} ${!u.owned&&!u.locked&&p?"afford":""}`},a.default.createElement("div",{className:"rngi-item-top"},a.default.createElement("span",{className:"rngi-item-name"},u.name),u.owned?a.default.createElement("span",{className:"rngi-item-have"},"owned"):a.default.createElement("span",{className:`rngi-item-price ${p?"ok":""}`},Qt(u.price))),a.default.createElement("div",{className:"rngi-item-desc"},u.desc),u.extra&&a.default.createElement("div",{className:"rngi-item-extra"},u.extra),u.locked&&a.default.createElement("div",{className:"rngi-item-lock"},"needs ",uo[u.requires]?.name||u.requires),!u.owned&&!u.locked&&!u.free&&a.default.createElement("button",{className:"rngi-btn small",disabled:!p,onClick:()=>l(u.id)},"buy"),u.owned&&u.kind==="companion"&&a.default.createElement("button",{className:`rngi-btn small ${t.wearing===u.id?"on":"ghost"}`,onClick:()=>c(u.id)},t.wearing===u.id?"worn":"wear"),u.owned&&u.kind==="aura"&&a.default.createElement("button",{className:`rngi-btn small ${t.aura===u.id?"on":"ghost"}`,onClick:()=>d(u.id)},t.aura===u.id?"active":"use"))})))}function gN({state:t}){let[e,n]=(0,a.useState)("all"),r=t.seen||{},i=Object.keys(r).length,o=(0,a.useMemo)(()=>{let s=[...Ts].sort((l,c)=>l.ep-c.ep);return e==="all"?s:s.filter(l=>l.tier===e)},[e]);return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"COLLECTION"),a.default.createElement("span",{className:"rngi-section-note"},i," / ",xl)),a.default.createElement(wl,{frac:i/xl}),a.default.createElement("div",{className:"rngi-filters"},a.default.createElement("button",{className:e==="all"?"on":"",onClick:()=>{n("all"),P.click()}},"all"),Wx.map(s=>{let l=Ts.filter(d=>d.tier===s&&r[d.id]).length,c=Ts.filter(d=>d.tier===s).length;return a.default.createElement("button",{key:s,className:`${lu[s]} ${e===s?"on":""}`,onClick:()=>{n(s),P.click()}},Vx[s].slice(0,4)," ",l,"/",c)})),a.default.createElement("div",{className:"rngi-tierbars"},Wx.map(s=>{let l=Ts.filter(d=>d.tier===s),c=l.filter(d=>r[d.id]).length;return a.default.createElement("div",{key:s,className:`rngi-tierbar ${lu[s]}`,title:`${Vx[s]}: ${c}/${l.length}`},a.default.createElement("span",{style:{width:`${c/Math.max(1,l.length)*100}%`}}))})),a.default.createElement("div",{className:"rngi-grid"},o.map(s=>{let l=r[s.id]||0;return a.default.createElement("div",{key:s.id,className:`rngi-cell ${lu[s.tier]} ${l?"got":"locked"}`,title:`${s.label} \u2014 ${s.desc} (${On(s.count)} of 1,000,001)`},a.default.createElement("span",{className:"rngi-cell-ico"},l?s.emoji:"\u25CC"),a.default.createElement("span",{className:"rngi-cell-name"},l?s.label:"locked"),l>1&&a.default.createElement("span",{className:"rngi-cell-n"},"\xD7",l>999?"999+":l))})))}function yN({state:t,setState:e}){let n=qw(t),r=_u(t),i=Zh(t.owned),[o,s]=(0,a.useState)(!1),l=()=>{if(!n.ready){P.error();return}e(d=>nN(d,Date.now())),s(!1),P.success()},c=[["rolls this cycle",On(t.rolls||0)],["rolls all time",On(t.totalRolls||0)],["numbers drawn",On(t.draws||0)],["EP this cycle",Qt(t.earned||0)],["EP all time",Qt(t.lifetime||0)],["EP spent",Qt(t.spent||0)],["badges found",`${Object.keys(t.seen||{}).length} / ${xl}`],["friends found",`${(t.pets||[]).length} / ${Cu.length}`],["best roll",t.best?`${On(t.best.n)} \xB7 ${Qt(t.best.ep)} EP`:"\u2014"],["roll streak",On(t.streak||0)]];return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"WALLET MULTIPLIER"),a.default.createElement("span",{className:"rngi-section-note"},"\xD7",r.total.toFixed(3))),a.default.createElement("div",{className:"rngi-mults"},[["friend",r.pet],["rebirth",r.rebirth],["prestige",r.prestige],["rollback",r.rollback],["surplus",r.surplus],["flywheel",r.flywheel]].filter(([,d])=>d>1.0001).map(([d,u])=>a.default.createElement("span",{key:d,className:"rngi-mult"},d," \xD7",u.toFixed(2))),r.total<=1.0001&&a.default.createElement("span",{className:"rngi-mult dim"},"nothing yet \u2014 wear a friend")),a.default.createElement("div",{className:"rngi-note"},"multipliers only ever touch EP that lands in your wallet. the number, its badges, its scored EP and its rank are the same for everyone."),a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"PACE")),a.default.createElement("div",{className:"rngi-mults"},a.default.createElement("span",{className:"rngi-mult"},"reveal ",Pr(i.revealMS)),a.default.createElement("span",{className:"rngi-mult"},"cooldown ",Pr(i.cooldownMS))),a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"NUMBERS")),a.default.createElement("div",{className:"rngi-rows"},c.map(([d,u])=>a.default.createElement("div",{key:d,className:"rngi-row"},a.default.createElement("span",null,d),a.default.createElement("span",{className:"rngi-row-v"},u)))),n.visible&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,n.kind.toUpperCase()),a.default.createElement("span",{className:"rngi-section-note"},"+",n.bonus,"% banked, forever")),a.default.createElement("div",{className:"rngi-gate"},a.default.createElement("div",{className:"rngi-gate-row"},a.default.createElement("span",null,"badges"),a.default.createElement("span",{className:n.badges>=n.needBadges?"ok":""},n.badges," / ",n.needBadges)),a.default.createElement(wl,{frac:n.badges/n.needBadges}),a.default.createElement("div",{className:"rngi-gate-row"},a.default.createElement("span",null,"EP this cycle"),a.default.createElement("span",{className:n.earned>=n.needEp?"ok":""},Qt(n.earned)," / ",Qt(n.needEp))),a.default.createElement(wl,{frac:n.earned/n.needEp}),a.default.createElement("div",{className:"rngi-gate-note"},"keeps: the collection, your friends and every permanent bonus. resets: EP, the shop, the rack and this cycle's streak."),o?a.default.createElement("div",{className:"rngi-gate-actions"},a.default.createElement("button",{className:"rngi-btn small",onClick:l},"yes, ",n.kind),a.default.createElement("button",{className:"rngi-btn small ghost",onClick:()=>s(!1)},"cancel")):a.default.createElement("button",{className:"rngi-btn small",disabled:!n.ready,onClick:()=>{s(!0),P.click()}},n.ready?n.kind:"not yet"))),(t.history||[]).length>0&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"rngi-section"},a.default.createElement("span",null,"RECENT")),a.default.createElement("div",{className:"rngi-log"},[...t.history].reverse().slice(0,15).map((d,u)=>a.default.createElement("div",{key:`${d.at}-${u}`,className:"rngi-log-row"},a.default.createElement("span",{className:"rngi-log-n"},On(d.n)),a.default.createElement("span",{className:`rngi-log-band band-${d.band}`},d.band),a.default.createElement("span",{className:"rngi-log-ep"},"+",Qt(d.banked)))))),a.default.createElement("div",{className:"rngi-credit"},"ported from RNGdle Infinite by jaime-gaming, itself a recreation of RNGdle by Cam / sparrowpatch. badge catalogue and EP values from RNGdle Tools. the clock here runs 15\xD7 faster than the original and the reset EP gates are 4\xD7 \u2014 everything else is theirs."))}function vN(){let[t,e]=(0,a.useState)(Qx),[n,r]=(0,a.useState)(null),[i,o]=(0,a.useState)("roll");return(0,a.useEffect)(()=>{Kx(t)},[t]),(0,a.useEffect)(()=>()=>Kx({...Qx(),lastSeen:Date.now()}),[]),a.default.createElement("div",{className:"rngi"},a.default.createElement("div",{className:"rngi-wallet"},a.default.createElement("span",{className:"rngi-wallet-ep"},Qt(t.ep)),a.default.createElement("span",{className:"rngi-wallet-l"},"EP"),t.wearing&&a.default.createElement("span",{className:"rngi-wallet-pet"},po[t.wearing].name),(t.rebirths>0||t.prestiges>0||t.rollbacks>0)&&a.default.createElement("span",{className:"rngi-wallet-marks"},t.rollbacks>0&&`\u25C6${t.rollbacks} `,t.prestiges>0&&`\u2605${t.prestiges} `,t.rebirths>0&&`\u21BB${t.rebirths}`)),a.default.createElement("div",{className:"rngi-tabs"},[["roll","roll"],["shop","shop"],["badges","badges"],["stats","stats"]].map(([s,l])=>a.default.createElement("button",{key:s,className:i===s?"on":"",onClick:()=>{o(s),P.whoosh()}},l))),i==="roll"&&a.default.createElement(fN,{state:t,setState:e,outcome:n,setOutcome:r}),i==="shop"&&a.default.createElement(hN,{state:t,setState:e}),i==="badges"&&a.default.createElement(gN,{state:t}),i==="stats"&&a.default.createElement(yN,{state:t,setState:e}))}var Kw="tasksh.expenses.v1",Yx=[{key:"food",label:"food",color:"#F59E0B",glyph:"\u25CD"},{key:"transport",label:"transport",color:"#60A5FA",glyph:"\u25B8"},{key:"bills",label:"bills",color:"#FB7185",glyph:"\u25A4"},{key:"shopping",label:"shopping",color:"#C084FC",glyph:"\u25C6"},{key:"health",label:"health",color:"#5EEAD4",glyph:"\u271A"},{key:"fun",label:"fun",color:"#34D399",glyph:"\u2605"},{key:"other",label:"other",color:"#9AA4B2",glyph:"\xB7"}],Xw=["\u20B9","$","\u20AC","\xA3","\xA5"];function Uh(t){let e=String(t??"").replace(/[,\s₹$€£¥]/g,"");if(!e||!/^\d*\.?\d+([+-]\d*\.?\d+)*$/.test(e))return null;let n=e.match(/[+-]?[^+-]+/g);if(!n)return null;let r=0;for(let i of n){let o=i[0]==="-"?-1:1,s=i.replace(/^[+-]/,"");if(s===""||s===".")return null;let l=Number(s);if(!Number.isFinite(l))return null;r+=o*l}return!Number.isFinite(r)||r<=0?null:Math.round(r*100)}function he(t,e="\u20B9",{compact:n=!1}={}){let r=t<0,i=Math.abs(Math.round(t||0));if(n&&i>=1e7)return`${r?"\u2212":""}${e}${(i/1e7).toFixed(1)}L`;if(n&&i>=1e5)return`${r?"\u2212":""}${e}${(i/1e5).toFixed(1)}k`;let o=Math.floor(i/100),s=i%100,l=On(o);return`${r?"\u2212":""}${e}${l}${s?`.${String(s).padStart(2,"0")}`:""}`}function nr(t){return String(t||"").slice(0,7)}function pl(t){let[e,n]=String(t).split("-").map(Number);return`${Gh[(n||1)-1]} ${e}`}function Yw(t){let[e,n]=String(t).split("-").map(Number);return new Date(Date.UTC(e,n,0)).getUTCDate()}function Jw(t,e,n){let r=(t||[]).filter(m=>nr(m.d)===e),i=r.reduce((m,h)=>m+h.amt,0),o={},s={},l=null;for(let m of r)o[m.cat]=(o[m.cat]||0)+m.amt,s[m.d]=(s[m.d]||0)+m.amt,(!l||m.amt>l.amt)&&(l=m);let c=Yw(e),d=nr(n)===e,u=d?Math.max(1,Number(String(n).slice(8,10))):c,p=Object.keys(s).length,f=Object.entries(o).map(([m,h])=>({key:m,amt:h,share:i?h/i:0})).sort((m,h)=>h.amt-m.amt);return{total:i,count:r.length,byCat:o,byDay:s,cats:f,biggest:l,span:c,elapsed:u,daysWithSpend:p,perDay:Math.round(i/u),perSpendDay:p?Math.round(i/p):0,today:s[n]||0,projected:d?Math.round(i/u*c):i,isCurrent:d}}function bN(t,e){let n={};for(let o of t||[])nr(o.d)===e&&(n[o.d]=(n[o.d]||0)+o.amt);let r=Yw(e),i=[];for(let o=1;o<=r;o++){let s=`${e}-${String(o).padStart(2,"0")}`;i.push({d:s,day:o,amt:n[s]||0})}return i}function yl(t,e){let[n,r]=String(t).split("-").map(Number),i=n*12+(r-1)+e;return`${Math.floor(i/12)}-${String(i%12+1).padStart(2,"0")}`}function xN(t,e){let n=(t||[]).filter(i=>nr(i.d)===e),r={};for(let i of n)(r[i.d]=r[i.d]||[]).push(i);return Object.keys(r).sort().reverse().map(i=>({d:i,total:r[i].reduce((o,s)=>o+s.amt,0),items:r[i].slice().sort((o,s)=>(s.at||0)-(o.at||0))}))}function wN(t,e,n){let r=Jw(t,e,n),i=yl(e,-1),o=r.elapsed,l=(t||[]).filter(c=>nr(c.d)!==i?!1:Number(c.d.slice(8,10))<=o).reduce((c,d)=>c+d.amt,0);return l?{prev:l,now:r.total,delta:r.total-l,pct:(r.total-l)/l,upTo:o}:null}function kN(t,e){let n=o=>(e.find(s=>s.key===o)||{label:o}).label,r=o=>`"${String(o??"").replace(/"/g,'""')}"`,i=[["date","category","amount","note"].map(r).join(",")];for(let o of[...t||[]].sort((s,l)=>s.d<l.d?-1:s.d>l.d?1:0))i.push([r(o.d),r(n(o.cat)),(o.amt/100).toFixed(2),r(o.note||"")].join(","));return"\uFEFF"+i.join(`
`)}function xu(t){return String(t||"").trim().toLowerCase().replace(/\s+/g," ")}function AN(t){let e=new Map;for(let n of t||[]){let r=xu(n.note);if(!r)continue;let i=Number.isFinite(n.at)?n.at:0,o=e.get(r);if(!o){e.set(r,{key:r,name:String(n.note).trim(),count:1,total:n.amt,lastAt:i,lastD:n.d,cat:n.cat,lastAmt:n.amt});continue}o.count+=1,o.total+=n.amt,i>=o.lastAt&&(o.lastAt=i,o.lastD=n.d,o.cat=n.cat,o.lastAmt=n.amt,o.name=String(n.note).trim())}return[...e.values()].map(n=>({...n,avg:Math.round(n.total/n.count)}))}function SN(t,e,n=6){let r=xu(e),i=[];for(let o of t){if(!r){i.push({it:o,rank:2});continue}let s=o.key;s!==r&&(s.startsWith(r)?i.push({it:o,rank:0}):s.includes(r)&&i.push({it:o,rank:1}))}return i.sort((o,s)=>o.rank-s.rank||s.it.count-o.it.count||s.it.lastAt-o.it.lastAt),i.slice(0,n).map(o=>o.it)}function Jx(t,e){let n=new Map;for(let r of t||[]){let i=xu(r.note)||`~${r.cat}`,o=xu(r.note)?String(r.note).trim():`(unnamed ${e?e(r.cat):r.cat})`,s=n.get(i);s?(s.total+=r.amt,s.count+=1):n.set(i,{key:i,label:o,total:r.amt,count:1,cat:r.cat})}return[...n.values()].map(r=>({...r,avg:Math.round(r.total/r.count)})).sort((r,i)=>i.total-r.total)}function EN(t,e,n){let r=`${e}-`,i=(t||[]).filter(m=>String(m.d).startsWith(r)),o=i.reduce((m,h)=>m+h.amt,0),s=[];for(let m=1;m<=12;m++){let h=`${e}-${String(m).padStart(2,"0")}`;s.push({key:h,m,label:Gh[m-1],amt:0})}let l={};for(let m of i){let h=Number(String(m.d).slice(5,7));h>=1&&h<=12&&(s[h-1].amt+=m.amt),l[m.cat]=(l[m.cat]||0)+m.amt}let c=String(n).slice(0,4)===String(e),d=c?Math.max(1,Number(String(n).slice(5,7))):12,u=s.filter(m=>m.amt>0).length,p=s.reduce((m,h)=>!m||h.amt>m.amt?h:m,null),f=Object.entries(l).map(([m,h])=>({key:m,amt:h,share:o?h/o:0})).sort((m,h)=>h.amt-m.amt);return{year:e,total:o,count:i.length,months:s,cats:f,biggest:p,elapsed:d,activeMonths:u,isCurrent:c,perMonth:Math.round(o/d),projected:c?Math.round(o/d*12):o,items:i}}function TN(t,e){let n=new Set((t||[]).map(r=>String(r.d).slice(0,4)).filter(r=>/^\d{4}$/.test(r)));return n.add(String(e).slice(0,4)),[...n].sort().reverse()}function CN(t,e){let n=(t||[]).filter(d=>typeof d.d=="string"&&d.d.length>=7);if(!n.length)return[];let i=n.map(d=>d.d.slice(0,7)).sort()[0],o=String(e).slice(0,7),s={};for(let d of n){let u=d.d.slice(0,7);s[u]=(s[u]||0)+d.amt}let l=[],c=0;for(;i<=o&&c++<600;)l.push({key:i,amt:s[i]||0}),i=yl(i,1);return l}function _N(){try{let t=JSON.parse(localStorage.getItem(Kw)||"null");if(!t||typeof t!="object")throw 0;let e=(Array.isArray(t.items)?t.items:[]).filter(r=>r&&Number.isFinite(r.amt)&&r.amt>0&&typeof r.d=="string").map(r=>({id:r.id||Ne(),amt:Math.round(r.amt),cat:typeof r.cat=="string"?r.cat:"other",note:typeof r.note=="string"?r.note.slice(0,120):"",d:r.d.slice(0,10),at:Number.isFinite(r.at)?r.at:0,...r.rule?{rule:r.rule}:{}})),n=Array.isArray(t.cats)&&t.cats.length?t.cats.filter(r=>r&&typeof r.key=="string"):Yx;return{items:e,cats:n,currency:Xw.includes(t.currency)?t.currency:"\u20B9"}}catch{return{items:[],cats:Yx,currency:"\u20B9"}}}function IN(t){try{localStorage.setItem(Kw,JSON.stringify(t))}catch{}}var Ms=["#F59E0B","#60A5FA","#FB7185","#C084FC","#5EEAD4","#34D399","#F472B6","#38BDF8","#FBBF24","#A78BFA","#7EE787","#9AA4B2"],Zx=["\u25CD","\u25B8","\u25A4","\u25C6","\u271A","\u2605","\xB7","\u25B2","\u25CF","\u25C8","\u2726","\u25A3"],Zw=16;function NN(t,e=[]){let n=String(t||"").toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,14)||"cat",r=n,i=2;for(;e.includes(r);)r=`${n}${i++}`;return r}function ek(t,e){let n=String(e||"").trim().slice(0,16);if(!n||t.length>=Zw)return t;let r=NN(n,t.map(s=>s.key)),i=new Set(t.map(s=>s.color)),o=Ms.find(s=>!i.has(s))||Ms[t.length%Ms.length];return[...t,{key:r,label:n,color:o,glyph:Zx[t.length%Zx.length]}]}function PN(t,e,n){let r=String(n||"").trim().slice(0,16);return r?t.map(i=>i.key===e?{...i,label:r}:i):t}function MN(t,e,n){return/^#[0-9a-fA-F]{6}$/.test(n)?t.map(r=>r.key===e?{...r,color:n}:r):t}function ON(t,e,n){if(t.cats.length<=1)return t;let r=t.cats.find(i=>i.key===n&&i.key!==e)||t.cats.find(i=>i.key!==e);return{...t,cats:t.cats.filter(i=>i.key!==e),items:t.items.map(i=>i.cat===e?{...i,cat:r.key}:i)}}var tk="tasksh.recurring.v1",BN=24,FN=400;function Sh(t,e){let[n,r,i]=String(t).split("-").map(Number);return new Date(Date.UTC(n,r-1,i)+e*864e5).toISOString().slice(0,10)}function DN(t){let[e,n,r]=String(t).split("-").map(Number);return new Date(Date.UTC(e,n-1,r)).getUTCDay()}function zN(t){let[e,n]=String(t).split("-").map(Number);return new Date(Date.UTC(e,n,0)).getUTCDate()}function LN(t,e){return!t||t.active===!1?!1:t.every==="day"?!0:t.every==="week"?DN(e)===Number(t.day):t.every==="month"?Number(String(e).slice(8,10))===Math.min(Math.max(1,Number(t.day)||1),zN(e)):!1}function UN(t,e){if(!t||t.active===!1)return[];let n=[t.lastRun?Sh(t.lastRun,1):null,t.createdOn,Sh(e,-FN)].filter(Boolean).sort().pop(),r=[];for(let i=n;i<=e&&(LN(t,i)&&r.push(i),!(r.length>=BN));i=Sh(i,1));return r}function VN(t,e){return{id:Ne(),amt:Math.round(t.amount),cat:t.cat,note:t.name||"",d:e,at:0,rule:t.id}}function WN(t,e){let n=[];return{rules:(t||[]).map(i=>{let o=UN(i,e);if(!o.length)return i;for(let s of o)n.push(VN(i,s));return{...i,lastRun:o[o.length-1]}}),added:n}}function $N(){let t=De(tk,[]);return Array.isArray(t)?t.filter(e=>e&&Number.isFinite(Number(e.amount))&&Number(e.amount)>0).map(e=>({id:e.id||Ne(),kind:"expense",every:["day","week","month"].includes(e.every)?e.every:"month",day:Number(e.day)||1,amount:Math.round(Number(e.amount)),cat:typeof e.cat=="string"?e.cat:"other",name:typeof e.name=="string"?e.name.slice(0,40):"",active:e.active!==!1,createdOn:typeof e.createdOn=="string"?e.createdOn:ne(0),lastRun:typeof e.lastRun=="string"?e.lastRun:null})).slice(0,40):[]}function wu(t,e=[],n="\u20B9"){let r=e.find(o=>o.key===t.cat),i=t.every==="day"?"every day":t.every==="week"?`every ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][Number(t.day)||0]}`:`every ${nk(Number(t.day)||1)} of the month`;return`${he(t.amount,n)} ${r?r.label:t.cat}${t.name?` \xB7 ${t.name}`:""} \u2014 ${i}`}var HN=100;function Os(t){return Math.round(Number(t)*HN)}function nk(t){let e=["th","st","nd","rd"],n=t%100;return t+(e[(n-20)%10]||e[n]||e[0])}var cu=(()=>{let t=null,e=new Set,n=()=>({..._N(),rules:$N()}),r=()=>t||(t=n());return{get:r,set:o=>{let s=typeof o=="function"?o(r()):o;t=s,IN({items:s.items,cats:s.cats,currency:s.currency});try{localStorage.setItem(tk,JSON.stringify(s.rules||[]))}catch{}e.forEach(l=>l(s))},reload(){t=null,e.forEach(o=>o(r()))},sub(o){return e.add(o),()=>e.delete(o)}}})();function rk(){let[,t]=(0,a.useState)(0);return(0,a.useEffect)(()=>cu.sub(()=>t(e=>e+1)),[]),[cu.get(),cu.set]}function qN({series:t,currency:e,max:n,onPick:r,picked:i,today:o}){let[s,l]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let d=requestAnimationFrame(()=>l(!0));return()=>cancelAnimationFrame(d)},[]);let c=Math.max(1,n||Math.max(...t.map(d=>d.amt),1));return a.default.createElement("div",{className:"xp-bars",role:"img","aria-label":`daily spending, peak ${he(c,e)}`},t.map(d=>{let u=d.amt/c,p=d.d===o;return a.default.createElement("button",{key:d.d,className:`xp-bar ${i===d.d?"on":""} ${p?"today":""} ${d.amt?"":"empty"}`,style:{"--h":`${s?Math.max(d.amt?3:1,u*100):0}%`},onClick:()=>r&&r(i===d.d?null:d.d),"aria-label":`${d.d}: ${he(d.amt,e)}`,title:`${d.d} \xB7 ${he(d.amt,e)}`},a.default.createElement("span",null))}))}function RN({cats:t,currency:e,onAdd:n,defaultCat:r,nameIndex:i=[]}){let[o,s]=(0,a.useState)(""),[l,c]=(0,a.useState)(r||t[0].key),[d,u]=(0,a.useState)(""),[p,f]=Au(),m=Uh(o),h=(0,a.useMemo)(()=>SN(i,d,5),[i,d]),v=g=>{u(g.name),c(g.cat),o||s(String(g.lastAmt/100).replace(/\.00$/,"")),P.toggle()},x=g=>{if(P.tick(),g==="del"){s(b=>b.slice(0,-1));return}if(!(g==="."&&/\.\d*$/.test(o))){if((g==="+"||g==="-")&&/[+-]$/.test(o)){s(b=>b.slice(0,-1)+g);return}(g==="+"||g==="-")&&!o||s(b=>(b+g).slice(0,18))}},y=()=>{if(!m){f(),P.error();return}n({amt:m,cat:l,note:d.trim().slice(0,120)}),s(""),u(""),P.cash()};return a.default.createElement("div",{className:`xp-composer ${p?"shake":""}`},a.default.createElement("div",{className:"xp-amount-row"},a.default.createElement("span",{className:"xp-cur"},e),a.default.createElement("span",{className:`xp-amount ${o?"":"ghost"}`},o||"0"),m!==null&&/[+-]/.test(o)&&a.default.createElement("span",{className:"xp-amount-sum"},"= ",he(m,e))),a.default.createElement("div",{className:"xp-cats"},t.map(g=>a.default.createElement("button",{key:g.key,className:`xp-cat ${l===g.key?"on":""}`,style:{"--cc":g.color},onClick:()=>{c(g.key),P.toggle()}},a.default.createElement("span",{className:"xp-cat-glyph"},g.glyph),g.label))),a.default.createElement("input",{className:"xp-note",placeholder:"what was it? e.g. sweets",value:d,maxLength:120,onChange:g=>u(g.target.value),onKeyDown:g=>g.key==="Enter"&&y()}),h.length>0&&a.default.createElement("div",{className:"xp-hints"},h.map(g=>a.default.createElement("button",{key:g.key,className:"xp-hint",onClick:()=>v(g)},a.default.createElement("span",{className:"xp-hint-name"},g.name),a.default.createElement("span",{className:"xp-hint-amt"},he(g.lastAmt,e,{compact:!0}))))),a.default.createElement("div",{className:"xp-pad"},["1","2","3","del","4","5","6","+","7","8","9","-",".","0"].map(g=>a.default.createElement("button",{key:g,className:`xp-key ${g==="+"||g==="-"?"op":""} ${g==="del"?"op":""}`,onClick:()=>x(g),"aria-label":g==="del"?"Delete":g==="-"?"Minus":g==="+"?"Plus":g},g==="del"?"\u232B":g==="-"?"\u2212":g)),a.default.createElement("button",{className:"xp-key add",disabled:m===null,onClick:y},"add")))}function jN({item:t,cat:e,currency:n,onDelete:r,onRepeat:i}){let o=Qh({onLeft:()=>r(t.id),threshold:72});return a.default.createElement("div",{className:"swipe-rail"},a.default.createElement("div",{className:`swipe-hint left ${o.dx<0?"show":""} ${o.armed==="left"?"armed":""}`},a.default.createElement("span",null,"\u2717 delete")),a.default.createElement("div",{className:"xp-row",style:{transform:o.dx?`translateX(${Math.min(0,o.dx)}px)`:void 0,transition:o.dragging?"none":"transform 200ms cubic-bezier(.65,0,.35,1)"},...o.handlers},a.default.createElement("span",{className:"xp-row-dot",style:{background:e.color}}),a.default.createElement("span",{className:"xp-row-main"},a.default.createElement("span",{className:"xp-row-cat"},t.note||e.label),t.note&&a.default.createElement("span",{className:"xp-row-sub"},e.label)),a.default.createElement("span",{className:"xp-row-amt"},he(t.amt,n)),a.default.createElement("button",{className:"xp-repeat",onClick:()=>i(t),"aria-label":"Log this again",title:"log again"},"\u21BB")))}function ew({rows:t,currency:e,catOf:n,limit:r=10}){let[i,o]=(0,a.useState)(!1);if(!t.length)return a.default.createElement("div",{className:"xp-empty-small"},"nothing named yet \u2014 give an entry a name and it shows up here");let s=t[0].total,l=i?t:t.slice(0,r);return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-names"},l.map(c=>a.default.createElement("div",{key:c.key,className:"xp-name-row"},a.default.createElement("span",{className:"xp-name-bar",style:{width:`${Math.max(2,c.total/s*100)}%`,background:n(c.cat).color}}),a.default.createElement("span",{className:"xp-name-label"},c.label),a.default.createElement("span",{className:"xp-name-n"},"\xD7",c.count),a.default.createElement("span",{className:"xp-name-total"},he(c.total,e,{compact:!0}))))),t.length>r&&a.default.createElement("button",{className:"xp-more",onClick:()=>{o(!i),P.click()}},i?"show less":`+${t.length-r} more`))}function GN({series:t,currency:e,height:n=76}){let[r,i]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{let h=requestAnimationFrame(()=>i(!0));return()=>cancelAnimationFrame(h)},[]),t.length<2)return a.default.createElement("div",{className:"xp-empty-small"},"one month of history so far \u2014 the line needs two");let o=300,s=n,l=4,c=Math.max(1,...t.map(h=>h.amt)),d=h=>l+h/(t.length-1)*(o-l*2),u=h=>s-l-h/c*(s-l*2),p=t.map((h,v)=>`${v===0?"M":"L"}${d(v).toFixed(1)},${u(h.amt).toFixed(1)}`).join(" "),f=`${p} L${d(t.length-1).toFixed(1)},${s-l} L${d(0).toFixed(1)},${s-l} Z`,m=t[t.length-1];return a.default.createElement("div",{className:"xp-line-wrap"},a.default.createElement("svg",{viewBox:`0 0 ${o} ${s}`,width:"100%",height:s,preserveAspectRatio:"none",className:"xp-line"},a.default.createElement("path",{d:f,className:"xp-line-area",style:{opacity:r?1:0}}),a.default.createElement("path",{d:p,className:"xp-line-path",style:{opacity:r?1:0}}),a.default.createElement("circle",{cx:d(t.length-1),cy:u(m.amt),r:"3",className:"xp-line-dot"})),a.default.createElement("div",{className:"xp-line-ends"},a.default.createElement("span",null,t[0].key),a.default.createElement("span",null,"peak ",he(c,e,{compact:!0})),a.default.createElement("span",null,m.key)))}function QN({months:t,currency:e,onPick:n,current:r}){let[i,o]=(0,a.useState)(!1);(0,a.useEffect)(()=>{let l=requestAnimationFrame(()=>o(!0));return()=>cancelAnimationFrame(l)},[]);let s=Math.max(1,...t.map(l=>l.amt));return a.default.createElement("div",{className:"xp-year-bars"},t.map(l=>a.default.createElement("button",{key:l.key,className:`xp-year-bar ${l.amt?"":"empty"} ${l.key===r?"on":""}`,onClick:()=>n(l),"aria-label":`${l.label}: ${he(l.amt,e)}`,title:`${l.label} \xB7 ${he(l.amt,e)}`},a.default.createElement("span",{className:"xp-year-col"},a.default.createElement("span",{style:{height:`${i?Math.max(l.amt?3:1,l.amt/s*100):0}%`}})),a.default.createElement("span",{className:"xp-year-m"},l.label[0]))))}function KN({state:t,setState:e,today:n,showCats:r,setShowCats:i,catDraft:o,setCatDraft:s,catArmed:l,setCatArmed:c}){let[d,u]=(0,a.useState)(""),[p,f]=(0,a.useState)(t.cats[0]?.key||"other"),[m,h]=(0,a.useState)(""),[v,x]=(0,a.useState)("month"),[y,g]=(0,a.useState)(1),[b,w]=Au(),k=I=>t.cats.find(M=>M.key===I)||{key:I,label:I,color:"#9AA4B2",glyph:"\xB7"},S=t.rules||[],E=()=>{let I=Uh(d);if(!I||I<=0){w(),P.error();return}e(M=>({...M,rules:[...M.rules||[],{id:Ne(),kind:"expense",every:v,day:Number(y)||1,amount:Math.round(I),cat:p,name:m.trim().slice(0,40),active:!0,createdOn:n,lastRun:null}]})),u(""),h(""),P.success()},T=I=>{e(M=>({...M,rules:M.rules.map(O=>O.id===I?{...O,active:!O.active}:O)})),P.toggle()},_=I=>{e(M=>({...M,rules:M.rules.filter(O=>O.id!==I)})),P.delete()},C=()=>{let I=o.trim();if(!I){P.error();return}e(M=>({...M,cats:ek(M.cats,I)})),s(""),P.success()};return a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"AUTOMATIC"),a.default.createElement("span",{className:"xp-section-note"},"added on the day it is due")),a.default.createElement("div",{className:`xp-rule-form ${b?"shake":""}`},a.default.createElement("div",{className:"xp-rule-row"},a.default.createElement("input",{className:"xp-rule-amt",inputMode:"decimal",placeholder:"4000",value:d,onChange:I=>u(I.target.value),"aria-label":"Amount"}),a.default.createElement("input",{className:"xp-rule-name",placeholder:"what for\u2026",maxLength:40,value:m,onChange:I=>h(I.target.value),"aria-label":"Name"})),a.default.createElement("div",{className:"duration-chips xp-rule-cats"},t.cats.map(I=>a.default.createElement("button",{key:I.key,className:p===I.key?"active":"",style:{"--ac":I.color},onClick:()=>{f(I.key),P.click()}},I.glyph," ",I.label))),a.default.createElement("div",{className:"duration-chips"},[["month","monthly"],["week","weekly"],["day","daily"]].map(([I,M])=>a.default.createElement("button",{key:I,className:v===I?"active":"",onClick:()=>{x(I),g(1),P.click()}},M))),v!=="day"&&a.default.createElement("div",{className:"duration-chips xp-rule-days"},v==="week"?["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((I,M)=>a.default.createElement("button",{key:I,className:Number(y)===M?"active":"",onClick:()=>{g(M),P.click()}},I)):[1,5,10,15,20,25,28,31].map(I=>a.default.createElement("button",{key:I,className:Number(y)===I?"active":"",onClick:()=>{g(I),P.click()}},nk(I)))),a.default.createElement("div",{className:"xp-rule-preview"},wu({amount:Uh(d)||0,cat:p,name:m,every:v,day:y},t.cats,t.currency)),a.default.createElement("button",{className:"note-btn save xp-rule-add",onClick:E},"add rule")),S.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no automatic entries yet")):a.default.createElement("div",{className:"xp-rule-list"},S.map(I=>a.default.createElement("div",{key:I.id,className:`xp-rule-card ${I.active?"":"off"}`,style:{"--cc":k(I.cat).color}},a.default.createElement("button",{className:"xp-rule-main",onClick:()=>T(I.id)},a.default.createElement("span",{className:"xp-rule-label"},wu(I,t.cats,t.currency)),a.default.createElement("span",{className:"xp-rule-meta"},I.active?"on":"paused",I.lastRun?` \xB7 last ${I.lastRun}`:" \xB7 not fired yet")),a.default.createElement("button",{className:"del-btn",onClick:()=>_(I.id),"aria-label":"Delete rule"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"13",height:"13"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})))))),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"CATEGORIES"),a.default.createElement("button",{className:"note-btn",onClick:()=>{i(!r),P.click()}},r?"done":"edit")),r?a.default.createElement("div",{className:"xp-cat-edit"},t.cats.map(I=>{let M=t.items.filter(O=>O.cat===I.key).length;return a.default.createElement("div",{className:"tag-row",key:I.key},a.default.createElement("button",{className:"tag-dot swatch",style:{background:I.color},"aria-label":`Recolour ${I.label}`,onClick:()=>{let O=Ms.indexOf(I.color);e($=>({...$,cats:MN($.cats,I.key,Ms[(O+1)%Ms.length])})),P.click()}}),a.default.createElement("input",{className:"tag-input",value:I.label,maxLength:16,onChange:O=>e($=>({...$,cats:PN($.cats,I.key,O.target.value)}))}),a.default.createElement("span",{className:"tag-use"},M),l===I.key?a.default.createElement("button",{className:"tag-del armed",onClick:()=>{e(O=>ON(O,I.key)),c(null),P.delete()}},"sure?"):a.default.createElement("button",{className:"tag-del",disabled:t.cats.length<=1,onClick:()=>{c(I.key),P.click()}},"\xD7"))}),a.default.createElement("div",{className:"tag-row"},a.default.createElement("input",{className:"tag-input",placeholder:"new category\u2026",maxLength:16,value:o,onChange:I=>s(I.target.value),onKeyDown:I=>I.key==="Enter"&&C()}),a.default.createElement("button",{className:"tag-add",disabled:t.cats.length>=Zw,onClick:C},"add")),a.default.createElement("div",{className:"xp-cat-note"},"deleting a category moves its spending to another one \u2014 the money is never thrown away.")):a.default.createElement("div",{className:"duration-chips xp-cat-preview"},t.cats.map(I=>a.default.createElement("span",{key:I.key,className:"xp-cat-chip",style:{"--cc":I.color}},I.glyph," ",I.label))))}function XN(){let[t,e]=rk(),[n,r]=(0,a.useState)(()=>nr(ne(0))),[i,o]=(0,a.useState)("add"),[s,l]=(0,a.useState)(null),[c,d]=(0,a.useState)(null),[u,p]=(0,a.useState)(!1),[f,m]=(0,a.useState)(""),[h,v]=(0,a.useState)(null),x=ne(0),y=(0,a.useCallback)(N=>t.cats.find(G=>G.key===N)||{key:N,label:N,color:"#9AA4B2",glyph:"\xB7"},[t.cats]),g=(0,a.useMemo)(()=>Jw(t.items,n,x),[t.items,n,x]),b=(0,a.useMemo)(()=>AN(t.items),[t.items]),[w,k]=(0,a.useState)(()=>String(ne(0)).slice(0,4)),S=(0,a.useMemo)(()=>EN(t.items,w,x),[t.items,w,x]),E=(0,a.useMemo)(()=>CN(t.items,x),[t.items,x]),T=(0,a.useMemo)(()=>TN(t.items,x),[t.items,x]),_=(0,a.useMemo)(()=>Jx(t.items.filter(N=>nr(N.d)===n),N=>y(N).label),[t.items,n,y]),C=(0,a.useMemo)(()=>Jx(S.items,N=>y(N).label),[S.items,y]),I=(0,a.useMemo)(()=>bN(t.items,n),[t.items,n]),M=(0,a.useMemo)(()=>xN(t.items,n),[t.items,n]),O=(0,a.useMemo)(()=>wN(t.items,n,x),[t.items,n,x]),$=({amt:N,cat:G,note:X})=>{e(ie=>({...ie,items:[...ie.items,{id:Ne(),amt:N,cat:G,note:X,d:x,at:Date.now()}]})),r(nr(x))},D=N=>{e(G=>({...G,items:[...G.items,{id:Ne(),amt:N.amt,cat:N.cat,note:N.note,d:x,at:Date.now()}]})),r(nr(x)),P.success()},U=N=>{e(G=>({...G,items:G.items.filter(X=>X.id!==N)})),P.delete()},j=()=>{try{let N=new Blob([kN(t.items,t.cats)],{type:"text/csv;charset=utf-8"}),G=URL.createObjectURL(N),X=document.createElement("a");X.href=G,X.download=`expenses-${n}.csv`,X.click(),setTimeout(()=>URL.revokeObjectURL(G),2e3),P.success()}catch{P.error()}},oe=(0,a.useMemo)(()=>[...t.items].sort((N,G)=>(G.at||0)-(N.at||0)).slice(0,4),[t.items]),se=s?(t.items||[]).filter(N=>N.d===s):null;return a.default.createElement("div",{className:"xp"},a.default.createElement("div",{className:"xp-month"},a.default.createElement("button",{onClick:()=>{r(yl(n,-1)),l(null),P.click()},"aria-label":"Previous month"},"\u2039"),a.default.createElement("div",{className:"xp-month-mid"},a.default.createElement("span",{className:"xp-month-label"},pl(n)),a.default.createElement("span",{className:"xp-month-total"},he(g.total,t.currency))),a.default.createElement("button",{disabled:n>=nr(x),onClick:()=>{r(yl(n,1)),l(null),P.click()},"aria-label":"Next month"},"\u203A")),a.default.createElement("div",{className:"xp-tabs"},[["add","add"],["report","month"],["year","year"],["list","history"],["rules","auto"]].map(([N,G])=>a.default.createElement("button",{key:N,className:i===N?"on":"",onClick:()=>{o(N),P.whoosh()}},G))),i==="rules"&&a.default.createElement(KN,{state:t,setState:e,today:x,showCats:u,setShowCats:p,catDraft:f,setCatDraft:m,catArmed:h,setCatArmed:v}),i==="add"&&a.default.createElement(a.default.Fragment,null,a.default.createElement(RN,{cats:t.cats,currency:t.currency,onAdd:$,defaultCat:oe[0]?oe[0].cat:void 0,nameIndex:b}),oe.length>0&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"AGAIN"),a.default.createElement("span",{className:"xp-section-note"},"one tap to log a repeat")),a.default.createElement("div",{className:"xp-again"},oe.map(N=>a.default.createElement("button",{key:N.id,className:"xp-again-btn",style:{"--cc":y(N.cat).color},onClick:()=>D(N)},a.default.createElement("span",{className:"xp-again-amt"},he(N.amt,t.currency)),a.default.createElement("span",{className:"xp-again-cat"},N.note||y(N.cat).label))))),a.default.createElement("div",{className:"xp-quickstats"},a.default.createElement("div",null,a.default.createElement("span",{className:"xp-qs-n"},he(g.today,t.currency,{compact:!0})),a.default.createElement("span",{className:"xp-qs-l"},"today")),a.default.createElement("div",null,a.default.createElement("span",{className:"xp-qs-n"},he(g.perDay,t.currency,{compact:!0})),a.default.createElement("span",{className:"xp-qs-l"},"a day")),a.default.createElement("div",null,a.default.createElement("span",{className:"xp-qs-n"},g.count),a.default.createElement("span",{className:"xp-qs-l"},"entries")))),i==="report"&&a.default.createElement(a.default.Fragment,null,g.count===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing logged in ",pl(n))):a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"BY DAY"),a.default.createElement("span",{className:"xp-section-note"},g.isCurrent?`${g.elapsed} of ${g.span} days`:`${g.span} days`)),a.default.createElement(qN,{series:I,currency:t.currency,today:x,picked:s,onPick:N=>{l(N),P.click()}}),s&&a.default.createElement("div",{className:"xp-day-pop"},a.default.createElement("div",{className:"xp-day-head"},a.default.createElement("span",null,s),a.default.createElement("span",{className:"xp-day-total"},he(g.byDay[s]||0,t.currency)),a.default.createElement("button",{className:"axis-pop-close",onClick:()=>l(null),"aria-label":"Close"},"\xD7")),se.length===0?a.default.createElement("div",{className:"xp-day-empty"},"nothing spent"):se.map(N=>a.default.createElement("div",{key:N.id,className:"xp-day-row"},a.default.createElement("span",{className:"xp-row-dot",style:{background:y(N.cat).color}}),a.default.createElement("span",{className:"xp-day-label"},N.note||y(N.cat).label),a.default.createElement("span",null,he(N.amt,t.currency))))),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"WHERE IT WENT")),a.default.createElement("div",{className:"xp-donut-card"},a.default.createElement(Nh,{size:126,stroke:17,segments:g.cats.map(N=>({key:N.key,value:N.amt,color:y(N.key).color})),centerLabel:he(g.total,t.currency,{compact:!0}),centerSublabel:pl(n).split(" ")[0]}),a.default.createElement("div",{className:"xp-legend"},g.cats.map(N=>a.default.createElement("div",{key:N.key,className:"xp-legend-row"},a.default.createElement("span",{className:"xp-row-dot",style:{background:y(N.key).color}}),a.default.createElement("span",{className:"xp-legend-label"},y(N.key).label),a.default.createElement("span",{className:"xp-legend-pct"},Math.round(N.share*100),"%"),a.default.createElement("span",{className:"xp-legend-amt"},he(N.amt,t.currency,{compact:!0})))))),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"WHAT YOU BOUGHT"),a.default.createElement("span",{className:"xp-section-note"},_.length," named")),a.default.createElement(ew,{rows:_,currency:t.currency,catOf:y}),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"THE NUMBERS")),a.default.createElement("div",{className:"xp-rows"},[["spent",he(g.total,t.currency)],[g.isCurrent?"a day so far":"a day",he(g.perDay,t.currency)],["a day you spent",he(g.perSpendDay,t.currency)],["days with spending",`${g.daysWithSpend} of ${g.elapsed}`],["biggest single",g.biggest?`${he(g.biggest.amt,t.currency)} \xB7 ${g.biggest.note||y(g.biggest.cat).label}`:"\u2014"],...g.isCurrent?[["on track for",he(g.projected,t.currency)]]:[]].map(([N,G])=>a.default.createElement("div",{key:N,className:"xp-rowline"},a.default.createElement("span",null,N),a.default.createElement("span",{className:"xp-rowline-v"},G)))),O&&a.default.createElement("div",{className:`xp-compare ${O.delta>0?"up":"down"}`},O.delta>0?"\u25B2":"\u25BC"," ",he(Math.abs(O.delta),t.currency)," ","(",Math.abs(Math.round(O.pct*100)),"%) ",O.delta>0?"more":"less"," than the"," ","first ",O.upTo," days of ",pl(yl(n,-1)).split(" ")[0]))),i==="year"&&a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-years"},T.map(N=>a.default.createElement("button",{key:N,className:w===N?"on":"",onClick:()=>{k(N),P.click()}},N))),S.count===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing logged in ",w)):a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-year-head"},a.default.createElement("span",{className:"xp-year-total"},he(S.total,t.currency)),a.default.createElement("span",{className:"xp-year-sub"},"in ",w," \xB7 ",he(S.perMonth,t.currency,{compact:!0})," a month",S.isCurrent?` over ${S.elapsed} month${S.elapsed===1?"":"s"}`:"")),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"BY MONTH"),a.default.createElement("span",{className:"xp-section-note"},"tap a bar to open it")),a.default.createElement(QN,{months:S.months,currency:t.currency,current:n,onPick:N=>{if(!N.amt){P.error();return}r(N.key),o("report"),l(null),P.whoosh()}}),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"WHERE IT WENT")),a.default.createElement("div",{className:"xp-donut-card"},a.default.createElement(Nh,{size:118,stroke:16,segments:S.cats.map(N=>({key:N.key,value:N.amt,color:y(N.key).color})),centerLabel:he(S.total,t.currency,{compact:!0}),centerSublabel:w}),a.default.createElement("div",{className:"xp-legend"},S.cats.map(N=>a.default.createElement("div",{key:N.key,className:"xp-legend-row"},a.default.createElement("span",{className:"xp-row-dot",style:{background:y(N.key).color}}),a.default.createElement("span",{className:"xp-legend-label"},y(N.key).label),a.default.createElement("span",{className:"xp-legend-pct"},Math.round(N.share*100),"%"),a.default.createElement("span",{className:"xp-legend-amt"},he(N.amt,t.currency,{compact:!0})))))),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"WHAT YOU BOUGHT"),a.default.createElement("span",{className:"xp-section-note"},"all of ",w)),a.default.createElement(ew,{rows:C,currency:t.currency,catOf:y}),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"THE NUMBERS")),a.default.createElement("div",{className:"xp-rows"},[["spent in "+w,he(S.total,t.currency)],[S.isCurrent?"a month so far":"a month",he(S.perMonth,t.currency)],["months with spending",`${S.activeMonths} of ${S.elapsed}`],["biggest month",S.biggest&&S.biggest.amt?`${S.biggest.label} \xB7 ${he(S.biggest.amt,t.currency)}`:"\u2014"],["entries",String(S.count)],...S.isCurrent?[["on track for",he(S.projected,t.currency)]]:[]].map(([N,G])=>a.default.createElement("div",{key:N,className:"xp-rowline"},a.default.createElement("span",null,N),a.default.createElement("span",{className:"xp-rowline-v"},G))))),a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,"ALL TIME"),a.default.createElement("span",{className:"xp-section-note"},E.length," month",E.length===1?"":"s")),a.default.createElement(GN,{series:E,currency:t.currency})),i==="list"&&a.default.createElement(a.default.Fragment,null,M.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing logged in ",pl(n))):a.default.createElement(a.default.Fragment,null,a.default.createElement("div",{className:"xp-section"},a.default.createElement("span",null,g.count," ENTRIES"),a.default.createElement("span",{className:"xp-section-note"},"swipe left to delete")),M.map(N=>a.default.createElement("div",{key:N.d,className:"xp-group"},a.default.createElement("div",{className:"xp-group-head"},a.default.createElement("span",null,N.d===x?"today":N.d.slice(5)),a.default.createElement("span",{className:"xp-group-total"},he(N.total,t.currency))),N.items.map(G=>a.default.createElement(jN,{key:G.id,item:G,cat:y(G.cat),currency:t.currency,onDelete:U,onRepeat:D}))))),a.default.createElement("div",{className:"xp-foot"},a.default.createElement("button",{className:"rngi-btn small ghost",onClick:j},"export csv"),a.default.createElement("div",{className:"xp-cur-pick"},Xw.map(N=>a.default.createElement("button",{key:N,className:t.currency===N?"on":"",onClick:()=>{e(G=>({...G,currency:N})),P.toggle()}},N)))),a.default.createElement("div",{className:"xp-note-foot"},"kept on this device and in every backup. no bank link, no account, nothing leaves the phone.")))}var tw=[{id:"rngdle",glyph:"\u221E",name:"rngdle \u221E",desc:"roll numbers, collect 235 badges, buy your way faster",Component:vN},{id:"expenses",glyph:"\u20B9",name:"expenses",desc:"what you spent, by day and by category",Component:XN},{id:"pomodoro",glyph:"\u25F4",name:"pomodoro",desc:"focus timer with breaks \xB7 rings in the background",Component:s_},{id:"captions",glyph:"\u25A4",name:"ai captions",desc:"word-timed captions burned into a clip \xB7 under 60s",Component:__}];function YN({onReward:t}){let[e,n]=(0,a.useState)(null),r=tw.find(i=>i.id===e)||null;if(r){let i=r.Component;return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"section-header tool-header"},a.default.createElement("button",{className:"tool-back",onClick:()=>{n(null),P.whoosh()}},"\u2190 tools"),a.default.createElement("span",null,r.name.toUpperCase())),a.default.createElement(i,{onReward:t}))}return a.default.createElement("div",{className:"task-list vault-scroll"},a.default.createElement("div",{className:"section-header"},a.default.createElement("span",null,"TOOLS")),a.default.createElement("div",{className:"tool-grid"},tw.map(i=>a.default.createElement("button",{key:i.id,className:"tool-card",onClick:()=>{n(i.id),P.click()}},a.default.createElement("span",{className:"tool-glyph"},i.glyph),a.default.createElement("span",{className:"tool-name"},i.name),a.default.createElement("span",{className:"tool-desc"},i.desc))),a.default.createElement("div",{className:"tool-card ghost"},a.default.createElement("span",{className:"tool-glyph"},"+"),a.default.createElement("span",{className:"tool-name"},"more soon"),a.default.createElement("span",{className:"tool-desc"},"converters, text tools, calculators"))))}function De(t,e){try{let n=localStorage.getItem(t);return n?JSON.parse(n):e}catch{return e}}function JN(t){typeof t=="number"&&Number.isFinite(t)&&t>du&&(du=t)}function ZN(t){let e=0,n=r=>{typeof r=="number"&&Number.isFinite(r)&&r>e&&(e=r)};return(t.tasks||[]).forEach(r=>n(r?.id)),(t.routines||[]).forEach(r=>n(r?.id)),(t.vaultHabits||[]).forEach(r=>n(r?.id)),(t.habits||[]).forEach(r=>n(r?.id)),(t.goodHabits||[]).forEach(r=>n(r?.id)),(t.badHabits||[]).forEach(r=>n(r?.id)),(t.rewards||[]).forEach(r=>n(r?.id)),(t.projects||[]).forEach(r=>{n(r?.id),(r?.tasks||[]).forEach(i=>n(i?.id))}),e}function e4({quest:t,index:e,onComplete:n}){let r=Qh({onRight:()=>{t.done||n()},enabled:!t.done});return a.default.createElement("div",{className:"swipe-rail"},a.default.createElement("div",{className:`swipe-hint right ${r.dx>0?"show":""} ${r.armed==="right"?"armed":""}`},a.default.createElement("span",null,"\u2713 done")),a.default.createElement("div",{className:`today-task-row quest ${t.done?"is-done":""}`,style:{animationDelay:`${e*35}ms`,transform:r.dx?`translateX(${r.dx}px)`:void 0,transition:r.dragging?"none":"transform 200ms cubic-bezier(.65,0,.35,1)"},...r.handlers},a.default.createElement("button",{className:`today-task-check ${t.done?"on":""}`,style:{"--dc":t.diff.color},onClick:()=>!t.done&&n(),"aria-label":t.done?"Completed":"Complete quest"}),a.default.createElement("span",{className:`today-task-text ${t.done?"done":""}`},t.text,(t.tagMeta||[]).map(i=>a.default.createElement("span",{key:i.key,className:"today-quest-chip",style:{"--tc":i.color}},i.label))),a.default.createElement("span",{className:"today-quest-tag",style:{color:t.diff.color}},t.done?"\u2713":`+${t.diff.coins}\u25C9`)))}function t4({routines:t,setRoutines:e,tasks:n,setTasks:r,vaultHabits:i,habits:o,rewards:s,setRewards:l,totalXP:c,setTab:d,coins:u=0,daily:p,inventory:f,onQuestComplete:m,spend:h,tags:v=co}){let x=u,y=qh(),g=y.hour*60+y.minute,{sorted:b,currentId:w,nextId:k}=Rh(t,g),S=b.find(N=>N.id===w),E=b.find(N=>N.id===k),T=ne(0),_=N=>{let G=!(t.find(X=>X.id===N)?.history||[]).includes(T);e(X=>X.map(ie=>{if(ie.id!==N)return ie;let ee=(ie.history||[]).includes(T)?ie.history.filter(re=>re!==T):[...ie.history||[],T];return{...ie,history:ee.slice(-60)}})),ku.propagate("routine",N,G),G?(P.success(),Or.emit("routineDone")):P.click()},C=(0,a.useMemo)(()=>{let N=p&&p.picks||{},G=p&&p.done||[];return Nr.map(X=>{let ie=N[X.key],F=ie?(f||[]).find(re=>re.id===ie):null;if(!F)return null;let ee=fn(F,v).map(re=>v.find(xe=>xe.key===re)).filter(Boolean);return{...F,diff:X,done:G.includes(F.id),tagMeta:ee}}).filter(Boolean)},[p,f,v]),I=(0,a.useMemo)(()=>{let N={high:0,mid:1,low:2};return[...n].filter(G=>!G.done).sort((G,X)=>N[G.priority]-N[X.priority])},[n]),M=C.filter(N=>!N.done).length,O=N=>{r(G=>G.map(X=>X.id===N?{...X,done:!X.done}:X)),P.success()},$=(0,a.useMemo)(()=>s.filter(N=>x>=N.cost),[s,x]),D=N=>{let G=s.find(X=>X.id===N);if(!G||u<G.cost){P.error();return}h&&h(G.cost),l(X=>X.map(ie=>ie.id===N?{...ie,claimed:[...ie.claimed||[],T]}:ie)),P.success(),Or.emit("rewardClaimed")},U=(0,a.useMemo)(()=>{let N={},G=X=>{(X||[]).forEach(ie=>{N[ie]=(N[ie]||0)+1})};return t.forEach(X=>G(X.history)),i.forEach(X=>G(X.history)),o.forEach(X=>G(Kt(X.history).filter(ie=>ie.t==="done").map(ie=>ie.d))),N},[t,i,o]),j=S||E,oe=!!S,se=j?(j.history||[]).includes(T):!1;return a.default.createElement("div",{className:"task-list today-view"},a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,oe?"HAPPENING NOW":"NEXT UP")),j?a.default.createElement("div",{className:"today-card"},a.default.createElement("div",{className:"today-card-row"},a.default.createElement("span",{className:"today-card-time"},Fn(mn(j.time))),a.default.createElement("span",{className:"today-card-label"},j.label)),a.default.createElement("div",{className:"today-card-sub"},oe?`in progress \xB7 ${Mr(j.duration)}`:`in ${Math.max(0,mn(j.time)-g)}m \xB7 ${Mr(j.duration)}`),a.default.createElement("button",{className:`today-mark-btn ${se?"done":""}`,onClick:()=>_(j.id)},se?"\u2713 completed today":"mark complete")):a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"no routines set up yet")),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"ACTIVITY")),a.default.createElement(wT,{counts:U,weeksBack:12}),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"OPEN TASKS"),(C.length>0||I.length>0)&&a.default.createElement("button",{className:"today-view-all",onClick:()=>d("tasks")},"view all in tasks \u2192")),C.length===0&&I.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"nothing pending \u2014 nice")):a.default.createElement("div",{className:"today-list"},C.map((N,G)=>a.default.createElement(e4,{key:`q${N.id}`,quest:N,index:G,onComplete:()=>m&&m(N.id,N.diff.coins)})),I.slice(0,5).map((N,G)=>a.default.createElement("div",{key:N.id,className:"today-task-row",style:{animationDelay:`${(C.length+G)*35}ms`}},a.default.createElement("button",{className:"today-task-check",onClick:()=>O(N.id),"aria-label":"Complete task"}),a.default.createElement("span",{className:"today-task-text"},N.text),a.default.createElement("span",{className:`today-prio-dot ${N.priority}`}))),I.length>5&&a.default.createElement("button",{className:"today-more",onClick:()=>d("tasks")},"+",I.length-5," more"),C.length>0&&a.default.createElement("div",{className:"today-quest-note"},M===0?"every quest done today":`${M} quest${M===1?"":"s"} left \xB7 swipe right to complete`)),a.default.createElement("div",{className:"filters today-section-header"},a.default.createElement("span",null,"REWARDS YOU CAN AFFORD"),a.default.createElement("span",{className:"today-xp-total"},a.default.createElement(_r,{value:u})," \u25C9")),$.length===0?a.default.createElement("div",{className:"empty-state"},a.default.createElement("div",{className:"glyph"},"{ }"),a.default.createElement("div",{className:"msg"},"keep earning coins \u2014 nothing unlocked yet")):a.default.createElement("div",{className:"today-list"},$.map((N,G)=>a.default.createElement("div",{key:N.id,className:"today-task-row",style:{animationDelay:`${G*35}ms`}},a.default.createElement("span",{className:"today-task-text"},N.label),a.default.createElement("span",{className:"today-reward-cost"},N.cost," \u25C9"),a.default.createElement("button",{className:"today-claim-btn",onClick:()=>D(N.id)},"claim")))))}function n4(){let[t,e]=(0,a.useState)("today"),[n,r]=pw(),i=W=>{W!==t&&P.whoosh(),e(W);try{let Q=document.getElementById(`tab-${W}`);Q&&Q.scrollIntoView({inline:"nearest",block:"nearest",behavior:"smooth"})}catch{}},[o,s]=(0,a.useState)(()=>De(ph,cC)),[l,c]=(0,a.useState)(()=>De(vx,ST)),[d,u]=(0,a.useState)(()=>De(bx,NT)),[p,f]=(0,a.useState)(()=>De(xx,PT)),[m,h]=(0,a.useState)(()=>De(ux,MT)),[v,x]=rk(),[y,g]=(0,a.useState)(null),b=ne(0);(0,a.useEffect)(()=>{let{rules:W,added:Q}=WN(cu.get().rules,b);if(!Q.length)return;x(it=>({...it,rules:W,items:[...it.items,...Q]}));let ue=Q.reduce((it,ho)=>it+ho.amt,0);g(`${Q.length} recurring ${Q.length===1?"entry":"entries"} added \xB7 ${ue}`);let we=setTimeout(()=>g(null),6e3);return()=>clearTimeout(we)},[b]);let[w,k]=(0,a.useState)(()=>{let W=De(mx,null);if(Array.isArray(W))return gx(W,vl());let Q=De(ph,null);return Array.isArray(Q)&&Q.length?gx(aC(Q),vl()):lC}),S=(0,a.useRef)(ne(0)),[E,T]=(0,a.useState)(()=>De(hx,{day:"",picks:{},done:[]})),[_,C]=(0,a.useState)(()=>{let W=De(wx,null);return Array.isArray(W)?W:DT(De(pC,QT),De(fC,KT))}),[I,M]=(0,a.useState)(()=>De(kx,XT)),O=(0,a.useMemo)(()=>vw(_,w),[_,I,w]),$=(0,a.useMemo)(()=>ww(O).level,[O]),D=cT($),U=aT($),{links:j,setLinks:oe}=eT(),se=VT(),[N,G]=(0,a.useState)(null);(0,a.useEffect)(()=>Wh.register(W=>G(W)),[]),(0,a.useEffect)(()=>ku.register((W,Q,ue)=>{ZE(Cs(W,Q),ue,j,{setRoutines:c,setVaultHabits:u,setHabits:C},ne(0))}),[j]);let X=ne(0),ie=(0,a.useMemo)(()=>{let W=De(uu,{});return{level:$,tasksDone:o.filter(Q=>Q.done).length,bestStreak:Math.max(_.reduce((Q,ue)=>Math.max(Q,iu(Kt(ue.history).filter(we=>we.t==="done").map(we=>we.d))),0),l.reduce((Q,ue)=>Math.max(Q,iu(ue.history)),0)),doneToday:_.filter(Q=>bl(Q,X)).length,totalHabits:_.length,routinesDoneToday:l.filter(Q=>(Q.history||[]).includes(X)).length,totalRoutines:l.length,vaultCount:d.length,friendship:U.pet.friendship,petStage:U.pet.stage,chats:U.pet.chats,calmSessions:W.calmSessions||0,earlyFinish:!!W.earlyFinish,lateFinish:!!W.lateFinish,returnedAfterGap:!!W.returnedAfterGap}},[$,o,_,l,d,U.pet,X]),F=rT(ie),ee=(0,a.useCallback)((W,Q)=>{(E.done||[]).includes(W)||(T(ue=>(ue.done||[]).includes(W)?ue:{...ue,done:[...ue.done||[],W]}),F.addCoins(Q),k(ue=>jT(ue,W,S.current)),P.success(),Or.emit("habitDone"))},[E,F]),[re,xe]=(0,a.useState)(null);(0,a.useEffect)(()=>{let W=De(uu,null);if(!W||W.seenLevel===void 0){hl({seenLevel:$});return}let Q=W.seenLevel;if($>Q){let ue=nT($);F.addCoins(ue);let we=so.filter(it=>it.unlockLevel>Q&&it.unlockLevel<=$);xe({level:$,coins:ue,unlockedTheme:we.length?we[we.length-1]:null,extraThemes:we.length>1?we.length-1:0,evolvedTo:ou($).stage>ou(Q).stage?ou($).stage:null}),hl({seenLevel:$})}else $<Q&&hl({seenLevel:$})},[$]);let[B,K]=(0,a.useState)(""),[V,ae]=(0,a.useState)("mid"),[ze,Se]=(0,a.useState)("all"),ft=(0,a.useRef)(null),Nt=(0,a.useRef)(null),[gn,fo]=(0,a.useState)(null),z=dC(),[Y,ge]=(0,a.useState)(()=>localStorage.getItem(fh)==="1"),[Ee,et]=(0,a.useState)(!1),[yn,kt]=(0,a.useState)(!1),[Fr,Dn]=(0,a.useState)(!1);(0,a.useEffect)(()=>{Ax(l)},[l]);let zn=async()=>{if(!Ee){et(!0);try{Y?(await SC(),localStorage.setItem(fh,"0"),ge(!1),Pt("success","Notifications turned off")):(await AC(),await Ax(l,{force:!0}),localStorage.setItem(fh,"1"),ge(!0),Pt("success","Notifications on \u2014 you'll get pinged when a routine starts"))}catch(W){Pt("error",W.message||"Couldn't set up notifications")}finally{et(!1)}}},Pt=(W,Q)=>{fo({type:W,text:Q})};(0,a.useEffect)(()=>{if(!gn)return;let W=setTimeout(()=>fo(null),3200);return()=>clearTimeout(W)},[gn]);let Iu=(W=!1)=>{try{let Q=Tw(W,[zs]),ue={app:"tasks.sh",version:2,exportedAt:new Date().toISOString(),containsKeys:W,store:Q,data:{tasks:o,routines:l,vaultHabits:d,projects:p,notes:m,habits:_,rewards:I}},we=new Blob([JSON.stringify(ue,null,2)],{type:"application/json"}),it=URL.createObjectURL(we),ho=ne(0),Ln=document.createElement("a");Ln.href=it,Ln.download=`tasks-sh-backup-${ho}${W?"-with-keys":""}.json`,document.body.appendChild(Ln),Ln.click(),Ln.remove(),URL.revokeObjectURL(it),Pt("ok",W?"backup exported \u2014 contains your API keys":"backup exported")}catch{Pt("err","export failed")}},ik=()=>Nt.current?.click(),ok=W=>{let Q=W.target.files&&W.target.files[0];if(W.target.value="",!Q)return;let ue=new FileReader;ue.onerror=()=>Pt("err","couldn't read that file"),ue.onload=()=>{try{let we=JSON.parse(String(ue.result));if(!we||typeof we!="object")throw new Error("bad shape");if(we.store&&typeof we.store=="object"){let ki=Object.keys(we.store).filter(Ws=>Ws.startsWith("tasksh."));if(!ki.length)throw new Error("empty store");for(let Ws of ki)if(Ws!==zs)try{localStorage.setItem(Ws,we.store[Ws])}catch{}Pt("ok",`restored ${ki.length} keys \u2014 reloading`),setTimeout(()=>window.location.reload(),700);return}let it=we.data?we.data:we;if(!it||typeof it!="object")throw new Error("bad shape");let ho={tasks:s,routines:c,vaultHabits:u,projects:f,notes:h,habits:C,rewards:M},Ln=0;for(let ki of Object.keys(ho))Array.isArray(it[ki])&&(ho[ki](it[ki]),Ln++);if(Ln===0){Pt("err","no recognizable data in that file");return}JN(ZN(it)),Pt("ok",`imported ${Ln} data set${Ln===1?"":"s"}`)}catch{Pt("err","couldn't read that file \u2014 is it a tasks.sh backup?")}},ue.readAsText(Q)},Nu=ZC();QC();let e0=qh(),t0=e0.hour*60+e0.minute,{currentId:mo,sorted:n0}=Rh(l,t0),[Sl,El]=(0,a.useState)(null),Tl=(0,a.useRef)(void 0);(0,a.useEffect)(()=>{if(Tl.current===void 0){Tl.current=mo;return}if(mo!==Tl.current){let W=n0.find(Q=>Q.id===mo);W&&El({id:mo,label:W.label,time:W.time}),Tl.current=mo}},[mo,n0]),(0,a.useEffect)(()=>{if(!Sl)return;let W=setTimeout(()=>El(null),6e3);return()=>clearTimeout(W)},[Sl]),(0,a.useEffect)(()=>{try{localStorage.setItem(ph,JSON.stringify(o))}catch{}},[o]),(0,a.useEffect)(()=>{try{localStorage.setItem(vx,JSON.stringify(l))}catch{}},[l]),(0,a.useEffect)(()=>{try{localStorage.setItem(bx,JSON.stringify(d))}catch{}},[d]),(0,a.useEffect)(()=>{try{localStorage.setItem(xx,JSON.stringify(p))}catch{}},[p]),(0,a.useEffect)(()=>{try{localStorage.setItem(ux,JSON.stringify(m))}catch{}},[m]),(0,a.useEffect)(()=>{try{localStorage.setItem(mx,JSON.stringify(w))}catch{}},[w]),(0,a.useEffect)(()=>{try{localStorage.setItem(hx,JSON.stringify(E))}catch{}},[E]);let Vs=sC(l,t0);S.current=Vs||ne(0),(0,a.useEffect)(()=>{Vs&&E.day!==Vs&&T(Aw(w,Vs))},[Vs,w,E.day]),(0,a.useEffect)(()=>{try{localStorage.setItem(wx,JSON.stringify(_))}catch{}},[_]),(0,a.useEffect)(()=>{try{localStorage.setItem(kx,JSON.stringify(I))}catch{}},[I]);let i4=(0,a.useMemo)(()=>{let W=o.length,Q=o.filter(it=>it.done).length,ue=W-Q,we=W===0?0:Math.round(Q/W*100);return{total:W,done:Q,pending:ue,pct:we}},[o]),o4=(0,a.useMemo)(()=>{let W=o.filter(Q=>!Q.done);return GE.map(Q=>({key:Q.key,label:Q.label,color:Q.color,value:W.filter(ue=>ue.priority===Q.key).length}))},[o]),s4=(0,a.useMemo)(()=>{let W=o;return ze==="active"&&(W=W.filter(Q=>!Q.done)),ze==="done"&&(W=W.filter(Q=>Q.done)),[...W].sort((Q,ue)=>{if(Q.done!==ue.done)return Q.done?1:-1;let we={high:0,mid:1,low:2};return we[Q.priority]-we[ue.priority]})},[o,ze]),a4=()=>{let W=B.trim();W&&(s(Q=>[...Q,{id:Ne(),text:W,done:!1,priority:V,createdAt:Date.now()}]),K(""),ft.current?.focus(),P.click())},l4=W=>{let Q=!o.find(ue=>ue.id===W)?.done;s(ue=>ue.map(we=>we.id===W?{...we,done:!we.done}:we)),Q?(P.success(),Or.emit("taskDone")):P.click()},c4=W=>{s(Q=>Q.filter(ue=>ue.id!==W)),P.delete()},d4=()=>{s(W=>W.filter(Q=>!Q.done)),P.whoosh()};return a.default.createElement("div",{className:"app-root"},F.current&&a.default.createElement(gC,{id:F.current,onDone:F.shift}),re&&a.default.createElement(yC,{level:re.level,coins:re.coins,unlockedTheme:re.unlockedTheme,extraThemes:re.extraThemes,evolvedTo:re.evolvedTo,onDone:()=>xe(null)}),U.evolution&&a.default.createElement(xC,{from:U.evolution.from,to:U.evolution.to,petName:U.pet.name,onDone:U.clearEvolution}),N&&a.default.createElement(hC,{selfRef:N,data:{routines:l,habits:_,vaultHabits:d},links:j,setLinks:oe,onClose:()=>G(null)}),Fr&&a.default.createElement(bC,{ctl:D,level:$,totalXP:O,earned:F.earned,coins:F.coins,onClose:()=>Dn(!1)}),a.default.createElement("style",null,`
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
          --font-mono: 'JetBrains Mono', ui-monospace, monospace;
          --font-ui: 'Inter', system-ui, sans-serif;
          --r-card: 3px;          /* theme-driven: sharp terminal -> soft aurora */
          --r-btn: 3px;
          --r-chip: 3px;
          --border-w: 1px;
          --glow-w: 0px;          /* accent bloom on focus/active surfaces */
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
          font-family: var(--font-ui);
          color: var(--text);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4vh 4vw;
          overflow: hidden;
          position: relative;
          isolation: isolate;
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
          border-radius: calc(var(--r-card) + 8px);
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
          gap: 8px;
          padding: 12px 14px;
          border-bottom: 1px solid var(--track);
        }

        .titlebar-left { display: flex; align-items: center; gap: 8px; }

        .dots { display: flex; gap: 6px; }
        @media (max-width: 400px) { .dots { display: none; } }
        .dot { width: 9px; height: 9px; border-radius: 50%; }
        .dot.red { background: var(--danger); }
        .dot.amber { background: var(--accent2); }
        .dot.green { background: var(--accent); }

        .titlebar-name {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: var(--muted);
          text-transform: uppercase;
        }

        /* Which build is actually running. Deliberately quiet -- it is a
           diagnostic, not a feature, and should never compete with the tabs. */
        .version-badge {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--muted);
          border: 1px solid var(--track);
          border-radius: 3px;
          padding: 1px 4px;
          opacity: 0.75;
        }

        .clock {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #4B5563;
          /* 12-hour time wrapped onto two lines at 360px and dragged the
             whole titlebar to 55px. 24h is shorter, never wraps, and matches
             the routines timeline. */
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        .titlebar-right { display: flex; align-items: center; gap: 6px; flex: 0 0 auto; }

        .titlebar-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          flex: 0 0 auto;
          padding: 0;
          border: 1px solid var(--border);
          border-radius: var(--r-btn);
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
          font-family: var(--font-mono);
          font-size: 11.5px;
          text-align: center;
          border: 1px solid var(--border);
          background: var(--panel);
          color: var(--text);
          animation: rowIn 200ms ease backwards;
        }

        .data-toast.ok { border-color: var(--accent); color: var(--accent); }
        .data-toast.err { border-color: var(--danger); color: var(--danger); }

        /* v44: the navigation lives at the bottom now, as icons.
           Seven targets across 360px is 51px each -- comfortably past the
           44px minimum -- so the row no longer needs to scroll, and the
           labels shrink to a caption under each glyph rather than being
           the whole target. */
        .tabs {
          display: flex;
          flex-shrink: 0;
          align-items: stretch;
          gap: 0;
          padding: 4px 2px calc(4px + env(safe-area-inset-bottom, 0px));
          border-top: 1px solid var(--track);
          border-bottom: none;
          background: var(--panel);
          position: relative;
          z-index: 2;
        }

        .tabs button {
          flex: 1 1 0;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
          border: none;
          background: transparent;
          color: #7C8591;
          font-family: var(--font-mono);
          font-size: 8.5px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          padding: 7px 2px 5px;
          min-height: 46px;
          cursor: pointer;
          position: relative;
          transition: color 150ms ease;
        }

        .tab-label {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
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
          border-radius: calc(var(--r-card) + 5px);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--accent);
          letter-spacing: 0.06em;
          background: rgba(94,234,212,0.08);
          border: 1px solid rgba(94,234,212,0.25);
          border-radius: 5px;
          padding: 4px 7px;
        }

        .hero-date {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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

        /* ---- routines as cards (v55) ----
           They were a connected timeline: one node per routine with a line
           running between them. That reads as a single object you scroll
           through rather than nineteen things you own, and there was nowhere
           to hang per-routine detail. Each is its own card now, same
           vocabulary as the quest board -- panel, border, a left stripe that
           carries the status colour. */
        .routine-row {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 11px;
          padding: 11px 12px;
          background: var(--panel);
          border: var(--border-w) solid var(--border);
          border-left: 3px solid var(--rc, var(--border));
          border-radius: var(--r-card);
          box-shadow: var(--shadow-card, none);
          touch-action: pan-y;
          user-select: none;
          transition: border-color 160ms ease, transform 220ms cubic-bezier(.65,0,.35,1);
        }
        .routine-row-wrap { margin-bottom: 8px; }
        .routine-row.current { --rc: var(--accent); }
        .routine-row.next    { --rc: var(--accent2); }
        .routine-row.idle    { --rc: #2A2F37; }
        .routine-connector   { display: none; }
        /* .edge sets the border SHORTHAND further down the sheet, which
           flattens this stripe back to 1px. Measured, not assumed: computed
           border-left came back "1px rgb(35,39,46)". Two classes outrank
           one, so this wins wherever it sits in the file. */
        .routine-row.edge {
          border-left-width: 3px;
          border-left-style: solid;
          border-left-color: var(--rc, var(--border));
        }

        /* the week strip */
        .routine-week {
          display: flex; align-items: center; gap: 4px; margin-top: 7px;
        }
        .rw-dot {
          width: 7px; height: 7px; border-radius: 2px;
          background: var(--track); border: 1px solid transparent;
          transition: background 180ms ease;
        }
        .rw-dot.on { background: var(--rc, var(--accent)); }
        .rw-dot.today { border-color: var(--muted); }
        .rw-dot.on.today { border-color: var(--text); }
        .rw-count {
          font-family: var(--font-mono); font-size: 8px; color: var(--muted);
          margin-left: 4px; font-variant-numeric: tabular-nums;
        }

        /* how far through the routine you actually are */
        .routine-progress {
          height: 2px; background: var(--track); border-radius: 2px;
          margin-top: 7px; overflow: hidden;
        }
        .rp-fill {
          display: block; height: 100%; background: var(--accent);
          border-radius: 2px; transition: width 800ms linear;
        }

        .routine-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 12px;
          flex-shrink: 0;
          padding-top: 2px;
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
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
        }

        .live-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.06em;
          color: var(--bg);
          background: var(--accent);
          padding: 1.5px 6px;
          border-radius: 4px;
          font-weight: 700;
        }

        .streak-tag {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
          font-size: 12px;
          outline: none;
        }

        .edit-unit {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 26px;
          font-weight: 700;
          color: var(--text);
          font-variant-numeric: tabular-nums;
        }

        .hero-xp-total small { font-size: 12px; color: var(--muted); font-weight: 500; }

        .hero-xp-sub {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--muted);
        }

        .hero-xp-split { display: flex; gap: 12px; margin-top: 6px; }

        .hero-xp-earned, .hero-xp-lost {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          color: var(--text);
        }

        .radial-progress-sublabel {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 17px;
          font-weight: 700;
          color: var(--text);
        }

        .donut-center-sublabel {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8B94A0;
        }

        .timeline-count {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          /* hour labels are centred on their mark (translateX(-50%)); the
             line was anchored by its left edge, so it sat half its width
             late against every tick */
          transform: translateX(-1px);
          background: var(--accent2);
          box-shadow: 0 0 8px rgba(245,166,35,0.7);
          z-index: 2;
          pointer-events: none;
        }

        .timeline-now-time {
          position: absolute;
          /* inside the track: .timeline-track is overflow:hidden, so a chip
             above the top edge gets sliced in half */
          top: 5px; left: 50%;
          transform: translateX(-50%);
          padding: 1px 4px;
          border-radius: 2px;
          background: var(--accent2);
          color: #0B0D10;
          font-family: var(--font-mono);
          font-size: 8px;
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em;
          white-space: nowrap;
          z-index: 3;
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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



        /* Content sits on its own stacking context. */
        .panel > .titlebar,
        .panel > .tabs,
        .panel > .tab-content,
        .panel > .data-msg,
        .panel > .banner { position: relative; z-index: 1; }



        .hero-xp-spend {
          font-family: var(--font-mono); font-size: 10px;
          color: var(--accent2); margin-left: 10px;
        }
        .donut-legend-total {
          margin-top: 4px; padding-top: 6px;
          border-top: 1px solid var(--track);
          color: var(--muted);
        }

        .keypool-prov {
          font-family: var(--font-mono); font-size: 8.5px;
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
          font-family: var(--font-mono); font-size: 11px;
          font-weight: 600; color: var(--accent);
        }
        .prov-where {
          font-size: 9.5px; color: var(--muted);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .prov-free {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--accent2); text-align: right; flex-shrink: 0; max-width: 44%;
          line-height: 1.35;
        }
        .prov-detected {
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 9.5px;
          color: var(--text); margin-bottom: 8px;
        }
        .keypool-hint { color: var(--muted); font-size: 8.5px; }
        .keypool-row {
          display: flex; align-items: center; gap: 9px;
          padding: 7px 10px; margin-bottom: 5px;
          background: var(--bg); border: 1px solid var(--border); border-radius: 8px;
        }
        .keypool-num {
          font-family: var(--font-mono); font-size: 9px;
          color: var(--accent); width: 12px; flex-shrink: 0;
        }
        .keypool-val {
          flex: 1; font-family: var(--font-mono);
          font-size: 10.5px; color: var(--muted); letter-spacing: 0.04em;
        }
        .keypool-del {
          background: transparent; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 10px;
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
          font-family: var(--font-mono); font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--accent); flex-shrink: 0; min-width: 46px;
        }
        .link-label { font-size: 12px; color: var(--text); flex: 1; min-width: 0;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .link-remove {
          background: transparent; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 9px;
          color: var(--danger); letter-spacing: 0.06em; flex-shrink: 0;
        }
        .link-plus { color: var(--accent); font-size: 14px; flex-shrink: 0; }
        .link-picker { display: flex; flex-direction: column; gap: 6px; margin-top: 10px; max-height: 300px; overflow-y: auto; }
        .link-add-btn {
          width: 100%; margin-top: 12px; padding: 11px 0;
          background: transparent; border: 1px dashed var(--border);
          border-radius: 9px; color: var(--accent); cursor: pointer;
          font-family: var(--font-mono); font-size: 11px;
        }

        /* tag editor */
        .tag-group { margin-bottom: 16px; }
        .tag-group-head { display: flex; align-items: center; gap: 7px; margin-bottom: 7px; }
        .tag-dot { width: 8px; height: 8px; border-radius: 50%; }
        .tag-group-name {
          font-family: var(--font-mono); font-size: 10px;
          letter-spacing: 0.1em; text-transform: uppercase; color: var(--text);
        }
        .tag-row { display: flex; gap: 6px; margin-bottom: 5px; }
        .tag-input {
          flex: 1; background: var(--bg); border: 1px solid var(--border);
          border-radius: 7px; color: var(--text); font-size: 12px;
          padding: 8px 10px; outline: none; font-family: var(--font-ui);
        }
        .tag-input:focus { border-color: var(--accent); }
        .tag-del {
          width: 32px; background: transparent; border: 1px solid var(--border);
          border-radius: 7px; color: var(--danger); cursor: pointer; font-size: 15px;
        }
        .tag-del:disabled { opacity: 0.3; cursor: not-allowed; }
        .tag-add {
          background: transparent; border: none; cursor: pointer;
          font-family: var(--font-mono); font-size: 10px;
          color: var(--accent); padding: 4px 0;
        }
        .tag-reset {
          display: block; margin: 8px auto 0; background: transparent;
          border: 1px solid var(--border); border-radius: 999px;
          color: var(--muted); cursor: pointer; padding: 5px 12px;
          font-family: var(--font-mono); font-size: 9px;
        }

        /* radar controls + area filter */
        .radar-controls {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 0 4px 10px;
        }
        .radar-note {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
          padding: 0 16px 16px; text-align: center; width: 100%;
        }

        @media (hover: hover) and (pointer: fine) {
          .cmp-stats-toggle:hover { border-color: var(--accent); color: var(--accent); }
          .cmp-key-link:hover { color: var(--accent); }
        }

        /* ---- achievements + rewards (v24) ---- */
        /* v41: moved off the top. It is position:fixed and tappable, so
           at top:16px it sat over the titlebar AND the tab bar and ate taps
           for its whole lifetime -- caught by the pointer-events gate test
           once that test started hit-testing a tab that was actually on
           screen. Bottom is where the app's other toasts live anyway. */
        .ach-toast {
          position: fixed; left: 50%;
          /* v44: clears the bottom navigation, which did not exist when
             this moved down in v41 -- it was sitting on top of the tabs */
          bottom: calc(64px + env(safe-area-inset-bottom, 0px));
          transform: translateX(-50%);
          z-index: 90; width: calc(100% - 32px); max-width: 380px;
          display: flex; align-items: center; gap: 11px;
          padding: 11px 13px;
          pointer-events: none;
          background: var(--panel);
          border: 1px solid var(--accent);
          border-radius: 12px;
          box-shadow: 0 8px 30px -8px var(--glow);
          animation: achIn 420ms cubic-bezier(.16,1,.3,1);
        }
        @keyframes achIn {
          from { transform: translate(-50%, 20px); opacity: 0; }
          to   { transform: translate(-50%, 0);    opacity: 1; }
        }
        .ach-toast-icon {
          font-size: 20px; color: var(--accent);
          text-shadow: 0 0 12px var(--glow); flex-shrink: 0;
        }
        .ach-toast-body { display: flex; flex-direction: column; gap: 1px; min-width: 0; flex: 1; }
        .ach-toast-kicker {
          font-family: var(--font-mono); font-size: 8px;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--accent);
        }
        .ach-toast-name { font-size: 13px; font-weight: 600; color: var(--text); }
        .ach-toast-desc { font-size: 10px; color: var(--muted); }
        .ach-toast-x {
          pointer-events: auto; cursor: pointer; flex-shrink: 0;
          background: transparent; border: none; color: var(--muted);
          font-size: 18px; line-height: 1; padding: 4px 2px 4px 8px;
          min-width: 26px; min-height: 26px;
        }
        .ach-toast-coins {
          font-family: var(--font-mono); font-size: 12px;
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
          font-family: var(--font-mono); font-size: 9.5px;
          letter-spacing: 0.3em; text-transform: uppercase; color: var(--accent2);
        }
        .lvl-num {
          font-family: var(--font-mono); font-size: 62px; font-weight: 700;
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
          font-family: var(--font-mono); font-size: 9px;
          color: var(--muted); margin-top: 12px;
        }

        /* gallery */
        .ach-section { margin-top: 18px; padding-top: 14px; border-top: 1px solid var(--track); }
        .ach-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 10px; }
        .ach-count {
          font-family: var(--font-mono); font-size: 9.5px; color: var(--accent2);
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
          font-family: var(--font-mono); font-size: 10px;
          font-weight: 600; color: var(--text);
        }
        .ach-desc { font-size: 8.5px; color: var(--muted); line-height: 1.35; }
        .ach-coins {
          font-family: var(--font-mono); font-size: 8.5px;
          color: var(--accent2); margin-top: 2px;
        }
        .ach-hidden-note {
          font-family: var(--font-mono); font-size: 9px;
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
          font-family: var(--font-mono); font-size: 17px; font-weight: 700;
          color: var(--text); background: transparent; border: none; cursor: pointer;
          text-align: center; padding: 2px 6px; border-radius: 6px;
        }
        .pet-name-input { border: 1px solid var(--accent); width: 130px; outline: none; }
        .pet-form { font-family: var(--font-mono); font-size: 10px; color: var(--accent); }
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
          font-family: var(--font-mono); font-size: 8.5px;
          letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted);
        }
        .pet-stat-val { font-family: var(--font-mono); font-size: 10px; color: var(--text); }
        .pet-stat-track { height: 4px; background: var(--track); border-radius: 3px; overflow: hidden; }
        .pet-stat-fill { height: 100%; border-radius: 3px; transition: width 700ms cubic-bezier(.16,1,.3,1); }

        .pet-next {
          font-family: var(--font-mono); font-size: 9.5px;
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
          border-radius: 8px; color: var(--text); font-family: var(--font-ui);
          font-size: 12.5px; padding: 10px 12px; outline: none;
          transition: border-color 140ms ease;
        }
        .pet-input:focus { border-color: var(--accent); }
        .pet-send {
          background: var(--accent); color: var(--bg); border: none; border-radius: 8px;
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
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
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 11px;
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
          font-family: var(--font-mono); font-size: 12px;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--text);
        }
        .sheet-close {
          background: transparent; border: none; color: var(--muted);
          font-size: 22px; line-height: 1; cursor: pointer; padding: 0 4px;
        }
        .sheet-sub, .sheet-foot {
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 10.5px;
          font-weight: 600; color: var(--text); margin-top: 2px;
        }
        .theme-blurb { font-size: 9px; color: var(--muted); line-height: 1.35; }
        .theme-req {
          font-family: var(--font-mono); font-size: 9px; color: var(--accent2);
        }
        .theme-bar {
          width: 100%; height: 3px; background: var(--track);
          border-radius: 2px; overflow: hidden; margin-top: 2px;
        }
        .theme-bar-fill {
          display: block; height: 100%; background: var(--accent2);
          border-radius: 2px; transition: width 600ms cubic-bezier(.16,1,.3,1);
        }
        .theme-pct { font-family: var(--font-mono); font-size: 8px; color: var(--muted); }

        /* ---- calm toggle ---- */
        .calm-toggle-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--track);
        }
        .calm-toggle-label {
          font-family: var(--font-mono); font-size: 11px; color: var(--text);
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

        /* ---- calm mode ----------------------------------------------
           Slows everything (via --motion-scale), lifts blur, dims accents
           and hides secondary chrome. Navigation stays fully usable. */
        .calm-mode .panel {
          filter: saturate(0.85) brightness(0.96);
          transition: filter 900ms ease;
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--muted);
          letter-spacing: 0.04em;
        }

        .stats-pct {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          border-radius: var(--r-card);
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
          font-family: var(--font-mono);
          font-size: 10px;
          color: #4B5563;
        }

        .prio-dot { width: 5px; height: 5px; border-radius: 50%; }
        .prio-label { text-transform: uppercase; letter-spacing: 0.04em; }
        .dot-sep { color: #2A2F37; }

        /* The delete \u2715 used to be opacity:0, revealed by .task-row:hover.
           A touchscreen never hovers, so on a phone it was invisible at all
           times -- which is why inventory delete got reported as missing
           when it had been there since v36. Visible by default now, in a
           dark red that reads as destructive without shouting, and only
           pointer devices get the fade-in. */
        .del-btn {
          border: none;
          background: transparent;
          color: #9B3341;
          cursor: pointer;
          padding: 6px;
          display: flex;
          opacity: 1;
          transition: color 150ms ease, opacity 150ms ease;
          flex-shrink: 0;
        }

        .del-btn:active { color: var(--danger); }

        @media (hover: hover) and (pointer: fine) {
          .del-btn { opacity: 0.6; }
          .task-row:hover .del-btn,
          .quest-habit-card:hover .del-btn,
          .note-card:hover .del-btn { opacity: 1; }
        }

        .del-btn:hover { color: var(--danger); }

        .empty-state {
          text-align: center;
          padding: 48px 20px;
          color: #4B5563;
        }

        .empty-state .glyph {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.06em;
          color: var(--muted);
        }

        .today-section-header:first-child { padding-top: 14px; }

        .today-view-all {
          border: none;
          background: transparent;
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 10.5px;
          cursor: pointer;
          padding: 0;
        }

        .coin-total { color: var(--accent); font-variant-numeric: tabular-nums; }
        .today-xp-total {
          color: var(--accent2);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
        }

        .today-mark-btn {
          margin-top: 12px;
          width: 100%;
          padding: 9px;
          border: 1px solid var(--border);
          border-radius: 8px;
          background: transparent;
          color: #9CA3AF;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 11px;
          text-align: left;
          padding: 6px 12px;
          cursor: pointer;
        }

        .today-more:hover { color: var(--accent); }

        .today-reward-cost {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent2);
          flex-shrink: 0;
        }

        .today-claim-btn {
          border: 1px solid var(--accent);
          border-radius: 6px;
          background: transparent;
          color: var(--accent);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          border: var(--border-w) solid var(--border);
          border-left: 2px solid var(--accent);
          border-radius: var(--r-card);
          padding: 10px 12px;
          cursor: pointer;
          transition: border-color 140ms ease;
        }
        .note-card:hover { border-color: var(--accent); }
        .note-card:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
        .note-card.editing { cursor: default; border-left-color: var(--accent2); }

        .note-head {
          display: flex; align-items: baseline; gap: 6px;
          font-family: var(--font-mono); font-size: 10px;
          margin-bottom: 6px;
        }
        .note-prompt { color: var(--accent); opacity: 0.75; }
        .note-title { color: var(--text); font-weight: 600; }
        .note-when { margin-left: auto; color: var(--muted); font-size: 9px; }

        /* pre, not div: a note is text the user typed, and their line breaks
           and indentation are part of what they meant */
        .note-body {
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          border-radius: var(--r-btn); color: var(--muted); cursor: pointer;
          font-family: var(--font-mono); font-size: 9px;
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
          color: var(--accent); font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          color: var(--text); font-family: var(--font-mono);
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
          border: var(--border-w) solid var(--border); border-left: 2px solid var(--accent);
          border-radius: var(--r-card); color: var(--text);
          font-family: var(--font-mono);
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
          color: var(--accent); font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 0.06em; padding: 0;
        }



        /* ---- swipe to complete / fail (v45) ----
           The rail holds two hint layers behind the card. They only paint
           while a drag is in progress, so a row at rest is exactly what it
           was before -- no permanent coloured gutters down the list. */
        .swipe-rail { position: relative; overflow: hidden; border-radius: var(--r-card); }
        .swipe-hint {
          position: absolute; inset: 0; display: flex; align-items: center;
          padding: 0 16px; pointer-events: none; opacity: 0;
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.08em;
          border-radius: var(--r-card);
          transition: opacity 120ms ease;
        }
        .swipe-hint.right { justify-content: flex-start; color: var(--accent); background: rgba(94,234,212,0.08); }
        .swipe-hint.left  { justify-content: flex-end;  color: var(--danger); background: rgba(155,51,65,0.14); }
        .swipe-hint.show { opacity: 0.75; }
        .swipe-hint.armed { opacity: 1; }
        .swipe-hint.armed span { text-shadow: 0 0 10px currentColor; }
        .swipe-rail .quest-habit-card { touch-action: pan-y; }
        .swipe-rail .today-task-row { touch-action: pan-y; }

        .hist-btn {
          background: transparent; border: none; cursor: pointer; padding: 3px;
          color: var(--muted); display: flex; align-items: center;
        }
        .hist-btn:active { color: var(--accent); }

        .today-task-row.quest .today-task-check {
          border-color: var(--dc, var(--accent));
        }
        .today-task-row.quest .today-task-check.on {
          background: var(--dc, var(--accent));
        }
        .today-task-row.is-done { opacity: 0.5; }
        .today-quest-tag { font-size: 9px; font-variant-numeric: tabular-nums; }
        .today-quest-chip {
          font-size: 8px; letter-spacing: 0.05em; text-transform: lowercase;
          color: var(--tc, var(--muted)); border: var(--border-w) solid var(--tc, var(--border));
          border-radius: 3px; padding: 0 3px; margin-left: 5px;
          opacity: 0.85; white-space: nowrap;
        }
        .today-quest-note {
          font-size: 8.5px; color: var(--muted); padding: 4px 2px 0;
        }

        /* ---- radar axis popup (v45, #8) ---- */
        .radar-hint {
          text-align: center; font-size: 8.5px; color: var(--muted);
          margin-top: 2px; letter-spacing: 0.04em;
        }
        .radar-label.on { fill: var(--text); }
        .axis-pop {
          margin-top: 10px; padding: 10px 11px 11px;
          border: var(--border-w) solid var(--accent); border-radius: var(--r-card);
          background: var(--panel);
          animation: rowIn 180ms ease backwards;
        }
        .axis-pop-head { display: flex; align-items: center; gap: 7px; }
        .axis-pop-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .axis-pop-name { flex: 1; font-size: 11.5px; color: var(--text); letter-spacing: 0.03em; }
        .axis-pop-close {
          background: transparent; border: none; color: var(--muted);
          font-size: 17px; line-height: 1; cursor: pointer; padding: 0 2px;
        }
        .axis-pop-value { display: flex; align-items: baseline; gap: 5px; margin-top: 7px; flex-wrap: wrap; }
        .axis-pop-xp { font-size: 21px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .axis-pop-unit { font-size: 9px; color: var(--muted); letter-spacing: 0.1em; }
        .axis-pop-raw { font-size: 8.5px; color: var(--danger); margin-left: 4px; }
        .axis-pop-split {
          display: flex; align-items: baseline; gap: 5px; margin-top: 5px;
          font-size: 10px; flex-wrap: wrap;
        }
        .axis-pop-gain { color: var(--accent); }
        .axis-pop-lose { color: var(--danger); }
        .axis-pop-sep { color: var(--muted); }
        .axis-pop-meta { font-size: 8.5px; color: var(--muted); margin-left: 4px; }
        .axis-pop-rows { margin-top: 9px; display: flex; flex-direction: column; gap: 3px; }
        .axis-pop-row {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 9.5px; color: var(--muted);
          padding: 3px 0; border-bottom: 1px solid var(--track);
        }
        .axis-pop-row:last-child { border-bottom: none; }
        .axis-pop-row-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .axis-pop-row-net { font-variant-numeric: tabular-nums; flex-shrink: 0; }
        .axis-pop-row-net.pos { color: var(--accent); }
        .axis-pop-row-net.neg { color: var(--danger); }
        .axis-pop-more, .axis-pop-empty { font-size: 8.5px; color: var(--muted); margin-top: 6px; }
        .axis-pop-daily {
          font-size: 8.5px; color: var(--accent2); margin: 4px 0 2px;
          font-variant-numeric: tabular-nums;
        }
        .axis-pop-daily-mark { color: var(--accent2); margin-right: 4px; font-size: 8px; }

        /* ---- per-quest calendar (v45, #10) ---- */
        .qh-sheet { max-width: 340px; }
        .qh-nav {
          display: flex; align-items: center; justify-content: space-between;
          margin: 4px 0 10px;
        }
        .qh-nav button {
          background: transparent; border: var(--border-w) solid var(--border);
          border-radius: var(--r-chip); color: var(--text); cursor: pointer;
          width: 30px; height: 28px; font-size: 15px; line-height: 1;
          font-family: var(--font-mono);
        }
        .qh-nav button:disabled { color: var(--track); cursor: default; }
        .qh-month { font-size: 11px; letter-spacing: 0.1em; color: var(--text); }
        .qh-dow, .qh-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
        .qh-dow { margin-bottom: 4px; }
        .qh-dow span { text-align: center; font-size: 8px; color: var(--muted); }
        .qh-cell {
          aspect-ratio: 1 / 1; display: flex; align-items: center; justify-content: center;
          border-radius: 5px; font-size: 9px; color: var(--muted);
          background: var(--track); border: 1px solid transparent;
          font-variant-numeric: tabular-nums;
        }
        .qh-cell.blank { background: transparent; }
        .qh-cell.future { opacity: 0.3; }
        .qh-cell.done { background: var(--accent); color: #0B0D10; }
        .qh-cell.slip { background: var(--danger); color: #fff; }
        .qh-cell.today { border-color: var(--text); }
        .qh-key {
          display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;
          margin-top: 10px; font-size: 8px; color: var(--muted);
        }
        .qh-key span { display: flex; align-items: center; gap: 4px; }
        .qh-swatch {
          width: 8px; height: 8px; border-radius: 2px; background: var(--track);
          display: inline-block;
        }
        .qh-swatch.done { background: var(--accent); }
        .qh-swatch.slip { background: var(--danger); }
        .qh-stats {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;
          margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--track);
        }
        .qh-stats > div { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .qh-stat-n { font-size: 15px; color: var(--text); font-variant-numeric: tabular-nums; }
        .qh-stat-l { font-size: 7.5px; color: var(--muted); text-align: center; line-height: 1.3; }
        .qh-all { margin-top: 9px; text-align: center; font-size: 8.5px; color: var(--muted); }

        /* ---- tags (v52) ---- */
        .radar-count { font-size: 9px; color: var(--muted); letter-spacing: 0.06em; }
        .quest-tag-pip { font-size: 8.5px; }
        .quest-habit-desc {
          display: block; font-size: 8.5px; color: var(--muted);
          line-height: 1.45; margin-top: 2px;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .edit-row-tags { flex-wrap: wrap; gap: 4px; }
        .edit-tag-note { font-size: 8px; color: var(--accent); margin: -2px 0 4px; }
        .edit-desc { font-size: 10.5px; margin-top: 4px; }
        .tag-dot.swatch {
          width: 14px; height: 14px; border-radius: 50%; border: none;
          cursor: pointer; flex-shrink: 0; padding: 0;
        }
        .tag-use {
          font-size: 8.5px; color: var(--muted); width: 18px; text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .tag-del.armed {
          width: auto; padding: 0 7px; font-size: 8.5px;
          color: var(--danger); border-color: var(--danger);
        }
        .tag-add:disabled { color: var(--muted); border-color: var(--border); cursor: default; }

        /* ---- named items + year view (v48) ---- */
        .xp-hints { display: flex; gap: 4px; flex-wrap: wrap; margin: -4px 0 9px; }
        .xp-hint {
          display: flex; align-items: baseline; gap: 5px;
          padding: 5px 8px; cursor: pointer; background: transparent;
          border: var(--border-w) dashed var(--border); border-radius: var(--r-chip);
          color: var(--text); font-family: var(--font-mono); font-size: 9px;
        }
        .xp-hint:active { border-style: solid; border-color: var(--accent); }
        .xp-hint-amt { color: var(--muted); font-variant-numeric: tabular-nums; }

        .xp-names { display: flex; flex-direction: column; gap: 3px; }
        .xp-name-row {
          position: relative; display: flex; align-items: center; gap: 7px;
          padding: 6px 9px; border-radius: var(--r-chip);
          border: var(--border-w) solid var(--border);
          font-size: 9.5px; font-variant-numeric: tabular-nums; overflow: hidden;
        }
        /* the bar is a background wash behind the text, not a separate column:
           at 9px a label plus a bar plus two numbers does not fit on 360px */
        .xp-name-bar {
          position: absolute; left: 0; top: 0; bottom: 0;
          opacity: 0.13; pointer-events: none;
          transition: width 600ms cubic-bezier(0.22,1,0.36,1);
        }
        .xp-name-label {
          position: relative; flex: 1; min-width: 0; color: var(--text);
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .xp-name-n { position: relative; color: var(--muted); font-size: 8.5px; }
        .xp-name-total { position: relative; color: var(--text); }
        .xp-more {
          margin-top: 6px; padding: 5px 10px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 8.5px;
        }
        .xp-empty-small { font-size: 8.5px; color: var(--muted); line-height: 1.6; padding: 6px 0; }

        .xp-years { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 10px; }
        .xp-years button {
          padding: 6px 11px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 10px;
          font-variant-numeric: tabular-nums;
        }
        .xp-years button.on { color: var(--accent); border-color: var(--accent); }

        .xp-year-head {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          padding: 12px 10px; margin-bottom: 4px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel);
        }
        .xp-year-total { font-size: 24px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .xp-year-sub { font-size: 8.5px; color: var(--muted); text-align: center; }

        .xp-year-bars {
          display: flex; align-items: flex-end; gap: 3px; height: 104px;
          padding: 7px 7px 4px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-year-bar {
          flex: 1 1 0; min-width: 0; height: 100%; padding: 0; cursor: pointer;
          background: transparent; border: none;
          display: flex; flex-direction: column; align-items: stretch; gap: 3px;
        }
        .xp-year-col { flex: 1; display: flex; align-items: flex-end; }
        .xp-year-col > span {
          display: block; width: 100%; background: var(--accent);
          border-radius: 2px 2px 0 0;
          transition: height 650ms cubic-bezier(0.22,1,0.36,1);
        }
        .xp-year-bar.empty .xp-year-col > span { background: var(--track); min-height: 2px; }
        .xp-year-bar.on .xp-year-col > span { background: #FBBF24; }
        .xp-year-m { font-size: 7px; color: var(--muted); text-align: center; }
        .xp-year-bar.on .xp-year-m { color: #FBBF24; }

        .xp-line-wrap {
          padding: 7px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-line { display: block; }
        .xp-line-path {
          fill: none; stroke: var(--accent); stroke-width: 1.6;
          vector-effect: non-scaling-stroke; transition: opacity 500ms ease;
        }
        .xp-line-area { fill: var(--accent); opacity: 0.1; transition: opacity 500ms ease; }
        .xp-line-dot { fill: var(--accent); }
        .xp-line-ends {
          display: flex; justify-content: space-between; gap: 8px;
          margin-top: 5px; font-size: 7.5px; color: var(--muted);
          font-variant-numeric: tabular-nums;
        }

        /* ---- sound (v47) ---- */
        .snd { padding: 0 14px 14px; display: flex; flex-direction: column; gap: 9px; }
        .snd-mute {
          padding: 9px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 10.5px;
          letter-spacing: 0.06em;
        }
        .snd-mute.on { color: var(--accent); border-color: var(--accent); }
        .snd-slider { display: flex; align-items: center; gap: 8px; }
        .snd-label { font-size: 9px; color: var(--muted); width: 58px; flex-shrink: 0; }
        .snd-slider input { flex: 1; min-width: 0; accent-color: var(--accent); height: 22px; }
        .snd-val {
          font-size: 9px; color: var(--text); width: 24px; text-align: right;
          font-variant-numeric: tabular-nums;
        }
        .snd-sub { font-size: 8.5px; letter-spacing: 0.12em; color: var(--muted); margin-top: 4px; }
        .snd-scenes { display: flex; gap: 4px; flex-wrap: wrap; }
        .snd-scenes button {
          padding: 6px 9px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 9px;
        }
        .snd-scenes button.on { color: var(--accent); border-color: var(--accent); }
        .snd-test { margin-left: auto; }
        .snd-test.on { color: var(--danger) !important; border-color: var(--danger) !important; }
        .snd-hint { font-size: 8px; color: var(--muted); line-height: 1.6; }

        .pomo-silence {
          display: block; margin: 10px auto 0; padding: 9px 22px; cursor: pointer;
          background: transparent; color: var(--danger);
          border: 1px solid var(--danger); border-radius: var(--r-card);
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em;
          animation: pulseRing 900ms ease-in-out infinite;
        }
        @keyframes pulseRing {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }

        /* ---- expenses (v46) ----
           Amount first, big keys, one hand. The keypad is deliberately not
           the phone keyboard: a numeric keyboard still costs a layout shift
           and half the screen, and this one carries + and \u2212 that behave. */
        .xp { padding: 4px 14px 20px; }

        .xp-month {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px; padding: 8px 10px; margin-bottom: 8px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel);
        }
        .xp-month button {
          background: transparent; border: var(--border-w) solid var(--border);
          border-radius: var(--r-chip); color: var(--text); cursor: pointer;
          width: 30px; height: 28px; font-size: 15px; line-height: 1;
          font-family: var(--font-mono); flex-shrink: 0;
        }
        .xp-month button:disabled { color: var(--track); cursor: default; }
        .xp-month-mid { display: flex; flex-direction: column; align-items: center; gap: 1px; }
        .xp-month-label { font-size: 10px; letter-spacing: 0.1em; color: var(--muted); }
        .xp-month-total { font-size: 17px; color: var(--accent); font-variant-numeric: tabular-nums; }

        /* ---- recurring rules + category editor (v54) ---- */
        .xp-rule-form {
          display: flex; flex-direction: column; gap: 7px;
          background: var(--panel); border: var(--border-w) solid var(--border);
          border-radius: var(--r-card); padding: 11px; margin-bottom: 11px;
        }
        .xp-rule-row { display: flex; gap: 7px; }
        .xp-rule-amt, .xp-rule-name {
          font-family: var(--font-mono); font-size: 12.5px; color: var(--text);
          background: var(--bg); border: var(--border-w) solid var(--border);
          border-radius: 6px; padding: 8px 9px; min-width: 0;
        }
        .xp-rule-amt { width: 92px; flex: none; font-variant-numeric: tabular-nums; }
        .xp-rule-name { flex: 1; }
        .xp-rule-amt:focus, .xp-rule-name:focus { outline: none; border-color: var(--accent); }
        .xp-rule-cats, .xp-rule-days { flex-wrap: wrap; }
        .xp-rule-preview {
          font-family: var(--font-mono); font-size: 9.5px; color: var(--muted);
          border-top: var(--border-w) solid var(--border); padding-top: 7px;
        }
        .xp-rule-add { align-self: flex-start; }
        .xp-rule-list { display: flex; flex-direction: column; gap: 7px; margin-bottom: 13px; }
        .xp-rule-card {
          display: flex; align-items: center; gap: 9px;
          background: var(--panel); border: var(--border-w) solid var(--border);
          border-left: 3px solid var(--cc); border-radius: var(--r-card); padding: 10px 11px;
        }
        .xp-rule-card.off { opacity: 0.45; }
        .xp-rule-main {
          flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px;
          background: none; border: none; text-align: left; cursor: pointer; padding: 0;
          font-family: var(--font-mono);
        }
        .xp-rule-label { font-size: 11.5px; color: var(--text); }
        .xp-rule-meta { font-size: 9px; color: var(--muted); }
        .xp-cat-preview { flex-wrap: wrap; margin-bottom: 12px; }
        .xp-cat-chip {
          font-family: var(--font-mono); font-size: 10px; color: var(--cc);
          border: var(--border-w) solid var(--cc); border-radius: 4px;
          padding: 4px 8px; opacity: 0.9;
        }
        .xp-cat-edit { display: flex; flex-direction: column; gap: 6px; margin-bottom: 12px; }
        .xp-cat-note { font-family: var(--font-mono); font-size: 8.5px; color: var(--muted); margin-top: 4px; }
        .recur-note {
          position: fixed; left: 50%; transform: translateX(-50%);
          bottom: calc(68px + env(safe-area-inset-bottom, 0px));
          background: var(--panel); border: var(--border-w) solid var(--accent2);
          border-radius: 6px; padding: 7px 13px; z-index: 60;
          font-family: var(--font-mono); font-size: 10px; color: var(--accent2);
          pointer-events: none;
        }

        .xp-tabs { display: flex; gap: 5px; margin-bottom: 11px; }
        .xp-tabs button {
          flex: 1; padding: 7px 3px; cursor: pointer;
          background: transparent; color: var(--muted);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em;
        }
        .xp-tabs button.on { color: var(--accent); border-color: var(--accent); }

        /* ---- composer ---- */
        .xp-composer {
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          padding: 12px 11px 11px; background: var(--panel);
        }
        .xp-amount-row {
          display: flex; align-items: baseline; gap: 5px; flex-wrap: wrap;
          padding-bottom: 10px; border-bottom: 1px solid var(--track);
        }
        .xp-cur { font-size: 15px; color: var(--muted); }
        .xp-amount {
          font-size: 28px; color: var(--text); font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em; word-break: break-all;
        }
        .xp-amount.ghost { color: var(--track); }
        .xp-amount-sum { margin-left: auto; font-size: 10px; color: var(--accent); }

        .xp-cats { display: flex; gap: 4px; flex-wrap: wrap; margin: 10px 0 8px; }
        .xp-cat {
          display: flex; align-items: center; gap: 4px;
          padding: 5px 8px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 9px;
        }
        .xp-cat.on { color: var(--cc); border-color: var(--cc); }
        .xp-cat-glyph { color: var(--cc); font-size: 10px; }

        .xp-note {
          width: 100%; padding: 8px 9px; margin-bottom: 9px;
          background: var(--bg); color: var(--text);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 11px;
        }
        .xp-note:focus { outline: none; border-color: var(--accent); }

        .xp-pad { display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
        .xp-key {
          padding: 13px 0; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--text); font-family: var(--font-mono); font-size: 15px;
          min-height: 46px;
        }
        .xp-key:active { border-color: var(--accent); background: rgba(94,234,212,0.05); }
        .xp-key.op { color: var(--muted); font-size: 16px; }
        .xp-key.add {
          grid-column: span 2; color: var(--accent); border-color: var(--accent);
          font-size: 11px; letter-spacing: 0.1em;
        }
        .xp-key.add:disabled { color: var(--muted); border-color: var(--border); }

        /* ---- repeat ---- */
        .xp-again { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; }
        .xp-again-btn {
          display: flex; flex-direction: column; gap: 2px; align-items: flex-start;
          padding: 8px 9px; cursor: pointer; text-align: left; background: transparent;
          border: var(--border-w) solid var(--border); border-left: 2px solid var(--cc);
          border-radius: var(--r-chip); font-family: var(--font-mono); color: var(--text);
        }
        .xp-again-amt { font-size: 12px; font-variant-numeric: tabular-nums; }
        .xp-again-cat {
          font-size: 8.5px; color: var(--muted); max-width: 100%;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }

        .xp-quickstats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px;
          margin-top: 14px; padding-top: 11px; border-top: 1px solid var(--track);
        }
        .xp-quickstats > div { display: flex; flex-direction: column; align-items: center; gap: 2px; }
        .xp-qs-n { font-size: 14px; color: var(--text); font-variant-numeric: tabular-nums; }
        .xp-qs-l { font-size: 8px; color: var(--muted); letter-spacing: 0.05em; }

        /* ---- sections ---- */
        .xp-section {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 9.5px; letter-spacing: 0.1em; color: var(--muted); margin: 15px 0 7px;
        }
        .xp-section-note { letter-spacing: 0; }

        /* ---- day bars ---- */
        .xp-bars {
          display: flex; align-items: flex-end; gap: 2px; height: 92px;
          padding: 6px 7px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-bar {
          flex: 1 1 0; min-width: 0; height: 100%; padding: 0; cursor: pointer;
          background: transparent; border: none;
          display: flex; align-items: flex-end;
        }
        .xp-bar > span {
          display: block; width: 100%; height: var(--h, 0%);
          background: var(--accent); border-radius: 2px 2px 0 0;
          transition: height 600ms cubic-bezier(0.22,1,0.36,1), background 120ms ease;
        }
        /* A day with nothing spent still has to occupy its slot, or the
           chart reads as "cut off after the 18th" rather than "the month
           has 31 days and 13 of them are still ahead". */
        .xp-bar.empty > span { background: var(--track); min-height: 2px; }
        .xp-bar.today > span { background: #FBBF24; }
        .xp-bar.on > span { background: var(--text); }

        .xp-day-pop {
          margin-top: 8px; padding: 9px 10px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--accent);
          animation: rowIn 180ms ease backwards;
        }
        .xp-day-head {
          display: flex; align-items: baseline; gap: 8px;
          font-size: 10px; color: var(--muted);
          padding-bottom: 6px; border-bottom: 1px solid var(--track);
        }
        .xp-day-total { margin-left: auto; color: var(--accent); font-variant-numeric: tabular-nums; }
        .xp-day-row {
          display: flex; align-items: center; gap: 7px; padding: 5px 0;
          font-size: 9.5px; color: var(--muted); font-variant-numeric: tabular-nums;
        }
        .xp-day-label { flex: 1; min-width: 0; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .xp-day-empty { font-size: 9px; color: var(--muted); padding: 7px 0; }

        /* ---- donut + legend ---- */
        .xp-donut-card {
          display: flex; gap: 12px; align-items: center; flex-wrap: wrap;
          padding: 11px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .xp-legend { flex: 1; min-width: 150px; display: flex; flex-direction: column; gap: 3px; }
        .xp-legend-row {
          display: flex; align-items: center; gap: 6px; font-size: 9.5px;
          color: var(--muted); font-variant-numeric: tabular-nums;
        }
        .xp-legend-label { flex: 1; min-width: 0; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .xp-legend-pct { width: 30px; text-align: right; }
        .xp-legend-amt { width: 56px; text-align: right; color: var(--text); }
        .xp-row-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }

        .xp-rows { display: flex; flex-direction: column; gap: 2px; }
        .xp-rowline {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 9.5px; color: var(--muted); padding: 4px 0;
          border-bottom: 1px solid var(--track);
        }
        .xp-rowline:last-child { border-bottom: none; }
        .xp-rowline-v { color: var(--text); font-variant-numeric: tabular-nums; text-align: right; }

        .xp-compare {
          margin-top: 10px; padding: 8px 10px; font-size: 9px; line-height: 1.6;
          border-radius: var(--r-chip); border: var(--border-w) solid var(--border);
        }
        .xp-compare.up { color: var(--danger); border-left: 2px solid var(--danger); }
        .xp-compare.down { color: var(--accent); border-left: 2px solid var(--accent); }

        /* ---- history ---- */
        .xp-group { margin-bottom: 11px; }
        .xp-group-head {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 9px; color: var(--muted); margin-bottom: 4px;
          font-variant-numeric: tabular-nums;
        }
        .xp-group-total { color: var(--text); }
        .xp-row {
          display: flex; align-items: center; gap: 8px;
          padding: 8px 10px; margin-bottom: 4px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          background: var(--panel); touch-action: pan-y;
        }
        .xp-row-main { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
        .xp-row-cat { font-size: 10.5px; color: var(--text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .xp-row-sub { font-size: 8px; color: var(--muted); }
        .xp-row-amt { font-size: 11px; color: var(--text); font-variant-numeric: tabular-nums; }
        .xp-repeat {
          background: transparent; border: none; cursor: pointer; padding: 2px 4px;
          color: var(--muted); font-size: 13px; line-height: 1;
        }
        .xp-repeat:active { color: var(--accent); }

        .xp-foot {
          display: flex; align-items: center; justify-content: space-between;
          gap: 8px; margin-top: 14px; flex-wrap: wrap;
        }
        .xp-cur-pick { display: flex; gap: 3px; }
        .xp-cur-pick button {
          width: 26px; height: 26px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 11px;
        }
        .xp-cur-pick button.on { color: var(--accent); border-color: var(--accent); }
        .xp-note-foot {
          margin-top: 11px; font-size: 8px; color: var(--muted); line-height: 1.7;
          padding-left: 8px; border-left: 2px solid var(--track);
        }

        @media (max-width: 340px) {
          .xp-amount { font-size: 23px; }
          .xp-again { grid-template-columns: 1fr; }
          .xp-key { padding: 11px 0; min-height: 42px; font-size: 14px; }
        }

        /* ---- rngdle infinite (v45) ----
           Tier and band colour is the only decoration. The six "skins" are
           cosmetic layers over the result stage and deliberately read as
           terminal effects -- scanline, grid, tear, churn, slab, hex spill --
           rather than the gradients the original uses. */
        .rngi { padding: 4px 14px 20px; }

        .rngi-wallet {
          display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap;
          padding: 8px 10px; margin-bottom: 8px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel);
        }
        .rngi-wallet-ep { font-size: 17px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .rngi-wallet-l { font-size: 9px; color: var(--muted); letter-spacing: 0.12em; }
        .rngi-wallet-pet { margin-left: auto; font-size: 9px; color: var(--muted); }
        .rngi-wallet-marks { font-size: 9px; color: var(--accent); letter-spacing: 0.06em; }

        .rngi-tabs { display: flex; gap: 5px; margin-bottom: 11px; }
        .rngi-tabs button, .rngi-shelves button {
          flex: 1; padding: 7px 3px; cursor: pointer;
          background: transparent; color: var(--muted);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em;
        }
        .rngi-tabs button.on, .rngi-shelves button.on { color: var(--accent); border-color: var(--accent); }

        /* ---- the stage ---- */
        .rngi-stage {
          position: relative; overflow: hidden;
          border: var(--border-w) solid var(--border); border-radius: var(--r-card);
          background: var(--panel); padding: 18px 12px 15px; text-align: center;
          margin-bottom: 10px; min-height: 148px;
          display: flex; flex-direction: column; justify-content: center;
        }
        .rngi-stage.band-epic, .rngi-stage.band-anomaly, .rngi-stage.band-mythic { border-color: currentColor; }

        /* ---- the digit stage (v49) ----
           Seven fixed slots, right-aligned, so 777 and 1,000,000 land in the
           same place and the box never jumps between rolls. Ported from
           RNGdle Infinite's choreography; the palette is this app's, because
           their pastel gradients are the one thing that would not survive
           contact with a terminal theme. */
        .rngi-digits {
          display: flex; justify-content: center; align-items: baseline;
          gap: 1px; font-family: var(--font-mono); line-height: 1.05;
          font-variant-numeric: tabular-nums;
        }
        .rngi-digit {
          display: inline-block; width: 0.62em; text-align: center;
          font-size: 34px; color: var(--text);
          transition: color 160ms ease;
        }
        .rngi-digit.blank { opacity: 0; }
        .rngi-digit.scrambling { color: var(--muted); opacity: 0.5; }
        .rngi-digit.settling { animation: rngiDigitLand 320ms cubic-bezier(.2,1.3,.4,1); }
        @keyframes rngiDigitLand {
          from { transform: scale(1.55); text-shadow: 0 0 14px currentColor; }
          to   { transform: scale(1);    text-shadow: 0 0 0 transparent; }
        }
        .rngi-digits.collapse { animation: rngiCollapse 420ms ease; }
        @keyframes rngiCollapse {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        /* Rarity is legible from the number itself before you read the word.
           Terminal grammar: phosphor glow intensity, not gradients. */
        .rngi-digits.t-uncommon .rngi-digit { color: #5EEAD4; text-shadow: 0 0 6px rgba(94,234,212,0.30); }
        .rngi-digits.t-rare     .rngi-digit { color: #60A5FA; text-shadow: 0 0 8px rgba(96,165,250,0.38); }
        .rngi-digits.t-epic     .rngi-digit { color: #C084FC; text-shadow: 0 0 11px rgba(192,132,252,0.45); }
        .rngi-digits.t-anomaly  .rngi-digit {
          color: #FBBF24; text-shadow: 0 0 14px rgba(251,191,36,0.55);
          animation: rngiAnomaly 2.4s ease-in-out infinite;
        }
        .rngi-digits.t-mythic   .rngi-digit {
          color: #FB7185; text-shadow: 0 0 18px rgba(251,113,133,0.65);
          animation: rngiMythic 1.6s steps(1) infinite;
        }
        @keyframes rngiAnomaly { 50% { text-shadow: 0 0 22px rgba(251,191,36,0.85); } }
        @keyframes rngiMythic {
          0%, 88%, 100% { transform: none; }
          90% { transform: translateX(-1.5px) skewX(-7deg); }
          93% { transform: translateX(2px); }
          96% { transform: translateX(-1px) skewX(4deg); }
        }

        .rngi-verdict { margin-top: 9px; display: flex; gap: 8px; justify-content: center; align-items: baseline; }
        .rngi-band { font-size: 11px; letter-spacing: 0.16em; }
        .rngi-rank { font-size: 9px; color: var(--muted); }
        .rngi-scored { margin-top: 4px; font-size: 9.5px; color: var(--muted); font-variant-numeric: tabular-nums; }
        .rngi-banked { margin-top: 7px; display: flex; gap: 5px; justify-content: center; align-items: baseline; }
        .rngi-banked-v { font-size: 16px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .rngi-banked-l { font-size: 9px; color: var(--muted); letter-spacing: 0.08em; }
        .rngi-banked-m { font-size: 9px; color: var(--accent); opacity: 0.75; }
        .rngi-draws, .rngi-drop { margin-top: 6px; font-size: 8.5px; color: var(--muted); }
        .rngi-drop { color: var(--accent); }

        .rngi-digits.idling .rngi-digit { opacity: 0.3; font-size: 30px; }
        .rngi-idle-msg { margin-top: 12px; font-size: 9px; color: var(--muted); line-height: 1.7; }

        .band-trash    { color: #6B7280; }
        .band-common   { color: #9AA4B2; }
        .band-uncommon { color: #5EEAD4; }
        .band-rare     { color: #60A5FA; }
        .band-epic     { color: #C084FC; }
        .band-anomaly  { color: #FBBF24; }
        .band-mythic   { color: #FB7185; }

        /* ---- skins ---- */
        .rngi-aura-layer { position: absolute; inset: 0; pointer-events: none; }
        .aura-static .rngi-aura-layer {
          background: repeating-linear-gradient(
            to bottom, rgba(94,234,212,0.05) 0 1px, transparent 1px 3px);
          animation: rngiScan 2.4s linear infinite;
        }
        @keyframes rngiScan { to { transform: translateY(3px); } }
        .aura-blueprint .rngi-aura-layer {
          background:
            repeating-linear-gradient(to right, rgba(96,165,250,0.09) 0 1px, transparent 1px 14px),
            repeating-linear-gradient(to bottom, rgba(96,165,250,0.09) 0 1px, transparent 1px 14px);
        }
        .aura-glitch .rngi-digits { animation: rngiTear 3.2s steps(1) infinite; }
        @keyframes rngiTear {
          0%, 92%, 100% { transform: none; }
          93% { transform: translateX(-2px) skewX(-6deg); }
          95% { transform: translateX(3px); }
          97% { transform: translateX(-1px) skewX(3deg); }
        }
        .aura-monolith { background: #0B0D10; }
        .aura-monolith .rngi-aura-layer { background: none; }
        .aura-hexdump .rngi-aura-layer {
          background-image: repeating-linear-gradient(
            to bottom, rgba(148,163,184,0.055) 0 9px, transparent 9px 18px);
        }
        .aura-hexdump::before {
          content: "4e 55 4d 42 45 52 20 30 78 30 30 30 30 30 30";
          position: absolute; left: 8px; bottom: 6px; opacity: 0.18;
          font-size: 7px; letter-spacing: 0.1em; color: var(--muted);
        }

        /* ---- staged reveal (v49) ---- */
        .rngi-verdict.pending { opacity: 0.45; }
        .pending-band { color: var(--muted); letter-spacing: 0.3em; }
        .rngi-band.slam { animation: rngiSlam 560ms cubic-bezier(.17,.89,.32,1.28); }
        @keyframes rngiSlam {
          0%   { transform: scale(2.1); opacity: 0; letter-spacing: 0.5em; }
          55%  { transform: scale(0.94); opacity: 1; letter-spacing: 0.1em; }
          100% { transform: scale(1); letter-spacing: 0.16em; }
        }
        .rise { animation: rngiRise 320ms ease backwards; }
        @keyframes rngiRise {
          from { opacity: 0; transform: translateY(9px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .rngi-chip.drop { animation: rngiBadgeDrop 300ms cubic-bezier(.2,1.1,.4,1) backwards; }
        @keyframes rngiBadgeDrop {
          from { opacity: 0; transform: translateY(-16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .rngi-banked { position: relative; }
        /* The float rises up the RIGHT EDGE, not the centre. Centred, it
           drifted straight across "MYTHIC \xB7 top 0.002%" and the scored-EP
           line and made both unreadable for a second and a half. */
        .rngi-ep-float {
          position: absolute; right: 2px; bottom: 100%; pointer-events: none;
          font-size: 11px; color: var(--accent); white-space: nowrap;
          text-shadow: 0 0 8px rgba(94,234,212,0.5);
          animation: rngiEpFloat 1400ms ease-out forwards;
        }
        @keyframes rngiEpFloat {
          0%   { opacity: 0; transform: translateY(6px) scale(0.85); }
          16%  { opacity: 1; transform: translateY(0) scale(1.05); }
          70%  { opacity: 0.85; }
          100% { opacity: 0; transform: translateY(-26px) scale(0.95); }
        }
        .rngi-stage.band-anomaly, .rngi-stage.band-mythic { animation: rngiStageBreathe 3s ease-in-out infinite; }
        @keyframes rngiStageBreathe { 50% { transform: scale(1.008); } }

        @media (prefers-reduced-motion: reduce) {
          .rngi-digit.settling, .rngi-digits.collapse, .rngi-digits.t-anomaly .rngi-digit,
          .rngi-digits.t-mythic .rngi-digit, .rngi-band.slam, .rise, .rngi-chip.drop,
          .rngi-ep-float, .rngi-stage.band-anomaly, .rngi-stage.band-mythic {
            animation: none !important;
          }
          .rngi-ep-float { display: none; }
        }

        @media (max-width: 340px) { .rngi-digit { font-size: 27px; } }

        /* ---- controls ---- */
        .rngi-controls { text-align: center; margin-bottom: 4px; }
        .rngi-btn {
          padding: 12px 30px; cursor: pointer;
          background: transparent; color: var(--accent);
          border: 1px solid var(--accent); border-radius: var(--r-card);
          font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.16em;
        }
        .rngi-btn:active { background: rgba(94,234,212,0.08); }
        .rngi-btn:disabled { color: var(--muted); border-color: var(--border); cursor: default; }
        .rngi-btn.small { padding: 7px 13px; font-size: 9.5px; letter-spacing: 0.06em; margin-top: 7px; }
        .rngi-btn.ghost { color: var(--muted); border-color: var(--border); }
        .rngi-btn.on { color: #0B0D10; background: var(--accent); }
        .rngi-generate { width: 100%; }

        .rngi-bar {
          height: 3px; background: var(--track); border-radius: 2px;
          overflow: hidden; margin: 2px 0;
        }
        .rngi-bar > span { display: block; height: 100%; background: var(--accent); transition: width 90ms linear; }
        .rngi-bar.reveal > span { background: var(--muted); }

        .rngi-wait {
          font-size: 9.5px; color: var(--muted); letter-spacing: 0.08em;
          margin-top: 5px; font-variant-numeric: tabular-nums;
        }
        .rngi-pace { margin-top: 7px; font-size: 8.5px; color: var(--muted); }
        .rngi-auto {
          margin-top: 7px; padding: 5px 11px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          color: var(--muted); font-family: var(--font-mono); font-size: 8.5px;
        }
        .rngi-auto.on { color: var(--accent); border-color: var(--accent); }

        .rngi-offline {
          display: flex; flex-direction: column; align-items: center; gap: 3px;
          padding: 11px; margin-bottom: 10px; text-align: center;
          border: var(--border-w) solid var(--accent); border-radius: var(--r-card);
        }
        .rngi-offline-head { font-size: 8.5px; color: var(--muted); letter-spacing: 0.1em; }
        .rngi-offline-ep { font-size: 17px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .rngi-offline-sub { font-size: 8.5px; color: var(--muted); }

        /* ---- sections, chips, rack ---- */
        .rngi-section {
          display: flex; justify-content: space-between; align-items: baseline;
          font-size: 9.5px; letter-spacing: 0.1em; color: var(--muted); margin: 14px 0 7px;
        }
        .rngi-section-note { letter-spacing: 0; }

        .rngi-chips { display: flex; flex-direction: column; gap: 4px; }
        .rngi-chip {
          display: flex; align-items: center; gap: 8px;
          padding: 7px 9px; border-radius: var(--r-chip);
          border: var(--border-w) solid var(--border); border-left: 2px solid currentColor;
        }
        .rngi-chip.dim { opacity: 0.4; }
        .rngi-chip-ico { font-size: 13px; width: 17px; text-align: center; line-height: 1; }
        .rngi-chip-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
        .rngi-chip-name { font-size: 10.5px; color: var(--text); }
        .rngi-chip-note {
          font-size: 8px; color: var(--muted); line-height: 1.4;
          overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .rngi-chip-ep { font-size: 9px; font-variant-numeric: tabular-nums; }

        .t-common   { color: #9AA4B2; }
        .t-uncommon { color: #5EEAD4; }
        .t-rare     { color: #60A5FA; }
        .t-epic     { color: #C084FC; }
        .t-anomaly  { color: #FBBF24; }
        .t-mythic   { color: #FB7185; }

        .rngi-rack { display: grid; grid-template-columns: repeat(2, 1fr); gap: 5px; }
        .rngi-skill {
          display: flex; flex-direction: column; gap: 3px; align-items: stretch;
          padding: 7px 9px; cursor: pointer; text-align: left;
          background: transparent; color: var(--muted);
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); opacity: 0.6;
        }
        .rngi-skill.ready { opacity: 1; color: var(--text); }
        .rngi-skill.armed { border-color: var(--accent); color: var(--accent); }
        .rngi-skill-name { font-size: 10px; }
        .rngi-skill-charge { font-size: 8px; letter-spacing: 0.06em; }

        /* ---- shop ---- */
        .rngi-shelves { display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 7px; }
        .rngi-shelves button { flex: 1 1 28%; }
        .rngi-shelf-blurb { font-size: 8.5px; color: var(--muted); margin-bottom: 9px; }
        .rngi-shelf-blurb.dim { opacity: 0.7; margin-top: -6px; }
        .rngi-items { display: flex; flex-direction: column; gap: 6px; }
        .rngi-item {
          padding: 9px 10px; border-radius: var(--r-chip);
          border: var(--border-w) solid var(--border);
        }
        .rngi-item.owned { border-left: 2px solid var(--accent); }
        .rngi-item.afford { border-left: 2px solid var(--accent); }
        .rngi-item.afford .rngi-item-name { color: var(--accent); }
        .rngi-afford-count { color: var(--accent); }
        .rngi-item.locked { opacity: 0.45; }
        .rngi-item-top { display: flex; justify-content: space-between; gap: 8px; align-items: baseline; }
        .rngi-item-name { font-size: 11px; color: var(--text); }
        .rngi-item-price { font-size: 10px; color: var(--muted); font-variant-numeric: tabular-nums; }
        .rngi-item-price.ok { color: var(--accent); }
        .rngi-item-have { font-size: 8.5px; color: var(--accent); letter-spacing: 0.06em; }
        .rngi-item-desc { margin-top: 4px; font-size: 8.5px; color: var(--muted); line-height: 1.5; }
        .rngi-item-extra { margin-top: 3px; font-size: 8.5px; color: var(--accent); opacity: 0.8; }
        .rngi-item-lock { margin-top: 3px; font-size: 8px; color: var(--danger); }
        .rngi-empty { font-size: 9px; color: var(--muted); padding: 12px 0; text-align: center; }

        /* ---- collection ---- */
        .rngi-filters { display: flex; gap: 4px; flex-wrap: wrap; margin: 9px 0; }
        .rngi-filters button {
          padding: 5px 7px; cursor: pointer; background: transparent;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
          font-family: var(--font-mono); font-size: 8px; color: var(--muted);
        }
        .rngi-filters button.on { border-color: currentColor; }
        .rngi-tierbars { display: flex; gap: 3px; margin: 0 0 9px; }
        .rngi-tierbar { flex: 1; height: 3px; border-radius: 2px; overflow: hidden; background: var(--track); }
        .rngi-tierbar > span {
          display: block; height: 100%; background: currentColor;
          transition: width 600ms cubic-bezier(0.22,1,0.36,1);
        }
        .rngi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
        .rngi-cell {
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 3px; padding: 8px 4px; min-height: 54px; position: relative;
          border-radius: var(--r-chip); border: var(--border-w) solid var(--border);
        }
        /* A locked cell has to still read as a cell. At 0.28 opacity with a
           1px solid border the grid dissolved into scattered dots and looked
           broken rather than unfinished. */
        /* A locked cell has to still read as a cell. Dimming it to a dot made
           the grid look broken rather than unfinished, and --track is too
           dark to be a visible edge, so the border stays --border and only
           turns dashed. */
        /* A locked cell keeps its TIER colour at low opacity. Rendered flat
           grey the grid read as broken rather than unfilled, and you could
           not see that the rare rows are the empty ones. */
        .rngi-cell.locked {
          opacity: 0.5; border-style: dashed; border-color: currentColor;
          background: rgba(255,255,255,0.012);
        }
        .rngi-cell.locked .rngi-cell-ico { opacity: 0.4; font-size: 11px; }
        .rngi-cell.locked .rngi-cell-name { opacity: 0.6; letter-spacing: 0.04em; }
        .rngi-cell.got {
          border-color: currentColor;
          box-shadow: inset 0 0 14px -8px currentColor;
        }
        .rngi-cell-ico { font-size: 15px; line-height: 1; }
        .rngi-cell-name {
          font-size: 7.5px; text-align: center; line-height: 1.3; color: var(--muted);
          max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
        }
        .rngi-cell-n {
          position: absolute; top: 2px; right: 4px; font-size: 7.5px;
          color: var(--muted); font-variant-numeric: tabular-nums;
        }

        /* ---- stats ---- */
        .rngi-mults { display: flex; gap: 5px; flex-wrap: wrap; }
        .rngi-mult {
          font-size: 8.5px; color: var(--accent); padding: 4px 7px;
          border: var(--border-w) solid var(--border); border-radius: var(--r-chip);
        }
        .rngi-mult.dim { color: var(--muted); }
        .rngi-note {
          margin-top: 9px; font-size: 8.5px; color: var(--muted); line-height: 1.6;
          padding-left: 8px; border-left: 2px solid var(--track);
        }
        .rngi-rows { display: flex; flex-direction: column; gap: 2px; }
        .rngi-row {
          display: flex; justify-content: space-between; gap: 8px;
          font-size: 9.5px; color: var(--muted); padding: 4px 0;
          border-bottom: 1px solid var(--track);
        }
        .rngi-row:last-child { border-bottom: none; }
        .rngi-row-v { color: var(--text); font-variant-numeric: tabular-nums; }

        .rngi-gate {
          padding: 10px 11px; border-radius: var(--r-card);
          border: var(--border-w) solid var(--border);
        }
        .rngi-gate-row {
          display: flex; justify-content: space-between; font-size: 9px;
          color: var(--muted); margin-top: 6px; font-variant-numeric: tabular-nums;
        }
        .rngi-gate-row .ok { color: var(--accent); }
        .rngi-gate-note { margin-top: 9px; font-size: 8px; color: var(--muted); line-height: 1.6; }
        .rngi-gate-actions { display: flex; gap: 6px; }

        .rngi-log { display: flex; flex-direction: column; gap: 3px; }
        .rngi-log-row {
          display: grid; grid-template-columns: 1fr 64px 56px; gap: 6px;
          align-items: baseline; font-size: 9.5px; padding: 4px 8px;
          border-radius: var(--r-chip); border: var(--border-w) solid var(--border);
          font-variant-numeric: tabular-nums;
        }
        .rngi-log-n { color: var(--text); }
        .rngi-log-band { font-size: 8px; letter-spacing: 0.05em; }
        .rngi-log-ep { color: var(--accent); text-align: right; }

        .rngi-credit {
          margin-top: 16px; font-size: 7.5px; color: var(--muted);
          line-height: 1.7; opacity: 0.75;
        }

        @media (max-width: 340px) {
          .rngi-grid { grid-template-columns: repeat(2, 1fr); }
          .rngi-rack { grid-template-columns: 1fr; }
        }

        /* ---- ai captions (v40) ---- */
        .cap { padding: 6px 14px 20px; }
        .cap-note {
          margin: 0 0 12px; color: var(--muted); font-size: 9.5px; line-height: 1.65;
          white-space: pre-wrap; font-family: var(--font-mono);
        }
        .cap-drop {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 30px 16px; cursor: pointer;
          border: 1px dashed var(--border); border-radius: 4px;
          color: var(--muted); font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.06em;
        }
        .cap-drop input { display: none; }
        .cap-drop-glyph { font-size: 20px; color: var(--accent); }
        .cap-stage { position: relative; width: 100%; border-radius: 4px; overflow: hidden; }
        .cap-video { width: 100%; display: block; background: #000; }
        .cap-overlay {
          position: absolute; inset: 0; width: 100%; height: 100%;
          pointer-events: none;
        }
        .cap-meta {
          margin: 8px 0 4px; color: var(--muted);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.05em;
        }
        .cap-msg { margin: 6px 0; font-size: 10px; font-family: var(--font-mono); white-space: pre-wrap; }
        .cap-msg.ok { color: var(--accent); }
        .cap-msg.err { color: var(--danger); }
        .cap-progress {
          position: relative; height: 22px; margin: 8px 0;
          border: 1px solid var(--border); border-radius: 3px; overflow: hidden;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-mono); font-size: 10px; color: var(--text);
        }
        .cap-progress-fill {
          position: absolute; left: 0; top: 0; bottom: 0;
          background: rgba(94,234,212,0.22); transition: width 200ms linear;
        }
        .cap-progress span { position: relative; }
        .cap-styles { display: flex; flex-direction: column; gap: 6px; padding: 2px 0 12px; }
        .cap-style {
          display: flex; flex-direction: column; gap: 2px; align-items: flex-start;
          padding: 9px 11px; cursor: pointer; text-align: left;
          background: transparent; border: 1px solid var(--border); border-radius: 3px;
          font-family: var(--font-mono);
        }
        .cap-style.active { border-color: var(--accent); }
        .cap-style-name { font-size: 11px; color: var(--text); letter-spacing: 0.05em; }
        .cap-style.active .cap-style-name { color: var(--accent); }
        .cap-style-hint { font-size: 9px; color: var(--muted); }
        .cap-actions { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 12px; }

        /* ---- v41 polish: borders, focus, press ----------------------
           Three things were inconsistent across the app: every surface had
           a hand-picked radius, nothing showed a keyboard focus ring, and
           taps had no acknowledgement other than the action happening. */

        /* One focus treatment everywhere, and only for keyboards -- a mouse
           or thumb tap should not leave a ring behind. */
        :focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: var(--r-btn);
        }

        /* Buttons acknowledge the press itself. 60ms is under the threshold
           where it reads as lag but over the one where it reads as nothing. */
        button:not(:disabled):active {
          transform: translateY(0.5px) scale(0.985);
          transition: transform 60ms ease;
        }

        /* Cards lift their border rather than their shadow -- DESIGN.md
           forbids raised cards, and on a dark UI a brighter hairline reads
           as "live" more clearly than a shadow does anyway. */
        .note-card, .quest-habit-card, .tool-card, .daily-card, .routine-row {
          transition: border-color 160ms ease, background-color 160ms ease;
        }
        .tool-card:active, .note-card:active { border-color: var(--accent); }

        /* Themes with a glow budget get one, on the accent surfaces only. */
        .pomo-btn.primary, .cap-chip.on {
          box-shadow: 0 0 var(--glow-w) var(--glow);
        }
        .tabs button.active::after { box-shadow: 0 0 calc(var(--glow-w) * 2) var(--glow); }

        .type-caret {
          display: inline-block;
          width: 6px; height: 1em;
          margin-left: 2px;
          vertical-align: -0.12em;
          background: var(--accent);
          animation: caretBlink 1.1s steps(1) infinite;
        }
        .type-caret.idle { opacity: 0.45; }
        @keyframes caretBlink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .type-caret { animation: none; opacity: 0.45; }
        }

        /* Section headers get a hairline that runs to the edge -- cheap,
           and it stops long lists reading as one undifferentiated column. */
        .section-header:not(.habits-header):not(.tool-header) {
          display: flex; align-items: center; gap: 10px;
        }
        /* Plain headers only. habits-header and tool-header already carry a
           control on the right, and a rule drawn after it reads as a stray
           line rather than a divider. */
        .section-header:not(.habits-header):not(.tool-header)::after {
          content: ""; flex: 1 1 auto; height: 1px;
          background: linear-gradient(to right, var(--track), transparent);
        }

        /* ---- captions editor (v41) ---- */
        .cap-preview-wrap {
          position: relative; display: flex; justify-content: center;
          margin: 4px 0 10px;
        }
        /* Capped by HEIGHT, not width: a 9:16 clip at 300px wide is 533px
           tall, which pushed every control below the fold on a phone. */
        .cap-preview {
          max-width: 100%; max-height: 42vh; width: auto; height: auto; display: block;
          border: 1px solid var(--border); border-radius: var(--r-card); background: #000;
        }
        .cap-preview-tag {
          position: absolute; top: 6px; right: 8px;
          padding: 2px 5px; border-radius: 2px;
          background: rgba(11,13,16,0.72);
          font-family: var(--font-mono); font-size: 8.5px;
          color: var(--muted); letter-spacing: 0.08em;
        }
        /* the real clip is the pixel source for the preview canvas, never
           shown directly -- one surface, so what you tune is what you see */
        .cap-source { position: absolute; width: 1px; height: 1px; opacity: 0; pointer-events: none; }
        .cap-file { position: relative; overflow: hidden; text-align: center; line-height: 1.1; }
        .cap-file input { position: absolute; inset: 0; opacity: 0; width: 100%; }
        .cap-editor { margin-top: 4px; }
        .cap-chips { display: flex; flex-wrap: wrap; gap: 5px; padding: 2px 0 8px; }
        .cap-chips.tight { padding: 0; }
        .cap-chip {
          padding: 6px 10px; cursor: pointer; border-radius: var(--r-chip);
          background: transparent; border: 1px solid var(--border); color: var(--muted);
          font-size: 10.5px; letter-spacing: 0.04em;
          font-family: var(--font-mono);
        }
        .cap-chip.on { border-color: var(--accent); color: var(--accent); }
        .cap-row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 10px; padding: 5px 0;
        }
        .cap-row.wide { flex-direction: column; align-items: stretch; gap: 5px; }
        .cap-row-label {
          font-family: var(--font-mono); font-size: 10.5px;
          color: var(--muted); letter-spacing: 0.05em;
        }
        .cap-step { display: flex; align-items: center; gap: 4px; }
        .cap-step button {
          width: 30px; height: 28px; cursor: pointer; border-radius: 3px;
          background: transparent; border: 1px solid var(--border); color: var(--text);
          font-family: var(--font-mono); font-size: 13px;
        }
        .cap-step-val {
          min-width: 54px; text-align: center; color: var(--accent);
          font-family: var(--font-mono); font-size: 11px;
          font-variant-numeric: tabular-nums;
        }
        .cap-swatches { display: flex; flex-wrap: wrap; gap: 5px; }
        .cap-swatch {
          width: 26px; height: 26px; border-radius: 3px; cursor: pointer;
          border: 1px solid var(--border); padding: 0;
        }
        .cap-swatch.on { border-color: var(--accent); border-width: 2px; }
        .cap-swatch.custom {
          position: relative; display: flex; align-items: center; justify-content: center;
          background: transparent; color: var(--muted); font-size: 13px;
        }
        .cap-swatch.custom input { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; }
        .cap-hint {
          color: var(--muted); font-size: 9.5px; padding-bottom: 6px;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 34px; font-variant-numeric: tabular-nums;
          letter-spacing: 0.02em; color: var(--text);
        }
        .pomo-phase {
          font-family: var(--font-mono);
          font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase;
        }
        .pomo-pips {
          display: flex; align-items: center; gap: 5px;
          justify-content: center; margin: 10px 0 14px;
        }
        .pomo-pip {
          width: 11px; height: 11px; border-radius: 50%; padding: 0;
          border: 1px solid var(--border); background: transparent; cursor: pointer;
        }
        .pomo-pip.done { background: var(--muted); border-color: var(--muted); }
        .pomo-pip.active { background: var(--accent); border-color: var(--accent); }
        .pomo-round {
          margin-left: 6px; color: var(--muted);
          font-family: var(--font-mono); font-size: 9.5px; letter-spacing: 0.08em;
        }
        .pomo-phase-pick { display: flex; gap: 6px; justify-content: center; margin: 2px 0 10px; }
        .pomo-chip {
          flex: 1; max-width: 100px; padding: 7px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: var(--r-btn);
          color: var(--muted); font-family: var(--font-mono);
          font-size: 10.5px; letter-spacing: 0.06em;
        }

        .pomo-controls { display: flex; gap: 6px; justify-content: center; margin-bottom: 18px; }
        .pomo-btn {
          flex: 1; max-width: 110px; padding: 9px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: var(--r-btn);
          color: var(--muted); font-family: var(--font-mono);
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
          font-family: var(--font-mono);
        }
        .pomo-set-label { font-size: 11px; color: var(--muted); letter-spacing: 0.06em; }
        .pomo-set-value { font-size: 12px; color: var(--accent); font-variant-numeric: tabular-nums; }
        .pomo-stepper { display: flex; gap: 4px; padding: 0 8px 8px; }
        .pomo-stepper button {
          flex: 1; padding: 7px 0; cursor: pointer;
          background: transparent; border: 1px solid var(--border); border-radius: 3px;
          color: var(--text); font-family: var(--font-mono); font-size: 12px;
        }
        .pomo-stepper button:disabled { opacity: 0.25; cursor: default; }
        .pomo-note {
          margin: 0; color: var(--muted); font-size: 9.5px; line-height: 1.65;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.06em; color: var(--muted);
        }
        .edit-xp-tag.gain { color: var(--accent); }
        .edit-xp-tag.lose { color: var(--danger); }

        .edit-opp-row { display: flex; align-items: center; gap: 6px; }
        .edit-opp-select {
          flex: 1; min-width: 0; background: var(--bg);
          border: 1px solid var(--border); border-radius: 4px;
          color: var(--text); font-family: var(--font-mono);
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
          font-family: var(--font-mono); font-size: 10px;
          margin-bottom: 8px;
        }
        .backup-ask-body {
          font-family: var(--font-mono); font-size: 10px;
          line-height: 1.6; color: var(--muted); white-space: pre-wrap; margin: 0;
        }
        .backup-ask-warn {
          font-family: var(--font-mono); font-size: 9.5px;
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
          font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.04em; padding: 3px 7px; border-radius: 5px;
          white-space: nowrap;
        }

        /* ---- daily quests (v36) ---- */
        .daily-grid { display: flex; flex-direction: column; gap: 8px; padding: 0 18px 4px; }
        .daily-card {
          display: flex; align-items: center; gap: 10px;
          background: var(--panel); border: var(--border-w) solid var(--border);
          border-left: 3px solid var(--dc); border-radius: var(--r-card);
          padding: 12px; cursor: pointer; text-align: left;
          font-family: var(--font-mono);
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

        /* ---- daily task tags (v53) ---- */
        /* Column, not a row: two tags at 9px still fit beside a 100-point
           coin figure on a 360px screen only if they stack. */
        .daily-tags {
          display: flex; flex-direction: column; align-items: flex-end;
          gap: 2px; flex: none; max-width: 42%;
        }
        .daily-tag {
          font-size: 8.5px; letter-spacing: 0.04em; white-space: nowrap;
          color: var(--tc, var(--muted));
          border: var(--border-w) solid var(--tc, var(--border));
          border-radius: 3px; padding: 1px 4px; opacity: 0.9;
          font-variant-numeric: tabular-nums;
        }
        .daily-tag.none { color: var(--muted); border-color: var(--border); opacity: 0.6; }
        .inv-tag-chips { padding-top: 0; }
        .inv-suggest {
          font-family: var(--font-mono); font-size: 9px; color: var(--muted);
          background: none; border: var(--border-w) dashed var(--border);
          border-radius: 3px; padding: 3px 7px; cursor: pointer;
        }
        .inv-suggest:hover { color: var(--accent); border-color: var(--accent); }
        .inv-tag-note {
          font-family: var(--font-mono); font-size: 8.5px; color: var(--muted);
          padding: 0 18px 10px;
        }
        .inv-tag-dot {
          display: inline-block; width: 5px; height: 5px; border-radius: 50%;
          margin-left: 5px; vertical-align: middle;
        }
        .daily-note {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          font-family: var(--font-mono); font-size: 9px;
          color: var(--muted); padding: 6px 18px 12px;
        }
        .quest-habit-card.drawn { border-left: 2px solid var(--accent); }

        .habits-header { display: flex; align-items: center; justify-content: space-between; }
        .radar-edit.on { border-color: var(--accent); color: var(--accent); }
        .quest-habit-card.reordering { border-style: dashed; }

        .note-empty {
          font-family: var(--font-mono); font-size: 10px;
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text);
        }

        .vault-check {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
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
          font-family: var(--font-mono);
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
          border: var(--border-w) solid var(--border);
          border-radius: var(--r-card);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent2);
        }

        .reward-claim {
          border: 1.5px solid var(--border);
          background: transparent;
          color: var(--muted);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-ui);
          font-size: 12.5px;
          outline: none;
        }

        .edit-row-subs { flex-wrap: wrap; gap: 5px; }

        .sub-chip {
          border: 1px solid var(--border);
          background: #0F1215;
          color: var(--muted);
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 13px; font-weight: 600; color: var(--text);
          letter-spacing: 0.04em;
        }
        .ai-intro-sub { font-size: 11px; color: var(--muted); line-height: 1.5; }

        .ai-key-btn {
          display: inline-flex; align-items: center; gap: 5px;
          background: transparent; border: 1px solid var(--border);
          border-radius: 999px; color: var(--muted); cursor: pointer;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono); font-size: 10px;
        }
        .ai-gate-steps a {
          color: var(--accent); text-decoration: none;
          border-bottom: 1px solid var(--glow);
          word-break: break-all;
        }
        .ai-key-input {
          width: 100%; box-sizing: border-box;
          background: #0E1116; border: 1px solid var(--border); border-radius: 8px;
          color: var(--text); font-family: var(--font-mono);
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
          color: var(--text); font-family: var(--font-ui);
          font-size: 12.5px; line-height: 1.5; padding: 10px 12px;
          outline: none; transition: border-color 140ms ease;
        }
        .ai-input::placeholder { color: #4B5563; }
        .ai-input:focus { border-color: var(--accent); }
        .ai-input:disabled { opacity: 0.55; }

        .ai-send {
          align-self: flex-end; background: var(--accent); color: #07100E;
          border: none; border-radius: 7px;
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
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
          font-family: var(--font-mono);
          font-size: 9.5px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-counts {
          display: flex; gap: 8px;
          font-family: var(--font-mono);
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

        .ai-sign { font-family: var(--font-mono); font-size: 13px; font-weight: 700; line-height: 1; }
        .ai-diff-row.add .ai-sign    { color: #7EE787; }
        .ai-diff-row.edit .ai-sign   { color: var(--accent2); }
        .ai-diff-row.remove .ai-sign { color: var(--danger); }

        .ai-surface {
          font-family: var(--font-mono);
          font-size: 9px; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--muted);
        }
        .ai-diff-text { font-size: 12px; color: var(--text); line-height: 1.4; word-break: break-word; }
        .ai-skip-mark {
          font-family: var(--font-mono);
          font-size: 8.5px; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--muted);
        }

        .ai-actions { display: flex; gap: 8px; margin-top: 12px; }
        .ai-apply {
          flex: 1; background: var(--accent); color: #07100E; border: none;
          border-radius: 7px; padding: 10px 0; cursor: pointer;
          font-family: var(--font-mono);
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          transition: opacity 140ms ease, transform 140ms ease;
        }
        .ai-apply:disabled { opacity: 0.35; cursor: default; }
        .ai-apply:not(:disabled):active { transform: scale(0.98); }
        .ai-discard {
          background: transparent; color: #9AA3AF;
          border: 1px solid var(--border); border-radius: 7px;
          padding: 10px 18px; cursor: pointer;
          font-family: var(--font-mono);
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
        /* ---- state edge (v43) ---------------------------------------
           The colour ramp is gone. A card is either untouched (theme
           border), done (cyan) or slipped (red) -- three states, no
           spectrum, and the one colour on screen means something. */
        .edge {
          border: 1px solid var(--edge, var(--border));
          /* DESIGN.md's "no card shadows" rule was lifted deliberately --
             see the note at the top of that file. This is a contact shadow,
             not elevation: it grounds the card without faking height. */
          box-shadow: 0 1px 0 rgba(0,0,0,0.35), 0 6px 18px -12px rgba(0,0,0,0.8);
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }
        .edge.done, .edge.slipped { box-shadow: 0 0 0 1px var(--edge) inset; }
        .routine-row.done.edge, .quest-habit-card.done.edge { opacity: 0.8; }

      `),a.default.createElement("div",{className:"panel"},Nu.pending&&a.default.createElement("div",{className:"update-bar",role:"button",tabIndex:0,onClick:Nu.apply,onKeyDown:W=>{(W.key==="Enter"||W.key===" ")&&Nu.apply()}},a.default.createElement("span",{className:"update-bar-icon"},"\u25B2"),a.default.createElement("span",null,"new build ready \u2014 tap to reload")),Sl&&a.default.createElement("div",{className:"quest-banner",onClick:()=>El(null)},a.default.createElement("span",{className:"quest-banner-icon"},"\u25B8"),a.default.createElement("span",{className:"quest-banner-text"},a.default.createElement("b",null,"Now:")," ",Sl.label),a.default.createElement("button",{className:"quest-banner-close",onClick:W=>{W.stopPropagation(),El(null)},"aria-label":"Dismiss"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"12",height:"12"},a.default.createElement("path",{d:"M6 6l12 12M18 6L6 18",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})))),a.default.createElement("div",{className:"titlebar"},a.default.createElement("div",{className:"titlebar-left"},a.default.createElement("div",{className:"dots"},a.default.createElement("span",{className:"dot red"}),a.default.createElement("span",{className:"dot amber"}),a.default.createElement("span",{className:"dot green"})),a.default.createElement(ET,null),a.default.createElement(CT,null)),a.default.createElement("div",{className:"titlebar-right"},a.default.createElement("input",{type:"file",accept:"application/json",ref:Nt,onChange:ok,style:{display:"none"}}),a.default.createElement("button",{className:`titlebar-icon-btn ${Y?"notify-on":""}`,onClick:zn,disabled:Ee,"aria-label":Y?"Turn off notifications":"Turn on notifications",title:Y?"Notifications on \u2014 tap to turn off":"Turn on routine notifications"},Y?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M13.73 21a2 2 0 0 1-3.46 0",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M3 3l18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:r,"aria-label":n?"Mute sound":"Unmute sound",title:n?"Mute sound":"Unmute sound"},n?a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16.5 8.5a5 5 0 0 1 0 7",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})):a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M4 9v6h4l5 5V4L8 9H4z",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),a.default.createElement("path",{d:"M16 9l5 6M21 9l-5 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{Dn(!0),P.click()},"aria-label":"Themes",title:"Themes"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("circle",{cx:"12",cy:"12",r:"9",fill:"none",stroke:"currentColor",strokeWidth:"2"}),a.default.createElement("path",{d:"M12 3a9 9 0 0 0 0 18",fill:"currentColor",opacity:"0.55"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:ik,"aria-label":"Import backup",title:"Import backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 16V4M7 9l5-5 5 5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("button",{className:"titlebar-icon-btn",onClick:()=>{kt(!0),P.click()},"aria-label":"Export backup",title:"Export backup"},a.default.createElement("svg",{viewBox:"0 0 24 24",width:"14",height:"14"},a.default.createElement("path",{d:"M12 4v12M7 11l5 5 5-5M4 20h16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))),a.default.createElement("span",{className:"clock"},new Date(z).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1})))),yn&&a.default.createElement("div",{className:"backup-ask-backdrop",onClick:()=>kt(!1)},a.default.createElement("div",{className:"backup-ask",onClick:W=>W.stopPropagation(),role:"dialog","aria-label":"Export backup"},a.default.createElement("div",{className:"backup-ask-head"},a.default.createElement("span",{className:"note-prompt"},"~/backup"),a.default.createElement("span",{className:"note-when"},"everything in one file")),a.default.createElement("pre",{className:"backup-ask-body"},"tasks, routines, habits, notes, tags, achievements, pet, wallet and themes are always included."),a.default.createElement("div",{className:"backup-ask-warn"},"\u26A0 including API keys makes this file a credential. anyone you send it to can spend your quota."),a.default.createElement("div",{className:"note-actions backup-ask-actions"},a.default.createElement("button",{className:"note-btn save",onClick:()=>{kt(!1),Iu(!1)}},"export"),a.default.createElement("button",{className:"note-btn danger",onClick:()=>{kt(!1),Iu(!0)}},"export with API keys"),a.default.createElement("button",{className:"note-btn",onClick:()=>kt(!1)},"cancel")))),gn&&a.default.createElement("div",{className:`data-toast ${gn.type}`},gn.text),a.default.createElement("div",{key:t,className:"tab-content",id:"tab-panel",role:"tabpanel","aria-labelledby":`tab-${t}`},t==="today"?a.default.createElement(t4,{routines:l,setRoutines:c,tasks:o,setTasks:s,daily:E,inventory:w,onQuestComplete:ee,tags:se.tags,vaultHabits:d,habits:_,rewards:I,setRewards:M,totalXP:O,coins:F.coins,spend:W=>F.addCoins(-W),setTab:i}):t==="tasks"?a.default.createElement(uC,{inventory:w,setInventory:k,daily:E,setDaily:T,routines:l,onReward:W=>F.addCoins(W),onComplete:ee,coins:F.coins,tags:se.tags}):t==="routines"?a.default.createElement(IT,{routines:l,setRoutines:c}):t==="vault"?a.default.createElement(BT,null):t==="tools"?a.default.createElement(YN,{onReward:W=>F.addCoins(W)}):t==="quest"?a.default.createElement(iC,{tagCtl:se,habits:_,setHabits:C,inventory:w,setInventory:k,rewards:I,setRewards:M,coins:F.coins,spend:W=>F.addCoins(-W)}):a.default.createElement(BC,{petCtl:U,state:{routines:l,vaultHabits:d,habits:_,rewards:I,totalXP:O,tags:se.tags,inventory:w,notes:m,expenses:v.items,expenseCats:v.cats,recurring:v.rules,currency:v.currency,coins:F.coins},setters:{setRoutines:c,setVaultHabits:u,setHabits:C,setRewards:M,setInventory:k,setNotes:h,setMoney:x,tagCtl:se},showDataMsg:Pt,ctx:{pet:U.pet,level:$,hour:Bs().hour,phase:D.phase.id,doneToday:_.filter(W=>bl(W,ne(0))).length,totalToday:_.length,streak:_.reduce((W,Q)=>Math.max(W,iu(Kt(Q.history).filter(ue=>ue.t==="done").map(ue=>ue.d))),0),routineNow:null,nextRoutine:null}})),y&&a.default.createElement("div",{className:"recur-note"},y),a.default.createElement("div",{className:"tabs",role:"tablist","aria-label":"Sections"},[["today","today"],["tasks","tasks"],["routines","routines"],["vault","vault"],["quest","quest"],["tools","tools"],["pet",U.pet.name.toLowerCase()]].map(([W,Q])=>a.default.createElement("button",{key:W,role:"tab",id:`tab-${W}`,"aria-selected":t===W,"aria-controls":"tab-panel","aria-label":Q,title:Q,className:`${W==="pet"?"tab-pet ":""}${t===W?"active":""}`.trim(),onClick:()=>i(W)},a.default.createElement(TT,{id:W}),a.default.createElement("span",{className:"tab-label"},Q))))))}var r4=nw.default.createRoot(document.getElementById("root"));r4.render(a.default.createElement(n4));})();
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

mediabunny/dist/modules/src/misc.js:
mediabunny/dist/modules/src/logging.js:
mediabunny/dist/modules/src/metadata.js:
mediabunny/dist/modules/shared/bitstream.js:
mediabunny/dist/modules/shared/aac-misc.js:
mediabunny/dist/modules/shared/ac3-misc.js:
mediabunny/dist/modules/src/codec-data.js:
mediabunny/dist/modules/src/codec.js:
mediabunny/dist/modules/src/demuxer.js:
mediabunny/dist/modules/src/packet.js:
mediabunny/dist/modules/src/isobmff/isobmff-misc.js:
mediabunny/dist/modules/src/isobmff/isobmff-reader.js:
mediabunny/dist/modules/src/aes.js:
mediabunny/dist/modules/src/isobmff/isobmff-demuxer.js:
mediabunny/dist/modules/src/adts/adts-reader.js:
mediabunny/dist/modules/src/source.js:
mediabunny/dist/modules/src/input-format.js:
mediabunny/dist/modules/src/sample.js:
mediabunny/dist/modules/src/encode.js:
mediabunny/dist/modules/src/custom-coder.js:
mediabunny/dist/modules/src/pcm.js:
mediabunny/dist/modules/src/media-sink.js:
mediabunny/dist/modules/src/input-track.js:
mediabunny/dist/modules/src/input.js:
mediabunny/dist/modules/src/reader.js:
mediabunny/dist/modules/src/muxer.js:
mediabunny/dist/modules/src/subtitles.js:
mediabunny/dist/modules/src/isobmff/isobmff-boxes.js:
mediabunny/dist/modules/src/writer.js:
mediabunny/dist/modules/src/target.js:
mediabunny/dist/modules/src/isobmff/isobmff-muxer.js:
mediabunny/dist/modules/src/media-source.js:
mediabunny/dist/modules/src/output-format.js:
mediabunny/dist/modules/src/output.js:
mediabunny/dist/modules/src/index.js:
  (*!
   * Copyright (c) 2026-present, Vanilagy and contributors
   *
   * This Source Code Form is subject to the terms of the Mozilla Public
   * License, v. 2.0. If a copy of the MPL was not distributed with this
   * file, You can obtain one at https://mozilla.org/MPL/2.0/.
   *)
*/
