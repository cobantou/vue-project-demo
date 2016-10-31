<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
	<div class="">
		<mt-cell-swipe title="标题文字" :right="[
    {
      content: 'Delete',
      style: { background: 'red', color: '#fff' },
      handler: () => this.$messagebox('delete')
    }
  ]"></mt-cell-swipe>
		<mt-cell title="标题文字" value="说明文字"></mt-cell>
		<mt-cell title="标题文字"></mt-cell>
		<mt-cell title="标题文字" to="/github.com" is-link value="带链接">
		</mt-cell>
		<mt-cell title="标题文字" is-link>
			<span style="color: green">这里是元素</span>
		</mt-cell>
		<mt-cell title="标题" label="描述信息" is-link></mt-cell>
	</div>
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