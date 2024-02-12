import{d as L,i as m,Y as te,a as f,b as N,e as W,r as H,u as ce,Z as Y,_ as He,g as P,h as se,$ as Oe,a0 as Ce,J as h,c as T,K as Ee,a1 as D,a2 as ae,a3 as V,a4 as J,F as oo,a5 as pe,a6 as to,a7 as de,a8 as ze,P as ee,a9 as ro,w as ge,aa as no,ab as io,ac as lo,ad as we,ae as ao,l as M,af as co,ag as Be,ah as so,ai as uo,o as $e,aj as vo,m as Me,n as Le,y as E,ak as ho,k as mo,q as Z,t as G,v as fo,al as po}from"./index-1b78ee11.js";import{I as go,r as _e,a as bo}from"./render-f8eb4da3.js";import{N as xo,V as yo,c as ue}from"./Dropdown-96c22f2e.js";import{N as Co}from"./Tooltip-e44ee9b6.js";import{u as be}from"./use-merged-state-7620cfe7.js";import{u as zo}from"./use-compitable-79161e6e.js";import{_ as wo}from"./_plugin-vue_export-helper-c27b6911.js";import{L as Io}from"./logo-75660621.js";import{C as So}from"./ChevronRight-daa07440.js";import{f as ve}from"./format-length-c9d165c6.js";import{N as Ro}from"./Space-b42bb785.js";import"./Ellipsis-05bac2c5.js";import"./Icon-07d8b044.js";import"./VolumeHighOutline-703d02b1.js";import"./cssr-72eac198.js";import"./on-fonts-ready-239a2ede.js";import"./get-slot-1efb97e5.js";const Po=L({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Fe=te("n-layout-sider"),Ie={type:String,default:"static"},To=f("layout",`
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
`,[f("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),No={embedded:Boolean,position:Ie,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},je=te("n-layout");function _o(e){return L({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},W.props),No),setup(o){const t=H(null),c=H(null),{mergedClsPrefixRef:a,inlineThemeDisabled:i}=ce(o),s=W("Layout","-layout",To,Ce,o,a);function d(p,b){if(o.nativeScrollbar){const{value:w}=t;w&&(b===void 0?w.scrollTo(p):w.scrollTo(p,b))}else{const{value:w}=c;w&&w.scrollTo(p,b)}}Y(je,o);let l=0,_=0;const v=p=>{var b;const w=p.target;l=w.scrollLeft,_=w.scrollTop,(b=o.onScroll)===null||b===void 0||b.call(o,p)};He(()=>{if(o.nativeScrollbar){const p=t.value;p&&(p.scrollTop=_,p.scrollLeft=l)}});const C={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},u={scrollTo:d},z=P(()=>{const{common:{cubicBezierEaseInOut:p},self:b}=s.value;return{"--n-bezier":p,"--n-color":o.embedded?b.colorEmbedded:b.color,"--n-text-color":b.textColor}}),y=i?se("layout",P(()=>o.embedded?"e":""),z,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:t,scrollbarInstRef:c,hasSiderStyle:C,mergedTheme:s,handleNativeElScroll:v,cssVars:i?void 0:z,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender},u)},render(){var o;const{mergedClsPrefix:t,hasSider:c}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=c?this.hasSiderStyle:void 0,i=[this.themeClass,e&&`${t}-layout-content`,`${t}-layout`,`${t}-layout--${this.position}-positioned`];return m("div",{class:i,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:[`${t}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):m(Oe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const he=_o(!1),ko=f("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[N("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),N("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),Ao={position:Ie,inverted:Boolean,bordered:{type:Boolean,default:!1}},Ho=L({name:"LayoutHeader",props:Object.assign(Object.assign({},W.props),Ao),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ce(e),c=W("Layout","-layout-header",ko,Ce,e,o),a=P(()=>{const{common:{cubicBezierEaseInOut:s},self:d}=c.value,l={"--n-bezier":s};return e.inverted?(l["--n-color"]=d.headerColorInverted,l["--n-text-color"]=d.textColorInverted,l["--n-border-color"]=d.headerBorderColorInverted):(l["--n-color"]=d.headerColor,l["--n-text-color"]=d.textColor,l["--n-border-color"]=d.headerBorderColor),l}),i=t?se("layout-header",P(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:t?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),Oo=f("layout-sider",`
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
`,[N("bordered",[h("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),h("left-placement",[N("bordered",[h("border",`
 right: 0;
 `)])]),N("right-placement",`
 justify-content: flex-start;
 `,[N("bordered",[h("border",`
 left: 0;
 `)]),N("collapsed",[f("layout-toggle-button",[f("base-icon",`
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",[T("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),f("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[f("base-icon",`
 transform: rotate(0);
 `)]),f("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[T("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),N("collapsed",[f("layout-toggle-bar",[T("&:hover",[h("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),f("layout-toggle-button",[f("base-icon",`
 transform: rotate(0);
 `)])]),f("layout-toggle-button",`
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
 `,[f("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),f("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[h("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),h("bottom",`
 position: absolute;
 top: 34px;
 `),T("&:hover",[h("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),h("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),T("&:hover",[h("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),h("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),f("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),N("show-content",[f("layout-sider-scroll-container",{opacity:1})]),N("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Eo=L({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(Ee,{clsPrefix:e},{default:()=>m(So,null)}))}}),Bo=L({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),$o={position:Ie,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},Mo=L({name:"LayoutSider",props:Object.assign(Object.assign({},W.props),$o),setup(e){const o=D(je),t=H(null),c=H(null),a=P(()=>ve(l.value?e.collapsedWidth:e.width)),i=P(()=>e.collapseMode!=="transform"?{}:{minWidth:ve(e.width)}),s=P(()=>o?o.siderPlacement:"left"),d=H(e.defaultCollapsed),l=be(ae(e,"collapsed"),d);function _(k,S){if(e.nativeScrollbar){const{value:I}=t;I&&(S===void 0?I.scrollTo(k):I.scrollTo(k,S))}else{const{value:I}=c;I&&I.scrollTo(k,S)}}function v(){const{"onUpdate:collapsed":k,onUpdateCollapsed:S,onExpand:I,onCollapse:U}=e,{value:j}=l;S&&V(S,!j),k&&V(k,!j),d.value=!j,j?I&&V(I):U&&V(U)}let C=0,u=0;const z=k=>{var S;const I=k.target;C=I.scrollLeft,u=I.scrollTop,(S=e.onScroll)===null||S===void 0||S.call(e,k)};He(()=>{if(e.nativeScrollbar){const k=t.value;k&&(k.scrollTop=u,k.scrollLeft=C)}}),Y(Fe,{collapsedRef:l,collapseModeRef:ae(e,"collapseMode")});const{mergedClsPrefixRef:y,inlineThemeDisabled:p}=ce(e),b=W("Layout","-layout-sider",Oo,Ce,e,y);function w(k){var S,I;k.propertyName==="max-width"&&(l.value?(S=e.onAfterLeave)===null||S===void 0||S.call(e):(I=e.onAfterEnter)===null||I===void 0||I.call(e))}const $={scrollTo:_},F=P(()=>{const{common:{cubicBezierEaseInOut:k},self:S}=b.value,{siderToggleButtonColor:I,siderToggleButtonBorder:U,siderToggleBarColor:j,siderToggleBarColorHover:X}=S,O={"--n-bezier":k,"--n-toggle-button-color":I,"--n-toggle-button-border":U,"--n-toggle-bar-color":j,"--n-toggle-bar-color-hover":X};return e.inverted?(O["--n-color"]=S.siderColorInverted,O["--n-text-color"]=S.textColorInverted,O["--n-border-color"]=S.siderBorderColorInverted,O["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColorInverted,O.__invertScrollbar=S.__invertScrollbar):(O["--n-color"]=S.siderColor,O["--n-text-color"]=S.textColor,O["--n-border-color"]=S.siderBorderColor,O["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColor),O}),B=p?se("layout-sider",P(()=>e.inverted?"a":"b"),F,e):void 0;return Object.assign({scrollableElRef:t,scrollbarInstRef:c,mergedClsPrefix:y,mergedTheme:b,styleMaxWidth:a,mergedCollapsed:l,scrollContainerStyle:i,siderPlacement:s,handleNativeElScroll:z,handleTransitionend:w,handleTriggerClick:v,inlineThemeDisabled:p,cssVars:F,themeClass:B==null?void 0:B.themeClass,onRender:B==null?void 0:B.onRender},$)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:t,showTrigger:c}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,t&&`${o}-layout-sider--collapsed`,(!t||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:ve(this.width)}]},this.nativeScrollbar?m("div",{class:[`${o}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(Oe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),c?c==="bar"?m(Bo,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(Eo,{clsPrefix:o,class:t?this.collapsedTriggerClass:this.triggerClass,style:t?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${o}-layout-sider__border`}):null)}}),re=te("n-menu"),Se=te("n-submenu"),Re=te("n-menu-item-group"),ie=8;function Pe(e){const o=D(re),{props:t,mergedCollapsedRef:c}=o,a=D(Se,null),i=D(Re,null),s=P(()=>t.mode==="horizontal"),d=P(()=>s.value?t.dropdownPlacement:"tmNodes"in e?"right-start":"right"),l=P(()=>{var u;return Math.max((u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize,t.iconSize)}),_=P(()=>{var u;return!s.value&&e.root&&c.value&&(u=t.collapsedIconSize)!==null&&u!==void 0?u:t.iconSize}),v=P(()=>{if(s.value)return;const{collapsedWidth:u,indent:z,rootIndent:y}=t,{root:p,isGroup:b}=e,w=y===void 0?z:y;return p?c.value?u/2-l.value/2:w:i&&typeof i.paddingLeftRef.value=="number"?z/2+i.paddingLeftRef.value:a&&typeof a.paddingLeftRef.value=="number"?(b?z/2:z)+a.paddingLeftRef.value:0}),C=P(()=>{const{collapsedWidth:u,indent:z,rootIndent:y}=t,{value:p}=l,{root:b}=e;return s.value||!b||!c.value?ie:(y===void 0?z:y)+p+ie-(u+p)/2});return{dropdownPlacement:d,activeIconSize:_,maxIconSize:l,paddingLeft:v,iconMarginRight:C,NMenu:o,NSubmenu:a}}const Te={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Ke=Object.assign(Object.assign({},Te),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),Lo=L({name:"MenuOptionGroup",props:Ke,setup(e){Y(Se,null);const o=Pe(e);Y(Re,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:t,props:c}=D(re);return function(){const{value:a}=t,i=o.paddingLeft.value,{nodeProps:s}=c,d=s==null?void 0:s(e.tmNode.rawNode);return m("div",{class:`${a}-menu-item-group`,role:"group"},m("div",Object.assign({},d,{class:[`${a}-menu-item-group-title`,d==null?void 0:d.class],style:[(d==null?void 0:d.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),J(e.title),e.extra?m(oo,null," ",J(e.extra)):null),m("div",null,e.tmNodes.map(l=>Ne(l,c))))}}}),Ve=L({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:o}=D(re);return{menuProps:o,style:P(()=>{const{paddingLeft:t}=e;return{paddingLeft:t&&`${t}px`}}),iconStyle:P(()=>{const{maxIconSize:t,activeIconSize:c,iconMarginRight:a}=e;return{width:`${t}px`,height:`${t}px`,fontSize:`${c}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:t,renderLabel:c,renderExtra:a,expandIcon:i}}=this,s=t?t(o.rawNode):J(this.icon);return m("div",{onClick:d=>{var l;(l=this.onClick)===null||l===void 0||l.call(this,d)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:c?c(o.rawNode):J(this.title),this.extra||a?m("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):J(this.extra)):null),this.showArrow?m(Ee,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(o.rawNode):m(Po,null)}):null)}}),Ue=Object.assign(Object.assign({},Te),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),xe=L({name:"Submenu",props:Ue,setup(e){const o=Pe(e),{NMenu:t,NSubmenu:c}=o,{props:a,mergedCollapsedRef:i,mergedThemeRef:s}=t,d=P(()=>{const{disabled:u}=e;return c!=null&&c.mergedDisabledRef.value||a.disabled?!0:u}),l=H(!1);Y(Se,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:d}),Y(Re,null);function _(){const{onClick:u}=e;u&&u()}function v(){d.value||(i.value||t.toggleExpand(e.internalKey),_())}function C(u){l.value=u}return{menuProps:a,mergedTheme:s,doSelect:t.doSelect,inverted:t.invertedRef,isHorizontal:t.isHorizontalRef,mergedClsPrefix:t.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:l,paddingLeft:o.paddingLeft,mergedDisabled:d,mergedValue:t.mergedValueRef,childActive:pe(()=>{var u;return(u=e.virtualChildActive)!==null&&u!==void 0?u:t.activePathRef.value.includes(e.internalKey)}),collapsed:P(()=>a.mode==="horizontal"?!1:i.value?!0:!t.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:P(()=>!d.value&&(a.mode==="horizontal"||i.value)),handlePopoverShowChange:C,handleClick:v}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:t,renderLabel:c}}=this,a=()=>{const{isHorizontal:s,paddingLeft:d,collapsed:l,mergedDisabled:_,maxIconSize:v,activeIconSize:C,title:u,childActive:z,icon:y,handleClick:p,menuProps:{nodeProps:b},dropdownShow:w,iconMarginRight:$,tmNode:F,mergedClsPrefix:B,isEllipsisPlaceholder:k,extra:S}=this,I=b==null?void 0:b(F.rawNode);return m("div",Object.assign({},I,{class:[`${B}-menu-item`,I==null?void 0:I.class],role:"menuitem"}),m(Ve,{tmNode:F,paddingLeft:d,collapsed:l,disabled:_,iconMarginRight:$,maxIconSize:v,activeIconSize:C,title:u,extra:S,showArrow:!s,childActive:z,clsPrefix:B,icon:y,hover:w,onClick:p,isEllipsisPlaceholder:k}))},i=()=>m(to,null,{default:()=>{const{tmNodes:s,collapsed:d}=this;return d?null:m("div",{class:`${o}-submenu-children`,role:"menu"},s.map(l=>Ne(l,this.menuProps)))}});return this.root?m(xo,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:t,renderLabel:c}),{default:()=>m("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},a(),this.isHorizontal?null:i())}):m("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},a(),i())}}),De=Object.assign(Object.assign({},Te),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),Fo=L({name:"MenuOption",props:De,setup(e){const o=Pe(e),{NSubmenu:t,NMenu:c}=o,{props:a,mergedClsPrefixRef:i,mergedCollapsedRef:s}=c,d=t?t.mergedDisabledRef:{value:!1},l=P(()=>d.value||e.disabled);function _(C){const{onClick:u}=e;u&&u(C)}function v(C){l.value||(c.doSelect(e.internalKey,e.tmNode.rawNode),_(C))}return{mergedClsPrefix:i,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:c.mergedThemeRef,menuProps:a,dropdownEnabled:pe(()=>e.root&&s.value&&a.mode!=="horizontal"&&!l.value),selected:pe(()=>c.mergedValueRef.value===e.internalKey),mergedDisabled:l,handleClick:v}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:t,menuProps:{renderLabel:c,nodeProps:a}}=this,i=a==null?void 0:a(t.rawNode);return m("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),m(Co,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>c?c(t.rawNode):J(this.title),trigger:()=>m(Ve,{tmNode:t,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),jo=L({name:"MenuDivider",setup(){const e=D(re),{mergedClsPrefixRef:o,isHorizontalRef:t}=e;return()=>t.value?null:m("div",{class:`${o.value}-menu-divider`})}}),Ko=ze(Ke),Vo=ze(De),Uo=ze(Ue);function ye(e){return e.type==="divider"||e.type==="render"}function Do(e){return e.type==="divider"}function Ne(e,o){const{rawNode:t}=e,{show:c}=t;if(c===!1)return null;if(ye(t))return Do(t)?m(jo,Object.assign({key:e.key},t.props)):null;const{labelField:a}=o,{key:i,level:s,isGroup:d}=e,l=Object.assign(Object.assign({},t),{title:t.title||t[a],extra:t.titleExtra||t.extra,key:i,internalKey:i,level:s,root:s===0,isGroup:d});return e.children?e.isGroup?m(Lo,de(l,Ko,{tmNode:e,tmNodes:e.children,key:i})):m(xe,de(l,Uo,{key:i,rawNodes:t[o.childrenField],tmNodes:e.children,tmNode:e})):m(Fo,de(l,Vo,{key:i,tmNode:e}))}const ke=[T("&::before","background-color: var(--n-item-color-hover);"),h("arrow",`
 color: var(--n-arrow-color-hover);
 `),h("icon",`
 color: var(--n-item-icon-color-hover);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[T("a",`
 color: var(--n-item-text-color-hover);
 `),h("extra",`
 color: var(--n-item-text-color-hover);
 `)])],Ae=[h("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),f("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[T("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Wo=T([f("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[N("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[f("submenu","margin: 0;"),f("menu-item","margin: 0;"),f("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[T("&::before","display: none;"),N("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),f("menu-item-content",[N("selected",[h("icon","color: var(--n-item-icon-color-active-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[T("a","color: var(--n-item-text-color-active-horizontal);"),h("extra","color: var(--n-item-text-color-active-horizontal);")])]),N("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[T("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),h("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),h("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),ee("disabled",[ee("selected, child-active",[T("&:focus-within",Ae)]),N("selected",[q(null,[h("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[T("a","color: var(--n-item-text-color-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),N("child-active",[q(null,[h("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[T("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),h("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),q("border-bottom: 2px solid var(--n-border-color-horizontal);",Ae)]),f("menu-item-content-header",[T("a","color: var(--n-item-text-color-horizontal);")])])]),ee("responsive",[f("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),N("collapsed",[f("menu-item-content",[N("selected",[T("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),f("menu-item-content-header","opacity: 0;"),h("arrow","opacity: 0;"),h("icon","color: var(--n-item-icon-color-collapsed);")])]),f("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),f("menu-item-content",`
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
 `,[T("> *","z-index: 1;"),T("&::before",`
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
 `),N("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),N("collapsed",[h("arrow","transform: rotate(0);")]),N("selected",[T("&::before","background-color: var(--n-item-color-active);"),h("arrow","color: var(--n-arrow-color-active);"),h("icon","color: var(--n-item-icon-color-active);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[T("a","color: var(--n-item-text-color-active);"),h("extra","color: var(--n-item-text-color-active);")])]),N("child-active",[f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[T("a",`
 color: var(--n-item-text-color-child-active);
 `),h("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),h("arrow",`
 color: var(--n-arrow-color-child-active);
 `),h("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),ee("disabled",[ee("selected, child-active",[T("&:focus-within",ke)]),N("selected",[q(null,[h("arrow","color: var(--n-arrow-color-active-hover);"),h("icon","color: var(--n-item-icon-color-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[T("a","color: var(--n-item-text-color-active-hover);"),h("extra","color: var(--n-item-text-color-active-hover);")])])]),N("child-active",[q(null,[h("arrow","color: var(--n-arrow-color-child-active-hover);"),h("icon","color: var(--n-item-icon-color-child-active-hover);"),f("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[T("a","color: var(--n-item-text-color-child-active-hover);"),h("extra","color: var(--n-item-text-color-child-active-hover);")])])]),N("selected",[q(null,[T("&::before","background-color: var(--n-item-color-active-hover);")])]),q(null,ke)]),h("icon",`
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
 `),h("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),f("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 color: var(--n-item-text-color);
 `,[T("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[T("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),h("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),f("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[f("menu-item-content",`
 height: var(--n-item-height);
 `),f("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[ro({duration:".2s"})])]),f("menu-item-group",[f("menu-item-group-title",`
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
 `)])]),f("menu-tooltip",[T("a",`
 color: inherit;
 text-decoration: none;
 `)]),f("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function q(e,o){return[N("hover",e,o),T("&:hover",e,o)]}const Go=Object.assign(Object.assign({},W.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),qo=L({name:"Menu",props:Go,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=ce(e),c=W("Menu","-menu",Wo,lo,e,o),a=D(Fe,null),i=P(()=>{var g;const{collapsed:R}=e;if(R!==void 0)return R;if(a){const{collapseModeRef:r,collapsedRef:x}=a;if(r.value==="width")return(g=x.value)!==null&&g!==void 0?g:!1}return!1}),s=P(()=>{const{keyField:g,childrenField:R,disabledField:r}=e;return ue(e.items||e.options,{getIgnored(x){return ye(x)},getChildren(x){return x[R]},getDisabled(x){return x[r]},getKey(x){var A;return(A=x[g])!==null&&A!==void 0?A:x.name}})}),d=P(()=>new Set(s.value.treeNodes.map(g=>g.key))),{watchProps:l}=e,_=H(null);l!=null&&l.includes("defaultValue")?ge(()=>{_.value=e.defaultValue}):_.value=e.defaultValue;const v=ae(e,"value"),C=be(v,_),u=H([]),z=()=>{u.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(C.value,{includeSelf:!1}).keyPath};l!=null&&l.includes("defaultExpandedKeys")?ge(z):z();const y=zo(e,["expandedNames","expandedKeys"]),p=be(y,u),b=P(()=>s.value.treeNodes),w=P(()=>s.value.getPath(C.value).keyPath);Y(re,{props:e,mergedCollapsedRef:i,mergedThemeRef:c,mergedValueRef:C,mergedExpandedKeysRef:p,activePathRef:w,mergedClsPrefixRef:o,isHorizontalRef:P(()=>e.mode==="horizontal"),invertedRef:ae(e,"inverted"),doSelect:$,toggleExpand:B});function $(g,R){const{"onUpdate:value":r,onUpdateValue:x,onSelect:A}=e;x&&V(x,g,R),r&&V(r,g,R),A&&V(A,g,R),_.value=g}function F(g){const{"onUpdate:expandedKeys":R,onUpdateExpandedKeys:r,onExpandedNamesChange:x,onOpenNamesChange:A}=e;R&&V(R,g),r&&V(r,g),x&&V(x,g),A&&V(A,g),u.value=g}function B(g){const R=Array.from(p.value),r=R.findIndex(x=>x===g);if(~r)R.splice(r,1);else{if(e.accordion&&d.value.has(g)){const x=R.findIndex(A=>d.value.has(A));x>-1&&R.splice(x,1)}R.push(g)}F(R)}const k=g=>{const R=s.value.getPath(g??C.value,{includeSelf:!1}).keyPath;if(!R.length)return;const r=Array.from(p.value),x=new Set([...r,...R]);e.accordion&&d.value.forEach(A=>{x.has(A)&&!R.includes(A)&&x.delete(A)}),F(Array.from(x))},S=P(()=>{const{inverted:g}=e,{common:{cubicBezierEaseInOut:R},self:r}=c.value,{borderRadius:x,borderColorHorizontal:A,fontSize:Je,itemHeight:Qe,dividerColor:eo}=r,n={"--n-divider-color":eo,"--n-bezier":R,"--n-font-size":Je,"--n-border-color-horizontal":A,"--n-border-radius":x,"--n-item-height":Qe};return g?(n["--n-group-text-color"]=r.groupTextColorInverted,n["--n-color"]=r.colorInverted,n["--n-item-text-color"]=r.itemTextColorInverted,n["--n-item-text-color-hover"]=r.itemTextColorHoverInverted,n["--n-item-text-color-active"]=r.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=r.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=r.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=r.itemIconColorInverted,n["--n-item-icon-color-hover"]=r.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=r.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=r.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=r.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=r.arrowColorInverted,n["--n-arrow-color-hover"]=r.arrowColorHoverInverted,n["--n-arrow-color-active"]=r.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=r.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=r.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=r.itemColorHoverInverted,n["--n-item-color-active"]=r.itemColorActiveInverted,n["--n-item-color-active-hover"]=r.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=r.groupTextColor,n["--n-color"]=r.color,n["--n-item-text-color"]=r.itemTextColor,n["--n-item-text-color-hover"]=r.itemTextColorHover,n["--n-item-text-color-active"]=r.itemTextColorActive,n["--n-item-text-color-child-active"]=r.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=r.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=r.itemTextColorActiveHover,n["--n-item-icon-color"]=r.itemIconColor,n["--n-item-icon-color-hover"]=r.itemIconColorHover,n["--n-item-icon-color-active"]=r.itemIconColorActive,n["--n-item-icon-color-active-hover"]=r.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=r.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=r.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=r.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=r.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=r.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=r.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=r.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=r.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=r.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=r.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=r.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=r.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=r.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=r.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=r.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=r.arrowColor,n["--n-arrow-color-hover"]=r.arrowColorHover,n["--n-arrow-color-active"]=r.arrowColorActive,n["--n-arrow-color-active-hover"]=r.arrowColorActiveHover,n["--n-arrow-color-child-active"]=r.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=r.arrowColorChildActiveHover,n["--n-item-color-hover"]=r.itemColorHover,n["--n-item-color-active"]=r.itemColorActive,n["--n-item-color-active-hover"]=r.itemColorActiveHover,n["--n-item-color-active-collapsed"]=r.itemColorActiveCollapsed),n}),I=t?se("menu",P(()=>e.inverted?"a":"b"),S,e):void 0,U=no(),j=H(null),X=H(null);let O=!0;const Q=()=>{var g;O?O=!1:(g=j.value)===null||g===void 0||g.sync({showAllItemsBeforeCalculate:!0})};function ne(){return document.getElementById(U)}const K=H(-1);function We(g){K.value=e.options.length-g}function Ge(g){g||(K.value=-1)}const qe=P(()=>{const g=K.value;return{children:g===-1?[]:e.options.slice(g)}}),Ye=P(()=>{const{childrenField:g,disabledField:R,keyField:r}=e;return ue([qe.value],{getIgnored(x){return ye(x)},getChildren(x){return x[g]},getDisabled(x){return x[R]},getKey(x){var A;return(A=x[r])!==null&&A!==void 0?A:x.name}})}),Xe=P(()=>ue([{}]).treeNodes[0]);function Ze(){var g;if(K.value===-1)return m(xe,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Xe.value,domId:U,isEllipsisPlaceholder:!0});const R=Ye.value.treeNodes[0],r=w.value,x=!!(!((g=R.children)===null||g===void 0)&&g.some(A=>r.includes(A.key)));return m(xe,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:x,tmNode:R,domId:U,rawNodes:R.rawNode.children||[],tmNodes:R.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:o,controlledExpandedKeys:y,uncontrolledExpanededKeys:u,mergedExpandedKeys:p,uncontrolledValue:_,mergedValue:C,activePath:w,tmNodes:b,mergedTheme:c,mergedCollapsed:i,cssVars:t?void 0:S,themeClass:I==null?void 0:I.themeClass,overflowRef:j,counterRef:X,updateCounter:()=>{},onResize:Q,onUpdateOverflow:Ge,onUpdateCount:We,renderCounter:Ze,getCounter:ne,onRender:I==null?void 0:I.onRender,showOption:k,deriveResponsiveState:Q}},render(){const{mergedClsPrefix:e,mode:o,themeClass:t,onRender:c}=this;c==null||c();const a=()=>this.tmNodes.map(l=>Ne(l,this.$props)),s=o==="horizontal"&&this.responsive,d=()=>m("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,t,`${e}-menu--${o}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},s?m(yo,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:a,counter:this.renderCounter}):a());return s?m(io,{onResize:this.onResize},{default:d}):d()}}),me={jokes:["header","default","expand","footer","props"],new:["header","default","footer"]},le={jokes:{header:!1,footer:!1,props:!1,default:{label:"口 日 厂 巨 匚 丁"},expand:{label:"巨 乂 尸 亼 冂 刀"}},new:{header:!1,default:{label:"从 亼 工 冂"},footer:!1}},oe={},Yo=e=>`group_${e}`,fe="default";function Xo(e){if(e in oe||(Zo(we.getRoutes().filter(({meta:{menu:o}})=>(o==null?void 0:o.for)===e)),e in oe))return oe[e];ao.error("[Route]","[Menu]","Unknown menu",{key:e})}function Zo(e=we.getRoutes()){const o=Qo(e);for(var t in o)oe[t]=o[t]}function Jo({components:e,meta:{menu:o,enable:t}}){return!M.isUndefined(e)&&!M.isUndefined(o)&&t!==!1&&o.for}function Qo(e=we.getRoutes()){const o=e.filter(Jo),t={};return M.toPairs(M.groupBy(o,({meta:{menu:a}})=>a.for)).forEach(a=>{var[i,s]=a;const d=M.fromPairs((i in me&&me[i].length>0?me[i]:[fe]).map(z=>[z,[]]));s=M.orderBy(s,({meta:{menu:z}})=>z.order??0);const l=[];for(var _=0;_<s.length;_++){let z=function(p){if(p){var b={for:i,...p},w=c(b,""),$=l.findIndex(([{key:F},B])=>F===w.key);$<0?l.push([w,b]):l[$][0]=M.defaults(l[$][0],w),p.parent&&z(p.parent)}};const y=s[_];var v=y.meta.menu,C=c(v,y.path),u=l.findIndex(([{key:p},b])=>p===C.key);if(u>=0){l[u]={...l[u],...C};continue}l.push([C,v]),z(v.parent)}M.toPairs(M.groupBy(l,([z,{group:y}])=>y??fe)).forEach(z=>{var[y,p]=z;const b=[];for(var w=0;w<p.length;w++){var[$,F]=p[w];if(F.parent)(function(S,I){if(!I)return;var U=X(p.map(O=>O[0]),I.key),j=p[U];(j[0].children??(j[0].children=[])).push(S);function X(O,Q){var ne=O.findIndex(({key:K})=>K===Q);return ne>=0?ne:X(O.filter(({children:K})=>K&&K.length>0).flatMap(({children:K})=>K),Q)}})($,F.parent);else{var B=b.findIndex(({key:k})=>k===$.key);B<0?b.push($):b[B]={...b[B],...$}}}d[y in d?y:fe].push(...M.orderBy(b,({order:k})=>k??0))}),t[i]=co(M.toPairs(d).map(z=>{var[y,p]=z,b=i in le&&!M.isUndefined(le[i])&&y in le[i]?le[i][y]:void 0;if(b===!1)return p;var w={type:"group",key:Yo(y),children:p};return b&&(w=Object.assign(b,w)),w}),{type:"divider"}).flat()}),t;function c(a,i){return{key:a.key,label:a.label,iconType:a.icon?go[a.icon]:void 0,link:i,order:a.order??0}}}const et=L({__name:"SideMenu",props:{collapsed:{type:Boolean},layout:{},indent:{},rootIndent:{},getMenuOptions:{type:Function}},setup(e){const o=e,t=Be(),c=so(),a=uo(),i=H(),s=H();$e(()=>{i.value="",s.value=o.getMenuOptions()}),ge(()=>{var v;a.name!==i.value&&(i.value=((v=a.name)==null?void 0:v.toString())??"")}),vo(()=>t.language,(v,C)=>{v!==C&&(s.value=s.value)});const d=v=>i.value=v,l=v=>{var C=p=>["menus",o.layout,p],u=C(M.toString(v.key)),z=C(M.toString(v.label));if(!v.link)return v.label?v.label:c.get(u,v);if(!c.has(u))return _e(v.link,typeof v.label=="string"&&c.has(z)?c.get(z,v):v.label??v.key)();var y=c.get(u,v);return"link"in v?_e(v.link,y)():y},_=v=>"iconType"in v?bo(v.iconType)():null;return(v,C)=>(Me(),Le(E(qo),{indent:v.indent,"root-indent":v.rootIndent,value:i.value,options:s.value,collapsed:v.collapsed,accordion:"","onUpdate:value":C[0]||(C[0]=u=>d(u)),"render-icon":_,"render-label":l},null,8,["indent","root-indent","value","options","collapsed"]))}});const ot=wo(et,[["__scopeId","data-v-c5d0c83f"]]),tt=["src"],yt=L({__name:"jokes",setup(e){const o=ho(Be());let t=o.sidebar,c=H(!1),a=H("bar"),i=H(0),s=H(240),d=H(32),l=H(32),_=H("transform");const v=()=>t.value=!t.value,C=()=>{const w=window.innerWidth-240<225;s.value=w?window.innerWidth-25:240,d.value=l.value=w?22:32};return $e(()=>{t.value=o.sidebar.value,window.addEventListener("resize",C),C()}),mo(()=>window.removeEventListener("resize",C)),(u,z)=>(Me(),Le(E(he),{style:{height:"100%"}},{default:Z(()=>[G(E(Ho),{style:{height:"64px"},bordered:""},{default:Z(()=>[G(E(Ro),null,{default:Z(()=>[fo("img",{onClick:z[0]||(z[0]=y=>u.$router.push("/")),src:E(Io),style:{"max-width":"100%",height:"45px","margin-left":"12px","margin-top":"12px",cursor:"pointer"}},null,8,tt)]),_:1})]),_:1}),G(E(he),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:Z(()=>[G(E(Mo),{"native-scrollbar":!1,bordered:"","show-trigger":E(a),"collapse-mode":E(_),"collapsed-width":E(i),"show-collapsed-content":E(c),collapsed:E(t),width:E(s),onCollapse:v,onExpand:v},{default:Z(()=>[G(ot,{indent:E(d),"root-indent":E(l),layout:"jokes",collapsed:E(t),"get-menu-options":()=>E(Xo)("jokes")??[]},null,8,["indent","root-indent","collapsed","get-menu-options"])]),_:1},8,["show-trigger","collapse-mode","collapsed-width","show-collapsed-content","collapsed","width"]),G(E(he),{class:"main-content","content-style":"padding: 24px;","native-scrollbar":!1},{default:Z(()=>[G(po,{transition:!0})]),_:1})]),_:1})]),_:1}))}});export{yt as default};
