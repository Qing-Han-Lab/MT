<!--
 * @Author: your name
 * @Date: 2020-05-26 10:15:31
 * @LastEditTime: 2020-05-29 15:32:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/first/home.vue
 -->
<style scoped lang='scss'>
.home {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  .home-adv {
    width: 100%;
    height: 50px;
    background: #000;
    padding: 0px 10px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .home-adv-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .home-adv-left-logo {
        width: 36px;
        height: 36px;
        background-image: url("https://p1.meituan.net/travelcube/7264ce9c25de2e464e3acd996fe8ad362803.png");
        background-repeat: no-repeat;
        background-size: 100%;
        margin-right: 10px;
      }
      .home-adv-left-text {
        height: 36px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
          color: #fff;
          font-size: 13px;
          font-weight: bold;
        }
        .down {
          font-size: 10px;
        }
      }
    }
    .home-adv-right {
      width: 50px;
      height: 30px;
      border-radius: 5px;
      background: $layoutColor;
      text-align: center;
      font-size: 12px;
      line-height: 30px;
      font-weight: bold;
    }
  }
  .home-modelbox {
    width: 100%;
    height: 162px;
    background: #fff;
    .home-modelbox-ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
      li {
        width: 20%;
        height: 50%;
        list-style: none;
        font-size: 11px;
        color: #666;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &:nth-child(2) div {
          background-color: #ff6767;
        }
        &:nth-child(3) div {
          background-color: #8a90fa;
        }
        &:nth-child(4) div {
          background-color: #fed030;
        }
        &:nth-child(5) div {
          background-color: #fd9d21;
        }
        &:nth-child(6) div {
          background-color: #fed030;
        }
        &:nth-child(7) div {
          background-color: #4dc6ee;
        }
        &:nth-child(8) div {
          background-color: #ff80c2;
        }
        &:nth-child(9) div {
          background-color: #fd9d21;
        }
        &:nth-child(10) div {
          background-color: #00d3be;
        }
        .home-modelbox-ul-li-logo {
          width: 40px;
          height: 40px;
          background-color: #fd9d21;
          border-radius: 50%;
          margin-bottom: 6px;
          position: relative;
          color: #fff;
          font-size: 20px;
          text-align: center;
          line-height: 40px;
          font-weight: bold;
        }
      }
    }
  }
  .home-player {
    width: 100%;
    height: 150px;
    margin-top: 12px;
    position: relative;
    .swiper-pagination {
      z-index: 5;
      position: absolute;
      width: 100%;
      bottom: 5px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      /deep/ .swiper-pagination-bullet {
        margin: 0px 5px;
        &.swiper-pagination-bullet-active {
          background: #fff;
        }
      }
    }
    .home-player-swiper {
      widows: 100%;
      height: 100%;
      position: relative;
      /deep/ .swiper-slide {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .home-player-swiper-item {
          width: 350px;
          height: 150px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
    }
  }
  .home-content {
    width: 100%;
    margin-top: 12px;
    //background: #fff;
    min-height: 300px;
    .home-content-title {
      width: 100%;
      padding: 10px 0px;
      text-align: center;
      font-size: 15px;
      color: #333;
      border-bottom: 0.1px solid #eee;
    }
    .home-content-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 10px 15px;
      box-sizing: border-box;
      .home-content-container-item {
        width: 166px;
        .home-content-container-item-box {
          width: 100%;
          background: #fff;
          border-radius: 5px;
          margin-bottom: 13px;
          overflow: hidden;
          img {
            width: 100%;
            height: auto;
          }
          & > div {
            padding: 0px 10px;
            box-sizing: border-box;
            width: 100%;
          }
          .item-box-title {
            color: #333;
            font-size: 14px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-weight: bolder;
          }
          .item-box-intro {
            color: #666;
            font-size: 12px;
            margin-top: 5px;
          }
          .item-box-money {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            .nowmoney {
              color: #ff6600;
              font-size: 18px;
              font-weight: bolder;
              text-indent: -3px;
              .logo {
                font-size: 12px;
              }
            }
            .oldmoney {
              color: #999;
              font-size: 12px;
              text-decoration: line-through;
            }
          }
          .item-box-havesell {
            color: #666;
            font-size: 12px;
            margin: 5px 0px 10px;
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="home" @scroll="addMore">
    <div class="home-adv">
      <div class="home-adv-left">
        <div class="home-adv-left-logo"></div>
        <div class="home-adv-left-text">
          <span>省钱利器 购物超划算</span>
          <span class="down">吃喝玩乐尽在美团</span>
        </div>
      </div>
      <div class="home-adv-right">去APP</div>
    </div>
    <div class="home-modelbox">
      <ul class="home-modelbox-ul">
        <li @click="toPage('hehe')" v-for="(item,index) in modelList" :key="index">
          <div class="home-modelbox-ul-li-logo">{{item.title[0]}}</div>
          {{item.title}}
        </li>
      </ul>
    </div>
    <div class="home-player">
      <swiper class="home-player-swiper" ref="swiper" :options="swiperOption">
        <swiper-slide v-for="(item,index) in playerList" :key="index">
          <div class="home-player-swiper-item">
            <img :src="item" alt />
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </div>
    <div class="home-content">
      <div class="home-content-title">------- 猜你喜欢 -------</div>
      <div class="home-content-container">
        <div class="home-content-container-item left">
          <div
            class="home-content-container-item-box"
            v-for="(item,index) in dataListLeft"
            :key="index"
            @click="goPage(item)"
          >
            <img :src="item.pic" alt />
            <div class="item-box-title">{{item.name}}</div>
            <div class="item-box-intro">{{item.info}}</div>
            <div class="item-box-money">
              <div class="nowmoney">
                <span class="logo">￥</span>
                {{item.now_price}}
              </div>
              <div class="oldmoney">￥{{item.origin_price}}</div>
            </div>
            <div class="item-box-havesell">已售: {{item.haveSell}}</div>
          </div>
        </div>
        <div class="home-content-container-item right">
          <div
            class="home-content-container-item-box"
            v-for="(item,index) in dataListRight"
            :key="index"
            @click="goPage(item)"
          >
            <img :src="item.pic" alt />

            <div class="item-box-title">{{item.name}}</div>
            <div class="item-box-intro">{{item.info}}</div>
            <div class="item-box-money">
              <div class="nowmoney">
                <span class="logo">￥</span>
                {{item.now_price}}
              </div>
              <div class="oldmoney">￥{{item.origin_price}}</div>
            </div>
            <div class="item-box-havesell">已售: {{item.haveSell}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import mixinModel from '../../mixin/pulltorefresh'
//import a from '../../mixin/pulltorefresh'
export default {
  data () {
    return {
      canAdd: false,
      modelList: [
        {
          title: '美食'
        },
        {
          title: '猫眼电影'
        },
        {
          title: '酒店'
        },
        {
          title: '休闲娱乐'
        },
        {
          title: '外卖'
        },
        {
          title: 'KTV'
        },
        {
          title: '周边游'
        },
        {
          title: '丽人'
        },
        {
          title: '小吃快餐'
        },
        {
          title: '全部分类'
        }
      ],
      playerList: [
        'http://imgcps.jd.com/ling4/100013112318/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5c1361ed82acdd181dd72178/dea1052e/cr_1125x445_0_171/s1125x690/q70.jpg',
        'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/122597/18/2916/135105/5ecb7047E856eae9e/436fedc46f203381.jpg!cr_1125x445_0_171!q70.jpg.dpg',
        'http://m.360buyimg.com/mobilecms/s700x280_jfs/t1/39975/6/2210/103146/5cbfdd4fEd359fb15/90c41bac5ab851de.jpg!cr_1125x445_0_171!q70.jpg.dpg'
      ],
      swiperOption: {
        speed: 300,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        loop: true
      },
      dataListLeft: [], // 猜你喜欢列表,左列表
      dataListRight: [] // 猜你喜欢列表,右列表
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  created () {
    this.getData();
  },
  mounted () {
    this.setPullToRefresh()
  },
  mixins: [mixinModel],
  methods: {
    getData () {
      let list1 = [{
        pic: "http://p0.meituan.net/200.0/deal/6657c3cd0f4b6c25e419dce559f7cf7854084.jpg@0_75_437_437a%7C267h_267w_2e_90Q",
        name: "花千代秘制烤鱼",
        info: "[3店通用]花千代秘制烤鱼蛙哥虾妹，建议4人使用",
        now_price: 198,
        origin_price: 275,
        haveSell: 800,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.1
      },
      {
        pic: "https://p0.meituan.net/200.0/merchantpic/d16767f5c8074690743d18965aa6a704259956.jpg",
        name: "On Hair Salon",
        info: "[未来方舟]【剪发】技术督导",
        now_price: 88,
        origin_price: 150,
        haveSell: 23,
        address: "水东路未来方舟G5组团底商26号铺",
        score: 3
      },
      {
        pic: "http://p0.meituan.net/200.0/dpdeal/344506155ac0c0a9e789e29d5aa45d991059140.png",
        name: "逸丝风尚yesfashion造型",
        info: "[贵阳等]技术督导染发/烫发套餐",
        now_price: 458,
        origin_price: 750,
        haveSell: 120,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.5
      },
      {
        pic: "http://p0.meituan.net/200.0/deal/27b29b4c4109ec39a20116333e53e7e255299.jpg@132_0_410_410a%7C267h_267w_2e_90Q",
        name: "蛋蛋烤肉",
        info: "[5店通用]100元代金券1张，可叠加",
        now_price: 95,
        origin_price: 100,
        haveSell: 12560,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.8
      },
      {
        pic: "http://p1.meituan.net/200.0/dpdeal/0cee2619c49f93f41925bc7eab464e6982912.jpg",
        name: "爱恋鲜花",
        info: "[贵阳等]【花辰夕月】11玫瑰花束+绣球（同城花店配送上门）",
        now_price: 188,
        origin_price: 295,
        haveSell: 132,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.2
      }
      ];
      list1 = [...list1, ...list1];
      if (window.plus) {
        this.getDataDetail(list1);
      } else {
        this.$http('GET', this.api.gaslike, {}).then(res => {
          if (res.data.success) {
            const list = res.data.model.list;
            this.getDataDetail(list)
          }
        })
      }
    },
    getDataDetail (list) {
      if (list && list.length !== 0) {
        if (list.length > 2) {
          list.splice(0, list.length - 2).forEach((item, index) => {
            if (index % 2 === 0) {
              this.dataListLeft.push(item)
            } else {
              this.dataListRight.push(item)
            }
          })
          this.$nextTick(() => {
            let item = list[list.length - 2];
            let dataBoxs = document.querySelectorAll('.home-content-container-item');
            if (dataBoxs[0].offsetHeight > dataBoxs[1].offsetHeight) {
              this.dataListRight.push(item)
            } else {
              this.dataListLeft.push(item)
            }
            this.$nextTick(() => {
              let item = list[list.length - 1];
              let dataBoxs = document.querySelectorAll('.home-content-container-item');
              if (dataBoxs[0].offsetHeight > dataBoxs[1].offsetHeight) {
                this.dataListRight.push(item)
              } else {
                this.dataListLeft.push(item)
              }
            })
          })
          this.canAdd = true;
        } else {
          if (list.length === 1) {
            this.dataListLeft.push(list[0]);
          } else {
            this.dataListLeft.push(list[0]);
            this.dataListLeft.push(list[1]);
          }
          this.canAdd = true;
        }
      }
    },
    addMore (e) {
      const dom = e.target;
      if (dom.scrollTop + dom.clientHeight >= dom.scrollHeight - 15) {
        if (this.canAdd) {
          this.canAdd = false;
          setTimeout(() => {
            this.getData()
          }, 1000);
        }
      }
      if (dom.scrollTop <= 5) {
        this.setPullToRefresh();
      } else {
        this.endPullToRefresh();
      }
    },
    goPage (item) {
      this.toPage('productdetail', { productdetail: JSON.stringify(item) })
    },
    getDataDetail2(list){
      if (list && list.length !== 0) {
            list.forEach((item, index) => {
              if (index % 2 == 0) {
                this.dataListLeft.unshift(item)
              } else {
                this.dataListRight.unshift(item)
              }
            })
          }
    },
    onRefresh () {
      let list1 = [{
        pic: "http://p0.meituan.net/200.0/deal/6657c3cd0f4b6c25e419dce559f7cf7854084.jpg@0_75_437_437a%7C267h_267w_2e_90Q",
        name: "花千代秘制烤鱼",
        info: "[3店通用]花千代秘制烤鱼蛙哥虾妹，建议4人使用",
        now_price: 198,
        origin_price: 275,
        haveSell: 800,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.1
      },
      {
        pic: "https://p0.meituan.net/200.0/merchantpic/d16767f5c8074690743d18965aa6a704259956.jpg",
        name: "On Hair Salon",
        info: "[未来方舟]【剪发】技术督导",
        now_price: 88,
        origin_price: 150,
        haveSell: 23,
        address: "水东路未来方舟G5组团底商26号铺",
        score: 3
      },
      {
        pic: "http://p0.meituan.net/200.0/dpdeal/344506155ac0c0a9e789e29d5aa45d991059140.png",
        name: "逸丝风尚yesfashion造型",
        info: "[贵阳等]技术督导染发/烫发套餐",
        now_price: 458,
        origin_price: 750,
        haveSell: 120,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.5
      },
      {
        pic: "http://p0.meituan.net/200.0/deal/27b29b4c4109ec39a20116333e53e7e255299.jpg@132_0_410_410a%7C267h_267w_2e_90Q",
        name: "蛋蛋烤肉",
        info: "[5店通用]100元代金券1张，可叠加",
        now_price: 95,
        origin_price: 100,
        haveSell: 12560,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.8
      },
      {
        pic: "http://p1.meituan.net/200.0/dpdeal/0cee2619c49f93f41925bc7eab464e6982912.jpg",
        name: "爱恋鲜花",
        info: "[贵阳等]【花辰夕月】11玫瑰花束+绣球（同城花店配送上门）",
        now_price: 188,
        origin_price: 295,
        haveSell: 132,
        address: "观山湖区北京西路世纪金源购物中心C座4楼",
        score: 4.2
      }
      ];
      list1 = [...list1, ...list1];
      if(window.plus){
        this.$http('GET', this.api.gaslike, {}).then(res => {
        if (res.data.success) {
          const list = res.data.model.list;
          this.getDataDetail2(list)
        }
      })
      }else{
        this.getDataDetail2(list1)
      }
    }
  }
}
</script>