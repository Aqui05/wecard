<!-- src/components/CardPreview.vue -->
<template>
    <div class="preview-section">
      <div
        class="preview-cards"
        :class="cardData.orientation"
      >
        <!-- Carte Recto -->
        <div
          class="card-preview recto"
          :class="cardData.orientation"
          :style="{
            backgroundColor: cardData.rectoStyles.backgroundColor,
            color: cardData.rectoStyles.textColor
          }"
        >
          <div class="logo-section" v-if="cardData.logo || defaultLogo">
            <img
              :src="cardData.logo || defaultLogo"
              :style="{ maxWidth: cardData.logoSize + '%' }"
              alt="Logo"
            />
          </div>
          <div class="text-content">
            <div class="name"><span>Nom: </span> {{ cardData.textContent.nom || 'DEVER' }}</div>
            <div class="firstname"><span>Prénoms: </span>{{ cardData.textContent.prenoms || 'Luap' }}</div>
            <div class="title"><span>Titre: </span>{{ cardData.textContent.titre || 'Fullstack Dev' }}</div>
          </div>
        </div>
  
        <!-- Carte Verso -->
        <div
          class="card-preview verso"
          :class="cardData.orientation"
          :style="{
            backgroundColor: cardData.versoStyles.backgroundColor,
            color: cardData.versoStyles.textColor
          }"
        >
          <div class="qr-code">
            <div class="qr-placeholder"></div>
            <div class="qr-info" v-if="cardData.qrInfo">{{ cardData.qrInfo }}</div>
          </div>
          <div class="wecard-branding">
            <div class="txt">
              WeCard <span class="pro-badge">Pro</span>
            </div>
            <img style="width: 20px;" src="../wifi.png" alt="wifi">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRoute } from 'vue-router'
  import defaultLogo from '@/assets/dlogo.jpg';

  
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

      const cardData = route.state?.cardData || props.cardData
  
  
      return {
        cardData,
        defaultLogo
      }
    }
  }
  </script>
  


  <style scoped>
  .preview-section {
    background: none;
    border-radius: 8px;
    padding: 0px 20px;
  }
  
  .preview-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .preview-cards.horizontal {
    gap: 80px;
  }

  .preview-cards.vertical {
    gap: 20px;
    height: 30pc;
    top: 4pc;
    position: relative;
    margin: auto;
  }
  
  .card-preview {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 20px;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .card-preview.horizontal {
    width: 95%;
    height: 260px;
  }
  
  .card-preview.vertical {
    width: 200px;
  }

  /* modifie ce code pour mettre le gap de preview-card à 10px quand card-preview est à vertical */
  
  .card-preview.recto {
    display: flex;
    flex-direction: column;
  }
  
  .card-preview.verso {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .logo-section {
    display: flex;
    justify-content: right;
    margin-bottom: 15px;
  }
  
  .logo-section img {
    max-height: 60px;
    object-fit: contain;
  }
  
  .qr-placeholder {
    width: 100px;
    height: 100px;
    margin: auto;
    background: white;
    margin-bottom: 10px;
  }
  
  .qr-info {
    text-align: center;
    font-size: 0.9rem;
    margin-bottom: 15px;
    word-break: break-all;
  }
  
  .wecard-branding {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 20px;
    /* align-content: center; */
    justify-content: space-between;
    bottom: -19%;
    position: relative;
  }
  
  .pro-badge {
    background: rgba(255, 255, 255, 0.2);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.8rem;
  }
  
  .text-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text-content span {
    font-weight: bold;
  }
  
  
  .firstname,
  .title {
    margin-top: 5px;
  }
  
  @media (max-width: 768px) {
    .preview-cards {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>