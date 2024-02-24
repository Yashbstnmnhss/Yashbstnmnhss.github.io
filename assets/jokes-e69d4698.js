import{a as n,b as x,g as L,h as j,r as v,u as V,ac as D,ad as K,k as w,m as Y,p as u,ae as X,af as Q,ag as F,d as i,c as O,a1 as Z,ah as ee,t as U,s as M,ai as oe,aj as te,J as re,K as le,L as se,M as I,P as d,F as ne,O as k,H as ae,ak as ie}from"./index-02b03318.js";import{p as A,l as de,L as ce,S as ue,g as he}from"./logo-e7785e31.js";import{C as be}from"./ChevronRight-e52cbb24.js";import{u as ge}from"./use-merged-state-34cdad4e.js";import{f as N}from"./format-length-c9d165c6.js";import{N as fe}from"./Space-0d622935.js";import"./render-b454fb41.js";import"./VolumeHighOutline-827aee9e.js";import"./Ellipsis-e87d892c.js";import"./Tooltip-15708770.js";import"./cssr-500da459.js";import"./on-fonts-ready-ec5f85ee.js";import"./use-compitable-40d881de.js";import"./Icon-3d063091.js";import"./Dropdown-8448e3d2.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./get-slot-1efb97e5.js";const me=n("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[n("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),pe={embedded:Boolean,position:A,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},q=Q("n-layout");function ve(e){return L({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),pe),setup(o){const t=v(null),g=v(null),{mergedClsPrefixRef:p,inlineThemeDisabled:h}=V(o),S=j("Layout","-layout",me,F,o,p);function f(c,b){if(o.nativeScrollbar){const{value:m}=t;m&&(b===void 0?m.scrollTo(c):m.scrollTo(c,b))}else{const{value:m}=g;m&&m.scrollTo(c,b)}}D(q,o);let l=0,_=0;const B=c=>{var b;const m=c.target;l=m.scrollLeft,_=m.scrollTop,(b=o.onScroll)===null||b===void 0||b.call(o,c)};K(()=>{if(o.nativeScrollbar){const c=t.value;c&&(c.scrollTop=_,c.scrollLeft=l)}});const T={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},R={scrollTo:f},z=w(()=>{const{common:{cubicBezierEaseInOut:c},self:b}=S.value;return{"--n-bezier":c,"--n-color":o.embedded?b.colorEmbedded:b.color,"--n-text-color":b.textColor}}),y=h?Y("layout",w(()=>o.embedded?"e":""),z,o):void 0;return Object.assign({mergedClsPrefix:p,scrollableElRef:t,scrollbarInstRef:g,hasSiderStyle:T,mergedTheme:S,handleNativeElScroll:B,cssVars:h?void 0:z,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},R)},render(){var o;const{mergedClsPrefix:t,hasSider:g}=this;(o=this.onRender)===null||o===void 0||o.call(this);const p=g?this.hasSiderStyle:void 0,h=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return u("div",{class:h,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,p],onScroll:this.handleNativeElScroll},this.$slots):u(X,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,p]}),this.$slots))}})}const W=ve(!1),ye=n("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[x("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),x("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),xe={position:A,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ce=L({name:"LayoutHeader",props:Object.assign(Object.assign({},j.props),xe),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=V(e),g=j("Layout","-layout-header",ye,F,e,o),p=w(()=>{const{common:{cubicBezierEaseInOut:S},self:f}=g.value,l={"--n-bezier":S};return e.inverted?(l["--n-color"]=f.headerColorInverted,l["--n-text-color"]=f.textColorInverted,l["--n-border-color"]=f.headerBorderColorInverted):(l["--n-color"]=f.headerColor,l["--n-text-color"]=f.textColor,l["--n-border-color"]=f.headerBorderColor),l}),h=t?Y("layout-header",w(()=>e.inverted?"a":"b"),p,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:p,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Se=n("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[x("bordered",[i("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),i("left-placement",[x("bordered",[i("border",`
 right: 0;
 `)])]),x("right-placement",`
 justify-content: flex-start;
 `,[x("bordered",[i("border",`
 left: 0;
 `)]),x("collapsed",[n("layout-toggle-button",[n("base-icon",`
 transform: rotate(180deg);
 `)]),n("layout-toggle-bar",[O("&:hover",[i("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),n("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[n("base-icon",`
 transform: rotate(0);
 `)]),n("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[O("&:hover",[i("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),x("collapsed",[n("layout-toggle-bar",[O("&:hover",[i("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),n("layout-toggle-button",[n("base-icon",`
 transform: rotate(0);
 `)])]),n("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[n("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),n("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[i("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),i("bottom",`
 position: absolute;
 top: 34px;
 `),O("&:hover",[i("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),i("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),i("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),O("&:hover",[i("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),i("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),n("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),x("show-content",[n("layout-sider-scroll-container",{opacity:1})]),x("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),we=L({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(Z,{clsPrefix:e},{default:()=>u(be,null)}))}}),Te=L({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ze={position:A,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Re=L({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),ze),setup(e){const o=ee(q),t=v(null),g=v(null),p=w(()=>N(l.value?e.collapsedWidth:e.width)),h=w(()=>e.collapseMode!=="transform"?{}:{minWidth:N(e.width)}),S=w(()=>o?o.siderPlacement:"left"),f=v(e.defaultCollapsed),l=ge(U(e,"collapsed"),f);function _(a,r){if(e.nativeScrollbar){const{value:s}=t;s&&(r===void 0?s.scrollTo(a):s.scrollTo(a,r))}else{const{value:s}=g;s&&s.scrollTo(a,r)}}function B(){const{"onUpdate:collapsed":a,onUpdateCollapsed:r,onExpand:s,onCollapse:E}=e,{value:P}=l;r&&M(r,!P),a&&M(a,!P),f.value=!P,P?s&&M(s):E&&M(E)}let T=0,R=0;const z=a=>{var r;const s=a.target;T=s.scrollLeft,R=s.scrollTop,(r=e.onScroll)===null||r===void 0||r.call(e,a)};K(()=>{if(e.nativeScrollbar){const a=t.value;a&&(a.scrollTop=R,a.scrollLeft=T)}}),D(de,{collapsedRef:l,collapseModeRef:U(e,"collapseMode")});const{mergedClsPrefixRef:y,inlineThemeDisabled:c}=V(e),b=j("Layout","-layout-sider",Se,F,e,y);function m(a){var r,s;a.propertyName==="max-width"&&(l.value?(r=e.onAfterLeave)===null||r===void 0||r.call(e):(s=e.onAfterEnter)===null||s===void 0||s.call(e))}const J={scrollTo:_},H=w(()=>{const{common:{cubicBezierEaseInOut:a},self:r}=b.value,{siderToggleButtonColor:s,siderToggleButtonBorder:E,siderToggleBarColor:P,siderToggleBarColorHover:G}=r,C={"--n-bezier":a,"--n-toggle-button-color":s,"--n-toggle-button-border":E,"--n-toggle-bar-color":P,"--n-toggle-bar-color-hover":G};return e.inverted?(C["--n-color"]=r.siderColorInverted,C["--n-text-color"]=r.textColorInverted,C["--n-border-color"]=r.siderBorderColorInverted,C["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColorInverted,C.__invertScrollbar=r.__invertScrollbar):(C["--n-color"]=r.siderColor,C["--n-text-color"]=r.textColor,C["--n-border-color"]=r.siderBorderColor,C["--n-toggle-button-icon-color"]=r.siderToggleButtonIconColor),C}),$=c?Y("layout-sider",w(()=>e.inverted?"a":"b"),H,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:g,mergedClsPrefix:y,mergedTheme:b,styleMaxWidth:p,mergedCollapsed:l,scrollContainerStyle:h,siderPlacement:S,handleNativeElScroll:z,handleTransitionend:m,handleTriggerClick:B,inlineThemeDisabled:c,cssVars:H,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},J)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:g}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:N(this.width)}]},this.nativeScrollbar?u("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(X,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),g?g==="bar"?u(Te,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(we,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${o}-layout-sider__border`}):null)}}),ke=["src"],Ue=L({__name:"jokes",setup(e){const o=oe(te());let t=o.sidebar,g=v(!1),p=v("bar"),h=v(0),S=v(240),f=v(32),l=v(32),_=v("transform");const B=()=>t.value=!t.value,T=()=>{const m=window.innerWidth-240<225;S.value=m?window.innerWidth-25:240,f.value=l.value=m?22:32};return re(()=>{t.value=o.sidebar.value,window.addEventListener("resize",T),T()}),le(()=>window.removeEventListener("resize",T)),(R,z)=>(ne(),se(d(W),{style:{height:"100%"}},{default:I(()=>[k(d(Ce),{style:{height:"64px"},bordered:""},{default:I(()=>[k(d(fe),null,{default:I(()=>[ae("img",{onClick:z[0]||(z[0]=y=>R.$router.push("/")),src:d(ce),style:{"max-width":"100%",height:"45px","margin-left":"12px","margin-top":"12px",cursor:"pointer"}},null,8,ke)]),_:1})]),_:1}),k(d(W),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:I(()=>[k(d(Re),{"native-scrollbar":!1,bordered:"","show-trigger":d(p),"collapse-mode":d(_),"collapsed-width":d(h),"show-collapsed-content":d(g),collapsed:d(t),width:d(S),onCollapse:B,onExpand:B},{default:I(()=>[k(ue,{indent:d(f),"root-indent":d(l),layout:"jokes",collapsed:d(t),"get-menu-options":()=>d(he)("jokes")??[]},null,8,["indent","root-indent","collapsed","get-menu-options"])]),_:1},8,["show-trigger","collapse-mode","collapsed-width","show-collapsed-content","collapsed","width"]),k(d(W),{class:"main-content","content-style":"padding: 24px;","native-scrollbar":!1},{default:I(()=>[k(ie,{transition:!0})]),_:1})]),_:1})]),_:1}))}});export{Ue as default};
