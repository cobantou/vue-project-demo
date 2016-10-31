<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
	<div>
		<mt-cell mt="mt1" v-for="n in 10" title="标题文字" :to="'/loan/detail/'+n+'?n='+n" is-link value="带链接">
		</mt-cell>
	</div>
</template>

<script>
	export default {
		beforeRouteEnter(to, from, next) {
				console.info("|beforeRouteEnter:list");
				next(vm => {
					console.log("vm->" + vm.$el);
				})
			},
			beforeRouteLeave(to, from, next) {
				console.info("|beforeRouteLeave:list");
				console.log("to-->" + to.fullPath);
				console.log("from-->" + from.fullPath);
				console.log("this->" + this.$el);
				next();

			}
	}
</script>

<style lang="less" type="text/css">

</style>