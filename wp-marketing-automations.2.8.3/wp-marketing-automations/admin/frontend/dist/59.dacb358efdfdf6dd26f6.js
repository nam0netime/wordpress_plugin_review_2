(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(5),c=n(17),o=n(816),i=n(807),s=n(6),l=n.n(s),u=n(2),b=n(248),p=n(3),f=n(38),m=n(4),d=n(16),O=n(250),g=n(267),j=n(255),y=n(68),v=n(8);function _(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||w(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var P=Object(y.a)(Object(r.Y)()).formatAmount,k=function(e){var t=e.campaign,n=e.exclude,c=e.onExcludeId,s=!(!t||!t.parent)&&t.parent,y=!!s,w=function(e){var t=Object(p.isEmpty)(e.country)?"":j[e.country],n=Object(r.zb)([e.city,e.state,t],", ");return Object(p.isEmpty)(Object(p.trim)(n))?"":n},E=function(e){var t=w(e);return e.country||t?Object(a.createElement)(d.a,{justify:"start"},!Object(p.isEmpty)(e.country)&&Object(a.createElement)(d.c,null,Object(a.createElement)(g.a,{code:e.country,size:18})),Object(a.createElement)(d.c,null,t&&Object(a.createElement)(a.Fragment,null,Object(a.createElement)("span",null,w(e)),Object(a.createElement)("br",null)))):Object(a.createElement)("span",null,Object(u.__)("-","wp-marketing-automations"))},k=function(e){return Object(a.createElement)(f.a,{href:"admin.php?page=autonami&path=/contact/"+e.id,className:"bwf-a-no-underline"},Object(a.createElement)(O.a,{contact:e,hideJoiningDate:!0}))},S=function(e){return Object(a.createElement)("div",{className:"bwf-c-contact-details-cell"},1==t.type&&(e.email?Object(a.createElement)(d.a,{justify:"start",align:"top"},Object(a.createElement)(d.c,null,Object(a.createElement)(v.a,{icon:"mail"})),Object(a.createElement)(d.c,null,Object(a.createElement)(f.a,{href:"mailto:"+e.email,className:"bwf-a-no-underline",type:"external"},e.email))):Object(a.createElement)("span",null,Object(u.__)("-","wp-marketing-automations"))),[2,3].includes(parseInt(t.type))&&(Object(p.isEmpty)(e.contact_no)?"-":Object(a.createElement)(d.a,{justify:"start",align:"top"},Object(a.createElement)(d.c,null,Object(a.createElement)(v.a,{icon:"phone"})),Object(a.createElement)(d.c,null,Object(a.createElement)(f.a,{href:"tel:"+e.contact_no,className:"bwf-a-no-underline",type:"external"},e.contact_no)))))},x=Object(o.a)(),C=x.getPageNumber,I=x.getPerPageCount,N=x.getTotalCount,A=x.getLoading,L=x.getContacts,D=Object(i.a)().fetch,T=e.query,q=L(),M=C(),F=I(),B=N(),J=A(),R=h(Object(a.useState)(!0),2),G=R[0],z=R[1];Object(a.useEffect)((function(){G&&B>0&&z(!1)}),[B]);var U=[{cellClassName:"is-checkbox-column",key:"id",label:"",required:!0},{key:"contact",label:Object(u.__)("Contact","wp-marketing-automations"),isLeftAligned:!0,required:!0},{key:"contact_details",label:Object(u.__)("Details","wp-marketing-automations"),isLeftAligned:!0}];Object(r.yb)()?U.push({key:"total_spent",label:Object(u.__)("Total Spent","wp-marketing-automations"),isLeftAligned:!0}):U.push({key:"column_location",label:Object(u.__)("Location","wp-marketing-automations"),isLeftAligned:!0});var H=function(e){var t=e.wc,n=t.total_order_count,r=t.total_order_value;t.total_purchased_items;return Object(a.createElement)(a.Fragment,null,Object(a.createElement)("div",{className:"bwf-c-listing-total-spent"},r&&n?Object(a.createElement)("div",{className:"bwf-c-total-spent-amount"},P(r)," |"," ",n," ",Object(u.__)(parseInt(n)>1?"orders":"order","wp-marketing-automations")):"-"))},$=q.map((function(e){var t=function(e){return Object(p.merge)({id:0,email:"-",first_name:"",last_name:"",creation_date:"",fields:{marketing_status:"0",first_order_date:"",country:"",city:"",state:"",phone:""},wc:{id:1,l_order_date:"",total_order_count:0,total_order_value:0,total_purchased_items:0}},e)}(e),o=[{display:Object(a.createElement)(m.CheckboxControl,{onChange:function(e){return a=t.id,void c(e?n.filter((function(e){return e!==a})):[].concat(_(n),[a]));var a},"aria-label":Object(u.__)("Select"),checked:-1===n.indexOf(t.id)}),value:t.id},{display:k(t),value:Object(r.zb)([t.first_name,t.last_name]," ")},{display:S(t),value:Object(u.__)("Email: "+t.email+", Phone: "+t.phone,"wp-marketing-automations")}];return Object(r.yb)()?o.push({display:H(t),value:""}):o.push({display:E(t),value:w(t)}),o})),Q=function(e){if(e!==F){var n=T,a=!1;t&&t.data.is_promotional?(n.status_is=1,a=!0):n.status_is_not=2;var r=!1;n&&n.lists_any&&(r=!0),D(n,0,e,!0,!1,parseInt(3===parseInt(t.type)?2:t.type),a,r,!!y&&s)}},V=l()("bwfcrm-contacts-list",{"has-search":!0}),Y=t&&!0===t.data.is_promotional?Object(u.__)("Subscribed Contacts ","wp-marketing-automations"):Object(u.__)("Contacts ","wp-marketing-automations"),K=parseInt(B)-n.length>0?" ("+(parseInt(B)-n.length)+")":"";return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(b.a,{className:V,title:Y+K,rows:$,headers:U,query:{paged:M},rowsPerPage:F,totalRows:B,isLoading:J,onPageChange:function(e,n){var a=(e-1)*F,r=T,c=!1;t&&t.data.is_promotional?(r.status_is=1,c=!0):r.status_is_not=2;var o=!1;r&&r.lists_any&&(o=!0),D(r,a,F,!0,!1,parseInt(3===parseInt(t.type)?2:t.type),c,o,!!y&&s)},onQueryChange:function(e){return"per_page"!==e?function(){}:Q},showMenu:!1,emptyMessage:Object(u.__)("No contacts found","wp-marketing-automations")}))};k.defaultProps={contacts:[]};var S=k,x=n(15),C=n(796),I=n(805),N=n(10),A=n.n(N),L=n(142),D=n(144),T=n(822),q=n(44),M=n(829);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var J=function(e){var t,n=e.campaignId,c=e.query,o=Object(T.a)();return!0===o?Object(a.createElement)(a.Fragment,null,Object(a.createElement)(q.a,null),Object(a.createElement)("div",{className:"bwf_clear_20"})):Object(a.createElement)(a.Fragment,null,Object(a.createElement)(m.Card,{className:"bwf-c-campaign-rule-selector"},Object(a.createElement)("div",{className:"bwf-display-flex bwf-space-between"},Object(a.createElement)("div",{className:"bwf-c-campaign-rule-head bwf-w-300"},Object(u.__)("Segment Contacts","wp-marketing-automations")),Object(a.createElement)(M.c,{restrictedFilters:["status_is","status_is_not"]})),Object(a.createElement)("div",{className:"bwf-c-campaign-rule-container"},Object(a.createElement)(D.a,{siteLocale:"en-US",currency:Object(r.yb)()?bwfcrm_contacts_data.currency:{},config:{title:Object(u.__)("Select Rules","wp-marketing-automations"),filters:(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o),!0!==t&&t&&t.status&&delete t.status,t),footerComponent:function(e){return Object(a.createElement)(M.a,{filter:e.data,config:e.config})},enableGrouping:!0},path:"/broadcast/".concat(n),query:c}))))},R=n(67),G=n(135),z=n(134);function U(e,t,n,a,r,c,o){try{var i=e[c](o),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,r)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,c=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(e){var t=$(Object(a.useState)({message:"",type:1}),2),n=t[0],s=t[1],l=e.location,b=l&&l.search?Object(c.parse)(l.search.substring(1)):{},f=(b.page,b.path,H(b,["page","path"])),d=$(Object(a.useState)({status:!1,loading:!1}),2),O=d[0],g=d[1],j=Object(I.a)(),y=Object(o.a)().getTotalCount,v=Object(i.a)().fetch,_=Object(z.a)().setL2Title,h=j.setCampaignValues,w=j.setExclude,E=C.a.getCampaignId(),P=C.a.getCampaignData(),k=C.a.getStep(),N=y(),D=C.a.getExcludes(),T=!(!P||!P.parent)&&P.parent,q=!!T,M=$(Object(a.useState)(!0),2),F=M[0],B=M[1];Object(a.useEffect)((function(){if(2===parseInt(k)){var e=f,t=!1;!P.data||!P.data.hasOwnProperty("is_promotional")||P.data.is_promotional?(e.status_is=1,t=!0):e.status_is_not=2;var n=!1;e&&e.lists_any&&(n=!0);var a=P&&P.type?P.type:1;v(e,0,10,!0,!1,parseInt(3===parseInt(a)?2:a),t,n,!!q&&T),!F&&w([]),B(!1)}}),[l.search]),Object(a.useEffect)((function(){_("title"in P?P.title:"")}),[P]);var Q=function(){var t,n=(t=regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n={page:b.page,path:b.path},c=void 0,c=P.data&&!Object(p.isNull)(P.data)&&P.data.hasOwnProperty("filters")?P.data.filters:{},!(JSON.stringify(c)!=JSON.stringify(f)||P.count!=N||Array.isArray(D)&&D.length>0||N<1)){t.next=12;break}if(!((a=parseInt(N)?parseInt(N)-(Array.isArray(D)?D.length:0):0)<1)){t.next=6;break}return g({status:!0,error:Object(u.__)("No Contacts are selected.","wp-marketing-automations")}),t.abrupt("return");case 6:return e.setPending(!0),t.next=9,A()({path:Object(r.m)("/broadcast/".concat(E)),method:"POST",data:{data:{filters:f,count:a,modified_by:Object(r.x)(),exclude:D},step:2},headers:{"Content-Type":"application/json"}}).then((function(e){200==e.code?(h("data",e.result),s({message:e.message,type:1}),h("step",3),Object(x.k)(n,"/",{})):s({message:e.message,type:1})}));case 9:e.setPending(!1),t.next=14;break;case 12:h("step",3),Object(x.k)(n,"/",{});case 14:case"end":return t.stop()}var c}),t)})),function(){var e=this,n=arguments;return new Promise((function(a,r){var c=t.apply(e,n);function o(e){U(c,a,r,o,i,"next",e)}function i(e){U(c,a,r,o,i,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(a.createElement)(a.Fragment,null,Object(a.createElement)(R.a,null),Object(a.createElement)("div",{className:"bwf-campaign-step-div bwf-card-wrap bwf-campaign-step-2"},Object(a.createElement)("div",{className:"bwf-card-header"},Object(a.createElement)("span",{className:"bwf-form-title"},Object(u.__)("Contacts","wp-marketing-automations"))),Object(a.createElement)("div",{className:"bwf-filters-advanced-filters"},q?Object(a.createElement)(m.Card,{className:"bwf-c-campaign-contact-table"},Object(a.createElement)("p",null,Object(u.__)("This broadcast will send emails to those contact, who didn't opened emails in the parent broadcast: ","wp-marketing-automations")+"#"+T)):Object(a.createElement)(J,{campaignId:E,query:b})),Object(a.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(a.createElement)(m.Card,{className:"bwf-c-campaign-contact-table"},Object(a.createElement)(S,{query:b,campaign:P,exclude:D,onExcludeId:function(e){return w(e)}}))),Object(a.createElement)(L.a,{message:n.message,type:n.type,removeMessage:function(){return s({message:"",type:1})}}),Object(a.createElement)("div",{className:"bwf-p-gap bwf-pt-0"},Object(a.createElement)("div",{className:"bwf-crm-campaign-navigation"},Object(a.createElement)(m.Button,{className:"bwf-crm-navigation-previous",isSecondary:!0,onClick:function(){var e={page:b.page,path:b.path};Object(x.k)(e,"/",{}),h("step",1)}},Object(u.__)("Previous","wp-marketing-automations")),Object(a.createElement)(m.Button,{isPrimary:!0,className:"bwf-crm-navigation-next",onClick:Q,isBusy:e.isPending},Object(u.__)("Next","wp-marketing-automations"))))),Object(a.createElement)(G.a,{isLoading:O.loading,successMessage:O.success,errorMessage:O.error,isOpen:O.status,onRequestClose:function(){return g({status:!1})}}))}},800:function(e,t,n){"use strict";var a=n(134),r=n(0),c=n(2);t.a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=bwfcrm_contacts_data&&bwfcrm_contacts_data.header_data?bwfcrm_contacts_data.header_data:{},s=Object(a.a)(),l=s.setActiveMultiple,u=s.resetHeaderMenu,b=s.setL2NavType,p=s.setL2Nav,f=s.setBackLink,m=s.setL2Title,d=s.setL2Content,O=s.setBackLinkLabel,g=s.setPageHeader;return Object(r.useEffect)((function(){u(),!t&&b("menu"),!t&&p(i.contacts_nav),l({leftNav:"contacts",rightNav:e}),t&&f(t),t&&O("All Contacts"),n&&m(n),n&&"Export"===n&&(o&&d(o),b("menu"),p({export:{name:Object(c.__)("All","wp-marketing-automations"),link:"admin.php?page=autonami&path=/export"}})),!t&&o&&d(o),g("Contacts")}),[e,n]),!0}},807:function(e,t,n){"use strict";var a=n(137),r=n(5),c=n(3);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.a=function(){var e=Object(a.a)("contacts"),t=e.fetch;return i(i({},l(e,["fetch"])),{},{fetch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=arguments.length>6&&void 0!==arguments[6]&&arguments[6],b=arguments.length>7&&void 0!==arguments[7]&&arguments[7],p=arguments.length>8&&void 0!==arguments[8]&&arguments[8],f=e.s,m=void 0===f?"":f,d=(e.page,e.filter,e.path,l(e,["s","page","filter","path"])),O={offset:n,limit:a,search:m,filters:d,get_wc:Object(r.yb)(),grab_totals:o,only_count:i,fetch_base:s,grab_custom_fields:!1,exclude_unsubs:u,exclude_unsubs_lists:b},g=Object(r.ab)("table_sort_data"),j=g.hasOwnProperty("contact_sort_data")?g.contact_sort_data:{},y=Object(c.isObject)(j)&&!Object(c.isEmpty)(j)?j:{},v=y.orderby,_=void 0===v?"last_modified":v,h=y.order,w=void 0===h?"desc":h;w&&_&&(O.order=w,O.order_by=_),p&&(O.unopen_broadcast=parseInt(p)),t("GET",Object(r.m)("/contacts"),O)},fetchListing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=arguments.length>6&&void 0!==arguments[6]&&arguments[6],b=arguments.length>7&&void 0!==arguments[7]&&arguments[7],p=arguments.length>8&&void 0!==arguments[8]&&arguments[8],f=e.s,m=void 0===f?"":f,d=(e.page,e.filter,e.path,l(e,["s","page","filter","path"])),O={offset:n,limit:a,search:m,filters:d,get_wc:Object(r.yb)(),grab_totals:o,only_count:i,fetch_base:s,grab_custom_fields:!1,exclude_unsubs:u,exclude_unsubs_lists:b},g=Object(r.ab)("table_sort_data"),j=g.hasOwnProperty("contact_sort_data")?g.contact_sort_data:{},y=Object(c.isObject)(j)&&!Object(c.isEmpty)(j)?j:{},v=y.orderby,_=void 0===v?"last_modified":v,h=y.order,w=void 0===h?"desc":h;w&&_&&(O.order=w,O.order_by=_),p&&(O.unopen_broadcast=parseInt(p)),t("GET",Object(r.m)("/contacts/listing"),O)},startIndexing:function(){return t("GET",Object(r.m)("/contacts"),{start_indexing:!0})}})}},816:function(e,t,n){"use strict";var a=n(136);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.a=function(){var e=Object(a.a)("contacts"),t=e.getStateProp;return c(c({},i(e,["getStateProp"])),{},{getContacts:function(){return t("contacts_list")},getPageNumber:function(){return parseInt(t("offset"))/parseInt(t("limit"))+1},getPerPageCount:function(){return parseInt(t("limit"))},getTotalCount:function(){return parseInt(t("total"))},getCountData:function(){return t("countData")}})}}}]);