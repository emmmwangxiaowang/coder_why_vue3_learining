<template>
    <div>
        <input type="text" v-model="message"/>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    import DebounceRef from './hook/useDebounceRef'
    export default {
        
        setup () {
            const message=DebounceRef("hello world")
            

            return {
                message
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>