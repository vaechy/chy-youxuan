import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import home from './modules/home'
import items from './modules/items'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    home,
    items
  },
  getters
})

export default store
