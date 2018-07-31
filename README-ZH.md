  <p align="center"><a href="http://vuescrolljs.yvescoding.org/zh/"><img width="100" src="http://vuescrolljs.yvescoding.org/logo.png" /></a></p>
  <h1 align="center" width="100">Vuescroll</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/vuescroll"><img src="https://img.shields.io/npm/v/vuescroll.svg" alt="Version"></a><a href="https://circleci.com/gh/YvesCoding/vuescroll/tree/dev"><img src="https://img.shields.io/circleci/project/YvesCoding/vuescroll/dev.svg" alt="Build Status"></a>
  <a href="https://codecov.io/github/YvesCoding/vuescroll?branch=dev"><img src="https://img.shields.io/codecov/c/github/YvesCoding/vuescroll/dev.svg" alt="Coverage"></a>
  <a href="https://www.npmjs.com/package/vuescroll"><img src="https://img.shields.io/npm/l/vuescroll.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/vuescroll"><img src="https://img.shields.io/npm/dm/vuescroll.svg" alt="Download"></a>
<a href="https://github.com/YvesCoding/vuescroll"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" alt="prettier"></a>
</p>

[English Version](https://github.com/YvesCoding/vuescroll/blob/dev/README.md) | 中文版

一个可定制的， 功能强大专为 Vue.js 设计的滚动条插件 - [vuescrolljs.yvescoding.org](http://vuescrolljs.yvescoding.org/zh)

## Demo

<p align="center">
   <a href="https://github.com/YvesCoding/vuescroll-issue-list-demo" target="_blank"><img src="https://github.com/wangyi7099/pictureCdn/blob/master/allPic/vuescroll/show1.gif?raw=true" width="400"  alt="Demo"/></a>
</p>

<p align="center">
  <a href="https://vuescroll-issue-list-demo-zdizhghthq.now.sh">在线 Demo(建议使用移动端访问)</a>
</p>

## 特点

- 支持 通过改变[mode](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#vuescroll)来支持 Pc 和移动端
- 支持通过改变[easing](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#bar)来平滑地滚动
- 支持[自定义滚动条](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#bar)
- 支持[自定义滚动容器](http://vuescrolljs.yvescoding.org/zh/guide/slot.html#customize-container-panel-content)
- 支持[下拉刷新和上推加载](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html#explanation)
- 支持 [typescript](http://vuescrolljs.yvescoding.org/zh/guide/typescript.html)
- 支持 SSR
- 还有[更多](http://vuescrolljs.yvescoding.org/zh/guide/#features)！

## 快速开始

### 引入

在你的入口文件处：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

### 分开地引入 vuescroll

#### 如果你只想要 slide 模式，而不想要 native 模式，可以这么引用（不用在配置里面设置 mode，你的配置应该只在 slide 模式下工作）：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-slide';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

#### 如果你只想要 native 模式，而不想要 slide 模式，可以这么引用（不用在配置里面设置 mode，你的配置应该只在 native 模式下工作）：

```javascript
import Vue from 'vue';
import vuescroll from 'vuescroll/dist/vuescroll-native';
import 'vuescroll/dist/vuescroll.css';

Vue.use(vuescroll);
```

### 用法

把你需要滚动的内容用`vuescroll`包裹起来

```html
  <template>
    <div class='your-container'>
        <!-- bind your configurations -->
        <vue-scroll :ops="ops">
            <div class='your-content'>
            </div>
        </vue-scroll>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          ops: {
            // some configs....
          }
        }
      }
    }
  </script>
```

## 指南列表

- [在线例子](http://vuescrolljs.yvescoding.org/zh/demo/)
- [上手指南](http://vuescrolljs.yvescoding.org/zh/guide/getting-started.html)
- [配置项](http://vuescrolljs.yvescoding.org/zh/guide/configuration.html)
- [API 参考](http://vuescrolljs.yvescoding.org/zh/guide/api.html)
- [Event 参考](http://vuescrolljs.yvescoding.org/zh/guide/event.html)
- [Slot 参考](http://vuescrolljs.yvescoding.org/zh/guide/slot.html)

## 代办列表

- ~~把 `vuescroll` 分成两部分 : `Native 模式` 和 `Slide 模式`(已完成)~~

## 变更日志

详细的变更日志在[发行日志里](https://github.com/YvesCoding/releases).

## 贡献

请看[CONTRIBUTING](.github/CONTRIBUTING.md).

## 许可证

**MIT**
