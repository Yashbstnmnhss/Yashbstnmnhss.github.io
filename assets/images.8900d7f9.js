import{_ as pt,N as gt}from"./avatar.9a25a32d.js";import{_ as ht}from"./fuzeshout.38c13fc7.js";import{t as mt}from"./imports.3dece87e.js";import{b as Ee}from"./route-block.b5bad31b.js";import{af as bt,b as Q,E as ie,i as M,B as ye,bJ as xt,h as y,bK as yt,D as _t,f as m,o as He,e as Je,X as wt,Y as c,Z as D,a3 as f,a6 as me,aa as St,w as zt,a8 as Ve,bL as Pt,Q as se,F as Qe,$ as kt,H as jt,bs as qe,W as Oe,bM as $e,bf as Rt,bo as Ct,a1 as It,am as Me,be as H,bc as J,bN as Tt,k as Ae,p as Be,m as Le,n as re,ah as Xe,j as be,g as Dt,v as Nt,bO as Et,l as Vt}from"./index.62ade1b0.js";import{N as Ot}from"./headers.3c71653a.js";import"./use-locale.91628de5.js";import"./Tooltip.f68f720d.js";import"./format-length.7f3135aa.js";import"./cssr.ab5f485e.js";function Fe(t){return window.TouchEvent&&t instanceof window.TouchEvent}function Ue(t,l){let n=t.clientWidth,s=t.clientHeight;if(l){const v=getComputedStyle(t);return n=n-parseFloat(v.getPropertyValue("padding-left"))-parseFloat(v.getPropertyValue("padding-right")),s=s-parseFloat(v.getPropertyValue("padding-top"))-parseFloat(v.getPropertyValue("padding-bottom")),{width:n,height:s}}return{width:n,height:s}}function Ye(t,l,n){return t<l?l:t>n?n:t}function $t(t){if(t===void 0)return 0;if(typeof t=="number")return t;const l=/^((\d+)?\.?\d+?)(ms|s)?$/,n=t.match(l);if(n){const[,s,,v="ms"]=n;return Number(s)*(v==="ms"?1:1e3)}return 0}function Ke(t,l,n){return n?t===0?l-3:t===l-1?0:t-1:t}function We(t,l){return l?t+1:t}function Mt(t,l,n){return t<0?null:t===0?n?l-1:null:t-1}function At(t,l,n){return t>l-1?null:t===l-1?n?0:null:t+1}const Bt=(...t)=>t,ue=bt("n-carousel-methods"),Lt={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean};var Xt=Q({name:"CarouselDots",props:Lt,setup(t){const{mergedClsPrefixRef:l}=ie(t),n=M([]),s=ye(ue,null);function v(d,p){switch(d.code){case"Enter":case"NumpadEnter":case"Space":s.to(p);return}t.keyboard&&S(d)}function z(d){t.trigger==="hover"&&s.to(d)}function _(d){t.trigger==="click"&&s.to(d)}function S(d){var p;const{code:w}=d,C=s.isVertical(),A=w==="PageUp"||w==="ArrowUp",B=w==="PageDown"||w==="ArrowDown",k=w==="PageUp"||w==="ArrowRight",b=w==="PageDown"||w==="ArrowLeft";if(C&&(A&&s.isNextDisabled()||B&&s.isPrevDisabled())||!C&&(k&&s.isNextDisabled()||b&&s.isPrevDisabled())||d.shiftKey||d.altKey||d.ctrlKey||d.metaKey)return;const P=(p=document.activeElement)===null||p===void 0?void 0:p.nodeName.toLowerCase();P==="input"||P==="textarea"||((C?A:k)?(d.preventDefault(),s.next(),j(s.getCurrentIndex())):(C?B:b)&&(d.preventDefault(),s.prev(),j(s.getCurrentIndex())))}function j(d=t.currentIndex){const{value:p}=n;d>=0&&d<p.length&&p[d].focus()}return xt(()=>n.value.length=0),{mergedClsPrefix:l,dotEls:n,handleKeydown:v,handleMouseenter:z,handleClick:_}},render(){const{mergedClsPrefix:t,dotEls:l}=this;return y("div",{class:[`${t}-carousel__dots`,`${t}-carousel__dots--${this.dotType}`],role:"tablist"},yt(this.total,n=>{const s=n===this.currentIndex;return y("div",{"aria-selected":s,ref:v=>l.push(v),role:"button",tabindex:"0",class:[`${t}-carousel__dot`,s&&`${t}-carousel__dot--active`],key:n,onClick:()=>this.handleClick(n),onMouseenter:()=>this.handleMouseenter(n),onKeydown:v=>this.handleKeydown(v,n)})}))}});const Ft=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"}))),Ut=y("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},y("g",{fill:"none"},y("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})));var Yt=Q({name:"CarouselArrow",setup(t){const{mergedClsPrefixRef:l}=ie(t),{isVertical:n,isPrevDisabled:s,isNextDisabled:v,prev:z,next:_}=ye(ue,null);return{mergedClsPrefix:l,isVertical:n,isPrevDisabled:s,isNextDisabled:v,prev:z,next:_}},render(){const{mergedClsPrefix:t}=this;return y("div",{class:`${t}-carousel__arrow-group`},y("div",{class:[`${t}-carousel__arrow`,this.isPrevDisabled()&&`${t}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Ft),y("div",{class:[`${t}-carousel__arrow`,this.isNextDisabled()&&`${t}-carousel__arrow--disabled`],role:"button",onClick:this.next},Ut))}}),Kt=Q({name:"CarouselItem",setup(t){const{mergedClsPrefixRef:l}=ie(t),n=ye(ue,null);n||_t("carousel-item","`n-carousel-item` must be placed inside `n-carousel`.");const s=M(),v=m(()=>{const{value:p}=s;return Boolean(p&&n.isPrev(p))}),z=m(()=>{const{value:p}=s;return Boolean(p&&n.isNext(p))}),_=m(()=>{const{value:p}=s;return Boolean(p&&n.isActive(p))}),S=m(()=>{const{value:p}=s;return p&&n.getSlideStyle(p)}),j=m(()=>{const{value:p}=s;return p&&n.getSlideIndex(p)});function d(p){const{value:w}=j;w!==void 0&&(n==null||n.onCarouselItemClick(w,p))}return He(()=>n.addSlide(s.value)),Je(()=>{n.removeSlide(s.value)}),{mergedClsPrefix:l,selfElRef:s,isPrev:v,isNext:z,isActive:_,index:j,style:S,prevSlideStyle:n.prevSlideStyleRef,nextSlideStyle:n.nextSlideStyleRef,handleClick:d}},render(){var t;const{$slots:l,mergedClsPrefix:n,isPrev:s,isNext:v,isActive:z,index:_,style:S}=this,j=[`${n}-carousel__slide`,{[`${n}-carousel__slide--current`]:z,[`${n}-carousel__slide--prev`]:s,[`${n}-carousel__slide--next`]:v}];return y("div",{ref:"selfElRef",class:j,role:"option",tabindex:"-1","data-index":_,"aria-hidden":!z,style:[S,s?this.prevSlideStyle:"",v?this.nextSlideStyle:""],onClickCapture:this.handleClick},(t=l.default)===null||t===void 0?void 0:t.call(l,{isPrev:s,isNext:v,isActive:z,index:_}))}}),Wt=wt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 overflow: hidden;
`,[c("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 touch-action: pan-y;
 `,[c("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[D("> img",`
 display: block;
 `)])]),c("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[f("dot",[c("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[D("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 background-color: var(--n-dot-color-active);
 `)])]),f("line",[c("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[D("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),f("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),c("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 font-size: 18px;
 `,[D("svg",`
 height: 1em;
 width: 1em;
 `),D("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),f("vertical",[c("slides",`
 flex-direction: column;
 touch-action: pan-x;
 `),f("fade",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),f("card",[c("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[f("current",`
 transform: translateY(-50%) translateZ(0);
 `),f("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),f("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),f("usercontrol",[c("slides",[D(">",[D("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 `)])])]),f("left",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `)]),c("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),f("vertical",[c("arrow",`
 transform: rotate(90deg);
 `)]),f("show-arrow",[f("bottom",[c("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),f("top",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("left",[c("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),f("right",[c("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),f("left",[c("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[D("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("right",[c("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[f("line",[c("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[f("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),c("dot",`
 margin: 4px 0;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[D("> *:first-child",`
 margin-bottom: 12px;
 `)])]),f("top",[c("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 top: 12px;
 right: 12px;
 `,[D("> *:first-child",`
 margin-right: 12px;
 `)])]),f("bottom",[c("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[f("line",[c("dot",`
 margin: 0 4px;
 `)])]),c("dot",`
 margin: 0 4px;
 `),c("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[D("> *:first-child",`
 margin-right: 12px;
 `)])]),f("fade",[c("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 `,[f("current",`
 opacity: 1;
 `)])]),f("card",[c("slides",`
 perspective: 1000px;
 `),c("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[f("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),f("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),f("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);const Zt=Bt("transitionDuration","transitionTimingFunction"),Ht=Object.assign(Object.assign({},Qe.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let xe=!1;var Jt=Q({name:"Carousel",props:Ht,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:n}=ie(t),s=M(null),v=M([]),z={value:[]},_=m(()=>t.effect==="custom"),S=m(()=>!_.value&&t.effect==="slide"),j=m(()=>t.loop&&t.slidesPerView===1),d=m(()=>S.value&&j.value),p=m(()=>_.value||t.centeredSlides||t.effect!=="slide"?1:t.slidesPerView),w=m(()=>_.value?1:t.slidesPerView),C=m(()=>p.value==="auto"||t.slidesPerView==="auto"&&t.centeredSlides),A=m(()=>t.transitionStyle?Me(t.transitionStyle,Zt):{}),B=m(()=>_.value?0:$t(A.value.transitionDuration)),k=m(()=>t.direction==="vertical"),b=m(()=>k.value?"height":"width"),P=M({width:0,height:0}),R=m(()=>{const{value:e}=v,{length:o}=e;if(!o)return[];if(C.value)return e.map(g=>Ue(g));const{value:a}=w,{value:u}=P,{value:i}=b;let r=u[i];if(a!=="auto"){const{spaceBetween:g}=t,x=r-(a-1)*g,h=1/Math.max(1,a);r=x*h}return e.map(()=>Object.assign(Object.assign({},u),{[i]:r}))}),N=m(()=>{const{value:e}=R,{length:o}=e;if(!o)return[];const{centeredSlides:a,spaceBetween:u}=t,{value:i}=b,{[i]:r}=P.value;let g=0;return e.map(({[i]:x})=>{let h=g;return a&&(h+=(x-r)/2),g+=x+u,h})});let _e=!1;const we=m(()=>{const{value:e}=R,{length:o}=e;if(!o)return[];const{value:a}=b;if(_.value)return e.map(h=>({[a]:`${h[a]}px`}));const{effect:u,spaceBetween:i}=t,{value:r}=k,g=r?"bottom":"right",x=[];for(let h=0;h<o;h++){const X=e[h][a],Ne={[a]:`${X}px`,[`margin-${g}`]:`${i}px`};_e&&(u==="fade"||u==="card")&&Object.assign(Ne,A.value),x.push(Ne)}return x}),O=m(()=>{const{value:e}=p,{length:o}=v.value;if(e!=="auto")return o-e+1;{const{value:a}=R,{length:u}=a;if(!u)return o;const{value:i}=N,{value:r}=b,g=P.value[r];let x=a[a.length-1][r],h=u;for(;h>1&&x<g;)h--,x+=i[h]-i[h-1];return h!==u&&h++,h<1&&(h=1),h}}),F=m(()=>{const{value:e}=O;return d.value&&e>3?e-2:e}),ce=t.defaultIndex+(d.value?1:0),E=M(Ke(ce,O.value,d.value)),Se=M(ce),I=M(ce);let L=0;function q(e,o=B.value){var a,u;const{value:i}=O;if((e=Ye(e,0,i-1))!==I.value){const{value:r}=E;d.value&&F.value>2&&(r===0&&e===F.value?e=0:r===F.value-1&&e===1&&(e=i-1));const g=E.value=Ke(e,O.value,d.value);Se.value=e,I.value=We(g,d.value),S.value?ve(e,o):(!_.value&&o>0&&(V=!0),ne()),g!==r&&((a=t["onUpdate:currentIndex"])===null||a===void 0||a.call(t,g,r),(u=t.onUpdateCurrentIndex)===null||u===void 0||u.call(t,g,r))}}function G(e=I.value){return Mt(e,O.value,t.loop)}function ee(e=I.value){return At(e,O.value,t.loop)}function Ge(e){const o=Y(e);return o!==null&&G()===o}function et(e){const o=Y(e);return o!==null&&ee()===o}function ze(e){return I.value===Y(e)}function tt(e){return E.value===e}function Pe(){return G()===null}function ke(){return ee()===null}function U(e){const o=We(e,d.value);(e!==E.value||o!==I.value)&&q(o)}function de(){const e=G();e!==null&&q(e)}function te(){const e=ee();e!==null&&q(e)}const fe=M({});let V=!1;function oe(e,o=0){const a=t.direction==="vertical";fe.value=Object.assign({},A.value,{transform:a?`translateY(${-e}px)`:`translateX(${-e}px)`,transitionDuration:`${o}ms`})}function ne(e=0){S.value?ve(I.value,e):L!==0&&oe(L=0,e)}function ve(e,o=B.value){const a=je(e);a!==L&&o>0&&(V=!0),oe(a,o),L=je(I.value)}function je(e){let o;return e>=O.value-1?o=Re():o=N.value[e]||0,o}function Re(){if(p.value==="auto"){const{value:e}=b,{[e]:o}=P.value,{value:a}=N,u=a[a.length-1];let i;if(u===void 0)i=o;else{const{value:r}=R;i=u+r[r.length-1][e]}return i-o}else{const{value:e}=N;return e[O.value-1]||0}}function ot(e){!e||v.value.push(e)}function nt(e){if(!e)return;const o=Y(e);o!==-1&&v.value.splice(o,1)}function Y(e){return typeof e=="number"?e:v.value.indexOf(e)}function at(e){const o=Y(e);if(o!==-1)return we.value[o]}function lt(e,o){let u=!V&&!(T&28);t.effect==="card"&&!_.value&&!(T&8)&&!ze(e)&&(U(e),u=!1),u||(o.preventDefault(),o.stopPropagation())}const Ce={to:U,prev:()=>{(!V||!d.value)&&de()},next:()=>{(!V||!d.value)&&te()},isVertical:()=>k.value,isHorizontal:()=>!k.value,isPrev:Ge,isNext:et,isActive:ze,isPrevDisabled:Pe,isNextDisabled:ke,getCurrentIndex:()=>E.value,getSlideIndex:Y,getSlideStyle:at,addSlide:ot,removeSlide:nt,onCarouselItemClick:lt,prevSlideStyleRef:me(t,"prevSlideStyle"),nextSlideStyleRef:me(t,"nextSlideStyle")};St(ue,Ce);let ae=null;function K(e){ae&&(clearInterval(ae),ae=null);const{autoplay:o,interval:a}=t;o&&a&&!e&&(ae=setInterval(te,a))}function Ie(){const{autoplay:e}=t;e?K():F.value<2&&K(!0)}let pe=0,ge=0,$=0,he=0,T=1;function st(e){if(xe)return;he=Date.now(),T=2,xe=!0,K(!0),e.type!=="touchstart"&&!e.target.isContentEditable&&e.preventDefault();const o=Fe(e)?e.touches[0]:e;k.value?ge=o.clientY:pe=o.clientX,t.touchable&&(H("touchmove",document,le),H("touchend",document,W),H("touchcancel",document,W)),t.draggable&&(H("mousemove",document,le),H("mouseup",document,W))}function le(e){const{value:o}=k,a=o?"height":"width",u=P.value[a],i=Fe(e)?e.touches[0]:e,r=o?i.clientY-ge:i.clientX-pe;$=Ye(r,-u,u),T=4,S.value&&oe(L-$,0)}function W(){const e=Date.now()-he,{value:o}=b,{value:a}=I,{value:u}=S;let i=a;if(!V&&u&&$!==0){const r=L-$,g=[...N.value.slice(0,O.value-1),Re()];let x=null;for(let h=0;h<g.length;h++){const X=Math.abs(g[h]-r);if(x!==null&&x<X)break;x=X,i=h}}if(i===a){const r=P.value[o];$>r/2||$/e>.4?i=G(a):($<-r/2||$/e<-.4)&&(i=ee(a))}i!==null&&i!==a?(T=8,q(i)):(T&4?T=16:T=32,ne(B.value)),Ie(),Te()}function Te(){T&1||(xe=!1,T&6&&(T=1)),pe=0,ge=0,$=0,he=0,J("touchmove",document,le),J("touchend",document,W),J("touchcancel",document,W),J("mousemove",document,le),J("mouseup",document,W)}function rt(){const{value:e}=Se,{value:o}=I;V&&e!==o?ve(o,0):K(),S.value&&(fe.value.transitionDuration="0ms"),V=!1}function it(e){if(e.preventDefault(),V)return;const{value:o}=k;let{deltaX:a,deltaY:u}=e;e.shiftKey&&!a&&(a=u);const i=-1,r=1,g=(a||u)>0?r:i;let x=0,h=0;o?h=g:x=g;const X=10;(h*u>=X||x*a>=X)&&(g===r&&!ke()?te():g===i&&!Pe()&&de())}function ut(){P.value=Ue(s.value,!0),K()}function ct(){var e,o;C.value&&((o=(e=R.effect).scheduler)===null||o===void 0||o.call(e),R.effect.run())}He(()=>{zt(Ie),Ve(()=>_e=!0)}),Je(()=>{Te(),K(!0)}),Pt(()=>{const{value:e}=v,{value:o}=z,a=new Map,u=r=>a.has(r)?a.get(r):-1;let i=!1;for(let r=0;r<e.length;r++){const g=o.findIndex(x=>x.el===e[r]);g!==r&&(i=!0),a.set(e[r],g)}i&&e.sort((r,g)=>u(r)-u(g))}),se(me(t,"currentIndex"),e=>e!==void 0&&U(e)),se(d,()=>void Ve(()=>U(E.value))),se(N,()=>S.value&&ne(),{deep:!0}),se(S,e=>{e?ne():(V=!1,oe(L=0))});const dt={arrowSlotProps:m(()=>Object.assign({total:F.value,currentIndex:E.value},Me(Ce,["to","prev","next","isPrevDisabled","isNextDisabled"]))),dotSlotProps:m(()=>({total:F.value,currentIndex:E.value,to:U}))},ft={getCurrentIndex:()=>E.value,to:U,prev:de,next:te},vt=Qe("Carousel","-carousel",Wt,Tt,t,l),De=m(()=>{const{common:{cubicBezierEaseInOut:e},self:{dotSize:o,dotColor:a,dotColorActive:u,dotColorFocus:i,dotLineWidth:r,dotLineWidthActive:g,arrowColor:x}}=vt.value;return{"--n-bezier":e,"--n-dot-color":a,"--n-dot-color-focus":i,"--n-dot-color-active":u,"--n-dot-size":o,"--n-dot-line-width":r,"--n-dot-line-width-active":g,"--n-arrow-color":x}}),Z=n?kt("carousel",void 0,De,t):void 0;return Object.assign(Object.assign(Object.assign({mergedClsPrefix:l,selfElRef:s,slideVNodes:z,duplicatedable:d,userWantsControl:_,autoSlideSize:C,displayIndex:E,realIndex:I,slideStyles:we,translateStyle:fe,handleTouchstart:st,handleTransitionEnd:rt,handleMousewheel:it,handleResize:ut,handleSlideResize:ct,isActive:tt},dt),ft),{cssVars:n?void 0:De,themeClass:Z==null?void 0:Z.themeClass,onRender:Z==null?void 0:Z.onRender})},render(){var t;const{mergedClsPrefix:l,showArrow:n,userWantsControl:s,draggable:v,touchable:z,slideStyles:_,dotType:S,dotPlacement:j,transitionProps:d={},arrowSlotProps:p,dotSlotProps:w,$slots:{default:C,dots:A,arrow:B}}=this,k=C&&jt(C())||[];let b=Qt(k);b.length||(b=k.map(R=>y(Kt,null,{default:()=>qe(R)})));const{length:P}=b;return P>1&&this.duplicatedable&&(b.push(Ze(b[0],0,"append")),b.unshift(Ze(b[P-1],P-1,"prepend"))),this.slideVNodes.value=b,this.autoSlideSize&&(b=b.map(R=>y(Oe,{onResize:this.handleSlideResize},{default:()=>R}))),(t=this.onRender)===null||t===void 0||t.call(this),y("div",{ref:"selfElRef",class:[this.themeClass,`${l}-carousel`,this.direction==="vertical"&&`${l}-carousel--vertical`,this.showArrow&&`${l}-carousel--show-arrow`,`${l}-carousel--${j}`,`${l}-carousel--${this.direction}`,`${l}-carousel--${this.effect}`,s&&`${l}-carousel--usercontrol`],style:this.cssVars},y(Oe,{onResize:this.handleResize},{default:()=>y("div",{class:`${l}-carousel__slides`,role:"listbox",style:this.translateStyle,onMousedown:v?this.handleTouchstart:void 0,onTouchstart:z?this.handleTouchstart:void 0,onWheel:this.mousewheel?this.handleMousewheel:void 0,onTransitionend:this.handleTransitionEnd},s?b.map((R,N)=>y("div",{style:_[N],key:N},Rt(y(It,Object.assign({},d),{default:()=>R}),[[Ct,this.isActive(N)]]))):b)}),this.showDots&&$e(A,w,()=>[w.total>1&&y(Xt,{key:S+j,total:w.total,currentIndex:w.currentIndex,dotType:S,trigger:this.trigger,keyboard:this.keyboard})]),n&&$e(B,p,()=>[y(Yt,null)]))}});function Qt(t,l=[]){return Array.isArray(t)&&t.forEach(n=>{n.type&&n.type.name==="CarouselItem"&&l.push(n)}),l}function Ze(t,l,n){return qe(t,{key:`carousel-item-duplicate-${l}-${n}`})}var qt="./assets/confuzed.1231a646.jpg",Gt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"})),eo="./assets/halfoflife.ebbabb01.jpg",to=Object.freeze(Object.defineProperty({__proto__:null,default:eo},Symbol.toStringTag,{value:"Module"})),oo="./assets/helovefemboy.05d8083a.png",no=Object.freeze(Object.defineProperty({__proto__:null,default:oo},Symbol.toStringTag,{value:"Module"})),ao="./assets/idling.29d570c4.png",lo=Object.freeze(Object.defineProperty({__proto__:null,default:ao},Symbol.toStringTag,{value:"Module"})),so="./assets/japan.9cd3042c.png",ro=Object.freeze(Object.defineProperty({__proto__:null,default:so},Symbol.toStringTag,{value:"Module"})),io="./assets/nicedesk.77c174e8.png",uo=Object.freeze(Object.defineProperty({__proto__:null,default:io},Symbol.toStringTag,{value:"Module"})),co="./assets/onbus.d40e64dc.jpg",fo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"})),vo="./assets/someone.d72b2a1d.png",po=Object.freeze(Object.defineProperty({__proto__:null,default:vo},Symbol.toStringTag,{value:"Module"})),go="./assets/sport.25a80dbc.png",ho=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"})),mo="./assets/thinking.f15a5b49.png",bo=Object.freeze(Object.defineProperty({__proto__:null,default:mo},Symbol.toStringTag,{value:"Module"})),xo="./assets/waifus.9f78161a.jpg",yo=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"}));const _o=Q({setup(t){const l=mt({"../../../assets/images/jokes/fuze/avatar.jpg":pt,"../../../assets/images/jokes/fuze/confuzed.jpg":Gt,"../../../assets/images/jokes/fuze/fuzeshout.png":ht,"../../../assets/images/jokes/fuze/halfoflife.jpg":to,"../../../assets/images/jokes/fuze/helovefemboy.png":no,"../../../assets/images/jokes/fuze/idling.png":lo,"../../../assets/images/jokes/fuze/japan.png":ro,"../../../assets/images/jokes/fuze/nicedesk.png":uo,"../../../assets/images/jokes/fuze/onbus.jpg":fo,"../../../assets/images/jokes/fuze/someone.png":po,"../../../assets/images/jokes/fuze/sport.png":ho,"../../../assets/images/jokes/fuze/thinking.png":bo,"../../../assets/images/jokes/fuze/waifus.jpg":yo});return(n,s)=>(be(),Ae(Xe,null,[Be(re(Ot),null,{default:Le(()=>[Dt(Nt(n.$t("layouts.JokesLayout.fuze-images")),1)]),_:1}),Be(re(Jt),{autoplay:"",draggable:"","show-arrow":"","dot-placement":"top"},{default:Le(()=>[(be(!0),Ae(Xe,null,Et(re(l),v=>(be(),Vt(re(gt),{src:v.path,key:v.name,alt:"\u52A0\u8F7D! \u52A0\u8F7D!! \u52A0\u8F7D!!! \u4E0D\u62E9\u624B\u6BB5\u5730\u52A0\u8F7D!","object-fit":"fill"},null,8,["src"]))),128))]),_:1})],64))}});typeof Ee=="function"&&Ee(_o);export{_o as default};
