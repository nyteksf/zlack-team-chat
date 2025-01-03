"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[811],{1620:function(e,t,n){n.d(t,{h:function(){return a}});let a=n(1321).qL},4190:function(e,t,n){n.d(t,{t:function(){return m}});var a=n(7437),r=n(2265),l=n(1799),s=n(7312),o=n(3448);let i=s.fC,d=s.xz,u=r.forwardRef((e,t)=>{let{className:n,align:r="center",sideOffset:l=4,...i}=e;return(0,a.jsx)(s.h_,{children:(0,a.jsx)(s.VY,{ref:t,align:r,sideOffset:l,className:(0,o.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})})});u.displayName=s.VY.displayName;var c=n(1488);let m=e=>{let{children:t,hint:n="Emoji",onEmojiSelect:s}=e,[o,m]=(0,r.useState)(!1),[f,x]=(0,r.useState)(!1);return(0,a.jsx)(c.pn,{children:(0,a.jsxs)(i,{open:o,onOpenChange:m,children:[(0,a.jsxs)(c.u,{open:f,onOpenChange:x,delayDuration:50,children:[(0,a.jsx)(d,{asChild:!0,children:(0,a.jsx)(c.aJ,{asChild:!0,children:t})}),(0,a.jsx)(c._v,{className:"bg-[#242424] text-[#F5F5F5] border border-[#F5F5F5]/5",children:(0,a.jsx)("p",{className:"font-medium text-xs",children:n})})]}),(0,a.jsx)(u,{className:"p-0 w-full border-none shadow-none",children:(0,a.jsx)(l.ZP,{onEmojiClick:e=>{s(e.emoji),m(!1),setTimeout(()=>{x(!1)},500)}})})]})})}},9649:function(e,t,n){n.d(t,{k:function(){return l}});var a=n(7437),r=n(1488);let l=e=>{let{label:t,children:n,side:l,align:s}=e;return(0,a.jsx)(r.pn,{children:(0,a.jsxs)(r.u,{delayDuration:50,children:[(0,a.jsx)(r.aJ,{asChild:!0,children:(0,a.jsx)("div",{children:n})}),(0,a.jsx)(r._v,{side:l,align:s,className:"bg-[#242424] text-[#F5F5F5] border border-[#F5F5F5]/5 animate-in fade-in-0 backdrop-blur-sm shadow-lg zoom-in-95",children:(0,a.jsx)("p",{className:"font-medium text-xs",children:t})})]})})}},5360:function(e,t,n){n.d(t,{v:function(){return Y}});var a=n(7437),r=n(4438),l=n(166),s=n(6614),o=n(7300),i=n(5432),d=n(7266),u=n(2265),c=n(1620);let m=()=>{let[e,t]=(0,u.useState)(null),[n,a]=(0,u.useState)(null),[r,l]=(0,u.useState)(null),s=(0,u.useMemo)(()=>"pending"===r,[r]),o=(0,u.useMemo)(()=>"success"===r,[r]),i=(0,u.useMemo)(()=>"error"===r,[r]),m=(0,u.useMemo)(()=>"settled"===r,[r]),f=(0,d.Db)(c.h.messages.remove);return{mutate:(0,u.useCallback)(async(e,n)=>{var r,s,o;try{t(null),a(null),l("pending");let s=await f(e);return null==n||null===(r=n.onSuccess)||void 0===r||r.call(n,s),s}catch(e){if(l("error"),null==n||null===(s=n.onError)||void 0===s||s.call(n,e),null==n?void 0:n.throwError)throw e}finally{l("settled"),null==n||null===(o=n.onSettled)||void 0===o||o.call(n)}},[f]),data:e,error:n,isPending:s,isSuccess:o,isError:i,isSettled:m}},f=()=>{let[e,t]=(0,u.useState)(null),[n,a]=(0,u.useState)(null),[r,l]=(0,u.useState)(null),s=(0,u.useMemo)(()=>"pending"===r,[r]),o=(0,u.useMemo)(()=>"success"===r,[r]),i=(0,u.useMemo)(()=>"error"===r,[r]),m=(0,u.useMemo)(()=>"settled"===r,[r]),f=(0,d.Db)(c.h.messages.update);return{mutate:(0,u.useCallback)(async(e,n)=>{var r,s,o;try{t(null),a(null),l("pending");let s=await f(e);return null==n||null===(r=n.onSuccess)||void 0===r||r.call(n,s),s}catch(e){if(l("error"),null==n||null===(s=n.onError)||void 0===s||s.call(n,e),null==n?void 0:n.throwError)throw e}finally{l("settled"),null==n||null===(o=n.onSettled)||void 0===o||o.call(n)}},[f]),data:e,error:n,isPending:s,isSuccess:o,isError:i,isSettled:m}};var x=n(3448),h=n(6136),p=n(5863),g=n(9649),v=n(1422),b=n(1555),j=n(5675),y=n(7413),N=n(2381),w=n(4190);let k=e=>{let{isAuthor:t,isPending:n,handleEdit:r,handleThread:l,handleDelete:s,handleReaction:o,hideThreadButton:i}=e;return(0,a.jsx)("div",{className:"absolute top-0 right-5 hover:top-0.5",children:(0,a.jsxs)("div",{className:"opacity-0 group-hover:opacity-100 border bg-white rounded-md shadow-sm transform hover:scale-105 transition-all flex flex-row",children:[(0,a.jsx)(w.t,{hint:"Add reaction",onEmojiSelect:e=>o(e),children:(0,a.jsx)(N.z,{className:"hover:translate-x-[-4] hover:translate-y-[4] transition-all",variant:"ghost",size:"iconSm",disabled:n,children:(0,a.jsx)(v.Z,{className:"size-4"})})}),!i&&(0,a.jsx)(g.k,{label:"Reply in thread",children:(0,a.jsx)(N.z,{className:"hover:translate-x-[-4] hover:translate-y-[-4] transition-all",variant:"ghost",size:"iconSm",disabled:n,onClick:l,children:(0,a.jsx)(b.Z,{className:"size-4"})})}),t&&(0,a.jsx)(g.k,{label:"Edit message",children:(0,a.jsx)(N.z,{className:"hover:translate-x-[-4] hover:translate-y-[4] transition-all",variant:"ghost",size:"iconSm",disabled:n,onClick:r,children:(0,a.jsx)(j.Z,{className:"size-4"})})}),t&&(0,a.jsx)(g.k,{label:"Delete message",children:(0,a.jsx)(N.z,{className:"hover:translate-x-[-4] hover:translate-y-[-4] transition-all",variant:"ghost",size:"iconSm",disabled:n,onClick:s,children:(0,a.jsx)(y.Z,{className:"size-4"})})})]})})};var C=n(4291);let S=e=>{let{url:t}=e;return t?(0,a.jsxs)(C.Vq,{children:[(0,a.jsx)(C.hg,{children:(0,a.jsx)("div",{className:"relative overflow-hidden max-w-[360px] border rounded-lg my-2 cursor-zoom-in",children:(0,a.jsx)("img",{src:t,alt:"Message image",className:"rounded-md object-cover size-full"})})}),(0,a.jsx)(C.cZ,{className:"max-w-[800px] border-none bg-transparent p-0 shadow-none",children:(0,a.jsx)("img",{src:t,alt:"Message image",className:"rounded-md object-cover size-full"})})]}):null};var z=n(407),M=n(6404),F=n(6246);let E=e=>{let{count:t,image:n,name:r="Member",timestamp:l,onClick:s}=e,o=r.charAt(0).toUpperCase();return t&&l?(0,a.jsxs)("button",{onClick:s,className:"p-1 rounded-md hover:bg-white border-transparent hover:border-border flex items-center justify-start group/thread-bar transition max-w-[600px]",children:[(0,a.jsxs)("div",{className:"flex items-center gap-2 overflow-hidden",children:[(0,a.jsxs)(F.qE,{className:"size-6 shrink-0",children:[(0,a.jsx)(F.F$,{src:n}),(0,a.jsx)(F.Q5,{children:o})]}),(0,a.jsxs)("span",{className:"text-xs text-sky-700 hover:underline font-bold truncate",children:[t," ",t>1?"replies":"reply"]}),(0,a.jsxs)("span",{className:"text-xs text-muted-foreground truncate group-hover/thread-bar:hidden block",children:["Last reply ",(0,M.Q)(l,{addSuffix:!0})]}),(0,a.jsx)("span",{className:"text-xs text-muted-foreground truncate group-hover/thread-bar:block hidden",children:"View thread"})]}),(0,a.jsx)(z.Z,{className:"size-4 text-muted-foreground ml-auto opacity-0 group-hover/thread-bar:opacity-100 transition shrink-0"})]}):null};var D=n(2744),V=n(3106),P=n(9279);let _=e=>{let{data:t,onChange:n}=e,r=(0,V.m)(),{data:l}=(0,P.i)({workspaceId:r}),s=null==l?void 0:l._id;return 0!==t.length&&s?(0,a.jsxs)("div",{className:"flex items-center gap-1 mt-1 mb-1",children:[t.map(e=>(0,a.jsx)(g.k,{label:"".concat(e.count," ").concat(1===e.count?"person":"people"," reacted with ").concat(e.value),children:(0,a.jsxs)("button",{onClick:()=>n(e.value),className:(0,x.cn)("h-6 px-2 rounded-full bg-slate-200/70 border border-slate-300 text-slate-800 flex items-center gap-x-1",e.memberIds.includes(s)&&"bg-[#F87171]/20 border-[#F87171]/60 text-[#F5F5F5]"),children:[e.value,(0,a.jsx)("span",{className:(0,x.cn)("text-xs font-semibold text-muted-foreground",e.memberIds.includes(s)&&"text-[#F87171]"),children:e.count})]})},e._id)),(0,a.jsx)(w.t,{hint:"Add reaction",onEmojiSelect:e=>n(e),children:(0,a.jsx)("button",{className:"h-7 px-3 rounded-full bg-slate-200/70 border border-transparent hover:border-slate-500/80 text-slate-800 flex items-center gap-x-1",children:(0,a.jsx)(D.rIg,{className:"size-4"})})})]}):null},A=()=>{let[e,t]=(0,u.useState)(null),[n,a]=(0,u.useState)(null),[r,l]=(0,u.useState)(null),s=(0,u.useMemo)(()=>"pending"===r,[r]),o=(0,u.useMemo)(()=>"success"===r,[r]),i=(0,u.useMemo)(()=>"error"===r,[r]),m=(0,u.useMemo)(()=>"settled"===r,[r]),f=(0,d.Db)(c.h.reactions.toggle);return{mutate:(0,u.useCallback)(async(e,n)=>{var r,s,o;try{t(null),a(null),l("pending");let s=await f(e);return null==n||null===(r=n.onSuccess)||void 0===r||r.call(n,s),s}catch(e){if(l("error"),null==n||null===(s=n.onError)||void 0===s||s.call(n,e),null==n?void 0:n.throwError)throw e}finally{l("settled"),null==n||null===(o=n.onSettled)||void 0===o||o.call(n)}},[f]),data:e,error:n,isPending:s,isSuccess:o,isError:i,isSettled:m}},R=(0,l.default)(()=>Promise.all([n.e(466),n.e(665),n.e(546),n.e(145),n.e(637)]).then(n.bind(n,2229)),{loadableGenerated:{webpack:()=>[2229]},ssr:!1}),Z=(0,l.default)(()=>Promise.all([n.e(546),n.e(434)]).then(n.bind(n,6434)),{loadableGenerated:{webpack:()=>[6434]},ssr:!1}),O=e=>"".concat((0,s.z)(e)?"Today":(0,o.g)(e)?"Yesterday":(0,i.WU)(e,"MMM d, yyyy")," at ").concat((0,i.WU)(e,"h:mm:ss a")),Y=e=>{let{id:t,isAuthor:n,memberId:l,authorImage:s,authorName:o="Member",reactions:d,body:u,image:c,createdAt:v,updatedAt:b,isEditing:j,isCompact:y,setEditingId:N,hideThreadButton:w,threadCount:C,threadImage:z,threadName:M,threadTimestamp:D}=e,{parentMessageId:V,onOpenMessage:P,onOpenProfile:Y,onClose:q}=(0,h.u)(),[I,T]=(0,p.t)("Permanently Delete Message","This message will be permanently removed from the conversation and cannot be recovered. Are you sure you want to proceed?"),{mutate:U,isPending:B}=f(),{mutate:J,isPending:W}=m(),{mutate:$,isPending:G}=A(),Q=B||G,K=e=>{$({messageId:t,value:e},{onError:()=>{r.Am.error("Failed to toggle reaction")}})},L=async()=>{await T()&&setTimeout(()=>{J({id:t},{onSuccess:()=>{r.Am.success("Message successfully deleted"),V===t&&q()},onError:()=>{r.Am.error("Failed to delete message. Please reload and try again.")}})},350)},H=e=>{let{body:n}=e;U({id:t,body:n},{onSuccess:()=>{r.Am.success("Message updated successfully"),N(null)},onError:()=>{r.Am.error("Failed to update message. Please try again.")}})};if(y)return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I,{}),(0,a.jsxs)("div",{className:(0,x.cn)("flex flex-col gap-2 p-1.5 px-5 scale-100 opacity-100 hover:bg-gray-100/60 group relative","transform transition-all",j&&"bg-[#F2C74433] hover:bg-[#F2C74433]",W&&"bg-rose-500/65 transform transition-all scale-y-0 opacity-0 origin-bottom duration-200"),children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)(g.k,{label:O(new Date(v)),children:(0,a.jsx)("button",{className:"text-xs text-muted-foreground opacity-0 group-hover:opacity-100 w-[40px] leading-[22px] text-center hover:underline",children:(0,i.WU)(new Date(v),"hh:mm")})}),j?(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)(R,{onSubmit:H,disabled:Q,defaultValue:JSON.parse(u),onCancel:()=>N(null),variant:"update"})}):(0,a.jsxs)("div",{className:"flex flex-col w-full",children:[(0,a.jsx)(Z,{value:u}),(0,a.jsx)(S,{url:c}),b?(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"(edited)"}):null,(0,a.jsx)(_,{data:d,onChange:K}),(0,a.jsx)(E,{count:C,image:z,name:M,timestamp:D,onClick:()=>P(t)})]})]}),!j&&(0,a.jsx)(k,{isAuthor:n,isPending:!1,handleEdit:()=>N(t),handleThread:()=>P(t),handleDelete:L,handleReaction:K,hideThreadButton:w})]})]});let X=o.charAt(0).toUpperCase();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(I,{}),(0,a.jsxs)("div",{className:(0,x.cn)("flex flex-col gap-2 p-1.5 px-5 scale-100 opacity-100 hover:bg-gray-100/60 group relative","transform transition-all",j&&"bg-[#F2C74433] hover:bg-[#F2C74433]",W&&"bg-rose-500/65 transform transition-all scale-y-0 opacity-0 origin-bottom duration-200"),children:[(0,a.jsxs)("div",{className:"flex items-start gap-2",children:[(0,a.jsx)("button",{onClick:()=>Y(l),children:(0,a.jsxs)(F.qE,{children:[(0,a.jsx)(F.F$,{src:s}),(0,a.jsx)(F.Q5,{children:X})]})}),j?(0,a.jsx)("div",{className:"w-full h-full",children:(0,a.jsx)(R,{onSubmit:H,disabled:Q,defaultValue:JSON.parse(u),onCancel:()=>N(null),variant:"update"})}):(0,a.jsxs)("div",{className:"flex flex-col w-full overflow-hidden",children:[(0,a.jsxs)("div",{className:"text-sm flex items-center gap-2",children:[(0,a.jsx)("button",{onClick:()=>Y(l),className:"font-bold text-primary hover:underline",children:o}),(0,a.jsx)(g.k,{label:O(new Date(v)),children:(0,a.jsx)("button",{className:"text-xs text-muted-foreground hover:underline",children:(0,i.WU)(new Date(v),"h:mm a")})})]}),(0,a.jsx)(Z,{value:u}),(0,a.jsx)(S,{url:c}),b?(0,a.jsx)("span",{className:"text-xs text-muted-foreground",children:"(edited)"}):null,(0,a.jsx)(_,{data:d,onChange:K}),(0,a.jsx)(E,{count:C,image:z,name:M,timestamp:D,onClick:()=>P(t)})]})]}),!j&&(0,a.jsx)(k,{isAuthor:n,isPending:Q,handleEdit:()=>N(t),handleThread:()=>P(t),handleDelete:L,handleReaction:K,hideThreadButton:w})]})]})}},6246:function(e,t,n){n.d(t,{F$:function(){return i},Q5:function(){return d},qE:function(){return o}});var a=n(7437),r=n(2265),l=n(4930),s=n(3448);let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(l.fC,{ref:t,className:(0,s.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-md",n),...r})});o.displayName=l.fC.displayName;let i=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(l.Ee,{ref:t,className:(0,s.cn)("aspect-square h-full w-full object-cover",n),...r})});i.displayName=l.Ee.displayName;let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(l.NY,{ref:t,className:(0,s.cn)("flex h-full w-full items-center justify-center rounded-md bg-[#EB786B] text-[#F5F5F5] text-sm",n),...r})});d.displayName=l.NY.displayName},2381:function(e,t,n){n.d(t,{z:function(){return d}});var a=n(7437),r=n(2265),l=n(7053),s=n(535),o=n(3448);let i=(0,s.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",transparent:"bg-transparent hover:bg-accent/10 text-accent"},size:{default:"h-10 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10",iconSm:"h-8 w-8"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:n,variant:r,size:s,asChild:d=!1,...u}=e,c=d?l.g7:"button";return(0,a.jsx)(c,{className:(0,o.cn)(i({variant:r,size:s,className:n})),ref:t,...u})});d.displayName="Button"},4291:function(e,t,n){n.d(t,{$N:function(){return p},Be:function(){return g},GG:function(){return c},Vq:function(){return i},cN:function(){return h},cZ:function(){return f},fK:function(){return x},hg:function(){return d}});var a=n(7437),r=n(2265),l=n(9027),s=n(2489),o=n(3448);let i=l.fC,d=l.xz,u=l.h_,c=l.x8,m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(l.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",n),...r})});m.displayName=l.aV.displayName;let f=r.forwardRef((e,t)=>{let{className:n,children:r,...i}=e;return(0,a.jsxs)(u,{children:[(0,a.jsx)(m,{}),(0,a.jsxs)(l.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",n),...i,children:[r,(0,a.jsxs)(l.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,a.jsx)(s.Z,{className:"h-4 w-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})});f.displayName=l.VY.displayName;let x=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",t),...n})};x.displayName="DialogHeader";let h=e=>{let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...n})};h.displayName="DialogFooter";let p=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(l.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",n),...r})});p.displayName=l.Dx.displayName;let g=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(l.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",n),...r})});g.displayName=l.dk.displayName},1488:function(e,t,n){n.d(t,{_v:function(){return u},aJ:function(){return d},pn:function(){return o},u:function(){return i}});var a=n(7437),r=n(2265),l=n(1677),s=n(3448);let o=l.zt,i=l.fC,d=l.xz,u=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...o}=e;return(0,a.jsx)(l.VY,{ref:t,sideOffset:r,className:(0,s.cn)("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...o})});u.displayName=l.VY.displayName},9279:function(e,t,n){n.d(t,{i:function(){return l}});var a=n(7266),r=n(1620);let l=e=>{let{workspaceId:t}=e,n=(0,a.aM)(r.h.members.currentMember,{workspaceId:t});return{data:n,isLoading:void 0===n}}},6046:function(e,t,n){n.d(t,{g:function(){return s}});var a=n(7266),r=n(2265),l=n(1620);let s=()=>{let[e,t]=(0,r.useState)(null),[n,s]=(0,r.useState)(null),[o,i]=(0,r.useState)(null),d=(0,r.useMemo)(()=>"pending"===o,[o]),u=(0,r.useMemo)(()=>"success"===o,[o]),c=(0,r.useMemo)(()=>"error"===o,[o]),m=(0,r.useMemo)(()=>"settled"===o,[o]),f=(0,a.Db)(l.h.messages.create);return{mutate:(0,r.useCallback)(async(e,n)=>{var a,r,l;try{t(null),s(null),i("pending");let r=await f(e);return null==n||null===(a=n.onSuccess)||void 0===a||a.call(n,r),r}catch(e){if(i("error"),null==n||null===(r=n.onError)||void 0===r||r.call(n,e),null==n?void 0:n.throwError)throw e}finally{i("settled"),null==n||null===(l=n.onSettled)||void 0===l||l.call(n)}},[f]),data:e,error:n,isPending:d,isSuccess:u,isError:c,isSettled:m}}},4749:function(e,t,n){n.d(t,{K:function(){return l}});var a=n(7266),r=n(1620);let l=e=>{let{channelId:t,conversationId:n,parentMessageId:l}=e,{results:s,status:o,loadMore:i}=(0,a.NE)(r.h.messages.get,{channelId:t,conversationId:n,parentMessageId:l},{initialNumItems:20});return{results:s,status:o,loadMore:()=>i(20)}}},9975:function(e,t,n){n.d(t,{u:function(){return s}});var a=n(7266),r=n(2265),l=n(1620);let s=()=>{let[e,t]=(0,r.useState)(null),[n,s]=(0,r.useState)(null),[o,i]=(0,r.useState)(null),d=(0,r.useMemo)(()=>"pending"===o,[o]),u=(0,r.useMemo)(()=>"success"===o,[o]),c=(0,r.useMemo)(()=>"error"===o,[o]),m=(0,r.useMemo)(()=>"settled"===o,[o]),f=(0,a.Db)(l.h.upload.generateUploadUrl);return{mutate:(0,r.useCallback)(async(e,n)=>{var a,r,l;try{t(null),s(null),i("pending");let e=await f();return null==n||null===(a=n.onSuccess)||void 0===a||a.call(n,e),e}catch(e){if(i("error"),null==n||null===(r=n.onError)||void 0===r||r.call(n,e),null==n?void 0:n.throwError)throw e}finally{i("settled"),null==n||null===(l=n.onSettled)||void 0===l||l.call(n)}},[f]),data:e,error:n,isPending:d,isSuccess:u,isError:c,isSettled:m}}},5863:function(e,t,n){n.d(t,{t:function(){return o}});var a=n(7437),r=n(2265),l=n(2381),s=n(4291);let o=(e,t)=>{let[n,o]=(0,r.useState)(null),i=()=>{o(null)},d=()=>{null==n||n.resolve(!1),i()},u=()=>{null==n||n.resolve(!0),i()};return[()=>(0,a.jsx)(s.Vq,{open:null!==n,onOpenChange:i,children:(0,a.jsxs)(s.cZ,{className:"p-0 bg-gray-50 overflow-hidden rounded-xl",children:[(0,a.jsx)(s.fK,{className:"p-4 border-b bg-gray-100",children:(0,a.jsx)(s.$N,{children:e})}),(0,a.jsxs)("div",{className:"px-4 pb-4 space-y-2",children:[(0,a.jsx)("p",{className:"text-sm text-gray-500",children:t}),(0,a.jsxs)(s.cN,{className:"gap-x-2",children:[(0,a.jsx)(l.z,{onClick:d,variant:"outline",className:"text-gray-700",children:"Cancel"}),(0,a.jsx)(l.z,{onClick:u,children:"Confirm"})]})]})]})}),()=>new Promise(e=>{o({resolve:e})})]}},6136:function(e,t,n){n.d(t,{u:function(){return s}});var a=n(457);let r=()=>(0,a.v1)("parentMessageId"),l=()=>(0,a.v1)("profileMemberId"),s=()=>{let[e,t]=r(),[n,a]=l();return{parentMessageId:e,profileMemberId:n,onOpenProfile:e=>{a(e),t(null)},onOpenMessage:e=>{t(e),a(null)},onClose:()=>{t(null),a(null)}}}},3106:function(e,t,n){n.d(t,{m:function(){return r}});var a=n(9376);let r=()=>(0,a.useParams)().workspaceId},3448:function(e,t,n){n.d(t,{cn:function(){return l}});var a=n(1994),r=n(3335);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.m6)((0,a.W)(t))}}}]);