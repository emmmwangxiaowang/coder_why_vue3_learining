<template>
    <div>
        <h2>{{message}}</h2>
        <!-- 再 template模板中使用 ref 对象时,会自动解包 -->
        <h2>当前计数:{{counter}}</h2>
           <!-- ref 的解包 是浅层解包(info 是一个普通的js对象) -->
        <h2>{{info}}</h2>
        <!-- 当最外层包裹的是一个 reactive 可响应式对象, 呢么 内容的ref 可以解包 -->
        <h2>{{reactiveInfo.counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
import {reactive} from 'vue'
import {ref} from 'vue'
    export default {
        props:{
            message:{
                type:String,
                required:true
            }
        },
        // 参数一: props 父组件传递过来的属性
        // setup(props,context) {
        //     console.log(props.message);
        //     console.log(context.attrs.id);
        //     console.log(context.slots);
        //     console.log(context.emit);
        // },
        // {attrs,slots,emit}  对 context 进行结构的写法
        setup() {
          
          let counter=ref(100)
            // optionsAPI 使用 reactive 来提供响应式
            // const state= reactive({
            //     counter:100,
            //     title:'hello'
            // })
            let info=ref({counter})
            // 局部函数

            const reactiveInfo=reactive({
                counter
            })
            const increment=()=>{
                // 再模板中会自动解包, 但是再方法中不会
                counter.value++;
                console.log(counter);
            }
            return {
                reactiveInfo,
                info,
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>