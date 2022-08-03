import{c as L,b as y,q as E,s as M,e as C,f as H,H as U,d as W,x as F,u as D,c1 as le,C as se,v as ce,ar as ie,k,l as b,m as K,c2 as V,h as v,bt as de,D as G,S as he,c3 as ue,c4 as fe,i as A,c5 as be,y as ve,bB as ge}from"./index.08a140cc.js";var me={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}},ke=L("tag",`
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
`,[y("border",`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `),y("avatar",`
 display: flex;
 margin-right: 6px;
 `),y("close",`
 font-size: var(--n-close-size);
 margin: var(--n-close-margin);
 transition: color .3s var(--n-bezier);
 cursor: pointer;
 `),E("round",`
 padding: 0 calc(var(--n-height) / 2);
 border-radius: calc(var(--n-height) / 2);
 `,[y("avatar",`
 margin-left: calc((var(--n-height) - 8px) / -2);
 `)]),E("disabled",`
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `),E("checkable",`
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `,[M("disabled",[C("&:hover","background-color: var(--n-color-hover-checkable);",[M("checked","color: var(--n-text-color-hover-checkable);")]),C("&:active","background-color: var(--n-color-pressed-checkable);",[M("checked","color: var(--n-text-color-pressed-checkable);")])]),E("checked",`
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `,[M("disabled",[C("&:hover","background-color: var(--n-color-checked-hover);"),C("&:active","background-color: var(--n-color-checked-pressed);")])])])]);const Ce=Object.assign(Object.assign(Object.assign({},H.props),me),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalStopClickPropagation:Boolean,onCheckedChange:{type:Function,validator:()=>!0,default:void 0}}),q=U("n-tag");W({name:"Tag",props:Ce,setup(o){const c=F(null),{mergedBorderedRef:t,mergedClsPrefixRef:s,inlineThemeDisabled:i,mergedRtlRef:h}=D(o),p=H("Tag","-tag",ke,le,o,s);se(q,{roundRef:ce(o,"round")});function x(r){if(!o.disabled&&o.checkable){const{checked:n,onCheckedChange:g,onUpdateChecked:l,"onUpdate:checked":e}=o;l&&l(!n),e&&e(!n),g&&g(!n)}}function R(r){if(o.internalStopClickPropagation&&r.stopPropagation(),!o.disabled){const{onClose:n}=o;n&&he(n,r)}}const j={setTextContent(r){const{value:n}=c;n&&(n.textContent=r)}},T=ie("Tag",h,s),$=k(()=>{const{type:r,size:n,color:{color:g,textColor:l}={}}=o,{common:{cubicBezierEaseInOut:e},self:{padding:a,closeMargin:m,closeMarginRtl:f,borderRadius:d,opacityDisabled:P,textColorCheckable:z,textColorHoverCheckable:S,textColorPressedCheckable:w,textColorChecked:_,colorCheckable:O,colorHoverCheckable:B,colorPressedCheckable:X,colorChecked:Y,colorCheckedHover:J,colorCheckedPressed:Q,[b("closeSize",n)]:Z,[b("fontSize",n)]:ee,[b("height",n)]:I,[b("color",r)]:oe,[b("textColor",r)]:re,[b("border",r)]:te,[b("closeColor",r)]:N,[b("closeColorHover",r)]:ne,[b("closeColorPressed",r)]:ae}}=p.value;return{"--n-avatar-size-override":`calc(${I} - 8px)`,"--n-bezier":e,"--n-border-radius":d,"--n-border":te,"--n-close-color":N,"--n-close-color-hover":ne,"--n-close-color-pressed":ae,"--n-close-color-disabled":N,"--n-close-margin":m,"--n-close-margin-rtl":f,"--n-close-size":Z,"--n-color":g||oe,"--n-color-checkable":O,"--n-color-checked":Y,"--n-color-checked-hover":J,"--n-color-checked-pressed":Q,"--n-color-hover-checkable":B,"--n-color-pressed-checkable":X,"--n-font-size":ee,"--n-height":I,"--n-opacity-disabled":P,"--n-padding":a,"--n-text-color":l||re,"--n-text-color-checkable":z,"--n-text-color-checked":_,"--n-text-color-hover-checkable":S,"--n-text-color-pressed-checkable":w}}),u=i?K("tag",k(()=>{let r="";const{type:n,size:g,color:{color:l,textColor:e}={}}=o;return r+=n[0],r+=g[0],l&&(r+=`a${V(l)}`),e&&(r+=`b${V(e)}`),r}),$,o):void 0;return Object.assign(Object.assign({},j),{rtlEnabled:T,mergedClsPrefix:s,contentRef:c,mergedBordered:t,handleClick:x,handleCloseClick:R,cssVars:i?void 0:$,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender})},render(){var o,c;const{mergedClsPrefix:t,rtlEnabled:s,color:{borderColor:i}={},onRender:h,$slots:p}=this;return h==null||h(),v("div",{class:[`${t}-tag`,this.themeClass,{[`${t}-tag--rtl`]:s,[`${t}-tag--disabled`]:this.disabled,[`${t}-tag--checkable`]:this.checkable,[`${t}-tag--checked`]:this.checkable&&this.checked,[`${t}-tag--round`]:this.round}],style:this.cssVars,onClick:this.handleClick,onMouseenter:this.onMouseenter,onMouseleave:this.onMouseleave},G(p.avatar,x=>x&&v("div",{class:`${t}-tag__avatar`},x)),v("span",{class:`${t}-tag__content`,ref:"contentRef"},(c=(o=this.$slots).default)===null||c===void 0?void 0:c.call(o)),!this.checkable&&this.closable?v(de,{clsPrefix:t,class:`${t}-tag__close`,disabled:this.disabled,onClick:this.handleCloseClick}):null,!this.checkable&&this.mergedBordered?v("div",{class:`${t}-tag__border`,style:{borderColor:i}}):null)}});const pe=U("n-avatar-group");var xe=L("avatar",`
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
`,[ue(C("&","--n-merged-color: var(--n-color-modal);")),fe(C("&","--n-merged-color: var(--n-color-popover);")),C("img",`
 width: 100%;
 height: 100%;
 `),y("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),L("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),y("text","line-height: 1.25")]);const ze=Object.assign(Object.assign({},H.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,color:String});var Re=W({name:"Avatar",props:ze,setup(o){const{mergedClsPrefixRef:c,inlineThemeDisabled:t}=D(o),s=F(!1);let i=null;const h=F(null),p=F(null),x=()=>{const{value:e}=h;if(e&&(i===null||i!==e.innerHTML)){i=e.innerHTML;const{value:a}=p;if(a){const{offsetWidth:m,offsetHeight:f}=a,{offsetWidth:d,offsetHeight:P}=e,z=.9,S=Math.min(m/d*z,f/P*z,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${S})`}}},R=A(pe,null),j=k(()=>{const{size:e}=o;if(e)return e;const{size:a}=R||{};return a||"medium"}),T=H("Avatar","-avatar",xe,be,o,c),$=A(q,null),u=k(()=>{if(R)return!0;const{round:e,circle:a}=o;return e!==void 0||a!==void 0?e||a:$?$.roundRef.value:!1}),r=k(()=>R?!0:o.bordered||!1),n=e=>{s.value=!0;const{onError:a}=o;a&&a(e)};ve(()=>o.src,()=>s.value=!1);const g=k(()=>{const e=j.value,a=u.value,m=r.value,{color:f}=o,{self:{borderRadius:d,fontSize:P,color:z,border:S,colorModal:w,colorPopover:_},common:{cubicBezierEaseInOut:O}}=T.value;let B;return typeof e=="number"?B=`${e}px`:B=T.value.self[b("height",e)],{"--n-font-size":P,"--n-border":m?S:"none","--n-border-radius":a?"50%":d,"--n-color":f||z,"--n-color-modal":f||w,"--n-color-popover":f||_,"--n-bezier":O,"--n-merged-size":`var(--n-avatar-size-override, ${B})`}}),l=t?K("avatar",k(()=>{const e=j.value,a=u.value,m=r.value,{color:f}=o;let d="";return e&&(typeof e=="number"?d+=`a${e}`:d+=e[0]),a&&(d+="b"),m&&(d+="c"),f&&(d+=V(f)),d}),g,o):void 0;return{textRef:h,selfRef:p,mergedRoundRef:u,mergedClsPrefix:c,fitTextTransform:x,cssVars:t?void 0:g,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,hasLoadError:s,handleError:n}},render(){const{$slots:o,src:c,mergedClsPrefix:t,onRender:s}=this;s==null||s();let i;return this.hasLoadError?i=v("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}}):i=G(o.default,h=>{if(h)return v(ge,{onResize:this.fitTextTransform},{default:()=>v("span",{ref:"textRef",class:`${t}-avatar__text`},h)});if(c)return v("img",{src:c,onError:this.handleError,style:{objectFit:this.objectFit}})}),v("span",{ref:"selfRef",class:[`${t}-avatar`,this.themeClass],style:this.cssVars},i)}});export{Re as N};
