webpackJsonp([0],{"/zdt":function(t,s){},"8FvY":function(t,s){},"JS/D":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("k6xV")},null,null).exports,r=a("/ocq"),o={name:"Navbar",data:function(){return{}},mounted:function(){$(".nav li a").on("click",function(){$(".collapse").collapse("hide")})},computed:{currentPath:function(){return this.$route.path}},methods:{submitSearch:function(){}}},c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"header py-4"},[a("div",{staticClass:"container"},[a("div",{staticClass:"d-flex"},[a("a",{staticClass:"header-brand",attrs:{href:"/"}},[t._v("\n          STATNLP SPONSORSHIP\n        ")]),t._v(" "),a("div",{staticClass:"d-flex order-lg-2 ml-auto"},[a("div",{staticClass:"dropdown"},[t._m(0),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right dropdown-menu-arrow"},[a("router-link",{staticClass:"dropdown-item",attrs:{to:"/login"}},[a("i",{staticClass:"dropdown-icon fe fe-log-out"}),t._v(" Sign out\n              ")])],1)])]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"header collapse d-lg-flex p-0",attrs:{id:"headerMenuCollapse"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-lg-3 ml-auto"},[a("form",{staticClass:"input-icon my-3 my-lg-0",on:{submit:function(s){return s.preventDefault(),t.submitSearch(s)}}},[a("input",{staticClass:"form-control header-search",attrs:{id:"input-search",type:"search",placeholder:"Search",tabindex:"1",disabled:"/"==t.currentPath}}),t._v(" "),t._m(2)])]),t._v(" "),a("div",{staticClass:"col-lg order-lg-first"},[a("ul",{staticClass:"nav nav-tabs border-0 flex-column flex-lg-row"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:"/"==t.currentPath?"active":"",attrs:{to:"/"}},[a("i",{staticClass:"fe fe-activity"}),t._v(" Overview")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:"/funding"==t.currentPath?"active":"",attrs:{to:"/funding"}},[a("i",{staticClass:"fe fe-dollar-sign"}),t._v(" Funding")])],1),t._v(" "),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",class:"/sponsors"==t.currentPath?"active":"",attrs:{to:"/sponsors"}},[a("i",{staticClass:"fe fe-users"}),t._v(" Sponsors")])],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"nav-link pr-0 leading-none",attrs:{href:"#","data-toggle":"dropdown"}},[s("span",{staticClass:"avatar",staticStyle:{"background-image":"url(./static/images/avatar-kaka.jpg)"}}),this._v(" "),s("span",{staticClass:"ml-2 d-none d-lg-block"},[s("span",{staticClass:"text-default"},[this._v("Young Kaka")]),this._v(" "),s("small",{staticClass:"text-muted d-block mt-1"},[this._v("Developer")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("a",{staticClass:"header-toggler d-lg-none ml-3 ml-lg-0",attrs:{href:"#","data-toggle":"collapse","data-target":"#headerMenuCollapse"}},[s("span",{staticClass:"header-toggler-icon"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"input-icon-addon"},[s("i",{staticClass:"fe fe-search"})])}]};var l={name:"Footer",data:function(){return{}},mounted:function(){[].forEach(function(t){var s=document.createElement("script");s.setAttribute("src",t),document.body.appendChild(s)})}},d={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"m-footer"},[s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 mt-3 mt-lg-0 text-center"},[this._v("\n          Copyright © 2018 "),s("a",{attrs:{href:"http://www.statnlp.org"}},[this._v("STATNLP")]),this._v(". All rights reserved.\n        ")])])])])])}]};var v={components:{Navbar:a("VU/8")(o,c,!1,function(t){a("phuS")},"data-v-75c12eea",null).exports,Footer:a("VU/8")(l,d,!1,function(t){a("JS/D")},"data-v-03b6f546",null).exports},name:"MainLayout",data:function(){return{}}},u={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"page"},[s("div",{staticClass:"page-main"},[s("Navbar"),this._v(" "),s("div",{staticClass:"my-3 my-md-5"},[s("router-view")],1)],1),this._v(" "),s("Footer")],1)},staticRenderFns:[]};var p=a("VU/8")(v,u,!1,function(t){a("UxS6")},"data-v-18d363f6",null).exports,_={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row row-cards"},[a("div",{staticClass:"col-6 col-sm-4 col-lg-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-3 text-center"},[a("div",{staticClass:"text-right text-blue"},[t._v("\n            "+t._s(t._f("limit")(t.fundUsagePercentage,4))+"%\n          ")]),t._v(" "),a("div",{staticClass:"h1 m-0"},[t._v("$"+t._s(t._f("currency")(t.fund.used)))]),t._v(" "),a("div",{staticClass:"mb-4"},[t._v("Fund Usage")])])])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"col-6 col-sm-4 col-lg-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-3 text-center"},[a("div",{staticClass:"text-right text-blue"},[t._v("\n            "+t._s(t._f("limit")(4/18*100,4))+"%\n          ")]),t._v(" "),a("div",{staticClass:"h1 m-0"},[t._v("4")]),t._v(" "),a("div",{staticClass:"mb-4"},[t._v("Today Transactions")])])])]),t._v(" "),a("div",{staticClass:"col-6 col-sm-4 col-lg-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-3 text-center"},[a("div",{staticClass:"text-right text-blue"},[t._v("\n            "+t._s(t._f("limit")(8/28*100,4))+"%\n          ")]),t._v(" "),a("div",{staticClass:"h1 m-0"},[t._v("8")]),t._v(" "),a("div",{staticClass:"mb-4"},[t._v("Silver Sponsors")])])])]),t._v(" "),a("div",{staticClass:"col-6 col-sm-4 col-lg-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-3 text-center"},[a("div",{staticClass:"text-right text-blue"},[t._v("\n            "+t._s(t._f("limit")(4/28*100,4))+"%\n          ")]),t._v(" "),a("div",{staticClass:"h1 m-0"},[t._v("4")]),t._v(" "),a("div",{staticClass:"mb-4"},[t._v("Bronze Sponsors")])])])]),t._v(" "),a("div",{staticClass:"col-6 col-sm-4 col-lg-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body p-3 text-center"},[a("div",{staticClass:"text-right text-blue"},[t._v("\n            "+t._s(t._f("limit")(2/28*100,4))+"%\n          ")]),t._v(" "),a("div",{staticClass:"h1 m-0"},[t._v("2")]),t._v(" "),a("div",{staticClass:"mb-4"},[t._v("New Sponsors")])])])]),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Total Fund")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("$"+t._s(t._f("currency")(t.fund.total)))]),t._v(" "),t._m(1)])])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Available Fund")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("$"+t._s(t._f("currency")(t.availableFund)))]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: "+(100-t.fundUsagePercentage)+"%"})])])])]),t._v(" "),a("div",{staticClass:"col-sm-3"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body text-center"},[a("div",{staticClass:"h5"},[t._v("Gold Sponsors")]),t._v(" "),a("div",{staticClass:"display-4 font-weight-bold mb-4"},[t._v("16")]),t._v(" "),a("div",{staticClass:"progress progress-sm"},[a("div",{staticClass:"progress-bar bg-green",style:"width: "+16/28*100+"%"})])])])]),t._v(" "),t._m(2)])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-6 col-sm-4 col-lg-2"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body p-3 text-center"},[s("div",{staticClass:"text-right text-blue"},[this._v("\n            100%\n          ")]),this._v(" "),s("div",{staticClass:"h1 m-0"},[this._v("18")]),this._v(" "),s("div",{staticClass:"mb-4"},[this._v("Total Transactions")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"progress progress-sm"},[s("div",{staticClass:"progress-bar bg-blue",staticStyle:{width:"100%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"col-sm-3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body text-center"},[s("div",{staticClass:"h5"},[this._v("Total Sponsors")]),this._v(" "),s("div",{staticClass:"display-4 font-weight-bold mb-4"},[this._v("28")]),this._v(" "),s("div",{staticClass:"progress progress-sm"},[s("div",{staticClass:"progress-bar bg-blue",staticStyle:{width:"100%"}})])])])])}]};var m=a("VU/8")({name:"HomePage",data:function(){return{bar:null,fund:{total:10800,used:4482}}},methods:{},mounted:function(){},computed:{availableFund:function(){return this.fund.total-this.fund.used},fundUsagePercentage:function(){return this.fund.used/this.fund.total*100}}},_,!1,function(t){a("zfTN")},"data-v-8b45c7ce",null).exports,f={name:"CircleProgress",props:{percentValue:{default:.8},percent:{default:80}},data:function(){return{}},mounted:function(){$(this.$el).circleProgress({value:this.percentValue,thickness:3,fill:{color:tabler.colors.blue||tabler.colors.blue},size:40,startAngle:-Math.PI/4*2,emptyFill:"#F4F4F4",lineCap:"round"})}},h={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"mx-auto chart-circle chart-circle-xs"},[s("div",{staticClass:"chart-circle-value"},[this._v(this._s(this.percent)+"%")])])},staticRenderFns:[]};var C=a("VU/8")(f,h,!1,function(t){a("/zdt")},"data-v-60d0d260",null).exports,g={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal fade",attrs:{id:"mPurposeDialog",tabindex:"-1",role:"dialog","aria-labelledby":"mPurposeDialogLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[this._m(0),this._v(" "),s("div",{staticClass:"modal-body"},[this._v("\n        "+this._s(this.purpose)+"\n      ")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"mPurposeDialogLabel"}},[this._v("Usage Purpose")]),this._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}})])}]};var b={components:{CircleProgress:C,PurposeDialog:a("VU/8")({name:"PurposeDialog",props:{purpose:{default:""}},data:function(){return{}}},g,!1,function(t){a("o2/J")},"data-v-41ed1dc4",null).exports},name:"FundingPage",data:function(){return{fund:{total:10800,used:4482},funds:[{id:271392321,description:"Good support for StatNLP",date:"10 April 2018",amount:2e3,sponsor:"NSFC",used:!0,purpose:"Support for Multimodal Deep Hybrid Representations for Language Generation from Non-textual Data"},{id:923212713,description:"Good support for StatNLP",date:"10 April 2018",amount:4e3,sponsor:"Alibaba",used:!1,purpose:"Support for Automatic Intelligent Semantic Processing"},{id:127192323,description:"Good support for StatNLP",date:"10 April 2018",amount:4e3,sponsor:"SGInnovate",purpose:"Support for Scalable Models for Deep Semantic Information Processing"},{id:719231223,description:"Good support for StatNLP",date:"10 April 2018",amount:4e3,sponsor:"SGInnovate",purpose:"Support for Scalable Models for Deep Semantic Information Processing"}],chosenPurpose:""}},methods:{showPurpose:function(t){this.chosenPurpose=t}},mounted:function(){var t=$("#tbl-funding").DataTable({info:!1,paging:!1,searching:!0,dom:"t"});$("#input-search").keyup(function(){t.search($(this).val()).draw()})}},y={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table card-table table-vcenter text-nowrap",attrs:{id:"tbl-funding"}},[t._m(1),t._v(" "),a("tbody",t._l(t.funds,function(s,e){return a("tr",{key:e},[a("td",[a("span",{staticClass:"text-muted"},[t._v(t._s(s.id))])]),t._v(" "),a("td",[t._v(t._s(s.description))]),t._v(" "),a("td",[t._v("\n                "+t._s(s.date)+"\n              ")]),t._v(" "),a("td",[t._v("\n                $"+t._s(t._f("currency")(s.amount))+"\n              ")]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(s.amount/t.fund.total*100,2),percentValue:s.amount/t.fund.total}})],1),t._v(" "),a("td",[s.used?a("span",[a("span",{staticClass:"status-icon bg-secondary"}),t._v(" Used\n                ")]):t._e(),t._v(" "),s.used?t._e():a("span",[a("span",{staticClass:"status-icon bg-success"}),t._v(" Available\n                ")])]),t._v(" "),a("td",[t._v("\n                "+t._s(s.sponsor)+"\n              ")]),t._v(" "),a("td",{staticClass:"text-center"},[a("a",{staticClass:"icon",attrs:{"data-toggle":"modal","data-target":"#mPurposeDialog"},on:{click:function(a){t.showPurpose(s.purpose)}}},[a("i",{staticClass:"fe fe-eye"})])])])}))])])])]),t._v(" "),a("PurposeDialog",{attrs:{purpose:t.chosenPurpose}})],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[this._v("Funding Transactions")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{staticClass:"w-1"},[t._v("ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Percentage")]),t._v(" "),a("th",[t._v("Usage")]),t._v(" "),a("th",[t._v("Sponsor")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Purpose")])])])}]};var x=a("VU/8")(b,y,!1,function(t){a("dV9B")},"data-v-f9d9a15a",null).exports,w={components:{CircleProgress:C},name:"FundingPage",data:function(){return{fund:{total:10800,used:4482},sponsors:[{id:271392321,name:"Alibaba",totalAmount:8e3,type:"Gold",website:"https://www.alibaba.com/"},{id:271392321,name:"SGInnovate",totalAmount:6e3,type:"Gold",website:"https://www.sginnovate.com/"},{id:271392321,name:"NSFC",totalAmount:2800,type:"Silver",website:"http://www.nsfc.gov.cn/"},{id:271392321,name:"MINDEF",totalAmount:2200,type:"Silver",website:"https://www.mindef.gov.sg/"}]}},mounted:function(){var t=$("#tbl-sponsor").DataTable({info:!1,paging:!1,searching:!0,dom:"t"});$("#input-search").keyup(function(){t.search($(this).val()).draw()})}},S={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[t._m(0),t._v(" "),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table card-table table-vcenter text-nowrap",attrs:{id:"tbl-sponsor"}},[t._m(1),t._v(" "),a("tbody",t._l(t.sponsors,function(s,e){return a("tr",{key:e},[a("td",[a("span",{staticClass:"text-muted"},[t._v(t._s(s.id))])]),t._v(" "),a("td",[t._v(t._s(s.name))]),t._v(" "),a("td",[t._v("\n                $"+t._s(t._f("currency")(s.totalAmount))+"\n              ")]),t._v(" "),a("td",{staticClass:"text-center"},[a("CircleProgress",{attrs:{percent:t._f("limit")(s.totalAmount/t.fund.total*100,2),percentValue:s.totalAmount/t.fund.total}})],1),t._v(" "),a("td",[a("span",{staticClass:"badge",class:"Gold"==s.type?"badge-warning":"badge-default"},[t._v(t._s(s.type))])]),t._v(" "),a("td",{staticClass:"text-center"},[a("a",{staticClass:"icon",attrs:{target:"_blank",href:s.website}},[a("i",{staticClass:"fe fe-globe"})])])])}))])])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title"},[this._v("Sponsors")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{staticClass:"w-1"},[t._v("ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Total Amount")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Percentage")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticClass:"text-center"},[t._v("Website")])])])}]};var P=a("VU/8")(w,S,!1,function(t){a("bdz+")},"data-v-4b9c407c",null).exports,F={name:"LoginPage",data:function(){return{}},methods:{submitLogin:function(){A.push("/")}}},k={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col col-login mx-auto"},[a("div",{staticClass:"text-center mb-6"}),t._v(" "),a("form",{staticClass:"card",attrs:{method:"post"},on:{submit:function(s){return s.preventDefault(),t.submitLogin(s)}}},[t._m(0)])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"card-body p-6"},[a("div",{staticClass:"card-title"},[t._v("Login to your account")]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("Email address")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"inputEmail","aria-describedby":"emailHelp",placeholder:"Enter email"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"form-label"},[t._v("\n              Password\n            ")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{staticClass:"custom-control custom-checkbox"},[a("input",{staticClass:"custom-control-input",attrs:{type:"checkbox"}}),t._v(" "),a("span",{staticClass:"custom-control-label"},[t._v("Remember me")])])]),t._v(" "),a("div",{staticClass:"form-footer"},[a("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),a("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"}},[t._v("Sign in with Google")]),t._v(" "),a("button",{staticClass:"btn bg-blue-dark text-white btn-block",attrs:{type:"button"}},[t._v("Sign in with LinkedIn")])])])}]};var E=a("VU/8")(F,k,!1,function(t){a("8FvY")},"data-v-035d9a67",null).exports;e.a.use(r.a);var A=new r.a({routes:[{path:"/",name:"MainLayout",component:p,children:[{path:"/",name:"HomePage",component:m},{path:"/funding",name:"FundingPage",component:x},{path:"/sponsors",name:"SponsorPage",component:P}]},{path:"/login",name:"LoginPage",component:E}]}),D=(a("Q6tO"),a("pSRl"),function(t){return t.toUpperCase()}),N=function(t,s,a){return void 0===a&&(a=""),void 0===t&&(t=""),t.toString().substring(0,s)+a},U=function(t){return(t/1).toFixed(0).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},T={install:function(t){t.filter("uppercase",D),t.filter("limit",N),t.filter("currency",U)}};e.a.use(T),e.a.config.productionTip=!1,new e.a({el:"#app",router:A,components:{App:n},template:"<App/>"})},Q6tO:function(t,s){},UxS6:function(t,s){},"bdz+":function(t,s){},dV9B:function(t,s){},k6xV:function(t,s){},"o2/J":function(t,s){},pSRl:function(t,s){},phuS:function(t,s){},zfTN:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.eb5c0a0fdca0af652980.js.map