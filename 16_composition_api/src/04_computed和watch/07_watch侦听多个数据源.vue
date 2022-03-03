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
      
        // 1. 定义可响应式对象
        const info =reactive({name:"wang",age:21})
        const name =ref("wang")

        watch([info,name],([newInfo,newName],[oldInfo,oldName])=>{
            console.log(newInfo,newName,oldInfo,oldName);
        })
        
        // 将 info 解构为 普通对象
        watch([()=>({
            ...info
        }),name],([newInfo,newName],[oldInfo,oldName])=>{
            console.log(newInfo,newName,oldInfo,oldName);
        })
        
       
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