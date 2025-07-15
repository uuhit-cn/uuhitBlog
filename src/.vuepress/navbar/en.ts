import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  // "/demo/",
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
  "/notes/",
  // {
  //   text: "V2 Docs",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/",
  // },
]);
