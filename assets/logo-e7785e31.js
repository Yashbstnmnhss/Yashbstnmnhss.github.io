import{g as K,p as f,af as te,ah as $,k as S,ac as Z,al as V,S as Fe,a1 as Ke,r as F,am as ae,an as Le,ao as re,ap as ue,c as I,a as x,b as A,d as g,a7 as W,aq as Be,u as je,h as Ie,B as ce,t as xe,s as B,m as $e,ar as Ue,as as Ve,at as De,aj as Ge,au as qe,av as We,J as Je,w as Ze,F as Qe,L as Xe,P as Ye,W as k,aw as ve,ax as eo,ay as oo}from"./index-02b03318.js";import{r as be,a as to,I as ro}from"./render-b454fb41.js";import{N as no,V as io,c as ne}from"./Dropdown-8448e3d2.js";import{N as lo}from"./Tooltip-15708770.js";import{u as Ce}from"./use-merged-state-34cdad4e.js";import{u as ao}from"./use-compitable-40d881de.js";import{_ as co}from"./_plugin-vue_export-helper-c27b6911.js";const so=K({name:"ChevronDownFilled",render(){return f("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},f("path",{d:"M3.20041 5.73966C3.48226 5.43613 3.95681 5.41856 4.26034 5.70041L8 9.22652L11.7397 5.70041C12.0432 5.41856 12.5177 5.43613 12.7996 5.73966C13.0815 6.0432 13.0639 6.51775 12.7603 6.7996L8.51034 10.7996C8.22258 11.0668 7.77743 11.0668 7.48967 10.7996L3.23966 6.7996C2.93613 6.51775 2.91856 6.0432 3.20041 5.73966Z",fill:"currentColor"}))}}),uo=te("n-layout-sider"),To={type:String,default:"static"},Q=te("n-menu"),me=te("n-submenu"),he=te("n-menu-item-group"),ee=8;function pe(e){const n=$(Q),{props:r,mergedCollapsedRef:d}=n,l=$(me,null),i=$(he,null),s=S(()=>r.mode==="horizontal"),h=S(()=>s.value?r.dropdownPlacement:"tmNodes"in e?"right-start":"right"),a=S(()=>{var v;return Math.max((v=r.collapsedIconSize)!==null&&v!==void 0?v:r.iconSize,r.iconSize)}),N=S(()=>{var v;return!s.value&&e.root&&d.value&&(v=r.collapsedIconSize)!==null&&v!==void 0?v:r.iconSize}),u=S(()=>{if(s.value)return;const{collapsedWidth:v,indent:y,rootIndent:z}=r,{root:b,isGroup:w}=e,P=z===void 0?y:z;return b?d.value?v/2-a.value/2:P:i&&typeof i.paddingLeftRef.value=="number"?y/2+i.paddingLeftRef.value:l&&typeof l.paddingLeftRef.value=="number"?(w?y/2:y)+l.paddingLeftRef.value:0}),C=S(()=>{const{collapsedWidth:v,indent:y,rootIndent:z}=r,{value:b}=a,{root:w}=e;return s.value||!w||!d.value?ee:(z===void 0?y:z)+b+ee-(v+b)/2});return{dropdownPlacement:h,activeIconSize:N,maxIconSize:a,paddingLeft:u,iconMarginRight:C,NMenu:n,NSubmenu:l}}const fe={internalKey:{type:[String,Number],required:!0},root:Boolean,isGroup:Boolean,level:{type:Number,required:!0},title:[String,Function],extra:[String,Function]},we=Object.assign(Object.assign({},fe),{tmNode:{type:Object,required:!0},tmNodes:{type:Array,required:!0}}),vo=K({name:"MenuOptionGroup",props:we,setup(e){Z(me,null);const n=pe(e);Z(he,{paddingLeftRef:n.paddingLeft});const{mergedClsPrefixRef:r,props:d}=$(Q);return function(){const{value:l}=r,i=n.paddingLeft.value,{nodeProps:s}=d,h=s==null?void 0:s(e.tmNode.rawNode);return f("div",{class:`${l}-menu-item-group`,role:"group"},f("div",Object.assign({},h,{class:[`${l}-menu-item-group-title`,h==null?void 0:h.class],style:[(h==null?void 0:h.style)||"",i!==void 0?`padding-left: ${i}px;`:""]}),V(e.title),e.extra?f(Fe,null," ",V(e.extra)):null),f("div",null,e.tmNodes.map(a=>ge(a,d))))}}}),Re=K({name:"MenuOptionContent",props:{collapsed:Boolean,disabled:Boolean,title:[String,Function],icon:Function,extra:[String,Function],showArrow:Boolean,childActive:Boolean,hover:Boolean,paddingLeft:Number,selected:Boolean,maxIconSize:{type:Number,required:!0},activeIconSize:{type:Number,required:!0},iconMarginRight:{type:Number,required:!0},clsPrefix:{type:String,required:!0},onClick:Function,tmNode:{type:Object,required:!0},isEllipsisPlaceholder:Boolean},setup(e){const{props:n}=$(Q);return{menuProps:n,style:S(()=>{const{paddingLeft:r}=e;return{paddingLeft:r&&`${r}px`}}),iconStyle:S(()=>{const{maxIconSize:r,activeIconSize:d,iconMarginRight:l}=e;return{width:`${r}px`,height:`${r}px`,fontSize:`${d}px`,marginRight:`${l}px`}})}},render(){const{clsPrefix:e,tmNode:n,menuProps:{renderIcon:r,renderLabel:d,renderExtra:l,expandIcon:i}}=this,s=r?r(n.rawNode):V(this.icon);return f("div",{onClick:h=>{var a;(a=this.onClick)===null||a===void 0||a.call(this,h)},role:"none",class:[`${e}-menu-item-content`,{[`${e}-menu-item-content--selected`]:this.selected,[`${e}-menu-item-content--collapsed`]:this.collapsed,[`${e}-menu-item-content--child-active`]:this.childActive,[`${e}-menu-item-content--disabled`]:this.disabled,[`${e}-menu-item-content--hover`]:this.hover}],style:this.style},s&&f("div",{class:`${e}-menu-item-content__icon`,style:this.iconStyle,role:"none"},[s]),f("div",{class:`${e}-menu-item-content-header`,role:"none"},this.isEllipsisPlaceholder?this.title:d?d(n.rawNode):V(this.title),this.extra||l?f("span",{class:`${e}-menu-item-content-header__extra`}," ",l?l(n.rawNode):V(this.extra)):null),this.showArrow?f(Ke,{ariaHidden:!0,class:`${e}-menu-item-content__arrow`,clsPrefix:e},{default:()=>i?i(n.rawNode):f(so,null)}):null)}}),Se=Object.assign(Object.assign({},fe),{rawNodes:{type:Array,default:()=>[]},tmNodes:{type:Array,default:()=>[]},tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function,domId:String,virtualChildActive:{type:Boolean,default:void 0},isEllipsisPlaceholder:Boolean}),de=K({name:"Submenu",props:Se,setup(e){const n=pe(e),{NMenu:r,NSubmenu:d}=n,{props:l,mergedCollapsedRef:i,mergedThemeRef:s}=r,h=S(()=>{const{disabled:v}=e;return d!=null&&d.mergedDisabledRef.value||l.disabled?!0:v}),a=F(!1);Z(me,{paddingLeftRef:n.paddingLeft,mergedDisabledRef:h}),Z(he,null);function N(){const{onClick:v}=e;v&&v()}function u(){h.value||(i.value||r.toggleExpand(e.internalKey),N())}function C(v){a.value=v}return{menuProps:l,mergedTheme:s,doSelect:r.doSelect,inverted:r.invertedRef,isHorizontal:r.isHorizontalRef,mergedClsPrefix:r.mergedClsPrefixRef,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,iconMarginRight:n.iconMarginRight,dropdownPlacement:n.dropdownPlacement,dropdownShow:a,paddingLeft:n.paddingLeft,mergedDisabled:h,mergedValue:r.mergedValueRef,childActive:ae(()=>{var v;return(v=e.virtualChildActive)!==null&&v!==void 0?v:r.activePathRef.value.includes(e.internalKey)}),collapsed:S(()=>l.mode==="horizontal"?!1:i.value?!0:!r.mergedExpandedKeysRef.value.includes(e.internalKey)),dropdownEnabled:S(()=>!h.value&&(l.mode==="horizontal"||i.value)),handlePopoverShowChange:C,handleClick:u}},render(){var e;const{mergedClsPrefix:n,menuProps:{renderIcon:r,renderLabel:d}}=this,l=()=>{const{isHorizontal:s,paddingLeft:h,collapsed:a,mergedDisabled:N,maxIconSize:u,activeIconSize:C,title:v,childActive:y,icon:z,handleClick:b,menuProps:{nodeProps:w},dropdownShow:P,iconMarginRight:M,tmNode:T,mergedClsPrefix:E,isEllipsisPlaceholder:O,extra:U}=this,H=w==null?void 0:w(T.rawNode);return f("div",Object.assign({},H,{class:[`${E}-menu-item`,H==null?void 0:H.class],role:"menuitem"}),f(Re,{tmNode:T,paddingLeft:h,collapsed:a,disabled:N,iconMarginRight:M,maxIconSize:u,activeIconSize:C,title:v,extra:U,showArrow:!s,childActive:y,clsPrefix:E,icon:z,hover:P,onClick:b,isEllipsisPlaceholder:O}))},i=()=>f(Le,null,{default:()=>{const{tmNodes:s,collapsed:h}=this;return h?null:f("div",{class:`${n}-submenu-children`,role:"menu"},s.map(a=>ge(a,this.menuProps)))}});return this.root?f(no,Object.assign({size:"large",trigger:"hover"},(e=this.menuProps)===null||e===void 0?void 0:e.dropdownProps,{themeOverrides:this.mergedTheme.peerOverrides.Dropdown,theme:this.mergedTheme.peers.Dropdown,builtinThemeOverrides:{fontSizeLarge:"14px",optionIconSizeLarge:"18px"},value:this.mergedValue,disabled:!this.dropdownEnabled,placement:this.dropdownPlacement,keyField:this.menuProps.keyField,labelField:this.menuProps.labelField,childrenField:this.menuProps.childrenField,onUpdateShow:this.handlePopoverShowChange,options:this.rawNodes,onSelect:this.doSelect,inverted:this.inverted,renderIcon:r,renderLabel:d}),{default:()=>f("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},l(),this.isHorizontal?null:i())}):f("div",{class:`${n}-submenu`,role:"menuitem","aria-expanded":!this.collapsed,id:this.domId},l(),i())}}),Pe=Object.assign(Object.assign({},fe),{tmNode:{type:Object,required:!0},disabled:Boolean,icon:Function,onClick:Function}),mo=K({name:"MenuOption",props:Pe,setup(e){const n=pe(e),{NSubmenu:r,NMenu:d}=n,{props:l,mergedClsPrefixRef:i,mergedCollapsedRef:s}=d,h=r?r.mergedDisabledRef:{value:!1},a=S(()=>h.value||e.disabled);function N(C){const{onClick:v}=e;v&&v(C)}function u(C){a.value||(d.doSelect(e.internalKey,e.tmNode.rawNode),N(C))}return{mergedClsPrefix:i,dropdownPlacement:n.dropdownPlacement,paddingLeft:n.paddingLeft,iconMarginRight:n.iconMarginRight,maxIconSize:n.maxIconSize,activeIconSize:n.activeIconSize,mergedTheme:d.mergedThemeRef,menuProps:l,dropdownEnabled:ae(()=>e.root&&s.value&&l.mode!=="horizontal"&&!a.value),selected:ae(()=>d.mergedValueRef.value===e.internalKey),mergedDisabled:a,handleClick:u}},render(){const{mergedClsPrefix:e,mergedTheme:n,tmNode:r,menuProps:{renderLabel:d,nodeProps:l}}=this,i=l==null?void 0:l(r.rawNode);return f("div",Object.assign({},i,{role:"menuitem",class:[`${e}-menu-item`,i==null?void 0:i.class]}),f(lo,{theme:n.peers.Tooltip,themeOverrides:n.peerOverrides.Tooltip,trigger:"hover",placement:this.dropdownPlacement,disabled:!this.dropdownEnabled||this.title===void 0,internalExtraClass:["menu-tooltip"]},{default:()=>d?d(r.rawNode):V(this.title),trigger:()=>f(Re,{tmNode:r,clsPrefix:e,paddingLeft:this.paddingLeft,iconMarginRight:this.iconMarginRight,maxIconSize:this.maxIconSize,activeIconSize:this.activeIconSize,selected:this.selected,title:this.title,extra:this.extra,disabled:this.mergedDisabled,icon:this.icon,onClick:this.handleClick})}))}}),ho=K({name:"MenuDivider",setup(){const e=$(Q),{mergedClsPrefixRef:n,isHorizontalRef:r}=e;return()=>r.value?null:f("div",{class:`${n.value}-menu-divider`})}}),po=ue(we),fo=ue(Pe),go=ue(Se);function se(e){return e.type==="divider"||e.type==="render"}function xo(e){return e.type==="divider"}function ge(e,n){const{rawNode:r}=e,{show:d}=r;if(d===!1)return null;if(se(r))return xo(r)?f(ho,Object.assign({key:e.key},r.props)):null;const{labelField:l}=n,{key:i,level:s,isGroup:h}=e,a=Object.assign(Object.assign({},r),{title:r.title||r[l],extra:r.titleExtra||r.extra,key:i,internalKey:i,level:s,root:s===0,isGroup:h});return e.children?e.isGroup?f(vo,re(a,po,{tmNode:e,tmNodes:e.children,key:i})):f(de,re(a,go,{key:i,rawNodes:r[n.childrenField],tmNodes:e.children,tmNode:e})):f(mo,re(a,fo,{key:i,tmNode:e}))}const ye=[I("&::before","background-color: var(--n-item-color-hover);"),g("arrow",`
 color: var(--n-arrow-color-hover);
 `),g("icon",`
 color: var(--n-item-icon-color-hover);
 `),x("menu-item-content-header",`
 color: var(--n-item-text-color-hover);
 `,[I("a",`
 color: var(--n-item-text-color-hover);
 `),g("extra",`
 color: var(--n-item-text-color-hover);
 `)])],ze=[g("icon",`
 color: var(--n-item-icon-color-hover-horizontal);
 `),x("menu-item-content-header",`
 color: var(--n-item-text-color-hover-horizontal);
 `,[I("a",`
 color: var(--n-item-text-color-hover-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-hover-horizontal);
 `)])],bo=I([x("menu",`
 background-color: var(--n-color);
 color: var(--n-item-text-color);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 box-sizing: border-box;
 font-size: var(--n-font-size);
 padding-bottom: 6px;
 `,[A("horizontal",`
 max-width: 100%;
 width: 100%;
 display: flex;
 overflow: hidden;
 padding-bottom: 0;
 `,[x("submenu","margin: 0;"),x("menu-item","margin: 0;"),x("menu-item-content",`
 padding: 0 20px;
 border-bottom: 2px solid #0000;
 `,[I("&::before","display: none;"),A("selected","border-bottom: 2px solid var(--n-border-color-horizontal)")]),x("menu-item-content",[A("selected",[g("icon","color: var(--n-item-icon-color-active-horizontal);"),x("menu-item-content-header",`
 color: var(--n-item-text-color-active-horizontal);
 `,[I("a","color: var(--n-item-text-color-active-horizontal);"),g("extra","color: var(--n-item-text-color-active-horizontal);")])]),A("child-active",`
 border-bottom: 2px solid var(--n-border-color-horizontal);
 `,[x("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-horizontal);
 `,[I("a",`
 color: var(--n-item-text-color-child-active-horizontal);
 `),g("extra",`
 color: var(--n-item-text-color-child-active-horizontal);
 `)]),g("icon",`
 color: var(--n-item-icon-color-child-active-horizontal);
 `)]),W("disabled",[W("selected, child-active",[I("&:focus-within",ze)]),A("selected",[j(null,[g("icon","color: var(--n-item-icon-color-active-hover-horizontal);"),x("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover-horizontal);
 `,[I("a","color: var(--n-item-text-color-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-active-hover-horizontal);")])])]),A("child-active",[j(null,[g("icon","color: var(--n-item-icon-color-child-active-hover-horizontal);"),x("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover-horizontal);
 `,[I("a","color: var(--n-item-text-color-child-active-hover-horizontal);"),g("extra","color: var(--n-item-text-color-child-active-hover-horizontal);")])])]),j("border-bottom: 2px solid var(--n-border-color-horizontal);",ze)]),x("menu-item-content-header",[I("a","color: var(--n-item-text-color-horizontal);")])])]),W("responsive",[x("menu-item-content-header",`
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),A("collapsed",[x("menu-item-content",[A("selected",[I("&::before",`
 background-color: var(--n-item-color-active-collapsed) !important;
 `)]),x("menu-item-content-header","opacity: 0;"),g("arrow","opacity: 0;"),g("icon","color: var(--n-item-icon-color-collapsed);")])]),x("menu-item",`
 height: var(--n-item-height);
 margin-top: 6px;
 position: relative;
 `),x("menu-item-content",`
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
 `),A("disabled",`
 opacity: .45;
 cursor: not-allowed;
 `),A("collapsed",[g("arrow","transform: rotate(0);")]),A("selected",[I("&::before","background-color: var(--n-item-color-active);"),g("arrow","color: var(--n-arrow-color-active);"),g("icon","color: var(--n-item-icon-color-active);"),x("menu-item-content-header",`
 color: var(--n-item-text-color-active);
 `,[I("a","color: var(--n-item-text-color-active);"),g("extra","color: var(--n-item-text-color-active);")])]),A("child-active",[x("menu-item-content-header",`
 color: var(--n-item-text-color-child-active);
 `,[I("a",`
 color: var(--n-item-text-color-child-active);
 `),g("extra",`
 color: var(--n-item-text-color-child-active);
 `)]),g("arrow",`
 color: var(--n-arrow-color-child-active);
 `),g("icon",`
 color: var(--n-item-icon-color-child-active);
 `)]),W("disabled",[W("selected, child-active",[I("&:focus-within",ye)]),A("selected",[j(null,[g("arrow","color: var(--n-arrow-color-active-hover);"),g("icon","color: var(--n-item-icon-color-active-hover);"),x("menu-item-content-header",`
 color: var(--n-item-text-color-active-hover);
 `,[I("a","color: var(--n-item-text-color-active-hover);"),g("extra","color: var(--n-item-text-color-active-hover);")])])]),A("child-active",[j(null,[g("arrow","color: var(--n-arrow-color-child-active-hover);"),g("icon","color: var(--n-item-icon-color-child-active-hover);"),x("menu-item-content-header",`
 color: var(--n-item-text-color-child-active-hover);
 `,[I("a","color: var(--n-item-text-color-child-active-hover);"),g("extra","color: var(--n-item-text-color-child-active-hover);")])])]),A("selected",[j(null,[I("&::before","background-color: var(--n-item-color-active-hover);")])]),j(null,ye)]),g("icon",`
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
 `),g("arrow",`
 grid-area: arrow;
 font-size: 16px;
 color: var(--n-arrow-color);
 transform: rotate(180deg);
 opacity: 1;
 transition:
 color .3s var(--n-bezier),
 transform 0.2s var(--n-bezier),
 opacity 0.2s var(--n-bezier);
 `),x("menu-item-content-header",`
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
 `)]),g("extra",`
 font-size: .93em;
 color: var(--n-group-text-color);
 transition: color .3s var(--n-bezier);
 `)])]),x("submenu",`
 cursor: pointer;
 position: relative;
 margin-top: 6px;
 `,[x("menu-item-content",`
 height: var(--n-item-height);
 `),x("submenu-children",`
 overflow: hidden;
 padding: 0;
 `,[Be({duration:".2s"})])]),x("menu-item-group",[x("menu-item-group-title",`
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
 `)])]),x("menu-tooltip",[I("a",`
 color: inherit;
 text-decoration: none;
 `)]),x("menu-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 6px 18px;
 `)]);function j(e,n){return[A("hover",e,n),I("&:hover",e,n)]}const Co=Object.assign(Object.assign({},Ie.props),{options:{type:Array,default:()=>[]},collapsed:{type:Boolean,default:void 0},collapsedWidth:{type:Number,default:48},iconSize:{type:Number,default:20},collapsedIconSize:{type:Number,default:24},rootIndent:Number,indent:{type:Number,default:32},labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},disabledField:{type:String,default:"disabled"},defaultExpandAll:Boolean,defaultExpandedKeys:Array,expandedKeys:Array,value:[String,Number],defaultValue:{type:[String,Number],default:null},mode:{type:String,default:"vertical"},watchProps:{type:Array,default:void 0},disabled:Boolean,show:{type:Boolean,default:!0},inverted:Boolean,"onUpdate:expandedKeys":[Function,Array],onUpdateExpandedKeys:[Function,Array],onUpdateValue:[Function,Array],"onUpdate:value":[Function,Array],expandIcon:Function,renderIcon:Function,renderLabel:Function,renderExtra:Function,dropdownProps:Object,accordion:Boolean,nodeProps:Function,dropdownPlacement:{type:String,default:"bottom"},responsive:Boolean,items:Array,onOpenNamesChange:[Function,Array],onSelect:[Function,Array],onExpandedNamesChange:[Function,Array],expandedNames:Array,defaultExpandedNames:Array}),yo=K({name:"Menu",props:Co,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=je(e),d=Ie("Menu","-menu",bo,De,e,n),l=$(uo,null),i=S(()=>{var c;const{collapsed:p}=e;if(p!==void 0)return p;if(l){const{collapseModeRef:o,collapsedRef:m}=l;if(o.value==="width")return(c=m.value)!==null&&c!==void 0?c:!1}return!1}),s=S(()=>{const{keyField:c,childrenField:p,disabledField:o}=e;return ne(e.items||e.options,{getIgnored(m){return se(m)},getChildren(m){return m[p]},getDisabled(m){return m[o]},getKey(m){var R;return(R=m[c])!==null&&R!==void 0?R:m.name}})}),h=S(()=>new Set(s.value.treeNodes.map(c=>c.key))),{watchProps:a}=e,N=F(null);a!=null&&a.includes("defaultValue")?ce(()=>{N.value=e.defaultValue}):N.value=e.defaultValue;const u=xe(e,"value"),C=Ce(u,N),v=F([]),y=()=>{v.value=e.defaultExpandAll?s.value.getNonLeafKeys():e.defaultExpandedNames||e.defaultExpandedKeys||s.value.getPath(C.value,{includeSelf:!1}).keyPath};a!=null&&a.includes("defaultExpandedKeys")?ce(y):y();const z=ao(e,["expandedNames","expandedKeys"]),b=Ce(z,v),w=S(()=>s.value.treeNodes),P=S(()=>s.value.getPath(C.value).keyPath);Z(Q,{props:e,mergedCollapsedRef:i,mergedThemeRef:d,mergedValueRef:C,mergedExpandedKeysRef:b,activePathRef:P,mergedClsPrefixRef:n,isHorizontalRef:S(()=>e.mode==="horizontal"),invertedRef:xe(e,"inverted"),doSelect:M,toggleExpand:E});function M(c,p){const{"onUpdate:value":o,onUpdateValue:m,onSelect:R}=e;m&&B(m,c,p),o&&B(o,c,p),R&&B(R,c,p),N.value=c}function T(c){const{"onUpdate:expandedKeys":p,onUpdateExpandedKeys:o,onExpandedNamesChange:m,onOpenNamesChange:R}=e;p&&B(p,c),o&&B(o,c),m&&B(m,c),R&&B(R,c),v.value=c}function E(c){const p=Array.from(b.value),o=p.findIndex(m=>m===c);if(~o)p.splice(o,1);else{if(e.accordion&&h.value.has(c)){const m=p.findIndex(R=>h.value.has(R));m>-1&&p.splice(m,1)}p.push(c)}T(p)}const O=c=>{const p=s.value.getPath(c??C.value,{includeSelf:!1}).keyPath;if(!p.length)return;const o=Array.from(b.value),m=new Set([...o,...p]);e.accordion&&h.value.forEach(R=>{m.has(R)&&!p.includes(R)&&m.delete(R)}),T(Array.from(m))},U=S(()=>{const{inverted:c}=e,{common:{cubicBezierEaseInOut:p},self:o}=d.value,{borderRadius:m,borderColorHorizontal:R,fontSize:Te,itemHeight:Ee,dividerColor:Oe}=o,t={"--n-divider-color":Oe,"--n-bezier":p,"--n-font-size":Te,"--n-border-color-horizontal":R,"--n-border-radius":m,"--n-item-height":Ee};return c?(t["--n-group-text-color"]=o.groupTextColorInverted,t["--n-color"]=o.colorInverted,t["--n-item-text-color"]=o.itemTextColorInverted,t["--n-item-text-color-hover"]=o.itemTextColorHoverInverted,t["--n-item-text-color-active"]=o.itemTextColorActiveInverted,t["--n-item-text-color-child-active"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveInverted,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHoverInverted,t["--n-item-icon-color"]=o.itemIconColorInverted,t["--n-item-icon-color-hover"]=o.itemIconColorHoverInverted,t["--n-item-icon-color-active"]=o.itemIconColorActiveInverted,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHoverInverted,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActiveInverted,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHoverInverted,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsedInverted,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontalInverted,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontalInverted,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontalInverted,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontalInverted,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontalInverted,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontalInverted,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontalInverted,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontalInverted,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontalInverted,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontalInverted,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontalInverted,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontalInverted,t["--n-arrow-color"]=o.arrowColorInverted,t["--n-arrow-color-hover"]=o.arrowColorHoverInverted,t["--n-arrow-color-active"]=o.arrowColorActiveInverted,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHoverInverted,t["--n-arrow-color-child-active"]=o.arrowColorChildActiveInverted,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHoverInverted,t["--n-item-color-hover"]=o.itemColorHoverInverted,t["--n-item-color-active"]=o.itemColorActiveInverted,t["--n-item-color-active-hover"]=o.itemColorActiveHoverInverted,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsedInverted):(t["--n-group-text-color"]=o.groupTextColor,t["--n-color"]=o.color,t["--n-item-text-color"]=o.itemTextColor,t["--n-item-text-color-hover"]=o.itemTextColorHover,t["--n-item-text-color-active"]=o.itemTextColorActive,t["--n-item-text-color-child-active"]=o.itemTextColorChildActive,t["--n-item-text-color-child-active-hover"]=o.itemTextColorChildActiveHover,t["--n-item-text-color-active-hover"]=o.itemTextColorActiveHover,t["--n-item-icon-color"]=o.itemIconColor,t["--n-item-icon-color-hover"]=o.itemIconColorHover,t["--n-item-icon-color-active"]=o.itemIconColorActive,t["--n-item-icon-color-active-hover"]=o.itemIconColorActiveHover,t["--n-item-icon-color-child-active"]=o.itemIconColorChildActive,t["--n-item-icon-color-child-active-hover"]=o.itemIconColorChildActiveHover,t["--n-item-icon-color-collapsed"]=o.itemIconColorCollapsed,t["--n-item-text-color-horizontal"]=o.itemTextColorHorizontal,t["--n-item-text-color-hover-horizontal"]=o.itemTextColorHoverHorizontal,t["--n-item-text-color-active-horizontal"]=o.itemTextColorActiveHorizontal,t["--n-item-text-color-child-active-horizontal"]=o.itemTextColorChildActiveHorizontal,t["--n-item-text-color-child-active-hover-horizontal"]=o.itemTextColorChildActiveHoverHorizontal,t["--n-item-text-color-active-hover-horizontal"]=o.itemTextColorActiveHoverHorizontal,t["--n-item-icon-color-horizontal"]=o.itemIconColorHorizontal,t["--n-item-icon-color-hover-horizontal"]=o.itemIconColorHoverHorizontal,t["--n-item-icon-color-active-horizontal"]=o.itemIconColorActiveHorizontal,t["--n-item-icon-color-active-hover-horizontal"]=o.itemIconColorActiveHoverHorizontal,t["--n-item-icon-color-child-active-horizontal"]=o.itemIconColorChildActiveHorizontal,t["--n-item-icon-color-child-active-hover-horizontal"]=o.itemIconColorChildActiveHoverHorizontal,t["--n-arrow-color"]=o.arrowColor,t["--n-arrow-color-hover"]=o.arrowColorHover,t["--n-arrow-color-active"]=o.arrowColorActive,t["--n-arrow-color-active-hover"]=o.arrowColorActiveHover,t["--n-arrow-color-child-active"]=o.arrowColorChildActive,t["--n-arrow-color-child-active-hover"]=o.arrowColorChildActiveHover,t["--n-item-color-hover"]=o.itemColorHover,t["--n-item-color-active"]=o.itemColorActive,t["--n-item-color-active-hover"]=o.itemColorActiveHover,t["--n-item-color-active-collapsed"]=o.itemColorActiveCollapsed),t}),H=r?$e("menu",S(()=>e.inverted?"a":"b"),U,e):void 0,D=Ue(),G=F(null),X=F(null);let L=!0;const q=()=>{var c;L?L=!1:(c=G.value)===null||c===void 0||c.sync({showAllItemsBeforeCalculate:!0})};function Y(){return document.getElementById(D)}const _=F(-1);function Ne(c){_.value=e.options.length-c}function Ae(c){c||(_.value=-1)}const He=S(()=>{const c=_.value;return{children:c===-1?[]:e.options.slice(c)}}),ke=S(()=>{const{childrenField:c,disabledField:p,keyField:o}=e;return ne([He.value],{getIgnored(m){return se(m)},getChildren(m){return m[c]},getDisabled(m){return m[p]},getKey(m){var R;return(R=m[o])!==null&&R!==void 0?R:m.name}})}),Me=S(()=>ne([{}]).treeNodes[0]);function _e(){var c;if(_.value===-1)return f(de,{root:!0,level:0,key:"__ellpisisGroupPlaceholder__",internalKey:"__ellpisisGroupPlaceholder__",title:"···",tmNode:Me.value,domId:D,isEllipsisPlaceholder:!0});const p=ke.value.treeNodes[0],o=P.value,m=!!(!((c=p.children)===null||c===void 0)&&c.some(R=>o.includes(R.key)));return f(de,{level:0,root:!0,key:"__ellpisisGroup__",internalKey:"__ellpisisGroup__",title:"···",virtualChildActive:m,tmNode:p,domId:D,rawNodes:p.rawNode.children||[],tmNodes:p.children||[],isEllipsisPlaceholder:!0})}return{mergedClsPrefix:n,controlledExpandedKeys:z,uncontrolledExpanededKeys:v,mergedExpandedKeys:b,uncontrolledValue:N,mergedValue:C,activePath:P,tmNodes:w,mergedTheme:d,mergedCollapsed:i,cssVars:r?void 0:U,themeClass:H==null?void 0:H.themeClass,overflowRef:G,counterRef:X,updateCounter:()=>{},onResize:q,onUpdateOverflow:Ae,onUpdateCount:Ne,renderCounter:_e,getCounter:Y,onRender:H==null?void 0:H.onRender,showOption:O,deriveResponsiveState:q}},render(){const{mergedClsPrefix:e,mode:n,themeClass:r,onRender:d}=this;d==null||d();const l=()=>this.tmNodes.map(a=>ge(a,this.$props)),s=n==="horizontal"&&this.responsive,h=()=>f("div",{role:n==="horizontal"?"menubar":"menu",class:[`${e}-menu`,r,`${e}-menu--${n}`,s&&`${e}-menu--responsive`,this.mergedCollapsed&&`${e}-menu--collapsed`],style:this.cssVars},s?f(io,{ref:"overflowRef",onUpdateOverflow:this.onUpdateOverflow,getCounter:this.getCounter,onUpdateCount:this.onUpdateCount,updateCounter:this.updateCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:l,counter:this.renderCounter}):l());return s?f(Ve,{onResize:this.onResize},{default:h}):h()}}),zo=K({__name:"SideMenu",props:{mode:{},collapsed:{type:Boolean},layout:{},indent:{},rootIndent:{},getMenuOptions:{type:Function}},setup(e){const n=e,r=Ge(),d=qe(),l=We(),i=F(),s=F();Je(()=>{i.value="",s.value=n.getMenuOptions()}),ce(()=>{var u;l.name!==i.value&&(i.value=((u=l.name)==null?void 0:u.toString())??"")}),Ze(()=>r.language,(u,C)=>{u!==C&&(s.value=s.value)});const h=u=>i.value=u,a=u=>{const C=b=>["menus",n.layout,b];let v=C(k.toString(u.key)),y=C(k.toString(u.label));if(!u.link)return u.label?u.label:d.get(v,u);if(!d.has(v))return be(u.link,typeof u.label=="string"&&d.has(y)?d.get(y,u):u.label??u.key)();let z=d.get(v,u);return"link"in u?be(u.link,z)():z},N=u=>"iconType"in u?to(u.iconType)():null;return(u,C)=>(Qe(),Xe(Ye(yo),{mode:u.mode,indent:u.indent,"root-indent":u.rootIndent,value:i.value,options:s.value,collapsed:u.collapsed,accordion:"",responsive:"","onUpdate:value":C[0]||(C[0]=v=>h(v)),"render-icon":N,"render-label":a},null,8,["mode","indent","root-indent","value","options","collapsed"]))}});const Eo=co(zo,[["__scopeId","data-v-c2fd9242"]]),ie={jokes:["header","default","expand","footer","props"],new:["default"]},oe={jokes:{header:!1,footer:!1,props:!1,default:{label:"口 日 厂 巨 匚 丁"},expand:{label:"巨 乂 尸 亼 冂 刀"}},new:{default:{label:"从 亼 工 冂"}}},J={},Io=e=>`group_${e}`,le="default";function Oo(e){if(e in J||(wo(ve.getRoutes().filter(({meta:{menu:n}})=>(n==null?void 0:n.for)===e)),e in J))return J[e];eo.error("[Route]","[Menu]","Unknown menu",{key:e})}function wo(e=ve.getRoutes()){const n=So(e);for(var r in n)J[r]=n[r]}function Ro({components:e,meta:{menu:n,enable:r}}){return!k.isUndefined(e)&&!k.isUndefined(n)&&r!==!1&&n.for}function So(e=ve.getRoutes()){const n=e.filter(Ro),r={};return k.toPairs(k.groupBy(n,({meta:{menu:l}})=>l.for)).forEach(l=>{var[i,s]=l;const h=k.fromPairs((i in ie&&ie[i].length>0?ie[i]:[le]).map(y=>[y,[]]));s=k.orderBy(s,({meta:{menu:y}})=>y.order??0);const a=[];for(var N=0;N<s.length;N++){let y=function(b){if(b){var w={for:i,...b},P=d(w,""),M=a.findIndex(([{key:T},E])=>T===P.key);M<0?a.push([P,w]):a[M][0]=k.defaults(a[M][0],P),b.parent&&y(b.parent)}};const z=s[N];var u=z.meta.menu,C=d(u,z.path),v=a.findIndex(([{key:b},w])=>b===C.key);if(v>=0){a[v]={...a[v],...C};continue}a.push([C,u]),y(u.parent)}k.toPairs(k.groupBy(a,([y,{group:z}])=>z??le)).forEach(y=>{var[z,b]=y;const w=[];for(var P=0;P<b.length;P++){var[M,T]=b[P];if(T.parent)(function(U,H){if(!H)return;var D=X(b.map(L=>L[0]),H.key),G=b[D];(G[0].children??(G[0].children=[])).push(U);function X(L,q){var Y=L.findIndex(({key:_})=>_===q);return Y>=0?Y:X(L.filter(({children:_})=>_&&_.length>0).flatMap(({children:_})=>_),q)}})(M,T.parent);else{var E=w.findIndex(({key:O})=>O===M.key);E<0?w.push(M):w[E]={...w[E],...M}}}h[z in h?z:le].push(...k.orderBy(w,({order:O})=>O??0))}),r[i]=oo(k.toPairs(h).map(y=>{var[z,b]=y,w=i in oe&&!k.isUndefined(oe[i])&&z in oe[i]?oe[i][z]:void 0;if(w===!1)return b;var P={type:"group",key:Io(z),children:b};return w&&(P=Object.assign(w,P)),P}),{type:"divider"}).flat()}),r;function d(l,i){return{key:l.key,label:l.label,iconType:l.icon?ro[l.icon]:void 0,link:i,order:l.order??0}}}const Fo=""+new URL("logo-d938aa57.svg",import.meta.url).href;export{Fo as L,Eo as S,Oo as g,uo as l,To as p};
