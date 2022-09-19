import { sidebar } from "vuepress-theme-hope";

export const en = sidebar({
  "/en": [
    {
      icon: "creative",
      text: "Guide",
      prefix: "guide/",
      children: ["install"],
    },
    {
      text: "markdown",
      icon: "creative",
      prefix: "guide/",
      link: "guide/markdown",
      // children: "structure",
    },
    "slides",
  ],
});
