---
title: 介绍
category:
  - 使用指南
---

### 介绍

sv-print 是一个使用 Svelte 构建的打印设计器组件（[基于 hiprint](http://hiprint.io)）。它也可以用于其他 UI 库/框架，如 React、Vue 和 Angular。

因为我开源的[vue-plugin-hiprint](https://gitee.com/CcSimple/vue-plugin-hiprint)插件，当时仅仅是为了方便我自己在 vue 项目中引入使用，而且最开始不熟悉，所以它只是个 js 插件库。随着后续使用者的增多，发现大家有类似的需求，于是我就想着把它封装成组件，方便大家使用。于是就有了这个组件库。

sv-print 就是为了方便在项目中快速集成 web 打印功能的一个组件。

### 特性

- 🚀 支持 vue、react、angular 等框架的组件引入
- 🚀 支持 常规编辑: 复制、粘贴、删除、缩放、拖拽、旋转、对齐、吸附、锁定、解锁、撤销、重做、全选等
- ⭐️ 支持 插件机制 可扩展更多的打印元素（ECharts、Fabric等等）
- 🌈 支持拖拽设计、预览、打印、导出PDF、导出图片
- ✨  支持自定义模板、导入/导出模板
- 🌈 支持数据源绑定、数据格式化、样式格式化