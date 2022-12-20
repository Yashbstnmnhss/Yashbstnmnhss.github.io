import{b as g,c,a as b,d as m,bu as F,bv as K,e as z,u as q,af as A,f as P,p as G,G as X,l as J,n as Q,h as v,g as U,c1 as W,j as Y,k as Z,S as ee,c2 as oe,c3 as re,B as R,V as te,q as x,X as w,w as t,v as l,y as r,bm as ie,bl as N,c4 as _,s as le,bp as se,F as ae,z as D,x as ne,b8 as de,c5 as ce}from"./index-df691239.js";import{I as B}from"./render-97fbe31b.js";import{_ as me}from"./update.vue_vue_type_script_setup_true_lang-3b39c4ac.js";import{N as C}from"./Scrollbar-69dbdc19.js";import{N as $,a as ve}from"./Tabs-9aacd7b1.js";import{N as pe}from"./Thing-b2c29be0.js";import{N as ue}from"./VolumeHighOutline-eba5aca4.js";import{b as T}from"./route-block-83d24a4e.js";import"./Ellipsis-0c9752ab.js";import"./Tooltip-85fd4e62.js";import"./format-length-c9d165c6.js";import"./cssr-deed3743.js";import"./on-fonts-ready-b10f7b66.js";import"./use-merged-state-deff8ad5.js";import"./use-compitable-332ff635.js";import"./headers-89604325.js";import"./throttle-5abe6b04.js";import"./toNumber-3dc876f6.js";const be=g([c("list",`
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
 `,[b("show-divider",[c("list-item",[g("&:not(:last-child)",[m("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),b("clickable",[c("list-item",`
 cursor: pointer;
 `)]),b("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),b("hoverable",[c("list-item",`
 border-radius: var(--n-border-radius);
 `,[g("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[m("divider",`
 background-color: transparent;
 `)])])]),b("bordered, hoverable",[c("list-item",`
 padding: 12px 20px;
 `),m("header, footer",`
 padding: 12px 20px;
 `)]),m("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[g("&:not(:last-child)",`
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
 `)])]),F(c("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),K(c("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),fe=Object.assign(Object.assign({},P.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),I=U("n-list"),he=z({name:"List",props:fe,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:i,mergedRtlRef:a}=q(e),y=A("List",a,o),f=P("List","-list",be,W,e,o);G(I,{showDividerRef:X(e,"showDivider"),mergedClsPrefixRef:o});const u=J(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:d,textColor:p,color:s,colorModal:k,colorPopover:L,borderColor:j,borderColorModal:E,borderColorPopover:M,borderRadius:V,colorHover:S,colorHoverModal:H,colorHoverPopover:O}}=f.value;return{"--n-font-size":d,"--n-bezier":h,"--n-text-color":p,"--n-color":s,"--n-border-radius":V,"--n-border-color":j,"--n-border-color-modal":E,"--n-border-color-popover":M,"--n-color-modal":k,"--n-color-popover":L,"--n-color-hover":S,"--n-color-hover-modal":H,"--n-color-hover-popover":O}}),n=i?Q("list",void 0,u,e):void 0;return{mergedClsPrefix:o,rtlEnabled:y,cssVars:i?void 0:u,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:i,onRender:a}=this;return a==null||a(),v("ul",{class:[`${i}-list`,this.rtlEnabled&&`${i}-list--rtl`,this.bordered&&`${i}-list--bordered`,this.showDivider&&`${i}-list--show-divider`,this.hoverable&&`${i}-list--hoverable`,this.clickable&&`${i}-list--clickable`,this.themeClass],style:this.cssVars},o.header?v("div",{class:`${i}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?v("div",{class:`${i}-list__footer`},o.footer()):null)}}),ge=z({name:"ListItem",setup(){const e=Y(I,null);return e||Z("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return v("li",{class:`${o}-list-item`},e.prefix?v("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?v("div",{class:`${o}-list-item__main`},e):null,e.suffix?v("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&v("div",{class:`${o}-list-item__divider`}))}}),xe=D("span",{style:{"font-size":"6vw","word-break":"break-all"}},"黑暗",-1),_e=D("span",{style:{"font-size":"6vw","word-break":"break-all"}},"光明",-1),ye=z({__name:"props",setup(e){const o=ee(),i=oe(o),a=i.theme,y=i.achievements.value.map(d=>re(d)),f=R("default"),u=R("default"),n=d=>{a.value=d,h()},h=()=>{f.value=a.value===_.dark?"primary":"default",u.value=a.value===_.light?"primary":"default"};return te(()=>h()),(d,p)=>(x(),w(r(ve),{type:"line",animated:""},{default:t(()=>[l(r($),{name:"设置"},{default:t(()=>[l(r(ie),{title:"主题"},{default:t(()=>[l(r(N),{onClick:p[0]||(p[0]=s=>n(r(_).dark)),type:f.value,style:{width:"50%",height:"20vh"}},{default:t(()=>[l(r(C),{"x-scrollable":""},{default:t(()=>[xe]),_:1})]),_:1},8,["type"]),l(r(N),{onClick:p[1]||(p[1]=s=>n(r(_).light)),type:u.value,style:{width:"50%",height:"20vh"}},{default:t(()=>[l(r(C),{"x-scrollable":""},{default:t(()=>[_e]),_:1})]),_:1},8,["type"])]),_:1})]),_:1}),l(r($),{name:"成就"},{default:t(()=>[l(r(C),{"x-scrollable":""},{default:t(()=>[l(r(he),{hoverable:"",clickable:""},{default:t(()=>[(x(!0),le(ae,null,se(r(y),(s,k)=>(x(),w(r(ge),{key:k},{default:t(()=>[l(r(pe),{"content-style":"margin-top: 10px;",title:d.$t(`achievements.${s.title||"unknownTitle"}`),description:d.$t(`achievements.${s.description||"unknownDescription"}`)},{"header-extra":t(()=>[ne(de(s.type),1)]),avatar:t(()=>[l(r(ue),{size:"50",color:s.type==="fantastic"?"orange":"rgb(36,204,255)"},{default:t(()=>[(x(),w(ce(r(B)[s.icon&&s.icon in r(B)?s.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),l(r($),{name:"后记"},{default:t(()=>[l(me)]),_:1})]),_:1}))}});typeof T=="function"&&T(ye);export{ye as default};
