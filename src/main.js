import Vue from 'vue'
import App from './App.vue'
const svgg=()=>import('./svg.vue')
const moment=()=>import('moment')
import VueRouter from 'vue-router'
import Routes from './route.js'
const  VueCookie =()=>import("vue-cookie")
const GSignInButton=()=>import('vue-google-signin-button')
import VueMaterial from 'vue-material'
const VueResource=()=>import('vue-resource')
const VueMasonryPlugin =()=>import("vue-masonry")
//import VueForm from 'vue-form';


import {store} from './store/store.js'

import channelnav from './components/channelstemplates/channelnav.vue'
const channelhome =()=>import('./components/channelstemplates/channelhome.vue')

const polls =()=>import('./components/ciiservices/poll/polls.vue')
const forms =()=>import('./components/ciiservices/forms/forms.vue')
const postss =()=>import('./components/ciiservices/postcomments/postfeed.vue')



Vue.component('svgg',svgg)
Vue.component('channelnav',channelnav);
Vue.component('channelhome',channelhome);
Vue.component('forms',forms);
Vue.component('postss',postss);
Vue.component('polls',polls);





Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueMaterial)
Vue.use(GSignInButton);
Vue.use(VueResource);
Vue.use(VueMasonryPlugin);
//Vue.use(VueForm);
//Vue.use(VueForm, options);


// Importing from vue-material
// Vue.use(VueMaterial.MdCore) //Required to boot vue material
// Vue.use(VueMaterial.MdButton)
// Vue.use(VueMaterial.MdIcon)
// Vue.use(VueMaterial.MdSidenav)
// Vue.use(VueMaterial.MdToolbar)
// Vue.use(VueMaterial.MdCard)
// Vue.use(VueMaterial.MdChips)
// Vue.use(VueMaterial.MdDialog)
// Vue.use(VueMaterial.MdFile)
// // Vue.use(VueMaterial.MdinkRipple)
// // Vue.use(VueMaterial.MdInput)
// Vue.use(VueMaterial.MdList)
// Vue.use(VueMaterial.MdMenu)
// Vue.use(VueMaterial.MdOnboarding)
// Vue.use(VueMaterial.MdRadio)
// Vue.use(VueMaterial.MdSelect)
// Vue.use(VueMaterial.MdSpinner)
// Vue.use(VueMaterial.MdSubheader)
// Vue.use(VueMaterial.MdTabs)
// Vue.use(VueMaterial.MdTable)
// Vue.use(VueMaterial.MdToolbar)



const router =new VueRouter({
  routes:Routes,
  /*mode:'history'*/
});
router.beforeEach((to, from,next) => {
  // This fires after each route is entered.
     var string =to.path
     var   substring = "admin";
     var check= string.includes(substring)

      if(check){
        next('/')
      }
      else next()
})



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
