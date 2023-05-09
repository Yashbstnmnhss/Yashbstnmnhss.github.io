import{d as _,h as m,c as W,a as d,b as S,u as F,r as M,e as Q,l as le,p as V,f as be,g as z,i as Z,N as xe,j as s,k as C,m as ye,t as J,n as B,o as E,q as U,F as _e,s as re,v as $e,w as ee,x as ae,y as Y,z as Ee,A as ne,B as Le,C as Ce,D as ze,E as Be,G as we,H as Se,I as H,J as he,K as Fe,L as je,M as Ke,O as Ve,P as D,Q as j,R as De,_ as Ue}from"./index-1bc82fee.js";import{L as qe,g as We}from"./logo-3d14520c.js";import{r as fe,a as Ge}from"./render-134619bb.js";import{N as Ye}from"./Dropdown-fdd72c38.js";import{N as Xe}from"./Tooltip-4c4cec56.js";import{u as ie}from"./use-merged-state-2b286add.js";import{u as Je}from"./use-compitable-861f592d.js";import{c as Qe}from"./create-7bda32ce.js";import{_ as Ze}from"./_plugin-vue_export-helper-c27b6911.js";import{N as eo}from"./Space-9dfa272e.js";import{C as oo}from"./ChevronRight-33029417.js";import{f as oe}from"./format-length-c9d165c6.js";import"./Ellipsis-ee7707be.js";import"./Icon-d1f25f85.js";import"./VolumeHighOutline-2215cc7d.js";import"./ChatboxEllipsesOutline-add206fe.js";import"./cssr-557a85a4.js";import"./on-fonts-ready-20a9b6f4.js";import"./get-slot-1efb97e5.js";const to=_({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Ie=W("n-layout-sider"),ce={type:String,default:"static"},ro=d("layout",`
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
 `),S("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),no={embedded:Boolean,position:ce,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Re=W("n-layout");function io(e){return _({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),no),setup(t){const r=M(null),i=M(null),{mergedClsPrefixRef:c,inlineThemeDisabled:l}=Q(t),v=F("Layout","-layout",ro,le,t,c);function u(y,T){if(t.nativeScrollbar){const{value:k}=r;k&&(T===void 0?k.scrollTo(y):k.scrollTo(y,T))}else{const{value:k}=i;k&&k.scrollTo(y,T)}}V(Re,t);let a=0,A=0;const f=y=>{var T;const k=y.target;a=k.scrollLeft,A=k.scrollTop,(T=t.onScroll)===null||T===void 0||T.call(t,y)};be(()=>{if(t.nativeScrollbar){const y=r.value;y&&(y.scrollTop=A,y.scrollLeft=a)}});const b={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},h={scrollTo:u},P=z(()=>{const{common:{cubicBezierEaseInOut:y},self:T}=v.value;return{"--n-bezier":y,"--n-color":t.embedded?T.colorEmbedded:T.color,"--n-text-color":T.textColor}}),I=l?Z("layout",z(()=>t.embedded?"e":""),P,t):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:b,mergedTheme:v,handleNativeElScroll:f,cssVars:l?void 0:P,themeClass:I==null?void 0:I.themeClass,onRender:I==null?void 0:I.onRender},h)},render(){var t;const{mergedClsPrefix:r,hasSider:i}=this;(t=this.onRender)===null||t===void 0||t.call(this);const c=i?this.hasSiderStyle:void 0,l=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return m("div",{class:l,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,c],onScroll:this.handleNativeElScroll},this.$slots):m(xe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,c]}),this.$slots))}})}const te=io(!1),lo=d("layout-header",`
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
 `)]),ao={position:ce,inverted:Boolean,bordered:{type:Boolean,default:!1}},co=_({name:"LayoutHeader",props:Object.assign(Object.assign({},F.props),ao),setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=Q(e),i=F("Layout","-layout-header",lo,le,e,t),c=z(()=>{const{common:{cubicBezierEaseInOut:v},self:u}=i.value,a={"--n-bezier":v};return e.inverted?(a["--n-color"]=u.headerColorInverted,a["--n-text-color"]=u.textColorInverted,a["--n-border-color"]=u.headerBorderColorInverted):(a["--n-color"]=u.headerColor,a["--n-text-color"]=u.textColor,a["--n-border-color"]=u.headerBorderColor),a}),l=r?Z("layout-header",z(()=>e.inverted?"a":"b"),c,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:c,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${t}-layout-header`,this.themeClass,this.position&&`${t}-layout-header--${this.position}-positioned`,this.bordered&&`${t}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),so=d("layout-sider",`
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
`,[S("bordered",[s("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),s("left-placement",[S("bordered",[s("border",`
 right: 0;
 `)])]),S("right-placement",`
 justify-content: flex-start;
 `,[S("bordered",[s("border",`
 left: 0;
 `)]),S("collapsed",[d("layout-toggle-button",[d("base-icon",`
 transform: rotate(180deg);
 `)]),d("layout-toggle-bar",[C("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),d("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[d("base-icon",`
 transform: rotate(0);
 `)]),d("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[C("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),S("collapsed",[d("layout-toggle-bar",[C("&:hover",[s("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),d("layout-toggle-button",[d("base-icon",`
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
 `),C("&:hover",[s("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),s("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),C("&:hover",[s("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),s("border",`
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
 `),S("show-content",[d("layout-sider-scroll-container",{opacity:1})]),S("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),uo=_({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(ye,{clsPrefix:e},{default:()=>m(oo,null)}))}}),vo=_({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),mo={position:ce,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},ho=_({name:"LayoutSider",props:Object.assign(Object.assign({},F.props),mo),setup(e){const t=B(Re),r=M(null),i=M(null),c=z(()=>oe(a.value?e.collapsedWidth:e.width)),l=z(()=>e.collapseMode!=="transform"?{}:{minWidth:oe(e.width)}),v=z(()=>t?t.siderPlacement:"left"),u=M(e.defaultCollapsed),a=ie(J(e,"collapsed"),u);function A(N,w){if(e.nativeScrollbar){const{value:R}=r;R&&(w===void 0?R.scrollTo(N):R.scrollTo(N,w))}else{const{value:R}=i;R&&R.scrollTo(N,w)}}function f(){const{"onUpdate:collapsed":N,onUpdateCollapsed:w,onExpand:R,onCollapse:p}=e,{value:x}=a;w&&E(w,!x),N&&E(N,!x),u.value=!x,x?R&&E(R):p&&E(p)}let b=0,h=0;const P=N=>{var w;const R=N.target;b=R.scrollLeft,h=R.scrollTop,(w=e.onScroll)===null||w===void 0||w.call(e,N)};be(()=>{if(e.nativeScrollbar){const N=r.value;N&&(N.scrollTop=h,N.scrollLeft=b)}}),V(Ie,{collapsedRef:a,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:I,inlineThemeDisabled:y}=Q(e),T=F("Layout","-layout-sider",so,le,e,I);function k(N){var w,R;N.propertyName==="max-width"&&(a.value?(w=e.onAfterLeave)===null||w===void 0||w.call(e):(R=e.onAfterEnter)===null||R===void 0||R.call(e))}const q={scrollTo:A},L=z(()=>{const{common:{cubicBezierEaseInOut:N},self:w}=T.value,{siderToggleButtonColor:R,siderToggleButtonBorder:p,siderToggleBarColor:x,siderToggleBarColorHover:o}=w,g={"--n-bezier":N,"--n-toggle-button-color":R,"--n-toggle-button-border":p,"--n-toggle-bar-color":x,"--n-toggle-bar-color-hover":o};return e.inverted?(g["--n-color"]=w.siderColorInverted,g["--n-text-color"]=w.textColorInverted,g["--n-border-color"]=w.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColorInverted,g.__invertScrollbar=w.__invertScrollbar):(g["--n-color"]=w.siderColor,g["--n-text-color"]=w.textColor,g["--n-border-color"]=w.siderBorderColor,g["--n-toggle-button-icon-color"]=w.siderToggleButtonIconColor),g}),$=y?Z("layout-sider",z(()=>e.inverted?"a":"b"),L,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:I,mergedTheme:T,styleMaxWidth:c,mergedCollapsed:a,scrollContainerStyle:l,siderPlacement:v,handleNativeElScroll:P,handleTransitionend:k,handleTriggerClick:f,inlineThemeDisabled:y,cssVars:L,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},q)},render(){var e;const{mergedClsPrefix:t,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${t}-layout-sider`,this.themeClass,`${t}-layout-sider--${this.position}-positioned`,`${t}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${t}-layout-sider--bordered`,r&&`${t}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${t}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:oe(this.width)}]},this.nativeScrollbar?m("div",{class:`${t}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(xe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?m(vo,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(uo,{clsPrefix:t,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${t}-layout-sider__border`}):null)}}),G=W("n-menu"),se=W("n-submenu"),de=W("n-menu-item-group"),X=8;function ue(e){const t=B(G),{props:r,mergedCollapsedRef:i}=t,c=B(se,null),l=B(de,null),v=z(()=>r.mode==="horizontal"),u=z(()=>v.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=z(()=>{var h;return Math.max((h=r.collapsedIconSize)!==null&&h!==void 0?h:r.iconSize,r.iconSize)}),A=z(()=>{var h;return!v.value&&e.root&&i.value&&(h=r.collapsedIconSize)!==null&&h!==void 0?h:r.iconSize}),f=z(()=>{if(v.value)return;const{collapsedWidth:h,indent:P,rootIndent:I}=r,{root:y,isGroup:T}=e,k=I===void 0?P:I;if(y)return i.value?h/2-a.value/2:k;if(l)return P/2+l.paddingLeftRef.value;if(c)return(T?P/2:P)+c.paddingLeftRef.value}),b=z(()=>{const{collapsedWidth:h,indent:P,rootIndent:I}=r,{value:y}=a,{root:T}=e;return v.value||!T||!i.value?X:(I===void 0?P:I)+y+X-(h+y)/2});return{dropdownPlacement:u,activeIconSize:A,maxIconSize:a,paddingLeft:f,iconMarginRight:b,NMenu:t,NSubmenu:c}}const ve={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Pe=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),fo=_({name:"MenuOptionGroup",props:Pe,setup(e){V(se,null);const t=ue(e);V(de,{paddingLeftRef:t.paddingLeft});const{mergedClsPrefixRef:r,props:i}=B(G);return function(){const{value:c}=r,l=t.paddingLeft.value,{nodeProps:v}=i,u=v==null?void 0:v(e.tmNode.rawNode);return m("div",{class:`${c}-menu-item-group`,role:"group"},m("div",Object.assign({},u,{class:[`${c}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",l!==void 0?`padding-left: ${l}px;`:""]}),U(e.title),e.extra?m(_e,null," ",U(e.extra)):null),m("div",null,e.tmNodes.map(a=>me(a,i))))}}}),Te=_({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:t}=B(G);return{menuProps:t,style:z(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:z(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:c}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${c}px`}})}},render(){const{clsPrefix:e,tmNode:t,menuProps:{renderIcon:r,renderLabel:i,renderExtra:c,expandIcon:l}}=this,v=r?r(t.rawNode):U(this.icon);return m("div",{onClick:u=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},v&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[v]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(t.rawNode):U(this.title),this.extra||c?m("span",{class:`${e}-menu-item-content-header__extra`}," ",c?c(t.rawNode):U(this.extra)):null),this.showArrow?m(ye,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>l?l(t.rawNode):m(to,null)}):null)}}),Ne=Object.assign(Object.assign({},ve),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),go=_({name:"Submenu",props:Ne,setup(e){const t=ue(e),{NMenu:r,NSubmenu:i}=t,{props:c,mergedCollapsedRef:l,mergedThemeRef:v}=r,u=z(()=>{const{disabled:h}=e;return i!=null&&i.mergedDisabledRef.value||c.disabled?!0:h}),a=M(!1);V(se,{paddingLeftRef:t.paddingLeft,mergedDisabledRef:u}),V(de,null);function A(){const{onClick:h}=e;h&&h()}function f(){u.value||(l.value||r.toggleExpand(e.internalKey),A())}function b(h){a.value=h}return{menuProps:c,mergedTheme:v,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,iconMarginRight:t.iconMarginRight,dropdownPlacement:t.dropdownPlacement,dropdownShow:a,paddingLeft:t.paddingLeft,mergedDisabled:u,mergedValue:r.mergedValueRef,childActive:re(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:z(()=>c.mode==="horizontal"?!1:l.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:z(()=>!u.value&&(c.mode==="horizontal"||l.value)),handlePopoverShowChange:b,handleClick:f}},render(){var e;const{mergedClsPrefix:t,menuProps:{renderIcon:r,renderLabel:i}}=this,c=()=>{const{isHorizontal:v,paddingLeft:u,collapsed:a,mergedDisabled:A,maxIconSize:f,activeIconSize:b,title:h,childActive:P,icon:I,handleClick:y,menuProps:{nodeProps:T},dropdownShow:k,iconMarginRight:q,tmNode:L,mergedClsPrefix:$}=this,N=T==null?void 0:T(L.rawNode);return m("div",Object.assign({},N,{class:[`${$}-menu-item`,N==null?void 0:N.class],role:"menuitem"}),m(Te,{tmNode:L,paddingLeft:u,collapsed:a,disabled:A,iconMarginRight:q,maxIconSize:f,activeIconSize:b,title:h,extra:this.extra,showArrow:!v,childActive:P,clsPrefix:$,icon:I,hover:k,onClick:y}))},l=()=>m($e,null,{default:()=>{const{tmNodes:v,collapsed:u}=this;return u?null:m("div",{class:`${t}-submenu-children`,role:"menu"},v.map(a=>me(a,this.menuProps)))}});return this.root?m(Ye,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>m("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),this.isHorizontal?null:l())}):m("div",{class:`${t}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},c(),l())}}),Ae=Object.assign(Object.assign({},ve),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),po=_({name:"MenuOption",props:Ae,setup(e){const t=ue(e),{NSubmenu:r,NMenu:i}=t,{props:c,mergedClsPrefixRef:l,mergedCollapsedRef:v}=i,u=r?r.mergedDisabledRef:{value:!1},a=z(()=>u.value||e.disabled);function A(b){const{onClick:h}=e;h&&h(b)}function f(b){a.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),A(b))}return{mergedClsPrefix:l,dropdownPlacement:t.dropdownPlacement,paddingLeft:t.paddingLeft,iconMarginRight:t.iconMarginRight,maxIconSize:t.maxIconSize,activeIconSize:t.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:c,dropdownEnabled:re(()=>e.root&&v.value&&c.mode!=="horizontal"&&!a.value),selected:re(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:f}},render(){const{mergedClsPrefix:e,mergedTheme:t,tmNode:r,menuProps:{renderLabel:i,nodeProps:c}}=this,l=c==null?void 0:c(r.rawNode);return m("div",Object.assign({},l,{role:"menuitem",class:[`${e}-menu-item`,l==null?void 0:l.class]}),m(Xe,{theme:t.peers.Tooltip,themeOverrides:t.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):U(this.title),trigger:()=>m(Te,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),bo=_({name:"MenuDivider",setup(){const e=B(G),{mergedClsPrefixRef:t,isHorizontalRef:r}=e;return()=>r.value?null:m("div",{class:`${t.value}-menu-divider`})}}),xo=ae(Pe),yo=ae(Ae),Co=ae(Ne);function ke(e){return e.type==="divider"||e.type==="render"}function zo(e){return e.type==="divider"}function me(e,t){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(ke(r))return zo(r)?m(bo,Object.assign({key:e.key},r.props)):null;const{labelField:c}=t,{key:l,level:v,isGroup:u}=e,a=Object.assign(Object.assign({},r),{title:r.title||r[c],extra:r.titleExtra||r.extra,key:l,internalKey:l,level:v,root:v===0,isGroup:u});return e.children?e.isGroup?m(fo,ee(a,xo,{tmNode:e,tmNodes:e.children,key:l})):m(go,ee(a,Co,{key:l,rawNodes:r[t.childrenField],tmNodes:e.children,tmNode:e})):m(po,ee(a,yo,{key:l,tmNode:e}))}const ge=[C("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[C("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],pe=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],wo=C([d("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[S("horizontal",`
 display: inline-flex;
 padding-bottom: 0;
 `,[d("submenu","margin: 0;"),d("menu-item","margin: 0;"),d("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[C("&::before","display: none;"),S("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),d("menu-item-content",[S("selected",[s("icon","color: var(--n-item-icon-color-active-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-horizontal);"),s("extra","color: var(--n-item-text-color-active-horizontal);")])]),S("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[C("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),s("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),Y("disabled",[Y("selected, child-active",[C("&:focus-within",pe)]),S("selected",[K(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),S("child-active",[K(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[C("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",pe)]),d("menu-item-content-header",[C("a","color: var(--n-item-text-color-horizontal);")])])]),S("collapsed",[d("menu-item-content",[S("selected",[C("&::before",`
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
 `,[C("> *","z-index: 1;"),C("&::before",`
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
 `),S("collapsed",[s("arrow","transform: rotate(0);")]),S("selected",[C("&::before","background-color: var(--n-item-color-active);"),s("arrow","color: var(--n-arrow-color-active);"),s("icon","color: var(--n-item-icon-color-active);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[C("a","color: var(--n-item-text-color-active);"),s("extra","color: var(--n-item-text-color-active);")])]),S("child-active",[d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[C("a",`
 color: var(--n-item-text-color-child-active);
 `),s("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),s("arrow",`
 color: var(--n-arrow-color-child-active);
 `),s("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),Y("disabled",[Y("selected, child-active",[C("&:focus-within",ge)]),S("selected",[K(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[C("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),S("child-active",[K(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[C("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),S("selected",[K(null,[C("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,ge)]),s("icon",`
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
 `,[C("a",`
 outline: none;
 text-decoration: none;
 transition: color .3s var(--n-bezier);
 color: var(--n-item-text-color);
 `,[C("&::before",`
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
 `,[Ee({duration:".2s"})])]),d("menu-item-group",[d("menu-item-group-title",`
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
 `)])]),d("menu-tooltip",[C("a",`
 color: inherit;
 text-decoration: none;
 `)]),d("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function K(e,t){return[S("hover",e,t),C("&:hover",e,t)]}const So=Object.assign(Object.assign({},F.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),Io=_({name:"Menu",props:So,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=Q(e),i=F("Menu","-menu",wo,Le,e,t),c=B(Ie,null),l=z(()=>{var p;const{collapsed:x}=e;if(x!==void 0)return x;if(c){const{collapseModeRef:o,collapsedRef:g}=c;if(o.value==="width")return(p=g.value)!==null&&p!==void 0?p:!1}return!1}),v=z(()=>{const{keyField:p,childrenField:x,disabledField:o}=e;return Qe(e.items||e.options,{getIgnored(g){return ke(g)},getChildren(g){return g[x]},getDisabled(g){return g[o]},getKey(g){var O;return(O=g[p])!==null&&O!==void 0?O:g.name}})}),u=z(()=>new Set(v.value.treeNodes.map(p=>p.key))),{watchProps:a}=e,A=M(null);a!=null&&a.includes("defaultValue")?ne(()=>{A.value=e.defaultValue}):A.value=e.defaultValue;const f=J(e,"value"),b=ie(f,A),h=M([]),P=()=>{h.value=e.defaultExpandAll?v.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||v.value.getPath(b.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ne(P):P();const I=Je(e,["expandedNames","expandedKeys"]),y=ie(I,h),T=z(()=>v.value.treeNodes),k=z(()=>v.value.getPath(b.value).keyPath);V(G,{props:e,mergedCollapsedRef:l,mergedThemeRef:i,mergedValueRef:b,mergedExpandedKeysRef:y,activePathRef:k,mergedClsPrefixRef:t,isHorizontalRef:z(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:q,toggleExpand:$});function q(p,x){const{"onUpdate:value":o,onUpdateValue:g,onSelect:O}=e;g&&E(g,p,x),o&&E(o,p,x),O&&E(O,p,x),A.value=p}function L(p){const{"onUpdate:expandedKeys":x,onUpdateExpandedKeys:o,onExpandedNamesChange:g,onOpenNamesChange:O}=e;x&&E(x,p),o&&E(o,p),g&&E(g,p),O&&E(O,p),h.value=p}function $(p){const x=Array.from(y.value),o=x.findIndex(g=>g===p);if(~o)x.splice(o,1);else{if(e.accordion&&u.value.has(p)){const g=x.findIndex(O=>u.value.has(O));g>-1&&x.splice(g,1)}x.push(p)}L(x)}const N=p=>{const x=v.value.getPath(p??b.value,{includeSelf:!1}).keyPath;if(!x.length)return;const o=Array.from(y.value),g=new Set([...o,...x]);e.accordion&&u.value.forEach(O=>{g.has(O)&&!x.includes(O)&&g.delete(O)}),L(Array.from(g))},w=z(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:x},self:o}=i.value,{borderRadius:g,borderColorHorizontal:O,fontSize:He,itemHeight:Oe,dividerColor:Me}=o,n={"--n-divider-color":Me,"--n-bezier":x,"--n-font-size":He,"--n-border-color-horizontal":O,"--n-border-radius":g,"--n-item-height":Oe};return p?(n["--n-group-text-color"]=o.groupTextColorInverted,n["--n-color"]=o.colorInverted,n["--n-item-text-color"]=o.itemTextColorInverted,n["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,n["--n-item-text-color-active"]=o.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=o.itemIconColorInverted,n["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=o.arrowColorInverted,n["--n-arrow-color-hover"]=o.arrowColorHoverInverted,n["--n-arrow-color-active"]=o.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=o.itemColorHoverInverted,n["--n-item-color-active"]=o.itemColorActiveInverted,n["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=o.groupTextColor,n["--n-color"]=o.color,n["--n-item-text-color"]=o.itemTextColor,n["--n-item-text-color-hover"]=o.itemTextColorHover,n["--n-item-text-color-active"]=o.itemTextColorActive,n["--n-item-text-color-child-active"]=o.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,n["--n-item-icon-color"]=o.itemIconColor,n["--n-item-icon-color-hover"]=o.itemIconColorHover,n["--n-item-icon-color-active"]=o.itemIconColorActive,n["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=o.arrowColor,n["--n-arrow-color-hover"]=o.arrowColorHover,n["--n-arrow-color-active"]=o.arrowColorActive,n["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,n["--n-arrow-color-child-active"]=o.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,n["--n-item-color-hover"]=o.itemColorHover,n["--n-item-color-active"]=o.itemColorActive,n["--n-item-color-active-hover"]=o.itemColorActiveHover,n["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),n}),R=r?Z("menu",z(()=>e.inverted?"a":"b"),w,e):void 0;return{mergedClsPrefix:t,controlledExpandedKeys:I,uncontrolledExpanededKeys:h,mergedExpandedKeys:y,uncontrolledValue:A,mergedValue:b,activePath:k,tmNodes:T,mergedTheme:i,mergedCollapsed:l,cssVars:r?void 0:w,themeClass:R==null?void 0:R.themeClass,onRender:R==null?void 0:R.onRender,showOption:N}},render(){const{mergedClsPrefix:e,mode:t,themeClass:r,onRender:i}=this;return i==null||i(),m("div",{role:t==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${t}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(c=>me(c,this.$props)))}}),Ro=_({__name:"SideMenu",props:{collapsed:{type:Boolean},layout:null,indent:null,rootIndent:null,getMenuOptions:{type:Function}},setup(e){const t=e,r=Ce(),i=Fe(),c=je(),l=M(),v=M();ze(()=>{l.value="",v.value=t.getMenuOptions()}),ne(()=>{var f;c.name!==l.value&&(l.value=((f=c.name)==null?void 0:f.toString())??"")}),Be(()=>r.language,(f,b)=>{f!==b&&(v.value=v.value)});const u=f=>l.value=f,a=f=>{var b=y=>["menus",t.layout,y],h=b(he.toString(f.key)),P=b(he.toString(f.label));if(!f.link)return f.label?f.label:i.get(h,f);if(!i.has(h))return fe(f.link,typeof f.label=="string"&&i.has(P)?i.get(P,f):f.label??f.key)();var I=i.get(h,f);return"link"in f?fe(f.link,I)():I},A=f=>"iconType"in f?Ge(f.iconType)():null;return(f,b)=>(we(),Se(H(Io),{indent:e.indent,"root-indent":e.rootIndent,value:l.value,options:v.value,collapsed:e.collapsed,accordion:"","onUpdate:value":b[0]||(b[0]=h=>u(h)),"render-icon":A,"render-label":a},null,8,["indent","root-indent","value","options","collapsed"]))}});const Po=Ze(Ro,[["__scopeId","data-v-3d817872"]]),To=["src"],Go=_({__name:"jokes",setup(e){const t=Ke(Ce());let r=t.sidebar,i=M(!1),c=M("bar"),l=M(0),v=M(240),u=M(32),a=M(32),A=M("transform");const f=()=>r.value=!r.value,b=window.matchMedia("(width < 550px)"),h=({matches:P})=>{v.value=P?150:240,u.value=a.value=P?12:32};return ze(()=>{r.value=t.sidebar.value,b.addEventListener("change",h),window.screen.width<550&&h({matches:!0})}),Ve(()=>b.removeEventListener("change",h)),(P,I)=>(we(),Se(H(te),{style:{height:"100%"}},{default:D(()=>[j(H(co),{style:{height:"64px"},bordered:""},{default:D(()=>[j(H(eo),null,{default:D(()=>[De("img",{onClick:I[0]||(I[0]=y=>P.$router.push("/")),src:H(qe),style:{"max-width":"100%",height:"45px","margin-left":"12px","margin-top":"12px",cursor:"pointer"}},null,8,To)]),_:1})]),_:1}),j(H(te),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:D(()=>[j(H(ho),{"native-scrollbar":!1,bordered:"","show-trigger":H(c),"collapse-mode":H(A),"collapsed-width":H(l),"show-collapsed-content":H(i),collapsed:H(r),width:H(v),onCollapse:f,onExpand:f},{default:D(()=>[j(Po,{indent:H(u),"root-indent":H(a),layout:"jokes",collapsed:H(r),"get-menu-options":()=>H(We)("jokes")??[]},null,8,["indent","root-indent","collapsed","get-menu-options"])]),_:1},8,["show-trigger","collapse-mode","collapsed-width","show-collapsed-content","collapsed","width"]),j(H(te),{class:"main-content","content-style":"padding: 24px;","native-scrollbar":!1},{default:D(()=>[j(Ue,{transition:!0})]),_:1})]),_:1})]),_:1}))}});export{Go as default};
