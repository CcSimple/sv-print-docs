import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    {
      text: "快速上手",
      icon: "creative",
      // collapsable: false, // 折叠
      prefix: "guide/",
      link: "guide/",
      // children: "structure",
    },
    {
      text: "markdown使用示例",
      icon: "creative",
      prefix: "guide/",
      link: "guide/markdown",
      // children: "structure",
    },
    "slides",
  ],
});
