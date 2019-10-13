<template>
	<view>
		<view class="block">
			
		</view>
		<view class="QR">
			<view class="qrimg-i">
				<tki-qrcode v-if="ifShow" cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
			</view>
		</view>
		<view class="title">
			扫描二维码，加我好友
		</view>
		<!-- <view class="btn" v-show="showBtn" @tap="printscreen">
			{{tis}}
		</view> -->
		<view class="logo">
			<!-- <image mode="widthFix" src="../../../static/img/qrlogo.png"></image> -->
			<div class="qrcode" id="qrCode" ref="qrCodeDiv"></div>
		</view>
	</view>
</template>

<script>
	import tkiQrcode from '@/components/tki-qrcode/tki-qrcode.vue'
	export default {
		data() {
			return {
				ifShow: true,
				val: "111", // 要生成的二维码值
				size: 200, // 二维码大小
				unit: 'px', // 单位
				background: '#ffffff', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#ff0000', // 角标色
				icon: '', // 二维码图标
				iconsize: 40, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '' // 二维码生成后的图片地址或base64
			}
		},
		methods: {
			sliderchange(e) {
				
				this.size = e.detail.value
			},
			creatQrcode() {
				var token;
				uni.getStorage({
					key:"token",
					success: res => {
						token=res.data;
						uni.request({
						    url: 'http://120.79.19.253:10086/Search', //仅为示例，并非真实接口地址。
						    data: {
						        token,
						        type: "user"
						    },
						    success: (res) => {
						        console.log(res);
						        if(res.data.status==1)
								{
									var uid=res.data.uid;
									
									var data={"type":"user","uid":uid};
									this.val=JSON.stringify(data);
									this.$refs.qrcode._makeCode()
								}
						    }
						});
					},
					fail: (res) => {
						uni.showToast({
							title:"请您先登陆",icon:"none"
						})
					}
				})
				
			},
			saveQrcode() {
				this.$refs.qrcode._saveCode()
			},
			qrR(res) {
				this.src = res
			},
			clearQrcode() {
				this.$refs.qrcode._clearCode()
				this.val = ''
			},
			ifQrcode() {
				this.ifShow = !this.ifShow
			},
			selectIcon() {
				let that = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						that.icon = res.tempFilePaths[0]
						setTimeout(() => {
							that.creatQrcode()
						}, 100);
						// console.log(res.tempFilePaths);
					}
				});
			}
		},
		components: {
			tkiQrcode
		},
		onLoad() {
			this.creatQrcode();
		},
		onReady(){
				this.creatQrcode();
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f06c7a;
}
.block{
	width: 100%;
	height: 30vh;
	background-color: #fff;
	display: flex;
	justify-content: center;
	
}
.QR{
	width: 60vw;
	height: 60vw;
	margin: -40vw auto 0 auto;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	image{
		width: 50vw;
		height: 50vw;
	}
}
.title{
	width: 100%;
	margin-top: 50upx;
	display: flex;
	justify-content: center;
	font-size: 36upx;
	color: #fff;
}
.btn{
	
	width: 50%;
	height: 80upx;
	border-radius: 80upx;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 20upx;
	margin: 0 auto;
	margin-top: 50upx;
	background-color: rgba(255,255,255,.8);
}
.logo{
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	bottom: 25upx;
	image{
		width: 39.6%;
	}
	
}
</style>
