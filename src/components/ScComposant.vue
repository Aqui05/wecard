<!-- src/views/CreateCard.vue -->
<template>
    <div class="create-card-container">
      <div class="left-section">
        <CardOrientation
          :selectedOrientation="cardData.orientation"
          @update:orientation="updateOrientation"
        />
        
        <CardPersonalization
          :cardData="cardData"
          @update:logo="updateLogo"
          @update:textContent="updateTextContent"
          @update:logoSize="updateLogoSize"
          @update:styles="updateStyles"
        />
      </div>
      
      <div class="right-section">
        <CardPreview
          :cardData="cardData"
        />
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import CardOrientation from '../components/CardOrientation.vue'
  import CardPersonalization from '../components/CardPersonalization.vue'
  import CardPreview from '../components/CardPreview.vue'
  
  export default {
    name: 'CreateCard',
    components: {
      CardOrientation,
      CardPersonalization,
      CardPreview
    },
    setup() {
      const cardData = ref({
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
  
      const updateOrientation = (newOrientation) => {
        cardData.value.orientation = newOrientation
      }
  
      const updateLogo = (newLogo) => {
        cardData.value.logo = newLogo
      }
  
      const updateTextContent = (field, value) => {
        cardData.value.textContent[field] = value
      }
  
      const updateLogoSize = (size) => {
        cardData.value.logoSize = size
      }
  
      const updateStyles = (side, property, value) => {
        cardData.value[`${side}Styles`][property] = value
      }
  
      return {
        cardData,
        updateOrientation,
        updateLogo,
        updateTextContent,
        updateLogoSize,
        updateStyles
      }
    }
  }
  </script>
  
  
  <style scoped>
  .create-card-container {
    display: flex;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 8px 8px 55px #00000080;
    height: 600px;
    width: 90%;
    align-items: stretch;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: auto;
  }
  
  .left-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    overflow: scroll;

    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .right-section {
    flex: 1;
    position: sticky;
    top: 20px;
    background-blend-mode: darken;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: flex-direction .5s ease-in-out;
    user-select: none;
    background-color: rgba(0,0,0,.3);
  }
  
  @media (max-width: 768px) {
    .create-card-container {
      flex-direction: column;
    }
  }
  </style>