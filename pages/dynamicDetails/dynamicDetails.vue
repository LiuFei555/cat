<template>
	<view class="page_body">
		<view class="dynamic">
			<view class="header">
				<view class="userid" @click.stop.prevent="touserhome">
					<view>
						<image src="" mode=""></image>
					</view>
					<text>铲屎官</text>
				</view>
				<focus-on></focus-on>
			</view>
			<view class="contentText">
				<text>两岁大的猫咪必须要打疫苗吗，不打的话会对猫咪造成什么伤害？</text>
			</view>
			<view class="pic">
				<view>
					<image src="../static/icons/fabu1.png" mode=""></image>
				</view>
			</view>
			<view class="address">
				<text class="address">北京 · 朝阳</text>
				<text>206赞·100转发</text>
			</view>
		</view>
		<view class="comments">
			<view class="first_comment">
				<view class="head">
					<view class="tx">
						<image src="" mode=""></image>
					</view>
					<view class="right">
						<view class="hello">
							<text class="top">
								我嫩叠
							</text>
							<text class="content">
								当然要打啊
								当然要打啊
							</text>
						</view>
						<view class="ces">
							<view class="reply">
								<view class="author_reply">
									<text>
										养猫的大大
									</text>
									<view class="author">
										作者
									</view>
								</view>
								<text class="rd">
									：当然要打啊 当然要打啊当然要打啊当然要打啊当然要打啊当然要打啊
								</text>
							</view>
							<view class="replys" @click.stop.prevent="replycount">5条回复  >></view>
						</view>
					</view>
				</view>
			</view>
			<view class="reply_footer">
				<view class="footer_left">
					<text class="date">06-01</text>
					<text class="time">15:30</text>
				</view>
				<view class="footer_right">
					<view class="toreply">
						<image src="../../static/icons/评论@2x.png" mode=""></image>
					</view>
					<view class="like">
						<image src="../../static/icons/已点赞@2x.png" mode="">
						</image>
						132
					</view>
				</view>
			</view>
		</view>
	    <view class="demo">
			<image src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
			<view>
				<view class="uhead">
					<view class="uname">新奥尼沙拉</view>
					<view class="umes">要的要的</view>
				</view>
				<view class="ufoot">
					<view class="day">
						<view class="udate">2020-06-01</view>
						<view class="utime">12:30</view>
					</view>
					
					<view class="zan">
						<view class="pinl">
							<image src="../../static/icons/评论@2x.png" mode=""></image>
						</view>
						<view class="dianz">
							<image src="../../static/icons/已点赞@2x.png" mode=""></image>
							123
						</view>
					</view>
					
				</view>
			</view>
			
		</view>
	    <view class="demo">
	    	<image src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
	    	<view>
	    		<view class="uhead">
	    			<view class="uname">新奥尼沙拉</view>
	    			<view class="umes">要的要的</view>
	    		</view>
	    		<view class="ufoot">
	    			<view class="day">
	    				<view class="udate">2020-06-01</view>
	    				<view class="utime">12:30</view>
	    			</view>
	    			
	    			<view class="zan">
	    				<view class="pinl">
	    					<image src="../../static/icons/评论@2x.png" mode=""></image>
	    				</view>
	    				<view class="dianz">
	    					<image src="../../static/icons/已点赞@2x.png" mode=""></image>
	    					123
	    				</view>
	    			</view>
	    			
	    		</view>
	    	</view>
	    	
	    </view>
	    
		<view class="replyfriends">
			<view class="input"><text>回复@养猫的大大</text></view>
			<view class="show">
				<image src="../../static/icons/fenxiang_m.png" mode=""></image>
				分享
			</view>
			<view class="good">
				<image src="../../static/icons/已点赞@2x.png" mode=""></image>
				赞
			</view>
		</view>
		
	</view>
</template>

<script>
	import focuson from '../../components/focuson.vue'
	export default {
		data() {
			return {

			}
		},
		methods:{
			replycount(){
				uni.navigateTo({
					url:'/pages/replycount/replycount'
				})
			},
			touserhome(){
				uni.navigateTo({
					url:'/pages/userhome/userhome'
				}),
				console.log(123)
			}
		},
		components: {
			"focus-on": focuson
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
	.dynamic {
		margin-top: 2rpx;
		padding: 30rpx 30rpx 0 30rpx;
		background-color: #FFFFFF;

		.header {
			display: flex;
			justify-content: space-between;

			.userid {
				display: flex;
				align-items: center;

				view {
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					background-color: #007AFF;

					image {
						width: 60rpx;
						height: 60rpx;
					}
				}

				text {
					font-family: PingFangSC-Regular;
					font-size: 24rpx;
					color: #000000;
					letter-spacing: 0.04rpx;
					font-weight: 400;
					margin-left: 10rpx;
				}
			}
		}

		.contentText {
			width: 530rpx;
			box-sizing: border-box;
			margin-top: 30rpx;

			text {
				font-family: PingFangSC-Semibold;
				font-size: 28rpx;
				color: #3F3F3F;
				letter-spacing: 0.05rpx;
				font-weight: 600;

			}
		}

		.pic {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin-top: 30rpx;

			view {
				border-radius: 10rpx;
				border: 1rpx solid #E1E1E1;

				image {
					width: 224rpx;
					height: 224rpx;
				}
			}
		}

		.address {
			margin-top: 6rpx;
			margin-bottom: 6rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			height: 28rpx;

			text {
				text-align: center;
				margin-bottom: 6rpx;
				font-family: PingFangSC-Regular;
				font-size: 20rpx;
				color: #969494;
				letter-spacing: 0.03rpx;
				font-weight: 400;
			}
		}

	}
	.comments {
		background-color: #FFFFFF;
		padding: 30rpx 30rpx 0 30rpx;
		.head{
			display: flex;
			align-items:top;
			justify-content: space-between;
			.tx{
				width: 60rpx;
				height: 60rpx;
				background-color: #007AFF;
				border-radius: 50%;
			}
			.right{
				width: 620rpx;
				.hello{
					display: flex;
					flex-direction: column;
					.top{
						opacity: 0.5;
						font-family: PingFangSC-Regular;
						font-size: 20rpx;
						color: #000000;
						letter-spacing: 0.03rpx;
						font-weight: 400;
					}
					.content{
						font-family: PingFangSC-Regular;
						font-size: 24rpx;
						color: #000000;
						letter-spacing: 0.04rpx;
						font-weight: 400;
					}
				}
				.ces{
					padding: 20rpx;
					margin-top: 10rpx;
					background-color: #F5F5F5;
					
					.reply{
						line-height: 30rpx;
						font-family: PingFangSC-Regular;
						font-size: 20rpx;
						letter-spacing: 0.04rpx;
						font-weight: 400;
						.author_reply{
							display: flex;
							align-items: center;
							font-family: PingFangSC-Regular;
							color: #009FE1;
							letter-spacing: 0.03rpx;
							line-height: 28rpx;
							float: left;
							.author{
								width: 41rpx;
								height: 24rpx;
								border-radius: 4rpx;
								background-image: linear-gradient(180deg, #8CE7A3 0%, #60C57A 100%);
								font-family: PingFangSC-Medium;
								font-size: 14rpx;
								color: #FFFFFF;
								letter-spacing: 0.02rpx;
								font-weight: 500;
								text-align: center;
								line-height: 24rpx;
							}
						}
						.rd{
						color: #000000;
						opacity: 0.6;
						}
					}
					.replys{
						font-family: PingFangSC-Regular;
						font-size: 20rpx;
						color: #009FE1;
						letter-spacing: 0.03rpx;
						font-weight: 400;
						display: flex;
						align-items: center;
						margin-top: 20rpx;
					}
					
				}
			}
		}
	    .reply_footer{
			padding-left: 70rpx;
			display: flex;
			justify-content: space-between;
			.footer_left{
				text{
					opacity: 0.5;
					font-family: PingFangSC-Regular;
					font-size: 22rpx;
					color: #000000;
					letter-spacing: 0.04rpx;
					font-weight: 400;
				}
				.date{
					margin-right: 10rpx;
				}
			}
			.footer_right{
				display: flex;
				align-items: center;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #666666;
				letter-spacing: 0.04rpx;
				text-align: right;
				font-weight: 400;
				image{
					width: 36rpx;
					height: 36rpx;
				}
				.toreply{
					margin-top: 10rpx;
					margin-right: 40rpx;
				}
				.like{
					display: flex;
					align-items: center;
					image{
						margin-right: 10rpx;
					}
				}
			}
		}
	}
    .demo{
		background-color: #FFFFFF;
		margin-top: 2rpx;
		padding: 30rpx 30rpx 0 30rpx;
		display: flex;
		align-items: top;
		image{
			margin-right: 10rpx;
			width: 60rpx;
			height: 60rpx;
			border-radius: 50%;
		}
		.uhead{
			color: #000000;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			.uname{
				opacity: 0.5;
				font-size: 20rpx;
				letter-spacing: 0.03rpx;
				line-height: 33rpx;
			}
			.umes{
				font-size: 24rpx;
				letter-spacing: 0.04rpx;
				line-height: 45rpx;
			}
		}
		.ufoot{
			width: 620rpx;
			margin-top: 16rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.day{
				display: flex;
				opacity: 0.5;
				font-family: PingFangSC-Regular;
				font-size: 22rpx;
				color: #000000;
				letter-spacing: 0.04rpx;
				font-weight: 400;
				.udate{
					margin-right: 10rpx;
				}
			}
			.zan{
				display: flex;
				align-items: center;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #666666;
				letter-spacing: 0.04rpx;
				text-align: right;
				font-weight: 400;
				image{
					width: 36rpx;
					height: 36rpx;
				}
				.pinl{
					margin-right: 40rpx;
				}
				.dianz{
					display: flex;
					align-items: center;
					image{
						margin-right: 10rpx;
					}
				}
			}
				
			
		}
	}
    .replyfriends{
		display: flex;
		height: 128rpx;
		width: 750rpx;
		position:fixed;
		bottom: 0;
		left: 0;
		background-color: #FFFFFF;
		.input{
			width: 370rpx;
			height: 88rpx;
			border-radius:44rpx;
			background-color: #F5F5F5;
			line-height: 88rpx;
			text-align: center;
			margin-top: 20rpx;
			margin-left: 30rpx;
			margin-right:65rpx;
			text{
				opacity: 0.5;
				font-family: PingFangSC-Regular;
				font-size: 30rpx;
				color: #666666;
				letter-spacing: 0.05rpx;
				font-weight: 400;
			}
		}
		.show,.good{
			display: flex;
			align-items: center;
			font-family: PingFangSC-Regular;
			font-size: 24rpx;
			color: #666666;
			letter-spacing: 0.04rpx;
			font-weight: 400;
			image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}
			
		}
		.show{
			margin-right: 65rpx;
		}
	}
</style>
