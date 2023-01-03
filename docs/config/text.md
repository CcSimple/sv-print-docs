---
title: 文本
category:
  - 模板&元素
---

### 文本元素

::: tip 温馨提示

虽然这是 `文本` 元素，但是可通过 ==textType== 配置显示 ==条形码== 或 ==二维码==。

:::

```js
// 面板中 添加一个文本
panel.addPrintText({ options: { width: 100, height: 15, top: 20, left: 20, title: "手动添加的text", textAlign: "center" } });
// 面板中 添加一个条形码
panel.addPrintText({ options: { width: 100, height: 40, top: 40, left: 20, title: "123456", textType: "barcode" } });
// 面板中 添加一个二维码
panel.addPrintText({ options: { width: 100, height: 100, top: 80, left: 20, title: "123456", textType: "qrcode" } });
```

### printElementType

::: info 温馨提示

==printElementType== 是设计 provider 时的重要参数。比如说 `tid` 和 `field` 参数

:::

| 名称       | 类型       | 说明                                                                            | 备注                                      |
| ---------- | ---------- | ------------------------------------------------------------------------------- | ----------------------------------------- |
| tid        | `string`   | 元素类型唯一标识                                                                |                                           |
| title      | `string`   | 标题或内容 <br/>`同 options 的 title`                                           | `拖拽时就显示`<br/>==无法彻底删除==       |
| field      | `string`   | 字段名称 <br/>`同 options 的 field`                                             | `优先级高于 options`<br/>==无法彻底删除== |
| data       | `string`   | 同==测试数据==但参数列表不会显示 <br/>`同 options 的 testData` ==需要先设置 field== | `优先级高于 options`<br/>==无法彻底删除== |
| formatter  | `function` | 格式化函数 <br/>`同 options 的 formatter`                                       | `优先级高于 options`<br/>==无法彻底删除== |
| styler     | `function` | 样式函数 <br/>`同 options 的 styler`                                            | `优先级高于 options`<br/>==无法彻底删除== |
| onRendered | `function` | 渲染完成回调 <br/>==只能放在 printElementType 中==                              | ==设计时不会触发==                        |

### options

::: info 温馨提示

参数过多，可能没有罗列完整。跟多参数点击元素后，在==参数面板==中查看。<br/>`如果你是开发者，我相信你知道该怎么看`。

:::

| 名称           | 类型      | 说明                                                                                                          | 备注                                                                                                                             |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| title          | `string`  | 标题或内容<br/>`field 存在：title为标题，打印结果为 title:data , field 不存在：title为内容，打印结果为 title` | `拖拽进设计器时显示`<br/>                                                                                                        |
| field          | `string`  | 字段名称                                                                                                      | 可配置==fields==让字段名变成下列选择                                                                                             |
| testData       | `string`  | 测试数据 ==需要先设置 field==                                                                                 |                                                                                                                                  |
| hideTitle      | `boolean` | 隐藏标题 field==                                                                                              |                                                                                                                                  |
| fontFamily     | `string`  | 字体 `默认可继承面板设置的字体`                                                                               | 默认`宋体`                                                                                                                       |
| fontSize       | `string`  | 字体大小                                                                                                      | 默认`9pt`                                                                                                                        |
| fontWeight     | `string`  | 字体粗细                                                                                                      | 默认`9pt`                                                                                                                        |
| color          | `string`  | 字体样式                                                                                                      |                                                                                                                                  |
| letterSpacing  | `string`  | 字间距                                                                                                        |                                                                                                                                  |
| textDecoration | `string`  | 文本修饰                                                                                                      | `下划线、删除线`                                                                                                                 |
| textAlign      | `string`  | 对齐方式                                                                                                      | `left、center、right`                                                                                                            |
| lineHeight     | `string`  | 字体行高 ==条形码/二维码有影响==                                                                              |                                                                                                                                  |
| textType       | `string`  | 文本类型 `barcode(条形码) qrcode(二维码)`                                                                     |                                                                                                                                  |
| barcodeMode    | `string`  | 条形码类型                                                                                                    |                                                                                                                                  |
| qrcodeLevel    | `string`  | 二维码容错率 `{'L':1,'M':0,'Q':3,'H':2`                                                                       |                                                                                                                                  |
| fixed          | `string`  | 位置固定                                                                                                      | `让不在页眉页脚范围内的元素拥有每页输出的特性。` <br/> `与面板指定页页尾线设置功能 相互协作 可以设置指定页 不同的页尾信息展示。` |
| showInPage     | `string`  | 显示规则 `仅页眉页尾元素或位置固定固定有效` ==none 不受影响==                                                 | ==none:始终隐藏==<br/>`first:首页显示`<br/>`odd:奇数页显示`<br/> `even:偶数页显示`<br/> `last:尾页显示`<br/>                     |
| axis           | `string`  | 拖拽方向 `v:竖向 h:横向`                                                                                      | ==按住 Shift 横向 拖动, Shift + Alt 竖向 拖动==                                                                                  |
| transform      | `number`  | 旋转角度                                                                                                      |                                                                                                                                  |
| zIndex         | `number`  | 元素层级                                                                                                      |                                                                                                                                  |
| upperCase      | `string`  | 转大小写                                                                                                      | `hinnn.toUpperCase('7',10.8) // 壹拾元捌角零分`                                                                                  |
