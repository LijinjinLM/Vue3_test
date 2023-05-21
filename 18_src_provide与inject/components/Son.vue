<template>
  <div class="son">
    <h3>我是孙组件,{{car.name}}----{{car.price}}</h3>
  </div>
</template>

<script>
import {ref,reactive, toRefs, inject} from 'vue'
export default {
  name: 'Son',
  setup(){ 
    let car=inject('car');
    console.log(car)
    //返回一个对象（常用）
    return{
     car
    } 
  }
}
</script>

<style scoped>
.son{
  background: yellow;
  padding: 10px;
}
</style>
