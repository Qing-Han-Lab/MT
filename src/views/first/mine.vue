<!--
 * @Author: your name
 * @Date: 2020-05-26 10:16:30
 * @LastEditTime: 2020-06-10 17:53:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/first/mine.vue
 -->
<style scoped lang='scss'>
.mine {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0efed;
  overflow: hidden; 
  .mine-title {
    width: 100%;
    height: 80px;
    background-image: url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:d5896c44/touch/img/my-photo.png");
    background-size: 100%;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    .mine-title-head {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .mine-title-info {
      margin-left: 30px;
      height: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      .info-top {
        color: #666;
        font-size: 15px;
        font-weight: bold;
      }
      .info-down {
        margin-top: 15px;
        color: #666;
        font-size: 12px;
        span {
          color: #ff9712;
        }
      }
    }
  }
  .mine-content {
    margin-top: 15px;
    width: 100%;
    background: #fff;
    box-sizing: border-box;
    border: 1px solid #eee;
    .mine-content-line {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      font-size: 14px;
      padding: 8px 0px;
      border-bottom: 1px solid #eee;
      &:nth-child(2) .mine-content-line-left .left-logo {
        background: #0092de;
      }
      &:nth-child(3) .mine-content-line-left .left-logo {
        background: #eb2c00;
      }
      &:nth-child(4) .mine-content-line-left .left-logo {
        background: green;
      }
      .mine-content-line-left {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .left-logo {
          width: 23px;
          height: 23px;
          border-radius: 3px;
          text-align: center;
          line-height: 25px;
          color: #fff;
          background: #f60;
          margin: 0px 15px 0px 10px;
          font-weight: bold;
        }
      }
      .mine-content-line-right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #999;
        .right-jian {
          width: 6px;
          height: 6px;
          border-top: 1px solid #999;
          border-right: 1px solid #999;
          transform: rotate(45deg);
          margin-left: 5px;
          margin-right: 10px;
        }
      }
    }
    .mine-content-orderbox {
      width: 100%;
      padding: 15px 0px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .mine-content-orderbox-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #333;
        .mine-content-orderbox-item-logo {
          width: 30px;
          height: 30px;
          background-image: url("./img/order_logo.png");
          background-size: 100%;
          background-repeat: no-repeat;
          margin-bottom: 3px;
          position: relative;
          .mine-content-orderbox-item-logo-num {
            width: 20px;
            height: 20px;
            position: absolute;
            background: #ec5330;
            color: #fff;
            font-size: 14px;
            text-align: center;
            line-height: 20px;
            top: -10px;
            right: -10px;
            border-radius: 50%;
          }
        }
      }
    }
    .mine-content-logout {
      width: 100%;
      padding: 14px 0px;
      text-align: center;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      color: #333;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="mine">
    <div class="mine-title">
      <div class="mine-title-head">
        <img :src="$store.state.userModel.headUrl?$store.state.userModel.headUrl:headUrl" alt />
      </div>
      <div class="mine-title-info">
        <div
          class="info-top"
          @click="login"
        >{{$store.state.userModel.userName?$store.state.userModel.userName:'请登录'}}</div>
        <div class="info-down" v-if="$store.state.userModel.user_Token">
          账户余额：
          <span>0</span>元
        </div>
      </div>
    </div>
    <div class="mine-content">
      <div class="mine-content-line" @click="toOrderPage(0)">
        <div class="mine-content-line-left">
          <div class="left-logo" style="background:pink;">订</div>我的订单
        </div>
        <div class="mine-content-line-right">
          <div class="right-jian"></div>
        </div>
      </div>
      <div class="mine-content-orderbox">
        <div
          @click="toOrderPage(index+1)"
          class="mine-content-orderbox-item"
          v-for="(item,index) in orderList"
          :key="index"
        >
          <div class="mine-content-orderbox-item-logo">
            <div class="mine-content-orderbox-item-logo-num" v-if="item.number">{{item.number}}</div>
          </div>
          {{item.name}}
        </div>
      </div>
    </div>
    <div class="mine-content">
      <div class="mine-content-line" v-for="(item,index) in list" :key="index">
        <div class="mine-content-line-left">
          <div class="left-logo">{{item.name[2]}}</div>
          {{item.name}}
        </div>
        <div class="mine-content-line-right">
          {{item.number}}
          <div class="right-jian"></div>
        </div>
      </div>
    </div>
    <div class="mine-content" v-if="$store.state.userModel.user_Token">
      <div v-warn="'red'" class="mine-content-logout" @click="logout">{{logoutText | text('登录') }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589695092585&di=a4626bec9611eb3883f249647f54d446&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F57%2F20%2F785747f2b336fd2.jpg'
      ,
      list: [
        {
          name: '我的收藏',
          number: '10'
        },
        {
          name: '我的抵用券',
          number: '5'
        },
        {
          name: '我的抽奖单',
          number: ''
        },
        {
          name: '积分换礼品',
          number: ''
        }
      ],
      logoutText : '退出登录',
      orderList: ['待付款', '待使用', '待评价', '评论/售后']
    }
  },
  beforeRouteEnter(to,from,next){
   console.log(to,from);
   next((vm)=>{
     console.log(vm)
   })
  },
  created () {
    this.orderList.forEach((item, index) => {
      this.orderList[index] = {
        name: item,
        number: index === 2 ? 3 : 0
      }
    })
  },
  filters:{
    text(str,name){
      return str[0]+str[1]+name
    }
  },
  methods: {
    toOrderPage (index) {
      this.$router.push({ name: 'order', query: { id: index } })
    },
    login () {
      if (window.plus) {
        //
      } else {
        const value = {
          userName: 'YCH',
          headUrl: 'http://img0.imgtn.bdimg.com/it/u=1990625098,3468619056&fm=11&gp=0.jpg',
          user_Token: 'thisisych'
        }
        this.$store.commit('setUserInfo', value)
      }
    },
    logout () {
      this.$store.commit('setUserInfo', { userName: '', headUrl: '', user_Token: '' })
    }
  }
}
</script>