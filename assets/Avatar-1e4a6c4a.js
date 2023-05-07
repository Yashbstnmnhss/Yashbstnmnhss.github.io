import{i as P,o as W}from"./utils-2b0dc9e8.js";import{t as _}from"./Tag-26ad9e7e.js";import{c as A,a as H,at as K,k as C,au as V,j as w,d as G,e as D,r as p,g as y,u as $,E as q,i as U,D as X,A as Y,ac as J,al as Q,az as Z,h as R,n as B,br as ee,ap as oe,aq as re,aP as te}from"./index-18b3cb26.js";const ne=A("n-avatar-group"),ae=H("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[K(C("&","--n-merged-color: var(--n-color-modal);")),V(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),H("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),se=Object.assign(Object.assign({},$.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ce=G({name:"Avatar",props:se,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=D(r),s=p(!1);let d=null;const m=p(null),i=p(null),L=()=>{const{value:e}=m;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=i;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:O}=e,j=.9,S=Math.min(n/a*j,t/O*j,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},g=B(ne,null),b=y(()=>{const{size:e}=r;if(e)return e;const{size:o}=g||{};return o||"medium"}),x=$("Avatar","-avatar",ae,ee,r,l),c=B(_,null),u=y(()=>{if(g)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),z=y(()=>g?!0:r.bordered||!1),f=e=>{var o;if(!E.value)return;s.value=!0;const{onError:n,imgProps:t}=r;(o=t==null?void 0:t.onError)===null||o===void 0||o.call(t,e),n&&n(e)};q(()=>r.src,()=>s.value=!1);const T=y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r,{self:{borderRadius:a,fontSize:O,color:j,border:S,colorModal:I,colorPopover:M},common:{cubicBezierEaseInOut:N}}=x.value;let F;return typeof e=="number"?F=`${e}px`:F=x.value.self[oe("height",e)],{"--n-font-size":O,"--n-border":n?S:"none","--n-border-radius":o?"50%":a,"--n-color":t||j,"--n-color-modal":t||I,"--n-color-popover":t||M,"--n-bezier":N,"--n-merged-size":`var(--n-avatar-size-override, ${F})`}}),v=h?U("avatar",y(()=>{const e=b.value,o=u.value,n=z.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=re(t)),a}),T,r):void 0,E=p(!r.lazy);X(()=>{if(P)return;let e;const o=Y(()=>{e==null||e(),e=void 0,r.lazy&&(e=W(i.value,r.intersectionObserverOptions,E))});J(()=>{o(),e==null||e()})});const k=p(!r.lazy);return{textRef:m,selfRef:i,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:L,cssVars:h?void 0:T,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender,hasLoadError:s,handleError:f,shouldStartLoading:E,loaded:k,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n==null||n(e),(o=t==null?void 0:t.onLoad)===null||o===void 0||o.call(t,e),k.value=!0}}},render(){var r,l;const{$slots:h,src:s,mergedClsPrefix:d,lazy:m,onRender:i,mergedOnLoad:L,shouldStartLoading:g,loaded:b,hasLoadError:x}=this;i==null||i();let c;const u=!b&&!x&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Q(h.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=Z(h.default,z=>{if(z)return R(te,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${d}-avatar__text`},z)});if(s){const{imgProps:f}=this;return R("img",Object.assign(Object.assign({},f),{loading:P&&!this.intersectionObserverOptions&&m?"lazy":"eager",src:P||g||b?s:void 0,onLoad:L,"data-image-src":s,onError:this.handleError,style:[f==null?void 0:f.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,m&&u)}});export{ce as N};
