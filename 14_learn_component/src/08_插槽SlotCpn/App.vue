<template>
    <div>
        <my-slot-cpn>
            <button>按钮</button>
        </my-slot-cpn>

         <my-slot-cpn>
            <h2>文本</h2>
            <my-button></my-button>
        </my-slot-cpn>

        <my-slot-cpn>
            
        </my-slot-cpn>
      
      <!-- 插入了很多的内容 -->
      <my-slot-cpn>
          <h2>emmm</h2>
          <button>按钮</button>
          <strong>strong</strong>
      </my-slot-cpn>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MySlotCpn from './MySlotCpn.vue'
    export default {
  components: { MySlotCpn, MyButton },
        
    }
</script>

<style scoped>

</style>