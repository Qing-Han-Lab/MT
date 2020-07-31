/*
 * @Author: your name
 * @Date: 2020-06-04 11:00:12
 * @LastEditTime: 2020-06-04 11:14:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /taroapp/Users/yangchanghao/code/mt/src/store/model/userModel.js
 */ 
export default {
  state : {
    /* userName : 'YCH',
    headUrl : 'http://img0.imgtn.bdimg.com/it/u=1990625098,3468619056&fm=11&gp=0.jpg',
    user_Token : 'thisisych' */
    userName : '',
    headUrl : '',
    user_Token : ''
  },
  mutations:{
    setUserInfo(state,value){
      state.userName = value.userName,
      state.headUrl = value.headUrl
      state.user_Token = value.user_Token
    }
  }
}