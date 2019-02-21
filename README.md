### 无限滚动加载插件
不依赖任何库，原生js实现

### InfiniteScroll

<div>InfiniteScroll构造函数接受2个参数</div>
<div>第一个参数为字符串, 指定容器的ID, 第二个是参数为参数对象</div>
<div>distance: 100,       距离底部阈值      非必须</div>
<div>noMore  : false,     是否禁止加载更多   非必须</div>
<div>initLoad: true       若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。 非必须</div>
<div>loadMore: 接受一个函数  在容器滚动到底部时触发的加载方法 在这里自定义逻辑 加载完成后执行this.loading = false。如果已经是最后一条数据了可忽略。</div>


---

#一个简单的实例

<pre><code>
var scroll = new InfiniteScroll('list', {
    loadMore: function () {
        setTimeout(() => {
            this.loading = false
        }, 500);
    }
})
</code></pre>


---
#参数对象api

<pre><code>
distance: 100,       //距离底部阈值      数值
loading : false,     //防止重复加载      布尔
noMore  : false,     //是否禁止加载更多   布尔
initLoad: true       //若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。 布尔
loadMore: function () { //接收一个函数  在容器滚动到底部时触发
    console.log('请求数据')
    setTimeout(() => {
        this.loading = false
    }, 500);

}

可使用的方法api
restart()   开启滚动加载<br>
stop()      禁止滚动加载<br>
</code></pre>

## 预览地址 https://unjust-life.github.io/InfiniteScroll/index


#版本更新记录
---
v0.2新增使用es6重构的版本 修改优化部分逻辑 精简代码
---
v0.1初始版