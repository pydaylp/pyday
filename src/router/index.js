import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import COC from '@/components/COC'
Vue.use(Router)

var router = new Router({
  mode: 'hash',
  routes: [
    { path: '/', name: 'landing', component: Landing },
    { path: '/introduction', name: 'introduction', component: Landing },
    { path: '/agenda', name: 'agenda', component: Landing },
    { path: '/sponsors', name: 'sponsors', component: Landing },
    { path: '/codigo_de_conducta', name: 'coc', component: COC }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to.hash)
  try {
    setTimeout(function () {
      document.getElementById(to.hash.replace('#', '')).scrollIntoView(true)
    }, 200)
  } catch (e) {

  }
  next()
})

export default router
