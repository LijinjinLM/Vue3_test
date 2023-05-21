<template>
  <h2>数据：{{sum}}</h2>
  <button @click="sum+=1">求和</button>
  <hr>
  <h2>当前点击鼠标时的坐标,x:{{point.x}},y:{{point.y}}</h2>
</template>

<script>
import {ref} from 'vue'
import usePoint from '../hooks/usePoint'
export default {
  name: 'Demo',
  setup(){
    let sum=ref(0)
    let point=usePoint();

    //返回一个对象（常用）
    return{
      sum,
      point
    } 
  }
}
</script>
