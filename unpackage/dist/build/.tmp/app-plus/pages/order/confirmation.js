(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/confirmation"],{"1a80":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var t=this;e.getStorage({key:"buylist",success:function(e){t.buylist=e.data,t.goodsPrice=0;for(var n=t.buylist.length,o=0;o<n;o++)t.goodsPrice=t.goodsPrice+t.buylist[o].number*t.buylist[o].price;t.deduction=t.int/100,t.sumPrice=t.goodsPrice-t.deduction+t.freight}}),e.getStorage({key:"selectAddress",success:function(n){t.recinfo=n.data,e.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return parseFloat(e).toFixed(2)}},methods:{clearOrder:function(){var t=this;e.removeStorage({key:"buylist",success:function(e){t.buylist=[],console.log(n("remove buylist success"," at pages\\order\\confirmation.vue:175"))}})},toPay:function(){var t=this,o=this.buylist;e.setStorage({key:"buydata",data:o,success:function(e){console.log(n("succress"," at pages\\order\\confirmation.vue:185"))}});for(var i=[],s=[],r=this.buylist.length,u=0;u<r;u++)i.push(this.buylist[u]),s.push(this.buylist[u].id);0!=i.length?(e.showLoading({title:"正在提交订单..."}),setTimeout(function(){e.setStorage({key:"paymentOrder",data:i,success:function(){e.hideLoading(),e.redirectTo({url:"../pay/payment/payment?amount="+t.sumPrice})}})},1e3)):e.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){e.navigateTo({url:"../user/address/address?type=select"})}}};t.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"4da2":function(e,t,n){"use strict";var o=n("f678"),i=n.n(o);i.a},"61d4":function(e,t,n){"use strict";n.r(t);var o=n("1a80"),i=n.n(o);for(var s in o)"default"!==s&&function(e){n.d(t,e,function(){return o[e]})}(s);t["default"]=i.a},"79fe":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e._f("toFixed")(e.goodsPrice)),o=e._f("toFixed")(e.freight),i=e._f("toFixed")(e.sumPrice);e.$mp.data=Object.assign({},{$root:{f0:n,f1:o,f2:i}})},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},f327:function(e,t,n){"use strict";n.r(t);var o=n("79fe"),i=n("61d4");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("4da2");var r=n("2877"),u=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},f60f:function(e,t,n){"use strict";(function(e){n("590e"),n("921b");o(n("66fd"));var t=o(n("f327"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f678:function(e,t,n){}},[["f60f","common/runtime","common/vendor"]]]);