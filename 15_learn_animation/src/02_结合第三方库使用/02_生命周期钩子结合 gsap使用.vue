<template>
    <div>
        <div>
            <button @click="change">显示|隐藏</button><br>
        </div>
        
        <transition @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @afterLeave="afterLeave"
                    :css="false">
            <h2 class="title" v-if="isShow">emmm</h2>
        </transition>
    </div>
</template>

<script>
    import gsap from 'gsap'


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
            },
            beforeEnter(){
                console.log('beforeEnter');
                
            },enter(el,done){
                console.log('enter');
                gsap.from(el,{
                    scale:0,
                    x:200,
                    onComplete:done
                })
            },afterEnter(el,done ){
                console.log('afterEnter');
                gsap.to(el,{
                    scale:1,
                    x:200,
                    onComplete:done
                })
            },beforeLeave(){
                console.log('beforeLeave');
            },leave(){
                console.log('leave');
            },afterLeave(){
                console.log('afterLeave');
            },
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