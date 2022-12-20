import{F as J}from"./avatar-64db8248.js";import{e as T,B as k,l as U,W,aw as D,G as I,h as g,b as w,bQ as K,c as E,bR as j,a as $,d as ee,bC as te,K as ne,bd as le,ab as L,u as oe,f as X,b1 as ae,V as se,af as re,m as ie,n as ue,bt as de,a5 as ce,o as fe,bS as me,bT as _e,q as Z,X as Y,w as o,z as e,b8 as z,s as P,bp as be,F as Q,y as s,x as t,bB as he,bU as pe,v as n,bl as ve,bm as N}from"./index-df691239.js";import{S as B}from"./Spoiler-fd02c414.js";import{c as M}from"./index-d13ca8e3.js";import{N as ge}from"./Progress-8b5e221c.js";import{N as we}from"./Table-498ebec8.js";import{_ as ye}from"./P5.vue_vue_type_script_setup_true_lang-355b430a.js";import{g as xe}from"./attribute-2ee9e579.js";import{N as Ne}from"./Alert-7e90498b.js";import{N as O}from"./Divider-e6d3ec2c.js";import{N as $e}from"./headers-89604325.js";import{a as Ee}from"./Image-fe916008.js";import{N as x}from"./blockquote-872c5d79.js";import{N as Fe}from"./Thing-b2c29be0.js";import{N as ze}from"./Scrollbar-69dbdc19.js";import{b as V}from"./route-block-83d24a4e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./format-length-c9d165c6.js";import"./_commonjsHelpers-725317a4.js";import"./utils-8fb188d9.js";import"./use-locale-a5620776.js";import"./kebabCase-1d81d30d.js";import"./Tooltip-85fd4e62.js";import"./cssr-deed3743.js";import"./on-fonts-ready-b10f7b66.js";import"./use-merged-state-deff8ad5.js";import"./use-compitable-332ff635.js";const q=T({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(l){const m=k(null),f=k(l.value),u=k(l.value),r=k("up"),a=k(!1),b=U(()=>a.value?`${l.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),h=U(()=>a.value?`${l.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);W(I(l,"value"),(c,p)=>{f.value=p,u.value=c,D(_)});function _(){const c=l.newOriginalNumber,p=l.oldOriginalNumber;p===void 0||c===void 0||(c>p?v("up"):p>c&&v("down"))}function v(c){r.value=c,a.value=!1,D(()=>{var p;(p=m.value)===null||p===void 0||p.offsetWidth,a.value=!0})}return()=>{const{clsPrefix:c}=l;return g("span",{ref:m,class:`${c}-base-slot-machine-number`},f.value!==null?g("span",{class:[`${c}-base-slot-machine-old-number ${c}-base-slot-machine-old-number--top`,h.value]},f.value):null,g("span",{class:[`${c}-base-slot-machine-current-number`,b.value]},g("span",{ref:"numberWrapper",class:[`${c}-base-slot-machine-current-number__inner`,typeof l.value!="number"&&`${c}-base-slot-machine-current-number__inner--not-number`]},u.value)),f.value!==null?g("span",{class:[`${c}-base-slot-machine-old-number ${c}-base-slot-machine-old-number--bottom`,h.value]},f.value):null)}}}),{cubicBezierEaseOut:R}=K;function ke({duration:l=".2s"}={}){return[w("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${l} ${R},
 max-width ${l} ${R},
 transform ${l} ${R}
 `}),w("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${l} ${R},
 max-width ${l} ${R},
 transform ${l} ${R}
 `}),w("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),w("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),w("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),w("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}const Be=w([w("@keyframes n-base-slot-machine-fade-up-in",`
 from {
 transform: translateY(60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-in",`
 from {
 transform: translateY(-60%);
 opacity: 0;
 }
 to {
 transform: translateY(0);
 opacity: 1;
 }
 `),w("@keyframes n-base-slot-machine-fade-up-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(-60%);
 opacity: 0;
 }
 `),w("@keyframes n-base-slot-machine-fade-down-out",`
 from {
 transform: translateY(0%);
 opacity: 1;
 }
 to {
 transform: translateY(60%);
 opacity: 0;
 }
 `),E("base-slot-machine",`
 overflow: hidden;
 white-space: nowrap;
 display: inline-block;
 height: 18px;
 line-height: 18px;
 `,[E("base-slot-machine-number",`
 display: inline-block;
 position: relative;
 height: 18px;
 width: .6em;
 max-width: .6em;
 `,[ke({duration:".2s"}),j({duration:".2s",delay:"0s"}),E("base-slot-machine-old-number",`
 display: inline-block;
 opacity: 0;
 position: absolute;
 left: 0;
 right: 0;
 `,[$("top",{transform:"translateY(-100%)"}),$("bottom",{transform:"translateY(100%)"}),$("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),$("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),E("base-slot-machine-current-number",`
 display: inline-block;
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 1;
 transform: translateY(0);
 width: .6em;
 `,[$("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),$("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),ee("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[$("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Se=T({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(l){te("-base-slot-machine",Be,I(l,"clsPrefix"));const m=k(),f=k(),u=U(()=>{if(typeof l.value=="string")return[];if(l.value<1)return[0];const r=[];let a=l.value;for(l.max!==void 0&&(a=Math.min(l.max,a));a>=1;)r.push(a%10),a/=10,a=Math.floor(a);return r.reverse(),r});return W(I(l,"value"),(r,a)=>{typeof r=="string"?(f.value=void 0,m.value=void 0):typeof a=="string"?(f.value=r,m.value=void 0):(f.value=r,m.value=a)}),()=>{const{value:r,clsPrefix:a}=l;return typeof r=="number"?g("span",{class:`${a}-base-slot-machine`},g(le,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>u.value.map((b,h)=>g(q,{clsPrefix:a,key:u.value.length-h-1,oldOriginalNumber:m.value,newOriginalNumber:f.value,value:b}))}),g(ne,{key:"+",width:!0},{default:()=>l.max!==void 0&&l.max<r?g(q,{clsPrefix:a,value:"+"}):null})):g("span",{class:`${a}-base-slot-machine`},r)}}}),Re=w([w("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),E("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[$("as-is",[E("badge-sup",{position:"static",transform:"translateX(0)"},[L({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),$("dot",[E("badge-sup",`
 height: 8px;
 width: 8px;
 padding: 0;
 min-width: 8px;
 left: 100%;
 bottom: calc(100% - 4px);
 `,[w("::before","border-radius: 4px;")])]),E("badge-sup",`
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
 `,[L({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),E("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),w("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Ue=Object.assign(Object.assign({},X.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String}),Te=T({name:"Badge",props:Ue,setup(l,{slots:m}){const{mergedClsPrefixRef:f,inlineThemeDisabled:u,mergedRtlRef:r}=oe(l),a=X("Badge","-badge",Re,_e,l,f),b=k(!1),h=()=>{b.value=!0},_=()=>{b.value=!1},v=U(()=>l.show&&(l.dot||l.value!==void 0&&!(!l.showZero&&l.value<=0)||!ae(m.value)));se(()=>{v.value&&(b.value=!0)});const c=re("Badge",r,f),p=U(()=>{const{type:d,color:y}=l,{common:{cubicBezierEaseInOut:F,cubicBezierEaseOut:C},self:{[ie("color",d)]:A,fontFamily:H,fontSize:G}}=a.value;return{"--n-font-size":G,"--n-font-family":H,"--n-color":y||A,"--n-ripple-color":y||A,"--n-bezier":F,"--n-ripple-bezier":C}}),i=u?ue("badge",U(()=>{let d="";const{type:y,color:F}=l;return y&&(d+=y[0]),F&&(d+=de(F)),d}),p,l):void 0;return{rtlEnabled:c,mergedClsPrefix:f,appeared:b,showBadge:v,handleAfterEnter:h,handleAfterLeave:_,cssVars:u?void 0:p,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var l;const{mergedClsPrefix:m,onRender:f,themeClass:u,$slots:r}=this;f==null||f();const a=(l=r.default)===null||l===void 0?void 0:l.call(r);return g("div",{class:[`${m}-badge`,this.rtlEnabled&&`${m}-badge--rtl`,u,{[`${m}-badge--dot`]:this.dot,[`${m}-badge--as-is`]:!a}],style:this.cssVars},a,g(ce,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${m}-badge-sup`,title:xe(this.value)},fe(r.value,()=>[this.dot?null:g(Se,{clsPrefix:m,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(me,{clsPrefix:m}):null):null}))}}),S=T({name:"Li",render(){return g("li",null,this.$slots)}}),Ce=""+new URL("fuze-37099f41.mp4",import.meta.url).href,Ze={colspan:"2",style:{"text-align":"center","word-wrap":"break-word"}},Ae=T({__name:"Timetable",props:{content:null},setup(l){const m=l,f=a=>{const[b,h]=a;function _(v){const[c,p,i]=v;return`${c}:${p===0?"00":p}${i>0?`:${i}`:""}`}return`${_(b)} - ${_(h)}`},u=()=>{const a=new Date;return[a.getHours(),a.getMinutes(),a.getSeconds()]},r=()=>m.content.find(a=>M(u(),a[0]));return(a,b)=>(Z(),Y(s(we),null,{default:o(()=>{var h,_;return[e("thead",null,[e("tr",null,[e("th",Ze,[e("strong",null,z(f(((h=r())==null?void 0:h[0])??[[11,45,14],[19,19,810]]))+" : "+z(((_=r())==null?void 0:_[1])??"贰柒柒叁伍叁"),1)])]),e("tr",null,[e("th",null,z(a.$t("components.TimeTable.time")),1),e("th",null,z(a.$t("components.TimeTable.content")),1)])]),e("tbody",null,[(Z(!0),P(Q,null,be(m.content,([v,c],p)=>(Z(),P("tr",{key:p},[e("td",null,z(f(v)),1),e("td",null,[t(z(c)+" ",1),s(M)(u(),v)?(Z(),Y(s(ge),{key:0,percentage:100,"show-indicator":!1,processing:""})):he("",!0)])]))),128))])]}),_:1}))}}),Oe=e("mark",null,"Fuze",-1),Ie=e("strong",null,"七一路",-1),Pe=e("br",null,null,-1),De=e("u",null,[e("strong",null,"LONG LIVE FUZELAND!")],-1),Le=e("small",null,"(见文件1-5)",-1),Ye=e("br",null,null,-1),Me=e("br",null,null,-1),Ve=e("br",null,null,-1),qe=e("br",null,null,-1),We=e("strong",null,"Discord",-1),Xe=e("em",null,'"u r a weird guy who kept saying the word "fuze"!"(你是个大聪明)',-1),Qe=e("span",{class:"spoiler"},"(震声)",-1),He=e("small",null,"(经常在宣传的后面)",-1),Ge=e("strong",null,"强下定义",-1),Je=e("s",null,"那个大聪明一样",-1),Ke=e("strong",null,"下 定 义",-1),je=e("small",null,"define",-1),et=e("br",null,null,-1),tt=e("br",null,null,-1),nt=e("strong",null,"好朋友!",-1),lt=e("em",null,"dei!",-1),ot=e("br",null,null,-1),at=e("small",null,"疯子别看了!",-1),st=e("br",null,null,-1),rt=e("br",null,null,-1),it=e("small",null,'"1...2...3......"',-1),ut=e("br",null,null,-1),dt=e("br",null,null,-1),ct=e("i",null,[e("small",null,"连密码都随便说的 真是愚蠢的FUZE啊")],-1),ft=e("br",null,null,-1),mt=e("h3",null,[t(" ? "),e("br"),t(" 说什么呢 "),e("br"),t(" 什么密码 "),e("br"),t(" ??? "),e("br"),t(" 人呢 "),e("br"),t(" 我草彳亍 "),e("br"),t(" 下定义是吧 "),e("br"),t(" 没尊严了 "),e("br")],-1),_t=e("br",null,null,-1),bt=e("br",null,null,-1),ht=e("br",null,null,-1),pt=e("br",null,null,-1),vt=e("br",null,null,-1),gt=e("br",null,null,-1),wt=e("strong",null,"因为可莉很刑啊",-1),yt=e("br",null,null,-1),xt=e("br",null,null,-1),Nt=e("br",null,null,-1),$t=e("strong",null,"是因为四风原典没人用 我才抽可莉",-1),Et=e("br",null,null,-1),Ft=e("i",null,"数学课上 小伙坐在班级的左前方靠墙 看起来神志不清",-1),zt=e("br",null,null,-1),kt=e("i",null,"老师在黑板上写下了一个分式",-1),Bt=e("br",null,null,-1),St=e("br",null,null,-1),Rt=e("br",null,null,-1),Ut=e("br",null,null,-1),Tt=e("br",null,null,-1),Ct=e("strong",null,"每天的睡眠一定要保证啊!",-1),Zt=e("br",null,null,-1),At=e("br",null,null,-1),Ot=e("br",null,null,-1),It=e("br",null,null,-1),Pt=e("br",null,null,-1),Dt=e("br",null,null,-1),Lt=e("br",null,null,-1),Yt=e("i",null,[e("strong",null,"讲着讲着误开摄像头")],-1),Mt=e("br",null,null,-1),Vt=e("br",null,null,-1),qt=e("br",null,null,-1),Wt=e("br",null,null,-1),Xt=e("br",null,null,-1),Qt=e("br",null,null,-1),Ht=e("br",null,null,-1),Gt=e("br",null,null,-1),Jt=e("br",null,null,-1),Kt=e("br",null,null,-1),jt=e("br",null,null,-1),en=e("br",null,null,-1),tn=e("i",null,[e("small",null,"[转换完成 文件1-4-1]")],-1),nn=e("br",null,null,-1),ln=e("br",null,null,-1),on=e("i",null,[e("small",null,"[转换完成 文件1-4-2]")],-1),an=e("br",null,null,-1),sn=e("br",null,null,-1),rn=e("i",null,[e("small",null,"[转换完成 文件1-4-3]")],-1),un=e("br",null,null,-1),dn=e("i",null,[e("small",null,"[转换完成 文件1-4-4]")],-1),cn=e("br",null,null,-1),fn=e("br",null,null,-1),mn=e("br",null,null,-1),_n=e("br",null,null,-1),bn=e("i",null,[e("small",null,"[2022/07/16 16:25]")],-1),hn=e("br",null,null,-1),pn=e("mark",null,"FUZE block",-1),vn=e("strong",null,"is not",-1),gn=e("s",null,"a game!",-1),wn=["src"],yn=T({__name:"fuzeinfo",setup(l){const m=pe(),f=u=>{var r=20,a=0,b,h,_,v;u.setup=()=>{u.createCanvas(720,400),u.frameRate(1),b=u.floor(u.width/r),h=u.floor(u.height/r),_=new Array(b),v=new Array(b);for(var i=0;i<b;i++)_[i]=new Array(h),v[i]=new Array(h);c()};function c(){a=0;for(var i=0;i<b;i++)for(var d=0;d<h;d++)_[i][d]=i==0||d==0||i==b-1||d==h-1?0:u.floor(u.random(2)),v[i][d]=0}function p(){a++;for(var i=1;i<b-1;i++)for(var d=1;d<h-1;d++){for(var y=0,F=-1;F<=1;F++)for(var C=-1;C<=1;C++)y+=_[i+F][d+C];y-=_[i][d],v[i][d]=_[i][d]==1&&y<2||_[i][d]==1&&y>3?0:_[i][d]==0&&y==3?1:_[i][d]}var A=_;_=v,v=A}u.draw=()=>{u.background(255),p();for(var i=0;i<b;i++)for(var d=0;d<h;d++)u.fill(_[i][d]==1?0:255),u.stroke(0),u.rect(i*r,d*r,r-1,r-1);u.fill(0,255,255),u.noStroke(),u.textStyle("bold"),u.textSize(26),u.text(`FUZE${a}年`,15,45)}};return(u,r)=>(Z(),P(Q,null,[n(s(Te),{value:"失联",type:"info"},{default:o(()=>[n(s($e),null,{default:o(()=>[t(z(u.$t("layouts.JokesLayout.fuze")),1)]),_:1})]),_:1}),n(s(Fe),null,{avatar:o(()=>[n(s(Ee),{width:"100",src:s(J)},null,8,["src"])]),header:o(()=>[Oe,t(" (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...) ")]),description:o(()=>[t(" qilu furniture city (齐鲁家具城) "),n(B,null,{default:o(()=>[Ie,t(" 家具城 ")]),_:1}),t(" , fuzeland (付兰) "),n(B,null,{default:o(()=>[t("付兰永存!")]),_:1}),Pe,De,n(B,null,{default:o(()=>[t("*btw")]),_:1})]),footer:o(()=>[n(s(ve),{onClick:r[0]||(r[0]=a=>s(m).push("/jokes/fuzeblockisnotagame"))},{default:o(()=>[pn,vn,gn]),_:1})]),default:o(()=>[n(s(Ne),{type:"error"},{default:o(()=>[t(" FUZE他失联了 很久很久 我们不知道他怎么了他去哪里了以及他为什么走 临走前只说了三两句话"),Le,Ye,t(" 他刚走的差不多一两周 他的原神和QQ都是一直离线状态 而过了这之后他就突然天天在线了 QQ也是 "),Me,t(' 我以为他已经回来了 但诡异的是无论我给他发什么他都不啃一声 他唯一一次说话是我们给他打了个语音通话 他回了个"?" 此后便无动静了 '),Ve,t(" 没准他遇到了啥事 让他彻彻底底地改变了 亦或是啥别的客观因素导致的 ")]),_:1}),qe,t(" 114514岁, 是带哲学家, 曾在 "),We,t(" 上大肆蛊惑式宣传自己的事迹 "),n(B,null,{default:o(()=>[t("(当 代 希 特 勒)")]),_:1}),t(" , 最常见的一句话为 "),Xe,Qe,t(" , "),He,t(" 用来 "),Ge,t(" , 打别人个措手不及, 营造一种莫名其妙但好像真的是 "),Je,t(" 这种手段被称为—————— "),Ke,n(B,null,{default:o(()=>[t("万 恶 之 源")]),_:1}),t(" ( "),je,t(" ) "),et,t(' 因头型酷似馒头而得其名, 后又因帝国首领与他磕到嘴并张着大门牙而得名"松鼠", 其母亲亦称其为"懒猫" '),tt,n(s(S),null,{default:o(()=>[t('"Fuze, 你没尊严!"')]),_:1}),n(s(S),null,{default:o(()=>[t('"Fuze, 我们请你吃苹果🍎!"')]),_:1}),n(s(S),null,{default:o(()=>[t('"Fuze, 你没穿衣服!"')]),_:1}),n(s(S),null,{default:o(()=>[t(' "Fuze, 你臃肿!" '),n(B,null,{default:o(()=>[t("实 话 实 说")]),_:1})]),_:1}),n(s(S),null,{default:o(()=>[t('"Fuze, 你无能狂怒!"')]),_:1}),n(s(S),null,{default:o(()=>[t(' "Fuze, 我们是你的 '),nt,t(' " '),n(B,null,{default:o(()=>[t("最 好 的 朋 友")]),_:1})]),_:1}),n(s(S),null,{default:o(()=>[t(' " '),lt,t(' Fuze, 说普通话!" ')]),_:1}),ot,n(s(N),{title:"文件一"},{default:o(()=>[t(" 自我认知: 别看疯子了! (主客颠倒 应该是"),at,t(") "),st,t(' (回头) "疯子!" (微微回头) "疯子!" (不回头) "疯子! 叫你呢疯子!" [对着空气大喊疯子] '),rt,t(' "FUZE 咱们现在说哪段呢?" "额" '),it,t(' "我女儿都会数数了..." '),ut,dt,ct,ft,mt]),_:1}),_t,n(s(N),{title:"文件二"},{default:o(()=>[t(" 通宵到第二天五点 开始睡觉 六点起床上学 "),n(s(x),null,{default:o(()=>[e("i",null,"05:"+z(new Date().getMinutes()<10?`0${new Date().getMinutes()}`:new Date().getMinutes()),1),bt,t(" 哈 "),ht,t(" 哈~~ "),pt,t(" 哈~~~ "),vt,t(" [图片: 可莉] ")]),_:1}),t(" FUZE肝到了第二天早上五点 终于抽出了他心爱的可莉 "),n(s(x),null,{default:o(()=>[t(' "你为什么这么喜欢可莉?" '),gt,t(' "'),wt,t('" [怪强调略显猥琐] '),yt,t(' "... 萝莉控" ')]),_:1}),t(" FUZE给他的可莉装上了四风原典 "),n(s(x),null,{default:o(()=>[t(" [图片: 角色界面的武器栏 可莉托着四风原典 张着口] "),xt,Nt,$t,t(),Et,t(" 反正我不觉得原因这么简单 ")]),_:1}),t(' "蹦蹦炸弹 (╯‵□′)╯炸弹！•••*～● 火力全开~" '),n(s(x),null,{default:o(()=>[Ft,zt,kt,t(),Bt,t(' "叫一下人来回答这个问题" "FUZE" '),St,t(" FUZE猛地站起来 一脸迷茫 不知所措 "),Rt,t(" 气氛凝结了 王红利拿着书在讲台上看着FUZE FUZE也彷徨地看着她 "),Ut,t(" ...... "),Tt,Ct]),_:1}),t(" 又过了不知多久 似乎以月为单位计量 "),n(s(x),null,{default:o(()=>[t(' "诶呀 废物可莉 '),Zt,t(' 可莉就是个废物" ')]),_:1}),t(" 唉, 喜新厌旧的萝莉控FUZE 可莉被抛弃了 真悲哀啊可莉 ")]),_:1}),At,n(s(N),{title:"文件三"},{default:o(()=>[t(" 好几个小时的JOJO授课 "),n(s(x),null,{default:o(()=>[t(' "人终究是要上天堂的!" '),Ot,t(' "MADE IN HEAVEN!" '),It,t(' "大总统...平行世界...湮灭" '),Pt,t(' "半人马身上有时钟" '),Dt,t(' "出车祸...监狱...替身" '),Lt,Yt,Mt,t(" ...... ")]),_:1}),t(" 日常语音 "),n(s(x),null,{default:o(()=>[t(' "能听到吗?" "喂" "喂" "喂" '),Vt,t(' "有.点.笨.电.脑-" '),qt,t(' "除你语音!" [语音通话已结束] ')]),_:1})]),_:1}),Wt,n(s(N),{title:"文件四"},{default:o(()=>[t(" 父亲 "),n(s(x),null,{default:o(()=>[t(" 谁和FUZE在一起? "),Xt,t(" 告诉FUZE, 他爸爸回来了 "),Qt,t(" @全体成员 "),Ht,t(" 谁和FUZE在一起? "),Gt,t(" 告诉FUZE, 他爸爸回来了 "),Jt,t(" @全体成员 "),Kt,t(" ...... "),jt,t(" FUZE回来了 ")]),_:1}),t(" 作文解释 "),n(s(x),null,{default:o(()=>[t(" 我的宝贝儿啊，我的天，你 看他的卷子你都没看明白它 写的是什么，他写的是跟妈 妈生气了，摔门而出，完了 之后妈妈并没有出来追她之 后呢，她在路上看到了一个 抱着孩子的妇女，那个女人 身上的衣服很单薄，因为他 把衣服给她怀里的孩子穿上 了，所以。他觉得他其实想 写的就是那个女的，宁可自 己冻着，完了以后饿着他也 不能让自己的孩子受委屈， 完了以后说那个女的病了， 完了之后说打120并没有说 到我，完了之后，他看到这 豆儿啊，这个母亲抱着这个 孩子。他讲很受感动，他觉 得这就是母爱的伟大呀，完 了以后他就决定回家找我， 这是他那个故事，整个笨看 半天都没看懂。 "),en,tn,nn,t(" 这个主要是怪他那课外班的 语文老师，完了以后有一次 就是说写作文L就跟他说写 好不写坏就是写你写这个人 好看，你不写这个人丑这句 话能听明白吗?也就是说你 写跟你妈关系好，你倒不如 写，跟你妈关系不好，得分 更高，所以误导这个孩子 啦，我的天呐。 "),ln,on,an,t(" 他写作文儿写和我吵架，证 明我们两个人不吵架，也就 是说他写作文写和我吵架 儿，我不生气，如果他写作 文写和别人吵架，比如说和 他爸爸吵架，他可能就不敢 让他爸爸知道，或者他爸爸 看到了可能会跟他生气，明 白了吗?也就是说因为跟我 关系好，所以他可以随便 说。 "),sn,rn]),_:1}),t(" 新称号 "),n(s(x),null,{default:o(()=>[t(" 为什么像松鼠呢?我感觉他 像一只猫，尤其是性格非常 像一只猫，懒懒的往那一 躺，完了之后呢，还馋不爱 吃好吃的，比如说汉堡啊披 萨呀，完了之后小鸡腿儿 啊。整天吃好吃的，因为猫 有两个特别的喜庆，一个是 懒，一个是X1说就是懒猫或 者馋猫，没有听说谁说长狗 或者是懒狗，没有吧，基本 上都是懒猫或者是馋猫，所 以FUZE非常符合这两遍。 "),un,dn]),_:1})]),_:1}),cn,n(s(N),{title:"文件五"},{default:o(()=>[n(s(x),null,{default:o(()=>[t(" [:转圈圈:] "),fn,t(" 去世了 "),mn,t(" 随机一天复活 "),_n,bn]),_:1}),t(" EOF ")]),_:1}),hn]),_:1}),n(s(O)),n(s(N),null,{default:o(()=>[e("video",{style:{"max-width":"100%"},src:s(Ce),controls:"",muted:"",loop:""},null,8,wn)]),_:1}),n(s(O)),n(s(N),{title:"BILIBILI"},{default:o(()=>[e("iframe",{width:"100%",height:"375px",src:"https://space.bilibili.com/1078829483",frameborder:"0",allowfullscreen:"false",allowpaymentrequest:"",referrerpolicy:"origin",onError:r[1]||(r[1]=a=>a.preventDefault())},null,32)]),_:1}),n(s(O)),n(s(N),{title:"生命周期"},{default:o(()=>[n(s(ze),{"x-scrollable":""},{default:o(()=>[n(Ae,{content:[[[[6,0,0],[7,30,0]],"晨练"],[[[7,30,0],[8,0,0]],"吃早饭"],[[[8,0,0],[10,0,0]],"完成部分作业"],[[[10,0,0],[10,30,0]],"自由活动"],[[[10,30,0],[11,0,0]],"预习物理八上"],[[[11,0,0],[12,0,0]],"完成部分作业"],[[[12,0,0],[14,0,0]],"吃饭、午休"],[[[14,0,0],[16,0,0]],"完成部分作业"],[[[16,0,0],[17,0,0]],"英语听力"],[[[17,0,0],[18,0,0]],"预习数学"],[[[18,0,0],[19,0,0]],"吃饭"],[[[19,0,0],[19,30,0]],"观看新闻、《话说长江》"],[[[19,30,0],[21,30,0]],"预习八上生物、历史、地理、政治"],[[[21,30,0],[22,30,0]],"语文阅读"],[[[22,30,0],[6,0,0]],"睡觉"]]})]),_:1})]),_:1}),n(s(N),{title:"FUZE维度"},{default:o(()=>[n(ye,{sketch:f})]),_:1})],64))}});typeof V=="function"&&V(yn);export{yn as default};
