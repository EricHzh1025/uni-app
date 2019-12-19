<template>
	<view>
		<swiper indicator-dots="true" autoplay="true" interval="1500" @change="test">
			<swiper-item>
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" />
			</swiper-item>
			<swiper-item>
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" />
			</swiper-item>
			<swiper-item>
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" />
			</swiper-item>
		</swiper>

		<scroll-view scroll-x="true" style="white-space: nowrap">
			<view id="demo1" style="display:inline-block;width:200px;height:100px;background:red">A</view>
			<view id="demo2" style="display:inline-block;width:200px;height:100px;background:yellow">B</view>
			<view id="demo3" style="display:inline-block;width:200px;height:100px;background:blue">C</view>
		</scroll-view>

		<view class="ld">
			<view class="left">
				<view v-for="(item, index) in list" :key="index" @click="setId(index)">{{item.title}}</view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" 
				style="white-space: nowrap;height:200px;"
				:scroll-into-view="clickId"
				>
					<view v-for="(item, index) in list" :key="index">
						<view class="title" :id="'po'+ index">{{item.title}}</view>
						<view v-for="(it, idx) in item.list" :key="idx">
							{{it}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						title: '中餐',
						list: ["盖饭", "扒饭", "咖喱饭", "鸡排饭"]
					},
					{
						title: '西餐',
						list: ["牛排", "意面", "芝士", "汉堡"]
					},
					{
						title: '法餐',
						list: ["辣子鸡丁", "休息下", "是是是", "呜呜呜"]
					},
					{
						title: '快餐',
						list: ["薯条", "丸子", "粥", "饮料"]
					}
				],
				clickId:''
			};
		},
		onLoad() {
			console.log("页面初始化执行一次 onLoad")
		},
		onReady() {
			console.log("页面加载完毕 执行一次 onReady")
		},
		onShow() {
			console.log("页面进入执行 执行多次 onShow")
		},
		onHide() {
			console.log("页面进入离开 执行多次 onHide")
		},
		onPullDownRefresh() {
			console.log("用户执行了下拉动作")
		},
		onTabItemTap() {
			console.log("用户点击了tabbar")
		},
		onShareAppMessage() {
			console.log("用户进行了分享")
			return {
				title: "我是这条街最靓仔"
			}
		},
		methods: {
			test(e) {
				console.log(e.detail.current)
			},
			setId(index){
				this.clickId= 'po'+ index;
			}
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: 300px;

		swiper-item {
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.title{
		font-size:20px;
		font-weight:bold;
		background:pink;
	}

	.ld {
		display: flex;

		.left {
			width: 100px;
			border: 1px solid red;
		}

		.right {
			flex: 1;
		}
	}
</style>
