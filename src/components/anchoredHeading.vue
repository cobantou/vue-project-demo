<!--<template>
	<!--template里面必须要有一个根元素，但不一定是div-->
<!--<div>account</div>
	<anchored-heading :level="1">Hello world!</anchored-heading>-->

</template>-->

<script>
	export default {
		render: function(createElement) {
			return createElement(
				'h' + this.level, // tag name 标签名称
				{
					// 和`v-bind:class`一样的 API
					'class': {
						foo: true,
						bar: false
					},
					// 和`v-bind:style`一样的 API
					style: {
						color: 'red',
						fontSize: '14px'
					},
					// 正常的 HTML 特性
					attrs: {
						id: 'foo'
					},
					// 组件 props
					props: {
						myProp: 'bar'
					},
					
				},
				// 子组件中的阵列
				[
					this.$slots.default,
					createElement('h1', {domProps: {innerHTML: 'child h1'}}),
					createElement('h2', "child h2"),
					'bar'
				]
			)
		},
		props: {
			level: {
				type: Number,
				required: true
			}
		}
	}
</script>

<style lang="less" type="text/css">

</style>