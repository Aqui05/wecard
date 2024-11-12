<!-- src/components/CardOrientation.vue -->
<template>
    <div class="orientation-section">
      <h2>Orientation de la carte</h2>
      <div class="orientation-options">
        <div 
          class="orientation-option"
          :class="{ active: selectedOrientation === 'horizontal' }"
          @click="$emit('update:orientation', 'horizontal')"
        >
          <div class="preview-box horizontal"></div>
          <span>Horizontal</span>
        </div>
        
        <div 
          class="orientation-option"
          :class="{ active: selectedOrientation === 'vertical' }"
          @click="$emit('update:orientation', 'vertical')"
        >
          <div class="preview-box vertical"></div>
          <span>Vertical</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardOrientation',
    props: {
      selectedOrientation: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .orientation-section {
    background: white;
  }

  ::-webkit-scrollbar {
  display: none;
}

  .orientation-section h2 {
    font-weight: 700;
    color: black
  }

  .orientation-option span {
    color: black
  }
  
  .orientation-options {

    display: flex;
    justify-self: center;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    margin-bottom: 11px;
  }
  
  .orientation-option {

    display: flex;
    justify-self: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  
  .orientation-option:hover {
    background: #f5f5f5;
  }
  
  .orientation-option.active {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 5px #0004;
  }
  
  .preview-box {
    border: 2px solid #ccc;
    border-radius: 4px;
  }
  
  .preview-box.horizontal {
    width: 60px;
    height: 40px;
    background-color: #fb4aff;
  }
  
  .preview-box.vertical {
    width: 40px;
    height: 60px;
    background-color: #fcaa30;
  }
  </style>


