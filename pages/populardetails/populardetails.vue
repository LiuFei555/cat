<template>
	<view  class="page1">
		<view class="one">
			<view class="head">
				<image src="../../static/icons/tab%20bar/message1.png" mode=""></image>
				疯狂的小编
			</view>
			<view class="title">两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？</view>
			<view class="picture">
				<image src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
			</view>
			<view class="content">
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
			</view>
			<view class="picture">
				<image src="../../static/bg/个人主页bg2-其他用户@2x.png" mode=""></image>
			</view>
			<view class="content">
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
				两岁的小猫要不要去打疫苗？不打的话对小猫会有什么危害？
			</view>
			<view class="end">{{great}}赞·{{ureply.length}}评论</view>
		</view>
	    <view class="two" v-for="(item,index) in ureply" :key=index>
			<view class="goldpl">
				<view class="headepic">
					<image src="" mode=""></image>
				</view>
				<view class="another">
					<view class="uid">{{item.uid}}</view>
					<view class="umsg">{{item.msg}}</view>
					<view class="replys" v-if="item.replycount">
						<text @click="replycount">{{item.replycount}}条回复>></text>
					</view>
					<view class="gold_footer">
						<image src="../../static/icons/评论@2x.png" style="padding-right: 40rpx"></image>
						<image src="../../static/icons/dianzan1.png" v-if="!item.status" @click="dianzan(index)"></image>
						<image src="../../static/icons/已点赞@2x.png" v-if="item.status" @click="dianzan(index)"></image>
						<text>{{item.goods}}</text>
						<text v-if="item.good!==0">{{goods}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="page_footer">
			<view>回复@养猫的大大</view>
			<image src="../../static/icons/fenxiang_m.png" mode=""></image>
			<text>分享</text>
			<image src="../../static/icons/dianzan1.png" mode="" v-if="!status" @click="changestatus"></image>
			<image src="../../static/icons/已点赞@2x.png" mode="" v-if="status" @click="changestatus"></image>
			赞
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				status:true,
				great:999,
				ureply:[
					{"uid":'养猫的大大',"msg":'啥家庭啊,还给猫打疫苗！','replycount':999,"goods":3990,status:true},
					{"uid":'键盘冒奶',"msg":'也可以不打','replycount':123,"goods":321,status:false},
					{"uid":'来了来了',"msg":'要的要的','replycount':0,"goods":0,status:false},
					{"uid":'喵星人',"msg":'看啥疫苗吧，有些不关键的可以不打','replycount':12,"goods":1,status:true}
				]
			}
		}
		,
		methods:{
			dianzan(index){
				if(!this.ureply[index].status){
					this.ureply[index].status=true,
					this.ureply[index].goods++
				}  else {
					this.ureply[index].goods--
					this.ureply[index].status=false
				}
			},
			changestatus(){
				if(this.status){
					this.status=false,
					this.great--
				}else{
					this.great++,
					this.status=true
				}
			},
			replycount(){
				uni.navigateTo({
					url:"/pages/replycount/replycount"
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F5F5F5;
	}
	.page1{
		padding: 31rpx 30rpx 0 30rpx;
			background-color: #FFFFFF;
		.one{
			
			border-bottom: 10rpx solid #efefef;
			.head{
				display: flex;
				align-items: center;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #000000;
				letter-spacing: 0.04rpx;
				font-weight: 400;
				image{
					width: 60rpx;
					height: 60rpx;
					border-radius:50%;
					margin-right: 10rpx;
				}
			}
			.title{
				width: 530rpx;
				margin-top: 19rpx;
				font-family: PingFangSC-Semibold;
				font-size: 28rpx;
				color: #3F3F3F;
				letter-spacing: 0.05rpx;
				font-weight: 600;
			}
			.picture{
				margin-top: 30rpx;
				height: 341rpx;
				width: 690rpx;
				image{
					width: 690rpx;
					height: 341rpx;
				}
			}
			.content{
				margin-top: 30rpx;
				font-family: PingFangSC-Regular;
				font-size: 24rpx;
				color: #3F3F3F;
				letter-spacing: 0.04rpx;
				font-weight: 400;
			}
			.end{
				font-family: PingFangSC-Regular;
				font-size: 20rpx;
				color: #969494;
				letter-spacing: 0.03rpx;
				text-align: right;
				font-weight: 400;
				height: 28rpx;
				margin-right: 0;
				margin-top: 6rpx;
				margin-bottom: 6rpx;
			}
		}
		.two{
			margin-top: 30rpx;
			.goldpl{
				display: flex;
				align-items: top;
				.headepic{
					width: 60rpx;
					height: 60rpx;
					border-radius: 50%;
					background-color: #81D195;
				}
				.another{
					margin-left: 10rpx;
					font-family: PingFangSC-Regular;
					color: #000000;
					font-weight: 400;
						font-size: 20rpx;
						letter-spacing: 0.03rpx;
					.uid{
						opacity: 0.5;
					}
					.umsg{
						font-size: 24rpx;
						letter-spacing: 0.04rpx;
						margin-top: 4rpx;
						margin-bottom: 10rpx;
					}
					.replys{
						height: 68rpx;
						width: 620rpx;
						background-color: #EFEFEF;
						color: #009FE1;
						display: flex;
						align-items: center;
						text{
							margin-left: 20rpx;
							margin-right: 20rpx;
						}
					}
				}
				.gold_footer{
					display: flex;
					align-items: center;
					border-bottom: 2rpx solid #f5f5f5;
					image{
						width: 36rpx;
						height: 36rpx;
						margin-right: 10rpx;
						margin-top: 10rpx;
						margin-bottom: 20rpx;
					}
				}
			}
		}
	    .page_footer{
			height: 128rpx;
            width: 750rpx;			
			position: fixed;
			bottom: 0;
			left: 0;
			background-color: #FFFFFF;
			display: flex;
			align-items: center;
			font-family: PingFangSC-Regular;
			font-size: 24rpx;
			color: #666666;
			letter-spacing: 0.04rpx;
			font-weight: 400;
			view{
				width: 370rpx;
				height: 88rpx;
				border-radius: 44rpx;
				background-color: #F5F5F5;
				padding-left: 30rpx;
				line-height: 88rpx;
				margin: 30rpx;
				margin-right: 65rpx;
				opacity: 0.5;
				font-size: 30rpx;
				letter-spacing: 0.05rpx;
				
			}
		    image{
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}
			text{
				margin-right: 60rpx;
			}
		}
	}
</style>
