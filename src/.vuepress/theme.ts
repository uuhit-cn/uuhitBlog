import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

const IconMarkDown :string =
    '<svg t="1752471568693" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1023" width="28" height="28"><path d="M865.28 680.96c-10.24 51.2-30.72 87.04-46.08 112.64-5.12 5.12-15.36 20.48-20.48 25.6l-25.6 25.6c-25.6 20.48-56.32 35.84-107.52 51.2-61.44 15.36-122.88 20.48-153.6 20.48-30.72 0-92.16 0-153.6-20.48-46.08-10.24-81.92-30.72-107.52-51.2-5.12-5.12-20.48-15.36-25.6-25.6-10.24-5.12-20.48-20.48-20.48-25.6-15.36-25.6-35.84-61.44-46.08-112.64-15.36-66.56-15.36-133.12-15.36-168.96 0-35.84 0-97.28 15.36-168.96 10.24-51.2 25.6-87.04 46.08-112.64 0-5.12 10.24-20.48 20.48-25.6l25.6-25.6c20.48-20.48 56.32-35.84 107.52-51.2 61.44-15.36 122.88-20.48 153.6-20.48 30.72 0 92.16 0 153.6 20.48 46.08 10.24 81.92 30.72 107.52 51.2 5.12 5.12 20.48 15.36 25.6 25.6 10.24 5.12 20.48 20.48 20.48 25.6 15.36 25.6 35.84 61.44 46.08 112.64 15.36 66.56 15.36 133.12 15.36 168.96 5.12 35.84 0 97.28-15.36 168.96zM1024 512c0-199.68-56.32-317.44-143.36-394.24C778.24 25.6 655.36 0 512 0S245.76 25.6 143.36 117.76C56.32 194.56 0 312.32 0 512c0 199.68 56.32 317.44 143.36 394.24 102.4 92.16 225.28 117.76 368.64 117.76s266.24-25.6 368.64-117.76c87.04-76.8 143.36-194.56 143.36-394.24z" fill="#16A764" p-id="1024"></path><path d="M512 588.8h-35.84L384 450.56v240.64H307.2v-358.4h81.92l128 199.68 128-199.68H716.8v358.4h-76.8V450.56l-92.16 138.24H512z" fill="#16A764" p-id="1025"></path></svg>'

const Iconify :string =
    '<svg t="1752471459163" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="873" width="28" height="28"><path d="M0 0h1024v1024H0z" fill="#FFFFFF" p-id="874"></path><path d="M913.408 724.736H110.592a34.688 34.688 0 0 1-34.688-34.688V153.6a34.56 34.56 0 0 1 34.688-34.56h802.816a34.56 34.56 0 0 1 34.688 34.56v536.448a34.688 34.688 0 0 1-34.688 34.688z m-768-69.248h733.44V187.776H145.152z" fill="#0082FD" p-id="875"></path><path d="M477.44 685.696h69.248v158.72H477.44z" fill="#0082FD" p-id="876"></path><path d="M788.48 433.792l-19.84-38.4-100.224 51.2a102.4 102.4 0 0 0-7.808-8.96A99.456 99.456 0 0 0 524.8 433.408l-47.232-47.232a99.456 99.456 0 1 0-184.576 12.8l-84.992 43.904 19.84 38.4 92.16-48a99.584 99.584 0 0 0 133.248-6.912l1.536-1.792L499.2 468.736A99.456 99.456 0 1 0 687.104 486.4z m-439.04-44.16a47.616 47.616 0 1 1 67.328 0 47.488 47.488 0 0 1-67.328 0z m274.432 152.448a47.616 47.616 0 1 1 0-67.328 47.616 47.616 0 0 1 0 67.328z" fill="#ABE3FF" p-id="877"></path><path d="M728.448 836.352v69.248h-432.64v-69.248z" fill="#0082FD" p-id="878"></path></svg>'

export default hopeTheme({
  hostname: "https://uuhit-cn.github.io",

  pageInfo: false,   // uuhit ，全局禁用 页面信息 小标签

  exclude: ["/demo/**"],

  author: {
    name: "雨冬海",
    url: "https://uuhit-cn.github.io/uuhitBlog/zh/",
  },

  logo: "/taijibig.png",

  repo: "uuhit-cn/uuhitBlog",

  docsDir: "src",

  blog: {
    medias: {
      Baidu: "https://www.baidu.com",
      Iconify: {
        icon: Iconify,
        link: "https://icon-sets.iconify.design/",
      },
      MarkdownDemo: {
        icon: IconMarkDown,
        link: "https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html",
      },
      Email: "mailto:info@example.com",
      Gitee: "https://gitee.com/",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press/zh/guide/",
      },
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "活蹦乱跳",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "活蹦乱跳",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
      "/zh/demo/encrypt.html": {
        hint: "Password: 1234",
        password: "1234",
      },
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    comment: {
      provider: "Waline",
      serverURL: "http://123.56.77.238:38360",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    icon: {
      prefix: "fa6-solid:",
    },
    
    // uuhit ，搜索框
    search: {
      // ...
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
