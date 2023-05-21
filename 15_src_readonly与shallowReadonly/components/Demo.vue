<template>
  <h2>{{person}}</h2>
  <h2>数据1：{{sum}}</h2>
  <button @click="sum+=1">求和</button>
  <h2>姓：{{firstName}}</h2>
  <h2>工作：{{job.a.b}}</h2>
  <button @click="firstName+='~'">姓改变</button>
  <button @click="job.a.b+='-'">工作改变</button>
</template>

<script>
import {ref,reactive, toRefs, readonly,shallowReadonly} from 'vue'
export default {
  name: 'Demo',
  setup(){ 
    let sum=ref(0)
    //数据
    let person=reactive({ 
      firstName:'张',
      lastName:'三',
      job:{
        a:{
          b:'测试'
        }
      }   
    })

    //person=readonly(person)
    person=shallowReadonly(person)

    //返回一个对象（常用）
    return{
      sum,
      person,
      ...toRefs(person)
    } 
  }
}
</script>
