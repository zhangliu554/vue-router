import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import userStore from './user/user-info'
import * as getters from './getters'
export default new Vuex.Store({
  state: {
    themeColor: '',
    noHasBreadcrumb: false
  },
  mutations: {
    setThemeColor(state, value) {
      state.themeColor = value
    },
    setNoHasBreadcrumb(state, value) {
      state.noHasBreadcrumb = value
    }
  },
  actions: {},
  modules: {
    userStore
  },
  getters: getters
})
