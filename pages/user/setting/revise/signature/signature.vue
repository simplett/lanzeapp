<template>
	<view>
		<input type="text" value="" placeholder="请输入你的个性签名" v-model="signature"/>
		<button type="primary" @tap="submit">确认</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				signature:"这个人很懒，什么都没留下"
			};
		},
		methods:{
			submit(){
					var data=this.signature;
					console.log(data,"6666666s")
					uni.showModal({
						content:"是否确认修改?",
						// mask:true,
						showCancel:true,
						success: function (res) {
							console.log(res);
							if (res.confirm) {
								console.log(this.signature,"ggggggggggggggggggggggg"),
								uni.setStorage({
									key: 'signature',
									data,
									success: function () {
										uni.navigateTo({
											url:"/pages/user/setting/setting"
											// animationDuration:1000
										})
									}
								});								
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
						
					})
			},
			onReady(){
				uni.setStorage({
					key: 'rename',
					// data: res.tempFilePaths,
					success: function () {
						console.log('success');
					}
				});	
			}
		},
	}
</script>

<style lang="scss">
input{
	height:50px;
	background: #e2e3e5;
}
</style>
