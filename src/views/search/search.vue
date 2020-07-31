<!--
 * @Author: your name
 * @Date: 2020-05-27 09:46:28
 * @LastEditTime: 2020-05-27 15:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/search/search.vue
 -->
<style scoped lang='scss'>
.search {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f0efed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .search-searchbox {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    .search-searchbox-inputbox {
      width: 345px;
      height: 40px;
      padding: 20px 15px;
      display: flex;
      justify-content: space-between;
      .searchbtn {
        width: 60px;
        height: 100%;
        background: #dcdcdc;
        color: #999;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        margin-left: 15px;
        border-radius: 5px;
        &.active {
          background: $layoutColor;
          color: #fff;
        }
      }
      .inputcontent {
        flex: 1;
        height: 100%;
        padding: 0px 35px;
        box-sizing: border-box;
        position: relative;
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        i {
          display: block;
          width: 35px;
          height: 40px;
          background-image: url("https://p0.meituan.net/travelcube/99c29829cf1b85d5cdbc76a1bd0b7329814.png");
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
        }
        input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: 0;
          font-size: 12px;
        }
        span {
          position: absolute;
          width: 35px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          transform: rotate(45deg);
          top: 0;
          right: 0;
          display: block;
        }
      }
    }
    .search-searchbox-commendbox {
      width: 100%;
      background: #fff;
      display: flex;
      flex-wrap: wrap;
      .search-searchbox-commendbox-item {
        width: 25%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: #222;
        font-weight: 340;
        font-size: 14px;
        &:active {
          background: #f7f7f7;
        }
        &:first-child {
          color: #f60;
        }
      }
    }
    .search-searchbox-resultbox {
      width: 100%;
      flex: 1;
      overflow: hidden;
    }
  }
}
</style>

<template>
  <div class="search">
    <Topbar name="搜索" />
    <div class="search-searchbox">
      <div class="search-searchbox-inputbox">
        <div class="inputcontent">
          <i></i>
          <input type="text" v-model="searchKeyword" placeholder="输入商家名、品类或商圈" />
          <span @click="delKeywords">+</span>
        </div>
        <div class="searchbtn" :class="[searchKeyword===''?'':'active']" @click="toSearch('')">搜索</div>
      </div>
      <div class="search-searchbox-commendbox" v-if="!isSearch">
        <div
          @click="toSearch(item)"
          class="search-searchbox-commendbox-item"
          v-for="(item,index) in commendList"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="search-searchbox-resultbox" v-else>
        <search-result></search-result>
      </div>
    </div>
  </div>
</template>

<script>
import SearchResult from './components/searchresult'
export default {
  data () {
    return {
      isSearch: false,
      searchKeyword: '',
      commendList: ['周边热门', '酒店', '自助餐', '电影', '火锅', '烤肉', 'KTV', '运动健身', '西餐', '美容美发']
    }
  },
  components: {
    SearchResult
  },
  methods: {
    toSearch (words = '') {
      if (words) {
        this.searchKeyword = words;
        this.isSearch = true
        return;
      }else{
        if(this.searchKeyword.trim()!==''){
          this.isSearch = true;
        }
      }
    },
    delKeywords () {
      this.searchKeyword = '';
      this.isSearch = false;
    }
  }
}
</script>