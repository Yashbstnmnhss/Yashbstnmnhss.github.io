import{d as f,B as i,G as m,D as l,bA as z,H as u,n as k,p as h,s as d,a$ as C,v as x,a9 as w,b7 as S,_ as $,ce as B}from"./index.f590f622.js";import{a as R}from"./use-compitable.a3c7374a.js";const W=f({name:"Eye",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),i("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),T=m([m("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),l("spin-container",{position:"relative"},[l("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[z()])]),l("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),l("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[u("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),l("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),l("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[u("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),N={small:20,medium:18,large:16},E=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),j=f({name:"Spin",props:E,setup(s){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=k(s),t=h("Spin","-spin",T,B,s,a),c=d(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:r},self:p}=t.value,{opacitySpinning:v,color:y,textColor:g}=p,b=typeof n=="number"?C(n):p[x("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":v,"--n-size":b,"--n-color":y,"--n-text-color":g}}),o=e?w("spin",d(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),c,s):void 0;return{mergedClsPrefix:a,compitableShow:R(s,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:r}=s;return N[typeof r=="number"?"medium":r]}),cssVars:e?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var s,a;const{$slots:e,mergedClsPrefix:t,description:c}=this,o=e.icon&&this.rotate,n=(c||e.description)&&i("div",{class:`${t}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),r=e.icon?i("div",{class:[`${t}-spin-body`,this.themeClass]},i("div",{class:[`${t}-spin`,o&&`${t}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):i("div",{class:[`${t}-spin-body`,this.themeClass]},i(S,{clsPrefix:t,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${t}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?i("div",{class:[`${t}-spin-container`,this.themeClass],style:this.cssVars},i("div",{class:[`${t}-spin-content`,this.compitableShow&&`${t}-spin-content--spinning`]},e),i($,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});export{W as E,j as N};
