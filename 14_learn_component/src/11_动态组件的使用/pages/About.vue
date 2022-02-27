<template>
    <div>
        About 组件
        <button @click="counter++">{{counter}}</button>
    </div>
</template>

<script>
    export default {
        name:'About',
        data(){
            return{
                counter:0
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>