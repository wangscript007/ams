(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1e3:function(e,t,o){"use strict";o.r(t);var a=o(243),i={defaultCard:{type:"card",style:{width:"600px",margin:"20px auto"},options:{headerTitle:"卡片标题"},operations:{viewMore:{type:"button",label:"操作按钮",props:{type:"mini"}}},actions:{viewMore:function(){alert("你点击了操作按钮！")}},blocks:{emptyCardText:{type:"component",options:{is:"div",text:"我是自定义内容！我是自定义内容！我是自定义内容"}}}},simpleCard:{type:"card",style:{width:"600px",margin:"20px auto"},props:{shadow:"hover"},blocks:{simpleCardText:{type:"component",options:{is:"div",html:"<p>我是自定义内容！</p><p>我是自定义内容！</p><p>我是自定义内容</p>"}}}},scheduleBlock:{type:"card",style:{width:"90%",margin:"20px auto"},operations:{viewMore:{type:"button",label:"库存预警"}},actions:{viewMore:function(){alert("你点击了操作按钮！")}},blocks:{emptyCardText2:{type:"title",options:{title:"标题类型的主标题",subTitle:"右边有个操作按钮喔"},slot:"header"},scheduleContent:{type:"chart",style:{width:"480px",height:"480px",margin:"20px auto 0"},resource:{api:{prefix:"https://www.easy-mock.com/mock/5bf25b2b34392218c898a5fd/",read:"read"}},data:{legend:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎"],xAxis:["周二","周二","周二","周四","周五","周六","周日"],series:[{value:335,name:"直接访问"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1548,name:"搜索引擎"}]},options:{BASE:"PIE",series:[{name:"访问来源",type:"pie",radius:["50%","70%"],data:"data.series"}]},events:{init:"@read"}}}}},s=o(262),n=o.n(s),c=o(260),l=o.n(c),d={mixins:[a.a],mounted:function(){var e=n()(i[this.blockName]);this.configCode=l()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,i[this.blockName]),this.init=!0)}},r=o(13),p=Object(r.a)(d,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?o("ams-block",{attrs:{name:e.blockName}}):e._e(),e._v(" "),o("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[o("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),o("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[o("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);t.default=p.exports},237:function(e,t,o){"use strict";var a=o(0),i=(o(245),o(242)),s=o.n(i),n=o(238),c=o.n(n),l=o(251),d=o(246),r=o.n(d),p=(o(247),o(248)),u=o.n(p),m=o(249),f=o.n(m),h=o(250),g=o.n(h);a.default.use(s.a),a.default.use(c.a),console.log("ams init config"),a.default.use(u.a),a.default.use(f.a),a.default.use(g.a),"undefined"!=typeof window&&(window.Vue=a.default),a.default.use(l.a,{languages:{javascript:r.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},243:function(e,t,o){"use strict";o(237);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);