<template>
    <h2 v-format-time="'YYYY/MM/DD'">{{timestamp}}</h2>
</template>

<script>

export default {
    setup() {
        const timestamp=Date.parse(new Date())
        
        return{
            timestamp
        }
    }
}
</script>

<style lang="scss" scoped>

</style>