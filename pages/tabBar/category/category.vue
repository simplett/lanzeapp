<template>
	<view>
		<!-- 状态栏 -->
		<view class="status" :style="{position:headerPosition}"></view>
		<view class="header" :style="{position:headerPosition}">
			<view class="addr">
				<view class="icon location"></view>{{city}}
			</view>
			<view class="input-box">
				<input placeholder="默认关键字" v-model="kword" placeholder-style="color:#c0c0c0;" />
				<view @tap="toSearch()" class="icon search"></view>
			</view>
			<view class="icon-btn">
				<view class="icon tongzhi" @tap="toMsg"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<view class="category-list">
			<!-- 左侧分类导航 -->
			<scroll-view scroll-y="true" class="left">
				<view class="row" v-for="(category,index) in productlist" :key="category.id" :class="[index==showCategoryIndex?'on':'']"
				 @tap="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{category.listname}}
					</view>
				</view>

			</scroll-view>
			<!-- 右侧子导航 -->
			<scroll-view scroll-y="true" class="right">
				<view class="category" v-for="(category,index) in productlist" :key="category.id" v-show="index==showCategoryIndex">
					<view class="banner">
						<image :src="category.imgurl[7]"></image>
					</view>
					<view class="list">
						<view class="box" v-for="(box,i) in category.name" :key="i" @tap="toCategory(category.name[i],category.codelist[i])">
							<image :id="category.codelist[i]" :src="category.imgurl[i]"></image>
							<view class="text">{{box}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	//高德SDK
	import amap from '@/common/SDK/amap-wx.js';
	export default {
		data() {
			return {
				kword:"",
				showCategoryIndex: 0,
				headerPosition: "fixed",
				city: "北京",
				//分类列表
				productlist: [{
						id: "1",
						listname: "数码产品",
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
						id: "2",
						listname: "运动体育",
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
						id: "3",
						listname: "服装服饰",
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
						id: "4",
						listname: "饰品首饰",
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
						id: "5",
						listname: "家用电器",
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
						id: "6",
						listname: "宠物用品",
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
						id: "7",
						listname: "日用百货",
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
						id: "8",
						listname: "左图右史",
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
						id: "9",
						listname: "美容护肤",
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
						id: "10",
						listname: "健康养生",
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
				]
			}
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		onLoad() {
			this.amapPlugin = new amap.AMapWX({
				//高德地图KEY，随时失效，请务必替换为自己的KEY，参考：http://ask.dcloud.net.cn/article/35070
				key: '7c235a9ac4e25e482614c6b8eac6fd8e'
			});
			//定位地址
			this.amapPlugin.getRegeo({
				success: (data) => {
					this.city = data[0].regeocodeData.addressComponent.city.replace(/市/g, ''); //把"市"去掉
				}
			});
		},
		methods: {
			
			//消息列表
			toMsg() {
				uni.navigateTo({
					url: '../../msg/msg'
				})
			},
			//分类切换显示
			showCategory(index) {
				this.showCategoryIndex = index;
			},
			toCategory(name,id) {
				uni.setStorageSync('catName', name);
				uni.navigateTo({
					url: '../../goods/goods-list/goods-list?codelist=' + id + '&listname=' + name
				});
			},
			//搜索跳转
			toSearch() {
				//uni.showToast({title: e.name,icon:"none"});
				// uni.setStorageSync('catName', e.name);
				uni.navigateTo({
					url: '../../goods/goods-list/goods-list?kword=' + this.kword
				});
			},
		}
	}
</script>
<style lang="scss">
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

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */

		.addr {
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;

			.icon {
				height: 60upx;
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: #ffc50a;
			}
		}

		.input-box {
			width: 100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 30upx;
			position: relative;
			display: flex;
			align-items: center;

			.icon {
				display: flex;
				align-items: center;
				position: absolute;
				top: 0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}

			input {
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}

		.icon-btn {
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;

			.icon {
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}

	.place {

		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.category-list {
		width: 100%;
		background-color: #fff;
		display: flex;

		.left,
		.right {
			position: absolute;

			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}

		.left {
			width: 24%;
			left: 0upx;
			background-color: #f2f2f2;

			.row {
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;

				.text {
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;

					.block {
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}

				&.on {
					height: 100upx;
					background-color: #fff;

					.text {
						font-size: 30upx;
						font-weight: 600;
						color: #2d2d2d;

						.block {
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #f06c7a;
						}
					}
				}
			}
		}

		.right {
			width: 76%;
			left: 24%;

			.category {
				width: 94%;
				padding: 20upx 3%;

				.banner {
					width: 100%;
					height: 24.262vw;
					border-radius: 10upx;
					overflow: hidden;
					box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.3);

					image {
						width: 100%;
						height: 24.262vw;
					}
				}

				.list {
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;

					.box {
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;

						image {
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}

						.text {
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
</style>
