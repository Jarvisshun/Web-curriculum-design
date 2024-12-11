import { createRouter, createWebHistory } from 'vue-router'
import SchoolIntro from '../views/school/SchoolIntro.vue'
import StuPagec from '../components/StuPagec.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'MainHome',
    component: () => import('../components/MainHome.vue')
  },
  {
    path: '/subject',
    name: 'Subject',
    component: () => import('../components/StuPagea.vue')
  },
  {
    path: '/school',
    component: () => import('../views/StuPage.vue'),
    children: [
      {
        path: 'intro',
        component: SchoolIntro
      },
      {
        path: 'constitution',
        component: () => import('../views/school/Constitution.vue')
      },
      {
        path: 'history',
        component: () => import('../views/school/History.vue')
      },
      {
        path: 'current-leaders',
        component: () => import('../views/school/CurrentLeaders.vue')
      },
      {
        path: 'statistics',
        component: () => import('../views/school/Statistics.vue')
      },
      {
        path: 'symbols',
        component: () => import('../views/school/Symbols.vue')
      }
    ]
  },
  {
    path: '/department',
    component: () => import('../views/department/DepartmentLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/StuPageb.vue')
      },
      {
        path: 'party',
        component: () => import('../components/StuPageb.vue')
      },
      {
        path: 'teaching',
        component: () => import('../components/StuPageb.vue')
      },
      {
        path: 'research',
        component: () => import('../components/StuPageb.vue')
      },
      {
        path: 'support',
        component: () => import('../components/StuPageb.vue')
      },
      {
        path: 'other',
        component: () => import('../components/StuPageb.vue')
      }
    ]
  },
  {
    path: '/faculty/team',
    name: 'FacultyTeam',
    component: StuPagec
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
