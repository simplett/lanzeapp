(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"011a":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},"1ee0":function(t,e,n){},"7ede":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{face:"",isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,user:{username:"游客1002",face:"",integral:0,balance:0,envelope:0},orderList:[{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"}],mytoolbarList:[{url:"../../user/keep/keep",text:"我的收藏",img:"/static/img/user/point.png"},{url:"../../user/coupon/coupon",text:"我的关注",img:"/static/img/user/quan.png"},{url:"",text:"评论",img:"/static/img/user/renw.png"},{url:"../../user/address/address",text:"收货地址",img:"/static/img/user/addr.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){t.setStorage({key:"UserInfo",data:!1,success:function(){},fail:function(t){}})},onShow:function(){var e=this;t.getStorage({key:"UserInfo",success:function(t){t.data?e.user=t.data:e.isfirst},fail:function(t){}}),this.face=t.getStorage({key:"faces",success:function(t){return console.log(n(t.data[0]," at pages\\tabBar\\user\\user.vue:194")),t.data[0]}}),console.log(n("gggggggggggggggggs",this.user.face,"hhhhhhhhhhhhhhhhhhhhhhhh"," at pages\\tabBar\\user\\user.vue:200")),this.user.face=this.face.substring(2),console.log(n(this.face.substring(2)+"3wwwwwwwwwwwwwwwwwwwwwwwww"," at pages\\tabBar\\user\\user.vue:202"))},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e){e?t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},"931f":function(t,e,n){"use strict";n.r(e);var o=n("7ede"),s=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=s.a},"9b4f":function(t,e,n){"use strict";var o=n("1ee0"),s=n.n(o);s.a},be12:function(t,e,n){"use strict";n.r(e);var o=n("011a"),s=n("931f");for(var u in s)"default"!==u&&function(t){n.d(e,t,function(){return s[t]})}(u);n("9b4f");var a=n("2877"),i=Object(a["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},f0bf:function(t,e,n){"use strict";(function(t){n("590e"),n("921b");o(n("66fd"));var e=o(n("be12"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f0bf","common/runtime","common/vendor"]]]);