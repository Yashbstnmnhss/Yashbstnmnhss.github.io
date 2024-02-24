import{af as J,a as M,i as X,c as T,e as q,d as I,g as N,u as U,r as O,ah as W,k,h as A,m as Y,J as Q,B as Z,l as ee,w as te,q as re,p as R,aJ as oe,as as ne,b5 as ae,E as se,b6 as ie,F as a,L as v,M as _,G as S,R as le,S as ce,P as i,aW as de,W as ue,X as $,O as fe,V as ve}from"./index-02b03318.js";import{o as he,i as me}from"./utils-b258ba2a.js";import{t as ge}from"./Tag-02996914.js";import{N as be}from"./Space-0d622935.js";import{N as pe}from"./Thing-1c02cc4c.js";import{N as ye}from"./text-0c590383.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";const ze=J("n-avatar-group"),xe=M("avatar",`
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
`,[X(T("&","--n-merged-color: var(--n-color-modal);")),q(T("&","--n-merged-color: var(--n-color-popover);")),T("img",`
 width: 100%;
 height: 100%;
 `),I("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),M("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),I("text","line-height: 1.25")]),Oe=Object.assign(Object.assign({},A.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),V=N({name:"Avatar",props:Oe,setup(t){const{mergedClsPrefixRef:l,inlineThemeDisabled:h}=U(t),m=O(!1);let r=null;const c=O(null),u=O(null),E=()=>{const{value:e}=c;if(e&&(r===null||r!==e.innerHTML)){r=e.innerHTML;const{value:o}=u;if(o){const{offsetWidth:n,offsetHeight:d}=o,{offsetWidth:s,offsetHeight:j}=e,L=.9,C=Math.min(n/s*L,d/j*L,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${C})`}}},z=W(ze,null),f=k(()=>{const{size:e}=t;if(e)return e;const{size:o}=z||{};return o||"medium"}),g=A("Avatar","-avatar",xe,ae,t,l),x=W(ge,null),b=k(()=>{if(z)return!0;const{round:e,circle:o}=t;return e!==void 0||o!==void 0?e||o:x?x.roundRef.value:!1}),p=k(()=>z?!0:t.bordered||!1),B=k(()=>{const e=f.value,o=b.value,n=p.value,{color:d}=t,{self:{borderRadius:s,fontSize:j,color:L,border:C,colorModal:G,colorPopover:K},common:{cubicBezierEaseInOut:D}}=g.value;let P;return typeof e=="number"?P=`${e}px`:P=g.value.self[se("height",e)],{"--n-font-size":j,"--n-border":n?C:"none","--n-border-radius":o?"50%":s,"--n-color":d||L,"--n-color-modal":d||G,"--n-color-popover":d||K,"--n-bezier":D,"--n-merged-size":`var(--n-avatar-size-override, ${P})`}}),y=h?Y("avatar",k(()=>{const e=f.value,o=b.value,n=p.value,{color:d}=t;let s="";return e&&(typeof e=="number"?s+=`a${e}`:s+=e[0]),o&&(s+="b"),n&&(s+="c"),d&&(s+=ie(d)),s}),B,t):void 0,F=O(!t.lazy);Q(()=>{if(t.lazy&&t.intersectionObserverOptions){let e;const o=Z(()=>{e==null||e(),e=void 0,t.lazy&&(e=he(u.value,t.intersectionObserverOptions,F))});ee(()=>{o(),e==null||e()})}}),te(()=>{var e;return t.src||((e=t.imgProps)===null||e===void 0?void 0:e.src)},()=>{m.value=!1});const w=O(!t.lazy);return{textRef:c,selfRef:u,mergedRoundRef:b,mergedClsPrefix:l,fitTextTransform:E,cssVars:h?void 0:B,themeClass:y==null?void 0:y.themeClass,onRender:y==null?void 0:y.onRender,hasLoadError:m,shouldStartLoading:F,loaded:w,mergedOnError:e=>{if(!F.value)return;m.value=!0;const{onError:o,imgProps:{onError:n}={}}=t;o==null||o(e),n==null||n(e)},mergedOnLoad:e=>{const{onLoad:o,imgProps:{onLoad:n}={}}=t;o==null||o(e),n==null||n(e),w.value=!0}}},render(){var t,l;const{$slots:h,src:m,mergedClsPrefix:r,lazy:c,onRender:u,loaded:E,hasLoadError:z,imgProps:f={}}=this;u==null||u();let g;const x=!E&&!z&&(this.renderPlaceholder?this.renderPlaceholder():(l=(t=this.$slots).placeholder)===null||l===void 0?void 0:l.call(t));return this.hasLoadError?g=this.renderFallback?this.renderFallback():re(h.fallback,()=>[R("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):g=oe(h.default,b=>{if(b)return R(ne,{onResize:this.fitTextTransform},{default:()=>R("span",{ref:"textRef",class:`${r}-avatar__text`},b)});if(m||f.src){const p=this.src||f.src;return R("img",Object.assign(Object.assign({},f),{loading:me&&!this.intersectionObserverOptions&&c?"lazy":"eager",src:c&&this.intersectionObserverOptions?this.shouldStartLoading?p:void 0:p,"data-image-src":p,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[f.style||"",{objectFit:this.objectFit},x?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),R("span",{ref:"selfRef",class:[`${r}-avatar`,this.themeClass],style:this.cssVars},g,c&&x)}}),H=N({props:{content:{type:Function},params:{type:Array}},render(){var t;return(t=this.content)==null?void 0:t.call(this,...this.params??[])}}),ke={key:0},Re={key:0},Le=["innerHTML"],Se=N({__name:"ChatHistory",props:{msgs:{}},setup(t){const l=t;return(h,m)=>(a(),v(i(be),{vertical:""},{default:_(()=>[(a(!0),S(ce,null,le(l.msgs,(r,c)=>(a(),v(i(pe),{key:c,"content-indented":""},de({description:_(()=>[typeof r.content=="string"?(a(),S("span",{key:0,innerHTML:r.content},null,8,Le)):(a(),v(i(H),{key:1,content:()=>r.content},null,8,["content"]))]),_:2},[r.type!=="system"&&r.avatar?{name:"avatar",fn:_(()=>[i(ue.isArray)(r.avatar)?(a(),v(i(V),{key:0,class:"no-select","object-fit":"cover",round:"",src:r.avatar[0]},null,8,["src"])):(a(),v(i(V),{key:1,class:"no-select",round:""},{default:_(()=>[typeof r.avatar=="string"?(a(),S("span",ke,$(r.avatar),1)):(a(),v(i(H),{key:1,content:()=>r.avatar},null,8,["content"]))]),_:2},1024))]),key:"0"}:void 0,r.type!=="system"&&r.username?{name:"header",fn:_(()=>[typeof r.username=="string"?(a(),S("small",Re,[fe(i(ye),{class:"no-select",depth:"3"},{default:_(()=>[ve($(r.username),1)]),_:2},1024)])):(a(),v(i(H),{key:1,content:()=>r.username},null,8,["content"]))]),key:"1"}:void 0]),1024))),128))]),_:1}))}});const Ne=_e(Se,[["__scopeId","data-v-53cc314c"]]);export{Ne as C};
