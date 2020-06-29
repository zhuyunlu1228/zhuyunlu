import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'

import modules from './modules'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'


Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})