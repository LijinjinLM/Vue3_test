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
    let person=ref({  //注意这是ref函数
      firstName:'张',
      lastName:'三',
      job:{
        a:{
          b:'测试'
        }
      }   
    })

    /* watch(person.value,(newValue,oldValue)=>{//1.可以用person.value监测
      console.log(`数据变化`,newValue,oldValue)
    }) */

    watch(person,(newValue,oldValue)=>{//2.加deep配置
      console.log(`数据变化`,newValue,oldValue)
    },{deep:true})


    //返回一个对象（常用）
    return{
      sum,
      msg,
      person
    } 
  }
}
</script>
