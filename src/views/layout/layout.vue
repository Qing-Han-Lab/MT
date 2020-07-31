<!--
 * @Author: your name
 * @Date: 2020-05-25 15:35:06
 * @LastEditTime: 2020-06-10 17:44:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/layout/layout.vue
 -->
<style scoped lang='scss'>
.layout {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #f0efed;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  .layout-title {
    width: 375px;
    height: 50px;
    background: #ffd000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .layout-title-local {
      width: 75px;
      height: 100%;
      font-size: 14px;
      color: #222;
      text-align: center;
      text-indent: -10px;
      line-height: 50px;
      font-weight: bold;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        width: 5px;
        height: 5px;
        border-top: 1px solid #222;
        border-right: 1px solid #222;
        transform: rotate(135deg);
        top: 40%;
        right: 15px;
      }
    }
    .layout-title-logo {
      width: 46px;
      height: 100%;
      background-image: url("https://p0.meituan.net/travelcube/641521461179df7cfb88738dd1ea11ec1031.png");
      background-size: 24px;
      background-repeat: no-repeat;
      background-position: center;
    }
    .layout-title-inputbox {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .inputbox-input {
        width: 250px;
        height: 32px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: #999;
        font-size: 14px;
        .searchlogo {
          width: 15px;
          height: 15px;
          background-image: url("https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png");
          background-size: 100%;
          background-repeat: no-repeat;
          margin: 0px 10px 0px 10px;
        }
      }
    }
  }
  .layout-content {
    flex: 1;
    width: 100%;
    position: relative;
  }
  .layout-menu {
    width: 100%;
    height: 50px;
    box-shadow: 0 -3px 5px #f2f2f2;
  }
}
</style>

<template>
  <div class="layout">
    <div class="layout-title">
      <div class="layout-title-local" @click="toAddress">{{$store.state.userCity}}</div>
      <div @click="toSearch" class="layout-title-inputbox">
        <div class="inputbox-input">
          <div class="searchlogo"></div>请输入商家名、品类或者商圈...
        </div>
      </div>
      <div class="layout-title-logo" @click="toMine"></div>
    </div>
    <div class="layout-content">
      <transition name="fade">
        <router-view :key="key"></router-view>
      </transition>
    </div>
    <div class="layout-menu">
      <tab-bar ref="tabbar"></tab-bar>
    </div>
  </div>
</template>

<script>
import TabBar from './components/tabbar'
export default {
  data () {
    return {}
  },
  watch:{
    $route:{
      handler(val){
       console.log(val,'hehe')
      },
      deep : true
    }
  },
  components: {
    TabBar
  },
  computed: {
    key () {
      return this.$route.path
    }
  },
  created () {
    const self = this;
    if (window.plus) {
      window.plus.geolocation.getCurrentPosition(function (position) {
        let city = position.address.city;
        city = city.slice(0, city.length - 1);
        self.$store.commit('saveStateVal', { key: 'userCity', value: city });
      }, function () {
        window.plus.nativeUI.toast('获取定位服务失败');
      })
    }
  },
  mounted () {
    this.$refs.tabbar.changeLogo(this.$store.state.tabbarIndex);
  },
  methods: {
    toMine () {
      this.$refs.tabbar.checkMenu(2)
    },
    changeMenu (index) {
      this.$refs.tabbar.checkMenu(index)
    },
    toSearch () {
      if (window.plus) {
        //
        let wv = window.plus.webview.create('/index.html#/search', 'search', {});
        wv.onclose = () => {
          this.$refs.tabbar.changeLogo(this.$store.state.tabbarIndex);
        },
          wv.show();
      } else {
        this.$router.push({ path: '/search' })
      }
    },
    toAddress(){
      if(window.plus){
         const wv = window.plus.webview.create('/index.html#/address','address',{});
         wv.onclose = ()=>{
           window.history.go(0);
         }
         wv.show();
      }else{
        this.$router.push({path:'/address'})
      }
    }
  }
}
</script>