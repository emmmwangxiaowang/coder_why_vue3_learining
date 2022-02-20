<template>
    <div class="tab-control">
        <div class="tab-control-item" 
        v-for="(title,index) in titles" 
        :class="{active:currentIndex===index}"
        @click="itemClick(index)"
        :key="title">
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        emits:['titleClick'],
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },data(){
            return {
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                console.log(this.currentIndex +' ' +index)
                this.currentIndex=index
                console.log(this.currentIndex +' ' +index)
                this.$emit('titleClick',this.currentIndex)
            }
        }
    }
</script>

<style scoped>
    .tab-control{
        display: flex;
    }
    .tab-control-item{
        flex: 1;
        text-align: center;
    }
    .tab-control-item.active{
       color:cyan
    }
    .tab-control-item.active span{
       border-bottom: 5px solid teal;
       padding: 5px 10px;
    }
</style>