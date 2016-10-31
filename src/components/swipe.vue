<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
	<transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
		
		<mt-swipe :auto="4000">
			<mt-swipe-item class="slide1">1</mt-swipe-item>
			<mt-swipe-item class="slide2">2</mt-swipe-item>
			<mt-swipe-item class="slide3">3</mt-swipe-item>
		</mt-swipe>
	</transition>

</template>

<script>
	export default {

	}
</script>

<style lang="less" type="text/css">
	.mint-swipe {
		height: 200px;
		color: #fff;
		font-size: 30px;
		text-align: center;
		margin-bottom: 20px;
	}
	
	.mint-swipe-item {
		line-height: 200px;
	}
	
	.slide1 {
		background-color: #0089dc;
		color: #fff;
	}
	
	.slide2 {
		background-color: #ffd705;
		color: #000;
	}
	
	.slide3 {
		background-color: #ff2d4b;
		color: #fff;
	}
	
	.page-swipe-desc {
		text-align: center;
		color: #666;
		margin-bottom: 5px;
	}
</style>