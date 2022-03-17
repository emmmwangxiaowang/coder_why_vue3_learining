<script>

    import {ref,h} from 'vue'

    export default{

        setup(){
            const counter=ref(0);

            // 直接再 setup 中返回 render 函数
            return ()=>{
                return h("div",{class:"app"},[
                h("h2",null,`当前计数:${counter.value}`),
                h("button",{
                    onClick:()=>counter.value++
                },"+1"),
                h("button",{
                    onClick:()=>counter.value--
                },"-1")
            ])
            }
        }
    }

</script>

<style  scoped>

</style>