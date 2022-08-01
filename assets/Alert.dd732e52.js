import{c as u,b as o,Z as S,q as E,e as k,d as B,u as H,f as p,ar as M,k as m,m as N,x as F,h as r,L as j,bV as O,G as V,N as W,c6 as D,c7 as q,c8 as G,c5 as K,D as X,X as Z,co as J,B as Q,l as a}from"./index.3d1c08e2.js";var U=u("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
`,[o("icon",{color:"var(--n-icon-color)"}),u("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[o("title",{color:"var(--n-title-text-color)"}),o("content",{color:"var(--n-content-text-color)"})]),S({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),o("icon",`
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
 `),o("close",`
 transition: color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 `),E("show-icon",[u("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),u("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[o("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[k("& +",[o("content",{marginTop:"9px"})])]),o("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),o("icon",{transition:"color .3s var(--n-bezier)"})]);const Y=Object.assign(Object.assign({},p.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var re=B({name:"Alert",inheritAttrs:!1,props:Y,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:l,mergedRtlRef:h}=H(t),d=p("Alert","-alert",U,J,t,e),f=M("Alert",h,e),v=m(()=>{const{common:{cubicBezierEaseInOut:i},self:n}=d.value,{fontSize:z,borderRadius:y,titleFontWeight:x,lineHeight:A,iconSize:R,iconMargin:b,iconMarginRtl:I,closeSize:w,closeMargin:P,closeMarginRtl:T,padding:L}=n,{type:s}=t,{left:_,right:$}=Q(b);return{"--n-bezier":i,"--n-color":n[a("color",s)],"--n-close-color":n[a("closeColor",s)],"--n-close-color-hover":n[a("closeColorHover",s)],"--n-close-color-pressed":n[a("closeColorPressed",s)],"--n-icon-color":n[a("iconColor",s)],"--n-border":n[a("border",s)],"--n-title-text-color":n[a("titleTextColor",s)],"--n-content-text-color":n[a("contentTextColor",s)],"--n-line-height":A,"--n-border-radius":y,"--n-font-size":z,"--n-title-font-weight":x,"--n-icon-size":R,"--n-icon-margin":b,"--n-icon-margin-rtl":I,"--n-close-size":w,"--n-close-margin":P,"--n-close-margin-rtl":T,"--n-padding":L,"--n-icon-margin-left":_,"--n-icon-margin-right":$}}),c=l?N("alert",m(()=>t.type[0]),v,t):void 0,g=F(!0),C=()=>{const{onAfterLeave:i,onAfterHide:n}=t;i&&i(),n&&n()};return{rtlEnabled:f,mergedClsPrefix:e,visible:g,handleCloseClick:()=>{var i;Promise.resolve((i=t.onClose)===null||i===void 0?void 0:i.call(t)).then(n=>{n!==!1&&(g.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:d,cssVars:l?void 0:v,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var t;return(t=this.onRender)===null||t===void 0||t.call(this),r(Z,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,h={class:[`${e}-alert`,this.themeClass,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},j(this.$attrs,h)),this.closable&&r(O,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},V(l.icon,()=>[r(W,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(K,null);case"info":return r(G,null);case"warning":return r(q,null);case"error":return r(D,null);default:return null}}})])),r("div",{class:`${e}-alert-body`},X(l.header,d=>{const f=d||this.title;return f?r("div",{class:`${e}-alert-body__title`},f):null}),l.default&&r("div",{class:`${e}-alert-body__content`},l))):null}})}});export{re as N};
