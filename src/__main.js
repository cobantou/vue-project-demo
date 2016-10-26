import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './app';

Vue.use(Vuex);
Vue.use(VueRouter);


//这个干也是有效的，但不要这么干，css之类的样式文件请在style里面引入
//但是如何引入全局css了？
//import less from './static/less/commonInline.less'

//Vue.component("child",{
//	template:"<p>It's a child component</p>"
//})
//

//// 注册
//var Mycpt = Vue.component('my-component', {
//template: '<div>A custom component!</div>'
//})
//var todoComponent = Vue.extend({
// 	template: '<li>This is a todo</li>'
//})

var appVm = new Vue({ // eslint-disable-line
	el: '#app',
	render: h => h(App,[ h(Mycpt)])
});

//var todoVm = new Vue({
//	el:"#todo",
//	data:{
//		message:"It's a todo list"
//	}
//})
//
