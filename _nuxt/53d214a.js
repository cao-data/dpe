(window.webpackJsonp=window.webpackJsonp||[]).push([[12,10],{573:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(249).default)("58b4de67",content,!0,{sourceMap:!1})},581:function(t,e,n){t.exports=n.p+"img/logos.803f17f.png"},582:function(t,e,n){"use strict";n(573)},583:function(t,e,n){var r=n(248)(!1);r.push([t.i,".chart[data-v-77c19e84]{min-height:600px}",""]),t.exports=r},595:function(t,e,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(249).default)("289e5398",content,!0,{sourceMap:!1})},599:function(t,e,n){"use strict";n.r(e);var r=n(60),c=(n(167),n(49),n(33),n(72),n(9),n(105),n(22),n(80),n(165),n(189),{name:"MainStructure",components:{ArgentinaMap:n(580).default},fetchOnServer:!1,fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o,output;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("https://sheets.googleapis.com/v4/spreadsheets/".concat(t.googleSheetId,"/values/index?key=").concat(t.googleApiKey));case 3:n=e.sent,r=[],c=n.data.values[0],o=n.data.values.slice(1),output=[],o.forEach((function(t){var e={};c.forEach((function(n,i){"cast_float"===n||"cast_int"===n?e[n]=t[i].split(","):"include_nacional"===n||"habilitado"===n||"force_full_width"===n?e[n]="TRUE"===t[i]:"capitulo"===n?(r.includes(t[i])||r.push(t[i]),e[n]=t[i]):e[n]=""!==t[i]?t[i]:null})),e.id="graph-".concat(Math.floor(1e6*Math.random())),e.fetched=!0,output.push(e)})),t.$store.commit("data/setIndex",output),t.$store.commit("data/setChapters",r),t.$store.commit("data/setIsLoading",!1),e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(0),t.$buefy.dialog.alert("Error al obtener los datos: ".concat(e.t0.message)),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()},computed:{chapters:function(){return this.$store.state.data.chapters},chapter:function(){return this.$store.state.data.chapter},googleSheetId:function(){return"1xChX7v7mAiYMZ-TKCUp_k8twMrJa8HxNBcr818iYGhE"},googleApiKey:function(){return"AIzaSyChIB-1qvxXGXbTHLa4xHqzobpcSTBnHlA"},graphs:function(){return this.$store.getters["data/graphsChapter"]}},methods:{getColumns:function(t){return t.force_full_width?"is-12":"is-".concat(this.$store.state.system.columns)},setChapter:function(t){this.$gtag.event("change_chapter",{event_category:"button",event_label:t}),this.$store.commit("data/setChapter",t)}}}),o=(n(582),n(132)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-6"},[r("div",{staticClass:"container is-fluid"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-2"},[r("ArgentinaMap")],1),t._v(" "),r("div",{staticClass:"column is-10"},[r("div",{},[t.$fetchState.pending?r("div",{staticClass:"column has-text-centered"},[r("i",{staticClass:"fas fa-spin fa-5x fa-sync"})]):t.$fetchState.error?r("div",{staticClass:"column has-text-centered"},[r("i",{staticClass:"fas fa-exclamation-triangle fa-5x fa-sync"}),t._v(" Error!\n          ")]):null===t.chapter?r("div",{staticClass:"has-text-centered"},[r("div",{staticClass:"buttons is-centered mt-3"},t._l(t.chapters,(function(e,n){return r("button",{key:"button-chapter-"+n,staticClass:"button is-outlined is-medium is-primary",class:""==t.chapter?"is-hidden":null,on:{click:function(n){return t.setChapter(e)}}},[t._v("\n                "+t._s(e)+"\n              ")])})),0)]):r("div",[r("h1",{staticClass:"title is-1 has-text-primary has-text-centered is-700"},[t._v("\n              "+t._s(t.chapter)+"\n            ")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"columns is-multiline"},t._l(t.graphs,(function(e){return r("StatsContainer",{key:"graph-"+e.id,staticClass:"column",class:t.getColumns(e),attrs:{graph:e}})})),1)])]),t._v(" "),r("hr",{staticClass:"my-6"}),t._v(" "),r("img",{staticClass:"image mx-auto my-6",attrs:{src:n(581),width:"300",alt:""}})])])])])}),[],!1,null,"77c19e84",null);e.default=component.exports;installComponents(component,{ArgentinaMap:n(580).default,StatsContainer:n(600).default})},607:function(t,e,n){"use strict";n(595)},608:function(t,e,n){var r=n(248)(!1);r.push([t.i,".top-left .tl[data-v-39bc8778]{position:fixed;top:-10px;left:0;width:300px;z-index:-1}.top-left .br[data-v-39bc8778]{position:fixed;bottom:0;right:0;width:70px;z-index:-1}",""]),t.exports=r},615:function(t,e,n){"use strict";n.r(e);var r={name:"IndexPage"},c=(n(607),n(132)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"top-left"},[e("MainStructure")],1)}),[],!1,null,"39bc8778",null);e.default=component.exports;installComponents(component,{MainStructure:n(599).default})}}]);