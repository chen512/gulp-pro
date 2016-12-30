define([
    'modules/sample/view/form/formResult.view'
], function(FormResultView) {
    var FormResultController = PAWA.PAWAController.extend({
        $view: null,
        /**
         *  功能入口函数, 需要覆盖.
         *  @parameter request : 页面跳转的请求信息
         *  @important :为了更好的用户体验,必须优先显示界面; 而后的数据更新,可通过Model的success回调,或model的数据绑定事件(change) 进行回调处理.
         */
        dispatch: function(request) {
            wrapView.setHeader({
                leftAction: function(){
                    PAWA.router.navigate("#index");
                },
                center: "结果" ,
            });
            this.$view = wrapView.setBody(FormResultView);
            this.$view.render();
        },
        //内存回收管理, Controller销毁时回调该方法,用于销毁开发自定义的内存对象.
        clear: function () {
            //TODO
            console.error("clear!");
           
        }
    });

    return FormResultController;
});