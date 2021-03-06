import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import electron from 'vue-electron';
import vContextMenu from '@/basic/v-contextMenu/v-contextMenu.vue';

declare var process: any;

if (!process.env.IS_WEB) Vue.use(electron)
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App, vContextMenu },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
