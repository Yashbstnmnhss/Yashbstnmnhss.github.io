import{c as a,o as n,b as l}from"./index.f590f622.js";const p={class:"markdown-body"},t=l(`<ol><li><h4>\u58F0\u660E</h4></li></ol><pre><code class="language-cs"><span class="hljs-function"><span class="hljs-keyword">abstract</span> <span class="hljs-keyword">class</span> CheckingAttribute&lt;T&gt; 
    <span class="hljs-title">requires</span>(<span class="hljs-params">child has @attribute(*</span>)) 
    @<span class="hljs-title">attribute</span>(<span class="hljs-params">[_.Parameter&lt;T&gt;, _.TypeParameter&lt;T&gt;, _.Property&lt;T&gt;, _.Field&lt;T&gt;]</span>)</span>
{
    [<span class="hljs-meta">System.Compiler.IDEInteraction(_.CheckingEnsure)</span>]
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">virtual</span> T <span class="hljs-title">OnCheck</span>(<span class="hljs-params">T val</span>)</span> =&gt; val;
}
<span class="hljs-keyword">sealed</span> <span class="hljs-keyword">class</span> <span class="hljs-title">RangeAttribute</span>&lt;<span class="hljs-title">T</span> <span class="hljs-title">shapeof</span> <span class="hljs-title">IComparable</span>&gt; : <span class="hljs-title">CheckingAttribute</span>&lt;<span class="hljs-title">T</span>&gt; @<span class="hljs-title">attribute</span>(_.<span class="hljs-title">Parameter</span>&lt;<span class="hljs-title">T</span>&gt;)
{
    <span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-title">constructor</span>(<span class="hljs-params"><span class="hljs-keyword">public</span> T min, <span class="hljs-keyword">public</span> T max</span>) requires min &lt; max &amp;&amp; (<span class="hljs-params">min != <span class="hljs-literal">null</span> || max != <span class="hljs-literal">null</span></span>)</span>;
    <span class="hljs-function"><span class="hljs-keyword">public</span> T <span class="hljs-title">OnCheck</span>(<span class="hljs-params">T val</span>) ensures <span class="hljs-keyword">return</span> &gt; min &amp;&amp; <span class="hljs-title">return</span> &lt; max</span>
    {
        <span class="hljs-keyword">if</span> (val &lt; min) <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> OutOfRangeException(<span class="hljs-string">$&quot;<span class="hljs-subst">{val}</span> &lt; min&quot;</span>);
        <span class="hljs-keyword">if</span> (val &gt; max) <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> OutOfRangeException(<span class="hljs-string">$&quot;<span class="hljs-subst">{val}</span> &gt; max&quot;</span>);
        <span class="hljs-keyword">return</span> val;
    }
}
<span class="hljs-function"><span class="hljs-keyword">sealed</span> <span class="hljs-keyword">class</span> <span class="hljs-title">OutOfRangeException</span>(<span class="hljs-params"><span class="hljs-built_in">string</span> msg</span>) @<span class="hljs-title">throwable</span>(<span class="hljs-params">msg</span>)</span>;

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Method</span>(<span class="hljs-params">[Range&lt;<span class="hljs-built_in">float</span>&gt;(<span class="hljs-number">0</span>, <span class="hljs-built_in">float</span>.MaxValue</span>)] <span class="hljs-built_in">float</span> input)</span>;

Method(<span class="hljs-number">-1</span>); <span class="hljs-comment">// Error</span>
Method(<span class="hljs-number">2</span>); <span class="hljs-comment">// Okay</span>

<span class="hljs-function"><span class="hljs-keyword">public</span> <span class="hljs-keyword">void</span> <span class="hljs-title">Method2</span>(<span class="hljs-params">[Range&lt;<span class="hljs-built_in">float</span>&gt;(<span class="hljs-number">0</span>, <span class="hljs-number">10</span></span>)] <span class="hljs-built_in">string</span> input)</span>; 
<span class="hljs-comment">// Error, Parameter &quot;string&quot; type is not &quot;float&quot; type that defined in RangeAttribute</span>
</code></pre><ol start="2"><li><h4>\u7C7B\u578B</h4></li><li><h4>\u4F18\u5316</h4></li></ol>`,3),e=[t],j={setup(c,{expose:s}){return s({frontmatter:{}}),(h,i)=>(n(),a("div",p,e))}};export{j as default};
