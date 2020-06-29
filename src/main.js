import Vue from 'vue'
import App from './App.vue'
import store from '@/store/index'
import router from '@/router/index'
import { getCurrentChildren, getCurrentLevel} from '@/utils/recursionRouter'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//import './styles/index.scss'

//import axios from './api/httpConfig'
//import * as globalFilter from './filters/filters'
import '@/icons'
//import store from './store'


// Vue.prototype.$http=axios;
Vue.use(ElementUI)
// Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (!store.state.UserToken) {
    if (to.matched.length > 0 && !to.matched.some(record => {
      record.meta.requiresAuth
    })) {
      next()
    } else {
      next({ path: '/login' })
    }
  } else {
    if (!store.state.permission.permissionList) {
      store.dispatch('permission/FETCH_PERMISSION').then(() => {
        next({ path: to.path })
      })
    }
    else {
      if (to.path !== '/login') {
        next();
      } else {
        next(from.fullPath)
      }

    }

  }
})

router.afterEach((to,) => {
  let routerList = to.matched
  store.commit('setCrumbList', routerList)
  //store.commit('permission/SET_CURRENT_MENU', to.name)
  let firstLevel = getCurrentLevel(store.state.permission.topbarMenu,to.name)

  let secondeMenu = getCurrentChildren(store.state.permission.topbarMenu,firstLevel)
  console.log(secondeMenu)
  let secondeLevel=getCurrentLevel(secondeMenu,to.name)
  console.log(`===============first level is ${secondeLevel}`)
  store.commit('permission/SET_CURRENT_FIRST_LEVEL',firstLevel)
  store.commit('permission/SET_CURRENT_SECONDE_LEVEL',secondeLevel)
  store.commit('permission/SET_CHILD_MENU', secondeMenu)

})




new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

