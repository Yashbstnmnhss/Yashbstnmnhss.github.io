import{e as a,v as d,g as e,t as o,f as s,d as f,u as b,bc as p,E as g,bd as h,ar as m,h as $}from"./index.cd407dcc.js";const t="0!important",u="-1px!important";function i(r){return o(r+"-type",[e("& +",[a("button",{},[o(r+"-type",[s("border",{borderLeftWidth:t}),s("state-border",{left:u})])])])])}function n(r){return o(r+"-type",[e("& +",[a("button",[o(r+"-type",[s("border",{borderTopWidth:t}),s("state-border",{top:u})])])])])}var v=a("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[d("vertical",{flexDirection:"row"},[d("rtl",[a("button",[e("&:first-child:not(:last-child)",`
 margin-right: ${t};
 border-top-right-radius: ${t};
 border-bottom-right-radius: ${t};
 `),e("&:last-child:not(:first-child)",`
 margin-left: ${t};
 border-top-left-radius: ${t};
 border-bottom-left-radius: ${t};
 `),e("&:not(:first-child):not(:last-child)",`
 margin-left: ${t};
 margin-right: ${t};
 border-radius: ${t};
 `),i("default"),o("ghost",[i("primary"),i("info"),i("success"),i("warning"),i("error")])])])]),o("vertical",{flexDirection:"column"},[a("button",[e("&:first-child:not(:last-child)",`
 margin-bottom: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-bottom-left-radius: ${t};
 border-bottom-right-radius: ${t};
 `),e("&:last-child:not(:first-child)",`
 margin-top: ${t};
 margin-left: ${t};
 margin-right: ${t};
 border-top-left-radius: ${t};
 border-top-right-radius: ${t};
 `),e("&:not(:first-child):not(:last-child)",`
 margin: ${t};
 border-radius: ${t};
 `),n("default"),o("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]);const y={size:{type:String,default:void 0},vertical:Boolean};var E=f({name:"ButtonGroup",props:y,setup(r){const{mergedClsPrefixRef:l,mergedRtlRef:c}=b(r);return p("-button-group",v,l),g(h,r),{rtlEnabled:m("ButtonGroup",c,l),mergedClsPrefix:l}},render(){const{mergedClsPrefix:r}=this;return $("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});export{E as N};
