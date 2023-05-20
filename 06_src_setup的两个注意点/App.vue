<template>
  <Demo @hello="showHellow" message="消息" school="xx">
    <template v-slot:my>
      <h1>欢迎</h1>
    </template>   
  </Demo>
</template>

<script>
import {reactive} from 'vue'
import Demo from './components/Demo.vue'
export default {
  components: { Demo },
  name: 'App',
  setup(){
    function showHellow(vale){
      alert(`你好，触发了hello事件，收到的参数是${vale}`)
    }
    return{
      showHellow
    }
  }
 
}
</script>
