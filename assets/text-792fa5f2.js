import{k as b,a as n,b as d,j as c,ar as j,as as L,d as R,e as k,ah as S,u as m,p as V,t as E,g as z,i as w,h as s,c as I,b1 as M,n as O,aw as H,b2 as N,an as K}from"./index-5edf02b9.js";import{u as F}from"./use-compitable-dc8ab413.js";const W=b([n("list",`
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
 `,[d("show-divider",[n("list-item",[b("&:not(:last-child)",[c("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),d("clickable",[n("list-item",`
 cursor: pointer;
 `)]),d("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),d("hoverable",[n("list-item",`
 border-radius: var(--n-border-radius);
 `,[b("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[c("divider",`
 background-color: transparent;
 `)])])]),d("bordered, hoverable",[n("list-item",`
 padding: 12px 20px;
 `),c("header, footer",`
 padding: 12px 20px;
 `)]),c("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[b("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),n("list-item",`
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
 `)])]),j(n("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),L(n("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),q=Object.assign(Object.assign({},m.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),_=I("n-list"),U=R({name:"List",props:q,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r,mergedRtlRef:t}=k(e),a=S("List",t,o),i=m("List","-list",W,M,e,o);V(_,{showDividerRef:E(e,"showDivider"),mergedClsPrefixRef:o});const v=z(()=>{const{common:{cubicBezierEaseInOut:h},self:{fontSize:u,textColor:f,color:g,colorModal:p,colorPopover:x,borderColor:C,borderColorModal:y,borderColorPopover:$,borderRadius:P,colorHover:B,colorHoverModal:D,colorHoverPopover:T}}=i.value;return{"--n-font-size":u,"--n-bezier":h,"--n-text-color":f,"--n-color":g,"--n-border-radius":P,"--n-border-color":C,"--n-border-color-modal":y,"--n-border-color-popover":$,"--n-color-modal":p,"--n-color-popover":x,"--n-color-hover":B,"--n-color-hover-modal":D,"--n-color-hover-popover":T}}),l=r?w("list",void 0,v,e):void 0;return{mergedClsPrefix:o,rtlEnabled:a,cssVars:r?void 0:v,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{$slots:o,mergedClsPrefix:r,onRender:t}=this;return t==null||t(),s("ul",{class:[`${r}-list`,this.rtlEnabled&&`${r}-list--rtl`,this.bordered&&`${r}-list--bordered`,this.showDivider&&`${r}-list--show-divider`,this.hoverable&&`${r}-list--hoverable`,this.clickable&&`${r}-list--clickable`,this.themeClass],style:this.cssVars},o.header?s("div",{class:`${r}-list__header`},o.header()):null,(e=o.default)===null||e===void 0?void 0:e.call(o),o.footer?s("div",{class:`${r}-list__footer`},o.footer()):null)}}),X=R({name:"ListItem",setup(){const e=O(_,null);return e||H("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:e.showDividerRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:o}=this;return s("li",{class:`${o}-list-item`},e.prefix?s("div",{class:`${o}-list-item__prefix`},e.prefix()):null,e.default?s("div",{class:`${o}-list-item__main`},e):null,e.suffix?s("div",{class:`${o}-list-item__suffix`},e.suffix()):null,this.showDivider&&s("div",{class:`${o}-list-item__divider`}))}}),A=n("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[d("strong",`
 font-weight: var(--n-font-weight-strong);
 `),d("italic",{fontStyle:"italic"}),d("underline",{textDecoration:"underline"}),d("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),G=Object.assign(Object.assign({},m.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Y=R({name:"Text",props:G,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=k(e),t=m("Typography","-text",A,N,e,o),a=z(()=>{const{depth:v,type:l}=e,h=l==="default"?v===void 0?"textColor":`textColor${v}Depth`:K("textColor",l),{common:{fontWeightStrong:u,fontFamilyMono:f,cubicBezierEaseInOut:g},self:{codeTextColor:p,codeBorderRadius:x,codeColor:C,codeBorder:y,[h]:$}}=t.value;return{"--n-bezier":g,"--n-text-color":$,"--n-font-weight-strong":u,"--n-font-famliy-mono":f,"--n-code-border-radius":x,"--n-code-text-color":p,"--n-code-color":C,"--n-code-border":y}}),i=r?w("text",z(()=>`${e.type[0]}${e.depth||""}`),a,e):void 0;return{mergedClsPrefix:o,compitableTag:F(e,["as","tag"]),cssVars:r?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,o,r;const{mergedClsPrefix:t}=this;(e=this.onRender)===null||e===void 0||e.call(this);const a=[`${t}-text`,this.themeClass,{[`${t}-text--code`]:this.code,[`${t}-text--delete`]:this.delete,[`${t}-text--strong`]:this.strong,[`${t}-text--italic`]:this.italic,[`${t}-text--underline`]:this.underline}],i=(r=(o=this.$slots).default)===null||r===void 0?void 0:r.call(o);return this.code?s("code",{class:a,style:this.cssVars},this.delete?s("del",null,i):i):this.delete?s("del",{class:a,style:this.cssVars},i):s(this.compitableTag||"span",{class:a,style:this.cssVars},i)}});export{Y as N,U as a,X as b};
