import{aL as ae,k as x,a as l,b as g,j as c,ax as se,ay as ce,d as k,e as O,an as de,u as N,p as ee,t as me,g as F,i as te,h as p,c as ie,aM as pe,n as oe,aN as ne,aO as ve,aP as U,ap as W,at as C,C as ue,M as fe,aQ as he,r as j,G as ge,aR as be,L as xe,I as _,J as S,P as m,Q as i,K as e,U as L,V as M,aS as ye,aT as ze,W as _e,Z as A,aU as T,T as Q,a4 as Y,F as Z,R as K,aV as $e}from"./index-f75098fd.js";import{I as G}from"./render-7c402a76.js";import{f as we}from"./format-length-c9d165c6.js";import{N as Ce}from"./Space-694234ca.js";import{N as ke}from"./text-bf23348c.js";import{N as E}from"./Scrollbar-5c070a6a.js";import{N as H,a as Se}from"./Tabs-92338e7f.js";import{N as Te}from"./headers-83e04215.js";import{N as Ne}from"./Thing-0b9eb8c5.js";import{N as Re}from"./Icon-2b26e2bc.js";import{b as J}from"./route-block-83d24a4e.js";import"./Ellipsis-7bb532a7.js";import"./Tooltip-3c68f5d7.js";import"./cssr-05e17a4c.js";import"./on-fonts-ready-d6f1a91e.js";import"./use-merged-state-b10dd123.js";import"./use-compitable-46158255.js";import"./VolumeHighOutline-8eeb3589.js";import"./get-slot-1efb97e5.js";import"./throttle-0ff44575.js";import"./toNumber-bdc24856.js";let q=!1;function Pe(){if(ae&&window.CSS&&!q&&(q=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const Be=x([l("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[g("show-divider",[l("list-item",[x("&:not(:last-child)",[c("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),g("clickable",[l("list-item",`
 cursor: pointer;
 `)]),g("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),g("hoverable",[l("list-item",`
 border-radius: var(--n-border-radius);
 `,[x("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[c("divider",`
 background-color: transparent;
 `)])])]),g("bordered, hoverable",[l("list-item",`
 padding: 12px 20px;
 `),c("header, footer",`
 padding: 12px 20px;
 `)]),c("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[x("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),l("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[c("prefix",`
 margin-right: 20px;
 flex: 0;
 `),c("suffix",`
 margin-left: 20px;
 flex: 0;
 `),c("main",`
 flex: 1;
 `),c("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),se(l("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ce(l("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),De=Object.assign(Object.assign({},N.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),re=ie("n-list"),Ie=k({name:"List",props:De,setup(t){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:d}=O(t),a=de("List",d,o),h=N("List","-list",Be,pe,t,o);ee(re,{showDividerRef:me(t,"showDivider"),mergedClsPrefixRef:o});const b=F(()=>{const{common:{cubicBezierEaseInOut:y},self:{fontSize:z,textColor:$,color:u,colorModal:f,colorPopover:n,borderColor:w,borderColorModal:R,borderColorPopover:P,borderRadius:B,colorHover:D,colorHoverModal:I,colorHoverPopover:V}}=h.value;return{"--n-font-size":z,"--n-bezier":y,"--n-text-color":$,"--n-color":u,"--n-border-radius":B,"--n-border-color":w,"--n-border-color-modal":R,"--n-border-color-popover":P,"--n-color-modal":f,"--n-color-popover":n,"--n-color-hover":D,"--n-color-hover-modal":I,"--n-color-hover-popover":V}}),v=r?te("list",void 0,b,t):void 0;return{mergedClsPrefix:o,rtlEnabled:a,cssVars:r?void 0:b,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender}},render(){var t;const{$slots:o,mergedClsPrefix:r,onRender:d}=this;return d==null||d(),p("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},o.header?p("div",{class:`${r}-list__header`},o.header()):null,(t=o.default)===null||t===void 0?void 0:t.call(o),o.footer?p("div",{class:`${r}-list__footer`},o.footer()):null)}}),Ve=k({name:"ListItem",setup(){const t=oe(re,null);return t||ne("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:t.showDividerRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){const{$slots:t,mergedClsPrefix:o}=this;return p("li",{class:`${o}-list-item`},t.prefix?p("div",{class:`${o}-list-item__prefix`},t.prefix()):null,t.default?p("div",{class:`${o}-list-item__main`},t):null,t.suffix?p("div",{class:`${o}-list-item__suffix`},t.suffix()):null,this.showDivider&&p("div",{class:`${o}-list-item__divider`}))}}),X=1.25,je=l("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${X};
`,[g("horizontal",`
 flex-direction: row;
 `,[x(">",[l("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[g("dashed-line-type",[x(">",[l("timeline-item-timeline",[c("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),x(">",[l("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[x(">",[c("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),l("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[c("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),g("right-placement",[l("timeline-item",[l("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),g("left-placement",[l("timeline-item",[l("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),l("timeline-item-timeline",`
 left: 0;
 `)])]),l("timeline-item",`
 position: relative;
 `,[x("&:last-child",[l("timeline-item-timeline",[c("line",`
 display: none;
 `)]),l("timeline-item-content",[c("meta",`
 margin-bottom: 0;
 `)])]),l("timeline-item-content",[c("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),c("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),c("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),g("dashed-line-type",[l("timeline-item-timeline",[c("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),l("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${X} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[c("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),c("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),c("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),Le=Object.assign(Object.assign({},N.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),le=ie("n-timeline"),Me=k({name:"Timeline",props:Le,setup(t,{slots:o}){const{mergedClsPrefixRef:r}=O(t),d=N("Timeline","-timeline",je,ve,t,r);return ee(le,{props:t,mergedThemeRef:d,mergedClsPrefixRef:r}),()=>{const{value:a}=r;return p("div",{class:[`${a}-timeline`,t.horizontal&&`${a}-timeline--horizontal`,`${a}-timeline--${t.size}-size`,!t.horizontal&&`${a}-timeline--${t.itemPlacement}-placement`]},o)}}}),Ee={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},s=k({name:"TimelineItem",props:Ee,setup(t){const o=oe(le);o||ne("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Pe();const{inlineThemeDisabled:r}=O(),d=F(()=>{const{props:{size:h,iconSize:b},mergedThemeRef:v}=o,{type:y}=t,{self:{titleTextColor:z,contentTextColor:$,metaTextColor:u,lineColor:f,titleFontWeight:n,contentFontSize:w,[C("iconSize",h)]:R,[C("titleMargin",h)]:P,[C("titleFontSize",h)]:B,[C("circleBorder",y)]:D,[C("iconColor",y)]:I},common:{cubicBezierEaseInOut:V}}=v.value;return{"--n-bezier":V,"--n-circle-border":D,"--n-icon-color":I,"--n-content-font-size":w,"--n-content-text-color":$,"--n-line-color":f,"--n-meta-text-color":u,"--n-title-font-size":B,"--n-title-font-weight":n,"--n-title-margin":P,"--n-title-text-color":z,"--n-icon-size":we(b)||R}}),a=r?te("timeline-item",F(()=>{const{props:{size:h,iconSize:b}}=o,{type:v}=t;return`${h[0]}${b||"a"}${v[0]}`}),d,o.props):void 0;return{mergedClsPrefix:o.mergedClsPrefixRef,cssVars:r?void 0:d,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{mergedClsPrefix:t,color:o,onRender:r,$slots:d}=this;return r==null||r(),p("div",{class:[`${t}-timeline-item`,this.themeClass,`${t}-timeline-item--${this.type}-type`,`${t}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},p("div",{class:`${t}-timeline-item-timeline`},p("div",{class:`${t}-timeline-item-timeline__line`}),U(d.icon,a=>a?p("div",{class:`${t}-timeline-item-timeline__icon`,style:{color:o}},a):p("div",{class:`${t}-timeline-item-timeline__circle`,style:{borderColor:o}}))),p("div",{class:`${t}-timeline-item-content`},U(d.header,a=>a||this.title?p("div",{class:`${t}-timeline-item-content__title`},a||this.title):null),p("div",{class:`${t}-timeline-item-content__content`},W(d.default,()=>[this.content])),p("div",{class:`${t}-timeline-item-content__meta`},W(d.footer,()=>[this.time]))))}}),He=K("span",{style:{"font-size":"6vw","word-break":"break-all"}},"黑暗",-1),Fe=K("span",{style:{"font-size":"6vw","word-break":"break-all"}},"光明",-1),Oe={style:{overflow:"auto",padding:"12px"}},Ke=k({__name:"props",setup(t){const o=ue(),r=fe(o),d=r.theme;r.sidebar;const a=r.achievements.value.map(u=>he(u)),h=j("default"),b=j("default"),v=j([]),y=u=>{d.value=u,z()},z=()=>{h.value=d.value===T.dark?"primary":"default",b.value=d.value===T.light?"primary":"default"};ge(()=>{z(),be.get("timeline").then(u=>v.value=u.filter(f=>f.title.length>0||f.text.length>0).map(f=>xe.defaults(f,{title:"",text:"",dashed:!1,time:"",type:"default"}))).catch(u=>v.value=[])});const $=new Date().getFullYear();return(u,f)=>(_(),S(e(Se),{type:"line",animated:""},{default:m(()=>[i(e(H),{name:"设置"},{default:m(()=>[i(e(Ce),{vertical:""},{default:m(()=>[i(e(ke),{depth:"3"},{default:m(()=>[L(M(`${e(ye)}-${e(ze)}`)+" · Vue框架 · 2022-"+M(e($)),1)]),_:1}),i(e(_e),{title:"主题",hoverable:""},{default:m(()=>[i(e(A),{onClick:f[0]||(f[0]=n=>y(e(T).dark)),type:h.value,style:{width:"50%",height:"20vh"}},{default:m(()=>[i(e(E),{"x-scrollable":""},{default:m(()=>[He]),_:1})]),_:1},8,["type"]),i(e(A),{onClick:f[1]||(f[1]=n=>y(e(T).light)),type:b.value,style:{width:"50%",height:"20vh"}},{default:m(()=>[i(e(E),{"x-scrollable":""},{default:m(()=>[Fe]),_:1})]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),i(e(H),{name:"成就"},{default:m(()=>[i(e(E),{"x-scrollable":"",trigger:"none"},{default:m(()=>[i(e(Ie),{hoverable:"",clickable:""},{default:m(()=>[(_(!0),Q(Z,null,Y(e(a),(n,w)=>(_(),S(e(Ve),{key:w},{default:m(()=>[i(e(Ne),{"content-style":"margin-top: 10px;",title:u.$texta.get(`achievements.${(n==null?void 0:n.title)||"unknownTitle"}`),description:u.$texta.get(`achievements.${(n==null?void 0:n.description)||"unknownDescription"}`)},{"header-extra":m(()=>[L(M(u.$texta.get(["views","jokes","props","achievements",(n==null?void 0:n.type)||"undefined"])),1)]),avatar:m(()=>[i(e(Re),{size:"50",color:(n==null?void 0:n.type)==="fantastic"?"orange":"rgb(36,204,255)"},{default:m(()=>[(_(),S($e(e(G)[n&&n.icon&&n.icon in e(G)?n.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),i(e(H),{name:"后记"},{default:m(()=>[i(e(Te),null,{default:m(()=>[L("大 时 间 线")]),_:1}),K("div",Oe,[i(e(Me),null,{default:m(()=>[i(e(s),{type:"info","line-type":"dashed",title:"换群",content:"仙人掌保护协会被封了",time:"2021/3/11"}),i(e(s),{type:"info","line-type":"dashed",title:"Discord",content:"最初账号",time:"2021/10/28"}),i(e(s),{type:"info","line-type":"dashed",title:"日炎",content:"问世",time:"2021/10/31"}),i(e(s),{type:"info","line-type":"dashed",title:"开始卖惨",content:"与柯莱首条Discord",time:"2022/1/28 20:01"}),i(e(s),{type:"info","line-type":"dashed",title:"《广义相遇论》",content:"出版印刷",time:"2022/1/29 19:02:25"}),i(e(s),{type:"success",title:"出生了",content:"第三版大图书馆",time:"2022/4/1"}),i(e(s),{type:"info",title:"亻寸氵睾",content:"灵魂完工了",time:"2022/4/20"}),i(e(s),{type:"info",title:"格拉迪斯与柯莱",content:"新增俩卖惨乐子",time:"2022/5/4"}),i(e(s),{type:"info",title:"大更新一",content:"更新了一堆(我也不知道具体是啥)",time:"2022/6/14"}),i(e(s),{type:"info",title:"大更新二",content:"更新了114514个(日志这么写的..)",time:"2022/7/8"}),i(e(s),{type:"error",title:"亻寸氵睾的消失",content:"FUZE在此彻底失联",time:"2022/7/16 16:25"}),i(e(s),{type:"warning",title:"提问",content:"这日志的意义是啥呢.",time:"2022/7/26"}),i(e(s),{type:"info",title:"大更新三",content:"个口,神女,联合国!",time:"2022/8/3"}),i(e(s),{type:"error",title:"三年的句号",content:"与三年告个别吧",time:"2022/9/1"}),i(e(s),{type:"info",title:"大更新四",content:"扁平化喽",time:"2022/10/9"}),i(e(s),{type:"info",title:"大更新五",content:"如你所见..",time:"2022/11/?"}),i(e(s),{type:"error",title:"最后的卖惨",content:"与柯莱维持了小一年后彻底断绝",time:"2022/12/12"}),i(e(s),{type:"info",title:"大更新六",content:"凹冈嗖浪",time:"2022/12/13"}),i(e(s),{type:"info",title:"大更新",content:"很多",time:"2023/5/7"}),(_(!0),Q(Z,null,Y(v.value,n=>(_(),S(e(s),{type:n.type,"line-type":n.dashed?"dashed":"default",title:n.title,content:n.text,time:n.time},null,8,["type","line-type","title","content","time"]))),256))]),_:1})])]),_:1})]),_:1}))}});typeof J=="function"&&J(Ke);export{Ke as default};
