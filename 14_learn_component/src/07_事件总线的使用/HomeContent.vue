<template>
    <div>
    </div>
</template>

<script>
    import emitter from './utils/eventbus'
    export default {
        created(){
            emitter.on('wang',(info)=>{
                console.log('监听到了事件')
                console.log(info)
            }),

            emitter.on('jiang',(info)=>{
                console.log('jiang')
                console.log(info)
            }),

            emitter.on('*',(type,info)=>{
                console.log('* '+type)
                console.log(info)
            })

            // 取消监听的两种方法
            emitter.all.clear()

            function onFoo(){}
            emitter.on('foo',onFoo)
            emitter.off('foo',onFoo)
        }
    }
</script>

<style scoped>

</style>