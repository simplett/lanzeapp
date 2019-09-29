<template>
	<view class="lanzepadding">
		<!-- <view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="title">发布我的商品</view>
		</view>
		<view v-if="showHeader" class="place"></view> -->
		<view class="header">
			<button class="mybuttom" type="warn" size="mini">发布</button>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<view class="">
			<textarea maxlength="300" v-model="p_description" placeholder="添加一些宝贝的描述吧,300个字符之间" />
			<text class="mytext">{{fontcount}}/300</text>
		</view>
		
		<sunui-upoos :upImgConfig="upImgOos" @onUpImg="upOosData" @onImgDel="delImgInfo" ref="uImage"></sunui-upoos>
		<hr style="height: 100%;">
		<view class="price">
			<view class="lanzeimage"><image style="height: 100%;width: 100%;" src="../../../static/img/qian.png" mode=""></image></view>
			<input maxlength="5" type="number" v-model="price" placeholder="我的宝贝值这么多的钱" />
			<text>￥{{price}}<text>&gt;</text></text>
		</view>
		<view class="price">
			<view class="lanzeimage"><image style="height: 100%;width: 100%;" src="../../../static/img/setting.png" mode=""></image></view>
			<text class="morethan">补充信息获取更多的曝光<text>&gt;</text></text>
		</view>
		<view class="warn-btn">
			<button type="warn" size="mini" @tap="getUpImgInfoOos">获取上传Oos图片信息</button>
			<br>
		<button type="warn" size="mini" @tap="uImageTap">手动上传图片</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				price:"",
				p_description:"",
				fontcount:"0",
				productlist: [{
						"codelist": [
							101,
							102,
							103,
							104,
							105,
							106
						],
						"name": [
							"炫酷电脑", "手机一族", "相机拍摄", "智能穿戴", "电脑周边", "网络设备"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/0_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/0_8.png"
						],
						"divstyle": "linear-gradient(45deg, #c4e4ff, #91ccff)"
					},
					{
						"codelist": [
							201,
							202,
							203,
							204,
							205,
							206
						],
						"name": [
							"运动器材", "户外运动", "健身塑形", "球类包陪", "小众运动", "运动鞋"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/1_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/1_8.png"
						],
						"divstyle": "linear-gradient(45deg, #f4c9ff, #ff9eee)"
					},
					{
						"codelist": [
							301,
							302,
							303,
							304,
							305,
							306
						],
						"name": [
							"运动风格", "休闲风格", "商务风格", "百搭风格", "街头风格", "简约风格"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/2_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/2_8.png"
						],
						"divstyle": "#ffd0dc"
					},
					{
						"codelist": [
							401,
							402,
							403,
							404,
							405,
							406
						],
						"name": [
							"新潮搭配", "服饰配饰", "首饰手表", "珠宝一类", "眼睛一族", "各种包包"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/3_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/3_8.png"
						],
						"divstyle": "#ffd0dc"
					},
					{
						"codelist": [
							501,
							502,
							503,
							504,
							505,
							506
						],
						"name": [
							"厨卫电器", "小家电", "环境电器", "大家电", "温控电气", "其他电器"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/4_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/4_8.png"
						],
						"divstyle": "#ffd0dc"
					},
					{
						"codelist": [
							601,
							602,
							603,
							604,
							605,
							606
						],
						"name": [
							"宠物玩具", "宠物零食", "喂食器", "宠物", "宠物药品", "宠物之家"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/5_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/5_8.png"
						],
						"divstyle": "#ffd0dc"
					},
					{
						"codelist": [
							701,
							702,
							703,
							704,
							705,
							706
						],
						"name": [
							"文具教具", "餐饮用具", "厨房用品", "床上用品", "家居日用", "其他日用"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/6_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/6_8.png"
						],
						"divstyle": "#ffe0cd"
					},
					{
						"codelist": [
							801,
							802,
							803,
							804,
							805,
							806
						],
						"name": [
							"国际名著", "工具用书", "课本教材", "科普类书", "小说大全", "100本必读"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/7_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/7_8.png"
						],
						"divstyle": "#ffe0cd"
					},
					{
						"codelist": [
							901,
							902,
							903,
							904,
							905,
							906
						],
						"name": [
							"化妆彩妆", "护理护肤", "口红卖场", "美容美颜", "香水一类", "滋生面膜"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/8_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/8_8.png"
						],
						"divstyle": "#ffe0cd"
					},
					{
						"codelist": [
							1001,
							1002,
							1003,
							1004,
							1005,
							1006
						],
						"name": [
							"计生用品", "外用理疗", "传统滋补", "保健品", "养生药品", "养生食物"
						],
						"imgurl": [
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_0.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_1.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_2.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_3.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_4.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_5.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9_6.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/fenleiye/9_7.png",
							"http://lanzesucai.oss-cn-beijing.aliyuncs.com/xiaoguanggao/9_8.png"
						],
						"divstyle": "#ffe0cd"
					}
				],
				myheightSvg: {
					height: ""
				},
				headerTop: null,
				statusTop: null,
				headerPosition: "fixed",
				showHeader: true,
				oosArr: [],
				// 阿里云oos相关配置
				upImgOos: {
					aliConfig: {
						// 阿里云oos上传key_secret(后端传)
						AccessKeySecret: 'CbVR0tmpKXqAIEXxavJDqad3lcIIez',
						// 阿里云oos上传key_id(后端传)
						OSSAccessKeyId: 'LTAIlbkoZl60gNWT',
						// 阿里云oos上传目录(必须存在)
						oosDirectory: 'userimage',
						// 阿里云上传url
						url: 'https://simplett-img.oss-cn-beijing.aliyuncs.com/'
					},
					// 是否开启notli(开启的话就是选择完直接上传，关闭的话当count满足数量时才上传)
					notli: false,
					// 图片数量
					count: 8,
					// 上传图片背景修改 
					upBgColor: '#E8A400',
					// 上传icon图标颜色修改(仅限于iconfont)
					upIconColor: '#eee',
					// 上传svg图标名称
					upSvgIconName: 'icon-certificate',
				}
			}
		},
		 onLoad(options) { //option为object类型，会序列化上个页面传递的参数
		      console.log(options.codeid);
		    },
		onShow() {
			// this.getWidth();
			console.log("Onshow");
		},
		watch:{
			p_description(){
				var len=this.p_description.length;
				this.fontcount=len;
			}
		},
		methods: {
			onPageScroll(e) {
				//兼容iOS端下拉时顶部漂移
				this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
				this.headerTop = e.scrollTop >= 0 ? null : 0;
				this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
			},
			uImageTap() {
				this.$refs.uImage.uploadimage(this.upImgOos);
			},
			// 删除图片 -2019/05/12(本地图片进行删除)
			async delImgInfo(e) {
				console.log('你删除的图片地址为:', e, this.oosArr.splice(e.index, 1));
			},
			// 阿里云
			async upOosData(e) {
				// 上传图片数组
				let arrImg = [];
				for (let i = 0, len = e.length; i < len; i++) {
					try {
						if (e[i].path_server != "") {
							await arrImg.push(e[i].path_server.split(','));
						}
					} catch (err) {
						console.log('上传失败...');
					}
				}
				// 图片信息保存到data数组
				this.oosArr = arrImg;

				// 可以根据长度来判断图片是否上传成功. 2019/4/11新增
				if (arrImg.length == this.upImgOos.count) {
					uni.showToast({
						title: `上传成功`,
						icon: 'none'
					});
				}
			},
			// 获取上传图片阿里云
			getUpImgInfoOos() {
				console.log('阿里云转成一维数组:', this.oosArr.join().split(','));
			}
		}
	}
</script>

<style lang="scss" scoped>
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}
.lanzepadding{
	padding: 10upx 30upx;
}
	.header{
		width: 50%;
		padding: 0 4upx;
		height: 80upx;
		/* display: flex; */
		/* justify-content:space-between; */
		/* align-items: center; */
		position: fixed;
		right: 0upx;
		/* float:right; */
		top: 0upx;
		z-index: 1000;
		box-sizing: border-box;
		/* background-color: #f06c7a; */
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}
.mybuttom{
			position: absolute;
			right: 4%;
			margin: auto 0uox;
			top: 50%;
			margin-top: -30upx;
		}
	.place {

		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	textarea{
		width: 100%;
		padding: 10upx 20upx;
		border: 2upx solid gray;
		box-sizing: border-box;
		height: 300upx;
		box-shadow: -6upx -6upx 10upx 2upx gray inset;
	}
	.mytext{
		float: right;
		padding: 2upx 10upx;
	}
	.price{
		display: flex;
		justify-content: space-between;
		height: 60upx;
		width: 100%;
	}
	.lanzeimage{
		height: 100%;
		width: 60upx;
	}
	.warn-btn{
		width:100%;
		button{
			display: table;
			margin: auto auto;
			width:360upx;
		}
	}
</style>
