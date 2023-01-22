import{i as M,o as N}from"./utils-8fb188d9.js";import{t as W}from"./Tag-17c9f95e.js";import{_ as A,q as k,at as K,t as P,au as V,s as w,d as G,w as X,r as z,y as H,c as p,x as B,J as q,A as D,a as J,X as U,o as Y,P as Q,L as Z,h as y,cp as ee,C as oe,bK as re,V as te}from"./index-0642acdb.js";const ne=A("n-avatar-group"),ae=k("avatar",`
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
`,[K(P("&","--n-merged-color: var(--n-color-modal);")),V(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),w("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),k("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),w("text","line-height: 1.25")]),se=Object.assign(Object.assign({},B.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),ce=G({name:"Avatar",props:se,setup(r){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=X(r),s=z(!1);let d=null;const x=z(null),i=z(null),j=()=>{const{value:e}=x;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:o}=i;if(o){const{offsetWidth:n,offsetHeight:t}=o,{offsetWidth:a,offsetHeight:E}=e,L=.9,F=Math.min(n/a*L,t/E*L,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${F})`}}},m=H(ne,null),g=p(()=>{const{size:e}=r;if(e)return e;const{size:o}=m||{};return o||"medium"}),R=B("Avatar","-avatar",ae,ee,r,l),c=H(W,null),u=p(()=>{if(m)return!0;const{round:e,circle:o}=r;return e!==void 0||o!==void 0?e||o:c?c.roundRef.value:!1}),b=p(()=>m?!0:r.bordered||!1),f=e=>{var o;if(!S.value)return;s.value=!0;const{onError:n,imgProps:t}=r;(o=t==null?void 0:t.onError)===null||o===void 0||o.call(t,e),n&&n(e)};q(()=>r.src,()=>s.value=!1);const C=p(()=>{const e=g.value,o=u.value,n=b.value,{color:t}=r,{self:{borderRadius:a,fontSize:E,color:L,border:F,colorModal:$,colorPopover:I},common:{cubicBezierEaseInOut:_}}=R.value;let O;return typeof e=="number"?O=`${e}px`:O=R.value.self[oe("height",e)],{"--n-font-size":E,"--n-border":n?F:"none","--n-border-radius":o?"50%":a,"--n-color":t||L,"--n-color-modal":t||$,"--n-color-popover":t||I,"--n-bezier":_,"--n-merged-size":`var(--n-avatar-size-override, ${O})`}}),v=h?D("avatar",p(()=>{const e=g.value,o=u.value,n=b.value,{color:t}=r;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),o&&(a+="b"),n&&(a+="c"),t&&(a+=re(t)),a}),C,r):void 0,S=z(!r.lazy);J(()=>{if(M)return;let e;const o=U(()=>{e==null||e(),e=void 0,r.lazy&&(e=N(i.value,r.intersectionObserverOptions,S))});Y(()=>{o(),e==null||e()})});const T=z(!r.lazy);return{textRef:x,selfRef:i,mergedRoundRef:u,mergedClsPrefix:l,fitTextTransform:j,cssVars:h?void 0:C,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender,hasLoadError:s,handleError:f,shouldStartLoading:S,loaded:T,mergedOnLoad:e=>{var o;const{onLoad:n,imgProps:t}=r;n==null||n(e),(o=t==null?void 0:t.onLoad)===null||o===void 0||o.call(t,e),T.value=!0}}},render(){var r,l;const{$slots:h,src:s,mergedClsPrefix:d,lazy:x,onRender:i,mergedOnLoad:j,shouldStartLoading:m,loaded:g,hasLoadError:R}=this;i==null||i();let c;const u=!g&&!R&&(this.renderPlaceholder?this.renderPlaceholder():(l=(r=this.$slots).placeholder)===null||l===void 0?void 0:l.call(r));return this.hasLoadError?c=this.renderFallback?this.renderFallback():Q(h.fallback,()=>[y("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):c=Z(h.default,b=>{if(b)return y(te,{onResize:this.fitTextTransform},{default:()=>y("span",{ref:"textRef",class:`${d}-avatar__text`},b)});if(s){const{imgProps:f}=this;return y("img",Object.assign(Object.assign({},f),{loading:"eager",src:m||g?s:void 0,onLoad:j,"data-image-src":s,onError:this.handleError,style:[f==null?void 0:f.style,{objectFit:this.objectFit},u?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),y("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},c,x&&u)}});export{ce as N};
