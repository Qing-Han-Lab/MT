<!--
 * @Author: your name
 * @Date: 2020-05-28 11:59:16
 * @LastEditTime: 2020-05-28 14:20:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/components/city.vue
 -->
<style scoped lang='scss'>
.city {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  .city-choose {
    width: 100%;
    animation: show 0.3s forwards 1 ease-in-out;
    @keyframes show{
      0%{
       transform: translateY(100%)
      }100%{
       transform: translateY(0%)
      }
    }
  }
}
</style>

<template>
  <div v-if="isShow" class="city">
    <van-area  class="city-choose" @cancel="cancel" @confirm="complate" :area-list="areaList" />
  </div>
</template>

<script>
import cityList from '../assets/city'
export default {
  name: 'city',
  data () {
    return {
      isShow : false,
      areaList: []
    }
  },
  props:{
    callback:{
      type : Function,
      default : ()=>{}
    }
  },
  created () {
    this.areaList = cityList;
  },
  methods: {
    hide(){
      this.isShow = false;
    },
    show(){
      this.isShow = true;
    },
    cancel () {
      this.hide();
    },
    complate (e) {
     this.callback(e[1].name)
     this.isShow = false
    }
  }
}
</script>