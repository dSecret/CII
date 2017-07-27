import Vue from 'vue'
import App from './App.vue'
import svgg from './svg.vue'
import VueResource from 'vue-resource'
import moment from 'moment'
import VueRouter from 'vue-router'
import Routes from './route.js'
import VueCookie from "vue-cookie"
import GSignInButton from 'vue-google-signin-button'
import VueMaterial from 'vue-material'
import channelnav from './components/channelstemplates/channelnav.vue'
import channelhome from './components/channelstemplates/channelhome.vue'

Vue.component('svgg',svgg)
Vue.component('channelnav',channelnav);
Vue.component('channelhome',channelhome);

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
