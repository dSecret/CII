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
import VueForm from 'vue-form';


import {store} from './store/store.js'

import channelnav from './components/channelstemplates/channelnav.vue'
import channelhome from './components/channelstemplates/channelhome.vue'

import polls from './components/ciiservices/poll/polls.vue'
import forms from './components/ciiservices/forms/forms.vue'
import postss from './components/ciiservices/postcomments/postfeed.vue'



Vue.component('svgg',svgg)
Vue.component('channelnav',channelnav);
Vue.component('channelhome',channelhome);
Vue.component('forms',forms);
Vue.component('postss',postss);
Vue.component('polls',polls);



var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo, {
     container: "#scrolldiv",
     duration: 500,
     easing: "ease",
     offset: 0,
     cancelable: true,
     onDone: false,
     onCancel: false
 })

Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueMaterial);
Vue.use(GSignInButton);
Vue.use(VueResource);
Vue.use(VueMasonryPlugin);
Vue.use(VueForm);
//Vue.use(VueForm, options);


const router =new VueRouter({
  routes:Routes,
  /*mode:'history'*/
});
Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).startOf('minutes').fromNow();
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
  store:store
})
