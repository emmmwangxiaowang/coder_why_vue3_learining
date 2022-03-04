<template>
    <div>
        <h2>home</h2>
        <button @click="homeIncrement">home+1</button>

        <h2>{{name}}</h2>
        <h2>{{counter}}</h2>

    </div>
</template>

<script>
import {inject} from 'vue'
    export default {
        setup(props) {
            const name = inject("name","jiang");
            const counter = inject("counter")

            const homeIncrement=()=>{
                counter.value++
            }

            return {
                name,
                counter,
                homeIncrement
            }
          
            
        }
    }
</script>

<style scoped>

</style>