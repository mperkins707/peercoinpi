import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // default settings
    settings: {
      chain: 'testnet',
      explorer: 'https://tblockbook.peercoin.net/',
      theme: 'dark'
    }
  },
  getters: {
    settings() {
      return this.state.settings;
    }
  },
  mutations: {
    SET_CHAIN(state, payload) {
      state.settings.chain = payload;
      localStorage.setItem('store', JSON.stringify(state));
    },
    SET_THEME(state, payload) {
      state.settings.theme = payload;
      localStorage.setItem('store', JSON.stringify(state));
    },
    SET_EXPLORER(state, payload) {
      state.settings.explorer = payload;
      localStorage.setItem('store', JSON.stringify(state));
    }
  },
  actions: {
  },
  modules: {
  }
})
