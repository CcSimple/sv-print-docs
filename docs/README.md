---
home: true
icon: home
title: sv-print
heroImage: /logo.svg
heroText: sv-print
tagline: 使用svelte开发的打印设计器组件(基于hiprint)；本文档会有 hiprint 和 sv-print 的使用说明。
actions:
  - text: 使用指南 💡
    link: /guide/intro

  - text: 快速上手 🚀
    link: /guide/
    type: primary

  - text: 在线案例 🎾
    link: https://ccsimple.gitee.io/sv-print-demo/

features:
  - title: 多框架UI 组件
    icon: layout
    details: 目前已提供 Svelte、Vue、Vue3、React框架的 UI 组件 npm 包。 点击查看
    link: https://www.npmjs.com/search?q=%40sv-print

  - title: 插件支持
    icon: blog
    details: 可自定义插件，自定义自己的打印元素等等。点击查看
    link: https://www.npmjs.com/search?q=%40sv-print%20plugin

  - title: 模板编辑/数据编辑
    icon: slides
    details: 内置 json 编辑器，可编辑当前模板 json 和 打印预览的数据。

  - title: 布局美化
    icon: layout
    details: 简约的设计布局，内置打印预览窗口，可添加可拖拽元素，自定义初始位置等等。

  - title: 自带多种主题
    icon: palette
    details: 支持自定义主题色并允许用户在预设的主题颜色之间切换 使用 daisyui
    link: https://daisyui.com/

  - title: 简约拖拽操作
    icon: support
    details: 支持框选、旋转、等比缩放、元素对齐、自定义可拖拽方向等等

  - title: 常用工具栏
    icon: config
    details: 常用编辑功能；如：撤销重做、对齐、复制粘贴、放大缩小等等，工具栏清晰明了

  - title: 更多功能
    icon: more
    details: 导入导出json模板、缩放、锁定编辑、快速放大/缩小字体等等

copyright: false
footer: LGPL Licensed | Copyright © 2022-present sv-print
---

<img src="/assets/sv-print.png"/>

## 🛠 安装

::: code-tabs

@tab pnpm

```bash
# Svelte/Vanilla JS 组件
pnpm add sv-print
# React 组件
pnpm add @sv-print/react
# Vue2 组件
pnpm add @sv-print/vue
# Vue3 组件
pnpm add @sv-print/vue3
```

@tab yarn

```bash
# Svelte/Vanilla JS 组件
yarn add sv-print
# React 组件
yarn add @sv-print/react
# Vue2 组件
yarn add @sv-print/vue
# Vue3 组件
yarn add @sv-print/vue3
```

@tab:active npm

```bash
# Svelte/Vanilla JS 组件
npm i sv-print
# React 组件
npm i @sv-print/react
# Vue2 组件
npm i @sv-print/vue
# Vue3 组件
npm i @sv-print/vue3
```

:::

::: danger 重要提醒

需要复制【==node_modules/@sv-print/hiprint/dist/print-lock.css==】到开发资源目录。<br/>
例如: Vue 项目的 ==public== 目录。<br/>
假如你部署的网站是: `https://www.abcd.com/index.html` 那么确保 `https://www.abcd.com/print-lock.css` 能够正常访问

:::

> ==在你项目的 index.html 入口 添加 print-lock.css 打印样式【名称 print-lock.css】==

> ==注意: media="print"==


```html
<!-- 可以调整成 相对链接/自有链接, 【重要】名称需要一致 【print-lock.css】-->
<link rel="stylesheet" type="text/css" media="print" href="/print-lock.css">
```

## 🚀 使用

::: code-tabs

@tab Svelte

```vue
<script>
import "sv-print/dist/style.css"; // 一般在入口文件(index/main)添加
import { Designer } from "sv-print";
let template = {};

function onDesigned(e) {
  const { hiprint, designerUtils } = e.detail;
  console.log(hiprint);
  console.log(designerUtils);
  console.log(designerUtils.printTemplate);
}
</script>

<template>
  <Designer {template} on:onDesigned="{onDesigned}"> </Designer>
</template>
```

@tab:active Vue

```vue
<template>
  <Designer :template="template" @onDesigned="onDesigned" />
</template>

<script>
import "sv-print/dist/style.css"; // 一般在入口文件(index/main)添加
import { Designer } from "@sv-print/vue";

export default {
  components: { Designer },
  data() {
    return { template: {} };
  },
  methods: {
    onDesigned(e) {
      console.log(e);
    },
  },
};
</script>
```

@tab:active Vue3

```vue
<template>
  <Designer :template="template" @onDesigned="onDesigned" />
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import "sv-print/dist/style.css"; // 一般在入口文件(index/main)添加
import { Designer } from "@sv-print/vue3";
let template = ref({});
const onDesigned = (e) => {
  console.log("onDesigned");
  console.log(e);
};
</script>
```

@tab React

```js
import "sv-print/dist/style.css"; // 一般在入口文件(index/main)添加
import { Designer } from "@sv-print/react";

const App = () => {
  const [template, setTemplate] = useState({});

  return (
    <Designer
      template={template}
      onDesigned={(e) => {
        console.log(e);
      }}
    />
  );
};
```

@tab Vanilla JS

```js
import "sv-print/dist/style.css";
import { Designer } from "sv-print";

const designer = new Designer({
  target: document.body, // 容器
  props: {
    template: {},
  },
});

designer.$on("onDesigned", (e) => {
  console.log(e);
});
```

:::

## 👍🏻 支持该项目

::: tip 感谢

- 如果该项目对你有所帮助, 可以扫下方的二维码, 支持一下! 你的支持是我最大的动力!

:::

<table>
    <tr>
        <td><img src="/assets/zWechat.png" style="width:14rem"/></td>
        <td><img src="/assets/zAlipay.png" style="width:14rem"/></td>
    </tr>
</table>
