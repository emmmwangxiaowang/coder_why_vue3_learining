<template>
    <div>
        <!-- 绑定到一个元素上 -->
        <h2 ref="title">emmm</h2>
        <button @click="btnClick">获取元素</button>

        <nav-bar ref="navBar"></nav-bar>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'
    export default {
        components:{
            NavBar
        },
        methods:{
            btnClick(){
                // 获取绑定的元素
                console.log(this.$refs.title);
                console.log(this.$refs.navBar.message);
                this.$refs.navBar.say()

                console.log(this.$refs.navBar.$el);
            }
        }
    }
</script>

<style scoped>

</style>