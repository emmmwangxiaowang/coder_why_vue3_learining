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
        const info =reactive({name:"wang",age:21,friend:{name:"jiang"}})
        
        // reactive 对象默认开启深度侦听
        // watch(info,(newInfo,oldInfo)=>{
        //     console.log(newInfo,oldInfo);
        // })

        // 结构为普通对象 默认没有开启深度侦听
        watch(()=>({...info}),(newInfo,oldInfo)=>{
            console.log(newInfo,oldInfo);
        },{
            // 开启深度侦听
            deep:true,
            // 开启立即执行
            immediate:true
        })

        // watch(()=>{
        //     // 结构出来还是个代理 可以再次解构
        //     const info=({...info});
        //     const friend={info}
        // },(newInfo,oldInfo)=>{
        //     console.log(newInfo,oldInfo);
        // })
        
       
        const changeData=()=>{
            // info.name +="1"
            info.friend.name+="1"
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