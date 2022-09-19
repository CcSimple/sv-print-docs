import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/index.js";
import * as sidebar from "./sidebar/index.js";

export default hopeTheme({
  // 主题色
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },
  // 全屏按钮
  fullscreen: true,
  // sitemap 网站部署域名
  // hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",
  // 全局默认作者
  author: {
    name: "CcSimple",
    url: "https://github.com/CcSimple",
  },
  // 字体图标资源链接  iconfont / fontawesome
  iconAssets: "iconfont",
  // 左侧logo
  logo: "/logo.svg",
  // github 仓库
  repo: "CcSimple/vue-plugin-hiprint",
  // 布局 https://vuepress-theme-hope.github.io/v2/zh/config/frontmatter/layout.html#pageinfo
  pageInfo: ["Author", "Date", "Category", "Tag", "ReadingTime"],
  // 多语言
  locales: {
    "/": {
      navbar: navbar.zh,
      sidebar: sidebar.zh,
      footer: "sv-print",
      displayFooter: true,
    },
    "/en": {
      navbar: navbar.en,
      sidebar: sidebar.en,
      footer: "sv-print",
      displayFooter: true,
    },
  },
  // 加密
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/en/guide/encrypt.html": ["1234"],
    },
  },
  // 插件
  plugins: {
    // 博客：https://vuepress-theme-hope.github.io/v2/zh/config/plugins/blog.html
    blog: false,
    // 评论：https://vuepress-theme-hope.github.io/v2/comment/zh/config/
    comment: {
      // https://giscus.app/zh-CN
      provider: "Giscus",
      repo: "CcSimple/giscus-discussions",
      repoId: "R_kgDOIA34nQ",
      category: "Announcements",
      categoryId: "DIC_kwDOIA34nc4CRe6K",
    },
    // Markdown 增强功能
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
