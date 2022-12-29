import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    {
      text: "使用指南",
      children: [
        {
          text: "介绍",
          prefix: "guide/",
          link: "guide/intro",
        },
        {
          text: "快速上手",
          prefix: "guide/",
          link: "guide/",
        },
        {
          text: "优化概览",
          prefix: "guide/",
          link: "guide/overview",
        },
      ],
    },
    // {
    //   text: "快速上手",
    //   // collapsable: false, // 折叠
    //   prefix: "guide/",
    //   link: "guide/",
    //   // children: "structure",
    // },
    // {
    //   text: "markdown使用示例",
    //   icon: "creative",
    //   prefix: "guide/",
    //   link: "guide/markdown",
    //   // children: "structure",
    // },
    // "slides",
  ],
});
