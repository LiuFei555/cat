<template>
	<view>
		<!-- 导航区域 -->
		<view class="navigate">
			<view v-for="(tabs,index) in navs" :key="index" 
			    :class="active===index?'active':''"
				@click="selected(index)"
			>
					{{tabs}}
					<view class="">
					</view>
			</view>
		</view>
		<!-- 关注 -->
		<my-focus v-if="active==0"></my-focus>
		<my-guanzhu v-if="active==1"></my-guanzhu>
		<my-popular v-if="active==2"></my-popular>
	</view>
	
</template>

<script>
	import indexfocus from "../../components/indexfocus.vue"
	import popular from '../../components/popular.vue'
	import guanzhu from '../../components/guanzhu.vue'
	export default {
		data() {
			return {
				active:1,
				navs:['关注','推荐','科普','领养']
			}
		},
		methods:{
			selected(index){
				this.active=index
			}
		},
		components:{
			"my-guanzhu":guanzhu,
			"my-popular":popular,
			"my-focus":indexfocus
			},
		
	}
</script>

<style lang="scss">
	.navigate{
		height: 90rpx;
		display: flex;
		justify-content: space-around;
		padding-left: 99rpx;
		padding-right: 99rpx;
		align-items: flex-end;
		border-bottom: 1rpx solid #cacaca;
		.active{
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
