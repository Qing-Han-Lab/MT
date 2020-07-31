<!--
 * @Author: your name
 * @Date: 2020-05-27 10:35:48
 * @LastEditTime: 2020-05-29 15:21:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/views/search/components/searchresult.vue
 -->
<style scoped lang='scss'>
.searchresult {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .searchresult-dropmenu {
    width: 100%;
    /deep/ .van-dropdown-item__option--active {
      color: $layoutColor;
    }
    /deep/ .van-dropdown-item__option--active .van-dropdown-item__icon {
      color: $layoutColor;
    }
    /deep/ .van-dropdown-menu__title--active {
      color: $layoutColor;
    }
  }
  .searchresult-content {
    flex: 1;
    width: 100%;
    overflow: auto;
  }
}
</style>

<template>
  <div class="searchresult">
    <van-dropdown-menu class="searchresult-dropmenu">
      <van-dropdown-item v-model="type" :options="typeList" @change="typeChange" />
      <van-dropdown-item v-model="place" :options="placeList" @change="placeChange" />
      <van-dropdown-item v-model="sort" :options="sortList" @change="sortChange" />
    </van-dropdown-menu>
    <div class="searchresult-content" @scroll="scrollEvent">
      <Product v-for="(item,index) in getList" :key="index" :options="item" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: '全部分类',
      sort: '默认排序',
      place: '全城',
      typeList: [
        { text: '全部分类', value: '全部分类' },
        { text: '美食', value: '美食' },
        { text: '酒店', value: '酒店' },
        { text: '休闲娱乐', value: '休闲娱乐' },
        { text: '生活服务', value: '生活服务' }
      ],
      sortList: [
        { text: '默认排序', value: '默认排序' },
        { text: '距离排序', value: '距离排序' },
        { text: '销量排序', value: '销量排序' },
      ],
      placeList: [
        { text: '全城', value: '全城' },
        { text: '南明区', value: '南明区' },
        { text: '观山湖区', value: '观山湖区' },
        { text: '花溪区', value: '花溪区' }
      ],
      list: [],
      isLoad: false,
      keywords: {
        name: 'typeList',
        value: '全部分类'
      }
    };
  },
  created () {
    this.getData()
  },
  computed: {
    getList () {
      const name = this.keywords.name;
      if (name === 'typeList' || name === 'placeList') {
        const state = this.keywords.value;
        if (name === 'typeList') {
          if (state === '全部分类') { return this.list; }
          else {
            return this.list.filter((item) => {
              return item.type === state
            })
          }
        } else {
          if (state === '全城') { return this.list; }
          else {
            return this.list.filter((item) => {
              return item.place === state
            })
          }
        }
      } else {
        let timeList = this.list;
        const state = this.keywords.value;
        if (state === '距离排序') {
          timeList.sort(function (a, b) {
            return a.length - b.length;
          })
        } else if (state === '销量排序') {
          timeList.sort(function (a, b) {
            return a.totalSell - b.totalSell;
          })
        }
        return timeList;
      }
    }
  },
  methods: {
    typeChange (e) { // 改变类型
      const toast = this.$toast.loading();
      setTimeout(() => {
        this.keywords = {
          name: 'typeList',
          value: e
        }
        toast.clear()
      }, 1000);
    },
    placeChange (e) { // 改变地点
      const toast = this.$toast.loading();
      setTimeout(() => {
        toast.clear();
        this.keywords = {
          name: 'placeList',
          value: e
        }
      }, 1000)
    },
    sortChange (e) { // 改变排序方式
      const toast = this.$toast.loading();
      setTimeout(() => {
        toast.clear();
        this.keywords = {
          name: 'sortList',
          value: e
        }
      }, 1000)
    },
    getData () {
      let toast = this.$toast.loading({ forbidClick: true });
      const list1 = [
        {
          name: " 漫影故事私人影吧（花果园购物中心店）",
          score: 4.5,
          length: 7.0,
          totalSell: 10,
          type: "美食",
          place: "南明区",
          address: "花果园购物中心店",
          pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg",
          shopList: [
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            },
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            },
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            },
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            }
          ]
        },
        {
          name: " 漫影故事私人影吧（花果园购物中心店）",
          score: 3.2,
          length: 5.5,
          totalSell: 8,
          type: "酒店",
          place: "花溪区",
          address: "花果园购物中心店",
          pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg",
          shopList: [
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            },
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            }
          ]
        },
        {
          name: " 漫影故事私人影吧（花果园购物中心店）",
          score: 4.4,
          length: 6.7,
          totalSell: 12,
          place: "南明区",
          type: "休闲娱乐",
          address: "花果园购物中心店",
          pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg",
          shopList: []
        },
        {
          name: " 漫影故事私人影吧（花果园购物中心店）",
          score: 4.8,
          length: 8.2,
          type: "生活服务",
          place: "观山湖区",
          totalSell: 5,
          address: "花果园购物中心店",
          pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg",
          shopList: [
            {
              name: "晚上特惠双人套餐",
              nowPrice: 85.5,
              oldPrice: 145.0,
              haveSell: 1340,
              pic: "https://p0.meituan.net/200.0/dpmerchantpic/3a77e98f591891aa30086645268a94fe703738.jpg"
            }
          ]
        }
      ]
      if (window.plus) {
        this.getDataDetail(list1);
      } else {
        this.$http('GET', this.api.searchresult, {}).then(res => {
          if (res.data.success) {
            let list = res.data.model.list;
            this.getDataDetail(list)
          }
        })
      }
      setTimeout(() => {
        toast.clear()
      }, 1000)
    },
    getDataDetail (list) {
      list = [...list, ...list, ...list];
      this.list = this.list.concat(list)
      this.isLoad = false;
    },
    scrollEvent (e) {
      const dom = e.target;
      if (dom.scrollTop + dom.clientHeight >= dom.scrollHeight - 10) {
        if (!this.isLoad) {
          this.isLoad = true;
          this.getData();
        }
      }
    }
  }
}
</script>