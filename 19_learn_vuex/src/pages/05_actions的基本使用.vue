<template>
    <div>
       <h2>当前计数为: {{$store.state.counter}}</h2>
       <hr>
            <button @click="increment">+1</button>
        
       <hr>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        methods:{
            increment(){
                this.$store.dispatch("incrementAction");
            }
        },
        mounted(){
            this.$store.dispatch("getHomeMultiData")
      
        },
        setup() {

            
        }

    }
</script>

<style scoped>

</style>