<template>
	<view>
		<test>我是test组件</test>
		<button type="primary" @click="test">event</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		props: ["msg"],
		beforeMount(){
			console.log('在挂载开始之前被调用')
		},
		mounted(){
			console.log("挂载到实例上去之后调用")
			// this.$nextTick(function){
			// 	//渲染完毕
			// 	console.log('ok')
			// }
		},
		methods: {
			test() {
				// this.$emit("testShowName", {
				// 		name: 'qiqiqi'})
				uni.$emit("testEmit",{name: "qiqi"})
				}
			}

		}
</script>

<style lang="scss">

</style>
