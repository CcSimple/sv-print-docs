---
title: 参数&回调
category:
  - sv-print
---

::: warning 注意

sv-print 目前仍处于测试阶段。它的配置和 API 还不够稳定。些许 Bug 可能还未发现或未处理。

:::

### 参数

| 名称                  | 类型            | 说明                                | 默认值                 | 备注                                        |
| --------------------- | --------------- | ----------------------------------- | ---------------------- | ------------------------------------------- |
| autoConnect           | `boolean`       | 是否自动连接==打印客户端==          | `undefined`            |                                             |
| config                | `object`        | 配置                                | `undefined`            | `hiprint.setConfig`                         |
| providers             | `array<object>` | provider 数组<br>`自定义可拖拽元素` | `[]`                   |                                             |
| plugins               | `array<object>` | 插件数组                            | `[]`                   |                                             |
| template              | `json/object`   | 模板 json/模板参数                  | `{}`                   | `模板参数`: new 模板的参数                  |
| printData             | `object`        | 预览打印数据                        | `{name:"abcd"}`        |                                             |
| key                   | `string`        | 缓存键`(localStorage)`              | `default-template`     |                                             |
| title                 | `string`        | 模板名称, 导出 pdf 名称             | `默认模板`             |                                             |
| tags                  | `array<string>` | 可拖拽元素 tags                     | `[]`                   |                                             |
| styleOption           | `object`        | 样式 map / 小组件初始位置           | `{}`                   |                                             |
| showOption            | `object`        | 显隐 map / 小组件是否显示           | `{}`                   |                                             |
| paperList             | `array<object>` | 纸张列表                            | `A1-A7 B1-B7`          | `{ type: "A1", width: 594, height: 841 }`   |
| theme                 | `string`        | 默认主题                            | `light`                | ``                                          |
| themeList             | `array<string>` | 可选主题列表                        | `["light","dark",...]` | [daisyui](https://daisyui.com/docs/themes/) |
| pageStructureGridMode | `boolean`       | `页面结构`网格模式                  | `false`                |                                             |
| miniMapOriginMode     | `boolean`       | `小地图`原始模式                    | `false`                |                                             |
| onPreviewClick        | `function`      | `预览`点击函数 (e)=>{}              | `undefined`            |                                             |
| onImageChooseClick    | `function`      | `图片选择`点击函数 (target)=>{}     | `undefined`            |                                             |

### 回调

| 名称       | 说明                 | 回调参数                                                       |
| ---------- | -------------------- | -------------------------------------------------------------- |
| onDesigned | `设计器`渲染完成回调 | {<br/>`{hiprint`<br/>`printTemplate`<br/>`designerUtils`<br/>} |
