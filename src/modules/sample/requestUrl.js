/**
 *  系统业务接口模块, 配置分成如下四类. 可根据实际业务场景增减
 * （1）个人网银系统
 * （2）CMS文件系统
 * （3）域名不同、查询路径相同的业务系统。 如信用卡系统、一账通系统等
 * （4）域名不同、查询路径不同的业务系统。 如第三方页面系统等
 *
 *  @significance :
 *      (1) UKEY需要保证全局唯一(该配置文件)
 *      (2) UKEY值与挡板数据文件名称必须一致(强制)
 */
define('modules/sample/requestUrl', function () {
    var BIZ_INTERFACE = {
        //个人网银系统
        "CORE_BANK_INTERFACE": {
            "DESCRIPTION": "个人网银系统",
            "BIZ_INTERFACE": [
                {"DESC": "接口业务功能描述", "UKEY": "toSomethind1", "PATH": "/toaMobile/iphone/toSomethind1.do"},
                {"DESC": "接口业务功能描述", "UKEY": "toSomethind2", "PATH": "/toaMobile/iphone/toSomethind2.do"}
            ]
        },
        //CMS文件系统
        "CMS_FILE_INTERFACE": {
            "DESCRIPTION": "CMS文件系统",
            "FILE_INTERFACE": [{
                "DESC": "刮刮卡规则",
                "UKEY": "guaguaka_activity_rule",
                "MOCK_FILE":"guaguaka_activity_rule.js",
                "PATH": {
                    "PRD": "/smartphone/config/PAEBank_2/file/guaguaka_activity_rule.js",
                    "STG": "/smartphone/demo/PAEBank_2/file/guaguaka_activity_rule.js"
                }
            }, {
                "DESC": "平安盈快速转出服务协议",
                "UKEY": "agreement_pinganying_nanfang_service",
                "MOCK_FILE":"agreement_pinganying_nanfang_service.html",
                "PATH": {
                    "PRD": "/smartphone/config/PAEBank_2/file/agreement_pinganying_nanfang_service.html",
                    "STG": "/smartphone/demo/PAEBank_2/file/agreement_pinganying_nanfang_service.html"
                }
            }]
        },
        //域名不同、查询路径相同的业务系统。 如信用卡系统、一账通系统等
        "DOMAIN_PAIRS_SYSTEM": {
            "DESCRIPTION": "域名不同、查询路径相同的业务系统。 如信用卡系统、一账通系统等",
            "BIZ_SYSTEM": [
                {
                    "DESC": "信用卡系统",
                    "DOMAINS": {
                        "PRD": "https://creditcard.pingan.com.cn",
                        "STG": "https://ebank-stg-shdmz.pingan.com.cn"
                    },
                    "BIZ_INTERFACE": [
                        {
                            "DESC": "获取信用卡登陆信息",
                            "UKEY": "getSetAccountControllerRest",
                            "PATH": "/phone/getSetAccountControllerRest.do"
                        },
                        {
                            "DESC": "获取用户卡列表",
                            "UKEY": "listAccountforCardInfo",
                            "MOCK_FILE": "listAccountforCardInfo.json",
                            "PATH": "/phone/listAccountforCardInfo.do"
                        }
                    ]
                },
                {
                    "DESC": "一账通系统",
                    "DOMAINS": {
                        "PRD": "https://www.pingan.com.cn",
                        "STG": "https://dmzstg4.pingan.com.cn"
                    },
                    "BIZ_INTERFACE": [
                        {
                            "DESC": "注册开通网银第一步",
                            "UKEY": "bankNewRegisterStepOneJson",
                            "PATH": "/pinganone/pa/bankNewRegisterStepOneJson.do"
                        },
                        {
                            "DESC": "注册开通网银第二步",
                            "UKEY": "bankNewRegisterStepTwoJson",
                            "MOCK_FILE": "bankNewRegisterStepTwoJson.json",
                            "PATH": "/pinganone/pa/bankNewRegisterStepTwoJson.do"
                        }
                    ]
                }
            ]
        },
        //域名不同、查询路径相同的业务系统。 如信用卡系统、一账通系统等
        "GENERAL_PAIRS_SYSTEM": {
            "DESCRIPTION": "域名不同、查询路径不同的业务系统。 如第三方业务系统等",
            "BIZ_INTERFACE": [
                {
                    "DESC": "MGM活动",
                    "UKEY": "wap_mgm",
                    "MOCK_FILE":"wap_mgm_index.html",
                    "PATH": {
                        "PRD": "https://bank.pingan.com.cn/ibp/WAPEBank/h5/www/index.html",
                        "STG": "http://ibp-stg4.pingan.com.cn:8080/ibp/WAPEBank/h5/www/index.html"
                    }
                },
                {
                    "DESC": "精准营销图片",
                    "UKEY": "accurateMarketing",
                    "MOCK_FILE":"monkey.gif",
                    "PATH": {
                        "PRD": "https://ibank.pingan.com.cn/ibank/smartphone/config/PAEBank_2/file/img/monkey.gif",
                        "STG": "https://ibank.pingan.com.cn/ibank/smartphone/demo/PAEBank_2/file/img/monkey.gif"
                    }
                }
            ]
        }
    };

    return BIZ_INTERFACE;
});
