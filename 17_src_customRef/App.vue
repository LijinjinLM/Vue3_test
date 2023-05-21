<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script>
import {customRef, ref} from 'vue'
export default {
  name: 'App',
  setup(){
    function myRef(value,delay){
      let timer
      return customRef((track,trigger)=>{
        return{
          get(){
            console.log(`有人从myRef容器读取数据，我把${value}给他了`)
            track();//通知vue追踪数据变化
            return value
          },
          set(newValue){
             console.log(`有人把myRef容器的数据改成了${newValue}`)
            value=newValue
            clearTimeout(timer)
            timer=setTimeout(()=>{
              trigger()//通知vue重新解析模板
            },delay)           
          }
        }
      })
    }

    //let keyword=ref('hello')//使用vue提供的ref
    let keyword=myRef('hello',500)//使用自定义提供的ref
    return {keyword}
  }
}
</script>
