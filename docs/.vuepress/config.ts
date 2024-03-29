import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/sv-print-docs/",
  port: 9981,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "sv-print",
      description: "使用svelte开发的打印设计器组件(基于hiprint)",
    },
    // "/en": {
    //   lang: "en-US",
    //   title: "sv-print",
    //   description: "Print designer developed by svelte (based on hiprint)",
    // },
  },

  theme,

  plugins: [
    sitemapPlugin({
      hostname: "https://ccsimple.github.io/sv-print-docs/",
    }),
    docsearchPlugin({
      appId: "EK98MFQYBD",
      apiKey: "591323234172ec0d4b26c7e21754c7e9",
      indexName: "sv-print",
      locales: {
        "/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
        // "/en": {
        //   placeholder: "Search Docs",
        //   translations: {
        //     button: {
        //       buttonText: "Search Docs",
        //     },
        //   },
        // },
      },
    }),
  ],
});
