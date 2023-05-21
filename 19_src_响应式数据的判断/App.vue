<template>
  <div class="main">
    <h3>我是祖组件</h3>
  </div>
</template>

<script>
import {isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, toRefs} from 'vue'
export default {
  name: 'App',
  setup(){
    let car=reactive({name:'奔驰',price:'40W'})
    let sum=ref(0)
    let car2=readonly(car)

    console.log(isRef(sum))
    console.log(isReactive(car))
    console.log(isReadonly(car2))
    console.log(isProxy(car2))//检查一个对象是否是由reactive或readonly方法创建的代理


    return{...toRefs(car)}
  }
}
</script>
<style scoped>
.main{
  background: pink;
  padding: 10px;
}
</style>
