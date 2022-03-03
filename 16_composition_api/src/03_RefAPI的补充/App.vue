<template>
    <div>
        <!-- <h2>{{info.name}}--{{info.age}}</h2> -->
        <h2>{{name}}--{{age}}</h2>
        <button @click="changeAge">修改age</button>
    </div>
</template>

<script>
    import  { reactive,toRefs,toRef} from 'vue'
    export default {
        
        setup () {
            // const info = reactive({name:"wang",age:21})
            // 解构
            const info = reactive({name:"wang",age:21})

            // toRefs: 将 所有的属性都转成ref 响应式对象,建立链接
            // let {name,age}=toRefs(info)

            // 2.toRef: 对其中一个属性进行转换ref, 建立链接
            let {name}=info
            
            // ref 只转换一个属性, 所以不用再对这个属性结构了
            // let {age}=toRef(info,"age")
            let age=toRef(info,"age")
            const changeAge=()=>{
                // info.age++
                info.age++
                console.log(age);
            }
            return {
                name,
                age,
                changeAge
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>