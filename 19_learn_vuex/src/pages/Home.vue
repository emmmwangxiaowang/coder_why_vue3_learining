<template>
    <div>
       <h2>{{homeCounter}}</h2>
       <h2>{{doubleHomeCounter}}</h2>

        <hr>
        <h2>{{ $store.getters['home/doubleHomeCounter']}}</h2>
        <button @click="homeIncrement">home +2</button>
        <button @click="homeIncrementAction">home +1</button>
    </div>
</template>

<script>
// import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'

import{useGetters,useState} from '../hooks/index'

// 当同一个模块引用较多的时候也可以这样写使用 ,相当于绑定指定模块
import {createNamespacedHelpers} from 'vuex'
const {mapState,mapMutations,mapGetters,mapActions} = createNamespacedHelpers('home')
    export default {
        // computed:{
        //     // 当引用多个模块下的数据的时候使用
        //     // ...mapState({
        //     //     homeCounter:state=>state.home.homeCounter
        //     // }),
        //     // 指定模块下的数据, 当引用同一个模块数据较多的时候使用
        //     ...mapState('home',{
        //         homeCounter:state=>state.homeCounter
        //     }),
        //     ...mapGetters({
        //         doubleHomeCounter:'home/doubleHomeCounter'
        //     })
        // },
        // methods:{
        //     ...mapMutations(['home/increment']),
        //     ...mapActions(['home/incrementAction'])
            
        // },
        setup() {
            const state=useState('home',['homeCounter'])
            const getters=useGetters('home',['doubleHomeCounter'])
            
            const mutations=mapMutations(['increment'])
            const actions=mapActions(['incrementAction'])

            return {
                ...state,
                ...getters,
                ...mutations,
                ...actions
            }
            
        }
    }
</script>

<style scoped>

</style>