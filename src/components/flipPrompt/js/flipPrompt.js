define([
    'components/flipPrompt/template/flipPrompt.tpl'
], function (flipPromptTpl) {
    var FlipPrompt = PAWA.PAWAView.extend({
        id: 'FlipPrompt',
        name: 'FlipPrompt',
        tagName: 'div',
        type: 'control',
        className: 'FlipPrompt dsn',
        isLoading: false,
        isBlock: false,   //是否显示
        FBntIsHasChild: "0",
        events: {
            "tap #FPrompt": "clickCallback"    //绑定事件
        },
        // 初始化
        init: function (options) {    //类型alert,confirm,Flayer
            this.options = options || {};
            //判断设置值是否存在、如果不存在则初始化
            this.options["type"] = "alert";
            this.options["content"] = this.options["content"] || "系统繁忙";

            this.options["FBntIsHasChild"] = this.options["FBntIsHasChild"] || "0";

            if (this.options["type"] == "alert") {     //提示框一个按钮
                this.options["title"] = this.options["title"] || "温馨提示";
                this.options["alert"] = this.options["alert"] || null;
            }
            else if (this.options["type"] == "confirm") {   //提示框2个按钮
                this.options["title"] = this.options["title"] || "温馨提示";
                this.options["BntFontone"] = this.options["BntFontone"] || "确定";
                this.options["BntFonttwo"] = this.options["BntFonttwo"] || "取消";
            }
            else if (this.options["type"] == "Flayer") {  //Flayer直接显示内容

            }
        },
        render: function (options) {
            var self = this;
            var data = options.data;
            var html = _.template(flipPromptTpl);

            if (options["type"] != "Flayer") {
                if (options["type"] == "Loading") {
                    wrapView.lightBox.show(true); //遮罩曾显示
                } else {
                    wrapView.lightBox.show(); //遮罩曾显示
                }
            }

            self.$el.html(html(options));
            self.$el.removeClass('dsn').addClass('pop2');

        },
        clickCallback: function (e) {   //事件处理
            var $dom = $(e.target);
            var action = $dom.attr("action");
            if (action) {
                if (action == "FBntAlert") {

                    this.closeBG();

                    if (this.FBntAlert) {
                        this.FBntAlert();
                        this.FBntAlert = null;
                    }
                }
                else if (action == "FBntconfirm") {

                    this.closeBG();

                    if (this.FBntconfirm) {

                        this.FBntconfirm();

                        if (this.FBntIsHasChild !== "1") {
                            this.FBntconfirm = null;
                        }
                    }
                }
                else if (action == "FBntcentre") {

                    this.closeBG();

                    if (this.FBntcentre) {
                        this.FBntcentre();
                    }
                }
                else if (action == "FBntcancel") {

                    if (this.confirmBGClose) {
                        if (!this.recommendCode) {
                            this.closeBG(true);
                        }
                    }
                    else {
                        this.closeBG(false);
                    }

                    if (this.FBntcancel) {
                        this.FBntcancel();
                        if (!this.recommendCode) {
                            this.FBntcancel = null;
                        }
                    }
                }
            }
        },
        /**
         * 确认Box弹窗
         * @param option 参数
         *        option.title : [可选] 标题名称,默认"温馨提示".
         *        option.content : [可选] 提醒内容,默认"系统繁忙".
         *        option.FBntAlert : [可选] 按钮名称,默认"确定".
         * @param callback 回调
         */
        alert: function (option, callback) {
            option = option || {};
            option["type"] = "alert";
            option["title"] = option["title"] || "温馨提示";
            option["content"] = option["content"] || "系统繁忙";
            option["FBntAlert"] = option["FBntAlert"] || "确定";

            this.render(option);

            if (typeof(callback) == "function" && callback != null) {
                this.FBntAlert = callback;
            }
            this.isLoading = false;
            this.isBlock = true;
        },
        /**
         * Txt提醒
         * @param txt
         */
        txt: function (txt) {
            var self = this;

            //FBntAlert
            wrapView.lightBox.show();

            var html = _.template(flipPromptTpl)
            var data = {
                title: "温馨提示",
                content: txt || "",
                type: "txt"
            };

            self.$el.html(html(data));
            self.$el.removeClass('dsn').addClass('pop2');

            self.isLoading = false;
            self.isBlock = true;
        },
        /**
         * "确定-取消"类型弹窗
         * @param option 参数
         *        option.title : [可选] 标题名称,默认"温馨提示".
         *        option.content : [可选] 提醒内容,默认"系统繁忙".
         *        option.FBntconfirm : [可选] 左边按钮内容,默认"确定".
         *        option.FBntcancel : [可选] 右边按钮内容,默认"取消".
         * @param FBntconfirm 左边按钮回调
         * @param FBntcancel  右边按钮回调
         */
        confirm: function (option, FBntconfirm, FBntcancel) {     //弹出确认框
            var options = {};
            options["type"] = "confirm";
            if (option == null || option == "undefined") {
                options["title"] = "温馨提示";
                options["content"] = "系统繁忙";
                options["FBntconfirm"] = "确定";
                options["FBntcancel"] = "取消";
                options["BGClose"] = true;
            } else {
                options["title"] = option["title"] || "温馨提示";
                options["content"] = option["content"] || "系统繁忙";
                options["FBntconfirm"] = option["FBntconfirm"] || "确定";
                options["FBntcancel"] = option["FBntcancel"] || "取消";
                options["FBntIsHasChild"] = option["FBntIsHasChild"] || "0";
                if (option["BGClose"] != null && option["BGClose"] != undefined) {
                    options["BGClose"] = option["BGClose"];
                } else {
                    options["BGClose"] = true;
                }
            }

            this.recommendCode = option["recommendCode"] || false;  //推荐码

            this.confirmBGClose = options["BGClose"];   //标示是否关闭背景

            this.render(options);
            if (typeof(FBntconfirm) == "function" && FBntconfirm != null) {
                this.FBntconfirm = FBntconfirm;
            }

            if (options["FBntIsHasChild"] === "1") {
                this.FBntIsHasChild = "1";
            }
            if (typeof(FBntcancel) == "function" && FBntcancel != null) {
                this.FBntcancel = FBntcancel;
            }
            this.isLoading = false;
            this.isBlock = true;
        },
        /**
         * 三选Box弹窗
         * @param option 参数
         *        option.title : [可选] 标题名称,默认"温馨提示".
         *        option.content : [可选] 提醒内容,默认"系统繁忙".
         *        option.FBntconfirm : [可选] 左边按钮内容,默认"确定".
         *        option.FBntcentre : [可选] 中间按钮内容,默认"操作".
         *        option.FBntcancel : [可选] 右边按钮内容,默认"取消".
         * @param FBntconfirm [可选]左边按钮回调
         * @param FBntcentre  [可选]中间按钮回调
         * @param FBntcancel  [可选]右边按钮回调
         */
        multiConfirm: function (option, FBntconfirm, FBntcentre, FBntcancel) {     //弹出确认框
            var options = {};
            options["type"] = "multiConfirm";
            if (option == null || option == "undefined") {
                options["title"] = "温馨提示";
                options["content"] = "系统繁忙";
                options["FBntconfirm"] = "确定";
                options["FBntcentre"] = "操作";
                options["FBntcancel"] = "取消";
                // options["FBntConfirmColor"] = "pop_btn_grey";  //f_c_dc4b16
                // options["FBntCentreColor"] = "pop_btn_grey";
                // options["FBntCancelColor"] = "pop_btn_grey";
                options["BGClose"] = true;
            } else {
                options["title"] = option["title"] || "温馨提示";
                options["content"] = option["content"] || "系统繁忙";
                options["FBntconfirm"] = option["FBntconfirm"] || "确定";
                options["FBntcentre"] = option["FBntcentre"] || "操作";
                options["FBntcancel"] = option["FBntcancel"] || "取消";
                options["FBntIsHasChild"] = option["FBntIsHasChild"] || "0";
                // options["FBntConfirmColor"] = option["FBntConfirmColor"] || "pop_btn_grey";
                // options["FBntCentreColor"] = option["FBntCentreColor"] || "pop_btn_grey";
                // options["FBntCancelColor"] = option["FBntCancelColor"] || "pop_btn_grey";
                if (option["BGClose"] != null && option["BGClose"] != undefined) {
                    options["BGClose"] = option["BGClose"];
                } else {
                    options["BGClose"] = true;
                }
            }

            this.recommendCode = option["recommendCode"] || false;  //推荐码

            this.confirmBGClose = options["BGClose"];   //标示是否关闭背景

            this.render(options);

            if (typeof(FBntconfirm) == "function" && FBntconfirm != null) {
                this.FBntconfirm = FBntconfirm;
            }

            if (options["FBntIsHasChild"] === "1") {
                this.FBntIsHasChild = "1";
            }
            if (typeof(FBntcentre) == "function" && FBntcentre != null) {
                this.FBntcentre = FBntcentre;
            }
            if (typeof(FBntcancel) == "function" && FBntcancel != null) {
                this.FBntcancel = FBntcancel;
            }
            this.isLoading = false;
            this.isBlock = true;
        },
        /**
         * 弹出吐丝框
         * @param content 显示内容
         * @param mark 是否持久显示标识
         * @param latency timeout时延
         * @param callback  回调
         */
        flayer: function (content, always, latency, callback) {
            always = !!always;
            latency = latency || 1000;

            var self = this;
            var options = {};
            options["type"] = "Flayer";
            options["content"] = content;
            this.render(options);
            this.isLoading = false;

            if (!always) {
                this.FlayerInter = setTimeout(function () {
                    self.$el.removeClass('pop2').addClass('dsn');
                    wrapView.lightBox.hide(); //遮罩隐藏
                    self.isBlock = false;
                    callback && callback();
                }, latency);
            }
            this.isBlock = true;
        },

        /**
         * 显示Loading
         * @param content 显示内容
         */
        loading: function (content) {
            var options = {}, self = this;

            options["type"] = "Loading";
            options["content"] = content;

            self.render(options);
            self.isLoading = true;
            self.isBlock = true;
        },

        //关闭Flayer
        closeFlayer: function () {
            this.$el.removeClass('pop2').addClass('dsn');
            this.isLoading = false;
            this.isBlock = false;
        },
        closeBG: function (bgclose) {
            var self = this;

            if (bgclose || bgclose == undefined) {
                wrapView.lightBox.hide(); //遮罩隐藏
            }

            self.$el.removeClass('pop2').addClass('dsn');
            self.isLoading = false;
            self.isBlock = false;
        },
        close: function (loading) {     //取消关闭事件
            var self = this;

            if (!(loading && self.isLoading == false)) {
                wrapView.lightBox.hide(); //遮罩隐藏
                self.$el.removeClass('pop2').addClass('dsn');
            }
            self.isLoading = false;
            self.isBlock = false;
        }
    });

    return FlipPrompt;
});