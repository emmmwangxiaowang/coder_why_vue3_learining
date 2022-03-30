<template>
    <div>
        <h2>Home</h2>
    </div>


    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">动态</router-link>

    <!-- 子组件位置 -->
    <router-view></router-view>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>