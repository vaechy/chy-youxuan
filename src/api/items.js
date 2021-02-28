// import axios from 'axios'
import service from '@/utils/request'
function getItem(getItem, index) {
  service(
    {
      url: `/api/items/${index}`,
      method: 'get'
    }
  ).then(res => {
    getItem(res[0])
  })
}

export default {
  getItem
}
