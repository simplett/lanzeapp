<template>
	<view class="lanzepadding">
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="title">发布我的商品</view>
		</view>
		<view v-if="showHeader" class="place"></view>
		<view class="row">
			<view class="row-itemlist" v-for="(item,i) of codedata" :key="i">
				<view @tap="tocodelist(item.code)" class="row-item">
					<image @tap="tocodelist(item.code)" class="myimage" :src="item.image_url"></image>
				</view>
				<text>{{item.name}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codedata: [{
						code: 1,
						name: "数码产品",
						englishname: "DIGTAL PRODUCTS",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/0.png"
					},
					{
						code: 2,
						name: "运动体育",
						englishname: "MOTION SPORTS",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/1_0.png"
					},
					{
						code: 3,
						name: "服装服饰",
						englishname: "CLOTHING AND APPAREL",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/2.png"
					},
					{
						code: 4,
						name: "饰品首饰",
						englishname: "JEWELRY AND ORNAMENTS",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/3.png"
					},
					{
						code: 5,
						name: "家用电器",
						englishname: "ELECTIC APPLIANCE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/4.png"
					},
					{
						code: 6,
						name: "宠物用品",
						englishname: "PET SUPPLIES",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/5.png"
					},
					{
						code: 7,
						name: "日用百货",
						englishname: "ARTICLES OF DAILY USE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/6.png"
					},
					{
						code: 8,
						name: "左图右史",
						englishname: "BOOL COMPLETE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/7.png"
					},
					{
						code: 9,
						name: "美容护肤",
						englishname: "COSMETIC SKIN CARE",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/8.png"
					},
					{
						code: 10,
						name: "健康养生",
						englishname: "HEALTH PRESERVATION",
						image_url: "http://lanzesucai.oss-cn-beijing.aliyuncs.com/sucaizong/9.png"
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
			}
		},
		onLaunch(){
			this.getWidth();
			console.log("初始化的生命周期");
		},
		onLoad() {
			//兼容H5下结算条位置
			// #ifdef H5
			// #endif
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.getWidth()
			console.log("onload");
		},
		onShow() {
			this.getWidth();
			console.log("Onshow");
		},
		computed:{
			getmyheight(){
				var mywidth = uni.getSystemInfoSync().windowWidth;
				var height = mywidth * 0.22 + "px";
				return {height:height}
			}
			},
		methods: {

			tocodelist(pid) {
				console.log("点击");
				uni.navigateTo({
					url: '/pages/ali/codelist/codelist?codeid=' + pid
				});
				uni.setStorage({
					key: "codeid",
					data: pid,
					success() {
						console.log("成功选择")
					}
				})
			},
			getWidth() {
				var mywidth = uni.getSystemInfoSync().windowWidth;
				console.log(mywidth, "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm");
				this.myheightSvg.height = mywidth * 0.22 + "px";
				console.log(this.myheightSvg);
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

<style lang="scss">
	.lanzepadding{
		padding: 10upx 30upx;
	}
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
		/* top: var(--status-bar-height); */

		/*  #endif  */
		.title {
			font-size: 34upx;
		}

	}

	.place {

		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.row {
		width: 100%;
		display: flex;
		justify-content: space-around;
		/* align-items: flex-start; */
		flex-wrap: wrap;
	}

	.row-itemlist {
		text-align: center;
		width: 79.2px;
		margin: 10upx 0upx;
		font-size: 29.5upx;
	}

	.row-item {
		// border: 1px solid red;
		width: 100%;
		background:#e2e3e5;
		height: 79.2px;
	}

	.myimage {
		width: 100%;
		height: 100%;
	}
</style>
