<script>
    import {h} from 'vue'

    
    export default {
        render(){
            return h("div",null,[
                h("h2",null,"hello world"),
                this.$slots.default ? this.$slots.default() : h("span",null,"hello world插槽默认值")
            ])
        }
    }
</script>

<style scoped>

</style>