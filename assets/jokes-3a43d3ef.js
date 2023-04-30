import{d as O,h as u,c as G,a as d,b as w,u as F,r as $,e as Z,l as le,p as V,f as be,g as C,i as Q,N as xe,j as s,k as x,m as ye,t as J,n as B,o as M,q as U,F as $e,s as re,v as Ee,w as ee,x as ae,y as W,z as Le,A as ne,B as Be,C as Ce,D as ze,E as Se,G as we,H as Ie,I as E,J as he,K as Fe,L as je,M as D,O as j,P as Ke,_ as Ve}from"./index-5231cf4b.js";import{L as De,g as Ue}from"./logo-c377a749.js";import{r as fe,a as qe}from"./render-ba076f4f.js";import{N as Ge}from"./Dropdown-9b7981aa.js";import{N as Ye}from"./Tooltip-c36b84ce.js";import{u as ie}from"./use-merged-state-0dddec03.js";import{u as We}from"./use-compitable-ba055720.js";import{c as Xe}from"./create-7bda32ce.js";import{_ as Je}from"./_plugin-vue_export-helper-c27b6911.js";import{N as Ze}from"./Space-c3572523.js";import{C as Qe}from"./ChevronRight-1e664840.js";import{f as oe}from"./format-length-c9d165c6.js";import"./Ellipsis-ead71d78.js";import"./Icon-0c067266.js";import"./VolumeHighOutline-8f598736.js";import"./ChatboxEllipsesOutline-86fe5155.js";import"./cssr-bb1b2fe9.js";import"./on-fonts-ready-c27071a5.js";import"./get-slot-1efb97e5.js";const eo=O({name:"ChevronDownFilled",render(){return u("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Re=G("n-layout-sider"),ce={type:String,default:"static"},oo=d("layout",`
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
`,[d("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),to={embedded:Boolean,position:ce,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Pe=G("n-layout");function ro(e){return O({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),to),setup(o){const r=$(null),i=$(null),{mergedClsPrefixRef:a,inlineThemeDisabled:l}=Z(o),v=F("Layout","-layout",oo,le,o,a);function m(y,R){if(o.nativeScrollbar){const{value:k}=r;k&&(R===void 0?k.scrollTo(y):k.scrollTo(y,R))}else{const{value:k}=i;k&&k.scrollTo(y,R)}}V(Pe,o);let c=0,N=0;const h=y=>{var R;const k=y.target;c=k.scrollLeft,N=k.scrollTop,(R=o.onScroll)===null||R===void 0||R.call(o,y)};be(()=>{if(o.nativeScrollbar){const y=r.value;y&&(y.scrollTop=N,y.scrollLeft=c)}});const z={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:m},A=C(()=>{const{common:{cubicBezierEaseInOut:y},self:R}=v.value;return{"--n-bezier":y,"--n-color":o.embedded?R.colorEmbedded:R.color,"--n-text-color":R.textColor}}),T=l?Q("layout",C(()=>o.embedded?"e":""),A,o):void 0;return Object.assign({mergedClsPrefix:a,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:z,mergedTheme:v,handleNativeElScroll:h,cssVars:l?void 0:A,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender},f)},render(){var o;const{mergedClsPrefix:r,hasSider:i}=this;(o=this.onRender)===null||o===void 0||o.call(this);const a=i?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return u("div",{class:l,style:this.cssVars},this.nativeScrollbar?u("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,a],onScroll:this.handleNativeElScroll},this.$slots):u(xe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,a]}),this.$slots))}})}const te=ro(!1),no=d("layout-header",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 box-sizing: border-box;
 width: 100%;
 background-color: var(--n-color);
 color: var(--n-text-color);
`,[w("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 `),w("bordered",`
 border-bottom: solid 1px var(--n-border-color);
 `)]),io={position:ce,inverted:Boolean,bordered:{type:Boolean,default:!1}},lo=O({name:"LayoutHeader",props:Object.assign(Object.assign({},F.props),io),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Z(e),i=F("Layout","-layout-header",no,le,e,o),a=C(()=>{const{common:{cubicBezierEaseInOut:v},self:m}=i.value,c={"--n-bezier":v};return e.inverted?(c["--n-color"]=m.headerColorInverted,c["--n-text-color"]=m.textColorInverted,c["--n-border-color"]=m.headerBorderColorInverted):(c["--n-color"]=m.headerColor,c["--n-text-color"]=m.textColor,c["--n-border-color"]=m.headerBorderColor),c}),l=r?Q("layout-header",C(()=>e.inverted?"a":"b"),a,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:a,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),ao=d("layout-sider",`
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
`,[w("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[w("bordered",[s("border",`
 right: 0;
 `)])]),w("right-placement",`
 justify-content: flex-start;
 `,[w("bordered",[s("border",`
 left: 0;
 `)]),w("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[x("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[x("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),w("collapsed",[d("layout-toggle-bar",[x("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
 transform: rotate(0);
 `)])]),d("layout-toggle-button",`
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
 `,[d("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[s("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),s("bottom",`
 position: absolute;
 top: 34px;
 `),x("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),x("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),d("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),w("show-content",[d("layout-sider-scroll-container",{opacity:1})]),w("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),co=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},u(ye,{clsPrefix:e},{default:()=>u(Qe,null)}))}}),so=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return u("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},u("div",{class:`${e}-layout-toggle-bar__top`}),u("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),uo={position:ce,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},vo=O({name:"LayoutSider",props:Object.assign(Object.assign({},F.props),uo),setup(e){const o=B(Pe),r=$(null),i=$(null),a=C(()=>oe(c.value?e.collapsedWidth:e.width)),l=C(()=>e.collapseMode!=="transform"?{}:{minWidth:oe(e.width)}),v=C(()=>o?o.siderPlacement:"left"),m=$(e.defaultCollapsed),c=ie(J(e,"collapsed"),m);function N(P,S){if(e.nativeScrollbar){const{value:I}=r;I&&(S===void 0?I.scrollTo(P):I.scrollTo(P,S))}else{const{value:I}=i;I&&I.scrollTo(P,S)}}function h(){const{"onUpdate:collapsed":P,onUpdateCollapsed:S,onExpand:I,onCollapse:p}=e,{value:b}=c;S&&M(S,!b),P&&M(P,!b),m.value=!b,b?I&&M(I):p&&M(p)}let z=0,f=0;const A=P=>{var S;const I=P.target;z=I.scrollLeft,f=I.scrollTop,(S=e.onScroll)===null||S===void 0||S.call(e,P)};be(()=>{if(e.nativeScrollbar){const P=r.value;P&&(P.scrollTop=f,P.scrollLeft=z)}}),V(Re,{collapsedRef:c,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:T,inlineThemeDisabled:y}=Z(e),R=F("Layout","-layout-sider",ao,le,e,T);function k(P){var S,I;P.propertyName==="max-width"&&(c.value?(S=e.onAfterLeave)===null||S===void 0||S.call(e):(I=e.onAfterEnter)===null||I===void 0||I.call(e))}const q={scrollTo:N},L=C(()=>{const{common:{cubicBezierEaseInOut:P},self:S}=R.value,{siderToggleButtonColor:I,siderToggleButtonBorder:p,siderToggleBarColor:b,siderToggleBarColorHover:t}=S,g={"--n-bezier":P,"--n-toggle-button-color":I,"--n-toggle-button-border":p,"--n-toggle-bar-color":b,"--n-toggle-bar-color-hover":t};return e.inverted?(g["--n-color"]=S.siderColorInverted,g["--n-text-color"]=S.textColorInverted,g["--n-border-color"]=S.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColorInverted,g.__invertScrollbar=S.__invertScrollbar):(g["--n-color"]=S.siderColor,g["--n-text-color"]=S.textColor,g["--n-border-color"]=S.siderBorderColor,g["--n-toggle-button-icon-color"]=S.siderToggleButtonIconColor),g}),_=y?Q("layout-sider",C(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:T,mergedTheme:R,styleMaxWidth:a,mergedCollapsed:c,scrollContainerStyle:l,siderPlacement:v,handleNativeElScroll:A,handleTransitionend:k,handleTriggerClick:h,inlineThemeDisabled:y,cssVars:L,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender},q)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),u("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:oe(this.width)}]},this.nativeScrollbar?u("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):u(xe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?u(so,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):u(co,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?u("div",{class:`${o}-layout-sider__border`}):null)}}),Y=G("n-menu"),se=G("n-submenu"),de=G("n-menu-item-group"),X=8;function ue(e){const o=B(Y),{props:r,mergedCollapsedRef:i}=o,a=B(se,null),l=B(de,null),v=C(()=>r.mode==="horizontal"),m=C(()=>v.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),c=C(()=>{var f;return Math.max((f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize,r.iconSize)}),N=C(()=>{var f;return!v.value&&e.root&&i.value&&(f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize}),h=C(()=>{if(v.value)return;const{collapsedWidth:f,indent:A,rootIndent:T}=r,{root:y,isGroup:R}=e,k=T===void 0?A:T;if(y)return i.value?f/2-c.value/2:k;if(l)return A/2+l.paddingLeftRef.value;if(a)return(R?A/2:A)+a.paddingLeftRef.value}),z=C(()=>{const{collapsedWidth:f,indent:A,rootIndent:T}=r,{value:y}=c,{root:R}=e;return v.value||!R||!i.value?X:(T===void 0?A:T)+y+X-(f+y)/2});return{dropdownPlacement:m,activeIconSize:N,maxIconSize:c,paddingLeft:h,iconMarginRight:z,NMenu:o,NSubmenu:a}}const ve={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Te=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),mo=O({name:"MenuOptionGroup",props:Te,setup(e){V(se,null);const o=ue(e);V(de,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:r,props:i}=B(Y);return function(){const{value:a}=r,l=o.paddingLeft.value,{nodeProps:v}=i,m=v==null?void 0:v(e.tmNode.rawNode);return u("div",{class:`${a}-menu-item-group`,role:"group"},u("div",Object.assign({},m,{class:[`${a}-menu-item-group-title`,m==null?void 0:m.class],style:[(m==null?void 0:m.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),U(e.title),e.extra?u($e,null," ",U(e.extra)):null),u("div",null,e.tmNodes.map(c=>me(c,i))))}}}),Ne=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=B(Y);return{menuProps:o,style:C(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:C(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:a}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${a}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:r,renderLabel:i,renderExtra:a,expandIcon:l}}=this,v=r?r(o.rawNode):U(this.icon);return u("div",{onClick:m=>{var c;(c=this.onClick)===null||c===void 0||c.call(this,m)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&u("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),u("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(o.rawNode):U(this.title),this.extra||a?u("span",{class:`${e}-menu-item-content-header__extra`}," ",a?a(o.rawNode):U(this.extra)):null),this.showArrow?u(ye,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(o.rawNode):u(eo,null)}):null)}}),Ae=Object.assign(Object.assign({},ve),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),ho=O({name:"Submenu",props:Ae,setup(e){const o=ue(e),{NMenu:r,NSubmenu:i}=o,{props:a,mergedCollapsedRef:l,mergedThemeRef:v}=r,m=C(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||a.disabled?!0:f}),c=$(!1);V(se,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:m}),V(de,null);function N(){const{onClick:f}=e;f&&f()}function h(){m.value||(l.value||r.toggleExpand(e.internalKey),N())}function z(f){c.value=f}return{menuProps:a,mergedTheme:v,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:c,paddingLeft:o.paddingLeft,mergedDisabled:m,mergedValue:r.mergedValueRef,childActive:re(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:C(()=>a.mode==="horizontal"?!1:l.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:C(()=>!m.value&&(a.mode==="horizontal"||l.value)),handlePopoverShowChange:z,handleClick:h}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:r,renderLabel:i}}=this,a=()=>{const{isHorizontal:v,paddingLeft:m,collapsed:c,mergedDisabled:N,maxIconSize:h,activeIconSize:z,title:f,childActive:A,icon:T,handleClick:y,menuProps:{nodeProps:R},dropdownShow:k,iconMarginRight:q,tmNode:L,mergedClsPrefix:_}=this,P=R==null?void 0:R(L.rawNode);return u("div",Object.assign({},P,{class:[`${_}-menu-item`,P==null?void 0:P.class],role:"menuitem"}),u(Ne,{tmNode:L,paddingLeft:m,collapsed:c,disabled:N,iconMarginRight:q,maxIconSize:h,activeIconSize:z,title:f,extra:this.extra,showArrow:!v,childActive:A,clsPrefix:_,icon:T,hover:k,onClick:y}))},l=()=>u(Ee,null,{default:()=>{const{tmNodes:v,collapsed:m}=this;return m?null:u("div",{class:`${o}-submenu-children`,role:"menu"},v.map(c=>me(c,this.menuProps)))}});return this.root?u(Ge,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>u("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),this.isHorizontal?null:l())}):u("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},a(),l())}}),ke=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),fo=O({name:"MenuOption",props:ke,setup(e){const o=ue(e),{NSubmenu:r,NMenu:i}=o,{props:a,mergedClsPrefixRef:l,mergedCollapsedRef:v}=i,m=r?r.mergedDisabledRef:{value:!1},c=C(()=>m.value||e.disabled);function N(z){const{onClick:f}=e;f&&f(z)}function h(z){c.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),N(z))}return{mergedClsPrefix:l,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:a,dropdownEnabled:re(()=>e.root&&v.value&&a.mode!=="horizontal"&&!c.value),selected:re(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:c,handleClick:h}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:r,menuProps:{renderLabel:i,nodeProps:a}}=this,l=a==null?void 0:a(r.rawNode);return u("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),u(Ye,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):U(this.title),trigger:()=>u(Ne,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),go=O({name:"MenuDivider",setup(){const e=B(Y),{mergedClsPrefixRef:o,isHorizontalRef:r}=e;return()=>r.value?null:u("div",{class:`${o.value}-menu-divider`})}}),po=ae(Te),bo=ae(ke),xo=ae(Ae);function He(e){return e.type==="divider"||e.type==="render"}function yo(e){return e.type==="divider"}function me(e,o){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(He(r))return yo(r)?u(go,Object.assign({key:e.key},r.props)):null;const{labelField:a}=o,{key:l,level:v,isGroup:m}=e,c=Object.assign(Object.assign({},r),{title:r.title||r[a],extra:r.titleExtra||r.extra,key:l,internalKey:l,level:v,root:v===0,isGroup:m});return e.children?e.isGroup?u(mo,ee(c,po,{tmNode:e,tmNodes:e.children,key:l})):u(ho,ee(c,xo,{key:l,rawNodes:r[o.childrenField],tmNodes:e.children,tmNode:e})):u(fo,ee(c,bo,{key:l,tmNode:e}))}const ge=[x("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],pe=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],Co=x([d("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[w("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[d("submenu","margin: 0;"),d("menu-item","margin: 0;"),d("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[x("&::before","display: none;"),w("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),d("menu-item-content",[w("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),w("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),W("disabled",[W("selected, child-active",[x("&:focus-within",pe)]),w("selected",[K(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),w("child-active",[K(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",pe)]),d("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),w("collapsed",[d("menu-item-content",[w("selected",[x("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),d("menu-item-content-header","opacity: 0;"),s("arrow","opacity: 0;"),s("icon","color: var(--n-item-icon-color-collapsed);")])]),d("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),d("menu-item-content",`
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
 `,[x("> *","z-index: 1;"),x("&::before",`
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
 `),w("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),w("collapsed",[s("arrow","transform: rotate(0);")]),w("selected",[x("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[x("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),w("child-active",[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[x("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),W("disabled",[W("selected, child-active",[x("&:focus-within",ge)]),w("selected",[K(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),w("child-active",[K(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),w("selected",[K(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,ge)]),s("icon",`
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
 `),s("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),d("menu-item-content-header",`
 grid-area: content;
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 opacity: 1;
 white-space: nowrap;
 overflow: hidden;
 text-overflow: ellipsis;
 color: var(--n-item-text-color);
 `,[x("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[x("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),s("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),d("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[d("menu-item-content",`
 height: var(--n-item-height);
 `),d("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Le({duration:".2s"})])]),d("menu-item-group",[d("menu-item-group-title",`
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
 `)])]),d("menu-tooltip",[x("a",`
 color: inherit;
 text-decoration: none;
 `)]),d("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,o){return[w("hover",e,o),x("&:hover",e,o)]}const zo=Object.assign(Object.assign({},F.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),So=O({name:"Menu",props:zo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Z(e),i=F("Menu","-menu",Co,Be,e,o),a=B(Re,null),l=C(()=>{var p;const{collapsed:b}=e;if(b!==void 0)return b;if(a){const{collapseModeRef:t,collapsedRef:g}=a;if(t.value==="width")return(p=g.value)!==null&&p!==void 0?p:!1}return!1}),v=C(()=>{const{keyField:p,childrenField:b,disabledField:t}=e;return Xe(e.items||e.options,{getIgnored(g){return He(g)},getChildren(g){return g[b]},getDisabled(g){return g[t]},getKey(g){var H;return(H=g[p])!==null&&H!==void 0?H:g.name}})}),m=C(()=>new Set(v.value.treeNodes.map(p=>p.key))),{watchProps:c}=e,N=$(null);c!=null&&c.includes("defaultValue")?ne(()=>{N.value=e.defaultValue}):N.value=e.defaultValue;const h=J(e,"value"),z=ie(h,N),f=$([]),A=()=>{f.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(z.value,{includeSelf:!1}).keyPath};c!=null&&c.includes("defaultExpandedKeys")?ne(A):A();const T=We(e,["expandedNames","expandedKeys"]),y=ie(T,f),R=C(()=>v.value.treeNodes),k=C(()=>v.value.getPath(z.value).keyPath);V(Y,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:z,mergedExpandedKeysRef:y,activePathRef:k,mergedClsPrefixRef:o,isHorizontalRef:C(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:q,toggleExpand:_});function q(p,b){const{"onUpdate:value":t,onUpdateValue:g,onSelect:H}=e;g&&M(g,p,b),t&&M(t,p,b),H&&M(H,p,b),N.value=p}function L(p){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:g,onOpenNamesChange:H}=e;b&&M(b,p),t&&M(t,p),g&&M(g,p),H&&M(H,p),f.value=p}function _(p){const b=Array.from(y.value),t=b.findIndex(g=>g===p);if(~t)b.splice(t,1);else{if(e.accordion&&m.value.has(p)){const g=b.findIndex(H=>m.value.has(H));g>-1&&b.splice(g,1)}b.push(p)}L(b)}const P=p=>{const b=v.value.getPath(p??z.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(y.value),g=new Set([...t,...b]);e.accordion&&m.value.forEach(H=>{g.has(H)&&!b.includes(H)&&g.delete(H)}),L(Array.from(g))},S=C(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:b},self:t}=i.value,{borderRadius:g,borderColorHorizontal:H,fontSize:Oe,itemHeight:_e,dividerColor:Me}=t,n={"--n-divider-color":Me,"--n-bezier":b,"--n-font-size":Oe,"--n-border-color-horizontal":H,"--n-border-radius":g,"--n-item-height":_e};return p?(n["--n-group-text-color"]=t.groupTextColorInverted,n["--n-color"]=t.colorInverted,n["--n-item-text-color"]=t.itemTextColorInverted,n["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,n["--n-item-text-color-active"]=t.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=t.itemIconColorInverted,n["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=t.arrowColorInverted,n["--n-arrow-color-hover"]=t.arrowColorHoverInverted,n["--n-arrow-color-active"]=t.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=t.itemColorHoverInverted,n["--n-item-color-active"]=t.itemColorActiveInverted,n["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=t.groupTextColor,n["--n-color"]=t.color,n["--n-item-text-color"]=t.itemTextColor,n["--n-item-text-color-hover"]=t.itemTextColorHover,n["--n-item-text-color-active"]=t.itemTextColorActive,n["--n-item-text-color-child-active"]=t.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,n["--n-item-icon-color"]=t.itemIconColor,n["--n-item-icon-color-hover"]=t.itemIconColorHover,n["--n-item-icon-color-active"]=t.itemIconColorActive,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=t.arrowColor,n["--n-arrow-color-hover"]=t.arrowColorHover,n["--n-arrow-color-active"]=t.arrowColorActive,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,n["--n-arrow-color-child-active"]=t.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,n["--n-item-color-hover"]=t.itemColorHover,n["--n-item-color-active"]=t.itemColorActive,n["--n-item-color-active-hover"]=t.itemColorActiveHover,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),n}),I=r?Q("menu",C(()=>e.inverted?"a":"b"),S,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:T,uncontrolledExpanededKeys:f,mergedExpandedKeys:y,uncontrolledValue:N,mergedValue:z,activePath:k,tmNodes:R,mergedTheme:i,mergedCollapsed:l,cssVars:r?void 0:S,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender,showOption:P}},render(){const{mergedClsPrefix:e,mode:o,themeClass:r,onRender:i}=this;return i==null||i(),u("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(a=>me(a,this.$props)))}}),wo=O({__name:"SideMenu",props:{collapsed:{type:Boolean},layout:null,getMenuOptions:{type:Function}},setup(e){const o=e,r=Ce(),i=Fe(),a=je(),l=$(),v=$();ze(()=>{l.value="",v.value=o.getMenuOptions()}),ne(()=>{var h;a.name!==l.value&&(l.value=((h=a.name)==null?void 0:h.toString())??"")}),Se(()=>r.language,(h,z)=>{h!==z&&(v.value=v.value)});const m=h=>l.value=h,c=h=>{var z=y=>["menus",o.layout,y],f=z(he.toString(h.key)),A=z(he.toString(h.label));if(!h.link)return h.label?h.label:i.get(f,h);if(!i.has(f))return fe(h.link,typeof h.label=="string"&&i.has(A)?i.get(A,h):h.label??h.key)();var T=i.get(f,h);return"link"in h?fe(h.link,T)():T},N=h=>"iconType"in h?qe(h.iconType)():null;return(h,z)=>(we(),Ie(E(So),{value:l.value,options:v.value,collapsed:e.collapsed,"collapsed-width":0,accordion:"","onUpdate:value":z[0]||(z[0]=f=>m(f)),"render-icon":N,"render-label":c},null,8,["value","options","collapsed"]))}});const Io=Je(wo,[["__scopeId","data-v-66db28b0"]]),Ro=["src"],qo=O({__name:"jokes",setup(e){const o=Ce();let r=$();const i=()=>o.sidebar=!r.value;return ze(()=>r.value=o.sidebar),Se(()=>o.sidebar,a=>r.value=a),(a,l)=>(we(),Ie(E(te),{style:{height:"100%"}},{default:D(()=>[j(E(lo),{style:{height:"64px"},bordered:""},{default:D(()=>[j(E(Ze),null,{default:D(()=>[Ke("img",{onClick:l[0]||(l[0]=v=>a.$router.push("/")),src:E(De),style:{"max-width":"100%",height:"45px","margin-left":"12px","margin-top":"12px"}},null,8,Ro)]),_:1})]),_:1}),j(E(te),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:D(()=>[j(E(vo),{"native-scrollbar":!1,bordered:"","show-trigger":"bar","collapse-mode":"width","collapsed-width":0,"show-collapsed-content":!1,collapsed:r.value,width:240,onCollapse:i,onExpand:i},{default:D(()=>[j(Io,{layout:"jokes",collapsed:r.value,"get-menu-options":()=>E(Ue)("jokes")??[]},null,8,["collapsed","get-menu-options"])]),_:1},8,["collapsed"]),j(E(te),{"content-style":"padding: 24px;","native-scrollbar":!1},{default:D(()=>[j(Ve)]),_:1})]),_:1})]),_:1}))}});export{qo as default};
