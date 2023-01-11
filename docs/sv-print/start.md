---
title: 开始
category:
  - sv-print
---

::: tip 温馨提示

目前国内项目使用 Svelte 开发管理系统的可能比较少。所以这里以 Vue 使用方式作为示例。

:::

### 安装

```
npm i @sv-print/vue
```

### 引入打印样式

::: danger 重要提醒

需要复制【==node_modules/@sv-print/hiprint/dist/print-lock.css==】到开发资源目录。<br/>
例如: Vue 项目的 ==public== 目录。<br/>
假如你部署的网站是: `https://www.abcd.com/index.html` 那么确保 `https://www.abcd.com/print-lock.css` 能够正常访问

:::

### 引入组件样式

```js
// 一般在入口文件(index/main)添加
import "sv-print/dist/style.css";
```

### 引入组件

```vue
<template>
  <Designer :template="template" :printData="printData" @onDesigned="onDesigned">
    <!-- 自定义 header -->
    <div class="header" slot="header">
      <div>header slot test1</div>
    </div>
    <!-- 自定义 左侧拖拽 元素 -->
    <div slot="draggableEls">
      <!-- 注意这里 tid="defaultModule.text" 如果是自定义 provider 的内容, 也需要先传对应的 provider -->
      <div class="ep-draggable-item" tid="defaultModule.text">
        <i class="iconfont sv-text" />
        <p>-文本-</p>
      </div>
    </div>
  </Designer>
</template>

<script>
import { Designer } from "@sv-print/vue";

export default {
  components: { Designer },
  data() {
    return { template: {}, printData: { name: "abcde" } };
  },
  methods: {
    onDesigned(e) {
      // 这里会 回调 3 个 关键对象
      console.log(e);
      console.log(e.hiprint); // hiprint 模块
      console.log(e.printTemplate); // 模板 对象
      console.log(e.designerUtils); // 设计器 对象
    },
  },
};
</script>
```
