<template>
    <div>
        <nav-bar :name="name">

            <!-- v-slot: 可以换成 # -->

            <!-- <template v-slot:left>           
                <button>左边</button>
            </template> -->
            <template #left>           
                <button>左边</button>
            </template>
            <template v-slot:center>        
                <h2>标题</h2>
            </template>
            <template v-slot:right>
                <button>右边</button>
            </template>
            <!-- 加一个 [] 会取 data中的值 -->
             <template v-slot:[name]>
                <i>wang</i>
            </template>

        </nav-bar>
    </div>
</template>

<script>
    import NavBar from './NavBar.vue'
    export default {
        components: { NavBar },
        data(){
            return {
                name:'wang'
            }
        }
    }
</script>

<style scoped>

</style>