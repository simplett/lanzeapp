<template>
	<view class="row">
		<view class="title">是否使用指纹支付</view>
		<!-- <view class="uni-form-item uni-column"> -->
			<!-- <view class="title">switch</view> -->
			<view>
				<switch name="switch" />
			</view>
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.row{
		width: 100%;
		min-height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: solid 1upx #eee;
		// &:last-child{
		// 	border-bottom: none;
		// }
		.title{
			font-size: 32upx;
			color: #333;
			padding-left:20upx;
		}
		.uni-view{
			float:right;
		}
	}
</style>
