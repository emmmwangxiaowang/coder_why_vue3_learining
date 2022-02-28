<template>
    <div>
        <div>
            <button @click="change">显示|隐藏</button><br>
        </div>
        

        <!-- transition 组件会自动在合适的时候将对应的类 添加/删除 到组件中 -->

        <!-- 当 transition 和 animation 的时间不一样的时候, 在 transition 的属性里面加一个type属性 设置为 时间较长的一个 -->
        <!-- :duration 显式指定动画时间 可以设置两种类型的值 优先级大于在css中设置的时间-->
        <!-- number 类型: 同时设置进入和离开的过度时间 -->
        <!-- object 类型: 分别设置进入和离开的过度时间 {enter:800,leave:500} -->
        <transition name="wang" type="transition" :duration="1000">
            <h2 class="title" v-if="isShow">hello world</h2>
        </transition>
    </div>
</template>

<script>
    export default {
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
        transition: opacity 2s ease
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