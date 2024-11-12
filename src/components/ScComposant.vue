<!-- src/views/CreateCard.vue  composant principal de création des cartes-->
<template>
  <section class="card-section">
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
  </section>
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

::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 993px) {
    .card-section {
        height: auto;
        margin: 5% 0;
    }
}

  .card-section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
  }


  .create-card-container {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    background-color: #fff

  }
  
  .left-section {
    width: 40%;
    height: 80vh;
    overflow: auto;
    border-radius: 5px;
    box-shadow: 8px 8px 55px #00000080;
    padding: 20px;
  }
  
  .right-section {
    width: 60%;
    height: 80vh;
    background: url(/src/backcard.82a6598a.jpg), rgba(0, 0, 0, .3);
    background-blend-mode: darken;
    object-fit: cover;
    gap: 50px;
    transition: flex-direction .5s ease-in-out;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .create-card-container {
      flex-direction: column;
    }
  }
  </style>