<template>
	<view>
		<!-- 个人主页头部 -->
		<view class="personal_header">
			<image class="bg-set" src="../../static/bg/个人主页bg@2x.png" mode=""></image>
			<view class="headerImage"></view>
			<view class="focus" @click="toFocus">
				<view class="num">120</view>
				<text>关注</text>
			</view>
			<view class="fans" @click="toMyFans">
				<view class="num">500</view>
				<text>粉丝</text>
			</view>
			<view class="username">铲屎大王</view>
			<view class="mylike" @click="like">
				<text>我喜欢的</text>
				<image src="../../static/icons/箭头-绿@2x.png" mode=""></image>
			</view>
		</view>
		<!-- 导航栏 -->
		<view class="nav_dynamic">
			<view class="nav_item">
				<text>我的动态</text>
				<view></view>
			</view>
		</view>
		<!-- myDynamic 我的动态 -->
		<view class="dynamic_box">
			<view class="dynamic_header">
				<view>
					<view class="header-image"></view>
					<text>铲屎的大大</text>
				</view>
				<image src="../../static/icons/more.png"mode=""></image>
			</view>
			<text>两岁以上的猫咪到底要不要去打疫苗？不打的话对小猫有什么危害</text>
			<view class="photos">
				<image src="" mode=""></image>
			</view>
			<view class="dynamic_footer">
				<ul>
					<li><image src='../../static/icons/fenxiang_m.png' mode=""></image>149</li>
					<li><image src="../../static/icons/评论@2x.png"></image>229</li>
					<li><image src="../../static/icons/已点赞@2x.png" mode="">330</image></li>
				</ul>
			</view>
		</view>
	    <!-- 使用动态组件 -->
		<my-dynamic></my-dynamic>
		<my-dynamic></my-dynamic>
		<my-dynamic></my-dynamic>
	</view>
</template>

<script>
	import dynamic from '../../components/dynamic.vue'
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			like(){
				uni.navigateTo({
					url:'/pages/like/like'
				})
			},
			toFocus(){
				uni.navigateTo({
					url:'/pages/myfocus/myfocus'
				})
			},
			toMyFans(){
				uni.navigateTo({
					url:'/pages/myfans/myfans'
				}),
				console.log(123)
			}
		},
		components:{"my-dynamic":dynamic}
	}
</script>

<style lang="scss" scoped>
	.personal_header{
		width: 750rpx;
		height: 377rpx;
		position: relative;
		.bg-set{
			position: absolute;
			width: 750rpx;
			height: 377rpx;
			top: 0;
			left: 0;
			z-index: -1;
		}
		.headerImage{
			position: absolute;
			width: 120rpx;
			height: 120rpx;
			background-color: #007AFF;
			top: 128rpx;
			left:315rpx;
			border-radius: 50%;
		}
		.focus,.fans{
			width: 150rpx;
			height: 72rpx;
			font-family: PingFangSC-Medium;
			font-size: 22rpx;
			color: #FFFFFF;
			letter-spacing: 0.04rpx;
			text-align: center;
			font-weight: 500;
			text{
				opacity: 0.5;
			}
		}
		.focus{
			position: absolute;
			top: 194rpx;
			left: 125rpx;
			text-align: center;
		}
		.num{
			font-size: 30rpx;
			color: #FFFFFF;
			letter-spacing: 0.05rpx;
			
		}
		.fans{
			position: absolute;
			top: 194rpx;
			right: 125rpx;
		}
		.username{
			position: absolute;
			bottom: 82rpx;
			left: 323rpx;
			font-family: PingFangSC-Medium;
			font-size: 26rpx;
			color: #FFFFFF;
			letter-spacing: 0.04rpx;
			text-align: center;
			font-weight: 500;
		}
	    .mylike{
			display: flex;
			align-items: center;
			width: 170rpx;
			height: 56rpx;
			background: #FFFFFF;
			border-radius: 100rpx 0 0 100rpx;
			position: absolute;
			bottom: 30rpx;
			right: 0;
			text{
				margin-left: 30rpx;
				line-height: 54rpx;
				font-family: PingFangSC-Medium;
				font-size: 22rpx;
				color: #81D195;
				letter-spacing: 0;
				text-align: center;
				font-weight: 500;
			}
			image{
				width: 12rpx;
				height: 21rpx;
				margin-left: 10rpx;
			}
		}
	}
	
	// 动态导航栏
	.nav_dynamic{
		height: 80rpx;
		border-bottom: 1rpx solid #C8C7CC;
		.nav_item{
			color: #81D195;
			line-height: 79rpx;
			font-family: PingFangSC-Medium;
			font-size: 30rpx;
			letter-spacing: -0.83rpx;
			font-weight: 500;
			margin-left: 61rpx;
			view{
				margin-left: 9rpx;
				border-radius: 4rpx;
				width: 100rpx;
				height: 6rpx;
				background: #81D195;
			}
		}	
	}
	// 我的动态
	.dynamic_box{
		padding: 30rpx 30rpx 0rpx 30rpx;
		display: flex;
		flex-direction: column;
		border-bottom: 1rpx solid #C8C7CC;
		.dynamic_header{
			display: flex;
			justify-content: space-between;
			align-items: center;
			view{
				display: flex;
				align-items: center;
				.header-image{
					display: inline-block;
					background: #007AFF;
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
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
					margin-left: 20rpx;
				}
			}
			image{
				width: 40rpx;
				height: 40rpx;
			}
		}
 	    text{
			font-family: PingFangSC-Semibold;
			font-size: 28rpx;
			color: #3F3F3F;
			letter-spacing: 0.05rpx;
			font-weight: 600;
			margin-top: 19rpx;
			width: 530rpx;
		}
		.photos{
			margin-top: 30rpx;
			width: 224rpx;
			height: 224rpx;
			border-radius: 10rpx;
			background-color: #007AFF;
			margin-right: 20rpx;
			image{
				width: 224rpx;
				height: 224rpx;
			}
		}
		.dynamic_footer{
			width: 100%;
			height: 81rpx;
			ul{
				display: flex;
				justify-content: space-around;
				text-align: center;
				line-height: 81rpx;
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
	}
</style>
