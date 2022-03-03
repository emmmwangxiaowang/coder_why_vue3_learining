<template>
    <div>
        <h2>{{info}}</h2>
        <button @click="changeInfo">修改info</button>
    </div>
</template>

<script>
    import  { ref,shallowRef,triggerRef} from 'vue';
    import debounce from './hook/useDebounceRef'
    export default {
        
        setup () {
            // ref 默认是深层响应式
            // const info=ref({name:"wang"})

            // 浅层响应式
            // const info=shallowRef({name:"wang"})
            const info=shallowRef({name:"wang"})

            const changeInfo =()=>{
                info.value.name="jiang";

                // 手动触发 和 sahllowRef 相关联的副作用
                triggerRef(info);
            }
            return {
                info,
                changeInfo
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>