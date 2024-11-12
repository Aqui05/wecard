<!-- src/components/CardPersonalization.vue composant de personnalisation de la carte-->
<template>
    <div class="personalization-section">
      <h2>Personnaliser votre carte (recto)</h2>
      
      <div class="logo-section">
        <h3>Ajouter un logo</h3>
        <input 
          type="file" 
          accept="image/*"
          @change="handleLogoUpload"
        >
      </div>
  
      <div class="input-color">
        <label for="rectoBackground">Fond</label>
        <input 
          type="color" 
          id="rectoBackground"
          :value="cardData.rectoStyles.backgroundColor"
          @input="updateStyle('recto', 'backgroundColor', $event.target.value)" 
        />
      </div>
  
      <div class="input-color">
        <label for="rectoTextColor">Couleur du texte</label>
        <input 
          type="color" 
          id="rectoTextColor"
          :value="cardData.rectoStyles.textColor"
          @input="updateStyle('recto', 'textColor', $event.target.value)" 
        />
      </div>
  
      <div class="logo-size-section">
        <label>Ajuster la taille du logo</label>
        <input 
          type="range"
          min="20"
          max="100"
          :value="cardData.logoSize"
          @input="$emit('update:logoSize', parseInt($event.target.value))"
        >
      </div>
  
      <div class="text-section">
        <div class="input-group">
          <label for="nom">Nom</label>
          <input 
            type="text"
            id="nom"
            placeholder="DEVER"
            :value="cardData.textContent.nom"
            @input="updateText('nom', $event.target.value)"
          >
        </div>
        <div class="input-group">
          <label for="prenoms">Prénoms</label>
          <input 
            type="text"
            id="prenoms"
            placeholder="Luap"
            :value="cardData.textContent.prenoms"
            @input="updateText('prenoms', $event.target.value)"
          >
        </div>
        <div class="input-group">
          <label for="titre">Titre</label>
          <input 
            type="text"
            id="titre"
            placeholder="FullStack Dev"
            :value="cardData.textContent.titre"
            @input="updateText('titre', $event.target.value)"
          >
        </div>
      </div>
  
      <div class="pers-color-section">
        <h2>Personaliser votre carte (verso)</h2>
  
        <div class="input-color">
          <label for="versoBackground">Ajouter un Fond</label>
          <input 
            type="color" 
            id="versoBackground"
            :value="cardData.versoStyles.backgroundColor"
            @input="updateStyle('verso', 'backgroundColor', $event.target.value)" 
          />
        </div>
  
        <div class="input-color">
          <label for="versoTextColor">Couleur du texte</label>
          <input 
            type="color" 
            id="versoTextColor"
            :value="cardData.versoStyles.textColor"
            @input="updateStyle('verso', 'textColor', $event.target.value)" 
          />
        </div>
  
        <div class="input-group">
          <label for="qrInfo">QR Info (Nom, lien, ...)</label>
          <input 
            type="text"
            id="qrInfo"
            :value="cardData.qrInfo"
            @input="$emit('update:qrInfo', $event.target.value)"
          >
        </div>
  
        <div class="input-group">
      <button @click="showPreview" class="preview-button">
        Preview
      </button>
    </div>
    </div>
</div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  import CardPreview from './CardPreview.vue'
  import CardView from './CardView.vue';
  
  
  // Définir les props
  const props = defineProps({
    cardData: {
      type: Object,
      required: true
    }
  })
  
  // Définir les emits au niveau supérieur
  const emit = defineEmits([
    'update:textContent',
    'update:styles',
    'update:logo',
    'update:logoSize',
    'update:qrInfo'
  ])
  
  const router = useRouter()
  
  const showPreview = () => {
    try {
      const cardDataCopy = JSON.parse(JSON.stringify(props.cardData))
      router.push({
        name: 'CardView',
        query: {
          cardData: JSON.stringify(cardDataCopy)
        }
      })
    } catch (error) {
      console.error('Erreur lors de la navigation vers le preview:', error)
    }
  }
  
  const handleLogoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        emit('update:logo', e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }
  
  const updateText = (field, value) => {
    emit('update:textContent', field, value)
  }
  
  const updateStyle = (side, property, value) => {
    emit('update:styles', side, property, value)
  }
  
  const updateLogoSize = (event) => {
    emit('update:logoSize', parseInt(event.target.value))
  }
  
  
  const updateQrInfo = (event) => {
    emit('update:qrInfo', event.target.value)
  }
  </script>
  
  <style scoped>
  .personalization-section {
    background: white;
  }
  
  .logo-section,
  .text-section,
  .logo-size-section {
    margin-top: 20px;
  }
  
  .input-group,   .input-color {
    margin: 20px 0;
  }
  
  input[type="text"] {
    width: 100%;
    height: 40px;
    border: 1px solid #858C94;
    border-radius: 8px;
    padding: 5px 8px;
  }
  
  input[type="range"] {
    width: 100%;
    margin: 10px 0;
  }

  input[type="color"] {
    width: 100%;
    height: 40px;
    border: 1px solid #858C94;
    border-radius: 8px;
    padding: 5px 8px;
  }

  ::-webkit-scrollbar {
  display: none;
}
  
  .preview-button {
    width: 100%;

    background-color: #007;
    color: #fff;

    cursor: pointer;
    border: 1px solid white;
    border-radius: 8px;
    padding: 10px 15px;
    transition: .3s;
  }
  
  .preview-button:hover {
    background: #357abd;
  }
  
  h2 {
    font-weight: 700;
    color: black
  }
  
  h3 {
    font-weight: 700;
    color: black
  }
  
  label {
    font-weight: 700;
    color: black
  }
  </style>
  