
import 'babel-polyfill';
import Vue from "vue";
import './plugins/fontawesome'
import './plugins/fontawesome'
import App from "./App.vue";

// import styles
import './styles/main.css';
import './styles/media.css';
import './styles/style_black.css';
import './styles/style_apache.css';
import './styles/style_colorfull.css';
import './styles/style_simple.css';
import './styles/style_green.css';
import './styles/print.css';

import Box from './componets/Box.vue';
Vue.component('Box', Box);

import router from './router.js'
Vue.config.productionTip = false;
new Vue({
  router,
  render: function (h) { return h(App); }
}).$mount("#app");
