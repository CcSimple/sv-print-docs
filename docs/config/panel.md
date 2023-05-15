---
title: 面板
category:
  - 模板&元素
---

### 面板对象

::: tip 提示

面板是模板对象的核心。==所有打印元素实际存储的位置都在面板中==。可以理解成 `“模板”` 是画框，`“面板”` 才是真正的画布。

:::

```js
let hiprintTemplate = new hiprint.PrintTemplate(options);
// 新建一个面板, 宽:100 高:100
let panel = hiprintTemplate.addPrintPanel({ width: 100, height: 100 });
```

### 参数

| 名称                | 类型      | 说明                                                                    | 备注                                                                                                       |
| ------------------- | --------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| panelPageRule       | `string`  | 分页规则 默认 `''`                                                      | 设置 `none` 不分页 ==小票打印==                                                                            |
| name                | `string`  | 面板名称 `默认面板名称`                                                 | ==多面板==时显示                                                                                           |
| width               | `number`  | 打印纸张宽度 `mm`                                                       |                                                                                                            |
| height              | `number`  | 打印纸张高度 `mm`                                                       |                                                                                                            |
| leftOffset          | `number`  | 打印左偏移量 `mm` <br/> ==当打印遇到部分显示不全很有用==                | 将覆盖面板的左偏移<br/>`template.print(data,{leftOffset:-1})`<br/>`template.getHtml(data,{leftOffset:-1})` |
| topOffset           | `number`  | 打印上偏移量 `mm` <br/> ==当打印遇到部分显示不全很有用==                | 将覆盖面板的上偏移<br/>`template.print(data,{topOffset:-1})`<br/>`template.getHtml(data,{topOffset:-1})`   |
| paperHeader         | `number`  | 页眉线 `mm` 默认 0                                                      | 此高度之==上==的元素, 可设置每页显示 <br/> ==分页内容开始位置==                                            |
| paperFooter         | `number`  | 页脚线 `mm` 默认 纸张底部                                               | 此高度之==下==的元素, 可设置每页显示 <br/> ==分页内容结束位置==                                            |
| paperNumberDisabled | `boolean` | 不显示页码 默认 false                                                   | 设计时显示`灰色`, 双击页码则切换状态                                                                       |
| paperNumberFormat   | `string`  | 页码格式 默认 `paperNo-paperCount`                                      |                                                                                                            |
| fontFamily          | `string`  | 字体                                                                    | ==如果"元素"没设置则继承这个字体==                                                                         |
| orient              | `string`  | 纸张方向(仅自定义纸张有效) <br/> `1:纵向 2:横向`                        | ==默认自带有 A1-A8 B1-B8==                                                                                 |
| panelPaperRule      | `string`  | 面板打印纸张规则<br/>`odd`:打印纸张保持奇数<br/>`even`:打印纸张保持偶数 |                                                                                                            |
| firstPaperFooter    | `number`  | 首页页尾线位置                                                          | 顾名思义<br/>第一页的==页尾线高度==                                                                        |
| lastPaperFooter     | `number`  | 尾页页尾线位置                                                          | 顾名思义<br/>最后一页的==页尾线高度==                                                                      |
| evenPaperFooter     | `number`  | 偶数页页尾线位置                                                        | 顾名思义<br/>偶数页的==页尾线高度==                                                                        |
| oddPaperFooter      | `number`  | 奇数页页尾线位置                                                        | 顾名思义<br/>奇数页的==页尾线高度==                                                                        |
| watermarkOptions    | `object`  | 水印参数                                                                | ==点击面板==可查看可配置项                                                                                   |
