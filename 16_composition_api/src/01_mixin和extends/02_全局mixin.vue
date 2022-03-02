<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
  </div>
</template>

<script>
import {demoMixin} from './mixins/demoMixin'
export default {
    mixins:[demoMixin],
  data(){
    return {
      message:"hello world"
    }
  },
  methods:{
    // 方法重名会覆盖, 以组件中为主
    foo(){
      console.log('app foo');
    }
  },
  created(){
    console.log("App created 执行了");
  }
}
</script>

<style>

</style>
