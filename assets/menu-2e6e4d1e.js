import{V as $e,c as je,d as Ae,r as ze,N as Fe,p as ge}from"./Tooltip-2abf0c46.js";import{r as H,J as ce,b$ as Be,c0 as Me,a5 as Q,a7 as Y,c1 as Ee,c2 as Le,o as He,d as G,h as u,_ as pe,y as U,b3 as xe,c as R,K as J,f as oe,T as Ue,m as ke,D as ne,ap as Ge,Z as qe,b2 as Ve,bC as We,b1 as Je,q as _,G as Xe,t as W,F as he,E as j,s as B,H as A,w as Ze,x as Se,a6 as ie,A as Qe,aa as Ye,c3 as eo,C as L,c4 as fe,c5 as Pe,c6 as de,c7 as be,c8 as oo,aG as me,c9 as no,ca as le,aJ as to}from"./index-0642acdb.js";import{N as ro}from"./Icon-a246dc1f.js";import{C as io}from"./ChevronRight-4c75ac9d.js";import{h as we,a as ao,b as so}from"./ChatboxEllipsesOutline-b641dceb.js";import{u as lo}from"./use-merged-state-1d0c7ec5.js";import{I as uo}from"./render-7bd25462.js";function co(e,o,i){if(!o)return e;const r=H(e.value);let t=null;return ce(e,n=>{t!==null&&window.clearTimeout(t),n===!0?i&&!i.value?r.value=!0:t=window.setTimeout(()=>{r.value=!0},o):r.value=!1}),r}function po(e={},o){const i=Be({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:t}=e,n=d=>{switch(d.key){case"Control":i.ctrl=!0;break;case"Meta":i.command=!0,i.win=!0;break;case"Shift":i.shift=!0;break;case"Tab":i.tab=!0;break}r!==void 0&&Object.keys(r).forEach(S=>{if(S!==d.key)return;const h=r[S];if(typeof h=="function")h(d);else{const{stop:P=!1,prevent:N=!1}=h;P&&d.stopPropagation(),N&&d.preventDefault(),h.handler(d)}})},c=d=>{switch(d.key){case"Control":i.ctrl=!1;break;case"Meta":i.command=!1,i.win=!1;break;case"Shift":i.shift=!1;break;case"Tab":i.tab=!1;break}t!==void 0&&Object.keys(t).forEach(S=>{if(S!==d.key)return;const h=t[S];if(typeof h=="function")h(d);else{const{stop:P=!1,prevent:N=!1}=h;P&&d.stopPropagation(),N&&d.preventDefault(),h.handler(d)}})},p=()=>{(o===void 0||o.value)&&(Q("keydown",document,n),Q("keyup",document,c)),o!==void 0&&ce(o,d=>{d?(Q("keydown",document,n),Q("keyup",document,c)):(Y("keydown",document,n),Y("keyup",document,c))})};return Ee()?(Le(p),He(()=>{(o===void 0||o.value)&&(Y("keydown",document,n),Y("keyup",document,c))})):p(),Me(i)}const Ne=G({name:"DropdownDivider",props:{clsPrefix:{type:String,required:!0}},render(){return u("div",{class:`${this.clsPrefix}-dropdown-divider`})}}),ve=pe("n-dropdown-menu"),te=pe("n-dropdown"),ye=pe("n-dropdown-option");function ue(e,o){return e.type==="submenu"||e.type===void 0&&e[o]!==void 0}function fo(e){return e.type==="group"}function Re(e){return e.type==="divider"}function vo(e){return e.type==="render"}const Ie=G({name:"DropdownOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:"right-start"},props:Object,scrollable:Boolean},setup(e){const o=U(te),{hoverKeyRef:i,keyboardKeyRef:r,lastToggledSubmenuKeyRef:t,pendingKeyPathRef:n,activeKeyPathRef:c,animatedRef:p,mergedShowRef:d,renderLabelRef:S,renderIconRef:h,labelFieldRef:P,childrenFieldRef:N,renderOptionRef:m,nodePropsRef:g,menuPropsRef:w}=o,v=U(ye,null),x=U(ve),I=U(xe),z=R(()=>e.tmNode.rawNode),O=R(()=>{const{value:l}=N;return ue(e.tmNode.rawNode,l)}),F=R(()=>{const{disabled:l}=e.tmNode;return l}),X=R(()=>{if(!O.value)return!1;const{key:l,disabled:k}=e.tmNode;if(k)return!1;const{value:$}=i,{value:M}=r,{value:re}=t,{value:E}=n;return $!==null?E.includes(l):M!==null?E.includes(l)&&E[E.length-1]!==l:re!==null?E.includes(l):!1}),q=R(()=>r.value===null&&!p.value),V=co(X,300,q),D=R(()=>!!(v!=null&&v.enteringSubmenuRef.value)),T=H(!1);J(ye,{enteringSubmenuRef:T});function K(){T.value=!0}function a(){T.value=!1}function b(){const{parentKey:l,tmNode:k}=e;k.disabled||d.value&&(t.value=l,r.value=null,i.value=k.key)}function s(){const{tmNode:l}=e;l.disabled||d.value&&i.value!==l.key&&b()}function f(l){if(e.tmNode.disabled||!d.value)return;const{relatedTarget:k}=l;k&&!we({target:k},"dropdownOption")&&!we({target:k},"scrollbarRail")&&(i.value=null)}function C(){const{value:l}=O,{tmNode:k}=e;d.value&&!l&&!k.disabled&&(o.doSelect(k.key,k.rawNode),o.doUpdateShow(!1))}return{labelField:P,renderLabel:S,renderIcon:h,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:w,popoverBody:I,animated:p,mergedShowSubmenu:R(()=>V.value&&!D.value),rawNode:z,hasSubmenu:O,pending:oe(()=>{const{value:l}=n,{key:k}=e.tmNode;return l.includes(k)}),childActive:oe(()=>{const{value:l}=c,{key:k}=e.tmNode,$=l.findIndex(M=>k===M);return $===-1?!1:$<l.length-1}),active:oe(()=>{const{value:l}=c,{key:k}=e.tmNode,$=l.findIndex(M=>k===M);return $===-1?!1:$===l.length-1}),mergedDisabled:F,renderOption:m,nodeProps:g,handleClick:C,handleMouseMove:s,handleMouseEnter:b,handleMouseLeave:f,handleSubmenuBeforeEnter:K,handleSubmenuAfterEnter:a}},render(){var e,o;const{animated:i,rawNode:r,mergedShowSubmenu:t,clsPrefix:n,siblingHasIcon:c,siblingHasSubmenu:p,renderLabel:d,renderIcon:S,renderOption:h,nodeProps:P,props:N,scrollable:m}=this;let g=null;if(t){const I=(e=this.menuProps)===null||e===void 0?void 0:e.call(this,r,r.children);g=u(Ke,Object.assign({},I,{clsPrefix:n,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}const w={class:[`${n}-dropdown-option-body`,this.pending&&`${n}-dropdown-option-body--pending`,this.active&&`${n}-dropdown-option-body--active`,this.childActive&&`${n}-dropdown-option-body--child-active`,this.mergedDisabled&&`${n}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},v=P==null?void 0:P(r),x=u("div",Object.assign({class:[`${n}-dropdown-option`,v==null?void 0:v.class],"data-dropdown-option":!0},v),u("div",ke(w,N),[u("div",{class:[`${n}-dropdown-option-body__prefix`,c&&`${n}-dropdown-option-body__prefix--show-icon`]},[S?S(r):ne(r.icon)]),u("div",{"data-dropdown-option":!0,class:`${n}-dropdown-option-body__label`},d?d(r):ne((o=r[this.labelField])!==null&&o!==void 0?o:r.title)),u("div",{"data-dropdown-option":!0,class:[`${n}-dropdown-option-body__suffix`,p&&`${n}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?u(ro,null,{default:()=>u(io,null)}):null)]),this.hasSubmenu?u($e,null,{default:()=>[u(je,null,{default:()=>u("div",{class:`${n}-dropdown-offset-container`},u(Ae,{show:this.mergedShowSubmenu,placement:this.placement,to:m&&this.popoverBody||void 0,teleportDisabled:!m},{default:()=>u("div",{class:`${n}-dropdown-menu-wrapper`},i?u(Ue,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:"fade-in-scale-up-transition",appear:!0},{default:()=>g}):g)}))})]}):null);return h?h({node:x,option:r}):x}}),ho=G({name:"DropdownGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{showIconRef:e,hasSubmenuRef:o}=U(ve),{renderLabelRef:i,labelFieldRef:r,nodePropsRef:t,renderOptionRef:n}=U(te);return{labelField:r,showIcon:e,hasSubmenu:o,renderLabel:i,nodeProps:t,renderOption:n}},render(){var e;const{clsPrefix:o,hasSubmenu:i,showIcon:r,nodeProps:t,renderLabel:n,renderOption:c}=this,{rawNode:p}=this.tmNode,d=u("div",Object.assign({class:`${o}-dropdown-option`},t==null?void 0:t(p)),u("div",{class:`${o}-dropdown-option-body ${o}-dropdown-option-body--group`},u("div",{"data-dropdown-option":!0,class:[`${o}-dropdown-option-body__prefix`,r&&`${o}-dropdown-option-body__prefix--show-icon`]},ne(p.icon)),u("div",{class:`${o}-dropdown-option-body__label`,"data-dropdown-option":!0},n?n(p):ne((e=p.title)!==null&&e!==void 0?e:p[this.labelField])),u("div",{class:[`${o}-dropdown-option-body__suffix`,i&&`${o}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return c?c({node:d,option:p}):d}}),bo=G({name:"NDropdownGroup",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){const{tmNode:e,parentKey:o,clsPrefix:i}=this,{children:r}=e;return u(qe,null,u(ho,{clsPrefix:i,tmNode:e,key:e.key}),r==null?void 0:r.map(t=>{const{rawNode:n}=t;return n.show===!1?null:Re(n)?u(Ne,{clsPrefix:i,key:t.key}):t.isGroup?(Ge("dropdown","`group` node is not allowed to be put in `group` node."),null):u(Ie,{clsPrefix:i,tmNode:t,parentKey:o,key:t.key})}))}}),mo=G({name:"DropdownRenderOption",props:{tmNode:{type:Object,required:!0}},render(){const{rawNode:{render:e,props:o}}=this.tmNode;return u("div",o,[e==null?void 0:e()])}}),Ke=G({name:"DropdownMenu",props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){const{renderIconRef:o,childrenFieldRef:i}=U(te);J(ve,{showIconRef:R(()=>{const t=o.value;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>t?t(d):d.icon);const{rawNode:p}=n;return t?t(p):p.icon})}),hasSubmenuRef:R(()=>{const{value:t}=i;return e.tmNodes.some(n=>{var c;if(n.isGroup)return(c=n.children)===null||c===void 0?void 0:c.some(({rawNode:d})=>ue(d,t));const{rawNode:p}=n;return ue(p,t)})})});const r=H(null);return J(Je,null),J(Ve,null),J(xe,r),{bodyRef:r}},render(){const{parentKey:e,clsPrefix:o,scrollable:i}=this,r=this.tmNodes.map(t=>{const{rawNode:n}=t;return n.show===!1?null:vo(n)?u(mo,{tmNode:t,key:t.key}):Re(n)?u(Ne,{clsPrefix:o,key:t.key}):fo(n)?u(bo,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key}):u(Ie,{clsPrefix:o,tmNode:t,parentKey:e,key:t.key,props:n.props,scrollable:i})});return u("div",{class:[`${o}-dropdown-menu`,i&&`${o}-dropdown-menu--scrollable`],ref:"bodyRef"},i?u(We,{contentClass:`${o}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?ze({clsPrefix:o,arrowStyle:this.arrowStyle}):null)}}),wo=_("dropdown-menu",`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[Xe(),_("dropdown-option",`
 position: relative;
 `,[W("a",`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[W("&::before",`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),_("dropdown-option-body",`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[W("&::before",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),he("disabled",[j("pending",`
 color: var(--n-option-text-color-hover);
 `,[B("prefix, suffix",`
 color: var(--n-option-text-color-hover);
 `),W("&::before","background-color: var(--n-option-color-hover);")]),j("active",`
 color: var(--n-option-text-color-active);
 `,[B("prefix, suffix",`
 color: var(--n-option-text-color-active);
 `),W("&::before","background-color: var(--n-option-color-active);")]),j("child-active",`
 color: var(--n-option-text-color-child-active);
 `,[B("prefix, suffix",`
 color: var(--n-option-text-color-child-active);
 `)])]),j("disabled",`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),j("group",`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[B("prefix",`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[j("show-icon",`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),B("prefix",`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[j("show-icon",`
 width: var(--n-option-icon-prefix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),B("label",`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),B("suffix",`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[j("has-submenu",`
 width: var(--n-option-icon-suffix-width);
 `),_("icon",`
 font-size: var(--n-option-icon-size);
 `)]),_("dropdown-menu","pointer-events: all;")]),_("dropdown-offset-container",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),_("dropdown-divider",`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),_("dropdown-menu-wrapper",`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),W(">",[_("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),he("scrollable",`
 padding: var(--n-padding);
 `),j("scrollable",[B("content",`
 padding: var(--n-padding);
 `)])]),yo={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:{type:String,default:"medium"},inverted:Boolean,placement:{type:String,default:"bottom"},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:"label"},keyField:{type:String,default:"key"},childrenField:{type:String,default:"children"},value:[String,Number]},go=Object.keys(ge),xo=Object.assign(Object.assign(Object.assign({},ge),yo),Se.props),To=G({name:"Dropdown",inheritAttrs:!1,props:xo,setup(e){const o=H(!1),i=lo(A(e,"show"),o),r=R(()=>{const{keyField:a,childrenField:b}=e;return ao(e.options,{getKey(s){return s[a]},getDisabled(s){return s.disabled===!0},getIgnored(s){return s.type==="divider"||s.type==="render"},getChildren(s){return s[b]}})}),t=R(()=>r.value.treeNodes),n=H(null),c=H(null),p=H(null),d=R(()=>{var a,b,s;return(s=(b=(a=n.value)!==null&&a!==void 0?a:c.value)!==null&&b!==void 0?b:p.value)!==null&&s!==void 0?s:null}),S=R(()=>r.value.getPath(d.value).keyPath),h=R(()=>r.value.getPath(e.value).keyPath),P=oe(()=>e.keyboard&&i.value);po({keydown:{ArrowUp:{prevent:!0,handler:F},ArrowRight:{prevent:!0,handler:O},ArrowDown:{prevent:!0,handler:X},ArrowLeft:{prevent:!0,handler:z},Enter:{prevent:!0,handler:q},Escape:I}},P);const{mergedClsPrefixRef:N,inlineThemeDisabled:m}=Ze(e),g=Se("Dropdown","-dropdown",wo,eo,e,N);J(te,{labelFieldRef:A(e,"labelField"),childrenFieldRef:A(e,"childrenField"),renderLabelRef:A(e,"renderLabel"),renderIconRef:A(e,"renderIcon"),hoverKeyRef:n,keyboardKeyRef:c,lastToggledSubmenuKeyRef:p,pendingKeyPathRef:S,activeKeyPathRef:h,animatedRef:A(e,"animated"),mergedShowRef:i,nodePropsRef:A(e,"nodeProps"),renderOptionRef:A(e,"renderOption"),menuPropsRef:A(e,"menuProps"),doSelect:w,doUpdateShow:v}),ce(i,a=>{!e.animated&&!a&&x()});function w(a,b){const{onSelect:s}=e;s&&ie(s,a,b)}function v(a){const{"onUpdate:show":b,onUpdateShow:s}=e;b&&ie(b,a),s&&ie(s,a),o.value=a}function x(){n.value=null,c.value=null,p.value=null}function I(){v(!1)}function z(){D("left")}function O(){D("right")}function F(){D("up")}function X(){D("down")}function q(){const a=V();a!=null&&a.isLeaf&&i.value&&(w(a.key,a.rawNode),v(!1))}function V(){var a;const{value:b}=r,{value:s}=d;return!b||s===null?null:(a=b.getNode(s))!==null&&a!==void 0?a:null}function D(a){const{value:b}=d,{value:{getFirstAvailableNode:s}}=r;let f=null;if(b===null){const C=s();C!==null&&(f=C.key)}else{const C=V();if(C){let l;switch(a){case"down":l=C.getNext();break;case"up":l=C.getPrev();break;case"right":l=C.getChild();break;case"left":l=C.getParent();break}l&&(f=l.key)}}f!==null&&(n.value=null,c.value=f)}const T=R(()=>{const{size:a,inverted:b}=e,{common:{cubicBezierEaseInOut:s},self:f}=g.value,{padding:C,dividerColor:l,borderRadius:k,optionOpacityDisabled:$,[L("optionIconSuffixWidth",a)]:M,[L("optionSuffixWidth",a)]:re,[L("optionIconPrefixWidth",a)]:E,[L("optionPrefixWidth",a)]:Oe,[L("fontSize",a)]:_e,[L("optionHeight",a)]:De,[L("optionIconSize",a)]:Te}=f,y={"--n-bezier":s,"--n-font-size":_e,"--n-padding":C,"--n-border-radius":k,"--n-option-height":De,"--n-option-prefix-width":Oe,"--n-option-icon-prefix-width":E,"--n-option-suffix-width":re,"--n-option-icon-suffix-width":M,"--n-option-icon-size":Te,"--n-divider-color":l,"--n-option-opacity-disabled":$};return b?(y["--n-color"]=f.colorInverted,y["--n-option-color-hover"]=f.optionColorHoverInverted,y["--n-option-color-active"]=f.optionColorActiveInverted,y["--n-option-text-color"]=f.optionTextColorInverted,y["--n-option-text-color-hover"]=f.optionTextColorHoverInverted,y["--n-option-text-color-active"]=f.optionTextColorActiveInverted,y["--n-option-text-color-child-active"]=f.optionTextColorChildActiveInverted,y["--n-prefix-color"]=f.prefixColorInverted,y["--n-suffix-color"]=f.suffixColorInverted,y["--n-group-header-text-color"]=f.groupHeaderTextColorInverted):(y["--n-color"]=f.color,y["--n-option-color-hover"]=f.optionColorHover,y["--n-option-color-active"]=f.optionColorActive,y["--n-option-text-color"]=f.optionTextColor,y["--n-option-text-color-hover"]=f.optionTextColorHover,y["--n-option-text-color-active"]=f.optionTextColorActive,y["--n-option-text-color-child-active"]=f.optionTextColorChildActive,y["--n-prefix-color"]=f.prefixColor,y["--n-suffix-color"]=f.suffixColor,y["--n-group-header-text-color"]=f.groupHeaderTextColor),y}),K=m?Qe("dropdown",R(()=>`${e.size[0]}${e.inverted?"i":""}`),T,e):void 0;return{mergedClsPrefix:N,mergedTheme:g,tmNodes:t,mergedShow:i,handleAfterLeave:()=>{e.animated&&x()},doUpdateShow:v,cssVars:m?void 0:T,themeClass:K==null?void 0:K.themeClass,onRender:K==null?void 0:K.onRender}},render(){const e=(r,t,n,c,p)=>{var d;const{mergedClsPrefix:S,menuProps:h}=this;(d=this.onRender)===null||d===void 0||d.call(this);const P=(h==null?void 0:h(void 0,this.tmNodes.map(m=>m.rawNode)))||{},N={ref:so(t),class:[r,`${S}-dropdown`,this.themeClass],clsPrefix:S,tmNodes:this.tmNodes,style:[n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:c,onMouseleave:p};return u(Ke,ke(this.$attrs,N,P))},{mergedTheme:o}=this,i={show:this.mergedShow,theme:o.peers.Popover,themeOverrides:o.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return u(Fe,Object.assign({},Ye(this.$props,go),i),{trigger:()=>{var r,t;return(t=(r=this.$slots).default)===null||t===void 0?void 0:t.call(r)}})}}),ae={jokes:["header","default","footer"]},ee={jokes:{header:!1,footer:!1,default:{label:"口 日 丿 巨 匚 丅"}}},Z={},Ce=e=>`group_${e}`,se="default";function ko(e){if(e in Z||(So(fe.getRoutes().filter(({meta:{menu:o}})=>(o==null?void 0:o.for)===e)),e in Z))return Z[e];Pe.error("[Route]","[Menu]","Unknown menu",{key:e})}function $o(e,o){var i=ko(e);if(i){var r=i.find(t=>t.type==="group"&&t.key===Ce(o));if(r)return r;Pe.error("[Route]","[Menu]","Unknown group",{menu:e,group:o})}}function So(e=fe.getRoutes()){const o=No(e);for(var i in o)Z[i]=o[i]}function Po({components:e,meta:{menu:o}}){return!le(e)&&!le(o)&&o.for}function No(e=fe.getRoutes()){const o=e.filter(Po),i={};return de(be(o,({meta:{menu:t}})=>t.for)).forEach(t=>{var[n,c]=t;const p=oo((n in ae&&ae[n].length>0?ae[n]:[se]).map(m=>[m,[]]));c=me(c,({meta:{menu:m}})=>m.order??0);const d=[];for(var S=0;S<c.length;S++){let m=function(w){if(w){var v={for:n,...w},x=r(v,""),I=d.findIndex(([{key:z},O])=>z===x.key);I<0?d.push([x,v]):d[I][0]=to(d[I][0],x),w.parent&&m(w.parent)}};const g=c[S];var h=g.meta.menu,P=r(h,g.path),N=d.findIndex(([{key:w},v])=>w===P.key);if(N>=0){d[N]={...d[N],...P};continue}d.push([P,h]),m(h.parent)}de(be(d,([m,{group:g}])=>g??se)).forEach(m=>{var[g,w]=m;const v=[];for(var x=0;x<w.length;x++){var[I,z]=w[x];if(z.parent)(function(X,q){if(!q)return;var V=T(w.map(K=>K[0]),q.key),D=w[V];(D[0].children??(D[0].children=[])).push(X);function T(K,a){var b=K.findIndex(({key:s})=>s===a);return b>=0?b:T(K.filter(({children:s})=>s&&s.length>0).flatMap(({children:s})=>s),a)}})(I,z.parent);else{var O=v.findIndex(({key:F})=>F===I.key);O<0?v.push(I):v[O]={...v[O],...I}}}p[g in p?g:se].push(...me(v,({order:F})=>F??0))}),i[n]=no(de(p).map(m=>{var[g,w]=m,v=n in ee&&!le(ee[n])&&g in ee[n]?ee[n][g]:void 0;if(v===!1)return w;var x={type:"group",key:Ce(g),children:w};return v&&(x=Object.assign(v,x)),x}),{type:"divider"}).flat()}),i;function r(t,n){return{key:t.key,label:t.label,iconType:t.icon?uo[t.icon]:void 0,link:n,order:t.order??0}}}export{To as N,$o as a,ko as g};
