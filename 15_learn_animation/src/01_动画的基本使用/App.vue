<template>
    <div>
        <div>
            <button @click="change">显示|隐藏</button><br>
        </div>
        

        <!-- mode 有两个模式 in-out   out-in -->
        <!-- in-out 先出现, 再退出, 会出现多个元素 -->
        <!-- out-in 先退出,再出现 仅出现一个元素-->
        <transition name="wang" mode="out-in" appear="true">
            <component :is="isShow ? 'home' : 'about'"></component>
        </transition>
    </div>
</template>

<script>
    import Home from './pages/Home.vue'
    import About from './pages/About.vue'

    export default {
        components:{
            Home,
            About
        },
        data(){
            return {
                isShow:true
            }
        },
        methods:{
            change(){
                this.isShow=!this.isShow
                console.log(this.isShow)
            }
        }
    }
</script>

<style scoped>

    .title{
        display: inline-block;
    }

    #app{
        width:200px;
        margin:0 auto;
    }

    .wang-enter-from,
    .wang-leave-to{
        opacity: 0;
    }

    .wang-enter-active,
    .wang-leave-active{
        transition: opacity 1s ease
    }

    .wang-enter-active
    {
        animation:bounce 1s ease
    }
    .wang-leave-active{
        animation:bounce 1s ease reverse
    }
    @keyframes bounce {
        0%{
            transform:scale(0)
        }

        50%{
            transform: scale(1.2);
        }

        100%{
            transform: scale(1);
        }
    }
</style>