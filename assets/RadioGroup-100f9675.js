import{c as Z,bI as D,r as k,n as ee,t as V,s as _,e as P,o as w,a as I,j as m,b as C,k as F,y as T,d as oe,u as $,p as te,an as re,g as U,i as ne,a_ as ae,h as A,bR as ie,at as E}from"./index-f75098fd.js";import{u as G}from"./use-merged-state-b10dd123.js";import{g as de}from"./get-slot-1efb97e5.js";const he={name:String,value:{type:[String,Number,Boolean],default:"on"},checked:{type:Boolean,default:void 0},defaultChecked:Boolean,disabled:{type:Boolean,default:void 0},label:String,size:String,onUpdateChecked:[Function,Array],"onUpdate:checked":[Function,Array],checkedValue:{type:Boolean,default:void 0}},j=Z("n-radio-group");function ge(e){const d=D(e,{mergedSize(t){const{size:a}=e;if(a!==void 0)return a;if(o){const{mergedSizeRef:{value:u}}=o;if(u!==void 0)return u}return t?t.mergedSize.value:"medium"},mergedDisabled(t){return!!(e.disabled||o!=null&&o.disabledRef.value||t!=null&&t.disabled.value)}}),{mergedSizeRef:r,mergedDisabledRef:l}=d,n=k(null),h=k(null),o=ee(j,null),s=k(e.defaultChecked),b=V(e,"checked"),g=G(b,s),v=_(()=>o?o.valueRef.value===e.value:g.value),R=_(()=>{const{name:t}=e;if(t!==void 0)return t;if(o)return o.nameRef.value}),f=k(!1);function x(){if(o){const{doUpdateValue:t}=o,{value:a}=e;w(t,a)}else{const{onUpdateChecked:t,"onUpdate:checked":a}=e,{nTriggerFormInput:u,nTriggerFormChange:i}=d;t&&w(t,!0),a&&w(a,!0),u(),i(),s.value=!0}}function p(){l.value||v.value||x()}function y(){p()}function z(){f.value=!1}function S(){f.value=!0}return{mergedClsPrefix:o?o.mergedClsPrefixRef:P(e).mergedClsPrefixRef,inputRef:n,labelRef:h,mergedName:R,mergedDisabled:l,uncontrolledChecked:s,renderSafeChecked:v,focus:f,mergedSize:r,handleRadioInputChange:y,handleRadioInputBlur:z,handleRadioInputFocus:S}}const se=I("radio-group",`
 display: inline-block;
 font-size: var(--n-font-size);
`,[m("splitor",`
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `,[C("checked",{backgroundColor:"var(--n-button-border-color-active)"}),C("disabled",{opacity:"var(--n-opacity-disabled)"})]),C("button-group",`
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `,[I("radio-button",{height:"var(--n-height)",lineHeight:"var(--n-height)"}),m("splitor",{height:"var(--n-height)"})]),I("radio-button",`
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `,[I("radio-input",`
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `),m("state-border",`
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `),F("&:first-child",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]),F("&:last-child",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `,[m("state-border",`
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]),T("disabled",`
 cursor: pointer;
 `,[F("&:hover",[m("state-border",`
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `),T("checked",{color:"var(--n-button-text-color-hover)"})]),C("focus",[F("&:not(:active)",[m("state-border",{boxShadow:"var(--n-button-box-shadow-focus)"})])])]),C("checked",`
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `),C("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);function ue(e,d,r){var l;const n=[];let h=!1;for(let o=0;o<e.length;++o){const s=e[o],b=(l=s.type)===null||l===void 0?void 0:l.name;b==="RadioButton"&&(h=!0);const g=s.props;if(b!=="RadioButton"){n.push(s);continue}if(o===0)n.push(s);else{const v=n[n.length-1].props,R=d===v.value,f=v.disabled,x=d===g.value,p=g.disabled,y=(R?2:0)+(f?0:1),z=(x?2:0)+(p?0:1),S={[`${r}-radio-group__splitor--disabled`]:f,[`${r}-radio-group__splitor--checked`]:R},t={[`${r}-radio-group__splitor--disabled`]:p,[`${r}-radio-group__splitor--checked`]:x},a=y<z?t:S;n.push(A("div",{class:[`${r}-radio-group__splitor`,a]}),s)}}return{children:n,isButtonGroup:h}}const le=Object.assign(Object.assign({},$.props),{name:String,value:[String,Number,Boolean],defaultValue:{type:[String,Number,Boolean],default:null},size:String,disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ve=oe({name:"RadioGroup",props:le,setup(e){const d=k(null),{mergedSizeRef:r,mergedDisabledRef:l,nTriggerFormChange:n,nTriggerFormInput:h,nTriggerFormBlur:o,nTriggerFormFocus:s}=D(e),{mergedClsPrefixRef:b,inlineThemeDisabled:g,mergedRtlRef:v}=P(e),R=$("Radio","-radio-group",se,ie,e,b),f=k(e.defaultValue),x=V(e,"value"),p=G(x,f);function y(i){const{onUpdateValue:c,"onUpdate:value":B}=e;c&&w(c,i),B&&w(B,i),f.value=i,n(),h()}function z(i){const{value:c}=d;c&&(c.contains(i.relatedTarget)||s())}function S(i){const{value:c}=d;c&&(c.contains(i.relatedTarget)||o())}te(j,{mergedClsPrefixRef:b,nameRef:V(e,"name"),valueRef:p,disabledRef:l,mergedSizeRef:r,doUpdateValue:y});const t=re("Radio",v,b),a=U(()=>{const{value:i}=r,{common:{cubicBezierEaseInOut:c},self:{buttonBorderColor:B,buttonBorderColorActive:N,buttonBorderRadius:H,buttonBoxShadow:M,buttonBoxShadowFocus:K,buttonBoxShadowHover:O,buttonColorActive:L,buttonTextColor:q,buttonTextColorActive:J,buttonTextColorHover:Q,opacityDisabled:W,[E("buttonHeight",i)]:X,[E("fontSize",i)]:Y}}=R.value;return{"--n-font-size":Y,"--n-bezier":c,"--n-button-border-color":B,"--n-button-border-color-active":N,"--n-button-border-radius":H,"--n-button-box-shadow":M,"--n-button-box-shadow-focus":K,"--n-button-box-shadow-hover":O,"--n-button-color-active":L,"--n-button-text-color":q,"--n-button-text-color-hover":Q,"--n-button-text-color-active":J,"--n-height":X,"--n-opacity-disabled":W}}),u=g?ne("radio-group",U(()=>r.value[0]),a,e):void 0;return{selfElRef:d,rtlEnabled:t,mergedClsPrefix:b,mergedValue:p,handleFocusout:S,handleFocusin:z,cssVars:g?void 0:a,themeClass:u==null?void 0:u.themeClass,onRender:u==null?void 0:u.onRender}},render(){var e;const{mergedValue:d,mergedClsPrefix:r,handleFocusin:l,handleFocusout:n}=this,{children:h,isButtonGroup:o}=ue(ae(de(this)),d,r);return(e=this.onRender)===null||e===void 0||e.call(this),A("div",{onFocusin:l,onFocusout:n,ref:"selfElRef",class:[`${r}-radio-group`,this.rtlEnabled&&`${r}-radio-group--rtl`,this.themeClass,o&&`${r}-radio-group--button-group`],style:this.cssVars},h)}});export{ve as N,he as r,ge as s};