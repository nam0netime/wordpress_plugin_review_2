(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1158:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(141),l=a(2),s=a(68),r=a(5),i=a(92),m=a(248),o=a(3),b=a(93);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,c=!1,l=void 0;try{for(var s,r=e[Symbol.iterator]();!(n=(s=r.next()).done)&&(a.push(s.value),!t||a.length!==t);n=!0);}catch(e){c=!0,l=e}finally{try{n||null==r.return||r.return()}finally{if(c)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=u(Object(n.useState)(!1),2),t=e[0],a=e[1],d=Object(s.a)(Object(r.Y)()).formatAmount,f=[{key:"column_date",label:Object(l.__)("Date","wp-marketing-automations"),isLeftAligned:!0},{key:"column_order_id",label:Object(l.__)("Order ID","wp-marketing-automations"),isLeftAligned:!1},{key:"column_status",label:Object(l.__)("Status","wp-marketing-automations"),isLeftAligned:!1},{key:"column_products",label:Object(l.__)("Products","wp-marketing-automations"),isLeftAligned:!1},{key:"column_net_sale",label:Object(l.__)("Revenue","wp-marketing-automations"),isLeftAligned:!1}],O=[{date:"2020-03-11 13:00:00",first_name:"John",id:1321,item_count:2,items:{235:"Product 1",347:"Product 2"},last_name:"Doe",status:"Completed",total:"24.51"},{date:"2020-03-16 06:54:00",first_name:"John",id:1322,item_count:2,items:{235:"Product 1"},last_name:"Doe",status:"Completed",total:"20"},{date:"2020-03-17 14:23:00",first_name:"John",id:1323,item_count:2,items:{347:"Product 2"},last_name:"Doe",status:"Completed",total:"30.02"},{date:"2020-03-20 09:45:00",first_name:"John",id:1324,item_count:2,items:{235:"Product 1",347:"Product 2"},last_name:"Doe",status:"Completed",total:"24.51"},{date:"2020-03-21 21:34:00",first_name:"John",id:1325,item_count:3,items:{235:"Product 1",347:"Product 2"},last_name:"Doe",status:"Completed",total:"34.51"}].map((function(e){var t,a,c;return[{display:Object(r.N)(e.date),value:e.date},{display:Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#"},"#"+e.id),value:e.id},{display:e.status,value:e.status},{display:(t=e.items,a="",c=[],Object.entries(t).map((function(e){var t=u(e,2),l=(t[0],t[1]);Object(o.isEmpty)(a)&&(a=Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#"},l)),c.push(Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#"},l))})),Object(n.createElement)(n.Fragment,null,!Object(o.isEmpty)(a)&&a,!Object(o.isEmpty)(c)&&c.length>1&&Object(n.createElement)(b.a,{items:c}))),value:""},{display:d(e.total),value:e.total}]}));return Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-c-s-data"},Object(n.createElement)(c.a,{items:[{key:0,label:Object(l.__)("Products","wp-marketing-automations"),display:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-c-s-list bwf-c-s-list-items"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("Items","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value bwf-c-s-inline-p"},Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#",onClick:function(e){a(!0)}},"Product 1"),Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#",onClick:function(e){a(!0)}},"Product 2"))),Object(n.createElement)("div",{className:"bwf-c-s-list bwf-c-s-term-ui bwf-c-s-list-terms"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("Categories","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value"},Object(n.createElement)("ul",null,Object(n.createElement)("li",{key:0},Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#",onClick:function(e){a(!0)}},Object(n.createElement)("span",null,"Category 1"))),Object(n.createElement)("li",{key:2},Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#",onClick:function(e){a(!0)}},Object(n.createElement)("span",null,"Category 2")))))),Object(n.createElement)("div",{className:"bwf-c-s-list bwf-c-s-term-ui bwf-c-s-list-terms"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("Tags","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value"},Object(n.createElement)("ul",null,Object(n.createElement)("li",{key:0},Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#",onClick:function(e){a(!0)}},Object(n.createElement)("span",null,"Tag 1"))),Object(n.createElement)("li",{key:2},Object(n.createElement)("a",{className:"bwf-a-no-underline",href:"#",onClick:function(e){a(!0)}},Object(n.createElement)("span",null,"Tag 2")))))))},{key:1,label:Object(l.__)("Marketing","wp-marketing-automations"),display:Object(n.createElement)("div",{className:"bwf-c-s-list bwf-c-s-term-ui bwf-c-s-list-coupons"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("Coupons","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value"},Object(n.createElement)("ul",null,Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"dashicons dashicons-tag"}),Object(n.createElement)("span",null,"Coupon 1")),Object(n.createElement)("li",null,Object(n.createElement)("span",{className:"dashicons dashicons-tag"}),Object(n.createElement)("span",null,"Coupon 2")))))},{key:2,label:Object(l.__)("Orders","wp-marketing-automations"),display:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("div",{className:"bwf-c-s-list"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("Total Spend","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value"},d(135))),Object(n.createElement)("div",{className:"bwf-c-s-list"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("AOV","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value"},Object(n.createElement)("div",null,d(89),Object(n.createElement)("span",{className:"bwf-c-s-hl bwf-c-s-hl-g"},56,"%")))),Object(n.createElement)("div",{className:"bwf-c-s-list"},Object(n.createElement)("div",{className:"bwf-c-s-label"},Object(l.__)("Details","wp-marketing-automations")),Object(n.createElement)("div",{className:"bwf-c-s-po-value"},Object(n.createElement)(m.a,{className:"bwfcrm-contacts-orders",title:"",rows:O,headers:f,query:{paged:1},rowsPerPage:10,totalRows:5,isLoading:!1,showMenu:!1,rowHeader:!0}),Object(n.createElement)("div",{className:"bwf_clear_20"}))))}]})),Object(n.createElement)(i.a,{isOpen:t,onRequestClose:function(){return a(!1)}}))}}}]);