<template>
	<view>
		<view class="logo">
			<view class="img">
				<image mode="widthFix" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABhQTFRF//////NxTz08/HlRmtzPfHJq5evssrCmR4PFPwAADilJREFUeNrsnY124yoMhIkbSe//xtuk7caxwWgAJ0Dma/eec8+GxWg8QuCfhEAIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhMyHfmNqr/xVTR6Lo22y9RRqmMjyBiwaVPM1FjGdVY3lXUjkeJCjmVGTN8oRVcTAf8Ams8db5fiOp9Yf0EwmseXdbE9wbfBvUI8KtIVlZRI95P167FJW2UEJ/XFSxio9KqEep5W91kjZ4eqryErr1Vii8nMwX621GZLddyNeS/pkCfnGtllAyVQGGXLBu9lisHkMIjrFKKYxiAycfm0Wi8gs06HMYRGbMvfadOeVDvMTPbfGtYhGDKKXwTgYywwGuYzHPBaJnFQ6oCC6P73GrE/UEIOILGKO8Hyv0kRcgbyt53yfvNw+adNbBDHI72DFE7obviDfe3Z/8iujiI5ewiMG+S+cL3YORfyftGznc1gEMcgjPWeC94jIpdknJftJncIitt80yUdvccYOEGRp8MkZLKKRpW02aeRylrkFsRJBAIuMtzFne387Tvz3OkRyFhl4/wQxiCsk5YK4C4Uj7YafRRCDuDPWKnbWTpCPsAhkEHfGWn3yy107IWbKTutri0xrEH/GAiYGRBCXQwe3iOyvozfIWEge8hdkUM6yMQstRQwiTZcMBXWvz01DWwTad1/OWFwUprfFprSInWSQy0mC+M6JgS0CGQQQBJkXkPkGWYqMuH+CXZhaCrYBPYIgH3blrHEtcpZBMIdImZ1kPotEDHJpI8hpDnEexX7Rq4NN6Y5bG5aizOK4DgjZyZCcNZhFYvfLtDEIsnMCllm+82LMC1XIhanixGKtBUFy1lgWwUosW8qm3sulbd3r3b8Z0CKlBlkubxXEOZftB9n7Iy/QvjuYsUBBsATnOzXGm0WgXRMwY1mpIHJpbZFhFofFBsGSkLxNkNEsghkEWoSAKwv4486TYzCLYAaxpTDN+27ZxeyH5axBLAIaBMxY1oMgY1kEMwiYscCyCa17wZylIywOnwyiWT2sOGI+h5QLOItFwCemwIwFB7h8zvEIMsC1XHAGQTMWOifAgngdO4xFQIOgGQudE2BBKiwy/r0/BRkLdoiVd3Cs4CAWEWhbEc9YsCA1Ctr4FkGfuZXycMnldAU9Fun8Wi76ULqcnoHgScd9TCNYBH4oHc5YX7BDsEu+SJ0xgEUMnEFgg+BFU0GL8mldRjdIn4J4j6r/XXgDZxA8Y8EL9ZIyAMxZT9dyR74wVTJDF5zvBZ14z5PeLYLumqxm6AJBDA9vc9U7XxyiBkEvxz7H6gIL4u7EvJ1o17vw6K7JBXkXyS687ug+wuvvxH1c+9ygXWYsp0H+h9cfKv8rg3bhtQss+wUXxLoUxGmQe3wFCu7l56VaWJPbt16d1MkuW3d0WUSwReEc7E7GLgWxj9HjT5EeJxFdPlgQlQ4nkc8URDdnYz/f5KYUpLO6t0QQvdxeHY3liMIm0MtpgePqNmUVOGR1MoFVTQDe/lvTSfDOIVM45FlPMFLe+NY2UTRlDeuQ3ZmEBtclYn0naMoa1iH7fwANlTuh1DVRLGWN6pAAx0rxJqFJk4+osh46rr5BzReqp+9c80l4ZieTVFlPFxldXyvyF5/716X93zHyRPfnCwEsIE1kvcb7gCprc9HXP/L/u0bqju5fJ4J34jiuSaqs7X6kwaeiY0d5uxN7SieTVFnbJuKNldV3Ek7oZBKH6DZWClwJKoiVZmcqXBCdaQ7ZXdbJO6RGEHeWE/hE6XL7/dxYhUSsCgqgbCVnDTrpIGUBsdJVOeqMVSg9eQ127n4kAeiky2vquWEkb+QCzsSCWDk7CQvs3C6vqQPne7EgyO31yU6CX3V8JB3dKWf+59P3A8+d7/s+shruMmlWQ012Evxzej8O8aeTSHRzp+I+urlYHXSibk/hI+noRrnIo0R6uIG3HngmvLHoZsIb7UQdnWisk+DtJHQkiPde0mh05WjvL0SbeDp58lQmvIedqE/Crp6hMt/IowY5DG+InruPsxHvJKR3k7edYCPp6nEEjT1tp6lrFLYkRh6SodpE9yC8KQnTnaQkXJ3zHt/29UxbrDzZKBJV73jkISnh6nzEO9EzOunsqU9d4udK7ProLlRPdtfYfT/7FhLrRKs6iTTRSJPESHp7LlqW1OuK9JL+ZGI4lwO1fZ1YrImFgyaeTlTTYw69kR6HI1SHU6LGWxx0ogWdCNpJdJ3T6SySPr7EuI+CZakW6WAZ3ImmWqQjLUvXBtmG2kA9UvHdnOzndBJqO+nynXKbkyxyc/4mUrL9/8hmkG2Co9n4btPV9v/zneyPK9tJn6+U2yaKzUBU9ks1WY4kUZNd/LOdLNlO5LiT7ySlS+a4lhH0iKXu75Ho7XkAtXiRr5EWdr9T7buFRPNNopOfJkts8RFZkki6k/txWfy47jfR2cEKpzcSlcrB/JqeTCP/jh1VUAdTxtGkkjguvJORFImOIlcQpUskgUOleCc2hR7+YFlqRl3y9afbI49QacFxTaGHdxzmrFIT4z6tE0vXXhmnd6yIoCeVJ1iCd2LwmVJwXCN812d2HPuVQC6+kZWAwJlE8U5s8HTlGnp0EMfTQvTugeNOLNpJ2+OSgb5QPRmt9bD1qp6h21MTXyerJs+dCNyJJeXQMBKxsW/GcL1e9TlxRVZwz0vk7yZ1nagK3CSuooTReLr3Sm4r3bAN7kaR+8pZfhaSt3ck2SYnXKNNZNXkZzm97eS670SWRyf54wqPJiMLsr6FbGfv6x/bv7lvg5juW2iqxX1r5reJ+proqglwXKY2h0PSwY3GN0Tn16Mm8QNYtyhocrzMGtohmjoN3fHVTYt8E9XaTmJNZnTIdtiOaEWaZCTRgiae47KhloQOh8QClYlWugkU29JOdEqH6GGcDsKlx20KWtQ1mWoOyejxO/j1Oxiu11OaFHUyoUN8Q++VD3VIt0zmkAkFMTqEKYtzyFwpi3MI5xCmLDqEcwirLDpkviqLKWsYh1jBTxxr+POpc4ggd0Gvb0rYq7E0JdLDJzhEigNmzf4lbw+fsA6pOatP9UekhxmqrLC9O24rSFVOOdkge4uM75DH7bcSBhREpktZj5ylFKQPfu/B1NMFWc4XZIaUFW4PSK7um6VDetNnKkFsZkEk+bP9zaYsqfyZOmW5BVEnknWIBa0hCFNW6gUvsXBZVpDah2iMggCCqGVTVm1mF6asFoK0cwhTVuOUZS9LWfZpggRgUmfKGnVS19yjs8OnLM39vngOsWw+EmuTsnp8qd/92dQcnq2TdlWWOoKtk6Ys7xt2/p+S9XNIlUMMe9PocA4B3gqmXcwhrgJJxq2ygMum0iplVVVZUiVI/ykL2GHNXsJ9yToEy2vDpSzoPYa/o3nBHKJnOaR/QaAbBgoEab6XNXnK6kqQdg4ZN2VZgSDa/xwybpUFCSKN5hCpWRjWOeQ6kEO+JP4jmbr3HIfcXj8d+w3PlxWjvyNfMVwd+VeKTN17zl6W4/pv+kOfIshysiALKAh+1b7/lLXKWG5Bwgv2svRDHaKYIIYLUjyHOE7+gDuk9yrrLYJ49rLOckjvKcs8gsjxQuRtDimZQ3QuQQQXhHNI8yJrXfc6BXl+tdhZVVbJHHKdS5DFJYjdbq79u+SrdEiZIF9fX4ULke3f2vMqsvM5xMYrsnJl1kYQ21YArLLeK8hmD725Q8xzs/2oKcveIkjVHPK4xmkTPo7gFOS47n0WRDerluZV1t/pbyVPoPSessxVZGXq3qQgeso65P71lmZzPrDjq3rXDtEGDqmbQ36/c7TsGa3eqyxf1Zupe/E5pKrKqnukre+UpYKmrNgG/Osdog0d0pcgC+wQAwQ5bQ6Z9qFPO1eQs6qsGodc5xDksO49ZR0Sfu9yKPvP+A6RdoJsHhcom0OkljGrLLdDDm882QjyWElX7GV96MtnvFUvJMifIlZzxfAzXz7jrnqP6979Ez33lXTVfVkfKsiCOyRSZsUu4WrlfVmfmbJOFKT2mjod8uUts1BB3j2H2EBVlpUIsq97292XdYYgI71I2b0MOd6Ab+eQExSRkV6k7C+yDjfg280h7RWx66SCHG3At7v7/ec98u2wwb6uwj+FHC5E2grywV9XoWWCWLUgoSdBbFBBpFSQAG2Of/Q37FiVQ3QSh4wqyMFChHPIG4qso4XIUIJc5xNkwQQJdAi++f6FpKzdQoRVVvMpBGO7EGm3l/XZKctKtymsVhBWWW0dggnCOQSf09EN1M2sziqLgtAhTQVhlXXKHKLlcwirrMzeYlHZG1hlnbcyLDDII9RVc4i+mr5vlIMlkf37vesEef/tBKEnXM/hPz3XdGi0gnUIBUmH0+LfVKG5SbtqDnm7IN29+z37ks+cA0LVXhYdgguyCrjiDgmdO0Smc0jm73X/wzmkmUN2G8byVKjJ7cmn5z+LbL4U9f67Ltuk9o/Ev5DKjlotUzrkjFtxl7q1Eb7ImmgO6UePyLcfSbmWozpEl46w4o26eeYQ60mQrUWmECT1jQQjCLIUX1uw4QR5pCzp2CHFKas7QTQ9MW4HZy02i19UZpWXA71Y5ODIpDZPv9wg/ntqevyy6PuxS/bLTq140G9YhjgN3KE/7sdupo5PaGSbynpAE5cW8g371KNGyg5+Kw6QEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIVH+CTAA2PXaRL7YfsgAAAAASUVORK5CYII="></image>
			</view>
		</view>
		<view class="form re">
			<view class="password">
				<input placeholder="请输入用户名" v-model="username"  placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请输入电话号码" v-model="phone"  placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="username">
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
				<input placeholder="请输入邮箱" v-model="email" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="code">
				<input placeholder="请输入验证码" v-model="check" placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="password">
				<input placeholder="请输入密码" v-model="passwd" password=true placeholder-style="color: rgba(255,255,255,0.8);" />
			</view>
			<view class="btn" @tap="doReg">立即注册</view>
			<view class="res">
				<view @tap="toLogin">已有账号立即登录</view>
			</view>
		</view>

	</view>
</template>

<script>
	// 引入了MD5加密算法，对发送的数据进行加密
	import md5 from "@/common/SDK/md5.min.js"
	export default {
		data() {
			return {
				// 对初始化数据，如果是字符串类型的，对于页面内不展示的数据直接使用null，不要对其赋值，即使 ”“ 和 ’‘ 这样也不好，会占用内存 字符串类型，使用 ’字符串‘ 来进行定义
				email: '',
				check: '',
				passwd: '',
				phone: '',
				username: '',
				Status: '',
				getCodeText: '获取验证码', //验证码发送按钮的文字
				getCodeBtnColor: '#ffffff', // 验证码发送按钮的颜色
				getCodeisWaiting: false // 控制验证码发送按钮是否可用
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
						url: '/login/check',
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
								});
								this.setTimer();
							}, 1000)
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
			// 下次验证码发送的按钮的倒计时
			setTimer() {
				let holdTime = 60
				this.getCodeText = '重新获取(60)'
				this.Timer = setInterval(() => {
					if (holdTime <= 0) {
						this.getCodeisWaiting = false
						this.getCodeBtnColor = '#ffffff'
						this.getCodeText = '获取验证码'
						// 清除定时器
						clearInterval(this.Timer)
						return
					}
					this.getCodeText = `重新获取${holdTime}`
					holdTime --

				}, 1000)
			},
			// 注册新的用户
			doReg() {
				// 隐藏已经显示的软键盘，如果软键盘没有显示则不做任何操作
				uni.hideKeyboard()
				// 对用户名进行格式的校验
				if (!(/^(\w){6,12}$/.test(this.username))) {
					uni.showToast({
						title: '用户名不正确',
						icon: "none"
					})
					return false
				}
				// 对电话号码进行格式的校验
				if (!(/^1[3456789]\d{9}$/.test(this.phone))) {
					uni.showToast({
						title: '电话号码格式不正确',
						icon: "none"
					})
					return false
				}
				// 在对邮箱进行正则验证
				if (!(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(this.email))) {
					uni.showToast({
						title: '邮箱格式不正确',
						icon: "none"
					})
					return false
				}
				// 对验证码格式进行验证
				if (!(/^\w{6}$/.test(this.check))) {
					uni.showToast({
						title: '验证码格式不正确',
						icon: "none"
					})
					return false
				}
				// 对密码是进行格式的校验
				if (!(/^(\w){10,20}$/.test(this.passwd))) {
					uni.showToast({
						title: '密码格式不正确',
						icon: "none"
					})
					return false
				}
				uni.showLoading({
					title: '提交中...'
				})
				let opts = {
					url: '/login/reg'
				}
				let param = {
					username: this.username,
					password: md5(this.passwd),
					email: this.email,
					phone: this.phone,
					check: this.check
				}
				// 发起网络请求
				this.$http.httpRequest(opts, param).then(res => {
					let status = res.data.status
					if(status ===1) {
						let token=res.data.token;
						uni.setStorage({
							key: 'token',
							data: token,
							success: function() {
								uni.showToast({
									title: '注册成功',
									position: 'center',
									image: '../../static/img/mysuccess.png'
								})
							},
							fail: function() {
								uni.showToast({
									title: '用户数据写入失败，建议重启本应用',
									position: "center",
						    		image: "../../static/img/myfail.png"
								})
							}
						})
					} else if (status === 3) {
						uni.showToast({
							title: '验证码过期',
							position: 'center',
							image: '../../static/img/myfail.png'
						})
					} else {
						uni.showToast({
							title: '用户信息不完整',
							position: 'center',
							image: '../../static/img/myfail.png'
						})
					}
				})
			},

			toLogin() {
				// 隐藏键盘,如果没有打开键盘,那就什么都不做
				uni.hideKeyboard()
				uni.redirectTo({
					url: 'login'
				});
				uni.navigateBack();
			}
		}
	}
</script>

<style lang="scss">
	@import "../../static/css/login.scss";
</style>
