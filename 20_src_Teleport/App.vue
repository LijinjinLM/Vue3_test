<template>
  <div class="main">
    <h3>我是祖组件</h3>
    <Child/>
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
  components: { Child },
  name: 'App',
  setup(){  
    
  }
}
</script>
<style scoped>
.main{
  background: blue;
  padding: 10px;
}
</style>
