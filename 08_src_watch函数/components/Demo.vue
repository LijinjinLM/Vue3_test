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
import {ref,reactive, watch} from 'vue'
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
    
    watch(sum,(newData,oldDate)=>{
      console.log(`监听sum变化,新数据${newData},旧数据${oldDate}`)
    }) 

    /* watch([sum,msg],(newData,oldDate)=>{
      console.log(newData)
      console.log(`监听多个数据变化,新数据${newData}--------旧数据${oldDate}`)
    },{immediate:true}) */

    //监听reactive所定义的一个响应式数据中的全部属性，旧数据无法得到，强制开启了深度检测
   /* watch(person,(newData,oldDate)=>{
      console.log('新',newData)
      console.log('旧',oldDate) 
    },{deep:false}) */


   //监听reactive所定义的一个响应式数据中的某个属性
    /* watch(()=>person.firstName,(newData,oldDate)=>{
      console.log('新',newData)
      console.log('旧',oldDate)
    }) */

    //监听reactive所定义的一个响应式数据中的某些属性
    /* watch([()=>person.firstName,()=>person.lastName],(newData,oldDate)=>{
      console.log('新',newData)
      console.log('旧',oldDate)
    })*/

    //特殊情况
    watch(()=>person.job,(newData,oldDate)=>{
      console.log('新',newData)
      console.log('旧',oldDate)      
    },{deep:true})//此处监视的是reactive所定义的对象中的某个属性，所以deep配置有效




    //返回一个对象（常用）
    return{
      sum,
      msg,
      person
    } 
  }
}
</script>
