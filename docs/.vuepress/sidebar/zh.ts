import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/": [
    {
      text: "使用指南",
      collapsible: true,
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
    {
      text: "模板&元素",
      collapsible: true,
      children: [
        {
          text: "hiprint",
          prefix: "config/",
          link: "config/hiprint",
        },
        {
          text: "provider",
          prefix: "config/",
          link: "config/provider",
        },
        {
          text: "模板",
          prefix: "config/",
          link: "config/template",
        },
        {
          text: "面板",
          prefix: "config/",
          link: "config/panel",
        },
        {
          text: "文本",
          prefix: "config/",
          link: "config/text",
        },
        {
          text: "图片",
          prefix: "config/",
          link: "config/image",
        },
        {
          text: "表格",
          prefix: "config/",
          link: "config/table",
        },
        {
          text: "长文",
          prefix: "config/",
          link: "config/longText",
        },
        {
          text: "html",
          prefix: "config/",
          link: "config/html",
        },
        {
          text: "横线",
          prefix: "config/",
          link: "config/hLine",
        },
        {
          text: "竖线",
          prefix: "config/",
          link: "config/vLine",
        },
        {
          text: "矩形",
          prefix: "config/",
          link: "config/rect",
        },
        {
          text: "椭圆",
          prefix: "config/",
          link: "config/oval",
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
