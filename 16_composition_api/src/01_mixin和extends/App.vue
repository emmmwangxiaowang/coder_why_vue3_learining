<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">按钮</button>
    <about></about>
  </div>
</template>

<script>
  import About from './pages/About.vue'
export default {
  components:{
    About
  }
}
</script>

<style>

</style>
