import api from '@/api/items'
const state = {
  itemData: {}
}
const getters = {
  itemData: state => {
    return state.itemData
  }
}
const actions = {
  getItem({ commit }, index) {
    api.getItem(data => { commit('setItem', data) }, index)
  }
}
const mutations = {
  setItem(state, data) {
    state.itemData = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
