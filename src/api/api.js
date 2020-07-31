/*
 * @Author: your name
 * @Date: 2020-05-26 12:21:12
 * @LastEditTime: 2020-05-29 14:50:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/api/api.js
 */
import api from './index'

let url = {};

for(let key in api){
  const path = `./mock/${api[key]}.json`;
  const name = key;
  url[name] = path;
}


export default url;
