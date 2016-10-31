
	//路由表
	const routes = [
		//默认
		{
			path: '/',
			name: 'index',
//			redirect:"/home",
			component: resolve=> {
				return require(['../components/swipe'], resolve)
			}

		},
		//首页
		{
			path: '/index',
			alias:"/home",
			name: 'index',
			component: resolve=> {
				return require(['../components/swipe'], resolve)
			},
			beforeEnter:(to,from,next)=>{
				console.info("|beforeEnter:index");
				next()
			}
		},
		//投资列表
		{
			path: '/loan',
			name: 'loan',
			component: resolve=> {
				return require(['../components/loan/list'], resolve)
			}
		},
		//投资详情
		{
			path: '/loan/detail/:id',
			name: 'loandetail',
			component: resolve=> {
				return require(['../components/loan/detail'], resolve)
			}
		},
		//账户
		{
			path: '/account',
			name: 'account',
			component: resolve=> {
				return require(['../components/account'], resolve)
			}
		},
		//帮助
		{
			path: '/help',
			name: 'help',
			component: resolve=> {
				return require(['../components/help'], resolve)
			}
		},

	];
	
	export default routes;
	
	//  //默认List主页
	//  router.redirect({
	//      '/':"/home"
	//  });
	//
	//
	 
	//
	//
	//  //注册路由切换后
	//  router.afterEach(function (transition) {
	//      //console.log('成功浏览到: ' + transition.to.path)
	//  });

