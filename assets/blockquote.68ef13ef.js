import{X as b,Z as i,a3 as g,b as m,E as f,F as r,g as x,$ as p,j as v,bC as k}from"./index.30083524.js";var q=b("blockquote",`
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
`,[i("&:first-child",{marginTop:0}),i("&:last-child",{marginBottom:0}),g("align-text",{marginLeft:"-16px"})]);const C=Object.assign(Object.assign({},r.props),{alignText:Boolean});var T=m({name:"Blockquote",props:C,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:s}=f(e),l=r("Typography","-blockquote",q,k,e,t),n=x(()=>{const{common:{cubicBezierEaseInOut:a},self:{blockquoteTextColor:c,blockquotePrefixColor:d,blockquoteLineHeight:u,blockquoteFontSize:h}}=l.value;return{"--n-bezier":a,"--n-font-size":h,"--n-line-height":u,"--n-prefix-color":d,"--n-text-color":c}}),o=s?p("blockquote",void 0,n,e):void 0;return{mergedClsPrefix:t,cssVars:s?void 0:n,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{mergedClsPrefix:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),v("blockquote",{class:[`${t}-blockquote`,this.themeClass,this.alignText&&`${t}-blockquote--align-text`],style:this.cssVars},this.$slots)}});export{T as N};
