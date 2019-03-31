import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/main/Top'
import Detail from '@/components/main/Detail.vue'
import Form from '@/components/main/Form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Top },
    { path: '/detail/:tag', name: 'Tag', component: Detail },
    { path: '/form', component: Form }
  ]
})
