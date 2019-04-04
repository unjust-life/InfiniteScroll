Infinite-Scroll
===========

## 介绍

该模块可以使容器进行滚动到底部时加载更多数据。

当容器滚动到底部时会动态的触发loadMore方法。

## npm安装
```bash
$ npm install infinite-scroll
```

## RequireJS
```javascript
require.config({
	paths: {
		xxx: './infiniteScroll/index.js'
	}
});

require( [ 'infiniteScroll' ], function( infiniteScroll ) {
	...
});

```

## 直接引用
```html
<script src="./xxx.js"></script>
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

## 使用方式
```javascript
new infiniteScroll(id, obj)
```

- infiniteScroll构造函数接受2个参数
- 第一个参数为字符串, 指定容器的ID, 第二个是参数为配置对象。
- 对象参数值：
<table>
  <thead>
    <tr>
        <td>名称</td>
        <td>功能</td>
        <td>默认值</td>
        <td>可选值</td>
    </tr>
  </thead>
  <tobody>
    <tr>
      <td>distance</td>
      <td>滚动距离容器底部阈值 触发loadMore</td>
      <td>100</td>
      <td>Number</td>
    </tr>
    <tr>
      <td>noMore</td>
      <td>是否禁止加载更多</td>
      <td>false</td>
      <td>Boolen</td>
    </tr>
    <tr>
      <td>initLoad</td>
      <td>默认会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。</td>
      <td>true</td>
      <td>Boolen</td>
    </tr>
    <tr>
      <td>loadMore</td>
      <td>在容器滚动到底部时触发。ajax加载完成后执行this.loading = false。
      如果已经是最后一条数据了this.noMore = true来禁止重复加载。</td>
      <td>必须</td>
      <td>Function</td>
    </tr>
  </tobody>
</table>


### 可用方法
- restart()   开启滚动加载

- stop()      禁止滚动加载


##### 预览地址 https://unjust-life.github.io/InfiniteScroll/src/index

##### 版本更新记录

-v1.0.0  发布npm包 兼容webpack打包 CommonJS和AMD规范

-v0.2修改优化部分逻辑 精简代码

-v0.1初始版