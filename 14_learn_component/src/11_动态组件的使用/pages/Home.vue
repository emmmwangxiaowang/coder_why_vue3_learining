<template>
    <div @click="pageClick">
        <h2>Home 组件 {{name}} -- {{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Home',
        props:{
            name:{
                type:String
            },age:{
                type:Number,
                default:18
            }
        },
        emits:['pageClick'],
        methods:{
            divClick(){
                this.$emit('pageClick')
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>