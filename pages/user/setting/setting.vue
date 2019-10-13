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
				<view class="row" @tap="sign">
					<view class="title">个性签名</view>
					<view class="right"><view class="tis">{{signature}}</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @tap="address">
					<view class="title">收货地址</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title" @tap="repasswd">账户安全</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
			</view>
			<view class="list">
				<!-- <view class="row">
					<view class="title">通知提醒</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view> -->
				<view class="row" @tap="pay">
					<view class="title">支付设置</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<!-- <view class="row">
					<view class="title">通用</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view> -->
			</view>
			<view class="list">
				<view class="row">
					<view class="title">当前版本</view>
					<view class="right"><view class="tis">v1.0.0</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @tap="clearstorage">
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
				<view class="sign" @tap="removetoken">
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
				nickname:"大黑哥",
				signature:''
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
			sign(){
				uni.navigateTo({
					url:'/pages/user/setting/revise/signature/signature'
				})
			},
			address(){
				uni.navigateTo({
					url:'/pages/user/address/address'
				})
			},
			repasswd(){
				uni.navigateTo({
					url:'/pages/login/resetpasswd'
				})
			},
			pay(){
				uni.navigateTo({
					url:'/pages/user/setting/revise/pay/pay'
				})
			},
			clearstorage(){
				uni.getSavedFileInfo({
				  filePath: 'unifile://somefile', //仅做示例用，非真正的文件路径
				  success: function (res) {
				    console.log(res.size);
				    console.log(res.createTime);
				  }
				});
			},
			removetoken(){
				uni.getStorage({
					key:'token',
					success:res=>{
						var token = res.data;
						// return res.data;
						console.log(token,"aaaaaaaaaaaaaaaaaaaaaaaaa");
						uni.request({
						    url: 'http://120.79.19.253:10086/Loginout', //仅为示例，并非真实接口地址。
						    data:token,
						    success: function(res) {
						        console.log(res.data,"ppppppppppppppp");
								uni.clearStorage();
								uni.navigateTo({
									url:"../../login/login"
								})
						    }
						});
						// 中断请求任务
						// requestTask.abort();
					},
					fail:res=> {
						uni.showToast({
							title:"您还未登录",
							icon:"none"
						})
					}
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
				}),
				// console.log('gggggggggggggggggs',this.user.face,"hhhhhhhhhhhhhhhhhhhhhhhh")
				// this.user.face=(this.face).substring(2);
				// console.log(this.face.substring(2)+"3wwwwwwwwwwwwwwwwwwwwwwwww");
				uni.getStorage({
					key:'rename',
					success: res => {
						this.nickname=res.data;		
						console.log("成功获取rename"+this.nickname);
					},fail: res => {
						this.nickname="蓝泽官方邀请你修改昵称"
					}
				}),
				uni.getStorage({
					key:'signature',
					success: res => {
						this.signature=res.data;		
						console.log("成功获取signature"+this.signature);
					},fail: res => {
						this.signature="一路相伴，感谢有你"
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
						// border: 1px solid red;
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
