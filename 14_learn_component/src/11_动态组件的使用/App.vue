<template>
    <div>
        <button v-for="(item,index) in tabs" :key="item" @click='itemClick(item)' :class="{active:currentTab===item}">{{item}}</button>

        <!-- 1. 通过 v-if 来实现 -->
        <!-- <template v-if="currentTab=== 'Home'">
            <home></home>
        </template>
        <template v-else-if="currentTab=== 'About'">
            <about></about>
        </template>
        <template v-if="currentTab=== 'Category'">
            <category></category>
        </template> -->

        <!-- 2. 通过动态组件来实现 -->

        <component :is="currentTab"></component>
    </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'
    export default {
    components: { Category, About,Home },
        data(){
 
            return {
                tabs:['Home','About','Category'],
                currentTab:'Home'
            }
        },methods:{
            itemClick(item){
                console.log(item);
                this.currentTab=item
            }
        }
    }
</script>

<style scoped>
    .active{
        color: cyan;
    }
</style>