define([
    'modules/sample/template/form/formResult.tpl',
    'css!modules/sample/assets/css/m_sample'
    ], function(pageTpl){
        var FormResultView = PAWA.PAWAView.extend({
            template: _.template(pageTpl),
            //代理事件定义
            events: {
                "tap #btn_submit" :  "submit"
            },
            //初始化方法
            init: function(options) {
                this.render(options);
            },
            submit:function() {
                var formData = {
                    userName: $("#accountNameTxt").val(),
                    tphoneNum:$("#accountNumberTxt").val(),
                    remarks:$("#remarktxt").val()
                }
                PAWA.router.navigate("formResult",formData);
            },
            render: function(data) {
                var html = this.template(data);
                this.$el.html(html);
            }
    });
        return FormResultView;
});