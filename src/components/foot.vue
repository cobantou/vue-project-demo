<template>
	<footer id="">
		<mt-tabbar v-model="selected"> 
			<mt-tab-item id="/home" >
				<img slot="icon" src=""> 首页
			</mt-tab-item>
			<mt-tab-item id="/loan" >
				<img slot="icon" src=""> 投资理财
			</mt-tab-item>
			<mt-tab-item id="/account" >
				<img slot="icon" src=""> 我的账户
			</mt-tab-item>
			<mt-tab-item id="/help" >
				<img slot="icon" src=""> 帮助
			</mt-tab-item>
		</mt-tabbar>
	</footer>
</template>

<script>
//import store from '../vuex/index'
//import * as types from '../vuex/mutation-types'

	export default {
		data() {
			return {
				selected:""
			}
		},
		watch:{
			 selected(val,oldVal){
			 	this.$router.push(val)
			 },
			 '$route'(to,from){
			 	console.info("|watching:")
				console.log("to-->"+to.fullPath);
				console.log("from-->"+from.fullPath)
			}
		},
		
	}
</script>

<style lang="less" type="text/css">

</style>