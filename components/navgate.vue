<template>
	<view class="nav">
		<view class="navText" v-for="(item,index) in nav" :key="index" @click="jumpTo(item)">{{item.title}}
		<view class="navLine" ></view>
		</view>
	</view>
</template>

<script> 
   export default {
	   data(){
		   return{
			   nav: [
			   {title:'关注',path:'/pages/focus/focus', status:false},
			   {title:'推荐',path:'/pages/index/index', status:true},
			   {title:'科普',path:'/pages/popular/popular' ,status:false},
			   {title:'领养',path:'/pages/adopt/adopt', status:false}
			   ]
		   }
	   },
	   methods:{
		   jumpTo(item){
			   uni.navigateTo({
			   	url:item.path
			   })
		   }
	   }
   }
</script>

<style lang="scss">
	// 导航栏
	.nav {
		display: flex;
		justify-content: space-around;
		width: 750rpx;
		height: 90rpx;
	
		.navText {
			font-size: 30rpx;
			color: #3F3F3F;
			letter-spacing: 0;
			text-align: center;
			font-weight: 500;
			line-height: 90rpx;
		}
	
		.navText:nth-child(1) {
			margin-left: 30rpx;
		}
	
		.navText:nth-child(2) {
			color: $important-color;
			.navLine{
				background-color: #81D195;
			}
		}
	
		.navText:nth-child(4) {
			margin-right: 30rpx;
		}
		.navLine{
			width: 100rpx;
			height: 6.75rpx;
			border-radius: 4rpx;
		}
	}
</style>
