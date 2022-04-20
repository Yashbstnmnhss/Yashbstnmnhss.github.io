import{n as e,l,av as t}from"./index.30083524.js";const o={class:"markdown-body"},a=t(`<h1>\u66F4\u65B0\u65E5\u5FD7 \u{1F4D3}</h1><blockquote><p>bstnmnhss2.0 -&gt; bstnmnhss3.0</p></blockquote><hr><h3>2022/4/20 <code>3.1.0</code></h3><ul><li>!!Fuze\u90E8\u5206\u5F7B\u5E95<span class="spoiler">\uFF1F</span>\u5B8C\u6210</li><li>\u65B0\u589E\u9875\u9762 (<strong>fuzeblockisnotagame</strong>) \u81F3\u4E8E\u8DEF\u7531\u540D\u662F\u8FD9\u4E2A\u6211\u4E5F\u4E0D\u77E5\u9053\u4E3A\u4EC0\u4E48\u3002 \u4E0E\u4ED8\u6CFD\u751F\u65E5\u5F69\u86CB\uFF1F</li><li><em>\u7A0D\u5FAE\u7684</em>\u8C03\u6574\u4E86\u4EE3\u7801\u7ED3\u6784\uFF08\u8FD8\u662F\u4E00\u6837\u7684\u4E71\uFF09</li><li><code>jokes</code>\u7684<code>layout</code>\u7684<code>menuOptions</code>\u91CD\u65B0\u89C4\u6574\uFF0C<strong>\u4EE5\u4FBF\u672A\u6765\u5F15\u5165\u66F4\u591A\u4E50\u5B50</strong></li><li>\u65B0\u589E<code>monaco-editor</code>\u5305\uFF0C\u522B\u95EE\u6211\u7528\u6765\u5E72\u5565\uFF0C\u505A\u5F97\u4E00\u56E2\u4E71</li></ul><blockquote><p>\u7B2C\u4E00\u4E2A\u53D1\u884C\u7248</p></blockquote><h3>2022/4/18</h3><ul><li>\u4F18\u5316\u90E8\u5206\u754C\u9762 (404, \u2026)</li><li>\u65B0\u7EC4\u4EF6 <code>spoiler</code> <span class="spoiler">\u5C31\u50CF\u8FD9\u6837\u{1F602}, \u5443\u8868\u60C5\u600E\u4E48\u4E0D\u4F1A\u9690\u85CF\u2026</span></li><li>\u90E8\u5206\u56FD\u9645\u5316\u5B8C\u6210</li><li>\u65B0\u589E <code>utils/Logger.ts</code> \u4EE3\u66FF<strong>\u677E\u6563</strong>,<strong>\u4E11\u964B</strong>,<strong>\u5230\u5904\u90FD\u662F</strong>\u7684<code>console.log</code><blockquote><p>\u5C31\u662F\u7B80\u5355&quot;\u5C01\u88C5&quot;\u4E86\u4E00\u4E0B<code>console.log</code>\u800C\u5DF2\u2026</p></blockquote></li><li>Fuze\u8DEF\u7531\u5B8C\u6210, \u5F00\u59CB\u586B\u5145\u5185\u5BB9</li></ul><h3>2022/4/8</h3><ul><li>\u4F18\u5316<code>store</code>\u90E8\u5206, <code>auto.ts</code>\u81EA\u52A8\u751F\u6210<code>mutations</code><pre><code class="language-typescript"><span class="hljs-keyword">export</span> <span class="hljs-keyword">type</span> <span class="hljs-title class_">States</span>&lt;<span class="hljs-title class_">Class</span>, <span class="hljs-title class_">Key</span> <span class="hljs-keyword">extends</span> keyof <span class="hljs-title class_">Class</span> = keyof <span class="hljs-title class_">Class</span>&gt; = {
    [<span class="hljs-title class_">Item</span> <span class="hljs-keyword">in</span> <span class="hljs-title class_">Key</span>]: <span class="hljs-title class_">State</span>&lt;<span class="hljs-title class_">Class</span>, <span class="hljs-title class_">Class</span>[<span class="hljs-title class_">Key</span>]&gt; 
}
</code></pre><blockquote><p>\u4F3C\u4E4E\u6709\u65F6<code>sidebar</code>\u6CA1\u53CD\u5E94\u2026 \u4E0D\u8FC7<code>language</code>&amp;<code>theme</code>\u5012\u662F\u6CA1\u4EC0\u4E48\u95EE\u9898\u2026 <em>\u602A</em></p></blockquote></li><li>\u90E8\u5206\u9875\u9762</li></ul><h3>2022/4/5</h3><ul><li>Markdown \u4F5C\u4E3A Vue</li><li>\u81EA\u52A8Router</li><li>State\u521D\u7248\u7CFB\u7EDF</li></ul><h3>2022/4/3</h3><ul><li>\u57FA\u672C\u67B6\u6784 (Provider, Viewer \u2026)</li></ul><h3>2022/4/2</h3><ul><li><a href="https://v3.cn.vuejs.org/">vue3</a> <em>\u57FA\u7840\u6846\u67B6</em></li><li><a href="https://cn.vitejs.dev/">vite</a> <em>\u6784\u5EFA\u5DE5\u5177</em></li><li><a href="https://router.vuejs.org/">vue-router</a> <em>\u8DEF\u7531\u7CFB\u7EDF</em></li><li><a href="https://vuex.vuejs.org/">vuex</a> <em>\u72B6\u6001\u7BA1\u7406</em></li><li><a href="https://kazupon.github.io/vue-i18n/zh/introduction.html">vue-i18n</a> <em>\u56FD\u9645\u5316</em></li><li><a href="https://www.naiveui.com/">naive-ui</a> <em>\u7EC4\u4EF6\u5E93</em></li></ul><blockquote><p>\u7237\u51FA\u751F\u4E86</p></blockquote><h1><s>\u53CB\u60C5</s>\u94FE\u63A5 \u{1F517}</h1><blockquote><p>\u6240\u8C13&quot;\u52A0\u901F&quot;\u4F3C\u4E4E\u4E5F\u4E0D\u600E\u4E48\u6837</p></blockquote><hr><ul><li><a href="https://github.com/Yashbstnmnhss/Yashbstnmnhss.github.io">Github</a></li><li><a href="https://yashbstnmnhss.github.io">Github\u7AD9\u70B9(\u6162)</a></li><li><a href="https://yashbstnmnhss.vercel.app">\u52A0\u901F?\u7AD9\u70B9</a></li></ul>`,21),i=[a],r={setup(c,{expose:s}){return s({frontmatter:{}}),(p,h)=>(l(),e("div",o,i))}};export{r as default};
