import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ToggleButton from 'vue-js-toggle-button'

import './scss/main.scss';
import'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.use(ToggleButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
