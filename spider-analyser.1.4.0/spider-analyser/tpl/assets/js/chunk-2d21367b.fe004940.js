(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21367b"],{ad13:function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wbs-content wbsc-spa-summary"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"wbsc-spa-summary-inner",class:{"wb-page-loaded":t.isLoaded}},[s("div",{staticClass:"sc-wp"},[t._m(0),s("div",{staticClass:"overview-box"},[s("table",{staticClass:"wbs-table"},[t._m(1),s("tbody",[s("tr",[s("th",[t._v("今日")]),s("td",[t._v(t._s(t.summary[0].spider))]),s("td",[t._v(t._s(t.summary[0].url))]),s("td",[t._v(t._s(t.summary[0].avg_url))])]),s("tr",[s("th",[t._v("昨日")]),s("td",[t._v(t._s(t.summary[1].spider))]),s("td",[t._v(t._s(t.summary[1].url))]),s("td",[t._v(t._s(t.summary[1].avg_url))])]),s("tr",[s("th",[t._v("30天平均")]),s("td",[t._v(t._s(t.summary[2].spider))]),s("td",[t._v(t._s(t.summary[2].url))]),s("td",[t._v(t._s(t.summary[2].avg_url))])])])])])]),s("div",{staticClass:"tab-nav style-c"},[s("a",{staticClass:"tn-item",class:{current:0==t.tab_day},on:{click:function(a){return t.switch_day(0)}}},[t._v("今天")]),s("a",{staticClass:"tn-item",class:{current:1==t.tab_day},on:{click:function(a){return t.switch_day(1)}}},[t._v("昨天")]),s("a",{staticClass:"tn-item",class:{current:7==t.tab_day},on:{click:function(a){return t.switch_day(7)}}},[t._v("最近7天")]),s("a",{staticClass:"tn-item",class:{current:30==t.tab_day},on:{click:function(a){return t.switch_day(30)}}},[t._v("最近30天")])]),s("div",{staticClass:"sc-group"},[s("div",{staticClass:"sc-wp"},[t._m(2),s("div",{staticClass:"tab-nav tab-nav-chart"},[s("a",{staticClass:"tn-item",class:{current:1==t.data_type},on:{click:function(a){return t.set_type(1)}}},[t._v("蜘蛛数")]),s("a",{staticClass:"tn-item",class:{current:2==t.data_type},on:{click:function(a){return t.set_type(2)}}},[t._v("爬链数")]),s("a",{staticClass:"tn-item",class:{current:3==t.data_type},on:{click:function(a){return t.set_type(3)}}},[t._v("响应状态码")]),t.$cnf.is_mobile?[s("a",{staticClass:"tn-item",class:{current:""!=t.data_spider},on:{click:t.hotSpiderChart}},[t._v("热门蜘蛛")]),""!=t.data_spider?s("div",{staticClass:"mt hot-tags"},t._l(t.hot_spider,(function(a,i){return s("el-tag",{key:i,attrs:{effect:t.data_spider==a.spider?"dark":"plain",size:"mini"},on:{click:function(s){t.data_spider=a.spider,t.spider_data()}}},[t._v(t._s(a.spider))])})),1):t._e()]:s("el-select",{staticClass:"tn-item",class:{current:""!=t.data_spider},attrs:{filterable:"",placeholder:"热门蜘蛛"},on:{change:t.spider_data},model:{value:t.data_spider,callback:function(a){t.data_spider=a},expression:"data_spider"}},t._l(t.hot_spider,(function(t,a){return s("el-option",{key:a,attrs:{label:t.spider,value:t.spider}})})),1)],2),s("v-chart",{ref:"chart_obj",staticClass:"charts-box",staticStyle:{height:"500px","margin-right":"-10px"},attrs:{options:t.chart_conf,autoresize:!0}})],1),s("div",{staticClass:"sc-wp"},[s("h3",{staticClass:"sc-header with-flex"},[s("strong",{staticClass:"primary"},[t._v("Top10蜘蛛/爬虫")]),s("router-link",{attrs:{to:"list-spider"}},[s("svg",{staticClass:"wb-icon sico-readmore"},[s("use",{attrs:{"xlink:href":"#sico-readmore"}})])])],1),s("div",{staticClass:"log-box-b"},[s("table",{staticClass:"wbs-table table-fiexd"},[t._m(3),s("tbody",{directives:[{name:"show",rawName:"v-show",value:!t.spider_loading,expression:"!spider_loading"}]},t._l(t.top_spider,(function(a,i){return s("tr",{key:"topspider"+i},[s("td",[s("div",[s("a",{attrs:{href:"https://www.wbolt.com/tools-spider-detail?id="+encodeURI(a.spider)+"&utm_source=spider-analyser",target:"_blank",title:"详情"}},[t._v(t._s(a.spider)+" "),s("i",{staticClass:"el-icon-link el-icon--right"})])])]),s("td",{staticClass:"align-center"},[s("div",[s("span",{staticClass:"ib"},[t._v(t._s(a.num)+" "),s("router-link",{staticClass:"link-detail",attrs:{to:{path:"log",query:{spider:a.spider,day:t.tab_day}}}},[s("svg",{staticClass:"wb-icon sico-data-detail"},[s("use",{attrs:{"xlink:href":"#sico-data-detail"}})])])],1)])]),s("td",{staticClass:"align-center"},[s("div",[t._v(t._s(a.rate)+"%")])])])})),0),t.spider_loading?s("tbody",[t._m(4)]):t._e()]),t.spider_loading||t.top_spider.length?t._e():s("div",{staticClass:"empty-tips-bar"},[t._v(" -- 暂无数据 -- ")])])])]),s("div",{staticClass:"sc-group"},[s("div",{staticClass:"sc-wp"},[s("h3",{staticClass:"sc-header with-flex"},[s("strong",{staticClass:"primary"},[t._v("Top10蜘蛛爬取URL")]),s("router-link",{attrs:{to:"path"}},[s("svg",{staticClass:"wb-icon sico-readmore"},[s("use",{attrs:{"xlink:href":"#sico-readmore"}})])])],1),s("div",{staticClass:"log-box"},[t.$cnf.is_mobile?s("div",{staticClass:"cell-items"},t._l(t.top_url,(function(a,i){return s("div",{key:"top_url"+i,staticClass:"cell-item with-expand"},[s("div",{staticClass:"cell-hd w2em wk"},[t._v(t._s(i+1)+".")]),s("div",{staticClass:"cell-bd primary"},[s("div",{staticClass:"url"},[s("a",{attrs:{href:t.$cnf.home_url+a.url,target:"_blank",title:"查看"}},[t._v(t._s(a.url))])]),s("div",{staticClass:"wk"},[s("span",{staticClass:"ib"},[t._v("爬取次数: "+t._s(a.num)+" "),s("router-link",{staticClass:"link-detail",attrs:{to:{path:"log",query:{day:t.tab_day,url:a.url}}}},[s("svg",{staticClass:"wb-icon sico-data-detail"},[s("use",{attrs:{"xlink:href":"#sico-data-detail"}})])])],1),s("span",{staticClass:"ib ml"},[t._v("占比: "+t._s(a.rate)+"%")])])])])})),0):s("table",{staticClass:"wbs-table table-fixed"},[t._m(5),s("tbody",{directives:[{name:"show",rawName:"v-show",value:!t.url_loading,expression:"!url_loading"}]},t._l(t.top_url,(function(a,i){return s("tr",{key:"topurl"+i},[s("td",[s("div",{staticClass:"url",attrs:{"data-label":"URL"}},[s("a",{attrs:{href:t.$cnf.home_url+a.url,target:"_blank",title:"查看"}},[t._v(t._s(a.url))])])]),s("td",{staticClass:"align-center"},[s("div",{attrs:{"data-label":"爬取次数"}},[s("span",{staticClass:"ib"},[t._v(t._s(a.num)+" "),s("router-link",{staticClass:"link-detail",attrs:{to:{path:"log",query:{day:t.tab_day,url:a.url}}}},[s("svg",{staticClass:"wb-icon sico-data-detail"},[s("use",{attrs:{"xlink:href":"#sico-data-detail"}})])])],1)])]),s("td",{staticClass:"align-center"},[s("div",{attrs:{"data-label":"占比"}},[t._v(t._s(a.rate)+"%")])])])})),0),t.url_loading?s("tbody",[t._m(6)]):t._e()]),t.url_loading||!t.top_url||t.top_url.length?t._e():s("div",{staticClass:"empty-tips-bar"},[t._v(" -- 暂无数据 -- ")])])]),s("div",{staticClass:"sc-wp"},[s("h3",{staticClass:"sc-header with-flex"},[s("strong",{staticClass:"primary"},[t._v("Top10热门文章")]),s("router-link",{attrs:{to:"post"}},[s("svg",{staticClass:"wb-icon sico-readmore"},[s("use",{attrs:{"xlink:href":"#sico-readmore"}})])])],1),s("div",{staticClass:"log-box"},[t.$cnf.is_mobile?s("div",{staticClass:"cell-items"},t._l(t.top_post,(function(a,i){return s("div",{key:"top_post"+i,staticClass:"cell-item with-expand"},[s("div",{staticClass:"cell-hd w2em wk"},[t._v(t._s(i+1)+".")]),s("div",{staticClass:"cell-bd primary"},[s("div",{staticClass:"url"},[s("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.post_title))])]),s("div",{staticClass:"wk"},[s("span",{staticClass:"ib"},[t._v("收录状态: "+t._s({0:"未标记",1:"已收录",2:"未收录"}[a.status]))]),s("span",{staticClass:"ib ml"},[t._v("蜘蛛访问量: "+t._s(a.num)+" "),s("router-link",{staticClass:"link-detail",attrs:{to:{path:"log",query:{day:t.tab_day,url:a.url}}}},[s("svg",{staticClass:"wb-icon sico-data-detail"},[s("use",{attrs:{"xlink:href":"#sico-data-detail"}})])])],1)])])])})),0):s("table",{staticClass:"wbs-table table-fixed"},[t._m(7),s("tbody",{directives:[{name:"show",rawName:"v-show",value:!t.url_loading,expression:"!url_loading"}]},t._l(t.top_post,(function(a,i){return s("tr",{key:"toppost"+i},[s("td",[s("div",{staticClass:"url",attrs:{"data-label":"文章"}},[s("a",{attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.post_title))])])]),s("td",{staticClass:"align-center"},[s("div",{attrs:{"data-label":"收录状态"}},[t._v(" "+t._s({0:"未标记",1:"已收录",2:"未收录"}[a.status])+" ")])]),s("td",{staticClass:"align-center"},[s("div",{attrs:{"data-label":"蜘蛛访问量"}},[s("span",{staticClass:"ib"},[t._v(t._s(a.num)+" "),s("router-link",{staticClass:"link-detail",attrs:{to:{path:"log",query:{day:t.tab_day,url:a.url}}}},[s("svg",{staticClass:"wb-icon sico-data-detail"},[s("use",{attrs:{"xlink:href":"#sico-data-detail"}})])])],1)])])])})),0),t.url_loading?s("tbody",[t._m(8)]):t._e()]),t.url_loading||!t.top_url||t.top_url.length?t._e():s("div",{staticClass:"empty-tips-bar"},[t._v(" -- 暂无数据 -- ")])])])])])])},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h3",{staticClass:"sc-header"},[s("strong",[t._v("今日蜘蛛")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th"),s("th",[t._v("蜘蛛数")]),s("th",[t._v("爬链数")]),s("th",[t._v("爬链均值")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h3",{staticClass:"sc-header"},[s("strong",[t._v("趋势图")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("蜘蛛名称")]),s("th",{staticClass:"align-center"},[t._v("爬链数")]),s("th",{staticClass:"align-center"},[t._v("占比")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td"),s("td",[s("div",{staticClass:"wbui-loading"},[s("div",{staticClass:"wbui-cont"},[s("i"),s("i",{staticClass:"wbui-load"}),s("i")])])]),s("td")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("URL")]),s("th",{staticClass:"align-center"},[t._v("爬取次数")]),s("th",{staticClass:"align-center"},[t._v("占比")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td"),s("td",[s("div",{staticClass:"wbui-loading"},[s("div",{staticClass:"wbui-cont"},[s("i"),s("i",{staticClass:"wbui-load"}),s("i")])])]),s("td")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("tr",[s("th",[t._v("文章")]),s("th",{staticClass:"align-center"},[t._v("收录状态")]),s("th",{staticClass:"align-center"},[t._v("蜘蛛访问量")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("tr",[s("td"),s("td",[s("div",{staticClass:"wbui-loading"},[s("div",{staticClass:"wbui-cont"},[s("i"),s("i",{staticClass:"wbui-load"}),s("i")])])]),s("td")])}],r=s("251f"),l=s.n(r);const d={tooltip:{trigger:"axis",backgroundColor:"rgba(0,0,0,0.8)",textStyle:{color:"rgba(255,255,255,0.8)"},padding:10},legend:{type:"scroll",bottom:30,textStyle:{color:"#999"}},grid:{show:!0,left:"left",containLabel:!0,top:20,right:20,bottom:60,borderColor:"rgba(255,255,255,0)"},xAxis:{boundaryGap:!1,type:"category",axisTick:{show:!0,lineStyle:{color:"rgba(0,0,0,.25)"},interval:0,length:2},axisLine:{show:!0,lineStyle:{width:1,color:"rgba(0,0,0,.15)"}},axisLabel:{color:"#ccc",interval:2},splitLine:{show:!1},nameTextStyle:{align:"right"}},yAxis:{type:"value",splitLine:{lineStyle:{type:"dotted",color:"rgba(0,0,0,.15)"}},axisLine:{show:!0,lineStyle:{width:1,color:"rgba(0,0,0,.15)"}},axisTick:{show:!1},axisLabel:{color:"#ccc",formatter(t){var a=[];return t<1e3&&a.push(t),t>=1e3&&(t/=1e3,a.push(t+"k")),a}},minInterval:1,max(t){console.log(t);var a=Math.ceil(Math.max(t.max,10)/4);console.log([a]);var s=(""+a).length-1,i=Math.pow(10,s),e=Math.round(a/i)*i;console.log([e,4*e,t.max,3*e]);var r=5*e,l=5;while(r<t.max){if(console.log(l),l++,l>20){r=t.max;break}r=e*l}return r}},color:["#5B8FF9","#7e9cd7","#E8684A","#9C4AE8"]};var n={name:"Summary",components:{"v-chart":l.a},data(){let t={summary:[{spider:0,url:0,avg_url:0},{spider:0,url:0,avg_url:0},{spider:0,url:0,avg_url:0}],hot_spider:[],tab_day:0,data_type:1,data_spider:"",top_spider:[],top_url:[],top_post:[],chart_conf:{},chart_loading:1,url_loading:1,post_loading:1,spider_loading:1,new_ver:0,isLoaded:!1};return t},created(){this.summary_data(),this.update_data()},methods:{update_data(){this.top_spider_data(),this.top_url_data(),this.top_post_data(),""!=this.data_spider?this.spider_data():this.chart_data()},chart_data(){const t=["","蜘蛛数","爬链总量","爬链均值"],a=this;a.$refs.chart_obj&&a.$refs.chart_obj.showLoading({text:"加载中...",color:"#06c",textColor:"#333",maskColor:"rgba(255, 255, 255, .8)",zlevel:1}),a.$api.getData({action:"spider_analyser",op:"chart_data",day:a.tab_day,type:a.data_type}).then(s=>{const i=JSON.parse(JSON.stringify(d)),e=a.handlerChartOption(i);if(e.xAxis.data=s.data[0],3==a.data_type){let t=s.data[1];for(var r in e.series=[],t)e.series.push({name:r+"状态",data:t[r],type:"line",smooth:!0,symbol:a.$cnf.is_mobile?"none":"emptyCircle"})}else e.series=[{name:t[a.data_type],data:s.data[1],type:"line",smooth:!0,symbol:a.$cnf.is_mobile?"none":"emptyCircle"},{name:"上一周期数值",data:s.compare[1],type:"line",smooth:!0,lineStyle:{type:"dashed"},symbol:a.$cnf.is_mobile?"none":"emptyCircle"}];a.chart_conf=e,a.chart_loading=0,a.isLoaded=!0,a.$refs.chart_obj.hideLoading()})},handlerChartOption(t){const a=this;return a.$cnf.is_mobile?(t.xAxis.axisTick.length=0,a.tab_day>=7&&(t.xAxis.axisLabel.interval="auto",t.xAxis.axisLabel.showMinLabel=!0)):(7==a.tab_day&&(t.xAxis.axisLabel.interval=0,t.xAxis.axisLabel.showMinLabel=!1,t.xAxis.axisLabel.showMaxLabel=!1),a.tab_day>7&&(t.xAxis.axisLabel.interval=3)),a.tab_day<2&&(t.xAxis.axisLabel.formatter=(t,a)=>""+a),t},top_spider_data(){const t=this;t.$api.getData({action:t.$cnf.action.act,op:"top_spider",day:t.tab_day}).then(a=>{t.top_spider=a.data,t.hot_spider=a.data.slice(0,3),t.spider_loading=0})},top_url_data(){const t=this;t.$api.getData({action:t.$cnf.action.act,op:"top_url",day:t.tab_day}).then(a=>{t.top_url=a.data,t.url_loading=0})},top_post_data(){const t=this;t.$api.getData({action:t.$cnf.action.act,op:"post",ds:1,q:{day:t.tab_day},page:1,num:10}).then(a=>{t.top_post=a.data,t.post_loading=0})},summary_data(){const t=this;t.$api.getData({action:t.$cnf.action.act,op:"summary"}).then(a=>{t.summary=a.data})},switch_day(t){this.tab_day=t,4==this.data_type&&(this.data_type=1),this.hot_spider=[],this.chart_loading=1,this.url_loading=1,this.spider_loading=1,this.update_data()},spider_data(){const t=this;t.data_type=4,t.$api.getData({action:"spider_analyser",op:"chart_data",day:t.tab_day,type:2,spider:t.data_spider}).then(a=>{const s=JSON.parse(JSON.stringify(d)),i=t.handlerChartOption(s);i.xAxis.data=a.data[0],i.series=[{name:t.data_spider+"爬链",data:a.data[1],type:"line",smooth:!0,symbol:t.$cnf.is_mobile?"none":"emptyCircle"},{name:"上一周期数值",data:a.compare[1],type:"line",smooth:!0,lineStyle:{type:"dashed"},symbol:t.$cnf.is_mobile?"none":"emptyCircle"}],t.chart_conf=i,t.chart_loading=0,t.isLoaded=!0})},set_type(t){this.data_spider="",this.data_type=t,this.chart_loading=1,this.chart_data()},admin_url(t){return this.$cnf.base_url+t},hotSpiderChart(){this.hot_spider.length?(this.data_spider=this.hot_spider[0].spider,this.spider_data()):this.$wbui.toast("暂无热门蜘蛛记录")}}},o=n,c=s("2877"),_=Object(c["a"])(o,i,e,!1,null,null,null);a["default"]=_.exports}}]);