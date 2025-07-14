import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    {
      text: "代码",
      icon: "laptop-code",
      prefix: "codes/",
      link: "codes/",
      children: "structure",
    },
    {
      text: "摄影",
      icon: "laptop-code",
      prefix: "photo/",
      link: "photo/",
      children: "structure",
    },
    "intro",
  ],
  "/zh/demo/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
