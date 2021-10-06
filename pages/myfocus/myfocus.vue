<template>
	<view class="box">
		<view class="users">
			<view class="userid">
				<view class="userHead">
					<image src="../../static/icons/play.png" mode=""></image>
				</view>
				<text>养猫的大大</text>
			</view>
			<view class="unfocus">
				<image src="../../static/icons/取消叉@2x.png" mode=""></image>
				取消关注
			</view>
		</view>
		<view class="users">
			<view class="userid">
				<view class="userHead">
					<image src="../../static/icons/play.png" mode=""></image>
				</view>
				<text>养猫的大大</text>
			</view>
			<view class="unfocus">
				<image src="../../static/icons/取消叉@2x.png" mode=""></image>
				取消关注
			</view>
		</view>
		<view class="users">
			<view class="userid">
				<view class="userHead">
					<image src="../../static/icons/play.png" mode=""></image>
				</view>
				<text>养猫的大大</text>
			</view>
			<view class="unfocus">
				<image src="../../static/icons/取消叉@2x.png" mode=""></image>
				取消关注
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		background-color: #EFEFEF;
	}
	.box{
		display: flex;
		flex-direction: column;
		.users{
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 750rpx;
			height: 146rpx;
			margin-bottom:2rpx;
			margin-top:1rpx;
			background-color: #FFFFFF;
			.userid{
				display: flex;
				align-items: center;
				margin-left: 30rpx;
				.userHead{
					width: 86rpx;
					height: 86rpx;
					background-color: #DD524D;
					border-radius: 50%;
					margin-right: 20rpx;
					image{
						width: 86rpx;
						height: 86rpx;
					}
					text{
						font-family: PingFangSC-Medium;
						font-size: 30rpx;
						color: #000000;
						letter-spacing: 0.05rpx;
						font-weight: 500;
					}
				}
				
			}
			.unfocus{
				display: flex;
				align-items: center;
				width: 172rpx;
				height: 56rpx;
				border: 1rpx solid #D4D4D4;
				border-radius: 28rpx;
				margin-right: 30rpx;
				font-family: PingFangSC-Medium;
				font-size: 26rpx;
				letter-spacing: 0.04rpx;
				font-weight: 500;
				image{
					width: 15.02rpx;
					height: 15.02rpx;
					margin-left: 20.49rpx;
					margin-right: 13.49rpx;
				}
			}
		}
	}
</style>
