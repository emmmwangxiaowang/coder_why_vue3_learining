<script>
    import {ref,h} from 'vue'
    import HelloWorld from './HelloWorld.vue'

    export default{

       render(){
           return h(HelloWorld,null,{
               // 插槽是一个函数
               default:props=> h("span",null,"app->heloWorld")
           })
       }
    }

</script>

<style  scoped>

</style>