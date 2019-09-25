<template>
	<view>
		<view class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="target" v-for="(target,index) in orderbyList" @tap="select(index)" :key="index" :class="[target.selected?'on':'']">
				{{target.text}}
				<view v-if="target.orderbyicon" class="icon" :class="target.orderbyicon[target.orderby]"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view class="place"></view>
		<!-- 商品列表 -->
		<view class="goods-list">
			<view class="product-list">
				<view class="product" v-for="(goods) in goodsList" :key="goods.goods_id" @tap="toGoods(goods)">
					<image mode="widthFix" :src="goods.img"></image>
					<view class="name">{{goods.name}}</view>
					<view class="info">
						<view class="price">{{goods.price}}</view>
						<view class="slogan">浏览量:{{goods.slogan}}</view>
					</view>
				</view>
			</view>
			<view class="loading-text">{{loadingText}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				codelist: "",
				codename: "",
				goodsList: [],
				mychange: true,
				loadingText: "正在加载...",
				headerTop: "0px",
				headerPosition: "fixed",
				orderbyList: [{
						text: "销量",
						selected: true,
						orderbyicon: false,
						orderby: 0
					},
					{
						text: "价格",
						selected: false,
						orderbyicon: ['sheng', 'jiang'],
						orderby: 0
					},
					{
						text: "好评",
						selected: false,
						orderbyicon: false,
						orderby: 0
					}
				],
				orderby: "sheng"
			};
		},
		onLoad: function(options) { //option为object类型，会序列化上个页面传递的参数
			console.log(options.codelist, options.listname) //打印出上个页面传递的参数。
			if (options.codelist) {
				this.codelist = options.codelist;
				this.codename = options.listname;
				this.mychange = 1;
				console.log("列表跳转", this.codelist, this.codename);
			} else if (options.codeid) {
				this.codelist = options.codeid;
				this.codename = options.name;
				this.mychange = 2;
				console.log("主页跳转", this.codelist, this.codename);
			} else if (options.kword) {
				this.kword = options.kword;
				this.codename=this.kword;
				this.mychange = 3;
			}
			uni.setNavigationBarTitle({
				title: this.codename
			});
			this.reload()

			//兼容H5下排序栏位置
			// #ifdef H5
			//定时器方式循环获取高度为止，这么写的原因是onLoad中head未必已经渲染出来。
			let Timer = setInterval(() => {
				let uniHead = document.getElementsByTagName('uni-page-head');
				if (uniHead.length > 0) {
					this.headerTop = uniHead[0].offsetHeight + 'px';
					clearInterval(Timer); //清除定时器
				}
			}, 1);
			// #endif
		},
		onPageScroll(e) {
			//兼容iOS端下拉时顶部漂移
			if (e.scrollTop >= 0) {
				this.headerPosition = "fixed";
			} else {
				this.headerPosition = "absolute";
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(() => {
				this.reload();
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			uni.showToast({
				title: '触发上拉加载'
			});
			let len = this.goodsList.length;
			if (len >= 1000) {
				this.loadingText = "到底了";
				return false;
			} else {
				this.loadingText = "正在加载...";
			}
			let end_goods_id = this.goodsList[len - 1].goods_id;
			this.reload();
		},
		methods: {
			reload() {
				if (this.mychange == 1) {
					uni.request({
						url: 'http://120.79.19.253:10086/Search', //仅为示例，并非真实接口地址。
						data: {
							type: "categories",
							codelist: this.codelist
						},
						success: (res) => {
							console.log("$$$$$$$$$$$$$$$$$$$$$$$$", res.data.data);
							this.text = 'request success';
							var data = res.data.data;
							var datalist = [{}];
							var imagelistsplit = [];
							for (var item of data) {
								var imagereg = /;/;
								if (imagereg.test(item.pimages)) {
									var j = item.pimages.split(";");
									imagelistsplit.push(j[0]);
								} else {
									imagelistsplit.push(item.pimages)
								}
							}
							for (var item in data) {
								datalist[item] = {
									"goods_id": data[item].pid,
									"img": imagelistsplit[item],
									"name": data[item].pname,
									"price": data[item].price,
									"slogan": data[item].watched
								};

							}
							console.log(datalist, "%%%%%%%%%%%%%%%%%%%%%%%%%%%");
							this.goodsList = [...this.goodsList, ...datalist]
						}
					});
				} else if (this.mychange == 2) {
					uni.request({
						url: 'http://10.1.180.146:8080/Search', //仅为示例，并非真实接口地址。
						data: {
							type: "code",
							code: this.codelist
						},
						success: (res) => {
							console.log("$$$$$$$$$$$$$$$$$$$$$$$$", res.data.data);
							this.text = 'request success';
							var data = res.data.data;
							var datalist = [{}];
							var imagelistsplit = [];
							for (var item of data) {
								var imagereg = /;/;
								if (imagereg.test(item.pimages)) {
									var j = item.pimages.split(";");
									imagelistsplit.push(j[0]);
								} else {
									imagelistsplit.push(item.pimages)
								}
							}
							for (var item in data) {
								datalist[item] = {
									"goods_id": data[item].pid,
									"img": imagelistsplit[item],
									"name": data[item].pname,
									"price": data[item].price,
									"slogan": data[item].watched
								};

							}
							console.log(datalist, "%%%%%%%%%%%%%%%%%%%%%%%%%%%");
							this.goodsList = [...this.goodsList, ...datalist]
						}
					});
				} else if (this.mychange == 3) {
					uni.request({
						url: 'http://120.79.19.253:10086/Search', //仅为示例，并非真实接口地址。
						data: {
							type: "category",
							kw: this.kword
						},
						success: (res) => {
							console.log("$$$$$$$$$$$$$$$$$$$$$$$$", res.data.data);
							this.text = 'request success';
							var data = res.data.data;
							var datalist = [{}];
							var imagelistsplit = [];
							for (var item of data) {
								var imagereg = /;/;
								if (imagereg.test(item.pimages)) {
									var j = item.pimages.split(";");
									imagelistsplit.push(j[0]);
								} else {
									imagelistsplit.push(item.pimages)
								}
							}
							for (var item in data) {
								datalist[item] = {
									"goods_id": data[item].pid,
									"img": imagelistsplit[item],
									"name": data[item].pname,
									"price": data[item].price,
									"slogan": data[item].watched
								};

							}
							console.log(datalist, "%%%%%%%%%%%%%%%%%%%%%%%%%%%");
							this.goodsList = [...this.goodsList, ...datalist]
						}
					});
				}

				console.log("reload");

			},
			//商品跳转
			toGoods(e) {
				uni.showToast({
					title: '商品' + e.goods_id,
					icon: "none"
				});
				uni.navigateTo({
					url: '../goods?pid=' + e.goods_id
				});
			},
			//排序类型
			select(index) {
				let tmpTis = this.orderbyList[index].text + "排序 "
				if (this.orderbyList[index].orderbyicon) {
					let type = this.orderbyList[index].orderby == 0 ? '升序' : '降序';
					if (this.orderbyList[index].selected) {
						type = this.orderbyList[index].orderby == 0 ? '降序' : '升序';
						this.orderbyList[index].orderby = this.orderbyList[index].orderby == 0 ? 1 : 0;
					}
					tmpTis += type
				}
				this.orderbyList[index].selected = true;
				let len = this.orderbyList.length;
				for (let i = 0; i < len; i++) {
					if (i != index) {
						this.orderbyList[i].selected = false;
					}
				}
				uni.showToast({
					title: tmpTis,
					icon: "none"
				});
			}
		}

	}
</script>

<style lang="scss">
	.icon {
		font-size: 26upx;
	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 79upx;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		border-bottom: solid 1upx #eee;

		.target {
			width: 20%;
			height: 60upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28upx;
			margin-bottom: -2upx;
			color: #aaa;

			&.on {
				color: #555;
				border-bottom: 4upx solid #f06c7a;
				font-weight: 600;
				font-size: 30upx;
			}


		}
	}

	.place {

		background-color: #ffffff;
		height: 100upx;

	}

	.goods-list {
		.loading-text {
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 60upx;
			color: #979797;
			font-size: 24upx;
		}

		.product-list {
			width: 92%;
			padding: 0 4% 3vw 4%;
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;

			.product {
				width: 48%;
				border-radius: 20upx;
				background-color: #fff;
				margin: 0 0 15upx 0;
				box-shadow: 0upx 5upx 25upx rgba(0, 0, 0, 0.1);

				image {
					width: 100%;
					height: 60upx;
					border-radius: 20upx 20upx 0 0;
				}

				.name {
					width: 92%;
					padding: 10upx 4%;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					text-align: justify;
					overflow: hidden;
					height: 35px;
					font-size: 30upx;
				}

				.info {
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					width: 92%;
					padding: 10upx 4% 10upx 4%;

					.price {
						color: #e65339;
						font-size: 30upx;
						font-weight: 600;
					}

					.slogan {
						color: #807c87;
						font-size: 24upx;
					}
				}
			}

		}
	}
</style>
