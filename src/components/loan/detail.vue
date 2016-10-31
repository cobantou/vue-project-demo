<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
	<div>
		<h1>details page</h1>
		<p>path:{{$route.path}}</p>
		<p>params:{{$route.params}}</p>
		<p>query:{{$route.query}}</p>
		<p>hash:{{$route.hash}}</p>
		<p>fullpath:{{$route.fullPath}}</p>
		<p>matched:{{$route.matched}}</p>
		<p>name:{{$route.name}}</p>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="less" type="text/css">

</style>