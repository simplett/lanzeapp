<template>
	<view>
		<view class="nav">
			<!-- #ifdef H5 -->
			<view style="height: 14px;width: 100%;"></view>
			<!-- #endif -->
			<!-- 搜索 -->
			<view>当前所属公司</view>
			<haverster-sliding-menu ref="navTab" :tabTitle="items" @changeTab="changeTab"></haverster-sliding-menu>
			<view style="height: 14px;width: 100%;"></view>
		</view>
		<view style="width:100%;height:60px;"></view>
		<swiper style="min-height: 100vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem, listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
					<!-- 				<view :id="'top'+listIndex" style="width: 100%;height: 180upx;">边距盒子</view>
				<view style="width: 100%;">
					<view class='card' v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index">
						{{item}}
					</view>
				</view>
				<view class='noCard' v-if="listItem.length===0">
					暂无信息
				</view>
				<view style="width: 100%;height: 100upx;opacity:0;">底部占位盒子</view> -->
					<phone-directory :phones="phones" @paramClick="paramClick"></phone-directory>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
var ttt = 0;
//高德SDK
import uniSegmentedControl from '@/components/uni/uni-segmented-control/uni-segmented-control.vue';
import haversterSlidingMenu from '@/components/haverster-slidingMenu/haversterSlidingMenu.vue';
import phoneDirectory from '@/components/phone-directory/phone-directory.vue';
import uniList from '@/components/uni/uni-list/uni-list.vue';
import uniListItem from '@/components/uni/uni-list-item/uni-list-item.vue';
import amap from '@/common/SDK/amap-wx.js';
export default {
	data() {
		return {
			// selectdata: [{"data": []}],
			selectdata: [],
			list: [
				[1, 2, 3, 4, 5, 6],
				['a', 'b', 'c', 'd', 'e', 'f'],
				[],
				['2233', '4234', '13144', '324244'],
				[1, 2, 3, 4, 5, 6],
				['a', 'b', 'c', 'd', 'e', 'f'],
				[],
				['2233', '4234', '13144', '324244'],
				[1, 2, 3, 4, 5, 6],
				['a', 'b', 'c', 'd', 'e', 'f'],
				[],
				['2233', '4234', '13144', '324244']
			], //数据格式,
			currentTab: 0, //sweiper所在页
			tabTitle: ['公司一', '公司二', '公司三', '公司四', '公司五', '公司六', '公司七', '公司八', '公司九', '公司十', '公司十一', '公司十二'], //导航栏格式 --导航栏组件
			items: ['全部', '移动', '固定'],
			datas: [],
			current: 0,
			toView: '',
			kword: '',
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null,
			city: '北京',
			currentSwiper: 0,
			Promotion: [],
			//猜你喜欢列表
			loadingText: '正在加载...',
			phones: null
		};
	},
	components: {
		uniSegmentedControl,
		haversterSlidingMenu,
		phoneDirectory,
		uniList,
		uniListItem
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
		// let len = this.productList.length;
		// if (len >= 1000) {
		// 	this.loadingText = '到底了';
		// 	return false;
		// }
		// this.load();
	},
	onLoad(options) {
		console.log(options);
		this.load(options.boss_id);
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
	methods: {
		// 跳转到商品详情
		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current; //获取索引
			this.$refs.navTab.longClick(index);
		},
		toTop() {
			this.toView = '';
			setTimeout(() => {
				this.toView = 'top' + this.currentTab;
			}, 10);
		},
		changeTab(index) {
			this.currentTab = index;
		},
		onClickItem(index) {
			if (this.current !== index.currentIndex) {
				console.log(index);
				this.current = index.currentIndex;
			}
		},
		tobanner() {
			uni.showToast({
				title: '业务功能完善中，敬请期待',
				icon: 'none'
			});
		},
		load(id) {
			let opts = {
				url: `/index/company/${id}`,
				method: 'get'
			};
			this.$http.httpRequest(opts).then(res => {
				console.log(res.data, 'data');
				this.phones = res.data.infos
			});
		}
	}
};
</script>
<style lang="scss">
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
.select {
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
	background-color: #50b7ea;
	z-index: 996;
}
page {
	position: relative;
	background-color: #fff;
}
</style>
