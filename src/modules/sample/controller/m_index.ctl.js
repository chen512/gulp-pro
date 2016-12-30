define([
    'modules/sample/view/index.view'
], function(IndexView) {
    var IndexController = PAWA.PAWAController.extend({
        name:"indexController",
        $view: null,
        /**
         * controller初始化
         */
        init: function(options) {
            //TODO
        },
        /**
         *  功能入口函数, 需要覆盖.
         *  @parameter request : 页面跳转的请求信息
         *  @important :为了更好的用户体验,必须优先显示界面; 而后的数据更新,可通过Model的success回调,或model的数据绑定事件(change) 进行回调处理.
         */
        dispatch: function(request) {
            /**
             * 头部调用.
             * 强调注意:
             *   header头部为String时,入参为String :  center: "账户查询" ,
             *   为Tab时,入参为数组: center:[ {name:"产品列表",  action:function(){} },  {name:"待结算",  action:function(){}  }]
             */
            wrapView.setHeader({
                center: "Index",
                leftAction: function(){
                    Application.goHome();
                }
            });
            this.$view = wrapView.setBody(IndexView, {data:{}});
        }
    });

    return IndexController;
});