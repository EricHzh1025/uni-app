<template>
	<view class="content">
		<test :msg="msg" @testShowName="testEvent">{{msg}}</test>
		<view>{{msg}}</view>
		<view>{{msg+'qiqiqi'}}</view>
		<view>{{"我爱美女".slice(0,1)}}</view>
		<view :style="{width:'100px',height:'100px',background:'red'}"></view>
		<view :style="[{width:'100px',height:'100px',background:'blue'}]"></view>
		<view :class="{box111:true}"></view>
		<view :class="['box111','box222']"></view>
		<view>
			<view v-for="(item, index) in names" :key="index" :class="{box333:index===currentIndex}" @click="setIndexNum(index)">{{item}}</view>
		</view>
		<button type="primary" @click="toPath">toNews</button>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	export default {
		data() {
			return {
				msg: 'qiqiqi',
				names:['lili','luce','haha','feifei'],
				currentIndex:0
				
			}
		},
		components: {
			test
		},
		onLoad() {
			uni.$on("testEmit",(rel)=>{
				console.log(rel)
			})

		},
		methods: {
			testEvent(rel) {
				console.log(rel)
			},
			setIndexNum(index){
				this.currentIndex = index
			},
			toPath(){
				//跳转非配置过的页面使用navigateTo，跳转时保留老页面，一般用于需要返回
				uni.navigateTo({
					url:'../one/one?name=qiqiqi'
				})
				// 跳转分页配置过的页面使用switchTab
				// uni.switchTab({
				// 	url:'../news/news'
				// })
			}
		}
	}
</script>

<style>
 .box111{
	 width:100px;
	 height:100px;
	 background:pink;
 }
 .box222{
	 border:1px solid #000000
 }
 
 .box333{
	 background:yellow
 }
</style>
