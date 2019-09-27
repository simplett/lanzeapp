<template>
	<view class="uni-form-item uni-column">
		<!-- <view class="title">键盘右下角按钮显示为搜索</view> -->
		<input class="uni-input" confirm-type="search" placeholder="请输入你的昵称" />
		<button type="warn">提交修改</button>
	</view>
</template>

<script>
	export default {
	    data() {
	        return {
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
			onReady(){
				uni.setStorage({
					key: 'rename',
					data: res.tempFilePaths,
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
	uni-button[type=warn] {
	    color: #fff;
	    background-color: #15941d;
	}
</style>
