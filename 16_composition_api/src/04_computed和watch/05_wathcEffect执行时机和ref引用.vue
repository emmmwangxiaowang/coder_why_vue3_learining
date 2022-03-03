
<template>
    <div>
        <h2 ref="title">emmm</h2>
    </div>
</template>

<script>
import {ref,watchEffect} from 'vue'
export default {
    setup () {
       // 以前使用 refs 来获取 Dom 元素
       const title =ref(null)

        watchEffect(()=>{
            console.log(title.value);
        },{
            // pre 默认值, 提前执行
            // psot 等 DOM 挂载完后执行
            flush:"post"
        })

        return {
            title
        }
    }
}
</script>

<style lang="scss" scoped>

</style>