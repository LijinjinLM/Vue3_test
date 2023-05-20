//引入的不再是Vue的构造函数，引入的是一个名为createApp的工厂函数（无需通过new关键字去调用，可直接调用）。
//import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'

//创建应用实例对象-app（类似之前的Vue2的vm,但是app比vm更“轻”）
const app=createApp(App)
console.log('@@@',app)
app.mount('#app')

/*setTimeout(()=>{
    app.unmount('#app')
},1000)*/

/*const vm=new Vue({
   render: h => h(App),
 })
vm.$mount('#app')*/
