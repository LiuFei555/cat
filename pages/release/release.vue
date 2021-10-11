<template>
	<view class="page">
		<view class="pic">
			<view>
			</view>
			上传猫片
		</view>
		<view class="radio">
			<view>
			</view>
			上传视频
		</view>
		<view class="quxiao"><image src="../../static/icons/取消叉@2x.png" mode=""></image></view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.page{
		display: flex;
		margin-top: 924rpx;
		view{
			font-family: PingFangSC-Regular;
            font-size: 26rpx;
            color: #979797;
            text-align: center;
            font-weight: 400;
			view{
				width: 110rpx;
				height: 110rpx;
				background-color: #81D195;
				border-radius: 50%;
			}
			
			
		}
		.pic{
			margin-left:280rpx;
		}
		.radio{
			margin-left: 60rpx;
			view{
				background-color:  #5BC8EB;
			}
		}
		.quxiao{
			width: 173rpx;
			height: 170rpx;
			position: absolute;
			right:0;
			top: 904rpx;
			image{
				margin-top: 70rpx;
				width: 30rpx;
				height: 30rpx;
				right: 0;
				bottom:128rpx
			}
		}
	}
</style>
