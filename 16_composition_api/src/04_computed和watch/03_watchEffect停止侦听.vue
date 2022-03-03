<template>
    <div>
        <h2>{{name}}--{{age}}</h2>
        <button @click="changeName">修改name</button>
        <button @click="changeAge">修改age</button>
    </div>
</template>

<script>
import {ref,watchEffect} from 'vue'
export default {
    setup () {
       // watchEffect: 自动收集响应式的依赖
       const name=ref("wang")
       const age=ref(21)

        const changeName=()=>{
            name.value+="1"
            // console.log(name);
        }

        const changeAge=()=>{
            age.value++
            if(age.value>25){
                // 调用 停止侦听函数
                stop()
            }
            // console.log(age);
        }

        // 会立即执行一次--初次调用自动收集响应式依赖
        // watchEffect 的返回值是一个 函数, --停止侦听!
        const stop= watchEffect(()=>{
            console.log("name:",name.value);
            console.log("name:",age.value);
        })

        return {
            name,age,changeAge,changeName
        }
    }
}
</script>

<style lang="scss" scoped>

</style>