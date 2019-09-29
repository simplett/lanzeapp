<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" @tap="Hphoto">
					<view class="title">头像</view>
					<view class="right"><view class="tis">
					<image :src="face" mode="widthFix"></image>
					</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @tap="rename">
					<view class="title">昵称</view>
					<view class="right"><view class="tis">{{nickname}}</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">个性签名</view>
					<view class="right"><view class="tis">这人太懒了，什么都不写</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">收货地址</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">账户安全</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
			</view>
			<view class="list">
				<view class="row">
					<view class="title">通知提醒</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">支付设置</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">通用</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
			</view>
			<view class="list">
				<view class="row">
					<view class="title">版本升级</view>
					<view class="right"><view class="tis">v1.0.0</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">清除缓存</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">问题反馈</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">关于商城</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="sign">
					<view class="title">退出登录</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				face:"../../../static/img/face.jpg",
				nickname:"大黑哥"
			};
		},
		methods: {
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			Hphoto(){
				uni.navigateTo({
					url:'/pages/user/setting/revise/Hphoto'
				})
			},
			rename(){
				uni.navigateTo({
					url:'/pages/user/setting/revise/rename'
				})
			},
			onShow(){
				uni.getStorage({
					key:"face",
					success:res=>{
						// console.log(res.data[0]);
						this.face=res.data[0];
						// return res.data[0];
						console.log(this.face.substring(2))
					}
				})
				// console.log('gggggggggggggggggs',this.user.face,"hhhhhhhhhhhhhhhhhhhhhhhh")
				// this.user.face=(this.face).substring(2);
				// console.log(this.face.substring(2)+"3wwwwwwwwwwwwwwwwwwwwwwwww");
				uni.getStorage({
					key:'rename',
					success: res => {
						this.nickname=res.data;		
						console.log("成功获取rename"+this.nickname);
					}
				});
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f3f3f3;	
}
.icon {
	font-size: 30upx;

}
.content{
	padding-bottom: 20upx;
	.list{
		width: 96%;
		padding-left: 4%;
		background-color: #fff;
		margin-bottom: 20upx;
		.row{
			width: 100%;
			min-height: 90upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: solid 1upx #eee;
			&:last-child{
				border-bottom: none;
			}
			.title{
				font-size: 32upx;
				color: #333;
			}
			.right{
				display: flex;
				align-items: center;
				color: #999;
				.tis{
					font-size: 26upx;
					margin-right: 5upx;
					max-height: 120upx;
					image{
						width: 100upx;
						height: 100upx;
						border-radius: 100%;
						margin: 10upx 0;
					}
				}
				.icon{
					width: 40upx;
					color: #cecece;
				}
			}
			
		}
		.sign{
			width: 100%;
			min-height: 90upx;
			// display: flex;
			// align-items: center;
			// justify-content: space-between;
			border-bottom: solid 1upx #eee;
			text-align: center;
			color:#FF0000;
			paadding-top:30upx;
		}
	}
}

</style>
