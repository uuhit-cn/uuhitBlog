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
    {
      text: "Codes",
      icon: "laptop-code",
      prefix: "codes/",
      link: "codes/",
      children: "structure",
    },
    {
      text: "Photo",
      icon: "laptop-code",
      prefix: "photo/",
      link: "photo/",
      children: "structure",
    },
    "intro",
  ],
  "/demo/": [
    "",
    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   children: "structure",
    // },
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/plugins/markdown/revealjs/demo.html",
    },
  ],
});
