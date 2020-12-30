// import qs from 'qs'
// axios
// import request from '@/utils/request'
// home api
import axios from 'axios'

function getBannerData(getBannerData) {
  axios.get('http://10.10.10.158:3000/banner').then(res => {
    getBannerData(res.data)
  })
}
function getChannelsList(getChannelsList) {
  axios.get('http://10.10.10.158:3000/indexPage/channels').then(res => {
    getChannelsList(res.data)
  })
}
function getHotProduct(getHotProduct) {
  axios.get('http://10.10.10.158:3000/indexPage/hotproduct').then(res => {
    // console.log(res.data)
    getHotProduct(res.data[0])
  })
}
function getEndemic(getEndemic) {
  axios.get('http://10.10.10.158:3000/indexPage/endemic').then(res => {
    // console.log(res.data)
    getEndemic(res.data[0])
  })
}

function getArrival(getArrival) {
  axios.get('http://10.10.10.158:3000/indexPage/arrival').then(res => {
    // console.log(res.data)
    getArrival(res.data)
  })
}

function getGoods(getCategoryGoods) {
  axios.get('http://10.10.10.158:3000/indexPage/categorygoods').then(res => {
    // console.log(res.data)
    getCategoryGoods(res.data)
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
