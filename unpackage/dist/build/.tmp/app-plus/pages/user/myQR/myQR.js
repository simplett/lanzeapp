(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"0573":function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{printscreen:function(){this.tis="正在保存";var n=this.$mp.page.$getAppWebview(),a=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var o=this;setTimeout(function(){n.draw(a,function(n){o.showBtn=!0,console.log(t("bitmap绘制图片成功"," at pages\\user\\myQR\\myQR.vue:45")),console.log(t("e: "+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:46")),a.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(t){plus.gallery.save(t.target,function(t){e.showToast({title:"保存成功"}),o.tis="保存到相册",a.clear()},function(t){a.clear()})},function(n){console.log(t("保存图片失败："+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:61"))})},function(n){console.log(t("bitmap绘制图片失败："+JSON.stringify(n)," at pages\\user\\myQR\\myQR.vue:64"))})},200)})}}};n.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},"1ab8":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return o})},"586d":function(t,n,e){"use strict";e.r(n);var a=e("1ab8"),o=e("dace");for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);e("67ae");var i=e("2877"),s=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);n["default"]=s.exports},"67ae":function(t,n,e){"use strict";var a=e("7767"),o=e.n(a);o.a},7767:function(t,n,e){},dace:function(t,n,e){"use strict";e.r(n);var a=e("0573"),o=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=o.a}},[["06fa","common/runtime","common/vendor"]]]);