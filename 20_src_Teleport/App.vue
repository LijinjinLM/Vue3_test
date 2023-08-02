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
    console.log('远端修改')
  }
}
  console.log('原酸修改前')
  console.log('原酸修改后')
</script>
<style scoped>
.main{
  background: blue;
  padding: 10px;
}
</style>
