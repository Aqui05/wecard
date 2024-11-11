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
  
  .orientation-options {
    display: flex;
    gap: 20px;
    margin-top: 15px;
    flex-direction: row;
    flex-wrap: nowrap;
    /* align-content: center; */
    justify-content: space-between;
    align-items: center;
  }
  
  .orientation-option {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
    transition: all 0.3s ease;
    width: 50%;
    flex-wrap: nowrap;
    /* align-content: center; */
    justify-content: center;
  }
  
  .orientation-option:hover {
    background: #f5f5f5;
  }
  
  .orientation-option.active {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 5px 24px 0 rgba(0, 0, 0, 0.19)
  }
  
  .preview-box {
    border: 2px solid #ccc;
    border-radius: 4px;
  }
  
  .preview-box.horizontal {
    width: 60px;
    height: 40px;
    background: #ff69b4;
  }
  
  .preview-box.vertical {
    width: 40px;
    height: 60px;
    background: #ffa500;
  }
  </style>


