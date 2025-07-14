import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      link: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
  "/demo/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/codes/": [
    "",
    {
      text: "Codes",
      icon: "laptop-code",
      children: "structure",
    },
  ],
  "/photo/": [
    "",
    {
      text: "Photo",
      icon: "laptop-code",
      children: "structure",
    },
  ],
});
