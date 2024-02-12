import{Q as ke,a as d,P as X,c as g,b as x,J as f,d as z,u as O,aL as we,Z as Y,aE as J,i as v,c0 as $e,e as B,g as M,b9 as Ce,c1 as Se,j as T,c2 as Re,ay as Z,aW as Ne,aX as Pe,a2 as Te,h as he,Y as ge,c3 as Be,a1 as Q,bP as xe,c4 as je,aG as ee,aH as te,am as Me,m as S,z as V,v as k,c5 as Oe,ag as Ee,ak as Ie,c6 as De,r as re,o as He,n as E,q as a,y as e,aq as I,t,I as oe,B as ne,A as ie,c7 as Le,F as le,C as o,D as j,c8 as Ve,V as Fe,c9 as Ge}from"./index-1b78ee11.js";import{I as ae}from"./render-f8eb4da3.js";import{N as se}from"./Space-b42bb785.js";import{g as Ke}from"./get-slot-1efb97e5.js";import{N as Ue}from"./text-0af141a0.js";import{N as D,a as qe}from"./Tabs-b9209be3.js";import{N as We}from"./Scrollbar-b7dfff9b.js";import{b as ce,N as Ae}from"./headers-c52b1c2d.js";import{f as Ye}from"./format-length-c9d165c6.js";import{N as de}from"./Thing-31a3bb78.js";import{N as A}from"./Icon-07d8b044.js";import{N as Je}from"./Tag-6b587455.js";import{N as H}from"./blockquote-70d54cd9.js";import{b as ue}from"./route-block-83d24a4e.js";let me=!1;function Qe(){if(ke&&window.CSS&&!me&&(me=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const p="0!important",be="-1px!important";function N(r){return x(r+"-type",[g("& +",[d("button",{},[x(r+"-type",[f("border",{borderLeftWidth:p}),f("state-border",{left:be})])])])])}function P(r){return x(r+"-type",[g("& +",[d("button",[x(r+"-type",[f("border",{borderTopWidth:p}),f("state-border",{top:be})])])])])}const Xe=d("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[X("vertical",{flexDirection:"row"},[X("rtl",[d("button",[g("&:first-child:not(:last-child)",`
 margin-right: ${p};
 border-top-right-radius: ${p};
 border-bottom-right-radius: ${p};
 `),g("&:last-child:not(:first-child)",`
 margin-left: ${p};
 border-top-left-radius: ${p};
 border-bottom-left-radius: ${p};
 `),g("&:not(:first-child):not(:last-child)",`
 margin-left: ${p};
 margin-right: ${p};
 border-radius: ${p};
 `),N("default"),x("ghost",[N("primary"),N("info"),N("success"),N("warning"),N("error")])])])]),x("vertical",{flexDirection:"column"},[d("button",[g("&:first-child:not(:last-child)",`
 margin-bottom: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-bottom-left-radius: ${p};
 border-bottom-right-radius: ${p};
 `),g("&:last-child:not(:first-child)",`
 margin-top: ${p};
 margin-left: ${p};
 margin-right: ${p};
 border-top-left-radius: ${p};
 border-top-right-radius: ${p};
 `),g("&:not(:first-child):not(:last-child)",`
 margin: ${p};
 border-radius: ${p};
 `),P("default"),x("ghost",[P("primary"),P("info"),P("success"),P("warning"),P("error")])])])]),Ze={size:{type:String,default:void 0},vertical:Boolean},et=z({name:"ButtonGroup",props:Ze,setup(r){const{mergedClsPrefixRef:n,mergedRtlRef:l}=O(r);return we("-button-group",Xe,n),Y($e,r),{rtlEnabled:J("ButtonGroup",l,n),mergedClsPrefix:n}},render(){const{mergedClsPrefix:r}=this;return v("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}}),tt=Object.assign(Object.assign({},B.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,reverse:Boolean,size:{type:[String,Number,Array],default:"medium"},wrap:{type:Boolean,default:!0}}),rt=z({name:"Flex",props:tt,setup(r){const{mergedClsPrefixRef:n,mergedRtlRef:l}=O(r),c=B("Flex","-flex",void 0,Se,r,n);return{rtlEnabled:J("Flex",l,n),mergedClsPrefix:n,margin:M(()=>{const{size:s}=r;if(Array.isArray(s))return{horizontal:s[0],vertical:s[1]};if(typeof s=="number")return{horizontal:s,vertical:s};const{self:{[T("gap",s)]:b}}=c.value,{row:h,col:_}=Re(b);return{horizontal:Z(_),vertical:Z(h)}})}},render(){const{vertical:r,reverse:n,align:l,inline:c,justify:u,margin:s,wrap:b,mergedClsPrefix:h,rtlEnabled:_}=this,w=Ce(Ke(this),!1);return w.length?v("div",{role:"none",class:[`${h}-flex`,_&&`${h}-flex--rtl`],style:{display:c?"inline-flex":"flex",flexDirection:(()=>r&&!n?"column":r&&n?"column-reverse":!r&&n?"row-reverse":"row")(),justifyContent:u,flexWrap:!b||r?"nowrap":"wrap",alignItems:l,gap:`${s.vertical}px ${s.horizontal}px`}},w):null}}),ot=g([d("list",`
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
 `,[x("show-divider",[d("list-item",[g("&:not(:last-child)",[f("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),x("clickable",[d("list-item",`
 cursor: pointer;
 `)]),x("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),x("hoverable",[d("list-item",`
 border-radius: var(--n-border-radius);
 `,[g("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[f("divider",`
 background-color: transparent;
 `)])])]),x("bordered, hoverable",[d("list-item",`
 padding: 12px 20px;
 `),f("header, footer",`
 padding: 12px 20px;
 `)]),f("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),d("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[f("prefix",`
 margin-right: 20px;
 flex: 0;
 `),f("suffix",`
 margin-left: 20px;
 flex: 0;
 `),f("main",`
 flex: 1;
 `),f("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Ne(d("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),Pe(d("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),nt=Object.assign(Object.assign({},B.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),_e=ge("n-list"),fe=z({name:"List",props:nt,setup(r){const{mergedClsPrefixRef:n,inlineThemeDisabled:l,mergedRtlRef:c}=O(r),u=J("List",c,n),s=B("List","-list",ot,Be,r,n);Y(_e,{showDividerRef:Te(r,"showDivider"),mergedClsPrefixRef:n});const b=M(()=>{const{common:{cubicBezierEaseInOut:_},self:{fontSize:w,textColor:R,color:y,colorModal:$,colorPopover:m,borderColor:C,borderColorModal:F,borderColorPopover:G,borderRadius:K,colorHover:U,colorHoverModal:q,colorHoverPopover:W}}=s.value;return{"--n-font-size":w,"--n-bezier":_,"--n-text-color":R,"--n-color":y,"--n-border-radius":K,"--n-border-color":C,"--n-border-color-modal":F,"--n-border-color-popover":G,"--n-color-modal":$,"--n-color-popover":m,"--n-color-hover":U,"--n-color-hover-modal":q,"--n-color-hover-popover":W}}),h=l?he("list",void 0,b,r):void 0;return{mergedClsPrefix:n,rtlEnabled:u,cssVars:l?void 0:b,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var r;const{$slots:n,mergedClsPrefix:l,onRender:c}=this;return c==null||c(),v("ul",{class:[`${l}-list`,this.rtlEnabled&&`${l}-list--rtl`,this.bordered&&`${l}-list--bordered`,this.showDivider&&`${l}-list--show-divider`,this.hoverable&&`${l}-list--hoverable`,this.clickable&&`${l}-list--clickable`,this.themeClass],style:this.cssVars},n.header?v("div",{class:`${l}-list__header`},n.header()):null,(r=n.default)===null||r===void 0?void 0:r.call(n),n.footer?v("div",{class:`${l}-list__footer`},n.footer()):null)}}),pe=z({name:"ListItem",setup(){const r=Q(_e,null);return r||xe("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:n}=this;return v("li",{class:`${n}-list-item`},r.prefix?v("div",{class:`${n}-list-item__prefix`},r.prefix()):null,r.default?v("div",{class:`${n}-list-item__main`},r):null,r.suffix?v("div",{class:`${n}-list-item__suffix`},r.suffix()):null,this.showDivider&&v("div",{class:`${n}-list-item__divider`}))}}),ve=1.25,it=d("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ve};
`,[x("horizontal",`
 flex-direction: row;
 `,[g(">",[d("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[x("dashed-line-type",[g(">",[d("timeline-item-timeline",[f("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),g(">",[d("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[g(">",[f("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),d("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[f("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),x("right-placement",[d("timeline-item",[d("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),d("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),x("left-placement",[d("timeline-item",[d("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),d("timeline-item-timeline",`
 left: 0;
 `)])]),d("timeline-item",`
 position: relative;
 `,[g("&:last-child",[d("timeline-item-timeline",[f("line",`
 display: none;
 `)]),d("timeline-item-content",[f("meta",`
 margin-bottom: 0;
 `)])]),d("timeline-item-content",[f("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),f("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),f("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),x("dashed-line-type",[d("timeline-item-timeline",[f("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),d("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ve} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[f("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),f("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),f("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),lt=Object.assign(Object.assign({},B.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),ye=ge("n-timeline"),at=z({name:"Timeline",props:lt,setup(r,{slots:n}){const{mergedClsPrefixRef:l}=O(r),c=B("Timeline","-timeline",it,je,r,l);return Y(ye,{props:r,mergedThemeRef:c,mergedClsPrefixRef:l}),()=>{const{value:u}=l;return v("div",{class:[`${u}-timeline`,r.horizontal&&`${u}-timeline--horizontal`,`${u}-timeline--${r.size}-size`,!r.horizontal&&`${u}-timeline--${r.itemPlacement}-placement`]},n)}}}),st={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},L=z({name:"TimelineItem",props:st,setup(r){const n=Q(ye);n||xe("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),Qe();const{inlineThemeDisabled:l}=O(),c=M(()=>{const{props:{size:s,iconSize:b},mergedThemeRef:h}=n,{type:_}=r,{self:{titleTextColor:w,contentTextColor:R,metaTextColor:y,lineColor:$,titleFontWeight:m,contentFontSize:C,[T("iconSize",s)]:F,[T("titleMargin",s)]:G,[T("titleFontSize",s)]:K,[T("circleBorder",_)]:U,[T("iconColor",_)]:q},common:{cubicBezierEaseInOut:W}}=h.value;return{"--n-bezier":W,"--n-circle-border":U,"--n-icon-color":q,"--n-content-font-size":C,"--n-content-text-color":R,"--n-line-color":$,"--n-meta-text-color":y,"--n-title-font-size":K,"--n-title-font-weight":m,"--n-title-margin":G,"--n-title-text-color":w,"--n-icon-size":Ye(b)||F}}),u=l?he("timeline-item",M(()=>{const{props:{size:s,iconSize:b}}=n,{type:h}=r;return`${s[0]}${b||"a"}${h[0]}`}),c,n.props):void 0;return{mergedClsPrefix:n.mergedClsPrefixRef,cssVars:l?void 0:c,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){const{mergedClsPrefix:r,color:n,onRender:l,$slots:c}=this;return l==null||l(),v("div",{class:[`${r}-timeline-item`,this.themeClass,`${r}-timeline-item--${this.type}-type`,`${r}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},v("div",{class:`${r}-timeline-item-timeline`},v("div",{class:`${r}-timeline-item-timeline__line`}),ee(c.icon,u=>u?v("div",{class:`${r}-timeline-item-timeline__icon`,style:{color:n}},u):v("div",{class:`${r}-timeline-item-timeline__circle`,style:{borderColor:n}}))),v("div",{class:`${r}-timeline-item-content`},ee(c.header,u=>u||this.title?v("div",{class:`${r}-timeline-item-content__title`},u||this.title):null),v("div",{class:`${r}-timeline-item-content__content`},te(c.default,()=>[this.content])),v("div",{class:`${r}-timeline-item-content__meta`},te(c.footer,()=>[this.time]))))}}),ct={value:String,katex:Object,katexOptions:Object},i=z({name:"Equation",props:ct,setup(r){const n=Q(Me),l=M(()=>{var c;const u=((c=r.katex||(n==null?void 0:n.mergedKatexRef.value))===null||c===void 0?void 0:c.renderToString(r.value||"",Object.assign({throwOnError:!1},r.katexOptions)))||"no katex provided",s=u.match(/^<([a-z]+)[^>]+class="([^"]+)"[^>]*>/),b=(s==null?void 0:s[1])||"span",h=s==null?void 0:s[2],_=u.replace(/^<[a-z]+[^>]*>/,"").replace(/<\/[a-z]+>$/,"");return{wrapperTag:b,innerHtml:_,wrapperClass:h}});return()=>{const{innerHtml:c,wrapperClass:u,wrapperTag:s}=l.value;return v(s,{class:u,innerHTML:c})}}}),dt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ut=k("path",{d:"M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216c88.68 0 166.73-51.57 200-128c-26.39 11.49-57.38 16-88 16c-119.29 0-216-96.71-216-216z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),mt=[ut],ft=z({name:"MoonOutline",render:function(n,l){return S(),V("svg",dt,mt)}}),pt={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},vt=Oe('<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 48v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 416v48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 108.92l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 369.14l-33.94 33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M464 256h-48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M96 256H48"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M403.08 403.08l-33.94-33.94"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M142.86 142.86l-33.94-33.94"></path><circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"></circle>',9),ht=[vt],gt=z({name:"SunnyOutline",render:function(n,l){return S(),V("svg",pt,ht)}}),xt=k("br",null,null,-1),bt=k("br",null,null,-1),_t=k("br",null,null,-1),yt=k("br",null,null,-1),zt=k("br",null,null,-1),kt=k("br",null,null,-1),wt=k("strong",null,"幂与阶乘都比乘法高级 乘法比加法高级",-1),$t={style:{overflow:"auto",padding:"12px"}},ze=z({__name:"props",setup(r){const n=Ee(),l=Ie(n),c=l.theme,u=l.achievements.value.map(y=>De(y)),s=re("default"),b=re("default"),h=y=>{c.value=y,_()},_=()=>{s.value=c.value===I.dark?"primary":"default",b.value=c.value===I.light?"primary":"default"};He(()=>{_()});const w=new Date().getFullYear(),R="production";return(y,$)=>(S(),E(e(qe),{type:"line",animated:""},{default:a(()=>[t(e(D),{name:"设置"},{default:a(()=>[t(e(se),{vertical:""},{default:a(()=>[t(e(oe),{hoverable:""},{default:a(()=>[t(e(rt),{justify:"center",align:"center"},{default:a(()=>[t(e(et),{size:"large"},{default:a(()=>[t(e(ne),{onClick:$[0]||($[0]=m=>h(e(I).dark)),type:s.value},{icon:a(()=>[t(e(A),null,{default:a(()=>[t(e(ft))]),_:1})]),_:1},8,["type"]),t(e(ne),{onClick:$[1]||($[1]=m=>h(e(I).light)),type:b.value},{icon:a(()=>[t(e(A),null,{default:a(()=>[t(e(gt))]),_:1})]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(oe),{title:"数据包",hoverable:""},{default:a(()=>[t(e(fe),{hoverable:"",bordered:""},{default:a(()=>[(S(!0),V(le,null,ie(Object.keys(e(Le)()),(m,C)=>(S(),E(e(pe),{key:C},{default:a(()=>[t(e(de),{title:m},{"header-extra":a(()=>[o(j(C),1)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})]),_:1}),t(e(se),{align:"center",justify:"center"},{default:a(()=>[t(e(Ue),{depth:"3"},{default:a(()=>[o(j(`${e(Ve)}-${e(Fe)}`)+" · Vue框架 · 2022-"+j(e(w)),1)]),_:1}),t(e(Je),{type:e(R)==="production"?"primary":"warning"},{default:a(()=>[o(j(e(R)),1)]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),t(e(D),{name:"成就"},{default:a(()=>[t(e(We),{"x-scrollable":"",trigger:"none"},{default:a(()=>[t(e(fe),{hoverable:"",clickable:""},{default:a(()=>[(S(!0),V(le,null,ie(e(u),(m,C)=>(S(),E(e(pe),{key:C},{default:a(()=>[t(e(de),{"content-style":"margin-top: 10px;",title:y.$texta.get(`achievements.${(m==null?void 0:m.title)||"unknownTitle"}`),description:y.$texta.get(`achievements.${(m==null?void 0:m.description)||"unknownDescription"}`)},{"header-extra":a(()=>[o(j(y.$texta.get(["views","jokes","props","achievements",(m==null?void 0:m.type)||"undefined"])),1)]),avatar:a(()=>[t(e(A),{size:"50",color:(m==null?void 0:m.type)==="fantastic"?"orange":"rgb(36,204,255)"},{default:a(()=>[(S(),E(Ge(e(ae)[m&&m.icon&&m.icon in e(ae)?m.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),t(e(D),{name:"指南"},{default:a(()=>[t(e(ce),null,{default:a(()=>[o("原始递归函数")]),_:1}),o(" 1. 代入运算: "),t(e(i),{value:"f(x_1,\\dots,x_n)=h(g_1(x_1,\\dots,x_n),\\dots,g_m(x_1,\\dots,x_n))"}),o(" 记作 "),t(e(i),{value:"f=S(g_1,\\dots,g_m,h)"}),xt,o(" 2. 原始递归: "),t(e(i),{value:"\\begin{cases}f(x_1,\\dots,x_{n-1},0)=g(x_1,\\dots,x_{n-1}) \\\\f(x_1,\\dots,x_{n-1},x_{n}+1)=h(x_1,\\dots,x_{n-1},x_{n},f(x_1,\\dots,x_{n})) \\end{cases}"}),o(" 记作 "),t(e(i),{value:"f=R(g,h)"}),o(),bt,t(e(ce),null,{default:a(()=>[o("加乘幂阶的实现")]),_:1}),o(" 1. 加法"),t(e(H),null,{default:a(()=>[o(" 令"),t(e(i),{value:"f_1(x,y)=x+y"}),o(" 对于"),t(e(i),{value:"x"}),o("而言 就是加上"),t(e(i),{value:"y"}),o("个 1 也就是代入后继函数"),t(e(i),{value:"s(x)"}),o("总共"),t(e(i),{value:"y"}),o("次"),_t,o(" 当"),t(e(i),{value:"y=0"}),o("时 "),t(e(i),{value:"f_1(x,0)=x"}),o(" 即"),t(e(i),{value:"g(x)=x"}),o(" 其余 "),t(e(i),{value:"f_1(x,y+1)=f_1(x,y)+1"}),o(" 即为"),t(e(i),{value:"h(x,y,z)=z+1"}),o(" 写作递归函数形式 "),t(e(i),{value:" f_1(x,y)=R(U_1^{(1)}(x),S(U_3^{(3)}(x,y,z),s(x))) "})]),_:1}),o(" 2. 乘法"),t(e(H),null,{default:a(()=>[o(" 令"),t(e(i),{value:"f_2(x,y)=x*y"}),o(" 即"),t(e(i),{value:"y"}),o("个"),t(e(i),{value:"x"}),o("相加"),yt,o(" 当"),t(e(i),{value:"y=0"}),o("时 "),t(e(i),{value:"f_2(x,0)=0"}),o(" 得"),t(e(i),{value:"g(x)=0"}),o(" 其余 易得"),t(e(i),{value:"h(x,y,z)=x+z"}),o(" 整理得: "),t(e(i),{value:"f_2(x,y)=R(o(x),S(U_1^{(3)}(x,y,z),U_3^{(3)}(x,y,z),f_1(x,y))) "})]),_:1}),o(" 3. 幂"),t(e(H),null,{default:a(()=>[o(" 令"),t(e(i),{value:"f_3(x,y)=x^y"}),o(" 即"),t(e(i),{value:"y"}),o("个"),t(e(i),{value:"x"}),o("相乘"),zt,o(" 当"),t(e(i),{value:"y=0"}),o("时 "),t(e(i),{value:"f_3(x,0)=1"}),o(" 其余 得"),t(e(i),{value:"h(x,y,z)=x*z"}),o(" 同理整理得: "),t(e(i),{value:"f_3(x,y)=R(S(o(x),s(x)),S(U_1^{(3)}(x,y,z),U_3^{(3)}(x,y,z),f_2(x,y))) "})]),_:1}),o(" 4. 阶乘"),t(e(H),null,{default:a(()=>[o(" 令"),t(e(i),{value:"f_4(x)=x!"}),o(" 即"),t(e(i),{value:"1*2*3*\\dots*x"}),o(" 因为这里讨论的范围是自然数范围"),kt,o(" 当"),t(e(i),{value:"y=0"}),o("时 由阶乘的定义得 "),t(e(i),{value:"g(x)=1"}),o(" 其余 "),t(e(i),{value:"h(x,y)=x*y"}),o(" 同上整理得: "),t(e(i),{value:"f_4(x)=R(S(o(x),s(x)),S(s(x),U_2^{(2)}(x,y),f_2(x,y))) "})]),_:1}),o(" 至此 我们得到了以上的式子 不难看出: "),wt,o(" 因为它们都可以被低级的运算实现 而在其中 比加法还低级的则是"),t(e(i),{value:"s(x)"}),o("后继 ")]),_:1}),t(e(D),{name:"后记"},{default:a(()=>[t(e(Ae),null,{default:a(()=>[o("时间线")]),_:1}),k("div",$t,[t(e(at),null,{default:a(()=>[t(e(L),{type:"info",title:"1.0",time:"忘了"}),t(e(L),{type:"info",title:"2.0",time:"忘了"}),t(e(L),{type:"info",title:"3.0",time:"忘了"}),t(e(L),{type:"info",title:"4.0",content:"NONE",time:"2024年2月11日"})]),_:1})])]),_:1})]),_:1}))}});typeof ue=="function"&&ue(ze);const Lt=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{rt as N,ze as _,Lt as p};
