import{D as _,H as d,G as h,p as m,d as p,n as k,ab as w,s as a,a9 as C,a1 as b,B as u,$ as y,o as x,c as $,a as l}from"./index.f590f622.js";import{f as z}from"./format-length.7f3135aa.js";const V=_("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("color-transition",{transition:"color .3s var(--n-bezier)"}),d("depth",{color:"var(--n-color)"},[h("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),h("svg",{height:"1em",width:"1em"})]),j=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),H=p({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:j,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=k(e),i=m("Icon","-icon",V,w,e,o),r=a(()=>{const{depth:s}=e,{common:{cubicBezierEaseInOut:c},self:f}=i.value;if(s!==void 0){const{color:g,[`opacity${s}Depth`]:v}=f;return{"--n-bezier":c,"--n-color":g,"--n-opacity":v}}return{"--n-bezier":c,"--n-color":"","--n-opacity":""}}),n=t?C("icon",a(()=>`${e.depth||"d"}`),r,e):void 0;return{mergedClsPrefix:o,mergedStyle:a(()=>{const{size:s,color:c}=e;return{fontSize:z(s),color:c}}),cssVars:t?void 0:r,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{$parent:o,depth:t,mergedClsPrefix:i,component:r,onRender:n,themeClass:s}=this;return!((e=o==null?void 0:o.$options)===null||e===void 0)&&e._n_icon__&&b("icon","don't wrap `n-icon` inside `n-icon`"),n==null||n(),u("i",y(this.$attrs,{role:"img",class:[`${i}-icon`,s,{[`${i}-icon--depth`]:t,[`${i}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?u(r):this.$slots)}}),B={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},R=l("path",{d:"M126 192H56a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a15.93 15.93 0 0 1 10.14 3.54l91.47 74.89A8 8 0 0 0 240 392V120a8 8 0 0 0-12.74-6.43l-91.47 74.89A15 15 0 0 1 126 192z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),S=l("path",{d:"M320 320c9.74-19.38 16-40.84 16-64c0-23.48-6-44.42-16-64",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),I=l("path",{d:"M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),M=l("path",{d:"M416 416c30-46 48-91.43 48-160s-18-113-48-160",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"},null,-1),N=[R,S,I,M],A=p({name:"VolumeHighOutline",render:function(o,t){return x(),$("svg",B,N)}});export{H as N,A as V};
