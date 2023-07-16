import{d as D,r as $,aW as it,h as l,c as st,n as ye,aN as lt,g as q,aX as dt,F as ct,m as bt,q as ft,aY as pt,aZ as ut,a as r,b as o,k as f,j as P,y as vt,e as ht,u as we,a_ as Z,H as Q,p as gt,t as E,A as xt,i as mt,aP as pe,a$ as ue,o as G,ah as ee,a7 as yt,aH as wt,al as Ct,b0 as St,b1 as Rt,at as L,b2 as Y}from"./index-f75098fd.js";import{u as ve}from"./use-compitable-46158255.js";import{u as zt}from"./use-merged-state-b10dd123.js";import{t as te}from"./throttle-0ff44575.js";import{o as $t}from"./on-fonts-ready-d6f1a91e.js";import{c as Pt,a as he}from"./cssr-05e17a4c.js";const Tt=he(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[he("&::-webkit-scrollbar",{width:0,height:0})]),Wt=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=$(null);function i(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const b=it();return Tt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Pt,ssr:b}),Object.assign({selfRef:e,handleWheel:i},{scrollTo(...d){var h;(h=e.value)===null||h===void 0||h.scrollTo(...d)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),_t=D({name:"Add",render(){return l("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),ne=st("n-tabs"),Ce={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},It=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Ce,setup(e){const i=ye(ne,null);return i||lt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:i.paneStyleRef,class:i.paneClassRef,mergedClsPrefix:i.mergedClsPrefixRef}},render(){return l("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),At=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ut(Ce,["displayDirective"])),re=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:At,setup(e){const{mergedClsPrefixRef:i,valueRef:b,typeRef:y,closableRef:d,tabStyleRef:h,tabChangeIdRef:p,onBeforeLeaveRef:w,triggerRef:R,handleAdd:C,activateTab:u,handleClose:S}=ye(ne);return{trigger:R,mergedClosable:q(()=>{if(e.internalAddable)return!1;const{closable:v}=e;return v===void 0?d.value:v}),style:h,clsPrefix:i,value:b,type:y,handleClose(v){v.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){C();return}const{name:v}=e,g=++p.id;if(v!==b.value){const{value:x}=w;x?Promise.resolve(x(e.name,b.value)).then(_=>{_&&p.id===g&&u(v)}):u(v)}}}},render(){const{internalAddable:e,clsPrefix:i,name:b,disabled:y,label:d,tab:h,value:p,mergedClosable:w,style:R,trigger:C,$slots:{default:u}}=this,S=d??h;return l("div",{class:`${i}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${i}-tabs-tab-pad`}):null,l("div",Object.assign({key:b,"data-name":b,"data-disabled":y?!0:void 0},dt({class:[`${i}-tabs-tab`,p===b&&`${i}-tabs-tab--active`,y&&`${i}-tabs-tab--disabled`,w&&`${i}-tabs-tab--closable`,e&&`${i}-tabs-tab--addable`],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?void 0:R},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${i}-tabs-tab__label`},e?l(ct,null,l("div",{class:`${i}-tabs-tab__height-placeholder`}," "),l(bt,{clsPrefix:i},{default:()=>l(_t,null)})):u?u():typeof S=="object"?S:ft(S??b)),w&&this.type==="card"?l(pt,{clsPrefix:i,class:`${i}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),Lt=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[o("segment-type",[r("tabs-rail",[f("&.transition-disabled","color: red;",[r("tabs-tab",`
 transition: none;
 `)])])]),o("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),o("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),o("left, right",`
 flex-direction: row;
 `,[r("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),o("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),o("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),r("tabs-bar",`
 top: 0;
 `)]),r("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[r("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[r("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[o("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),f("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),o("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[P("prefix, suffix",`
 display: flex;
 align-items: center;
 `),P("prefix","padding-right: 16px;"),P("suffix","padding-left: 16px;")]),o("top, bottom",[r("tabs-nav-scroll-wrapper",[f("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),f("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),o("shadow-start",[f("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),o("shadow-end",[f("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),o("left, right",[r("tabs-nav-scroll-wrapper",[f("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),f("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),o("shadow-start",[f("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),o("shadow-end",[f("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),r("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[r("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[f("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),f("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),r("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),r("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),r("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[o("disabled",{cursor:"not-allowed"}),P("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),P("label",`
 display: flex;
 align-items: center;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[f("&.transition-disabled",`
 transition: none;
 `),o("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),r("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),r("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[f("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),f("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),f("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),f("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),f("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),o("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[f("&:hover",{color:"var(--n-tab-text-color-hover)"}),o("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),o("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[o("line-type",[o("top",[P("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),o("left",[P("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),o("right",[P("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),o("bottom",[P("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),o("card-type",[P("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[o("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[P("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),vt("disabled",[f("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),o("closable","padding-right: 8px;"),o("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),o("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),o("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),o("top",[o("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),o("left",[o("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),o("right",[o("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),o("bottom",[o("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[o("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Bt=Object.assign(Object.assign({},we.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Dt=D({name:"Tabs",props:Bt,setup(e,{slots:i}){var b,y,d,h;const{mergedClsPrefixRef:p,inlineThemeDisabled:w}=ht(e),R=we("Tabs","-tabs",Lt,Rt,e,p),C=$(null),u=$(null),S=$(null),v=$(null),g=$(null),x=$(!0),_=$(!0),A=ve(e,["labelSize","size"]),H=ve(e,["activeName","value"]),T=$((y=(b=H.value)!==null&&b!==void 0?b:e.defaultValue)!==null&&y!==void 0?y:i.default?(h=(d=Z(i.default())[0])===null||d===void 0?void 0:d.props)===null||h===void 0?void 0:h.name:null),B=zt(H,T),k={id:0},c=q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});Q(B,()=>{k.id=0,M(),ie()});function m(){var t;const{value:a}=B;return a===null?null:(t=C.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function I(t){if(e.type==="card")return;const{value:a}=u;if(a&&t){const n=`${p.value}-tabs-bar--disabled`,{barWidth:s,placement:z}=e;if(t.dataset.disabled==="true"?a.classList.add(n):a.classList.remove(n),["top","bottom"].includes(z)){if(oe(["top","maxHeight","height"]),typeof s=="number"&&t.offsetWidth>=s){const W=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${W}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(oe(["left","maxWidth","width"]),typeof s=="number"&&t.offsetHeight>=s){const W=Math.floor((t.offsetHeight-s)/2)+t.offsetTop;a.style.top=`${W}px`,a.style.maxHeight=`${s}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function oe(t){const{value:a}=u;if(a)for(const n of t)a.style[n]=""}function M(){if(e.type==="card")return;const t=m();t&&I(t)}function ie(t){var a;const n=(a=g.value)===null||a===void 0?void 0:a.$el;if(!n)return;const s=m();if(!s)return;const{scrollLeft:z,offsetWidth:W}=n,{offsetLeft:O,offsetWidth:X}=s;z>O?n.scrollTo({top:0,left:O,behavior:"smooth"}):O+X>z+W&&n.scrollTo({top:0,left:O+X-W,behavior:"smooth"})}const N=$(null);let K=0,j=null;function Se(t){const a=N.value;if(a){K=t.getBoundingClientRect().height;const n=`${K}px`,s=()=>{a.style.height=n,a.style.maxHeight=n};j?(s(),j(),j=null):j=s}}function Re(t){const a=N.value;if(a){const n=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${n}px`,a.style.height=`${Math.max(K,n)}px`};j?(j(),j=null,s()):j=s}}function ze(){const t=N.value;t&&(t.style.maxHeight="",t.style.height="")}const se={value:[]},le=$("next");function $e(t){const a=B.value;let n="next";for(const s of se.value){if(s===a)break;if(s===t){n="prev";break}}le.value=n,Pe(t)}function Pe(t){const{onActiveNameChange:a,onUpdateValue:n,"onUpdate:value":s}=e;a&&G(a,t),n&&G(n,t),s&&G(s,t),T.value=t}function Te(t){const{onClose:a}=e;a&&G(a,t)}function de(){const{value:t}=u;if(!t)return;const a="transition-disabled";t.classList.add(a),M(),t.classList.remove(a)}let ce=0;function We(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||ce===t.contentRect.width)return;ce=t.contentRect.width;const{type:n}=e;(n==="line"||n==="bar")&&de(),n!=="segment"&&J((a=g.value)===null||a===void 0?void 0:a.$el)}const _e=te(We,64);Q([()=>e.justifyContent,()=>e.size],()=>{ee(()=>{const{type:t}=e;(t==="line"||t==="bar")&&de()})});const V=$(!1);function Ae(t){var a;const{target:n,contentRect:{width:s}}=t,z=n.parentElement.offsetWidth;if(!V.value)z<s&&(V.value=!0);else{const{value:W}=v;if(!W)return;z-s>W.$el.offsetWidth&&(V.value=!1)}J((a=g.value)===null||a===void 0?void 0:a.$el)}const Le=te(Ae,64);function Be(){const{onAdd:t}=e;t&&t(),ee(()=>{const a=m(),{value:n}=g;!a||!n||n.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function J(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:n,scrollWidth:s,offsetWidth:z}=t;x.value=n<=0,_.value=n+z>=s}else{const{scrollTop:n,scrollHeight:s,offsetHeight:z}=t;x.value=n<=0,_.value=n+z>=s}}const ke=te(t=>{J(t.target)},64);gt(ne,{triggerRef:E(e,"trigger"),tabStyleRef:E(e,"tabStyle"),paneClassRef:E(e,"paneClass"),paneStyleRef:E(e,"paneStyle"),mergedClsPrefixRef:p,typeRef:E(e,"type"),closableRef:E(e,"closable"),valueRef:B,tabChangeIdRef:k,onBeforeLeaveRef:E(e,"onBeforeLeave"),activateTab:$e,handleClose:Te,handleAdd:Be}),$t(()=>{M(),ie()}),xt(()=>{const{value:t}=S;if(!t)return;const{value:a}=p,n=`${a}-tabs-nav-scroll-wrapper--shadow-start`,s=`${a}-tabs-nav-scroll-wrapper--shadow-end`;x.value?t.classList.remove(n):t.classList.add(n),_.value?t.classList.remove(s):t.classList.add(s)});const be=$(null);Q(B,()=>{if(e.type==="segment"){const t=be.value;t&&ee(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const je={syncBarPosition:()=>{M()}},fe=q(()=>{const{value:t}=A,{type:a}=e,n={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${n}`,{self:{barColor:z,closeIconColor:W,closeIconColorHover:O,closeIconColorPressed:X,tabColor:Ee,tabBorderColor:He,paneTextColor:Fe,tabFontWeight:Oe,tabBorderRadius:Ie,tabFontWeightActive:De,colorSegment:Me,fontWeightStrong:Ne,tabColorSegment:Ve,closeSize:Xe,closeIconSize:Ue,closeColorHover:Ge,closeColorPressed:Ye,closeBorderRadius:qe,[L("panePadding",t)]:U,[L("tabPadding",s)]:Ke,[L("tabPaddingVertical",s)]:Je,[L("tabGap",s)]:Ze,[L("tabGap",`${s}Vertical`)]:Qe,[L("tabTextColor",a)]:et,[L("tabTextColorActive",a)]:tt,[L("tabTextColorHover",a)]:at,[L("tabTextColorDisabled",a)]:rt,[L("tabFontSize",t)]:nt},common:{cubicBezierEaseInOut:ot}}=R.value;return{"--n-bezier":ot,"--n-color-segment":Me,"--n-bar-color":z,"--n-tab-font-size":nt,"--n-tab-text-color":et,"--n-tab-text-color-active":tt,"--n-tab-text-color-disabled":rt,"--n-tab-text-color-hover":at,"--n-pane-text-color":Fe,"--n-tab-border-color":He,"--n-tab-border-radius":Ie,"--n-close-size":Xe,"--n-close-icon-size":Ue,"--n-close-color-hover":Ge,"--n-close-color-pressed":Ye,"--n-close-border-radius":qe,"--n-close-icon-color":W,"--n-close-icon-color-hover":O,"--n-close-icon-color-pressed":X,"--n-tab-color":Ee,"--n-tab-font-weight":Oe,"--n-tab-font-weight-active":De,"--n-tab-padding":Ke,"--n-tab-padding-vertical":Je,"--n-tab-gap":Ze,"--n-tab-gap-vertical":Qe,"--n-pane-padding-left":Y(U,"left"),"--n-pane-padding-right":Y(U,"right"),"--n-pane-padding-top":Y(U,"top"),"--n-pane-padding-bottom":Y(U,"bottom"),"--n-font-weight-strong":Ne,"--n-tab-color-segment":Ve}}),F=w?mt("tabs",q(()=>`${A.value[0]}${e.type[0]}`),fe,e):void 0;return Object.assign({mergedClsPrefix:p,mergedValue:B,renderedNames:new Set,tabsRailElRef:be,tabsPaneWrapperRef:N,tabsElRef:C,barElRef:u,addTabInstRef:v,xScrollInstRef:g,scrollWrapperElRef:S,addTabFixed:V,tabWrapperStyle:c,handleNavResize:_e,mergedSize:A,handleScroll:ke,handleTabsResize:Le,cssVars:w?void 0:fe,themeClass:F==null?void 0:F.themeClass,animationDirection:le,renderNameListRef:se,onAnimationBeforeLeave:Se,onAnimationEnter:Re,onAnimationAfterEnter:ze,onRender:F==null?void 0:F.onRender},je)},render(){const{mergedClsPrefix:e,type:i,placement:b,addTabFixed:y,addable:d,mergedSize:h,renderNameListRef:p,onRender:w,paneWrapperClass:R,paneWrapperStyle:C,$slots:{default:u,prefix:S,suffix:v}}=this;w==null||w();const g=u?Z(u()).filter(c=>c.type.__TAB_PANE__===!0):[],x=u?Z(u()).filter(c=>c.type.__TAB__===!0):[],_=!x.length,A=i==="card",H=i==="segment",T=!A&&!H&&this.justifyContent;p.value=[];const B=()=>{const c=l("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),_?g.map((m,I)=>(p.value.push(m.props.name),ae(l(re,Object.assign({},m.props,{internalCreatedByPane:!0,internalLeftPadded:I!==0&&(!T||T==="center"||T==="start"||T==="end")}),m.children?{default:m.children.tab}:void 0)))):x.map((m,I)=>(p.value.push(m.props.name),ae(I!==0&&!T?me(m):m))),!y&&d&&A?xe(d,(_?g.length:x.length)!==0):null,T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},A&&d?l(ue,{onResize:this.handleTabsResize},{default:()=>c}):c,A?l("div",{class:`${e}-tabs-pad`}):null,A?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},k=H?"top":b;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${i}-type`,`${e}-tabs--${h}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${k}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${i}-type`,`${e}-tabs-nav--${k}`,`${e}-tabs-nav`]},pe(S,c=>c&&l("div",{class:`${e}-tabs-nav__prefix`},c)),H?l("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},_?g.map((c,m)=>(p.value.push(c.props.name),l(re,Object.assign({},c.props,{internalCreatedByPane:!0,internalLeftPadded:m!==0}),c.children?{default:c.children.tab}:void 0))):x.map((c,m)=>(p.value.push(c.props.name),m===0?c:me(c)))):l(ue,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(k)?l(Wt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:B}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},B()))}),y&&d&&A?xe(d,!0):null,pe(v,c=>c&&l("div",{class:`${e}-tabs-nav__suffix`},c))),_&&(this.animated&&(k==="top"||k==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:C,class:[`${e}-tabs-pane-wrapper`,R]},ge(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ge(g,this.mergedValue,this.renderedNames)))}});function ge(e,i,b,y,d,h,p){const w=[];return e.forEach(R=>{const{name:C,displayDirective:u,"display-directive":S}=R.props,v=x=>u===x||S===x,g=i===C;if(R.key!==void 0&&(R.key=C),g||v("show")||v("show:lazy")&&b.has(C)){b.has(C)||b.add(C);const x=!v("if");w.push(x?yt(R,[[wt,g]]):R)}}),p?l(Ct,{name:`${p}-transition`,onBeforeLeave:y,onEnter:d,onAfterEnter:h},{default:()=>w}):w}function xe(e,i){return l(re,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:i,disabled:typeof e=="object"&&e.disabled})}function me(e){const i=St(e);return i.props?i.props.internalLeftPadded=!0:i.props={internalLeftPadded:!0},i}function ae(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{It as N,Dt as a};
