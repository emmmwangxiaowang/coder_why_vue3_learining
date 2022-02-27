<template>
    <div>
        <button @click="change">显示|隐藏</button><br>

        <!-- transition 组件会自动在合适的时候将对应的类 添加/删除 到组件中 -->
        <transition name="wang">
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

    .app{
        width:200px;
        margin:0 auto
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