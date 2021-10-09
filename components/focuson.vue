<template>
	<view class="focus_on" @click.stop.prevent="ceshi" :ceshi="ceshi()">
		<image src="../static/icons/guanzhu1.png" mode=""></image>
		关注
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			ceshi(){
				console.log(123)
			}
		}
	}

</script>

<style lang="scss" scoped>
	.focus_on{
		width: 120rpx;
		height: 56rpx;
		background-color: #e6f6ea;
		color: #81D195;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: PingFangSC-Medium;
		font-size: 26rpx;
		letter-spacing: 0.04rpx;
		font-weight: 500;
		line-height: 56rpx;
		border-radius: 28rpx;
		image{
			width: 20rpx;
			height: 20rpx;
		}
		
	}
</style>
