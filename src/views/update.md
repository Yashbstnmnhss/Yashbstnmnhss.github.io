# 更新日志 :notebook:
<!-- bstnmnhss2.0 -> bstnmnhss3.0-->
------

### 2022/6/14
- **更新了一堆**

### 2022/5/4
- !!**新增gcl**菜单与内容
- `SideMenu`组件`render`函数优化

### 2022/5/1
- 终于弄了个**响应式**的`ACS` 很好很好
- 优化`menuOptions`结构
- 增添`QRCode`在`fuzeblockisnotagame`中
- !!**增加`Achievement`系统** 目前共`25`项
- 重写`storage`部分, 彻底改用`JSON`存取
- 废除`FuzeEditor`与`fuzelanguage`部分 :sob:

### 2022/4/21
- 修bug <span class="spoiler">创造bug!</span> ~~:bug:~~
- 新增**YAUC**(*Yet Another Useless Calculator*), 正如其名

### 2022/4/20   `3.1.0`
- !!**Fuze部分彻底**<span class="spoiler">？</span>完成
- 新增页面 (**fuzeblockisnotagame**) 至于路由名是这个我也不知道为什么。 与付泽生日彩蛋？
- *稍微的*调整了代码结构（还是一样的乱）
- `jokes`的`layout`的`menuOptions`重新规整，**以便未来引入更多乐子**
- 新增`monaco-editor`包，别问我用来干啥，做得一团乱
> 第一个发行版

### 2022/4/18
- 优化部分界面 (404, ...)
- 新组件 `spoiler` <span class="spoiler">就像这样:joy:, 呃表情怎么不会隐藏...</span>
- 部分国际化完成
- 新增 `utils/Logger.ts` 代替**松散**,**丑陋**,**到处都是**的`console.log`
    > 就是简单"封装"了一下`console.log`而已...
- Fuze路由完成, 开始填充内容

### 2022/4/8
- 优化`store`部分, `auto.ts`自动生成`mutations`
    ```typescript
    export type States<Class, Key extends keyof Class = keyof Class> = {
        [Item in Key]: State<Class, Class[Key]> 
    }
    ```
    > 似乎有时`sidebar`没反应... 不过`language`&`theme`倒是没什么问题... *怪*
- 部分页面

### 2022/4/5
- Markdown 作为 Vue
- 自动Router
- State初版系统

### 2022/4/3
- 基本架构 (Provider, Viewer ...)

### 2022/4/2
- [vue3](https://v3.cn.vuejs.org/) *基础框架*
- [vite](https://cn.vitejs.dev/) *构建工具*
- [vue-router](https://router.vuejs.org/) *路由系统*
- [vuex](https://vuex.vuejs.org/) *状态管理*
- [vue-i18n](https://kazupon.github.io/vue-i18n/zh/introduction.html) *国际化*
- [naive-ui](https://www.naiveui.com/) *组件库*

> 爷出生了

# ~~友情~~链接 :link:
> 所谓"加速"似乎也不怎么样
------
- [Github](https://github.com/Yashbstnmnhss/Yashbstnmnhss.github.io) 
- [Github站点(慢)](https://yashbstnmnhss.github.io)
- [加速?站点](https://yashbstnmnhss.vercel.app)

<style>
    .spoiler {
    background-color: black;
    color: black;
    cursor: help;
    transition: color .2s ease .25s;
}
    .spoiler:hover,
    .spoiler:focus {
        color: white;   
    }
</style>