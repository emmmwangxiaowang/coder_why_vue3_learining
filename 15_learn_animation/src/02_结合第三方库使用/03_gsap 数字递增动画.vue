<template>
    <div class="app">
        <input type="number" step="100" v-model="counter">
        <h2>{{showCounter}}</h2>
        <h2>{{showNumber.toFixed(0)}}</h2>
    </div>
</template>

<script>
    import gsap from 'gsap'


    export default {
        data(){
            return {
                counter:0,
                showNumber:0
            }
        },
        methods:{},
        computed:{
            showCounter(){
                // toFixed 中的参数 表示 小数点后面的位数
                return this.showNumber.toFixed(0)
            }
        },
        watch:{
            counter(newValue){
                // this.showNumber=newValue
                gsap.to(this,{
                    duration:1,showNumber:newValue
                })
            }
        }
    }
</script>

<style scoped>

   
</style>