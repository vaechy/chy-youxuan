// import qs from 'qs'
// axios
// import request from '@/utils/request'
// home api
import axios from 'axios'

function getBannerData(getBannerData) {
  axios.get('http://192.168.1.10:3000/banner').then(res => {
    getBannerData(res)
  })
}
function getChannelsList(getChannelsList) {
  axios.get('http://192.168.1.10:3000/indexPage/channels').then(res => {
    getChannelsList(res)
  })
}
export default {
  getBannerData,
  getChannelsList
}
