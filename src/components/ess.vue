
import { useRouter } from 'vue-router'

export default {
  name: 'CardPersonalization',
  components: {
    CardPreview
  },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()

    const showPreview = () => {
      router.push({
        name: 'preview',
        // Using query instead of state to persist data through page refreshes
        query: {
          cardData: JSON.stringify(props.cardData)
        }
      })
    }

    return {
      showPreview
    }
  }
}

// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CreateCard from '../views/CreateCard.vue'
import CardPreview from '../components/CardPreview.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: CreateCard
  },
  {
    path: '/preview',
    name: 'preview',
    component: CardPreview,
    props: (route) => ({
      cardData: route.query.cardData ? JSON.parse(route.query.cardData) : undefined
    })
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// CardPreview.vue
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import defaultLogo from '@/assets/dlogo.jpg'

export default {
  name: 'CardPreview',
  props: {
    cardData: {
      type: Object,
      required: false,
      default: () => ({
        orientation: 'horizontal',
        logo: null,
        logoSize: 50,
        textContent: {
          nom: '',
          prenoms: '',
          titre: ''
        },
        rectoStyles: {
          backgroundColor: '#ffffff',
          textColor: '#000000'
        },
        versoStyles: {
          backgroundColor: '#000051',
          textColor: '#ffffff'
        },
        qrInfo: ''
      })
    }
  },
  setup(props) {
    const route = useRoute()
    
    // Use computed to handle both direct props and route query data
    const previewData = computed(() => {
      if (route.query.cardData) {
        return JSON.parse(route.query.cardData)
      }
      return props.cardData
    })

    return {
      cardData: previewData,
      defaultLogo
    }
  }
}