import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isUserAuthorized: false,
    currentUserId: null,
    favourites: {}
  },
  mutations: {
    changeAuthState(state, isAuthed) {
      state.isUserAuthorized = isAuthed;
    },
    setCurrentUserId(state, id) {
      state.currentUserId = id;
    },
    addFavUser(state, id) {
      state.favourites[id] = true;
    },
    removeFavUser(state, id) {
      delete state.favourites[id];
    }
  },
  getters: {
    getCurrentUserId(state) {
      return state.currentUserId;
    },
    getFavsObj(state) {
      return state.favourites;
    }
  }
})
