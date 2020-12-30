import api from '@/api/home'
const state = {
  BannerData: [],
  ChannelsList: [],
  hotProduct: {},
  endemic: {},
  arrival: [],
  goods: [],
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
  },
  setChannelsList(state, data) {
    state.ChannelsList = data
  },
  setHotProduct(state, data) {
    state.hotProduct = data
  },
  setEndemic(state, data) {
    state.endemic = data
  },
  setArrival(state, data) {
    state.arrival = data
  },
  setGoods(state, data) {
    state.goods = data
  }
}

const actions = {
  getBannerData({ commit }) {
    api.getBannerData(data => {
      commit('setBannerData', data)
    })
  },
  getChannelsList({ commit }) {
    api.getChannelsList(data => {
      commit('setChannelsList', data)
    })
  },
  getHotProduct({ commit }) {
    api.getHotProduct(data => {
      commit('setHotProduct', data)
    })
  },
  getEndemic({ commit }) {
    api.getEndemic(data => {
      commit('setEndemic', data)
    })
  },
  getArrival({ commit }) {
    api.getArrival(data => {
      commit('setArrival', data)
    })
  },
  getGoods({ commit }) {
    api.getGoods(data => {
      commit('setGoods', data)
    })
  }
}

const getters = {
  BannerData: state => {
    return state.BannerData
  },
  ChannelsList: state => {
    return state.ChannelsList
  },
  hotProduct: state => {
    return state.hotProduct
  },
  endemic: state => {
    return state.endemic
  },
  arrival: state => {
    return state.arrival
  },
  goods: state => {
    return state.goods
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
