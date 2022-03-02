<template>
    <div>
        <h2>{{message}}</h2>
        <h2>{{title}}</h2>
        <h2>当前计数:{{counter}}</h2>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String,
                required:true
            }
        },
        // 参数一: props 父组件传递过来的属性
        // setup(props,context) {
        //     console.log(props.message);
        //     console.log(context.attrs.id);
        //     console.log(context.slots);
        //     console.log(context.emit);
        // },
        // {attrs,slots,emit}  对 context 进行结构的写法
        setup() {
          
            let counter=100;

            // 局部函数
            const increment=()=>{
                counter++;
                console.log(counter);
            }
            return {
                 title:"hello home"
                 ,counter,
                 increment
            }
        }
    }
</script>

<style scoped>

</style>