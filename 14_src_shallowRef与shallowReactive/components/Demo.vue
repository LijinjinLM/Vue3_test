<template>
   <h2>{{person}}</h2>
  <h2>数据2：{{x.y}}</h2>
  <button @click="x.y+=1">求和</button>
  <h2>姓：{{firstName}}</h2>
  <h2>工作：{{job.a.b}}</h2>
  <button @click="firstName+='~'">姓改变</button>
  <button @click="job.a.b+='-'">工作改变</button>
</template>

<script>
import {ref,reactive, toRefs,shallowRef,shallowReactive} from 'vue'
export default {
  name: 'Demo',
  setup(){ 
  
    /* let x=ref({
      y:0
    }) */

    let x=shallowRef({
      y:0
    })
    console.log('----shallowRef-----------',x)

    //数据
    let person=shallowReactive({ //只考虑第一层数据
    //let person=reactive({ 
      firstName:'张',
      lastName:'三',
      job:{
        a:{
          b:'测试'
        }
      }   
    })

    //返回一个对象（常用）
    return{
      x,
      person,
      ...toRefs(person)
    } 
  }
}
</script>
