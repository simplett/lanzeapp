(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/myQR/myQR"],{"0b43":function(t,e,n){"use strict";(function(t){n("590e"),n("921b");u(n("66fd"));var e=u(n("cc45"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4b0b":function(t,e,n){"use strict";var u=n("b5d3"),i=n.n(u);i.a},b34c:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{tis:"保存到相册",showBtn:!1}},onLoad:function(){this.showBtn=!0},methods:{printscreen:function(){this.tis="正在保存";var e=this.$mp.page.$getAppWebview(),u=new plus.nativeObj.Bitmap;this.showBtn=!1,this.$nextTick(function(){var i=this;setTimeout(function(){e.draw(u,function(e){i.showBtn=!0,console.log(t("bitmap绘制图片成功"," at pages\\user\\myQR\\myQR.vue:45")),console.log(t("e: "+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:46")),u.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(t){plus.gallery.save(t.target,function(t){n.showToast({title:"保存成功"}),i.tis="保存到相册",u.clear()},function(t){u.clear()})},function(e){console.log(t("保存图片失败："+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:61"))})},function(e){console.log(t("bitmap绘制图片失败："+JSON.stringify(e)," at pages\\user\\myQR\\myQR.vue:64"))})},200)})}}};e.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},b5d3:function(t,e,n){},cc45:function(t,e,n){"use strict";n.r(e);var u=n("dedc"),i=n("e6d3");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("4b0b");var a=n("2877"),c=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},dedc:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return i})},e6d3:function(t,e,n){"use strict";n.r(e);var u=n("b34c"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);e["default"]=i.a}},[["0b43","common/runtime","common/vendor"]]]);