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
			    :title="item.name"
			    mode="style"
			    :is-shadow="true"
			    thumbnail="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575365832113&di=db3dda1b800df11e150f1139740de2a6&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cef70d70409845d688d53f20f7.jpg"
			    :extra="item.order_time"
			    :note="item.address"
				@click="toCompany"
			>
			</uni-card>
		</view>
		<!-- <uni-list>
		    <uni-list-item v-for="(item,i) of datas" :key='i' :note="item.address" :title="item.name" :thumb="item.image_list"></uni-list-item>
		</uni-list> -->
		<swiper style="min-height: 100vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1" scroll-with-animation :scroll-into-view="toView">
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
var ttt = 0;
//高德SDK
// import uniSegmentedControl from '@/components/uni/uni-segmented-control/uni-segmented-control.vue'
import haversterSlidingMenu from '@/components/haverster-slidingMenu/haversterSlidingMenu.vue'
import uniIndexedList from "@/components/uni/uni-indexed-list/uni-indexed-list.vue"
import uniList from "@/components/uni/uni-list/uni-list.vue"
import uniListItem from "@/components/uni/uni-list-item/uni-list-item.vue"
import amap from '@/common/SDK/amap-wx.js'
import uniCard from "@/components/uni/uni-card/uni-card.vue"
export default {
	data() {
		return {
			searchContext: '', // 用户搜索的内容
			selectdata: [{"data": []}],
			list: [[1, 2, 3, 4, 5, 6],['a', 'b', 'c', 'd', 'e', 'f'],[],['2233','4234','13144','324244'],[1, 2, 3, 4, 5, 6],['a', 'b', 'c', 'd', 'e', 'f'],[],['2233','4234','13144','324244'],[1, 2, 3, 4, 5, 6],['a', 'b', 'c', 'd', 'e', 'f'],[],['2233','4234','13144','324244']], //数据格式,
			currentTab: 0, //sweiper所在页
			tabTitle:['公司一','公司二','公司三','公司四','公司五','公司六','公司七','公司八','公司九','公司十','公司十一','公司十二'], //导航栏格式 --导航栏组件
			datas:[],
			current: 0,
			toView:'',
			kword: '',
			showHeader: true,
			afterHeaderOpacity: 1, //不透明度
			headerPosition: 'fixed',
			headerTop: null,
			statusTop: null,
			nVueTitle: null,
			city: '北京',
			currentSwiper: 0,
			// 轮播图片
			swiperList: [
				{
					id: 1,
					title: '业务完善中...',
					img: '/static/img/1.jpg'
				},
				{
					id: 2,
					title: '业务完善中...',
					img: '/static/img/2.jpg'
				},
				{
					id: 3,
					title: '业务完善中...',
					img: '/static/img/3.jpg'
				}
			],
			// 分类菜单
			categoryList: [],
			Promotion: [],
			//猜你喜欢列表
			productList: [],
			loadingText: '正在加载...'
		};
	},
	components: {
		// uniSegmentedControl,
		haversterSlidingMenu,
		uniIndexedList,
		uniList,
		uniListItem,
		uniCard
	},
	onPageScroll(e) {
		//兼容iOS端下拉时顶部漂移
		this.headerPosition = e.scrollTop >= 0 ? 'fixed' : 'absolute';
		this.headerTop = e.scrollTop >= 0 ? null : 0;
		this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
	},
	//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
	onPullDownRefresh() {
		this.load();
		setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
	onReachBottom() {
		let len = this.productList.length;
		if (len >= 1000) {
			this.loadingText = '到底了';
			return false;
		}
		this.load();
	},
	onLoad(options) {
		this.load()
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
		this.load(); //请求商品的数据
	},
	created() {
		this.getCompany()
	},
	methods: {
		// 获取当前有多少个公司
		getCompany () {
			let opts = {
				url:'/index/company',
				method: 'get'
			}
			this.$http.httpRequest(opts).then(res => {
				console.log(res.data.infos)
			})
		},
		// 跳转到改公司页面
		toCompany () {
			uni.navigateTo({
				url: '../../home/index'
			});
		},
		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current //获取索引
			this.$refs.navTab.longClick(index);
		},
		toTop(){
			this.toView = ''
			setTimeout(()=>{
				this.toView = 'top' + this.currentTab
			},10)
		},
		changeTab(index){
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
		load() {
			let opts = {
				url:'/index/show',
				method: 'get'
			}
			this.$http.httpRequest(opts).then(res => {
				// console.log(res.data,'data')
				this.datas = res.data.data
				this.datas.forEach(item => {
					this.selectdata[0].data.push(item.address)
				})
				// console.log(this.selectdata)
			})
		},
		//消息列表
		toMsg() {
			uni.navigateTo({
				url: '../../msg/msg'
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
		//轮播图跳转
		toSwiper(e) {
			uni.showToast({
				title: e.title,
				icon: 'none'
			});
		},
		//分类跳转
		toCategory(e) {
			//uni.showToast({title: e.name,icon:"none"});
			uni.setStorageSync('catName', e.name);
			uni.navigateTo({
				url: '../../goods/goods-list/goods-list?codeid=' + e.id + '&name=' + e.name
			});
		},
		//推荐商品跳转
		toPromotion(e) {
			uni.showToast({
				title: e.title,
				icon: 'none'
			});
		},
		//商品跳转
		toGoods(e) {
			uni.navigateTo({
				url: '../../goods/goods?pid=' + e.goods_id
			});
		},
		//轮播图指示器
		swiperChange(event) {
			this.currentSwiper = event.detail.current;
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
