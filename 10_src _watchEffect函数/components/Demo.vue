<template>
  <h2>数据：{{sum}}</h2>
  <button @click="sum+=1">求和</button>
  <h2>消息：{{msg}}</h2>
  <button @click="msg+='!'">求和</button>
  <h2>姓：{{person.firstName}}</h2>
  <button @click="person.firstName+='~'">姓改变</button>
  <h2>工作：{{person.job.a.b}}</h2>
  <button @click="person.job.a.b+='-'">工作改变</button>
</template>

<script>
import {ref,reactive, watch, watchEffect} from 'vue'
export default {
  name: 'Demo',
  setup(){
    let sum=ref(0)
    let msg=ref('你好')

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

    watch(sum,(newValue,oldValue)=>{
      console.log(`数据变化`,newValue,oldValue)
    })

    //watchEffect所指定的回调中得到的数据只要发生改变，则直接重新执行回调函数
    watchEffect(()=>{
      let x=msg.value
      let p=person.job.a.b
      console.log('watchEffect调用')
    })


    //返回一个对象（常用）
    return{
      sum,
      msg,
      person
    } 
  }
}
</script>
