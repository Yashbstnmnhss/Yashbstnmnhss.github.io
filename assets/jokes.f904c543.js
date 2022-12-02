import{f as O,j as m,U as W,c as d,d as w,a4 as _,y as M,u as Q,b5 as ae,p as V,b6 as be,m as y,a8 as ee,b7 as xe,e as s,b as x,b8 as ye,k as F,a3 as J,a6 as E,Z as U,F as Me,W as ne,b9 as Be,ba as ce,a9 as oe,a as G,bb as Le,bc as Fe,aT as ie,v as Ce,x as _e,bd as je,z as ze,K as we,o as Se,H as Ie,C as L,B as D,A as j,be as Ke,r as X}from"./index.d6438343.js";import{C as Ve,N as De,c as Ue,r as fe,a as qe,g as We}from"./jokes.87a95926.js";import{N as Ye}from"./Tooltip.7b9840be.js";import{u as le,b as Ge}from"./cssr.1b746292.js";import{f as te}from"./format-length.7f3135aa.js";import{N as Xe}from"./Space.40368062.js";import"./Icon.524dffcd.js";import"./VolumeHighOutline.2ec2bbd6.js";import"./Ellipsis.85c42438.js";import"./on-fonts-ready.d12e5a48.js";const Ze=O({name:"ChevronDownFilled",render(){return m("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},m("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Re=W("n-layout-sider"),se={type:String,default:"static"},Je=d("layout",`
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
 `)]),Qe={embedded:Boolean,position:se,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Pe=W("n-layout");function eo(e){return O({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},_.props),Qe),setup(o){const r=M(null),i=M(null),{mergedClsPrefixRef:l,inlineThemeDisabled:c}=Q(o),h=_("Layout","-layout",Je,ae,o,l);function u(z,I){if(o.nativeScrollbar){const{value:A}=r;A&&(I===void 0?A.scrollTo(z):A.scrollTo(z,I))}else{const{value:A}=i;A&&A.scrollTo(z,I)}}V(Pe,o);let a=0,N=0;const H=z=>{var I;const A=z.target;a=A.scrollLeft,N=A.scrollTop,(I=o.onScroll)===null||I===void 0||I.call(o,z)};be(()=>{if(o.nativeScrollbar){const z=r.value;z&&(z.scrollTop=N,z.scrollLeft=a)}});const f={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},v={scrollTo:u},T=y(()=>{const{common:{cubicBezierEaseInOut:z},self:I}=h.value;return{"--n-bezier":z,"--n-color":o.embedded?I.colorEmbedded:I.color,"--n-text-color":I.textColor}}),P=c?ee("layout",y(()=>o.embedded?"e":""),T,o):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:f,mergedTheme:h,handleNativeElScroll:H,cssVars:c?void 0:T,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender},v)},render(){var o;const{mergedClsPrefix:r,hasSider:i}=this;(o=this.onRender)===null||o===void 0||o.call(this);const l=i?this.hasSiderStyle:void 0,c=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return m("div",{class:c,style:this.cssVars},this.nativeScrollbar?m("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):m(xe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const re=eo(!1),oo=d("layout-header",`
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
 `)]),to={position:se,inverted:Boolean,bordered:{type:Boolean,default:!1}},ro=O({name:"LayoutHeader",props:Object.assign(Object.assign({},_.props),to),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Q(e),i=_("Layout","-layout-header",oo,ae,e,o),l=y(()=>{const{common:{cubicBezierEaseInOut:h},self:u}=i.value,a={"--n-bezier":h};return e.inverted?(a["--n-color"]=u.headerColorInverted,a["--n-text-color"]=u.textColorInverted,a["--n-border-color"]=u.headerBorderColorInverted):(a["--n-color"]=u.headerColor,a["--n-text-color"]=u.textColor,a["--n-border-color"]=u.headerBorderColor),a}),c=r?ee("layout-header",y(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),no=d("layout-sider",`
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
 `)]),io=O({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},m(ye,{clsPrefix:e},{default:()=>m(Ve,null)}))}}),lo=O({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return m("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},m("div",{class:`${e}-layout-toggle-bar__top`}),m("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),ao={position:se,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},co=O({name:"LayoutSider",props:Object.assign(Object.assign({},_.props),ao),setup(e){const o=F(Pe),r=M(null),i=M(null),l=y(()=>te(a.value?e.collapsedWidth:e.width)),c=y(()=>e.collapseMode!=="transform"?{}:{minWidth:te(e.width)}),h=y(()=>o?o.siderPlacement:"left"),u=M(e.defaultCollapsed),a=le(J(e,"collapsed"),u);function N(R,C){if(e.nativeScrollbar){const{value:S}=r;S&&(C===void 0?S.scrollTo(R):S.scrollTo(R,C))}else{const{value:S}=i;S&&S.scrollTo(R,C)}}function H(){const{"onUpdate:collapsed":R,onUpdateCollapsed:C,onExpand:S,onCollapse:p}=e,{value:b}=a;C&&E(C,!b),R&&E(R,!b),u.value=!b,b?S&&E(S):p&&E(p)}let f=0,v=0;const T=R=>{var C;const S=R.target;f=S.scrollLeft,v=S.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,R)};be(()=>{if(e.nativeScrollbar){const R=r.value;R&&(R.scrollTop=v,R.scrollLeft=f)}}),V(Re,{collapsedRef:a,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:P,inlineThemeDisabled:z}=Q(e),I=_("Layout","-layout-sider",no,ae,e,P);function A(R){var C,S;R.propertyName==="max-width"&&(a.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(S=e.onAfterEnter)===null||S===void 0||S.call(e))}const q={scrollTo:N},B=y(()=>{const{common:{cubicBezierEaseInOut:R},self:C}=I.value,{siderToggleButtonColor:S,siderToggleButtonBorder:p,siderToggleBarColor:b,siderToggleBarColorHover:t}=C,g={"--n-bezier":R,"--n-toggle-button-color":S,"--n-toggle-button-border":p,"--n-toggle-bar-color":b,"--n-toggle-bar-color-hover":t};return e.inverted?(g["--n-color"]=C.siderColorInverted,g["--n-text-color"]=C.textColorInverted,g["--n-border-color"]=C.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,g.__invertScrollbar=C.__invertScrollbar):(g["--n-color"]=C.siderColor,g["--n-text-color"]=C.textColor,g["--n-border-color"]=C.siderBorderColor,g["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),g}),$=z?ee("layout-sider",y(()=>e.inverted?"a":"b"),B,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:P,mergedTheme:I,styleMaxWidth:l,mergedCollapsed:a,scrollContainerStyle:c,siderPlacement:h,handleNativeElScroll:T,handleTransitionend:A,handleTriggerClick:H,inlineThemeDisabled:z,cssVars:B,themeClass:$==null?void 0:$.themeClass,onRender:$==null?void 0:$.onRender},q)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),m("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:te(this.width)}]},this.nativeScrollbar?m("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):m(xe,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?m(lo,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):m(io,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?m("div",{class:`${o}-layout-sider__border`}):null)}}),Y=W("n-menu"),de=W("n-submenu"),ue=W("n-menu-item-group"),Z=8;function ve(e){const o=F(Y),{props:r,mergedCollapsedRef:i}=o,l=F(de,null),c=F(ue,null),h=y(()=>r.mode==="horizontal"),u=y(()=>h.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=y(()=>{var v;return Math.max((v=r.collapsedIconSize)!==null&&v!==void 0?v:r.iconSize,r.iconSize)}),N=y(()=>{var v;return!h.value&&e.root&&i.value&&(v=r.collapsedIconSize)!==null&&v!==void 0?v:r.iconSize}),H=y(()=>{if(h.value)return;const{collapsedWidth:v,indent:T,rootIndent:P}=r,{root:z,isGroup:I}=e,A=P===void 0?T:P;if(z)return i.value?v/2-a.value/2:A;if(c)return T/2+c.paddingLeftRef.value;if(l)return(I?T/2:T)+l.paddingLeftRef.value}),f=y(()=>{const{collapsedWidth:v,indent:T,rootIndent:P}=r,{value:z}=a,{root:I}=e;return h.value||!I||!i.value?Z:(P===void 0?T:P)+z+Z-(v+z)/2});return{dropdownPlacement:u,activeIconSize:N,maxIconSize:a,paddingLeft:H,iconMarginRight:f,NMenu:o,NSubmenu:l}}const me={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Te=Object.assign(Object.assign({},me),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),so=O({name:"MenuOptionGroup",props:Te,setup(e){V(de,null);const o=ve(e);V(ue,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:r,props:i}=F(Y);return function(){const{value:l}=r,c=o.paddingLeft.value,{nodeProps:h}=i,u=h==null?void 0:h(e.tmNode.rawNode);return m("div",{class:`${l}-menu-item-group`,role:"group"},m("div",Object.assign({},u,{class:[`${l}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),U(e.title),e.extra?m(Me,null," ",U(e.extra)):null),m("div",null,e.tmNodes.map(a=>he(a,i))))}}}),Ne=O({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=F(Y);return{menuProps:o,style:y(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:y(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:l}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:r,renderLabel:i,renderExtra:l,expandIcon:c}}=this,h=r?r(o.rawNode):U(this.icon);return m("div",{onClick:u=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},h&&m("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),m("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(o.rawNode):U(this.title),this.extra||l?m("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(o.rawNode):U(this.extra)):null),this.showArrow?m(ye,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(o.rawNode):m(Ze,null)}):null)}}),Ae=Object.assign(Object.assign({},me),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),uo=O({name:"Submenu",props:Ae,setup(e){const o=ve(e),{NMenu:r,NSubmenu:i}=o,{props:l,mergedCollapsedRef:c,mergedThemeRef:h}=r,u=y(()=>{const{disabled:v}=e;return i!=null&&i.mergedDisabledRef.value||l.disabled?!0:v}),a=M(!1);V(de,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:u}),V(ue,null);function N(){const{onClick:v}=e;v&&v()}function H(){u.value||(c.value||r.toggleExpand(e.internalKey),N())}function f(v){a.value=v}return{menuProps:l,mergedTheme:h,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:a,paddingLeft:o.paddingLeft,mergedDisabled:u,mergedValue:r.mergedValueRef,childActive:ne(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>l.mode==="horizontal"?!1:c.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!u.value&&(l.mode==="horizontal"||c.value)),handlePopoverShowChange:f,handleClick:H}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:r,renderLabel:i}}=this,l=()=>{const{isHorizontal:h,paddingLeft:u,collapsed:a,mergedDisabled:N,maxIconSize:H,activeIconSize:f,title:v,childActive:T,icon:P,handleClick:z,menuProps:{nodeProps:I},dropdownShow:A,iconMarginRight:q,tmNode:B,mergedClsPrefix:$}=this,R=I==null?void 0:I(B.rawNode);return m("div",Object.assign({},R,{class:[`${$}-menu-item`,R==null?void 0:R.class],role:"menuitem"}),m(Ne,{tmNode:B,paddingLeft:u,collapsed:a,disabled:N,iconMarginRight:q,maxIconSize:H,activeIconSize:f,title:v,extra:this.extra,showArrow:!h,childActive:T,clsPrefix:$,icon:P,hover:A,onClick:z}))},c=()=>m(Be,null,{default:()=>{const{tmNodes:h,collapsed:u}=this;return u?null:m("div",{class:`${o}-submenu-children`,role:"menu"},h.map(a=>he(a,this.menuProps)))}});return this.root?m(De,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>m("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:c())}):m("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),c())}}),ke=Object.assign(Object.assign({},me),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),vo=O({name:"MenuOption",props:ke,setup(e){const o=ve(e),{NSubmenu:r,NMenu:i}=o,{props:l,mergedClsPrefixRef:c,mergedCollapsedRef:h}=i,u=r?r.mergedDisabledRef:{value:!1},a=y(()=>u.value||e.disabled);function N(f){const{onClick:v}=e;v&&v(f)}function H(f){a.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),N(f))}return{mergedClsPrefix:c,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:l,dropdownEnabled:ne(()=>e.root&&h.value&&l.mode!=="horizontal"&&!a.value),selected:ne(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:H}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:r,menuProps:{renderLabel:i,nodeProps:l}}=this,c=l==null?void 0:l(r.rawNode);return m("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),m(Ye,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):U(this.title),trigger:()=>m(Ne,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),mo=O({name:"MenuDivider",setup(){const e=F(Y),{mergedClsPrefixRef:o,isHorizontalRef:r}=e;return()=>r.value?null:m("div",{class:`${o.value}-menu-divider`})}}),ho=ce(Te),fo=ce(ke),go=ce(Ae);function He(e){return e.type==="divider"||e.type==="render"}function po(e){return e.type==="divider"}function he(e,o){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(He(r))return po(r)?m(mo,Object.assign({key:e.key},r.props)):null;const{labelField:l}=o,{key:c,level:h,isGroup:u}=e,a=Object.assign(Object.assign({},r),{title:r.title||r[l],extra:r.titleExtra||r.extra,key:c,internalKey:c,level:h,root:h===0,isGroup:u});return e.children?e.isGroup?m(so,oe(a,ho,{tmNode:e,tmNodes:e.children,key:c})):m(uo,oe(a,go,{key:c,rawNodes:r[o.childrenField],tmNodes:e.children,tmNode:e})):m(vo,oe(a,fo,{key:c,tmNode:e}))}const ge=[x("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
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
 `)])],bo=x([d("menu",`
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
 `)]),G("disabled",[G("selected, child-active",[x("&:focus-within",pe)]),w("selected",[K(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
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
 `)]),G("disabled",[G("selected, child-active",[x("&:focus-within",ge)]),w("selected",[K(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
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
 `)]);function K(e,o){return[w("hover",e,o),x("&:hover",e,o)]}const xo=Object.assign(Object.assign({},_.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),yo=O({name:"Menu",props:xo,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Q(e),i=_("Menu","-menu",bo,Fe,e,o),l=F(Re,null),c=y(()=>{var p;const{collapsed:b}=e;if(b!==void 0)return b;if(l){const{collapseModeRef:t,collapsedRef:g}=l;if(t.value==="width")return(p=g.value)!==null&&p!==void 0?p:!1}return!1}),h=y(()=>{const{keyField:p,childrenField:b,disabledField:t}=e;return Ue(e.items||e.options,{getIgnored(g){return He(g)},getChildren(g){return g[b]},getDisabled(g){return g[t]},getKey(g){var k;return(k=g[p])!==null&&k!==void 0?k:g.name}})}),u=y(()=>new Set(h.value.treeNodes.map(p=>p.key))),{watchProps:a}=e,N=M(null);a!=null&&a.includes("defaultValue")?ie(()=>{N.value=e.defaultValue}):N.value=e.defaultValue;const H=J(e,"value"),f=le(H,N),v=M([]),T=()=>{v.value=e.defaultExpandAll?h.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||h.value.getPath(f.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ie(T):T();const P=Ge(e,["expandedNames","expandedKeys"]),z=le(P,v),I=y(()=>h.value.treeNodes),A=y(()=>h.value.getPath(f.value).keyPath);V(Y,{props:e,mergedCollapsedRef:c,mergedThemeRef:i,mergedValueRef:f,mergedExpandedKeysRef:z,activePathRef:A,mergedClsPrefixRef:o,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:q,toggleExpand:$});function q(p,b){const{"onUpdate:value":t,onUpdateValue:g,onSelect:k}=e;g&&E(g,p,b),t&&E(t,p,b),k&&E(k,p,b),N.value=p}function B(p){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:g,onOpenNamesChange:k}=e;b&&E(b,p),t&&E(t,p),g&&E(g,p),k&&E(k,p),v.value=p}function $(p){const b=Array.from(z.value),t=b.findIndex(g=>g===p);if(~t)b.splice(t,1);else{if(e.accordion&&u.value.has(p)){const g=b.findIndex(k=>u.value.has(k));g>-1&&b.splice(g,1)}b.push(p)}B(b)}const R=p=>{const b=h.value.getPath(p!=null?p:f.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(z.value),g=new Set([...t,...b]);e.accordion&&u.value.forEach(k=>{g.has(k)&&!b.includes(k)&&g.delete(k)}),B(Array.from(g))},C=y(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:b},self:t}=i.value,{borderRadius:g,borderColorHorizontal:k,fontSize:Oe,itemHeight:$e,dividerColor:Ee}=t,n={"--n-divider-color":Ee,"--n-bezier":b,"--n-font-size":Oe,"--n-border-color-horizontal":k,"--n-border-radius":g,"--n-item-height":$e};return p?(n["--n-group-text-color"]=t.groupTextColorInverted,n["--n-color"]=t.colorInverted,n["--n-item-text-color"]=t.itemTextColorInverted,n["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,n["--n-item-text-color-active"]=t.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=t.itemIconColorInverted,n["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=t.arrowColorInverted,n["--n-arrow-color-hover"]=t.arrowColorHoverInverted,n["--n-arrow-color-active"]=t.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=t.itemColorHoverInverted,n["--n-item-color-active"]=t.itemColorActiveInverted,n["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=t.groupTextColor,n["--n-color"]=t.color,n["--n-item-text-color"]=t.itemTextColor,n["--n-item-text-color-hover"]=t.itemTextColorHover,n["--n-item-text-color-active"]=t.itemTextColorActive,n["--n-item-text-color-child-active"]=t.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,n["--n-item-icon-color"]=t.itemIconColor,n["--n-item-icon-color-hover"]=t.itemIconColorHover,n["--n-item-icon-color-active"]=t.itemIconColorActive,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=t.arrowColor,n["--n-arrow-color-hover"]=t.arrowColorHover,n["--n-arrow-color-active"]=t.arrowColorActive,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,n["--n-arrow-color-child-active"]=t.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,n["--n-item-color-hover"]=t.itemColorHover,n["--n-item-color-active"]=t.itemColorActive,n["--n-item-color-active-hover"]=t.itemColorActiveHover,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),n}),S=r?ee("menu",y(()=>e.inverted?"a":"b"),C,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:P,uncontrolledExpanededKeys:v,mergedExpandedKeys:z,uncontrolledValue:N,mergedValue:f,activePath:A,tmNodes:I,mergedTheme:i,mergedCollapsed:c,cssVars:r?void 0:C,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,showOption:R}},render(){const{mergedClsPrefix:e,mode:o,themeClass:r,onRender:i}=this;return i==null||i(),m("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>he(l,this.$props)))}}),Co=O({props:{collapsed:{type:Boolean},layout:null,getMenuOptions:null},setup(e){const o=e,r=Ce(),{t:i,te:l}=_e(),c=je(),h=M(),u=M();ze(()=>{h.value="",u.value=o.getMenuOptions()}),ie(()=>{var f,v;c.name!==h.value&&(h.value=(v=(f=c.name)==null?void 0:f.toString())!=null?v:"")}),we(()=>r.language,(f,v)=>{f!==v&&(u.value=u.value)});const a=f=>{h.value=f},N=f=>{var P;var v=`layouts.${o.layout}.${f.key}`;if(!f.link)return f.label?f.label:i(v);if(!l(v))return fe(f.link,(P=f.label)!=null?P:f.key)();var T=i(v);return"link"in f?fe(f.link,T)():T},H=f=>"iconType"in f?qe(f.iconType)():null;return(f,v)=>(Se(),Ie(L(yo),{value:h.value,options:u.value,collapsed:e.collapsed,accordion:"","onUpdate:value":v[0]||(v[0]=T=>a(T)),"render-icon":H,"render-label":N},null,8,["value","options","collapsed"]))}}),zo=X("svg",{style:{"max-width":"100%"},height:"64px",viewBox:"0 0 500 64"},[X("circle",{id:"iconWrap",cx:"30",cy:"30",r:"15",style:{stroke:"var(--n-text-color)","stroke-width":"3px",fill:"transparent"}}),X("text",{id:"iconText",x:"20",y:"36",style:{"font-size":"20px",fill:"rgb(36, 204, 255)","user-select":"none",cursor:"pointer"},onclick:"window.location.href='/'"}," \u6A02 "),X("text",{x:"55",y:"40",style:{"font-size":"25px",fill:"var(--n-text-color)","user-select":"none",cursor:"pointer"},onclick:"window.location.href='/'"}," Bstnmnhss 3 ")],-1),Oo=O({setup(e){const o=Ce();let r=M();const i=()=>o.sidebar=!r.value;return ze(()=>r.value=o.sidebar),we(()=>o.sidebar,l=>r.value=l),(l,c)=>(Se(),Ie(L(re),{style:{height:"100%"}},{default:D(()=>[j(L(ro),{style:{height:"64px"},bordered:""},{default:D(()=>[j(L(Xe),null,{default:D(()=>[zo]),_:1})]),_:1}),j(L(re),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:D(()=>[j(L(co),{"native-scrollbar":!1,bordered:"","show-trigger":"","collapse-mode":"width","collapsed-width":5,"show-collapsed-content":!1,collapsed:r.value,width:240,onCollapse:i,onExpand:i},{default:D(()=>[j(Co,{layout:"JokesLayout",collapsed:r.value,"get-menu-options":L(We)},null,8,["collapsed","get-menu-options"])]),_:1},8,["collapsed"]),j(L(re),{"content-style":"padding: 24px;","native-scrollbar":!1},{default:D(()=>[j(Ke)]),_:1})]),_:1})]),_:1}))}});export{Oo as default};
