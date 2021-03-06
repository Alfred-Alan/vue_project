// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"

Vue.prototype.axios = axios
Vue.config.productionTip = false

import QS from 'qs'
Vue.prototype.qs = QS;

/*引入axios*/
import Axios from 'axios'
Vue.prototype.axios = Axios;

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
