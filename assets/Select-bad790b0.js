import{a as ae,bD as en,s as Ke,bE as tn,bF as nn,e as z,r as F,a8 as je,l as nt,h as l,aS as on,ae as ut,aV as De,bG as ct,aU as xt,bH as ln,i as Ct,a7 as Se,L as it,a$ as St,I as P,J as $,T as ne,Q as oe,R as ot,a_ as Tt,b as Re,u as rt,c as Rt,a5 as J,bI as rn,ah as Te,a2 as ft,K as at,aC as ht,aW as Ft,a4 as an,aD as st,aF as Ot,j as me,aH as Be,aJ as sn,az as dn,aN as un,bJ as cn,V as fn,bK as hn,$ as vn,aA as gn,bL as bn,br as pn,bM as mn,bN as vt,bO as wn,bP as yn,bQ as xn,a6 as ue}from"./index-ef01de82.js";import{u as gt}from"./use-merged-state-ce0341c7.js";import{u as Cn}from"./use-locale-a19c5e17.js";import{u as Sn}from"./use-compitable-fa2e2ca8.js";import{N as Je}from"./Tag-67ce11ca.js";import{a as Tn,V as bt,c as Rn}from"./create-cec433ba.js";import{b as Fn,i as dt,d as On,N as Mn,u as lt,V as Pn,a as kn,c as zn}from"./Popover-96504f68.js";import{g as In}from"./attribute-2ee9e579.js";import{c as Bn,a as Ze}from"./cssr-5ab5e52d.js";import{h as We}from"./happens-in-d88e25de.js";import{N as _n}from"./Empty-43382ce5.js";function Qe(e){const n=e.filter(o=>o!==void 0);if(n.length!==0)return n.length===1?n[0]:o=>{e.forEach(d=>{d&&d(o)})}}function pt(e){return e&-e}class $n{constructor(n,o){this.l=n,this.min=o;const d=new Array(n+1);for(let a=0;a<n+1;++a)d[a]=0;this.ft=d}add(n,o){if(o===0)return;const{l:d,ft:a}=this;for(n+=1;n<=d;)a[n]+=o,n+=pt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:o,min:d,l:a}=this;if(n>a)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let c=n*d;for(;n>0;)c+=o[n],n-=pt(n);return c}getBound(n){let o=0,d=this.l;for(;d>o;){const a=Math.floor((o+d)/2),c=this.sum(a);if(c>n){d=a;continue}else if(c<n){if(o===a)return this.sum(o+1)<=n?o+1:a;o=a}else return a}return o}}let Ve;function Ln(){return typeof document>"u"?!1:(Ve===void 0&&("matchMedia"in window?Ve=window.matchMedia("(pointer:coarse)").matches:Ve=!1),Ve)}let et;function mt(){return typeof document>"u"?1:(et===void 0&&(et="chrome"in window?window.devicePixelRatio:1),et)}const Nn=Ze(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ze("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ze("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),En=ae({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=en();Nn.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Bn,ssr:n}),Ke(()=>{const{defaultScrollIndex:h,defaultScrollKey:b}=e;h!=null?p({index:h}):b!=null&&p({key:b})});let o=!1,d=!1;tn(()=>{if(o=!1,!d){d=!0;return}p({top:V.value,left:C})}),nn(()=>{o=!0,d||(d=!0)});const a=z(()=>{const h=new Map,{keyField:b}=e;return e.items.forEach((m,_)=>{h.set(m[b],_)}),h}),c=F(null),g=F(void 0),s=new Map,k=z(()=>{const{items:h,itemSize:b,keyField:m}=e,_=new $n(h.length,b);return h.forEach((L,N)=>{const E=L[m],A=s.get(E);A!==void 0&&_.add(N,A)}),_}),I=F(0);let C=0;const V=F(0),D=je(()=>Math.max(k.value.getBound(V.value-nt(e.paddingTop))-1,0)),B=z(()=>{const{value:h}=g;if(h===void 0)return[];const{items:b,itemSize:m}=e,_=D.value,L=Math.min(_+Math.ceil(h/m+1),b.length-1),N=[];for(let E=_;E<=L;++E)N.push(b[E]);return N}),p=(h,b)=>{if(typeof h=="number"){O(h,b,"auto");return}const{left:m,top:_,index:L,key:N,position:E,behavior:A,debounce:Q=!0}=h;if(m!==void 0||_!==void 0)O(m,_,A);else if(L!==void 0)S(L,A,Q);else if(N!==void 0){const Y=a.value.get(N);Y!==void 0&&S(Y,A,Q)}else E==="bottom"?O(0,Number.MAX_SAFE_INTEGER,A):E==="top"&&O(0,0,A)};let y,H=null;function S(h,b,m){const{value:_}=k,L=_.sum(h)+nt(e.paddingTop);if(!m)c.value.scrollTo({left:0,top:L,behavior:b});else{y=h,H!==null&&window.clearTimeout(H),H=window.setTimeout(()=>{y=void 0,H=null},16);const{scrollTop:N,offsetHeight:E}=c.value;if(L>N){const A=_.get(h);L+A<=N+E||c.value.scrollTo({left:0,top:L+A-E,behavior:b})}else c.value.scrollTo({left:0,top:L,behavior:b})}}function O(h,b,m){c.value.scrollTo({left:h,top:b,behavior:m})}function j(h,b){var m,_,L;if(o||e.ignoreItemResize||se(b.target))return;const{value:N}=k,E=a.value.get(h),A=N.get(E),Q=(L=(_=(m=b.borderBoxSize)===null||m===void 0?void 0:m[0])===null||_===void 0?void 0:_.blockSize)!==null&&L!==void 0?L:b.contentRect.height;if(Q===A)return;Q-e.itemSize===0?s.delete(h):s.set(h,Q-e.itemSize);const re=Q-A;if(re===0)return;N.add(E,re);const i=c.value;if(i!=null){if(y===void 0){const f=N.sum(E);i.scrollTop>f&&i.scrollBy(0,re)}else if(E<y)i.scrollBy(0,re);else if(E===y){const f=N.sum(E);Q+f>i.scrollTop+i.offsetHeight&&i.scrollBy(0,re)}ie()}I.value++}const Z=!Ln();let G=!1;function K(h){var b;(b=e.onScroll)===null||b===void 0||b.call(e,h),(!Z||!G)&&ie()}function X(h){var b;if((b=e.onWheel)===null||b===void 0||b.call(e,h),Z){const m=c.value;if(m!=null){if(h.deltaX===0&&(m.scrollTop===0&&h.deltaY<=0||m.scrollTop+m.offsetHeight>=m.scrollHeight&&h.deltaY>=0))return;h.preventDefault(),m.scrollTop+=h.deltaY/mt(),m.scrollLeft+=h.deltaX/mt(),ie(),G=!0,Fn(()=>{G=!1})}}}function le(h){if(o||se(h.target)||h.contentRect.height===g.value)return;g.value=h.contentRect.height;const{onResize:b}=e;b!==void 0&&b(h)}function ie(){const{value:h}=c;h!=null&&(V.value=h.scrollTop,C=h.scrollLeft)}function se(h){let b=h;for(;b!==null;){if(b.style.display==="none")return!0;b=b.parentElement}return!1}return{listHeight:g,listStyle:{overflow:"auto"},keyToIndex:a,itemsStyle:z(()=>{const{itemResizable:h}=e,b=De(k.value.sum());return I.value,[e.itemsStyle,{boxSizing:"content-box",height:h?"":b,minHeight:h?b:"",paddingTop:De(e.paddingTop),paddingBottom:De(e.paddingBottom)}]}),visibleItemsStyle:z(()=>(I.value,{transform:`translateY(${De(k.value.sum(D.value))})`})),viewportItems:B,listElRef:c,itemsElRef:F(null),scrollTo:p,handleListResize:le,handleListScroll:K,handleListWheel:X,handleItemResize:j}},render(){const{itemResizable:e,keyField:n,keyToIndex:o,visibleItemsTag:d}=this;return l(ut,{onResize:this.handleListResize},{default:()=>{var a,c;return l("div",on(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?l("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[l(d,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(g=>{const s=g[n],k=o.get(s),I=this.$slots.default({item:g,index:k})[0];return e?l(ut,{key:s,onResize:C=>this.handleItemResize(s,C)},{default:()=>I}):(I.key=s,I)})})]):(c=(a=this.$slots).empty)===null||c===void 0?void 0:c.call(a)])}})}});function Mt(e,n){n&&(Ke(()=>{const{value:o}=e;o&&ct.registerHandler(o,n)}),xt(()=>{const{value:o}=e;o&&ct.unregisterHandler(o)}))}const An=ae({name:"Checkmark",render(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},l("g",{fill:"none"},l("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),Dn=ae({name:"ChevronDown",render(){return l("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),Vn=ln("clear",l("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),jn=ae({props:{onFocus:Function,onBlur:Function},setup(e){return()=>l("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function Wn(e,n){return l(St,{name:"fade-in-scale-up-transition"},{default:()=>e?l(it,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>l(An)}):null})}const wt=ae({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:o,multipleRef:d,valueSetRef:a,renderLabelRef:c,renderOptionRef:g,labelFieldRef:s,valueFieldRef:k,showCheckmarkRef:I,nodePropsRef:C,handleOptionClick:V,handleOptionMouseEnter:D}=Ct(dt),B=je(()=>{const{value:S}=o;return S?e.tmNode.key===S.key:!1});function p(S){const{tmNode:O}=e;O.disabled||V(S,O)}function y(S){const{tmNode:O}=e;O.disabled||D(S,O)}function H(S){const{tmNode:O}=e,{value:j}=B;O.disabled||j||D(S,O)}return{multiple:d,isGrouped:je(()=>{const{tmNode:S}=e,{parent:O}=S;return O&&O.rawNode.type==="group"}),showCheckmark:I,nodeProps:C,isPending:B,isSelected:je(()=>{const{value:S}=n,{value:O}=d;if(S===null)return!1;const j=e.tmNode.rawNode[k.value];if(O){const{value:Z}=a;return Z.has(j)}else return S===j}),labelField:s,renderLabel:c,renderOption:g,handleMouseMove:H,handleMouseEnter:y,handleClick:p}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:o,isPending:d,isGrouped:a,showCheckmark:c,nodeProps:g,renderOption:s,renderLabel:k,handleClick:I,handleMouseEnter:C,handleMouseMove:V}=this,D=Wn(o,e),B=k?[k(n,o),c&&D]:[Se(n[this.labelField],n,o),c&&D],p=g==null?void 0:g(n),y=l("div",Object.assign({},p,{class:[`${e}-base-select-option`,n.class,p==null?void 0:p.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:o,[`${e}-base-select-option--grouped`]:a,[`${e}-base-select-option--pending`]:d,[`${e}-base-select-option--show-checkmark`]:c}],style:[(p==null?void 0:p.style)||"",n.style||""],onClick:Qe([I,p==null?void 0:p.onClick]),onMouseenter:Qe([C,p==null?void 0:p.onMouseenter]),onMousemove:Qe([V,p==null?void 0:p.onMousemove])}),l("div",{class:`${e}-base-select-option__content`},B));return n.render?n.render({node:y,option:n,selected:o}):s?s({node:y,option:n,selected:o}):y}}),yt=ae({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:o,nodePropsRef:d}=Ct(dt);return{labelField:o,nodeProps:d,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:o,nodeProps:d,tmNode:{rawNode:a}}=this,c=d==null?void 0:d(a),g=n?n(a,!1):Se(a[this.labelField],a,!1),s=l("div",Object.assign({},c,{class:[`${e}-base-select-group-header`,c==null?void 0:c.class]}),g);return a.render?a.render({node:s,option:a}):o?o({node:s,option:a,selected:!1}):s}}),Hn=P("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[P("scrollbar",`
 max-height: var(--n-height);
 `),P("virtual-list",`
 max-height: var(--n-height);
 `),P("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[$("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),P("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),P("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),$("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),$("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),$("header",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),$("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),P("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),P("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[ne("show-checkmark",`
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `),oe("&::before",`
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `),oe("&:active",`
 color: var(--n-option-text-color-pressed);
 `),ne("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),ne("pending",[oe("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),ne("selected",`
 color: var(--n-option-text-color-active);
 `,[oe("&::before",`
 background-color: var(--n-option-color-active);
 `),ne("pending",[oe("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),ne("disabled",`
 cursor: not-allowed;
 `,[ot("selected",`
 color: var(--n-option-text-color-disabled);
 `),ne("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),$("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[Tt({enterScale:"0.5"})])])]),Kn=ae({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Re.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=rt(e),d=Rt("InternalSelectMenu",o,n),a=Re("InternalSelectMenu","-internal-select-menu",Hn,rn,e,J(e,"clsPrefix")),c=F(null),g=F(null),s=F(null),k=z(()=>e.treeMate.getFlattenedNodes()),I=z(()=>Tn(k.value)),C=F(null);function V(){const{treeMate:i}=e;let f=null;const{value:W}=e;W===null?f=i.getFirstAvailableNode():(e.multiple?f=i.getNode((W||[])[(W||[]).length-1]):f=i.getNode(W),(!f||f.disabled)&&(f=i.getFirstAvailableNode())),_(f||null)}function D(){const{value:i}=C;i&&!e.treeMate.getNode(i.key)&&(C.value=null)}let B;Te(()=>e.show,i=>{i?B=Te(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?V():D(),Ot(L)):D()},{immediate:!0}):B==null||B()},{immediate:!0}),xt(()=>{B==null||B()});const p=z(()=>nt(a.value.self[me("optionHeight",e.size)])),y=z(()=>Be(a.value.self[me("padding",e.size)])),H=z(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),S=z(()=>{const i=k.value;return i&&i.length===0});function O(i){const{onToggle:f}=e;f&&f(i)}function j(i){const{onScroll:f}=e;f&&f(i)}function Z(i){var f;(f=s.value)===null||f===void 0||f.sync(),j(i)}function G(){var i;(i=s.value)===null||i===void 0||i.sync()}function K(){const{value:i}=C;return i||null}function X(i,f){f.disabled||_(f,!1)}function le(i,f){f.disabled||O(f)}function ie(i){var f;We(i,"action")||(f=e.onKeyup)===null||f===void 0||f.call(e,i)}function se(i){var f;We(i,"action")||(f=e.onKeydown)===null||f===void 0||f.call(e,i)}function h(i){var f;(f=e.onMousedown)===null||f===void 0||f.call(e,i),!e.focusable&&i.preventDefault()}function b(){const{value:i}=C;i&&_(i.getNext({loop:!0}),!0)}function m(){const{value:i}=C;i&&_(i.getPrev({loop:!0}),!0)}function _(i,f=!1){C.value=i,f&&L()}function L(){var i,f;const W=C.value;if(!W)return;const ce=I.value(W.key);ce!==null&&(e.virtualScroll?(i=g.value)===null||i===void 0||i.scrollTo({index:ce}):(f=s.value)===null||f===void 0||f.scrollTo({index:ce,elSize:p.value}))}function N(i){var f,W;!((f=c.value)===null||f===void 0)&&f.contains(i.target)&&((W=e.onFocus)===null||W===void 0||W.call(e,i))}function E(i){var f,W;!((f=c.value)===null||f===void 0)&&f.contains(i.relatedTarget)||(W=e.onBlur)===null||W===void 0||W.call(e,i)}ft(dt,{handleOptionMouseEnter:X,handleOptionClick:le,valueSetRef:H,pendingTmNodeRef:C,nodePropsRef:J(e,"nodeProps"),showCheckmarkRef:J(e,"showCheckmark"),multipleRef:J(e,"multiple"),valueRef:J(e,"value"),renderLabelRef:J(e,"renderLabel"),renderOptionRef:J(e,"renderOption"),labelFieldRef:J(e,"labelField"),valueFieldRef:J(e,"valueField")}),ft(On,c),Ke(()=>{const{value:i}=s;i&&i.sync()});const A=z(()=>{const{size:i}=e,{common:{cubicBezierEaseInOut:f},self:{height:W,borderRadius:ce,color:we,groupHeaderTextColor:ye,actionDividerColor:fe,optionTextColorPressed:te,optionTextColor:xe,optionTextColorDisabled:he,optionTextColorActive:Fe,optionOpacityDisabled:Oe,optionCheckColor:Me,actionTextColor:Pe,optionColorPending:ge,optionColorActive:be,loadingColor:ke,loadingSize:ze,optionColorActivePending:Ie,[me("optionFontSize",i)]:Ce,[me("optionHeight",i)]:pe,[me("optionPadding",i)]:ee}}=a.value;return{"--n-height":W,"--n-action-divider-color":fe,"--n-action-text-color":Pe,"--n-bezier":f,"--n-border-radius":ce,"--n-color":we,"--n-option-font-size":Ce,"--n-group-header-text-color":ye,"--n-option-check-color":Me,"--n-option-color-pending":ge,"--n-option-color-active":be,"--n-option-color-active-pending":Ie,"--n-option-height":pe,"--n-option-opacity-disabled":Oe,"--n-option-text-color":xe,"--n-option-text-color-active":Fe,"--n-option-text-color-disabled":he,"--n-option-text-color-pressed":te,"--n-option-padding":ee,"--n-option-padding-left":Be(ee,"left"),"--n-option-padding-right":Be(ee,"right"),"--n-loading-color":ke,"--n-loading-size":ze}}),{inlineThemeDisabled:Q}=e,Y=Q?at("internal-select-menu",z(()=>e.size[0]),A,e):void 0,re={selfRef:c,next:b,prev:m,getPendingTmNode:K};return Mt(c,e.onResize),Object.assign({mergedTheme:a,mergedClsPrefix:n,rtlEnabled:d,virtualListRef:g,scrollbarRef:s,itemSize:p,padding:y,flattenedNodes:k,empty:S,virtualListContainer(){const{value:i}=g;return i==null?void 0:i.listElRef},virtualListContent(){const{value:i}=g;return i==null?void 0:i.itemsElRef},doScroll:j,handleFocusin:N,handleFocusout:E,handleKeyUp:ie,handleKeyDown:se,handleMouseDown:h,handleVirtualListResize:G,handleVirtualListScroll:Z,cssVars:Q?void 0:A,themeClass:Y==null?void 0:Y.themeClass,onRender:Y==null?void 0:Y.onRender},re)},render(){const{$slots:e,virtualScroll:n,clsPrefix:o,mergedTheme:d,themeClass:a,onRender:c}=this;return c==null||c(),l("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${o}-base-select-menu`,this.rtlEnabled&&`${o}-base-select-menu--rtl`,a,this.multiple&&`${o}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},ht(e.header,g=>g&&l("div",{class:`${o}-base-select-menu__header`,"data-header":!0,key:"header"},g)),this.loading?l("div",{class:`${o}-base-select-menu__loading`},l(Ft,{clsPrefix:o,strokeWidth:20})):this.empty?l("div",{class:`${o}-base-select-menu__empty`,"data-empty":!0},st(e.empty,()=>[l(_n,{theme:d.peers.Empty,themeOverrides:d.peerOverrides.Empty})])):l(an,{ref:"scrollbarRef",theme:d.peers.Scrollbar,themeOverrides:d.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?l(En,{ref:"virtualListRef",class:`${o}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:g})=>g.isGroup?l(yt,{key:g.key,clsPrefix:o,tmNode:g}):g.ignored?null:l(wt,{clsPrefix:o,key:g.key,tmNode:g})}):l("div",{class:`${o}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(g=>g.isGroup?l(yt,{key:g.key,clsPrefix:o,tmNode:g}):l(wt,{clsPrefix:o,key:g.key,tmNode:g})))}),ht(e.action,g=>g&&[l("div",{class:`${o}-base-select-menu__action`,"data-action":!0,key:"action"},g),l(jn,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),Un=P("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[oe(">",[$("clear",`
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `,[oe("&:hover",`
 color: var(--n-clear-color-hover)!important;
 `),oe("&:active",`
 color: var(--n-clear-color-pressed)!important;
 `)]),$("placeholder",`
 display: flex;
 `),$("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[sn({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),qn=ae({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return dn("-base-clear",Un,J(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return l("div",{class:`${e}-base-clear`},l(un,null,{default:()=>{var n,o;return this.show?l("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},st(this.$slots.icon,()=>[l(it,{clsPrefix:e},{default:()=>l(Vn,null)})])):l("div",{key:"icon",class:`${e}-base-clear__placeholder`},(o=(n=this.$slots).placeholder)===null||o===void 0?void 0:o.call(n))}}))}}),Gn=ae({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:o}=e;return l(Ft,{clsPrefix:o,class:`${o}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?l(qn,{clsPrefix:o,show:e.showClear,onClear:e.onClear},{placeholder:()=>l(it,{clsPrefix:o,class:`${o}-base-suffix__arrow`},{default:()=>st(n.default,()=>[l(Dn,null)])})}):null})}}}),Yn=oe([P("base-selection",`
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[P("base-loading",`
 color: var(--n-loading-color);
 `),P("base-selection-tags","min-height: var(--n-height);"),$("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),$("state-border",`
 z-index: 1;
 border-color: #0000;
 `),P("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[$("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),P("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[$("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),P("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[$("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),P("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),P("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[P("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[$("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),$("render-label",`
 color: var(--n-text-color);
 `)]),ot("disabled",[oe("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),ne("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),ne("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),P("base-selection-label","background-color: var(--n-color-active);"),P("base-selection-tags","background-color: var(--n-color-active);")])]),ne("disabled","cursor: not-allowed;",[$("arrow",`
 color: var(--n-arrow-color-disabled);
 `),P("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[P("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),$("render-label",`
 color: var(--n-text-color-disabled);
 `)]),P("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),P("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),P("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[$("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),$("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>ne(`${e}-status`,[$("state-border",`border: var(--n-border-${e});`),ot("disabled",[oe("&:hover",[$("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),ne("active",[$("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),P("base-selection-label",`background-color: var(--n-color-active-${e});`),P("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),ne("focus",[$("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),P("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),P("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[oe("&:last-child","padding-right: 0;"),P("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[$("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),Xn=ae({name:"InternalSelection",props:Object.assign(Object.assign({},Re.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],ellipsisTagPopoverProps:Object,onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:o}=rt(e),d=Rt("InternalSelection",o,n),a=F(null),c=F(null),g=F(null),s=F(null),k=F(null),I=F(null),C=F(null),V=F(null),D=F(null),B=F(null),p=F(!1),y=F(!1),H=F(!1),S=Re("InternalSelection","-internal-selection",Yn,cn,e,J(e,"clsPrefix")),O=z(()=>e.clearable&&!e.disabled&&(H.value||e.active)),j=z(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Se(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),Z=z(()=>{const r=e.selectedOption;if(r)return r[e.labelField]}),G=z(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function K(){var r;const{value:v}=a;if(v){const{value:U}=c;U&&(U.style.width=`${v.offsetWidth}px`,e.maxTagCount!=="responsive"&&((r=D.value)===null||r===void 0||r.sync({showAllItemsBeforeCalculate:!1})))}}function X(){const{value:r}=B;r&&(r.style.display="none")}function le(){const{value:r}=B;r&&(r.style.display="inline-block")}Te(J(e,"active"),r=>{r||X()}),Te(J(e,"pattern"),()=>{e.multiple&&Ot(K)});function ie(r){const{onFocus:v}=e;v&&v(r)}function se(r){const{onBlur:v}=e;v&&v(r)}function h(r){const{onDeleteOption:v}=e;v&&v(r)}function b(r){const{onClear:v}=e;v&&v(r)}function m(r){const{onPatternInput:v}=e;v&&v(r)}function _(r){var v;(!r.relatedTarget||!(!((v=g.value)===null||v===void 0)&&v.contains(r.relatedTarget)))&&ie(r)}function L(r){var v;!((v=g.value)===null||v===void 0)&&v.contains(r.relatedTarget)||se(r)}function N(r){b(r)}function E(){H.value=!0}function A(){H.value=!1}function Q(r){!e.active||!e.filterable||r.target!==c.value&&r.preventDefault()}function Y(r){h(r)}function re(r){if(r.key==="Backspace"&&!i.value&&!e.pattern.length){const{selectedOptions:v}=e;v!=null&&v.length&&Y(v[v.length-1])}}const i=F(!1);let f=null;function W(r){const{value:v}=a;if(v){const U=r.target.value;v.textContent=U,K()}e.ignoreComposition&&i.value?f=r:m(r)}function ce(){i.value=!0}function we(){i.value=!1,e.ignoreComposition&&m(f),f=null}function ye(r){var v;y.value=!0,(v=e.onPatternFocus)===null||v===void 0||v.call(e,r)}function fe(r){var v;y.value=!1,(v=e.onPatternBlur)===null||v===void 0||v.call(e,r)}function te(){var r,v;if(e.filterable)y.value=!1,(r=I.value)===null||r===void 0||r.blur(),(v=c.value)===null||v===void 0||v.blur();else if(e.multiple){const{value:U}=s;U==null||U.blur()}else{const{value:U}=k;U==null||U.blur()}}function xe(){var r,v,U;e.filterable?(y.value=!1,(r=I.value)===null||r===void 0||r.focus()):e.multiple?(v=s.value)===null||v===void 0||v.focus():(U=k.value)===null||U===void 0||U.focus()}function he(){const{value:r}=c;r&&(le(),r.focus())}function Fe(){const{value:r}=c;r&&r.blur()}function Oe(r){const{value:v}=C;v&&v.setTextContent(`+${r}`)}function Me(){const{value:r}=V;return r}function Pe(){return c.value}let ge=null;function be(){ge!==null&&window.clearTimeout(ge)}function ke(){e.active||(be(),ge=window.setTimeout(()=>{G.value&&(p.value=!0)},100))}function ze(){be()}function Ie(r){r||(be(),p.value=!1)}Te(G,r=>{r||(p.value=!1)}),Ke(()=>{fn(()=>{const r=I.value;r&&(e.disabled?r.removeAttribute("tabindex"):r.tabIndex=y.value?-1:0)})}),Mt(g,e.onResize);const{inlineThemeDisabled:Ce}=e,pe=z(()=>{const{size:r}=e,{common:{cubicBezierEaseInOut:v},self:{borderRadius:U,color:Ue,placeholderColor:qe,textColor:_e,paddingSingle:$e,paddingMultiple:Le,caretColor:Ge,colorDisabled:Ye,textColorDisabled:Ne,placeholderColorDisabled:ve,colorActive:t,boxShadowFocus:u,boxShadowActive:w,boxShadowHover:M,border:T,borderFocus:x,borderHover:R,borderActive:q,arrowColor:de,arrowColorDisabled:Xe,loadingColor:kt,colorActiveWarning:zt,boxShadowFocusWarning:It,boxShadowActiveWarning:Bt,boxShadowHoverWarning:_t,borderWarning:$t,borderFocusWarning:Lt,borderHoverWarning:Nt,borderActiveWarning:Et,colorActiveError:At,boxShadowFocusError:Dt,boxShadowActiveError:Vt,boxShadowHoverError:jt,borderError:Wt,borderFocusError:Ht,borderHoverError:Kt,borderActiveError:Ut,clearColor:qt,clearColorHover:Gt,clearColorPressed:Yt,clearSize:Xt,arrowSize:Jt,[me("height",r)]:Zt,[me("fontSize",r)]:Qt}}=S.value,Ee=Be($e),Ae=Be(Le);return{"--n-bezier":v,"--n-border":T,"--n-border-active":q,"--n-border-focus":x,"--n-border-hover":R,"--n-border-radius":U,"--n-box-shadow-active":w,"--n-box-shadow-focus":u,"--n-box-shadow-hover":M,"--n-caret-color":Ge,"--n-color":Ue,"--n-color-active":t,"--n-color-disabled":Ye,"--n-font-size":Qt,"--n-height":Zt,"--n-padding-single-top":Ee.top,"--n-padding-multiple-top":Ae.top,"--n-padding-single-right":Ee.right,"--n-padding-multiple-right":Ae.right,"--n-padding-single-left":Ee.left,"--n-padding-multiple-left":Ae.left,"--n-padding-single-bottom":Ee.bottom,"--n-padding-multiple-bottom":Ae.bottom,"--n-placeholder-color":qe,"--n-placeholder-color-disabled":ve,"--n-text-color":_e,"--n-text-color-disabled":Ne,"--n-arrow-color":de,"--n-arrow-color-disabled":Xe,"--n-loading-color":kt,"--n-color-active-warning":zt,"--n-box-shadow-focus-warning":It,"--n-box-shadow-active-warning":Bt,"--n-box-shadow-hover-warning":_t,"--n-border-warning":$t,"--n-border-focus-warning":Lt,"--n-border-hover-warning":Nt,"--n-border-active-warning":Et,"--n-color-active-error":At,"--n-box-shadow-focus-error":Dt,"--n-box-shadow-active-error":Vt,"--n-box-shadow-hover-error":jt,"--n-border-error":Wt,"--n-border-focus-error":Ht,"--n-border-hover-error":Kt,"--n-border-active-error":Ut,"--n-clear-size":Xt,"--n-clear-color":qt,"--n-clear-color-hover":Gt,"--n-clear-color-pressed":Yt,"--n-arrow-size":Jt}}),ee=Ce?at("internal-selection",z(()=>e.size[0]),pe,e):void 0;return{mergedTheme:S,mergedClearable:O,mergedClsPrefix:n,rtlEnabled:d,patternInputFocused:y,filterablePlaceholder:j,label:Z,selected:G,showTagsPanel:p,isComposing:i,counterRef:C,counterWrapperRef:V,patternInputMirrorRef:a,patternInputRef:c,selfRef:g,multipleElRef:s,singleElRef:k,patternInputWrapperRef:I,overflowRef:D,inputTagElRef:B,handleMouseDown:Q,handleFocusin:_,handleClear:N,handleMouseEnter:E,handleMouseLeave:A,handleDeleteOption:Y,handlePatternKeyDown:re,handlePatternInputInput:W,handlePatternInputBlur:fe,handlePatternInputFocus:ye,handleMouseEnterCounter:ke,handleMouseLeaveCounter:ze,handleFocusout:L,handleCompositionEnd:we,handleCompositionStart:ce,onPopoverUpdateShow:Ie,focus:xe,focusInput:he,blur:te,blurInput:Fe,updateCounter:Oe,getCounter:Me,getTail:Pe,renderLabel:e.renderLabel,cssVars:Ce?void 0:pe,themeClass:ee==null?void 0:ee.themeClass,onRender:ee==null?void 0:ee.onRender}},render(){const{status:e,multiple:n,size:o,disabled:d,filterable:a,maxTagCount:c,bordered:g,clsPrefix:s,ellipsisTagPopoverProps:k,onRender:I,renderTag:C,renderLabel:V}=this;I==null||I();const D=c==="responsive",B=typeof c=="number",p=D||B,y=l(hn,null,{default:()=>l(Gn,{clsPrefix:s,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var S,O;return(O=(S=this.$slots).arrow)===null||O===void 0?void 0:O.call(S)}})});let H;if(n){const{labelField:S}=this,O=m=>l("div",{class:`${s}-base-selection-tag-wrapper`,key:m.value},C?C({option:m,handleClose:()=>{this.handleDeleteOption(m)}}):l(Je,{size:o,closable:!m.disabled,disabled:d,onClose:()=>{this.handleDeleteOption(m)},internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>V?V(m,!0):Se(m[S],m,!0)})),j=()=>(B?this.selectedOptions.slice(0,c):this.selectedOptions).map(O),Z=a?l("div",{class:`${s}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:d,value:this.pattern,autofocus:this.autofocus,class:`${s}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),l("span",{ref:"patternInputMirrorRef",class:`${s}-base-selection-input-tag__mirror`},this.pattern)):null,G=D?()=>l("div",{class:`${s}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},l(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:d})):void 0;let K;if(B){const m=this.selectedOptions.length-c;m>0&&(K=l("div",{class:`${s}-base-selection-tag-wrapper`,key:"__counter__"},l(Je,{size:o,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:d},{default:()=>`+${m}`})))}const X=D?a?l(bt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:G,tail:()=>Z}):l(bt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:j,counter:G}):B&&K?j().concat(K):j(),le=p?()=>l("div",{class:`${s}-base-selection-popover`},D?j():this.selectedOptions.map(O)):void 0,ie=p?Object.assign({show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover},k):null,h=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`},l("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)):null,b=a?l("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-tags`},X,D?null:Z,y):l("div",{ref:"multipleElRef",class:`${s}-base-selection-tags`,tabindex:d?void 0:0},X,y);H=l(vn,null,p?l(Mn,Object.assign({},ie,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>b,default:le}):b,h)}else if(a){const S=this.pattern||this.isComposing,O=this.active?!S:!this.selected,j=this.active?!1:this.selected;H=l("div",{ref:"patternInputWrapperRef",class:`${s}-base-selection-label`},l("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${s}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:d,disabled:d,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),j?l("div",{class:`${s}-base-selection-label__render-label ${s}-base-selection-overlay`,key:"input"},l("div",{class:`${s}-base-selection-overlay__wrapper`},C?C({option:this.selectedOption,handleClose:()=>{}}):V?V(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):null,O?l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${s}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,y)}else H=l("div",{ref:"singleElRef",class:`${s}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?l("div",{class:`${s}-base-selection-input`,title:In(this.label),key:"input"},l("div",{class:`${s}-base-selection-input__content`},C?C({option:this.selectedOption,handleClose:()=>{}}):V?V(this.selectedOption,!0):Se(this.label,this.selectedOption,!0))):l("div",{class:`${s}-base-selection-placeholder ${s}-base-selection-overlay`,key:"placeholder"},l("div",{class:`${s}-base-selection-placeholder__inner`},this.placeholder)),y);return l("div",{ref:"selfRef",class:[`${s}-base-selection`,this.rtlEnabled&&`${s}-base-selection--rtl`,this.themeClass,e&&`${s}-base-selection--${e}-status`,{[`${s}-base-selection--active`]:this.active,[`${s}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${s}-base-selection--disabled`]:this.disabled,[`${s}-base-selection--multiple`]:this.multiple,[`${s}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},H,g?l("div",{class:`${s}-base-selection__border`}):null,g?l("div",{class:`${s}-base-selection__state-border`}):null)}});function He(e){return e.type==="group"}function Pt(e){return e.type==="ignored"}function tt(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Jn(e,n){return{getIsGroup:He,getIgnored:Pt,getKey(d){return He(d)?d.name||d.key||"key-required":d[e]},getChildren(d){return d[n]}}}function Zn(e,n,o,d){if(!n)return e;function a(c){if(!Array.isArray(c))return[];const g=[];for(const s of c)if(He(s)){const k=a(s[d]);k.length&&g.push(Object.assign({},s,{[d]:k}))}else{if(Pt(s))continue;n(o,s)&&g.push(s)}return g}return a(e)}function Qn(e,n,o){const d=new Map;return e.forEach(a=>{He(a)?a[o].forEach(c=>{d.set(c[n],c)}):d.set(a[n],a)}),d}const eo=oe([P("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),P("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[Tt({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),to=Object.assign(Object.assign({},Re.props),{to:lt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},keyboard:{type:Boolean,default:!0},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],ellipsisTagPopoverProps:Object,consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),vo=ae({name:"Select",props:to,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:o,namespaceRef:d,inlineThemeDisabled:a}=rt(e),c=Re("Select","-select",eo,wn,e,n),g=F(e.defaultValue),s=J(e,"value"),k=gt(s,g),I=F(!1),C=F(""),V=z(()=>{const{valueField:t,childrenField:u}=e,w=Jn(t,u);return Rn(b.value,w)}),D=z(()=>Qn(se.value,e.valueField,e.childrenField)),B=F(!1),p=gt(J(e,"show"),B),y=F(null),H=F(null),S=F(null),{localeRef:O}=Cn("Select"),j=z(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:O.value.placeholder}),Z=Sn(e,["items","options"]),G=[],K=F([]),X=F([]),le=F(new Map),ie=z(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:u,valueField:w}=e;return M=>({[u]:String(M),[w]:M})}return t===!1?!1:u=>Object.assign(t(u),{value:u})}),se=z(()=>X.value.concat(K.value).concat(Z.value)),h=z(()=>{const{filter:t}=e;if(t)return t;const{labelField:u,valueField:w}=e;return(M,T)=>{if(!T)return!1;const x=T[u];if(typeof x=="string")return tt(M,x);const R=T[w];return typeof R=="string"?tt(M,R):typeof R=="number"?tt(M,String(R)):!1}}),b=z(()=>{if(e.remote)return Z.value;{const{value:t}=se,{value:u}=C;return!u.length||!e.filterable?t:Zn(t,h.value,u,e.childrenField)}});function m(t){const u=e.remote,{value:w}=le,{value:M}=D,{value:T}=ie,x=[];return t.forEach(R=>{if(M.has(R))x.push(M.get(R));else if(u&&w.has(R))x.push(w.get(R));else if(T){const q=T(R);q&&x.push(q)}}),x}const _=z(()=>{if(e.multiple){const{value:t}=k;return Array.isArray(t)?m(t):[]}return null}),L=z(()=>{const{value:t}=k;return!e.multiple&&!Array.isArray(t)?t===null?null:m([t])[0]||null:null}),N=gn(e),{mergedSizeRef:E,mergedDisabledRef:A,mergedStatusRef:Q}=N;function Y(t,u){const{onChange:w,"onUpdate:value":M,onUpdateValue:T}=e,{nTriggerFormChange:x,nTriggerFormInput:R}=N;w&&ue(w,t,u),T&&ue(T,t,u),M&&ue(M,t,u),g.value=t,x(),R()}function re(t){const{onBlur:u}=e,{nTriggerFormBlur:w}=N;u&&ue(u,t),w()}function i(){const{onClear:t}=e;t&&ue(t)}function f(t){const{onFocus:u,showOnFocus:w}=e,{nTriggerFormFocus:M}=N;u&&ue(u,t),M(),w&&fe()}function W(t){const{onSearch:u}=e;u&&ue(u,t)}function ce(t){const{onScroll:u}=e;u&&ue(u,t)}function we(){var t;const{remote:u,multiple:w}=e;if(u){const{value:M}=le;if(w){const{valueField:T}=e;(t=_.value)===null||t===void 0||t.forEach(x=>{M.set(x[T],x)})}else{const T=L.value;T&&M.set(T[e.valueField],T)}}}function ye(t){const{onUpdateShow:u,"onUpdate:show":w}=e;u&&ue(u,t),w&&ue(w,t),B.value=t}function fe(){A.value||(ye(!0),B.value=!0,e.filterable&&Le())}function te(){ye(!1)}function xe(){C.value="",X.value=G}const he=F(!1);function Fe(){e.filterable&&(he.value=!0)}function Oe(){e.filterable&&(he.value=!1,p.value||xe())}function Me(){A.value||(p.value?e.filterable?Le():te():fe())}function Pe(t){var u,w;!((w=(u=S.value)===null||u===void 0?void 0:u.selfRef)===null||w===void 0)&&w.contains(t.relatedTarget)||(I.value=!1,re(t),te())}function ge(t){f(t),I.value=!0}function be(t){I.value=!0}function ke(t){var u;!((u=y.value)===null||u===void 0)&&u.$el.contains(t.relatedTarget)||(I.value=!1,re(t),te())}function ze(){var t;(t=y.value)===null||t===void 0||t.focus(),te()}function Ie(t){var u;p.value&&(!((u=y.value)===null||u===void 0)&&u.$el.contains(yn(t))||te())}function Ce(t){if(!Array.isArray(t))return[];if(ie.value)return Array.from(t);{const{remote:u}=e,{value:w}=D;if(u){const{value:M}=le;return t.filter(T=>w.has(T)||M.has(T))}else return t.filter(M=>w.has(M))}}function pe(t){ee(t.rawNode)}function ee(t){if(A.value)return;const{tag:u,remote:w,clearFilterAfterSelect:M,valueField:T}=e;if(u&&!w){const{value:x}=X,R=x[0]||null;if(R){const q=K.value;q.length?q.push(R):K.value=[R],X.value=G}}if(w&&le.value.set(t[T],t),e.multiple){const x=Ce(k.value),R=x.findIndex(q=>q===t[T]);if(~R){if(x.splice(R,1),u&&!w){const q=r(t[T]);~q&&(K.value.splice(q,1),M&&(C.value=""))}}else x.push(t[T]),M&&(C.value="");Y(x,m(x))}else{if(u&&!w){const x=r(t[T]);~x?K.value=[K.value[x]]:K.value=G}$e(),te(),Y(t[T],t)}}function r(t){return K.value.findIndex(w=>w[e.valueField]===t)}function v(t){p.value||fe();const{value:u}=t.target;C.value=u;const{tag:w,remote:M}=e;if(W(u),w&&!M){if(!u){X.value=G;return}const{onCreate:T}=e,x=T?T(u):{[e.labelField]:u,[e.valueField]:u},{valueField:R,labelField:q}=e;Z.value.some(de=>de[R]===x[R]||de[q]===x[q])||K.value.some(de=>de[R]===x[R]||de[q]===x[q])?X.value=G:X.value=[x]}}function U(t){t.stopPropagation();const{multiple:u}=e;!u&&e.filterable&&te(),i(),u?Y([],[]):Y(null,null)}function Ue(t){!We(t,"action")&&!We(t,"empty")&&t.preventDefault()}function qe(t){ce(t)}function _e(t){var u,w,M,T,x;if(!e.keyboard){t.preventDefault();return}switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((u=y.value)===null||u===void 0)&&u.isComposing)){if(p.value){const R=(w=S.value)===null||w===void 0?void 0:w.getPendingTmNode();R?pe(R):e.filterable||(te(),$e())}else if(fe(),e.tag&&he.value){const R=X.value[0];if(R){const q=R[e.valueField],{value:de}=k;e.multiple&&Array.isArray(de)&&de.some(Xe=>Xe===q)||ee(R)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;p.value&&((M=S.value)===null||M===void 0||M.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;p.value?(T=S.value)===null||T===void 0||T.next():fe();break;case"Escape":p.value&&(xn(t),te()),(x=y.value)===null||x===void 0||x.focus();break}}function $e(){var t;(t=y.value)===null||t===void 0||t.focus()}function Le(){var t;(t=y.value)===null||t===void 0||t.focusInput()}function Ge(){var t;p.value&&((t=H.value)===null||t===void 0||t.syncPosition())}we(),Te(J(e,"options"),we);const Ye={focus:()=>{var t;(t=y.value)===null||t===void 0||t.focus()},focusInput:()=>{var t;(t=y.value)===null||t===void 0||t.focusInput()},blur:()=>{var t;(t=y.value)===null||t===void 0||t.blur()},blurInput:()=>{var t;(t=y.value)===null||t===void 0||t.blurInput()}},Ne=z(()=>{const{self:{menuBoxShadow:t}}=c.value;return{"--n-menu-box-shadow":t}}),ve=a?at("select",void 0,Ne,e):void 0;return Object.assign(Object.assign({},Ye),{mergedStatus:Q,mergedClsPrefix:n,mergedBordered:o,namespace:d,treeMate:V,isMounted:bn(),triggerRef:y,menuRef:S,pattern:C,uncontrolledShow:B,mergedShow:p,adjustedTo:lt(e),uncontrolledValue:g,mergedValue:k,followerRef:H,localizedPlaceholder:j,selectedOption:L,selectedOptions:_,mergedSize:E,mergedDisabled:A,focused:I,activeWithoutMenuOpen:he,inlineThemeDisabled:a,onTriggerInputFocus:Fe,onTriggerInputBlur:Oe,handleTriggerOrMenuResize:Ge,handleMenuFocus:be,handleMenuBlur:ke,handleMenuTabOut:ze,handleTriggerClick:Me,handleToggle:pe,handleDeleteOption:ee,handlePatternInput:v,handleClear:U,handleTriggerBlur:Pe,handleTriggerFocus:ge,handleKeydown:_e,handleMenuAfterLeave:xe,handleMenuClickOutside:Ie,handleMenuScroll:qe,handleMenuKeydown:_e,handleMenuMousedown:Ue,mergedTheme:c,cssVars:a?void 0:Ne,themeClass:ve==null?void 0:ve.themeClass,onRender:ve==null?void 0:ve.onRender})},render(){return l("div",{class:`${this.mergedClsPrefix}-select`},l(Pn,null,{default:()=>[l(kn,null,{default:()=>l(Xn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,ellipsisTagPopoverProps:this.ellipsisTagPopoverProps,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),l(zn,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===lt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>l(St,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,o;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),pn(l(Kn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(o=this.menuProps)===null||o===void 0?void 0:o.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var d,a;return[(a=(d=this.$slots).empty)===null||a===void 0?void 0:a.call(d)]},header:()=>{var d,a;return[(a=(d=this.$slots).header)===null||a===void 0?void 0:a.call(d)]},action:()=>{var d,a;return[(a=(d=this.$slots).action)===null||a===void 0?void 0:a.call(d)]}}),this.displayDirective==="show"?[[mn,this.mergedShow],[vt,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[vt,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{Dn as C,qn as N,En as V,Gn as a,Kn as b,Jn as c,vo as d,Qe as m};
