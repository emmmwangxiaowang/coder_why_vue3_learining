<template>
  <div>
    <!-- <button>首页</button>
    <button>关于</button> -->

    <!-- v-slot: 作用域插槽  props 定义了一些属性, 方法 -->
    <!-- custom:  使 router-link 默认的标签消失, 其中的标签类型可以自定义 -->
    <!-- props: href 跳转的来链接-->
    <!-- props：route对象 -->
    <!-- props: navigate 导航函数 -->
    <!-- props： isActive 是否当前那处于活跃的状态 -->
    <!-- props： isExactActive 是否当前处于精确的活跃状态 -->

    <router-link to="/home" v-slot="props" custom>
      <nav-bar title="首页"/>
      <!-- <span>{{props.route}}</span> -->
      <button @click="props.navigate">{{props.href}}</button>
      <span :class="{'active':props.isActive}">{{props.isAcitve}}</span>
      <!-- <span>{{props}}</span> -->
    </router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/user/wang/101">用户</router-link>
    <router-link to="/category">分类</router-link>

    <button @click="jumpToAbout">关于</button>

    <!-- 作用域插槽: 组件想向插槽传递数据的时候就用 作用域插槽 -->
    <router-view v-slot="props"> 
      <!-- <transition name="wang"> -->
        <keep-alive>
              <component :is="props.Component"></component>
        </keep-alive>
      <!-- </transition> -->
    </router-view>
  </div>
</template>

<script>
import {useRouter} from 'vue-router'
import NavBar from './components/NavBar.vue';
  export default {
  components: { NavBar },
    // methods:{
    //   jumpToAbout(){
    //     this.$router.push("/about")
    //   }
    // }

    setup() {
      const router=useRouter();

      const jumpToAbout=()=>{
        // 通过将一个对象压入历史栈中,传递参数
        router.push({
          path:"/about",
          // 参数
          query:{
            name:"wang",
            age:"21"
          }
        });
      };
      return{
        jumpToAbout
      }
    }
  }
</script>

<style scoped>

  .router-link-active{
    color: cyan;
  }


  .wang-enter-from,
  .wang-leave-to{
    opacity: 0;
  }

  .wang-enter-active,
  .wang-leave-active{
    transition: opacity 1s ease;
  }

</style>