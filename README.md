# InfiniteScroll

<div>InfiniteScroll构造函数接受2个参数</div>
<div>第一个参数为字符串, 指定容器的ID, 第二个是参数为参数对象</div>
<div>distance: 100,       距离底部阈值      非必须</div>
<div>noMore  : false,     是否禁止加载更多   非必须</div>
<div>initLoad: true       若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。 非必须</div>
<div>loadMore: 接受一个函数  在容器滚动到底部时触发</div>


// api方法 <br>
// restart方法   开启滚动加载  默认开启 <br>
// stop方法      禁止滚动加载          <br>