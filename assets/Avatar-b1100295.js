import{i as ue,o as ve}from"./utils-8fb188d9.js";import{c as N,a as B,d as $,O as _,b as S,f as H,g as K,e as D,B as j,u as Q,bs as be,p as ge,G as fe,af as me,l as P,m as d,n as X,bt as V,r as W,h as k,b9 as ke,H as Ce,bu as pe,bv as xe,j as G,W as ze,V as ye,Q as Re,a3 as Be,o as $e,bw as Pe,bb as Se}from"./index-df691239.js";const Oe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},je=N("tag",`
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`,[B("strong",`
 font-weight: var(--n-font-weight-strong);
 `),$("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),$("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),$("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),$("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),B("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[$("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),$("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),B("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),B("icon, avatar",[B("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),B("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),B("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[_("disabled",[S("&:hover","background-color: var(--n-color-hover-checkable);",[_("checked","color: var(--n-text-color-hover-checkable);")]),S("&:active","background-color: var(--n-color-pressed-checkable);",[_("checked","color: var(--n-text-color-pressed-checkable);")])]),B("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[_("disabled",[S("&:hover","background-color: var(--n-color-checked-hover);"),S("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Fe=Object.assign(Object.assign(Object.assign({},H.props),Oe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),Y=K("n-tag");D({name:"Tag",props:Fe,setup(o){const h=j(null),{mergedBorderedRef:n,mergedClsPrefixRef:u,inlineThemeDisabled:b,mergedRtlRef:R}=Q(o),g=H("Tag","-tag",je,be,o,u);ge(Y,{roundRef:fe(o,"round")});function x(r){if(!o.disabled&&o.checkable){const{checked:a,onCheckedChange:y,onUpdateChecked:c,"onUpdate:checked":m}=o;c&&c(!a),m&&m(!a),y&&y(!a)}}function C(r){if(o.triggerClickOnClose||r.stopPropagation(),!o.disabled){const{onClose:a}=o;a&&Ce(a,r)}}const p={setTextContent(r){const{value:a}=h;a&&(a.textContent=r)}},z=me("Tag",R,u),s=P(()=>{const{type:r,size:a,color:{color:y,textColor:c}={}}=o,{common:{cubicBezierEaseInOut:m},self:{padding:E,closeMargin:e,closeMarginRtl:t,borderRadius:i,opacityDisabled:l,textColorCheckable:f,textColorHoverCheckable:F,textColorPressedCheckable:O,textColorChecked:T,colorCheckable:I,colorHoverCheckable:L,colorPressedCheckable:M,colorChecked:w,colorCheckedHover:q,colorCheckedPressed:J,closeBorderRadius:Z,fontWeightStrong:ee,[d("colorBordered",r)]:oe,[d("closeSize",a)]:re,[d("closeIconSize",a)]:ne,[d("fontSize",a)]:te,[d("height",a)]:U,[d("color",r)]:ae,[d("textColor",r)]:le,[d("border",r)]:se,[d("closeIconColor",r)]:A,[d("closeIconColorHover",r)]:ce,[d("closeIconColorPressed",r)]:ie,[d("closeColorHover",r)]:de,[d("closeColorPressed",r)]:he}}=g.value;return{"--n-font-weight-strong":ee,"--n-avatar-size-override":`calc(${U} - 8px)`,"--n-bezier":m,"--n-border-radius":i,"--n-border":se,"--n-close-icon-size":ne,"--n-close-color-pressed":he,"--n-close-color-hover":de,"--n-close-border-radius":Z,"--n-close-icon-color":A,"--n-close-icon-color-hover":ce,"--n-close-icon-color-pressed":ie,"--n-close-icon-color-disabled":A,"--n-close-margin":e,"--n-close-margin-rtl":t,"--n-close-size":re,"--n-color":y||(n.value?oe:ae),"--n-color-checkable":I,"--n-color-checked":w,"--n-color-checked-hover":q,"--n-color-checked-pressed":J,"--n-color-hover-checkable":L,"--n-color-pressed-checkable":M,"--n-font-size":te,"--n-height":U,"--n-opacity-disabled":l,"--n-padding":E,"--n-text-color":c||le,"--n-text-color-checkable":f,"--n-text-color-checked":T,"--n-text-color-hover-checkable":F,"--n-text-color-pressed-checkable":O}}),v=b?X("tag",P(()=>{let r="";const{type:a,size:y,color:{color:c,textColor:m}={}}=o;return r+=a[0],r+=y[0],c&&(r+=`a${V(c)}`),m&&(r+=`b${V(m)}`),n.value&&(r+="c"),r}),s,o):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:z,mergedClsPrefix:u,contentRef:h,mergedBordered:n,handleClick:x,handleCloseClick:C,cssVars:b?void 0:s,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var o,h;const{mergedClsPrefix:n,rtlEnabled:u,closable:b,color:{borderColor:R}={},round:g,onRender:x,$slots:C}=this;x==null||x();const p=W(C.avatar,s=>s&&k("div",{class:`${n}-tag__avatar`},s)),z=W(C.icon,s=>s&&k("div",{class:`${n}-tag__icon`},s));return k("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:u,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:g,[`${n}-tag--avatar`]:p,[`${n}-tag--icon`]:z,[`${n}-tag--closable`]:b}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},z||p,k("span",{class:`${n}-tag__content`,ref:"contentRef"},(h=(o=this.$slots).default)===null||h===void 0?void 0:h.call(o)),!this.checkable&&b?k(ke,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:g,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?k("div",{class:`${n}-tag__border`,style:{borderColor:R}}):null)}});const Te=K("n-avatar-group"),we=N("avatar",`
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
`,[pe(S("&","--n-merged-color: var(--n-color-modal);")),xe(S("&","--n-merged-color: var(--n-color-popover);")),S("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),N("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),Ee=Object.assign(Object.assign({},H.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),Ie=D({name:"Avatar",props:Ee,setup(o){const{mergedClsPrefixRef:h,inlineThemeDisabled:n}=Q(o),u=j(!1);let b=null;const R=j(null),g=j(null),x=()=>{const{value:e}=R;if(e&&(b===null||b!==e.innerHTML)){b=e.innerHTML;const{value:t}=g;if(t){const{offsetWidth:i,offsetHeight:l}=t,{offsetWidth:f,offsetHeight:F}=e,O=.9,T=Math.min(i/f*O,l/F*O,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${T})`}}},C=G(Te,null),p=P(()=>{const{size:e}=o;if(e)return e;const{size:t}=C||{};return t||"medium"}),z=H("Avatar","-avatar",we,Pe,o,h),s=G(Y,null),v=P(()=>{if(C)return!0;const{round:e,circle:t}=o;return e!==void 0||t!==void 0?e||t:s?s.roundRef.value:!1}),r=P(()=>C?!0:o.bordered||!1),a=e=>{var t;if(!m.value)return;u.value=!0;const{onError:i,imgProps:l}=o;(t=l==null?void 0:l.onError)===null||t===void 0||t.call(l,e),i&&i(e)};ze(()=>o.src,()=>u.value=!1);const y=P(()=>{const e=p.value,t=v.value,i=r.value,{color:l}=o,{self:{borderRadius:f,fontSize:F,color:O,border:T,colorModal:I,colorPopover:L},common:{cubicBezierEaseInOut:M}}=z.value;let w;return typeof e=="number"?w=`${e}px`:w=z.value.self[d("height",e)],{"--n-font-size":F,"--n-border":i?T:"none","--n-border-radius":t?"50%":f,"--n-color":l||O,"--n-color-modal":l||I,"--n-color-popover":l||L,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),c=n?X("avatar",P(()=>{const e=p.value,t=v.value,i=r.value,{color:l}=o;let f="";return e&&(typeof e=="number"?f+=`a${e}`:f+=e[0]),t&&(f+="b"),i&&(f+="c"),l&&(f+=V(l)),f}),y,o):void 0,m=j(!o.lazy);ye(()=>{if(ue)return;let e;const t=Re(()=>{e==null||e(),e=void 0,o.lazy&&(e=ve(g.value,o.intersectionObserverOptions,m))});Be(()=>{t(),e==null||e()})});const E=j(!o.lazy);return{textRef:R,selfRef:g,mergedRoundRef:v,mergedClsPrefix:h,fitTextTransform:x,cssVars:n?void 0:y,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,hasLoadError:u,handleError:a,shouldStartLoading:m,loaded:E,mergedOnLoad:e=>{var t;const{onLoad:i,imgProps:l}=o;i==null||i(e),(t=l==null?void 0:l.onLoad)===null||t===void 0||t.call(l,e),E.value=!0}}},render(){var o,h;const{$slots:n,src:u,mergedClsPrefix:b,lazy:R,onRender:g,mergedOnLoad:x,shouldStartLoading:C,loaded:p,hasLoadError:z}=this;g==null||g();let s;const v=!p&&!z&&(this.renderPlaceholder?this.renderPlaceholder():(h=(o=this.$slots).placeholder)===null||h===void 0?void 0:h.call(o));return this.hasLoadError?s=this.renderFallback?this.renderFallback():$e(n.fallback,()=>[k("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):s=W(n.default,r=>{if(r)return k(Se,{onResize:this.fitTextTransform},{default:()=>k("span",{ref:"textRef",class:`${b}-avatar__text`},r)});if(u){const{imgProps:a}=this;return k("img",Object.assign(Object.assign({},a),{loading:"eager",src:C||p?u:void 0,onLoad:x,"data-image-src":u,onError:this.handleError,style:[a==null?void 0:a.style,{objectFit:this.objectFit},v?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),k("span",{ref:"selfRef",class:[`${b}-avatar`,this.themeClass],style:this.cssVars},s,R&&v)}});export{Ie as N};
