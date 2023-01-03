---
title: 长文
category:
  - 模板&元素
---

### printElementType

::: info 温馨提示

==printElementType== 是设计 provider 时的重要参数。比如说 `tid` 和 `field` 参数

:::

| 名称       | 类型       | 说明                                                          | 备注                                      |
| ---------- | ---------- | ------------------------------------------------------------- | ----------------------------------------- |
| tid        | `string`   | 元素类型唯一标识                                              |                                           |
| title      | `string`   | 标题 <br/>`同 options 的 title`                               | `拖拽时就显示`<br/>==无法彻底删除==       |
| field      | `string`   | 字段名称 <br/>`同 options 的 field`                           | `优先级高于 options`<br/>==无法彻底删除== |
| data       | `string`   | 同==测试数据== <br/>`同 options 的 testData` ==需要先设置 field== | `优先级高于 options`<br/>==无法彻底删除== |
| formatter  | `function` | 格式化函数 <br/>`同 options 的 formatter`                     | `优先级高于 options`<br/>==无法彻底删除== |
| styler     | `function` | 样式函数 <br/>`同 options 的 styler`                          | `优先级高于 options`<br/>==无法彻底删除== |
| onRendered | `function` | 渲染完成回调 <br/>==只能放在 printElementType 中==            | ==设计时不会触发==                        |

### options

::: info 温馨提示

参数过多，可能没有罗列完整。跟多参数点击元素后，在==参数面板==中查看。<br/>`如果你是开发者，我相信你知道该怎么看`。

:::

| 名称 | 类型 | 说明 | 备注 |
| ---- | ---- | ---- | ---- |
