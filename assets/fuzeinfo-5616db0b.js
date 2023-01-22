import{F as G}from"./avatar-64db8248.js";import{d as R,r as F,c as C,J as q,n as P,H as O,h as g,t as w,am as J,q as E,cy as K,E as $,s as j,S as ee,bU as te,ce as ne,G as D,w as le,x as W,a as oe,a3 as ae,A as se,T as re,P as ie,cz as ue,cA as de,az as ce,C as fe,bK as me,aB as Z,aO as L,aL as o,aD as e,aR as S,aC as I,aP as _e,Z as X,aM as s,cB as Y,aN as t,aS as he,aK as l,ak as be,cl as N,cC as pe,ci as ve}from"./index-0642acdb.js";import{N as ge}from"./Progress-94a529af.js";import{N as we}from"./Table-80f4711f.js";import{_ as ye}from"./P5.vue_vue_type_script_setup_true_lang-77b2d57c.js";import{g as xe}from"./attribute-2ee9e579.js";import{N as Ne}from"./Alert-23d95a2c.js";import{N as A}from"./Divider-fe3a4b1c.js";import{N as $e}from"./headers-b89102e2.js";import{a as Ee}from"./Image-e7bb70e9.js";import{N as x}from"./blockquote-4745f72a.js";import{N as ze}from"./Thing-c08ca9cc.js";import{N as Fe}from"./Scrollbar-25fe67d0.js";import{b as M}from"./route-block-83d24a4e.js";import"./format-length-c9d165c6.js";import"./utils-8fb188d9.js";import"./use-locale-100b8003.js";import"./kebabCase-9961ce86.js";import"./Tooltip-2abf0c46.js";import"./cssr-111fac1c.js";import"./on-fonts-ready-e64e9c77.js";import"./use-merged-state-1d0c7ec5.js";import"./use-compitable-c8959c00.js";const V=R({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(a){const _=F(null),f=F(a.value),u=F(a.value),r=F("up"),n=F(!1),m=C(()=>n.value?`${a.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null),b=C(()=>n.value?`${a.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null);q(O(a,"value"),(c,p)=>{f.value=p,u.value=c,P(h)});function h(){const c=a.newOriginalNumber,p=a.oldOriginalNumber;p===void 0||c===void 0||(c>p?v("up"):p>c&&v("down"))}function v(c){r.value=c,n.value=!1,P(()=>{var p;(p=_.value)===null||p===void 0||p.offsetWidth,n.value=!0})}return()=>{const{clsPrefix:c}=a;return g("span",{ref:_,class:`${c}-base-slot-machine-number`},f.value!==null?g("span",{class:[`${c}-base-slot-machine-old-number ${c}-base-slot-machine-old-number--top`,b.value]},f.value):null,g("span",{class:[`${c}-base-slot-machine-current-number`,m.value]},g("span",{ref:"numberWrapper",class:[`${c}-base-slot-machine-current-number__inner`,typeof a.value!="number"&&`${c}-base-slot-machine-current-number__inner--not-number`]},u.value)),f.value!==null?g("span",{class:[`${c}-base-slot-machine-old-number ${c}-base-slot-machine-old-number--bottom`,b.value]},f.value):null)}}}),{cubicBezierEaseOut:B}=J;function ke({duration:a=".2s"}={}){return[w("&.fade-up-width-expand-transition-leave-active",{transition:`
 opacity ${a} ${B},
 max-width ${a} ${B},
 transform ${a} ${B}
 `}),w("&.fade-up-width-expand-transition-enter-active",{transition:`
 opacity ${a} ${B},
 max-width ${a} ${B},
 transform ${a} ${B}
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
 `,[ke({duration:".2s"}),K({duration:".2s",delay:"0s"}),E("base-slot-machine-old-number",`
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
 `,[$("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),$("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),j("inner",`
 display: inline-block;
 position: absolute;
 right: 0;
 top: 0;
 width: .6em;
 `,[$("not-number",`
 right: unset;
 left: 0;
 `)])])])])]),Se=R({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(a){ee("-base-slot-machine",Be,O(a,"clsPrefix"));const _=F(),f=F(),u=C(()=>{if(typeof a.value=="string")return[];if(a.value<1)return[0];const r=[];let n=a.value;for(a.max!==void 0&&(n=Math.min(a.max,n));n>=1;)r.push(n%10),n/=10,n=Math.floor(n);return r.reverse(),r});return q(O(a,"value"),(r,n)=>{typeof r=="string"?(f.value=void 0,_.value=void 0):typeof n=="string"?(f.value=r,_.value=void 0):(f.value=r,_.value=n)}),()=>{const{value:r,clsPrefix:n}=a;return typeof r=="number"?g("span",{class:`${n}-base-slot-machine`},g(ne,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>u.value.map((m,b)=>g(V,{clsPrefix:n,key:u.value.length-b-1,oldOriginalNumber:_.value,newOriginalNumber:f.value,value:m}))}),g(te,{key:"+",width:!0},{default:()=>a.max!==void 0&&a.max<r?g(V,{clsPrefix:n,value:"+"}):null})):g("span",{class:`${n}-base-slot-machine`},r)}}}),Ce=w([w("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),E("badge",`
 display: inline-flex;
 position: relative;
 vertical-align: middle;
 color: var(--n-color);
 font-family: var(--n-font-family);
 `,[$("as-is",[E("badge-sup",{position:"static",transform:"translateX(0)"},[D({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),$("dot",[E("badge-sup",`
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
 `,[D({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),E("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),w("&::before",`
 opacity: 0;
 transform: scale(1);
 border-radius: 9px;
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)])])]),Re=Object.assign(Object.assign({},W.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String}),Ue=R({name:"Badge",props:Re,setup(a,{slots:_}){const{mergedClsPrefixRef:f,inlineThemeDisabled:u,mergedRtlRef:r}=le(a),n=W("Badge","-badge",Ce,de,a,f),m=F(!1),b=()=>{m.value=!0},h=()=>{m.value=!1},v=C(()=>a.show&&(a.dot||a.value!==void 0&&!(!a.showZero&&a.value<=0)||!ce(_.value)));oe(()=>{v.value&&(m.value=!0)});const c=ae("Badge",r,f),p=C(()=>{const{type:d,color:y}=a,{common:{cubicBezierEaseInOut:z,cubicBezierEaseOut:U},self:{[fe("color",d)]:T,fontFamily:H,fontSize:Q}}=n.value;return{"--n-font-size":Q,"--n-font-family":H,"--n-color":y||T,"--n-ripple-color":y||T,"--n-bezier":z,"--n-ripple-bezier":U}}),i=u?se("badge",C(()=>{let d="";const{type:y,color:z}=a;return y&&(d+=y[0]),z&&(d+=me(z)),d}),p,a):void 0;return{rtlEnabled:c,mergedClsPrefix:f,appeared:m,showBadge:v,handleAfterEnter:b,handleAfterLeave:h,cssVars:u?void 0:p,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var a;const{mergedClsPrefix:_,onRender:f,themeClass:u,$slots:r}=this;f==null||f();const n=(a=r.default)===null||a===void 0?void 0:a.call(r);return g("div",{class:[`${_}-badge`,this.rtlEnabled&&`${_}-badge--rtl`,u,{[`${_}-badge--dot`]:this.dot,[`${_}-badge--as-is`]:!n}],style:this.cssVars},n,g(re,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?g("sup",{class:`${_}-badge-sup`,title:xe(this.value)},ie(r.value,()=>[this.dot?null:g(Se,{clsPrefix:_,appeared:this.appeared,max:this.max,value:this.value})]),this.processing?g(ue,{clsPrefix:_}):null):null}))}}),k=R({name:"Li",render(){return g("li",null,this.$slots)}}),Ze=""+new URL("fuze-37099f41.mp4",import.meta.url).href,Te={colspan:"2",style:{"text-align":"center","word-wrap":"break-word"}},Ae=e("tr",null,[e("th",null,"时间"),e("th",null,"事件")],-1),Oe=R({__name:"Timetable",props:{content:null},setup(a){const _=a,f=n=>{const[m,b]=n;function h(v){const[c,p,i]=v;return`${c}:${p===0?"00":p}${i>0?`:${i}`:""}`}return`${h(m)} - ${h(b)}`},u=()=>{const n=new Date;return[n.getHours(),n.getMinutes(),n.getSeconds()]},r=()=>_.content.find(n=>Y(u(),n[0]));return(n,m)=>(Z(),L(s(we),null,{default:o(()=>{var b,h;return[e("thead",null,[e("tr",null,[e("th",Te,[e("strong",null,S(f(((b=r())==null?void 0:b[0])??[[11,45,14],[19,19,810]]))+" : "+S(((h=r())==null?void 0:h[1])??"贰柒柒叁伍叁"),1)])]),Ae]),e("tbody",null,[(Z(!0),I(X,null,_e(_.content,([v,c],p)=>(Z(),I("tr",{key:p},[e("td",null,S(f(v)),1),e("td",null,[t(S(c)+" ",1),s(Y)(u(),v)?(Z(),L(s(ge),{key:0,percentage:100,"show-indicator":!1,processing:""})):he("",!0)])]))),128))])]}),_:1}))}}),Ie=e("mark",null,"Fuze",-1),Pe=e("strong",null,"七一路",-1),De=e("br",null,null,-1),Le=e("u",null,[e("strong",null,"LONG LIVE FUZELAND!")],-1),Ye=e("small",null,"(见文件1-5)",-1),Me=e("br",null,null,-1),Ve=e("br",null,null,-1),qe=e("br",null,null,-1),We=e("br",null,null,-1),Xe=e("strong",null,"Discord",-1),He=e("em",null,'"u r a weird guy who kept saying the word "fuze"!"(你是个大聪明)',-1),Qe=e("span",{class:"spoiler"},"(震声)",-1),Ge=e("small",null,"(经常在宣传的后面)",-1),Je=e("strong",null,"强下定义",-1),Ke=e("s",null,"那个大聪明一样",-1),je=e("strong",null,"下 定 义",-1),et=e("small",null,"define",-1),tt=e("br",null,null,-1),nt=e("br",null,null,-1),lt=e("strong",null,"好朋友!",-1),ot=e("em",null,"dei!",-1),at=e("br",null,null,-1),st=e("small",null,"疯子别看了!",-1),rt=e("br",null,null,-1),it=e("br",null,null,-1),ut=e("small",null,'"1...2...3......"',-1),dt=e("br",null,null,-1),ct=e("br",null,null,-1),ft=e("i",null,[e("small",null,"连密码都随便说的 真是愚蠢的FUZE啊")],-1),mt=e("br",null,null,-1),_t=e("h3",null,[t(" ? "),e("br"),t(" 说什么呢 "),e("br"),t(" 什么密码 "),e("br"),t(" ??? "),e("br"),t(" 人呢 "),e("br"),t(" 我草彳亍 "),e("br"),t(" 下定义是吧 "),e("br"),t(" 没尊严了 "),e("br")],-1),ht=e("br",null,null,-1),bt=e("br",null,null,-1),pt=e("br",null,null,-1),vt=e("br",null,null,-1),gt=e("br",null,null,-1),wt=e("br",null,null,-1),yt=e("strong",null,"因为可莉很刑啊",-1),xt=e("br",null,null,-1),Nt=e("br",null,null,-1),$t=e("br",null,null,-1),Et=e("strong",null,"是因为四风原典没人用 我才抽可莉",-1),zt=e("br",null,null,-1),Ft=e("i",null,"数学课上 小伙坐在班级的左前方靠墙 看起来神志不清",-1),kt=e("br",null,null,-1),Bt=e("i",null,"老师在黑板上写下了一个分式",-1),St=e("br",null,null,-1),Ct=e("br",null,null,-1),Rt=e("br",null,null,-1),Ut=e("br",null,null,-1),Zt=e("br",null,null,-1),Tt=e("strong",null,"每天的睡眠一定要保证啊!",-1),At=e("br",null,null,-1),Ot=e("br",null,null,-1),It=e("br",null,null,-1),Pt=e("br",null,null,-1),Dt=e("br",null,null,-1),Lt=e("br",null,null,-1),Yt=e("br",null,null,-1),Mt=e("i",null,[e("strong",null,"讲着讲着误开摄像头")],-1),Vt=e("br",null,null,-1),qt=e("br",null,null,-1),Wt=e("br",null,null,-1),Xt=e("br",null,null,-1),Ht=e("br",null,null,-1),Qt=e("br",null,null,-1),Gt=e("br",null,null,-1),Jt=e("br",null,null,-1),Kt=e("br",null,null,-1),jt=e("br",null,null,-1),en=e("br",null,null,-1),tn=e("br",null,null,-1),nn=e("i",null,[e("small",null,"[转换完成 文件1-4-1]")],-1),ln=e("br",null,null,-1),on=e("br",null,null,-1),an=e("i",null,[e("small",null,"[转换完成 文件1-4-2]")],-1),sn=e("br",null,null,-1),rn=e("br",null,null,-1),un=e("i",null,[e("small",null,"[转换完成 文件1-4-3]")],-1),dn=e("br",null,null,-1),cn=e("i",null,[e("small",null,"[转换完成 文件1-4-4]")],-1),fn=e("br",null,null,-1),mn=e("br",null,null,-1),_n=e("br",null,null,-1),hn=e("br",null,null,-1),bn=e("i",null,[e("small",null,"[2022/07/16 16:25]")],-1),pn=e("br",null,null,-1),vn=e("mark",null,"付块",-1),gn=e("strong",null,"非",-1),wn=e("s",null,"游!",-1),yn=["src"],xn=R({__name:"fuzeinfo",setup(a){const _=pe(),f=u=>{var r=20,n=0,m,b,h,v;u.setup=()=>{u.createCanvas(720,400),u.frameRate(1),m=u.floor(u.width/r),b=u.floor(u.height/r),h=new Array(m),v=new Array(m);for(var i=0;i<m;i++)h[i]=new Array(b),v[i]=new Array(b);c()};function c(){n=0;for(var i=0;i<m;i++)for(var d=0;d<b;d++)h[i][d]=i==0||d==0||i==m-1||d==b-1?0:u.floor(u.random(2)),v[i][d]=0}function p(){n++;for(var i=1;i<m-1;i++)for(var d=1;d<b-1;d++){for(var y=0,z=-1;z<=1;z++)for(var U=-1;U<=1;U++)y+=h[i+z][d+U];y-=h[i][d],v[i][d]=h[i][d]==1&&y<2||h[i][d]==1&&y>3?0:h[i][d]==0&&y==3?1:h[i][d]}var T=h;h=v,v=T}u.draw=()=>{u.background(255),p();for(var i=0;i<m;i++)for(var d=0;d<b;d++)u.fill(h[i][d]==1?0:255),u.stroke(0),u.rect(i*r,d*r,r-1,r-1);u.fill(0,255,255),u.noStroke(),u.textStyle("bold"),u.textSize(26),u.text(`FUZE${n}年`,15,45)}};return(u,r)=>{const n=ve("spoiler");return Z(),I(X,null,[l(s(Ue),{value:"失联",type:"info"},{default:o(()=>[l(s($e),null,{default:o(()=>[t(S(u.$texta.get(["menus","jokes","fuze"])),1)]),_:1})]),_:1}),l(s(ze),null,{avatar:o(()=>[l(s(Ee),{width:"100",src:s(G)},null,8,["src"])]),header:o(()=>[Ie,t(" (fuze, fUzE, FUZE, FUze, fuZE, FuzE, fUZe, ...) ")]),description:o(()=>[t(" qilu furniture city (齐鲁家具城) "),l(n,null,{default:o(()=>[Pe,t(" 家具城 ")]),_:1}),t(" , fuzeland (付兰) "),l(n,null,{default:o(()=>[t("付兰永存!")]),_:1}),De,Le,l(n,null,{default:o(()=>[t("*btw")]),_:1})]),footer:o(()=>[l(s(be),{onClick:r[0]||(r[0]=m=>s(_).push("/jokes/fuzeblockisnotagame"))},{default:o(()=>[vn,gn,wn]),_:1})]),default:o(()=>[l(s(Ne),{type:"error"},{default:o(()=>[t(" 亻寸氵睾他失联了 很久很久 我们不知道他咋了还有他哪儿去了以及他为什么走 临走前只说了三两句话"),Ye,Me,t(" 他刚走的差不多一两周 他的原神和QQ都是一直离线状态 而过了这之后他就突然天天在线了 QQ也是 "),Ve,t(' 我以为他已经回来了 但诡异的是无论我发什么他都不吭一声 他唯一一次说话是我们给他打了个语音通话 他回复了"?" 此后便无响应了 '),qe,t(" 没准他遇到了啥事 让他彻彻底底地改变了 亦或啥别的客观因素导致 ")]),_:1}),We,t(" 114514岁, 是带哲学家, 曾在 "),Xe,t(" 上大肆蛊惑式宣传自己的事迹 "),l(n,null,{default:o(()=>[t("(当 代 希 特 勒)")]),_:1}),t(" , 最常见的一句话为 "),He,Qe,t(" , "),Ge,t(" 用来 "),Je,t(" , 打别人个措手不及, 营造一种莫名其妙但好像真的是 "),Ke,t(" 这种手段被称为—————— "),je,l(n,null,{default:o(()=>[t("万 恶 之 源")]),_:1}),t(" ( "),et,t(" ) "),tt,t(' 因头型酷似馒头而得其名, 后又因帝国首领与他磕到嘴并张着大门牙而得名"松鼠", 其母亲亦称其为"懒猫" '),nt,l(s(k),null,{default:o(()=>[t('"Fuze, 你没尊严!"')]),_:1}),l(s(k),null,{default:o(()=>[t('"Fuze, 我们请你吃苹果🍎!"')]),_:1}),l(s(k),null,{default:o(()=>[t('"Fuze, 你没穿衣服!"')]),_:1}),l(s(k),null,{default:o(()=>[t(' "Fuze, 你臃肿!" '),l(n,null,{default:o(()=>[t("实 话 实 说")]),_:1})]),_:1}),l(s(k),null,{default:o(()=>[t('"Fuze, 你无能狂怒!"')]),_:1}),l(s(k),null,{default:o(()=>[t(' "Fuze, 我们是你的 '),lt,t(' " '),l(n,null,{default:o(()=>[t("最 好 的 朋 友")]),_:1})]),_:1}),l(s(k),null,{default:o(()=>[t(' " '),ot,t(' Fuze, 说普通话!" ')]),_:1}),at,l(s(N),{title:"文件一"},{default:o(()=>[t(" 自我认知: 别看疯子了! (主客颠倒 应该是"),st,t(") "),rt,t(' (回头) "疯子!" (微微回头) "疯子!" (不回头) "疯子! 叫你呢疯子!" [对着空气大喊疯子] '),it,t(' "FUZE 咱们现在说哪段呢?" "额" '),ut,t(' "我女儿都会数数了..." '),dt,ct,ft,mt,_t]),_:1}),ht,l(s(N),{title:"文件二"},{default:o(()=>[t(" 通宵到第二天五点 开始睡觉 六点起床上学 "),l(s(x),null,{default:o(()=>[e("i",null,"05:"+S(new Date().getMinutes()<10?`0${new Date().getMinutes()}`:new Date().getMinutes()),1),bt,t(" 哈 "),pt,t(" 哈~~ "),vt,t(" 哈~~~ "),gt,t(" [图片: 可莉] ")]),_:1}),t(" FUZE肝到了第二天早上五点 终于抽出了他心爱的可莉 "),l(s(x),null,{default:o(()=>[t(' "你为什么这么喜欢可莉?" '),wt,t(' "'),yt,t('" [怪强调略显猥琐] '),xt,t(' "... 萝莉控" ')]),_:1}),t(" FUZE给他的可莉装上了四风原典 "),l(s(x),null,{default:o(()=>[t(" [图片: 角色界面的武器栏 可莉托着四风原典 张着口] "),Nt,$t,Et,t(),zt,t(" 反正我不觉得原因这么简单 ")]),_:1}),t(' "蹦蹦炸弹 (╯‵□′)╯炸弹！•••*～● 火力全开~" '),l(s(x),null,{default:o(()=>[Ft,kt,Bt,t(),St,t(' "叫一下人来回答这个问题" "FUZE" '),Ct,t(" FUZE猛地站起来 一脸迷茫 不知所措 "),Rt,t(" 气氛凝结了 王红利拿着书在讲台上看着FUZE FUZE也彷徨地看着她 "),Ut,t(" ...... "),Zt,Tt]),_:1}),t(" 又过了不知多久 似乎以月为单位计量 "),l(s(x),null,{default:o(()=>[t(' "诶呀 废物可莉 '),At,t(' 可莉就是个废物" ')]),_:1}),t(" 唉, 喜新厌旧的萝莉控FUZE 可莉被抛弃了 真悲哀啊可莉 ")]),_:1}),Ot,l(s(N),{title:"文件三"},{default:o(()=>[t(" 好几个小时的JOJO授课 "),l(s(x),null,{default:o(()=>[t(' "人终究是要上天堂的!" '),It,t(' "MADE IN HEAVEN!" '),Pt,t(' "大总统...平行世界...湮灭" '),Dt,t(' "半人马身上有时钟" '),Lt,t(' "出车祸...监狱...替身" '),Yt,Mt,Vt,t(" ...... ")]),_:1}),t(" 日常语音 "),l(s(x),null,{default:o(()=>[t(' "能听到吗?" "喂" "喂" "喂" '),qt,t(' "有.点.笨.电.脑-" '),Wt,t(' "除你语音!" [语音通话已结束] ')]),_:1})]),_:1}),Xt,l(s(N),{title:"文件四"},{default:o(()=>[t(" 父亲 "),l(s(x),null,{default:o(()=>[t(" 谁和FUZE在一起? "),Ht,t(" 告诉FUZE, 他爸爸回来了 "),Qt,t(" @全体成员 "),Gt,t(" 谁和FUZE在一起? "),Jt,t(" 告诉FUZE, 他爸爸回来了 "),Kt,t(" @全体成员 "),jt,t(" ...... "),en,t(" FUZE回来了 ")]),_:1}),t(" 作文解释 "),l(s(x),null,{default:o(()=>[t(" 我的宝贝儿啊，我的天，你 看他的卷子你都没看明白它 写的是什么，他写的是跟妈 妈生气了，摔门而出，完了 之后妈妈并没有出来追她之 后呢，她在路上看到了一个 抱着孩子的妇女，那个女人 身上的衣服很单薄，因为他 把衣服给她怀里的孩子穿上 了，所以。他觉得他其实想 写的就是那个女的，宁可自 己冻着，完了以后饿着他也 不能让自己的孩子受委屈， 完了以后说那个女的病了， 完了之后说打120并没有说 到我，完了之后，他看到这 豆儿啊，这个母亲抱着这个 孩子。他讲很受感动，他觉 得这就是母爱的伟大呀，完 了以后他就决定回家找我， 这是他那个故事，整个笨看 半天都没看懂。 "),tn,nn,ln,t(" 这个主要是怪他那课外班的 语文老师，完了以后有一次 就是说写作文L就跟他说写 好不写坏就是写你写这个人 好看，你不写这个人丑这句 话能听明白吗?也就是说你 写跟你妈关系好，你倒不如 写，跟你妈关系不好，得分 更高，所以误导这个孩子 啦，我的天呐。 "),on,an,sn,t(" 他写作文儿写和我吵架，证 明我们两个人不吵架，也就 是说他写作文写和我吵架 儿，我不生气，如果他写作 文写和别人吵架，比如说和 他爸爸吵架，他可能就不敢 让他爸爸知道，或者他爸爸 看到了可能会跟他生气，明 白了吗?也就是说因为跟我 关系好，所以他可以随便 说。 "),rn,un]),_:1}),t(" 新称号 "),l(s(x),null,{default:o(()=>[t(" 为什么像松鼠呢?我感觉他 像一只猫，尤其是性格非常 像一只猫，懒懒的往那一 躺，完了之后呢，还馋不爱 吃好吃的，比如说汉堡啊披 萨呀，完了之后小鸡腿儿 啊。整天吃好吃的，因为猫 有两个特别的喜庆，一个是 懒，一个是X1说就是懒猫或 者馋猫，没有听说谁说长狗 或者是懒狗，没有吧，基本 上都是懒猫或者是馋猫，所 以FUZE非常符合这两遍。 "),dn,cn]),_:1})]),_:1}),fn,l(s(N),{title:"文件五"},{default:o(()=>[l(s(x),null,{default:o(()=>[t(" [:转圈圈:] "),mn,t(" 去世了 "),_n,t(" 随机一天复活 "),hn,bn]),_:1}),t(" EOF "),l(n,null,{default:o(()=>[t("若你是故意走的 那就滚吧 我们不是柯莱卢基托")]),_:1})]),_:1}),pn]),_:1}),l(s(A)),l(s(N),null,{default:o(()=>[e("video",{style:{"max-width":"100%"},src:s(Ze),controls:"",muted:"",loop:""},null,8,yn)]),_:1}),l(s(A)),l(s(N),{title:"BILIBILI"},{default:o(()=>[e("iframe",{width:"100%",height:"375px",src:"https://space.bilibili.com/1078829483",frameborder:"0",allowfullscreen:"false",allowpaymentrequest:"",referrerpolicy:"origin",onError:r[1]||(r[1]=m=>m.preventDefault())},null,32)]),_:1}),l(s(A)),l(s(N),{title:"生命周期"},{default:o(()=>[l(s(Fe),{"x-scrollable":""},{default:o(()=>[l(Oe,{content:[[[[6,0,0],[7,30,0]],"晨练"],[[[7,30,0],[8,0,0]],"吃早饭"],[[[8,0,0],[10,0,0]],"完成部分作业"],[[[10,0,0],[10,30,0]],"自由活动"],[[[10,30,0],[11,0,0]],"预习物理八上"],[[[11,0,0],[12,0,0]],"完成部分作业"],[[[12,0,0],[14,0,0]],"吃饭、午休"],[[[14,0,0],[16,0,0]],"完成部分作业"],[[[16,0,0],[17,0,0]],"英语听力"],[[[17,0,0],[18,0,0]],"预习数学"],[[[18,0,0],[19,0,0]],"吃饭"],[[[19,0,0],[19,30,0]],"观看新闻、《话说长江》"],[[[19,30,0],[21,30,0]],"预习八上生物、历史、地理、政治"],[[[21,30,0],[22,30,0]],"语文阅读"],[[[22,30,0],[6,0,0]],"睡觉"]]})]),_:1})]),_:1}),l(s(N),{title:"FUZE维度"},{default:o(()=>[l(ye,{sketch:f})]),_:1})],64)}}});typeof M=="function"&&M(xn);export{xn as default};
