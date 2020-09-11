import api from '@/api/home'
const state = {
  BannerData: [],
  topNavOptions: [
    {
      name: '推荐',
      link: ''
    },
    {
      name: '居家生活',
      link: ''
    },
    {
      name: '服饰鞋包',
      link: ''
    },
    {
      name: '美食酒水',
      link: ''
    },
    {
      name: '个护清洁',
      link: ''
    },
    {
      name: '母婴亲子',
      link: ''
    },
    {
      name: '运动旅行',
      link: ''
    },
    {
      name: '数码家电',
      link: ''
    },
    {
      name: '礼品特色',
      link: ''
    }
  ]
}
const mutations = {
  setBannerData(state, data) {
    // const uri = `/banner`
    // return axios.get(uri)
    // console.log('home')
    state.BannerData = data
  }
}
const actions = {
  getBannerData({ commit }) {
    commit('setBannerData')
    api.getBannerData(function (data) { commit('setBannerData', data) })
  }
}
const getters = {
  BannerData: state => {
    return state.BannerData
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
