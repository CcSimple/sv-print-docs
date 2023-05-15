---
title: 参数&回调
category:
  - sv-print
---

::: warning 温馨提示

sv-print 它的配置和 API 还不够稳定。些许 Bug 可能还未发现或未处理。

:::

### 参数

| 名称                   | 类型                   | 说明                                                   | 默认值                 | 备注                                                               |
| ---------------------- | ---------------------- | ------------------------------------------------------ | ---------------------- | ------------------------------------------------------------------ |
| autoConnect            | `boolean`              | 是否自动连接==打印客户端==                             | `undefined`            |                                                                    |
| config                 | `object`               | 配置                                                   | `undefined`            | `hiprint.setConfig`                                                |
| providers              | `array<object>`        | provider 数组<br>`自定义可拖拽元素`                    | `[]`                   |                                                                    |
| providerMap            | `object/array<object>` | provider 构建对象/对象数组<br>`构建拖拽元素`           | `undefined`            | `{container:'容器选择器',value:'provider type(如:defaultModule)'}` |
| clearProviderContainer | `boolean`              | 构建 provider 之前是否先==清空==                       | `true`                 |                                                                    |
| plugins                | `array<object>`        | 插件数组                                               | `[]`                   |                                                                    |
| template               | `json/object`          | 模板 json/模板参数                                     | `{}`                   | `模板参数`: new 模板的参数                                         |
| printData              | `object`               | 预览打印数据                                           | `{name:"abcd"}`        |                                                                    |
| templateKey            | `string`               | 缓存键`(localStorage)`                                 | `default-template`     |                                                                    |
| title                  | `string`               | 模板名称, 导出 pdf 名称                                | `默认模板`             |                                                                    |
| authKey                | `string`               | 授权 key `显示对应授权信息`                            | ``                     |                                                                    |
| headerLogoHtml         | `string`               | header logo `需authKey支持`                            | ``                     |                                                                    |
| headerTitle            | `string`               | header 标题 `需authKey支持`                            | ``                     |                                                                    |
| events                 | `object`               | 事件回调                                               | `{}`                   |                                                                    |
| tags                   | `array<string>`        | 可拖拽元素 tags                                        | `['.draggable-ele']`   |                                                                    |
| styleOption            | `object`               | 样式 map / 小组件初始位置                              | `{}` ==有默认值合并==  |                                                                    |
| showOption             | `object`               | 显隐 map / 小组件是否显示                              | `{}` ==有默认值合并==  |                                                                    |
| paperList              | `array<object>`        | 纸张列表                                               | `A1-A7 B1-B7`          | `{ type: "A1", width: 594, height: 841 }`                          |
| theme                  | `string`               | 默认主题                                               | `light`                | ``                                                                 |
| themeList              | `array<string>`        | 可选主题列表                                           | `["light","dark",...]` | [daisyui](https://daisyui.com/docs/themes/)                        |
| pageStructureGridMode  | `boolean`              | `页面结构`网格模式                                     | `false`                |                                                                    |
| miniMapOriginMode      | `boolean`              | `小地图`原始模式                                       | `false`                |                                                                    |
| previewOptions         | `object`               | `预览参数`                                             | `{}`                   | `{showPdf:false}`<br/>隐藏导出 pdf 按钮                            |
| onPreviewClick         | `function`             | `预览`点击函数 (e)=>{}                                 | `undefined`            |                                                                    |
| onImageChooseClick     | `function`             | `图片选择`点击函数 (target)=>{}                        | `undefined`            |                                                                    |
| onPanelAddClick        | `function`             | `多面板添加`点击函数 (panel, createPanel)=>{}          | `undefined`            |                                                                    |
| onFunctionClick        | `function`             | `格式化函数`点击函数 (option, printElement, event)=>{} | `undefined`            |                                                                    |

### 回调

| 名称       | 说明                 | 回调参数                                                       |
| ---------- | -------------------- | -------------------------------------------------------------- |
| onDesigned | `设计器`渲染完成回调 | {<br/>`{hiprint`<br/>`printTemplate`<br/>`designerUtils`<br/>} |

### 默认值

如 `styleOption`、`showOption` 稍微复杂一点的参数。

```js
// styleOption
{
  draggableEls: { // 可拖拽元素
    mode: "default", // 拖拽模式: default(默认), top(上), bottom(下), left(左), right(右), fixed(固定)
    show: true, // 是否显示  默认: true
    html: '<i class="svicon sv-element"></i><span>拖拽元素</span>', // 缩放 左侧的 按钮/icon (一般不用)
    style: "left:20px;top:95px;width:200px;height:calc(100% - 340px);", // 样式
  },
  options: { // 属性
    mode: "default",
    html: '<i class="svicon sv-options"></i><span>属性</span>',
    style: "right:0;top:95px;width:200px;",
  },
  pageStructure: { // 页面结构
    mode: "default",
    html: '<i class="svicon sv-structure"></i><span>页面结构</span>',
    style: "right:210px;top:95px;width:200px;",
  },
  locationExchange: { // 位置交换
    mode: "default",
    show: false,
    html: '<i class="svicon sv-switch"></i><span>位置交换</span>',
    style: "right:490px;top:95px;width:300px;height:400px",
  },
  miniMap: { // 小地图
    mode: "default",
    html: '<i class="svicon sv-flow"></i><span>概览图</span>',
    style: "left:20px;bottom:30px;width:240px;min-height:200px;height:200px",
  },
  editableTools: { // 编辑工具
    mode: "top",
    style: "left:280px;top:180px;",
  },
  zIndexTools: { // 层级工具
    mode: "top",
    style: "left:280px;top:300px;",
  },
  fontTools: { // 字体工具
    mode: "top",
    style: "left:280px;top:420px;",
  },
  zoomTools: { // 缩放工具
    mode: "left",
    style: "left:240px;top:100px;",
  },
  rotateTools: { // 旋转工具
    mode: "bottom",
    style: "left:440px;top:180px;",
  },
}
// showOption
// 这个目前 有bug, 高度显示不正常, 有时间再修复
{
  showHeader: true, // 是否显示头部
  showToolbar: true, // 是否显示工具栏
  showFooter: true, // 是否显示底部 需要 authKey 支持
  showPower: true, // 是否显示 "powered by sv-print" 需要 authKey 支持
}
```
