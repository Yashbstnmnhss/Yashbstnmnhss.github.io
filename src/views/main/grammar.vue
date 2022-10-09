<route lang="yaml">
name: grammar
</route>

<script lang="ts" setup>
import Grammar_ from './_grammar/grammar.md'
import { NH1, NSpace, NH3, NCard, NTable, NCode, NScrollbar } from 'naive-ui'
</script>

<template>
    <NH1>{{ $t('layouts.MainLayout.grammar') }}</NH1>
    <NSpace vertical size="large">
        <NCard title="新增">
            <Grammar_ />
        </NCard>
        <NCard title="风格">
            <NH3>1.命名</NH3>
            <span>
                <NTable bordered style="max-width: 100%">
                    <tbody>
                        <tr>
                            <td>
                                用
                                <b>PascalCase</b>
                                命名类型,空间,部分成员(例如
                                <i>方法</i>
                                ,
                                <i>属性</i>
                                ,
                                <i>事件</i>
                                等)
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                            namespace MyNamespace;\r\npublic class MyClass \r\n{\r\n    public string MyString { get; set; }\r\n    public void MyMethod() => _ = 0;\r\n    public event Action MyEvent;\r\n}
                            `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                而对于
                                <i>变量</i>
                                ,无论
                                <i>局部</i>
                                还是
                                <i>类成员</i>
                                ,可以使用
                                <b>camelCase</b>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                            internal int anotherVar = 114514;\r\npublic void MyMethod() \r\n{\r\n    var myVar = 1919810;\r\n    this.anotherVar = myVar;\r\n}
                            `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                再者对于
                                <i>常量</i>
                                或那些
                                <i>类似常量作用</i>
                                的变量/属性,也可采用
                                <b>UPPERCASE</b>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                            public const double HENTAI = 277353;\r\npublic static readonly MyClass INSTANCE = new();
                            `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                而对于接口或某些特殊作用的类(譬如
                                <i>异常类</i>
                                ,
                                <i>扩展类</i>
                                ,
                                <i>Attribute</i>
                                等), 接口用
                                <b>I作为前缀</b>
                                , 异常类一般会有
                                <b>Exception或Error</b>
                                相似的后缀, 扩展类可以加上
                                <b>Extensions</b>
                                后缀
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                            public interface IHomoable {} \r\npublic static class HomoExtensions {} \r\npublic class HomoException : Exception {}
                            `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                    </tbody>
                </NTable>
            </span>
            <NH3>2.格式</NH3>
            <span>
                <NTable bordered style="max-width: 100%">
                    <thead>
                        <tr>
                            <td>描述</td>
                            <td>戳了</td>
                            <td>该做的</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                采用
                                <b>Allman风格</b>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    class Class {
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    class Class \r\n{
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <i>*有时也可在一行</i>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    public string Property { get; set; }
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b>四空格(软制表符)</b>
                                缩进
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    void Method() \r\n{\r\n  //两空格\r\n  var mantou = fuze;\r\n}
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    void Method() \r\n{\r\n    //四空格\r\n    var mantou = fuze;\r\n}
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                        <tr>
                            <td>安插空格</td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    if(true); \r\nclass Lion:Cat{} \r\nCall(1,2,3,()=>0);
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                            <td>
                                <NScrollbar x-scrollable>
                                    <NCode
                                        trim
                                        language="csharp"
                                        :code="`
                                    if (true); \r\nclass Lion : Cat {} \r\nCall(1, 2, 3, () => 0);
                                    `"
                                    />
                                </NScrollbar>
                            </td>
                        </tr>
                    </tbody>
                </NTable>
            </span>
        </NCard>
    </NSpace>
</template>
