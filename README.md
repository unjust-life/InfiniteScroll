Infinite-Scroll
===========

### 介绍
该模块可以使容器进行滚动到底部时加载更多数据。

当容器滚动到底部时会动态的触发loadMore方法。

### npm安装

```bash
$ npm install infinitescrollbot
```


### RequireJS
```javascript
require.config({
	paths: {
		infiniteScroll: './infiniteScroll/index.js'
	}
});

require( [ 'infiniteScroll' ], function( infiniteScroll ) {
	...
});

```

### 直接引用
```html
<script src="./infiniteScroll.js"></script>
<script>
var scroll = new infiniteScroll('list', {
    loadMore: function () {
        do some thing
        setTimeout(() => {
            this.loading = false
        }, 500);
    }
})
</script>
```


### api文档

infiniteScroll构造函数接受2个参数

第一个参数为字符串, 指定容器的ID, 第二个是参数为配置对象

distance: 100,       距离底部阈值      非必须

noMore  : false,     是否禁止加载更多   非必须

initLoad: true       若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。 非必须

loadMore: 接受一个函数  在容器滚动到底部时触发的加载方法 在这里自定义逻辑 加载完成后执行this.loading = false。如果已经是最后一条数据了this.noMore = true来禁止重复加载。


方法

restart()   开启滚动加载

stop()      禁止滚动加载



##### 预览地址 https://unjust-life.github.io/InfiniteScroll/src/index

##### 版本更新记录

-v1.0.0  发布npm包 兼容webpack打包 CommonJS和AMD规范

-v0.2修改优化部分逻辑 精简代码

-v0.1初始版