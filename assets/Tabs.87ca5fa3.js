import{j as Ve,d as K,k as ie,ab as Ue,h as r,l as D,a4 as Ke,K as Xe,f as qe,aR as Ge,ac as Je,b6 as Qe,c as l,n as g,a as R,b as A,o as Ye,p as Ze,q as se,v as P,b4 as ee,aE as N,w as et,C as tt,D as at,t as j,c0 as nt,B as rt,H as ot,I as te,V as ae,c3 as it,c4 as st,O,M as lt,F as B,a0 as dt,c5 as ct,bQ as bt,a1 as ft}from"./index.b8789f58.js";import{A as ut}from"./Add.223ca642.js";import{t as M}from"./throttle.df0efcf6.js";const X=Ve("n-tabs"),le={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]};var yt=K({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:le,setup(e){const n=ie(X,null);return n||Ue("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:n.paneStyleRef,class:n.paneClassRef,mergedClsPrefix:n.mergedClsPrefixRef}},render(){return r("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}});const vt=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Qe(le,["displayDirective"]));var U=K({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:vt,setup(e){const{mergedClsPrefixRef:n,valueRef:c,typeRef:f,closableRef:y,tabStyleRef:x,tabChangeIdRef:b,onBeforeLeaveRef:p,triggerRef:w,handleAdd:m,activateTab:u,handleClose:v}=ie(X);return{trigger:w,mergedClosable:D(()=>{if(e.internalAddable)return!1;const{closable:d}=e;return d===void 0?y.value:d}),style:x,clsPrefix:n,value:c,type:f,handleClose(d){d.stopPropagation(),!e.disabled&&v(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}const{name:d}=e,h=++b.id;if(d!==c.value){const{value:C}=p;C?Promise.resolve(C(e.name,c.value)).then(S=>{S&&b.id===h&&u(d)}):u(d)}}}},render(){const{internalAddable:e,clsPrefix:n,name:c,disabled:f,label:y,tab:x,value:b,mergedClosable:p,style:w,trigger:m,$slots:{default:u}}=this,v=y!=null?y:x;return r("div",{class:`${n}-tabs-tab-wrapper`},this.internalLeftPadded?r("div",{class:`${n}-tabs-tab-pad`}):null,r("div",Object.assign({key:c,"data-name":c,"data-disabled":f?!0:void 0},Ke({class:[`${n}-tabs-tab`,b===c&&`${n}-tabs-tab--active`,f&&`${n}-tabs-tab--disabled`,p&&`${n}-tabs-tab--closable`,e&&`${n}-tabs-tab--addable`],onClick:m==="click"?this.activateTab:void 0,onMouseenter:m==="hover"?this.activateTab:void 0,style:e?void 0:w},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),r("span",{class:`${n}-tabs-tab__label`},e?r(Xe,null,r("div",{class:`${n}-tabs-tab__height-placeholder`},"\xA0"),r(qe,{clsPrefix:n},{default:()=>r(ut,null)})):u?u():typeof v=="object"?v:Ge(v!=null?v:c)),p&&this.type==="card"?r(Je,{clsPrefix:n,class:`${n}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),pt=l("tabs",`
 box-sizing: border-box;
 width: 100%;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[l("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[g("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),g("flex",[l("tabs-nav",{width:"100%"},[l("tabs-wrapper",{width:"100%"},[l("tabs-tab",{marginRight:0})])])]),l("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[A("prefix, suffix",`
 display: flex;
 align-items: center;
 `),A("prefix","padding-right: 16px;"),A("suffix","padding-left: 16px;")]),l("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[g("shadow-before",[R("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),g("shadow-after",[R("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),R("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 20px;
 z-index: 1;
 `),R("&::before",`
 left: 0;
 `),R("&::after",`
 right: 0;
 `)]),l("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 `),l("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),l("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),l("tabs-tab",`
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
 `,[g("disabled",{cursor:"not-allowed"}),A("close",`
 margin-left: 8px;
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 `),A("label",`
 display: flex;
 align-items: center;
 `)]),l("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[g("transition-disabled",`
 transition: none;
 `),g("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),l("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),l("tab-pane",`
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
 `,[R("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),R("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),R("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),R("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),R("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),l("tabs-tab-pad",`
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),g("line-type, bar-type",[l("tabs-tab",`
 font-weight: var(--n-tab-font-weight-active);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[R("&:hover",{color:"var(--n-tab-text-color-hover)"}),g("active",{color:"var(--n-tab-text-color-active)"}),g("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),l("tabs-nav",[g("line-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-bar",`
 border-radius: 0;
 bottom: -1px;
 `)]),g("card-type",[A("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),l("tabs-tab",`
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
 `,[g("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[A("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),Ye("disabled",[R("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),g("closable","padding-right: 6px;"),g("active",`
 border-bottom: 1px solid #0000;
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),g("disabled","color: var(--n-tab-text-color-disabled);")]),l("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")])])]);const ht=Object.assign(Object.assign({},se.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]});var wt=K({name:"Tabs",props:ht,setup(e,{slots:n}){var c,f,y,x;const{mergedClsPrefixRef:b,inlineThemeDisabled:p}=Ze(e),w=se("Tabs","-tabs",pt,st,e,b),m=P(null),u=P(null),v=P(null),d=P(null),h=P(null),C=P(!0),S=P(!0),i=ee(e,["labelSize","size"]),T=ee(e,["activeName","value"]),z=P((f=(c=T.value)!==null&&c!==void 0?c:e.defaultValue)!==null&&f!==void 0?f:n.default?(x=(y=N(n.default())[0])===null||y===void 0?void 0:y.props)===null||x===void 0?void 0:x.name:null),_=et(T,z),q={id:0},de=D(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});tt(_,()=>{q.id=0,k()});function G(){var t;const{value:a}=_;return a===null?null:(t=m.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function ce(t){if(e.type==="card")return;const{value:a}=u;if(!!a&&t){const o=`${b.value}-tabs-bar--disabled`,{barWidth:s}=e;if(t.dataset.disabled==="true"?a.classList.add(o):a.classList.remove(o),s&&t.offsetWidth>=s){const $=Math.floor((t.offsetWidth-s)/2)+t.offsetLeft;a.style.left=`${$}px`,a.style.maxWidth=`${s}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px"}}function k(){if(e.type==="card")return;const t=G();t&&ce(t)}const E=P(null);let I=0;function be(){const t=E.value;if(t){I=t.getBoundingClientRect().height;const a=`${I}px`;t.style.height=a,t.style.maxHeight=a}}function fe(t){const a=E.value;if(a){const o=t.getBoundingClientRect().height;a.style.maxHeight=`${o}px`,a.style.height=`${Math.max(I,o)}px`}}function ue(){const t=E.value;t&&(t.style.maxHeight="",t.style.height="")}const J={value:[]},Q=P("next");function ve(t){const a=_.value;let o="next";for(const s of J.value){if(s===a)break;if(s===t){o="prev";break}}Q.value=o,pe(t)}function pe(t){const{onActiveNameChange:a,onUpdateValue:o,"onUpdate:value":s}=e;a&&O(a,t),o&&O(o,t),s&&O(s,t),z.value=t}function he(t){const{onClose:a}=e;a&&O(a,t)}let ge=!0,Y=0;const xe=M(function(a){var o;if(a.contentRect.width===0&&a.contentRect.height===0||Y===a.contentRect.width)return;Y=a.contentRect.width;const{type:s}=e;if((s==="line"||s==="bar")&&ge){const{value:$}=u;if(!$)return;const L=`${b.value}-tabs-bar--transition-disabled`;$.classList.add(L),k(),$.classList.remove(L)}s!=="segment"&&H((o=h.value)===null||o===void 0?void 0:o.$el)},64),F=P(!1);function me(t){var a;const{target:o,contentRect:{width:s}}=t,$=o.parentElement.offsetWidth;if(!F.value)$<s&&(F.value=!0);else{const{value:L}=d;if(!L)return;$-s>L.$el.offsetWidth&&(F.value=!1)}H((a=h.value)===null||a===void 0?void 0:a.$el)}const ye=M(me,64);function we(){const{onAdd:t}=e;t&&t(),lt(()=>{const a=G(),{value:o}=h;!a||!o||o.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function H(t){if(!t)return;const{scrollLeft:a,scrollWidth:o,offsetWidth:s}=t;C.value=a<=0,S.value=a+s>=o}const Ce=M(t=>{H(t.target)},64);at(X,{triggerRef:j(e,"trigger"),tabStyleRef:j(e,"tabStyle"),paneClassRef:j(e,"paneClass"),paneStyleRef:j(e,"paneStyle"),mergedClsPrefixRef:b,typeRef:j(e,"type"),closableRef:j(e,"closable"),valueRef:_,tabChangeIdRef:q,onBeforeLeaveRef:j(e,"onBeforeLeave"),activateTab:ve,handleClose:he,handleAdd:we}),nt(()=>{k()}),rt(()=>{const{value:t}=v;if(!t)return;const{value:a}=b,o=`${a}-tabs-nav-scroll-wrapper--shadow-before`,s=`${a}-tabs-nav-scroll-wrapper--shadow-after`;C.value?t.classList.remove(o):t.classList.add(o),S.value?t.classList.remove(s):t.classList.add(s)});const Re={syncBarPosition:()=>{k()}},Z=D(()=>{const{value:t}=i,{type:a}=e,o={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],s=`${t}${o}`,{self:{barColor:$,closeColor:L,closeColorHover:ze,closeColorPressed:Pe,tabColor:Se,tabBorderColor:$e,paneTextColor:Te,tabFontWeight:_e,tabBorderRadius:Ae,tabFontWeightActive:Be,colorSegment:Le,fontWeightStrong:je,tabColorSegment:We,[B("panePadding",t)]:ke,[B("tabPadding",s)]:Ee,[B("tabGap",s)]:Fe,[B("tabTextColor",a)]:Oe,[B("tabTextColorActive",a)]:De,[B("tabTextColorHover",a)]:Ie,[B("tabTextColorDisabled",a)]:He,[B("tabFontSize",t)]:Ne},common:{cubicBezierEaseInOut:Me}}=w.value;return{"--n-bezier":Me,"--n-color-segment":Le,"--n-bar-color":$,"--n-tab-font-size":Ne,"--n-tab-text-color":Oe,"--n-tab-text-color-active":De,"--n-tab-text-color-disabled":He,"--n-tab-text-color-hover":Ie,"--n-pane-text-color":Te,"--n-tab-border-color":$e,"--n-tab-border-radius":Ae,"--n-close-color":L,"--n-close-color-hover":ze,"--n-close-color-pressed":Pe,"--n-tab-color":Se,"--n-tab-font-weight":_e,"--n-tab-font-weight-active":Be,"--n-tab-padding":Ee,"--n-tab-gap":Fe,"--n-pane-padding":ke,"--n-font-weight-strong":je,"--n-tab-color-segment":We}}),W=p?ot("tabs",D(()=>`${i.value[0]}${e.type[0]}`),Z,e):void 0;return Object.assign({mergedClsPrefix:b,mergedValue:_,renderedNames:new Set,tabsPaneWrapperRef:E,tabsElRef:m,barElRef:u,addTabInstRef:d,xScrollInstRef:h,scrollWrapperElRef:v,addTabFixed:F,tabWrapperStyle:de,handleNavResize:xe,mergedSize:i,handleScroll:Ce,handleTabsResize:ye,cssVars:p?void 0:Z,themeClass:W==null?void 0:W.themeClass,animationDirection:Q,renderNameListRef:J,onAnimationBeforeLeave:be,onAnimationEnter:fe,onAnimationAfterEnter:ue,onRender:W==null?void 0:W.onRender},Re)},render(){const{mergedClsPrefix:e,type:n,addTabFixed:c,addable:f,mergedSize:y,renderNameListRef:x,onRender:b,$slots:{default:p,prefix:w,suffix:m}}=this;b==null||b();const u=p?N(p()).filter(i=>i.type.__TAB_PANE__===!0):[],v=p?N(p()).filter(i=>i.type.__TAB__===!0):[],d=!v.length,h=n==="card",C=n==="segment",S=!h&&!C&&this.justifyContent;return x.value=[],r("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${n}-type`,`${e}-tabs--${y}-size`,S&&`${e}-tabs--flex`],style:this.cssVars},r("div",{class:[`${e}-tabs-nav--${n}-type`,`${e}-tabs-nav`]},te(w,i=>i&&r("div",{class:`${e}-tabs-nav__prefix`},i)),C?r("div",{class:`${e}-tabs-rail`},d?u.map((i,T)=>(x.value.push(i.props.name),r(U,Object.assign({},i.props,{internalCreatedByPane:!0,internalLeftPadded:T!==0}),i.children?{default:i.children.tab}:void 0))):v.map((i,T)=>(x.value.push(i.props.name),T===0?i:oe(i)))):r(ae,{onResize:this.handleNavResize},{default:()=>r("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},r(it,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:()=>{const i=r("div",{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},S?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),d?u.map((z,_)=>(x.value.push(z.props.name),V(r(U,Object.assign({},z.props,{internalCreatedByPane:!0,internalLeftPadded:_!==0&&!S}),z.children?{default:z.children.tab}:void 0)))):v.map((z,_)=>(x.value.push(z.props.name),V(_!==0&&!S?oe(z):z))),!c&&f&&h?re(f,(d?u.length:v.length)!==0):null,S?null:r("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));let T=i;return h&&f&&(T=r(ae,{onResize:this.handleTabsResize},{default:()=>i})),r("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T,h?r("div",{class:`${e}-tabs-pad`}):null,h?null:r("div",{ref:"barElRef",class:`${e}-tabs-bar`}))}}))}),c&&f&&h?re(f,!0):null,te(m,i=>i&&r("div",{class:`${e}-tabs-nav__suffix`},i))),d&&(this.animated?r("div",{ref:"tabsPaneWrapperRef",class:`${e}-tabs-pane-wrapper`},ne(u,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):ne(u,this.mergedValue,this.renderedNames)))}});function ne(e,n,c,f,y,x,b){const p=[];return e.forEach(w=>{const{name:m,displayDirective:u,"display-directive":v}=w.props,d=C=>u===C||v===C,h=n===m;if(w.key!==void 0&&(w.key=m),h||d("show")||d("show:lazy")&&c.has(m)){c.has(m)||c.add(m);const C=!d("if");p.push(C?dt(w,[[ft,h]]):w)}}),b?r(ct,{name:`${b}-transition`,onBeforeLeave:f,onEnter:y,onAfterEnter:x},{default:()=>p}):p}function re(e,n){return r(U,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof e=="object"&&e.disabled})}function oe(e){const n=bt(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function V(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{wt as N,yt as a};
