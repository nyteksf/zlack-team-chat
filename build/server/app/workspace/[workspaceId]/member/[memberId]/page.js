(()=>{var e={};e.id=217,e.ids=[217],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5807:e=>{"use strict";e.exports=require("module")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},5071:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>c,routeModule:()=>p,tree:()=>d}),t(7858),t(3697),t(6047),t(5866);var s=t(3191),a=t(8716),n=t(7922),i=t.n(n),o=t(5231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);t.d(r,l);let d=["",{children:["workspace",{children:["[workspaceId]",{children:["member",{children:["[memberId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,7858)),"C:\\Users\\email\\OneDrive\\Desktop\\SLACK-CLONE-HAILMARY\\zlack-team-chat\\src\\app\\workspace\\[workspaceId]\\member\\[memberId]\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3697)),"C:\\Users\\email\\OneDrive\\Desktop\\SLACK-CLONE-HAILMARY\\zlack-team-chat\\src\\app\\workspace\\[workspaceId]\\layout.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,6047)),"C:\\Users\\email\\OneDrive\\Desktop\\SLACK-CLONE-HAILMARY\\zlack-team-chat\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\email\\OneDrive\\Desktop\\SLACK-CLONE-HAILMARY\\zlack-team-chat\\src\\app\\workspace\\[workspaceId]\\member\\[memberId]\\page.tsx"],m="/workspace/[workspaceId]/member/[memberId]/page",u={require:t,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/workspace/[workspaceId]/member/[memberId]/page",pathname:"/workspace/[workspaceId]/member/[memberId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8179:(e,r,t)=>{Promise.resolve().then(t.bind(t,553))},553:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>C});var s=t(326),a=t(5999),n=t(7577),i=t(3240),o=t(949),l=t(7886),d=t(7915),c=t(692),m=t(9964),u=t(8674),p=t(4046),x=t(1664),h=t(3594);let b=({memberName:e="Member",memberImage:r,onClick:t})=>{let a=e.charAt(0).toUpperCase();return s.jsx("div",{className:"bg-white border-b h-[49px] flex items-center px-4 overflow-hidden",children:(0,s.jsxs)(x.z,{variant:"ghost",className:"text-lg font-semibold px-2 overflow-hidden w-auto",size:"sm",onClick:t,children:[(0,s.jsxs)(h.qE,{className:"size-6 mr-2",children:[s.jsx(h.F$,{src:r}),s.jsx(h.Q5,{children:a})]}),s.jsx("span",{className:"truncate",children:e}),s.jsx(p.RiI,{className:"size-2.5 ml-2"})]})})};var g=t(3265),f=t(198),v=t(1931);let j=(0,g.default)(async()=>{},{loadableGenerated:{modules:["app\\workspace\\[workspaceId]\\member\\[memberId]\\chat-input.tsx -> @/components/editor"]},ssr:!1}),w=({placeholder:e,conversationId:r})=>{let[t,i]=(0,n.useState)(0),[o,l]=(0,n.useState)(!1),c=(0,n.useRef)(null),m=(0,d.m)(),{mutate:u}=(0,f.g)(),{mutate:p}=(0,v.u)(),x=async({body:e,image:t})=>{try{l(!0),c?.current?.enable(!1);let s={conversationId:r,workspaceId:m,body:e,image:void 0};if(t){let e=await p({},{throwError:!0});if(!e)throw Error("Image URL not found");let r=await fetch(e,{method:"POST",headers:{"Content-Type":t.type},body:t});if(!r.ok)throw Error("Failed to upload image");let{storageId:a}=await r.json();s.image=a}await u(s,{throwError:!0}),i(e=>e+1)}catch(e){a.Am.error("Message failed to send"),console.log(e)}finally{l(!1),c?.current?.enable(!0)}};return s.jsx("div",{className:"px-5 w-full",children:s.jsx(j,{placeholder:e,onSubmit:x,disabled:o,innerRef:c},t)})};var y=t(5559);let N=({id:e})=>{let r=(0,l.H)(),{onOpenProfile:t}=(0,u.u)(),{data:a,isLoading:n}=(0,c.R)({id:r}),{results:o,status:d,loadMore:p}=(0,m.K)({conversationId:e});return n||"LoadingFirstPage"===d?s.jsx("div",{className:"h-full flex items-center justify-center",children:s.jsx(i.Z,{className:"size-6 animate-spin text-muted-foreground"})}):(0,s.jsxs)("div",{className:"flex flex-col h-full",children:[s.jsx(b,{memberName:a?.user.name,memberImage:a?.user.image,onClick:()=>t(r)}),s.jsx(y.r,{data:o,variant:"conversation",memberImage:a?.user.image,memberName:a?.user.name,loadMore:p,isLoadingMore:"LoadingMore"===d,canLoadMore:"CanLoadMore"===d}),s.jsx(w,{placeholder:`Message ${a?.user.name}`,conversationId:e})]})};var k=t(7317),I=t(6378);let M=()=>{let[e,r]=(0,n.useState)(null),[t,s]=(0,n.useState)(null),[a,i]=(0,n.useState)(null),o=(0,n.useMemo)(()=>"pending"===a,[a]),l=(0,n.useMemo)(()=>"success"===a,[a]),d=(0,n.useMemo)(()=>"error"===a,[a]),c=(0,n.useMemo)(()=>"settled"===a,[a]),m=(0,k.Db)(I.h.conversations.createOrGet);return{mutate:(0,n.useCallback)(async(e,t)=>{try{r(null),s(null),i("pending");let a=await m(e);return t?.onSuccess?.(a),a}catch(e){if(i("error"),t?.onError?.(e),t?.throwError)throw e}finally{i("settled"),t?.onSettled?.()}},[m]),data:e,error:t,isPending:o,isSuccess:l,isError:d,isSettled:c}},C=()=>{let e=(0,l.H)(),r=(0,d.m)(),[t,c]=(0,n.useState)(null),{mutate:m,isPending:u}=M();return((0,n.useEffect)(()=>{m({workspaceId:r,memberId:e},{onSuccess(e){c(e)},onError(e){a.Am.error("Failed to get or create conversation"),console.log(e)}})},[e,r,m]),u)?s.jsx("div",{className:"h-full flex items-center justify-center",children:s.jsx(i.Z,{className:"size-6 animate-spin text-muted-foreground"})}):t?s.jsx(N,{id:t}):(0,s.jsxs)("div",{className:"h-full flex flex-col gap-y-2 items-center justify-center",children:[s.jsx(o.Z,{className:"size-6 text-muted-foreground"}),s.jsx("span",{className:"text-sm text-muted-foreground",children:"Conversation not found"})]})}},5559:(e,r,t)=>{"use strict";t.d(r,{r:()=>g});var s=t(326),a=t(7577),n=t(3240),i=t(3456),o=t(3233),l=t(4719),d=t(6032),c=t(7915),m=t(4727),u=t(6801);let p=({name:e,creationTime:r})=>(0,s.jsxs)("div",{className:"mt-[88px] mx-5 mb-4",children:[(0,s.jsxs)("p",{className:"text-2xl font-bold flex items-center mb-2",children:["# ",e]}),(0,s.jsxs)("p",{className:"font-normal text-slate-800 mb-4",children:["Welcome to the beginning of the ",(0,s.jsxs)("strong",{children:["# ",e]})," channel! Created on ",(0,l.WU)(r,"MMMM do, yyyy"),"."]}),s.jsx("p",{className:"text-sm text-slate-600",children:"This is where your team's conversations will live. Share messages, files, and collaborate together in this space."})]});var x=t(3594);let h=({name:e="Member",image:r})=>{let t=e.charAt(0).toUpperCase();return(0,s.jsxs)("div",{className:"mt-[88px] mx-5 mb-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-x-1 mb-2",children:[(0,s.jsxs)(x.qE,{className:"size-14 mr-2",children:[s.jsx(x.F$,{src:r}),s.jsx(x.Q5,{children:t})]}),s.jsx("p",{className:"text-2xl font-bold",children:e})]}),s.jsx("p",{className:"font-normal text-slate-800 mb-4",children:e}),(0,s.jsxs)("p",{className:"text-sm text-slate-600",children:["This conversation is visible only for yourself and"," ",s.jsx("strong",{children:e})]})]})},b=e=>{let r=new Date(e);return(0,i.z)(r)?"Today":(0,o.g)(r)?"Yesterday":(0,l.WU)(r,"EEEE, MMMM d")},g=({memberName:e,memberImage:r,channelName:t,channelCreationTime:i,data:o,variant:x="channel",loadMore:g,isLoadingMore:f,canLoadMore:v})=>{let[j,w]=(0,a.useState)(null),y=(0,c.m)(),{data:N}=(0,m.i)({workspaceId:y}),k=o?.reduce((e,r)=>{let t=new Date(r._creationTime),s=l.WU(t,"MM-dd-yyyy");return e[s]||(e[s]=[]),e[s].unshift(r),e},{});return(0,s.jsxs)("div",{className:"flex-1 flex flex-col-reverse pb-4 overflow-y-auto messages-scrollbar",children:[Object.entries(k||{}).map(([e,r])=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-center my-2 relative",children:[s.jsx("hr",{className:"absolute top-1/2 left-0 right-0 border-t border-gray-300"}),s.jsx("span",{className:"relative inline-block bg-white px-4 py-1 rounded-full text-xs border border-gray-300 shadow-sm",children:b(e)})]}),r.map((e,t)=>{let a=r[t-1],n=a&&a.user?._id===e.user?._id&&5>(0,d.X)(new Date(e._creationTime),new Date(a._creationTime));return console.log(e),s.jsx(u.v,{id:e._id,memberId:e.memberId,authorImage:e.user.image,isAuthor:e.memberId===N?._id,authorName:e.user.name,reactions:e.reactions,body:e.body,image:e.image,updatedAt:e.updatedAt,createdAt:e._creationTime,isEditing:j===e._id,setEditingId:w,isCompact:n,hideThreadButton:"thread"===x,threadCount:e.threadCount,threadImage:e.threadImage,threadName:e.threadName,threadTimestamp:e.threadTimestamp},e._id)})]},e)),s.jsx("div",{className:"h-1",ref:e=>{if(e){let r=new IntersectionObserver(([e])=>{e.isIntersecting&&v&&g()},{threshold:1});return r.observe(e),()=>r.disconnect()}}}),f&&(0,s.jsxs)("div",{className:"text-center my-2 relative",children:[s.jsx("hr",{className:"absolute top-1/2 left-0 right-0 border-t border-gray-300"}),s.jsx("span",{className:"relative inline-block bg-white px-4 py-1 rounded-full text-xs border border-gray-300 shadow-sm",children:s.jsx(n.Z,{className:"size-4 animate-spin"})})]}),"channel"===x&&t&&i&&s.jsx(p,{name:t,creationTime:i}),"conversation"===x&&s.jsx(h,{name:e,image:r})]})}},7858:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(8570).createProxy)(String.raw`C:\Users\email\OneDrive\Desktop\SLACK-CLONE-HAILMARY\zlack-team-chat\src\app\workspace\[workspaceId]\member\[memberId]\page.tsx#default`)}};var r=require("../../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[948,986,621,878,283,854,434,823,749,853],()=>t(5071));module.exports=s})();