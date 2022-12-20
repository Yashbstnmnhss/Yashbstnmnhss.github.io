import{e as H,h as v,g as W,c as d,a as w,f as F,B as M,u as Q,C as ae,p as V,D as xe,l as y,n as Z,N as ye,d as s,b as x,E as Ce,j as B,G as J,H as $,I as U,F as Me,J as re,K as Ee,L as ce,M as ee,O as Y,P as Le,Q as ne,R as Be,S as ze,T as Fe,U as je,V as we,W as Se,q as ie,X as Ie,y as L,w as D,v as j,s as Ke,_ as Ve,z as se}from"./index-df691239.js";import{N as De,c as Ue,g as qe}from"./menu-5786d600.js";import{r as ge,a as We}from"./render-97fbe31b.js";import{N as Ge}from"./Tooltip-85fd4e62.js";import{u as le}from"./use-merged-state-deff8ad5.js";import{u as Ye}from"./use-compitable-332ff635.js";import{_ as Xe}from"./_plugin-vue_export-helper-c27b6911.js";import{N as Je}from"./Space-bf2c28cc.js";import{C as Qe}from"./ChevronRight-c145cf11.js";import{f as oe}from"./format-length-c9d165c6.js";import"./VolumeHighOutline-eba5aca4.js";import"./index-d13ca8e3.js";import"./Ellipsis-0c9752ab.js";import"./cssr-deed3743.js";import"./on-fonts-ready-b10f7b66.js";const Ze=H({name:"ChevronDownFilled",render(){return v("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},v("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),Re=W("n-layout-sider"),de={type:String,default:"static"},eo=d("layout",`
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
 `)]),oo={embedded:Boolean,position:de,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},Pe=W("n-layout");function to(e){return H({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},F.props),oo),setup(o){const r=M(null),i=M(null),{mergedClsPrefixRef:l,inlineThemeDisabled:c}=Q(o),h=F("Layout","-layout",eo,ae,o,l);function u(z,I){if(o.nativeScrollbar){const{value:A}=r;A&&(I===void 0?A.scrollTo(z):A.scrollTo(z,I))}else{const{value:A}=i;A&&A.scrollTo(z,I)}}V(Pe,o);let a=0,N=0;const _=z=>{var I;const A=z.target;a=A.scrollLeft,N=A.scrollTop,(I=o.onScroll)===null||I===void 0||I.call(o,z)};xe(()=>{if(o.nativeScrollbar){const z=r.value;z&&(z.scrollTop=N,z.scrollLeft=a)}});const m={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},f={scrollTo:u},T=y(()=>{const{common:{cubicBezierEaseInOut:z},self:I}=h.value;return{"--n-bezier":z,"--n-color":o.embedded?I.colorEmbedded:I.color,"--n-text-color":I.textColor}}),P=c?Z("layout",y(()=>o.embedded?"e":""),T,o):void 0;return Object.assign({mergedClsPrefix:l,scrollableElRef:r,scrollbarInstRef:i,hasSiderStyle:m,mergedTheme:h,handleNativeElScroll:_,cssVars:c?void 0:T,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender},f)},render(){var o;const{mergedClsPrefix:r,hasSider:i}=this;(o=this.onRender)===null||o===void 0||o.call(this);const l=i?this.hasSiderStyle:void 0,c=[this.themeClass,e&&`${r}-layout-content`,`${r}-layout`,`${r}-layout--${this.position}-positioned`];return v("div",{class:c,style:this.cssVars},this.nativeScrollbar?v("div",{ref:"scrollableElRef",class:`${r}-layout-scroll-container`,style:[this.contentStyle,l],onScroll:this.handleNativeElScroll},this.$slots):v(ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentStyle:[this.contentStyle,l]}),this.$slots))}})}const te=to(!1),ro=d("layout-header",`
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
 `)]),no={position:de,inverted:Boolean,bordered:{type:Boolean,default:!1}},io=H({name:"LayoutHeader",props:Object.assign(Object.assign({},F.props),no),setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Q(e),i=F("Layout","-layout-header",ro,ae,e,o),l=y(()=>{const{common:{cubicBezierEaseInOut:h},self:u}=i.value,a={"--n-bezier":h};return e.inverted?(a["--n-color"]=u.headerColorInverted,a["--n-text-color"]=u.textColorInverted,a["--n-border-color"]=u.headerBorderColorInverted):(a["--n-color"]=u.headerColor,a["--n-text-color"]=u.textColor,a["--n-border-color"]=u.headerBorderColor),a}),c=r?Z("layout-header",y(()=>e.inverted?"a":"b"),l,e):void 0;return{mergedClsPrefix:o,cssVars:r?void 0:l,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var e;const{mergedClsPrefix:o}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("div",{class:[`${o}-layout-header`,this.themeClass,this.position&&`${o}-layout-header--${this.position}-positioned`,this.bordered&&`${o}-layout-header--bordered`],style:this.cssVars},this.$slots)}}),lo=d("layout-sider",`
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
 `)]),ao=H({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},v(Ce,{clsPrefix:e},{default:()=>v(Qe,null)}))}}),co=H({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return v("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},v("div",{class:`${e}-layout-toggle-bar__top`}),v("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),so={position:de,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerStyle:[String,Object],collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},uo=H({name:"LayoutSider",props:Object.assign(Object.assign({},F.props),so),setup(e){const o=B(Pe),r=M(null),i=M(null),l=y(()=>oe(a.value?e.collapsedWidth:e.width)),c=y(()=>e.collapseMode!=="transform"?{}:{minWidth:oe(e.width)}),h=y(()=>o?o.siderPlacement:"left"),u=M(e.defaultCollapsed),a=le(J(e,"collapsed"),u);function N(R,C){if(e.nativeScrollbar){const{value:S}=r;S&&(C===void 0?S.scrollTo(R):S.scrollTo(R,C))}else{const{value:S}=i;S&&S.scrollTo(R,C)}}function _(){const{"onUpdate:collapsed":R,onUpdateCollapsed:C,onExpand:S,onCollapse:p}=e,{value:b}=a;C&&$(C,!b),R&&$(R,!b),u.value=!b,b?S&&$(S):p&&$(p)}let m=0,f=0;const T=R=>{var C;const S=R.target;m=S.scrollLeft,f=S.scrollTop,(C=e.onScroll)===null||C===void 0||C.call(e,R)};xe(()=>{if(e.nativeScrollbar){const R=r.value;R&&(R.scrollTop=f,R.scrollLeft=m)}}),V(Re,{collapsedRef:a,collapseModeRef:J(e,"collapseMode")});const{mergedClsPrefixRef:P,inlineThemeDisabled:z}=Q(e),I=F("Layout","-layout-sider",lo,ae,e,P);function A(R){var C,S;R.propertyName==="max-width"&&(a.value?(C=e.onAfterLeave)===null||C===void 0||C.call(e):(S=e.onAfterEnter)===null||S===void 0||S.call(e))}const q={scrollTo:N},E=y(()=>{const{common:{cubicBezierEaseInOut:R},self:C}=I.value,{siderToggleButtonColor:S,siderToggleButtonBorder:p,siderToggleBarColor:b,siderToggleBarColorHover:t}=C,g={"--n-bezier":R,"--n-toggle-button-color":S,"--n-toggle-button-border":p,"--n-toggle-bar-color":b,"--n-toggle-bar-color-hover":t};return e.inverted?(g["--n-color"]=C.siderColorInverted,g["--n-text-color"]=C.textColorInverted,g["--n-border-color"]=C.siderBorderColorInverted,g["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColorInverted,g.__invertScrollbar=C.__invertScrollbar):(g["--n-color"]=C.siderColor,g["--n-text-color"]=C.textColor,g["--n-border-color"]=C.siderBorderColor,g["--n-toggle-button-icon-color"]=C.siderToggleButtonIconColor),g}),O=z?Z("layout-sider",y(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:r,scrollbarInstRef:i,mergedClsPrefix:P,mergedTheme:I,styleMaxWidth:l,mergedCollapsed:a,scrollContainerStyle:c,siderPlacement:h,handleNativeElScroll:T,handleTransitionend:A,handleTriggerClick:_,inlineThemeDisabled:z,cssVars:E,themeClass:O==null?void 0:O.themeClass,onRender:O==null?void 0:O.onRender},q)},render(){var e;const{mergedClsPrefix:o,mergedCollapsed:r,showTrigger:i}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("aside",{class:[`${o}-layout-sider`,this.themeClass,`${o}-layout-sider--${this.position}-positioned`,`${o}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${o}-layout-sider--bordered`,r&&`${o}-layout-sider--collapsed`,(!r||this.showCollapsedContent)&&`${o}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:oe(this.width)}]},this.nativeScrollbar?v("div",{class:`${o}-layout-sider-scroll-container`,onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):v(ye,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),i?i==="bar"?v(co,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):v(ao,{clsPrefix:o,style:r?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?v("div",{class:`${o}-layout-sider__border`}):null)}}),G=W("n-menu"),ue=W("n-submenu"),ve=W("n-menu-item-group"),X=8;function me(e){const o=B(G),{props:r,mergedCollapsedRef:i}=o,l=B(ue,null),c=B(ve,null),h=y(()=>r.mode==="horizontal"),u=y(()=>h.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=y(()=>{var f;return Math.max((f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize,r.iconSize)}),N=y(()=>{var f;return!h.value&&e.root&&i.value&&(f=r.collapsedIconSize)!==null&&f!==void 0?f:r.iconSize}),_=y(()=>{if(h.value)return;const{collapsedWidth:f,indent:T,rootIndent:P}=r,{root:z,isGroup:I}=e,A=P===void 0?T:P;if(z)return i.value?f/2-a.value/2:A;if(c)return T/2+c.paddingLeftRef.value;if(l)return(I?T/2:T)+l.paddingLeftRef.value}),m=y(()=>{const{collapsedWidth:f,indent:T,rootIndent:P}=r,{value:z}=a,{root:I}=e;return h.value||!I||!i.value?X:(P===void 0?T:P)+z+X-(f+z)/2});return{dropdownPlacement:u,activeIconSize:N,maxIconSize:a,paddingLeft:_,iconMarginRight:m,NMenu:o,NSubmenu:l}}const he={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},Te=Object.assign(Object.assign({},he),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),vo=H({name:"MenuOptionGroup",props:Te,setup(e){V(ue,null);const o=me(e);V(ve,{paddingLeftRef:o.paddingLeft});const{mergedClsPrefixRef:r,props:i}=B(G);return function(){const{value:l}=r,c=o.paddingLeft.value,{nodeProps:h}=i,u=h==null?void 0:h(e.tmNode.rawNode);return v("div",{class:`${l}-menu-item-group`,role:"group"},v("div",Object.assign({},u,{class:[`${l}-menu-item-group-title`,u==null?void 0:u.class],style:[(u==null?void 0:u.style)||"",c!==void 0?`padding-left: ${c}px;`:""]}),U(e.title),e.extra?v(Me,null," ",U(e.extra)):null),v("div",null,e.tmNodes.map(a=>fe(a,i))))}}}),Ne=H({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0}},setup(e){const{props:o}=B(G);return{menuProps:o,style:y(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:y(()=>{const{maxIconSize:r,activeIconSize:i,iconMarginRight:l}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${i}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:o,menuProps:{renderIcon:r,renderLabel:i,renderExtra:l,expandIcon:c}}=this,h=r?r(o.rawNode):U(this.icon);return v("div",{onClick:u=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,u)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},h&&v("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[h]),v("div",{class:`${e}-menu-item-content-header`,role:"none"},i?i(o.rawNode):U(this.title),this.extra||l?v("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(o.rawNode):U(this.extra)):null),this.showArrow?v(Ce,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>c?c(o.rawNode):v(Ze,null)}):null)}}),Ae=Object.assign(Object.assign({},he),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:{type:Boolean,default:!1},icon:Function,onClick:Function}),mo=H({name:"Submenu",props:Ae,setup(e){const o=me(e),{NMenu:r,NSubmenu:i}=o,{props:l,mergedCollapsedRef:c,mergedThemeRef:h}=r,u=y(()=>{const{disabled:f}=e;return i!=null&&i.mergedDisabledRef.value||l.disabled?!0:f}),a=M(!1);V(ue,{paddingLeftRef:o.paddingLeft,mergedDisabledRef:u}),V(ve,null);function N(){const{onClick:f}=e;f&&f()}function _(){u.value||(c.value||r.toggleExpand(e.internalKey),N())}function m(f){a.value=f}return{menuProps:l,mergedTheme:h,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,iconMarginRight:o.iconMarginRight,dropdownPlacement:o.dropdownPlacement,dropdownShow:a,paddingLeft:o.paddingLeft,mergedDisabled:u,mergedValue:r.mergedValueRef,childActive:re(()=>r.activePathRef.value.includes(e.internalKey)),collapsed:y(()=>l.mode==="horizontal"?!1:c.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:y(()=>!u.value&&(l.mode==="horizontal"||c.value)),handlePopoverShowChange:m,handleClick:_}},render(){var e;const{mergedClsPrefix:o,menuProps:{renderIcon:r,renderLabel:i}}=this,l=()=>{const{isHorizontal:h,paddingLeft:u,collapsed:a,mergedDisabled:N,maxIconSize:_,activeIconSize:m,title:f,childActive:T,icon:P,handleClick:z,menuProps:{nodeProps:I},dropdownShow:A,iconMarginRight:q,tmNode:E,mergedClsPrefix:O}=this,R=I==null?void 0:I(E.rawNode);return v("div",Object.assign({},R,{class:[`${O}-menu-item`,R==null?void 0:R.class],role:"menuitem"}),v(Ne,{tmNode:E,paddingLeft:u,collapsed:a,disabled:N,iconMarginRight:q,maxIconSize:_,activeIconSize:m,title:f,extra:this.extra,showArrow:!h,childActive:T,clsPrefix:O,icon:P,hover:A,onClick:z}))},c=()=>v(Ee,null,{default:()=>{const{tmNodes:h,collapsed:u}=this;return u?null:v("div",{class:`${o}-submenu-children`,role:"menu"},h.map(a=>fe(a,this.menuProps)))}});return this.root?v(De,Object.assign({size:"large"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,trigger:"hover",disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:i}),{default:()=>v("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),this.isHorizontal?null:c())}):v("div",{class:`${o}-submenu`,role:"menuitem","aria-expanded":!this.collapsed},l(),c())}}),ke=Object.assign(Object.assign({},he),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),ho=H({name:"MenuOption",props:ke,setup(e){const o=me(e),{NSubmenu:r,NMenu:i}=o,{props:l,mergedClsPrefixRef:c,mergedCollapsedRef:h}=i,u=r?r.mergedDisabledRef:{value:!1},a=y(()=>u.value||e.disabled);function N(m){const{onClick:f}=e;f&&f(m)}function _(m){a.value||(i.doSelect(e.internalKey,e.tmNode.rawNode),N(m))}return{mergedClsPrefix:c,dropdownPlacement:o.dropdownPlacement,paddingLeft:o.paddingLeft,iconMarginRight:o.iconMarginRight,maxIconSize:o.maxIconSize,activeIconSize:o.activeIconSize,mergedTheme:i.mergedThemeRef,menuProps:l,dropdownEnabled:re(()=>e.root&&h.value&&l.mode!=="horizontal"&&!a.value),selected:re(()=>i.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:_}},render(){const{mergedClsPrefix:e,mergedTheme:o,tmNode:r,menuProps:{renderLabel:i,nodeProps:l}}=this,c=l==null?void 0:l(r.rawNode);return v("div",Object.assign({},c,{role:"menuitem",class:[`${e}-menu-item`,c==null?void 0:c.class]}),v(Ge,{theme:o.peers.Tooltip,themeOverrides:o.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>i?i(r.rawNode):U(this.title),trigger:()=>v(Ne,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),fo=H({name:"MenuDivider",setup(){const e=B(G),{mergedClsPrefixRef:o,isHorizontalRef:r}=e;return()=>r.value?null:v("div",{class:`${o.value}-menu-divider`})}}),go=ce(Te),po=ce(ke),bo=ce(Ae);function _e(e){return e.type==="divider"||e.type==="render"}function xo(e){return e.type==="divider"}function fe(e,o){const{rawNode:r}=e,{show:i}=r;if(i===!1)return null;if(_e(r))return xo(r)?v(fo,Object.assign({key:e.key},r.props)):null;const{labelField:l}=o,{key:c,level:h,isGroup:u}=e,a=Object.assign(Object.assign({},r),{title:r.title||r[l],extra:r.titleExtra||r.extra,key:c,internalKey:c,level:h,root:h===0,isGroup:u});return e.children?e.isGroup?v(vo,ee(a,go,{tmNode:e,tmNodes:e.children,key:c})):v(mo,ee(a,bo,{key:c,rawNodes:r[o.childrenField],tmNodes:e.children,tmNode:e})):v(ho,ee(a,po,{key:c,tmNode:e}))}const pe=[x("&::before","background-color: var(--n-item-color-hover);"),s("arrow",`
 color: var(--n-arrow-color-hover);
 `),s("icon",`
 color: var(--n-item-icon-color-hover);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[x("a",`
 color: var(--n-item-text-color-hover);
 `),s("extra",`
 color: var(--n-item-text-color-hover);
 `)])],be=[s("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),d("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[x("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),s("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],yo=x([d("menu",`
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
 `)]),Y("disabled",[Y("selected, child-active",[x("&:focus-within",be)]),w("selected",[K(null,[s("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),w("child-active",[K(null,[s("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[x("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),s("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),K("border-bottom: 2px solid var(--n-border-color-horizontal);",be)]),d("menu-item-content-header",[x("a","color: var(--n-item-text-color-horizontal);")])])]),w("collapsed",[d("menu-item-content",[w("selected",[x("&::before",`
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
 `)]),Y("disabled",[Y("selected, child-active",[x("&:focus-within",pe)]),w("selected",[K(null,[s("arrow","color: var(--n-arrow-color-active-hover);"),s("icon","color: var(--n-item-icon-color-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[x("a","color: var(--n-item-text-color-active-hover);"),s("extra","color: var(--n-item-text-color-active-hover);")])])]),w("child-active",[K(null,[s("arrow","color: var(--n-arrow-color-child-active-hover);"),s("icon","color: var(--n-item-icon-color-child-active-hover);"),d("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[x("a","color: var(--n-item-text-color-child-active-hover);"),s("extra","color: var(--n-item-text-color-child-active-hover);")])])]),w("selected",[K(null,[x("&::before","background-color: var(--n-item-color-active-hover);")])]),K(null,pe)]),s("icon",`
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
 `)]);function K(e,o){return[w("hover",e,o),x("&:hover",e,o)]}const Co=Object.assign(Object.assign({},F.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,defalut:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array,dropdownPlacement:{type:String,default:"bottom"}}),zo=H({name:"Menu",props:Co,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:r}=Q(e),i=F("Menu","-menu",yo,Be,e,o),l=B(Re,null),c=y(()=>{var p;const{collapsed:b}=e;if(b!==void 0)return b;if(l){const{collapseModeRef:t,collapsedRef:g}=l;if(t.value==="width")return(p=g.value)!==null&&p!==void 0?p:!1}return!1}),h=y(()=>{const{keyField:p,childrenField:b,disabledField:t}=e;return Ue(e.items||e.options,{getIgnored(g){return _e(g)},getChildren(g){return g[b]},getDisabled(g){return g[t]},getKey(g){var k;return(k=g[p])!==null&&k!==void 0?k:g.name}})}),u=y(()=>new Set(h.value.treeNodes.map(p=>p.key))),{watchProps:a}=e,N=M(null);a!=null&&a.includes("defaultValue")?ne(()=>{N.value=e.defaultValue}):N.value=e.defaultValue;const _=J(e,"value"),m=le(_,N),f=M([]),T=()=>{f.value=e.defaultExpandAll?h.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||h.value.getPath(m.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ne(T):T();const P=Ye(e,["expandedNames","expandedKeys"]),z=le(P,f),I=y(()=>h.value.treeNodes),A=y(()=>h.value.getPath(m.value).keyPath);V(G,{props:e,mergedCollapsedRef:c,mergedThemeRef:i,mergedValueRef:m,mergedExpandedKeysRef:z,activePathRef:A,mergedClsPrefixRef:o,isHorizontalRef:y(()=>e.mode==="horizontal"),invertedRef:J(e,"inverted"),doSelect:q,toggleExpand:O});function q(p,b){const{"onUpdate:value":t,onUpdateValue:g,onSelect:k}=e;g&&$(g,p,b),t&&$(t,p,b),k&&$(k,p,b),N.value=p}function E(p){const{"onUpdate:expandedKeys":b,onUpdateExpandedKeys:t,onExpandedNamesChange:g,onOpenNamesChange:k}=e;b&&$(b,p),t&&$(t,p),g&&$(g,p),k&&$(k,p),f.value=p}function O(p){const b=Array.from(z.value),t=b.findIndex(g=>g===p);if(~t)b.splice(t,1);else{if(e.accordion&&u.value.has(p)){const g=b.findIndex(k=>u.value.has(k));g>-1&&b.splice(g,1)}b.push(p)}E(b)}const R=p=>{const b=h.value.getPath(p??m.value,{includeSelf:!1}).keyPath;if(!b.length)return;const t=Array.from(z.value),g=new Set([...t,...b]);e.accordion&&u.value.forEach(k=>{g.has(k)&&!b.includes(k)&&g.delete(k)}),E(Array.from(g))},C=y(()=>{const{inverted:p}=e,{common:{cubicBezierEaseInOut:b},self:t}=i.value,{borderRadius:g,borderColorHorizontal:k,fontSize:He,itemHeight:Oe,dividerColor:$e}=t,n={"--n-divider-color":$e,"--n-bezier":b,"--n-font-size":He,"--n-border-color-horizontal":k,"--n-border-radius":g,"--n-item-height":Oe};return p?(n["--n-group-text-color"]=t.groupTextColorInverted,n["--n-color"]=t.colorInverted,n["--n-item-text-color"]=t.itemTextColorInverted,n["--n-item-text-color-hover"]=t.itemTextColorHoverInverted,n["--n-item-text-color-active"]=t.itemTextColorActiveInverted,n["--n-item-text-color-child-active"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveInverted,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHoverInverted,n["--n-item-icon-color"]=t.itemIconColorInverted,n["--n-item-icon-color-hover"]=t.itemIconColorHoverInverted,n["--n-item-icon-color-active"]=t.itemIconColorActiveInverted,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHoverInverted,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActiveInverted,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHoverInverted,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsedInverted,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontalInverted,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontalInverted,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontalInverted,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontalInverted,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontalInverted,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontalInverted,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontalInverted,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontalInverted,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontalInverted,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontalInverted,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontalInverted,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontalInverted,n["--n-arrow-color"]=t.arrowColorInverted,n["--n-arrow-color-hover"]=t.arrowColorHoverInverted,n["--n-arrow-color-active"]=t.arrowColorActiveInverted,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHoverInverted,n["--n-arrow-color-child-active"]=t.arrowColorChildActiveInverted,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHoverInverted,n["--n-item-color-hover"]=t.itemColorHoverInverted,n["--n-item-color-active"]=t.itemColorActiveInverted,n["--n-item-color-active-hover"]=t.itemColorActiveHoverInverted,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsedInverted):(n["--n-group-text-color"]=t.groupTextColor,n["--n-color"]=t.color,n["--n-item-text-color"]=t.itemTextColor,n["--n-item-text-color-hover"]=t.itemTextColorHover,n["--n-item-text-color-active"]=t.itemTextColorActive,n["--n-item-text-color-child-active"]=t.itemTextColorChildActive,n["--n-item-text-color-child-active-hover"]=t.itemTextColorChildActiveHover,n["--n-item-text-color-active-hover"]=t.itemTextColorActiveHover,n["--n-item-icon-color"]=t.itemIconColor,n["--n-item-icon-color-hover"]=t.itemIconColorHover,n["--n-item-icon-color-active"]=t.itemIconColorActive,n["--n-item-icon-color-active-hover"]=t.itemIconColorActiveHover,n["--n-item-icon-color-child-active"]=t.itemIconColorChildActive,n["--n-item-icon-color-child-active-hover"]=t.itemIconColorChildActiveHover,n["--n-item-icon-color-collapsed"]=t.itemIconColorCollapsed,n["--n-item-text-color-horizontal"]=t.itemTextColorHorizontal,n["--n-item-text-color-hover-horizontal"]=t.itemTextColorHoverHorizontal,n["--n-item-text-color-active-horizontal"]=t.itemTextColorActiveHorizontal,n["--n-item-text-color-child-active-horizontal"]=t.itemTextColorChildActiveHorizontal,n["--n-item-text-color-child-active-hover-horizontal"]=t.itemTextColorChildActiveHoverHorizontal,n["--n-item-text-color-active-hover-horizontal"]=t.itemTextColorActiveHoverHorizontal,n["--n-item-icon-color-horizontal"]=t.itemIconColorHorizontal,n["--n-item-icon-color-hover-horizontal"]=t.itemIconColorHoverHorizontal,n["--n-item-icon-color-active-horizontal"]=t.itemIconColorActiveHorizontal,n["--n-item-icon-color-active-hover-horizontal"]=t.itemIconColorActiveHoverHorizontal,n["--n-item-icon-color-child-active-horizontal"]=t.itemIconColorChildActiveHorizontal,n["--n-item-icon-color-child-active-hover-horizontal"]=t.itemIconColorChildActiveHoverHorizontal,n["--n-arrow-color"]=t.arrowColor,n["--n-arrow-color-hover"]=t.arrowColorHover,n["--n-arrow-color-active"]=t.arrowColorActive,n["--n-arrow-color-active-hover"]=t.arrowColorActiveHover,n["--n-arrow-color-child-active"]=t.arrowColorChildActive,n["--n-arrow-color-child-active-hover"]=t.arrowColorChildActiveHover,n["--n-item-color-hover"]=t.itemColorHover,n["--n-item-color-active"]=t.itemColorActive,n["--n-item-color-active-hover"]=t.itemColorActiveHover,n["--n-item-color-active-collapsed"]=t.itemColorActiveCollapsed),n}),S=r?Z("menu",y(()=>e.inverted?"a":"b"),C,e):void 0;return{mergedClsPrefix:o,controlledExpandedKeys:P,uncontrolledExpanededKeys:f,mergedExpandedKeys:z,uncontrolledValue:N,mergedValue:m,activePath:A,tmNodes:I,mergedTheme:i,mergedCollapsed:c,cssVars:r?void 0:C,themeClass:S==null?void 0:S.themeClass,onRender:S==null?void 0:S.onRender,showOption:R}},render(){const{mergedClsPrefix:e,mode:o,themeClass:r,onRender:i}=this;return i==null||i(),v("div",{role:o==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${o}`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},this.tmNodes.map(l=>fe(l,this.$props)))}}),wo=H({__name:"SideMenu",props:{collapsed:{type:Boolean},layout:null,getMenuOptions:null},setup(e){const o=e,r=ze(),{t:i,te:l}=Fe(),c=je(),h=M(),u=M();we(()=>{h.value="",u.value=o.getMenuOptions()}),ne(()=>{var m;c.name!==h.value&&(h.value=((m=c.name)==null?void 0:m.toString())??"")}),Se(()=>r.language,(m,f)=>{m!==f&&(u.value=u.value)});const a=m=>{h.value=m},N=m=>{var f=`layouts.${o.layout}.${m.key}`,T=`layouts.${o.layout}.${m.label}`;if(!m.link)return m.label?m.label:i(f);if(!l(f))return ge(m.link,typeof m.label=="string"&&l(T)?i(T):m.label??m.key)();var P=i(f);return"link"in m?ge(m.link,P)():P},_=m=>"iconType"in m?We(m.iconType)():null;return(m,f)=>(ie(),Ie(L(zo),{value:h.value,options:u.value,collapsed:e.collapsed,"collapsed-width":0,accordion:"","onUpdate:value":f[0]||(f[0]=T=>a(T)),"render-icon":_,"render-label":N},null,8,["value","options","collapsed"]))}});const So=Xe(wo,[["__scopeId","data-v-9a6b52b3"]]),Io={style:{"max-width":"100%"},height:"64px",viewBox:"0 0 500 64"},Ro=se("circle",{id:"iconWrap",cx:"30",cy:"30",r:"15",style:{stroke:"var(--n-text-color)","stroke-width":"3px",fill:"transparent"}},null,-1),Po=se("text",{id:"iconText",x:"20",y:"36",style:{"font-size":"20px",fill:"rgb(36, 204, 255)","user-select":"none",cursor:"pointer"},onclick:"window.location.href='/'"}," 樂 ",-1),To=se("text",{x:"55",y:"40",style:{"font-size":"25px",fill:"var(--n-text-color)","user-select":"none",cursor:"pointer"},onclick:"window.location.href='/'"}," 日丂丅冂从冂廾丂丂三 ",-1),No=[Ro,Po,To],Uo=H({__name:"jokes",setup(e){const o=ze();let r=M();const i=()=>o.sidebar=!r.value;return we(()=>r.value=o.sidebar),Se(()=>o.sidebar,l=>r.value=l),(l,c)=>(ie(),Ie(L(te),{style:{height:"100%"}},{default:D(()=>[j(L(io),{style:{height:"64px"},bordered:""},{default:D(()=>[j(L(Je),null,{default:D(()=>[(ie(),Ke("svg",Io,No))]),_:1})]),_:1}),j(L(te),{position:"absolute",style:{top:"64px"},"has-sider":""},{default:D(()=>[j(L(uo),{"native-scrollbar":!1,bordered:"","show-trigger":"bar","collapse-mode":"width","collapsed-width":0,"show-collapsed-content":!1,collapsed:r.value,width:240,onCollapse:i,onExpand:i},{default:D(()=>[j(So,{layout:"JokesLayout",collapsed:r.value,"get-menu-options":()=>L(qe)("jokes")??[]},null,8,["collapsed","get-menu-options"])]),_:1},8,["collapsed"]),j(L(te),{"content-style":"padding: 24px;","native-scrollbar":!1},{default:D(()=>[j(Ve)]),_:1})]),_:1})]),_:1}))}});export{Uo as default};
