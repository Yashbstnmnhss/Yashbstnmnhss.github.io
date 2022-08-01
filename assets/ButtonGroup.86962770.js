import{c as a,s as d,e,q as o,b as s,d as b,u as f,bc as p,C as g,bd as h,ar as m,h as $}from"./index.3d1c08e2.js";const t="0!important",u="-1px!important";function i(r){return o(r+"-type",[e("& +",[a("button",{},[o(r+"-type",[s("border",{borderLeftWidth:t}),s("state-border",{left:u})])])])])}function n(r){return o(r+"-type",[e("& +",[a("button",[o(r+"-type",[s("border",{borderTopWidth:t}),s("state-border",{top:u})])])])])}var y=a("button-group",`
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
 `),n("default"),o("ghost",[n("primary"),n("info"),n("success"),n("warning"),n("error")])])])]);const v={size:{type:String,default:void 0},vertical:Boolean};var C=b({name:"ButtonGroup",props:v,setup(r){const{mergedClsPrefixRef:l,mergedRtlRef:c}=f(r);return p("-button-group",y,l),g(h,r),{rtlEnabled:m("ButtonGroup",c,l),mergedClsPrefix:l}},render(){const{mergedClsPrefix:r}=this;return $("div",{class:[`${r}-button-group`,this.rtlEnabled&&`${r}-button-group--rtl`,this.vertical&&`${r}-button-group--vertical`],role:"group"},this.$slots)}});export{C as N};
