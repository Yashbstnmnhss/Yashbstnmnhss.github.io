import{i as N,o as ve}from"./utils.c92647e8.js";import{D as W,H as R,I as $,E as T,G as P,p as F,W as G,d as X,r as E,n as q,c8 as fe,K as be,a6 as ge,q as me,s as S,v as i,a9 as Y,c9 as V,aT as U,B as g,bD as ke,a8 as Ce,ca as pe,cb as xe,X as K,cc as ze,M as ye,g as Re,aO as $e,R as Be,b0 as Se}from"./index.f590f622.js";const Pe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},je=W("tag",`
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
`,[R("strong",`
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
 cursor: pointer;
 `),R("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[$("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),$("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),R("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),R("icon, avatar",[R("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),R("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),R("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[T("disabled",[P("&:hover","background-color: var(--n-color-hover-checkable);",[T("checked","color: var(--n-text-color-hover-checkable);")]),P("&:active","background-color: var(--n-color-pressed-checkable);",[T("checked","color: var(--n-text-color-pressed-checkable);")])]),R("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[T("disabled",[P("&:hover","background-color: var(--n-color-checked-hover);"),P("&:active","background-color: var(--n-color-checked-pressed);")])])])]),Ee=Object.assign(Object.assign(Object.assign({},F.props),Pe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),J=G("n-tag");X({name:"Tag",props:Ee,setup(o){const d=E(null),{mergedBorderedRef:n,mergedClsPrefixRef:s,inlineThemeDisabled:u,mergedRtlRef:p}=q(o),v=F("Tag","-tag",je,fe,o,s);be(J,{roundRef:ge(o,"round")});function x(r){if(!o.disabled&&o.checkable){const{checked:a,onCheckedChange:y,onUpdateChecked:c,"onUpdate:checked":b}=o;c&&c(!a),b&&b(!a),y&&y(!a)}}function m(r){if(o.internalStopClickPropagation&&r.stopPropagation(),!o.disabled){const{onClose:a}=o;a&&Ce(a,r)}}const k={setTextContent(r){const{value:a}=d;a&&(a.textContent=r)}},z=me("Tag",p,s),l=S(()=>{const{type:r,size:a,color:{color:y,textColor:c}={}}=o,{common:{cubicBezierEaseInOut:b},self:{padding:M,closeMargin:e,closeMarginRtl:t,borderRadius:B,opacityDisabled:C,textColorCheckable:f,textColorHoverCheckable:O,textColorPressedCheckable:j,textColorChecked:w,colorCheckable:I,colorHoverCheckable:_,colorPressedCheckable:L,colorChecked:H,colorCheckedHover:Q,colorCheckedPressed:Z,closeBorderRadius:ee,fontWeightStrong:oe,[i("colorBordered",r)]:re,[i("closeSize",a)]:ne,[i("closeIconSize",a)]:te,[i("fontSize",a)]:ae,[i("height",a)]:A,[i("color",r)]:le,[i("textColor",r)]:se,[i("border",r)]:ce,[i("closeIconColor",r)]:D,[i("closeIconColorHover",r)]:ie,[i("closeIconColorPressed",r)]:de,[i("closeColorHover",r)]:he,[i("closeColorPressed",r)]:ue}}=v.value;return{"--n-font-weight-strong":oe,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":b,"--n-border-radius":B,"--n-border":ce,"--n-close-icon-size":te,"--n-close-color-pressed":ue,"--n-close-color-hover":he,"--n-close-border-radius":ee,"--n-close-icon-color":D,"--n-close-icon-color-hover":ie,"--n-close-icon-color-pressed":de,"--n-close-icon-color-disabled":D,"--n-close-margin":e,"--n-close-margin-rtl":t,"--n-close-size":ne,"--n-color":y||(n.value?re:le),"--n-color-checkable":I,"--n-color-checked":H,"--n-color-checked-hover":Q,"--n-color-checked-pressed":Z,"--n-color-hover-checkable":_,"--n-color-pressed-checkable":L,"--n-font-size":ae,"--n-height":A,"--n-opacity-disabled":C,"--n-padding":M,"--n-text-color":c||se,"--n-text-color-checkable":f,"--n-text-color-checked":w,"--n-text-color-hover-checkable":O,"--n-text-color-pressed-checkable":j}}),h=u?Y("tag",S(()=>{let r="";const{type:a,size:y,color:{color:c,textColor:b}={}}=o;return r+=a[0],r+=y[0],c&&(r+=`a${V(c)}`),b&&(r+=`b${V(b)}`),n.value&&(r+="c"),r}),l,o):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:z,mergedClsPrefix:s,contentRef:d,mergedBordered:n,handleClick:x,handleCloseClick:m,cssVars:u?void 0:l,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var o,d;const{mergedClsPrefix:n,rtlEnabled:s,closable:u,color:{borderColor:p}={},round:v,onRender:x,$slots:m}=this;x==null||x();const k=U(m.avatar,l=>l&&g("div",{class:`${n}-tag__avatar`},l)),z=U(m.icon,l=>l&&g("div",{class:`${n}-tag__icon`},l));return g("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:s,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:v,[`${n}-tag--avatar`]:k,[`${n}-tag--icon`]:z,[`${n}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},z||k,g("span",{class:`${n}-tag__content`,ref:"contentRef"},(d=(o=this.$slots).default)===null||d===void 0?void 0:d.call(o)),!this.checkable&&u?g(ke,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:v,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${n}-tag__border`,style:{borderColor:p}}):null)}});const Oe=G("n-avatar-group"),we=W("avatar",`
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
`,[pe(P("&","--n-merged-color: var(--n-color-modal);")),xe(P("&","--n-merged-color: var(--n-color-popover);")),P("img",`
 width: 100%;
 height: 100%;
 `),$("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),W("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),$("text","line-height: 1.25")]),He=Object.assign(Object.assign({},F.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,color:String}),Fe=X({name:"Avatar",props:He,setup(o){const{mergedClsPrefixRef:d,inlineThemeDisabled:n}=q(o),s=E(!1);let u=null;const p=E(null),v=E(null),x=()=>{const{value:e}=p;if(e&&(u===null||u!==e.innerHTML)){u=e.innerHTML;const{value:t}=v;if(t){const{offsetWidth:B,offsetHeight:C}=t,{offsetWidth:f,offsetHeight:O}=e,j=.9,w=Math.min(B/f*j,C/O*j,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${w})`}}},m=K(Oe,null),k=S(()=>{const{size:e}=o;if(e)return e;const{size:t}=m||{};return t||"medium"}),z=F("Avatar","-avatar",we,ze,o,d),l=K(J,null),h=S(()=>{if(m)return!0;const{round:e,circle:t}=o;return e!==void 0||t!==void 0?e||t:l?l.roundRef.value:!1}),r=S(()=>m?!0:o.bordered||!1),a=e=>{if(!b.value)return;s.value=!0;const{onError:t}=o;t&&t(e)};ye(()=>o.src,()=>s.value=!1);const y=S(()=>{const e=k.value,t=h.value,B=r.value,{color:C}=o,{self:{borderRadius:f,fontSize:O,color:j,border:w,colorModal:I,colorPopover:_},common:{cubicBezierEaseInOut:L}}=z.value;let H;return typeof e=="number"?H=`${e}px`:H=z.value.self[i("height",e)],{"--n-font-size":O,"--n-border":B?w:"none","--n-border-radius":t?"50%":f,"--n-color":C||j,"--n-color-modal":C||I,"--n-color-popover":C||_,"--n-bezier":L,"--n-merged-size":`var(--n-avatar-size-override, ${H})`}}),c=n?Y("avatar",S(()=>{const e=k.value,t=h.value,B=r.value,{color:C}=o;let f="";return e&&(typeof e=="number"?f+=`a${e}`:f+=e[0]),t&&(f+="b"),B&&(f+="c"),C&&(f+=V(C)),f}),y,o):void 0,b=E(!o.lazy);Re(()=>{if(N)return;let e;const t=$e(()=>{e==null||e(),e=void 0,o.lazy&&(e=ve(v.value,o.intersectionObserverOptions,b))});Be(()=>{t(),e==null||e()})});const M=E(!o.lazy);return{textRef:p,selfRef:v,mergedRoundRef:h,mergedClsPrefix:d,fitTextTransform:x,cssVars:n?void 0:y,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,hasLoadError:s,handleError:a,shouldStartLoading:b,loaded:M,mergedOnLoad:e=>{const{onLoad:t}=o;t==null||t(e),M.value=!0}}},render(){var o,d;const{$slots:n,src:s,mergedClsPrefix:u,lazy:p,onRender:v,mergedOnLoad:x,shouldStartLoading:m,loaded:k,hasLoadError:z}=this;v==null||v();let l;const h=!k&&!z&&((d=(o=this.$slots).placeholder)===null||d===void 0?void 0:d.call(o));return this.hasLoadError?l=g("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):l=U(n.default,r=>{if(r)return g(Se,{onResize:this.fitTextTransform},{default:()=>g("span",{ref:"textRef",class:`${u}-avatar__text`},r)});if(s)return g("img",{loading:N&&p?"lazy":"eager",src:N||m||k?s:void 0,onLoad:x,"data-image-src":s,onError:this.handleError,style:[{objectFit:this.objectFit},h?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),g("span",{ref:"selfRef",class:[`${u}-avatar`,this.themeClass],style:this.cssVars},l,p&&h)}});export{Fe as N};
