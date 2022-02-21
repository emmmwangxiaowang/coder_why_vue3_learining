<template>
    <div>
       <Home></Home>
       <!-- 如果 标签中没有内容, 可以就写但标签 -->
       <about></about>
        <button @click="addName">+1</button>
    </div>
</template>

<script>
import About from './About.vue'

import Home from './Home.vue'

    export default {
        components: { Home, About, About },        
    }
</script>

<style scoped>

</style>