import{t as ae}from"./imports.3dece87e.js";import{c as b,q as z,d as P,u as Z,bc as se,x as p,k as T,o as Q,a as X,h as _,Y as ee,bZ as ce,s as V,e as $,b as L,H as fe,i as ue,v as te,n as de,y as oe,C as ve,b$ as he,F as ge,z as me,f as ne,m as pe,U as D,cd as be,a7 as _e,a4 as H,ae as A,ad as C,af as y,O as F,bJ as ke,bK as xe,c7 as ye,a3 as O,ah as q,ai as G,cc as J,a5 as re,b5 as Te,ac as U}from"./index.e161c063.js";import{b as Y}from"./route-block.b5bad31b.js";import{_ as Re}from"./plugin-vue_export-helper.21dcd24c.js";import{u as le,N as Se}from"./BackTop.5515f35f.js";import{a as we,b as je}from"./index.08e0f4c1.js";import{a as Be}from"./throttle.4aedfb20.js";import{N as Ce}from"./headers.5547f39b.js";import{N as Oe}from"./Space.eda3ed4f.js";import{N as ze}from"./Ellipsis.15da55b8.js";import{N as $e}from"./Thing.71b4ccef.js";import"./format-length.7f3135aa.js";import"./Tooltip.b974ea33.js";function Ae(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}function Pe(e){return e instanceof HTMLElement?e.scrollTop:window.scrollY}function Ee(e){return e instanceof HTMLElement?e.getBoundingClientRect():{top:0,bottom:window.innerHeight}}var Ne=b("affix",[z("affixed",{position:"fixed"},[z("absolute-positioned",{position:"absolute"})])]);const W={listenTo:[String,Object,Function],top:Number,bottom:Number,triggerTop:Number,triggerBottom:Number,position:{type:String,default:"fix"},offsetTop:{type:Number,validator:()=>!0,default:void 0},offsetBottom:{type:Number,validator:()=>!0,default:void 0},target:{type:Function,validator:()=>!0,default:void 0}},He=ee(W);var Me=P({name:"Affix",props:W,setup(e){const{mergedClsPrefixRef:a}=Z(e);se("-affix",Ne,a);let n=null;const i=p(!1),r=p(!1),s=p(null),v=p(null),l=T(()=>r.value||i.value),h=T(()=>{var t,o;return(o=(t=e.triggerTop)!==null&&t!==void 0?t:e.offsetTop)!==null&&o!==void 0?o:e.top}),m=T(()=>{var t,o;return(o=(t=e.top)!==null&&t!==void 0?t:e.triggerTop)!==null&&o!==void 0?o:e.offsetTop}),j=T(()=>{var t,o;return(o=(t=e.bottom)!==null&&t!==void 0?t:e.triggerBottom)!==null&&o!==void 0?o:e.offsetBottom}),k=T(()=>{var t,o;return(o=(t=e.triggerBottom)!==null&&t!==void 0?t:e.offsetBottom)!==null&&o!==void 0?o:e.bottom}),R=p(null),S=()=>{const{target:t,listenTo:o}=e;t?n=t():o?n=le(o):n=document,n&&(n.addEventListener("scroll",u),u())};function u(){ce(d)}function d(){const{value:t}=R;if(!n||!t)return;const o=Pe(n);if(l.value){o<v.value&&(i.value=!1,v.value=null),o>s.value&&(r.value=!1,s.value=null);return}const g=Ee(n),x=t.getBoundingClientRect(),B=x.top-g.top,w=g.bottom-x.bottom,f=h.value,c=k.value;f!==void 0&&B<=f?(i.value=!0,v.value=o-(f-B)):(i.value=!1,v.value=null),c!==void 0&&w<=c?(r.value=!0,s.value=o+c-w):(r.value=!1,s.value=null)}return Q(()=>{S()}),X(()=>{!n||n.removeEventListener("scroll",u)}),{selfRef:R,affixed:l,mergedClsPrefix:a,mergedstyle:T(()=>{const t={};return i.value&&h.value!==void 0&&m.value!==void 0&&(t.top=`${m.value}px`),r.value&&k.value!==void 0&&j.value!==void 0&&(t.bottom=`${j.value}px`),t})}},render(){const{mergedClsPrefix:e}=this;return _("div",{ref:"selfRef",class:[`${e}-affix`,{[`${e}-affix--affixed`]:this.affixed,[`${e}-affix--absolute-positioned`]:this.position==="absolute"}],style:this.mergedstyle},this.$slots)}}),Ie=b("anchor",`
 position: relative;
`,[V("block",`
 padding-left: var(--n-rail-width);
 `,[b("anchor-link",[$("+, >",[b("anchor-link",`
 margin-top: .5em;
 `)])]),b("anchor-link-background",`
 max-width: 0;
 border-top-right-radius: 10.5px;
 border-bottom-right-radius: 10.5px;
 `),V("show-rail",[$(">",[b("anchor-link","padding-left: 0;")])])]),z("block",[b("anchor-link",`
 margin-bottom: 4px;
 padding: 2px 8px;
 transition: background-color .3s var(--n-bezier);
 background-color: transparent;
 border-radius: var(--n-link-border-radius);
 `,[z("active",`
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
 `,[L("bar",`
 position: absolute;
 left: 0;
 width: var(--n-rail-width);
 height: 21px;
 background-color: #0000;
 transition: 
 top .15s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[z("active",{backgroundColor:"var(--n-rail-color-active)"})])]),b("anchor-link",`
 padding: var(--n-link-padding);
 position: relative;
 line-height: 1.5;
 font-size: var(--n-link-font-size);
 min-height: 1.5em;
 display: flex;
 flex-direction: column;
 `,[z("active",[$(">",[L("title",`
 color: var(--n-link-text-color-active);
 `)])]),L("title",`
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
 `)])])]);const M=fe("n-anchor"),Le={title:String,href:String};var Fe=P({name:"AnchorLink",props:Le,setup(e,{slots:a}){const n=p(null),i=ue(M),r=te(e,"href"),s=de(()=>r.value&&r.value===i.activeHref.value);we(M,"collectedLinkHrefs",r),je(M,"titleEls",()=>n.value),oe(s,l=>{l&&n.value&&i.updateBarPosition(n.value)});function v(){e.href!==void 0&&i.setActiveHref(e.href)}return()=>{var l;const{value:h}=i.mergedClsPrefix;return _("div",{class:[`${h}-anchor-link`,s.value&&`${h}-anchor-link--active`]},_("a",{ref:n,class:[`${h}-anchor-link__title`],href:e.href,title:Ae(e.title),onClick:v},e.title),(l=a.default)===null||l===void 0?void 0:l.call(a))}}});function We(e,a){const{top:n,height:i}=e.getBoundingClientRect(),r=a instanceof HTMLElement?a.getBoundingClientRect().top:0;return{top:n-r,height:i}}const K={type:{type:String,default:"rail"},showRail:{type:Boolean,default:!0},showBackground:{type:Boolean,default:!0},bound:{type:Number,default:12},internalScrollable:Boolean,ignoreGap:Boolean,offsetTarget:[String,Object,Function]},Ke=ee(K);var Ve=P({name:"BaseAnchor",props:Object.assign(Object.assign({},K),{mergedClsPrefix:{type:String,required:!0}}),setup(e){const a=[],n=[],i=p(null),r=p(null),s=p(null),v=p(null),l=T(()=>e.type==="block"),h=T(()=>!l.value&&e.showRail);function m(){const{value:u}=s,{value:d}=r;u&&(u.style.transition="none"),d&&(d.style.transition="none"),n&&n.forEach(t=>{t.style.transition="none"}),me(()=>{const{value:t}=s,{value:o}=r;t&&(t.offsetWidth,t.style.transition=""),o&&(o.offsetWidth,o.style.transition=""),n&&n.forEach(g=>{g.offsetWidth,g.style.transition=""})})}function j(u,d=!0){const{value:t}=s,{value:o}=r,{value:g}=v;if(!g||!t)return;d||(t.style.transition="none",o&&(o.style.transition="none"));const{offsetHeight:x,offsetWidth:B}=u,{top:w,left:f}=u.getBoundingClientRect(),{top:c,left:E}=g.getBoundingClientRect(),N=w-c,I=f-E;t.style.top=`${N}px`,t.style.height=`${x}px`,o&&(o.style.top=`${N}px`,o.style.height=`${x}px`,o.style.maxWidth=`${B+I}px`),t.offsetHeight,o&&o.offsetHeight,d||(t.style.transition="",o&&(o.style.transition=""))}function k(u,d=!0){const t=/^#([^#]+)$/.exec(u);if(!t)return;const o=document.getElementById(t[1]);!o||(i.value=u,o.scrollIntoView(),d||m(),R())}const R=Be(()=>S(!0),128);function S(u=!0){var d;const t=[],o=le((d=e.offsetTarget)!==null&&d!==void 0?d:document);a.forEach(f=>{const c=/#([^#]+)$/.exec(f);if(!c)return;const E=document.getElementById(c[1]);if(E&&o){const{top:N,height:I}=We(E,o);t.push({top:N,height:I,href:f})}}),t.sort((f,c)=>f.top>c.top?1:(f.top===c.top&&f.height<c.height,-1));const g=i.value,{bound:x,ignoreGap:B}=e,w=t.reduce((f,c)=>c.top+c.height<0?B?c:f:c.top<=x?f===null?c:c.top===f.top?c.href===g?c:f:c.top>f.top?c:f:f,null);u||m(),w?i.value=w.href:i.value=null}return ve(M,{activeHref:i,mergedClsPrefix:te(e,"mergedClsPrefix"),updateBarPosition:j,setActiveHref:k,collectedLinkHrefs:a,titleEls:n}),Q(()=>{document.addEventListener("scroll",R,!0),k(window.location.hash),S(!1)}),he(()=>{k(window.location.hash),S(!1)}),X(()=>{document.removeEventListener("scroll",R,!0)}),oe(i,u=>{if(u===null){const{value:d}=r;d&&!l.value&&(d.style.maxWidth="0")}}),{selfRef:v,barRef:s,slotRef:r,setActiveHref:k,activeHref:i,isBlockType:l,mergedShowRail:h}},render(){var e;const{mergedClsPrefix:a,mergedShowRail:n,isBlockType:i,$slots:r}=this,s=_("div",{class:[`${a}-anchor`,i&&`${a}-anchor--block`,n&&`${a}-anchor--show-rail`],ref:"selfRef"},n&&this.showBackground?_("div",{ref:"slotRef",class:`${a}-anchor-link-background`}):null,n?_("div",{class:`${a}-anchor-rail`},_("div",{ref:"barRef",class:[`${a}-anchor-rail__bar`,this.activeHref!==null&&`${a}-anchor-rail__bar--active`]})):null,(e=r.default)===null||e===void 0?void 0:e.call(r));return this.internalScrollable?_(ge,null,{default:()=>s}):s}});const De=Object.assign(Object.assign(Object.assign(Object.assign({},ne.props),{affix:Boolean}),W),K);var qe=P({name:"Anchor",props:De,setup(e,{slots:a}){const{mergedClsPrefixRef:n,inlineThemeDisabled:i}=Z(e),r=ne("Anchor","-anchor",Ie,be,e,n),s=p(null),v=T(()=>{const{self:{railColor:h,linkColor:m,railColorActive:j,linkTextColor:k,linkTextColorHover:R,linkTextColorPressed:S,linkTextColorActive:u,linkFontSize:d,railWidth:t,linkPadding:o,borderRadius:g},common:{cubicBezierEaseInOut:x}}=r.value;return{"--n-link-border-radius":g,"--n-link-color":m,"--n-link-font-size":d,"--n-link-text-color":k,"--n-link-text-color-hover":R,"--n-link-text-color-active":u,"--n-link-text-color-pressed":S,"--n-link-padding":o,"--n-bezier":x,"--n-rail-color":h,"--n-rail-color-active":j,"--n-rail-width":t}}),l=i?pe("anchor",void 0,v,e):void 0;return{scrollTo(h){var m;(m=s.value)===null||m===void 0||m.setActiveHref(h)},renderAnchor:()=>(l==null||l.onRender(),_(Ve,Object.assign({ref:s,style:i?void 0:v.value,class:l==null?void 0:l.themeClass.value},D(e,Ke),{mergedClsPrefix:n.value}),a))}},render(){return this.affix?_(Me,Object.assign({},D(this,He)),{default:this.renderAnchor}):this.renderAnchor()}}),Ge="./assets/110.fc64858c.mp4",Je=Object.freeze(Object.defineProperty({__proto__:null,default:Ge},Symbol.toStringTag,{value:"Module"})),Ue="./assets/AOA.49818344.mp4",Ye=Object.freeze(Object.defineProperty({__proto__:null,default:Ue},Symbol.toStringTag,{value:"Module"})),Ze="./assets/fuzeonlineclasspure.f5e954c4.mp4",Qe=Object.freeze(Object.defineProperty({__proto__:null,default:Ze},Symbol.toStringTag,{value:"Module"})),Xe="./assets/gcfrombilibilinoscare.c3549801.mp4",et=Object.freeze(Object.defineProperty({__proto__:null,default:Xe},Symbol.toStringTag,{value:"Module"})),tt="./assets/gcscare.5ff45680.mp4",ot=Object.freeze(Object.defineProperty({__proto__:null,default:tt},Symbol.toStringTag,{value:"Module"})),nt="./assets/grandmother.b4aa9eb3.mp4",rt=Object.freeze(Object.defineProperty({__proto__:null,default:nt},Symbol.toStringTag,{value:"Module"})),lt="./assets/tuan.5a33bbf8.mp4",it=Object.freeze(Object.defineProperty({__proto__:null,default:lt},Symbol.toStringTag,{value:"Module"})),at="./assets/verifyco2.ebfbee1d.mp4",st=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"}));const ct=e=>(ke("data-v-7f44d500"),e=e(),xe(),e),ft=ct(()=>re("br",null,null,-1)),ut=["title"],dt=["src"],ie=P({setup(e){const a=_e(),n=ae({"../../../assets/videos/jokes/fuze/110.mp4":Je,"../../../assets/videos/jokes/fuze/AOA.mp4":Ye,"../../../assets/videos/jokes/fuze/fuzeonlineclasspure.mp4":Qe,"../../../assets/videos/jokes/fuze/gcfrombilibilinoscare.mp4":et,"../../../assets/videos/jokes/fuze/gcscare.mp4":ot,"../../../assets/videos/jokes/fuze/grandmother.mp4":rt,"../../../assets/videos/jokes/fuze/tuan.mp4":it,"../../../assets/videos/jokes/fuze/verifyco2.mp4":st}),i=r=>{var s=r.target;s.getAttribute("key")==="gcscare"&&a.achieve("tonight_is_the_best")};return(r,s)=>{const v=ye("anchor");return O(),H(F,null,[A(y(Ce),null,{default:C(()=>[q(G(r.$t("layouts.JokesLayout.fuze-videos")),1)]),_:1}),A(y(qe),{affix:""},{default:C(()=>[(O(!0),H(F,null,J(y(n),l=>Te((O(),U(y(Fe),{title:r.$t(`views.jokes.fuze.videos.items.${l.name}`)},null,8,["title"])),[[v,`#_${l.name}`]])),256))]),_:1}),ft,A(y(Oe),{vertical:""},{default:C(()=>[(O(!0),H(F,null,J(y(n),l=>(O(),U(y($e),{key:l.name,id:`_${l.name}`},{header:C(()=>[A(y(ze),{"line-clamp":"3"},{default:C(()=>[q(G(r.$t(`views.jokes.fuze.videos.items.${l.name}`)),1)]),_:2},1024)]),default:C(()=>[(O(),H("video",{onPlay:s[0]||(s[0]=h=>i(h)),controls:"",key:l.name,title:r.$t(`views.jokes.fuze.videos.items.${l.name}`)},[re("source",{src:l.path},null,8,dt)],40,ut))]),_:2},1032,["id"]))),128))]),_:1}),A(y(Se))],64)}}});typeof Y=="function"&&Y(ie);var wt=Re(ie,[["__scopeId","data-v-7f44d500"]]);export{wt as default};
