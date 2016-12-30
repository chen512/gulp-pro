define([
    'modules/sample/template/index.tpl',
    'css!modules/sample/assets/css/m_sample'
    ], function(IndexView){
        var Sample_moduleView = PAWA.PAWAView.extend({
            id: 'sample_moduleView',
            name: 'sample_moduleView',
            template: _.template(IndexView),
            //代理事件定义
            events: {
                "tap #enter_form_link" :  "toFormPage",
                "tap #enter_list_link" :  "toListPage",
                "tap #enter_native_test_link" :  "toNativeTestPage",
                "tap #finacial_products" :  "toFinacialProducts",
                "tap #app_logout" :  "appLogout"
            },
            //初始化方法
            init: function(options) {
                this.render();
            },
            toFormPage:function() {
                PAWA.router.navigate("formStep1");
            },
            toListPage:function() {
                PAWA.router.navigate("products");
            },
            toNativeTestPage:function() {
                PAWA.router.navigate("nativeTest");
            },
            toFinacialProducts:function() {
                PAWA.router.redirect("modules/financialProducts/main.html#financialProducts");
            },
            appLogout: function () {
                Application.logout();
            },
            render: function(data) {
                var html = this.template(data);
                this.$el.html(html);
            }
    });
        return Sample_moduleView;
}); 