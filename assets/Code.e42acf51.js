import{i as p,j as E,k as d,e as c,c as M,q as T,d as F,u as L,x as O,o as I,y as u,v as C,f as b,co as V,m as W,h as q}from"./index.08a140cc.js";function D(n,e){const o=p(E,null);return d(()=>n.hljs||(o==null?void 0:o.mergedHljsRef.value))}var K=c([M("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[T("word-wrap",[c("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),c("pre",`
 margin: 0;
 font-family: inherit;
 `),c("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:n})=>{const e=`${n.bPrefix}code`;return[`${e} .hljs-comment,
 ${e} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${e} .hljs-doctag,
 ${e} .hljs-keyword,
 ${e} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${e} .hljs-section,
 ${e} .hljs-name,
 ${e} .hljs-selector-tag,
 ${e} .hljs-deletion,
 ${e} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${e} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${e} .hljs-string,
 ${e} .hljs-regexp,
 ${e} .hljs-addition,
 ${e} .hljs-attribute,
 ${e} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${e} .hljs-built_in,
 ${e} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${e} .hljs-attr,
 ${e} .hljs-variable,
 ${e} .hljs-template-variable,
 ${e} .hljs-type,
 ${e} .hljs-selector-class,
 ${e} .hljs-selector-attr,
 ${e} .hljs-selector-pseudo,
 ${e} .hljs-number {
 color: var(--n-hue-6);
 }`,`${e} .hljs-symbol,
 ${e} .hljs-bullet,
 ${e} .hljs-link,
 ${e} .hljs-meta,
 ${e} .hljs-selector-id,
 ${e} .hljs-title {
 color: var(--n-hue-2);
 }`,`${e} .hljs-emphasis {
 font-style: italic;
 }`,`${e} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${e} .hljs-link {
 text-decoration: underline;
 }`]}]);const U=Object.assign(Object.assign({},b.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,internalFontSize:Number,internalNoHighlight:Boolean});var A=F({name:"Code",props:U,setup(n,{slots:e}){const{internalNoHighlight:o}=n,{mergedClsPrefixRef:f,inlineThemeDisabled:$}=L(),m=O(null),j=o?{value:void 0}:D(n),w=(t,i,s)=>{const{value:l}=j;return!l||!(t&&l.getLanguage(t))?null:l.highlight(s?i.trim():i,{language:t}).value},h=()=>{if(e.default)return;const{value:t}=m;if(!t)return;const{language:i}=n,s=n.uri?window.decodeURIComponent(n.code):n.code;if(i){const r=w(i,s,n.trim);if(r!==null){t.innerHTML=n.inline?r:`<pre>${r}</pre>`;return}}if(n.inline){t.textContent=s;return}const l=t.children[0];if(l&&l.tagName==="PRE")l.textContent=s;else{const r=document.createElement("pre");r.textContent=s,t.innerHTML="",t.appendChild(r)}};I(h),u(C(n,"language"),h),u(C(n,"code"),h),o||u(j,h);const y=b("Code","-code",K,V,n,f),g=d(()=>{const{common:{cubicBezierEaseInOut:t,fontFamilyMono:i},self:{textColor:s,fontSize:l,fontWeightStrong:r,"mono-3":x,"hue-1":R,"hue-2":z,"hue-3":H,"hue-4":P,"hue-5":k,"hue-5-2":B,"hue-6":N,"hue-6-2":S}}=y.value,{internalFontSize:v}=n;return{"--n-font-size":v?`${v}px`:l,"--n-font-family":i,"--n-font-weight-strong":r,"--n-bezier":t,"--n-text-color":s,"--n-mono-3":x,"--n-hue-1":R,"--n-hue-2":z,"--n-hue-3":H,"--n-hue-4":P,"--n-hue-5":k,"--n-hue-5-2":B,"--n-hue-6":N,"--n-hue-6-2":S}}),a=$?W("code",d(()=>`${n.internalFontSize||"a"}`),g,n):void 0;return{mergedClsPrefix:f,codeRef:m,cssVars:$?void 0:g,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{mergedClsPrefix:n,wordWrap:e,onRender:o}=this;return o==null||o(),q("code",{class:[`${n}-code`,this.themeClass,e&&`${n}-code--word-wrap`],style:this.cssVars,ref:"codeRef"},this.$slots)}});export{A as N};
