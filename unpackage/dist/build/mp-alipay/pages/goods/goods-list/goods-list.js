(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/goods/goods-list/goods-list"],{1262:function(t,i,o){"use strict";o.r(i);var s=o("9e99"),e=o("f955");for(var a in e)"default"!==a&&function(t){o.d(i,t,function(){return e[t]})}(a);o("eb28");var r=o("2877"),d=Object(r["a"])(e["default"],s["a"],s["b"],!1,null,null,null);i["default"]=d.exports},2144:function(t,i,o){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o={data:function(){return{goodsList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载...",headerTop:"0px",headerPosition:"fixed",orderbyList:[{text:"销量",selected:!0,orderbyicon:!1,orderby:0},{text:"价格",selected:!1,orderbyicon:["sheng","jiang"],orderby:0},{text:"好评",selected:!1,orderbyicon:!1,orderby:0}],orderby:"sheng"}},onLoad:function(i){console.log(i.cid),t.setNavigationBarTitle({title:i.name})},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onPullDownRefresh:function(){var i=this;setTimeout(function(){i.reload(),t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"});var i=this.goodsList.length;if(i>=40)return this.loadingText="到底了",!1;this.loadingText="正在加载...";for(var o=this.goodsList[i-1].goods_id,s=1;s<=10;s++){var e=o+s,a={goods_id:e,img:"/static/img/goods/p"+(e%10==0?10:e%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(a)}},methods:{reload:function(){console.log("reload");this.goodsList=[];for(var t=0,i=1;i<=10;i++){var o=t+i,s={goods_id:o,img:"/static/img/goods/p"+(o%10==0?10:o%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.goodsList.push(s)}},toGoods:function(i){t.showToast({title:"商品"+i.goods_id,icon:"none"}),t.navigateTo({url:"../goods"})},select:function(i){var o=this.orderbyList[i].text+"排序 ";if(this.orderbyList[i].orderbyicon){var s=0==this.orderbyList[i].orderby?"升序":"降序";this.orderbyList[i].selected&&(s=0==this.orderbyList[i].orderby?"降序":"升序",this.orderbyList[i].orderby=0==this.orderbyList[i].orderby?1:0),o+=s}this.orderbyList[i].selected=!0;for(var e=this.orderbyList.length,a=0;a<e;a++)a!=i&&(this.orderbyList[a].selected=!1);t.showToast({title:o,icon:"none"})}}};i.default=o}).call(this,o("c11b")["default"])},"2ca8":function(t,i,o){},"9e99":function(t,i,o){"use strict";var s=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("view",{attrs:{_hid:0}},[o("view",{staticClass:"header",style:{position:t.headerPosition,top:t.headerTop},attrs:{_hid:1}},t._l(t.orderbyList,function(i,s,e){var a=void 0!==e?e:s;return o("view",{key:s,staticClass:"target",class:[i.selected?"on":""],attrs:{_hid:2,_fid:a,_fk:"index"},on:{tap:function(i){t.select(s)}}},[t._v(t._s(i.text),3,a),t._ri(!!i.orderbyicon,4,void 0!==e?e:s)?o("view",{staticClass:"icon",class:i.orderbyicon[i.orderby],attrs:{_hid:4,_fid:a}}):t._e()])},2,t._self)),o("view",{staticClass:"place",attrs:{_hid:5}}),o("view",{staticClass:"goods-list",attrs:{_hid:6}},[o("view",{staticClass:"product-list",attrs:{_hid:7}},t._l(t.goodsList,function(i,s,e){var a=void 0!==e?e:s;return o("view",{key:i.goods_id,staticClass:"product",attrs:{_hid:8,_fid:a,_fk:"goods_id"},on:{tap:function(o){t.toGoods(i)}}},[o("image",{attrs:{mode:"widthFix",src:i.img,_hid:9,_fid:a,_batrs:"src"}}),o("view",{staticClass:"name",attrs:{_hid:10,_fid:a}},[t._v(t._s(i.name),11,a)]),o("view",{staticClass:"info",attrs:{_hid:12,_fid:a}},[o("view",{staticClass:"price",attrs:{_hid:13,_fid:a}},[t._v(t._s(i.price),14,a)]),o("view",{staticClass:"slogan",attrs:{_hid:15,_fid:a}},[t._v(t._s(i.slogan),16,a)])])])},8,t._self)),o("view",{staticClass:"loading-text",attrs:{_hid:17}},[t._v(t._s(t.loadingText),18)])])])},e=[];o.d(i,"a",function(){return s}),o.d(i,"b",function(){return e})},eb28:function(t,i,o){"use strict";var s=o("2ca8"),e=o.n(s);e.a},ef73:function(t,i,o){"use strict";o("6a8d");var s=a(o("1262")),e=a(o("3a53"));function a(t){return t&&t.__esModule?t:{default:t}}s.default.mpType="page";var r=new e.default(s.default);r.$mount()},f955:function(t,i,o){"use strict";o.r(i);var s=o("2144"),e=o.n(s);for(var a in s)"default"!==a&&function(t){o.d(i,t,function(){return s[t]})}(a);i["default"]=e.a}},[["ef73","common/runtime","common/vendor"]]]);