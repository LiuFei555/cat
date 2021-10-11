<template>
	<view class="replys">
		<view class="louzhu">
			<image class="toux" src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
			<view class="pinglun">
				<view class="id">奥沙利文</view>
				<view class="wenb">不打不打，坚决不打</view>
			    <view class="last">		
				<view>0601-15:30</view>
				<view class="nihao">
					<image class="one" src="../../static/icons/评论@2x.png" mode=""></image>
					<image class="two" src="../../static/icons/dianzan1.png" mode=""></image>
				</view>
				</view>
			</view>
		</view>
		<view class="persons">
			<view class="louzhu">
				<image class="toux" src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
				<view class="pinglun">
					<view class="id">奥沙利文</view>
					<view class="wenb">不打不打，坚决不打</view>
				    <view class="last">		
					<view>0601-15:30</view>
					<view class="nihao">
						<image class="two" src="../../static/icons/dianzan1.png" mode=""></image>
						106
					</view>
					</view>
				</view>
			</view>
			<view class="louzhu">
				<image class="toux" src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
				<view class="pinglun">
					<view class="id">奥沙利文</view>
					<view class="wenb">不打不打，坚决不打</view>
				    <view class="last">		
					<view>0601-15:30</view>
					<view class="nihao">
						<image class="two" src="../../static/icons/dianzan1.png" mode=""></image>
					</view>
					</view>
				</view>
			</view>
		</view>
		<view class="huifu">
			<view class="input">回复@养猫的大大</view>
		</view>
	</view>
	
</template>

<script>
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
	.louzhu{
		
		background-color: #FFFFFF;
		display: flex;
		align-items: top;
		.toux{
			width: 60rpx;
			height: 60rpx;
			border-radius:50%;
			margin: 30rpx 10rpx 0 30rpx;
		}
		
		.pinglun{
			margin-top: 30rpx;
			margin-right: 30rpx;
			
			font-family: PingFangSC-Regular;
			font-size: 20rpx;
			letter-spacing: 0.03rpx;
			font-weight: 400;
			.id{
				opacity: 0.5;
			color: #000000;
			}
			.wenb{
				font-size: 24rpx;
				letter-spacing: 0.04rpx;
			}
			.last{
				opacity: 0.5;
				font-size: 22rpx;
				color: #000000;
				letter-spacing: 0.04rpx;
				text-align: center;
				width: 620rpx;
				display: flex;
				justify-content: space-between;
				.nihao{
					display: flex;
					align-items: center;
					font-size: 24rpx;
					color: #666666;
					image{
						width: 36rpx;
						height: 36rpx;
					}
					.one{
						margin-right: 40rpx;
					}
				}
			}
		}
	}
	.persons{
		margin-top: 10rpx;
		.louzhu{
			background-color: #FAFAFA;
			margin-top: 4rpx;
		}
	}
	
		.huifu{
			width: 750rpx;
			height: 128rpx;
			background-color: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 0;
			.input{
				width: 690rpx;
				height: 88rpx;
				margin: 20rpx 30rpx 20rpx 30rpx;
				background-color: #F5F5F5;
				border-radius: 44rpx;
				line-height: 88rpx;
				padding-left: 30rpx;
				opacity: 0.5;
				font-family: PingFangSC-Regular;
				font-size: 30rpx;
				color: #666666;
				letter-spacing: 0.05rpx;
				font-weight: 400;
			}
		}

</style>
