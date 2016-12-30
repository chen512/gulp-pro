define([
    'modules/sample/view/nativeTest/nativeTest.view'
], function(SampleView) {
    var LoginController = PAWA.PAWAController.extend({
        $model: null,
        $view: null,
        isCache: false,  //系统缓存该功能. 默认为false
        /**
         * controller初始化
         */
        init: function(options) {
            // alert($(window).height());
            //TODO
        },
        /**
         *  功能入口函数, 需要覆盖.
         *  @parameter request : 页面跳转的请求信息
         *  @important :为了更好的用户体验,必须优先显示界面; 而后的数据更新,可通过Model的success回调,或model的数据绑定事件(change) 进行回调处理.
         */
        dispatch: function(request) {
            console.dirxml("NativeTest页面接受数据:" + JSON.stringify(request));
            wrapView.setHeader({
                center: "委托查询",
                leftAction: function(){
                    PAWA.router.navigate("#index");
                }
            });
            this.$view = wrapView.setBody(SampleView, {data:{}});
            this.$view.render({data:{}});
        },
        //恢复缓存之前的函数回调,若业务场景涉及,可以自定义覆盖.
        beforeRestoreCache:function(){
            //TODO
        },
        //恢复缓存之后的函数回调,若业务场景涉及,可以自定义覆盖.
        afterRestoreCache: function () {
            //TODO
        }
    });
    window.LoginController = LoginController;
    return LoginController;
});