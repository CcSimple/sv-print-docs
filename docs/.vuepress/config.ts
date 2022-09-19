import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/sv-print-docs/",
  port: 9981,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "sv-print",
      description: "使用svelte开发的打印设计器(基于hiprint)",
    },
    "/en": {
      lang: "en-US",
      title: "sv-print",
      description: "Print designer developed by svelte (based on hiprint)",
    },
  },

  theme,

  plugins: [
    docsearchPlugin({
      appId: "",
      apiKey: "",
      indexName: "sv-print",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
            },
          },
        },
        "/en": {
          placeholder: "Search Docs",
          translations: {
            button: {
              buttonText: "Search Docs",
            },
          },
        },
      },
    }),
  ],
});
