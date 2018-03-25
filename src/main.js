// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import LicaiPage from './pages/licai'
import BaitiaoPage from './pages/baitiao'
import ZhongchouPage from './pages/zhongchou'
import Vuex from 'vuex'

import './common/index.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)

let router = new VueRouter({
	// mode: 'history',
	routes: [
	  {path:'/',component: IndexPage},
	  {path:'/index',component: IndexPage},
	  {path:'/licai',component: LicaiPage},
	  {path:'/baitiao',component: BaitiaoPage},
	  {path:'/zhongchou',component: ZhongchouPage}
	]
})

// const store = new  Vuex.Store({
// 	state:{
//        params:{},
//        orderList:[]
// 	},
// 	getters:{

// 	},
// 	mutations:{
//        updateParams (state, {key,val}){
//           state.params[key] = val;
//        },
//        updateOrderList(state,payload){
//        	  state.orderList = payload;
//        }
// 	},
// 	actions:{
// 		getOrderList(state){
// 			Vue.http.post('./api/getOrderList', state.params)
//             .then((res) => {
//               this.commit('updateOrderList',res.data.list)
//             },(err) => {
     
//             })
// 		}
// 	}
// })


//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
