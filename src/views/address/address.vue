<!--
 * @Author: your name
 * @Date: 2020-05-28 11:11:41
 * @LastEditTime: 2020-05-28 14:47:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/address/address.vue
 -->
<style scoped lang='scss'>
.address {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $bodyColor;
  overflow: auto;
  .address-local {
    padding: 0px 12px;
    box-sizing: border-box;
    padding: 20px 10px;
    div {
      width: 100%;
      height: 40px;
      background: #fff;
      border-radius: 5px;
      font-size: 14px;
      color: #333;
      line-height: 40px;
      text-indent: 10px;
      span {
        color: #222;
        font-weight: bold;
        padding-left: 20px;
        background-image: url("https://p1.meituan.net/travelcube/c6c04160817d530ecddf9f86b158106e2032.png");
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: left center;
      }
    }
  }
  .address-hot {
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    .address-hot-title {
      color: #333;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .address-hot-content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      background: #fff;
      border-radius: 5px;
      overflow: hidden;
      .address-hot-content-item {
        width: 20%;
        height: 50px;
        color: #333;
        font-size: 14px;
        text-align: center;
        line-height: 50px;
      }
    }
  }
  .address-choose {
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    margin-top: 20px;
    .address-choose-title {
      color: #333;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .address-choose-btn {
      width: 100%;
      height: 50px;
      background: $layoutColor;
      color: #fff;
      text-align: center;
      line-height: 50px;
      border-radius: 5px;
    }
  }
}
</style>

<template>
  <div class="address">
    <City ref="city" :callback="getCity" />
    <Topbar name="选择城市" />
    <div class="address-local" @click="goBack()">
      <div>
        当前城市：
        <span>{{$store.state.userCity}}</span>
      </div>
    </div>
    <div class="address-hot">
      <div class="address-hot-title">热门城市</div>
      <div class="address-hot-content">
        <div
          class="address-hot-content-item"
          v-for="(item,index) in hotcityList"
          :key="index"
          @click="getCity(item)"
        >{{item}}</div>
      </div>
    </div>
    <div class="address-choose">
      <div class="address-choose-title">选择城市</div>
      <div class="address-choose-btn" @click="chooseCity">选择城市</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotcityList: ['北京', '上海', '广州', '深圳', '杭州', '武汉', '厦门', '青岛', '重庆', '长沙', '西安', '成都']
    };
  },
  methods: {
   chooseCity(){
     this.$refs.city.show()
   },
   getCity(e){
     let name = e;
     if(name[name.length-1]==='市'){
       name = e.slice(0,e.length-1);
     }
     this.$store.commit('saveStateVal',{key:'userCity',value:name});
     this.goBack()
   }
  }
}
</script>