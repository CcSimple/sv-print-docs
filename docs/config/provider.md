---
title: provider
category:
  - 模板&元素
---

::: tip 提示

这里的说的 ==provider== 可以理解成 "可拖拽元素" 的提供者。浏览器控制台输入 `hiprint.ElementTypes` 即可查看。==仅 sv-print 支持查看 hiprint.ElementTypes==

:::

### 示例

```js
// 以 defaultElementTypeProvider 为例
export default function (hiprint) {
  // 这里可以理解成 返回了一个 带有 addElementTypes 的 可以传入 options 去实例化的对象。
  // 如: test.js 这里的 context, 是内部去传的。
  // let test = new test(options), test.addElementTypes(context);
  return function (options) {
    var addElementTypes = function (context) {
      // 移除 旧的 defaultModule "元素"类型, 以避免重复
      context.removePrintElementTypes("defaultModule");
      // 添加 defaultModule "元素"类型
      context.addPrintElementTypes("defaultModule", [
        // PrintElementTypeGroup 分组
        // 如果使用 hiprint.PrintElementTypeManager.build('.hiprintEpContainer2', "defaultModule") 这里会渲染这个 "常规" 分组名称
        new hiprint.PrintElementTypeGroup("常规", [
          {
            tid: "defaultModule.text", // 唯一 key
            type: "text", // 元素类型
            title: "文本", // 这里和 options 中的 title 一样。"拖拽时就显示" 优先级高于 options 的, "无法彻底删除"
            // field: 'text' // 这里和 options 中的 field 一样。优先级高于 options 的, "无法彻底删除"
            // data: "1111", // 这里和 options 中的 testData 一样。会有冲突, "无法彻底删除"
            options: {
              title: "文本2", // 标题, "拖进设计器才会显示"
              field: "text", // 字段名称
              testData: "123", // 测试数据
            },
          },
        ]),
        new hiprint.PrintElementTypeGroup("辅助", [
          {
            tid: "defaultModule.hline",
            title: "横线",
            type: "hline",
          },
        ]),
      ]);
    };
    return {
      addElementTypes: addElementTypes,
    };
  };
}
```
