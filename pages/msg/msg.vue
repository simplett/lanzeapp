<template>
	<view>
		<view class="chat-list">
			<view class="chat" v-for="(chat,index) in chatList" :key="index">
				<view class="row" @tap="toChat(chat)">
					<view class="left">
						<image :src="chat.face"></image>
					</view>
					<view class="right">
						<view class="top">
							<view class="username">{{chat.username}}</view>
							<view class="time">{{chat.time}}</view>
						</view>
						<view class="bottom">
							<view class="msg">{{chat.msg}}</view>
							<view class="tis" v-if="chat.tisNum>0">{{chat.tisNum}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				SUMMSG: {},
				chatList: [{
						uid: 1,
						username: "鲜果蔬专营店",
						face: "/static/img/im/face/face_1.jpg",
						time: "13:08",
						msg: "亲，20点前下单都是当天送达的",
						tisNum: 1
					},
					{
						uid: 2,
						username: "官店大欺客旗舰店",
						face: "/static/img/im/face/face_2.jpg",
						time: "13:05",
						msg: "问那么多干什么？不想买就滚~",
						tisNum: 0
					},
					{
						uid: 3,
						username: "妙不可言",
						face: "/static/img/im/face/face_3.jpg",
						time: "12:15",
						msg: "推荐一个商品呗？",
						tisNum: 0
					},
					{
						uid: 4,
						username: "茶叶专卖",
						face: "/static/img/im/face/face_4.jpg",
						time: "12:11",
						msg: "现在卖的都是未过青的茶哦",
						tisNum: 0
					},
					{
						uid: 5,
						username: "likeKiss客服",
						face: "/static/img/im/face/face_5.jpg",
						time: "12:10",
						msg: "你好，发福建快递多久送到的？",
						tisNum: 0
					},
					{
						uid: 6,
						username: "白开水",
						face: "/static/img/im/face/face_6.jpg",
						time: "12:10",
						msg: "在吗？",
						tisNum: 0
					},
					{
						uid: 7,
						username: "衣帽间的叹息",
						face: "/static/img/im/face/face_7.jpg",
						time: "11:56",
						msg: "新品上市，欢迎选购",
						tisNum: 0
					},
					{
						uid: 8,
						username: "景萧疏",
						face: "/static/img/im/face/face_8.jpg",
						time: "11:56",
						msg: "商品七天无理由退换的",
						tisNum: 0
					},
					{
						uid: 9,
						username: "文宁先生",
						face: "/static/img/im/face/face_9.jpg",
						time: "12:15",
						msg: "星期天再发货的",
						tisNum: 0
					},
					{
						uid: 10,
						username: "高端Chieh",
						face: "/static/img/im/face/face_10.jpg",
						time: "12:36",
						msg: "建议你直接先测量好尺码在选购的。",
						tisNum: 0
					},
					{
						uid: 11,
						username: "mode旗舰店",
						face: "/static/img/im/face/face_11.jpg",
						time: "12:40",
						msg: "新品5折，还有大量优惠券。",
						tisNum: 0
					},
					{
						uid: 12,
						username: "敏萘客服",
						face: "/static/img/im/face/face_12.jpg",
						time: "12:36",
						msg: "还没有用，等我明天早上试一下",
						tisNum: 0
					},
					{
						uid: 13,
						username: "春天里的花",
						face: "/static/img/im/face/face_13.jpg",
						time: "12:36",
						msg: "适用于成年人的，小孩不适用的",
						tisNum: 0
					},
					{
						uid: 14,
						username: "电脑外设专业户",
						face: "/static/img/im/face/face_13.jpg",
						time: "12:36",
						msg: "把上面的螺丝拆下来，把铁片撬开就能看见了",
						tisNum: 0
					},
					{
						uid: 15,
						username: "至善汽车用品",
						face: "/static/img/im/face/face_15.jpg",
						time: "12:36",
						msg: "这个产品是原车配件，完美装上的",
						tisNum: 10
					}

				]
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onLoad() {
			this.changedata();
			this.getmymsg();
		},
		methods: {
			endgetlist(data){
				var c=[];
				console.log(data);
				var i=0;
				for(var item in data)
				{
						c[i]={};
						c[i]["uid"]=data[item][2];
						c[i]["time"]=data[item][0][data[item][0].length-1];
						c[i]["msg"]=data[item][1][data[item][0].length-1]["msg"];
						c[i]["tisNum"]=1;
						c[i]["pace"]="https://simplett-img.oss-cn-beijing.aliyuncs.com/user_image/userimage.jpg";
						c[i]["username"]="simplett";
						i++;
				};
				this.chatList=c;
				console.log(c,"提取出聊天的列表")
				for(let item in c)
				{
					var uid=c[item].uid;
					uni.request({
					    url: 'http://120.79.19.253:10086/Search', //仅为示例，并非真实接口地址。
					    data: {
					        uid,
							type:"user"
					    },
					    success: (res) => {
					        console.log(res.data);
							c[item]["username"]=res.data.nickname;
							c[item]["face"]=res.data.image;
					    }
					});
				};
				this.chatList={};
				this.chatList=c;
				console.log(this.chatList,"??????");
			},
			changedata() {
				uni.getStorage({
					key: "summsg",
					success: res => {
						this.SUMMSG = res.data;
						console.log(res.data);
						if(res.data)
						{
							this.endgetlist(res.data);
						}
						
					},
					fail:res=>{
						console.log("失败")
					}
				})
			},
			getmymsg() {
				setInterval(() => {
					console.log("请求聊天的数据");
					var token = "";
					uni.getStorage({
						key: "token",
						success: res => {
							token = res.data;
						}
					});
					if (token) {
						uni.request({
							url: "http://120.79.19.253:10086/Chat",
							data: {
								token,
								type: "get"
							},
							success: (res) => {
								console.log(res.data);
								var msg = res.data.data;
								var summessage = {};
								if (msg) {
									console.log("收到的聊天消息", msg);
									summessage = msg.reduce(
										(prev, elem) => {
											console.log(JSON.parse(elem.message));
											var mymsg = JSON.parse(elem.message);
											if (prev[mymsg.suid] === undefined) {
												prev[mymsg.suid] = [
													[]
												];
												prev[mymsg.suid][0] = [];
												prev[mymsg.suid][1] = [];
												prev[mymsg.suid][2] = '';
												prev[mymsg.suid][0].unshift(mymsg.time);
												prev[mymsg.suid][1].unshift({
													"user": "you",
													"msg": mymsg.message
												})
												prev[mymsg.suid][2] = mymsg.suid;
												// this.totime = prev[mymsg.suid][0][(prev[mymsg.suid][0]).length - 1].substr(11, 8);
												// this.tomsg = prev[mymsg.suid][1][(prev[mymsg.suid][1]).length - 1][msg];
											} else {
												prev[mymsg.suid][0].unshift(mymsg.time);
												prev[mymsg.suid][1].unshift({
													"user": "you",
													"msg": mymsg.message
												})
												// this.totime = prev[mymsg.suid][0][(prev[mymsg.suid][0]).length - 1].substr(11, 8);
												// this.tomsg = prev[mymsg.suid][1][(prev[mymsg.suid][1]).length - 1].msg;
												// console.log(this.tomsg);
											}
											return prev;
										}, {}
									);
									var summsg = {};
									uni.getStorage({
										key: "summsg",
										success: res => {
											summsg = res.data;
										}
									})
									for (var item in summessage) {
										if (summsg[item] == undefined) {
											summsg[item] = [
												[]
											];
											console.log("@@@@@@@@@@@@@@@@@@@@@@@@@", summessage[item][0], summessage[item][1], summessage[item][2], item);
											summsg[item][0] = [];
											console.log("&&&&&&&&&&&&&&&&&&&&&", summessage[item][0]);
											summsg[item][1] = [];
											summsg[item][2] = '';
											summsg[item][0] = [...summessage[item][0]]
											summsg[item][1] = [...summessage[item][1]]
											summsg[item][2] = summessage[item][2];
										} else {
											summsg[item][0] = [...summsg[item][0], ...summessage[item][0]]
											summsg[item][1] = [...summsg[item][1], ...summessage[item][1]]
											summsg[item][2] = summessage[item][2];
										}
									};
									console.log(summsg,"111111111111111111111111111111111111111111111111111111111111111111")
									var endmsg=[];
									for(var i in summsg)
									{
										endmsg.push({uid:summsg[i][2],time:summsg[i][0],msg:summsg[i][1]});
										console.log(i);
									}
									console.log(endmsg,"显示在聊天列表里面的数据")
									uni.setStorage({
										key: "summsg",
										data: summsg,
										success: res => {
											console.log("数据插入成功")
										}
									})
									console.log(summsg, "###################这是state.summsg############################");
									console.log("聊天函数被触发");
									this.changedata();
								}
							}
						})
					}
				},1000)

			},
			toChat(chat) {
				uni.navigateTo({
					url: "chat/chat?uid=" + chat.uid+"&name="+chat.username+"&youface="+chat.face
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: rgba(0, 0, 0, 0);
	}

	.chat-list {
		width: 94%;
		padding: 0 3%;

		.chat {
			width: 100%;
			height: 100upx;
			padding: 20upx 0;
			border-bottom: solid 1upx #eaeaea;

			.row {
				display: flex;
				justify-content: flex-start;

				.left {
					flex-shrink: 0;
					width: 100upx;
					height: 100upx;

					image {
						width: 100upx;
						height: 100upx;
						border-radius: 20upx;
					}
				}

				.right {
					flex-shrink: 1;
					width: 98%;
					padding-left: 2%;

					.top {
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;

						.usernam {
							font-size: 26upx;
						}

						.time {
							font-size: 22upx;
							color: #bebebe;
						}
					}

					.bottom {
						width: 100%;
						height: 40upx;
						display: flex;
						justify-content: space-between;
						align-items: center;

						.msg {
							font-size: 25upx;
							color: #777;
						}

						.tis {
							width: 35upx;
							height: 35upx;
							font-size: 22upx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: #eb4d3d;
							color: #fff;
							border-radius: 100%;
						}
					}
				}
			}
		}
	}
</style>
