import{k as u,a as l,bf as g,b as m,d as z,e as S,u as f,g as d,i as C,h as o,a$ as k,ak as x,by as $,aO as w,ap as R}from"./index-b648a77e.js";import{u as T}from"./use-compitable-9c2cf601.js";const B=u([u("@keyframes spin-rotate",`
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
 `,[g()])]),l("spin-body",`
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
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),N={small:20,medium:18,large:16},O=Object.assign(Object.assign({},f.props),{description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0}}),W=z({name:"Spin",props:O,setup(s){const{mergedClsPrefixRef:r,inlineThemeDisabled:e}=S(s),i=f("Spin","-spin",B,$,s,r),c=d(()=>{const{size:n}=s,{common:{cubicBezierEaseInOut:a},self:p}=i.value,{opacitySpinning:h,color:v,textColor:y}=p,b=typeof n=="number"?w(n):p[R("size",n)];return{"--n-bezier":a,"--n-opacity-spinning":h,"--n-size":b,"--n-color":v,"--n-text-color":y}}),t=e?C("spin",d(()=>{const{size:n}=s;return typeof n=="number"?String(n):n[0]}),c,s):void 0;return{mergedClsPrefix:r,compitableShow:T(s,["spinning","show"]),mergedStrokeWidth:d(()=>{const{strokeWidth:n}=s;if(n!==void 0)return n;const{size:a}=s;return N[typeof a=="number"?"medium":a]}),cssVars:e?void 0:c,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var s,r;const{$slots:e,mergedClsPrefix:i,description:c}=this,t=e.icon&&this.rotate,n=(c||e.description)&&o("div",{class:`${i}-spin-description`},c||((s=e.description)===null||s===void 0?void 0:s.call(e))),a=e.icon?o("div",{class:[`${i}-spin-body`,this.themeClass]},o("div",{class:[`${i}-spin`,t&&`${i}-spin--rotate`],style:e.default?"":this.cssVars},e.icon()),n):o("div",{class:[`${i}-spin-body`,this.themeClass]},o(k,{clsPrefix:i,style:e.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${i}-spin`}),n);return(r=this.onRender)===null||r===void 0||r.call(this),e.default?o("div",{class:[`${i}-spin-container`,this.themeClass],style:this.cssVars},o("div",{class:[`${i}-spin-content`,this.compitableShow&&`${i}-spin-content--spinning`]},e),o(x,{name:"fade-in-transition"},{default:()=>this.compitableShow?a:null})):a}});export{W as N};
