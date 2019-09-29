<template>
	<view class="content">
		<!-- 显示当前未修改头像 -->
		<view class="w-img">
			<image :src="showface" mode=""></image>
		</view>
		<!-- 从相册选取或自己拍摄照片 -->
		<view class="choose-img" @tap="chooseImgFromAlbums">修改头像</view>
		<!-- 显示选择的图片 -->
		<!-- <view class="showface">
			<image :src="showface" mode=""></image>
		</view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return {
				showface:""
			};
		},
		methods:{
			chooseImgFromAlbums(){
				 uni.chooseImage({
				     count: 1,
				     sizeType: ['original', 'compressed'],
				     sourceType: ['album'],
				     success: function(res) {
				         // 预览图片
				         uni.previewImage({
				             urls: res.tempFilePaths,
				     //         PressActions: {
				     //             itemList: ['发送给朋友', '保存图片', '收藏'],
				     //             success: function() {
									// console.log(tempFilePaths,);
				     //             },
				     //             fail: function(err) {
				     //                 console.log(err.errMsg);
				     //             }
				     //         }
				         });
						 console.log(res.tempFilePaths);
						 uni.setStorage({
						     key: 'face',
						     data: res.tempFilePaths,
						     success:res=>{
								this.showface = res.data[0];
						        console.log('success');
						     }
						 });
				     }
				});
			}
		  
		},
		onShow() {
			uni.getStorage({
				key:"face",
				success:res=>{
					// console.log(res.data[0]);
					this.showface = res.data[0];
					// return res.data[0];
					// console.log(this.face.substring(2))
				}
			})
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		height: 100%;
		.w-img{
			width:500upx;
			height:500upx;
			// background: #000000;
			border-radius: 50%;
			margin: 0 auto;
			margin-top: 50upx;
			image{
				width:100%;
				height:100%;
				border-radius: 50%;
			}
		}
		.choose-img{
			width: 160upx;
			height:100upx;
			color:#cc0707;
			font-size: 36upx;
			margin: 0 auto;
			margin-top:50upx;
		}
		.showface{
			width:500px;
			height:500px;
			image{
				width:100%;
				height:100%;
			}
		}
	}
</style>
