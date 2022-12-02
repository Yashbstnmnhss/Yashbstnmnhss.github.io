import{f as N,y as S,al as at,j as o,U as nt,k as pe,by as rt,m as M,Y as ot,F as st,b8 as it,Z as lt,br as dt,bz as ct,c as i,d as x,b as w,e as _,a as bt,u as ft,a4 as he,af as Y,K,p as ut,a3 as E,aT as vt,a7 as L,a8 as pt,aZ as le,bA as de,bB as ht,a6 as H,am as G,aj as gt,bC as mt,a$ as xt,aV as yt}from"./index.d6438343.js";import{A as wt}from"./Add.33264e58.js";import{c as Rt,a as ce,b as be,u as Ct}from"./cssr.1b746292.js";import{t as q}from"./throttle.3153ebda.js";import{o as zt}from"./on-fonts-ready.d12e5a48.js";const St=ce(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[ce("&::-webkit-scrollbar",{width:0,height:0})]),Pt=N({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=S(null);function n(d){!(d.currentTarget.offsetWidth<d.currentTarget.scrollWidth)||d.deltaY===0||(d.currentTarget.scrollLeft+=d.deltaY+d.deltaX,d.preventDefault())}const c=at();return St.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:Rt,ssr:c}),Object.assign({selfRef:e,handleWheel:n},{scrollTo(...d){var b;(b=e.value)===null||b===void 0||b.scrollTo(...d)}})},render(){return o("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),Q=nt("n-tabs"),ge={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},jt=N({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:ge,setup(e){const n=pe(Q,null);return n||rt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return o("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),Tt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},ct(ge,["displayDirective"])),J=N({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:Tt,setup(e){const{mergedClsPrefixRef:n,valueRef:c,typeRef:u,closableRef:d,tabStyleRef:b,tabChangeIdRef:v,onBeforeLeaveRef:m,triggerRef:R,handleAdd:y,activateTab:p,handleClose:h}=pe(Q);return{trigger:R,mergedClosable:M(()=>{if(e.internalAddable)return!1;const{closable:f}=e;return f===void 0?d.value:f}),style:b,clsPrefix:n,value:c,type:u,handleClose(f){f.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){y();return}const{name:f}=e,g=++v.id;if(f!==c.value){const{value:C}=m;C?Promise.resolve(C(e.name,c.value)).then(z=>{z&&v.id===g&&p(f)}):p(f)}}}},render(){const{internalAddable:e,clsPrefix:n,name:c,disabled:u,label:d,tab:b,value:v,mergedClosable:m,style:R,trigger:y,$slots:{default:p}}=this,h=d!=null?d:b;return o("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?o("div",{class:`${n}-tabs-tab-pad`}):null,o("div",Object.assign({key:c,"data-name":c,"data-disabled":u?!0:void 0},ot({class:[`${n}-tabs-tab`,v===c&&`${n}-tabs-tab--active`,u&&`${n}-tabs-tab--disabled`,m&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:y==="click"?this.activateTab:void 0,onMouseenter:y==="hover"?this.activateTab:void 0,style:e?void 0:R},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),o("span",{class:`${n}-tabs-tab__label`},e?o(st,null,o("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),o(it,{clsPrefix:n},{default:()=>o(wt,null)})):p?p():typeof h=="object"?h:lt(h!=null?h:c)),m&&this.type==="card"?o(dt,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:u}):null))}}),$t=i("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[x("segment-type",[i("tabs-rail",[w("&.transition-disabled","color: red;",[i("tabs-tab",`
 transition: none;
 `)])])]),i("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[i("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[i("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[x("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),x("flex",[i("tabs-nav",{width:"100%"},[i("tabs-wrapper",{width:"100%"},[i("tabs-tab",{marginRight:0})])])]),i("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[_("prefix, suffix",`
 display: flex;
 align-items: center;
 `),_("prefix","padding-right: 16px;"),_("suffix","padding-left: 16px;")]),i("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[x("shadow-before",[w("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),x("shadow-after",[w("&::after",`
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
 `)]),i("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),i("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),i("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),i("tabs-tab",`
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
 `,[x("disabled",{cursor:"not-allowed"}),_("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),_("label",`
 display: flex;
 align-items: center;
 `)]),i("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[w("&.transition-disabled",`
 transition: none;
 `),x("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),i("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),i("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 padding: var(--n-pane-padding);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[w("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),w("&.next-transition-leave-active, &.prev-transition-leave-active",`
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
 `)]),i("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),x("line-type, bar-type",[i("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[w("&:hover",{color:"var(--n-tab-text-color-hover)"}),x("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),x("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),i("tabs-nav",[x("line-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),x("card-type",[_("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),i("tabs-tab",`
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
 `,[x("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[_("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),bt("disabled",[w("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),x("closable","padding-right: 6px;"),x("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),x("disabled","color: var(--n-tab-text-color-disabled);")]),i("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]),At=Object.assign(Object.assign({},he.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),kt=N({name:"Tabs",props:At,setup(e,{slots:n}){var c,u,d,b;const{mergedClsPrefixRef:v,inlineThemeDisabled:m}=ft(e),R=he("Tabs","-tabs",$t,ht,e,v),y=S(null),p=S(null),h=S(null),f=S(null),g=S(null),C=S(!0),z=S(!0),l=be(e,["labelSize","size"]),$=be(e,["activeName","value"]),P=S((u=(c=$.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&u!==void 0?u:n.default?(b=(d=Y(n.default())[0])===null||d===void 0?void 0:d.props)===null||b===void 0?void 0:b.name:null),T=Ct($,P),ee={id:0},me=M(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});K(T,()=>{ee.id=0,F(),te()});function V(){var t;const{value:a}=T;return a===null?null:(t=y.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function xe(t){if(e.type==="card")return;const{value:a}=p;if(!!a&&t){const r=`${v.value}-tabs-bar--disabled`,{barWidth:s}=e;if(t.dataset.disabled==="true"?a.classList.add(r):a.classList.remove(r),typeof s=="number"&&t.offsetWidth>=s){const A=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${A}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}}function F(){if(e.type==="card")return;const t=V();t&&xe(t)}function te(t){var a;const r=(a=g.value)===null||a===void 0?void 0:a.$el;if(!r)return;const s=V();if(!s)return;const{scrollLeft:A,offsetWidth:B}=r,{offsetLeft:k,offsetWidth:D}=s;A>k?r.scrollTo({top:0,left:k,behavior:"smooth"}):k+D>A+B&&r.scrollTo({top:0,left:k+D-B,behavior:"smooth"})}const O=S(null);let U=0,W=null;function ye(t){const a=O.value;if(a){U=t.getBoundingClientRect().height;const r=`${U}px`,s=()=>{a.style.height=r,a.style.maxHeight=r};W?(s(),W(),W=null):W=s}}function we(t){const a=O.value;if(a){const r=t.getBoundingClientRect().height,s=()=>{document.body.offsetHeight,a.style.maxHeight=`${r}px`,a.style.height=`${Math.max(U,r)}px`};W?(W(),W=null,s()):W=s}}function Re(){const t=O.value;t&&(t.style.maxHeight="",t.style.height="")}const ae={value:[]},ne=S("next");function Ce(t){const a=T.value;let r="next";for(const s of ae.value){if(s===a)break;if(s===t){r="prev";break}}ne.value=r,ze(t)}function ze(t){const{onActiveNameChange:a,onUpdateValue:r,"onUpdate:value":s}=e;a&&H(a,t),r&&H(r,t),s&&H(s,t),P.value=t}function Se(t){const{onClose:a}=e;a&&H(a,t)}function re(){const{value:t}=p;if(!t)return;const a="transition-disabled";t.classList.add(a),F(),t.classList.remove(a)}let oe=0;function Pe(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||oe===t.contentRect.width)return;oe=t.contentRect.width;const{type:r}=e;(r==="line"||r==="bar")&&re(),r!=="segment"&&X((a=g.value)===null||a===void 0?void 0:a.$el)}const Te=q(Pe,64);K([()=>e.justifyContent,()=>e.size],()=>{G(()=>{const{type:t}=e;(t==="line"||t==="bar")&&re()})});const I=S(!1);function $e(t){var a;const{target:r,contentRect:{width:s}}=t,A=r.parentElement.offsetWidth;if(!I.value)A<s&&(I.value=!0);else{const{value:B}=f;if(!B)return;A-s>B.$el.offsetWidth&&(I.value=!1)}X((a=g.value)===null||a===void 0?void 0:a.$el)}const Ae=q($e,64);function We(){const{onAdd:t}=e;t&&t(),G(()=>{const a=V(),{value:r}=g;!a||!r||r.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function X(t){if(!t)return;const{scrollLeft:a,scrollWidth:r,offsetWidth:s}=t;C.value=a<=0,z.value=a+s>=r}const _e=q(t=>{X(t.target)},64);ut(Q,{triggerRef:E(e,"trigger"),tabStyleRef:E(e,"tabStyle"),paneClassRef:E(e,"paneClass"),paneStyleRef:E(e,"paneStyle"),mergedClsPrefixRef:v,typeRef:E(e,"type"),closableRef:E(e,"closable"),valueRef:T,tabChangeIdRef:ee,onBeforeLeaveRef:E(e,"onBeforeLeave"),activateTab:Ce,handleClose:Se,handleAdd:We}),zt(()=>{F(),te()}),vt(()=>{const{value:t}=h;if(!t)return;const{value:a}=v,r=`${a}-tabs-nav-scroll-wrapper--shadow-before`,s=`${a}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(r):t.classList.add(r),z.value?t.classList.remove(s):t.classList.add(s)});const se=S(null);K(T,()=>{if(e.type==="segment"){const t=se.value;t&&G(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Le={syncBarPosition:()=>{F()}},ie=M(()=>{const{value:t}=l,{type:a}=e,r={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${r}`,{self:{barColor:A,closeIconColor:B,closeIconColorHover:k,closeIconColorPressed:D,tabColor:Be,tabBorderColor:Ee,paneTextColor:je,tabFontWeight:ke,tabBorderRadius:Fe,tabFontWeightActive:Oe,colorSegment:Ie,fontWeightStrong:De,tabColorSegment:He,closeSize:Me,closeIconSize:Ne,closeColorHover:Ve,closeColorPressed:Ue,closeBorderRadius:Xe,[L("panePadding",t)]:Ye,[L("tabPadding",s)]:Ke,[L("tabGap",s)]:Ge,[L("tabTextColor",a)]:qe,[L("tabTextColorActive",a)]:Ze,[L("tabTextColorHover",a)]:Je,[L("tabTextColorDisabled",a)]:Qe,[L("tabFontSize",t)]:et},common:{cubicBezierEaseInOut:tt}}=R.value;return{"--n-bezier":tt,"--n-color-segment":Ie,"--n-bar-color":A,"--n-tab-font-size":et,"--n-tab-text-color":qe,"--n-tab-text-color-active":Ze,"--n-tab-text-color-disabled":Qe,"--n-tab-text-color-hover":Je,"--n-pane-text-color":je,"--n-tab-border-color":Ee,"--n-tab-border-radius":Fe,"--n-close-size":Me,"--n-close-icon-size":Ne,"--n-close-color-hover":Ve,"--n-close-color-pressed":Ue,"--n-close-border-radius":Xe,"--n-close-icon-color":B,"--n-close-icon-color-hover":k,"--n-close-icon-color-pressed":D,"--n-tab-color":Be,"--n-tab-font-weight":ke,"--n-tab-font-weight-active":Oe,"--n-tab-padding":Ke,"--n-tab-gap":Ge,"--n-pane-padding":Ye,"--n-font-weight-strong":De,"--n-tab-color-segment":He}}),j=m?pt("tabs",M(()=>`${l.value[0]}${e.type[0]}`),ie,e):void 0;return Object.assign({mergedClsPrefix:v,mergedValue:T,renderedNames:new Set,tabsRailElRef:se,tabsPaneWrapperRef:O,tabsElRef:y,barElRef:p,addTabInstRef:f,xScrollInstRef:g,scrollWrapperElRef:h,addTabFixed:I,tabWrapperStyle:me,handleNavResize:Te,mergedSize:l,handleScroll:_e,handleTabsResize:Ae,cssVars:m?void 0:ie,themeClass:j==null?void 0:j.themeClass,animationDirection:ne,renderNameListRef:ae,onAnimationBeforeLeave:ye,onAnimationEnter:we,onAnimationAfterEnter:Re,onRender:j==null?void 0:j.onRender},Le)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:c,addable:u,mergedSize:d,renderNameListRef:b,onRender:v,$slots:{default:m,prefix:R,suffix:y}}=this;v==null||v();const p=m?Y(m()).filter(l=>l.type.__TAB_PANE__===!0):[],h=m?Y(m()).filter(l=>l.type.__TAB__===!0):[],f=!h.length,g=n==="card",C=n==="segment",z=!g&&!C&&this.justifyContent;return b.value=[],o("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${d}-size`,z&&`${e}-tabs--flex`],style:this.cssVars},o("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},le(R,l=>l&&o("div",{class:`${e}-tabs-nav__prefix`},l)),C?o("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},f?p.map((l,$)=>(b.value.push(l.props.name),o(J,Object.assign({},l.props,{internalCreatedByPane:!0,internalLeftPadded:$!==0}),l.children?{default:l.children.tab}:void 0))):h.map((l,$)=>(b.value.push(l.props.name),$===0?l:ve(l)))):o(de,{onResize:this.handleNavResize},{default:()=>o("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},o(Pt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const l=o("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),f?p.map((P,T)=>(b.value.push(P.props.name),Z(o(J,Object.assign({},P.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0&&(!z||z==="center"||z==="start"||z==="end")}),P.children?{default:P.children.tab}:void 0)))):h.map((P,T)=>(b.value.push(P.props.name),Z(T!==0&&!z?ve(P):P))),!c&&u&&g?ue(u,(f?p.length:h.length)!==0):null,z?null:o("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let $=l;return g&&u&&($=o(de,{onResize:this.handleTabsResize},{default:()=>l})),o("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},$,g?o("div",{class:`${e}-tabs-pad`}):null,g?null:o("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&u&&g?ue(u,!0):null,le(y,l=>l&&o("div",{class:`${e}-tabs-nav__suffix`},l))),f&&(this.animated?o("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},fe(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):fe(p,this.mergedValue,this.renderedNames)))}});function fe(e,n,c,u,d,b,v){const m=[];return e.forEach(R=>{const{name:y,displayDirective:p,"display-directive":h}=R.props,f=C=>p===C||h===C,g=n===y;if(R.key!==void 0&&(R.key=y),g||f("show")||f("show:lazy")&&c.has(y)){c.has(y)||c.add(y);const C=!f("if");m.push(C?gt(R,[[yt,g]]):R)}}),v?o(mt,{name:`${v}-transition`,onBeforeLeave:u,onEnter:d,onAfterEnter:b},{default:()=>m}):m}function ue(e,n){return o(J,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function ve(e){const n=xt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function Z(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{kt as N,jt as a};
