<template>
    <h2>hello world 组件{{message}}</h2>
</template>

<script>
    export default{
        data(){
           return{
               message:'Hello World!'
           }
        }
    }
</script>

<style scoped>
    h2{
        background-color: cyan;
    }
</style>