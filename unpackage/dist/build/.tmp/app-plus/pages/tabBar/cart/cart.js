(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/cart/cart"],{3173:function(t,s,e){"use strict";var i=e("7126"),o=e.n(i);o.a},"40c5":function(t,s,e){"use strict";(function(t){e("590e"),e("921b");i(e("66fd"));var s=i(e("650f"));function i(t){return t&&t.__esModule?t:{default:t}}t(s.default)}).call(this,e("6e42")["createPage"])},"650f":function(t,s,e){"use strict";e.r(s);var i=e("9ee6"),o=e("f64b");for(var n in o)"default"!==n&&function(t){e.d(s,t,function(){return o[t]})}(n);e("3173");var l=e("2877"),h=Object(l["a"])(o["default"],i["a"],i["b"],!1,null,null,null);s["default"]=h.exports},7126:function(t,s,e){},"9ee6":function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement;t._self._c},o=[];e.d(s,"a",function(){return i}),e.d(s,"b",function(){return o})},d175:function(t,s,e){"use strict";(function(t,e){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var o={data:function(){return{sumPrice:"0.00",headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,selectedList:[],isAllselected:!1,goodsList:[],theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onShow:function(){this.getcartdata()},methods:{getcartdata:function(){var s=this;t.getStorage({key:"shoucanlist",success:function(t){s.goodsList=t.data},fail:function(t){s.goodsList=[{id:1,img:"/static/img/goods/p1.jpg",name:"蓝沢官方的模板数据",spec:"规格:S码",price:127.5,number:1,selected:!1}]}})},joinGoods:function(t){for(var s=this.goodsList.length,e=!1,o=0;o<s;o++){var n=this.goodsList[o];if(n.id==t.id){this.goodsList[o].number++,e=!0;break}}e||this.goodsList[i].unshift(t)},touchStart:function(t,s){s.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[s.touches[0].pageX,s.touches[0].pageY])},touchMove:function(t,s){var e=this;if(s.touches.length>1)this.isStop=!0;else{var i=s.touches[0].pageX-this.initXY[0],o=s.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(o)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){e.oldIndex=null},150)))}},touchEnd:function(t,s){this.isStop=!1},toGoods:function(s){t.showToast({title:"商品"+s.id,icon:"none"}),t.navigateTo({url:"../../goods/goods?pid="+s.id})},toConfirmation:function(){for(var s=[],e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&s.push(this.goodsList[i]);s.length<1?t.showToast({title:"请选择商品结算",icon:"none"}):t.setStorage({key:"buylist",data:s,success:function(){t.navigateTo({url:"../../order/confirmation"})}})},deleteGoods:function(s){var i=[],o=!0,n=!1,l=void 0;try{for(var h,d=this.goodsList[Symbol.iterator]();!(o=(h=d.next()).done);o=!0){var u=h.value;u.id==s?console.log(e("删除了id为："+s+"号的商品"," at pages\\tabBar\\cart\\cart.vue:242")):i.push(u)}}catch(c){n=!0,l=c}finally{try{o||null==d.return||d.return()}finally{if(n)throw l}}t.setStorage({key:"shoucanlist",data:i,success:function(t){console.log(e("缓存中删除成功"," at pages\\tabBar\\cart\\cart.vue:251"))},fail:function(s){t.showToast({title:"删除失败",icon:"none"})}}),this.getcartdata(),this.selectedList.splice(this.selectedList.indexOf(s),1),this.sum(),this.oldIndex=null,this.theIndex=null},deleteList:function(){this.selectedList.length;while(this.selectedList.length>0)this.deleteGoods(this.selectedList[0]);this.selectedList=[],this.isAllselected=this.selectedList.length==this.goodsList.length&&this.goodsList.length>0,this.sum()},selected:function(t){this.goodsList[t].selected=!this.goodsList[t].selected;var s=this.selectedList.indexOf(this.goodsList[t].id);s>-1?this.selectedList.splice(s,1):this.selectedList.push(this.goodsList[t].id),this.isAllselected=this.selectedList.length==this.goodsList.length,this.sum()},allSelect:function(){for(var t=this.goodsList.length,s=[],e=0;e<t;e++)this.goodsList[e].selected=!this.isAllselected,s.push(this.goodsList[e].id);this.selectedList=this.isAllselected?[]:s,this.isAllselected=!this.isAllselected&&0!=this.goodsList.length,this.sum()},sub:function(t){this.goodsList[t].number<=1||(this.goodsList[t].number--,this.sum())},add:function(t){this.goodsList[t].number++,this.sum()},sum:function(t,s){this.sumPrice=0;for(var e=this.goodsList.length,i=0;i<e;i++)this.goodsList[i].selected&&(this.sumPrice=t&&i==s?this.sumPrice+t.detail.value*this.goodsList[i].price:this.sumPrice+this.goodsList[i].number*this.goodsList[i].price);this.sumPrice=this.sumPrice.toFixed(2)},discard:function(){}}};s.default=o}).call(this,e("6e42")["default"],e("0de9")["default"])},f64b:function(t,s,e){"use strict";e.r(s);var i=e("d175"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(s,t,function(){return i[t]})}(n);s["default"]=o.a}},[["40c5","common/runtime","common/vendor"]]]);