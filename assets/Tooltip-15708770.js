import{af as ut,ah as K,bJ as dt,bK as ft,bI as ct,r as _,J as ht,v as Z,l as pe,x as U,am as oe,g as ee,ac as re,b2 as Bt,cq as It,aP as ve,cr as We,b9 as zt,w as ne,t as j,n as pt,p as x,b0 as vt,a$ as Dt,y as Lt,cs as ge,cf as me,ct as Nt,cu as Ft,cv as Ie,cw as Wt,cx as X,cd as gt,cy as ze,aY as Ht,cz as te,cA as mt,cB as _e,cC as He,cD as Kt,cE as Ke,cF as Xe,cG as de,cH as Xt,cI as Ye,ce as Yt,cJ as kt,cK as Gt,cL as Ut,cM as jt,cN as Vt,cO as Jt,c as H,a as N,a7 as be,d as ye,b as fe,cP as qt,u as wt,h as ie,B as bt,k as Q,m as Zt,T as Qt,ca as ke,cQ as Rt,aS as en,cR as tn,bp as Ge,b1 as nn,bq as Ue,aJ as $e,S as rn,bL as on,cS as je,cb as an,cT as sn,ao as ln,s as ae,cU as un}from"./index-02b03318.js";import{c as dn,a as se}from"./cssr-500da459.js";import{o as fn}from"./on-fonts-ready-ec5f85ee.js";import{f as xe}from"./format-length-c9d165c6.js";import{u as cn}from"./use-merged-state-34cdad4e.js";import{u as hn}from"./use-compitable-40d881de.js";let ce=[];const yt=new WeakMap;function pn(){ce.forEach(e=>e(...yt.get(e))),ce=[]}function vn(e,...t){yt.set(e,t),!ce.includes(e)&&ce.push(e)===1&&requestAnimationFrame(pn)}let Se;function gn(){return Se===void 0&&(Se=navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")),Se}const Ao=ut("n-internal-select-menu"),mn=ut("n-internal-select-menu-body"),$t="__disabled__";function R(e){const t=K(dt,null),n=K(ft,null),r=K(ct,null),i=K(mn,null),o=_();if(typeof document<"u"){o.value=document.fullscreenElement;const a=()=>{o.value=document.fullscreenElement};ht(()=>{Z("fullscreenchange",document,a)}),pe(()=>{U("fullscreenchange",document,a)})}return oe(()=>{var a;const{to:l}=e;return l!==void 0?l===!1?$t:l===!0?o.value||"body":l:t!=null&&t.value?(a=t.value.$el)!==null&&a!==void 0?a:t.value:n!=null&&n.value?n.value:r!=null&&r.value?r.value:i!=null&&i.value?i.value:l??(o.value||"body")})}R.tdkey=$t;R.propTo={type:[String,Object,Boolean],default:void 0};let W=null;function xt(){if(W===null&&(W=document.getElementById("v-binder-view-measurer"),W===null)){W=document.createElement("div"),W.id="v-binder-view-measurer";const{style:e}=W;e.position="fixed",e.left="0",e.right="0",e.top="0",e.bottom="0",e.pointerEvents="none",e.visibility="hidden",document.body.appendChild(W)}return W.getBoundingClientRect()}function wn(e,t){const n=xt();return{top:t,left:e,height:0,width:0,right:n.width-e,bottom:n.height-t}}function Me(e){const t=e.getBoundingClientRect(),n=xt();return{left:t.left-n.left,top:t.top-n.top,bottom:n.height+n.top-t.bottom,right:n.width+n.left-t.right,width:t.width,height:t.height}}function bn(e){return e.nodeType===9?null:e.parentNode}function St(e){if(e===null)return null;const t=bn(e);if(t===null)return null;if(t.nodeType===9)return document;if(t.nodeType===1){const{overflow:n,overflowX:r,overflowY:i}=getComputedStyle(t);if(/(auto|scroll|overlay)/.test(n+i+r))return t}return St(t)}const yn=ee({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(e){var t;re("VBinder",(t=Bt())===null||t===void 0?void 0:t.proxy);const n=K("VBinder",null),r=_(null),i=f=>{r.value=f,n&&e.syncTargetWithParent&&n.setTargetRef(f)};let o=[];const a=()=>{let f=r.value;for(;f=St(f),f!==null;)o.push(f);for(const $ of o)Z("scroll",$,w,!0)},l=()=>{for(const f of o)U("scroll",f,w,!0);o=[]},s=new Set,p=f=>{s.size===0&&a(),s.has(f)||s.add(f)},v=f=>{s.has(f)&&s.delete(f),s.size===0&&l()},w=()=>{vn(u)},u=()=>{s.forEach(f=>f())},h=new Set,g=f=>{h.size===0&&Z("resize",window,y),h.has(f)||h.add(f)},d=f=>{h.has(f)&&h.delete(f),h.size===0&&U("resize",window,y)},y=()=>{h.forEach(f=>f())};return pe(()=>{U("resize",window,y),l()}),{targetRef:r,setTargetRef:i,addScrollListener:p,removeScrollListener:v,addResizeListener:g,removeResizeListener:d}},render(){return It("binder",this.$slots)}}),$n=yn,xn=ee({name:"Target",setup(){const{setTargetRef:e,syncTarget:t}=K("VBinder");return{syncTarget:t,setTargetDirective:{mounted:e,updated:e}}},render(){const{syncTarget:e,setTargetDirective:t}=this;return e?ve(We("follower",this.$slots),[[t]]):We("follower",this.$slots)}}),q="@@mmoContext",Sn={mounted(e,{value:t}){e[q]={handler:void 0},typeof t=="function"&&(e[q].handler=t,Z("mousemoveoutside",e,t))},updated(e,{value:t}){const n=e[q];typeof t=="function"?n.handler?n.handler!==t&&(U("mousemoveoutside",e,n.handler),n.handler=t,Z("mousemoveoutside",e,t)):(e[q].handler=t,Z("mousemoveoutside",e,t)):n.handler&&(U("mousemoveoutside",e,n.handler),n.handler=void 0)},unmounted(e){const{handler:t}=e[q];t&&U("mousemoveoutside",e,t),e[q].handler=void 0}},Mn=Sn,le={top:"bottom",bottom:"top",left:"right",right:"left"},Ve={start:"end",center:"center",end:"start"},Oe={top:"height",bottom:"height",left:"width",right:"width"},On={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},An={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},Cn={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},Je={top:!0,bottom:!1,left:!0,right:!1},qe={top:"end",bottom:"start",left:"end",right:"start"};function _n(e,t,n,r,i,o){if(!i||o)return{placement:e,top:0,left:0};const[a,l]=e.split("-");let s=l??"center",p={top:0,left:0};const v=(h,g,d)=>{let y=0,f=0;const $=n[h]-t[g]-t[h];return $>0&&r&&(d?f=Je[g]?$:-$:y=Je[g]?$:-$),{left:y,top:f}},w=a==="left"||a==="right";if(s!=="center"){const h=Cn[e],g=le[h],d=Oe[h];if(n[d]>t[d]){if(t[h]+t[d]<n[d]){const y=(n[d]-t[d])/2;t[h]<y||t[g]<y?t[h]<t[g]?(s=Ve[l],p=v(d,g,w)):p=v(d,h,w):s="center"}}else n[d]<t[d]&&t[g]<0&&t[h]>t[g]&&(s=Ve[l])}else{const h=a==="bottom"||a==="top"?"left":"top",g=le[h],d=Oe[h],y=(n[d]-t[d])/2;(t[h]<y||t[g]<y)&&(t[h]>t[g]?(s=qe[h],p=v(d,h,w)):(s=qe[g],p=v(d,g,w)))}let u=a;return t[a]<n[Oe[a]]&&t[a]<t[le[a]]&&(u=le[a]),{placement:s!=="center"?`${u}-${s}`:u,left:p.left,top:p.top}}function En(e,t){return t?An[e]:On[e]}function Tn(e,t,n,r,i,o){if(o)switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"top-end":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%)"};case"right-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left)}px`,transform:""};case"left-end":return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left+n.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2)}px`,left:`${Math.round(n.left-t.left)}px`,transform:"translateY(-50%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height)}px`,left:`${Math.round(n.left-t.left+n.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(e){case"bottom-start":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:""};case"bottom-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:""};case"right-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(n.top-t.top+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+n.width+i)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(n.top-t.top+n.height/2+r)}px`,left:`${Math.round(n.left-t.left+i)}px`,transform:"translateY(-50%) translateX(-100%)"};case"bottom":default:return{top:`${Math.round(n.top-t.top+n.height+r)}px`,left:`${Math.round(n.left-t.left+n.width/2+i)}px`,transform:"translateX(-50%)"}}}const Pn=se([se(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),se(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[se("> *",{pointerEvents:"all"})])]),Bn=ee({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(e){const t=K("VBinder"),n=oe(()=>e.enabled!==void 0?e.enabled:e.show),r=_(null),i=_(null),o=()=>{const{syncTrigger:u}=e;u.includes("scroll")&&t.addScrollListener(s),u.includes("resize")&&t.addResizeListener(s)},a=()=>{t.removeScrollListener(s),t.removeResizeListener(s)};ht(()=>{n.value&&(s(),o())});const l=zt();Pn.mount({id:"vueuc/binder",head:!0,anchorMetaName:dn,ssr:l}),pe(()=>{a()}),fn(()=>{n.value&&s()});const s=()=>{if(!n.value)return;const u=r.value;if(u===null)return;const h=t.targetRef,{x:g,y:d,overlap:y}=e,f=g!==void 0&&d!==void 0?wn(g,d):Me(h);u.style.setProperty("--v-target-width",`${Math.round(f.width)}px`),u.style.setProperty("--v-target-height",`${Math.round(f.height)}px`);const{width:$,minWidth:I,placement:E,internalShift:T,flip:Y}=e;u.setAttribute("v-placement",E),y?u.setAttribute("v-overlap",""):u.removeAttribute("v-overlap");const{style:m}=u;$==="target"?m.width=`${f.width}px`:$!==void 0?m.width=$:m.width="",I==="target"?m.minWidth=`${f.width}px`:I!==void 0?m.minWidth=I:m.minWidth="";const O=Me(u),A=Me(i.value),{left:b,top:F,placement:z}=_n(E,f,O,T,Y,y),B=En(z,y),{left:k,top:c,transform:S}=Tn(z,A,f,F,b,y);u.setAttribute("v-placement",z),u.style.setProperty("--v-offset-left",`${Math.round(b)}px`),u.style.setProperty("--v-offset-top",`${Math.round(F)}px`),u.style.transform=`translateX(${k}) translateY(${c}) ${S}`,u.style.setProperty("--v-transform-origin",B),u.style.transformOrigin=B};ne(n,u=>{u?(o(),p()):a()});const p=()=>{Lt().then(s).catch(u=>console.error(u))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach(u=>{ne(j(e,u),s)}),["teleportDisabled"].forEach(u=>{ne(j(e,u),p)}),ne(j(e,"syncTrigger"),u=>{u.includes("resize")?t.addResizeListener(s):t.removeResizeListener(s),u.includes("scroll")?t.addScrollListener(s):t.removeScrollListener(s)});const v=pt(),w=oe(()=>{const{to:u}=e;if(u!==void 0)return u;v.value});return{VBinder:t,mergedEnabled:n,offsetContainerRef:i,followerRef:r,mergedTo:w,syncPosition:s}},render(){return x(Dt,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var e,t;const n=x("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[x("div",{class:"v-binder-follower-content",ref:"followerRef"},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e))]);return this.zindexable?ve(n,[[vt,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):n}})}});var In=ge(me,"WeakMap");const Ee=In;var zn=Nt(Object.keys,Object);const Dn=zn;var Ln=Object.prototype,Nn=Ln.hasOwnProperty;function Fn(e){if(!Ft(e))return Dn(e);var t=[];for(var n in Object(e))Nn.call(e,n)&&n!="constructor"&&t.push(n);return t}function De(e){return Ie(e)?Wt(e):Fn(e)}var Wn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hn=/^\w*$/;function Le(e,t){if(X(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||gt(e)?!0:Hn.test(e)||!Wn.test(e)||t!=null&&e in Object(t)}var Kn="Expected a function";function Ne(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Kn);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Ne.Cache||ze),n}Ne.Cache=ze;var Xn=500;function Yn(e){var t=Ne(e,function(r){return n.size===Xn&&n.clear(),r}),n=t.cache;return t}var kn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gn=/\\(\\)?/g,Un=Yn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(kn,function(n,r,i,o){t.push(i?o.replace(Gn,"$1"):r||n)}),t});const jn=Un;function Mt(e,t){return X(e)?e:Le(e,t)?[e]:jn(Ht(e))}var Vn=1/0;function we(e){if(typeof e=="string"||gt(e))return e;var t=e+"";return t=="0"&&1/e==-Vn?"-0":t}function Ot(e,t){t=Mt(t,e);for(var n=0,r=t.length;e!=null&&n<r;)e=e[we(t[n++])];return n&&n==r?e:void 0}function Jn(e,t,n){var r=e==null?void 0:Ot(e,t);return r===void 0?n:r}function qn(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}function Zn(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}function Qn(){return[]}var Rn=Object.prototype,er=Rn.propertyIsEnumerable,Ze=Object.getOwnPropertySymbols,tr=Ze?function(e){return e==null?[]:(e=Object(e),Zn(Ze(e),function(t){return er.call(e,t)}))}:Qn;const nr=tr;function rr(e,t,n){var r=t(e);return X(e)?r:qn(r,n(e))}function Qe(e){return rr(e,De,nr)}var or=ge(me,"DataView");const Te=or;var ir=ge(me,"Promise");const Pe=ir;var ar=ge(me,"Set");const Be=ar;var Re="[object Map]",sr="[object Object]",et="[object Promise]",tt="[object Set]",nt="[object WeakMap]",rt="[object DataView]",lr=te(Te),ur=te(_e),dr=te(Pe),fr=te(Be),cr=te(Ee),G=mt;(Te&&G(new Te(new ArrayBuffer(1)))!=rt||_e&&G(new _e)!=Re||Pe&&G(Pe.resolve())!=et||Be&&G(new Be)!=tt||Ee&&G(new Ee)!=nt)&&(G=function(e){var t=mt(e),n=t==sr?e.constructor:void 0,r=n?te(n):"";if(r)switch(r){case lr:return rt;case ur:return Re;case dr:return et;case fr:return tt;case cr:return nt}return t});const ot=G;var hr="__lodash_hash_undefined__";function pr(e){return this.__data__.set(e,hr),this}function vr(e){return this.__data__.has(e)}function he(e){var t=-1,n=e==null?0:e.length;for(this.__data__=new ze;++t<n;)this.add(e[t])}he.prototype.add=he.prototype.push=pr;he.prototype.has=vr;function gr(e,t){for(var n=-1,r=e==null?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}function mr(e,t){return e.has(t)}var wr=1,br=2;function At(e,t,n,r,i,o){var a=n&wr,l=e.length,s=t.length;if(l!=s&&!(a&&s>l))return!1;var p=o.get(e),v=o.get(t);if(p&&v)return p==t&&v==e;var w=-1,u=!0,h=n&br?new he:void 0;for(o.set(e,t),o.set(t,e);++w<l;){var g=e[w],d=t[w];if(r)var y=a?r(d,g,w,t,e,o):r(g,d,w,e,t,o);if(y!==void 0){if(y)continue;u=!1;break}if(h){if(!gr(t,function(f,$){if(!mr(h,$)&&(g===f||i(g,f,n,r,o)))return h.push($)})){u=!1;break}}else if(!(g===d||i(g,d,n,r,o))){u=!1;break}}return o.delete(e),o.delete(t),u}function yr(e){var t=-1,n=Array(e.size);return e.forEach(function(r,i){n[++t]=[i,r]}),n}function $r(e){var t=-1,n=Array(e.size);return e.forEach(function(r){n[++t]=r}),n}var xr=1,Sr=2,Mr="[object Boolean]",Or="[object Date]",Ar="[object Error]",Cr="[object Map]",_r="[object Number]",Er="[object RegExp]",Tr="[object Set]",Pr="[object String]",Br="[object Symbol]",Ir="[object ArrayBuffer]",zr="[object DataView]",it=He?He.prototype:void 0,Ae=it?it.valueOf:void 0;function Dr(e,t,n,r,i,o,a){switch(n){case zr:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case Ir:return!(e.byteLength!=t.byteLength||!o(new Ke(e),new Ke(t)));case Mr:case Or:case _r:return Kt(+e,+t);case Ar:return e.name==t.name&&e.message==t.message;case Er:case Pr:return e==t+"";case Cr:var l=yr;case Tr:var s=r&xr;if(l||(l=$r),e.size!=t.size&&!s)return!1;var p=a.get(e);if(p)return p==t;r|=Sr,a.set(e,t);var v=At(l(e),l(t),r,i,o,a);return a.delete(e),v;case Br:if(Ae)return Ae.call(e)==Ae.call(t)}return!1}var Lr=1,Nr=Object.prototype,Fr=Nr.hasOwnProperty;function Wr(e,t,n,r,i,o){var a=n&Lr,l=Qe(e),s=l.length,p=Qe(t),v=p.length;if(s!=v&&!a)return!1;for(var w=s;w--;){var u=l[w];if(!(a?u in t:Fr.call(t,u)))return!1}var h=o.get(e),g=o.get(t);if(h&&g)return h==t&&g==e;var d=!0;o.set(e,t),o.set(t,e);for(var y=a;++w<s;){u=l[w];var f=e[u],$=t[u];if(r)var I=a?r($,f,u,t,e,o):r(f,$,u,e,t,o);if(!(I===void 0?f===$||i(f,$,n,r,o):I)){d=!1;break}y||(y=u=="constructor")}if(d&&!y){var E=e.constructor,T=t.constructor;E!=T&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof T=="function"&&T instanceof T)&&(d=!1)}return o.delete(e),o.delete(t),d}var Hr=1,at="[object Arguments]",st="[object Array]",ue="[object Object]",Kr=Object.prototype,lt=Kr.hasOwnProperty;function Xr(e,t,n,r,i,o){var a=X(e),l=X(t),s=a?st:ot(e),p=l?st:ot(t);s=s==at?ue:s,p=p==at?ue:p;var v=s==ue,w=p==ue,u=s==p;if(u&&Xe(e)){if(!Xe(t))return!1;a=!0,v=!1}if(u&&!v)return o||(o=new de),a||Xt(e)?At(e,t,n,r,i,o):Dr(e,t,s,n,r,i,o);if(!(n&Hr)){var h=v&&lt.call(e,"__wrapped__"),g=w&&lt.call(t,"__wrapped__");if(h||g){var d=h?e.value():e,y=g?t.value():t;return o||(o=new de),i(d,y,n,r,o)}}return u?(o||(o=new de),Wr(e,t,n,r,i,o)):!1}function Fe(e,t,n,r,i){return e===t?!0:e==null||t==null||!Ye(e)&&!Ye(t)?e!==e&&t!==t:Xr(e,t,n,r,Fe,i)}var Yr=1,kr=2;function Gr(e,t,n,r){var i=n.length,o=i,a=!r;if(e==null)return!o;for(e=Object(e);i--;){var l=n[i];if(a&&l[2]?l[1]!==e[l[0]]:!(l[0]in e))return!1}for(;++i<o;){l=n[i];var s=l[0],p=e[s],v=l[1];if(a&&l[2]){if(p===void 0&&!(s in e))return!1}else{var w=new de;if(r)var u=r(p,v,s,e,t,w);if(!(u===void 0?Fe(v,p,Yr|kr,r,w):u))return!1}}return!0}function Ct(e){return e===e&&!Yt(e)}function Ur(e){for(var t=De(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,Ct(i)]}return t}function _t(e,t){return function(n){return n==null?!1:n[e]===t&&(t!==void 0||e in Object(n))}}function jr(e){var t=Ur(e);return t.length==1&&t[0][2]?_t(t[0][0],t[0][1]):function(n){return n===e||Gr(n,e,t)}}function Vr(e,t){return e!=null&&t in Object(e)}function Jr(e,t,n){t=Mt(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=we(t[r]);if(!(o=e!=null&&n(e,a)))break;e=e[a]}return o||++r!=i?o:(i=e==null?0:e.length,!!i&&kt(i)&&Gt(a,i)&&(X(e)||Ut(e)))}function qr(e,t){return e!=null&&Jr(e,t,Vr)}var Zr=1,Qr=2;function Rr(e,t){return Le(e)&&Ct(t)?_t(we(e),t):function(n){var r=Jn(n,e);return r===void 0&&r===t?qr(n,e):Fe(t,r,Zr|Qr)}}function eo(e){return function(t){return t==null?void 0:t[e]}}function to(e){return function(t){return Ot(t,e)}}function no(e){return Le(e)?eo(we(e)):to(e)}function ro(e){return typeof e=="function"?e:e==null?jt:typeof e=="object"?X(e)?Rr(e[0],e[1]):jr(e):no(e)}function oo(e,t){return e&&Vt(e,t,De)}function io(e,t){return function(n,r){if(n==null)return n;if(!Ie(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=Object(n);(t?o--:++o<i)&&r(a[o],o,a)!==!1;);return n}}var ao=io(oo);const so=ao;function lo(e,t){var n=-1,r=Ie(e)?Array(e.length):[];return so(e,function(i,o,a){r[++n]=t(i,o,a)}),r}function uo(e,t){var n=X(e)?Jt:lo;return n(e,ro(t))}const Ce={top:"bottom",bottom:"top",left:"right",right:"left"},M="var(--n-arrow-height) * 1.414",fo=H([N("popover",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `,[H(">",[N("scrollbar",`
 height: inherit;
 max-height: inherit;
 `)]),be("raw",`
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `,[be("scrollable",[be("show-header-or-footer","padding: var(--n-padding);")])]),ye("header",`
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),ye("footer",`
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `),fe("scrollable, show-header-or-footer",[ye("content",`
 padding: var(--n-padding);
 `)])]),N("popover-shared",`
 transform-origin: inherit;
 `,[N("popover-arrow-wrapper",`
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `,[N("popover-arrow",`
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${M});
 height: calc(${M});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),H("&.popover-transition-enter-from, &.popover-transition-leave-to",`
 opacity: 0;
 transform: scale(.85);
 `),H("&.popover-transition-enter-to, &.popover-transition-leave-from",`
 transform: scale(1);
 opacity: 1;
 `),H("&.popover-transition-enter-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),H("&.popover-transition-leave-active",`
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]),P("top-start",`
 top: calc(${M} / -2);
 left: calc(${L("top-start")} - var(--v-offset-left));
 `),P("top",`
 top: calc(${M} / -2);
 transform: translateX(calc(${M} / -2)) rotate(45deg);
 left: 50%;
 `),P("top-end",`
 top: calc(${M} / -2);
 right: calc(${L("top-end")} + var(--v-offset-left));
 `),P("bottom-start",`
 bottom: calc(${M} / -2);
 left: calc(${L("bottom-start")} - var(--v-offset-left));
 `),P("bottom",`
 bottom: calc(${M} / -2);
 transform: translateX(calc(${M} / -2)) rotate(45deg);
 left: 50%;
 `),P("bottom-end",`
 bottom: calc(${M} / -2);
 right: calc(${L("bottom-end")} + var(--v-offset-left));
 `),P("left-start",`
 left: calc(${M} / -2);
 top: calc(${L("left-start")} - var(--v-offset-top));
 `),P("left",`
 left: calc(${M} / -2);
 transform: translateY(calc(${M} / -2)) rotate(45deg);
 top: 50%;
 `),P("left-end",`
 left: calc(${M} / -2);
 bottom: calc(${L("left-end")} + var(--v-offset-top));
 `),P("right-start",`
 right: calc(${M} / -2);
 top: calc(${L("right-start")} - var(--v-offset-top));
 `),P("right",`
 right: calc(${M} / -2);
 transform: translateY(calc(${M} / -2)) rotate(45deg);
 top: 50%;
 `),P("right-end",`
 right: calc(${M} / -2);
 bottom: calc(${L("right-end")} + var(--v-offset-top));
 `),...uo({top:["right-start","left-start"],right:["top-end","bottom-end"],bottom:["right-end","left-end"],left:["top-start","bottom-start"]},(e,t)=>{const n=["right","left"].includes(t),r=n?"width":"height";return e.map(i=>{const o=i.split("-")[1]==="end",l=`calc((${`var(--v-target-${r}, 0px)`} - ${M}) / 2)`,s=L(i);return H(`[v-placement="${i}"] >`,[N("popover-shared",[fe("center-arrow",[N("popover-arrow",`${t}: calc(max(${l}, ${s}) ${o?"+":"-"} var(--v-offset-${n?"left":"top"}));`)])])])})})]);function L(e){return["top","bottom"].includes(e.split("-")[0])?"var(--n-arrow-offset)":"var(--n-arrow-offset-vertical)"}function P(e,t){const n=e.split("-")[0],r=["top","bottom"].includes(n)?"height: var(--n-space-arrow);":"width: var(--n-space-arrow);";return H(`[v-placement="${e}"] >`,[N("popover-shared",`
 margin-${Ce[n]}: var(--n-space);
 `,[fe("show-arrow",`
 margin-${Ce[n]}: var(--n-space-arrow);
 `),fe("overlap",`
 margin: 0;
 `),qt("popover-arrow-wrapper",`
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Ce[n]}: auto;
 ${r}
 `,[N("popover-arrow",t)])])])}const Et=Object.assign(Object.assign({},ie.props),{to:R.propTo,show:Boolean,trigger:String,showArrow:Boolean,delay:Number,duration:Number,raw:Boolean,arrowPointToCenter:Boolean,arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],displayDirective:String,x:Number,y:Number,flip:Boolean,overlap:Boolean,placement:String,width:[Number,String],keepAliveOnHover:Boolean,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],internalDeactivateImmediately:Boolean,animated:Boolean,onClickoutside:Function,internalTrapFocus:Boolean,internalOnAfterLeave:Function,minWidth:Number,maxWidth:Number}),co=({arrowClass:e,arrowStyle:t,arrowWrapperClass:n,arrowWrapperStyle:r,clsPrefix:i})=>x("div",{key:"__popover-arrow__",style:r,class:[`${i}-popover-arrow-wrapper`,n]},x("div",{class:[`${i}-popover-arrow`,e],style:t})),ho=ee({name:"PopoverBody",inheritAttrs:!1,props:Et,setup(e,{slots:t,attrs:n}){const{namespaceRef:r,mergedClsPrefixRef:i,inlineThemeDisabled:o}=wt(e),a=ie("Popover","-popover",fo,tn,e,i),l=_(null),s=K("NPopover"),p=_(null),v=_(e.show),w=_(!1);bt(()=>{const{show:m}=e;m&&!gn()&&!e.internalDeactivateImmediately&&(w.value=!0)});const u=Q(()=>{const{trigger:m,onClickoutside:O}=e,A=[],{positionManuallyRef:{value:b}}=s;return b||(m==="click"&&!O&&A.push([Ge,E,void 0,{capture:!0}]),m==="hover"&&A.push([Mn,I])),O&&A.push([Ge,E,void 0,{capture:!0}]),(e.displayDirective==="show"||e.animated&&w.value)&&A.push([nn,e.show]),A}),h=Q(()=>{const m=e.width==="trigger"?void 0:xe(e.width),O=[];m&&O.push({width:m});const{maxWidth:A,minWidth:b}=e;return A&&O.push({maxWidth:xe(A)}),b&&O.push({maxWidth:xe(b)}),o||O.push(g.value),O}),g=Q(()=>{const{common:{cubicBezierEaseInOut:m,cubicBezierEaseIn:O,cubicBezierEaseOut:A},self:{space:b,spaceArrow:F,padding:z,fontSize:B,textColor:k,dividerColor:c,color:S,boxShadow:C,borderRadius:V,arrowHeight:J,arrowOffset:D,arrowOffsetVertical:Pt}}=a.value;return{"--n-box-shadow":C,"--n-bezier":m,"--n-bezier-ease-in":O,"--n-bezier-ease-out":A,"--n-font-size":B,"--n-text-color":k,"--n-color":S,"--n-divider-color":c,"--n-border-radius":V,"--n-arrow-height":J,"--n-arrow-offset":D,"--n-arrow-offset-vertical":Pt,"--n-padding":z,"--n-space":b,"--n-space-arrow":F}}),d=o?Zt("popover",void 0,g,e):void 0;s.setBodyInstance({syncPosition:y}),pe(()=>{s.setBodyInstance(null)}),ne(j(e,"show"),m=>{e.animated||(m?v.value=!0:v.value=!1)});function y(){var m;(m=l.value)===null||m===void 0||m.syncPosition()}function f(m){e.trigger==="hover"&&e.keepAliveOnHover&&e.show&&s.handleMouseEnter(m)}function $(m){e.trigger==="hover"&&e.keepAliveOnHover&&s.handleMouseLeave(m)}function I(m){e.trigger==="hover"&&!T().contains(Ue(m))&&s.handleMouseMoveOutside(m)}function E(m){(e.trigger==="click"&&!T().contains(Ue(m))||e.onClickoutside)&&s.handleClickOutside(m)}function T(){return s.getTriggerElement()}re(ct,p),re(ft,null),re(dt,null);function Y(){if(d==null||d.onRender(),!(e.displayDirective==="show"||e.show||e.animated&&w.value))return null;let O;const A=s.internalRenderBodyRef.value,{value:b}=i;if(A)O=A([`${b}-popover-shared`,d==null?void 0:d.themeClass.value,e.overlap&&`${b}-popover-shared--overlap`,e.showArrow&&`${b}-popover-shared--show-arrow`,e.arrowPointToCenter&&`${b}-popover-shared--center-arrow`],p,h.value,f,$);else{const{value:F}=s.extraClassRef,{internalTrapFocus:z}=e,B=!ke(t.header)||!ke(t.footer),k=()=>{var c,S;const C=B?x(rn,null,$e(t.header,D=>D?x("div",{class:[`${b}-popover__header`,e.headerClass],style:e.headerStyle},D):null),$e(t.default,D=>D?x("div",{class:[`${b}-popover__content`,e.contentClass],style:e.contentStyle},t):null),$e(t.footer,D=>D?x("div",{class:[`${b}-popover__footer`,e.footerClass],style:e.footerStyle},D):null)):e.scrollable?(c=t.default)===null||c===void 0?void 0:c.call(t):x("div",{class:[`${b}-popover__content`,e.contentClass],style:e.contentStyle},t),V=e.scrollable?x(on,{contentClass:B?void 0:`${b}-popover__content ${(S=e.contentClass)!==null&&S!==void 0?S:""}`,contentStyle:B?void 0:e.contentStyle},{default:()=>C}):C,J=e.showArrow?co({arrowClass:e.arrowClass,arrowStyle:e.arrowStyle,arrowWrapperClass:e.arrowWrapperClass,arrowWrapperStyle:e.arrowWrapperStyle,clsPrefix:b}):null;return[V,J]};O=x("div",en({class:[`${b}-popover`,`${b}-popover-shared`,d==null?void 0:d.themeClass.value,F.map(c=>`${b}-${c}`),{[`${b}-popover--scrollable`]:e.scrollable,[`${b}-popover--show-header-or-footer`]:B,[`${b}-popover--raw`]:e.raw,[`${b}-popover-shared--overlap`]:e.overlap,[`${b}-popover-shared--show-arrow`]:e.showArrow,[`${b}-popover-shared--center-arrow`]:e.arrowPointToCenter}],ref:p,style:h.value,onKeydown:s.handleKeydown,onMouseenter:f,onMouseleave:$},n),z?x(Rt,{active:e.show,autoFocus:!0},{default:k}):k())}return ve(O,u.value)}return{displayed:w,namespace:r,isMounted:s.isMountedRef,zIndex:s.zIndexRef,followerRef:l,adjustedTo:R(e),followerEnabled:v,renderContentNode:Y}},render(){return x(Bn,{ref:"followerRef",zIndex:this.zIndex,show:this.show,enabled:this.followerEnabled,to:this.adjustedTo,x:this.x,y:this.y,flip:this.flip,placement:this.placement,containerClass:this.namespace,overlap:this.overlap,width:this.width==="trigger"?"target":void 0,teleportDisabled:this.adjustedTo===R.tdkey},{default:()=>this.animated?x(Qt,{name:"popover-transition",appear:this.isMounted,onEnter:()=>{this.followerEnabled=!0},onAfterLeave:()=>{var e;(e=this.internalOnAfterLeave)===null||e===void 0||e.call(this),this.followerEnabled=!1,this.displayed=!1}},{default:this.renderContentNode}):this.renderContentNode()})}}),po=Object.keys(Et),vo={focus:["onFocus","onBlur"],click:["onClick"],hover:["onMouseenter","onMouseleave"],manual:[],nested:["onFocus","onBlur","onMouseenter","onMouseleave","onClick"]};function go(e,t,n){vo[t].forEach(r=>{e.props?e.props=Object.assign({},e.props):e.props={};const i=e.props[r],o=n[r];i?e.props[r]=(...a)=>{i(...a),o(...a)}:e.props[r]=o})}const Tt={show:{type:Boolean,default:void 0},defaultShow:Boolean,showArrow:{type:Boolean,default:!0},trigger:{type:String,default:"hover"},delay:{type:Number,default:100},duration:{type:Number,default:100},raw:Boolean,placement:{type:String,default:"top"},x:Number,y:Number,arrowPointToCenter:Boolean,disabled:Boolean,getDisabled:Function,displayDirective:{type:String,default:"if"},arrowClass:String,arrowStyle:[String,Object],arrowWrapperClass:String,arrowWrapperStyle:[String,Object],flip:{type:Boolean,default:!0},animated:{type:Boolean,default:!0},width:{type:[Number,String],default:void 0},overlap:Boolean,keepAliveOnHover:{type:Boolean,default:!0},zIndex:Number,to:R.propTo,scrollable:Boolean,contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],footerClass:String,footerStyle:[Object,String],onClickoutside:Function,"onUpdate:show":[Function,Array],onUpdateShow:[Function,Array],internalDeactivateImmediately:Boolean,internalSyncTargetWithParent:Boolean,internalInheritedEventHandlers:{type:Array,default:()=>[]},internalTrapFocus:Boolean,internalExtraClass:{type:Array,default:()=>[]},onShow:[Function,Array],onHide:[Function,Array],arrow:{type:Boolean,default:void 0},minWidth:Number,maxWidth:Number},mo=Object.assign(Object.assign(Object.assign({},ie.props),Tt),{internalOnAfterLeave:Function,internalRenderBody:Function}),wo=ee({name:"Popover",inheritAttrs:!1,props:mo,__popover__:!0,setup(e){const t=pt(),n=_(null),r=Q(()=>e.show),i=_(e.defaultShow),o=cn(r,i),a=oe(()=>e.disabled?!1:o.value),l=()=>{if(e.disabled)return!0;const{getDisabled:c}=e;return!!(c!=null&&c())},s=()=>l()?!1:o.value,p=hn(e,["arrow","showArrow"]),v=Q(()=>e.overlap?!1:p.value);let w=null;const u=_(null),h=_(null),g=oe(()=>e.x!==void 0&&e.y!==void 0);function d(c){const{"onUpdate:show":S,onUpdateShow:C,onShow:V,onHide:J}=e;i.value=c,S&&ae(S,c),C&&ae(C,c),c&&V&&ae(V,!0),c&&J&&ae(J,!1)}function y(){w&&w.syncPosition()}function f(){const{value:c}=u;c&&(window.clearTimeout(c),u.value=null)}function $(){const{value:c}=h;c&&(window.clearTimeout(c),h.value=null)}function I(){const c=l();if(e.trigger==="focus"&&!c){if(s())return;d(!0)}}function E(){const c=l();if(e.trigger==="focus"&&!c){if(!s())return;d(!1)}}function T(){const c=l();if(e.trigger==="hover"&&!c){if($(),u.value!==null||s())return;const S=()=>{d(!0),u.value=null},{delay:C}=e;C===0?S():u.value=window.setTimeout(S,C)}}function Y(){const c=l();if(e.trigger==="hover"&&!c){if(f(),h.value!==null||!s())return;const S=()=>{d(!1),h.value=null},{duration:C}=e;C===0?S():h.value=window.setTimeout(S,C)}}function m(){Y()}function O(c){var S;s()&&(e.trigger==="click"&&(f(),$(),d(!1)),(S=e.onClickoutside)===null||S===void 0||S.call(e,c))}function A(){if(e.trigger==="click"&&!l()){f(),$();const c=!s();d(c)}}function b(c){e.internalTrapFocus&&c.key==="Escape"&&(f(),$(),d(!1))}function F(c){i.value=c}function z(){var c;return(c=n.value)===null||c===void 0?void 0:c.targetRef}function B(c){w=c}return re("NPopover",{getTriggerElement:z,handleKeydown:b,handleMouseEnter:T,handleMouseLeave:Y,handleClickOutside:O,handleMouseMoveOutside:m,setBodyInstance:B,positionManuallyRef:g,isMountedRef:t,zIndexRef:j(e,"zIndex"),extraClassRef:j(e,"internalExtraClass"),internalRenderBodyRef:j(e,"internalRenderBody")}),bt(()=>{o.value&&l()&&d(!1)}),{binderInstRef:n,positionManually:g,mergedShowConsideringDisabledProp:a,uncontrolledShow:i,mergedShowArrow:v,getMergedShow:s,setShow:F,handleClick:A,handleMouseEnter:T,handleMouseLeave:Y,handleFocus:I,handleBlur:E,syncPosition:y}},render(){var e;const{positionManually:t,$slots:n}=this;let r,i=!1;if(!t&&(n.activator?r=je(n,"activator"):r=je(n,"trigger"),r)){r=an(r),r=r.type===sn?x("span",[r]):r;const o={onClick:this.handleClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onFocus:this.handleFocus,onBlur:this.handleBlur};if(!((e=r.type)===null||e===void 0)&&e.__popover__)i=!0,r.props||(r.props={internalSyncTargetWithParent:!0,internalInheritedEventHandlers:[]}),r.props.internalSyncTargetWithParent=!0,r.props.internalInheritedEventHandlers?r.props.internalInheritedEventHandlers=[o,...r.props.internalInheritedEventHandlers]:r.props.internalInheritedEventHandlers=[o];else{const{internalInheritedEventHandlers:a}=this,l=[o,...a],s={onBlur:p=>{l.forEach(v=>{v.onBlur(p)})},onFocus:p=>{l.forEach(v=>{v.onFocus(p)})},onClick:p=>{l.forEach(v=>{v.onClick(p)})},onMouseenter:p=>{l.forEach(v=>{v.onMouseenter(p)})},onMouseleave:p=>{l.forEach(v=>{v.onMouseleave(p)})}};go(r,a?"nested":t?"manual":this.trigger,s)}}return x($n,{ref:"binderInstRef",syncTarget:!i,syncTargetWithParent:this.internalSyncTargetWithParent},{default:()=>{this.mergedShowConsideringDisabledProp;const o=this.getMergedShow();return[this.internalTrapFocus&&o?ve(x("div",{style:{position:"fixed",inset:0}}),[[vt,{enabled:o,zIndex:this.zIndex}]]):null,t?null:x(xn,null,{default:()=>r}),x(ho,ln(this.$props,po,Object.assign(Object.assign({},this.$attrs),{showArrow:this.mergedShowArrow,show:o})),{default:()=>{var a,l;return(l=(a=this.$slots).default)===null||l===void 0?void 0:l.call(a)},header:()=>{var a,l;return(l=(a=this.$slots).header)===null||l===void 0?void 0:l.call(a)},footer:()=>{var a,l;return(l=(a=this.$slots).footer)===null||l===void 0?void 0:l.call(a)}})]}})}}),bo=Object.assign(Object.assign({},Tt),ie.props),Co=ee({name:"Tooltip",props:bo,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=wt(e),n=ie("Tooltip","-tooltip",void 0,un,e,t),r=_(null);return Object.assign(Object.assign({},{syncPosition(){r.value.syncPosition()},setShow(o){r.value.setShow(o)}}),{popoverRef:r,mergedTheme:n,popoverThemeOverrides:Q(()=>n.value.self)})},render(){const{mergedTheme:e,internalExtraClass:t}=this;return x(wo,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat("tooltip"),ref:"popoverRef"}),this.$slots)}});export{Co as N,$n as V,xn as a,Bn as b,vn as c,mn as d,wo as e,Jn as g,Ao as i,Tt as p,co as r,R as u};