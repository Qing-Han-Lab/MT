<!--
 * @Author: your name
 * @Date: 2020-05-27 09:39:16
 * @LastEditTime: 2020-05-27 09:55:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/components/title.vue
 -->
<style scoped lang='scss'>
.title{
  width: 100%;
  height: 50px;
  background: $layoutColor;
  color: #222;
  text-align: center;
  position: relative;
  line-height: 55px;
  letter-spacing: 5px;
  .title-back{
    width: 12px;
    height: 12px;
    border-top: 1px solid #222;
    border-left: 1px solid #222;
    transform: rotate(-45deg) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 20px;
  }
}
</style>

<template>
<div class='title'>
  {{name}}
  <div class="title-back" @click="goBack"></div>
</div>
</template>

<script>
export default {
  name : 'topbar',
  props:{
    name:{
      type : String,
      default : ''
    }
  }
}
</script>