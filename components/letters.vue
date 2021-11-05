<template>
	<view>
		<view class="empty" v-if="letters.length===0">
			<image src="../static/icons/空@3x.png" mode=""></image>
			还没有任何私信
		</view>
		<view class="letters">
		</view>
	</view>
</template>

<script>
	export default {
		data (){
			return{
				letters:[]
			}
		}
	}
</script>

<style lang="scss">
	.empty{
		font-family: PingFangSC-Regular;
		font-size: 24rpx;
		color: #666666;
		letter-spacing: 0.04rpx;
		text-align: center;
		font-weight: 400;
		image{
			width: 150rpx;
			height: 133rpx;
			margin:354rpx 300rpx;
			margin-bottom: 30rpx;
		}
	}
	.letter{
		
	}
</style>
