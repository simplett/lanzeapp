<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src=""></image>
			</view>
		</view>
		<view class="form re">
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}">重置密码</view>
				<input placeholder="请输入邮箱" v-model="email" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="code">
				<input placeholder="请输入密码" v-model="passwd1" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请确认密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doReset">重置密码</view>

		</view>

	</view>
</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	export default {
		data() {
			return {
				email: "",
				passwd1: "",
				phoneNumber: "",
				code: '',
				passwd: "",
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false
			}
		},
		onLoad() {

		},
		methods: {
			Timer() {},
			// getCode(){
			// 	if(this.getCodeisWaiting){
			// 		return ;
			// 	}
			// 	if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber))){ 
			// 		uni.showToast({title: '请填写正确手机号码',icon:"none"});
			// 		return false; 
			// 	} 
			// 	this.getCodeText = "发送中..."
			// 	this.getCodeisWaiting = true;
			// 	this.getCodeBtnColor = "rgba(255,255,255,0.5)"
			// 	//示例用定时器模拟请求效果
			// 	setTimeout(()=>{
			// 		uni.showToast({title: '验证码已发送',icon:"none"});
			// 		//示例默认1234，生产中请删除这一句。
			// 		this.code=1234;
			// 		this.setTimer();
			// 	},1000)


			// },
			setTimer() {
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#ffffff";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return;
					}
					this.getCodeText = "重新获取(" + holdTime + ")"
					holdTime--;

				}, 1000)
			},
			doReset() {
				uni.hideKeyboard()
				//模板示例部分验证规则
				if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))) {
					uni.showToast({
						title: '请填写正确的邮箱号',
						icon: "none"
					});
					return false;
				}
				//比对两次密码是否相同
				if (!((/^\d{6,10}$/).test(this.passwd))) {
					uni.showToast({
						title: '密码格式不正确',
						icon: "none"
					});
					return false;
				}
				if (!(this.passwd === this.passwd1)) {
					uni.showToast({
						title: '两次密码不一致',
						icon: "none"
					});
					return false;
				}
				uni.showLoading({
					title: '提交中...'
				});
				var token = "";
				uni.getStorage({
					key: 'token',
					success: function(res) {
						console.log(res.data);
						token = res.data;
					},
					fail: function() {
						uni.showToast({
							title: '登陆状态异常，请重新登陆',
							icon: "none"
						});
						return;
					}
				});
				console.log(token, "我是token");

				var data = {
					email: this.email,
					token,
					type: "pwd",
					pwd: md5(this.passwd1)
				}
				uni.request({
					url: 'http://120.79.19.253:10086/Mode', //仅为示例，并非真实接口地址。
					data,
					success: (res) => {
						uni.hideLoading();
						console.log(res.data);
						if (res.data.status == 1) {
							uni.showToast({
								title: "密码修改成功",
								position: "center",
								image: "../../static/img/mysuccess.png"
							})
						} else {
							uni.showToast({
								title: "密码修改失败",
								position: "center",
								image: "../../static/img/myfail.png"
							})
						}
						this.text = 'request success';
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";
</style>
