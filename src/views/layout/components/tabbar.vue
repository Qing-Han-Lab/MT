<!--
 * @Author: your name
 * @Date: 2020-05-26 09:47:13
 * @LastEditTime: 2020-05-27 15:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/layout/components/tabbar.vue
 -->
<style scoped lang='scss'>
.tabbar {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tabbar-item {
    display: flex;
    margin-top: 5px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    &:nth-child(2) .tabbar-item-logo {
      background-image: url("./image/order.png");
      &.active {
        background-image: url("./image/order_on.png");
      }
    }
    &:nth-child(3) .tabbar-item-logo {
      background-image: url("./image/mine.png");
      &.active {
        background-image: url("./image/mine_on.png");
      }
    }
    .tabbar-item-logo {
      width: 20px;
      height: 20px;
      background-image: url("./image/home.png");
      background-size: 100%;
      background-repeat: no-repeat;
      &.active {
        background-image: url("./image/home_on.png");
      }
    }
    .tabbar-item-text {
      color: #999;
      font-size: 12px;
      margin-top: 5px;
      text-align: center;
      &.active {
        color: #ffd000;
        font-weight: bold;
      }
    }
  }
}
</style>

<template>
  <div class="tabbar">
    <div class="tabbar-item" v-for="(item,index) in menus" :key="index" @click="checkMenu(index)">
      <div class="tabbar-item-logo" :class="{active:item.active}"></div>
      <div class="tabbar-item-text" :class="{active:item.active}">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          name: '主页',
          path: 'home',
          active: true
        },
        {
          name: '订单',
          path: 'order',
          active: false,
        },
        {
          name: '我的',
          path: 'mine',
          active: false
        }
      ]
    }
  },
  methods: {
    changeLogo (index) {
      this.menus = this.menus.map((item, number) => {
        item.active = false;
        if (number === index) {
          item.active = true;
        }
        return item;
      })
    },
    checkMenu (index) {
      const num = this.menus.findIndex((item) => {
        return item.active;
      })
      if (num !== index) {
        this.changeLogo(index)
        this.$store.commit('saveStateVal', { key: 'tabbarIndex', value: index });
        this.$router.push({ path: `/${this.menus[index].path}` })
      }
    }
  }
}
</script>