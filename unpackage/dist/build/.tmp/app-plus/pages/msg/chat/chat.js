(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/msg/chat/chat"],{"0769":function(i,t,g){"use strict";var f=function(){var i=this,t=i.$createElement;i._self._c},a=[];g.d(t,"a",function(){return f}),g.d(t,"b",function(){return a})},"63ab":function(i,t,g){"use strict";(function(i,g){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var f={data:function(){return{jli:500,youface:"",myface:"",messgedata:[],uid:"",textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,RECORDER:i.getRecorderManager(),isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:i.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(t){var f=this,a=t.name;this.uid=t.uid,this.youface=t.youface,this.init(),console.log(g(this.uid,a," at pages\\msg\\chat\\chat.vue:169")),i.setNavigationBarTitle({title:a}),this.getMsgList(),this.AUDIO.onEnded(function(i){f.playMsgid=null}),this.RECORDER.onStart(function(i){f.recordBegin(i)}),this.RECORDER.onStop(function(i){f.recordEnd(i)})},onShow:function(){var i=this;setInterval(function(){i.init()},1e3)},methods:{init:function(){var t=this;i.getStorage({key:"summsg",success:function(i){console.log(g(i.data,"这是聊天列表的消息"," at pages\\msg\\chat\\chat.vue:199")),t.messgedata=i.data[t.uid],console.log(g(t.messgedata,"000000000000000000"," at pages\\msg\\chat\\chat.vue:201"))}}),i.getStorage({key:"face",success:function(i){t.face=i.data[0],console.log(g(t.face.substring(2)," at pages\\msg\\chat\\chat.vue:211"))}}),i.getStorage({key:"face",success:function(i){t.myface=i.data[0],console.log(g(t.face.substring(2)," at pages\\msg\\chat\\chat.vue:220"))},fail:function(i){t.myface="https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg",console.log(g("采用了默认的头像"," at pages\\msg\\chat\\chat.vue:224"))}}),this.getMsgList()},getbuttom:function(){i.pageScrollTo({scrollTop:this.jli,duration:300})},getMsgList:function(){var i=this;this.$nextTick(function(){i.scrollTop=i.jli,i.scrollAnimation=!0})},setPicSize:function(t){var g=i.upx2px(350),f=i.upx2px(350);if(t.msg.w>g||t.msg.h>f){var a=t.msg.w/t.msg.h;t.msg.w>t.msg.h?(t.msg.w=g,t.msg.h=t.msg.w/a):(t.msg.h=f,t.msg.w=t.msg.h*a)}return t},screenMsg:function(t){switch(t.uid!=this.myuid&&i.vibrateLong(),t.type){case"text":this.addTextMsg(t);break;case"voice":this.addVoiceMsg(t);break;case"img":this.addImgMsg(t);break}this.$nextTick(function(){this.scrollToView="msg"+t.id})},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){var t=this;if(this.hideEmoji(),this.textMsg){var f="";i.getStorage({key:"token",success:function(a){f=a.data,i.request({url:"http://120.79.19.253:10086/Chat",data:{ruid:t.uid,token:f,type:"add",message:t.textMsg},success:function(f){if(console.log(g(f.data," at pages\\msg\\chat\\chat.vue:314")),1==f.data.status){var a={};i.getStorage({key:"summsg",success:function(i){a=i.data}}),a[t.uid][0].push("2019-01-01"),a[t.uid][1].push({user:"me",msg:t.textMsg}),console.log(g(a,"发送后的消息"," at pages\\msg\\chat\\chat.vue:326")),i.setStorage({key:"summsg",data:a,success:function(i){t.textMsg="",t.init(),t.jli=t.jli+500,console.log(g(t.jli,"9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999"," at pages\\msg\\chat\\chat.vue:334")),t.getbuttom()},fail:function(t){i.showToast({title:"数据保存失败",icon:"none"})}})}else i.showToast({title:"消息发送失败",icon:"none"})}})},fail:function(t){i.showToast({title:"请登录之后在发送消息吧",icon:"none"})}})}else i.showToast({title:"不能发送空的内容",icon:"none"})},replaceEmoji:function(i){var t=this,f=i.replace(/\[([^(\]|\[)]*)\]/g,function(i,f){console.log(g("item: "+i," at pages\\msg\\chat\\chat.vue:374"));for(var a=0;a<t.emojiList.length;a++)for(var l=t.emojiList[a],e=0;e<l.length;e++){var s=l[e];if(s.alt==i){var n="https://s2.ax1x.com/2019/04/12/",r='<img src="'+n+t.onlineEmoji[s.url]+'">';return console.log(g("imgstr: "+r," at pages\\msg\\chat\\chat.vue:383")),r}}});return'<div style="display: flex;align-items: center;">'+f+"</div>"},chooseImage:function(){var t=this;this.hideEmoji(),i.chooseImage({sizeType:["original","compressed"],success:function(f){for(var a=function(a){i.getImageInfo({src:f.tempFilePaths[a],success:function(i){console.log(g(i.width," at pages\\msg\\chat\\chat.vue:401")),console.log(g(i.height," at pages\\msg\\chat\\chat.vue:402"));var l={url:f.tempFilePaths[a],w:i.width,h:i.height};t.sendMsg(l,"img")}})},l=0;l<f.tempFilePaths.length;l++)a(l)}})},sendMsg:function(i,t){var g=new Date,f=this.msgList[this.msgList.length-1].id;f++;var a={id:f,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:g.getHours()+":"+g.getMinutes(),type:t,msg:i};this.screenMsg(a)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(t){i.previewImage({indicator:"none",current:t.msg.url,urls:this.msgImgList})},playVoice:function(i){this.playMsgid=i.id,this.AUDIO.src=i.msg.url,console.log(g("msg.msg.url: "+i.msg.url," at pages\\msg\\chat\\chat.vue:454")),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"aac"}))},recordBegin:function(i){var t=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval(function(){t.recordLength++},1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(t){if(this.recording){var g=t.touches[0];this.initPoint.Y-g.clientY>=i.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(i){if(clearInterval(this.recordTimer),this.willStop)console.log(g("取消发送录音"," at pages\\msg\\chat\\chat.vue:533"));else{plus.io.resolveLocalFileSystemURL(i.tempFilePath,function(i){i.file(function(i){console.log(g(i.size+"--"+i.name," at pages\\msg\\chat\\chat.vue:516"))})},function(i){alert("Resolve file URL failed: "+i.message)}),console.log(g("e: "+JSON.stringify(i)," at pages\\msg\\chat\\chat.vue:521"));var t={length:0,url:i.tempFilePath},f=parseInt(this.recordLength/60),a=this.recordLength%60;f=f<10?"0"+f:f,a=a<10?"0"+a:a,t.length=f+":"+a,this.sendMsg(t,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};t.default=f}).call(this,g("6e42")["default"],g("0de9")["default"])},"84d5":function(i,t,g){"use strict";(function(i){g("590e"),g("921b");f(g("66fd"));var t=f(g("f69b"));function f(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,g("6e42")["createPage"])},"9d44":function(i,t,g){},c0f7:function(i,t,g){"use strict";g.r(t);var f=g("63ab"),a=g.n(f);for(var l in f)"default"!==l&&function(i){g.d(t,i,function(){return f[i]})}(l);t["default"]=a.a},f341:function(i,t,g){"use strict";var f=g("9d44"),a=g.n(f);a.a},f69b:function(i,t,g){"use strict";g.r(t);var f=g("0769"),a=g("c0f7");for(var l in a)"default"!==l&&function(i){g.d(t,i,function(){return a[i]})}(l);g("f341");var e=g("2877"),s=Object(e["a"])(a["default"],f["a"],f["b"],!1,null,null,null);t["default"]=s.exports}},[["84d5","common/runtime","common/vendor"]]]);