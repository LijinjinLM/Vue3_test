<template>
  <div class="child">
    <h3>我是子组件</h3>
    {{sum}}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Child',
  setup(){
    let sum=ref(0)   
    //返回一个对象（常用）
    return{
      sum
    }

    /* return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve(sum)
      },3000)
    }) */
  }
}
</script>

<style scoped>
.child{
  background: pink;
  padding: 10px;
}
</style>
