---
title: 自定义默认拖拽元素
category:
  - sv-print
---

### provider 作用

==provider==顾名思义就是==提供者==的意思，就是==提供默认【新】拖拽出来元素的默认大小、参数及样式。==

如果你是第一次使用，建议先阅读下列文章:

微信公众号文章:

[如何自定义可拖拽元素 provider](https://mp.weixin.qq.com/s/n9i1j8hhVJvnlfJRPRtWog)

[实战-动态 provider](https://mp.weixin.qq.com/s/UVkhul1tynjaUjdC_NaHfw)

### 创建 provider

站内教程：[入门 provider](../config/provider)

新建一个 provider.js 文件，编写你需要的默认元素及参数:

@include(../config/provider.md{14-57})

### 初始化 provider

> 1 全局初始化

在 main.js 或者 其他非 UI 页面的 js 中初始化 provider: 做到全局初始化，所有页面都可以使用。

```js
import { hiprint } from "sv-print";
// 自己本地建的 provider.js
import provider from "./provider";
// 初始化
hiprint.init({
  providers: [new provider()], // 可以传多个
});
```

> 2 使用时初始化

```vue
<template>
  <!-- 方式2：传 props -->
  <Designer :providers="providerList"> </Designer>
</template>

<script>
import { Designer } from "@sv-print/vue";
import { hiprint } from "sv-print";
// 自己本地建的 provider.js
import provider from "./provider";

export default {
  components: { Designer },
  data() {
    return { providerList: [new provider()]};
  },
  onCreated() {
    // 方式1: 直接传 provider
    // 使用的页面初始化
    hiprint.init({
      providers: [new provider()], // 可以传多个
    }
  },
};
</script>
```

### 查看 已初始化的 provider

不知道初始化是否正常? 

打开==浏览器控制台==，输入 hiprint 可查看 hiprint.ElementTypes 对象:

```js
hiprint.ElementTypes
```

<img src="/assets/hiprint.ElementTypes.png"/>

其中 ==allElementTypes== 是已初始化的所有的元素。

==defaultModule== 则是根据你创建的 provider 的 key。

你可以==详细查看他们==,以检查是否==新拖拽出来的元素是否正常==。 以及关键的 ==tid== 。

### 使用 provider

本来不想啰嗦的，又怕你们不清楚，说找不到怎么用，不知道原理。还是简单说一下吧。

> 1 自定义拖拽元素的样式

```vue
<template>
  <!-- 这是 "可拖拽元素" 容器 拖拽它到 "拖拽设计器" 进行设计 -->
  <div title="这是方式1,完全自定义元素样式" class="hiprintEpContainer">
    <!-- 必须包含 "ep-draggable-item" class -->
    <!-- defaultModule.text ==> provider 中 对应的 tid -->
    <a class="ep-draggable-item" tid="defaultModule.text">
      <p>文本</p>
    </a>
  </div>
</template>

<script>
import { hiprint } from "sv-print";
// 自己本地建的 provider.js
import provider from "./provider";

export default {
  data() {
    return {
      hiprintTemplate: null,
    };
  },
  created() {
    // 初始化 provider , 才能让 "可拖拽元素" 可正常拖拽 【因为要先去处理 provider 中的 "tid"】
    hiprint.init({
      providers: [new provider()],
    });
  },
  mounted() {
    // 渲染部分都是填充到 对应 "容器" 中， 所以肯定需要能够获取到对应 DOM 后 操作。
    this.init();
  },
  methods: {
    init() {
      // 渲染 "可拖拽元素" 方式1, 包含 "tid" 元素 class 必须包含 "ep-draggable-item"
      hiprint.PrintElementTypeManager.buildByHtml($(".ep-draggable-item"));
    },
  },
};
</script>
```

> 2 使用默认的样式渲染

```vue
<template>
  <!-- 这是 "可拖拽元素" 容器 拖拽它到 "拖拽设计器" 进行设计 -->
  <div title="这是方式2,仅显示自定义元素的标题" class="hiprintEpContainer"></div>
</template>

<script>
import { hiprint } from "sv-print";
// 自己本地建的 provider.js
import provider from "./provider";

export default {
  data() {
    return {
      hiprintTemplate: null,
    };
  },
  mounted() {
    // 渲染部分都是填充到 对应 "容器" 中， 所以肯定需要能够获取到对应 DOM 后 操作。
    this.init();
  },
  methods: {
    init() {
      // 渲染 "可拖拽元素" 方式2, 指定 "可拖拽元素" 容器
      $(".hiprintEpContainer").empty(); // // 有时可能是第二次进入此页面, 所以需要先清空 "可拖拽元素" 容器
      // hiprintEpContainer => "可拖拽元素" 容器
      // defaultModule => provider 对应的 ElementTypes --> context.addPrintElementTypes("defaultModule",[])
      // 有时如果你发现你页面出现重复的 "可拖拽元素" 元素, 那么你需要 先移除"旧"的 ElementTypes --> context.removePrintElementTypes("defaultModule");
      hiprint.PrintElementTypeManager.build(".hiprintEpContainer", "defaultModule");
    },
  },
};
</script>
```

### Designer 组件使用 provider

通过上方的基础说明,我们知道有两种方式去构建使用 provider。

- 方式 1: ==UI 定制化高、比较美观==
- 方式 2: ==适合批量渲染元素==

在 sv-print 的 Designer 组件中, 同样可以使用两种方式去构建使用 provider。

> 方式 1: 自定义渲染的样式

```vue
<template>
  <div id="app" style="width: 100vw; height: 100vh">
    <!-- tags 可指定哪些 class 的元素 可以拖拽, 以方便可 自定义以下样式 -->
    <Designer :tags="['test-tag', 'test-tag2']">
      <!-- header 插槽 自定义 header -->
      <div style slot="header">
        <!-- 必须包含 ep-draggable-item  -->
        <div class="test-tag ep-draggable-item" tid="defaultModule.text">
          <i class="svicon sv-text" />
          <p>文本</p>
        </div>
      </div>
      <!-- draggableEls 插槽 自定义 可拖拽元素 -->
      <div slot="draggableEls">
        <!-- 必须包含 ep-draggable-item  -->
        <div class="test-tag2 ep-draggable-item" tid="defaultModule.text">
          <i class="svicon sv-text" />
          <p>文本</p>
        </div>
      </div>
    </Designer>
  </div>
</template>
<style>
.test-tag {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: blue;
}
.test-tag2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
}
</style>
```

> 方式 2: 批量构建拖拽元素

```vue
<template>
  <div id="app" style="width: 100vw; height: 100vh">
    <Designer
      :providerMap="[
        // container: 容器(可以是不同容器), value: provider 的 key
        { container: '.hiprintEpContainer', value: 'defaultModule' },
        { container: '.hiprintEpContainer', value: 'defaultModule' },
        { container: '.otherContainer', value: 'defaultModule' },
      ]"
      :clearProviderContainer="false"
    >
      <!-- clearProviderContainer: 是否先清空容器的元素 再构建, 默认 true  -->
      <!-- 其他插槽: 自己扩展其他的 渲染层 -->
      <div class="otherContainer" slot="other"></div>
    </Designer>
  </div>
</template>
<style>
.otherContainer {
  position: absolute;
  top: 100px;
  left: 340px;
  width: 200px;
  background: plum;
}
</style>
```
