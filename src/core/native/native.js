/**
 * Native 与 JS 之间的 Bridge 层实现
 */
(function(win) {
    var noop = function() {};
    var ua = win.navigator.userAgent;
    var slice = Array.prototype.slice;
    var isIOS = /iphone|ipad|ipod/i.test(ua);
    var isIPad = /ipad/i.test(ua);
    var isAndroid = /android/i.test(ua);
    var idCount = 1;

    var Native = {
        _callbackList: {},
        _call: function(methodName) {
            var self = this;
            var args = slice.call(arguments, 1);
            var ecb = args.pop();
            var scb = args.pop();
            var methodArgs = args.slice();
            var level1CallbackIds = this._getLevel1CallbackId(scb, ecb);
            var jsonStr = '';
            var options = methodArgs[0] || {};

            options = recurseOptions(options, function(context, key, val) {
                // callback 函数需要常驻的情况给 method name 添加了下划线，
                // 意在表明：调用 Native._callback(cbId) 后不清除 callbackList 的记录，因为清除掉就不能多次调用了
                // 所以这里针对 _ 开头的方法会特殊处理 cbId （同样也是 _ 化标记处理）
                // 这里为了解耦 JS 端和 Native 端的耦合，自动处理回普通 method name
                // 也即：所有带 _ 开头的方法在 cdId _ 标记后都会被去掉 开头的 _，恢复正常的名字
                // 例：options: {action1: function(){console.log(1)}, action2: function(){console.log(2)}}
                var cbId = self._getLevel2CallbackId(val, key);
                var reg = /^_/;

                if (reg.test(key)) {
                    delete context[key];
                    key = key.replace(reg, '');
                }

                context[key] = cbId;
            });

            args.push(level1CallbackIds[0]);
            args.push(level1CallbackIds[1]);

            jsonStr = JSON.stringify({
                method: methodName,
                args: args
            });

            if (isIOS) {
                // console.dir('pabankcallnative://' + methodName + '/' + JSON.stringify(level1CallbackIds.concat(methodArgs)) + '/' + (idCount - 1));
                // win.location.href = 'pabankcallnative://' + methodName + '/' + encodeURIComponent(JSON.stringify(level1CallbackIds.concat(methodArgs))) + '/' + (idCount - 1);
                document.querySelector('#bridge-iframe').contentWindow.location.hash = '#pabankcallnative/' + methodName + '/' + encodeURIComponent(JSON.stringify(level1CallbackIds.concat(methodArgs))) + '/' + (idCount - 1);
            } else if (isAndroid) {
                var oldScb = scb;
                var oldEcb = ecb;

                scb = function(data) {
                    oldScb.call(self, parseData(data));
                    self._clearCallbackList(level1CallbackIds[0]);
                };
                ecb = function(data) {
                    oldEcb.call(self, parseData(data));
                    self._clearCallbackList(level1CallbackIds[1]);
                };

                try {
                    // console.log('Android: ', [scb, ecb, 'NativePlugin', methodName, methodArgs])
                    cordova.exec(scb, ecb, 'NewNativePlugin', methodName, methodArgs);
                } catch (err) {}
            }
        },
        _callback: function(cbId, data) {
            var cb = this._callbackList[cbId];

            cb && cb.call(this, parseData(data));

            this._clearCallbackList(cbId);
        },
        _getLevel1CallbackId: function(scb, ecb) {
            var id = idCount++;
            var ret = ['success:' + id, 'error:' + id];

            this._callbackList[ret[0]] = scb;
            this._callbackList[ret[1]] = ecb;

            return ret;
        },
        _getLevel2CallbackId: function(func, key) {
            var id = idCount++;
            var ret = (/^_/.test(key) ? '_' : '') + 'callback:' + id;

            this._callbackList[ret] = func;

            return ret;
        },
        _clearCallbackList: function(cbId) {
            var cbInfo = cbId.split(':');
            var cbPairId = '';

            // success 和 error 任何一个回调函数被调用后
            // 清除队列中当前回调函数和与其成对的另外一个回调函数
            if (!/^_/.test(cbId)) {
                delete this._callbackList[cbId];
            }
            if (/^(success|error)/.test(cbInfo[0])) {
                cbPairId = (cbInfo[0] === 'success' ? 'error' : 'success') + ':' + cbInfo[1]
                delete this._callbackList[cbPairId];
            }
        },
        isIOS: function() {
            return isIOS;
        },
        isIPad: function() {
            return isIPad;
        },
        isAndroid: function() {
            return isAndroid;
        }
    };

    return win.Native = Native;

    function recurseOptions(opt, iterator) {
        opt = opt || {};

        for (var key in opt) {
            if (opt.hasOwnProperty(key) && (isType('Array', opt[key]) || isType('Object', opt[key]))) {
                recurseOptions(opt[key], iterator);
            } else if (isType('Function', opt[key])) {
                iterator(opt, key, opt[key]);
            }
        }

        return opt;
    }

    function isType(type, obj) {
        return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }

    function parseData(data) {
        try {
            data = JSON.parse(data);
        } catch (e) {}

        return data;
    }
})(this);
