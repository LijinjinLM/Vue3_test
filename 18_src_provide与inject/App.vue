<template>
  <div class="main">
    <h3>我是祖组件,     {{name}}----{{price}}</h3>
    <Child/>
  </div>
</template>

<script>
import {provide, reactive, ref, toRefs} from 'vue'
import Child from './components/Child.vue'
export default {
  components: { Child },
  name: 'App',
  setup(){
    let car=reactive({name:'奔驰',price:'40W'})
    //给自己的后代组件传递数据
    provide('car',car)
    return{...toRefs(car)}
  }
}
</script>
<style scoped>
.main{
  background: blue;
  padding: 10px;
}
</style>
