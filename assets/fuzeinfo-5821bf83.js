import{F as J}from"./avatar-64db8248.js";import{d as T,r as k,g as R,E as W,ae as D,t as I,h as g,k as y,ag as K,a as z,ah as j,b as F,j as ee,ac as te,v as ne,ai as le,aj as Y,e as oe,u as X,D as ae,ak as se,i as re,al as ie,am as ue,an as de,ao as ce,ap as fe,aq as me,ar as _e,G as Z,H as L,P as a,R as e,U,S as P,a3 as he,F as H,I as s,as as M,T as t,a8 as be,Q as l,Z as pe,V as E,at as ve,W as ge}from"./index-1bc82fee.js";import{N as ye}from"./Progress-40b3dd45.js";import{N as we}from"./Table-5f27f4f0.js";import{_ as xe}from"./P5.vue_vue_type_script_setup_true_lang-8763f278.js";import{g as Ne}from"./attribute-2ee9e579.js";import{N as $e}from"./headers-d90fb6ae.js";import{a as Ee}from"./Image-1a66f47b.js";import{N as Fe}from"./Alert-1fa07eeb.js";import{N as S}from"./li-a47abc7e.js";import{N as $}from"./blockquote-12af9acd.js";import{N as ze}from"./Thing-b3e4b12d.js";import{N as A}from"./Divider-08db8db2.js";import{N as ke}from"./Scrollbar-9f057ef9.js";import{b as V}from"./route-block-83d24a4e.js";import"./format-length-c9d165c6.js";import"./utils-e73fc908.js";import"./use-locale-a1f702ae.js";import"./Tooltip-4c4cec56.js";import"./cssr-557a85a4.js";import"./on-fonts-ready-20a9b6f4.js";import"./use-merged-state-2b286add.js";import"./use-compitable-861f592d.js";const q=T({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(o){const _=k(null),c=k(o.value),u=k(o.value),r=k("up"),n=k(!1),f=R(()=>n.value?`${o.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),b=R(()=>n.value?`${o.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);W(I(o,"value"),(d,p)=>{c.value=p,u.value=d,D(h)});function h(){const d=o.newOriginalNumber,p=o.oldOriginalNumber;p===void 0||d===void 0||(d>p?v("up"):p>d&&v("down"))}function v(d){r.value=d,n.value=!1,D(()=>{var p;(p=_.value)===null||p===void 0||p.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:d}=o;return g("span",{ref:_,class:`${d}-base-slot-machine-number`},c.value!==null?g("span",{class:[`${d}-base-slot-machine-old-number ${d}-base-slot-machine-old-number--top`,b.value]},c.value):null,g("span",{class:[`${d}-base-slot-machine-current-number`,f.value]},g("span",{ref:"numberWrapper",class:[`${d}-base-slot-machine-current-number__inner`,typeof o.value!="number"&&`${d}-base-slot-machine-current-number__inner--not-number`]},u.value)),c.value!==null?g("span",{class:[`${d}-base-slot-machine-old-number ${d}-base-slot-machine-old-number--bottom`,b.value]},c.value):null)}}}),{cubicBezierEaseOut:B}=K;function Se({duration:o=".2s"}={}){return[y("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${o} ${B},
 max-width ${o} ${B},
 transform ${o} ${B}
 `}),y("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${o} ${B},
 max-width ${o} ${B},
 transform ${o} ${B}
 `}),y("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),y("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),y("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),y("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Re=y([y("@keyframes n-base-slot-machine-fade-up-in",`
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
 `,[Se({duration:".2s"}),j({duration:".2s",delay:"0s"}),z("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[F("top",{transform:"translateY(-100%)"}),F("bottom",{transform:"translateY(100%)"}),F("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),F("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),z("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[F("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),F("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),ee("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[F("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Be=T({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(o){te("-base-slot-machine",Re,I(o,"clsPrefix"));const _=k(),c=k(),u=R(()=>{if(typeof o.value=="string")return[];if(o.value<1)return[0];const r=[];let n=o.value;for(o.max!==void 0&&(n=Math.min(o.max,n));n>=1;)r.push(n%10),n/=10,n=Math.floor(n);return r.reverse(),r});return W(I(o,"value"),(r,n)=>{typeof r=="string"?(c.value=void 0,_.value=void 0):typeof n=="string"?(c.value=r,_.value=void 0):(c.value=r,_.value=n)}),()=>{const{value:r,clsPrefix:n}=o;return typeof r=="number"?g("span",{class:`${n}-base-slot-machine`},g(le,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>u.value.map((f,b)=>g(q,{clsPrefix:n,key:u.value.length-b-1,oldOriginalNumber:_.value,newOriginalNumber:c.value,value:f}))}),g(ne,{key:"+",width:!0},{default:()=>o.max!==void 0&&o.max<r?g(q,{clsPrefix:n,value:"+"}):null})):g("span",{class:`${n}-base-slot-machine`},r)}}}),Ue=y([y("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),z("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[F("as-is",[z("badge-sup",{position:"static",transform:"translateX(0)"},[Y({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),F("dot",[z("badge-sup",`
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
 `,[Y({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),z("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),y("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ce=Object.assign(Object.assign({},X.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),Ze=T({name:"Badge",props:Ce,setup(o,{slots:_}){const{mergedClsPrefixRef:c,inlineThemeDisabled:u,mergedRtlRef:r}=oe(o),n=X("Badge","-badge",Ue,ce,o,c),f=k(!1),b=()=>{f.value=!0},h=()=>{f.value=!1},v=R(()=>o.show&&(o.dot||o.value!==void 0&&!(!o.showZero&&o.value<=0)||!fe(_.value)));ae(()=>{v.value&&(f.value=!0)});const d=se("Badge",r,c),p=R(()=>{const{type:w,color:x}=o,{common:{cubicBezierEaseInOut:N,cubicBezierEaseOut:C},self:{[me("color",w)]:O,fontFamily:Q,fontSize:G}}=n.value;return{"--n-font-size":G,"--n-font-family":Q,"--n-color":x||O,"--n-ripple-color":x||O,"--n-bezier":N,"--n-ripple-bezier":C}}),i=u?re("badge",R(()=>{let w="";const{type:x,color:N}=o;return x&&(w+=x[0]),N&&(w+=_e(N)),w}),p,o):void 0,m=R(()=>{const{offset:w}=o;if(!w)return;const[x,N]=w,C=typeof x=="number"?`${x}px`:x,O=typeof N=="number"?`${N}px`:N;return{transform:`translate(calc(${d!=null&&d.value?"50%":"-50%"} + ${C}), ${O})`}});return{rtlEnabled:d,mergedClsPrefix:c,appeared:f,showBadge:v,handleAfterEnter:b,handleAfterLeave:h,cssVars:u?void 0:p,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender,offsetStyle:m}},render(){var o;const{mergedClsPrefix:_,onRender:c,themeClass:u,$slots:r}=this;c==null||c();const n=(o=r.default)===null||o===void 0?void 0:o.call(r);return g("div",{class:[`${_}-badge`,this.rtlEnabled&&`${_}-badge--rtl`,u,{[`${_}-badge--dot`]:this.dot,[`${_}-badge--as-is`]:!n}],style:this.cssVars},n,g(ie,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${_}-badge-sup`,title:Ne(this.value),style:this.offsetStyle},ue(r.value,()=>[this.dot?null:g(Be,{clsPrefix:_,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(de,{clsPrefix:_}):null):null}))}}),Te=""+new URL("fuze-37099f41.mp4",import.meta.url).href,Oe={colspan:"2",style:{"text-align":"center","word-wrap":"break-word"}},Ae=e("tr",null,[e("th",null,"时间"),e("th",null,"事件")],-1),Ie=T({__name:"Timetable",props:{content:null},setup(o){const _=o,c=n=>{const[f,b]=n;function h(v){const[d,p,i]=v;return`${d}:${p===0?"00":p}${i>0?`:${i}`:""}`}return`${h(f)} - ${h(b)}`},u=()=>{const n=new Date;return[n.getHours(),n.getMinutes(),n.getSeconds()]},r=()=>_.content.find(n=>M(u(),n[0]));return(n,f)=>(Z(),L(s(we),null,{default:a(()=>{var b,h;return[e("thead",null,[e("tr",null,[e("th",Oe,[e("strong",null,U(c(((b=r())==null?void 0:b[0])??[[11,45,14],[19,19,810]]))+" : "+U(((h=r())==null?void 0:h[1])??"贰柒柒叁伍叁"),1)])]),Ae]),e("tbody",null,[(Z(!0),P(H,null,he(_.content,([v,d],p)=>(Z(),P("tr",{key:p},[e("td",null,U(c(v)),1),e("td",null,[t(U(d)+" ",1),s(M)(u(),v)?(Z(),L(s(ye),{key:0,percentage:100,"show-indicator":!1,processing:""})):be("",!0)])]))),128))])]}),_:1}))}}),Pe=e("mark",null,"Fuze",-1),De=e("strong",null,"七一路",-1),Ye=e("br",null,null,-1),Le=e("u",null,[e("strong",null,"LONG LIVE FUZELAND!")],-1),Me=e("small",null,"(见文件1-5)",-1),Ve=e("br",null,null,-1),qe=e("br",null,null,-1),We=e("br",null,null,-1),Xe=e("br",null,null,-1),He=e("strong",null,"Discord",-1),Qe=e("em",null,'"u r a weird guy who kept saying the word "fuze"!"(你是个大聪明)',-1),Ge=e("span",{class:"spoiler"},"(震声)",-1),Je=e("small",null,"(经常在宣传的后面)",-1),Ke=e("strong",null,"强下定义",-1),je=e("s",null,"那个大聪明一样",-1),et=e("strong",null,"下 定 义",-1),tt=e("small",null,"define",-1),nt=e("br",null,null,-1),lt=e("br",null,null,-1),ot=e("strong",null,"好朋友!",-1),at=e("em",null,"dei!",-1),st=e("br",null,null,-1),rt=e("small",null,"疯子别看了!",-1),it=e("br",null,null,-1),ut=e("br",null,null,-1),dt=e("small",null,'"1...2...3......"',-1),ct=e("br",null,null,-1),ft=e("br",null,null,-1),mt=e("i",null,[e("small",null,"连密码都随便说的 真是愚蠢的FUZE啊")],-1),_t=e("br",null,null,-1),ht=e("h3",null,[t(" ? "),e("br"),t(" 说什么呢 "),e("br"),t(" 什么密码 "),e("br"),t(" ??? "),e("br"),t(" 人呢 "),e("br"),t(" 我草彳亍 "),e("br"),t(" 下定义是吧 "),e("br"),t(" 没尊严了 "),e("br")],-1),bt=e("br",null,null,-1),pt=e("br",null,null,-1),vt=e("br",null,null,-1),gt=e("br",null,null,-1),yt=e("br",null,null,-1),wt=e("br",null,null,-1),xt=e("strong",null,"因为可莉很刑啊",-1),Nt=e("br",null,null,-1),$t=e("br",null,null,-1),Et=e("br",null,null,-1),Ft=e("strong",null,"是因为四风原典没人用 我才抽可莉",-1),zt=e("br",null,null,-1),kt=e("i",null,"数学课上 小伙坐在班级的左前方靠墙 看起来神志不清",-1),St=e("br",null,null,-1),Rt=e("i",null,"老师在黑板上写下了一个分式",-1),Bt=e("br",null,null,-1),Ut=e("br",null,null,-1),Ct=e("br",null,null,-1),Zt=e("br",null,null,-1),Tt=e("br",null,null,-1),Ot=e("strong",null,"每天的睡眠一定要保证啊!",-1),At=e("br",null,null,-1),It=e("br",null,null,-1),Pt=e("br",null,null,-1),Dt=e("br",null,null,-1),Yt=e("br",null,null,-1),Lt=e("br",null,null,-1),Mt=e("br",null,null,-1),Vt=e("i",null,[e("strong",null,"讲着讲着误开摄像头")],-1),qt=e("br",null,null,-1),Wt=e("br",null,null,-1),Xt=e("br",null,null,-1),Ht=e("br",null,null,-1),Qt=e("br",null,null,-1),Gt=e("br",null,null,-1),Jt=e("br",null,null,-1),Kt=e("br",null,null,-1),jt=e("br",null,null,-1),en=e("br",null,null,-1),tn=e("br",null,null,-1),nn=e("br",null,null,-1),ln=e("i",null,[e("small",null,"[转换完成 文件1-4-1]")],-1),on=e("br",null,null,-1),an=e("br",null,null,-1),sn=e("i",null,[e("small",null,"[转换完成 文件1-4-2]")],-1),rn=e("br",null,null,-1),un=e("br",null,null,-1),dn=e("i",null,[e("small",null,"[转换完成 文件1-4-3]")],-1),cn=e("br",null,null,-1),fn=e("i",null,[e("small",null,"[转换完成 文件1-4-4]")],-1),mn=e("br",null,null,-1),_n=e("br",null,null,-1),hn=e("br",null,null,-1),bn=e("br",null,null,-1),pn=e("i",null,[e("small",null,"[2022/07/16 16:25]")],-1),vn=e("br",null,null,-1),gn=e("mark",null,"付块",-1),yn=e("strong",null,"非",-1),wn=e("s",null,"游!",-1),xn=["src"],Nn=T({__name:"fuzeinfo",setup(o){const _=ve(),c=u=>{var r=20,n=0,f,b,h,v;u.setup=()=>{u.createCanvas(720,400),u.frameRate(1),f=u.floor(u.width/r),b=u.floor(u.height/r),h=new Array(f),v=new Array(f);for(var i=0;i<f;i++)h[i]=new Array(b),v[i]=new Array(b);d()};function d(){n=0;for(var i=0;i<f;i++)for(var m=0;m<b;m++)h[i][m]=i==0||m==0||i==f-1||m==b-1?0:u.floor(u.random(2)),v[i][m]=0}function p(){n++;for(var i=1;i<f-1;i++)for(var m=1;m<b-1;m++){for(var w=0,x=-1;x<=1;x++)for(var N=-1;N<=1;N++)w+=h[i+x][m+N];w-=h[i][m],v[i][m]=h[i][m]==1&&w<2||h[i][m]==1&&w>3?0:h[i][m]==0&&w==3?1:h[i][m]}var C=h;h=v,v=C}u.draw=()=>{u.background(255),p();for(var i=0;i<f;i++)for(var m=0;m<b;m++)u.fill(h[i][m]==1?0:255),u.stroke(0),u.rect(i*r,m*r,r-1,r-1);u.fill(0,255,255),u.noStroke(),u.textStyle("bold"),u.textSize(26),u.text(`FUZE${n}年`,15,45)}};return(u,r)=>{const n=ge("spoiler");return Z(),P(H,null,[l(s(Ze),{value:"失联",type:"info"},{default:a(()=>[l(s($e),null,{default:a(()=>[t(U(u.$texta.get(["menus","jokes","fuze"])),1)]),_:1})]),_:1}),l(s(ze),null,{avatar:a(()=>[l(s(Ee),{width:"100",src:s(J)},null,8,["src"])]),header:a(()=>[Pe,t(" (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...) ")]),description:a(()=>[t(" qilu furniture city (齐鲁家具城) "),l(n,null,{default:a(()=>[De,t(" 家具城 ")]),_:1}),t(" , fuzeland (付兰) "),l(n,null,{default:a(()=>[t("付兰永存!")]),_:1}),Ye,Le,l(n,null,{default:a(()=>[t("*btw")]),_:1})]),footer:a(()=>[l(s(pe),{onClick:r[0]||(r[0]=f=>s(_).push("/jokes/fuzeblockisnotagame"))},{default:a(()=>[gn,yn,wn]),_:1})]),default:a(()=>[l(s(Fe),{type:"error"},{default:a(()=>[t(" 亻寸氵睾他失联了 很久很久 我们不知道他咋了还有他哪儿去了以及他为什么走 临走前只说了三两句话"),Me,Ve,t(" 他刚走的差不多一两周 他的原神和QQ都是一直离线状态 而过了这之后他就突然天天在线了 QQ也是 "),qe,t(' 我以为他已经回来了 但诡异的是无论我发什么他都不吭一声 他唯一一次说话是我们给他打了个语音通话 他回复了"?" 此后便无响应了 '),We,t(" 没准他遇到了啥事 让他彻彻底底地改变了 亦或啥别的客观因素导致 ")]),_:1}),Xe,t(" 114514岁, 是带哲学家, 曾在 "),He,t(" 上大肆蛊惑式宣传自己的事迹 "),l(n,null,{default:a(()=>[t("(当 代 希 特 勒)")]),_:1}),t(" , 最常见的一句话为 "),Qe,Ge,t(" , "),Je,t(" 用来 "),Ke,t(" , 打别人个措手不及, 营造一种莫名其妙但好像真的是 "),je,t(" 这种手段被称为—————— "),et,l(n,null,{default:a(()=>[t("万 恶 之 源")]),_:1}),t(" ( "),tt,t(" ) "),nt,t(' 因头型酷似馒头而得其名, 后又因帝国首领与他磕到嘴并张着大门牙而得名"松鼠", 其母亲亦称其为"懒猫" '),lt,l(s(S),null,{default:a(()=>[t('"Fuze, 你没尊严!"')]),_:1}),l(s(S),null,{default:a(()=>[t('"Fuze, 我们请你吃苹果🍎!"')]),_:1}),l(s(S),null,{default:a(()=>[t('"Fuze, 你没穿衣服!"')]),_:1}),l(s(S),null,{default:a(()=>[t(' "Fuze, 你臃肿!" '),l(n,null,{default:a(()=>[t("实 话 实 说")]),_:1})]),_:1}),l(s(S),null,{default:a(()=>[t('"Fuze, 你无能狂怒!"')]),_:1}),l(s(S),null,{default:a(()=>[t(' "Fuze, 我们是你的 '),ot,t(' " '),l(n,null,{default:a(()=>[t("最 好 的 朋 友")]),_:1})]),_:1}),l(s(S),null,{default:a(()=>[t(' " '),at,t(' Fuze, 说普通话!" ')]),_:1}),st,l(s(E),{title:"文件一"},{default:a(()=>[t(" 自我认知: 别看疯子了! (主客颠倒 应该是"),rt,t(") "),it,t(' (回头) "疯子!" (微微回头) "疯子!" (不回头) "疯子! 叫你呢疯子!" [对着空气大喊疯子] '),ut,t(' "FUZE 咱们现在说哪段呢?" "额" '),dt,t(' "我女儿都会数数了..." '),ct,ft,mt,_t,ht]),_:1}),bt,l(s(E),{title:"文件二"},{default:a(()=>[t(" 通宵到第二天五点 开始睡觉 六点起床上学 "),l(s($),null,{default:a(()=>[e("i",null,"05:"+U(new Date().getMinutes()<10?`0${new Date().getMinutes()}`:new Date().getMinutes()),1),pt,t(" 哈 "),vt,t(" 哈~~ "),gt,t(" 哈~~~ "),yt,t(" [图片: 可莉] ")]),_:1}),t(" FUZE肝到了第二天早上五点 终于抽出了他心爱的可莉 "),l(s($),null,{default:a(()=>[t(' "你为什么这么喜欢可莉?" '),wt,t(' "'),xt,t('" [怪强调略显猥琐] '),Nt,t(' "... 萝莉控" ')]),_:1}),t(" FUZE给他的可莉装上了四风原典 "),l(s($),null,{default:a(()=>[t(" [图片: 角色界面的武器栏 可莉托着四风原典 张着口] "),$t,Et,Ft,t(),zt,t(" 反正我不觉得原因这么简单 ")]),_:1}),t(' "蹦蹦炸弹 (╯‵□′)╯炸弹！•••*～● 火力全开~" '),l(s($),null,{default:a(()=>[kt,St,Rt,t(),Bt,t(' "叫一下人来回答这个问题" "FUZE" '),Ut,t(" FUZE猛地站起来 一脸迷茫 不知所措 "),Ct,t(" 气氛凝结了 王红利拿着书在讲台上看着FUZE FUZE也彷徨地看着她 "),Zt,t(" ...... "),Tt,Ot]),_:1}),t(" 又过了不知多久 似乎以月为单位计量 "),l(s($),null,{default:a(()=>[t(' "诶呀 废物可莉 '),At,t(' 可莉就是个废物" ')]),_:1}),t(" 唉, 喜新厌旧的萝莉控FUZE 可莉被抛弃了 真悲哀啊可莉 ")]),_:1}),It,l(s(E),{title:"文件三"},{default:a(()=>[t(" 好几个小时的JOJO授课 "),l(s($),null,{default:a(()=>[t(' "人终究是要上天堂的!" '),Pt,t(' "MADE IN HEAVEN!" '),Dt,t(' "大总统...平行世界...湮灭" '),Yt,t(' "半人马身上有时钟" '),Lt,t(' "出车祸...监狱...替身" '),Mt,Vt,qt,t(" ...... ")]),_:1}),t(" 日常语音 "),l(s($),null,{default:a(()=>[t(' "能听到吗?" "喂" "喂" "喂" '),Wt,t(' "有.点.笨.电.脑-" '),Xt,t(' "除你语音!" [语音通话已结束] ')]),_:1})]),_:1}),Ht,l(s(E),{title:"文件四"},{default:a(()=>[t(" 父亲 "),l(s($),null,{default:a(()=>[t(" 谁和FUZE在一起? "),Qt,t(" 告诉FUZE, 他爸爸回来了 "),Gt,t(" @全体成员 "),Jt,t(" 谁和FUZE在一起? "),Kt,t(" 告诉FUZE, 他爸爸回来了 "),jt,t(" @全体成员 "),en,t(" ...... "),tn,t(" FUZE回来了 ")]),_:1}),t(" 作文解释 "),l(s($),null,{default:a(()=>[t(" 我的宝贝儿啊，我的天，你 看他的卷子你都没看明白它 写的是什么，他写的是跟妈 妈生气了，摔门而出，完了 之后妈妈并没有出来追她之 后呢，她在路上看到了一个 抱着孩子的妇女，那个女人 身上的衣服很单薄，因为他 把衣服给她怀里的孩子穿上 了，所以。他觉得他其实想 写的就是那个女的，宁可自 己冻着，完了以后饿着他也 不能让自己的孩子受委屈， 完了以后说那个女的病了， 完了之后说打120并没有说 到我，完了之后，他看到这 豆儿啊，这个母亲抱着这个 孩子。他讲很受感动，他觉 得这就是母爱的伟大呀，完 了以后他就决定回家找我， 这是他那个故事，整个笨看 半天都没看懂。 "),nn,ln,on,t(" 这个主要是怪他那课外班的 语文老师，完了以后有一次 就是说写作文L就跟他说写 好不写坏就是写你写这个人 好看，你不写这个人丑这句 话能听明白吗?也就是说你 写跟你妈关系好，你倒不如 写，跟你妈关系不好，得分 更高，所以误导这个孩子 啦，我的天呐。 "),an,sn,rn,t(" 他写作文儿写和我吵架，证 明我们两个人不吵架，也就 是说他写作文写和我吵架 儿，我不生气，如果他写作 文写和别人吵架，比如说和 他爸爸吵架，他可能就不敢 让他爸爸知道，或者他爸爸 看到了可能会跟他生气，明 白了吗?也就是说因为跟我 关系好，所以他可以随便 说。 "),un,dn]),_:1}),t(" 新称号 "),l(s($),null,{default:a(()=>[t(" 为什么像松鼠呢?我感觉他 像一只猫，尤其是性格非常 像一只猫，懒懒的往那一 躺，完了之后呢，还馋不爱 吃好吃的，比如说汉堡啊披 萨呀，完了之后小鸡腿儿 啊。整天吃好吃的，因为猫 有两个特别的喜庆，一个是 懒，一个是X1说就是懒猫或 者馋猫，没有听说谁说长狗 或者是懒狗，没有吧，基本 上都是懒猫或者是馋猫，所 以FUZE非常符合这两遍。 "),cn,fn]),_:1})]),_:1}),mn,l(s(E),{title:"文件五"},{default:a(()=>[l(s($),null,{default:a(()=>[t(" [:转圈圈:] "),_n,t(" 去世了 "),hn,t(" 随机一天复活 "),bn,pn]),_:1}),t(" EOF "),l(n,null,{default:a(()=>[t("若你是故意走的 那就滚吧 我们不是柯莱卢基托")]),_:1})]),_:1}),vn]),_:1}),l(s(A)),l(s(E),null,{default:a(()=>[e("video",{style:{"max-width":"100%"},src:s(Te),controls:"",muted:"",loop:""},null,8,xn)]),_:1}),l(s(A)),l(s(E),{title:"BILIBILI"},{default:a(()=>[e("iframe",{width:"100%",height:"375px",src:"https://space.bilibili.com/1078829483",frameborder:"0",allowfullscreen:"false",allowpaymentrequest:"",referrerpolicy:"origin",onError:r[1]||(r[1]=f=>f.preventDefault())},null,32)]),_:1}),l(s(A)),l(s(E),{title:"生命周期"},{default:a(()=>[l(s(ke),{"x-scrollable":""},{default:a(()=>[l(Ie,{content:[[[[6,0,0],[7,30,0]],"晨练"],[[[7,30,0],[8,0,0]],"吃早饭"],[[[8,0,0],[10,0,0]],"完成部分作业"],[[[10,0,0],[10,30,0]],"自由活动"],[[[10,30,0],[11,0,0]],"预习物理八上"],[[[11,0,0],[12,0,0]],"完成部分作业"],[[[12,0,0],[14,0,0]],"吃饭、午休"],[[[14,0,0],[16,0,0]],"完成部分作业"],[[[16,0,0],[17,0,0]],"英语听力"],[[[17,0,0],[18,0,0]],"预习数学"],[[[18,0,0],[19,0,0]],"吃饭"],[[[19,0,0],[19,30,0]],"观看新闻、《话说长江》"],[[[19,30,0],[21,30,0]],"预习八上生物、历史、地理、政治"],[[[21,30,0],[22,30,0]],"语文阅读"],[[[22,30,0],[6,0,0]],"睡觉"]]})]),_:1})]),_:1}),l(s(E),{title:"FUZE维度"},{default:a(()=>[l(xe,{sketch:c})]),_:1})],64)}}});typeof V=="function"&&V(Nn);export{Nn as default};
