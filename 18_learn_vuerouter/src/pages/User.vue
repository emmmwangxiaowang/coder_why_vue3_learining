<template>
    <div>
        <h2>User:{{$route.params.username}}--{{$route.params.id}}</h2>
    </div>
</template>

<script>
import{useRoute} from"vue-router"
    export default {
        created(){
            console.log(this.$route)
            console.log(this)
        },
        setup() {
            const route=useRoute();
            console.log(route);
        }
    }
</script>

<style scoped>

</style>