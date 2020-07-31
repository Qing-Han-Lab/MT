/*
 * @Author: your name
 * @Date: 2020-05-25 15:29:24
 * @LastEditTime: 2020-06-10 17:54:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components/components'
import  commen from './utils/commen'
import http from './utils/http'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import api from './api/api'
import { InfiniteScroll } from 'mint-ui';
import 'mint-ui/lib/style.css'
import { DropdownMenu, DropdownItem,Toast,Area } from 'vant';
import 'vant/lib/index.css';


Vue.use(commen)
Vue.use(InfiniteScroll);
Vue.prototype.$http = http;
Vue.use(VueAwesomeSwiper)
Vue.prototype.api = api;
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Area);
Vue.use(Toast);
Vue.prototype.$toast = Toast;


Vue.directive('warn', {
  inserted(el,bind) {
      el.style.color = bind.value;
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
