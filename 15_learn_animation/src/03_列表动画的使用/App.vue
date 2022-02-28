<template>
    <div>
       <input type="text" v-model="keyword">
       <transition-group tag="ul" name="wang" :css="false"
                         @before-enter="beforeEnter"
                         @enter="enter"
                         @leave="leave">
            <li  v-for="(item,index) in showNames" :key="item" :data-index="index">{{item}}</li>
       </transition-group>
    </div>
</template>

<script>
   import gsap from 'gsap'
    export default {
        data(){
            return {
                names:['1','b','c','d'],
                keyword:""
            }
        },
        methods:{
            beforeEnter: (el) => {
                el.style.opacity=0;
                el.style.heght=0
            },
            enter(el,done){
                gsap.to(el,{
                    opacity:1,
                    height:"1.5em",
                    delay:el.dataset.index*0.5
                    ,onComplete:done
                })
            },
            leave(el,done){
                gsap.to(el,{
                    opacity:0,
                    height:"0",
                    delay:el.dataset.index*0.5,
                    onComplete:done
                })
            }
        },
        computed:{
            showNames(){
                // indexOf('') 如果找不到的话 返回值就是 -1 , 所以这句话是过滤掉不包含this.keyword的选项
                return this.names.filter(item=>item.indexOf(this.keyword)!==-1)
            }
        }
    }
</script>

<style scoped>
    .wang-enter-from,
    .wang-leave-to{
        opacity: 0;
    }

    .wang-enter-active,
    .wang-leave-active{
        transition: opacity 1s ease;
    }
</style>