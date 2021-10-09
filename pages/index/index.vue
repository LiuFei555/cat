<template>
	<view style="background-color: #F1F1F1">
		<!-- 导航区域 -->
		<view class="navigate">
			<view class="focus" :class="[hello1]" @click.stop.prevent="check1">关注
			      <view class="niv1"></view>
			</view>
			<view class="tuijian" :class="[hello2]" @click.stop.prevent="check2">推荐
			    <view class="niv2"></view>
			</view>
			<view class="popular" :class="[hello3]" @click.stop.prevent="check3">科普
			    <view class="niv3"></view>
			</view>
			<view class="adopt" :class="[hello4]" @click.stop.prevent="check4">领养
			    <view class="niv4"></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hello1:'checked',
				hello2:'',
				hello3:'',
				hello4:''
			}
		},
		methods:{
			check1(){
				this.hello1='checked';
				this.hello2='',
				this.hello3='',
				this.hello4=''
			},
			check2(){
				this.hello2='checked';
				this.hello1='',
				this.hello3='',
				this.hello4=''
			},
			check3(){
				this.hello3='checked';
				this.hello2='',
				this.hello1='',
				this.hello4=''
			},
			check4(){
				this.hello4='checked';
				this.hello2='',
				this.hello3='',
				this.hello1=''
			}
		},
		components:{
			
			},
		
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}
    .navigate{
		height: 90rpx;
		display: flex;
		justify-content: space-between;
		padding-left: 99rpx;
		padding-right: 99rpx;
		align-items: flex-end;
		.checked{
			color: #81D195;
			view{
				background-color: #81D195;
			}
		}
		view{
			text-align: center;
			font-family: PingFangSC-Medium;
			font-size: 30rpx;
			color: #3F3F3F;
			letter-spacing: 0;
			font-weight: 500;
			view{
				width: 100rpx;
				height: 6rpx;
				border-radius: 4rpx;
				margin-top: 16.13rpx;
			}
		}
	}
	
</style>
