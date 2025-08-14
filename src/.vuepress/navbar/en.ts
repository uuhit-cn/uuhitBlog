import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "IT",
    icon: "pen-to-square",
    prefix: "/it/",
    children: [
      {
        text: "Java",
        icon: "pen-to-square",
        prefix: "java/",
        children: [
        ],
      },
      {
        text: "VBA",
        icon: "pen-to-square",
        prefix: "vba/",
        children: [
        ],
      },
      { text: "docker容器中的前端访问后端容器的几种方式", icon: "pen-to-square", link: "docker容器中的前端访问后端容器的几种方式" },
      // "d",
      // "markdownshow",
    ],
  },
  {
    text: "Photo",
    icon: "pen-to-square",
    prefix: "/photo/",
    children: [
      {
        text: "Photo",
        icon: "pen-to-square",
        prefix: "ps/",
        children: [
        ],
      },
      {
        text: "Video",
        icon: "pen-to-square",
        prefix: "video/",
        children: [
        ],
      },
    ],
  },
  "/notes/",
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
