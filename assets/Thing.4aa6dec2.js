import{X as r,Y as l,Z as h,b as s,E as _,F as v,g as $,$ as b,j as a,ah as w,bD as E}from"./index.30083524.js";var z=r("thing",`
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
 `)]),l("description",[h("&:not(:last-child)",`
 margin-bottom: 4px;
 `)]),l("content",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)]),l("footer",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)]),l("action",[h("&:not(:first-child)",`
 margin-top: 12px;
 `)])])]);const C=Object.assign(Object.assign({},v.props),{title:String,titleExtra:String,description:String,content:String,contentIndented:{type:Boolean,default:!1}});var T=s({name:"Thing",props:C,setup(t,{slots:e}){const{mergedClsPrefixRef:c,inlineThemeDisabled:g}=_(t),x=v("Thing","-thing",z,E,t,c),o=$(()=>{const{self:{titleTextColor:d,textColor:i,titleFontWeight:f,fontSize:u},common:{cubicBezierEaseInOut:m}}=x.value;return{"--n-bezier":m,"--n-font-size":u,"--n-text-color":i,"--n-title-font-weight":f,"--n-title-text-color":d}}),n=g?b("thing",void 0,o,t):void 0;return()=>{var d;const{value:i}=c;return(d=n==null?void 0:n.onRender)===null||d===void 0||d.call(n),a("div",{class:[`${i}-thing`,n==null?void 0:n.themeClass],style:g?void 0:o.value},e.avatar&&t.contentIndented?a("div",{class:`${i}-thing-avatar`},e.avatar()):null,a("div",{class:`${i}-thing-main`},!t.contentIndented&&(e.header||t.title||e["header-extra"]||t.titleExtra||e.avatar)?a("div",{class:`${i}-thing-avatar-header-wrapper`},e.avatar?a("div",{class:`${i}-thing-avatar`},e.avatar()):null,e.header||t.title||e["header-extra"]||t.titleExtra?a("div",{class:`${i}-thing-header-wrapper`},a("div",{class:`${i}-thing-header`},e.header||t.title?a("div",{class:`${i}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?a("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null),e.description||t.description?a("div",{class:`${i}-thing-main__description`},e.description?e.description():t.description):null):null):a(w,null,e.header||t.title||e["header-extra"]||t.titleExtra?a("div",{class:`${i}-thing-header`},e.header||t.title?a("div",{class:`${i}-thing-header__title`},e.header?e.header():t.title):null,e["header-extra"]||t.titleExtra?a("div",{class:`${i}-thing-header__extra`},e["header-extra"]?e["header-extra"]():t.titleExtra):null):null,e.description||t.description?a("div",{class:`${i}-thing-main__description`},e.description?e.description():t.description):null),e.default||t.content?a("div",{class:`${i}-thing-main__content`},e.default?e.default():t.content):null,e.footer?a("div",{class:`${i}-thing-main__footer`},e.footer()):null,e.action?a("div",{class:`${i}-thing-main__action`},e.action()):null))}}});export{T as N};
