define([
    'modules/sample/template/form/formStep1.tpl',
    'css!modules/sample/assets/css/m_sample'
    ], function(pageTpl){
        var FormStep1View = PAWA.PAWAView.extend({
            template: _.template(pageTpl),
            //代理事件定义
            events: {
                "tap #toNextBtn" :  "nextStep"
            },
            //初始化方法
            init: function(options) {
            },
            nextStep:function() {
                var formData = {
                    userName: $("#accountNameTxt").val(),
                    telephoneNum:$("#accountNumberTxt").val(),
                    remarks:$("#remarktxt").val()
                }
                PAWA.router.navigate("formStep2",formData);
            },
            render: function(data) {
                var html = this.template(data);
                this.$el.html(html);
            }
    });
        return FormStep1View;
});