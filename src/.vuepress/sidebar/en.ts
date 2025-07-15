import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
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
          children: [
            { text: "Java1", icon: "pen-to-square", link: "1" },
            { text: "Java2", icon: "pen-to-square", link: "2" },
            "3",
          ],
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
      text: "Photo",
      icon: "laptop-code",
      prefix: "photo/",
      link: "photo/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
