// import api from './index'
import service from '@/utils/request'
// axios
// 注册
export function register(data) {
  return service.request({
    url: '/api/user/register',
    method: 'post',
    data
  })
}
// 登陆
export function login(data) {
  return service.request({
    url: '/api/user/login',
    method: 'post',
    data
  })
}
