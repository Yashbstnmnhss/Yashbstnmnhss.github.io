import{j as o,c as v,a2 as U,d as V,b as g,f as Z,u as q,y as c,aT as X,K as y,a3 as Y,m as x,bZ as K,a4 as T,z as G,P as J,a8 as Q,an as W,ap as ee,X as oe,Y as ne,bs as te,b_ as re,am as ae,b8 as se}from"./index.d6438343.js";import{u as le}from"./cssr.1b746292.js";import{f as C}from"./format-length.7f3135aa.js";function ie(e){return e.nodeType===9?null:e.parentNode}function k(e){if(e===null)return null;const n=ie(e);if(n===null)return null;if(n.nodeType===9)return document.documentElement;if(n.nodeType===1){const{overflow:f,overflowX:d,overflowY:l}=getComputedStyle(n);if(/(auto|scroll|overlay)/.test(f+l+d))return n}return k(n)}function ce(e){return typeof e=="string"?document.querySelector(e):typeof e=="function"?e():e}function S(e){return e.nodeName==="#document"}const de=o("svg",{viewBox:"0 0 24 24",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xlinkHref:"http://www.w3.org/1999/xlink"},o("g",{stroke:"none","stroke-width":"1","fill-rule":"evenodd"},o("g",{transform:"translate(-139.000000, -4423.000000)","fill-rule":"nonzero"},o("g",{transform:"translate(120.000000, 4285.000000)"},o("g",{transform:"translate(7.000000, 126.000000)"},o("g",{transform:"translate(24.000000, 24.000000) scale(1, -1) translate(-24.000000, -24.000000) translate(12.000000, 12.000000)"},o("g",{transform:"translate(4.000000, 2.000000)"},o("path",{d:"M8,0 C8.51283584,0 8.93550716,0.38604019 8.99327227,0.883378875 L9,1 L9,10.584 L12.2928932,7.29289322 C12.6834175,6.90236893 13.3165825,6.90236893 13.7071068,7.29289322 C14.0675907,7.65337718 14.0953203,8.22060824 13.7902954,8.61289944 L13.7071068,8.70710678 L8.70710678,13.7071068 L8.62544899,13.7803112 L8.618,13.784 L8.59530661,13.8036654 L8.4840621,13.8753288 L8.37133602,13.9287745 L8.22929083,13.9735893 L8.14346259,13.9897165 L8.03324678,13.9994506 L7.9137692,13.9962979 L7.77070917,13.9735893 L7.6583843,13.9401293 L7.57677845,13.9063266 L7.47929125,13.8540045 L7.4048407,13.8036865 L7.38131006,13.7856883 C7.35030318,13.7612383 7.32077858,13.7349921 7.29289322,13.7071068 L2.29289322,8.70710678 L2.20970461,8.61289944 C1.90467972,8.22060824 1.93240926,7.65337718 2.29289322,7.29289322 C2.65337718,6.93240926 3.22060824,6.90467972 3.61289944,7.20970461 L3.70710678,7.29289322 L7,10.585 L7,1 L7.00672773,0.883378875 C7.06449284,0.38604019 7.48716416,0 8,0 Z"}),o("path",{d:"M14.9333333,15.9994506 C15.5224371,15.9994506 16,16.4471659 16,16.9994506 C16,17.5122865 15.5882238,17.9349578 15.0577292,17.9927229 L14.9333333,17.9994506 L1.06666667,17.9994506 C0.477562934,17.9994506 0,17.5517354 0,16.9994506 C0,16.4866148 0.411776203,16.0639435 0.9422708,16.0061783 L1.06666667,15.9994506 L14.9333333,15.9994506 Z"})))))))),ue=v("back-top",`
 position: fixed;
 right: 40px;
 bottom: 40px;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 height: var(--n-height);
 min-width: var(--n-width);
 box-shadow: var(--n-box-shadow);
 background-color: var(--n-color);
`,[U(),V("transition-disabled",{transition:"none !important"}),v("base-icon",`
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),g("svg",{pointerEvents:"none"}),g("&:hover",{boxShadow:"var(--n-box-shadow-hover)"},[v("base-icon",{color:"var(--n-icon-color-hover)"})]),g("&:active",{boxShadow:"var(--n-box-shadow-pressed)"},[v("base-icon",{color:"var(--n-icon-color-pressed)"})])]),fe=Object.assign(Object.assign({},T.props),{show:{type:Boolean,default:void 0},right:{type:[Number,String],default:40},bottom:{type:[Number,String],default:40},to:{type:[String,Object],default:"body"},visibilityHeight:{type:Number,default:180},listenTo:[String,Object,Function],"onUpdate:show":{type:Function,default:()=>{}},target:Function,onShow:Function,onHide:Function}),be=Z({name:"BackTop",inheritAttrs:!1,props:fe,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:f}=q(e),d=c(null),l=c(!1);X(()=>{const{value:r}=d;if(r===null){l.value=!1;return}l.value=r>=e.visibilityHeight});const u=c(!1);y(l,r=>{var t;u.value&&((t=e["onUpdate:show"])===null||t===void 0||t.call(e,r))});const R=Y(e,"show"),m=le(R,l),b=c(!0),w=c(null),E=x(()=>({right:`calc(${C(e.right)} + ${K.value})`,bottom:C(e.bottom)}));let s,p;y(m,r=>{var t,a;u.value&&(r&&((t=e.onShow)===null||t===void 0||t.call(e)),(a=e.onHide)===null||a===void 0||a.call(e))});const z=T("BackTop","-back-top",ue,re,e,n);function P(){var r;if(p)return;p=!0;const t=((r=e.target)===null||r===void 0?void 0:r.call(e))||ce(e.listenTo)||k(w.value);if(!t)return;s=t===document.documentElement?document:t;const{to:a}=e;typeof a=="string"&&document.querySelector(a),s.addEventListener("scroll",h),h()}function B(){(S(s)?document.documentElement:s).scrollTo({top:0,behavior:"smooth"})}function h(){d.value=(S(s)?document.documentElement:s).scrollTop,u.value||ae(()=>{u.value=!0})}function N(){b.value=!1}G(()=>{P(),b.value=m.value}),J(()=>{s&&s.removeEventListener("scroll",h)});const L=x(()=>{const{self:{color:r,boxShadow:t,boxShadowHover:a,boxShadowPressed:H,iconColor:M,iconColorHover:D,iconColorPressed:$,width:j,height:I,iconSize:_,borderRadius:F,textColor:O},common:{cubicBezierEaseInOut:A}}=z.value;return{"--n-bezier":A,"--n-border-radius":F,"--n-height":I,"--n-width":j,"--n-box-shadow":t,"--n-box-shadow-hover":a,"--n-box-shadow-pressed":H,"--n-color":r,"--n-icon-size":_,"--n-icon-color":M,"--n-icon-color-hover":D,"--n-icon-color-pressed":$,"--n-text-color":O}}),i=f?Q("back-top",void 0,L,e):void 0;return{placeholderRef:w,style:E,mergedShow:m,isMounted:W(),scrollElement:c(null),scrollTop:d,DomInfoReady:u,transitionDisabled:b,mergedClsPrefix:n,handleAfterEnter:N,handleScroll:h,handleClick:B,cssVars:f?void 0:L,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){const{mergedClsPrefix:e}=this;return o("div",{ref:"placeholderRef",class:`${e}-back-top-placeholder`,style:"display: none","aria-hidden":!0},o(ee,{to:this.to,show:this.mergedShow},{default:()=>o(oe,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterEnter:this.handleAfterEnter},{default:()=>{var n;return(n=this.onRender)===null||n===void 0||n.call(this),this.mergedShow?o("div",ne(this.$attrs,{class:[`${e}-back-top`,this.themeClass,this.transitionDisabled&&`${e}-back-top--transition-disabled`],style:[this.style,this.cssVars],onClick:this.handleClick}),te(this.$slots.default,()=>[o(se,{clsPrefix:e},{default:()=>de})])):null}})}))}});export{be as N,ce as u};
