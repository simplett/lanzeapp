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
		<w-picker v-if="selectList.length!=0" mode="selector" :defaultVal="[1]" @confirm="onConfirm" ref="selector"
		 themeColor="#f00" :selectList="selectList">
		</w-picker>

	</view>
</template>

<script>
	import wPicker from "../../../components/w-picker/w-picker.vue";
	export default {
		data() {
			return {
				selectList: [{
						label: "101",
						value: "炫酷电脑"
					}, {
						label: "102",
						value: "手机一族"
					}, {
						label: "103",
						value: "相机拍摄"
					}, {
						label: "104",
						value: "智能穿戴"
					}, {
						label: "105",
						value: "电脑周边"
					}, {
						label: "106",
						value: "网络设备"
					}],
				price: "",
				p_description: "",
				fontcount: "0",
				productlist: [
					[{
						label: "101",
						value: "炫酷电脑"
					}, {
						label: "102",
						value: "手机一族"
					}, {
						label: "103",
						value: "相机拍摄"
					}, {
						label: "104",
						value: "智能穿戴"
					}, {
						label: "105",
						value: "电脑周边"
					}, {
						label: "106",
						value: "网络设备"
					}],
					[{
						label: "201",
						value: "运动器材"
					}, {
						label: "202",
						value: "户外运动"
					}, {
						label: "203",
						value: "健身塑形"
					}, {
						label: "204",
						value: "球类包陪"
					}, {
						label: "205",
						value: "小众运动"
					}, {
						label: "206",
						value: "运动鞋"
					}],
					[{
						label: "301",
						value: "运动风格"
					}, {
						label: "302",
						value: "休闲风格"
					}, {
						label: "303",
						value: "商务风格"
					}, {
						label: "304",
						value: "百搭风格"
					}, {
						label: "305",
						value: "街头风格"
					}, {
						label: "306",
						value: "简约风格"
					}],
					[{
						label: "401",
						value: "新潮搭配"
					}, {
						label: "402",
						value: "服饰配饰"
					}, {
						label: "403",
						value: "首饰手表"
					}, {
						label: "404",
						value: "珠宝一类"
					}, {
						label: "405",
						value: "眼睛一族"
					}, {
						label: "406",
						value: "各种包包"
					}],
					[{
						label: "501",
						value: "厨卫电器"
					}, {
						label: "502",
						value: "小家电"
					}, {
						label: "503",
						value: "环境电器"
					}, {
						label: "504",
						value: "大家电"
					}, {
						label: "505",
						value: "温控电气"
					}, {
						label: "506",
						value: "其他电器"
					}],
					[{
						label: "601",
						value: "宠物玩具"
					}, {
						label: "602",
						value: "宠物零食"
					}, {
						label: "603",
						value: "喂食器"
					}, {
						label: "604",
						value: "宠物"
					}, {
						label: "605",
						value: "宠物药品"
					}, {
						label: "606",
						value: "宠物之家"
					}],
					[{
						label: "701",
						value: "文具教具"
					}, {
						label: "702",
						value: "餐饮用具"
					}, {
						label: "703",
						value: "厨房用品"
					}, {
						label: "704",
						value: "床上用品"
					}, {
						label: "705",
						value: "家居日用"
					}, {
						label: "706",
						value: "其他日用"
					}],
					[{
						label: "801",
						value: "国际名著"
					}, {
						label: "802",
						value: "工具用书"
					}, {
						label: "803",
						value: "课本教材"
					}, {
						label: "804",
						value: "科普类书"
					}, {
						label: "805",
						value: "小说大全"
					}, {
						label: "806",
						value: "本必读"
					}],
					[{
						label: "901",
						value: "化妆彩妆"
					}, {
						label: "902",
						value: "护理护肤"
					}, {
						label: "903",
						value: "口红卖场"
					}, {
						label: "904",
						value: "美容美颜"
					}, {
						label: "905",
						value: "香水一类"
					}, {
						label: "906",
						value: "滋生面膜"
					}],
					[{
						label: "1001",
						value: "计生用品"
					}, {
						label: "1002",
						value: "外用理疗"
					}, {
						label: "1003",
						value: "传统滋补"
					}, {
						label: "1004",
						value: "保健品"
					}, {
						label: "1005",
						value: "养生药品"
					}, {
						label: "1006",
						value: "养生食物"
					}],
				],
				myheightSvg: {
					height: ""
				},
				headerTop: null,
				statusTop: null,
				headerPosition: "fixed",
				showHeader: true,
			}
		},
		components: {
			wPicker
		},
		onLoad(options) { //option为object类型，会序列化上个页面传递的参数
			console.log(options.selectid, "55555555555555"),
			this.getselect(options.selectid);
		},
		onShow() {
			// this.getWidth();
			console.log("Onshow");
		},
		watch: {
			p_description() {
				var len = this.p_description.length;
				this.fontcount = len;
			}
		},
		methods: {
			selector(){
				this.$refs.picker.show();
			},
			getselect(id) {
				var c = this.productlist[id];
				this.selectList = c;
				console.log(this.selectList,"999999999999999999999999999999");
				
			},
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

	.lanzepadding {
		padding: 10upx 30upx;
	}

	.header {
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

	.mybuttom {
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

	textarea {
		width: 100%;
		padding: 10upx 20upx;
		border: 2upx solid gray;
		box-sizing: border-box;
		height: 300upx;
		box-shadow: -6upx -6upx 10upx 2upx gray inset;
	}

	.mytext {
		float: right;
		padding: 2upx 10upx;
	}

	.price {
		display: flex;
		justify-content: space-between;
		height: 60upx;
		width: 100%;
	}

	.lanzeimage {
		height: 100%;
		width: 60upx;
	}

	.warn-btn {
		width: 100%;

		button {
			display: table;
			margin: auto auto;
			width: 360upx;
		}
	}
</style>
