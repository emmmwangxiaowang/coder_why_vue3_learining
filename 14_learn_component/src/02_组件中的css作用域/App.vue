<template>  
    <div>
        <!-- 如果不加 根元素, scoped 不会起作用, 会 '越界' -->
        <h2>App</h2>
        <hello-world></hello-world>
    </div>
    
</template>

<script>
import HelloWorld from './HelloWorld.vue'
    export default {
  components: { HelloWorld },
        
    }
</script>

<style scoped>
    h2{
        color: cyan;
    }
</style>