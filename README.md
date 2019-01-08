# 无限滚动加载插件
不依赖任何库，原生js实现

# InfiniteScroll

<div>InfiniteScroll构造函数接受2个参数</div>
<div>第一个参数为字符串, 指定容器的ID, 第二个是参数为参数对象</div>
<div>distance: 100,       距离底部阈值      非必须</div>
<div>noMore  : false,     是否禁止加载更多   非必须</div>
<div>initLoad: true       若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。 非必须</div>
<div>loadMore: 接受一个函数  在容器滚动到底部时触发</div>




实例

<pre><code>
var scroll = new InfiniteScroll('list', {
    loadMore: function () { //在容器滚动到底部时触发
        this.loading = true
        setTimeout(() => {
            this.loading = false
        }, 500);
    }
})
</code></pre>



参数对象api

<pre><code>
var scroll = new InfiniteScroll('list', {
    distance: 100,       //距离底部阈值      数值
    loading : false,     //防止重复加载      布尔
    noMore  : false,     //是否禁止加载更多   布尔
    initLoad: true       //若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。 布尔
    loadMore: function () { //接收一个函数  在容器滚动到底部时触发
        this.loading = true
        console.log('请求数据')
        setTimeout(() => {
            this.loading = false
        }, 500);

    }
})


//方法api
scroll.restart()   开启滚动加载  默认开启 <br>
scroll.stop()      禁止滚动加载          <br>
</code></pre>


