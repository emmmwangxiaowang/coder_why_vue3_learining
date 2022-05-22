<template>
    <div>
        <h2>counter --{{counter}}</h2>
        <h2>name --{{name}}</h2>
        <h2>age --{{age}}</h2>
        <hr>
        <h2>sCounter-- {{sCounter}}</h2>
        <h2>sName-- {{sName}}</h2>
    </div>
</template>

<script>
import {useState} from '../hooks/useState'

    export default {
        setup() {
            const storeState=useState(["counter","name","age"]);

            // 本身解析的工作还是交割 useStore 函数, 所以 封装以后还是即支持对象, 右支持数组
            const storeState2=useState({
                sCounter:state=>state.counter,
                sName:state=>state.name
            })
            return{
                ...storeState,
                ...storeState2
            }
        }
    }
</script>

<style scoped>

</style>