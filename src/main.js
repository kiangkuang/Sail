import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

import App from './App.vue'
import Home from './Home.vue'
import Intelligence from './Intelligence.vue'
import Messenger from './Messenger.vue'

import 'vuetify/dist/vuetify.min.css'

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
{ path: '/', component: Home },
{ path: '/Home', component: Home },
{ path: '/intelligence', component: Intelligence },
{ path: '/email', component: Intelligence },
{ path: '/messenger', component: Messenger },
];

const router = new VueRouter({routes});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
