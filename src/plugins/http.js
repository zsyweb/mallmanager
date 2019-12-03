import axios from 'axios'

const MyHttpServer = {}
MyHttpServer.install = (Vue) => {
  // 添加基准地址
  axios.defaults.baseURL = 'http://39.108.193.251:8811/api/private/v1/'
  // 添加实例方法
  Vue.prototype.$http = axios
}
export default MyHttpServer
