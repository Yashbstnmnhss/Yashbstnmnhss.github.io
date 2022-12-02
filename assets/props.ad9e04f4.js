import{b as g,c,d as h,e as u,c2 as S,c3 as A,f as _,u as K,i as q,a4 as T,ca as G,p as U,a3 as J,m as Q,a8 as W,j as p,U as X,k as Y,by as Z,o as x,q as E,s as ee,v as re,cb as oe,cc as te,y as $,z as ie,H as z,B as i,C as o,T as k,A as l,bf as le,N as B,E as se,F as ne,r as j,G as ae,D as de}from"./index.d6438343.js";import ce from"./update.0fa76112.js";import{b as N}from"./route-block.023af118.js";import{N as ue,a as C}from"./Tabs.3f3fbc21.js";import{N as R}from"./Scrollbar.8e7fda31.js";import{N as pe}from"./Thing.25e7e1c1.js";import{N as ve}from"./Icon.524dffcd.js";import"./Add.33264e58.js";import"./cssr.1b746292.js";import"./throttle.3153ebda.js";import"./toNumber.316f3495.js";import"./on-fonts-ready.d12e5a48.js";import"./format-length.7f3135aa.js";const me=g([c("list",`
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
 `,[h("show-divider",[c("list-item",[g("&:not(:last-child)",[u("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),h("clickable",[c("list-item",`
 cursor: pointer;
 `)]),h("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),h("hoverable",[c("list-item",`
 border-radius: var(--n-border-radius);
 `,[g("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[u("divider",`
 background-color: transparent;
 `)])])]),h("bordered, hoverable",[c("list-item",`
 padding: 12px 20px;
 `),u("header, footer",`
 padding: 12px 20px;
 `)]),u("header, footer",`
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
 `,[u("prefix",`
 margin-right: 20px;
 flex: 0;
 `),u("suffix",`
 margin-left: 20px;
 flex: 0;
 `),u("main",`
 flex: 1;
 `),u("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),S(c("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),A(c("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),he=Object.assign(Object.assign({},T.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),D=X("n-list"),fe=_({name:"List",props:he,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:t,mergedRtlRef:s}=K(e),w=q("List",s,r),f=T("List","-list",me,G,e,r);U(D,{showDividerRef:J(e,"showDivider"),mergedClsPrefixRef:r});const m=Q(()=>{const{common:{cubicBezierEaseInOut:b},self:{fontSize:a,textColor:v,color:d,colorModal:y,colorPopover:M,borderColor:L,borderColorModal:P,borderColorPopover:I,borderRadius:V,colorHover:H,colorHoverModal:F,colorHoverPopover:O}}=f.value;return{"--n-font-size":a,"--n-bezier":b,"--n-text-color":v,"--n-color":d,"--n-border-radius":V,"--n-border-color":L,"--n-border-color-modal":P,"--n-border-color-popover":I,"--n-color-modal":y,"--n-color-popover":M,"--n-color-hover":H,"--n-color-hover-modal":F,"--n-color-hover-popover":O}}),n=t?W("list",void 0,m,e):void 0;return{mergedClsPrefix:r,rtlEnabled:w,cssVars:t?void 0:m,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:t,onRender:s}=this;return s==null||s(),p("ul",{class:[`${t}-list`,this.rtlEnabled&&`${t}-list--rtl`,this.bordered&&`${t}-list--bordered`,this.showDivider&&`${t}-list--show-divider`,this.hoverable&&`${t}-list--hoverable`,this.clickable&&`${t}-list--clickable`,this.themeClass],style:this.cssVars},r.header?p("div",{class:`${t}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?p("div",{class:`${t}-list__footer`},r.footer()):null)}}),be=_({name:"ListItem",setup(){const e=Y(D,null);return e||Z("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return p("li",{class:`${r}-list-item`},e.prefix?p("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?p("div",{class:`${r}-list-item__main`},e):null,e.suffix?p("div",{class:`${r}-list-item__suffix`},e.suffix()):null,this.showDivider&&p("div",{class:`${r}-list-item__divider`}))}}),ge={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},ke=ee('<circle cx="256" cy="352" r="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><circle cx="256" cy="352" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></circle><path d="M147 323L41.84 159.32a32 32 0 0 1-1.7-31.61l31-62A32 32 0 0 1 99.78 48h312.44a32 32 0 0 1 28.62 17.69l31 62a32 32 0 0 1-1.7 31.61L365 323" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M371 144H37"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M428.74 52.6L305 250"></path><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M140.55 144L207 250"></path>',6),xe=[ke],_e=_({name:"MedalOutline",render:function(r,t){return x(),E("svg",ge,xe)}}),we=j("span",{style:{"font-size":"6vw","word-break":"break-all"}},"\u9ED1\u6697",-1),ye=j("span",{style:{"font-size":"6vw","word-break":"break-all"}},"\u5149\u660E",-1),Ce=_({setup(e){const r=re(),t=oe(r),s=t.theme,w=t.achievements.value.map(a=>te(a)),f=$("default"),m=$("default"),n=a=>{s.value=a,b()},b=()=>{f.value=s.value===k.dark?"primary":"default",m.value=s.value===k.light?"primary":"default"};return ie(()=>b()),(a,v)=>(x(),z(o(ue),{type:"line",animated:""},{default:i(()=>[l(o(C),{name:"\u8BBE\u7F6E"},{default:i(()=>[l(o(le),{title:"\u4E3B\u9898"},{default:i(()=>[l(o(B),{onClick:v[0]||(v[0]=d=>n(o(k).dark)),type:f.value,style:{width:"50%",height:"20vh"}},{default:i(()=>[l(o(R),{"x-scrollable":""},{default:i(()=>[we]),_:1})]),_:1},8,["type"]),l(o(B),{onClick:v[1]||(v[1]=d=>n(o(k).light)),type:m.value,style:{width:"50%",height:"20vh"}},{default:i(()=>[l(o(R),{"x-scrollable":""},{default:i(()=>[ye]),_:1})]),_:1},8,["type"])]),_:1})]),_:1}),l(o(C),{name:"\u6210\u5C31"},{default:i(()=>[l(o(fe),{hoverable:"",clickable:""},{default:i(()=>[(x(!0),E(ne,null,se(o(w),(d,y)=>(x(),z(o(be),{key:y},{default:i(()=>[l(o(pe),{"content-style":"margin-top: 10px;",title:a.$t(`achievements.${d.title||"unknownTitle"}`),description:a.$t(`achievements.${d.description||"unknownDescription"}`)},{"header-extra":i(()=>[ae(de(d.type),1)]),avatar:i(()=>[l(o(ve),{size:"50",color:d.type==="fantastic"?"orange":"rgb(36,204,255)"},{default:i(()=>[l(o(_e))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1}),l(o(C),{name:"\u66F4\u65B0\u65E5\u5FD7"},{default:i(()=>[l(o(ce))]),_:1})]),_:1}))}});typeof N=="function"&&N(Ce);export{Ce as default};
