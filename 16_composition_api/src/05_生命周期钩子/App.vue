<template>
    <div>
        <h2>{{counter}}</h2>
        <button @click="increment">increment</button>
    </div>
</template>

<script>
import {ref,onMounted,onUpdated,onUnmounted} from 'vue'
export default {
    setup () {

        const counter=ref(0)
        
        const increment=()=>{
            counter.value++;
        }

        //生命周期可以注册多个 , 按顺序执行
        // options API 中的生命周期函数 beforeCreate 和 created 在 setup 中直接执行就可以了, 没有对应的 api
        // 因为 setup 执行的时机 就是在 创建之前, 
        // setup 是围绕 beforeCreate 和 created 生命周期钩子运行的, 所以不需要显示的定义它们, 
        // 换句话说, 在这些钩子编写的任何代码都应该直接在 setup 函数中编写
        onMounted(()=>{
            console.log("App Mounted1");
        })

         onMounted(()=>{
            console.log("App Mounted2");
        })


        onUnmounted(()=>{
           console.log("App onUnmounted"); 
        })

        onUpdated(()=>{
            console.log("App onUpdated");
        })

        return {
            counter,
            increment
        }
    }
}
</script>

<style lang="scss" scoped>

</style>