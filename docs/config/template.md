---
title: 模板
category:
  - 模板&元素
---

### 模板对象

模板核心对象。创建它的实例，以实现`浏览器打印`，`直接打印/绕过浏览器弹窗打印`([直接打印机客户端](https://gitee.com/CcSimple/electron-hiprint))，`“打印设计”`，`“打印预览”`和`“导出PDF”`的功能

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
// 浏览器批量打印 --> 生成的 html 页面越多 越容易造成浏览器卡死
// 打印3份
hiprintTemplate.print([printData1 printData2, printData3]);

// 直接打印 --> 有回调是否将“打印任务” “发生成功” 给打印机
hiprintTemplate.print2(printData, { printer: "打印机名称", title: "打印任务名称" });
// 直接批量打印 --> 同 print 批量打印 页面越多 越容易造成浏览器卡死
// 直接打印3份
hiprintTemplate.print2([printData1 printData2, printData3]);

// 导出PDF
hiprintTemplate.toPdf(printData, "pdf名称");
// 批量导出PDF --> 同 print 批量打印 页面越多 越容易造成浏览器卡死
// 导出3份
hiprintTemplate.toPdf([printData1 printData2, printData3], "pdf名称");
```

### 自定义设计使用示例

::: tip 注意

这里是使用 [核心包 @sv-print/hiprint](https://www.npmjs.com/package/@sv-print/hiprint) 的示例。是没有组件的方式。适用于想自定义 UI 的开发者。

:::

```vue
<template>
  <!-- 这是 "可拖拽元素" 容器 拖拽它到 "拖拽设计器" 进行设计 -->
  <!-- !!! "可拖拽元素" 有两种 方式 !!! -->
  <div title="这是方式1,完全自定义元素样式" class="hiprintEpContainer">
    <!-- 必须包含 "ep-draggable-item" class -->
    <!-- defaultModule.text ==> provider 中 对应的 tid -->
    <a class="ep-draggable-item" tid="defaultModule.text">
      <p>文本</p>
    </a>
  </div>
  <div title="这是方式2,仅显示自定义元素的标题" class="hiprintEpContainer2"></div>
  <!-- 这是 "多面板" 容器 点击切换面板 -->
  <div class="hiprint-printPagination"></div>
  <!-- 这是 "拖拽设计器" 容器 -->
  <div id="hiprint-printTemplate"></div>
  <!-- 这是 "元素参数设置" 容器 -->
  <div id="PrintElementOptionSetting"></div>
</template>

<script>
// <!--【必须】在index.html 文件中添加打印所需样式(此cdn可能不稳定):-->
// <link rel="stylesheet" type="text/css" media="print" href="https://cdn.jsdelivr.net/npm/@sv-print/hiprint@latest/dist/print-lock.css">
// <!-- 可以调整成 相对链接/自有链接, 【重要】名称需要一致 【print-lock.css】-->
// <link rel="stylesheet" type="text/css" media="print" href="/print-lock.css">

// defaultElementTypeProvider -> 默认 provider ==> 可拖拽元素提供者 【关键信息 可拖拽元素唯一标识 "tid"】
// "可拖拽元素" 方式1 就需要用到这个 "tid"
import { hiprint, defaultElementTypeProvider } from "@sv-print/hiprint";

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
      // 初始化 provider , 才能让 "可拖拽元素" 可正常拖拽 【因为要先去处理 provider 中的 "tid"】
      hiprint.init({
        providers: [new defaultElementTypeProvider()],
      });
      // 渲染 "可拖拽元素" 方式1, 包含 "tid" 元素 class 必须包含 "ep-draggable-item"
      hiprint.PrintElementTypeManager.buildByHtml($(".ep-draggable-item"));
      // 渲染 "可拖拽元素" 方式2, 指定 "可拖拽元素" 容器
      $('.hiprintEpContainer2').empty() // // 有时可能是第二次进入此页面, 所以需要先清空 "可拖拽元素" 容器
      // hiprintEpContainer2 => "可拖拽元素" 容器
      // defaultModule => provider 对应的 ElementTypes --> context.addPrintElementTypes("defaultModule",[])
      // 有时如果你发现你页面出现重复的 "可拖拽元素" 元素, 那么你需要 先移除"旧"的 ElementTypes --> context.removePrintElementTypes("defaultModule");
      hiprint.PrintElementTypeManager.build('.hiprintEpContainer2', "defaultModule");
      // 有时可能是第二次进入此页面, 所以需要先清空 "拖拽设计器" 容器
      $("#hiprint-printTemplate").empty();
      // 创建模板对象
      this.hiprintTemplate = new hiprint.PrintTemplate({
        // "初始模板 json"
        template: {},
        // "元素参数设置" 容器
        settingContainer: "#PrintElementOptionSetting",
        // "多面板" 容器
        // 实现多面板， 需要在页面添加一个 <div class="hiprint-printPagination"/>
        // 不添加, 可不用下方代码, 如果没有对应 容器 写了也没用
        paginationContainer: ".hiprint-printPagination",
      });
      // 将模板渲染到 "拖拽设计器" 容器 中
      this.hiprintTemplate.design("#hiprint-printTemplate");
      // 如果你只想打印, 那么 创建模板 对象 参数只需要 "初始模板 json" 然后调用 print/print2 即可
      // let printData = { text: "这是打印时显示的文本" };
      // this.hiprintTemplate.print(printData)
    },
  },
};
</script>
```

### 模板参数

| 名称                | 类型               | 说明                                                                              | 备注                                                                          |
| ------------------- | ------------------ | --------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| template            | `json`             | 模板 json 数据                                                                    |                                                                               |
| settingContainer    | `string`           | 设置项对应的 html 容器                                                            | 如: `<div id="PrintElementOptionSetting"/>`                                   |
| paginationContainer | `string`           | 多面板容器(需要在页面添加对应 div )                                               | 如: `<div class="hiprint-printPagination"/>`                                  |
| fields              | `array`            | fields 存在 元素字段则显示为下拉框显示 <br/> fields 不存在 元素字段则为输入框显示 | `此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源`             |
| onImageChooseClick  | `(target)=>{}` )   | 图片地址选择回调                                                                  | `target.refresh(url,options)`<br/> `target.getValue()`                        |
| fontList            | `array`            | 自定义下列选择的 字体列表                                                         | `hiprintTemplate.setFontList([])`<br/>或元素中设置<br/>`options.fontList: []` |
| dataMode            | `number`           | onDataChanged 返回 json 格式 1:getJson 其他：getJsonTid 默认 1                    |                                                                               |
| onDataChanged       | `(type, json)=>{}` | 模板发生改变时回调, 有些修改可能没有回调                                          | 新增、移动、删除、修改(参数调整)、大小、旋转等等                              |
| onUpdateError       | `(e)=>{}`          | hiprintTemplate.update(json) 更新失败时回调                                       | 撤销重做使用的就是 update                                                     |

### 常用 Api

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
| updateOption   | `key,value`             | 设置多选元素的 字体大小 12 <br/> `updateOption('fontSize',12)` <br/> 字体加粗 <br/> `updateOption('fontWeight', 'bolder');`                                                                                                                                        | `无`                      | 支持的参数在控制台输入 `window.HIPRINT_CONFIG` 查看 <br/> 如: `window.HIPRINT_CONFIG.text.tabs[0].options`  |
| getHtml        | `data,options,callback` | 获取打印 html <br/> `getHtml({})` <br/> 批量获取打印 html <br/> `getHtml([{},{}])` <br/> 定义打印左上偏移量 <br/> `getHtml(data,{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/>                                                                        | `html`                    | `paperNumberToggleInEven`<br/><br/>`leftOffset`<br/><br/>`topOffset`                                        |
| print          | `data,options`          | 浏览器打印<br/> `print({})`<br/>批量打印 <br/> `print([{},{},{},{}])`<br/> 定义打印左上偏移量 <br/> `print({},{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/> 浏览器打印回调 <br/> `print({},{},{callback:()=>{console.log('浏览器打印窗口已打开')}})` | `无`                      | `paperNumberToggleInEven`<br/><br/>`leftOffset`<br/><br/>`topOffset`                                        |
| print2         | `data,options`          | 直接打印<br/> `print2({})`<br/>批量打印 <br/> `print2([{},{},{},{}])`<br/> 定义打印左上偏移量 <br/> `print2({},{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/>                                                                                       | `无`                      | `paperNumberToggleInEven`<br/><br/>`leftOffset`<br/><br/>`topOffset`                                        |
| on             | `eventName,callback`    | ==直接打印==回调<br/>打印成功<br/>`on('printSuccess', function (data) { })` <br/>打印失败<br/>`on('printError', function (data) { })`                                                                                                                              | `无`                      |                                                                                                             |
| toPdf          | `data,fileName,options` | 导出 pdf <br/> `toPdf({},"测试导出")`<br/>导出参数==scale 越大 pdf 越清晰，文件越大 性能越差 默认 2==<br/>`toPdf({},"测试导出",{scale:4})`<br/> 定义打印左上偏移量 <br/> `print({},{leftOffset:-1,topOffset:-1 })`==将覆盖面板偏移设置== <br/>                     | `$.Deferred()`            | `scale`<br/><br/>`isDownload`                                                                               |
| getPrinterList | `无`                    | 返回 连接 ==打印客户端== 时获取到的打印机列表                                                                                                                                                                                                                      | `array`                   | 刷新获取打印机列表<br/>==这是异步的,需要已连接打印客户端== <br/> `hiprint.refreshPrinterList((list) => {})` |
| setFields      | `array`                 | 设置字段列表 <br/>`setFields([{field:'name',text:'名称'}])`                                                                                                                                                                                                        | `无`                      | ==此处设置为全局设置元素字段数据源，优先级低于 元素类型设置数据源==                                         |
| setFontList    | `array`                 | 设置可选字体列表 <br/>`setFontList([{value:'SourceHanSansCN-Normal',title:'思源黑体'}])`                                                                                                                                                                           | `无`                      | ==需要本机已安装该字体==                                                                                    |

### 其他 Api

| API              | 参数                     | 说明                                                                                         | 返回值    | 备注                                      |
| ---------------- | ------------------------ | -------------------------------------------------------------------------------------------- | --------- | ----------------------------------------- |
| undo             | `无`                     | 撤销                                                                                         | `无`      |
| redo             | `无`                     | 重做                                                                                         | `无`      |
| copyJson         | `无`                     | 复制元素                                                                                     | `[元素]`  | ==仅 sv-print 支持==                      |
| cutJson          | `无`                     | 剪切元素                                                                                     | `无`      | ==仅 sv-print 支持==                      |
| canPaste         | `无`                     | 能否粘贴                                                                                     | `boolean` | ==仅 sv-print 支持==                      |
| getPrintStyle    | `index`                  | 获取打印打印样式<br/>`panels`对应下标, 默认 0                                                | `string`  | 查看打印样式是否正常`纸张大小`,`纸张方向` |
| getPaperType     | `index`                  | 获取打印纸张类型<br/>`panels`对应下标, 默认 0                                                | `string`  |                                           |
| addPrintPanel    | `options`                | 新增面板<br/>`addPrintPanel({ width: 100, height: 130, paperFooter: 340, paperHeader: 10 })` | `panel`   | 多面板操作                                |
| printByHtml      | `html`                   | 打印 html<br/>`printByHtml($('#Id').html())`                                                 | `无`      |                                           |
| getElementByName | `elementName,panelIndex` | 获取元素 `options.name == 'testName'` 的打印组件<br/>`getElementByName(testName)`            | `array`   | ==panelIndex==多面板的下标 默认 0         |
