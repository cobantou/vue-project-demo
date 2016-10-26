<template>
  <div class="highlight">
    <h1>my-project</h1>
    <p class="txt">A {{message|capitalize}} project.</p>
    <p v-html="pHtml" v-bind:id="dynamicId" v-bind:disabled="1==1"></p>
    <p v-if="1==2">doesn't show'</p>
    <p v-if="1==1">show'</p>
    <a v-bind:href="url" v-bind:x="url" :y="url" v-on:click="doSomething" @click="atclick">url button</a>
    <p>{{reversedMessage}}</p>
   	<child></child>
  </div>
</template>

<script>
//这个干也是有效的，但不要这么干，css之类的样式文件请在style里面引入
//import less from './static/less/somePluginInline.less'


  export default {
    name: 'app',
    data (){
    	return {
    		message:"vue2 ",
    		pHtml:"<button>htmlButton</button>",
    		dynamicId:"whatId",
    		url:"javascript:;"
    	}
    },
    filters: {
	    capitalize: function (value) {
	      if (!value) return ''
	      value = value.toString()
	      return value.charAt(0).toUpperCase() + value.slice(1)
	    }
	  },
	  methods:{
	  	doSomething:function(){
	  		console.log("dosomething...")
	  	},
	  	atclick:function(){
	  		console.log("@click...")
	  	}
	  },
	  computed:{
	  	reversedMessage: function () {
	      // `this` points to the vm instance
	      return this.message.split('').reverse().join('')
	    }
	  }
  };
</script>

<style lang="less" type="text/css">
@import './static/less/somePlugin.less';

	.highlight{
		.txt{
			color: #ee7700;
		}		
	}
</style>