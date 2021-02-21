// import axios from 'axios'
import service from '@/utils/request'
function getItem(getItem, index) {
  // axios.get(`http://10.10.10.158:30000/indexPage/item/${index}`).then(res => {
  //   getItem(res.data[0])
  // })
  service(
    {
      url: `/api/indexPage/item/${index}`,
      method: 'get'
    }
  ).then(res => {
    getItem(res[0])
  })
}

export default {
  getItem
}
