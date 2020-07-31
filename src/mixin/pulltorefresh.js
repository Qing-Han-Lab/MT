/*
 * @Author: your name
 * @Date: 2020-05-28 14:49:22
 * @LastEditTime: 2020-05-28 14:57:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/mixin/pulltorefresh.js
 */
module.exports =  { 
  methods:{
    setPullToRefresh(){
      console.log('set pull')
     if(window.plus){
       const wv = window.plus.webview.currentWebview();
       wv.setPullToRefresh({
        support:true,
        style : 'circle',
        color : '#ffd000'
       },()=>{
         this.onRefresh()
         wv.endPullToRefresh();
       })
     }
    },
    endPullToRefresh(){
      if(window.plus){
        const wv = window.plus.webview.currentWebview();
        wv.setPullToRefresh({
          support : false
        })
      }
    }
  }
}