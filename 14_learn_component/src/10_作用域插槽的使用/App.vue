<template>
    <div>
        <child-cpn>
            <!-- 虽然插槽 中的 标签 最后是放到 子组件中 -->
            <!-- 但是 其中标签访问的数据 就是本 标签定义 组件中的数据 -->
            <button>{{title}}</button>
        </child-cpn>

        <shwo-names :names="names">
            <!-- 插槽名不写 默认为 default -->
            <!-- #="slotProps" 是 v-slot:=slotProps 缩写 -->
            <!-- 这个 是获取 插槽 定义方 传过来的值 -->
            <template #="slotProps">
               <button>{{slotProps.item}}--{{slotProps.index}}</button>
            </template>
        </shwo-names>

        <!-- 独占默认插槽缩写 只有默认插槽, 不是具名插槽 -->
        <!-- 如果又其它的具名插槽, 呢么默认插槽也必须使用template来编写 -->
        <shwo-names :names="names" #="slotProps">
               <button>{{slotProps.item}}--{{slotProps.index}}</button>
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