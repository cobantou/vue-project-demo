<template>
	<footer id="">
		<mt-tabbar v-model="selected">
			<mt-tab-item id="home">
				<img slot="icon" src=""> 首页
			</mt-tab-item>
			<mt-tab-item id="loan">
				<img slot="icon" src=""> 投资理财
			</mt-tab-item>
			<mt-tab-item id="account">
				<img slot="icon" src=""> 我的账户
			</mt-tab-item>
			<mt-tab-item id="help">
				<img slot="icon" src=""> 帮助
			</mt-tab-item>
		</mt-tabbar>
	</footer>
</template>

<script>
	export default {
		data() {
			return {
				selected:""
			}
		}
	}
</script>

<style lang="less" type="text/css">

</style>