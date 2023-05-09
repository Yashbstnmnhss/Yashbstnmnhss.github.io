import{a as p,b as A,d as _,e as I,ac as U,r as b,g as y,D as W,ad as F,h as x,x as K,y as L,k as $,j as N,c as Y,n as J,t as D,s as Q,E as G,p as X,N as Z,ae as ee,u as V,i as te,w as M,af as oe}from"./index-1bc82fee.js";import{u as q}from"./BackTop-7d75ea52.js";import{b as ne}from"./Tooltip-4c4cec56.js";import{u as re,a as ie}from"./use-collection-8ef1f461.js";import{g as le}from"./attribute-2ee9e579.js";import{t as ae}from"./throttle-1105ca22.js";import{o as se}from"./on-fonts-ready-20a9b6f4.js";function ce(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function fe(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}const ue=p("affix",[A("affixed",{position:"fixed"},[A("absolute-positioned",{position:"absolute"})])]),j={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},de=K(j),ve=_({name:"Affix",props:j,setup(e){const{mergedClsPrefixRef:a}=I(e);U("-affix",ue,a);let n=null;const r=b(!1),l=b(!1),f=b(null),v=b(null),c=y(()=>l.value||r.value),h=y(()=>{var t,o;return(o=(t=e.triggerTop)!==null&&t!==void 0?t:e.offsetTop)!==null&&o!==void 0?o:e.top}),m=y(()=>{var t,o;return(o=(t=e.top)!==null&&t!==void 0?t:e.triggerTop)!==null&&o!==void 0?o:e.offsetTop}),B=y(()=>{var t,o;return(o=(t=e.bottom)!==null&&t!==void 0?t:e.triggerBottom)!==null&&o!==void 0?o:e.offsetBottom}),k=y(()=>{var t,o;return(o=(t=e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom)!==null&&o!==void 0?o:e.bottom}),R=b(null),w=()=>{const{target:t,listenTo:o}=e;t?n=t():o?n=q(o):n=document,n&&(n.addEventListener("scroll",u),u())};function u(){ne(d)}function d(){const{value:t}=R;if(!n||!t)return;const o=ce(n);if(c.value){o<v.value&&(r.value=!1,v.value=null),o>f.value&&(l.value=!1,f.value=null);return}const g=fe(n),T=t.getBoundingClientRect(),E=T.top-g.top,C=g.bottom-T.bottom,s=h.value,i=k.value;s!==void 0&&E<=s?(r.value=!0,v.value=o-(s-E)):(r.value=!1,v.value=null),i!==void 0&&C<=i?(l.value=!0,f.value=o+i-C):(l.value=!1,f.value=null)}return W(()=>{w()}),F(()=>{n&&n.removeEventListener("scroll",u)}),{selfRef:R,affixed:c,mergedClsPrefix:a,mergedstyle:y(()=>{const t={};return r.value&&h.value!==void 0&&m.value!==void 0&&(t.top=`${m.value}px`),l.value&&k.value!==void 0&&B.value!==void 0&&(t.bottom=`${B.value}px`),t})}},render(){const{mergedClsPrefix:e}=this;return x("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),he=p("anchor",`
 position: relative;
`,[L("block",`
 padding-left: var(--n-rail-width);
 `,[p("anchor-link",[$("+, >",[p("anchor-link",`
 margin-top: .5em;
 `)])]),p("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),L("show-rail",[$(">",[p("anchor-link","padding-left: 0;")])])]),A("block",[p("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[A("active",`
 background-color: var(--n-link-color);
 `)])]),p("anchor-link-background",`
 position: absolute;
 left: calc(var(--n-rail-width) / 2);
 width: 100%;
 background-color: var(--n-link-color);
 transition:
 top .15s var(--n-bezier),
 max-width .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),p("anchor-rail",`
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
 `,[A("active",{backgroundColor:"var(--n-rail-color-active)"})])]),p("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[A("active",[$(">",[N("title",`
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
 `)])])]),H=Y("n-anchor"),ge={title:String,href:String},Ee=_({name:"AnchorLink",props:ge,setup(e,{slots:a}){const n=b(null),r=J(H),l=D(e,"href"),f=Q(()=>l.value&&l.value===r.activeHref.value);re(H,"collectedLinkHrefs",l),ie(H,"titleEls",()=>n.value),G(f,c=>{c&&n.value&&r.updateBarPosition(n.value)});function v(){e.href!==void 0&&r.setActiveHref(e.href)}return()=>{var c;const{value:h}=r.mergedClsPrefix;return x("div",{class:[`${h}-anchor-link`,f.value&&`${h}-anchor-link--active`]},x("a",{ref:n,class:[`${h}-anchor-link__title`],href:e.href,title:le(e.title),onClick:v},e.title),(c=a.default)===null||c===void 0?void 0:c.call(a))}}});function me(e,a){const{top:n,height:r}=e.getBoundingClientRect(),l=a instanceof HTMLElement?a.getBoundingClientRect().top:0;return{top:n-l,height:r}}const z={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},be=K(z),pe=_({name:"BaseAnchor",props:Object.assign(Object.assign({},z),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const a=[],n=[],r=b(null),l=b(null),f=b(null),v=b(null),c=y(()=>e.type==="block"),h=y(()=>!c.value&&e.showRail);function m(){const{value:u}=f,{value:d}=l;u&&(u.style.transition="none"),d&&(d.style.transition="none"),n&&n.forEach(t=>{t.style.transition="none"}),ee(()=>{const{value:t}=f,{value:o}=l;t&&(t.offsetWidth,t.style.transition=""),o&&(o.offsetWidth,o.style.transition=""),n&&n.forEach(g=>{g.offsetWidth,g.style.transition=""})})}function B(u,d=!0){const{value:t}=f,{value:o}=l,{value:g}=v;if(!g||!t)return;d||(t.style.transition="none",o&&(o.style.transition="none"));const{offsetHeight:T,offsetWidth:E}=u,{top:C,left:s}=u.getBoundingClientRect(),{top:i,left:S}=g.getBoundingClientRect(),P=C-i,O=s-S;t.style.top=`${P}px`,t.style.height=`${T}px`,o&&(o.style.top=`${P}px`,o.style.height=`${T}px`,o.style.maxWidth=`${E+O}px`),t.offsetHeight,o&&o.offsetHeight,d||(t.style.transition="",o&&(o.style.transition=""))}function k(u,d=!0){const t=/^#([^#]+)$/.exec(u);if(!t)return;const o=document.getElementById(t[1]);o&&(r.value=u,o.scrollIntoView(),d||m(),R())}const R=ae(()=>w(!0),128);function w(u=!0){var d;const t=[],o=q((d=e.offsetTarget)!==null&&d!==void 0?d:document);a.forEach(s=>{const i=/#([^#]+)$/.exec(s);if(!i)return;const S=document.getElementById(i[1]);if(S&&o){const{top:P,height:O}=me(S,o);t.push({top:P,height:O,href:s})}}),t.sort((s,i)=>s.top>i.top?1:(s.top===i.top&&s.height<i.height,-1));const g=r.value,{bound:T,ignoreGap:E}=e,C=t.reduce((s,i)=>i.top+i.height<0?E?i:s:i.top<=T?s===null?i:i.top===s.top?i.href===g?i:s:i.top>s.top?i:s:s,null);u||m(),C?r.value=C.href:r.value=null}return X(H,{activeHref:r,mergedClsPrefix:D(e,"mergedClsPrefix"),updateBarPosition:B,setActiveHref:k,collectedLinkHrefs:a,titleEls:n}),W(()=>{document.addEventListener("scroll",R,!0),k(window.location.hash),w(!1)}),se(()=>{k(window.location.hash),w(!1)}),F(()=>{document.removeEventListener("scroll",R,!0)}),G(r,u=>{if(u===null){const{value:d}=l;d&&!c.value&&(d.style.maxWidth="0")}}),{selfRef:v,barRef:f,slotRef:l,setActiveHref:k,activeHref:r,isBlockType:c,mergedShowRail:h}},render(){var e;const{mergedClsPrefix:a,mergedShowRail:n,isBlockType:r,$slots:l}=this,f=x("div",{class:[`${a}-anchor`,r&&`${a}-anchor--block`,n&&`${a}-anchor--show-rail`],ref:"selfRef"},n&&this.showBackground?x("div",{ref:"slotRef",class:`${a}-anchor-link-background`}):null,n?x("div",{class:`${a}-anchor-rail`},x("div",{ref:"barRef",class:[`${a}-anchor-rail__bar`,this.activeHref!==null&&`${a}-anchor-rail__bar--active`]})):null,(e=l.default)===null||e===void 0?void 0:e.call(l));return this.internalScrollable?x(Z,null,{default:()=>f}):f}}),xe=Object.assign(Object.assign(Object.assign(Object.assign({},V.props),{affix:Boolean}),j),z),Ae=_({name:"Anchor",props:xe,setup(e,{slots:a}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=I(e),l=V("Anchor","-anchor",he,oe,e,n),f=b(null),v=y(()=>{const{self:{railColor:h,linkColor:m,railColorActive:B,linkTextColor:k,linkTextColorHover:R,linkTextColorPressed:w,linkTextColorActive:u,linkFontSize:d,railWidth:t,linkPadding:o,borderRadius:g},common:{cubicBezierEaseInOut:T}}=l.value;return{"--n-link-border-radius":g,"--n-link-color":m,"--n-link-font-size":d,"--n-link-text-color":k,"--n-link-text-color-hover":R,"--n-link-text-color-active":u,"--n-link-text-color-pressed":w,"--n-link-padding":o,"--n-bezier":T,"--n-rail-color":h,"--n-rail-color-active":B,"--n-rail-width":t}}),c=r?te("anchor",void 0,v,e):void 0;return{scrollTo(h){var m;(m=f.value)===null||m===void 0||m.setActiveHref(h)},renderAnchor:()=>(c==null||c.onRender(),x(pe,Object.assign({ref:f,style:r?void 0:v.value,class:c==null?void 0:c.themeClass.value},M(e,be),{mergedClsPrefix:n.value}),a))}},render(){return this.affix?x(ve,Object.assign({},M(this,de)),{default:this.renderAnchor}):this.renderAnchor()}});export{Ae as N,Ee as a};
