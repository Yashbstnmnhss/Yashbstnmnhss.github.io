import{o as W,i as M}from"./utils-d121b497.js";import{t as N}from"./Tag-6b587455.js";import{Y as _,a as T,aW as A,c as P,aX as G,J as H,d as K,u as V,r as y,a1 as k,g as p,e as w,h as X,o as Y,w as D,aB as J,aj as U,aH as q,aG as Q,i as O,ab as Z,cX as ee,j as re,by as oe}from"./index-1b78ee11.js";const te=_("n-avatar-group"),ne=T("avatar",`
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
`,[A(P("&","--n-merged-color: var(--n-color-modal);")),G(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),T("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]),ae=Object.assign(Object.assign({},w.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),de=K({name:"Avatar",props:ae,setup(o){const{mergedClsPrefixRef:l,inlineThemeDisabled:m}=V(o),g=y(!1);let d=null;const c=y(null),s=y(null),x=()=>{const{value:e}=c;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:r}=s;if(r){const{offsetWidth:t,offsetHeight:a}=r,{offsetWidth:n,offsetHeight:L}=e,R=.9,S=Math.min(t/n*R,a/L*R,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},b=k(te,null),i=p(()=>{const{size:e}=o;if(e)return e;const{size:r}=b||{};return r||"medium"}),u=w("Avatar","-avatar",ne,ee,o,l),z=k(N,null),f=p(()=>{if(b)return!0;const{round:e,circle:r}=o;return e!==void 0||r!==void 0?e||r:z?z.roundRef.value:!1}),v=p(()=>b?!0:o.bordered||!1),F=p(()=>{const e=i.value,r=f.value,t=v.value,{color:a}=o,{self:{borderRadius:n,fontSize:L,color:R,border:S,colorModal:B,colorPopover:$},common:{cubicBezierEaseInOut:I}}=u.value;let E;return typeof e=="number"?E=`${e}px`:E=u.value.self[re("height",e)],{"--n-font-size":L,"--n-border":t?S:"none","--n-border-radius":r?"50%":n,"--n-color":a||R,"--n-color-modal":a||B,"--n-color-popover":a||$,"--n-bezier":I,"--n-merged-size":`var(--n-avatar-size-override, ${E})`}}),h=m?X("avatar",p(()=>{const e=i.value,r=f.value,t=v.value,{color:a}=o;let n="";return e&&(typeof e=="number"?n+=`a${e}`:n+=e[0]),r&&(n+="b"),t&&(n+="c"),a&&(n+=oe(a)),n}),F,o):void 0,j=y(!o.lazy);Y(()=>{if(o.lazy&&o.intersectionObserverOptions){let e;const r=D(()=>{e==null||e(),e=void 0,o.lazy&&(e=W(s.value,o.intersectionObserverOptions,j))});J(()=>{r(),e==null||e()})}}),U(()=>{var e;return o.src||((e=o.imgProps)===null||e===void 0?void 0:e.src)},()=>{g.value=!1});const C=y(!o.lazy);return{textRef:c,selfRef:s,mergedRoundRef:f,mergedClsPrefix:l,fitTextTransform:x,cssVars:m?void 0:F,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender,hasLoadError:g,shouldStartLoading:j,loaded:C,mergedOnError:e=>{if(!j.value)return;g.value=!0;const{onError:r,imgProps:{onError:t}={}}=o;r==null||r(e),t==null||t(e)},mergedOnLoad:e=>{const{onLoad:r,imgProps:{onLoad:t}={}}=o;r==null||r(e),t==null||t(e),C.value=!0}}},render(){var o,l;const{$slots:m,src:g,mergedClsPrefix:d,lazy:c,onRender:s,loaded:x,hasLoadError:b,imgProps:i={}}=this;s==null||s();let u;const z=!x&&!b&&(this.renderPlaceholder?this.renderPlaceholder():(l=(o=this.$slots).placeholder)===null||l===void 0?void 0:l.call(o));return this.hasLoadError?u=this.renderFallback?this.renderFallback():q(m.fallback,()=>[O("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):u=Q(m.default,f=>{if(f)return O(Z,{onResize:this.fitTextTransform},{default:()=>O("span",{ref:"textRef",class:`${d}-avatar__text`},f)});if(g||i.src){const v=this.src||i.src;return O("img",Object.assign(Object.assign({},i),{loading:M&&!this.intersectionObserverOptions&&c?"lazy":"eager",src:c&&this.intersectionObserverOptions?this.shouldStartLoading?v:void 0:v,"data-image-src":v,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[i.style||"",{objectFit:this.objectFit},z?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),O("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},u,c&&z)}});export{de as N};
