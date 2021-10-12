<template>
	<view class="">
		<view class="popular" @click.stop.prevent="topopular">
			<view class="msg">
				<view class="title">
					<span class="new" v-if="true">
						新手必看
					</span>
					两岁的小猫一定要去打疫苗吗？不打的话对猫咪有什么危害
				</view>
				<image src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image></view>
		    </viwe>
			<view class="footer">
				<view class="left">
					<image src="../../static/icons/tab%20bar/personal_1.png" mode="">
				    </image>
				    疯狂的小编
				</view>
				<view class="right">1000人喜欢·300人评论</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default{
		 data(){
			 return{
				 
			 }
		 },
		 methods:{
			 topopular(){
				 uni.navigateTo({
				 	url:"/pages/populardetails/populardetails"
				 })
			 }
		 }
	}
</script>

<style lang="scss">
	.popular{
		border-bottom: 1rpx solid #efefef;
		padding: 20rpx 20rpx 0 20rpx;
		.msg{
			font-family: PingFangSC-Semibold;
			font-size: 28rpx;
			color: #3F3F3F;
			letter-spacing: 0.05rpx;
			font-weight: 600;
			height: 100rpx;
			display: flex;
			justify-content: space-between;
			align-items: top;
			.title{
				line-height: 40rpx;
				.new{
					display: block;
					width: 116rpx;
					height: 39rpx;
					float: left;
					font-family: PingFangSC-Semibold;
					font-size: 24rpx;
					color: #FFFFFF;
					letter-spacing: 0;
					font-weight: 600;
					text-align: center;
					background-color: #4aaff7;
					border-radius: 10rpx;
					margin-right: 10rpx;
				}
			}
			image{
				margin-left: 20rpx;
				width: 160rpx;
				height: 100rpx;
			}
		}
		.footer{
			height: 60rpx;
			font-family: PingFangSC-Regular;
			font-size: 24rpx;
			color: #969494;
			letter-spacing: 0.04rpx;
			font-weight: 400;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				display: flex;
				align-items: center;
				image{
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
</style>
