define(function() {
    var SampleStep1Model = PAWA.PAWAModel.extend({
        defaults: {
        },
        init: function(options) {
            //TODO
        },
        toDoSomething: function() {
            //TODO 实现业务逻辑
            //个人网银接口请求样板,如下
            BankRequestService.call("@urlKey", {
                data: {},
                success: function (response) {
                    
                },
                error: function (error) {

                }
            })
        }

    });

    return SampleStep1Model;
});