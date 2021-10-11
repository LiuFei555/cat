<template>
		<view class="navigate">
			<view v-for="(tabs,index) in navs" :key="index" 
			:class="{'active':isActive(index),'disabled':tab.disabled}"
			@click="selected(index)">
					{{tabs}}
					<view class="">
					</view>
			</view>
		</view>
</template>

<script>
	export default {
		data(){
			return{
				mark:0,
				navs:['关注','推荐','科普','领养']
			}
		},
		methods:{
			isActive(index){
				return this.mark===index
			},
			selected(index){
				const tab = this.navs[index]
				if(!tab.isDisabled){
					this.mark=index;
				}
				this.$emit('changed',tab)
			},
			getInitialActiveTab() {
			    const index = this.tabList.findIndex(tab => tab.active);
			    return index === -1 ? 0 : index;
			}
		},
		 mounted() {
		    this.select(0);
		    this.activeTabIndex = this.getInitialActiveTab();
		    this.$root.$on('select-tab', index => this.select(index));
		},
	}
</script>

<style lang="scss" scoped>
	.navigate{
		height: 90rpx;
		display: flex;
		justify-content: space-around;
		padding-left: 99rpx;
		padding-right: 99rpx;
		align-items: flex-end;
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
