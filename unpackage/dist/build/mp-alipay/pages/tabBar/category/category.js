(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/tabBar/category/category"],{"0bbd":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{attrs:{_hid:0}},[a("view",{staticClass:"status",style:{position:t.headerPosition},attrs:{_hid:1}}),a("view",{staticClass:"header",style:{position:t.headerPosition},attrs:{_hid:2}},[a("view",{staticClass:"addr",attrs:{_hid:3}},[a("view",{staticClass:"icon location",attrs:{_hid:4}}),t._v(t._s(t.city),5)]),a("view",{staticClass:"input-box",attrs:{_hid:6}},[a("input",{attrs:{placeholder:"默认关键字","placeholder-style":"color:#c0c0c0;",_hid:7},on:{tap:function(i){t.toSearch()}}}),a("view",{staticClass:"icon search",attrs:{_hid:8}})]),a("view",{staticClass:"icon-btn",attrs:{_hid:9}},[a("view",{staticClass:"icon tongzhi",attrs:{_hid:10},on:{tap:t.toMsg}})])]),a("view",{staticClass:"place",attrs:{_hid:11}}),a("view",{staticClass:"category-list",attrs:{_hid:12}},[a("scroll-view",{staticClass:"left",attrs:{"scroll-y":"true",_hid:13}},t._l(t.categoryList,function(i,e,s){var n=void 0!==s?s:e;return a("view",{key:i.id,staticClass:"row",class:[e==t.showCategoryIndex?"on":""],attrs:{_hid:14,_fid:n,_fk:"id"},on:{tap:function(i){t.showCategory(e)}}},[a("view",{staticClass:"text",attrs:{_hid:15,_fid:n}},[a("view",{staticClass:"block",attrs:{_hid:16,_fid:n}}),t._v(t._s(i.title),17,n)])])},14,t._self)),a("scroll-view",{staticClass:"right",attrs:{"scroll-y":"true",_hid:18}},t._l(t.categoryList,function(i,e,s){var n=void 0!==s?s:e;return a("view",{directives:[{name:"show",rawName:"v-show",value:e==t.showCategoryIndex,expression:"index==showCategoryIndex"}],key:i.id,staticClass:"category",attrs:{_hid:19,_fid:n,_fk:"id"}},[a("view",{staticClass:"banner",attrs:{_hid:20,_fid:n}},[a("image",{attrs:{src:i.banner,_hid:21,_fid:n,_batrs:"src"}})]),a("view",{staticClass:"list",attrs:{_hid:22,_fid:n}},t._l(i.list,function(i,n,o){var r=(void 0!==s?s:e)+"-"+(void 0!==o?o:n);return a("view",{key:n,staticClass:"box",attrs:{_hid:23,_fid:r,_fk:"i"},on:{tap:function(a){t.toCategory(i)}}},[a("image",{attrs:{src:"/static/img/category/list/"+i.img,_hid:24,_fid:r,_batrs:"src"}}),a("view",{staticClass:"text",attrs:{_hid:25,_fid:r}},[t._v(t._s(i.name),26,r)])])},"23-"+(void 0!==s?s:e),t._self))])},19,t._self))],1)])},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},4653:function(t,i,a){"use strict";a.r(i);var e=a("0bbd"),s=a("676a");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("d264");var o=a("2877"),r=Object(o["a"])(s["default"],e["a"],e["b"],!1,null,null,null);i["default"]=r.exports},5901:function(t,i,a){},"676a":function(t,i,a){"use strict";a.r(i);var e=a("f3e7"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},d264:function(t,i,a){"use strict";var e=a("5901"),s=a.n(e);s.a},de2f:function(t,i,a){"use strict";a("6a8d");var e=n(a("4653")),s=n(a("3a53"));function n(t){return t&&t.__esModule?t:{default:t}}e.default.mpType="page";var o=new s.default(e.default);o.$mount()},f3e7:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=s(a("b814"));function s(t){return t&&t.__esModule?t:{default:t}}var n={data:function(){return{showCategoryIndex:0,headerPosition:"fixed",city:"北京",categoryList:[{id:1,title:"家用电器",banner:"/static/img/category/banner.jpg",list:[{name:"冰箱",img:"1.jpg"},{name:"电视",img:"2.jpg"},{name:"空调",img:"3.jpg"},{name:"洗衣机",img:"4.jpg"},{name:"风扇",img:"5.jpg"},{name:"燃气灶",img:"6.jpg"},{name:"热水器",img:"7.jpg"},{name:"电吹风",img:"8.jpg"},{name:"电饭煲",img:"9.jpg"}]},{id:2,title:"办公用品",banner:"/static/img/category/banner.jpg",list:[{name:"打印机",img:"1.jpg"},{name:"路由器",img:"2.jpg"},{name:"扫描仪",img:"3.jpg"},{name:"投影仪",img:"4.jpg"},{name:"墨盒",img:"5.jpg"},{name:"纸类",img:"6.jpg"}]},{id:3,title:"日常用品",banner:"/static/img/category/banner.jpg",list:[{name:"茶具",img:"1.jpg"},{name:"花瓶",img:"2.jpg"},{name:"纸巾",img:"3.jpg"},{name:"毛巾",img:"4.jpg"},{name:"牙膏",img:"5.jpg"},{name:"保鲜膜",img:"6.jpg"},{name:"保鲜袋",img:"7.jpg"}]},{id:4,title:"蔬菜水果",banner:"/static/img/category/banner.jpg",list:[{name:"苹果",img:"1.jpg"},{name:"芒果",img:"2.jpg"},{name:"椰子",img:"3.jpg"},{name:"橙子",img:"4.jpg"},{name:"奇异果",img:"5.jpg"},{name:"玉米",img:"6.jpg"},{name:"百香果",img:"7.jpg"}]}]}},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onLoad:function(){var t=this;this.amapPlugin=new e.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(i){t.city=i[0].regeocodeData.addressComponent.city.replace(/市/g,"")}})},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},showCategory:function(t){this.showCategoryIndex=t},toCategory:function(i){t.setStorageSync("catName",i.name),t.navigateTo({url:"../../goods/goods-list/goods-list?cid="+i.id+"&name="+i.name})},toSearch:function(){t.showToast({title:"建议跳转到新页面做搜索功能"})}}};i.default=n}).call(this,a("c11b")["default"])}},[["de2f","common/runtime","common/vendor"]]]);