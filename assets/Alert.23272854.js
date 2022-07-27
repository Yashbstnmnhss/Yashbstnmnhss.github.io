import{e as u,f as o,$ as S,t as E,g as k,d as B,u as F,i as p,ar as H,m,p as M,z as N,h as r,O,bl as j,I as V,N as W,c5 as D,c6 as K,c7 as Z,c4 as q,F as G,Z as J,cp as Q,D as U,n as a}from"./index.cd407dcc.js";var X=u("alert",`
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
 `,[k("& +",[o("content",{marginTop:"9px"})])]),o("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),o("icon",{transition:"color .3s var(--n-bezier)"})]);const Y=Object.assign(Object.assign({},p.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var re=B({name:"Alert",inheritAttrs:!1,props:Y,setup(t){const{mergedClsPrefixRef:e,inlineThemeDisabled:l,mergedRtlRef:h}=F(t),d=p("Alert","-alert",X,Q,t,e),f=H("Alert",h,e),v=m(()=>{const{common:{cubicBezierEaseInOut:i},self:n}=d.value,{fontSize:z,borderRadius:y,titleFontWeight:x,lineHeight:A,iconSize:R,iconMargin:b,iconMarginRtl:I,closeSize:w,closeMargin:P,closeMarginRtl:T,padding:$}=n,{type:s}=t,{left:_,right:L}=U(b);return{"--n-bezier":i,"--n-color":n[a("color",s)],"--n-close-color":n[a("closeColor",s)],"--n-close-color-hover":n[a("closeColorHover",s)],"--n-close-color-pressed":n[a("closeColorPressed",s)],"--n-icon-color":n[a("iconColor",s)],"--n-border":n[a("border",s)],"--n-title-text-color":n[a("titleTextColor",s)],"--n-content-text-color":n[a("contentTextColor",s)],"--n-line-height":A,"--n-border-radius":y,"--n-font-size":z,"--n-title-font-weight":x,"--n-icon-size":R,"--n-icon-margin":b,"--n-icon-margin-rtl":I,"--n-close-size":w,"--n-close-margin":P,"--n-close-margin-rtl":T,"--n-padding":$,"--n-icon-margin-left":_,"--n-icon-margin-right":L}}),c=l?M("alert",m(()=>t.type[0]),v,t):void 0,g=N(!0),C=()=>{const{onAfterLeave:i,onAfterHide:n}=t;i&&i(),n&&n()};return{rtlEnabled:f,mergedClsPrefix:e,visible:g,handleCloseClick:()=>{var i;Promise.resolve((i=t.onClose)===null||i===void 0?void 0:i.call(t)).then(n=>{n!==!1&&(g.value=!1)})},handleAfterLeave:()=>{C()},mergedTheme:d,cssVars:l?void 0:v,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var t;return(t=this.onRender)===null||t===void 0||t.call(this),r(J,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,h={class:[`${e}-alert`,this.themeClass,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},O(this.$attrs,h)),this.closable&&r(j,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&r("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},V(l.icon,()=>[r(W,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return r(q,null);case"info":return r(Z,null);case"warning":return r(K,null);case"error":return r(D,null);default:return null}}})])),r("div",{class:`${e}-alert-body`},G(l.header,d=>{const f=d||this.title;return f?r("div",{class:`${e}-alert-body__title`},f):null}),l.default&&r("div",{class:`${e}-alert-body__content`},l))):null}})}});export{re as N};
