(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c18c"],{f27a:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"wbs-content-inner",class:{"wb-page-loaded":t.isLoaded}},[a("div",{staticClass:"wbs-main with-mask"},[t.is_pro?t._e():a("div",{staticClass:"getpro-mask"},[a("div",{staticClass:"mask-inner"},[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.getPro}},[t._v("获取PRO版本")]),a("p",{staticClass:"tips"},[t._v("* 激活PRO版本即可使用")])],1)]),a("wbs-filter-bar",[a("el-input",{staticClass:"ctrl-item wbs-input-short",attrs:{size:"small",placeholder:"输入名称或者IP地址",clearable:""},model:{value:t.q.name,callback:function(e){t.$set(t.q,"name",e)},expression:"q.name"}}),a("el-button",{staticClass:"ctrl-item",attrs:{size:"small",type:"primary",plain:"",name:"search"},on:{click:t.search_log}},[t._v("筛选")])],1),t.isLoaded?a("div",{staticClass:"log-box"},[t.$cnf.is_mobile?a("div",{staticClass:"cell-items"},[t.spider_log.length?t._e():a("div",{staticClass:"empty-data align-center"},[t.auto_deny?a("span",[t._v("已启用智能拦截功能，当前列表不记录伪蜘蛛数据。")]):a("span",[t._v("--暂无数据--")])]),t._l(t.spider_log,(function(e,s){return a("div",{key:"item"+s,staticClass:"cell-item with-expand"},[a("div",{staticClass:"cell-hd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.multipleSelection,expression:"multipleSelection"}],attrs:{type:"checkbox"},domProps:{value:e,checked:Array.isArray(t.multipleSelection)?t._i(t.multipleSelection,e)>-1:t.multipleSelection},on:{change:function(a){var s=t.multipleSelection,i=a.target,l=!!i.checked;if(Array.isArray(s)){var n=e,o=t._i(s,n);i.checked?o<0&&(t.multipleSelection=s.concat([n])):o>-1&&(t.multipleSelection=s.slice(0,o).concat(s.slice(o+1)))}else t.multipleSelection=l}}})]),a("div",{staticClass:"cell-bd primary"},[a("div",[a("span",{staticClass:"wk fz-s"},[t._v("伪装名称: ")]),a("span",[t._v(t._s(e.name))])]),a("div",{staticClass:"wk fz-s"},[t._v(" IP地址: "),a("span",[t._v(t._s(e.ip)+" "),a("a",{attrs:{href:"https://www.wbolt.com/tools-spider?ip="+e.ip+"&utm_source=spider-analyser",target:"_blank",title:"查询"}},[a("i",{staticClass:"el-icon-search el-icon--right"})])])]),a("div",{staticClass:"def-hide"},[a("div",{staticClass:"btns align-right"},[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(a){return t.add(s,e)}}},[t._v("拦截")])],1)])]),a("div",{staticClass:"cell-ft",on:{click:t.$WB.toggleActive}})])}))],2):a("el-table",{staticClass:"wbs-table mt",staticStyle:{width:"100%"},attrs:{data:t.spider_log},on:{"selection-change":t.handleSelectionChange}},[a("template",{slot:"empty"},[t.auto_deny?a("span",[t._v("已启用智能拦截功能，当前列表不记录伪蜘蛛数据。")]):a("span",[t._v("--暂无数据--")])]),a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"伪装名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"伪装名称"}},[a("span",[t._v(t._s(e.row.name))])])]}}],null,!1,1009836744)}),a("el-table-column",{attrs:{label:"IP地址"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{attrs:{"data-label":"IP地址"}},[a("span",[t._v(t._s(e.row.ip)+" "),a("a",{attrs:{href:"https://www.wbolt.com/tools-spider?ip="+e.row.ip+"&utm_source=spider-analyser",target:"_blank",title:"查询"}},[a("i",{staticClass:"el-icon-search el-icon--right"})])])])]}}],null,!1,2934958034)}),a("el-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini",type:"primary",plain:""},on:{click:function(a){return t.add(e.$index,e.row)}}},[t._v("拦截")])]}}],null,!1,3575290243)})],2),a("div",{directives:[{name:"show",rawName:"v-show",value:t.spider_log.length>0,expression:"spider_log.length > 0"}],staticClass:"btns-bar with-ctrl-area"},[a("div",{staticClass:"wb-ctrl-area"},[a("el-select",{attrs:{size:"small",placeholder:"批量操作"},model:{value:t.batch_op,callback:function(e){t.batch_op=e},expression:"batch_op"}},[a("el-option",{attrs:{label:"拦截",value:"stop"}})],1),a("el-button",{staticClass:"ml-s",attrs:{type:"info",plain:"",size:"small"},on:{click:t.batch_apply}},[t._v("应用")])],1),a("el-pagination",{attrs:{background:"",small:!!t.$cnf.is_mobile,layout:t.$cnf.is_mobile?"pager, total, prev, next":"total, prev, pager, next, jumper","page-size":20,total:1*t.total,"pager-count":5},on:{"current-change":t.nav_page}})],1)],1):t._e(),a("wb-prompt",{directives:[{name:"show",rawName:"v-show",value:t.isLoaded,expression:"isLoaded"}],staticClass:"mt"})],1),t.$cnf.is_pro?t._e():a("wbs-more-sources")],1)},i=[],l=(a("6104"),{name:"ListSuspected",data(){const t=this;return{isLoaded:!1,is_pro:t.$cnf.is_pro,cnf:{spider:[],code:[]},config:{},spider_log:[],total:0,page:1,num:20,q:{name:""},data:{spider_log:[],log_loading:1,total:0,page:1,num:20},search:{},one:{name:"",ip:""},multipleSelection:[],batch_op:"",auto_deny:window.wb_spider_auto}},mounted(){const t=this;t.$verify(t.verify_run),console.log("mounted-suspected")},methods:{search_log(){const t=this;t.page=1,t.loadData()},handleSelectionChange(t){this.multipleSelection=t},batch_apply(){const t=this;if(!t.batch_op)return!1;if(t.multipleSelection.length<1)return t.$wbui.toast("未选择项目"),!1;if("stop"==t.batch_op){if(!t.is_pro)return t.$wbui.open({content:"该功能仅Pro版本提供",btn:["激活Pro版"],yes(){t.$router.push({path:"/pro"})}}),!1;let e=[];if(t.multipleSelection.forEach(t=>{-1==e.indexOf(t.ip)&&e.push(t.ip)}),e.length<1)return;t.$wbui.confirm("批量拦截所选伪蜘蛛IP？可通过蜘蛛拦截列表移除。",()=>{const a=t.$wbui.toast("执行中...",{time:180});t.$api.saveData({_ajax_nonce:_wb_spider_analyser_ajax_nonce,action:t.$cnf.action.act,op:"stop",cid:14,add:["",e]}).then(e=>{t.$wbui.close(a),t.$wbui.toast("已添加所选至蜘蛛拦截清单"),t.page=1,t.loadData()})})}return!1},add(t,e){const a=this;let s={add:["",e.ip],cid:14,_ajax_nonce:_wb_spider_analyser_ajax_nonce};Object.assign(s,a.config.param),s.op="stop",a.$wbui.confirm("拦截IP为"+e.ip+"的蜘蛛？可通过蜘蛛拦截列表移除。",()=>{a.$api.saveData(s).then(t=>{a.$wbui.toast("操作成功"),a.page=1,a.loadData()})})},nav_page(t){this.page=t,this.loadData()},loadData(){const t=this;let e={status:2,page:t.page,num:t.num,_ajax_nonce:_wb_spider_analyser_ajax_nonce};Object.assign(e,t.config.param),e.op="stop",e.kw=t.q.name,t.$api.getData(e).then(e=>{t.spider_log=e.data,t.total=e.total,t.num=e.num,t.isLoaded=!0})},getPro(){this.$router.push({path:"/pro"})},verify_run(t,e){t&&this.set_cnf(e),t||(this.isLoaded=!0)},set_cnf(t){const e=this;e.config=t,e.is_pro=1,e.loadData(),e.$isPrdActive(e.$WB)}}}),n=l,o=a("2877"),c=Object(o["a"])(n,s,i,!1,null,null,null);e["default"]=c.exports}}]);