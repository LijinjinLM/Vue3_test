<template>
  <h2>姓：{{firstName}}</h2>
  <h2>工作：{{job.a.b}}</h2>
  <button @click="firstName+='~'">姓改变</button>
  <button @click="job.a.b+='-'">工作改变</button>
</template>

<script>
import {ref,reactive, toRefs,toRef} from 'vue'
export default {
  name: 'Demo',
  setup(){  
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

    const firstName=person.firstName;
    console.log('###',firstName)//字符串

    const firstName1=toRef(person,'firstName')
    console.log('toRef',firstName1)

    const x=toRefs(person);
    console.log('toRefs',x)

    //返回一个对象（常用）
    return{
      person,
      //不正确的写法1
      /* firstName:person.firstName,
      b:person.job.a.b  */
      //不正确的写法2,这样写不会改变源数据person
      /* firstName:ref(person.firstName) */


      //第一种写法用toRef处理一个属性
      /*firstName:toRef(person,'firstName'),
      b:toRef(person.job.a,'b')  */
      //第二种写法用toRefs处理多个属性
      ...toRefs(person)
    } 
  }
}
</script>
