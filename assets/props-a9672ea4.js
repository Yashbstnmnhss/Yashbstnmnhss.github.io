import{a8 as $e,a as c,a7 as X,c as h,b as g,d as m,g as z,u as L,b3 as we,ac as A,aI as he,p as v,bZ as Ce,i as Se,e as Ne,h as F,t as Re,k as D,m as ge,af as xe,b_ as Te,ah as Q,aG as be,b$ as Pe,aJ as Z,q as ee,E as j,bN as Be,F as w,G as V,H as k,c0 as je,aj as Me,ai as Oe,c1 as Ie,r as te,J as Ee,L as M,M as n,P as e,c2 as O,O as t,a0 as oe,Q as re,R as ie,c3 as He,S as ne,V as r,X as S,c4 as De,$ as Ve,aW as Le,b8 as Fe}from"./index-02b03318.js";import{I as le}from"./render-b454fb41.js";import{N as ae}from"./Space-0d622935.js";import{N as se}from"./Flex-f1c125bd.js";import{N as J}from"./text-0c590383.js";import{a as I,N as Ge}from"./Tabs-9fa9d180.js";import{N as Ke}from"./Scrollbar-cfc68320.js";import{c as ce,N as Ue,b as de}from"./route-block-0b7ee8e5.js";import{f as qe}from"./format-length-c9d165c6.js";import{N as ue}from"./Thing-1c02cc4c.js";import{N as We}from"./Badge-d08e99ff.js";import{N as Y}from"./Icon-3d063091.js";import{N as Je}from"./Tag-02996914.js";import{N as E}from"./blockquote-e05d275b.js";let me=!1;function Ye(){if($e&&window.CSS&&!me&&(me=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const p="0!important",_e="-1px!important";function T(o){return g(o+"-type",[h("& +",[c("button",{},[g(o+"-type",[m("border",{borderLeftWidth:p}),m("state-border",{left:_e})])])])])}function P(o){return g(o+"-type",[h("& +",[c("button",[g(o+"-type",[m("border",{borderTopWidth:p}),m("state-border",{top:_e})])])])])}const Ae=c("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[X("vertical",{flexDirection:"row"},[X("rtl",[c("button",[h("&:first-child:not(:last-child)",`
 margin-right: ${p};
 border-top-right-radius: ${p};
 border-bottom-right-radius: ${p};
 `),h("&:last-child:not(:first-child)",`
 margin-left: ${p};
 border-top-left-radius: ${p};
 border-bottom-left-radius: ${p};
 `),h("&:not(:first-child):not(:last-child)",`
 margin-left: ${p};
 margin-right: ${p};
 border-radius: ${p};
 `),T("default"),g("ghost",[T("primary"),T("info"),T("success"),T("warning"),T("error")])])])]),g("vertical",{flexDirection:"column"},[c("button",[h("&:first-child:not(:last-child)",`
 margin-bottom: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-bottom-left-radius: ${p};
 border-bottom-right-radius: ${p};
 `),h("&:last-child:not(:first-child)",`
 margin-top: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-top-left-radius: ${p};
 border-top-right-radius: ${p};
 `),h("&:not(:first-child):not(:last-child)",`
 margin: ${p};
 border-radius: ${p};
 `),P("default"),g("ghost",[P("primary"),P("info"),P("success"),P("warning"),P("error")])])])]),Qe={size:{type:String,default:void 0},vertical:Boolean},Xe=z({name:"ButtonGroup",props:Qe,setup(o){const{mergedClsPrefixRef:i,mergedRtlRef:a}=L(o);return we("-button-group",Ae,i),A(Ce,o),{rtlEnabled:he("ButtonGroup",a,i),mergedClsPrefix:i}},render(){const{mergedClsPrefix:o}=this;return v("div",{class:[`${o}-button-group`,this.rtlEnabled&&`${o}-button-group--rtl`,this.vertical&&`${o}-button-group--vertical`],role:"group"},this.$slots)}}),Ze=h([c("list",`
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
 `,[g("show-divider",[c("list-item",[h("&:not(:last-child)",[m("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),g("clickable",[c("list-item",`
 cursor: pointer;
 `)]),g("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),g("hoverable",[c("list-item",`
 border-radius: var(--n-border-radius);
 `,[h("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[m("divider",`
 background-color: transparent;
 `)])])]),g("bordered, hoverable",[c("list-item",`
 padding: 12px 20px;
 `),m("header, footer",`
 padding: 12px 20px;
 `)]),m("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[h("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),c("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[m("prefix",`
 margin-right: 20px;
 flex: 0;
 `),m("suffix",`
 margin-left: 20px;
 flex: 0;
 `),m("main",`
 flex: 1;
 `),m("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Se(c("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Ne(c("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),et=Object.assign(Object.assign({},F.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),ye=xe("n-list"),pe=z({name:"List",props:et,setup(o){const{mergedClsPrefixRef:i,inlineThemeDisabled:a,mergedRtlRef:d}=L(o),u=he("List",d,i),f=F("List","-list",Ze,Te,o,i);A(ye,{showDividerRef:Re(o,"showDivider"),mergedClsPrefixRef:i});const b=D(()=>{const{common:{cubicBezierEaseInOut:y},self:{fontSize:B,textColor:N,color:_,colorModal:$,colorPopover:s,borderColor:C,borderColorModal:R,borderColorPopover:G,borderRadius:K,colorHover:U,colorHoverModal:q,colorHoverPopover:W}}=f.value;return{"--n-font-size":B,"--n-bezier":y,"--n-text-color":N,"--n-color":_,"--n-border-radius":K,"--n-border-color":C,"--n-border-color-modal":R,"--n-border-color-popover":G,"--n-color-modal":$,"--n-color-popover":s,"--n-color-hover":U,"--n-color-hover-modal":q,"--n-color-hover-popover":W}}),x=a?ge("list",void 0,b,o):void 0;return{mergedClsPrefix:i,rtlEnabled:u,cssVars:a?void 0:b,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var o;const{$slots:i,mergedClsPrefix:a,onRender:d}=this;return d==null||d(),v("ul",{class:[`${a}-list`,this.rtlEnabled&&`${a}-list--rtl`,this.bordered&&`${a}-list--bordered`,this.showDivider&&`${a}-list--show-divider`,this.hoverable&&`${a}-list--hoverable`,this.clickable&&`${a}-list--clickable`,this.themeClass],style:this.cssVars},i.header?v("div",{class:`${a}-list__header`},i.header()):null,(o=i.default)===null||o===void 0?void 0:o.call(i),i.footer?v("div",{class:`${a}-list__footer`},i.footer()):null)}}),fe=z({name:"ListItem",setup(){const o=Q(ye,null);return o||be("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:o.showDividerRef,mergedClsPrefix:o.mergedClsPrefixRef}},render(){const{$slots:o,mergedClsPrefix:i}=this;return v("li",{class:`${i}-list-item`},o.prefix?v("div",{class:`${i}-list-item__prefix`},o.prefix()):null,o.default?v("div",{class:`${i}-list-item__main`},o):null,o.suffix?v("div",{class:`${i}-list-item__suffix`},o.suffix()):null,this.showDivider&&v("div",{class:`${i}-list-item__divider`}))}}),ve=1.25,tt=c("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ve};
`,[g("horizontal",`
 flex-direction: row;
 `,[h(">",[c("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[g("dashed-line-type",[h(">",[c("timeline-item-timeline",[m("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),h(">",[c("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[h(">",[m("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),c("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[m("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),g("right-placement",[c("timeline-item",[c("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),c("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),g("left-placement",[c("timeline-item",[c("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),c("timeline-item-timeline",`
 left: 0;
 `)])]),c("timeline-item",`
 position: relative;
 `,[h("&:last-child",[c("timeline-item-timeline",[m("line",`
 display: none;
 `)]),c("timeline-item-content",[m("meta",`
 margin-bottom: 0;
 `)])]),c("timeline-item-content",[m("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),m("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),m("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),g("dashed-line-type",[c("timeline-item-timeline",[m("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),c("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ve} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[m("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),m("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),ot=Object.assign(Object.assign({},F.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),ze=xe("n-timeline"),rt=z({name:"Timeline",props:ot,setup(o,{slots:i}){const{mergedClsPrefixRef:a}=L(o),d=F("Timeline","-timeline",tt,Pe,o,a);return A(ze,{props:o,mergedThemeRef:d,mergedClsPrefixRef:a}),()=>{const{value:u}=a;return v("div",{class:[`${u}-timeline`,o.horizontal&&`${u}-timeline--horizontal`,`${u}-timeline--${o.size}-size`,!o.horizontal&&`${u}-timeline--${o.itemPlacement}-placement`]},i)}}}),it={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},H=z({name:"TimelineItem",props:it,setup(o){const i=Q(ze);i||be("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Ye();const{inlineThemeDisabled:a}=L(),d=D(()=>{const{props:{size:f,iconSize:b},mergedThemeRef:x}=i,{type:y}=o,{self:{titleTextColor:B,contentTextColor:N,metaTextColor:_,lineColor:$,titleFontWeight:s,contentFontSize:C,[j("iconSize",f)]:R,[j("titleMargin",f)]:G,[j("titleFontSize",f)]:K,[j("circleBorder",y)]:U,[j("iconColor",y)]:q},common:{cubicBezierEaseInOut:W}}=x.value;return{"--n-bezier":W,"--n-circle-border":U,"--n-icon-color":q,"--n-content-font-size":C,"--n-content-text-color":N,"--n-line-color":$,"--n-meta-text-color":_,"--n-title-font-size":K,"--n-title-font-weight":s,"--n-title-margin":G,"--n-title-text-color":B,"--n-icon-size":qe(b)||R}}),u=a?ge("timeline-item",D(()=>{const{props:{size:f,iconSize:b}}=i,{type:x}=o;return`${f[0]}${b||"a"}${x[0]}`}),d,i.props):void 0;return{mergedClsPrefix:i.mergedClsPrefixRef,cssVars:a?void 0:d,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{mergedClsPrefix:o,color:i,onRender:a,$slots:d}=this;return a==null||a(),v("div",{class:[`${o}-timeline-item`,this.themeClass,`${o}-timeline-item--${this.type}-type`,`${o}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},v("div",{class:`${o}-timeline-item-timeline`},v("div",{class:`${o}-timeline-item-timeline__line`}),Z(d.icon,u=>u?v("div",{class:`${o}-timeline-item-timeline__icon`,style:{color:i}},u):v("div",{class:`${o}-timeline-item-timeline__circle`,style:{borderColor:i}}))),v("div",{class:`${o}-timeline-item-content`},Z(d.header,u=>u||this.title?v("div",{class:`${o}-timeline-item-content__title`},u||this.title):null),v("div",{class:`${o}-timeline-item-content__content`},ee(d.default,()=>[this.content])),v("div",{class:`${o}-timeline-item-content__meta`},ee(d.footer,()=>[this.time]))))}}),nt={value:String,katex:Object,katexOptions:Object},l=z({name:"Equation",props:nt,setup(o){const i=Q(Be),a=D(()=>{var d;const u=((d=o.katex||(i==null?void 0:i.mergedKatexRef.value))===null||d===void 0?void 0:d.renderToString(o.value||"",Object.assign({throwOnError:!1},o.katexOptions)))||"no katex provided",f=u.match(/^<([a-z]+)[^>]+class="([^"]+)"[^>]*>/),b=(f==null?void 0:f[1])||"span",x=f==null?void 0:f[2],y=u.replace(/^<[a-z]+[^>]*>/,"").replace(/<\/[a-z]+>$/,"");return{wrapperTag:b,innerHtml:y,wrapperClass:x}});return()=>{const{innerHtml:d,wrapperClass:u,wrapperTag:f}=a.value;return v(f,{class:u,innerHTML:d})}}}),lt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},at=k("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),st=[at],ct=z({name:"MoonOutline",render:function(i,a){return w(),V("svg",lt,st)}}),dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ut=je('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>',9),mt=[ut],pt=z({name:"SunnyOutline",render:function(i,a){return w(),V("svg",dt,mt)}}),ft=k("br",null,null,-1),vt=k("br",null,null,-1),ht=k("br",null,null,-1),gt=k("br",null,null,-1),xt=k("br",null,null,-1),bt=k("br",null,null,-1),_t=k("strong",null,"幂与阶乘都比乘法高级 乘法比加法高级",-1),yt={style:{overflow:"auto",padding:"12px"}},ke=z({__name:"props",setup(o){const i=Me(),a=Oe(i),d=a.theme,u=a.achievements.value.map(_=>Ie(_)),f=te("default"),b=te("default"),x=_=>{d.value=_,y()},y=()=>{f.value=d.value===O.dark?"primary":"default",b.value=d.value===O.light?"primary":"default"};Ee(()=>{y()});const B=new Date().getFullYear(),N="production";return(_,$)=>(w(),M(e(Ge),{type:"line",animated:""},{default:n(()=>[t(e(I),{name:"设置",noselect:""},{default:n(()=>[t(e(ae),{vertical:""},{default:n(()=>[t(e(oe),{hoverable:""},{default:n(()=>[t(e(se),{justify:"center",align:"center"},{default:n(()=>[t(e(Xe),{size:"large"},{default:n(()=>[t(e(re),{onClick:$[0]||($[0]=s=>x(e(O).dark)),type:f.value},{icon:n(()=>[t(e(Y),null,{default:n(()=>[t(e(ct))]),_:1})]),_:1},8,["type"]),t(e(re),{onClick:$[1]||($[1]=s=>x(e(O).light)),type:b.value},{icon:n(()=>[t(e(Y),null,{default:n(()=>[t(e(pt))]),_:1})]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(oe),{title:"数据包",hoverable:""},{default:n(()=>[t(e(pe),{hoverable:"",bordered:""},{default:n(()=>[(w(!0),V(ne,null,ie(Object.values(e(He)()).map(s=>s.meta),(s,C)=>(w(),M(e(fe),{key:C},{default:n(()=>[t(e(ue),null,Le({header:n(()=>[r(S(s.name),1)]),_:2},[s.overrides?{name:"description",fn:n(()=>[t(e(J),{depth:"3"},{default:n(()=>[r(S(Object.entries(s.overrides).map(R=>`${R[1]}("${R[0]}")`).join(`
`)),1)]),_:2},1024)]),key:"0"}:void 0,s.version?{name:"footer",fn:n(()=>[t(e(se),{justify:"right"},{default:n(()=>[t(e(J),{code:""},{default:n(()=>[r(" v"+S(s.version),1)]),_:2},1024)]),_:2},1024)]),key:"1"}:void 0,s.builtin?{name:"header-extra",fn:n(()=>[t(e(We),{type:"success",value:"builtin"})]),key:"2"}:void 0]),1024)]),_:2},1024))),128))]),_:1})]),_:1}),t(e(ae),{align:"center",justify:"center"},{default:n(()=>[t(e(J),{depth:"3"},{default:n(()=>[r(S(`${e(De)}-${e(Ve)}`)+" · Vue框架 · 2022-"+S(e(B)),1)]),_:1}),t(e(Je),{type:e(N)==="production"?"primary":"warning"},{default:n(()=>[r(S(e(N)),1)]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(I),{name:"成就",noselect:""},{default:n(()=>[t(e(Ke),{"x-scrollable":"",trigger:"none"},{default:n(()=>[t(e(pe),{hoverable:"",clickable:""},{default:n(()=>[(w(!0),V(ne,null,ie(e(u),(s,C)=>(w(),M(e(fe),{key:C},{default:n(()=>[t(e(ue),{"content-style":"margin-top: 10px;",title:_.$texta.get(`achievements.${(s==null?void 0:s.title)||"unknownTitle"}`),description:_.$texta.get(`achievements.${(s==null?void 0:s.description)||"unknownDescription"}`)},{"header-extra":n(()=>[r(S(_.$texta.get(["views","jokes","props","achievements",(s==null?void 0:s.type)||"undefined"])),1)]),avatar:n(()=>[t(e(Y),{size:"50",color:(s==null?void 0:s.type)==="fantastic"?"orange":"rgb(36,204,255)"},{default:n(()=>[(w(),M(Fe(e(le)[s&&s.icon&&s.icon in e(le)?s.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(e(I),{name:"指南"},{default:n(()=>[t(e(ce),null,{default:n(()=>[r("原始递归函数")]),_:1}),r(" 1. 代入运算: "),t(e(l),{value:"f(x_1,\\dots,x_n)=h(g_1(x_1,\\dots,x_n),\\dots,g_m(x_1,\\dots,x_n))"}),r(" 记作 "),t(e(l),{value:"f=S(g_1,\\dots,g_m,h)"}),ft,r(" 2. 原始递归: "),t(e(l),{value:"\\begin{cases}f(x_1,\\dots,x_{n-1},0)=g(x_1,\\dots,x_{n-1}) \\\\f(x_1,\\dots,x_{n-1},x_{n}+1)=h(x_1,\\dots,x_{n-1},x_{n},f(x_1,\\dots,x_{n})) \\end{cases}"}),r(" 记作 "),t(e(l),{value:"f=R(g,h)"}),r(),vt,t(e(ce),null,{default:n(()=>[r("加乘幂阶的实现")]),_:1}),r(" 1. 加法"),t(e(E),null,{default:n(()=>[r(" 令"),t(e(l),{value:"f_1(x,y)=x+y"}),r(" 对于"),t(e(l),{value:"x"}),r("而言 就是加上"),t(e(l),{value:"y"}),r("个 1 也就是代入后继函数"),t(e(l),{value:"s(x)"}),r("总共"),t(e(l),{value:"y"}),r("次"),ht,r(" 当"),t(e(l),{value:"y=0"}),r("时 "),t(e(l),{value:"f_1(x,0)=x"}),r(" 即"),t(e(l),{value:"g(x)=x"}),r(" 其余 "),t(e(l),{value:"f_1(x,y+1)=f_1(x,y)+1"}),r(" 即为"),t(e(l),{value:"h(x,y,z)=z+1"}),r(" 写作递归函数形式 "),t(e(l),{value:" f_1(x,y)=R(U_1^{(1)}(x),S(U_3^{(3)}(x,y,z),s(x))) "})]),_:1}),r(" 2. 乘法"),t(e(E),null,{default:n(()=>[r(" 令"),t(e(l),{value:"f_2(x,y)=x*y"}),r(" 即"),t(e(l),{value:"y"}),r("个"),t(e(l),{value:"x"}),r("相加"),gt,r(" 当"),t(e(l),{value:"y=0"}),r("时 "),t(e(l),{value:"f_2(x,0)=0"}),r(" 得"),t(e(l),{value:"g(x)=0"}),r(" 其余 易得"),t(e(l),{value:"h(x,y,z)=x+z"}),r(" 整理得: "),t(e(l),{value:"f_2(x,y)=R(o(x),S(U_1^{(3)}(x,y,z),U_3^{(3)}(x,y,z),f_1(x,y))) "})]),_:1}),r(" 3. 幂"),t(e(E),null,{default:n(()=>[r(" 令"),t(e(l),{value:"f_3(x,y)=x^y"}),r(" 即"),t(e(l),{value:"y"}),r("个"),t(e(l),{value:"x"}),r("相乘"),xt,r(" 当"),t(e(l),{value:"y=0"}),r("时 "),t(e(l),{value:"f_3(x,0)=1"}),r(" 其余 得"),t(e(l),{value:"h(x,y,z)=x*z"}),r(" 同理整理得: "),t(e(l),{value:"f_3(x,y)=R(S(o(x),s(x)),S(U_1^{(3)}(x,y,z),U_3^{(3)}(x,y,z),f_2(x,y))) "})]),_:1}),r(" 4. 阶乘"),t(e(E),null,{default:n(()=>[r(" 令"),t(e(l),{value:"f_4(x)=x!"}),r(" 即"),t(e(l),{value:"1*2*3*\\dots*x"}),r(" 因为这里讨论的范围是自然数范围"),bt,r(" 当"),t(e(l),{value:"y=0"}),r("时 由阶乘的定义得 "),t(e(l),{value:"g(x)=1"}),r(" 其余 "),t(e(l),{value:"h(x,y)=x*y"}),r(" 同上整理得: "),t(e(l),{value:"f_4(x)=R(S(o(x),s(x)),S(s(x),U_2^{(2)}(x,y),f_2(x,y))) "})]),_:1}),r(" 至此 我们得到了以上的式子 不难看出: "),_t,r(" 因为它们都可以被低级的运算实现 而在其中 比加法还低级的则是"),t(e(l),{value:"s(x)"}),r("后继 ")]),_:1}),t(e(I),{name:"后记",noselect:""},{default:n(()=>[t(e(Ue),null,{default:n(()=>[r("时间线")]),_:1}),k("div",yt,[t(e(rt),null,{default:n(()=>[t(e(H),{type:"info",title:"1.0",time:"忘了"}),t(e(H),{type:"info",title:"2.0",time:"忘了"}),t(e(H),{type:"info",title:"3.0",time:"忘了"}),t(e(H),{type:"info",title:"4.0",content:"NONE",time:"2024年2月11日"})]),_:1})])]),_:1})]),_:1}))}});typeof de=="function"&&de(ke);const It=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));export{Xe as N,ke as _,It as p};
