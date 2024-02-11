import{I as ce,T as l,J as g,R as z,Q as y,a as ne,r as le,u as te,b as _,a2 as se,a5 as ie,c as de,e as P,K as he,aC as I,h as b,c0 as ge,a0 as be,d1 as ve,a6 as ue,j as c,aH as Ce,bj as T}from"./index-ef01de82.js";const ke={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},fe=ce("tag",`
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
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
`,[l("strong",`
 font-weight: var(--n-font-weight-strong);
 `),g("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),g("icon",`
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `),g("avatar",`
 display: flex;
 margin: 0 6px 0 0;
 `),g("close",`
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),l("round",`
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `,[g("icon",`
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `),g("avatar",`
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `),l("closable",`
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]),l("icon, avatar",[l("round",`
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]),l("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),l("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-hover-checkable);",[z("checked","color: var(--n-text-color-hover-checkable);")]),y("&:active","background-color: var(--n-color-pressed-checkable);",[z("checked","color: var(--n-text-color-pressed-checkable);")])]),l("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[z("disabled",[y("&:hover","background-color: var(--n-color-checked-hover);"),y("&:active","background-color: var(--n-color-checked-pressed);")])])])]),pe=Object.assign(Object.assign(Object.assign({},_.props),ke),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function}),me=be("n-tag"),ze=ne({name:"Tag",props:pe,setup(a){const i=le(null),{mergedBorderedRef:o,mergedClsPrefixRef:v,inlineThemeDisabled:u,mergedRtlRef:B}=te(a),k=_("Tag","-tag",fe,ve,a,v);se(me,{roundRef:ie(a,"round")});function C(e){if(!a.disabled&&a.checkable){const{checked:r,onCheckedChange:h,onUpdateChecked:t,"onUpdate:checked":s}=a;t&&t(!r),s&&s(!r),h&&h(!r)}}function f(e){if(a.triggerClickOnClose||e.stopPropagation(),!a.disabled){const{onClose:r}=a;r&&ue(r,e)}}const p={setTextContent(e){const{value:r}=i;r&&(r.textContent=e)}},m=de("Tag",B,v),n=P(()=>{const{type:e,size:r,color:{color:h,textColor:t}={}}=a,{common:{cubicBezierEaseInOut:s},self:{padding:M,closeMargin:j,borderRadius:w,opacityDisabled:S,textColorCheckable:H,textColorHoverCheckable:O,textColorPressedCheckable:F,textColorChecked:N,colorCheckable:E,colorHoverCheckable:U,colorPressedCheckable:K,colorChecked:D,colorCheckedHover:V,colorCheckedPressed:W,closeBorderRadius:A,fontWeightStrong:J,[c("colorBordered",e)]:L,[c("closeSize",r)]:Q,[c("closeIconSize",r)]:q,[c("fontSize",r)]:G,[c("height",r)]:$,[c("color",e)]:X,[c("textColor",e)]:Y,[c("border",e)]:Z,[c("closeIconColor",e)]:R,[c("closeIconColorHover",e)]:ee,[c("closeIconColorPressed",e)]:oe,[c("closeColorHover",e)]:re,[c("closeColorPressed",e)]:ae}}=k.value,x=Ce(j);return{"--n-font-weight-strong":J,"--n-avatar-size-override":`calc(${$} - 8px)`,"--n-bezier":s,"--n-border-radius":w,"--n-border":Z,"--n-close-icon-size":q,"--n-close-color-pressed":ae,"--n-close-color-hover":re,"--n-close-border-radius":A,"--n-close-icon-color":R,"--n-close-icon-color-hover":ee,"--n-close-icon-color-pressed":oe,"--n-close-icon-color-disabled":R,"--n-close-margin-top":x.top,"--n-close-margin-right":x.right,"--n-close-margin-bottom":x.bottom,"--n-close-margin-left":x.left,"--n-close-size":Q,"--n-color":h||(o.value?L:X),"--n-color-checkable":E,"--n-color-checked":D,"--n-color-checked-hover":V,"--n-color-checked-pressed":W,"--n-color-hover-checkable":U,"--n-color-pressed-checkable":K,"--n-font-size":G,"--n-height":$,"--n-opacity-disabled":S,"--n-padding":M,"--n-text-color":t||Y,"--n-text-color-checkable":H,"--n-text-color-checked":N,"--n-text-color-hover-checkable":O,"--n-text-color-pressed-checkable":F}}),d=u?he("tag",P(()=>{let e="";const{type:r,size:h,color:{color:t,textColor:s}={}}=a;return e+=r[0],e+=h[0],t&&(e+=`a${T(t)}`),s&&(e+=`b${T(s)}`),o.value&&(e+="c"),e}),n,a):void 0;return Object.assign(Object.assign({},p),{rtlEnabled:m,mergedClsPrefix:v,contentRef:i,mergedBordered:o,handleClick:C,handleCloseClick:f,cssVars:u?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender})},render(){var a,i;const{mergedClsPrefix:o,rtlEnabled:v,closable:u,color:{borderColor:B}={},round:k,onRender:C,$slots:f}=this;C==null||C();const p=I(f.avatar,n=>n&&b("div",{class:`${o}-tag__avatar`},n)),m=I(f.icon,n=>n&&b("div",{class:`${o}-tag__icon`},n));return b("div",{class:[`${o}-tag`,this.themeClass,{[`${o}-tag--rtl`]:v,[`${o}-tag--strong`]:this.strong,[`${o}-tag--disabled`]:this.disabled,[`${o}-tag--checkable`]:this.checkable,[`${o}-tag--checked`]:this.checkable&&this.checked,[`${o}-tag--round`]:k,[`${o}-tag--avatar`]:p,[`${o}-tag--icon`]:m,[`${o}-tag--closable`]:u}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},m||p,b("span",{class:`${o}-tag__content`,ref:"contentRef"},(i=(a=this.$slots).default)===null||i===void 0?void 0:i.call(a)),!this.checkable&&u?b(ge,{clsPrefix:o,class:`${o}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick,focusable:this.internalCloseFocusable,round:k,isButtonTag:this.internalCloseIsButtonTag,absolute:!0}):null,!this.checkable&&this.mergedBordered?b("div",{class:`${o}-tag__border`,style:{borderColor:B}}):null)}});export{ze as N,me as t};
