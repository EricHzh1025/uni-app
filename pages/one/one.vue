<template>
	<view>
		<text>我是one页面</text>
		<button type="primary" @click="toPath">toTwo</button>
		<button type="primary" @click="goBack">返回</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		// 传参的取法
		onLoad(option){
			console.log(option);
		},
		methods:{
			toPath(){
				uni.redirectTo({
					url:'../two/two'
				})
			},
			goBack(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">

</style>
