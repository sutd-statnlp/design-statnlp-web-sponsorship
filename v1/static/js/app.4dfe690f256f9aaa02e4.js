webpackJsonp([0],{"/UPK":function(t,e){},"3hYS":function(t,e){},"7AHc":function(t,e){},"7hJO":function(t,e){},"7vTq":function(t,e){},E34t:function(t,e){},"M/IG":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"mdc-toolbar mdc-elevation--z4 mdc-toolbar--fixed"},[e("div",{staticClass:"mdc-toolbar__row"},[e("section",{staticClass:"mdc-toolbar__section mdc-toolbar__section--align-start"},[e("a",{staticClass:"menu-toggler material-icons mdc-toolbar__menu-icon",attrs:{href:"#"}},[this._v("menu")]),this._v(" "),e("span",{staticClass:"mdc-toolbar__input"},[e("div",{staticClass:"mdc-text-field"},[e("input",{staticClass:"mdc-text-field__input",attrs:{type:"text",id:"css-only-text-field-box",placeholder:"Search"}})])])]),this._v(" "),e("section",{staticClass:"mdc-toolbar__section mdc-toolbar__section--align-end",attrs:{role:"toolbar"}},[e("div",{staticClass:"mdc-menu-anchor mr-1"},[e("a",{staticClass:"mdc-toolbar__icon toggle mdc-ripple-surface",attrs:{href:"#","data-toggle":"dropdown","toggle-dropdown":"logout-menu","data-mdc-auto-init":"MDCRipple"}},[e("i",{staticClass:"material-icons"},[this._v("person")])]),this._v(" "),e("div",{staticClass:"mdc-simple-menu mdc-simple-menu--right",attrs:{tabindex:"-1",id:"logout-menu"}},[e("ul",{staticClass:"mdc-simple-menu__items mdc-list",attrs:{role:"menu","aria-hidden":"true"}},[e("li",{staticClass:"mdc-list-item",attrs:{role:"menuitem",tabindex:"0"}},[e("i",{staticClass:"material-icons mdc-theme--primary mr-1"},[this._v("power_settings_new")]),this._v("\n              Logout\n            ")])])])])])])])}]};var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"mdc-persistent-drawer mdc-persistent-drawer--open m-sidebar"},[a("nav",{staticClass:"mdc-persistent-drawer__drawer"},[t._m(0),t._v(" "),a("div",{staticClass:"mdc-list-group"},[a("nav",{staticClass:"mdc-list mdc-drawer-menu"},[a("div",{staticClass:"mdc-list-item mdc-drawer-item"},[a("router-link",{staticClass:"mdc-drawer-link",class:"/"==t.currentPath?"active":"",attrs:{to:"/"}},[a("i",{staticClass:"material-icons mdc-list-item__start-detail mdc-drawer-item-icon",attrs:{"aria-hidden":"true"}},[t._v("desktop_mac")]),t._v("\n            Summary\n          ")])],1),t._v(" "),a("div",{staticClass:"mdc-list-item mdc-drawer-item"},[a("router-link",{staticClass:"mdc-drawer-link",class:"/funding"==t.currentPath?"active":"",attrs:{to:"/funding"}},[a("i",{staticClass:"material-icons mdc-list-item__start-detail mdc-drawer-item-icon",attrs:{"aria-hidden":"true"}},[t._v("attach_money")]),t._v("\n            Funding\n          ")])],1),t._v(" "),a("div",{staticClass:"mdc-list-item mdc-drawer-item"},[a("router-link",{staticClass:"mdc-drawer-link",class:"/sponsors"==t.currentPath?"active":"",attrs:{to:"/sponsors"}},[a("i",{staticClass:"material-icons mdc-list-item__start-detail mdc-drawer-item-icon",attrs:{"aria-hidden":"true"}},[t._v("group")]),t._v("\n            Sponsors\n          ")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc-persistent-drawer__toolbar-spacer"},[e("a",{staticClass:"brand-logo",attrs:{href:"/"}},[e("strong",[this._v("STATNLP SPONSORSHIP")])])])}]};var n={name:"Footer",data:function(){return{}},mounted:function(){["./static/js/misc.js","./static/js/material.js","./static/js/dashboard.js"].forEach(function(t){var e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e)})}},c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",[e("div",{staticClass:"mdc-layout-grid"},[e("div",{staticClass:"mdc-layout-grid__inner"},[e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12 justify-content-center"},[e("span",{staticClass:"text-muted"},[this._v("Copyright © 2018\n          "),e("a",{staticClass:"text-green",attrs:{href:"https://www.statnlp.org/",target:"_blank"}},[this._v("STATNLP")]),this._v(". All rights reserved.")])])])])])}]};var d={components:{Navbar:a("VU/8")({name:"Navbar",data:function(){return{}},mounted:function(){}},i,!1,function(t){a("/UPK")},"data-v-42655077",null).exports,Sidebar:a("VU/8")({name:"Sidebar",data:function(){return{}},computed:{currentPath:function(){return this.$route.path}}},r,!1,function(t){a("t5rp")},"data-v-3f98e3d0",null).exports,Footer:a("VU/8")(n,c,!1,function(t){a("M/IG")},"data-v-0c70e966",null).exports},name:"App"},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"body-wrapper",attrs:{id:"app"}},[e("Sidebar"),this._v(" "),e("Navbar"),this._v(" "),e("div",{staticClass:"page-wrapper mdc-toolbar-fixed-adjust"},[e("main",{staticClass:"content-wrapper"},[e("router-view")],1),this._v(" "),e("Footer")],1)],1)},staticRenderFns:[]};var o=a("VU/8")(d,l,!1,function(t){a("3hYS")},null,null).exports,u=a("/ocq"),m={name:"HomePage",data:function(){return{bar:null,fund:{total:10800,used:4482}}},methods:{showFundUsage:function(t){this.bar&&this.bar.animate(t)},createProgressBar:function(){var t=new ProgressBar.Circle(currentBalanceCircle,{color:"#000",strokeWidth:12,trailWidth:12,trailColor:"#eee",easing:"easeInOut",lineCap:"round",duration:1400,from:{color:"#23AFC2",width:12},to:{color:"#23AFC2",width:12},step:function(t,e){e.path.setAttribute("stroke",t.color),e.path.setAttribute("stroke-width",t.width);var a=Math.round(100*e.value());0===a?e.setText(""):e.setText(a+"%")}});t.text.style.fontSize="1.5rem",this.bar=t}},mounted:function(){this.createProgressBar();var t=this.fundUsagePercentage;this.showFundUsage(t)},computed:{availableFund:function(){return this.fund.total-this.fund.used},fundUsagePercentage:function(){return this.fund.used/this.fund.total}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-home"},[a("div",{staticClass:"mdc-layout-grid"},[a("div",{staticClass:"mdc-layout-grid__inner"},[a("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-8"},[a("div",{staticClass:"mdc-layout-grid__inner"},[t._m(0),t._v(" "),a("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6"},[a("div",{staticClass:"mdc-card py-3 pl-2 d-flex flex-row align-item-center"},[t._m(1),t._v(" "),a("div",{staticClass:"text-wrapper pl-1"},[a("h3",{staticClass:"mdc-typography--display1 font-weight-bold mb-1"},[t._v("$"+t._s(t._f("currency")(t.fund.total)))]),t._v(" "),a("p",{staticClass:"font-weight-normal mb-0 mt-0"},[t._v("Total Fund")])])])]),t._v(" "),t._m(2),t._v(" "),a("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6"},[a("div",{staticClass:"mdc-card py-3 pl-2 d-flex flex-row align-item-center"},[t._m(3),t._v(" "),a("div",{staticClass:"text-wrapper pl-1"},[a("h3",{staticClass:"mdc-typography--display1 font-weight-bold mb-1"},[t._v("$"+t._s(t._f("currency")(t.availableFund)))]),t._v(" "),a("p",{staticClass:"font-weight-normal mb-0 mt-0"},[t._v("Available Fund")])])])])])]),t._v(" "),t._m(4)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6"},[e("div",{staticClass:"mdc-card py-3 pl-2 d-flex flex-row align-item-center"},[e("div",{staticClass:"mdc--tile mdc--tile-primary rounded"},[e("i",{staticClass:"mdi mdi-account-settings text-white icon-md"})]),this._v(" "),e("div",{staticClass:"text-wrapper pl-1"},[e("h3",{staticClass:"mdc-typography--display1 font-weight-bold mb-1"},[this._v("28")]),this._v(" "),e("p",{staticClass:"font-weight-normal mb-0 mt-0"},[this._v("Total Sponsors")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc--tile mdc--tile-primary rounded"},[e("i",{staticClass:"mdi mdi-currency-usd text-white icon-md"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6"},[e("div",{staticClass:"mdc-card py-3 pl-2 d-flex flex-row align-item-center"},[e("div",{staticClass:"mdc--tile mdc--tile-primary rounded"},[e("i",{staticClass:"mdi mdi-account-star text-white icon-md"})]),this._v(" "),e("div",{staticClass:"text-wrapper pl-1"},[e("h3",{staticClass:"mdc-typography--display1 font-weight-bold mb-1"},[this._v("18")]),this._v(" "),e("p",{staticClass:"font-weight-normal mb-0 mt-0"},[this._v("Gold Sponsors")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc--tile mdc--tile-primary rounded"},[e("i",{staticClass:"mdi mdi-check-circle text-white icon-md"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-4"},[e("div",{staticClass:"mdc-card d-flex flex-column"},[e("div",{staticClass:"mdc-layout-grid__inner flex-grow-1"},[e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-3"}),this._v(" "),e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-6 d-flex align-item-center flex-column"},[e("h2",{staticClass:"mdc-card__title mdc-card__title--large text-center mt-2 mb-2"},[this._v("Fund Usage")]),this._v(" "),e("div",{staticClass:"w-100",attrs:{id:"currentBalanceCircle"}})])])])])}]};var p=a("VU/8")(m,_,!1,function(t){a("7AHc")},"data-v-b42dd3fe",null).exports,v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-fund"},[a("div",{staticClass:"mdc-layout-grid"},[a("div",{staticClass:"mdc-layout-grid__inner"},[a("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12"},[a("div",{staticClass:"mdc-card table-responsive"},[t._m(0),t._v(" "),a("table",{staticClass:"table table-hoverable"},[t._m(1),t._v(" "),a("tbody",t._l(t.funds,function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.description))]),t._v(" "),a("td",[t._v(t._s(e.date))]),t._v(" "),a("td",[t._v("$"+t._s(t._f("currency")(e.amount)))]),t._v(" "),a("td",[t._v(t._s(e.sponsor))]),t._v(" "),a("td",[t._v(t._s(e.used?"yes":"no"))]),t._v(" "),a("td",[a("router-link",{staticClass:"col mdc-button",attrs:{to:"/funding/"+e.id,"data-mdc-auto-init":"MDCRipple"}},[a("i",{staticClass:"mdi mdi-eye text-blue"})])],1)])}))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-heading px-2 px-1 border-bottom"},[e("h1",{staticClass:"mdc-card__title mdc-card__title--large"},[this._v("Funding")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("ID")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Date")]),t._v(" "),a("th",[t._v("Amount")]),t._v(" "),a("th",[t._v("Sponsor")]),t._v(" "),a("th",[t._v("Used")]),t._v(" "),a("th",[t._v("Purpose")])])])}]};var h=a("VU/8")({name:"FundingPage",data:function(){return{funds:[{id:271392321,description:"Good support for StatNLP",date:"10 April 2018",amount:2e3,sponsor:"NSFC",used:!0,purpose:"Support for Multimodal Deep Hybrid Representations for Language Generation from Non-textual Data"},{id:923212713,description:"Good support for StatNLP",date:"10 April 2018",amount:4e3,sponsor:"Alibaba",used:!1,purpose:"Support for Automatic Intelligent Semantic Processing"},{id:127192323,description:"Good support for StatNLP",date:"10 April 2018",amount:4e3,sponsor:"SGInnovate",purpose:"Support for Scalable Models for Deep Semantic Information Processing"},{id:719231223,description:"Good support for StatNLP",date:"10 April 2018",amount:4e3,sponsor:"SGInnovate",purpose:"Support for Scalable Models for Deep Semantic Information Processing"}]}}},v,!1,function(t){a("E34t")},"data-v-044db128",null).exports,f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-funding-detail"},[e("div",{staticClass:"mdc-layout-grid"},[e("div",{staticClass:"mdc-layout-grid__inner"},[e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12"},[e("div",{staticClass:"mdc-card"},[e("div",{staticClass:"mdc-layout-grid__inner"},[e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-10 m-div-purpose"},[e("h4",[this._v(this._s(this.fund.purpose))])]),this._v(" "),e("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-2"},[e("section",{staticClass:"purchase__card_section d-flex align-item-center"},[e("router-link",{staticClass:"mdc-button mdc-button--raised mdc-button--dense",attrs:{to:"/funding","data-mdc-auto-init":"MDCRipple"}},[this._v("\n                  Back\n                ")])],1)])])])])])])])},staticRenderFns:[]};var g=a("VU/8")({name:"FundingDetailPage",data:function(){return{fund:{id:271392321,description:"Good support for StatNLP",date:"10 April 2018",amount:2e3,sponsor:"NSFC",used:!0,purpose:"Support for Multimodal Deep Hybrid Representations for Language Generation from Non-textual Data"}}},created:function(){this.fund.id=this.$route.params.id}},f,!1,function(t){a("jLXl")},"data-v-541e1c2e",null).exports,C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-fund"},[a("div",{staticClass:"mdc-layout-grid"},[a("div",{staticClass:"mdc-layout-grid__inner"},[a("div",{staticClass:"mdc-layout-grid__cell stretch-card mdc-layout-grid__cell--span-12"},[a("div",{staticClass:"mdc-card table-responsive"},[t._m(0),t._v(" "),a("table",{staticClass:"table table-hoverable"},[t._m(1),t._v(" "),a("tbody",t._l(t.sponsors,function(e,s){return a("tr",{key:s},[a("td",{staticClass:"text-left"},[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v("$"+t._s(t._f("currency")(e.totalAmount)))]),t._v(" "),a("td",[t._v(t._s(e.type))]),t._v(" "),a("td",[a("a",{staticClass:"col mdc-button",attrs:{"data-mdc-auto-init":"MDCRipple",target:"_blank",href:e.website}},[a("i",{staticClass:"mdi mdi-web text-blue"})])])])}))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-heading px-2 px-1 border-bottom"},[e("h1",{staticClass:"mdc-card__title mdc-card__title--large"},[this._v("Sponsors")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("ID")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Total Amount")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Website")])])])}]};var b=a("VU/8")({name:"FundingPage",data:function(){return{sponsors:[{id:271392321,name:"Alibaba",totalAmount:8e3,type:"Gold",website:"https://www.alibaba.com/"},{id:271392321,name:"SGInnovate",totalAmount:6e3,type:"Gold",website:"https://www.sginnovate.com/"},{id:271392321,name:"NSFC",totalAmount:2800,type:"Silver",website:"http://www.nsfc.gov.cn/"},{id:271392321,name:"MINDEF",totalAmount:2200,type:"Silver",website:"https://www.mindef.gov.sg/"}]}}},C,!1,function(t){a("7vTq")},"data-v-20140515",null).exports;s.a.use(u.a);var y=new u.a({routes:[{path:"/",name:"HomePage",component:p},{path:"/funding",name:"FundingPage",component:h},{path:"/sponsors",name:"SponsorPage",component:b},{path:"/funding/:id",name:"FundingDetailPage",component:g}]}),w=(a("7hJO"),a("rqsT"),a("0DyA")),x=(a("1QPC"),a("Wf80")),S=a("7t+N");window.$=S,window.jquery=S,window.jQuery=S,window.mdc=w,window.ProgressBar=x;var P=function(t){return t.toUpperCase()},F=function(t,e,a){return void 0===a&&(a=""),void 0===t&&(t=""),t.toString().substring(0,e)+a},A=function(t){return(t/1).toFixed(0).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},$={install:function(t){t.filter("uppercase",P),t.filter("limit",F),t.filter("currency",A)}};s.a.use($),s.a.config.productionTip=!1,new s.a({el:"#app",router:y,components:{App:o},template:"<App/>"})},jLXl:function(t,e){},rqsT:function(t,e){},t5rp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4dfe690f256f9aaa02e4.js.map