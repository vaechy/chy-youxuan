import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    home
  },
  getters
})

export default store
