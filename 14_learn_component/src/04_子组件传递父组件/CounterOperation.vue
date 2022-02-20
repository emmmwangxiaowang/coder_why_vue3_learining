<template>
    <div>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>

        <input type="text" v-model="num">
        <button @click="incrementN">+n</button>
    </div>
</template>

<script>
    export default {
        // emits:['add','sub'],
        // 对象写法的目的是为了进行参数的验证
        emits:{
            add:null,
            sub:null,
            addN:(num,name)=>{
                // console.log(num) ;
                // console.log('---'+typeof(num));     
                // console.log(name);

                // 对参数进行验证
                if(num>10){
                    return true;
                }else{
                    return false;
                }
         }
        },
        data(){
            return {
                num:0
            }
        },
        methods:{
            increment(){
                console.log('+1');
                this.$emit('add');
            },
            decrement(){
                console.log('-1');
                this.$emit('sub');
            },
            incrementN(){
                this.$emit('addN',parseInt(this.num),'fda')
            }
        }
    }
</script>

<style scoped>

</style>