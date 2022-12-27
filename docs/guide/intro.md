---
title: 介绍
category:
  - 使用指南
---

### 介绍

sv-print 是一个使用 Svelte 构建的打印设计器组件（[基于 hiprint](http://hiprint.io)）。它也可以用于其他 UI 库/框架，如 React、Vue 和 Angular。

sv-print的诞生是因为我开发的[vue-plugin-hiprint](https://gitee.com/CcSimple/vue-plugin-hiprint)插件，由于当时插件仅仅是为了方便我自己在vue项目中引入使用，所以只有 Vue 框架的一些 UI 框架的 demo 使用。但是 [hiprint](http://hiprint.io) 底层是 [jQuery](https://jquery.com/) 开发的，所以理论上是支持其他框架的。为了能在其他框架下方便使用，比 vue-plugin-hiprint 更方便的引入到任何项目中。而后了解到有 Svelte 这个苗条的，没有虚拟 DOM 的框架，用它可以打包到其他如 Vue、React等等框架中的开发框架的存在。 sv-print 代码可能很多地方都不太合理，因为我也是初学者。所以需要大家的共同参与以完善这个还算凑合的打印设计器。