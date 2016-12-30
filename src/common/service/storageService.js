/**
 * 系统缓存数据存储管理服务
 *
 */
define(function () {
    var storage = sessionStorage;
    //数据命名空间,存储数据Entry {key1:value1, key2:value2}
    /**
     * 获取本地数据
     * @param key
     * @private
     * @returun {Object}
     */
    var _getLocalItem = function(key){
        var value = storage.getItem(key);
        if (value) {
            value = JSON.parse(decodeURIComponent(value));
        }
        return value;
    };
    /**
     * 浏览器本地存储数据
     * @param key
     * @param value
     * @private
     */
    var _setLocalItem = function(key, value){
        if (value) {
            var value = JSON.stringify(value);
            var valTrans = encodeURIComponent(value);
            try {
                storage.setItem(key, valTrans);
            } catch (error) {
                console.error(error);
            }
        }
    };
    /**
     * 删除本地数据
     * @param key
     * @private
     */
    var _removeLocalItem = function(key){
        storage.removeItem(key);
    };

    var MODULE_SCOPE_NAME_SPACE = {};
    var GLOBAL_SHARE_DATA_TAG = "_GLOBAL_SHARE_DATA";
    if(!_getLocalItem(GLOBAL_SHARE_DATA_TAG)) _setLocalItem(GLOBAL_SHARE_DATA_TAG, {});

    /**
     *  共享数据管理服务
     *  (-)Module级别的共享数据CRUD方法:scopeSave, scopeObtain,scopeRemove, scopeClear
     *  (-)App Global级别的共享数据CRUD方法:persSave, persObtain,persRemove, persClear
     */
    var StorageService = {
        /**
         * 保存数据:Entry<String key, Object value>
         */
        _scopeSave: function (key, value) {
            if (key) {
                MODULE_SCOPE_NAME_SPACE[key] = value;
            }
        },
        /**
         * 获取数据
         */
        _scopeObtain: function (key) {
            if (key) {
                return MODULE_SCOPE_NAME_SPACE[key];
            }
        },
        /**
         * 删除特定缓存数据
         */
        _scopeRemove: function (key) {
            if (key) {
                MODULE_SCOPE_NAME_SPACE[key] = undefined;
                return true;
            }
            return false;
        },
        /**
         * 清除所有的缓存数据
         */
        _scopeClear: function () {
            MODULE_SCOPE_NAME_SPACE = {};
        },
       //持久化保存数据
        _persSave: function (key, value) {
            var globalObj = _getLocalItem(GLOBAL_SHARE_DATA_TAG);
            globalObj[key] = value;
            _setLocalItem(GLOBAL_SHARE_DATA_TAG, globalObj);
        },
        //获取支持久化保存的数据
        _persObtain: function (key) {
            var globalObj = _getLocalItem(GLOBAL_SHARE_DATA_TAG);
            return globalObj[key];
        },
        //删除持久化保存的数据
        _persRemove: function (key) {
            var globalObj = _getLocalItem(GLOBAL_SHARE_DATA_TAG);
            delete globalObj[key];
            _setLocalItem(GLOBAL_SHARE_DATA_TAG, globalObj);
        },
        //全部清除持久化保存的数据
        _persClear: function() {
            _setLocalItem(GLOBAL_SHARE_DATA_TAG, {});
        },
        /**
         * 获取共享数据
         * @param key
         * @param isGlobal  是否是获取Global级别的数据
         * @returns {*}
         */
        get: function(key, isGlobal) {
          return isGlobal ? this._persObtain(key) : this._scopeObtain(key);
        },
        /**
         * 存储共享数据
         * @param key
         * @param value
         * @param isGlobal  是否是存储Global级别的数据
         */
        set: function(key, value, isGlobal) {
          isGlobal ? this._persSave(key, value) : this._scopeSave(key, value);
        },
        /**
         * 清除共享数据元素
         * @param key
         * @param isGlobal 是否是清除Global级别的数据
         */
        remove: function(key, isGlobal) {
          isGlobal ? this._persRemove(key) : this._scopeRemove(key);
        },
        //清除所用的共享数据,包括module的共享数据和持久化(global)的共享数据
        clear: function() {
            this._scopeClear();
            this._persClear();
        },
        /**
         * 返回数据存储空间的所有数据
         */
        valueOf: function () {
            var globalData = _getLocalItem(GLOBAL_SHARE_DATA_TAG);
            var scopeData = {
                MODULE_SCOPE_DATA: MODULE_SCOPE_NAME_SPACE,
                GLOBAL_SHARE_DATA: globalData
            }
            return scopeData;
        }
    };

    return StorageService;
});
