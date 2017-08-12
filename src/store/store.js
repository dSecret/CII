import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import adminpanel from './modules/adminpanel/store.js'

export const store= new Vuex.Store({
   modules: {
        adminpanel:adminpanel
    },
    state:{
    }
})
