import{au as ie,a,b,k as _,j as d,d as I,e as G,u as J,p as ne,h as f,c as oe,av as re,aw as le,g as V,i as ae,ax as j,aj as F,n as se,an as w,C as ce,ay as me,az as de,r as B,D as pe,aA as ue,J as fe,G as y,H as S,M as o,O as t,I as e,R as z,S as L,X as he,W as E,aB as $,Q as H,a1 as M,F as O,P as D,T as ge,aC as ve}from"./index-5231cf4b.js";import{I as A}from"./render-ba076f4f.js";import{N as ye,a as ze,b as xe}from"./text-6a391132.js";import{f as be}from"./format-length-c9d165c6.js";import{N as K,b as _e}from"./headers-e838155b.js";import{N as we}from"./Space-c3572523.js";import{N as P}from"./Scrollbar-ab045e5a.js";import{N as R,a as Ce}from"./Tabs-8eb1d323.js";import{N as Se}from"./Thing-4df61de6.js";import{N as $e}from"./Icon-0c067266.js";import{b as U}from"./route-block-83d24a4e.js";import"./Ellipsis-ead71d78.js";import"./Tooltip-c36b84ce.js";import"./cssr-bb1b2fe9.js";import"./on-fonts-ready-c27071a5.js";import"./use-merged-state-0dddec03.js";import"./use-compitable-ba055720.js";import"./VolumeHighOutline-8f598736.js";import"./ChatboxEllipsesOutline-86fe5155.js";import"./get-slot-1efb97e5.js";import"./Add-5fa6f9ea.js";import"./throttle-a2567f7c.js";import"./toNumber-811846e4.js";let W=!1;function Te(){if(ie&&window.CSS&&!W&&(W=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const Y=1.25,Ne=a("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${Y};
`,[b("horizontal",`
 flex-direction: row;
 `,[_(">",[a("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[b("dashed-line-type",[_(">",[a("timeline-item-timeline",[d("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),_(">",[a("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[_(">",[d("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),a("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[d("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),b("right-placement",[a("timeline-item",[a("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),b("left-placement",[a("timeline-item",[a("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 left: 0;
 `)])]),a("timeline-item",`
 position: relative;
 `,[_("&:last-child",[a("timeline-item-timeline",[d("line",`
 display: none;
 `)]),a("timeline-item-content",[d("meta",`
 margin-bottom: 0;
 `)])]),a("timeline-item-content",[d("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),d("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),d("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),b("dashed-line-type",[a("timeline-item-timeline",[d("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),a("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${Y} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[d("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),d("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),d("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ke=Object.assign(Object.assign({},J.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Q=oe("n-timeline"),Be=I({name:"Timeline",props:ke,setup(n,{slots:m}){const{mergedClsPrefixRef:s}=G(n),c=J("Timeline","-timeline",Ne,re,n,s);return ne(Q,{props:n,mergedThemeRef:c,mergedClsPrefixRef:s}),()=>{const{value:r}=s;return f("div",{class:[`${r}-timeline`,n.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${n.size}-size`,!n.horizontal&&`${r}-timeline--${n.itemPlacement}-placement`]},m)}}}),Pe={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},l=I({name:"TimelineItem",props:Pe,setup(n){const m=se(Q);m||le("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Te();const{inlineThemeDisabled:s}=G(),c=V(()=>{const{props:{size:h,iconSize:v},mergedThemeRef:g}=m,{type:x}=n,{self:{titleTextColor:C,contentTextColor:T,metaTextColor:p,lineColor:u,titleFontWeight:N,contentFontSize:i,[w("iconSize",h)]:k,[w("titleMargin",h)]:X,[w("titleFontSize",h)]:Z,[w("circleBorder",x)]:q,[w("iconColor",x)]:ee},common:{cubicBezierEaseInOut:te}}=g.value;return{"--n-bezier":te,"--n-circle-border":q,"--n-icon-color":ee,"--n-content-font-size":i,"--n-content-text-color":T,"--n-line-color":u,"--n-meta-text-color":p,"--n-title-font-size":Z,"--n-title-font-weight":N,"--n-title-margin":X,"--n-title-text-color":C,"--n-icon-size":be(v)||k}}),r=s?ae("timeline-item",V(()=>{const{props:{size:h,iconSize:v}}=m,{type:g}=n;return`${h[0]}${v||"a"}${g[0]}`}),c,m.props):void 0;return{mergedClsPrefix:m.mergedClsPrefixRef,cssVars:s?void 0:c,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:n,color:m,onRender:s,$slots:c}=this;return s==null||s(),f("div",{class:[`${n}-timeline-item`,this.themeClass,`${n}-timeline-item--${this.type}-type`,`${n}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},f("div",{class:`${n}-timeline-item-timeline`},f("div",{class:`${n}-timeline-item-timeline__line`}),j(c.icon,r=>r?f("div",{class:`${n}-timeline-item-timeline__icon`,style:{color:m}},r):f("div",{class:`${n}-timeline-item-timeline__circle`,style:{borderColor:m}}))),f("div",{class:`${n}-timeline-item-content`},j(c.header,r=>r||this.title?f("div",{class:`${n}-timeline-item-content__title`},r||this.title):null),f("div",{class:`${n}-timeline-item-content__content`},F(c.default,()=>[this.content])),f("div",{class:`${n}-timeline-item-content__meta`},F(c.footer,()=>[this.time]))))}}),Re=D("span",{style:{"font-size":"6vw","word-break":"break-all"}},"黑暗",-1),Ie=D("span",{style:{"font-size":"6vw","word-break":"break-all"}},"光明",-1),De={style:{overflow:"auto",padding:"12px"}},Ve=I({__name:"props",setup(n){const m=ce(),s=me(m),c=s.theme;s.sidebar;const r=s.achievements.value.map(p=>de(p)),h=B("default"),v=B("default"),g=B([]),x=p=>{c.value=p,C()},C=()=>{h.value=c.value===$.dark?"primary":"default",v.value=c.value===$.light?"primary":"default"};pe(()=>{C(),ue.get("timeline").then(p=>g.value=p.filter(u=>u.title.length>0||u.text.length>0).map(u=>fe.defaults(u,{title:"",text:"",dashed:!1,time:"",type:"default"}))).catch(p=>g.value=[])});const T=new Date().getFullYear();return(p,u)=>{const N=ge("UpdateLog");return y(),S(e(Ce),{type:"line",animated:""},{default:o(()=>[t(e(R),{name:"设置"},{default:o(()=>[t(e(we),{vertical:""},{default:o(()=>[t(e(ye),{depth:"3"},{default:o(()=>[z(" Bstnmnhss 3 · Vue技术支持 · 2022-"+L(e(T)),1)]),_:1}),t(e(he),{title:"主题",hoverable:""},{default:o(()=>[t(e(E),{onClick:u[0]||(u[0]=i=>x(e($).dark)),type:h.value,style:{width:"50%",height:"20vh"}},{default:o(()=>[t(e(P),{"x-scrollable":""},{default:o(()=>[Re]),_:1})]),_:1},8,["type"]),t(e(E),{onClick:u[1]||(u[1]=i=>x(e($).light)),type:v.value,style:{width:"50%",height:"20vh"}},{default:o(()=>[t(e(P),{"x-scrollable":""},{default:o(()=>[Ie]),_:1})]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(R),{name:"成就"},{default:o(()=>[t(e(P),{"x-scrollable":"",trigger:"none"},{default:o(()=>[t(e(ze),{hoverable:"",clickable:""},{default:o(()=>[(y(!0),H(O,null,M(e(r),(i,k)=>(y(),S(e(xe),{key:k},{default:o(()=>[t(e(Se),{"content-style":"margin-top: 10px;",title:p.$texta.get(`achievements.${(i==null?void 0:i.title)||"unknownTitle"}`),description:p.$texta.get(`achievements.${(i==null?void 0:i.description)||"unknownDescription"}`)},{"header-extra":o(()=>[z(L((i==null?void 0:i.type)||"undefined"),1)]),avatar:o(()=>[t(e($e),{size:"50",color:(i==null?void 0:i.type)==="fantastic"?"orange":"rgb(36,204,255)"},{default:o(()=>[(y(),S(ve(e(A)[i&&i.icon&&i.icon in e(A)?i.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(e(R),{name:"后记"},{default:o(()=>[t(N),t(e(K),null,{default:o(()=>[z("大 时 间 线")]),_:1}),D("div",De,[t(e(Be),{horizontal:""},{default:o(()=>[t(e(l),{type:"info","line-type":"dashed",title:"换群",content:"仙人掌保护协会被封了",time:"2021/3/11"}),t(e(l),{type:"info","line-type":"dashed",title:"Discord",content:"最初账号",time:"2021/10/28"}),t(e(l),{type:"info","line-type":"dashed",title:"日炎",content:"问世",time:"2021/10/31"}),t(e(l),{type:"info","line-type":"dashed",title:"开始卖惨",content:"与柯莱首条Discord",time:"2022/1/28 20:01"}),t(e(l),{type:"info","line-type":"dashed",title:"《广义相遇论》",content:"出版印刷",time:"2022/1/29 19:02:25"}),t(e(l),{type:"success",title:"出生了",content:"第三版大图书馆",time:"2022/4/1"}),t(e(l),{type:"info",title:"亻寸氵睾",content:"灵魂完工了",time:"2022/4/20"}),t(e(l),{type:"info",title:"格拉迪斯与柯莱",content:"新增俩卖惨乐子",time:"2022/5/4"}),t(e(l),{type:"info",title:"大更新一",content:"更新了一堆(我也不知道具体是啥)",time:"2022/6/14"}),t(e(l),{type:"info",title:"大更新二",content:"更新了114514个(日志这么写的..)",time:"2022/7/8"}),t(e(l),{type:"error",title:"亻寸氵睾的消失",content:"FUZE在此彻底失联",time:"2022/7/16 16:25"}),t(e(l),{type:"warning",title:"提问",content:"这日志的意义是啥呢.",time:"2022/7/26"}),t(e(l),{type:"info",title:"大更新三",content:"个口,神女,联合国!",time:"2022/8/3"}),t(e(l),{type:"error",title:"三年的句号",content:"与三年告个别吧",time:"2022/9/1"}),t(e(l),{type:"info",title:"大更新四",content:"扁平化喽",time:"2022/10/9"}),t(e(l),{type:"info",title:"大更新五",content:"如你所见..",time:"2022/11/?"}),t(e(l),{type:"error",title:"最后的卖惨",content:"与柯莱维持了小一年后彻底断绝",time:"2022/12/12"}),t(e(l),{type:"info",title:"大更新六",content:"凹冈嗖浪",time:"2022/12/13"}),(y(!0),H(O,null,M(g.value,i=>(y(),S(e(l),{type:i.type,"line-type":i.dashed?"dashed":"default",title:i.title,content:i.text,time:i.time},null,8,["type","line-type","title","content","time"]))),256))]),_:1})]),t(e(K),null,{default:o(()=>[z(" 荡然无存 后会无期 ")]),_:1}),t(e(_e),null,{default:o(()=>[z(" 凹冈嗖浪")]),_:1}),z(" 丅廾巨尺巨 丨丂 冂口 从口尺巨 凵尸刀亼丅巨 冂口丅巨丂 日巨匚亼凵丂巨 丨 廾亼丅巨 丨丅 亼冂刀 冂口 口冂巨 匚亼尺巨 亼日口凵丅 丨丅 亼冂丫从口尺巨 丨丅 日巨匚亼从巨 亼 丫亼冂刀巨尺巨 日凵丅 丨 刀口冂丅 匚亼尺巨 丂丅丨厶厶 丅廾巨冂 丨丅 丂凵丨匚丨刀巨 亼冂刀 日巨匚亼从巨 亼 巳廾口丂丅 亼尺口凵冂刀 从巨 巨匕巨尺丫刀亼丫 日凵丅 丨 丂丅丨厶厶 刀口 冂口丅 丂匚亼尺巨 口彳 丨丅 日巨匚亼凵丂巨 丨丅 丅廾巨 口冂巨 口冂巨 彳口凵尺 彳丨匕巨 口冂巨 彳口凵尺 丫巨亼廾 丂口 丨丅 亼厶厶 巳口冂巨 丅廾巨冂 丨 廾亼匕巨 冂口 匚廾口丨匚巨 日凵丅 丂口 厶口冂巳 ")]),_:1})]),_:1})}}});typeof U=="function"&&U(Ve);export{Ve as default};
