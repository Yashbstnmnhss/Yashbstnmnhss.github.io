import{i as N,o as ve}from"./utils.c92647e8.js";import{c as U,d as R,e as B,a as I,b as S,a4 as H,U as G,f as X,y as T,u as Y,c0 as be,p as fe,a3 as ge,i as me,m as P,a7 as i,a8 as Z,c1 as V,aZ as W,j as g,br as ke,a6 as Ce,c2 as pe,c3 as ze,k as D,c4 as xe,K as ye,z as Re,aT as Be,P as $e,bs as Pe,bA as Se}from"./index.d6438343.js";const Fe={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},Te=U("tag",`
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
 `),B("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),B("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),B("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),B("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),R("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[B("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),B("avatar",`
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
 `,[I("disabled",[S("&:hover","background-color: var(--n-color-hover-checkable);",[I("checked","color: var(--n-text-color-hover-checkable);")]),S("&:active","background-color: var(--n-color-pressed-checkable);",[I("checked","color: var(--n-text-color-pressed-checkable);")])]),R("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[I("disabled",[S("&:hover","background-color: var(--n-color-checked-hover);"),S("&:active","background-color: var(--n-color-checked-pressed);")])])])]),je=Object.assign(Object.assign(Object.assign({},H.props),Fe),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),q=G("n-tag");X({name:"Tag",props:je,setup(o){const d=T(null),{mergedBorderedRef:n,mergedClsPrefixRef:s,inlineThemeDisabled:u,mergedRtlRef:p}=Y(o),v=H("Tag","-tag",Te,be,o,s);fe(q,{roundRef:ge(o,"round")});function z(r){if(!o.disabled&&o.checkable){const{checked:a,onCheckedChange:y,onUpdateChecked:c,"onUpdate:checked":f}=o;c&&c(!a),f&&f(!a),y&&y(!a)}}function m(r){if(o.triggerClickOnClose||r.stopPropagation(),!o.disabled){const{onClose:a}=o;a&&Ce(a,r)}}const k={setTextContent(r){const{value:a}=d;a&&(a.textContent=r)}},x=me("Tag",p,s),l=P(()=>{const{type:r,size:a,color:{color:y,textColor:c}={}}=o,{common:{cubicBezierEaseInOut:f},self:{padding:E,closeMargin:e,closeMarginRtl:t,borderRadius:$,opacityDisabled:C,textColorCheckable:b,textColorHoverCheckable:j,textColorPressedCheckable:F,textColorChecked:O,colorCheckable:L,colorHoverCheckable:M,colorPressedCheckable:_,colorChecked:w,colorCheckedHover:J,colorCheckedPressed:Q,closeBorderRadius:ee,fontWeightStrong:oe,[i("colorBordered",r)]:re,[i("closeSize",a)]:ne,[i("closeIconSize",a)]:te,[i("fontSize",a)]:ae,[i("height",a)]:A,[i("color",r)]:le,[i("textColor",r)]:se,[i("border",r)]:ce,[i("closeIconColor",r)]:K,[i("closeIconColorHover",r)]:ie,[i("closeIconColorPressed",r)]:de,[i("closeColorHover",r)]:he,[i("closeColorPressed",r)]:ue}}=v.value;return{"--n-font-weight-strong":oe,"--n-avatar-size-override":`calc(${A} - 8px)`,"--n-bezier":f,"--n-border-radius":$,"--n-border":ce,"--n-close-icon-size":te,"--n-close-color-pressed":ue,"--n-close-color-hover":he,"--n-close-border-radius":ee,"--n-close-icon-color":K,"--n-close-icon-color-hover":ie,"--n-close-icon-color-pressed":de,"--n-close-icon-color-disabled":K,"--n-close-margin":e,"--n-close-margin-rtl":t,"--n-close-size":ne,"--n-color":y||(n.value?re:le),"--n-color-checkable":L,"--n-color-checked":w,"--n-color-checked-hover":J,"--n-color-checked-pressed":Q,"--n-color-hover-checkable":M,"--n-color-pressed-checkable":_,"--n-font-size":ae,"--n-height":A,"--n-opacity-disabled":C,"--n-padding":E,"--n-text-color":c||se,"--n-text-color-checkable":b,"--n-text-color-checked":O,"--n-text-color-hover-checkable":j,"--n-text-color-pressed-checkable":F}}),h=u?Z("tag",P(()=>{let r="";const{type:a,size:y,color:{color:c,textColor:f}={}}=o;return r+=a[0],r+=y[0],c&&(r+=`a${V(c)}`),f&&(r+=`b${V(f)}`),n.value&&(r+="c"),r}),l,o):void 0;return Object.assign(Object.assign({},k),{rtlEnabled:x,mergedClsPrefix:s,contentRef:d,mergedBordered:n,handleClick:z,handleCloseClick:m,cssVars:u?void 0:l,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender})},render(){var o,d;const{mergedClsPrefix:n,rtlEnabled:s,closable:u,color:{borderColor:p}={},round:v,onRender:z,$slots:m}=this;z==null||z();const k=W(m.avatar,l=>l&&g("div",{class:`${n}-tag__avatar`},l)),x=W(m.icon,l=>l&&g("div",{class:`${n}-tag__icon`},l));return g("div",{class:[`${n}-tag`,this.themeClass,{[`${n}-tag--rtl`]:s,[`${n}-tag--strong`]:this.strong,[`${n}-tag--disabled`]:this.disabled,[`${n}-tag--checkable`]:this.checkable,[`${n}-tag--checked`]:this.checkable&&this.checked,[`${n}-tag--round`]:v,[`${n}-tag--avatar`]:k,[`${n}-tag--icon`]:x,[`${n}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},x||k,g("span",{class:`${n}-tag__content`,ref:"contentRef"},(d=(o=this.$slots).default)===null||d===void 0?void 0:d.call(o)),!this.checkable&&u?g(ke,{clsPrefix:n,class:`${n}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:v,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?g("div",{class:`${n}-tag__border`,style:{borderColor:p}}):null)}});const Oe=G("n-avatar-group"),we=U("avatar",`
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
`,[pe(S("&","--n-merged-color: var(--n-color-modal);")),ze(S("&","--n-merged-color: var(--n-color-popover);")),S("img",`
 width: 100%;
 height: 100%;
 `),B("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),U("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),B("text","line-height: 1.25")]),Ee=Object.assign(Object.assign({},H.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,color:String}),Le=X({name:"Avatar",props:Ee,setup(o){const{mergedClsPrefixRef:d,inlineThemeDisabled:n}=Y(o),s=T(!1);let u=null;const p=T(null),v=T(null),z=()=>{const{value:e}=p;if(e&&(u===null||u!==e.innerHTML)){u=e.innerHTML;const{value:t}=v;if(t){const{offsetWidth:$,offsetHeight:C}=t,{offsetWidth:b,offsetHeight:j}=e,F=.9,O=Math.min($/b*F,C/j*F,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${O})`}}},m=D(Oe,null),k=P(()=>{const{size:e}=o;if(e)return e;const{size:t}=m||{};return t||"medium"}),x=H("Avatar","-avatar",we,xe,o,d),l=D(q,null),h=P(()=>{if(m)return!0;const{round:e,circle:t}=o;return e!==void 0||t!==void 0?e||t:l?l.roundRef.value:!1}),r=P(()=>m?!0:o.bordered||!1),a=e=>{if(!f.value)return;s.value=!0;const{onError:t}=o;t&&t(e)};ye(()=>o.src,()=>s.value=!1);const y=P(()=>{const e=k.value,t=h.value,$=r.value,{color:C}=o,{self:{borderRadius:b,fontSize:j,color:F,border:O,colorModal:L,colorPopover:M},common:{cubicBezierEaseInOut:_}}=x.value;let w;return typeof e=="number"?w=`${e}px`:w=x.value.self[i("height",e)],{"--n-font-size":j,"--n-border":$?O:"none","--n-border-radius":t?"50%":b,"--n-color":C||F,"--n-color-modal":C||L,"--n-color-popover":C||M,"--n-bezier":_,"--n-merged-size":`var(--n-avatar-size-override, ${w})`}}),c=n?Z("avatar",P(()=>{const e=k.value,t=h.value,$=r.value,{color:C}=o;let b="";return e&&(typeof e=="number"?b+=`a${e}`:b+=e[0]),t&&(b+="b"),$&&(b+="c"),C&&(b+=V(C)),b}),y,o):void 0,f=T(!o.lazy);Re(()=>{if(N)return;let e;const t=Be(()=>{e==null||e(),e=void 0,o.lazy&&(e=ve(v.value,o.intersectionObserverOptions,f))});$e(()=>{t(),e==null||e()})});const E=T(!o.lazy);return{textRef:p,selfRef:v,mergedRoundRef:h,mergedClsPrefix:d,fitTextTransform:z,cssVars:n?void 0:y,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender,hasLoadError:s,handleError:a,shouldStartLoading:f,loaded:E,mergedOnLoad:e=>{const{onLoad:t}=o;t==null||t(e),E.value=!0}}},render(){var o,d;const{$slots:n,src:s,mergedClsPrefix:u,lazy:p,onRender:v,mergedOnLoad:z,shouldStartLoading:m,loaded:k,hasLoadError:x}=this;v==null||v();let l;const h=!k&&!x&&(this.renderPlaceholder?this.renderPlaceholder():(d=(o=this.$slots).placeholder)===null||d===void 0?void 0:d.call(o));return this.hasLoadError?l=this.renderFallback?this.renderFallback():Pe(n.fallback,()=>[g("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):l=W(n.default,r=>{if(r)return g(Se,{onResize:this.fitTextTransform},{default:()=>g("span",{ref:"textRef",class:`${u}-avatar__text`},r)});if(s)return g("img",{loading:N&&p?"lazy":"eager",src:N||m||k?s:void 0,onLoad:z,"data-image-src":s,onError:this.handleError,style:[{objectFit:this.objectFit},h?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]})}),g("span",{ref:"selfRef",class:[`${u}-avatar`,this.themeClass],style:this.cssVars},l,p&&h)}});export{Le as N};
