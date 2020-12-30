import axios from 'axios'

function getItem(getItem, index) {
  axios.get(`http://10.10.10.158:3000/indexPage/item/${index}`).then(res => {
    getItem(res.data[0])
  })
}

export default {
  getItem
}
