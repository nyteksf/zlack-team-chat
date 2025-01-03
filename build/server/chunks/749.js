exports.id=749,exports.ids=[749],exports.modules={6769:(e,t,s)=>{let a={a181d95251623eaa872f32ddcf2f2c67ab6afb68:()=>Promise.resolve().then(s.bind(s,330)).then(e=>e.invalidateCache)};async function r(e,...t){return(await a[e]()).apply(null,t)}e.exports={a181d95251623eaa872f32ddcf2f2c67ab6afb68:r.bind(null,"a181d95251623eaa872f32ddcf2f2c67ab6afb68")}},7346:(e,t,s)=>{Promise.resolve().then(s.bind(s,4559)),Promise.resolve().then(s.bind(s,2016)),Promise.resolve().then(s.bind(s,7376)),Promise.resolve().then(s.bind(s,4511)),Promise.resolve().then(s.bind(s,8644))},5577:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2994,23)),Promise.resolve().then(s.t.bind(s,6114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,9671,23)),Promise.resolve().then(s.t.bind(s,1868,23)),Promise.resolve().then(s.t.bind(s,4759,23))},6378:(e,t,s)=>{"use strict";s.d(t,{h:()=>a});let a=s(8078).qL},2016:(e,t,s)=>{"use strict";s.d(t,{ConvexClientProvider:()=>l});var a=s(326),r=s(7317),n=s(4219);let o=new r.Zj("https://kindred-eagle-5.convex.cloud");function l({children:e}){return a.jsx(n.l,{client:o,children:e})}},7376:(e,t,s)=>{"use strict";s.d(t,{JotaiProvider:()=>n});var a=s(326),r=s(7991);let n=({children:e})=>a.jsx(r.zt,{children:e})},4511:(e,t,s)=>{"use strict";s.d(t,{Modals:()=>v});var a=s(326),r=s(7577),n=s(5999),o=s(5047),l=s(7915),i=s(7317),d=s(6378);let c=()=>{let[e,t]=(0,r.useState)(null),[s,a]=(0,r.useState)(null),[n,o]=(0,r.useState)(null),l=(0,r.useMemo)(()=>"pending"===n,[n]),c=(0,r.useMemo)(()=>"success"===n,[n]),u=(0,r.useMemo)(()=>"error"===n,[n]),m=(0,r.useMemo)(()=>"settled"===n,[n]),p=(0,i.Db)(d.h.channels.create);return{mutate:(0,r.useCallback)(async(e,s)=>{try{t(null),a(null),o("pending");let r=await p(e);return s?.onSuccess?.(r),r}catch(e){if(o("error"),s?.onError?.(e),s?.throwError)throw e}finally{o("settled"),s?.onSettled?.()}},[p]),data:e,error:s,isPending:l,isSuccess:c,isError:u,isSettled:m}};var u=s(2494),m=s(1190),p=s(1664),x=s(4118);let g=()=>{let e=(0,o.useRouter)(),t=(0,l.m)(),[s,i]=(0,u.O)(),{mutate:d,isPending:g}=c(),[f,h]=(0,r.useState)(""),b=()=>{h(""),i(!1)};return a.jsx(x.Vq,{open:s,onOpenChange:b,children:(0,a.jsxs)(x.cZ,{className:"p-0 bg-gray-50 overflow-hidden rounded-xl",children:[(0,a.jsxs)(x.fK,{className:"p-4 border-b bg-gray-100",children:[a.jsx(x.$N,{children:"Add a channel"}),a.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Channel names must be lowercase and without spaces"})]}),(0,a.jsxs)("form",{className:"p-4 space-y-6",onSubmit:s=>{s.preventDefault(),d({name:f,workspaceId:t},{onSuccess:s=>{n.Am.success("Channel created successfully"),e.push(`/workspace/${t}/channel/${s}`),b()},onError:()=>{n.Am.error("Failed to create new channel.")}})},children:[(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Channel name"}),(0,a.jsxs)("div",{className:"relative",children:[a.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 select-none",children:"#"}),a.jsx(m.I,{value:f,onChange:e=>{h(e.target.value.replace(/\s+/g,"-").toLowerCase())},disabled:g,required:!0,autoFocus:!0,minLength:3,maxLength:80,placeholder:"e.g. plan-budget",className:"pl-7 pr-3 h-10 border-gray-300"})]}),(0,a.jsxs)("p",{className:"text-xs text-gray-500 mt-1",children:[f.length,"/80 characters"]})]}),(0,a.jsxs)(x.cN,{className:"gap-x-2",children:[a.jsx(x.GG,{asChild:!0,children:a.jsx(p.z,{variant:"outline",disabled:g,onClick:b,children:"Cancel"})}),a.jsx(p.z,{type:"submit",disabled:g||!f.trim(),children:g?"Creating...":"Create"})]})]})]})})};var f=s(2365);let h=()=>{let[e,t]=(0,r.useState)(null),[s,a]=(0,r.useState)(null),[n,o]=(0,r.useState)(null),l=(0,r.useMemo)(()=>"pending"===n,[n]),c=(0,r.useMemo)(()=>"success"===n,[n]),u=(0,r.useMemo)(()=>"error"===n,[n]),m=(0,r.useMemo)(()=>"settled"===n,[n]),p=(0,i.Db)(d.h.workspaces.create);return{mutate:(0,r.useCallback)(async(e,s)=>{try{t(null),a(null),o("pending");let r=await p(e);return s?.onSuccess?.(r),r}catch(e){if(o("error"),s?.onError?.(e),s?.throwError)throw e}finally{o("settled"),s?.onSettled?.()}},[p]),data:e,error:s,isPending:l,isSuccess:c,isError:u,isSettled:m}},b=()=>{let e=(0,o.useRouter)(),[t,s]=(0,f.D)(),[l,i]=(0,r.useState)(""),{mutate:d,isPending:c}=h(),u=()=>{s(!1),i("")},g=async t=>{t.preventDefault(),d({name:l},{onSuccess(t){n.Am.success("Workspace created successfully."),e.push(`/workspace/${t}`),u()}})};return a.jsx(x.Vq,{open:t,onOpenChange:u,children:(0,a.jsxs)(x.cZ,{className:"p-0 bg-gray-50 overflow-hidden rounded-xl",children:[a.jsx(x.fK,{className:"p-4 border-b bg-gray-100",children:a.jsx(x.$N,{children:"Create New Workspace"})}),(0,a.jsxs)("form",{onSubmit:g,className:"p-4 space-y-6",children:[(0,a.jsxs)("div",{className:"space-y-2",children:[a.jsx("label",{className:"text-sm font-medium text-gray-700",children:"Workspace name"}),a.jsx(m.I,{disabled:c,value:l,onChange:e=>i(e.target.value),required:!0,autoFocus:!0,minLength:3,maxLength:80,placeholder:"e.g. work, personal, home",className:"h-10 border-gray-300"}),(0,a.jsxs)("p",{className:"text-xs text-gray-500 mt-1",children:[l.length,"/80 characters"]})]}),(0,a.jsxs)(x.cN,{className:"gap-x-2",children:[a.jsx(x.GG,{asChild:!0,children:a.jsx(p.z,{type:"button",variant:"outline",disabled:c,onClick:u,children:"Cancel"})}),a.jsx(p.z,{type:"submit",disabled:c||!l.trim(),children:c?"Creating...":"Create"})]})]})]})})},v=()=>{let[e,t]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{t(!0)},[]),e)?(0,a.jsxs)(a.Fragment,{children:[a.jsx(g,{}),a.jsx(b,{})]}):null}},1664:(e,t,s)=>{"use strict";s.d(t,{z:()=>d});var a=s(326),r=s(7577),n=s(4214),o=s(9360),l=s(1223);let i=(0,o.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",transparent:"bg-transparent hover:bg-accent/10 text-accent"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10",iconSm:"h-8 w-8"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef(({className:e,variant:t,size:s,asChild:r=!1,...o},d)=>{let c=r?n.g7:"button";return a.jsx(c,{className:(0,l.cn)(i({variant:t,size:s,className:e})),ref:d,...o})});d.displayName="Button"},4118:(e,t,s)=>{"use strict";s.d(t,{$N:()=>f,Be:()=>h,GG:()=>u,Vq:()=>i,cN:()=>g,cZ:()=>p,fK:()=>x,hg:()=>d});var a=s(326),r=s(7577),n=s(8958),o=s(4019),l=s(1223);let i=n.fC,d=n.xz,c=n.h_,u=n.x8,m=r.forwardRef(({className:e,...t},s)=>a.jsx(n.aV,{ref:s,className:(0,l.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));m.displayName=n.aV.displayName;let p=r.forwardRef(({className:e,children:t,...s},r)=>(0,a.jsxs)(c,{children:[a.jsx(m,{}),(0,a.jsxs)(n.VY,{ref:r,className:(0,l.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...s,children:[t,(0,a.jsxs)(n.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[a.jsx(o.Z,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));p.displayName=n.VY.displayName;let x=({className:e,...t})=>a.jsx("div",{className:(0,l.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});x.displayName="DialogHeader";let g=({className:e,...t})=>a.jsx("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});g.displayName="DialogFooter";let f=r.forwardRef(({className:e,...t},s)=>a.jsx(n.Dx,{ref:s,className:(0,l.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));f.displayName=n.Dx.displayName;let h=r.forwardRef(({className:e,...t},s)=>a.jsx(n.dk,{ref:s,className:(0,l.cn)("text-sm text-muted-foreground",e),...t}));h.displayName=n.dk.displayName},1190:(e,t,s)=>{"use strict";s.d(t,{I:()=>o});var a=s(326),r=s(7577),n=s(1223);let o=r.forwardRef(({className:e,type:t,...s},r)=>a.jsx("input",{type:t,className:(0,n.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...s}));o.displayName="Input"},8644:(e,t,s)=>{"use strict";s.d(t,{Toaster:()=>o});var a=s(326),r=s(4831),n=s(5999);let o=({...e})=>{let{theme:t="system"}=(0,r.F)();return a.jsx(n.x7,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})}},2494:(e,t,s)=>{"use strict";s.d(t,{O:()=>o});var a=s(7517),r=s(7991);let n=(0,a.cn)(!1),o=()=>(0,r.KO)(n)},2365:(e,t,s)=>{"use strict";s.d(t,{D:()=>o});var a=s(7517),r=s(7991);let n=(0,a.cn)(!1),o=()=>(0,r.KO)(n)},7915:(e,t,s)=>{"use strict";s.d(t,{m:()=>r});var a=s(5047);let r=()=>(0,a.useParams)().workspaceId},1223:(e,t,s)=>{"use strict";s.d(t,{cn:()=>n});var a=s(1135),r=s(1009);function n(...e){return(0,r.m6)((0,a.W)(e))}},6047:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>g,metadata:()=>x});var a=s(9510),r=s(9355),n=s.n(r),o=s(1711),l=s.n(o),i=s(8570);let d=(0,i.createProxy)(String.raw`C:\Users\email\OneDrive\Desktop\SLACK-CLONE-HAILMARY\zlack-team-chat\src\components\modals.tsx#Modals`),c=(0,i.createProxy)(String.raw`C:\Users\email\OneDrive\Desktop\SLACK-CLONE-HAILMARY\zlack-team-chat\src\components\ui\sonner.tsx#Toaster`),u=(0,i.createProxy)(String.raw`C:\Users\email\OneDrive\Desktop\SLACK-CLONE-HAILMARY\zlack-team-chat\src\components\jotai-provider.tsx#JotaiProvider`);var m=s(912);let p=(0,i.createProxy)(String.raw`C:\Users\email\OneDrive\Desktop\SLACK-CLONE-HAILMARY\zlack-team-chat\src\components\convex-client-provider.tsx#ConvexClientProvider`);s(5023);let x={title:"Create Next App",description:"Generated by create next app"};function g({children:e}){return a.jsx(m.kk,{children:a.jsx("html",{lang:"en",children:a.jsx("body",{className:`${n().variable} ${l().variable} antialiased`,children:a.jsx(p,{children:(0,a.jsxs)(u,{children:[a.jsx(c,{}),a.jsx(d,{}),e]})})})})})}},5023:()=>{}};