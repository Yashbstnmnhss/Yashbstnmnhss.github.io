import{X as z,M as I,R as _,g as L,D as b,H as E,d as O,n as D,J as X,r as p,s as R,B as x,bb as V,E as F,G as S,I as N,W as Y,a6 as q,Z,K as Q,b8 as K,ah as ee,p as J,a9 as te,aa as G,ct as ne}from"./index.f590f622.js";import{u as U}from"./BackTop.10068be0.js";import{d as oe}from"./Tooltip.93ced477.js";import{t as ie}from"./throttle.0f37bc79.js";import{o as re}from"./on-fonts-ready.c7845fe5.js";function le(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function ae(e,l,i){const o=z(e,null);o!==null&&(l in o||(o[l]=[]),o[l].push(i.value),I(i,(r,a)=>{const f=o[l],s=f.findIndex(v=>v===a);~s&&f.splice(s,1),f.push(r)}),_(()=>{const r=o[l],a=r.findIndex(f=>f===i.value);~a&&r.splice(a,1)}))}function se(e,l,i){const o=z(e,null);o!==null&&(l in o||(o[l]=[]),L(()=>{const r=i();!r||o[l].push(r)}),_(()=>{const r=o[l],a=i(),f=r.findIndex(s=>s===a);~f&&r.splice(f,1)}))}function ce(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function fe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ue=b("affix",[E("affixed",{position:"fixed"},[E("absolute-positioned",{position:"absolute"})])]),M={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},de=V(M),he=O({name:"Affix",props:M,setup(e){const{mergedClsPrefixRef:l}=D(e);X("-affix",ue,l);let i=null;const o=p(!1),r=p(!1),a=p(null),f=p(null),s=R(()=>r.value||o.value),v=R(()=>{var t,n;return(n=(t=e.triggerTop)!==null&&t!==void 0?t:e.offsetTop)!==null&&n!==void 0?n:e.top}),m=R(()=>{var t,n;return(n=(t=e.top)!==null&&t!==void 0?t:e.triggerTop)!==null&&n!==void 0?n:e.offsetTop}),C=R(()=>{var t,n;return(n=(t=e.bottom)!==null&&t!==void 0?t:e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom}),k=R(()=>{var t,n;return(n=(t=e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom)!==null&&n!==void 0?n:e.bottom}),y=p(null),w=()=>{const{target:t,listenTo:n}=e;t?i=t():n?i=U(n):i=document,i&&(i.addEventListener("scroll",d),d())};function d(){oe(h)}function h(){const{value:t}=y;if(!i||!t)return;const n=ce(i);if(s.value){n<f.value&&(o.value=!1,f.value=null),n>a.value&&(r.value=!1,a.value=null);return}const g=fe(i),T=t.getBoundingClientRect(),A=T.top-g.top,B=g.bottom-T.bottom,u=v.value,c=k.value;u!==void 0&&A<=u?(o.value=!0,f.value=n-(u-A)):(o.value=!1,f.value=null),c!==void 0&&B<=c?(r.value=!0,a.value=n+c-B):(r.value=!1,a.value=null)}return L(()=>{w()}),_(()=>{!i||i.removeEventListener("scroll",d)}),{selfRef:y,affixed:s,mergedClsPrefix:l,mergedstyle:R(()=>{const t={};return o.value&&v.value!==void 0&&m.value!==void 0&&(t.top=`${m.value}px`),r.value&&k.value!==void 0&&C.value!==void 0&&(t.bottom=`${C.value}px`),t})}},render(){const{mergedClsPrefix:e}=this;return x("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),ve=b("anchor",`
 position: relative;
`,[F("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[S("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),F("show-rail",[S(">",[b("anchor-link","padding-left: 0;")])])]),E("block",[b("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[E("active",`
 background-color: var(--n-link-color);
 `)])]),b("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),b("anchor-rail",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 width: var(--n-rail-width);
 border-radius: calc(var(--n-rail-width) / 2);
 overflow: hidden;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[N("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[E("active",{backgroundColor:"var(--n-rail-color-active)"})])]),b("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[E("active",[S(">",[N("title",`
 color: var(--n-link-text-color-active);
 `)])]),N("title",`
 outline: none;
 max-width: 100%;
 text-decoration: none;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 cursor: pointer;
 display: inline-block;
 padding-right: 16px;
 transition: color .3s var(--n-bezier);
 color: var(--n-link-text-color);
 `,[S("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),S("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),P=Y("n-anchor"),ge={title:String,href:String},Be=O({name:"AnchorLink",props:ge,setup(e,{slots:l}){const i=p(null),o=z(P),r=q(e,"href"),a=Z(()=>r.value&&r.value===o.activeHref.value);ae(P,"collectedLinkHrefs",r),se(P,"titleEls",()=>i.value),I(a,s=>{s&&i.value&&o.updateBarPosition(i.value)});function f(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var s;const{value:v}=o.mergedClsPrefix;return x("div",{class:[`${v}-anchor-link`,a.value&&`${v}-anchor-link--active`]},x("a",{ref:i,class:[`${v}-anchor-link__title`],href:e.href,title:le(e.title),onClick:f},e.title),(s=l.default)===null||s===void 0?void 0:s.call(l))}}});function me(e,l){const{top:i,height:o}=e.getBoundingClientRect(),r=l instanceof HTMLElement?l.getBoundingClientRect().top:0;return{top:i-r,height:o}}const W={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},pe=V(W),be=O({name:"BaseAnchor",props:Object.assign(Object.assign({},W),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const l=[],i=[],o=p(null),r=p(null),a=p(null),f=p(null),s=R(()=>e.type==="block"),v=R(()=>!s.value&&e.showRail);function m(){const{value:d}=a,{value:h}=r;d&&(d.style.transition="none"),h&&(h.style.transition="none"),i&&i.forEach(t=>{t.style.transition="none"}),ee(()=>{const{value:t}=a,{value:n}=r;t&&(t.offsetWidth,t.style.transition=""),n&&(n.offsetWidth,n.style.transition=""),i&&i.forEach(g=>{g.offsetWidth,g.style.transition=""})})}function C(d,h=!0){const{value:t}=a,{value:n}=r,{value:g}=f;if(!g||!t)return;h||(t.style.transition="none",n&&(n.style.transition="none"));const{offsetHeight:T,offsetWidth:A}=d,{top:B,left:u}=d.getBoundingClientRect(),{top:c,left:$}=g.getBoundingClientRect(),H=B-c,j=u-$;t.style.top=`${H}px`,t.style.height=`${T}px`,n&&(n.style.top=`${H}px`,n.style.height=`${T}px`,n.style.maxWidth=`${A+j}px`),t.offsetHeight,n&&n.offsetHeight,h||(t.style.transition="",n&&(n.style.transition=""))}function k(d,h=!0){const t=/^#([^#]+)$/.exec(d);if(!t)return;const n=document.getElementById(t[1]);!n||(o.value=d,n.scrollIntoView(),h||m(),y())}const y=ie(()=>w(!0),128);function w(d=!0){var h;const t=[],n=U((h=e.offsetTarget)!==null&&h!==void 0?h:document);l.forEach(u=>{const c=/#([^#]+)$/.exec(u);if(!c)return;const $=document.getElementById(c[1]);if($&&n){const{top:H,height:j}=me($,n);t.push({top:H,height:j,href:u})}}),t.sort((u,c)=>u.top>c.top?1:(u.top===c.top&&u.height<c.height,-1));const g=o.value,{bound:T,ignoreGap:A}=e,B=t.reduce((u,c)=>c.top+c.height<0?A?c:u:c.top<=T?u===null?c:c.top===u.top?c.href===g?c:u:c.top>u.top?c:u:u,null);d||m(),B?o.value=B.href:o.value=null}return Q(P,{activeHref:o,mergedClsPrefix:q(e,"mergedClsPrefix"),updateBarPosition:C,setActiveHref:k,collectedLinkHrefs:l,titleEls:i}),L(()=>{document.addEventListener("scroll",y,!0),k(window.location.hash),w(!1)}),re(()=>{k(window.location.hash),w(!1)}),_(()=>{document.removeEventListener("scroll",y,!0)}),I(o,d=>{if(d===null){const{value:h}=r;h&&!s.value&&(h.style.maxWidth="0")}}),{selfRef:f,barRef:a,slotRef:r,setActiveHref:k,activeHref:o,isBlockType:s,mergedShowRail:v}},render(){var e;const{mergedClsPrefix:l,mergedShowRail:i,isBlockType:o,$slots:r}=this,a=x("div",{class:[`${l}-anchor`,o&&`${l}-anchor--block`,i&&`${l}-anchor--show-rail`],ref:"selfRef"},i&&this.showBackground?x("div",{ref:"slotRef",class:`${l}-anchor-link-background`}):null,i?x("div",{class:`${l}-anchor-rail`},x("div",{ref:"barRef",class:[`${l}-anchor-rail__bar`,this.activeHref!==null&&`${l}-anchor-rail__bar--active`]})):null,(e=r.default)===null||e===void 0?void 0:e.call(r));return this.internalScrollable?x(K,null,{default:()=>a}):a}}),xe=Object.assign(Object.assign(Object.assign(Object.assign({},J.props),{affix:Boolean}),M),W),Ce=O({name:"Anchor",props:xe,setup(e,{slots:l}){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=D(e),r=J("Anchor","-anchor",ve,ne,e,i),a=p(null),f=R(()=>{const{self:{railColor:v,linkColor:m,railColorActive:C,linkTextColor:k,linkTextColorHover:y,linkTextColorPressed:w,linkTextColorActive:d,linkFontSize:h,railWidth:t,linkPadding:n,borderRadius:g},common:{cubicBezierEaseInOut:T}}=r.value;return{"--n-link-border-radius":g,"--n-link-color":m,"--n-link-font-size":h,"--n-link-text-color":k,"--n-link-text-color-hover":y,"--n-link-text-color-active":d,"--n-link-text-color-pressed":w,"--n-link-padding":n,"--n-bezier":T,"--n-rail-color":v,"--n-rail-color-active":C,"--n-rail-width":t}}),s=o?te("anchor",void 0,f,e):void 0;return{scrollTo(v){var m;(m=a.value)===null||m===void 0||m.setActiveHref(v)},renderAnchor:()=>(s==null||s.onRender(),x(be,Object.assign({ref:a,style:o?void 0:f.value,class:s==null?void 0:s.themeClass.value},G(e,pe),{mergedClsPrefix:i.value}),l))}},render(){return this.affix?x(he,Object.assign({},G(this,de)),{default:this.renderAnchor}):this.renderAnchor()}});export{Ce as N,Be as a};
