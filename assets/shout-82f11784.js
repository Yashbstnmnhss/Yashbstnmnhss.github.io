import{a as d,d as t,b as v,aq as H,c as j,g as M,u as F,h as C,aI as N,k as p,m as O,r as V,p as o,aS as W,aT as q,q as U,aJ as D,an as J,a1 as K,a5 as G,a4 as Q,a2 as X,a3 as Y,aU as Z,aV as ee,E as i}from"./index-02b03318.js";const re=d("alert",`
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
 `,[j("& +",[t("content",{marginTop:"9px"})])]),t("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),t("icon",{transition:"color .3s var(--n-bezier)"})]),oe=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),ie=M({name:"Alert",inheritAttrs:!1,props:oe,setup(n){const{mergedClsPrefixRef:e,mergedBorderedRef:l,inlineThemeDisabled:g,mergedRtlRef:u}=F(n),h=C("Alert","-alert",re,Z,n,e),z=N("Alert",u,e),f=p(()=>{const{common:{cubicBezierEaseInOut:a},self:r}=h.value,{fontSize:y,borderRadius:R,titleFontWeight:I,lineHeight:w,iconSize:A,iconMargin:m,iconMarginRtl:$,closeIconSize:S,closeBorderRadius:T,closeSize:P,closeMargin:_,closeMarginRtl:B,padding:k}=r,{type:s}=n,{left:L,right:E}=ee(m);return{"--n-bezier":a,"--n-color":r[i("color",s)],"--n-close-icon-size":S,"--n-close-border-radius":T,"--n-close-color-hover":r[i("closeColorHover",s)],"--n-close-color-pressed":r[i("closeColorPressed",s)],"--n-close-icon-color":r[i("closeIconColor",s)],"--n-close-icon-color-hover":r[i("closeIconColorHover",s)],"--n-close-icon-color-pressed":r[i("closeIconColorPressed",s)],"--n-icon-color":r[i("iconColor",s)],"--n-border":r[i("border",s)],"--n-title-text-color":r[i("titleTextColor",s)],"--n-content-text-color":r[i("contentTextColor",s)],"--n-line-height":w,"--n-border-radius":R,"--n-font-size":y,"--n-title-font-weight":I,"--n-icon-size":A,"--n-icon-margin":m,"--n-icon-margin-rtl":$,"--n-close-size":P,"--n-close-margin":_,"--n-close-margin-rtl":B,"--n-padding":k,"--n-icon-margin-left":L,"--n-icon-margin-right":E}}),c=g?O("alert",p(()=>n.type[0]),f,n):void 0,b=V(!0),x=()=>{const{onAfterLeave:a,onAfterHide:r}=n;a&&a(),r&&r()};return{rtlEnabled:z,mergedClsPrefix:e,mergedBordered:l,visible:b,handleCloseClick:()=>{var a;Promise.resolve((a=n.onClose)===null||a===void 0?void 0:a.call(n)).then(r=>{r!==!1&&(b.value=!1)})},handleAfterLeave:()=>{x()},mergedTheme:h,cssVars:g?void 0:f,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),o(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,g={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?o("div",Object.assign({},W(this.$attrs,g)),this.closable&&o(q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&o("div",{class:`${e}-alert__border`}),this.showIcon&&o("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},U(l.icon,()=>[o(K,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return o(Y,null);case"info":return o(X,null);case"warning":return o(Q,null);case"error":return o(G,null);default:return null}}})])),o("div",{class:[`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`]},D(l.header,u=>{const h=u||this.title;return h?o("div",{class:`${e}-alert-body__title`},h):null}),l.default&&o("div",{class:`${e}-alert-body__content`},l))):null}})}}),ae=""+new URL("shout-4e4141ed.png",import.meta.url).href;export{ie as N,ae as S};
