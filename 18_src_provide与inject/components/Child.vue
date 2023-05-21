<template>
  <div class="child">
    <h3>我是子组件</h3>
    <Son/>
  </div>
</template>

<script>
import {ref,reactive, toRefs} from 'vue'
import Son from './Son.vue'
export default {
  components: { Son },
  name: 'Child',
  setup(){ 
    
    //返回一个对象（常用）
    return{
     
    } 
  }
}
</script>

<style scoped>
.child{
  background: pink;
  padding: 10px;
}
</style>
