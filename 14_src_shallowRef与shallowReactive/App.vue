<template>
  <button @click="isShow=!isShow">显示/隐藏</button>
  <br/>
  <Demo v-if="isShow"/>
  
</template>

<script>
import {ref} from 'vue'
import Demo from './components/Demo.vue'
export default {
  components: { Demo },
  name: 'App',
  setup(){
    let isShow=ref(true)
    return {isShow}
  }
}
</script>
