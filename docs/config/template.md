---
title: 模板
category:
  - 模板&元素
---

### 模板对象

模板对象核心对象。创建它的实例，以实现`浏览器打印`，`直接打印/绕过浏览器弹窗打印`([直接打印机客户端](https://gitee.com/CcSimple/electron-hiprint))，`“打印设计”`，`“打印预览”`和`“导出PDF”`的功能

```js
// 新建模板 参数见下方表格
let hiprintTemplate = new hiprint.PrintTemplate(options);
// 将模板设计到指定容器中
// '#hiprint-printTemplate' ==> jQuery('#hiprint-printTemplate') ==> $('#hiprint-printTemplate')
hiprintTemplate.design("#hiprint-printTemplate");
// 打印数据,仅 “打印预览/浏览器打印/直接打印/导出PDF 时才会处理。
// 其中 “text” 是一个元素的 “字段名(field)”
let printData = { text: "这是打印时显示的文本" };
// 打印预览 --> 返回实际打印的 html 内容
hiprintTemplate.getHtml(printData);
// 浏览器打印 --> 需要用户 手动 点击打印按钮 !!! “无法监听“ 用户是否点了打印
hiprintTemplate.print(printData);
// 直接打印 --> 有回调是否将“打印任务” “发生成功” 给打印机
hiprintTemplate.print2(printData, { printer: "打印机名称", title: "打印任务名称" });
// 导出PDF
hiprintTemplate.toPdf(printData, "pdf名称");
```

### 模板参数

| 名称                | 类型               | 说明                                                                              | 备注                                                                          |
| ------------------- | ------------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| template            | `json`             | 模板 json 数据                                                                    |                                                                               |
| settingContainer    | `string`           | 设置项对应的 html 容器                                                            | 如: `<div id="hiprint-printTemplate"/>`                                       |
| paginationContainer | `string`           | 多面板容器(需要在页面添加对应 div )                                               | 如: `<div class="hiprint-printPagination"/>`                                  |
| fields              | `array`            | fields 存在 元素字段则显示为下拉框显示 <br/> fields 不存在 元素字段则为输入框显示 | `此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源`             |
| onImageChooseClick  | `(target)=>{}` )   | 图片地址选择回调                                                                  | `target.refresh(url,options)`<br/> `target.getValue()`                        |
| fontList            | `array`            | 自定义下列选择的 字体列表                                                         | `hiprintTemplate.setFontList([])`<br/>或元素中设置<br/>`options.fontList: []` |
| dataMode            | `number`           | onDataChanged 返回 json 格式 1:getJson 其他：getJsonTid 默认 1                    |                                                                               |
| onDataChanged       | `(type, json)=>{}` | 模板发生改变时回调, 有些修改可能没有回调                                          | 新增、移动、删除、修改(参数调整)、大小、旋转等等                              |
| onUpdateError       | `(e)=>{}`          | hiprintTemplate.update(json) 更新失败时回调                                       | 撤销重做使用的就是 update                                                     |

### 模板常用 Api

| API            | 参数                    | 说明                                                                                                                                                                                                                                                               | 返回值                    | 备注                                                                                                        |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| getJson        | `无`                    | 返回 ==非配置版== 模板 json                                                                                                                                                                                                                                        | `json`                    | 参数较完整                                                                                                  |
| getJsonTid     | `无`                    | 返回 ==配置版== `(把一些参数存在 provider 中,所以需要先 init 对应 provider)` 模板 json                                                                                                                                                                             | `json`                    | 参数较少                                                                                                    |
| clear          | `无`                    | 清空模板                                                                                                                                                                                                                                                           | `无`                      |                                                                                                             |
| rotatePaper    | `无`                    | 旋转纸张 -> `宽 => 高;高 => 宽`                                                                                                                                                                                                                                    | `无`                      |                                                                                                             |
| getOrient      | `无`                    | 获取纸张方向                                                                                                                                                                                                                                                       | `1`--纵向 <br/> `2`--横向 |                                                                                                             |
| setPaper       | `width,height`          | 设置模板纸张大小<br/>`setPaper(210,297)`<br/> 内置纸张大小 ==只有 A1-A8 和 B1-B8==<br/>`setPaper('A4')`                                                                                                                                                            |                           |                                                                                                             |
| zoom           | `scaleValue,save`       | 缩放设计纸张<br/>`zoom(1.2)` <br/> 缩放并保存(==打印时也会缩放==)<br/>`zoom(1.2,true)`                                                                                                                                                                             |                           |                                                                                                             |
| design         | `string`                | 将模板渲染到指定容器中进行拖拽设计 <br/> `design("#hiprint-printTemplate")`                                                                                                                                                                                        | `无`                      | ==调用之前需要能够获取到对应 DOM 容器==                                                                     |
| update         | `json`                  | 根据 json 模板更新 <br/> `update(json)`                                                                                                                                                                                                                            | `无`                      | ==可能更新失败==可查看控制台 log                                                                            |
| setElsAlign    | `string`                | 设置多选元素 左对齐 <br/> `setElsAlign('left')`                                                                                                                                                                                                                    | `无`                      | `left/vertical/right/top/horizontal/bottom/distributeHor/distributeVer`                                     |
| setElsSpace    | `number,isHor`          | 设置多选元素 垂直间距 10 <br/> `setElsSpace(10)` <br/> 水平间距 10 <br/> `setElsSpace(10,true)`                                                                                                                                                                    | `无`                      |                                                                                                             |
| updateOption   | `key,value`             | 设置多选元素的 字体大小 12 <br/> `updateOption('fontSize',12)` <br/> 字体加粗 <br/> `updateOption('fontWeight', 'bolder');`                                                                                                                                        | `无`                      | 支持的参数在控制台输入 `window.HIPRINT_CONFIG` 查看 <br/> 如: `window.HIPRINT_CONFIG.text.tabs[0].options`                                                         |
| getHtml        | `data,options,callback` | 获取打印 html <br/> `getHtml({})` <br/> 批量获取打印 html <br/> `getHtml([{},{}])` <br/> 定义打印左上偏移量 <br/> `getHtml(data,{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/>                                                                        | `html`                    | `paperNumberToggleInEven`<br/><br/>`leftOffset`<br/><br/>`topOffset`                                        |
| print          | `data,options`          | 浏览器打印<br/> `print({})`<br/>批量打印 <br/> `print([{},{},{},{}])`<br/> 定义打印左上偏移量 <br/> `print({},{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/> 浏览器打印回调 <br/> `print({},{},{callback:()=>{console.log('浏览器打印窗口已打开')}})` | `无`                      | `paperNumberToggleInEven`<br/><br/>`leftOffset`<br/><br/>`topOffset`                                        |
| print2         | `data,options`          | 浏览器打印<br/> `print2({})`<br/>批量打印 <br/> `print2([{},{},{},{}])`<br/> 定义打印左上偏移量 <br/> `print2({},{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/>                                                                                       | `无`                      | `paperNumberToggleInEven`<br/><br/>`leftOffset`<br/><br/>`topOffset`                                        |
| toPdf          | `data,fileName,options` | 导出 pdf <br/> `toPdf({},"测试导出")`<br/>导出参数==scale 越大 pdf 越清晰，文件越大 性能越差 默认 2==<br/>`toPdf({},"测试导出",{scale:4})`<br/> 定义打印左上偏移量 <br/> `print({},{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/>                     | `$.Deferred()`            | `scale`<br/><br/>`isDownload`                                                                               |
| getPrinterList | `无`                    | 返回 连接 ==打印客户端== 时获取到的打印机列表                                                                                                                                                                                                                      | `array`                   | 刷新获取打印机列表<br/>==这是异步的,需要已连接打印客户端== <br/> `hiprint.refreshPrinterList((list) => {})` |
| setFields      | `array`                 | 设置字段列表 <br/>`setFields([{field:'name',text:'名称'}])`                                                                                                                                                                                                        | `无`                      | ==此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源==                                         |
| setFontList    | `array`                 | 设置可选字体列表 <br/>`setFontList([{value:'SourceHanSansCN-Normal',title:'思源黑体'}])`                                                                                                                                                                           | `无`                      | ==需要本机已安装该字体==                                                                                    |
