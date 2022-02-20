<template>
    <div>
        <h2>当前计数为:{{counter}}</h2>
        <counter-operation @addN="incrementN" @add="addOne" @sub="subOne"></counter-operation>
    </div>
</template>

<script>
import CounterOperation from './CounterOperation.vue'
    export default {
  components: { CounterOperation },
        data(){
            return {
                counter:0
            }
        },methods:{
            addOne(){
                this.counter++;
            },
            subOne(){
                this.counter--;
            },
            incrementN(num){
                console.log(typeof(num))
                this.counter=this.counter+num
            }
        }
    }
</script>

<style scoped>

</style>