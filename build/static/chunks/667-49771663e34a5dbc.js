(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{2489:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});let r=(0,n(9205).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},2119:function(e,t,n){"use strict";Object.defineProperty(t,"$",{enumerable:!0,get:function(){return o}});let r=n(3079);function o(e){let{createServerReference:t}=n(6671);return t(e,r.callServer)}},3716:function(e){e.exports={style:{fontFamily:"'__geistMono_c3aa02', '__geistMono_Fallback_c3aa02'"},className:"__className_c3aa02",variable:"__variable_c3aa02"}},6157:function(e){e.exports={style:{fontFamily:"'__geistSans_1e4310', '__geistSans_Fallback_1e4310'"},className:"__className_1e4310",variable:"__variable_1e4310"}},135:function(e,t,n){"use strict";n.d(t,{ConvexAuthNextjsClientProvider:function(){return i}});var r=n(7437),o=n(2265),a=n(2250);n(3079);var l=(0,n(2119).$)("a181d95251623eaa872f32ddcf2f2c67ab6afb68");function i(e){let{apiRoute:t,serverState:n,storage:i,storageNamespace:u,verbose:s,children:c}=e,d=(0,o.useCallback)(async(e,n)=>{let r=await fetch(null!=t?t:"/api/auth",{body:JSON.stringify({action:e,args:n}),method:"POST"});return await r.json()},[t]),f=(0,o.useMemo)(()=>({authenticatedCall:d,unauthenticatedCall:d,verbose:s}),[d,s]);return(0,r.jsx)(a.Ho,{client:f,serverState:n,onChange:l,storage:"undefined"==typeof window?void 0:"inMemory"===i?null:window.localStorage,storageNamespace:null!=u?u:function(e,t){if(void 0===e)throw Error("Missing environment variable `".concat(t,"`"));return e}("https://kindred-eagle-5.convex.cloud","NEXT_PUBLIC_CONVEX_URL"),replaceURL:e=>{window.history.replaceState({},"",e)},children:c})}},2683:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var r=n(7437),o=n(7266),a=n(2250);function l(e){let{client:t,children:n}=e;return(0,r.jsx)(o.nG,{client:t,useAuth:a.aC,children:n})}},2250:function(e,t,n){"use strict";n.d(t,{GC:function(){return a},Ho:function(){return g},aC:function(){return i}});var r=n(7437),o=n(2265);let a=(0,o.createContext)(void 0),l=(0,o.createContext)(void 0);function i(){return(0,o.useContext)(l)}let u=(0,o.createContext)(null),s="__convexAuthOAuthVerifier",c="__convexAuthJWT",d="__convexAuthRefreshToken",f="__convexAuthServerStateFetchTime";function g({client:e,serverState:t,onChange:n,storage:i,storageNamespace:g,replaceURL:h,children:p}){let w=(0,o.useRef)(t?._state.token??null),[m,x]=(0,o.useState)(null===w.current),[b,k]=(0,o.useState)(w.current),C=e.verbose??!1,R=(0,o.useCallback)(e=>{C&&console.debug(`${new Date().toISOString()} ${e}`)},[C]),{storageSet:D,storageGet:S,storageRemove:j,storageKey:I}=function(e,t){let n=function(){let[e,t]=(0,o.useState)({});return()=>({getItem:t=>e[t],setItem:(e,n)=>{t(t=>({...t,[e]:n}))},removeItem:e=>{t(t=>{let{[e]:n,...r}=t;return r})}})}(),r=(0,o.useMemo)(()=>e??n(),[e]),a=t.replace(/[^a-zA-Z0-9]/g,""),l=(0,o.useCallback)(e=>`${e}_${a}`,[t]);return{storageSet:(0,o.useCallback)((e,t)=>r.setItem(l(e),t),[r,l]),storageGet:(0,o.useCallback)(e=>r.getItem(l(e)),[r,l]),storageRemove:(0,o.useCallback)(e=>r.removeItem(l(e)),[r,l]),storageKey:l}}(i,g),[M,A]=(0,o.useState)(!1),N=(0,o.useCallback)(async e=>{let t;let r=null!==w.current;if(null===e.tokens)w.current=null,e.shouldStore&&(await j(c),await j(d)),t=null;else{let{token:n}=e.tokens;if(w.current=n,e.shouldStore){let{refreshToken:t}=e.tokens;await D(c,n),await D(d,t)}t=n}r!==(null!==t)&&await n?.(),k(t),x(!1)},[D,j]);(0,o.useEffect)(()=>{let e=async e=>{if(M)return e.preventDefault(),e.returnValue=!0,"Are you sure you want to leave? Your changes may not be saved."};return _("beforeunload",e),()=>{y("beforeunload",e)}}),(0,o.useEffect)(()=>{let e=e=>{(async()=>{if(e.storageArea===i&&e.key===I(c)){let t=e.newValue;R(`synced access token, is null: ${null===t}`),await N({shouldStore:!1,tokens:null===t?null:{token:t}})}})()};return _("storage",e),()=>y("storage",e)},[N]);let E=(0,o.useCallback)(async t=>{let{tokens:n}=await e.unauthenticatedCall("auth:signIn","code"in t?{params:{code:t.code},verifier:t.verifier}:t);return R(`retrieved tokens, is null: ${null===n}`),await N({shouldStore:!0,tokens:n??null}),null!==n},[e,N]),F=(0,o.useCallback)(async(t,n)=>{let r=n instanceof FormData?Array.from(n.entries()).reduce((e,[t,n])=>(e[t]=n,e),{}):n??{},o=await S(s)??void 0;await j(s);let a=await e.authenticatedCall("auth:signIn",{provider:t,params:r,verifier:o});if(void 0!==a.redirect){let e=new URL(a.redirect);return await D(s,a.verifier),void 0!==window.location&&(window.location.href=e.toString()),{signingIn:!1,redirect:e}}if(void 0!==a.tokens){let{tokens:e}=a;return R(`signed in and got tokens, is null: ${null===e}`),await N({shouldStore:!0,tokens:e}),{signingIn:null!==a.tokens}}return{signingIn:!1}},[e,N,S]),O=(0,o.useCallback)(async()=>{try{await e.authenticatedCall("auth:signOut")}catch(e){}R("signed out, erasing tokens"),await N({shouldStore:!0,tokens:null})},[N,e]),P=(0,o.useCallback)(async({forceRefreshToken:e})=>{if(e){let e=w.current;return await v(d,async()=>{let t=w.current;if(t!==e)return R(`returning synced token, is null: ${null===t}`),t;let n=await S(d)??null;return null!==n?(A(!0),await j(d),await E({refreshToken:n}).finally(()=>{A(!1)}),R(`returning retrieved token, is null: ${null===t}`),w.current):(A(!1),R("returning null, there is no refresh token"),null)})}return w.current},[E,O,S]),T=(0,o.useRef)(!1);(0,o.useEffect)(()=>{if(void 0===i)throw Error("`localStorage` is not available in this environment, set the `storage` prop on `ConvexAuthProvider`!");let e=async()=>{let e=await S(c)??null;R(`retrieved token from storage, is null: ${null===e}`),await N({shouldStore:!1,tokens:null===e?null:{token:e}})};if(void 0!==t){let n=S(f),r=n=>{if(!n||t._timeFetched>+n){let{token:e,refreshToken:n}=t._state;D(f,t._timeFetched.toString()),N({tokens:null===e||null===n?null:{token:e,refreshToken:n},shouldStore:!0})}else e()};n instanceof Promise?n.then(r):r(n);return}let n=void 0!==window?.location?new URLSearchParams(window.location.search).get("code"):null;if(T.current||n){if(n&&!T.current){T.current=!0;let e=new URL(window.location.href);e.searchParams.delete("code"),(async()=>{await h(e.pathname+e.search+e.hash),await F(void 0,{code:n}),T.current=!1})()}}else e()},[e,S]);let V=(0,o.useMemo)(()=>({signIn:F,signOut:O}),[F,O]),$=null!==b,W=(0,o.useMemo)(()=>({isLoading:m,isAuthenticated:$,fetchAccessToken:P}),[P,m,$]);return(0,r.jsx)(l.Provider,{value:W,children:(0,r.jsx)(a.Provider,{value:V,children:(0,r.jsx)(u.Provider,{value:b,children:p})})})}async function v(e,t){let n=window?.navigator?.locks;return void 0!==n?await n.request(e,t):await m(e,t)}function h(e){void 0===globalThis.__convexAuthMutexes&&(globalThis.__convexAuthMutexes={});let t=globalThis.__convexAuthMutexes[e];return void 0===t&&(globalThis.__convexAuthMutexes[e]={currentlyRunning:null,waiting:[]}),t=globalThis.__convexAuthMutexes[e]}function p(e,t){globalThis.__convexAuthMutexes[e]=t}async function w(e,t){let n=h(e);null===n.currentlyRunning?p(e,{currentlyRunning:t().finally(()=>{let t=h(e).waiting.shift();p(e,{...h(e),currentlyRunning:void 0===t?null:w(e,t)})}),waiting:[]}):p(e,{...n,waiting:[...n.waiting,t]})}async function m(e,t){return new Promise((n,r)=>{w(e,()=>t().then(e=>n(e)).catch(e=>r(e)))})}function _(e,t,n){window.addEventListener?.(e,t,n)}function y(e,t,n){window.removeEventListener?.(e,t,n)}},9027:function(e,t,n){"use strict";n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return er},fC:function(){return Y},h_:function(){return Q},x8:function(){return eo},xz:function(){return K}});var r=n(2265),o=n(6741),a=n(8575),l=n(3966),i=n(9255),u=n(886),s=n(5278),c=n(9103),d=n(3832),f=n(1599),g=n(6840),v=n(6097),h=n(9157),p=n(5478),w=n(7053),m=n(7437),_="Dialog",[y,x]=(0,l.b)(_),[b,k]=y(_),C=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:l,modal:s=!0}=e,c=r.useRef(null),d=r.useRef(null),[f=!1,g]=(0,u.T)({prop:o,defaultProp:a,onChange:l});return(0,m.jsx)(b,{scope:t,triggerRef:c,contentRef:d,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:f,onOpenChange:g,onOpenToggle:r.useCallback(()=>g(e=>!e),[g]),modal:s,children:n})};C.displayName=_;var R="DialogTrigger",D=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,l=k(R,n),i=(0,a.e)(t,l.triggerRef);return(0,m.jsx)(g.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":B(l.open),...r,ref:i,onClick:(0,o.M)(e.onClick,l.onOpenToggle)})});D.displayName=R;var S="DialogPortal",[j,I]=y(S,{forceMount:void 0}),M=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,l=k(S,t);return(0,m.jsx)(j,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,m.jsx)(f.z,{present:n||l.open,children:(0,m.jsx)(d.h,{asChild:!0,container:a,children:e})}))})};M.displayName=S;var A="DialogOverlay",N=r.forwardRef((e,t)=>{let n=I(A,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=k(A,e.__scopeDialog);return a.modal?(0,m.jsx)(f.z,{present:r||a.open,children:(0,m.jsx)(E,{...o,ref:t})}):null});N.displayName=A;var E=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=k(A,n);return(0,m.jsx)(h.Z,{as:w.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,m.jsx)(g.WV.div,{"data-state":B(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),F="DialogContent",O=r.forwardRef((e,t)=>{let n=I(F,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=k(F,e.__scopeDialog);return(0,m.jsx)(f.z,{present:r||a.open,children:a.modal?(0,m.jsx)(P,{...o,ref:t}):(0,m.jsx)(T,{...o,ref:t})})});O.displayName=F;var P=r.forwardRef((e,t)=>{let n=k(F,e.__scopeDialog),l=r.useRef(null),i=(0,a.e)(t,n.contentRef,l);return r.useEffect(()=>{let e=l.current;if(e)return(0,p.Ry)(e)},[]),(0,m.jsx)(V,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),T=r.forwardRef((e,t)=>{let n=k(F,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,m.jsx)(V,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,l;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(l=n.triggerRef.current)||void 0===l||l.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,l;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let i=t.target;(null===(l=n.triggerRef.current)||void 0===l?void 0:l.contains(i))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),V=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:l,onCloseAutoFocus:i,...u}=e,d=k(F,n),f=r.useRef(null),g=(0,a.e)(t,f);return(0,v.EW)(),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:l,onUnmountAutoFocus:i,children:(0,m.jsx)(s.XB,{role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":B(d.open),...u,ref:g,onDismiss:()=>d.onOpenChange(!1)})}),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(q,{titleId:d.titleId}),(0,m.jsx)(J,{contentRef:f,descriptionId:d.descriptionId})]})]})}),$="DialogTitle",W=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=k($,n);return(0,m.jsx)(g.WV.h2,{id:o.titleId,...r,ref:t})});W.displayName=$;var L="DialogDescription",U=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=k(L,n);return(0,m.jsx)(g.WV.p,{id:o.descriptionId,...r,ref:t})});U.displayName=L;var z="DialogClose",Z=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=k(z,n);return(0,m.jsx)(g.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>a.onOpenChange(!1))})});function B(e){return e?"open":"closed"}Z.displayName=z;var X="DialogTitleWarning",[G,H]=(0,l.k)(X,{contentName:F,titleName:$,docsSlug:"dialog"}),q=e=>{let{titleId:t}=e,n=H(X),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},J=e=>{let{contentRef:t,descriptionId:n}=e,o=H("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},Y=C,K=D,Q=M,ee=N,et=O,en=W,er=U,eo=Z},5922:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(2265),o=r.createContext(void 0),a={setTheme:e=>{},themes:[]},l=()=>{var e;return null!=(e=r.useContext(o))?e:a}}}]);