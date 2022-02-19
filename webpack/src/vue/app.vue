<template>
    <h2>vue</h2>        
    <hello></hello>
</template>

<script>
    import hello from './hello.vue'

 export default{
       components:{
           hello
       },
       data() {
            return {
                title:''
            }
        }
    
    }
    
</script>
