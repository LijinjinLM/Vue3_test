<template>
  <h2>数据：{{sum}}</h2>
  <button @click="sum+=1">求和</button>
</template>

<script>
import {ref,reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum=ref(0)
    console.log('--setup--')
    //通过组合式API的形式使用生命周期钩子
    onBeforeMount(()=>{
      console.log('onBeforeMount调用')
    })
    onMounted(()=>{
      console.log('onMounted调用')
    })
    onBeforeUpdate(()=>{
      console.log('onBeforeUpate调用')
    })
    onUpdated(()=>{
      console.log('onUpdated调用')
    })
    onBeforeUnmount(()=>{
      console.log('onBeforeUnmount调用')
    })
    onUnmounted(()=>{
      console.log('onUnMounted调用')
    })
    
    //返回一个对象（常用）
    return{
      sum
    } 
  }
}
</script>
