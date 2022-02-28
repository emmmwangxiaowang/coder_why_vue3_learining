<template>
    <div>
        <div>
            <button @click="change">显示|隐藏</button><br>
        </div>
        

        <!-- mode 有两个模式 in-out   out-in -->
        <!-- in-out 先出现, 再退出, 会出现多个元素 -->
        <!-- out-in 先退出,再出现 仅出现一个元素-->
        <transition enter-active-class="animate__animated animate__fadeInDown"
                    leave-active-class="animate__animated animate__flipInY">
            <h2 class="title" v-if="isShow">emmm</h2>
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
    
    .animate__flipInY{
        animation-direction: reverse;
    }
    
</style>