(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1003:function(o,e,t){"use strict";t.r(e);var a=t(243),s={defaultCollapse:{type:"collapse",options:{defaultCollapseBlock1:'一致性 <i class="header-icon el-icon-info"></i>',defaultCollapseBlock2:"反馈"},data:{active:"defaultCollapseBlock1"},blocks:{defaultCollapseBlock1:{type:"component",options:{is:"p",text:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"}},defaultCollapseBlock2:{blocks:{block21:{type:"component",options:{is:"img"},style:{width:"100px",height:"100px",backgroundColor:"#007"},props:{src:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png"}},block22:{type:"component",options:{is:"h1",text:"我是文字"}}}}}},collapse2:{type:"collapse",options:{defaultCollapseBlock1:'一致性 <i class="header-icon el-icon-info"></i>',defaultCollapseBlock2:"效率",defaultCollapseBlock3:"反馈"},data:{active:"defaultCollapseBlock1"},props:{accordion:!0},blocks:{defaultCollapseBlock1:{type:"component",options:{is:"p",text:"与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。"}},defaultCollapseBlock2:{blocks:{block21:{type:"component",options:{is:"img"},style:{width:"100px",height:"100px",backgroundColor:"#007"},props:{src:"//b.appsimg.com/upload/vivaadmin/2018/11/07/69/1541579376290922128.png"}},block22:{type:"component",options:{is:"h1",text:"我是文字"}}}},defaultCollapseBlock3:{type:"component",options:{is:"div",html:"<p>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；在界面中一致：</p><p>所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</p>"}}}}},l=t(261),i=t.n(l),n=t(258),c=t.n(n),p={mixins:[a.a],mounted:function(){var o=i()(s[this.blockName]);this.configCode=c()(o,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,s[this.blockName]),this.init=!0)}},d=t(13),u=Object(d.a)(p,function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[o.init?t("ams-block",{staticClass:"demo-card-preview",attrs:{name:o.blockName}}):o._e(),o._v(" "),t("div",{class:"demo-card-config "+(o.showConfig?"open":"")},[t("highlight-code",{attrs:{lang:"javascript"}},[o._v("\n            "+o._s(o.configCode)+"\n        ")])],1),o._v(" "),t("div",{staticClass:"demo-card-config-btn",on:{click:o.toggleDemoCofig}},[t("i",{class:"el-icon-caret-"+(o.showConfig?"top":"bottom")}),o._v("\n         "+o._s(o.showConfig?"隐藏":"显示")+"配置\n    ")])],1)},[],!1,null,null,null);e.default=u.exports},237:function(o,e,t){"use strict";var a=t(0),s=(t(244),t(242)),l=t.n(s),i=t(238),n=t.n(i),c=t(250),p=t(245),d=t.n(p),u=(t(246),t(247)),f=t.n(u),r=t(248),m=t.n(r),g=t(249),h=t.n(g);a.default.use(l.a),a.default.use(n.a),console.log("ams init config"),a.default.use(f.a),a.default.use(m.a),a.default.use(h.a),"undefined"!=typeof window&&(window.Vue=a.default),a.default.use(c.a,{languages:{javascript:d.a}}),n.a.config({resource:{api:{withCredentials:!1}}})},243:function(o,e,t){"use strict";t(237);e.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String},methods:{toggleDemoCofig:function(){this.showConfig=!this.showConfig}}}}}]);