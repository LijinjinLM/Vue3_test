<template>
  <div>
    <button @click="isShow=true">点我弹框</button>
    <teleport to='body'>
      <div v-if="isShow" class="mask">
        <div class="dialog">
          <h3>我是一个弹框</h3>
          <h2>一些内容</h2>
          <h2>一些内容</h2>
          <h2>一些内容</h2>
          <h2>一些内容</h2>
          <button @click="isShow=false">关闭</button>
        </div>    
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'Dialog',
  setup(){   
    let isShow=ref(false)
    //返回一个对象（常用）
    return {
     isShow
    } 
  }
}
</script>

<style scoped>
.mask{
  position:absolute;
  top:0px;left:0px;right:0px;bottom: 0px;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog{
  position: absolute;
  background:green;
  width: 300px;
  height: 300px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  text-align: center;
}
</style>
