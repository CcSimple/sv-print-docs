---
title: Get started
icon: creative
category:
  - Get started
---

### install

目前支持框架/js 如下：

| Package                                                                               | Status                                                                                            | Description            |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------- |
| [sv-print](https://github.com/CcSimple/sv-print/tree/main/packages/sv-print)          | [![npm](https://img.shields.io/npm/v/sv-print?label=)](https://npm.im/sv-print)                   | Svelte/Vanilla JS 组件 |
| [@sv-print/react](https://github.com/CcSimple/sv-print/tree/main/packages/react)      | [![npm](https://img.shields.io/npm/v/@sv-print/react.svg?label=)](https://npm.im/@sv-print/react) | React 组件             |
| [@sv-print/vue](https://github.com/CcSimple/sv-print/tree/main/packages/packages/vue) | [![npm](https://img.shields.io/npm/v/@sv-print/vue.svg?label=)](https://npm.im/@sv-print/vue)     | Vue 2 组件             |
| [@sv-print/vue3](https://github.com/CcSimple/sv-print/tree/main/packages/vue3)        | [![npm](https://img.shields.io/npm/v/@sv-print/vue3.svg?label=)](https://npm.im/@bytemd/vue3)     | Vue 3 组件             |
| [@sv-print/hiprint](https://github.com/CcSimple/sv-print/tree/main/packages/hiprint)  | [![npm](https://img.shields.io/npm/v/@sv-print/hiprint.svg?label=)](https://npm.im/@bytemd/vue3)  | hiprint core (js 库)   |

::: code-tabs

@tab:active pnpm

```bash
pnpm add sv-print
```

@tab yarn

```bash
yarn add sv-print
```

@tab npm

```bash
npm i sv-print
```

:::

### use

::: code-tabs

@tab:active Svelte

```vue
<script>
import "sv-print/dist/style.css"; // 一般在入口文件(index/main)添加
import { Designer } from "sv-print";
let template = {};

function onDesigned(e) {
  const { hiprint, printTemplate, designerUtils } = e.detail;
  console.log(hiprint);
  console.log(printTemplate);
  console.log(designerUtils);
}
</script>

<template>
  <Designer {template} on:onDesigned="{onDesigned}"> </Designer>
</template>
```

@tab Vue

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
