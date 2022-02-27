<template>
    <div>
        <h2>NavBar</h2>
        <button @click="getParentAndRoot">获取父节点</button>


    </div>
</template>

<script>
    export default {
        data(){
            return {
                message:'NavBar 中的信息'
            }
        },
        methods:{
            say(){
                console.log('hello');
            },
            getParentAndRoot(){
                console.log(this.$parent);
                console.log(this.$root);
            }
        }
    }
</script>

<style scoped>

</style>