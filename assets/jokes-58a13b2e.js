import{a as E,h as v,a0 as J,I as m,T as S,b as V,r as H,u as te,a1 as he,a2 as W,a3 as Pe,e as y,K as re,a4 as Ne,J as u,Q as I,L as Te,i as K,a5 as oe,a6 as B,a7 as q,$ as Xe,a8 as se,a9 as Je,aa as ie,ab as fe,R as X,ac as Qe,V as de,ad as Ze,ae as eo,af as oo,o as Ae,z as to,ag as ro,s as _e,ah as no,D as ke,w as He,y as O,q as we,ai as io,aj as lo,x as G,E as U,F as ao,ak as co}from"./index-fe2ea4cb.js";import{L as so,a as uo}from"./menu-3f78b3a8.js";import{r as Ie,a as vo}from"./render-0379db8a.js";import{N as mo}from"./Dropdown-dac2fcea.js";import{N as ho}from"./Tooltip-e64a2d70.js";import{u as ue}from"./use-merged-state-65a5f827.js";import{u as fo}from"./use-compitable-d3ced092.js";import{c as le,V as po}from"./create-f01d07b1.js";import{_ as go}from"./_plugin-vue_export-helper-c27b6911.js";import{C as bo}from"./ChevronRight-c97c27a5.js";import{f as ae}from"./format-length-c9d165c6.js";import{N as xo}from"./Space-510eabbf.js";import"./VolumeHighOutline-74e30393.js";import"./Ellipsis-bb9b6c2d.js";import"./Icon-1d1c28d3.js";import"./Popover-595a4cc8.js";import"./cssr-c566339e.js";import"./on-fonts-ready-29317161.js";import"./happens-in-d88e25de.js";import"./get-slot-1efb97e5.js";const yo=E({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Oe=J("n-layout-sider"),pe={type:String,default:"static"},Co=m("layout",`
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
`,[m("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),zo={embedded:Boolean,position:pe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Ee=J("n-layout");function wo(e){return E({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},V.props),zo),setup(t){const r=H(null),i=H(null),{mergedClsPrefixRef:c,inlineThemeDisabled:l}=te(t),s=V("Layout","-layout",Co,he,t,c);function d(C,P){if(t.nativeScrollbar){const{value:T}=r;T&&(P===void 0?T.scrollTo(C):T.scrollTo(C,P))}else{const{value:T}=i;T&&T.scrollTo(C,P)}}W(Ee,t);let a=0,_=0;const f=C=>{var P;const T=C.target;a=T.scrollLeft,_=T.scrollTop,(P=t.onScroll)===null||P===void 0||P.call(t,C)};Pe(()=>{if(t.nativeScrollbar){const C=r.value;C&&(C.scrollTop=_,C.scrollLeft=a)}});const b={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:d},N=y(()=>{const{common:{cubicBezierEaseInOut:C},self:P}=s.value;return{"--n-bezier":C,"--n-color":t.embedded?P.colorEmbedded:P.color,"--n-text-color":P.textColor}}),R=l?re("layout",y(()=>t.embedded?"e":""),N,t):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:b,mergedTheme:s,handleNativeElScroll:f,cssVars:l?void 0:N,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender},h)},render(){var t;const{mergedClsPrefix:r,hasSider:i}=this;(t=this.onRender)===null||t===void 0||t.call(this);const c=i?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return v("div",{class:l,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:[`${r}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,c],onScroll:this.handleNativeElScroll},this.$slots):v(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,c]}),this.$slots))}})}const ce=wo(!1),Io=m("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),S("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),So={position:pe,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ro=E({name:"LayoutHeader",props:Object.assign(Object.assign({},V.props),So),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=te(e),i=V("Layout","-layout-header",Io,he,e,t),c=y(()=>{const{common:{cubicBezierEaseInOut:s},self:d}=i.value,a={"--n-bezier":s};return e.inverted?(a["--n-color"]=d.headerColorInverted,a["--n-text-color"]=d.textColorInverted,a["--n-border-color"]=d.headerBorderColorInverted):(a["--n-color"]=d.headerColor,a["--n-text-color"]=d.textColor,a["--n-border-color"]=d.headerBorderColor),a}),l=r?re("layout-header",y(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Po=m("layout-sider",`
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
`,[S("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[S("bordered",[u("border",`
 right: 0;
 `)])]),S("right-placement",`
 justify-content: flex-start;
 `,[S("bordered",[u("border",`
 left: 0;
 `)]),S("collapsed",[m("layout-toggle-button",[m("base-icon",`
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",[I("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),m("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[m("base-icon",`
 transform: rotate(0);
 `)]),m("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[I("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),S("collapsed",[m("layout-toggle-bar",[I("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),m("layout-toggle-button",[m("base-icon",`
 transform: rotate(0);
 `)])]),m("layout-toggle-button",`
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
 `,[m("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),m("layout-toggle-bar",`
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
 `),I("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),I("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),m("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),S("show-content",[m("layout-sider-scroll-container",{opacity:1})]),S("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),No=E({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v(Te,{clsPrefix:e},{default:()=>v(bo,null)}))}}),To=E({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Ao={position:pe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},_o=E({name:"LayoutSider",props:Object.assign(Object.assign({},V.props),Ao),setup(e){const t=K(Ee),r=H(null),i=H(null),c=y(()=>ae(a.value?e.collapsedWidth:e.width)),l=y(()=>e.collapseMode!=="transform"?{}:{minWidth:ae(e.width)}),s=y(()=>t?t.siderPlacement:"left"),d=H(e.defaultCollapsed),a=ue(oe(e,"collapsed"),d);function _(k,z){if(e.nativeScrollbar){const{value:w}=r;w&&(z===void 0?w.scrollTo(k):w.scrollTo(k,z))}else{const{value:w}=i;w&&w.scrollTo(k,z)}}function f(){const{"onUpdate:collapsed":k,onUpdateCollapsed:z,onExpand:w,onCollapse:j}=e,{value:L}=a;z&&B(z,!L),k&&B(k,!L),d.value=!L,L?w&&B(w):j&&B(j)}let b=0,h=0;const N=k=>{var z;const w=k.target;b=w.scrollLeft,h=w.scrollTop,(z=e.onScroll)===null||z===void 0||z.call(e,k)};Pe(()=>{if(e.nativeScrollbar){const k=r.value;k&&(k.scrollTop=h,k.scrollLeft=b)}}),W(Oe,{collapsedRef:a,collapseModeRef:oe(e,"collapseMode")});const{mergedClsPrefixRef:R,inlineThemeDisabled:C}=te(e),P=V("Layout","-layout-sider",Po,he,e,R);function T(k){var z,w;k.propertyName==="max-width"&&(a.value?(z=e.onAfterLeave)===null||z===void 0||z.call(e):(w=e.onAfterEnter)===null||w===void 0||w.call(e))}const Y={scrollTo:_},F=y(()=>{const{common:{cubicBezierEaseInOut:k},self:z}=P.value,{siderToggleButtonColor:w,siderToggleButtonBorder:j,siderToggleBarColor:L,siderToggleBarColorHover:ne}=z,M={"--n-bezier":k,"--n-toggle-button-color":w,"--n-toggle-button-border":j,"--n-toggle-bar-color":L,"--n-toggle-bar-color-hover":ne};return e.inverted?(M["--n-color"]=z.siderColorInverted,M["--n-text-color"]=z.textColorInverted,M["--n-border-color"]=z.siderBorderColorInverted,M["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColorInverted,M.__invertScrollbar=z.__invertScrollbar):(M["--n-color"]=z.siderColor,M["--n-text-color"]=z.textColor,M["--n-border-color"]=z.siderBorderColor,M["--n-toggle-button-icon-color"]=z.siderToggleButtonIconColor),M}),$=C?re("layout-sider",y(()=>e.inverted?"a":"b"),F,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:R,mergedTheme:P,styleMaxWidth:c,mergedCollapsed:a,scrollContainerStyle:l,siderPlacement:s,handleNativeElScroll:N,handleTransitionend:T,handleTriggerClick:f,inlineThemeDisabled:C,cssVars:F,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},Y)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ae(this.width)}]},this.nativeScrollbar?v("div",{class:[`${t}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(Ne,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?v(To,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(No,{clsPrefix:t,class:r?this.collapsedTriggerClass:this.triggerClass,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${t}-layout-sider__border`}):null)}}),Q=J("n-menu"),ge=J("n-submenu"),be=J("n-menu-item-group"),ee=8;function xe(e){const t=K(Q),{props:r,mergedCollapsedRef:i}=t,c=K(ge,null),l=K(be,null),s=y(()=>r.mode==="horizontal"),d=y(()=>s.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=y(()=>{var h;return Math.max((h=r.collapsedIconSize)!==null&&h!==void 0?h:r.iconSize,r.iconSize)}),_=y(()=>{var h;return!s.value&&e.root&&i.value&&(h=r.collapsedIconSize)!==null&&h!==void 0?h:r.iconSize}),f=y(()=>{if(s.value)return;const{collapsedWidth:h,indent:N,rootIndent:R}=r,{root:C,isGroup:P}=e,T=R===void 0?N:R;return C?i.value?h/2-a.value/2:T:l&&typeof l.paddingLeftRef.value=="number"?N/2+l.paddingLeftRef.value:c&&typeof c.paddingLeftRef.value=="number"?(P?N/2:N)+c.paddingLeftRef.value:0}),b=y(()=>{const{collapsedWidth:h,indent:N,rootIndent:R}=r,{value:C}=a,{root:P}=e;return s.value||!P||!i.value?ee:(R===void 0?N:R)+C+ee-(h+C)/2});return{dropdownPlacement:d,activeIconSize:_,maxIconSize:a,paddingLeft:f,iconMarginRight:b,NMenu:t,NSubmenu:c}}const ye={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Me=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),ko=E({name:"MenuOptionGroup",props:Me,setup(e){W(ge,null);const t=xe(e);W(be,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:r,props:i}=K(Q);return function(){const{value:c}=r,l=t.paddingLeft.value,{nodeProps:s}=i,d=s==null?void 0:s(e.tmNode.rawNode);return v("div",{class:`${c}-menu-item-group`,role:"group"},v("div",Object.assign({},d,{class:[`${c}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),q(e.title),e.extra?v(Xe,null," ",q(e.extra)):null),v("div",null,e.tmNodes.map(a=>Ce(a,i))))}}}),$e=E({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:t}=K(Q);return{menuProps:t,style:y(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:y(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:c}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:i,renderExtra:c,expandIcon:l}}=this,s=r?r(t.rawNode):q(this.icon);return v("div",{onClick:d=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:i?i(t.rawNode):q(this.title),this.extra||c?v("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(t.rawNode):q(this.extra)):null),this.showArrow?v(Te,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):v(yo,null)}):null)}}),Be=Object.assign(Object.assign({},ye),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),ve=E({name:"Submenu",props:Be,setup(e){const t=xe(e),{NMenu:r,NSubmenu:i}=t,{props:c,mergedCollapsedRef:l,mergedThemeRef:s}=r,d=y(()=>{const{disabled:h}=e;return i!=null&&i.mergedDisabledRef.value||c.disabled?!0:h}),a=H(!1);W(ge,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:d}),W(be,null);function _(){const{onClick:h}=e;h&&h()}function f(){d.value||(l.value||r.toggleExpand(e.internalKey),_())}function b(h){a.value=h}return{menuProps:c,mergedTheme:s,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:d,mergedValue:r.mergedValueRef,childActive:se(()=>{var h;return(h=e.virtualChildActive)!==null&&h!==void 0?h:r.activePathRef.value.includes(e.internalKey)}),collapsed:y(()=>c.mode==="horizontal"?!1:l.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!d.value&&(c.mode==="horizontal"||l.value)),handlePopoverShowChange:b,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:r,renderLabel:i}}=this,c=()=>{const{isHorizontal:s,paddingLeft:d,collapsed:a,mergedDisabled:_,maxIconSize:f,activeIconSize:b,title:h,childActive:N,icon:R,handleClick:C,menuProps:{nodeProps:P},dropdownShow:T,iconMarginRight:Y,tmNode:F,mergedClsPrefix:$,isEllipsisPlaceholder:k,extra:z}=this,w=P==null?void 0:P(F.rawNode);return v("div",Object.assign({},w,{class:[`${$}-menu-item`,w==null?void 0:w.class],role:"menuitem"}),v($e,{tmNode:F,paddingLeft:d,collapsed:a,disabled:_,iconMarginRight:Y,maxIconSize:f,activeIconSize:b,title:h,extra:z,showArrow:!s,childActive:N,clsPrefix:$,icon:R,hover:T,onClick:C,isEllipsisPlaceholder:k}))},l=()=>v(Je,null,{default:()=>{const{tmNodes:s,collapsed:d}=this;return d?null:v("div",{class:`${t}-submenu-children`,role:"menu"},s.map(a=>Ce(a,this.menuProps)))}});return this.root?v(mo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>v("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},c(),this.isHorizontal?null:l())}):v("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},c(),l())}}),Le=Object.assign(Object.assign({},ye),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Ho=E({name:"MenuOption",props:Le,setup(e){const t=xe(e),{NSubmenu:r,NMenu:i}=t,{props:c,mergedClsPrefixRef:l,mergedCollapsedRef:s}=i,d=r?r.mergedDisabledRef:{value:!1},a=y(()=>d.value||e.disabled);function _(b){const{onClick:h}=e;h&&h(b)}function f(b){a.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),_(b))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:c,dropdownEnabled:se(()=>e.root&&s.value&&c.mode!=="horizontal"&&!a.value),selected:se(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:i,nodeProps:c}}=this,l=c==null?void 0:c(r.rawNode);return v("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),v(ho,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):q(this.title),trigger:()=>v($e,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),Oo=E({name:"MenuDivider",setup(){const e=K(Q),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:v("div",{class:`${t.value}-menu-divider`})}}),Eo=fe(Me),Mo=fe(Le),$o=fe(Be);function me(e){return e.type==="divider"||e.type==="render"}function Bo(e){return e.type==="divider"}function Ce(e,t){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(me(r))return Bo(r)?v(Oo,Object.assign({key:e.key},r.props)):null;const{labelField:c}=t,{key:l,level:s,isGroup:d}=e,a=Object.assign(Object.assign({},r),{title:r.title||r[c],extra:r.titleExtra||r.extra,key:l,internalKey:l,level:s,root:s===0,isGroup:d});return e.children?e.isGroup?v(ko,ie(a,Eo,{tmNode:e,tmNodes:e.children,key:l})):v(ve,ie(a,$o,{key:l,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):v(Ho,ie(a,Mo,{key:l,tmNode:e}))}const Se=[I("&::before","background-color: var(--n-item-color-hover);"),u("arrow",`
 color: var(--n-arrow-color-hover);
 `),u("icon",`
 color: var(--n-item-icon-color-hover);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[I("a",`
 color: var(--n-item-text-color-hover);
 `),u("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Re=[u("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),m("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[I("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Lo=I([m("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[S("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[m("submenu","margin: 0;"),m("menu-item","margin: 0;"),m("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[I("&::before","display: none;"),S("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),m("menu-item-content",[S("selected",[u("icon","color: var(--n-item-icon-color-active-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[I("a","color: var(--n-item-text-color-active-horizontal);"),u("extra","color: var(--n-item-text-color-active-horizontal);")])]),S("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[I("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),u("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),u("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),X("disabled",[X("selected, child-active",[I("&:focus-within",Re)]),S("selected",[D(null,[u("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[I("a","color: var(--n-item-text-color-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[D(null,[u("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[I("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),u("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),D("border-bottom: 2px solid var(--n-border-color-horizontal);",Re)]),m("menu-item-content-header",[I("a","color: var(--n-item-text-color-horizontal);")])])]),X("responsive",[m("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),S("collapsed",[m("menu-item-content",[S("selected",[I("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),m("menu-item-content-header","opacity: 0;"),u("arrow","opacity: 0;"),u("icon","color: var(--n-item-icon-color-collapsed);")])]),m("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),m("menu-item-content",`
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
 `,[I("> *","z-index: 1;"),I("&::before",`
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
 `),S("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),S("collapsed",[u("arrow","transform: rotate(0);")]),S("selected",[I("&::before","background-color: var(--n-item-color-active);"),u("arrow","color: var(--n-arrow-color-active);"),u("icon","color: var(--n-item-icon-color-active);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[I("a","color: var(--n-item-text-color-active);"),u("extra","color: var(--n-item-text-color-active);")])]),S("child-active",[m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[I("a",`
 color: var(--n-item-text-color-child-active);
 `),u("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),u("arrow",`
 color: var(--n-arrow-color-child-active);
 `),u("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),X("disabled",[X("selected, child-active",[I("&:focus-within",Se)]),S("selected",[D(null,[u("arrow","color: var(--n-arrow-color-active-hover);"),u("icon","color: var(--n-item-icon-color-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[I("a","color: var(--n-item-text-color-active-hover);"),u("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[D(null,[u("arrow","color: var(--n-arrow-color-child-active-hover);"),u("icon","color: var(--n-item-icon-color-child-active-hover);"),m("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[I("a","color: var(--n-item-text-color-child-active-hover);"),u("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[D(null,[I("&::before","background-color: var(--n-item-color-active-hover);")])]),D(null,Se)]),u("icon",`
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
 `),m("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[I("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[I("&::before",`
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
 `)])]),m("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[m("menu-item-content",`
 height: var(--n-item-height);
 `),m("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Qe({duration:".2s"})])]),m("menu-item-group",[m("menu-item-group-title",`
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
 `)])]),m("menu-tooltip",[I("a",`
 color: inherit;
 text-decoration: none;
 `)]),m("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function D(e,t){return[S("hover",e,t),I("&:hover",e,t)]}const Fo=Object.assign(Object.assign({},V.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),jo=E({name:"Menu",props:Fo,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=te(e),i=V("Menu","-menu",Lo,oo,e,t),c=K(Oe,null),l=y(()=>{var p;const{collapsed:x}=e;if(x!==void 0)return x;if(c){const{collapseModeRef:o,collapsedRef:g}=c;if(o.value==="width")return(p=g.value)!==null&&p!==void 0?p:!1}return!1}),s=y(()=>{const{keyField:p,childrenField:x,disabledField:o}=e;return le(e.items||e.options,{getIgnored(g){return me(g)},getChildren(g){return g[x]},getDisabled(g){return g[o]},getKey(g){var A;return(A=g[p])!==null&&A!==void 0?A:g.name}})}),d=y(()=>new Set(s.value.treeNodes.map(p=>p.key))),{watchProps:a}=e,_=H(null);a!=null&&a.includes("defaultValue")?de(()=>{_.value=e.defaultValue}):_.value=e.defaultValue;const f=oe(e,"value"),b=ue(f,_),h=H([]),N=()=>{h.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(b.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?de(N):N();const R=fo(e,["expandedNames","expandedKeys"]),C=ue(R,h),P=y(()=>s.value.treeNodes),T=y(()=>s.value.getPath(b.value).keyPath);W(Q,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:b,mergedExpandedKeysRef:C,activePathRef:T,mergedClsPrefixRef:t,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:oe(e,"inverted"),doSelect:Y,toggleExpand:$});function Y(p,x){const{"onUpdate:value":o,onUpdateValue:g,onSelect:A}=e;g&&B(g,p,x),o&&B(o,p,x),A&&B(A,p,x),_.value=p}function F(p){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:o,onExpandedNamesChange:g,onOpenNamesChange:A}=e;x&&B(x,p),o&&B(o,p),g&&B(g,p),A&&B(A,p),h.value=p}function $(p){const x=Array.from(C.value),o=x.findIndex(g=>g===p);if(~o)x.splice(o,1);else{if(e.accordion&&d.value.has(p)){const g=x.findIndex(A=>d.value.has(A));g>-1&&x.splice(g,1)}x.push(p)}F(x)}const k=p=>{const x=s.value.getPath(p??b.value,{includeSelf:!1}).keyPath;if(!x.length)return;const o=Array.from(C.value),g=new Set([...o,...x]);e.accordion&&d.value.forEach(A=>{g.has(A)&&!x.includes(A)&&g.delete(A)}),F(Array.from(g))},z=y(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:x},self:o}=i.value,{borderRadius:g,borderColorHorizontal:A,fontSize:Ge,itemHeight:qe,dividerColor:Ye}=o,n={"--n-divider-color":Ye,"--n-bezier":x,"--n-font-size":Ge,"--n-border-color-horizontal":A,"--n-border-radius":g,"--n-item-height":qe};return p?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),w=r?re("menu",y(()=>e.inverted?"a":"b"),z,e):void 0,j=Ze(),L=H(null),ne=H(null);let M=!0;const ze=()=>{var p;M?M=!1:(p=L.value)===null||p===void 0||p.sync({showAllItemsBeforeCalculate:!0})};function Fe(){return document.getElementById(j)}const Z=H(-1);function je(p){Z.value=e.options.length-p}function Ke(p){p||(Z.value=-1)}const Ve=y(()=>{const p=Z.value;return{children:p===-1?[]:e.options.slice(p)}}),Ue=y(()=>{const{childrenField:p,disabledField:x,keyField:o}=e;return le([Ve.value],{getIgnored(g){return me(g)},getChildren(g){return g[p]},getDisabled(g){return g[x]},getKey(g){var A;return(A=g[o])!==null&&A!==void 0?A:g.name}})}),De=y(()=>le([{}]).treeNodes[0]);function We(){var p;if(Z.value===-1)return v(ve,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:De.value,domId:j,isEllipsisPlaceholder:!0});const x=Ue.value.treeNodes[0],o=T.value,g=!!(!((p=x.children)===null||p===void 0)&&p.some(A=>o.includes(A.key)));return v(ve,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:g,tmNode:x,domId:j,rawNodes:x.rawNode.children||[],tmNodes:x.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:t,controlledExpandedKeys:R,uncontrolledExpanededKeys:h,mergedExpandedKeys:C,uncontrolledValue:_,mergedValue:b,activePath:T,tmNodes:P,mergedTheme:i,mergedCollapsed:l,cssVars:r?void 0:z,themeClass:w==null?void 0:w.themeClass,overflowRef:L,counterRef:ne,updateCounter:()=>{},onResize:ze,onUpdateOverflow:Ke,onUpdateCount:je,renderCounter:We,getCounter:Fe,onRender:w==null?void 0:w.onRender,showOption:k,deriveResponsiveState:ze}},render(){const{mergedClsPrefix:e,mode:t,themeClass:r,onRender:i}=this;i==null||i();const c=()=>this.tmNodes.map(a=>Ce(a,this.$props)),s=t==="horizontal"&&this.responsive,d=()=>v("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${t}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},s?v(po,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:c,counter:this.renderCounter}):c());return s?v(eo,{onResize:this.onResize},{default:d}):d()}}),Ko=E({__name:"SideMenu",props:{collapsed:{type:Boolean},layout:{},indent:{},rootIndent:{},getMenuOptions:{type:Function}},setup(e){const t=e,r=Ae(),i=to(),c=ro(),l=H(),s=H();_e(()=>{l.value="",s.value=t.getMenuOptions()}),de(()=>{var f;c.name!==l.value&&(l.value=((f=c.name)==null?void 0:f.toString())??"")}),no(()=>r.language,(f,b)=>{f!==b&&(s.value=s.value)});const d=f=>l.value=f,a=f=>{var b=C=>["menus",t.layout,C],h=b(we.toString(f.key)),N=b(we.toString(f.label));if(!f.link)return f.label?f.label:i.get(h,f);if(!i.has(h))return Ie(f.link,typeof f.label=="string"&&i.has(N)?i.get(N,f):f.label??f.key)();var R=i.get(h,f);return"link"in f?Ie(f.link,R)():R},_=f=>"iconType"in f?vo(f.iconType)():null;return(f,b)=>(ke(),He(O(jo),{indent:f.indent,"root-indent":f.rootIndent,value:l.value,options:s.value,collapsed:f.collapsed,accordion:"","onUpdate:value":b[0]||(b[0]=h=>d(h)),"render-icon":_,"render-label":a},null,8,["indent","root-indent","value","options","collapsed"]))}});const Vo=go(Ko,[["__scopeId","data-v-c5d0c83f"]]),Uo=["src"],ut=E({__name:"jokes",setup(e){const t=io(Ae());let r=t.sidebar,i=H(!1),c=H("bar"),l=H(0),s=H(240),d=H(32),a=H(32),_=H("transform");const f=()=>r.value=!r.value,b=()=>{const T=window.innerWidth-240<225;s.value=T?window.innerWidth-25:240,d.value=a.value=T?22:32};return _e(()=>{r.value=t.sidebar.value,window.addEventListener("resize",b),b()}),lo(()=>window.removeEventListener("resize",b)),(h,N)=>(ke(),He(O(ce),{style:{height:"100%"}},{default:G(()=>[U(O(Ro),{style:{height:"64px"},bordered:""},{default:G(()=>[U(O(xo),null,{default:G(()=>[ao("img",{onClick:N[0]||(N[0]=R=>h.$router.push("/")),src:O(so),style:{"max-width":"100%",height:"45px","margin-left":"12px","margin-top":"12px",cursor:"pointer"}},null,8,Uo)]),_:1})]),_:1}),U(O(ce),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:G(()=>[U(O(_o),{"native-scrollbar":!1,bordered:"","show-trigger":O(c),"collapse-mode":O(_),"collapsed-width":O(l),"show-collapsed-content":O(i),collapsed:O(r),width:O(s),onCollapse:f,onExpand:f},{default:G(()=>[U(Vo,{indent:O(d),"root-indent":O(a),layout:"jokes",collapsed:O(r),"get-menu-options":()=>O(uo)("jokes")??[]},null,8,["indent","root-indent","collapsed","get-menu-options"])]),_:1},8,["show-trigger","collapse-mode","collapsed-width","show-collapsed-content","collapsed","width"]),U(O(ce),{class:"main-content","content-style":"padding: 24px;","native-scrollbar":!1},{default:G(()=>[U(co,{transition:!0})]),_:1})]),_:1})]),_:1}))}});export{ut as default};
