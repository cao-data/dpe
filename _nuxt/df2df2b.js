(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{579:function(t,e,n){n(584)},584:function(t,e,n){"use strict";var r=n(7),l=n(24),o=n(17),c=n(92),d=n(37),f=n(296),h=n(62),_=n(154),m=n(334),v=n(411),w=n(40),y=n(93),j=w("replace"),S=TypeError,N=o("".indexOf),x=o("".replace),k=o("".slice),A=Math.max,O=function(t,e,n){return n>t.length?-1:""===e?n:N(t,e,n)};r({target:"String",proto:!0},{replaceAll:function(t,e){var n,r,o,w,D,T,B,C,I,J=c(this),E=0,L=0,R="";if(null!=t){if((n=f(t))&&(r=h(c(m(t))),!~N(r,"g")))throw S("`.replaceAll` does not allow non-global regexes");if(o=_(t,j))return l(o,t,J,e);if(y&&n)return x(h(J),t,e)}for(w=h(J),D=h(t),(T=d(e))||(e=h(e)),B=D.length,C=A(1,B),E=O(w,D,0);-1!==E;)I=T?h(e(D,E,w)):v(D,w,E,[],void 0,e),R+=k(w,L,E)+I,L=E+B,E=O(w,D,E+C);return L<w.length&&(R+=k(w,L)),R}})},606:function(t,e,n){"use strict";n.r(e);var r=n(89),l=(n(85),n(22),n(80),n(165),n(189),n(33),n(72),n(105),n(333),n(410),n(55),n(579),n(133),n(166),{props:{data:{type:Object,required:!0},graph:{type:Object,required:!0}},computed:{selected:function(){return this.$store.state.map.selected},defaultSort:function(){return this.graph.table_default_sort?this.graph.table_default_sort.split(","):[]},defaultSortDirection:function(){return this.graph.table_default_sort?this.graph.table_default_sort_direction?this.graph.table_default_sort_direction:"asc":""},columns:function(){var t=this,e=this.graph.table_columns.split(",").map((function(label,i){var e={field:label,label:t.data.labels[label],numeric:t.graph.cast_int.includes(label)||t.graph.cast_float.includes(label),centered:t.graph.cast_int.includes(label)||t.graph.cast_float.includes(label),sortable:t.graph.table_sortable.includes(label),sticky:t.graph.table_sticky_columns&&t.graph.table_sticky_columns.includes(label)||!1};return"jurisdiccion"===label?e.customSort=function(a,b,t){return t?a.nro_orden-b.nro_orden:b.nro_orden-a.nro_orden}:e.sortable&&(e.customSort=function(a,b,t){return null===a[label]&&null!==b[label]?1:null===b[label]&&null!==a[label]?-1:null===a[label]&&"nacional"===a.id_jurisdiccion?1:null===b[label]&&"nacional"===b.id_jurisdiccion?-1:t?a[label]-b[label]:b[label]-a[label]}),e}));return e},dataTable:function(){var t=this;if(!this.columns)return[];var e=JSON.parse(JSON.stringify(this.data.values));return e.forEach((function(e){for(var n=function(){var n=Object(r.a)(o[l],2),c=n[0],d=n[1],f=t.columns.find((function(t){return t.field===c}));f&&f.numeric&&isNaN(d)&&(e[c]=null)},l=0,o=Object.entries(e);l<o.length;l++)n()})),e},totalNacional:function(){return this.data.values.find((function(t){return"nacional"===t.id_jurisdiccion}))}},methods:{getLabelInfo:function(t){return this.data.labelsInfo[t]},colorRow:function(t,e){return this.selected.includes(t.id_jurisdiccion)?"is-info":""},formatNumber:function(t,data){if(this.graph.cast_int.includes(t.field))return data[t.field].toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g,",").replaceAll(",",".");if(this.graph.cast_float.includes(t.field)){var e=data[t.field].toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),n=e.split(".");return n.length>1?n[0]+","+n[1]:e+",00"}},isNumericAndCanBeShown:function(t,data){return!(!t.numeric||isNaN(data[t.field])||null===data[t.field])},isText:function(t,data){return!t.numeric},isNacional:function(t,data){return"nacional"===data.id_jurisdiccion},dataDoesntApply:function(t,data){var e=this.data.values.find((function(t){return data.id_jurisdiccion===t.id_jurisdiccion}));return!!e&&("///"===e[t.field]||void 0)},dataUnavailable:function(t,data){var e=this.data.values.find((function(t){return data.id_jurisdiccion===t.id_jurisdiccion}));return!!e&&("..."===e[t.field]||void 0)}}}),o=n(132),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-table",{attrs:{data:t.dataTable,"default-sort":t.defaultSort,"default-sort-direction":t.defaultSortDirection,"row-class":t.colorRow,"icon-pack":"fas","sort-icon":"fa-arrow-up",narrowed:"",hoverable:"",fullwidth:""}},t._l(t.columns,(function(e){return n("b-table-column",{key:t.graph.id+"-"+e.field,attrs:{field:e.field,label:e.label,numeric:e.numeric,centered:e.centered,sortable:e.sortable,"custom-sort":e.customSort||null},scopedSlots:t._u([{key:"header",fn:function(){return[t.getLabelInfo(e.field)?n("b-tooltip",{attrs:{label:t.getLabelInfo(e.field),"append-to-body":"",dashed:"",multilined:"",position:"is-bottom",type:"is-light"}},[t._v("\n        "+t._s(e.label)+"\n      ")]):n("span",[t._v(t._s(e.label))])]},proxy:!0},{key:"default",fn:function(r){return[n("span",{class:{"has-text-weight-bold":t.isNacional(e,r.row)}},[t._v("\n        "+t._s(t.isNumericAndCanBeShown(e,r.row)?t.formatNumber(e,r.row):null)+"\n        "+t._s(t.isText(e)?r.row[e.field]:null)+"\n      ")]),t._v(" "),e.numeric&&t.dataDoesntApply(e,r.row)?n("b-tooltip",{attrs:{type:"is-primary is-light",position:"is-left",multilined:"",label:"Dato que no corresponde presentar debido a la naturaleza de las cosas o del cálculo"}},[n("span",{staticClass:"has-text-grey"},[t._v(" /// ")])]):t._e(),t._v(" "),e.numeric&&t.dataUnavailable(e,r.row)?n("b-tooltip",{attrs:{type:"is-primary is-light",position:"is-left",multilined:"",label:"Dato no disponible a la fecha de presentación de los resultados"}},[n("span",{staticClass:"has-text-grey"},[t._v(" ··· ")])]):t._e()]}}],null,!0)})})),1)}),[],!1,null,null,null);e.default=component.exports}}]);