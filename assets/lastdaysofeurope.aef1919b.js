import{d as defineComponent,h,c as cB,e as c,b as cE,q as cM,Z as fadeInHeightExpand,u as useConfig,x as ref,k as computed,P as useMergedState,f as useTheme,C as provide,ar as useRtl,m as useThemeClass,H as createInjectionKey,cp as collapseLight,S as call,cq as useFalseUntilTruthy,v as toRef,b5 as withDirectives,X as NFadeInExpandTransition,b2 as vShow,br as createId,n as useMemo,i as inject,bQ as throwError,N as NBaseIcon,bW as insideModal,bX as insidePopover,cr as listLight,a8 as useI18n,o as onMounted,am as Logger,a4 as createElementBlock,ae as createVNode,ad as withCtx,af as unref,O as Fragment,a3 as openBlock,ag as NButton,ah as createTextVNode,ai as toDisplayString,ac as createBlock,ca as renderList,bI as createCommentVNode,a5 as createBaseVNode}from"./index.3d1c08e2.js";import{C as CommentService,N as NInput,E as ExternalService}from"./services.b47a708b.js";import{b as block0}from"./route-block.b5bad31b.js";import{C as ChevronRightIcon}from"./ChevronRight.febcab06.js";import{u as useMessage}from"./use-message.0d1777d9.js";import{N as NH1}from"./headers.f4b38b7c.js";import{N as NSpin}from"./Spin.cfa4a00a.js";import{N as NBackTop}from"./BackTop.9e78bf36.js";import{N as NSpace}from"./Space.157aaa1b.js";import"./use-locale.71c64783.js";import"./format-length.7f3135aa.js";var ChevronLeftIcon=defineComponent({name:"ChevronLeft",render(){return h("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h("path",{d:"M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",fill:"currentColor"}))}}),style$1=cB("collapse",{width:"100%"},[cB("collapse-item",`
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: 16px 0 0 0;
 `,[cB("collapse-item","margin-left: 32px;"),c("&:first-child",{marginTop:0}),c("&:first-child >",[cE("header",{paddingTop:0})]),cM("left-arrow-placement",[cE("header",[cB("collapse-item-arrow",{marginRight:"4px"})])]),cM("right-arrow-placement",[cE("header",[cB("collapse-item-arrow",{marginLeft:"4px"})])]),cE("content-wrapper",[cE("content-inner",{paddingTop:"16px"}),fadeInHeightExpand({duration:"0.15s"})]),cM("active",[cE("header",[cM("active",[cB("collapse-item-arrow",{transform:"rotate(90deg)"})])])]),c("&:not(:first-child)",{borderTop:"1px solid var(--n-divider-color)"}),cE("header",`
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: 16px 0 0 0;
 color: var(--n-title-text-color);
 `,[cE("header-main",`
 cursor: pointer;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `),cE("header-extra",`
 cursor: pointer;
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),cB("collapse-item-arrow",`
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]);const collapseProps=Object.assign(Object.assign({},useTheme.props),{defaultExpandedNames:{type:[Array,String],default:null},expandedNames:[Array,String],arrowPlacement:{type:String,default:"left"},accordion:{type:Boolean,default:!1},displayDirective:{type:String,default:"if"},onItemHeaderClick:[Function,Array],"onUpdate:expandedNames":[Function,Array],onUpdateExpandedNames:[Function,Array],onExpandedNamesChange:{type:[Function,Array],validator:()=>!0,default:void 0}}),collapseInjectionKey=createInjectionKey("n-collapse");var NCollapse=defineComponent({name:"Collapse",props:collapseProps,setup(e,{slots:t}){const{mergedClsPrefixRef:o,inlineThemeDisabled:a,mergedRtlRef:i}=useConfig(e),d=ref(e.defaultExpandedNames),s=computed(()=>e.expandedNames),m=useMergedState(s,d),v=useTheme("Collapse","-collapse",style$1,collapseLight,e,o);function p(u){const{"onUpdate:expandedNames":l,onUpdateExpandedNames:f,onExpandedNamesChange:E}=e;f&&call(f,u),l&&call(l,u),E&&call(E,u),d.value=u}function g(u){const{onItemHeaderClick:l}=e;l&&call(l,u)}function n(u,l,f){const{accordion:E}=e,{value:y}=m;if(E)u?(p([l]),g({name:l,expanded:!0,event:f})):(p([]),g({name:l,expanded:!1,event:f}));else if(!Array.isArray(y))p([l]),g({name:l,expanded:!0,event:f});else{const b=y.slice(),w=b.findIndex(_=>l===_);~w?(b.splice(w,1),p(b),g({name:l,expanded:!1,event:f})):(b.push(l),p(b),g({name:l,expanded:!0,event:f}))}}provide(collapseInjectionKey,{props:e,mergedClsPrefixRef:o,expandedNamesRef:m,slots:t,toggleItem:n});const C=useRtl("Collapse",i,o),N=computed(()=>{const{common:{cubicBezierEaseInOut:u},self:{titleFontWeight:l,dividerColor:f,titleTextColor:E,textColor:y,arrowColor:b,fontSize:w,titleFontSize:_}}=v.value;return{"--n-font-size":w,"--n-bezier":u,"--n-text-color":y,"--n-divider-color":f,"--n-title-font-size":_,"--n-title-text-color":E,"--n-title-font-weight":l,"--n-arrow-color":b}}),x=a?useThemeClass("collapse",void 0,N,e):void 0;return{rtlEnabled:C,mergedTheme:v,mergedClsPrefix:o,cssVars:a?void 0:N,themeClass:x==null?void 0:x.themeClass,onRender:x==null?void 0:x.onRender}},render(){var e;return(e=this.onRender)===null||e===void 0||e.call(this),h("div",{class:[`${this.mergedClsPrefix}-collapse`,this.rtlEnabled&&`${this.mergedClsPrefix}-collapse--rtl`,this.themeClass],style:this.cssVars},this.$slots)}}),NCollapseItemContent=defineComponent({name:"CollapseItemContent",props:{displayDirective:{type:String,required:!0},show:Boolean,clsPrefix:{type:String,required:!0}},setup(e){return{onceTrue:useFalseUntilTruthy(toRef(e,"show"))}},render(){return h(NFadeInExpandTransition,null,{default:()=>{const{show:e,displayDirective:t,onceTrue:o,clsPrefix:a}=this,i=t==="show"&&o,d=h("div",{class:`${a}-collapse-item__content-wrapper`},h("div",{class:`${a}-collapse-item__content-inner`},this.$slots));return i?withDirectives(d,[[vShow,e]]):e?d:null}})}});const collapseItemProps={title:String,name:[String,Number],displayDirective:String};var NCollapseItem=defineComponent({name:"CollapseItem",props:collapseItemProps,setup(e){const{mergedRtlRef:t}=useConfig(e),o=createId(),a=useMemo(()=>{var n;return(n=e.name)!==null&&n!==void 0?n:o}),i=inject(collapseInjectionKey);i||throwError("collapse-item","`n-collapse-item` must be placed inside `n-collapse`.");const{expandedNamesRef:d,props:s,mergedClsPrefixRef:m,slots:v}=i,p=computed(()=>{const{value:n}=d;if(Array.isArray(n)){const{value:C}=a;return!~n.findIndex(N=>N===C)}else if(n){const{value:C}=a;return C!==n}return!0});return{rtlEnabled:useRtl("Collapse",t,m),collapseSlots:v,randomName:o,mergedClsPrefix:m,collapsed:p,mergedDisplayDirective:computed(()=>{const{displayDirective:n}=e;return n||s.displayDirective}),arrowPlacement:computed(()=>s.arrowPlacement),handleClick(n){i&&i.toggleItem(p.value,a.value,n)}}},render(){var e;const{collapseSlots:t,$slots:o,arrowPlacement:a,collapsed:i,mergedDisplayDirective:d,mergedClsPrefix:s}=this,m=o.header?o.header():this.title,v=o["header-extra"]||t["header-extra"],p=o.arrow||t.arrow;return h("div",{class:[`${s}-collapse-item`,`${s}-collapse-item--${a}-arrow-placement`,!i&&`${s}-collapse-item--active`]},h("div",{class:[`${s}-collapse-item__header`,!i&&`${s}-collapse-item__header--active`]},h("div",{class:`${s}-collapse-item__header-main`,onClick:this.handleClick},a==="right"&&m,h("div",{class:`${s}-collapse-item-arrow`,key:this.rtlEnabled?0:1},p?p({collapsed:i}):h(NBaseIcon,{clsPrefix:s},{default:(e=t.expandIcon)!==null&&e!==void 0?e:()=>this.rtlEnabled?h(ChevronLeftIcon,null):h(ChevronRightIcon,null)})),a==="left"&&m),v&&h("div",{class:`${s}-collapse-item__header-extra`,onClick:this.handleClick},{default:v})),h(NCollapseItemContent,{clsPrefix:s,displayDirective:d,show:!i},o))}}),style=c([cB("list",`
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
 `,[cM("bordered",`
 border-radius: var(--n-border-radius);
 border: 1px solid var(--n-merged-border-color);
 `,[cB("list-item",`
 padding: 12px 20px;
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),cE("header, footer",`
 padding: 12px 20px;
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),cE("header, footer",`
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[c("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]),cB("list-item",`
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: border-color .3s var(--n-bezier);
 `,[cE("prefix",`
 margin-right: 20px;
 flex: 0;
 `),cE("suffix",`
 margin-left: 20px;
 flex: 0;
 `),cE("main",`
 flex: 1;
 `),c("&:not(:last-child)",`
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]),insideModal(cB("list",`
 --merged-color: var(--n-color-modal);
 --merged-border-color: var(--n-border-color-modal);
 `)),insidePopover(cB("list",`
 --merged-color: var(--n-color-popover);
 --merged-border-color: var(--n-border-color-popover);
 `))]);const listProps=Object.assign(Object.assign({},useTheme.props),{size:{type:String,default:"medium"},bordered:{type:Boolean,default:!1}}),listInjectionKey=createInjectionKey("n-list");var NList=defineComponent({name:"List",props:listProps,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:o}=useConfig(e),a=useTheme("List","-list",style,listLight,e,t);provide(listInjectionKey,{mergedClsPrefixRef:t});const i=computed(()=>{const{common:{cubicBezierEaseInOut:s},self:{fontSize:m,textColor:v,color:p,colorModal:g,colorPopover:n,borderColor:C,borderColorModal:N,borderColorPopover:x,borderRadius:u}}=a.value;return{"--n-font-size":m,"--n-bezier":s,"--n-text-color":v,"--n-color":p,"--n-border-radius":u,"--n-border-color":C,"--n-border-color-modal":N,"--n-border-color-popover":x,"--n-color-modal":g,"--n-color-popover":n}}),d=o?useThemeClass("list",void 0,i,e):void 0;return{mergedClsPrefix:t,cssVars:o?void 0:i,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){var e;const{$slots:t,mergedClsPrefix:o,onRender:a}=this;return a==null||a(),h("ul",{class:[`${o}-list`,this.bordered&&`${o}-list--bordered`,this.themeClass],style:this.cssVars},t.header?h("div",{class:`${o}-list__header`},t.header()):null,(e=t.default)===null||e===void 0?void 0:e.call(t),t.footer?h("div",{class:`${o}-list__footer`},t.footer()):null)}}),NListItem=defineComponent({name:"ListItem",setup(){const e=inject(listInjectionKey,null);return e||throwError("list-item","`n-list-item` must be placed in `n-list`."),{mergedClsPrefix:e.mergedClsPrefixRef}},render(){const{$slots:e,mergedClsPrefix:t}=this;return h("li",{class:`${t}-list-item`},e.prefix?h("div",{class:`${t}-list-item__prefix`},e.prefix()):null,e.default?h("div",{class:`${t}-list-item__main`},e):null,e.suffix?h("div",{class:`${t}-list-item__suffix`},e.suffix()):null)}});const _hoisted_1=createTextVNode("Last Days Of Europe"),_hoisted_2={class:"bslang-emoji"},_hoisted_3=createTextVNode(" - "),_hoisted_4=createTextVNode(" - "),_sfc_main=defineComponent({setup(__props){const message=useMessage(),i18n=useI18n(),loadingComments=ref(!1),comments=ref([]),postContent=ref(""),postLoading=ref(!1),postStatus=ref(),addComment=()=>{if(postStatus.value=void 0,!postLoading.value){if(!postContent.value){postStatus.value="warning";return}if(postContent.value=postContent.value.trim(),postLoading.value=!0,postContent.value.startsWith("/god")||postContent.value.startsWith("/\u795E\u660E\u554A")||postContent.value.startsWith("#god")){var c=postContent.value.slice(4).trim();if(!c){postStatus.value="warning",postLoading.value=!1;return}Logger.log("[LDOE]","this is eval()",c),postLoading.value=!0;try{var r=eval(`
                (function() {
                const $ = commands
                    // \u6211\u60F3\u62BD\u8279\u795E\u554A\u554A\u554A
                    ${c}
                })()
            `);r&&message.info(r);return}catch(e){Logger.error("[LDOE]",e,"\u9519\u9519\u9519\u9519\u9519\u8BEF\u8BEF\u8BEF\u8BEF\u8BEF!?"),postStatus.value="warning",postLoading.value=!1;return}finally{postLoading.value=!1,postStatus.value=void 0}}var ip="unknown";ExternalService.getIp().then(e=>{ip=e.data.pro}).catch(()=>{ip="UNKNOWN"}),CommentService.postNew({content:postContent.value,time:new Date,ip}).then(()=>{postContent.value="",postLoading.value=!1,message.success(i18n.t("views.jokes.lastdaysofeurope.post-success"))}).catch(e=>{postStatus.value="error",postLoading.value=!1,message.error(`THE END IS NEVER ${e.message}`)})}};return onMounted(()=>{loadingComments.value=!0,CommentService.getAll().then(e=>{var t=e.data;comments.value=t,loadingComments.value=!1}).catch(e=>{message.error(e),Logger.error("[lastdaysofeurope]",e),loadingComments.value=!1})}),(e,t)=>(openBlock(),createElementBlock(Fragment,null,[createVNode(unref(NH1),{prefix:"bar"},{default:withCtx(()=>[_hoisted_1]),_:1}),createVNode(unref(NCollapse),{"arrow-placement":"right"},{default:withCtx(()=>[createVNode(unref(NCollapseItem),{title:e.$t("views.jokes.lastdaysofeurope.post-title")},{default:withCtx(()=>[createVNode(unref(NSpace),{vertical:"",class:"bslang-emoji"},{default:withCtx(()=>[createVNode(unref(NInput),{status:postStatus.value,disabled:postLoading.value,value:postContent.value,"onUpdate:value":t[0]||(t[0]=o=>postContent.value=o),type:"textarea",autosize:{minRows:3},maxlength:"200","show-count":"",placeholder:"THE NEW ORDER..."},null,8,["status","disabled","value"]),createVNode(unref(NButton),{type:"primary",ghost:"",onClick:t[1]||(t[1]=o=>addComment()),loading:postLoading.value},{default:withCtx(()=>[createTextVNode(toDisplayString(e.$t("views.jokes.lastdaysofeurope.post-button")),1)]),_:1},8,["loading"])]),_:1})]),_:1},8,["title"])]),_:1}),createVNode(unref(NSpin),{size:"large",show:loadingComments.value},{default:withCtx(()=>[comments.value&&comments.value.length>0?(openBlock(),createBlock(unref(NList),{key:0},{default:withCtx(()=>[(openBlock(!0),createElementBlock(Fragment,null,renderList(comments.value,o=>(openBlock(),createBlock(unref(NListItem),{key:o.id},{default:withCtx(()=>{var a;return[createBaseVNode("p",_hoisted_2,toDisplayString(o.content||"THE NEW ORDER - LAST DAYS OF EUROPE"),1),createBaseVNode("small",null,[createBaseVNode("span",null,toDisplayString(o.ip||"Kaedehara Kazuha"),1),_hoisted_3,createBaseVNode("span",null,toDisplayString(((a=o.time)==null?void 0:a.toLocaleString())||"Hu Tao"),1),_hoisted_4,createBaseVNode("span",null,toDisplayString(o.id),1)])]}),_:2},1024))),128))]),_:1})):createCommentVNode("",!0)]),_:1},8,["show"]),createVNode(unref(NBackTop))],64))}});typeof block0=="function"&&block0(_sfc_main);export{_sfc_main as default};
