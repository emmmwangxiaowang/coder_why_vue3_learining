<template>
    <div>
        <h2>hello world</h2>
        <h2>{{message}}</h2>
        <button @click="emitEvent">发送事件</button>
    </div>
</template>

<script setup>
    import {defineProps,defineEmits} from 'vue'

    const props = defineProps({
        message:{
            type:String,
            default:"emmm"
        }
    })

    const emit=defineEmits(["increment","decrement"]);
    const emitEvent=()=>{
        emit('increment',"100000");
    }

</script>

<style scoped>

</style>