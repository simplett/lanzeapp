<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src=""></image>
			</view>
		</view>
		<view class="form re">
			<view class="username">
				<view class="get-code" @tap="getCode()" :style="{'color':getCodeBtnColor}">{{getCodeText}}</view>
				<input placeholder="请输入邮箱" v-model="email" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="code">
				<input placeholder="请输入验证码"  v-model="check" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="code">
				<input placeholder="请输入新的密码" password="true" v-model="passwd1" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请确认新密码"  v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doReset">修改密码</view>

		</view>

	</view>
</template>

<script>
	import md5 from "@/common/SDK/md5.min.js";
	export default {
		data() {
			return {
				email: '',
				passwd1: '',
				check: '',
				passwd: '',
				getCodeText: '获取验证码',
				getCodeBtnColor: "#ffffff",
				getCodeisWaiting: false
			}
		},
		onLoad() {

		},
		methods: {
			// 这是向服务器请求验证码的方法，会对邮箱验证码进行验证，正则验证邮箱的格式是否存在
			getCode() {
				uni.hideKeyboard() // 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作
				// 如果邮箱验证码获取的按钮属于禁止使用的状态，那么直接结束方法
				if (this.getCodeisWaiting) {
					return
				}
				// 对邮箱进行正则验证
				if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))) {
					uni.showToast({
						title: '请填写正确邮箱',
						icon: "none"
					})
					return false
				} else {
					// 改变字体的颜色并且提示用户验证码正在发送
					this.getCodeBtnColor = "rgba(255,255,255,0.5)"
					this.getCodeText = "发送中..."
					// 只有在邮箱验证通过的情况下才开始对数据进行处理，增加性能
					// 请求的options参数
					let opts = {
						url: '/login/reset/check',
						methods: 'get'
					}
					// 请求体里面的参数
					let param = {
						email: this.email
					}
					// 使用封装好的方法发起网络请求，这里不带token
					this.$http.httpRequest(opts, param).then(res => {
						console.log(res)
						// 根据返回的状态值进行相应的处理
						if (res.data.status == 1) {
							this.getCodeisWaiting = true;
							setTimeout(() => {
								uni.showToast({
									title: '验证码已发送',
									icon: "none"
								})
								this.setTimer();
							}, 1000)
						} else {
							uni.showToast({
								title: res.data.errmsg,
								icon: "none"
							})
						}
					}).catch(err => {
						uni.showToast({
							title: '验证码发送失败',
							icon: "none"
						});
						console.log(err)
					})
				}

			},
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
					return false
				}
				//比对两次密码是否相同
				if (!((/^\w{10,20}$/).test(this.passwd))) {
					uni.showToast({
						title: '密码格式不正确',
						icon: "none"
					});
					return false
				}
				if (!(this.passwd === this.passwd1)) {
					uni.showToast({
						title: '两次密码不一致',
						icon: "none"
					});
					return false
				}
				uni.showLoading({
					title: '提交中...'
				})
				let opts = {
					url: '/login/reset',
					methods: 'get'
				}
				let param = {
					email: this.email,
					check: this.check,
					newpassword: md5(this.passwd1)
				}
				this.$http.httpRequest(opts, param).then(res => {
					console.log(res)
					if (res.data.status === 1) {
						uni.showToast({
							title: res.data.succmsg,
							position: "center",
							image: "../../static/img/mysuccess.png"
						})
					} else {
						uni.showToast({
							title: res.data.errmsg,
							position: "center",
							image: "../../static/img/myfail.png"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";
</style>
