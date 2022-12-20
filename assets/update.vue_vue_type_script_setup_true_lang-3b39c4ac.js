import{N as b,a as O}from"./headers-89604325.js";import{i as L,c as r,a as p,b as f,d as l,e as y,u as T,f as P,p as W,h as c,g as q,t as U,j as Z,k as A,l as S,m as g,n as G,r as _,o as w,q as J,s as Q,v as t,w as h,x as u,y as i,z as X,F as Y}from"./index-df691239.js";import{f as ee}from"./format-length-c9d165c6.js";let C=!1;function te(){if(L&&window.CSS&&!C&&(C=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const $=1.25,ie=r("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${$};
`,[p("horizontal",`
 flex-direction: row;
 `,[f(">",[r("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[p("dashed-line-type",[f(">",[r("timeline-item-timeline",[l("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),f(">",[r("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[f(">",[l("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),r("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[l("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),p("right-placement",[r("timeline-item",[r("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),r("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),p("left-placement",[r("timeline-item",[r("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),r("timeline-item-timeline",`
 left: 0;
 `)])]),r("timeline-item",`
 position: relative;
 `,[f("&:last-child",[r("timeline-item-timeline",[l("line",`
 display: none;
 `)]),r("timeline-item-content",[l("meta",`
 margin-bottom: 0;
 `)])]),r("timeline-item-content",[l("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),l("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),l("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),p("dashed-line-type",[r("timeline-item-timeline",[l("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),r("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${$} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[l("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),l("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),l("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ne=Object.assign(Object.assign({},P.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),k=q("n-timeline"),oe=y({name:"Timeline",props:ne,setup(e,{slots:a}){const{mergedClsPrefixRef:s}=T(e),m=P("Timeline","-timeline",ie,U,e,s);return W(k,{props:e,mergedThemeRef:m,mergedClsPrefixRef:s}),()=>{const{value:o}=s;return c("div",{class:[`${o}-timeline`,e.horizontal&&`${o}-timeline--horizontal`,`${o}-timeline--${e.size}-size`,!e.horizontal&&`${o}-timeline--${e.itemPlacement}-placement`]},a)}}}),re={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},n=y({name:"TimelineItem",props:re,setup(e){const a=Z(k);a||A("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),te();const{inlineThemeDisabled:s}=T(),m=S(()=>{const{props:{size:d,iconSize:v},mergedThemeRef:z}=a,{type:x}=e,{self:{titleTextColor:N,contentTextColor:R,metaTextColor:B,lineColor:V,titleFontWeight:j,contentFontSize:F,[g("iconSize",d)]:I,[g("titleMargin",d)]:E,[g("titleFontSize",d)]:H,[g("circleBorder",x)]:D,[g("iconColor",x)]:K},common:{cubicBezierEaseInOut:M}}=z.value;return{"--n-bezier":M,"--n-circle-border":D,"--n-icon-color":K,"--n-content-font-size":F,"--n-content-text-color":R,"--n-line-color":V,"--n-meta-text-color":B,"--n-title-font-size":H,"--n-title-font-weight":j,"--n-title-margin":E,"--n-title-text-color":N,"--n-icon-size":ee(v)||I}}),o=s?G("timeline-item",S(()=>{const{props:{size:d,iconSize:v}}=a,{type:z}=e;return`${d[0]}${v||"a"}${z[0]}`}),m,a.props):void 0;return{mergedClsPrefix:a.mergedClsPrefixRef,cssVars:s?void 0:m,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){const{mergedClsPrefix:e,color:a,onRender:s,$slots:m}=this;return s==null||s(),c("div",{class:[`${e}-timeline-item`,this.themeClass,`${e}-timeline-item--${this.type}-type`,`${e}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},c("div",{class:`${e}-timeline-item-timeline`},c("div",{class:`${e}-timeline-item-timeline__line`}),_(m.icon,o=>o?c("div",{class:`${e}-timeline-item-timeline__icon`,style:{color:a}},o):c("div",{class:`${e}-timeline-item-timeline__circle`,style:{borderColor:a}}))),c("div",{class:`${e}-timeline-item-content`},_(m.header,o=>o||this.title?c("div",{class:`${e}-timeline-item-content__title`},o||this.title):null),c("div",{class:`${e}-timeline-item-content__content`},w(m.default,()=>[this.content])),c("div",{class:`${e}-timeline-item-content__meta`},w(m.footer,()=>[this.time]))))}}),le={style:{overflow:"auto",padding:"12px"}},me=y({__name:"update",setup(e){return(a,s)=>(J(),Q(Y,null,[t(i(b),null,{default:h(()=>[u("大 时 间 线")]),_:1}),X("div",le,[t(i(oe),{horizontal:""},{default:h(()=>[t(i(n),{type:"info","line-type":"dashed",title:"换群",content:"仙人掌保护协会被封了",time:"2021/3/11"}),t(i(n),{type:"info","line-type":"dashed",title:"Discord",content:"最初账号",time:"2021/10/28"}),t(i(n),{type:"info","line-type":"dashed",title:"日炎",content:"问世",time:"2021/10/31"}),t(i(n),{type:"info","line-type":"dashed",title:"开始卖惨",content:"与柯莱首条Discord",time:"2022/1/28 20:01"}),t(i(n),{type:"info","line-type":"dashed",title:"《广义相遇论》",content:"出版印刷",time:"2022/1/29 19:02:25"}),t(i(n),{type:"success",title:"出生了",content:"第三版大图书馆",time:"2022/4/1"}),t(i(n),{type:"info",title:"亻寸氵睾",content:"灵魂完工了",time:"2022/4/20"}),t(i(n),{type:"info",title:"格拉迪斯与柯莱",content:"新增俩卖惨乐子",time:"2022/5/4"}),t(i(n),{type:"info",title:"大更新一",content:"更新了一堆(我也不知道具体是啥)",time:"2022/6/14"}),t(i(n),{type:"info",title:"大更新二",content:"更新了114514个(日志这么写的..)",time:"2022/7/8"}),t(i(n),{type:"error",title:"亻寸氵睾的消失",content:"FUZE在此彻底失联",time:"2022/7/16 16:25"}),t(i(n),{type:"warning",title:"提问",content:"你说这日志的意义是啥呢.",time:"2022/7/26"}),t(i(n),{type:"info",title:"大更新三",content:"个口,神女,联合国!",time:"2022/8/3"}),t(i(n),{type:"error",title:"三年的句号",content:"与三年告个别吧",time:"2022/9/1"}),t(i(n),{type:"info",title:"大更新四",content:"扁平化喽",time:"2022/10/9"}),t(i(n),{type:"info",title:"大更新五",content:"如你所见..",time:"2022/11/?"}),t(i(n),{type:"error",title:"最后的卖惨",content:"与柯莱维持了小一年后彻底断绝",time:"2022/12/12"}),t(i(n),{type:"info",title:"大更新六",content:"凹冈嗖浪",time:"2022/12/13"})]),_:1})]),t(i(b),null,{default:h(()=>[u(" 亼厶厶 巳口冂巨 丂口 厶口冂巳 ")]),_:1}),t(i(O),null,{default:h(()=>[u(" 日丂丅冂从冂廾丂丂")]),_:1}),u(" 丅廾巨尺巨 丨丂 冂口 从口尺巨 凵尸刀亼丅巨 冂口丅巨丂 日巨匚亼凵丂巨 丨 廾亼丅巨 丨丅 亼冂刀 冂口 口冂巨 匚亼尺巨 亼日口凵丅 丨丅 亼冂丫从口尺巨 丨丅 日巨匚亼从巨 亼 丫亼冂刀巨尺巨 日凵丅 丨 刀口冂丅 匚亼尺巨 丂丅丨厶厶 丅廾巨冂 丨丅 丂凵丨匚丨刀巨 亼冂刀 日巨匚亼从巨 亼 巳廾口丂丅 亼尺口凵冂刀 从巨 巨匕巨尺丫刀亼丫 日凵丅 丨 丂丅丨厶厶 刀口 冂口丅 丂匚亼尺巨 口彳 丨丅 日巨匚亼凵丂巨 丨丅 丅廾巨 口冂巨 口冂巨 彳口凵尺 彳丨匕巨 口冂巨 彳口凵尺 丫巨亼廾 丂口 丨丅 亼厶厶 巳口冂巨 丅廾巨冂 丨 廾亼匕巨 冂口 匚廾口丨匚巨 日凵丅 丂口 厶口冂巳 ")],64))}});export{me as _};
