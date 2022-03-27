<template>
    <div>
        <input v-if="counter%2==1?0:1" type="text" v-wang.li.jiang="'chen'">

        <button @click="increment">当前计数</button>

    </div>
</template>

<script>
import {ref,onMounted} from 'vue'
export default {
    
    // 局部指令
    directives:{
        wang:{
            created(el,bindings,vnode,preVnode){
                console.log("wang created",el,bindings,vnode,preVnode)
            }, 
            beforeMount(){
                console.log("wang beforeMount")
            }, 
            mounted(){
                console.log("wang mounted")
            },
            beforeUpdate(){
                console.log("wang beforeUpdate")
            }, 
            updated(){
                console.log("wang updated")
            }, 
            beforeUnmount(){
                console.log("wang beforeUnmount")
            },
            unmounted() {
                console.log("wang unmounted")
            },
        }
    },
    setup() {
        const counter = ref(0)
        const increment=()=>counter.value++;

        return {
            counter,
            increment
        }
        
    }
    
}
</script>

<style lang="scss" scoped>

</style>