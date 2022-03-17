<template>
    <div>
        <h2>当前技术: {{counter}}</h2>
        <button @click="increment">+1</button>

        <hello-world message="wang" @increment="getCounter"></hello-world>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import HelloWorld from './HelloWorld.vue'
    const counter=ref(0);
    const increment=()=>counter.value++;

    const getCounter=(payload)=>{
        console.log(payload);
          
    }
</script>

<style lang="scss" scoped>

</style>