<template>
    <div>
        <button @click="btnClick">按钮点击</button>
    </div>
</template>

<script>
    import emitter from './utils/eventbus'
    export default {
        methods:{
            btnClick(){
                console.log('about 点击');
                emitter.emit('wang',{name:'wang',age:20})
                emitter.emit('jiang',{name:'jiang',age:20})
            }
        }
    }
</script>

<style scoped>

</style>