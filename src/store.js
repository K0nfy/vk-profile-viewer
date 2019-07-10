import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserAuthorized: false,
    userId: null
  },
  mutations: {
    changeAuthState(state, payload) {
      state.isUserAuthorized = payload;
    },
    setUserId(state, payload) {
      state.userId = payload;
    }
  },
  actions: {

  }
})
