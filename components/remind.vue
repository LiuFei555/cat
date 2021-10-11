<template>
	<view class="remind">
		<view class="empty" v-if="remind.lehgth===0">
			<image src="../static/icons/空@3x.png" mode=""></image>
			还没有任何提醒
		</view>
		<view class="news" v-if="remind">
			<view class="newsimg">
				<image src="../static/icons/dianzan2.png" mode="" v-if="action=='评论'"></image>
				<image src="../static/icons/评论@2x.png" mode="" v-if="action=='dianzan'"></image>
			</view>
			<view class="dianzan">
				<view class="heihei">
					<view class="action">{{action}}</view>
					泰罗等9位奥特曼点赞了您的动态
				</view>
				
			</view>
			<image class="haha" src="../static/icons/箭头-黑@2x.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				remind:[],
				action:'评论',
			}
		}
	}
	
</script>

<style lang="scss">
	page{
		background-color: #EFEFEF;
	}
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
	.news{
		display: flex;
		padding: 30rpx;
			position: relative;
		.newsimg{
			width: 60rpx;
			height: 60rpx;
			background-color: #F5F5F5;
			border-radius: 50%;
			margin-right: 20rpx;
			image{
				margin-left: 15rpx;
				margin-top: 15rpx;
				width: 30rpx;
				height: 30rpx;
			}
		}
		.dianzan{
			display: flex;
			justify-content: space-between;
			.heihei{
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #000000;
				letter-spacing: 0.04rpx;
				font-weight: 400;
				.action{
					opacity: 0.5;
					font-size: 20rpx;
					letter-spacing: 0.03rpx;
				}
			}
			
		}
		.haha{
			position: absolute;
			right: 30rpx;
			top: 50rpx;
			height: 21rpx;
			width: 12rpx;
		}
	}
</style>
