<template>
	<view class="logo_body">
		<!-- 登录logo -->
		<view class="logo">
		</view>
		<text class="title">
			小猫社区
		</text>
		<!-- 登录按钮 -->
		<button class="btu_login" @click="login">微信登录</button>
		<!--单选与同意协议 -->
		<view class="protocol">
			<label class="radio">
				<radio :checked="checked" />
				我已阅读并同意<span @click.stop.prevent="toTerms">《使用条款》</span>和<span @click.stop.prevent="toPolicy">《隐私政策》</span>
			</label>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			login(){
				uni.switchTab({
					url:'../personal/personal'
				})
			},
			toTerms(){
				uni.navigateTo({
					url:'../useTrems/Trems'
				})
			},
			toPolicy(){
				uni.navigateTo({
					url:'../useTrems/Trems'
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.logo{
		width: 180rpx;
		height: 180rpx;
		background: #7DD092;
		border-radius: 39.9rpx;
		margin-top: 273rpx;
		margin-left: 285rpx;
		margin-bottom: 30rpx;
	}
	.title{
		width: 161rpx;
		height: 56rpx;
		margin-left: 294rpx;
		font-family: PingFangSC-Medium;
		font-size: 40rpx;
		color: #3F3F3F;
		letter-spacing: 0.07rpx;
		font-weight: 500;
	}
	.btu_login{
		background: #7DD092;
		border-radius: 50rpx;
		width: 400rpx;
		height: 100rpx;
		margin-left: 174rpx;
		margin-top: 204rpx;
		color: #FFFFFF;
		font-family: PingFangSC-Medium;
		font-size: 37rpx;
		letter-spacing: 0;
		text-align: center;
		font-weight: 500;
	}
	.protocol{
		font-family: PingFangSC-Regular;
		font-size: 20rpx;
		color: #3F3F3F;
		letter-spacing: 0.03rpx;
		font-weight: 400;
		margin-left: 153rpx;
		margin-top: 60rpx;
		radio{
			 transform: scale(0.6);
		}
		span{
			border-bottom: 1px solid #333333;
		}
	}
</style>
