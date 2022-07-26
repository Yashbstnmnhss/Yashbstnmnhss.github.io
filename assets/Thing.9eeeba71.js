import{e as r,f as l,g as c,d as _,u as s,i as v,m as $,p as b,h as n,Q as w,bW as E}from"./index.42e4af0f.js";var z=r("thing",`
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`,[r("thing-avatar",`
 margin-right: 12px;
 margin-top: 2px;
 `),r("thing-avatar-header-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 `,[r("thing-header-wrapper",`
 flex: 1;
 `)]),r("thing-main",`
 flex-grow: 1;
 `,[r("thing-header",`
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `,[l("title",`
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]),l("description",[c("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),l("content",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),l("footer",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)]),l("action",[c("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const C=Object.assign(Object.assign({},v.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var T=_({name:"Thing",props:C,setup(t,{slots:e}){const{mergedClsPrefixRef:h,inlineThemeDisabled:g}=s(t),x=v("Thing","-thing",z,E,t,h),o=$(()=>{const{self:{titleTextColor:d,textColor:i,titleFontWeight:f,fontSize:u},common:{cubicBezierEaseInOut:m}}=x.value;return{"--n-bezier":m,"--n-font-size":u,"--n-text-color":i,"--n-title-font-weight":f,"--n-title-text-color":d}}),a=g?b("thing",void 0,o,t):void 0;return()=>{var d;const{value:i}=h;return(d=a==null?void 0:a.onRender)===null||d===void 0||d.call(a),n("div",{class:[`${i}-thing`,a==null?void 0:a.themeClass],style:g?void 0:o.value},e.avatar&&t.contentIndented?n("div",{class:`${i}-thing-avatar`},e.avatar()):null,n("div",{class:`${i}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?n("div",{class:`${i}-thing-avatar-header-wrapper`},e.avatar?n("div",{class:`${i}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?n("div",{class:`${i}-thing-header-wrapper`},n("div",{class:`${i}-thing-header`},e.header||t.title?n("div",{class:`${i}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?n("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?n("div",{class:`${i}-thing-main__description`},e.description?e.description():t.description):null):null):n(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?n("div",{class:`${i}-thing-header`},e.header||t.title?n("div",{class:`${i}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?n("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?n("div",{class:`${i}-thing-main__description`},e.description?e.description():t.description):null),e.default||t.content?n("div",{class:`${i}-thing-main__content`},e.default?e.default():t.content):null,e.footer?n("div",{class:`${i}-thing-main__footer`},e.footer()):null,e.action?n("div",{class:`${i}-thing-main__action`},e.action()):null))}}});export{T as N};
