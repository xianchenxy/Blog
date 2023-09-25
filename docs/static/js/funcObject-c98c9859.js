import"./vue-126afe2a.js";import{o as s,c as a,S as l,a as n,a3 as e,b as r}from"./@vue-268a4df7.js";const Q={},S=`<h1>\u51FD\u6570\u539F\u6765\u662F\u4E2A\u5BF9\u8C61</h1>
<p>\u51FD\u6570\u662F\u4E00\u4E2A\u503C\uFF0C\u4ED6\u7684\u7C7B\u578B\u662F\u5BF9\u8C61</p>
<p>\u6211\u4EEC\u53EF\u4EE5\u628A\u51FD\u6570\u60F3\u8C61\u6210\u53EF\u88AB\u8C03\u7528\u7684\u201C\u884C\u4E3A\u5BF9\u8C61\uFF08action object\uFF09\u201D\u3002\u4E0D\u4EC5\u53EF\u4EE5\u8C03\u7528\u5B83\u4EEC\uFF0C\u8FD8\u80FD\u628A\u5B83\u4EEC\u5F53\u4F5C\u5BF9\u8C61\u6765\u5904\u7406\uFF1A\u589E/\u5220\u5C5E\u6027\uFF0C\u6309\u5F15\u7528\u4F20\u9012\u7B49\u3002</p>
<h2>name\u5C5E\u6027</h2>
<p>\u4FDD\u5B58\u51FD\u6570\u7684\u540D\u79F0\uFF0C\u82E5\u4E3A\u533F\u540D\u51FD\u6570\u5219\u5728\u4E0A\u4E0B\u6587\u4E2D\u5BFB\u627E\uFF0C\u6709\u65F6\u627E\u4E0D\u5230\uFF0C\u5927\u591A\u6570\u65F6\u5019\u90FD\u53EF\u4EE5\uFF0C\u6BD4\u5982</p>
<pre><code class="language-javascript">// 1
let sayHi = function() {
  alert(&quot;Hi&quot;);
};

alert(sayHi.name); // sayHi\uFF08\u6709\u540D\u5B57\uFF01\uFF09

// 2
let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// 3 \u627E\u4E0D\u5230\u7684\u60C5\u51B5
// \u51FD\u6570\u662F\u5728\u6570\u7EC4\u4E2D\u521B\u5EFA\u7684
let arr = [function() {}];

alert( arr[0].name ); // &lt;\u7A7A\u5B57\u7B26\u4E32&gt;
// \u5F15\u64CE\u65E0\u6CD5\u8BBE\u7F6E\u6B63\u786E\u7684\u540D\u5B57\uFF0C\u6240\u4EE5\u6CA1\u6709\u503C

</code></pre>
<h2>length\u5C5E\u6027</h2>
<p>\u4FDD\u5B58\u8BE5\u51FD\u6570\u8BBE\u5B9A\u7684\u53C2\u6570\u4E2A\u6570\uFF0C...rest\u53C2\u6570\u4E0D\u8BA1\u5165\u5176\u4E2D</p>
<p>\u5E38\u7528\u6765\u8FDB\u884C\u591A\u6001\u64CD\u4F5C\uFF0C\u5373\u6839\u636E\u4F20\u8F93\u51FD\u6570\u53C2\u6570\u7684\u4E2A\u6570\u6765\u7075\u6D3B\u8C03\u7528\u8BE5\u51FD\u6570</p>
<pre><code class="language-javascript">function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// \u5BF9\u4E8E\u79EF\u6781\u7684\u56DE\u7B54\uFF0C\u4E24\u4E2A handler \u90FD\u4F1A\u88AB\u8C03\u7528
// \u5BF9\u4E8E\u8D1F\u9762\u7684\u56DE\u7B54\uFF0C\u53EA\u6709\u7B2C\u4E8C\u4E2A handler \u88AB\u8C03\u7528
ask(&quot;Question?&quot;, () =&gt; alert('You said yes'), result =&gt; alert(result));
</code></pre>
<p>\u8FD9\u79CD\u7279\u522B\u7684\u60C5\u51B5\u5C31\u662F\u6240\u8C13\u7684 <a href="https://en.wikipedia.org/wiki/Polymorphism_(computer_science)" title="\u591A\u6001\u6027">\u591A\u6001\u6027</a> \u2014\u2014 \u6839\u636E\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u6216\u8005\u6839\u636E\u5728\u6211\u4EEC\u7684\u5177\u4F53\u60C5\u666F\u4E0B\u7684 <code>length</code> \u6765\u505A\u4E0D\u540C\u7684\u5904\u7406\u3002\u8FD9\u79CD\u601D\u60F3\u5728 JavaScript \u7684\u5E93\u91CC\u6709\u5E94\u7528\u3002</p>
<h2>\u81EA\u5B9A\u4E49\u5C5E\u6027</h2>
<p>\u53EF\u4EE5\u4E3A\u51FD\u6570\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u4EE5\u5B58\u50A8\u51FD\u6570\u7684\u72B6\u6001\uFF08\u5982\u8C03\u7528\u6B21\u6570\uFF09</p>
<pre><code class="language-javascript">function sayHi() {
  alert(&quot;Hi&quot;);

  // \u8BA1\u7B97\u8C03\u7528\u6B21\u6570
  sayHi.counter++;
}
sayHi.counter = 0; // \u521D\u59CB\u503C

sayHi(); // Hi
sayHi(); // Hi

alert( \`Called \${sayHi.counter} times\` ); // Called 2 times
</code></pre>
<p>\u8BE5\u5C5E\u6027\u5E94\u4E0E\u51FD\u6570\u5185\u5B9A\u4E49\u7684\u5C40\u90E8\u53D8\u91CF\u533A\u5206\u5F00\u6765</p>
<p>\u53EF\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C5E\u6027\u66FF\u4EE3\u95ED\u5305\uFF0C\u5C31\u662F\u5C06\u5916\u90E8\u51FD\u6570\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u53D8\u91CF\u6539\u4E3A\u4E86\u7528\u5185\u90E8\u51FD\u6570\u7684\u5C5E\u6027\u8FDB\u884C\u5B58\u50A8\uFF0C\u4F8B\uFF1A</p>
<pre><code class="language-javascript">function makeCounter() {
  // \u4E0D\u9700\u8981\u8FD9\u4E2A\u4E86
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
</code></pre>
<p>\u7136\u800C\u8FD9\u6837\u4E0E\u95ED\u5305\u6700\u5927\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u95ED\u5305\u4E2D\u5B58\u50A8\u4E8E\u5916\u90E8\u7684\u53D8\u91CF\u5C06\u53EA\u6709\u5D4C\u5957\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5916\u90E8\u4EE3\u7801\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u56E0\u4E3A\u5B83\u662F\u5C5E\u4E8E\u5916\u90E8\u51FD\u6570\u7684\u8BCD\u6CD5\u73AF\u5883\u7684\uFF0C\u800C\u81EA\u5B9A\u4E49\u5C5E\u6027\u662F\u5C5E\u4E8E\u5D4C\u5957\u51FD\u6570\u7684\uFF0C\u53EF\u4EE5\u5728\u5916\u90E8\u4FEE\u6539\u8BE5\u5C5E\u6027\u7684\u503C</p>
<p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E24\u79CD\u65B9\u6CD5\u7686\u6709\u7528\u5904\uFF0C\u53D6\u51B3\u4E8E\u9700\u6C42</p>
<blockquote>
<p>\u26F5<strong>\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E0D\u4EC5\u53EF\u4EE5\u662F\u53D8\u91CF\uFF0C\u8FD8\u53EF\u4EE5\u662F\u51FD\u6570\uFF0C\u5F88\u591A\u77E5\u540D\u7684 JavaScript \u5E93\u90FD\u5145\u5206\u5229\u7528\u4E86\u8FD9\u4E2A\u529F\u80FD\u3002</strong></p>
<p>\u5B83\u4EEC\u521B\u5EFA\u4E00\u4E2A\u201C\u4E3B\u201D\u51FD\u6570\uFF0C\u7136\u540E\u7ED9\u5B83\u9644\u52A0\u5F88\u591A\u5176\u5B83\u201C\u8F85\u52A9\u201D\u51FD\u6570\u3002\u4F8B\u5982\uFF0C<a href="https://jquery.com/" title="jQuery">jQuery</a> \u5E93\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A <code>$</code> \u7684\u51FD\u6570\u3002<a href="https://lodash.com/" title="lodash">lodash</a> \u5E93\u521B\u5EFA\u4E00\u4E2A <code>_</code> \u51FD\u6570\uFF0C\u7136\u540E\u4E3A\u5176\u6DFB\u52A0\u4E86 <code>_.add</code>\u3001<code>_.keyBy</code> \u4EE5\u53CA\u5176\u5B83\u5C5E\u6027\uFF08\u60F3\u8981\u4E86\u89E3\u66F4\u591A\u5185\u5BB9\uFF0C\u53C2\u67E5\u9605 <a href="https://lodash.com/docs" title="docs">docs</a>\uFF09\u3002\u5B9E\u9645\u4E0A\uFF0C\u5B83\u4EEC\u8FD9\u4E48\u505A\u662F\u4E3A\u4E86\u51CF\u5C11\u5BF9\u5168\u5C40\u7A7A\u95F4\u7684\u6C61\u67D3\uFF0C\u8FD9\u6837\u4E00\u4E2A\u5E93\u5C31\u53EA\u4F1A\u6709\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u3002\u8FD9\u6837\u5C31\u964D\u4F4E\u4E86\u547D\u540D\u51B2\u7A81\u7684\u53EF\u80FD\u6027\u3002</p>
</blockquote>
<h2>\u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0FNFE</h2>
<p>named function expression \uFF08NFE\uFF09</p>
<p>\u7528\u9014\uFF1A\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u547D\u540D\u6765\u5728\u51FD\u6570\u5185\u90E8\u8FDB\u884C\u81EA\u8C03\u7528\uFF0C\u907F\u514D\u4F7F\u7528\u53D8\u91CF\u540D\u81EA\u8C03\u7528\u4F1A\u4EA7\u751F\u7684\u53D8\u91CF\u503C\u88AB\u4FEE\u6539\u95EE\u9898</p>
<p>\u7279\u70B9\uFF1A\u8BE5\u51FD\u6570\u540D\u65E0\u6CD5\u88AB\u5916\u90E8\u8BBF\u95EE</p>
<p>\u793A\u4F8B\uFF1A</p>
<p>\u53D1\u751F\u67D0\u4E2A\u4E8B\u4EF6\u65F6\uFF0C\u9700\u8981\u51FD\u6570\u518D\u8C03\u7528\u4E00\u6B21\uFF0C\u5E76\u53EF\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u7B49</p>
<pre><code class="language-javascript">let sayHi = function func(who) {
  if (who) {
    alert(\`Hello, \${who}\`);
  } else {
    func(&quot;Guest&quot;); // \u73B0\u5728\u4E00\u5207\u6B63\u5E38
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest\uFF08\u5D4C\u5957\u8C03\u7528\u6709\u6548\uFF09
</code></pre>
<p>\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u5982\u679C\u4E0D\u91C7\u7528NFE\uFF0C\u800C\u5728\u51FD\u6570\u5185\u90E8\u76F4\u63A5\u4F7F\u7528\u51FD\u6570\u53D8\u91CF\u540D\u8FDB\u884C\u81EA\u8C03\u7528\uFF0C\u4F1A\u56E0\u4E3A\u8BE5\u53D8\u91CF\u53D8\u5316\u800C\u5BFC\u81F4\u65B0\u7684\u88AB\u8D4B\u503C\u53D8\u91CF\u51FD\u6570\uFF08welcome\uFF09\u4E5F\u65E0\u6CD5\u6267\u884C</p>
<pre><code class="language-javascript">let sayHi = function(who) {
  if (who) {
    alert(\`Hello, \${who}\`);
  } else {
    sayHi(&quot;Guest&quot;); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error\uFF0C\u5D4C\u5957\u8C03\u7528 sayHi \u4E0D\u518D\u6709\u6548\uFF01
</code></pre>
<p>\u8FD9\u6837\u56E0\u4E3A\u5728\u51FD\u6570\u8868\u8FBE\u5F0FsayHi\u7684\u8BCD\u6CD5\u73AF\u5883\u4E2D\uFF0C\u5E76\u6CA1\u6709\u51FD\u6570\u540D\u8FD9\u4E00\u5C5E\u6027\uFF0C\u6240\u4EE5\u53EA\u80FD\u5728\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883\u4E2D\u5BFB\u627E\uFF0C\u800C\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883\u4E2D\u8BE5\u53D8\u91CF\u540D\u53EF\u80FD\u8D4B\u503C\u5DF2\u6539\u53D8\uFF0C\u4F7F\u7528NFE\uFF0C\u4F1A\u5728\u5185\u90E8\u8BCD\u6CD5\u73AF\u5883\u4E2D\u5B58\u50A8\u8BE5\u547D\u540D\uFF0C\u5E76\u53EF\u76F4\u63A5\u8FDB\u884C\u8C03\u7528\uFF0C\u4ECE\u800C\u4E0D\u53D7\u5916\u90E8\u4EE3\u7801\u5F71\u54CD\uFF0C\u56E0\u4E3A\u8BE5\u547D\u540D\u5916\u90E8\u4E5F\u65E0\u6CD5\u8BBF\u95EE</p>
<p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F7F\u7528NFE\u540E\uFF0C\u51FD\u6570\u7684name\u5C5E\u6027\u4F1A\u662F\u8BE5\u5185\u90E8\u547D\u540D\uFF08func\uFF09\uFF0C\u4E0D\u4F1A\u518D\u662F\u667A\u80FD\u5206\u914D\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u53D8\u91CF\u540D\uFF08sayHi\uFF09</p>
`,c=n("h1",null,"\u51FD\u6570\u539F\u6765\u662F\u4E2A\u5BF9\u8C61",-1),i=n("p",null,"\u51FD\u6570\u662F\u4E00\u4E2A\u503C\uFF0C\u4ED6\u7684\u7C7B\u578B\u662F\u5BF9\u8C61",-1),u=n("p",null,"\u6211\u4EEC\u53EF\u4EE5\u628A\u51FD\u6570\u60F3\u8C61\u6210\u53EF\u88AB\u8C03\u7528\u7684\u201C\u884C\u4E3A\u5BF9\u8C61\uFF08action object\uFF09\u201D\u3002\u4E0D\u4EC5\u53EF\u4EE5\u8C03\u7528\u5B83\u4EEC\uFF0C\u8FD8\u80FD\u628A\u5B83\u4EEC\u5F53\u4F5C\u5BF9\u8C61\u6765\u5904\u7406\uFF1A\u589E/\u5220\u5C5E\u6027\uFF0C\u6309\u5F15\u7528\u4F20\u9012\u7B49\u3002",-1),p=n("h2",null,"name\u5C5E\u6027",-1),d=n("p",null,"\u4FDD\u5B58\u51FD\u6570\u7684\u540D\u79F0\uFF0C\u82E5\u4E3A\u533F\u540D\u51FD\u6570\u5219\u5728\u4E0A\u4E0B\u6587\u4E2D\u5BFB\u627E\uFF0C\u6709\u65F6\u627E\u4E0D\u5230\uFF0C\u5927\u591A\u6570\u65F6\u5019\u90FD\u53EF\u4EE5\uFF0C\u6BD4\u5982",-1),h=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`// 1
let sayHi = function() {
  alert("Hi");
};

alert(sayHi.name); // sayHi\uFF08\u6709\u540D\u5B57\uFF01\uFF09

// 2
let user = {

  sayHi() {
    // ...
  },

  sayBye: function() {
    // ...
  }

}
alert(user.sayHi.name); // sayHi
alert(user.sayBye.name); // sayBye

// 3 \u627E\u4E0D\u5230\u7684\u60C5\u51B5
// \u51FD\u6570\u662F\u5728\u6570\u7EC4\u4E2D\u521B\u5EFA\u7684
let arr = [function() {}];

alert( arr[0].name ); // <\u7A7A\u5B57\u7B26\u4E32>
// \u5F15\u64CE\u65E0\u6CD5\u8BBE\u7F6E\u6B63\u786E\u7684\u540D\u5B57\uFF0C\u6240\u4EE5\u6CA1\u6709\u503C

`)],-1),y=n("h2",null,"length\u5C5E\u6027",-1),H=n("p",null,"\u4FDD\u5B58\u8BE5\u51FD\u6570\u8BBE\u5B9A\u7684\u53C2\u6570\u4E2A\u6570\uFF0C...rest\u53C2\u6570\u4E0D\u8BA1\u5165\u5176\u4E2D",-1),_=n("p",null,"\u5E38\u7528\u6765\u8FDB\u884C\u591A\u6001\u64CD\u4F5C\uFF0C\u5373\u6839\u636E\u4F20\u8F93\u51FD\u6570\u53C2\u6570\u7684\u4E2A\u6570\u6765\u7075\u6D3B\u8C03\u7528\u8BE5\u51FD\u6570",-1),m=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`function ask(question, ...handlers) {
  let isYes = confirm(question);

  for(let handler of handlers) {
    if (handler.length == 0) {
      if (isYes) handler();
    } else {
      handler(isYes);
    }
  }

}

// \u5BF9\u4E8E\u79EF\u6781\u7684\u56DE\u7B54\uFF0C\u4E24\u4E2A handler \u90FD\u4F1A\u88AB\u8C03\u7528
// \u5BF9\u4E8E\u8D1F\u9762\u7684\u56DE\u7B54\uFF0C\u53EA\u6709\u7B2C\u4E8C\u4E2A handler \u88AB\u8C03\u7528
ask("Question?", () => alert('You said yes'), result => alert(result));
`)],-1),f=n("p",null,[e("\u8FD9\u79CD\u7279\u522B\u7684\u60C5\u51B5\u5C31\u662F\u6240\u8C13\u7684 "),n("a",{href:"https://en.wikipedia.org/wiki/Polymorphism_(computer_science)",title:"\u591A\u6001\u6027"},"\u591A\u6001\u6027"),e(" \u2014\u2014 \u6839\u636E\u53C2\u6570\u7684\u7C7B\u578B\uFF0C\u6216\u8005\u6839\u636E\u5728\u6211\u4EEC\u7684\u5177\u4F53\u60C5\u666F\u4E0B\u7684 "),n("code",null,"length"),e(" \u6765\u505A\u4E0D\u540C\u7684\u5904\u7406\u3002\u8FD9\u79CD\u601D\u60F3\u5728 JavaScript \u7684\u5E93\u91CC\u6709\u5E94\u7528\u3002")],-1),g=n("h2",null,"\u81EA\u5B9A\u4E49\u5C5E\u6027",-1),w=n("p",null,"\u53EF\u4EE5\u4E3A\u51FD\u6570\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\u4EE5\u5B58\u50A8\u51FD\u6570\u7684\u72B6\u6001\uFF08\u5982\u8C03\u7528\u6B21\u6570\uFF09",-1),v=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`function sayHi() {
  alert("Hi");

  // \u8BA1\u7B97\u8C03\u7528\u6B21\u6570
  sayHi.counter++;
}
sayHi.counter = 0; // \u521D\u59CB\u503C

sayHi(); // Hi
sayHi(); // Hi

alert( \`Called \${sayHi.counter} times\` ); // Called 2 times
`)],-1),j=n("p",null,"\u8BE5\u5C5E\u6027\u5E94\u4E0E\u51FD\u6570\u5185\u5B9A\u4E49\u7684\u5C40\u90E8\u53D8\u91CF\u533A\u5206\u5F00\u6765",-1),k=n("p",null,"\u53EF\u4F7F\u7528\u81EA\u5B9A\u4E49\u5C5E\u6027\u66FF\u4EE3\u95ED\u5305\uFF0C\u5C31\u662F\u5C06\u5916\u90E8\u51FD\u6570\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u53D8\u91CF\u6539\u4E3A\u4E86\u7528\u5185\u90E8\u51FD\u6570\u7684\u5C5E\u6027\u8FDB\u884C\u5B58\u50A8\uFF0C\u4F8B\uFF1A",-1),q=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`function makeCounter() {
  // \u4E0D\u9700\u8981\u8FD9\u4E2A\u4E86
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1
`)],-1),E=r('<p>\u7136\u800C\u8FD9\u6837\u4E0E\u95ED\u5305\u6700\u5927\u7684\u533A\u522B\u5728\u4E8E\uFF1A\u95ED\u5305\u4E2D\u5B58\u50A8\u4E8E\u5916\u90E8\u7684\u53D8\u91CF\u5C06\u53EA\u6709\u5D4C\u5957\u51FD\u6570\u53EF\u4EE5\u8BBF\u95EE\uFF0C\u5916\u90E8\u4EE3\u7801\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u56E0\u4E3A\u5B83\u662F\u5C5E\u4E8E\u5916\u90E8\u51FD\u6570\u7684\u8BCD\u6CD5\u73AF\u5883\u7684\uFF0C\u800C\u81EA\u5B9A\u4E49\u5C5E\u6027\u662F\u5C5E\u4E8E\u5D4C\u5957\u51FD\u6570\u7684\uFF0C\u53EF\u4EE5\u5728\u5916\u90E8\u4FEE\u6539\u8BE5\u5C5E\u6027\u7684\u503C</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4E24\u79CD\u65B9\u6CD5\u7686\u6709\u7528\u5904\uFF0C\u53D6\u51B3\u4E8E\u9700\u6C42</p><blockquote><p>\u26F5<strong>\u81EA\u5B9A\u4E49\u5C5E\u6027\u4E0D\u4EC5\u53EF\u4EE5\u662F\u53D8\u91CF\uFF0C\u8FD8\u53EF\u4EE5\u662F\u51FD\u6570\uFF0C\u5F88\u591A\u77E5\u540D\u7684 JavaScript \u5E93\u90FD\u5145\u5206\u5229\u7528\u4E86\u8FD9\u4E2A\u529F\u80FD\u3002</strong></p><p>\u5B83\u4EEC\u521B\u5EFA\u4E00\u4E2A\u201C\u4E3B\u201D\u51FD\u6570\uFF0C\u7136\u540E\u7ED9\u5B83\u9644\u52A0\u5F88\u591A\u5176\u5B83\u201C\u8F85\u52A9\u201D\u51FD\u6570\u3002\u4F8B\u5982\uFF0C<a href="https://jquery.com/" title="jQuery">jQuery</a> \u5E93\u521B\u5EFA\u4E86\u4E00\u4E2A\u540D\u4E3A <code>$</code> \u7684\u51FD\u6570\u3002<a href="https://lodash.com/" title="lodash">lodash</a> \u5E93\u521B\u5EFA\u4E00\u4E2A <code>_</code> \u51FD\u6570\uFF0C\u7136\u540E\u4E3A\u5176\u6DFB\u52A0\u4E86 <code>_.add</code>\u3001<code>_.keyBy</code> \u4EE5\u53CA\u5176\u5B83\u5C5E\u6027\uFF08\u60F3\u8981\u4E86\u89E3\u66F4\u591A\u5185\u5BB9\uFF0C\u53C2\u67E5\u9605 <a href="https://lodash.com/docs" title="docs">docs</a>\uFF09\u3002\u5B9E\u9645\u4E0A\uFF0C\u5B83\u4EEC\u8FD9\u4E48\u505A\u662F\u4E3A\u4E86\u51CF\u5C11\u5BF9\u5168\u5C40\u7A7A\u95F4\u7684\u6C61\u67D3\uFF0C\u8FD9\u6837\u4E00\u4E2A\u5E93\u5C31\u53EA\u4F1A\u6709\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\u3002\u8FD9\u6837\u5C31\u964D\u4F4E\u4E86\u547D\u540D\u51B2\u7A81\u7684\u53EF\u80FD\u6027\u3002</p></blockquote><h2>\u547D\u540D\u51FD\u6570\u8868\u8FBE\u5F0FNFE</h2><p>named function expression \uFF08NFE\uFF09</p><p>\u7528\u9014\uFF1A\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u547D\u540D\u6765\u5728\u51FD\u6570\u5185\u90E8\u8FDB\u884C\u81EA\u8C03\u7528\uFF0C\u907F\u514D\u4F7F\u7528\u53D8\u91CF\u540D\u81EA\u8C03\u7528\u4F1A\u4EA7\u751F\u7684\u53D8\u91CF\u503C\u88AB\u4FEE\u6539\u95EE\u9898</p><p>\u7279\u70B9\uFF1A\u8BE5\u51FD\u6570\u540D\u65E0\u6CD5\u88AB\u5916\u90E8\u8BBF\u95EE</p><p>\u793A\u4F8B\uFF1A</p><p>\u53D1\u751F\u67D0\u4E2A\u4E8B\u4EF6\u65F6\uFF0C\u9700\u8981\u51FD\u6570\u518D\u8C03\u7528\u4E00\u6B21\uFF0C\u5E76\u53EF\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u7B49</p>',9),N=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`let sayHi = function func(who) {
  if (who) {
    alert(\`Hello, \${who}\`);
  } else {
    func("Guest"); // \u73B0\u5728\u4E00\u5207\u6B63\u5E38
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest\uFF08\u5D4C\u5957\u8C03\u7528\u6709\u6548\uFF09
`)],-1),B=n("p",null,"\u5728\u8BE5\u793A\u4F8B\u4E2D\uFF0C\u5982\u679C\u4E0D\u91C7\u7528NFE\uFF0C\u800C\u5728\u51FD\u6570\u5185\u90E8\u76F4\u63A5\u4F7F\u7528\u51FD\u6570\u53D8\u91CF\u540D\u8FDB\u884C\u81EA\u8C03\u7528\uFF0C\u4F1A\u56E0\u4E3A\u8BE5\u53D8\u91CF\u53D8\u5316\u800C\u5BFC\u81F4\u65B0\u7684\u88AB\u8D4B\u503C\u53D8\u91CF\u51FD\u6570\uFF08welcome\uFF09\u4E5F\u65E0\u6CD5\u6267\u884C",-1),F=n("pre",null,[n("code",{class:"language-javascript","v-pre":"true"},`let sayHi = function(who) {
  if (who) {
    alert(\`Hello, \${who}\`);
  } else {
    sayHi("Guest"); // Error: sayHi is not a function
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Error\uFF0C\u5D4C\u5957\u8C03\u7528 sayHi \u4E0D\u518D\u6709\u6548\uFF01
`)],-1),b=n("p",null,"\u8FD9\u6837\u56E0\u4E3A\u5728\u51FD\u6570\u8868\u8FBE\u5F0FsayHi\u7684\u8BCD\u6CD5\u73AF\u5883\u4E2D\uFF0C\u5E76\u6CA1\u6709\u51FD\u6570\u540D\u8FD9\u4E00\u5C5E\u6027\uFF0C\u6240\u4EE5\u53EA\u80FD\u5728\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883\u4E2D\u5BFB\u627E\uFF0C\u800C\u5916\u90E8\u8BCD\u6CD5\u73AF\u5883\u4E2D\u8BE5\u53D8\u91CF\u540D\u53EF\u80FD\u8D4B\u503C\u5DF2\u6539\u53D8\uFF0C\u4F7F\u7528NFE\uFF0C\u4F1A\u5728\u5185\u90E8\u8BCD\u6CD5\u73AF\u5883\u4E2D\u5B58\u50A8\u8BE5\u547D\u540D\uFF0C\u5E76\u53EF\u76F4\u63A5\u8FDB\u884C\u8C03\u7528\uFF0C\u4ECE\u800C\u4E0D\u53D7\u5916\u90E8\u4EE3\u7801\u5F71\u54CD\uFF0C\u56E0\u4E3A\u8BE5\u547D\u540D\u5916\u90E8\u4E5F\u65E0\u6CD5\u8BBF\u95EE",-1),C=n("p",null,"\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u4F7F\u7528NFE\u540E\uFF0C\u51FD\u6570\u7684name\u5C5E\u6027\u4F1A\u662F\u8BE5\u5185\u90E8\u547D\u540D\uFF08func\uFF09\uFF0C\u4E0D\u4F1A\u518D\u662F\u667A\u80FD\u5206\u914D\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u53D8\u91CF\u540D\uFF08sayHi\uFF09",-1);function o(t,$){return s(),a(l,null,[c,i,u,p,d,h,y,H,_,m,f,g,w,v,j,k,q,E,N,B,F,b,C],64)}const Y={render:o};Y.__hmrId="/Users/xianchenxy/Documents/Blob/posts/post/funcObject.md";const V=t=>({components:t,render:o});export{Y as VueComponent,V as VueComponentWith,Q as attributes,S as html};
