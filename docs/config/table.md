---
title: 表格
category:
  - 模板&元素
---

### printElementType

::: info 温馨提示

==printElementType== 是设计 provider 时的重要参数。比如说 `tid` 和 `field` 参数

:::

| 名称                       | 类型           | 说明                                                                                                                                                                                                                     | 备注                                               |
| -------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| tid                        | `string`       | 元素类型唯一标识                                                                                                                                                                                                         |                                                    |
| title                      | `string`       | `可拖拽元素中`显示的名称                                                                                                                                                                                                 |                                                    |
| field                      | `string`       | 字段名称 <br/>`同 options 的 field`                                                                                                                                                                                      | `优先级高于 options`<br/>==无法彻底删除==          |
| data                       | `string`       | 同==测试数据==但参数列表不会显示 <br/>`同 options 的 testData` ==需要先设置 field==                                                                                                                                      | `优先级高于 options`<br/>==无法彻底删除==          |
| ==columns==                | `array<array>` | 表格列 `二维数组` -> `[[{},{}],[{},{}]]` <br/>==多行表头最下方的设置列 field== <br/>`同 options 的 columns`                                                                                                              | `优先级高于 options`<br/>==无法彻底删除==          |
| formatter                  | `function`     | 格式化函数 <br/>`同 options 的 formatter`                                                                                                                                                                                | `优先级高于 options`<br/>==无法彻底删除==          |
| styler                     | `function`     | 样式函数 <br/>`同 options 的 styler`                                                                                                                                                                                     | `优先级高于 options`<br/>==无法彻底删除==          |
| rowStyler                  | `function`     | 行样式函数 <br/>`同 options 的 rowStyler`                                                                                                                                                                                | `优先级高于 options`<br/>==无法彻底删除==          |
| footerFormatter            | `function`     | 表格脚格式化函数，定义分组尾部显示信息，可以放置写统计信息。 <br/>`options`<br/>`rows`<br/>`data`<br/>`currentPageGridRowsData`<br/><br/>`同 options 的 footerFormatter`                                                 | `优先级高于 footerFormatter`<br/>==无法彻底删除==  |
| gridColumnsFooterFormatter | `function`     | 多组表格脚格式化函数，定义分组尾部显示信息，可以放置写统计信息。<br/>`options`<br/>`rows`<br/>`data`<br/>`currentPageGridRowsData`<br/><br/>`同 options 的 gridColumnsFooterFormatter`                                   | `优先级高于 options`<br/>==无法彻底删除==          |
| groupFields                | `array`        | 数据的`分组字段`，该字段为数组，可以根据多列进行分组。<br/>如:`['name']`                                                                                                                                                 | ==参数列表中没有编辑项==<br/><br/>==无法彻底删除== |
| groupFormatter             | `function`     | 分组头格式化函数，定义分组显示信息，当 groupFields 数组长度为 1 是默认显示为字段值。<br/>`groupData：分组信息。`<br/>`options：打印元素的选项值。`<br/><br/>如:`function(group,option) {return "这里自定义统计脚信息";}` | ==参数列表中没有编辑项==<br/><br/>==无法彻底删除== |
| groupFooterFormatter       | `function`     | 分组脚格式化函数，定义分组尾部显示信息，可以放置写统计信息。<br/>`groupData：分组信息。`<br/>`options：打印元素的选项值。`<br/>                                                                                          | ==参数列表中没有编辑项==<br/><br/>==无法彻底删除== |
| onRendered                 | `function`     | 渲染完成回调 <br/>==只能放在 printElementType 中==                                                                                                                                                                       | ==设计时不会触发==                                 |

### columns

::: info 温馨提示

参数过多，可能没有罗列完整。更多参数点击元素后，在==参数面板==中查看。<br/>`如果你是开发者，我相信你知道该怎么看`。

:::

| 名称                  | 类型       | 说明                                                                                                                   | 备注                                                                |
| --------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| width                 | `number`   | 列宽 `可拖拽调整`                                                                                                      | ==宽度只是相对值 实际渲染会等比换算==                               |
| title                 | `string`   | 列标题 `姓名#name`                                                                                                     | ==`#`后面是字段名 field ==                                          |
| field                 | `string`   | 列字段名 <br/>`设置 fields 可下拉选择`                                                                                 | ==可在标题中编辑==                                                  |
| fixed                 | `boolean`  | 列宽度锁定 <br/>`渲染时不进行等比换算`                                                                                 |                                                                     |
| rowspan               | `number`   | 行合并 <br/>`同 html table td`                                                                                         |                                                                     |
| colspan               | `number`   | 列合并 <br/>`同 html table td`                                                                                         |                                                                     |
| align                 | `string`   | 左右对齐方式 <br/>`left、right、center`                                                                                |                                                                     |
| halign                | `string`   | ==表头==左右对齐方式 <br/>`left、right、center`                                                                        |                                                                     |
| formatter             | `function` | 单元格的格式化函数<br/>`value：字段的值`<br/>`row：行的记录数据`<br/>`index：行的索引`<br/>`options：打印元素的选项值` | 返回==文本/html==                                                   |
| renderFormatter       | `function` | 单元格的渲染函<br/>`value：字段的值`<br/>`row：行的记录数据`<br/>`index：行的索引`<br/>`options：打印元素的选项值`数   | 返回==文本/html==<br/><br> `当时SB了,现在发现和 formatter 功能一样` |
| styler                | `function` | 单元格的样式函<br/>`value：字段的值`<br/>`row：行的记录数据`<br/>`index：行的索引`<br/>`options：打印元素的选项值`数   | 返回==jQuery.css()可处理对象== <br> 如: `{color:'red'}`             |
| tableTextType         | `string`   | 单元格字段类型<br/>`text、barcode、image、qrcode、sequence、`<br/>对应为:`文本、条形码、图片、二维码、序号`            |                                                                     |
| tableColumnHeight     | `string`   | 特定单元格高度 ==二维码、条形码、图片才有效==                                                                          | 改变单元格高度,请设置 ==`options`的表体行高:tableBodyRowHeight==    |
| tableSummary          | `string`   | 底部聚合函数 <br/>`count:计数` <br/>`sum：合计` <br/>`avg：平均值`<br/>`max：最大值`<br/>`min：最小值`                 |
| tableSummaryTitle     | `string`   | 底部聚合函数标题 `'true','false'` `显示或隐藏`                                                                         |                                                                     |
| tableSummaryText      | `string`   | 底部聚合函数标题==自定义聚合函数前面的文本==                                                                           |                                                                     |
| tableSummaryAlign     | `string`   | 底部聚合函数对齐方式 `left、right、center`                                                                             |                                                                     |
| tableSummaryNumFormat | `number`   | 底部聚合函数==保留小数位==<br/>`默认 2`                                                                                |                                                                     |
| upperCase             | `string`   | 转大写 <br/>如:`7` 就会把 ==`10.8` 转换成 `壹拾元捌角零分`==                                                           |                                                                     |

### options

::: info 温馨提示

参数过多，可能没有罗列完整。更多参数点击元素后，在==参数面板==中查看。<br/>`如果你是开发者，我相信你知道该怎么看`。

:::

| 名称        | 类型     | 说明                            | 备注                                      |
| ----------- | -------- | ------------------------------- | ----------------------------------------- |
| field       | `string` | 字段名称                        | 可配置==tableFields==让字段名变成下列选择 |
| fields      | `array`  | ==列==字段名列表                | `[{"text":'姓名',"field":'name'}]`        |
| tableFields | `array`  | ==表格==字段名列表              | `[{"text":'姓名',"field":'name'}]`        |
| fontFamily  | `string` | 字体 `默认可继承面板设置的字体` | 默认`宋体`                                |
| fontSize    | `string` | 字体大小                        | 默认`9pt`                                 |
