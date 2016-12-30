/**
 * 格式处理服务
 * （1）JS对象类型判断
 * （2）通用文本字符串格式处理
 * （3）邮箱、手机号、身份证、银行卡号、金额等格式处理
 */
define(function() {
    var toString = Object.prototype.toString;
    var GENERAL_REG = {
        regSpace: /^\s+$/,
        regPwd: /^\d{6}$/,
        regAmount: /^(?:([1-9]\d+)|[0-9])(?:\.(\d[0-9]|[0-9]))?$/,
        regPhone: /^((\(\d{2,3}\))|(\d{3}\-))?1\d{1}\d{9}$/,
        regTel: /^((\(\d{2,3}\))|(\d{3}\-))?1\d{1}\d{9}|\d{10}|\d{11}|\d{12}$/,
        regEmail: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
        regSpecialCharset: /^(\w|[\u4e00-\u9fa5])+$/
    };
    var regFactory = function(reg, arg) {
        if (!GENERAL_REG[reg].test(arg)) return false;
        return true;
    };

    var FormatService = {
        /** JS 对象类型判断 **/
        isFunction: function(object) {
            return toString.call(object) === "[object Function]";
        },
        isArray: function(object) {
            return toString.call(object) === "[object Array]";
        },
        isObject: function(object) {
            return toString.call(object) === "[object Object]";
        },
        isString: function(object) {
            return toString.call(object) === "[object String]";
        },
        /**
         * 手机号掩码处理
         * @param {Object} mobilePhone : 完整手机号
         * @return 掩码手机号
         * @例：maskDealMobileNumber("13410979722"); //"134****722"
         */
        maskDealMobileNumber: function(mobileNumber) {
            if (mobileNumber) {
                var numLength = mobileNumber.length;
                if (numLength < 6) {
                    return mobileNumber;
                }
                return mobileNumber.substring(0, 3) + "****" + mobileNumber.substring(numLength - 3, numLength);
            } else {
                return mobileNumber;
            }
        },

        /**
         * [根据手机网银规范去除金额数字千分位], 规则：
         * 1.将带有逗号格式的金额，装换成常规数字
         * 2.有千分位金额数字会去除千分位
         *
         * @param {String | Number} moneyNum : 有千分位的金额数字或金额数字字符串
         * @return {String} : 去除千分位后的金额数字
         * @例: removeMoneyNumberComma("123,456.1278");//"123456.13"
         *
         * 注意：
         * 1.这里利用了JS的类型转换特性，永远不会报错
         * 2.isNaN==true默认给值0
         */
        removeMoneyNumberComma: function(moneyNum) {
            moneyNum = (moneyNum + '').replace(/,/g, "");
            moneyNum = isNaN((1 * moneyNum).toFixed(2)) ? (Number(0).toFixed(2)) : (1 * moneyNum).toFixed(2);
            return (moneyNum + '').replace(/\.00/g, '');

        },

        /**
         * [根据手机网银规范格式化金额数字]， 规则：
         * 1.金额数字小数后小于两位，补零到小数位两位
         * 2.金额数字小数后两位，不处理
         * 3.金额数字小数大于两位，四舍五入至小数位两位
         *
         * @param {String} moneyNum : 金额数字
         * @return {String} : 规范格式的金额数字
         * @例： formatMoneyNumber("7801224.4");//"7,801,224.40"
         *
         * 注意：
         * 1.这里利用了JS的类型转换特性，永远不会报错
         * 2.isNaN==true默认给值0.00
         */
        formatMoneyNumber: function(moneyNum) {
            var result = isNaN((1 * moneyNum).toFixed(2)) ? (Number(0).toFixed(2)) : (1 * moneyNum).toFixed(2);
            return /\./.test(result) ? result.replace(/(\d{1,3})(?=(\d{3})+\.)/g, "$1,") : result.replace(/(\d{1,3})(?=(\d{3})+\b)/g, "$1,");
        },
        /**
         * [根据手机网银规范格式化利率数字],  规则：
         * 1.去除利率数字小数后的无用零
         * 2.小数后位数小于等于4位，不处理
         * 3.小数后位数大于4位，四舍五入至小数位4位
         *
         * @param {String | Number} interestRate： 格式化前的利率数字或利率数字字符串
         * @return {Number} : 格式化后的利率数字
         * @例： formatInterestRate(0.45678);//0.4568
         *
         * 注意：
         * 1.这里利用了JS的类型转换特性，永远不会报错
         * 2.isNaN==true默认给值1
         */
        formatInterestRate: function(interestRate) {
            interestRate = isNaN((1 * interestRate).toFixed(4)) ? (Number(1).toFixed(4)) : (1 * interestRate).toFixed(4);
            return 1 * (('' + interestRate).replace(/0+$/, ""));
        },
        /**
         * @description : 掩码处理完整卡号
         * @param {String}  cardNum : 银行卡号
         * @return {String} : 掩码卡号
         * @例： mashDealCardNum("6225380010777409");//6225****7409
         */
        mashDealCardNum: function(cardNum) {
            try {
                var numLength = cardNum.length;
                if (numLength < 8) {
                    return cardNum;
                }
                return cardNum.substring(0, 4) + "****" + cardNum.substring(numLength - 4, numLength);
            } catch (err) {
                return cardNum;
            }
        },
        /**
         * @description : 掩码处理完整的购证卡号
         * @param {String}  buyCardNum : 购证卡号
         * @return {String} : 掩码购证卡号
         * @例： maskDealBuyCardNum"0838011727");//083****727
         */
        maskDealBuyCardNum: function(buyCardNum) {
            try {
                var numLength = buyCardNum.length;
                if (numLength < 6) {
                    return buyCardNum;
                }
                return buyCardNum.substring(0, 3) + "****" + buyCardNum.substring(numLength - 3, numLength);
            } catch (err) {
                return buyCardNum;
            }
        },
        /**
         * @description ：账户别名处理
         * @param {String} alias : 账户别名
         * @return {String} ：账户别名简化处理
         * @例：
         *  getSimplifiedAlias("生活消费类型卡");//"生活消.."
         *  getSimplifiedAlias();//"---"
         */
        getSimplifiedAlias: function(alias) {
            var aliasStr = "";
            if (alias == null || "---" === alias || "" === alias) {
                aliasStr = "---";
            } else {
                aliasStr = alias;
            }
            if (aliasStr.length > 5) {
                aliasStr = alias.substring(0, 3) + "..";
            }

            return aliasStr;
        },
        /**
         * @description 接受没有掩码的账户别名 和 没有掩码的银行账号，并将其拼凑成一个字符串
         * @param  {string}  alias : 没有掩码的账户别名
         * @param  {string}  accNum : 没有掩码的银行账号
         * @return {String}:  账户别名、银行账号拼凑成的字符串
         * @例： FormatService.joinAliasAndAccNum( "生活消费类型卡", "6225380010777409" ); //"生活消..： 6225****7409"
         */
        joinAliasAndAccNum: function(alias, accNum) {
            if (accNum != null) {
                var aliasStr = "未命名";
                var accNumStr = accNum;
                if (alias != null) {
                    aliasStr = alias.toString();
                }
                aliasStr = this.getSimplifiedAlias(aliasStr);

                accNumStr = aliasStr + "： " + this.mashDealCardNum(accNumStr);
                return accNumStr;
            }
        },
        /**
         * @description 接受没有掩码的银行账号、没有掩码的账户别名和开户所在地，并将其拼凑成一个字符串
         * @param  {string}  alias : 没有掩码的账户别名
         * @param  {string}  accNum : 没有掩码的银行账号
         * @param  {string}  position ： 开户所在地
         * @return {String}:  银行账号、账户别名、开户所在地 拼凑成的字符串
         * @例：joinAccNumAliasPosition("6225380010777409", "生活消费类型卡", "深圳" ); //"6225****7409[生活消..]|深圳"
         */
        joinAccNumAliasPosition: function(accNum, alias, position) {
            if (accNum != null) {
                var accNumStr = accNum;
                var aliasStr = (alias != null) ? alias.toString() : "未命名";
                position = position || "";
                aliasStr = this.getSimplifiedAlias(aliasStr);
                accNumStr = this.mashDealCardNum(accNumStr) + "[" + aliasStr + "]";
                if (position != "") {
                    accNumStr += "|" + position;
                }
                accNumStr = accNumStr.replace(/\[.+\]/, function(t) {
                    if (t.length <= 5) {
                        return t;
                    } else {
                        return '[' + t.substr(1, 3) + '..]';
                    }
                });
                return accNumStr;
            }
            return "";
        },

        /**
         * 格式化数字成中文大写数字
         * @param number {Number} 要格式化的数值，不支持小数的科学数字
         */
        arabicToChinese: function(number) {
            var chineseNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
            var chineseUnit = ["", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟"];

            var a = /^\s*$/.test(number), //空字符
                b = isNaN(Number(number)), //非数字
                c = /e/.test(Number(number) + ""); //科学数字
            if (a || b || c) {
                return "";
            }

            number = parseInt(Number(number)).toString();
            if (number.length > 15) return "";
            if (number == "0") return chineseNum[0];

            var result = "";
            for (var i = 0, len = number.length; i < len; i++) {
                result += chineseNum[number.charAt(i)] + chineseUnit[len - i - 1];
            }

            result = result
                .replace(/(?:零[拾佰仟])+/g, "零")
                .replace(/亿零*万/, "亿")
                .replace(/零+([万亿])/g, "$1零")
                .replace(/零+/g, "零")
                .replace(/^(.+?)零*$/, "$1");

            return result;
        },

        /**
         * 金额数字转中文大写，支持到分
         */
        convertToCHNumber: function(number) {
            if (!number) {
                return "";
            }
            number = number.toString()
                .trim()
                .replace(/^[-+]/, "");
            if (!number || isNaN(number)) return "";

            number = "0" + number;
            number = number.indexOf(".") < 0 ? number + ".00" : number + "00";
            number = number.replace(/^(?:0(?!\.))*(\d+\.\d\d)\d*$/, "$1")
                .replace(".", "")
                .replace(/0*(\d+)$/, "$1");

            if (!/^\d+$/.test(number) || number.length > 17) return "";
            if (/^0+$/.test(number)) return "零元";

            var chineseNum = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖", "拾"];
            var chineseUnit = ["分", "角", "元", "拾", "佰", "仟", "万", "拾", "佰", "仟", "亿", "拾", "佰", "仟", "万", "拾", "佰", "仟"];

            var result = "";
            for (var i = 0; i < number.length; i++) {
                result += chineseNum[number.charAt(i)] + chineseUnit[number.length - i - 1];
            }

            result = result
                .replace(/(?:零[分角拾佰仟])+/g, "零")
                .replace(/零+([元万亿])/g, "$1")
                .replace(/亿零*万/, "亿")
                .replace(/([万亿])零+元/, "$1元")
                .replace(/零+/g, "零")
                .replace(/零*$/, "")
                .replace(/^元零+/, "")
                .replace(/元$/, "元整");

            return result;
        },
        /**
         * 邮箱验证
         * @param emailCode
         * @returns {*}
         */
        emailVerify: function(emailCode) {
            return regFactory("regEmail", emailCode);
        },
        /**
         * 手机验证
         * @param numberCode
         * @returns {*}
         */
        phoneVerify: function(numberCode) {
            return regFactory("regPhone", numberCode);
        },
        /**
         * 固话验证和手机验证
         * @param numberCode
         * @returns {*}
         */
        telVerify: function(numberCode) {
            return regFactory("regTel", numberCode);
        },
        /**
         * 金额验证
         * @param amountCode
         * @returns {*}
         */
        amountVerify: function(amountCode) {
            return regFactory("regAmount", amountCode);
        },
        /**
         * 空格验证
         * @param inputCode
         * @returns {*}
         */
        spaceVerify: function(inputCode) {
            return regFactory("regSpace", inputCode);
        },
        /**
         * 6位交易密码验证
         * @param pwdCode
         * @returns {*}
         */
        pwdVerify: function(pwdCode) {
            return regFactory("regPwd", pwdCode);
        },
        /**
         * 判断是否包括字母数字与汉字之外的字符
         * @param charsetCode
         * @returns {*}
         */
        specialCharsetVerify: function(charsetCode){
            return regFactory("regSpecialCharset", charsetCode);
        }
    };

    return FormatService;
});
