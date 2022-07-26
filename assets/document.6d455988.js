import{b as C}from"./route-block.b5bad31b.js";import{e as m,f as i,$ as M,t as V,g as j,d as p,u as O,i as z,ar as W,m as B,p as Z,z as q,h as u,O as K,bj as Q,I as G,N as J,b_ as U,b$ as X,c0 as Y,bZ as ee,F as te,Z as ne,ck as ue,D as oe,n as f,c as re,ae as r,ad as a,af as s,bH as ae,Q as se,ah as o,o as ie,a5 as D}from"./index.2814604b.js";import{N as le}from"./headers.d8006a67.js";import{N as ce}from"./blockquote.d749c315.js";import{N as de,a as F}from"./Tabs.45fd08ea.js";import"./throttle.33c991f3.js";var fe=m("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
`,[i("icon",{color:"var(--n-icon-color)"}),m("alert-body",{border:"var(--n-border)",padding:"var(--n-padding)"},[i("title",{color:"var(--n-title-text-color)"}),i("content",{color:"var(--n-content-text-color)"})]),M({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),i("icon",`
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
 `),i("close",`
 transition: color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 font-size: var(--n-close-size);
 `),V("show-icon",[m("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),m("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[i("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j("& +",[i("content",{marginTop:"9px"})])]),i("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),i("icon",{transition:"color .3s var(--n-bezier)"})]);const he=Object.assign(Object.assign({},z.props),{title:{type:String,default:void 0},showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},closable:{type:Boolean,default:!1},onClose:Function,onAfterLeave:{type:Function,default:void 0},onAfterHide:{type:Function,validator:()=>!0,default:void 0}});var Fe=p({name:"Alert",inheritAttrs:!1,props:he,setup(n){const{mergedClsPrefixRef:e,inlineThemeDisabled:l,mergedRtlRef:A}=O(n),v=z("Alert","-alert",fe,ue,n,e),g=W("Alert",A,e),E=B(()=>{const{common:{cubicBezierEaseInOut:c},self:t}=v.value,{fontSize:x,borderRadius:N,titleFontWeight:w,lineHeight:R,iconSize:T,iconMargin:b,iconMarginRtl:I,closeSize:P,closeMargin:$,closeMarginRtl:k,padding:L}=t,{type:d}=n,{left:S,right:H}=oe(b);return{"--n-bezier":c,"--n-color":t[f("color",d)],"--n-close-color":t[f("closeColor",d)],"--n-close-color-hover":t[f("closeColorHover",d)],"--n-close-color-pressed":t[f("closeColorPressed",d)],"--n-icon-color":t[f("iconColor",d)],"--n-border":t[f("border",d)],"--n-title-text-color":t[f("titleTextColor",d)],"--n-content-text-color":t[f("contentTextColor",d)],"--n-line-height":R,"--n-border-radius":N,"--n-font-size":x,"--n-title-font-weight":w,"--n-icon-size":T,"--n-icon-margin":b,"--n-icon-margin-rtl":I,"--n-close-size":P,"--n-close-margin":$,"--n-close-margin-rtl":k,"--n-padding":L,"--n-icon-margin-left":S,"--n-icon-margin-right":H}}),h=l?Z("alert",B(()=>n.type[0]),E,n):void 0,_=q(!0),y=()=>{const{onAfterLeave:c,onAfterHide:t}=n;c&&c(),t&&t()};return{rtlEnabled:g,mergedClsPrefix:e,visible:_,handleCloseClick:()=>{var c;Promise.resolve((c=n.onClose)===null||c===void 0?void 0:c.call(n)).then(t=>{t!==!1&&(_.value=!1)})},handleAfterLeave:()=>{y()},mergedTheme:v,cssVars:l?void 0:E,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var n;return(n=this.onRender)===null||n===void 0||n.call(this),u(ne,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:e,$slots:l}=this,A={class:[`${e}-alert`,this.themeClass,this.showIcon&&`${e}-alert--show-icon`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?u("div",Object.assign({},K(this.$attrs,A)),this.closable&&u(Q,{clsPrefix:e,class:`${e}-alert__close`,onClick:this.handleCloseClick}),this.showIcon&&u("div",{class:`${e}-alert__icon`,"aria-hidden":"true"},G(l.icon,()=>[u(J,{clsPrefix:e},{default:()=>{switch(this.type){case"success":return u(ee,null);case"info":return u(Y,null);case"warning":return u(X,null);case"error":return u(U,null);default:return null}}})])),u("div",{class:`${e}-alert-body`},te(l.header,v=>{const g=v||this.title;return g?u("div",{class:`${e}-alert-body__title`},g):null}),l.default&&u("div",{class:`${e}-alert-body__content`},l))):null}})}});const ve=o("Fuzeland\u7F16\u5E74\u53F2"),ge=o(' \u300AFuzeland\u300B,\u4E8C\u5341\u4E94\u53F2\u4E4B\u4E00,\u6700\u521D\u79F0\u4E3A\u300AFuzeland\u7F16\u5E74\u53F2\u300B,\u901A\u5E38\u8BD1\u4E3A"\u5085\u5170",\u73B0\u53C8\u79F0\u300ACrafuzey\u300B,\u4F5C\u8005\u4E0D\u7965 '),me=D("small",null,"(\u5B66\u672F\u754C\u63A8\u6D4B\u662F\u6700\u65E9\u5230\u8FBE\u9F50\u9C81\u6D77\u7684\u52D8\u6D4B\u961F\u5458)",-1),Ae=o(" \u3002\u5176\u4E3A\u4E16\u754C\u4E0A "),Ee=D("strong",null,"\u7B2C\u4E00\u90E8\u5B8C\u6574",-1),_e=o(" \u8BB0\u8F7DFuzeland\u7684\u7F16\u5E74\u4F53\u7C7B\u767E\u79D1\u4F5C\u54C1,\u63CF\u8FF0\u4E86Fuzeland\u81EA\u88AB\u53D1\u73B0\u4EE5\u6765\u81F3\u4ECA\u7EA6\u767E\u5E74\u7684\u5386\u53F2,\u653F\u6CBB,\u4EBA\u6587\u7B49, \u5C06Fuzist\u4EEC\u7684\u667A\u6167\u4F18\u7F8E\u7684\u53D9\u8FF0\u51FA\u6765, \u662F\u6700\u4F1F\u5927\u7684\u7F16\u5E74\u4F53\u767E\u79D1\u4E4B\u4E00\u3002 "),be=o("\u{1F6A7}\u524D\u9762\u7684\u86C6, \u7B49\u6211\u4EC0\u4E48\u65F6\u5019\u5199\u5B8C\u5728\u6765\u63A2\u7D22\u5427!"),Ce=o(" \u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7}\u{1F6A7} "),Be=o("\u554A\u554A\u554A\u5148\u4E0D\u8981\u8FDB\u6765\u554A"),pe=o("\u{1F6A7}\u65BD\u5DE5\u4E2D\u65BD\u5DE5\u4E2D\u{1F6A7}"),ze=o("\u5FEB\u70B9\u8D70\u554A\u554A\u554A"),De=o("\u6012\u5974\u52AA\u5F29\u554A\u554Aw(\uFF9F\u0414\uFF9F)w"),ye=o("\u989D\u8BF4\u8D77\u6765\u6211\u539F\u795E\u4EFB\u52A1\u8FD8\u6CA1\u505A\u5B8C"),xe=p({setup(n){return(e,l)=>(ie(),re(se,null,[r(s(le),null,{default:a(()=>[ve]),_:1}),r(s(ce),null,{default:a(()=>[ge,me,Ae,Ee,_e]),_:1}),r(s(Fe),{type:"warning"},{default:a(()=>[be]),_:1}),Ce,r(s(ae),{hoverable:""},{default:a(()=>[r(s(de),{type:"line",animated:""},{default:a(()=>[r(s(F),{name:"\u5730\u7406"},{default:a(()=>[Be]),_:1}),r(s(F),{name:"\u5386\u53F2"},{default:a(()=>[pe]),_:1}),r(s(F),{name:"\u4EBA\u6587"},{default:a(()=>[ze]),_:1}),r(s(F),{name:"\u7406\u5316"},{default:a(()=>[De]),_:1}),r(s(F),{name:"\u653F\u6CBB"},{default:a(()=>[ye]),_:1})]),_:1})]),_:1})],64))}});typeof C=="function"&&C(xe);export{xe as default};
