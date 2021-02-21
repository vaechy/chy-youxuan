// import qs from 'qs'
// axios
// import request from '@/utils/request'
// home api
// import axios from 'axios'
import service from '@/utils/request'
function getBannerData(getBannerData) {
  // axios.get('http://192.168.1.10:30000/banner').then(res => {
  //   getBannerData(res.data)
  // })
  service(
    {
      url: '/api/banner',
      method: 'get'
    }
  ).then(res => {
    getBannerData(res)
  })
}
function getChannelsList(getChannelsList) {
  // axios.get('http://10.10.10.158:30000/indexPage/channels').then(res => {
  //   getChannelsList(res.data)
  // })
  service(
    {
      url: '/api/indexPage/channels',
      method: 'get'
    }
  ).then(res => {
    getChannelsList(res)
  })
}
function getHotProduct(getHotProduct) {
  // axios.get('http://10.10.10.158:30000/indexPage/hotproduct').then(res => {
  //   // console.log(res.data)
  //   getHotProduct(res.data[0])
  // })
  service(
    {
      url: '/api/indexPage/hotproduct',
      method: 'get'
    }
  ).then(res => {
    getHotProduct(res[0])
  })
}
function getEndemic(getEndemic) {
  // axios.get('http://10.10.10.158:30000/indexPage/endemic').then(res => {
  //   // console.log(res.data)
  //   getEndemic(res.data[0])
  // })
  service(
    {
      url: '/api/indexPage/endemic',
      method: 'get'
    }
  ).then(res => {
    getEndemic(res[0])
  })
}

function getArrival(getArrival) {
  // axios.get('http://10.10.10.158:30000/indexPage/arrival').then(res => {
  //   // console.log(res.data)
  //   getArrival(res.data)
  // })
  service(
    {
      url: '/api/indexPage/arrival',
      method: 'get'
    }
  ).then(res => {
    getArrival(res)
  })
}

function getGoods(getCategoryGoods) {
  // axios.get('http://10.10.10.158:30000/indexPage/categorygoods').then(res => {
  //   // console.log(res.data)
  //   getCategoryGoods(res.data)
  // })
  service(
    {
      url: '/api/indexPage/categorygoods',
      method: 'get'
    }
  ).then(res => {
    getCategoryGoods(res)
  })
}

export default {
  getBannerData,
  getChannelsList,
  getHotProduct,
  getEndemic,
  getArrival,
  getGoods
}
