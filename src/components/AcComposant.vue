<template>
    <div class="welcome-container">
      <div class="half-circle top-pink"></div>
      <div class="card">
        <h1 class="title">Bienvenue sur WeCard</h1>
        <p class="subtitle">Site pour générer votre carte de visite basée sur un design...</p>
        <button class="create-button" @click="handleCreate">
          Créer votre carte
        </button>
      </div>
      <div class="half-circle bottom-orange"></div>
    </div>
  </template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'AcComposant',
  setup() {
    const router = useRouter()
    
    const handleCreate = () => {
      router.push('/create-card')
    }

    return {
      handleCreate
    }
  }
}
</script>
  
  <style scoped>
  .welcome-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
    position: relative;
    overflow: hidden;
  }
  
  .half-circle {

    position: absolute;
  width: 62%;
  height: 26%;
  border-radius: 100% 100% 100% 100%;
  overflow: visible;
  pointer-events: none;
  }
  
  .top-pink {
    background-color: #ff69b4;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .bottom-orange {
    background-color: #ffa500;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
  }
  
  .card {
    background-color: #000051;
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    width: 80%;
    height: 70%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1;
    justify-content: center;
    /* justify-self: center; */
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    /* align-content: space-around; */
    align-items: center;
  }
  
  .title {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }
  
  .subtitle {
    color: white;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .create-button {
    background-color: white;
    color: #000051;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .create-button:hover {
    transform: scale(1.05);
  }
  </style>
  