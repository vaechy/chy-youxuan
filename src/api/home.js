// import qs from 'qs'
// axios
// import request from '@/utils/request'
// home api
import axios from 'axios'
const getBannerData = function (getBannerData) {
  axios.get('http://127.0.0.1:8000/GetBannerData/getData').then(res => {
    getBannerData(res)
  })
}
export default {
  getBannerData
}
