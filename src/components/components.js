/*
 * @Author: your name
 * @Date: 2020-05-25 15:47:42
 * @LastEditTime: 2020-05-27 09:48:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/components/components.js
 */
import Vue from 'vue';


const context = require.context('@/components',true,/\.vue$/);


const analys = (res)=>{
  res.keys().forEach((key)=>{
    const comp = res(key).default;
    const name = comp.name[0].toLocaleUpperCase() + comp.name.substr(1);
    Vue.component(name,comp)
  })
}

analys(context)