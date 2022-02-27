<template>
    <div>
        App 组件
        <home></home>

        <!-- 第三种 suspense -->
        <suspense>
            <!-- 默认'插槽' -->
            <template #default>
                <async-category></async-category>
            </template>

            <!-- 应急'插槽'-->
            <template #fallback>
                <loading-vue></loading-vue>
            </template>
        </suspense>
    </div>
</template>

<script>
    import {defineAsyncComponent} from 'vue'
    import Error from './Error.vue'
    import Home from './Home.vue'
    import LoadingVue from './Loading.vue'
    // import AsyncCategory from './AsyncCategory.vue'

    // 第一种 注册异步组件
    const AsyncCategory =defineAsyncComponent(()=>import('./AsyncCategory.vue'))

    // 第二种注册异步组件
    // 通过传递一个对象
    // const AsyncCategory =defineAsyncComponent({
    //     loader:()=>import('./AsyncCategory.vue'),
    //     // 占位组件, category 组件没有加载出来是的占位组件
    //     loadingComponent:LoadingVue,
    //     errorComponent:Error,
    //     // 在显示 LoadingComponent 组件之前, 等待多长时间
    //     delay:2000,
    //     /* 
    //         err: 错误信息,
    //         retry: 函数, 调用 retry 尝试重新加载
    //         attemps: 记录尝试的此时  
    //     */
    //     onError:function(err,retry,fail,attemps){
    //         console.log(err);
    //     }
    // })
    
    export default {
    components: { Home, AsyncCategory,LoadingVue },
        
    }
</script>

<style scoped>

</style>