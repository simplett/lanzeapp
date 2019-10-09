<template>
	<view class="uni-form-item uni-column lanzepadding">
		<!-- <view class="title">键盘右下角按钮显示为搜索</view> -->
		<input class="uni-input" confirm-type="search" v-model="nickname" placeholder="请输入你的昵称" />
		<view class="button" @tap="submit">
			提交修改
		</view>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
				nickname:""
	            // title: 'input',
	            // focus: false,
	            // inputValue: '',
	            // changeValue: ''
	        }
	    },
	    methods: {
	        // onKeyInput: function(event) {
	        //     this.inputValue = event.target.value
	        // },
			submit(){
				var data=this.nickname;
				// console.log(data,"6666666s")
				uni.showModal({
					content:"是否确认修改?",
					// mask:true,
					showCancel:true,
					success:res=>{
						console.log(res);
						if (res.confirm) {
							console.log(this.nickname,"ggggggggggggggggggggggg"),
							uni.setStorage({
								key: 'rename',
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
		}
	}
</script>

<style scoped>
	.uni-input{
		width:100%;
		height:100upx;
		background: #e2e3e5;
		margin-top: 40upx;
	}
	.button {
	    color: #fff;
	    background-color: #15941d;
		width:100%;
		height: 100upx;
		padding:0;
		line-height: 100upx;
		text-align: center;
		border-radius: 15upx;
		font-size: 40upx;
	}
</style>
