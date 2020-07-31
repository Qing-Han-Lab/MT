/*
 * @Author: your name
 * @Date: 2020-05-25 15:29:24
 * @LastEditTime: 2020-05-29 10:35:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /univue/Users/yangchanghao/code/mt/src/router/index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { Toast } from 'vant'

Vue.use(Toast)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout/layout.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/first/home.vue'),
        meta: {
          isKeep: true
        }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('@/views/first/order.vue'),
        meta: {
          isKeep: true
        }
      },
      {
        path: '/mine',
        name: 'mine',
        component: () => import('@/views/first/mine.vue'),
        meta: {
          isKeep: false
        }
      }
    ]
  }
]


const analys = function (res) {
  res.keys().forEach((key) => {
    const val = res(key).page;
    let pageName = val.split('/').pop();
    let pagePath = '/' + val.split('/').pop();
    let pageComponent = () => import(`@/views/${val}.vue`);
    routes.push({
      path: pagePath,
      name: pageName,
      component: pageComponent
    })
  })
}
analys(require.context('@/views', true, /\.json$/));



const router = new VueRouter({
  routes
})

function havePage (pageName, routes) {
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === pageName) {
      return true;
    } else {
      if (routes[i].children) {
       const flag =  havePage(pageName, routes[i].children);
       if(flag){
         return true;
       }
      }
    }
  }
  return false;
}

router.beforeEach((to, from, next) => {
  const path = to.path;
  if (havePage(path, routes)) { // 有这个页面
    next();
  } else { // 没有这个页面
    Toast('当前模块正在开发');
  }
})

export default router
