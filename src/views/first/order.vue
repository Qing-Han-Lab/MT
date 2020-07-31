<!--
 * @Author: your name
 * @Date: 2020-05-26 10:16:09
 * @LastEditTime: 2020-05-29 15:08:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/first/order.vue
 -->
<style scoped lang='scss'>
.order {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0efed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .order-title {
    width: 100%;
    height: 42px;
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    position: relative;
    .order-title-item {
      flex: 1;
      height: 100%;
      text-align: center;
      line-height: 42px;
      color: #333;
      font-size: 15px;
      &.active {
        color: #222;
      }
    }
    .order-title-line {
      width: 50px;
      height: 2px;
      background: $layoutColor;
      border-radius: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: left 0.3s;
    }
  }
  .order-content {
    width: 100%;
    flex: 1;
    background: #fff;
    overflow: auto;
    .order-content-item {
      width: 355px;
      padding: 15px 10px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
      border-bottom: 1px solid #eee;
      img {
        display: block;
        width: 38px;
        height: 38px;
        border-radius: 8px;
        margin-right: 10px;
      }
      .order-content-item-box {
        flex: 1;
        .order-content-item-box-name {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5px;
          span {
            color: #333;
            font-size: 16px;
            max-width: 250px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          div {
            color: #646464;
            font-size: 13px;
          }
        }
        .order-content-item-box-line {
          color: #999;
          font-size: 13px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="order">
    <div class="order-title">
      <div
        :class="{active:item.active}"
        class="order-title-item"
        v-for="(item,index) in menus"
        :key="index"
        @click="checkMenu(index)"
      >{{item.name}}</div>
      <div class="order-title-line" :style="{left:leftNum+'px'}"></div>
    </div>
    <div class="order-content">
      <div class="order-content-item" v-for="(item,index) in getList" :key="index">
        <img :src="item.pic" alt />
        <div class="order-content-item-box">
          <div class="order-content-item-box-name">
            <span>{{item.name}}</span>
            <div>{{item.state===0?'订单完成':'待评价'}}</div>
          </div>
          <div class="order-content-item-box-line">下单时间: {{item.endTime}}</div>
          <div class="order-content-item-box-line">总价: ￥{{item.totalPrice}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: 0,
      leftNum: 0,
      menus: [
        {
          name: '全部',
          active: true
        },
        {
          name: '待付款',
          active: false
        },
        {
          name: '待使用',
          active: false
        },
        {
          name: '待评价',
          active: false
        },
        {
          name: '评论/售后',
          active: false
        }
      ],
      list: []
    }
  },
  created () {
    this.getData();
  },
  mounted () {
    const id = this.$route.query.id;
    if (typeof id !== 'undefined') {
      this.activeIndex = id;
      this.checkMenu(id);
      this.$router.apps[0].$children[0].$children[0].changeMenu(1);
      return;
    }
    this.checkMenu(0)
  },
  computed: {
    getList () {
      if (this.activeIndex === 0) {
        return this.list;
      } else {
        return this.list.filter((item) => {
          return item.state == this.activeIndex;
        })
      }
    }
  },
  methods: {
    checkMenu (index) {
      this.activeIndex = index;
      this.menus = this.menus.map((item, num) => {
        item.active = false;
        if (num === index) {
          item.active = true;
        }
        return item;
      })
      const dom = document.querySelector('.order-title-item');
      this.leftNum = (index) * dom.offsetWidth + (dom.offsetWidth - document.querySelector('.order-title-line').offsetWidth) / 2;
    },
    getData () {
      let list1 = [{
        pic: "https://p0.meituan.net/dpdeal/76d419ba8fc953c23055f5ccda9ccdbf1242059.jpg@180w_132h_1e_1c_1l|watermark=1&&r=1&p=9&x=2&y=2&relative=1&o=20|76w_76h_1e_1c_50q_50Q",
        name: "意点私人发型工作室-设计师单人精剪设计体验价",
        endTime: "2020-05-23 14:23",
        totalPrice: 38.50,
        state: 0
      },
      {
        pic: "http://p0.meituan.net/xianfu/56c9464e22a1cfd660e6ab4675f14cf216647.jpg@76w_76h_1e_1c_50q_50Q",
        name: "肯德基宅急送(市西路店)",
        endTime: "2020-05-20 12:10",
        totalPrice: 78.00,
        state: 0
      },
      {
        pic: "http://p0.meituan.net/business/815d52677c94c00d636259902e8c745598028.jpg@76w_76h_1e_1c_50q_50Q",
        name: "八块八小灶粥道(李村店)",
        endTime: "2020-05-13 18:20",
        totalPrice: 17.5,
        state: 0
      },
      {
        pic: "http://p1.meituan.net/waimaipoi/0dc6a023308d63e83ea39ad349a367f136864.jpg@76w_76h_1e_1c_50q_50Q",
        name: "外婆家蛋包饭(李沧店)",
        endTime: "2020-04-15 13:15",
        totalPrice: 18.5,
        state: 3
      }, {
        pic: "http://p0.meituan.net/deal/7971d7b87dc3e1b638ac51f4663f042d68964.jpg@0_24_800_484a|388h_640w_2e_90Q|76w_76h_1e_1c_50q_50Q",
        name: "拿渡麻辣香锅双人餐",
        endTime: "2020-03-14 09:33",
        totalPrice: 88.00,
        state: 3
      }]
      if (window.plus) {
        this.getDataDetail(list1)
      } else {
        this.$http('GET', this.api.orderinfo, {}).then(res => {
          if (res.data.success) {
            const list = res.data.model.list;
            this.getDataDetail(list)
          }
        })
      }
    },
    getDataDetail (list) {
      if (list && list.length !== 0) {
        this.list = [...list, ...list, ...list];
      }
    }
  }
}
</script>