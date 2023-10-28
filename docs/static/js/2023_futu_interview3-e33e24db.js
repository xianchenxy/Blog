import"./vue-126afe2a.js";import{o as t,c as s,S as o,b as p,a as e}from"./@vue-268a4df7.js";const S={},T=`<h3>\u4F60\u4E3A\u4EC0\u4E48\u79BB\u804C</h3>
<p>\u6C1B\u56F4\u4E0D\u597D\uFF0C\u7EC4\u6210\u5458\u90FD\u8D70\u5149\u4E86\u3002</p>
<h3>\u8BF4\u4E00\u4E0Bscript\u7684async\u548Cdefer\u6807\u8BB0\uFF0C\u5B83\u4EEC\u7684\u533A\u522B\u548C\u539F\u7406</h3>
<p>\u7565\u3002</p>
<h3>\u6709\u4E00\u4E2Ascript\u8D44\u6E90\uFF0C\u91CC\u9762\u6709\u4E00\u4E2Afor\u5FAA\u73AF\uFF0C\u91CC\u9762\u662F\u4E00\u4E9B\u5F88\u8017\u65F6\u7684\u64CD\u4F5C</h3>
<p>\u770B\u662F\u5426\u9700\u8981\u7ACB\u523B\u52A0\u8F7D\uFF0C\u4E0D\u662F\u7684\u8BDD\u5EF6\u540E\u3002\u7136\u540E\u8003\u8651\u5206\u65F6\u6E32\u67D3\uFF0C\u8FD8\u6709Web workers\u3002
\u589E\u52A0\u8FDB\u5EA6\u6761\u7B49\u63D0\u793A\u3002
(20231024\uFF1A\u540E\u9762\u5728\u770Bpromise\u7684\u65F6\u5019\u7A81\u7136\u8111\u6D77\u91CC\u95EA\u73B0\u51FA\u4E2A\u753B\u9762\uFF0C\u8FD9\u91CC\u5176\u5B9E\u8FD8\u53EF\u4EE5\u901A\u8FC7<code>requestIdleCallback</code>\u6216\u8005<code>requestAnimationFrame</code>\u6765\u5B9E\u73B0\uFF0C\u53EA\u4E0D\u8FC7<a href="https://caniuse.com/?search=requestIdleCallback">\u517C\u5BB9\u6027</a>\u5DEE\uFF0C\u540E\u8005\u517C\u5BB9\u6027\u597D\u4E9B)</p>
<h3>\u6709\u5F88\u591A\u9759\u6001\u8D44\u6E90\u8981\u52A0\u8F7D\uFF0C\u4E00\u4E2A\u57DF\u540D\u548C\u591A\u4E2A\u57DF\u540D\u52A0\u8F7D\u6709\u4EC0\u4E48\u4E0D\u4E00\u6837</h3>
<p>\u7565\u3002</p>
<h3>\u8BF4\u4E00\u4E0Bhttps</h3>
<p>\u7565\u3002</p>
<h3>\u8BF4\u4E00\u4E0Bhttp2</h3>
<p>\u4E0D\u4E86\u89E3\uFF0C\u522B\u95EE\u4E86\u3002</p>
<h3>\u670D\u52A1\u7AEF\u7684\u72B6\u6001\u7801\u4E2D3xx\u901A\u5E38\u8868\u793A\u91CD\u5B9A\u5411\uFF0C\u8BF4\u4E00\u4E0B3xx\u91CC\u5404\u4E2A\u72B6\u6001\u7801\u7684\u542B\u4E49</h3>
<p>\u7565\u3002</p>
<h3>node\u4E86\u89E3\u8FC7\u5417\uFF1F</h3>
<p>\u4E0D\u4F1A\u3002</p>
<h3>\u7F16\u7A0B\u98981</h3>
<p>\u6709\u4E00\u4E2A\u6574\u578B\u65E0\u5E8F\u7684\u6570\u7EC4\uFF0C\u73B0\u5728\u9700\u8981\u627E\u51FA\u6570\u7EC4\u91CC\u9762\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u7684\u6570\uFF1A</p>
<ul>
<li>\u8BE5\u6570\u6BD4\u6240\u6709\u6392\u5728\u5B83\u524D\u9762\u7684\u6570\u90FD\u8981\u5927</li>
<li>\u8BE5\u6570\u6BD4\u6240\u6709\u6392\u5728\u5B83\u540E\u9762\u7684\u6570\u90FD\u8981\u5C0F</li>
</ul>
<pre><code class="language-text">case1: [4, 8 , 10, 12] // 8, 10
case2: [4, 8, 9, 7, 10, 12, 35, 20] // [4, 8, 9], [7, 12, 35]
</code></pre>
<h3>\u7F16\u7A0B\u98982</h3>
<p>\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32S\uFF0C\u91CC\u9762\u90FD\u662F\u5927\u5199\u5B57\u6BCD\u3002
\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32T\uFF0C\u521D\u59CB\u4E3A\u7A7A\u4E32\u3002
\u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u4EFB\u4E00\u64CD\u4F5C\uFF1A</p>
<ul>
<li>\u4ECES\u5F00\u5934\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u52A0\u5230T\u4E2D</li>
<li>\u4ECES\u672B\u5C3E\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u52A0\u5230T\u4E2D
\u8BF7\u95EE\u5982\u4F55\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u5F97T\u7684\u5B57\u5178\u5E8F\u5217\u6700\u5C0F</li>
</ul>
<pre><code class="language-text">case: S = 'ABCDBC' // T = 'ABCBCD'
</code></pre>
<h3>\u4F60\u89C9\u5F97\u4E1A\u52A1\u5F00\u53D1\u6700\u91CD\u8981\u7684\u662F\u4EC0\u4E48</h3>
<ol>
<li>\u9700\u6C42\uFF08\u76EE\u6807\uFF09</li>
<li>\u8D44\u6E90\uFF08\u5305\u62EC\u4EBA\u529B\uFF09\u548C\u4EA4\u4ED8\u65F6\u95F4</li>
<li>\u5173\u6CE8\u5DE5\u4F5C\u5176\u4ED6\u6210\u5458\u7684\u60C5\u51B5\uFF0C\u53C2\u7167\u7B2C2\u70B9\u3002</li>
</ol>
<p>\u6CA1\u6709\u81EA\u6211\u4ECB\u7ECD\u548C\u53CD\u95EE\uFF0C\u770B\u8D77\u6765\u5F88\u5FD9\u8D76\u65F6\u95F4\u3002</p>
`,c=p('<h3>\u4F60\u4E3A\u4EC0\u4E48\u79BB\u804C</h3><p>\u6C1B\u56F4\u4E0D\u597D\uFF0C\u7EC4\u6210\u5458\u90FD\u8D70\u5149\u4E86\u3002</p><h3>\u8BF4\u4E00\u4E0Bscript\u7684async\u548Cdefer\u6807\u8BB0\uFF0C\u5B83\u4EEC\u7684\u533A\u522B\u548C\u539F\u7406</h3><p>\u7565\u3002</p><h3>\u6709\u4E00\u4E2Ascript\u8D44\u6E90\uFF0C\u91CC\u9762\u6709\u4E00\u4E2Afor\u5FAA\u73AF\uFF0C\u91CC\u9762\u662F\u4E00\u4E9B\u5F88\u8017\u65F6\u7684\u64CD\u4F5C</h3><p>\u770B\u662F\u5426\u9700\u8981\u7ACB\u523B\u52A0\u8F7D\uFF0C\u4E0D\u662F\u7684\u8BDD\u5EF6\u540E\u3002\u7136\u540E\u8003\u8651\u5206\u65F6\u6E32\u67D3\uFF0C\u8FD8\u6709Web workers\u3002 \u589E\u52A0\u8FDB\u5EA6\u6761\u7B49\u63D0\u793A\u3002 (20231024\uFF1A\u540E\u9762\u5728\u770Bpromise\u7684\u65F6\u5019\u7A81\u7136\u8111\u6D77\u91CC\u95EA\u73B0\u51FA\u4E2A\u753B\u9762\uFF0C\u8FD9\u91CC\u5176\u5B9E\u8FD8\u53EF\u4EE5\u901A\u8FC7<code>requestIdleCallback</code>\u6216\u8005<code>requestAnimationFrame</code>\u6765\u5B9E\u73B0\uFF0C\u53EA\u4E0D\u8FC7<a href="https://caniuse.com/?search=requestIdleCallback">\u517C\u5BB9\u6027</a>\u5DEE\uFF0C\u540E\u8005\u517C\u5BB9\u6027\u597D\u4E9B)</p><h3>\u6709\u5F88\u591A\u9759\u6001\u8D44\u6E90\u8981\u52A0\u8F7D\uFF0C\u4E00\u4E2A\u57DF\u540D\u548C\u591A\u4E2A\u57DF\u540D\u52A0\u8F7D\u6709\u4EC0\u4E48\u4E0D\u4E00\u6837</h3><p>\u7565\u3002</p><h3>\u8BF4\u4E00\u4E0Bhttps</h3><p>\u7565\u3002</p><h3>\u8BF4\u4E00\u4E0Bhttp2</h3><p>\u4E0D\u4E86\u89E3\uFF0C\u522B\u95EE\u4E86\u3002</p><h3>\u670D\u52A1\u7AEF\u7684\u72B6\u6001\u7801\u4E2D3xx\u901A\u5E38\u8868\u793A\u91CD\u5B9A\u5411\uFF0C\u8BF4\u4E00\u4E0B3xx\u91CC\u5404\u4E2A\u72B6\u6001\u7801\u7684\u542B\u4E49</h3><p>\u7565\u3002</p><h3>node\u4E86\u89E3\u8FC7\u5417\uFF1F</h3><p>\u4E0D\u4F1A\u3002</p><h3>\u7F16\u7A0B\u98981</h3><p>\u6709\u4E00\u4E2A\u6574\u578B\u65E0\u5E8F\u7684\u6570\u7EC4\uFF0C\u73B0\u5728\u9700\u8981\u627E\u51FA\u6570\u7EC4\u91CC\u9762\u540C\u65F6\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6\u7684\u6570\uFF1A</p><ul><li>\u8BE5\u6570\u6BD4\u6240\u6709\u6392\u5728\u5B83\u524D\u9762\u7684\u6570\u90FD\u8981\u5927</li><li>\u8BE5\u6570\u6BD4\u6240\u6709\u6392\u5728\u5B83\u540E\u9762\u7684\u6570\u90FD\u8981\u5C0F</li></ul>',19),h=e("pre",null,[e("code",{class:"language-text","v-pre":"true"},`case1: [4, 8 , 10, 12] // 8, 10
case2: [4, 8, 9, 7, 10, 12, 35, 20] // [4, 8, 9], [7, 12, 35]
`)],-1),a=e("h3",null,"\u7F16\u7A0B\u98982",-1),r=e("p",null,"\u6709\u4E00\u4E2A\u5B57\u7B26\u4E32S\uFF0C\u91CC\u9762\u90FD\u662F\u5927\u5199\u5B57\u6BCD\u3002 \u6709\u4E00\u4E2A\u5B57\u7B26\u4E32T\uFF0C\u521D\u59CB\u4E3A\u7A7A\u4E32\u3002 \u53EF\u4EE5\u8FDB\u884C\u4EE5\u4E0B\u4EFB\u4E00\u64CD\u4F5C\uFF1A",-1),i=e("ul",null,[e("li",null,"\u4ECES\u5F00\u5934\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u52A0\u5230T\u4E2D"),e("li",null,"\u4ECES\u672B\u5C3E\u5220\u9664\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u52A0\u5230T\u4E2D \u8BF7\u95EE\u5982\u4F55\u64CD\u4F5C\u53EF\u4EE5\u4F7F\u5F97T\u7684\u5B57\u5178\u5E8F\u5217\u6700\u5C0F")],-1),u=e("pre",null,[e("code",{class:"language-text","v-pre":"true"},`case: S = 'ABCDBC' // T = 'ABCBCD'
`)],-1),d=e("h3",null,"\u4F60\u89C9\u5F97\u4E1A\u52A1\u5F00\u53D1\u6700\u91CD\u8981\u7684\u662F\u4EC0\u4E48",-1),_=e("ol",null,[e("li",null,"\u9700\u6C42\uFF08\u76EE\u6807\uFF09"),e("li",null,"\u8D44\u6E90\uFF08\u5305\u62EC\u4EBA\u529B\uFF09\u548C\u4EA4\u4ED8\u65F6\u95F4"),e("li",null,"\u5173\u6CE8\u5DE5\u4F5C\u5176\u4ED6\u6210\u5458\u7684\u60C5\u51B5\uFF0C\u53C2\u7167\u7B2C2\u70B9\u3002")],-1),m=e("p",null,"\u6CA1\u6709\u81EA\u6211\u4ECB\u7ECD\u548C\u53CD\u95EE\uFF0C\u770B\u8D77\u6765\u5F88\u5FD9\u8D76\u65F6\u95F4\u3002",-1);function l(n,C){return t(),s(o,null,[c,h,a,r,i,u,d,_,m],64)}const x={render:l};x.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/2023_futu_interview3.md";const f=n=>({components:n,render:l});export{x as VueComponent,f as VueComponentWith,S as attributes,T as html};