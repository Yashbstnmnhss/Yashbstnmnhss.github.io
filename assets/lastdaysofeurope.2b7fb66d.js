import{d as R,h as i,c as h,e as N,b as f,q as k,Z as re,u as V,x as I,k as S,P as te,f as B,C as q,ar as Z,m as X,H as Y,c9 as oe,S as L,ca as ae,v as le,b5 as se,X as ne,b2 as ie,bs as de,n as ce,i as G,bV as J,N as pe,bD as ue,bE as me,cb as fe,a8 as ve,o as he,am as F,a4 as U,ae as w,ad as y,af as b,O as M,a3 as j,ag as ge,ah as A,ai as $,ac as K,cc as xe,bH as be,a5 as P}from"./index.e161c063.js";import{C as O,a as Ce,N as we,E as ye}from"./services.417bd92d.js";import{b as W}from"./route-block.b5bad31b.js";import{C as Ne}from"./ChevronRight.bc4c998a.js";import{u as Ee}from"./use-message.bcace669.js";import{N as Re}from"./headers.5547f39b.js";import{N as _e}from"./BackTop.5515f35f.js";import{N as ze}from"./Space.eda3ed4f.js";import"./use-locale.7cdd9ea7.js";import"./format-length.7f3135aa.js";var Ie=R({name:"ChevronLeft",render(){return i("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},i("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),Se=h("collapse",{width:"100%"},[h("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[h("collapse-item","margin-left: 32px;"),N("&:first-child",{marginTop:0}),N("&:first-child >",[f("header",{paddingTop:0})]),k("left-arrow-placement",[f("header",[h("collapse-item-arrow",{marginRight:"4px"})])]),k("right-arrow-placement",[f("header",[h("collapse-item-arrow",{marginLeft:"4px"})])]),f("content-wrapper",[f("content-inner",{paddingTop:"16px"}),re({duration:"0.15s"})]),k("active",[f("header",[k("active",[h("collapse-item-arrow",{transform:"rotate(90deg)"})])])]),N("&:not(:first-child)",{borderTop:"1px solid var(--n-divider-color)"}),f("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 `,[f("header-main",`
 cursor: pointer;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),f("header-extra",`
 cursor: pointer;
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
 `)])])]);const $e=Object.assign(Object.assign({},B.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),Q=Y("n-collapse");var Pe=R({name:"Collapse",props:$e,setup(e,{slots:r}){const{mergedClsPrefixRef:a,inlineThemeDisabled:s,mergedRtlRef:d}=V(e),o=I(e.defaultExpandedNames),l=S(()=>e.expandedNames),m=te(l,o),g=B("Collapse","-collapse",Se,oe,e,a);function n(v){const{"onUpdate:expandedNames":p,onUpdateExpandedNames:x,onExpandedNamesChange:z}=e;x&&L(x,v),p&&L(p,v),z&&L(z,v),o.value=v}function c(v){const{onItemHeaderClick:p}=e;p&&L(p,v)}function t(v,p,x){const{accordion:z}=e,{value:T}=m;if(z)v?(n([p]),c({name:p,expanded:!0,event:x})):(n([]),c({name:p,expanded:!1,event:x}));else if(!Array.isArray(T))n([p]),c({name:p,expanded:!0,event:x});else{const E=T.slice(),D=E.findIndex(H=>p===H);~D?(E.splice(D,1),n(E),c({name:p,expanded:!1,event:x})):(E.push(p),n(E),c({name:p,expanded:!0,event:x}))}}q(Q,{props:e,mergedClsPrefixRef:a,expandedNamesRef:m,slots:r,toggleItem:t});const u=Z("Collapse",d,a),_=S(()=>{const{common:{cubicBezierEaseInOut:v},self:{titleFontWeight:p,dividerColor:x,titleTextColor:z,textColor:T,arrowColor:E,fontSize:D,titleFontSize:H}}=g.value;return{"--n-font-size":D,"--n-bezier":v,"--n-text-color":T,"--n-divider-color":x,"--n-title-font-size":H,"--n-title-text-color":z,"--n-title-font-weight":p,"--n-arrow-color":E}}),C=s?X("collapse",void 0,_,e):void 0;return{rtlEnabled:u,mergedTheme:g,mergedClsPrefix:a,cssVars:s?void 0:_,themeClass:C==null?void 0:C.themeClass,onRender:C==null?void 0:C.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),i("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),ke=R({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:ae(le(e,"show"))}},render(){return i(ne,null,{default:()=>{const{show:e,displayDirective:r,onceTrue:a,clsPrefix:s}=this,d=r==="show"&&a,o=i("div",{class:`${s}-collapse-item__content-wrapper`},i("div",{class:`${s}-collapse-item__content-inner`},this.$slots));return d?se(o,[[ie,e]]):e?o:null}})}});const Te={title:String,name:[String,Number],displayDirective:String};var De=R({name:"CollapseItem",props:Te,setup(e){const{mergedRtlRef:r}=V(e),a=de(),s=ce(()=>{var t;return(t=e.name)!==null&&t!==void 0?t:a}),d=G(Q);d||J("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:o,props:l,mergedClsPrefixRef:m,slots:g}=d,n=S(()=>{const{value:t}=o;if(Array.isArray(t)){const{value:u}=s;return!~t.findIndex(_=>_===u)}else if(t){const{value:u}=s;return u!==t}return!0});return{rtlEnabled:Z("Collapse",r,m),collapseSlots:g,randomName:a,mergedClsPrefix:m,collapsed:n,mergedDisplayDirective:S(()=>{const{displayDirective:t}=e;return t||l.displayDirective}),arrowPlacement:S(()=>l.arrowPlacement),handleClick(t){d&&d.toggleItem(n.value,s.value,t)}}},render(){var e;const{collapseSlots:r,$slots:a,arrowPlacement:s,collapsed:d,mergedDisplayDirective:o,mergedClsPrefix:l}=this,m=a.header?a.header():this.title,g=a["header-extra"]||r["header-extra"],n=a.arrow||r.arrow;return i("div",{class:[`${l}-collapse-item`,`${l}-collapse-item--${s}-arrow-placement`,!d&&`${l}-collapse-item--active`]},i("div",{class:[`${l}-collapse-item__header`,!d&&`${l}-collapse-item__header--active`]},i("div",{class:`${l}-collapse-item__header-main`,onClick:this.handleClick},s==="right"&&m,i("div",{class:`${l}-collapse-item-arrow`,key:this.rtlEnabled?0:1},n?n({collapsed:d}):i(pe,{clsPrefix:l},{default:(e=r.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?i(Ie,null):i(Ne,null)})),s==="left"&&m),g&&i("div",{class:`${l}-collapse-item__header-extra`,onClick:this.handleClick},{default:g})),i(ke,{clsPrefix:l,displayDirective:o,show:!d},a))}}),Le=N([h("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color)
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[k("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[h("list-item",`
 padding: 12px 20px;
 `,[N("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),f("header, footer",`
 padding: 12px 20px;
 `,[N("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),f("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[N("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),h("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[f("prefix",`
 margin-right: 20px;
 flex: 0;
 `),f("suffix",`
 margin-left: 20px;
 flex: 0;
 `),f("main",`
 flex: 1;
 `),N("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),ue(h("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),me(h("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const je=Object.assign(Object.assign({},B.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),ee=Y("n-list");var Be=R({name:"List",props:je,setup(e){const{mergedClsPrefixRef:r,inlineThemeDisabled:a}=V(e),s=B("List","-list",Le,fe,e,r);q(ee,{mergedClsPrefixRef:r});const d=S(()=>{const{common:{cubicBezierEaseInOut:l},self:{fontSize:m,textColor:g,color:n,colorModal:c,colorPopover:t,borderColor:u,borderColorModal:_,borderColorPopover:C,borderRadius:v}}=s.value;return{"--n-font-size":m,"--n-bezier":l,"--n-text-color":g,"--n-color":n,"--n-border-radius":v,"--n-border-color":u,"--n-border-color-modal":_,"--n-border-color-popover":C,"--n-color-modal":c,"--n-color-popover":t}}),o=a?X("list",void 0,d,e):void 0;return{mergedClsPrefix:r,cssVars:a?void 0:d,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var e;const{$slots:r,mergedClsPrefix:a,onRender:s}=this;return s==null||s(),i("ul",{class:[`${a}-list`,this.bordered&&`${a}-list--bordered`,this.themeClass],style:this.cssVars},r.header?i("div",{class:`${a}-list__header`},r.header()):null,(e=r.default)===null||e===void 0?void 0:e.call(r),r.footer?i("div",{class:`${a}-list__footer`},r.footer()):null)}}),Ae=R({name:"ListItem",setup(){const e=G(ee,null);return e||J("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:r}=this;return i("li",{class:`${r}-list-item`},e.prefix?i("div",{class:`${r}-list-item__prefix`},e.prefix()):null,e.default?i("div",{class:`${r}-list-item__main`},e):null,e.suffix?i("div",{class:`${r}-list-item__suffix`},e.suffix()):null)}});const He=A("Last Days Of Europe"),Oe={class:"bslang-emoji"},Ve=A(" - "),Fe=A(" - "),Ue=R({setup(e){const r=Ee(),a=ve(),s=I(!1),d=I([]),o=I(""),l=I(!1),m=I(),g=()=>{if(m.value=void 0,!l.value){if(!o.value){m.value="warning";return}o.value=o.value.trim(),l.value=!0;var n=/^\/delete \'(.+)\'/,c=n.exec(o.value);if(n.test(o.value)&&c){F.log("deleting comment",c[1]),O.delete(c[1]).then(()=>{r.success(a.t("comment.delete.success")),o.value=""}).catch(u=>{r.error(u)}).finally(()=>{l.value=!1});return}var t="unknown";ye.getIp().then(u=>{t=u.data.pro}).catch(()=>{t="UNKNOWN"}),O.postNew({content:o.value,time:new Date,ip:t}).then(()=>{o.value="",l.value=!1,r.success(a.t("views.jokes.lastdaysofeurope.post-success"))}).catch(u=>{m.value="error",l.value=!1,r.error(`THE END IS NEVER ${u.message}`)})}};return he(()=>{s.value=!0,O.getAll().then(n=>{var c=n.data;d.value=c,s.value=!1}).catch(n=>{r.error(n),F.error("[lastdaysofeurope]",n),s.value=!1})}),(n,c)=>(j(),U(M,null,[w(b(Re),{prefix:"bar"},{default:y(()=>[He]),_:1}),w(b(Pe),{"arrow-placement":"right"},{default:y(()=>[w(b(De),{title:n.$t("views.jokes.lastdaysofeurope.post-title")},{default:y(()=>[w(b(ze),{vertical:"",class:"bslang-emoji"},{default:y(()=>[w(b(we),{status:m.value,disabled:l.value,value:o.value,"onUpdate:value":c[0]||(c[0]=t=>o.value=t),type:"textarea",autosize:{minRows:3},maxlength:"200","show-count":"",placeholder:"THE NEW ORDER..."},null,8,["status","disabled","value"]),w(b(ge),{type:"primary",ghost:"",onClick:c[1]||(c[1]=t=>g()),loading:l.value},{default:y(()=>[A($(n.$t("views.jokes.lastdaysofeurope.post-button")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1}),w(b(Ce),{size:"large",show:s.value},{default:y(()=>[d.value&&d.value.length>0?(j(),K(b(Be),{key:0},{default:y(()=>[(j(!0),U(M,null,xe(d.value,t=>(j(),K(b(Ae),{key:t.id},{default:y(()=>{var u;return[P("p",Oe,$(t.content||"THE NEW ORDER - LAST DAYS OF EUROPE"),1),P("small",null,[P("span",null,$(t.ip||"Kaedehara Kazuha"),1),Ve,P("span",null,$(((u=t.time)==null?void 0:u.toLocaleString())||"Hu Tao"),1),Fe,P("span",null,$(t.id),1)])]}),_:2},1024))),128))]),_:1})):be("",!0)]),_:1},8,["show"]),w(b(_e))],64))}});typeof W=="function"&&W(Ue);export{Ue as default};
