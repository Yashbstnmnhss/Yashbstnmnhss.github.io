import{d as ce,aU as cn,D as ut,bY as po,bQ as go,g as I,r as P,s as st,bd as At,h as o,aZ as Et,b8 as wt,aV as bo,ak as Ge,ac as mo,bZ as Wt,aj as fn,aB as wo,q as at,m as Be,ae as hn,n as Mt,a as k,j as z,b as Z,k as oe,y as De,ao as vn,u as Me,t as be,b_ as xo,E as Ie,p as St,i as ct,aO as pt,bf as pn,N as gn,aq as it,au as ue,bt as Ct,bb as yo,ai as bn,be as Co,b$ as Fo,A as dt,F as kt,c0 as So,c as mn,bW as ko,e as Pt,c1 as zo,b3 as wn,af as Ro,ap as xn,c2 as Mo,aJ as jt,o as K,aE as Ut,c3 as yn,x as Po,w as Bo,aX as Cn,aF as To,a7 as Oo,aI as Io,c4 as Ht,c5 as _o,c6 as $o,c7 as Ao,c8 as Eo}from"./index-8198a965.js";import{u as Nt}from"./use-locale-34e283f3.js";import{u as bt}from"./use-merged-state-9858bc20.js";import{u as Lo}from"./use-compitable-76448248.js";import{N as It}from"./Tag-1e82a6cd.js";import{c as Fn,a as Ft}from"./cssr-dea1d612.js";import{b as No,i as Vt,c as Vo,a as Sn,p as Kt,u as zt,V as Do,d as Wo,e as jo}from"./Tooltip-18f18b57.js";import{g as Uo}from"./attribute-2ee9e579.js";import{a as Ho,h as mt,c as kn,b as Ko}from"./create-7bda32ce.js";import{N as qo}from"./Empty-a984260c.js";function qt(e){switch(e){case"tiny":return"mini";case"small":return"tiny";case"medium":return"small";case"large":return"medium";case"huge":return"large"}throw Error(`${e} has no smaller size.`)}function gt(e){const n=e.filter(t=>t!==void 0);if(n.length!==0)return n.length===1?n[0]:t=>{e.forEach(a=>{a&&a(t)})}}function Gt(e){return e&-e}class Go{constructor(n,t){this.l=n,this.min=t;const a=new Array(n+1);for(let d=0;d<n+1;++d)a[d]=0;this.ft=a}add(n,t){if(t===0)return;const{l:a,ft:d}=this;for(n+=1;n<=a;)d[n]+=t,n+=Gt(n)}get(n){return this.sum(n+1)-this.sum(n)}sum(n){if(n===void 0&&(n=this.l),n<=0)return 0;const{ft:t,min:a,l:d}=this;if(n>d)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let f=n*a;for(;n>0;)f+=t[n],n-=Gt(n);return f}getBound(n){let t=0,a=this.l;for(;a>t;){const d=Math.floor((t+a)/2),f=this.sum(d);if(f>n){a=d;continue}else if(f<n){if(t===d)return this.sum(t+1)<=n?t+1:d;t=d}else return d}return t}}let xt;function Zo(){return xt===void 0&&("matchMedia"in window?xt=window.matchMedia("(pointer:coarse)").matches:xt=!1),xt}let _t;function Zt(){return _t===void 0&&(_t="chrome"in window?window.devicePixelRatio:1),_t}const Yo=Ft(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[Ft("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[Ft("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),Xo=ce({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(e){const n=cn();Yo.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:Fn,ssr:n}),ut(()=>{const{defaultScrollIndex:F,defaultScrollKey:S}=e;F!=null?h({index:F}):S!=null&&h({key:S})});let t=!1,a=!1;po(()=>{if(t=!1,!a){a=!0;return}h({top:y.value,left:g})}),go(()=>{t=!0,a||(a=!0)});const d=I(()=>{const F=new Map,{keyField:S}=e;return e.items.forEach((N,Q)=>{F.set(N[S],Q)}),F}),f=P(null),u=P(void 0),i=new Map,v=I(()=>{const{items:F,itemSize:S,keyField:N}=e,Q=new Go(F.length,S);return F.forEach((G,j)=>{const E=G[N],D=i.get(E);D!==void 0&&Q.add(j,D)}),Q}),c=P(0);let g=0;const y=P(0),x=st(()=>Math.max(v.value.getBound(y.value-At(e.paddingTop))-1,0)),B=I(()=>{const{value:F}=u;if(F===void 0)return[];const{items:S,itemSize:N}=e,Q=x.value,G=Math.min(Q+Math.ceil(F/N+1),S.length-1),j=[];for(let E=Q;E<=G;++E)j.push(S[E]);return j}),h=(F,S)=>{if(typeof F=="number"){R(F,S,"auto");return}const{left:N,top:Q,index:G,key:j,position:E,behavior:D,debounce:p=!0}=F;if(N!==void 0||Q!==void 0)R(N,Q,D);else if(G!==void 0)_(G,D,p);else if(j!==void 0){const m=d.value.get(j);m!==void 0&&_(m,D,p)}else E==="bottom"?R(0,Number.MAX_SAFE_INTEGER,D):E==="top"&&R(0,0,D)};let T,$=null;function _(F,S,N){const{value:Q}=v,G=Q.sum(F)+At(e.paddingTop);if(!N)f.value.scrollTo({left:0,top:G,behavior:S});else{T=F,$!==null&&window.clearTimeout($),$=window.setTimeout(()=>{T=void 0,$=null},16);const{scrollTop:j,offsetHeight:E}=f.value;if(G>j){const D=Q.get(F);G+D<=j+E||f.value.scrollTo({left:0,top:G+D-E,behavior:S})}else f.value.scrollTo({left:0,top:G,behavior:S})}}function R(F,S,N){f.value.scrollTo({left:F,top:S,behavior:N})}function Y(F,S){var N,Q,G;if(t||e.ignoreItemResize||fe(S.target))return;const{value:j}=v,E=d.value.get(F),D=j.get(E),p=(G=(Q=(N=S.borderBoxSize)===null||N===void 0?void 0:N[0])===null||Q===void 0?void 0:Q.blockSize)!==null&&G!==void 0?G:S.contentRect.height;if(p===D)return;p-e.itemSize===0?i.delete(F):i.set(F,p-e.itemSize);const q=p-D;if(q===0)return;j.add(E,q);const ne=f.value;if(ne!=null){if(T===void 0){const me=j.sum(E);ne.scrollTop>me&&ne.scrollBy(0,q)}else if(E<T)ne.scrollBy(0,q);else if(E===T){const me=j.sum(E);p+me>ne.scrollTop+ne.offsetHeight&&ne.scrollBy(0,q)}de()}c.value++}const le=!Zo();let ee=!1;function X(F){var S;(S=e.onScroll)===null||S===void 0||S.call(e,F),(!le||!ee)&&de()}function J(F){var S;if((S=e.onWheel)===null||S===void 0||S.call(e,F),le){const N=f.value;if(N!=null){if(F.deltaX===0&&(N.scrollTop===0&&F.deltaY<=0||N.scrollTop+N.offsetHeight>=N.scrollHeight&&F.deltaY>=0))return;F.preventDefault(),N.scrollTop+=F.deltaY/Zt(),N.scrollLeft+=F.deltaX/Zt(),de(),ee=!0,No(()=>{ee=!1})}}}function te(F){if(t||fe(F.target)||F.contentRect.height===u.value)return;u.value=F.contentRect.height;const{onResize:S}=e;S!==void 0&&S(F)}function de(){const{value:F}=f;F!=null&&(y.value=F.scrollTop,g=F.scrollLeft)}function fe(F){let S=F;for(;S!==null;){if(S.style.display==="none")return!0;S=S.parentElement}return!1}return{listHeight:u,listStyle:{overflow:"auto"},keyToIndex:d,itemsStyle:I(()=>{const{itemResizable:F}=e,S=wt(v.value.sum());return c.value,[e.itemsStyle,{boxSizing:"content-box",height:F?"":S,minHeight:F?S:"",paddingTop:wt(e.paddingTop),paddingBottom:wt(e.paddingBottom)}]}),visibleItemsStyle:I(()=>(c.value,{transform:`translateY(${wt(v.value.sum(x.value))})`})),viewportItems:B,listElRef:f,itemsElRef:P(null),scrollTo:h,handleListResize:te,handleListScroll:X,handleListWheel:J,handleItemResize:Y}},render(){const{itemResizable:e,keyField:n,keyToIndex:t,visibleItemsTag:a}=this;return o(Et,{onResize:this.handleListResize},{default:()=>{var d,f;return o("div",bo(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[this.items.length!==0?o("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[o(a,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map(u=>{const i=u[n],v=t.get(i),c=this.$slots.default({item:u,index:v})[0];return e?o(Et,{key:i,onResize:g=>this.handleItemResize(i,g)},{default:()=>c}):(c.key=i,c)})})]):(f=(d=this.$slots).empty)===null||f===void 0?void 0:f.call(d)])}})}}),rt="v-hidden",Jo=Ft("[v-hidden]",{display:"none!important"}),Yt=ce({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:n}){const t=P(null),a=P(null);function d(){const{value:u}=t,{getCounter:i,getTail:v}=e;let c;if(i!==void 0?c=i():c=a.value,!u||!c)return;c.hasAttribute(rt)&&c.removeAttribute(rt);const{children:g}=u,y=u.offsetWidth,x=[],B=n.tail?v==null?void 0:v():null;let h=B?B.offsetWidth:0,T=!1;const $=u.children.length-(n.tail?1:0);for(let R=0;R<$-1;++R){if(R<0)continue;const Y=g[R];if(T){Y.hasAttribute(rt)||Y.setAttribute(rt,"");continue}else Y.hasAttribute(rt)&&Y.removeAttribute(rt);const le=Y.offsetWidth;if(h+=le,x[R]=le,h>y){const{updateCounter:ee}=e;for(let X=R;X>=0;--X){const J=$-1-X;ee!==void 0?ee(J):c.textContent=`${J}`;const te=c.offsetWidth;if(h-=x[X],h+te<=y||X===0){T=!0,R=X-1,B&&(R===-1?(B.style.maxWidth=`${y-te}px`,B.style.boxSizing="border-box"):B.style.maxWidth="");break}}}}const{onUpdateOverflow:_}=e;T?_!==void 0&&_(!0):(_!==void 0&&_(!1),c.setAttribute(rt,""))}const f=cn();return Jo.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Fn,ssr:f}),ut(d),{selfRef:t,counterRef:a,sync:d}},render(){const{$slots:e}=this;return Ge(this.sync),o("div",{class:"v-overflow",ref:"selfRef"},[mo(e,"default"),e.counter?e.counter():o("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}});function zn(e,n){n&&(ut(()=>{const{value:t}=e;t&&Wt.registerHandler(t,n)}),fn(()=>{const{value:t}=e;t&&Wt.unregisterHandler(t)}))}const Xt=ce({name:"Backward",render(){return o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",fill:"currentColor"}))}}),Qo=ce({name:"Checkmark",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},o("g",{fill:"none"},o("path",{d:"M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",fill:"currentColor"})))}}),er=ce({name:"Eye",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),o("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),tr=ce({name:"EyeOff",render(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o("path",{d:"M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",fill:"currentColor"}),o("path",{d:"M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",fill:"currentColor"}),o("path",{d:"M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",fill:"currentColor"}),o("path",{d:"M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",fill:"currentColor"}),o("path",{d:"M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",fill:"currentColor"}))}}),Jt=ce({name:"FastBackward",render(){return o("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"}))))}}),Qt=ce({name:"FastForward",render(){return o("svg",{viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"}))))}}),en=ce({name:"Forward",render(){return o("svg",{viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",fill:"currentColor"}))}}),tn=ce({name:"More",render(){return o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"}))))}}),nr=ce({name:"ChevronDown",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",fill:"currentColor"}))}}),or=wo("clear",o("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},o("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},o("g",{fill:"currentColor","fill-rule":"nonzero"},o("path",{d:"M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"}))))),rr=ce({props:{onFocus:Function,onBlur:Function},setup(e){return()=>o("div",{style:"width: 0; height: 0",tabindex:0,onFocus:e.onFocus,onBlur:e.onBlur})}});function ir(e,n){return o(hn,{name:"fade-in-scale-up-transition"},{default:()=>e?o(Be,{clsPrefix:n,class:`${n}-base-select-option__check`},{default:()=>o(Qo)}):null})}const nn=ce({name:"NBaseSelectOption",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(e){const{valueRef:n,pendingTmNodeRef:t,multipleRef:a,valueSetRef:d,renderLabelRef:f,renderOptionRef:u,labelFieldRef:i,valueFieldRef:v,showCheckmarkRef:c,nodePropsRef:g,handleOptionClick:y,handleOptionMouseEnter:x}=Mt(Vt),B=st(()=>{const{value:_}=t;return _?e.tmNode.key===_.key:!1});function h(_){const{tmNode:R}=e;R.disabled||y(_,R)}function T(_){const{tmNode:R}=e;R.disabled||x(_,R)}function $(_){const{tmNode:R}=e,{value:Y}=B;R.disabled||Y||x(_,R)}return{multiple:a,isGrouped:st(()=>{const{tmNode:_}=e,{parent:R}=_;return R&&R.rawNode.type==="group"}),showCheckmark:c,nodeProps:g,isPending:B,isSelected:st(()=>{const{value:_}=n,{value:R}=a;if(_===null)return!1;const Y=e.tmNode.rawNode[v.value];if(R){const{value:le}=d;return le.has(Y)}else return _===Y}),labelField:i,renderLabel:f,renderOption:u,handleMouseMove:$,handleMouseEnter:T,handleClick:h}},render(){const{clsPrefix:e,tmNode:{rawNode:n},isSelected:t,isPending:a,isGrouped:d,showCheckmark:f,nodeProps:u,renderOption:i,renderLabel:v,handleClick:c,handleMouseEnter:g,handleMouseMove:y}=this,x=ir(t,e),B=v?[v(n,t),f&&x]:[at(n[this.labelField],n,t),f&&x],h=u==null?void 0:u(n),T=o("div",Object.assign({},h,{class:[`${e}-base-select-option`,n.class,h==null?void 0:h.class,{[`${e}-base-select-option--disabled`]:n.disabled,[`${e}-base-select-option--selected`]:t,[`${e}-base-select-option--grouped`]:d,[`${e}-base-select-option--pending`]:a,[`${e}-base-select-option--show-checkmark`]:f}],style:[(h==null?void 0:h.style)||"",n.style||""],onClick:gt([c,h==null?void 0:h.onClick]),onMouseenter:gt([g,h==null?void 0:h.onMouseenter]),onMousemove:gt([y,h==null?void 0:h.onMousemove])}),o("div",{class:`${e}-base-select-option__content`},B));return n.render?n.render({node:T,option:n,selected:t}):i?i({node:T,option:n,selected:t}):T}}),on=ce({name:"NBaseSelectGroupHeader",props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){const{renderLabelRef:e,renderOptionRef:n,labelFieldRef:t,nodePropsRef:a}=Mt(Vt);return{labelField:t,nodeProps:a,renderLabel:e,renderOption:n}},render(){const{clsPrefix:e,renderLabel:n,renderOption:t,nodeProps:a,tmNode:{rawNode:d}}=this,f=a==null?void 0:a(d),u=n?n(d,!1):at(d[this.labelField],d,!1),i=o("div",Object.assign({},f,{class:[`${e}-base-select-group-header`,f==null?void 0:f.class]}),u);return d.render?d.render({node:i,option:d}):t?t({node:i,option:d,selected:!1}):i}}),lr=k("base-select-menu",`
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`,[k("scrollbar",`
 max-height: var(--n-height);
 `),k("virtual-list",`
 max-height: var(--n-height);
 `),k("base-select-option",`
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `,[z("content",`
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]),k("base-select-group-header",`
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `),k("base-select-menu-option-wrapper",`
 position: relative;
 width: 100%;
 `),z("loading, empty",`
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `),z("loading",`
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `),z("action",`
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `),k("base-select-group-header",`
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `),k("base-select-option",`
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `,[Z("show-checkmark",`
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
 `),Z("grouped",`
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `),Z("pending",[oe("&::before",`
 background-color: var(--n-option-color-pending);
 `)]),Z("selected",`
 color: var(--n-option-text-color-active);
 `,[oe("&::before",`
 background-color: var(--n-option-color-active);
 `),Z("pending",[oe("&::before",`
 background-color: var(--n-option-color-active-pending);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[De("selected",`
 color: var(--n-option-text-color-disabled);
 `),Z("selected",`
 opacity: var(--n-option-opacity-disabled);
 `)]),z("check",`
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `,[vn({enterScale:"0.5"})])])]),Rn=ce({name:"InternalSelectMenu",props:Object.assign(Object.assign({},Me.props),{clsPrefix:{type:String,required:!0},scrollable:{type:Boolean,default:!0},treeMate:{type:Object,required:!0},multiple:Boolean,size:{type:String,default:"medium"},value:{type:[String,Number,Array],default:null},autoPending:Boolean,virtualScroll:{type:Boolean,default:!0},show:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},loading:Boolean,focusable:Boolean,renderLabel:Function,renderOption:Function,nodeProps:Function,showCheckmark:{type:Boolean,default:!0},onMousedown:Function,onScroll:Function,onFocus:Function,onBlur:Function,onKeyup:Function,onKeydown:Function,onTabOut:Function,onMouseenter:Function,onMouseleave:Function,onResize:Function,resetMenuOnOptionsChange:{type:Boolean,default:!0},inlineThemeDisabled:Boolean,onToggle:Function}),setup(e){const n=Me("InternalSelectMenu","-internal-select-menu",lr,xo,e,be(e,"clsPrefix")),t=P(null),a=P(null),d=P(null),f=I(()=>e.treeMate.getFlattenedNodes()),u=I(()=>Ho(f.value)),i=P(null);function v(){const{treeMate:p}=e;let m=null;const{value:q}=e;q===null?m=p.getFirstAvailableNode():(e.multiple?m=p.getNode((q||[])[(q||[]).length-1]):m=p.getNode(q),(!m||m.disabled)&&(m=p.getFirstAvailableNode())),F(m||null)}function c(){const{value:p}=i;p&&!e.treeMate.getNode(p.key)&&(i.value=null)}let g;Ie(()=>e.show,p=>{p?g=Ie(()=>e.treeMate,()=>{e.resetMenuOnOptionsChange?(e.autoPending?v():c(),Ge(S)):c()},{immediate:!0}):g==null||g()},{immediate:!0}),fn(()=>{g==null||g()});const y=I(()=>At(n.value.self[ue("optionHeight",e.size)])),x=I(()=>Ct(n.value.self[ue("padding",e.size)])),B=I(()=>e.multiple&&Array.isArray(e.value)?new Set(e.value):new Set),h=I(()=>{const p=f.value;return p&&p.length===0});function T(p){const{onToggle:m}=e;m&&m(p)}function $(p){const{onScroll:m}=e;m&&m(p)}function _(p){var m;(m=d.value)===null||m===void 0||m.sync(),$(p)}function R(){var p;(p=d.value)===null||p===void 0||p.sync()}function Y(){const{value:p}=i;return p||null}function le(p,m){m.disabled||F(m,!1)}function ee(p,m){m.disabled||T(m)}function X(p){var m;mt(p,"action")||(m=e.onKeyup)===null||m===void 0||m.call(e,p)}function J(p){var m;mt(p,"action")||(m=e.onKeydown)===null||m===void 0||m.call(e,p)}function te(p){var m;(m=e.onMousedown)===null||m===void 0||m.call(e,p),!e.focusable&&p.preventDefault()}function de(){const{value:p}=i;p&&F(p.getNext({loop:!0}),!0)}function fe(){const{value:p}=i;p&&F(p.getPrev({loop:!0}),!0)}function F(p,m=!1){i.value=p,m&&S()}function S(){var p,m;const q=i.value;if(!q)return;const ne=u.value(q.key);ne!==null&&(e.virtualScroll?(p=a.value)===null||p===void 0||p.scrollTo({index:ne}):(m=d.value)===null||m===void 0||m.scrollTo({index:ne,elSize:y.value}))}function N(p){var m,q;!((m=t.value)===null||m===void 0)&&m.contains(p.target)&&((q=e.onFocus)===null||q===void 0||q.call(e,p))}function Q(p){var m,q;!((m=t.value)===null||m===void 0)&&m.contains(p.relatedTarget)||(q=e.onBlur)===null||q===void 0||q.call(e,p)}St(Vt,{handleOptionMouseEnter:le,handleOptionClick:ee,valueSetRef:B,pendingTmNodeRef:i,nodePropsRef:be(e,"nodeProps"),showCheckmarkRef:be(e,"showCheckmark"),multipleRef:be(e,"multiple"),valueRef:be(e,"value"),renderLabelRef:be(e,"renderLabel"),renderOptionRef:be(e,"renderOption"),labelFieldRef:be(e,"labelField"),valueFieldRef:be(e,"valueField")}),St(Vo,t),ut(()=>{const{value:p}=d;p&&p.sync()});const G=I(()=>{const{size:p}=e,{common:{cubicBezierEaseInOut:m},self:{height:q,borderRadius:ne,color:me,groupHeaderTextColor:xe,actionDividerColor:he,optionTextColorPressed:ke,optionTextColor:Ce,optionTextColorDisabled:ge,optionTextColorActive:se,optionOpacityDisabled:b,optionCheckColor:A,actionTextColor:Fe,optionColorPending:we,optionColorActive:ze,loadingColor:_e,loadingSize:$e,optionColorActivePending:Ae,[ue("optionFontSize",p)]:Re,[ue("optionHeight",p)]:Te,[ue("optionPadding",p)]:ye}}=n.value;return{"--n-height":q,"--n-action-divider-color":he,"--n-action-text-color":Fe,"--n-bezier":m,"--n-border-radius":ne,"--n-color":me,"--n-option-font-size":Re,"--n-group-header-text-color":xe,"--n-option-check-color":A,"--n-option-color-pending":we,"--n-option-color-active":ze,"--n-option-color-active-pending":Ae,"--n-option-height":Te,"--n-option-opacity-disabled":b,"--n-option-text-color":Ce,"--n-option-text-color-active":se,"--n-option-text-color-disabled":ge,"--n-option-text-color-pressed":ke,"--n-option-padding":ye,"--n-option-padding-left":Ct(ye,"left"),"--n-option-padding-right":Ct(ye,"right"),"--n-loading-color":_e,"--n-loading-size":$e}}),{inlineThemeDisabled:j}=e,E=j?ct("internal-select-menu",I(()=>e.size[0]),G,e):void 0,D={selfRef:t,next:de,prev:fe,getPendingTmNode:Y};return zn(t,e.onResize),Object.assign({mergedTheme:n,virtualListRef:a,scrollbarRef:d,itemSize:y,padding:x,flattenedNodes:f,empty:h,virtualListContainer(){const{value:p}=a;return p==null?void 0:p.listElRef},virtualListContent(){const{value:p}=a;return p==null?void 0:p.itemsElRef},doScroll:$,handleFocusin:N,handleFocusout:Q,handleKeyUp:X,handleKeyDown:J,handleMouseDown:te,handleVirtualListResize:R,handleVirtualListScroll:_,cssVars:j?void 0:G,themeClass:E==null?void 0:E.themeClass,onRender:E==null?void 0:E.onRender},D)},render(){const{$slots:e,virtualScroll:n,clsPrefix:t,mergedTheme:a,themeClass:d,onRender:f}=this;return f==null||f(),o("div",{ref:"selfRef",tabindex:this.focusable?0:-1,class:[`${t}-base-select-menu`,d,this.multiple&&`${t}-base-select-menu--multiple`],style:this.cssVars,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onKeyup:this.handleKeyUp,onKeydown:this.handleKeyDown,onMousedown:this.handleMouseDown,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},this.loading?o("div",{class:`${t}-base-select-menu__loading`},o(pn,{clsPrefix:t,strokeWidth:20})):this.empty?o("div",{class:`${t}-base-select-menu__empty`,"data-empty":!0},it(e.empty,()=>[o(qo,{theme:a.peers.Empty,themeOverrides:a.peerOverrides.Empty})])):o(gn,{ref:"scrollbarRef",theme:a.peers.Scrollbar,themeOverrides:a.peerOverrides.Scrollbar,scrollable:this.scrollable,container:n?this.virtualListContainer:void 0,content:n?this.virtualListContent:void 0,onScroll:n?void 0:this.doScroll},{default:()=>n?o(Xo,{ref:"virtualListRef",class:`${t}-virtual-list`,items:this.flattenedNodes,itemSize:this.itemSize,showScrollbar:!1,paddingTop:this.padding.top,paddingBottom:this.padding.bottom,onResize:this.handleVirtualListResize,onScroll:this.handleVirtualListScroll,itemResizable:!0},{default:({item:u})=>u.isGroup?o(on,{key:u.key,clsPrefix:t,tmNode:u}):u.ignored?null:o(nn,{clsPrefix:t,key:u.key,tmNode:u})}):o("div",{class:`${t}-base-select-menu-option-wrapper`,style:{paddingTop:this.padding.top,paddingBottom:this.padding.bottom}},this.flattenedNodes.map(u=>u.isGroup?o(on,{key:u.key,clsPrefix:t,tmNode:u}):o(nn,{clsPrefix:t,key:u.key,tmNode:u})))}),pt(e.action,u=>u&&[o("div",{class:`${t}-base-select-menu__action`,"data-action":!0,key:"action"},u),o(rr,{onFocus:this.onTabOut,key:"focus-detector"})]))}}),ar=k("base-clear",`
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`,[oe(">",[z("clear",`
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
 `)]),z("placeholder",`
 display: flex;
 `),z("clear, placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[yo({originalTransform:"translateX(-50%) translateY(-50%)",left:"50%",top:"50%"})])])]),Lt=ce({name:"BaseClear",props:{clsPrefix:{type:String,required:!0},show:Boolean,onClear:Function},setup(e){return bn("-base-clear",ar,be(e,"clsPrefix")),{handleMouseDown(n){n.preventDefault()}}},render(){const{clsPrefix:e}=this;return o("div",{class:`${e}-base-clear`},o(Co,null,{default:()=>{var n,t;return this.show?o("div",{key:"dismiss",class:`${e}-base-clear__clear`,onClick:this.onClear,onMousedown:this.handleMouseDown,"data-clear":!0},it(this.$slots.icon,()=>[o(Be,{clsPrefix:e},{default:()=>o(or,null)})])):o("div",{key:"icon",class:`${e}-base-clear__placeholder`},(t=(n=this.$slots).placeholder)===null||t===void 0?void 0:t.call(n))}}))}}),Mn=ce({name:"InternalSelectionSuffix",props:{clsPrefix:{type:String,required:!0},showArrow:{type:Boolean,default:void 0},showClear:{type:Boolean,default:void 0},loading:{type:Boolean,default:!1},onClear:Function},setup(e,{slots:n}){return()=>{const{clsPrefix:t}=e;return o(pn,{clsPrefix:t,class:`${t}-base-suffix`,strokeWidth:24,scale:.85,show:e.loading},{default:()=>e.showArrow?o(Lt,{clsPrefix:t,show:e.showClear,onClear:e.onClear},{placeholder:()=>o(Be,{clsPrefix:t,class:`${t}-base-suffix__arrow`},{default:()=>it(n.default,()=>[o(nr,null)])})}):null})}}}),sr=oe([k("base-selection",`
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
 `,[k("base-loading",`
 color: var(--n-loading-color);
 `),k("base-selection-tags","min-height: var(--n-height);"),z("border, state-border",`
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
 `),z("state-border",`
 z-index: 1;
 border-color: #0000;
 `),k("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[z("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),k("base-selection-overlay",`
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
 `,[z("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),k("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[z("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),k("base-selection-tags",`
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
 `),k("base-selection-label",`
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
 `,[k("base-selection-input",`
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
 `,[z("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),z("render-label",`
 color: var(--n-text-color);
 `)]),De("disabled",[oe("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),Z("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),Z("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),k("base-selection-label","background-color: var(--n-color-active);"),k("base-selection-tags","background-color: var(--n-color-active);")])]),Z("disabled","cursor: not-allowed;",[z("arrow",`
 color: var(--n-arrow-color-disabled);
 `),k("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[k("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),z("render-label",`
 color: var(--n-text-color-disabled);
 `)]),k("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),k("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),k("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[z("input",`
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
 `),z("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>Z(`${e}-status`,[z("state-border",`border: var(--n-border-${e});`),De("disabled",[oe("&:hover",[z("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),Z("active",[z("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),k("base-selection-label",`background-color: var(--n-color-active-${e});`),k("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),Z("focus",[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),k("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),k("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[oe("&:last-child","padding-right: 0;"),k("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[z("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),dr=ce({name:"InternalSelection",props:Object.assign(Object.assign({},Me.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const n=P(null),t=P(null),a=P(null),d=P(null),f=P(null),u=P(null),i=P(null),v=P(null),c=P(null),g=P(null),y=P(!1),x=P(!1),B=P(!1),h=Me("InternalSelection","-internal-selection",sr,Fo,e,be(e,"clsPrefix")),T=I(()=>e.clearable&&!e.disabled&&(B.value||e.active)),$=I(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):at(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),_=I(()=>{const w=e.selectedOption;if(w)return w[e.labelField]}),R=I(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function Y(){var w;const{value:M}=n;if(M){const{value:re}=t;re&&(re.style.width=`${M.offsetWidth}px`,e.maxTagCount!=="responsive"&&((w=c.value)===null||w===void 0||w.sync()))}}function le(){const{value:w}=g;w&&(w.style.display="none")}function ee(){const{value:w}=g;w&&(w.style.display="inline-block")}Ie(be(e,"active"),w=>{w||le()}),Ie(be(e,"pattern"),()=>{e.multiple&&Ge(Y)});function X(w){const{onFocus:M}=e;M&&M(w)}function J(w){const{onBlur:M}=e;M&&M(w)}function te(w){const{onDeleteOption:M}=e;M&&M(w)}function de(w){const{onClear:M}=e;M&&M(w)}function fe(w){const{onPatternInput:M}=e;M&&M(w)}function F(w){var M;(!w.relatedTarget||!(!((M=a.value)===null||M===void 0)&&M.contains(w.relatedTarget)))&&X(w)}function S(w){var M;!((M=a.value)===null||M===void 0)&&M.contains(w.relatedTarget)||J(w)}function N(w){de(w)}function Q(){B.value=!0}function G(){B.value=!1}function j(w){!e.active||!e.filterable||w.target!==t.value&&w.preventDefault()}function E(w){te(w)}function D(w){if(w.key==="Backspace"&&!p.value&&!e.pattern.length){const{selectedOptions:M}=e;M!=null&&M.length&&E(M[M.length-1])}}const p=P(!1);let m=null;function q(w){const{value:M}=n;if(M){const re=w.target.value;M.textContent=re,Y()}e.ignoreComposition&&p.value?m=w:fe(w)}function ne(){p.value=!0}function me(){p.value=!1,e.ignoreComposition&&fe(m),m=null}function xe(w){var M;x.value=!0,(M=e.onPatternFocus)===null||M===void 0||M.call(e,w)}function he(w){var M;x.value=!1,(M=e.onPatternBlur)===null||M===void 0||M.call(e,w)}function ke(){var w,M;if(e.filterable)x.value=!1,(w=u.value)===null||w===void 0||w.blur(),(M=t.value)===null||M===void 0||M.blur();else if(e.multiple){const{value:re}=d;re==null||re.blur()}else{const{value:re}=f;re==null||re.blur()}}function Ce(){var w,M,re;e.filterable?(x.value=!1,(w=u.value)===null||w===void 0||w.focus()):e.multiple?(M=d.value)===null||M===void 0||M.focus():(re=f.value)===null||re===void 0||re.focus()}function ge(){const{value:w}=t;w&&(ee(),w.focus())}function se(){const{value:w}=t;w&&w.blur()}function b(w){const{value:M}=i;M&&M.setTextContent(`+${w}`)}function A(){const{value:w}=v;return w}function Fe(){return t.value}let we=null;function ze(){we!==null&&window.clearTimeout(we)}function _e(){e.disabled||e.active||(ze(),we=window.setTimeout(()=>{R.value&&(y.value=!0)},100))}function $e(){ze()}function Ae(w){w||(ze(),y.value=!1)}Ie(R,w=>{w||(y.value=!1)}),ut(()=>{dt(()=>{const w=u.value;w&&(w.tabIndex=e.disabled||x.value?-1:0)})}),zn(a,e.onResize);const{inlineThemeDisabled:Re}=e,Te=I(()=>{const{size:w}=e,{common:{cubicBezierEaseInOut:M},self:{borderRadius:re,color:Pe,placeholderColor:Ze,textColor:Ye,paddingSingle:Xe,paddingMultiple:Je,caretColor:We,colorDisabled:je,textColorDisabled:Ue,placeholderColorDisabled:Qe,colorActive:et,boxShadowFocus:He,boxShadowActive:Se,boxShadowHover:l,border:C,borderFocus:L,borderHover:H,borderActive:W,arrowColor:U,arrowColorDisabled:V,loadingColor:pe,colorActiveWarning:Ee,boxShadowFocusWarning:tt,boxShadowActiveWarning:Ke,boxShadowHoverWarning:qe,borderWarning:ft,borderFocusWarning:ht,borderHoverWarning:lt,borderActiveWarning:Oe,colorActiveError:r,boxShadowFocusError:s,boxShadowActiveError:O,boxShadowHoverError:ae,borderError:ve,borderFocusError:ie,borderHoverError:Le,borderActiveError:Ne,clearColor:Ve,clearColorHover:nt,clearColorPressed:ot,clearSize:vt,arrowSize:Bt,[ue("height",w)]:Tt,[ue("fontSize",w)]:Ot}}=h.value;return{"--n-bezier":M,"--n-border":C,"--n-border-active":W,"--n-border-focus":L,"--n-border-hover":H,"--n-border-radius":re,"--n-box-shadow-active":Se,"--n-box-shadow-focus":He,"--n-box-shadow-hover":l,"--n-caret-color":We,"--n-color":Pe,"--n-color-active":et,"--n-color-disabled":je,"--n-font-size":Ot,"--n-height":Tt,"--n-padding-single":Xe,"--n-padding-multiple":Je,"--n-placeholder-color":Ze,"--n-placeholder-color-disabled":Qe,"--n-text-color":Ye,"--n-text-color-disabled":Ue,"--n-arrow-color":U,"--n-arrow-color-disabled":V,"--n-loading-color":pe,"--n-color-active-warning":Ee,"--n-box-shadow-focus-warning":tt,"--n-box-shadow-active-warning":Ke,"--n-box-shadow-hover-warning":qe,"--n-border-warning":ft,"--n-border-focus-warning":ht,"--n-border-hover-warning":lt,"--n-border-active-warning":Oe,"--n-color-active-error":r,"--n-box-shadow-focus-error":s,"--n-box-shadow-active-error":O,"--n-box-shadow-hover-error":ae,"--n-border-error":ve,"--n-border-focus-error":ie,"--n-border-hover-error":Le,"--n-border-active-error":Ne,"--n-clear-size":vt,"--n-clear-color":Ve,"--n-clear-color-hover":nt,"--n-clear-color-pressed":ot,"--n-arrow-size":Bt}}),ye=Re?ct("internal-selection",I(()=>e.size[0]),Te,e):void 0;return{mergedTheme:h,mergedClearable:T,patternInputFocused:x,filterablePlaceholder:$,label:_,selected:R,showTagsPanel:y,isComposing:p,counterRef:i,counterWrapperRef:v,patternInputMirrorRef:n,patternInputRef:t,selfRef:a,multipleElRef:d,singleElRef:f,patternInputWrapperRef:u,overflowRef:c,inputTagElRef:g,handleMouseDown:j,handleFocusin:F,handleClear:N,handleMouseEnter:Q,handleMouseLeave:G,handleDeleteOption:E,handlePatternKeyDown:D,handlePatternInputInput:q,handlePatternInputBlur:he,handlePatternInputFocus:xe,handleMouseEnterCounter:_e,handleMouseLeaveCounter:$e,handleFocusout:S,handleCompositionEnd:me,handleCompositionStart:ne,onPopoverUpdateShow:Ae,focus:Ce,focusInput:ge,blur:ke,blurInput:se,updateCounter:b,getCounter:A,getTail:Fe,renderLabel:e.renderLabel,cssVars:Re?void 0:Te,themeClass:ye==null?void 0:ye.themeClass,onRender:ye==null?void 0:ye.onRender}},render(){const{status:e,multiple:n,size:t,disabled:a,filterable:d,maxTagCount:f,bordered:u,clsPrefix:i,onRender:v,renderTag:c,renderLabel:g}=this;v==null||v();const y=f==="responsive",x=typeof f=="number",B=y||x,h=o(So,null,{default:()=>o(Mn,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var $,_;return(_=($=this.$slots).arrow)===null||_===void 0?void 0:_.call($)}})});let T;if(n){const{labelField:$}=this,_=S=>o("div",{class:`${i}-base-selection-tag-wrapper`,key:S.value},c?c({option:S,handleClose:()=>this.handleDeleteOption(S)}):o(It,{size:t,closable:!S.disabled,disabled:a,onClose:()=>this.handleDeleteOption(S),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>g?g(S,!0):at(S[$],S,!0)})),R=()=>(x?this.selectedOptions.slice(0,f):this.selectedOptions).map(_),Y=d?o("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:a,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),o("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,le=y?()=>o("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},o(It,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:a})):void 0;let ee;if(x){const S=this.selectedOptions.length-f;S>0&&(ee=o("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},o(It,{size:t,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:a},{default:()=>`+${S}`})))}const X=y?d?o(Yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:le,tail:()=>Y}):o(Yt,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:R,counter:le}):x?R().concat(ee):R(),J=B?()=>o("div",{class:`${i}-base-selection-popover`},y?R():this.selectedOptions.map(_)):void 0,te=B?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,fe=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?o("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},o("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,F=d?o("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},X,y?null:Y,h):o("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:a?void 0:0},X,h);T=o(kt,null,B?o(Sn,Object.assign({},te,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>F,default:J}):F,fe)}else if(d){const $=this.pattern||this.isComposing,_=this.active?!$:!this.selected,R=this.active?!1:this.selected;T=o("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`},o("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:a,disabled:a,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),R?o("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},o("div",{class:`${i}-base-selection-overlay__wrapper`},c?c({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):at(this.label,this.selectedOption,!0))):null,_?o("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,h)}else T=o("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?o("div",{class:`${i}-base-selection-input`,title:Uo(this.label),key:"input"},o("div",{class:`${i}-base-selection-input__content`},c?c({option:this.selectedOption,handleClose:()=>{}}):g?g(this.selectedOption,!0):at(this.label,this.selectedOption,!0))):o("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},o("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),h);return o("div",{ref:"selfRef",class:[`${i}-base-selection`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},T,u?o("div",{class:`${i}-base-selection__border`}):null,u?o("div",{class:`${i}-base-selection__state-border`}):null)}});function Rt(e){return e.type==="group"}function Pn(e){return e.type==="ignored"}function $t(e,n){try{return!!(1+n.toString().toLowerCase().indexOf(e.trim().toLowerCase()))}catch{return!1}}function Bn(e,n){return{getIsGroup:Rt,getIgnored:Pn,getKey(a){return Rt(a)?a.name||a.key||"key-required":a[e]},getChildren(a){return a[n]}}}function ur(e,n,t,a){if(!n)return e;function d(f){if(!Array.isArray(f))return[];const u=[];for(const i of f)if(Rt(i)){const v=d(i[a]);v.length&&u.push(Object.assign({},i,{[a]:v}))}else{if(Pn(i))continue;n(t,i)&&u.push(i)}return u}return d(e)}function cr(e,n,t){const a=new Map;return e.forEach(d=>{Rt(d)?d[t].forEach(f=>{a.set(f[n],f)}):a.set(d[n],d)}),a}const Tn=mn("n-input");function fr(e){let n=0;for(const t of e)n++;return n}function yt(e){return e===""||e==null}function hr(e){const n=P(null);function t(){const{value:f}=e;if(!(f!=null&&f.focus)){d();return}const{selectionStart:u,selectionEnd:i,value:v}=f;if(u==null||i==null){d();return}n.value={start:u,end:i,beforeText:v.slice(0,u),afterText:v.slice(i)}}function a(){var f;const{value:u}=n,{value:i}=e;if(!u||!i)return;const{value:v}=i,{start:c,beforeText:g,afterText:y}=u;let x=v.length;if(v.endsWith(y))x=v.length-y.length;else if(v.startsWith(g))x=g.length;else{const B=g[c-1],h=v.indexOf(B,c-1);h!==-1&&(x=h+1)}(f=i.setSelectionRange)===null||f===void 0||f.call(i,x,x)}function d(){n.value=null}return Ie(e,d),{recordCursor:t,restoreCursor:a}}const rn=ce({name:"InputWordCount",setup(e,{slots:n}){const{mergedValueRef:t,maxlengthRef:a,mergedClsPrefixRef:d,countGraphemesRef:f}=Mt(Tn),u=I(()=>{const{value:i}=t;return i===null||Array.isArray(i)?0:(f.value||fr)(i)});return()=>{const{value:i}=a,{value:v}=t;return o("span",{class:`${d.value}-input-word-count`},ko(n.default,{value:v===null||Array.isArray(v)?"":v},()=>[i===void 0?u.value:`${u.value} / ${i}`]))}}}),vr=k("input",`
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`,[z("input, textarea",`
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),z("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder",`
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),z("input-el, textarea-el",`
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `,[oe("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",`
 width: 0;
 height: 0;
 display: none;
 `),oe("&::placeholder",`
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `),oe("&:-webkit-autofill ~",[z("placeholder","display: none;")])]),Z("round",[De("textarea","border-radius: calc(var(--n-height) / 2);")]),z("placeholder",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `,[oe("span",`
 width: 100%;
 display: inline-block;
 `)]),Z("textarea",[z("placeholder","overflow: visible;")]),De("autosize","width: 100%;"),Z("autosize",[z("textarea-el, input-el",`
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),k("input-wrapper",`
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),z("input-mirror",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),z("input-el",`
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[oe("+",[z("placeholder",`
 display: flex;
 align-items: center; 
 `)])]),De("textarea",[z("placeholder","white-space: nowrap;")]),z("eye",`
 transition: color .3s var(--n-bezier);
 `),Z("textarea","width: 100%;",[k("input-word-count",`
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `),Z("resizable",[k("input-wrapper",`
 resize: vertical;
 min-height: var(--n-height);
 `)]),z("textarea-el, textarea-mirror, placeholder",`
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 `),z("textarea-mirror",`
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),Z("pair",[z("input-el, placeholder","text-align: center;"),z("separator",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `,[k("icon",`
 color: var(--n-icon-color);
 `),k("base-icon",`
 color: var(--n-icon-color);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[z("border","border: var(--n-border-disabled);"),z("input-el, textarea-el",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `),z("placeholder","color: var(--n-placeholder-color-disabled);"),z("separator","color: var(--n-text-color-disabled);",[k("icon",`
 color: var(--n-icon-color-disabled);
 `),k("base-icon",`
 color: var(--n-icon-color-disabled);
 `)]),k("input-word-count",`
 color: var(--n-count-text-color-disabled);
 `),z("suffix, prefix","color: var(--n-text-color-disabled);",[k("icon",`
 color: var(--n-icon-color-disabled);
 `),k("internal-icon",`
 color: var(--n-icon-color-disabled);
 `)])]),De("disabled",[z("eye",`
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
 cursor: pointer;
 `,[oe("&:hover",`
 color: var(--n-icon-color-hover);
 `),oe("&:active",`
 color: var(--n-icon-color-pressed);
 `)]),oe("&:hover",[z("state-border","border: var(--n-border-hover);")]),Z("focus","background-color: var(--n-color-focus);",[z("state-border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),z("border, state-border",`
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),z("state-border",`
 border-color: #0000;
 z-index: 1;
 `),z("prefix","margin-right: 4px;"),z("suffix",`
 margin-left: 4px;
 `),z("suffix, prefix",`
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `,[k("base-loading",`
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `),k("base-clear",`
 font-size: var(--n-icon-size);
 `,[z("placeholder",[k("base-icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]),oe(">",[k("icon",`
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),k("base-icon",`
 font-size: var(--n-icon-size);
 `)]),k("input-word-count",`
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),["warning","error"].map(e=>Z(`${e}-status`,[De("disabled",[k("base-loading",`
 color: var(--n-loading-color-${e})
 `),z("input-el, textarea-el",`
 caret-color: var(--n-caret-color-${e});
 `),z("state-border",`
 border: var(--n-border-${e});
 `),oe("&:hover",[z("state-border",`
 border: var(--n-border-hover-${e});
 `)]),oe("&:focus",`
 background-color: var(--n-color-focus-${e});
 `,[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]),Z("focus",`
 background-color: var(--n-color-focus-${e});
 `,[z("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),pr=k("input",[Z("disabled",[z("input-el, textarea-el",`
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),gr=Object.assign(Object.assign({},Me.props),{bordered:{type:Boolean,default:void 0},type:{type:String,default:"text"},placeholder:[Array,String],defaultValue:{type:[String,Array],default:null},value:[String,Array],disabled:{type:Boolean,default:void 0},size:String,rows:{type:[Number,String],default:3},round:Boolean,minlength:[String,Number],maxlength:[String,Number],clearable:Boolean,autosize:{type:[Boolean,Object],default:!1},pair:Boolean,separator:String,readonly:{type:[String,Boolean],default:!1},passivelyActivated:Boolean,showPasswordOn:String,stateful:{type:Boolean,default:!0},autofocus:Boolean,inputProps:Object,resizable:{type:Boolean,default:!0},showCount:Boolean,loading:{type:Boolean,default:void 0},allowInput:Function,renderCount:Function,onMousedown:Function,onKeydown:Function,onKeyup:Function,onInput:[Function,Array],onFocus:[Function,Array],onBlur:[Function,Array],onClick:[Function,Array],onChange:[Function,Array],onClear:[Function,Array],countGraphemes:Function,status:String,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],textDecoration:[String,Array],attrSize:{type:Number,default:20},onInputBlur:[Function,Array],onInputFocus:[Function,Array],onDeactivate:[Function,Array],onActivate:[Function,Array],onWrapperFocus:[Function,Array],onWrapperBlur:[Function,Array],internalDeactivateOnEnter:Boolean,internalForceFocus:Boolean,internalLoadingBeforeSuffix:Boolean,showPasswordToggle:Boolean}),ln=ce({name:"Input",props:gr,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,inlineThemeDisabled:a,mergedRtlRef:d}=Pt(e),f=Me("Input","-input",vr,Mo,e,n);zo&&bn("-input-safari",pr,n);const u=P(null),i=P(null),v=P(null),c=P(null),g=P(null),y=P(null),x=P(null),B=hr(x),h=P(null),{localeRef:T}=Nt("Input"),$=P(e.defaultValue),_=be(e,"value"),R=bt(_,$),Y=wn(e),{mergedSizeRef:le,mergedDisabledRef:ee,mergedStatusRef:X}=Y,J=P(!1),te=P(!1),de=P(!1),fe=P(!1);let F=null;const S=I(()=>{const{placeholder:r,pair:s}=e;return s?Array.isArray(r)?r:r===void 0?["",""]:[r,r]:r===void 0?[T.value.placeholder]:[r]}),N=I(()=>{const{value:r}=de,{value:s}=R,{value:O}=S;return!r&&(yt(s)||Array.isArray(s)&&yt(s[0]))&&O[0]}),Q=I(()=>{const{value:r}=de,{value:s}=R,{value:O}=S;return!r&&O[1]&&(yt(s)||Array.isArray(s)&&yt(s[1]))}),G=st(()=>e.internalForceFocus||J.value),j=st(()=>{if(ee.value||e.readonly||!e.clearable||!G.value&&!te.value)return!1;const{value:r}=R,{value:s}=G;return e.pair?!!(Array.isArray(r)&&(r[0]||r[1]))&&(te.value||s):!!r&&(te.value||s)}),E=I(()=>{const{showPasswordOn:r}=e;if(r)return r;if(e.showPasswordToggle)return"click"}),D=P(!1),p=I(()=>{const{textDecoration:r}=e;return r?Array.isArray(r)?r.map(s=>({textDecoration:s})):[{textDecoration:r}]:["",""]}),m=P(void 0),q=()=>{var r,s;if(e.type==="textarea"){const{autosize:O}=e;if(O&&(m.value=(s=(r=h.value)===null||r===void 0?void 0:r.$el)===null||s===void 0?void 0:s.offsetWidth),!i.value||typeof O=="boolean")return;const{paddingTop:ae,paddingBottom:ve,lineHeight:ie}=window.getComputedStyle(i.value),Le=Number(ae.slice(0,-2)),Ne=Number(ve.slice(0,-2)),Ve=Number(ie.slice(0,-2)),{value:nt}=v;if(!nt)return;if(O.minRows){const ot=Math.max(O.minRows,1),vt=`${Le+Ne+Ve*ot}px`;nt.style.minHeight=vt}if(O.maxRows){const ot=`${Le+Ne+Ve*O.maxRows}px`;nt.style.maxHeight=ot}}},ne=I(()=>{const{maxlength:r}=e;return r===void 0?void 0:Number(r)});ut(()=>{const{value:r}=R;Array.isArray(r)||V(r)});const me=Ro().proxy;function xe(r){const{onUpdateValue:s,"onUpdate:value":O,onInput:ae}=e,{nTriggerFormInput:ve}=Y;s&&K(s,r),O&&K(O,r),ae&&K(ae,r),$.value=r,ve()}function he(r){const{onChange:s}=e,{nTriggerFormChange:O}=Y;s&&K(s,r),$.value=r,O()}function ke(r){const{onBlur:s}=e,{nTriggerFormBlur:O}=Y;s&&K(s,r),O()}function Ce(r){const{onFocus:s}=e,{nTriggerFormFocus:O}=Y;s&&K(s,r),O()}function ge(r){const{onClear:s}=e;s&&K(s,r)}function se(r){const{onInputBlur:s}=e;s&&K(s,r)}function b(r){const{onInputFocus:s}=e;s&&K(s,r)}function A(){const{onDeactivate:r}=e;r&&K(r)}function Fe(){const{onActivate:r}=e;r&&K(r)}function we(r){const{onClick:s}=e;s&&K(s,r)}function ze(r){const{onWrapperFocus:s}=e;s&&K(s,r)}function _e(r){const{onWrapperBlur:s}=e;s&&K(s,r)}function $e(){de.value=!0}function Ae(r){de.value=!1,r.target===y.value?Re(r,1):Re(r,0)}function Re(r,s=0,O="input"){const ae=r.target.value;if(V(ae),r instanceof InputEvent&&!r.isComposing&&(de.value=!1),e.type==="textarea"){const{value:ie}=h;ie&&ie.syncUnifiedContainer()}if(F=ae,de.value)return;B.recordCursor();const ve=Te(ae);if(ve)if(!e.pair)O==="input"?xe(ae):he(ae);else{let{value:ie}=R;Array.isArray(ie)?ie=[ie[0],ie[1]]:ie=["",""],ie[s]=ae,O==="input"?xe(ie):he(ie)}me.$forceUpdate(),ve||Ge(B.restoreCursor)}function Te(r){const{countGraphemes:s,maxlength:O,minlength:ae}=e;if(s){let ie;if(O!==void 0&&(ie===void 0&&(ie=s(r)),ie>Number(O))||ae!==void 0&&(ie===void 0&&(ie=s(r)),ie<Number(O)))return!1}const{allowInput:ve}=e;return typeof ve=="function"?ve(r):!0}function ye(r){se(r),r.relatedTarget===u.value&&A(),r.relatedTarget!==null&&(r.relatedTarget===g.value||r.relatedTarget===y.value||r.relatedTarget===i.value)||(fe.value=!1),Pe(r,"blur"),x.value=null}function w(r,s){b(r),J.value=!0,fe.value=!0,Fe(),Pe(r,"focus"),s===0?x.value=g.value:s===1?x.value=y.value:s===2&&(x.value=i.value)}function M(r){e.passivelyActivated&&(_e(r),Pe(r,"blur"))}function re(r){e.passivelyActivated&&(J.value=!0,ze(r),Pe(r,"focus"))}function Pe(r,s){r.relatedTarget!==null&&(r.relatedTarget===g.value||r.relatedTarget===y.value||r.relatedTarget===i.value||r.relatedTarget===u.value)||(s==="focus"?(Ce(r),J.value=!0):s==="blur"&&(ke(r),J.value=!1))}function Ze(r,s){Re(r,s,"change")}function Ye(r){we(r)}function Xe(r){ge(r),e.pair?(xe(["",""]),he(["",""])):(xe(""),he(""))}function Je(r){const{onMousedown:s}=e;s&&s(r);const{tagName:O}=r.target;if(O!=="INPUT"&&O!=="TEXTAREA"){if(e.resizable){const{value:ae}=u;if(ae){const{left:ve,top:ie,width:Le,height:Ne}=ae.getBoundingClientRect(),Ve=14;if(ve+Le-Ve<r.clientX&&r.clientX<ve+Le&&ie+Ne-Ve<r.clientY&&r.clientY<ie+Ne)return}}r.preventDefault(),J.value||l()}}function We(){var r;te.value=!0,e.type==="textarea"&&((r=h.value)===null||r===void 0||r.handleMouseEnterWrapper())}function je(){var r;te.value=!1,e.type==="textarea"&&((r=h.value)===null||r===void 0||r.handleMouseLeaveWrapper())}function Ue(){ee.value||E.value==="click"&&(D.value=!D.value)}function Qe(r){if(ee.value)return;r.preventDefault();const s=ae=>{ae.preventDefault(),Ut("mouseup",document,s)};if(jt("mouseup",document,s),E.value!=="mousedown")return;D.value=!0;const O=()=>{D.value=!1,Ut("mouseup",document,O)};jt("mouseup",document,O)}function et(r){var s;switch((s=e.onKeydown)===null||s===void 0||s.call(e,r),r.key){case"Escape":Se();break;case"Enter":He(r);break}}function He(r){var s,O;if(e.passivelyActivated){const{value:ae}=fe;if(ae){e.internalDeactivateOnEnter&&Se();return}r.preventDefault(),e.type==="textarea"?(s=i.value)===null||s===void 0||s.focus():(O=g.value)===null||O===void 0||O.focus()}}function Se(){e.passivelyActivated&&(fe.value=!1,Ge(()=>{var r;(r=u.value)===null||r===void 0||r.focus()}))}function l(){var r,s,O;ee.value||(e.passivelyActivated?(r=u.value)===null||r===void 0||r.focus():((s=i.value)===null||s===void 0||s.focus(),(O=g.value)===null||O===void 0||O.focus()))}function C(){var r;!((r=u.value)===null||r===void 0)&&r.contains(document.activeElement)&&document.activeElement.blur()}function L(){var r,s;(r=i.value)===null||r===void 0||r.select(),(s=g.value)===null||s===void 0||s.select()}function H(){ee.value||(i.value?i.value.focus():g.value&&g.value.focus())}function W(){const{value:r}=u;r!=null&&r.contains(document.activeElement)&&r!==document.activeElement&&Se()}function U(r){if(e.type==="textarea"){const{value:s}=i;s==null||s.scrollTo(r)}else{const{value:s}=g;s==null||s.scrollTo(r)}}function V(r){const{type:s,pair:O,autosize:ae}=e;if(!O&&ae)if(s==="textarea"){const{value:ve}=v;ve&&(ve.textContent=(r??"")+`\r
`)}else{const{value:ve}=c;ve&&(r?ve.textContent=r:ve.innerHTML="&nbsp;")}}function pe(){q()}const Ee=P({top:"0"});function tt(r){var s;const{scrollTop:O}=r.target;Ee.value.top=`${-O}px`,(s=h.value)===null||s===void 0||s.syncUnifiedContainer()}let Ke=null;dt(()=>{const{autosize:r,type:s}=e;r&&s==="textarea"?Ke=Ie(R,O=>{!Array.isArray(O)&&O!==F&&V(O)}):Ke==null||Ke()});let qe=null;dt(()=>{e.type==="textarea"?qe=Ie(R,r=>{var s;!Array.isArray(r)&&r!==F&&((s=h.value)===null||s===void 0||s.syncUnifiedContainer())}):qe==null||qe()}),St(Tn,{mergedValueRef:R,maxlengthRef:ne,mergedClsPrefixRef:n,countGraphemesRef:be(e,"countGraphemes")});const ft={wrapperElRef:u,inputElRef:g,textareaElRef:i,isCompositing:de,focus:l,blur:C,select:L,deactivate:W,activate:H,scrollTo:U},ht=xn("Input",d,n),lt=I(()=>{const{value:r}=le,{common:{cubicBezierEaseInOut:s},self:{color:O,borderRadius:ae,textColor:ve,caretColor:ie,caretColorError:Le,caretColorWarning:Ne,textDecorationColor:Ve,border:nt,borderDisabled:ot,borderHover:vt,borderFocus:Bt,placeholderColor:Tt,placeholderColorDisabled:Ot,lineHeightTextarea:In,colorDisabled:_n,colorFocus:$n,textColorDisabled:An,boxShadowFocus:En,iconSize:Ln,colorFocusWarning:Nn,boxShadowFocusWarning:Vn,borderWarning:Dn,borderFocusWarning:Wn,borderHoverWarning:jn,colorFocusError:Un,boxShadowFocusError:Hn,borderError:Kn,borderFocusError:qn,borderHoverError:Gn,clearSize:Zn,clearColor:Yn,clearColorHover:Xn,clearColorPressed:Jn,iconColor:Qn,iconColorDisabled:eo,suffixTextColor:to,countTextColor:no,countTextColorDisabled:oo,iconColorHover:ro,iconColorPressed:io,loadingColor:lo,loadingColorError:ao,loadingColorWarning:so,[ue("padding",r)]:uo,[ue("fontSize",r)]:co,[ue("height",r)]:fo}}=f.value,{left:ho,right:vo}=Ct(uo);return{"--n-bezier":s,"--n-count-text-color":no,"--n-count-text-color-disabled":oo,"--n-color":O,"--n-font-size":co,"--n-border-radius":ae,"--n-height":fo,"--n-padding-left":ho,"--n-padding-right":vo,"--n-text-color":ve,"--n-caret-color":ie,"--n-text-decoration-color":Ve,"--n-border":nt,"--n-border-disabled":ot,"--n-border-hover":vt,"--n-border-focus":Bt,"--n-placeholder-color":Tt,"--n-placeholder-color-disabled":Ot,"--n-icon-size":Ln,"--n-line-height-textarea":In,"--n-color-disabled":_n,"--n-color-focus":$n,"--n-text-color-disabled":An,"--n-box-shadow-focus":En,"--n-loading-color":lo,"--n-caret-color-warning":Ne,"--n-color-focus-warning":Nn,"--n-box-shadow-focus-warning":Vn,"--n-border-warning":Dn,"--n-border-focus-warning":Wn,"--n-border-hover-warning":jn,"--n-loading-color-warning":so,"--n-caret-color-error":Le,"--n-color-focus-error":Un,"--n-box-shadow-focus-error":Hn,"--n-border-error":Kn,"--n-border-focus-error":qn,"--n-border-hover-error":Gn,"--n-loading-color-error":ao,"--n-clear-color":Yn,"--n-clear-size":Zn,"--n-clear-color-hover":Xn,"--n-clear-color-pressed":Jn,"--n-icon-color":Qn,"--n-icon-color-hover":ro,"--n-icon-color-pressed":io,"--n-icon-color-disabled":eo,"--n-suffix-text-color":to}}),Oe=a?ct("input",I(()=>{const{value:r}=le;return r[0]}),lt,e):void 0;return Object.assign(Object.assign({},ft),{wrapperElRef:u,inputElRef:g,inputMirrorElRef:c,inputEl2Ref:y,textareaElRef:i,textareaMirrorElRef:v,textareaScrollbarInstRef:h,rtlEnabled:ht,uncontrolledValue:$,mergedValue:R,passwordVisible:D,mergedPlaceholder:S,showPlaceholder1:N,showPlaceholder2:Q,mergedFocus:G,isComposing:de,activated:fe,showClearButton:j,mergedSize:le,mergedDisabled:ee,textDecorationStyle:p,mergedClsPrefix:n,mergedBordered:t,mergedShowPasswordOn:E,placeholderStyle:Ee,mergedStatus:X,textAreaScrollContainerWidth:m,handleTextAreaScroll:tt,handleCompositionStart:$e,handleCompositionEnd:Ae,handleInput:Re,handleInputBlur:ye,handleInputFocus:w,handleWrapperBlur:M,handleWrapperFocus:re,handleMouseEnter:We,handleMouseLeave:je,handleMouseDown:Je,handleChange:Ze,handleClick:Ye,handleClear:Xe,handlePasswordToggleClick:Ue,handlePasswordToggleMousedown:Qe,handleWrapperKeydown:et,handleTextAreaMirrorResize:pe,getTextareaScrollContainer:()=>i.value,mergedTheme:f,cssVars:a?void 0:lt,themeClass:Oe==null?void 0:Oe.themeClass,onRender:Oe==null?void 0:Oe.onRender})},render(){var e,n;const{mergedClsPrefix:t,mergedStatus:a,themeClass:d,type:f,countGraphemes:u,onRender:i}=this,v=this.$slots;return i==null||i(),o("div",{ref:"wrapperElRef",class:[`${t}-input`,d,a&&`${t}-input--${a}-status`,{[`${t}-input--rtl`]:this.rtlEnabled,[`${t}-input--disabled`]:this.mergedDisabled,[`${t}-input--textarea`]:f==="textarea",[`${t}-input--resizable`]:this.resizable&&!this.autosize,[`${t}-input--autosize`]:this.autosize,[`${t}-input--round`]:this.round&&f!=="textarea",[`${t}-input--pair`]:this.pair,[`${t}-input--focus`]:this.mergedFocus,[`${t}-input--stateful`]:this.stateful}],style:this.cssVars,tabindex:!this.mergedDisabled&&this.passivelyActivated&&!this.activated?0:void 0,onFocus:this.handleWrapperFocus,onBlur:this.handleWrapperBlur,onClick:this.handleClick,onMousedown:this.handleMouseDown,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd,onKeyup:this.onKeyup,onKeydown:this.handleWrapperKeydown},o("div",{class:`${t}-input-wrapper`},pt(v.prefix,c=>c&&o("div",{class:`${t}-input__prefix`},c)),f==="textarea"?o(gn,{ref:"textareaScrollbarInstRef",class:`${t}-input__textarea`,container:this.getTextareaScrollContainer,triggerDisplayManually:!0,useUnifiedContainer:!0,internalHoistYRail:!0},{default:()=>{var c,g;const{textAreaScrollContainerWidth:y}=this,x={width:this.autosize&&y&&`${y}px`};return o(kt,null,o("textarea",Object.assign({},this.inputProps,{ref:"textareaElRef",class:[`${t}-input__textarea-el`,(c=this.inputProps)===null||c===void 0?void 0:c.class],autofocus:this.autofocus,rows:Number(this.rows),placeholder:this.placeholder,value:this.mergedValue,disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,readonly:this.readonly,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,style:[this.textDecorationStyle[0],(g=this.inputProps)===null||g===void 0?void 0:g.style,x],onBlur:this.handleInputBlur,onFocus:B=>this.handleInputFocus(B,2),onInput:this.handleInput,onChange:this.handleChange,onScroll:this.handleTextAreaScroll})),this.showPlaceholder1?o("div",{class:`${t}-input__placeholder`,style:[this.placeholderStyle,x],key:"placeholder"},this.mergedPlaceholder[0]):null,this.autosize?o(Et,{onResize:this.handleTextAreaMirrorResize},{default:()=>o("div",{ref:"textareaMirrorElRef",class:`${t}-input__textarea-mirror`,key:"mirror"})}):null)}}):o("div",{class:`${t}-input__input`},o("input",Object.assign({type:f==="password"&&this.mergedShowPasswordOn&&this.passwordVisible?"text":f},this.inputProps,{ref:"inputElRef",class:[`${t}-input__input-el`,(e=this.inputProps)===null||e===void 0?void 0:e.class],style:[this.textDecorationStyle[0],(n=this.inputProps)===null||n===void 0?void 0:n.style],tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[0],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[0]:this.mergedValue,readonly:this.readonly,autofocus:this.autofocus,size:this.attrSize,onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,0),onInput:c=>this.handleInput(c,0),onChange:c=>this.handleChange(c,0)})),this.showPlaceholder1?o("div",{class:`${t}-input__placeholder`},o("span",null,this.mergedPlaceholder[0])):null,this.autosize?o("div",{class:`${t}-input__input-mirror`,key:"mirror",ref:"inputMirrorElRef"}," "):null),!this.pair&&pt(v.suffix,c=>c||this.clearable||this.showCount||this.mergedShowPasswordOn||this.loading!==void 0?o("div",{class:`${t}-input__suffix`},[pt(v["clear-icon-placeholder"],g=>(this.clearable||g)&&o(Lt,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{placeholder:()=>g,icon:()=>{var y,x;return(x=(y=this.$slots)["clear-icon"])===null||x===void 0?void 0:x.call(y)}})),this.internalLoadingBeforeSuffix?null:c,this.loading!==void 0?o(Mn,{clsPrefix:t,loading:this.loading,showArrow:!1,showClear:!1,style:this.cssVars}):null,this.internalLoadingBeforeSuffix?c:null,this.showCount&&this.type!=="textarea"?o(rn,null,{default:g=>{var y;return(y=v.count)===null||y===void 0?void 0:y.call(v,g)}}):null,this.mergedShowPasswordOn&&this.type==="password"?o("div",{class:`${t}-input__eye`,onMousedown:this.handlePasswordToggleMousedown,onClick:this.handlePasswordToggleClick},this.passwordVisible?it(v["password-visible-icon"],()=>[o(Be,{clsPrefix:t},{default:()=>o(er,null)})]):it(v["password-invisible-icon"],()=>[o(Be,{clsPrefix:t},{default:()=>o(tr,null)})])):null]):null)),this.pair?o("span",{class:`${t}-input__separator`},it(v.separator,()=>[this.separator])):null,this.pair?o("div",{class:`${t}-input-wrapper`},o("div",{class:`${t}-input__input`},o("input",{ref:"inputEl2Ref",type:this.type,class:`${t}-input__input-el`,tabindex:this.passivelyActivated&&!this.activated?-1:void 0,placeholder:this.mergedPlaceholder[1],disabled:this.mergedDisabled,maxlength:u?void 0:this.maxlength,minlength:u?void 0:this.minlength,value:Array.isArray(this.mergedValue)?this.mergedValue[1]:void 0,readonly:this.readonly,style:this.textDecorationStyle[1],onBlur:this.handleInputBlur,onFocus:c=>this.handleInputFocus(c,1),onInput:c=>this.handleInput(c,1),onChange:c=>this.handleChange(c,1)}),this.showPlaceholder2?o("div",{class:`${t}-input__placeholder`},o("span",null,this.mergedPlaceholder[1])):null),pt(v.suffix,c=>(this.clearable||c)&&o("div",{class:`${t}-input__suffix`},[this.clearable&&o(Lt,{clsPrefix:t,show:this.showClearButton,onClear:this.handleClear},{icon:()=>{var g;return(g=v["clear-icon"])===null||g===void 0?void 0:g.call(v)},placeholder:()=>{var g;return(g=v["clear-icon-placeholder"])===null||g===void 0?void 0:g.call(v)}}),c]))):null,this.mergedBordered?o("div",{class:`${t}-input__border`}):null,this.mergedBordered?o("div",{class:`${t}-input__state-border`}):null,this.showCount&&f==="textarea"?o(rn,null,{default:c=>{var g;const{renderCount:y}=this;return y?y(c):(g=v.count)===null||g===void 0?void 0:g.call(v,c)}}):null)}}),On=mn("n-popselect"),br=k("popselect-menu",`
 box-shadow: var(--n-menu-box-shadow);
`),Dt={multiple:Boolean,value:{type:[String,Number,Array],default:null},cancelable:Boolean,options:{type:Array,default:()=>[]},size:{type:String,default:"medium"},scrollable:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onMouseenter:Function,onMouseleave:Function,renderLabel:Function,showCheckmark:{type:Boolean,default:void 0},nodeProps:Function,virtualScroll:Boolean,onChange:[Function,Array]},an=Po(Dt),mr=ce({name:"PopselectPanel",props:Dt,setup(e){const n=Mt(On),{mergedClsPrefixRef:t,inlineThemeDisabled:a}=Pt(e),d=Me("Popselect","-pop-select",br,yn,n.props,t),f=I(()=>kn(e.options,Bn("value","children")));function u(x,B){const{onUpdateValue:h,"onUpdate:value":T,onChange:$}=e;h&&K(h,x,B),T&&K(T,x,B),$&&K($,x,B)}function i(x){c(x.key)}function v(x){mt(x,"action")||x.preventDefault()}function c(x){const{value:{getNode:B}}=f;if(e.multiple)if(Array.isArray(e.value)){const h=[],T=[];let $=!0;e.value.forEach(_=>{if(_===x){$=!1;return}const R=B(_);R&&(h.push(R.key),T.push(R.rawNode))}),$&&(h.push(x),T.push(B(x).rawNode)),u(h,T)}else{const h=B(x);h&&u([x],[h.rawNode])}else if(e.value===x&&e.cancelable)u(null,null);else{const h=B(x);h&&u(x,h.rawNode);const{"onUpdate:show":T,onUpdateShow:$}=n.props;T&&K(T,!1),$&&K($,!1),n.setShow(!1)}Ge(()=>{n.syncPosition()})}Ie(be(e,"options"),()=>{Ge(()=>{n.syncPosition()})});const g=I(()=>{const{self:{menuBoxShadow:x}}=d.value;return{"--n-menu-box-shadow":x}}),y=a?ct("select",void 0,g,n.props):void 0;return{mergedTheme:n.mergedThemeRef,mergedClsPrefix:t,treeMate:f,handleToggle:i,handleMenuMousedown:v,cssVars:a?void 0:g,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),o(Rn,{clsPrefix:this.mergedClsPrefix,focusable:!0,nodeProps:this.nodeProps,class:[`${this.mergedClsPrefix}-popselect-menu`,this.themeClass],style:this.cssVars,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,multiple:this.multiple,treeMate:this.treeMate,size:this.size,value:this.value,virtualScroll:this.virtualScroll,scrollable:this.scrollable,renderLabel:this.renderLabel,onToggle:this.handleToggle,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseenter,onMousedown:this.handleMenuMousedown,showCheckmark:this.showCheckmark},{action:()=>{var n,t;return((t=(n=this.$slots).action)===null||t===void 0?void 0:t.call(n))||[]},empty:()=>{var n,t;return((t=(n=this.$slots).empty)===null||t===void 0?void 0:t.call(n))||[]}})}}),wr=Object.assign(Object.assign(Object.assign(Object.assign({},Me.props),Cn(Kt,["showArrow","arrow"])),{placement:Object.assign(Object.assign({},Kt.placement),{default:"bottom"}),trigger:{type:String,default:"hover"}}),Dt),xr=ce({name:"Popselect",props:wr,inheritAttrs:!1,__popover__:!0,setup(e){const n=Me("Popselect","-popselect",void 0,yn,e),t=P(null);function a(){var u;(u=t.value)===null||u===void 0||u.syncPosition()}function d(u){var i;(i=t.value)===null||i===void 0||i.setShow(u)}return St(On,{props:e,mergedThemeRef:n,syncPosition:a,setShow:d}),Object.assign(Object.assign({},{syncPosition:a,setShow:d}),{popoverInstRef:t,mergedTheme:n})},render(){const{mergedTheme:e}=this,n={theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:{padding:"0"},ref:"popoverInstRef",internalRenderBody:(t,a,d,f,u)=>{const{$attrs:i}=this;return o(mr,Object.assign({},i,{class:[i.class,t],style:[i.style,d]},Bo(this.$props,an),{ref:Ko(a),onMouseenter:gt([f,i.onMouseenter]),onMouseleave:gt([u,i.onMouseleave])}),{action:()=>{var v,c;return(c=(v=this.$slots).action)===null||c===void 0?void 0:c.call(v)},empty:()=>{var v,c;return(c=(v=this.$slots).empty)===null||c===void 0?void 0:c.call(v)}})}};return o(Sn,Object.assign({},Cn(this.$props,an),n,{internalDeactivateImmediately:!0}),{trigger:()=>{var t,a;return(a=(t=this.$slots).default)===null||a===void 0?void 0:a.call(t)}})}}),yr=oe([k("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),k("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[vn({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),Cr=Object.assign(Object.assign({},Me.props),{to:zt.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),Fr=ce({name:"Select",props:Cr,setup(e){const{mergedClsPrefixRef:n,mergedBorderedRef:t,namespaceRef:a,inlineThemeDisabled:d}=Pt(e),f=Me("Select","-select",yr,_o,e,n),u=P(e.defaultValue),i=be(e,"value"),v=bt(i,u),c=P(!1),g=P(""),y=I(()=>{const{valueField:l,childrenField:C}=e,L=Bn(l,C);return kn(S.value,L)}),x=I(()=>cr(fe.value,e.valueField,e.childrenField)),B=P(!1),h=bt(be(e,"show"),B),T=P(null),$=P(null),_=P(null),{localeRef:R}=Nt("Select"),Y=I(()=>{var l;return(l=e.placeholder)!==null&&l!==void 0?l:R.value.placeholder}),le=Lo(e,["items","options"]),ee=[],X=P([]),J=P([]),te=P(new Map),de=I(()=>{const{fallbackOption:l}=e;if(l===void 0){const{labelField:C,valueField:L}=e;return H=>({[C]:String(H),[L]:H})}return l===!1?!1:C=>Object.assign(l(C),{value:C})}),fe=I(()=>J.value.concat(X.value).concat(le.value)),F=I(()=>{const{filter:l}=e;if(l)return l;const{labelField:C,valueField:L}=e;return(H,W)=>{if(!W)return!1;const U=W[C];if(typeof U=="string")return $t(H,U);const V=W[L];return typeof V=="string"?$t(H,V):typeof V=="number"?$t(H,String(V)):!1}}),S=I(()=>{if(e.remote)return le.value;{const{value:l}=fe,{value:C}=g;return!C.length||!e.filterable?l:ur(l,F.value,C,e.childrenField)}});function N(l){const C=e.remote,{value:L}=te,{value:H}=x,{value:W}=de,U=[];return l.forEach(V=>{if(H.has(V))U.push(H.get(V));else if(C&&L.has(V))U.push(L.get(V));else if(W){const pe=W(V);pe&&U.push(pe)}}),U}const Q=I(()=>{if(e.multiple){const{value:l}=v;return Array.isArray(l)?N(l):[]}return null}),G=I(()=>{const{value:l}=v;return!e.multiple&&!Array.isArray(l)?l===null?null:N([l])[0]||null:null}),j=wn(e),{mergedSizeRef:E,mergedDisabledRef:D,mergedStatusRef:p}=j;function m(l,C){const{onChange:L,"onUpdate:value":H,onUpdateValue:W}=e,{nTriggerFormChange:U,nTriggerFormInput:V}=j;L&&K(L,l,C),W&&K(W,l,C),H&&K(H,l,C),u.value=l,U(),V()}function q(l){const{onBlur:C}=e,{nTriggerFormBlur:L}=j;C&&K(C,l),L()}function ne(){const{onClear:l}=e;l&&K(l)}function me(l){const{onFocus:C,showOnFocus:L}=e,{nTriggerFormFocus:H}=j;C&&K(C,l),H(),L&&ge()}function xe(l){const{onSearch:C}=e;C&&K(C,l)}function he(l){const{onScroll:C}=e;C&&K(C,l)}function ke(){var l;const{remote:C,multiple:L}=e;if(C){const{value:H}=te;if(L){const{valueField:W}=e;(l=Q.value)===null||l===void 0||l.forEach(U=>{H.set(U[W],U)})}else{const W=G.value;W&&H.set(W[e.valueField],W)}}}function Ce(l){const{onUpdateShow:C,"onUpdate:show":L}=e;C&&K(C,l),L&&K(L,l),B.value=l}function ge(){D.value||(Ce(!0),B.value=!0,e.filterable&&Ue())}function se(){Ce(!1)}function b(){g.value="",J.value=ee}const A=P(!1);function Fe(){e.filterable&&(A.value=!0)}function we(){e.filterable&&(A.value=!1,h.value||b())}function ze(){D.value||(h.value?e.filterable?Ue():se():ge())}function _e(l){var C,L;!((L=(C=_.value)===null||C===void 0?void 0:C.selfRef)===null||L===void 0)&&L.contains(l.relatedTarget)||(c.value=!1,q(l),se())}function $e(l){me(l),c.value=!0}function Ae(l){c.value=!0}function Re(l){var C;!((C=T.value)===null||C===void 0)&&C.$el.contains(l.relatedTarget)||(c.value=!1,q(l),se())}function Te(){var l;(l=T.value)===null||l===void 0||l.focus(),se()}function ye(l){var C;h.value&&(!((C=T.value)===null||C===void 0)&&C.$el.contains($o(l))||se())}function w(l){if(!Array.isArray(l))return[];if(de.value)return Array.from(l);{const{remote:C}=e,{value:L}=x;if(C){const{value:H}=te;return l.filter(W=>L.has(W)||H.has(W))}else return l.filter(H=>L.has(H))}}function M(l){re(l.rawNode)}function re(l){if(D.value)return;const{tag:C,remote:L,clearFilterAfterSelect:H,valueField:W}=e;if(C&&!L){const{value:U}=J,V=U[0]||null;if(V){const pe=X.value;pe.length?pe.push(V):X.value=[V],J.value=ee}}if(L&&te.value.set(l[W],l),e.multiple){const U=w(v.value),V=U.findIndex(pe=>pe===l[W]);if(~V){if(U.splice(V,1),C&&!L){const pe=Pe(l[W]);~pe&&(X.value.splice(pe,1),H&&(g.value=""))}}else U.push(l[W]),H&&(g.value="");m(U,N(U))}else{if(C&&!L){const U=Pe(l[W]);~U?X.value=[X.value[U]]:X.value=ee}je(),se(),m(l[W],l)}}function Pe(l){return X.value.findIndex(L=>L[e.valueField]===l)}function Ze(l){h.value||ge();const{value:C}=l.target;g.value=C;const{tag:L,remote:H}=e;if(xe(C),L&&!H){if(!C){J.value=ee;return}const{onCreate:W}=e,U=W?W(C):{[e.labelField]:C,[e.valueField]:C},{valueField:V}=e;le.value.some(pe=>pe[V]===U[V])||X.value.some(pe=>pe[V]===U[V])?J.value=ee:J.value=[U]}}function Ye(l){l.stopPropagation();const{multiple:C}=e;!C&&e.filterable&&se(),ne(),C?m([],[]):m(null,null)}function Xe(l){!mt(l,"action")&&!mt(l,"empty")&&l.preventDefault()}function Je(l){he(l)}function We(l){var C,L,H,W,U;switch(l.key){case" ":if(e.filterable)break;l.preventDefault();case"Enter":if(!(!((C=T.value)===null||C===void 0)&&C.isComposing)){if(h.value){const V=(L=_.value)===null||L===void 0?void 0:L.getPendingTmNode();V?M(V):e.filterable||(se(),je())}else if(ge(),e.tag&&A.value){const V=J.value[0];if(V){const pe=V[e.valueField],{value:Ee}=v;e.multiple&&Array.isArray(Ee)&&Ee.some(tt=>tt===pe)||re(V)}}}l.preventDefault();break;case"ArrowUp":if(l.preventDefault(),e.loading)return;h.value&&((H=_.value)===null||H===void 0||H.prev());break;case"ArrowDown":if(l.preventDefault(),e.loading)return;h.value?(W=_.value)===null||W===void 0||W.next():ge();break;case"Escape":h.value&&(Ao(l),se()),(U=T.value)===null||U===void 0||U.focus();break}}function je(){var l;(l=T.value)===null||l===void 0||l.focus()}function Ue(){var l;(l=T.value)===null||l===void 0||l.focusInput()}function Qe(){var l;h.value&&((l=$.value)===null||l===void 0||l.syncPosition())}ke(),Ie(be(e,"options"),ke);const et={focus:()=>{var l;(l=T.value)===null||l===void 0||l.focus()},blur:()=>{var l;(l=T.value)===null||l===void 0||l.blur()}},He=I(()=>{const{self:{menuBoxShadow:l}}=f.value;return{"--n-menu-box-shadow":l}}),Se=d?ct("select",void 0,He,e):void 0;return Object.assign(Object.assign({},et),{mergedStatus:p,mergedClsPrefix:n,mergedBordered:t,namespace:a,treeMate:y,isMounted:To(),triggerRef:T,menuRef:_,pattern:g,uncontrolledShow:B,mergedShow:h,adjustedTo:zt(e),uncontrolledValue:u,mergedValue:v,followerRef:$,localizedPlaceholder:Y,selectedOption:G,selectedOptions:Q,mergedSize:E,mergedDisabled:D,focused:c,activeWithoutMenuOpen:A,inlineThemeDisabled:d,onTriggerInputFocus:Fe,onTriggerInputBlur:we,handleTriggerOrMenuResize:Qe,handleMenuFocus:Ae,handleMenuBlur:Re,handleMenuTabOut:Te,handleTriggerClick:ze,handleToggle:M,handleDeleteOption:re,handlePatternInput:Ze,handleClear:Ye,handleTriggerBlur:_e,handleTriggerFocus:$e,handleKeydown:We,handleMenuAfterLeave:b,handleMenuClickOutside:ye,handleMenuScroll:Je,handleMenuKeydown:We,handleMenuMousedown:Xe,mergedTheme:f,cssVars:d?void 0:He,themeClass:Se==null?void 0:Se.themeClass,onRender:Se==null?void 0:Se.onRender})},render(){return o("div",{class:`${this.mergedClsPrefix}-select`},o(Do,null,{default:()=>[o(Wo,null,{default:()=>o(dr,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,n;return[(n=(e=this.$slots).arrow)===null||n===void 0?void 0:n.call(e)]}})}),o(jo,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===zt.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>o(hn,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,n,t;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Oo(o(Rn,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(n=this.menuProps)===null||n===void 0?void 0:n.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(t=this.menuProps)===null||t===void 0?void 0:t.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var a,d;return[(d=(a=this.$slots).empty)===null||d===void 0?void 0:d.call(a)]},action:()=>{var a,d;return[(d=(a=this.$slots).action)===null||d===void 0?void 0:d.call(a)]}}),this.displayDirective==="show"?[[Io,this.mergedShow],[Ht,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ht,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});function Sr(e,n,t){let a=!1,d=!1,f=1,u=n;if(n===1)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:u,fastBackwardTo:f,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}]};if(n===2)return{hasFastBackward:!1,hasFastForward:!1,fastForwardTo:u,fastBackwardTo:f,items:[{type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1},{type:"page",label:2,active:e===2,mayBeFastBackward:!0,mayBeFastForward:!1}]};const i=1,v=n;let c=e,g=e;const y=(t-5)/2;g+=Math.ceil(y),g=Math.min(Math.max(g,i+t-3),v-2),c-=Math.floor(y),c=Math.max(Math.min(c,v-t+3),i+2);let x=!1,B=!1;c>i+2&&(x=!0),g<v-2&&(B=!0);const h=[];h.push({type:"page",label:1,active:e===1,mayBeFastBackward:!1,mayBeFastForward:!1}),x?(a=!0,f=c-1,h.push({type:"fast-backward",active:!1,label:void 0,options:sn(i+1,c-1)})):v>=i+1&&h.push({type:"page",label:i+1,mayBeFastBackward:!0,mayBeFastForward:!1,active:e===i+1});for(let T=c;T<=g;++T)h.push({type:"page",label:T,mayBeFastBackward:!1,mayBeFastForward:!1,active:e===T});return B?(d=!0,u=g+1,h.push({type:"fast-forward",active:!1,label:void 0,options:sn(g+1,v-1)})):g===v-2&&h[h.length-1].label!==v-1&&h.push({type:"page",mayBeFastForward:!0,mayBeFastBackward:!1,label:v-1,active:e===v-1}),h[h.length-1].label!==v&&h.push({type:"page",mayBeFastForward:!1,mayBeFastBackward:!1,label:v,active:e===v}),{hasFastBackward:a,hasFastForward:d,fastBackwardTo:f,fastForwardTo:u,items:h}}function sn(e,n){const t=[];for(let a=e;a<=n;++a)t.push({label:`${a}`,value:a});return t}const dn=`
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`,un=[Z("button",`
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)],kr=k("pagination",`
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`,[k("pagination-prefix",`
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `),k("pagination-suffix",`
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `),oe("> *:not(:first-child)",`
 margin: var(--n-item-margin);
 `),k("select",`
 width: var(--n-select-width);
 `),oe("&.transition-disabled",[k("pagination-item","transition: none!important;")]),k("pagination-quick-jumper",`
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `,[k("input",`
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]),k("pagination-item",`
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `,[Z("button",`
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `,[k("base-icon",`
 font-size: var(--n-button-icon-size);
 `)]),De("disabled",[Z("hover",dn,un),oe("&:hover",dn,un),oe("&:active",`
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `,[Z("button",`
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]),Z("active",`
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `,[oe("&:hover",`
 background: var(--n-item-color-active-hover);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `,[Z("active, button",`
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]),Z("disabled",`
 cursor: not-allowed;
 `,[k("pagination-quick-jumper",`
 color: var(--n-jumper-text-color-disabled);
 `)]),Z("simple",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `,[k("pagination-quick-jumper",[k("input",`
 margin: 0;
 `)])])]),zr=Object.assign(Object.assign({},Me.props),{simple:Boolean,page:Number,defaultPage:{type:Number,default:1},itemCount:Number,pageCount:Number,defaultPageCount:{type:Number,default:1},showSizePicker:Boolean,pageSize:Number,defaultPageSize:Number,pageSizes:{type:Array,default(){return[10]}},showQuickJumper:Boolean,size:{type:String,default:"medium"},disabled:Boolean,pageSlot:{type:Number,default:9},selectProps:Object,prev:Function,next:Function,goto:Function,prefix:Function,suffix:Function,label:Function,displayOrder:{type:Array,default:["pages","size-picker","quick-jumper"]},to:zt.propTo,"onUpdate:page":[Function,Array],onUpdatePage:[Function,Array],"onUpdate:pageSize":[Function,Array],onUpdatePageSize:[Function,Array],onPageSizeChange:[Function,Array],onChange:[Function,Array]}),Er=ce({name:"Pagination",props:zr,setup(e){const{mergedComponentPropsRef:n,mergedClsPrefixRef:t,inlineThemeDisabled:a,mergedRtlRef:d}=Pt(e),f=Me("Pagination","-pagination",kr,Eo,e,t),{localeRef:u}=Nt("Pagination"),i=P(null),v=P(e.defaultPage),g=P((()=>{const{defaultPageSize:b}=e;if(b!==void 0)return b;const A=e.pageSizes[0];return typeof A=="number"?A:A.value||10})()),y=bt(be(e,"page"),v),x=bt(be(e,"pageSize"),g),B=I(()=>{const{itemCount:b}=e;if(b!==void 0)return Math.max(1,Math.ceil(b/x.value));const{pageCount:A}=e;return A!==void 0?Math.max(A,1):1}),h=P("");dt(()=>{e.simple,h.value=String(y.value)});const T=P(!1),$=P(!1),_=P(!1),R=P(!1),Y=()=>{e.disabled||(T.value=!0,j())},le=()=>{e.disabled||(T.value=!1,j())},ee=()=>{$.value=!0,j()},X=()=>{$.value=!1,j()},J=b=>{E(b)},te=I(()=>Sr(y.value,B.value,e.pageSlot));dt(()=>{te.value.hasFastBackward?te.value.hasFastForward||(T.value=!1,_.value=!1):($.value=!1,R.value=!1)});const de=I(()=>{const b=u.value.selectionSuffix;return e.pageSizes.map(A=>typeof A=="number"?{label:`${A} / ${b}`,value:A}:A)}),fe=I(()=>{var b,A;return((A=(b=n==null?void 0:n.value)===null||b===void 0?void 0:b.Pagination)===null||A===void 0?void 0:A.inputSize)||qt(e.size)}),F=I(()=>{var b,A;return((A=(b=n==null?void 0:n.value)===null||b===void 0?void 0:b.Pagination)===null||A===void 0?void 0:A.selectSize)||qt(e.size)}),S=I(()=>(y.value-1)*x.value),N=I(()=>{const b=y.value*x.value-1,{itemCount:A}=e;return A!==void 0&&b>A-1?A-1:b}),Q=I(()=>{const{itemCount:b}=e;return b!==void 0?b:(e.pageCount||1)*x.value}),G=xn("Pagination",d,t),j=()=>{Ge(()=>{var b;const{value:A}=i;A&&(A.classList.add("transition-disabled"),(b=i.value)===null||b===void 0||b.offsetWidth,A.classList.remove("transition-disabled"))})};function E(b){if(b===y.value)return;const{"onUpdate:page":A,onUpdatePage:Fe,onChange:we,simple:ze}=e;A&&K(A,b),Fe&&K(Fe,b),we&&K(we,b),v.value=b,ze&&(h.value=String(b))}function D(b){if(b===x.value)return;const{"onUpdate:pageSize":A,onUpdatePageSize:Fe,onPageSizeChange:we}=e;A&&K(A,b),Fe&&K(Fe,b),we&&K(we,b),g.value=b,B.value<y.value&&E(B.value)}function p(){if(e.disabled)return;const b=Math.min(y.value+1,B.value);E(b)}function m(){if(e.disabled)return;const b=Math.max(y.value-1,1);E(b)}function q(){if(e.disabled)return;const b=Math.min(te.value.fastForwardTo,B.value);E(b)}function ne(){if(e.disabled)return;const b=Math.max(te.value.fastBackwardTo,1);E(b)}function me(b){D(b)}function xe(){const b=parseInt(h.value);Number.isNaN(b)||(E(Math.max(1,Math.min(b,B.value))),e.simple||(h.value=""))}function he(){xe()}function ke(b){if(!e.disabled)switch(b.type){case"page":E(b.label);break;case"fast-backward":ne();break;case"fast-forward":q();break}}function Ce(b){h.value=b.replace(/\D+/g,"")}dt(()=>{y.value,x.value,j()});const ge=I(()=>{const{size:b}=e,{self:{buttonBorder:A,buttonBorderHover:Fe,buttonBorderPressed:we,buttonIconColor:ze,buttonIconColorHover:_e,buttonIconColorPressed:$e,itemTextColor:Ae,itemTextColorHover:Re,itemTextColorPressed:Te,itemTextColorActive:ye,itemTextColorDisabled:w,itemColor:M,itemColorHover:re,itemColorPressed:Pe,itemColorActive:Ze,itemColorActiveHover:Ye,itemColorDisabled:Xe,itemBorder:Je,itemBorderHover:We,itemBorderPressed:je,itemBorderActive:Ue,itemBorderDisabled:Qe,itemBorderRadius:et,jumperTextColor:He,jumperTextColorDisabled:Se,buttonColor:l,buttonColorHover:C,buttonColorPressed:L,[ue("itemPadding",b)]:H,[ue("itemMargin",b)]:W,[ue("inputWidth",b)]:U,[ue("selectWidth",b)]:V,[ue("inputMargin",b)]:pe,[ue("selectMargin",b)]:Ee,[ue("jumperFontSize",b)]:tt,[ue("prefixMargin",b)]:Ke,[ue("suffixMargin",b)]:qe,[ue("itemSize",b)]:ft,[ue("buttonIconSize",b)]:ht,[ue("itemFontSize",b)]:lt,[`${ue("itemMargin",b)}Rtl`]:Oe,[`${ue("inputMargin",b)}Rtl`]:r},common:{cubicBezierEaseInOut:s}}=f.value;return{"--n-prefix-margin":Ke,"--n-suffix-margin":qe,"--n-item-font-size":lt,"--n-select-width":V,"--n-select-margin":Ee,"--n-input-width":U,"--n-input-margin":pe,"--n-input-margin-rtl":r,"--n-item-size":ft,"--n-item-text-color":Ae,"--n-item-text-color-disabled":w,"--n-item-text-color-hover":Re,"--n-item-text-color-active":ye,"--n-item-text-color-pressed":Te,"--n-item-color":M,"--n-item-color-hover":re,"--n-item-color-disabled":Xe,"--n-item-color-active":Ze,"--n-item-color-active-hover":Ye,"--n-item-color-pressed":Pe,"--n-item-border":Je,"--n-item-border-hover":We,"--n-item-border-disabled":Qe,"--n-item-border-active":Ue,"--n-item-border-pressed":je,"--n-item-padding":H,"--n-item-border-radius":et,"--n-bezier":s,"--n-jumper-font-size":tt,"--n-jumper-text-color":He,"--n-jumper-text-color-disabled":Se,"--n-item-margin":W,"--n-item-margin-rtl":Oe,"--n-button-icon-size":ht,"--n-button-icon-color":ze,"--n-button-icon-color-hover":_e,"--n-button-icon-color-pressed":$e,"--n-button-color-hover":C,"--n-button-color":l,"--n-button-color-pressed":L,"--n-button-border":A,"--n-button-border-hover":Fe,"--n-button-border-pressed":we}}),se=a?ct("pagination",I(()=>{let b="";const{size:A}=e;return b+=A[0],b}),ge,e):void 0;return{rtlEnabled:G,mergedClsPrefix:t,locale:u,selfRef:i,mergedPage:y,pageItems:I(()=>te.value.items),mergedItemCount:Q,jumperValue:h,pageSizeOptions:de,mergedPageSize:x,inputSize:fe,selectSize:F,mergedTheme:f,mergedPageCount:B,startIndex:S,endIndex:N,showFastForwardMenu:_,showFastBackwardMenu:R,fastForwardActive:T,fastBackwardActive:$,handleMenuSelect:J,handleFastForwardMouseenter:Y,handleFastForwardMouseleave:le,handleFastBackwardMouseenter:ee,handleFastBackwardMouseleave:X,handleJumperInput:Ce,handleBackwardClick:m,handleForwardClick:p,handlePageItemClick:ke,handleSizePickerChange:me,handleQuickJumperChange:he,cssVars:a?void 0:ge,themeClass:se==null?void 0:se.themeClass,onRender:se==null?void 0:se.onRender}},render(){const{$slots:e,mergedClsPrefix:n,disabled:t,cssVars:a,mergedPage:d,mergedPageCount:f,pageItems:u,showSizePicker:i,showQuickJumper:v,mergedTheme:c,locale:g,inputSize:y,selectSize:x,mergedPageSize:B,pageSizeOptions:h,jumperValue:T,simple:$,prev:_,next:R,prefix:Y,suffix:le,label:ee,goto:X,handleJumperInput:J,handleSizePickerChange:te,handleBackwardClick:de,handlePageItemClick:fe,handleForwardClick:F,handleQuickJumperChange:S,onRender:N}=this;N==null||N();const Q=e.prefix||Y,G=e.suffix||le,j=_||e.prev,E=R||e.next,D=ee||e.label;return o("div",{ref:"selfRef",class:[`${n}-pagination`,this.themeClass,this.rtlEnabled&&`${n}-pagination--rtl`,t&&`${n}-pagination--disabled`,$&&`${n}-pagination--simple`],style:a},Q?o("div",{class:`${n}-pagination-prefix`},Q({page:d,pageSize:B,pageCount:f,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null,this.displayOrder.map(p=>{switch(p){case"pages":return o(kt,null,o("div",{class:[`${n}-pagination-item`,!j&&`${n}-pagination-item--button`,(d<=1||d>f||t)&&`${n}-pagination-item--disabled`],onClick:de},j?j({page:d,pageSize:B,pageCount:f,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount}):o(Be,{clsPrefix:n},{default:()=>this.rtlEnabled?o(en,null):o(Xt,null)})),$?o(kt,null,o("div",{class:`${n}-pagination-quick-jumper`},o(ln,{value:T,onUpdateValue:J,size:y,placeholder:"",disabled:t,theme:c.peers.Input,themeOverrides:c.peerOverrides.Input,onChange:S}))," / ",f):u.map((m,q)=>{let ne,me,xe;const{type:he}=m;switch(he){case"page":const Ce=m.label;D?ne=D({type:"page",node:Ce,active:m.active}):ne=Ce;break;case"fast-forward":const ge=this.fastForwardActive?o(Be,{clsPrefix:n},{default:()=>this.rtlEnabled?o(Jt,null):o(Qt,null)}):o(Be,{clsPrefix:n},{default:()=>o(tn,null)});D?ne=D({type:"fast-forward",node:ge,active:this.fastForwardActive||this.showFastForwardMenu}):ne=ge,me=this.handleFastForwardMouseenter,xe=this.handleFastForwardMouseleave;break;case"fast-backward":const se=this.fastBackwardActive?o(Be,{clsPrefix:n},{default:()=>this.rtlEnabled?o(Qt,null):o(Jt,null)}):o(Be,{clsPrefix:n},{default:()=>o(tn,null)});D?ne=D({type:"fast-backward",node:se,active:this.fastBackwardActive||this.showFastBackwardMenu}):ne=se,me=this.handleFastBackwardMouseenter,xe=this.handleFastBackwardMouseleave;break}const ke=o("div",{key:q,class:[`${n}-pagination-item`,m.active&&`${n}-pagination-item--active`,he!=="page"&&(he==="fast-backward"&&this.showFastBackwardMenu||he==="fast-forward"&&this.showFastForwardMenu)&&`${n}-pagination-item--hover`,t&&`${n}-pagination-item--disabled`,he==="page"&&`${n}-pagination-item--clickable`],onClick:()=>fe(m),onMouseenter:me,onMouseleave:xe},ne);if(he==="page"&&!m.mayBeFastBackward&&!m.mayBeFastForward)return ke;{const Ce=m.type==="page"?m.mayBeFastBackward?"fast-backward":"fast-forward":m.type;return o(xr,{to:this.to,key:Ce,disabled:t,trigger:"hover",virtualScroll:!0,style:{width:"60px"},theme:c.peers.Popselect,themeOverrides:c.peerOverrides.Popselect,builtinThemeOverrides:{peers:{InternalSelectMenu:{height:"calc(var(--n-option-height) * 4.6)"}}},nodeProps:()=>({style:{justifyContent:"center"}}),show:he==="page"?!1:he==="fast-backward"?this.showFastBackwardMenu:this.showFastForwardMenu,onUpdateShow:ge=>{he!=="page"&&(ge?he==="fast-backward"?this.showFastBackwardMenu=ge:this.showFastForwardMenu=ge:(this.showFastBackwardMenu=!1,this.showFastForwardMenu=!1))},options:m.type!=="page"?m.options:[],onUpdateValue:this.handleMenuSelect,scrollable:!0,showCheckmark:!1},{default:()=>ke})}}),o("div",{class:[`${n}-pagination-item`,!E&&`${n}-pagination-item--button`,{[`${n}-pagination-item--disabled`]:d<1||d>=f||t}],onClick:F},E?E({page:d,pageSize:B,pageCount:f,itemCount:this.mergedItemCount,startIndex:this.startIndex,endIndex:this.endIndex}):o(Be,{clsPrefix:n},{default:()=>this.rtlEnabled?o(Xt,null):o(en,null)})));case"size-picker":return!$&&i?o(Fr,Object.assign({consistentMenuWidth:!1,placeholder:"",showCheckmark:!1,to:this.to},this.selectProps,{size:x,options:h,value:B,disabled:t,theme:c.peers.Select,themeOverrides:c.peerOverrides.Select,onUpdateValue:te})):null;case"quick-jumper":return!$&&v?o("div",{class:`${n}-pagination-quick-jumper`},X?X():it(this.$slots.goto,()=>[g.goto]),o(ln,{value:T,onUpdateValue:J,size:y,placeholder:"",disabled:t,theme:c.peers.Input,themeOverrides:c.peerOverrides.Input,onChange:S})):null;default:return null}}),G?o("div",{class:`${n}-pagination-suffix`},G({page:d,pageSize:B,pageCount:f,startIndex:this.startIndex,endIndex:this.endIndex,itemCount:this.mergedItemCount})):null)}});export{nr as C,ln as N,Xo as V,Er as a,qt as s};
