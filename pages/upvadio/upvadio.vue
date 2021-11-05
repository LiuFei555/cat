<template>
	<view>
		<view class="title" :class="{'empty':text.length===0,'isempty':text.length!==0}" ># 领养 #</view>
		<textarea value="" placeholder="分享我的故事" auto-height="true" v-model="text" maxlength="140"
		placeholder-class="phr" autofocus/>
		<view class="sucai">
			<video :src="path" controls poster="path" direction="0" object-fit="cover" v-if="path!=''" >
			</video>
			<view class="upvadio"  @click="upvadio"  v-if="path==''">
				<image src="../../static/icons/视频@2x.png" mode=""></image>
			</view>
		</view>
		<view class="address" @click="getaddress">{{address}} 
		    <view v-if="address!='你在哪里'" @click.stop.prevent="quxiao">
				×
			</view>
		</view>
		<view class="upload">发布</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				address:'你在哪里',
				text:'',
				path:''
			}
		},
		methods:{
			getaddress(){
				uni.chooseLocation({
					success:(a)=>{
						this.address=a.name
					}
				})
			},
			upvadio(){
				uni.chooseVideo({
					success:(a)=>{
						this.path=a.tempFilePath,
						console.log(this.path)
					}
				})
			},
			quxiao(){
				this.address="你在哪里"
			}
		}
	}
</script>

<style lang="scss"> 
	.title{
		width: 149rpx;
		height: 56rpx;
		line-height: 56rpx;
		border-radius: 28rpx;
		font-family: PingFangSC-Medium;
		font-size: 26rpx;
		text-align: center;
		font-weight: 500;
		margin-top: 41rpx;
		margin-left: 36rpx;
	}
	.empty{
		
		border: 1rpx solid #666666;
		
		
		color: #666666;
		letter-spacing: 0.04rpx;
	}
	.isempty{
		
		background-color: #81D195;
		color: #FFFFFF;
		letter-spacing: 0.04rpx;
		font-weight: 500;
	
	}
	textarea{
		margin: 30rpx 34rpx 60rpx 40rpx;
		overflow: hidden;
		font-family: PingFangSC-Semibold;
		font-size: 28rpx;
		color: #3F3F3F;
		letter-spacing: 0.05rpx;
		font-weight: 600;
		.phr{
			opacity: 0.3;
			font-size: 28rpx;
			letter-spacing: 0.05rpx;
			font-weight: 600;
		}
	}
	video{
		width: 214rpx;
		height: 214rpx;
	}
	.sucai{
		display: flex;
		flex-wrap: wrap;
		margin-left: 40rpx;
		video{
			border-radius: 10rpx;
		}
		view{
			width: 213rpx;
			height: 213rpx;
			border: 2rpx dashed #cacaca;
			border-radius: 10rpx;
			float: left;
			image{
				width: 60rpx;
				height: 54rpx;
				margin: 80rpx 77rpx;
			}
		}
		.upimg{
			margin-right: 15rpx;
		}
	}
	.address{
		font-family: PingFangSC-Regular;
		font-size: 22rpx;
		color: #666666;
		letter-spacing: 0.04rpx;
		font-weight: 400;
		margin: 30rpx 40rpx;
		display: flex;
		align-items: center;
		view{
			width: 32rpx;
			height: 32rpx;
			background-color: #EFEFEF;
			border-radius: 50%;
			text-align: center;
			line-height: 32rpx;
			font-size: 28rpx;
			margin-left: 30rpx;
		}
	}
	.upload{
		position: fixed;
		width: 600rpx;
		height: 100rpx;
		background-color: #81d195;
		border-radius: 50rpx;
		bottom: 0;
		left: 74rpx;
		font-family: PingFangSC-Medium;
		font-size: 37rpx;
		color: #FFFFFF;
		letter-spacing: 0;
		text-align: center;
		font-weight: 500;
		line-height: 100rpx;
	}
</style>
