var Ue=Object.defineProperty;var Oe=(r,i,o)=>i in r?Ue(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o;var E=(r,i,o)=>(Oe(r,typeof i!="symbol"?i+"":i,o),o);import{U as Ve,Q as B,I as _,T as R,J as w,aK as Fe,aL as He,a as F,u as te,c as Ke,b as G,a2 as Ce,a5 as We,e as Q,K as Te,h as N,a0 as ke,c4 as Ge,i as Ee,t as Re,c5 as Ye,aC as re,aD as oe,j as A,o as Xe,ai as Ze,c6 as qe,r as Y,s as Je,w as U,x as g,y as s,ap as H,D,E as u,N as le,aw as se,Z as X,bk as Z,c7 as Qe,$ as q,G as M,H as O,c8 as et,c9 as tt,F as h,ca as nt}from"./index-fe2ea4cb.js";import{I as ae}from"./render-0379db8a.js";import{N as ce,b as de}from"./headers-063f88e7.js";import{f as it}from"./format-length-c9d165c6.js";import{N as ue}from"./Space-510eabbf.js";import{N as J}from"./Scrollbar-b78655f3.js";import{N as rt}from"./text-b920c49c.js";import{N as ot}from"./Tag-25851762.js";import{N as K,a as lt}from"./Tabs-6c2616a1.js";import{N as st}from"./Table-5424b697.js";import{N as at}from"./Code-11b587b8.js";import{N as fe}from"./Thing-2dded871.js";import{N as ct}from"./Icon-1d1c28d3.js";import{b as me}from"./route-block-83d24a4e.js";import"./VolumeHighOutline-74e30393.js";import"./Ellipsis-bb9b6c2d.js";import"./Tooltip-e64a2d70.js";import"./Popover-595a4cc8.js";import"./cssr-c566339e.js";import"./on-fonts-ready-29317161.js";import"./use-merged-state-65a5f827.js";import"./use-compitable-d3ced092.js";import"./get-slot-1efb97e5.js";import"./throttle-5f3370c1.js";import"./toNumber-786b1bec.js";let pe=!1;function dt(){if(Ve&&window.CSS&&!pe&&(pe=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}const ut=B([_("list",`
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `,[R("show-divider",[_("list-item",[B("&:not(:last-child)",[w("divider",`
 background-color: var(--n-merged-border-color);
 `)])])]),R("clickable",[_("list-item",`
 cursor: pointer;
 `)]),R("bordered",`
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `),R("hoverable",[_("list-item",`
 border-radius: var(--n-border-radius);
 `,[B("&:hover",`
 background-color: var(--n-merged-color-hover);
 `,[w("divider",`
 background-color: transparent;
 `)])])]),R("bordered, hoverable",[_("list-item",`
 padding: 12px 20px;
 `),w("header, footer",`
 padding: 12px 20px;
 `)]),w("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[B("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),_("list-item",`
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[w("prefix",`
 margin-right: 20px;
 flex: 0;
 `),w("suffix",`
 margin-left: 20px;
 flex: 0;
 `),w("main",`
 flex: 1;
 `),w("divider",`
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]),Fe(_("list",`
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),He(_("list",`
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),ft=Object.assign(Object.assign({},G.props),{size:{type:String,default:"medium"},bordered:Boolean,clickable:Boolean,hoverable:Boolean,showDivider:{type:Boolean,default:!0}}),Be=ke("n-list"),he=F({name:"List",props:ft,setup(r){const{mergedClsPrefixRef:i,inlineThemeDisabled:o,mergedRtlRef:f}=te(r),a=Ke("List",f,i),b=G("List","-list",ut,Ge,r,i);Ce(Be,{showDividerRef:We(r,"showDivider"),mergedClsPrefixRef:i});const c=Q(()=>{const{common:{cubicBezierEaseInOut:p},self:{fontSize:$,textColor:C,color:t,colorModal:n,colorPopover:l,borderColor:e,borderColorModal:d,borderColorPopover:v,borderRadius:y,colorHover:T,colorHoverModal:z,colorHoverPopover:S}}=b.value;return{"--n-font-size":$,"--n-bezier":p,"--n-text-color":C,"--n-color":t,"--n-border-radius":y,"--n-border-color":e,"--n-border-color-modal":d,"--n-border-color-popover":v,"--n-color-modal":n,"--n-color-popover":l,"--n-color-hover":T,"--n-color-hover-modal":z,"--n-color-hover-popover":S}}),m=o?Te("list",void 0,c,r):void 0;return{mergedClsPrefix:i,rtlEnabled:a,cssVars:o?void 0:c,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender}},render(){var r;const{$slots:i,mergedClsPrefix:o,onRender:f}=this;return f==null||f(),N("ul",{class:[`${o}-list`,this.rtlEnabled&&`${o}-list--rtl`,this.bordered&&`${o}-list--bordered`,this.showDivider&&`${o}-list--show-divider`,this.hoverable&&`${o}-list--hoverable`,this.clickable&&`${o}-list--clickable`,this.themeClass],style:this.cssVars},i.header?N("div",{class:`${o}-list__header`},i.header()):null,(r=i.default)===null||r===void 0?void 0:r.call(i),i.footer?N("div",{class:`${o}-list__footer`},i.footer()):null)}}),ve=F({name:"ListItem",setup(){const r=Ee(Be,null);return r||Re("list-item","`n-list-item` must be placed in `n-list`."),{showDivider:r.showDividerRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){const{$slots:r,mergedClsPrefix:i}=this;return N("li",{class:`${i}-list-item`},r.prefix?N("div",{class:`${i}-list-item__prefix`},r.prefix()):null,r.default?N("div",{class:`${i}-list-item__main`},r):null,r.suffix?N("div",{class:`${i}-list-item__suffix`},r.suffix()):null,this.showDivider&&N("div",{class:`${i}-list-item__divider`}))}}),ge=1.25,mt=_("timeline",`
 position: relative;
 width: 100%;
 display: flex;
 flex-direction: column;
 line-height: ${ge};
`,[R("horizontal",`
 flex-direction: row;
 `,[B(">",[_("timeline-item",`
 flex-shrink: 0;
 padding-right: 40px;
 `,[R("dashed-line-type",[B(">",[_("timeline-item-timeline",[w("line",`
 background-image: linear-gradient(90deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 10px 1px;
 `)])])]),B(">",[_("timeline-item-content",`
 margin-top: calc(var(--n-icon-size) + 12px);
 `,[B(">",[w("meta",`
 margin-top: 6px;
 margin-bottom: unset;
 `)])]),_("timeline-item-timeline",`
 width: 100%;
 height: calc(var(--n-icon-size) + 12px);
 `,[w("line",`
 left: var(--n-icon-size);
 top: calc(var(--n-icon-size) / 2 - 1px);
 right: 0px;
 width: unset;
 height: 2px;
 `)])])])])]),R("right-placement",[_("timeline-item",[_("timeline-item-content",`
 text-align: right;
 margin-right: calc(var(--n-icon-size) + 12px);
 `),_("timeline-item-timeline",`
 width: var(--n-icon-size);
 right: 0;
 `)])]),R("left-placement",[_("timeline-item",[_("timeline-item-content",`
 margin-left: calc(var(--n-icon-size) + 12px);
 `),_("timeline-item-timeline",`
 left: 0;
 `)])]),_("timeline-item",`
 position: relative;
 `,[B("&:last-child",[_("timeline-item-timeline",[w("line",`
 display: none;
 `)]),_("timeline-item-content",[w("meta",`
 margin-bottom: 0;
 `)])]),_("timeline-item-content",[w("title",`
 margin: var(--n-title-margin);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),w("content",`
 transition: color .3s var(--n-bezier);
 font-size: var(--n-content-font-size);
 color: var(--n-content-text-color);
 `),w("meta",`
 transition: color .3s var(--n-bezier);
 font-size: 12px;
 margin-top: 6px;
 margin-bottom: 20px;
 color: var(--n-meta-text-color);
 `)]),R("dashed-line-type",[_("timeline-item-timeline",[w("line",`
 --n-color-start: var(--n-line-color);
 transition: --n-color-start .3s var(--n-bezier);
 background-color: transparent;
 background-image: linear-gradient(180deg, var(--n-color-start), var(--n-color-start) 50%, transparent 50%, transparent 100%);
 background-size: 1px 10px;
 `)])]),_("timeline-item-timeline",`
 width: calc(var(--n-icon-size) + 12px);
 position: absolute;
 top: calc(var(--n-title-font-size) * ${ge} / 2 - var(--n-icon-size) / 2);
 height: 100%;
 `,[w("circle",`
 border: var(--n-circle-border);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 border-radius: var(--n-icon-size);
 box-sizing: border-box;
 `),w("icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 display: flex;
 align-items: center;
 justify-content: center;
 `),w("line",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 top: var(--n-icon-size);
 left: calc(var(--n-icon-size) / 2 - 1px);
 bottom: 0px;
 width: 2px;
 background-color: var(--n-line-color);
 `)])])]),pt=Object.assign(Object.assign({},G.props),{horizontal:Boolean,itemPlacement:{type:String,default:"left"},size:{type:String,default:"medium"},iconSize:Number}),Pe=ke("n-timeline"),ht=F({name:"Timeline",props:pt,setup(r,{slots:i}){const{mergedClsPrefixRef:o}=te(r),f=G("Timeline","-timeline",mt,Ye,r,o);return Ce(Pe,{props:r,mergedThemeRef:f,mergedClsPrefixRef:o}),()=>{const{value:a}=o;return N("div",{class:[`${a}-timeline`,r.horizontal&&`${a}-timeline--horizontal`,`${a}-timeline--${r.size}-size`,!r.horizontal&&`${a}-timeline--${r.itemPlacement}-placement`]},i)}}}),vt={time:[String,Number],title:String,content:String,color:String,lineType:{type:String,default:"default"},type:{type:String,default:"default"}},x=F({name:"TimelineItem",props:vt,setup(r){const i=Ee(Pe);i||Re("timeline-item","`n-timeline-item` must be placed inside `n-timeline`."),dt();const{inlineThemeDisabled:o}=te(),f=Q(()=>{const{props:{size:b,iconSize:c},mergedThemeRef:m}=i,{type:p}=r,{self:{titleTextColor:$,contentTextColor:C,metaTextColor:t,lineColor:n,titleFontWeight:l,contentFontSize:e,[A("iconSize",b)]:d,[A("titleMargin",b)]:v,[A("titleFontSize",b)]:y,[A("circleBorder",p)]:T,[A("iconColor",p)]:z},common:{cubicBezierEaseInOut:S}}=m.value;return{"--n-bezier":S,"--n-circle-border":T,"--n-icon-color":z,"--n-content-font-size":e,"--n-content-text-color":C,"--n-line-color":n,"--n-meta-text-color":t,"--n-title-font-size":y,"--n-title-font-weight":l,"--n-title-margin":v,"--n-title-text-color":$,"--n-icon-size":it(c)||d}}),a=o?Te("timeline-item",Q(()=>{const{props:{size:b,iconSize:c}}=i,{type:m}=r;return`${b[0]}${c||"a"}${m[0]}`}),f,i.props):void 0;return{mergedClsPrefix:i.mergedClsPrefixRef,cssVars:o?void 0:f,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{mergedClsPrefix:r,color:i,onRender:o,$slots:f}=this;return o==null||o(),N("div",{class:[`${r}-timeline-item`,this.themeClass,`${r}-timeline-item--${this.type}-type`,`${r}-timeline-item--${this.lineType}-line-type`],style:this.cssVars},N("div",{class:`${r}-timeline-item-timeline`},N("div",{class:`${r}-timeline-item-timeline__line`}),re(f.icon,a=>a?N("div",{class:`${r}-timeline-item-timeline__icon`,style:{color:i}},a):N("div",{class:`${r}-timeline-item-timeline__circle`,style:{borderColor:i}}))),N("div",{class:`${r}-timeline-item-content`},re(f.header,a=>a||this.title?N("div",{class:`${r}-timeline-item-content__title`},a||this.title):null),N("div",{class:`${r}-timeline-item-content__content`},oe(f.default,()=>[this.content])),N("div",{class:`${r}-timeline-item-content__meta`},oe(f.footer,()=>[this.time]))))}});class P{}class Ie extends P{constructor(o){super();E(this,"type",0);this.body=o}}class De extends P{constructor(o,f=[]){super();E(this,"type",1);this.callee=o,this.args=f}}class W extends P{constructor(o){super();E(this,"type",2);this.elements=o}}class Me extends P{constructor(o){super();E(this,"type",3);this.elements=o}}class Le extends P{constructor(o){super();E(this,"type",4);this.value=o}}class je extends P{constructor(o){super();E(this,"type",5);this.value=o}}class Ae extends P{constructor(o){super();E(this,"type",6);this.value=o}}class V extends P{constructor(o){super();E(this,"type",7);this.value=o}}class ee extends P{constructor(){super();E(this,"type",8)}}class be extends Error{}class ye extends Error{}const _e=/[\(\)\[\]\{\}]/,gt={"(":0,")":1,"[":2,"]":3,"{":4,"}":5},xe=/\s/,bt=/[+\-.0-9]/,yt=/[0-9a-fox+\-.]/i,we=/["']/,_t=/\\/,ze=/#/,xt=/\n/;function wt(r){let i=0,o="",f=[];function a(){if(i++,i>=r.length)throw new be("Unexpected end of input");return o=r[i]}for(;i<r.length;){let b=function(c){return!xe.test(c)&&!_e.test(c)&&!ze.test(c)&&!we.test(c)};if(o=r[i],_e.test(o)){f.push({type:gt[o],value:o}),i++;continue}if(xe.test(o)){i++;continue}if(ze.test(o)){for(;!xt.test(o);)a();continue}if(bt.test(o)){let c="";for(;yt.test(o);)c+=o,a();const m=/^([+-]?[0-9]+(\.[0-9]+)?|\.[0-9]+)$/,p=/^[+-]?[0-9]+(\.[0-9]+)?e[+-]?[0-9]+$/,$=/^[+-]?0[xX][0-9a-fA-F]+$/,C=/^[+-]?0[oO][0-7]+$/,t=/^[+-]?0[bB][01]+$/;m.test(c)||p.test(c)||$.test(c)||C.test(c)||t.test(c)?f.push({type:7,value:c}):f.push({type:6,value:c});continue}if(we.test(o)){let c="",m=!1,p=o;for(a();!(o===p&&!m);)m&&(m=!1),_t.test(o)&&(m=!0),c+=o,a();a(),f.push({type:8,value:c});continue}if(b(o)){let c="";for(;b(o);)c+=o,a();const m=/^(true|false)$/,p=/^null$/;f.push({type:m.test(c)?9:p.test(c)?10:6,value:c});continue}throw new be(`Unexpected character: ${o}`)}return f}function zt(r){let i=0,o;function f(){if(i++,i>=r.length)throw new ye("Unexpected end of input");return r[i]}function a(c){if(c.type===7){let m=Number(c.value);return isNaN(m)?new V(c.value):new je(m)}if(c.type===8)return new Le(c.value);if(c.type===9)return new Ae(c.value==="true");if(c.type===10)return new ee;if(c.type===6)return new V(c.value);if(c.type===0){let m=a(f()),p=[],$=f();for(;$.type!==1;)p.push(a($)),$=f();return new De(m,p)}if(c.type===2){let m=[],p=f();for(;p.type!==3;)m.push(a(p)),p=f();return new W(m)}if(c.type===4){let m=[],p=f();for(;p.type!==5;)m.push(a(p)),p=f();m.length%2!==0&&m.push(new ee);let $=[];for(let C=0;C<m.length;C+=2)$.push([m[C],m[C+1]]);return new Me($)}throw new ye(`Unexpected token: ${c.value}`)}let b=[];for(;i<r.length;)o=r[i],b.push(a(o)),i++;return new Ie(b)}class ne{}class Ne extends ne{constructor(i){super(),this.label=i}}class $e extends ne{constructor(i){super(),this.label=i}}class Se extends ne{constructor(i){super(),this.value=i}}class L{constructor(i){E(this,"variables",{});this.parent=i}get(i){if(i in this.variables)return this.variables[i];if(this.parent)return this.parent.get(i)}set(i,o){this.variables[i]=o}}function Nt(r){const i=new L,o=(t,n,l)=>{let e=l.args;if(e.length===0)return()=>{};if(e.length===1)return(d,v,y)=>t(e[0],new L(v));if(e[0]instanceof W){if(e.length>2&&e[1]instanceof W){let v=t(e[0],n),y=t(e[1],n);return a((T,z,S,k)=>{let j=new L(z);v.forEach((I,ie)=>j.set(I,ie<k.length?k[ie]:void 0)),y.forEach(I=>j.set(I,n.get(I)??void 0));for(let I=1;I<e.length;I++)t(e[I],j)})}let d=t(e[0],n);return a((v,y,T,z)=>{let S=new L(y);d.forEach((k,j)=>S.set(k,j<z.length?z[j]:void 0));for(let k=1;k<e.length;k++)t(e[k],S)})}else return a((d,v,y,T)=>{let z=new L(v);e.forEach(S=>t(S,z))})},f={":":o,lambda:o,"+":b((t,n)=>t+n,t=>+t),"-":b((t,n)=>t-n,t=>-t),"*":b((t,n)=>t*n),"/":b((t,n)=>t/n),"%":b((t,n)=>t%n),"=":a((t,n,l,e)=>e.length===1?!0:e[0]===e[1]),"!=":a((t,n,l,e)=>e.length===1?!0:e[0]!==e[1]),">":a((t,n,l,e)=>e.length===1?!0:e[0]>e[1]),"<":a((t,n,l,e)=>e.length===1?!0:e[0]<e[1]),"<=":a((t,n,l,e)=>e.length===1?!0:e[0]<=e[1]),">=":a((t,n,l,e)=>e.length===1?!0:e[0]>=e[1]),not:a((t,n,l,e)=>!e[0]),and:b((t,n)=>t&&n),or:b((t,n)=>t||n),xor:b((t,n)=>t^n),"^":b((t,n)=>t^n),"&":b((t,n)=>t&n),"|":b((t,n)=>t|n),"~":a((t,n,l,e)=>~e[0]),print:a((t,n,l,e)=>console.log(...e)),get:a((t,n,l,e)=>{let d=e[0];return typeof d!="string"?d:C(d,n)}),set:a((t,n,l,e)=>{let d=e[0],v=e[1];if(typeof d!="string")return d;let y=d.split(".");if(y.length===1)n.set(d,v);else{let T=n.get(y[0]),z=T;for(let S=1;S<y.length;S++)S===y.length-1?z[y[S]]=v:z=z[y[S]];T[y[0]]=z}return v}),define:a((t,n,l,e)=>{if(!(e.length===0||typeof e[0]!="string")){if(e[0].startsWith("$"))throw new Error("Cannot define variable starts with $");return n.set(e[0],e[1]??void 0),e[1]}}),return:a((t,n,l,e)=>{throw new Se(String(e[0])??void 0)}),break:a((t,n,l,e)=>{throw new $e(String(e[0])??void 0)}),continue:a((t,n,l,e)=>{throw new Ne(String(e[0])??void 0)}),if:a((t,n,l,e)=>{if(e.length<2)return;let d=new L(n),v=!!c(e[0],t,d,l),y=e[1];if(v)return c(y,t,d,l);if(e.length>2)return c(e[2],t,d,l)}),for:a((t,n,l,e)=>{if(e.length<2)return;let d=new L(n),v=e[0],y=e[1],T=e[2]??void 0,z=0;for(let S in v){d.set("value",S),d.set("index",z);try{c(y,t,n,l)}catch(k){if(k instanceof $e&&k.label===T)break;if(k instanceof Ne&&k.label===T)continue}z++}return v})};function a(t){return(n,l,e)=>{if(!n||!l||!e)return;let d=(e.args??[]).map(v=>v instanceof V?$(v.value,l):p(v,l));t(n,l,e,d)}}function b(t,n){return a((l,e,d,v)=>{if(v.length===1)return n?n(v[0]):v[0];let y=v[0];for(let T=1;T<v.length;T++)y=t(y,v[T]);return y})}function c(t,n,l,e){return typeof t=="function"?t(n,l,e):t}const m={};for(let t in f)i.set(t,f[t]);for(let t in m)i.set(t,m[t]);function p(t,n=new L(i)){try{if(t instanceof Ie)for(let l=0;l<t.body.length;l++){let e=t.body[l],d=p(e,n);if(l===t.body.length-1)return d}else{if(t instanceof W)return t.elements.map(l=>p(l,n));if(t instanceof Me)return Object.fromEntries(t.elements.map(l=>l.map(e=>p(e,n))));if(t instanceof Le||t instanceof je||t instanceof Ae||t instanceof V)return t.value;if(t instanceof ee)return;if(t instanceof De){let l;if(t.callee instanceof V){let e=t.callee.value;e.startsWith("$")&&(e=e.slice(1));let d=C(e,n);if(!d||typeof d!="function")return d;l=d}else if(typeof t.callee=="function")l=t.callee;else{let e=p(t.callee,n);if(typeof e!="function")return e;l=e}return l(p,n,t)}}return}catch(l){if(l instanceof Se)return l.value;throw l}}function $(t,n){return t.startsWith("$")?C(t.slice(1),n):t}function C(t,n){let l=t.split(".");if(l.length===1)return n.get(l[0]);l.map(d=>d.startsWith("$")?n.get(d.slice(1))??d:d);let e=n.get(l[0]);for(let d=1;d<l.length;d++){if(typeof e!="object")return;e=e[l[d]]}return e}return p(r,i)}const $t=h("span",{style:{"font-size":"6vw","word-break":"break-all"}},"黑暗",-1),St=h("span",{style:{"font-size":"6vw","word-break":"break-all"}},"光明",-1),Ct=h("thead",null,[h("tr",null,[h("th",null,"名称"),h("th",null,"示例")])],-1),Tt=h("tbody",null,[h("tr",null,[h("td",null,"标识"),h("td",null,"除井号、括号、引号、空白的所有字符")]),h("tr",null,[h("td",null,"数字"),h("td",null,"-14.5 64e-5 .7159 0b1010 0xfff 0o777")]),h("tr",null,[h("td",null,"文字"),h("td",null,`"双引号字符串" '单引号字符串 \\n'`)]),h("tr",null,[h("td",null,"逻辑"),h("td",null,"true false")]),h("tr",null,[h("td",null,"列表"),h("td",null,"[中括号包裹 以空格分隔项 ...]")]),h("tr",null,[h("td",null,"字典"),h("td",null,"{ 键A 值A 键B 值B }")]),h("tr",null,[h("td",null,"空值"),h("td",null,"null")]),h("tr",null,[h("td",null,"调用"),h("td",null,"(函数名或可调用的值 参数...)")])],-1),kt={style:{overflow:"auto",padding:"12px"}},Et=F({__name:"props",setup(r){const i=Xe(),o=Ze(i),f=o.theme,a=o.achievements.value.map(n=>qe(n)),b=Y("default"),c=Y("default"),m=Y([]),p=n=>{f.value=n,$()},$=()=>{b.value=f.value===H.dark?"primary":"default",c.value=f.value===H.light?"primary":"default"};Je(()=>{$()});const C=new Date().getFullYear(),t="production";return Nt(zt(wt(`
(if false (: 
    (define a (: (print TheAFunction)))
    (a)
))
(print $a)
`))),(n,l)=>(D(),U(s(lt),{type:"line",animated:""},{default:g(()=>[u(s(K),{name:"设置"},{default:g(()=>[u(s(ue),{vertical:""},{default:g(()=>[u(s(le),{title:"主题",hoverable:""},{default:g(()=>[u(s(se),{onClick:l[0]||(l[0]=e=>p(s(H).dark)),type:b.value,style:{width:"50%",height:"20vh"}},{default:g(()=>[u(s(J),{"x-scrollable":""},{default:g(()=>[$t]),_:1})]),_:1},8,["type"]),u(s(se),{onClick:l[1]||(l[1]=e=>p(s(H).light)),type:c.value,style:{width:"50%",height:"20vh"}},{default:g(()=>[u(s(J),{"x-scrollable":""},{default:g(()=>[St]),_:1})]),_:1},8,["type"])]),_:1}),u(s(le),{title:"数据包",hoverable:""},{default:g(()=>[u(s(he),{hoverable:"",bordered:""},{default:g(()=>[(D(!0),X(q,null,Z(Object.keys(s(Qe)()),(e,d)=>(D(),U(s(ve),{key:d},{default:g(()=>[u(s(fe),{title:e},{"header-extra":g(()=>[M(O(d),1)]),_:2},1032,["title"])]),_:2},1024))),128))]),_:1})]),_:1}),u(s(ue),{align:"center",justify:"center"},{default:g(()=>[u(s(rt),{depth:"3"},{default:g(()=>[M(O(`${s(et)}-${s(tt)}`)+" · Vue框架 · 2022-"+O(s(C)),1)]),_:1}),u(s(ot),{type:s(t)==="production"?"primary":"warning"},{default:g(()=>[M(O(s(t)),1)]),_:1},8,["type"])]),_:1})]),_:1})]),_:1}),u(s(K),{name:"成就"},{default:g(()=>[u(s(J),{"x-scrollable":"",trigger:"none"},{default:g(()=>[u(s(he),{hoverable:"",clickable:""},{default:g(()=>[(D(!0),X(q,null,Z(s(a),(e,d)=>(D(),U(s(ve),{key:d},{default:g(()=>[u(s(fe),{"content-style":"margin-top: 10px;",title:n.$texta.get(`achievements.${(e==null?void 0:e.title)||"unknownTitle"}`),description:n.$texta.get(`achievements.${(e==null?void 0:e.description)||"unknownDescription"}`)},{"header-extra":g(()=>[M(O(n.$texta.get(["views","jokes","props","achievements",(e==null?void 0:e.type)||"undefined"])),1)]),avatar:g(()=>[u(s(ct),{size:"50",color:(e==null?void 0:e.type)==="fantastic"?"orange":"rgb(36,204,255)"},{default:g(()=>[(D(),U(nt(s(ae)[e&&e.icon&&e.icon in s(ae)?e.icon:"medal"])))]),_:2},1032,["color"])]),_:2},1032,["title","description"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),u(s(K),{name:"指南"},{default:g(()=>[u(s(ce),null,{default:g(()=>[M("Kuo 括")]),_:1}),u(s(de),null,{default:g(()=>[M("基本要素")]),_:1}),u(s(st),null,{default:g(()=>[Ct,Tt]),_:1}),u(s(de),null,{default:g(()=>[M("示例")]),_:1}),u(s(at),{language:"kuo","word-wrap":"",code:`
(set a 1) # 声明a=1
(print $a) # $a是(get a)的语法糖 

(define my-function (: [x] (+ x 1))) 
'定义函数 define与set不同点是 define在全局作用域 而set在本地作用域'
'(:) 函数是(lambda)的别名 第一个参数可为列表或不填 传入需要捕获的参数名称'
'其余参数为函数体内容 默认返回最后一个表达式的结果'

(my-function 2) # 可直接调用 无需$或(get) 返回3

# 也可以使用(return value)函数在特定地方返回结果

# 一个字典
(set dict {
    a 1
    b 2
    c   # 不填为null
})
(set $dict.c 2) # 现在dict.c=2

# 同样该语法糖作用于列表 
(set list [1 2])
(set $list.0 0) # 列表:[0 2]

# 支持动态名称
(set name a)
(get $dict.$name) # (get $dict.a) => 1
`},null,8,["code"])]),_:1}),u(s(K),{name:"后记"},{default:g(()=>[u(s(ce),null,{default:g(()=>[M("大 时 间 线")]),_:1}),h("div",kt,[u(s(ht),null,{default:g(()=>[u(s(x),{type:"info","line-type":"dashed",title:"换群",content:"仙人掌保护协会被封了",time:"2021/3/11"}),u(s(x),{type:"info","line-type":"dashed",title:"Discord",content:"最初账号",time:"2021/10/28"}),u(s(x),{type:"info","line-type":"dashed",title:"日炎",content:"问世",time:"2021/10/31"}),u(s(x),{type:"info","line-type":"dashed",title:"开始卖惨",content:"与柯莱首条Discord",time:"2022/1/28 20:01"}),u(s(x),{type:"info","line-type":"dashed",title:"《广义相遇论》",content:"出版印刷",time:"2022/1/29 19:02:25"}),u(s(x),{type:"success",title:"出生了",content:"第三版大图书馆",time:"2022/4/1"}),u(s(x),{type:"info",title:"亻寸氵睾",content:"灵魂完工了",time:"2022/4/20"}),u(s(x),{type:"info",title:"格拉迪斯与柯莱",content:"新增俩卖惨乐子",time:"2022/5/4"}),u(s(x),{type:"info",title:"大更新一",content:"更新了一堆(我也不知道具体是啥)",time:"2022/6/14"}),u(s(x),{type:"info",title:"大更新二",content:"更新了114514个(日志这么写的..)",time:"2022/7/8"}),u(s(x),{type:"error",title:"亻寸氵睾的消失",content:"FUZE在此彻底失联",time:"2022/7/16 16:25"}),u(s(x),{type:"warning",title:"提问",content:"这日志的意义是啥呢.",time:"2022/7/26"}),u(s(x),{type:"info",title:"大更新三",content:"个口,神女,联合国!",time:"2022/8/3"}),u(s(x),{type:"error",title:"三年的句号",content:"与三年告个别吧",time:"2022/9/1"}),u(s(x),{type:"info",title:"大更新四",content:"扁平化喽",time:"2022/10/9"}),u(s(x),{type:"info",title:"大更新五",content:"如你所见..",time:"2022/11/?"}),u(s(x),{type:"error",title:"最后的卖惨",content:"与柯莱维持了小一年后彻底断绝",time:"2022/12/12"}),u(s(x),{type:"info",title:"大更新六",content:"凹冈嗖浪",time:"2022/12/13"}),u(s(x),{type:"info",title:"大更新",content:"很多",time:"2023/5/7"}),(D(!0),X(q,null,Z(m.value,e=>(D(),U(s(x),{type:e.type,"line-type":e.dashed?"dashed":"default",title:e.title,content:e.text,time:e.time},null,8,["type","line-type","title","content","time"]))),256))]),_:1})])]),_:1})]),_:1}))}});typeof me=="function"&&me(Et);export{Et as default};
