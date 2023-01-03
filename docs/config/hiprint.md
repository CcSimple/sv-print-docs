---
title: hiprint
category:
  - 模板&元素
---

::: tip 注意

这里的说的 ==hiprint== 是全局的对象。可以理解成是个 ==Module==。浏览器控制台输入 `hiprint` 即可查看。

:::

### 使用示例

```js
// 初始化 provider , 才能让 "可拖拽元素" 可正常拖拽 【因为要先去处理 provider 中的 "tid"】
hiprint.init({
  providers: [new defaultElementTypeProvider()],
});
// !!!【仅 sv-print 支持】
// 注册插件
import pluginScale from "@sv-print/plugin-scale";
hiprint.register({
  plugins: [pluginScale({ name: "缩放(自定义)" })],
});
// 调整配置
hiprint.setConfig(); // 还原配置
// 不显示 "宽高大小" 盒子 更多配置 可在浏览器控制台 输入 window.HIPRINT_CONFIG 查看。
hiprint.setConfig({
  showSizeBox: false,
});
// 创建模板对象 详见 "模板" 文档
let hiprintTemplate = new hiprint.PrintTemplate({ template: {} });
let hiprintTemplate2 = new hiprint.PrintTemplate({ template: {} });
// 打印数据
let printData = { text: "这是打印时显示的文本" };
// 多模板预览
hiprint.getHtml({
  templates: [
    { template: hiprintTemplate, data: printData },
    { template: hiprintTemplate2, data: printData },
  ],
});
// 多模板打印
hiprint.print({
  templates: [
    { template: hiprintTemplate, data: printData },
    { template: hiprintTemplate2, data: printData },
  ],
});
// 多模板直接打印
hiprint.print2(
  {
    templates: [
      { template: hiprintTemplate, data: printData, options: {} },
      { template: hiprintTemplate2, data: printData },
    ],
    options: { printer: "", landscape: true },
  },
  function (data) {
    console.log("printSuccess");
  },
  function (e) {
    console.log("printError");
  }
);
// 更新 "可拖拽元素" 属性
hiprint.updateElementType("defaultModule.text", (type) => {
  type.title = "这是更新后的元素";
  return type;
});
// 切换 直接 "打印客户端" 主机
hiprint.hiwebSocket.setHost("192.168.2.3:17521");
// 查看是否 已连接 "直接打印客户端"
hiprint.hiwebSocket.opened; // true 或 false
// 刷新获取 打印机列表 !! 需要已连接 "直接打印客户端"
hiprint.refreshPrinterList((list) => {
  console.log(list);
});
// 获取 MAC、IP 地址等 !! 需要已连接 "直接打印客户端"
// 参数格式：
// 1. 类型（ip、ipv6、mac、dns、all、interface、vboxnet）
// 2. 回调 data => {addr, e}  addr: 返回的数据 e:错误信息
// 3. 其他参数 ...args
hiprint.getAddress("mac", (data) => {
  console.log("mac");
  console.log(data);
});
hiprint.getAddress("ip", (data) => {
  console.log("ip");
  console.log(data);
});
// !!!【仅 sv-print 支持】
// 查看当前已加载的 ElementTypes --> provider
hiprint.ElementTypes.allElementTypes; // 所有 "可拖拽元素"
// 查看 context.addPrintElementTypes("defaultModule",[]) 的元素
// defaultModule 可以理解成 provider 的 key
hiprint.ElementTypes.defaultModule;
// 构建渲染 "可拖拽元素"
hiprint.PrintElementTypeManager.buildByHtml($(".ep-draggable-item")); // 方式 1,完全自定义元素样式
hiprint.PrintElementTypeManager.build(".hiprintEpContainer2", "defaultModule"); // 方式 2,仅显示分组和自定义元素的标题
```

### API

| 名称                    | 说明                            | 备注                                    |
| ----------------------- | ------------------------------- | --------------------------------------- |
| ElementTypes            | 查看"可拖拽元素"                | ==仅 sv-print 支持==                    |
| PrintElementTypeGroup   | "可拖拽元素"分组                |                                         |
| PrintElementTypeManager | "可拖拽元素"管理                | 构建"可拖拽元素"                        |
| init                    | 初始化`provider`                | ==重要==                                |
| PrintTemplate           | 创建模板对象                    | ==核心==                                |
| register                | 注册`插件`                      | ==仅 sv-print 支持==                    |
| setConfig               | 更新配置                        |                                         |
| updateElementType       | 更新"可拖拽元素"参数            |                                         |
| print                   | `多模板`浏览器打印              |                                         |
| print2                  | `多模板`直接打印                |                                         |
| getHtml                 | `多模板`预览                    |                                         |
| hiwebSocket             | `socket.io` 对象                | 直接打印、切换 直接 "打印客户端" 主机等 |
| refreshPrinterList      | 刷新获取打印机列表              |                                         |
| getAddress              | 获取 `MAC`、`IP` 地址等         | ==需要已连接 "直接打印客户端"==         |
| ippPrint                | `ipp`打印 <br/>==不稳定==       | ==需要已连接 "直接打印客户端"==         |
| ippRequest              | `ipp`自定义请求 <br/>==不稳定== | ==需要已连接 "直接打印客户端"==         |
