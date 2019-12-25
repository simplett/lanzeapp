<template>
	<view>
		<view class="header" :style="{position:headerPosition}">
			<!-- <view class="addr">
				<view class="icon location"></view>{{city}}
			</view> -->
			<view class="input-box">
				<input placeholder="请输入您想搜索的宝贝" v-model="searchContext" placeholder-style="color:#c0c0c0;" />
				<view @tap="toSearch(searchContext)" class="icon search"></view>
			</view>
			<!-- <view class="icon-btn">
				<view class="icon tongzhi" @tap="toMsg"></view>
			</view> -->
		</view>
		<view style="width:100%;height:40px;"></view>
		<view class="show" v-for="(item,i) in datas" :key="i">
			<uni-card
			    :title="item.company_name"
			    mode="style"
			    :is-shadow="true"
			    :thumbnail="item.img"
			    :extra="item.order_time"
			    :note="item.address"
				@click="toCompany(item.boss_id, item.company_name)"
			>
			<view class="description">
				{{item.description}}
			</view>
			<view class="ad_count">
				广告位数量: {{item.ad_count}}
			</view>
			<view class="ad_count">
				<uni-icons class="ad_count" @tap="call(item.phone)" type="phone"></uni-icons>{{item.phone}}
			</view>
			<!-- <view class="phone">
			</view> -->
			<view class="time">
				<timeago :datetime="item.create_time" locale="zh-CN"></timeago>
			</view>
			</uni-card>
		</view>
	</view>
</template>

<script>
var ttt = 0;
//高德SDK
import amap from '@/common/SDK/amap-wx.js'
import uniCard from "@/components/uni/uni-card/uni-card.vue"
import uniIcons from "@/components/uni/uni-icons/uni-icons.vue"
export default {
	data() {
		return {
			searchContext: '', // 用户搜索的内容
			datas:[],
			current: 0,
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null,
			city: '北京',
			categoryList: [],
			Promotion: [],
			loadingText: '正在加载...'
		};
	},
	components: {
		uniCard, uniIcons
	},
	onPageScroll(e) {
		//兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
		this.headerTop = e.scrollTop >= 0 ? null : 0;
		this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
	},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		// this.load();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
	onReachBottom() {
		let len = this.productList.length;
		if (len >= 10) {
			this.loadingText = '到底了';
			return false;
		}
		// this.load();
	},
	onLoad(options) {
		// this.load()
		console.log(options);
		if (options.type == 'mylike') {
			uni.navigateTo({
				url: '../../../goods/goods?pid=' + options.pid
			});
		}
		// #ifdef APP-PLUS
		this.nVueTitle = uni.getSubNVueById('homeTitleNvue');
		this.nVueTitle.onMessage(res => {});
		this.showHeader = false;
		this.statusHeight = plus.navigator.getStatusbarHeight();
		// #endif
		this.amapPlugin = new amap.AMapWX({
			//高德地图KEY，随时失效，请务必替换为自己的KEY，参考：http://ask.dcloud.net.cn/article/35070
			key: '7c235a9ac4e25e482614c6b8eac6fd8e'
		});
		//定位地址
		this.amapPlugin.getRegeo({
			success: data => {
				this.city = data[0].regeocodeData.addressComponent.city.replace(/市/g, ''); //把"市"去掉
				// #ifdef APP-PLUS
				this.nVueTitle.postMessage({
					type: 'location',
					city: this.city
				});
				// #endif
			}
		});
		//开启定时器
		// this.load(); //请求商品的数据
	},
	created() {
		this.getCompany()
	},
	methods: {
		// 测试
		// getFile () {
		// 	uni.chooseImage({
		// 	    success: (chooseImageRes) => {
		// 	        const tempFilePaths = chooseImageRes.tempFilePaths;
		// 	        uni.uploadFile({
		// 	            url: 'http://192.168.101.82:8081/v1/admin/getfiles', //仅为示例，非真实的接口地址
		// 				header: {token:'1111111'},
		// 	            filePath: tempFilePaths[0],
		// 	            name: '',
		// 				fileType: 'video',
		// 	            formData: {
		// 	                'user': 'test'
		// 	            },
		// 	            success: (uploadFileRes) => {
		// 	                console.log(uploadFileRes.data);
		// 	            }
		// 	        });
		// 	    }
		// 	});
		// },
		// 打电话给当前消息的老板
		call (phone) {
			if (/^1[3456789]\d{9}$/.test(phone)) {
				uni.makePhoneCall({
				    phoneNumber: phone,
					success: (res) => {
						console.log(res)
						uni.showToast({
							icon:'none',
							title:'成功拔打电话'
						})
					},
					fail: (err) => {
						console.log(err)
						uni.showToast({
							icon:"none",
							title:'拨打电话时失败'
						})
					}
				});
			}
		},
		// 获取广告位的动态
		getCompany () {
			let opts = {
				url:'/index/dynamic',
				method: 'get'
			}
			this.$http.httpRequest(opts).then(res => {
				console.log(res.data.infos, '这是广告的动态')
				this.datas = res.data.infos
			})
		},
		// 跳转到改公司页面
		toCompany (id, name) {
			uni.navigateTo({
				url: `../../home/index?boss_id=${id}&company_name=${name}`
			});
		},
		//搜索跳转
		toSearch(s) {
			// 当用户没有输入任何内容但进行了点击的动作
			if (!s) {
				uni.showToast({
					title: '请输入您要搜索的内容'
				})
			} else {
				//uni.showToast({title: e.name,icon:"none"});
				// uni.setStorageSync('catName', e.name);
				uni.navigateTo({
					url: '../../home/search/index?search=' + s
				});
			}
		},
	}
};
</script>
<style lang="scss" scoped>
	
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
	
	.show{
		width:50%;
		float: left;
	}
	.uni-card__thumbnailimage-box[data-v-c2faec42] {
		height:100%;
	}
	// uni-image{
	// 	height: 100%;
	// }
	.ad_count{
		// border: 1px solid red;
		// background-color: #808080;
		font-size: 20upx;
	}
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.time{
		color: #302514;
		font-size: 20upx;
		text-align: right;
		margin-top: -19px;
	}
	.description{	
		color: #888;
		font-size: 28upx;
		padding: 0px 4upx;
		display: -webkit-box;
		// 文字超出两行后隐藏
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}
	
	.search999 {
		width: 32upx;
		height: 32upx;
	}
	
	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.input999 {
		color: #999;
		width: 80%;
	}
	.nav {
		position: fixed;
		left: 0;
		top: 0;
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #50B7EA;
		z-index: 996;
	}
page {
	position: relative;
	background-color: #fff;
}


</style>
