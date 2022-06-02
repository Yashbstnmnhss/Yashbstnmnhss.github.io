import{c as k,o as p,b as h,n as r,d as b,p as x,q as $,bZ as y,l as S,H as w,h as m,K as z,aq as N,av as F,ar as P,ax as s,ay as a,b_ as E,au as o,ap as e,bc as R,at as _,as as l,aw as B,bh as g}from"./index.b8789f58.js";import{b as f}from"./route-block.b5bad31b.js";import{N as V}from"./blockquote.b8d19b67.js";import{N as T}from"./Space.bd69c057.js";var U=k("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[p("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[p("no-title",`
 display: flex;
 align-items: center;
 `)]),h("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),r("title-position-left",[h("line",[r("left",{width:"28px"})])]),r("title-position-right",[h("line",[r("right",{width:"28px"})])]),r("dashed",[h("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),r("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),h("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),p("dashed",[h("line",{backgroundColor:"var(--n-color)"})]),r("dashed",[h("line",{borderColor:"var(--n-color)"})]),r("vertical",{backgroundColor:"var(--n-color)"})]);const L=Object.assign(Object.assign({},$.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean});var O=b({name:"Divider",props:L,setup(u){const{mergedClsPrefixRef:n,inlineThemeDisabled:t}=x(u),c=$("Divider","-divider",U,y,u,n),v=S(()=>{const{common:{cubicBezierEaseInOut:i},self:{color:C,textColor:D,fontWeight:A}}=c.value;return{"--n-bezier":i,"--n-color":C,"--n-text-color":D,"--n-font-weight":A}}),d=t?w("divider",void 0,v,u):void 0;return{mergedClsPrefix:n,cssVars:t?void 0:v,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var u;const{$slots:n,titlePlacement:t,vertical:c,dashed:v,cssVars:d,mergedClsPrefix:i}=this;return(u=this.onRender)===null||u===void 0||u.call(this),m("div",{role:"separator",class:[`${i}-divider`,this.themeClass,{[`${i}-divider--vertical`]:c,[`${i}-divider--no-title`]:!n.default,[`${i}-divider--dashed`]:v,[`${i}-divider--title-position-${t}`]:n.default&&t}],style:d},c?null:m("div",{class:`${i}-divider__line ${i}-divider__line--left`}),!c&&n.default?m(z,null,m("div",{class:`${i}-divider__title`},this.$slots),m("div",{class:`${i}-divider__line ${i}-divider__line--right`})):null)}}),Z="./assets/diamond.f387760a.svg",j="./assets/caution-icon.cea6c0e4.svg",q="./assets/euclid-icon.4b217dc9.svg",H="./assets/vlam-icon.b154e5fb.svg";const M={class:"acs-container"},I={class:"number"},K={class:"text"},W=s("span",{class:"num"}," 277353 ",-1),G=s("div",{class:"bar"},[s("div",{class:"animamted-bar"}),s("div",{class:"animamted-bar"}),s("div",{class:"animamted-bar"})],-1),J={class:"level"},Q={class:"lvl"},X={class:"clearance"},Y=s("div",{class:"divider"},[s("div")],-1),ss={class:"class"},es={class:"container"},ts={class:"contain-class"},os={class:"class-category"},is={class:"class-text"},us={class:"class-icon"},ns={class:"disrupt"},as={class:"container"},ls={class:"contain-disrupt"},cs={class:"disrupt-text"},ds={class:"disrupt-category"},rs={class:"disrupt-icon"},_s={class:"risk"},hs={class:"container"},vs={class:"contain-risk"},ms={class:"risk-text"},Es={class:"risk-category"},ps={class:"risk-icon"},Bs={class:"diamond"},gs={class:"container"},bs=b({setup(u){const n=N();return(t,c)=>(F(),P("div",M,[s("div",I,[s("span",K,a(t.$t("components.ACSBar.number")),1),W]),G,s("div",J,[s("span",Q,a(t.$t("components.ACSBar.level")),1),s("span",X,a(t.$t("components.ACSBar.clearance")),1)]),Y,s("div",ss,[s("div",es,[s("div",ts,[s("div",os,a(t.$t("components.ACSBar.class-category")),1),s("div",is,a(t.$t("components.ACSBar.class-text")),1)]),s("div",us,[s("div",{class:"acs-icon",style:E("background: url("+o(q)+")")},null,4)])])]),s("div",ns,[s("div",as,[s("div",ls,[s("span",cs,[s("span",ds,a(t.$t("components.ACSBar.disrupt-category"))+"\u205F\u200A ",1),e(" "+a(t.$t("components.ACSBar.disrupt-text")),1)])]),s("div",rs,[s("div",{class:"acs-icon",style:E("background: url("+o(j)+")")},null,4)])])]),s("div",_s,[s("div",hs,[s("div",vs,[s("span",ms,[s("span",Es,a(t.$t("components.ACSBar.risk-category"))+"\u205F\u200A ",1),e(" "+a(t.$t("components.ACSBar.risk-text")),1)])]),s("div",ps,[s("div",{class:"acs-icon",style:E("background: url("+o(H)+")")},null,4)])])]),s("div",Bs,[s("div",gs,[s("div",{class:"diamond-icon",onDblclick:c[0]||(c[0]=v=>o(n).achieve("SCP")),style:E("background: url("+o(Z)+")")},null,36)])])]))}}),fs=e(' \u4E50\u5B50\u65D7\u5E1C\u6574\u4F53\u4E3A\u892A\u8272\u7684\u6DE1\u84DD\u8272, \u663E\u76EE\u7684"\u{1F602}"\u4E0E '),$s=e("F U Z E"),Fs=e('\u306E"F" '),Cs=s("em",null,[e('"\u4E00\u4E2A\u7531\u4E50\u5B50\u7EC4\u6210\u7684'),s("s",null,"\u53CD\u75AF\u5B50\u4E3B\u4E49"),e('\u8054\u76DF"')],-1),Ds=e(),As=s("br",null,null,-1),ks=s("strong",null,[s("mark",null,"\u4E8B\u5B9E\u4E0A!")],-1),xs=e(),ys=s("br",null,null,-1),Ss=s("mark",null,"\u4E50\u5B50\u8054\u76DF (\u4E50\u8054)",-1),ws=e(" \u4E00\u4E2A"),zs=s("em",null,"\u8D64\u88F8\u88F8\u306E",-1),Ns=s("strong",null,"\u4E50\u5B50",-1),Ps=e("\u8054\u76DF "),Rs=s("br",null,null,-1),Vs=s("strong",null,"The Union Of Laughing-Stocks (UL)",-1),Ts=e(),Us=s("br",null,null,-1),Ls=e(" \u5171\u67095\u540D"),Os=s("mark",null,"\u5E38\u4EFB\u6210\u5458",-1),Zs=e(" (\u5305\u62EC "),js=e("FUZE"),qs=e("), 1100\u591A\u540D\u666E\u901A\u6210\u5458\u7EC4\u6210 "),Hs=s("br",null,null,-1),Ms=e(" (\u4E8B\u5B9E\u4E0A \u666E\u901A\u6210\u5458\u6210\u5458\u6570\u91CF\u7684\u53D8\u5316"),Is=s("strong",null,"\u4E0D\u53EF\u6D4B\u91CF",-1),Ks=e(" \u8FD9\u91CC\u4E3A"),Ws=s("em",null,"\u6700\u5927\u503C",-1),Gs=e(") "),Js=s("br",null,null,-1),Qs=e(" \u73B0\u4EFB\u4E3B\u5E2D (\u4E50\u5B50\u59D4\u5458\u4F1A\u603B\u4E66\u8BB0): "),Xs=e("FUZE"),Ys=e(" \u8054\u76DF\u6761\u7EA6\u89C4\u5B9A: "),se=e(" \u8054\u76DF\u4E2D\u6210\u5458\u5982\u679C\u53D7\u5230\u4EFB\u4F55\u75AF\u5B50\u6216\u75AF\u5B50\u7EC4\u7EC7\u7684\u653B\u51FB, \u5176\u4ED6\u6210\u5458\u5FC5\u987B\u4E00\u4E00\u5207\u65B9\u5F0F\u5C3D\u53EF\u80FD\u7684\u7ED9\u4E88\u63F4\u52A9 "),ee=s("s",null,[e("\u8FD9\u4E5F\u5C31\u662F"),s("mark",null,"\u98CE\u9669\u7B49\u7EA7:\u9700\u8C28\u614E"),e("\u7684\u539F\u56E0 (\u5C3D\u7BA1, \u6211\u662F\u8BF4\u4E5F\u8BB8 \u4E5F\u8BB8\u5E76\u4E0D\u4F1A\u6709\u4EFB\u4F55\u4F24\u5BB3)")],-1),te=s("s",null,"\u6536\u5BB9\u5565\u5440 \u7B11\u5C31\u5B8C\u4E8B\u4E86\u{1F602}",-1),oe=b({setup(u){return(n,t)=>(F(),R(o(T),{vertical:"",justify:"center"},{default:_(()=>[l(o(B),{hoverable:""},{default:_(()=>[l(bs)]),_:1}),l(o(B),{title:"\u63CF\u8FF0",hoverable:""},{default:_(()=>[fs,l(o(g),{to:"/fuze"},{default:_(()=>[$s]),_:1}),Fs,Cs,Ds,As,ks,xs,ys,Ss,ws,zs,Ns,Ps,Rs,Vs,Ts,Us,Ls,Os,Zs,l(o(g),{to:"/fuze"},{default:_(()=>[js]),_:1}),qs,Hs,Ms,Is,Ks,Ws,Gs,Js,Qs,l(o(g),{to:"/fuze"},{default:_(()=>[Xs]),_:1}),l(o(O)),Ys,l(o(V),null,{default:_(()=>[se]),_:1}),ee]),_:1}),l(o(B),{title:"\u7279\u6B8A\u6536\u5BB9\u63AA\u65BD",hoverable:""},{default:_(()=>[te]),_:1})]),_:1}))}});typeof f=="function"&&f(oe);export{oe as default};
