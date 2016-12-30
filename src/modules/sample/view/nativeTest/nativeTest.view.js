define([
    'modules/sample/template/nativeTest/nativeTest.tpl',
    'components/toast/js/toast',
    'css!modules/sample/assets/css/m_sample'
], function(sampleTpl, Toast){
    var LoginView2 = PAWA.PAWAView.extend({
        id: 'sampleView',
        name: 'sampleView',
        template: _.template(sampleTpl),
        //代理事件定义
        events: {
            "tap #GO_BACK_HOME" :  "GO_BACK_HOME",
            "tap #CHECK_LOGIN_STATUS" :  "CHECK_LOGIN_STATUS",
            "tap #CHECK_CMS_SERVER_STATUS" :  "CHECK_CMS_SERVER_STATUS",
            "tap #GET_ENVIRONMENT_AND_ENTRANCE" :  "GET_ENVIRONMENT_AND_ENTRANCE",
            "tap #HTTP_REQUEST" :  "HTTP_REQUEST",
            "tap #PAGE_FORWARD" :  "PAGE_FORWARD",
            "tap #CLEAR_COOKIE" :  "CLEAR_COOKIE",
            "tap #DELETE_COOKIE" :  "DELETE_COOKIE",
            "tap #TALKINGDATA_TRACK_EVENT" :  "TALKINGDATA_TRACK_EVENT",
            "tap #TALKINGDATA_COLLECT_USER" :  "TALKINGDATA_COLLECT_USER",
            "tap #TALKINGDATA_CLEAR_USER" :  "TALKINGDATA_CLEAR_USER",
            "tap #GET_TALKINGDATA_DEVICE_ID" :  "GET_TALKINGDATA_DEVICE_ID",
            "tap #GET_NATIVE_OTP" :  "GET_NATIVE_OTP",
            "tap #SELECT_CONTACT" :  "SELECT_CONTACT",
            "tap #GET_LOCATION" :  "GET_LOCATION",
            "tap #GET_DEVICE_TOKEN" :  "GET_DEVICE_TOKEN",
            "tap #GET_DEVICE_ID" :  "GET_DEVICE_ID",
            "tap #GET_MOBILE_TYPE" :  "GET_MOBILE_TYPE",
            "tap #GET_DEVICE_TYPE" :  "GET_DEVICE_TYPE",
            "tap #GET_APPLICATION_VERSION_INFO" :  "GET_APPLICATION_VERSION_INFO",
            "tap #GTE_HISTORY_PHONES" :  "GTE_HISTORY_PHONES",
            "tap #GET_MENUS" :  "GET_MENUS",
            "tap #GET_APPCONFIG" :  "GET_APPCONFIG",
            "tap #GET_SYSTEM_TIME" :  "GET_SYSTEM_TIME",
            "tap #IS_FIRST_SETUP_GESTURE_PWD" :  "IS_FIRST_SETUP_GESTURE_PWD",
            "tap #SAVE_DATA" :  "SAVE_DATA",
            "tap #DELETE_DATA" :  "DELETE_DATA",
            "tap #GET_DATA" :  "GET_DATA",
            "tap #COPY_TO_CLIPBOARD" :  "COPY_TO_CLIPBOARD",
            "tap #PLAY_AUDIO" :  "PLAY_AUDIO",
            "tap #SCREEN_CAPTURE" :  "SCREEN_CAPTURE",
            "tap #SHOW_HEADER" :  "SHOW_HEADER",
            "tap #NOTICE_PAWA_COMPLETE" :  "NOTICE_PAWA_COMPLETE",
            "tap #EXIT_APPLICATION" :  "EXIT_APPLICATION",
            "tap #LOGINOUT" :  "LOGINOUT",
            "tap #GO_ROUTER" :  "GO_ROUTER",
            "tap #SHOW_NOTICE" :  "SHOW_NOTICE",
            "tap #SHOW_SAFE_KEYBOARD" :  "SHOW_SAFE_KEYBOARD",
            "tap #HIDE_SAFE_KEYBOARD" :  "HIDE_SAFE_KEYBOARD",
            "tap #SWITCH_TO_SAFE_KEYBOARD" :  "SWITCH_TO_SAFE_KEYBOARD",
            "tap #SWITCH_TO_SYSTEM_KEYBOARD" :  "SWITCH_TO_SYSTEM_KEYBOARD",
            "tap #SWITCH_TO_DECIMAL_KEYBOARD" :  "SWITCH_TO_DECIMAL_KEYBOARD",
            "tap #SWITCH_TO_PWD_NUMBER_KEYBOARD" :  "SWITCH_TO_PWD_NUMBER_KEYBOARD",
            "tap #SHOW_INTELL_VOICE" :  "SHOW_INTELL_VOICE",
            "tap #GET_VOICE_TEXT" :  "GET_VOICE_TEXT",
            "tap #ENCRYPT_BY_3DES" :  "ENCRYPT_BY_3DES",
            "tap #DECRYPT_BY_3DES" :  "DECRYPT_BY_3DES",
            "tap #ENCRYPT_BY_AES" :  "ENCRYPT_BY_AES",
            "tap #DECRYPT_BY_AES" :  "DECRYPT_BY_AES",
            "tap #ENCRYPT_BY_RSA" :  "ENCRYPT_BY_RSA",
            "tap #DECRYPT_BY_RSA" :  "DECRYPT_BY_RSA",
            "tap #BAR_CODE_SCAN" :  "BAR_CODE_SCAN",
            "tap #GENERATE_QR_CODE" :  "GENERATE_QR_CODE",
            "tap #GENERATE_QR_CODE_FOR_MGM" :  "GENERATE_QR_CODE_FOR_MGM",
            "tap #SAVE_QR_CODE" :  "SAVE_QR_CODE",
            "tap #SHARE_MSG" :  "SHARE_MSG",
            "tap #SHARE_MSG_ANDROID" :  "SHARE_MSG_ANDROID",
            "tap #SHARE_SEMAN_CODE" :  "SHARE_SEMAN_CODE",
            "tap #GRAPH_PASSWORD_SHOW" :  "GRAPH_PASSWORD_SHOW",
            "tap #GRAPH_PASSWORD_CLOSE" :  "GRAPH_PASSWORD_CLOSE",
            "tap #GRAPH_PASSWORD_MSG" :  "GRAPH_PASSWORD_MSG",
            "tap #SHOW_CALENDAR_DIALOG" :  "SHOW_CALENDAR_DIALOG",
            "tap #SHOW_MENU_DIALOG" :  "SHOW_MENU_DIALOG",
            "tap #SHOW_MULTI_SELECT_DIALOG" :  "SHOW_MULTI_SELECT_DIALOG",
            "tap #SHOW_SPINNER_DIALOG" :  "SHOW_SPINNER_DIALOG",
            "tap #SHOW_AREA_CITY_DIALOG" :  "SHOW_AREA_CITY_DIALOG",
            "tap #SHOW_BOTTM" :  "SHOW_BOTTM",
            "tap #SHOW_LOADING_DIALOG" :  "SHOW_LOADING_DIALOG",
            "tap #HIDE_LOADING_DIALOG" :  "HIDE_LOADING_DIALOG",
            "tap #SHOW_NETWORK_INDICATOR" :  "SHOW_NETWORK_INDICATOR",
            "tap #HIDE_NETWORK_INDICATOR" :  "HIDE_NETWORK_INDICATOR",
            "tap #SET_NAV_BUTTON" :  "SET_NAV_BUTTON",
            "tap #SET_NAV_BUTTON_ENABLED" :  "SET_NAV_BUTTON_ENABLED",
            "tap #LIGHT_PAY_PASSWORD_SHOW" :  "LIGHT_PAY_PASSWORD_SHOW",
            "tap #LIGHT_PAY_PASSWORD_SAVE" :  "LIGHT_PAY_PASSWORD_SAVE",
            "tap #LIGHT_PAY_SHOW" :  "LIGHT_PAY_SHOW",
            "tap #LIGHT_PAY_INITIALIZE_OK" :  "LIGHT_PAY_INITIALIZE_OK",
            "tap #GET_AES_KEY" :  "GET_AES_KEY",
            "tap #SAVE_LIGHT_PAY_INFO" :  "SAVE_LIGHT_PAY_INFO",
            "tap #GET_LIGHT_PAY_USER_ID" :  "GET_LIGHT_PAY_USER_ID",
            "tap #GET_LIGHT_PAY_COUNT_AND_DAYS" :  "GET_LIGHT_PAY_COUNT_AND_DAYS",
            "tap #LIGHT_PAY_WRITE_CARD_INFO" :  "LIGHT_PAY_WRITE_CARD_INFO",
            "tap #GET_ACCT_LIST" :  "GET_ACCT_LIST",
            "tap #SHOW_GESTURE_LOGIN_SETUP_VIEW" :  "SHOW_GESTURE_LOGIN_SETUP_VIEW",
            "tap #SAVE_GESTURE_LOGIN_DATA" :  "SAVE_GESTURE_LOGIN_DATA",
            "tap #GET_GESTURE_LOGIN_DATA" :  "GET_GESTURE_LOGIN_DATA",
            "tap #SAVE_GESTURE_LOGIN_OPEN_FLAG" :  "SAVE_GESTURE_LOGIN_OPEN_FLAG",
            "tap #GET_GESTURE_LOGIN_OPEN_FLAG" :  "GET_GESTURE_LOGIN_OPEN_FLAG",
            "tap #OPEN_GESTURE_LOGIN" :  "OPEN_GESTURE_LOGIN",
            "tap #CLEAR_GESTURE_PWD_SETTING" :  "CLEAR_GESTURE_PWD_SETTING",
            "tap #DELETE_APNS_NOTIFICATION" :  "DELETE_APNS_NOTIFICATION",
            "tap #DELETE_ALL_APNS_NOTIFICATION" :  "DELETE_ALL_APNS_NOTIFICATION",
            "tap #GIVE_MARK_FOR_APP" :  "GIVE_MARK_FOR_APP",
            "tap #UPDATE_APPLICATION" :  "UPDATE_APPLICATION",
            "tap #OPEN_SERVICE_CENTER" :  "OPEN_SERVICE_CENTER",
            "tap #MODIFY_HINT_MSG" :  "MODIFY_HINT_MSG",
            "tap #SET_COMMUNITY_LOGIN_URL" :  "SET_COMMUNITY_LOGIN_URL",
            "tap #SET_MENUS" :  "SET_MENUS",
        },
        //初始化方法
        init: function(options) {
        },

        CHECK_LOGIN_STATUS:function() {
            NativeService.invoke({
                srvId:"CHECK_LOGIN_STATUS",
                success: function(options) {
                    alert("CHECK_LOGIN_STATUS:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("CHECK_LOGIN_STATUS:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },
        CHECK_CMS_SERVER_STATUS:function() {
            NativeService.invoke({
                srvId:"CHECK_CMS_SERVER_STATUS",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("CHECK_CMS_SERVER_STATUS:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("CHECK_CMS_SERVER_STATUS:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_ENVIRONMENT_AND_ENTRANCE:function() {
            NativeService.invoke({
                srvId:"GET_ENVIRONMENT_AND_ENTRANCE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_ENVIRONMENT_AND_ENTRANCE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_ENVIRONMENT_AND_ENTRANCE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        HTTP_REQUEST:function() {
            alert("当前环境:" + JSON.stringify(Application.getSystemEnvironment()));
            alert("获取系统时间接口:" + RequestService.getURL("qryEbankSysTime") );
            NativeService.invoke({
                srvId:"HTTP_REQUEST",
                param:{
                    url: RequestService.getURL("qryEbankSysTime"),
                    type: "post",
                    parameters: {
                        channelType:3,
                        responseDataType:"JSON",
                        nativeVersion:"2.5.7"
                    }
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("HTTP_REQUEST:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("HTTP_REQUEST:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        PAGE_FORWARD:function() {
            NativeService.invoke({
                srvId:"PAGE_FORWARD",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("PAGE_FORWARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("PAGE_FORWARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        CLEAR_COOKIE:function() {
            NativeService.invoke({
                srvId:"CLEAR_COOKIE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("CLEAR_COOKIE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("CLEAR_COOKIE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DELETE_COOKIE:function() {
            NativeService.invoke({
                srvId:"DELETE_COOKIE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DELETE_COOKIE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DELETE_COOKIE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        TALKINGDATA_TRACK_EVENT:function() {
            NativeService.invoke({
                srvId:"TALKINGDATA_TRACK_EVENT",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("TALKINGDATA_TRACK_EVENT:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("TALKINGDATA_TRACK_EVENT:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        TALKINGDATA_COLLECT_USER:function() {
            NativeService.invoke({
                srvId:"TALKINGDATA_COLLECT_USER",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("TALKINGDATA_COLLECT_USER:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("TALKINGDATA_COLLECT_USER:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        TALKINGDATA_CLEAR_USER:function() {
            NativeService.invoke({
                srvId:"TALKINGDATA_CLEAR_USER",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("TALKINGDATA_CLEAR_USER:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("TALKINGDATA_CLEAR_USER:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_TALKINGDATA_DEVICE_ID:function() {
            NativeService.invoke({
                srvId:"GET_TALKINGDATA_DEVICE_ID",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_TALKINGDATA_DEVICE_ID:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_TALKINGDATA_DEVICE_ID:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_NATIVE_OTP:function() {
            NativeService.invoke({
                srvId:"GET_NATIVE_OTP",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_NATIVE_OTP:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_NATIVE_OTP:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SELECT_CONTACT:function() {
            NativeService.invoke({
                srvId:"SELECT_CONTACT",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SELECT_CONTACT:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SELECT_CONTACT:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_LOCATION:function() {
            NativeService.invoke({
                srvId:"GET_LOCATION",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_LOCATION:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_LOCATION:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_DEVICE_TOKEN:function() {
            NativeService.invoke({
                srvId:"GET_DEVICE_TOKEN",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_DEVICE_TOKEN:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_DEVICE_TOKEN:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_DEVICE_ID:function() {
            NativeService.invoke({
                srvId:"GET_DEVICE_ID",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_DEVICE_ID:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_DEVICE_ID:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_MOBILE_TYPE:function() {
            NativeService.invoke({
                srvId:"GET_MOBILE_TYPE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_MOBILE_TYPE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_MOBILE_TYPE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_DEVICE_TYPE:function() {
            NativeService.invoke({
                srvId:"GET_DEVICE_TYPE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_DEVICE_TYPE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_DEVICE_TYPE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_APPLICATION_VERSION_INFO:function() {
            NativeService.invoke({
                srvId:"GET_APPLICATION_VERSION_INFO",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_APPLICATION_VERSION_INFO:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_APPLICATION_VERSION_INFO:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GTE_HISTORY_PHONES:function() {
            NativeService.invoke({
                srvId:"GTE_HISTORY_PHONES",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GTE_HISTORY_PHONES:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GTE_HISTORY_PHONES:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_MENUS:function() {
            NativeService.invoke({
                srvId:"GET_MENUS",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_MENUS:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_MENUS:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_APPCONFIG:function() {
            NativeService.invoke({
                srvId:"GET_APPCONFIG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_APPCONFIG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_APPCONFIG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_SYSTEM_TIME:function() {
            NativeService.invoke({
                srvId:"GET_SYSTEM_TIME",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_SYSTEM_TIME:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_SYSTEM_TIME:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        IS_FIRST_SETUP_GESTURE_PWD:function() {
            NativeService.invoke({
                srvId:"IS_FIRST_SETUP_GESTURE_PWD",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("IS_FIRST_SETUP_GESTURE_PWD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("IS_FIRST_SETUP_GESTURE_PWD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SAVE_DATA:function() {
            NativeService.invoke({
                srvId:"SAVE_DATA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SAVE_DATA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SAVE_DATA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DELETE_DATA:function() {
            NativeService.invoke({
                srvId:"DELETE_DATA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DELETE_DATA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DELETE_DATA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_DATA:function() {
            NativeService.invoke({
                srvId:"GET_DATA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_DATA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_DATA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        COPY_TO_CLIPBOARD:function() {
            NativeService.invoke({
                srvId:"COPY_TO_CLIPBOARD",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("COPY_TO_CLIPBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("COPY_TO_CLIPBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        PLAY_AUDIO:function() {
            NativeService.invoke({
                srvId:"PLAY_AUDIO",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("PLAY_AUDIO:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("PLAY_AUDIO:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SCREEN_CAPTURE:function() {
            NativeService.invoke({
                srvId:"SCREEN_CAPTURE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SCREEN_CAPTURE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SCREEN_CAPTURE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_HEADER:function() {
            NativeService.invoke({
                srvId:"SHOW_HEADER",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_HEADER:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_HEADER:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        NOTICE_PAWA_COMPLETE:function() {
            NativeService.invoke({
                srvId:"NOTICE_PAWA_COMPLETE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("NOTICE_PAWA_COMPLETE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("NOTICE_PAWA_COMPLETE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        EXIT_APPLICATION:function() {
            NativeService.invoke({
                srvId:"EXIT_APPLICATION",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("EXIT_APPLICATION:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("EXIT_APPLICATION:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        LOGINOUT:function() {
            NativeService.invoke({
                srvId:"LOGINOUT",
                param:{
                    "hasMask":true,
                    "fromWhere":"oneLogin"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("LOGINOUT:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("LOGINOUT:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GO_BACK_HOME:function() {
            NativeService.invoke({
                srvId:"GO_BACK_HOME",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GO_BACK_HOME:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GO_BACK_HOME:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GO_ROUTER:function() {
            NativeService.invoke({
                srvId:"GO_ROUTER",
                param:{
                    "router":"#more/moreHelpGuide/help"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GO_ROUTER:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GO_ROUTER:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_NOTICE:function() {
            NativeService.invoke({
                srvId:"SHOW_NOTICE",
                param:{
                    "str":"112233"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_NOTICE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_NOTICE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_SAFE_KEYBOARD:function() {
            NativeService.invoke({
                srvId:"SHOW_SAFE_KEYBOARD",
                param:{
                    "inputType":0,
                    "random":true
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_SAFE_KEYBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_SAFE_KEYBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        HIDE_SAFE_KEYBOARD:function() {
            NativeService.invoke({
                srvId:"HIDE_SAFE_KEYBOARD",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("HIDE_SAFE_KEYBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("HIDE_SAFE_KEYBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SWITCH_TO_SAFE_KEYBOARD:function() {
            NativeService.invoke({
                srvId:"SWITCH_TO_SAFE_KEYBOARD",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SWITCH_TO_SAFE_KEYBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SWITCH_TO_SAFE_KEYBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SWITCH_TO_SYSTEM_KEYBOARD:function() {
            NativeService.invoke({
                srvId:"SWITCH_TO_SYSTEM_KEYBOARD",
                param:{
                    "fieldID": "ks_login_password",
                    "fieldValue": "888888"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SWITCH_TO_SYSTEM_KEYBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SWITCH_TO_SYSTEM_KEYBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SWITCH_TO_DECIMAL_KEYBOARD:function() {
            NativeService.invoke({
                srvId:"SWITCH_TO_DECIMAL_KEYBOARD",
                param:{
                    "textFieldID" :"amt_input"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SWITCH_TO_DECIMAL_KEYBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SWITCH_TO_DECIMAL_KEYBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SWITCH_TO_PWD_NUMBER_KEYBOARD:function() {
            NativeService.invoke({
                srvId:"SWITCH_TO_PWD_NUMBER_KEYBOARD",
                param:{
                    "textFieldID" :"amt_input"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SWITCH_TO_PWD_NUMBER_KEYBOARD:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SWITCH_TO_PWD_NUMBER_KEYBOARD:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_INTELL_VOICE:function() {
            NativeService.invoke({
                srvId:"SHOW_INTELL_VOICE",
                param:{
                    "actionType": "Wkqx"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_INTELL_VOICE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_INTELL_VOICE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_VOICE_TEXT:function() {
            NativeService.invoke({
                srvId:"GET_VOICE_TEXT",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_VOICE_TEXT:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_VOICE_TEXT:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        ENCRYPT_BY_3DES:function() {
            NativeService.invoke({
                srvId:"ENCRYPT_BY_3DES",
                param:{
                    "encodes":"[{ddd},{www},{yyy}]"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("ENCRYPT_BY_3DES:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("ENCRYPT_BY_3DES:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DECRYPT_BY_3DES:function() {
            NativeService.invoke({
                srvId:"DECRYPT_BY_3DES",
                param:{
                    "encodes":"[{ddd},{www},{yyy}]"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DECRYPT_BY_3DES:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DECRYPT_BY_3DES:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        ENCRYPT_BY_AES:function() {
            NativeService.invoke({
                srvId:"ENCRYPT_BY_AES",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("ENCRYPT_BY_AES:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("ENCRYPT_BY_AES:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DECRYPT_BY_AES:function() {
            NativeService.invoke({
                srvId:"DECRYPT_BY_AES",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DECRYPT_BY_AES:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DECRYPT_BY_AES:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        ENCRYPT_BY_RSA:function() {
            NativeService.invoke({
                srvId:"ENCRYPT_BY_RSA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("ENCRYPT_BY_RSA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("ENCRYPT_BY_RSA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DECRYPT_BY_RSA:function() {
            NativeService.invoke({
                srvId:"DECRYPT_BY_RSA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DECRYPT_BY_RSA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DECRYPT_BY_RSA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        BAR_CODE_SCAN:function() {
            NativeService.invoke({
                srvId:"BAR_CODE_SCAN",
                param:{
                    "title":"条码扫描",
                    "des":"请扫描条码"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("BAR_CODE_SCAN:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("BAR_CODE_SCAN:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GENERATE_QR_CODE:function() {
            NativeService.invoke({
                srvId:"GENERATE_QR_CODE",
                param:{
                    "sourceString":"http://www.pingan.com/kf?id=12",
                    "isSave":true
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GENERATE_QR_CODE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GENERATE_QR_CODE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GENERATE_QR_CODE_FOR_MGM:function() {
            NativeService.invoke({
                srvId:"GENERATE_QR_CODE_FOR_MGM",
                param:{
                    "shareUrl":"http://www.pingan.com//??"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GENERATE_QR_CODE_FOR_MGM:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GENERATE_QR_CODE_FOR_MGM:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SAVE_QR_CODE:function() {
            NativeService.invoke({
                srvId:"SAVE_QR_CODE",
                param:{
                    "QRCodePaath":"../"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SAVE_QR_CODE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SAVE_QR_CODE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        // SHARE_MSG:function() {
        //     NativeService.invoke({
        //         srvId:"SHARE_MSG",
        //         param:{
        //             "shareUrl":"http://www.pingan.com//??",
        //             "shareText":"pingan",
        //             "activityName":"pingan huodong"
        //         },
        //         success: function(options) {
        //             alert("typeOf options:" + typeof options);
        //             alert("SHARE_MSG:成功回调options Println:" + "\n"+ JSON.stringify(options));
        //         },
        //         error: function(options) {
        //             alert("SHARE_MSG:失败回调options Println:" + "\n"+ JSON.stringify(options));
        //         }
        //     });
        // },

        SHARE_MSG_ANDROID:function() {
            NativeService.invoke({
                srvId:"SHARE_MSG_ANDROID",
                param:{
                    "shareUrl":"http://www.pingan.com//??",
                    "shareText":"pingan",
                    "activityName":"pingan huodong"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHARE_MSG_ANDROID:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHARE_MSG_ANDROID:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHARE_SEMAN_CODE:function() {
            NativeService.invoke({
                srvId:"SHARE_SEMAN_CODE",
                param:{
                    "msg":"53531513",
                    "url":"http://www.pingan.com//??",
                    "imgSrc":"453y6426426474"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHARE_SEMAN_CODE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHARE_SEMAN_CODE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GRAPH_PASSWORD_SHOW:function() {
            NativeService.invoke({
                srvId:"GRAPH_PASSWORD_SHOW",
                param:{
                    "title":"开通移动支付",
                    "mode":"1"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GRAPH_PASSWORD_SHOW:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GRAPH_PASSWORD_SHOW:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GRAPH_PASSWORD_CLOSE:function() {
            NativeService.invoke({
                srvId:"GRAPH_PASSWORD_CLOSE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GRAPH_PASSWORD_CLOSE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GRAPH_PASSWORD_CLOSE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GRAPH_PASSWORD_MSG:function() {
            NativeService.invoke({
                srvId:"GRAPH_PASSWORD_MSG",
                param:{
                    "msg":"成功",
                    "isDialog":false
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GRAPH_PASSWORD_MSG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GRAPH_PASSWORD_MSG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_CALENDAR_DIALOG:function() {
            NativeService.invoke({
                srvId:"SHOW_CALENDAR_DIALOG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_CALENDAR_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_CALENDAR_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_MENU_DIALOG:function() {
            NativeService.invoke({
                srvId:"SHOW_MENU_DIALOG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_MENU_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_MENU_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_MULTI_SELECT_DIALOG:function() {
            NativeService.invoke({
                srvId:"SHOW_MULTI_SELECT_DIALOG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_MULTI_SELECT_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_MULTI_SELECT_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_SPINNER_DIALOG:function() {
            NativeService.invoke({
                srvId:"SHOW_SPINNER_DIALOG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_SPINNER_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_SPINNER_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_AREA_CITY_DIALOG:function() {
            NativeService.invoke({
                srvId:"SHOW_AREA_CITY_DIALOG",
                param:{
                    "title": "选择缴费地区",
                    "province": [
                        {
                            "business_name": "",
                            "charging_units": "",
                            "check_paramter_rule": "",
                            "id_charge": "",
                            "payment_area_city": "",
                            "payment_area_province": "全国（平安保险）",
                            "payment_channel": "05",
                            "payment_method": "",
                            "payment_type": "",
                            "tips": "",
                            "trader_code": ""
                        }
                    ],
                    "displayProvince": "payment_area_province",
                    "displayCity": "payment_area_city",
                    "city": [
                        {
                            "business_name": "",
                            "charging_units": "",
                            "check_paramter_rule": "",
                            "id_charge": "",
                            "payment_area_city": "杭州",
                            "payment_area_province": "",
                            "payment_channel": "08",
                            "payment_method": "",
                            "payment_type": "",
                            "tips": "",
                            "trader_code": ""
                        }
                    ]
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_AREA_CITY_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_AREA_CITY_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_BOTTM:function() {
            NativeService.invoke({
                srvId:"SHOW_BOTTM",
                param:{
                    "flag":true
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_BOTTM:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_BOTTM:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_LOADING_DIALOG:function() {
            NativeService.invoke({
                srvId:"SHOW_LOADING_DIALOG",
                param:{
                    "message":"42351316",
                    "isCancel":"fhrjteyjt"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_LOADING_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_LOADING_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        HIDE_LOADING_DIALOG:function() {
            NativeService.invoke({
                srvId:"HIDE_LOADING_DIALOG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("HIDE_LOADING_DIALOG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("HIDE_LOADING_DIALOG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_NETWORK_INDICATOR:function() {
            NativeService.invoke({
                srvId:"SHOW_NETWORK_INDICATOR",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_NETWORK_INDICATOR:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_NETWORK_INDICATOR:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        HIDE_NETWORK_INDICATOR:function() {
            NativeService.invoke({
                srvId:"HIDE_NETWORK_INDICATOR",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("HIDE_NETWORK_INDICATOR:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("HIDE_NETWORK_INDICATOR:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SET_NAV_BUTTON:function() {
            NativeService.invoke({
                srvId:"SET_NAV_BUTTON",
                param:{
                    "title": "标题",
                    "left": "返回",
                    "right" : "取消"
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SET_NAV_BUTTON:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SET_NAV_BUTTON:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SET_NAV_BUTTON_ENABLED:function() {
            NativeService.invoke({
                srvId:"SET_NAV_BUTTON_ENABLED",
                param:{
                    "leftEnabled": true,
                    "rightEnabled": false
                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SET_NAV_BUTTON_ENABLED:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SET_NAV_BUTTON_ENABLED:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        LIGHT_PAY_PASSWORD_SHOW:function() {
            NativeService.invoke({
                srvId:"LIGHT_PAY_PASSWORD_SHOW",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("LIGHT_PAY_PASSWORD_SHOW:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("LIGHT_PAY_PASSWORD_SHOW:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        LIGHT_PAY_PASSWORD_SAVE:function() {
            NativeService.invoke({
                srvId:"LIGHT_PAY_PASSWORD_SAVE",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("LIGHT_PAY_PASSWORD_SAVE:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("LIGHT_PAY_PASSWORD_SAVE:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        LIGHT_PAY_SHOW:function() {
            NativeService.invoke({
                srvId:"LIGHT_PAY_SHOW",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("LIGHT_PAY_SHOW:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("LIGHT_PAY_SHOW:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        LIGHT_PAY_INITIALIZE_OK:function() {
            NativeService.invoke({
                srvId:"LIGHT_PAY_INITIALIZE_OK",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("LIGHT_PAY_INITIALIZE_OK:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("LIGHT_PAY_INITIALIZE_OK:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_AES_KEY:function() {
            NativeService.invoke({
                srvId:"GET_AES_KEY",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_AES_KEY:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_AES_KEY:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SAVE_LIGHT_PAY_INFO:function() {
            NativeService.invoke({
                srvId:"SAVE_LIGHT_PAY_INFO",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SAVE_LIGHT_PAY_INFO:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SAVE_LIGHT_PAY_INFO:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_LIGHT_PAY_USER_ID:function() {
            NativeService.invoke({
                srvId:"GET_LIGHT_PAY_USER_ID",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_LIGHT_PAY_USER_ID:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_LIGHT_PAY_USER_ID:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_LIGHT_PAY_COUNT_AND_DAYS:function() {
            NativeService.invoke({
                srvId:"GET_LIGHT_PAY_COUNT_AND_DAYS",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_LIGHT_PAY_COUNT_AND_DAYS:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_LIGHT_PAY_COUNT_AND_DAYS:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        LIGHT_PAY_WRITE_CARD_INFO:function() {
            NativeService.invoke({
                srvId:"LIGHT_PAY_WRITE_CARD_INFO",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("LIGHT_PAY_WRITE_CARD_INFO:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("LIGHT_PAY_WRITE_CARD_INFO:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_ACCT_LIST:function() {
            NativeService.invoke({
                srvId:"GET_ACCT_LIST",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_ACCT_LIST:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_ACCT_LIST:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SHOW_GESTURE_LOGIN_SETUP_VIEW:function() {
            NativeService.invoke({
                srvId:"SHOW_GESTURE_LOGIN_SETUP_VIEW",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SHOW_GESTURE_LOGIN_SETUP_VIEW:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SHOW_GESTURE_LOGIN_SETUP_VIEW:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SAVE_GESTURE_LOGIN_DATA:function() {
            NativeService.invoke({
                srvId:"SAVE_GESTURE_LOGIN_DATA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SAVE_GESTURE_LOGIN_DATA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SAVE_GESTURE_LOGIN_DATA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_GESTURE_LOGIN_DATA:function() {
            NativeService.invoke({
                srvId:"GET_GESTURE_LOGIN_DATA",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_GESTURE_LOGIN_DATA:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_GESTURE_LOGIN_DATA:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SAVE_GESTURE_LOGIN_OPEN_FLAG:function() {
            NativeService.invoke({
                srvId:"SAVE_GESTURE_LOGIN_OPEN_FLAG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SAVE_GESTURE_LOGIN_OPEN_FLAG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SAVE_GESTURE_LOGIN_OPEN_FLAG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GET_GESTURE_LOGIN_OPEN_FLAG:function() {
            NativeService.invoke({
                srvId:"GET_GESTURE_LOGIN_OPEN_FLAG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GET_GESTURE_LOGIN_OPEN_FLAG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GET_GESTURE_LOGIN_OPEN_FLAG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        OPEN_GESTURE_LOGIN:function() {
            NativeService.invoke({
                srvId:"OPEN_GESTURE_LOGIN",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("OPEN_GESTURE_LOGIN:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("OPEN_GESTURE_LOGIN:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        CLEAR_GESTURE_PWD_SETTING:function() {
            NativeService.invoke({
                srvId:"CLEAR_GESTURE_PWD_SETTING",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("CLEAR_GESTURE_PWD_SETTING:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("CLEAR_GESTURE_PWD_SETTING:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DELETE_APNS_NOTIFICATION:function() {
            NativeService.invoke({
                srvId:"DELETE_APNS_NOTIFICATION",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DELETE_APNS_NOTIFICATION:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DELETE_APNS_NOTIFICATION:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        DELETE_ALL_APNS_NOTIFICATION:function() {
            NativeService.invoke({
                srvId:"DELETE_ALL_APNS_NOTIFICATION",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("DELETE_ALL_APNS_NOTIFICATION:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("DELETE_ALL_APNS_NOTIFICATION:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        GIVE_MARK_FOR_APP:function() {
            NativeService.invoke({
                srvId:"GIVE_MARK_FOR_APP",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("GIVE_MARK_FOR_APP:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("GIVE_MARK_FOR_APP:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        UPDATE_APPLICATION:function() {
            NativeService.invoke({
                srvId:"UPDATE_APPLICATION",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("UPDATE_APPLICATION:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("UPDATE_APPLICATION:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        OPEN_SERVICE_CENTER:function() {
            NativeService.invoke({
                srvId:"OPEN_SERVICE_CENTER",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("OPEN_SERVICE_CENTER:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("OPEN_SERVICE_CENTER:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        MODIFY_HINT_MSG:function() {
            NativeService.invoke({
                srvId:"MODIFY_HINT_MSG",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("MODIFY_HINT_MSG:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("MODIFY_HINT_MSG:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SET_COMMUNITY_LOGIN_URL:function() {
            NativeService.invoke({
                srvId:"SET_COMMUNITY_LOGIN_URL",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SET_COMMUNITY_LOGIN_URL:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SET_COMMUNITY_LOGIN_URL:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },

        SET_MENUS:function() {
            NativeService.invoke({
                srvId:"SET_MENUS",
                param:{

                },
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SET_MENUS:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SET_MENUS:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },


        SHARE_MSG:function() {
            NativeService.invoke({
                srvId:"SHARE_MSG",
                success: function(options) {
                    alert("typeOf options:" + typeof options);
                    alert("SET_MENUS:成功回调options Println:" + "\n"+ JSON.stringify(options));
                },
                error: function(options) {
                    alert("SET_MENUS:失败回调options Println:" + "\n"+ JSON.stringify(options));
                }
            });
        },



        render: function(data) {
            var html = this.template(data);
            this.$el.html(html);
        }
    });
    return LoginView2;
});