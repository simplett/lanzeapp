(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pay/payment/payment"],{"0e4f":function(t,e,n){"use strict";var a=n("f981"),o=n.n(a);o.a},"130c":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{amount:0,orderName:"",paytype:"alipay"}},onLoad:function(e){var n=this;this.amount=parseFloat(e.amount).toFixed(2),t.getStorage({key:"paymentOrder",success:function(e){e.data.length>1?n.orderName="多商品合并支付":n.orderName=e.data[0].name,t.removeStorage({key:"paymentOrder"})}})},methods:{doDeposit:function(){var e=this;t.showLoading({title:"支付中..."}),setTimeout(function(){t.hideLoading(),t.showToast({title:"支付成功"}),setTimeout(function(){t.redirectTo({url:"../../pay/success/success?amount="+e.amount})},300)},700)}}};e.default=n}).call(this,n("6e42")["default"])},"140f":function(t,e,n){"use strict";n.r(e);var a=n("70f9"),o=n("2127");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("0e4f");var r=n("2877"),i=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},2127:function(t,e,n){"use strict";n.r(e);var a=n("130c"),o=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=o.a},"70f9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.paytype="alipay"},t.e1=function(e){t.paytype="wxpay"})},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},f981:function(t,e,n){}},[["e0f3","common/runtime","common/vendor"]]]);