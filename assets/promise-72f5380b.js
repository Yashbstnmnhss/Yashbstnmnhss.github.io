import{N as k,b as g}from"./headers-d90fb6ae.js";import{N as s}from"./Code-cb364473.js";import{k as d,a as h,b as f,d as P,e as B,u as w,g as E,i as S,h as F,ab as V,G as H,S as L,Q as t,P as r,T as n,U,I as l,F as $,R as e}from"./index-1bc82fee.js";import{N as m}from"./li-a47abc7e.js";import{N as p}from"./blockquote-12af9acd.js";import{b as v}from"./route-block-83d24a4e.js";const _=d("li",{transition:"color .3s var(--n-bezier)",lineHeight:"var(--n-line-height)",margin:"var(--n-li-margin)",marginBottom:0,color:"var(--n-text-color)"}),j=[d("&:first-child",`
 margin-top: 0;
 `),d("&:last-child",`
 margin-bottom: 0;
 `)],O=d([h("ol",{fontSize:"var(--n-font-size)",padding:"var(--n-ol-padding)"},[f("align-text",{paddingLeft:0}),_,j]),h("ul",{fontSize:"var(--n-font-size)",padding:"var(--n-ul-padding)"},[f("align-text",{paddingLeft:0}),_,j])]),D=Object.assign(Object.assign({},w.props),{alignText:Boolean}),I=P({name:"Ul",props:D,setup(o){const{mergedClsPrefixRef:i,inlineThemeDisabled:u}=B(o),x=w("Typography","-xl",O,V,o,i),c=E(()=>{const{common:{cubicBezierEaseInOut:y},self:{olPadding:b,ulPadding:R,liMargin:C,liTextColor:N,liLineHeight:z,liFontSize:T}}=x.value;return{"--n-bezier":y,"--n-font-size":T,"--n-line-height":z,"--n-text-color":N,"--n-li-margin":C,"--n-ol-padding":b,"--n-ul-padding":R}}),a=u?S("ul",void 0,c,o):void 0;return{mergedClsPrefix:i,cssVars:u?void 0:c,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var o;const{mergedClsPrefix:i}=this;return(o=this.onRender)===null||o===void 0||o.call(this),F("ul",{class:[`${i}-ul`,this.themeClass,this.alignText&&`${i}-ul--align-text`],style:this.cssVars},this.$slots)}}),M=e("p",null,[e("strong",null,"Promise"),n("的构造器要求一个名为"),e("strong",null,"executor"),n("参数:")],-1),q=e("p",null,[n(" 此参数是一个函数,作为回调函数用来初始化"),e("strong",null,"Promise"),n(" 。该函数有"),e("strong",null,"resolve"),n("和"),e("strong",null,"reject"),n("两个参数,且都是接受一个参数的函数 ")],-1),G=e("strong",null,"resolve",-1),Q=e("strong",null,"Promise",-1),A=e("strong",null,"Promise",-1),J=e("strong",null,"reject",-1),K=e("strong",null,"拒绝",-1),W=e("strong",null,"Promise",-1),X=e("p",null,"例子:",-1),Y=e("p",null,"具体实现如下",-1),Z=e("p",null,[e("strong",null,"Promise"),n("实例的"),e("strong",null,"then"),n("函数的"),e("strong",null,"onfulfilled"),n("回调就是在"),e("strong",null,"fulfilled"),n("状态后调用的,而"),e("strong",null,"onrejected"),n("回调则是在"),e("strong",null,"rejected"),n("状态后调用的 ")],-1),ee=e("p",null,[n(" 其的另一个"),e("strong",null,"catch"),n("函数,仅仅用于附加一个"),e("strong",null,"rejected"),n("状态后的回调 ")],-1),ne=e("p",null,"具体实现如下",-1),te=P({__name:"promise",setup(o){return(i,u)=>(H(),L($,null,[t(l(k),null,{default:r(()=>[n(U(i.$texta.get(["menus","jokes","markdowns-promise"])),1)]),_:1}),t(l(g),null,{default:r(()=>[n("构造器的实现")]),_:1}),M,t(l(s),{language:"ts",code:`\r
        executor: (resolve: (value: unknown) => void, reject: (reason?: any) => void) => void\r
    `,trim:"","word-wrap":""}),q,t(l(I),null,{default:r(()=>[t(l(m),null,{default:r(()=>[G,n("回调: 用于以一个值或另一个"),Q,n(" >的结果来解析此"),A,n(",也就是执行成功并返回结果 ")]),_:1}),t(l(m),null,{default:r(()=>[J,n("回调: 用于以错误原因来"),K,n("此 "),W,n(" ,也就是执行失败或抛出异常 ")]),_:1})]),_:1}),X,t(l(s),{"show-line-numbers":"",trim:"",language:"ts",code:`new Promise((resolve, reject) => { 
    resolve(10) 
})`},null,8,["code"]),t(l(p),null,{default:r(()=>[t(l(s),{trim:"","word-wrap":"",language:"ts",code:"Promise {<fulfilled>: 10}"})]),_:1}),t(l(s),{"show-line-numbers":"",trim:"",language:"ts",code:`new Promise((resolve, reject) => { 
    reject(Error('error')) 
})`},null,8,["code"]),t(l(p),null,{default:r(()=>[t(l(s),{trim:"","word-wrap":"",language:"ts",code:"Promise {<rejected>: Error: error ...}"}),t(l(s),{trim:"","word-wrap":"",language:"ts",code:"Uncaught (in promise) Error: error ..."})]),_:1}),Y,t(l(s),{trim:"","show-line-numbers":"",language:"ts",code:`class Promise2 {
    state = 'pending' //当前状态, 一共有三个:
    // pending(等待), fulfilled(完成), rejected(异常)
    value = undefined //完成的值
    reason = undefined //异常原因
    onResolveds = [] //完成回调函数数组
    onRejecteds = [] //异常回调函数数组

    //构造器 接受一个函数作为执行器
    constructor(executor) {
        //直接声明这两个函数 否则会出现this绑定问题 
        //若直接声明在类中 也可以使用resolve.bind(this)解决
        const resolve = value => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                onResolveds.forEach(handler => handler())
            }
        } //提供的resolve函数
        const reject = reason => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                onRejecteds.forEach(handler => handler())
            }
        } //提供的reject函数

        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error) //尝试执行 捕获异常
        }
    }
    //...
}`},null,8,["code"]),t(l(g),null,{default:r(()=>[n("函数的实现")]),_:1}),t(l(s),{trim:"","word-wrap":"",language:"ts",code:`\r
        then<...>(onfulfilled?: ((value: any) => any) | undefined, onrejected?: ((reason: any) => any) | undefined): ...\r
    `}),Z,t(l(s),{trim:"","word-wrap":"",language:"ts",code:"catch<...>(onrejected?: ((reason: any) => any): ..."}),ee,ne,t(l(s),{trim:"","show-line-numbers":"",language:"ts",code:`class Promise2 {
    //...
    then(onFulfilled, onRejected) {
        //... 这里可以进行类型判断或默认值的处理 ...
        const newPromise = new Promise2((resolve, reject) => {
            //统一处理onFulfilled与onRejected的函数
            //func是目标(完成或异常)函数 
            //val将传入老Promise的结果值(或异常原因)
            const handle = (func, val) => {
                try {
                    var result = func(val)
                    if (newPromise === result) { //防止死循环
                        return
                    }
                    if (result instanceof Promise2) { 
                        //结果若是Promise, 则直接传入resolve和reject
                        result.then(resolve, reject)
                    }
                    else { //其它情况则调用resolve
                        resolve(result)
                    }
                } catch(error) { //异常reject
                    reject(error)
                }
            }

            //完成时执行
            const fulfilled = () => handle(onFulfilled, this.value)
            //异常时执行
            const rejected = () => handle(onRejected, this.reason)
            //判断状态
            if (this.state === 'pending') {
                //若仍在等待 则插入回调函数数组
                this.onResolveds.push(fulfilled)
                this.onRejecteds.push(rejected)
            }
            else if (this.state === 'fulfilled') {
                fulfilled()
            }
            else {
                rejected()
            }
        })
        return newPromise
    }
}`},null,8,["code"])],64))}});typeof v=="function"&&v(te);export{te as default};
