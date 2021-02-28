import service from '@/utils/request'
function getBannerData(getBannerData) {
  service(
    {
      url: '/api/indexPage/banner',
      method: 'get'
    }
  ).then(res => {
    getBannerData(res)
  })
}
function getChannelsList(getChannelsList) {
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
  service(
    {
      url: '/api/indexPage/hotproduct',
      method: 'get'
    }
  ).then(res => {
    getHotProduct(res)
  })
}
function getEndemic(getEndemic) {
  service(
    {
      url: '/api/indexPage/endemic',
      method: 'get'
    }
  ).then(res => {
    getEndemic(res)
  })
}

function getArrival(getArrival) {
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
