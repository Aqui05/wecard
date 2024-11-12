import AcComposant from '@/components/AcComposant.vue'
import ScComponent from '@/components/ScComposant.vue'
import CardPreview from '../components/CardPreview.vue'
import { createRouter, createWebHistory } from 'vue-router'
import CardView from '@/components/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'AcComposant',
      component: AcComposant,
    },
    {
      path: '/create-card',
      name: 'ScComponent',
      component: ScComponent
    },
    {
      path: '/preview',
      name: 'CardPreview',
      component: CardPreview
    },
    {
      path: '/export',
      name: 'CardView',
      component: CardView,
      props: (route) => ({
        cardData: route.query.cardData ? JSON.parse(route.query.cardData) : undefined
      })
    },
    /*{ path: '/export',
      name: 'CardView',
      component: CardView,
      props: true
    }*/
  ],
})

export default router
