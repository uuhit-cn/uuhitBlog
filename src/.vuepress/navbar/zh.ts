import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "Codes",
    icon: "pen-to-square",
    prefix: "/codes/",
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
          { text: "PS1", icon: "pen-to-square", link: "1" },
        ],
      },
      {
        text: "Video",
        icon: "pen-to-square",
        prefix: "video/",
        children: [
          {
            text: "Video 1",
            icon: "pen-to-square",
            link: "1",
          },
        ],
      },
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
