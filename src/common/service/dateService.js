/*
 * 日期类操作服务
 *
 */
define(['common/service/bankRequestService'], function(BankRequestService) {

    /*
     * 将字符型数据转换成Date类型
     * 支持的格式为："2012.3.4 23:22:33"、 "2012.3.4"、 new Date()
     */
    function parseToDate(date) {
        if (typeof date === "string") {
            if (date.length == 8) {
                var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)];
            } else if (date.length == 14) {
                var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2), date.substr(8, 2), date.substr(10, 2), date.substr(12, 2)];
            } else {
                var arr = date.split(/[^0-9]+/);
            }
            date = new Date(arr[0], arr[1] - 1, arr[2], arr[3] || 0, arr[4] || 0, arr[5] || 0);
        }
        return date;
    }


    /**
     * 格式化日
     * @param {String| Date} date : 原始日期信息
     * @param {String} format : 格式化样式。 可选，默认为"yyyy-MM-dd hh:mm:ss"
     * @return 格式化结果
     * @例: formatDate("20130112"), //"2013-01-12 00:00:00"
     *     formatDate("20130112", "yyyy*MM*dd hh:mm:ss"), //"2013*01*12 00:00:00"
     */
    
     function formatDate(date, format) {
        if (!date || date == "0") {
            return "";
        }
        if (!format) {
            format = "yyyy-MM-dd hh:mm:ss";
        }
        if (typeof date == "string") {
            if (date.length == 8) {
                var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2)];
            } else if (date.length == 14) {
                var arr = [date.substr(0, 4), date.substr(4, 2), date.substr(6, 2), date.substr(8, 2), date.substr(10, 2), date.substr(12, 2)];
            } else {
                var arr = date.split(/[^0-9]+/);
            }

            format = format.replace(/([a-z])\1+/ig, function(all, $1) {
                var result = {
                    y: ~~arr[0],
                    M: ~~arr[1],
                    d: ~~arr[2],
                    h: ~~arr[3],
                    m: ~~arr[4],
                    s: ~~arr[5]
                }[$1];
                if (result != undefined && result < 10) {
                    result = "0" + result;
                }
                return result || "";
            });
            return format;
        }
        format = format.replace(/([a-z])\1+/ig, function(all) {
            var first = all.charAt(0);
            if ("y M d h m s".indexOf(first) >= 0) {
                if (first == "y") {
                    return all.length > 2 ? date.getFullYear() : (date.getFullYear() + "").substr(2);
                }
                var result = {
                    M: date.getMonth() + 1,
                    d: date.getDate(),
                    h: date.getHours(),
                    m: date.getMinutes(),
                    s: date.getSeconds()
                }[first];
                result != undefined && result < 10 && (result = "0" + result);
                return result;
            } else {
                return all;
            }
        });
        return format;
    }


    /*
     * 比较两个时间的大小
     * @param:
     * d1&d2: 支持的格式为 "2012.3.4 23:22:33"、 "2012.3.4"、 new Date()
     * @return:
     * d1>d2 → 1,  d1==d2 → 0, d1<d2 → -1
     */
    function compare(d1, d2) {
        if (!d1 || !d2) {
            return "";
        }
        d1 = parseToDate(d1);
        d2 = parseToDate(d2);
        var result = d1.getTime() - d2.getTime();
        return result === 0 ? 0 : result > 0 ? 1 : -1
    }

    /*
     * 日期先后推算
     * @params:
     *  now 当前时间， 支持的格式有 "2012.3.4 23:22:33" "2012.3.4" new Date()
     *  num 推算的值
     *  unit 计算的单位
     * @return:
     * 延后的Date的类型数据
     */
    function addDate(now, num, unit) {
        if (!now || num == undefined || !unit) {
            return "";
        }
        now = parseToDate(now);
        var unit = {
            y: 1000 * 60 * 60 * 24 * 365,
            m: 1000 * 60 * 60 * 24 * 30,
            d: 1000 * 60 * 60 * 24
        }[unit];
        return new Date(now.getTime() + num * unit);
    }

    /*
     * 计算两个时间之间的间隔
     * @params:
     *  start/end 开始/结束时间 支持的数据格式为 "2012.3.4 23:22:33" "2012.3.4" new Date()
     * @return: 两个日期之间相差的天数
     */
    function calculateInterval(start, end) {
        if (!start || !end) {
            return false;
        }
        start = parseToDate(start);
        end = parseToDate(end);
        return parseInt(Math.abs(end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    }


    /*
     * 获取系统时间
     * @param:
     *  success 请求成功的回调
     *  format 日期的格式
     */
    function getSysTime(success, format) {
        if (typeof success !== "function") {
            return;
        }

        BankRequestService.call('qryEbankSysTime', {
            success: function(time){
                var time = parseInt(time.responseBody.sysTime);
                format && (time = formatDate(new Date(time), format));
                success(time);
            },
            error: function(){
                var t = new Date();
                format ? success(formatDate(t, format)) : success(t.getTime());
            }
        });
    }

    /*
     * 倒计时，传入特定的特定的时间和HTML元素，显示倒计时
     * @params:
     *  sec {Number} 剩余时间，单位为秒
     *  elem {Object} 各时间值的占位元素
     *     {
     *         sec: $("sec")[0],    //秒占位
     *         min: $("min")[0],    //分占位
     *         hour: $("hour")[0]   //时占位
     *     }
     */
    function countDown(sec, elems) {
        var f = {
            timer: null,
            sec: parseInt(sec) || 0,
            zero: function(n) {
                var n = parseInt(n, 10);
                if (n > 0) {
                    if (n <= 9) {
                        n = "0" + n;
                    }
                    return String(n);
                } else {
                    return "00";
                }
            },
            dv: function() {
                f.sec--;

                var pms = {
                    day: "00",
                    sec: "00",
                    min: "00",
                    hour: "00"
                };
                var remain = f.sec;

                if (remain <= 0) {
                    clearTimeout(f.timer);
                    delete f;
                    return pms;
                }

                if (remain > 0) {
                    var day = f.zero(Math.floor(remain / (24 * 3600)));
                    var hour = f.zero(Math.floor((remain - day * 24 * 3600) / 3600));
                    var min = f.zero(Math.floor((remain - day * 24 * 3600 - hour * 3600) / 60));
                    var sec = f.zero(Math.floor(remain - day * 24 * 3600 - hour * 3600 - min * 60));
                    pms = {
                        day: day,
                        hour: hour,
                        min: min,
                        sec: sec
                    }

                }

                return pms;
            },
            ui: function() {
                var pms = f.dv();
                if (elems.sec) elems.sec.innerHTML = pms.sec;
                if (elems.min) elems.min.innerHTML = pms.min;
                if (elems.hour) elems.hour.innerHTML = pms.hour;
                if (elems.day) elems.day.innerHTML = pms.day;
                f.timer = setTimeout(f.ui, 1000);
            }
        };
        f.ui();
    }

    return {
        formatDate: formatDate,
        compare: compare,
        addDate: addDate,
        calculateInterval: calculateInterval,
        countDown: countDown,
        getSysTime: getSysTime
    }
});
