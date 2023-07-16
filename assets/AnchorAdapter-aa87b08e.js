import{n as z,H as I,af as _,G as L,a as b,b as E,d as O,e as V,ag as J,r as p,g as R,h as x,x as q,y as F,k as $,j as N,c as Q,t as D,s as X,p as Z,N as K,ah as ee,u as U,i as te,w as G,ai as ne}from"./index-f75098fd.js";import{u as Y}from"./BackTop-2b4369e9.js";import{b as oe}from"./Tooltip-3c68f5d7.js";import{g as ie}from"./attribute-2ee9e579.js";import{t as re}from"./throttle-0ff44575.js";import{o as le}from"./on-fonts-ready-d6f1a91e.js";function ae(e,l,i){const o=z(e,null);o!==null&&(l in o||(o[l]=[]),o[l].push(i.value),I(i,(r,a)=>{const f=o[l],s=f.findIndex(h=>h===a);~s&&f.splice(s,1),f.push(r)}),_(()=>{const r=o[l],a=r.findIndex(f=>f===i.value);~a&&r.splice(a,1)}))}function se(e,l,i){const o=z(e,null);o!==null&&(l in o||(o[l]=[]),L(()=>{const r=i();r&&o[l].push(r)}),_(()=>{const r=o[l],a=i(),f=r.findIndex(s=>s===a);~f&&r.splice(f,1)}))}function ce(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function fe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ue=b("affix",[E("affixed",{position:"fixed"},[E("absolute-positioned",{position:"absolute"})])]),M={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},de=q(M),ve=O({name:"Affix",props:M,setup(e){const{mergedClsPrefixRef:l}=V(e);J("-affix",ue,l);let i=null;const o=p(!1),r=p(!1),a=p(null),f=p(null),s=R(()=>r.value||o.value),h=R(()=>{var t,n;return(n=(t=e.triggerTop)!==null&&t!==void 0?t:e.offsetTop)!==null&&n!==void 0?n:e.top}),m=R(()=>{var t,n;return(n=(t=e.top)!==null&&t!==void 0?t:e.triggerTop)!==null&&n!==void 0?n:e.offsetTop}),B=R(()=>{var t,n;return(n=(t=e.bottom)!==null&&t!==void 0?t:e.triggerBottom)!==null&&n!==void 0?n:e.offsetBottom}),k=R(()=>{var t,n;return(n=(t=e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom)!==null&&n!==void 0?n:e.bottom}),y=p(null),w=()=>{const{target:t,listenTo:n}=e;t?i=t():n?i=Y(n):i=document,i&&(i.addEventListener("scroll",d),d())};function d(){oe(v)}function v(){const{value:t}=y;if(!i||!t)return;const n=ce(i);if(s.value){n<f.value&&(o.value=!1,f.value=null),n>a.value&&(r.value=!1,a.value=null);return}const g=fe(i),T=t.getBoundingClientRect(),A=T.top-g.top,C=g.bottom-T.bottom,u=h.value,c=k.value;u!==void 0&&A<=u?(o.value=!0,f.value=n-(u-A)):(o.value=!1,f.value=null),c!==void 0&&C<=c?(r.value=!0,a.value=n+c-C):(r.value=!1,a.value=null)}return L(()=>{w()}),_(()=>{i&&i.removeEventListener("scroll",d)}),{selfRef:y,affixed:s,mergedClsPrefix:l,mergedstyle:R(()=>{const t={};return o.value&&h.value!==void 0&&m.value!==void 0&&(t.top=`${m.value}px`),r.value&&k.value!==void 0&&B.value!==void 0&&(t.bottom=`${B.value}px`),t})}},render(){const{mergedClsPrefix:e}=this;return x("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),he=b("anchor",`
 position: relative;
`,[F("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[$("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),F("show-rail",[$(">",[b("anchor-link","padding-left: 0;")])])]),E("block",[b("anchor-link",`
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
 `,[E("active",[$(">",[N("title",`
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
 `,[$("&:hover, &:focus",`
 color: var(--n-link-text-color-hover);
 `),$("&:active",`
 color: var(--n-link-text-color-pressed);
 `)])])]),P=Q("n-anchor"),ge={title:String,href:String},Be=O({name:"AnchorLink",props:ge,setup(e,{slots:l}){const i=p(null),o=z(P),r=D(e,"href"),a=X(()=>r.value&&r.value===o.activeHref.value);ae(P,"collectedLinkHrefs",r),se(P,"titleEls",()=>i.value),I(a,s=>{s&&i.value&&o.updateBarPosition(i.value)});function f(){e.href!==void 0&&o.setActiveHref(e.href)}return()=>{var s;const{value:h}=o.mergedClsPrefix;return x("div",{class:[`${h}-anchor-link`,a.value&&`${h}-anchor-link--active`]},x("a",{ref:i,class:[`${h}-anchor-link__title`],href:e.href,title:ie(e.title),onClick:f},e.title),(s=l.default)===null||s===void 0?void 0:s.call(l))}}});function me(e,l){const{top:i,height:o}=e.getBoundingClientRect(),r=l instanceof HTMLElement?l.getBoundingClientRect().top:0;return{top:i-r,height:o}}const W={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},pe=q(W),be=O({name:"BaseAnchor",props:Object.assign(Object.assign({},W),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const l=[],i=[],o=p(null),r=p(null),a=p(null),f=p(null),s=R(()=>e.type==="block"),h=R(()=>!s.value&&e.showRail);function m(){const{value:d}=a,{value:v}=r;d&&(d.style.transition="none"),v&&(v.style.transition="none"),i&&i.forEach(t=>{t.style.transition="none"}),ee(()=>{const{value:t}=a,{value:n}=r;t&&(t.offsetWidth,t.style.transition=""),n&&(n.offsetWidth,n.style.transition=""),i&&i.forEach(g=>{g.offsetWidth,g.style.transition=""})})}function B(d,v=!0){const{value:t}=a,{value:n}=r,{value:g}=f;if(!g||!t)return;v||(t.style.transition="none",n&&(n.style.transition="none"));const{offsetHeight:T,offsetWidth:A}=d,{top:C,left:u}=d.getBoundingClientRect(),{top:c,left:S}=g.getBoundingClientRect(),H=C-c,j=u-S;t.style.top=`${H}px`,t.style.height=`${T}px`,n&&(n.style.top=`${H}px`,n.style.height=`${T}px`,n.style.maxWidth=`${A+j}px`),t.offsetHeight,n&&n.offsetHeight,v||(t.style.transition="",n&&(n.style.transition=""))}function k(d,v=!0){const t=/^#([^#]+)$/.exec(d);if(!t)return;const n=document.getElementById(t[1]);n&&(o.value=d,n.scrollIntoView(),v||m(),y())}const y=re(()=>{w(!0)},128);function w(d=!0){var v;const t=[],n=Y((v=e.offsetTarget)!==null&&v!==void 0?v:document);l.forEach(u=>{const c=/#([^#]+)$/.exec(u);if(!c)return;const S=document.getElementById(c[1]);if(S&&n){const{top:H,height:j}=me(S,n);t.push({top:H,height:j,href:u})}}),t.sort((u,c)=>u.top>c.top?1:(u.top===c.top&&u.height<c.height,-1));const g=o.value,{bound:T,ignoreGap:A}=e,C=t.reduce((u,c)=>c.top+c.height<0?A?c:u:c.top<=T?u===null?c:c.top===u.top?c.href===g?c:u:c.top>u.top?c:u:u,null);d||m(),C?o.value=C.href:o.value=null}return Z(P,{activeHref:o,mergedClsPrefix:D(e,"mergedClsPrefix"),updateBarPosition:B,setActiveHref:k,collectedLinkHrefs:l,titleEls:i}),L(()=>{document.addEventListener("scroll",y,!0),k(window.location.hash),w(!1)}),le(()=>{k(window.location.hash),w(!1)}),_(()=>{document.removeEventListener("scroll",y,!0)}),I(o,d=>{if(d===null){const{value:v}=r;v&&!s.value&&(v.style.maxWidth="0")}}),{selfRef:f,barRef:a,slotRef:r,setActiveHref:k,activeHref:o,isBlockType:s,mergedShowRail:h}},render(){var e;const{mergedClsPrefix:l,mergedShowRail:i,isBlockType:o,$slots:r}=this,a=x("div",{class:[`${l}-anchor`,o&&`${l}-anchor--block`,i&&`${l}-anchor--show-rail`],ref:"selfRef"},i&&this.showBackground?x("div",{ref:"slotRef",class:`${l}-anchor-link-background`}):null,i?x("div",{class:`${l}-anchor-rail`},x("div",{ref:"barRef",class:[`${l}-anchor-rail__bar`,this.activeHref!==null&&`${l}-anchor-rail__bar--active`]})):null,(e=r.default)===null||e===void 0?void 0:e.call(r));return this.internalScrollable?x(K,null,{default:()=>a}):a}}),xe=Object.assign(Object.assign(Object.assign(Object.assign({},U.props),{affix:Boolean}),M),W),Ae=O({name:"Anchor",props:xe,setup(e,{slots:l}){const{mergedClsPrefixRef:i,inlineThemeDisabled:o}=V(e),r=U("Anchor","-anchor",he,ne,e,i),a=p(null),f=R(()=>{const{self:{railColor:h,linkColor:m,railColorActive:B,linkTextColor:k,linkTextColorHover:y,linkTextColorPressed:w,linkTextColorActive:d,linkFontSize:v,railWidth:t,linkPadding:n,borderRadius:g},common:{cubicBezierEaseInOut:T}}=r.value;return{"--n-link-border-radius":g,"--n-link-color":m,"--n-link-font-size":v,"--n-link-text-color":k,"--n-link-text-color-hover":y,"--n-link-text-color-active":d,"--n-link-text-color-pressed":w,"--n-link-padding":n,"--n-bezier":T,"--n-rail-color":h,"--n-rail-color-active":B,"--n-rail-width":t}}),s=o?te("anchor",void 0,f,e):void 0;return{scrollTo(h){var m;(m=a.value)===null||m===void 0||m.setActiveHref(h)},renderAnchor:()=>(s==null||s.onRender(),x(be,Object.assign({ref:a,style:o?void 0:f.value,class:s==null?void 0:s.themeClass.value},G(e,pe),{mergedClsPrefix:i.value}),l))}},render(){return this.affix?x(ve,Object.assign({},G(this,de)),{default:this.renderAnchor}):this.renderAnchor()}});export{Ae as N,Be as a};
