import state from './state.js';
//import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

const post = {
    namespaced: true,
    state,
    mutations,
    actions

};

export default post;
