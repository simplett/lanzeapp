(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"0e94":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},i=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return i})},"29cd":function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=a(n("6c91"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t){return u(t)||s(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var o=0,n=new Array(t.length);o<t.length;o++)n[o]=t[o];return n}}var d={data:function(){return{kword:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"数码",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"饰品",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"健康",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"服装",img:"/static/img/category/8.png"},{id:9,name:"书籍",img:"/static/img/category/7.png"},{id:10,name:"服装",img:"/static/img/category/8.png"}],Promotion:[],productList:[],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.load(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"});var o=this.productList.length;if(o>=1e3)return this.loadingText="到底了",!1;this.load()},onLoad:function(){var o=this;this.nVueTitle=t.getSubNVueById("homeTitleNvue"),this.nVueTitle.onMessage(function(t){var n=t.data.type;"focus"==n&&o.toSearch()}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.amapPlugin=new i.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(t){o.city=t[0].regeocodeData.addressComponent.city.replace(/市/g,""),o.nVueTitle.postMessage({type:"location",city:o.city})}}),this.Timer(),this.load(),this.loadPromotion()},methods:{load:function(){var o=this;t.request({url:"http://120.79.19.253:10086/Index",data:{type:"new"},success:function(t){console.log(e("$$$$$$$$$$$$$$$$$$$$$$$$",t.data.data," at pages\\tabBar\\home\\home.vue:257")),o.text="request success";var n=t.data.data,i=[{}],a=[],c=!0,s=!1,u=void 0;try{for(var d,l=n[Symbol.iterator]();!(c=(d=l.next()).done);c=!0){var g=d.value,m=/;/;if(m.test(g.pimages)){var f=g.pimages.split(";");a.push(f[0])}else a.push(g.pimages)}}catch(h){s=!0,u=h}finally{try{c||null==l.return||l.return()}finally{if(s)throw u}}for(var g in n)i[g]={goods_id:n[g].pid,img:a[g],name:n[g].pname,price:n[g].price,slogan:n[g].watched};console.log(e(i,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\tabBar\\home\\home.vue:281")),0!==o.productList.length?o.productList=[].concat(r(o.productList),i):o.productList=[].concat(i)}})},loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,e=t.getDate(),i=o+"/"+n+"/"+e+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:i}],r=0;r<a.length;r++){var c=a[r];if(c.countdown){var s="00",u="00",d="00",l=new Date,g=new Date(i);if(!(l>=g)){var m=parseInt((g.getTime()-l.getTime())/1e3);s=parseInt(m/3600),u=parseInt(m%3600/60),d=m%60,s=s<10?"0"+s:s,u=u<10?"0"+u:u,d=d<10?"0"+d:d}a[r].countdown={h:s,m:u,s:d}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.navigateTo({url:"../../goods/goods-list/goods-list?kword="+this.kword}),t.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(o){t.showToast({title:o.src,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?codeid="+o.id+"&name="+o.name})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.showToast({title:"商品"+o.goods_id,icon:"none"}),t.navigateTo({url:"../../goods/goods?pid="+o.goods_id})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"60fb":function(t,o,n){},"7fc0":function(t,o,n){"use strict";n.r(o);var e=n("0e94"),i=n("a2cd");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("8695");var r=n("2877"),c=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,null,null);o["default"]=c.exports},8695:function(t,o,n){"use strict";var e=n("60fb"),i=n.n(e);i.a},"92eb":function(t,o,n){"use strict";(function(t){n("590e"),n("921b");e(n("66fd"));var o=e(n("7fc0"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},a2cd:function(t,o,n){"use strict";n.r(o);var e=n("29cd"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a}},[["92eb","common/runtime","common/vendor"]]]);