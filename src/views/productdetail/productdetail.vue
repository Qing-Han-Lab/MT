<!--
 * @Author: your name
 * @Date: 2020-05-27 16:35:29
 * @LastEditTime: 2020-05-28 10:53:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/productdetail/productdetail.vue
 -->
<style scoped lang='scss'>
.productdetail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: $bodyColor;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .productdetail-content {
    flex: 1;
    width: 100%;
    overflow: auto;
    .productdetail-content-pic {
      width: 100%;
      height: 200px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .productdetail-content-pic-info {
        width: 100%;
        height: 120px;
        position: absolute;
        bottom: 0;
        left: 0;
        background-image: -webkit-linear-gradient(
          bottom,
          rgba(0, 0, 0, 0.58),
          rgba(0, 0, 0, 0.3) 64%,
          transparent
        );
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        span {
          color: #fff;
          font-size: 14px;
          padding: 3px 0px;
          text-indent: 15px;
          &:first-child {
            padding-top: 30px;
            font-size: 19px;
            font-weight: bold;
          }
        }
      }
    }
    .productdetail-content-haveSell {
      width: 100%;
      height: 93px;
      padding: 14px 10px;
      box-sizing: border-box;
      color: #6bbd00;
      background: #fff;
      .productdetail-content-haveSell-item {
        float: left;
        width: 50%;
        height: 33px;
        line-height: 33px;
        font-size: 14px;
        font-weight: 380;
        display: flex;
        align-items: center;
        .logo {
          width: 15px;
          height: 15px;
          box-sizing: border-box;
          border-radius: 50%;
          border: 1px solid #6bbd00;
          margin-right: 5px;
          text-align: center;
          line-height: 15px;
          font-size: 14px;
          color: #6bbd6b;
          font-weight: bold;
        }
      }
    }
    .productdetail-content-comment {
      margin-top: 15px;
      width: 100%;
      background: #fff;
      &:last-child {
        margin-bottom: 15px;
      }
      .comment-top {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid $bodyColor;
        padding: 0px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        color: #999;
        box-sizing: border-box;
        .comment-top-left {
          color: #fa952f;
        }
      }
      .comment-down {
        width: 100%;
        padding: 10px 0px;
        .comment-down-content {
          width: 100%;
          padding: 0px 10px;
          box-sizing: border-box;
          display: flex;
          justify-content: flex-start;
          align-content: flex-start;
          flex-wrap: wrap;
          .comment-down-content-item {
            font-size: 14px;
            color: #fdb338;
            border: 1px solid #fdb338;
            border-radius: 4px;
            padding: 3px 5px;
            margin-right: 10px;
            margin-bottom: 8px;
          }
        }
        .comment-down-info {
          width: 100%;
          padding: 0px 10px;
          box-sizing: border-box;
          height: 60px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .comment-down-info-left {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            span {
              font-size: 16px;
              font-weight: bold;
              height: 40px;
              display: block;
            }
            div {
              font-size: 14px;
              color: #666;
              width: 100%;
              height: 18px;
              overflow-x: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
          .comment-down-info-right {
            width: 70px;
            height: 100%;
            border-left: 1px solid #c3c3c3;
            background-image: url('./img/tel.png');
            background-repeat: no-repeat;
            background-size: 23px;
            background-position: center;
          }
        }
      }
    }
  }
  .productdetail-buybox {
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0px -5px 5px #f2f2f2;
    padding: 0px 12px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .productdetail-buybox-left {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      font-size: 14px;
      color: #999;
      .nowmony {
        margin-right: 10px;
        color: #06c1ae;
        font-size: 14px;
        letter-spacing: -3px;
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        div {
          font-size: 33px;
          font-weight: bold;
          transform: translateY(2px);
          margin-right: 3px;
        }
      }
    }
    .productdetail-buybox-right {
      font-size: 20px;
      width: 130px;
      height: 40px;
      border-radius: 5px;
      background: $layoutColor;
      color: #fff;
      text-align: center;
      line-height: 40px;
    }
  }
}
</style>

<template>
  <div class="productdetail">
    <Topbar name="团购详情" />
    <div class="productdetail-content">
      <div class="productdetail-content-pic">
        <!-- <img src="http://p1.meituan.net/deal/c61ffc853ce3673dcf74c8da78634ca9778391.png" alt /> -->
        <img :src="productInfo.pic" alt />
        <div class="productdetail-content-pic-info">
          <span>{{productInfo.name}}</span>
          <span>2人餐，提供免费WiFi</span>
        </div>
      </div>
      <div class="productdetail-content-haveSell">
        <div class="productdetail-content-haveSell-item">
          <div class="logo">√</div>支持随时退款
        </div>
        <div class="productdetail-content-haveSell-item">
          <div class="logo">√</div>支持过期自动退
        </div>
        <div class="productdetail-content-haveSell-item">
          <div class="logo">√</div>已售：{{productInfo.totalSell?productInfo.totalSell:productInfo.haveSell}}
        </div>
      </div>
      <div class="productdetail-content-comment">
        <div class="comment-top">
          <div class="comment-top-left">评分: {{productInfo.score}}分</div>280人评价
        </div>
        <div class="comment-down">
          <div class="comment-down-content">
            <div
              class="comment-down-content-item"
              v-for="(item,index) in commentList"
              :key="index"
            >{{item.name}}{{item.num}}</div>
          </div>
        </div>
      </div>
      <div class="productdetail-content-comment">
        <div class="comment-top" style="font-weight:bold;">商家信息</div>
        <div class="comment-down">
          <div class="comment-down-info">
            <div class="comment-down-info-left">
              <span>{{productInfo.name}}</span>
              <div>{{productInfo.place?productInfo.place:''}}{{productInfo.address}}</div>
            </div>
            <div class="comment-down-info-right" @click="call('18560623814')"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="productdetail-buybox">
      <div class="productdetail-buybox-left">
        <div class="nowmony">
          <div>168</div>元
        </div>门市价: 187元
      </div>
      <div class="productdetail-buybox-right">立即抢购</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      productInfo:{},
      commentList: [
        { name: '味道好', num: 13 },
        { name: '服务热情', num: 15 },
        { name: '分量足', num: 23 },
        { name: '菜品不错', num: 57 },
        { name: '上菜快', num: 36 },
        { name: '饮品不错', num: 11 },
        { name: '肉质好', num: 25 },
        { name: '回头客', num: 18 },
        { name: '海鲜赞', num: 10 },
      ]
    }
  },
  created(){
    let data = this.$route.query.productdetail;
    if(data){
      data = JSON.parse(data);
      this.productInfo = data;
    }
  }
}
</script>