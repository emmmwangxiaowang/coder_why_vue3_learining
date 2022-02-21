<template>
    <div>
        <child-cpn>
            <!-- 虽然插槽 中的 标签 最后是放到 子组件中 -->
            <!-- 但是 其中标签访问的数据 就是本 标签定义 组件中的数据 -->
            <button>{{title}}</button>
        </child-cpn>

        <shwo-names :names="names">
            <template #="slotProps">
               <button>{{slotProps.item}}--{{slotProps.index}}</button>
            </template>
        </shwo-names>
        
        <shwo-names :names="names">
            <template #="slotProps">
               <strong>{{slotProps.item}}--{{slotProps.index}}</strong>
            </template>
        </shwo-names>
    </div>
</template>

<script>
    import ChildCpn from './ChildCpn.vue'
import ShwoNames from './ShwoNames.vue'
    export default {
    components: { ChildCpn, ShwoNames },
    data(){
        return {
            title:"wang",
            names:['a','b','c','d']
        }
    }
        
    }
</script>

<style scoped>

</style>