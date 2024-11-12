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
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    background-blend-mode: darken;
    position: relative;
  }

  @media screen and (max-width: 993px) {
    .card {
        width: 90%;
        height: 90%;
    }
}
  
  .half-circle {

    position: absolute;
    width: 45%;
    border-radius: 100% 100% 100% 100%;
    pointer-events: none;

    height: 45%;
    border-radius: 50%;
    content: "";
  }
  
  .top-pink {
    top: 5%;
    background-color: #fb4aff;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .bottom-orange {
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    bottom: 5%;
    background-color: #fcaa30;
  }
  
  .card {
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;

    width: 60%;
    height: 60%;
    background-color: #004;
    color: #fff;
    padding: 20px;
    border-radius: 18px;
    box-shadow: 0 0 30px #0004;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 5;
  }
  
  .title {
    color: white;
    font-weight: 700;
  }
  
  .subtitle {
    color: white;
    font-size: 1.1rem;
  }
  
  .create-button {
    font-size: 1rem;
    background-color: #fff;
    color: #004;
    margin: 20px 0;


    cursor: pointer;
    background-color: #fff;
    border: 1px solid white;
    border-radius: 8px;
    padding: 10px 15px;
    transition: .3s;
  }
  
  .create-button:hover {
    transform: scale(1.05);
  }
  </style>
  