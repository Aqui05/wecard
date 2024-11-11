<template>
    <div class="card-preview-page">
      <CardPreview :cardData="cardData" />
    </div>
  </template>
  
  <script>
  import CardPreview from '@/components/CardPreview.vue';
  
  export default {
    name: 'CardPreviewPage',
    components: {
      CardPreview
    },
    props: {
      cardData: {
        type: Object,
        required: true
      }
    }
  }
  </script>