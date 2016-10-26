<template>
	<div id="">
		<!--app-head: 小写，横线连接-->
		<app-head></app-head>
		<!--<swipe></swipe>-->
		<router-view></router-view>
		<app-foot></app-foot>
	</div>
</template>

<script>
//AppHead 首字母大写，驼峰；
import AppHead from './components/head';
import AppFoot from './components/foot';
import Swipe from './components/swipe';

  export default {
    name: 'app',
    components:{
    	AppHead,
    	AppFoot,
    	Swipe
    }
  }
</script>

<style lang="less" type="text/css">

</style>