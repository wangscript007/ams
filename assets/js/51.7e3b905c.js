(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1031:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("h2",{attrs:{id:"ams-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ams-是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" AMS 是什么")]),t._v(" "),a("p",[t._v("AMS 是 "),a("code",[t._v("Admin Materials System")]),t._v(" 的首字母缩写，意为管理后台物料系统，是通过JSON配置的形式来快速搭建管理后台的一整套解决方案。")]),t._v(" "),a("p",[t._v("AMS 目前提供以下能力：")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("@ams-team/ams")]),t._v(" 基础库，提供通过配置生成整个后台的能力，包含数据读取、数据展示、数据编辑、数据列表、数据校验等基本功能")]),t._v(" "),a("li",[t._v("通过 "),a("code",[t._v("@ams-team/cli")]),t._v(" 工具，提供快速搭建项目脚手架、编写定制模块、发布管理定制模块等功能。可前往查看"),a("router-link",{attrs:{to:"/api/custom.html"}},[t._v("编写定制物料>>")])],1)]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[t._v("AMS假设你已经对其依赖的"),a("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue前端框架"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://element.eleme.cn/#/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Element组件库"),a("OutboundLink")],1),t._v("有一定了解和开发经验。如果还没使用过它们，先去了解一下再来吧！")])]),t._v(" "),a("h1",{attrs:{id:"快速起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速起步","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速起步")]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"方式一：通过npm安装（依赖node环境）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式一：通过npm安装（依赖node环境）","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式一：通过npm安装（依赖node环境）")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i --save @ams-team/ams vue element-ui vue-router\n")])])]),a("p",[t._v("通过 Vue.use() 明确地安装ams功能：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("import")]),t._v(" ams from "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ams-team/ams'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nVue.use"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("strong",[t._v("建议通过我们的"),a("router-link",{attrs:{to:"/api/cli.html"}},[t._v("cli工具")]),t._v("来创建一个AMS项目！")],1)]),t._v(" "),a("h3",{attrs:{id:"方式二：直接用-script-引入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方式二：直接用-script-引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 方式二：直接用 script 引入")]),t._v(" "),a("blockquote",[a("p",[t._v("注意，需要先引入"),a("code",[t._v("Vue.js")]),t._v("、"),a("code",[t._v("element-ui")]),t._v("的依赖")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Vue.js --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- element-ui --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/element-ui@2.9.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/element-ui@2.9.1/lib/theme-chalk/index.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入ams库 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/@ams-team/ams/lib/ams.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("尝试AMS的最简单的方式是使用"),a("a",{attrs:{href:"http://jsrun.net/sehKp/edit?utm_source=website",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSRUN上的官方入门Demo"),a("OutboundLink")],1),t._v("。你可以在浏览器新标签页中打开它，跟着例子学习一些基础用法。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("p",[t._v("AMS的核心思想是通过"),a("router-link",{attrs:{to:"/api/api.html#read：读取单条数据"}},[t._v("规范数据接口")]),t._v("的数据结构，再用类JSON的格式配置对应的 "),a("code",[t._v("区块")]),t._v(" 和 "),a("code",[t._v("资源")]),t._v("，即可渲染成有UI和数据交互的前端界面。")],1),t._v(" "),a("h3",{attrs:{id:"第一步，注册资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步，注册资源","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一步，注册资源")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demoRes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ”demoRes“为资源名")]),t._v("\n    api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        prefix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://easy-mock.com/mock/5a0023effbbb09615044cb82/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口前缀")]),t._v("\n        update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新表单数据，值为更新接口的path，和接口前缀组成最终请求的url")]),t._v("\n        read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'read'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取表单数据，值为读取接口的path")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fields"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段")]),t._v("\n        id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “id”为字段名")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字段类型")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'文本'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该字段显示在页面的文本标签")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        testRate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rate'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评分'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        testTextarea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'textarea'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'评语'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"第二步，注册区块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步，注册区块","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二步，注册区块")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("block")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “demo”为区块名")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'form'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 区块类型，“form”代表表单类型")]),t._v("\n    ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'edit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 状态，“edit”代表为可编辑")]),t._v("\n    resource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demoRes'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该区块挂载的资源")]),t._v("\n    operations"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作")]),t._v("\n        submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作触发的事件名")]),t._v("\n            type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'button'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作类型")]),t._v("\n            label"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'提交'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作按钮显示的文案")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    events"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件流")]),t._v("\n        init"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@read'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “read”是内置的读取数据操作")]),t._v("\n        submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@update'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “update”是内置的更新数据操作")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"第三步，渲染区块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步，渲染区块","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三步，渲染区块")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染名字为“demo”的区块")]),t._v("\nams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ClientOnly",[a("demo-start",{attrs:{blockName:"quickStart"}})],1),t._v(" "),a("p",[t._v("我们已经成功完成了第一个AMS应用的配置了，通过简单的配置，不需要写UI和复杂的逻辑代码，就可以搭建出具备了数据读取、数据展示、数据编辑等基本功能的表单页面。")]),t._v(" "),a("p",[t._v("点击查看 "),a("router-link",{attrs:{to:"/api/demo.html"}},[t._v("案例教程")]),t._v("，带你搭建一个包含菜单的完整AMS系统应用。")],1)],1)},[],!1,null,null,null);s.default=e.exports}}]);