<template>
    <div>
        <h2>总价值: {{$store.getters.totalPrice}}</h2>
        <h2>总价值: {{$store.getters.totalPriceCountN(1)}}</h2>
        <hr>
        <!-- <h2>{{sNameInfo}}</h2>
        <h2>{{sAgeInfo}}</h2> -->
        
        <h2>{{nameInfo}}</h2>
        <h2>{{ageInfo}}</h2>
        <hr>
     
            <button @click="$store.commit('increment')">+1</button>
            <button @click="$store.commit('increment')">-1</button>
            <button @click="addTen"> +n</button>
            <h2>counter:{{$store.state.counter}}</h2>
        <hr>
    </div>
</template>

<script>
import{useGetters} from '../hooks/useGetters'
import {INCREMENT_N} from '../store/mutation-types'
    export default {
    //   computed:{
    //       // 和 mapStore 相似 都可以解析 数组和对象
    //       ...mapGetters({
    //           sNameInfo:"nameInfo",
    //           sAgeInfo:"ageInfo"
    //       }),
    //       ...mapGetters(["nameInfo","ageInfo"])
    //   }

    methods:{
        addTen(){
            // this.$store.commit('incrementN',{n:10,name:"王",age:21})
            this.$store.commit({
                type:INCREMENT_N,
                n:10,
                name:"wang",
                age:21
            })
        }
    },

    setup() {
        const storeGetters=useGetters(["nameInfo","ageInfo"])
        
        return {
            ...storeGetters
        }
    }
    }
</script>

<style scoped>

</style>