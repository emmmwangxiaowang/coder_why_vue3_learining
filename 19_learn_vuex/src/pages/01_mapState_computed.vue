<template>
    <div>
        <h2>counter --{{sCounter}}</h2>
        <h2>name --{{sName}}</h2>
        <h2>age --{{sAge}}</h2>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
        computed:{
            fullName(){
                return "wang xiao wang"

            },

            //mapState 将vuex 中的数据映射过来, ... 析构
            // ...mapState(["counter","name","age"]),

            ...mapState({
                sCounter:state=>state.counter,
                sName:state=>state.name,
                sAge:state=>state.age
            })

        }
    }
</script>

<style scoped>

</style>