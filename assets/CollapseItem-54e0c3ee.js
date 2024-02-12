import{d as S,i as n,a as f,b as x,J as o,c as z,a9 as H,P as V,u as D,r as W,g as N,e as T,Z as K,aE as k,h as O,Y as q,bT as Z,a3 as P,bU as J,a2 as F,b0 as Y,a6 as G,b1 as Q,aa as X,a5 as ee,a1 as re,bP as ae,aP as A,bV as te,K as le}from"./index-1b78ee11.js";import{u as oe}from"./use-merged-state-7620cfe7.js";import{h as _,C as ne}from"./ChevronRight-daa07440.js";const se=S({name:"ChevronLeft",render(){return n("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),ie=f("collapse","width: 100%;",[f("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `,[x("disabled",[o("header","cursor: not-allowed;",[o("header-main",`
 color: var(--n-title-text-color-disabled);
 `),f("collapse-item-arrow",`
 color: var(--n-arrow-color-disabled);
 `)])]),f("collapse-item","margin-left: 32px;"),z("&:first-child","margin-top: 0;"),z("&:first-child >",[o("header","padding-top: 0;")]),x("left-arrow-placement",[o("header",[f("collapse-item-arrow","margin-right: 4px;")])]),x("right-arrow-placement",[o("header",[f("collapse-item-arrow","margin-left: 4px;")])]),o("content-wrapper",[o("content-inner","padding-top: 16px;"),H({duration:"0.15s"})]),x("active",[o("header",[x("active",[f("collapse-item-arrow","transform: rotate(90deg);")])])]),z("&:not(:first-child)","border-top: 1px solid var(--n-divider-color);"),V("disabled",[x("trigger-area-main",[o("header",[o("header-main","cursor: pointer;"),f("collapse-item-arrow","cursor: default;")])]),x("trigger-area-arrow",[o("header",[f("collapse-item-arrow","cursor: pointer;")])]),x("trigger-area-extra",[o("header",[o("header-extra","cursor: pointer;")])])]),o("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `,[o("header-main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),o("header-extra",`
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),f("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]),de=Object.assign(Object.assign({},T.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},triggerAreas:{type:Array,default:()=>["main","extra","arrow"]},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),U=q("n-collapse"),he=S({name:"Collapse",props:de,setup(e,{slots:i}){const{mergedClsPrefixRef:s,inlineThemeDisabled:l,mergedRtlRef:d}=D(e),a=W(e.defaultExpandedNames),h=N(()=>e.expandedNames),v=oe(h,a),w=T("Collapse","-collapse",ie,Z,e,s);function c(p){const{"onUpdate:expandedNames":t,onUpdateExpandedNames:m,onExpandedNamesChange:y}=e;m&&P(m,p),t&&P(t,p),y&&P(y,p),a.value=p}function g(p){const{onItemHeaderClick:t}=e;t&&P(t,p)}function r(p,t,m){const{accordion:y}=e,{value:R}=v;if(y)p?(c([t]),g({name:t,expanded:!0,event:m})):(c([]),g({name:t,expanded:!1,event:m}));else if(!Array.isArray(R))c([t]),g({name:t,expanded:!0,event:m});else{const C=R.slice(),I=C.findIndex($=>t===$);~I?(C.splice(I,1),c(C),g({name:t,expanded:!1,event:m})):(C.push(t),c(C),g({name:t,expanded:!0,event:m}))}}K(U,{props:e,mergedClsPrefixRef:s,expandedNamesRef:v,slots:i,toggleItem:r});const u=k("Collapse",d,s),E=N(()=>{const{common:{cubicBezierEaseInOut:p},self:{titleFontWeight:t,dividerColor:m,titlePadding:y,titleTextColor:R,titleTextColorDisabled:C,textColor:I,arrowColor:$,fontSize:B,titleFontSize:L,arrowColorDisabled:M,itemMargin:j}}=w.value;return{"--n-font-size":B,"--n-bezier":p,"--n-text-color":I,"--n-divider-color":m,"--n-title-padding":y,"--n-title-font-size":L,"--n-title-text-color":R,"--n-title-text-color-disabled":C,"--n-title-font-weight":t,"--n-arrow-color":$,"--n-arrow-color-disabled":M,"--n-item-margin":j}}),b=l?O("collapse",void 0,E,e):void 0;return{rtlEnabled:u,mergedTheme:w,mergedClsPrefix:s,cssVars:l?void 0:E,themeClass:b==null?void 0:b.themeClass,onRender:b==null?void 0:b.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),n("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ce=S({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:J(F(e,"show"))}},render(){return n(G,null,{default:()=>{const{show:e,displayDirective:i,onceTrue:s,clsPrefix:l}=this,d=i==="show"&&s,a=n("div",{class:`${l}-collapse-item__content-wrapper`},n("div",{class:`${l}-collapse-item__content-inner`},this.$slots));return d?Y(a,[[Q,e]]):e?a:null}})}}),pe={title:String,name:[String,Number],disabled:Boolean,displayDirective:String},ge=S({name:"CollapseItem",props:pe,setup(e){const{mergedRtlRef:i}=D(e),s=X(),l=ee(()=>{var r;return(r=e.name)!==null&&r!==void 0?r:s}),d=re(U);d||ae("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:a,props:h,mergedClsPrefixRef:v,slots:w}=d,c=N(()=>{const{value:r}=a;if(Array.isArray(r)){const{value:u}=l;return!~r.findIndex(E=>E===u)}else if(r){const{value:u}=l;return u!==r}return!0});return{rtlEnabled:k("Collapse",i,v),collapseSlots:w,randomName:s,mergedClsPrefix:v,collapsed:c,triggerAreas:F(h,"triggerAreas"),mergedDisplayDirective:N(()=>{const{displayDirective:r}=e;return r||h.displayDirective}),arrowPlacement:N(()=>h.arrowPlacement),handleClick(r){let u="main";_(r,"arrow")&&(u="arrow"),_(r,"extra")&&(u="extra"),h.triggerAreas.includes(u)&&d&&!e.disabled&&d.toggleItem(c.value,l.value,r)}}},render(){const{collapseSlots:e,$slots:i,arrowPlacement:s,collapsed:l,mergedDisplayDirective:d,mergedClsPrefix:a,disabled:h,triggerAreas:v}=this,w=A(i.header,{collapsed:l},()=>[this.title]),c=i["header-extra"]||e["header-extra"],g=i.arrow||e.arrow;return n("div",{class:[`${a}-collapse-item`,`${a}-collapse-item--${s}-arrow-placement`,h&&`${a}-collapse-item--disabled`,!l&&`${a}-collapse-item--active`,v.map(r=>`${a}-collapse-item--trigger-area-${r}`)]},n("div",{class:[`${a}-collapse-item__header`,!l&&`${a}-collapse-item__header--active`]},n("div",{class:`${a}-collapse-item__header-main`,onClick:this.handleClick},s==="right"&&w,n("div",{class:`${a}-collapse-item-arrow`,key:this.rtlEnabled?0:1,"data-arrow":!0},A(g,{collapsed:l},()=>{var r;return[n(le,{clsPrefix:a},{default:(r=e.expandIcon)!==null&&r!==void 0?r:()=>this.rtlEnabled?n(se,null):n(ne,null)})]})),s==="left"&&w),te(c,{collapsed:l},r=>n("div",{class:`${a}-collapse-item__header-extra`,onClick:this.handleClick,"data-extra":!0},r))),n(ce,{clsPrefix:a,displayDirective:d,show:!l},i))}});export{he as N,ge as a};
