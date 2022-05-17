import Vue from 'vue';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'
import App from './App.vue';
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

if (process.env.NODE_ENV == 'development') { require('./mock'); }

Vue.use(ElementUI);
Vue.use(VueAxios, axios);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});