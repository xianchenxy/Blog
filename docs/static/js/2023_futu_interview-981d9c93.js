import"./vue-c0bdf325.js";import{o as d,c,Q as r,b as s,a as e,a5 as n}from"./@vue-505977f7.js";const I={},k=`<h3>\u81EA\u6211\u4ECB\u7ECD</h3>
<p>\u59D3\u540D\uFF0C\u5DE5\u4F5C\u7ECF\u5386\uFF0C\u5728\u4EC0\u4E48\u516C\u53F8\u505A\u4E86\u4EC0\u4E48\uFF0C\u4EC0\u4E48\u4EAE\u70B9/\u4E1A\u7EE9\u3002
\u5DE5\u4F5C\u4E0A\u7684\u8868\u73B0\u5427\u5566\u5427\u5566\u7684\u3002</p>
<h3>\u9879\u76EE\u505A\u4E86\u54EA\u4E9B\u4F18\u5316</h3>
<p>\u5427\u5566\u5427\u5566\u3002</p>
<h3>\u7B80\u5386\u4E0A\u4F60\u63D0\u5230\u4E86 CDN \u7684\u65B0\u65B9\u6848\uFF0C\u7B80\u5355\u8BF4\u4E00\u4E0B</h3>
<p>\u4E24\u7C7B\uFF0C\u4E00\u7C7B\u662Fajax\u8BF7\u6C42\u7684\u670D\u52A1\u5931\u8D25\u65F6\u7684\u66FF\u6362\u670D\u52A1host\u5E76\u91CD\u8BD5\uFF1B
\u53E6\u4E00\u7C7B\u662F\u56FE\u7247\uFF0Ccss\u3001js\u7B49\u9759\u6001\u8D44\u6E90\u7684\u57DF\u540D\u5BB9\u707E\u3002</p>
<ol>
<li>\u5728<code>compiler.hooks.thisCompilation.tap</code>\u4E2D\u5B9A\u4E49\u94A9\u5B50<code>compilation.hooks.processAssets.tapAsync</code>\uFF0C\u5728\u56DE\u8C03\u4E2D\uFF0C\u5224\u65AD\u662F\u5426\u4E3Ajs\u8D44\u6E90\uFF0C\u5982\u679C\u662F\u5219\u5728\u6587\u4EF6\u5185\u5BB9\u5F00\u5934\u6CE8\u5165\u4E00\u6BB5js\u4EE3\u7801\uFF0C\u7ED9\u8BBE\u7F6E\u4E00\u4E2A\u5F53\u524D\u6587\u4EF6\u52A0\u8F7D\u6210\u529F\u7684\u5168\u5C40\u6807\u8BB0\u3002</li>
<li>\u7136\u540E<code>compiler.hooks.compilation.tap</code>\u4E2D\u501F\u52A9<code>html-webpack-plugin</code>\u7684\u94A9\u5B50\uFF0C\u5B9A\u4E49<code>hooks.alterAssetTags.tap</code>\u548C<code>hooks.beforeEmit.tapAsync</code>,\u524D\u8005\u7528\u6765\u6DFB\u52A0<code>link</code>\u548C<code>script</code>\u7684<code>crossorigin</code>\u5C5E\u6027\uFF0C\u548C\u7ED1\u5B9A<code>link</code>\u7684<code>onerror</code>\u56DE\u8C03\uFF0C<code>script</code>\u4E0D\u7528\uFF0C\u3002\u540E\u8005\u7528\u6B63\u5219\u5339\u914D\u5230head\u6807\u7B7E\uFF0C\u63D2\u5165<code>cdn\u5BB9\u9519\u903B\u8F91</code>\u548C<code>\u5168\u5C40\u5F02\u5E38handelError\u51FD\u6570</code>\uFF0C\u63A5\u7740\u5339\u914D\u6240\u6709\u4E0D\u5E26<code>defer</code>\u548C<code>async</code>\u6807\u8BB0\u7684<code>script</code>\u6807\u7B7E\uFF0C\u5728\u7ED3\u675F\u6807\u7B7E\u672B\u5C3E\u8FFD\u52A0\u4E00\u6BB5js\uFF0C\u5224\u5B9A<code>script</code>\u6807\u7B7E\u662F\u5426\u6709\u52A0\u8F7D\u6210\u529F\u540E\u8BBE\u7F6E\u7684\u5168\u5C40\u6807\u8BB0\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u53BB\u6267\u884C\u4E00\u4E0B<strong>\u5168\u5C40handleError</strong>\u4E8B\u4EF6\u3002</li>
<li>\u5BF9\u4E8E\u56FE\u7247\u8D44\u6E90\uFF0C\u53EA\u9700\u6DFB\u52A0<code>document.addEventListener('onerror')</code>\u4E8B\u4EF6\uFF0C\u7167\u65E7\u6267\u884ChandleError\u4E8B\u4EF6\u5373\u53EF\uFF0C\u65E0\u9700\u989D\u5916\u5904\u7406\u3002</li>
</ol>
<h3>http\u548Chttps</h3>
<p>\u6CA1\u590D\u4E60\uFF0C\u4E0D\u4F1A\u3002</p>
<h3>\u524D\u7AEF\u7F13\u5B58</h3>
<p>\u5206\u4E24\u7C7B\u5F3A\u7F13\u5B58\u548C\u534F\u5546\u7F13\u5B58\uFF0C\u5F3A\u7F13\u5B58\u662F<code>cache-control</code>\u548C<code>expired</code>\uFF0C\u534F\u5546\u7F13\u5B58\u5219\u662F\u90A34\u4E2A\u6807\u8BB0\uFF0C<code>e-tag</code>/<code>if-none-match</code>\u3001<code>last-modified</code>/<code>if-modified-sinece</code></p>
<h3>\u4F60\u63D0\u5230\u4E86Promise\uFF0C\u8BF4\u4E00\u4E0B\u4EC0\u4E48\u662F\u5F02\u6B65\u548C\u4F7F\u7528\u5F02\u6B65\u7684\u573A\u666F</h3>
<p>\u65E0\u975E\u5C31\u662F\u5BF9\u4E8E\u65E0\u6CD5\u7ACB\u523B\u83B7\u77E5\u7ED3\u679C\u7684\u64CD\u4F5C\u8FDB\u884C\u5F02\u6B65\u3002</p>
<p>\u65E9\u671F\u662F\u4F7F\u7528\u56DE\u8C03\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u90A3\u6837\u7684\u5C42\u6B21\u5D4C\u5957\u592A\u6DF1\uFF0C\u5BB9\u6613\u5F62\u6210\u56DE\u8C03\u5730\u72F1\u3002
\u540E\u6765\u6709\u4E86<code>Promise</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u6241\u5E73/\u540C\u6B65\u7684\u65B9\u5F0F\u53BB\u4E66\u5199\u4EE3\u7801\uFF0C\u66F4\u7B26\u5408\u4EBA\u7684\u601D\u7EF4\u4E60\u60EF\u3002</p>
<p>\u573A\u666F\uFF1A
\u573A\u666F\u7684\u8BDD\u6BD4\u5982vue2\u91CC\u9762\u4FEE\u6539\u4E86\u6570\u636E\uFF0C\u8981\u83B7\u53D6\u9875\u9762\u66F4\u65B0\u7684\u6570\u636E\u9700\u8981\u901A\u8FC7<code>$nextTick</code>\uFF0C\u91CC\u9762\u5C31\u662F\u4F7F\u7528\u7684\u5F02\u6B65\u65B9\u5F0F\uFF0C\u8FD8\u6709\u5C31\u662F\u524D\u9762\u9879\u76EE\u91CC\u63D0\u5230\u7684\u9879\u76EE\u4F18\u5316\uFF0C\u901A\u8FC7promise\u7B49\u5F85\u8003\u751F\u63D0\u4EA4\u5931\u8D25\u7684\u7B54\u6848\u518D\u6B21\u63D0\u4EA4\u3002</p>
<h3>vue\u54CD\u5E94\u5F0F\u539F\u7406</h3>
<p>\u5206\u666E\u901A\u503C\u548C\u5F15\u7528\u7C7B\u578B\u3002
\u666E\u901A\u503C\u76F4\u63A5<code>Object.defineProperty</code>\u5373\u53EF\u3002
\u5F15\u7528\u7C7B\u578B\u5206\u5BF9\u8C61\u548C\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u5BF9\u8C61\uFF0C\u9700\u8981<strong>\u9012\u5F52</strong>\u548C<strong>\u904D\u5386</strong>\u53BB\u4F7F\u7528<code>Object.defineProperty</code>\u5E76\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u8FD9\u4E5F\u662Fvue2\u6BD4vue3\u5360\u7528\u5185\u5B58\u66F4\u9AD8\u548C\u6548\u7387\u66F4\u6162\u7684\u4E00\u5927\u539F\u56E0\u3002
\u6570\u7EC4\u7684\u8BDD\u7531\u4E8E\u4E1A\u52A1\u4E0A\u6570\u7EC4\u7684\u957F\u5EA6\u53EF\u80FD\u51E0\u5341\u4E07\uFF0C\u6240\u4EE5\u5BF9\u7D22\u5F15\u7684\u76D1\u542C\u7684\u8BDD\u5F00\u9500\u5F88\u6050\u6016\uFF0C\u6240\u4EE5\u91C7\u53D6\u4E86\u52AB\u6301\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u5982<code>push</code>\u3001<code>shift</code>\u7B49\u3002</p>
<h4>\u7ED9\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u76F4\u63A5\u65B0\u589E\u4E00\u4E2A\u5C5E\u6027\uFF0C\u80FD\u54CD\u5E94\u5230\u5417\uFF1F</h4>
<p>\u4E0D\u884C\uFF0C\u56E0\u4E3A<code>get</code>\u3001<code>set</code>\u65E0\u6CD5\u89E6\u53D1<code>delete</code>\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u9700\u8981<code>$set</code></p>
<h3>\u8BF4\u4E00\u4E0Bvue2\u7684\u751F\u547D\u5468\u671F\uFF0C\u4EE5\u53CA\u4ED6\u4EEC\u5728\u4E1A\u52A1\u91CC\u7684\u5E94\u7528</h3>
<p><code>beforeCreate</code>\uFF1A\u4E00\u822C\u7528\u6765\u63D0\u524D\u83B7\u53D6\u4E9B\u6570\u636E\uFF0C\u4F8B\u5982\u9875\u9762\u914D\u7F6E</p>
<p><code>created</code>\uFF1A\u8FD9\u65F6\u53EF\u4EE5\u62FF\u5230\u7EC4\u4EF6\u6570\u636E\u4E86\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u8FDB\u884C\u4E9B\u6570\u636E\u64CD\u4F5C\u4EC0\u4E48\u7684\uFF1B</p>
<p><code>beforeMounted</code>\uFF1A\u4E00\u822C\u6CA1\u600E\u4E48\u7528</p>
<p><code>mounted</code>\uFF1A\u8FD9\u91CC\u53EF\u4EE5\u62FF\u5230\u9875\u9762dom\u4E86\uFF0C\u53EF\u4EE5\u64CD\u4F5Cdom</p>
<p><code>beforeUpdate\u548CUpdated</code>\uFF1A\u8FD9\u4E24\u4E2A\u4E00\u822C\u4E0D\u600E\u4E48\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5199\u4E0D\u597D\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\uFF0C\u56E0\u4E3A\u6570\u636E\u66F4\u65B0\u90FD\u4F1A\u8D70\u8FD9\u91CC\u3002\u4F46\u6709\u4E9B\u5F88\u7279\u6B8A\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u8001\u9879\u76EE\u7684\u4EE3\u7801\uFF0C\u6CA1\u529E\u6CD5\u4E86\u53EA\u80FD\u5728\u8FD9\u91CC\u64CD\u4F5C\uFF0C\u8FD8\u6709\u5C31\u662F\u53EF\u80FD\u8FDB\u884C\u4E9B\u65E5\u5FD7\u4E0A\u62A5\u3002\u603B\u4E4B\u5C31\u662F\u5728\u8FD9\u91CC\u5904\u7406\u67D0\u4E9B\u6570\u636E\u66F4\u65B0\u540E\u7684\u64CD\u4F5C\u3002</p>
<p><code>beforeDestroyed\u548Cdestroy</code>\uFF1A\u8FD9\u91CC\u4E00\u822C\u662F\u8FDB\u884C\u6570\u636E\u7684\u5378\u8F7D\uFF0C\u4F8B\u5982\u95ED\u5305\u51FD\u6570\u7684\u5F15\u7528\u53D6\u6D88\uFF0C\u7ED1\u5B9A\u7684\u76D1\u542C\u51FD\u6570\u53D6\u6D88\u7B49\u3002</p>
<h3>\u4E24\u9053\u7B14\u8BD5\u9898</h3>
<p>\u5410\u69FD\u4E0B\u8FD9\u4E2A\u9898\u76EE\u7684\uFF0C\u63CF\u8FF0\u4E0D\u591F\u6E05\u6670\uFF0C\u7406\u89E3\u9519\u4E86\u3002
\u867D\u7136\u6700\u540E\u6211\u7684\u601D\u8DEF\u548C\u7ED3\u6784\u90FDOK\u3002</p>
<pre><code class="language-js">// \u7EA2\u706F\u4E00\u6B21\u6301\u7EED\u4EAE3\u79D2\uFF0C\u9EC4\u706F\u6301\u7EED2\u79D2\u4EAE\u4E00\u6B21\uFF0C\u7EFF\u706F\u6301\u7EED1\u79D2\u4EAE\u4E00\u6B21\uFF1B
// \u5982\u4F55\u8BA9\u4E09\u4E2A\u706F\u4E0D\u65AD\u4EA4\u66FF\u91CD\u590D\u4EAE\u706F\uFF1F
// \u987A\u5E8F

// \u8981\u6C42\uFF1A\u6BCF\u4E00\u79D2\u6253\u5370\u5F53\u524D\u5728\u4EAE\u7684\u706F

let currentLight = 'red';

function redLight() {
	return new Promise(res =&gt; {
            setTimeout(() =&gt; res('yellow'), 3000);
	});
}

function yellowLight() {
	return new Promise(res =&gt; {
            setTimeout(() =&gt; res('green'), 2000);
	});
}

function greenLight() {
	return new Promise(res =&gt; {
            setTimeout(() =&gt; res('red'), 1000);
	});
}

function run() {
	new Promise(res =&gt; {
		currentLight = 'red';
		return res(redLight().then(light =&gt; {
			    currentLight = light;
			    return yellowLight();
            }).then(light =&gt; {
                currentLight = light;
                return greenLight();
            }));
    }).finally(run);
}

run();

function managerRun() {
    console.log(currentLight);
    setTimeout(managerRun, 1000);
}

console.log(currentLight);
setTimeout(managerRun, 1000);
</code></pre>
<pre><code class="language-js">// \u6709\u5E8F\u6570\u7EC4 A \u548C B, \u8BF7\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5224\u65AD B \u662F\u5426\u4E3A A \u7684\u5B50\u96C6
// \u8F93\u5165\uFF1AA = [1,2,3,4], B=[2,2,4]
// \u8F93\u51FA\uFF1Atrue
const A = [1, 2, 3, 4, 4, 5];
const B = [2, 2, 4, 5];
let aIndex = 0;
let bIndex = 0;

let flag = true;

while (true) {
	if (A[aIndex] &amp;&amp; B[bIndex] === undefined) {
		flag = true;
		break;
	}

	if (B[bIndex] &amp;&amp; A[aIndex] === undefined) {
		flag = false;
		break;
	}

	if (A[aIndex] === B[bIndex]) {
		bIndex++;
		continue;
	}

	if (A[aIndex] &lt; B[bIndex]) {
		aIndex++;
		continue;
	}
	if (A[aIndex] &gt; B[bIndex]) {
		bIndex++;
		continue;
	}
}

console.log(flag);
</code></pre>
<h3>\u4F60\u662F\u4E0D\u662F\u4E4B\u524D\u7EAF\u524D\u7AEF\u7684\uFF0C\u5BF9\u4E8Enode\u3001nginx\u4E4B\u7C7B\u7684\u4F1A\u5417\uFF1F</h3>
<p>\u662F\u7684\uFF0C\u89E3\u91CA\u4E86\u4E0B\u5176\u5B9E\u6709\u7528\u8FC7<code>node</code>\uFF0C\u4F46\u4EC5\u9650\u4E8E\u7167\u7740\u6587\u6863\u7528\uFF0C\u800C\u4E14\u6700\u540E\u4E1A\u52A1\u4E0A\u8FD8\u662F\u653E\u5F03\u4E86<code>node</code>\u505A\u4EE3\u7406\u670D\u52A1\u5668\u3002</p>
<h3>\u4EC0\u4E48\u60F3\u95EE\u7684</h3>
<p>\u4E86\u89E3\u4E86\u4E0B\u4E1A\u52A1\u7684\u6280\u672F\u67B6\u6784\uFF0C\u5F97\u77E5\u65E2\u7528node\uFF0C\u8FD8\u6709mysql\u3001kafka\uFF08@_@\u592A\u5389\u5BB3\u4E86\uFF0C\u771F\u771F\u5168\u6808)</p>
`,i=s("<h3>\u81EA\u6211\u4ECB\u7ECD</h3><p>\u59D3\u540D\uFF0C\u5DE5\u4F5C\u7ECF\u5386\uFF0C\u5728\u4EC0\u4E48\u516C\u53F8\u505A\u4E86\u4EC0\u4E48\uFF0C\u4EC0\u4E48\u4EAE\u70B9/\u4E1A\u7EE9\u3002 \u5DE5\u4F5C\u4E0A\u7684\u8868\u73B0\u5427\u5566\u5427\u5566\u7684\u3002</p><h3>\u9879\u76EE\u505A\u4E86\u54EA\u4E9B\u4F18\u5316</h3><p>\u5427\u5566\u5427\u5566\u3002</p><h3>\u7B80\u5386\u4E0A\u4F60\u63D0\u5230\u4E86 CDN \u7684\u65B0\u65B9\u6848\uFF0C\u7B80\u5355\u8BF4\u4E00\u4E0B</h3><p>\u4E24\u7C7B\uFF0C\u4E00\u7C7B\u662Fajax\u8BF7\u6C42\u7684\u670D\u52A1\u5931\u8D25\u65F6\u7684\u66FF\u6362\u670D\u52A1host\u5E76\u91CD\u8BD5\uFF1B \u53E6\u4E00\u7C7B\u662F\u56FE\u7247\uFF0Ccss\u3001js\u7B49\u9759\u6001\u8D44\u6E90\u7684\u57DF\u540D\u5BB9\u707E\u3002</p><ol><li>\u5728<code>compiler.hooks.thisCompilation.tap</code>\u4E2D\u5B9A\u4E49\u94A9\u5B50<code>compilation.hooks.processAssets.tapAsync</code>\uFF0C\u5728\u56DE\u8C03\u4E2D\uFF0C\u5224\u65AD\u662F\u5426\u4E3Ajs\u8D44\u6E90\uFF0C\u5982\u679C\u662F\u5219\u5728\u6587\u4EF6\u5185\u5BB9\u5F00\u5934\u6CE8\u5165\u4E00\u6BB5js\u4EE3\u7801\uFF0C\u7ED9\u8BBE\u7F6E\u4E00\u4E2A\u5F53\u524D\u6587\u4EF6\u52A0\u8F7D\u6210\u529F\u7684\u5168\u5C40\u6807\u8BB0\u3002</li><li>\u7136\u540E<code>compiler.hooks.compilation.tap</code>\u4E2D\u501F\u52A9<code>html-webpack-plugin</code>\u7684\u94A9\u5B50\uFF0C\u5B9A\u4E49<code>hooks.alterAssetTags.tap</code>\u548C<code>hooks.beforeEmit.tapAsync</code>,\u524D\u8005\u7528\u6765\u6DFB\u52A0<code>link</code>\u548C<code>script</code>\u7684<code>crossorigin</code>\u5C5E\u6027\uFF0C\u548C\u7ED1\u5B9A<code>link</code>\u7684<code>onerror</code>\u56DE\u8C03\uFF0C<code>script</code>\u4E0D\u7528\uFF0C\u3002\u540E\u8005\u7528\u6B63\u5219\u5339\u914D\u5230head\u6807\u7B7E\uFF0C\u63D2\u5165<code>cdn\u5BB9\u9519\u903B\u8F91</code>\u548C<code>\u5168\u5C40\u5F02\u5E38handelError\u51FD\u6570</code>\uFF0C\u63A5\u7740\u5339\u914D\u6240\u6709\u4E0D\u5E26<code>defer</code>\u548C<code>async</code>\u6807\u8BB0\u7684<code>script</code>\u6807\u7B7E\uFF0C\u5728\u7ED3\u675F\u6807\u7B7E\u672B\u5C3E\u8FFD\u52A0\u4E00\u6BB5js\uFF0C\u5224\u5B9A<code>script</code>\u6807\u7B7E\u662F\u5426\u6709\u52A0\u8F7D\u6210\u529F\u540E\u8BBE\u7F6E\u7684\u5168\u5C40\u6807\u8BB0\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u90A3\u4E48\u53BB\u6267\u884C\u4E00\u4E0B<strong>\u5168\u5C40handleError</strong>\u4E8B\u4EF6\u3002</li><li>\u5BF9\u4E8E\u56FE\u7247\u8D44\u6E90\uFF0C\u53EA\u9700\u6DFB\u52A0<code>document.addEventListener(&#39;onerror&#39;)</code>\u4E8B\u4EF6\uFF0C\u7167\u65E7\u6267\u884ChandleError\u4E8B\u4EF6\u5373\u53EF\uFF0C\u65E0\u9700\u989D\u5916\u5904\u7406\u3002</li></ol><h3>http\u548Chttps</h3><p>\u6CA1\u590D\u4E60\uFF0C\u4E0D\u4F1A\u3002</p><h3>\u524D\u7AEF\u7F13\u5B58</h3><p>\u5206\u4E24\u7C7B\u5F3A\u7F13\u5B58\u548C\u534F\u5546\u7F13\u5B58\uFF0C\u5F3A\u7F13\u5B58\u662F<code>cache-control</code>\u548C<code>expired</code>\uFF0C\u534F\u5546\u7F13\u5B58\u5219\u662F\u90A34\u4E2A\u6807\u8BB0\uFF0C<code>e-tag</code>/<code>if-none-match</code>\u3001<code>last-modified</code>/<code>if-modified-sinece</code></p><h3>\u4F60\u63D0\u5230\u4E86Promise\uFF0C\u8BF4\u4E00\u4E0B\u4EC0\u4E48\u662F\u5F02\u6B65\u548C\u4F7F\u7528\u5F02\u6B65\u7684\u573A\u666F</h3><p>\u65E0\u975E\u5C31\u662F\u5BF9\u4E8E\u65E0\u6CD5\u7ACB\u523B\u83B7\u77E5\u7ED3\u679C\u7684\u64CD\u4F5C\u8FDB\u884C\u5F02\u6B65\u3002</p><p>\u65E9\u671F\u662F\u4F7F\u7528\u56DE\u8C03\u7684\u65B9\u5F0F\uFF0C\u4F46\u662F\u90A3\u6837\u7684\u5C42\u6B21\u5D4C\u5957\u592A\u6DF1\uFF0C\u5BB9\u6613\u5F62\u6210\u56DE\u8C03\u5730\u72F1\u3002 \u540E\u6765\u6709\u4E86<code>Promise</code>\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u6241\u5E73/\u540C\u6B65\u7684\u65B9\u5F0F\u53BB\u4E66\u5199\u4EE3\u7801\uFF0C\u66F4\u7B26\u5408\u4EBA\u7684\u601D\u7EF4\u4E60\u60EF\u3002</p><p>\u573A\u666F\uFF1A \u573A\u666F\u7684\u8BDD\u6BD4\u5982vue2\u91CC\u9762\u4FEE\u6539\u4E86\u6570\u636E\uFF0C\u8981\u83B7\u53D6\u9875\u9762\u66F4\u65B0\u7684\u6570\u636E\u9700\u8981\u901A\u8FC7<code>$nextTick</code>\uFF0C\u91CC\u9762\u5C31\u662F\u4F7F\u7528\u7684\u5F02\u6B65\u65B9\u5F0F\uFF0C\u8FD8\u6709\u5C31\u662F\u524D\u9762\u9879\u76EE\u91CC\u63D0\u5230\u7684\u9879\u76EE\u4F18\u5316\uFF0C\u901A\u8FC7promise\u7B49\u5F85\u8003\u751F\u63D0\u4EA4\u5931\u8D25\u7684\u7B54\u6848\u518D\u6B21\u63D0\u4EA4\u3002</p><h3>vue\u54CD\u5E94\u5F0F\u539F\u7406</h3><p>\u5206\u666E\u901A\u503C\u548C\u5F15\u7528\u7C7B\u578B\u3002 \u666E\u901A\u503C\u76F4\u63A5<code>Object.defineProperty</code>\u5373\u53EF\u3002 \u5F15\u7528\u7C7B\u578B\u5206\u5BF9\u8C61\u548C\u6570\u7EC4\uFF0C\u5BF9\u4E8E\u5BF9\u8C61\uFF0C\u9700\u8981<strong>\u9012\u5F52</strong>\u548C<strong>\u904D\u5386</strong>\u53BB\u4F7F\u7528<code>Object.defineProperty</code>\u5E76\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6\uFF0C\u8FD9\u4E5F\u662Fvue2\u6BD4vue3\u5360\u7528\u5185\u5B58\u66F4\u9AD8\u548C\u6548\u7387\u66F4\u6162\u7684\u4E00\u5927\u539F\u56E0\u3002 \u6570\u7EC4\u7684\u8BDD\u7531\u4E8E\u4E1A\u52A1\u4E0A\u6570\u7EC4\u7684\u957F\u5EA6\u53EF\u80FD\u51E0\u5341\u4E07\uFF0C\u6240\u4EE5\u5BF9\u7D22\u5F15\u7684\u76D1\u542C\u7684\u8BDD\u5F00\u9500\u5F88\u6050\u6016\uFF0C\u6240\u4EE5\u91C7\u53D6\u4E86\u52AB\u6301\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u7684\u65B9\u6CD5\uFF0C\u5982<code>push</code>\u3001<code>shift</code>\u7B49\u3002</p><h4>\u7ED9\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u76F4\u63A5\u65B0\u589E\u4E00\u4E2A\u5C5E\u6027\uFF0C\u80FD\u54CD\u5E94\u5230\u5417\uFF1F</h4><p>\u4E0D\u884C\uFF0C\u56E0\u4E3A<code>get</code>\u3001<code>set</code>\u65E0\u6CD5\u89E6\u53D1<code>delete</code>\u7684\u64CD\u4F5C\uFF0C\u6240\u4EE5\u9700\u8981<code>$set</code></p><h3>\u8BF4\u4E00\u4E0Bvue2\u7684\u751F\u547D\u5468\u671F\uFF0C\u4EE5\u53CA\u4ED6\u4EEC\u5728\u4E1A\u52A1\u91CC\u7684\u5E94\u7528</h3><p><code>beforeCreate</code>\uFF1A\u4E00\u822C\u7528\u6765\u63D0\u524D\u83B7\u53D6\u4E9B\u6570\u636E\uFF0C\u4F8B\u5982\u9875\u9762\u914D\u7F6E</p><p><code>created</code>\uFF1A\u8FD9\u65F6\u53EF\u4EE5\u62FF\u5230\u7EC4\u4EF6\u6570\u636E\u4E86\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u8FDB\u884C\u4E9B\u6570\u636E\u64CD\u4F5C\u4EC0\u4E48\u7684\uFF1B</p><p><code>beforeMounted</code>\uFF1A\u4E00\u822C\u6CA1\u600E\u4E48\u7528</p><p><code>mounted</code>\uFF1A\u8FD9\u91CC\u53EF\u4EE5\u62FF\u5230\u9875\u9762dom\u4E86\uFF0C\u53EF\u4EE5\u64CD\u4F5Cdom</p><p><code>beforeUpdate\u548CUpdated</code>\uFF1A\u8FD9\u4E24\u4E2A\u4E00\u822C\u4E0D\u600E\u4E48\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5199\u4E0D\u597D\u4F1A\u5BFC\u81F4\u6B7B\u5FAA\u73AF\uFF0C\u56E0\u4E3A\u6570\u636E\u66F4\u65B0\u90FD\u4F1A\u8D70\u8FD9\u91CC\u3002\u4F46\u6709\u4E9B\u5F88\u7279\u6B8A\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982\u8001\u9879\u76EE\u7684\u4EE3\u7801\uFF0C\u6CA1\u529E\u6CD5\u4E86\u53EA\u80FD\u5728\u8FD9\u91CC\u64CD\u4F5C\uFF0C\u8FD8\u6709\u5C31\u662F\u53EF\u80FD\u8FDB\u884C\u4E9B\u65E5\u5FD7\u4E0A\u62A5\u3002\u603B\u4E4B\u5C31\u662F\u5728\u8FD9\u91CC\u5904\u7406\u67D0\u4E9B\u6570\u636E\u66F4\u65B0\u540E\u7684\u64CD\u4F5C\u3002</p><p><code>beforeDestroyed\u548Cdestroy</code>\uFF1A\u8FD9\u91CC\u4E00\u822C\u662F\u8FDB\u884C\u6570\u636E\u7684\u5378\u8F7D\uFF0C\u4F8B\u5982\u95ED\u5305\u51FD\u6570\u7684\u5F15\u7528\u53D6\u6D88\uFF0C\u7ED1\u5B9A\u7684\u76D1\u542C\u51FD\u6570\u53D6\u6D88\u7B49\u3002</p><h3>\u4E24\u9053\u7B14\u8BD5\u9898</h3><p>\u5410\u69FD\u4E0B\u8FD9\u4E2A\u9898\u76EE\u7684\uFF0C\u63CF\u8FF0\u4E0D\u591F\u6E05\u6670\uFF0C\u7406\u89E3\u9519\u4E86\u3002 \u867D\u7136\u6700\u540E\u6211\u7684\u601D\u8DEF\u548C\u7ED3\u6784\u90FDOK\u3002</p>",28),p=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`// \u7EA2\u706F\u4E00\u6B21\u6301\u7EED\u4EAE3\u79D2\uFF0C\u9EC4\u706F\u6301\u7EED2\u79D2\u4EAE\u4E00\u6B21\uFF0C\u7EFF\u706F\u6301\u7EED1\u79D2\u4EAE\u4E00\u6B21\uFF1B
// \u5982\u4F55\u8BA9\u4E09\u4E2A\u706F\u4E0D\u65AD\u4EA4\u66FF\u91CD\u590D\u4EAE\u706F\uFF1F
// \u987A\u5E8F

// \u8981\u6C42\uFF1A\u6BCF\u4E00\u79D2\u6253\u5370\u5F53\u524D\u5728\u4EAE\u7684\u706F

let currentLight = 'red';

function redLight() {
	return new Promise(res => {
            setTimeout(() => res('yellow'), 3000);
	});
}

function yellowLight() {
	return new Promise(res => {
            setTimeout(() => res('green'), 2000);
	});
}

function greenLight() {
	return new Promise(res => {
            setTimeout(() => res('red'), 1000);
	});
}

function run() {
	new Promise(res => {
		currentLight = 'red';
		return res(redLight().then(light => {
			    currentLight = light;
			    return yellowLight();
            }).then(light => {
                currentLight = light;
                return greenLight();
            }));
    }).finally(run);
}

run();

function managerRun() {
    console.log(currentLight);
    setTimeout(managerRun, 1000);
}

console.log(currentLight);
setTimeout(managerRun, 1000);
`)],-1),l=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`// \u6709\u5E8F\u6570\u7EC4 A \u548C B, \u8BF7\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5224\u65AD B \u662F\u5426\u4E3A A \u7684\u5B50\u96C6
// \u8F93\u5165\uFF1AA = [1,2,3,4], B=[2,2,4]
// \u8F93\u51FA\uFF1Atrue
const A = [1, 2, 3, 4, 4, 5];
const B = [2, 2, 4, 5];
let aIndex = 0;
let bIndex = 0;

let flag = true;

while (true) {
	if (A[aIndex] && B[bIndex] === undefined) {
		flag = true;
		break;
	}

	if (B[bIndex] && A[aIndex] === undefined) {
		flag = false;
		break;
	}

	if (A[aIndex] === B[bIndex]) {
		bIndex++;
		continue;
	}

	if (A[aIndex] < B[bIndex]) {
		aIndex++;
		continue;
	}
	if (A[aIndex] > B[bIndex]) {
		bIndex++;
		continue;
	}
}

console.log(flag);
`)],-1),a=e("h3",null,"\u4F60\u662F\u4E0D\u662F\u4E4B\u524D\u7EAF\u524D\u7AEF\u7684\uFF0C\u5BF9\u4E8Enode\u3001nginx\u4E4B\u7C7B\u7684\u4F1A\u5417\uFF1F",-1),h=e("p",null,[n("\u662F\u7684\uFF0C\u89E3\u91CA\u4E86\u4E0B\u5176\u5B9E\u6709\u7528\u8FC7"),e("code",null,"node"),n("\uFF0C\u4F46\u4EC5\u9650\u4E8E\u7167\u7740\u6587\u6863\u7528\uFF0C\u800C\u4E14\u6700\u540E\u4E1A\u52A1\u4E0A\u8FD8\u662F\u653E\u5F03\u4E86"),e("code",null,"node"),n("\u505A\u4EE3\u7406\u670D\u52A1\u5668\u3002")],-1),u=e("h3",null,"\u4EC0\u4E48\u60F3\u95EE\u7684",-1),g=e("p",null,"\u4E86\u89E3\u4E86\u4E0B\u4E1A\u52A1\u7684\u6280\u672F\u67B6\u6784\uFF0C\u5F97\u77E5\u65E2\u7528node\uFF0C\u8FD8\u6709mysql\u3001kafka\uFF08@_@\u592A\u5389\u5BB3\u4E86\uFF0C\u771F\u771F\u5168\u6808)",-1);function t(o,f){return d(),c(r,null,[i,p,l,a,h,u,g],64)}const m={render:t};m.__hmrId="/Users/xianchenxy/Documents/Blog/posts/post/2023_futu_interview.md";const A=o=>({components:o,render:t});export{m as VueComponent,A as VueComponentWith,I as attributes,k as html};
