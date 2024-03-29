---
title: 介绍
category:
  - 使用指南
---

### 介绍

sv-print 是一个使用 Svelte 构建的打印设计器组件（[基于 hiprint](http://hiprint.io)）。它也可以用于其他 UI 库/框架，如 React、Vue 和 Angular。

<!-- ::: warning 注意

sv-print 目前仍处于测试阶段。你可以引入到现有项目，但是它的配置和 API 还不够稳定。些许 Bug 可能还未发现或未处理。

::: -->

sv-print 的诞生是因为我开发的[vue-plugin-hiprint](https://gitee.com/CcSimple/vue-plugin-hiprint)插件，由于当时插件仅仅是为了方便我自己在 vue 项目中引入使用，所以只有 Vue 框架的一些 UI 框架的 demo 使用。但是 [hiprint](http://hiprint.io) 底层是 [jQuery](https://jquery.com/) 开发的，所以理论上是支持其他框架的。为了能在其他框架下方便使用，比 vue-plugin-hiprint 更方便的引入到任何项目中。而后了解到有 Svelte 这个苗条的，没有虚拟 DOM 的框架，用它可以打包到其他如 Vue、React 等等框架中的开发框架的存在。 sv-print 代码可能很多地方都不太合理，因为我也是初学者。所以需要大家的共同参与以完善这个还算凑合的打印设计器。

简而言之 sv-print 就是为了方便在项目中集成 web 打印功能。

### ❓ 为什么没开源

起初本来是想开源的， 然而一次不经意发现开源的 vue-plugin-hiprint 越来越多的第三方版本。 于是 sv-print 没有开源的后续了~

<img src="/assets/vue-plugin-hiprint.png"/>

### 关于 hiprint

[hiprint](http://hiprint.io/) 是一个 web 打印的 js 组件，无需安装软件。支持 windows,macOS,linux 系统，支持移动端，PC 端浏览器，angular,vue,react 等 分页预览，打印，操作简单，运行快速。预览界面为 css+html 。支持数据分组，批量预览。生成 pdf,图片更方便 。[hiprint 官网(http://hiprint.io/)](http://hiprint.io/)

### 👍🏻 支持该项目

::: tip 感谢

- 如果该项目对你有所帮助, 可以扫下方的二维码, 支持一下! 你的支持是我最大的动力!

:::

<table>
    <tr>
        <td><img src="/assets/zWechat.png" style="width:14rem"/></td>
        <td><img src="/assets/zAlipay.png" style="width:14rem"/></td>
    </tr>
</table>
