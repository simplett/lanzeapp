<template>
	<view class="content">
		<!-- 显示当前未修改头像 -->
		<view class="w-img">
			<image src="/static/img/face.jpg" mode=""></image>
		</view>
		<!-- 从相册选取或自己拍摄照片 -->
		<view class="choose-img" @tap="chooseImgFromAlbums">修改头像</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {};
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
				             // longPressActions: {
				             //     itemList: ['发送给朋友', '保存图片', '收藏'],
				     //             success: function() {
									// console.log(tempFilePaths,);
				     //             },
				                 fail: function(err) {
				                     console.log(err.errMsg);
				                 }
				             // }
				         });
						 console.log(res.tempFilePaths);
						 uni.setStorage({
						     key: 'faces',
						     data: res.tempFilePaths,
						     success: function () {
						         console.log('success');
						     }
						 });

				     }
				     });
			}
		  
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
	}
</style>
