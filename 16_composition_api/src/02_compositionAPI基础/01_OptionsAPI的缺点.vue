<template>
    <div>
        <h2>{{counter}}</h2>
        <h2>{{doubleCounter}}</h2>
        <button @click="increament">-1</button>
        <button @click="decreament">+1</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                counter:0
            }
        },
        methods:{
            increament(){
                this.counter+=1
            },
            decreament(){
                this.counter-=1
            }
        },
        computed:{
            doubleCounter(){
                return this.counter*2
            }
        }
    }
</script>

<style scoped>

</style>