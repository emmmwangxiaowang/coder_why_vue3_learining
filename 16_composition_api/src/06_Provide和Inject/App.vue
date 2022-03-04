<template>
    <div>
        <h2>{{counter}} </h2>
        <home></home>
        <button @click="increment">counter++</button>
    </div>
</template>

<script>
import {ref,provide,readonly} from 'vue'
import Home from './Home.vue'
export default {
  components: { Home },
    setup () {
       Home   
       

        // 开发中 尽量用 ref , reactive 不好抽离
        const name=ref("wang")
        let counter=ref(100)

        // 父组件 提供的数据用 readonly 包裹, 防止 子组件修改数据
        provide("name",readonly(name))
        provide("counter",readonly(counter))

        const increment=()=>{
            counter.value++
            console.log(counter)
        }

        return {
            increment,
            counter,
            name
        }
    }
}
</script>

<style lang="scss" scoped>

</style>