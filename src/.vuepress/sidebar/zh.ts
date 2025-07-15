import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/zh/": [
    "",
    {
      text: "IT",
      icon: "laptop-code",
      prefix: "it/",
      link: "it/",
      children: [
        {
          text: "Java",
          icon: "pen-to-square",
          prefix: "java/",
          children:  "structure",
        },
        {
          text: "VBA",
          icon: "pen-to-square",
          prefix: "vba/",
          children: [
            {
              text: "VBA 1",
              icon: "pen-to-square",
              link: "1",
            },
          ],
        },
        { text: "C", icon: "pen-to-square", link: "c" },
        "d",
        "markdownshow",
      ],
    },
    {
      text: "摄影",
      icon: "laptop-code",
      prefix: "photo/",
      link: "photo/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
