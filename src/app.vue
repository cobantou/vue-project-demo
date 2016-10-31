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
		components: {
			AppHead,
			AppFoot,
			Swipe
		}
	}
</script>

<style lang="less" type="text/css">
	@import "https://unpkg.com/animate.css@3.5.1/animate.min.css";
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 50.5s
	}
	
	.fade-enter,
	.fade-leave-active {
		opacity: 0
	}
	
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	
	.slide-fade-enter,
	.slide-fade-leave-active {
		padding-left: 10px;
		opacity: 0;
	}
	.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
}
</style>