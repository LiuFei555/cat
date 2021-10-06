<template>
	<view style="background-color: #F1F1F1">
		<!-- 导航区域 -->
		<nav-gate :nav="nav"></nav-gate>
		<my-dynamic></my-dynamic>
		<my-dynamic></my-dynamic>
		<my-dynamic></my-dynamic>
		<my-dynamic></my-dynamic>
		
	</view>
</template>

<script>
	import navgate from "../../components/navgate.vue"
	import dynamic from "../../components/dynamic.vue"
	export default {
		data() {
			return {
				
			}
		},
		components:{
			"nav-gate":navgate,
			"my-dynamic":dynamic
			},
		
	}
</script>

<style lang="scss">
	page{
		background-color: #FFFFFF;
	}

	
</style>
