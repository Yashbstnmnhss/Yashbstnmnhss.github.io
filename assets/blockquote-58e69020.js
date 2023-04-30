import{a as b,k as i,b as g,d as m,e as f,u as r,g as x,i as p,h as k,b2 as v}from"./index-5231cf4b.js";const q=b("blockquote",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 margin: 0;
 margin-top: 12px;
 margin-bottom: 12px;
 box-sizing: border-box;
 padding-left: 12px;
 border-left: 4px solid var(--n-prefix-color);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[i("&:first-child",{marginTop:0}),i("&:last-child",{marginBottom:0}),g("align-text",{marginLeft:"-16px"})]),C=Object.assign(Object.assign({},r.props),{alignText:Boolean}),T=m({name:"Blockquote",props:C,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=f(e),l=r("Typography","-blockquote",q,v,e,t),n=x(()=>{const{common:{cubicBezierEaseInOut:a},self:{blockquoteTextColor:c,blockquotePrefixColor:d,blockquoteLineHeight:u,blockquoteFontSize:h}}=l.value;return{"--n-bezier":a,"--n-font-size":h,"--n-line-height":u,"--n-prefix-color":d,"--n-text-color":c}}),o=s?p("blockquote",void 0,n,e):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:n,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),k("blockquote",{class:[`${t}-blockquote`,this.themeClass,this.alignText&&`${t}-blockquote--align-text`],style:this.cssVars},this.$slots)}});export{T as N};
