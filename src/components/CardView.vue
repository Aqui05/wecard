<!-- src/components/CardPreview.vue composant de preview de la carte-->
<template>
  <section class="export">
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
    :style="{
      width: `${calculateLogoWidth()}px`,
      minWidth: '50px',
      maxWidth: '200px'
    }"
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
      <div class="verso-content">
        <div class="qr-code">
          <img class="qr-placeholder" src="../qr.png" alt="qr">
          <div class="qr-info" v-if="cardData.qrInfo">{{ cardData.qrInfo }}</div>
        </div>
        <div class="wecard-branding">
          <div class="txt">
            WeCard <span class="pro-badge">Pro</span>
          </div>
          <img style="width: 10px;" src="../wifi.png" alt="wifi">
        </div>
      </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import defaultLogo from '@/assets/dlogo.jpg'

export default {
name: 'CardView',
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

  // Fonction pour calculer la largeur du logo basée sur sa taille
  const calculateLogoWidth = () => {
    const baseWidth = 150
    const scale = props.cardData.logoSize / 100
    const width = baseWidth * scale
    // Garantir que la valeur reste entre 50 et 200px
    return Math.min(Math.max(width, 50), 200)
  }

  // Propriété calculée pour déterminer les données de prévisualisation
  const previewData = computed(() => {
    try {
      if (route.query.cardData) {
        return JSON.parse(route.query.cardData)
      }
      return props.cardData
    } catch (error) {
      console.error('Erreur lors du parsing des données:', error)
      return props.cardData
    }
  })

  return {
    cardData: previewData,
    defaultLogo,
    calculateLogoWidth
  }
}
}
</script>



<style scoped>

.export {
  width: 100%;
    height: 100vh;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
.preview-section {
  background: none;
  border-radius: 8px;
  padding: 0px 20px;
  width: 50%;
  margin: auto;
}

.preview-cards {
  display: flex;
  justify-content: center;
}

.preview-cards.horizontal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: flex-direction .5s ease-in-out;
  user-select: none;
}

.preview-cards.vertical {
  background-blend-mode: darken;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transition: flex-direction .5s ease-in-out;
  user-select: none;
}

.card-preview {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 20px;
  position: relative;
  transition: all 0.3s ease;
}


/* modifie ce code pour mettre le gap de preview-card à 10px quand card-preview est à vertical */

.card-preview.recto.horizontal {
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  color: #000;
  padding: 20px 10px;
  width: 90%;
  height: 250px;
  color: rgb(0, 0, 0);
  display: flex;
}

.card-preview.recto.vertical{
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  color: #000;
  padding: 20px 10px;
  width: 50%;
  height: 400px;
  color: rgb(0, 0, 0);
  display: flex;
}

.card-preview.verso.vertical {
  width: 50%;
  height: 400px;
  color: rgb(255, 255, 255);
  flex-direction: column;
  padding: 20px 10px 5px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  color: #fff;
  display: flex;
}

.card-preview.verso.horizontal {
  padding: 20px 10px 5px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  color: #fff;
  display: flex;

  width: 90%;
  height: 250px;
  color: rgb(255, 255, 255);
  flex-direction: column;
}

.logo-section {
  display: flex;
  justify-content: right;
  margin-bottom: 15px;
}

.logo-section img {
  max-height: 150px;
  object-fit: contain;
}

.verso-content {
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
}

::-webkit-scrollbar {
  display: none;
}

.qr-code {
  display: flex;
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
  gap: 50px;
  position: relative;
}

.pro-badge {
  background-color: #fff;
  color: #000;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: .5em;
  top: -8px;
  position: relative;
}

/* Afficher les deux éléments de part et d'autres de l'espace disponibe */

.text-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  top: 50px;
  left: 50px;
  justify-content: flex-end;
  position: static;
}

.text-content span {
  font-weight: bold;
}


.firstname,
.title {
  margin-top: 5px;
}

/*@media (max-width: 768px) {
  .preview-cards {
    flex-direction: column;
    align-items: center;
  }
}*/
</style>