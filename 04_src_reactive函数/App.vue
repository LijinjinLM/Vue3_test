<template>
  <h1>信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h3>职位：{{person.job.type}}</h3>
  <h3>薪资：{{person.job.salary}}</h3>
  <h3>数据：{{person.job.a.b.c}}</h3>
  <h3>爱好：{{person.hobby}}</h3>
  <button @click="changeInfo">修改</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
 
  setup(){
    //数据
    let person=reactive({
      name:'张三',
      age:18,
      job:{
        type:'前端工程师',
        salary:'30K',
        a:{
          b:{
            c:'测试'
          }
        }
      },    
      hobby:['看书','运动']
    })

    //方法
    function changeInfo(){
        console.log(person);
        person.name='李四'
        person.age=48
        person.job.type='UI'
        person.job.salary='50k'  
        person.job.a.b.c='测试数据'
        person.hobby[0]='跑步'   
    }

    //返回一个对象（常用）
     return{
      person,
      changeInfo
    } 
  }
}
</script>
