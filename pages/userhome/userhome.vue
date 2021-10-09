<template>
	<view class="userhome">
		<view class="box">
			<!-- 页面头部 头像区域 -->
			
			<view class="pagehead">
				<view class="back" @click="back"> 返回 </view>
				<image src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
				<view class="yh">
					<view class="yhtx">
						<image src="../../static/icons/dagou.png" mode=""></image>
					</view>
					<view class="yhsj">
						<view class="yhm">养猫的大大</view>
						<view class="yhfs">
							<view>500</view><text>粉丝</text>
							<view>100</view><text>关注</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 导航栏 -->
			<view class="his">
				<view class="wenz">
					<view class="hisdt" >
						<view class="tddt" :class="{'checked':his,'unsheck':!his}" @click.stop.prevent="changehisdt">
							<text>他的动态</text>
						</view>
					</view>
					<view class="txhd" :class="{'checked':!his,'unsheck':his}" @click.stop.prevent="changehisxh">
						<text>他喜欢的</text>
						<view v-if="false"></view>
					</view>
				</view>
				<view class="tzw">
					<view class="one" :class="{'checked':his,'unsheck':!his}"></view>
					<view class="two" :class="{'checked':!his,'unsheck':his}"></view>
				</view>
			</view>
		</view>
	    <view class="hislike" v-if="!his">
	    	<view class="hisdynamic" v-if="!his">
	    		<view>两岁的小猫咪要不要去打疫苗？不打的话会对小猫咪有什么影响</view>
	    		<view>
	    			<view class="pictures">
	    				<image src="../../static/icons/fabu.png" mode=""></image>
	    			</view>
	    			<view class="pictures">
	    				<image src="../../static/icons/fabu.png" mode=""></image>
	    			</view>
	    			<view class="pictures">
	    				<image src="../../static/icons/fabu.png" mode=""></image>
	    			</view>
	    		</view>
	    		<view class="his_footer">
	    			<view><image src="../../static/icons/fenxiang_m.png" mode=""></image>123</view>
	    			<view><image src="../../static/icons/评论@2x.png" mode=""></image>222</view>
	    			<view><image src="../../static/icons/已点赞@2x.png" mode=""></image>333</view>
	    		</view>
	    	</view> 
	    </view>
		<!-- 他的动态 -->
		<view class="hisdynamic" v-if="his">
			<view>两岁的小猫咪要不要去打疫苗？不打的话会对小猫咪有什么影响</view>
			<view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
			</view>
			<view class="his_footer">
				<view><image src="../../static/icons/fenxiang_m.png" mode=""></image>123</view>
				<view><image src="../../static/icons/评论@2x.png" mode=""></image>222</view>
				<view><image src="../../static/icons/已点赞@2x.png" mode=""></image>333</view>
			</view>
		</view>
		<view class="hisdynamic" v-if="his">
			<view>两岁的小猫咪要不要去打疫苗？不打的话会对小猫咪有什么影响</view>
			<view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
			</view>
			<view class="his_footer">
				<view><image src="../../static/icons/fenxiang_m.png" mode=""></image>123</view>
			</view>
		</view>
		<view class="hisdynamic" v-if="his">
			<view>两岁的小猫咪要不要去打疫苗？不打的话会对小猫咪有什么影响</view>
			<view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
				<view class="pictures">
					<image src="../../static/icons/fabu.png" mode=""></image>
				</view>
			</view>
			<view class="his_footer">
				<view><image src="../../static/icons/fenxiang_m.png" mode=""></image>123</view>
				<view><image src="../../static/icons/评论@2x.png" mode=""></image>222</view>
			</view>
		</view>
		<!-- 页面底部 私信及关注 -->
		<view class="pagefoot">
			<image src="../../static/icons/私信@2x.png" mode=""></image>
			私信ta
			<view class="nofocu" v-if="!isfocus" @click.stop.prevent="changefocus">
				<text>
					关注
				</text>
			</view>
			<view class="focued" v-if="isfocus" @click.stop.prevent="changefocus">
				<image src="../../static/icons/已关注打勾@2x.png" mode=""></image>
				<text>已关注</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				isfocus:false,
				his:true
			}
		},
		methods:{
			changefocus(){
				this.isfocus=!this.isfocus
			},
			changehisdt(){
				this.his=true
			},
			changehisxh(){
				this.his=false
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		}
	}
</script>

<style lang="scss">
	.box{
		height: 380rpx;
		
		.pagehead{
			.back{
				color: #FFFFFF;
				position: fixed;
				left: 30rpx;
				top:50rpx
			}
			position:fixed;
			left: 0;
			top: 0;
			height: 300rpx;
			display: flex;
			image{
				width: 750rpx;
				height: 300rpx;
				position: absolute;
				left: 0;
				top: 0;
				z-index: -1;
			}
			.yh{
				display: flex;
				align-items: center;
				margin-left: 70rpx;
				margin-top: 128rpx;
				.yhtx{
					width: 120rpx;
					height: 120rpx;
					background-color: #007AFF;
					border-radius: 50%;
					
					margin-right: 20rpx;
					
				}
				.yhsj{
					height: 100rpx;
					display: flex;
					flex-direction: column;
					font-family: PingFangSC-Medium;
					color: #FFFFFF;
					font-weight: 500;
					.yhm{
						font-size: 30rpx;
						letter-spacing: 0.05rpx;
					}
					.yhfs{
						display: flex;
						margin-top: 10rpx;
						font-size: 22rpx;
						letter-spacing: 0.04rpx;
						text-align: center;
						text{
							opacity: 0.5;
							margin-right: 30rpx;
						}
					}
				}
			}
		}
		.his{
			position: fixed;
			background-color: #FFFFFF;
			width: 750rpx;
			left: 0;
			top: 300rpx;
			height: 80rpx;
			border-bottom: 1rpx solid #E1E1E1 ;
			.wenz{
				margin-top: 6rpx;
				height: 74rpx;
				display: flex;
				align-items: center;
				margin-left: 61rpx;
				.checked{
				color: #81D195;
				}
				.uncheck{
					color: #3F3F3F;
				}
				.tddt,.txhd{
					font-family: PingFangSC-Medium;
					font-size: 30rpx;
					letter-spacing: -0.83rpx;
					font-weight: 500;
				}
				.txhd{
					margin-left: 91rpx;
				}
			}
			.tzw{
				margin-bottom: 0;
				height: 6rpx;
				margin-left: 69rpx;
				display: flex;
				.checked{
					background-color: #81D195;
				}
			    .one{
				border-radius: 4rpx;
				
				width: 100rpx;
				height: 6rpx;
				}
				.two{
					border-radius: 4rpx;
					width: 100rpx;
					height: 6rpx;
					margin-left: 107rpx;
				}
			}
		}
	}
	
    .hisdynamic{
		padding: 30rpx 30rpx 0 30rpx;
		font-family: PingFangSC-Semibold;
		font-size: 28rpx;
		color: #3F3F3F;
		letter-spacing: 0.05rpx;
		font-weight: 600;
		line-height: 40rpx;
		border-bottom: 1rpx solid #E1E1E1;
		view{
			margin-top: 30rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.pictures{
				width: 224rpx;
				height: 224rpx;
				border: 1rpx solid #E1E1E1;
				border-radius: 10rpx;
				image{
					width: 224rpx;
					height: 224rpx;
				}
			}
		}
		.his_footer{
			margin-top: 0;
			display: flex;
			align-items: center;
			justify-content: space-around;
			view{
				display: flex;
				align-items: center;
				margin-bottom: 23rpx;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #666666;
				letter-spacing: 0.04rpx;
				font-weight: 400;
				image{
					width: 36rpx;
					height: 38rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
    .pagefoot{
		background-color: #FFFFFF;
		height: 128rpx;
		width: 750rpx;
		border-top: 1rpx solid #E1E1E1;
		position: fixed;
		left: 0;
		bottom: 0;
		display: flex;
		align-items: center;
		font-family: PingFangSC-Semibold;
		font-size: 28rpx;
		color: #3F3F3F;
		letter-spacing: 0.05rpx;
		font-weight: 600;
		image{
			width: 50rpx;
			height: 42rpx;
			margin-left: 113rpx;
			margin-right: 20rpx;
		}
		.nofocu{
			width: 340rpx;
			height: 90rpx;
			background-color: #81D195;
			border-radius: 50rpx;
			font-family: PingFangSC-Medium;
			font-size: 37rpx;
			color: #FFFFFF;
			letter-spacing: 0;
			text-align: center;
			font-weight: 500;
			display: flex;
			align-items: center;
			margin-left: 113rpx;
			text{
				margin-left: 133rpx;
			}
		}
		.focued{
			width: 340rpx;
			height: 90rpx;
			background: #F5F5F5;
			border-radius: 50rpx;
			font-family: PingFangSC-Medium;
			font-size: 37rpx;
			color: #D4D4D4;
			letter-spacing: 0;
			text-align: center;
			font-weight: 500;
			display: flex;
			align-items: center;
			margin-left: 113rpx;
			image{
				width: 30rpx;
				height: 24rpx;
				margin-left: 92rpx;
			}
		}
	}
</style>
