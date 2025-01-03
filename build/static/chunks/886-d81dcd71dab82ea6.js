"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[886],{7769:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]])},2208:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},6865:function(e,t,n){n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},2250:function(e,t,n){n.d(t,{GC:function(){return o},Ho:function(){return v},aC:function(){return i}});var r=n(7437),l=n(2265);let o=(0,l.createContext)(void 0),a=(0,l.createContext)(void 0);function i(){return(0,l.useContext)(a)}let u=(0,l.createContext)(null),c="__convexAuthOAuthVerifier",s="__convexAuthJWT",f="__convexAuthRefreshToken",d="__convexAuthServerStateFetchTime";function v({client:e,serverState:t,onChange:n,storage:i,storageNamespace:v,replaceURL:y,children:w}){let g=(0,l.useRef)(t?._state.token??null),[m,k]=(0,l.useState)(null===g.current),[O,x]=(0,l.useState)(g.current),j=e.verbose??!1,S=(0,l.useCallback)(e=>{j&&console.debug(`${new Date().toISOString()} ${e}`)},[j]),{storageSet:_,storageGet:C,storageRemove:P,storageKey:A}=function(e,t){let n=function(){let[e,t]=(0,l.useState)({});return()=>({getItem:t=>e[t],setItem:(e,n)=>{t(t=>({...t,[e]:n}))},removeItem:e=>{t(t=>{let{[e]:n,...r}=t;return r})}})}(),r=(0,l.useMemo)(()=>e??n(),[e]),o=t.replace(/[^a-zA-Z0-9]/g,""),a=(0,l.useCallback)(e=>`${e}_${o}`,[t]);return{storageSet:(0,l.useCallback)((e,t)=>r.setItem(a(e),t),[r,a]),storageGet:(0,l.useCallback)(e=>r.getItem(a(e)),[r,a]),storageRemove:(0,l.useCallback)(e=>r.removeItem(a(e)),[r,a]),storageKey:a}}(i,v),[E,M]=(0,l.useState)(!1),N=(0,l.useCallback)(async e=>{let t;let r=null!==g.current;if(null===e.tokens)g.current=null,e.shouldStore&&(await P(s),await P(f)),t=null;else{let{token:n}=e.tokens;if(g.current=n,e.shouldStore){let{refreshToken:t}=e.tokens;await _(s,n),await _(f,t)}t=n}r!==(null!==t)&&await n?.(),x(t),k(!1)},[_,P]);(0,l.useEffect)(()=>{let e=async e=>{if(E)return e.preventDefault(),e.returnValue=!0,"Are you sure you want to leave? Your changes may not be saved."};return p("beforeunload",e),()=>{b("beforeunload",e)}}),(0,l.useEffect)(()=>{let e=e=>{(async()=>{if(e.storageArea===i&&e.key===A(s)){let t=e.newValue;S(`synced access token, is null: ${null===t}`),await N({shouldStore:!1,tokens:null===t?null:{token:t}})}})()};return p("storage",e),()=>b("storage",e)},[N]);let I=(0,l.useCallback)(async t=>{let{tokens:n}=await e.unauthenticatedCall("auth:signIn","code"in t?{params:{code:t.code},verifier:t.verifier}:t);return S(`retrieved tokens, is null: ${null===n}`),await N({shouldStore:!0,tokens:n??null}),null!==n},[e,N]),R=(0,l.useCallback)(async(t,n)=>{let r=n instanceof FormData?Array.from(n.entries()).reduce((e,[t,n])=>(e[t]=n,e),{}):n??{},l=await C(c)??void 0;await P(c);let o=await e.authenticatedCall("auth:signIn",{provider:t,params:r,verifier:l});if(void 0!==o.redirect){let e=new URL(o.redirect);return await _(c,o.verifier),void 0!==window.location&&(window.location.href=e.toString()),{signingIn:!1,redirect:e}}if(void 0!==o.tokens){let{tokens:e}=o;return S(`signed in and got tokens, is null: ${null===e}`),await N({shouldStore:!0,tokens:e}),{signingIn:null!==o.tokens}}return{signingIn:!1}},[e,N,C]),$=(0,l.useCallback)(async()=>{try{await e.authenticatedCall("auth:signOut")}catch(e){}S("signed out, erasing tokens"),await N({shouldStore:!0,tokens:null})},[N,e]),T=(0,l.useCallback)(async({forceRefreshToken:e})=>{if(e){let e=g.current;return await h(f,async()=>{let t=g.current;if(t!==e)return S(`returning synced token, is null: ${null===t}`),t;let n=await C(f)??null;return null!==n?(M(!0),await P(f),await I({refreshToken:n}).finally(()=>{M(!1)}),S(`returning retrieved token, is null: ${null===t}`),g.current):(M(!1),S("returning null, there is no refresh token"),null)})}return g.current},[I,$,C]),z=(0,l.useRef)(!1);(0,l.useEffect)(()=>{if(void 0===i)throw Error("`localStorage` is not available in this environment, set the `storage` prop on `ConvexAuthProvider`!");let e=async()=>{let e=await C(s)??null;S(`retrieved token from storage, is null: ${null===e}`),await N({shouldStore:!1,tokens:null===e?null:{token:e}})};if(void 0!==t){let n=C(d),r=n=>{if(!n||t._timeFetched>+n){let{token:e,refreshToken:n}=t._state;_(d,t._timeFetched.toString()),N({tokens:null===e||null===n?null:{token:e,refreshToken:n},shouldStore:!0})}else e()};n instanceof Promise?n.then(r):r(n);return}let n=void 0!==window?.location?new URLSearchParams(window.location.search).get("code"):null;if(z.current||n){if(n&&!z.current){z.current=!0;let e=new URL(window.location.href);e.searchParams.delete("code"),(async()=>{await y(e.pathname+e.search+e.hash),await R(void 0,{code:n}),z.current=!1})()}}else e()},[e,C]);let D=(0,l.useMemo)(()=>({signIn:R,signOut:$}),[R,$]),Z=null!==O,V=(0,l.useMemo)(()=>({isLoading:m,isAuthenticated:Z,fetchAccessToken:T}),[T,m,Z]);return(0,r.jsx)(a.Provider,{value:V,children:(0,r.jsx)(o.Provider,{value:D,children:(0,r.jsx)(u.Provider,{value:O,children:w})})})}async function h(e,t){let n=window?.navigator?.locks;return void 0!==n?await n.request(e,t):await m(e,t)}function y(e){void 0===globalThis.__convexAuthMutexes&&(globalThis.__convexAuthMutexes={});let t=globalThis.__convexAuthMutexes[e];return void 0===t&&(globalThis.__convexAuthMutexes[e]={currentlyRunning:null,waiting:[]}),t=globalThis.__convexAuthMutexes[e]}function w(e,t){globalThis.__convexAuthMutexes[e]=t}async function g(e,t){let n=y(e);null===n.currentlyRunning?w(e,{currentlyRunning:t().finally(()=>{let t=y(e).waiting.shift();w(e,{...y(e),currentlyRunning:void 0===t?null:g(e,t)})}),waiting:[]}):w(e,{...n,waiting:[...n.waiting,t]})}async function m(e,t){return new Promise((n,r)=>{g(e,()=>t().then(e=>n(e)).catch(e=>r(e)))})}function p(e,t,n){window.addEventListener?.(e,t,n)}function b(e,t,n){window.removeEventListener?.(e,t,n)}},6425:function(e,t,n){n.d(t,{X$:function(){return o}}),n(7437),n(1928),n(7266);var r=n(2265),l=n(2250);function o(){return(0,r.useContext)(l.GC)}},6840:function(e,t,n){n.d(t,{WV:function(){return i},jH:function(){return u}});var r=n(2265),l=n(4887),o=n(7053),a=n(7437),i=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...l}=e,i=r?o.g7:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,a.jsx)(i,{...l,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function u(e,t){e&&l.flushSync(()=>e.dispatchEvent(t))}},5156:function(e,t,n){n.d(t,{f:function(){return c}});var r=n(2265),l=n(6840),o=n(7437),a="horizontal",i=["horizontal","vertical"],u=r.forwardRef((e,t)=>{let{decorative:n,orientation:r=a,...u}=e,c=i.includes(r)?r:a;return(0,o.jsx)(l.WV.div,{"data-orientation":c,...n?{role:"none"}:{"aria-orientation":"vertical"===c?c:void 0,role:"separator"},...u,ref:t})});u.displayName="Separator";var c=u},535:function(e,t,n){n.d(t,{j:function(){return a}});var r=n(1994);let l=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=r.W,a=(e,t)=>n=>{var r;if((null==t?void 0:t.variants)==null)return o(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:a,defaultVariants:i}=t,u=Object.keys(a).map(e=>{let t=null==n?void 0:n[e],r=null==i?void 0:i[e];if(null===t)return null;let o=l(t)||l(r);return a[e][o]}),c=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{});return o(e,u,null==t?void 0:null===(r=t.compoundVariants)||void 0===r?void 0:r.reduce((e,t)=>{let{class:n,className:r,...l}=t;return Object.entries(l).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...i,...c}[t]):({...i,...c})[t]===n})?[...e,n,r]:e},[]),null==n?void 0:n.class,null==n?void 0:n.className)}},6231:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(l),a=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){var r,l;r=t,l=n[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in e?Object.defineProperty(e,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[r]=l}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return t=>r.createElement(f,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,n)=>r.createElement(t.tag,c({key:n},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var n,{attr:l,size:o,title:u}=e,s=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,a),f=o||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,s,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==o?r.createElement(o.Consumer,null,e=>t(e)):t(l)}}}]);