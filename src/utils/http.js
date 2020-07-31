/*
 * @Author: your name
 * @Date: 2020-05-25 15:58:03
 * @LastEditTime: 2020-06-04 15:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/utils/http.js
 */

import axios from 'axios'


axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers.name = 'ych';
  let vuex = window.localStorage.getItem('vuex');
  if(vuex){
    vuex = JSON.parse(vuex);
    const token = vuex.userModel.user_Token;
    if(token){
      config.headers.token = token
    }
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


const ajax = function(method,url,data){
  let ajaxOption = {
    timeout : 10000,
    method : method,
    url : url
  }
  if(method.toLocaleUpperCase()==='GET'){
    ajaxOption.params = data
  }else{
    ajaxOption.data = data
  }
  return new Promise((resolve,reject) => {
    axios(ajaxOption).then(res => {
       resolve(res)
    }).catch(err => {
      reject(err)
    }) 
  })
}

export default ajax