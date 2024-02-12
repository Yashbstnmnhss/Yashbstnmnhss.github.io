import{a as d,J as t,b as v,a9 as H,c as j,d as M,u as F,e as z,aE as N,g as p,h as O,r as W,i as o,az as V,bY as J,aH as K,aG as D,a6 as G,K as Y,M as Z,W as q,L as Q,S as U,bZ as X,aJ as ee,j as s}from"./index-1b78ee11.js";const re=d("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[t("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),v("closable",[d("alert-body",[t("title",`
 padding-right: 24px;
 `)])]),t("icon",{color:"var(--n-icon-color)"}),d("alert-body",{padding:"var(--n-padding)"},[t("title",{color:"var(--n-title-text-color)"}),t("content",{color:"var(--n-content-text-color)"})]),H({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),t("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),t("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),v("show-icon",[d("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),v("right-adjust",[d("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),d("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[t("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),oe=Object.assign(Object.assign({},z.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),se=M({name:"Alert",inheritAttrs:!1,props:oe,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:l,inlineThemeDisabled:g,mergedRtlRef:u}=F(n),h=z("Alert","-alert",re,X,n,e),C=N("Alert",u,e),b=p(()=>{const{common:{cubicBezierEaseInOut:a},self:r}=h.value,{fontSize:y,borderRadius:R,titleFontWeight:I,lineHeight:A,iconSize:$,iconMargin:m,iconMarginRtl:w,closeIconSize:P,closeBorderRadius:T,closeSize:_,closeMargin:B,closeMarginRtl:S,padding:L}=r,{type:i}=n,{left:k,right:E}=ee(m);return{"--n-bezier":a,"--n-color":r[s("color",i)],"--n-close-icon-size":P,"--n-close-border-radius":T,"--n-close-color-hover":r[s("closeColorHover",i)],"--n-close-color-pressed":r[s("closeColorPressed",i)],"--n-close-icon-color":r[s("closeIconColor",i)],"--n-close-icon-color-hover":r[s("closeIconColorHover",i)],"--n-close-icon-color-pressed":r[s("closeIconColorPressed",i)],"--n-icon-color":r[s("iconColor",i)],"--n-border":r[s("border",i)],"--n-title-text-color":r[s("titleTextColor",i)],"--n-content-text-color":r[s("contentTextColor",i)],"--n-line-height":A,"--n-border-radius":R,"--n-font-size":y,"--n-title-font-weight":I,"--n-icon-size":$,"--n-icon-margin":m,"--n-icon-margin-rtl":w,"--n-close-size":_,"--n-close-margin":B,"--n-close-margin-rtl":S,"--n-padding":L,"--n-icon-margin-left":k,"--n-icon-margin-right":E}}),c=g?O("alert",p(()=>n.type[0]),b,n):void 0,f=W(!0),x=()=>{const{onAfterLeave:a,onAfterHide:r}=n;a&&a(),r&&r()};return{rtlEnabled:C,mergedClsPrefix:e,mergedBordered:l,visible:f,handleCloseClick:()=>{var a;Promise.resolve((a=n.onClose)===null||a===void 0?void 0:a.call(n)).then(r=>{r!==!1&&(f.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:h,cssVars:g?void 0:b,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),o(G,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,g={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?o("div",Object.assign({},V(this.$attrs,g)),this.closable&&o(J,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&o("div",{class:`${e}-alert__border`}),this.showIcon&&o("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},K(l.icon,()=>[o(Y,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return o(U,null);case"info":return o(Q,null);case"warning":return o(q,null);case"error":return o(Z,null);default:return null}}})])),o("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},D(l.header,u=>{const h=u||this.title;return h?o("div",{class:`${e}-alert-body__title`},h):null}),l.default&&o("div",{class:`${e}-alert-body__content`},l))):null}})}});export{se as N};
