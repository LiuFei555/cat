<template>
	<view>
		<dynamic></dynamic>
		<dynamic></dynamic>
		<dynamic></dynamic>
		<dynamic></dynamic>
		<dynamic></dynamic>
		<image src="../static/icons/fabu1.png"  @click.stop.prevent="torelease"></image>
	</view>
</template>

<script>
	import dynamic from './dynamic.vue'
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			torelease(){
				uni.navigateTo({
					url:"/pages/release/release"
				}),
				console.log(123)
			}
		},
		components:{
		"dynamic":dynamic
		}
	}
	
</script>

<style lang="scss" scoped>
	
		image{
			width: 173rpx;
			height: 170rpx;
			position: fixed;
			bottom: 20rpx;
			right: 0;
		}
	
</style>
