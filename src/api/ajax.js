import axios from 'axios'
//将post请求参数转为urlcold
import qs from 'qs'

import store from '../redux/store'

import { message } from 'antd'

//请求拦截器
axios.interceptors.request.use((config) => {
  let data = config.data
  if (data && data instanceof Object) {
    config.data = qs.stringify(data)
  }
  // 需要加入token 后才能使用
  // const token = store.getStat().user.token
  // if (token) {
  //   config.headres.authorization = 'Bearer ' + token
  // }
  return config
})
// //响应拦截器
axios.interceptors.response.use((response) => {
  return response.data
}, (error) => {
  message.error('未知错误' + error)
  //终止错误
  return new Promise(() => { })
})

export default axios
