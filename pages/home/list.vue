<template>
	<view>
		<!-- 用户选择的当前位置下的所有广告位 -->
		<view class="nav">
			<!-- #ifdef H5 -->
				<view style="height: 50px;width: 100%;"></view>
			<!-- #endif -->
			<view style="width:100%;text-align: center;font-size: 16px;">{{area_name}}</view>
			<!-- <haverster-sliding-menu ref="navTab" :tabTitle="items" @changeTab='changeTab'></haverster-sliding-menu> -->
			<!-- 搜索 -->
			<view class='searchInput999'>
				<input v-model="searchContext" class='input999' placeholder="输入你想搜索的广告位"></input>
				<view class='searchBox999'>
					<image src='../../static/icon-search.png' @click="onSearch" class='search999'></image>
				</view>
			</view>
			<view style="height: 14px;width: 100%;"></view>
		</view>
		<view style="width:100%;height:60px;"></view>
		<view v-for="(item,i) in datas" :key="i">
			<!-- title: ， extra: 发布时间， name:  -->
			<uni-card
			    :title="item.address"
			    :extra="item.order_time"
				@click="toDetail(item.ad_id)"
			>
			   {{item.name}}
			</uni-card>
		</view>
	</view>
</template>

<script>
var ttt = 0;
//高德SDK
import uniSegmentedControl from '@/components/uni/uni-segmented-control/uni-segmented-control.vue'
import haversterSlidingMenu from '@/components/haverster-slidingMenu/haversterSlidingMenu.vue'
import uniIndexedList from "@/components/uni/uni-indexed-list/uni-indexed-list.vue"
import uniList from "@/components/uni/uni-list/uni-list.vue"
import uniListItem from "@/components/uni/uni-list-item/uni-list-item.vue"
import amap from '@/common/SDK/amap-wx.js'
import uniCard from "@/components/uni/uni-card/uni-card.vue"
export default {
	data() {
		return {
			area_name: '', // 当前区域的名称
			id: null,
			searchContext: '', //用户搜索的内容
			selectdata: [{"data": []}],
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
		uniSegmentedControl,
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
	onLoad (options) {
		this.area_name = options.area_name
		this.id = options.id
		this.load()
	},
	methods: {
		// swiper 滑动
		swiperTab: function(e) {
			var index = e.detail.current //获取索引
			this.$refs.navTab.longClick(index);
		},
		toDetail (id) {
			uni.navigateTo({
				url: `detail?id=${id}`
			})
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
				url:`/index/company/area/${this.id}`,
				method: 'get'
			}
			this.$http.httpRequest(opts).then(res => {
				this.datas = res.data.infos
				console.log(this.datas,'data')
				this.datas.forEach(item => {
					this.selectdata[0].data.push(item.address)
				})
				console.log(this.selectdata)
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
	.select{
		
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
