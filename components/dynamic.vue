<template>
	<view class="dynamic">
		<view class="header">
			<view class="userid">
				<view>
					<image src="" mode=""></image>
				</view>
				<text>铲屎官</text>
			</view>
			<my-focu></my-focu>
		</view>
		<view class="contentText">
			<text>两岁大的猫咪必须要打疫苗吗，不打的话会对猫咪造成什么伤害？</text>
		</view>
		<view class="pic">
			<view>
				<image src="../static/icons/fabu1.png" mode=""></image>
			</view>
		</view>
		<ul>
			<li> <image src="../static/icons/fenxiang_m.png"></image>222</li>
			<li><image src="../static/icons/评论@2x.png"></image>229</li>
			<li><image src="../static/icons/已点赞@2x.png"></image>54</li>
		</ul>
	</view>
</template>

<script>
	import focu from './focuson.vue'
	export default {
		data(){
			return{
				
			}
		},
		components:{
			"my-focu":focu
		}
	}
</script>

<style lang="scss" scoped>
	.dynamic{
		margin-top: 2rpx;
		padding: 30rpx 30rpx 0 30rpx;
		background-color: #FFFFFF;
		.header{
			display: flex;
			justify-content: space-between;
			.userid{
				display: flex;
				align-items: center;
				view{
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					background-color: #007AFF;
					image{
						width: 60rpx;
						height: 60rpx;
					}
				}
				text{
					font-family: PingFangSC-Regular;
					font-size: 24rpx;
					color: #000000;
					letter-spacing: 0.04rpx;
					font-weight: 400;
					margin-left: 10rpx;
				}
			}
		}
	    .contentText{
			width: 530rpx;
			box-sizing: border-box;
			margin-top:30rpx ;
			text{
				font-family: PingFangSC-Semibold;
				font-size: 28rpx;
				color: #3F3F3F;
				letter-spacing: 0.05rpx;
				font-weight: 600;
				
			}
		}
	    .pic{
	    	display: flex;
	    	flex-wrap: wrap;
	    	justify-content: space-between;
	    	margin-top: 30rpx;
	    	view{
				border-radius: 10rpx;
				border: 1rpx solid #E1E1E1;
				image{
					width: 224rpx;
					height: 224rpx;
				}
			}
	    }
		ul{
			display: flex;
			justify-content: space-around;
			text-align: center;
			line-height: 81rpx;
			margin-right: 30rpx;
			li{ 
				display: flex;
			    align-items: center;
				justify-content: center;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #666666;
				letter-spacing: 0.04rpx;
				font-weight: 400;
				image{
					width: 36rpx;
					height: 36rpx;
				}
			}
		}
	}
</style>
