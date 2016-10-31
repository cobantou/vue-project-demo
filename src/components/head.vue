<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
	<header>
		<mt-header title="多个按钮超长的话会发生什么了">
			<a slot="left" @click="goBack">
				<mt-button icon="back">返回</mt-button>
			</a>
			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</header>

</template>

<script>
	export default {
		methods:{
			goBack(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style lang="less" type="text/css">

</style>