<template>


  <div>
      <home></home>

    <h2>{{$store.state.counter}}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
import {state} from 'vuex'
import Home from './pages/Home.vue'
  export default {


    components:{
      Home
    },
    // setup() {

 
   //   const state=useState({
    //     counter:state=>state.counter
    //   })


    //   const increment=()=> console.log(counter)
    //   const decrement=()=> console.log(counter);
      
      
      
    //   return{
    //     increment,decrement,...state
    //   }
    // }

    methods:{
      increment(){
        this.$store.commit("increment")
      },
      decrement(){
        this.$store.commit("decrement")
      }
    }


    
  }
</script>

<style scoped>

</style>