## 1.自我介绍
惯例，就跳过了。

> 后面的A代表面试官，B代表候选人

## 2.http了解过吗，1.0和2.0这些说一下
了解的是到http2.0，3.0的话由于升级需要服务端的升级等配置，成本比较高，这个就不说了。
首先呢http1.0不是个正式的标准，http1.1才是，https1.1中有一个`keep-alive`，这个是来标记为**长连接**的，在之前正常的一次http请求，从三次握手、请求、响应、四次挥手就结束了。
`keep-alive`就是可以复用之前的tcp连接，省去三次握手的环节，一次连接可以多次发送请求。当客户端/服务端一方要关闭连接时，会发送个关闭的请求，这里`connection: closed`

-A：为什么是要有三次握手呢，不可以2次吗？

-B：因为要保证双方的收发能力都OK，可以超过3次，但最少得3次。

第一次：a发送，b收到， 这里a的发送OK

第二次：b发送，a收到，这里b的发送和接收能力都OK

第三次：a再发送，b收到，这里a的接收能力OK

## 3.https说一下
略。

## 4.你主要是用vue的吧？小程序那些会吗？
-B：不会，主要是用vue。

-A：我了解到你们主要是用vue2.7？也就是会有vue2和vue3，那这样的写法会不会晕什么的

-B：噢这个还好，因为新模块都是用vue2.7不会再用vue2了，然后的话在vue3里面，提供了更高的自由度，只是把在vue2里写在生命周期钩子的代码，
自己引入一些，然后一样的编码就好了。

## 5.说一下cdn容灾策略你是怎么做的
略。

## 6.说一下虚拟列表是做作的
日志可能很多，默认收起来，这个时候列表是个定高的，这样就很好做了。
日志有个按钮，点击可以展开，这个时候就是不定高的，由于判断这条日志需不需要收起来，这里是计算了高度的，所以把这个高度记录到属性上
然后在批次节点增/删的时候进行补偿值增减，因为日志有一个高度下限，所以其实只会增。

-A：如果列表滚动的快的话，会不会出现白屏
> 这个在做的时候是有出现的，这里分为2块，一个是滚动特别快，特别快的时候从用户层面来说，他也是看不清有什么内容的，而且滚动快也意味着js执行量大，也会带来性能问题，还有会从后端拉取数据要很多时间，
> 因此呢这里加了个骨架屏，当用户停止滚动到滚动速率恢复到正常阈值的时候，再恢复计算和重新获取数据。
> 如果说正常滚动，要防止出现白屏，这里是通过头尾各增加一批次的数据来做到。由于需要防止说滚动稍微快一点时获取数据的延后，这里需要把一批次的数据量设置大一些。


## 7.你是怎么做到让系统的质量可控可信的
关键节点都有埋点，这个是产品层面。
计数层面因为有cdn嘛，那里会重试资源，如果依然失败会上报日志，日志用的是阿里云日志。
这里举个例子，某次更新可能说误删除张图片，考生使用的时候是加载失败的，由于配置了有告警机器人，所以当有问题的时候我们可以立刻知悉有问题。

## 8.简历上你提到你的绩效m+，这个是怎么划分的，前面的O、E又是什么
如实介绍，然后阐述绩效好的原因。

## 9.我看你简历上有提到设计模式，说一下你实际应用过的设计模式
提到了策略模式、代理模式（常用的还有个发布策略模式/观察者模式），
策略模式主要是解决了复杂条件的if判断，实际应用呢是有一个给企业用的监控系统，里面有一些判断考生在线、黑屏、离线等的状态，这里用到了，可以减去很多的判断；
代理模式主要是用来控制外部对源对象的访问，可能是隐私性啊或者是不太方便去访问，所以就有了代理模式，这个就很像js的api `proxy`
，拦截外界对源对象的访问。实际应用呢比如有一个列表，
这个列表里面有个按钮，例如编辑功能，点击后会弹出个表单弹窗。如果这个弹窗比较复杂，那么列表渲染的时候，O(list.length *
popover.size)，会导致单位时间内有大量js计算，渲染主线程事情太多，导致渲染帧延后，
表现就是列表滚动很卡，这里呢就可以使用代理模式，一开始不去直接访问（渲染）到原弹窗，而是渲染个空的节点，等到点击触发后再渲染。代理模式的思想是这样，实际可能有其他方式解决，这里主要说思想。

-A：职责链模式了解吗
> 职责链模式也是可以消除if，原理是如果当前这个环节判断这个task不属于它处理，那么就会交付给下一个环节，这样依次执行，就好像是课堂老师点名，学生1、2、3这样子一个接一个。
> 对于外部来说，它不关心这个task由谁执行，只需要能处理就好，内部会对这个task处理，然后返回结果，对外部是隐藏细节的。

-A：那你有实际经验吗？
> 这个没有用过，项目没有这么复杂。我们优先是把功能实现，然后再做优化手段，职责链模式是没有用到的。

-A：我说个场景题哈，我有个业务，这个业务的功能要处理例如环境初始化、条件判断、日志上报等等事情，可以用什么模式解决？
这个场景的话就是典型的模板方法模式，好比脚手架那样，提供环境的初始化，和一些固定的操作。vue里面的生命周期钩子就是模板方法模式的应用了。

## 10.有一段重复的代码，有什么方法可以复用

看这个代码的复杂度吧，首先如果比较小可以抽出来为组件，如果再大考虑组件+组件的组合模式，如果再大就需要考虑抽出为模块了，
比如像日志这样，可能会涉及到对dom的访问，生命周期什么的，所以会需要说这个模块要独立，可以考虑抽出为npm包的形式。

-A：你刚提到了抽离成npm包，那么这样做会有什么好处和不好的地方吗
> 好处是我可以把这个包给各系统用，不用说代码复制粘贴这样，以及后续如果有更新，可以保持代码的一致性。可以说减少了维护成本。
> 这样带来的问题会有比如说A、B系统依赖的版本不一样，这个可以通过说放开版本限制，因为是我们自己维护的嘛，所以没有关系，外部的当然是不可以的。
>
还有个问题就是，比如说npm包里面是用vue写的，它会依赖vue版本，如果说npm和业务系统的依赖版本不一样，npm会装两份数据。这个问题可以通过`peerDependency`
解决。

-A：除了你提到的那么模块抽离方法，还有什么方式吗
> 还有vue提供的mixin方法，但这个一般不推荐使用，因为要保持单向数据流。其他应该没了，暂时就这么多。

## 11.webpack的loader和plugin的区别

区别我的理解的话是一个自由度吧，plugin可以参与到`webpack`的编译过程中。
我们都知道`webpack`本身只能处理`js`、`json`类型的文件，我们可以通过增加`loader`
来处理其他更多类型的文件，例如`css-loader`、`vue-loader`。
plugin的话就可以参与编译过程中，提供更大自由度，比如`es6转es5`，使用`babel插件`去处理，这个是`loader`做不到的。

## 12.说一下你用webpack的优化手段

举的cdn容灾的例子，我对`webpack`的使用是比较少的，当时做这个的时候有点无从下手，然后呢通过分析，我要做的是对`link`、`script`
元素的修改，然后这个html文档是由`html-webpack-plugin`插件生成的，
所以我会查看它的文档，然后发现它有提供两个钩子，`alterAssertTags`和`beforeEmit`
，提供对于标签的处理。然后发现这里面会用到`compile`编译对象，这个来自`webpack`，就又去看`webpack`的文档，同样是找到提供的钩子函数来解决。

## 13.我提供个场景题，你说一下怎么解决
-A：这里有一个错误，你怎么分析（和cors相关的，意思是有一个请求头不在`Access-control-allow-headers`中
这个问题是属于cors资源的错误，就是看谷歌开发者工具network面板里是不是真的没有这个请求头，然后给服务端同学，让他们看下是不是没有加。

-A：他们说加了，你再看看

-B：对事，因为有问题嘛，优先解决问题，不要产生更多影响，首先会去排查问题，看说这个问题到底什么情况，如果说和后端相关，那我会清晰的发接口或者在什么位置给对方，便于快速解决问题。
如果对方不明白，我会说这个为什么是个问题，解释下原因，然后说要看什么。总结就是一个清晰高效的沟通，优先解决问题。

- 中间还有些问答，想起来再更吧

-A：再看个场景题，怎么分析（是和npm install相关的报错，某个npm包安装超时，好像还有代码错误，这个错误呢是一部人安装成功，一部分安装失败）
> 可能是node版本的问题，先看下版本，当然这个版本限制可以在`package.json`里通过`engines.node`字段配置，然后看这个包是外部还是自己维护的。如果说是外部的，给开源作者提个issues，当然之前要定位下错误原因，可能是某个版本更新出问题。由于安装失败可能是会阻塞业务开发嘛，那么就先紧急回退，固定个版本。
> 
> 如果是自己维护的，同理找包维护作者，自己先本地回退下。至于说安装超时，一个可能是说npm仓库地址错了，比如某次切换了源，不分同学没有更新。
> 
> （这里其实回答的不够精准，但因为处理方案比较完善，思路清晰也还是过了）
> 
> 还有个可能就是说坐在角落的同学他的网络就是不好，外面位置的同学好一点，这个也是可能的，这个就需要找网络管理员帮忙了。
> 

********** 三面 **********
> 三面很多场景题，和项目结合起来问，没有八股文和技术了，应该是前面一二面答的比较好，问完了。
## 你们是用git协同的吗？说一下怎么用git管理的
略。
-A：还有如果有一个需求来，你们是怎么操作分支的

-B：基于master拉去feature主分支，然后各自开发同学基于feature主分支拉去各自的开发分支。开发完成后再合回feature主分支，然后再合回主分支。

-A：开发中遇到冲突怎么解决

-B：一般是主程解决冲突，如果是个人功能分支合回功能主分支，那么就是谁的冲突谁解决。
如果是功能主分支合回主分支冲突这个情况，会基于功能主分支/主分支拉取一个专门解决冲突的分支。解决完毕再合回功能主分支。
然后要尽力避免冲突，一个点就是要尽早提交，尽早合并，也就是push/pull操作都要尽早，不要等好几天才同步一次代码。
还有个点如果在合回主分支的时候出现冲突，例如如果是版本号冲突，如果不是大版本改变，例如2升3,我们一般会使用高版本那个，然后因为有冲突，所以在部署的时候看部署是不是正常,要多留个心。

-A：为什么不考虑把主分支合到功能主分支呢？

-B：从上面我的回答可以发现，多人协作开放出现冲突是正常也比较可能出现的，所以如果总是有冲突都需要拉分支，我个人习惯是会搞一个专门解决冲突的分支。
（其实这里回答不好，因为这里漏说为什么要专门拉一个解决冲突的分支，因此有了这一问，实际我这样操作的原因是为了保持功能主分支的干净度，不会掺杂其他分支的代码，这样当后面发生需要溯源代码的时候，比较好定位情况）

## 简历上你是做了笔试和面试系统是吧，他们的区别是什么？

## 看项目你们用的是2.7？怎么没考虑升到vue3？

## 我们是c端，你之前都是b端的经历是吧？b端和c端还是有一些差距的，所以如果是你来的话，怎么上手呢，会考虑什么方面解决

## 如果给你一个小程序的项目，你会怎么接手它

## 有了解过高并发吗？如果你遇到，你会考虑怎么解决？

## 场景题：有一个需求，你开发好了，你认为还需要关注什么

## 场景题：

## 个人发展倾向：我看你简历上做的都是pc端，你会喜欢小程序还是考虑仍然做 pc？

## 反问1：从面试官您的角度，什么样的人才会更合适（委婉发问）
回答的大致意思是希望不是一个只做业务的人，有更多的主动性，然后会去追求更好的实现。
然后要求每个人都可以承担多面手角色，意思是某个同事请假，其他人可以顶上去。
-B：关于这个多面手角色，怎么保证其他同事也熟悉别人做的需求呢？
-A：需求评审的时候会大家都会去听

