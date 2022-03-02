<template>
    <div>
       
        <button @click="updateState">+1</button>
    </div>
</template>

<script>

import {ref,readonly,reactive} from 'vue'
    export default {
        props:{
            message:{
                type:String,
                required:true
            }
        },

        setup() {

            // 被readonly 修饰的数据都不能被修改,只能修改 没被修饰之前的数据

            // 1.普通对象
          const info1={name:"wang"}
          const readonlyInfo1=readonly(info1)
         
        //  2. 响应式对象
        const info2=reactive({
            name:"wang"
        })
        const readonlyInfo2=readonly(info2)

        // 3. 响应式对象 ref
        const info3=ref("wang")
        const readonlyInfo3=readonly(info3)
         const updateState=()=>{
            //  readonlyInfo1.name="wangxiaowang",
            //  readonlyInfo2.name="wangxiaowang",
            //  info2.name="wangxiaowang",
             readonlyInfo3.value="wangxiaowang",
             info3.value="wangxiaowang"
         }

         return {
             updateState
         }
        }
    }
</script>

<style scoped>

</style>