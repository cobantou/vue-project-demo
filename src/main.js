import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

//用mint只是做个demo，实际项目不一定用这个，还不是很完善
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import router from './routers/index'
import App from './app';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(MintUI);

const router = new VueRouter({
  hashbang: true,
  history: false
})
route(router)


var appVm = new Vue({ // eslint-disable-line
	el: '#app',
	render: h => h(App)
});

