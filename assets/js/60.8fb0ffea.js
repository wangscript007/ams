(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{125:function(e,t,n){"use strict";var i=n(0),o=(n(131),n(130)),a=n.n(o),s=n(128),l=n.n(s),c=n(136),r=n(132),u=n.n(r),d=(n(133),n(134)),m=n.n(d),f=n(135),p=n.n(f);i.default.use(a.a),i.default.use(l.a),console.log("ams init config"),i.default.use(m.a),i.default.use(p.a),"undefined"!=typeof window&&(window.Vue=i.default),i.default.use(c.a,{languages:{javascript:u.a}}),l.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,n){"use strict";n(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},967:function(e,t,n){"use strict";n.r(t);var i=n(126),o={inputnumberField1:{type:"form",resource:{fields:{inputnumberFieldA:{type:"inputnumber",label:"计数器"},inputnumberFieldB:{type:"inputnumber",label:"带默认值",default:10},inputnumberFieldC:{type:"inputnumber",label:"纯展示",default:10,ctx:"view"}}},ctx:"edit"}},a=n(138),s=n.n(a),l=n(137),c=n.n(l),r={mixins:[i.a],mounted:function(){var e=s()(o[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,o[this.blockName]),this.init=!0)}},u=n(1),d=Object(u.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?n("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),n("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[n("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),n("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[n("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?n("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);