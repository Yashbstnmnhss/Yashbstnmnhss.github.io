import{aq as ie,q as a,E as b,t as _,s as d,d as I,w as Y,x as Z,K as ne,h as u,_ as oe,cL as re,y as le,aw as ae,c as D,A as se,L as V,P as E,C as w,aE as ce,cM as me,cN as de,r as B,a as pe,cO as fe,aJ as ue,aB as y,aO as S,aL as n,aK as t,aM as e,aN as z,aR as F,cl as he,ak as M,cP as $,aC as j,aP as H,Z as K,aD as L,ci as ge,cQ as ve}from"./index-0642acdb.js";import{N as ye,_ as ze,a as xe}from"./kazuha.vue_vue_type_style_index_0_lang-5f4c20b2.js";import{f as be}from"./format-length-c9d165c6.js";import{N as O,b as _e}from"./headers-b89102e2.js";import{N as we}from"./Space-65186afa.js";import{N as Ce}from"./text-279eaffb.js";import{N as R}from"./Scrollbar-25fe67d0.js";import{N,a as Se}from"./Tabs-48c2b715.js";import{N as $e}from"./Thing-c08ca9cc.js";import{N as Ne}from"./Icon-a246dc1f.js";import{I as U}from"./render-7bd25462.js";import{b as A}from"./route-block-83d24a4e.js";import"./use-message-4f6d6f1b.js";import"./use-locale-100b8003.js";import"./use-merged-state-1d0c7ec5.js";import"./use-compitable-c8959c00.js";import"./Tag-17c9f95e.js";import"./cssr-111fac1c.js";import"./Tooltip-2abf0c46.js";import"./on-fonts-ready-e64e9c77.js";import"./attribute-2ee9e579.js";import"./ChatboxEllipsesOutline-b641dceb.js";import"./Spin-5aeb7344.js";import"./use-collection-46a2491c.js";import"./Add-d1b5b739.js";import"./BackTop-ae3b4b27.js";import"./Ellipsis-695173a0.js";import"./throttle-59df5985.js";import"./toNumber-e06d5cb0.js";import"./VolumeHighOutline-3280ac6c.js";let q=!1;function Te(){if(ie&&window.CSS&&!q&&(q=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const W=1.25,ke=a("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${W};
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
 top: calc(var(--n-title-font-size) * ${W} / 2 - var(--n-icon-size) / 2);
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
 `)])])]),Pe=Object.assign(Object.assign({},Z.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),J=oe("n-timeline"),Be=I({name:"Timeline",props:Pe,setup(i,{slots:m}){const{mergedClsPrefixRef:s}=Y(i),c=Z("Timeline","-timeline",ke,re,i,s);return ne(J,{props:i,mergedThemeRef:c,mergedClsPrefixRef:s}),()=>{const{value:o}=s;return u("div",{class:[`${o}-timeline`,i.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${i.size}-size`,!i.horizontal&&`${o}-timeline--${i.itemPlacement}-placement`]},m)}}}),Re={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},r=I({name:"TimelineItem",props:Re,setup(i){const m=le(J);m||ae("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Te();const{inlineThemeDisabled:s}=Y(),c=D(()=>{const{props:{size:h,iconSize:v},mergedThemeRef:g}=m,{type:x}=i,{self:{titleTextColor:C,contentTextColor:T,metaTextColor:p,lineColor:f,titleFontWeight:k,contentFontSize:l,[w("iconSize",h)]:P,[w("titleMargin",h)]:Q,[w("titleFontSize",h)]:G,[w("circleBorder",x)]:X,[w("iconColor",x)]:ee},common:{cubicBezierEaseInOut:te}}=g.value;return{"--n-bezier":te,"--n-circle-border":X,"--n-icon-color":ee,"--n-content-font-size":l,"--n-content-text-color":T,"--n-line-color":f,"--n-meta-text-color":p,"--n-title-font-size":G,"--n-title-font-weight":k,"--n-title-margin":Q,"--n-title-text-color":C,"--n-icon-size":be(v)||P}}),o=s?se("timeline-item",D(()=>{const{props:{size:h,iconSize:v}}=m,{type:g}=i;return`${h[0]}${v||"a"}${g[0]}`}),c,m.props):void 0;return{mergedClsPrefix:m.mergedClsPrefixRef,cssVars:s?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:i,color:m,onRender:s,$slots:c}=this;return s==null||s(),u("div",{class:[`${i}-timeline-item`,this.themeClass,`${i}-timeline-item--${this.type}-type`,`${i}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},u("div",{class:`${i}-timeline-item-timeline`},u("div",{class:`${i}-timeline-item-timeline__line`}),V(c.icon,o=>o?u("div",{class:`${i}-timeline-item-timeline__icon`,style:{color:m}},o):u("div",{class:`${i}-timeline-item-timeline__circle`,style:{borderColor:m}}))),u("div",{class:`${i}-timeline-item-content`},V(c.header,o=>o||this.title?u("div",{class:`${i}-timeline-item-content__title`},o||this.title):null),u("div",{class:`${i}-timeline-item-content__content`},E(c.default,()=>[this.content])),u("div",{class:`${i}-timeline-item-content__meta`},E(c.footer,()=>[this.time]))))}}),Ie=L("span",{style:{"font-size":"6vw","word-break":"break-all"}},"黑暗",-1),Le=L("span",{style:{"font-size":"6vw","word-break":"break-all"}},"光明",-1),De={style:{overflow:"auto",padding:"12px"}},Ve=I({__name:"props",setup(i){const m=ce(),s=me(m),c=s.theme;s.sidebar;const o=s.achievements.value.map(p=>de(p)),h=B("default"),v=B("default"),g=B([]),x=p=>{c.value=p,C()},C=()=>{h.value=c.value===$.dark?"primary":"default",v.value=c.value===$.light?"primary":"default"};pe(()=>{C(),fe.get("timeline").then(p=>g.value=p.filter(f=>f.title.length>0||f.text.length>0).map(f=>ue(f,{title:"",text:"",dashed:!1,time:"",type:"default"}))).catch(p=>g.value=[])});const T=new Date().getFullYear();return(p,f)=>{const k=ge("UpdateLog");return y(),S(e(Se),{type:"line",animated:""},{default:n(()=>[t(e(N),{name:"设置"},{default:n(()=>[t(e(we),{vertical:""},{default:n(()=>[t(e(Ce),{depth:"3"},{default:n(()=>[z(" Bstnmnhss 3 · Vue技术支持 · 2022-"+F(e(T)),1)]),_:1}),t(e(he),{title:"主题",hoverable:""},{default:n(()=>[t(e(M),{onClick:f[0]||(f[0]=l=>x(e($).dark)),type:h.value,style:{width:"50%",height:"20vh"}},{default:n(()=>[t(e(R),{"x-scrollable":""},{default:n(()=>[Ie]),_:1})]),_:1},8,["type"]),t(e(M),{onClick:f[1]||(f[1]=l=>x(e($).light)),type:v.value,style:{width:"50%",height:"20vh"}},{default:n(()=>[t(e(R),{"x-scrollable":""},{default:n(()=>[Le]),_:1})]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(N),{name:"成就"},{default:n(()=>[t(e(R),{"x-scrollable":"",trigger:"none"},{default:n(()=>[t(e(ye),{hoverable:"",clickable:""},{default:n(()=>[(y(!0),j(K,null,H(e(o),(l,P)=>(y(),S(e(xe),{key:P},{default:n(()=>[t(e($e),{"content-style":"margin-top: 10px;",title:p.$texta.get(`achievements.${l.title||"unknownTitle"}`),description:p.$texta.get(`achievements.${l.description||"unknownDescription"}`)},{"header-extra":n(()=>[z(F(l.type),1)]),avatar:n(()=>[t(e(Ne),{size:"50",color:l.type==="fantastic"?"orange":"rgb(36,204,255)"},{default:n(()=>[(y(),S(ve(e(U)[l.icon&&l.icon in e(U)?l.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(e(N),{name:"冷吟闲醉"},{default:n(()=>[t(ze)]),_:1}),t(e(N),{name:"后记"},{default:n(()=>[t(k),t(e(O),null,{default:n(()=>[z("大 时 间 线")]),_:1}),L("div",De,[t(e(Be),{horizontal:""},{default:n(()=>[t(e(r),{type:"info","line-type":"dashed",title:"换群",content:"仙人掌保护协会被封了",time:"2021/3/11"}),t(e(r),{type:"info","line-type":"dashed",title:"Discord",content:"最初账号",time:"2021/10/28"}),t(e(r),{type:"info","line-type":"dashed",title:"日炎",content:"问世",time:"2021/10/31"}),t(e(r),{type:"info","line-type":"dashed",title:"开始卖惨",content:"与柯莱首条Discord",time:"2022/1/28 20:01"}),t(e(r),{type:"info","line-type":"dashed",title:"《广义相遇论》",content:"出版印刷",time:"2022/1/29 19:02:25"}),t(e(r),{type:"success",title:"出生了",content:"第三版大图书馆",time:"2022/4/1"}),t(e(r),{type:"info",title:"亻寸氵睾",content:"灵魂完工了",time:"2022/4/20"}),t(e(r),{type:"info",title:"格拉迪斯与柯莱",content:"新增俩卖惨乐子",time:"2022/5/4"}),t(e(r),{type:"info",title:"大更新一",content:"更新了一堆(我也不知道具体是啥)",time:"2022/6/14"}),t(e(r),{type:"info",title:"大更新二",content:"更新了114514个(日志这么写的..)",time:"2022/7/8"}),t(e(r),{type:"error",title:"亻寸氵睾的消失",content:"FUZE在此彻底失联",time:"2022/7/16 16:25"}),t(e(r),{type:"warning",title:"提问",content:"这日志的意义是啥呢.",time:"2022/7/26"}),t(e(r),{type:"info",title:"大更新三",content:"个口,神女,联合国!",time:"2022/8/3"}),t(e(r),{type:"error",title:"三年的句号",content:"与三年告个别吧",time:"2022/9/1"}),t(e(r),{type:"info",title:"大更新四",content:"扁平化喽",time:"2022/10/9"}),t(e(r),{type:"info",title:"大更新五",content:"如你所见..",time:"2022/11/?"}),t(e(r),{type:"error",title:"最后的卖惨",content:"与柯莱维持了小一年后彻底断绝",time:"2022/12/12"}),t(e(r),{type:"info",title:"大更新六",content:"凹冈嗖浪",time:"2022/12/13"}),(y(!0),j(K,null,H(g.value,l=>(y(),S(e(r),{type:l.type,"line-type":l.dashed?"dashed":"default",title:l.title,content:l.text,time:l.time},null,8,["type","line-type","title","content","time"]))),256))]),_:1})]),t(e(O),null,{default:n(()=>[z(" 荡然无存 后会无期 ")]),_:1}),t(e(_e),null,{default:n(()=>[z(" 凹冈嗖浪")]),_:1}),z(" 丅廾巨尺巨 丨丂 冂口 从口尺巨 凵尸刀亼丅巨 冂口丅巨丂 日巨匚亼凵丂巨 丨 廾亼丅巨 丨丅 亼冂刀 冂口 口冂巨 匚亼尺巨 亼日口凵丅 丨丅 亼冂丫从口尺巨 丨丅 日巨匚亼从巨 亼 丫亼冂刀巨尺巨 日凵丅 丨 刀口冂丅 匚亼尺巨 丂丅丨厶厶 丅廾巨冂 丨丅 丂凵丨匚丨刀巨 亼冂刀 日巨匚亼从巨 亼 巳廾口丂丅 亼尺口凵冂刀 从巨 巨匕巨尺丫刀亼丫 日凵丅 丨 丂丅丨厶厶 刀口 冂口丅 丂匚亼尺巨 口彳 丨丅 日巨匚亼凵丂巨 丨丅 丅廾巨 口冂巨 口冂巨 彳口凵尺 彳丨匕巨 口冂巨 彳口凵尺 丫巨亼廾 丂口 丨丅 亼厶厶 巳口冂巨 丅廾巨冂 丨 廾亼匕巨 冂口 匚廾口丨匚巨 日凵丅 丂口 厶口冂巳 ")]),_:1})]),_:1})}}});typeof A=="function"&&A(Ve);export{Ve as default};
