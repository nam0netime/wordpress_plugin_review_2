(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a440f"],{"063f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"wbs-content-inner",class:{"wb-page-loaded":t.isLoaded}},[a("div",{staticClass:"wbs-main"},[a("wbs-filter-bar",[a("el-select",{staticClass:"ctrl-item",attrs:{size:"small",clearable:"",filterable:"",placeholder:"所有蜘蛛"},model:{value:t.q.spider,callback:function(e){t.$set(t.q,"spider",e)},expression:"q.spider"}},t._l(t.cnf.spider,(function(t,e){return a("el-option",{key:e,attrs:{filterable:"",label:t,value:t}})})),1),t._e(),a("el-select",{staticClass:"ctrl-item",attrs:{size:"small",clearable:"",placeholder:"今天"},model:{value:t.q.day,callback:function(e){t.$set(t.q,"day",e)},expression:"q.day"}},t._l(t.cnf.day,(function(t,e){return a("el-option",{key:e,attrs:{label:t.label,value:t.value}})})),1),a("el-input",{staticClass:"m-hide ctrl-item wbs-input-short",attrs:{size:"small",placeholder:"输入蜘蛛名称",clearable:""},model:{value:t.q.name,callback:function(e){t.$set(t.q,"name",e)},expression:"q.name"}}),a("el-button",{staticClass:"ctrl-item",attrs:{type:"primary",size:"small",plain:"",name:"search"},on:{click:t.search_log}},[t._v("筛选")])],1),a("div",{staticClass:"mt log-box"},[t.$cnf.is_mobile?a("div",{staticClass:"cell-items"},[t.spider_log.length?t._e():a("div",{staticClass:"empty-data align-center"},[t._v(" --暂无数据-- ")]),t._l(t.spider_log,(function(e,s){return a("div",{key:"item"+s,staticClass:"cell-item with-expand"},[a("div",{staticClass:"cell-hd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.multipleSelection,expression:"multipleSelection"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.multipleSelection)?t._i(t.multipleSelection,e)>-1:t.multipleSelection},on:{change:function(a){var s=t.multipleSelection,l=a.target,i=!!l.checked;if(Array.isArray(s)){var n=e,o=t._i(s,n);l.checked?o<0&&(t.multipleSelection=s.concat([n])):o>-1&&(t.multipleSelection=s.slice(0,o).concat(s.slice(o+1)))}else t.multipleSelection=i}}})]),a("div",{staticClass:"cell-bd primary"},[a("div",[t._v(" "+t._s(e.spider)+" "),2==e.udg?a("a",{attrs:{href:"https://www.wbolt.com/tools-spider-detail?id="+encodeURI(e.spider)+"&utm_source=spider-analyser",target:"_blank",title:"详情"}},[a("i",{staticClass:"el-icon-link el-icon--right"})]):t._e()]),a("div",{staticClass:"wk fz-s"},[a("span",{staticClass:"ib w25"},[t._v(t._s(e.bot_type?e.bot_type:"未知类型"))]),a("span",{staticClass:"ib ml w25"},[t._v("爬取: "+t._s(e.num))]),a("span",{staticClass:"ml"},[t._v("占比: "+t._s(e.rate)+"%")])]),a("div",{staticClass:"def-hide"},[a("div",{attrs:{"data-label":"蜘蛛地址"}},[a("span",[t._v(t._s(e.bot_url))])]),a("div",{attrs:{"data-label":"最近来访"}},[a("span",[t._v(t._s(e.last_visit))])]),a("div",{staticClass:"mt btns align-right"},[a("el-button",{attrs:{plain:"",size:"mini",type:"danger"},on:{click:function(a){return t.skip_spider(e)}}},[t._v("忽略")]),a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(a){return t.stop_spider(e)}}},[t._v("拦截")])],1)])]),a("div",{staticClass:"cell-ft",on:{click:t.toggleActive}})])}))],2):a("el-table",{staticClass:"wbs-table",staticStyle:{width:"100%"},attrs:{data:t.spider_log,"default-sort":{prop:"num",order:"descending"}},on:{"sort-change":t.sortChange,"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{"class-name":"w15",label:"蜘蛛名称","sort-by":"spider",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"蜘蛛名称"}},[a("span",[a("a",{attrs:{href:"https://www.wbolt.com/tools-spider-detail?id="+encodeURI(e.row.spider)+"&utm_source=spider-analyser",target:"_blank",title:"详情"}},[t._v(t._s(e.row.spider)+" "),a("i",{staticClass:"el-icon-link el-icon--right"})])])])]}}])}),a("el-table-column",{attrs:{"sort-by":"spider","class-name":"w4em",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"类型"}},[a("span",[t._v(t._s(e.row.bot_type?e.row.bot_type:"未知"))])])]}}])}),a("el-table-column",{attrs:{label:"蜘蛛地址","class-name":"w25"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"蜘蛛地址"}},[a("span",[t._v(t._s(e.row.bot_url))])])]}}])}),a("el-table-column",{attrs:{"sort-by":"last_visit",label:"最近来访","class-name":"w15",sortable:"custom"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"最近来访"},domProps:{innerHTML:t._s(t.date_format(e.row.last_visit))}})]}}])}),a("el-table-column",{attrs:{"class-name":"w4em",label:"爬取URLs"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"爬取URLs"}},[a("span",[t._v(t._s(e.row.num))])])]}}])}),a("el-table-column",{attrs:{label:"占比",sortable:"custom","sort-by":"num","class-name":"w4em"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"占比"}},[a("span",[t._v(t._s(e.row.rate)+"%")])])]}}])}),a("el-table-column",{attrs:{align:"right","class-name":"w15",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{plain:"",size:"mini",type:"danger"},on:{click:function(a){return t.skip_spider(e.row)}}},[t._v("忽略")]),a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(a){return t.stop_spider(e.row)}}},[t._v("拦截")])]}}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.spider_log.length>0,expression:"spider_log.length > 0"}],staticClass:"btns-bar with-ctrl-area"},[a("div",{staticClass:"wb-ctrl-area"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.batch_op,callback:function(e){t.batch_op=e},expression:"batch_op"}},[a("el-option",{attrs:{label:"忽略",value:"skip"}}),a("el-option",{attrs:{label:"拦截",value:"stop"}})],1),a("el-button",{staticClass:"ml-s",attrs:{type:"info",plain:"",size:"small"},on:{click:t.batch_apply}},[t._v("应用")])],1),a("el-pagination",{attrs:{background:"",small:!!t.$cnf.is_mobile,layout:t.$cnf.is_mobile?"pager, total, prev, next":"total, prev, pager, next, jumper","page-size":100,total:1*t.total,"pager-count":5},on:{"current-change":t.nav_page}})],1)],1),a("wb-prompt",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"mt"})],1),t.$cnf.is_pro?t._e():a("wbs-more-sources")],1)},l=[],i={name:"ListSpider",components:{},data(){const t=this;return{isLoaded:!1,is_pro:t.$cnf.is_pro,cnf:{spider:[],code:[]},spider_log:[],total:0,page:1,num:100,sort:"num",order:"desc",q:{code:"",type:"",day:"",spider:"",name:""},search:{},multipleSelection:[],batch_op:""}},created(){Object.assign(this.search,this.q),this.loadData(),this.load_cnf()},methods:{handleSelectionChange(t){this.multipleSelection=t},batch_apply(){const t=this;if(!t.batch_op)return!1;if(t.multipleSelection.length<1)return t.$wbui.toast("未选择项目"),!1;if("skip"==t.batch_op){let e=[];if(t.multipleSelection.forEach(t=>{-1==e.indexOf(t.spider)&&e.push(t.spider)}),e.length<1)return;return t.$wbui.confirm("批量忽略所选蜘蛛，将不再记录此蜘蛛日志。可通过插件设置恢复统计。",()=>{const a=t.$wbui.toast("执行中...",{time:180});t.$api.saveData({_ajax_nonce:_wb_spider_analyser_ajax_nonce,action:t.$cnf.action.act,op:"list",skip:e}).then(e=>{t.$wbui.close(a),t.$wbui.toast("已忽略所选记录"),t.page=1,t.loadData()})}),!1}if("stop"==t.batch_op){if(!t.is_pro)return t.$wbui.open({content:"该功能仅Pro版本提供",btn:["激活Pro版"],yes(){t.$router.push({path:"/pro"})}}),!1;let e=[];if(t.multipleSelection.forEach(t=>{-1==e.indexOf(t.spider)&&e.push(t.spider)}),e.length<1)return;t.$wbui.confirm("批量拦截所选蜘蛛？可通过蜘蛛拦截列表移除。",()=>{const a=t.$wbui.toast("执行中...",{time:180});t.$api.saveData({_ajax_nonce:_wb_spider_analyser_ajax_nonce,action:t.$cnf.action.act,op:"stop",cid:12,new:[e,""]}).then(e=>{t.$wbui.close(a),t.$wbui.toast("已添加所选至蜘蛛拦截清单"),t.page=1,t.loadData()})})}return!1},sortChange(t){if("custom"!=t.column.sortable)return;if(!t.order)return;const e=this;e.page=1,e.sort=t.column.sortBy,e.order="ascending"==t.order?"asc":"desc",e.total>0&&e.loadData()},nav_page(t){this.page=t,this.loadData()},search_log(){this.page=1,Object.assign(this.search,this.q),this.loadData()},skip_spider(t){const e=this;return e.$wbui.confirm("将"+t.spider+"蜘蛛列为忽略列表，将不再记录此蜘蛛日志。可通过插件设置恢复统计。",()=>{e.$api.saveData({_ajax_nonce:_wb_spider_analyser_ajax_nonce,action:e.$cnf.action.act,op:"list",skip:t.spider}).then(t=>{e.$wbui.toast("操作成功"),e.page=1,e.loadData()})}),!1},stop_spider(t){const e=this;if(e.is_pro)return e.$wbui.confirm("拦截名称为"+t.spider+"的蜘蛛？可通过蜘蛛拦截列表移除。",()=>{e.$api.saveData({_ajax_nonce:_wb_spider_analyser_ajax_nonce,action:e.$cnf.action.act,op:"stop",cid:12,new:[t.spider,""]}).then(t=>{e.$wbui.toast("操作成功"),e.page=1,e.loadData()})}),!1;e.$wbui.open({content:"该功能仅Pro版本提供",btn:["激活Pro版"],yes(){e.$router.push({path:"/pro"})}})},loadData(){const t=this;t.$api.getData({_ajax_nonce:_wb_spider_analyser_ajax_nonce,action:t.$cnf.action.act,op:"list",q:t.search,page:t.page,num:t.num,sort:t.sort,order:t.order}).then(e=>{t.spider_log=e.data,t.total=e.total,t.num=e.num})},load_cnf(){const t=this;t.$api.getData({action:t.$cnf.action.act,op:"log_cnf"}).then(e=>{t.cnf=e["data"],t.isLoaded=!0})},date_format(t){const e=t.split(" ");return e.length>1?'<span class="ib">'+e[0]+'</span> <span class="ib">'+e[1]+"</span>":t},toggleActive(t){t.target.parentNode.classList.toggle("active")}}},n=i,o=a("2877"),r=Object(o["a"])(n,s,l,!1,null,null,null);e["default"]=r.exports}}]);