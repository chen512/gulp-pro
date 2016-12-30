/**
 * 业务模块路由配置
 */
define('modules/sample/routes', function () {
    /**
     * 预定义参数规范说明
     * (1)银行系统用户类型
     * 纯信用卡用户 : 1
     * 普通网银用户 : 2
     * 高级网银用户［安全工具：UKEY用户］: 3
     * 高级网银用户［安全工具：OTP用户］ : 4
     * 纯财富E用户 : 5
     * 财富E+信用卡用户: 5
     *
     * (2)登录级别AccessLevel
     *  第一级别: 1  //包括密码登录
     *  第二级别: 2   //包括手势密码登录
     *
     * (3)配置参数说明
     *  ROUTE_CONFIG.DEFAULT_ENTRANCE  模块默认入口.
     *  ROUTE_CONFIG.ROUTES  模块路由配置.
     *  ROUTE_CONFIG.ROUTES.<EL>[name]  路由名称.[必传]
     *  ROUTE_CONFIG.ROUTES.<EL>[path]  路由匹配路径. [必传]
     *  ROUTE_CONFIG.ROUTES.<EL>[controller]  路由匹配Controller. [必传]
     *  ROUTE_CONFIG.ROUTES.<EL>[authentication]  路由登录权限配置 [可选] 默认免登
     *  ROUTE_CONFIG.ROUTES.<EL>[authentication][minAccessLevel]  最小登录级别 [可选] 默认第一级别
     *  ROUTE_CONFIG.ROUTES.<EL>[authentication][privilegedUserGroup]  授权用户组 [可选]默认所有用户类型
     *
     *  注: 详细说明参考开发知道说明. 案例参考模块"sample"
     */

    var ROUTE_CONFIG = {
        //默认页面入口路径,可自定义配置
        DEFAULT_ENTRANCE: "index",
        //页面Path映射
        ROUTES: [
            //首页
            {
                name: 'index',
                path: 'index',
                controller: 'modules/sample/controller/m_index.ctl'
            },
            //表单
            {
                name: "formStep1",
                path: "formStep1(/:gg)",
                controller: 'modules/sample/controller/form/m_formStep1.ctl',
                authentication: {
                    minAccessLevel: 1,
                    privilegedUserGroup: [4,5]
                }
            },
            {
                name: "formStep2",
                path: "formStep2",
                controller: 'modules/sample/controller/form/m_formStep2.ctl',
                authentication: {
                    minAccessLevel: 1,
                    privilegedUserGroup: [4,5]
                }
            },
            {
                name: "formResult",
                path: "formResult",
                controller: 'modules/sample/controller/form/m_formResult.ctl',
                cacheResolvedDeps: ["formStep1", "formStep2"],
                backResolvedDeps: ["formStep1", "formStep2"],
                authentication: {
                    minAccessLevel: 1,
                    privilegedUserGroup: [4,5]
                }
            },
            //产品说明
            {
                name: "productList",
                path: "productList",
                controller: 'modules/sample/controller/products/m_productList.ctl',
                authentication: {
                    minAccessLevel: 1,
                    privilegedUserGroup: [4,5]
                }
            },
            {
                name: "productDetail",
                path: "productDetail(/:productId)",
                controller: 'modules/sample/controller/products/m_productDetail.ctl',
                authentication: {
                    minAccessLevel: 1,
                    privilegedUserGroup: [4,5]
                }
            },
            //Native API 测试
            {
                name: 'nativeTest',
                path: 'nativeTest',
                controller: 'modules/sample/controller/nativeTest/m_nativeTest.ctl'
            }
        ]
    };

    return ROUTE_CONFIG;
});