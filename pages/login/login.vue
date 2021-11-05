<template>
	<view class="logo_body">
		<!-- 登录logo -->
		<view class="logo">
			<image :src="headimage" mode=""></image>
		</view>
		<text class="title">
			小猫社区
		</text>
		<!-- 登录按钮 -->
		<button class="btu_login" @tap="login">微信登录</button>
		<!--单选与同意协议 -->
		<radio-group name="">
			<view class="protocol" >
			<label class="radio" >
				<radio   v-model="ischecked" @click="changechecked"/>
				我已阅读并同意<span @click.stop.prevent="toTerms">《使用条款》</span>和<span @click.stop.prevent="toPolicy">《隐私政策》</span>
				</radio>
			</label>
		</view>
		</radio-group>
	</view>
</template>

<script>
	import {
		login
	} from "../../api/user.js"
	export default {
		data(){
			return{
				ischecked:false,
				headimage:""
			}
		},
		methods:{
			changechecked(){
				this.ischecked = !this.ischecked
			},
			login(){
				if (this.ischecked) {
					// uni.switchTab({
					// 	url:'/pages/personal/personal'
					// })
					//跳出用户授权窗口，获取用户授权
					uni.getUserProfile({
						desc: '用于系统展示',
						//用户点击了允许，拿到了用户信息
						success: (profileRes) => {
							uni.login({
								//登录服务提供商，这里是微信
								provider:'weixin',
								success:(res)=>{
									uni.showLoading({
										title:'登录中',
										
									})
									let code = res.code
									let userInfo = profileRes.userInfo
									console.log(userInfo)
									// console.log(loginRes)
									// let res =login({
									// 	code: loginRes.code,
									// 	userInfo: profileRes.userInfo,
									// })
									
									// 缓存数据
									// uni.setStorageSync('token', res.token);
									// uni.setStorageSync('userId', res.data.userId);
									// uni.setStorageSync('userInfo', profileRes.userInfo);
									// console.log(uni.getStorageSync('userInfo'))
									//发送请求
									uni.request({
										url:'http://140.143.185.219:8082/wx/user/wxLogin',
										method:'POST',
										data:{
											code:code,
											userInfo:userInfo
										},
										success:(res2)=>{
											console.log(res2)
											uni.showLoading({
												title:'登录成功',
												
											})
											uni.hideLoading()
											this.headimage=userInfo.avatarUrl
											uni.switchTab({
												url:'/pages/personal/personal'
											})
										}
									})
								}
							});
						},
						fail: (err) => {
							console.log('登录失败', err)
						}
					})
				} else {
					
				}
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
		image{
			width: 180rpx;
			height: 180rpx;
			
			border-radius: 39.9rpx;
		}
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
