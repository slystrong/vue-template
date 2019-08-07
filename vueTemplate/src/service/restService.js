import axios from 'axios'
import Vue from 'vue'
import { Message } from 'element-ui' 
const BASE_URL = process.env.VUE_APP_API_URL
// 创建axios实例
const http = axios.create({
  baseURL: "",
  timeout: 120000 // 请求超时时间                     
})

// 添加request拦截器 
http.interceptors.request.use(
  function(config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    console.log("111", BASE_URL);
    return config
  }, 
  function(error){
    Promise.reject(error)
  })

// 添加respone拦截器
http.interceptors.response.use(
    function(response) {
        if(response.status && response.status == 200){
            return response.data;
        }
    },
    function(error){
        Message.error('请求失败!');
        return Promise.reject(error.response)
  }
)

let RestService = {
    get(url, data){
        return http({
            url:url,
            method: 'get',
            params: data,
            // cancelToken: new cancelToken(c=>{cancel=c;})
        })
        .then((response)=>{
            return response;
        })
        .catch((error)=>{
            console.log("get error" + error);
        })
    },
    post(url, data){
        return http({
            url:url,
            method: 'post',
            data: data,
            // cancelToken: new cancelToken(c=>{cancel=c;})
        })
        .then((response)=>{
            return response;
        })
        .catch((error)=>{
            console.log("get error" + error);
        })
    },
    cancelRequest(){
        return cancel();
    }
}

export default RestService;