import{c as w,b as h,d as c,f as z,u as $,a4 as l,bh as T,m as f,a7 as i,a8 as R,j as B}from"./index.d6438343.js";const H=w("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[h("&:first-child",{marginTop:0}),c("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[c("align-text",{paddingLeft:0},[h("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),h("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),h("&::before",{backgroundColor:"var(--n-bar-color)"})])]),P=Object.assign(Object.assign({},l.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),n=r=>z({name:`H${r}`,props:P,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:s}=$(e),a=l("Typography","-h",H,T,e,o),d=f(()=>{const{type:g}=e,{common:{cubicBezierEaseInOut:b},self:{headerFontWeight:m,headerTextColor:p,[i("headerPrefixWidth",r)]:u,[i("headerFontSize",r)]:x,[i("headerMargin",r)]:C,[i("headerBarWidth",r)]:v,[i("headerBarColor",g)]:y}}=a.value;return{"--n-bezier":b,"--n-font-size":x,"--n-margin":C,"--n-bar-color":y,"--n-bar-width":v,"--n-font-weight":m,"--n-text-color":p,"--n-prefix-width":u}}),t=s?R(`h${r}`,f(()=>e.type[0]),d,e):void 0;return{mergedClsPrefix:o,cssVars:s?void 0:d,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{prefix:o,alignText:s,mergedClsPrefix:a,cssVars:d,$slots:t}=this;return(e=this.onRender)===null||e===void 0||e.call(this),B(`h${r}`,{class:[`${a}-h`,`${a}-h${r}`,this.themeClass,{[`${a}-h--prefix-bar`]:o,[`${a}-h--align-text`]:s}],style:d},t)}}),S=n("1");n("2");const j=n("3");n("4");n("5");n("6");export{S as N,j as a};
