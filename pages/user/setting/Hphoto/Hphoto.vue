<template>
	<view class="content">
		<!-- 显示当前未修改头像 -->
		<!-- <view class="w-img">
			<image src="/static/img/face.jpg" mode=""></image>
		</view> -->
		<!-- 从相册选取或自己拍摄照片 -->
		<view class="c-img" @tap="chooseImgFromAlbums">
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {};
		},
		methods:{
			    chooseImgFromAlbums() {  
				plus.gallery.pick(function(file) {  
				changeToLocalUrl(file);  
				}, function(err) {  
				console.log(JSON.stringify(err));  
				}, {  
				filter: 'image',  
				multiple: false  
				});  
			}
		}
	}
</script>

<style lang="scss">
	.content{
		width: 100%;
		.c-img{
			width:100upx;
			height:100upx;
			background: #000000;
		}
	}
</style>
