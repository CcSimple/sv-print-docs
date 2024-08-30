import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  { text: "首页", icon: "home", link: "/" },
  { text: "介绍", icon: "blog", link: "/guide/intro" },
  { text: "快速上手", icon: "edit", link: "/guide/" },
  { text: "sv-print组件使用", icon: "type", link: "/sv-print/start" },
  { text: "hiprint使用", icon: "blog", link: "/config/start" },
  { text: "插件", icon: "config", link: "/plugin/intro" },
  { text: "在线案例", icon: "launch", link: "https://ccsimple.github.io/sv-print-demo/" },
  // {
  //   text: "Theme Docs",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/",
  // },
]);
