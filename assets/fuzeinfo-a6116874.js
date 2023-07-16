import{K as j}from"./shout-592b029c.js";import{F as ee}from"./avatar-64db8248.js";import{d as I,r as R,g as C,H as Q,ah as L,t as Y,h as g,k as y,aj as te,a as z,ak as ne,b as k,j as le,ag as oe,v as ae,al as se,am as M,e as re,u as K,G as ie,an as ue,i as de,ao as ce,ap as fe,aq as me,ar as _e,as as he,at as be,au as pe,I as O,J as V,P as l,R as e,V as Z,T as D,a4 as ve,F as G,K as a,av as q,U as t,a8 as ge,aw as ye,S as we,Q as n,Z as xe,W as F}from"./index-f75098fd.js";import{N as Ne}from"./Progress-3bfd2329.js";import{N as $e}from"./Table-76e6c2a8.js";import{_ as Ee}from"./P5.vue_vue_type_script_setup_true_lang-adeeb020.js";import{C as Fe}from"./ChatHistory-42b9d480.js";import{g as ke}from"./attribute-2ee9e579.js";import{N as ze}from"./headers-83e04215.js";import{N as W}from"./Alert-2812d20d.js";import{a as Se}from"./Image-210a4851.js";import{N as B}from"./li-ee85f465.js";import{N}from"./blockquote-1367916a.js";import{N as Re}from"./Thing-0b9eb8c5.js";import{N as P}from"./Divider-8bf4c709.js";import{N as Be}from"./Scrollbar-5c070a6a.js";import{N as Ce}from"./text-bf23348c.js";import{b as X}from"./route-block-83d24a4e.js";import"./format-length-c9d165c6.js";import"./Avatar-8bb7c913.js";import"./utils-d45355ec.js";import"./Tag-59767f67.js";import"./Space-694234ca.js";import"./get-slot-1efb97e5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./use-locale-bb61a810.js";import"./kebabCase-1b38c014.js";import"./Tooltip-3c68f5d7.js";import"./cssr-05e17a4c.js";import"./on-fonts-ready-d6f1a91e.js";import"./use-merged-state-b10dd123.js";import"./use-compitable-46158255.js";const H=I({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(o){const h=R(null),m=R(o.value),p=R(o.value),d=R("up"),i=R(!1),w=C(()=>i.value?`${o.clsPrefix}-base-slot-machine-current-number--${d.value}-scroll`:null),s=C(()=>i.value?`${o.clsPrefix}-base-slot-machine-old-number--${d.value}-scroll`:null);Q(Y(o,"value"),(r,c)=>{m.value=c,p.value=r,L(v)});function v(){const r=o.newOriginalNumber,c=o.oldOriginalNumber;c===void 0||r===void 0||(r>c?_("up"):c>r&&_("down"))}function _(r){d.value=r,i.value=!1,L(()=>{var c;(c=h.value)===null||c===void 0||c.offsetWidth,i.value=!0})}return()=>{const{clsPrefix:r}=o;return g("span",{ref:h,class:`${r}-base-slot-machine-number`},m.value!==null?g("span",{class:[`${r}-base-slot-machine-old-number ${r}-base-slot-machine-old-number--top`,s.value]},m.value):null,g("span",{class:[`${r}-base-slot-machine-current-number`,w.value]},g("span",{ref:"numberWrapper",class:[`${r}-base-slot-machine-current-number__inner`,typeof o.value!="number"&&`${r}-base-slot-machine-current-number__inner--not-number`]},p.value)),m.value!==null?g("span",{class:[`${r}-base-slot-machine-old-number ${r}-base-slot-machine-old-number--bottom`,s.value]},m.value):null)}}}),{cubicBezierEaseOut:U}=te;function Ue({duration:o=".2s"}={}){return[y("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${o} ${U},
 max-width ${o} ${U},
 transform ${o} ${U}
 `}),y("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${o} ${U},
 max-width ${o} ${U},
 transform ${o} ${U}
 `}),y("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),y("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),y("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),y("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Ze=y([y("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),y("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),y("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),y("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),z("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[z("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[Ue({duration:".2s"}),ne({duration:".2s",delay:"0s"}),z("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[k("top",{transform:"translateY(-100%)"}),k("bottom",{transform:"translateY(100%)"}),k("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),k("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),z("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[k("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),k("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),le("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[k("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Te=I({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(o){oe("-base-slot-machine",Ze,Y(o,"clsPrefix"));const h=R(),m=R(),p=C(()=>{if(typeof o.value=="string")return[];if(o.value<1)return[0];const d=[];let i=o.value;for(o.max!==void 0&&(i=Math.min(o.max,i));i>=1;)d.push(i%10),i/=10,i=Math.floor(i);return d.reverse(),d});return Q(Y(o,"value"),(d,i)=>{typeof d=="string"?(m.value=void 0,h.value=void 0):typeof i=="string"?(m.value=d,h.value=void 0):(m.value=d,h.value=i)}),()=>{const{value:d,clsPrefix:i}=o;return typeof d=="number"?g("span",{class:`${i}-base-slot-machine`},g(se,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>p.value.map((w,s)=>g(H,{clsPrefix:i,key:p.value.length-s-1,oldOriginalNumber:h.value,newOriginalNumber:m.value,value:w}))}),g(ae,{key:"+",width:!0},{default:()=>o.max!==void 0&&o.max<d?g(H,{clsPrefix:i,value:"+"}):null})):g("span",{class:`${i}-base-slot-machine`},d)}}}),Ae=y([y("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),z("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[k("as-is",[z("badge-sup",{position:"static",transform:"translateX(0)"},[M({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),k("dot",[z("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[y("::before","border-radius: 4px;")])]),z("badge-sup",`
 background: var(--n-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: #FFF;
 position: absolute;
 height: 18px;
 line-height: 18px;
 border-radius: 9px;
 padding: 0 6px;
 text-align: center;
 font-size: var(--n-font-size);
 transform: translateX(-50%);
 left: 100%;
 bottom: calc(100% - 9px);
 font-variant-numeric: tabular-nums;
 z-index: 1;
 display: flex;
 align-items: center;
 `,[M({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),z("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),y("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Oe=Object.assign(Object.assign({},K.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),Ie=I({name:"Badge",props:Oe,setup(o,{slots:h}){const{mergedClsPrefixRef:m,inlineThemeDisabled:p,mergedRtlRef:d}=re(o),i=K("Badge","-badge",Ae,_e,o,m),w=R(!1),s=()=>{w.value=!0},v=()=>{w.value=!1},_=C(()=>o.show&&(o.dot||o.value!==void 0&&!(!o.showZero&&Number(o.value)<=0)||!he(h.value)));ie(()=>{_.value&&(w.value=!0)});const r=ue("Badge",d,m),c=C(()=>{const{type:$,color:x}=o,{common:{cubicBezierEaseInOut:u,cubicBezierEaseOut:f},self:{[be("color",$)]:E,fontFamily:T,fontSize:A}}=i.value;return{"--n-font-size":A,"--n-font-family":T,"--n-color":x||E,"--n-ripple-color":x||E,"--n-bezier":u,"--n-ripple-bezier":f}}),b=p?de("badge",C(()=>{let $="";const{type:x,color:u}=o;return x&&($+=x[0]),u&&($+=pe(u)),$}),c,o):void 0,S=C(()=>{const{offset:$}=o;if(!$)return;const[x,u]=$,f=typeof x=="number"?`${x}px`:x,E=typeof u=="number"?`${u}px`:u;return{transform:`translate(calc(${r!=null&&r.value?"50%":"-50%"} + ${f}), ${E})`}});return{rtlEnabled:r,mergedClsPrefix:m,appeared:w,showBadge:_,handleAfterEnter:s,handleAfterLeave:v,cssVars:p?void 0:c,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender,offsetStyle:S}},render(){var o;const{mergedClsPrefix:h,onRender:m,themeClass:p,$slots:d}=this;m==null||m();const i=(o=d.default)===null||o===void 0?void 0:o.call(d);return g("div",{class:[`${h}-badge`,this.rtlEnabled&&`${h}-badge--rtl`,p,{[`${h}-badge--dot`]:this.dot,[`${h}-badge--as-is`]:!i}],style:this.cssVars},i,g(ce,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${h}-badge-sup`,title:ke(this.value),style:this.offsetStyle},fe(d.value,()=>[this.dot?null:g(Te,{clsPrefix:h,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(me,{clsPrefix:h}):null):null}))}}),Pe=""+new URL("venti-2a3f1fe5.png",import.meta.url).href,Ye=""+new URL("fuze-37099f41.mp4",import.meta.url).href,De={colspan:"2",style:{"text-align":"center","word-wrap":"break-word"}},Le=e("tr",null,[e("th",null,"时间"),e("th",null,"事件")],-1),Me=I({__name:"Timetable",props:{content:{}},setup(o){const h=o,m=i=>{const[w,s]=i;function v(_){const[r,c,b]=_;return`${r}:${c===0?"00":c}${b>0?`:${b}`:""}`}return`${v(w)} - ${v(s)}`},p=()=>{const i=new Date;return[i.getHours(),i.getMinutes(),i.getSeconds()]},d=()=>h.content.find(i=>q(p(),i[0]));return(i,w)=>(O(),V(a($e),null,{default:l(()=>{var s,v;return[e("thead",null,[e("tr",null,[e("th",De,[e("strong",null,Z(m(((s=d())==null?void 0:s[0])??[[11,45,14],[19,19,810]]))+" : "+Z(((v=d())==null?void 0:v[1])??"贰柒柒叁伍叁"),1)])]),Le]),e("tbody",null,[(O(!0),D(G,null,ve(h.content,([_,r],c)=>(O(),D("tr",{key:c},[e("td",null,Z(m(_)),1),e("td",null,[t(Z(r)+" ",1),a(q)(p(),_)?(O(),V(a(Ne),{key:0,percentage:100,"show-indicator":!1,processing:""})):ge("",!0)])]))),128))])]}),_:1}))}}),Ve=e("br",null,null,-1),qe=e("br",null,null,-1),We=e("mark",null,"Fuze",-1),Xe=e("strong",null,"七一路",-1),He=e("br",null,null,-1),Qe=e("u",null,[e("strong",null,"LONG LIVE FUZELAND!")],-1),Ke=e("s",null,[t(" 亻寸氵睾他失联了 很久很久 我们不知道他咋了还有他哪儿去了以及他为什么走 临走前只说了三两句话"),e("small",null,"(见文件1-5)"),e("br"),t(" 他刚走的差不多一两周 他的原神和QQ都是一直离线状态 而过了这之后他就突然天天在线了 QQ也是 "),e("br"),t(' 我以为他已经回来了 但诡异的是无论我发什么他都不吭一声 他唯一一次说话是我们给他打了个语音通话 他回复了"?" 此后便无响应了 '),e("br"),t(" 没准他遇到了啥事 让他彻彻底底地改变了 亦或啥别的客观因素导致 ")],-1),Ge=e("br",null,null,-1),Je=e("mark",null," 已破案 根本无事发生 仅是旧计重施与我们断联 其寒假(2022-2023)仍与乐联保持联系 并且在原神充值完毕后弃坑 顶着温迪头像向乐联成员珊瑚宫心海索要王者荣耀账号 其农批本质复发 故情理之中 但平日无音讯 推测是上了烂学校(罪有应得) ",-1),je=e("br",null,null,-1),et=e("strong",null,"Discord",-1),tt=e("em",null,'"u r a weird guy who kept saying the word "fuze"!"(你是个大聪明)',-1),nt=e("span",{class:"spoiler"},"(震声)",-1),lt=e("small",null,"(经常在宣传的后面)",-1),ot=e("strong",null,"强下定义",-1),at=e("s",null,"那个大聪明一样",-1),st=e("strong",null,"下 定 义",-1),rt=e("small",null,"define",-1),it=e("br",null,null,-1),ut=e("br",null,null,-1),dt=e("strong",null,"好朋友!",-1),ct=e("em",null,"dei!",-1),ft=e("br",null,null,-1),mt=e("small",null,"疯子别看了!",-1),_t=e("br",null,null,-1),ht=e("br",null,null,-1),bt=e("small",null,'"1...2...3......"',-1),pt=e("br",null,null,-1),vt=e("br",null,null,-1),gt=e("i",null,[e("small",null,"连密码都随便说的 真是愚蠢的FUZE啊")],-1),yt=e("br",null,null,-1),wt=e("h3",null,[t(" ? "),e("br"),t(" 说什么呢 "),e("br"),t(" 什么密码 "),e("br"),t(" ??? "),e("br"),t(" 人呢 "),e("br"),t(" 我草彳亍 "),e("br"),t(" 下定义是吧 "),e("br"),t(" 没尊严了 "),e("br")],-1),xt=e("br",null,null,-1),Nt=e("br",null,null,-1),$t=e("br",null,null,-1),Et=e("br",null,null,-1),Ft=e("br",null,null,-1),kt=e("br",null,null,-1),zt=e("strong",null,"因为可莉很刑啊",-1),St=e("br",null,null,-1),Rt=e("br",null,null,-1),Bt=e("br",null,null,-1),Ct=e("strong",null,"是因为四风原典没人用 我才抽可莉",-1),Ut=e("br",null,null,-1),Zt=e("i",null,"数学课上 小伙坐在班级的左前方靠墙 看起来神志不清",-1),Tt=e("br",null,null,-1),At=e("i",null,"老师在黑板上写下了一个分式",-1),Ot=e("br",null,null,-1),It=e("br",null,null,-1),Pt=e("br",null,null,-1),Yt=e("br",null,null,-1),Dt=e("br",null,null,-1),Lt=e("strong",null,"每天的睡眠一定要保证啊!",-1),Mt=e("br",null,null,-1),Vt=e("br",null,null,-1),qt=e("br",null,null,-1),Wt=e("br",null,null,-1),Xt=e("br",null,null,-1),Ht=e("br",null,null,-1),Qt=e("br",null,null,-1),Kt=e("i",null,[e("strong",null,"讲着讲着误开摄像头")],-1),Gt=e("br",null,null,-1),Jt=e("br",null,null,-1),jt=e("br",null,null,-1),en=e("br",null,null,-1),tn=e("br",null,null,-1),nn=e("br",null,null,-1),ln=e("br",null,null,-1),on=e("br",null,null,-1),an=e("br",null,null,-1),sn=e("br",null,null,-1),rn=e("br",null,null,-1),un=e("br",null,null,-1),dn=e("i",null,[e("small",null,"[转换完成 文件1-4-1]")],-1),cn=e("br",null,null,-1),fn=e("br",null,null,-1),mn=e("i",null,[e("small",null,"[转换完成 文件1-4-2]")],-1),_n=e("br",null,null,-1),hn=e("br",null,null,-1),bn=e("i",null,[e("small",null,"[转换完成 文件1-4-3]")],-1),pn=e("br",null,null,-1),vn=e("i",null,[e("small",null,"[转换完成 文件1-4-4]")],-1),gn=e("br",null,null,-1),yn=e("br",null,null,-1),wn=e("br",null,null,-1),xn=e("br",null,null,-1),Nn=e("i",null,[e("small",null,"[2022/07/16 16:25]")],-1),$n=e("s",null,"EOF",-1),En=e("br",null,null,-1),Fn=e("strong",null,"EOF",-1),kn=e("br",null,null,-1),zn=e("mark",null,"付块",-1),Sn=e("strong",null,"非",-1),Rn=e("s",null,"游!",-1),Bn=["src"],Cn=I({__name:"fuzeinfo",setup(o){const h=ye(),m=s=>{var v=20,_=0,r,c,b,S;s.setup=()=>{s.createCanvas(720,400),s.frameRate(1),r=s.floor(s.width/v),c=s.floor(s.height/v),b=new Array(r),S=new Array(r);for(var u=0;u<r;u++)b[u]=new Array(c),S[u]=new Array(c);$()};function $(){_=0;for(var u=0;u<r;u++)for(var f=0;f<c;f++)b[u][f]=u==0||f==0||u==r-1||f==c-1?0:s.floor(s.random(2)),S[u][f]=0}function x(){_++;for(var u=1;u<r-1;u++)for(var f=1;f<c-1;f++){for(var E=0,T=-1;T<=1;T++)for(var A=-1;A<=1;A++)E+=b[u+T][f+A];E-=b[u][f],S[u][f]=b[u][f]==1&&E<2||b[u][f]==1&&E>3?0:b[u][f]==0&&E==3?1:b[u][f]}var J=b;b=S,S=J}s.draw=()=>{s.background(255),x();for(var u=0;u<r;u++)for(var f=0;f<c;f++)s.fill(b[u][f]==1?0:255),s.stroke(0),s.rect(u*v,f*v,v-1,v-1);s.fill(0,255,255),s.noStroke(),s.textStyle("bold"),s.textSize(26),s.text(`FUZE${_}年`,15,45)}},p=s=>({avatar:[Pe],username:"亻寸氵睾",content:s}),d=s=>({avatar:[j],username:"珊瑚宫心海",content:s}),i=s=>({type:"system",content:g(Ce,{code:!0},{default:()=>s})}),w=[p("好队友"),p("为了锻炼你随机应变的能力"),p("不惜让自己肚子疼"),d("这是我们班主任"),d("😅"),p("?"),d("离谱吧"),p("这操作挺骚"),d("👍"),i("2023年 1月12日 下午17:14"),p("有王者多余的号吗"),d("没有"),p("[颓废]")];return(s,v)=>{const _=we("spoiler");return O(),D(G,null,[n(a(Ie),{value:"失联(已解明)",type:"info"},{default:l(()=>[n(a(ze),null,{default:l(()=>[t(Z(s.$texta.get(["menus","jokes","fuze"])),1)]),_:1})]),_:1}),Ve,n(a(W),{type:"warning",title:"此页面不再更新"}),qe,n(a(Re),null,{avatar:l(()=>[n(a(Se),{width:"100",src:a(ee)},null,8,["src"])]),header:l(()=>[We,t(" (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...) ")]),description:l(()=>[t(" qilu furniture city (齐鲁家具城) "),n(_,null,{default:l(()=>[Xe,t(" 家具城 ")]),_:1}),t(" , fuzeland (付兰) "),n(_,null,{default:l(()=>[t("付兰永存!")]),_:1}),He,Qe,n(_,null,{default:l(()=>[t("*btw")]),_:1})]),footer:l(()=>[n(a(xe),{onClick:v[0]||(v[0]=r=>a(h).push("/jokes/fuzeblockisnotagame"))},{default:l(()=>[zn,Sn,Rn]),_:1})]),default:l(()=>[n(a(W),{type:"error","show-icon":!1},{default:l(()=>[Ke,Ge,Je]),_:1}),je,t(" 114514岁, 是带哲学家, 曾在 "),et,t(" 上大肆蛊惑式宣传自己的事迹 "),n(_,null,{default:l(()=>[t("(当 代 希 特 勒)")]),_:1}),t(" , 最常见的一句话为 "),tt,nt,t(" , "),lt,t(" 用来 "),ot,t(" , 打别人个措手不及, 营造一种莫名其妙但好像真的是 "),at,t(" 这种手段被称为—————— "),st,n(_,null,{default:l(()=>[t("万 恶 之 源")]),_:1}),t(" ( "),rt,t(" ) "),it,t(' 因头型酷似馒头而得其名, 后又因帝国首领与他磕到嘴并张着大门牙而得名"松鼠", 其母亲亦称其为"懒猫" '),ut,n(a(B),null,{default:l(()=>[t('"Fuze, 你没尊严!"')]),_:1}),n(a(B),null,{default:l(()=>[t('"Fuze, 我们请你吃苹果🍎!"')]),_:1}),n(a(B),null,{default:l(()=>[t('"Fuze, 你没穿衣服!"')]),_:1}),n(a(B),null,{default:l(()=>[t(' "Fuze, 你臃肿!" '),n(_,null,{default:l(()=>[t("实 话 实 说")]),_:1})]),_:1}),n(a(B),null,{default:l(()=>[t('"Fuze, 你无能狂怒!"')]),_:1}),n(a(B),null,{default:l(()=>[t(' "Fuze, 我们是你的 '),dt,t(' " '),n(_,null,{default:l(()=>[t("最 好 的 朋 友")]),_:1})]),_:1}),n(a(B),null,{default:l(()=>[t(' " '),ct,t(' Fuze, 说普通话!" ')]),_:1}),ft,n(a(F),{title:"文件一"},{default:l(()=>[t(" 自我认知: 别看疯子了! (主客颠倒 应该是"),mt,t(") "),_t,t(' (回头) "疯子!" (微微回头) "疯子!" (不回头) "疯子! 叫你呢疯子!" [对着空气大喊疯子] '),ht,t(' "FUZE 咱们现在说哪段呢?" "额" '),bt,t(' "我女儿都会数数了..." '),pt,vt,gt,yt,wt]),_:1}),xt,n(a(F),{title:"文件二"},{default:l(()=>[t(" 通宵到第二天五点 开始睡觉 六点起床上学 "),n(a(N),null,{default:l(()=>[e("i",null,"05:"+Z(new Date().getMinutes()<10?`0${new Date().getMinutes()}`:new Date().getMinutes()),1),Nt,t(" 哈 "),$t,t(" 哈~~ "),Et,t(" 哈~~~ "),Ft,t(" [图片: 可莉] ")]),_:1}),t(" FUZE肝到了第二天早上五点 终于抽出了他心爱的可莉 "),n(a(N),null,{default:l(()=>[t(' "你为什么这么喜欢可莉?" '),kt,t(' "'),zt,t('" [怪强调略显猥琐] '),St,t(' "... 萝莉控" ')]),_:1}),t(" FUZE给他的可莉装上了四风原典 "),n(a(N),null,{default:l(()=>[t(" [图片: 角色界面的武器栏 可莉托着四风原典 张着口] "),Rt,Bt,Ct,t(),Ut,t(" 反正我不觉得原因这么简单 ")]),_:1}),t(' "蹦蹦炸弹 (╯‵□′)╯炸弹！•••*～● 火力全开~" '),n(a(N),null,{default:l(()=>[Zt,Tt,At,t(),Ot,t(' "叫一下人来回答这个问题" "FUZE" '),It,t(" FUZE猛地站起来 一脸迷茫 不知所措 "),Pt,t(" 气氛凝结了 王红利拿着书在讲台上看着FUZE FUZE也彷徨地看着她 "),Yt,t(" ...... "),Dt,Lt]),_:1}),t(" 又过了不知多久 似乎以月为单位计量 "),n(a(N),null,{default:l(()=>[t(' "诶呀 废物可莉 '),Mt,t(' 可莉就是个废物" ')]),_:1}),t(" 唉, 喜新厌旧的萝莉控FUZE 可莉被抛弃了 真悲哀啊可莉 ")]),_:1}),Vt,n(a(F),{title:"文件三"},{default:l(()=>[t(" 好几个小时的JOJO授课 "),n(a(N),null,{default:l(()=>[t(' "人终究是要上天堂的!" '),qt,t(' "MADE IN HEAVEN!" '),Wt,t(' "大总统...平行世界...湮灭" '),Xt,t(' "半人马身上有时钟" '),Ht,t(' "出车祸...监狱...替身" '),Qt,Kt,Gt,t(" ...... ")]),_:1}),t(" 日常语音 "),n(a(N),null,{default:l(()=>[t(' "能听到吗?" "喂" "喂" "喂" '),Jt,t(' "有.点.笨.电.脑-" '),jt,t(' "除你语音!" [语音通话已结束] ')]),_:1})]),_:1}),en,n(a(F),{title:"文件四"},{default:l(()=>[t(" 父亲 "),n(a(N),null,{default:l(()=>[t(" 谁和FUZE在一起? "),tn,t(" 告诉FUZE, 他爸爸回来了 "),nn,t(" @全体成员 "),ln,t(" 谁和FUZE在一起? "),on,t(" 告诉FUZE, 他爸爸回来了 "),an,t(" @全体成员 "),sn,t(" ...... "),rn,t(" FUZE回来了 ")]),_:1}),t(" 作文解释 "),n(a(N),null,{default:l(()=>[t(" 我的宝贝儿啊，我的天，你 看他的卷子你都没看明白它 写的是什么，他写的是跟妈 妈生气了，摔门而出，完了 之后妈妈并没有出来追她之 后呢，她在路上看到了一个 抱着孩子的妇女，那个女人 身上的衣服很单薄，因为他 把衣服给她怀里的孩子穿上 了，所以。他觉得他其实想 写的就是那个女的，宁可自 己冻着，完了以后饿着他也 不能让自己的孩子受委屈， 完了以后说那个女的病了， 完了之后说打120并没有说 到我，完了之后，他看到这 豆儿啊，这个母亲抱着这个 孩子。他讲很受感动，他觉 得这就是母爱的伟大呀，完 了以后他就决定回家找我， 这是他那个故事，整个笨看 半天都没看懂。 "),un,dn,cn,t(" 这个主要是怪他那课外班的 语文老师，完了以后有一次 就是说写作文L就跟他说写 好不写坏就是写你写这个人 好看，你不写这个人丑这句 话能听明白吗?也就是说你 写跟你妈关系好，你倒不如 写，跟你妈关系不好，得分 更高，所以误导这个孩子 啦，我的天呐。 "),fn,mn,_n,t(" 他写作文儿写和我吵架，证 明我们两个人不吵架，也就 是说他写作文写和我吵架 儿，我不生气，如果他写作 文写和别人吵架，比如说和 他爸爸吵架，他可能就不敢 让他爸爸知道，或者他爸爸 看到了可能会跟他生气，明 白了吗?也就是说因为跟我 关系好，所以他可以随便 说。 "),hn,bn]),_:1}),t(" 新称号 "),n(a(N),null,{default:l(()=>[t(" 为什么像松鼠呢?我感觉他 像一只猫，尤其是性格非常 像一只猫，懒懒的往那一 躺，完了之后呢，还馋不爱 吃好吃的，比如说汉堡啊披 萨呀，完了之后小鸡腿儿 啊。整天吃好吃的，因为猫 有两个特别的喜庆，一个是 懒，一个是X1说就是懒猫或 者馋猫，没有听说谁说长狗 或者是懒狗，没有吧，基本 上都是懒猫或者是馋猫，所 以FUZE非常符合这两遍。 "),pn,vn]),_:1})]),_:1}),gn,n(a(F),{title:"文件五"},{default:l(()=>[n(a(N),null,{default:l(()=>[t(" [:转圈圈:] "),yn,t(" 去世了 "),wn,t(" 随机一天复活 "),xn,Nn]),_:1}),$n,n(_,null,{default:l(()=>[t("若你是故意走的 那就滚吧 我们不是柯莱卢基托")]),_:1})]),_:1}),En,n(a(F),{title:"文件六"},{default:l(()=>[n(Fe,{msgs:w}),Fn]),_:1}),kn]),_:1}),n(a(P)),n(a(F),null,{default:l(()=>[e("video",{style:{"max-width":"100%"},src:a(Ye),controls:"",muted:"",loop:""},null,8,Bn)]),_:1}),n(a(P)),n(a(F),{title:"BILIBILI"},{default:l(()=>[e("iframe",{width:"100%",height:"375px",src:"https://space.bilibili.com/1078829483",frameborder:"0",allowfullscreen:"false",allowpaymentrequest:"",referrerpolicy:"origin",onError:v[1]||(v[1]=r=>r.preventDefault())},null,32)]),_:1}),n(a(P)),n(a(F),{title:"生命周期"},{default:l(()=>[n(a(Be),{"x-scrollable":""},{default:l(()=>[n(Me,{content:[[[[6,0,0],[7,30,0]],"晨练"],[[[7,30,0],[8,0,0]],"吃早饭"],[[[8,0,0],[10,0,0]],"完成部分作业"],[[[10,0,0],[10,30,0]],"自由活动"],[[[10,30,0],[11,0,0]],"预习物理八上"],[[[11,0,0],[12,0,0]],"完成部分作业"],[[[12,0,0],[14,0,0]],"吃饭、午休"],[[[14,0,0],[16,0,0]],"完成部分作业"],[[[16,0,0],[17,0,0]],"英语听力"],[[[17,0,0],[18,0,0]],"预习数学"],[[[18,0,0],[19,0,0]],"吃饭"],[[[19,0,0],[19,30,0]],"观看新闻、《话说长江》"],[[[19,30,0],[21,30,0]],"预习八上生物、历史、地理、政治"],[[[21,30,0],[22,30,0]],"语文阅读"],[[[22,30,0],[6,0,0]],"睡觉"]]})]),_:1})]),_:1}),n(a(F),{title:"FUZE维度"},{default:l(()=>[n(Ee,{sketch:m})]),_:1})],64)}}});typeof X=="function"&&X(Cn);export{Cn as default};
