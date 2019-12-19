<template>
	<view>
		<text>我是two页</text>
		<button type="primary" @click="toPath">toOne</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			toPath() {
				uni.redirectTo({
					url: '../one/one'
				})
			}
		}
	}
</script>

<style>

</style>
