<!--
 * @Author: your name
 * @Date: 2020-05-27 11:25:07
 * @LastEditTime: 2020-05-28 10:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/components/product.vue
 -->
<style scoped lang='scss'>
.product {
  width: 100%;
  margin: 0px auto 10px;
  background: #fff;
  .product-title {
    width: 100%;
    padding: 10px 0px;
    .product-title-top {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #333;
      font-size: 15px;
      padding: 0px 10px;
      box-sizing: border-box;
      .product-title-top-logo {
        width: 17px;
        height: 17px;
        background: #f60;
        font-size: 12px;
        color: #fff;
        text-align: center;
        line-height: 17px;
        margin-right: 15px;
        border-radius: 2px;
      }
    }
    .product-title-down {
      display: flex;
      padding: 0px 10px;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      margin-top: 2px;
      span {
        color: #ff9900;
        font-size: 14px;
      }
      div {
        color: #666;
        font-size: 12px;
      }
    }
  }
  .product-content {
    width: 100%;
    max-height: 200px;
    overflow: hidden;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    transition: max-height 0.3s;
    &.show{
     max-height: 1000px;
    }
    .product-content-item {
      width: 100%;
      height: 100px;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 80px;
        height: 80px;
        margin-right: 12px;
      }
      .item-content {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        .item-content-top {
          color: #333;
          font-size: 15px;
          width: 100%;
          height: 40px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .item-content-down{
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          width: 100%;
          .item-content-down-left{
            font-size: 12px;
            color: #666;
            display: flex;
            justify-content: flex-start;
            align-items: baseline;
            div{
              color: #ff6600;
              margin-right: 5px;
              span{
                font-size: 18px;
              }
            }
          }
          .item-content-down-right{
            color: #666;
            font-size: 12px;
          } 
        }
      }
    }
  }
  .product-getmore {
    width: 100%;
    height: 40px;
    color: #fe8c00;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
  }
}
</style>

<template>
  <div class="product" @click="toProduct">
    <div class="product-title">
      <div class="product-title-top">
        {{options.name}}
        <div class="product-title-top-logo">团</div>
      </div>
      <div class="product-title-down">
        <span>评分: {{options.score}}</span>
        <div>{{options.length}}km {{options.address}}</div>
      </div>
    </div>
    <div class="product-content" :class="{show:isShow}">
      <div class="product-content-item" v-for="(item,index) in options.shopList" :key="index">
        <img
          :src="item.pic"
          alt
        />
        <div class="item-content">
          <div class="item-content-top">{{item.name}}</div>
          <div class="item-content-down">
            <div class="item-content-down-left">
              <div>
                <span>{{item.nowPrice}}</span>元
              </div>
              门市价: {{item.oldPrice}}元
            </div>
            <div class="item-content-down-right">已售：{{item.haveSell}}份</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-getmore" v-if="options.shopList.length>2" @click.stop="isShow=!isShow">{{isShow?'收起':'查看'}}其它{{options.shopList.length-2}}条团购</div>
  </div>
</template>

<script>
export default {
  name: 'product',
  props:{
    options : {
      type : Object,
      default : ()=>{}
    }
  },
  data(){
    return {
      isShow : false
    }
  },
  methods:{
    toProduct(){
      this.toPage('productdetail',{productdetail : JSON.stringify(this.options)});
    }
  }
}
</script>