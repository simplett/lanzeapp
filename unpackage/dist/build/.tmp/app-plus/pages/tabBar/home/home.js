(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{"29cd":function(t,o,n){"use strict";(function(t,e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=a(n("6c91"));function a(t){return t&&t.__esModule?t:{default:t}}function s(t){return u(t)||c(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var o=0,n=new Array(t.length);o<t.length;o++)n[o]=t[o];return n}}var d={data:function(){return{kword:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,title:"业务完善中...",img:"/static/img/1.jpg"},{id:2,title:"业务完善中...",img:"/static/img/2.jpg"},{id:3,title:"业务完善中...",img:"/static/img/3.jpg"}],summsg:{"00":[["2019-05-45","2019-05-45"],[{user:"you",msg:"616516311111111111111111111111111111111111111111111111111111111"},{user:"you",msg:"616516311111111111111111111111111111111111111111111111111111111"}],"00"["2019-05-45"],[{user:"me",msg:"616516"}],"00"]},categoryList:[{id:1,name:"数码",img:"/static/img/category/1.png"},{id:2,name:"运动",img:"/static/img/category/6.png"},{id:3,name:"服装",img:"/static/img/category/8.png"},{id:4,name:"饰品",img:"/static/img/category/3.png"},{id:5,name:"家电",img:"/static/img/category/2.png"},{id:6,name:"宠物",img:"/static/img/category/11.png"},{id:7,img:"/static/img/category/2.png",name:"日用"},{id:8,name:"书籍",img:"/static/img/category/7.png"},{id:9,name:"美容",img:"/static/img/category/9.png"},{id:10,name:"健康",img:"/static/img/category/5.png"}],Promotion:[],productList:[],loadingText:"正在加载..."}},onLaunch:function(){t.setStorage({key:"summsg",data:thid.summsg,success:function(t){console.log(e("页面初始化完成，聊天数据加载"," at pages\\tabBar\\home\\home.vue:219"))}})},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){this.load(),setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){var t=this.productList.length;if(t>=1e3)return this.loadingText="到底了",!1;this.load()},onLoad:function(o){var n=this;console.log(e(o," at pages\\tabBar\\home\\home.vue:246")),"mylike"==o.type&&t.navigateTo({url:"../../../goods/goods?pid="+o.pid}),this.nVueTitle=t.getSubNVueById("homeTitleNvue"),this.nVueTitle.onMessage(function(t){}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),this.amapPlugin=new i.default.AMapWX({key:"7c235a9ac4e25e482614c6b8eac6fd8e"}),this.amapPlugin.getRegeo({success:function(t){n.city=t[0].regeocodeData.addressComponent.city.replace(/市/g,""),n.nVueTitle.postMessage({type:"location",city:n.city})}}),this.Timer(),this.load(),this.loadPromotion()},methods:{tobanner:function(){t.showToast({title:"业务功能完善中，敬请期待",icon:"none"})},load:function(){var o=this;t.request({url:"http://120.79.19.253:10086/Index",data:{type:"new"},success:function(t){console.log(e("$$$$$$$$$$$$$$$$$$$$$$$$",t.data.data," at pages\\tabBar\\home\\home.vue:297")),o.text="request success";var n=t.data.data,i=[{}],a=[],r=!0,c=!1,u=void 0;try{for(var d,g=n[Symbol.iterator]();!(r=(d=g.next()).done);r=!0){var l=d.value,m=/;/;if(m.test(l.pimages)){var f=l.pimages.split(";");a.push(f[0])}else a.push(l.pimages)}}catch(h){c=!0,u=h}finally{try{r||null==g.return||g.return()}finally{if(c)throw u}}for(var l in n)i[l]={goods_id:n[l].pid,img:a[l],name:n[l].pname,price:n[l].price,slogan:n[l].watched};console.log(e(i,"%%%%%%%%%%%%%%%%%%%%%%%%%%%"," at pages\\tabBar\\home\\home.vue:321")),0!==o.productList.length?o.productList=[].concat(s(o.productList),i):o.productList=[].concat(i)}})},loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,e=t.getDate(),i=o+"/"+n+"/"+e+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:i}],s=0;s<a.length;s++){var r=a[s];if(r.countdown){var c="00",u="00",d="00",g=new Date,l=new Date(i);if(!(g>=l)){var m=parseInt((l.getTime()-g.getTime())/1e3);c=parseInt(m/3600),u=parseInt(m%3600/60),d=m%60,c=c<10?"0"+c:c,u=u<10?"0"+u:u,d=d<10?"0"+d:d}a[s].countdown={h:c,m:u,s:d}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.navigateTo({url:"../../goods/goods-list/goods-list?kword="+this.kword})},toSwiper:function(o){t.showToast({title:o.title,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?codeid="+o.id+"&name="+o.name})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.navigateTo({url:"../../goods/goods?pid="+o.goods_id})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},"521e":function(t,o,n){"use strict";var e=function(){var t=this,o=t.$createElement;t._self._c},i=[];n.d(o,"a",function(){return e}),n.d(o,"b",function(){return i})},"60fb":function(t,o,n){},"7fc0":function(t,o,n){"use strict";n.r(o);var e=n("521e"),i=n("a2cd");for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);n("8695");var s=n("2877"),r=Object(s["a"])(i["default"],e["a"],e["b"],!1,null,null,null);o["default"]=r.exports},8695:function(t,o,n){"use strict";var e=n("60fb"),i=n.n(e);i.a},"92eb":function(t,o,n){"use strict";(function(t){n("590e"),n("921b");e(n("66fd"));var o=e(n("7fc0"));function e(t){return t&&t.__esModule?t:{default:t}}t(o.default)}).call(this,n("6e42")["createPage"])},a2cd:function(t,o,n){"use strict";n.r(o);var e=n("29cd"),i=n.n(e);for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);o["default"]=i.a}},[["92eb","common/runtime","common/vendor"]]]);