<template>
  <h1>信息</h1>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <h2>全名：{{person.fullName}}</h2>
  全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {computed, reactive} from 'vue'
export default {
  name: 'Demo',
  setup(){
    //数据
    let person=reactive({
      firstName:'张',
      lastName:'三'   
    })
    //计算属性简写-只读
    /* person.fullName=computed(()=>{
      return person.firstName +'-'+ person.lastName
    }) */


    //计算属性全写-响应式
    person.fullName=computed({
      get(){
        return person.firstName +'-'+ person.lastName
      },
      set(value){
        console.log(value)
        const full=value.split('-')
        person.firstName=full[0]||''
        person.lastName=full[1]||''
      }
    })

    //返回一个对象（常用）
    return{
      person
    } 
  }
}
</script>
