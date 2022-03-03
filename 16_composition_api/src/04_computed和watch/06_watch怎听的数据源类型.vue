<template>
    <div>
        <h2 ref="title">{{info.name}}</h2>
        <button @click="changeData">修改数据</button>
    </div>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
    setup () {
      
        const info =reactive({name:"wang",age:21})

        /* 
            watch 侦听函数的数据源有两种类型
            一个getter函数: 但是该getter函数必须引用可响应式对象(比如 reactive 或 ref)
            直接写入一个可响应式的对象,ref(如果是一个reactive侦听的对象,需要进行某些转换)
        */

       // 1.侦听 watch 是, 传入一个 getter 函数
        // watch(()=>info.name,(newValue,oldValue)=>{
        //     console.log("newValue:",newValue,"oldValue:",oldValue);

        // })

        // 2. 传入一个可响应式对象: ref对象
        // 情况一: reactive对象获取到的newValue和oldValue本身都是reactive对象
        // 情况二: ref对象获取 newVlaue和oldValue 是value 值本身
        // watch(info,(newValue,oldValue)=>{
        //     console.log("newValue:",newValue,"oldValue:",oldValue);
        // })

        //   如果希望 newValue 和 oldValue是一个普通对象
        watch(()=>{
            return {...info}
        },(newValue,oldValue)=>{
            console.log("newValue:",newValue,"oldValue:",oldValue);
        })
        
        // const name=ref("wang")
        // watch(name,(newValue,oldValue)=>{
        //     console.log("newValue:",newValue,"oldValue:",oldValue);
        // })
        const changeData=()=>{
            info.name +="1"
            // name.value+="1"
        }
        
        return {
            info,
            changeData
        }
    }
}
</script>

<style lang="scss" scoped>

</style>