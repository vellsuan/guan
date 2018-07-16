import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import createPersistedState from 'vuex-persistedstate'
localStorage.state = JSON.stringify(state)
Vue.use(Vuex)
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createPersistedState()]
})
