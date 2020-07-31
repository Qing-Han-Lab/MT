/*
 * @Author: your name
 * @Date: 2020-05-25 15:29:24
 * @LastEditTime: 2020-06-04 11:12:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/store/index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import userModel from './model/userModel'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCity : '北京',
    tabbarIndex : 0
  },
  mutations: {
    saveStateVal(state,obj){ // obj:{key,value}
      state[obj.key] = obj.value
    }
  },
  actions: {
  },
  modules: {
    userModel
  },
  plugins: [createPersistedState({
    storage: window.localStorage
  })]
})
