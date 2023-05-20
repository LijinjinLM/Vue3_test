<template>
  <h1>信息</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h3>职位：{{job.type}}</h3>
  <h3>薪资：{{job.salary}}</h3> 
  <button @click="changeInfo">修改</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
 
  setup(){
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type:'前端工程师',
      salary:'30K'
    })

    //方法
    function changeInfo(){
        console.log('姓名',name);
        console.log('工作',job);
        name.value='李四'
        age.value='48'
        job.value.type='UI'
        job.value.salary='50k'      
    }

    //返回一个对象（常用）
     return{
      name,
      age,
      job,
      changeInfo
    } 
  }
}
</script>
