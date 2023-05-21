<template>
  <h2>数据1：{{sum}}</h2>
  <button @click="sum+=1">求和</button>
  <h2>姓：{{firstName}}</h2>
  <h2>工作：{{job.a.b}}</h2>
  <h3>座机信息：{{person.car}}</h3>
  <button @click="firstName+='~'">姓改变</button>
  <button @click="job.a.b+='-'">工作改变</button>
  <button @click="showRawPerson">输出原始数据</button>
  <button @click="addCar">添加车</button>
  <button @click="person.car.name+='!'" v-if="person.car">修改车</button>
</template>

<script>
import {ref,reactive, toRefs,toRaw, markRaw } from 'vue'
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

    function showRawPerson(){
      const p=toRaw(person)//将一个由reactive生成的响应式对象变成普通对象
      console.log(person)      
      console.log(p)
    }

    function addCar(){
      let car={name:'奔驰',price:'40W'} 
      person.car=markRaw(car)//数据可以改变,但标记使其无法成为响应式数据
    }

    //返回一个对象（常用）
    return{
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar
    } 
  }
}
</script>
