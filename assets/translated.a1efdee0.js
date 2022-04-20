import{b as lu}from"./route-block.b5bad31b.js";import{aT as te,b4 as K,aN as ae,b as O,h as i,i as R,R as ne,af as re,B as vu,D as ie,f as Q,V as oe,ah as pu,a0 as se,a2 as le,bQ as Fe,au as Ee,X as f,a3 as h,Z as w,Y as z,a4 as de,E as ce,F as Du,as as Fu,H as J,ai as fe,Q as be,aa as Ce,a6 as I,bh as Be,w as Ae,$ as ve,ab as Eu,W as du,bR as pe,al as X,a8 as De,J as P,bf as he,bS as ge,bs as me,bo as xe,k as ye,p as W,m as k,n as L,q as we,j as Re,g as Y,v as Te}from"./index.62ade1b0.js";import{c as Se,a as cu}from"./cssr.ab5f485e.js";import{N as _e}from"./headers.3c71653a.js";import{N as Z}from"./blockquote.4385d249.js";var $e=/\s/;function ze(u){for(var e=u.length;e--&&$e.test(u.charAt(e)););return e}var Pe=/^\s+/;function We(u){return u&&u.slice(0,ze(u)+1).replace(Pe,"")}var fu=0/0,ke=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,je=/^0o[0-7]+$/i,Ie=parseInt;function bu(u){if(typeof u=="number")return u;if(te(u))return fu;if(K(u)){var e=typeof u.valueOf=="function"?u.valueOf():u;u=K(e)?e+"":e}if(typeof u!="string")return u===0?u:+u;u=We(u);var n=Le.test(u);return n||je.test(u)?Ie(u.slice(2),n?2:8):ke.test(u)?fu:+u}var Ne=function(){return ae.Date.now()},uu=Ne,Oe="Expected a function",Me=Math.max,He=Math.min;function Ve(u,e,n){var o,r,E,d,s,A,v=0,p=!1,C=!1,b=!0;if(typeof u!="function")throw new TypeError(Oe);e=bu(e)||0,K(n)&&(p=!!n.leading,C="maxWait"in n,E=C?Me(bu(n.maxWait)||0,e):E,b="trailing"in n?!!n.trailing:b);function D(B){var S=o,_=r;return o=r=void 0,v=B,d=u.apply(_,S),d}function g(B){return v=B,s=setTimeout(m,e),p?D(B):d}function y(B){var S=B-A,_=B-v,j=e-S;return C?He(j,E-_):j}function l(B){var S=B-A,_=B-v;return A===void 0||S>=e||S<0||C&&_>=E}function m(){var B=uu();if(l(B))return x(B);s=setTimeout(m,y(B))}function x(B){return s=void 0,b&&o?D(B):(o=r=void 0,d)}function T(){s!==void 0&&clearTimeout(s),v=0,o=A=r=s=void 0}function H(){return s===void 0?d:x(uu())}function M(){var B=uu(),S=l(B);if(o=arguments,r=this,A=B,S){if(s===void 0)return g(A);if(C)return clearTimeout(s),s=setTimeout(m,e),D(A)}return s===void 0&&(s=setTimeout(m,e)),d}return M.cancel=T,M.flush=H,M}var Ue="Expected a function";function eu(u,e,n){var o=!0,r=!0;if(typeof u!="function")throw new TypeError(Ue);return K(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),Ve(u,e,{leading:o,maxWait:e,trailing:r})}var Xe=O({name:"Add",render(){return i("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}});const Qe=cu(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[cu("&::-webkit-scrollbar",{width:0,height:0})]);var Ke=O({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const u=R(null);function e(r){!(r.currentTarget.offsetWidth<r.currentTarget.scrollWidth)||r.deltaY===0||(r.currentTarget.scrollLeft+=r.deltaY+r.deltaX,r.preventDefault())}const n=ne();return Qe.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Se,ssr:n}),Object.assign({selfRef:u,handleWheel:e},{scrollTo(...r){var E;(E=u.value)===null||E===void 0||E.scrollTo(...r)}})},render(){return i("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});const ru=re("n-tabs"),hu={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var tu=O({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:hu,setup(u){const e=vu(ru,null);return e||ie("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:e.paneStyleRef,class:e.paneClassRef,mergedClsPrefix:e.mergedClsPrefixRef}},render(){return i("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const Ye=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ee(hu,["displayDirective"]));var nu=O({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Ye,setup(u){const{mergedClsPrefixRef:e,valueRef:n,typeRef:o,closableRef:r,tabStyleRef:E,tabChangeIdRef:d,onBeforeLeaveRef:s,triggerRef:A,handleAdd:v,activateTab:p,handleClose:C}=vu(ru);return{trigger:A,mergedClosable:Q(()=>{if(u.internalAddable)return!1;const{closable:b}=u;return b===void 0?r.value:b}),style:E,clsPrefix:e,value:n,type:o,handleClose(b){b.stopPropagation(),!u.disabled&&C(u.name)},activateTab(){if(u.disabled)return;if(u.internalAddable){v();return}const{name:b}=u,D=++d.id;if(b!==n.value){const{value:g}=s;g?Promise.resolve(g(u.name,n.value)).then(y=>{y&&d.id===D&&p(b)}):p(b)}}}},render(){const{internalAddable:u,clsPrefix:e,name:n,disabled:o,label:r,tab:E,value:d,mergedClosable:s,style:A,trigger:v,$slots:{default:p}}=this,C=r!=null?r:E;return i("div",{class:`${e}-tabs-tab-wrapper`},this.internalLeftPadded?i("div",{class:`${e}-tabs-tab-pad`}):null,i("div",Object.assign({key:n,"data-name":n,"data-disabled":o?!0:void 0},oe({class:[`${e}-tabs-tab`,d===n&&`${e}-tabs-tab--active`,o&&`${e}-tabs-tab--disabled`,s&&`${e}-tabs-tab--closable`,u&&`${e}-tabs-tab--addable`],onClick:v==="click"?this.activateTab:void 0,onMouseenter:v==="hover"?this.activateTab:void 0,style:u?void 0:A},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),i("span",{class:`${e}-tabs-tab__label`},u?i(pu,null,i("div",{class:`${e}-tabs-tab__height-placeholder`},"\xA0"),i(se,{clsPrefix:e},{default:()=>i(Xe,null)})):p?p():typeof C=="object"?C:le(C!=null?C:n)),s&&this.type==="card"?i(Fe,{clsPrefix:e,class:`${e}-tabs-tab__close`,onClick:this.handleClose,disabled:o}):null))}}),qe=f("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[f("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[f("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[f("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[h("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),h("flex",[f("tabs-nav",{width:"100%"},[f("tabs-wrapper",{width:"100%"},[f("tabs-tab",{marginRight:0})])])]),f("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z("prefix, suffix",`
 display: flex;
 align-items: center;
 `),z("prefix","padding-right: 16px;"),z("suffix","padding-left: 16px;")]),f("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[h("shadow-before",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),h("shadow-after",[w("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),w("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),w("&::before",`
 left: 0;
 `),w("&::after",`
 right: 0;
 `)]),f("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),f("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),f("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),f("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[h("disabled",{cursor:"not-allowed"}),z("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),z("label",`
 display: flex;
 align-items: center;
 `)]),f("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[h("transition-disabled",`
 transition: none;
 `),h("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),f("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),f("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier),
 transform .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),w("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),w("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),w("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),f("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),h("line-type, bar-type",[f("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),h("active",{color:"var(--n-tab-text-color-active)"}),h("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),f("tabs-nav",[h("line-type",[z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),h("card-type",[z("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),f("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[h("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[z("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),de("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),h("closable","padding-right: 6px;"),h("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),h("disabled","color: var(--n-tab-text-color-disabled);")]),f("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const Ge=Object.assign(Object.assign({},Du.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var Je=O({name:"Tabs",props:Ge,setup(u,{slots:e}){var n,o,r,E;const{mergedClsPrefixRef:d,inlineThemeDisabled:s}=ce(u),A=Du("Tabs","-tabs",qe,pe,u,d),v=R(null),p=R(null),C=R(null),b=R(null),D=R(null),g=R(!0),y=R(!0),l=Fu(u,["labelSize","size"]),m=Fu(u,["activeName","value"]),x=R((o=(n=m.value)!==null&&n!==void 0?n:u.defaultValue)!==null&&o!==void 0?o:e.default?(E=(r=J(e.default())[0])===null||r===void 0?void 0:r.props)===null||E===void 0?void 0:E.name:null),T=fe(m,x),H={id:0},M=Q(()=>{if(!(!u.justifyContent||u.type==="card"))return{display:"flex",justifyContent:u.justifyContent}});be(T,()=>{H.id=0,_()});function B(){var t;const{value:a}=T;return a===null?null:(t=v.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function S(t){if(u.type==="card")return;const{value:a}=p;if(!!a&&t){const F=`${d.value}-tabs-bar--disabled`,{barWidth:c}=u;if(t.dataset.disabled==="true"?a.classList.add(F):a.classList.remove(F),c&&t.offsetWidth>=c){const $=Math.floor((t.offsetWidth-c)/2)+t.offsetLeft;a.style.left=`${$}px`,a.style.maxWidth=`${c}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px"}}function _(){if(u.type==="card")return;const t=B();t&&S(t)}const j=R(null);let q=0;function gu(){const t=j.value;if(t){q=t.getBoundingClientRect().height;const a=`${q}px`;t.style.height=a,t.style.maxHeight=a}}function mu(t){const a=j.value;if(a){const F=t.getBoundingClientRect().height;a.style.maxHeight=`${F}px`,a.style.height=`${Math.max(q,F)}px`}}function xu(){const t=j.value;t&&(t.style.maxHeight="",t.style.height="")}const iu={value:[]},ou=R("next");function yu(t){const a=T.value;let F="next";for(const c of iu.value){if(c===a)break;if(c===t){F="prev";break}}ou.value=F,wu(t)}function wu(t){const{onActiveNameChange:a,onUpdateValue:F,"onUpdate:value":c}=u;a&&X(a,t),F&&X(F,t),c&&X(c,t),x.value=t}function Ru(t){const{onClose:a}=u;a&&X(a,t)}let Tu=!0;const Su=eu(function(){var a;const{type:F}=u;if((F==="line"||F==="bar")&&Tu){const{value:c}=p;if(!c)return;const $=`${d.value}-tabs-bar--transition-disabled`;c.classList.add($),_(),c.classList.remove($)}F!=="segment"&&G((a=D.value)===null||a===void 0?void 0:a.$el)},64),V=R(!1);function _u(t){var a;const{target:F,contentRect:{width:c}}=t,$=F.parentElement.offsetWidth;if(!V.value)$<c&&(V.value=!0);else{const{value:U}=b;if(!U)return;$-c>U.$el.offsetWidth&&(V.value=!1)}G((a=D.value)===null||a===void 0?void 0:a.$el)}const $u=eu(_u,64);function zu(){const{onAdd:t}=u;t&&t(),De(()=>{const a=B(),{value:F}=D;!a||!F||F.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function G(t){if(!t)return;const{scrollLeft:a,scrollWidth:F,offsetWidth:c}=t;g.value=a<=0,y.value=a+c>=F}const Pu=eu(t=>{G(t.target)},64);Ce(ru,{triggerRef:I(u,"trigger"),tabStyleRef:I(u,"tabStyle"),paneClassRef:I(u,"paneClass"),paneStyleRef:I(u,"paneStyle"),mergedClsPrefixRef:d,typeRef:I(u,"type"),closableRef:I(u,"closable"),valueRef:T,tabChangeIdRef:H,onBeforeLeaveRef:I(u,"onBeforeLeave"),activateTab:yu,handleClose:Ru,handleAdd:zu}),Be(()=>{_()}),Ae(()=>{const{value:t}=C;if(!t)return;const{value:a}=d,F=`${a}-tabs-nav-scroll-wrapper--shadow-before`,c=`${a}-tabs-nav-scroll-wrapper--shadow-after`;g.value?t.classList.remove(F):t.classList.add(F),y.value?t.classList.remove(c):t.classList.add(c)});const Wu={syncBarPosition:()=>{_()}},su=Q(()=>{const{value:t}=l,{type:a}=u,F={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],c=`${t}${F}`,{self:{barColor:$,closeColor:U,closeColorHover:ku,closeColorPressed:Lu,tabColor:ju,tabBorderColor:Iu,paneTextColor:Nu,tabFontWeight:Ou,tabBorderRadius:Mu,tabFontWeightActive:Hu,colorSegment:Vu,fontWeightStrong:Uu,tabColorSegment:Xu,[P("panePadding",t)]:Qu,[P("tabPadding",c)]:Ku,[P("tabGap",c)]:Yu,[P("tabTextColor",a)]:qu,[P("tabTextColorActive",a)]:Gu,[P("tabTextColorHover",a)]:Ju,[P("tabTextColorDisabled",a)]:Zu,[P("tabFontSize",t)]:ue},common:{cubicBezierEaseInOut:ee}}=A.value;return{"--n-bezier":ee,"--n-color-segment":Vu,"--n-bar-color":$,"--n-tab-font-size":ue,"--n-tab-text-color":qu,"--n-tab-text-color-active":Gu,"--n-tab-text-color-disabled":Zu,"--n-tab-text-color-hover":Ju,"--n-pane-text-color":Nu,"--n-tab-border-color":Iu,"--n-tab-border-radius":Mu,"--n-close-color":U,"--n-close-color-hover":ku,"--n-close-color-pressed":Lu,"--n-tab-color":ju,"--n-tab-font-weight":Ou,"--n-tab-font-weight-active":Hu,"--n-tab-padding":Ku,"--n-tab-gap":Yu,"--n-pane-padding":Qu,"--n-font-weight-strong":Uu,"--n-tab-color-segment":Xu}}),N=s?ve("tabs",Q(()=>`${l.value[0]}${u.type[0]}`),su,u):void 0;return Object.assign({mergedClsPrefix:d,mergedValue:T,renderedNames:new Set,tabsPaneWrapperRef:j,tabsElRef:v,barElRef:p,addTabInstRef:b,xScrollInstRef:D,scrollWrapperElRef:C,addTabFixed:V,tabWrapperStyle:M,handleNavResize:Su,mergedSize:l,handleScroll:Pu,handleTabsResize:$u,cssVars:s?void 0:su,themeClass:N==null?void 0:N.themeClass,animationDirection:ou,renderNameListRef:iu,onAnimationBeforeLeave:gu,onAnimationEnter:mu,onAnimationAfterEnter:xu,onRender:N==null?void 0:N.onRender},Wu)},render(){const{mergedClsPrefix:u,type:e,addTabFixed:n,addable:o,mergedSize:r,renderNameListRef:E,onRender:d,$slots:{default:s,prefix:A,suffix:v}}=this;d==null||d();const p=s?J(s()).filter(l=>l.type.__TAB_PANE__===!0):[],C=s?J(s()).filter(l=>l.type.__TAB__===!0):[],b=!C.length,D=e==="card",g=e==="segment",y=!D&&!g&&this.justifyContent;return E.value=[],i("div",{class:[`${u}-tabs`,this.themeClass,`${u}-tabs--${e}-type`,`${u}-tabs--${r}-size`,y&&`${u}-tabs--flex`],style:this.cssVars},i("div",{class:[`${u}-tabs-nav--${e}-type`,`${u}-tabs-nav`]},Eu(A,l=>l&&i("div",{class:`${u}-tabs-nav__prefix`},l)),g?i("div",{class:`${u}-tabs-rail`},b?p.map((l,m)=>(E.value.push(l.props.name),i(nu,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:m!==0}),l.children?{default:l.children.tab}:void 0))):C.map((l,m)=>(E.value.push(l.props.name),m===0?l:Au(l)))):i(du,{onResize:this.handleNavResize},{default:()=>i("div",{class:`${u}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},i(Ke,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=i("div",{style:this.tabWrapperStyle,class:`${u}-tabs-wrapper`},y?null:i("div",{class:`${u}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),b?p.map((x,T)=>(E.value.push(x.props.name),au(i(nu,Object.assign({},x.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&!y}),x.children?{default:x.children.tab}:void 0)))):C.map((x,T)=>(E.value.push(x.props.name),au(T!==0&&!y?Au(x):x))),!n&&o&&D?Bu(o,(b?p.length:C.length)!==0):null,y?null:i("div",{class:`${u}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let m=l;return D&&o&&(m=i(du,{onResize:this.handleTabsResize},{default:()=>l})),i("div",{ref:"tabsElRef",class:`${u}-tabs-nav-scroll-content`},m,D?i("div",{class:`${u}-tabs-pad`}):null,D?null:i("div",{ref:"barElRef",class:`${u}-tabs-bar`}))}}))}),n&&o&&D?Bu(o,!0):null,Eu(v,l=>l&&i("div",{class:`${u}-tabs-nav__suffix`},l))),b&&(this.animated?i("div",{ref:"tabsPaneWrapperRef",class:`${u}-tabs-pane-wrapper`},Cu(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Cu(p,this.mergedValue,this.renderedNames)))}});function Cu(u,e,n,o,r,E,d){const s=[];return u.forEach(A=>{const{name:v,displayDirective:p,"display-directive":C}=A.props,b=g=>p===g||C===g,D=e===v;if(A.key!==void 0&&(A.key=v),D||b("show")||b("show:lazy")&&n.has(v)){n.has(v)||n.add(v);const g=!b("if");s.push(g?he(A,[[xe,D]]):A)}}),d?i(ge,{name:`${d}-transition`,onBeforeLeave:o,onEnter:r,onAfterEnter:E},{default:()=>s}):s}function Bu(u,e){return i(nu,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:e,disabled:typeof u=="object"&&u.disabled})}function Au(u){const e=me(u);return e.props?e.props.internalLeftPadded=!0:e.props={internalLeftPadded:!0},e}function au(u){return Array.isArray(u.dynamicProps)?u.dynamicProps.includes("internalLeftPadded")||u.dynamicProps.push("internalLeftPadded"):u.dynamicProps=["internalLeftPadded"],u}const Ze=we("s",null,"\u61D2\u5F97\u505A\u6362\u884C\u4E86, \u770B\u7740\u6709\u70B9\u773C\u778E, \u51D1\u6D3B\u51D1\u6D3B\u5427",-1),ut=Y(" \u4E0D\u8981\u5728\u7F51\u4E0A\u6536\u96C6\u8BC4\u8BBA\uFF0C\u4E0D\u5E78\u7684\u662F\u8FC7\u53BB\u3002 \u6211\u770B\u5230\u4F60\u5728\u8D23\u5907\u6211\uFF0C\u8FD9\u662F\u6B63\u786E\u7684 \u4E8B\u5B9E\u4E0A\uFF0C\u4EBA\u4EEC\u5230\u8FBE\u90A3\u91CC\u5E76\u4E0D\u5BB9\u6613\u3002 \u4F60\u6709\u6CA1\u6709\u60F3\u8FC7\u4EC0\u4E48\u662F\u66B4\u529B\uFF1F \u4EBA\u4EEC\u4E3A\u4EC0\u4E48\u805A\u96C6 \u6BD4\u8D5B\u7ED3\u675F\u540E\u4F1A\u6709\u80DC\u5229\u3002 \u78B0\u649E\u662F\u4E0D\u53EF\u907F\u514D\u7684\u3002\u540C\u6837\u7684\u4E8B\u60C5\u4E5F\u9002\u7528\u4E8E\u540C\u5B66\u548C\u5BB6\u4EBA\u3002 \u4EBA\u4EEC\u805A\u5728\u4E00\u8D77\u7684\u539F\u56E0\u662F\u56E0\u4E3A\u4ED6\u4EEC\u4E0D\u805A\u5728\u4E00\u8D77\u3002 \u4F60\u8BA4\u4E3A\u4F60\u4E0D\u60F3\u56DE\u5230\u4F60\u7684\u8D23\u4EFB\uFF1F \u8FD9\u53EF\u80FD\u662F\u4E00\u4E2A\u9519\u8BEF\uFF0C\u4F46\u6211\u4E0D\u8FD9\u4E48\u8BA4\u4E3A\u3002 \u4E5F\u8BB8\u662F\u522B\u7684\u4E1C\u897F\u3002\u4E5F\u8BB8\u6211\u59D0\u59D0\u548C\u8303\u5DF2\u7ECF\u79BB\u5F00\u5730\u72F1\u4E86\uFF1F \u56DE\u5230\u4E0A\u4E00\u4E2A\u95EE\u9898\u3002\u4F60\u8BA4\u4E3A\u4EBA\u4EEC\u4E3A\u4EC0\u4E48\u4F1A\u805A\u5728\u4E00\u8D77\uFF1F \u4ECE\u90A3\u4EE5\u540E\u6211\u5C31\u4E00\u76F4\u62C5\u5FC3\u8FD9\u4E2A\u95EE\u9898\u3002\u4F46\u6211\u65E0\u6CD5\u5F97\u5230\u5B8C\u6574\u7684\u7B54\u6848\u3002 \u6211\u60F3\u542C\u542C\u3002 \u8FD9\u662F\u4E00\u4E2A\u5C0F\u95EE\u9898\uFF0C\u4F46\u5B83\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u95EE\u9898\u3002\u4EBA\u4EEC\u4F1A\u660E\u767D\u8FD9\u771F\u6B63\u610F\u5473\u7740\u4EC0\u4E48\u3002 \u5728\u6211\u770B\u6765\uFF0C\u8FD0\u52A8\u662F\u4E00\u79CD\u8868\u8FBE\u60C5\u7EEA\u7684\u65B9\u5F0F\u3002\u8FD9\u662F\u7ED3\u675F\u5B83\u7684\u552F\u4E00\u65B9\u6CD5\u3002 12-3\uFF0C\u4F46\u6211\u8D62\u4E0D\u4E86\u3002\u771F\u76F8\u5BF9\u6211\u4E0D\u5229 \u6211\u4E0D\u77E5\u9053\u8981\u8BF4\u4EC0\u4E48 \u81EA\u4F1A\u8BAE\u4EE5\u6765\uFF0C\u6218\u6597\u4E00\u76F4\u6CA1\u6709\u505C\u6B62\u3002 \u6211\u76F8\u4FE1\u90AA\u6076\u3001\u6253\u51FB\u3001\u5931\u671B\u548C\u7ED3\u5C40\u90FD\u4F1A\u5E26\u6765\u5E78\u798F\u3002 \u4E3A\u4EC0\u4E48\u4F1A\u9047\u5230\u8FD9\u4E2A\u4EBA\uFF1F\u6211\u60F3\u662F\u7684\u3002\u6211\u7684\u7B54\u6848\u662F\u7231\u3002 \u5728\u4EBA\u5FC3\u4E2D\uFF0C\u8FD9\u53EB\u505A\u667A\u6167\u3002\u6240\u4EE5\u4E0D\u8981\u8D23\u602A\u4EBA \u4F60\u7ECF\u5386\u7684\u8D8A\u591A\uFF0C\u4F60\u7684\u60C5\u7EEA\u5C31\u8D8A\u4E0D\u582A\u91CD\u8D1F\u3002 \u5E2E\u52A9\u4EBA\u4EEC\u907F\u514D\u56E0\u9519\u8BEF\u800C\u5BFC\u81F4\u7684\u672A\u6765\u75DB\u82E6\u3002 \u5728\u6211\u751F\u6C14\u4E4B\u524D\u6211\u662F\u6709\u7F6A\u7684\u3002\u662F\u7684\uFF0C\u4F60\u53EF\u4EE5\u4FAE\u8FB1\u6211\u3002 \u4F46\u6211\u4E0D\u5E0C\u671B\u4EBA\u4EEC\u611F\u5230\u9707\u60CA\u3001\u9057\u61BE\u6216\u5931\u53BB\u5FEB\u4E50\u3002\u6216\u8005\u5BB3\u6015\u8FD9\u6837\u505A \u8BF7\u7ED9\u610F\u89C1 \u4E0D\u8FC7\uFF0C\u81F3\u5C11\u6211\u6CA1\u6709\u4E0D\u5148\u89E3\u91CA\u81EA\u5DF1\u5C31\u4E0B\u697C\u4E86\u3002 \u8FD9\u4E0D\u662F\u4E00\u4EF6\u5BB9\u6613\u7684\u4E8B\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u6709\u81EA\u5DF1\u7684\u89E3\u51B3\u65B9\u6848\u3002 \u5982\u679C\u4F60\u53CD\u5E94\u826F\u597D\uFF0C\u4F60\u4F1A\u5BF9\u4F60\u7684\u670B\u53CB\u3001\u5BB6\u4EBA\u3001\u5BB6\u4EBA\u548C\u670B\u53CB\u611F\u89C9\u66F4\u597D\u3002 \u5B83\u5F88\u7D2F\u800C\u4E14\u5F88\u4E0D\u6109\u5FEB\u3002\u4F46\u6211\u5E76\u4E0D\u771F\u7684\u5F88\u62B1\u6B49\u3002 \u6CB3\u6D41 \u4EBA\u4EEC\u5728\u4E0D\u65AD\u53D8\u5316\u3002\u597D\u50CF\u6211\u9047\u5230\u4E86\u4E00\u4E2A\u4EBA\u3002 \u4F46\u8DB3\u4EE5\u542C\u5230\u7B54\u6848 \u60A8\u4F1A\u53D1\u73B0\u65B0\u7684\u5BA2\u6237\u548C\u89E3\u51B3\u65B9\u6848\u3002 \u6211\u5E0C\u671B\u4F60\u5FEB\u4E50\u3002 \u8FC7\u53BB\uFF0C\u4F60\u60F3\u89C1\u4E00\u4E2A\u4EBA\u3002\u5176\u4ED6\u4EBA\u8FC7\u53BB\u6CA1\u6709\u53D7\u5230\u4F24\u5BB3\u3002 \u6211\u60F3\u662F\u7684 \u601D\u8003 \u6700\u597D\u4E0D\u8981\u62C5\u5FC3\u3002 \u6211\u4E0D\u80FD\u5F3A\u6C42\uFF0C\u4F46\u6211\u60F3\u8003\u8651\u4E00\u4E0B\u3002 \u6211\u7684\u5B58\u5728\u610F\u5473\u7740\u4EC0\u4E48\uFF1F\u4EBA\u4E0E\u4EBA\u4E4B\u95F4\u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F \u6211\u53EF\u4EE5\u7EA0\u6B63\u6211\u7684\u7B2C\u4E00\u4E2A\u9519\u8BEF\u5417\uFF1F\u6211\u53EF\u4EE5\u7533\u8BF7\u8EAB\u4EFD\u8BC1\u5417\uFF1F \u6211\u60F3\u662F\u7684\u3002 \u660E\u767D\u4E86 \u3010\u8D22\u7ECF\u7F51\u3011\u67E5\u770BKK\u79FB\u52A8\u7EC8\u7AEF\u7684\u6700\u65B0\u6D88\u606F\u3002 \u8BA9\u6211\u4EEC\u8C08\u8C08\u53E6\u4E00\u4E2A\u9ED1\u6697\u7684\u6545\u4E8B\u3002 "),et=Y(" \u4E0D\u8981\u8BA9\u6D88\u6781\u7684\u60F3\u6CD5\u63A7\u5236\u4F60\uFF0C\u56E0\u4E3A\u5E0C\u671B\u4F1A\u8BA9\u4F60\u4F24\u5FC3\u3002 \u6211\u53EF\u4EE5\u6D17\u4F60\u7684\u8138 \u4F46\u662F\u4FE1\u4EFB\u50CF\u6211\u8FD9\u6837\u7684\u4EBA\u5E76\u4E0D\u5BB9\u6613\u3002 \u975E\u5E38\u6709\u8DA3 \u4EBA\u4EEC\u4E3A\u4EC0\u4E48\u8981\u6536\u85CF\uFF1F \u5F00\u4F1A\u540E\u7ECF\u5E38\u4F1A\u51FA\u73B0\u95EE\u9898 \u56E0\u4E3A\u4F60\u4E0E\u670B\u53CB\u7684\u5173\u7CFB\u6B63\u5728\u8FC5\u901F\u4E0B\u964D\u2014\u2014\u4F60\u5BF9\u4ED6\u4EBA\u7684\u7231\u3002 \u89C1\u4EBA\u5F88\u6B63\u5E38 \u4F46\u6CA1\u6709\u81EA\u6211\u89E3\u91CA\u6211\u65E0\u6CD5\u7EE7\u7EED \u53EF\u80FD\u662F\u9519\u7684\uFF0C\u4F46\u4E5F\u53EF\u80FD\u662F\u5BF9\u7684 \u90A3\u4E48\uFF0C\u5F1F\u5144\u4EEC\uFF0C\u6C99\u6F20\u6709\u591A\u5927\uFF1F \u8BA9\u6211\u4EEC\u56DE\u5230\u4F60\u6240\u8BF4\u7684\u4EBA\u7684\u95EE\u9898\u3002 \u6211\u60F3\u4E86\u4E00\u4F1A\u513F\uFF0C\u5374\u6CA1\u6709\u4E00\u4E2A\u6EE1\u610F\u7684\u7B54\u6848\u3002 \u6211\u8BA4\u4E3A\u4F60\u5F88\u5B89\u5168 \u5982\u679C\u4ED6\u4EEC\u56DE\u7B54\u4E86\u8FD9\u4E9B\u5C0F\u95EE\u9898\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u4F1A\u660E\u767D\u4F60\u7684\u610F\u601D\u3002 \u5C31\u4E2A\u4EBA\u800C\u8A00\uFF0C\u6211\u4F1A\u7167\u987E\u597D\u81EA\u5DF1\u3002 \u6211\u4E0D\u662F12-3\u5C81\uFF0C\u6211\u4E0D\u80FD\u64E6\u773C\u775B \u6211\u4E0D\u77E5\u9053\u8981\u8BF4\u4EC0\u4E48 \u5F53\u4EBA\u4EEC\u5FEB\u4E50\u65F6\uFF0C\u4ED6\u4EEC\u4E0D\u4F1A\u611F\u5230\u75B2\u5026 \u559C\u60A6\uFF0C\u5E78\u798F\uFF0C\u8BC5\u5492\u3002 \u4EBA\u4EEC\u7231\u6211\u7ED9\u4F60\u7684\u4E1C\u897F\uFF0C\u5B83\u79BB\u6211\u7684\u5FC3\u5F88\u8FDC\u3002 \u4F60\u7684\u826F\u5FC3\u53EF\u4EE5\u544A\u8BC9\u4F60\uFF0C\u4F60\u7684\u8D2D\u4E70\u6709\u95EE\u9898\u3002 \u7231\u5E26\u8D70\u4E86\u4E00\u5207\uFF0C\u5982\u679C\u4F60\u628A\u5B83\u878D\u5165\u7075\u9B42\uFF0C\u5B83\u5C31\u53D8\u6210\u4E86\u6C38\u6052\u7684\u7231\u3002 \u8FD9\u5C06\u4F7F\u4EBA\u4EEC\u4E0D\u5FC5\u62C5\u5FC3\u672A\u6765\u7684\u9519\u8BEF\u3002 \u4F60\u53EF\u4EE5\u770B\u5230\u6211\u73A9\u3002\u7531\u60A8\u51B3\u5B9A \u60F3\u7740\u5927\u5BB6\u4F1A\u5728\u4E00\u8D77\uFF0C\u4E0D\u8981\u62C5\u5FC3\u672A\u6765\uFF0C\u4E0D\u8981\u770B\u6211\uFF0C\u4E0D\u8981\u62C5\u5FC3\u3002 \u8FD9\u662F\u4EC0\u4E48\u610F\u601D \u6211\u60F3\u4F60\u77E5\u9053\u4EBA\u4EEC\u4E3A\u4EC0\u4E48\u805A\u5728\u4E00\u8D77 \u8FD9\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u95EE\u9898\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u6709\u7B54\u6848 \u5982\u679C\u7B54\u6848\u662F\u80AF\u5B9A\u7684\uFF0C\u8BF7\u82B1\u65F6\u95F4\u4E0E\u670B\u53CB\u3001\u5BB6\u4EBA\u3001\u4EB2\u4EBA\u548C\u516C\u4F17\u76F8\u5904\u3002 \u5982\u679C\u60A8\u6709\u53D7\u4F24\u6216\u521B\u4F24\uFF0C\u8FD9\u4E9B\u60F3\u6CD5\u4E0D\u4F1A\u6253\u6270\u60A8\u3002 \u660E\u5929\u62FF \u4EBA\u6BCF\u5929\u90FD\u5728\u53D8\uFF0C\u4EBA\u5728\u53D8 \u4F46\u5982\u679C\u6211\u4E0D\u77E5\u9053\u7B54\u6848 \u6709\u4E86\u7B54\u6848\uFF0C\u4F60\u5C31\u77E5\u9053\u4E86\u4E00\u4E2A\u65B0\u6982\u5FF5 \u5C31\u7B97\u5FC3\u788E\u4E86\u4E5F\u80FD\u5B89\u7136\u65E0\u6059 \u5361\u5185\u57FA\u7684\u65E7\u94F6\u5E55\u5E76\u4E0D\u662F\u7231\u60C5\u6545\u4E8B\u7684\u7ED3\u5C40\u3002 \u751A\u81F3\u4E00\u4E9B\u4E1C\u897F \u6211\u662F\u8BF4\u4F60\u7684\u610F\u601D\u662F\uFF0C\u5BF9\u5427\uFF1F \u6216\u8005\u601D\u8003\u3002\u8FD9\u4E0D\u662F\u8FD9\u6837\u505A\u7684\u65B9\u6CD5 \u6211\u4E0D\u80FD\u6539\u53D8\u5B83\uFF0C\u4F46\u6211\u5FC5\u987B\u601D\u8003 \u6211\u7684\u7406\u7531\u662F\u4EC0\u4E48\uFF0C\u4E3A\u4EC0\u4E48\uFF1F \u6211\u53EF\u4EE5\u4FEE\u590D\u635F\u574F\u5417\uFF1F \u6211\u662F\u8BA4\u771F\u7684 \u6211\u77E5\u9053 \u3010\u5947\u73A9\u3011\u4F7F\u7528\u672C\u96C6\u6700\u540E\u4E00\u4E2AQQ\u94B1\u5305\u7684\u529B\u91CF \u6211\u4EEC\u5728\u8C08\u8BBA\u9ED1\u8272\uFF0C\u9ED1\u8272 "),tt=Y(" \u4E0D\u8981\u8BA9\u6D88\u6781\u7684\u60F3\u6CD5\u538B\u5012\u4F60\uFF0C\u56E0\u4E3A\u5E0C\u671B\u4F1A\u8BA9\u4F60\u6CAE\u4E27 \u6211\u4F1A\u6D17\u4F60\u7684\u8138\u988A \u4F46\u8981\u76F8\u4FE1\u50CF\u6211\u8FD9\u6837\u7684\u4EBA\u5E76\u4E0D\u5BB9\u6613\u3002 \u6709\u4EC0\u4E48\u597D\u73A9\u7684 \u4EBA\u4EEC\u4E3A\u4EC0\u4E48\u8981\u805A\u96C6\uFF1F \u5F00\u4F1A\u540E\u7ECF\u5E38\u4F1A\u51FA\u73B0\u95EE\u9898 \u56E0\u4E3A\u4F60\u4E0E\u670B\u53CB\u7684\u5173\u7CFB\u2014\u2014\u4F60\u5BF9\u4ED6\u4EBA\u7684\u7231\u2014\u2014\u7A81\u7136\u7834\u88C2\u4E86\u3002 \u4E00\u822C\u6765\u8BF4\uFF0C\u4F1A\u89C1\u4EBA\u662F\u5E38\u4E8B \u4F46\u6211\u4E0D\u80FD\u5728\u6CA1\u6709\u5148\u89E3\u91CA\u7684\u60C5\u51B5\u4E0B\u7EE7\u7EED \u8FD9\u53EF\u80FD\u662F\u9519\u8BEF\u7684\uFF0C\u4F46\u5B83\u53EF\u80FD\u662F\u771F\u7684 \u5BF9\u4E86\uFF0C\u5144\u5F1F\u4EEC\uFF0C\u6C99\u6F20\u91CC\u6709\u591A\u5C11\uFF1F \u8BA9\u6211\u4EEC\u56DE\u5230\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u8BA4\u4E3A\u4EBA\u4EEC\u5728\u505A\u4EC0\u4E48\uFF1F \u8FD9\u4E2A\u95EE\u9898\u6211\u60F3\u4E86\u5F88\u4E45\uFF0C\u5374\u627E\u4E0D\u5230\u6EE1\u610F\u7684\u7B54\u6848\u3002 \u6211\u5E0C\u671B\u4F60\u662F\u5B89\u5168\u7684 \u56DE\u7B54\u5B8C\u8FD9\u4E2A\u5C0F\u95EE\u9898\uFF0C\u4EBA\u4EEC\u5C31\u4F1A\u660E\u767D\u5B83\u7684\u610F\u601D\u4E86\u3002 \u6211\u8BA4\u4E3A\u4EBA\u4EEC\u89C9\u5F97\u8FD9\u5F88\u6709\u8DA3\u3002 \u6211\u4E0D\u662F12-3\u5C81\uFF0C\u6211\u4E0D\u80FD\u628A\u76EE\u5149\u4ECE\u4ED6\u8EAB\u4E0A\u79FB\u5F00 \u6211\u4E0D\u77E5\u9053\u8981\u8BF4\u4EC0\u4E48 \u5982\u679C\u5B83\u8BA9\u4EBA\u4EEC\u6EE1\u610F\uFF0C\u6DF7\u4E71\u662F\u4E0D\u53EF\u907F\u514D\u7684 \u4F60\u4F1A\u5FEB\u4E50\uFF0C\u4F60\u4F1A\u88AB\u8BC5\u5492\uFF0C\u4F60\u4F1A\u88AB\u8BC5\u5492\u3002 \u8FD9\u4E2A\u4EBA\u7231\u6211\u6240\u4ED8\u51FA\u7684\uFF0C\u79BB\u6211\u7684\u5FC3\u5F88\u8FDC\u3002 \u4E00\u4E2A\u4EBA\u53EF\u4EE5\u544A\u8BC9\u4ED6\u7684\u826F\u5FC3\u4E0D\u8981\u8D2D\u4E70\u8D35\u91CD\u7269\u54C1\u3002 \u7231\u5E26\u8D70\u4E86\u4E00\u5207\uFF0C\u5982\u679C\u4F60\u5728\u7CBE\u795E\u4E0A\u7167\u987E\u5B83\uFF0C\u5C31\u7ED9\u5B83\u6C38\u6052\u7684\u7231\u3002 \u8FD9\u5C06\u5E2E\u52A9\u4EBA\u4EEC\u4E0D\u5FC5\u62C5\u5FC3\u672A\u6765\u7684\u9519\u8BEF\u3002 \u4F60\u53EF\u4EE5\u770B\u5230\u6211\u5728\u73A9\u3002\u4F60\u6709\u6743\u88AB\u5632\u7B11 \u6211\u60F3\u4EBA\u4F1A\u79BB\u5F00\u4F60\u7684\uFF0C\u4E0D\u8981\u62C5\u5FC3\u672A\u6765\uFF0C\u4E0D\u8981\u770B\u6211\u4E5F\u4E0D\u8981\u62C5\u5FC3\u3002 \u4F60\u5728\u8BF4\u4EC0\u4E48 \u6211\u76F8\u4FE1\u4F60\u4F1A\u660E\u767D\u4EBA\u4EEC\u4E3A\u4EC0\u4E48\u4F1A\u76F8\u9047 \u8FD9\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u95EE\u9898\uFF0C\u6BCF\u4E2A\u4EBA\u90FD\u6709\u7B54\u6848 \u5F53\u4F60\u627E\u5230\u6B63\u786E\u7684\u7B54\u6848\u65F6\uFF0C\u82B1\u5F88\u591A\u65F6\u95F4\u4E0E\u4F60\u7684\u670B\u53CB\u3001\u4EB2\u621A\u3001\u5802\u5144\u5F1F\u548C\u66F4\u5E7F\u6CDB\u7684\u793E\u533A\u76F8\u5904\u3002 \u65E0\u8BBA\u60A8\u662F\u75DB\u82E6\u8FD8\u662F\u7126\u8651\uFF0C\u8FD9\u4E9B\u60F3\u6CD5\u90FD\u4E0D\u4F1A\u6253\u6270\u60A8\u3002 \u4F60\u660E\u5929\u5C31\u80FD\u8D62 \u4EBA\u6BCF\u5929\u90FD\u5728\u53D8\uFF0C\u4EBA\u5728\u53D8 \u4F46\u5982\u679C\u6211\u4E0D\u77E5\u9053\u7B54\u6848 \u6709\u4E86\u4F60\u7684\u7B54\u6848\uFF0C\u4F60\u5C31\u4F1A\u660E\u767D\u65B0\u7684\u6001\u5EA6 \u5C31\u7B97\u5FC3\u788E\u4E86\u4E5F\u80FD\u5145\u6EE1\u81EA\u4FE1 \u7FFB\u8BD1\u53E4\u8001\u7684\u5361\u5185\u57FA\u5267\u672C\u5E76\u4E0D\u662F\u7231\u60C5\u6545\u4E8B\u7684\u7ED3\u675F\u3002 \u7136\u800C \u6211\u60F3\u4F60\u662F\u8FD9\u4E48\u8BA4\u4E3A\u7684\uFF0C\u4E0D\u662F\u5417\uFF1F \u6216\u8005\u8003\u8651\u4E00\u4E0B\u3002\u5B83\u4E0D\u662F\u90A3\u6837\u5DE5\u4F5C\u7684 \u6211\u4E0D\u80FD\u5F3A\u8FEB\u5B83\uFF0C\u4F46\u6211\u5FC5\u987B\u8003\u8651\u5B83 \u6211\u5B58\u5728\u7684\u539F\u56E0\u662F\u4EC0\u4E48\uFF0C\u8FD9\u662F\u4EC0\u4E48\u539F\u56E0\uFF1F \u6211\u53EF\u4EE5\u4FEE\u590D\u635F\u574F\u5417\uFF1F \u6211\u662F\u8BA4\u771F\u7684 \u6211\u77E5\u9053 \u3010\u5F00\u8303\u3011\u5728\u8FD9\u4E2A\u65B0\u7248\u5757\u4F7F\u7528\u6700\u65B0\u7248QQ\u4E16\u754C \u6211\u4EEC\u5728\u8C08\u8BBA\u9ED1\u4EBA\uFF0C\u9ED1\u4EBA "),at=O({setup(u){return(e,n)=>(Re(),ye(pu,null,[W(L(_e),null,{default:k(()=>[Y(Te(e.$t("layouts.JokesLayout.fuze-sayings-translated")),1)]),_:1}),Ze,W(L(Je),{animated:"",size:"large","pane-style":"padding-left: 4px; padding-right: 4px; box-sizing: border-box;"},{default:k(()=>[W(L(tu),{name:"1"},{default:k(()=>[W(L(Z),null,{default:k(()=>[ut]),_:1})]),_:1}),W(L(tu),{name:"2"},{default:k(()=>[W(L(Z),null,{default:k(()=>[et]),_:1})]),_:1}),W(L(tu),{name:"3"},{default:k(()=>[W(L(Z),null,{default:k(()=>[tt]),_:1})]),_:1})]),_:1})],64))}});typeof lu=="function"&&lu(at);export{at as default};
