import{aw as te,a,b as x,k as b,j as p,d as I,e as W,u as Y,p as ie,h as u,c as ne,ax as oe,ay as re,g as D,i as le,az as F,al as j,n as ae,ap as _,C as se,M as ce,aA as me,r as T,D as de,aB as pe,J as fe,G as y,H as S,P as l,Q as t,I as e,T as k,U as B,aC as ue,aD as he,V as ge,Z as E,aE as $,S as M,a3 as H,F as L,R as V,aF as ve}from"./index-b648a77e.js";import{I as O}from"./render-1391bccb.js";import{N as ye,a as ze}from"./ListItem-f18d61ab.js";import{f as xe}from"./format-length-c9d165c6.js";import{N as be}from"./Space-2466f8a2.js";import{N as _e}from"./text-433395db.js";import{N as P}from"./Scrollbar-ac81dcd5.js";import{N as R,a as we}from"./Tabs-033b35da.js";import{N as Se}from"./headers-120964e5.js";import{N as $e}from"./Thing-84213150.js";import{N as Ce}from"./Icon-9aab0c04.js";import{b as A}from"./route-block-83d24a4e.js";import"./Ellipsis-e217b14d.js";import"./Tooltip-a8d51540.js";import"./cssr-5ca18ccd.js";import"./on-fonts-ready-6f4d157d.js";import"./use-merged-state-716bc3ea.js";import"./use-compitable-9c2cf601.js";import"./VolumeHighOutline-879b26ca.js";import"./ChatboxEllipsesOutline-1bc69d86.js";import"./get-slot-1efb97e5.js";import"./Add-5bd87bbf.js";import"./throttle-58103797.js";import"./toNumber-99f73992.js";let K=!1;function Ne(){if(te&&window.CSS&&!K&&(K=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const U=1.25,Te=a("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${U};
`,[x("horizontal",`
 flex-direction: row;
 `,[b(">",[a("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[x("dashed-line-type",[b(">",[a("timeline-item-timeline",[p("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),b(">",[a("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[b(">",[p("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),a("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[p("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),x("right-placement",[a("timeline-item",[a("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),x("left-placement",[a("timeline-item",[a("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),a("timeline-item-timeline",`
 left: 0;
 `)])]),a("timeline-item",`
 position: relative;
 `,[b("&:last-child",[a("timeline-item-timeline",[p("line",`
 display: none;
 `)]),a("timeline-item-content",[p("meta",`
 margin-bottom: 0;
 `)])]),a("timeline-item-content",[p("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),p("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),p("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),x("dashed-line-type",[a("timeline-item-timeline",[p("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),a("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${U} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[p("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),p("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),p("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ke=Object.assign(Object.assign({},Y.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Z=ne("n-timeline"),Be=I({name:"Timeline",props:ke,setup(n,{slots:m}){const{mergedClsPrefixRef:s}=W(n),c=Y("Timeline","-timeline",Te,oe,n,s);return ie(Z,{props:n,mergedThemeRef:c,mergedClsPrefixRef:s}),()=>{const{value:r}=s;return u("div",{class:[`${r}-timeline`,n.horizontal&&`${r}-timeline--horizontal`,`${r}-timeline--${n.size}-size`,!n.horizontal&&`${r}-timeline--${n.itemPlacement}-placement`]},m)}}}),Pe={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},o=I({name:"TimelineItem",props:Pe,setup(n){const m=ae(Z);m||re("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Ne();const{inlineThemeDisabled:s}=W(),c=D(()=>{const{props:{size:h,iconSize:v},mergedThemeRef:g}=m,{type:z}=n,{self:{titleTextColor:w,contentTextColor:C,metaTextColor:d,lineColor:f,titleFontWeight:i,contentFontSize:N,[_("iconSize",h)]:G,[_("titleMargin",h)]:J,[_("titleFontSize",h)]:Q,[_("circleBorder",z)]:q,[_("iconColor",z)]:X},common:{cubicBezierEaseInOut:ee}}=g.value;return{"--n-bezier":ee,"--n-circle-border":q,"--n-icon-color":X,"--n-content-font-size":N,"--n-content-text-color":C,"--n-line-color":f,"--n-meta-text-color":d,"--n-title-font-size":Q,"--n-title-font-weight":i,"--n-title-margin":J,"--n-title-text-color":w,"--n-icon-size":xe(v)||G}}),r=s?le("timeline-item",D(()=>{const{props:{size:h,iconSize:v}}=m,{type:g}=n;return`${h[0]}${v||"a"}${g[0]}`}),c,m.props):void 0;return{mergedClsPrefix:m.mergedClsPrefixRef,cssVars:s?void 0:c,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){const{mergedClsPrefix:n,color:m,onRender:s,$slots:c}=this;return s==null||s(),u("div",{class:[`${n}-timeline-item`,this.themeClass,`${n}-timeline-item--${this.type}-type`,`${n}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},u("div",{class:`${n}-timeline-item-timeline`},u("div",{class:`${n}-timeline-item-timeline__line`}),F(c.icon,r=>r?u("div",{class:`${n}-timeline-item-timeline__icon`,style:{color:m}},r):u("div",{class:`${n}-timeline-item-timeline__circle`,style:{borderColor:m}}))),u("div",{class:`${n}-timeline-item-content`},F(c.header,r=>r||this.title?u("div",{class:`${n}-timeline-item-content__title`},r||this.title):null),u("div",{class:`${n}-timeline-item-content__content`},j(c.default,()=>[this.content])),u("div",{class:`${n}-timeline-item-content__meta`},j(c.footer,()=>[this.time]))))}}),Re=V("span",{style:{"font-size":"6vw","word-break":"break-all"}},"黑暗",-1),Ie=V("span",{style:{"font-size":"6vw","word-break":"break-all"}},"光明",-1),Ve={style:{overflow:"auto",padding:"12px"}},De=I({__name:"props",setup(n){const m=se(),s=ce(m),c=s.theme;s.sidebar;const r=s.achievements.value.map(d=>me(d)),h=T("default"),v=T("default"),g=T([]),z=d=>{c.value=d,w()},w=()=>{h.value=c.value===$.dark?"primary":"default",v.value=c.value===$.light?"primary":"default"};de(()=>{w(),pe.get("timeline").then(d=>g.value=d.filter(f=>f.title.length>0||f.text.length>0).map(f=>fe.defaults(f,{title:"",text:"",dashed:!1,time:"",type:"default"}))).catch(d=>g.value=[])});const C=new Date().getFullYear();return(d,f)=>(y(),S(e(we),{type:"line",animated:""},{default:l(()=>[t(e(R),{name:"设置"},{default:l(()=>[t(e(be),{vertical:""},{default:l(()=>[t(e(_e),{depth:"3"},{default:l(()=>[k(B(`${e(ue)}-${e(he)}`)+" · Vue框架 · 2022-"+B(e(C)),1)]),_:1}),t(e(ge),{title:"主题",hoverable:""},{default:l(()=>[t(e(E),{onClick:f[0]||(f[0]=i=>z(e($).dark)),type:h.value,style:{width:"50%",height:"20vh"}},{default:l(()=>[t(e(P),{"x-scrollable":""},{default:l(()=>[Re]),_:1})]),_:1},8,["type"]),t(e(E),{onClick:f[1]||(f[1]=i=>z(e($).light)),type:v.value,style:{width:"50%",height:"20vh"}},{default:l(()=>[t(e(P),{"x-scrollable":""},{default:l(()=>[Ie]),_:1})]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(R),{name:"成就"},{default:l(()=>[t(e(P),{"x-scrollable":"",trigger:"none"},{default:l(()=>[t(e(ye),{hoverable:"",clickable:""},{default:l(()=>[(y(!0),M(L,null,H(e(r),(i,N)=>(y(),S(e(ze),{key:N},{default:l(()=>[t(e($e),{"content-style":"margin-top: 10px;",title:d.$texta.get(`achievements.${(i==null?void 0:i.title)||"unknownTitle"}`),description:d.$texta.get(`achievements.${(i==null?void 0:i.description)||"unknownDescription"}`)},{"header-extra":l(()=>[k(B(d.$texta.get(["views","jokes","props","achievements",(i==null?void 0:i.type)||"undefined"])),1)]),avatar:l(()=>[t(e(Ce),{size:"50",color:(i==null?void 0:i.type)==="fantastic"?"orange":"rgb(36,204,255)"},{default:l(()=>[(y(),S(ve(e(O)[i&&i.icon&&i.icon in e(O)?i.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(e(R),{name:"后记"},{default:l(()=>[t(e(Se),null,{default:l(()=>[k("大 时 间 线")]),_:1}),V("div",Ve,[t(e(Be),null,{default:l(()=>[t(e(o),{type:"info","line-type":"dashed",title:"换群",content:"仙人掌保护协会被封了",time:"2021/3/11"}),t(e(o),{type:"info","line-type":"dashed",title:"Discord",content:"最初账号",time:"2021/10/28"}),t(e(o),{type:"info","line-type":"dashed",title:"日炎",content:"问世",time:"2021/10/31"}),t(e(o),{type:"info","line-type":"dashed",title:"开始卖惨",content:"与柯莱首条Discord",time:"2022/1/28 20:01"}),t(e(o),{type:"info","line-type":"dashed",title:"《广义相遇论》",content:"出版印刷",time:"2022/1/29 19:02:25"}),t(e(o),{type:"success",title:"出生了",content:"第三版大图书馆",time:"2022/4/1"}),t(e(o),{type:"info",title:"亻寸氵睾",content:"灵魂完工了",time:"2022/4/20"}),t(e(o),{type:"info",title:"格拉迪斯与柯莱",content:"新增俩卖惨乐子",time:"2022/5/4"}),t(e(o),{type:"info",title:"大更新一",content:"更新了一堆(我也不知道具体是啥)",time:"2022/6/14"}),t(e(o),{type:"info",title:"大更新二",content:"更新了114514个(日志这么写的..)",time:"2022/7/8"}),t(e(o),{type:"error",title:"亻寸氵睾的消失",content:"FUZE在此彻底失联",time:"2022/7/16 16:25"}),t(e(o),{type:"warning",title:"提问",content:"这日志的意义是啥呢.",time:"2022/7/26"}),t(e(o),{type:"info",title:"大更新三",content:"个口,神女,联合国!",time:"2022/8/3"}),t(e(o),{type:"error",title:"三年的句号",content:"与三年告个别吧",time:"2022/9/1"}),t(e(o),{type:"info",title:"大更新四",content:"扁平化喽",time:"2022/10/9"}),t(e(o),{type:"info",title:"大更新五",content:"如你所见..",time:"2022/11/?"}),t(e(o),{type:"error",title:"最后的卖惨",content:"与柯莱维持了小一年后彻底断绝",time:"2022/12/12"}),t(e(o),{type:"info",title:"大更新六",content:"凹冈嗖浪",time:"2022/12/13"}),t(e(o),{type:"info",title:"大更新",content:"很多",time:"2023/5/7"}),(y(!0),M(L,null,H(g.value,i=>(y(),S(e(o),{type:i.type,"line-type":i.dashed?"dashed":"default",title:i.title,content:i.text,time:i.time},null,8,["type","line-type","title","content","time"]))),256))]),_:1})])]),_:1})]),_:1}))}});typeof A=="function"&&A(De);export{De as default};
