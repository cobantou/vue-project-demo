var path = require('path');
var cooking = require('cooking');

cooking.set({
  entry: {
    app: ['babel-polyfill', './src/main.js']
  },
  dist: './dist',
  template: './index.tpl',

  devServer: {
    port: 8888,
    publicPath: '/',
	secure:true,
	host: '172.168.200.56',
	proxy: {
        '/api/*': {
			target:'http://localhost:3000',
			secure:false,
			pathRewrite: {'^/api' : ''}
		}
    }
  },

  // production
  clean: true,
  hash: true,
  sourceMap: true,
  
  minimize: true,
  chunk: true, // see https://cookingjs.github.io/zh-cn/configuration.html#chunk
  postcss: [
    // require('...')
  ],
  publicPath: '/dist/',
  assetsPath: 'assets',
  urlLoaderLimit: 10000,
  extractCSS: '[name].[contenthash:7].css',
  alias: {
    'src': path.join(__dirname, 'src')
  },
  extends: ['vue2',  'less', 'autoprefixer']
});

module.exports = cooking.resolve();
