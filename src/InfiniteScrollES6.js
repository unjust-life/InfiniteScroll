var InfiniteScroll = class {
    constructor(id, option) {
        var that = this
        this.distance = 100      //距离底部阈值
        this.loading = false     //防止接口重复请求
        this.noMore = false      //是否禁止加载更多
        this.initLoad = true     //若为真，则会立即检查是否需要执行加载方法。在初始状态下内容撑不满容器时十分有用。
        let list = document.getElementById(id)
        this.loadMore = function () { }
        for(var key in option){   
            //只遍历对象自身的属性，而不包含继承于原型链上的属性。 覆盖默认设置
            if (option.hasOwnProperty(key) === true) {
                this[key] = option[key]
            }
        }
        list.onscroll = (e) =>{ //实时监听dom滚动条
            // console.log('滚动条位置', list.scrollTop)
            // console.log('内容区高度', list.scrollHeight)
            // console.log('视口高度', list.clientHeight)
            // console.log('距离底部高度', list.scrollHeight - list.scrollTop - list.clientHeight)
            if(list.scrollHeight - list.scrollTop - list.clientHeight < this.distance ) {
                if(!this.noMore && !this.loading){
                    this.loading = true
                    //执行加载方法
                    this.loadMore()
                }
            }
        }
        // 初始化加载
        this.init = function () {
            if (list.scrollHeight <= list.clientHeight && this.initLoad) {
                if (!this.loading) {
                    this.loading = true
                    this.loadMore()
                }
            }
        }
        this.init()
    }
    // 重置
    restart() {
        this.loading = false
        this.noMore = false
    }
    // 禁止
    stop() {
        this.noMore = true
    }
}
