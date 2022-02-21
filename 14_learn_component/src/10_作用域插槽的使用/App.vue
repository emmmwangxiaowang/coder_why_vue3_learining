<template>
    <div>
        <child-cpn>
            <!-- 虽然插槽 中的 标签 最后是放到 子组件中 -->
            <!-- 但是 其中标签访问的数据 就是本 标签定义 组件中的数据 -->
            <button>{{title}}</button>
        </child-cpn>
    </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue'
    export default {
    components: { ChildCpn },
    data(){
        return {
            title:"wang"
        }
    }
        
    }
</script>

<style scoped>

</style>