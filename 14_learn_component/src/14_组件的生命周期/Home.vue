<template>
    <div>
        <h2 ref="title">{{message}}</h2>

        <button @click="change">change</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                message:'hello',
                flag:true
            }
        },
        methods:{
            change(){
                if(this.flag===true){
                    this.message='emmm'
                    console.log(this.message);
                    this.flag=!this.flag
                }else{
                    this.message='hello'
                    this.flag=!this.flag
                    console.log(this.message)
                }
                
                
            }
        },
        beforeCreate(){
            console.log('home beforeCreate');
        },
        created(){
            console.log('home Create');
        },
        beforeMount(){
            console.log('home beforeMount');
        },
        mounted(){
            console.log('home mounted');
        },
        beforeUnmount() {
            console.log('home beforeUnmount')
        },
        unmounted() {
            console.log('home unmounted')
        },
        beforeUpdate(){
            console.log('home beforeUpdate')
            console.log(this.$refs.title.innerHTML)
        },
        updated(){
            console.log('home updated')
            console.log(this.$refs.title.innerHTML)
        },

        // 这两个函数是缓存函数 对应keep-alive 
        activated(){
            console.log('home activated')
        },
        deactivated(){
            console.log('home deactivated')
        }
    }
</script>

<style scoped>

</style>