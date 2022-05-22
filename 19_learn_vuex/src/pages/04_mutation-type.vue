<template>
    <div>
       <h2>当前计数为: {{$store.state.counter}}</h2>
       <hr>
            <button @click="increment">+1</button>
            <button @click="decrement">-1</button>
            <button @click="INCREMENT_N({n:10})">+10</button>
       <hr>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
import {INCREMENT_N} from '../store/mutation-types'
    export default {
        // methods:{
        //     ...mapMutations(["increment","decrement",INCREMENT_N]),

        //     //和其它属性一样的 , 通过传入对象 设置自定义方法名
        //     ...mapMutations({
        //         add:"increment"
        //     })
        // },

        setup() {
            //为啥 mutatinos 不需要做解析? 因为 mutations 管理的是函数, 而调用mutation的是点击事件之类的, 它们的请求也是需要函数, 所以mutations 不需要进一步转换
            const storeMutations=mapMutations(["increment","decrement",INCREMENT_N]);
            return{
                ...storeMutations
            }
            
        }

    }
</script>

<style scoped>

</style>