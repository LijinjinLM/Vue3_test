<template>
  <div class="son">
    <h3>我是孙组件</h3>
    <Dialog/>
  </div>
</template>

<script>
import Dialog from './Dialog.vue'
export default {
  name: 'Son',
  components: { Dialog },
  setup(){ 
    
  }
}
</script>

<style scoped>
.son{
  background: yellow;
  padding: 10px;
}
</style>
