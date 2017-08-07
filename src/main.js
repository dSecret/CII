import Vue from 'vue'
import App from './App.vue'
import svgg from './svg.vue'
import moment from 'moment'
import VueRouter from 'vue-router'
import Routes from './route.js'
import VueCookie from "vue-cookie"
import GSignInButton from 'vue-google-signin-button'
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource'
import VueMasonryPlugin from "vue-masonry"


import channelnav from './components/channelstemplates/channelnav.vue'
import channelhome from './components/channelstemplates/channelhome.vue'

import forms from './components/ciiservices/forms/forms.vue'
import postss from './components/ciiservices/postcomments/postfeed.vue'

Vue.component('svgg',svgg)
Vue.component('channelnav',channelnav);
Vue.component('channelhome',channelhome);
Vue.component('forms',forms);
Vue.component('postss',postss);

Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueMaterial);
Vue.use(GSignInButton);
Vue.use(VueResource);
Vue.use(VueMasonryPlugin);



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
Vue.material.registerTheme({
  teal: {
    primary: {
        color: 'lightgreen',
        hue: 500
    },
    accent: {
    color: 'grey',
    hue: 300
    }
  },
  blue: {
    primary: {
        color: 'blue',
        hue: 500
    },
    accent: {
    color: 'grey',
    hue: 300
    }
  }
})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router,
})
