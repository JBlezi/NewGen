import { createStore } from 'vuex';

export default createStore({
  state: {
    currentTheme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  },
  mutations: {
    SET_THEME(state, theme) {
      state.currentTheme = theme;
    }
  },
  actions: {
    setTheme({ commit }, theme) {
      commit('SET_THEME', theme);
    }
  },
  getters: {
    currentTheme: state => state.currentTheme
  }
});
