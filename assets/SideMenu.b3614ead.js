import{d as k,B as d,W as D,D as v,H as C,p as M,r as L,n as U,bk as Z,K,bl as ve,s as x,a9 as q,b8 as me,I as u,G as y,b4 as he,X as F,a6 as X,a8 as E,a0 as _,F as we,Z as fe,bm as Re,bb as re,aa as Q,E as W,bn as Pe,bo as Te,aO as oe,bp as Ne,u as Ae,f as He,bq as ke,g as Oe,M as $e,o as Ee,l as Le,i as Me}from"./index.f590f622.js";import{C as Be}from"./ChevronRight.22db6d0a.js";import{f as ee}from"./format-length.7f3135aa.js";import{u as te,a as Fe}from"./use-compitable.a3c7374a.js";import{N as je}from"./Ellipsis.1c3ad889.js";import{N as Ke}from"./VolumeHighOutline.c142851c.js";import{N as _e,a as Ve}from"./icon.3ac6fe21.js";import{N as De}from"./Tooltip.93ced477.js";const Ue=k({name:"ChevronDownFilled",render(){return d("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),be=D("n-layout-sider"),J={type:String,default:"static"},qe=v("layout",`
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
`,[v("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),Ge={embedded:Boolean,position:J,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ge=D("n-layout");function We(e){return k({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},M.props),Ge),setup(o){const r=L(null),c=L(null),{mergedClsPrefixRef:i,inlineThemeDisabled:s}=U(o),h=M("Layout","-layout",qe,Z,o,i);function l(I,w){if(o.nativeScrollbar){const{value:A}=r;A&&(w===void 0?A.scrollTo(I):A.scrollTo(I,w))}else{const{value:A}=c;A&&A.scrollTo(I,w)}}K(ge,o);let a=0,N=0;const H=I=>{var w;const A=I.target;a=A.scrollLeft,N=A.scrollTop,(w=o.onScroll)===null||w===void 0||w.call(o,I)};ve(()=>{if(o.nativeScrollbar){const I=r.value;I&&(I.scrollTop=N,I.scrollLeft=a)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},m={scrollTo:l},T=x(()=>{const{common:{cubicBezierEaseInOut:I},self:w}=h.value;return{"--n-bezier":I,"--n-color":o.embedded?w.colorEmbedded:w.color,"--n-text-color":w.textColor}}),P=s?q("layout",void 0,T,o):void 0;return Object.assign({mergedClsPrefix:i,scrollableElRef:r,scrollbarInstRef:c,hasSiderStyle:f,mergedTheme:h,handleNativeElScroll:H,cssVars:s?void 0:T,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender},m)},render(){var o;const{mergedClsPrefix:r,hasSider:c}=this;(o=this.onRender)===null||o===void 0||o.call(this);const i=c?this.hasSiderStyle:void 0,s=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return d("div",{class:s,style:this.cssVars},this.nativeScrollbar?d("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,i],onScroll:this.handleNativeElScroll},this.$slots):d(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,i]}),this.$slots))}})}const wo=We(!1),Ye=v("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),C("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Xe={position:J,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ro=k({name:"LayoutHeader",props:Object.assign(Object.assign({},M.props),Xe),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=U(e),c=M("Layout","-layout-header",Ye,Z,e,o),i=x(()=>{const{common:{cubicBezierEaseInOut:h},self:l}=c.value,a={"--n-bezier":h};return e.inverted?(a["--n-color"]=l.headerColorInverted,a["--n-text-color"]=l.textColorInverted,a["--n-border-color"]=l.headerBorderColorInverted):(a["--n-color"]=l.headerColor,a["--n-text-color"]=l.textColor,a["--n-border-color"]=l.headerBorderColor),a}),s=r?q("layout-header",x(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Ze=v("layout-footer",`
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
`,[C("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 bottom: 0;
 `),C("bordered",`
 border-top: solid 1px var(--n-border-color);
 `)]),Je=Object.assign(Object.assign({},M.props),{inverted:Boolean,position:J,bordered:Boolean}),Po=k({name:"LayoutFooter",props:Je,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=U(e),c=M("Layout","-layout-footer",Ze,Z,e,o),i=x(()=>{const{common:{cubicBezierEaseInOut:h},self:l}=c.value,a={"--n-bezier":h};return e.inverted?(a["--n-color"]=l.footerColorInverted,a["--n-text-color"]=l.textColorInverted,a["--n-border-color"]=l.footerBorderColorInverted):(a["--n-color"]=l.footerColor,a["--n-text-color"]=l.textColor,a["--n-border-color"]=l.footerBorderColor),a}),s=r?q("layout-footer",x(()=>e.inverted?"a":"b"),i,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:i,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("div",{class:[`${o}-layout-footer`,this.themeClass,this.position&&`${o}-layout-footer--${this.position}-positioned`,this.bordered&&`${o}-layout-footer--bordered`],style:this.cssVars},this.$slots)}}),Qe=v("layout-sider",`
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
`,[C("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[C("bordered",[u("border",`
 right: 0;
 `)])]),C("right-placement",`
 justify-content: flex-start;
 `,[C("bordered",[u("border",`
 left: 0;
 `)]),C("collapsed",[v("layout-toggle-button",[v("base-icon",`
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",[y("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),v("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[v("base-icon",`
 transform: rotate(0);
 `)]),v("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[y("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),C("collapsed",[v("layout-toggle-bar",[y("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),v("layout-toggle-button",[v("base-icon",`
 transform: rotate(0);
 `)])]),v("layout-toggle-button",`
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
 `,[v("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),v("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),y("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),y("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),v("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),C("show-content",[v("layout-sider-scroll-container",{opacity:1})]),C("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),eo=k({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},d(he,{clsPrefix:e},{default:()=>d(Be,null)}))}}),oo=k({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return d("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},d("div",{class:`${e}-layout-toggle-bar__top`}),d("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),to={position:J,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},To=k({name:"LayoutSider",props:Object.assign(Object.assign({},M.props),to),setup(e){const o=F(ge),r=L(null),c=L(null),i=x(()=>ee(a.value?e.collapsedWidth:e.width)),s=x(()=>e.collapseMode!=="transform"?{}:{minWidth:ee(e.width)}),h=x(()=>o?o.siderPlacement:"left"),l=L(e.defaultCollapsed),a=te(X(e,"collapsed"),l);function N(R,z){if(e.nativeScrollbar){const{value:S}=r;S&&(z===void 0?S.scrollTo(R):S.scrollTo(R,z))}else{const{value:S}=c;S&&S.scrollTo(R,z)}}function H(){const{"onUpdate:collapsed":R,onUpdateCollapsed:z,onExpand:S,onCollapse:b}=e,{value:p}=a;z&&E(z,!p),R&&E(R,!p),l.value=!p,p?S&&E(S):b&&E(b)}let f=0,m=0;const T=R=>{var z;const S=R.target;f=S.scrollLeft,m=S.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,R)};ve(()=>{if(e.nativeScrollbar){const R=r.value;R&&(R.scrollTop=m,R.scrollLeft=f)}}),K(be,{collapsedRef:a,collapseModeRef:X(e,"collapseMode")});const{mergedClsPrefixRef:P,inlineThemeDisabled:I}=U(e),w=M("Layout","-layout-sider",Qe,Z,e,P);function A(R){var z,S;R.propertyName==="max-width"&&(a.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(S=e.onAfterEnter)===null||S===void 0||S.call(e))}const V={scrollTo:N},B=x(()=>{const{common:{cubicBezierEaseInOut:R},self:z}=w.value,{siderToggleButtonColor:S,siderToggleButtonBorder:b,siderToggleBarColor:p,siderToggleBarColorHover:t}=z,g={"--n-bezier":R,"--n-toggle-button-color":S,"--n-toggle-button-border":b,"--n-toggle-bar-color":p,"--n-toggle-bar-color-hover":t};return e.inverted?(g["--n-color"]=z.siderColorInverted,g["--n-text-color"]=z.textColorInverted,g["--n-border-color"]=z.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,g.__invertScrollbar=z.__invertScrollbar):(g["--n-color"]=z.siderColor,g["--n-text-color"]=z.textColor,g["--n-border-color"]=z.siderBorderColor,g["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),g}),$=I?q("layout-sider",x(()=>e.inverted?"a":"b"),B,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:c,mergedClsPrefix:P,mergedTheme:w,styleMaxWidth:i,mergedCollapsed:a,scrollContainerStyle:s,siderPlacement:h,handleNativeElScroll:T,handleTransitionend:A,handleTriggerClick:H,inlineThemeDisabled:I,cssVars:B,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},V)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),d("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ee(this.width)}]},this.nativeScrollbar?d("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):d(me,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),c?c==="bar"?d(oo,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):d(eo,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?d("div",{class:`${o}-layout-sider__border`}):null)}}),G=D("n-menu"),ne=D("n-submenu"),ie=D("n-menu-item-group"),Y=8;function le(e){const o=F(G),{props:r,mergedCollapsedRef:c}=o,i=F(ne,null),s=F(ie,null),h=x(()=>r.mode==="horizontal"),l=x(()=>h.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=x(()=>{var m;return Math.max((m=r.collapsedIconSize)!==null&&m!==void 0?m:r.iconSize,r.iconSize)}),N=x(()=>{var m;return!h.value&&e.root&&c.value&&(m=r.collapsedIconSize)!==null&&m!==void 0?m:r.iconSize}),H=x(()=>{if(h.value)return;const{collapsedWidth:m,indent:T,rootIndent:P}=r,{root:I,isGroup:w}=e,A=P===void 0?T:P;if(I)return c.value?m/2-a.value/2:A;if(s)return T/2+s.paddingLeftRef.value;if(i)return(w?T/2:T)+i.paddingLeftRef.value}),f=x(()=>{const{collapsedWidth:m,indent:T,rootIndent:P}=r,{value:I}=a,{root:w}=e;return h.value||!w||!c.value?Y:(P===void 0?T:P)+I+Y-(m+I)/2});return{dropdownPlacement:l,activeIconSize:N,maxIconSize:a,paddingLeft:H,iconMarginRight:f,NMenu:o,NSubmenu:i}}const ae={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},pe=Object.assign(Object.assign({},ae),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ro=k({name:"MenuOptionGroup",props:pe,setup(e){K(ne,null);const o=le(e);K(ie,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:r,props:c}=F(G);return function(){const{value:i}=r,s=o.paddingLeft.value,{nodeProps:h}=c,l=h==null?void 0:h(e.tmNode.rawNode);return d("div",{class:`${i}-menu-item-group`,role:"group"},d("div",Object.assign({},l,{class:[`${i}-menu-item-group-title`,l==null?void 0:l.class],style:[(l==null?void 0:l.style)||"",s!==void 0?`padding-left: ${s}px;`:""]}),_(e.title),e.extra?d(we,null," ",_(e.extra)):null),d("div",null,e.tmNodes.map(a=>ce(a,c))))}}}),xe=k({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=F(G);return{menuProps:o,style:x(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:x(()=>{const{maxIconSize:r,activeIconSize:c,iconMarginRight:i}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${c}px`,marginRight:`${i}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:r,renderLabel:c,renderExtra:i,expandIcon:s}}=this,h=r?r(o.rawNode):_(this.icon);return d("div",{onClick:l=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,l)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},h&&d("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),d("div",{class:`${e}-menu-item-content-header`,role:"none"},c?c(o.rawNode):_(this.title),this.extra||i?d("span",{class:`${e}-menu-item-content-header__extra`}," ",i?i(o.rawNode):_(this.extra)):null),this.showArrow?d(he,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>s?s(o.rawNode):d(Ue,null)}):null)}}),ye=Object.assign(Object.assign({},ae),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),no=k({name:"Submenu",props:ye,setup(e){const o=le(e),{NMenu:r,NSubmenu:c}=o,{props:i,mergedCollapsedRef:s,mergedThemeRef:h}=r,l=x(()=>{const{disabled:m}=e;return c!=null&&c.mergedDisabledRef.value||i.disabled?!0:m}),a=L(!1);K(ne,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:l}),K(ie,null);function N(){const{onClick:m}=e;m&&m()}function H(){l.value||(s.value||r.toggleExpand(e.internalKey),N())}function f(m){a.value=m}return{menuProps:i,mergedTheme:h,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:a,paddingLeft:o.paddingLeft,mergedDisabled:l,mergedValue:r.mergedValueRef,childActive:fe(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:x(()=>i.mode==="horizontal"?!1:s.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:x(()=>!l.value&&(i.mode==="horizontal"||s.value)),handlePopoverShowChange:f,handleClick:H}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:r,renderLabel:c}}=this,i=()=>{const{isHorizontal:h,paddingLeft:l,collapsed:a,mergedDisabled:N,maxIconSize:H,activeIconSize:f,title:m,childActive:T,icon:P,handleClick:I,menuProps:{nodeProps:w},dropdownShow:A,iconMarginRight:V,tmNode:B,mergedClsPrefix:$}=this,R=w==null?void 0:w(B.rawNode);return d("div",Object.assign({},R,{class:[`${$}-menu-item`,R==null?void 0:R.class],role:"menuitem"}),d(xe,{tmNode:B,paddingLeft:l,collapsed:a,disabled:N,iconMarginRight:V,maxIconSize:H,activeIconSize:f,title:m,showArrow:!h,childActive:T,clsPrefix:$,icon:P,hover:A,onClick:I}))},s=()=>d(Re,null,{default:()=>{const{tmNodes:h,collapsed:l}=this;return l?null:d("div",{class:`${o}-submenu-children`,role:"menu"},h.map(a=>ce(a,this.menuProps)))}});return this.root?d(_e,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:c}),{default:()=>d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),this.isHorizontal?null:s())}):d("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},i(),s())}}),Ce=Object.assign(Object.assign({},ae),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),io=k({name:"MenuOption",props:Ce,setup(e){const o=le(e),{NSubmenu:r,NMenu:c}=o,{props:i,mergedClsPrefixRef:s,mergedCollapsedRef:h}=c,l=r?r.mergedDisabledRef:{value:!1},a=x(()=>l.value||e.disabled);function N(f){const{onClick:m}=e;m&&m(f)}function H(f){a.value||(c.doSelect(e.internalKey,e.tmNode.rawNode),N(f))}return{mergedClsPrefix:s,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:c.mergedThemeRef,menuProps:i,dropdownEnabled:fe(()=>e.root&&h.value&&i.mode!=="horizontal"&&!a.value),selected:x(()=>c.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:H}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:r,menuProps:{renderLabel:c,nodeProps:i}}=this,s=i==null?void 0:i(r.rawNode);return d("div",Object.assign({},s,{role:"menuitem",class:[`${e}-menu-item`,s==null?void 0:s.class]}),d(De,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>c?c(r.rawNode):_(this.title),trigger:()=>d(xe,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),lo=k({name:"MenuDivider",setup(){const e=F(G),{mergedClsPrefixRef:o,isHorizontalRef:r}=e;return()=>r.value?null:d("div",{class:`${o.value}-menu-divider`})}}),ao=re(pe),co=re(Ce),so=re(ye);function uo(e){return e.type==="divider"||e.type==="render"}function vo(e){return e.type==="divider"}function ce(e,o){const{rawNode:r}=e;if(uo(r))return vo(r)?d(lo,Object.assign({key:e.key},r.props)):void 0;const{labelField:c}=o,{key:i,level:s,isGroup:h}=e,l=Object.assign(Object.assign({},r),{title:r.title||r[c],extra:r.titleExtra||r.extra,key:i,internalKey:i,level:s,root:s===0,isGroup:h});return e.children?e.isGroup?d(ro,Q(l,ao,{tmNode:e,tmNodes:e.children,key:i})):d(no,Q(l,so,{key:i,rawNodes:r[o.childrenField],tmNodes:e.children,tmNode:e})):d(io,Q(l,co,{key:i,tmNode:e}))}const se=[y("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[y("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],de=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),v("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],mo=y([v("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[C("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[v("submenu","margin: 0;"),v("menu-item","margin: 0;"),v("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[y("&::before","display: none;"),C("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),v("menu-item-content",[C("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),C("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[y("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),W("disabled",[W("selected, child-active",[y("&:focus-within",de)]),C("selected",[j(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),C("child-active",[j(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[y("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),j("border-bottom: 2px solid var(--n-border-color-horizontal);",de)]),v("menu-item-content-header",[y("a","color: var(--n-item-text-color-horizontal);")])])]),C("collapsed",[v("menu-item-content",[C("selected",[y("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),v("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),v("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),v("menu-item-content",`
 box-sizing: border-box;
 line-height: 1.75;
 height: 100%;
 display: grid;
 grid-template-areas: "icon content arrow";
 grid-template-columns: auto 1fr auto;
 align-items: center;
 cursor: pointer;
 position: relative;
 padding-right: 18px;
 transition:
 background-color .3s var(--n-bezier),
 padding-left .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[y("> *","z-index: 1;"),y("&::before",`
 z-index: auto;
 content: "";
 background-color: #0000;
 position: absolute;
 left: 8px;
 right: 8px;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),C("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),C("collapsed",[u("arrow","transform: rotate(0);")]),C("selected",[y("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[y("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),C("child-active",[v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[y("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),W("disabled",[W("selected, child-active",[y("&:focus-within",se)]),C("selected",[j(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[y("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),C("child-active",[j(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),v("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[y("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),C("selected",[j(null,[y("&::before","background-color: var(--n-item-color-active-hover);")])]),j(null,se)]),u("icon",`
 grid-area: icon;
 color: var(--n-item-icon-color);
 transition:
 color .3s var(--n-bezier),
 font-size .3s var(--n-bezier),
 margin-right .3s var(--n-bezier);
 box-sizing: content-box;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 `),u("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),v("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[y("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[y("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),u("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),v("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[v("menu-item-content",`
 height: var(--n-item-height);
 `),v("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Pe({duration:".2s"})])]),v("menu-item-group",[v("menu-item-group-title",`
 margin-top: 6px;
 color: var(--n-group-text-color);
 cursor: default;
 font-size: .93em;
 height: 36px;
 display: flex;
 align-items: center;
 transition:
 padding-left .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)])]),v("menu-tooltip",[y("a",`
 color: inherit;
 text-decoration: none;
 `)]),v("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function j(e,o){return[C("hover",e,o),y("&:hover",e,o)]}const ho=Object.assign(Object.assign({},M.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),fo=k({name:"Menu",props:ho,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=U(e),c=M("Menu","-menu",mo,Te,e,o),i=F(be,null),s=x(()=>{var b;const{collapsed:p}=e;if(p!==void 0)return p;if(i){const{collapseModeRef:t,collapsedRef:g}=i;if(t.value==="width")return(b=g.value)!==null&&b!==void 0?b:!1}return!1}),h=x(()=>{const{keyField:b,childrenField:p}=e;return Ve(e.items||e.options,{getChildren(t){return t[p]},getKey(t){var g;return(g=t[b])!==null&&g!==void 0?g:t.name}})}),l=x(()=>new Set(h.value.treeNodes.map(b=>b.key))),{watchProps:a}=e,N=L(null);a!=null&&a.includes("defaultValue")?oe(()=>{N.value=e.defaultValue}):N.value=e.defaultValue;const H=X(e,"value"),f=te(H,N),m=L([]),T=()=>{m.value=e.defaultExpandAll?h.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||h.value.getPath(f.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?oe(T):T();const P=Fe(e,["expandedNames","expandedKeys"]),I=te(P,m),w=x(()=>h.value.treeNodes),A=x(()=>h.value.getPath(f.value).keyPath);K(G,{props:e,mergedCollapsedRef:s,mergedThemeRef:c,mergedValueRef:f,mergedExpandedKeysRef:I,activePathRef:A,mergedClsPrefixRef:o,isHorizontalRef:x(()=>e.mode==="horizontal"),invertedRef:X(e,"inverted"),doSelect:V,toggleExpand:$});function V(b,p){const{"onUpdate:value":t,onUpdateValue:g,onSelect:O}=e;g&&E(g,b,p),t&&E(t,b,p),O&&E(O,b,p),N.value=b}function B(b){const{"onUpdate:expandedKeys":p,onUpdateExpandedKeys:t,onExpandedNamesChange:g,onOpenNamesChange:O}=e;p&&E(p,b),t&&E(t,b),g&&E(g,b),O&&E(O,b),m.value=b}function $(b){const p=Array.from(I.value),t=p.findIndex(g=>g===b);if(~t)p.splice(t,1);else{if(e.accordion&&l.value.has(b)){const g=p.findIndex(O=>l.value.has(O));g>-1&&p.splice(g,1)}p.push(b)}B(p)}const R=b=>{const p=h.value.getPath(b!=null?b:f.value,{includeSelf:!1}).keyPath;if(!p.length)return;const t=Array.from(I.value),g=new Set([...t,...p]);e.accordion&&l.value.forEach(O=>{g.has(O)&&!p.includes(O)&&g.delete(O)}),B(Array.from(g))},z=x(()=>{const{inverted:b}=e,{common:{cubicBezierEaseInOut:p},self:t}=c.value,{borderRadius:g,borderColorHorizontal:O,fontSize:ze,itemHeight:Ie,dividerColor:Se}=t,n={"--n-divider-color":Se,"--n-bezier":p,"--n-font-size":ze,"--n-border-color-horizontal":O,"--n-border-radius":g,"--n-item-height":Ie};return b?(n["--n-group-text-color"]=t.groupTextColorInverted,n["--n-color"]=t.colorInverted,n["--n-item-text-color"]=t.itemTextColorInverted,n["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,n["--n-item-text-color-active"]=t.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=t.itemIconColorInverted,n["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=t.arrowColorInverted,n["--n-arrow-color-hover"]=t.arrowColorHoverInverted,n["--n-arrow-color-active"]=t.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=t.itemColorHoverInverted,n["--n-item-color-active"]=t.itemColorActiveInverted,n["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=t.groupTextColor,n["--n-color"]=t.color,n["--n-item-text-color"]=t.itemTextColor,n["--n-item-text-color-hover"]=t.itemTextColorHover,n["--n-item-text-color-active"]=t.itemTextColorActive,n["--n-item-text-color-child-active"]=t.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,n["--n-item-icon-color"]=t.itemIconColor,n["--n-item-icon-color-hover"]=t.itemIconColorHover,n["--n-item-icon-color-active"]=t.itemIconColorActive,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=t.arrowColor,n["--n-arrow-color-hover"]=t.arrowColorHover,n["--n-arrow-color-active"]=t.arrowColorActive,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,n["--n-arrow-color-child-active"]=t.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,n["--n-item-color-hover"]=t.itemColorHover,n["--n-item-color-active"]=t.itemColorActive,n["--n-item-color-active-hover"]=t.itemColorActiveHover,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),n}),S=r?q("menu",x(()=>e.inverted?"a":"b"),z,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:P,uncontrolledExpanededKeys:m,mergedExpandedKeys:I,uncontrolledValue:N,mergedValue:f,activePath:A,tmNodes:w,mergedTheme:c,mergedCollapsed:s,cssVars:r?void 0:z,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,showOption:R}},render(){const{mergedClsPrefix:e,mode:o,themeClass:r,onRender:c}=this;return c==null||c(),d("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(i=>ce(i,this.$props)))}});function ue(e,o){return()=>d(Ne,typeof e=="string"?{to:e}:e,{default:()=>d(je,null,{default:()=>o})})}function bo(e){return()=>d(Ke,null,{default:()=>d(e)})}const No=k({props:{collapsed:{type:Boolean},layout:null,getMenuOptions:null},setup(e){const o=e,r=Ae(),{t:c,te:i}=He(),s=ke(),h=L(),l=L();Oe(()=>{h.value="",l.value=o.getMenuOptions()}),oe(()=>{var f,m;s.name!==h.value&&(h.value=(m=(f=s.name)==null?void 0:f.toString())!=null?m:"")}),$e(()=>r.language,(f,m)=>{f!==m&&(l.value=l.value)});const a=f=>{h.value=f},N=f=>{var P;var m=`layouts.${o.layout}.${f.key}`;if(!f.link)return f.label?f.label:c(m);if(!i(m))return ue(f.link,(P=f.label)!=null?P:f.key)();var T=c(m);return"link"in f?ue(f.link,T)():T},H=f=>"iconType"in f?bo(f.iconType)():null;return(f,m)=>(Ee(),Le(Me(fo),{value:h.value,options:l.value,collapsed:e.collapsed,accordion:"","onUpdate:value":m[0]||(m[0]=T=>a(T)),"render-icon":H,"render-label":N},null,8,["value","options","collapsed"]))}});export{wo as N,No as _,Ro as a,To as b,Po as c};
