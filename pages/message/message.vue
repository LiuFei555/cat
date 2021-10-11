<template>
	<view class="message_page">
		<view class="dian3"></view>
		<view class="nav">
				<view class="remind" :class="{'checked':ischecked,'uncheck':!ischecked}" @click="changecheck">
					提醒
					<view></view>
				</view>
				<view class="letters" :class="{'checked':!ischecked,'uncheck':ischecked}" @click="changecheck1">
					私信
					<view></view>
				</view>
				<view class="dian1">9</view>
				<view class="dian2">18</view>
		</view>
		<view class="messagespace">
			<remind v-if="ischecked"></remind>
			<letters v-if="!ischecked"></letters>
		</view>
	</view>
</template>

<script>
	import remind from "../../components/remind.vue"
	import letters from '../../components/letters.vue'
	export default{
		data(){
			return {
				ischecked:true
			}
		},
		methods:{
			changecheck(){
				this.ischecked=true
			},
			changecheck1(){
				this.ischecked=false
			}
		},
		components:{
			"remind":remind,
			"letters":letters
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #efefef;
		
	}
	.dian3{
		width: 34rpx;
		height: 24.24rpx;
		background-color: #ff6969;
		border-radius: 12rpx;
		position: fixed;
		left: 382rpx;
		top: 1122.06rpx;
		z-index: -1;
	}
	.nav{
		position: relative;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-end;
		border-bottom: 1rpx solid #efefef;
		background-color: #FFFFFF;
		.dian1,.dian2{
			font-family: PingFangSC-Semibold;
			font-size: 20rpx;
			color: #FFFFFF;
			letter-spacing: 0.03rpx;
			font-weight: 600;
			position: absolute;
			background-color: #ff6969;
			border-radius: 50rpx;
			line-height: 28rpx;
			text-align: center;
		}
		.dian1{
			top: 4rpx;
			left: 315rpx;
			width: 28rpx;
			height: 28rpx;
		}
		.dian2{
			width: 37rpx;
			height: 28rpx;
			border-radius: 14rpx;
			top: 4rpx;
			right: 218rpx;
		}
		.remind,.letters{
			text-align: center;
			font-family: PingFangSC-Medium;
			font-size: 30rpx;
			letter-spacing: 0;
			font-weight: 500;
			view{
				width: 100rpx;
				height: 6rpx;
				border-radius: 4rpx;
				margin-top: 12rpx;
			}
		}
		.remind{
			margin-right: 80rpx;
		}
		.checked{
			color: #81D195;
			view{
				background-color: #81D195;
			}
			
		}
		.uncheck{
			color: #3F3F3F;
		}
	}
	.messagespace{
		.nomessage{
			font-family: PingFangSC-Regular;
			font-size: 24rpx;
			color: #666666;
			letter-spacing: 0.04rpx;
			text-align: center;
			font-weight: 400;
			image{
				margin-top: 434rpx;
				margin-left: 300rpx;
				margin-bottom: 30rpx;
				width: 150rpx;
				height: 133rpx;
				display: block;
			}
		}
	}
</style>
