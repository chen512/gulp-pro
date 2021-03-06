define([
    'modules/sample/model/form/formStep2.model',
    'modules/sample/view/form/formStep2.view'
], function(FormStep2Model, FormStep2View) {
    var FormStep2Controller = PAWA.PAWAController.extend({
        name:"step2Controller",
        $model: null,
        $view: null,
        isCache: true,  //系统缓存该功能. 默认为false
        /**
         * controller初始化
         */
        init: function(options) {
            //TODO
            this.$model = new FormStep2Model();
            console.info("初始化表单:FormStep2Controller");
        },
        /**
         *  功能入口函数, 需要覆盖.
         *  @parameter request : 页面跳转的请求信息
         *  @important :为了更好的用户体验,必须优先显示界面; 而后的数据更新,可通过Model的success回调,或model的数据绑定事件(change) 进行回调处理.
         */
        dispatch: function(request) {
            wrapView.setHeader({
                leftAction: function(){
                    PAWA.router.navigate("formStep1");
                },
                center: "第二步" ,
            });
            this.$view = wrapView.setBody(FormStep2View, request);

            //TODO: $model.toDoSomething 根据业务需求自行覆盖
            this.$model.toDoSomething({data:{}}, function(bizData){
                //TODO : 根据业务需要自行去处理 bizData
                //EXAMPLE : this.$view.refresh({data:{}});
            }, function(){
            });
        },
        //恢复缓存之前的函数回调,若业务场景涉及,可以自定义覆盖.
        beforeRestoreCache:function(){
            //TODO
            console.info("恢复缓存之前的函数回调: beforeRestoreCache");
        },
        //恢复缓存之后的函数回调,若业务场景涉及,可以自定义覆盖.
        afterRestoreCache: function () {
            //TODO
            console.info("恢复缓存之后的函数回调: afterRestoreCache");
        },
        //内存回收管理, Controller销毁时回调该方法,用于销毁开发自定义的内存对象.
        clear: function () {
            //TODO
            //Sample : chart.toDestroy();
            console.info("clear!");
        }
    });

    return FormStep2Controller;
});