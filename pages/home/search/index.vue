<template>
	<view>
		<!-- 用户搜索后跳转到的页面 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				s: null
			}
		},
		onLoad(option) {
			console.log(option)
			this.s = option.search
		},
		methods: {
			getSearchContext () {
				let opt = {
					url: '/index/search',
					method: 'get'
				}
				let params = {
					search: this.s
				}
				this.$http.httpRequest(opt, params).then((res) => {
					console.log(res)
				})
			}
		}
	}
</script>

<style>

</style>
