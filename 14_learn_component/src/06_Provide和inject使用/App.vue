<template>
    <div>
       <home></home>
        <button @click="addName">+1</button>
    </div>
</template>

<script>
import Home from './Home.vue'
import {computed } from 'vue'
    export default {
        components: { Home },
        // provide:{
        //     name:'wang',
        //     age:20,
        //     length:2
        // },

        // 如果要在provide 中引入 data中的数据, 推荐把 provide写成函数
        provide(){
            console.log(this);

            return {
                name:'wang',
                age:20,
                // 这种方法 length 不会更新值
                // length:this.names.length

                // computed 返回的是一个 ref对象 值在 .value中
                length:computed(()=>this.names.length)
                
            }
        },
        data(){
            return {
                names:['a','b','c']
            }
        },methods:{
            addName(){
                this.names.push('wang')
                console.log(this.names)
            }
        },
        setup(){

        }
        
    }
</script>

<style scoped>

</style>