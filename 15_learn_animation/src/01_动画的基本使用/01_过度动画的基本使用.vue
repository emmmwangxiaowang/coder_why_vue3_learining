<template>
    <div>
        <button @click="change">显示|隐藏</button>

        <!-- transition 组件会自动在合适的时候将对应的类 添加/删除 到组件中 -->
        <transition name="wang">
            <h2 v-if="isShow">hello world</h2>
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

    /* 
        enter-from enter-to
        进场动画, 透明度从 0 到 1

        leave-from leave-to
        离场动画, 透明度从 1 到 0
    */
    .wang-enter-from{
        opacity: 0;
    }

    .wang-enter-to{
        opacity:1;
    }

    .wang-leave-from{
        opacity: 1;
    }

    .wang-leave-to{
        opacity: 0;
    }
    /* .wang-enter-from,
    .wang-leave-to{
        opacity:0;
    }

    .wang-enter-to,
    .wang-leave-from{
        opacity: 1;
    } */


    /* 
        定义进入/离开过渡生效时的状态。
        在整个进入/离开过渡的阶段中应用，在元素被插入/删除之前生效，在过渡/动画完成之后移除。
        这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
    */
    .wang-enter-active,
    .wang-leave-active{
        transition: opacity 2s ease;
    }
</style>