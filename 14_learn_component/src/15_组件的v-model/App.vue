<template>
    <div>
        <!-- 元素上使用v-model -->
        <!-- <input type="text" v-model="message"> -->
        <!-- v-model 做了两件事 -->
        <!-- 1. 绑定数据 -->
        <!-- 2. 添加点击事件, 修改绑定数据 -->
        <!-- $event 是 input 的事件 -->
        <!-- <input type="text" :value="message" @input="message=$event.target.value"> -->

        <h2>{{message}}</h2>
        <!-- 组件上使用v-model -->
        <hy-input v-model="message" v-model:title="title"></hy-input>
        <!-- <hy-input :modelValue="message" @update:model-value="message=$event"></hy-input> -->

        <h2>{{title}}</h2>
    </div>
</template>

<script>
    import HyInput from './HyInput.vue'
    export default {
    components: { HyInput },
        data(){
            return {
                message:'Hello World',
                title:'title'
            }
        }
    }
</script>

<style scoped>

</style>