<template>
    <div>
        <button @click="loginClick">登录</button>
    </div>
</template>

<script>
    export default {
        setup() {
            
            const loginClick=()=>{
                window.localStorage.setItem('token','wang');

            }
            
            return{
                loginClick
            }
        }
    }
</script>

<style scoped>

</style>