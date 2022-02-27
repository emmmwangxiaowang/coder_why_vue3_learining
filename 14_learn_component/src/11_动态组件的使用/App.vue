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

        <!-- 在 age 那里 用 : 进行绑定, 20 会被识别承诺 Number 类型 不然就是 string -->
        <!-- keep-alive 保持组件缓存 -->
        <!-- 如果所有页面都需要缓存,就不需要设置 include 属性, -->
        <!-- 如果是某几个页面需要缓存,就在需要缓存的几个页面中添加name属性 并在 keep-alive中 添加 include 属性 -->
        <keep-alive include="Home,About">
            <component :is="currentTab"
                name='wang'
                :age='20'
                @pageclick='pageclick'></component>
        </keep-alive>
        
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
            },
            pageClick(){
                console.log('page内部发生了点击')
            }
        }
    }
</script>

<style scoped>
    .active{
        color: cyan;
    }
</style>