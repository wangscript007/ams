(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1001:function(e,l,a){"use strict";a.r(l);var t=a(126),o={transferField1:{type:"form",resource:{fields:{transferFieldA:{type:"transfer",label:"默认",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]}},transferFieldB:{type:"transfer",label:"带默认值",default:"a,e",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]}},transferFieldC:{type:"transfer",label:"纯展示",default:"b,c",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]},ctx:"view"}}},ctx:"edit"},transferField2:{type:"form",resource:{fields:{transferFieldA:{type:"transfer",label:"默认",props:{options:[{value:"a",label:"黄金糕"},{value:"b",label:"双皮奶"},{value:"c",label:"蚵仔煎"},{value:"d",label:"龙须面"},{value:"e",label:"北京烤鸭"}]},slots:{"left-footer":[{style:{float:"left",marginTop:"6px"},props:{size:"mini",type:"success"},text:"操作",onClick:function(){console.log("操作")}},{style:{float:"right",margin:"6px 8px 0 0"},props:{size:"mini",type:"success"},text:"编辑",onClick:function(){console.log("编辑")}}],"right-footer":[{props:{size:"mini",type:"primary"},text:"操作",onClick:function(){console.log("操作")}}]}}}},ctx:"edit"}},s=a(138),i=a.n(s),n=a(137),c=a.n(n),r={mixins:[t.a],mounted:function(){var e=i()(o[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},u=a(1),f=Object(u.a)(r,(function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?a("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),a("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[a("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),a("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[a("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?a("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);l.default=f.exports},125:function(e,l,a){"use strict";var t=a(0),o=(a(131),a(130)),s=a.n(o),i=a(128),n=a.n(i),c=a(136),r=a(132),u=a.n(r),f=(a(133),a(134)),d=a.n(f),p=a(135),b=a.n(p);t.default.use(s.a),t.default.use(n.a),console.log("ams init config"),t.default.use(d.a),t.default.use(b.a),"undefined"!=typeof window&&(window.Vue=t.default),t.default.use(c.a,{languages:{javascript:u.a}}),n.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,l,a){"use strict";a(125);l.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);