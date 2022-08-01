import{d as f,h as i,e as u,c as l,bn as z,q as m,u as k,f as h,k as d,m as C,a0 as x,E as S,T as w,b_ as $,b$ as T,l as B}from"./index.3d1c08e2.js";var V=f({name:"Eye",render(){return i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i("path",{d:"M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"32"}),i("circle",{cx:"256",cy:"256",r:"80",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"}))}}),R=u([u("@keyframes spin-rotate",`
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
 `,[m("rotate",`
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
 `,[m("spinning",`
 user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]);const E={small:20,medium:18,large:16},N=Object.assign(Object.assign({},h.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}});var W=f({name:"Spin",props:N,setup(t){const{mergedClsPrefixRef:a,inlineThemeDisabled:e}=k(t),s=h("Spin","-spin",R,$,t,a),c=d(()=>{const{size:n}=t,{common:{cubicBezierEaseInOut:r},self:p}=s.value,{opacitySpinning:v,color:y,textColor:g}=p,b=typeof n=="number"?T(n):p[B("size",n)];return{"--n-bezier":r,"--n-opacity-spinning":v,"--n-size":b,"--n-color":y,"--n-text-color":g}}),o=e?C("spin",d(()=>{const{size:n}=t;return typeof n=="number"?String(n):n[0]}),c,t):void 0;return{mergedClsPrefix:a,compitableShow:x(t,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=t;if(n!==void 0)return n;const{size:r}=t;return E[typeof r=="number"?"medium":r]}),cssVars:e?void 0:c,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var t,a;const{$slots:e,mergedClsPrefix:s,description:c}=this,o=e.icon&&this.rotate,n=(c||e.description)&&i("div",{class:`${s}-spin-description`},c||((t=e.description)===null||t===void 0?void 0:t.call(e))),r=e.icon?i("div",{class:[`${s}-spin-body`,this.themeClass]},i("div",{class:[`${s}-spin`,o&&`${s}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):i("div",{class:[`${s}-spin-body`,this.themeClass]},i(S,{clsPrefix:s,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${s}-spin`}),n);return(a=this.onRender)===null||a===void 0||a.call(this),e.default?i("div",{class:[`${s}-spin-container`,this.themeClass],style:this.cssVars},i("div",{class:[`${s}-spin-content`,this.compitableShow&&`${s}-spin-content--spinning`]},e),i(w,{name:"fade-in-transition"},{default:()=>this.compitableShow?r:null})):r}});export{V as E,W as N};
