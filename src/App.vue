<!--
 * @Author: your name
 * @Date: 2020-05-25 15:29:24
 * @LastEditTime: 2020-05-25 15:46:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/App.vue
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{margin: 0; padding: 0}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
