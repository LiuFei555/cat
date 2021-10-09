<template>
	<view>
		<view class="friends" v-for="(item,index) in myFriends" :key="item.id">
			<view>
				<view class="fri">
					<image :src='item.headImage' mode=""></image>
				</view>
				<text>{{item.name}}</text>
			</view>
			<view  @click="changeFocus(index)">
				<each-eonecrn v-if="!item.isEonecrn"></each-eonecrn>
				<focus-on v-if="item.isEonecrn"></focus-on>
			</view>
		</view>
	</view>
</template>

<script>
	import eonecrn from '../../components/eonecrn.vue'
	import focus from '../../components/focuson.vue'
	export default{
		data(){
			return {
				myFriends:[
				{id:1,name:'键盘冒奶',isEonecrn:true,headImage:"../../static/tabbar/personal_1.png"},
				{id:2,name:'来了来了',isEonecrn:true,headImage:"../../static/tabbar/personal_1.png"},
				{id:3,name:'无敌战士',isEonecrn:true,headImage:"../../static/tabbar/personal_1.png"},
				{id:4,name:'卡布奇诺',isEonecrn:false,headImage:'../../static/tabbar/personal_1.png'},
				{id:5,name:'绝念封尘',isEonecrn:false,headImage:'../../static/tabbar/personal_1.png'},
				{id:6,name:'狂风绝袭',isEonecrn:false,headImage:'../../static/tabbar/personal_1.png'},
				]
			}
		},
		methods:{
			changeFocus(index){
				this.myFriends[index].isEonecrn=!this.myFriends[index].isEonecrn,
				console.log(123)
			}
		},
		components:{
			"focus-on":focus,
		    "each-eonecrn":eonecrn
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #EFEFEF;
	}
	.friends{
		writing-mode: 750rpx;
		height: 146rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx 0 30rpx;
		border-bottom: 1px solid #EFEFEF;
		background-color: #FFFFFF;
		view{
			display: flex;
			align-items: center;
			.fri{
				width: 86rpx;
				height: 86rpx;
				margin-right: 20rpx;
				border-radius: 50%;
			    image{
					width: 86rpx;
					height: 86rpx;
				}
				text{
					font-family: PingFangSC-Medium;
					font-size: 30rpx;
					color: #000000;
					letter-spacing: 0.05rpx;
					font-weight: 500;
				}
			}
			
		}
	}
</style>
