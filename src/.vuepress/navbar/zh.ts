import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "IT",
    icon: "pen-to-square",
    prefix: "/zh/it/",
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
      { text: "Docker 前端容器 访问 后端容器 的几种路径", icon: "pen-to-square", link: "Docker 前端容器 访问 后端容器 的几种路径" },
      // "d",
      // "markdownshow",
    ],
  },
  {
    text: "摄影",
    icon: "pen-to-square",
    prefix: "/zh/photo/",
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
  "/zh/notes/",
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
