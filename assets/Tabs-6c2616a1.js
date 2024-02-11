import{a as D,r as z,bD as dt,h as l,a0 as bt,i as we,t as ct,e as q,aS as ft,$ as pt,L as ut,a7 as vt,c0 as ht,aP as gt,I as r,T as s,Q as u,J as W,R as xt,u as mt,b as Ce,f as Z,ah as ee,s as yt,a2 as wt,a5 as A,V as Ct,K as St,aC as ue,ae as ve,ce as Rt,a6 as K,l as zt,aF as te,j as E,aH as Y,br as Tt,bM as $t,bf as Pt,cf as Wt}from"./index-fe2ea4cb.js";import{u as he}from"./use-compitable-d3ced092.js";import{u as Bt}from"./use-merged-state-65a5f827.js";import{t as ae}from"./throttle-5f3370c1.js";import{o as Lt}from"./on-fonts-ready-29317161.js";import{c as _t,a as ge}from"./cssr-c566339e.js";const At=ge(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ge("&::-webkit-scrollbar",{width:0,height:0})]),Et=D({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=z(null);function i(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const c=dt();return At.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:_t,ssr:c}),Object.assign({selfRef:e,handleWheel:i},{scrollTo(...d){var m;(m=e.value)===null||m===void 0||m.scrollTo(...d)}})},render(){return l("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),jt=D({name:"Add",render(){return l("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),oe=bt("n-tabs"),Se={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},Xt=D({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Se,setup(e){const i=we(oe,null);return i||ct("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:i.paneStyleRef,class:i.paneClassRef,mergedClsPrefix:i.mergedClsPrefixRef}},render(){return l("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),kt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},gt(Se,["displayDirective"])),ne=D({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:kt,setup(e){const{mergedClsPrefixRef:i,valueRef:c,typeRef:y,closableRef:d,tabStyleRef:m,addTabStyleRef:v,tabClassRef:w,addTabClassRef:C,tabChangeIdRef:h,onBeforeLeaveRef:f,triggerRef:k,handleAdd:B,activateTab:g,handleClose:S}=we(oe);return{trigger:k,mergedClosable:q(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?d.value:x}),style:m,addStyle:v,tabClass:w,addTabClass:C,clsPrefix:i,value:c,type:y,handleClose(x){x.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){B();return}const{name:x}=e,$=++h.id;if(x!==c.value){const{value:L}=f;L?Promise.resolve(L(e.name,c.value)).then(T=>{T&&h.id===$&&g(x)}):g(x)}}}},render(){const{internalAddable:e,clsPrefix:i,name:c,disabled:y,label:d,tab:m,value:v,mergedClosable:w,trigger:C,$slots:{default:h}}=this,f=d??m;return l("div",{class:`${i}-tabs-tab-wrapper`},this.internalLeftPadded?l("div",{class:`${i}-tabs-tab-pad`}):null,l("div",Object.assign({key:c,"data-name":c,"data-disabled":y?!0:void 0},ft({class:[`${i}-tabs-tab`,v===c&&`${i}-tabs-tab--active`,y&&`${i}-tabs-tab--disabled`,w&&`${i}-tabs-tab--closable`,e&&`${i}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:C==="click"?this.activateTab:void 0,onMouseenter:C==="hover"?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),l("span",{class:`${i}-tabs-tab__label`},e?l(pt,null,l("div",{class:`${i}-tabs-tab__height-placeholder`}," "),l(ut,{clsPrefix:i},{default:()=>l(jt,null)})):h?h():typeof f=="object"?f:vt(f??c)),w&&this.type==="card"?l(ht,{clsPrefix:i,class:`${i}-tabs-tab__close`,onClick:this.handleClose,disabled:y}):null))}}),Ht=r("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[s("segment-type",[r("tabs-rail",[u("&.transition-disabled",[r("tabs-capsule",`
 transition: none;
 `)])])]),s("top",[r("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),s("left",[r("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),s("left, right",`
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
 `)]),s("right",`
 flex-direction: row-reverse;
 `,[r("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),r("tabs-bar",`
 left: 0;
 `)]),s("bottom",`
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
 `,[r("tabs-capsule",`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: 0.3s;
 `),r("tabs-tab-wrapper",`
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
 `,[s("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),s("flex",[r("tabs-nav",{width:"100%"},[r("tabs-wrapper",{width:"100%"},[r("tabs-tab",{marginRight:0})])])]),r("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[W("prefix, suffix",`
 display: flex;
 align-items: center;
 `),W("prefix","padding-right: 16px;"),W("suffix","padding-left: 16px;")]),s("top, bottom",[r("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),u("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),s("shadow-start",[u("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[u("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),s("left, right",[r("tabs-nav-scroll-content",`
 flex-direction: column;
 `),r("tabs-nav-scroll-wrapper",[u("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),u("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),s("shadow-start",[u("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),s("shadow-end",[u("&::after",`
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
 `,[u("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),u("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),r("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
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
 `,[s("disabled",{cursor:"not-allowed"}),W("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W("label",`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),r("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[u("&.transition-disabled",`
 transition: none;
 `),s("disabled",`
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
 `,[u("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),u("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),u("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),u("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),u("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),r("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),s("line-type, bar-type",[r("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[u("&:hover",{color:"var(--n-tab-text-color-hover)"}),s("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),s("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),r("tabs-nav",[s("line-type",[s("top",[W("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 bottom: -1px;
 `)]),s("left",[W("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 right: -1px;
 `)]),s("right",[W("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 left: -1px;
 `)]),s("bottom",[W("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-bar",`
 top: -1px;
 `)]),W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),r("tabs-bar",`
 border-radius: 0;
 `)]),s("card-type",[W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
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
 `,[s("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[W("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),xt("disabled",[u("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),s("closable","padding-right: 8px;"),s("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),s("disabled","color: var(--n-tab-text-color-disabled);")]),r("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),s("left, right",[r("tabs-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-wrapper",`
 flex-direction: column;
 `,[r("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),s("top",[s("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-bottom: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),s("left",[s("card-type",[r("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-right: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),s("right",[s("card-type",[r("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-left: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),s("bottom",[s("card-type",[r("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[s("active",`
 border-top: 1px solid #0000;
 `)]),r("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `),r("tabs-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),Ot=Object.assign(Object.assign({},Ce.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),Ut=D({name:"Tabs",props:Ot,setup(e,{slots:i}){var c,y,d,m;const{mergedClsPrefixRef:v,inlineThemeDisabled:w}=mt(e),C=Ce("Tabs","-tabs",Ht,Rt,e,v),h=z(null),f=z(null),k=z(null),B=z(null),g=z(null),S=z(null),x=z(!0),$=z(!0),L=he(e,["labelSize","size"]),T=he(e,["activeName","value"]),I=z((y=(c=T.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&y!==void 0?y:i.default?(m=(d=Z(i.default())[0])===null||d===void 0?void 0:d.props)===null||m===void 0?void 0:m.name:null),P=Bt(T,I),b={id:0},R=q(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});ee(P,()=>{b.id=0,V(),ie()});function H(){var a;const{value:t}=P;return t===null?null:(a=h.value)===null||a===void 0?void 0:a.querySelector(`[data-name="${t}"]`)}function Re(a){if(e.type==="card")return;const{value:t}=f;if(!t)return;const n=t.style.opacity==="0";if(a){const o=`${v.value}-tabs-bar--disabled`,{barWidth:p,placement:j}=e;if(a.dataset.disabled==="true"?t.classList.add(o):t.classList.remove(o),["top","bottom"].includes(j)){if(se(["top","maxHeight","height"]),typeof p=="number"&&a.offsetWidth>=p){const _=Math.floor((a.offsetWidth-p)/2)+a.offsetLeft;t.style.left=`${_}px`,t.style.maxWidth=`${p}px`}else t.style.left=`${a.offsetLeft}px`,t.style.maxWidth=`${a.offsetWidth}px`;t.style.width="8192px",n&&(t.style.transition="none"),t.offsetWidth,n&&(t.style.transition="",t.style.opacity="1")}else{if(se(["left","maxWidth","width"]),typeof p=="number"&&a.offsetHeight>=p){const _=Math.floor((a.offsetHeight-p)/2)+a.offsetTop;t.style.top=`${_}px`,t.style.maxHeight=`${p}px`}else t.style.top=`${a.offsetTop}px`,t.style.maxHeight=`${a.offsetHeight}px`;t.style.height="8192px",n&&(t.style.transition="none"),t.offsetHeight,n&&(t.style.transition="",t.style.opacity="1")}}}function ze(){if(e.type==="card")return;const{value:a}=f;a&&(a.style.opacity="0")}function se(a){const{value:t}=f;if(t)for(const n of a)t.style[n]=""}function V(){if(e.type==="card")return;const a=H();a?Re(a):ze()}function ie(a){var t;const n=(t=g.value)===null||t===void 0?void 0:t.$el;if(!n)return;const o=H();if(!o)return;const{scrollLeft:p,offsetWidth:j}=n,{offsetLeft:_,offsetWidth:U}=o;p>_?n.scrollTo({top:0,left:_,behavior:"smooth"}):_+U>p+j&&n.scrollTo({top:0,left:_+U-j,behavior:"smooth"})}const N=z(null);let J=0,O=null;function Te(a){const t=N.value;if(t){J=a.getBoundingClientRect().height;const n=`${J}px`,o=()=>{t.style.height=n,t.style.maxHeight=n};O?(o(),O(),O=null):O=o}}function $e(a){const t=N.value;if(t){const n=a.getBoundingClientRect().height,o=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(J,n)}px`};O?(O(),O=null,o()):O=o}}function Pe(){const a=N.value;if(a){a.style.maxHeight="",a.style.height="";const{paneWrapperStyle:t}=e;if(typeof t=="string")a.style.cssText=t;else if(t){const{maxHeight:n,height:o}=t;n!==void 0&&(a.style.maxHeight=n),o!==void 0&&(a.style.height=o)}}}const le={value:[]},de=z("next");function We(a){const t=P.value;let n="next";for(const o of le.value){if(o===t)break;if(o===a){n="prev";break}}de.value=n,Be(a)}function Be(a){const{onActiveNameChange:t,onUpdateValue:n,"onUpdate:value":o}=e;t&&K(t,a),n&&K(n,a),o&&K(o,a),I.value=a}function Le(a){const{onClose:t}=e;t&&K(t,a)}function be(){const{value:a}=f;if(!a)return;const t="transition-disabled";a.classList.add(t),V(),a.classList.remove(t)}const M=z(null);function ce({disabledTransition:a}){const t=h.value;if(!t)return;a&&t.classList.add("transition-disabled");const n=H();if(n&&M.value){const o=n.getBoundingClientRect();M.value.style.width=`${o.width}px`,M.value.style.height=`${o.height}px`,M.value.style.transform=`translateX(${o.left-t.getBoundingClientRect().left-zt(getComputedStyle(t).paddingLeft)}px)`}a&&t.classList.remove("transition-disabled")}ee([P],()=>{e.type==="segment"&&te(()=>{ce({disabledTransition:!1})})}),yt(()=>{e.type==="segment"&&ce({disabledTransition:!0})});let fe=0;function _e(a){var t;if(a.contentRect.width===0&&a.contentRect.height===0||fe===a.contentRect.width)return;fe=a.contentRect.width;const{type:n}=e;if((n==="line"||n==="bar")&&be(),n!=="segment"){const{placement:o}=e;Q((o==="top"||o==="bottom"?(t=g.value)===null||t===void 0?void 0:t.$el:S.value)||null)}}const Ae=ae(_e,64);ee([()=>e.justifyContent,()=>e.size],()=>{te(()=>{const{type:a}=e;(a==="line"||a==="bar")&&be()})});const X=z(!1);function Ee(a){var t;const{target:n,contentRect:{width:o}}=a,p=n.parentElement.offsetWidth;if(!X.value)p<o&&(X.value=!0);else{const{value:j}=B;if(!j)return;p-o>j.$el.offsetWidth&&(X.value=!1)}Q(((t=g.value)===null||t===void 0?void 0:t.$el)||null)}const je=ae(Ee,64);function ke(){const{onAdd:a}=e;a&&a(),te(()=>{const t=H(),{value:n}=g;!t||!n||n.scrollTo({left:t.offsetLeft,top:0,behavior:"smooth"})})}function Q(a){if(!a)return;const{placement:t}=e;if(t==="top"||t==="bottom"){const{scrollLeft:n,scrollWidth:o,offsetWidth:p}=a;x.value=n<=0,$.value=n+p>=o}else{const{scrollTop:n,scrollHeight:o,offsetHeight:p}=a;x.value=n<=0,$.value=n+p>=o}}const He=ae(a=>{Q(a.target)},64);wt(oe,{triggerRef:A(e,"trigger"),tabStyleRef:A(e,"tabStyle"),tabClassRef:A(e,"tabClass"),addTabStyleRef:A(e,"addTabStyle"),addTabClassRef:A(e,"addTabClass"),paneClassRef:A(e,"paneClass"),paneStyleRef:A(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:A(e,"type"),closableRef:A(e,"closable"),valueRef:P,tabChangeIdRef:b,onBeforeLeaveRef:A(e,"onBeforeLeave"),activateTab:We,handleClose:Le,handleAdd:ke}),Lt(()=>{V(),ie()}),Ct(()=>{const{value:a}=k;if(!a)return;const{value:t}=v,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,o=`${t}-tabs-nav-scroll-wrapper--shadow-end`;x.value?a.classList.remove(n):a.classList.add(n),$.value?a.classList.remove(o):a.classList.add(o)});const Oe={syncBarPosition:()=>{V()}},pe=q(()=>{const{value:a}=L,{type:t}=e,n={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[t],o=`${a}${n}`,{self:{barColor:p,closeIconColor:j,closeIconColorHover:_,closeIconColorPressed:U,tabColor:Fe,tabBorderColor:Ie,paneTextColor:Me,tabFontWeight:De,tabBorderRadius:Ve,tabFontWeightActive:Ne,colorSegment:Xe,fontWeightStrong:Ue,tabColorSegment:Ge,closeSize:Ke,closeIconSize:Ye,closeColorHover:qe,closeColorPressed:Je,closeBorderRadius:Qe,[E("panePadding",a)]:G,[E("tabPadding",o)]:Ze,[E("tabPaddingVertical",o)]:et,[E("tabGap",o)]:tt,[E("tabGap",`${o}Vertical`)]:at,[E("tabTextColor",t)]:rt,[E("tabTextColorActive",t)]:nt,[E("tabTextColorHover",t)]:ot,[E("tabTextColorDisabled",t)]:st,[E("tabFontSize",a)]:it},common:{cubicBezierEaseInOut:lt}}=C.value;return{"--n-bezier":lt,"--n-color-segment":Xe,"--n-bar-color":p,"--n-tab-font-size":it,"--n-tab-text-color":rt,"--n-tab-text-color-active":nt,"--n-tab-text-color-disabled":st,"--n-tab-text-color-hover":ot,"--n-pane-text-color":Me,"--n-tab-border-color":Ie,"--n-tab-border-radius":Ve,"--n-close-size":Ke,"--n-close-icon-size":Ye,"--n-close-color-hover":qe,"--n-close-color-pressed":Je,"--n-close-border-radius":Qe,"--n-close-icon-color":j,"--n-close-icon-color-hover":_,"--n-close-icon-color-pressed":U,"--n-tab-color":Fe,"--n-tab-font-weight":De,"--n-tab-font-weight-active":Ne,"--n-tab-padding":Ze,"--n-tab-padding-vertical":et,"--n-tab-gap":tt,"--n-tab-gap-vertical":at,"--n-pane-padding-left":Y(G,"left"),"--n-pane-padding-right":Y(G,"right"),"--n-pane-padding-top":Y(G,"top"),"--n-pane-padding-bottom":Y(G,"bottom"),"--n-font-weight-strong":Ue,"--n-tab-color-segment":Ge}}),F=w?St("tabs",q(()=>`${L.value[0]}${e.type[0]}`),pe,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:P,renderedNames:new Set,segmentCapsuleElRef:M,tabsPaneWrapperRef:N,tabsElRef:h,barElRef:f,addTabInstRef:B,xScrollInstRef:g,scrollWrapperElRef:k,addTabFixed:X,tabWrapperStyle:R,handleNavResize:Ae,mergedSize:L,handleScroll:He,handleTabsResize:je,cssVars:w?void 0:pe,themeClass:F==null?void 0:F.themeClass,animationDirection:de,renderNameListRef:le,yScrollElRef:S,onAnimationBeforeLeave:Te,onAnimationEnter:$e,onAnimationAfterEnter:Pe,onRender:F==null?void 0:F.onRender},Oe)},render(){const{mergedClsPrefix:e,type:i,placement:c,addTabFixed:y,addable:d,mergedSize:m,renderNameListRef:v,onRender:w,paneWrapperClass:C,paneWrapperStyle:h,$slots:{default:f,prefix:k,suffix:B}}=this;w==null||w();const g=f?Z(f()).filter(b=>b.type.__TAB_PANE__===!0):[],S=f?Z(f()).filter(b=>b.type.__TAB__===!0):[],x=!S.length,$=i==="card",L=i==="segment",T=!$&&!L&&this.justifyContent;v.value=[];const I=()=>{const b=l("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),x?g.map((R,H)=>(v.value.push(R.props.name),re(l(ne,Object.assign({},R.props,{internalCreatedByPane:!0,internalLeftPadded:H!==0&&(!T||T==="center"||T==="start"||T==="end")}),R.children?{default:R.children.tab}:void 0)))):S.map((R,H)=>(v.value.push(R.props.name),re(H!==0&&!T?ye(R):R))),!y&&d&&$?me(d,(x?g.length:S.length)!==0):null,T?null:l("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return l("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$&&d?l(ve,{onResize:this.handleTabsResize},{default:()=>b}):b,$?l("div",{class:`${e}-tabs-pad`}):null,$?null:l("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},P=L?"top":c;return l("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${i}-type`,`${e}-tabs--${m}-size`,T&&`${e}-tabs--flex`,`${e}-tabs--${P}`],style:this.cssVars},l("div",{class:[`${e}-tabs-nav--${i}-type`,`${e}-tabs-nav--${P}`,`${e}-tabs-nav`]},ue(k,b=>b&&l("div",{class:`${e}-tabs-nav__prefix`},b)),L?l("div",{class:`${e}-tabs-rail`,ref:"tabsElRef"},l("div",{class:`${e}-tabs-capsule`,ref:"segmentCapsuleElRef"},l("div",{class:`${e}-tabs-wrapper`},l("div",{class:`${e}-tabs-tab`}))),x?g.map((b,R)=>(v.value.push(b.props.name),l(ne,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:R!==0}),b.children?{default:b.children.tab}:void 0))):S.map((b,R)=>(v.value.push(b.props.name),R===0?b:ye(b)))):l(ve,{onResize:this.handleNavResize},{default:()=>l("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(P)?l(Et,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:I}):l("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:"yScrollElRef"},I()))}),y&&d&&$?me(d,!0):null,ue(B,b=>b&&l("div",{class:`${e}-tabs-nav__suffix`},b))),x&&(this.animated&&(P==="top"||P==="bottom")?l("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,C]},xe(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):xe(g,this.mergedValue,this.renderedNames)))}});function xe(e,i,c,y,d,m,v){const w=[];return e.forEach(C=>{const{name:h,displayDirective:f,"display-directive":k}=C.props,B=S=>f===S||k===S,g=i===h;if(C.key!==void 0&&(C.key=h),g||B("show")||B("show:lazy")&&c.has(h)){c.has(h)||c.add(h);const S=!B("if");w.push(S?Tt(C,[[$t,g]]):C)}}),v?l(Pt,{name:`${v}-transition`,onBeforeLeave:y,onEnter:d,onAfterEnter:m},{default:()=>w}):w}function me(e,i){return l(ne,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:i,disabled:typeof e=="object"&&e.disabled})}function ye(e){const i=Wt(e);return i.props?i.props.internalLeftPadded=!0:i.props={internalLeftPadded:!0},i}function re(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{Xt as N,Ut as a};
