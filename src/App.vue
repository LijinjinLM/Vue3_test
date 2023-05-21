<template>
  <div class="main">
    <h3>我是App组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child/>
      </template>
      <template v-slot:fallback>
        稍等，加载中...
      </template>
    </Suspense>
    
  </div>
</template>

<script>
//import Child from './components/Child.vue'//静态引入 
import {defineAsyncComponent} from 'vue'
const Child=defineAsyncComponent(()=>import('./components/Child.vue'))//异步引入
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
