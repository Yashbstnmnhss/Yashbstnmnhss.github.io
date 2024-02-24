import{g as $,p as e,c as p,a as C,d as u,u as V,h as R,aI as E,k as I,m as T,a1 as M,b7 as O,F as S,G as F,H as y,L as N,M as l,P as i,O as c,V as j,X as D,b8 as L,Q as A,ak as G,a0 as Q}from"./index-02b03318.js";import{I as W}from"./render-b454fb41.js";import{N as P}from"./Icon-3d063091.js";import{N as X}from"./Flex-f1c125bd.js";import"./VolumeHighOutline-827aee9e.js";import"./Ellipsis-e87d892c.js";import"./Tooltip-15708770.js";import"./cssr-500da459.js";import"./on-fonts-ready-ec5f85ee.js";import"./format-length-c9d165c6.js";import"./use-merged-state-34cdad4e.js";import"./use-compitable-40d881de.js";import"./get-slot-1efb97e5.js";const q=$({name:"ArrowBack",render(){return e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e("path",{d:"M0 0h24v24H0V0z",fill:"none"}),e("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}}),J=p([C("page-header-header",`
 margin-bottom: 20px;
 `),C("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[u("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),u("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[p("&:hover","color: var(--n-back-color-hover);"),p("&:active","color: var(--n-back-color-pressed);")]),u("avatar",`
 display: flex;
 margin-right: 12px
 `),u("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),u("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),C("page-header-content",`
 font-size: var(--n-font-size);
 `,[p("&:not(:first-child)","margin-top: 20px;")]),C("page-header-footer",`
 font-size: var(--n-font-size);
 `,[p("&:not(:first-child)","margin-top: 20px;")])]),K=Object.assign(Object.assign({},R.props),{title:String,subtitle:String,extra:String,onBack:Function}),U=$({name:"PageHeader",props:K,setup(n){const{mergedClsPrefixRef:a,mergedRtlRef:o,inlineThemeDisabled:r}=V(n),h=R("PageHeader","-page-header",J,O,n,a),t=E("PageHeader",o,a),m=I(()=>{const{self:{titleTextColor:f,subtitleTextColor:g,backColor:v,fontSize:b,titleFontSize:k,backSize:d,titleFontWeight:x,backColorHover:w,backColorPressed:_},common:{cubicBezierEaseInOut:z}}=h.value;return{"--n-title-text-color":f,"--n-title-font-size":k,"--n-title-font-weight":x,"--n-font-size":b,"--n-back-size":d,"--n-subtitle-text-color":g,"--n-back-color":v,"--n-back-color-hover":w,"--n-back-color-pressed":_,"--n-bezier":z}}),s=r?T("page-header",void 0,m,n):void 0;return{rtlEnabled:t,mergedClsPrefix:a,cssVars:r?void 0:m,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var n;const{onBack:a,title:o,subtitle:r,extra:h,mergedClsPrefix:t,cssVars:m,$slots:s}=this;(n=this.onRender)===null||n===void 0||n.call(this);const{title:f,subtitle:g,extra:v,default:b,header:k,avatar:d,footer:x,back:w}=s,_=a,z=o||f,B=r||g,H=h||v;return e("div",{style:m,class:[`${t}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${t}-page-header-wrapper--rtl`]},k?e("div",{class:`${t}-page-header-header`,key:"breadcrumb"},k()):null,(_||d||z||B||H)&&e("div",{class:`${t}-page-header`,key:"header"},e("div",{class:`${t}-page-header__main`,key:"back"},_?e("div",{class:`${t}-page-header__back`,onClick:a},w?w():e(M,{clsPrefix:t},{default:()=>e(q,null)})):null,d?e("div",{class:`${t}-page-header__avatar`},d()):null,z?e("div",{class:`${t}-page-header__title`,key:"title"},o||f()):null,B?e("div",{class:`${t}-page-header__subtitle`,key:"subtitle"},r||g()):null),H?e("div",{class:`${t}-page-header__extra`},h||v()):null),b?e("div",{class:`${t}-page-header-content`,key:"content"},b()):null,x?e("div",{class:`${t}-page-header-footer`,key:"footer"},x()):null)}}),Y={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 512 512"},Z=y("path",{d:"M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z",fill:"none",stroke:"currentColor","stroke-miterlimit":"10","stroke-width":"32"},null,-1),ee=y("path",{d:"M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8c0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-21.24 8.46-47 25.8-47 74.67c0 53.33-11.54 61.46-27.87 80.8c-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313z",fill:"currentColor"},null,-1),te=y("path",{d:"M220.24 352a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 0 0-4-4.48z",fill:"currentColor"},null,-1),ae=[Z,ee,te],re=$({name:"NotificationsCircleOutline",render:function(a,o){return S(),F("svg",Y,ae)}}),ve=$({__name:"new",setup(n){return(a,o)=>(S(),N(i(X),{vertical:"",style:{margin:"0 0.5rem","padding-top":"0.5rem"}},{default:l(()=>[c(i(U),{onBack:o[1]||(o[1]=r=>a.$router.back())},{title:l(()=>{var r;return[j(D(a.$texta.get(["menus","new",((r=a.$route.name)==null?void 0:r.toString())??""])),1)]}),avatar:l(()=>[c(i(P),null,{default:l(()=>{var r;return[(S(),N(L(i(W)[((r=a.$route.meta.menu)==null?void 0:r.icon)??"book"])))]}),_:1})]),extra:l(()=>[c(i(A),{size:"small",onClick:o[0]||(o[0]=r=>a.$router.push("/jokes"))},{icon:l(()=>[c(i(P),null,{default:l(()=>[c(i(re))]),_:1})]),_:1})]),_:1}),c(i(Q),null,{default:l(()=>[c(G,{translate:""})]),_:1})]),_:1}))}});export{ve as default};
