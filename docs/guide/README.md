---
title: 快速上手
icon: creative
category:
  - 使用指南
---

<!-- ::: warning 注意

sv-print 目前仍处于测试阶段。你可以引入到现有项目，但是它的配置和 API 还不够稳定。些许 Bug 可能还未发现或未处理。

::: -->

### 依赖环境

- [Node.js v16+](https://nodejs.org/en/)(开发环境是 16.18.1)
- [Vite v3+](https://cn.vitejs.dev/)(开发环境是 ^3.2.5)
- [Webpack v4+](https://www.webpackjs.com/)(使用 vue create 创建的项目测试可正常引入)
- [jQuery/纯js 项目支持](https://jquery.com/)(使用 html + js 项目测试可正常引入 (需要demo 联系我))

### 安装

目前支持框架/js 如下：

| Package                                                                               | Status                                                                                            | Description            |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------- |
| [sv-print](https://github.com/CcSimple/sv-print/tree/main/packages/sv-print)          | [![npm](https://img.shields.io/npm/v/sv-print?label=)](https://npm.im/sv-print)                   | Svelte/Vanilla JS 组件 |
| [@sv-print/react](https://github.com/CcSimple/sv-print/tree/main/packages/react)      | [![npm](https://img.shields.io/npm/v/@sv-print/react.svg?label=)](https://npm.im/@sv-print/react) | React 组件             |
| [@sv-print/vue](https://github.com/CcSimple/sv-print/tree/main/packages/packages/vue) | [![npm](https://img.shields.io/npm/v/@sv-print/vue.svg?label=)](https://npm.im/@sv-print/vue)     | Vue 2 组件             |
| [@sv-print/vue3](https://github.com/CcSimple/sv-print/tree/main/packages/vue3)        | [![npm](https://img.shields.io/npm/v/@sv-print/vue3.svg?label=)](https://npm.im/@bytemd/vue3)     | Vue 3 组件             |
| [@sv-print/hiprint](https://github.com/CcSimple/sv-print/tree/main/packages/hiprint)  | [![npm](https://img.shields.io/npm/v/@sv-print/hiprint.svg?label=)](https://npm.im/@bytemd/vue3)  | hiprint core (js 库)   |

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

### 使用

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
