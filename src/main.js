import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

//用mint只是做个demo，实际项目不一定用这个，还不是很完善
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import routes from './routers/index'
import App from './app';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MintUI);

//const router = new VueRouter({
//hashbang: true,
//history: false
//})
//route(router)

const router = new VueRouter({
	mode: "hash",
	routes, // （缩写）相当于 routes: routes
	scrollBehavior(to, from, savedPosition) {
		if(savedPosition) {
			return savedPosition
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
});

//注册路由切换前
router.beforeEach((to, from, next) => {
	//      transition.next();
	console.info("|beforeEach");
	console.log("app->"+router.app);
	console.log("mode->"+router.mode);
	if(router.currentRoute){
		console.log("currentRoute->"+router.currentRoute.fullPath);
	}
	next()
});

var appVm = new Vue({ // eslint-disable-line
	render: h => h(App),
	router: router,

}).$mount("#app");