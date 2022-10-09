import{D as a,E as W,I as $,H as h,d as P,n as _,p as R,s as y,a9 as T,B as r,F as H,cf as V,G as B,b4 as A,bI as L,bF as M,bG as j,bH as G,cg as X,v as q}from"./index.f590f622.js";import{f as C}from"./format-length.7f3135aa.js";const Y=a("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[W("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[W("no-title",`
 display: flex;
 align-items: center;
 `)]),$("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),h("title-position-left",[$("line",[h("left",{width:"28px"})])]),h("title-position-right",[$("line",[h("right",{width:"28px"})])]),h("dashed",[$("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),h("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),$("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),W("dashed",[$("line",{backgroundColor:"var(--n-color)"})]),h("dashed",[$("line",{borderColor:"var(--n-color)"})]),h("vertical",{backgroundColor:"var(--n-color)"})]),E=Object.assign(Object.assign({},R.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),te=P({name:"Divider",props:E,setup(e){const{mergedClsPrefixRef:u,inlineThemeDisabled:c}=_(e),s=R("Divider","-divider",Y,V,e,u),o=y(()=>{const{common:{cubicBezierEaseInOut:n},self:{color:d,textColor:l,fontWeight:f}}=s.value;return{"--n-bezier":n,"--n-color":d,"--n-text-color":l,"--n-font-weight":f}}),t=c?T("divider",void 0,o,e):void 0;return{mergedClsPrefix:u,cssVars:c?void 0:o,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$slots:u,titlePlacement:c,vertical:s,dashed:o,cssVars:t,mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),r("div",{role:"separator",class:[`${n}-divider`,this.themeClass,{[`${n}-divider--vertical`]:s,[`${n}-divider--no-title`]:!u.default,[`${n}-divider--dashed`]:o,[`${n}-divider--title-position-${c}`]:u.default&&c}],style:t},s?null:r("div",{class:`${n}-divider__line ${n}-divider__line--left`}),!s&&u.default?r(H,null,r("div",{class:`${n}-divider__title`},this.$slots),r("div",{class:`${n}-divider__line ${n}-divider__line--right`})):null)}}),F=B([a("progress",{display:"inline-block"},[a("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),h("line",`
 width: 100%;
 display: block;
 `,[a("progress-content",`
 display: flex;
 align-items: center;
 `,[a("progress-graph",{flex:1})]),a("progress-custom-content",{marginLeft:"14px"}),a("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[h("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),h("circle, dashboard",{width:"120px"},[a("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),a("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),a("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),h("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[a("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),a("progress-content",{position:"relative"}),a("progress-graph",{position:"relative"},[a("progress-graph-circle",[B("svg",{verticalAlign:"bottom"}),a("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[h("empty",{opacity:0})]),a("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),a("progress-graph-line",[h("indicator-inside",[a("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[a("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),a("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),h("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[a("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),a("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),a("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[a("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[h("processing",[B("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),B("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),K={success:r(L,null),error:r(M,null),warning:r(j,null),info:r(G,null)},Z=P({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:u}){const c=y(()=>C(e.height)),s=y(()=>e.railBorderRadius!==void 0?C(e.railBorderRadius):e.height!==void 0?C(e.height,{c:.5}):""),o=y(()=>e.fillBorderRadius!==void 0?C(e.fillBorderRadius):e.railBorderRadius!==void 0?C(e.railBorderRadius):e.height!==void 0?C(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:t,railColor:n,railStyle:d,percentage:l,unit:f,indicatorTextColor:m,status:p,showIndicator:v,fillColor:i,processing:b,clsPrefix:g}=e;return r("div",{class:`${g}-progress-content`,role:"none"},r("div",{class:`${g}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${g}-progress-graph-line`,{[`${g}-progress-graph-line--indicator-${t}`]:!0}]},r("div",{class:`${g}-progress-graph-line-rail`,style:[{backgroundColor:n,height:c.value,borderRadius:s.value},d]},r("div",{class:[`${g}-progress-graph-line-fill`,b&&`${g}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:i,height:c.value,lineHeight:c.value,borderRadius:o.value}},t==="inside"?r("div",{class:`${g}-progress-graph-line-indicator`},l,f):null)))),v&&t==="outside"?r("div",null,u.default?r("div",{class:`${g}-progress-custom-content`,style:{color:m},role:"none"},u.default()):p==="default"?r("div",{role:"none",class:`${g}-progress-icon ${g}-progress-icon--as-text`,style:{color:m}},l,f):r("div",{class:`${g}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:g},{default:()=>K[p]}))):null)}}}),J={success:r(L,null),error:r(M,null),warning:r(j,null),info:r(G,null)},Q=P({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:u}){function c(s,o,t){const{gapDegree:n,viewBoxWidth:d}=e,l=50,f=0,m=l,p=0,v=2*l,i=`M 55,55 m ${f},${m}
      a ${l},${l} 0 1 1 ${p},${-v}
      a ${l},${l} 0 1 1 ${-p},${v}`,b=Math.PI*2*l,g={stroke:t,strokeDasharray:`${s/100*(b-n)}px ${d*8}px`,strokeDashoffset:`-${n/2}px`,transformOrigin:o?"center":void 0,transform:o?`rotate(${o}deg)`:void 0};return{pathString:i,pathStyle:g}}return()=>{const{fillColor:s,railColor:o,strokeWidth:t,offsetDegree:n,status:d,percentage:l,showIndicator:f,indicatorTextColor:m,unit:p,gapOffsetDegree:v,clsPrefix:i}=e,{pathString:b,pathStyle:g}=c(100,0,o),{pathString:w,pathStyle:S}=c(l,n,s);return r("div",{class:`${i}-progress-content`,role:"none"},r("div",{class:`${i}-progress-graph`,"aria-hidden":!0},r("div",{class:`${i}-progress-graph-circle`,style:{transform:v?`rotate(${v}deg)`:void 0}},r("svg",{viewBox:"0 0 110 110"},r("g",null,r("path",{class:`${i}-progress-graph-circle-rail`,d:b,"stroke-width":t,"stroke-linecap":"round",fill:"none",style:g})),r("g",null,r("path",{class:[`${i}-progress-graph-circle-fill`,l===0&&`${i}-progress-graph-circle-fill--empty`],d:w,"stroke-width":t,"stroke-linecap":"round",fill:"none",style:S}))))),f?r("div",null,u.default?r("div",{class:`${i}-progress-custom-content`,role:"none"},u.default()):d!=="default"?r("div",{class:`${i}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:i},{default:()=>J[d]})):r("div",{class:`${i}-progress-text`,style:{color:m},role:"none"},r("span",{class:`${i}-progress-text__percentage`},l),r("span",{class:`${i}-progress-text__unit`},p))):null)}}});function O(e,u,c=100){return`m ${c/2} ${c/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const U=P({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:u}){const c=y(()=>e.percentage.map((o,t)=>`${Math.PI*o/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*t)-e.circleGap*t)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:s,strokeWidth:o,circleGap:t,showIndicator:n,fillColor:d,railColor:l,railStyle:f,percentage:m,clsPrefix:p}=e;return r("div",{class:`${p}-progress-content`,role:"none"},r("div",{class:`${p}-progress-graph`,"aria-hidden":!0},r("div",{class:`${p}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${s} ${s}`},m.map((v,i)=>r("g",{key:i},r("path",{class:`${p}-progress-graph-circle-rail`,d:O(s/2-o/2*(1+2*i)-t*i,o,s),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:l[i]},f[i]]}),r("path",{class:[`${p}-progress-graph-circle-fill`,v===0&&`${p}-progress-graph-circle-fill--empty`],d:O(s/2-o/2*(1+2*i)-t*i,o,s),"stroke-width":o,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:c.value[i],strokeDashoffset:0,stroke:d[i]}})))))),n&&u.default?r("div",null,r("div",{class:`${p}-progress-text`},u.default())):null)}}}),ee=Object.assign(Object.assign({},R.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),oe=P({name:"Progress",props:ee,setup(e){const u=y(()=>e.indicatorPlacement||e.indicatorPosition),c=y(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:s,inlineThemeDisabled:o}=_(e),t=R("Progress","-progress",F,X,e,s),n=y(()=>{const{status:l}=e,{common:{cubicBezierEaseInOut:f},self:{fontSize:m,fontSizeCircle:p,railColor:v,railHeight:i,iconSizeCircle:b,iconSizeLine:g,textColorCircle:w,textColorLineInner:S,textColorLineOuter:x,lineBgProcessing:z,fontWeightCircle:D,[q("iconColor",l)]:N,[q("fillColor",l)]:k}}=t.value;return{"--n-bezier":f,"--n-fill-color":k,"--n-font-size":m,"--n-font-size-circle":p,"--n-font-weight-circle":D,"--n-icon-color":N,"--n-icon-size-circle":b,"--n-icon-size-line":g,"--n-line-bg-processing":z,"--n-rail-color":v,"--n-rail-height":i,"--n-text-color-circle":w,"--n-text-color-line-inner":S,"--n-text-color-line-outer":x}}),d=o?T("progress",y(()=>e.status[0]),n,e):void 0;return{mergedClsPrefix:s,mergedIndicatorPlacement:u,gapDeg:c,cssVars:o?void 0:n,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{type:e,cssVars:u,indicatorTextColor:c,showIndicator:s,status:o,railColor:t,railStyle:n,color:d,percentage:l,viewBoxWidth:f,strokeWidth:m,mergedIndicatorPlacement:p,unit:v,borderRadius:i,fillBorderRadius:b,height:g,processing:w,circleGap:S,mergedClsPrefix:x,gapDeg:z,gapOffsetDegree:D,themeClass:N,$slots:k,onRender:I}=this;return I==null||I(),r("div",{class:[N,`${x}-progress`,`${x}-progress--${e}`,`${x}-progress--${o}`],style:u,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":l,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(Q,{clsPrefix:x,status:o,showIndicator:s,indicatorTextColor:c,railColor:t,fillColor:d,railStyle:n,offsetDegree:this.offsetDegree,percentage:l,viewBoxWidth:f,strokeWidth:m,gapDegree:z===void 0?e==="dashboard"?75:0:z,gapOffsetDegree:D,unit:v},k):e==="line"?r(Z,{clsPrefix:x,status:o,showIndicator:s,indicatorTextColor:c,railColor:t,fillColor:d,railStyle:n,percentage:l,processing:w,indicatorPlacement:p,unit:v,fillBorderRadius:b,railBorderRadius:i,height:g},k):e==="multiple-circle"?r(U,{clsPrefix:x,strokeWidth:m,railColor:t,fillColor:d,railStyle:n,viewBoxWidth:f,percentage:l,showIndicator:s,circleGap:S},k):null)}});export{oe as N,te as a};
