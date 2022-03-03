<template>
    <div>
        <h2>{{firstName}}--{{lastName}}</h2>
        <h2>{{fullName}}</h2>
        <button @click="show">展示</button>
        <button @click="change">修改</button>
    </div>
</template>

<script>
import {ref,computed} from 'vue'
export default {
    setup () {
        let firstName=ref("wang")
        let lastName=ref("jiang")

        // const fullName=ref(firstName.value+lastName.value)

        // 用法一: 传入一个getter 函数
        // computed 返回值 是一个 ref 对象
        // const fullName =computed(()=>{
        //     return firstName.value+lastName.value
        // })

        // 用法二: 传入一个对象, 对象包含 getter/setter
        const fullName=computed({
            get:()=>{
                return firstName.value+" " +lastName.value
            },
            set:(newValue)=>{
                const names =newValue.split(" ")
                firstName.value=names[0]
                lastName.value=names[1]
            }
        })
        const show=()=>{
            console.log(fullName);
        }

        const change=()=>{
            // firstName.value="li"
            fullName.value="wang xiaowang"
            console.log(firstName)
        }

        return {
            firstName,
            lastName,
            fullName,
            show,
            change
        }
    }
}
</script>

<style lang="scss" scoped>

</style>