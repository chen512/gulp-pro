环境准备 Mac 版
=================
##安装 [Node](https://nodejs.org/en/)

进入 NodeJS[官方页面](https://nodejs.org/en/)，选择对应平台的安装程序进行下载安装。

安装完后，输入 `node -v` 和 `npm -v`，这时应该能打印出 node 和 npm 各自的版本信息，如是则 node 和 npm 安装成功。

##设置 [npm](https://npmjs.org)

以下几项设置的目的在于加速 npm 的安装功能：

1. 设置 registry 地址为淘宝镜像地址：

    ```
    $ npm config set registry=http://registry.npm.taobao.org
    ```
2. 设置网络代理：

    ```
    // 此代理不知是哪位内部人士提供的，大家都在用，大家都说好
    // 如自己有更好的代理请自行修改设置
    $ npm config set proxy=http://10.17.171.11:8080
    ```
    
##安装 [gulp](http://gulpjs.com/)

gulp 是一款构建工具，可以用来组织各种工程化的任务，安装方法如下：

```
$ npm install -g gulp

// 无权限报错时请加 sudo
$ sudo npm install -g gulp
```

##安装 [yo](http://yeoman.io/)

yo 是一款脚手架工具，可以用它来简化我们日常复杂文件结构的构建，安装方法如下：

```
$ npm install -g yo

// 无权限报错时请加 sudo
$ sudo npm install -g yo
```

##clone 代码

clone 前请确保代码仓库管理员已给你开通了读写权限，clone 方法如下：

```
// 切换至你的 workspace 目录
$ cd path/to/workspace

// 克隆代码到 workspace 目录
$ svn co svn://10.6.160.170/source/PAEBank/PAEBankV3.0.0
```

##安装 node modules

整个项目是需要依赖一些第三方 node 模块才能运行起来的，所以在运行前需要先安装这些模块，安装方法如下：

**方法一：自动安装**

```
// 进入项目根目录
$ cd PAEBankV3.0.0

// 开始安装
$ npm install
```

**方法二：手动安装**（网络比较慢时使用）

[下载压缩包](http://pan.baidu.com/s/1mhgzU2G)，将压缩包解压至 `项目根目录`，如根目录为：kdyh3.0，则解压后应为：kdyh3.0/node_modules/...


##设置 module 和 component 的 generator
generator 在该项目中相当于一个文件结构模板生成器，将一些基础通用的东西组织好，通过一些替换处理，生成到开发者指定的目录，达到减少繁琐创建文件及其结构所耗费的工作量，同时也促进了代码规范的统一。设置方法如下：

以下代码主要设置 module 和 component 生成器到全局，供全局调用。

```
// 切换至模块生成器目录
$ cd generators/module
// 将其链到全局，无权限时加 sudo
$ npm link

// 切换至组件生成器目录
$ cd generators/component
// 将其链到全局，无权限时加 sudo
$ npm link
```

##添加 config.json
我们需要新建一个构建配置文件，里边的内容会在后续文档仔细介绍，这里先验证整个工程的可用性，直接新建以含下内容的 config.json 文件到 `项目根目录`：

```
{
    "build": {
        "blist": {
            "components": ["htmlhead", "htmlfoot"]
        }
    }
}
```

##验证工程完整可用性

使用 yo 命令创建一个名字为：`helloWorld`，描述为：`测试模块，没啥功能，就酱吧` 的模块，并执行构建打包任务。

```
// 使用脚手架功能快速创建一个模块
$ yo kdyh-module

// 执行浏览器下 dev 环境的构建
// 此次构建将使用 [dev 环境的后端接口] 和 [浏览器内 mock 的 Native API]
$ gulp dev:mock
```

找到 `项目根目录`/_dev/modules/helloWorld/main.html 文件，双击后能在浏览器内看到提示文案就说明所有准备工作都已经完成。
