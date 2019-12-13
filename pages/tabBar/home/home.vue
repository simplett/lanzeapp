<template>
	<view>
		<view class="nav">
			<!-- #ifdef H5 -->
				<view style="height: 24px;width: 100%;"></view>
			<!-- #endif -->
			<!-- 搜索 -->
			<view class='searchInput999'>
				<input v-model="searchContext" class='input999' placeholder="输入你想搜索的广告位"></input>
				<view class='searchBox999'>
					<image src='/static/icon-search.png' @click="onSearch" class='search999'></image>
				</view>
			</view>
			<view style="height: 14px;width: 100%;"></view>
		</view>
		<view style="width:100%;height:60px;"></view>
		<view v-for="(item,i) in datas" :key="i">
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
			<view class="phone" @tap="call(item.phone)">
				<uni-icons type="phone"></uni-icons>{{item.phone}}
			</view>
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
		toSearch() {
			// 当用户没有输入任何内容但进行了点击的动作
			if (!this.searchContext) {
				uni.showToast({
					title: '请输入您要搜索的内容'
				})
			} else {
				
			}
			//uni.showToast({title: e.name,icon:"none"});
			// uni.setStorageSync('catName', e.name);
			uni.navigateTo({
				url: '../../goods/goods-list/goods-list?kword=' + this.kword
			});
		},
	}
};
</script>
<style lang="scss" scoped>
	.ad_count, .phone {
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
		margin-top: -17px;
		padding-right:10px;
	}
	.description{	
		color: #888;
		font-size: 28upx;
		padding: 0px 4upx;
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
