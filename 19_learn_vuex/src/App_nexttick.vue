<template>
    <div>
        <h2 class="title" ref="titleRef">{{msg}}</h2>
        <button @click="addmsgContent">+1</button>
    </div>
</template>

<script>
import {ref,onUpdated,nextTick} from 'vue'
    export default {
        setup() {
            const msg=ref("emmm")
            const titleRef=ref(null)
            const counter=ref(0)
            const addmsgContent=()=>{
                msg.value+="wang";

                // 拿到 DOM 更新之后的数据   
                nextTick(()=>{
                    console.log(titleRef.value.offsetWidth);
                })
            }
            const increment=()=>{
                counter.value++;
            }

            onUpdated(() => {
                console.log(titleRef.value.offsetWidth)
            })
            return{
                msg,
                addmsgContent,
                titleRef,
                counter,
                increment,
                onUpdated,
                nextTick
            }
        }
    }
</script>

<style scoped>

</style>