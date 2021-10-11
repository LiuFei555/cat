import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	beforeCreate(){
		Vue.prototype.$bus=this
	},
    ...App
})
app.$mount()
