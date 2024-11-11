<!-- src/components/CardPersonalization.vue -->
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
        <h3>Ajuster la taille du logo</h3>
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
            Afficher le preview
            </button>
        </div>
    </div>
</div>
  </template>
  
  <script>
  import CardPreview from './CardPreview.vue'
  
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
    methods: {
      handleLogoUpload(event) {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.$emit('update:logo', e.target.result)
          }
          reader.readAsDataURL(file)
        }
      },
      updateText(field, value) {
        this.$emit('update:textContent', field, value)
      },
      updateStyle(side, property, value) {
        this.$emit('update:styles', side, property, value)
      },

      showPreview() {
  this.$router.push({ name: 'CardPreview', state: { cardData: this.cardData } });
}

    }
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
  
  .input-group {
    margin: 10px 0;
  }
  
  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  input[type="range"] {
    width: 100%;
    margin: 10px 0;
  }
  
  
  .input-color {
    margin: 10px 0;
  }

  input[type="color"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 40px;
  }
  
  .preview-button {
    background: #4a90e2;
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
    width: 100%;
  }
  
  .preview-button:hover {
    background: #357abd;
  }
  
  h2 {
    color: #333;
    margin-bottom: 15px;
  }
  
  h3 {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #666;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    color: #666;
  }
  </style>
  