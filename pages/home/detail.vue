<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :interval="interval" :duration="duration">
                        <swiper-item>
                            <!-- <view>A</view> -->
							<image style="width:100%;height:100%;" class="swiper-item uni-bg-red" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode=""></image>
                        </swiper-item>
                        <swiper-item>
							<image style="width:100%;height:100%;" class="swiper-item uni-bg-red" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode=""></image>
                        </swiper-item>
                        <swiper-item>
							<image style="width:100%;height:100%;" class="swiper-item uni-bg-red" src="https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png" mode=""></image>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
		<!-- 显示name -->
		<view class="">
			{{data.name}}
		</view>
		<!-- 显示更多详细内容 -->
		<view class="grid">
		</view>
		<!-- 底部商品导航 -->
		<uni-goods-nav :fill="true"  :options="options" :button-group="buttonGroup"  @click="onClick" @buttonClick="buttonClick" class="goodsNav"></uni-goods-nav>
    </view>
</template>

<script>
import uniGoodsNav from '@/components/uni/uni-goods-nav/uni-goods-nav.vue'
export default {
	components:{
		uniGoodsNav
	},
	data() {
		return {
			// 保存详细信息
			data: [],
			id: null,
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			options: [{
			  icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
			  text: '客服'
			}, {
			  icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
			  text: '店铺'
			}, {
			  icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
			  text: '购物车',
			  info: 2
			}],
			buttonGroup: [{
			  text: '加入购物车',
			  backgroundColor: '#ff0000',
			  color: '#fff'
			},
			{
			  text: '立即购买',
			  backgroundColor: '#ffa200',
			  color: '#fff'
			}
			]
		};
	},
	onLoad(options) {
		this.id = options.id
		console.log(options)
	},
	created() {
		this.getDetail()
	},
	methods: {
		// 获取详细信息
		getDetail () {
			let opt = {
				url: `/index/detail`,
				method: 'get'
			}
			let params = {
				ad_id: this.id
			}
			this.$http.httpRequest(opt, params).then((res) => {
				this.data = res.data.infos[0]
				console.log(this.data)
			})
		},
		changeIndicatorDots(e) {
			this.indicatorDots = !this.indicatorDots
		},
		changeAutoplay(e) {
			this.autoplay = !this.autoplay
		},
		intervalChange(e) {
			this.interval = e.target.value
		},
		durationChange(e) {
			this.duration = e.target.value
		}
	}
}
</script>

<style lang="scss">
.goodsNav{
	position: fixed;
	bottom: 0;
	left:0;
	width:100%;
}
.grid{
	height:10px;
}
</style>
