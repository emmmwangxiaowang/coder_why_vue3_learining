<template>
    <div>
        <!-- 1. 默认绑定和事件触发 -->
        <button @click="btnClick">hyInput按钮</button>
        <h2>HyInput的message:{{modelValue}}</h2>

        <!-- 2. 通过 input -->
        <input type="text" :value="modelValue" @click="btnClick">原生<br>
        <!-- 3. 绑定到 props 中是不对的 不能直接修改 父组件传下来的值! -->
        <input type="text" v-model="modelValue"> props
        <br>

        <!-- 4. 通过计算属性来实现-->
        <input type="text" v-model="value">计算属性
        <input type="text" v-model="wang">计算属性 2
    </div>
</template>

<script>
    export default {
        props:{
            modelValue:String,
            title:String
        },
        emits: ['update:modelValue','update:title'],
        computed:{
            value:{
                set(value){
                    this.$emit('update:modelValue',value)
                },
                get(){
                    return this.modelValue
                }
            },wang:{
                set(title){
                    this.$emit('update:title',title)
                },
                get(){
                    return this.title
                }
            }
        },
        methods:{
            btnClick(event){
                console.log('emmm')
                // 原生的 input 获取 值的时候 就用 event.target.value
                this.$emit('update:modelValue',event.target.value)   
            } 
        },
        
    }
</script>

<style scoped>

</style>