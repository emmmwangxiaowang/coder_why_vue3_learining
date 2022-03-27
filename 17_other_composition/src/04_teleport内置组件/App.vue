<template>
    <div class="app">
        <teleport to="body">
            <h2>当前计数:</h2>
            <button>+1</button>
        </teleport>
        
    </div>
</template>

<script>
import {getCurrentInstance} from 'vue'

    export default {

        setup(){
            const instance =getCurrentInstance();
            console.log(instance.appContext.config.globalProperties.$name)
        },

        mounted(){
            // console.log(this.$name)
        }
    }
</script>

<style scoped>

</style>