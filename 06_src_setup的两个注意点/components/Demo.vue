<template>
  <h1>信息</h1>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>消息：{{message}}</h2>
  <h2>学校：{{school}}</h2>
  <slot name="my"></slot>
  <button @click="test">触发hello事件</button>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'Demo',
  props:['message','school'],
  emits:['hello'],
  /* beforeCreate(){
    console.log('---beforeCreate---')
  }, */
 
  setup(props,context){
    //console.log('---setup---',this)
    //console.log('---setup---',props)
    console.log('---setup---',context)
    //console.log('---setup---',context.attrs)//相当于Vue2中的$attrs
    console.log('---setup触发事件---',context.emit)//触发自定义事件
    console.log('---setup插槽---',context.slots)//插槽
    //数据
    let person=reactive({
      name:'张三',
      age:18    
    })

    function test(){
      context.emit('hello',666)
    }

    //返回一个对象（常用）
     return{
      person,
      test
    } 
  }
}
</script>
