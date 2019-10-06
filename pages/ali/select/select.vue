<template>
	<view>

		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="title"></view>
		</view>
		<view v-if="showHeader" class="place"></view>
		<!-- <view class="header">
			<button class="mybuttom" type="warn" size="mini">发布</button>
		</view> -->
		<!-- 占位 -->
		<!-- <view v-if="showHeader" class="place"></view> -->
		<view class="lanzepadding">
			<view class="">
				<text>添加标题</text>
				<textarea class="mypname" v-model="mypname" maxlength="20" placeholder="输入宝贝的标题" />
				</view>
				<hr>
			<view class="uni-title uni-common-pl">选择你的商品分类</view>
			<view class="uni-list myheight">
				<view class="uni-list-cell">
					<view class="uni-list-cell-left">
						当前选择:
					</view>
					<view class="uni-list-cell-db">
						<picker mode="selector" @change="bindPickerChange" :value="index" :range="selectList" range-key="value">
							<view class="uni-input">{{selectList[index].value}}</view>
						</picker>
					</view>
				</view>
			</view>
			<hr>
			<view class="">
				<view class="uni-title uni-common-mt uni-common-pl">选择商品的新旧程度</view>
				<view class="uni-list">
					<radio-group @change="radioChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index === current" />
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
			</view>
			<hr>
			
				<button @tap="savemydata()" type="primary">确认</button>
		</view>
	</view>
</template>

<script>
	import wPicker from "../../../components/w-picker/w-picker.vue";
	export default {
		data() {
			return {
				codelistid:0,
				index:0,
				array:[],
				items: [
					{           value: '0',
				                    name: '全新 '
				                },
				                {
				                    value: '1',
				                    name: '99新',
				                    checked: 'true'
				                },
								{
								    value: '2',
								    name: '9成新'
							
								},
								{
								    value: '3',
								    name: '8成新'
								},
								{
								    value: '4',
								    name: '7成新'
								}],
								current: 0,
								mypname:"",
				selectList: [{
					label: "101",
					value: "炫酷电脑"
				}, {
					label: "102",
					value: "手机一族"
				}, {
					label: "103",
					value: "相机拍摄"
				}, {
					label: "104",
					value: "智能穿戴"
				}, {
					label: "105",
					value: "电脑周边"
				}, {
					label: "106",
					value: "网络设备"
				}],
				price: "",
				p_description: "",
				fontcount: "0",
				productlist: [
					[{
						label: "101",
						value: "炫酷电脑"
					}, {
						label: "102",
						value: "手机一族"
					}, {
						label: "103",
						value: "相机拍摄"
					}, {
						label: "104",
						value: "智能穿戴"
					}, {
						label: "105",
						value: "电脑周边"
					}, {
						label: "106",
						value: "网络设备"
					}],
					[{
						label: "201",
						value: "运动器材"
					}, {
						label: "202",
						value: "户外运动"
					}, {
						label: "203",
						value: "健身塑形"
					}, {
						label: "204",
						value: "球类包陪"
					}, {
						label: "205",
						value: "小众运动"
					}, {
						label: "206",
						value: "运动鞋"
					}],
					[{
						label: "301",
						value: "运动风格"
					}, {
						label: "302",
						value: "休闲风格"
					}, {
						label: "303",
						value: "商务风格"
					}, {
						label: "304",
						value: "百搭风格"
					}, {
						label: "305",
						value: "街头风格"
					}, {
						label: "306",
						value: "简约风格"
					}],
					[{
						label: "401",
						value: "新潮搭配"
					}, {
						label: "402",
						value: "服饰配饰"
					}, {
						label: "403",
						value: "首饰手表"
					}, {
						label: "404",
						value: "珠宝一类"
					}, {
						label: "405",
						value: "眼睛一族"
					}, {
						label: "406",
						value: "各种包包"
					}],
					[{
						label: "501",
						value: "厨卫电器"
					}, {
						label: "502",
						value: "小家电"
					}, {
						label: "503",
						value: "环境电器"
					}, {
						label: "504",
						value: "大家电"
					}, {
						label: "505",
						value: "温控电气"
					}, {
						label: "506",
						value: "其他电器"
					}],
					[{
						label: "601",
						value: "宠物玩具"
					}, {
						label: "602",
						value: "宠物零食"
					}, {
						label: "603",
						value: "喂食器"
					}, {
						label: "604",
						value: "宠物"
					}, {
						label: "605",
						value: "宠物药品"
					}, {
						label: "606",
						value: "宠物之家"
					}],
					[{
						label: "701",
						value: "文具教具"
					}, {
						label: "702",
						value: "餐饮用具"
					}, {
						label: "703",
						value: "厨房用品"
					}, {
						label: "704",
						value: "床上用品"
					}, {
						label: "705",
						value: "家居日用"
					}, {
						label: "706",
						value: "其他日用"
					}],
					[{
						label: "801",
						value: "国际名著"
					}, {
						label: "802",
						value: "工具用书"
					}, {
						label: "803",
						value: "课本教材"
					}, {
						label: "804",
						value: "科普类书"
					}, {
						label: "805",
						value: "小说大全"
					}, {
						label: "806",
						value: "本必读"
					}],
					[{
						label: "901",
						value: "化妆彩妆"
					}, {
						label: "902",
						value: "护理护肤"
					}, {
						label: "903",
						value: "口红卖场"
					}, {
						label: "904",
						value: "美容美颜"
					}, {
						label: "905",
						value: "香水一类"
					}, {
						label: "906",
						value: "滋生面膜"
					}],
					[{
						label: "1001",
						value: "计生用品"
					}, {
						label: "1002",
						value: "外用理疗"
					}, {
						label: "1003",
						value: "传统滋补"
					}, {
						label: "1004",
						value: "保健品"
					}, {
						label: "1005",
						value: "养生药品"
					}, {
						label: "1006",
						value: "养生食物"
					}],
				],
				myheightSvg: {
					height: ""
				},
				headerTop: null,
				statusTop: null,
				headerPosition: "fixed",
				showHeader: true,
			}
		},
		components: {
			wPicker
		},
		onLoad(options) { //option为object类型，会序列化上个页面传递的参数
			console.log(options.selectid, "55555555555555");
			var id=options.selectid-1;
			this.codelistid=options.selectid;
			console.log(id,"ididididididididididididdi");;
				this.getselect(id);
		},
		onShow() {
			// this.getWidth();
			console.log("Onshow");
		},
		// watch: {
		// 	p_description() {
		// 		var len = this.p_description.length;
		// 		this.fontcount = len;
		// 	}
		// },
		methods: {
			savemydata(){
				var codelist=this.codelistid*100+this.index;
				var pname=this.mypname;
				console.log(pname,codelist);
				if(codelist)
				{
					uni.setStorage({
						key:"codelist",
						data:codelist,
						success:res=>{
							console.log("存入数据codelist",codelist);
							if(pname)
							{
								uni.setStorage({
									key:"pname",
									data:pname,
									success:res=>{
										console.log("存入数据pname",pname);
										uni.navigateBack({
										    delta: 1
										});
										}
								})
							}
						}
					})
				}
			},
			
			radioChange: function(evt) {
			            for (let i = 0; i < this.items.length; i++) {
			                if (this.items[i].value === evt.target.value) {
			                    this.current = i;
			                    break;
			                }
			            }
			    },
			  bindPickerChange: function(e) {
			            console.log('picker发送选择改变，携带值为', e.target.value)
			            this.index = e.target.value
			        },
			getselect(id) {
				console.log(id,"111111111111111111111111111111111");
				var c = this.productlist[id];
				console.log(c,"22222222222222222222222222222222222222");
				this.selectList=c;
				// for(var item of c)
				// {
				// 	this.array.push(item.value);
				// }
				// console.log(this.array);
			},
			onPageScroll(e) {
				//兼容iOS端下拉时顶部漂移
				this.headerPosition = e.scrollTop >= 0 ? "fixed" : "absolute";
				this.headerTop = e.scrollTop >= 0 ? null : 0;
				this.statusTop = e.scrollTop >= 0 ? null : -this.statusHeight + 'px';
			}
		}
	}
</script>

<style lang="scss" scoped>
	.myheight{
		height: 60px;
	}
	.mypname{
		height: 60px;
		box-shadow: 0upx 0upx 0upx 0upx gray inset;
	}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}

	.lanzepadding {
		padding: 10upx 30upx;
	}

	.header {
		width: 50%;
		padding: 0 4upx;
		height: 80upx;
		/* display: flex; */
		/* justify-content:space-between; */
		/* align-items: center; */
		position: fixed;
		right: 0upx;
		/* float:right; */
		top: 0upx;
		z-index: 1000;
		box-sizing: border-box;
		/* background-color: #f06c7a; */
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}

	.mybuttom {
		position: absolute;
		right: 4%;
		margin: auto 0uox;
		top: 50%;
		margin-top: -30upx;
	}

	.place {

		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	textarea {
		width: 100%;
		padding: 10upx 20upx;
		border: 2upx solid gray;
		box-sizing: border-box;
		height: 300upx;
		box-shadow: -6upx -6upx 10upx 2upx gray inset;
	}

	.mytext {
		float: right;
		padding: 2upx 10upx;
	}

	.price {
		display: flex;
		justify-content: space-between;
		height: 60upx;
		width: 100%;
	}

	.lanzeimage {
		height: 100%;
		width: 60upx;
	}

	.warn-btn {
		width: 100%;

		button {
			display: table;
			margin: auto auto;
			width: 360upx;
		}
	}
/* 列表 */
.uni-list {
	background-color: #FFFFFF;
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
}
.uni-list:after {
	position: absolute;
	z-index: 10;
	right: 0;
	bottom: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list::before {
	position: absolute;
	z-index: 10;
	right: 0;
	top: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list-cell {
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.uni-list-cell-hover {
	background-color: #eee;
}
.uni-list-cell-pd {
	padding: 22upx 30upx;
}
.uni-list-cell-left {
	font-size:28upx;
	padding: 0 30upx;
}
.uni-list-cell-db,
.uni-list-cell-right {
	flex: 1;
}
.uni-list-cell::after {
	position: absolute;
  z-index: 3;
	right: 0;
	bottom: 0;
	left: 30upx;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list .uni-list-cell:last-child::after {
	height: 0upx;
}
.uni-list-cell-last.uni-list-cell::after {
	height: 0upx;
}
.uni-list-cell-divider {
	position: relative;
	display: flex;
	color: #999;
	background-color: #f7f7f7;
	padding:15upx 20upx;
}
.uni-list-cell-divider::before {
	position: absolute;
	right: 0;
	top: 0;
	left: 0;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list-cell-divider::after {
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0upx;
	height: 1px;
	content: '';
	-webkit-transform: scaleY(.5);
	transform: scaleY(.5);
	background-color: #c8c7cc;
}
.uni-list-cell-navigate {
	font-size:30upx;
	padding: 22upx 30upx;
	line-height: 48upx;
	position: relative;
	display: flex;
	box-sizing: border-box;
	width: 100%;
	flex: 1;
	justify-content: space-between;
	align-items: center;
}
.uni-list-cell-navigate {
	padding-right: 36upx;
}
.uni-navigate-badge {
	padding-right: 50upx;
}
.uni-list-cell-navigate.uni-navigate-right:after {
	font-family: uniicons;
	content: '\e583';
	position: absolute;
	right: 24upx;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-list-cell-navigate.uni-navigate-bottom:after {
	font-family: uniicons;
	content: '\e581';
	position: absolute;
	right: 24upx;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-list-cell-navigate.uni-navigate-bottom.uni-active::after {
	font-family: uniicons;
	content: '\e580';
	position: absolute;
	right: 24upx;
	top: 50%;
	color: #bbb;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
}
.uni-collapse.uni-list-cell {
	flex-direction: column;
}
.uni-list-cell-navigate.uni-active {
	background: #eee;
}
.uni-list.uni-collapse {
	box-sizing: border-box;
	height: 0;
	overflow: hidden;
}
.uni-collapse .uni-list-cell {
	padding-left: 20upx;
}
.uni-collapse .uni-list-cell::after {
	left: 52upx;
}
.uni-list.uni-active {
	height: auto;
}
</style>
