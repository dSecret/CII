import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import VueRouter from 'vue-router'
import Routes from './route.js'
import VueCookie from "vue-cookie"
import GSignInButton from 'vue-google-signin-button'
import VueMaterial from 'vue-material'

import channeltemp from './components/channelstemplates/channeltemp.vue'
Vue.component('channeltemp',channeltemp);

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueMaterial);
Vue.use(GSignInButton);

const router =new VueRouter({
  routes:Routes,
  /*mode:'history'*/
});
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY ')
}
});
Vue.prototype.moment = moment

new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
