import{e as S,h as o,c as h,a as y,d,b as _,P as U,u as D,B as j,l as N,f as T,p as H,af as k,n as M,g as V,be as W,H as P,bf as q,G as K,aq as O,K as G,a_ as J,bg as Z,J as Q,j as X,k as Y,bh as $,bi as ee,E as te}from"./index-df691239.js";import{u as ae}from"./use-merged-state-deff8ad5.js";import{C as re}from"./ChevronRight-c145cf11.js";const le=S({name:"ChevronLeft",render(){return o("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},o("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),oe=h("collapse","width: 100%;",[h("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[y("disabled",[d("header","cursor: not-allowed;",[d("header-main",`
 color: var(--n-title-text-color-disabled);
 `),h("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),h("collapse-item","margin-left: 32px;"),_("&:first-child","margin-top: 0;"),_("&:first-child >",[d("header","padding-top: 0;")]),y("left-arrow-placement",[d("header",[h("collapse-item-arrow","margin-right: 4px;")])]),y("right-arrow-placement",[d("header",[h("collapse-item-arrow","margin-left: 4px;")])]),d("content-wrapper",[d("content-inner","padding-top: 16px;"),U({duration:"0.15s"})]),y("active",[d("header",[y("active",[h("collapse-item-arrow","transform: rotate(90deg);")])])]),_("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),d("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 cursor: pointer;
 `,[d("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),d("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),h("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),ne=Object.assign(Object.assign({},T.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),A=V("n-collapse"),me=S({name:"Collapse",props:ne,setup(e,{slots:i}){const{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedRtlRef:c}=D(e),t=j(e.defaultExpandedNames),v=N(()=>e.expandedNames),u=ae(v,t),g=T("Collapse","-collapse",oe,W,e,n);function p(m){const{"onUpdate:expandedNames":a,onUpdateExpandedNames:f,onExpandedNamesChange:w}=e;f&&P(f,m),a&&P(a,m),w&&P(w,m),t.value=m}function s(m){const{onItemHeaderClick:a}=e;a&&P(a,m)}function l(m,a,f){const{accordion:w}=e,{value:R}=u;if(w)m?(p([a]),s({name:a,expanded:!0,event:f})):(p([]),s({name:a,expanded:!1,event:f}));else if(!Array.isArray(R))p([a]),s({name:a,expanded:!0,event:f});else{const x=R.slice(),I=x.findIndex(z=>a===z);~I?(x.splice(I,1),p(x),s({name:a,expanded:!1,event:f})):(x.push(a),p(x),s({name:a,expanded:!0,event:f}))}}H(A,{props:e,mergedClsPrefixRef:n,expandedNamesRef:u,slots:i,toggleItem:l});const b=k("Collapse",c,n),E=N(()=>{const{common:{cubicBezierEaseInOut:m},self:{titleFontWeight:a,dividerColor:f,titleTextColor:w,titleTextColorDisabled:R,textColor:x,arrowColor:I,fontSize:z,titleFontSize:B,arrowColorDisabled:F,itemMargin:L}}=g.value;return{"--n-font-size":z,"--n-bezier":m,"--n-text-color":x,"--n-divider-color":f,"--n-title-font-size":B,"--n-title-text-color":w,"--n-title-text-color-disabled":R,"--n-title-font-weight":a,"--n-arrow-color":I,"--n-arrow-color-disabled":F,"--n-item-margin":L}}),C=r?M("collapse",void 0,E,e):void 0;return{rtlEnabled:b,mergedTheme:g,mergedClsPrefix:n,cssVars:r?void 0:E,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),o("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),se=S({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:q(K(e,"show"))}},render(){return o(G,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:n,clsPrefix:r}=this,c=i==="show"&&n,t=o("div",{class:`${r}-collapse-item__content-wrapper`},o("div",{class:`${r}-collapse-item__content-inner`},this.$slots));return c?O(t,[[J,e]]):e?t:null}})}}),ie={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},fe=S({name:"CollapseItem",props:ie,setup(e){const{mergedRtlRef:i}=D(e),n=Z(),r=Q(()=>{var l;return(l=e.name)!==null&&l!==void 0?l:n}),c=X(A);c||Y("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:t,props:v,mergedClsPrefixRef:u,slots:g}=c,p=N(()=>{const{value:l}=t;if(Array.isArray(l)){const{value:b}=r;return!~l.findIndex(E=>E===b)}else if(l){const{value:b}=r;return b!==l}return!0});return{rtlEnabled:k("Collapse",i,u),collapseSlots:g,randomName:n,mergedClsPrefix:u,collapsed:p,mergedDisplayDirective:N(()=>{const{displayDirective:l}=e;return l||v.displayDirective}),arrowPlacement:N(()=>v.arrowPlacement),handleClick(l){c&&!e.disabled&&c.toggleItem(p.value,r.value,l)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:n,collapsed:r,mergedDisplayDirective:c,mergedClsPrefix:t,disabled:v}=this,u=$(i.header,{collapsed:r},()=>[this.title]),g=i["header-extra"]||e["header-extra"],p=i.arrow||e.arrow;return o("div",{class:[`${t}-collapse-item`,`${t}-collapse-item--${n}-arrow-placement`,v&&`${t}-collapse-item--disabled`,!r&&`${t}-collapse-item--active`]},o("div",{class:[`${t}-collapse-item__header`,!r&&`${t}-collapse-item__header--active`]},o("div",{class:`${t}-collapse-item__header-main`,onClick:this.handleClick},n==="right"&&u,o("div",{class:`${t}-collapse-item-arrow`,key:this.rtlEnabled?0:1},$(p,{collapsed:r},()=>{var s;return[o(te,{clsPrefix:t},{default:(s=e.expandIcon)!==null&&s!==void 0?s:()=>this.rtlEnabled?o(le,null):o(re,null)})]})),n==="left"&&u),ee(g,{collapsed:r},s=>o("div",{class:`${t}-collapse-item__header-extra`,onClick:this.handleClick},s))),o(se,{clsPrefix:t,displayDirective:c,show:!r},i))}});export{me as N,fe as a};
