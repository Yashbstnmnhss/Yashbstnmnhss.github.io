import{D as d,H as m,I as s,bn as L,G as B,d as F,n as M,p as C,q as N,s as p,b6 as j,v as i,a9 as O,r as D,B as r,$ as V,bD as W,b9 as G,aT as q,bm as K,bE as J,b4 as Q,bF as U,bG as X,bH as Y,bI as Z}from"./index.f590f622.js";const ee=d("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[m("closable",[d("alert-body",[s("title",`
 padding-right: 24px;
 `)])]),s("icon",{color:"var(--n-icon-color)"}),d("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[s("title",{color:"var(--n-title-text-color)"}),s("content",{color:"var(--n-content-text-color)"})]),L({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),s("icon",`
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
 `),s("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),m("show-icon",[d("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),d("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[s("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[B("& +",[s("content",{marginTop:"9px"})])]),s("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),s("icon",{transition:"color .3s var(--n-bezier)"})]),ne=Object.assign(Object.assign({},C.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),se=F({name:"Alert",inheritAttrs:!1,props:ne,setup(o){const{mergedClsPrefixRef:n,inlineThemeDisabled:a,mergedRtlRef:u}=M(o),h=C("Alert","-alert",ee,J,o,n),v=N("Alert",u,n),g=p(()=>{const{common:{cubicBezierEaseInOut:l},self:e}=h.value,{fontSize:x,borderRadius:y,titleFontWeight:I,lineHeight:R,iconSize:A,iconMargin:f,iconMarginRtl:w,closeIconSize:T,closeBorderRadius:P,closeSize:$,closeMargin:S,closeMarginRtl:_,padding:k}=e,{type:t}=o,{left:E,right:H}=j(f);return{"--n-bezier":l,"--n-color":e[i("color",t)],"--n-close-icon-size":T,"--n-close-border-radius":P,"--n-close-color-hover":e[i("closeColorHover",t)],"--n-close-color-pressed":e[i("closeColorPressed",t)],"--n-close-icon-color":e[i("closeIconColor",t)],"--n-close-icon-color-hover":e[i("closeIconColorHover",t)],"--n-close-icon-color-pressed":e[i("closeIconColorPressed",t)],"--n-icon-color":e[i("iconColor",t)],"--n-border":e[i("border",t)],"--n-title-text-color":e[i("titleTextColor",t)],"--n-content-text-color":e[i("contentTextColor",t)],"--n-line-height":R,"--n-border-radius":y,"--n-font-size":x,"--n-title-font-weight":I,"--n-icon-size":A,"--n-icon-margin":f,"--n-icon-margin-rtl":w,"--n-close-size":$,"--n-close-margin":S,"--n-close-margin-rtl":_,"--n-padding":k,"--n-icon-margin-left":E,"--n-icon-margin-right":H}}),c=a?O("alert",p(()=>o.type[0]),g,o):void 0,b=D(!0),z=()=>{const{onAfterLeave:l,onAfterHide:e}=o;l&&l(),e&&e()};return{rtlEnabled:v,mergedClsPrefix:n,visible:b,handleCloseClick:()=>{var l;Promise.resolve((l=o.onClose)===null||l===void 0?void 0:l.call(o)).then(e=>{e!==!1&&(b.value=!1)})},handleAfterLeave:()=>{z()},mergedTheme:h,cssVars:a?void 0:g,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;return(o=this.onRender)===null||o===void 0||o.call(this),r(K,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:n,$slots:a}=this,u={class:[`${n}-alert`,this.themeClass,this.closable&&`${n}-alert--closable`,this.showIcon&&`${n}-alert--show-icon`,this.rtlEnabled&&`${n}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?r("div",Object.assign({},V(this.$attrs,u)),this.closable&&r(W,{clsPrefix:n,class:`${n}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&r("div",{class:`${n}-alert__icon`,"aria-hidden":"true"},G(a.icon,()=>[r(Q,{clsPrefix:n},{default:()=>{switch(this.type){case"success":return r(Z,null);case"info":return r(Y,null);case"warning":return r(X,null);case"error":return r(U,null);default:return null}}})])),r("div",{class:`${n}-alert-body`},q(a.header,h=>{const v=h||this.title;return v?r("div",{class:`${n}-alert-body__title`},v):null}),a.default&&r("div",{class:`${n}-alert-body__content`},a))):null}})}});export{se as N};
