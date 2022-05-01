
import 'babel-polyfill';
import Vue from "vue";
import './plugins/fontawesome'
import './plugins/fontawesome'
import App from "./App.vue";

import './styles/main.css';

import Box from './componets/Box.vue';
Vue.component('Box', Box);

import router from './router.js'
Vue.config.productionTip = false;
new Vue({
  router,
  render: function (h) { return h(App); }
}).$mount("#app");
