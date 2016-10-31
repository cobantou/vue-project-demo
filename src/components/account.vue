<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
	<div id="">
		<div>account</div>
		<anchored-heading :level="1">Hello world!</anchored-heading>
		<babel-anchored-heading :level="5">Hello world!</babel-anchored-heading>
	</div>

</template>

<script>
	import AnchoredHeading from "./anchoredHeading"
	import BabelAnchoredHeading from "./BabelAnchoredHeading"
	export default {
		components: {
			AnchoredHeading,
			BabelAnchoredHeading
		}
	}
</script>

<style lang="less" type="text/css">

</style>