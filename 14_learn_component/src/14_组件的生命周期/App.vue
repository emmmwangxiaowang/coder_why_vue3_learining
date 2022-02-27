<template>
    <div>
        <button @click="isShow=!isShow">切换</button>
        <template v-if="isShow">
            <home></home>   
        </template>
    </div>
</template>

<script>
    import Home from './Home.vue'
    export default {
        data(){
            return {
                isShow:true
            }
        },
        components: { Home },
    }
</script>

<style scoped>

</style>