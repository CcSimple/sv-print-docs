---
title: 介绍
category:
  - 插件
---

### 关于插件

sv-print 插件是结合 hiprint 底层逻辑。使用 hook 实现的简单插件机。目前提供的 hook 有限。支持如下:

::: tip 温馨提示

部分 hook 回调的参数不太好 翻译 它的具体作用。请 log 查看。

:::

| hook                 | 说明                                                    | 回调参数                                                                               | 备注                                          |
| -------------------- | ------------------------------------------------------- | -------------------------------------------------------------------------------------- | --------------------------------------------- |
| init                 | `hiprint.register` 时的 hook                            | `Config`<br/>`OptionItems`<br/>`ElementTypes`<br/>`hinnn`<br/>`hiprint`                | 可实现自定义参数                              |
| ready                | `$(document).ready` 时的 hook                           | `p`<br/>`window`<br/>                                                                  | `ready` 时处理                                |
| documentShortcutKeys | `全局快捷键` hook                                       | `panel`<br/>`event`<br/>                                                               | 自定义全局快捷键<br/> 如:`Ctrl + 1`           |
| shortcutKeys         | `面板快捷键` hook<br>==当设计面板获取到焦点时的快捷键== | `panel`<br/>`event`<br/>                                                               | 如:`Ctrl + B` 将选中元素 字体加粗             |
| createPrintElement   | `创建元素` hook                                         | `Config`<br/>`BasePrintElement`<br/>`Options`<br/>`Supper`<br/>`ele`<br/>`eleOpt`<br/> | 配合`init、beforePrint`等 hook 自定义新的元素 |
| beforePrint          | `浏览器打印前` hook<br> 处理新元素 `打印样式`           | `template`<br/>`info`<br/>`opts`<br/>                                                  | ==返回该 3 个参数==                           |
| beforePrint2         | `直接打印前` hook<br/> 处理新元素 `打印样式`            | `template`<br/>`info`<br/>                                                             | ==返回该 2 个参数==                           |

### 示例

实现新增一个 ==缩放== 参数。

```ts
import type { PluginOptions } from "sv-print";

// hook 函数
const scale = ({ Config, OptionItems, hinnn, hiprint, name }) => {
  Config.registerItems([
    (function () {
      function t() {
        // json模板 options 对应键值
        this.name = "scale";
      }
      return (
        (t.prototype.css = function (t, e) {
          // t: 元素对象， e 参数值
          if (t && t.length) {
            if (e) return t.css("transform", "scale(" + e + ")");
          }
          return null;
        }),
        (t.prototype.createTarget = function (t, i, e) {
          //  t: 元素对象，i: 元素options, e: 元素printElementType
          return (
            (this.target = globalThis.$(
              `<div class="hiprint-option-item">\n        <div class="hiprint-option-item-label">\n        ${
                name ? name : "缩放"
              }\n        </div>\n        <div class="hiprint-option-item-field">\n        <input type="number" class="auto-submit"/>\n        </div>\n    </div>`
            )),
            this.target
          );
        }),
        (t.prototype.getValue = function () {
          var t = this.target.find("input").val();
          if (t) return parseFloat(t.toString());
        }),
        (t.prototype.setValue = function (t) {
          //  t: options 对应键的值
          this.target.find("input").val(t);
        }),
        (t.prototype.destroy = function () {
          this.target.remove();
        }),
        t
      );
    })(),
  ]);
  // transform 位置 idx
  let idx = Config.text.supportOptions.findIndex((o) => o.name === "transform");
  // 将 scale 插入到 transform 位置后面
  idx >= 0 &&
    Config.text.supportOptions.splice(idx + 1, 0, {
      name: "scale",
      hidden: false,
    });
  // 这里是 tabs 分组 的处理。 同上
  const tabIndex = Config.text.tabs.findIndex((t) => t.name === "样式");
  tabIndex >= 0 && (idx = Config.text.tabs[tabIndex].options.findIndex((o) => o.name === "transform"));
  idx &&
    Config.text.tabs[tabIndex].options.splice(idx + 1, 0, {
      name: "scale",
      hidden: false,
    });
};
// 这是才是插件 hooks 的实例
// 可自定义插入的参数
export default function (config?: any): PluginOptions {
  let configs = {
    ...config,
  };
  return {
    name: "scale",
    description: "「text」元素 缩放参数",
    hooks: [
      // 接受多个 hook 组合
      {
        hook: "init", // 这是 hook 关键
        name: "scale", // 名称(可选) 暂时没用到这个
        description: "testF", // 描述(可选) 暂时没用到这个
        priority: 1, // 排序优先级 (可选) 暂时没用到这个
        // hook
        run: (opts) => scale({ ...opts, ...configs }),
      },
    ],
    leastHiprintVersion: "0.1.0",
  };
}
```
