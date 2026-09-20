import { createRouter, createWebHashHistory } from 'vue-router'
import JobOverview from '../components/JobOverview.vue'
import JobDetail from '../components/JobDetail.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/overview'
    },
    {
      path: '/overview',
      name: 'overview',
      component: JobOverview
    },
    {
      path: '/job/:id',
      name: 'job-detail',
      component: JobDetail
    }
  ],
  linkActiveClass: 'active'
})

export default router
