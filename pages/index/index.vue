<template>
	<view style="background-color: #F1F1F1">
		<!-- 导航区域 -->
		<my-nav></my-nav>
		<!-- 关注 -->
		<my-guanzhu></my-guanzhu>
	</view>
	
</template>

<script>
	import navs from '../../components/navs.vue'
	import guanzhu from '../../components/guanzhu.vue'
	export default {
		data() {
			return {
			}
		},
		methods:{
			
		},
		components:{
			"my-nav":navs,
			"my-guanzhu":guanzhu
			},
		
	}
</script>

<style lang="scss">
	
</style>
