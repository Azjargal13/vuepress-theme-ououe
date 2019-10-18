(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{66:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"如何使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何使用"}},[t._v("#")]),t._v(" 如何使用")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-theme-ououe\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vuepress-theme-ououe\n")])])]),a("h2",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress -> config.js")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ououe'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"建议目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建议目录结构"}},[t._v("#")]),t._v(" 建议目录结构")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("+- blog\n  +- .vuepress\n    +- config.js\n  +- posts\n    +- test.md\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n  +- about\n    +- index.md "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#(or README.md)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("strong",[t._v("你不需要在文件夹的目录下创建 "),a("code",[t._v("README.md(or index.md)")]),t._v("，因为这个页面将被自动生成用来展示当前目录下博客的分页数据")])]),t._v(" "),a("p",[a("strong",[t._v("如果你不需要展示文件夹下的分页数据，例如 "),a("code",[t._v("about")]),t._v(" 你需要配置 "),a("code",[t._v("layout")])])]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- about -> index.md --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("layout: Page\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"配置-frontmatter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-frontmatter"}},[t._v("#")]),t._v(" 配置 frontmatter")]),t._v(" "),a("div",{staticClass:"language-md extra-class"},[a("pre",{pre:!0,attrs:{class:"language-md"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- posts -> XXX.md --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hr punctuation"}},[t._v("---")]),t._v("\ntitle: How to use\ndisplay: home\nimage: ...\ndate: 2019-02-22\ntags:\n  "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" vuepress\n  "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" vuepress-themt-ououe\ncategories: \n  "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" blog\n  "),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" theme\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- or --\x3e")]),t._v("\ntag: vuepress\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[t._v("category: blog\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v(" \n")])])]),a("h3",{attrs:{id:"display"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#display"}},[t._v("#")]),t._v(" display")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("可省略")])]),t._v(" "),a("p",[t._v("支持 "),a("code",[t._v("home")]),t._v(" 或者 "),a("code",[t._v("none")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("display: home")]),t._v(" 时，当前文章将会主页的列表中显示")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("display: none")]),t._v(" 时，当前文章将不会显示在任何列表中，但你仍然可以通过正确的路由来访问它")])]),t._v(" "),a("h3",{attrs:{id:"image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#image"}},[t._v("#")]),t._v(" image")]),t._v(" "),a("ul",[a("li",[t._v("类型: "),a("code",[t._v("string")])]),t._v(" "),a("li",[t._v("默认值: "),a("code",[t._v("''")])])]),t._v(" "),a("p",[t._v("显示在列表和文章背景中的图片")]),t._v(" "),a("h2",{attrs:{id:"修改样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改样式"}},[t._v("#")]),t._v(" 修改样式")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("+- blog\n  +- .vuepress\n    +- styles\n      +- palette.styl\n      +- index.styl\n")])])]),a("ul",[a("li",[t._v("你应该将自定义样式写到 "),a("code",[t._v("index.styl")]),t._v(" 里面")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("palette.styl")]),t._v(" 文件主题的颜色参数，参考 "),a("a",{attrs:{href:"https://github.com/tolking/vuepress-theme-ououe/blob/master/styles/palette.styl",target:"_blank",rel:"noopener noreferrer"}},[t._v("default preset"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("code",[t._v("$accentColor")]),t._v(" 与 "),a("code",[t._v("$accentDarkColor")]),t._v(" 最好一起被修改")])])])}),[],!1,null,null,null);s.default=n.exports}}]);